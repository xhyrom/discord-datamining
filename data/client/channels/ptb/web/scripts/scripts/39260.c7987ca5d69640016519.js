(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39260"], {
        472573: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var i = n("356056"),
                r = n("324415");
            n("191489"), n("357629");
            var u = n("454836"),
                a = n("312916"),
                l = n("244180"),
                o = n("929748"),
                d = n("731865"),
                c = n("561427"),
                s = n("389920"),
                f = n("467006"),
                _ = {
                    updateActivity(t) {
                        var e = t.applicationId,
                            n = t.distributor,
                            i = t.shareActivity,
                            r = t.token,
                            l = t.duration,
                            o = void 0 === l ? 0 : l,
                            d = t.closed;
                        a.default.wait(function() {
                            return a.default.dispatch({
                                type: "ACTIVITY_UPDATE_START",
                                applicationId: e,
                                duration: o,
                                distributor: n
                            })
                        }), u.default.post({
                            url: f.Endpoints.ACTIVITIES,
                            body: {
                                application_id: e,
                                token: void 0 === r ? null : r,
                                duration: o,
                                share_activity: i,
                                distributor: n,
                                closed: void 0 !== d && d
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(function(t) {
                            var i = t.body.token;
                            a.default.dispatch({
                                type: "ACTIVITY_UPDATE_SUCCESS",
                                applicationId: e,
                                token: i,
                                duration: o,
                                distributor: n
                            })
                        }).catch(function() {
                            a.default.dispatch({
                                type: "ACTIVITY_UPDATE_FAIL",
                                applicationId: e
                            })
                        })
                    },
                    sendActivityInvite(t) {
                        var e = t.channelId,
                            n = t.type,
                            i = t.activity,
                            r = t.content,
                            u = t.location,
                            a = d.default.getChannel(e);
                        if (null == a) return Promise.resolve(null);
                        var c = o.default.parse(a, null != r ? r : "");
                        return s.default.sendMessage(a.id, c, !1, {
                            activityAction: {
                                type: n,
                                activity: i
                            }
                        }).then(function(t) {
                            return l.default.trackWithMetadata(f.AnalyticEvents.INVITE_SENT, {
                                location: u,
                                invite_type: i.type === f.ActivityTypes.LISTENING ? f.LoggingInviteTypes.SPOTIFY : f.LoggingInviteTypes.APPLICATION,
                                application_id: i.application_id,
                                guild_id: a.getGuildId(),
                                channel_id: a.id,
                                message_id: null != t ? t.body.id : null
                            }), Promise.resolve(a)
                        }, function(t) {
                            return Promise.reject(t)
                        })
                    },
                    sendActivityInviteUser(t) {
                        var e = t.userId,
                            n = t.type,
                            i = t.activity,
                            r = t.content,
                            u = t.location,
                            a = this;
                        return c.default.ensurePrivateChannel(e).then(function(t) {
                            return a.sendActivityInvite({
                                channelId: t,
                                type: n,
                                activity: i,
                                content: r,
                                location: u
                            })
                        })
                    },
                    getJoinSecret: (t, e, n, a, l) => (0, i._)(function() {
                        var i;
                        return (0, r._)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return i = {}, null != a && (i.channel_id = a), null != l && (i.message_id = l), [4, u.default.get({
                                        url: f.Endpoints.USER_ACTIVITY_JOIN(t, e, n),
                                        retries: 3,
                                        query: i
                                    })];
                                case 1:
                                    return [2, r.sent().body.secret]
                            }
                        })
                    })()
                }
        },
        885869: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return P
                }
            });
            var i = n("356056"),
                r = n("324415");
            n("191489"), n("357629"), n("996173"), n("47120"), n("917168"), n("301563"), n("411104"), n("814951"), n("653041");
            var u = n("664751"),
                a = n("454836"),
                l = n("312916"),
                o = n("928484"),
                d = n("148934"),
                c = n("143369"),
                s = n("703229"),
                f = n("709861"),
                _ = n("919866"),
                E = n("599027"),
                p = n("945253"),
                A = n("984362"),
                I = n("827551"),
                v = n("501769"),
                T = n("472573"),
                h = n("536266"),
                C = n("850675"),
                S = n("467006"),
                y = n("326130"),
                m = n("30175");

            function g(t) {
                var e = t.applicationId,
                    n = t.secret,
                    i = t.channelId,
                    r = t.intent,
                    u = void 0 === r ? y.ActivityIntent.PLAY : r,
                    a = t.embedded,
                    o = void 0 !== a && a,
                    d = t.analyticsLocations;
                N(e, null, i, o, void 0 === d ? [] : d).then(function() {
                    return I.default.waitConnected(e)
                }).then(function() {
                    return Promise.race([I.default.waitSubscribed(e, S.RPCEvents.ACTIVITY_JOIN)])
                }).then(function() {
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN",
                        applicationId: e,
                        secret: n,
                        intent: u,
                        embedded: o
                    })
                }).catch(function() {
                    return l.default.dispatch({
                        type: "ACTIVITY_JOIN_FAILED",
                        applicationId: e
                    })
                })
            }

            function N(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                if (i) return null == n ? Promise.reject(Error("Invalid channel ID")) : ((0, o.startEmbeddedActivity)(n, {
                    application_id: t
                }, r), Promise.resolve());
                if (f.default.isConnected(t)) return Promise.resolve();
                var c = null;
                if (null == e) {
                    var _ = E.default.getActiveLibraryApplication(t);
                    e = null != _ ? _.branchId : t
                }
                if (p.default.isLaunchable(t, e)) {
                    var A, v = p.default.getState(t, e),
                        T = E.default.getActiveLaunchOptionId(t, e);
                    if (null == v) throw Error("Missing dispatch game when launching");
                    var h = E.default.getLibraryApplication(t, e);
                    if (null == h) throw Error("Missing library application when launching");
                    c = (A = t, a.default.post({
                        url: S.Endpoints.OAUTH2_AUTHORIZE,
                        query: {
                            client_id: A,
                            response_type: "token",
                            scope: [S.OAuth2Scopes.IDENTIFY].join(" ")
                        },
                        retries: 3,
                        body: {
                            authorize: !0
                        },
                        oldFormErrors: !0
                    }).then(function(t) {
                        var e, n = t.body.location.split(/#|\?/),
                            i = u.parse(n[n.length - 1]);
                        if ("invalid_request" === i.error) return null;
                        if (null != i.error) throw Error("OAuth2 Error: ".concat(i.error, ": ").concat(null !== (e = i.error_description) && void 0 !== e ? e : "unknown error"));
                        return i.access_token
                    }, function(t) {
                        if (404 === t.status) return null;
                        throw t
                    })).then(function(t) {
                        return I.default.launchDispatchApplication(v, t, s.default.locale, h.getBranchName(), T)
                    })
                } else {
                    var y = d.default.getApplication(t);
                    c = null != y ? I.default.launch(y) : I.default.launchGame(t)
                }
                var g = Error("game not found");
                return null != c ? (l.default.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
                    applicationId: t,
                    branchId: e
                }), l.default.dispatch({
                    type: "GAME_LAUNCH_START",
                    applicationId: t
                }), c.then(function(e) {
                    l.default.dispatch({
                        type: "GAME_LAUNCH_SUCCESS",
                        applicationId: t,
                        pids: e
                    })
                }).catch(function(e) {
                    C.default.show(S.NoticeTypes.LAUNCH_GAME_FAILURE, m.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), l.default.dispatch({
                        type: "GAME_LAUNCH_FAIL",
                        applicationId: t,
                        error: g
                    })
                })) : (l.default.dispatch({
                    type: "GAME_LAUNCH_FAIL",
                    applicationId: t,
                    error: g
                }), Promise.reject(g))
            }
            var P = {
                addGame(t) {
                    l.default.dispatch({
                        type: "RUNNING_GAME_ADD_OVERRIDE",
                        pid: t
                    })
                },
                toggleOverlay(t, e) {
                    var n = _.default.getGameByName(t.name);
                    if (null != n) {
                        var i = E.default.getActiveLibraryApplication(n.id);
                        if (null != i) {
                            var r = A.toggleFlag(i.getFlags(), S.LibraryApplicationFlags.OVERLAY_DISABLED);
                            h.updateFlags(i.id, i.branchId, r);
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
                identifyGame: (t, e) => (0, c.default)().then(function(e) {
                    return new Promise(function(n, i) {
                        if (null == e) {
                            i(Error("Game utils module not loaded"));
                            return
                        }
                        e.identifyGame(t, function(e, r) {
                            if (0 !== e) {
                                i(Error("Error ".concat(e, " when fetching info on ").concat(t)));
                                return
                            }
                            if (null == r.icon || "" === r.icon || null == r.name || "" === r.name) {
                                i(Error("Did not find data on ".concat(t)));
                                return
                            }
                            l.default.dispatch({
                                type: "GAME_ICON_UPDATE",
                                gameName: r.name,
                                icon: "data:image/png;base64,".concat(r.icon)
                            }), n(r)
                        })
                    })
                }),
                getDetectableGames() {
                    !_.default.fetching && null == _.default.lastFetched && l.default.wait(function() {
                        l.default.dispatch({
                            type: "GAMES_DATABASE_FETCH"
                        }), a.default.get({
                            url: S.Endpoints.APPLICATIONS_DETECTABLE,
                            headers: {
                                "If-None-Match": _.default.detectableGamesEtag
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(function(t) {
                            var e = t.body,
                                n = t.headers.etag;
                            l.default.dispatch({
                                type: "GAMES_DATABASE_UPDATE",
                                games: e,
                                etag: n
                            })
                        }, function(t) {
                            304 === t.status ? l.default.dispatch({
                                type: "GAMES_DATABASE_UPDATE",
                                games: [],
                                etag: _.default.detectableGamesEtag
                            }) : l.default.dispatch({
                                type: "GAMES_DATABASE_FETCH_FAIL"
                            })
                        })
                    })
                },
                reportUnverifiedGame(t) {
                    var e, n, i = t.name,
                        r = t.iconHash,
                        u = t.publisher,
                        o = t.distributor,
                        d = t.sku,
                        s = t.executableName,
                        f = (0, c.cleanExecutablePath)(s);
                    if (null != f) {
                        ;
                        a.default.post({
                            url: S.Endpoints.UNVERIFIED_APPLICATIONS,
                            body: {
                                name: i,
                                os: (0, v.getPlatformName)(),
                                icon: r,
                                distributor_application: (e = o, n = d, null == e || "" === e ? null : {
                                    distributor: e,
                                    sku: n
                                }),
                                executable: f,
                                publisher: u,
                                report_version: 3
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(function(t) {
                            var e = t.body,
                                n = e.name,
                                i = e.hash,
                                r = e.missing_data;
                            l.default.dispatch({
                                type: "UNVERIFIED_GAME_UPDATE",
                                name: n,
                                hash: i,
                                missingData: r
                            })
                        })
                    }
                },
                uploadIcon(t, e, n) {
                    a.default.post({
                        url: S.Endpoints.UNVERIFIED_APPLICATIONS_ICONS,
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
                launch: N,
                join(t) {
                    var e = t.userId,
                        n = t.sessionId,
                        u = t.applicationId,
                        a = t.channelId,
                        o = t.messageId,
                        d = t.intent,
                        c = void 0 === d ? y.ActivityIntent.PLAY : d,
                        s = t.embedded,
                        f = void 0 !== s && s;
                    return (0, i._)(function() {
                        var t;
                        return (0, r._)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (__OVERLAY__) return l.default.dispatch({
                                        type: "OVERLAY_JOIN_GAME",
                                        userId: e,
                                        sessionId: n,
                                        applicationId: u,
                                        channelId: a,
                                        messageId: o
                                    }), [2, Promise.resolve(!0)];
                                    l.default.dispatch({
                                        type: "ACTIVITY_JOIN_LOADING",
                                        applicationId: u
                                    }), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, T.default.getJoinSecret(e, n, u, a, o)];
                                case 2:
                                    return g({
                                        applicationId: u,
                                        secret: t.sent(),
                                        channelId: a,
                                        intent: c,
                                        embedded: f
                                    }), [2, !0];
                                case 3:
                                    return t.sent(), l.default.dispatch({
                                        type: "ACTIVITY_JOIN_FAILED",
                                        applicationId: u
                                    }), [2, !1];
                                case 4:
                                    return [2]
                            }
                        })
                    })()
                },
                joinWithSecret: g
            }
        },
        536266: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                updateFlags: function() {
                    return a
                }
            });
            var i = n("454836"),
                r = n("312916"),
                u = n("467006");

            function a(t, e, n) {
                return r.default.dispatch({
                    type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
                    applicationId: t,
                    branchId: e,
                    flags: n
                }), i.default.patch({
                    url: u.Endpoints.LIBRARY_APPLICATION_BRANCH(t, e),
                    body: {
                        flags: n
                    },
                    oldFormErrors: !0
                }).then(function(t) {
                    r.default.dispatch({
                        type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
                        libraryApplication: t.body
                    })
                })
            }
        },
        850675: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("21189"),
                r = n("312916"),
                u = {
                    show(t, e, n, i, u) {
                        r.default.dispatch({
                            type: "NOTICE_SHOW",
                            notice: {
                                id: u,
                                type: t,
                                message: e,
                                buttonText: n,
                                callback: i
                            }
                        })
                    },
                    dismiss(t) {
                        r.default.dispatch((0, i._)({
                            type: "NOTICE_DISMISS"
                        }, t))
                    }
                }
        },
        525728: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getMetadata: function() {
                    return d
                },
                play: function() {
                    return o
                },
                sync: function() {
                    return l
                }
            }), n("191489"), n("357629"), n("411104");
            var i = n("454836"),
                r = n("312916"),
                u = n("565639"),
                a = n("467006");

            function l(t, e) {
                r.default.dispatch({
                    type: "ACTIVITY_SYNC",
                    activity: t,
                    userId: e
                })
            }

            function o(t, e) {
                d(t, e).then(function(n) {
                    return r.default.dispatch({
                        type: "ACTIVITY_PLAY",
                        activity: t,
                        userId: e,
                        metadata: n
                    })
                }).catch(function() {
                    return r.default.dispatch({
                        type: "ACTIVITY_PLAY",
                        activity: t,
                        userId: e
                    })
                })
            }

            function d(t, e) {
                var n = t.metadata;
                if (null != n) return Promise.resolve(n);
                var l = u.default.getActivityMetadata(e);
                return null != l ? Promise.resolve(l) : null == t.session_id ? Promise.reject(Error("null/undefined session_id")) : i.default.get({
                    url: a.Endpoints.USER_ACTIVITY_METADATA(e, t.session_id, t.application_id),
                    oldFormErrors: !0
                }).then(function(t) {
                    var n = t.body;
                    return r.default.dispatch({
                        type: "ACTIVITY_METADATA_UPDATE",
                        metadata: n,
                        userId: e
                    }), n
                })
            }
        },
        702143: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                accountDetailsClose: function() {
                    return T
                },
                accountDetailsInit: function() {
                    return v
                },
                clearErrors: function() {
                    return b
                },
                disableAccount: function() {
                    return h
                },
                getHarvestStatus: function() {
                    return m
                },
                requestHarvest: function() {
                    return g
                },
                resetAllPending: function() {
                    return U
                },
                resetAndCloseUserProfileForm: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return L
                },
                saveAccountChanges: function() {
                    return y
                },
                saveAccountRequest: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return M
                },
                setPendingAvatar: function() {
                    return N
                },
                setPendingAvatarDecoration: function() {
                    return D
                },
                setPendingGlobalNameName: function() {
                    return P
                },
                setPendingProfileEffectId: function() {
                    return O
                }
            });
            var i = n("356056"),
                r = n("21189"),
                u = n("324415"),
                a = n("454836"),
                l = n("986329"),
                o = n("24135"),
                d = n("312916"),
                c = n("521588"),
                s = n("328470"),
                f = n("204606"),
                _ = n("567713"),
                E = n("720872"),
                p = n("467006"),
                A = n("999114"),
                I = n("30175");

            function v() {
                d.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                d.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function h(t, e) {
                var n = e ? I.default.Messages.DELETE_ACCOUNT : I.default.Messages.DISABLE_ACCOUNT,
                    i = e ? p.Endpoints.DELETE_ACCOUNT : p.Endpoints.DISABLE_ACCOUNT;
                return (0, _.default)(function(e) {
                    return a.default.post({
                        url: i,
                        body: (0, r._)({
                            password: t
                        }, e),
                        oldFormErrors: !0
                    })
                }, {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(function() {
                    E.default.logoutInternal(), (0, c.transitionTo)(p.Routes.DEFAULT_LOGGED_OUT)
                })
            }

            function C(t) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = (0, i._)(function(t) {
                    var e, n, i;
                    return (0, u._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, a.default.patch({
                                    url: p.Endpoints.ME,
                                    oldFormErrors: !0,
                                    body: t
                                })];
                            case 1:
                                return (n = (e = r.sent()).body).token && (i = n.token, delete n.token, d.default.dispatch({
                                    type: "UPDATE_TOKEN",
                                    token: i,
                                    userId: n.id
                                }), (null == t ? void 0 : t.password) != null && (null == t ? void 0 : t.new_password) != null && d.default.dispatch({
                                    type: "PASSWORD_UPDATED",
                                    userId: n.id
                                })), d.default.dispatch({
                                    type: "CURRENT_USER_UPDATE",
                                    user: n
                                }), [2, e]
                        }
                    })
                })).apply(this, arguments)
            }

            function y(t) {
                var e = t.username,
                    n = t.discriminator,
                    i = t.email,
                    u = t.emailToken,
                    a = t.password,
                    o = t.avatar,
                    c = t.avatarDecoration,
                    E = t.newPassword,
                    v = t.globalName;
                return d.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, _.default)(function(t) {
                    var d = (0, r._)({
                        username: e,
                        email: i,
                        email_token: u,
                        password: a,
                        avatar: o,
                        discriminator: n,
                        global_name: v,
                        new_password: E
                    }, t);
                    null === c && (d.avatar_decoration_id = null), null != c && (d.avatar_decoration_id = c.id, d.avatar_decoration_sku_id = c.skuId);
                    var s = l.default.get(p.DEVICE_TOKEN),
                        f = (0, A.getDevicePushProvider)();
                    null != f && null != s && (d.push_provider = f, d.push_token = s);
                    var _ = l.default.get(p.DEVICE_VOIP_TOKEN);
                    return null != A.DEVICE_PUSH_VOIP_PROVIDER && null != _ && (d.push_voip_provider = A.DEVICE_PUSH_VOIP_PROVIDER, d.push_voip_token = _), C(d)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: I.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: function() {
                            return d.default.dispatch({
                                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                                errors: {}
                            })
                        }
                    }
                }).then(function(t) {
                    var e = t.body;
                    return s.default.track(p.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, f.isAnimatedIconHash)(e.avatar)
                    }), d.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), t
                }, function(t) {
                    return d.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                        errors: t.body
                    }), t
                })
            }

            function m() {
                return a.default.get({
                    url: p.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function g() {
                return a.default.post({
                    url: p.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N(t) {
                d.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                }), null == t ? o.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : o.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function P(t) {
                d.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function D(t) {
                d.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function O(t) {
                d.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: t
                })
            }

            function b() {
                d.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function L() {
                d.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function U() {
                d.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function R() {
                d.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function M(t) {
                d.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        933439: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var i = n("87627"),
                r = n("29713"),
                u = n("21189"),
                a = n("778455"),
                l = n("735250"),
                o = n("470079"),
                d = n("153832"),
                c = n("328470"),
                s = n("497988"),
                f = n("467006"),
                _ = function(t) {
                    (0, r._)(n, t);
                    var e = (0, a._)(n);

                    function n(t) {
                        var r;
                        return (0, i._)(this, n), (r = e.call(this, t))._loadId = null, r._loadDate = r.props.root ? Date.now() : null, r.getLocation = (0, s.cachedFunction)(function(t, e, n, i) {
                            var r = {};
                            return null != t && (r.page = t), null != e && (r.section = e), null != n && (r.object = n), null != i && (r.objectType = i), r
                        }), r.mergeLocation = (0, s.cachedFunction)(function(t, e) {
                            return (0, u._)({}, t, e)
                        }), r.getContext = (0, s.cachedFunction)(function(t, e, n) {
                            return {
                                location: t,
                                loadDate: e,
                                loadId: n
                            }
                        }), null != t.loadId ? r._loadId = t.loadId : t.root && (r._loadId = (0, d.v4)()), r
                    }
                    var o = n.prototype;
                    return o.renderProvider = function(t) {
                        var e, n, i = this.props,
                            r = i.section,
                            u = i.page,
                            a = i.object,
                            o = i.objectType,
                            d = i.children,
                            s = this.mergeLocation(t.location, this.getLocation(u, r, a, o)),
                            f = this.getContext(s, null !== (e = this._loadDate) && void 0 !== e ? e : t.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : t.loadId);
                        return (0, l.jsx)(c.AnalyticsContext.Provider, {
                            value: f,
                            children: d
                        })
                    }, o.render = function() {
                        var t = this,
                            e = this.props.context;
                        return null != e ? this.renderProvider(e) : (0, l.jsx)(c.AnalyticsContext.Consumer, {
                            children: function(e) {
                                return t.renderProvider(e)
                            }
                        })
                    }, n
                }(o.Component);
            _.Pages = f.AnalyticsPages, _.Sections = f.AnalyticsSections, _.Objects = f.AnalyticsObjects, _.ObjectTypes = f.AnalyticsObjectTypes, _.defaultProps = {
                root: !1
            }
        },
        986416: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useAnalyticsContext: function() {
                    return u
                }
            });
            var i = n("470079"),
                r = n("328470"),
                u = function() {
                    return i.useContext(r.AnalyticsContext)
                }
        },
        919423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ActivitiesInGdmExperiment: function() {
                    return i
                },
                isActivitiesInGdmEnabled: function() {
                    return u
                },
                useIsActivitiesInGdmEnabled: function() {
                    return r
                }
            });
            var i = (0, n("516086").createExperiment)({
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

            function r() {
                return i.useExperiment({
                    location: "c7edd6_1"
                }, {
                    autoTrackExposure: !1
                }).isActivitiesInGdmEnabled
            }

            function u() {
                return i.getCurrentConfig({
                    location: "c7edd6_2"
                }, {
                    autoTrackExposure: !1
                }).isActivitiesInGdmEnabled
            }
        },
        837851: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var i = n("87627"),
                r = n("29713"),
                u = n("21189"),
                a = n("778455"),
                l = n("661223"),
                o = n("312916");

            function d() {
                return {
                    usageByApplicationId: {},
                    shelfOrder: []
                }
            }
            var c = d(),
                s = function(t) {
                    (0, r._)(n, t);
                    var e = (0, a._)(n);

                    function n() {
                        return (0, i._)(this, n), e.apply(this, arguments)
                    }
                    var l = n.prototype;
                    return l.initialize = function(t) {
                        c = (0, u._)({}, d(), null != t ? t : {})
                    }, l.getState = function() {
                        return c
                    }, n
                }(l.default.PersistedStore);
            s.displayName = "ActivityShelfStore", s.persistKey = "ActivityShelfStore";
            var f = new s(o.default, {
                LOGOUT: function() {
                    c = d()
                }
            })
        },
        197097: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                markActivityUsed: function() {
                    return l
                },
                setActivityUrlOverride: function() {
                    return a
                },
                toggleEnableDeveloperActivityShelf: function() {
                    return r
                },
                toggleUseActivityUrlOverride: function() {
                    return u
                },
                updateFilter: function() {
                    return o
                }
            });
            var i = n("312916");

            function r() {
                i.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED"
                })
            }

            function u() {
                i.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE"
                })
            }

            function a(t) {
                i.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
                    activityUrlOverride: t
                })
            }

            function l(t) {
                i.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
                    applicationId: t,
                    timestamp: new Date().getTime()
                })
            }

            function o(t) {
                i.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
                    filter: t
                })
            }
        },
        928484: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                disconnectEmbeddedActivity: function() {
                    return L
                },
                dismissNewActivityIndicator: function() {
                    return J
                },
                fetchDeveloperApplications: function() {
                    return U
                },
                fetchShelf: function() {
                    return G
                },
                launchEmbeddedActivity: function() {
                    return D
                },
                sendEmbeddedActivityInvite: function() {
                    return Y
                },
                sendEmbeddedActivityInviteUser: function() {
                    return B
                },
                startEmbeddedActivity: function() {
                    return P
                },
                stopEmbeddedActivity: function() {
                    return b
                },
                updateActivityPanelMode: function() {
                    return W
                },
                updateFocusedActivityLayout: function() {
                    return q
                },
                uploadImageAttachment: function() {
                    return M
                },
                validateTestMode: function() {
                    return j
                }
            });
            var i = n("356056"),
                r = n("324415");
            n("653041"), n("357629"), n("363505"), n("462848"), n("191489"), n("996173"), n("47120");
            var u = n("682797"),
                a = n("454836"),
                l = n("312916"),
                o = n("561427"),
                d = n("164545"),
                c = n("19569"),
                s = n("389920"),
                f = n("648519"),
                _ = n("148934"),
                E = n("901365"),
                p = n("912998"),
                A = n("262047"),
                I = n("731865"),
                v = n("871831"),
                T = n("370275"),
                h = n("334990"),
                C = n("919423"),
                S = n("134223"),
                y = n("792658"),
                m = n("657275"),
                g = n("467006"),
                N = n("859699");

            function P(t, e, n) {
                var i = S.default.getSelfEmbeddedActivityForChannel(t);
                null != i && b({
                    channelId: t,
                    applicationId: i.application_id
                }), l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_OPEN",
                    channelId: t,
                    embeddedActivity: e,
                    analyticsLocations: n
                });
                var r = e.application_id;
                (0, m.default)(t) ? (d.default.selectParticipant(t, r), d.default.updateLayout(t, g.ChannelLayouts.NO_CHAT)) : (0, y.default)(t)
            }

            function D(t) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = (0, i._)(function(t) {
                    var e, n, i, a, o, d, c;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (null == (i = null !== (n = null == (e = I.default.getChannel(t)) ? void 0 : e.getGuildId()) && void 0 !== n ? n : null) && !(null !== (a = null == e ? void 0 : e.isPrivate()) && void 0 !== a && a) || null === (o = S.default.getSelfEmbeddedActivityForChannel(t))) return [2];
                                d = A.default.getSessionId(), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), l.default.dispatch({
                                    type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                                    embeddedActivity: o
                                }), [4, h.default.post({
                                    url: g.Endpoints.ACTIVITY_CHANNEL_LAUNCH(t, o.application_id),
                                    body: {
                                        session_id: d,
                                        guild_id: null != i ? i : void 0
                                    },
                                    trackedActionData: {
                                        event: u.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                                        properties: {
                                            guild_id: i,
                                            channel_id: t,
                                            application_id: o.application_id,
                                            session_id: d
                                        }
                                    },
                                    retries: 3,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                return r.sent(), l.default.dispatch({
                                    type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS"
                                }), [3, 4];
                            case 3:
                                return c = r.sent(), l.default.dispatch({
                                    type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                                    guildId: i,
                                    applicationId: o.application_id,
                                    error: new f.default(c)
                                }), b({
                                    channelId: t,
                                    applicationId: o.application_id,
                                    showFeedback: !1
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function b(t) {
                var e, n = t.channelId,
                    i = t.applicationId,
                    r = t.showFeedback;
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_CLOSE",
                    channelId: n,
                    applicationId: i,
                    showFeedback: void 0 === r || r
                });
                var u = E.default.getSelectedParticipantId(n),
                    a = null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
                null != S.default.getEmbeddedActivitiesForChannel(n).find(function(t) {
                    return t.application_id === i
                }) && null != a && "" !== a && u === i && d.default.selectParticipant(n, null)
            }

            function L(t, e) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISCONNECT",
                    channelId: t,
                    applicationId: e
                })
            }

            function U() {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = (0, i._)(function() {
                    var t, e;
                    return (0, r._)(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), l.default.dispatch({
                                    type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
                                }), [4, a.default.get({
                                    url: g.Endpoints.APPLICATIONS,
                                    query: {
                                        with_team_applications: !0
                                    },
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return t = e.sent().body.map(function(t) {
                                    return p.default.createFromServer(t)
                                }), l.default.dispatch({
                                    type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
                                    items: t
                                }), [3, 3];
                            case 2:
                                return e.sent(), l.default.dispatch({
                                    type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
                                }), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function M(t, e, n) {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = (0, i._)(function(t, e, n) {
                    var i, u;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), l.default.dispatch({
                                    type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
                                }), [4, a.default.post({
                                    url: g.Endpoints.ACTIVITY_UPLOAD_ATTACHMENT(t),
                                    query: {
                                        channel_id: e
                                    },
                                    attachments: [{
                                        name: "file",
                                        file: n
                                    }]
                                })];
                            case 1:
                                return i = r.sent(), l.default.dispatch({
                                    type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                                    attachment: i.body.attachment
                                }), [2, i.body.attachment];
                            case 2:
                                return u = r.sent(), l.default.dispatch({
                                    type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
                                }), [2, new f.default(u)];
                            case 3:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
            var V = function(t, e, n) {
                var i = n.guildId;
                (i === t || null == i && null == t) && e()
            };

            function G(t) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = (0, i._)(function(t) {
                    var e, n, i, a, o, d, c, s, f, E, A, I, v, y, m, N, P;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (e = t.guildId, i = void 0 !== (n = t.force) && n, o = (a = S.default.getShelfActivities(e)).map(function(t) {
                                        return _.default.getApplication(t.application_id)
                                    }).filter(T.isNotNullish), !(!i && !S.default.shouldFetchShelf(e))) return [3, 3];
                                if (!(null === (d = S.default.getShelfFetchStatus(e)) || void 0 === d ? void 0 : d.isFetching)) return [3, 2];
                                return s = new Promise(function(t) {
                                    c = V.bind(null, e, t), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", c)
                                }), [4, Promise.race([s, new Promise(function(t) {
                                    f = V.bind(null, e, t), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", f)
                                })])];
                            case 1:
                                r.sent(), null != c && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", c), c = null), null != f && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", f), f = null), r.label = 2;
                            case 2:
                                return [2, {
                                    activityConfigs: a,
                                    applications: o
                                }];
                            case 3:
                                if (r.trys.push([3, 5, , 6]), l.default.dispatch({
                                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
                                        guildId: e
                                    }), !(E = void 0 !== e && "" !== e) && !(0, C.isActivitiesInGdmEnabled)()) return [2, {
                                    activityConfigs: [],
                                    applications: []
                                }];
                                return A = E ? {
                                    guild_id: e
                                } : void 0, [4, h.default.get({
                                    url: g.Endpoints.ACTIVITY_SHELF,
                                    query: A,
                                    trackedActionData: {
                                        event: u.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                                        properties: {
                                            guild_id: e
                                        }
                                    },
                                    retries: 3,
                                    oldFormErrors: !0
                                })];
                            case 4:
                                return y = null !== (v = (I = r.sent()).body.activities) && void 0 !== v ? v : [], N = null !== (m = I.body.applications) && void 0 !== m ? m : [], l.default.dispatch({
                                    type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                                    guildId: e,
                                    activities: y,
                                    applications: N
                                }), N.length > 0 && l.default.dispatch({
                                    type: "APPLICATIONS_FETCH_SUCCESS",
                                    applications: N
                                }), [2, {
                                    activityConfigs: y,
                                    applications: N.map(function(t) {
                                        return p.default.createFromServer(t)
                                    })
                                }];
                            case 5:
                                return r.sent(), l.default.dispatch({
                                    type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
                                    guildId: e
                                }), [2, {
                                    activityConfigs: a,
                                    applications: o
                                }];
                            case 6:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function Y(t) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = (0, i._)(function(t) {
                    var e, n, i, u, a;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return e = t.activityChannelId, n = t.invitedChannelId, i = t.applicationId, u = t.location, [4, c.default.createInvite(e, {
                                    target_type: N.InviteTargetTypes.EMBEDDED_APPLICATION,
                                    target_application_id: i
                                }, u)];
                            case 1:
                                if (a = r.sent(), null == I.default.getChannel(n)) return [2];
                                return s.default.sendInvite(n, a.code, u, null), [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function B(t) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = (0, i._)(function(t) {
                    var e, n, i, u, a;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return e = t.channelId, n = t.applicationId, i = t.userId, u = t.location, [4, c.default.createInvite(e, {
                                    target_type: N.InviteTargetTypes.EMBEDDED_APPLICATION,
                                    target_application_id: n
                                }, u)];
                            case 1:
                                return a = r.sent(), o.default.ensurePrivateChannel(i).then(function(t) {
                                    null != I.default.getChannel(t) && s.default.sendInvite(t, a.code, u, null)
                                }), [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function J() {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
                })
            }

            function j(t) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, i._)(function(t) {
                    var e, n;
                    return (0, r._)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                e = g.Endpoints.ACTIVITY_TEST_MODE(t), n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, a.default.get({
                                    url: e,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                return n.sent(), [2, !0];
                            case 3:
                                return n.sent(), [2, !1];
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function W(t) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
                    activityPanelMode: t
                })
            }

            function q(t) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
                    focusedActivityLayout: t
                })
            }
        },
        287472: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return z
                }
            });
            var i = n("187986"),
                r = n("356056"),
                u = n("87627"),
                a = n("29713"),
                l = n("778455"),
                o = n("324415");
            n("462848"), n("357629"), n("996173"), n("47120"), n("633702"), n("266796");
            var d = n("312916"),
                c = n("164545"),
                s = n("614019"),
                f = n("550389"),
                _ = n("148934"),
                E = n("901365"),
                p = n("14171"),
                A = n("262047"),
                I = n("731865"),
                v = n("407807"),
                T = n("232733"),
                h = n("871831"),
                C = n("328470"),
                S = n("501769"),
                y = n("837851"),
                m = n("928484"),
                g = n("134223"),
                N = n("605834"),
                P = n("481990"),
                D = n("587287"),
                O = n("89801"),
                b = n("345923"),
                L = n("565992"),
                U = n("678728"),
                R = n("296868"),
                M = n("657275"),
                F = n("326130"),
                V = n("467006"),
                G = n("30175"),
                w = {},
                Y = {};

            function H(t) {
                var e, n = (null == t ? void 0 : t.activity) != null ? !(0, L.default)(null == t ? void 0 : t.activity) : void 0,
                    i = (null == t ? void 0 : t.activity) != null ? (0, U.default)(null == t ? void 0 : t.activity) : void 0;
                return {
                    isPremiumActivity: n,
                    isFreePeriod: i,
                    releasePhase: null == t ? void 0 : null === (e = t.activity) || void 0 === e ? void 0 : e.client_platform_config[(0, b.default)((0, S.getOS)())].release_phase
                }
            }

            function B(t) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = (0, r._)(function(t) {
                    var e, n, i, r, u, a, l, d, c, s, f, _, A, v, T, S, m;
                    return (0, o._)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (e = t.channelId, n = t.embeddedActivity, i = t.analyticsLocations, r = n.application_id, a = null == (u = I.default.getChannel(e)) ? void 0 : u.getGuildId(), l = h.default.getCurrentUser(), null == u || null == l) return [2];
                                return d = g.default.getShelfActivities(a), c = y.default.getState().shelfOrder, s = 0 === g.default.getEmbeddedActivitiesForChannel(e).filter(function(t) {
                                    return t.application_id === r
                                }).length, f = (0, N.default)({
                                    applicationId: r,
                                    activityConfigs: d
                                }), _ = 1 + c.findIndex(function(t) {
                                    return t === r
                                }), v = (A = H(f)).isPremiumActivity, T = A.isFreePeriod, S = A.releasePhase, [4, (0, p.default)()];
                            case 1:
                                return m = o.sent(), Y[r] = function(t) {
                                    var e, n;
                                    w[r] = t, C.default.track(V.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                                        channel_id: u.id,
                                        guild_id: u.getGuildId(),
                                        media_session_id: t.mediaSessionId,
                                        activity_session_id: t.activitySessionId,
                                        application_id: r,
                                        location_stack: i,
                                        user_premium_tier: l.premiumType,
                                        is_premium_activity: v,
                                        is_free_period: T,
                                        raw_thermal_state: m,
                                        n_participants: E.default.getUserParticipantCount(u.id),
                                        is_activity_start: s,
                                        release_phase: S,
                                        activity_premium_tier_requirement: null == f ? void 0 : null === (e = f.activity) || void 0 === e ? void 0 : e.premium_tier_requirement,
                                        shelf_rank: null == f ? void 0 : null === (n = f.activity) || void 0 === n ? void 0 : n.shelf_rank,
                                        shelf_sorted_rank: _ > 0 ? _ : null
                                    })
                                }, [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function J(t) {
                return null == t ? void 0 : t.activity_id
            }

            function j(t) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, r._)(function(t) {
                    var e, n, i, r, u, a, l, d, c, s, f, _, E, A, v, T;
                    return (0, o._)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (e = t.channelId, u = w[n = t.applicationId], a = I.default.getChannel(e), l = g.default.getEmbeddedActivityDurationMs(e, n), d = h.default.getCurrentUser(), c = null == a ? void 0 : a.getGuildId(), null == u || null == a || null == d) return [2];
                                return s = g.default.getShelfActivities(c), E = (_ = H(f = (0, N.default)({
                                    applicationId: n,
                                    activityConfigs: s
                                }))).isPremiumActivity, A = _.isFreePeriod, v = _.releasePhase, [4, (0, p.default)()];
                            case 1:
                                return T = o.sent(), C.default.track(V.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
                                    channel_id: a.id,
                                    guild_id: a.getGuildId(),
                                    media_session_id: u.mediaSessionId,
                                    activity_session_id: u.activitySessionId,
                                    application_id: n,
                                    duration_ms: l,
                                    user_premium_tier: d.premiumType,
                                    is_premium_activity: E,
                                    is_free_period: A,
                                    raw_thermal_state: T,
                                    release_phase: v,
                                    activity_premium_tier_requirement: null == f ? void 0 : null === (i = f.activity) || void 0 === i ? void 0 : i.premium_tier_requirement,
                                    shelf_rank: null == f ? void 0 : null === (r = f.activity) || void 0 === r ? void 0 : r.shelf_rank
                                }), delete Y[n], delete w[n], [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function W(t) {
                var e, n, i = t.channelId,
                    r = t.embeddedActivity,
                    u = t.connections,
                    a = t.updateCode,
                    l = A.default.getId(),
                    o = g.default.getEmbeddedActivitiesForChannel(i),
                    d = I.default.getChannel(i);
                if (a === F.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (n = null == d ? void 0 : d.isPrivate()) && void 0 !== n && n && o.length <= 1 && void 0 === u.find(function(t) {
                        return t.user_id === l
                    }) && c.default.selectParticipant(i, null), !!u.some(function(t) {
                        return t.user_id === l
                    })) {
                    var s = v.default.getMediaSessionId(),
                        f = r.application_id,
                        _ = J(r);
                    null != f && null != _ && null != s && (null === (e = Y[f]) || void 0 === e || e.call(Y, {
                        mediaSessionId: s,
                        activitySessionId: _
                    }), delete Y[f])
                }
            }

            function q(t) {
                var e = t.mediaSessionId,
                    n = v.default.getChannelId();
                if (null != e && null != n) {
                    var i, r = g.default.getSelfEmbeddedActivityForChannel(n),
                        u = null == r ? void 0 : r.application_id,
                        a = J(r);
                    null != u && null != e && null != a && (null === (i = Y[u]) || void 0 === i || i.call(Y, {
                        mediaSessionId: e,
                        activitySessionId: a
                    }), delete Y[u])
                }
            }
            var z = function(t) {
                (0, a._)(n, t);
                var e = (0, l._)(n);

                function n() {
                    (0, u._)(this, n), a = e.apply(this, arguments), a.handleSelectedChannelUpdate = function() {
                        var t = T.default.getVoiceChannelId(),
                            e = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var r, u = g.default.getSelfEmbeddedActivities().values()[Symbol.iterator](); !(e = (r = u.next()).done); e = !0) {
                                var l = r.value,
                                    o = l.channelId,
                                    d = l.application_id;
                                (0, M.default)(o) && o !== t && a.leaveActivity({
                                    channelId: o,
                                    applicationId: d
                                })
                            }
                        } catch (t) {
                            n = !0, i = t
                        } finally {
                            try {
                                !e && null != u.return && u.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                        if (null != t) {
                            var c = g.default.getEmbeddedActivitiesForChannel(t),
                                s = A.default.getId();
                            c.forEach(function(t) {
                                t.connections.has(s) && null == g.default.getSelfEmbeddedActivityForChannel(t.channelId) && (0, m.disconnectEmbeddedActivity)(t.channelId, t.application_id)
                            })
                        }
                    }, a.handleActivityLaunchFail = function(t) {
                        var e = t.error;
                        if (null != t.guildId) {
                            var n = G.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                            switch (e.code) {
                                case V.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                                    n = G.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                                    break;
                                case V.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                                    n = G.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                                    break;
                                case V.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                                    n = G.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                                    break;
                                case V.AbortCodes.INVALID_PERMISSIONS:
                                    n = G.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                                    break;
                                case V.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                                    n = G.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                                    break;
                                case V.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                                    n = G.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE
                            }
                            a.showLaunchErrorModal(n)
                        }
                    }, a.superHandleRPCDisconnect = function(t) {
                        var e = t.reason,
                            n = t.application.id;
                        if (null != n && null != e) {
                            var i = !0,
                                r = !1,
                                u = void 0;
                            try {
                                for (var l, o = g.default.getSelfEmbeddedActivities().values()[Symbol.iterator](); !(i = (l = o.next()).done); i = !0) {
                                    var d = l.value,
                                        c = d.application_id,
                                        s = d.channelId;
                                    c === n && a.leaveActivity({
                                        channelId: s,
                                        applicationId: n
                                    })
                                }
                            } catch (t) {
                                r = !0, u = t
                            } finally {
                                try {
                                    !i && null != o.return && o.return()
                                } finally {
                                    if (r) throw u
                                }
                            }
                            e.code !== V.RPCCloseCodes.CLOSE_NORMAL && a.showErrorModal(e, n)
                        }
                    };
                    var t, a, l = (0, i._)(a);
                    return a.handleDeferredOpen = (t = (0, r._)(function(t) {
                        var e, n, i, r, u, a, d, c, s, E, p, A, v, h, C, S, y, b, L;
                        return (0, o._)(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (e = t.channelId, n = t.applicationId, i = t.analyticsLocations, T.default.getVoiceChannelId() !== e || (null == (a = g.default.getSelfEmbeddedActivityForChannel(e)) ? void 0 : a.application_id) === n) return [2];
                                    return [4, f.default.fetchApplication(n)];
                                case 1:
                                    if (d = o.sent(), !(0, O.getIsActivitiesEnabledForCurrentPlatform)()) return l.showLaunchErrorModal(G.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS), [2];
                                    if (!(0, R.default)(null == d ? void 0 : null === (r = d.embedded_activity_config) || void 0 === r ? void 0 : r.supported_platforms)) return l.showLaunchErrorModal(G.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS), [2];
                                    if (c = null == a ? void 0 : a.application_id, s = void 0, !(null != c)) return [3, 3];
                                    return [4, f.default.fetchApplication(c)];
                                case 2:
                                    o.sent(), s = _.default.getApplication(c), o.label = 3;
                                case 3:
                                    return A = null !== (p = null == (E = I.default.getChannel(e)) ? void 0 : E.getGuildId()) && void 0 !== p ? p : void 0, [4, (0, m.fetchShelf)({
                                        guildId: A
                                    })];
                                case 4:
                                    if (h = (v = o.sent()).activityConfigs, C = v.applications, null != (S = (0, N.default)({
                                            applicationId: n,
                                            activityConfigs: h,
                                            applications: C
                                        }))) return [3, 6];
                                    return [4, (0, m.fetchShelf)({
                                        guildId: A,
                                        force: !0
                                    })];
                                case 5:
                                    y = o.sent(), S = (0, N.default)({
                                        applicationId: n,
                                        activityConfigs: y.activityConfigs,
                                        applications: y.applications
                                    }), o.label = 6;
                                case 6:
                                    if (!((null !== (L = null == (b = g.default.getEmbeddedActivitiesForChannel(e).find(function(t) {
                                            return t.application_id === n
                                        })) ? void 0 : null === (u = b.connections) || void 0 === u ? void 0 : u.size) && void 0 !== L ? L : 0) > 0)) return [3, 7];
                                    return (0, P.maybeJoinEmbeddedActivity)({
                                        channelId: e,
                                        applicationId: n,
                                        activityId: null,
                                        inputApplication: null,
                                        analyticsLocations: i,
                                        embeddedActivitiesManager: l
                                    }), [3, 9];
                                case 7:
                                    return [4, (0, D.default)({
                                        activityItem: S,
                                        currentActivity: s,
                                        channelId: e,
                                        guildId: A,
                                        embeddedActivitiesManager: l,
                                        analyticsLocations: i
                                    })];
                                case 8:
                                    o.sent(), o.label = 9;
                                case 9:
                                    return [2]
                            }
                        })
                    }), function(e) {
                        return t.apply(this, arguments)
                    }), a
                }
                var c = n.prototype;
                return c._initialize = function() {
                    T.default.addChangeListener(this.handleSelectedChannelUpdate), d.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), d.default.subscribe("EMBEDDED_ACTIVITY_OPEN", B), d.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", j), d.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", W), d.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), d.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), d.default.subscribe("MEDIA_SESSION_JOINED", q)
                }, c._terminate = function() {
                    T.default.removeChangeListener(this.handleSelectedChannelUpdate), d.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), d.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", B), d.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", j), d.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", W), d.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), d.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), d.default.unsubscribe("MEDIA_SESSION_JOINED", q)
                }, n
            }(s.default)
        },
        698179: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                confirmActivityAgeGate: function() {
                    return s
                }
            });
            var i = n("356056"),
                r = n("21189"),
                u = n("227094"),
                a = n("324415");
            n("191489"), n("357629");
            var l = n("735250");
            n("470079");
            var o = n("974328"),
                d = n("491261"),
                c = n("467006");

            function s(t) {
                var e = t.application,
                    s = t.onAgree,
                    f = t.onDisagree,
                    _ = d.default.getWindowOpen(c.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT;
                return (0, o.openModalLazy)((0, i._)(function() {
                    var t;
                    return (0, a._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, n.el("698179@1342:1378").then(n.bind(n, "74529"))];
                            case 1:
                                return t = i.sent().ActivityAgeGateModal, [2, function(n) {
                                    return (0, l.jsx)(t, (0, u._)((0, r._)({}, n), {
                                        application: e,
                                        onAgree: s,
                                        onDisagree: f
                                    }))
                                }]
                        }
                    })
                }), {
                    modalKey: "activity-age-gate",
                    contextKey: _
                }), Promise.resolve()
            }
        },
        395151: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("992888"),
                r = n("30175");

            function u(t, e, n, u) {
                var a, l;
                i.default.show({
                    title: r.default.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
                    cancelText: r.default.Messages.CANCEL,
                    confirmText: r.default.Messages.CONFIRM,
                    onConfirm: n,
                    onCancel: u,
                    body: r.default.Messages.EMBEDDED_ACTIVITY_CHANGE_ACTIVITY_CONFIRM_BODY.format({
                        currentApplicationName: null !== (a = null == t ? void 0 : t.name) && void 0 !== a ? a : r.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
                        currentApplicationChannelName: null !== (l = null == e ? void 0 : e.name) && void 0 !== l ? l : r.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_CHANNEL_DEFAULT
                    })
                })
            }
        },
        605834: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("357629");
            var i = n("148934");

            function r(t) {
                var e, n = t.applicationId,
                    r = t.activityConfigs,
                    u = t.applications,
                    a = null !== (e = null == u ? void 0 : u.find(function(t) {
                        return t.id === n
                    })) && void 0 !== e ? e : i.default.getApplication(n),
                    l = r.find(function(t) {
                        return t.application_id === n
                    });
                return null == l || null == a ? null : {
                    activity: l,
                    application: a
                }
            }
        },
        116235: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return y
                }
            });
            var i = n("356056"),
                r = n("324415");
            n("568603"), n("128242"), n("191489"), n("357629");
            var u = n("550389"),
                a = n("148934"),
                l = n("912998"),
                o = n("731865"),
                d = n("232733"),
                c = n("871831"),
                s = n("237427"),
                f = n("928484"),
                _ = n("698179"),
                E = n("395151"),
                p = n("657275"),
                A = n("306990"),
                I = n("153577"),
                v = n("176760"),
                T = n("326130"),
                h = n("467006");

            function C(t, e, n, i, r) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = (0, i._)(function(t, e, n, i, u) {
                    var a, l, d, _, E;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (l = null == (a = o.default.getChannel(e)) ? void 0 : a.getGuildId(), d = c.default.getCurrentUser(), null == a || null == e || null == l && !a.isPrivate() || null == d) return [2, !1];
                                if (_ = (0, p.default)(a.id), E = T.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(a.type), !_) return [3, 2];
                                return [4, (0, A.default)({
                                    channelId: a.id,
                                    bypassChangeModal: u
                                })];
                            case 1:
                                if (!r.sent()) return [2, !1];
                                return [3, 3];
                            case 2:
                                if (!(0, s.isActivitiesInTextEnabled)(a, "joinEmbeddedActivity") || !E) return [2, !1];
                                r.label = 3;
                            case 3:
                                return (0, v.default)(l, e), (0, f.startEmbeddedActivity)(e, {
                                    application_id: t.application_id
                                }, i), (0, I.default)({
                                    type: h.AnalyticsGameOpenTypes.JOIN,
                                    userId: d.id,
                                    applicationId: t.application_id,
                                    locationObject: n,
                                    analyticsLocations: i
                                }), [2, !0]
                        }
                    })
                })).apply(this, arguments)
            }

            function y(t) {
                var e, n = t.activity,
                    s = t.currentEmbeddedApplication,
                    f = t.activityChannelId,
                    p = t.locationObject,
                    A = t.embeddedActivitiesManager,
                    I = t.analyticsLocations,
                    T = o.default.getChannel(f),
                    h = null == T ? void 0 : T.getGuildId(),
                    S = null == h || "" === h,
                    y = c.default.getCurrentUser();
                if (null == T || S && !T.isPrivate() || null == f) return Promise.resolve(!1);
                if (d.default.getVoiceChannelId() === f && (null == s ? void 0 : s.id) === n.application_id) return (0, v.default)(h, f), Promise.resolve(!0);
                var m = (e = (0, i._)(function() {
                    var t, e, i, o, d, c, s = arguments;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (t = (s.length > 0 && void 0 !== s[0] ? s[0] : {
                                        bypassChangeVcModal: !1
                                    }).bypassChangeVcModal, (null == y ? void 0 : y.nsfwAllowed) != null) return [3, 4];
                                if (!(null !== (i = a.default.getApplication(n.application_id)) && void 0 !== i)) return [3, 1];
                                return d = i, [3, 3];
                            case 1:
                                return c = l.default.createFromServer, [4, u.default.fetchApplication(n.application_id)];
                            case 2:
                                d = c.apply(l.default, [r.sent()]), r.label = 3;
                            case 3:
                                if ((null === (e = (o = d).embeddedActivityConfig) || void 0 === e ? void 0 : e.requires_age_gate) === !0) return [2, new Promise(function(e) {
                                    (0, _.confirmActivityAgeGate)({
                                        application: o,
                                        onAgree: function() {
                                            e(C(n, f, p, I, t))
                                        },
                                        onDisagree: function() {
                                            return e(!1)
                                        }
                                    })
                                })];
                                r.label = 4;
                            case 4:
                                return [2, C(n, f, p, I, t)]
                        }
                    })
                }), function() {
                    return e.apply(this, arguments)
                });
                return null != s ? new Promise(function(t) {
                    (0, E.default)(s, T, function() {
                        A.leaveActivity({
                            channelId: f,
                            applicationId: s.id
                        }), m({
                            bypassChangeVcModal: !0
                        })
                    }, function() {
                        return t(!0)
                    })
                }) : m()
            }
        },
        481990: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                maybeJoinEmbeddedActivity: function() {
                    return T
                }
            });
            var i = n("356056"),
                r = n("324415");
            n("357629");
            var u = n("992888"),
                a = n("550389"),
                l = n("148934"),
                o = n("527811"),
                d = n("912998"),
                c = n("731865"),
                s = n("327271"),
                f = n("197905"),
                _ = n("871831"),
                E = n("642174"),
                p = n("134223"),
                A = n("116235"),
                I = n("110936"),
                v = n("30175");

            function T(t) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = (0, i._)(function(t) {
                    var e, n, T, h, C, S, y, m, g, N, P, D, O, b, L;

                    function U() {
                        return R.apply(this, arguments)
                    }

                    function R() {
                        return (R = (0, i._)(function() {
                            return (0, r._)(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (null == y) return [2];
                                        return [4, (0, A.default)({
                                            activity: y,
                                            currentEmbeddedApplication: L,
                                            activityChannelId: e,
                                            locationObject: {},
                                            embeddedActivitiesManager: S,
                                            analyticsLocations: C
                                        })];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })).apply(this, arguments)
                    }
                    return (0, r._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (e = t.channelId, n = t.applicationId, T = t.activityId, h = t.inputApplication, C = t.analyticsLocations, S = t.embeddedActivitiesManager, y = p.default.getEmbeddedActivitiesForChannel(e).find(function(t) {
                                        return t.application_id === n && (null == T || t.activity_id === T)
                                    }), null != (m = h)) return [3, 2];
                                return [4, a.default.fetchApplication(n)];
                            case 1:
                                g = i.sent(), m = d.default.createFromServer(g), i.label = 2;
                            case 2:
                                if (null == y || null == m) return [2];
                                return N = _.default.getCurrentUser(), P = (0, I.default)({
                                    userId: null == N ? void 0 : N.id,
                                    activity: y,
                                    application: m,
                                    channelId: e,
                                    currentUser: N,
                                    isActivitiesEnabledForCurrentPlatform: !0,
                                    ChannelStore: c.default,
                                    VoiceStateStore: E.default,
                                    PermissionStore: f.default,
                                    GuildStore: s.default
                                }), L = null != (O = null == (D = p.default.getSelfEmbeddedActivityForChannel(e)) ? void 0 : D.application_id) && null !== (b = l.default.getApplication(O)) && void 0 !== b ? b : void 0, ! function(t) {
                                    var e = t.embeddedActivityJoinability,
                                        n = t.handleCanJoin;
                                    switch (e) {
                                        case I.EmbeddedActivityJoinability.CAN_JOIN:
                                            null == n || n();
                                            break;
                                        case I.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                            (0, o.showActivitiesInvalidPermissionsAlert)();
                                            break;
                                        case I.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                            u.default.show({
                                                title: v.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                                body: v.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                                                hideActionSheet: !1
                                            });
                                            break;
                                        case I.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                            u.default.show({
                                                title: v.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                                body: v.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
                                                hideActionSheet: !1
                                            });
                                            break;
                                        case I.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
                                            u.default.show({
                                                title: v.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                                body: v.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
                                                hideActionSheet: !1
                                            });
                                            break;
                                        case I.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
                                        case I.EmbeddedActivityJoinability.CHANNEL_FULL:
                                        case I.EmbeddedActivityJoinability.NO_CHANNEL:
                                        case I.EmbeddedActivityJoinability.NO_USER:
                                            u.default.show({
                                                title: v.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                                body: v.default.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
                                                hideActionSheet: !1
                                            })
                                    }
                                }({
                                    embeddedActivityJoinability: P,
                                    handleCanJoin: U
                                }), [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        587287: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return g
                }
            });
            var i = n("356056"),
                r = n("324415");
            n("191489"), n("357629"), n("568603"), n("128242");
            var u = n("527811"),
                a = n("731865"),
                l = n("327271"),
                o = n("197905"),
                d = n("871831"),
                c = n("845649"),
                s = n("237427"),
                f = n("197097"),
                _ = n("928484"),
                E = n("134223"),
                p = n("698179"),
                A = n("395151"),
                I = n("466106"),
                v = n("657275"),
                T = n("306990"),
                h = n("153577"),
                C = n("176760"),
                S = n("93809"),
                y = n("326130"),
                m = n("467006");

            function g(t) {
                var e = t.activityItem,
                    n = t.currentActivity,
                    i = t.locationObject,
                    r = t.channelId,
                    s = t.guildId,
                    f = t.embeddedActivitiesManager,
                    _ = t.analyticsLocations,
                    v = l.default.getGuild(s),
                    T = d.default.getCurrentUser(),
                    h = E.default.getConnectedActivityChannelId(),
                    C = a.default.getChannel(h);
                if (null == v && !(0, S.isPrivateChannelWithEnabledActivities)(r) || null == T || null == e) return Promise.resolve(!1);
                var y = e.application,
                    g = e.activity;
                if (null == y) return Promise.resolve(!1);
                if (null == r) return c.ComponentDispatch.dispatch(m.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
                    applicationId: y.id
                }), Promise.resolve(!1);
                var P = null != r ? (0, I.getEmbeddedActivityLaunchability)({
                    channelId: r,
                    ChannelStore: a.default,
                    GuildStore: l.default,
                    PermissionStore: o.default
                }) : I.EmbeddedActivityLaunchability.NO_CHANNEL;
                if (P !== I.EmbeddedActivityLaunchability.CAN_LAUNCH) return P === I.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION && (0, u.showActivitiesInvalidPermissionsAlert)(), Promise.resolve(!1);
                var D = function() {
                    var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        bypassChangeVcModal: !1
                    }).bypassChangeVcModal;
                    return g.requires_age_gate && null == T.nsfwAllowed ? new Promise(function(e) {
                        (0, p.confirmActivityAgeGate)({
                            application: y,
                            onAgree: function() {
                                return e(N({
                                    channelId: r,
                                    guildId: null == v ? void 0 : v.id,
                                    locationObject: i,
                                    application: y,
                                    analyticsLocations: _,
                                    bypassChangeVcModal: t
                                }))
                            },
                            onDisagree: function() {
                                return e(!1)
                            }
                        })
                    }) : N({
                        channelId: r,
                        guildId: null == v ? void 0 : v.id,
                        locationObject: i,
                        application: y,
                        analyticsLocations: _,
                        bypassChangeVcModal: t
                    })
                };
                return null != n ? new Promise(function(t) {
                    (0, A.default)(n, C, function() {
                        f.leaveActivity({
                            channelId: r,
                            applicationId: n.id
                        }), t(D({
                            bypassChangeVcModal: !0
                        }))
                    }, function() {
                        return t(!1)
                    })
                }) : D()
            }

            function N(t) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = (0, i._)(function(t) {
                    var e, n, i, u, l, o, c, E, p, A;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (e = t.channelId, n = t.guildId, i = t.locationObject, u = t.application, l = t.analyticsLocations, o = t.bypassChangeVcModal, c = d.default.getCurrentUser(), E = a.default.getChannel(e), null == c || null == E) return [2, !1];
                                if (p = (0, v.default)(e), A = y.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(E.type), !p) return [3, 2];
                                return [4, (0, T.default)({
                                    channelId: e,
                                    bypassChangeModal: o
                                })];
                            case 1:
                                if (!r.sent()) return [2, !1];
                                return [3, 3];
                            case 2:
                                if (!(0, s.isActivitiesInTextEnabled)(E, "handleStartEmbeddedActivity") || !A) return [2, !1];
                                r.label = 3;
                            case 3:
                                return _.startEmbeddedActivity(e, {
                                    application_id: u.id,
                                    name: u.name
                                }, l), (0, C.default)(n, e), (0, h.default)({
                                    type: m.AnalyticsGameOpenTypes.LAUNCH,
                                    userId: c.id,
                                    applicationId: u.id,
                                    locationObject: i,
                                    analyticsLocations: l
                                }), f.markActivityUsed(u.id), [2, !0]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        89801: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getIsActivitiesEnabledForCurrentPlatform: function() {
                    return a
                },
                useIsActivitiesEnabledForCurrentPlatform: function() {
                    return u
                }
            });
            var i = n("996855");

            function r() {
                return !i.isMobile && !i.isTablet && !0
            }

            function u() {
                return r()
            }

            function a() {
                return r()
            }
        },
        493257: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("501769"),
                r = n("89801"),
                u = n("110936"),
                a = n("149808"),
                l = n("467006");

            function o(t) {
                var e = t.user,
                    n = t.activity,
                    o = t.application,
                    d = t.channelId,
                    c = t.currentUser,
                    s = t.isEmbedded,
                    f = t.ChannelStore,
                    _ = t.GuildStore,
                    E = t.GuildMemberCountStore,
                    p = t.RelationshipStore,
                    A = t.SelectedChannelStore,
                    I = t.VoiceStateStore,
                    v = t.PermissionStore,
                    T = (0, r.getIsActivitiesEnabledForCurrentPlatform)();
                if (null == e) return !1;
                if (s) return (0, u.default)({
                    userId: e.id,
                    activity: n,
                    channelId: d,
                    currentUser: c,
                    application: o,
                    isActivitiesEnabledForCurrentPlatform: T,
                    ChannelStore: f,
                    VoiceStateStore: I,
                    PermissionStore: v,
                    GuildStore: _
                }) === u.EmbeddedActivityJoinability.CAN_JOIN;
                if (!(0, i.isDesktop)()) return !1;
                if ((0, a.default)(n, l.ActivityFlags.PARTY_PRIVACY_FRIENDS) && p.isFriend(e.id)) return !0;
                if ((0, a.default)(n, l.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)) {
                    var h = f.getChannel(A.getVoiceChannelId());
                    if (null == h || !I.isInChannel(h.id, e.id)) return !1;
                    switch (h.type) {
                        case l.ChannelTypes.DM:
                        case l.ChannelTypes.GROUP_DM:
                            return !0
                    }
                    var C = _.getGuild(h.getGuildId());
                    if (null == C || C.hasFeature(l.GuildFeatures.COMMUNITY)) return !1;
                    var S = E.getMemberCount(C.id);
                    return null != S && S < 100
                }
                return !1
            }
        },
        792658: function(t, e, n) {
            "use strict";

            function i(t) {}
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            })
        },
        110936: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                EmbeddedActivityJoinability: function() {
                    return r
                },
                default: function() {
                    return p
                },
                useEmbeddedActivityJoinability: function() {
                    return A
                }
            });
            var i, r, u = n("661223"),
                a = n("731865"),
                l = n("327271"),
                o = n("197905"),
                d = n("871831"),
                c = n("642174"),
                s = n("557129"),
                f = n("89801"),
                _ = n("296868"),
                E = n("467006");

            function p(t) {
                var e, n, i, r = t.userId,
                    u = t.activity,
                    a = t.application,
                    l = t.channelId,
                    o = t.currentUser,
                    d = t.isActivitiesEnabledForCurrentPlatform,
                    c = t.ChannelStore,
                    f = t.VoiceStateStore,
                    p = t.PermissionStore,
                    A = t.GuildStore;
                if (null == r) return 8;
                if ((null == o ? void 0 : o.nsfwAllowed) === !1 && (null == a ? void 0 : null === (e = a.embeddedActivityConfig) || void 0 === e ? void 0 : e.requires_age_gate) === !0) return 7;
                if (!d) return 5;
                if (!(0, _.default)(null == a ? void 0 : null === (n = a.embeddedActivityConfig) || void 0 === n ? void 0 : n.supported_platforms)) return 6;
                var I = null != l ? l : null === (i = f.getVoiceStateForSession(r, null == u ? void 0 : u.session_id)) || void 0 === i ? void 0 : i.channelId;
                if (null == I) return 4;
                var v = c.getChannel(l);
                if (null == v) return 4;
                var T = v.getGuildId();
                if (!v.isPrivate()) {
                    if (null == T) return 10;
                    var h = A.getGuild(T);
                    if ((null == h ? void 0 : h.afkChannelId) === v.id) return 9;
                    var C = f.getCurrentClientVoiceChannelId(v.getGuildId()) === I,
                        S = (0, s.isChannelFull)(v, f, A),
                        y = p.can(E.Permissions.CONNECT, v);
                    if (!p.can(E.Permissions.USE_EMBEDDED_ACTIVITIES, v)) return 1;
                    if (!C) {
                        if (S) return 3;
                        if (!y) return 2
                    }
                }
                return 0
            }

            function A(t) {
                var e = t.userId,
                    n = t.activity,
                    i = t.channelId,
                    r = t.application,
                    s = (0, f.useIsActivitiesEnabledForCurrentPlatform)(),
                    _ = (0, u.useStateFromStores)([d.default], function() {
                        return d.default.getCurrentUser()
                    });
                return (0, u.useStateFromStores)([a.default, c.default, o.default, l.default], function() {
                    return p({
                        userId: e,
                        activity: n,
                        application: r,
                        channelId: i,
                        currentUser: _,
                        isActivitiesEnabledForCurrentPlatform: s,
                        ChannelStore: a.default,
                        VoiceStateStore: c.default,
                        PermissionStore: o.default,
                        GuildStore: l.default
                    })
                }, [n, r, i, _, s, e])
            }(i = r || (r = {}))[i.CAN_JOIN = 0] = "CAN_JOIN", i[i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", i[i.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", i[i.CHANNEL_FULL = 3] = "CHANNEL_FULL", i[i.NO_CHANNEL = 4] = "NO_CHANNEL", i[i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", i[i.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = "ACTIVITY_NOT_SUPPORTED_ON_OS", i[i.ACTIVITY_AGE_GATED = 7] = "ACTIVITY_AGE_GATED", i[i.NO_USER = 8] = "NO_USER", i[i.IS_AFK_CHANNEL = 9] = "IS_AFK_CHANNEL", i[i.NO_GUILD = 10] = "NO_GUILD"
        },
        466106: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                EmbeddedActivityLaunchability: function() {
                    return r
                },
                getEmbeddedActivityLaunchability: function() {
                    return f
                },
                getEmbeddedActivityLaunchabilityLabel: function() {
                    return E
                },
                useEmbeddedActivityLaunchability: function() {
                    return _
                }
            });
            var i, r, u = n("661223"),
                a = n("731865"),
                l = n("327271"),
                o = n("197905"),
                d = n("93809"),
                c = n("467006"),
                s = n("30175");

            function f(t) {
                var e = t.channelId,
                    n = t.ChannelStore,
                    i = t.GuildStore,
                    r = t.PermissionStore,
                    u = n.getChannel(e);
                if (null == u) return 3;
                if (!(0, d.isPrivateChannelWithEnabledActivities)(u.id)) {
                    var a = u.getGuildId();
                    if (null == a) return 4;
                    var l = i.getGuild(a);
                    if ((null == l ? void 0 : l.afkChannelId) === u.id) return 5;
                    if (!r.can(c.Permissions.CONNECT, u)) return 2;
                    if (!r.can(c.Permissions.USE_EMBEDDED_ACTIVITIES, u)) return 1
                }
                return 0
            }

            function _(t) {
                return (0, u.useStateFromStores)([a.default, l.default, o.default], function() {
                    return f({
                        channelId: t,
                        ChannelStore: a.default,
                        GuildStore: l.default,
                        PermissionStore: o.default
                    })
                }, [t])
            }

            function E(t) {
                switch (t) {
                    case 0:
                        return s.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
                    case 1:
                        return s.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                    default:
                        return s.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
                }
            }(i = r || (r = {}))[i.CAN_LAUNCH = 0] = "CAN_LAUNCH", i[i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", i[i.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", i[i.NO_CHANNEL = 3] = "NO_CHANNEL", i[i.NO_GUILD = 4] = "NO_GUILD", i[i.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL"
        },
        137366: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("723768"), n("301563");
            var i = n("326130");

            function r(t) {
                if (null != t && null != t.url && i.validStreamURL.test(t.url)) return t.url
            }
        },
        149808: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("789020");
            var i = n("467006");

            function r(t, e) {
                return e !== i.ActivityFlags.INSTANCE && null != t && null != t.flags && !!(t.flags & e)
            }
        },
        565992: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("678728");

            function r(t) {
                return null == t.premium_tier_requirement || (0, i.default)(t)
            }
        },
        678728: function(t, e, n) {
            "use strict";

            function i(t) {
                var e = Date.now(),
                    n = null != t.free_period_starts_at ? Date.parse(t.free_period_starts_at) : null,
                    i = null != t.free_period_ends_at ? Date.parse(t.free_period_ends_at) : null;
                return (null != n || null != i) && (null == n && null != i ? e < i : null != n && null == i ? e >= n : null != n && null != i && e >= n && e < i)
            }
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            })
        },
        296868: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            }), n("568603"), n("128242");
            var i = n("243770"),
                r = n("501769");

            function u(t) {
                var e, n;
                return e = (0, r.isIOS)() ? i.EmbeddedActivitySupportedPlatforms.IOS : (0, r.isAndroid)() ? i.EmbeddedActivitySupportedPlatforms.ANDROID : i.EmbeddedActivitySupportedPlatforms.WEB, null !== (n = null == t ? void 0 : t.includes(e)) && void 0 !== n && n
            }
        },
        337574: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("149808"),
                r = n("467006");

            function u(t) {
                return (0, i.default)(t, r.ActivityFlags.EMBEDDED)
            }
        },
        306990: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            });
            var i = n("356056"),
                r = n("87627"),
                u = n("29713"),
                a = n("918256"),
                l = n("778455"),
                o = n("324415");
            n("411104"), n("191489"), n("357629"), n("653041");
            var d = n("987393"),
                c = n("16848"),
                s = n("140117"),
                f = n("731865"),
                _ = n("197905"),
                E = n("232733"),
                p = n("642174"),
                A = function(t) {
                    (0, u._)(n, t);
                    var e = (0, l._)(n);

                    function n() {
                        return (0, r._)(this, n), e.apply(this, arguments)
                    }
                    return n
                }((0, a._)(Error));

            function I(t) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = (0, i._)(function(t) {
                    var e, n, i, r, u, a, l, I;
                    return (0, o._)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (e = t.channelId, i = void 0 === (n = t.timeoutMs) ? 1e4 : n, u = void 0 !== (r = t.bypassChangeModal) && r, null == (a = f.default.getChannel(e))) return [2, !1];
                                return [4, c.default.handleVoiceConnect({
                                    bypassGuildIdCheck: !0,
                                    bypassChangeModal: u,
                                    channel: a,
                                    connected: p.default.isInChannel(e),
                                    needSubscriptionToAccess: (0, s.getChannelRoleSubscriptionStatus)(e, f.default, d.default, _.default).needSubscriptionToAccess
                                })];
                            case 1:
                                if (!o.sent()) return [2, !1];
                                l = new Promise(function(t, n) {
                                    var r = setTimeout(function() {
                                        n(new A("Joining voice channel has timed out."))
                                    }, i);
                                    E.default.addConditionalChangeListener(function() {
                                        return E.default.getVoiceChannelId() !== e || (clearTimeout(r), t(), !1)
                                    })
                                }), o.label = 2;
                            case 2:
                                return o.trys.push([2, 4, , 5]), [4, l];
                            case 3:
                                return o.sent(), [3, 5];
                            case 4:
                                if ((I = o.sent()) instanceof A) return [2, !1];
                                throw I;
                            case 5:
                                return [2, !0]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        153577: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("328470"),
                r = n("467006");

            function u(t) {
                var e = t.type,
                    n = t.source,
                    u = t.userId,
                    a = t.applicationId,
                    l = t.partyId,
                    o = t.messageId,
                    d = t.locationObject,
                    c = t.analyticsLocations;
                i.default.track(r.AnalyticEvents.APPLICATION_OPENED, {
                    type: e,
                    source: n,
                    application_id: a,
                    party_id: null != l ? l : void 0,
                    other_user_id: u,
                    message_id: o,
                    location: d,
                    location_stack: c
                })
            }
        },
        176760: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("71132"),
                r = n("217806"),
                u = n("521588"),
                a = n("467006");

            function l(t, e) {
                i.default.getWindowOpen(a.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? (0, r.default)(a.PopoutWindowKeys.CHANNEL_CALL_POPOUT) : (0, u.transitionTo)(a.Routes.CHANNEL(t, e))
            }
        },
        598266: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("661223"),
                r = n("134223");

            function u() {
                return (0, i.useStateFromStores)([r.default], function() {
                    return r.default.getCurrentEmbeddedActivity()
                })
            }
        },
        881220: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("154005"),
                r = n("93153"),
                u = n("598266");

            function a() {
                var t = (0, u.default)(),
                    e = (0, i._)((0, r.default)(null == t ? [] : [t.application_id]), 1)[0];
                return null != e ? e : void 0
            }
        },
        93809: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                },
                isPrivateChannelWithEnabledActivities: function() {
                    return l
                }
            });
            var i = n("203959"),
                r = n("731865"),
                u = n("919423");

            function a(t) {
                var e, n = (0, u.useIsActivitiesInGdmEnabled)(),
                    a = (0, i.default)([r.default], function() {
                        return r.default.getChannel(t)
                    }),
                    l = null !== (e = null == a ? void 0 : a.isPrivate()) && void 0 !== e && e;
                return n && l
            }

            function l(t) {
                if (null == t) return !1;
                var e, n = r.default.getChannel(t),
                    i = null !== (e = null == n ? void 0 : n.isPrivate()) && void 0 !== e && e;
                return u.ActivitiesInGdmExperiment.getCurrentConfig({
                    location: "f31c95_1"
                }, {
                    autoTrackExposure: !1
                }).isActivitiesInGdmEnabled && i
            }
        },
        621040: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return A
                }
            });
            var i = n("356056"),
                r = n("87627"),
                u = n("29713"),
                a = n("21189"),
                l = n("778455"),
                o = n("324415"),
                d = n("735250");
            n("470079");
            var c = n("974328"),
                s = n("312916"),
                f = n("781735"),
                _ = n("928484"),
                E = n("287472"),
                p = n("30175"),
                A = new(function(t) {
                    (0, u._)(n, t);
                    var e = (0, l._)(n);

                    function n() {
                        var t;
                        return (0, r._)(this, n), t = e.apply(this, arguments), t.handleRPCDisconnect = function(e) {
                            var n = e.reason,
                                i = e.application;
                            t.superHandleRPCDisconnect({
                                reason: n,
                                application: i
                            })
                        }, t
                    }
                    var E = n.prototype;
                    return E.showErrorModal = function(t) {
                        var e = t.code,
                            n = t.message;
                        (0, c.openModalLazy)((0, i._)(function() {
                            return (0, o._)(this, function(t) {
                                return [2, function(t) {
                                    return (0, d.jsx)(f.default, (0, a._)({
                                        title: p.default.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
                                            code: e
                                        }),
                                        body: n
                                    }, t))
                                }]
                            })
                        }))
                    }, E.showLaunchErrorModal = function(t) {
                        (0, c.openModalLazy)((0, i._)(function() {
                            return (0, o._)(this, function(e) {
                                return [2, function(e) {
                                    return (0, d.jsx)(f.default, (0, a._)({
                                        title: p.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                        body: t
                                    }, e))
                                }]
                            })
                        }))
                    }, E.leaveActivity = function(t) {
                        var e = t.channelId,
                            n = t.applicationId;
                        s.default.wait(function() {
                            return (0, _.stopEmbeddedActivity)({
                                channelId: e,
                                applicationId: n
                            })
                        })
                    }, n
                }(E.default))
        },
        550389: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var i = n("356056"),
                r = n("21189"),
                u = n("227094"),
                a = n("261047"),
                l = n("324415");
            n("789020"), n("462848"), n("357629"), n("653041"), n("610138"), n("216116"), n("78328"), n("815648"), n("996173"), n("47120"), n("363505"), n("293114"), n("191489");
            var o = n("454836"),
                d = n("312916"),
                c = n("984362"),
                s = n("148934"),
                f = n("467006"),
                _ = {
                    createApplication(t) {
                        var e = t.name,
                            n = t.guildId,
                            r = t.type,
                            u = t.teamId;
                        return (0, i._)(function() {
                            var t;
                            return (0, l._)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, o.default.post({
                                            url: f.Endpoints.APPLICATIONS,
                                            body: {
                                                name: e,
                                                type: r,
                                                guild_id: n,
                                                team_id: u
                                            }
                                        })];
                                    case 1:
                                        return t = i.sent().body, null != n && null != r && d.default.dispatch({
                                            type: "APPLICATION_FETCH_SUCCESS",
                                            application: t
                                        }), [2, t]
                                }
                            })
                        })()
                    },
                    getApplicationsForGuild(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, i._)(function() {
                            var n, i, c;
                            return (0, l._)(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return n = e.includeTeam, i = (0, a._)(e, ["includeTeam"]), [4, o.default.get({
                                            url: f.Endpoints.GUILD_APPLICATIONS(t),
                                            query: (0, u._)((0, r._)({}, i), {
                                                include_team: n
                                            })
                                        })];
                                    case 1:
                                        return c = l.sent().body, d.default.dispatch({
                                            type: "APPLICATIONS_FETCH_SUCCESS",
                                            applications: c
                                        }), [2, c]
                                }
                            })
                        })()
                    },
                    transferApplication(t) {
                        var e = t.applicationId,
                            n = t.teamId;
                        return (0, i._)(function() {
                            var t;
                            return (0, l._)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, o.default.post({
                                            url: f.Endpoints.APPLICATION_OWNER_TRANSFER(e),
                                            body: {
                                                team_id: n
                                            }
                                        })];
                                    case 1:
                                        return t = i.sent().body, d.default.dispatch({
                                            type: "APPLICATION_FETCH_SUCCESS",
                                            application: t
                                        }), [2, t]
                                }
                            })
                        })()
                    },
                    fetchApplications(t) {
                        var e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        return (0, i._)(function() {
                            var n, i, r, u;
                            return (0, l._)(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = t, !e && (i = function(t) {
                                                var e, n, i = s.default.getApplication(t),
                                                    r = (0, c.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, f.ApplicationFlags.EMBEDDED) && (null == i ? void 0 : null === (e = i.embeddedActivityConfig) || void 0 === e ? void 0 : e.supported_platforms) == null;
                                                return !(null != i && !r) && !s.default.isFetchingApplication(t) && !s.default.didFetchingApplicationFail(t) && t.length > 0
                                            }, n = t.filter(i)), !(n.length > 0)) return [3, 5];
                                        d.default.dispatch({
                                            type: "APPLICATIONS_FETCH",
                                            applicationIds: n
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, o.default.get({
                                            url: f.Endpoints.APPLICATIONS_PUBLIC,
                                            query: new URLSearchParams(n.map(function(t) {
                                                return ["application_ids", t]
                                            })).toString(),
                                            oldFormErrors: !0
                                        })];
                                    case 2:
                                        return r = a.sent(), [3, 4];
                                    case 3:
                                        throw u = a.sent(), d.default.dispatch({
                                            type: "APPLICATIONS_FETCH_FAIL",
                                            applicationIds: n
                                        }), u;
                                    case 4:
                                        d.default.dispatch({
                                            type: "APPLICATIONS_FETCH_SUCCESS",
                                            applications: r.body
                                        }), a.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })()
                    },
                    fetchApplication(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return d.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: t
                        }), o.default.get({
                            url: f.Endpoints.APPLICATION_PUBLIC(t),
                            query: {
                                with_guild: e
                            },
                            oldFormErrors: !0
                        }).then(function(t) {
                            return d.default.dispatch({
                                type: "APPLICATION_FETCH_SUCCESS",
                                application: t.body
                            }), t.body
                        }).catch(function(e) {
                            return d.default.dispatch({
                                type: "APPLICATION_FETCH_FAIL",
                                applicationId: t
                            }), Promise.reject(e)
                        })
                    }
                }
        },
        93153: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                },
                useGetOrFetchApplication: function() {
                    return d
                }
            }), n("363505");
            var i = n("470079"),
                r = n("661223"),
                u = n("331900"),
                a = n("550389"),
                l = n("148934");

            function o(t) {
                var e = i.useRef([]);
                return i.useEffect(function() {
                    !(0, u.areArraysShallowEqual)(t, e.current) && (a.default.fetchApplications(t, !1), e.current = t)
                }, [t]), (0, r.useStateFromStoresArray)([l.default], function() {
                    return t.map(function(t) {
                        return l.default.getApplication(t)
                    })
                })
            }

            function d(t) {
                return o(null != t ? [t] : [])[0]
            }
        },
        143369: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                cleanExecutablePath: function() {
                    return p
                },
                default: function() {
                    return A
                }
            });
            var i, r = n("356056"),
                u = n("324415");
            n("757143"), n("301563"), n("733019"), n("653041"), n("357629"), n("723026"), n("568603"), n("128242"), n("917168"), n("849202"), n("230036");
            var a = n("392711"),
                l = n.n(a),
                o = n("99588"),
                d = n("841869"),
                c = n("501769"),
                s = n("432056"),
                f = [];

            function _(t) {
                return t = t.toLowerCase(), (0, c.isWindows)() && (t = (t = t.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), t
            }

            function E(t) {
                null != t && "" !== t && (!(t = _(t)).endsWith("/") && (t += "/"), f.push(t))
            }

            function p(t) {
                t = _(t);
                var e = !1;
                return (f.forEach(function(n) {
                    !e && t.startsWith(n) && (t = t.substr(n.length), e = !0)
                }), e) ? t = t.includes("dosbox.exe") ? t.split("/").slice(-3).join("/") : t.split("/").slice(-2).join("/") : null
            }

            function A() {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = (0, r._)(function() {
                    var t, e, n;
                    return (0, u._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (null != i) return [2, i];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 4, , 5]), [4, s.default.ensureModule("discord_game_utils")];
                            case 2:
                                return r.sent(), [4, s.default.requireModule("discord_game_utils")];
                            case 3:
                                return i = r.sent(), [3, 5];
                            case 4:
                                return t = r.sent(), new d.default("GamesActionCreators").error("could not load discord_game_utils", t), [3, 5];
                            case 5:
                                return (0, c.isWindows)() && (E((e = o.default.process.env).LOCALAPPDATA), E(e["PROGRAMFILES(X86)"]), E(e.PROGRAMFILES), E(e.PROGRAMW6432), E(e.PROGRAMDATA), E("/games/"), E("/steamlibrary/steamapps/common/")), [4, (n = o.default.remoteApp.getPath)("home")];
                            case 6:
                                return E.apply(void 0, [r.sent()]), [4, n("appData")];
                            case 7:
                                return E.apply(void 0, [r.sent()]), [4, n("desktop")];
                            case 8:
                                return E.apply(void 0, [r.sent()]), [4, n("documents")];
                            case 9:
                                return E.apply(void 0, [r.sent()]), [4, n("downloads")];
                            case 10:
                                return E.apply(void 0, [r.sent()]), (f = l().uniq(f)).sort(function(t, e) {
                                    return e.length - t.length
                                }), [2, i]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        442609: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return S
                },
                maybeFetchColors: function() {
                    return v
                },
                useAvatarColors: function() {
                    return y
                },
                useColorStore: function() {
                    return I
                }
            });
            var i = n("356056"),
                r = n("21189"),
                u = n("227094"),
                a = n("154005"),
                l = n("761020"),
                o = n("324415");
            n("653041"), n("849202"), n("814951"), n("363505");
            var d = n("470079"),
                c = n("979590"),
                s = n.n(c),
                f = n("652874"),
                _ = n("661223"),
                E = n("329420"),
                p = n("567746"),
                A = n("495366"),
                I = (0, f.default)(function() {
                    return {
                        palette: {},
                        fetching: {}
                    }
                });

            function v(t) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = (0, i._)(function(t) {
                    return (0, o._)(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (null != I.getState().palette[t]) return [2];
                                return [4, h(t)];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function h(t) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = (0, i._)(function(t) {
                    var e, n, i;
                    return (0, o._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (I.getState().fetching[t]) return [2];
                                I.setState(function(e) {
                                    return {
                                        fetching: (0, u._)((0, r._)({}, e.fetching), {
                                            [t]: !0
                                        })
                                    }
                                }), i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, (0, A.getPaletteForAvatar)(t)];
                            case 2:
                                return e = i.sent(), n = (0, p.getComplimentaryPaletteForColor)(e[0]), I.setState(function(i) {
                                    return {
                                        fetching: (0, u._)((0, r._)({}, i.fetching), {
                                            [t]: !1
                                        }),
                                        palette: (0, u._)((0, r._)({}, i.palette), {
                                            [t]: (0, l._)(e.slice(0, 2)).concat((0, l._)(n))
                                        })
                                    }
                                }), [3, 4];
                            case 3:
                                return i.sent(), I.setState(function(e) {
                                    return {
                                        fetching: (0, u._)((0, r._)({}, e.fetching), {
                                            [t]: !1
                                        })
                                    }
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function S(t, e) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                return (0, a._)(y(t, e, n), 1)[0]
            }

            function y(t, e) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = I(function(e) {
                        return null == t ? void 0 : e.palette[t]
                    }),
                    r = (0, _.useStateFromStores)([E.default], function() {
                        return n && E.default.desaturateUserColors ? E.default.saturation : 1
                    });
                d.useEffect(function() {
                    null != t && null == i && h(t)
                }, [t, i]);
                var u = d.useMemo(function() {
                    return null == i ? void 0 : i.map(function(t) {
                        var e = (0, a._)(t, 3),
                            n = e[0],
                            i = e[1],
                            u = e[2],
                            l = s()({
                                r: n,
                                g: i,
                                b: u
                            }).toHsl(),
                            o = l.h,
                            d = l.s,
                            c = l.l;
                        return s()({
                            h: o,
                            s: d * r,
                            l: c
                        }).toHexString()
                    })
                }, [i, r]);
                return null != u ? u : [e, e]
            }
        },
        16848: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return v
                }
            });
            var i = n("356056"),
                r = n("21189"),
                u = n("324415");
            n("411104"), n("191489"), n("357629");
            var a = n("735250");
            n("470079");
            var l = n("974328"),
                o = n("820228"),
                d = n("983325"),
                c = n("521588"),
                s = n("972942"),
                f = n("267951"),
                _ = n("262047"),
                E = n("232733"),
                p = n("642174"),
                A = n("130200"),
                I = n("467006"),
                v = {
                    handleVoiceConnect(t) {
                        var e = t.channel,
                            v = t.connected,
                            T = t.needSubscriptionToAccess,
                            h = t.locked,
                            C = void 0 !== h && h,
                            S = t.routeDirectlyToChannel,
                            y = void 0 !== S && S,
                            m = t.bypassChangeModal,
                            g = t.bypassGuildIdCheck,
                            N = void 0 !== g && g;
                        return (0, i._)(function() {
                            var t, h, S, g;
                            return (0, u._)(this, function(P) {
                                switch (P.label) {
                                    case 0:
                                        if (t = this, !e.isThread()) return [3, 3];
                                        return [4, f.default.unarchiveThreadIfNecessary(e.id)];
                                    case 1:
                                        if (P.sent(), s.default.hasJoined(e.id)) return [3, 3];
                                        return [4, f.default.joinThread(e, "Join Voice")];
                                    case 2:
                                        P.sent(), P.label = 3;
                                    case 3:
                                        if (h = d.default.getRemoteSessionId(), g = (null == (S = p.default.getVoiceStateForSession(_.default.getId(), h)) ? void 0 : S.channelId) === e.id || E.default.getChannelId() === p.default.getCurrentClientVoiceChannelId(e.guild_id), !m && !C && (0, A.shouldShowVoiceChannelChangeConfirmation)(e)) return [2, new Promise(function(o) {
                                            var d = t;
                                            (0, l.openModalLazy)((0, i._)(function() {
                                                var t;
                                                return (0, u._)(this, function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return [4, n.el("16848@4953:5029").then(n.bind(n, "288154"))];
                                                        case 1:
                                                            return t = i.sent().default, [2, function(n) {
                                                                return (0, a.jsx)(t, (0, r._)({
                                                                    channel: e,
                                                                    onConfirm: function() {
                                                                        return o(d.handleVoiceConnect({
                                                                            channel: e,
                                                                            connected: v,
                                                                            needSubscriptionToAccess: T,
                                                                            routeDirectlyToChannel: y,
                                                                            locked: C,
                                                                            bypassChangeModal: !0
                                                                        }))
                                                                    }
                                                                }, n))
                                                            }]
                                                    }
                                                })
                                            }))
                                        })];
                                        return !C && !v && o.default.selectVoiceChannel(e.id), !__OVERLAY__ && (v || g || T || y) && ! function(t) {
                                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                                n = t.getGuildId();
                                            if (null == n && !e) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                                            (0, c.transitionTo)(I.Routes.CHANNEL(n, t.id))
                                        }(e, N), [2, !0]
                                }
                            })
                        }).apply(this)
                    }
                }
        },
        613352: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getProfilePreviewField: function() {
                    return _
                },
                setNewPendingAvatar: function() {
                    return c
                },
                setNewPendingAvatarDecoration: function() {
                    return s
                },
                setNewPendingProfileEffectId: function() {
                    return f
                },
                setNewPendingUserBio: function() {
                    return d
                },
                showRemoveAvatar: function() {
                    return E
                },
                showRemoveBanner: function() {
                    return p
                },
                useAvatarsWithGuilds: function() {
                    return o
                }
            }), n("653041"), n("151809"), n("363505");
            var i = n("470079"),
                r = n("702143"),
                u = n("857"),
                a = n("246619"),
                l = n("361733");

            function o(t) {
                return i.useMemo(function() {
                    var e = l.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (var i in e) {
                        var r, u = null === (r = e[i][t]) || void 0 === r ? void 0 : r.avatar;
                        null != u && (null == n[u] && (n[u] = []), n[u].push(i))
                    }
                    return null != n ? Object.entries(n).map(function(t) {
                        return t[1][0]
                    }) : []
                }, [t])
            }

            function d(t, e) {
                (0, a.setPendingBio)(t === e ? void 0 : t)
            }

            function c(t, e) {
                (0, r.setPendingAvatar)(t === e ? void 0 : t)
            }

            function s(t, e) {
                if ((0, u.isEqualAvatarDecoration)(t, null != e ? e : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(t)
            }

            function f(t, e) {
                if (t === e) {
                    (0, r.setPendingProfileEffectId)(void 0);
                    return
                }(0, r.setPendingProfileEffectId)(t)
            }

            function _(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != t) return "" === t ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: t,
                    isUsingGuildValue: i
                };
                return null != e && "" !== e ? {
                    value: e,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function E(t, e) {
                return void 0 === t ? null != e : null != t
            }

            function p(t, e) {
                return void 0 === t ? null != e : null != t
            }
        },
        853180: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("814951");
            var i = n("467006");

            function r(t) {
                var e = window.GLOBAL_ENV,
                    n = e.CDN_HOST;
                return "development" !== e.PROJECT_ENV ? "".concat(location.protocol, "//").concat(n).concat(i.Endpoints.SOUNDBOARD_SOUND(t)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(t))
            }
        },
        340076: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("362939"),
                r = n("386130"),
                u = n("947781");

            function a(t) {
                var e, n;
                return Math.min(t * (n = i.SoundboardSettings.getSetting(), (0, u.amplitudeToPerceptual)(null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100) / 100) * Math.min(r.default.getOutputVolume() / 100, 1), 1)
            }
        },
        70223: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ensureSpotifyPlayable: function() {
                    return s
                },
                ensureSpotifyPremium: function() {
                    return _
                },
                isSpotifyPlayable: function() {
                    return c
                },
                isSpotifyPremium: function() {
                    return f
                }
            }), n("191489"), n("357629"), n("411104"), n("177593"), n("633702"), n("266796"), n("996173"), n("47120"), n("814951");
            var i = n("763301"),
                r = n("480802"),
                u = n("202026"),
                a = n("822532"),
                l = n("567927"),
                o = n("161423"),
                d = n("467006");

            function c(t) {
                return null != t.getActiveSocketAndDevice() || a.default.isProtocolRegistered()
            }

            function s() {
                var t = l.default.getActiveSocketAndDevice();
                if (null != t) return Promise.resolve(t);
                if (!a.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
                var e = l.default.getPlayableComputerDevices();
                if (r.default.isObservedAppRunning(i.default.get(d.PlatformTypes.SPOTIFY).name) && e.length > 0) {
                    var n = e[0],
                        c = n.socket,
                        s = n.device;
                    return (0, u.setActiveDevice)(c.accountId, s.id), Promise.resolve({
                        socket: c,
                        device: s
                    })
                }
                return new Promise(function(t, n) {
                    var i = setTimeout(function() {
                            l.default.removeChangeListener(r), n(Error("timeout launching spotify"))
                        }, 3e4),
                        r = function() {
                            var n = l.default.getPlayableComputerDevices(),
                                a = !0,
                                o = !1,
                                d = void 0;
                            try {
                                for (var c, s = n[Symbol.iterator](); !(a = (c = s.next()).done); a = !0) ! function() {
                                    var n = c.value,
                                        a = n.socket,
                                        o = n.device;
                                    null == e.find(function(t) {
                                        return t.device.id === o.id
                                    }) && (clearTimeout(i), l.default.removeChangeListener(r), setImmediate(function() {
                                        (0, u.setActiveDevice)(a.accountId, o.id), t({
                                            socket: a,
                                            device: o
                                        })
                                    }))
                                }()
                            } catch (t) {
                                o = !0, d = t
                            } finally {
                                try {
                                    !a && null != s.return && s.return()
                                } finally {
                                    if (o) throw d
                                }
                            }
                        };
                    l.default.addChangeListener(r), window.open("".concat(o.SPOTIFY_APP_PROTOCOL, ":"))
                })
            }

            function f() {
                var t = l.default.getActiveSocketAndDevice();
                return null == t ? null : t.socket.isPremium
            }

            function _() {
                var t = l.default.getActiveSocketAndDevice();
                if (null == t) return Promise.reject(Error("no active profile"));
                var e = t.socket;
                return e.isPremium ? Promise.resolve() : (0, u.getProfile)(e.accountId, e.accessToken).then(function() {
                    if (!e.isPremium) return Promise.reject(Error("spotify account is not premium"))
                })
            }
        },
        841564: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            }), n("568603"), n("128242");
            var i = n("328470"),
                r = n("70223"),
                u = n("161423"),
                a = n("467006"),
                l = [u.SpotifyActionTypes.USER_ACTIVITY_SYNC, u.SpotifyActionTypes.EMBED_SYNC];

            function o(t, e, n, u) {
                i.default.track(a.AnalyticEvents.SPOTIFY_BUTTON_CLICKED, {
                    type: t,
                    source: u,
                    is_premium: (0, r.isSpotifyPremium)(),
                    party_id: l.includes(t) && (null == n ? void 0 : n.party) != null ? n.party.id : null,
                    other_user_id: e.id
                })
            }
        },
        133383: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("768021"),
                r = n("467006");

            function u(t) {
                return !!t || ((0, i.default)(r.PlatformTypes.SPOTIFY, "Spotify Button"), !1)
            }
        },
        621927: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("161423"),
                r = n("30175");

            function u(t, e) {
                switch (e) {
                    case i.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                        return t.hasSpotifyAccount ? r.default.Messages.USER_ACTIVITY_PLAY_ON_PLATFORM.format({
                            platform: i.SPOTIFY_PLATFORM_NAME
                        }) : r.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                            platform: i.SPOTIFY_PLATFORM_NAME
                        });
                    case i.SpotifyActionTypes.EMBED_SYNC:
                        if (!t.hasSpotifyAccount) return r.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                            platform: i.SPOTIFY_PLATFORM_NAME
                        });
                        if (t.syncingWithUser || t.syncingWithParty) return r.default.Messages.INVITE_EMBED_JOINED;
                        return r.default.Messages.JOIN;
                    case i.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                    default:
                        return
                }
            }
        },
        826575: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("439823"),
                r = n("161423"),
                u = n("30175");

            function a(t, e, n) {
                switch (e) {
                    case r.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                        if (t.isCurrentUser) return u.default.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF;
                        if (t.playingSameTrack) return u.default.Messages.USER_ACTIVITY_ALREADY_PLAYING;
                        if (t.notPlayable) return u.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: r.SPOTIFY_PLATFORM_NAME
                        });
                        return;
                    case r.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                        if (t.isCurrentUser) return u.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                        if (t.syncingWithUser || t.syncingWithParty) return u.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                        return u.default.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
                            name: null != n ? n : i.default.getName(t.user)
                        });
                    case r.SpotifyActionTypes.EMBED_SYNC:
                        if (t.isCurrentUser) return u.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                        if (t.syncingWithUser || t.syncingWithParty) return u.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                        if (t.notPlayable) return u.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: r.SPOTIFY_PLATFORM_NAME
                        });
                        return;
                    default:
                        return
                }
            }
        },
        696463: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("70223");

            function r(t, e, n, r) {
                var u, a, l, o = t.hasConnectedAccount(),
                    d = (0, i.isSpotifyPlayable)(t),
                    c = t.getTrack(),
                    s = t.getSyncingWith(),
                    f = t.getActivity(),
                    _ = null !== (l = null !== (a = null == c ? void 0 : c.id) && void 0 !== a ? a : null == f ? void 0 : f.sync_id) && void 0 !== l ? l : t.getLastPlayedTrackId();
                return {
                    user: n,
                    activity: r,
                    hasSpotifyAccount: o,
                    canPlaySpotify: d,
                    notPlayable: o && !d,
                    syncingWithParty: (null == f ? void 0 : f.party) != null && (null == r ? void 0 : null === (u = r.party) || void 0 === u ? void 0 : u.id) === f.party.id,
                    syncingWithUser: (null == s ? void 0 : s.userId) != null && (null == s ? void 0 : s.userId) === n.id,
                    isCurrentUser: n.id === e.getId(),
                    currentUserTrackId: _,
                    playingSameTrack: null != _ && _ === (null == r ? void 0 : r.sync_id)
                }
            }
        },
        739528: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var i = n("356056"),
                r = n("21189"),
                u = n("324415");
            n("191489"), n("357629");
            var a = n("735250");
            n("470079");
            var l = n("974328"),
                o = n("525728"),
                d = n("70223"),
                c = n("841564"),
                s = n("133383");

            function f(t, e, n) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = (0, i._)(function(t, e, f) {
                    var _, E, p;
                    return (0, u._)(this, function(A) {
                        switch (A.label) {
                            case 0:
                                if (_ = t.hasSpotifyAccount, E = t.activity, p = t.user, !(0, s.default)(_) || null == E || null == E.sync_id) return [2];
                                return [4, (0, d.ensureSpotifyPlayable)()];
                            case 1:
                                return A.sent(), [4, (0, d.ensureSpotifyPremium)().catch(function(t) {
                                    return (0, l.openModalLazy)((0, i._)(function() {
                                        var t;
                                        return (0, u._)(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, n.el("739528@2206:2244").then(n.bind(n, "680339"))];
                                                case 1:
                                                    return t = e.sent().default, [2, function(e) {
                                                        return (0, a.jsx)(t, (0, r._)({}, e))
                                                    }]
                                            }
                                        })
                                    })), Promise.reject(t)
                                })];
                            case 2:
                                return A.sent(), o.sync(E, p.id), (0, c.default)(e, p, E, f), [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        804715: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var i = n("356056"),
                r = n("324415"),
                u = n("525728"),
                a = n("70223"),
                l = n("841564"),
                o = n("133383");

            function d(t, e, n) {
                return c.apply(this, arguments)
            }

            function c() {
                return (c = (0, i._)(function(t, e, n) {
                    var i, d, c;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (i = t.hasSpotifyAccount, d = t.activity, c = t.user, !(0, o.default)(i) || null == d || null == d.sync_id) return [2];
                                return [4, (0, a.ensureSpotifyPlayable)()];
                            case 1:
                                return r.sent(), u.play(d, c.id), (0, l.default)(e, c, d, n), [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        522044: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                UserProfileSections: function() {
                    return i
                },
                UserProfileTypes: function() {
                    return r
                },
                getBadgeAsset: function() {
                    return o
                }
            }), n("814951");
            var i, r, u, a, l = n("467006");

            function o(t) {
                var e = window.GLOBAL_ENV,
                    n = e.API_ENDPOINT,
                    i = e.CDN_HOST;
                return null != i ? "".concat(location.protocol, "//").concat(i, "/badge-icons/").concat(t, ".png") : "".concat(location.protocol).concat(n).concat(l.Endpoints.BADGE_ICON(t))
            }(u = i || (i = {})).USER_INFO = "USER_INFO", u.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", u.ACTIVITY = "ACTIVITY", u.MUTUAL_GUILDS = "MUTUAL_GUILDS", u.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", u.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (a = r || (r = {})).POPOUT = "POPOUT", a.MODAL = "MODAL", a.SETTINGS = "SETTINGS", a.PANEL = "PANEL", a.CARD = "CARD", a.POMELO_POPOUT = "POMELO_POPOUT", a.CANCEL_MODAL = "CANCEL_MODAL"
        },
        404252: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("87627"),
                r = n("200344"),
                u = n("761020");
            n("814951");
            var a = n("613352"),
                l = n("204606"),
                o = n("488867"),
                d = n("171168");

            function c(t, e) {
                return null == e || "" === e ? t : e
            }
            var s = function() {
                function t(e, n) {
                    var r, u, a, l;
                    (0, i._)(this, t), this.userId = e.userId, this.guildId = null == n ? void 0 : n.guildId, this.banner = null !== (r = null == n ? void 0 : n.banner) && void 0 !== r ? r : e.banner, this.bio = c(e.bio, null == n ? void 0 : n.bio), this.pronouns = c(e.pronouns, null == n ? void 0 : n.pronouns), this.accentColor = e.accentColor, this.themeColors = null !== (u = null == n ? void 0 : n.themeColors) && void 0 !== u ? u : e.themeColors, this.popoutAnimationParticleType = null !== (a = null == n ? void 0 : n.popoutAnimationParticleType) && void 0 !== a ? a : e.popoutAnimationParticleType, this.profileEffectId = null !== (l = null == n ? void 0 : n.profileEffectId) && void 0 !== l ? l : e.profileEffectId, this._userProfile = e, this._guildMemberProfile = n
                }
                var e = t.prototype;
                return e.hasThemeColors = function() {
                    var t, e;
                    return (null === (t = this.themeColors) || void 0 === t ? void 0 : t[0]) != null || (null === (e = this.themeColors) || void 0 === e ? void 0 : e[1]) != null
                }, e.hasPremiumCustomization = function() {
                    return this.isUsingGuildMemberBanner() || this.isUsingGuildMemberBio() || null != this.banner || this.hasThemeColors() || null != this.popoutAnimationParticleType
                }, e.hasFullProfile = function() {
                    return void 0 !== this._userProfile && (null == this.guildId || void 0 !== this._guildMemberProfile)
                }, e.isUsingGuildMemberBanner = function() {
                    var t;
                    return (null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.banner) != null
                }, e.isUsingGuildMemberBio = function() {
                    var t, e;
                    return (null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.bio) != null && (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.bio) !== ""
                }, e.isUsingGuildMemberPronouns = function() {
                    var t, e;
                    return (null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.pronouns) != null && (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.pronouns) !== ""
                }, e.getBannerURL = function(t) {
                    var e = t.canAnimate,
                        n = t.size;
                    return null != this.guildId && this.isUsingGuildMemberBanner() ? (0, l.getGuildMemberBannerURL)({
                        id: this.userId,
                        guildId: this.guildId,
                        banner: this.banner,
                        canAnimate: e,
                        size: n
                    }) : (0, l.getUserBannerURL)({
                        id: this.userId,
                        banner: this.banner,
                        canAnimate: e,
                        size: n
                    })
                }, e.getPreviewBanner = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
                    return null != t ? t : null === t ? this.isUsingGuildMemberBanner() ? (0, l.getUserBannerURL)({
                        id: this.userId,
                        banner: this._userProfile.banner,
                        canAnimate: e,
                        size: n
                    }) : null : this.getBannerURL({
                        canAnimate: e,
                        size: 480
                    })
                }, e.getPreviewBio = function(t) {
                    var e;
                    return (0, a.getProfilePreviewField)(t, null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.bio, this._userProfile.bio, null != this.guildId)
                }, e.getPreviewThemeColors = function(t) {
                    return (null == t ? void 0 : t[0]) != null && (null == t ? void 0 : t[1]) != null ? t : void 0 !== t ? this._userProfile.themeColors : this.themeColors
                }, e.getBadges = function() {
                    var t, e, n;
                    return (0, u._)(null !== (e = this._userProfile.badges) && void 0 !== e ? e : []).concat((0, u._)(null !== (n = null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.badges) && void 0 !== n ? n : []))
                }, e.getLegacyUsername = function() {
                    return this._userProfile.legacyUsername
                }, (0, r._)(t, [{
                    key: "premiumSince",
                    get: function() {
                        return this._userProfile.premiumSince
                    }
                }, {
                    key: "premiumGuildSince",
                    get: function() {
                        return this._userProfile.premiumGuildSince
                    }
                }, {
                    key: "premiumType",
                    get: function() {
                        return this._userProfile.premiumType
                    }
                }, {
                    key: "primaryColor",
                    get: function() {
                        var t, e;
                        return null !== (e = null === (t = this.themeColors) || void 0 === t ? void 0 : t[0]) && void 0 !== e ? e : this.accentColor
                    }
                }, {
                    key: "canUsePremiumProfileCustomization",
                    get: function() {
                        return o.default.isPremiumAtLeast(this.premiumType, d.PremiumTypes.TIER_2)
                    }
                }, {
                    key: "canEditThemes",
                    get: function() {
                        return this.canUsePremiumProfileCustomization
                    }
                }, {
                    key: "application",
                    get: function() {
                        return this._userProfile.application
                    }
                }]), t
            }()
        },
        246619: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                handleProfileAccessibilityTooltipViewed: function() {
                    return v
                },
                resetPendingProfileChanges: function() {
                    return T
                },
                saveProfileChanges: function() {
                    return A
                },
                setPendingAccentColor: function() {
                    return y
                },
                setPendingBanner: function() {
                    return h
                },
                setPendingBio: function() {
                    return C
                },
                setPendingPronouns: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return m
                },
                setTryItOutAvatar: function() {
                    return g
                },
                setTryItOutAvatarDecoration: function() {
                    return N
                },
                setTryItOutBanner: function() {
                    return P
                },
                setTryItOutThemeColors: function() {
                    return D
                }
            });
            var i = n("356056"),
                r = n("21189"),
                u = n("324415");
            n("653041");
            var a = n("454836"),
                l = n("312916"),
                o = n("253842"),
                d = n("929748"),
                c = n("362939"),
                s = n("871831"),
                f = n("328470"),
                _ = n("467006"),
                E = n("171168");

            function p(t) {
                f.default.track(_.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: t,
                    feature_tier: E.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }

            function A(t, e) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = (0, i._)(function(t, e) {
                    var n, i, f, E, p, A, I, v, T;
                    return (0, u._)(this, function(u) {
                        switch (u.label) {
                            case 0:
                                if (null == (i = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return [2];
                                f = c.UseLegacyChatInput.getSetting(), null != t.bio && f && (t.bio = d.default.parse(void 0, t.bio).content), u.label = 1;
                            case 1:
                                return u.trys.push([1, 3, , 4]), l.default.dispatch({
                                    type: "USER_PROFILE_UPDATE_START",
                                    userId: i
                                }), [4, a.default.patch({
                                    url: null != e ? _.Endpoints.GUILD_PROFILE(e, _.ME) : _.Endpoints.USER_PROFILE(_.ME),
                                    body: t
                                })];
                            case 2:
                                return (E = u.sent()).ok ? (A = null === (p = E.body.profile_effect) || void 0 === p ? void 0 : p.id, l.default.dispatch((0, r._)({
                                    type: "USER_PROFILE_UPDATE_SUCCESS",
                                    userId: i,
                                    profileEffectId: A
                                }, E.body))) : (I = new o.APIError(E), l.default.dispatch({
                                    type: "USER_PROFILE_UPDATE_FAILURE",
                                    errors: E.body,
                                    apiError: I
                                })), [2, E];
                            case 3:
                                return v = u.sent(), T = new o.APIError(v), l.default.dispatch({
                                    type: "USER_PROFILE_UPDATE_FAILURE",
                                    errors: {},
                                    apiError: T
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function v() {
                l.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function T() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function h(t) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function C(t) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: t
                })
            }

            function S(t) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function y(t) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: t
                })
            }

            function m(t) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function g(t) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: t
                }), p(E.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function N(t) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: t
                }), p(E.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function P(t) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: t
                }), p(E.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function D(t) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: t
                }), p(E.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        846774: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return H
                }
            });
            var i = n("87627"),
                r = n("29713"),
                u = n("21189"),
                a = n("227094"),
                l = n("778455");
            n("330740"), n("996173"), n("47120"), n("357629"), n("363505"), n("462848"), n("789020");
            var o = n("392711"),
                d = n.n(o),
                c = n("763301"),
                s = n("703229"),
                f = n("535291"),
                _ = n("262047"),
                E = n("327271"),
                p = n("565639"),
                A = n("12480"),
                I = n("880315"),
                v = new Set,
                T = new Set,
                h = {},
                C = {},
                S = {},
                y = {},
                m = {},
                g = !1;

            function N() {
                v.clear(), T.clear(), h = {}, C = {}, S = {}, y = {}, m = {}
            }

            function P(t) {
                var e = t.userId;
                T.add(e)
            }

            function D(t) {
                var e = t.userId;
                T.delete(e)
            }

            function O(t) {
                T.delete(t.userId), S[t.userId] = d()(t.mutualFriends).map(function(t) {
                    return {
                        key: t.id,
                        user: new f.default(t),
                        status: p.default.getStatus(t.id)
                    }
                }).sortBy(function(t) {
                    return t.user.username.toLowerCase()
                }).value(), y[t.userId] = t.mutualFriends.length
            }

            function b() {
                if (0 === Object.keys(m).length) return !1;
                m = {}
            }

            function L(t) {
                if (null == m[t.user.id]) return !1;
                delete m[t.user.id]
            }

            function U(t) {
                if (v.delete(t.user.id), null != t.mutual_guilds) {
                    var e = {};
                    t.mutual_guilds.forEach(function(t) {
                        var n = t.id,
                            i = t.nick,
                            r = E.default.getGuild(n);
                        null != r && (e[n] = {
                            guild: r,
                            nick: i
                        })
                    }), m[t.user.id] = I.default.getFlattenedGuildIds().filter(function(t) {
                        return null != e[t]
                    }).map(function(t) {
                        return {
                            guild: e[t].guild,
                            nick: e[t].nick
                        }
                    })
                }
                if (null != t.mutual_friends_count) {
                    var n = t.mutual_friends_count;
                    y[t.user.id] = n
                }
                var i = null !== (p = t.premium_since) && void 0 !== p ? p : null,
                    r = t.application;
                if (h[t.user.id] = {
                        userId: t.user.id,
                        banner: null === (u = t.user_profile) || void 0 === u ? void 0 : u.banner,
                        accentColor: null === (a = t.user_profile) || void 0 === a ? void 0 : a.accent_color,
                        themeColors: null === (l = t.user_profile) || void 0 === l ? void 0 : l.theme_colors,
                        popoutAnimationParticleType: null === (o = t.user_profile) || void 0 === o ? void 0 : o.popout_animation_particle_type,
                        bio: null !== (A = null === (d = t.user_profile) || void 0 === d ? void 0 : d.bio) && void 0 !== A ? A : "",
                        profileEffectId: null === (f = t.user_profile) || void 0 === f ? void 0 : null === (s = f.profile_effect) || void 0 === s ? void 0 : s.id,
                        pronouns: null !== (T = null === (_ = t.user_profile) || void 0 === _ ? void 0 : _.pronouns) && void 0 !== T ? T : "",
                        connectedAccounts: null !== (S = t.connected_accounts.filter(function(t) {
                            return c.default.isSupported(t.type)
                        })) && void 0 !== S ? S : [],
                        applicationRoleConnections: null !== (g = t.application_role_connections) && void 0 !== g ? g : [],
                        premiumSince: null != i ? new Date(i) : null,
                        premiumType: t.premium_type,
                        premiumGuildSince: null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
                        lastFetched: Date.now(),
                        legacyUsername: t.legacy_username,
                        profileFetchFailed: !1,
                        application: null != r ? {
                            id: r.id,
                            primarySkuId: r.primary_sku_id,
                            customInstallUrl: r.custom_install_url,
                            installParams: r.install_params,
                            flags: r.flags,
                            popularApplicationCommandIds: r.popular_application_command_ids
                        } : null,
                        badges: t.badges
                    }, null != t.guild_member_profile) {
                    var u, a, l, o, d, s, f, _, p, A, T, S, g, N, P, D, O, b = {
                        userId: t.user.id,
                        guildId: t.guild_member_profile.guild_id,
                        banner: t.guild_member_profile.banner,
                        accentColor: t.guild_member_profile.accent_color,
                        themeColors: null === (N = t.guild_member_profile) || void 0 === N ? void 0 : N.theme_colors,
                        popoutAnimationParticleType: null === (P = t.guild_member_profile) || void 0 === P ? void 0 : P.popout_animation_particle_type,
                        profileEffectId: null === (O = t.guild_member_profile) || void 0 === O ? void 0 : null === (D = O.profile_effect) || void 0 === D ? void 0 : D.id,
                        bio: t.guild_member_profile.bio,
                        pronouns: t.guild_member_profile.pronouns,
                        badges: t.guild_badges
                    };
                    null != C[t.user.id] ? C[t.user.id][t.guild_member_profile.guild_id] = b : C[t.user.id] = {
                        [t.guild_member_profile.guild_id]: b
                    }
                }
            }

            function R(t) {
                var e = t.userId;
                v.add(e)
            }

            function M(t) {
                var e, n = t.userId;
                h[n] = null !== (e = h[n]) && void 0 !== e ? e : {
                    connectedAccounts: [],
                    applicationRoleConnections: [],
                    premiumSince: null,
                    premiumGuildSince: null,
                    lastFetched: Date.now(),
                    profileFetchFailed: !0,
                    application: null,
                    legacyUsername: null,
                    userId: n,
                    banner: null,
                    accentColor: null,
                    bio: "",
                    pronouns: ""
                }, v.delete(n)
            }

            function F(t) {
                return null != t.guild_id ? function(t) {
                    var e = t.userId,
                        n = t.guild_id,
                        i = t.accent_color,
                        r = t.banner,
                        l = t.bio,
                        o = t.pronouns,
                        d = t.popout_animation_particle_type,
                        c = t.theme_colors,
                        s = t.profileEffectId;
                    if (null == n || null == C[e]) return !1;
                    var f = C[e][n];
                    if (null == f) return !1;
                    C[e][n] = (0, a._)((0, u._)({}, f), {
                        accentColor: i,
                        banner: r,
                        bio: l,
                        pronouns: o,
                        popoutAnimationParticleType: d,
                        themeColors: c,
                        profileEffectId: s
                    })
                }(t) : function(t) {
                    var e = t.userId,
                        n = t.accent_color,
                        i = t.banner,
                        r = t.bio,
                        l = t.pronouns,
                        o = t.popout_animation_particle_type,
                        d = t.theme_colors,
                        c = t.profileEffectId,
                        s = h[e];
                    if (null == s) return !1;
                    h[e] = (0, a._)((0, u._)({}, s), {
                        accentColor: n,
                        banner: i,
                        bio: r,
                        pronouns: l,
                        popoutAnimationParticleType: o,
                        themeColors: d,
                        profileEffectId: c
                    })
                }(t)
            }

            function V(t) {
                g = !0
            }

            function G(t) {
                var e = t.user;
                if (v.has(e.id) || null == h[e.id]) return !1;
                h[e.id].lastFetched = 0
            }

            function w() {
                v.clear(), h = {}, C = {}
            }
            var Y = function(t) {
                (0, r._)(n, t);
                var e = (0, l._)(n);

                function n() {
                    var t;
                    return (0, i._)(this, n), (t = e.call(this)).loadCache = function() {
                        var e = t.readSnapshot(n.LATEST_SNAPSHOT_VERSION);
                        null != e && e.forEach(function(t) {
                            var e = t.userId,
                                n = t.profile;
                            h[e] = n
                        })
                    }, t.registerActionHandlers({
                        CACHE_LOADED_LAZY: t.loadCache,
                        USER_PROFILE_FETCH_START: R,
                        USER_PROFILE_FETCH_FAILURE: M,
                        USER_PROFILE_FETCH_SUCCESS: U,
                        USER_PROFILE_UPDATE_SUCCESS: F,
                        USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: V,
                        MUTUAL_FRIENDS_FETCH_START: P,
                        MUTUAL_FRIENDS_FETCH_SUCCESS: O,
                        MUTUAL_FRIENDS_FETCH_FAILURE: D,
                        GUILD_JOIN: b,
                        GUILD_DELETE: b,
                        GUILD_MEMBER_ADD: L,
                        GUILD_MEMBER_REMOVE: L,
                        GUILD_MEMBER_UPDATE: G,
                        USER_UPDATE: G,
                        LOGOUT: N
                    }), t.waitFor(I.default), t.syncWith([s.default], w), t
                }
                var u = n.prototype;
                return u.isFetchingProfile = function(t) {
                    return v.has(t)
                }, u.isFetchingFriends = function(t) {
                    return T.has(t)
                }, u.getUserProfile = function(t) {
                    return h[t]
                }, u.getGuildMemberProfile = function(t, e) {
                    var n;
                    return null == e ? null : null === (n = C[t]) || void 0 === n ? void 0 : n[e]
                }, u.getMutualFriends = function(t) {
                    return S[t]
                }, u.getMutualFriendsCount = function(t) {
                    return y[t]
                }, u.getMutualGuilds = function(t) {
                    return m[t]
                }, u.getIsAccessibilityTooltipViewed = function() {
                    return g
                }, u.takeSnapshot = function() {
                    var t = _.default.getId();
                    return {
                        version: n.LATEST_SNAPSHOT_VERSION,
                        data: [{
                            userId: t,
                            profile: h[t]
                        }]
                    }
                }, n
            }(A.default);
            Y.displayName = "UserProfileStore", Y.LATEST_SNAPSHOT_VERSION = 1;
            var H = new Y
        },
        498882: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var i = n("356056"),
                r = n("324415"),
                u = n("312916"),
                a = n("122677"),
                l = n("442609"),
                o = n("360750"),
                d = n("731865"),
                c = n("361733"),
                s = n("846774"),
                f = n("563139");

            function _(t, e) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = (0, i._)(function(t, e) {
                    var n, i, _, E, p, A, I, v, T, h, C, S, y, m, g, N, P, D, O, b, L, U, R, M = arguments;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (_ = void 0 !== (i = (n = M.length > 2 && void 0 !== M[2] ? M[2] : {}).withMutualGuilds) && i, p = void 0 !== (E = n.withMutualFriendsCount) && E, A = n.friendToken, v = void 0 === (I = n.preloadUserBanner) || I, h = void 0 !== (T = n.dispatchWait) && T, C = n.guildId, S = n.channelId, "" === t) return [2];
                                if (null != e && (0, l.maybeFetchColors)(e), null != C && !_ && (_ = !0), null != C && (y = null !== (g = null === (m = (0, o.getVisibleConnectionsRole)({
                                        guildMember: c.default.getMember(C, t),
                                        channel: d.default.getChannel(S)
                                    })) || void 0 === m ? void 0 : m.id) && void 0 !== g ? g : void 0), N = s.default.getUserProfile(t), P = s.default.getMutualGuilds(t), D = s.default.getMutualFriendsCount(t), O = s.default.isFetchingProfile(t), b = (null == N ? void 0 : N.profileFetchFailed) || !O && (!Array.isArray(P) && _ || null == D && p), L = v ? f.default : void 0, U = !1, null != C && (U = null == s.default.getGuildMemberProfile(t, C)), !b && !U && (O || Date.now() - (null !== (R = null == N ? void 0 : N.lastFetched) && void 0 !== R ? R : 0) < 6e4)) return [2];
                                if (!h) return [3, 2];
                                return [4, u.default.wait(function() {
                                    return (0, a.fetchProfile)(t, {
                                        withMutualGuilds: _,
                                        withMutualFriendsCount: p,
                                        friendToken: A,
                                        guildId: C,
                                        connectionsRoleId: y
                                    }, L)
                                })];
                            case 1:
                                return r.sent(), [3, 4];
                            case 2:
                                return [4, (0, a.fetchProfile)(t, {
                                    withMutualGuilds: _,
                                    withMutualFriendsCount: p,
                                    friendToken: A,
                                    guildId: C,
                                    connectionsRoleId: y
                                }, L)];
                            case 3:
                                r.sent(), r.label = 4;
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        563139: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("362939"),
                r = n("4924");

            function u(t, e) {
                if ("undefined" == typeof Image) return;
                var n = (0, r.getDisplayProfile)(t.user.id, e);
                if (null != n) {
                    var u = i.GifAutoPlay.getSetting(),
                        a = n.getBannerURL({
                            canAnimate: u,
                            size: 480
                        });
                    null != a && (new Image().src = a)
                }
            }
        },
        4924: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                },
                getDisplayProfile: function() {
                    return s
                }
            });
            var i = n("154005"),
                r = n("661223"),
                u = n("871831"),
                a = n("497988"),
                l = n("404252"),
                o = n("846774");

            function d(t, e) {
                return (0, r.useStateFromStores)([u.default, o.default], function() {
                    return s(t, e, [u.default, o.default])
                })
            }
            var c = (0, a.cachedFunction)(function(t, e) {
                return new l.default(t, e)
            });

            function s(t, e) {
                var n = (0, i._)(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.default, o.default], 2),
                    r = n[0],
                    a = n[1],
                    l = r.getUser(t),
                    d = a.getUserProfile(t),
                    s = a.getGuildMemberProfile(t, e);
                return null == l || null == d ? null : c(d, s)
            }
        },
        128272: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("356056"),
                r = n("324415");
            n("653041");
            var u = n("470079"),
                a = n("661223"),
                l = n("454836"),
                o = n("312916"),
                d = n("472550"),
                c = n("467006");

            function s(t) {
                var e = (0, a.useStateFromStores)([d.default], function() {
                    return d.default.getNote(t)
                });
                return u.useEffect(function() {
                    null == e && function(t) {
                        f.apply(this, arguments)
                    }(t)
                }, [e, t]), null != e ? e : {
                    loading: !0,
                    note: null
                }
            }

            function f() {
                return (f = (0, i._)(function(t) {
                    var e, n;
                    return (0, r._)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                o.default.dispatch({
                                    type: "USER_NOTE_LOAD_START",
                                    userId: t
                                }), n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, l.default.get({
                                    url: c.Endpoints.NOTE(t),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                return e = n.sent().body, o.default.dispatch({
                                    type: "USER_NOTE_LOADED",
                                    userId: t,
                                    note: e
                                }), [3, 4];
                            case 3:
                                return n.sent(), o.default.dispatch({
                                    type: "USER_NOTE_LOADED",
                                    userId: t
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        370469: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                closeUserProfileModal: function() {
                    return d
                },
                openUserProfileModal: function() {
                    return o
                }
            });
            var i = n("312916"),
                r = n("122677"),
                u = n("871831"),
                a = n("498882"),
                l = n("467006");

            function o(t) {
                var e = t.userId,
                    n = t.section,
                    o = t.guildId,
                    d = void 0 === o ? l.ME : o,
                    c = t.channelId,
                    s = t.friendToken,
                    f = t.autoFocusNote,
                    _ = t.analyticsLocation,
                    E = u.default.getUser(e),
                    p = d !== l.ME ? d : void 0;
                if (null == E) return (0, r.fetchProfile)(e, {
                    friendToken: s,
                    guildId: p
                }).then(function() {
                    i.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: e,
                        section: n,
                        guildId: d,
                        channelId: c,
                        friendToken: s,
                        autoFocusNote: f,
                        analyticsLocation: _
                    })
                });
                (0, a.default)(e, E.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: s,
                    guildId: p
                }), i.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: e,
                    section: n,
                    guildId: d,
                    channelId: c,
                    friendToken: s,
                    autoFocusNote: f,
                    analyticsLocation: _
                })
            }

            function d() {
                i.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        527811: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                showActivitiesInvalidPermissionsAlert: function() {
                    return u
                }
            });
            var i = n("992888"),
                r = n("30175"),
                u = function() {
                    i.default.show({
                        title: r.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_TITLE,
                        body: r.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_BODY,
                        hideActionSheet: !1
                    })
                }
        },
        472550: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("87627"),
                r = n("29713"),
                u = n("778455"),
                a = n("661223"),
                l = n("312916"),
                o = {};

            function d() {
                o = {}
            }
            var c = function(t) {
                (0, r._)(n, t);
                var e = (0, u._)(n);

                function n() {
                    return (0, i._)(this, n), e.apply(this, arguments)
                }
                return n.prototype.getNote = function(t) {
                    return o[t]
                }, n
            }(a.default.Store);
            c.displayName = "NoteStore";
            var s = new c(l.default, {
                CONNECTION_OPEN: d,
                OVERLAY_INITIALIZE: d,
                USER_NOTE_UPDATE: function(t) {
                    o[t.id] = {
                        loading: !1,
                        note: t.note
                    }
                },
                USER_NOTE_LOAD_START: function(t) {
                    o[t.userId] = {
                        loading: !0,
                        note: null
                    }
                },
                USER_NOTE_LOADED: function(t) {
                    var e = t.userId,
                        n = t.note;
                    o[e] = {
                        loading: !1,
                        note: null == n ? void 0 : n.note
                    }
                }
            })
        },
        303482: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return A
                }
            });
            var i = n("87627"),
                r = n("29713"),
                u = n("21189"),
                a = n("778455"),
                l = n("661223"),
                o = n("767191"),
                d = n("312916"),
                c = n("467006"),
                s = {},
                f = {};

            function _(t, e, n) {
                var i, r = n.applicationId,
                    u = null !== (i = s[r]) && void 0 !== i ? i : {};
                if (u[e] = t, s[r] = u, !__OVERLAY__ && t === c.ActivityActionStates.FAILED) {
                    null != f[r] && f[r].stop();
                    var a = new o.Timeout;
                    a.start(12e4, function() {
                        return d.default.dispatch({
                            type: "ACTIVITY_LAUNCH_FAIL",
                            applicationId: r,
                            activityType: e
                        })
                    }), f[r] = a
                }
            }

            function E(t) {
                return _(c.ActivityActionStates.COMPLETE, c.ActivityActionTypes.JOIN, t)
            }
            var p = function(t) {
                (0, r._)(n, t);
                var e = (0, a._)(n);

                function n() {
                    return (0, i._)(this, n), e.apply(this, arguments)
                }
                var u = n.prototype;
                return u.getState = function(t, e) {
                    var n = s[t];
                    return null == n ? void 0 : n[e]
                }, u.getStates = function() {
                    return s
                }, n
            }(l.default.Store);
            p.displayName = "ActivityLauncherStore";
            var A = new p(d.default, {
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.activityLauncherStates;
                    s = (0, u._)({}, e)
                },
                ACTIVITY_JOIN_LOADING: function(t) {
                    return _(c.ActivityActionStates.LOADING, c.ActivityActionTypes.JOIN, t)
                },
                ACTIVITY_JOIN_FAILED: function(t) {
                    return _(c.ActivityActionStates.FAILED, c.ActivityActionTypes.JOIN, t)
                },
                ACTIVITY_JOIN: E,
                EMBEDDED_ACTIVITY_CLOSE: E,
                ACTIVITY_LAUNCH_FAIL: function(t) {
                    var e = t.applicationId,
                        n = t.activityType,
                        i = s[e];
                    if (null == i || i[n] !== c.ActivityActionStates.FAILED) return !1;
                    delete i[n]
                }
            })
        },
        416603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SUPPORTS_COPY: function() {
                    return a
                },
                copy: function() {
                    return l
                }
            }), n("191489"), n("357629"), n("411104");
            var i = n("450536"),
                r = n("501769"),
                u = n("432056"),
                a = function() {
                    if (r.isPlatformEmbedded) return null != u.default.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (t) {
                        return !1
                    }
                }();

            function l(t) {
                return !!a && (r.isPlatformEmbedded ? (u.default.copy(t), !0) : i.copy(t))
            }
        },
        450536: function(t, e, n) {
            "use strict";

            function i(t) {
                var e = document.body;
                if (null == e) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    i = window.getSelection(),
                    r = document.createElement("textarea");
                r.value = t, r.contentEditable = "true", r.style.visibility = "none", e.appendChild(r), n.selectNodeContents(r), null == i || i.removeAllRanges(), null == i || i.addRange(n), r.focus(), r.setSelectionRange(0, t.length);
                var u = document.execCommand("copy");
                return e.removeChild(r), u
            }
            n.r(e), n.d(e, {
                copy: function() {
                    return i
                }
            }), n("411104")
        }
    }
]);
//# sourceMappingURL=39260.c7987ca5d69640016519.js.map