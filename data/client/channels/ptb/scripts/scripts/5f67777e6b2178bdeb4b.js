(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["90522"], {
        273215: function(e, t, s) {
            "use strict";
            e.exports = s.p + "63900a1ba1f23d305c53.png"
        },
        719933: function(e, t, s) {
            "use strict";
            e.exports = s.p + "2d8d31d0ce7c0e673266.png"
        },
        90026: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a5bb35518e19a27b57be.png"
        },
        824839: function(e, t, s) {
            "use strict";
            e.exports = s.p + "16b667dc5539a47aa346.svg"
        },
        935119: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b0efcdc15f8bd689c89f.svg"
        },
        1890: function(e, t, s) {
            "use strict";
            e.exports = s.p + "6d387ec5eedee450a1c6.svg"
        },
        503420: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ClockIcon: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("669491"),
                a = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm1-18a1 1 0 1 0-2 0v7a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V5Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        148217: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var i = s("884691"),
                n = s("446674"),
                a = s("327037"),
                r = s("84339"),
                l = s("271938");

            function o() {
                let [e, t] = (0, n.useStateFromStoresArray)([l.default], () => [l.default.isAuthenticated(), null != l.default.getAnalyticsToken()]), s = (0, r.default)(e);
                i.useEffect(() => {
                    !s && e && !t && a.fetchCurrentUser({
                        withAnalyticsToken: !0
                    })
                }, [s, e, t])
            }
        },
        69927: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                setPageTitleNotificationCount: function() {
                    return d
                },
                flashPageTitle: function() {
                    return c
                },
                usePageTitle: function() {
                    return E
                },
                AppPageTitle: function() {
                    return S
                },
                usePageTitleManager: function() {
                    return A
                }
            });
            var i = s("884691"),
                n = s("308503"),
                a = s("773336");
            let r = {
                    base: a.isPlatformEmbedded ? void 0 : "Discord"
                },
                l = 0,
                o = {
                    count: 3,
                    onlyWhenBlurred: !1,
                    interval: 1e3
                },
                u = (0, n.default)(() => ({
                    titles: [r],
                    notificationCount: void 0,
                    flashQueue: []
                }));

            function d(e) {
                u.setState({
                    notificationCount: e
                })
            }

            function c(e) {
                let t = {
                    ...o,
                    ...e,
                    id: l++
                };
                return t.count = Math.max(t.count, t.messages.length), u.setState(e => ({
                    flashQueue: [...e.flashQueue, t]
                })), () => h(t.id)
            }

            function h(e) {
                u.setState(t => ({
                    flashQueue: t.flashQueue.filter(t => t.id !== e)
                }))
            }

            function E(e) {
                i.useEffect(() => {
                    var t;
                    return t = e, u.setState(e => ({
                        titles: [t, ...e.titles]
                    })), () => {
                        u.setState(e => ({
                            titles: e.titles.filter(e => e !== t)
                        }))
                    }
                }, [...Object.values(e)])
            }

            function S(e) {
                return E(e), null
            }

            function A() {
                let {
                    skipsSettingDefaultPageTitle: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i.useEffect(() => {
                    function e() {
                        u.setState({
                            flashQueue: []
                        })
                    }
                    return document.addEventListener("focusin", e, {
                        capture: !0
                    }), () => document.removeEventListener("focusin", e, {
                        capture: !0
                    })
                }, []);
                let t = function() {
                    let [e, t] = u(e => {
                        let {
                            flashQueue: t
                        } = e, s = (function(e) {
                            let t, s, i;
                            for (let n of e.titles) {
                                if (null != t && null != s) break;
                                t = null != t ? t : n.base, s = null != s ? s : n.location, i = null != i ? i : n.subsection
                            }
                            return [t, i, s]
                        })(e).filter(e => null != e).join(" | "), i = function(e) {
                            let {
                                notificationCount: t
                            } = e;
                            return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
                        }(e);
                        return ["".concat(i).concat(s), t[0]]
                    }), [s, n] = i.useState(!1), a = i.useRef(0), r = null == t ? void 0 : t.messages[a.current % t.messages.length];
                    return i.useEffect(() => {
                        if (null == t) {
                            a.current = 0, n(!1);
                            return
                        }
                        if (document.hasFocus() && t.onlyWhenBlurred) {
                            h(t.id), n(!1);
                            return
                        }
                        let e = setInterval(() => {
                            if (a.current >= t.count) {
                                h(t.id), n(!1);
                                return
                            }
                            n(e => !e || (a.current += 1, !1))
                        }, t.interval);
                        return () => clearInterval(e)
                    }, [t]), s ? r : e
                }();
                i.useEffect(() => {
                    let s = t === r.base;
                    (!e || !s) && (document.title = t)
                }, [e, t])
            }
        },
        872825: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                filterScopes: function() {
                    return d
                },
                parseOAuth2AuthorizeProps: function() {
                    return c
                }
            });
            var i = s("730290"),
                n = s("316693"),
                a = s("42203"),
                r = s("162771"),
                l = s("991170"),
                o = s("29479"),
                u = s("843455");

            function d(e) {
                let t = e.filter(e => !o.RemovedScopes.includes(e));
                return t.includes(u.OAuth2Scopes.BOT) && !t.includes(u.OAuth2Scopes.APPLICATIONS_COMMANDS) && t.push(u.OAuth2Scopes.APPLICATIONS_COMMANDS), t
            }

            function c(e) {
                var t, s, o, u, d, c;
                let h = (0, i.parse)(e, {
                        arrayFormat: "bracket"
                    }),
                    E = l.default.NONE;
                try {
                    E = n.default.deserialize(null != h.permissions && "" !== h.permissions ? h.permissions : "0")
                } catch (e) {}
                let S = h.channel_id,
                    A = null !== (u = null !== (o = null !== (s = h.guild_id) && void 0 !== s ? s : null === (t = a.default.getChannel(S)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== o ? o : r.default.getGuildId()) && void 0 !== u ? u : void 0;
                return {
                    clientId: null !== (d = h.client_id) && void 0 !== d ? d : "",
                    scopes: (null !== (c = h.scope) && void 0 !== c ? c : "").split(" ").filter(e => e.length > 0),
                    responseType: h.response_type,
                    redirectUri: h.redirect_uri,
                    codeChallenge: h.code_challenge,
                    codeChallengeMethod: h.code_challenge_method,
                    state: h.state,
                    permissions: E,
                    channelId: S,
                    guildId: A,
                    prompt: h.prompt,
                    disableGuildSelect: "true" === h.disable_guild_select,
                    userInstall: "true" === h.user_install
                }
            }
        },
        955145: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getApplicationDetailsText: function() {
                    return n
                }
            });
            var i = s("782340");

            function n(e) {
                if (null != e.privacy_policy_url && null != e.terms_of_service_url) return i.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_LINKS.format({
                    application: e.name,
                    privacyPolicyURL: e.privacy_policy_url,
                    termsOfServiceURL: e.terms_of_service_url
                });
                if (null != e.privacy_policy_url) return i.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_PRIVACY_POLICY_LINK.format({
                    application: e.name,
                    privacyPolicyURL: e.privacy_policy_url
                });
                if (null != e.terms_of_service_url) return i.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_TERMS_OF_SERVICE_LINK.format({
                    application: e.name,
                    termsOfServiceURL: e.terms_of_service_url
                });
                return i.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY.format({
                    application: e.name
                })
            }
        },
        8222: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                acceptWhitelist: function() {
                    return l
                },
                authorize: function() {
                    return o
                },
                fetchAuthorization: function() {
                    return u
                },
                fetchChannels: function() {
                    return d
                },
                logoutWithRedirect: function() {
                    return c
                },
                verifyUserCode: function() {
                    return h
                },
                finishUserCode: function() {
                    return E
                },
                finishUserCodeTwoWayLinkError: function() {
                    return S
                }
            });
            var i = s("447669"),
                n = s("872717"),
                a = s("437822"),
                r = s("49111");

            function l(e) {
                return n.default.post({
                    url: r.Endpoints.OAUTH2_WHITELIST_ACCEPT,
                    query: {
                        token: e
                    },
                    oldFormErrors: !0
                })
            }
            async function o(e) {
                let {
                    authorize: t,
                    clientId: s,
                    scopes: i,
                    responseType: a,
                    redirectUri: l,
                    codeChallenge: o,
                    codeChallengeMethod: u,
                    state: d,
                    permissions: c,
                    guildId: h,
                    channelId: E,
                    userInstall: S
                } = e, A = await n.default.post({
                    url: r.Endpoints.OAUTH2_AUTHORIZE,
                    query: {
                        client_id: s,
                        response_type: a,
                        redirect_uri: l,
                        code_challenge: o,
                        code_challenge_method: u,
                        scope: i.join(" "),
                        state: d
                    },
                    body: {
                        guild_id: h,
                        webhook_channel_id: null != h && null != E ? E : void 0,
                        channel_id: null == h && null != E ? E : void 0,
                        permissions: c,
                        authorize: t,
                        user_install: S
                    },
                    oldFormErrors: !0
                });
                return A.body
            }
            async function u(e) {
                let {
                    clientId: t,
                    scopes: s,
                    responseType: i,
                    redirectUri: a,
                    codeChallenge: l,
                    codeChallengeMethod: o,
                    state: u,
                    userInstall: d
                } = e, c = await n.default.get({
                    url: r.Endpoints.OAUTH2_AUTHORIZE,
                    query: {
                        client_id: t,
                        response_type: i,
                        redirect_uri: a,
                        code_challenge: l,
                        code_challenge_method: o,
                        scope: s.join(" "),
                        state: u,
                        user_install: d
                    },
                    retries: 3,
                    oldFormErrors: !0
                });
                return c.body
            }
            async function d(e) {
                let {
                    body: t
                } = await n.default.get({
                    url: r.Endpoints.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
                    query: {
                        guild_id: e
                    },
                    oldFormErrors: !0
                });
                return t
            }

            function c(e) {
                a.default.logout((0, i.getLoginPath)(e.pathname + e.search, !1))
            }
            async function h(e) {
                return await n.default.post({
                    url: r.Endpoints.OAUTH2_DEVICE_VERIFY,
                    body: {
                        user_code: e
                    }
                })
            }
            async function E(e, t) {
                return await n.default.post({
                    url: r.Endpoints.OAUTH2_DEVICE_FINISH,
                    body: {
                        user_code: e,
                        result: t
                    }
                })
            }
            async function S(e, t, s) {
                return await n.default.post({
                    url: r.Endpoints.OAUTH2_DEVICE_FINISH,
                    body: {
                        user_code: e,
                        result: "two_way_link_error",
                        error_code: t,
                        error_source: s
                    }
                })
            }
        },
        164386: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                convertOAuth2Authorization: function() {
                    return n
                }
            });
            var i = s("316693");

            function n(e) {
                if (null == e.guilds) return e;
                return {
                    ...e,
                    guilds: e.guilds.map(e => ({
                        ...e,
                        permissions: i.default.deserialize(e.permissions)
                    }))
                }
            }
        },
        978970: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                OrderedPermissions: function() {
                    return r
                },
                containsDisallowedPermission: function() {
                    return l
                },
                getPermissionName: function() {
                    return u
                }
            });
            var i = s("316693"),
                n = s("49111"),
                a = s("782340");
            let r = [n.Permissions.ADMINISTRATOR, n.Permissions.MANAGE_GUILD, n.Permissions.MANAGE_ROLES, n.Permissions.MANAGE_CHANNELS, n.Permissions.KICK_MEMBERS, n.Permissions.BAN_MEMBERS, n.Permissions.CREATE_INSTANT_INVITE, n.Permissions.MANAGE_NICKNAMES, n.Permissions.CHANGE_NICKNAME, n.Permissions.MANAGE_GUILD_EXPRESSIONS, n.Permissions.CREATE_GUILD_EXPRESSIONS, n.Permissions.MANAGE_WEBHOOKS, n.Permissions.VIEW_AUDIT_LOG, n.Permissions.VIEW_CHANNEL, n.Permissions.MANAGE_EVENTS, n.Permissions.CREATE_EVENTS, n.Permissions.MODERATE_MEMBERS, n.Permissions.VIEW_GUILD_ANALYTICS, n.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS, n.Permissions.SEND_MESSAGES, n.Permissions.SEND_MESSAGES_IN_THREADS, n.Permissions.CREATE_PUBLIC_THREADS, n.Permissions.CREATE_PRIVATE_THREADS, n.Permissions.SEND_TTS_MESSAGES, n.Permissions.MANAGE_MESSAGES, n.Permissions.MANAGE_THREADS, n.Permissions.EMBED_LINKS, n.Permissions.ATTACH_FILES, n.Permissions.READ_MESSAGE_HISTORY, n.Permissions.MENTION_EVERYONE, n.Permissions.ADD_REACTIONS, n.Permissions.USE_EXTERNAL_EMOJIS, n.Permissions.USE_EXTERNAL_STICKERS, n.Permissions.USE_APPLICATION_COMMANDS, n.Permissions.SEND_VOICE_MESSAGES, n.Permissions.USE_CLYDE_AI, n.Permissions.CONNECT, n.Permissions.SPEAK, n.Permissions.MUTE_MEMBERS, n.Permissions.DEAFEN_MEMBERS, n.Permissions.MOVE_MEMBERS, n.Permissions.USE_VAD, n.Permissions.PRIORITY_SPEAKER, n.Permissions.REQUEST_TO_SPEAK, n.Permissions.STREAM, n.Permissions.USE_EMBEDDED_ACTIVITIES, n.Permissions.USE_SOUNDBOARD, n.Permissions.USE_EXTERNAL_SOUNDS, n.Permissions.SET_VOICE_CHANNEL_STATUS];

            function l(e) {
                return Object.values(n.Permissions).some(t => i.default.has(e, t) && !r.includes(t))
            }
            let o = {
                [n.Permissions.ADMINISTRATOR.toString()]: () => a.default.Messages.ADMINISTRATOR,
                [n.Permissions.MANAGE_GUILD.toString()]: () => a.default.Messages.MANAGE_SERVER,
                [n.Permissions.MANAGE_ROLES.toString()]: () => a.default.Messages.MANAGE_ROLES,
                [n.Permissions.MANAGE_CHANNELS.toString()]: () => a.default.Messages.MANAGE_CHANNELS,
                [n.Permissions.KICK_MEMBERS.toString()]: () => a.default.Messages.KICK_MEMBERS,
                [n.Permissions.BAN_MEMBERS.toString()]: () => a.default.Messages.BAN_MEMBERS,
                [n.Permissions.CREATE_INSTANT_INVITE.toString()]: () => a.default.Messages.CREATE_INSTANT_INVITE,
                [n.Permissions.MANAGE_NICKNAMES.toString()]: () => a.default.Messages.MANAGE_NICKNAMES,
                [n.Permissions.CHANGE_NICKNAME.toString()]: () => a.default.Messages.CHANGE_NICKNAME,
                [n.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: () => a.default.Messages.MANAGE_EXPRESSIONS,
                [n.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: () => a.default.Messages.CREATE_EXPRESSIONS,
                [n.Permissions.MANAGE_WEBHOOKS.toString()]: () => a.default.Messages.MANAGE_WEBHOOKS,
                [n.Permissions.VIEW_AUDIT_LOG.toString()]: () => a.default.Messages.VIEW_AUDIT_LOG,
                [n.Permissions.VIEW_CHANNEL.toString()]: () => a.default.Messages.READ_MESSAGES,
                [n.Permissions.SEND_MESSAGES.toString()]: () => a.default.Messages.SEND_MESSAGES,
                [n.Permissions.SEND_TTS_MESSAGES.toString()]: () => a.default.Messages.SEND_TTS_MESSAGES,
                [n.Permissions.MANAGE_MESSAGES.toString()]: () => a.default.Messages.MANAGE_MESSAGES,
                [n.Permissions.EMBED_LINKS.toString()]: () => a.default.Messages.EMBED_LINKS,
                [n.Permissions.ATTACH_FILES.toString()]: () => a.default.Messages.ATTACH_FILES,
                [n.Permissions.READ_MESSAGE_HISTORY.toString()]: () => a.default.Messages.READ_MESSAGE_HISTORY,
                [n.Permissions.MENTION_EVERYONE.toString()]: () => a.default.Messages.MENTION_EVERYONE,
                [n.Permissions.ADD_REACTIONS.toString()]: () => a.default.Messages.ADD_REACTIONS,
                [n.Permissions.USE_EXTERNAL_EMOJIS.toString()]: () => a.default.Messages.USE_EXTERNAL_EMOJIS,
                [n.Permissions.USE_EXTERNAL_STICKERS.toString()]: () => a.default.Messages.USE_EXTERNAL_STICKERS,
                [n.Permissions.USE_APPLICATION_COMMANDS.toString()]: () => a.default.Messages.USE_APPLICATION_COMMANDS,
                [n.Permissions.SEND_VOICE_MESSAGES.toString()]: () => a.default.Messages.SEND_VOICE_MESSAGE,
                [n.Permissions.CONNECT.toString()]: () => a.default.Messages.CONNECT,
                [n.Permissions.SPEAK.toString()]: () => a.default.Messages.SPEAK,
                [n.Permissions.MUTE_MEMBERS.toString()]: () => a.default.Messages.MUTE_MEMBERS,
                [n.Permissions.DEAFEN_MEMBERS.toString()]: () => a.default.Messages.DEAFEN_MEMBERS,
                [n.Permissions.MOVE_MEMBERS.toString()]: () => a.default.Messages.MOVE_MEMBERS,
                [n.Permissions.USE_VAD.toString()]: () => a.default.Messages.USE_VAD,
                [n.Permissions.PRIORITY_SPEAKER.toString()]: () => a.default.Messages.PRIORITY_SPEAKER,
                [n.Permissions.CREATE_PUBLIC_THREADS.toString()]: () => a.default.Messages.CREATE_PUBLIC_THREADS,
                [n.Permissions.CREATE_PRIVATE_THREADS.toString()]: () => a.default.Messages.CREATE_PRIVATE_THREADS,
                [n.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: () => a.default.Messages.SEND_MESSAGES_IN_THREADS,
                [n.Permissions.MANAGE_THREADS.toString()]: () => a.default.Messages.MANAGE_THREADS,
                [n.Permissions.MANAGE_EVENTS.toString()]: () => a.default.Messages.MANAGE_EVENTS,
                [n.Permissions.CREATE_EVENTS.toString()]: () => a.default.Messages.CREATE_EVENTS,
                [n.Permissions.MODERATE_MEMBERS.toString()]: () => a.default.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL,
                [n.Permissions.REQUEST_TO_SPEAK.toString()]: () => a.default.Messages.REQUEST_TO_SPEAK,
                [n.Permissions.VIEW_GUILD_ANALYTICS.toString()]: () => a.default.Messages.VIEW_GUILD_ANALYTICS,
                [n.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => a.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
                [n.Permissions.STREAM.toString()]: () => a.default.Messages.VIDEO,
                [n.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: () => a.default.Messages.USE_EMBEDDED_ACTIVITIES,
                [n.Permissions.USE_SOUNDBOARD.toString()]: () => a.default.Messages.USE_SOUNDBOARD,
                [n.Permissions.USE_EXTERNAL_SOUNDS.toString()]: () => a.default.Messages.USE_EXTERNAL_SOUNDS,
                [n.Permissions.USE_CLYDE_AI.toString()]: () => a.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                [n.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: () => a.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
            };

            function u(e) {
                let t = e.toString(),
                    s = o[t];
                if (null == s) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
                return s()
            }
        },
        29479: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                FAKE_SCOPES: function() {
                    return a
                },
                OrderedAccountScopes: function() {
                    return r
                },
                ValidScopes: function() {
                    return l
                },
                RemovedScopes: function() {
                    return o
                },
                getScopeName: function() {
                    return u
                },
                getSecurityMessage: function() {
                    return d
                }
            });
            var i = s("49111"),
                n = s("782340");
            let a = [() => n.default.Messages.OAUTH2_FAKE_SCOPE_1, () => n.default.Messages.OAUTH2_FAKE_SCOPE_2, () => n.default.Messages.OAUTH2_FAKE_SCOPE_3, () => n.default.Messages.OAUTH2_FAKE_SCOPE_4, () => n.default.Messages.OAUTH2_FAKE_SCOPE_5, () => n.default.Messages.OAUTH2_FAKE_SCOPE_6, () => n.default.Messages.OAUTH2_FAKE_SCOPE_7, () => n.default.Messages.OAUTH2_FAKE_SCOPE_8],
                r = [i.OAuth2Scopes.BOT, i.OAuth2Scopes.IDENTIFY, i.OAuth2Scopes.EMAIL, i.OAuth2Scopes.CONNECTIONS, i.OAuth2Scopes.MESSAGES_READ, i.OAuth2Scopes.GUILDS, i.OAuth2Scopes.GUILDS_JOIN, i.OAuth2Scopes.GUILDS_MEMBERS_READ, i.OAuth2Scopes.GDM_JOIN, i.OAuth2Scopes.RPC, i.OAuth2Scopes.RPC_NOTIFICATIONS_READ, i.OAuth2Scopes.RPC_VOICE_READ, i.OAuth2Scopes.RPC_VOICE_WRITE, i.OAuth2Scopes.RPC_VIDEO_READ, i.OAuth2Scopes.RPC_VIDEO_WRITE, i.OAuth2Scopes.RPC_SCREENSHARE_READ, i.OAuth2Scopes.RPC_SCREENSHARE_WRITE, i.OAuth2Scopes.RPC_ACTIVITIES_WRITE, i.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD, i.OAuth2Scopes.APPLICATIONS_BUILDS_READ, i.OAuth2Scopes.APPLICATIONS_COMMANDS, i.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE, i.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, i.OAuth2Scopes.APPLICATIONS_STORE_UPDATE, i.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS, i.OAuth2Scopes.ACTIVITIES_READ, i.OAuth2Scopes.ACTIVITIES_WRITE, i.OAuth2Scopes.RELATIONSHIPS_READ, i.OAuth2Scopes.VOICE, i.OAuth2Scopes.DM_CHANNELS_READ, i.OAuth2Scopes.ROLE_CONNECTIONS_WRITE],
                l = r.concat([i.OAuth2Scopes.WEBHOOK_INCOMING, i.OAuth2Scopes.BOT]),
                o = ["rpc.api"];

            function u(e, t) {
                switch (e) {
                    case i.OAuth2Scopes.IDENTIFY:
                        return n.default.Messages.SCOPE_IDENTIFY;
                    case i.OAuth2Scopes.EMAIL:
                        return n.default.Messages.SCOPE_EMAIL;
                    case i.OAuth2Scopes.BOT:
                        return n.default.Messages.SCOPE_BOT;
                    case i.OAuth2Scopes.CONNECTIONS:
                        return n.default.Messages.SCOPE_CONNECTIONS;
                    case i.OAuth2Scopes.MESSAGES_READ:
                        return n.default.Messages.SCOPE_MESSAGES_READ;
                    case i.OAuth2Scopes.GUILDS:
                        return n.default.Messages.SCOPE_GUILDS;
                    case i.OAuth2Scopes.GUILDS_JOIN:
                        return n.default.Messages.SCOPE_GUILDS_JOIN;
                    case i.OAuth2Scopes.GUILDS_MEMBERS_READ:
                        if (t.includes(i.OAuth2Scopes.VOICE)) return n.default.Messages.SCOPE_GUILDS_MEMBERS_READ_VOICE;
                        return n.default.Messages.SCOPE_GUILDS_MEMBERS_READ;
                    case i.OAuth2Scopes.GDM_JOIN:
                        return n.default.Messages.SCOPE_GDM_JOIN;
                    case i.OAuth2Scopes.RPC:
                        return n.default.Messages.SCOPE_RPC;
                    case i.OAuth2Scopes.RPC_NOTIFICATIONS_READ:
                        return n.default.Messages.SCOPE_RPC_NOTIFICATIONS_READ;
                    case i.OAuth2Scopes.RPC_VOICE_WRITE:
                        return n.default.Messages.SCOPE_RPC_VOICE_WRITE;
                    case i.OAuth2Scopes.RPC_VIDEO_READ:
                        return n.default.Messages.SCOPE_RPC_VIDEO_READ;
                    case i.OAuth2Scopes.RPC_VIDEO_WRITE:
                        return n.default.Messages.SCOPE_RPC_VIDEO_WRITE;
                    case i.OAuth2Scopes.RPC_SCREENSHARE_READ:
                        return n.default.Messages.SCOPE_RPC_SCREENSHARE_READ;
                    case i.OAuth2Scopes.RPC_SCREENSHARE_WRITE:
                        return n.default.Messages.SCOPE_RPC_SCREENSHARE_WRITE;
                    case i.OAuth2Scopes.RPC_VOICE_READ:
                        return n.default.Messages.SCOPE_RPC_VOICE_READ;
                    case i.OAuth2Scopes.RPC_ACTIVITIES_WRITE:
                        return n.default.Messages.SCOPE_RPC_ACTIVITIES_WRITE;
                    case i.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD:
                        return n.default.Messages.SCOPE_APPLICATIONS_BUILDS_UPLOAD;
                    case i.OAuth2Scopes.APPLICATIONS_BUILDS_READ:
                        return n.default.Messages.SCOPE_APPLICATIONS_BUILDS_READ;
                    case i.OAuth2Scopes.APPLICATIONS_COMMANDS:
                        return n.default.Messages.SCOPE_APPLICATIONS_COMMANDS;
                    case i.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE:
                        return n.default.Messages.SCOPE_APPLICATIONS_COMMANDS_UPDATE;
                    case i.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE:
                        return n.default.Messages.SCOPE_APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE;
                    case i.OAuth2Scopes.APPLICATIONS_STORE_UPDATE:
                        return n.default.Messages.SCOPE_APPLICATIONS_STORE_UPDATE;
                    case i.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS:
                        return n.default.Messages.SCOPE_APPLICATIONS_ENTITLEMENTS;
                    case i.OAuth2Scopes.ACTIVITIES_READ:
                        return n.default.Messages.SCOPE_ACTIVITIES_READ;
                    case i.OAuth2Scopes.ACTIVITIES_WRITE:
                        return n.default.Messages.SCOPE_ACTIVITIES_WRITE;
                    case i.OAuth2Scopes.RELATIONSHIPS_READ:
                        return n.default.Messages.SCOPE_RELATIONSHIPS_READ;
                    case i.OAuth2Scopes.VOICE:
                        return n.default.Messages.SCOPE_VOICE;
                    case i.OAuth2Scopes.DM_CHANNELS_READ:
                        return n.default.Messages.SCOPE_DM_CHANNELS_READ;
                    case i.OAuth2Scopes.ROLE_CONNECTIONS_WRITE:
                        return n.default.Messages.SCOPE_ROLE_CONNECTIONS_WRITE;
                    default:
                        return e
                }
            }

            function d(e) {
                return e.includes(i.OAuth2Scopes.MESSAGES_READ) ? n.default.Messages.OAUTH2_CAN_READ_NOTICE.format() : n.default.Messages.OAUTH2_CANNOT_READ_SEND_NOTICE.format()
            }
        },
        357974: function(e, t, s) {
            "use strict";
            var i, n;
            s.r(t), s.d(t, {
                OAuth2Prompts: function() {
                    return i
                }
            }), (n = i || (i = {})).NONE = "none", n.CONSENT = "consent"
        },
        580363: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("414456"),
                a = s.n(n),
                r = s("577776"),
                l = s("841811"),
                o = s("338835"),
                u = s("83900"),
                d = s("45029"),
                c = s("71216"),
                h = s("148337"),
                E = s("568734"),
                S = s("299039"),
                A = s("955145"),
                _ = s("29479"),
                f = s("49111"),
                p = s("843455"),
                m = s("782340"),
                O = s("413973");

            function I(e) {
                var t;
                let s, {
                        application: n,
                        scopes: a,
                        redirectUri: r,
                        approximateGuildCount: I,
                        isEmbeddedFlow: N,
                        embeddedActivityConfig: g
                    } = e,
                    C = new Date(S.default.extractTimestamp(n.id)),
                    M = (0, _.getSecurityMessage)(a),
                    P = (0, E.hasFlag)(null !== (t = n.flags) && void 0 !== t ? t : 0, f.ApplicationFlags.EMBEDDED);
                if (null != r && !P && !N) {
                    let e = new URL(r);
                    s = null != e.host && e.host.length > 0 ? e.origin : e.href
                }
                return (0, i.jsxs)("div", {
                    className: O.applicationDetails,
                    children: [null != s ? (0, i.jsx)(T, {
                        className: O.redirectWarning,
                        icon: u.default,
                        text: m.default.Messages.OAUTH2_DETAILS_REDIRECT.format({
                            origin: s
                        })
                    }) : null, (0, i.jsx)(T, {
                        icon: d.default,
                        text: (0, A.getApplicationDetailsText)(n)
                    }), (0, i.jsx)(T, {
                        icon: l.default,
                        text: m.default.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
                            date: C
                        })
                    }), a.includes(p.OAuth2Scopes.BOT) && null != I ? (0, i.jsx)(T, {
                        icon: c.default,
                        text: m.default.Messages.OAUTH2_DETAILS_GUILDS.format({
                            guildCount: I
                        })
                    }) : null, (0, i.jsx)(T, {
                        icon: h.default,
                        text: M
                    }), (null == g ? void 0 : g.has_csp_exception) ? (0, i.jsx)(T, {
                        icon: o.default,
                        text: m.default.Messages.OAUTH2_SCOPES_IP_LOCATION_SCOPE
                    }) : null]
                })
            }

            function T(e) {
                let {
                    icon: t,
                    text: s,
                    className: n
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(O.entry, n),
                    children: [(0, i.jsx)(t, {
                        className: O.entryIcon
                    }), (0, i.jsx)(r.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: O.entryInner,
                        children: s
                    })]
                })
            }
        },
        33942: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                OAuth2AuthorizePage: function() {
                    return k
                },
                OAuth2AuthorizeModal: function() {
                    return K
                },
                OAuth2Authorize: function() {
                    return X
                },
                useOAuth2AuthorizeForm: function() {
                    return Z
                },
                openOAuth2Modal: function() {
                    return Q
                },
                getOAuth2AuthorizeProps: function() {
                    return J
                }
            });
            var i, n, a, r, l = s("37983"),
                o = s("884691"),
                u = s("90915"),
                d = s("746379"),
                c = s("316693"),
                h = s("446674"),
                E = s("271841"),
                S = s("551042"),
                A = s("670914"),
                _ = s("242670"),
                f = s("84460"),
                p = s("191225"),
                m = s("716241"),
                O = s("148217"),
                I = s("970254"),
                T = s("393414"),
                N = s("766274"),
                g = s("271938"),
                C = s("449008"),
                M = s("991170"),
                P = s("253981"),
                v = s("872825"),
                R = s("8222"),
                D = s("164386"),
                x = s("978970"),
                L = s("29479"),
                U = s("357974"),
                w = s("580363"),
                H = s("613070"),
                b = s("530487"),
                y = s("638992"),
                j = s("223934"),
                W = s("267570"),
                G = s("941281"),
                V = s("49111"),
                B = s("954016"),
                F = s("782340"),
                z = s("392507");
            let Y = "oauth2-authorize-header-id";

            function k() {
                let e = (0, u.useLocation)(),
                    t = o.useMemo(() => (0, v.parseOAuth2AuthorizeProps)(e.search), [e.search]);
                return (0, O.default)(), (0, l.jsx)(W.OAuth2Page, {
                    children: (0, l.jsx)(X, {
                        ...t,
                        showLogout: !0
                    })
                })
            }

            function K(e) {
                let {
                    transitionState: t,
                    ...s
                } = e;
                return (0, l.jsx)(W.OAuth2Modal, {
                    transitionState: t,
                    "aria-labelledby": Y,
                    children: (0, l.jsx)(X, {
                        ...s,
                        scrollable: !0
                    })
                })
            }

            function X(e) {
                let {
                    scrollable: t,
                    ...s
                } = e, {
                    header: i,
                    body: n,
                    footer: a,
                    nextStep: r,
                    appDetails: o
                } = Z(s), u = (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: z.content,
                        children: [i, n, null == r ? o : null]
                    }), a]
                });
                return t ? (0, l.jsx)("div", {
                    className: z.authorize,
                    children: (0, l.jsx)(A.ScrollerThin, {
                        orientation: "auto",
                        children: u
                    })
                }) : (0, l.jsx)("div", {
                    className: z.authorize,
                    children: (0, l.jsx)("div", {
                        children: u
                    })
                })
            }

            function Z(e) {
                var t, s, i, n, S, A, O, W;
                let k, K, X, {
                        clientId: Z,
                        scopes: q,
                        responseType: Q,
                        redirectUri: J,
                        codeChallenge: $,
                        codeChallengeMethod: ee,
                        state: et,
                        guildId: es,
                        channelId: ei,
                        permissions: en,
                        prompt: ea,
                        disableGuildSelect: er,
                        showLogout: el = !1,
                        authorization: eo,
                        callback: eu,
                        callbackWithoutPost: ed,
                        onClose: ec,
                        cancelCompletesFlow: eh = !0,
                        isTrustedName: eE = !1,
                        isEmbeddedFlow: eS = !1,
                        userInstall: eA = !1
                    } = e,
                    e_ = o.useMemo(() => (0, v.filterScopes)(q), [q]),
                    ef = (0, u.useLocation)(),
                    ep = I.default.useExperiment({
                        location: "auth web"
                    }),
                    em = ep.userAppsTreatment === I.UserAppsTreatment.ALLOWED;
                !em && (eA = !1);
                let [eO, eI] = o.useState(a.NOT_LOADED), [eT, eN] = o.useState(null), [eg, eC] = o.useState(M.default.NONE), [eM, eP] = o.useState(r.AUTHORIZE_SCOPES), [ev, eR] = o.useState(null), [eD] = o.useState(L.OrderedAccountScopes.filter(e => e_.includes(e))), [ex, eL] = o.useState(null != es ? es : null), [eU, ew] = o.useState(null != ei ? ei : null), [eH, eb] = o.useState(!1), ey = o.useMemo(() => {
                    var e;
                    return null == eT ? void 0 : null === (e = eT.guilds) || void 0 === e ? void 0 : e.find(e => e.id === ex)
                }, [null == eT ? void 0 : eT.guilds, ex]), ej = (0, h.useStateFromStoresObject)([f.default, p.default], () => {
                    var e, t;
                    let s;
                    let i = null === (e = p.default.getSelfEmbeddedActivities().values().next()) || void 0 === e ? void 0 : e.value,
                        n = f.default.getIsEnabled();
                    return (0, C.isNotNullish)(i) && (s = p.default.getShelfActivities(i.guildId).find(e => e.application_id === i.application_id), n && void 0 === s && (s = null === (t = f.default.getDeveloperShelfItems().find(e => e.id === i.application_id)) || void 0 === t ? void 0 : t.embeddedActivityConfig), (0, C.isNotNullish)(s)) ? {
                        ...B.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                        ...s
                    } : {}
                }), eW = Object.keys(ej).length > 0 ? ej : null, eG = o.useCallback(async e => {
                    if (null != ed) {
                        ed(e);
                        return
                    }
                    if (!e && !eh) {
                        null != eu && (eu({
                            application: null == eT ? void 0 : eT.application,
                            guild: ey
                        }), null == ec || ec());
                        return
                    }
                    try {
                        eb(!0);
                        let t = await (0, R.authorize)({
                            authorize: e,
                            clientId: Z,
                            scopes: e_,
                            responseType: Q,
                            redirectUri: J,
                            codeChallenge: $,
                            codeChallengeMethod: ee,
                            state: et,
                            permissions: c.default.remove(null != en ? en : M.default.NONE, eg),
                            guildId: null == ex || eA ? void 0 : ex,
                            channelId: null != eU ? eU : void 0,
                            userInstall: eA
                        });
                        if (null != eu) eu({
                            application: null == eT ? void 0 : eT.application,
                            location: t.location,
                            guild: ey
                        }), null == ec || ec();
                        else if (null != t.location) {
                            let {
                                host: e,
                                path: s
                            } = d.parse(t.location);
                            P.default.isDiscordHostname(e) && s === V.Routes.OAUTH2_AUTHORIZED ? (0, T.transitionTo)(V.Routes.OAUTH2_AUTHORIZED, {
                                state: {
                                    application: null == eT ? void 0 : eT.application,
                                    guild: ey
                                }
                            }) : window.location = t.location
                        } else eb(!1)
                    } catch (t) {
                        let e = t.body;
                        (null == e ? void 0 : e.message) != null && "" !== e.message ? eR(Error(e.message)) : eR(e), eP(r.AUTHORIZE_SCOPES), eI(a.LOADED), eb(!1)
                    }
                }, [eu, ed, Z, $, ee, eg, ec, en, J, Q, e_, ex, eU, et, eh, null == eT ? void 0 : eT.application, ey, eA]), eV = o.useRef(!1), eB = o.useCallback(async () => {
                    if (eO === a.NOT_LOADED) {
                        if (eI(a.LOADING), !g.default.isAuthenticated()) {
                            (0, R.logoutWithRedirect)(ef);
                            return
                        }
                        if (!eV.current) {
                            eV.current = !0;
                            try {
                                let e = null != eo ? eo : await (0, R.fetchAuthorization)({
                                    clientId: Z,
                                    scopes: e_,
                                    responseType: Q,
                                    redirectUri: J,
                                    codeChallenge: $,
                                    codeChallengeMethod: ee,
                                    state: et,
                                    userInstall: em && eA
                                });
                                eN((0, D.convertOAuth2Authorization)(e)), ea === U.OAuth2Prompts.NONE && e.authorized ? eG(!0) : eI(a.LOADED), (0, m.trackWithMetadata)(V.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                                    application_id: e.application.id
                                })
                            } catch (s) {
                                let {
                                    status: e,
                                    body: t
                                } = s;
                                if (401 === e) {
                                    (0, R.logoutWithRedirect)(ef);
                                    return
                                }
                                eR(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0]))), eI(a.LOADED)
                            } finally {
                                eV.current = !1
                            }
                        }
                    }
                }, [eo, Z, $, ee, eO, ef, ea, J, Q, e_, eG, et, eA, em]), eF = o.useCallback((e, t) => {
                    eC(s => e ? c.default.remove(s, t) : c.default.add(s, t))
                }, []);
                o.useEffect(() => {
                    let e = e_.filter(e => !L.ValidScopes.includes(e));
                    0 === e_.length ? (eR(Error("No scopes were provided.")), eI(a.LOADED)) : e.length > 0 ? (eR(Error("Invalid scope: ".concat(e[0]))), eI(a.LOADED)) : (0, x.containsDisallowedPermission)(null != en ? en : M.default.NONE) ? (eR(Error("Invalid permission(s) provided.")), eI(a.LOADED)) : eB()
                }, [eB, e_, en]);
                let ez = null != eU ? null == eT ? void 0 : null === (t = eT.channels) || void 0 === t ? void 0 : t.find(e => e.id === eU) : null,
                    eY = null != ex ? null == eT ? void 0 : null === (s = eT.guilds) || void 0 === s ? void 0 : s.find(e => e.id === ex) : null;
                if (o.useEffect(() => {
                        null != eT && (null != ez ? eL(null) : null == eY && (eL(null), ew(null)))
                    }, [eT, eY, ez]), ev instanceof Error) return {
                    body: (0, l.jsx)(G.OAuth2Error, {
                        message: ev.message
                    })
                };
                if (eO !== a.LOADED || null == eT) return {
                    body: (0, l.jsx)(_.Spinner, {})
                };
                let ek = new N.default(eT.user),
                    eK = null === (i = eT.bot) || void 0 === i ? void 0 : i.approximate_guild_count,
                    eX = !1;
                switch (eM) {
                    case r.AUTHORIZE_SCOPES:
                        let eZ = null == ev || ev instanceof Error ? {} : ev,
                            eq = null === (n = eT.guilds) || void 0 === n ? void 0 : n.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                            eQ = e_.includes(V.OAuth2Scopes.BOT) || e_.includes(V.OAuth2Scopes.WEBHOOK_INCOMING) || e_.includes(V.OAuth2Scopes.APPLICATIONS_COMMANDS);
                        k = (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(H.default, {
                                application: eT.application,
                                accountScopes: eD,
                                errors: eZ,
                                isTrustedName: eE
                            }), null == ez && eQ && !eA ? (0, l.jsx)(y.GuildSelector, {
                                error: (null !== (A = null !== (S = eZ[V.OAuth2Scopes.BOT]) && void 0 !== S ? S : eZ[V.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== A ? A : [])[0],
                                selectedGuildId: ex,
                                onGuildChange: e => {
                                    eL(e)
                                },
                                guilds: null != eq ? eq : [],
                                disabled: "" !== ex && !0 === er
                            }) : null, e_.includes(V.OAuth2Scopes.WEBHOOK_INCOMING) ? (0, l.jsx)(y.WebhookGuildChannelSelector, {
                                error: (null !== (O = eZ[V.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== O ? O : [])[0],
                                selectedChannelId: eU,
                                selectedGuildId: ex,
                                onChannelChange: e => ew(e)
                            }) : null]
                        }), e_.includes(V.OAuth2Scopes.BOT) && !c.default.equals(en, M.default.NONE) && (X = r.AUTHORIZE_BOT_PERMISSIONS);
                        let eJ = eQ && null == eY && null == ez,
                            e$ = null != eY && e_.includes(V.OAuth2Scopes.WEBHOOK_INCOMING) && null == eU;
                        eX = !eA && (eJ || e$);
                        break;
                    case r.AUTHORIZE_BOT_PERMISSIONS:
                        k = (0, l.jsx)(b.default, {
                            application: eT.application,
                            permissions: null != en ? en : M.default.NONE,
                            deniedPermissions: eg,
                            onPermissionsChange: eF,
                            guild: eY
                        }), K = r.AUTHORIZE_SCOPES
                }
                let e0 = (0, l.jsx)(w.default, {
                        embeddedActivityConfig: eW,
                        application: eT.application,
                        scopes: e_,
                        redirectUri: null !== (W = eT.redirect_uri) && void 0 !== W ? W : null,
                        approximateGuildCount: void 0 !== eK ? eK : null,
                        isEmbeddedFlow: eS
                    }),
                    e1 = (0, l.jsxs)("div", {
                        className: z.footer,
                        children: [null != K ? (0, l.jsx)(E.Button, {
                            look: E.Button.Looks.LINK,
                            color: E.Button.Colors.PRIMARY,
                            onClick: () => eP(K),
                            children: F.default.Messages.BACK
                        }) : (0, l.jsx)(E.Button, {
                            look: E.Button.Looks.LINK,
                            color: E.Button.Colors.PRIMARY,
                            onClick: () => eG(!1),
                            children: F.default.Messages.CANCEL
                        }), null != X ? (0, l.jsx)(E.Button, {
                            onClick: () => eP(X),
                            disabled: eX,
                            children: F.default.Messages.CONTINUE
                        }) : (0, l.jsx)(E.Button, {
                            onClick: () => eG(!0),
                            disabled: eX,
                            submitting: eH,
                            children: F.default.Messages.AUTHORIZE
                        })]
                    }),
                    e2 = (0, l.jsx)(j.default, {
                        id: Y,
                        user: ek,
                        application: eT.application,
                        bot: eT.bot,
                        accountScopes: eD,
                        showLogout: el || !1,
                        location: ef,
                        isTrustedName: eE
                    });
                return {
                    header: e2,
                    body: k,
                    footer: e1,
                    nextStep: X,
                    appDetails: e0,
                    sendAuthorize: eG
                }
            }

            function q(e, t) {
                var s;
                if (null == t.location || null != e && e(t)) return;
                let {
                    host: i,
                    path: n,
                    query: a
                } = d.parse(t.location, !0), r = P.default.isDiscordHostname(i) || window.location.host === i;
                r && n === V.Routes.OAUTH2_AUTHORIZED ? (0, S.openModal)(e => (0, l.jsx)(W.OAuth2Modal, {
                    ...e,
                    "aria-labelledby": Y,
                    children: (0, l.jsx)(G.OAuth2AuthorizedSuccess, {
                        guild: t.guild,
                        application: t.application,
                        onClose: e.onClose
                    })
                })) : r && (null == n ? void 0 : n.startsWith(V.Routes.OAUTH2_ERROR)) ? (0, S.openModal)(e => {
                    let t = a.error_description || a.error || F.default.Messages.OAUTH2_UNKNOWN_ERROR;
                    return Array.isArray(t) && (t = t[0]), (0, l.jsxs)(W.OAuth2Modal, {
                        ...e,
                        "aria-labelledby": Y,
                        children: [(0, l.jsx)(G.OAuth2Error, {
                            message: t,
                            onClose: e.onClose
                        }), ";"]
                    })
                }) : null === (s = window.open(t.location, "_blank")) || void 0 === s || s.focus()
            }

            function Q(e, t) {
                (0, S.openModal)(t => (0, l.jsx)(K, {
                    ...t,
                    ...e,
                    cancelCompletesFlow: !1,
                    callback: q.bind(null, e.callback)
                }), {
                    onCloseCallback: t
                })
            }

            function J(e) {
                let {
                    hostname: t = "",
                    host: s,
                    path: i,
                    query: n
                } = d.parse(e);
                return null != i && null != n && (P.default.isDiscordHostname(t) || s === window.location.host) && (i.startsWith("/api".concat(V.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(V.Routes.OAUTH2_AUTHORIZE)) ? (0, v.parseOAuth2AuthorizeProps)(n) : null
            }(i = a || (a = {}))[i.NOT_LOADED = 0] = "NOT_LOADED", i[i.LOADING = 1] = "LOADING", i[i.LOADED = 2] = "LOADED", (n = r || (r = {}))[n.INSTALL_TYPE = 0] = "INSTALL_TYPE", n[n.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", n[n.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
        },
        613070: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("775560"),
                a = s("605451"),
                r = s("577776"),
                l = s("36694"),
                o = s("945330"),
                u = s("29479"),
                d = s("782340"),
                c = s("814288");

            function h(e) {
                var t;
                let {
                    application: s,
                    accountScopes: h,
                    errors: E,
                    isTrustedName: S = !1
                } = e, A = (0, n.useLazyValue)(() => u.FAKE_SCOPES[Math.floor(Math.random() * u.FAKE_SCOPES.length)]);
                if (0 === h.length) return null;
                let _ = h.map(e => {
                        var t;
                        let s = (0, u.getScopeName)(e, h),
                            [n] = null !== (t = null == E ? void 0 : E[e]) && void 0 !== t ? t : [];
                        return (0, i.jsxs)("div", {
                            className: c.scope,
                            children: [(0, i.jsx)("div", {
                                className: c.scopeCheck,
                                children: (0, i.jsx)(l.default, {
                                    className: c.icon
                                })
                            }), (0, i.jsxs)("div", {
                                className: c.scopeInner,
                                children: [(0, i.jsx)(r.Text, {
                                    variant: "text-md/medium",
                                    children: s
                                }), null != n ? (0, i.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: n
                                }) : null]
                            })]
                        }, e)
                    }),
                    f = (0, i.jsxs)("div", {
                        className: c.scope,
                        children: [(0, i.jsx)("div", {
                            className: c.scopeTimes,
                            children: (0, i.jsx)(o.default, {
                                className: c.icon
                            })
                        }), (0, i.jsx)("div", {
                            className: c.scopeInner,
                            children: (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: c.scopeName,
                                children: A()
                            })
                        })]
                    }),
                    p = S ? d.default.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : d.default.Messages.OAUTH2_SCOPES_LABEL;
                return (0, i.jsxs)("div", {
                    className: c.scopes,
                    children: [(0, i.jsx)(a.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: c.sectionLabel,
                        children: p.format({
                            application: null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : ""
                        })
                    }), _, f]
                })
            }
        },
        530487: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var i = s("37983"),
                n = s("884691"),
                a = s("316693"),
                r = s("685698"),
                l = s("577776"),
                o = s("945330"),
                u = s("991170"),
                d = s("978970"),
                c = s("782340"),
                h = s("190148");

            function E(e) {
                let {
                    application: t,
                    permissions: s,
                    deniedPermissions: E,
                    onPermissionsChange: S,
                    guild: A
                } = e, [_, f] = n.useState(u.default.NONE);
                n.useEffect(() => {
                    S(!0, s), f(a.default.invert(A.permissions)), S(!1, a.default.invert(A.permissions))
                }, [A, S, s]);
                let p = d.OrderedPermissions.filter(e => a.default.has(s, e)),
                    m = p.filter(e => !a.default.has(_, e)).map(e => {
                        let t = (0, d.getPermissionName)(e),
                            s = !a.default.has(E, e);
                        return (0, i.jsx)("li", {
                            className: h.permission,
                            children: (0, i.jsx)(r.Checkbox, {
                                value: s,
                                onChange: (t, s) => S(s, e),
                                type: r.Checkbox.Types.INVERTED,
                                children: (0, i.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    children: t
                                })
                            })
                        }, String(e))
                    }),
                    O = p.filter(e => a.default.has(_, e)).map(e => {
                        let t = (0, d.getPermissionName)(e);
                        return (0, i.jsxs)("li", {
                            className: h.permission,
                            children: [(0, i.jsx)("div", {
                                className: h.disabledPermissionIcon,
                                children: (0, i.jsx)(o.default, {
                                    className: h.icon
                                })
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: t
                            })]
                        }, String(e))
                    });
                return (0, i.jsxs)("div", {
                    className: h.botPermissions,
                    children: [(0, i.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        className: h.permissionsLabel,
                        children: c.default.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
                            applicationName: t.name,
                            guildName: A.name
                        })
                    }), (0, i.jsx)("ul", {
                        className: h.permissionsList,
                        children: m
                    }), O.length > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            className: h.disabledPermissionsLabel,
                            children: c.default.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
                                applicationName: t.name
                            })
                        }), (0, i.jsx)("ul", {
                            className: h.permissionsList,
                            children: O
                        })]
                    }) : null]
                })
            }
        },
        638992: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                GuildSelector: function() {
                    return E
                },
                WebhookGuildChannelSelector: function() {
                    return S
                }
            });
            var i = s("37983"),
                n = s("884691"),
                a = s("316693"),
                r = s("605451"),
                l = s("774811"),
                o = s("577776"),
                u = s("8222"),
                d = s("49111"),
                c = s("782340"),
                h = s("246097");

            function E(e) {
                let {
                    error: t,
                    selectedGuildId: s,
                    onGuildChange: n,
                    guilds: u,
                    disabled: E = !1
                } = e, S = u.filter(e => a.default.has(e.permissions, d.Permissions.MANAGE_GUILD)).map(e => ({
                    value: e.id,
                    label: e.name
                }));
                return (0, i.jsxs)("div", {
                    className: h.selectorGroup,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: h.sectionLabel,
                        children: c.default.Messages.OAUTH2_ADD_TO_GUILD
                    }), null != t && "" !== t ? (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        children: t
                    }) : null, (0, i.jsx)(l.SearchableSelect, {
                        wrapperClassName: h.wrapper,
                        className: h.select,
                        maxVisibleItems: 5,
                        value: s,
                        placeholder: c.default.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
                        options: S,
                        onChange: e => {
                            n(e)
                        },
                        isDisabled: E
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        className: h.label,
                        children: c.default.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
                    })]
                })
            }

            function S(e) {
                let {
                    selectedGuildId: t,
                    selectedChannelId: s,
                    onChannelChange: a,
                    error: d
                } = e, [E, S] = n.useState(null);
                n.useEffect(() => {
                    (async function e() {
                        if (null != t) {
                            let e = await (0, u.fetchChannels)(t);
                            S(e)
                        }
                    })()
                }, [t]), n.useEffect(() => {
                    null != E && null != s && null == E.find(e => e.id === s) && a(null)
                }, [E, a, s]);
                let A = (null != E ? E : []).map(e => ({
                    value: e.id,
                    label: e.name
                }));
                return null == t ? null : (0, i.jsxs)("div", {
                    className: h.selectorGroup,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: h.sectionLabel,
                        children: c.default.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
                    }), null != d && "" !== d ? (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        children: d
                    }) : null, (0, i.jsx)(l.SearchableSelect, {
                        wrapperClassName: h.wrapper,
                        className: h.select,
                        maxVisibleItems: 5,
                        onChange: e => {
                            a(e)
                        },
                        placeholder: c.default.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
                        value: s,
                        options: A
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        className: h.label,
                        children: c.default.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
                    })]
                })
            }
        },
        223934: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("913365"),
                a = s("227645"),
                r = s("577776"),
                l = s("79798"),
                o = s("315102"),
                u = s("568734"),
                d = s("8222"),
                c = s("49111"),
                h = s("52904"),
                E = s("782340"),
                S = s("347819");

            function A(e) {
                let {
                    id: t,
                    user: s,
                    application: A,
                    bot: _,
                    accountScopes: f,
                    showLogout: p,
                    location: m,
                    isTrustedName: O
                } = e, I = o.default.getApplicationIconURL({
                    id: A.id,
                    icon: A.icon
                }), T = o.default.getUserAvatarURL(s);
                return (0, i.jsxs)("header", {
                    id: t,
                    className: S.header,
                    children: [(0, i.jsxs)("div", {
                        className: S.headerIcons,
                        children: [(0, i.jsx)(n.Avatar, {
                            src: I,
                            size: h.AvatarSizes.SIZE_80,
                            "aria-label": A.name
                        }), (0, i.jsxs)("div", {
                            className: S.ellipseGroup,
                            children: [(0, i.jsx)("div", {
                                className: S.ellipse
                            }), (0, i.jsx)("div", {
                                className: S.ellipse
                            }), (0, i.jsx)("div", {
                                className: S.ellipse
                            })]
                        }), (0, i.jsx)(n.Avatar, {
                            src: T,
                            size: h.AvatarSizes.SIZE_80,
                            "aria-label": s.username
                        })]
                    }), !O && (0, i.jsx)(r.Text, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        className: S.label,
                        children: E.default.Messages.OAUTH2_THIRD_PARTY_APPLICATION
                    }), (0, i.jsxs)(r.Text, {
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: [A.name, null != _ ? (0, i.jsx)(l.default, {
                            className: S.botTag,
                            verified: null != _.public_flags && (0, u.hasFlag)(_.public_flags, c.UserFlags.VERIFIED_BOT)
                        }) : null]
                    }), f.length > 0 ? (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: S.label,
                        children: E.default.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS
                    }) : (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: S.label,
                        children: E.default.Messages.OAUTH2_CONNECT_TO_DISCORD
                    }), p ? (0, i.jsx)("div", {
                        className: S.currentUser,
                        children: (0, i.jsxs)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [E.default.Messages.OAUTH2_SIGNED_IN_AS.format({
                                userHook: () => (0, i.jsxs)(r.Text, {
                                    className: S.currentUserTag,
                                    variant: "text-sm/normal",
                                    children: [s.username, !s.isPomelo() && (0, i.jsx)(r.Text, {
                                        className: S.currentUserDiscriminator,
                                        variant: "text-sm/normal",
                                        children: "#".concat(s.discriminator)
                                    })]
                                }, s.id)
                            }), (0, i.jsx)(a.Clickable, {
                                tag: "a",
                                className: S.logoutLink,
                                onClick: () => (0, d.logoutWithRedirect)(m),
                                children: E.default.Messages.OAUTH2_LOGOUT
                            })]
                        })
                    }) : null]
                })
            }
        },
        267570: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                OAuth2Page: function() {
                    return f
                },
                OAuth2Modal: function() {
                    return p
                }
            });
            var i = s("37983"),
                n = s("884691"),
                a = s("414456"),
                r = s.n(a),
                l = s("516256"),
                o = s("77078"),
                u = s("69927"),
                d = s("554054"),
                c = s("831588"),
                h = s("439932"),
                E = s("49111"),
                S = s("289382"),
                A = s("782340"),
                _ = s("316618");

            function f(e) {
                let {
                    children: t,
                    wrapperClassName: s,
                    embedded: a
                } = e, [l, f] = n.useState(S.WaveStates.INITIAL), p = n.useCallback(e => {
                    f(t => Math.max(t, e))
                }, []);
                return (0, u.usePageTitle)({
                    location: A.default.Messages.OAUTH2_TITLE
                }), (0, i.jsx)(o.ThemeContextProvider, {
                    theme: E.ThemeTypes.DARK,
                    children: (0, i.jsx)(d.default, {
                        embedded: a,
                        className: r((0, h.getThemeClass)(E.ThemeTypes.DARK), _.wave),
                        splash: (0, c.getArtForPath)(),
                        waveState: l,
                        showLogo: !0,
                        updateWaveState: p,
                        children: (0, i.jsx)("div", {
                            className: r(_.oauth2Wrapper, s),
                            children: t
                        })
                    })
                })
            }

            function p(e) {
                let {
                    children: t,
                    transitionState: s,
                    ...n
                } = e;
                return (0, i.jsx)(l.ModalRoot, {
                    size: l.ModalSize.DYNAMIC,
                    transitionState: s,
                    className: _.oauth2Wrapper,
                    ...n,
                    children: t
                })
            }
        },
        941281: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                },
                OAuth2Success: function() {
                    return N
                },
                OAuth2AuthorizedSuccess: function() {
                    return g
                },
                OAuth2Error: function() {
                    return C
                },
                OAuth2AuthorizedPage: function() {
                    return M
                },
                OAuth2ErrorPage: function() {
                    return P
                }
            });
            var i = s("37983"),
                n = s("884691"),
                a = s("414456"),
                r = s.n(a),
                l = s("730290"),
                o = s("90915"),
                u = s("746379"),
                d = s("516256"),
                c = s("242670"),
                h = s("577776"),
                E = s("77078"),
                S = s("69927"),
                A = s("393414"),
                _ = s("239380"),
                f = s("599110"),
                p = s("267570"),
                m = s("49111"),
                O = s("782340"),
                I = s("223003");

            function T(e) {
                let {
                    message: t,
                    footer: s,
                    headerClassName: n,
                    showsCloseWindowText: a,
                    spinner: l,
                    onClose: o
                } = e;
                return (0, S.usePageTitle)({
                    location: O.default.Messages.OAUTH2_TITLE
                }), (0, i.jsxs)(i.Fragment, {
                    children: [null != o ? (0, i.jsx)(d.ModalCloseButton, {
                        onClick: o,
                        className: I.closeButton
                    }) : null, (0, i.jsxs)("div", {
                        className: I.wrapper,
                        children: [l ? (0, i.jsx)(c.Spinner, {}) : null, (0, i.jsx)("div", {
                            className: r(I.header, n)
                        }), (0, i.jsx)(h.Text, {
                            variant: "text-md/normal",
                            className: I.text,
                            children: t
                        }), null != s ? s : null, a ? (0, i.jsx)(h.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: I.cta,
                            children: O.default.Messages.OAUTH2_MESSAGE_CTA
                        }) : null]
                    })]
                })
            }

            function N(e) {
                return (0, i.jsx)(T, {
                    ...e,
                    headerClassName: I.headerSuccess
                })
            }

            function g(e) {
                let {
                    guild: t,
                    application: s,
                    ...a
                } = e, {
                    onClose: r
                } = a, l = O.default.Messages.AUTHORIZED_SUCCESS, o = n.useCallback(() => {
                    (null == t ? void 0 : t.id) != null && ((0, _.transitionToGuild)(null == t ? void 0 : t.id), null == r || r(), f.default.track(m.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == s ? void 0 : s.id,
                        guild_id: null == t ? void 0 : t.id
                    }))
                }, [r, null == s ? void 0 : s.id, null == t ? void 0 : t.id]), u = n.useCallback(() => {
                    null == r || r(), f.default.track(m.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                        application_id: null == s ? void 0 : s.id
                    })
                }, [r, null == s ? void 0 : s.id]), d = n.useMemo(() => {
                    if (null != s) return null != t ? O.default.Messages.AUTHORIZED_APP_TO_SERVER.format({
                        installedApplicationName: null == s ? void 0 : s.name,
                        guildName: null == t ? void 0 : t.name
                    }) : O.default.Messages.AUTHORIZED_APP.format({
                        installedApplicationName: null == s ? void 0 : s.name
                    });
                    return O.default.Messages.AUTHORIZED_GENERIC
                }, [s, t]), c = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        className: I.authorizedSuccessSubtext,
                        children: d
                    }), (null != t || null != r) && (0, i.jsxs)("div", {
                        className: I.buttonsContainer,
                        children: [null != t && (0, i.jsx)(E.Button, {
                            fullWidth: !0,
                            color: E.Button.Colors.BRAND,
                            onClick: o,
                            className: I.button,
                            children: O.default.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({
                                guildName: null == t ? void 0 : t.name
                            })
                        }), null != r && (0, i.jsx)(E.Button, {
                            fullWidth: !0,
                            color: E.Button.Colors.PRIMARY,
                            onClick: u,
                            className: I.button,
                            children: O.default.Messages.CLOSE
                        })]
                    })]
                });
                return n.useEffect(() => {
                    f.default.track(m.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
                        application_id: null == s ? void 0 : s.id
                    })
                }, [null == s ? void 0 : s.id]), (0, i.jsx)("div", {
                    className: I.authorizedSuccessWrapper,
                    children: (0, i.jsx)(N, {
                        message: l,
                        footer: c,
                        ...a
                    })
                })
            }

            function C(e) {
                return (0, i.jsx)(T, {
                    ...e,
                    headerClassName: I.headerFailure
                })
            }

            function M() {
                var e, t;
                let s = (0, o.useLocation)();
                return (0, i.jsx)(p.OAuth2Page, {
                    children: (0, i.jsx)(g, {
                        guild: null === (e = s.state) || void 0 === e ? void 0 : e.guild,
                        application: null === (t = s.state) || void 0 === t ? void 0 : t.application,
                        showsCloseWindowText: !0
                    })
                })
            }

            function P(e) {
                var t, s;
                let {
                    location: a
                } = e;
                n.useEffect(() => {
                    if (null == a) return;
                    let e = null != document.referrer && "" !== document.referrer ? u.parse(document.referrer) : null;
                    (null == e || e.host !== window.location.host || e.pathname !== m.Routes.OAUTH2_AUTHORIZE) && (0, A.transitionTo)(m.Routes.INDEX)
                }, [a]);
                let r = null != a ? (0, l.parse)(a.search) : {},
                    o = null !== (s = null !== (t = r.error_description) && void 0 !== t ? t : r.error) && void 0 !== s ? s : O.default.Messages.OAUTH2_UNKNOWN_ERROR;
                return (0, i.jsx)(p.OAuth2Page, {
                    children: (0, i.jsx)(C, {
                        message: o,
                        showsCloseWindowText: !0
                    })
                })
            }
        },
        313609: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var i = s("37983"),
                n = s("884691"),
                a = s("414456"),
                r = s.n(a),
                l = s("508330");
            let o = e => new Promise((t, s) => {
                null == e && s(Error("No image src passed"));
                let i = new Image;
                i.src = e, i.onload = () => t(i), i.onerror = e => s(e)
            });
            class u extends n.PureComponent {
                componentDidUpdate(e) {
                    e.src !== this.props.src && this.setState({
                        loaded: !1
                    }, () => this.initialize())
                }
                initialize() {
                    o(this.props.src).then(() => {
                        !this.unmounting && this.setState({
                            loaded: !0
                        })
                    })
                }
                componentWillUnmount() {
                    this.unmounting = !0
                }
                render() {
                    let {
                        className: e,
                        src: t,
                        alt: s,
                        width: n,
                        height: a,
                        onLoad: o,
                        style: u,
                        imageClassName: d
                    } = this.props, {
                        loaded: c
                    } = this.state;
                    return (0, i.jsx)("div", {
                        className: e,
                        style: {
                            ...u,
                            width: n,
                            height: a
                        },
                        children: (0, i.jsx)("img", {
                            className: r(l.image, d, {
                                [l.loaded]: c
                            }),
                            width: n,
                            height: a,
                            src: t,
                            alt: s,
                            onLoad: o
                        })
                    })
                }
                constructor(e) {
                    super(e), this.unmounting = !1, this.state = {
                        loaded: !1
                    }, this.initialize()
                }
            }
            u.defaultProps = {
                width: 0,
                height: 0,
                alt: ""
            };
            var d = u
        },
        725484: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var i = s("37983"),
                n = s("884691"),
                a = s("414456"),
                r = s.n(a),
                l = s("458960"),
                o = s("77078"),
                u = s("49111"),
                d = s("603127");
            class c extends n.Component {
                componentDidMount() {
                    this.props.show && this.animate(1)
                }
                componentDidUpdate(e) {
                    e.show !== this.props.show && this.animate(this.props.show ? 1 : 0)
                }
                getAnimatedStyle() {
                    let {
                        anim: e
                    } = this, {
                        reducedMotion: t
                    } = this.context;
                    return {
                        opacity: e,
                        transform: t.enabled ? void 0 : [{
                            translateY: e.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["-100px", "0px"]
                            })
                        }, {
                            translateZ: 0
                        }]
                    }
                }
                render() {
                    return (0, i.jsx)(l.default.a, {
                        href: u.Routes.INDEX,
                        target: "_blank",
                        rel: "noopener",
                        className: r(d.logo, this.props.className),
                        style: this.getAnimatedStyle()
                    })
                }
                constructor(...e) {
                    super(...e), this.anim = new l.default.Value(0), this.animate = e => {
                        l.default.spring(this.anim, {
                            toValue: e,
                            friction: 10,
                            tension: 100
                        }).start()
                    }
                }
            }
            c.contextType = o.AccessibilityPreferencesContext
        },
        331756: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var i = s("37983"),
                n = s("884691"),
                a = s("414456"),
                r = s.n(a),
                l = s("669491"),
                o = s("769846"),
                u = s("77078"),
                d = s("659500"),
                c = s("159885"),
                h = s("470074"),
                E = s("261147"),
                S = s("401059"),
                A = s("289382"),
                _ = s("49111"),
                f = s("606474");
            let p = (0, c.cssValueToNumber)(o.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
                m = 1 / 120;
            class O extends n.Component {
                componentDidMount() {
                    this.initialize()
                }
                componentDidUpdate(e) {
                    let {
                        waveState: t
                    } = this.props;
                    t === A.WaveStates.FILLING && t !== e.waveState && this.waveFill()
                }
                componentWillUnmount() {
                    this.terminate()
                }
                initialize() {
                    this.children.forEach(e => e.initialize()), this.bindEvents(), this.resizeCanvas(), document.hidden && this.delayedPause()
                }
                terminate() {
                    this.pause(), this.unbindEvents(), this.children.forEach(e => e.terminate())
                }
                bindEvents() {
                    window.addEventListener("resize", this.resizeCanvas, !1), window.addEventListener("blur", this.delayedPause, !1), window.addEventListener("focus", this.play, !1), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1), d.ComponentDispatch.subscribe(_.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
                }
                unbindEvents() {
                    window.removeEventListener("resize", this.resizeCanvas, !1), window.removeEventListener("blur", this.delayedPause, !1), window.removeEventListener("focus", this.play, !1), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1), d.ComponentDispatch.unsubscribe(_.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
                }
                advanceTransitionalState() {
                    let {
                        waveState: e
                    } = this.props;
                    (e === A.WaveStates.INITIAL || e === A.WaveStates.FILLING) && this.updateWaveState(e + 1)
                }
                waveFill() {
                    this._isPlaying ? this.children.forEach(e => e.fill()) : this.updateWaveState(A.WaveStates.FILLED)
                }
                updateAnimation(e) {
                    this.children.forEach(t => t.update(e))
                }
                renderAnimation() {
                    let {
                        canvasFillStyle: e
                    } = this.props, {
                        canvasContext: t
                    } = this;
                    null != t && (t.fillStyle = e, t.fillRect(0, 0, this.width, this.height), this.children.forEach(e => e.render(t)))
                }
                render() {
                    let {
                        waveState: e,
                        hideFallback: t,
                        embedded: s
                    } = this.props;
                    return (0, i.jsx)(u.AccessibilityPreferencesContext.Consumer, {
                        children: n => {
                            let {
                                reducedMotion: a
                            } = n;
                            return a.enabled ? (0, i.jsx)("div", {
                                className: r(f.fallbackImage, {
                                    [f.embedded]: s,
                                    [f.visible]: !t && e >= A.WaveStates.ENTERED
                                })
                            }) : (0, i.jsx)("canvas", {
                                className: r(f.canvas, {
                                    [f.embedded]: s
                                }),
                                ref: this.setCanvas
                            })
                        }
                    })
                }
                constructor(e) {
                    super(e), this.width = 0, this.height = 0, this.children = [], this.ratio = 0, this._lastTick = 0, this._isPlaying = !1, this._reqAnimId = null, this.setCanvas = e => {
                        var t;
                        if (null == e) return;
                        this.canvas = e, this.canvasContext = this.canvas.getContext("2d");
                        let s = null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1,
                            i = this.canvasContext.webkitBackingStorePixelRatio || this.canvasContext.mozBackingStorePixelRatio || this.canvasContext.msBackingStorePixelRatio || this.canvasContext.oBackingStorePixelRatio || this.canvasContext.backingStorePixelRatio || 1;
                        this.ratio = s / i, this.resizeCanvas()
                    }, this.resizeCanvas = () => {
                        this.width = window.innerWidth, this.height = window.innerHeight;
                        let {
                            canvas: e,
                            canvasContext: t,
                            width: s,
                            height: i,
                            ratio: n
                        } = this;
                        null != e && null != t && (e.width = s * n, e.height = i * n, e.style.width = s + "px", e.style.height = i + "px", t.scale(n, n)), s <= p ? this.pause() : this.play(), this.wave.resizeWave(), this.renderAnimation()
                    }, this.handleVisibilityChange = () => {
                        document.hidden ? this.delayedPause() : this.play()
                    }, this.play = () => {
                        clearTimeout(this._pauseTimeout), !this._isPlaying && (this._isPlaying = !0, this.run())
                    }, this.pause = () => {
                        clearTimeout(this._pauseTimeout), this._isPlaying = !1, null != this._reqAnimId && window.cancelAnimationFrame(this._reqAnimId), this._reqAnimId = null, this.advanceTransitionalState()
                    }, this.delayedPause = () => {
                        clearTimeout(this._pauseTimeout), this._pauseTimeout = setTimeout(this.pause, 4e3)
                    }, this.updateWaveState = e => {
                        let {
                            updateWaveState: t
                        } = this.props;
                        t(e)
                    }, this.handleWaveEmphasize = () => {
                        this.wave.emphasize()
                    }, this.run = () => {
                        if (!this._isPlaying) return;
                        if (0 === this._lastTick) {
                            this._lastTick = Date.now(), this._reqAnimId = requestAnimationFrame(this.run);
                            return
                        }
                        let e = Date.now(),
                            t = Math.min((e - this._lastTick) / 1e3, 8 * m);
                        for (; t > 0;) {
                            let e = t < m ? t : m;
                            this.updateAnimation(e), t -= e
                        }
                        this.renderAnimation(), this._lastTick = e, this._reqAnimId = requestAnimationFrame(this.run)
                    }, this.wave = new S.default(this.updateWaveState), this.children = [new h.default, new E.default, this.wave]
                }
            }
            O.defaultProps = {
                embedded: !1
            };
            var I = e => {
                let t = (0, u.useToken)(l.default.unsafe_rawColors.PRIMARY_630).hex();
                return (0, i.jsx)(O, {
                    canvasFillStyle: t,
                    ...e
                })
            }
        },
        554054: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Splash: function() {
                    return _
                },
                default: function() {
                    return p
                }
            });
            var i = s("37983"),
                n = s("884691"),
                a = s("414456"),
                r = s.n(a),
                l = s("769846"),
                o = s("313609"),
                u = s("159885"),
                d = s("725484"),
                c = s("331756"),
                h = s("289382"),
                E = s("634984");
            let S = (0, u.cssValueToNumber)(l.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);

            function A(e, t) {
                let {
                    innerWidth: s,
                    innerHeight: i
                } = window;
                if (0 === e || 0 === t) return null;
                let n = t / e,
                    a = s,
                    r = Math.round(s * n);
                return r < i && (r = i, a = Math.round(i * (n = e / t))), {
                    naturalWidth: e,
                    naturalHeight: t,
                    width: a,
                    height: r
                }
            }

            function _(e) {
                let {
                    splash: t,
                    children: s
                } = e, [{
                    width: a,
                    height: l
                }, u] = n.useState({
                    width: 0,
                    height: 0,
                    naturalHeight: 0,
                    naturalWidth: 0
                });
                return n.useEffect(() => {
                    function e() {
                        u(e => {
                            let {
                                naturalWidth: t,
                                naturalHeight: s
                            } = e, i = A(t, s);
                            return null != i ? i : e
                        })
                    }
                    return window.addEventListener("resize", e), () => window.removeEventListener("reslize", e)
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o.default, {
                        className: r(E.rightSplit),
                        onLoad: function(e) {
                            let {
                                currentTarget: t
                            } = e, {
                                naturalWidth: s,
                                naturalHeight: i
                            } = t, n = A(s, i);
                            null != n && u(n)
                        },
                        src: t,
                        width: a,
                        height: l
                    }), (0, i.jsx)("div", {
                        className: r(E.leftSplit, {
                            [E.nonEmbeddedLeftSplit]: !0
                        }),
                        children: s
                    })]
                })
            }
            class f extends n.PureComponent {
                componentWillUnmount() {
                    window.removeEventListener("resize", this.handleResize)
                }
                calculateShowWaveAnimation() {
                    return window.innerWidth > S
                }
                renderSplashArt() {
                    let {
                        splash: e,
                        embedded: t
                    } = this.props, {
                        width: s,
                        height: n
                    } = this.state;
                    return null != e ? (0, i.jsx)(o.default, {
                        className: r(E.rightSplit, {
                            [E.embedded]: t
                        }),
                        src: e,
                        width: s,
                        height: n,
                        onLoad: this.handleLoad
                    }) : null
                }
                renderWave() {
                    let {
                        waveState: e,
                        updateWaveState: t,
                        embedded: s
                    } = this.props, {
                        showWaveAnimation: n,
                        splashLoaded: a
                    } = this.state;
                    return n ? (0, i.jsx)(c.default, {
                        embedded: s,
                        waveState: e,
                        updateWaveState: t,
                        hideFallback: !a
                    }) : (0, i.jsx)("div", {
                        className: E.mobileWave
                    })
                }
                renderContent() {
                    let {
                        children: e,
                        waveState: t,
                        showLogo: s,
                        logoClassName: a,
                        embedded: l
                    } = this.props, {
                        showWaveAnimation: o
                    } = this.state;
                    return (0, i.jsxs)(n.Fragment, {
                        children: [this.renderWave(), (0, i.jsxs)("div", {
                            className: r(E.leftSplit, {
                                [E.nonEmbeddedLeftSplit]: l
                            }),
                            children: [s ? (0, i.jsx)(d.default, {
                                show: !o || t === h.WaveStates.ENTERED && t !== h.WaveStates.FILLING,
                                className: r(E.logo, a)
                            }) : null, e]
                        })]
                    })
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: r(e, E.wrapper),
                        children: [this.renderSplashArt(), this.renderContent()]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        naturalWidth: 0,
                        naturalHeight: 0,
                        width: 0,
                        height: 0,
                        showWaveAnimation: this.calculateShowWaveAnimation(),
                        splashLoaded: !1
                    }, this.handleResize = () => {
                        let {
                            naturalWidth: e,
                            naturalHeight: t
                        } = this.state, s = A(e, t), i = this.calculateShowWaveAnimation();
                        null != s ? this.setState({
                            ...s,
                            showWaveAnimation: i
                        }) : this.setState({
                            showWaveAnimation: i
                        })
                    }, this.handleLoad = e => {
                        let {
                            currentTarget: t
                        } = e, {
                            naturalWidth: s,
                            naturalHeight: i
                        } = t, n = A(s, i);
                        null != n && this.setState(n), this.setState({
                            splashLoaded: !0
                        }), window.removeEventListener("resize", this.handleResize), window.addEventListener("resize", this.handleResize)
                    }
                }
            }
            f.defaultProps = {
                embedded: !1
            };
            var p = f
        },
        470074: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var i = s("347219"),
                n = s("273215"),
                a = class e {
                    initialize() {
                        this.img = new Image, this.img.onload = () => {
                            this.loaded = !0
                        }, this.img.src = n, this.bind()
                    }
                    bind() {
                        window.addEventListener("mousemove", this.handleMouseMove, !1)
                    }
                    unbind() {
                        window.removeEventListener("mousemove", this.handleMouseMove, !1)
                    }
                    terminate() {
                        this.img = null, this.loaded = !1, this.isFilled = !1, this.alpha = 0, this.unbind()
                    }
                    update(e) {
                        this.loaded && (!this.isFilled && this.alpha < 1 ? this.alpha = Math.min(1, this.alpha + e) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * e)), this.velX += (0, i.applySpringForce)(this.targetX, this.x, this.velX, this.spring) * e, this.velY += (0, i.applySpringForce)(this.targetY, this.y, this.velY, this.spring) * e, this.x += this.velX * e, this.y += this.velY * e)
                    }
                    render(e) {
                        let {
                            img: t
                        } = this;
                        this.loaded && null != t && (e.save(), e.globalCompositeOperation = "source-atop", e.globalAlpha = this.alpha, e.drawImage(t, this.x + 20, this.y + 20), e.restore())
                    }
                    fill() {
                        this.isFilled = !0
                    }
                    constructor() {
                        this.img = null, this.loaded = !1, this.isFilled = !1, this.alpha = 0, this.mx = 0, this.my = 0, this.x = 0, this.y = 0, this.velX = 0, this.velY = 0, this.targetX = 40, this.targetY = 40, this.spring = {
                            friction: 60,
                            tension: 100
                        }, this.handleMouseMove = e => {
                            let {
                                clientX: t,
                                clientY: s
                            } = e;
                            this.targetX = t / window.innerWidth * 20 + 20, this.targetY = s / window.innerWidth * 20 + 20
                        }
                    }
                }
        },
        126982: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("347219"),
                n = s("289382");
            let a = ["#7d8187", "#18191c", "#8fa2df", "#4f545c"];
            var r = class e {
                checkBounds() {
                    this.x > this.offscreenX ? this.x = -this.size : this.y > this.offscreenY ? this.y = -this.size : this.x < -this.size ? this.x = this.offscreenX : this.y < -this.size && (this.y = this.offscreenY)
                }
                update(e, t) {
                    this.checkBounds(), this.y += t * this.positionMultiplier, this.x += e * this.positionMultiplier
                }
                render(e, t) {
                    e.beginPath(), e.globalAlpha = t * this.depth / 4, e.arc(this.x, this.y, this.size, 0, n.TWO_PI, !0), e.fillStyle = this.color, e.fill(), e.globalAlpha = 1
                }
                constructor() {
                    this.size = (0, i.randomNumber)(2, 3), this.depth = (0, i.randomNumber)(1, 4), this.positionMultiplier = this.depth / 4, this.color = a[4 - this.depth], this.offscreenX = n.MAX_RADIUS + this.size, this.offscreenY = n.MAX_RADIUS + this.size, this.x = (0, i.randomNumber)(-this.size, this.offscreenX), this.y = (0, i.randomNumber)(-this.size, this.offscreenY)
                }
            }
        },
        261147: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var i = s("126982"),
                n = s("940322"),
                a = class e {
                    initialize() {
                        this.particles = [], this.wind.initialize(), this.loadInTimer = setTimeout(() => {
                            for (let e = 0; e < 75; e++) this.particles.push(new i.default)
                        }, 250)
                    }
                    terminate() {
                        this.particles = [], this.wind.terminate(), null != this.loadInTimer && clearTimeout(this.loadInTimer)
                    }
                    update(e) {
                        0 !== this.particles.length && (!this.isFilled && this.alpha < 1 ? this.alpha = Math.min(1, this.alpha + e) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * e)), this.wind.update(), this.particles.forEach(t => t.update(10 * this.wind.forceX * e, 10 * Math.min(this.wind.forceY, -.001) * e + -.1)))
                    }
                    render(e) {
                        0 !== this.particles.length && (e.save(), e.globalCompositeOperation = "source-atop", this.particles.forEach(t => t.render(e, this.alpha)), e.restore())
                    }
                    fill() {
                        this.isFilled = !0
                    }
                    constructor() {
                        this.particles = [], this.wind = new n.default, this.alpha = 0, this.isFilled = !1, this.loadInTimer = null
                    }
                }
        },
        502945: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("347219"),
                n = s("289382");
            let a = -2.15;
            var r = class e {
                updateStatic() {
                    this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count), this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count), this.x = this.targetX, this.y = this.targetY
                }
                update(e) {
                    let t, s;
                    if (this.speedUp > 0 ? (this.speedUp = Math.max(0, this.speedUp - e), this.count += e * (10 * Math.min(this.speedUp, 1) + .4)) : this.count += .4 * e, t = (0, i.applySpringForce)(this.targetX, this.x, this.velX, this.spring), s = (0, i.applySpringForce)(this.targetY, this.y, this.velY, this.spring), this.velX += t * e, this.velY += s * e, this.oscillate) {
                        let n = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
                            a = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
                        t = (0, i.applySpringForce)(n, this.x, this.velX, this.spring), s = (0, i.applySpringForce)(a, this.y, this.velY, this.spring), this.velX += t * e, this.velY += s * e
                    }
                    this.x += this.velX * e, this.y += this.velY * e
                }
                render(e) {
                    e.fillStyle = "#fff", e.fillRect(this.x, this.y, 4, 4)
                }
                constructor(e) {
                    this.x = -40, this.y = -40, this.targetX = 0, this.targetY = 0, this.oscillate = !0, this.velX = 0, this.velY = 0, this.angle = 0, this.speedUp = 1.5, this.waveRange = 60, this.spring = {
                        friction: 15,
                        tension: n.POINT_TENSION_DEFAULT
                    }, this.index = e, this.spring.tension = n.POINT_TENSION_DEFAULT * Math.max(.1, e / 7) + n.POINT_TENSION_DEFAULT, this.count = a * e
                }
            }
        },
        347219: function(e, t, s) {
            "use strict";

            function i(e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e)
            }

            function n(e, t, s, i) {
                return i.tension * (e - t) - i.friction * s
            }
            s.r(t), s.d(t, {
                randomNumber: function() {
                    return i
                },
                applySpringForce: function() {
                    return n
                }
            })
        },
        401059: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            });
            var i = s("483366"),
                n = s.n(i),
                a = s("769846"),
                r = s("159885"),
                l = s("502945"),
                o = s("347219"),
                u = s("289382");
            let d = 7.5,
                c = (0, r.cssValueToNumber)(a.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
                h = 1 / 60;

            function E(e, t, s, i) {
                return t * (s / i) + e
            }

            function S() {
                return Math.min(Math.max(Math.min(.8 * window.innerWidth, .8 * window.innerHeight), u.MIN_RADIUS), u.MAX_RADIUS)
            }
            var A = class e {
                initialize() {
                    this._resizeWave()
                }
                emphasize() {
                    this.points.forEach(e => e.speedUp = 1)
                }
                terminate() {
                    this.points = []
                }
                update(e) {
                    0 !== this.points.length && (this.points.forEach(t => t.update(Math.min(e, h))), !this.hasEntered && this.points[0].x > c && (this.hasEntered = !0, this.updateWaveState(u.WaveStates.ENTERED)), this.isFilling && this.points[0].x > this.points[0].targetX && (this.isFilling = !1, this.updateWaveState(u.WaveStates.FILLED)))
                }
                render(e) {
                    if (0 === this.points.length) return;
                    let [t, ...s] = this.points;
                    e.save(), e.beginPath(), e.moveTo(t.x, t.y), s.forEach((t, i) => {
                        if (null == s[i + 1]) e.quadraticCurveTo(t.x, t.y, t.x, t.y);
                        else {
                            let n = (t.x + s[i + 1].x) / 2,
                                a = (t.y + s[i + 1].y) / 2;
                            e.quadraticCurveTo(t.x, t.y, n, a)
                        }
                    }), e.lineTo(0, 0), e.closePath(), e.fillStyle = "#000", e.globalCompositeOperation = "destination-in", e.fill(), e.restore()
                }
                fill() {
                    let e = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
                        t = S() - 140,
                        s = (e, t, s, i) => {
                            e.targetX = -40 + t * Math.cos(u.TWO_PI * (.25 * (s / 15) + 0)), e.targetY = -40 + t * Math.sin(u.TWO_PI * (.25 * (s / 15) + 0)), i && (e.targetX += (0, o.randomNumber)(0, 30) - 15, e.targetY += (0, o.randomNumber)(0, 30) - 15, e.speedUp = 3, e.spring.tension = u.POINT_TENSION_DEFAULT * Math.random() * .5 + u.POINT_TENSION_DEFAULT)
                        };
                    this.points.forEach((e, i) => s(e, t, i, !0)), setTimeout(() => {
                        this.points.forEach((t, i) => {
                            s(t, e, i, !1);
                            let n = 1 - t.index / 7.5;
                            t.spring.friction += t.spring.friction + t.spring.friction * n, t.spring.tension = .7 * u.POINT_TENSION_DEFAULT + 80 * Math.random(), t.waveRange = 2 * t.waveRange
                        }), this.isFilling = !0, this.updateWaveState(u.WaveStates.FILLING)
                    }, 250)
                }
                constructor(e) {
                    this.points = [], this.hasEntered = !1, this.isFilling = !1, this._resizeWave = () => {
                        let e = S();
                        this.points.forEach((t, s) => {
                            let i = -40 + e * Math.cos(u.TWO_PI * (.25 * (s / 15) + 0)),
                                n = -40 + e * Math.sin(u.TWO_PI * (.25 * (s / 15) + 0));
                            0 !== s ? n += (0, o.randomNumber)(0, 30) - 15 : i += (0, o.randomNumber)(0, 30) - 15, t.targetX = i, t.targetY = n, t.angle = Math.atan2(n, i)
                        })
                    }, this.resizeWave = n(this._resizeWave, 200), this.updateWaveState = e, this.hasEntered = !1;
                    for (let e = 0; e <= 15; e++) this.points.push(new l.default(Math.floor(d - Math.floor(Math.abs(e - d)))))
                }
            }
        },
        289382: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MIN_RADIUS: function() {
                    return i
                },
                MAX_RADIUS: function() {
                    return n
                },
                TWO_PI: function() {
                    return a
                },
                POINT_TENSION_DEFAULT: function() {
                    return r
                },
                WaveStates: function() {
                    return l
                }
            });
            let i = 780,
                n = 1e3,
                a = 2 * Math.PI,
                r = 150,
                l = {
                    INITIAL: 0,
                    ENTERED: 1,
                    FILLING: 2,
                    FILLED: 3
                }
        },
        940322: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });

            function i(e, t) {
                return Math.max(Math.min((e - t) / 30, 1), -1)
            }
            var n = class e {
                initialize() {
                    window.addEventListener("mousemove", this.handleMouseMove)
                }
                terminate() {
                    window.removeEventListener("mousemove", this.handleMouseMove)
                }
                update() {
                    this.x !== this.px && this.y !== this.py && (this.forceX += i(this.x, this.px), this.forceY += i(this.y, this.py), this.px = this.x, this.py = this.y), 0 !== this.forceX && (this.forceX = this.forceX * this.resistance), 0 !== this.forceY && (this.forceY = this.forceY * this.resistance)
                }
                render() {}
                constructor() {
                    this.resistance = .98, this.px = 0, this.py = 0, this.x = 0, this.y = 0, this.forceX = 0, this.forceY = 0, this.handleMouseMove = e => {
                        let {
                            clientX: t,
                            clientY: s
                        } = e;
                        this.x = t, this.y = s
                    }
                }
            }
        },
        841811: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("469563"),
                a = s("503420"),
                r = s("75196"),
                l = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            d: "M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z",
                            fill: n,
                            className: a
                        })
                    })
                }, a.ClockIcon)
        },
        338835: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var i = s("37983");
            s("884691");
            var n = s("469563"),
                a = s("521590"),
                r = s("75196"),
                l = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: n = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: n,
                            className: a,
                            fillRule: "evenodd",
                            d: "M16.4770909,19 C18.0152727,16.936 18.9381818,14.531 19.1323636,12 L21.7527273,12 C21.3829091,15.056 19.3363636,17.65 16.4770909,19 Z M2.24618182,12 L4.86654545,12 C5.06072727,14.531 5.98363636,16.936 7.52181818,19 C4.66254545,17.65 2.616,15.056 2.24618182,12 Z M7.52181818,3 C5.98254545,5.064 5.06072727,7.469 4.86654545,10 L2.24618182,10 C2.616,6.944 4.66254545,4.35 7.52181818,3 Z M13.0909091,10 L13.0909091,2.369 C15.3294545,4.416 16.6930909,7.111 16.9505455,10 L13.0909091,10 Z M13.0909091,19.631 L13.0909091,12 L16.9505455,12 C16.6930909,14.889 15.3294545,17.584 13.0909091,19.631 Z M10.9090909,12 L10.9090909,19.631 C8.66945455,17.584 7.30581818,14.889 7.04836364,12 L10.9090909,12 Z M10.9090909,10 L7.04836364,10 C7.30581818,7.111 8.66945455,4.416 10.9090909,2.369 L10.9090909,10 Z M19.1323636,10 C18.9381818,7.469 18.0163636,5.064 16.4770909,3 C19.3363636,4.35 21.3829091,6.944 21.7527273,10 L19.1323636,10 Z M0,11 C0,17.075 5.37163636,22 12,22 C18.6272727,22 24,17.075 24,11 C24,4.925 18.6272727,0 12,0 C5.37163636,0 0,4.925 0,11 Z",
                            transform: "translate(0 1)"
                        })
                    })
                }, a.GlobeEarthIcon)
        }
    }
]);
//# sourceMappingURL=5f67777e6b2178bdeb4b.js.map