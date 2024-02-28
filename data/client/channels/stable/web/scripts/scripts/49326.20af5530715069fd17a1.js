(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49326"], {
        576120: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                init: function() {
                    return o
                },
                saveAndClearPermissionUpdates: function() {
                    return c
                },
                savePermissionUpdates: function() {
                    return d
                },
                selectPermission: function() {
                    return s
                },
                setAdvancedMode: function() {
                    return u
                },
                updatePermission: function() {
                    return r
                }
            });
            var a = n("312916"),
                l = n("173333"),
                i = n("561427");
            async function r(e, t, n, i) {
                let r = e.getGuildId();
                if (null != r && t === r && !await (0, l.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(e, i, n)) return !1;
                a.default.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",
                    id: t,
                    allow: n,
                    deny: i
                })
            }

            function s(e) {
                a.default.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",
                    id: e
                })
            }

            function u(e) {
                a.default.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",
                    advancedMode: e
                })
            }

            function o() {
                a.default.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_INIT"
                })
            }

            function d(e, t, n) {
                return c(e, t, [], n)
            }

            function c(e, t, n, l) {
                return a.default.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"
                }), new Promise(a => {
                    let l = () => {
                        if (0 === t.length && 0 === n.length) return a();
                        if (t.length > 0) {
                            let n = t.pop();
                            if (null == n) return l();
                            i.default.updatePermissionOverwrite(e, n).then(l, l)
                        } else {
                            let t = n.pop();
                            if (null == t) return l();
                            i.default.clearPermissionOverwrite(e, t).then(l, l)
                        }
                    };
                    l()
                }).then(() => {
                    a.default.dispatch({
                        type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",
                        silent: l
                    })
                })
            }
        },
        330853: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("312916"),
                l = {
                    clearDraft(e, t) {
                        a.default.dispatch({
                            type: "DRAFT_CLEAR",
                            channelId: e,
                            draftType: t
                        })
                    },
                    saveDraft(e, t, n) {
                        a.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e,
                            draft: t,
                            draftType: n
                        })
                    },
                    changeDraft(e, t, n) {
                        a.default.dispatch({
                            type: "DRAFT_CHANGE",
                            channelId: e,
                            draft: t,
                            draftType: n
                        })
                    },
                    changeThreadSettings(e, t) {
                        a.default.dispatch({
                            type: "THREAD_SETTINGS_DRAFT_CHANGE",
                            channelId: e,
                            draft: t
                        })
                    }
                }
        },
        389920: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return em
                }
            }), n("627341"), n("789020");
            var a = n("278074"),
                l = n("996855"),
                i = n("454836"),
                r = n("24135"),
                s = n("312916"),
                u = n("237091"),
                o = n("53575"),
                d = n("244180"),
                c = n("366598"),
                f = n("763617"),
                E = n("217638"),
                _ = n("691529"),
                h = n("992545"),
                g = n("841869"),
                S = n("615538"),
                m = n("706608"),
                p = n("354831"),
                T = n("315607"),
                A = n("740303"),
                I = n("442409"),
                C = n("860165"),
                M = n("702532"),
                N = n("572291"),
                R = n("642201"),
                L = n("55567"),
                O = n("608425"),
                D = n("924093"),
                y = n("818147"),
                b = n("10245"),
                U = n("232356"),
                v = n("23787"),
                G = n("278018"),
                P = n("375844");
            n("687008");
            var w = n("416463"),
                F = n("361820"),
                k = n("614681"),
                H = n("267951"),
                x = n("167555"),
                B = n("311545"),
                V = n("262047"),
                Y = n("731865");
            n("276982");
            var W = n("869817"),
                K = n("162256"),
                q = n("197905"),
                Q = n("565639"),
                $ = n("417223"),
                j = n("232733"),
                X = n("632706"),
                z = n("417698"),
                J = n("871831"),
                Z = n("328470"),
                ee = n("152551"),
                et = n("984362"),
                en = n("313652"),
                ea = n("312630"),
                el = n("488867"),
                ei = n("84819"),
                er = n("992888"),
                es = n("467006"),
                eu = n("551835"),
                eo = n("846475"),
                ed = n("30175");
            let ec = new g.default("MessageActionCreators"),
                ef = new g.default("MessageQueue"),
                eE = !1;
            class e_ {
                markComplete() {
                    this.completed = !0
                }
                constructor() {
                    this.completed = !1
                }
            }

            function eh(e) {
                let {
                    inviteKey: t,
                    channelId: n,
                    messageId: a,
                    location: l,
                    suggested: i = null,
                    overrideProperties: r = {}
                } = e, s = (0, I.parseExtraDataFromInviteKey)(t), u = Y.default.getChannel(n);
                if (null != u) {
                    let e = null;
                    u.isMultiUserDM() ? e = es.LoggingInviteTypes.GDM_INVITE : !u.isPrivate() && (e = es.LoggingInviteTypes.SERVER_INVITE);
                    let n = {},
                        o = W.default.getInvite(t);
                    if (null != o && o.state === es.InviteStates.RESOLVED && null != o.channel) {
                        let t = o.channel;
                        n.invite_channel_id = t.id, n.invite_guild_id = o.guild?.id, n.invite_channel_type = t.type, null != o.inviter && (n.invite_inviter_id = o.inviter.id);
                        let a = B.default.getLastActiveStream();
                        if (null != a && a.channelId === t.id) {
                            e = es.LoggingInviteTypes.STREAM, n.destination_user_id = a.ownerId;
                            let t = (0, p.getStreamerApplication)(a, Q.default);
                            n.application_id = null != t ? t.id : null
                        }
                    }
                    null != i && (n.is_suggested = i.isAffinitySuggestion, n.row_num = i.rowNum, n.num_total = i.numTotal, n.num_affinity_connections = i.numAffinityConnections, n.is_filtered = i.isFiltered), n = {
                        ...n,
                        location: l,
                        invite_type: e,
                        invite_code: s.baseCode,
                        guild_id: u.getGuildId(),
                        channel_id: u.id,
                        message_id: a,
                        send_type: es.SendTypes.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: s.guildScheduledEventId,
                        ...r
                    }, d.default.trackWithMetadata(es.AnalyticEvents.INVITE_SENT, n)
                } else {
                    let e = {},
                        n = W.default.getInvite(t);
                    null != n && n.state === es.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
                        ...e,
                        location: l,
                        invite_type: es.LoggingInviteTypes.FRIEND_INVITE,
                        invite_code: s.baseCode,
                        message_id: a,
                        send_type: es.SendTypes.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: s.guildScheduledEventId,
                        ...r
                    }, d.default.trackWithMetadata(es.AnalyticEvents.INVITE_SENT, e))
                }
            }
            let eg = {
                    [es.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
                        messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
                        messageGetter: () => ed.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
                    },
                    [es.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
                        messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
                        messageGetter: () => ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                            helpUrl: ea.default.getArticleURL(es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                        })
                    },
                    [es.AbortCodes.RATE_LIMIT_DM_OPEN]: {
                        messageName: "BOT_DM_RATE_LIMITED",
                        messageGetter: () => ed.default.Messages.BOT_DM_RATE_LIMITED
                    },
                    [es.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
                        messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                        messageGetter: () => ed.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    },
                    [es.AbortCodes.SLOWMODE_RATE_LIMITED]: {
                        messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                        messageGetter: () => ed.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    }
                },
                eS = {
                    receiveMessage(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        s.default.dispatch({
                            type: "MESSAGE_CREATE",
                            channelId: e,
                            message: t,
                            optimistic: n,
                            sendMessageOptions: a,
                            isPushNotification: !1
                        })
                    },
                    sendBotMessage(e, t, n, a) {
                        null != n && d.default.trackWithMetadata(es.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
                            message_author: "Clyde",
                            message_name: n
                        }), eS.receiveMessage(e, (0, O.createBotMessage)({
                            messageId: a,
                            channelId: e,
                            content: t,
                            loggingName: n
                        }))
                    },
                    sendClydeError(e) {
                        let t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            l = Y.default.getChannel(e);
                        null != l && (a === es.AbortCodes.SLOWMODE_RATE_LIMITED ? (t = ed.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                            seconds: l.rateLimitPerUser
                        }), n = "SLOWMODE_RATE_LIMITED") : a === es.AbortCodes.INVALID_MESSAGE_SEND_USER ? (t = ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                            helpUrl: ea.default.getArticleURL(es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                        }), n = "INVALID_MESSAGE_SEND_USER") : a === es.AbortCodes.TOO_MANY_THREADS ? (t = l.isForumLikeChannel() || l.isForumPost() ? ed.default.Messages.BOT_DM_TOO_MANY_POSTS : ed.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS") : a === es.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ed.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : a === es.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ed.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
                            helpUrl: es.MarketingURLs.HARMFUL_LINKS
                        }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : a in eg ? (n = eg[a].messageName, t = eg[a].messageGetter()) : (t = ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                            helpUrl: ea.default.getArticleURL(es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                        }), n = `SEND_FAILED (${a})`), eS.sendBotMessage(e, t, n))
                    },
                    sendExplicitMediaClydeError(e, t, n) {
                        let l = Y.default.getChannel(e);
                        if (null == l) return;
                        let {
                            message: i,
                            messageName: r
                        } = (0, a.match)({
                            isDM: l.isDM(),
                            isGDM: l.isGroupDM()
                        }).with({
                            isDM: !0
                        }, () => ({
                            message: ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                            messageName: "BOT_DM_EXPLICIT_CONTENT"
                        })).with({
                            isDM: !1,
                            isGDM: !0
                        }, () => ({
                            message: ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                            messageName: "BOT_GDM_EXPLICIT_CONTENT"
                        })).otherwise(() => ({
                            message: ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
                            messageName: "BOT_GUILD_EXPLICIT_CONTENT"
                        })), u = (0, O.createNonce)();
                        eS.sendBotMessage(e, i, r, u), (0, S.trackMediaRedactionAction)({
                            action: S.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                            messageId: u,
                            channelId: e,
                            context: n
                        }), null != t && t.length > 0 && s.default.dispatch({
                            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                            messageId: u,
                            channelId: e,
                            attachments: t
                        })
                    },
                    truncateMessages(e, t, n) {
                        s.default.dispatch({
                            type: "TRUNCATE_MESSAGES",
                            channelId: e,
                            truncateBottom: t,
                            truncateTop: n
                        })
                    },
                    clearChannel(e) {
                        s.default.dispatch({
                            type: "CLEAR_MESSAGES",
                            channelId: e
                        })
                    },
                    jumpToPresent(e, t) {
                        eS.trackJump(e, null, "Present");
                        let n = {
                            present: !0
                        };
                        K.default.hasPresent(e) ? s.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            jump: n,
                            channelId: e,
                            limit: t
                        }) : eS.fetchMessages({
                            channelId: e,
                            limit: t,
                            jump: n
                        })
                    },
                    trackJump(e, t, n, a) {
                        d.default.trackWithMetadata(es.AnalyticEvents.JUMP, {
                            context: n,
                            channel_id: e,
                            message_id: t,
                            ...a
                        })
                    },
                    jumpToMessage(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            flash: a = !1,
                            offset: l,
                            context: i,
                            extraProperties: r = null,
                            isPreload: s,
                            returnMessageId: u,
                            skipLocalFetch: o,
                            jumpType: d
                        } = e;
                        return "string" == typeof i && eS.trackJump(t, n, i, r), eS.fetchMessages({
                            channelId: t,
                            limit: es.MAX_MESSAGES_FOR_JUMP,
                            jump: {
                                messageId: n,
                                flash: a,
                                offset: l,
                                returnMessageId: u,
                                jumpType: d
                            },
                            isPreload: s,
                            skipLocalFetch: o
                        })
                    },
                    focusMessage(e) {
                        let {
                            channelId: t,
                            messageId: n
                        } = e;
                        eS.fetchMessages({
                            channelId: t,
                            limit: es.MAX_MESSAGES_FOR_JUMP,
                            focus: {
                                messageId: n
                            }
                        })
                    },
                    fetchMessages(e) {
                        let {
                            channelId: t,
                            before: n,
                            after: a,
                            limit: l,
                            jump: r,
                            focus: o,
                            isPreload: d,
                            skipLocalFetch: c,
                            truncate: f
                        } = e, E = Y.default.getChannel(t), _ = m.default.isConnectedOrOverlay(), h = Date.now();
                        if (null != E && E.type === es.ChannelTypes.GUILD_STORE) return !1;
                        if (t === eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
                        if (ec.log(`Fetching messages for ${t} between ${n} and ${a}. jump=${JSON.stringify(r)}`), eS._tryFetchMessagesCached({
                                channelId: t,
                                before: n,
                                after: a,
                                limit: l,
                                jump: r,
                                focus: o,
                                truncate: f
                            })) return;
                        x.default.fetchMessages.recordStart();
                        let g = r ?? void 0;
                        null == g && null != o && (g = {
                            ...o
                        });
                        let S = u.default.getOrCreate(t).loadStart(g);
                        u.default.commit(S), s.default.dispatch({
                            type: "LOAD_MESSAGES"
                        });
                        let p = g?.messageId,
                            T = new e_;
                        return !c && this.fetchLocalMessages(t, n, a, l, T), i.default.get({
                            url: es.Endpoints.MESSAGES(t),
                            query: {
                                before: n,
                                after: a,
                                limit: l,
                                around: p,
                                preload: d
                            },
                            retries: 2,
                            oldFormErrors: !0
                        }).then(e => (x.default.fetchMessages.recordEnd(), x.default.dispatchMessages.measure(() => {
                            let i = e.body,
                                u = null != n,
                                o = null != a,
                                d = null == n && null == a,
                                c = null != p || i.length === l && (u || d),
                                E = null != p || o && i.length === l;
                            if (null != p) {
                                let e = Math.floor(l / 2),
                                    n = [p, ...i.map(e => {
                                        let {
                                            id: t
                                        } = e;
                                        return t
                                    })].filter((e, t, n) => n.indexOf(e) === t).sort(ei.default.compare).indexOf(p);
                                if (n < e && (c = !1), i.length - n < e && (E = !1), E && i.length > 0) {
                                    let e = $.default.lastMessageId(t);
                                    i[0].id === e && (E = !1)
                                }
                            }
                            ec.log(`Fetched ${i.length} messages for ${t} isBefore:${u} isAfter:${o}`), T.markComplete(), s.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS",
                                channelId: t,
                                messages: i,
                                isBefore: u,
                                isAfter: o,
                                hasMoreBefore: c,
                                hasMoreAfter: E,
                                limit: l,
                                jump: r,
                                isStale: !_ || m.default.lastTimeConnectedChanged() >= h,
                                truncate: f
                            })
                        }), !0), () => (ec.log(`Failed to fetch messages for ${t}`), s.default.dispatch({
                            type: "LOAD_MESSAGES_FAILURE",
                            channelId: t
                        }), !1))
                    },
                    async fetchLocalMessages(e, t, n, a, l) {
                        let i = Y.default.getBasicChannel(e),
                            r = u.default.getOrCreate(e),
                            o = c.default.database();
                        if (null == o || null == i || null != t || null != n) {
                            x.default.addLocalMessages(e, -1);
                            return
                        }
                        if (r.ready && !r.cached) {
                            x.default.addLocalMessages(e, -2);
                            return
                        }
                        let d = await (0, f.tryLoadAsync)(() => E.default.load(o, e, a));
                        if (null == d) {
                            x.default.addLocalMessages(e, -3);
                            return
                        }
                        if (ec.log(`fetched ${d.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${l.completed})`), x.default.addLocalMessages(e, d.messages.length), !l.completed && d.messages.length > 0) {
                            let t = d.messages.length >= a && d.connectionId === m.default.lastTimeConnectedChanged();
                            s.default.dispatch({
                                type: "LOCAL_MESSAGES_LOADED",
                                guildId: i.guild_id,
                                channelId: e,
                                users: d.users,
                                members: d.members,
                                messages: d.messages,
                                stale: !t
                            })
                        }
                    },
                    async fetchNewLocalMessages(e, t) {
                        let n = Y.default.getBasicChannel(e),
                            a = c.default.database();
                        if (null == a || null == n) return;
                        let l = u.default.getOrCreate(e);
                        if (l.hasMoreAfter) return;
                        let i = await (0, f.tryLoadAsync)(() => E.default.load(a, e, t));
                        if (null == i) return;
                        l = u.default.getOrCreate(e);
                        let r = l.last()?.id,
                            o = null == r ? i.messages : i.messages.filter(e => ei.default.compare(e.id, r) > 0);
                        ec.log(`Fetched ${i.messages.length} messages from the cache after foregrounding. ${o.length} are new`), 0 !== o.length && s.default.dispatch({
                            type: "LOCAL_MESSAGES_LOADED",
                            guildId: n.guild_id,
                            channelId: e,
                            users: i.users,
                            members: i.members,
                            messages: o,
                            stale: !0
                        })
                    },
                    _tryFetchMessagesCached(e) {
                        let {
                            channelId: t,
                            before: n,
                            after: a,
                            limit: l,
                            jump: i,
                            focus: r,
                            truncate: u
                        } = e, o = K.default.getMessages(t);
                        if (o.cached || !o.ready) return !1;
                        if (i?.messageId != null || r?.messageId != null) {
                            if (i?.messageId != null && o.has(i.messageId, !1)) return s.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                jump: i,
                                limit: l,
                                truncate: u
                            }), !0;
                            if (r?.messageId != null) {
                                if (o.has(r.messageId, !1)) return s.default.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                    channelId: t,
                                    focus: r,
                                    limit: l,
                                    truncate: u
                                }), !0;
                                i = {
                                    ...r
                                }
                            }
                            let e = i?.messageId != null ? ei.default.extractTimestamp(i?.messageId) : 0,
                                n = o.first(),
                                a = o.last();
                            if (!o.hasMoreBefore && null != n && ei.default.extractTimestamp(n.id) >= e || !o.hasMoreAfter && null != a && ei.default.extractTimestamp(a.id) <= e || null != n && null != a && ei.default.extractTimestamp(n.id) < e && ei.default.extractTimestamp(a.id) > e) return s.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                jump: i,
                                limit: es.MAX_MESSAGES_FOR_JUMP
                            }), !0
                        } else if (null != n && o.hasBeforeCached(n)) return s.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            before: n,
                            limit: l,
                            truncate: u
                        }), !0;
                        else if (null != a && o.hasAfterCached(a)) return s.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            after: a,
                            limit: l,
                            truncate: u
                        }), !0;
                        return !1
                    },
                    async sendMessage(e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if (t.reaction) return Promise.resolve();
                        let l = await (0, G.default)(e);
                        if (null != l) return eS.sendMessage(l, t, n, a);
                        let i = () => eS._sendMessage(e, t, a),
                            r = M.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
                                location: "8e1e29_1"
                            }).enableBackgroundSending ? N.default.backgroundify(i, void 0) : i,
                            s = a.nonce ?? (0, O.createNonce)();
                        return (a = {
                            ...a,
                            nonce: s
                        }, R.default.recordMessageSendAttempt(e, s), K.default.isReady(e)) ? r() : n && e !== eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (ef.info(`Waiting for channel ${e} to be ready before sending.`), new Promise((t, n) => {
                            K.default.whenReady(e, () => {
                                ef.info(`Channel ${e} is ready for sending now.`), r().then(t, n)
                            })
                        })) : r()
                    },
                    getSendMessageOptionsForReply(e) {
                        if (null == e) return {};
                        let t = {
                            guild_id: e.channel.getGuildId() ?? void 0,
                            channel_id: e.channel.id,
                            message_id: e.message.id
                        };
                        return {
                            messageReference: t,
                            allowedMentions: e.shouldMention ? void 0 : {
                                parse: Object.values(es.AllowedMentionTypes),
                                replied_user: !1
                            }
                        }
                    },
                    sendInvite: (e, t, n, a) => eS._sendMessage(e, {
                        content: (0, C.default)(t),
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: a ?? void 0
                    }),
                    sendActivityBookmark: (e, t, n, a) => eS._sendMessage(e, {
                        content: t,
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: a ?? void 0
                    }),
                    sendStickers(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        return eS._sendMessage(e, {
                            content: n,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                            tts: l
                        }, {
                            ...a,
                            stickerIds: t
                        })
                    },
                    sendGreetMessage(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                messageReference: a,
                                allowedMentions: l
                            } = n;
                        return i.default.post({
                            url: es.Endpoints.MESSAGES_GREET(e),
                            body: {
                                sticker_ids: [t],
                                allowed_mentions: l,
                                message_reference: a
                            },
                            oldFormErrors: !0
                        }).then(n => (L.default.donateSentMessage(n.body.content, e), eS.receiveMessage(e, n.body), s.default.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: [t]
                        }), n), t => {
                            throw ec.log("Failed to send greeting"), 429 !== t.status && eS.sendClydeError(e, t.body.code), s.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: t.body.id,
                                channelId: e
                            }), t
                        })
                    },
                    sendPollMessage(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return eS._sendMessage(e, {
                            content: "",
                            tts: !1,
                            validNonShortcutEmojis: [],
                            invalidEmojis: []
                        }, {
                            ...n,
                            poll: t
                        })
                    },
                    _sendMessage(e, t, n) {
                        let a = (0, G.default)(e);
                        if (null != a) return ef.info("Converting channel to a private channel"), a.then(e => {
                            ef.info("Finished converting channel to a private channel"), eS._sendMessage(e, t, n)
                        });
                        let i = t.content,
                            {
                                invalidEmojis: r,
                                validNonShortcutEmojis: u,
                                tts: c = !1
                            } = t,
                            {
                                activityAction: f,
                                location: E,
                                suggestedInvite: g,
                                stickerIds: S,
                                messageReference: m,
                                allowedMentions: p,
                                poll: I
                            } = n,
                            C = n.flags ?? 0,
                            [M, N] = (0, k.default)(i);
                        if (M && (i = N, C = (0, et.addFlag)(C, es.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === i && null == f && null == S && null == I) return Promise.reject(Error("not sending empty message"));
                        let y = null != m ? es.MessageTypes.REPLY : es.MessageTypes.DEFAULT,
                            w = n.nonce ?? (0, O.createNonce)();
                        if (!1 !== n.eagerDispatch) {
                            let t = (0, O.default)({
                                channelId: e,
                                content: i,
                                tts: c,
                                type: y,
                                messageReference: m,
                                allowedMentions: p,
                                flags: 0 !== C ? C : void 0,
                                nonce: w,
                                poll: (0, v.createPollServerDataFromCreateRequest)(I)
                            });
                            (0, b.updateComboOnMessageSend)(e, t.id), null != S && (t.sticker_items = S.map(e => F.default.getStickerById(e)).filter(e => null != e)), eS.receiveMessage(e, t, !0, n)
                        }
                        if (!eE && null != r && r.length > 0) {
                            let t, n;
                            eE = !0;
                            let a = J.default.getCurrentUser();
                            r.some(e => e.animated) && !el.default.canUseAnimatedEmojis(a) ? (t = ed.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : q.default.canWithPartialContext(es.Permissions.USE_EXTERNAL_EMOJIS, {
                                channelId: e
                            }) ? (t = ed.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = ed.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), eS.sendBotMessage(e, t, n)
                        }
                        let H = {
                            type: o.MessageDataType.SEND,
                            message: {
                                channelId: e,
                                content: i,
                                nonce: w,
                                tts: c,
                                message_reference: m,
                                allowed_mentions: p,
                                flags: C
                            }
                        };
                        if (null != f) {
                            let e = f.type === es.ActivityActionTypes.JOIN_REQUEST ? f?.activity.session_id : V.default.getSessionId();
                            if (null != e) {
                                let t = {
                                        type: f.type,
                                        session_id: e
                                    },
                                    {
                                        activity: n
                                    } = f;
                                null != n.party && null != n.party.id && (t.party_id = n.party.id), H.message.application_id = n.application_id, H.message.activity = t
                            }
                        }
                        return null != I && (H.message.poll = I), null != S && (H.message.sticker_ids = S), U.default.isEnabled() && (H.message.has_poggermode_enabled = !0), new Promise((t, a) => {
                            let r = Date.now(),
                                c = o.default.length,
                                f = Math.floor(1e4 * Math.random());
                            ef.info(`Queueing message to be sent LogId:${f}`), o.default.enqueue(H, o => {
                                let f = Date.now() - r;
                                if (o.ok) L.default.donateSentMessage(i, e), eS.receiveMessage(e, o.body, !0, {
                                    sendAnalytics: {
                                        duration: f,
                                        queueSize: c
                                    },
                                    poll: I
                                }), R.default.recordMessageSendApiResponse(w), s.default.dispatch({
                                    type: "SLOWMODE_RESET_COOLDOWN",
                                    slowmodeType: z.SlowmodeType.SendMessage,
                                    channelId: e
                                }), s.default.dispatch({
                                    type: "EMOJI_TRACK_USAGE",
                                    emojiUsed: u
                                }), s.default.dispatch({
                                    type: "STICKER_TRACK_USAGE",
                                    stickerIds: S
                                }), ! function(e) {
                                    let {
                                        content: t,
                                        channelId: n,
                                        messageId: a,
                                        location: i,
                                        suggested: r = null,
                                        overrideProperties: s = {}
                                    } = e;
                                    (0, h.default)(t).forEach(e => {
                                        let {
                                            type: t,
                                            code: u
                                        } = e;
                                        if (t === _.CodedLinkType.INVITE) eh({
                                            inviteKey: u,
                                            channelId: n,
                                            messageId: a,
                                            location: i,
                                            suggested: r,
                                            overrideProperties: s
                                        });
                                        else if (t === _.CodedLinkType.TEMPLATE) {
                                            let e = A.default.getGuildTemplate(u);
                                            if (null == e || e.state === eo.GuildTemplateStates.RESOLVING) return;
                                            d.default.trackWithMetadata(es.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                                                guild_template_code: u,
                                                guild_template_name: e.name,
                                                guild_template_description: e.description,
                                                guild_template_guild_id: e.sourceGuildId
                                            })
                                        } else if (t === _.CodedLinkType.BUILD_OVERRIDE);
                                        else if (t === _.CodedLinkType.MANUAL_BUILD_OVERRIDE);
                                        else if (t === _.CodedLinkType.EVENT);
                                        else if (t === _.CodedLinkType.CHANNEL_LINK);
                                        else if (t === _.CodedLinkType.APP_DIRECTORY_PROFILE) Z.default.track(es.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                                            application_id: u,
                                            device_platform: l.isMobile ? "mobile_web" : "desktop_web",
                                            guild_id: X.default.getGuildId(),
                                            channel_id: j.default.getChannelId()
                                        });
                                        else if (t === _.CodedLinkType.ACTIVITY_BOOKMARK);
                                        else if (t === _.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                                        else if (t === _.CodedLinkType.GUILD_PRODUCT);
                                        else if (t === _.CodedLinkType.SERVER_SHOP);
                                        else if (t === _.CodedLinkType.QUESTS_EMBED)(0, P.trackQuestEvent)(u, es.AnalyticEvents.QUEST_LINK_SHARED, {
                                            guild_id: X.default.getGuildId(),
                                            channel_type: Y.default.getChannel(j.default.getChannelId())?.type
                                        });
                                        else throw Error(`Unknown coded link type: ${t}`)
                                    })
                                }({
                                    content: i,
                                    channelId: e,
                                    messageId: o.body.id,
                                    location: E ?? "chat_input",
                                    suggested: g
                                }), ! function(e, t, n, a, l) {
                                    (0, en.findGiftCodes)(e).forEach(e => {
                                        let i = Y.default.getChannel(t);
                                        null != i && d.default.trackWithMetadata(es.AnalyticEvents.GIFT_CODE_SENT, {
                                            location: a,
                                            gift_code: e,
                                            guild_id: i.getGuildId(),
                                            channel_id: i.id,
                                            channel_type: i.type,
                                            message_id: n,
                                            automatic_send: l
                                        })
                                    })
                                }(i, e, o.body.id, E ?? "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(o);
                                else {
                                    ec.log("Failed to send message", {
                                        hasErr: o.hasErr,
                                        status: o.status,
                                        code: o.body?.code,
                                        error: o.err
                                    });
                                    let t = !1;
                                    if (o.hasErr) "ABORTED" === o.err.code && (t = !0);
                                    else if (o.status >= 400 && o.status < 500 && o.body) {
                                        if (o.body.code === es.AbortCodes.SLOWMODE_RATE_LIMITED) {
                                            let t = o.body.retry_after;
                                            null != t && t > 0 && s.default.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: z.SlowmodeType.SendMessage,
                                                cooldownMs: t * ee.default.Millis.SECOND
                                            })
                                        } else T.AUTOMOD_ERROR_CODES.has(o.body.code) ? s.default.dispatch({
                                            type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                            messageData: H,
                                            errorResponseBody: {
                                                code: o.body.code,
                                                message: o.body.message
                                            }
                                        }) : o.body.code === es.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? s.default.dispatch({
                                            type: "POGGERMODE_TEMPORARILY_DISABLED"
                                        }) : null != I || eS.sendClydeError(e, o.body.code)
                                    }
                                    t ? eS.deleteMessage(e, w, !0) : (s.default.dispatch({
                                        type: "MESSAGE_SEND_FAILED",
                                        messageId: w,
                                        channelId: e
                                    }), (0, D.logMessageSendFailure)({
                                        failureCode: o.hasErr ? void 0 : o.status,
                                        errorMessage: o.hasErr ? o.err.message : void 0
                                    })), a(o)
                                }
                            }, f)
                        })
                    },
                    startEditMessage(e, t, n, a) {
                        s.default.dispatch({
                            type: "MESSAGE_START_EDIT",
                            channelId: e,
                            messageId: t,
                            content: n,
                            source: a
                        })
                    },
                    updateEditMessage(e, t, n) {
                        s.default.dispatch({
                            type: "MESSAGE_UPDATE_EDIT",
                            channelId: e,
                            textValue: t,
                            richValue: n
                        })
                    },
                    endEditMessage(e, t) {
                        s.default.dispatch({
                            type: "MESSAGE_END_EDIT",
                            channelId: e,
                            response: t
                        })
                    },
                    async editMessage(e, t, n) {
                        let {
                            content: a
                        } = n;
                        await H.default.unarchiveThreadIfNecessary(e);
                        let l = function(e, t) {
                                let n = K.default.getMessage(e, t);
                                if (null == n || n.type !== es.MessageTypes.REPLY) return;
                                let a = w.default.getMessageByReference(n.messageReference);
                                if (a.state === w.ReferencedMessageState.LOADED) {
                                    if (!n.mentions.includes(a.message.author.id)) return {
                                        parse: Object.values(es.AllowedMentionTypes),
                                        replied_user: !1
                                    }
                                }
                            }(e, t),
                            i = {
                                channelId: e,
                                messageId: t,
                                content: a,
                                allowed_mentions: l
                            };
                        o.default.enqueue({
                            type: o.MessageDataType.EDIT,
                            message: i
                        }, n => {
                            let a = !n.hasErr && T.AUTOMOD_ERROR_CODES.has(n.body.code);
                            if (a) {
                                let e = {
                                    type: o.MessageDataType.EDIT,
                                    message: i
                                };
                                s.default.dispatch({
                                    type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                                    messageData: e,
                                    errorResponseBody: {
                                        code: n.body.code,
                                        message: n.body.message
                                    }
                                })
                            }
                            n.hasErr ? r.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : a ? r.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : r.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eS.endEditMessage(e, n.hasErr ? void 0 : n), eS.focusMessage({
                                channelId: e,
                                messageId: t
                            })
                        })
                    },
                    async suppressEmbeds(e, t) {
                        await H.default.unarchiveThreadIfNecessary(e), i.default.patch({
                            url: es.Endpoints.MESSAGE(e, t),
                            body: {
                                flags: es.MessageFlags.SUPPRESS_EMBEDS
                            },
                            oldFormErrors: !0
                        })
                    },
                    async patchMessageAttachments(e, t, n) {
                        await H.default.unarchiveThreadIfNecessary(e), i.default.patch({
                            url: es.Endpoints.MESSAGE(e, t),
                            body: {
                                attachments: n
                            },
                            oldFormErrors: !0
                        })
                    },
                    async deleteMessage(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = () => {
                                s.default.dispatch({
                                    type: "MESSAGE_DELETE",
                                    id: t,
                                    channelId: e
                                }).then(() => {
                                    r.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
                                })
                            };
                        n ? a() : (await H.default.unarchiveThreadIfNecessary(e), i.default.delete({
                            url: es.Endpoints.MESSAGE(e, t),
                            oldFormErrors: !0
                        }).then(() => {
                            a()
                        }));
                        let l = K.default.getMessage(e, t);
                        l?.type === es.MessageTypes.GUILD_INVITE_REMINDER && (0, y.trackGuildInviteNotificationDismissed)()
                    },
                    dismissAutomatedMessage(e) {
                        null != e.loggingName && d.default.trackWithMetadata(es.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
                            message_name: e.loggingName,
                            message_author: e.author.username
                        }), this.deleteMessage(e.channel_id, e.id, !0)
                    },
                    revealMessage(e, t) {
                        s.default.dispatch({
                            type: "MESSAGE_REVEAL",
                            channelId: e,
                            messageId: t
                        })
                    },
                    crosspostMessage: (e, t) => i.default.post({
                        url: es.Endpoints.MESSAGE_CROSSPOST(e, t),
                        oldFormErrors: !0
                    }).catch(e => {
                        let t;
                        t = 429 === e.status ? ed.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
                            retryAfter: Math.floor(e.body.retry_after / 60)
                        }) : ed.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, er.default.show({
                            title: ed.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                            body: t,
                            confirmText: ed.default.Messages.OKAY
                        })
                    }),
                    trackInvite: eh
                };
            var em = eS
        },
        800976: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("516086").createExperiment)({
                kind: "user",
                id: "2022-12_forum_activity",
                label: "Increased activity view for Forums, per user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        718693: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("516086").createExperiment)({
                kind: "guild",
                id: "2023-01_forums_activity_2_guild",
                label: "Increased activity view for Forums, per guild",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        283327: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_RANGES: function() {
                    return u
                },
                MINIMUM_RANGE: function() {
                    return s
                },
                default: function() {
                    return d
                }
            });
            var a = n("392711"),
                l = n.n(a),
                i = n("31775"),
                r = n.n(i);
            let s = 100,
                u = [
                    [0, 99]
                ];

            function o(e) {
                let t = {};
                return e.forEach((e, n) => {
                    t[n] = e
                }), t
            }
            class d {
                constructor(e) {
                    this._subscriptions = {}, this._onChange = e
                }
                reset() {
                    this._subscriptions = {}
                }
                get(e) {
                    return o(this._get(e))
                }
                _get(e) {
                    return this._subscriptions[e] ?? new(r())({
                        max: 5
                    })
                }
                clear(e) {
                    delete this._subscriptions[e]
                }
                subscribe(e, t, n) {
                    let a = this._get(e);
                    return !l().isEqual(a.get(t), n) && (a.set(t, n), this._subscriptions[e] = a, this._onChange(e, o(a)), !0)
                }
            }
        },
        591139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("392711"),
                l = n.n(a),
                i = n("767191"),
                r = n("841869"),
                s = n("152551"),
                u = n("84819");
            let o = 1 * s.default.Millis.MINUTE;
            class d {
                constructor(e) {
                    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe = new i.DelayedCall(o, () => this.flushUnsubscriptions()), this._onChange = e
                }
                reset() {
                    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe.cancel()
                }
                get(e) {
                    let t = this._subscriptions[e] ?? {};
                    return u.default.keys(t)
                }
                clear(e) {
                    delete this._subscriptions[e], delete this._unsubscriptions[e]
                }
                subscribe(e, t) {
                    let n = this._subscriptions[e] ?? {};
                    n[t] = (n[t] ?? 0) + 1, this._subscriptions[e] = n, 1 === n[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t)
                }
                isSubscribed(e, t) {
                    return null != this._subscriptions[e] && null != this._subscriptions[e][t]
                }
                isSubscribedToAnyMember(e) {
                    return this.get(e).length > 0
                }
                unsubscribe(e, t) {
                    if (!this.isSubscribed(e, t)) return;
                    let n = this._unsubscriptions[e] ?? {};
                    n[t] = (n[t] ?? 0) + 1, this._unsubscriptions[e] = n, 1 === n[t] && this._unsubscribe.delay(!1)
                }
                checkForLeaks(e, t) {
                    let n = this._subscriptions[e]?.[t] ?? 0,
                        a = n - (this._unsubscriptions[e]?.[t] ?? 0);
                    a > 5 && new r.default("GuildMemberSubscriptions").warn(`GuildMemberSubscriptions.subscribe(...): Potential reference leak! (${a} subscriptions)`)
                }
                flushUnsubscriptions() {
                    !l().isEmpty(this._unsubscriptions) && (l().forEach(this._unsubscriptions, (e, t) => {
                        let n = this._subscriptions[t];
                        l().forEach(e, (e, t) => {
                            n[t] = (n[t] ?? 0) - e, n[t] <= 0 && delete n[t]
                        }), l().isEmpty(n) && delete this._subscriptions[t], this._onChange(t, this.get(t))
                    }), this._unsubscriptions = {})
                }
            }
        },
        608066: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_RANGES: function() {
                    return r.DEFAULT_RANGES
                },
                default: function() {
                    return c
                }
            });
            var a = n("392711"),
                l = n.n(a),
                i = n("767191"),
                r = n("283327"),
                s = n("591139"),
                u = n("813300"),
                o = n("467006");

            function d(e) {
                return null != e && "null" !== e && e !== o.ME && "undefined" !== e && e !== o.FAVORITES
            }
            class c {
                constructor(e) {
                    this._members = new s.default((e, t) => this._enqueue(e, {
                        members: t
                    })), this._channels = new r.default((e, t) => this._enqueue(e, {
                        channels: t
                    })), this._threadMemberLists = new u.default((e, t) => this._enqueue(e, {
                        thread_member_lists: t
                    })), this._typing = new Set, this._threads = new Set, this._activities = new Set, this._memberUpdates = new Set, this._subscribed = new Set, this._pending = {}, this._flush = new i.DelayedCall(0, () => this.flush()), this._onChange = e
                }
                _enqueue(e, t) {
                    this._pending[e] = {
                        ...this._pending[e],
                        ...t
                    }, this._flush.delay()
                }
                reset() {
                    this._subscribed.clear(), this._pending = {}, this._members.reset(), this._memberUpdates.clear(), this._channels.reset(), this._threadMemberLists.reset(), this._typing.clear(), this._threads.clear(), this._activities.clear()
                }
                get(e) {
                    return {
                        typing: this._typing.has(e),
                        threads: this._threads.has(e),
                        activities: this._activities.has(e),
                        members: this._members.get(e),
                        member_updates: this._memberUpdates.has(e),
                        channels: this._channels.get(e),
                        thread_member_lists: this._threadMemberLists.get(e)
                    }
                }
                getSubscribedThreadIds() {
                    return this._threadMemberLists.getSubscribedThreadIds()
                }
                isSubscribedToThreads(e) {
                    return this._threads.has(e)
                }
                isSubscribedToAnyMember(e) {
                    return this._members.isSubscribedToAnyMember(e) ?? !1
                }
                isSubscribedToMemberUpdates(e) {
                    return this.get(e).member_updates ?? !1
                }
                forEach(e) {
                    this._subscribed.forEach(e)
                }
                clearWithoutFlushing(e, t) {
                    (t || !this._threads.has(e)) && this._subscribed.delete(e), delete this._pending[e], this._members.clear(e), this._channels.clear(e), this._threadMemberLists.clear(e), this._typing.delete(e), this._memberUpdates.delete(e), t && this._threads.delete(e), this._activities.delete(e)
                }
                flush() {
                    l().forEach(this._pending, (e, t) => {
                        this._subscribed.add(t)
                    }), this._onChange(this._pending), this._pending = {}
                }
                subscribeUser(e, t) {
                    d(e) && this._members.subscribe(e, t)
                }
                unsubscribeUser(e, t) {
                    d(e) && this._members.unsubscribe(e, t)
                }
                subscribeChannel(e, t, n) {
                    return !!d(e) && this._channels.subscribe(e, t, n)
                }
                subscribeToMemberUpdates(e) {
                    if (!d(e)) return !1;
                    this._enqueue(e, {
                        member_updates: !0
                    }), this._memberUpdates.add(e)
                }
                unsubscribeFromMemberUpdates(e) {
                    if (!d(e)) return !1;
                    this._enqueue(e, {
                        member_updates: !1
                    })
                }
                subscribeThreadMemberList(e, t, n) {
                    return !!d(e) && this._threadMemberLists.subscribe(e, t, n)
                }
                unsubscribeThreadMemberList(e, t) {
                    return !!d(e) && this._threadMemberLists.unsubscribe(e, t)
                }
                subscribeToGuild(e) {
                    this._subscribeToFeature(e, this._typing, {
                        typing: !0
                    }), this._subscribeToFeature(e, this._activities, {
                        activities: !0
                    }), this._subscribeToFeature(e, this._threads, {
                        threads: !0
                    })
                }
                _subscribeToFeature(e, t, n) {
                    if (!!d(e)) !t.has(e) && (t.add(e), this._enqueue(e, n))
                }
            }
        },
        813300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("31775"),
                l = n.n(a);
            class i {
                constructor(e) {
                    this._subscriptions = {}, this._onChange = e
                }
                reset() {
                    this._subscriptions = {}
                }
                get(e) {
                    return this._get(e).keys()
                }
                getSubscribedThreadIds() {
                    let e = new Set;
                    for (let t in this._subscriptions)
                        for (let n of this._subscriptions[t].keys()) e.add(n);
                    return e
                }
                _get(e) {
                    return this._subscriptions[e] ?? new(l())({
                        max: 3,
                        updateAgeOnGet: !0
                    })
                }
                clear(e) {
                    e in this._subscriptions && (delete this._subscriptions[e], this._onChange(e, []))
                }
                subscribe(e, t, n) {
                    let a = this._get(e);
                    return a.has(t) ? (a.set(t, Date.now()), !1) : (null != n && a.has(n) && a.set(n, Date.now()), a.set(t, Date.now()), this._subscriptions[e] = a, this._onChange(e, a.keys()), !0)
                }
                unsubscribe(e, t) {
                    if (!(e in this._subscriptions)) return !1;
                    let n = this._subscriptions[e];
                    return !!n.has(t) && (n.del(t), this._onChange(e, n.keys()), !0)
                }
            }
        },
        199063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                collectThreadMetadata: function() {
                    return d
                }
            });
            var a = n("521588"),
                l = n("151191"),
                i = n("759193"),
                r = n("775822"),
                s = n("197905"),
                u = n("84819"),
                o = n("467006");

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null != e && r.THREAD_CHANNEL_TYPES.has(e.type) ? {
                    location: t ? (0, a.getLastRouteChangeSource)() : void 0,
                    thread_approximate_member_count: l.default.getMemberCount(e.id),
                    thread_approximate_message_count: i.default.getCount(e.id),
                    thread_archived: e.threadMetadata?.archived === !0,
                    thread_locked: e.threadMetadata?.locked ?? !1,
                    thread_auto_archive_duration_minutes: e.threadMetadata?.autoArchiveDuration ?? 0,
                    thread_approximate_creation_date: u.default.extractTimestamp(e.id),
                    can_send_message: s.default.can(o.Permissions.SEND_MESSAGES, e),
                    parent_channel_type: e.parentChannelThreadType
                } : null
            }
        },
        217638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("370257"),
                l = n("841869"),
                i = n("706608"),
                r = n("731865"),
                s = n("366598"),
                u = n("721546"),
                o = n("619514"),
                d = n("470085"),
                c = n("840441");
            let f = new l.default("Messages");
            class E {
                constructor(e) {
                    if (this.connectionId = null, this.users = [], this.members = [], this.messages = [], e.length > 0) {
                        let t = e[0]?.connectionId,
                            [n, a] = E.computeUsersAndMembers(e);
                        e.length > 0 && e.every(e => e.connectionId === t) && (this.connectionId = t), this.users = n, this.members = a, this.messages = e.map(e => e.message)
                    }
                }
                static computeUsersAndMembers(e) {
                    (0, c.requireSortedDescending)(e);
                    let t = new Map,
                        n = new Map;
                    for (let a of e) this.addIntoMap(t, a.users, e => e.id), this.addIntoMap(n, a.members, e => e.userId);
                    return [Array.from(t.values()), Array.from(n.values())]
                }
                static addIntoMap(e, t, n) {
                    for (let a of t) {
                        let t = n(a),
                            l = e.get(t);
                        (null == l || l.incomplete && !a.incomplete) && e.set(t, a)
                    }
                }
            }
            var _ = new class e {
                async startupLoad(e, t, n, a) {
                    let l = s.default.messages(e);
                    return new E(await l.getLatest(t, n, a))
                }
                async load(e, t, n) {
                    let a = r.default.getBasicChannel(t);
                    if (null == t || null == a || !(0, d.isReadableChannel)(a)) return new E([]);
                    {
                        let l = s.default.messages(e);
                        return new E(await l.getLatest(a.guild_id, t, n))
                    }
                }
                handleMessageCreate(e, t) {
                    !e.optimistic && !e.isPushNotification && null == e.sendMessageOptions && (0, d.isReadableChannelId)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t)
                }
                handleMessageUpdate(e, t) {
                    if (null != e.message.id && null != e.message.channel_id)(0, d.isReadableChannelId)(e.message.channel_id) && (function(e) {
                        return null != e.author && null != e.content && null != e.mentions && null != e.timestamp
                    }(e.message) ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t))
                }
                handleMessagePreviewsLoaded(e, t) {
                    for (let n of e.messages)(0, d.isReadableChannelId)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t)
                }
                handleLoadMessagesSuccess(e, t) {
                    let n = r.default.getBasicChannel(e.channelId);
                    null != n && (0, d.isReadableChannelId)(e.channelId) && this.upsertMany(n.guild_id, e.channelId, e.messages, t)
                }
                handleMessageDelete(e, t) {
                    null != e.id && this.deleteOne(e.guildId, e.channelId, e.id, t)
                }
                handleMessageDeleteBulk(e, t) {
                    for (let n of e.ids) this.deleteOne(e.guildId, e.channelId, n, t)
                }
                handleChannelDelete(e, t) {
                    this.deleteChannel(e.channel.guild_id, e.channel.id, t)
                }
                handleGuildDelete(e, t) {
                    !e.guild.unavailable && this.deleteGuild(e.guild.id, t)
                }
                resetInMemoryState() {}
                insertStale(e, t, n, l) {
                    let r = s.default.messagesTransaction(l),
                        o = i.default.lastTimeConnectedChanged();
                    r.put(e, t, u.KvMessage.fromMessage(e, t, n, o), a.ConflictOptions.Skip)
                }
                upsertOne(e, t, n, l) {
                    let r = s.default.messagesTransaction(l),
                        d = i.default.lastTimeConnectedChanged();
                    r.put(e, t, u.KvMessage.fromMessage(e, t, n, d), a.ConflictOptions.Replace), r.trimChannel(e, t, o.default.saveLimit(t))
                }
                upsertMany(e, t, n, a) {
                    let l = s.default.messagesTransaction(a),
                        r = i.default.lastTimeConnectedChanged();
                    for (let a of n) l.put(e, t, u.KvMessage.fromMessage(e, t, a, r));
                    l.trimChannel(e, t, o.default.saveLimit(t))
                }
                async updateOne(e, t, n, a) {
                    if (null == n.id) {
                        f.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
                        return
                    }
                    let l = s.default.messages(a.database),
                        r = await l.get(e, t, n.id),
                        o = i.default.lastTimeConnectedChanged();
                    null != r && l.put(e, t, u.KvMessage.fromMessage(e, t, {
                        ...r.message,
                        ...n
                    }, o))
                }
                deleteOne(e, t, n, a) {
                    s.default.messagesTransaction(a).deleteMessage(e, t, n)
                }
                deleteChannel(e, t, n) {
                    s.default.messagesTransaction(n).deleteChannel(e, t)
                }
                deleteGuild(e, t) {
                    s.default.messagesTransaction(t).deleteGuild(e)
                }
                constructor() {
                    this.actions = {
                        CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        LOAD_MESSAGES_SUCCESS: (e, t) => this.handleLoadMessagesSuccess(e, t),
                        MESSAGE_CREATE: (e, t) => this.handleMessageCreate(e, t),
                        MESSAGE_DELETE_BULK: (e, t) => this.handleMessageDeleteBulk(e, t),
                        MESSAGE_DELETE: (e, t) => this.handleMessageDelete(e, t),
                        MESSAGE_PREVIEWS_LOADED: (e, t) => this.handleMessagePreviewsLoaded(e, t),
                        MESSAGE_UPDATE: (e, t) => this.handleMessageUpdate(e, t)
                    }
                }
            }
        },
        721546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                KvMessage: function() {
                    return r
                }
            }), n("653041");
            var a = n("361733"),
                l = n("871831"),
                i = n("467006");
            class r {
                static fromMessage(e, t, n, a) {
                    let [l, i] = r.deriveMemberUsers(e, n);
                    return {
                        id: n.id,
                        channelId: t,
                        message: n,
                        members: l,
                        users: i,
                        connectionId: a
                    }
                }
                static deriveMemberUsers(e, t) {
                    let n = new Set([t.author?.id, t.interaction?.user.id, ...t.mentions?.map(e => e.id) ?? []]),
                        r = [],
                        s = [];
                    for (let t of n) {
                        if (null == t) continue;
                        let n = l.default.getUser(t),
                            u = a.default.getTrueMember(e ?? i.EMPTY_STRING_GUILD_ID, t);
                        null != n && s.push(n), null != u && r.push(u)
                    }
                    return [r, s]
                }
            }
        },
        619514: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var a = n("731865"),
                l = n("362753"),
                i = n("232733"),
                r = n("12480"),
                s = n("597220"),
                u = n("168419"),
                o = n("487958"),
                d = n("422098"),
                c = n("359936"),
                f = n("470085"),
                E = n("501178");
            let _ = null,
                h = new u.ExtendedMemoryLru(750, 500),
                g = new o.Lru(15),
                S = !1;
            class m extends r.default {
                static #e = this.displayName = "SaveableChannelsStore";
                static #t = this.LATEST_SNAPSHOT_VERSION = 1;
                constructor() {
                    super({
                        CACHE_LOADED_LAZY_NO_CACHE: O,
                        CACHE_LOADED_LAZY: () => this.loadCache(),
                        CHANNEL_DELETE: C,
                        CHANNEL_UPDATES: I,
                        CONNECTION_OPEN_SUPPLEMENTAL: T,
                        GUILD_DELETE: R,
                        LOGIN_SUCCESS: L,
                        THREAD_DELETE: N,
                        THREAD_UPDATE: M
                    })
                }
                initialize() {
                    this.waitFor(a.default), this.waitFor(i.default), this.waitFor(l.default), this.syncWith([s.default], () => !0), this.syncWith([i.default], p)
                }
                loadCache() {
                    let e = this.readSnapshot(m.LATEST_SNAPSHOT_VERSION);
                    null != e && (S = !0, m.mergeSnapshot(e))
                }
                canEvictOrphans() {
                    return S
                }
                saveLimit(e) {
                    let t = a.default.getBasicChannel(e);
                    return null != t && (0, c.isPrivateChannel)(t) || null != t && h.has(e) ? 25 : 1
                }
                getSaveableChannels() {
                    let e = a.default.getChannelIds(null).map(e => ({
                        guildId: null,
                        channelId: e
                    }));
                    return s.default.isLowDisk ? null != _ ? [...e, _] : e : [...e, ...h.values()]
                }
                takeSnapshot() {
                    return {
                        version: m.LATEST_SNAPSHOT_VERSION,
                        data: {
                            channels: [...h.allValues()].filter(e => !e.fallback),
                            penalized: [...g.keys()],
                            lastChannel: _
                        }
                    }
                }
                static mergeSnapshot(e) {
                    let t = h,
                        n = g;
                    for (let n of (h = new u.ExtendedMemoryLru(h.primaryCapacity, h.extendedCapacity), g = new o.Lru(g.capacity), _ = _ ?? e.lastChannel, [e.channels, t.values()]))
                        for (let e of n) !e.fallback && h.put(e.channelId, e);
                    for (let t of [e.penalized, n.keys()])
                        for (let e of t) g.put(e, null)
                }
                static recordChannel(e) {
                    let t = a.default.getBasicChannel(e);
                    if (null != t && (0, f.isReadableChannel)(t)) {
                        let n = {
                            guildId: t.guild_id ?? null,
                            channelId: e,
                            channelType: t.type
                        };
                        _ = n, h.put(e, n), (0, d.isLimitedChannel)(t) && null != g.put(e, null) && h.delete(e)
                    }
                }
                static deleteChannel(e) {
                    h.delete(e)
                }
                static deleteGuild(e) {
                    for (let t of h.allValues()) t.guildId === e && h.delete(t.channelId)
                }
                static dropUnreachableChannels() {
                    for (let e of h.keys()) {
                        let t = a.default.getBasicChannel(e);
                        !(0, f.isReadableChannel)(t) && m.deleteChannel(e)
                    }
                }
                static deleteUnreadableGuildChannels(e) {
                    for (let t of h.values()) e === t.guildId && !(0, f.isReadableChannelId)(t.channelId) && m.deleteChannel(t.channelId)
                }
                static replaceLru(e) {
                    h = e
                }
            }

            function p() {
                let e = i.default.getChannelId();
                null != e && m.recordChannel(e)
            }

            function T() {
                m.dropUnreachableChannels(), m.replaceLru((0, E.withFallbacks)(h, 1250))
            }

            function A(e) {
                let t = e.id,
                    n = (0, f.isReadableChannel)(e),
                    a = i.default.getChannelId();
                n && t === a && m.recordChannel(t), !n && m.deleteChannel(t)
            }

            function I(e) {
                for (let t of e.channels) A(t)
            }

            function C(e) {
                m.deleteChannel(e.channel.id)
            }

            function M(e) {
                A(e.channel)
            }

            function N(e) {
                m.deleteChannel(e.channel.id)
            }

            function R(e) {
                return !e.guild.unavailable && (m.deleteGuild(e.guild.id), !0)
            }

            function L(e) {
                h.clear(), g.clear(), S = !1
            }

            function O(e) {
                S = !0
            }
            var D = new m
        },
        422098: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isLimitedChannel: function() {
                    return i
                }
            }), n("731865");
            var a = n("362753"),
                l = n("467006");

            function i(e) {
                let t = a.default.getMemberCount(e?.guild_id) ?? 0;
                return null != e && e.type !== l.ChannelTypes.DM && e.type !== l.ChannelTypes.GROUP_DM && t >= 1e4
            }
        },
        359936: function(e, t, n) {
            "use strict";

            function a(e) {
                return null == e.guild_id
            }
            n.r(t), n.d(t, {
                isPrivateChannel: function() {
                    return a
                }
            })
        },
        470085: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isReadableChannel: function() {
                    return u
                },
                isReadableChannelId: function() {
                    return o
                }
            });
            var a = n("775822"),
                l = n("731865"),
                i = n("197905"),
                r = n("467006");
            let s = r.BasicPermissions.VIEW_CHANNEL | r.BasicPermissions.READ_MESSAGE_HISTORY;

            function u(e) {
                return null != e && (e.type === r.ChannelTypes.DM || e.type === r.ChannelTypes.GROUP_DM || (0, a.isTextChannel)(e.type) && i.default.canBasicChannel(s, e))
            }

            function o(e) {
                return null != e && u(l.default.getBasicChannel(e))
            }
        },
        501178: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                withFallbacks: function() {
                    return o
                }
            });
            var a = n("731865"),
                l = n("880315"),
                i = n("168419"),
                r = n("422098"),
                s = n("470085"),
                u = n("467006");

            function o(e, t) {
                if (e.totalLength >= t) return e;
                let n = new i.ExtendedMemoryLru(e.primaryCapacity, e.extendedCapacity),
                    o = t - e.totalLength;
                for (let t of l.default.getGuildFolders())
                    for (let l of t.guildIds)
                        for (let t of Object.values(a.default.getMutableBasicGuildChannelsForGuild(l)))
                            if (function(e) {
                                    return e.type === u.ChannelTypes.DM || e.type === u.ChannelTypes.GROUP_DM || e.type === u.ChannelTypes.GUILD_TEXT
                                }(t) && (0, s.isReadableChannel)(t) && !(0, r.isLimitedChannel)(t) && function(e, t, n) {
                                    !n.hasExtended(t.id) && n.put(t.id, {
                                        guildId: e,
                                        channelId: t.id,
                                        channelType: t.type,
                                        fallback: !0
                                    })
                                }(l, t, n), n.totalLength >= o) return d(n, e);
                return d(n, e)
            }

            function d(e, t) {
                for (let [n, a] of t.allEntries()) e.put(n, a);
                return e
            }
        },
        597220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("647721"),
                l = n("312916"),
                i = n("841869"),
                r = n("152551"),
                s = n("366598");
            let u = new i.default("FileSystemStore"),
                o = 10 * r.default.Millis.MINUTE;
            class d extends a.default {
                constructor() {
                    super(l.default, {
                        APP_STATE_UPDATE: e => this.handleAppStateUpdate(e),
                        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
                    }), this.isLowDisk = !1, this.refresh(), this.waitFor(s.default), setInterval(() => this.refresh(), o)
                }
                handlePostConnectionOpen() {
                    return this.refresh(), !1
                }
                handleAppStateUpdate(e) {
                    return "active" !== e.state && this.refresh(), !1
                }
                async refresh() {
                    let e = await s.default.database()?.fsInfo()?.catch(e => u.warn("couldn't get fs info", e));
                    if (null != e) {
                        let t = e.fs.available < 268435456 || e.fs.available < 3 * e.database.used || e.fs.available < 2 * e.database.total,
                            n = e.fs.available > 805306368 && e.fs.available > 4 * e.database.used && e.fs.available > 4 * e.database.total,
                            a = !!t || !n && null;
                        null != a && this.isLowDisk !== a && (this.isLowDisk = a, this.emitChange())
                    }
                }
            }
            var c = new d
        },
        168419: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ExtendedMemoryLru: function() {
                    return i
                }
            });
            var a = n("860350"),
                l = n("487958");
            class i {
                constructor(e, t) {
                    this.primary = new l.Lru(e), this.extended = new l.Lru(t)
                }
                get totalLength() {
                    return this.primary.length + this.extended.length
                }
                get primaryCapacity() {
                    return this.primary.capacity
                }
                get extendedCapacity() {
                    return this.extended.capacity
                }
                clear() {
                    this.primary.clear(), this.extended.clear()
                }
                has(e) {
                    return this.primary.has(e)
                }
                hasExtended(e) {
                    return this.primary.has(e) || this.extended.has(e)
                }
                get(e) {
                    return this.primary.get(e)
                }
                put(e, t) {
                    let n = this.primary.put(e, t);
                    void 0 !== n && this.extended.put(n[0], n[1])
                }
                delete(e) {
                    let t = this.primary.delete(e),
                        n = this.extended.delete(e);
                    return this.upstreamItems(), t || n
                }
                upstreamItems() {
                    if (this.canUpstreamItems()) {
                        for (let [e, t] of this.extended.entries())
                            if (this.primary.put(e, t), this.extended.delete(e), !this.canUpstreamItems()) break
                    }
                }
                canUpstreamItems() {
                    return this.primary.length < this.primary.capacity && this.extended.length > 0
                }
                entries() {
                    return this.primary.entries()
                }
                keys() {
                    return this.primary.keys()
                }
                values() {
                    return this.primary.values()
                }
                allEntries() {
                    return a.chain(this.extended.entries(), this.primary.entries())
                }
                allKeys() {
                    return a.chain(this.extended.keys(), this.primary.keys())
                }
                allValues() {
                    return a.chain(this.extended.values(), this.primary.values())
                }
            }
        },
        860350: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                chain: function() {
                    return l
                }
            });
            class a {
                [Symbol.iterator]() {
                    return this
                }
                constructor(e) {
                    this.index = 0, this.items = e
                }
                next() {
                    for (; this.index < this.items.length;) {
                        let e = this.items[this.index].next();
                        if (!e.done) return e;
                        this.index += 1
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            }

            function l() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new a(t)
            }
        },
        487958: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Lru: function() {
                    return a
                }
            });
            class a {
                get length() {
                    return this.items.size
                }
                get capacity() {
                    return this.limit
                }
                constructor(e) {
                    this.items = new Map, this.limit = e
                } [Symbol.iterator]() {
                    return this.items.entries()
                }
                entries() {
                    return this.items.entries()
                }
                keys() {
                    return this.items.keys()
                }
                values() {
                    return this.items.values()
                }
                ordered() {
                    return [...this.items.values()].reverse()
                }
                clear() {
                    this.items.clear()
                }
                has(e) {
                    return this.items.has(e)
                }
                get(e) {
                    return this.items.get(e)
                }
                put(e, t) {
                    if (this.items.delete(e), this.items.set(e, t), !!(this.items.size > this.limit)) {
                        let e = this.oldestKey(),
                            t = this.items.get(e);
                        return this.items.delete(e), [e, t]
                    }
                }
                delete(e) {
                    return this.items.delete(e)
                }
                oldestKey() {
                    return this.items.keys().next().value
                }
            }
        },
        24384: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchCommand: function() {
                    return T
                },
                fetchCommands: function() {
                    return A
                },
                fetchCommandsForApplication: function() {
                    return I
                },
                performAutocomplete: function() {
                    return p
                },
                querySearchManager: function() {
                    return m
                },
                setActiveCommand: function() {
                    return E
                },
                setPreferredCommandId: function() {
                    return _
                },
                updateApplicationGuildCommandPermissions: function() {
                    return S
                },
                updateOptionStates: function() {
                    return h
                },
                updateOptionValidationStates: function() {
                    return g
                },
                updateRegistry: function() {
                    return C
                }
            });
            var a = n("512722"),
                l = n.n(a),
                i = n("454836"),
                r = n("312916"),
                s = n("243770"),
                u = n("262047"),
                o = n("84819"),
                d = n("429889"),
                c = n("150117"),
                f = n("467006");

            function E(e) {
                let {
                    channelId: t,
                    command: n,
                    section: a,
                    location: i,
                    initialValues: s,
                    triggerSection: u,
                    queryLength: o
                } = e;
                null != n && l()(n.inputType !== c.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder"), r.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                    channelId: t,
                    command: n,
                    section: a,
                    initialValues: s,
                    location: i,
                    triggerSection: u,
                    queryLength: o
                })
            }

            function _(e, t) {
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                    channelId: e,
                    commandId: t
                })
            }

            function h(e, t) {
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                    channelId: e,
                    changedOptionStates: t
                })
            }

            function g(e, t) {
                h(e, Object.fromEntries(Object.entries(t).map(e => {
                    let [t, n] = e;
                    return [t, {
                        lastValidationResult: n
                    }]
                })))
            }

            function S(e, t, n, a) {
                return i.default.put({
                    body: {
                        permissions: a
                    },
                    url: f.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
                })
            }
            let m = (e, t, n, a, l) => {
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
                    context: e,
                    query: t,
                    limit: n,
                    commandType: a,
                    applicationId: l
                })
            };

            function p(e, t, n) {
                l()(null != t.autocomplete, "Missing autocomplete context");
                let {
                    query: a,
                    name: c
                } = t.autocomplete, E = o.default.fromTimestamp(Date.now());
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
                    nonce: E,
                    channelId: t.channel.id,
                    query: a,
                    name: c
                }), null == d.default.getAutocompleteChoices(t.channel.id, c, a) && i.default.post({
                    url: f.Endpoints.INTERACTIONS,
                    body: {
                        type: s.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
                        application_id: e.applicationId,
                        guild_id: t.guild?.id,
                        channel_id: t.channel.id,
                        session_id: u.default.getSessionId(),
                        data: n,
                        nonce: E
                    },
                    timeout: 3e3
                }).catch(() => {
                    r.default.dispatch({
                        type: "INTERACTION_FAILURE",
                        nonce: E
                    })
                })
            }

            function T(e, t, n) {
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_FETCH",
                    channelId: t,
                    commandId: n,
                    guildId: e
                })
            }

            function A(e, t, n) {
                r.default.dispatch({
                    type: "APPLICATION_COMMANDS_FETCH",
                    channelId: t,
                    commandIds: n,
                    guildId: e
                })
            }

            function I(e) {
                let {
                    guildId: t,
                    channelId: n,
                    applicationId: a
                } = e;
                r.default.dispatch({
                    type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION",
                    channelId: n,
                    guildId: t,
                    applicationId: a
                })
            }

            function C(e, t, n) {
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_REGISTRY_UPDATE",
                    applications: t,
                    commands: e,
                    channelId: n
                })
            }
        },
        429889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("661223"),
                l = n("312916"),
                i = n("696923");
            let r = new Map,
                s = new Map;

            function u(e) {
                return !s.has(e) && s.set(e, {
                    commandId: i.default.getActiveCommand(e)?.id,
                    optionName: i.default.getActiveOptionName(e),
                    optionNameToAutocompleteQueries: new Map,
                    optionNameToLastResults: new Map,
                    optionNameToNonce: new Map,
                    optionNameToLastQuery: new Map,
                    lastErrored: !1,
                    lastResponseNonce: void 0
                }), s.get(e)
            }

            function o() {
                return r.clear(), s.clear(), !0
            }

            function d(e) {
                let {
                    channelId: t,
                    command: n
                } = e;
                c(t, n?.id)
            }

            function c(e, t) {
                let n = i.default.getActiveOptionName(e),
                    a = s.get(e);
                return null != a && (t !== a.commandId || n !== a.optionName) && (null != t && t !== a.commandId && (a.optionNameToLastResults.clear(), a.optionNameToNonce.clear(), a.optionNameToLastQuery.clear(), a.optionNameToAutocompleteQueries.clear()), a.lastErrored = !1, a.commandId = t, a.optionName = n, !0)
            }
            class f extends a.default.Store {
                static #e = this.displayName = "ApplicationCommandAutocompleteStore";
                initialize() {
                    this.waitFor(i.default)
                }
                getLastErrored(e) {
                    return u(e).lastErrored
                }
                getAutocompleteChoices(e, t, n) {
                    let a = u(e);
                    return a.optionNameToAutocompleteQueries.get(t)?.get(n)
                }
                getAutocompleteLastChoices(e, t) {
                    return u(e).optionNameToLastResults.get(t)
                }
                getLastResponseNonce(e) {
                    return u(e).lastResponseNonce
                }
            }
            var E = new f(l.default, {
                CONNECTION_OPEN: o,
                LOGOUT: o,
                CHANNEL_SELECT: o,
                APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
                    let {
                        nonce: t,
                        channelId: n,
                        query: a,
                        name: l
                    } = e, i = u(n);
                    if (i.optionNameToLastQuery.get(l) === a) return !1;
                    i.optionNameToLastQuery.set(l, a);
                    let s = i.optionNameToAutocompleteQueries.get(l)?.get(a);
                    if (null != s) return i.lastErrored = !1, i.optionNameToLastResults.set(l, s), !0;
                    let o = i.optionNameToNonce.get(l);
                    if (null != o && r.delete(o), r.set(t, {
                            channelId: n,
                            query: a,
                            name: l
                        }), i.optionNameToNonce.set(l, t), i.lastErrored) return i.lastErrored = !1, !0
                },
                APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
                    let {
                        choices: t,
                        nonce: n
                    } = e, a = r.get(n);
                    if (null == a) return !1;
                    r.delete(n);
                    let l = t?.map(e => ({
                            ...e,
                            displayName: e.name_localized ?? e.name
                        })) ?? [],
                        i = u(a.channelId);
                    return null == i.optionNameToAutocompleteQueries.get(a.name) && i.optionNameToAutocompleteQueries.set(a.name, new Map), i.optionNameToAutocompleteQueries.get(a.name)?.set(a.query, l), i.optionNameToLastQuery.get(a.name) === a.query && (i.lastErrored = !1, i.optionNameToLastResults.set(a.name, l)), i.lastResponseNonce = n, !0
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    if (null == t) return !1;
                    let n = r.get(t);
                    return null != n && (r.delete(t), u(n.channelId).lastErrored = !0, !0)
                },
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: d,
                APP_LAUNCHER_SET_ACTIVE_COMMAND: d,
                APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
                    let {
                        channelId: t,
                        command: n
                    } = e;
                    c(t, n?.id)
                }
            })
        },
        696923: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("661223"),
                l = n("312916"),
                i = n("475232"),
                r = n("232733"),
                s = n("110531");
            let u = {};

            function o() {
                return u = {}, !0
            }

            function d(e) {
                return !(e in u) && (u[e] = {
                    activeCommand: null,
                    activeCommandSection: null,
                    activeOptionName: null,
                    preferredCommandId: null,
                    optionStates: {},
                    initialValues: {}
                }), u[e]
            }

            function c(e) {
                let {
                    channelId: t,
                    command: n,
                    section: a,
                    initialValues: l,
                    location: i,
                    triggerSection: r,
                    queryLength: u
                } = e, o = d(t);
                if (n?.id === o.activeCommand?.id) return !1;
                o.activeCommand = n, o.activeCommandSection = a, o.activeOptionName = null, o.preferredCommandId = null, o.initialValues = l ?? {};
                let c = {};
                return n?.options != null && n.options.forEach(e => {
                    c[e.name] = {
                        isActive: !1,
                        hasValue: !1,
                        lastValidationResult: null,
                        optionValue: null
                    }
                }), o.optionStates = c, null != n && (0, s.trackCommandSelected)({
                    command: n,
                    location: i,
                    triggerSection: r,
                    queryLength: u
                }), !0
            }

            function f(e) {
                let {
                    channelId: t,
                    commandId: n
                } = e, a = d(t);
                return n !== a.preferredCommandId && (null !== a.preferredCommandId || n !== (a.activeCommand?.id ?? null)) && (a.activeCommand = null, a.activeOptionName = null, a.preferredCommandId = n, a.optionStates = {}, !0)
            }

            function E(e) {
                let {
                    channelId: t,
                    changedOptionStates: n
                } = e, a = d(t), l = {
                    ...a.optionStates
                };
                for (let [e, t] of Object.entries(n)) {
                    if (!(e in a.optionStates)) continue;
                    if (!(void 0 !== t.hasValue ? t.hasValue : l[e].hasValue)) {
                        l[e] = {
                            hasValue: !1,
                            isActive: !1,
                            lastValidationResult: null,
                            optionValue: null,
                            location: void 0,
                            length: void 0
                        }, a.activeOptionName === e && (a.activeOptionName = null);
                        continue
                    }
                    let n = l[e];
                    l[e] = {
                        hasValue: !0,
                        isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
                        lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
                        optionValue: t.optionValue ?? n.optionValue,
                        location: t.location ?? n.location,
                        length: t.length ?? n.length
                    }, void 0 !== t.isActive && (t.isActive ? (null != a.activeOptionName && a.activeOptionName !== e && (l[a.activeOptionName] = {
                        ...l[a.activeOptionName]
                    }, l[a.activeOptionName].isActive = !1), a.activeOptionName = e) : e === a.activeOptionName && (a.activeOptionName = null))
                }
                return a.optionStates = l, !0
            }
            class _ extends a.default.Store {
                static #e = this.displayName = "ApplicationCommandStore";
                initialize() {
                    i.default.addChangeListener(() => {
                        let e = r.default.getChannelId();
                        if (null == e) return u = {}, !0;
                        let t = i.default.getCurrentSidebarChannelId(e);
                        if (null != t && t in u) return !1;
                        u = e in u ? {
                            [e]: u[e]
                        } : {}
                    })
                }
                getActiveCommand(e) {
                    return d(e).activeCommand
                }
                getActiveCommandSection(e) {
                    return d(e).activeCommandSection
                }
                getActiveOptionName(e) {
                    return d(e).activeOptionName
                }
                getActiveOption(e) {
                    let t = d(e);
                    return t.activeCommand?.options?.find(e => e.name === t.activeOptionName) ?? null
                }
                getPreferredCommandId(e) {
                    return d(e).preferredCommandId
                }
                getOptionStates(e) {
                    return d(e).optionStates
                }
                getOptionState(e, t) {
                    return d(e).optionStates[t]
                }
                getOption(e, t) {
                    let n = d(e);
                    return n.activeCommand?.options?.find(e => e.name === t)
                }
                getState(e) {
                    return {
                        ...d(e)
                    }
                }
            }
            var h = new _(l.default, {
                CONNECTION_OPEN: o,
                CHANNEL_SELECT: o,
                LOGOUT: o,
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: c,
                APPLICATION_COMMAND_SET_PREFERRED_COMMAND: f,
                APPLICATION_COMMAND_UPDATE_OPTIONS: E,
                APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
                    let {
                        channelId: t,
                        preferredCommandId: n,
                        command: a,
                        section: l,
                        changedOptionStates: i
                    } = e, r = c({
                        type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                        channelId: t,
                        command: a,
                        section: l
                    }), s = f({
                        type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                        channelId: t,
                        commandId: n
                    }), u = E({
                        type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                        channelId: t,
                        changedOptionStates: i
                    });
                    return r || s || u
                }
            })
        },
        221281: function(e, t, n) {
            "use strict";
            var a, l, i, r, s, u;
            n.r(t), n.d(t, {
                AutocompleterQuerySymbols: function() {
                    return i
                },
                AutocompleterResultTypes: function() {
                    return l
                },
                FindResultDirections: function() {
                    return a
                },
                HeaderRecord: function() {
                    return o
                }
            });
            class o {
                constructor(e) {
                    this.id = e, this.text = e
                }
            }(r = a || (a = {})).UP = "UP", r.DOWN = "DOWN", (s = l || (l = {})).GUILD = "GUILD", s.TEXT_CHANNEL = "TEXT_CHANNEL", s.GROUP_DM = "GROUP_DM", s.VOICE_CHANNEL = "VOICE_CHANNEL", s.USER = "USER", s.HEADER = "HEADER", s.APPLICATION = "APPLICATION", s.SKU = "SKU", s.LINK = "LINK", (u = i || (i = {})).USER = "@", u.TEXT_CHANNEL = "#", u.VOICE_CHANNEL = "!", u.GUILD = "*", u.APPLICATION = "$"
        },
        555083: function(e, t, n) {
            "use strict";

            function a(e, t) {
                if (e.score === t.score) {
                    let n = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
                        a = e.sortable ?? t.comparator?.toLocaleLowerCase() ?? "";
                    if (n < a) return -1;
                    if (n > a) return 1
                }
                return t.score - e.score
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        412096: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canCreatePrivateChannel: function() {
                    return Y
                },
                extractPermissionOverwrites: function() {
                    return K
                },
                flipEveryonePermission: function() {
                    return k
                },
                getExistingMembersRows: function() {
                    return P
                },
                getExistingRolesRowWithPermissionDisabled: function() {
                    return D
                },
                getExistingRolesRows: function() {
                    return O
                },
                getMembersRows: function() {
                    return G
                },
                getNoRolesRow: function() {
                    return A
                },
                getPrivateChannelHintText: function() {
                    return W
                },
                getRemoveTooltipHint: function() {
                    return F
                },
                getRoleRowData: function() {
                    return p
                },
                getRolesRows: function() {
                    return R
                },
                getRolesRowsWithPermissionDisabled: function() {
                    return L
                },
                getRowTypeLabel: function() {
                    return w
                },
                grantUserChannelAccess: function() {
                    return x
                },
                hasCustomRoles: function() {
                    return V
                },
                isAdmin: function() {
                    return m
                },
                isEveryoneRoleId: function() {
                    return C
                },
                isNotEveryoneRoleId: function() {
                    return M
                },
                isPrivateGuildChannel: function() {
                    return B
                },
                sortRoles: function() {
                    return T
                },
                toggleChannelEveryonePermission: function() {
                    return H
                }
            }), n("653041");
            var a = n("768517"),
                l = n("148817"),
                i = n("576120"),
                r = n("243770"),
                s = n("775822"),
                u = n("361733"),
                o = n("871831"),
                d = n("557129"),
                c = n("370275"),
                f = n("694574"),
                E = n("84819"),
                _ = n("439823"),
                h = n("742473"),
                g = n("467006"),
                S = n("30175");

            function m(e) {
                return a.default.has(e.permissions, g.Permissions.ADMINISTRATOR)
            }

            function p(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let i = (t = e, a.default.has(t.permissions, g.Permissions.ADMINISTRATOR) ? h.RowType.ADMINISTRATOR : h.RowType.ROLE);
                return {
                    rowType: i,
                    colorString: e.colorString ?? (0, l.int2hex)(g.DEFAULT_ROLE_COLOR),
                    name: e.name,
                    id: e.id,
                    disabled: m(e) || n,
                    key: `${i}:${e.id}`,
                    tags: e.tags
                }
            }

            function T(e, t) {
                let n = m(e) ? 0 : 1,
                    a = m(t) ? 0 : 1;
                return n !== a ? n - a : t.position - e.position
            }

            function A() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;
                return [{
                    rowType: h.RowType.EMPTY_STATE,
                    colorString: (0, l.int2hex)(g.DEFAULT_ROLE_COLOR),
                    name: e,
                    disabled: !0,
                    id: "EMPTY_STATE"
                }]
            }

            function I(e, t, n, l) {
                let i = o.default.getCurrentUser();
                if (null == i) return !1;
                if (null == e) return i.id !== t;
                let r = e.permissionOverwrites[t];
                return l?.[t] != null && (r = l[t]), null == r || !a.default.has(r.allow, n)
            }

            function C(e, t) {
                return E.default.castGuildIdAsEveryoneGuildRoleId(e) === t
            }

            function M(e, t) {
                return !C(e, t)
            }

            function N(e, t) {
                return !C(e.id, t.id)
            }

            function R(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0;
                return null == e.roles ? [] : Object.values(e.roles).filter(l => !m(l) && I(t, l.id, n) && N(e, l) && a(l.name)).sort(T).map(e => p(e))
            }

            function L(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0;
                return null == e.roles ? [] : Object.values(e.roles).filter(a => !m(a) && I(t, a.id, n) && N(e, a) && l(a.name)).sort(T).map(e => p(e, a.default.has(e.permissions, n)))
            }

            function O(e, t, n, a) {
                var l, i, r, s;
                let u = [];
                if (null == e.roles) return u;
                return 0 === (u = (l = e, i = t, r = n, s = a, Object.values(l.roles).filter(e => m(e) || !I(i, e.id, r, s) && N(l, e))).sort(T).map(e => p(e))).length ? A(S.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : u
            }

            function D(e, t, n, l) {
                var i, r, s, u;
                let o = [];
                if (null == e.roles) return o;
                return 0 === (o = (i = e, r = t, s = n, u = l, Object.values(i.roles).filter(e => m(e) || !I(r, e.id, s, u) && N(i, e) || a.default.has(a.default.combine(e.permissions, r.permissionOverwrites[e.id]?.allow), s))).sort(T).map(e => p(e, a.default.has(e.permissions, n)))).length ? A(S.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : o
            }

            function y(e, t) {
                return u.default.getNick(t.id, e.id) ?? _.default.getName(e)
            }

            function b(e, t) {
                return t.isOwner(e)
            }

            function U(e, t) {
                var n, a;
                let l = (n = e, t.isOwner(n) ? h.RowType.OWNER : h.RowType.MEMBER);
                return {
                    rowType: l,
                    name: y(e, t),
                    nickname: u.default.getNick(t.id, e.id) ?? null,
                    username: _.default.getName(e),
                    id: e.id,
                    avatarURL: e.getAvatarURL(t.id, 24),
                    bot: e.bot,
                    verifiedBot: e.isVerifiedBot(),
                    disabled: (a = e, t.isOwner(a)),
                    key: `${l}:${e.id}`
                }
            }

            function v(e, t) {
                return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase())
            }

            function G(e, t, n, a) {
                let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
                return e.map(o.default.getUser).filter(c.isNotNullish).filter(e => !n.isOwner(e) && I(t, e.id, a) && (l(y(e, n)) || l(e.username) || l(e.discriminator))).map(e => U(e, n)).sort(v)
            }

            function P(e, t, n, a, l) {
                var i, r, s, u, d;
                return (i = e, r = t, s = n, u = a, d = l, i.map(o.default.getUser).filter(c.isNotNullish).filter(e => {
                    var t;
                    return !I(r, e.id, u, d) || (t = e, s.isOwner(t))
                })).map(e => U(e, n)).sort(v)
            }

            function w(e, t) {
                switch (e) {
                    case h.RowType.ROLE:
                        return S.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
                    case h.RowType.OWNER:
                        return S.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
                    case h.RowType.ADMINISTRATOR:
                        return S.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
                    case h.RowType.MEMBER:
                        return t ? S.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
                    case h.RowType.USER:
                        return S.default.Messages.USER;
                    case h.RowType.GUILD:
                        return S.default.Messages.SERVER;
                    case h.RowType.EMPTY_STATE:
                        return null
                }
            }

            function F(e) {
                switch (e) {
                    case h.RowType.ROLE:
                        return S.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
                    case h.RowType.OWNER:
                        return S.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case h.RowType.ADMINISTRATOR:
                        return S.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case h.RowType.MEMBER:
                        return S.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
                    case h.RowType.EMPTY_STATE:
                    default:
                        return null
                }
            }

            function k(e, t, n) {
                let l = e.permissionOverwrites[e.guild_id];
                null == l && (l = f.default.makeEveryoneOverwrite(e.guild_id));
                let i = {
                    ...l
                };
                return i.deny = a.default.remove(i.deny, t), i.allow = a.default.remove(i.allow, t), !n && (i.deny = a.default.add(i.deny, t)), i
            }

            function H(e, t, n) {
                let a = k(e, t, n);
                (0, i.updatePermission)(e, a.id, a.allow, a.deny)
            }

            function x(e, t) {
                let n = o.default.getCurrentUser();
                if (null == n) return;
                let l = e.permissionOverwrites[n.id];
                if (null == l) {
                    let l = {
                        id: n.id,
                        type: r.PermissionOverwriteType.MEMBER,
                        allow: a.default.add(f.default.NONE, t),
                        deny: f.default.NONE
                    };
                    (0, i.savePermissionUpdates)(e.id, [l], !0)
                } else {
                    let {
                        allow: n,
                        deny: r
                    } = l;
                    n = a.default.add(n, t), (0, i.updatePermission)(e, l.id, n, r)
                }
            }

            function B(e, t) {
                if (null == e) return !1;
                let n = e.permissionOverwrites[e.guild_id];
                return t?.[e.guild_id] != null && (n = t[e.guild_id]), null != n && a.default.has(n.deny, e.accessPermissions)
            }

            function V(e) {
                let t = Object.keys(e.roles);
                return 0 !== t.length && (1 !== t.length || t[0] !== e.id)
            }

            function Y(e, t, n) {
                return e === g.ChannelTypes.GUILD_TEXT || e === g.ChannelTypes.GUILD_ANNOUNCEMENT ? t : !(0, s.isGuildVocalChannelType)(e) && e !== g.ChannelTypes.GUILD_CATEGORY || t && n
            }

            function W(e) {
                switch (e) {
                    case g.ChannelTypes.GUILD_TEXT:
                    case g.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return S.default.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
                    case g.ChannelTypes.GUILD_VOICE:
                        return S.default.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
                    case g.ChannelTypes.GUILD_CATEGORY:
                        return S.default.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();
                    default:
                        return null
                }
            }

            function K(e, t) {
                let n = [];
                return Object.values(e).forEach(e => {
                    let {
                        row: a
                    } = e;
                    null != a.id && "" !== a.id && (a.rowType === h.RowType.ROLE ? n.push((0, d.permissionOverwriteForRole)(a.id, t)) : a.rowType === h.RowType.MEMBER && n.push((0, d.permissionOverwriteForUser)(a.id, t)))
                }), n
            }
        },
        332391: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("731865"),
                l = n("467006");

            function i(e) {
                if (null == e.parent_id) return e.type === l.ChannelTypes.GUILD_CATEGORY ? (e.position + 1) * 1e3 : e.position;
                {
                    let t = ((a.default.getChannel(e.parent_id)?.position ?? 0) + 1) * 1e3;
                    return e.isGuildVocal() ? t + e.position + 500 : t + e.position
                }
            }

            function r(e, t) {
                if (e.score !== t.score) return t.score - e.score;
                let n = i(e.record),
                    a = i(t.record);
                if (n !== a) return n - a;
                let l = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
                    r = e.sortable ?? t.comparator?.toLocaleLowerCase() ?? "";
                return l < r ? -1 : l > r ? 1 : 0
            }
        },
        732665: function(e, t, n) {
            "use strict";

            function a() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function l(e) {
                return {
                    textValue: e,
                    richValue: r(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return a
                },
                createState: function() {
                    return l
                },
                toRichValue: function() {
                    return r
                },
                voidToOptionValue: function() {
                    return s
                }
            });
            let i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function r(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : i
            }

            function s(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        561490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeExperimentState: function() {
                    return l
                },
                default: function() {
                    return r
                }
            });
            var a, l, i = n("516086");
            (a = l || (l = {}))[a.None = 0] = "None", a[a.DefaultOn = 1] = "DefaultOn", a[a.DefaultOff = 2] = "DefaultOff", a[a.ComingSoon = 3] = "ComingSoon", a[a.ClydeProfiles = 4] = "ClydeProfiles";
            var r = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-03_clyde_ai",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: 0
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: 2
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: 1
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: 3
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: 4
                    }
                }]
            })
        },
        469265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canUseCustomClydeProfiles: function() {
                    return _
                },
                getClydeEnabled: function() {
                    return f
                },
                getClydeExperimentEnabled: function() {
                    return E
                },
                useClydeEnabled: function() {
                    return d
                },
                useClydeProfilesEnabled: function() {
                    return o
                }
            }), n("470079"), n("661223");
            var a = n("327271"),
                l = n("197905"),
                i = n("561490"),
                r = n("467006"),
                s = n("551835");

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
                    a = e?.id ?? r.EMPTY_STRING_GUILD_ID;
                return i.default.useExperiment({
                    guildId: a,
                    location: n
                }, {
                    autoTrackExposure: t
                }).experimentState
            }

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return u(e, t, n) === i.ClydeExperimentState.ClydeProfiles
            }

            function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return c(u(e, n), e, t)
            }

            function c(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) return !!n.hasFlag(s.ChannelFlags.CLYDE_AI) || a.default.getGuildIds().some(e => E(a.default.getGuild(e)));
                    return !1
                }
                return null != e && e !== i.ClydeExperimentState.None && l.default.can(r.Permissions.USE_CLYDE_AI, n)
            }

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = e?.id ?? r.EMPTY_STRING_GUILD_ID;
                return c(i.default.getCurrentConfig({
                    guildId: a,
                    location: "1e9ccc_2"
                }, {
                    autoTrackExposure: n
                }).experimentState, e, t)
            }

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return h(e, t) !== i.ClydeExperimentState.None
            }

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return h(e, t) === i.ClydeExperimentState.ClydeProfiles
            }

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                let n = e.id;
                return i.default.getCurrentConfig({
                    guildId: n,
                    location: "1e9ccc_4"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }
        },
        482970: function(e, t, n) {
            "use strict";

            function a() {
                return {}
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        491538: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isForumActivityExperimentEnabled: function() {
                    return r
                }
            });
            var a = n("800976"),
                l = n("718693"),
                i = n("467006");

            function r(e) {
                let t = l.default.getCurrentConfig({
                        guildId: e ?? i.EMPTY_STRING_GUILD_ID,
                        location: "3fde52_1"
                    }),
                    n = a.default.getCurrentConfig({
                        location: "3fde52_2"
                    });
                return !!(t.enabled || n.enabled)
            }
        },
        921565: function(e, t, n) {
            "use strict";
            var a, l, i, r;
            n.r(t), n.d(t, {
                COMMUNITY_PORTAL_FORUM_PAGE: function() {
                    return d
                },
                ForumOnboardingCTAs: function() {
                    return a
                },
                ForumTimestampFormats: function() {
                    return l
                },
                MAX_FORUM_POST_TAGS: function() {
                    return u
                },
                MAX_FORUM_TAGS: function() {
                    return s
                },
                MAX_FORUM_TEMPLATE_LENGTH: function() {
                    return o
                }
            });
            let s = 20,
                u = 5,
                o = 256;
            (i = a || (a = {})).PERMISSIONS = "Permissions", i.GUIDELINES = "Guidelines", i.TAGS = "Tags", i.DEFAULT_REACTION = "Default Reaction", i.CREATE_POST = "Create Post";
            let d = "https://discord.com/community/creating-value-with-conversation";
            (r = l || (l = {}))[r.DURATION_AGO = 0] = "DURATION_AGO", r[r.POSTED_DURATION_AGO = 1] = "POSTED_DURATION_AGO"
        },
        789117: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("661223"),
                l = n("312916"),
                i = n("822534"),
                r = n("357446"),
                s = n("871831"),
                u = n("84819");
            let o = {};

            function d(e) {
                let {
                    threads: t,
                    firstMessages: n
                } = e;
                if (null == n) return !1;
                for (let e of t) o[e.id] = {
                    loaded: !0,
                    firstMessage: null
                };
                for (let e of n) c(e.channel_id, e)
            }

            function c(e, t) {
                let n = null == t ? null : (0, i.createMessageRecord)(t);
                o[e] = {
                    loaded: !0,
                    firstMessage: n
                }
            }

            function f(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: a,
                    userId: l,
                    emoji: i,
                    optimistic: r,
                    reactionType: u
                } = e, d = o[n];
                if (null == d || null == d.firstMessage || a !== d.firstMessage.id) return !1;
                let c = s.default.getCurrentUser(),
                    f = null != c && c.id === l;
                if (r && !f) return !1;
                o[n] = {
                    ...d
                }, "MESSAGE_REACTION_ADD" === t ? o[n].firstMessage = d.firstMessage.addReaction(i, f, e.colors, u) : o[n].firstMessage = d.firstMessage.removeReaction(i, f, u)
            }
            class E extends a.default.Store {
                static #e = this.displayName = "ForumPostMessagesStore";
                initialize() {
                    this.waitFor(r.default, s.default)
                }
                isLoading(e) {
                    return o[e]?.loaded !== !0
                }
                getMessage(e) {
                    return !(e in o) && (o[e] = {
                        loaded: !1,
                        firstMessage: null
                    }), o[e]
                }
            }
            var _ = new E(l.default, {
                CONNECTION_OPEN: function() {
                    o = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || e.message.id !== u.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
                    c(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (e.message.id !== e.message.channel_id) return !1;
                    let t = o[u.default.castMessageIdAsChannelId(e.message.id)];
                    if (null == t || null == t.firstMessage) return !1;
                    o[u.default.castMessageIdAsChannelId(e.message.id)] = {
                        ...t,
                        firstMessage: (0, i.updateMessageRecord)(t.firstMessage, e.message)
                    }
                },
                MESSAGE_DELETE: function(e) {
                    if (e.id !== u.default.castChannelIdAsMessageId(e.channelId)) return !1;
                    o[e.channelId] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                THREAD_CREATE: function(e) {
                    if (null != o[e.channel.id] || !r.default.isSubscribedToThreads(e.channel.guild_id)) return !1;
                    o[e.channel.id] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                MESSAGE_REACTION_ADD: f,
                MESSAGE_REACTION_REMOVE: f,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, a = o[t];
                    if (null == a || null == a.firstMessage || n !== a.firstMessage.id) return !1;
                    o[t] = {
                        ...a,
                        firstMessage: a.firstMessage.set("reactions", [])
                    }
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: a
                    } = e, l = o[t];
                    if (null == l || null == l.firstMessage || n !== l.firstMessage.id) return !1;
                    o[t] = {
                        ...l,
                        firstMessage: l.firstMessage.removeReactionsForEmoji(a)
                    }
                },
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: a
                    } = e, l = o[t];
                    if (null == l || null == l.firstMessage || n !== l.firstMessage.id) return !1;
                    let i = s.default.getCurrentUser(),
                        r = l.firstMessage.addReactionBatch(a, i?.id);
                    o[t] = {
                        ...l,
                        firstMessage: r
                    }
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) c(e, t[e].first_message)
                },
                LOAD_THREADS_SUCCESS: d,
                LOAD_ARCHIVED_THREADS_SUCCESS: d,
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: n
                    } = e, a = n[n.length - 1];
                    null != a && a.id === u.default.castChannelIdAsMessageId(t) && (o[t] = {
                        loaded: !0,
                        firstMessage: (0, i.createMessageRecord)(a)
                    })
                }
            })
        },
        48356: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("661223"),
                l = n("312916"),
                i = n("731865");
            let r = {};

            function s(e) {
                let t = i.default.getChannel(e);
                return !!(null != t && t.isForumLikeChannel()) || !1
            }

            function u(e) {
                let t = r[e] ?? {
                    query: null,
                    loading: !1,
                    results: null
                };
                return r[e] = t, t
            }
            class o extends a.default.Store {
                static #e = this.displayName = "ForumSearchStore";
                getSearchQuery(e) {
                    let t = r[e];
                    return t?.query
                }
                getSearchLoading(e) {
                    let t = r[e];
                    return t?.loading ?? !1
                }
                getSearchResults(e) {
                    let t = r[e];
                    return t?.results
                }
                getHasSearchResults(e) {
                    let t = r[e];
                    return t?.results != null && t.results.length > 0
                }
            }
            var d = new o(l.default, {
                CONNECTION_OPEN: function() {
                    r = {}
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e, n = t.parent_id;
                    if (null == n) return !1;
                    let a = r[n];
                    if (null == a) return !1;
                    r[n] = {
                        ...a,
                        results: a.results?.filter(e => t.id !== e)
                    }
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return delete r[t.id]
                },
                FORUM_SEARCH_QUERY_UPDATED: function(e) {
                    let {
                        channelId: t,
                        query: n
                    } = e;
                    if (!s(t)) return !1;
                    let a = u(t);
                    r[t] = {
                        ...a,
                        query: n,
                        results: null
                    }
                },
                FORUM_SEARCH_START: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!s(t)) return !1;
                    let n = u(t);
                    r[t] = {
                        ...n,
                        loading: !0
                    }
                },
                FORUM_SEARCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        threadIds: n
                    } = e;
                    if (!s(t)) return !1;
                    let a = u(t);
                    r[t] = {
                        ...a,
                        loading: !1,
                        results: n
                    }
                },
                FORUM_SEARCH_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!s(t)) return !1;
                    let n = u(t);
                    r[t] = {
                        ...n,
                        loading: !1,
                        results: []
                    }
                },
                FORUM_SEARCH_CLEAR: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return !!s(t) && delete r[t]
                }
            })
        },
        9999: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canDisplayPostUnreadMessageCount: function() {
                    return _
                },
                getForumPostReadStates: function() {
                    return d
                },
                getForumPostReadStatesById: function() {
                    return c
                },
                getForumTimestampFormatter: function() {
                    return E
                },
                isForumPostPinned: function() {
                    return h
                }
            });
            var a = n("930198"),
                l = n("731865"),
                i = n("327271"),
                r = n("417223"),
                s = n("921565"),
                u = n("551835"),
                o = n("30175");

            function d(e, t) {
                let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default];
                return {
                    isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
                    hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
                }
            }

            function c(e) {
                let [t, n, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default, i.default, r.default], s = t.getChannel(e);
                if (null == s) return null;
                let u = n.getGuild(s.guild_id);
                return null == u ? null : d(s, u, [a])
            }
            let f = () => ({
                minutes: o.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
                hours: o.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
                days: o.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
                month: o.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
            });

            function E(e, t) {
                if (t === s.ForumTimestampFormats.POSTED_DURATION_AGO && e === a.ThreadSortOrder.CREATION_DATE) return f
            }

            function _(e, t) {
                let [n] = t, a = n.hasTrackedUnread(e), l = n.hasOpenedThread(e), i = null != n.getTrackedAckMessageId(e);
                return a && l && i
            }

            function h(e) {
                return l.default.getChannel(e)?.hasFlag(u.ChannelFlags.PINNED) === !0
            }
        },
        65266: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("206652"),
                l = n("731865"),
                i = n("491538"),
                r = n("947416"),
                s = new class e {
                    constructor() {
                        this.filterTagIds = null, this.sortOrder = null, this.layout = null, this.setFilterTagIds = e => {
                            this.filterTagIds = e
                        }, this.setSortOrder = e => {
                            this.sortOrder = e
                        }, this.setLayout = e => {
                            this.layout = e
                        }, this.getFilterTagIdsAnalytics = () => null != this.filterTagIds ? Array.from(this.filterTagIds) : [], this.getSortOrderAnalytics = e => this.sortOrder ?? l.default.getChannel(e)?.getDefaultSortOrder(), this.getLayoutAnalytics = e => {
                            let t = l.default.getChannel(e),
                                n = this.layout ?? t?.getDefaultLayout();
                            return (0, i.isForumActivityExperimentEnabled)(t?.guild_id) && n === a.ForumLayout.LIST ? r.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : n
                        }
                    }
                }
        },
        728956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("963694"),
                l = n("408109"),
                i = n("262047"),
                r = n("731865"),
                s = n("84819"),
                u = n("9999");
            class o extends a.default {
                handleThreadCreate(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.isForumPost()) {
                        let e = t.ownerId === i.default.getId();
                        this.readStateSnapshots[t.id] = {
                            isNew: !e,
                            hasUnreads: !e
                        }
                    }
                }
                constructor(...e) {
                    super(...e), this.readStateSnapshots = {}, this.actions = {
                        CHANNEL_SELECT: e => this.handleChannelSelect(e),
                        THREAD_CREATE: e => this.handleThreadCreate(e)
                    }, this.handleChannelSelect = e => {
                        let {
                            channelId: t
                        } = e;
                        if (null == t) return;
                        let n = r.default.getChannel(t);
                        null != n && n.isForumLikeChannel() && (this.readStateSnapshots = {}, this.processForumChannel(n.guild_id, t))
                    }, this.processForumChannel = (e, t) => {
                        let n = l.default.getThreadsForParent(e, t);
                        s.default.keys(n).forEach(e => {
                            let t = (0, u.getForumPostReadStatesById)(e);
                            null != t && (this.readStateSnapshots[e] = t)
                        })
                    }, this.getReadStateSnapshotAnalytics = e => this.readStateSnapshots[e]
                }
            }
            var d = new o
        },
        233343: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("153832");

            function l(e) {
                return {
                    channelId: e,
                    sessionId: (0, a.v4)()
                }
            }
            var i = new class e {
                getForumChannelSessionId(e) {
                    return null == this.session && (this.session = l(e)), this.session.channelId !== e && (this.session = l(e)), this.session.sessionId
                }
            }
        },
        613085: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeTrackForumNewPostDraftCreated: function() {
                    return I
                },
                trackForumAddMediaToOriginalPostClicked: function() {
                    return v
                },
                trackForumChannelMediaUploaderClicked: function() {
                    return P
                },
                trackForumChannelSeenBatch: function() {
                    return g
                },
                trackForumCreateNewPostClick: function() {
                    return T
                },
                trackForumCreateNewPostKeybindUsed: function() {
                    return A
                },
                trackForumCreateNewPostStarted: function() {
                    return x
                },
                trackForumEnableAutomodClicked: function() {
                    return w
                },
                trackForumHelperCardClicked: function() {
                    return G
                },
                trackForumLayoutUpdated: function() {
                    return D
                },
                trackForumMorePostsLoaded: function() {
                    return R
                },
                trackForumNewPostCleared: function() {
                    return C
                },
                trackForumOnboardingClicked: function() {
                    return b
                },
                trackForumPostClicked: function() {
                    return L
                },
                trackForumPostCreated: function() {
                    return M
                },
                trackForumPostLinkCopied: function() {
                    return y
                },
                trackForumPostSidebarViewed: function() {
                    return k
                },
                trackForumPreviewPostClicked: function() {
                    return F
                },
                trackForumScrolled: function() {
                    return N
                },
                trackForumSearchCleared: function() {
                    return m
                },
                trackForumSearched: function() {
                    return S
                },
                trackForumSortOrderUpdated: function() {
                    return O
                },
                trackForumTagFilterClicked: function() {
                    return p
                },
                trackForumUpsellModalClicked: function() {
                    return U
                },
                trackForumUpsellModalViewed: function() {
                    return H
                }
            });
            var a = n("206652"),
                l = n("244180"),
                i = n("199063"),
                r = n("731865"),
                s = n("911388"),
                u = n("328470"),
                o = n("501769"),
                d = n("491538"),
                c = n("789117"),
                f = n("48356"),
                E = n("947416"),
                _ = n("181103"),
                h = n("467006");

            function g(e) {
                let {
                    guildId: t,
                    channelId: n,
                    sessionId: a,
                    postIds: i,
                    additionalTimes: r
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_SEEN_BATCH, {
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n,
                        sessionId: a
                    }),
                    guild_id: t,
                    channel_id: n,
                    post_ids: i,
                    additional_seen_time_millis: r
                })
            }

            function S(e) {
                let {
                    guildId: t,
                    channelId: n,
                    numSearchResults: a
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_SEARCHED, {
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    num_search_results: a
                })
            }

            function m(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_SEARCH_CLEARED, {
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function p(e) {
                let {
                    guildId: t,
                    channelId: n,
                    tagId: a,
                    filterTagIds: i,
                    added: r,
                    location: s
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    tag_id: a,
                    filter_tag_ids: i,
                    added: r,
                    location: s
                })
            }

            function T(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function A(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function I(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e, a = r.default.getChannel(n);
                if (null == a) return;
                let i = s.default.getThreadSettings(n),
                    u = a.template?.trim(),
                    o = s.default.getDraft(n, s.DraftType.FirstThreadMessage),
                    d = null == o || 0 === o.length || o?.trim() === u,
                    c = i?.appliedTags == null || i?.appliedTags?.size === 0,
                    f = i?.name == null || i?.name?.trim()?.length === 0;
                (!d || !c || !f) && l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    applied_tag_ids: (0, _.getForumPostDraftAppliedTagIds)(n),
                    num_attachments: (0, _.getForumPostDraftNumAttachments)(n)
                })
            }

            function C(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function M(e) {
                let {
                    guildId: t,
                    channelId: n,
                    postId: a
                } = e;

                function i() {
                    l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_POST_CREATED, {
                        ...(0, _.collectForumPostAnalyticsMetadata)({
                            channelId: a
                        }),
                        guild_id: t,
                        channel_id: n
                    })
                }
                c.default.isLoading(a) ? c.default.addConditionalChangeListener(() => !!c.default.isLoading(a) || (i(), !1)) : i()
            }

            function N(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_SCROLLED, {
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function R(e) {
                let {
                    guildId: t,
                    channelId: n,
                    numArchivedThreads: a,
                    hasMoreThreads: i,
                    filterTagIds: s,
                    sortOrder: o
                } = e;
                u.default.track(h.AnalyticEvents.FORUM_CHANNEL_MORE_POSTS_LOADED, {
                    ...(0, l.collectGuildAnalyticsMetadata)(t),
                    ...(0, l.collectChannelAnalyticsMetadata)(r.default.getChannel(n)),
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    num_archived_threads: a,
                    num_active_threads: (0, _.getNumActiveThreads)(t, n),
                    has_more_threads: i,
                    filter_tag_ids: s,
                    sort_order: o
                })
            }

            function L(e) {
                let {
                    guildId: t,
                    channelId: n,
                    postId: a,
                    location: i
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_POST_CLICKED, {
                    ...(0, _.collectForumPostAnalyticsMetadata)({
                        channelId: a
                    }),
                    guild_id: t,
                    channel_id: n,
                    is_search_result: null != f.default.getSearchResults(n),
                    location: i
                })
            }

            function O(e) {
                let {
                    guildId: t,
                    channelId: n,
                    sortOrder: a
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_POSTS_SORTED, {
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    sort_type: (0, _.convertSortOrderToReadableString)(a),
                    sort_order: a,
                    forum_channel_sort_order: a
                })
            }

            function D(e) {
                let {
                    guildId: t,
                    channelId: n,
                    forumLayout: i
                } = e, r = (0, d.isForumActivityExperimentEnabled)(t) && i === a.ForumLayout.LIST ? E.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : i;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_LAYOUT_UPDATED, {
                    ...(0, _.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    forum_channel_layout: r
                })
            }

            function y(e) {
                let {
                    postId: t,
                    location: n
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_POST_LINK_COPIED, {
                    forum_post_id: t,
                    location: n
                })
            }

            function b(e) {
                let {
                    onboardingCTA: t
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_ONBOARDING_CLICKED, {
                    onboarding_cta_type: t
                })
            }

            function U(e) {
                let {
                    forumDemoId: t
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_UPSELL_MODAL_CLICKED, {
                    forum_demo_id: t
                })
            }

            function v(e) {
                let {
                    added: t
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
                    added: t
                })
            }

            function G(e) {
                let {
                    readGuideCta: t
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
                    read_guide_cta: t
                })
            }

            function P(e) {
                let {
                    isMobile: t
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
                    is_mobile: t
                })
            }

            function w() {
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
            }

            function F() {
                l.default.trackWithMetadata(h.AnalyticEvents.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED)
            }

            function k(e) {
                l.default.trackWithMetadata(h.AnalyticEvents.CHANNEL_OPENED, {
                    ...(0, l.collectGuildAnalyticsMetadata)(e.guild_id),
                    ...(0, l.collectChannelAnalyticsMetadata)(e),
                    ...(0, i.collectThreadMetadata)(e, !0),
                    ...(0, l.getChannelOpenedMetadata)(e.id),
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    parent_channel_type: e.parentChannelThreadType,
                    channel_view: "Split View",
                    platform: (0, o.getPlatform)()
                })
            }

            function H() {
                l.default.trackWithMetadata(h.AnalyticEvents.OPEN_MODAL, {
                    type: "Forum Channel Upsell Modal",
                    location: {
                        section: h.AnalyticsSections.CHANNEL_WELCOME_CTA
                    }
                })
            }

            function x(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                l.default.trackWithMetadata(h.AnalyticEvents.THREAD_CREATION_STARTED, {
                    ...(0, i.collectThreadMetadata)(r.default.getChannel(n)),
                    channel_id: n,
                    guild_id: t
                })
            }
        },
        181103: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                collectForumAnalyticsMetadata: function() {
                    return R
                },
                collectForumPostAnalyticsMetadata: function() {
                    return L
                },
                convertSortOrderToReadableString: function() {
                    return A
                },
                getForumChannelSessionId: function() {
                    return T
                },
                getForumPostDraftAppliedTagIds: function() {
                    return C
                },
                getForumPostDraftNumAttachments: function() {
                    return I
                },
                getNumActiveThreads: function() {
                    return M
                }
            });
            var a = n("930198"),
                l = n("408109"),
                i = n("972942"),
                r = n("151191"),
                s = n("759193"),
                u = n("731865"),
                o = n("911388"),
                d = n("197905"),
                c = n("312938"),
                f = n("84819"),
                E = n("789117"),
                _ = n("65266"),
                h = n("728956"),
                g = n("233343"),
                S = n("467006"),
                m = n("551835"),
                p = n("809919");

            function T(e) {
                return g.default.getForumChannelSessionId(e)
            }

            function A(e) {
                switch (e) {
                    case a.ThreadSortOrder.CREATION_DATE:
                        return p.ThreadSortOrderReadableForAnalytics.CREATION_DATE;
                    case a.ThreadSortOrder.LATEST_ACTIVITY:
                        return p.ThreadSortOrderReadableForAnalytics.LATEST_ACTIVITY;
                    default:
                        throw Error(`Unexpected sort order ${e}`)
                }
            }

            function I(e) {
                return c.default.getUploads(e, o.DraftType.FirstThreadMessage).length
            }

            function C(e) {
                let t = u.default.getChannel(e);
                if (null == t) return [];
                let n = u.default.getChannel(t.parent_id),
                    a = n?.availableTags;
                if (null == n || null == a) return [];
                let l = o.default.getThreadSettings(e)?.appliedTags ?? new Set,
                    i = new Set(a.map(e => e.id));
                return Array.from(l).filter(e => i.has(e))
            }

            function M(e, t) {
                return Object.keys(l.default.getThreadsForParent(e, t)).length
            }

            function N(e) {
                let {
                    loaded: t,
                    firstMessage: n
                } = E.default.getMessage(e);
                return t ? n : null
            }

            function R(e) {
                let {
                    channelId: t,
                    sessionId: n
                } = e, a = u.default.getChannel(t);
                return null != a && a.isForumLikeChannel() ? {
                    forum_channel_has_guidelines: null != a.topic && a.topic.trim().length > 0,
                    forum_channel_default_emoji_reaction_id: a.defaultReactionEmoji?.emojiId,
                    forum_channel_default_emoji_reaction_name: a.defaultReactionEmoji?.emojiName,
                    forum_channel_available_tag_ids: a.availableTags?.map(e => e.id) ?? [],
                    forum_channel_tag_required: a.hasFlag(m.ChannelFlags.REQUIRE_TAG),
                    forum_channel_can_create_post: d.default.can(S.Permissions.SEND_MESSAGES, a),
                    forum_channel_filter_tag_ids: _.default.getFilterTagIdsAnalytics(),
                    forum_channel_sort_order: _.default.getSortOrderAnalytics(a.id),
                    forum_channel_session_id: n ?? T(a.id),
                    forum_channel_layout: _.default.getLayoutAnalytics(a.id),
                    forum_channel_default_sort_order: a.defaultSortOrder,
                    forum_channel_default_layout: a.defaultForumLayout
                } : null
            }

            function L(e) {
                let {
                    channelId: t,
                    sessionId: n
                } = e, a = u.default.getChannel(t);
                if (null == a || !a.isForumPost()) return null;
                let l = u.default.getChannel(a.parent_id);
                return null != l && l.isForumLikeChannel() ? {
                    ...R({
                        channelId: l.id,
                        sessionId: n
                    }),
                    thread_approximate_member_count: r.default.getMemberCount(t),
                    thread_approximate_message_count: s.default.getCount(t),
                    thread_archived: a.threadMetadata?.archived === !0,
                    thread_locked: a.threadMetadata?.locked ?? !1,
                    thread_auto_archive_duration_minutes: a.threadMetadata?.autoArchiveDuration ?? 0,
                    thread_approximate_creation_date: f.default.extractTimestamp(t),
                    forum_post_id: a.id,
                    forum_post_first_message_id: f.default.castChannelIdAsMessageId(a.id),
                    forum_post_num_reactions: function(e) {
                        let t = N(e);
                        return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0)
                    }(a.id),
                    forum_post_num_unique_reactions: function(e) {
                        let t = N(e);
                        return null == t ? 0 : t.reactions.length
                    }(a.id),
                    forum_post_applied_tag_ids: function(e) {
                        let t = u.default.getChannel(e);
                        if (null == t) return [];
                        let n = u.default.getChannel(t.parent_id),
                            a = n?.availableTags;
                        if (null == n || null == a) return [];
                        let l = new Set(a.map(e => e.id));
                        return t.appliedTags?.filter(e => l.has(e)) ?? []
                    }(a.id),
                    forum_post_is_pinned: a.hasFlag(m.ChannelFlags.PINNED),
                    forum_post_is_new: h.default.getReadStateSnapshotAnalytics(a.id)?.isNew,
                    forum_post_is_unread: h.default.getReadStateSnapshotAnalytics(a.id)?.hasUnreads,
                    forum_post_is_following: i.default.hasJoined(a.id),
                    forum_post_attachment_mimetypes: function(e) {
                        let t = N(e);
                        return null == t ? [] : t.attachments.map(e => e.content_type ?? "unknown")
                    }(a.id)
                } : null
            }
        },
        947416: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INCREASED_ACTIVITY_LIST_FORUM_LAYOUT: function() {
                    return r
                },
                useForumActivityExperiment: function() {
                    return s
                }
            });
            var a = n("800976"),
                l = n("718693"),
                i = n("467006");
            let r = 3;

            function s(e) {
                let t = l.default.useExperiment({
                        guildId: e ?? i.EMPTY_STRING_GUILD_ID,
                        location: "9a247a_1"
                    }),
                    n = a.default.useExperiment({
                        location: "9a247a_2"
                    });
                return !!(t.enabled || n.enabled)
            }
        },
        661444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("661223"),
                l = n("312916");
            let i = new Set,
                r = {};

            function s(e) {
                let {
                    applicationId: t
                } = e;
                i.add(t)
            }

            function u(e) {
                let {
                    applicationId: t
                } = e;
                i.delete(t)
            }
            class o extends a.default.Store {
                static #e = this.displayName = "LaunchableGameStore";
                get launchingGames() {
                    return i
                }
                get launchableGames() {
                    return r
                }
                isLaunchable(e) {
                    return null != r[e] ? r[e] : (r[e] = !1, l.default.dispatch({
                        type: "CHECK_LAUNCHABLE_GAME",
                        gameId: e
                    }), !1)
                }
            }
            var d = new o(l.default, {
                GAME_LAUNCHABLE_UPDATE: function(e) {
                    let {
                        gameId: t,
                        isLaunchable: n
                    } = e;
                    r[t] = n
                },
                GAME_CLOUD_SYNC_START: s,
                GAME_LAUNCH_START: s,
                GAME_LAUNCH_SUCCESS: u,
                GAME_LAUNCH_FAIL: u,
                GAME_CLOUD_SYNC_CONFLICT: u,
                GAME_CLOUD_SYNC_ERROR: u,
                GAME_CLOUD_SYNC_COMPLETE: u
            })
        },
        627539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RaidAlertExperiment: function() {
                    return i
                },
                ReportRaidExperiment: function() {
                    return l
                }
            });
            var a = n("516086");
            let l = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2022-07_report_raids",
                    label: "Report Raids",
                    defaultConfig: {
                        enableRaidReporting: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Reporting Of Raids",
                        config: {
                            enableRaidReporting: !0
                        }
                    }]
                }),
                i = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2022-10_guild_raid_messaging",
                    label: "Raid Alerts",
                    defaultConfig: {
                        enableRaidAlerts: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Reporting Of Raids",
                        config: {
                            enableRaidAlerts: !0
                        }
                    }]
                })
        },
        315607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMOD_ERROR_CODES: function() {
                    return o
                },
                InvalidKeywordError: function() {
                    return s
                },
                InvalidRegexPatternError: function() {
                    return u
                },
                getAutomodErrorMessage: function() {
                    return c
                },
                getAutomodErrorMessageFromErrorResponse: function() {
                    return d
                }
            });
            var a = n("53575"),
                l = n("731865"),
                i = n("467006"),
                r = n("30175");
            class s extends Error {}
            class u extends Error {}
            let o = new Set([i.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, i.AbortCodes.AUTOMOD_TITLE_BLOCKED, i.AbortCodes.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

            function d(e, t) {
                if (null == e) return null;
                let {
                    code: n,
                    message: a
                } = e;
                if (!o.has(n)) return null;
                if (null != a) return a;
                if (null == t) return null;
                let s = l.default.getChannel(t);
                return s?.isThread() ? r.default.Messages.THREAD_AUTOMOD_ERROR : (s?.isForumPost() || s?.isForumLikeChannel()) && (n === i.AbortCodes.AUTOMOD_TITLE_BLOCKED || n === i.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) ? r.default.Messages.FORUM_POST_AUTOMOD_ERROR : null
            }

            function c(e, t) {
                let n = d(t);
                return null != n ? n : null == e ? r.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : function(e) {
                    let t = l.default.getChannel(e.message.channelId);
                    return (0, a.isMessageDataEdit)(e) ? r.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : t?.isThread() ? r.default.Messages.THREAD_AUTOMOD_ERROR : t?.isForumPost() || t?.isForumLikeChannel() ? r.default.Messages.FORUM_POST_AUTOMOD_ERROR : r.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
                }(e)
            }
        },
        173333: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                checkDefaultChannelThresholdMetAfterChannelPermissionDeny: function() {
                    return h
                },
                isDefaultChannelThresholdMetAfterDelete: function() {
                    return E
                }
            });
            var a = n("768517"),
                l = n("992888"),
                i = n("225634"),
                r = n("327271"),
                s = n("953131"),
                u = n("343720"),
                o = n("23650"),
                d = n("745590"),
                c = n("467006"),
                f = n("30175");
            async function E(e, t) {
                return null == e || await _(e, t, {
                    removingView: !0,
                    removingChat: !0
                })
            }
            async function _(e, t, n) {
                let a = r.default.getGuild(e);
                if (null == a) return !0;
                let l = null != a && a.features?.has(c.GuildFeatures.GUILD_ONBOARDING);
                if (!l) return !0;
                l && u.default.shouldFetchPrompts(e) && await (0, s.fetchOnboardingPrompts)(e);
                let i = u.default.getDefaultChannelIds(e),
                    [f, E] = (0, o.getChattableDefaultChannels)(e, i);
                if (!i.includes(t)) return !0;
                let _ = n.removingView && E.length - 1 < d.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
                    h = (n.removingChat || n.removingView) && f.length - 1 < d.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
                return !_ && !h
            }
            async function h(e, t, n) {
                let r = e.getGuildId();
                if (null == r) return !0;
                null != n && (t = a.default.filter(t, a.default.invert(n)));
                let s = e.permissionOverwrites[r],
                    u = null != s ? a.default.filter(s.deny, a.default.invert(s.allow)) : a.default.deserialize(0),
                    o = {
                        removingView: a.default.has(t, c.Permissions.VIEW_CHANNEL) && !a.default.has(u, c.Permissions.VIEW_CHANNEL),
                        removingChat: !1
                    };
                return e.isForumLikeChannel() ? o.removingChat = a.default.has(t, c.Permissions.SEND_MESSAGES_IN_THREADS) && !a.default.has(u, c.Permissions.SEND_MESSAGES_IN_THREADS) : o.removingChat = a.default.has(t, c.Permissions.SEND_MESSAGES) && !a.default.has(u, c.Permissions.SEND_MESSAGES), !o.removingChat && !o.removingView || !!await _(r, e.id, o) || (l.default.show({
                    title: f.default.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                    body: f.default.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                        onClick: () => {
                            l.default.close(), i.default.open(r, c.GuildSettingsSections.ONBOARDING)
                        }
                    })
                }), !1)
            }
        },
        209458: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                isGuildOnboardingAvailable: function() {
                    return s
                }
            });
            var a = n("661223"),
                l = n("911533"),
                i = n("467006");

            function r(e) {
                return (0, a.useStateFromStores)([l.default], () => {
                    if (e?.id == null) return !1;
                    let t = l.default.isFullServerPreview(e.id),
                        n = l.default.isOnboardingEnabled(e.id);
                    return t && n
                }) || e?.hasFeature(i.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
            }

            function s(e) {
                if (null == e) return !1;
                let t = l.default.isFullServerPreview(e.id),
                    n = l.default.isOnboardingEnabled(e.id);
                return t && n || e.hasFeature(i.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
            }
        },
        140117: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getChannelRoleSubscriptionStatus: function() {
                    return d
                }
            });
            var a = n("661223"),
                l = n("987393"),
                i = n("731865"),
                r = n("197905"),
                s = n("467006");
            let u = {
                needSubscriptionToAccess: !1,
                isSubscriptionGated: !1
            };

            function o(e) {
                return (0, a.useStateFromStoresObject)([i.default, l.default, r.default], () => d(e, i.default, l.default, r.default), [e])
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
                    o = t.getChannel(e);
                return o?.isRoleSubscriptionTemplatePreviewChannel() ? {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                } : null != o && n.isChannelGated(o.guild_id, o.id) ? {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: o.isGuildVocal() ? !a.can(s.Permissions.CONNECT, o) : !a.can(s.Permissions.VIEW_CHANNEL, o)
                } : u
            }
        },
        225634: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("682797"),
                l = n("454836"),
                i = n("312916"),
                r = n("939591"),
                s = n("841869"),
                u = n("627539"),
                o = n("437148"),
                d = n("243393"),
                c = n("911533"),
                f = n("172056"),
                E = n("262047"),
                _ = n("361733"),
                h = n("327271"),
                g = n("567713"),
                S = n("334990"),
                m = n("114099"),
                p = n("467006"),
                T = n("30175");
            let A = new s.default("GuildSettingsActionCreators"),
                I = {
                    init(e, t, n, a) {
                        i.default.dispatch({
                            type: "GUILD_SETTINGS_INIT",
                            guildId: e,
                            section: t,
                            subsection: a,
                            location: n
                        })
                    },
                    async open(e, t, a, l) {
                        await n.el("225634@2088:2117").then(n.bind(n, "63453")), h.default.getGuild(e)?.hasFeature(p.GuildFeatures.COMMUNITY) && (t === p.GuildSettingsSections.GUILD_AUTOMOD && (t = p.GuildSettingsSections.SAFETY, l = p.GuildSettingsSubsections.SAFETY_AUTOMOD), t === p.GuildSettingsSections.MEMBER_VERIFICATION && (t = p.GuildSettingsSections.SAFETY, l = p.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), I.init(e, t, a, l), (0, r.pushLayer)(p.Layers.GUILD_SETTINGS)
                    },
                    close() {
                        i.default.dispatch({
                            type: "GUILD_SETTINGS_CLOSE"
                        })
                    },
                    saveRouteStack(e) {
                        i.default.dispatch({
                            type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
                            state: e
                        })
                    },
                    setSection(e, t) {
                        let n = m.default.getGuildId();
                        null != n && (h.default.getGuild(n)?.hasFeature(p.GuildFeatures.COMMUNITY) && (e === p.GuildSettingsSections.GUILD_AUTOMOD && (e = p.GuildSettingsSections.SAFETY, t = p.GuildSettingsSubsections.SAFETY_AUTOMOD), e === p.GuildSettingsSections.MEMBER_VERIFICATION && (e = p.GuildSettingsSections.SAFETY, t = p.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), i.default.dispatch({
                            type: "GUILD_SETTINGS_SET_SECTION",
                            section: e,
                            subsection: t
                        }))
                    },
                    setSearchQuery(e) {
                        i.default.dispatch({
                            type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
                            searchQuery: e
                        })
                    },
                    selectRole: (e, t) => i.default.dispatch({
                        type: "GUILD_SETTINGS_ROLE_SELECT",
                        roleId: e,
                        searchQuery: t
                    }),
                    updateEmbed(e, t, n) {
                        l.default.patch({
                            url: p.Endpoints.GUILD_WIDGET(e),
                            body: {
                                enabled: t,
                                channel_id: n
                            },
                            oldFormErrors: !0
                        }).then(t => {
                            i.default.dispatch({
                                type: "GUILD_SETTINGS_SET_WIDGET",
                                guildId: e,
                                enabled: t.body.enabled,
                                channelId: t.body.channel_id
                            })
                        })
                    },
                    updateMFALevel(e) {
                        let {
                            guildId: t,
                            level: n,
                            isEnabled: a
                        } = e;
                        return (0, g.default)(e => l.default.post({
                            url: p.Endpoints.GUILD_MFA(t),
                            body: {
                                level: n,
                                ...e
                            },
                            oldFormErrors: !0
                        }), {
                            modalProps: {
                                title: T.default.Messages.GUILD_SECURITY_REQ_MFA_LABEL,
                                actionText: a ? T.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_OFF : T.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_ON
                            },
                            checkEnabled: !1
                        }).then(e => i.default.dispatch({
                            type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                            level: e.body.level
                        }))
                    },
                    updateIcon(e, t) {
                        l.default.patch({
                            url: p.Endpoints.GUILD(e),
                            body: {
                                icon: t
                            },
                            oldFormErrors: !0
                        }).then(() => {
                            i.default.dispatch({
                                type: "GUILD_SETTINGS_UPDATE",
                                icon: t
                            }), o.default.checkGuildTemplateDirty(e)
                        }, e => i.default.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                            errors: e.body
                        }))
                    },
                    cancelChanges(e) {
                        i.default.dispatch({
                            type: "GUILD_SETTINGS_CANCEL_CHANGES",
                            guildId: e
                        })
                    },
                    updateGuild(e) {
                        let {
                            safetyAlertsChannelId: t,
                            ...n
                        } = e, a = {
                            ...n
                        }, l = m.default.getGuildId();
                        null != l && u.RaidAlertExperiment.getCurrentConfig({
                            guildId: l,
                            location: "be0372_1"
                        })?.enableRaidAlerts && null != t && (a.safetyAlertsChannelId = t), i.default.dispatch({
                            type: "GUILD_SETTINGS_UPDATE",
                            ...a
                        })
                    },
                    saveGuild(e, t) {
                        let {
                            name: n,
                            description: a,
                            icon: r,
                            splash: s,
                            banner: u,
                            homeHeader: d,
                            afkChannelId: c,
                            afkTimeout: f,
                            systemChannelId: E,
                            verificationLevel: _,
                            defaultMessageNotifications: h,
                            explicitContentFilter: g,
                            features: S,
                            systemChannelFlags: m,
                            preferredLocale: T,
                            rulesChannelId: I,
                            safetyAlertsChannelId: C,
                            discoverySplash: M,
                            publicUpdatesChannelId: N,
                            premiumProgressBarEnabled: R
                        } = t, L = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, O = {
                            name: n,
                            description: a,
                            icon: r,
                            splash: s,
                            banner: u,
                            home_header: d,
                            features: S,
                            preferred_locale: T,
                            afk_channel_id: c,
                            afk_timeout: f,
                            system_channel_id: E,
                            verification_level: _,
                            default_message_notifications: h,
                            explicit_content_filter: g,
                            system_channel_flags: m,
                            rules_channel_id: I,
                            discovery_splash: M,
                            public_updates_channel_id: N,
                            safety_alerts_channel_id: C,
                            ...null != R ? {
                                premium_progress_bar_enabled: R
                            } : null
                        };
                        return i.default.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT"
                        }), l.default.patch({
                            url: p.Endpoints.GUILD(e),
                            query: {
                                for_discovery: L.isForDiscovery
                            },
                            body: O,
                            oldFormErrors: !0
                        }).then(t => {
                            i.default.dispatch({
                                type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                                guild: t.body
                            }), o.default.checkGuildTemplateDirty(e)
                        }, e => {
                            if (i.default.dispatch({
                                    type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                                    errors: e.body
                                }), A.error("Failed to save guild settings", {
                                    errors: e.body
                                }), L.throwErr) throw e.body
                        })
                    },
                    updateGuildModeration: (e, t) => l.default.patch({
                        url: p.Endpoints.GUILD(e),
                        body: {
                            verification_level: t.verificationLevel,
                            explicit_content_filter: t.explicitContentFilter
                        },
                        oldFormErrors: !0
                    }).then(t => (o.default.checkGuildTemplateDirty(e), t)),
                    transferOwnership(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return (0, g.default)(i => S.default.patch({
                            url: p.Endpoints.GUILD(e),
                            body: {
                                owner_id: t,
                                code: l,
                                ...i
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                                properties: {
                                    guild_id: e,
                                    verification_type: n
                                }
                            }
                        }), {
                            modalProps: {
                                title: T.default.Messages.TRANSFER_OWNERSHIP,
                                actionText: T.default.Messages.TRANSFER_OWNERSHIP
                            },
                            checkEnabled: !1
                        })
                    },
                    sendTransferOwnershipPincode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return S.default.put({
                            url: p.Endpoints.GUILD_PINCODE(e),
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                                properties: {
                                    guild_id: e,
                                    is_resend: t
                                }
                            }
                        })
                    },
                    deleteGuild: (e, t) => (0, g.default)(t => l.default.post({
                        url: p.Endpoints.GUILD_DELETE(e),
                        body: t,
                        oldFormErrors: !0
                    }), {
                        modalProps: {
                            title: T.default.Messages.DELETE_SERVER_TITLE.format({
                                name: t
                            }),
                            actionText: T.default.Messages.DELETE_SERVER,
                            disallowBackupCodes: !0
                        },
                        checkEnabled: !1
                    }).then(() => {
                        I.close()
                    }),
                    async leaveGuild(e) {
                        await l.default.delete({
                            url: p.Endpoints.GUILD_LEAVE(e),
                            body: {
                                lurking: f.default.isLurking(e) || _.default.isCurrentUserGuest(e)
                            },
                            oldFormErrors: !0
                        }), I.close()
                    },
                    async updateMemberRoles(e, t, n, a, r) {
                        if (c.default.isFullServerPreview(e) && t === E.default.getId()) {
                            (0, d.updateImpersonatedRoles)(e, n);
                            return
                        }
                        await l.default.patch({
                            url: p.Endpoints.GUILD_MEMBER(e, t),
                            body: {
                                roles: n
                            },
                            oldFormErrors: !0
                        }), a.forEach(n => i.default.dispatch({
                            type: "GUILD_ROLE_MEMBER_ADD",
                            guildId: e,
                            roleId: n,
                            userId: t
                        })), r.forEach(n => i.default.dispatch({
                            type: "GUILD_ROLE_MEMBER_REMOVE",
                            guildId: e,
                            roleId: n,
                            userId: t
                        }))
                    },
                    bulkAddMemberRoles: (e, t, n) => l.default.patch({
                        url: p.Endpoints.GUILD_ROLE_MEMBERS(e, t),
                        body: {
                            member_ids: n
                        }
                    }).then(n => {
                        i.default.dispatch({
                            type: "GUILD_ROLE_MEMBER_BULK_ADD",
                            guildId: e,
                            roleId: t,
                            added: n.body
                        })
                    }),
                    updateRolesEditSection(e) {
                        i.default.dispatch({
                            type: "GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE",
                            section: e
                        })
                    },
                    enableIntegration: (e, t, n) => l.default.post({
                        url: p.Endpoints.GUILD_INTEGRATIONS(e),
                        body: {
                            type: t,
                            id: n
                        },
                        oldFormErrors: !0
                    }),
                    disableIntegration: (e, t) => l.default.delete({
                        url: p.Endpoints.GUILD_INTEGRATION(e, t),
                        oldFormErrors: !0
                    }),
                    updateIntegration: (e, t, n, a, i) => l.default.patch({
                        url: p.Endpoints.GUILD_INTEGRATION(e, t),
                        body: {
                            expire_behavior: n,
                            expire_grace_period: a,
                            enable_emoticons: i
                        },
                        oldFormErrors: !0
                    }),
                    syncIntegration(e, t) {
                        l.default.post({
                            url: p.Endpoints.GUILD_INTEGRATION_SYNC(e, t),
                            oldFormErrors: !0
                        })
                    }
                };
            var C = I
        },
        738776: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildSettingsBansNewExperiment: function() {
                    return a
                }
            });
            let a = (0, n("153551").default)({
                kind: "guild",
                id: "2023-08_improved_bans_page",
                label: "Guild Settings Improved Bans Page",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Guild Settings Improved Bans Page",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        777079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchGuildIntegrationsApplications: function() {
                    return u
                }
            });
            var a = n("454836"),
                l = n("312916"),
                i = n("912998"),
                r = n("535291"),
                s = n("467006");

            function u(e) {
                a.default.get({
                    url: s.Endpoints.GUILD_INTEGRATIONS(e),
                    query: {
                        include_applications: !0,
                        include_role_connections_metadata: !0
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let n = t.body.map(e => (null != e.user && (e.user = new r.default(e.user)), null != e.application && (e.application = i.default.createFromServer(e.application)), e));
                    l.default.dispatch({
                        type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
                        guildId: e,
                        integrations: n
                    })
                }).catch(() => {})
            }
        },
        114099: function(e, t, n) {
            "use strict";
            let a, l, i, r, s, u, o, d;
            n.r(t), n.d(t, {
                default: function() {
                    return ei
                }
            });
            var c = n("392711"),
                f = n.n(c),
                E = n("913527"),
                _ = n.n(E),
                h = n("661223"),
                g = n("454836"),
                S = n("986329"),
                m = n("312916"),
                p = n("181123"),
                T = n("775822"),
                A = n("421219"),
                I = n("621893"),
                C = n("535291"),
                M = n("327271"),
                N = n("871831"),
                R = n("84819"),
                L = n("738776"),
                O = n("777079"),
                D = n("467006"),
                y = n("414297"),
                b = n("188453");
            let U = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled"],
                v = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
                G = !1,
                P = D.FormStates.CLOSED,
                w = {},
                F = !1,
                k = null,
                H = null,
                x = 0,
                B = D.MFALevels.NONE,
                V = null,
                Y = {
                    primaryCategoryId: y.DEFAULT_DISCOVERY_CATEGORY_ID,
                    secondaryCategoryIds: [],
                    keywords: [],
                    emojiDiscoverabilityEnabled: y.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
                    partnerActionedTimestamp: null,
                    partnerApplicationTimestamp: null,
                    isPublished: !1,
                    reasonsToJoin: [],
                    socialLinks: [],
                    about: ""
                },
                W = !1,
                K = Y,
                q = Y,
                Q = null,
                $ = 0,
                j = null,
                X = null,
                z = null;

            function J(e) {
                if (null == s || null == r || r.id !== e) return !1;
                let t = M.default.getGuild(e);
                return null != t && (r === s ? s = r = t : (r = t, s = s.set("roles", r.roles)), !0)
            }

            function Z(e) {
                let {
                    guildId: t,
                    section: n,
                    subsection: l,
                    location: i
                } = e, o = M.default.getGuild(t);
                if (null == o) return ee();
                r = s = o, P = D.FormStates.OPEN, w = {}, u = R.default.castGuildIdAsEveryoneGuildRoleId(t), B = s.mfaLevel, q = K, d = null, V = i, et({
                    section: n ?? a ?? D.GuildSettingsSections.OVERVIEW,
                    subsection: l ?? null
                })
            }

            function ee() {
                G = !1, P = D.FormStates.CLOSED, r = s = null, F = !1, k = null, H = null, x = 0, Q = null, X = null, z = null, a = null, l = null, i = null, B = D.MFALevels.NONE, o = void 0
            }

            function et(e) {
                if (null == s) return !1;
                let t = a;
                if (a = e.section, l = e.subsection, a === D.GuildSettingsSections.BANS) {
                    let {
                        enabled: e
                    } = L.GuildSettingsBansNewExperiment.getCurrentConfig({
                        guildId: s.id,
                        location: "7f0c91_1"
                    });
                    !e && p.default.fetchGuildBans(s.id)
                } else if (a === D.GuildSettingsSections.INSTANT_INVITES) g.default.get({
                    url: D.Endpoints.GUILD_INSTANT_INVITES(s.id),
                    oldFormErrors: !0
                }).then(e => {
                    m.default.dispatch({
                        type: "GUILD_SETTINGS_LOADED_INVITES",
                        invites: e.body
                    })
                });
                else if (a === D.GuildSettingsSections.WIDGET) g.default.get({
                    url: D.Endpoints.GUILD_WIDGET(s.id),
                    oldFormErrors: !0
                }).then(e => {
                    m.default.dispatch({
                        type: "GUILD_SETTINGS_SET_WIDGET",
                        enabled: e.body.enabled,
                        channelId: e.body.channel_id
                    })
                });
                else if (a === D.GuildSettingsSections.INTEGRATIONS || a === D.GuildSettingsSections.ROLES) {
                    if (u = null, t !== e.section) return ea(e)
                } else a === D.GuildSettingsSections.MEMBERS ? u = s.getEveryoneRoleId() : a === D.GuildSettingsSections.VANITY_URL ? g.default.get({
                    url: D.Endpoints.GUILD_VANITY_URL(s.id),
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: {
                            code: t,
                            uses: n,
                            error: a
                        }
                    } = e;
                    m.default.dispatch({
                        type: "GUILD_SETTINGS_SET_VANITY_URL",
                        code: t,
                        uses: n,
                        error: a
                    })
                }) : a === D.GuildSettingsSections.SAFETY && m.default.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == l ? D.GuildSettingsSubsections.SAFETY_OVERVIEW : l
                })
            }

            function en(e) {
                return new I.default({
                    code: e.code,
                    temporary: e.temporary,
                    revoked: e.revoked,
                    inviter: null != e.inviter ? new C.default(e.inviter) : null,
                    channel: (0, T.createChannelRecordFromInvite)(e.channel),
                    guild: null != e.guild ? new A.default(e.guild) : null,
                    uses: e.uses,
                    maxUses: e.max_uses,
                    maxAge: e.max_age,
                    createdAt: _()(e.created_at ?? void 0)
                })
            }

            function ea(e) {
                if (null == s || P !== D.FormStates.OPEN || "GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== s.id) return !1;
                (0, O.fetchGuildIntegrationsApplications)(s.id)
            }
            class el extends h.default.Store {
                static #e = this.displayName = "GuildSettingsStore";
                initialize() {
                    this.waitFor(M.default, N.default)
                }
                getMetadata() {
                    return q
                }
                hasChanges() {
                    return !f().isEqual(s, r) || !f().isEqual(q, K)
                }
                isOpen() {
                    return G
                }
                getSavedRouteState() {
                    return o
                }
                getSection() {
                    return a
                }
                showNotice() {
                    return this.hasChanges()
                }
                getGuildId() {
                    return null != s ? s.id : null
                }
                showPublicSuccessModal() {
                    return !S.default.get(b.PUBLIC_SUCCESS_MODAL_SEEN_KEY)
                }
                getGuild() {
                    return s
                }
                isSubmitting() {
                    return P === D.FormStates.SUBMITTING
                }
                isGuildMetadataLoaded() {
                    return W
                }
                getErrors() {
                    return w
                }
                getSelectedRoleId() {
                    return u
                }
                getSlug() {
                    return d
                }
                getBans() {
                    return [Q, $]
                }
                getProps() {
                    return {
                        submitting: this.isSubmitting(),
                        integrations: z,
                        section: a,
                        subsection: l,
                        errors: w,
                        guild: s,
                        bans: Q,
                        bansVersion: $,
                        invites: X,
                        selectedRoleId: u,
                        embedEnabled: F,
                        embedChannelId: k,
                        mfaLevel: B,
                        searchQuery: i,
                        vanityURLCode: H,
                        vanityURLUses: x,
                        originalGuild: r,
                        hasChanges: this.hasChanges(),
                        guildMetadata: q,
                        analyticsLocation: V,
                        isGuildMetadataLoaded: W
                    }
                }
            }
            var ei = new el(m.default, __OVERLAY__ ? {} : {
                GUILD_SETTINGS_INIT: Z,
                GUILD_SETTINGS_OPEN: function(e) {
                    G = !0, Z(e)
                },
                GUILD_SETTINGS_CLOSE: ee,
                GUILD_SETTINGS_UPDATE: function(e) {
                    if (null == s) return !1;
                    U.forEach(t => {
                        null != s && e.hasOwnProperty(t) && (s = s.set(t, e[t]))
                    }), ! function() {
                        if (null == s) return;
                        let e = s.toJS(),
                            t = r.toJS();
                        !U.some(n => e[n] !== t[n]) && (s = r)
                    }()
                },
                GUILD_SETTINGS_CANCEL_CHANGES: function(e) {
                    let {
                        guildId: t
                    } = e;
                    w = {};
                    let n = M.default.getGuild(t);
                    null != n && (r = s = n)
                },
                GUILD_SETTINGS_SAVE_ROUTE_STACK: function(e) {
                    let {
                        state: t
                    } = e;
                    return o = t, !1
                },
                GUILD_SETTINGS_SUBMIT: function() {
                    P = D.FormStates.SUBMITTING, w = {}
                },
                GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
                    P = D.FormStates.OPEN
                },
                GUILD_SETTINGS_SUBMIT_FAILURE: function(e) {
                    P = D.FormStates.OPEN, a = a ?? D.GuildSettingsSections.OVERVIEW, l = null, w = e.errors ?? {}
                },
                GUILD_SETTINGS_SET_SECTION: et,
                GUILD_SETTINGS_SET_SEARCH_QUERY: function(e) {
                    i = e.searchQuery
                },
                GUILD_SETTINGS_LOADED_BANS: function(e) {
                    Q = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map), $++
                },
                GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
                    let {
                        bans: t,
                        guildId: n
                    } = e;
                    (j !== n || null == Q) && (j = n, Q = new Map), Q = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), Q), $++
                },
                GUILD_SETTINGS_LOADED_INVITES: function(e) {
                    X = e.invites.reduce((e, t) => (e[t.code] = en(t), e), {})
                },
                GUILD_SETTINGS_SET_WIDGET: function(e) {
                    F = e.enabled, k = e.channelId
                },
                GUILD_SETTINGS_SET_VANITY_URL: function(e) {
                    H = e.code ?? null, x = e.uses
                },
                GUILD_SETTINGS_SET_MFA_SUCCESS: function(e) {
                    let {
                        level: t
                    } = e;
                    B = t
                },
                GUILD_SETTINGS_ROLE_SELECT: function(e) {
                    let {
                        roleId: t
                    } = e;
                    u = t ?? null
                },
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
                    z = e.integrations
                },
                GUILD_BAN_ADD: function(e) {
                    let {
                        user: t,
                        guildId: n
                    } = e;
                    if (null == Q || null == s || s.id !== n) return !1;
                    Q.set(t.id, {
                        user: t,
                        reason: null
                    }), $++
                },
                GUILD_BAN_REMOVE: function(e) {
                    let {
                        user: t,
                        guildId: n
                    } = e;
                    if (null == Q || null == s || s.id !== n) return !1;
                    Q.delete(t.id), $++
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (!J(t)) return !1
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (!J(t)) return !1
                },
                GUILD_ROLE_DELETE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e;
                    if (!J(t)) return !1;
                    u === n && (u = null)
                },
                GUILD_UPDATE: function(e) {
                    if (null == s || s.id !== e.guild.id) return !1;
                    {
                        let e = M.default.getGuild(s.id);
                        if (null == e) return !1;
                        let t = r = e,
                            n = s.toJS();
                        U.forEach(e => {
                            if (!v.has(e)) {
                                if ("rulesChannelId" !== e && "publicUpdatesChannelId" !== e || n[e] !== b.CREATE_NEW_CHANNEL_VALUE) {
                                    if ("features" === e) {
                                        t.set(e, new Set(n[e]));
                                        return
                                    }
                                    t = t.set(e, n[e])
                                }
                            }
                        }), s = t
                    }
                },
                GUILD_DELETE: function(e) {
                    if (null == s || s.id !== e.guild.id) return !1;
                    ee()
                },
                USER_CONNECTIONS_UPDATE: ea,
                GUILD_INTEGRATIONS_UPDATE: ea,
                INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
                    X = {
                        ...X
                    }, delete X[e.code]
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    X = {
                        ...X,
                        [e.invite.code]: en(e.invite)
                    }
                },
                GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function(e) {
                    let {
                        guildId: t,
                        metadata: n
                    } = e;
                    null != s && t === s.id && (!1 === W && (W = !0), q = K = {
                        primaryCategoryId: n.primaryCategoryId ?? y.DEFAULT_DISCOVERY_CATEGORY_ID,
                        secondaryCategoryIds: n.secondaryCategoryIds ?? [],
                        keywords: n.keywords ?? [],
                        emojiDiscoverabilityEnabled: n.emojiDiscoverabilityEnabled ?? y.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
                        partnerActionedTimestamp: n.partnerActionedTimestamp ?? null,
                        partnerApplicationTimestamp: n.partnerApplicationTimestamp ?? null,
                        isPublished: n.isPublished ?? !1,
                        reasonsToJoin: n.reasonsToJoin ?? [],
                        socialLinks: n.socialLinks ?? [],
                        about: n.about ?? ""
                    }, w = {})
                },
                GUILD_DISCOVERY_METADATA_FETCH_FAIL: function() {
                    K = q = Y
                },
                GUILD_DISCOVERY_CATEGORY_ADD: function(e) {
                    let {
                        guildId: t,
                        categoryId: n
                    } = e;
                    null != s && t === s.id && (q = {
                        ...q,
                        secondaryCategoryIds: [...q.secondaryCategoryIds, n]
                    }, K = {
                        ...K,
                        secondaryCategoryIds: [...K.secondaryCategoryIds, n]
                    })
                },
                GUILD_DISCOVERY_CATEGORY_DELETE: function(e) {
                    let t, {
                        guildId: n,
                        categoryId: a
                    } = e;
                    if (null == s || n !== s.id) return;
                    let l = q.secondaryCategoryIds.indexOf(a); - 1 !== l && ((t = [...q.secondaryCategoryIds]).splice(l, 1), q = {
                        ...q,
                        secondaryCategoryIds: t
                    }), -1 !== (l = K.secondaryCategoryIds.indexOf(a)) && ((t = [...K.secondaryCategoryIds]).splice(l, 1), K = {
                        ...K,
                        secondaryCategoryIds: t
                    })
                },
                GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function(e) {
                    let {
                        guildId: t,
                        errors: n
                    } = e;
                    null != s && t === s.id && (w = n ?? {})
                },
                GUILD_UPDATE_DISCOVERY_METADATA: function(e) {
                    let {
                        guildId: t,
                        primaryCategoryId: n,
                        keywords: a,
                        emojiDiscoverabilityEnabled: l,
                        isPublished: i,
                        reasonsToJoin: r,
                        socialLinks: u,
                        about: o
                    } = e;
                    null != s && t === s.id && (q = {
                        ...q,
                        primaryCategoryId: null != n ? n : q.primaryCategoryId,
                        keywords: null != a ? a : q.keywords,
                        emojiDiscoverabilityEnabled: l ?? q.emojiDiscoverabilityEnabled,
                        isPublished: i ?? q.isPublished,
                        reasonsToJoin: null != r ? r : q.reasonsToJoin,
                        socialLinks: null != u ? u : q.socialLinks,
                        about: null != o ? o : q.about
                    })
                },
                GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function(e) {
                    let {
                        guildId: t,
                        errors: n
                    } = e;
                    null != s && t === s.id && (w = n ?? {})
                },
                GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function(e) {
                    let {
                        slug: t
                    } = e;
                    d = t
                },
                GUILD_DISCOVERY_SLUG_FETCH_FAIL: function(e) {
                    let {} = e;
                    d = null
                }
            })
        },
        740303: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("661223"),
                l = n("312916"),
                i = n("313433"),
                r = n("846475");
            let s = {},
                u = null;

            function o(e, t) {
                let n = s[e] ?? {
                    code: e,
                    state: r.GuildTemplateStates.RESOLVING
                };
                t(n = {
                    ...n
                }), s = {
                    ...s,
                    [e]: n
                }
            }

            function d(e) {
                c(e.guildTemplate)
            }

            function c(e) {
                return o(e.code, t => {
                    let n = (0, i.default)(e);
                    for (let e in n) t[e] = n[e]
                })
            }

            function f(e) {
                return o(e.code, e => {
                    e.state = r.GuildTemplateStates.EXPIRED
                })
            }
            class E extends a.default.Store {
                static #e = this.displayName = "GuildTemplateStore";
                getGuildTemplate(e) {
                    return null != e ? s[e] : null
                }
                getGuildTemplates() {
                    return s
                }
                getForGuild(e) {
                    for (let t in s) {
                        let n = s[t];
                        if ("sourceGuildId" in n && n.sourceGuildId === e && n.state !== r.GuildTemplateStates.EXPIRED) return n
                    }
                }
                getDisplayedGuildTemplateCode() {
                    return u
                }
            }
            var _ = new E(l.default, {
                GUILD_TEMPLATE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e;
                    s = {
                        ...s,
                        [t]: {
                            code: t,
                            state: r.GuildTemplateStates.RESOLVING
                        }
                    }
                },
                GUILD_TEMPLATE_CREATE_SUCCESS: d,
                GUILD_TEMPLATE_SYNC_SUCCESS: d,
                GUILD_TEMPLATE_RESOLVE_SUCCESS: d,
                GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function(e) {
                    let {
                        guildTemplates: t
                    } = e;
                    t.forEach(e => c(e))
                },
                GUILD_TEMPLATE_RESOLVE_FAILURE: f,
                GUILD_TEMPLATE_DELETE_SUCCESS: f,
                GUILD_TEMPLATE_ACCEPT: function(e) {
                    return o(e.code, e => {
                        e.state = r.GuildTemplateStates.ACCEPTING
                    })
                },
                GUILD_TEMPLATE_ACCEPT_SUCCESS: function(e) {
                    return o(e.code, e => {
                        e.state = r.GuildTemplateStates.ACCEPTED, e.usageCount = (e.usageCount ?? 0) + 1
                    })
                },
                GUILD_TEMPLATE_ACCEPT_FAILURE: function(e) {
                    return o(e.code, e => {
                        e.state = r.GuildTemplateStates.RESOLVED
                    })
                },
                GUILD_TEMPLATE_MODAL_SHOW: function(e) {
                    u = e.code
                },
                GUILD_TEMPLATE_MODAL_HIDE: function(e) {
                    u = null
                }
            })
        },
        860165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("501769");

            function l() {
                let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    l = window.GLOBAL_ENV.INVITE_HOST;
                return (0, a.isAndroid)() ? (l = location.host, e = `/invite/${t}`) : e = `/${t}`, `${n?`${location.protocol}//`:""}${l}${e}`
            }
        },
        702532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LocalMessageBackgroundSendingExperiment: function() {
                    return a
                }
            });
            let a = (0, n("516086").createExperiment)({
                kind: "user",
                id: "2023-08_local_message_background_sending",
                label: "Send Messages In The Backgrounded",
                defaultConfig: {
                    enableBackgroundSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Background Sending",
                    config: {
                        enableBackgroundSending: !0
                    }
                }]
            })
        },
        778290: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isChannelTypeMentionable: function() {
                    return l
                }
            });
            var a = n("775822");

            function l(e) {
                return (0, a.isGuildSelectableChannelType)(e) || (0, a.isGuildVocalChannelType)(e)
            }
        },
        347950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("302454"),
                l = n.n(a),
                i = n("516086");
            let r = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
                s = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-11_attachment_link_markup",
                    label: "Attachment Link Config User Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Shows links to attachments as regular links",
                        config: {
                            enabled: !1
                        }
                    }, {
                        id: 2,
                        label: 'Shows links to attachments as "mentions" of the filename',
                        config: {
                            enabled: !0
                        }
                    }]
                });
            var u = {
                attachmentLink: {
                    order: l().defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match(e) {
                        let t = r.exec(e);
                        if (null !== t) {
                            let {
                                enabled: e
                            } = s.getCurrentConfig({
                                location: "markup"
                            });
                            if (!e) return null
                        }
                        return t
                    },
                    parse(e, t, n) {
                        var a;
                        let l = e[0];
                        return {
                            type: "attachmentLink",
                            content: [{
                                type: "text",
                                content: a = e[1]
                            }],
                            attachmentUrl: l,
                            attachmentName: a
                        }
                    }
                }
            }
        },
        503352: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var a = n("302454"),
                l = n.n(a),
                i = n("987393"),
                r = n("741312"),
                s = n("140117"),
                u = n("341010"),
                o = n("731865"),
                d = n("327271"),
                c = n("197905"),
                f = n("606929"),
                E = n("871831"),
                _ = n("204606"),
                h = n("557129"),
                g = n("702340"),
                S = n("778290"),
                m = n("839739"),
                p = n("467006"),
                T = n("30175");
            let A = e => {
                let t = o.default.getChannel(e);
                return t?.getGuildId()
            };

            function I(e) {
                return {
                    type: "guild",
                    guildId: e.id,
                    content: (0, g.truncateText)(e.name, 32),
                    icon: _.default.getGuildIconURL({
                        id: e.id,
                        icon: e.icon,
                        size: 40
                    })
                }
            }

            function C(e, t) {
                let n;
                let a = L((0, g.truncateText)(e.name, 32));
                return {
                    type: "channel",
                    content: [n = "italics" === t ? {
                        type: "em",
                        content: [a]
                    } : a],
                    channelType: e.type,
                    iconType: e.iconType
                }
            }

            function M(e) {
                return {
                    type: "channel",
                    content: [L("")],
                    iconType: e ? "post" : "message"
                }
            }

            function N(e, t) {
                let n = o.default.getChannel(e),
                    a = (0, s.getChannelRoleSubscriptionStatus)(e, o.default, i.default, c.default).isSubscriptionGated,
                    l = (0, h.getMentionIconType)(n) ?? "text";
                if (null != t) {
                    let i = t.find(t => t.id === e);
                    if (null != i) return {
                        type: i.type,
                        id: i.id,
                        guildId: i.guild_id,
                        name: i.name,
                        isDm: null != n && n.isPrivate(),
                        isForumPost: null != n && n.isForumPost(),
                        isMentionable: !0,
                        canViewChannel: !0,
                        roleSubscriptionGated: a,
                        iconType: l,
                        parentId: n?.parent_id
                    }
                }
                return null != n ? {
                    type: n.type,
                    id: n.id,
                    guildId: n.guild_id,
                    name: (0, r.computeChannelName)(n, E.default, f.default),
                    isDm: n.isPrivate(),
                    isForumPost: n.isForumPost(),
                    isMentionable: (0, S.isChannelTypeMentionable)(n.type),
                    canViewChannel: (0, u.canViewChannel)(n),
                    roleSubscriptionGated: a,
                    iconType: l,
                    parentId: n.parent_id
                } : null
            }

            function R(e) {
                return {
                    type: "link",
                    content: [{
                        type: "text",
                        content: e
                    }],
                    target: e,
                    title: void 0
                }
            }

            function L(e) {
                return {
                    type: "text",
                    content: e
                }
            }

            function O(e, t, n, a, l) {
                let i = d.default.getGuild(e),
                    r = i?.id === a;
                return {
                    type: "channelMention",
                    guildId: e,
                    channelId: t,
                    messageId: n,
                    originalLink: l,
                    inContent: null == i || r ? null : [I(i)],
                    content: [C({
                        name: T.default.Messages.UNKNOWN_CHANNEL,
                        type: p.ChannelTypes.UNKNOWN,
                        iconType: "text"
                    }, "italics")]
                }
            }

            function D(e, t, n, a) {
                if (!e.canViewChannel) return function(e, t) {
                    let n = {
                        type: "channel",
                        content: [L(e.roleSubscriptionGated ? e.name : T.default.Messages.NO_ACCESS)],
                        channelType: e.roleSubscriptionGated ? e.type : p.ChannelTypes.UNKNOWN,
                        iconType: "locked"
                    };
                    return {
                        type: "channelMention",
                        guildId: e.guildId,
                        channelId: e.id,
                        messageId: t,
                        inContent: null,
                        content: [n]
                    }
                }(e, t);
                if (!e.isMentionable) return L(`#${e.name}`);
                let l = {
                        type: "channelMention",
                        channelId: e.id,
                        guildId: e.guildId,
                        messageId: t,
                        originalLink: a
                    },
                    i = d.default.getGuild(e.guildId);
                if (null == i) {
                    var r;
                    if (e.isDm) return {
                        ...l,
                        guildId: p.ME,
                        inContent: [C(e)],
                        content: [M(!1)]
                    };
                    return null != (r = a) ? R(r) : L(`#${T.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER}`)
                }
                let s = e.guildId === n;
                return {
                    ...l,
                    ... function(e, t, n, a) {
                        let l = I(e),
                            i = C(t),
                            r = M(t.isForumPost);
                        if (n && a) {
                            if (t.isForumPost) {
                                let e = o.default.getChannel(t.parentId);
                                if (null != e) return {
                                    inContent: [C({
                                        name: e.name,
                                        type: e.type,
                                        iconType: (0, h.getMentionIconType)(e) ?? "forum"
                                    })],
                                    content: [i]
                                }
                            }
                            return {
                                inContent: [i],
                                content: [r]
                            }
                        }
                        if (n && !a) return {
                            inContent: null,
                            content: [i]
                        };
                        if (!n && a) return {
                            inContent: [l],
                            content: [t.isForumPost ? i : r]
                        };
                        else if (!n && !a) return {
                            inContent: [l],
                            content: [i]
                        }
                    }(i, e, s, null != t)
                }
            }
            let y = {
                    order: m.default.order,
                    requiredFirstCharacters: ["<"],
                    match: e => /^<#(\d+)>/.exec(e),
                    parse(e, t, n) {
                        let a = e[1];
                        if (n.returnMentionIds) return {
                            type: "channelMention",
                            id: a
                        };
                        let l = N(a, n.mentionChannels);
                        return null == l ? O(null, a, null, A(n.channelId)) : D(l, null, A(n.channelId))
                    }
                },
                b = {
                    order: l().defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match(e) {
                        let t = u.CHANNEL_OR_MESSAGES_URL_RE.exec(e);
                        return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
                    },
                    parse(e, t, n) {
                        let a = e[0],
                            l = e[1],
                            i = e[2],
                            r = e[3];
                        if (null == i) return R(a);
                        let s = N(i, null);
                        return null == s ? O(l, i, r, A(n.channelId), a) : D(s, r, A(n.channelId), a)
                    }
                };
            var U = {
                channelMention: y,
                channelOrMessageUrl: b,
                mediaPostLink: {
                    order: l().defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match: e => u.MEDIA_POST_URL_RE.exec(e),
                    parse(e, t, n) {
                        let a = e[0],
                            l = e[1],
                            i = e[2],
                            r = e[3],
                            s = e[4];
                        if (null == i || null == r) return R(a);
                        let u = N(r, null);
                        if (null != u) return D(u, s, A(n.channelId), a);
                        let o = N(i, null);
                        return null != o ? D(o, s, A(n.channelId), a) : O(l, i, s, A(n.channelId), a)
                    }
                }
            }
        },
        252177: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("302454"),
                l = n.n(a);
            let i = /\n$/;
            var r = {
                ...l().defaultRules.heading,
                requiredFirstCharacters: [" ", "#"],
                match: (e, t, n) => t.allowHeading ? null == n || "" === n || null != n.match(i) ? (0, a.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null : null
            }
        },
        994379: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("512722"),
                l = n.n(a),
                i = n("302454"),
                r = n.n(i);
            let s = /\n{2,}$/,
                u = /(?:^|\n)( *)$/,
                o = "(?:[*-]|\\d+\\.)",
                d = "( *)(" + o + ") +",
                c = RegExp("^" + d),
                f = RegExp(d + "[^\\n]*(?:\\n(?!\\1" + o + " )[^\\n]*)*(\n|$)", "gm"),
                E = / *\n$/,
                _ = RegExp("^( *)(" + o + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + o + " )|$)"),
                h = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
                g = e => e.map(e => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e));
            var S = {
                ...r().defaultRules.list,
                requiredFirstCharacters: " *-0123456789".split(""),
                match: (e, t) => {
                    if (!t.allowList || t._listLevel >= 11) return null;
                    let n = null == t.prevCapture ? "" : t.prevCapture[0],
                        a = u.exec(n);
                    return null == a || h.test(a[0]) ? null : _.exec(e)
                },
                parse: (e, t, n) => {
                    let a = e[2],
                        i = a.length > 1,
                        r = e[0].replace(s, "\n").match(f);
                    l()(null != r, "markup list items can not be parsed.");
                    let u = !1;
                    return {
                        ordered: i,
                        start: i ? Math.min(1e9, Math.max(1, +a)) : void 0,
                        items: r.map((e, a) => {
                            let l;
                            let i = c.exec(e),
                                s = RegExp("^ {1," + (null != i ? i[0].length : 0) + "}", "gm"),
                                o = e.replace(s, "").replace(c, ""),
                                d = a === r.length - 1,
                                f = -1 !== o.indexOf("\n\n") || d && u;
                            u = f;
                            let _ = n.inline,
                                h = n._list,
                                S = n._listLevel;
                            n._list = !0, n._listLevel = (S ?? 0) + 1, f ? (n.inline = !1, l = o.replace(E, "\n\n")) : (n.inline = !0, l = o.replace(E, ""));
                            let m = g(t(l, {
                                ...n,
                                allowHeading: !1
                            }));
                            return n.inline = _, n._list = h, n._listLevel = S, m
                        })
                    }
                }
            }
        },
        516487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Q
                }
            }), n("653041");
            var a = n("392711"),
                l = n.n(a),
                i = n("302454"),
                r = n.n(i),
                s = n("469265"),
                u = n("288990"),
                o = n("697067"),
                d = n("731865"),
                c = n("327271"),
                f = n("871831"),
                E = n("107888"),
                _ = n("439823"),
                h = n("347950"),
                g = n("503352"),
                S = n("252177"),
                m = n("222974"),
                p = n("994379"),
                T = n("839739"),
                A = n("969907"),
                I = n("795257"),
                C = n("215364"),
                M = n("467006"),
                N = n("182220"),
                R = n("134805"),
                L = n("30175");
            let O = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
                D = /^$|\n *$/,
                y = /^ *>>> ?/,
                b = /^ *> ?/gm;

            function U(e) {
                let t = (0, m.punycodeLink)(e[1]);
                if (null == t) return {
                    type: "text",
                    content: e[1]
                };
                let {
                    displayTarget: n,
                    target: a
                } = t;
                return {
                    type: "link",
                    content: [{
                        type: "text",
                        content: n
                    }],
                    target: a,
                    title: void 0
                }
            }
            let v = e => {
                    let t = d.default.getChannel(e);
                    return t?.getGuildId()
                },
                G = e => null != e.guildId ? c.default.getGuild(e.guildId) : null != e.channelId ? c.default.getGuild(v(e.channelId)) : null,
                P = {
                    newline: r().defaultRules.newline,
                    paragraph: r().defaultRules.paragraph,
                    escape: {
                        ...r().defaultRules.escape,
                        match: (e, t, n) => !1 === t.allowEscape ? null : r().defaultRules.escape.match(e, t, n)
                    },
                    blockQuote: {
                        ...r().defaultRules.blockQuote,
                        requiredFirstCharacters: [" ", ">"],
                        match(e, t) {
                            let {
                                prevCapture: n,
                                inQuote: a,
                                nested: l
                            } = t;
                            if (a || l) return null;
                            if (null == n) return O.exec(e);
                            let i = n[0];
                            return D.test(i) ? O.exec(e) : null
                        },
                        parse(e, t, n) {
                            let a = e[0],
                                l = !!y.exec(a),
                                i = a.replace(l ? y : b, ""),
                                r = n.inQuote || !1,
                                s = n.inline || !1;
                            n.inQuote = !0, !l && (n.inline = !0);
                            let u = t(i, n);
                            return n.inQuote = r, n.inline = s, 0 === u.length && u.push({
                                type: "text",
                                content: " "
                            }), {
                                content: u,
                                type: "blockQuote"
                            }
                        }
                    },
                    link: m.default,
                    autolink: {
                        ...r().defaultRules.autolink,
                        parse: U
                    },
                    url: {
                        ...r().defaultRules.url,
                        requiredFirstCharacters: ["h", "s"],
                        match(e, t) {
                            if (!t.inline) return null;
                            let n = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/.exec(e);
                            if (null != n) {
                                let e = 0,
                                    t = n[0];
                                for (let n = t.length - 1; n >= 0 && ")" === t[n]; n--) {
                                    let n = t.indexOf("(", e);
                                    if (-1 === n) {
                                        t = t.slice(0, t.length - 1);
                                        break
                                    }
                                    e = n + 1
                                }
                                n[0] = n[1] = t
                            }
                            return n
                        },
                        parse: U
                    },
                    strong: r().defaultRules.strong,
                    em: r().defaultRules.em,
                    u: r().defaultRules.u,
                    br: r().defaultRules.br,
                    text: T.default,
                    inlineCode: {
                        ...r().defaultRules.inlineCode,
                        parse(e, t, n) {
                            let a = r().defaultRules.inlineCode.parse(e, t, n);
                            return !0 === n.parseInlineCodeChildContent ? {
                                ...a,
                                validationChildContent: t(a.content, n)
                            } : a
                        }
                    },
                    emoticon: {
                        order: T.default.order,
                        requiredFirstCharacters: ["\xaf"],
                        match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
                        parse: e => ({
                            type: "text",
                            content: e[1]
                        })
                    },
                    codeBlock: {
                        order: r().defaultRules.codeBlock.order,
                        requiredFirstCharacters: ["`"],
                        match: e => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
                        parse: (e, t, n) => ({
                            lang: e[1] ?? "",
                            content: e[2] ?? "",
                            inQuote: n.inQuote || !1
                        })
                    },
                    roleMention: {
                        order: T.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<@&(\d+)>/.exec(e),
                        parse(e, t, n) {
                            let [a, l] = e;
                            if (n.returnMentionIds) return {
                                type: "roleMention",
                                id: l
                            };
                            let i = G(n),
                                r = null != i ? i.roles[l] : null;
                            return null == r ? {
                                type: "text",
                                content: `@${L.default.Messages.DELETED_ROLE_PLACEHOLDER}`
                            } : {
                                type: "mention",
                                channelId: n.channelId,
                                guildId: null != i ? i.id : null,
                                roleId: l,
                                roleColor: r.color,
                                color: r.color,
                                colorString: r.colorString,
                                content: [{
                                    type: "text",
                                    content: `@${r.name}`
                                }]
                            }
                        }
                    },
                    mention: {
                        order: T.default.order,
                        requiredFirstCharacters: ["<", "@"],
                        match(e, t) {
                            let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                            return null != n && ("@Clyde" !== n[0] || (0, s.getClydeEnabled)(G(t), d.default.getChannel(t.channelId))) ? n : null
                        },
                        parse(e, t, n) {
                            let a, l;
                            if (n.returnMentionIds) return null == e[1] ? {
                                type: "mention",
                                text: e[0]
                            } : {
                                type: "mention",
                                id: e[1]
                            };
                            let i = f.default.getUser(e[1]),
                                r = d.default.getChannel(n.channelId);
                            null != i && (l = i.id, a = i.toString(), null != r && (a = E.default.getNickname(r.getGuildId(), n.channelId, i) ?? _.default.getName(i))), null == i && "@Clyde" === e[0] && (0, s.getClydeEnabled)(G(n), r) && (l = R.CLYDE_AI_USER_ID);
                            let u = e[1],
                                o = null != u && M.ID_REGEX.test(u.trim()) && n.unknownUserMentionPlaceholder ? `@${L.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER}` : e[0];
                            return {
                                userId: l,
                                channelId: n.channelId,
                                guildId: r?.getGuildId(),
                                roleName: e[2],
                                content: [{
                                    type: "text",
                                    content: null != a ? `@${a}` : o
                                }]
                            }
                        }
                    },
                    channelMention: g.default.channelMention,
                    channelOrMessageUrl: g.default.channelOrMessageUrl,
                    mediaPostLink: g.default.mediaPostLink,
                    attachmentLink: h.default.attachmentLink,
                    commandMention: {
                        order: r().defaultRules.text.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
                        parse(e, t, n) {
                            if (n.returnMentionIds) return {
                                type: "commandMention",
                                id: e[2]
                            };
                            let [, ...a] = e[1].split(" "), l = `${e[2]}${[...a].map(e=>`${N.SUB_COMMAND_KEY_SEPARATOR}${e}`).join("")}`;
                            return {
                                channelId: n.channelId,
                                commandId: e[2],
                                commandName: e[1],
                                commandKey: l,
                                content: [{
                                    type: "text",
                                    content: `${e[1]}`
                                }]
                            }
                        }
                    },
                    emoji: {
                        order: T.default.order,
                        requiredFirstCharacters: [":"],
                        match(e) {
                            let t = u.default.EMOJI_NAME_RE.exec(e);
                            return null != t && "" !== u.default.convertNameToSurrogate(t[1]) ? t : null
                        },
                        parse(e) {
                            let t = u.default.convertNameToSurrogate(e[1]);
                            return {
                                type: "text",
                                content: null == t || "" === t ? `:${e[1]}:` : t
                            }
                        }
                    },
                    soundboard: {
                        order: T.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<sound:(\d+)>/.exec(e),
                        parse(e, t, n) {
                            let a = e[1],
                                l = o.default.getSoundById(a),
                                i = l?.name ?? a;
                            return {
                                type: "soundboard",
                                id: a,
                                soundId: a,
                                channelId: n.channelId,
                                content: i
                            }
                        }
                    },
                    customEmoji: {
                        order: T.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<a?:(\w+):(\d+)>/.exec(e),
                        parse: e => ({
                            type: "text",
                            content: `:${e[1]}:`
                        })
                    },
                    timestamp: {
                        order: T.default.order - 1,
                        requiredFirstCharacters: ["<"],
                        match: e => I.TIMESTAMP_REGEX.exec(e),
                        parse(e) {
                            let [t, n, a] = e, l = (0, I.parseTimestamp)(n, a);
                            return null == l ? {
                                type: "text",
                                content: t
                            } : l
                        }
                    },
                    s: {
                        order: r().defaultRules.u.order,
                        requiredFirstCharacters: ["~"],
                        match: r().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
                        parse: r().defaultRules.u.parse
                    },
                    spoiler: {
                        order: T.default.order,
                        requiredFirstCharacters: ["|"],
                        match: e => M.MARKDOWN_SPOILER_REGEXP.exec(e),
                        parse: (e, t, n) => ({
                            content: t(e[1], n),
                            channelId: n.channelId
                        })
                    },
                    staticRouteLink: {
                        order: T.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => M.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e),
                        parse: (e, t, n) => ({
                            content: [{
                                type: "text",
                                content: {
                                    home: L.default.Messages.SERVER_GUIDE,
                                    guide: L.default.Messages.SERVER_GUIDE,
                                    browse: L.default.Messages.CHANNEL_BROWSER_TITLE,
                                    customize: L.default.Messages.CHANNELS_AND_ROLES
                                } [e[1]]
                            }],
                            channelId: e[1],
                            guildId: v(n.channelId),
                            id: e[1]
                        })
                    },
                    heading: S.default,
                    list: p.default
                },
                w = (0, C.default)([P, A.default]),
                F = l().omit(w, ["inlineCode", "codeBlock", "br", "blockQuote"]),
                k = l().omit(w, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
                H = l().omit(w, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink"]),
                x = l().omit((0, C.default)([w, {
                    inlineCode: {
                        match(e, t, n) {
                            let a = w.codeBlock.match(e, t, n);
                            if (null != a) return a;
                            let l = w.inlineCode.match(e, t, n);
                            if (null != l) return l
                        }
                    }
                }]), ["blockQuote", "codeBlock", "br"]),
                B = l().omit(w, ["codeBlock", "br", "blockQuote"]),
                V = l().omit(w, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline"]),
                Y = l().omit(w, ["codeBlock", "blockQuote", "br"]),
                W = l().omit(w, ["codeBlock", "br", "inlineCode"]);

            function K(e, t) {
                return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
            }
            let q = (0, C.default)([{
                highlightWord: {
                    order: -1,
                    match(e, t) {
                        if (null == t.highlightWord || 0 === t.highlightWord.length) return null;
                        let n = e.indexOf(t.highlightWord);
                        if (-1 === n) return null;
                        let a = !K(e, n);
                        if (a)
                            do n = e.indexOf(t.highlightWord, n + 1), a = !K(e, n); while (a && -1 !== n);
                        if (-1 === n) return null;
                        let l = e.substring(0, n),
                            i = e.substring(n + t.highlightWord.length);
                        return [e, t.highlightWord, l, i]
                    },
                    parse(e, t, n) {
                        let a = t(e[2], n),
                            l = t(e[3], n);
                        return [...a, {
                            type: "highlight",
                            content: e[1]
                        }, ...l]
                    }
                }
            }, l().omit(w, ["url"])]);
            var Q = {
                RULES: w,
                CHANNEL_TOPIC_RULES: F,
                VOICE_CHANNEL_STATUS_RULES: k,
                EMBED_TITLE_RULES: H,
                INLINE_REPLY_RULES: x,
                GUILD_VERIFICATION_FORM_RULES: B,
                GUILD_EVENT_RULES: Y,
                PROFILE_BIO_RULES: V,
                AUTO_MODERATION_SYSTEM_MESSAGE_RULES: q,
                NATIVE_SEARCH_RESULT_LINK_RULES: W
            }
        },
        839739: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                textMarkupPatternWithExclusions: function() {
                    return i
                }
            });
            var a = n("302454"),
                l = n.n(a);
            let i = e => RegExp(`^[\\s\\S]+?(?=${e}|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)`);
            var r = {
                ...l().defaultRules.text,
                match: (0, a.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/)
            }
        },
        969907: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("302454"),
                l = n.n(a),
                i = n("353118"),
                r = n("288990"),
                s = n("659300"),
                u = n("839739"),
                o = {
                    s: {
                        requiredFirstCharacters: ["~"],
                        match: l().inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
                    },
                    highlight: {
                        order: u.default.order,
                        match: () => null
                    },
                    emoji: {
                        order: u.default.order,
                        requiredFirstCharacters: [":"],
                        match(e) {
                            let t = r.default.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
                            return null != t && "" !== r.default.convertNameToSurrogate(t[1]) ? t : null
                        },
                        parse(e) {
                            let [t, n] = e, a = r.default.convertNameToSurrogate(n);
                            return null == a || "" === a ? {
                                type: "text",
                                content: t
                            } : {
                                name: `:${n}:`,
                                surrogate: a,
                                src: s.default.getURL(a)
                            }
                        }
                    },
                    customEmoji: {
                        order: l().defaultRules.codeBlock.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<(a)?:(\w+):(\d+)>/.exec(e),
                        parse(e, t, n) {
                            let [a, l, r, s] = e, {
                                guildId: u
                            } = n, o = i.default.getDisambiguatedEmojiContext(u).getById(s), d = null == o || o.require_colons;
                            return null != o && (r = o.name), {
                                emojiId: s,
                                name: d ? `:${r}:` : r,
                                animated: "a" === l
                            }
                        }
                    },
                    text: {
                        parse(e) {
                            let t = r.default.findInlineEmojisFromSurrogates(e[0]),
                                n = 0;
                            return t.map(e => {
                                if ("text" === e.type) {
                                    let t = {
                                        index: n,
                                        0: e.text
                                    };
                                    return n += e.text.length, {
                                        type: "text",
                                        content: e.text,
                                        originalMatch: t
                                    }
                                } {
                                    let t = {
                                        index: n,
                                        0: e.surrogate
                                    };
                                    return n += e.surrogate.length, {
                                        type: "emoji",
                                        name: e.emojiName,
                                        surrogate: e.surrogate,
                                        src: s.default.getURL(e.surrogate),
                                        originalMatch: t
                                    }
                                }
                            })
                        }
                    },
                    looseEm: {
                        ...l().defaultRules.em,
                        match: l().inlineRegex(RegExp("^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)")),
                        parse: (e, t, n) => ({
                            type: "em",
                            content: t(e[1], n),
                            originalMatch: e
                        })
                    }
                }
        },
        795257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_TIMESTAMP_FORMAT: function() {
                    return u
                },
                TIMESTAMP_FORMATS: function() {
                    return s
                },
                TIMESTAMP_REGEX: function() {
                    return d
                },
                parseTimestamp: function() {
                    return c
                },
                unparseTimestamp: function() {
                    return f
                }
            });
            var a = n("913527"),
                l = n.n(a),
                i = n("566031"),
                r = n("152551");
            let s = {
                    t: e => (0, i.dateFormat)(e, "LT"),
                    T: e => (0, i.dateFormat)(e, "LTS"),
                    d: e => (0, i.dateFormat)(e, "L"),
                    D: e => (0, i.dateFormat)(e, "LL"),
                    f: e => (0, i.dateFormat)(e, "LLL"),
                    F: e => (0, i.dateFormat)(e, "LLLL"),
                    R: e => {
                        let t = l().relativeTimeThreshold("s");
                        l().relativeTimeThreshold("s", 60);
                        let n = l().relativeTimeThreshold("ss");
                        l().relativeTimeThreshold("ss", -1);
                        let a = l().relativeTimeThreshold("m");
                        l().relativeTimeThreshold("m", 60);
                        let i = null;
                        try {
                            i = l()(e.toDate()).fromNow()
                        } catch (e) {}
                        return l().relativeTimeThreshold("s", t), l().relativeTimeThreshold("ss", n), l().relativeTimeThreshold("m", a), i ?? l()(e.toDate()).fromNow()
                    }
                },
                u = "f";
            Object.setPrototypeOf(s, null);
            let o = Object.keys(s).join("|"),
                d = RegExp(`^<t:(-?\\d{1,17})(?::(${o}))?>`);

            function c(e, t) {
                let n = l()(Number(e) * r.default.Millis.SECOND);
                if (!n.isValid()) return null;
                let a = null != t ? s[t] : void 0;
                return null == a && (a = s[u]), {
                    timestamp: e,
                    format: t,
                    parsed: n,
                    full: s.F(n),
                    formatted: a(n)
                }
            }

            function f(e, t) {
                return null != t ? `<t:${e}:${t}>` : `<t:${e}>`
            }
        },
        215364: function(e, t, n) {
            "use strict";

            function a(e) {
                let t = {};
                for (let n of e)
                    for (let e in n) e in t ? t[e] = {
                        ...t[e],
                        ...n[e]
                    } : t[e] = {
                        ...n[e]
                    };
                return t
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        572291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = {
                backgroundTaskIdentifierInvalid: -1,
                backgroundify: function(e, t) {
                    return e
                },
                startBackgroundTask: e => new Promise(e => e(-1)),
                endBackgroundTask: e => {}
            }
        },
        929748: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return q
                }
            }), n("653041");
            var a = n("392711"),
                l = n.n(a),
                i = n("302454"),
                r = n.n(i),
                s = n("741312"),
                u = n("353118"),
                o = n("288990"),
                d = n("516487"),
                c = n("839739"),
                f = n("614681"),
                E = n("786649"),
                _ = n("362939"),
                h = n("731865"),
                g = n("610043"),
                S = n("361733"),
                m = n("327271"),
                p = n("197905"),
                T = n("606929"),
                A = n("532858"),
                I = n("871831"),
                C = n("604293"),
                M = n("659300"),
                N = n("439823"),
                R = n("467006"),
                L = n("308439"),
                O = n("30175");

            function D(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                if (t[0] !== e) return null;
                let l = t.substr(e.length);
                return n.sortBy(e => {
                    let {
                        text: t
                    } = e;
                    return -t.length
                }).filter(e => {
                    let {
                        text: n
                    } = e;
                    return 1 === t.toLowerCase().indexOf(n.toLowerCase())
                }).sortBy(e => {
                    let {
                        text: t
                    } = e;
                    return t === l ? 0 : 1
                }).map(t => {
                    let {
                        id: n,
                        text: l
                    } = t;
                    return [e + l, n, a]
                }).first()
            }

            function y(e) {
                return {
                    order: e.order,
                    match: e.match,
                    parse: t => ({
                        type: e.type,
                        content: t[0]
                    })
                }
            }

            function b(e) {
                return {
                    match: r().anyScopeRegex(e),
                    parse: e => ({
                        type: "text",
                        content: e[0]
                    })
                }
            }
            let U = d.default.RULES,
                v = c.default,
                G = /^<@!?(\d+)>/,
                P = /^<@&(\d+)>/,
                w = /^<#(\d+)>/,
                F = /^<a?:(\w+):(\d+)>/,
                k = /(@everyone|@here|@Clyde)\b/,
                H = {
                    link: y(r().defaultRules.link),
                    autolink: y(r().defaultRules.autolink),
                    url: y(r().defaultRules.url),
                    inlineCode: y(U.inlineCode),
                    codeBlock: y(U.codeBlock),
                    rawUserMention: b(G),
                    rawRoleMention: b(P),
                    rawChannelMention: b(w),
                    rawEmoji: b(F),
                    mention: {
                        match(e, t, n) {
                            let a = n.split(" ").pop() + e;
                            if (/^[^ ]+@[^ ]+\.[^ .]+/.test(a)) return null;
                            let l = D("@", e, t.users, "mention");
                            if (l || (l = D("@", e, t.mentionableRoles, "roleMention"))) return l;
                            if (!(l = D("@", e, t.users.map(e => ({
                                    ...e,
                                    text: e.text.split("#")[0]
                                })), "mention"))) return null;
                            let i = k.exec(e);
                            if (null != i && l[0].length <= i[0].length) return null;
                            if ("" === n && (0, f.canSuppressNotifications)()) {
                                let t = f.SILENT_RE.exec(e);
                                if (null != t && l[0].length <= t[0].length) return null
                            }
                            return l
                        },
                        parse(e) {
                            let [, t, n] = e, a = "@";
                            return "roleMention" === n && (a += "&"), {
                                type: n,
                                content: `<${a}${t}>`
                            }
                        }
                    },
                    channel: {
                        match: (e, t) => (function(e, t, n) {
                            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                            if (t[0] !== e) return null;
                            if ('"' !== t[1]) return D(e, t, n, a);
                            let l = 2;
                            for (; l < t.length; l++) {
                                if ("\\" === t[l]) {
                                    l++;
                                    continue
                                }
                                if ('"' === t[l]) break
                            }
                            let i = t.substring(0, l + 1),
                                r = (0, s.unescapeChannelName)(t.substring(2, l));
                            return n.sortBy(e => {
                                let {
                                    text: t
                                } = e;
                                return -t.length
                            }).filter(e => {
                                let {
                                    text: t
                                } = e;
                                return r === t
                            }).map(e => {
                                let {
                                    id: t
                                } = e;
                                return [i, t, a]
                            }).first()
                        })("#", e, t.channels),
                        parse: e => ({
                            type: "text",
                            content: `<#${e[1]}>`
                        })
                    },
                    emoticon: {
                        match(e, t, n) {
                            if (!_.ConvertEmoticons.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
                            let a = o.default.EMOJI_SHORTCUT_RE.exec(e);
                            return null == a || a[0].length !== e.length && " " !== e[a[0].length] && "\n" !== e[a[0].length] ? null : a
                        },
                        parse: e => ({
                            type: "emoticon",
                            content: o.default.convertShortcutToName(e[1]),
                            isShortcut: !0
                        })
                    },
                    emoji: {
                        order: U.emoji.order,
                        match: e => o.default.EMOJI_NAME_RE.exec(e),
                        parse(e, t, n) {
                            let [a, l] = e, {
                                customEmoji: i
                            } = n, r = Object.prototype.hasOwnProperty.call(i, l) ? i[l] : null;
                            return null != r ? {
                                type: "customEmoticon",
                                content: `<${!0===r.animated?"a":""}:${r.originalName??r.name}:${r.id}>`,
                                emoji: r
                            } : {
                                type: "text",
                                content: a
                            }
                        }
                    },
                    customEmoticons: {
                        match: (e, t) => t.customEmoticonsRegex?.exec(e) ?? null,
                        parse(e, t, n) {
                            let [a, l] = e, {
                                emojiContext: i
                            } = n, r = i.getEmoticonByName(l);
                            return null != r ? {
                                type: "customEmoticon",
                                content: `<${!0===r.animated?"a":""}:${r.name}:${r.id}>`,
                                emoji: r
                            } : {
                                type: "text",
                                content: a
                            }
                        }
                    },
                    text: {
                        ...v,
                        match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, c.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != v.match ? v.match(e, t, "") : null
                    }
                },
                x = {
                    inlineCode: y(U.inlineCode),
                    codeBlock: y(U.codeBlock),
                    mention: {
                        match: r().anyScopeRegex(G),
                        parse(e, t, n) {
                            let {
                                isNotification: a
                            } = n, l = I.default.getUser(e[1]);
                            if (null == l) return {
                                content: e[0]
                            };
                            let i = N.default.getUserTag(l, {
                                identifiable: a && A.default.enabled ? "never" : "always"
                            });
                            if (!a) return {
                                content: `@${i}`
                            };
                            {
                                let e = N.default.getGlobalName(l);
                                return {
                                    content: null != e ? `@${e}` : `@${i}`
                                }
                            }
                        }
                    },
                    roleMention: {
                        match: r().anyScopeRegex(P),
                        parse(e, t, n) {
                            let {
                                guild: a
                            } = n;
                            if (null != a) {
                                let t = a.roles[e[1]];
                                if (null != t) return {
                                    content: `@${t.name}`
                                }
                            }
                            return {
                                content: e[0]
                            }
                        }
                    },
                    channel: {
                        match: r().anyScopeRegex(w),
                        parse(e) {
                            let t = h.default.getChannel(e[1]);
                            return {
                                content: null == t ? e[0] : (0, s.computeChannelName)(t, I.default, T.default, !0, !0)
                            }
                        }
                    },
                    emoji: {
                        match: r().anyScopeRegex(F),
                        parse(e, t, n) {
                            let [a, l, i] = e, {
                                guild: r
                            } = n, s = u.default.getDisambiguatedEmojiContext(r ? r.id : null).getById(i), o = null != s ? s.name : l;
                            return {
                                content: `:${o}:`
                            }
                        }
                    },
                    soundboard: {
                        match: r().anyScopeRegex(/^<sound:(\d+)>/),
                        parse(e) {
                            let [t, n] = e;
                            return {
                                content: `<sound:${n}>`
                            }
                        }
                    },
                    spoiler: {
                        match: r().anyScopeRegex(R.MARKDOWN_SPOILER_REGEXP),
                        parse: () => ({
                            content: `<${O.default.Messages.SPOILER.toLowerCase()}>`
                        })
                    },
                    staticRouteLink: {
                        match: r().anyScopeRegex(R.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
                        parse: e => ({
                            content: `<id:${e[1]}>`
                        })
                    },
                    timestamp: {
                        ...U.timestamp,
                        parse() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return {
                                content: U.timestamp.parse(...t).formatted
                            }
                        }
                    },
                    text: {
                        ...v
                    }
                };
            [H, x].forEach(e => {
                Object.keys(e).forEach((t, n) => {
                    e[t].order = n
                })
            });
            let B = r().parserFor(H),
                V = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

            function Y(e, t, n, a) {
                let l = "";
                return e.forEach(e => {
                    if (! function(e, t, n) {
                            if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
                                let a;
                                let l = o.default.translateSurrogatesToInlineEmoji(t.content);
                                for (; null !== (a = V.exec(l));) {
                                    let l;
                                    null != a[1] && "" !== a[1] ? e.emojiContext && (l = e.emojiContext.getById(a[1])) : l = o.default.getByName(a[2]), l && n(l, t.isShortcut || !1)
                                }
                            }
                        }(t, e, a), "string" == typeof e.content) switch (e.type) {
                        case "codeBlock":
                        case "inlineCode":
                        case "mention":
                        case "roleMention":
                        case "channel":
                        case "emoji":
                            l += e.content;
                            break;
                        default:
                            l += n(e.content)
                    } else e.content.constructor === Array ? l += Y(e.content, t, n, a) : console.warn("Unknown message item type: ", e)
                }), l
            }

            function W(e) {
                let t;
                let n = e?.getGuildId(),
                    a = null != n ? m.default.getGuild(n) : null,
                    i = p.default.can(R.Permissions.MENTION_EVERYONE, e);
                t = e?.isPrivate() ? e.recipients.map(e => ({
                    userId: e,
                    nick: null
                })) : null != n ? S.default.getMembers(n).map(e => {
                    let {
                        userId: t,
                        nick: n
                    } = e;
                    return {
                        userId: t,
                        nick: n
                    }
                }) : [];
                let r = l()(t.reduce((e, t) => {
                        let {
                            userId: n
                        } = t, a = I.default.getUser(n);
                        return null == a ? e : (e.push({
                            id: n,
                            text: a.tag
                        }), e)
                    }, [])),
                    s = l()(null != a ? a.roles : {}).values().filter(e => {
                        let {
                            mentionable: t
                        } = e;
                        return i || t
                    }).map(e => {
                        let {
                            id: t,
                            name: n
                        } = e;
                        return {
                            id: t,
                            text: n
                        }
                    }),
                    o = l()(g.default.getTextChannelNameDisambiguations(n)).map(e => {
                        let {
                            id: t,
                            name: n
                        } = e;
                        return {
                            id: t,
                            text: n
                        }
                    }),
                    d = null != n ? l()(C.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(e => e !== g.GUILD_SELECTABLE_CHANNELS_KEY).flatMap(e => g.default.getChannels(n)[e].map(e => ({
                        id: e.channel.id,
                        text: e.channel.name
                    }))).value() : [],
                    c = E.default.computeAllActiveJoinedThreads(n).map(e => ({
                        id: e.id,
                        text: e.name
                    })),
                    f = u.default.getDisambiguatedEmojiContext(n),
                    _ = f.getEscapedCustomEmoticonNames(),
                    h = f.getCustomEmoji(),
                    T = f.getCustomEmoticonRegex();
                return {
                    inline: !0,
                    mentionableRoles: s,
                    guild: a,
                    users: r,
                    channels: o.concat(d).concat(c),
                    emojiContext: f,
                    customEmoticonsRegex: T,
                    customEmoji: h,
                    textExclusions: _,
                    disableErrorGuards: !0
                }
            }

            function K(e) {
                return e
            }
            var q = {
                parse(e, t) {
                    var n, a, l;
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        r = i ?? W(e),
                        s = {
                            content: t,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: []
                        };
                    return s.content = (n = s.content, a = r, l = (t, n) => {
                        M.default.isEmojiPremiumLocked({
                            emoji: t,
                            channel: e,
                            intention: L.EmojiIntention.CHAT
                        }) ? s.invalidEmojis.push(t) : !n && s.validNonShortcutEmojis.push(t)
                    }, Y(B(n, a), a, o.default.translateInlineEmojiToSurrogates, l)), s
                },
                parsePreprocessor: (e, t) => B(t, W(e)),
                unparse(e, t, n) {
                    let a = h.default.getChannel(t),
                        i = null != a ? a.getGuildId() : null,
                        s = null != i ? m.default.getGuild(i) : null,
                        u = n ? x : l().omit(x, ["spoiler", "timestamp"]),
                        d = n ? K : o.default.translateSurrogatesToInlineEmoji,
                        c = r().parserFor(u),
                        f = {
                            inline: !0,
                            guild: s,
                            isNotification: n
                        };
                    return Y(c(e, f), f, d)
                }
            }
        },
        642201: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("388684"),
                l = n("661223"),
                i = n("312916"),
                r = n("482970"),
                s = n("34887"),
                u = n("731865"),
                o = n("362753"),
                d = n("278205"),
                c = n("328470"),
                f = n("467006");
            let E = new a.default("MessageRoundtripTrackerStore");

            function _(e) {
                return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
            }

            function h(e) {
                let t = u.default.getBasicChannel(e.channelId);
                if (null == t) {
                    E.warn(`Ignoring a messageData for channel ${e.channelId} because we can't find that channel.`);
                    return
                }
                if (Math.random() > .1) return;
                let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
                    a = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
                    l = (0, s.getSignalStrength)();
                c.default.track(f.AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, {
                    ...(0, r.default)(),
                    api_latency_ms: n,
                    gateway_latency_ms: a,
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.guild_id,
                    guild_size: o.default.getMemberCount(t.guild_id),
                    mobile_network_type: d.default.getType(),
                    ...null != l && {
                        mobile_signal_strength_level: l
                    }
                })
            }
            class g extends l.default.Store {
                recordMessageSendAttempt(e, t) {
                    let n = {
                        initialSendTimestamp: Date.now(),
                        apiResponseTimestamp: null,
                        gatewaySeenTimestamp: null,
                        channelId: e
                    };
                    this.pendingMessages.set(t, n), setTimeout(() => {
                        let e = this.pendingMessages.get(t);
                        null != e && (h(e), this.pendingMessages.delete(t))
                    }, 3e4)
                }
                recordMessageSendApiResponse(e) {
                    let t = this.pendingMessages.get(e);
                    if (null != t) {
                        let n = {
                            ...t,
                            apiResponseTimestamp: Date.now()
                        };
                        _(n) ? (h(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
                    }
                }
                recordGatewayResponse(e) {
                    let t = this.pendingMessages.get(e);
                    if (null != t) {
                        let n = {
                            ...t,
                            gatewaySeenTimestamp: Date.now()
                        };
                        _(n) ? (h(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
                    }
                }
                constructor(...e) {
                    super(...e), this.pendingMessages = new Map
                }
            }
            let S = new g(i.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        optimistic: t,
                        message: n
                    } = e, a = n.nonce;
                    !t && null != a && S.recordGatewayResponse(a)
                }
            });
            var m = S
        },
        55567: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = {
                init() {},
                donateSentMessage(e, t) {},
                deleteAllInteractions() {}
            }
        },
        608425: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createBotMessage: function() {
                    return E
                },
                createNonce: function() {
                    return d
                },
                default: function() {
                    return f
                },
                userRecordToServer: function() {
                    return c
                }
            }), n("789020"), n("653041");
            var a = n("512722"),
                l = n.n(a),
                i = n("416463"),
                r = n("535291"),
                s = n("871831"),
                u = n("84819"),
                o = n("467006");

            function d() {
                return u.default.fromTimestamp(Date.now())
            }

            function c(e) {
                let {
                    id: t,
                    username: n,
                    avatar: a,
                    discriminator: l,
                    bot: i,
                    globalName: r
                } = e;
                return {
                    id: t,
                    username: n,
                    avatar: a,
                    discriminator: l,
                    bot: i,
                    global_name: r
                }
            }

            function f(e) {
                let {
                    channelId: t,
                    content: n,
                    tts: a = !1,
                    type: u = o.MessageTypes.DEFAULT,
                    messageReference: f,
                    allowedMentions: E,
                    author: _,
                    flags: h,
                    nonce: g,
                    poll: S
                } = e, m = [];
                if (u === o.MessageTypes.REPLY && (l()(null != f, "Replies must have a message reference"), null == E || E.replied_user)) {
                    let e = i.default.getMessageByReference(f);
                    e?.state === i.ReferencedMessageState.LOADED && m.push(c(e.message.author))
                }
                return null == _ && (_ = s.default.getCurrentUser()), _ instanceof r.default && (_ = c(_)), l()(null != _, "createMessage: author cannot be undefined"), {
                    id: g ?? d(),
                    type: u,
                    content: n,
                    channel_id: t,
                    author: _,
                    attachments: [],
                    embeds: [],
                    pinned: !1,
                    mentions: m,
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: new Date().toISOString(),
                    state: o.MessageStates.SENDING,
                    tts: a,
                    message_reference: f,
                    flags: h,
                    nonce: g,
                    poll: S
                }
            }

            function E(e) {
                let {
                    messageId: t,
                    channelId: n,
                    content: a,
                    embeds: l,
                    loggingName: i
                } = e;
                return {
                    id: t ?? d(),
                    type: o.MessageTypes.DEFAULT,
                    flags: o.MessageFlags.EPHEMERAL,
                    content: a,
                    channel_id: n,
                    author: {
                        id: o.LOCAL_BOT_ID,
                        username: "Clyde",
                        discriminator: o.NON_USER_BOT_DISCRIMINATOR,
                        avatar: "clyde",
                        bot: !0
                    },
                    attachments: [],
                    embeds: l ?? [],
                    pinned: !1,
                    mentions: [],
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: new Date().toISOString(),
                    state: o.MessageStates.SENT,
                    tts: !1,
                    loggingName: i
                }
            }
        },
        924093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                logMessageSendFailure: function() {
                    return i
                }
            });
            var a = n("244180"),
                l = n("467006");

            function i(e) {
                let t = null != e.fileItems ? function(e) {
                        return e.map(e => e.mimeType ?? "unknown")
                    }(e.fileItems) : [],
                    n = e.errorMessage ?? void 0,
                    i = e.failureCode ?? void 0;
                (0, a.trackWithMetadata)(l.AnalyticEvents.SEND_MESSAGE_FAILURE, {
                    failure_code: i,
                    error_message: n,
                    attachment_mimetypes: t
                })
            }
        },
        818147: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackGuildInviteNotificationAction: function() {
                    return s
                },
                trackGuildInviteNotificationDismissed: function() {
                    return u
                }
            });
            var a, l, i = n("244180"),
                r = n("467006");

            function s() {
                i.default.trackWithMetadata(r.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
                    notification_type: "Reminder Notification",
                    action: "Guild Invite",
                    dismissed: !1
                })
            }

            function u() {
                i.default.trackWithMetadata(r.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
                    notification_type: "Reminder Notification",
                    action: "Guild Invite",
                    dismissed: !0
                })
            }(a || (a = {})).REMINDER_NOTIFICATION = "Reminder Notification", (l || (l = {})).GUILD_INVITE = "Guild Invite"
        },
        10245: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearMessageCombo: function() {
                    return d
                },
                updateCombo: function() {
                    return o
                },
                updateComboOnMessageSend: function() {
                    return c
                },
                updatePoggermodeSettings: function() {
                    return u
                }
            });
            var a = n("312916"),
                l = n("262047"),
                i = n("232356"),
                r = n("993638"),
                s = n("98906");

            function u(e) {
                a.default.dispatch({
                    type: "POGGERMODE_SETTINGS_UPDATE",
                    settings: e
                });
                let t = {
                    ...i.default.getState(),
                    ...e
                };
                (0, s.default)(t)
            }

            function o(e) {
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_COMBO",
                    ...e
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: {
                        ...e,
                        displayed: !0
                    }
                })
            }

            function c(e, t) {
                let n = l.default.getId(),
                    i = r.default.getUserCombo(n, e);
                null != i && a.default.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: {
                        combo: i,
                        channelId: e,
                        messageId: t,
                        displayed: !1
                    }
                });
                let s = null != i && i?.value > 0 ? (i?.multiplier ?? 0) + 1 : 1;
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_COMBO",
                    channelId: e,
                    userId: n,
                    multiplier: s,
                    value: 0
                })
            }
        },
        30838: function(e, t, n) {
            "use strict";
            var a, l, i, r, s, u;
            n.r(t), n.d(t, {
                ConfettiLocation: function() {
                    return a
                },
                SHAKE_STEPS: function() {
                    return d
                },
                SHAKE_STEP_DIVIDER: function() {
                    return c
                },
                ShakeLevel: function() {
                    return i
                },
                ShakeLocation: function() {
                    return l
                }
            }), (r = a || (a = {}))[r.CHAT_INPUT = 0] = "CHAT_INPUT", r[r.REACTION = 1] = "REACTION", r[r.MEMBER_USER = 2] = "MEMBER_USER", r[r.CALL_TILE = 3] = "CALL_TILE", (s = l || (l = {}))[s.CHAT_INPUT = 0] = "CHAT_INPUT", s[s.VOICE_USER = 1] = "VOICE_USER", s[s.MENTION = 2] = "MENTION", (u = i || (i = {}))[u.LEVEL_1 = 0] = "LEVEL_1", u[u.LEVEL_2 = 1] = "LEVEL_2", u[u.LEVEL_3 = 2] = "LEVEL_3", u[u.LEVEL_4 = 3] = "LEVEL_4", u[u.LEVEL_5 = 4] = "LEVEL_5";
            let o = {
                    0: [
                        [1, 1e-4],
                        [25, .05],
                        [50, .1],
                        [100, .5],
                        [250, 1],
                        [500, 2],
                        [1e3, 3],
                        [9001, 4]
                    ],
                    1: [
                        [1, 1e-4],
                        [25, .25],
                        [50, .5],
                        [100, 1],
                        [250, 2.5],
                        [500, 5],
                        [1e3, 7.5],
                        [9001, 10]
                    ],
                    2: [
                        [1, .001],
                        [25, .5],
                        [50, 1],
                        [100, 2],
                        [250, 4],
                        [500, 8],
                        [1e3, 12],
                        [9001, 16]
                    ],
                    3: [
                        [1, .25],
                        [25, .75],
                        [50, 1],
                        [100, 2],
                        [250, 4],
                        [500, 8],
                        [1e3, 20],
                        [9001, 50]
                    ],
                    4: [
                        [1, .001],
                        [25, .5],
                        [50, 1],
                        [100, 2],
                        [250, 5],
                        [500, 10],
                        [1e3, 100],
                        [9001, 1e4]
                    ]
                },
                d = Object.keys(o).reduce((e, t) => ({
                    ...e,
                    [t]: o[t].map(e => {
                        let [t] = e;
                        return t
                    })
                }), {
                    0: [],
                    1: [],
                    2: [],
                    3: [],
                    4: []
                }),
                c = Object.keys(o).reduce((e, t) => ({
                    ...e,
                    [t]: o[t].map(e => {
                        let [t, n] = e;
                        return n
                    })
                }), {
                    0: [],
                    1: [],
                    2: [],
                    3: [],
                    4: []
                })
        },
        232356: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("392711"),
                l = n("661223"),
                i = n("312916"),
                r = n("30838");
            let s = !1,
                u = {
                    settingsVisible: !1,
                    enabled: !1,
                    combosEnabled: !0,
                    combosRequiredCount: 5,
                    comboSoundsEnabled: !0,
                    screenshakeEnabled: !0,
                    screenshakeEnabledLocations: {
                        [r.ShakeLocation.CHAT_INPUT]: !0,
                        [r.ShakeLocation.VOICE_USER]: !1,
                        [r.ShakeLocation.MENTION]: !1
                    },
                    shakeIntensity: 1,
                    confettiEnabled: !0,
                    confettiEnabledLocations: {
                        [r.ConfettiLocation.CHAT_INPUT]: !0,
                        [r.ConfettiLocation.REACTION]: !0,
                        [r.ConfettiLocation.MEMBER_USER]: !0,
                        [r.ConfettiLocation.CALL_TILE]: !0
                    },
                    confettiSize: 16,
                    confettiCount: 5,
                    warningSeen: !1
                },
                o = (0, a.cloneDeep)(u);
            class d extends l.default.DeviceSettingsStore {
                static #e = this.displayName = "PoggermodeSettingsStore";
                static #t = this.persistKey = "PoggermodeSettingsStore";
                initialize(e) {
                    o = {
                        ...o,
                        ...e
                    }
                }
                getUserAgnosticState() {
                    return o
                }
                get settingsVisible() {
                    return o.settingsVisible
                }
                isEnabled() {
                    let {
                        confettiLocation: e,
                        shakeLocation: t
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null == e || o.confettiEnabled && o.confettiEnabledLocations[e], a = null == t || o.screenshakeEnabled && o.screenshakeEnabledLocations[t];
                    return this.settingsVisible && !s && o.enabled && n && a
                }
                get shakeIntensity() {
                    return this.isEnabled() ? o.shakeIntensity : 0
                }
                get combosRequiredCount() {
                    return this.isEnabled() ? o.combosRequiredCount : 0
                }
                get screenshakeEnabled() {
                    return o.screenshakeEnabled
                }
                get screenshakeEnabledLocations() {
                    return o.screenshakeEnabledLocations
                }
                get combosEnabled() {
                    return o.combosEnabled
                }
                get comboSoundsEnabled() {
                    return o.comboSoundsEnabled
                }
            }
            var c = new d(i.default, {
                POGGERMODE_SETTINGS_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e;
                    o = {
                        ...o,
                        ...t
                    }
                },
                POGGERMODE_TEMPORARILY_DISABLED: function() {
                    s = !0
                }
            })
        },
        993638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                },
                shouldTrackMessage: function() {
                    return m
                }
            });
            var a = n("661223"),
                l = n("386695"),
                i = n("767191"),
                r = n("312916"),
                s = n("262047"),
                u = n("232733"),
                o = n("845649"),
                d = n("232356"),
                c = n("851307"),
                f = n("30838"),
                E = n("467006");
            let _ = new Set,
                h = new l.default(function(e) {
                    let {
                        userId: t,
                        channelId: n
                    } = e;
                    return [t, n]
                }, function(e) {
                    let {
                        userId: t,
                        channelId: n
                    } = e;
                    return `${n}-${t}`
                }),
                g = new l.default(function(e) {
                    let {
                        messageId: t,
                        channelId: n,
                        combo: {
                            userId: a
                        }
                    } = e;
                    return [t, n, a]
                }, function(e) {
                    let {
                        messageId: t,
                        channelId: n,
                        combo: {
                            userId: a
                        }
                    } = e;
                    return `${n}-${a}-${t}`
                }),
                S = e => {
                    let {
                        userId: t,
                        channelId: n
                    } = e;
                    return `${t}-${n}`
                };

            function m(e, t, n, a) {
                return !(e !== t || null == n || a.has(n)) && (a.add(n), !0)
            }
            class p extends a.default.Store {
                static #e = this.displayName = "PoggermodeStore";
                initialize() {
                    this.waitFor(s.default, u.default)
                }
                getComboScore(e, t) {
                    let n = h.get(S({
                        userId: e,
                        channelId: t
                    }));
                    return null == n ? 0 : (0, c.getComboScore)(n)
                }
                getUserCombo(e, t) {
                    return h.get(S({
                        userId: e,
                        channelId: t
                    }))
                }
                isComboing(e, t) {
                    var n;
                    let a = this.getUserCombo(e, t);
                    return null != a && a.value >= d.default.combosRequiredCount && null != (n = a) && (n.value > 0 || n?.multiplier > 1)
                }
                getMessageCombo(e) {
                    let t = g.get(e);
                    return t?.combo ?? void 0
                }
                getMostRecentMessageCombo(e) {
                    let t = g.values(e);
                    return t[t.length - 1]
                }
                getUserComboShakeIntensity(e, t, n, a) {
                    let l = this.getUserCombo(e, t);
                    return null != l ? (0, c.getComboShakeIntensity)(l, a) * n : 0
                }
            }
            let T = new p(r.default, {
                POGGERMODE_UPDATE_COMBO: function(e) {
                    let {
                        type: t,
                        ...n
                    } = e;
                    if (!d.default.isEnabled()) return !1;
                    ! function e(t) {
                        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            a = h.get(S(t)),
                            l = {
                                ...a,
                                ...t,
                                value: t.value ?? a?.value ?? 0,
                                multiplier: Math.min(t.multiplier ?? a?.multiplier ?? 1, 7),
                                decayInterval: a?.decayInterval ?? new i.Interval
                            };
                        h.set(S(t), l), n && l.decayInterval?.start(1e3, () => {
                            let t = h.get(S(l));
                            if (null != t) {
                                let n = l.multiplier !== t.multiplier && l.value !== t.value;
                                t.value <= 0 || n ? (t.decayInterval?.stop(), t.value <= 0 && (e({
                                    ...t,
                                    value: 0,
                                    multiplier: 1
                                }), T.emitChange())) : (e({
                                    ...t,
                                    value: t.value - 1
                                }), T.emitChange())
                            }
                        })
                    }(n)
                },
                POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
                    var t;
                    let {
                        comboMessage: n
                    } = e;
                    if (!d.default.isEnabled()) return !1;
                    t = n, g.set(t.messageId, t)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: {
                            mentions: n,
                            author: a,
                            nonce: l
                        }
                    } = e;
                    if (!d.default.isEnabled()) return !1;
                    let i = s.default.getId();
                    if (!m(a?.id, i, l, _)) return !1;
                    let r = h.get(S({
                        userId: a?.id ?? "???",
                        channelId: t
                    }));
                    if (d.default.screenshakeEnabled && d.default.screenshakeEnabledLocations[f.ShakeLocation.MENTION] && null != n && null != n.find(e => e.id === i)) {
                        let e = null != r ? (0, c.getComboShakeIntensity)(r, f.ShakeLevel.LEVEL_4) ?? .001 : 4 * Math.random();
                        return o.ComponentDispatch.dispatch(E.ComponentActions.SHAKE_APP, {
                            duration: 1e3,
                            intensity: e
                        }), !0
                    }
                    return !1
                }
            });
            var A = T
        },
        851307: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getComboPercentage: function() {
                    return d
                },
                getComboScore: function() {
                    return f
                },
                getComboShakeIntensity: function() {
                    return r
                },
                getComboStyles: function() {
                    return c
                }
            });
            var a = n("30838"),
                l = n("467006");
            let i = function(e, t) {
                    let {
                        multiplier: n,
                        value: a
                    } = e, [l, i] = t, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, s = a * n;
                    return s <= 0 ? 0 : Math.min(r, l.reduce((e, t, n) => {
                        if (s > t) {
                            let e = i[n];
                            if (n + 1 === l.length) return i[n];
                            let a = l[n + 1],
                                r = i[n + 1];
                            return (s - t) / (a - t) * (r - e) + e
                        }
                        return s === t ? i[n] : e
                    }, 0))
                },
                r = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.ShakeLevel.LEVEL_3;
                    return i(e, [a.SHAKE_STEPS[t], a.SHAKE_STEP_DIVIDER[t]], 1e5)
                },
                s = [
                    [1, .001],
                    [25, .3],
                    [100, .5],
                    [250, .8],
                    [500, .9],
                    [2500, .95],
                    [9001, 1]
                ],
                u = s.map(e => {
                    let [t] = e;
                    return t
                }),
                o = s.map(e => {
                    let [t, n] = e;
                    return n
                }),
                d = e => i(e, [u, o], 1),
                c = e => 1 === e ? {
                    color: l.Color.BRAND_500
                } : 2 === e || 3 === e ? {
                    color: l.Color.GREEN_360
                } : 4 === e || 5 === e ? {
                    color: l.Color.YELLOW_300,
                    square: !0
                } : 6 === e ? {
                    color: l.Color.RED_400,
                    square: !0
                } : {
                    color: l.Color.ORANGE_345,
                    flair: !0
                };

            function f(e) {
                return e.value * (e.multiplier ?? 1)
            }
        },
        98906: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("392711"),
                l = n.n(a),
                i = n("328470"),
                r = n("30838"),
                s = n("467006");

            function u(e) {
                switch (e) {
                    case r.ShakeLocation.CHAT_INPUT:
                        return "chat_input";
                    case r.ShakeLocation.MENTION:
                        return "mention";
                    case r.ShakeLocation.VOICE_USER:
                        return "voice_user"
                }
            }

            function o(e) {
                switch (e) {
                    case r.ConfettiLocation.CHAT_INPUT:
                        return "chat_input";
                    case r.ConfettiLocation.MEMBER_USER:
                        return "member_user";
                    case r.ConfettiLocation.REACTION:
                        return "reaction";
                    case r.ConfettiLocation.CALL_TILE:
                        return "call_tile"
                }
            }

            function d(e, t) {
                return Object.entries(e).filter(e => {
                    let [t, n] = e;
                    return n
                }).map(e => {
                    let [n] = e;
                    return t(Number.parseInt(n))
                })
            }
            var c = l().throttle(e => {
                let {
                    enabled: t,
                    combosEnabled: n,
                    combosRequiredCount: a,
                    screenshakeEnabled: l,
                    shakeIntensity: r,
                    screenshakeEnabledLocations: c,
                    confettiEnabled: f,
                    confettiSize: E,
                    confettiCount: _,
                    confettiEnabledLocations: h
                } = e;
                i.default.track(s.AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, {
                    enabled: t,
                    combos_enabled: n,
                    combos_required_count: a,
                    screenshake_enabled: l,
                    shake_intensity: r,
                    screenshake_enabled_locations: d(c, u),
                    confetti_enabled: f,
                    confetti_size: E,
                    confetti_count: _,
                    confetti_enabled_locations: d(h, o)
                })
            }, 5e3)
        },
        60259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CreateGDMPollsExperiment: function() {
                    return i
                },
                CreateGuildPollsExperiment: function() {
                    return l
                },
                PollsUserExperiment: function() {
                    return r
                }
            });
            var a = n("516086");
            let l = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-09_guild_polls",
                    label: "Create Guild Polls",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables creation of polls within a guild",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = (0, a.createExperiment)({
                    kind: "user",
                    id: "2024-01_create_gdm_polls",
                    label: "Create GDM Polls",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables creation of polls within a GDM",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                r = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-10_poll_users",
                    label: "Polls User Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables poll messages",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        23787: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createPollServerDataFromCreateRequest: function() {
                    return g
                },
                filterOutUUID: function() {
                    return d
                },
                generateEmptyPollAnswer: function() {
                    return o
                },
                getTotalVotes: function() {
                    return S
                },
                hasNonVoteReactions: function() {
                    return c
                },
                isAnswerFilled: function() {
                    return _
                },
                isIncompleteAnswer: function() {
                    return h
                },
                useCanPostImagePolls: function() {
                    return E
                },
                useCanPostPollsInChannel: function() {
                    return f
                }
            });
            var a = n("153832"),
                l = n("154681"),
                i = n("197905"),
                r = n("152551"),
                s = n("60259"),
                u = n("467006");

            function o() {
                return {
                    text: void 0,
                    image: void 0,
                    localCreationAnswerId: function() {
                        return (0, a.v4)()
                    }()
                }
            }

            function d(e) {
                return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
            }

            function c(e) {
                for (let t of e.reactions)
                    if (null == t.me_vote) return !0;
                return !1
            }

            function f(e) {
                let t = u.ChannelTypesSets.POLLS.has(e.type),
                    {
                        enabled: n
                    } = s.CreateGuildPollsExperiment.useExperiment({
                        guildId: e.guild_id,
                        location: "useCanPostPollsInChannel"
                    }, {
                        autoTrackExposure: !0,
                        disable: !t || e.isPrivate() || !i.default.can(u.Permissions.SEND_MESSAGES, e)
                    }),
                    {
                        enabled: a
                    } = s.CreateGDMPollsExperiment.useExperiment({
                        location: "useCanPostPollsInChannel"
                    }, {
                        autoTrackExposure: !0,
                        disable: !t || !e.isPrivate()
                    });
                return n || a
            }

            function E() {
                return !1
            }

            function _(e, t) {
                return t === l.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? null != e.image : null != e.text && e.text.length > 0
            }

            function h(e, t) {
                return t === l.PollLayoutTypes.DEFAULT && null != e.image && (null == e.text || 0 === e.text.length)
            }

            function g(e) {
                var t;
                if (null == e) return;
                let n = e?.answers?.map((e, t) => {
                    let n = e.poll_media?.emoji,
                        a = {
                            ...e.poll_media,
                            emoji: null != n ? {
                                id: n.id ?? null,
                                name: n.name ?? ""
                            } : void 0
                        };
                    return {
                        ...e,
                        answer_id: t + 1,
                        poll_media: a
                    }
                });
                let a = e?.duration != null ? (t = e.duration, new Date(Date.now() + t * r.default.Millis.HOUR).toISOString()) : "0";
                return {
                    ...e,
                    expiry: a,
                    answers: n
                }
            }

            function S(e) {
                return e.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0)
            }
        },
        278018: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("561427"),
                l = n("731865"),
                i = n("551835");

            function r(e) {
                if (e !== i.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return null;
                let t = l.default.getChannel(e);
                return null == t ? null : a.default.ensurePrivateChannel(t.recipients)
            }
        },
        188453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE: function() {
                    return E
                },
                CREATE_NEW_CHANNEL_VALUE: function() {
                    return d
                },
                ENABLE_COMMUNITY_FLOW_MODAL_KEY: function() {
                    return _
                },
                EnableCommunityModalSteps: function() {
                    return l
                },
                MODERATOR_PERMISSIONS: function() {
                    return c
                },
                MODERATOR_PERMISSIONS_FLAG: function() {
                    return f
                },
                PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: function() {
                    return u
                },
                PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: function() {
                    return o
                },
                PUBLIC_SUCCESS_MODAL_SEEN_KEY: function() {
                    return s
                }
            });
            var a, l, i = n("768517"),
                r = n("467006");
            let s = "publicSuccessModalSeen",
                u = "667560445975986187",
                o = "669627189624307712",
                d = "1",
                c = [r.Permissions.ADMINISTRATOR, r.Permissions.KICK_MEMBERS, r.Permissions.BAN_MEMBERS, r.Permissions.MANAGE_GUILD, r.Permissions.MANAGE_CHANNELS, r.Permissions.MANAGE_ROLES, r.Permissions.MANAGE_MESSAGES, r.Permissions.MANAGE_GUILD_EXPRESSIONS, r.Permissions.CREATE_GUILD_EXPRESSIONS, r.Permissions.MANAGE_EVENTS, r.Permissions.CREATE_EVENTS, r.Permissions.MODERATE_MEMBERS, r.Permissions.MENTION_EVERYONE],
                f = i.default.combine(...c),
                E = 1e3,
                _ = "Enable Community Modal";
            (a = l || (l = {})).SAFETY_CHECK = "safety_check", a.BASICS = "basics", a.FINISH = "finish"
        },
        375844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                QuestContentCTA: function() {
                    return l
                },
                trackQuestContentClicked: function() {
                    return c
                },
                trackQuestEvent: function() {
                    return d
                }
            });
            var a, l, i = n("328470"),
                r = n("211589"),
                s = n("545237"),
                u = n("467006");
            let o = Object.keys(s.QuestContent);

            function d(e, t, n) {
                let a = r.default.quests.get(e);
                if (null != a && !a.preview) {
                    var l;
                    i.default.track(t, {
                        quest_id: (l = a).id,
                        game_id: l.config.applicationId,
                        game_name: l.config.applicationName,
                        ...n
                    })
                }
            }

            function c(e, t, n) {
                var a;
                d(e, u.AnalyticEvents.QUEST_CONTENT_CLICKED, {
                    content_id: a = t,
                    content_name: o.find(e => s.QuestContent[e] === a) ?? "",
                    cta_name: n
                })
            }(a = l || (l = {})).LEARN_MORE = "LEARN_MORE", a.SHOW_REWARD = "SHOW_REWARD", a.CLAIM_REWARD = "CLAIM_REWARD", a.ACCEPT_QUEST = "ACCEPT_QUEST", a.COPY_QUEST_URL = "COPY_QUEST_URL", a.TRACK_PROGRESS = "TRACK_PROGRESS", a.REWARD_LEARN_MORE = "REWARD_LEARN_MORE", a.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU", a.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK", a.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT", a.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK", a.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE"
        },
        211589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("661223"),
                l = n("312916");
            let i = !1,
                r = new Map,
                s = 0,
                u = new Set,
                o = new Set,
                d = new Set,
                c = new Set,
                f = new Map,
                E = new Map;

            function _(e, t) {
                let n = (r = new Map(r)).get(e);
                null != n && r.set(e, {
                    ...n,
                    ...t
                })
            }

            function h(e, t) {
                let n = new Map(f);
                n.set(e, t), f = n;
                let a = r.get(e),
                    l = a?.userStatus;
                null != l && null == l.claimedAt && _(e, {
                    userStatus: {
                        ...l,
                        claimedAt: t.claimedAt
                    }
                })
            }

            function g(e) {
                null != E.get(e) && (E = new Map(E)).delete(e)
            }

            function S(e) {
                let t = new Set(u);
                t.delete(e), u = t
            }

            function m(e) {
                let t = new Set(c);
                t.delete(e), c = t
            }
            class p extends a.default.Store {
                static #e = this.displayName = "QuestsStore";
                get quests() {
                    return r
                }
                get isFetchingCurrentQuests() {
                    return i
                }
                get lastFetchedCurrentQuests() {
                    return s
                }
                isEnrolling(e) {
                    return u.has(e)
                }
                isClaimingRewardCode(e) {
                    return o.has(e)
                }
                isFetchingRewardCode(e) {
                    return d.has(e)
                }
                isDismissingContent(e) {
                    return c.has(e)
                }
                getRewardCode(e) {
                    return f.get(e)
                }
                getStreamHeartbeatFailure(e) {
                    return E.get(e)
                }
            }
            var T = new p(l.default, {
                LOGOUT: function() {
                    i = !1, r = new Map, s = 0, u = new Set, E = new Map
                },
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
                    s = Date.now(), i = !0
                },
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
                    let {
                        quests: t
                    } = e;
                    for (let e of (i = !1, r = new Map, t)) r.set(e.id, e)
                },
                QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
                    s = 0, i = !1
                },
                QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
                    let {
                        questId: t,
                        streamKey: n,
                        userStatus: a
                    } = e;
                    _(t, {
                        userStatus: a
                    }), g(n)
                },
                QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
                    let {
                        questId: t,
                        streamKey: n
                    } = e;
                    null == E.get(n) && (E = new Map(E)).set(n, {
                        questId: t,
                        streamKey: n,
                        firstFailedAt: Date.now()
                    })
                },
                QUESTS_ENROLL_BEGIN: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(u);
                    n.add(t), u = n
                },
                QUESTS_ENROLL_SUCCESS: function(e) {
                    let {
                        enrolledQuestUserStatus: t
                    } = e;
                    _(t.questId, {
                        userStatus: t
                    }), S(t.questId)
                },
                QUESTS_ENROLL_FAILURE: function(e) {
                    let {
                        questId: t
                    } = e;
                    S(t)
                },
                QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(d);
                    n.add(t), d = n
                },
                QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
                    let {
                        questId: t,
                        rewardCode: n
                    } = e, a = new Set(d);
                    a.delete(t), d = a, h(t, n)
                },
                QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(d);
                    n.delete(t), d = n
                },
                QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(o);
                    n.add(t), o = n
                },
                QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
                    let {
                        questId: t,
                        rewardCode: n
                    } = e, a = new Set(o);
                    a.delete(t), o = a, h(t, n)
                },
                QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(o);
                    n.delete(t), o = n
                },
                QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(c);
                    n.add(t), c = n
                },
                QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
                    let {
                        dismissedQuestUserStatus: t
                    } = e;
                    _(t.questId, {
                        userStatus: t
                    }), m(t.questId)
                },
                QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
                    let {
                        questId: t
                    } = e;
                    m(t)
                },
                STREAM_CLOSE: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    g(t)
                },
                QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    g(t)
                },
                QUESTS_PREVIEW_UPDATE_SUCCESS: function(e) {
                    let {
                        previewQuestUserStatus: t
                    } = e;
                    _(t.questId, {
                        userStatus: t
                    }), null == t.claimedAt && (f = new Map(f)).delete(t.questId)
                }
            })
        },
        545237: function(e, t, n) {
            "use strict";
            var a, l, i, r;
            n.r(t), n.d(t, {
                QUEST_REWARD_CODE_PLATFORMS_SET: function() {
                    return s
                },
                QuestContent: function() {
                    return l
                },
                QuestRewardCodePlatforms: function() {
                    return a
                }
            }), (i = a || (a = {}))[i.CROSS_PLATFORM = 0] = "CROSS_PLATFORM", i[i.XBOX = 1] = "XBOX", i[i.PLAYSTATION = 2] = "PLAYSTATION", i[i.SWITCH = 3] = "SWITCH", i[i.PC = 4] = "PC";
            let s = new Set(Object.values(a).filter(e => "number" == typeof e));
            (r = l || (l = {}))[r.GIFT_INVENTORY_SETTINGS_BADGE = 0] = "GIFT_INVENTORY_SETTINGS_BADGE", r[r.QUEST_BAR = 1] = "QUEST_BAR", r[r.QUEST_INVENTORY_CARD = 2] = "QUEST_INVENTORY_CARD", r[r.QUESTS_EMBED = 3] = "QUESTS_EMBED", r[r.ACTIVITY_PANEL = 4] = "ACTIVITY_PANEL", r[r.QUEST_LIVE_STREAM = 5] = "QUEST_LIVE_STREAM"
        },
        687008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("661223"),
                l = n("312916"),
                i = n("162256");
            let r = {},
                s = {},
                u = {};

            function o(e) {
                if (null == e) return !1;
                let t = s[e];
                if (null == t) return !1;
                let n = i.default.getMessage(e, t.messageId);
                if (null == n) return !1;
                r[e] = {
                    channel: t.channel,
                    message: n,
                    shouldMention: t.shouldMention,
                    showMentionToggle: t.showMentionToggle
                }, delete s[e]
            }

            function d() {
                r = {}, s = {}, u = {}
            }
            class c extends a.default.Store {
                static #e = this.displayName = "PendingReplyStore";
                initialize() {
                    this.waitFor(i.default)
                }
                getPendingReply(e) {
                    return r[e]
                }
                getPendingReplyActionSource(e) {
                    return u[e]
                }
            }
            var f = new c(l.default, {
                CREATE_PENDING_REPLY: function(e) {
                    let {
                        channel: t,
                        message: n,
                        shouldMention: a = !0,
                        showMentionToggle: l = !0,
                        source: i
                    } = e;
                    r[t.id] = {
                        channel: t,
                        message: n,
                        shouldMention: a,
                        showMentionToggle: l
                    }, u[t.id] = i
                },
                CREATE_SHALLOW_PENDING_REPLY: function(e) {
                    let {
                        channel: t,
                        messageId: n,
                        shouldMention: a = !0,
                        showMentionToggle: l = !0
                    } = e;
                    s[t.id] = {
                        channel: t,
                        messageId: n,
                        shouldMention: a,
                        showMentionToggle: l
                    }
                },
                SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
                    let {
                        channelId: t,
                        shouldMention: n
                    } = e;
                    t in r && (r[t] = {
                        ...r[t],
                        shouldMention: n
                    }), t in s && (s[t] = {
                        ...s[t],
                        shouldMention: n
                    })
                },
                DELETE_PENDING_REPLY: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete r[t], delete s[t]
                },
                CONNECTION_OPEN: d,
                LOGOUT: d,
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e;
                    if (r[n]?.message?.id === t) delete r[n], delete u[n];
                    else {
                        if (s[n]?.messageId !== t) return !1;
                        delete s[n], delete u[n]
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    o(t)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    o(t)
                }
            })
        },
        813287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return l
                },
                getStickerSendability: function() {
                    return o
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var a, l, i = n("694574"),
                r = n("488867"),
                s = n("859404"),
                u = n("467006");
            (a = l || (l = {}))[a.SENDABLE = 0] = "SENDABLE", a[a.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", a[a.NONSENDABLE = 2] = "NONSENDABLE", a[a.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let o = (e, t, n) => {
                    if (null == t) return 2;
                    let a = r.default.canUseCustomStickersEverywhere(t);
                    if ((0, s.isStandardSticker)(e)) return 0;
                    if ((0, s.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || i.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? a ? 0 : 1 : 2 : 3;
                    return 2
                },
                d = (e, t, n) => 0 === o(e, t, n)
        },
        8584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("653041");
            var a = n("392711"),
                l = n.n(a),
                i = n("661223"),
                r = n("312916"),
                s = n("580905"),
                u = n("991400"),
                o = n("152551"),
                d = n("361820"),
                c = n("746835");
            let f = {
                pendingUsages: []
            };
            o.default.Millis.DAY;
            let E = new s.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => d.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                _ = () => {
                    d.default.isLoaded && E.compute()
                },
                h = () => {
                    _()
                };

            function g() {
                let e = u.default.frecencyWithoutFetchingLatest.stickerFrecency?.stickers;
                if (null == e) return !1;
                E.overwriteHistory(l().mapValues(e, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class S extends i.default.PersistedStore {
                static #e = this.displayName = "StickersPersistedStore";
                static #t = this.persistKey = "StickersPersistedStoreV2";
                initialize(e) {
                    this.waitFor(d.default), null != e && (f = e), this.syncWith([d.default], h), this.syncWith([u.default], g)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return E
                }
            }
            var m = new S(r.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    t?.forEach(e => {
                        E.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), _()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        631863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return a
                }
            });
            let a = (0, n("516086").createExperiment)({
                kind: "user",
                id: "2023-01_silent_messages",
                label: "Silent Messages",
                defaultConfig: {
                    allowSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow sending @silent messages",
                    config: {
                        allowSending: !0
                    }
                }]
            })
        },
        614681: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SILENT_RE: function() {
                    return i
                },
                canSuppressNotifications: function() {
                    return r
                },
                default: function() {
                    return s
                }
            });
            var a = n("631863");
            let l = "@silent",
                i = RegExp(`^${l}(\\s|$)`);

            function r() {
                return a.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                }).allowSending
            }

            function s(e) {
                return r() && null != e.match(i) ? [!0, e.substring(l.length).trim()] : [!1, e]
            }
        },
        83448: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                PAGE_SIZE: function() {
                    return S
                },
                default: function() {
                    return U
                }
            });
            var l = n("392711"),
                i = n.n(l),
                r = n("930198"),
                s = n("661223"),
                u = n("312916"),
                o = n("9999"),
                d = n("613085"),
                c = n("775822"),
                f = n("731865"),
                E = n("417223"),
                _ = n("370275"),
                h = n("84819"),
                g = n("972942");
            let S = 25,
                m = !1,
                p = !0,
                T = !1,
                A = !1,
                I = null,
                C = r.ThreadSortOrder.LATEST_ACTIVITY,
                M = [],
                N = 0;

            function R() {
                m = !1, p = !0, T = !1, A = !1, I = null, C = r.ThreadSortOrder.LATEST_ACTIVITY, a = new Set, N = 0, M = []
            }

            function L(e, t) {
                return t === r.ThreadSortOrder.LATEST_ACTIVITY ? E.default.lastMessageId(e.id) : e.id
            }

            function O() {
                if (null == I) return !1;
                let e = !T,
                    t = f.default.getChannel(M[M.length - 1]),
                    n = null == t ? null : L(t, C);
                M = i()(f.default.getAllThreadsForParent(I)).filter(e => e.isArchivedThread()).filter(t => {
                    if (0 !== a.size && t.appliedTags?.some(e => a.has(e)) !== !0) return !1;
                    if (e || null == n) return !0;
                    {
                        let e = null == t ? null : L(t, C);
                        return null != e && h.default.compare(e, n) >= 0
                    }
                }).sort((e, t) => h.default.compare(L(e, C), L(t, C))).map(e => e.id).reverse().value()
            }

            function D(e) {
                if (!(M.indexOf(e) >= 0)) return !1;
                M = M.filter(t => t !== e)
            }
            let y = [];
            class b extends s.default.Store {
                static #e = this.displayName = "ArchivedThreadsStore";
                initialize() {
                    this.waitFor(f.default, g.default, E.default)
                }
                get canLoadMore() {
                    return T && !m && !A
                }
                get nextOffset() {
                    return N
                }
                get isInitialLoad() {
                    return p
                }
                isLoading(e, t, n) {
                    return I === e && C === t && (0, _.areSetsEqual)(a, n) ? m : (R(), !1)
                }
                getThreads(e, t, n) {
                    return I === e && C === t && (0, _.areSetsEqual)(a, n) ? M : y
                }
            }
            var U = new b(u.default, {
                CONNECTION_OPEN: R,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return D(t.id)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return I === t.parent_id && !!(0, o.isForumPostPinned)(t.id) && void D(t.id)
                },
                CHANNEL_DELETE: function(e) {
                    if (e.channel.id !== I) return !1;
                    R()
                },
                LOAD_ARCHIVED_THREADS: function(e) {
                    (e.channelId !== I || e.sortOrder !== C || !(0, _.areSetsEqual)(e.tagFilter, a)) && R(), I = e.channelId, C = e.sortOrder, a = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), m = !0, p = !1
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    if (e.channelId !== I || e.sortOrder !== C || !(0, _.areSetsEqual)(e.tagFilter, a)) return !1;
                    let t = e.threads.filter(e => c.ALL_CHANNEL_TYPES.has(e.type)).map(e => e.id);
                    M = M.concat(t);
                    let n = f.default.getChannel(I);
                    null != n && n.isForumLikeChannel() && (0, d.trackForumMorePostsLoaded)({
                        guildId: n.guild_id,
                        channelId: n.id,
                        numArchivedThreads: M.length,
                        hasMoreThreads: e.hasMore,
                        filterTagIds: Array.from(e.tagFilter),
                        sortOrder: e.sortOrder
                    }), O(), T = e.hasMore, N = e.offset + S, m = !1, p = !1
                },
                LOAD_ARCHIVED_THREADS_FAIL: function(e) {
                    if (e.channelId !== I || e.sortOrder !== C || !(0, _.areSetsEqual)(e.tagFilter, a)) return !1;
                    m = !1, A = !0, p = !1
                },
                RESORT_THREADS: function(e) {
                    return (null == I || null == e.channelId || I === e.channelId) && O()
                }
            })
        },
        267951: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("789020");
            var a = n("455809"),
                l = n("454836"),
                i = n("312916"),
                r = n("992888"),
                s = n("330853"),
                u = n("244180"),
                o = n("24384"),
                d = n("775822"),
                c = n("262047"),
                f = n("731865"),
                E = n("197905"),
                _ = n("370275"),
                h = n("83448"),
                g = n("972942"),
                S = n("644829"),
                m = n("331258"),
                p = n("467006"),
                T = n("551835"),
                A = n("30175");

            function I(e, t) {
                return l.default.patch({
                    url: p.Endpoints.CHANNEL(e.id),
                    body: t
                }).then(t => (i.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: (0, d.createChannelRecordFromServer)(t.body)
                }), e.isForumPost() && null != e.parent_id && i.default.dispatch({
                    type: "RESORT_THREADS",
                    channelId: e.parent_id
                }), t))
            }

            function C(e, t) {
                i.default.dispatch({
                    type: "THREAD_MEMBER_LOCAL_UPDATE",
                    id: e.id,
                    guildId: e.getGuildId(),
                    userId: c.default.getId(),
                    isJoining: t
                })
            }
            var M = {
                archiveThread(e, t) {
                    let n = {
                        archived: !0
                    };
                    return t && (n.locked = !0), I(e, n)
                },
                async lockThread(e) {
                    let t = e.isArchivedThread();
                    return t && await this.unarchiveThread(e, !1), I(e, {
                        locked: !0,
                        archived: t
                    })
                },
                async unlockThread(e) {
                    let t = e.isArchivedThread();
                    return t && await this.unarchiveThread(e, !0), I(e, {
                        locked: !1,
                        archived: t
                    })
                },
                async unarchiveThread(e, t) {
                    let n = {
                            archived: !1
                        },
                        a = e.isForumPost();
                    t && (n.locked = !1);
                    try {
                        return await I(e, n)
                    } catch (e) {
                        throw e.body?.code === p.AbortCodes.TOO_MANY_THREADS ? r.default.show({
                            title: a ? A.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : A.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: a ? A.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : A.default.Messages.TOO_MANY_THREADS_MESSAGE
                        }) : e.body?.code === p.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? r.default.show({
                            title: A.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: A.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                        }) : 429 === e.status ? r.default.show({
                            title: a ? A.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : A.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: A.default.Messages.RATE_LIMITED
                        }) : r.default.show({
                            title: A.default.Messages.ERROR,
                            body: A.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        }), e
                    }
                },
                async unarchiveThreadIfNecessary(e) {
                    let t = f.default.getChannel(e),
                        n = E.default.can(p.Permissions.MANAGE_THREADS, t);
                    null != t && t.isArchivedThread() && (n || t.threadMetadata?.locked !== !0) && await this.unarchiveThread(t, !1)
                },
                setInvitable: (e, t) => I(e, {
                    invitable: t
                }),
                async joinThread(e, t) {
                    e.isForumPost() && C(e, !0);
                    try {
                        return await l.default.post({
                            url: p.Endpoints.THREAD_MEMBER(e.id),
                            query: {
                                location: t
                            }
                        })
                    } catch (t) {
                        if (t.body?.code === p.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                            let t = e.isForumPost();
                            r.default.show({
                                title: t ? A.default.Messages.CANNOT_JOIN_FORUM_POST : A.default.Messages.CANNOT_JOIN_THREAD,
                                body: t ? A.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : A.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                            })
                        } else r.default.show({
                            title: A.default.Messages.ERROR,
                            body: A.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        });
                        e.isForumPost() && C(e, !1)
                    }
                },
                async addMember(e, t, n) {
                    try {
                        return await l.default.post({
                            url: p.Endpoints.THREAD_MEMBER(e.id, t),
                            query: {
                                location: n
                            }
                        })
                    } catch (t) {
                        if (t.body?.code === p.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                            let t = e.isForumPost();
                            r.default.show({
                                title: t ? A.default.Messages.CANNOT_ADD_USER_TO_FORUM_POST : A.default.Messages.CANNOT_ADD_USER_TO_THREAD,
                                body: t ? A.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : A.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                            })
                        } else r.default.show({
                            title: A.default.Messages.ERROR,
                            body: A.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        })
                    }
                },
                leaveThread: (e, t) => (e.isForumPost() && C(e, !1), l.default.delete({
                    url: p.Endpoints.THREAD_MEMBER(e.id),
                    query: {
                        location: t
                    }
                })),
                removeMember: (e, t, n) => l.default.delete({
                    url: p.Endpoints.THREAD_MEMBER(e.id, t),
                    query: {
                        location: n
                    }
                }),
                setAutoArchiveDuration: (e, t) => l.default.patch({
                    url: p.Endpoints.CHANNEL(e.id),
                    body: {
                        auto_archive_duration: t
                    }
                }),
                pin(e) {
                    let t = e.flags | T.ChannelFlags.PINNED;
                    this.updateFlags(e, t, e.isArchivedThread())
                },
                unpin(e) {
                    let t = e.flags & ~T.ChannelFlags.PINNED;
                    this.updateFlags(e, t)
                },
                async updateFlags(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    i.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: e.merge({
                            flags: t
                        })
                    });
                    let a = {
                        flags: t
                    };
                    n && (a.archived = !1);
                    try {
                        await l.default.patch({
                            url: p.Endpoints.CHANNEL(e.id),
                            body: a
                        })
                    } catch {
                        i.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: e
                        })
                    }
                },
                async replacePin(e, t) {
                    let n = e.merge({
                            flags: e.flags & ~T.ChannelFlags.PINNED
                        }),
                        a = t.merge({
                            flags: t.flags | T.ChannelFlags.PINNED
                        });
                    i.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: n
                    }), i.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: a
                    }), await this.unarchiveThreadIfNecessary(e.id), await this.unarchiveThreadIfNecessary(t.id);
                    try {
                        await l.default.patch({
                            url: p.Endpoints.CHANNEL(e.id),
                            body: {
                                flags: e.flags & ~T.ChannelFlags.PINNED
                            }
                        })
                    } catch {
                        i.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: e
                        }), i.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        });
                        return
                    }
                    try {
                        await l.default.patch({
                            url: p.Endpoints.CHANNEL(t.id),
                            body: {
                                flags: t.flags | T.ChannelFlags.PINNED
                            }
                        })
                    } catch {
                        i.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }
                },
                openThreadCreationForMobile(e, t, n) {
                    (0, u.trackWithMetadata)(p.AnalyticEvents.THREAD_CREATION_STARTED, {
                        location: n,
                        channel_id: e.id,
                        guild_id: e.guild_id
                    }), s.default.changeThreadSettings(e.id, {
                        parentMessageId: t,
                        isPrivate: !1,
                        location: n
                    }), null == t && (0, o.setActiveCommand)({
                        channelId: e.id,
                        command: null,
                        section: null
                    })
                },
                async setNotificationSettings(e, t) {
                    return (0, S.trackThreadNotificationSettingsUpdated)(e, t), !g.default.hasJoined(e.id) && await this.joinThread(e, "Change Notification Settings"), l.default.patch({
                        url: p.Endpoints.THREAD_MEMBER_SETTINGS(e.id),
                        body: t
                    })
                },
                loadArchivedThreads(e, t, n, r, s) {
                    !h.default.isLoading(t, n, r) && (i.default.dispatch({
                        type: "LOAD_ARCHIVED_THREADS",
                        channelId: t,
                        sortOrder: n,
                        tagFilter: r
                    }), l.default.get({
                        url: p.Endpoints.THREAD_SEARCH(t),
                        query: {
                            archived: !0,
                            sort_by: "last_message_time",
                            sort_order: "desc",
                            limit: h.PAGE_SIZE,
                            tag: r.size > 0 ? Array.from(r).join(",") : void 0,
                            tag_setting: a.ThreadSearchTagSetting.MATCH_SOME,
                            offset: s
                        },
                        retries: 2
                    }).then(a => {
                        let {
                            body: {
                                threads: l,
                                members: u,
                                has_more: o,
                                first_messages: d,
                                most_recent_messages: c
                            }
                        } = a;
                        i.default.dispatch({
                            type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                            guildId: e,
                            channelId: t,
                            offset: s,
                            sortOrder: n,
                            tagFilter: r,
                            threads: l,
                            firstMessages: d,
                            mostRecentMessages: c,
                            members: (u ?? []).map(e => (0, m.default)(e)),
                            owners: l.map(e => e.owner).filter(_.isNotNullish),
                            hasMore: o
                        })
                    }, () => {
                        i.default.dispatch({
                            type: "LOAD_ARCHIVED_THREADS_FAIL",
                            channelId: t,
                            sortOrder: n,
                            tagFilter: r
                        })
                    }))
                },
                async searchThreads(e, t, n, r) {
                    let s = null != r && r.size > 0 ? Array.from(r).join(",") : void 0,
                        {
                            body: {
                                threads: u,
                                members: o,
                                first_messages: d,
                                most_recent_messages: c
                            }
                        } = await l.default.get({
                            url: p.Endpoints.THREAD_SEARCH(t),
                            query: {
                                name: n,
                                tag: s,
                                tag_setting: a.ThreadSearchTagSetting.MATCH_SOME
                            }
                        });
                    return i.default.dispatch({
                        type: "LOAD_THREADS_SUCCESS",
                        threads: u,
                        members: o,
                        guildId: e,
                        firstMessages: d,
                        mostRecentMessages: c
                    }), u.map(e => e.id)
                }
            }
        },
        151191: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("392711"),
                l = n.n(a),
                i = n("661223"),
                r = n("312916"),
                s = n("919759"),
                u = n("775822"),
                o = n("731865");
            let d = {};

            function c(e) {
                e.threads?.forEach(f)
            }

            function f(e) {
                var t;
                if (!u.ALL_CHANNEL_TYPES.has(e.type)) return !1;
                let n = (!((t = e).id in d) && (d[t.id] = {
                    guildId: t.guild_id,
                    parentId: t.parent_id,
                    memberCount: t.memberCount ?? 0,
                    memberIdsPreview: t.memberIdsPreview ?? []
                }), d[t.id]);
                null != e.memberCount && (n.memberCount = e.memberCount), null != e.memberIdsPreview && (n.memberIdsPreview = e.memberIdsPreview)
            }

            function E(e) {
                let {
                    channel: t
                } = e;
                return f(t)
            }

            function _(e) {
                let {
                    threads: t
                } = e;
                t.forEach(g)
            }

            function h(e) {
                let t = !1;
                for (let n of e.messages)
                    for (let e of n) t = g(e.thread) || t;
                return e.threads.forEach(e => {
                    t = g(e) || t
                }), t
            }

            function g(e) {
                if (null != e && !(e.id in d)) {
                    let t = o.default.getChannel(e.id);
                    if (null != t) return f(t), !0
                }
                return !1
            }
            class S extends i.default.Store {
                static #e = this.displayName = "ThreadMembersStore";
                initialize() {
                    this.waitFor(o.default)
                }
                getMemberCount(e) {
                    return d[e]?.memberCount ?? null
                }
                getMemberIdsPreview(e) {
                    return d[e]?.memberIdsPreview ?? null
                }
                getInitialOverlayState() {
                    return d
                }
            }
            var m = new S(r.default, {
                CONNECTION_OPEN: function(e) {
                    d = {}, e.guilds.forEach(c)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        threadMembers: t
                    } = e;
                    d = {
                        ...t
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    c(t)
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    t = n.id, d = l().omitBy(d, e => e.guildId === t)
                },
                CHANNEL_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    t = n.id, d = l().omitBy(d, e => e.parentId === t)
                },
                THREAD_CREATE: E,
                THREAD_UPDATE: E,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t
                    } = e;
                    t.forEach(f)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let t = d[e.id];
                    if (null == t) return !1;
                    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
                },
                SEARCH_FINISH: h,
                MOD_VIEW_SEARCH_FINISH: h,
                LOAD_THREADS_SUCCESS: _,
                LOAD_ARCHIVED_THREADS_SUCCESS: _,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    delete d[t.id]
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let t = !1;
                    for (let n of e.messages) t = g(n.thread) || t;
                    return t
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e, n = !1;
                    for (let e of (0, s.getThreadsFromGuildFeedFetch)(t)) n = g(e) || n;
                    return n
                }
            })
        },
        759193: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var a = n("392711"),
                l = n.n(a),
                i = n("661223"),
                r = n("312916"),
                s = n("919759"),
                u = n("822534"),
                o = n("775822"),
                d = n("403850"),
                c = n("535291"),
                f = n("731865"),
                E = n("162256"),
                _ = n("84819"),
                h = n("809919"),
                g = n("467006");
            let S = new Set,
                m = {},
                p = {};

            function T(e, t) {
                o.ALL_CHANNEL_TYPES.has(e.type) && A(function(e) {
                    return !(e.id in m) && (m[e.id] = {
                        guildId: e.guild_id,
                        parentId: e.parent_id,
                        count: e.messageCount ?? 0,
                        mostRecentRawMessage: null,
                        mostRecentMessage: null
                    }), m[e.id]
                }(e), t)
            }

            function A(e, t) {
                let n = (p[e.parentId] ?? 0) + 1;
                p[e.parentId] = n, t(e)
            }

            function I(e) {
                e.threads?.forEach(C)
            }

            function C(e) {
                T(e, t => {
                    null != e.messageCount && (t.count = e.messageCount);
                    let n = t.mostRecentRawMessage ?? t.mostRecentMessage;
                    null != e.lastMessageId && n?.id !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
                })
            }

            function M(e) {
                if (null != e && !(e.id in m)) {
                    let t = f.default.getChannel(e.id);
                    if (null != t) return C(t), !0
                }
                return !1
            }

            function N(e) {
                let {
                    channel: t
                } = e;
                C(t)
            }

            function R(e) {
                let {
                    threads: t
                } = e;
                t.forEach(M)
            }

            function L(e) {
                let {
                    messages: t,
                    threads: n
                } = e;
                for (let e of t)
                    for (let t of e) M(t.thread);
                n.forEach(M)
            }
            class O extends i.default.Store {
                static #e = this.displayName = "ThreadMessageStore";
                initialize() {
                    this.waitFor(f.default, E.default)
                }
                getCount(e) {
                    return m[e]?.count ?? null
                }
                getMostRecentMessage(e) {
                    let t = m[e];
                    return null == t ? null : (null == t.mostRecentMessage && null != t.mostRecentRawMessage && (t.mostRecentMessage = E.default.getMessage(e, t.mostRecentRawMessage.id) ?? (0, u.createMessageRecord)(t.mostRecentRawMessage), t.mostRecentRawMessage = null), t.mostRecentMessage ?? null)
                }
                getChannelThreadsVersion(e) {
                    return p[e]
                }
                getInitialOverlayState() {
                    return m
                }
            }
            var D = new O(r.default, {
                CONNECTION_OPEN: function(e) {
                    p = {}, S.clear(), e.guilds.forEach(I)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        threadMessages: t
                    } = e;
                    for (let e in m = {
                            ...t
                        }) {
                        let n = t[e].mostRecentMessage;
                        null != n && (t[e].mostRecentMessage = new d.default({
                            ...n,
                            author: new c.default(n.author)
                        }))
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    I(t)
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    t = n.id, m = l().omitBy(m, e => {
                        let n = e.guildId === t;
                        return n && delete p[e.parentId], n
                    })
                },
                THREAD_CREATE: N,
                THREAD_UPDATE: N,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t,
                        mostRecentMessages: n
                    } = e;
                    t.forEach(C), n?.forEach(e => {
                        let t = f.default.getChannel(e.channel_id);
                        null != t && e.type !== g.MessageTypes.THREAD_STARTER_MESSAGE && T(t, t => {
                            t.mostRecentRawMessage = e, t.mostRecentMessage = null
                        })
                    })
                },
                LOAD_THREADS_SUCCESS: R,
                LOAD_ARCHIVED_THREADS_SUCCESS: R,
                SEARCH_FINISH: L,
                MOD_VIEW_SEARCH_FINISH: L,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    delete m[t.id]
                },
                CHANNEL_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    t = n.id, m = l().omitBy(m, e => e.parentId === t), delete p[t]
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        optimistic: n,
                        isPushNotification: a,
                        sendMessageOptions: l
                    } = e;
                    if (n || a || null != l) return !1;
                    let i = f.default.getChannel(t.channel_id);
                    if (null == i || !o.THREAD_CHANNEL_TYPES.has(i.type) || ! function(e, t) {
                            return !(t.type === g.MessageTypes.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === _.default.castChannelIdAsMessageId(e.id)) && !0
                        }(i, t)) return !1;
                    T(i, e => {
                        e.count = Math.min(e.count + 1, h.MAX_THREAD_MESSAGE_COUNT), e.mostRecentRawMessage = t, e.mostRecentMessage = null
                    })
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e, n = m[t.channel_id], a = n?.mostRecentRawMessage ?? n?.mostRecentMessage;
                    if (null == n || null == a || a.id !== t.id) return !1;
                    A(n, e => {
                        null != e.mostRecentMessage && (e.mostRecentMessage = (0, u.updateMessageRecord)(e.mostRecentMessage, t)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, u.updateServerMessage)(e.mostRecentRawMessage, t))
                    })
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, a = m[n];
                    if (null == a) return !1;
                    let l = _.default.castChannelIdAsMessageId(n) !== t,
                        i = !S.has(t);
                    A(a, e => {
                        let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
                        null != n && n.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = l && i ? Math.max(e.count - 1, 0) : e.count, S.add(t)
                    })
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, a = m[n];
                    if (null == a) return !1;
                    let l = t.filter(e => {
                        let t = _.default.castChannelIdAsMessageId(n) !== e,
                            a = !S.has(e);
                        return t && a
                    }).length;
                    l > 0 && A(a, e => {
                        let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
                        null != n && t.includes(n.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= l, t.forEach(e => S.add(e))
                    })
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let t = !1;
                    for (let n of e.messages) t = M(n.thread) || t;
                    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
                    let n = f.default.getChannel(e.channelId);
                    if (null == n || !o.THREAD_CHANNEL_TYPES.has(n.type)) return t;
                    T(n, t => {
                        if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
                        else {
                            let n = e.messages[0] ?? null;
                            t.count = e.messages.length >= h.MAX_THREAD_MESSAGE_COUNT ? h.MAX_THREAD_MESSAGE_COUNT : t.count, n?.type !== g.MessageTypes.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = n, t.mostRecentMessage = null)
                        }
                    })
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e, n = !1;
                    for (let e of (0, s.getThreadsFromGuildFeedFetch)(t)) n = M(e) || n;
                    return n
                }
            })
        },
        644829: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getTimestampString: function() {
                    return h.default
                },
                trackActiveThreadsPopoutOpened: function() {
                    return T
                },
                trackThreadBrowserOpened: function() {
                    return p
                },
                trackThreadBrowserTab: function() {
                    return m
                },
                trackThreadNotificationSettingsUpdated: function() {
                    return A
                },
                useLastMessageTimestamp: function() {
                    return I
                }
            }), n("789020");
            var a = n("913527"),
                l = n.n(a),
                i = n("661223"),
                r = n("244180"),
                s = n("199063"),
                u = n("417223"),
                o = n("301309"),
                d = n("328470"),
                c = n("984362"),
                f = n("514363"),
                E = n("84819"),
                _ = n("972942"),
                h = n("529754"),
                g = n("809919"),
                S = n("467006");

            function m() {
                (0, r.trackWithMetadata)(S.AnalyticEvents.THREAD_BROWSER_TAB_CHANGED)
            }

            function p() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
                (0, r.trackWithMetadata)(S.AnalyticEvents.OPEN_MODAL, {
                    type: "Thread Browser",
                    location_section: e
                })
            }

            function T() {
                d.default.track(S.AnalyticEvents.OPEN_POPOUT, {
                    type: "Active Threads Popout"
                })
            }

            function A(e, t) {
                let n = (0, s.collectThreadMetadata)(e);
                if (null == n) return;
                let a = e.getGuildId(),
                    l = e.parent_id,
                    i = (0, f.getCurrentChannelSettings)(a, l),
                    r = e => {
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ALL_MESSAGES)) return f.MessageNotificationSettings[S.UserNotificationSettings.ALL_MESSAGES];
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ONLY_MENTIONS)) return f.MessageNotificationSettings[S.UserNotificationSettings.ONLY_MENTIONS];
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.NO_MESSAGES)) return f.MessageNotificationSettings[S.UserNotificationSettings.NO_MESSAGES];
                        return f.MessageNotificationSettings[S.UserNotificationSettings.NULL]
                    },
                    u = _.default.flags(e.id) ?? 0,
                    E = r(u),
                    h = _.default.isMuted(e.id),
                    m = (0, f.muteConfigToTimestamp)(_.default.getMuteConfig(e.id)),
                    {
                        can_send_message: p,
                        ...T
                    } = n,
                    A = {
                        ...T,
                        channel_id: e.id,
                        guild_id: a,
                        parent_id: l,
                        channel_type: e.type,
                        has_interacted_with_thread: (u & g.ThreadMemberFlags.HAS_INTERACTED) != 0,
                        parent_is_muted: o.default.isGuildOrCategoryOrChannelMuted(a, l),
                        old_thread_notification_setting: E,
                        new_thread_notification_setting: null != t.flags ? r(t.flags) : E,
                        parent_notification_setting: i.channel_message_notification_settings,
                        old_thread_is_muted: h,
                        new_thread_is_muted: t.muted ?? h,
                        old_thread_muted_until: m,
                        new_thread_muted_until: null != t.mute_config ? (0, f.muteConfigToTimestamp)(t.mute_config) : m
                    };
                d.default.track(S.AnalyticEvents.THREAD_NOTIFICATION_SETTINGS_UPDATED, A)
            }
            n("30175");
            let I = e => {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.lastMessageId(e.id)),
                    n = null != t ? E.default.extractTimestamp(t) : null,
                    a = e.threadMetadata?.createTimestamp,
                    r = null != a ? l()(a).valueOf() : null;
                return n ?? r ?? E.default.extractTimestamp(e.id)
            }
        },
        529754: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("913527"),
                l = n.n(a),
                i = n("30175");
            let r = 3600,
                s = 86400,
                u = 2592e3,
                o = 31104e3,
                d = () => ({
                    seconds: i.default.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
                    minutes: i.default.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
                    hours: i.default.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
                    days: i.default.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
                    months: i.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
                    years: i.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
                }),
                c = (e, t) => null != t && null != t[e],
                f = (e, t, n) => c(e, t) ? t[e] ?? n?.[e] ?? null : n?.[e] ?? null;
            var E = function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = l()().diff(l()(e), "s"),
                    i = null != t ? t() : void 0,
                    c = d(),
                    E = (e, t) => {
                        let a = f(e, i, n ? c : void 0);
                        return null == a ? null : "string" == typeof a ? a : a.format({
                            count: t
                        })
                    };
                if (a < 60) {
                    let e = i?.seconds != null ? E("seconds", a) : E("minutes", 1);
                    if (null != e) return e
                }
                if (a < r) {
                    let e = E("minutes", Math.floor(a / 60));
                    if (null != e) return e
                }
                if (a < s) {
                    let e = E("hours", Math.floor(a / r));
                    if (null != e) return e
                }
                if (a < u) {
                    let e = E("days", Math.floor(a / s));
                    if (null != e) return e
                }
                if (a < o) {
                    let e = E("months", Math.floor(a / u));
                    if (null != e) return e
                }
                if (a >= o && i?.years != null) {
                    let e = E("years", Math.floor(a / o));
                    if (null != e) return e
                }
                return l()(e).format("LL")
            }
        },
        832885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EVERYONE_CHANNEL_ID: function() {
                    return N
                },
                EVERYONE_ID: function() {
                    return M
                },
                MemberListRowTypes: function() {
                    return a
                },
                default: function() {
                    return w
                }
            }), n("653041");
            var a, l, i = n("392711"),
                r = n.n(i),
                s = n("505578"),
                u = n.n(s),
                o = n("768517"),
                d = n("661223"),
                c = n("312916"),
                f = n("694574"),
                E = n("311545"),
                _ = n("262047"),
                h = n("731865"),
                g = n("362753"),
                S = n("361733"),
                m = n("327271"),
                p = n("565639"),
                T = n("145080"),
                A = n("871831"),
                I = n("467006"),
                C = n("30175");
            let M = "everyone",
                N = 0;

            function R(e, t, n, a) {
                switch (t) {
                    case I.StatusTypes.ONLINE:
                    case I.StatusTypes.OFFLINE:
                    case I.StatusTypes.UNKNOWN:
                        return {
                            type: "GROUP", key: t, id: t, get title() {
                                switch (t) {
                                    case I.StatusTypes.ONLINE:
                                        return C.default.Messages.STATUS_ONLINE;
                                    case I.StatusTypes.OFFLINE:
                                        return C.default.Messages.STATUS_OFFLINE;
                                    default:
                                        return C.default.Messages.STATUS_UNKNOWN
                                }
                            }, count: n, index: a
                        };
                    default:
                        let l = m.default.getGuild(e),
                            i = null != l ? l.getRole(t) : null;
                        return {
                            type: "GROUP", key: t, id: t, title: null != i ? i.name : "", count: n, index: a
                        }
                }
            }

            function L(e, t, n) {
                let a = n === _.default.getId(),
                    l = p.default.isMobileOnline(n),
                    i = a ? T.default.getStatus() : p.default.getStatus(n, e),
                    r = a ? T.default.getActivities() : p.default.getActivities(n, e),
                    s = E.default.getStreamForUser(n, e),
                    u = A.default.getUser(n);
                return null == u ? null : {
                    type: "MEMBER",
                    ...S.default.getMember(e, n),
                    user: u,
                    status: i,
                    activities: r,
                    applicationStream: s,
                    isOwner: t === n,
                    isMobileOnline: l
                }
            }

            function O(e) {
                let t = h.default.getChannel(e);
                return null == t ? M : null == t.memberListId ? function(e) {
                    return f.default.canEveryone(I.Permissions.VIEW_CHANNEL, e) ? M : u().v3(r()(e.permissionOverwrites).reduce((e, t) => {
                        let {
                            id: n,
                            allow: a,
                            deny: l
                        } = t;
                        return o.default.has(a, I.Permissions.VIEW_CHANNEL) ? e.push(`allow:${n}`) : o.default.has(l, I.Permissions.VIEW_CHANNEL) && e.push(`deny:${n}`), e
                    }, []).sort().join(",")).toString()
                }(t) : t.memberListId
            }(l = a || (a = {})).GROUP = "GROUP", l.MEMBER = "MEMBER", l.CONTENT_INVENTORY = "CONTENT_INVENTORY", l.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP";
            class D {
                constructor(e, t) {
                    this.rows = [], this.groups = [], this.members = {}, this.version = 0, this.guildId = e, this.listId = t, this.updateOwnerId()
                }
                updateOwnerId() {
                    let e = m.default.getGuild(this.guildId);
                    if (null == e) return !1;
                    let t = f.default.getGuildVisualOwnerId(e);
                    return this.ownerId !== t && (this.ownerId = t, !0)
                }
                setGroups(e) {
                    let t = 0;
                    this.groups = e.map(e => {
                        let n = t,
                            a = Math.max(0, e.count ?? 0);
                        return t += a + 1, R(this.guildId, e.id, a, n)
                    }), this.rows.length = t
                }
                sync(e, t) {
                    let [n] = e;
                    t.forEach((e, t) => this.update(n + t, e))
                }
                invalidate(e) {
                    let [t, n] = e;
                    for (let e = t; e <= n; e++) {
                        let t = this.rows[e];
                        if (null == t) break;
                        delete this.rows[e], "MEMBER" === t.type && delete this.members[t.user.id]
                    }
                    this.version++
                }
                insert(e, t) {
                    let {
                        group: n,
                        member: a
                    } = t;
                    if (null != n) this.rows.splice(e, 0, R(this.guildId, n.id, n.count));
                    else if (null != a) {
                        let t = L(this.guildId, this.ownerId, a.user.id);
                        if (null == t) return;
                        this.rows.splice(e, 0, t), this.members[a.user.id] = t
                    }
                    this.version++
                }
                update(e, t) {
                    let {
                        group: n,
                        member: a
                    } = t, l = this.rows[e];
                    if (null != l && "MEMBER" === l.type && delete this.members[l.user.id], null != n) this.rows[e] = R(this.guildId, n.id, n.count);
                    else if (null != a) {
                        let t = L(this.guildId, this.ownerId, a.user.id);
                        if (null == t) return;
                        this.rows[e] = t, this.members[a.user.id] = t
                    }
                    this.version++
                }
                delete(e) {
                    let t = this.rows[e];
                    null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
                }
                rebuildMember(e) {
                    let t = this.members[e];
                    null != t && (Object.assign(t, L(this.guildId, this.ownerId, e)), this.version++)
                }
                rebuildMembers() {
                    r().forEach(this.members, (e, t) => {
                        this.rebuildMember(t)
                    })
                }
            }
            let y = new class e {
                get(e, t) {
                    let n = this._guildLists[e];
                    null == n && (n = this._guildLists[e] = {});
                    let a = n[t];
                    return null == a && ((a = new D(e, t)).setGroups([{
                        id: I.StatusTypes.UNKNOWN,
                        count: 0
                    }]), n[t] = a), a
                }
                forEach(e, t) {
                    if (null == e) r().forEach(this._guildLists, e => {
                        r().forEach(e, t)
                    });
                    else {
                        let n = this._guildLists[e];
                        null != n && r().forEach(n, t)
                    }
                }
                delete(e) {
                    delete this._guildLists[e]
                }
                reset() {
                    this._guildLists = {}
                }
                constructor() {
                    this._guildLists = {}
                }
            };

            function b() {
                y.reset()
            }
            let U = [];

            function v() {
                let e = E.default.getAllApplicationStreams(),
                    t = U.concat(e);
                U = e, t.forEach(e => {
                    y.forEach(null, t => t.rebuildMember(e.ownerId))
                })
            }

            function G() {
                let e = _.default.getId();
                y.forEach(null, t => t.rebuildMember(e))
            }
            class P extends d.default.Store {
                static #e = this.displayName = "ChannelMemberStore";
                initialize() {
                    this.waitFor(A.default, m.default, h.default, S.default, p.default, T.default, _.default, g.default, E.default), this.syncWith([T.default], G), this.syncWith([E.default], v)
                }
                getProps(e, t) {
                    let n = y.get(e, O(t));
                    return {
                        listId: `${n.guildId}:${n.listId}`,
                        groups: n.groups,
                        rows: n.rows,
                        version: n.version
                    }
                }
                getRows(e, t) {
                    return y.get(e, O(t)).rows
                }
            }
            var w = new P(c.default, {
                CONNECTION_OPEN: b,
                OVERLAY_INITIALIZE: b,
                GUILD_MEMBER_LIST_UPDATE: function(e) {
                    let t = y.get(e.guildId, e.id);
                    e.ops.forEach(e => {
                        switch (e.op) {
                            case "SYNC":
                                t.sync(e.range, e.items);
                                break;
                            case "INVALIDATE":
                                t.invalidate(e.range);
                                break;
                            case "INSERT":
                                t.insert(e.index, e.item);
                                break;
                            case "UPDATE":
                                t.update(e.index, e.item);
                                break;
                            case "DELETE":
                                t.delete(e.index)
                        }
                    }), t.setGroups(e.groups)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    y.forEach(t.id, e => {
                        e.updateOwnerId() && e.rebuildMembers()
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    y.delete(t.id)
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    y.forEach(t, e => e.rebuildMembers())
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    y.forEach(t, e => e.rebuildMember(n.id))
                },
                CHANNEL_UPDATES: function() {
                    return !0
                }
            })
        },
        276982: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("661223"),
                l = n("312916"),
                i = n("732665"),
                r = n("929748"),
                s = n("362939"),
                u = n("162256");
            let o = {},
                d = {};
            class c extends a.default.Store {
                static #e = this.displayName = "EditMessageStore";
                isEditing(e, t) {
                    return o[e]?.messageId === t
                }
                isEditingAny(e) {
                    return null != o[e]
                }
                getEditingTextValue(e) {
                    return o[e]?.textValue
                }
                getEditingRichValue(e) {
                    return o[e]?.richValue
                }
                getEditingMessageId(e) {
                    return o[e]?.messageId
                }
                getEditingMessage(e) {
                    let t = o[e];
                    return null != t && null != t.messageId ? u.default.getMessage(e, t.messageId) : null
                }
                getEditActionSource(e) {
                    return d[e]
                }
            }
            var f = new c(l.default, {
                MESSAGE_START_EDIT: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        content: a,
                        source: l
                    } = e, u = s.UseLegacyChatInput.getSetting(), c = r.default.unparse(a, t);
                    o[t] = {
                        channelId: t,
                        messageId: n,
                        textValue: c,
                        richValue: (0, i.toRichValue)(u ? c : a)
                    }, d[t] = l
                },
                MESSAGE_UPDATE_EDIT: function(e) {
                    let {
                        channelId: t,
                        textValue: n,
                        richValue: a
                    } = e, l = o[t];
                    if (null == l) return !1;
                    o[t] = {
                        ...l,
                        textValue: n,
                        richValue: a
                    }
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || null == o[t]) return !1;
                    delete o[t], delete d[t]
                }
            })
        },
        357446: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var l = n("392711"),
                i = n.n(l),
                r = n("661223"),
                s = n("312916"),
                u = n("608066"),
                o = n("567927"),
                d = n("262047"),
                c = n("832885"),
                f = n("475232"),
                E = n("731865"),
                _ = n("917175"),
                h = n("361733"),
                g = n("327271"),
                S = n("407807"),
                m = n("606929"),
                p = n("232733"),
                T = n("632706"),
                A = n("467006");
            let I = new u.default(e => {
                for (let t in e) null == g.default.getGuild(t) && !_.default.isUnavailable(t) && delete e[t];
                s.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_FLUSH",
                    subscriptions: e
                })
            });

            function C(e, t) {
                let n = {};
                I.forEach(l => {
                    l !== T.default.getGuildId() && l !== S.default.getGuildId() && l !== E.default.getChannel(p.default.getChannelId())?.getGuildId() && (null == a || a.guildId !== l) && (I.clearWithoutFlushing(l, e), t && (n[l] = I.get(l)))
                }), !i().isEmpty(n) && s.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_FLUSH",
                    subscriptions: n
                })
            }

            function M(e, t) {
                return I.subscribeToGuild(e), null != t && f.default.getSection(t) === A.ChannelSections.MEMBERS && N(e, t, u.DEFAULT_RANGES)
            }

            function N(e, t, n) {
                if (t === c.EVERYONE_CHANNEL_ID) return I.subscribeChannel(e, t, n);
                let a = E.default.getChannel(t);
                if (null == a) return !1;
                let l = a.getGuildId();
                return (l !== e && e === A.FAVORITES && I.subscribeToGuild(l), a?.isThread()) ? a.type === A.ChannelTypes.ANNOUNCEMENT_THREAD ? I.subscribeChannel(l, a.parent_id, n) : !!a.isActiveThread() && I.subscribeThreadMemberList(l, t, p.default.getChannelId()) : I.subscribeChannel(l, t, n)
            }

            function R(e) {
                let {
                    type: t
                } = e;
                "CONNECTION_OPEN" === t && C(!0, !1);
                let n = T.default.getGuildId();
                null != n && M(n, p.default.getChannelId(n));
                let a = {};
                I.forEach(e => {
                    null == g.default.getGuild(e) ? I.clearWithoutFlushing(e, !0) : a[e] = I.get(e)
                }), !i().isEmpty(a) && s.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_FLUSH",
                    subscriptions: a
                })
            }

            function L(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                return !_.default.isUnavailable(t) && M(t, n)
            }

            function O() {
                return M(T.default.getGuildId(), p.default.getChannelId())
            }

            function D() {
                let e = o.default.getSyncingWith();
                if (null == e) null != a && (I.unsubscribeUser(a.guildId, a.userId), a = null);
                else {
                    let {
                        userId: t
                    } = e;
                    if (null != a && a.userId === t || m.default.isFriend(t)) return !1;
                    let n = h.default.memberOf(t);
                    if (0 === n.length) return !1;
                    let [l] = n;
                    a = {
                        guildId: l,
                        userId: t
                    }, I.subscribeUser(l, t)
                }
                return !1
            }
            class y extends r.default.Store {
                static #e = this.displayName = "GuildSubscriptionsStore";
                initialize() {
                    this.waitFor(E.default, g.default, T.default, p.default, S.default, d.default, f.default), this.syncWith([o.default], D), this.syncWith([f.default], O)
                }
                getSubscribedThreadIds() {
                    return I.getSubscribedThreadIds()
                }
                isSubscribedToThreads(e) {
                    return I.isSubscribedToThreads(e)
                }
                isSubscribedToAnyMember(e) {
                    return I.isSubscribedToAnyMember(e)
                }
                isSubscribedToMemberUpdates(e) {
                    return I.isSubscribedToMemberUpdates(e)
                }
                isSubscribedToAnyGuildChannel(e) {
                    let t = I.get(e).channels;
                    return null != t && Object.keys(t).length > 0
                }
            }
            var b = new y(s.default, {
                CONNECTION_OPEN: R,
                CONNECTION_RESUMED: R,
                CONNECTION_CLOSED: function() {
                    C(!1, !1)
                },
                IDLE: function(e) {
                    let {
                        idle: t
                    } = e;
                    if (!t) return !1;
                    C(!1, !0)
                },
                LOGOUT: function() {
                    I.reset()
                },
                VOICE_CHANNEL_SELECT: L,
                CHANNEL_SELECT: L,
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    t.id === T.default.getGuildId() && O()
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    I.clearWithoutFlushing(t.id, !0)
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        e !== d.default.getId() && I.subscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        I.unsubscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function(e) {
                    let {
                        guildId: t
                    } = e;
                    I.subscribeToMemberUpdates(t)
                },
                GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function(e) {
                    let {
                        guildId: t
                    } = e;
                    I.unsubscribeFromMemberUpdates(t)
                },
                GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        ranges: a
                    } = e;
                    return N(t, n, a)
                },
                GUILD_SUBSCRIPTIONS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return I.subscribeToGuild(t)
                },
                CHANNEL_PRELOAD: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return M(t, n)
                },
                INBOX_OPEN: function(e) {
                    let {
                        guildIds: t
                    } = e;
                    for (let e of t) null != e && I.subscribeToGuild(e);
                    return !1
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return t.isArchivedThread() ? I.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && p.default.getChannelId() === t.id && void I.subscribeThreadMemberList(t.guild_id, t.id, p.default.getChannelId())
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return I.unsubscribeThreadMemberList(t.guild_id, t.id)
                },
                THREAD_LIST_SYNC: O
            })
        },
        417698: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlowmodeType: function() {
                    return l
                },
                default: function() {
                    return S
                }
            });
            var a, l, i = n("661223"),
                r = n("767191"),
                s = n("312916"),
                u = n("152551"),
                o = n("731865"),
                d = n("197905"),
                c = n("467006");
            (a = l || (l = {}))[a.SendMessage = 0] = "SendMessage", a[a.CreateThread = 1] = "CreateThread";
            let f = {
                0: {},
                1: {}
            };

            function E(e, t, n) {
                if (function(e, t) {
                        null != f[t][e.id] && (f[t][e.id].timer.stop(), delete f[t][e.id])
                    }(e, t), function(e, t) {
                        return 0 === t ? d.default.can(c.Permissions.MANAGE_CHANNELS, e) || d.default.can(c.Permissions.MANAGE_MESSAGES, e) : d.default.can(c.Permissions.MANAGE_THREADS, e)
                    }(e, t) || n <= 0) return;
                let a = n + Date.now();
                f[t][e.id] = {
                    rateLimitPerUser: e.rateLimitPerUser,
                    cooldownMs: n,
                    cooldownEndTimestamp: a,
                    timer: new r.Timeout
                }, f[t][e.id].timer.start(1e3, () => {
                    s.default.dispatch({
                        type: "SLOWMODE_SET_COOLDOWN",
                        channelId: e.id,
                        slowmodeType: t,
                        cooldownMs: Math.max(a - Date.now(), 0)
                    })
                }, !0)
            }

            function _(e, t) {
                let n = o.default.getChannel(e);
                if (null == n) return !1;
                E(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * u.default.Millis.SECOND + 100)
            }

            function h(e) {
                let {
                    file: t
                } = e, n = o.default.getChannel(t.channelId);
                return null != n && E(n, 0, 0)
            }
            class g extends i.default.Store {
                static #e = this.displayName = "SlowmodeStore";
                initialize() {
                    this.waitFor(o.default)
                }
                getSlowmodeCooldownGuess(e, t) {
                    let n = f[t ?? 0][e];
                    return null != n ? n.cooldownMs : 0
                }
            }
            var S = new g(s.default, {
                SLOWMODE_RESET_COOLDOWN: function(e) {
                    let {
                        channelId: t,
                        slowmodeType: n
                    } = e;
                    return _(t, n)
                },
                SLOWMODE_SET_COOLDOWN: function(e) {
                    let {
                        channelId: t,
                        slowmodeType: n,
                        cooldownMs: a
                    } = e, l = o.default.getChannel(t);
                    if (null == l) return !1;
                    E(l, n, 0 === a ? 0 : a + 100)
                },
                UPLOAD_START: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return _(t, 0)
                },
                UPLOAD_FAIL: h,
                UPLOAD_CANCEL_REQUEST: h,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    [0, 1].forEach(e => {
                        for (let n of t) {
                            let t = f[e][n.id],
                                a = n.rateLimitPerUser;
                            if (null != t && t.rateLimitPerUser !== a) E(n, e, Math.min(t?.cooldownMs ?? 0, a * u.default.Millis.SECOND))
                        }
                    })
                },
                LOGOUT: function() {
                    [0, 1].forEach(e => {
                        Object.keys(f[e]).forEach(t => f[e][t].timer.stop()), f[e] = {}
                    })
                }
            })
        },
        658082: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return q
                }
            });
            var a = n("658722"),
                l = n.n(a),
                i = n("392711"),
                r = n.n(i),
                s = n("913527"),
                u = n.n(s),
                o = n("661223"),
                d = n("312916"),
                c = n("148934"),
                f = n("224022"),
                E = n("661444"),
                _ = n("703229"),
                h = n("709861"),
                g = n("919866"),
                S = n("599027"),
                m = n("532858"),
                p = n("521282"),
                T = n("306043"),
                A = n("945253"),
                I = n("831144"),
                C = n("152551"),
                M = n("497988"),
                N = n("370275"),
                R = n("585741"),
                L = n("501769"),
                O = n("432056"),
                D = n("859533"),
                y = n("772693"),
                b = n("467006");
            let U = u()().subtract(1, "week"),
                v = [],
                G = "",
                P = !1;

            function w(e, t) {
                return e.application.name.localeCompare(t.application.name, _.default.locale, {
                    sensitivity: "base"
                })
            }
            let F = {
                    [b.GameTableListKeys.NAME]: w,
                    [b.GameTableListKeys.PLATFORM]: (e, t, n) => {
                        let a = e.libraryApplication.getDistributor(),
                            l = t.libraryApplication.getDistributor();
                        return a === l ? (n === b.TableSortDirections.DESCENDING ? -1 : 1) * w(e, t) : null == a ? 1 : null == l ? -1 : a.localeCompare(l)
                    },
                    [b.GameTableListKeys.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
                    [b.GameTableListKeys.ACTIONS]: null
                },
                k = (0, M.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
                H = (0, M.cachedFunction)(e => e.filter(e => null != e.libraryApplication && A.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
                x = (0, M.cachedFunction)((e, t) => e.filter(e => l()(t.toLowerCase(), e.application.name.toLowerCase()))),
                B = (0, M.cachedFunction)((e, t, n, a) => {
                    let l = F[t];
                    if (null == l) return e;
                    let i = [...e].sort(l);
                    return n === b.TableSortDirections.DESCENDING ? i.reverse() : i
                }),
                V = (0, M.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

            function Y(e, t) {
                let n = p.default.getCurrentUserStatisticsForApplication(e.id);
                if (null != n) return new Date(n.last_played_at).getTime();
                let a = t[e.id];
                return null != a ? a : 0
            }

            function W() {
                let e = new Set(f.default.getRunningVerifiedApplicationIds()),
                    t = {},
                    n = new Set,
                    a = f.default.getGamesSeen(!1, !1).map(e => {
                        let n = g.default.getGameByGameData(e);
                        return null != n ? (t[n.id] = e.lastFocused * C.default.Millis.SECOND, n.id) : null
                    }),
                    l = Object.values(S.default.getAllLibraryApplications()).map(a => (function(e, t, n, a, l) {
                        var i, r;
                        if (!l && t.has(e.id)) return null;
                        let s = c.default.getApplication(e.id);
                        if (null == s) return null;
                        let o = Y(s, n);
                        if (t.add(e.id), !(0, R.isUserEntitledToLibraryApplication)(e) && !A.default.isInstalled(e.id, e.branchId)) return null;
                        return {
                            key: `${e.id}-${e.branchId}`,
                            application: s,
                            libraryApplication: e,
                            lastPlayed: o,
                            supportsCloudSync: null != e && A.default.supportsCloudSync(e.id, e.branchId),
                            isNew: (i = e, r = o, null != i && u()(i.createdAt).isAfter(U) && 0 === r),
                            isLaunching: E.default.launchingGames.has(e.id),
                            isRunning: a.has(e.id),
                            isLaunchable: (0, D.isLaunchable)({
                                LibraryApplicationStore: S.default,
                                LaunchableGameStore: E.default,
                                DispatchApplicationStore: A.default,
                                ConnectedAppsStore: h.default,
                                applicationId: e.id,
                                branchId: e.branchId
                            }),
                            isUpdatingFlags: S.default.isUpdatingFlags(e.id, e.branchId),
                            shouldShowInLibrary: (0, R.shouldShowGameInLibrary)(s, e, m.default),
                            defaultAction: (0, y.getDefaultLibraryApplicationAction)(e, A.default, I.default)
                        }
                    })(a, n, t, e, !0)).filter(N.isNotNullish),
                    i = [...a.map(a => (function(e, t, n, a) {
                        let l = null != e ? c.default.getApplication(e) : null;
                        if (null == l || null == e || t.has(e)) return null;
                        let i = Y(l, n);
                        return t.add(e), {
                            key: e,
                            application: l,
                            lastPlayed: i,
                            supportsCloudSync: !1,
                            isNew: !1,
                            isLaunching: E.default.launchingGames.has(e),
                            isRunning: a.has(e),
                            isLaunchable: (0, D.isLaunchable)({
                                LibraryApplicationStore: S.default,
                                LaunchableGameStore: E.default,
                                DispatchApplicationStore: A.default,
                                ConnectedAppsStore: h.default,
                                applicationId: e,
                                branchId: null
                            }),
                            isUpdatingFlags: !1,
                            shouldShowInLibrary: !1,
                            libraryApplication: null,
                            defaultAction: null
                        }
                    })(a, n, t, e)).filter(N.isNotNullish), ...l].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
                return P = null != g.default.lastFetched && S.default.fetched, !r().isEqual(i, v) && (v = i, L.isPlatformEmbedded && O.default.setSystemTrayApplications(H(v).map(e => e.application).slice(0, 5)), !0)
            }
            class K extends o.default.Store {
                static #e = this.displayName = "ApplicationViewStore";
                initialize() {
                    this.syncWith([c.default, g.default, E.default, f.default, A.default, I.default, S.default, p.default, m.default, h.default], W, 200), this.syncWith([T.default, _.default], () => !0)
                }
                get applicationFilterQuery() {
                    return G
                }
                get applicationViewItems() {
                    return v
                }
                get launchableApplicationViewItems() {
                    return H(v)
                }
                get libraryApplicationViewItems() {
                    return k(v)
                }
                get filteredLibraryApplicationViewItems() {
                    return x(this.libraryApplicationViewItems, G)
                }
                get sortedFilteredLibraryApplicationViewItems() {
                    return B(this.filteredLibraryApplicationViewItems, T.default.sortKey, T.default.sortDirection, _.default.locale)
                }
                get hiddenLibraryApplicationViewItems() {
                    return V(v)
                }
                get hasFetchedApplications() {
                    return P
                }
            }
            var q = new K(d.default, {
                LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
                    let {
                        query: t
                    } = e;
                    G = t
                }
            })
        },
        772693: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDefaultLibraryApplicationAction: function() {
                    return i
                }
            });
            var a = n("859533"),
                l = n("467006");

            function i(e, t, n) {
                let i = t.getState(e.id, e.branchId),
                    r = n.getQueuePosition(e.id, e.branchId),
                    s = n.paused;
                if (null != i) {
                    if (null == r || -1 === r) switch (i.type) {
                        case l.LocalDispatchApplicationStates.INSTALLING:
                            return l.LibraryApplicationActions.INSTALL;
                        case l.LocalDispatchApplicationStates.UPDATING:
                        case l.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                            return l.LibraryApplicationActions.UPDATE
                    }
                    switch (i.type) {
                        case l.LocalDispatchApplicationStates.INSTALLING:
                        case l.LocalDispatchApplicationStates.UPDATING:
                        case l.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                        case l.LocalDispatchApplicationStates.REPAIRING:
                            if (r > 0) return l.LibraryApplicationActions.MOVE_UP;
                            if (s) return l.LibraryApplicationActions.RESUME;
                            return l.LibraryApplicationActions.PAUSE;
                        case l.LocalDispatchApplicationStates.UP_TO_DATE:
                            return l.LibraryApplicationActions.PLAY;
                        case l.LocalDispatchApplicationStates.UNINSTALLING:
                            return null
                    }
                }
                return null != r && r > 0 ? l.LibraryApplicationActions.MOVE_UP : (0, a.isSupportedPlatform)() ? l.LibraryApplicationActions.INSTALL : null
            }
        },
        306043: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("392711"),
                i = n.n(l),
                r = n("661223"),
                s = n("986329"),
                u = n("312916"),
                o = n("467006");
            let d = "GameLibraryViewStore",
                c = o.TableSortDirections.ASCENDING,
                f = o.GameTableListKeys.LAST_PLAYED,
                E = !1,
                _ = i().debounce(() => {
                    E = !1, g.emitChange()
                }, 200);
            class h extends r.default.Store {
                static #e = this.displayName = "GameLibraryViewStore";
                initialize() {
                    let e = s.default.get(d) ?? {};
                    null != e.sortDirection && null != e.sortKey && (c = e.sortDirection, f = e.sortKey)
                }
                get sortDirection() {
                    return c
                }
                get sortKey() {
                    return f
                }
                get activeRowKey() {
                    return a
                }
                get isNavigatingByKeyboard() {
                    return E
                }
            }
            let g = new h(u.default, {
                LIBRARY_TABLE_SORT_UPDATE: function(e) {
                    let {
                        direction: t,
                        key: n
                    } = e;
                    c = t, f = n, s.default.set(d, {
                        sortDirection: c,
                        sortKey: f
                    })
                },
                LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
                    let {
                        key: t,
                        isKeyboardEvent: n
                    } = e;
                    n && (E = !0, _()), a = t
                }
            });
            var S = g
        },
        604293: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
                    return en
                },
                default: function() {
                    return eu
                }
            }), n("653041"), n("733860");
            var l = n("658722"),
                i = n.n(l),
                r = n("392711"),
                s = n.n(r),
                u = n("555083"),
                o = n("741312"),
                d = n("412096"),
                c = n("332391"),
                f = n("841869"),
                E = n("353118"),
                _ = n("138795"),
                h = n("209458"),
                g = n("913897"),
                S = n("813287"),
                m = n("8584"),
                p = n("361820"),
                T = n("822232"),
                A = n("786649"),
                I = n("259537"),
                C = n("775822"),
                M = n("535291"),
                N = n("731865"),
                R = n("610043"),
                L = n("361733"),
                O = n("327271"),
                D = n("162256"),
                y = n("197905"),
                b = n("565639"),
                U = n("606929"),
                v = n("232733"),
                G = n("632706"),
                P = n("871831"),
                w = n("474997"),
                F = n("370275"),
                k = n("497160"),
                H = n("694574"),
                x = n("930771"),
                B = n("84819"),
                V = n("702340"),
                Y = n("439823"),
                W = n("467006"),
                K = n("221281"),
                q = n("551835"),
                Q = n("30175");
            let $ = new f.default("AutocompleteUtils"),
                j = () => !0,
                X = /(\t|\s)/,
                z = [],
                J = (a = n("969211").default).MENTION_EVERYONE,
                Z = a.MENTION_HERE,
                ee = a.LAUNCHABLE_APPLICATIONS;

            function et() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return 1e3 * e * (t ?? 1)
            }
            let en = [R.GUILD_SELECTABLE_CHANNELS_KEY, R.GUILD_VOCAL_CHANNELS_KEY, W.ChannelTypes.GUILD_CATEGORY];

            function ea(e, t) {
                let {
                    exactQuery: n,
                    containQuery: a,
                    queryLower: l
                } = t, r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                try {
                    var s, u;
                    if (n.test(e)) {
                        if (e.toLocaleLowerCase() === l) return 10;
                        return 7
                    }
                    if (a.test(e)) return 5;
                    if (s = l, u = e, s.split(/(?:,| )+/).every(e => RegExp(x.default.escape(e), "i").test(u))) return 3;
                    if (r && i()(l, e)) return 1
                } catch (e) {
                    $.error(e)
                }
                return 0
            }

            function el(e) {
                return e?.joinedAt != null && !e.isPending
            }

            function ei(e) {
                let {
                    query: t,
                    members: n,
                    limit: a,
                    filter: l,
                    allowSnowflake: r
                } = e, s = P.default.getUsers(), o = G.default.getGuildId(), d = t.toLocaleLowerCase(), c = (0, V.normalize)(d), f = [], E = [], _ = n.length, h = 0, g = 0;
                for (; h < _;) {
                    let e, a;
                    let u = n[h];
                    u instanceof M.default ? (a = u, e = L.default.getNick(o, a.id)?.toLocaleLowerCase()) : (e = u.nick?.toLocaleLowerCase(), a = s[u.userId]);
                    let _ = Y.default.getGlobalName(a)?.toLocaleLowerCase();
                    if (null == l || l(a)) {
                        let n = a.username.toLocaleLowerCase(),
                            l = (0, V.stripDiacritics)(n),
                            s = (0, V.normalize)(l),
                            u = null != e ? (0, V.stripDiacritics)(e) : null,
                            o = null != u ? (0, V.normalize)(u) : null,
                            h = null != _ ? (0, V.stripDiacritics)(_) : null,
                            S = null != h ? (0, V.normalize)(h) : null;
                        r && t === a.id || n.substring(0, d.length) === d || l.substring(0, d.length) === d || e?.substring(0, d.length) === d || u?.substring(0, d.length) === d || _?.substring(0, d.length) === d || h?.substring(0, d.length) === d ? f.push({
                            type: K.AutocompleterResultTypes.USER,
                            record: a,
                            score: 10,
                            comparator: _ ?? e ?? n,
                            sortable: h ?? u ?? l
                        }) : s.substring(0, c.length) === c || o?.substring(0, c.length) === c || S?.substring(0, c.length) === c ? f.push({
                            type: K.AutocompleterResultTypes.USER,
                            record: a,
                            score: 1,
                            comparator: _ ?? e ?? n,
                            sortable: h ?? u ?? l
                        }) : g < 50 && (i()(d, l) || i()(c, s) || null != u && i()(d, u) || null != o && i()(c, o) || null != h && i()(d, h) || null != S && i()(c, S)) && (E.push({
                            type: K.AutocompleterResultTypes.USER,
                            record: a,
                            score: 1,
                            comparator: _ ?? e ?? n,
                            sortable: h ?? u ?? l
                        }), g += 1)
                    }
                    h += 1
                }
                return f.sort(u.default), f.length < a && (E.sort(u.default), f = f.concat(E.slice(0, Math.max(0, a - f.length)))), f.length > a && (f.length = a), f
            }

            function er(e, t, n) {
                let a = 0,
                    l = null;
                for (let i of t) {
                    let t = ea(e, i, n);
                    t > a && (a = t, l = i)
                }
                return null != l && (l.isFullMatch ? t.length = 0 : t.splice(t.indexOf(l), 1)), a
            }

            function es(e, t) {
                let n = N.default.getChannel(e);
                return null == e || null == n ? [] : s()(D.default.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => P.default.getUser(e.author.id)).filter(e => {
                    if (null == e || e.isNonUserBot()) return !1;
                    let t = n.getGuildId();
                    return null == t || el(L.default.getMember(t, e.id))
                }).map(e => {
                    let t = n.getGuildId(),
                        a = null != t ? L.default.getMember(t, e.id) : null;
                    return {
                        type: K.AutocompleterResultTypes.USER,
                        record: e,
                        score: 0,
                        comparator: a?.nick ?? Y.default.getName(e)
                    }
                }).take(t).value()
            }
            var eu = {
                queryFriends(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        _fuzzy: a = !0,
                        filter: l
                    } = e;
                    return ei({
                        query: t,
                        members: U.default.getFriendIDs().map(e => P.default.getUser(e)).filter(F.isNotNullish),
                        limit: n,
                        filter: l
                    })
                },
                queryDMUsers(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        filter: a
                    } = e;
                    return ei({
                        query: t,
                        members: N.default.getDMUserIds().map(e => P.default.getUser(e)).filter(F.isNotNullish),
                        limit: n,
                        filter: a
                    })
                },
                queryChannelUsers(e) {
                    let t, {
                            channelId: n,
                            query: a,
                            limit: l = 10,
                            request: i = !0,
                            checkRecentlyTalkedOnEmptyQuery: r = !0,
                            allowSnowflake: s = !1
                        } = e,
                        u = N.default.getChannel(n);
                    if (null == u) return [];
                    let o = (u.isThread() ? N.default.getChannel(u.parent_id) : null) ?? u;
                    if (null == o) return [];
                    if (o.isPrivate()) {
                        t = o.recipients.map(e => ({
                            userId: e,
                            nick: U.default.getNickname(e) ?? null
                        }));
                        let e = P.default.getCurrentUser();
                        null != e && t.push({
                            userId: e.id,
                            nick: null
                        })
                    } else {
                        if (0 === a.length && r) {
                            let e = es(u.id, l);
                            if (e.length > 0) return e
                        }
                        t = L.default.getMembers(o.guild_id).filter(el), i && k.default.requestMembers(o.guild_id, a, l)
                    }
                    return ei({
                        query: a,
                        members: t,
                        limit: l,
                        filter: e => o.isPrivate() || H.default.can({
                            permission: W.Permissions.VIEW_CHANNEL,
                            user: e,
                            context: o
                        }),
                        allowSnowflake: s
                    })
                },
                queryGuildUsers(e) {
                    let {
                        guildId: t,
                        query: n,
                        limit: a = 10,
                        request: l = !0,
                        checkRecentlyTalkedOnEmptyQuery: i = !0,
                        filter: r,
                        allowSnowflake: s
                    } = e;
                    if (null == O.default.getGuild(t)) return [];
                    if (0 === n.length && i) {
                        let e = es(v.default.getChannelId(t), a);
                        if (e.length > 0) return e
                    }
                    let u = L.default.getMembers(t).filter(el);
                    return l && n.length > 0 && k.default.requestMembers(t, n, a), ei({
                        query: n,
                        members: u,
                        limit: a,
                        filter: r,
                        allowSnowflake: s
                    })
                },
                queryUsers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
                        a = arguments.length > 4 ? arguments[4] : void 0;
                    return n && e.length > 0 && k.default.requestMembers(null, e, t), ei({
                        query: e,
                        members: s()(P.default.getUsers()).values().value(),
                        limit: t,
                        filter: a
                    })
                },
                queryChannels(e) {
                    let t, {
                            query: n,
                            guildId: a,
                            limit: l = W.MAX_AUTOCOMPLETE_RESULTS,
                            fuzzy: i = !0,
                            filter: r = j,
                            type: d = R.GUILD_SELECTABLE_CHANNELS_KEY,
                            allowEmptyQueries: c = !1,
                            requireVocalConnectAccess: f = !0,
                            boosters: E = {},
                            allowSnowflake: _
                        } = e,
                        h = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = e.split(" ").filter(e => "" !== e || t).map(e => {
                                    let t = e.toLocaleLowerCase();
                                    return {
                                        queryLower: t,
                                        exactQuery: RegExp(`^${x.default.escape(t)}`, "i"),
                                        containQuery: RegExp(x.default.escape(t), "i"),
                                        isFullMatch: !1
                                    }
                                });
                            if (e.includes(" ")) {
                                let t = e.toLocaleLowerCase();
                                n.unshift({
                                    queryLower: t,
                                    exactQuery: RegExp(`^${x.default.escape(t).replace(" ","( |-)")}`, "i"),
                                    containQuery: RegExp(x.default.escape(t).replace(" ", "( |-)"), "i"),
                                    isFullMatch: !0
                                })
                            }
                            return n
                        }(n, c);
                    t = null != a ? s()(R.default.getChannels(a)[d]).map(e => e.channel).concat(A.default.computeAllActiveJoinedThreads(a)).value() : s()(N.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(A.default.computeAllActiveJoinedThreads()).value();
                    let g = {},
                        S = [];
                    for (let e of t) {
                        var m, p, T, I, M;
                        if (m = d, p = e.type, T = null != a, !(m === p || (T || (0, C.isGuildChannelType)(p)) && (m === R.GUILD_SELECTABLE_CHANNELS_KEY ? (0, C.isGuildSelectableChannelType)(p) || (0, C.isGuildVocalChannelType)(p) : m === R.GUILD_VOCAL_CHANNELS_KEY && (0, C.isGuildVocalChannelType)(p))) || (0, C.isGuildChannelType)(e.type) && !y.default.can(f ? e.accessPermissions : W.Permissions.VIEW_CHANNEL, e) || !r(e)) continue;
                        let t = [...h],
                            l = e.name.toLocaleLowerCase(),
                            s = _ && n === e.id,
                            u = s ? 10 : er(l, t, i);
                        if (0 !== u) {
                            if (t.length > 0) {
                                for (let n of [function(e, t) {
                                        if (null == e.guild_id) return;
                                        let n = t[e.guild_id];
                                        return null == n && (n = t[e.guild_id] = O.default.getGuild(e.guild_id)?.toString().toLocaleLowerCase()), n
                                    }(e, g), function(e, t) {
                                        if (null == e.parent_id) return;
                                        let n = t[e.parent_id];
                                        return null == n && (n = t[e.parent_id] = N.default.getChannel(e.parent_id)?.name.toLocaleLowerCase()), n
                                    }(e, g)]) {
                                    if (null == n || "" === n) continue;
                                    let e = er(n, t, !1);
                                    0 !== e && (u += .5 * e)
                                }
                                u = Math.min(9, u)
                            }
                            if (0 !== u && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || s)) {
                                ;
                                if (I = d, M = e.type, I === R.GUILD_SELECTABLE_CHANNELS_KEY && (0, C.isGuildVocalChannelType)(M)) u = Math.max(u - 1, .5);
                                S.push({
                                    type: (0, C.isGuildVocalChannelType)(e.type) ? K.AutocompleterResultTypes.VOICE_CHANNEL : K.AutocompleterResultTypes.TEXT_CHANNEL,
                                    record: e,
                                    score: et(u, E[e.id]),
                                    comparator: (0, o.computeChannelName)(e, P.default, U.default),
                                    sortable: l
                                })
                            }
                        }
                    }
                    return S.sort(u.default), null != l && S.length > l && (S.length = l), S
                },
                queryGuilds(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        fuzzy: a = !0,
                        filter: l = j,
                        boosters: i = {}
                    } = e, r = "" === t ? "" : t.toLocaleLowerCase(), o = {
                        exactQuery: RegExp(`^${x.default.escape(r)}`, "i"),
                        containQuery: RegExp(x.default.escape(r), "i"),
                        queryLower: r
                    }, d = [];
                    for (let e of s()(O.default.getGuilds()).values().value()) {
                        if (!l(e)) continue;
                        let t = e.name.toLocaleLowerCase(),
                            n = ea(t, o, a);
                        n > 0 && d.push({
                            type: K.AutocompleterResultTypes.GUILD,
                            record: e,
                            score: et(n, i[e.id]),
                            comparator: e.toString(),
                            sortable: t
                        })
                    }
                    return d.sort(u.default), d.length > n && (d.length = n), d
                },
                queryGroupDMs(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        fuzzy: a = !0,
                        filter: l = j,
                        boosters: i = {}
                    } = e, r = (0, V.stripDiacritics)((0, V.normalize)(t.toLocaleLowerCase())), d = {
                        exactQuery: RegExp(`^${x.default.escape(r)}`, "i"),
                        containQuery: RegExp(x.default.escape(r), "i"),
                        queryLower: r
                    }, c = s()(N.default.getMutablePrivateChannels()).values().value(), f = [];
                    for (let e of c) {
                        if (!e.isMultiUserDM() || !l(e)) continue;
                        let t = (0, o.computeChannelName)(e, P.default, U.default).toLocaleLowerCase(),
                            n = (0, V.stripDiacritics)((0, V.normalize)(t)),
                            r = ea(n, d, a);
                        r > 0 && f.push({
                            type: K.AutocompleterResultTypes.GROUP_DM,
                            record: e,
                            score: et(r, i[e.id]),
                            comparator: (0, o.computeChannelName)(e, P.default, U.default),
                            sortable: n
                        })
                    }
                    return f.sort(u.default), f.length > n && (f.length = n), f
                },
                queryApplications(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        fuzzy: a = !0,
                        filter: l = j
                    } = e, i = t.toLocaleLowerCase(), r = {
                        exactQuery: RegExp(`^${x.default.escape(i)}`, "i"),
                        containQuery: RegExp(x.default.escape(i), "i"),
                        queryLower: i
                    }, s = ee(), o = [];
                    for (let {
                            application: e
                        }
                        of s) {
                        if (!l(e)) continue;
                        let t = e.name.toLocaleLowerCase(),
                            n = ea(t, r, a);
                        n > 0 && o.push({
                            type: K.AutocompleterResultTypes.APPLICATION,
                            record: e,
                            score: n,
                            comparator: e.name,
                            sortable: t
                        })
                    }
                    return o.sort(u.default), o.length > n && (o.length = n), o
                },
                querySKUs(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        fuzzy: a = !0,
                        filter: l = j
                    } = e, i = t.toLocaleLowerCase(), r = {
                        exactQuery: RegExp(`^${x.default.escape(i)}`, "i"),
                        containQuery: RegExp(x.default.escape(i), "i"),
                        queryLower: i
                    }, o = s()(w.default.getSKUs()).values().value(), d = [];
                    for (let e of o)
                        if (e.type === W.SKUTypes.DURABLE_PRIMARY && l(e)) {
                            let t = e.name.toLocaleLowerCase(),
                                n = ea(t, r, a);
                            n > 0 && d.push({
                                type: K.AutocompleterResultTypes.SKU,
                                record: e,
                                score: n,
                                comparator: e.name,
                                sortable: t
                            })
                        } return d.sort(u.default), d.length > n && (d.length = n), d
                },
                getRecentlyTalked: es,
                queryMentionResults(e) {
                    let {
                        query: t,
                        channel: n,
                        canMentionEveryone: a = !1,
                        canMentionHere: l = !0,
                        canMentionUsers: r = !0,
                        canMentionRoles: u = !0,
                        includeAllGuildUsers: o = !1,
                        includeNonMentionableRoles: d = !1,
                        checkRecentlyTalkedOnEmptyQuery: c = !0,
                        limit: f = W.MAX_AUTOCOMPLETE_RESULTS,
                        request: E,
                        allowSnowflake: _ = !1
                    } = e, h = r ? (o && null != n.guild_id ? this.queryGuildUsers({
                        guildId: n.guild_id,
                        query: t,
                        limit: f,
                        checkRecentlyTalkedOnEmptyQuery: c,
                        request: E,
                        allowSnowflake: _
                    }) : this.queryChannelUsers({
                        channelId: n.id,
                        query: t,
                        limit: f,
                        checkRecentlyTalkedOnEmptyQuery: c,
                        allowSnowflake: _
                    })).map(e => {
                        let {
                            record: t,
                            score: a,
                            comparator: l
                        } = e;
                        return {
                            user: t,
                            score: a,
                            comparator: l,
                            nick: L.default.getNick(n.guild_id, t.id),
                            status: b.default.getStatus(t.id)
                        }
                    }) : [], g = h.length, S = t.toLowerCase(), m = [];
                    if (g < f && u) {
                        let e = n.getGuildId(),
                            t = O.default.getGuild(e);
                        null != t && (s()(t.roles).filter(t => {
                            let {
                                mentionable: n,
                                name: l,
                                id: r
                            } = t;
                            return (n || a || d) && (i()(S, l.toLowerCase()) || _ && S === r) && r !== B.default.castGuildIdAsEveryoneGuildRoleId(e)
                        }).take(f - g).forEach(e => {
                            m.push(e)
                        }), g += m.length)
                    }
                    let p = [];
                    return !n.isPrivate() && a && u && (g < f && i()(S, J().test) && (p.push(J()), g += 1), l && g < f && i()(S, Z().test) && p.push(Z())), {
                        users: h,
                        globals: p,
                        roles: m
                    }
                },
                queryGuildMentionResults(e) {
                    let {
                        query: t,
                        guildId: n,
                        canMentionEveryone: a = !1,
                        canMentionUsers: l = !0,
                        canMentionRoles: r = !0,
                        canMentionNonMentionableRoles: u = !1
                    } = e, o = l ? this.queryGuildUsers({
                        guildId: n,
                        query: t
                    }).map(e => ({
                        ...e,
                        status: b.default.getStatus(e.record.id)
                    })) : [], c = o.length, f = t.toLowerCase(), E = [];
                    if (c < W.MAX_AUTOCOMPLETE_RESULTS && r) {
                        let e = O.default.getGuild(n);
                        null != e && (s()(e.roles).filter(e => {
                            let {
                                mentionable: t,
                                name: l,
                                id: r
                            } = e;
                            return (t || a || u) && i()(f, l.toLowerCase()) && (0, d.isNotEveryoneRoleId)(n, r)
                        }).take(W.MAX_AUTOCOMPLETE_RESULTS - c).forEach(e => {
                            E.push(e)
                        }), c += E.length)
                    }
                    let _ = [];
                    return a && r && (c < W.MAX_AUTOCOMPLETE_RESULTS && i()(f, J().test) && (_.push(J()), c += 1), c < W.MAX_AUTOCOMPLETE_RESULTS && i()(f, Z().test) && _.push(Z())), {
                        users: o,
                        globals: _,
                        roles: E
                    }
                },
                queryChoice(e) {
                    let {
                        query: t,
                        choices: n,
                        limit: a = 10,
                        fuzzy: l = !0
                    } = e, i = t.toLocaleLowerCase(), r = RegExp(`^${x.default.escape(i)}`, "i"), u = RegExp(x.default.escape(i), "i"), o = s()(n).map((e, t) => {
                        let n = ea(e.displayName.toLocaleLowerCase(), {
                            exactQuery: r,
                            containQuery: u,
                            queryLower: i
                        }, l);
                        return n > 0 ? {
                            choice: e,
                            score: n,
                            originalIndex: t
                        } : null
                    }).filter(F.isNotNullish).sortBy(e => -1 * e.score);
                    return null !== a && (o = o.take(a)), o.value()
                },
                queryStaticRouteChannels(e) {
                    let {
                        query: t,
                        guild: n
                    } = e, a = t.toLocaleLowerCase(), l = {
                        exactQuery: RegExp(`^${x.default.escape(a)}`, "i"),
                        containQuery: RegExp(x.default.escape(a), "i"),
                        queryLower: a
                    }, i = ((0, _.canSeeGuildHome)(n.id) || (0, g.canSeeOnboardingHome)(n.id)) && !n.hasFeature(W.GuildFeatures.HUB), r = n.hasFeature(W.GuildFeatures.COMMUNITY), s = (0, h.isGuildOnboardingAvailable)(n) && n.hasFeature(W.GuildFeatures.COMMUNITY), u = [{
                        id: q.StaticChannelId.SERVER_GUIDE,
                        name: Q.default.Messages.SERVER_GUIDE
                    }, {
                        id: q.StaticChannelId.CHANNEL_BROWSER,
                        name: Q.default.Messages.CHANNEL_BROWSER_TITLE
                    }, {
                        id: q.StaticChannelId.CUSTOMIZE_COMMUNITY,
                        name: Q.default.Messages.CHANNELS_AND_ROLES
                    }], o = [];
                    for (let e of u) {
                        if ((e.id !== q.StaticChannelId.SERVER_GUIDE || !!i) && (e.id !== q.StaticChannelId.CHANNEL_BROWSER || !!r) && (e.id !== q.StaticChannelId.CUSTOMIZE_COMMUNITY || !!s)) ea(e.name.toLocaleLowerCase(), l, !1) > 0 && o.push(new C.UnknownChannelRecord({
                            id: e.id,
                            name: e.name,
                            type: W.ChannelTypes.UNKNOWN,
                            guild_id: n.id
                        }))
                    }
                    return o
                },
                queryChannelResults(e) {
                    let {
                        query: t,
                        channel: n,
                        type: a = R.GUILD_SELECTABLE_CHANNELS_KEY,
                        channelTypes: l
                    } = e;
                    return {
                        channels: this.queryChannels({
                            query: t,
                            guildId: n.getGuildId(),
                            limit: void 0,
                            fuzzy: void 0,
                            filter: e => null == l || l.includes(e.type),
                            type: a,
                            allowEmptyQueries: !0
                        }).map(e => e.record)
                    }
                },
                queryApplicationCommandChannelResults(e) {
                    let {
                        query: t,
                        channel: n,
                        channelTypes: a,
                        limit: l = W.MAX_AUTOCOMPLETE_RESULTS,
                        allowSnowflake: i
                    } = e;
                    if (null == n.guild_id) {
                        let e = [];
                        return (null == a || a.includes(n.type)) && e.push(n), {
                            channels: e
                        }
                    }
                    let r = [];
                    for (let e of en) r = r.concat(this.queryChannels({
                        query: t,
                        guildId: n.guild_id,
                        limit: l,
                        fuzzy: !0,
                        filter: e => null == a || a.includes(e.type),
                        type: e,
                        allowEmptyQueries: !0,
                        requireVocalConnectAccess: !1,
                        allowSnowflake: i
                    }));
                    return r = r.filter(e => {
                        let {
                            record: t
                        } = e;
                        return "null" !== t.id
                    }).sort(c.default), null != l && r.length > l && (r = r.slice(0, l)), {
                        channels: r.map(e => e.record)
                    }
                },
                queryChoiceResults(e) {
                    let {
                        query: t,
                        choices: n
                    } = e;
                    return {
                        choices: this.queryChoice({
                            query: t,
                            choices: n,
                            limit: null
                        }).map(e => e.choice)
                    }
                },
                queryEmojiResults(e) {
                    let {
                        query: t,
                        channel: n,
                        intention: a,
                        maxCount: l = W.MAX_AUTOCOMPLETE_RESULTS,
                        matchComparator: i
                    } = e;
                    return I.FrecencyUserSettingsActionCreators.loadIfNecessary(), {
                        emojis: E.default.searchWithoutFetchingLatest({
                            channel: n,
                            query: t,
                            count: l,
                            intention: a,
                            matchComparator: i
                        })
                    }
                },
                queryStickers(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        [n, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, j],
                        {
                            stickerMetadata: l
                        } = p.default,
                        i = P.default.getCurrentUser(),
                        r = new Set,
                        u = [];
                    for (let s of (I.FrecencyUserSettingsActionCreators.loadIfNecessary(), e)) {
                        if ("" === s) continue;
                        let e = s.toLocaleLowerCase(),
                            o = (0, V.stripDiacritics)(e),
                            d = RegExp(`^${x.default.escape(o)}`, "i"),
                            c = RegExp(`${x.default.escape(o)}`, "i");
                        l.forEach((l, s) => {
                            let o = 0,
                                f = null,
                                E = p.default.getStickerById(s);
                            if (null == E || !a(E, (0, S.getStickerSendability)(E, i, n))) return;
                            for (let n of l) {
                                let {
                                    type: a,
                                    value: l
                                } = n, i = function(e) {
                                    switch (e) {
                                        case T.StickerMetadataTypes.STICKER_NAME:
                                            return 11;
                                        case T.StickerMetadataTypes.CORRELATED_EMOJI:
                                            return 6;
                                        case T.StickerMetadataTypes.TAG:
                                            return 1;
                                        case T.StickerMetadataTypes.GUILD_NAME:
                                        case T.StickerMetadataTypes.PACK_NAME:
                                            return 8;
                                        default:
                                            return 1
                                    }
                                }(a), r = 0;
                                t ? l === e ? r = 10 * i : d.test(l) ? r = 7 * i : (a === T.StickerMetadataTypes.GUILD_NAME || a === T.StickerMetadataTypes.PACK_NAME || a === T.StickerMetadataTypes.STICKER_NAME) && c.test(l) && (r = 5 * i) : l === e && (r = 10 * i, f = l), r > o && (o = r, f = l)
                            }
                            let _ = m.default.stickerFrecencyWithoutFetchingLatest.getScore(s);
                            null != _ && (o *= _ / 100), o > 0 && null != f && !r.has(E.id) && (r.add(E.id), u.push({
                                sticker: E,
                                comparator: f,
                                score: o
                            }))
                        })
                    }
                    return 0 === (u = s()(u).sortBy(e => -1 * e.score).value()).length && (u = z), u
                },
                matchSentinel: (e, t, n) => !X.test(t) && e === n,
                hasSameRoleAsUsername(e, t) {
                    if (!t.isPomelo()) return !1;
                    let n = O.default.getGuild(e.getGuildId());
                    for (let {
                            name: e
                        }
                        of Object.values(n?.roles ?? {}))
                        if (t.username.startsWith(e.toLowerCase())) return !0;
                    return !1
                }
            }
        },
        497160: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("653041");
            var l = n("392711"),
                i = n.n(l),
                r = n("31775"),
                s = n.n(r),
                u = n("181123"),
                o = n("327271"),
                d = n("871831"),
                c = n("152551"),
                f = n("439823"),
                E = n("30175");
            let _ = new(s())({
                maxAge: 1 * c.default.Millis.MINUTE
            });

            function h(e, t, n) {
                null != a && clearTimeout(a), a = setTimeout(() => {
                    let a = [],
                        l = e => {
                            a.push(e.id)
                        };
                    if (null == e) i().forEach(o.default.getGuilds(), l);
                    else if (Array.isArray(e)) e.forEach(e => {
                        let t = o.default.getGuild(e);
                        null != t && l(t)
                    });
                    else {
                        let t = o.default.getGuild(e);
                        null != t && l(t)
                    }
                    a.length > 0 && u.default.requestMembers(a, t.toLocaleLowerCase(), n)
                }, 200)
            }

            function g(e, t) {
                let n = `${e??""}:${t}`,
                    a = _.get(n);
                if (null != a) return a;
                _.set(n, !0)
            }
            var S = {
                getGuildNameSuggestion: function(e) {
                    let t = d.default.getCurrentUser(),
                        n = f.getName(t);
                    return null == n || 0 === n.length ? "" : E.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: e?.truncateUsername ? n.slice(0, 20) : n
                    })
                },
                requestMembers(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        a = Array.isArray(e),
                        l = [],
                        i = !1;
                    a ? e.forEach(e => {
                        null == g(e, t) && l.push(e)
                    }) : null == g(e, t) && (i = !0), l.length > 0 && a ? h(l, t, n) : i && h(e, t, n)
                }
            }
        },
        969211: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("658082"),
                l = n("30175"),
                i = {
                    MENTION_EVERYONE: () => ({
                        test: "everyone",
                        text: "@everyone",
                        description: l.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
                    }),
                    MENTION_HERE: () => ({
                        test: "here",
                        text: "@here",
                        description: l.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
                    }),
                    LAUNCHABLE_APPLICATIONS: () => a.default.launchableApplicationViewItems
                }
        },
        154681: function(e, t, n) {
            "use strict";
            var a, l;
            n.r(t), n.d(t, {
                PollLayoutTypes: function() {
                    return a
                }
            }), (l = a || (a = {}))[l.UNKNOWN = 0] = "UNKNOWN", l[l.DEFAULT = 1] = "DEFAULT", l[l.IMAGE_ONLY_ANSWERS = 2] = "IMAGE_ONLY_ANSWERS"
        },
        455809: function(e, t, n) {
            "use strict";
            var a, l;
            n.r(t), n.d(t, {
                ThreadSearchTagSetting: function() {
                    return a
                }
            }), (l = a || (a = {})).MATCH_ALL = "match_all", l.MATCH_SOME = "match_some"
        }
    }
]);
//# sourceMappingURL=49326.20af5530715069fd17a1.js.map