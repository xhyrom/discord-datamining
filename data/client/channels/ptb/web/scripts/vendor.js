(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72927"], {
        561288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("872717"),
                a = n("913144"),
                r = n("950104"),
                o = n("27618"),
                s = n("697218"),
                i = n("599110"),
                d = n("404118"),
                u = n("736964"),
                E = n("987317"),
                _ = n("49111"),
                c = n("782340"),
                A = {
                    call(e, t, n, a, r) {
                        let A = n => {
                            E.default.selectVoiceChannel(e, t), n && this.ring(e), null == r || r(e)
                        };
                        if (null != a) {
                            let t = o.default.isBlocked(a);
                            if (t) return;
                            let r = s.default.getUser(a);
                            l.default.get({
                                url: _.Endpoints.CALL(e),
                                oldFormErrors: !0
                            }).then(e => {
                                A(n && e.body.ringable)
                            }, () => {
                                i.default.track(_.AnalyticEvents.OPEN_POPOUT, {
                                    type: "Not Friend",
                                    source: "Call"
                                }), d.default.show({
                                    title: c.default.Messages.START_CALL,
                                    body: c.default.Messages.CALL_INVITE_NOT_FRIENDS.format({
                                        username: null != r ? r.username : ""
                                    }),
                                    confirmText: c.default.Messages.ADD_FRIEND_BUTTON,
                                    cancelText: c.default.Messages.OKAY,
                                    onConfirm() {
                                        u.default.addRelationship({
                                            userId: a,
                                            context: {
                                                location: "Call"
                                            }
                                        })
                                    }
                                })
                            })
                        } else A(n)
                    },
                    ring(e, t) {
                        let n = r.default.getCall(e);
                        if (null != n && null != n.messageId && !r.default.isCallUnavailable(e)) {
                            l.default.post({
                                url: _.Endpoints.CALL_RING(e),
                                body: {
                                    recipients: t
                                },
                                oldFormErrors: !0
                            });
                            return
                        }
                        a.default.dispatch({
                            type: "CALL_ENQUEUE_RING",
                            channelId: e,
                            recipients: t
                        })
                    },
                    stopRinging: (e, t) => l.default.post({
                        url: _.Endpoints.CALL_STOP_RINGING(e),
                        body: {
                            recipients: t
                        },
                        oldFormErrors: !0
                    })
                }
        },
        450911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("872717"),
                a = n("819855"),
                r = n("913144"),
                o = n("81732"),
                s = n("21121"),
                i = n("258158"),
                d = n("393414"),
                u = n("233069"),
                E = n("42203"),
                _ = n("271560"),
                c = n("561288"),
                A = n("987317"),
                N = n("49111"),
                R = n("782340"),
                I = {
                    async openPrivateChannel(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = arguments.length > 3 ? arguments[3] : void 0,
                            o = arguments.length > 4 ? arguments[4] : void 0,
                            s = this._getRecipients(e),
                            d = e => {
                                n && c.default.call(e.id, a, !0, e.isDM() ? e.getRecipientId() : null)
                            };
                        if (1 === s.length) {
                            let [e] = s, t = this._openCachedDMChannel(e, o);
                            if (null != t) return d(t), Promise.resolve(t.id)
                        }
                        try {
                            let e = await l.default.post({
                                url: N.Endpoints.USER_CHANNELS,
                                body: {
                                    recipients: s
                                },
                                context: {
                                    location: r
                                },
                                oldFormErrors: !0
                            });
                            null == o || o();
                            let t = this._openPrivateChannel(e.body);
                            return d(t), e.body.id
                        } catch (e) {
                            throw (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === N.AbortCodes.QUARANTINED && (0, i.default)(), e
                        }
                    },
                    async createBroadcastPrivateChannel() {
                        try {
                            let e = await l.default.post({
                                    url: N.Endpoints.BROADCAST_PRIVATE_CHANNEL
                                }),
                                t = (0, u.createChannelRecordFromServer)(e.body);
                            return c.default.call(t.id, !1, !1, null), e.body.id
                        } catch (t) {
                            var e;
                            throw (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.code) === N.AbortCodes.QUARANTINED && (0, i.default)(), t
                        }
                    },
                    _openCachedDMChannel(e, t) {
                        let n = E.default.getDMFromUserId(e),
                            l = null != n ? E.default.getChannel(n) : null;
                        if (null != l) return null == t || t(), null != (0, s.getRootNavigationRefIfInExperiment)() ? (0, d.transitionTo)(N.Routes.CHANNEL(N.ME, l.id), {
                            navigationReplace: !0
                        }) : A.default.selectPrivateChannel(l.id), l;
                        return null
                    },
                    async ensurePrivateChannel(e) {
                        let t = this._getRecipients(e),
                            n = await l.default.post({
                                url: N.Endpoints.USER_CHANNELS,
                                body: {
                                    recipients: t
                                },
                                oldFormErrors: !0
                            }),
                            a = (0, u.createChannelRecordFromServer)(n.body);
                        return r.default.dispatch({
                            type: "CHANNEL_CREATE",
                            channel: a
                        }), a.id
                    },
                    async getOrEnsurePrivateChannel(e) {
                        let t = E.default.getDMFromUserId(e);
                        return null != t ? t : await this.ensurePrivateChannel(e)
                    },
                    async getDMChannel(e) {
                        let t = await l.default.get(N.Endpoints.DM_CHANNEL(e)),
                            n = (0, u.createChannelRecordFromServer)(t.body);
                        return r.default.dispatch({
                            type: "CHANNEL_CREATE",
                            channel: n
                        }), n.id
                    },
                    _getRecipients: e => null != e ? Array.isArray(e) ? e : [e] : [],
                    _openPrivateChannel(e) {
                        let t = (0, u.createChannelRecordFromServer)(e);
                        return r.default.dispatch({
                            type: "CHANNEL_CREATE",
                            channel: t
                        }), null != (0, s.getRootNavigationRefIfInExperiment)() ? (0, d.transitionTo)(N.Routes.CHANNEL(N.ME, t.id), {
                            navigationReplace: !0
                        }) : A.default.selectPrivateChannel(t.id), t
                    },
                    closePrivateChannel(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return r.default.dispatch({
                            type: "CHANNEL_DELETE",
                            channel: {
                                id: e,
                                guild_id: void 0,
                                parent_id: void 0
                            },
                            silent: n
                        }), t && !__OVERLAY__ && (0, d.transitionTo)(N.Routes.FRIENDS), l.default.delete({
                            url: N.Endpoints.CHANNEL(e),
                            query: {
                                silent: n
                            },
                            oldFormErrors: !0
                        }).then(() => {
                            a.AccessibilityAnnouncer.announce(R.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED)
                        }).catch(() => {
                            a.AccessibilityAnnouncer.announce(R.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED)
                        })
                    },
                    updatePermissionOverwrite: (e, t) => l.default.put({
                        url: N.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
                        body: t,
                        oldFormErrors: !0
                    }),
                    clearPermissionOverwrite: (e, t) => l.default.delete({
                        url: N.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
                        oldFormErrors: !0
                    }),
                    addRecipient(e, t, n, r) {
                        return l.default.put({
                            url: N.Endpoints.CHANNEL_RECIPIENT(e, t),
                            context: {
                                location: n
                            },
                            oldFormErrors: !0
                        }).then(t => (a.AccessibilityAnnouncer.announce(R.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM), null == r || r(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e).catch(() => (a.AccessibilityAnnouncer.announce(R.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED), e))
                    },
                    addRecipients(e, t, n, l) {
                        return this.addRecipient(e, t[0], n, l).then(e => Promise.all(t.slice(1).map(t => this.addRecipient(e, t, n))).then(() => e))
                    },
                    removeRecipient: (e, t) => l.default.delete({
                        url: N.Endpoints.CHANNEL_RECIPIENT(e, t),
                        oldFormErrors: !0
                    }),
                    setDMOwner: (e, t) => l.default.patch({
                        url: N.Endpoints.CHANNEL(e),
                        body: {
                            owner: t
                        },
                        oldFormErrors: !0
                    }),
                    async setName(e, t) {
                        let n = E.default.getChannel(e),
                            a = await l.default.patch({
                                url: N.Endpoints.CHANNEL(e),
                                body: {
                                    name: t
                                },
                                oldFormErrors: !0
                            }),
                            r = null == n ? void 0 : n.getGuildId();
                        return null != r && !(null == n ? void 0 : n.isThread()) && o.default.checkGuildTemplateDirty(r), a
                    },
                    setIcon(e, t) {
                        let n = E.default.getChannel(e);
                        l.default.patch({
                            url: N.Endpoints.CHANNEL(e),
                            body: {
                                icon: t
                            },
                            oldFormErrors: !0
                        }).then(() => {
                            let e = null == n ? void 0 : n.getGuildId();
                            null != e && !(null == n ? void 0 : n.isThread()) && o.default.checkGuildTemplateDirty(e)
                        })
                    },
                    convertToGuild: e => l.default.post({
                        url: N.Endpoints.CHANNEL_CONVERT(e),
                        oldFormErrors: !0
                    }),
                    preload(e, t, n) {
                        r.default.dispatch({
                            type: "CHANNEL_PRELOAD",
                            guildId: e === N.ME ? null : e,
                            channelId: t,
                            isHighlight: n,
                            context: N.CURRENT_APP_CONTEXT
                        })
                    },
                    fetchChannelStoreListing(e, t) {
                        let n = null != t ? N.Endpoints.CHANNEL_STORE_LISTING_SKU(e, t) : N.Endpoints.CHANNEL_STORE_LISTING(e);
                        return (0, _.httpGetWithCountryCodeQuery)(n).then(t => {
                            r.default.dispatch({
                                type: "STORE_LISTING_FETCH_SUCCESS",
                                channelId: e,
                                storeListing: t.body
                            })
                        })
                    },
                    async createTextChannel(e, t, n, a) {
                        let r = {
                            type: N.ChannelTypes.GUILD_TEXT,
                            name: t,
                            permission_overwrites: []
                        };
                        null != n && (r.parent_id = n), null != a && (r.topic = a);
                        let s = await l.default.post({
                            url: N.Endpoints.GUILD_CHANNELS(e),
                            body: r,
                            oldFormErrors: !0
                        });
                        return o.default.checkGuildTemplateDirty(e), s
                    }
                }
        },
        736964: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var l, a, r = n("872717"),
                o = n("819855"),
                s = n("913144"),
                i = n("774146"),
                d = n("132774"),
                u = n("258158"),
                E = n("823348"),
                _ = n("697218"),
                c = n("284609"),
                A = n("158998"),
                N = n("404118"),
                R = n("272030"),
                I = n("49111"),
                f = n("782340");

            function C(e) {
                (0, R.closeContextMenu)(), N.default.show(e)
            }

            function p(e, t, n) {
                let {
                    status: l,
                    body: r
                } = e, o = r && r.code;
                switch (l) {
                    case 429:
                        t === a.SHOW_ALWAYS && C({
                            title: f.default.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
                            body: f.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
                            confirmText: f.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
                        });
                        break;
                    case 403:
                        if (o === I.AbortCodes.EMAIL_VERIFICATION_REQUIRED) {
                            C({
                                title: f.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
                                body: f.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
                                confirmText: f.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
                                onConfirm: () => {
                                    i.openClaimAccountModal()
                                }
                            });
                            break
                        }
                    default:
                        if (o === I.AbortCodes.USER_QUARANTINED)(0, R.closeContextMenu)(), (0, u.default)();
                        else if ((0, E.isLimitedAccessErrorCode)(l, o)) break;
                        else if (t === a.SHOW_ALWAYS) {
                            let e = null != n ? (0, c.humanizeAbortCode)(o || 0, n) : f.default.Messages.POMELO_ADD_FRIEND_ERROR;
                            C({
                                title: f.default.Messages.FRIEND_REQUEST_FAILED_HEADER,
                                body: e,
                                confirmText: f.default.Messages.OKAY
                            })
                        }
                }
                throw e
            }(l = a || (a = {}))[l.SHOW_ALWAYS = 0] = "SHOW_ALWAYS", l[l.SHOW_ONLY_IF_ACTION_NEEDED = 1] = "SHOW_ONLY_IF_ACTION_NEEDED";
            let h = {
                sendRequest(e) {
                    let {
                        discordTag: t,
                        context: n,
                        captchaPayload: l,
                        errorUxConfig: o = a.SHOW_ALWAYS
                    } = e, [s, i] = t.split("#");
                    return r.default.post({
                        url: I.Endpoints.USER_RELATIONSHIPS(),
                        body: {
                            username: s,
                            discriminator: parseInt(i),
                            ...l
                        },
                        context: n,
                        oldFormErrors: !0
                    }).catch(e => {
                        p(e, o, t)
                    })
                },
                addRelationship(e, t) {
                    let {
                        userId: n,
                        context: l,
                        type: o,
                        friendToken: s,
                        fromFriendSuggestion: i,
                        captchaPayload: d
                    } = e, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.SHOW_ALWAYS, E = _.default.getUser(n);
                    return r.default.put({
                        url: I.Endpoints.USER_RELATIONSHIP(n),
                        body: {
                            type: o,
                            friend_token: s,
                            from_friend_suggestion: i,
                            ...d
                        },
                        context: l,
                        oldFormErrors: !0
                    }).then(() => {
                        null == t || t()
                    }).catch(e => {
                        p(e, u, A.default.getUserTag(E))
                    })
                },
                acceptFriendRequest: e => h.addRelationship(e, function() {
                    o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
                }),
                cancelFriendRequest: (e, t) => h.removeRelationship(e, t, function() {
                    o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
                }),
                removeFriend(e, t) {
                    h.removeRelationship(e, t, function() {
                        o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
                    })
                },
                unblockUser(e, t) {
                    h.removeRelationship(e, t, function() {
                        o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_USER_UNBLOCKED)
                    })
                },
                removeRelationship: (e, t, n) => r.default.delete({
                    url: I.Endpoints.USER_RELATIONSHIP(e),
                    context: t,
                    oldFormErrors: !0
                }).then(() => {
                    null == n || n()
                }).catch(() => {
                    o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
                }),
                updateRelationship: (e, t) => r.default.patch({
                    url: I.Endpoints.USER_RELATIONSHIP(e),
                    body: {
                        nickname: t
                    }
                }),
                fetchRelationships() {
                    r.default.get({
                        url: I.Endpoints.USER_RELATIONSHIPS(),
                        oldFormErrors: !0
                    }).then(e => s.default.dispatch({
                        type: "LOAD_RELATIONSHIPS_SUCCESS",
                        relationships: e.body
                    }), () => s.default.dispatch({
                        type: "LOAD_RELATIONSHIPS_FAILURE"
                    }))
                },
                confirmClearPendingRelationships(e) {
                    (0, d.default)(e)
                },
                clearPendingRelationships: () => r.default.delete({
                    url: I.Endpoints.USER_RELATIONSHIPS(),
                    query: {
                        relationship_type: I.RelationshipTypes.PENDING_INCOMING
                    }
                }).then(() => {
                    s.default.dispatch({
                        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
                    })
                }).catch(() => {
                    o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
                })
            };
            var D = h
        },
        774146: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openNewUserAgeGateModal: function() {
                    return s
                },
                openClaimAccountModal: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("551042"),
                r = n("586391"),
                o = n("843455");

            function s(e) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("377531").then(n.bind(n, "377531"));
                    return t => (0, l.jsx)(e, {
                        ...t
                    })
                }, {
                    modalKey: r.NEW_USER_AGE_GATE_MODAL_KEY,
                    onCloseRequest: o.NOOP,
                    onCloseCallback: e
                })
            }

            function i() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("633156").then(n.bind(n, "633156"));
                    return n => (0, l.jsx)(t, {
                        claimRequired: e,
                        ...n
                    })
                }, {
                    onCloseRequest: e ? o.NOOP : null,
                    onCloseCallback: t
                })
            }
        },
        132774: function(e, t, n) {
            "use strict";

            function l(e) {
                {
                    let t = n("801373").default;
                    t(e)
                }
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        801373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("551042");

            function r(e) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("758881").then(n.bind(n, "758881"));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        incomingRequestCount: e
                    })
                })
            }
        },
        823348: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isLimitedAccessErrorCode: function() {
                    return a
                }
            });
            var l = n("49111");

            function a(e, t) {
                return e >= 400 && e < 500 && null != t && t >= l.AbortCodes.USER_LIMITED_ACCESS_DEFAULT && t <= l.AbortCodes.USER_LIMITED_ACCESS_MAX
            }
        },
        284609: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateDiscordTag: function() {
                    return u
                },
                humanizeAbortCode: function() {
                    return E
                }
            });
            var l = n("599110"),
                a = n("340454"),
                r = n("49111"),
                o = n("782340");
            let s = /^\d+$/,
                i = /^(.+?@.+?\..+?|.+?#\d{4})$/,
                d = /^[a-zA-Z0-9_\\.]+$/;

            function u(e) {
                return d.test(e) || e.includes("#") && i.test(e) ? null : (function(e) {
                    let [t, n] = e.split("#");
                    l.default.track(r.AnalyticEvents.FRIEND_REQUEST_FAILED, {
                        reason: "Invalid Username",
                        query: e,
                        discrim_len: (null != n ? n : "").length,
                        username_len: t.length,
                        is_email_like: a.default.isEmail(e),
                        is_invite_like: a.default.isInvite(e),
                        is_num_only: s.test(e)
                    })
                }(e), o.default.Messages.POMELO_ADD_FRIEND_ERROR)
            }

            function E(e, t) {
                switch (e) {
                    case r.AbortCodes.RELATIONSHIP_INCOMING_DISABLED:
                        return o.default.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({
                            discordTag: t
                        });
                    case r.AbortCodes.TOO_MANY_FRIENDS:
                        return o.default.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
                    case r.AbortCodes.RELATIONSHIP_ALREADY_FRIENDS:
                        return o.default.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
                    case r.AbortCodes.USER_QUARANTINED:
                    case r.AbortCodes.USER_FRIEND_REQUEST_LIMITED_ACCESS:
                        return o.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
                    case r.AbortCodes.TOO_MANY_BLOCKED_USERS:
                        return o.default.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
                    case r.AbortCodes.RELATIONSHIP_INCOMING_BLOCKED:
                    case r.AbortCodes.RELATIONSHIP_INVALID_SELF:
                    case r.AbortCodes.RELATIONSHIP_INVALUD_USER_BOT:
                    case r.AbortCodes.RELATIONSHIP_INVALID_DISCORD_TAG:
                    default:
                        return o.default.Messages.POMELO_ADD_FRIEND_ERROR
                }
            }
        }
    }
]);
//# sourceMappingURL=ab5ae66f83934ac09063.js.map