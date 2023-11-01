(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86960"], {
        273215: function(e, s, t) {
            "use strict";
            e.exports = t.p + "63900a1ba1f23d305c53.png"
        },
        719933: function(e, s, t) {
            "use strict";
            e.exports = t.p + "2d8d31d0ce7c0e673266.png"
        },
        90026: function(e, s, t) {
            "use strict";
            e.exports = t.p + "a5bb35518e19a27b57be.png"
        },
        824839: function(e, s, t) {
            "use strict";
            e.exports = t.p + "16b667dc5539a47aa346.svg"
        },
        935119: function(e, s, t) {
            "use strict";
            e.exports = t.p + "b0efcdc15f8bd689c89f.svg"
        },
        1890: function(e, s, t) {
            "use strict";
            e.exports = t.p + "6d387ec5eedee450a1c6.svg"
        },
        148217: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return o
                }
            });
            var n = t("884691"),
                l = t("446674"),
                a = t("327037"),
                i = t("84339"),
                r = t("271938");

            function o() {
                let [e, s] = (0, l.useStateFromStoresArray)([r.default], () => [r.default.isAuthenticated(), null != r.default.getAnalyticsToken()]), t = (0, i.default)(e);
                n.useEffect(() => {
                    !t && e && !s && a.fetchCurrentUser({
                        withAnalyticsToken: !0
                    })
                }, [t, e, s])
            }
        },
        970254: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                UserAppsTreatment: function() {
                    return l
                },
                default: function() {
                    return i
                }
            });
            var n, l, a = t("862205");
            (n = l || (l = {})).ALLOWED = "allowed", n.DEFAULT = "default";
            var i = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_user_apps",
                label: "Allow user app commands",
                defaultConfig: {
                    userAppsTreatment: l.DEFAULT
                },
                treatments: [{
                    id: 1,
                    label: "Allow user app commands",
                    config: {
                        userAppsTreatment: l.ALLOWED
                    }
                }]
            })
        },
        872825: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                filterScopes: function() {
                    return E
                },
                parseOAuth2AuthorizeProps: function() {
                    return c
                }
            });
            var n = t("730290"),
                l = t("316693"),
                a = t("42203"),
                i = t("162771"),
                r = t("991170"),
                o = t("29479"),
                u = t("843455");

            function E(e) {
                let s = e.filter(e => !o.RemovedScopes.includes(e));
                return s.includes(u.OAuth2Scopes.BOT) && !s.includes(u.OAuth2Scopes.APPLICATIONS_COMMANDS) && s.push(u.OAuth2Scopes.APPLICATIONS_COMMANDS), s
            }

            function c(e) {
                var s, t, o, u, E, c;
                let d = (0, n.parse)(e, {
                        arrayFormat: "bracket"
                    }),
                    A = r.default.NONE;
                try {
                    A = l.default.deserialize(null != d.permissions && "" !== d.permissions ? d.permissions : "0")
                } catch (e) {}
                let S = d.channel_id,
                    _ = null !== (u = null !== (o = null !== (t = d.guild_id) && void 0 !== t ? t : null === (s = a.default.getChannel(S)) || void 0 === s ? void 0 : s.guild_id) && void 0 !== o ? o : i.default.getGuildId()) && void 0 !== u ? u : void 0;
                return {
                    clientId: null !== (E = d.client_id) && void 0 !== E ? E : "",
                    scopes: (null !== (c = d.scope) && void 0 !== c ? c : "").split(" ").filter(e => e.length > 0),
                    responseType: d.response_type,
                    redirectUri: d.redirect_uri,
                    codeChallenge: d.code_challenge,
                    codeChallengeMethod: d.code_challenge_method,
                    state: d.state,
                    permissions: A,
                    channelId: S,
                    guildId: _,
                    prompt: d.prompt,
                    disableGuildSelect: "true" === d.disable_guild_select,
                    userInstall: "true" === d.user_install
                }
            }
        },
        955145: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                getApplicationDetailsText: function() {
                    return l
                }
            });
            var n = t("782340");

            function l(e) {
                if (null != e.privacy_policy_url && null != e.terms_of_service_url) return n.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_LINKS.format({
                    application: e.name,
                    privacyPolicyURL: e.privacy_policy_url,
                    termsOfServiceURL: e.terms_of_service_url
                });
                if (null != e.privacy_policy_url) return n.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_PRIVACY_POLICY_LINK.format({
                    application: e.name,
                    privacyPolicyURL: e.privacy_policy_url
                });
                if (null != e.terms_of_service_url) return n.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_TERMS_OF_SERVICE_LINK.format({
                    application: e.name,
                    termsOfServiceURL: e.terms_of_service_url
                });
                return n.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY.format({
                    application: e.name
                })
            }
        },
        8222: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                acceptWhitelist: function() {
                    return r
                },
                authorize: function() {
                    return o
                },
                fetchAuthorization: function() {
                    return u
                },
                fetchChannels: function() {
                    return E
                },
                logoutWithRedirect: function() {
                    return c
                },
                verifyUserCode: function() {
                    return d
                },
                finishUserCode: function() {
                    return A
                },
                finishUserCodeTwoWayLinkError: function() {
                    return S
                }
            });
            var n = t("447669"),
                l = t("872717"),
                a = t("437822"),
                i = t("49111");

            function r(e) {
                return l.default.post({
                    url: i.Endpoints.OAUTH2_WHITELIST_ACCEPT,
                    query: {
                        token: e
                    },
                    oldFormErrors: !0
                })
            }
            async function o(e) {
                let {
                    authorize: s,
                    clientId: t,
                    scopes: n,
                    responseType: a,
                    redirectUri: r,
                    codeChallenge: o,
                    codeChallengeMethod: u,
                    state: E,
                    permissions: c,
                    guildId: d,
                    channelId: A,
                    userInstall: S
                } = e, _ = await l.default.post({
                    url: i.Endpoints.OAUTH2_AUTHORIZE,
                    query: {
                        client_id: t,
                        response_type: a,
                        redirect_uri: r,
                        code_challenge: o,
                        code_challenge_method: u,
                        scope: n.join(" "),
                        state: E
                    },
                    body: {
                        guild_id: d,
                        webhook_channel_id: null != d && null != A ? A : void 0,
                        channel_id: null == d && null != A ? A : void 0,
                        permissions: c,
                        authorize: s,
                        user_install: S
                    },
                    oldFormErrors: !0
                });
                return _.body
            }
            async function u(e) {
                let {
                    clientId: s,
                    scopes: t,
                    responseType: n,
                    redirectUri: a,
                    codeChallenge: r,
                    codeChallengeMethod: o,
                    state: u,
                    userInstall: E
                } = e, c = await l.default.get({
                    url: i.Endpoints.OAUTH2_AUTHORIZE,
                    query: {
                        client_id: s,
                        response_type: n,
                        redirect_uri: a,
                        code_challenge: r,
                        code_challenge_method: o,
                        scope: t.join(" "),
                        state: u,
                        user_install: E
                    },
                    retries: 3,
                    oldFormErrors: !0
                });
                return c.body
            }
            async function E(e) {
                let {
                    body: s
                } = await l.default.get({
                    url: i.Endpoints.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
                    query: {
                        guild_id: e
                    },
                    oldFormErrors: !0
                });
                return s
            }

            function c(e) {
                a.default.logout((0, n.getLoginPath)(e.pathname + e.search, !1))
            }
            async function d(e) {
                return await l.default.post({
                    url: i.Endpoints.OAUTH2_DEVICE_VERIFY,
                    body: {
                        user_code: e
                    }
                })
            }
            async function A(e, s) {
                return await l.default.post({
                    url: i.Endpoints.OAUTH2_DEVICE_FINISH,
                    body: {
                        user_code: e,
                        result: s
                    }
                })
            }
            async function S(e, s, t) {
                return await l.default.post({
                    url: i.Endpoints.OAUTH2_DEVICE_FINISH,
                    body: {
                        user_code: e,
                        result: "two_way_link_error",
                        error_code: s,
                        error_source: t
                    }
                })
            }
        },
        164386: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                convertOAuth2Authorization: function() {
                    return l
                }
            });
            var n = t("316693");

            function l(e) {
                if (null == e.guilds) return e;
                return {
                    ...e,
                    guilds: e.guilds.map(e => ({
                        ...e,
                        permissions: n.default.deserialize(e.permissions)
                    }))
                }
            }
        },
        978970: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                OrderedPermissions: function() {
                    return i
                },
                containsDisallowedPermission: function() {
                    return r
                },
                getPermissionName: function() {
                    return u
                }
            });
            var n = t("316693"),
                l = t("49111"),
                a = t("782340");
            let i = [l.Permissions.ADMINISTRATOR, l.Permissions.MANAGE_GUILD, l.Permissions.MANAGE_ROLES, l.Permissions.MANAGE_CHANNELS, l.Permissions.KICK_MEMBERS, l.Permissions.BAN_MEMBERS, l.Permissions.CREATE_INSTANT_INVITE, l.Permissions.MANAGE_NICKNAMES, l.Permissions.CHANGE_NICKNAME, l.Permissions.MANAGE_GUILD_EXPRESSIONS, l.Permissions.CREATE_GUILD_EXPRESSIONS, l.Permissions.MANAGE_WEBHOOKS, l.Permissions.VIEW_AUDIT_LOG, l.Permissions.VIEW_CHANNEL, l.Permissions.MANAGE_EVENTS, l.Permissions.CREATE_EVENTS, l.Permissions.MODERATE_MEMBERS, l.Permissions.VIEW_GUILD_ANALYTICS, l.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS, l.Permissions.SEND_MESSAGES, l.Permissions.SEND_MESSAGES_IN_THREADS, l.Permissions.CREATE_PUBLIC_THREADS, l.Permissions.CREATE_PRIVATE_THREADS, l.Permissions.SEND_TTS_MESSAGES, l.Permissions.MANAGE_MESSAGES, l.Permissions.MANAGE_THREADS, l.Permissions.EMBED_LINKS, l.Permissions.ATTACH_FILES, l.Permissions.READ_MESSAGE_HISTORY, l.Permissions.MENTION_EVERYONE, l.Permissions.ADD_REACTIONS, l.Permissions.USE_EXTERNAL_EMOJIS, l.Permissions.USE_EXTERNAL_STICKERS, l.Permissions.USE_APPLICATION_COMMANDS, l.Permissions.SEND_VOICE_MESSAGES, l.Permissions.USE_CLYDE_AI, l.Permissions.CONNECT, l.Permissions.SPEAK, l.Permissions.MUTE_MEMBERS, l.Permissions.DEAFEN_MEMBERS, l.Permissions.MOVE_MEMBERS, l.Permissions.USE_VAD, l.Permissions.PRIORITY_SPEAKER, l.Permissions.REQUEST_TO_SPEAK, l.Permissions.STREAM, l.Permissions.USE_EMBEDDED_ACTIVITIES, l.Permissions.USE_SOUNDBOARD, l.Permissions.USE_EXTERNAL_SOUNDS, l.Permissions.SET_VOICE_CHANNEL_STATUS];

            function r(e) {
                return Object.values(l.Permissions).some(s => n.default.has(e, s) && !i.includes(s))
            }
            let o = {
                [l.Permissions.ADMINISTRATOR.toString()]: () => a.default.Messages.ADMINISTRATOR,
                [l.Permissions.MANAGE_GUILD.toString()]: () => a.default.Messages.MANAGE_SERVER,
                [l.Permissions.MANAGE_ROLES.toString()]: () => a.default.Messages.MANAGE_ROLES,
                [l.Permissions.MANAGE_CHANNELS.toString()]: () => a.default.Messages.MANAGE_CHANNELS,
                [l.Permissions.KICK_MEMBERS.toString()]: () => a.default.Messages.KICK_MEMBERS,
                [l.Permissions.BAN_MEMBERS.toString()]: () => a.default.Messages.BAN_MEMBERS,
                [l.Permissions.CREATE_INSTANT_INVITE.toString()]: () => a.default.Messages.CREATE_INSTANT_INVITE,
                [l.Permissions.MANAGE_NICKNAMES.toString()]: () => a.default.Messages.MANAGE_NICKNAMES,
                [l.Permissions.CHANGE_NICKNAME.toString()]: () => a.default.Messages.CHANGE_NICKNAME,
                [l.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: () => a.default.Messages.MANAGE_EXPRESSIONS,
                [l.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: () => a.default.Messages.CREATE_EXPRESSIONS,
                [l.Permissions.MANAGE_WEBHOOKS.toString()]: () => a.default.Messages.MANAGE_WEBHOOKS,
                [l.Permissions.VIEW_AUDIT_LOG.toString()]: () => a.default.Messages.VIEW_AUDIT_LOG,
                [l.Permissions.VIEW_CHANNEL.toString()]: () => a.default.Messages.READ_MESSAGES,
                [l.Permissions.SEND_MESSAGES.toString()]: () => a.default.Messages.SEND_MESSAGES,
                [l.Permissions.SEND_TTS_MESSAGES.toString()]: () => a.default.Messages.SEND_TTS_MESSAGES,
                [l.Permissions.MANAGE_MESSAGES.toString()]: () => a.default.Messages.MANAGE_MESSAGES,
                [l.Permissions.EMBED_LINKS.toString()]: () => a.default.Messages.EMBED_LINKS,
                [l.Permissions.ATTACH_FILES.toString()]: () => a.default.Messages.ATTACH_FILES,
                [l.Permissions.READ_MESSAGE_HISTORY.toString()]: () => a.default.Messages.READ_MESSAGE_HISTORY,
                [l.Permissions.MENTION_EVERYONE.toString()]: () => a.default.Messages.MENTION_EVERYONE,
                [l.Permissions.ADD_REACTIONS.toString()]: () => a.default.Messages.ADD_REACTIONS,
                [l.Permissions.USE_EXTERNAL_EMOJIS.toString()]: () => a.default.Messages.USE_EXTERNAL_EMOJIS,
                [l.Permissions.USE_EXTERNAL_STICKERS.toString()]: () => a.default.Messages.USE_EXTERNAL_STICKERS,
                [l.Permissions.USE_APPLICATION_COMMANDS.toString()]: () => a.default.Messages.USE_APPLICATION_COMMANDS,
                [l.Permissions.SEND_VOICE_MESSAGES.toString()]: () => a.default.Messages.SEND_VOICE_MESSAGE,
                [l.Permissions.CONNECT.toString()]: () => a.default.Messages.CONNECT,
                [l.Permissions.SPEAK.toString()]: () => a.default.Messages.SPEAK,
                [l.Permissions.MUTE_MEMBERS.toString()]: () => a.default.Messages.MUTE_MEMBERS,
                [l.Permissions.DEAFEN_MEMBERS.toString()]: () => a.default.Messages.DEAFEN_MEMBERS,
                [l.Permissions.MOVE_MEMBERS.toString()]: () => a.default.Messages.MOVE_MEMBERS,
                [l.Permissions.USE_VAD.toString()]: () => a.default.Messages.USE_VAD,
                [l.Permissions.PRIORITY_SPEAKER.toString()]: () => a.default.Messages.PRIORITY_SPEAKER,
                [l.Permissions.CREATE_PUBLIC_THREADS.toString()]: () => a.default.Messages.CREATE_PUBLIC_THREADS,
                [l.Permissions.CREATE_PRIVATE_THREADS.toString()]: () => a.default.Messages.CREATE_PRIVATE_THREADS,
                [l.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: () => a.default.Messages.SEND_MESSAGES_IN_THREADS,
                [l.Permissions.MANAGE_THREADS.toString()]: () => a.default.Messages.MANAGE_THREADS,
                [l.Permissions.MANAGE_EVENTS.toString()]: () => a.default.Messages.MANAGE_EVENTS,
                [l.Permissions.CREATE_EVENTS.toString()]: () => a.default.Messages.CREATE_EVENTS,
                [l.Permissions.MODERATE_MEMBERS.toString()]: () => a.default.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL,
                [l.Permissions.REQUEST_TO_SPEAK.toString()]: () => a.default.Messages.REQUEST_TO_SPEAK,
                [l.Permissions.VIEW_GUILD_ANALYTICS.toString()]: () => a.default.Messages.VIEW_GUILD_ANALYTICS,
                [l.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => a.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
                [l.Permissions.STREAM.toString()]: () => a.default.Messages.VIDEO,
                [l.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: () => a.default.Messages.USE_EMBEDDED_ACTIVITIES,
                [l.Permissions.USE_SOUNDBOARD.toString()]: () => a.default.Messages.USE_SOUNDBOARD,
                [l.Permissions.USE_EXTERNAL_SOUNDS.toString()]: () => a.default.Messages.USE_EXTERNAL_SOUNDS,
                [l.Permissions.USE_CLYDE_AI.toString()]: () => a.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                [l.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: () => a.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
            };

            function u(e) {
                let s = e.toString(),
                    t = o[s];
                if (null == t) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
                return t()
            }
        },
        29479: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                FAKE_SCOPES: function() {
                    return a
                },
                OrderedAccountScopes: function() {
                    return i
                },
                ValidScopes: function() {
                    return r
                },
                RemovedScopes: function() {
                    return o
                },
                getScopeName: function() {
                    return u
                },
                getSecurityMessage: function() {
                    return E
                }
            });
            var n = t("49111"),
                l = t("782340");
            let a = [() => l.default.Messages.OAUTH2_FAKE_SCOPE_1, () => l.default.Messages.OAUTH2_FAKE_SCOPE_2, () => l.default.Messages.OAUTH2_FAKE_SCOPE_3, () => l.default.Messages.OAUTH2_FAKE_SCOPE_4, () => l.default.Messages.OAUTH2_FAKE_SCOPE_5, () => l.default.Messages.OAUTH2_FAKE_SCOPE_6, () => l.default.Messages.OAUTH2_FAKE_SCOPE_7, () => l.default.Messages.OAUTH2_FAKE_SCOPE_8],
                i = [n.OAuth2Scopes.BOT, n.OAuth2Scopes.IDENTIFY, n.OAuth2Scopes.EMAIL, n.OAuth2Scopes.CONNECTIONS, n.OAuth2Scopes.MESSAGES_READ, n.OAuth2Scopes.GUILDS, n.OAuth2Scopes.GUILDS_JOIN, n.OAuth2Scopes.GUILDS_MEMBERS_READ, n.OAuth2Scopes.GDM_JOIN, n.OAuth2Scopes.RPC, n.OAuth2Scopes.RPC_NOTIFICATIONS_READ, n.OAuth2Scopes.RPC_VOICE_READ, n.OAuth2Scopes.RPC_VOICE_WRITE, n.OAuth2Scopes.RPC_VIDEO_READ, n.OAuth2Scopes.RPC_VIDEO_WRITE, n.OAuth2Scopes.RPC_SCREENSHARE_READ, n.OAuth2Scopes.RPC_SCREENSHARE_WRITE, n.OAuth2Scopes.RPC_ACTIVITIES_WRITE, n.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD, n.OAuth2Scopes.APPLICATIONS_BUILDS_READ, n.OAuth2Scopes.APPLICATIONS_COMMANDS, n.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE, n.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, n.OAuth2Scopes.APPLICATIONS_STORE_UPDATE, n.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS, n.OAuth2Scopes.ACTIVITIES_READ, n.OAuth2Scopes.ACTIVITIES_WRITE, n.OAuth2Scopes.RELATIONSHIPS_READ, n.OAuth2Scopes.VOICE, n.OAuth2Scopes.DM_CHANNELS_READ, n.OAuth2Scopes.ROLE_CONNECTIONS_WRITE],
                r = i.concat([n.OAuth2Scopes.WEBHOOK_INCOMING, n.OAuth2Scopes.BOT]),
                o = ["rpc.api"];

            function u(e, s) {
                switch (e) {
                    case n.OAuth2Scopes.IDENTIFY:
                        return l.default.Messages.SCOPE_IDENTIFY;
                    case n.OAuth2Scopes.EMAIL:
                        return l.default.Messages.SCOPE_EMAIL;
                    case n.OAuth2Scopes.BOT:
                        return l.default.Messages.SCOPE_BOT;
                    case n.OAuth2Scopes.CONNECTIONS:
                        return l.default.Messages.SCOPE_CONNECTIONS;
                    case n.OAuth2Scopes.MESSAGES_READ:
                        return l.default.Messages.SCOPE_MESSAGES_READ;
                    case n.OAuth2Scopes.GUILDS:
                        return l.default.Messages.SCOPE_GUILDS;
                    case n.OAuth2Scopes.GUILDS_JOIN:
                        return l.default.Messages.SCOPE_GUILDS_JOIN;
                    case n.OAuth2Scopes.GUILDS_MEMBERS_READ:
                        if (s.includes(n.OAuth2Scopes.VOICE)) return l.default.Messages.SCOPE_GUILDS_MEMBERS_READ_VOICE;
                        return l.default.Messages.SCOPE_GUILDS_MEMBERS_READ;
                    case n.OAuth2Scopes.GDM_JOIN:
                        return l.default.Messages.SCOPE_GDM_JOIN;
                    case n.OAuth2Scopes.RPC:
                        return l.default.Messages.SCOPE_RPC;
                    case n.OAuth2Scopes.RPC_NOTIFICATIONS_READ:
                        return l.default.Messages.SCOPE_RPC_NOTIFICATIONS_READ;
                    case n.OAuth2Scopes.RPC_VOICE_WRITE:
                        return l.default.Messages.SCOPE_RPC_VOICE_WRITE;
                    case n.OAuth2Scopes.RPC_VIDEO_READ:
                        return l.default.Messages.SCOPE_RPC_VIDEO_READ;
                    case n.OAuth2Scopes.RPC_VIDEO_WRITE:
                        return l.default.Messages.SCOPE_RPC_VIDEO_WRITE;
                    case n.OAuth2Scopes.RPC_SCREENSHARE_READ:
                        return l.default.Messages.SCOPE_RPC_SCREENSHARE_READ;
                    case n.OAuth2Scopes.RPC_SCREENSHARE_WRITE:
                        return l.default.Messages.SCOPE_RPC_SCREENSHARE_WRITE;
                    case n.OAuth2Scopes.RPC_VOICE_READ:
                        return l.default.Messages.SCOPE_RPC_VOICE_READ;
                    case n.OAuth2Scopes.RPC_ACTIVITIES_WRITE:
                        return l.default.Messages.SCOPE_RPC_ACTIVITIES_WRITE;
                    case n.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD:
                        return l.default.Messages.SCOPE_APPLICATIONS_BUILDS_UPLOAD;
                    case n.OAuth2Scopes.APPLICATIONS_BUILDS_READ:
                        return l.default.Messages.SCOPE_APPLICATIONS_BUILDS_READ;
                    case n.OAuth2Scopes.APPLICATIONS_COMMANDS:
                        return l.default.Messages.SCOPE_APPLICATIONS_COMMANDS;
                    case n.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE:
                        return l.default.Messages.SCOPE_APPLICATIONS_COMMANDS_UPDATE;
                    case n.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE:
                        return l.default.Messages.SCOPE_APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE;
                    case n.OAuth2Scopes.APPLICATIONS_STORE_UPDATE:
                        return l.default.Messages.SCOPE_APPLICATIONS_STORE_UPDATE;
                    case n.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS:
                        return l.default.Messages.SCOPE_APPLICATIONS_ENTITLEMENTS;
                    case n.OAuth2Scopes.ACTIVITIES_READ:
                        return l.default.Messages.SCOPE_ACTIVITIES_READ;
                    case n.OAuth2Scopes.ACTIVITIES_WRITE:
                        return l.default.Messages.SCOPE_ACTIVITIES_WRITE;
                    case n.OAuth2Scopes.RELATIONSHIPS_READ:
                        return l.default.Messages.SCOPE_RELATIONSHIPS_READ;
                    case n.OAuth2Scopes.VOICE:
                        return l.default.Messages.SCOPE_VOICE;
                    case n.OAuth2Scopes.DM_CHANNELS_READ:
                        return l.default.Messages.SCOPE_DM_CHANNELS_READ;
                    case n.OAuth2Scopes.ROLE_CONNECTIONS_WRITE:
                        return l.default.Messages.SCOPE_ROLE_CONNECTIONS_WRITE;
                    default:
                        return e
                }
            }

            function E(e) {
                return e.includes(n.OAuth2Scopes.MESSAGES_READ) ? l.default.Messages.OAUTH2_CAN_READ_NOTICE.format() : l.default.Messages.OAUTH2_CANNOT_READ_SEND_NOTICE.format()
            }
        },
        357974: function(e, s, t) {
            "use strict";
            var n, l;
            t.r(s), t.d(s, {
                OAuth2Prompts: function() {
                    return n
                }
            }), (l = n || (n = {})).NONE = "none", l.CONSENT = "consent"
        },
        580363: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return m
                }
            });
            var n = t("37983");
            t("884691");
            var l = t("414456"),
                a = t.n(l),
                i = t("577776"),
                r = t("841811"),
                o = t("338835"),
                u = t("83900"),
                E = t("45029"),
                c = t("71216"),
                d = t("148337"),
                A = t("568734"),
                S = t("299039"),
                _ = t("955145"),
                O = t("29479"),
                I = t("49111"),
                T = t("843455"),
                N = t("782340"),
                f = t("413973");

            function m(e) {
                var s;
                let t, {
                        application: l,
                        scopes: a,
                        redirectUri: i,
                        approximateGuildCount: m,
                        isEmbeddedFlow: p,
                        embeddedActivityConfig: h
                    } = e,
                    M = new Date(S.default.extractTimestamp(l.id)),
                    P = (0, O.getSecurityMessage)(a),
                    R = (0, A.hasFlag)(null !== (s = l.flags) && void 0 !== s ? s : 0, I.ApplicationFlags.EMBEDDED);
                if (null != i && !R && !p) {
                    let e = new URL(i);
                    t = null != e.host && e.host.length > 0 ? e.origin : e.href
                }
                return (0, n.jsxs)("div", {
                    className: f.applicationDetails,
                    children: [null != t ? (0, n.jsx)(C, {
                        className: f.redirectWarning,
                        icon: u.default,
                        text: N.default.Messages.OAUTH2_DETAILS_REDIRECT.format({
                            origin: t
                        })
                    }) : null, (0, n.jsx)(C, {
                        icon: E.default,
                        text: (0, _.getApplicationDetailsText)(l)
                    }), (0, n.jsx)(C, {
                        icon: r.default,
                        text: N.default.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
                            date: M
                        })
                    }), a.includes(T.OAuth2Scopes.BOT) && null != m ? (0, n.jsx)(C, {
                        icon: c.default,
                        text: N.default.Messages.OAUTH2_DETAILS_GUILDS.format({
                            guildCount: m
                        })
                    }) : null, (0, n.jsx)(C, {
                        icon: d.default,
                        text: P
                    }), (null == h ? void 0 : h.has_csp_exception) ? (0, n.jsx)(C, {
                        icon: o.default,
                        text: N.default.Messages.OAUTH2_SCOPES_IP_LOCATION_SCOPE
                    }) : null]
                })
            }

            function C(e) {
                let {
                    icon: s,
                    text: t,
                    className: l
                } = e;
                return (0, n.jsxs)("div", {
                    className: a(f.entry, l),
                    children: [(0, n.jsx)(s, {
                        className: f.entryIcon
                    }), (0, n.jsx)(i.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: f.entryInner,
                        children: t
                    })]
                })
            }
        },
        33942: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                OAuth2AuthorizePage: function() {
                    return Y
                },
                OAuth2AuthorizeModal: function() {
                    return z
                },
                OAuth2Authorize: function() {
                    return Z
                },
                useOAuth2AuthorizeForm: function() {
                    return X
                },
                openOAuth2Modal: function() {
                    return q
                },
                getOAuth2AuthorizeProps: function() {
                    return Q
                }
            });
            var n, l, a, i, r = t("37983"),
                o = t("884691"),
                u = t("90915"),
                E = t("746379"),
                c = t("316693"),
                d = t("446674"),
                A = t("271841"),
                S = t("551042"),
                _ = t("670914"),
                O = t("242670"),
                I = t("84460"),
                T = t("191225"),
                N = t("716241"),
                f = t("148217"),
                m = t("970254"),
                C = t("393414"),
                p = t("766274"),
                h = t("271938"),
                M = t("449008"),
                P = t("991170"),
                R = t("253981"),
                g = t("872825"),
                D = t("8222"),
                L = t("164386"),
                v = t("978970"),
                U = t("29479"),
                x = t("357974"),
                H = t("580363"),
                j = t("613070"),
                G = t("530487"),
                b = t("638992"),
                B = t("223934"),
                V = t("267570"),
                y = t("941281"),
                W = t("49111"),
                K = t("954016"),
                w = t("782340"),
                F = t("392507");
            let k = "oauth2-authorize-header-id";

            function Y() {
                let e = (0, u.useLocation)(),
                    s = o.useMemo(() => (0, g.parseOAuth2AuthorizeProps)(e.search), [e.search]);
                return (0, f.default)(), (0, r.jsx)(V.OAuth2Page, {
                    children: (0, r.jsx)(Z, {
                        ...s,
                        showLogout: !0
                    })
                })
            }

            function z(e) {
                let {
                    transitionState: s,
                    ...t
                } = e;
                return (0, r.jsx)(V.OAuth2Modal, {
                    transitionState: s,
                    "aria-labelledby": k,
                    children: (0, r.jsx)(Z, {
                        ...t,
                        scrollable: !0
                    })
                })
            }

            function Z(e) {
                let {
                    scrollable: s,
                    ...t
                } = e, {
                    header: n,
                    body: l,
                    footer: a,
                    nextStep: i,
                    appDetails: o
                } = X(t), u = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: F.content,
                        children: [n, l, null == i ? o : null]
                    }), a]
                });
                return s ? (0, r.jsx)("div", {
                    className: F.authorize,
                    children: (0, r.jsx)(_.ScrollerThin, {
                        orientation: "auto",
                        children: u
                    })
                }) : (0, r.jsx)("div", {
                    className: F.authorize,
                    children: (0, r.jsx)("div", {
                        children: u
                    })
                })
            }

            function X(e) {
                var s, t, n, l, S, _, f, V;
                let Y, z, Z, {
                        clientId: X,
                        scopes: J,
                        responseType: q,
                        redirectUri: Q,
                        codeChallenge: $,
                        codeChallengeMethod: ee,
                        state: es,
                        guildId: et,
                        channelId: en,
                        permissions: el,
                        prompt: ea,
                        disableGuildSelect: ei,
                        showLogout: er = !1,
                        authorization: eo,
                        callback: eu,
                        callbackWithoutPost: eE,
                        onClose: ec,
                        cancelCompletesFlow: ed = !0,
                        isTrustedName: eA = !1,
                        isEmbeddedFlow: eS = !1,
                        userInstall: e_ = !1
                    } = e,
                    eO = o.useMemo(() => (0, g.filterScopes)(J), [J]),
                    eI = (0, u.useLocation)(),
                    eT = m.default.useExperiment({
                        location: "auth web"
                    }),
                    eN = eT.userAppsTreatment === m.UserAppsTreatment.ALLOWED;
                !eN && (e_ = !1);
                let [ef, em] = o.useState(a.NOT_LOADED), [eC, ep] = o.useState(null), [eh, eM] = o.useState(P.default.NONE), [eP, eR] = o.useState(i.AUTHORIZE_SCOPES), [eg, eD] = o.useState(null), [eL] = o.useState(U.OrderedAccountScopes.filter(e => eO.includes(e))), [ev, eU] = o.useState(null != et ? et : null), [ex, eH] = o.useState(null != en ? en : null), [ej, eG] = o.useState(!1), eb = o.useMemo(() => {
                    var e;
                    return null == eC ? void 0 : null === (e = eC.guilds) || void 0 === e ? void 0 : e.find(e => e.id === ev)
                }, [null == eC ? void 0 : eC.guilds, ev]), eB = (0, d.useStateFromStoresObject)([I.default, T.default], () => {
                    var e, s;
                    let t;
                    let n = null === (e = T.default.getSelfEmbeddedActivities().values().next()) || void 0 === e ? void 0 : e.value,
                        l = I.default.getIsEnabled();
                    return (0, M.isNotNullish)(n) && (t = T.default.getShelfActivities(n.guildId).find(e => e.application_id === n.application_id), l && void 0 === t && (t = null === (s = I.default.getDeveloperShelfItems().find(e => e.id === n.application_id)) || void 0 === s ? void 0 : s.embeddedActivityConfig), (0, M.isNotNullish)(t)) ? {
                        ...K.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                        ...t
                    } : {}
                }), eV = Object.keys(eB).length > 0 ? eB : null, ey = o.useCallback(async e => {
                    if (null != eE) {
                        eE(e);
                        return
                    }
                    if (!e && !ed) {
                        null != eu && (eu({
                            application: null == eC ? void 0 : eC.application,
                            guild: eb
                        }), null == ec || ec());
                        return
                    }
                    try {
                        eG(!0);
                        let s = await (0, D.authorize)({
                            authorize: e,
                            clientId: X,
                            scopes: eO,
                            responseType: q,
                            redirectUri: Q,
                            codeChallenge: $,
                            codeChallengeMethod: ee,
                            state: es,
                            permissions: c.default.remove(null != el ? el : P.default.NONE, eh),
                            guildId: null == ev || e_ ? void 0 : ev,
                            channelId: null != ex ? ex : void 0,
                            userInstall: e_
                        });
                        if (null != eu) eu({
                            application: null == eC ? void 0 : eC.application,
                            location: s.location,
                            guild: eb
                        }), null == ec || ec();
                        else if (null != s.location) {
                            let {
                                host: e,
                                path: t
                            } = E.parse(s.location);
                            R.default.isDiscordHostname(e) && t === W.Routes.OAUTH2_AUTHORIZED ? (0, C.transitionTo)(W.Routes.OAUTH2_AUTHORIZED, {
                                state: {
                                    application: null == eC ? void 0 : eC.application,
                                    guild: eb
                                }
                            }) : window.location = s.location
                        } else eG(!1)
                    } catch (s) {
                        let e = s.body;
                        (null == e ? void 0 : e.message) != null && "" !== e.message ? eD(Error(e.message)) : eD(e), eR(i.AUTHORIZE_SCOPES), em(a.LOADED), eG(!1)
                    }
                }, [eu, eE, X, $, ee, eh, ec, el, Q, q, eO, ev, ex, es, ed, null == eC ? void 0 : eC.application, eb, e_]), eW = o.useRef(!1), eK = o.useCallback(async () => {
                    if (ef === a.NOT_LOADED) {
                        if (em(a.LOADING), !h.default.isAuthenticated()) {
                            (0, D.logoutWithRedirect)(eI);
                            return
                        }
                        if (!eW.current) {
                            eW.current = !0;
                            try {
                                let e = null != eo ? eo : await (0, D.fetchAuthorization)({
                                    clientId: X,
                                    scopes: eO,
                                    responseType: q,
                                    redirectUri: Q,
                                    codeChallenge: $,
                                    codeChallengeMethod: ee,
                                    state: es,
                                    userInstall: eN && e_
                                });
                                ep((0, L.convertOAuth2Authorization)(e)), ea === x.OAuth2Prompts.NONE && e.authorized ? ey(!0) : em(a.LOADED), (0, N.trackWithMetadata)(W.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                                    application_id: e.application.id
                                })
                            } catch (t) {
                                let {
                                    status: e,
                                    body: s
                                } = t;
                                if (401 === e) {
                                    (0, D.logoutWithRedirect)(eI);
                                    return
                                }
                                eD(Error(null != s.message ? s.message : "".concat(Object.keys(s)[0], ": ").concat(Object.values(s)[0]))), em(a.LOADED)
                            } finally {
                                eW.current = !1
                            }
                        }
                    }
                }, [eo, X, $, ee, ef, eI, ea, Q, q, eO, ey, es, e_, eN]), ew = o.useCallback((e, s) => {
                    eM(t => e ? c.default.remove(t, s) : c.default.add(t, s))
                }, []);
                o.useEffect(() => {
                    let e = eO.filter(e => !U.ValidScopes.includes(e));
                    0 === eO.length ? (eD(Error("No scopes were provided.")), em(a.LOADED)) : e.length > 0 ? (eD(Error("Invalid scope: ".concat(e[0]))), em(a.LOADED)) : (0, v.containsDisallowedPermission)(null != el ? el : P.default.NONE) ? (eD(Error("Invalid permission(s) provided.")), em(a.LOADED)) : eK()
                }, [eK, eO, el]);
                let eF = null != ex ? null == eC ? void 0 : null === (s = eC.channels) || void 0 === s ? void 0 : s.find(e => e.id === ex) : null,
                    ek = null != ev ? null == eC ? void 0 : null === (t = eC.guilds) || void 0 === t ? void 0 : t.find(e => e.id === ev) : null;
                if (o.useEffect(() => {
                        null != eC && (null != eF ? eU(null) : null == ek && (eU(null), eH(null)))
                    }, [eC, ek, eF]), eg instanceof Error) return {
                    body: (0, r.jsx)(y.OAuth2Error, {
                        message: eg.message
                    })
                };
                if (ef !== a.LOADED || null == eC) return {
                    body: (0, r.jsx)(O.Spinner, {})
                };
                let eY = new p.default(eC.user),
                    ez = null === (n = eC.bot) || void 0 === n ? void 0 : n.approximate_guild_count,
                    eZ = !1;
                switch (eP) {
                    case i.AUTHORIZE_SCOPES:
                        let eX = null == eg || eg instanceof Error ? {} : eg,
                            eJ = null === (l = eC.guilds) || void 0 === l ? void 0 : l.sort((e, s) => e.name.toLowerCase().localeCompare(s.name.toLowerCase())),
                            eq = eO.includes(W.OAuth2Scopes.BOT) || eO.includes(W.OAuth2Scopes.WEBHOOK_INCOMING) || eO.includes(W.OAuth2Scopes.APPLICATIONS_COMMANDS);
                        Y = (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(j.default, {
                                application: eC.application,
                                accountScopes: eL,
                                errors: eX,
                                isTrustedName: eA
                            }), null == eF && eq && !e_ ? (0, r.jsx)(b.GuildSelector, {
                                error: (null !== (_ = null !== (S = eX[W.OAuth2Scopes.BOT]) && void 0 !== S ? S : eX[W.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== _ ? _ : [])[0],
                                selectedGuildId: ev,
                                onGuildChange: e => {
                                    eU(e)
                                },
                                guilds: null != eJ ? eJ : [],
                                disabled: "" !== ev && !0 === ei
                            }) : null, eO.includes(W.OAuth2Scopes.WEBHOOK_INCOMING) ? (0, r.jsx)(b.WebhookGuildChannelSelector, {
                                error: (null !== (f = eX[W.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== f ? f : [])[0],
                                selectedChannelId: ex,
                                selectedGuildId: ev,
                                onChannelChange: e => eH(e)
                            }) : null]
                        }), eO.includes(W.OAuth2Scopes.BOT) && !c.default.equals(el, P.default.NONE) && (Z = i.AUTHORIZE_BOT_PERMISSIONS);
                        let eQ = eq && null == ek && null == eF,
                            e$ = null != ek && eO.includes(W.OAuth2Scopes.WEBHOOK_INCOMING) && null == ex;
                        eZ = !e_ && (eQ || e$);
                        break;
                    case i.AUTHORIZE_BOT_PERMISSIONS:
                        Y = (0, r.jsx)(G.default, {
                            application: eC.application,
                            permissions: null != el ? el : P.default.NONE,
                            deniedPermissions: eh,
                            onPermissionsChange: ew,
                            guild: ek
                        }), z = i.AUTHORIZE_SCOPES
                }
                let e0 = (0, r.jsx)(H.default, {
                        embeddedActivityConfig: eV,
                        application: eC.application,
                        scopes: eO,
                        redirectUri: null !== (V = eC.redirect_uri) && void 0 !== V ? V : null,
                        approximateGuildCount: void 0 !== ez ? ez : null,
                        isEmbeddedFlow: eS
                    }),
                    e2 = (0, r.jsxs)("div", {
                        className: F.footer,
                        children: [null != z ? (0, r.jsx)(A.Button, {
                            look: A.Button.Looks.LINK,
                            color: A.Button.Colors.PRIMARY,
                            onClick: () => eR(z),
                            children: w.default.Messages.BACK
                        }) : (0, r.jsx)(A.Button, {
                            look: A.Button.Looks.LINK,
                            color: A.Button.Colors.PRIMARY,
                            onClick: () => ey(!1),
                            children: w.default.Messages.CANCEL
                        }), null != Z ? (0, r.jsx)(A.Button, {
                            onClick: () => eR(Z),
                            disabled: eZ,
                            children: w.default.Messages.CONTINUE
                        }) : (0, r.jsx)(A.Button, {
                            onClick: () => ey(!0),
                            disabled: eZ,
                            submitting: ej,
                            children: w.default.Messages.AUTHORIZE
                        })]
                    }),
                    e1 = (0, r.jsx)(B.default, {
                        id: k,
                        user: eY,
                        application: eC.application,
                        bot: eC.bot,
                        accountScopes: eL,
                        showLogout: er || !1,
                        location: eI,
                        isTrustedName: eA
                    });
                return {
                    header: e1,
                    body: Y,
                    footer: e2,
                    nextStep: Z,
                    appDetails: e0,
                    sendAuthorize: ey
                }
            }

            function J(e, s) {
                var t;
                if (null == s.location || null != e && e(s)) return;
                let {
                    host: n,
                    path: l,
                    query: a
                } = E.parse(s.location, !0), i = R.default.isDiscordHostname(n) || window.location.host === n;
                i && l === W.Routes.OAUTH2_AUTHORIZED ? (0, S.openModal)(e => (0, r.jsx)(V.OAuth2Modal, {
                    ...e,
                    "aria-labelledby": k,
                    children: (0, r.jsx)(y.OAuth2AuthorizedSuccess, {
                        guild: s.guild,
                        application: s.application,
                        onClose: e.onClose
                    })
                })) : i && (null == l ? void 0 : l.startsWith(W.Routes.OAUTH2_ERROR)) ? (0, S.openModal)(e => {
                    let s = a.error_description || a.error || w.default.Messages.OAUTH2_UNKNOWN_ERROR;
                    return Array.isArray(s) && (s = s[0]), (0, r.jsxs)(V.OAuth2Modal, {
                        ...e,
                        "aria-labelledby": k,
                        children: [(0, r.jsx)(y.OAuth2Error, {
                            message: s,
                            onClose: e.onClose
                        }), ";"]
                    })
                }) : null === (t = window.open(s.location, "_blank")) || void 0 === t || t.focus()
            }

            function q(e, s) {
                (0, S.openModal)(s => (0, r.jsx)(z, {
                    ...s,
                    ...e,
                    cancelCompletesFlow: !1,
                    callback: J.bind(null, e.callback)
                }), {
                    onCloseCallback: s
                })
            }

            function Q(e) {
                let {
                    hostname: s = "",
                    host: t,
                    path: n,
                    query: l
                } = E.parse(e);
                return null != n && null != l && (R.default.isDiscordHostname(s) || t === window.location.host) && (n.startsWith("/api".concat(W.Endpoints.OAUTH2_AUTHORIZE)) || n.startsWith(W.Routes.OAUTH2_AUTHORIZE)) ? (0, g.parseOAuth2AuthorizeProps)(l) : null
            }(n = a || (a = {}))[n.NOT_LOADED = 0] = "NOT_LOADED", n[n.LOADING = 1] = "LOADING", n[n.LOADED = 2] = "LOADED", (l = i || (i = {}))[l.INSTALL_TYPE = 0] = "INSTALL_TYPE", l[l.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", l[l.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
        },
        613070: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return d
                }
            });
            var n = t("37983");
            t("884691");
            var l = t("775560"),
                a = t("605451"),
                i = t("577776"),
                r = t("36694"),
                o = t("945330"),
                u = t("29479"),
                E = t("782340"),
                c = t("814288");

            function d(e) {
                var s;
                let {
                    application: t,
                    accountScopes: d,
                    errors: A,
                    isTrustedName: S = !1
                } = e, _ = (0, l.useLazyValue)(() => u.FAKE_SCOPES[Math.floor(Math.random() * u.FAKE_SCOPES.length)]);
                if (0 === d.length) return null;
                let O = d.map(e => {
                        var s;
                        let t = (0, u.getScopeName)(e, d),
                            [l] = null !== (s = null == A ? void 0 : A[e]) && void 0 !== s ? s : [];
                        return (0, n.jsxs)("div", {
                            className: c.scope,
                            children: [(0, n.jsx)("div", {
                                className: c.scopeCheck,
                                children: (0, n.jsx)(r.default, {
                                    className: c.icon
                                })
                            }), (0, n.jsxs)("div", {
                                className: c.scopeInner,
                                children: [(0, n.jsx)(i.Text, {
                                    variant: "text-md/medium",
                                    children: t
                                }), null != l ? (0, n.jsx)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: l
                                }) : null]
                            })]
                        }, e)
                    }),
                    I = (0, n.jsxs)("div", {
                        className: c.scope,
                        children: [(0, n.jsx)("div", {
                            className: c.scopeTimes,
                            children: (0, n.jsx)(o.default, {
                                className: c.icon
                            })
                        }), (0, n.jsx)("div", {
                            className: c.scopeInner,
                            children: (0, n.jsx)(i.Text, {
                                variant: "text-md/normal",
                                className: c.scopeName,
                                children: _()
                            })
                        })]
                    }),
                    T = S ? E.default.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : E.default.Messages.OAUTH2_SCOPES_LABEL;
                return (0, n.jsxs)("div", {
                    className: c.scopes,
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: c.sectionLabel,
                        children: T.format({
                            application: null !== (s = null == t ? void 0 : t.name) && void 0 !== s ? s : ""
                        })
                    }), O, I]
                })
            }
        },
        530487: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return A
                }
            });
            var n = t("37983"),
                l = t("884691"),
                a = t("316693"),
                i = t("685698"),
                r = t("577776"),
                o = t("945330"),
                u = t("991170"),
                E = t("978970"),
                c = t("782340"),
                d = t("190148");

            function A(e) {
                let {
                    application: s,
                    permissions: t,
                    deniedPermissions: A,
                    onPermissionsChange: S,
                    guild: _
                } = e, [O, I] = l.useState(u.default.NONE);
                l.useEffect(() => {
                    S(!0, t), I(a.default.invert(_.permissions)), S(!1, a.default.invert(_.permissions))
                }, [_, S, t]);
                let T = E.OrderedPermissions.filter(e => a.default.has(t, e)),
                    N = T.filter(e => !a.default.has(O, e)).map(e => {
                        let s = (0, E.getPermissionName)(e),
                            t = !a.default.has(A, e);
                        return (0, n.jsx)("li", {
                            className: d.permission,
                            children: (0, n.jsx)(i.Checkbox, {
                                value: t,
                                onChange: (s, t) => S(t, e),
                                type: i.Checkbox.Types.INVERTED,
                                children: (0, n.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: s
                                })
                            })
                        }, String(e))
                    }),
                    f = T.filter(e => a.default.has(O, e)).map(e => {
                        let s = (0, E.getPermissionName)(e);
                        return (0, n.jsxs)("li", {
                            className: d.permission,
                            children: [(0, n.jsx)("div", {
                                className: d.disabledPermissionIcon,
                                children: (0, n.jsx)(o.default, {
                                    className: d.icon
                                })
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: s
                            })]
                        }, String(e))
                    });
                return (0, n.jsxs)("div", {
                    className: d.botPermissions,
                    children: [(0, n.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        className: d.permissionsLabel,
                        children: c.default.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
                            applicationName: s.name,
                            guildName: _.name
                        })
                    }), (0, n.jsx)("ul", {
                        className: d.permissionsList,
                        children: N
                    }), f.length > 0 ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            className: d.disabledPermissionsLabel,
                            children: c.default.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
                                applicationName: s.name
                            })
                        }), (0, n.jsx)("ul", {
                            className: d.permissionsList,
                            children: f
                        })]
                    }) : null]
                })
            }
        },
        638992: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                GuildSelector: function() {
                    return A
                },
                WebhookGuildChannelSelector: function() {
                    return S
                }
            });
            var n = t("37983"),
                l = t("884691"),
                a = t("316693"),
                i = t("605451"),
                r = t("774811"),
                o = t("577776"),
                u = t("8222"),
                E = t("49111"),
                c = t("782340"),
                d = t("246097");

            function A(e) {
                let {
                    error: s,
                    selectedGuildId: t,
                    onGuildChange: l,
                    guilds: u,
                    disabled: A = !1
                } = e, S = u.filter(e => a.default.has(e.permissions, E.Permissions.MANAGE_GUILD)).map(e => ({
                    value: e.id,
                    label: e.name
                }));
                return (0, n.jsxs)("div", {
                    className: d.selectorGroup,
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: d.sectionLabel,
                        children: c.default.Messages.OAUTH2_ADD_TO_GUILD
                    }), null != s && "" !== s ? (0, n.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        children: s
                    }) : null, (0, n.jsx)(r.SearchableSelect, {
                        wrapperClassName: d.wrapper,
                        className: d.select,
                        maxVisibleItems: 5,
                        value: t,
                        placeholder: c.default.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
                        options: S,
                        onChange: e => {
                            l(e)
                        },
                        isDisabled: A
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        className: d.label,
                        children: c.default.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
                    })]
                })
            }

            function S(e) {
                let {
                    selectedGuildId: s,
                    selectedChannelId: t,
                    onChannelChange: a,
                    error: E
                } = e, [A, S] = l.useState(null);
                l.useEffect(() => {
                    (async function e() {
                        if (null != s) {
                            let e = await (0, u.fetchChannels)(s);
                            S(e)
                        }
                    })()
                }, [s]), l.useEffect(() => {
                    null != A && null != t && null == A.find(e => e.id === t) && a(null)
                }, [A, a, t]);
                let _ = (null != A ? A : []).map(e => ({
                    value: e.id,
                    label: e.name
                }));
                return null == s ? null : (0, n.jsxs)("div", {
                    className: d.selectorGroup,
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: d.sectionLabel,
                        children: c.default.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
                    }), null != E && "" !== E ? (0, n.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        children: E
                    }) : null, (0, n.jsx)(r.SearchableSelect, {
                        wrapperClassName: d.wrapper,
                        className: d.select,
                        maxVisibleItems: 5,
                        onChange: e => {
                            a(e)
                        },
                        placeholder: c.default.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
                        value: t,
                        options: _
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        className: d.label,
                        children: c.default.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
                    })]
                })
            }
        },
        223934: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return _
                }
            });
            var n = t("37983");
            t("884691");
            var l = t("913365"),
                a = t("227645"),
                i = t("577776"),
                r = t("79798"),
                o = t("315102"),
                u = t("568734"),
                E = t("8222"),
                c = t("49111"),
                d = t("52904"),
                A = t("782340"),
                S = t("347819");

            function _(e) {
                let {
                    id: s,
                    user: t,
                    application: _,
                    bot: O,
                    accountScopes: I,
                    showLogout: T,
                    location: N,
                    isTrustedName: f
                } = e, m = o.default.getApplicationIconURL({
                    id: _.id,
                    icon: _.icon
                }), C = o.default.getUserAvatarURL(t);
                return (0, n.jsxs)("header", {
                    id: s,
                    className: S.header,
                    children: [(0, n.jsxs)("div", {
                        className: S.headerIcons,
                        children: [(0, n.jsx)(l.Avatar, {
                            src: m,
                            size: d.AvatarSizes.SIZE_80,
                            "aria-label": _.name
                        }), (0, n.jsxs)("div", {
                            className: S.ellipseGroup,
                            children: [(0, n.jsx)("div", {
                                className: S.ellipse
                            }), (0, n.jsx)("div", {
                                className: S.ellipse
                            }), (0, n.jsx)("div", {
                                className: S.ellipse
                            })]
                        }), (0, n.jsx)(l.Avatar, {
                            src: C,
                            size: d.AvatarSizes.SIZE_80,
                            "aria-label": t.username
                        })]
                    }), !f && (0, n.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        className: S.label,
                        children: A.default.Messages.OAUTH2_THIRD_PARTY_APPLICATION
                    }), (0, n.jsxs)(i.Text, {
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: [_.name, null != O ? (0, n.jsx)(r.default, {
                            className: S.botTag,
                            verified: null != O.public_flags && (0, u.hasFlag)(O.public_flags, c.UserFlags.VERIFIED_BOT)
                        }) : null]
                    }), I.length > 0 ? (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: S.label,
                        children: A.default.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS
                    }) : (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: S.label,
                        children: A.default.Messages.OAUTH2_CONNECT_TO_DISCORD
                    }), T ? (0, n.jsx)("div", {
                        className: S.currentUser,
                        children: (0, n.jsxs)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [A.default.Messages.OAUTH2_SIGNED_IN_AS.format({
                                userHook: () => (0, n.jsxs)(i.Text, {
                                    className: S.currentUserTag,
                                    variant: "text-sm/normal",
                                    children: [t.username, !t.isPomelo() && (0, n.jsx)(i.Text, {
                                        className: S.currentUserDiscriminator,
                                        variant: "text-sm/normal",
                                        children: "#".concat(t.discriminator)
                                    })]
                                }, t.id)
                            }), (0, n.jsx)(a.Clickable, {
                                tag: "a",
                                className: S.logoutLink,
                                onClick: () => (0, E.logoutWithRedirect)(N),
                                children: A.default.Messages.OAUTH2_LOGOUT
                            })]
                        })
                    }) : null]
                })
            }
        },
        267570: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                OAuth2Page: function() {
                    return I
                },
                OAuth2Modal: function() {
                    return T
                }
            });
            var n = t("37983"),
                l = t("884691"),
                a = t("414456"),
                i = t.n(a),
                r = t("516256"),
                o = t("77078"),
                u = t("69927"),
                E = t("554054"),
                c = t("831588"),
                d = t("439932"),
                A = t("49111"),
                S = t("289382"),
                _ = t("782340"),
                O = t("316618");

            function I(e) {
                let {
                    children: s,
                    wrapperClassName: t,
                    embedded: a
                } = e, [r, I] = l.useState(S.WaveStates.INITIAL), T = l.useCallback(e => {
                    I(s => Math.max(s, e))
                }, []);
                return (0, u.usePageTitle)({
                    location: _.default.Messages.OAUTH2_TITLE
                }), (0, n.jsx)(o.ThemeContextProvider, {
                    theme: A.ThemeTypes.DARK,
                    children: (0, n.jsx)(E.default, {
                        embedded: a,
                        className: i((0, d.getThemeClass)(A.ThemeTypes.DARK), O.wave),
                        splash: (0, c.getArtForPath)(),
                        waveState: r,
                        showLogo: !0,
                        updateWaveState: T,
                        children: (0, n.jsx)("div", {
                            className: i(O.oauth2Wrapper, t),
                            children: s
                        })
                    })
                })
            }

            function T(e) {
                let {
                    children: s,
                    transitionState: t,
                    ...l
                } = e;
                return (0, n.jsx)(r.ModalRoot, {
                    size: r.ModalSize.DYNAMIC,
                    transitionState: t,
                    className: O.oauth2Wrapper,
                    ...l,
                    children: s
                })
            }
        },
        941281: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return C
                },
                OAuth2Success: function() {
                    return p
                },
                OAuth2AuthorizedSuccess: function() {
                    return h
                },
                OAuth2Error: function() {
                    return M
                },
                OAuth2AuthorizedPage: function() {
                    return P
                },
                OAuth2ErrorPage: function() {
                    return R
                }
            });
            var n = t("37983"),
                l = t("884691"),
                a = t("414456"),
                i = t.n(a),
                r = t("730290"),
                o = t("90915"),
                u = t("746379"),
                E = t("516256"),
                c = t("242670"),
                d = t("577776"),
                A = t("77078"),
                S = t("69927"),
                _ = t("393414"),
                O = t("239380"),
                I = t("599110"),
                T = t("267570"),
                N = t("49111"),
                f = t("782340"),
                m = t("223003");

            function C(e) {
                let {
                    message: s,
                    footer: t,
                    headerClassName: l,
                    showsCloseWindowText: a,
                    spinner: r,
                    onClose: o
                } = e;
                return (0, S.usePageTitle)({
                    location: f.default.Messages.OAUTH2_TITLE
                }), (0, n.jsxs)(n.Fragment, {
                    children: [null != o ? (0, n.jsx)(E.ModalCloseButton, {
                        onClick: o,
                        className: m.closeButton
                    }) : null, (0, n.jsxs)("div", {
                        className: m.wrapper,
                        children: [r ? (0, n.jsx)(c.Spinner, {}) : null, (0, n.jsx)("div", {
                            className: i(m.header, l)
                        }), (0, n.jsx)(d.Text, {
                            variant: "text-md/normal",
                            className: m.text,
                            children: s
                        }), null != t ? t : null, a ? (0, n.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: m.cta,
                            children: f.default.Messages.OAUTH2_MESSAGE_CTA
                        }) : null]
                    })]
                })
            }

            function p(e) {
                return (0, n.jsx)(C, {
                    ...e,
                    headerClassName: m.headerSuccess
                })
            }

            function h(e) {
                let {
                    guild: s,
                    application: t,
                    ...a
                } = e, {
                    onClose: i
                } = a, r = f.default.Messages.AUTHORIZED_SUCCESS, o = l.useCallback(() => {
                    (null == s ? void 0 : s.id) != null && ((0, O.transitionToGuild)(null == s ? void 0 : s.id), null == i || i(), I.default.track(N.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == t ? void 0 : t.id,
                        guild_id: null == s ? void 0 : s.id
                    }))
                }, [i, null == t ? void 0 : t.id, null == s ? void 0 : s.id]), u = l.useCallback(() => {
                    null == i || i(), I.default.track(N.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                        application_id: null == t ? void 0 : t.id
                    })
                }, [i, null == t ? void 0 : t.id]), E = l.useMemo(() => {
                    if (null != t) return null != s ? f.default.Messages.AUTHORIZED_APP_TO_SERVER.format({
                        installedApplicationName: null == t ? void 0 : t.name,
                        guildName: null == s ? void 0 : s.name
                    }) : f.default.Messages.AUTHORIZED_APP.format({
                        installedApplicationName: null == t ? void 0 : t.name
                    });
                    return f.default.Messages.AUTHORIZED_GENERIC
                }, [t, s]), c = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        className: m.authorizedSuccessSubtext,
                        children: E
                    }), (null != s || null != i) && (0, n.jsxs)("div", {
                        className: m.buttonsContainer,
                        children: [null != s && (0, n.jsx)(A.Button, {
                            fullWidth: !0,
                            color: A.Button.Colors.BRAND,
                            onClick: o,
                            className: m.button,
                            children: f.default.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({
                                guildName: null == s ? void 0 : s.name
                            })
                        }), null != i && (0, n.jsx)(A.Button, {
                            fullWidth: !0,
                            color: A.Button.Colors.PRIMARY,
                            onClick: u,
                            className: m.button,
                            children: f.default.Messages.CLOSE
                        })]
                    })]
                });
                return l.useEffect(() => {
                    I.default.track(N.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
                        application_id: null == t ? void 0 : t.id
                    })
                }, [null == t ? void 0 : t.id]), (0, n.jsx)("div", {
                    className: m.authorizedSuccessWrapper,
                    children: (0, n.jsx)(p, {
                        message: r,
                        footer: c,
                        ...a
                    })
                })
            }

            function M(e) {
                return (0, n.jsx)(C, {
                    ...e,
                    headerClassName: m.headerFailure
                })
            }

            function P() {
                var e, s;
                let t = (0, o.useLocation)();
                return (0, n.jsx)(T.OAuth2Page, {
                    children: (0, n.jsx)(h, {
                        guild: null === (e = t.state) || void 0 === e ? void 0 : e.guild,
                        application: null === (s = t.state) || void 0 === s ? void 0 : s.application,
                        showsCloseWindowText: !0
                    })
                })
            }

            function R(e) {
                var s, t;
                let {
                    location: a
                } = e;
                l.useEffect(() => {
                    if (null == a) return;
                    let e = null != document.referrer && "" !== document.referrer ? u.parse(document.referrer) : null;
                    (null == e || e.host !== window.location.host || e.pathname !== N.Routes.OAUTH2_AUTHORIZE) && (0, _.transitionTo)(N.Routes.INDEX)
                }, [a]);
                let i = null != a ? (0, r.parse)(a.search) : {},
                    o = null !== (t = null !== (s = i.error_description) && void 0 !== s ? s : i.error) && void 0 !== t ? t : f.default.Messages.OAUTH2_UNKNOWN_ERROR;
                return (0, n.jsx)(T.OAuth2Page, {
                    children: (0, n.jsx)(M, {
                        message: o,
                        showsCloseWindowText: !0
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=ffb80ee8804ff51d1d66.js.map