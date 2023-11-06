(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["18814"], {
        851387: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                waitForGuild: function() {
                    return P
                },
                default: function() {
                    return w
                }
            }), l("70102"), l("860677");
            var n = l("759843"),
                d = l("316693"),
                r = l("872717"),
                o = l("913144"),
                a = l("333805"),
                u = l("81732"),
                i = l("248967"),
                s = l("21121"),
                E = l("693051"),
                c = l("153498"),
                _ = l("934306"),
                p = l("258158"),
                f = l("393414"),
                L = l("239380"),
                I = l("271938"),
                T = l("42203"),
                D = l("383173"),
                G = l("923959"),
                h = l("305961"),
                U = l("18494"),
                y = l("162771"),
                S = l("697218"),
                A = l("599110"),
                R = l("991170"),
                m = l("719923"),
                C = l("840707"),
                g = l("404118"),
                O = l("49111"),
                N = l("782340");
            let M = e => {
                    g.default.show({
                        title: N.default.Messages.TOO_MANY_USER_GUILDS_ALERT_TITLE,
                        body: N.default.Messages.TOO_MANY_USER_GUILDS_ALERT_DESCRIPTION.format({
                            quantity: e
                        })
                    })
                },
                F = e => {
                    o.default.dispatch({
                        type: "GUILD_DELETE",
                        guild: {
                            id: e
                        }
                    })
                },
                b = () => {
                    g.default.show({
                        title: N.default.Messages.SERVER_IS_CURRENTLY_FULL,
                        body: N.default.Messages.PLEASE_TRY_AGAIN_LATER
                    })
                };
            async function v(e) {
                var t, n, d, a, u;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        source: s,
                        loadId: E,
                        lurkLocation: c
                    } = i,
                    _ = null !== (t = i.lurker) && void 0 !== t && t,
                    L = S.default.getCurrentUser();
                if (null !== (n = null == L ? void 0 : L.hasFlag(O.UserFlags.QUARANTINED)) && void 0 !== n && n) return (0, p.default)(), new Promise((e, t) => t(Error()));
                o.default.wait(() => o.default.dispatch({
                    type: "GUILD_JOIN",
                    guildId: e,
                    lurker: _,
                    source: s,
                    loadId: E
                }));
                try {
                    let t = y.default.getGuildId(),
                        n = e === t && null != h.default.getGuild(e),
                        d = n ? U.default.getChannelId(e) : null,
                        a = await r.default.put({
                            url: O.Endpoints.GUILD_JOIN(e),
                            query: {
                                lurker: _,
                                session_id: _ ? I.default.getSessionId() : null,
                                recommendation_load_id: E,
                                location: _ && null != c ? c : null
                            },
                            context: {
                                source: s
                            },
                            oldFormErrors: !0,
                            body: {}
                        });
                    if (null != a.body.join_request && o.default.dispatch({
                            type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                            guildId: e,
                            request: a.body.join_request
                        }), null == h.default.getGuild(e) && a.body.show_verification_form) return (0, f.transitionTo)(O.Routes.GUILD_MEMBER_VERIFICATION(e)), a;
                    if (null != a.body.welcome_screen && o.default.dispatch({
                            type: "WELCOME_SCREEN_UPDATE",
                            guildId: a.body.id,
                            welcomeScreen: a.body.welcome_screen
                        }), null != a.body.approximate_presence_count && o.default.dispatch({
                            type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                            guildId: a.body.id,
                            count: a.body.approximate_presence_count
                        }), !_) {
                        let {
                            default: t
                        } = await l.el("937692").then(l.bind(l, "937692"));
                        await t({
                            guildId: e,
                            returnChannelId: d
                        })
                    }
                    return a
                } catch (t) {
                    if ((null === (d = t.body) || void 0 === d ? void 0 : d.code) === O.AbortCodes.TOO_MANY_USER_GUILDS) {
                        let e = S.default.getCurrentUser(),
                            t = m.default.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff());
                        t ? M(O.MAX_USER_GUILDS_PREMIUM) : M(O.MAX_USER_GUILDS)
                    }
                    throw (null === (a = t.body) || void 0 === a ? void 0 : a.code) === O.AbortCodes.GUILD_AT_CAPACITY && b(), _ && (null === (u = t.body) || void 0 === u ? void 0 : u.code) === O.AbortCodes.UNKNOWN_GUILD && F(e), t
                }
            }

            function P(e) {
                return new Promise(t => h.default.addConditionalChangeListener(() => {
                    let l = h.default.getGuild(e);
                    return null == l || (t(l), !1)
                }))
            }
            var w = {
                joinGuild: v,
                waitForGuild: P,
                async transitionToGuildSync(e, t, l, n) {
                    var d, r;
                    let o = await P(e);
                    let a = (d = o.id, null != (r = l) ? r : (0, s.isInMainTabsExperiment)() ? void 0 : (0, L.getChannelIdForGuildTransition)(d)),
                        u = t;
                    (null == t ? void 0 : t.hasOwnProperty("welcomeModalChannelId")) && null == t.welcomeModalChannelId && (u = {
                        ...t,
                        welcomeModalChannelId: a
                    }), (0, f.transitionTo)(O.Routes.CHANNEL(e, a), u, void 0, n), await new Promise(setImmediate)
                },
                deleteGuild: F,
                selectGuild(e) {
                    (0, i.stopLurking)(e)
                },
                async addGuild(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = arguments.length > 3 ? arguments[3] : void 0;
                    try {
                        let d = await r.default.post({
                            url: O.Endpoints.GUILDS,
                            body: {
                                name: e,
                                icon: t,
                                channels: l,
                                system_channel_id: n
                            },
                            oldFormErrors: !0
                        });
                        return d.body
                    } catch (e) {
                        throw new a.default(e)
                    }
                },
                createGuild(e) {
                    o.default.dispatch({
                        type: "GUILD_CREATE",
                        guild: e
                    })
                },
                setServerMute: (e, t, l) => r.default.patch({
                    url: O.Endpoints.GUILD_MEMBER(e, t),
                    body: {
                        mute: l
                    },
                    oldFormErrors: !0
                }),
                setServerDeaf: (e, t, l) => r.default.patch({
                    url: O.Endpoints.GUILD_MEMBER(e, t),
                    body: {
                        deaf: l
                    },
                    oldFormErrors: !0
                }),
                setChannel(e, t, l) {
                    r.default.patch({
                        url: O.Endpoints.GUILD_MEMBER(e, t),
                        body: {
                            channel_id: l
                        },
                        oldFormErrors: !0
                    })
                },
                setMemberFlags(e, t, l) {
                    r.default.patch({
                        url: O.Endpoints.GUILD_MEMBER(e, t),
                        body: {
                            flags: l
                        },
                        oldFormErrors: !0
                    })
                },
                kickUser: (e, t, l) => r.default.delete({
                    url: O.Endpoints.GUILD_MEMBER(e, t),
                    reason: l,
                    oldFormErrors: !0
                }),
                setCommunicationDisabledUntil(e) {
                    let {
                        guildId: t,
                        userId: l,
                        communicationDisabledUntilTimestamp: d,
                        duration: r,
                        reason: o,
                        location: a
                    } = e;
                    return C.default.patch({
                        url: O.Endpoints.GUILD_MEMBER(t, l),
                        reason: o,
                        body: {
                            communication_disabled_until: d
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: n.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                            properties: {
                                guild_id: t,
                                target_user_id: l,
                                duration: null != r ? r : null,
                                reason: null != o ? o : null,
                                communication_disabled_until: d,
                                location: null != a ? a : null
                            }
                        }
                    })
                },
                banUser: (e, t, l, n) => r.default.put({
                    url: O.Endpoints.GUILD_BAN(e, t),
                    reason: n,
                    body: {
                        delete_message_seconds: l
                    },
                    oldFormErrors: !0
                }),
                unbanUser: (e, t) => r.default.delete({
                    url: O.Endpoints.GUILD_BAN(e, t),
                    oldFormErrors: !0
                }),
                banMultipleUsers: (e, t, l, n) => r.default.post({
                    url: O.Endpoints.BULK_GUILD_BAN(e),
                    body: {
                        user_ids: t,
                        delete_message_seconds: l,
                        reason: n
                    },
                    oldFormErrors: !0
                }),
                async createRole(e, t, l) {
                    let n = {
                        name: null != t && "" !== t ? t : N.default.Messages.NEW_ROLE,
                        color: null != l ? l : 0,
                        permissions: R.default.NONE
                    };
                    try {
                        let t = await r.default.post({
                                url: O.Endpoints.GUILD_ROLES(e),
                                oldFormErrors: !0,
                                body: n
                            }),
                            l = t.body;
                        return l.permissions = d.default.deserialize(l.permissions), o.default.dispatch({
                            type: "GUILD_SETTINGS_ROLE_SELECT",
                            roleId: t.body.id,
                            role: l
                        }), u.default.checkGuildTemplateDirty(e), l
                    } catch (e) {
                        throw new a.default(e)
                    }
                },
                async updateRole(e, t, l) {
                    let {
                        icon: n,
                        unicodeEmoji: d,
                        ...o
                    } = l, a = null === n || (null == n ? void 0 : n.startsWith("data:")) ? n : void 0, i = await r.default.patch({
                        url: O.Endpoints.GUILD_ROLE(e, t),
                        body: {
                            ...o,
                            icon: a,
                            unicode_emoji: d
                        },
                        oldFormErrors: !0
                    });
                    return u.default.checkGuildTemplateDirty(e), i
                },
                updateRolePermissions: (e, t, l) => r.default.patch({
                    url: O.Endpoints.GUILD_ROLE(e, t),
                    body: {
                        permissions: l
                    },
                    oldFormErrors: !0
                }),
                deleteRole(e, t) {
                    r.default.delete({
                        url: O.Endpoints.GUILD_ROLE(e, t),
                        oldFormErrors: !0
                    }).then(() => {
                        u.default.checkGuildTemplateDirty(e)
                    })
                },
                async batchChannelUpdate(e, t) {
                    let l = await r.default.patch({
                        url: O.Endpoints.GUILD_CHANNELS(e),
                        body: t,
                        oldFormErrors: !0
                    });
                    return u.default.checkGuildTemplateDirty(e), l
                },
                async batchRoleUpdate(e, t) {
                    let l = await r.default.patch({
                        url: O.Endpoints.GUILD_ROLES(e),
                        body: t,
                        oldFormErrors: !0
                    });
                    return u.default.checkGuildTemplateDirty(e), l
                },
                requestMembers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    return o.default.dispatch({
                        type: "GUILD_MEMBERS_REQUEST",
                        guildIds: Array.isArray(e) ? e : [e],
                        query: t,
                        limit: l,
                        presences: n
                    })
                },
                searchRecentMembers(e, t) {
                    let {
                        query: l,
                        continuationToken: n
                    } = null != t ? t : {};
                    return o.default.dispatch({
                        type: "GUILD_SEARCH_RECENT_MEMBERS",
                        guildId: e,
                        query: l,
                        continuationToken: n
                    })
                },
                requestMembersById(e, t) {
                    let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    return o.default.dispatch({
                        type: "GUILD_MEMBERS_REQUEST",
                        guildIds: Array.isArray(e) ? e : [e],
                        userIds: Array.isArray(t) ? t : [t],
                        presences: l
                    })
                },
                move(e, t, l, n) {
                    o.default.dispatch({
                        type: "GUILD_MOVE",
                        fromIndex: e,
                        toIndex: t,
                        fromFolderIndex: l,
                        toFolderIndex: n
                    })
                },
                moveById(e, t) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    o.default.dispatch({
                        type: "GUILD_MOVE_BY_ID",
                        sourceId: e,
                        targetId: t,
                        moveToBelow: l,
                        combine: n
                    })
                },
                createGuildFolderLocal(e, t) {
                    A.default.track(O.AnalyticEvents.GUILD_FOLDER_CREATED), o.default.dispatch({
                        type: "GUILD_FOLDER_CREATE_LOCAL",
                        sourceIds: e,
                        name: t
                    })
                },
                editGuildFolderLocal(e, t, l) {
                    o.default.dispatch({
                        type: "GUILD_FOLDER_EDIT_LOCAL",
                        targetId: e,
                        sourceIds: t,
                        name: l
                    })
                },
                deleteGuildFolderLocal(e) {
                    o.default.dispatch({
                        type: "GUILD_FOLDER_DELETE_LOCAL",
                        targetId: e
                    })
                },
                toggleGuildFolderExpand(e) {
                    let t = D.default.isFolderExpanded(e);
                    A.default.track(O.AnalyticEvents.GUILD_FOLDER_CLICKED, {
                        source: "sidebar",
                        action: t ? "collapsed" : "expanded"
                    }), o.default.dispatch({
                        type: "TOGGLE_GUILD_FOLDER_EXPAND",
                        folderId: e
                    })
                },
                setGuildFolderExpanded(e, t) {
                    o.default.dispatch({
                        type: "SET_GUILD_FOLDER_EXPANDED",
                        folderId: e,
                        expanded: t
                    })
                },
                collapseAllFolders() {
                    o.default.dispatch({
                        type: "GUILD_FOLDER_COLLAPSE"
                    })
                },
                nsfwAgree(e) {
                    o.default.dispatch({
                        type: "GUILD_NSFW_AGREE",
                        guildId: e
                    })
                },
                nsfwReturnToSafety(e) {
                    if ((0, s.isInMainTabsExperiment)() && !(0, _.isOnNewPanels)()) {
                        let e = (0, E.getRootNavigationRef)();
                        if ((null == e ? void 0 : e.isReady()) !== !0) return;
                        let t = (0, c.coerceModalRoute)(e.getCurrentRoute());
                        for (null != t && e.goBack();;) {
                            let t = (0, c.coerceChannelRoute)(e.getCurrentRoute());
                            if (null == t) break;
                            let l = T.default.getChannel(t.params.channelId);
                            if (null == l || !l.isNSFW()) break;
                            e.goBack()
                        }
                        return
                    }
                    if (null == e) {
                        (0, f.transitionTo)(O.Routes.FRIENDS);
                        return
                    }
                    let t = G.default.getDefaultChannel(e);
                    null == t || t.isNSFW() ? (0, f.transitionTo)(O.Routes.FRIENDS) : (0, f.transitionTo)(O.Routes.CHANNEL(e, t.id))
                },
                escapeToDefaultChannel(e) {
                    let t = G.default.getDefaultChannel(e);
                    null != t ? (0, f.transitionTo)(O.Routes.CHANNEL(e, t.id)) : (0, f.transitionTo)(O.Routes.FRIENDS)
                },
                async fetchApplications(e, t) {
                    let l = {
                        url: O.Endpoints.GUILD_APPLICATIONS(e),
                        oldFormErrors: !0
                    };
                    null != t && (l.query = {
                        channel_id: t
                    });
                    let n = await r.default.get(l),
                        d = n.body;
                    o.default.dispatch({
                        type: "GUILD_APPLICATIONS_FETCH_SUCCESS",
                        guildId: e,
                        applications: d
                    })
                },
                async fetchGuildBansBatch(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = {
                            limit: t
                        };
                    null != l && (n.after = l), await r.default.get({
                        url: O.Endpoints.GUILD_BANS(e),
                        oldFormErrors: !0,
                        query: n
                    }).then(t => {
                        o.default.dispatch({
                            type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                            bans: t.body,
                            guildId: e
                        })
                    })
                },
                async searchGuildBans(e, t, l) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
                        d = {
                            limit: n
                        };
                    null != l && l.length > 0 && (d.user_ids = l), null != t && t.trim().length > 0 && (d.query = t), await r.default.get({
                        url: O.Endpoints.GUILD_BANS_SEARCH(e),
                        oldFormErrors: !0,
                        query: d
                    }).then(t => {
                        o.default.dispatch({
                            type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                            bans: t.body,
                            guildId: e
                        })
                    })
                },
                async fetchGuildBans(e) {
                    await r.default.get({
                        url: O.Endpoints.GUILD_BANS(e),
                        oldFormErrors: !0
                    }).then(e => {
                        o.default.dispatch({
                            type: "GUILD_SETTINGS_LOADED_BANS",
                            bans: e.body
                        })
                    })
                },
                fetchGuildRoleConnectionsEligibility: (e, t) => r.default.get({
                    url: O.Endpoints.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: l
                    } = e;
                    return o.default.dispatch({
                        type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS",
                        roleId: t,
                        roleConnectionEligibility: l
                    }), l
                }),
                async assignGuildRoleConnection(e, t) {
                    await r.default.post({
                        url: O.Endpoints.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
                        oldFormErrors: !0
                    })
                },
                async unassignGuildRoleConnection(e, t) {
                    await r.default.post({
                        url: O.Endpoints.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
                        oldFormErrors: !0
                    })
                },
                async getGuildRoleConnectionsConfigurations(e) {
                    let t = await r.default.get({
                        url: O.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                        oldFormErrors: !0
                    });
                    return t.body
                }
            }
        },
        883069: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("872717"),
                d = l("913144"),
                r = l("599110"),
                o = l("82339"),
                a = l("49111"),
                u = {
                    resolveGuildTemplate: function e(t) {
                        return d.default.isDispatching() ? Promise.resolve().then(() => e(t)) : (d.default.dispatch({
                            type: "GUILD_TEMPLATE_RESOLVE",
                            code: t
                        }), n.default.get({
                            url: a.Endpoints.UNRESOLVED_GUILD_TEMPLATE(t),
                            oldFormErrors: !0
                        }).then(e => {
                            let l = e.body;
                            return r.default.track(a.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
                                resolved: !0,
                                guild_template_code: t,
                                guild_template_name: l.name,
                                guild_template_description: l.description,
                                guild_template_guild_id: l.source_guild_id
                            }), d.default.dispatch({
                                type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
                                guildTemplate: l,
                                code: t
                            }), {
                                guildTemplate: (0, o.default)(l),
                                code: t
                            }
                        }, () => (r.default.track(a.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
                            resolved: !1,
                            guild_template_code: t
                        }), d.default.dispatch({
                            type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
                            code: t
                        }), {
                            guildTemplate: null,
                            code: t
                        })))
                    },
                    loadTemplatesForGuild: e => n.default.get({
                        url: a.Endpoints.GUILD_TEMPLATES(e),
                        oldFormErrors: !0
                    }).then(e => (d.default.dispatch({
                        type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
                        guildTemplates: e.body
                    }), e)),
                    createGuildTemplate: (e, t, l) => n.default.post({
                        url: a.Endpoints.GUILD_TEMPLATES(e),
                        body: {
                            name: t,
                            description: l
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        d.default.dispatch({
                            type: "GUILD_TEMPLATE_CREATE_SUCCESS",
                            guildTemplate: e.body,
                            code: e.body.code
                        })
                    }),
                    syncGuildTemplate: (e, t) => n.default.put({
                        url: a.Endpoints.GUILD_TEMPLATE(e, t),
                        oldFormErrors: !0
                    }).then(e => {
                        d.default.dispatch({
                            type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                            guildTemplate: e.body,
                            code: t
                        })
                    }),
                    updateGuildTemplate: (e, t, l, r) => n.default.patch({
                        url: a.Endpoints.GUILD_TEMPLATE(e, t),
                        body: {
                            name: l,
                            description: r
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        d.default.dispatch({
                            type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                            guildTemplate: e.body,
                            code: t
                        })
                    }),
                    deleteGuildTemplate: (e, t) => n.default.delete({
                        url: a.Endpoints.GUILD_TEMPLATE(e, t),
                        oldFormErrors: !0
                    }).then(() => {
                        d.default.dispatch({
                            type: "GUILD_TEMPLATE_DELETE_SUCCESS",
                            guildId: e,
                            code: t
                        })
                    })
                }
        },
        81732: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("913144"),
                d = l("957255"),
                r = l("883069"),
                o = l("49111"),
                a = {
                    async checkGuildTemplateDirty(e) {
                        if (!d.default.canWithPartialContext(o.Permissions.MANAGE_GUILD, {
                                guildId: e
                            })) return;
                        let t = await r.default.loadTemplatesForGuild(e);
                        t.body.length > 0 && n.default.dispatch({
                            type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH",
                            guildTemplate: t.body[0]
                        })
                    },
                    hideGuildTemplateDirtyTooltip(e) {
                        n.default.dispatch({
                            type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE",
                            guildId: e
                        })
                    },
                    hideGuildTemplatePromotionTooltip() {
                        n.default.dispatch({
                            type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE"
                        })
                    }
                }
        },
        579033: function(e, t, l) {
            "use strict";
            var n, d, r, o;
            l.r(t), l.d(t, {
                GuildTemplateStates: function() {
                    return n
                },
                InternalTemplateCodes: function() {
                    return d
                }
            }), (r = n || (n = {})).RESOLVING = "RESOLVING", r.RESOLVED = "RESOLVED", r.EXPIRED = "EXPIRED", r.ACCEPTED = "ACCEPTED", r.ACCEPTING = "ACCEPTING", (o = d || (d = {})).CLASSROOM = "fVfBazbqjhXg", o.LOCAL_COMMUNITIES = "64UDvRNCC52Y", o.CREATORS_HOBBIES = "6exdzMgjZgah", o.GLOBAL_COMMUNITIES = "4sgbPdCjzAYU", o.FRIENDS_FAMILY = "hgM48av5Q69A", o.STUDY_GROUPS = "FbwUwRp4j8Es", o.CREATE_FROM_SCRATCH = "WYAQmEzjw3Pj", o.CAMPUS_CLUBS = "Ctg7PUHcQmZu", o.LEAGUE_CLUBS = "PJ6VvgEJYg45", o.GITHUB_HACKATHON = "UqzZCTj2zfwy"
        },
        82339: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("579033");

            function d(e) {
                var t;
                return {
                    code: e.code,
                    state: n.GuildTemplateStates.RESOLVED,
                    name: e.name,
                    description: null !== (t = e.description) && void 0 !== t ? t : "",
                    creatorId: e.creator_id,
                    creator: e.creator,
                    createdAt: e.created_at,
                    updatedAt: e.updated_at,
                    sourceGuildId: e.source_guild_id,
                    serializedSourceGuild: e.serialized_source_guild,
                    usageCount: e.usage_count,
                    isDirty: e.is_dirty
                }
            }
        },
        248967: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                stopLurkingAll: function() {
                    return i
                },
                stopLurking: function() {
                    return s
                }
            }), l("222007");
            var n = l("872717"),
                d = l("913144"),
                r = l("945956"),
                o = l("449008"),
                a = l("267567"),
                u = l("49111");
            async function i(e) {
                let t = a.default.lurkingGuildIds(),
                    l = t.filter(t => !e.includes(t));
                0 !== l.length && (d.default.dispatch({
                    type: "GUILD_STOP_LURKING",
                    ignoredGuildIds: e
                }), await Promise.all(l.map(async e => {
                    let t = a.default.getLurkingSource();
                    try {
                        await n.default.delete({
                            url: u.Endpoints.GUILD_LEAVE(e),
                            body: {
                                lurking: !0
                            },
                            oldFormErrors: !0
                        })
                    } catch (l) {
                        d.default.dispatch({
                            type: "GUILD_STOP_LURKING_FAILURE",
                            lurkingGuildId: e,
                            lurkingSource: t
                        })
                    }
                })))
            }
            async function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = a.default.lurkingGuildIds();
                if (0 === t.length) return;
                let l = null == e || !t.includes(e);
                if (!l) return;
                let n = r.default.getGuildId(),
                    d = [e, n].filter(o.isNotNullish);
                await i(d)
            }
        },
        153498: function(e, t, l) {
            "use strict";

            function n(e) {
                let {} = e;
                return !1
            }

            function d(e, t) {
                return !1
            }

            function r(e) {
                return !1
            }

            function o() {
                return !1
            }

            function a() {
                return !1
            }

            function u(e) {
                let {} = e;
                return !1
            }

            function i(e, t) {
                return !1
            }

            function s() {
                return !1
            }

            function E(e) {}

            function c(e) {}

            function _(e) {
                return !1
            }
            l.r(t), l.d(t, {
                navigateToChannel: function() {
                    return n
                },
                navigateToMemberVerification: function() {
                    return d
                },
                navigateToRootTab: function() {
                    return r
                },
                resetToAuthRoute: function() {
                    return o
                },
                resetToPanelsUI: function() {
                    return a
                },
                pushModal: function() {
                    return u
                },
                popModal: function() {
                    return i
                },
                popAllModals: function() {
                    return s
                },
                coerceChannelRoute: function() {
                    return E
                },
                coerceModalRoute: function() {
                    return c
                },
                useIsModalOpen: function() {
                    return _
                }
            })
        },
        258158: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var d = l("551042");

            function r() {
                (0, d.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("826269").then(l.bind(l, "826269"));
                    return t => (0, n.jsx)(e, {
                        ...t
                    })
                })
            }
        },
        383173: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            }), l("222007");
            var n = l("446674"),
                d = l("913144"),
                r = l("374363");
            let o = new Set;
            class a extends n.default.PersistedStore {
                initialize(e) {
                    null != e && (o = new Set(e.expandedFolders)), this.waitFor(r.default)
                }
                getState() {
                    return {
                        expandedFolders: Array.from(o)
                    }
                }
                getExpandedFolders() {
                    return o
                }
                isFolderExpanded(e) {
                    return o.has(e)
                }
            }
            a.displayName = "ExpandedGuildFolderStore", a.persistKey = "ExpandedGuildFolderStore";
            var u = new a(d.default, {
                TOGGLE_GUILD_FOLDER_EXPAND: function(e) {
                    let {
                        folderId: t
                    } = e;
                    (o = new Set(o)).has(t) ? o.delete(t) : o.add(t)
                },
                SET_GUILD_FOLDER_EXPANDED: function(e) {
                    let {
                        folderId: t,
                        expanded: l
                    } = e;
                    o = new Set(o), l ? o.add(t) : o.has(t) && o.delete(t)
                },
                USER_SETTINGS_PROTO_UPDATE: function() {
                    let e = r.default.getGuildFolders();
                    if (null == e) return !1;
                    let t = !1;
                    for (let l of o) !e.some(e => e.folderId === l) && ((o = new Set(o)).delete(l), t = !0);
                    return t
                },
                GUILD_FOLDER_COLLAPSE: function() {
                    if (0 === o.size) return !1;
                    o = new Set
                }
            })
        },
        840707: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("872717"),
                d = l("599110");

            function r(e, t, l) {
                let {
                    trackedActionData: n,
                    ...r
                } = t, o = {
                    url: r.url,
                    request_method: l
                };
                return new Promise((t, l) => {
                    e(r).then(e => {
                        let l = n.properties;
                        "function" == typeof n.properties && (l = n.properties(e)), (0, d.trackNetworkAction)(n.event, {
                            status_code: e.status,
                            ...o,
                            ...l
                        }), t(e)
                    }).catch(e => {
                        var t, r;
                        let a = n.properties;
                        "function" == typeof n.properties && (a = n.properties(e)), (0, d.trackNetworkAction)(n.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message,
                            ...o,
                            ...a
                        }), l(e)
                    })
                })
            }
            var o = {
                get: function(e) {
                    return r(n.default.get, e, "get")
                },
                post: function(e) {
                    return r(n.default.post, e, "post")
                },
                put: function(e) {
                    return r(n.default.put, e, "put")
                },
                patch: function(e) {
                    return r(n.default.patch, e, "patch")
                },
                delete: function(e) {
                    return r(n.default.delete, e, "del")
                }
            }
        }
    }
]);
//# sourceMappingURL=ba60ecac374ac0077c25.js.map