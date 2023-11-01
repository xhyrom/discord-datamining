(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["18814"], {
        851387: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                waitForGuild: function() {
                    return v
                },
                default: function() {
                    return w
                }
            });
            var d = l("759843"),
                n = l("316693"),
                r = l("872717"),
                a = l("913144"),
                o = l("333805"),
                u = l("81732"),
                i = l("248967"),
                s = l("21121"),
                E = l("693051"),
                c = l("153498"),
                _ = l("934306"),
                f = l("258158"),
                p = l("393414"),
                L = l("239380"),
                I = l("271938"),
                T = l("42203"),
                D = l("383173"),
                G = l("923959"),
                U = l("305961"),
                h = l("18494"),
                y = l("162771"),
                S = l("697218"),
                R = l("599110"),
                A = l("991170"),
                C = l("719923"),
                m = l("840707"),
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
                    a.default.dispatch({
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
            async function P(e) {
                var t, d, n, o, u;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        source: s,
                        loadId: E,
                        lurkLocation: c
                    } = i,
                    _ = null !== (t = i.lurker) && void 0 !== t && t,
                    L = S.default.getCurrentUser();
                if (null !== (d = null == L ? void 0 : L.hasFlag(O.UserFlags.QUARANTINED)) && void 0 !== d && d) return (0, f.default)(), new Promise((e, t) => t(Error()));
                a.default.wait(() => a.default.dispatch({
                    type: "GUILD_JOIN",
                    guildId: e,
                    lurker: _,
                    source: s,
                    loadId: E
                }));
                try {
                    let t = y.default.getGuildId(),
                        d = e === t && null != U.default.getGuild(e),
                        n = d ? h.default.getChannelId(e) : null,
                        o = await r.default.put({
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
                    if (null != o.body.join_request && a.default.dispatch({
                            type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                            guildId: e,
                            request: o.body.join_request
                        }), null == U.default.getGuild(e) && o.body.show_verification_form) return (0, p.transitionTo)(O.Routes.GUILD_MEMBER_VERIFICATION(e)), o;
                    if (null != o.body.welcome_screen && a.default.dispatch({
                            type: "WELCOME_SCREEN_UPDATE",
                            guildId: o.body.id,
                            welcomeScreen: o.body.welcome_screen
                        }), null != o.body.approximate_presence_count && a.default.dispatch({
                            type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                            guildId: o.body.id,
                            count: o.body.approximate_presence_count
                        }), !_) {
                        let {
                            default: t
                        } = await l.el("937692").then(l.bind(l, "937692"));
                        await t({
                            guildId: e,
                            returnChannelId: n
                        })
                    }
                    return o
                } catch (t) {
                    if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === O.AbortCodes.TOO_MANY_USER_GUILDS) {
                        let e = S.default.getCurrentUser(),
                            t = C.default.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff());
                        t ? M(O.MAX_USER_GUILDS_PREMIUM) : M(O.MAX_USER_GUILDS)
                    }
                    throw (null === (o = t.body) || void 0 === o ? void 0 : o.code) === O.AbortCodes.GUILD_AT_CAPACITY && b(), _ && (null === (u = t.body) || void 0 === u ? void 0 : u.code) === O.AbortCodes.UNKNOWN_GUILD && F(e), t
                }
            }

            function v(e) {
                return new Promise(t => U.default.addConditionalChangeListener(() => {
                    let l = U.default.getGuild(e);
                    return null == l || (t(l), !1)
                }))
            }
            var w = {
                joinGuild: P,
                waitForGuild: v,
                async transitionToGuildSync(e, t, l, d) {
                    var n, r;
                    let a = await v(e);
                    let o = (n = a.id, null != (r = l) ? r : (0, s.isInMainTabsExperiment)() ? void 0 : (0, L.getChannelIdForGuildTransition)(n)),
                        u = t;
                    (null == t ? void 0 : t.hasOwnProperty("welcomeModalChannelId")) && null == t.welcomeModalChannelId && (u = {
                        ...t,
                        welcomeModalChannelId: o
                    }), (0, p.transitionTo)(O.Routes.CHANNEL(e, o), u, void 0, d), await new Promise(setImmediate)
                },
                deleteGuild: F,
                selectGuild(e) {
                    (0, i.stopLurking)(e)
                },
                async addGuild(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        d = arguments.length > 3 ? arguments[3] : void 0;
                    try {
                        let n = await r.default.post({
                            url: O.Endpoints.GUILDS,
                            body: {
                                name: e,
                                icon: t,
                                channels: l,
                                system_channel_id: d
                            },
                            oldFormErrors: !0
                        });
                        return n.body
                    } catch (e) {
                        throw new o.default(e)
                    }
                },
                createGuild(e) {
                    a.default.dispatch({
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
                        communicationDisabledUntilTimestamp: n,
                        duration: r,
                        reason: a,
                        location: o
                    } = e;
                    return m.default.patch({
                        url: O.Endpoints.GUILD_MEMBER(t, l),
                        reason: a,
                        body: {
                            communication_disabled_until: n
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: d.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                            properties: {
                                guild_id: t,
                                target_user_id: l,
                                duration: null != r ? r : null,
                                reason: null != a ? a : null,
                                communication_disabled_until: n,
                                location: null != o ? o : null
                            }
                        }
                    })
                },
                banUser: (e, t, l, d) => r.default.put({
                    url: O.Endpoints.GUILD_BAN(e, t),
                    reason: d,
                    body: {
                        delete_message_seconds: l
                    },
                    oldFormErrors: !0
                }),
                unbanUser: (e, t) => r.default.delete({
                    url: O.Endpoints.GUILD_BAN(e, t),
                    oldFormErrors: !0
                }),
                banMultipleUsers: (e, t, l, d) => r.default.post({
                    url: O.Endpoints.BULK_GUILD_BAN(e),
                    body: {
                        user_ids: t,
                        delete_message_seconds: l,
                        reason: d
                    },
                    oldFormErrors: !0
                }),
                async createRole(e, t, l) {
                    let d = {
                        name: null != t && "" !== t ? t : N.default.Messages.NEW_ROLE,
                        color: null != l ? l : 0,
                        permissions: A.default.NONE
                    };
                    try {
                        let t = await r.default.post({
                                url: O.Endpoints.GUILD_ROLES(e),
                                oldFormErrors: !0,
                                body: d
                            }),
                            l = t.body;
                        return l.permissions = n.default.deserialize(l.permissions), a.default.dispatch({
                            type: "GUILD_SETTINGS_ROLE_SELECT",
                            roleId: t.body.id,
                            role: l
                        }), u.default.checkGuildTemplateDirty(e), l
                    } catch (e) {
                        throw new o.default(e)
                    }
                },
                async updateRole(e, t, l) {
                    let {
                        icon: d,
                        unicodeEmoji: n,
                        ...a
                    } = l, o = null === d || (null == d ? void 0 : d.startsWith("data:")) ? d : void 0, i = await r.default.patch({
                        url: O.Endpoints.GUILD_ROLE(e, t),
                        body: {
                            ...a,
                            icon: o,
                            unicode_emoji: n
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
                        d = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    return a.default.dispatch({
                        type: "GUILD_MEMBERS_REQUEST",
                        guildIds: Array.isArray(e) ? e : [e],
                        query: t,
                        limit: l,
                        presences: d
                    })
                },
                searchRecentMembers(e, t) {
                    let {
                        query: l,
                        continuationToken: d
                    } = null != t ? t : {};
                    return a.default.dispatch({
                        type: "GUILD_SEARCH_RECENT_MEMBERS",
                        guildId: e,
                        query: l,
                        continuationToken: d
                    })
                },
                requestMembersById(e, t) {
                    let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    return a.default.dispatch({
                        type: "GUILD_MEMBERS_REQUEST",
                        guildIds: Array.isArray(e) ? e : [e],
                        userIds: Array.isArray(t) ? t : [t],
                        presences: l
                    })
                },
                move(e, t, l, d) {
                    a.default.dispatch({
                        type: "GUILD_MOVE",
                        fromIndex: e,
                        toIndex: t,
                        fromFolderIndex: l,
                        toFolderIndex: d
                    })
                },
                moveById(e, t) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    a.default.dispatch({
                        type: "GUILD_MOVE_BY_ID",
                        sourceId: e,
                        targetId: t,
                        moveToBelow: l,
                        combine: d
                    })
                },
                createGuildFolderLocal(e, t) {
                    R.default.track(O.AnalyticEvents.GUILD_FOLDER_CREATED), a.default.dispatch({
                        type: "GUILD_FOLDER_CREATE_LOCAL",
                        sourceIds: e,
                        name: t
                    })
                },
                editGuildFolderLocal(e, t, l) {
                    a.default.dispatch({
                        type: "GUILD_FOLDER_EDIT_LOCAL",
                        targetId: e,
                        sourceIds: t,
                        name: l
                    })
                },
                deleteGuildFolderLocal(e) {
                    a.default.dispatch({
                        type: "GUILD_FOLDER_DELETE_LOCAL",
                        targetId: e
                    })
                },
                toggleGuildFolderExpand(e) {
                    let t = D.default.isFolderExpanded(e);
                    R.default.track(O.AnalyticEvents.GUILD_FOLDER_CLICKED, {
                        source: "sidebar",
                        action: t ? "collapsed" : "expanded"
                    }), a.default.dispatch({
                        type: "TOGGLE_GUILD_FOLDER_EXPAND",
                        folderId: e
                    })
                },
                setGuildFolderExpanded(e, t) {
                    a.default.dispatch({
                        type: "SET_GUILD_FOLDER_EXPANDED",
                        folderId: e,
                        expanded: t
                    })
                },
                collapseAllFolders() {
                    a.default.dispatch({
                        type: "GUILD_FOLDER_COLLAPSE"
                    })
                },
                nsfwAgree(e) {
                    a.default.dispatch({
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
                        (0, p.transitionTo)(O.Routes.FRIENDS);
                        return
                    }
                    let t = G.default.getDefaultChannel(e);
                    null == t || t.isNSFW() ? (0, p.transitionTo)(O.Routes.FRIENDS) : (0, p.transitionTo)(O.Routes.CHANNEL(e, t.id))
                },
                escapeToDefaultChannel(e) {
                    let t = G.default.getDefaultChannel(e);
                    null != t ? (0, p.transitionTo)(O.Routes.CHANNEL(e, t.id)) : (0, p.transitionTo)(O.Routes.FRIENDS)
                },
                async fetchApplications(e, t) {
                    let l = {
                        url: O.Endpoints.GUILD_APPLICATIONS(e),
                        oldFormErrors: !0
                    };
                    null != t && (l.query = {
                        channel_id: t
                    });
                    let d = await r.default.get(l),
                        n = d.body;
                    a.default.dispatch({
                        type: "GUILD_APPLICATIONS_FETCH_SUCCESS",
                        guildId: e,
                        applications: n
                    })
                },
                async fetchGuildBansBatch(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        d = {
                            limit: t
                        };
                    null != l && (d.after = l), await r.default.get({
                        url: O.Endpoints.GUILD_BANS(e),
                        oldFormErrors: !0,
                        query: d
                    }).then(t => {
                        a.default.dispatch({
                            type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                            bans: t.body,
                            guildId: e
                        })
                    })
                },
                async searchGuildBans(e, t, l) {
                    let d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
                        n = {
                            limit: d
                        };
                    null != l && l.length > 0 && (n.user_ids = l), null != t && t.trim().length > 0 && (n.query = t), await r.default.get({
                        url: O.Endpoints.GUILD_BANS_SEARCH(e),
                        oldFormErrors: !0,
                        query: n
                    }).then(t => {
                        a.default.dispatch({
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
                        a.default.dispatch({
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
                    return a.default.dispatch({
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
            var d = l("872717"),
                n = l("913144"),
                r = l("599110"),
                a = l("82339"),
                o = l("49111"),
                u = {
                    resolveGuildTemplate: function e(t) {
                        return n.default.isDispatching() ? Promise.resolve().then(() => e(t)) : (n.default.dispatch({
                            type: "GUILD_TEMPLATE_RESOLVE",
                            code: t
                        }), d.default.get({
                            url: o.Endpoints.UNRESOLVED_GUILD_TEMPLATE(t),
                            oldFormErrors: !0
                        }).then(e => {
                            let l = e.body;
                            return r.default.track(o.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
                                resolved: !0,
                                guild_template_code: t,
                                guild_template_name: l.name,
                                guild_template_description: l.description,
                                guild_template_guild_id: l.source_guild_id
                            }), n.default.dispatch({
                                type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
                                guildTemplate: l,
                                code: t
                            }), {
                                guildTemplate: (0, a.default)(l),
                                code: t
                            }
                        }, () => (r.default.track(o.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
                            resolved: !1,
                            guild_template_code: t
                        }), n.default.dispatch({
                            type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
                            code: t
                        }), {
                            guildTemplate: null,
                            code: t
                        })))
                    },
                    loadTemplatesForGuild: e => d.default.get({
                        url: o.Endpoints.GUILD_TEMPLATES(e),
                        oldFormErrors: !0
                    }).then(e => (n.default.dispatch({
                        type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
                        guildTemplates: e.body
                    }), e)),
                    createGuildTemplate: (e, t, l) => d.default.post({
                        url: o.Endpoints.GUILD_TEMPLATES(e),
                        body: {
                            name: t,
                            description: l
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        n.default.dispatch({
                            type: "GUILD_TEMPLATE_CREATE_SUCCESS",
                            guildTemplate: e.body,
                            code: e.body.code
                        })
                    }),
                    syncGuildTemplate: (e, t) => d.default.put({
                        url: o.Endpoints.GUILD_TEMPLATE(e, t),
                        oldFormErrors: !0
                    }).then(e => {
                        n.default.dispatch({
                            type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                            guildTemplate: e.body,
                            code: t
                        })
                    }),
                    updateGuildTemplate: (e, t, l, r) => d.default.patch({
                        url: o.Endpoints.GUILD_TEMPLATE(e, t),
                        body: {
                            name: l,
                            description: r
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        n.default.dispatch({
                            type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                            guildTemplate: e.body,
                            code: t
                        })
                    }),
                    deleteGuildTemplate: (e, t) => d.default.delete({
                        url: o.Endpoints.GUILD_TEMPLATE(e, t),
                        oldFormErrors: !0
                    }).then(() => {
                        n.default.dispatch({
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
                    return o
                }
            });
            var d = l("913144"),
                n = l("957255"),
                r = l("883069"),
                a = l("49111"),
                o = {
                    async checkGuildTemplateDirty(e) {
                        if (!n.default.canWithPartialContext(a.Permissions.MANAGE_GUILD, {
                                guildId: e
                            })) return;
                        let t = await r.default.loadTemplatesForGuild(e);
                        t.body.length > 0 && d.default.dispatch({
                            type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH",
                            guildTemplate: t.body[0]
                        })
                    },
                    hideGuildTemplateDirtyTooltip(e) {
                        d.default.dispatch({
                            type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE",
                            guildId: e
                        })
                    },
                    hideGuildTemplatePromotionTooltip() {
                        d.default.dispatch({
                            type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE"
                        })
                    }
                }
        },
        579033: function(e, t, l) {
            "use strict";
            var d, n, r, a;
            l.r(t), l.d(t, {
                GuildTemplateStates: function() {
                    return d
                },
                InternalTemplateCodes: function() {
                    return n
                }
            }), (r = d || (d = {})).RESOLVING = "RESOLVING", r.RESOLVED = "RESOLVED", r.EXPIRED = "EXPIRED", r.ACCEPTED = "ACCEPTED", r.ACCEPTING = "ACCEPTING", (a = n || (n = {})).CLASSROOM = "fVfBazbqjhXg", a.LOCAL_COMMUNITIES = "64UDvRNCC52Y", a.CREATORS_HOBBIES = "6exdzMgjZgah", a.GLOBAL_COMMUNITIES = "4sgbPdCjzAYU", a.FRIENDS_FAMILY = "hgM48av5Q69A", a.STUDY_GROUPS = "FbwUwRp4j8Es", a.CREATE_FROM_SCRATCH = "WYAQmEzjw3Pj", a.CAMPUS_CLUBS = "Ctg7PUHcQmZu", a.LEAGUE_CLUBS = "PJ6VvgEJYg45", a.GITHUB_HACKATHON = "UqzZCTj2zfwy"
        },
        82339: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var d = l("579033");

            function n(e) {
                var t;
                return {
                    code: e.code,
                    state: d.GuildTemplateStates.RESOLVED,
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
            });
            var d = l("872717"),
                n = l("913144"),
                r = l("945956"),
                a = l("449008"),
                o = l("267567"),
                u = l("49111");
            async function i(e) {
                let t = o.default.lurkingGuildIds(),
                    l = t.filter(t => !e.includes(t));
                0 !== l.length && (n.default.dispatch({
                    type: "GUILD_STOP_LURKING",
                    ignoredGuildIds: e
                }), await Promise.all(l.map(async e => {
                    let t = o.default.getLurkingSource();
                    try {
                        await d.default.delete({
                            url: u.Endpoints.GUILD_LEAVE(e),
                            body: {
                                lurking: !0
                            },
                            oldFormErrors: !0
                        })
                    } catch (l) {
                        n.default.dispatch({
                            type: "GUILD_STOP_LURKING_FAILURE",
                            lurkingGuildId: e,
                            lurkingSource: t
                        })
                    }
                })))
            }
            async function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = o.default.lurkingGuildIds();
                if (0 === t.length) return;
                let l = null == e || !t.includes(e);
                if (!l) return;
                let d = r.default.getGuildId(),
                    n = [e, d].filter(a.isNotNullish);
                await i(n)
            }
        },
        153498: function(e, t, l) {
            "use strict";

            function d(e) {
                let {} = e;
                return !1
            }

            function n(e, t) {
                return !1
            }

            function r(e) {
                return !1
            }

            function a() {
                return !1
            }

            function o() {
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
                    return d
                },
                navigateToMemberVerification: function() {
                    return n
                },
                navigateToRootTab: function() {
                    return r
                },
                resetToAuthRoute: function() {
                    return a
                },
                resetToPanelsUI: function() {
                    return o
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
            var d = l("37983");
            l("884691");
            var n = l("551042");

            function r() {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("826269").then(l.bind(l, "826269"));
                    return t => (0, d.jsx)(e, {
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
            });
            var d = l("446674"),
                n = l("913144"),
                r = l("374363");
            let a = new Set;
            class o extends d.default.PersistedStore {
                initialize(e) {
                    null != e && (a = new Set(e.expandedFolders)), this.waitFor(r.default)
                }
                getState() {
                    return {
                        expandedFolders: Array.from(a)
                    }
                }
                getExpandedFolders() {
                    return a
                }
                isFolderExpanded(e) {
                    return a.has(e)
                }
            }
            o.displayName = "ExpandedGuildFolderStore", o.persistKey = "ExpandedGuildFolderStore";
            var u = new o(n.default, {
                TOGGLE_GUILD_FOLDER_EXPAND: function(e) {
                    let {
                        folderId: t
                    } = e;
                    (a = new Set(a)).has(t) ? a.delete(t) : a.add(t)
                },
                SET_GUILD_FOLDER_EXPANDED: function(e) {
                    let {
                        folderId: t,
                        expanded: l
                    } = e;
                    a = new Set(a), l ? a.add(t) : a.has(t) && a.delete(t)
                },
                USER_SETTINGS_PROTO_UPDATE: function() {
                    let e = r.default.getGuildFolders();
                    if (null == e) return !1;
                    let t = !1;
                    for (let l of a) !e.some(e => e.folderId === l) && ((a = new Set(a)).delete(l), t = !0);
                    return t
                },
                GUILD_FOLDER_COLLAPSE: function() {
                    if (0 === a.size) return !1;
                    a = new Set
                }
            })
        }
    }
]);
//# sourceMappingURL=fa5f082b6c68e398d20d.js.map