(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31717"], {
        223468: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("872717"),
                i = n("819689"),
                l = n("49111"),
                s = n("782340"),
                r = {
                    changeNickname: (e, t, n, r) => a.default.patch({
                        url: l.Endpoints.GUILD_MEMBER_NICK(e, n),
                        body: {
                            nick: r
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        r = e.body.nick, i.default.sendBotMessage(t, null != r && "" !== r ? s.default.Messages.COMMAND_NICK_SUCCESS.plainFormat({
                            nick: r
                        }) : s.default.Messages.COMMAND_NICK_RESET)
                    }, e => {
                        403 === e.status ? i.default.sendBotMessage(t, s.default.Messages.COMMAND_NICK_FAILURE_PERMISSION.plainFormat()) : i.default.sendBotMessage(t, s.default.Messages.COMMAND_NICK_FAILURE)
                    })
                }
        },
        295426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("913144"),
                i = {
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
        819689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eA
                }
            });
            var a = n("394846"),
                i = n("872717"),
                l = n("819855"),
                s = n("913144"),
                r = n("408062"),
                u = n("979911"),
                d = n("716241"),
                o = n("802493"),
                c = n("595525"),
                _ = n("219788"),
                f = n("679653"),
                E = n("358269"),
                g = n("893694"),
                h = n("139514"),
                T = n("312016"),
                A = n("605250"),
                m = n("619443"),
                p = n("582415"),
                M = n("600798"),
                S = n("569808"),
                C = n("9294"),
                I = n("52393"),
                N = n("143291"),
                O = n("379534"),
                D = n("40566"),
                v = n("994918"),
                R = n("815297"),
                L = n("168730"),
                y = n("129953"),
                P = n("512395"),
                U = n("28007"),
                b = n("880731"),
                F = n("793277"),
                G = n("256572"),
                H = n("364685"),
                w = n("804888"),
                B = n("263024"),
                k = n("410912"),
                V = n("373469"),
                x = n("271938"),
                Y = n("42203"),
                W = n("305961"),
                K = n("337543"),
                q = n("377253"),
                j = n("957255"),
                X = n("824563"),
                z = n("660478"),
                Q = n("27618"),
                J = n("18494"),
                Z = n("162771"),
                $ = n("401848"),
                ee = n("697218"),
                et = n("599110"),
                en = n("568734"),
                ea = n("659632"),
                ei = n("701909"),
                el = n("719923"),
                es = n("299039"),
                er = n("404118"),
                eu = n("49111"),
                ed = n("724210"),
                eo = n("579033"),
                ec = n("782340");
            let e_ = new A.default("MessageActionCreators"),
                ef = !1;
            class eE {
                markComplete() {
                    this.completed = !0
                }
                constructor() {
                    this.completed = !1
                }
            }

            function eg(e) {
                let {
                    inviteKey: t,
                    channelId: n,
                    messageId: a,
                    location: i,
                    suggested: l = null,
                    overrideProperties: s = {}
                } = e, r = (0, C.parseExtraDataFromInviteKey)(t), u = Y.default.getChannel(n);
                if (null != u) {
                    let e = null;
                    u.isMultiUserDM() ? e = eu.LoggingInviteTypes.GDM_INVITE : !u.isPrivate() && (e = eu.LoggingInviteTypes.SERVER_INVITE);
                    let n = {},
                        c = K.default.getInvite(t);
                    if (null != c && c.state === eu.InviteStates.RESOLVED && null != c.channel) {
                        var o;
                        let t = c.channel;
                        n.invite_channel_id = t.id, n.invite_guild_id = null === (o = c.guild) || void 0 === o ? void 0 : o.id, n.invite_channel_type = t.type, null != c.inviter && (n.invite_inviter_id = c.inviter.id);
                        let a = V.default.getLastActiveStream();
                        if (null != a && a.channelId === t.id) {
                            e = eu.LoggingInviteTypes.STREAM, n.destination_user_id = a.ownerId;
                            let t = (0, p.getStreamerApplication)(a, X.default);
                            n.application_id = null != t ? t.id : null
                        }
                    }
                    null != l && (n.is_suggested = l.isAffinitySuggestion, n.row_num = l.rowNum, n.num_total = l.numTotal, n.num_affinity_connections = l.numAffinityConnections, n.is_filtered = l.isFiltered), n = {
                        ...n,
                        location: i,
                        invite_type: e,
                        invite_code: r.baseCode,
                        guild_id: u.getGuildId(),
                        channel_id: u.id,
                        message_id: a,
                        send_type: eu.SendTypes.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: r.guildScheduledEventId,
                        ...s
                    }, d.default.trackWithMetadata(eu.AnalyticEvents.INVITE_SENT, n)
                } else {
                    let e = {},
                        n = K.default.getInvite(t);
                    null != n && n.state === eu.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
                        ...e,
                        location: i,
                        invite_type: eu.LoggingInviteTypes.FRIEND_INVITE,
                        invite_code: r.baseCode,
                        message_id: a,
                        send_type: eu.SendTypes.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: r.guildScheduledEventId,
                        ...s
                    }, d.default.trackWithMetadata(eu.AnalyticEvents.INVITE_SENT, e))
                }
            }
            let eh = {
                    [eu.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
                        messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
                        messageGetter: () => ec.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
                    },
                    [eu.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
                        messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
                        messageGetter: () => ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                            helpUrl: ei.default.getArticleURL(eu.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                        })
                    },
                    [eu.AbortCodes.RATE_LIMIT_DM_OPEN]: {
                        messageName: "BOT_DM_RATE_LIMITED",
                        messageGetter: () => ec.default.Messages.BOT_DM_RATE_LIMITED
                    },
                    [eu.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
                        messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                        messageGetter: () => ec.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    },
                    [eu.AbortCodes.SLOWMODE_RATE_LIMITED]: {
                        messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                        messageGetter: () => ec.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    }
                },
                eT = {
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
                    sendBotMessage(e, t, n) {
                        null != n && d.default.trackWithMetadata(eu.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
                            message_author: "Clyde",
                            message_name: n
                        }), eT.receiveMessage(e, (0, R.createBotMessage)({
                            channelId: e,
                            content: t,
                            loggingName: n
                        }))
                    },
                    sendClydeError(e) {
                        let t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            i = Y.default.getChannel(e);
                        if (null != i) {
                            if (a === eu.AbortCodes.EXPLICIT_CONTENT) {
                                if (i.isDM()) t = ec.default.Messages.BOT_DM_EXPLICIT_CONTENT.format({
                                    name: (0, f.computeChannelName)(i, ee.default, Q.default)
                                }), n = "BOT_DM_EXPLICIT_CONTENT";
                                else if (i.isMultiUserDM()) t = ec.default.Messages.BOT_GDM_EXPLICIT_CONTENT.format({
                                    name: (0, f.computeChannelName)(i, ee.default, Q.default)
                                }), n = "BOT_GDM_EXPLICIT_CONTENT";
                                else {
                                    let e = W.default.getGuild(i.getGuildId());
                                    if (null == e) return;
                                    t = ec.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                        name: e.toString()
                                    }), n = "BOT_GUILD_EXPLICIT_CONTENT"
                                }
                            } else if (a === eu.AbortCodes.SLOWMODE_RATE_LIMITED) t = ec.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                                seconds: i.rateLimitPerUser
                            }), n = "SLOWMODE_RATE_LIMITED";
                            else if (a === eu.AbortCodes.INVALID_MESSAGE_SEND_USER) t = ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                helpUrl: ei.default.getArticleURL(eu.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                            }), n = "INVALID_MESSAGE_SEND_USER";
                            else if (a === eu.AbortCodes.TOO_MANY_THREADS) {
                                let e = i.isForumLikeChannel() || i.isForumPost();
                                t = e ? ec.default.Messages.BOT_DM_TOO_MANY_POSTS : ec.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS"
                            } else a === eu.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ec.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : a === eu.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ec.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
                                helpUrl: eu.MarketingURLs.HARMFUL_LINKS
                            }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : a in eh ? (n = eh[a].messageName, t = eh[a].messageGetter()) : (t = ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                helpUrl: ei.default.getArticleURL(eu.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                            }), n = "SEND_FAILED (".concat(a, ")"));
                            eT.sendBotMessage(e, t, n)
                        }
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
                        eT.trackJump(e, null, "Present");
                        let n = {
                            present: !0
                        };
                        q.default.hasPresent(e) ? s.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            jump: n,
                            channelId: e,
                            limit: t
                        }) : eT.fetchMessages({
                            channelId: e,
                            limit: t,
                            jump: n
                        })
                    },
                    trackJump(e, t, n, a) {
                        d.default.trackWithMetadata(eu.AnalyticEvents.JUMP, {
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
                            offset: i,
                            context: l,
                            extraProperties: s = null,
                            isPreload: r,
                            returnMessageId: u,
                            skipLocalFetch: d,
                            jumpType: o
                        } = e;
                        return "string" == typeof l && eT.trackJump(t, n, l, s), eT.fetchMessages({
                            channelId: t,
                            limit: eu.MAX_MESSAGES_FOR_JUMP,
                            jump: {
                                messageId: n,
                                flash: a,
                                offset: i,
                                returnMessageId: u,
                                jumpType: o
                            },
                            isPreload: r,
                            skipLocalFetch: d
                        })
                    },
                    focusMessage(e) {
                        let {
                            channelId: t,
                            messageId: n
                        } = e;
                        eT.fetchMessages({
                            channelId: t,
                            limit: eu.MAX_MESSAGES_FOR_JUMP,
                            focus: {
                                messageId: n
                            }
                        })
                    },
                    fetchMessages(e) {
                        var t;
                        let {
                            channelId: n,
                            before: a,
                            after: l,
                            limit: u,
                            jump: d,
                            focus: o,
                            isPreload: c,
                            skipLocalFetch: _,
                            truncate: f
                        } = e, g = Y.default.getChannel(n), h = m.default.isConnectedOrOverlay(), T = Date.now();
                        if (null != g && g.type === eu.ChannelTypes.GUILD_STORE) return !1;
                        if (n === ed.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
                        if (e_.log("Fetching messages for ".concat(n, " between ").concat(a, " and ").concat(l, ". jump=").concat(JSON.stringify(d))), eT._tryFetchMessagesCached({
                                channelId: n,
                                before: a,
                                after: l,
                                limit: u,
                                jump: d,
                                focus: o,
                                truncate: f
                            })) return;
                        k.default.fetchMessages.recordStart();
                        let A = null != d ? d : void 0;
                        null == A && null != o && (A = {
                            ...o
                        });
                        let p = r.default.getOrCreate(n),
                            M = p.loadStart(A);
                        r.default.commit(M), s.default.dispatch({
                            type: "LOAD_MESSAGES"
                        });
                        let S = null === (t = A) || void 0 === t ? void 0 : t.messageId,
                            C = new eE;
                        return !_ && this.fetchLocalMessages(n, a, l, u, C), i.default.get({
                            url: eu.Endpoints.MESSAGES(n),
                            query: {
                                before: a,
                                after: l,
                                limit: u,
                                around: S,
                                preload: c
                            },
                            retries: 2,
                            oldFormErrors: !0
                        }).then(e => (k.default.fetchMessages.recordEnd(), k.default.dispatchMessages.measure(() => {
                            var t;
                            let i = e.body,
                                r = null != a,
                                o = null != l,
                                c = null == a && null == l,
                                _ = null != S || i.length === u && (r || c),
                                A = null != S || o && i.length === u;
                            if (null != S) {
                                let e = Math.floor(u / 2),
                                    t = [S, ...i.map(e => {
                                        let {
                                            id: t
                                        } = e;
                                        return t
                                    })].filter((e, t, n) => n.indexOf(e) === t).sort(es.default.compare),
                                    a = t.indexOf(S);
                                if (a < e && (_ = !1), i.length - a < e && (A = !1), A && i.length > 0) {
                                    let e = z.default.lastMessageId(n);
                                    i[0].id === e && (A = !1)
                                }
                            }
                            e_.log("Fetched ".concat(i.length, " messages for ").concat(n, " isBefore:").concat(r, " isAfter:").concat(o)), C.markComplete();
                            let p = (0, P.isChannelHighlightsEnabledForGuild)(null !== (t = null == g ? void 0 : g.guild_id) && void 0 !== t ? t : "");
                            if (p && (null == d ? void 0 : d.isHighlight)) {
                                let e = (0, E.getUnreadChannelHighlights)(n, z.default.ackMessageId(n));
                                if (e.length >= 0) {
                                    let t = e[0];
                                    if (null == i.find(e => e.id === t)) return eT.jumpToMessage({
                                        channelId: n,
                                        messageId: t,
                                        flash: null == d ? void 0 : d.flash,
                                        jumpType: null == d ? void 0 : d.jumpType
                                    }), !0
                                }
                            }
                            s.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS",
                                channelId: n,
                                messages: i,
                                isBefore: r,
                                isAfter: o,
                                hasMoreBefore: _,
                                hasMoreAfter: A,
                                limit: u,
                                jump: d,
                                isStale: !h || m.default.lastTimeConnectedChanged() >= T,
                                truncate: f
                            })
                        }), !0), () => (e_.log("Failed to fetch messages for ".concat(n)), s.default.dispatch({
                            type: "LOAD_MESSAGES_FAILURE",
                            channelId: n
                        }), !1))
                    },
                    async fetchLocalMessages(e, t, n, a, i) {
                        let l = Y.default.getBasicChannel(e),
                            u = r.default.getOrCreate(e),
                            d = o.default.database();
                        if (null == d || null == l || null != t || null != n) {
                            k.default.addLocalMessages(e, -1);
                            return
                        }
                        if (u.ready && !u.cached) {
                            k.default.addLocalMessages(e, -2);
                            return
                        }
                        let f = await (0, c.tryLoadAsync)(() => _.default.load(d, e, a));
                        if (null == f) {
                            k.default.addLocalMessages(e, -3);
                            return
                        }
                        if (e_.log("fetched ".concat(f.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(i.completed, ")")), k.default.addLocalMessages(e, f.messages.length), !i.completed && f.messages.length > 0) {
                            let t = f.messages.length >= a && f.connectionId === m.default.lastTimeConnectedChanged();
                            s.default.dispatch({
                                type: "LOCAL_MESSAGES_LOADED",
                                guildId: l.guild_id,
                                channelId: e,
                                users: f.users,
                                members: f.members,
                                messages: f.messages,
                                stale: !t
                            })
                        }
                    },
                    async fetchNewLocalMessages(e, t) {
                        var n;
                        let a = Y.default.getBasicChannel(e),
                            i = o.default.database();
                        if (null == i || null == a) return;
                        let l = r.default.getOrCreate(e);
                        if (l.hasMoreAfter) return;
                        let u = await (0, c.tryLoadAsync)(() => _.default.load(i, e, t));
                        if (null == u) return;
                        l = r.default.getOrCreate(e);
                        let d = null === (n = l.last()) || void 0 === n ? void 0 : n.id,
                            f = null == d ? u.messages : u.messages.filter(e => es.default.compare(e.id, d) > 0);
                        e_.log("Fetched ".concat(u.messages.length, " messages from the cache after foregrounding. ").concat(f.length, " are new")), 0 !== f.length && s.default.dispatch({
                            type: "LOCAL_MESSAGES_LOADED",
                            guildId: a.guild_id,
                            channelId: e,
                            users: u.users,
                            members: u.members,
                            messages: f,
                            stale: !0
                        })
                    },
                    _tryFetchMessagesCached(e) {
                        var t, n, a, i;
                        let {
                            channelId: l,
                            before: r,
                            after: u,
                            limit: d,
                            jump: o,
                            focus: c,
                            truncate: _
                        } = e, f = q.default.getMessages(l);
                        if (f.cached || !f.ready) return !1;
                        if ((null === (t = o) || void 0 === t ? void 0 : t.messageId) != null || (null == c ? void 0 : c.messageId) != null) {
                            if ((null === (n = o) || void 0 === n ? void 0 : n.messageId) != null && f.has(o.messageId, !1)) return s.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: l,
                                jump: o,
                                limit: d,
                                truncate: _
                            }), !0;
                            if ((null == c ? void 0 : c.messageId) != null) {
                                if (f.has(c.messageId, !1)) return s.default.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                    channelId: l,
                                    focus: c,
                                    limit: d,
                                    truncate: _
                                }), !0;
                                o = {
                                    ...c
                                }
                            }
                            let e = (null === (a = o) || void 0 === a ? void 0 : a.messageId) != null ? es.default.extractTimestamp(null === (i = o) || void 0 === i ? void 0 : i.messageId) : 0,
                                t = f.first(),
                                r = f.last();
                            if (!f.hasMoreBefore && null != t && es.default.extractTimestamp(t.id) >= e || !f.hasMoreAfter && null != r && es.default.extractTimestamp(r.id) <= e || null != t && null != r && es.default.extractTimestamp(t.id) < e && es.default.extractTimestamp(r.id) > e) return s.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: l,
                                jump: o,
                                limit: eu.MAX_MESSAGES_FOR_JUMP
                            }), !0
                        } else if (null != r && f.hasBeforeCached(r)) return s.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: l,
                            before: r,
                            limit: d,
                            truncate: _
                        }), !0;
                        else if (null != u && f.hasAfterCached(u)) return s.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: l,
                            after: u,
                            limit: d,
                            truncate: _
                        }), !0;
                        return !1
                    },
                    async sendMessage(e, t) {
                        var n;
                        let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if (t.reaction) return Promise.resolve();
                        let l = await (0, F.default)(e);
                        if (null != l) return eT.sendMessage(l, t, a, i);
                        let s = () => eT._sendMessage(e, t, i),
                            r = N.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
                                location: "8e1e29_1"
                            }).enableBackgroundSending ? O.default.backgroundify(s, void 0) : s,
                            u = null !== (n = i.nonce) && void 0 !== n ? n : (0, R.createNonce)();
                        return (i = {
                            ...i,
                            nonce: u
                        }, D.default.recordMessageSendAttempt(e, u), a && e !== ed.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) ? new Promise((t, n) => {
                            q.default.whenReady(e, () => r().then(t, n))
                        }) : r()
                    },
                    getSendMessageOptionsForReply(e) {
                        var t;
                        if (null == e) return {};
                        let n = {
                                guild_id: null !== (t = e.channel.getGuildId()) && void 0 !== t ? t : void 0,
                                channel_id: e.channel.id,
                                message_id: e.message.id
                            },
                            a = e.shouldMention ? void 0 : {
                                parse: Object.values(eu.AllowedMentionTypes),
                                replied_user: !1
                            };
                        return {
                            messageReference: n,
                            allowedMentions: a
                        }
                    },
                    sendInvite: (e, t, n, a) => eT._sendMessage(e, {
                        content: (0, I.default)(t),
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: null != a ? a : void 0
                    }),
                    sendActivityBookmark: (e, t, n, a) => eT._sendMessage(e, {
                        content: t,
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: null != a ? a : void 0
                    }),
                    sendClydeProfileOverride: (e, t, n, a) => eT._sendMessage(e, {
                        content: t,
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: null != a ? a : void 0
                    }),
                    sendStickers(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        return eT._sendMessage(e, {
                            content: n,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                            tts: i
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
                            url: eu.Endpoints.MESSAGES_GREET(e),
                            body: {
                                sticker_ids: [t],
                                allowed_mentions: l,
                                message_reference: a
                            },
                            oldFormErrors: !0
                        }).then(n => (v.default.donateSentMessage(n.body.content, e), eT.receiveMessage(e, n.body), s.default.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: [t]
                        }), n), t => {
                            throw e_.log("Failed to send greeting"), 429 !== t.status && eT.sendClydeError(e, t.body.code), s.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: t.body.id,
                                channelId: e
                            }), t
                        })
                    },
                    _sendMessage(e, t, n) {
                        var i, l;
                        let r = (0, F.default)(e);
                        if (null != r) return r.then(e => eT._sendMessage(e, t, n));
                        let o = t.content,
                            {
                                invalidEmojis: c,
                                validNonShortcutEmojis: _,
                                tts: f = !1
                            } = t,
                            {
                                activityAction: E,
                                location: A,
                                suggestedInvite: m,
                                stickerIds: p,
                                messageReference: C,
                                allowedMentions: I
                            } = n,
                            N = null !== (i = n.flags) && void 0 !== i ? i : 0,
                            [O, y] = (0, w.default)(o);
                        if (O && (o = y, N = (0, en.addFlag)(N, eu.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === o && null == E && null == p) return Promise.reject(Error("not sending empty message"));
                        let P = null != C ? eu.MessageTypes.REPLY : eu.MessageTypes.DEFAULT,
                            G = null !== (l = n.nonce) && void 0 !== l ? l : (0, R.createNonce)();
                        if (!1 !== n.eagerDispatch) {
                            let t = (0, R.default)({
                                channelId: e,
                                content: o,
                                tts: f,
                                type: P,
                                messageReference: C,
                                allowedMentions: I,
                                flags: 0 !== N ? N : void 0,
                                nonce: G
                            });
                            (0, U.updateComboOnMessageSend)(e, t.id), null != p && (t.sticker_items = p.map(e => H.default.getStickerById(e)).filter(e => null != e)), eT.receiveMessage(e, t, !0, n)
                        }
                        if (!ef && null != c && c.length > 0) {
                            let t, n;
                            ef = !0;
                            let a = ee.default.getCurrentUser();
                            c.some(e => e.animated) && !el.default.canUseAnimatedEmojis(a) ? (t = ec.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : j.default.canWithPartialContext(eu.Permissions.USE_EXTERNAL_EMOJIS, {
                                channelId: e
                            }) ? (t = ec.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = ec.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), eT.sendBotMessage(e, t, n)
                        }
                        let B = {
                            type: u.MessageDataType.SEND,
                            message: {
                                channelId: e,
                                content: o,
                                nonce: G,
                                tts: f,
                                message_reference: C,
                                allowed_mentions: I,
                                flags: N
                            }
                        };
                        if (null != E) {
                            let e = E.type === eu.ActivityActionTypes.JOIN_REQUEST ? null == E ? void 0 : E.activity.session_id : x.default.getSessionId();
                            if (null != e) {
                                let t = {
                                        type: E.type,
                                        session_id: e
                                    },
                                    {
                                        activity: n
                                    } = E;
                                null != n.party && null != n.party.id && (t.party_id = n.party.id), B.message.application_id = n.application_id, B.message.activity = t
                            }
                        }
                        return null != p && (B.message.sticker_ids = p), b.default.isEnabled() && (B.message.has_poggermode_enabled = !0), (0, g.default)(e) && (B.message.allow_proactive_clyde_reply = !0), new Promise((t, i) => {
                            let l = Date.now(),
                                r = u.default.length;
                            u.default.enqueue(B, u => {
                                let c = Date.now() - l;
                                if (u.ok) v.default.donateSentMessage(o, e), eT.receiveMessage(e, u.body, !0, {
                                    sendAnalytics: {
                                        duration: c,
                                        queueSize: r
                                    }
                                }), D.default.recordMessageSendApiResponse(G), s.default.dispatch({
                                    type: "SLOWMODE_RESET_COOLDOWN",
                                    slowmodeType: $.SlowmodeType.SendMessage,
                                    channelId: e
                                }), s.default.dispatch({
                                    type: "EMOJI_TRACK_USAGE",
                                    emojiUsed: _
                                }), s.default.dispatch({
                                    type: "STICKER_TRACK_USAGE",
                                    stickerIds: p
                                }), ! function(e) {
                                    let {
                                        content: t,
                                        channelId: n,
                                        messageId: i,
                                        location: l,
                                        suggested: s = null,
                                        overrideProperties: r = {}
                                    } = e;
                                    (0, T.default)(t).forEach(e => {
                                        let {
                                            type: t,
                                            code: u
                                        } = e;
                                        if (t === h.CodedLinkType.INVITE) eg({
                                            inviteKey: u,
                                            channelId: n,
                                            messageId: i,
                                            location: l,
                                            suggested: s,
                                            overrideProperties: r
                                        });
                                        else if (t === h.CodedLinkType.TEMPLATE) {
                                            let e = S.default.getGuildTemplate(u);
                                            if (null == e || e.state === eo.GuildTemplateStates.RESOLVING) return;
                                            d.default.trackWithMetadata(eu.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                                                guild_template_code: u,
                                                guild_template_name: e.name,
                                                guild_template_description: e.description,
                                                guild_template_guild_id: e.sourceGuildId
                                            })
                                        } else if (t === h.CodedLinkType.BUILD_OVERRIDE);
                                        else if (t === h.CodedLinkType.EVENT);
                                        else if (t === h.CodedLinkType.CHANNEL_LINK);
                                        else if (t === h.CodedLinkType.APP_DIRECTORY_PROFILE) et.default.track(eu.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                                            application_id: u,
                                            device_platform: a.isMobile ? "mobile_web" : "desktop_web",
                                            guild_id: Z.default.getGuildId(),
                                            channel_id: J.default.getChannelId()
                                        });
                                        else if (t === h.CodedLinkType.ACTIVITY_BOOKMARK);
                                        else if (t === h.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                                        else if (t === h.CodedLinkType.GUILD_PRODUCT);
                                        else if (t === h.CodedLinkType.SERVER_SHOP);
                                        else if (t === h.CodedLinkType.CLYDE_PROFILE);
                                        else throw Error("Unknown coded link type: ".concat(t))
                                    })
                                }({
                                    content: o,
                                    channelId: e,
                                    messageId: u.body.id,
                                    location: null != A ? A : "chat_input",
                                    suggested: m
                                }), ! function(e, t, n, a, i) {
                                    (0, ea.findGiftCodes)(e).forEach(e => {
                                        let l = Y.default.getChannel(t);
                                        null != l && d.default.trackWithMetadata(eu.AnalyticEvents.GIFT_CODE_SENT, {
                                            location: a,
                                            gift_code: e,
                                            guild_id: l.getGuildId(),
                                            channel_id: l.id,
                                            channel_type: l.type,
                                            message_id: n,
                                            automatic_send: i
                                        })
                                    })
                                }(o, e, u.body.id, null != A ? A : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(u);
                                else {
                                    var f;
                                    e_.log("Failed to send message", {
                                        hasErr: u.hasErr,
                                        status: u.status,
                                        code: null === (f = u.body) || void 0 === f ? void 0 : f.code,
                                        error: u.err
                                    });
                                    let t = !1;
                                    if (u.hasErr) "ABORTED" === u.err.code && (t = !0);
                                    else if (u.status >= 400 && u.status < 500 && u.body) {
                                        if (u.body.code === eu.AbortCodes.SLOWMODE_RATE_LIMITED) {
                                            let t = u.body.retry_after;
                                            null != t && t > 0 && s.default.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: $.SlowmodeType.SendMessage,
                                                cooldownMs: 1e3 * t
                                            })
                                        } else M.AUTOMOD_ERROR_CODES.has(u.body.code) ? s.default.dispatch({
                                            type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                            messageData: B,
                                            errorResponseBody: {
                                                code: u.body.code,
                                                message: u.body.message
                                            }
                                        }) : u.body.code === eu.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? s.default.dispatch({
                                            type: "POGGERMODE_TEMPORARILY_DISABLED"
                                        }) : u.body.code === eu.AbortCodes.CLYDE_CONSENT_REQUIRED ? s.default.dispatch({
                                            type: "MESSAGE_FAILED_CLYDE_CONSENT",
                                            messageId: G,
                                            channelId: e
                                        }) : eT.sendClydeError(e, u.body.code)
                                    }
                                    t ? eT.deleteMessage(e, G, !0) : (s.default.dispatch({
                                        type: "MESSAGE_SEND_FAILED",
                                        messageId: G,
                                        channelId: e
                                    }), (0, L.logMessageSendFailure)({
                                        failureCode: u.hasErr ? void 0 : u.status,
                                        errorMessage: u.hasErr ? u.err.message : void 0
                                    })), i(u)
                                }
                            })
                        })
                    },
                    startEditMessage(e, t, n) {
                        s.default.dispatch({
                            type: "MESSAGE_START_EDIT",
                            channelId: e,
                            messageId: t,
                            content: n
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
                        await B.default.unarchiveThreadIfNecessary(e);
                        let i = function(e, t) {
                                let n = q.default.getMessage(e, t);
                                if (null == n || n.type !== eu.MessageTypes.REPLY) return;
                                let a = G.default.getMessageByReference(n.messageReference);
                                if (a.state === G.ReferencedMessageState.LOADED) {
                                    if (!n.mentions.includes(a.message.author.id)) return {
                                        parse: Object.values(eu.AllowedMentionTypes),
                                        replied_user: !1
                                    }
                                }
                            }(e, t),
                            r = {
                                channelId: e,
                                messageId: t,
                                content: a,
                                allowed_mentions: i
                            };
                        u.default.enqueue({
                            type: u.MessageDataType.EDIT,
                            message: r
                        }, n => {
                            let a = !n.hasErr && M.AUTOMOD_ERROR_CODES.has(n.body.code);
                            if (a) {
                                let e = {
                                    type: u.MessageDataType.EDIT,
                                    message: r
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
                            n.hasErr ? l.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : a ? l.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : l.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eT.endEditMessage(e, n.hasErr ? void 0 : n), eT.focusMessage({
                                channelId: e,
                                messageId: t
                            })
                        })
                    },
                    async suppressEmbeds(e, t) {
                        await B.default.unarchiveThreadIfNecessary(e), i.default.patch({
                            url: eu.Endpoints.MESSAGE(e, t),
                            body: {
                                flags: eu.MessageFlags.SUPPRESS_EMBEDS
                            },
                            oldFormErrors: !0
                        })
                    },
                    async patchMessageAttachments(e, t, n) {
                        await B.default.unarchiveThreadIfNecessary(e), i.default.patch({
                            url: eu.Endpoints.MESSAGE(e, t),
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
                                    l.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
                                })
                            };
                        n ? a() : (await B.default.unarchiveThreadIfNecessary(e), i.default.delete({
                            url: eu.Endpoints.MESSAGE(e, t),
                            oldFormErrors: !0
                        }).then(() => {
                            a()
                        }));
                        let r = q.default.getMessage(e, t);
                        (null == r ? void 0 : r.type) === eu.MessageTypes.GUILD_INVITE_REMINDER && (0, y.trackGuildInviteNotificationDismissed)()
                    },
                    dismissAutomatedMessage(e) {
                        null != e.loggingName && d.default.trackWithMetadata(eu.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
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
                        url: eu.Endpoints.MESSAGE_CROSSPOST(e, t),
                        oldFormErrors: !0
                    }).catch(e => {
                        let t;
                        t = 429 === e.status ? ec.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
                            retryAfter: Math.floor(e.body.retry_after / 60)
                        }) : ec.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, er.default.show({
                            title: ec.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                            body: t,
                            confirmText: ec.default.Messages.OKAY
                        })
                    }),
                    trackInvite: eg
                };
            var eA = eT
        },
        81594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("913144"),
                i = {
                    popFirstFile(e) {
                        a.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_POP_FILE",
                            channelId: e
                        })
                    },
                    addFiles(e) {
                        let {
                            files: t,
                            channelId: n,
                            showLargeMessageDialog: i,
                            draftType: l
                        } = e;
                        a.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_ADD_FILES",
                            channelId: n,
                            files: t,
                            showLargeMessageDialog: i,
                            draftType: l
                        })
                    },
                    addFile(e) {
                        let {
                            file: t,
                            channelId: n,
                            showLargeMessageDialog: i,
                            draftType: l
                        } = e;
                        a.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_ADD_FILES",
                            channelId: n,
                            files: [t],
                            showLargeMessageDialog: i,
                            draftType: l
                        })
                    },
                    remove(e, t, n) {
                        a.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_REMOVE_FILE",
                            channelId: e,
                            id: t,
                            draftType: n
                        })
                    },
                    removeFiles(e, t, n) {
                        a.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_REMOVE_FILES",
                            channelId: e,
                            attachmentIds: t,
                            draftType: n
                        })
                    },
                    clearAll(e, t) {
                        a.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES",
                            channelId: e,
                            draftType: t
                        })
                    },
                    update(e, t, n, i) {
                        let {
                            description: l,
                            filename: s,
                            spoiler: r,
                            thumbnail: u
                        } = i;
                        a.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
                            channelId: e,
                            id: t,
                            filename: s,
                            description: l,
                            thumbnail: u,
                            spoiler: r,
                            draftType: n
                        })
                    },
                    setUploads(e) {
                        let {
                            uploads: t,
                            channelId: n,
                            draftType: i,
                            resetState: l
                        } = e;
                        a.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_SET_UPLOADS",
                            channelId: n,
                            uploads: l ? t.map(e => e.resetState()) : t,
                            draftType: i
                        })
                    },
                    setFile(e) {
                        let {
                            file: t,
                            channelId: n,
                            id: i,
                            draftType: l
                        } = e;
                        a.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_SET_FILE",
                            channelId: n,
                            id: i,
                            file: t,
                            draftType: l
                        })
                    }
                }
        },
        943314: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("862205").createExperiment)({
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
        531869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("862205").createExperiment)({
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
        696605: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MINIMUM_RANGE: function() {
                    return r
                },
                DEFAULT_RANGES: function() {
                    return u
                },
                default: function() {
                    return o
                }
            });
            var a = n("917351"),
                i = n.n(a),
                l = n("693566"),
                s = n.n(l);
            let r = 100,
                u = [
                    [0, r - 1]
                ];

            function d(e) {
                let t = {};
                return e.forEach((e, n) => {
                    t[n] = e
                }), t
            }
            class o {
                reset() {
                    this._subscriptions = {}
                }
                get(e) {
                    return d(this._get(e))
                }
                _get(e) {
                    var t;
                    return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new s({
                        max: 5
                    })
                }
                clear(e) {
                    delete this._subscriptions[e]
                }
                subscribe(e, t, n) {
                    let a = this._get(e);
                    return !i.isEqual(a.get(t), n) && (a.set(t, n), this._subscriptions[e] = a, this._onChange(e, d(a)), !0)
                }
                constructor(e) {
                    this._subscriptions = {}, this._onChange = e
                }
            }
        },
        669633: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("917351"),
                i = n.n(a),
                l = n("862337"),
                s = n("605250");
            class r {
                reset() {
                    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe.cancel()
                }
                get(e) {
                    var t;
                    let n = null !== (t = this._subscriptions[e]) && void 0 !== t ? t : {};
                    return i.keys(n)
                }
                clear(e) {
                    delete this._subscriptions[e], delete this._unsubscriptions[e]
                }
                subscribe(e, t) {
                    var n, a;
                    let i = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
                    i[t] = (null !== (a = i[t]) && void 0 !== a ? a : 0) + 1, this._subscriptions[e] = i, 1 === i[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t)
                }
                isSubscribed(e, t) {
                    return null != this._subscriptions[e] && null != this._subscriptions[e][t]
                }
                unsubscribe(e, t) {
                    var n, a;
                    if (!this.isSubscribed(e, t)) return;
                    let i = null !== (n = this._unsubscriptions[e]) && void 0 !== n ? n : {};
                    i[t] = (null !== (a = i[t]) && void 0 !== a ? a : 0) + 1, this._unsubscriptions[e] = i, 1 === i[t] && this._unsubscribe.delay(!1)
                }
                checkForLeaks(e, t) {
                    var n, a, i, l;
                    let r = null !== (i = null === (n = this._subscriptions[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : 0,
                        u = null !== (l = null === (a = this._unsubscriptions[e]) || void 0 === a ? void 0 : a[t]) && void 0 !== l ? l : 0,
                        d = r - u;
                    d > 5 && new(0, s.default)("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(d, " subscriptions)"))
                }
                flushUnsubscriptions() {
                    !i.isEmpty(this._unsubscriptions) && (i.forEach(this._unsubscriptions, (e, t) => {
                        let n = this._subscriptions[t];
                        i.forEach(e, (e, t) => {
                            var a;
                            n[t] = (null !== (a = n[t]) && void 0 !== a ? a : 0) - e, n[t] <= 0 && delete n[t]
                        }), i.isEmpty(n) && delete this._subscriptions[t], this._onChange(t, this.get(t))
                    }), this._unsubscriptions = {})
                }
                constructor(e) {
                    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe = new l.DelayedCall(6e4, () => this.flushUnsubscriptions()), this._onChange = e
                }
            }
        },
        386451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_RANGES: function() {
                    return s.DEFAULT_RANGES
                },
                default: function() {
                    return c
                }
            });
            var a = n("917351"),
                i = n.n(a),
                l = n("862337"),
                s = n("696605"),
                r = n("669633"),
                u = n("6850"),
                d = n("49111");

            function o(e) {
                return null != e && "null" !== e && e !== d.ME && "undefined" !== e && e !== d.FAVORITES
            }
            class c {
                _enqueue(e, t) {
                    this._pending[e] = {
                        ...this._pending[e],
                        ...t
                    }, this._flush.delay()
                }
                reset() {
                    this._subscribed.clear(), this._pending = {}, this._members.reset(), this._channels.reset(), this._threadMemberLists.reset(), this._typing.clear(), this._threads.clear(), this._activities.clear()
                }
                get(e) {
                    return {
                        typing: this._typing.has(e),
                        threads: this._threads.has(e),
                        activities: this._activities.has(e),
                        members: this._members.get(e),
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
                forEach(e) {
                    this._subscribed.forEach(e)
                }
                clearWithoutFlushing(e, t) {
                    (t || !this._threads.has(e)) && this._subscribed.delete(e), delete this._pending[e], this._members.clear(e), this._channels.clear(e), this._threadMemberLists.clear(e), this._typing.delete(e), t && this._threads.delete(e), this._activities.delete(e)
                }
                flush() {
                    i.forEach(this._pending, (e, t) => {
                        this._subscribed.add(t), this._onChange(t, e)
                    }), this._pending = {}
                }
                subscribeUser(e, t) {
                    o(e) && this._members.subscribe(e, t)
                }
                unsubscribeUser(e, t) {
                    o(e) && this._members.unsubscribe(e, t)
                }
                subscribeChannel(e, t, n) {
                    return !!o(e) && this._channels.subscribe(e, t, n)
                }
                subscribeThreadMemberList(e, t, n) {
                    return !!o(e) && this._threadMemberLists.subscribe(e, t, n)
                }
                unsubscribeThreadMemberList(e, t) {
                    return !!o(e) && this._threadMemberLists.unsubscribe(e, t)
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
                    if (!!o(e)) !t.has(e) && (t.add(e), this._enqueue(e, n))
                }
                constructor(e) {
                    this._members = new r.default((e, t) => this._enqueue(e, {
                        members: t
                    })), this._channels = new s.default((e, t) => this._enqueue(e, {
                        channels: t
                    })), this._threadMemberLists = new u.default((e, t) => this._enqueue(e, {
                        thread_member_lists: t
                    })), this._typing = new Set, this._threads = new Set, this._activities = new Set, this._subscribed = new Set, this._pending = {}, this._flush = new l.DelayedCall(0, () => this.flush()), this._onChange = e
                }
            }
        },
        6850: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("693566"),
                i = n.n(a);
            class l {
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
                    var t;
                    return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new i({
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
                constructor(e) {
                    this._subscriptions = {}, this._onChange = e
                }
            }
        },
        701916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                collectThreadMetadata: function() {
                    return o
                }
            });
            var a = n("393414"),
                i = n("800843"),
                l = n("610730"),
                s = n("233069"),
                r = n("957255"),
                u = n("299039"),
                d = n("49111");

            function o(e) {
                var t, n, o, c, _;
                let f = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e || !s.THREAD_CHANNEL_TYPES.has(e.type)) return null;
                let E = f ? (0, a.getLastRouteChangeSource)() : void 0;
                return {
                    location: E,
                    thread_approximate_member_count: i.default.getMemberCount(e.id),
                    thread_approximate_message_count: l.default.getCount(e.id),
                    thread_archived: (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
                    thread_locked: null !== (c = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
                    thread_auto_archive_duration_minutes: null !== (_ = null === (o = e.threadMetadata) || void 0 === o ? void 0 : o.autoArchiveDuration) && void 0 !== _ ? _ : 0,
                    thread_approximate_creation_date: u.default.extractTimestamp(e.id),
                    can_send_message: r.default.can(d.Permissions.SEND_MESSAGES, e),
                    parent_channel_type: e.parentChannelThreadType
                }
            }
        },
        219788: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("705909"),
                i = n("605250"),
                l = n("619443"),
                s = n("42203"),
                r = n("286235"),
                u = n("802493"),
                d = n("883062"),
                o = n("794897"),
                c = n("818697"),
                _ = n("280468");
            let f = new i.default("Messages");
            class E {
                static computeUsersAndMembers(e) {
                    (0, _.requireSortedDescending)(e);
                    let t = new Map,
                        n = new Map;
                    for (let a of e) this.addIntoMap(t, a.users, e => e.id), this.addIntoMap(n, a.members, e => e.userId);
                    return [Array.from(t.values()), Array.from(n.values())]
                }
                static addIntoMap(e, t, n) {
                    for (let a of t) {
                        let t = n(a),
                            i = e.get(t);
                        (null == i || i.incomplete && !a.incomplete) && e.set(t, a)
                    }
                }
                constructor(e) {
                    if (this.connectionId = null, this.users = [], this.members = [], this.messages = [], e.length > 0) {
                        var t;
                        let n = null === (t = e[0]) || void 0 === t ? void 0 : t.connectionId,
                            [a, i] = E.computeUsersAndMembers(e);
                        e.length > 0 && e.every(e => e.connectionId === n) && (this.connectionId = n), this.users = a, this.members = i, this.messages = e.map(e => e.message)
                    }
                }
            }
            var g = new class e {
                async startupLoad(e, t, n, a) {
                    let i = u.default.messages(e),
                        l = await i.getLatest(t, n, a);
                    return new E(l)
                }
                async load(e, t, n) {
                    let a = s.default.getBasicChannel(t);
                    if (null == t || null == a || !(0, c.isReadableChannel)(a)) return new E([]);
                    {
                        let i = u.default.messages(e),
                            l = await i.getLatest(a.guild_id, t, n);
                        return new E(l)
                    }
                }
                handleMessageCreate(e, t) {
                    !e.optimistic && !e.isPushNotification && null == e.sendMessageOptions && (0, c.isReadableChannelId)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t)
                }
                handleMessageUpdate(e, t) {
                    if (null != e.message.id && null != e.message.channel_id)(0, c.isReadableChannelId)(e.message.channel_id) && (function(e) {
                        return null != e.author && null != e.content && null != e.mentions && null != e.timestamp
                    }(e.message) ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t))
                }
                handleMessagePreviewsLoaded(e, t) {
                    for (let n of e.messages)(0, c.isReadableChannelId)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t)
                }
                handleLoadMessagesSuccess(e, t) {
                    let n = s.default.getBasicChannel(e.channelId);
                    null != n && (0, c.isReadableChannelId)(e.channelId) && this.upsertMany(n.guild_id, e.channelId, e.messages, t)
                }
                handleMessageDelete(e, t) {
                    if (null == e.id) {
                        r.default.captureException(Error("MESSAGE_DELETE with a null id (guild_id: ".concat(e.guildId, ", channel_id: ").concat(e.channelId, ").")));
                        return
                    }
                    this.deleteOne(e.guildId, e.channelId, e.id, t)
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
                handleReset() {}
                insertStale(e, t, n, i) {
                    let s = u.default.messagesTransaction(i),
                        r = l.default.lastTimeConnectedChanged();
                    s.put(e, t, d.KvMessage.fromMessage(e, t, n, r), a.ConflictOptions.Skip)
                }
                upsertOne(e, t, n, i) {
                    let s = u.default.messagesTransaction(i),
                        r = l.default.lastTimeConnectedChanged();
                    s.put(e, t, d.KvMessage.fromMessage(e, t, n, r), a.ConflictOptions.Replace), s.trimChannel(e, t, o.default.saveLimit(t))
                }
                upsertMany(e, t, n, a) {
                    let i = u.default.messagesTransaction(a),
                        s = l.default.lastTimeConnectedChanged();
                    for (let a of n) i.put(e, t, d.KvMessage.fromMessage(e, t, a, s));
                    i.trimChannel(e, t, o.default.saveLimit(t))
                }
                async updateOne(e, t, n, a) {
                    if (null == n.id) {
                        f.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
                        return
                    }
                    let i = u.default.messages(a.database),
                        s = await i.get(e, t, n.id),
                        r = l.default.lastTimeConnectedChanged();
                    null != s && i.put(e, t, d.KvMessage.fromMessage(e, t, {
                        ...s.message,
                        ...n
                    }, r))
                }
                deleteOne(e, t, n, a) {
                    u.default.messagesTransaction(a).deleteMessage(e, t, n)
                }
                deleteChannel(e, t, n) {
                    u.default.messagesTransaction(n).deleteChannel(e, t)
                }
                deleteGuild(e, t) {
                    u.default.messagesTransaction(t).deleteGuild(e)
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
        883062: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                KvMessage: function() {
                    return l
                }
            });
            var a = n("26989"),
                i = n("697218");
            class l {
                static fromMessage(e, t, n, a) {
                    let [i, s] = l.deriveMemberUsers(e, n);
                    return {
                        id: n.id,
                        channelId: t,
                        message: n,
                        members: i,
                        users: s,
                        connectionId: a
                    }
                }
                static deriveMemberUsers(e, t) {
                    var n, l, s, r;
                    let u = new Set([null === (n = t.author) || void 0 === n ? void 0 : n.id, null === (l = t.interaction) || void 0 === l ? void 0 : l.user.id, ...null !== (r = null === (s = t.mentions) || void 0 === s ? void 0 : s.map(e => e.id)) && void 0 !== r ? r : []]),
                        d = [],
                        o = [];
                    for (let t of u) {
                        if (null == t) continue;
                        let n = i.default.getUser(t),
                            l = a.default.getTrueMember(null != e ? e : "", t);
                        null != n && o.push(n), null != l && d.push(l)
                    }
                    return [d, o]
                }
            }
        },
        794897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("446674"),
                i = n("913144"),
                l = n("42203"),
                s = n("525065"),
                r = n("18494"),
                u = n("8001"),
                d = n("625483"),
                o = n("185496"),
                c = n("689257"),
                _ = n("753848"),
                f = n("818697"),
                E = n("875081");
            let g = null,
                h = new d.ExtendedMemoryLru(750, 500),
                T = new o.Lru(15),
                A = !1;
            class m extends a.default.Store {
                initialize() {
                    this.waitFor(l.default), this.waitFor(r.default), this.waitFor(s.default), this.syncWith([u.default], () => !0), this.syncWith([r.default], p)
                }
                canEvictOrphans() {
                    return A
                }
                saveLimit(e) {
                    let t = l.default.getBasicChannel(e);
                    return null != t && (0, _.isPrivateChannel)(t) || null != t && h.has(e) ? 25 : 1
                }
                getSaveableChannels() {
                    let e = l.default.getChannelIds(null),
                        t = e.map(e => ({
                            guildId: null,
                            channelId: e
                        }));
                    return u.default.isLowDisk ? null != g ? [...t, g] : t : [...t, ...h.values()]
                }
                toSnapshot() {
                    return {
                        v: 1,
                        channels: [...h.allValues()].filter(e => !e.fallback),
                        penalized: [...T.keys()],
                        lastChannel: g
                    }
                }
                static mergeSnapshot(e) {
                    let t = h,
                        n = T;
                    for (let n of (h = new d.ExtendedMemoryLru(h.primaryCapacity, h.extendedCapacity), T = new o.Lru(T.capacity), g = null != g ? g : e.lastChannel, [e.channels, t.values()]))
                        for (let e of n) !e.fallback && h.put(e.channelId, e);
                    for (let t of [e.penalized, n.keys()])
                        for (let e of t) T.put(e, null)
                }
                static recordChannel(e) {
                    let t = l.default.getBasicChannel(e);
                    if (null != t && (0, f.isReadableChannel)(t)) {
                        var n;
                        let a = {
                            guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                            channelId: e,
                            channelType: t.type
                        };
                        if (g = a, h.put(e, a), (0, c.isLimitedChannel)(t)) {
                            let t = T.put(e, null);
                            null != t && h.delete(e)
                        }
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
                        let t = l.default.getBasicChannel(e);
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
                let e = r.default.getChannelId();
                null != e && m.recordChannel(e)
            }

            function M(e) {
                let t = e.id,
                    n = (0, f.isReadableChannel)(e),
                    a = r.default.getChannelId();
                n && t === a && m.recordChannel(t), !n && m.deleteChannel(t)
            }
            var S = new m(i.default, {
                CACHE_LOADED_LAZY_NO_CACHE: function(e) {
                    A = !0
                },
                CACHE_LOADED_LAZY: function(e) {
                    A = !0, null != e.saveableChannels && m.mergeSnapshot(e.saveableChannels)
                },
                CHANNEL_DELETE: function(e) {
                    m.deleteChannel(e.channel.id)
                },
                CHANNEL_UPDATES: function(e) {
                    for (let t of e.channels) M(t)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function() {
                    m.dropUnreachableChannels(), m.replaceLru((0, E.withFallbacks)(h, 1250))
                },
                GUILD_DELETE: function(e) {
                    return !e.guild.unavailable && (m.deleteGuild(e.guild.id), !0)
                },
                LOGIN_SUCCESS: function(e) {
                    h.clear(), T.clear(), A = !1
                },
                THREAD_DELETE: function(e) {
                    m.deleteChannel(e.channel.id)
                },
                THREAD_UPDATE: function(e) {
                    M(e.channel)
                }
            })
        },
        689257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isLimitedChannel: function() {
                    return l
                }
            }), n("42203");
            var a = n("525065"),
                i = n("49111");

            function l(e) {
                var t;
                let n = null !== (t = a.default.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
                return null != e && e.type !== i.ChannelTypes.DM && e.type !== i.ChannelTypes.GROUP_DM && n >= 1e4
            }
        },
        753848: function(e, t, n) {
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
        818697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isReadableChannel: function() {
                    return u
                },
                isReadableChannelId: function() {
                    return d
                }
            });
            var a = n("233069"),
                i = n("42203"),
                l = n("957255"),
                s = n("49111");
            let r = s.BasicPermissions.VIEW_CHANNEL | s.BasicPermissions.READ_MESSAGE_HISTORY;

            function u(e) {
                return null != e && (e.type === s.ChannelTypes.DM || e.type === s.ChannelTypes.GROUP_DM || (0, a.isTextChannel)(e.type) && l.default.canBasicChannel(r, e))
            }

            function d(e) {
                return null != e && u(i.default.getBasicChannel(e))
            }
        },
        875081: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                withFallbacks: function() {
                    return d
                }
            });
            var a = n("42203"),
                i = n("677099"),
                l = n("625483"),
                s = n("689257"),
                r = n("818697"),
                u = n("49111");

            function d(e, t) {
                if (e.totalLength >= t) return e;
                let n = new l.ExtendedMemoryLru(e.primaryCapacity, e.extendedCapacity),
                    d = t - e.totalLength;
                for (let t of i.default.getGuildFolders())
                    for (let i of t.guildIds)
                        for (let t of Object.values(a.default.getMutableBasicGuildChannelsForGuild(i)))
                            if (function(e) {
                                    return e.type === u.ChannelTypes.DM || e.type === u.ChannelTypes.GROUP_DM || e.type === u.ChannelTypes.GUILD_TEXT
                                }(t) && (0, r.isReadableChannel)(t) && !(0, s.isLimitedChannel)(t) && function(e, t, n) {
                                    !n.hasExtended(t.id) && n.put(t.id, {
                                        guildId: e,
                                        channelId: t.id,
                                        channelType: t.type,
                                        fallback: !0
                                    })
                                }(i, t, n), n.totalLength >= d) return o(n, e);
                return o(n, e)
            }

            function o(e, t) {
                for (let [n, a] of t.allEntries()) e.put(n, a);
                return e
            }
        },
        8001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("75247"),
                i = n("913144"),
                l = n("605250"),
                s = n("802493");
            let r = new l.default("FileSystemStore"),
                u = 6e5;
            class d extends a.default {
                handlePostConnectionOpen() {
                    return this.refresh(), !1
                }
                handleAppStateUpdate(e) {
                    return "active" !== e.state && this.refresh(), !1
                }
                async refresh() {
                    var e, t;
                    let n = await (null === (t = s.default.database()) || void 0 === t ? void 0 : null === (e = t.fsInfo()) || void 0 === e ? void 0 : e.catch(e => r.warn("couldn't get fs info", e)));
                    if (null != n) {
                        let e = n.fs.available < 268435456 || n.fs.available < 3 * n.database.used || n.fs.available < 2 * n.database.total,
                            t = n.fs.available > 805306368 && n.fs.available > 4 * n.database.used && n.fs.available > 4 * n.database.total,
                            a = !!e || !t && null;
                        null != a && this.isLowDisk !== a && (this.isLowDisk = a, this.emitChange())
                    }
                }
                constructor() {
                    super(i.default, {
                        APP_STATE_UPDATE: e => this.handleAppStateUpdate(e),
                        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
                    }), this.isLowDisk = !1, this.refresh(), this.waitFor(s.default), setInterval(() => this.refresh(), u)
                }
            }
            var o = new d
        },
        625483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ExtendedMemoryLru: function() {
                    return l
                }
            });
            var a = n("475838"),
                i = n("185496");
            class l {
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
                constructor(e, t) {
                    this.primary = new i.Lru(e), this.extended = new i.Lru(t)
                }
            }
        },
        475838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                chain: function() {
                    return i
                }
            });
            class a {
                [Symbol.iterator]() {
                    return this
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
                constructor(e) {
                    this.index = 0, this.items = e
                }
            }

            function i() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new a(t)
            }
        },
        185496: function(e, t, n) {
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
                    let e = this.items.keys(),
                        t = e.next();
                    return t.value
                }
                constructor(e) {
                    this.items = new Map, this.limit = e
                }
            }
        },
        507217: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setActiveCommand: function() {
                    return g
                },
                setPreferredCommandId: function() {
                    return h
                },
                updateOptionStates: function() {
                    return T
                },
                updateOptionValidationStates: function() {
                    return A
                },
                updateApplicationGuildCommandPermissions: function() {
                    return m
                },
                querySearchManager: function() {
                    return p
                },
                performAutocomplete: function() {
                    return M
                },
                fetchCommand: function() {
                    return S
                },
                fetchCommands: function() {
                    return C
                },
                fetchCommandsForApplication: function() {
                    return I
                },
                updateRegistry: function() {
                    return N
                },
                fetchApplicationCommandIndex: function() {
                    return O
                }
            });
            var a = n("627445"),
                i = n.n(a),
                l = n("872717"),
                s = n("913144"),
                r = n("798609"),
                u = n("271938"),
                d = n("599110"),
                o = n("299039"),
                c = n("246598"),
                _ = n("988721"),
                f = n("524768"),
                E = n("49111");

            function g(e) {
                let {
                    channelId: t,
                    command: n,
                    section: a,
                    location: l,
                    initialValues: r,
                    triggerSection: u,
                    queryLength: d
                } = e;
                null != n && i(n.inputType !== f.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder"), s.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                    channelId: t,
                    command: n,
                    section: a,
                    initialValues: r,
                    location: l,
                    triggerSection: u,
                    queryLength: d
                })
            }

            function h(e, t) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                    channelId: e,
                    commandId: t
                })
            }

            function T(e, t) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                    channelId: e,
                    changedOptionStates: t
                })
            }

            function A(e, t) {
                let n = Object.fromEntries(Object.entries(t).map(e => {
                    let [t, n] = e;
                    return [t, {
                        lastValidationResult: n
                    }]
                }));
                T(e, n)
            }

            function m(e, t, n, a) {
                return l.default.put({
                    body: {
                        permissions: a
                    },
                    url: E.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
                })
            }
            let p = (e, t, n, a, i) => {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
                    context: e,
                    query: t,
                    limit: n,
                    commandType: a,
                    applicationId: i
                })
            };

            function M(e, t, n) {
                var a;
                i(null != t.autocomplete, "Missing autocomplete context");
                let {
                    query: d,
                    name: _
                } = t.autocomplete, f = o.default.fromTimestamp(Date.now());
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
                    nonce: f,
                    channelId: t.channel.id,
                    query: d,
                    name: _
                }), null == c.default.getAutocompleteChoices(t.channel.id, _, d) && l.default.post({
                    url: E.Endpoints.INTERACTIONS,
                    body: {
                        type: r.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
                        application_id: e.applicationId,
                        guild_id: null === (a = t.guild) || void 0 === a ? void 0 : a.id,
                        channel_id: t.channel.id,
                        session_id: u.default.getSessionId(),
                        data: n,
                        nonce: f
                    },
                    timeout: 3e3
                }).catch(() => {
                    s.default.dispatch({
                        type: "INTERACTION_FAILURE",
                        nonce: f
                    })
                })
            }

            function S(e, t, n) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_FETCH",
                    channelId: t,
                    commandId: n,
                    guildId: e
                })
            }

            function C(e, t, n) {
                s.default.dispatch({
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
                s.default.dispatch({
                    type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION",
                    channelId: n,
                    guildId: t,
                    applicationId: a
                })
            }

            function N(e, t, n) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_REGISTRY_UPDATE",
                    applications: t,
                    commands: e,
                    channelId: n
                })
            }
            async function O(e) {
                let t;
                switch (e.type) {
                    case "channel":
                        t = E.Endpoints.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
                        break;
                    case "guild":
                        t = E.Endpoints.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
                        break;
                    case "user":
                        t = E.Endpoints.APPLICATION_COMMAND_INDEX_USER
                }
                let n = async (t, n) => {
                    if (t.tries >= 3) {
                        i(t, !0), s.default.dispatch({
                            type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                            target: e
                        });
                        return
                    }
                    return await new Promise(e => setTimeout(e, n)), a(t)
                }, a = a => l.default.get({
                    url: t,
                    retries: 3 - a.tries - 1,
                    signal: a.abort.signal,
                    onRequestCreated: () => a.tries++
                }).then(t => {
                    if (202 === t.status) return n(a, 3e3);
                    i(a, !1), s.default.dispatch({
                        type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
                        target: e,
                        index: t.body
                    })
                }, t => {
                    if (a.abort.signal.aborted) {
                        i(a, !0);
                        return
                    }
                    if (429 === t.status) return n(a, 1e3 * t.body.retry_after);
                    i(a, !0), s.default.dispatch({
                        type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                        target: e
                    })
                }), i = (e, t) => {
                    let n = performance.now() - e.start;
                    d.default.track(E.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                        duration_ms: n,
                        error: t,
                        aborted: e.abort.signal.aborted,
                        include_applications: !0,
                        retries: Math.max(e.tries - 1, 0),
                        kind: null,
                        command_type: null
                    })
                }, r = performance.now();
                if (await new Promise(e => s.default.wait(() => e(null))), !_.default.isRequesting(e)) {
                    let t = {
                        abort: new AbortController,
                        start: r,
                        tries: 0
                    };
                    s.default.dispatch({
                        type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
                        target: e,
                        abort: t.abort
                    }), await a(t)
                }
            }
        },
        246598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("446674"),
                i = n("913144"),
                l = n("383018");
            let s = new Map,
                r = new Map;

            function u(e) {
                if (!r.has(e)) {
                    var t;
                    r.set(e, {
                        commandId: null === (t = l.default.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
                        optionName: l.default.getActiveOptionName(e),
                        optionNameToAutocompleteQueries: new Map,
                        optionNameToLastResults: new Map,
                        optionNameToNonce: new Map,
                        optionNameToLastQuery: new Map,
                        lastErrored: !1,
                        lastResponseNonce: void 0
                    })
                }
                return r.get(e)
            }

            function d() {
                return s.clear(), r.clear(), !0
            }

            function o(e) {
                let {
                    channelId: t,
                    command: n
                } = e;
                c(t, null == n ? void 0 : n.id)
            }

            function c(e, t) {
                let n = l.default.getActiveOptionName(e),
                    a = r.get(e);
                return null != a && (t !== a.commandId || n !== a.optionName) && (null != t && t !== a.commandId && (a.optionNameToLastResults.clear(), a.optionNameToNonce.clear(), a.optionNameToLastQuery.clear(), a.optionNameToAutocompleteQueries.clear()), a.lastErrored = !1, a.commandId = t, a.optionName = n, !0)
            }
            class _ extends a.default.Store {
                initialize() {
                    this.waitFor(l.default)
                }
                getLastErrored(e) {
                    return u(e).lastErrored
                }
                getAutocompleteChoices(e, t, n) {
                    var a;
                    let i = u(e);
                    return null === (a = i.optionNameToAutocompleteQueries.get(t)) || void 0 === a ? void 0 : a.get(n)
                }
                getAutocompleteLastChoices(e, t) {
                    let n = u(e);
                    return n.optionNameToLastResults.get(t)
                }
                getLastResponseNonce(e) {
                    return u(e).lastResponseNonce
                }
            }
            _.displayName = "ApplicationCommandAutocompleteStore";
            var f = new _(i.default, {
                CONNECTION_OPEN: d,
                LOGOUT: d,
                CHANNEL_SELECT: d,
                APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
                    var t;
                    let {
                        nonce: n,
                        channelId: a,
                        query: i,
                        name: l
                    } = e, r = u(a);
                    if (r.optionNameToLastQuery.get(l) === i) return !1;
                    r.optionNameToLastQuery.set(l, i);
                    let d = null === (t = r.optionNameToAutocompleteQueries.get(l)) || void 0 === t ? void 0 : t.get(i);
                    if (null != d) return r.lastErrored = !1, r.optionNameToLastResults.set(l, d), !0;
                    let o = r.optionNameToNonce.get(l);
                    if (null != o && s.delete(o), s.set(n, {
                            channelId: a,
                            query: i,
                            name: l
                        }), r.optionNameToNonce.set(l, n), r.lastErrored) return r.lastErrored = !1, !0
                },
                APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
                    var t, n;
                    let {
                        choices: a,
                        nonce: i
                    } = e, l = s.get(i);
                    if (null == l) return !1;
                    s.delete(i);
                    let r = null !== (n = null == a ? void 0 : a.map(e => {
                            var t;
                            return {
                                ...e,
                                displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                            }
                        })) && void 0 !== n ? n : [],
                        d = u(l.channelId);
                    return null == d.optionNameToAutocompleteQueries.get(l.name) && d.optionNameToAutocompleteQueries.set(l.name, new Map), null === (t = d.optionNameToAutocompleteQueries.get(l.name)) || void 0 === t || t.set(l.query, r), d.optionNameToLastQuery.get(l.name) === l.query && (d.lastErrored = !1, d.optionNameToLastResults.set(l.name, r)), d.lastResponseNonce = i, !0
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    if (null == t) return !1;
                    let n = s.get(t);
                    if (null == n) return !1;
                    s.delete(t);
                    let a = u(n.channelId);
                    return a.lastErrored = !0, !0
                },
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: o,
                APP_LAUNCHER_SET_ACTIVE_COMMAND: o,
                APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
                    let {
                        channelId: t,
                        command: n
                    } = e;
                    c(t, null == n ? void 0 : n.id)
                }
            })
        },
        589777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BUILT_IN_SECTIONS: function() {
                    return L
                },
                getBuiltInCommands: function() {
                    return U
                }
            });
            var a = n("627445"),
                i = n.n(a),
                l = n("866227"),
                s = n.n(l),
                r = n("298386"),
                u = n("223468"),
                d = n("450911"),
                o = n("851387"),
                c = n("819689"),
                _ = n("798609"),
                f = n("700179"),
                E = n("884351"),
                g = n("252862"),
                h = n("730498"),
                T = n("300322"),
                A = n("845579"),
                m = n("42203"),
                p = n("957255"),
                M = n("697218"),
                S = n("158998"),
                C = n("524768"),
                I = n("317041"),
                N = n("49111"),
                O = n("903639"),
                D = n("782340");
            let v = n("150692").default,
                R = (e, t) => {
                    var n;
                    return null === (n = e.find(e => e.name === t)) || void 0 === n ? void 0 : n.value
                },
                L = {
                    [I.BuiltInSectionId.BUILT_IN]: {
                        id: I.BuiltInSectionId.BUILT_IN,
                        type: C.ApplicationCommandSectionType.BUILT_IN,
                        get name() {
                            return D.default.Messages.COMMAND_SECTION_BUILT_IN_NAME
                        }
                    },
                    [I.BuiltInSectionId.FRECENCY]: {
                        id: I.BuiltInSectionId.FRECENCY,
                        type: C.ApplicationCommandSectionType.BUILT_IN,
                        get name() {
                            return D.default.Messages.FREQUENTLY_USED
                        }
                    }
                },
                y = [...v, {
                    id: "-1",
                    name: "shrug",
                    displayName: "shrug",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_SHRUG_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_SHRUG_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "".concat(n, " \xaf\\_(ツ)_/\xaf").trim()
                        }
                    }
                }, {
                    id: "-2",
                    name: "tableflip",
                    displayName: "tableflip",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "".concat(n, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
                        }
                    }
                }, {
                    id: "-3",
                    name: "unflip",
                    displayName: "unflip",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "".concat(n, " ┬─┬ノ( \xba _ \xbaノ)").trim()
                        }
                    }
                }, {
                    id: "-4",
                    name: "tts",
                    displayName: "tts",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_TTS_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_TTS_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    predicate: e => {
                        let {
                            channel: t
                        } = e;
                        return !t.isPrivate() && A.EnableTTSCommand.getSetting() && p.default.can(N.Permissions.SEND_TTS_MESSAGES, t)
                    },
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: n,
                            tts: !0
                        }
                    }
                }, {
                    id: "-5",
                    name: "me",
                    displayName: "me",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_ME_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_ME_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "_".concat(n, "_")
                        }
                    }
                }, {
                    id: "-6",
                    name: "spoiler",
                    displayName: "spoiler",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_SPOILER_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_SPOILER_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: (0, N.MARKDOWN_SPOILER_WRAPPER)(n).trim()
                        }
                    }
                }, {
                    id: "-7",
                    name: "nick",
                    displayName: "nick",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_NICK_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_NICK_DESCRIPTION
                    },
                    options: [{
                        name: "new_nick",
                        displayName: "new_nick",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                        }
                    }],
                    predicate: e => {
                        let {
                            channel: t
                        } = e;
                        return !t.isPrivate() && (p.default.can(N.Permissions.CHANGE_NICKNAME, t) || p.default.can(N.Permissions.MANAGE_NICKNAMES, t))
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: a,
                            channel: i
                        } = t;
                        if (null == a) return;
                        let l = null !== (n = R(e, "new_nick")) && void 0 !== n ? n : "";
                        u.default.changeNickname(a.id, i.id, N.ME, l || "")
                    }
                }, {
                    id: "-10",
                    name: "thread",
                    displayName: "thread",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_THREAD_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_THREAD_DESCRIPTION
                    },
                    options: [{
                        name: "name",
                        displayName: "name",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "message",
                        displayName: "message",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    predicate: e => {
                        let {
                            channel: t
                        } = e;
                        return (0, T.computeCanStartPublicThread)(t)
                    },
                    execute: async (e, t) => {
                        var n, a;
                        let {
                            channel: i
                        } = t, l = null !== (n = R(e, "name")) && void 0 !== n ? n : "", s = null !== (a = R(e, "message")) && void 0 !== a ? a : "", u = await (0, h.createThread)(i, l, r.ChannelTypes.PUBLIC_THREAD, (0, g.getAutoArchiveDuration)(i, null), "Slash Command");
                        c.default.sendMessage(u.id, E.default.parse(u, s))
                    }
                }, {
                    id: "-11",
                    name: "kick",
                    displayName: "kick",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_KICK_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_KICK_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: _.ApplicationCommandOptionType.USER,
                        get description() {
                            return D.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: e => {
                        let {
                            guild: t
                        } = e;
                        return p.default.can(N.Permissions.KICK_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: a,
                            channel: i
                        } = t;
                        if (null == a) return;
                        let l = null !== (n = R(e, "user")) && void 0 !== n ? n : "";
                        if (!p.default.canManageUser(N.Permissions.KICK_MEMBERS, l, a)) {
                            c.default.sendBotMessage(i.id, D.default.Messages.COMMAND_KICK_UNABLE);
                            return
                        }
                        let s = async () => {
                            var t;
                            let n = M.default.getUser(l);
                            if (null == n) throw Error();
                            await o.default.kickUser(a.id, l, null !== (t = R(e, "reason")) && void 0 !== t ? t : ""), c.default.sendBotMessage(i.id, D.default.Messages.COMMAND_KICK_CONFIRMATION.format({
                                user: S.default.getUserTag(n)
                            }))
                        };
                        s().catch(() => {
                            c.default.sendBotMessage(i.id, D.default.Messages.COMMAND_KICK_ERROR)
                        })
                    }
                }, {
                    id: "-12",
                    name: "ban",
                    displayName: "ban",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_BAN_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_BAN_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: _.ApplicationCommandOptionType.USER,
                        get description() {
                            return D.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "delete_messages",
                        displayName: "delete_messages",
                        type: _.ApplicationCommandOptionType.INTEGER,
                        get description() {
                            return D.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                        },
                        required: !0,
                        get choices() {
                            return [{
                                name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                value: 0
                            }, {
                                name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                value: N.Durations.HOUR
                            }, {
                                name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                value: 6 * N.Durations.HOUR
                            }, {
                                name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                value: 12 * N.Durations.HOUR
                            }, {
                                name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                value: N.Durations.DAY
                            }, {
                                name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                value: 3 * N.Durations.DAY
                            }, {
                                name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                value: 7 * N.Durations.DAY
                            }]
                        }
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: e => {
                        let {
                            guild: t
                        } = e;
                        return p.default.can(N.Permissions.BAN_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: a,
                            channel: i
                        } = t;
                        if (null == a) return;
                        let l = null !== (n = R(e, "user")) && void 0 !== n ? n : "";
                        if (!p.default.canManageUser(N.Permissions.BAN_MEMBERS, l, a)) {
                            c.default.sendBotMessage(i.id, D.default.Messages.COMMAND_BAN_UNABLE);
                            return
                        }
                        let s = async () => {
                            var t, n;
                            if ("" === l) throw Error();
                            let s = null !== (t = R(e, "delete_messages")) && void 0 !== t ? t : 0,
                                r = null !== (n = R(e, "reason")) && void 0 !== n ? n : "",
                                u = M.default.getUser(l);
                            await o.default.banUser(a.id, l, s, r), c.default.sendBotMessage(i.id, D.default.Messages.COMMAND_BAN_CONFIRMATION.format({
                                user: null != u ? S.default.getUserTag(u) : l
                            }))
                        };
                        s().catch(() => {
                            c.default.sendBotMessage(i.id, D.default.Messages.COMMAND_BAN_ERROR)
                        })
                    }
                }, {
                    id: "-13",
                    name: "timeout",
                    displayName: "timeout",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: _.ApplicationCommandOptionType.USER,
                        get description() {
                            return D.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "duration",
                        displayName: "duration",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                        },
                        required: !0,
                        get choices() {
                            return (0, O.getDisableCommunicationDurationOptions)().map(e => ({
                                ...e,
                                name: e.label,
                                displayName: e.label
                            }))
                        }
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: e => {
                        let {
                            guild: t
                        } = e;
                        return p.default.can(N.Permissions.MODERATE_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        let {
                            guild: n,
                            channel: a
                        } = t;
                        if (null == n) return;
                        let i = R(e, "user");
                        if (!(0, f.canToggleCommunicationDisableOnUser)(n.id, i)) {
                            c.default.sendBotMessage(a.id, D.default.Messages.COMMAND_TIMEOUT_UNABLE);
                            return
                        }
                        let l = async () => {
                            var t, l;
                            let r = null !== (t = R(e, "duration")) && void 0 !== t ? t : "",
                                u = null !== (l = R(e, "reason")) && void 0 !== l ? l : "",
                                d = M.default.getUser(i);
                            if (null == d) throw Error();
                            await o.default.setCommunicationDisabledUntil({
                                guildId: n.id,
                                userId: i,
                                communicationDisabledUntilTimestamp: s().add(r, "s").toISOString(),
                                duration: r,
                                reason: u
                            }), c.default.sendBotMessage(a.id, D.default.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                                user: S.default.getUserTag(d),
                                duration: r
                            }))
                        };
                        l().catch(() => {
                            c.default.sendBotMessage(a.id, D.default.Messages.COMMAND_TIMEOUT_ERROR)
                        })
                    }
                }, {
                    id: "-14",
                    name: "msg",
                    displayName: "msg",
                    type: _.ApplicationCommandType.CHAT,
                    inputType: C.ApplicationCommandInputType.BUILT_IN,
                    applicationId: I.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return D.default.Messages.COMMAND_MSG_DESCRIPTION
                    },
                    get displayDescription() {
                        return D.default.Messages.COMMAND_MSG_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: _.ApplicationCommandOptionType.USER,
                        get description() {
                            return D.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "message",
                        displayName: "message",
                        type: _.ApplicationCommandOptionType.STRING,
                        get description() {
                            return D.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return D.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: (e, t) => {
                        var n;
                        let {
                            channel: a
                        } = t, l = R(e, "user"), s = null !== (n = R(e, "message")) && void 0 !== n ? n : "", r = async () => {
                            await d.default.openPrivateChannel(l).then(e => {
                                let t = m.default.getChannel(e);
                                i(null != t, "Newly created PrivateChannel is null"), c.default.sendMessage(t.id, E.default.parse(t, s))
                            })
                        };
                        r().catch(() => {
                            c.default.sendBotMessage(a.id, D.default.Messages.COMMAND_MSG_ERROR)
                        })
                    }
                }],
                P = y.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.name)),
                U = (e, t, n) => {
                    let a = t ? y : P;
                    return a = a.filter(t => t.type === e && (!n || t.inputType === C.ApplicationCommandInputType.BUILT_IN_TEXT || t.inputType === C.ApplicationCommandInputType.BUILT_IN_INTEGRATION))
                }
        },
        369010: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTopCommands: function() {
                    return r
                },
                useTopRealCommands: function() {
                    return u
                }
            });
            var a = n("884691"),
                i = n("446674"),
                l = n("872173"),
                s = n("342564");

            function r(e) {
                a.useEffect(() => {
                    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let t = (0, i.useStateFromStores)([s.default], () => s.default.getTopCommandsWithoutLoadingLatest()),
                    n = a.useMemo(() => (0, s.getFilteredTopCommands)(t, e), [t, e]);
                return n
            }

            function u(e) {
                a.useEffect(() => {
                    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let t = (0, i.useStateFromStores)([s.default], () => s.default.getTopCommandsWithoutLoadingLatest()),
                    n = a.useMemo(() => {
                        let n = (0, s.getFilteredTopCommands)(t, e);
                        return (0, s.getTopRealCommands)(n)
                    }, [t, e]);
                return n
            }
        },
        342564: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getTopRealCommands: function() {
                    return E
                },
                getFilteredTopCommands: function() {
                    return g
                },
                default: function() {
                    return m
                }
            });
            var a = n("917351"),
                i = n.n(a),
                l = n("446674"),
                s = n("913144"),
                r = n("798609"),
                u = n("80507"),
                d = n("374363"),
                o = n("317041"),
                c = n("397336");
            let _ = {
                    pendingUsages: []
                },
                f = new u.default({
                    computeBonus: () => 1,
                    computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0,
                    lookupKey: e => e,
                    afterCompute: () => {},
                    numFrequentlyItems: 500
                });

            function E(e) {
                let t = new Set;
                for (let n of e) {
                    let e = n.split(o.SUB_COMMAND_KEY_SEPARATOR)[0];
                    if (Number(e) > 0 && t.add(e), t.size >= o.DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT) break
                }
                return [...t]
            }

            function g(e, t) {
                return e.filter(e => {
                    if (e.includes(":")) return null != t.guild && t.guild.id === e.split(":")[1];
                    return !0
                }).map(e => e.split(":")[0])
            }

            function h(e, t) {
                return 0 > Number(t.id) ? t.id : null != e.guild && null != t.guildId ? "".concat(t.id, ":").concat(e.guild.id) : t.id
            }

            function T() {
                var e, t;
                let n = d.default.frecencyWithoutFetchingLatest,
                    a = null !== (t = null === (e = n.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
                f.overwriteHistory(i.mapValues(a, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), _.pendingUsages)
            }
            class A extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (_ = e), this.syncWith([d.default], T)
                }
                getState() {
                    return _
                }
                hasPendingUsage() {
                    return _.pendingUsages.length > 0
                }
                getCommandFrecencyWithoutLoadingLatest() {
                    return f
                }
                getScoreWithoutLoadingLatest(e, t) {
                    var n;
                    return null !== (n = f.getScore(h(e, t))) && void 0 !== n ? n : 0
                }
                getTopCommandsWithoutLoadingLatest() {
                    return f.frequently
                }
            }
            A.displayName = "ApplicationCommandFrecencyStore", A.persistKey = "ApplicationCommandFrecencyV2";
            var m = new A(s.default, {
                APPLICATION_COMMAND_USED: function(e) {
                    let {
                        command: t,
                        context: n
                    } = e;
                    if (t.type !== r.ApplicationCommandType.CHAT) return !1;
                    let a = h(n, t);
                    _.pendingUsages.push({
                        key: a,
                        timestamp: Date.now()
                    }), f.track(a), f.compute()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    _.pendingUsages = []
                }
            })
        },
        988721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Q
                },
                useContextIndexState: function() {
                    return J
                },
                useUserIndexState: function() {
                    return Z
                },
                useDiscoveryState: function() {
                    return $
                },
                useQueryState: function() {
                    return ee
                }
            });
            var a, i, l = n("884691"),
                s = n("448105"),
                r = n.n(s),
                u = n("627445"),
                d = n.n(u),
                o = n("917351"),
                c = n.n(o),
                _ = n("316693"),
                f = n("446674"),
                E = n("913144"),
                g = n("798609"),
                h = n("892692"),
                T = n("38654"),
                A = n("915639"),
                m = n("845579"),
                p = n("872173"),
                M = n("42203"),
                S = n("26989"),
                C = n("305961"),
                I = n("957255"),
                N = n("697218"),
                O = n("599110"),
                D = n("507217"),
                v = n("589777"),
                R = n("369010"),
                L = n("342564"),
                y = n("14090"),
                P = n("972620"),
                U = n("524768"),
                b = n("389153"),
                F = n("317041"),
                G = n("49111");
            let H = Symbol("currentUser"),
                w = Symbol("stale"),
                B = Symbol("current"),
                k = Object.freeze({
                    descriptors: [],
                    commands: [],
                    sectionedCommands: [],
                    loading: !0
                }),
                V = Object.freeze({
                    serverVersion: B,
                    fetchState: {
                        fetching: !1
                    },
                    result: {
                        sections: [],
                        version: B,
                        commandsByType: {}
                    }
                }),
                x = Object.freeze({
                    serverVersion: w,
                    fetchState: {
                        fetching: !1
                    }
                }),
                Y = {
                    sensitivity: "accent",
                    numeric: !0
                };

            function W(e) {
                switch (e.type) {
                    case "guild":
                        return e.guildId;
                    case "channel":
                        return e.channelId;
                    case "user":
                        return H
                }
            }

            function K(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = W(e),
                    i = z.indices[a];
                return null != i ? ("fetchState" in t && i.fetchState.fetching && i.fetchState.abort.abort(), z.indices[a] = {
                    ...i,
                    ...t
                }) : n && (z.indices[a] = {
                    serverVersion: w,
                    fetchState: {
                        fetching: !1
                    },
                    ...t
                }), i
            }

            function q(e) {
                let t = W(e),
                    n = z.indices[t];
                (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete z.indices[t]
            }

            function j() {
                z.indices = {}
            }
            class X extends f.default.Store {
                initialize() {
                    this.waitFor(A.default), this.syncWith([A.default], () => {
                        ! function() {
                            let e = A.default.locale;
                            e !== z.oldLocale && (j(), z.collator = new Intl.Collator(e, {
                                sensitivity: "accent",
                                numeric: !0
                            }), z.oldLocale = e)
                        }()
                    })
                }
                getContextState(e) {
                    var t, n;
                    return null != e && en(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : x : V
                }
                getUserState() {
                    var e;
                    return (0, b.isInUserAppExperiment)({
                        location: "getUserState"
                    }, {
                        autoTrackExposure: !1
                    }) ? null !== (e = this.indices[H]) && void 0 !== e ? e : x : V
                }
                isRequesting(e) {
                    var t;
                    let n = null !== (t = this.indices[W(e)]) && void 0 !== t ? t : x;
                    return !0 === n.fetchState.fetching
                }
                query(e, t, n) {
                    var a, i;
                    let l = N.default.getCurrentUser();
                    if (null == l) return k;
                    let s = this.getContextState(e),
                        r = this.getUserState(),
                        u = C.default.getGuild(e.guild_id),
                        d = I.default.can(G.Permissions.USE_APPLICATION_COMMANDS, e),
                        o = m.ViewNsfwCommands.getSetting(),
                        c = null != e.guild_id && null !== (i = T.default.getViewingRoles(e.guild_id)) && void 0 !== i ? i : void 0,
                        _ = null != e.guild_id ? null === (a = S.default.getMember(e.guild_id, l.id)) || void 0 === a ? void 0 : a.roles : void 0;
                    O.default.track(G.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(this.indices).length
                    });
                    let f = !1,
                        E = !1 !== t.applicationCommands && (e.isPrivate() || d);
                    n.allowFetch && E && (null != e && ea(s) && en(e) && (null != e.guild_id ? D.fetchApplicationCommandIndex({
                        type: "guild",
                        guildId: e.guild_id
                    }) : D.fetchApplicationCommandIndex({
                        type: "channel",
                        channelId: e.id
                    }), f = !0), (0, b.isInUserAppExperiment)({
                        location: "query"
                    }) && ea(r) && (D.fetchApplicationCommandIndex({
                        type: "user"
                    }), f = !0));
                    let g = y.default.getCurrentConfig({
                            location: "query"
                        }).newScoreLogic,
                        h = e.isPrivate(),
                        A = et({
                            context: {
                                channel: e,
                                guild: u
                            },
                            currentUserId: l.id,
                            currentUserRoleIds: _,
                            impersonationRoles: c,
                            commandType: t.commandType,
                            text: t.text,
                            allowApplicationCommands: E,
                            builtIns: t.builtIns,
                            allowNsfw: (null == l ? void 0 : l.nsfwAllowed) === !0 && (!h && o || h && e.nsfw),
                            sortByScore: n.sortByScore,
                            useNewScoreLogic: g,
                            contextState: s,
                            userState: r
                        });
                    return A.loading = A.loading || f, A
                }
                constructor(...e) {
                    super(...e), this.indices = {}, this.oldLocale = A.default.locale, this.collator = new Intl.Collator(A.default.locale, Y)
                }
            }
            X.displayName = "ApplicationCommandIndexStore";
            let z = new X(E.default, {
                LOGOUT: j,
                CONNECTION_OPEN: j,
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    let {
                        target: t,
                        abort: n
                    } = e;
                    K(t, {
                        fetchState: {
                            fetching: !0,
                            abort: n
                        }
                    }, !0)
                },
                APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
                    var t, n, a, i;
                    let {
                        target: l,
                        index: s
                    } = e, r = null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == r) return !1;
                    let u = [],
                        d = {};
                    for (let e of s.applications) {
                        let t = {
                            descriptor: {
                                ...(0, b.getApplicationCommandSection)(function(e) {
                                    return {
                                        description: e.description,
                                        icon: e.icon,
                                        id: e.id,
                                        name: e.name,
                                        bot: e.bot
                                    }
                                }(e)),
                                permissions: null != e.permissions ? (0, h.keyPermissions)(es(e.permissions, r)) : void 0
                            },
                            commands: []
                        };
                        u.push(t), d[e.id] = t
                    }
                    let o = {};
                    for (let e of (0, b.buildApplicationCommands)(s.application_commands.map(e => (function(e, t) {
                            var n, a, i, l, s;
                            let r = {
                                ...e,
                                description: null !== (i = null !== (a = e.description_default) && void 0 !== a ? a : e.description) && void 0 !== i ? i : "",
                                dm_permission: void 0,
                                name: null !== (l = e.name_default) && void 0 !== l ? l : e.name,
                                options: null !== (s = null === (n = e.options) || void 0 === n ? void 0 : n.map(ei)) && void 0 !== s ? s : [],
                                permissions: null != e.permissions ? es(e.permissions, t) : void 0
                            };
                            return e.description !== e.description_default && (r.description_localized = e.description), e.name !== e.name_default && (r.name_localized = e.name), r
                        })(e, r)), !0)) null === (n = d[e.applicationId]) || void 0 === n || n.commands.push(e), o[e.type] = (null !== (a = o[e.type]) && void 0 !== a ? a : 0) + 1;
                    let c = null !== (i = s.version) && void 0 !== i ? i : B;
                    K(l, {
                        serverVersion: c,
                        result: {
                            sections: u,
                            version: c,
                            commandsByType: o
                        },
                        fetchState: {
                            fetching: !1
                        }
                    })
                },
                APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
                    let {
                        target: t
                    } = e;
                    K(t, {
                        fetchState: {
                            fetching: !1,
                            retryAfter: Date.now() + 5e3
                        }
                    })
                },
                APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function(e) {
                    let t, {
                        channelId: n,
                        guildId: a
                    } = e;
                    K(t = null != a ? {
                        type: "guild",
                        guildId: a
                    } : {
                        type: "channel",
                        channelId: n
                    }, {
                        serverVersion: w
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    q({
                        type: "channel",
                        channelId: t.id
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    q({
                        type: "guild",
                        guildId: t.id
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    var t, n, a, i, l, s;
                    let {
                        guildId: r,
                        version: u
                    } = e, d = K({
                        type: "guild",
                        guildId: r
                    }, {
                        serverVersion: null != u ? u : w
                    });
                    for (let e of null !== (n = null == d ? void 0 : null === (t = d.result) || void 0 === t ? void 0 : t.sections) && void 0 !== n ? n : [])
                        if ((null === (i = e.descriptor.application) || void 0 === i ? void 0 : null === (a = i.bot) || void 0 === a ? void 0 : a.id) != null) {
                            let t = M.default.getDMFromUserId(null === (s = e.descriptor.application) || void 0 === s ? void 0 : null === (l = s.bot) || void 0 === l ? void 0 : l.id);
                            null != t && K({
                                type: "channel",
                                channelId: t
                            }, {
                                serverVersion: w
                            })
                        }
                }
            });
            var Q = z;

            function J(e, t) {
                let [n, a] = l.useState(!0), i = (0, f.useStateFromStoresObject)([z], () => z.getContextState(e));
                return l.useEffect(() => {
                    O.default.track(G.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == i.result,
                        size: Object.keys(z.indices).length
                    })
                }, [i]), l.useEffect(() => {
                    n && (null != e && ea(i) && t && en(e) && (null != e.guild_id ? D.fetchApplicationCommandIndex({
                        type: "guild",
                        guildId: e.guild_id
                    }) : D.fetchApplicationCommandIndex({
                        type: "channel",
                        channelId: e.id
                    })), a(!1))
                }, [i, e, t, n]), i
            }

            function Z(e) {
                let [t, n] = l.useState(!0), a = (0, f.useStateFromStoresObject)([z], () => z.getUserState()), i = (0, b.useIsInUserAppExperiment)({
                    location: "useUserIndexState"
                });
                return l.useEffect(() => {
                    t && (ea(a) && e && i && D.fetchApplicationCommandIndex({
                        type: "user"
                    }), n(!1))
                }, [a, e, i, t]), a
            }

            function $(e, t, n, a) {
                let {
                    descriptors: i,
                    commands: s,
                    sectionedCommands: r,
                    loading: u
                } = ee(e, t, n, a), d = (0, R.useTopCommands)({
                    channel: e,
                    guild: t
                });
                return l.useMemo(() => {
                    if (!a.includeFrecency || 0 === d.length) return {
                        descriptors: i,
                        commands: s,
                        sectionedCommands: r,
                        loading: u
                    };
                    let n = {
                            channel: e,
                            guild: t
                        },
                        l = s.filter(e => d.includes(e.id)).sort((e, t) => {
                            let a = L.default.getScoreWithoutLoadingLatest(n, e),
                                i = L.default.getScoreWithoutLoadingLatest(n, t);
                            return i - a
                        }).splice(0, F.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
                    return 0 === l.length ? {
                        descriptors: i,
                        commands: s,
                        sectionedCommands: r,
                        loading: u
                    } : {
                        descriptors: [v.BUILT_IN_SECTIONS[F.BuiltInSectionId.FRECENCY], ...i],
                        commands: l.concat(s),
                        sectionedCommands: [{
                            section: v.BUILT_IN_SECTIONS[F.BuiltInSectionId.FRECENCY],
                            data: l
                        }, ...r],
                        loading: u
                    }
                }, [u, a.includeFrecency, d, e, t, s, i, r])
            }

            function ee(e, t, n, a) {
                var i;
                let {
                    newScoreLogic: s
                } = y.default.useExperiment({
                    location: "useQueryState"
                }), {
                    id: r,
                    nsfwAllowed: u
                } = (0, f.useStateFromStoresObject)([N.default], () => {
                    var e;
                    let t = N.default.getCurrentUser();
                    return {
                        id: null == t ? void 0 : t.id,
                        nsfwAllowed: null !== (e = null == t ? void 0 : t.nsfwAllowed) && void 0 !== e && e
                    }
                }), d = (0, f.useStateFromStores)([I.default], () => I.default.can(G.Permissions.USE_APPLICATION_COMMANDS, e)), o = (0, f.useStateFromStores)([S.default], () => {
                    var n;
                    if (null != t && null != r) return null === (n = S.default.getMember(e.guild_id, r)) || void 0 === n ? void 0 : n.roles
                }), c = (0, f.useStateFromStores)([T.default], () => null !== (i = T.default.getViewingRoles(e.guild_id)) && void 0 !== i ? i : void 0), _ = !1 !== n.applicationCommands && (e.isPrivate() || d), E = J(e, _), g = Z(_), h = m.ViewNsfwCommands.useSetting();
                return l.useMemo(() => null == r ? k : et({
                    context: {
                        channel: e,
                        guild: t
                    },
                    currentUserId: r,
                    currentUserRoleIds: o,
                    impersonationRoles: c,
                    commandType: n.commandType,
                    text: n.text,
                    allowApplicationCommands: _,
                    builtIns: n.builtIns,
                    allowNsfw: u && (!e.isPrivate() && h || e.isPrivate() && e.nsfw),
                    sortByScore: a.sortByScore,
                    useNewScoreLogic: s,
                    contextState: E,
                    userState: g
                }), [e, t, r, o, c, n.commandType, n.text, n.builtIns, a.sortByScore, _, u, h, s, E, g])
            }

            function et(e) {
                var t, n, a, l;
                let s, u, {
                        context: o,
                        currentUserId: f,
                        currentUserRoleIds: E,
                        impersonationRoles: h,
                        contextState: T,
                        userState: A,
                        commandType: m,
                        text: M,
                        builtIns: S = P.BuiltInCommandFilter.ALLOW,
                        allowApplicationCommands: C = !0,
                        allowNsfw: N = !1,
                        sortByScore: O = !1,
                        useNewScoreLogic: D = !1
                    } = e,
                    R = null == M ? void 0 : M.toLowerCase(),
                    y = null == R ? void 0 : R.split(" "),
                    U = o.channel.guild_id,
                    H = null != h,
                    w = H ? Object.keys(h) : E,
                    B = o.channel.isThread() ? o.channel.parent_id : o.channel.id;
                d(null != B, "permissions channel id is null");
                let k = I.default.computePermissions(o.channel, void 0, h),
                    V = null != U && !_.default.has(k, G.Permissions.ADMINISTRATOR),
                    x = S === P.BuiltInCommandFilter.ONLY_TEXT,
                    Y = S !== P.BuiltInCommandFilter.DENY ? (0, v.getBuiltInCommands)(m, !0, x) : [],
                    W = Y.length > 0 ? [{
                        descriptor: v.BUILT_IN_SECTIONS[F.BuiltInSectionId.BUILT_IN],
                        commands: Y
                    }] : [],
                    K = C ? [...null !== (a = null === (t = T.result) || void 0 === t ? void 0 : t.sections) && void 0 !== a ? a : [], ...null !== (l = null === (n = A.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : []] : [];
                K.sort((e, t) => ed(e.descriptor.name, t.descriptor.name));
                let q = [...K, ...W];
                s = o.channel.isPrivate() ? o.channel.type === G.ChannelTypes.DM ? g.ApplicationCommandContextType.BOT_DM : g.ApplicationCommandContextType.PRIVATE_CHANNEL : g.ApplicationCommandContextType.GUILD;
                let j = [];
                for (let e of q) {
                    if (0 === e.commands.length) continue;
                    let t = e.descriptor.permissions,
                        n = null,
                        a = null;
                    V && null != t && (n = er(t, B, U), a = eu(t, f, w, U, H));
                    let l = [];
                    for (let t of e.commands) {
                        let u;
                        if (t.type !== m || !0 === t.nsfw && !N || null != t.predicate && !t.predicate(o) || null != t.contexts && !t.contexts.includes(s)) continue;
                        let d = t.permissions;
                        if (V) {
                            let e = null,
                                i = null;
                            if (null != d && (e = er(d, B, U), i = eu(d, f, w, U, H)), !1 === e || !1 === i || !0 !== e && !1 === n || !0 !== i && !1 === a || null == i && null == a && null != t.defaultMemberPermissions && (_.default.equals(t.defaultMemberPermissions, b.DISABLED_BY_DEFAULT_PERMISSION_FLAG) || !_.default.has(k, t.defaultMemberPermissions))) continue
                        }
                        if (O && null != R && null != y) {
                            if (0 === (u = D ? - function(e, t, n) {
                                    var a, l;
                                    let s = t.name.toLocaleLowerCase(),
                                        u = t.name !== t.displayName ? t.displayName.toLocaleLowerCase() : null;
                                    if (e === s || e === u) return i.COMMAND_NAME_EXACT;
                                    if (s.startsWith(e) || (null == u ? void 0 : u.startsWith(e))) return i.COMMAND_NAME_STARTS_WITH;
                                    if (null != t.options) {
                                        let n = null;
                                        if (e.startsWith(s) && " " === e[s.length] && (n = e.slice(s.length + 1)), null != u && e.startsWith(u) && " " === e[u.length] && (n = e.slice(u.length + 1)), null != n)
                                            for (let e of t.options) {
                                                let t = e.name.toLocaleLowerCase(),
                                                    a = e.name !== e.displayName ? e.displayName.toLocaleLowerCase() : null;
                                                if (n === t || n === a) return i.COMMAND_OPTION_NAME_EXACT;
                                                if (t.startsWith(n) || (null == a ? void 0 : a.startsWith(n))) return i.COMMAND_OPTION_NAME_STARTS_WITH
                                            }
                                    }
                                    let d = null == n ? void 0 : n.name.toLocaleLowerCase();
                                    if (d === e) return i.SECTION_NAME_EXACT;
                                    if (null == d ? void 0 : d.startsWith(e)) return i.SECTION_NAME_STARTS_WITH;
                                    let o = null == n ? void 0 : null === (l = n.application) || void 0 === l ? void 0 : null === (a = l.tags) || void 0 === a ? void 0 : a.map(e => e.toLocaleLowerCase());
                                    if (null == o ? void 0 : o.some(t => t === e)) return i.TAG_EXACT;
                                    if (null == o ? void 0 : o.some(t => t.startsWith(e))) return i.TAG_STARTS_WITH;
                                    if (s.includes(e) || (null == u ? void 0 : u.includes(e))) return i.COMMAND_NAME_CONTAINS;
                                    if (null == d ? void 0 : d.includes(e)) return i.SECTION_NAME_CONTAINS;
                                    let c = t.description.toLocaleLowerCase();
                                    return (null == c ? void 0 : c.includes(e)) ? i.COMMAND_DESC_CONTAINS : null != s && r(e, s) || null != u && r(e, u) ? i.COMMAND_NAME_FUZZY : null != d && r(e, d) ? i.SECTION_NAME_FUZZY : null != c && r(e, c) ? i.COMMAND_DESC_FUZZY : i.NO_MATCH
                                }(R, t, e.descriptor) : (0, b.scoreCommand)(R, y, t, e.descriptor))) continue
                        } else u = 0;
                        l.push({
                            ...t,
                            score: u
                        })
                    }
                    l.length > 0 && j.push({
                        section: e.descriptor,
                        data: l
                    })
                }
                if (O) p.FrecencyUserSettingsActionCreators.loadIfNecessary(), (u = c.flatMap(j, e => e.data)).sort((e, t) => {
                    if (e.score !== t.score) return t.score - e.score;
                    let n = L.default.getScoreWithoutLoadingLatest(o, e),
                        a = L.default.getScoreWithoutLoadingLatest(o, t);
                    return n !== a ? a - n : ed(e.displayName, t.displayName)
                });
                else {
                    for (let e of j) e.data.sort((e, t) => ed(e.displayName, t.displayName));
                    u = c.flatMap(j, e => e.data)
                }
                return {
                    descriptors: j.map(e => e.section),
                    commands: u,
                    sectionedCommands: j,
                    loading: (null == T ? void 0 : T.fetchState.fetching) === !0 || (null == A ? void 0 : A.fetchState.fetching) === !0
                }
            }

            function en(e) {
                var t;
                return null != e.guild_id || e.type === G.ChannelTypes.DM && (null === (t = N.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
            }

            function ea(e) {
                return !! function(e) {
                    var t;
                    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
                }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
            }

            function ei(e) {
                var t, n, a, i;
                let l = {
                    ...e,
                    choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(el),
                    description: null !== (a = e.description_default) && void 0 !== a ? a : e.description,
                    name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
                    options: null === (n = e.options) || void 0 === n ? void 0 : n.map(ei)
                };
                return e.description !== e.description_default && (l.description_localized = e.description), e.name !== e.name_default && (l.name_localized = e.name), l
            }

            function el(e) {
                var t;
                let n = {
                    ...e,
                    name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
                };
                return e.name !== e.name_default && (n.name_localized = e.name), n
            }

            function es(e, t) {
                let n = [];
                if (null != e.user && n.push({
                        type: U.ApplicationCommandPermissionType.USER,
                        id: t,
                        permission: e.user
                    }), null != e.channels)
                    for (let [t, a] of Object.entries(e.channels)) n.push({
                        type: U.ApplicationCommandPermissionType.CHANNEL,
                        id: t,
                        permission: a
                    });
                if (null != e.roles)
                    for (let [t, a] of Object.entries(e.roles)) n.push({
                        type: U.ApplicationCommandPermissionType.ROLE,
                        id: t,
                        permission: a
                    });
                return n
            }

            function er(e, t, n) {
                let a = e[(0, h.toPermissionKey)(t, U.ApplicationCommandPermissionType.CHANNEL)];
                if (null != a) return a.permission;
                let i = e[(0, h.toPermissionKey)((0, b.allChannelsSentinel)(n), U.ApplicationCommandPermissionType.CHANNEL)];
                return null != i ? i.permission : null
            }

            function eu(e, t, n, a, i) {
                if (!i) {
                    let n = e[(0, h.toPermissionKey)(t, U.ApplicationCommandPermissionType.USER)];
                    if (null != n) return n.permission
                }
                if (null == n) return !1;
                let l = !1;
                for (let t of n) {
                    let n = e[(0, h.toPermissionKey)(t, U.ApplicationCommandPermissionType.ROLE)];
                    if (null != n) {
                        if (n.permission) return !0;
                        l = !0
                    }
                }
                if (l) return !1;
                let s = e[(0, h.toPermissionKey)(a, U.ApplicationCommandPermissionType.ROLE)];
                return null != s ? s.permission : null
            }(a = i || (i = {}))[a.NO_MATCH = 0] = "NO_MATCH", a[a.COMMAND_NAME_EXACT = 1] = "COMMAND_NAME_EXACT", a[a.COMMAND_NAME_STARTS_WITH = 2] = "COMMAND_NAME_STARTS_WITH", a[a.COMMAND_OPTION_NAME_EXACT = 3] = "COMMAND_OPTION_NAME_EXACT", a[a.COMMAND_OPTION_NAME_STARTS_WITH = 4] = "COMMAND_OPTION_NAME_STARTS_WITH", a[a.SECTION_NAME_EXACT = 5] = "SECTION_NAME_EXACT", a[a.SECTION_NAME_STARTS_WITH = 6] = "SECTION_NAME_STARTS_WITH", a[a.TAG_EXACT = 7] = "TAG_EXACT", a[a.TAG_STARTS_WITH = 8] = "TAG_STARTS_WITH", a[a.COMMAND_NAME_CONTAINS = 9] = "COMMAND_NAME_CONTAINS", a[a.SECTION_NAME_CONTAINS = 10] = "SECTION_NAME_CONTAINS", a[a.COMMAND_DESC_CONTAINS = 11] = "COMMAND_DESC_CONTAINS", a[a.COMMAND_NAME_FUZZY = 12] = "COMMAND_NAME_FUZZY", a[a.SECTION_NAME_FUZZY = 13] = "SECTION_NAME_FUZZY", a[a.COMMAND_DESC_FUZZY = 14] = "COMMAND_DESC_FUZZY";

            function ed(e, t) {
                return z.collator.compare(e, t)
            }
        },
        972620: function(e, t, n) {
            "use strict";
            var a, i;
            n.r(t), n.d(t, {
                BuiltInCommandFilter: function() {
                    return a
                }
            }), (i = a || (a = {}))[i.ALLOW = 0] = "ALLOW", i[i.ONLY_TEXT = 1] = "ONLY_TEXT", i[i.DENY = 2] = "DENY"
        },
        383018: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("446674"),
                i = n("913144"),
                l = n("716241"),
                s = n("982108"),
                r = n("18494"),
                u = n("49111");
            let d = {};

            function o() {
                return d = {}, !0
            }

            function c(e) {
                return !(e in d) && (d[e] = {
                    activeCommand: null,
                    activeCommandSection: null,
                    activeOptionName: null,
                    preferredCommandId: null,
                    optionStates: {},
                    initialValues: {}
                }), d[e]
            }

            function _(e) {
                var t, n, a;
                let {
                    channelId: i,
                    command: s,
                    section: r,
                    initialValues: d,
                    location: o,
                    triggerSection: _,
                    queryLength: f
                } = e, E = c(i);
                if ((null == s ? void 0 : s.id) === (null === (t = E.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
                E.activeCommand = s, E.activeCommandSection = r, E.activeOptionName = null, E.preferredCommandId = null, E.initialValues = null != d ? d : {};
                let g = {};
                return (null == s ? void 0 : s.options) != null && s.options.forEach(e => {
                    g[e.name] = {
                        isActive: !1,
                        hasValue: !1,
                        lastValidationResult: null,
                        optionValue: null
                    }
                }), E.optionStates = g, null != s && (0, l.trackWithMetadata)(u.AnalyticEvents.APPLICATION_COMMAND_SELECTED, {
                    command_id: null !== (a = null === (n = s.rootCommand) || void 0 === n ? void 0 : n.id) && void 0 !== a ? a : s.id,
                    application_id: s.applicationId,
                    location: o,
                    section: _,
                    query_length: f,
                    command_text_length: s.displayName.length
                }), !0
            }

            function f(e) {
                var t, n;
                let {
                    channelId: a,
                    commandId: i
                } = e, l = c(a);
                return i !== l.preferredCommandId && (null !== l.preferredCommandId || i !== (null !== (n = null === (t = l.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && (l.activeCommand = null, l.activeOptionName = null, l.preferredCommandId = i, l.optionStates = {}, !0)
            }

            function E(e) {
                let {
                    channelId: t,
                    changedOptionStates: n
                } = e, a = c(t), i = {
                    ...a.optionStates
                };
                for (let [e, t] of Object.entries(n)) {
                    var l, s, r;
                    if (!(e in a.optionStates)) continue;
                    let n = void 0 !== t.hasValue ? t.hasValue : i[e].hasValue;
                    if (!n) {
                        i[e] = {
                            hasValue: !1,
                            isActive: !1,
                            lastValidationResult: null,
                            optionValue: null,
                            location: void 0,
                            length: void 0
                        }, a.activeOptionName === e && (a.activeOptionName = null);
                        continue
                    }
                    let u = i[e];
                    i[e] = {
                        hasValue: !0,
                        isActive: void 0 !== t.isActive ? t.isActive : u.isActive,
                        lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : u.lastValidationResult,
                        optionValue: null !== (l = t.optionValue) && void 0 !== l ? l : u.optionValue,
                        location: null !== (s = t.location) && void 0 !== s ? s : u.location,
                        length: null !== (r = t.length) && void 0 !== r ? r : u.length
                    }, void 0 !== t.isActive && (t.isActive ? (null != a.activeOptionName && a.activeOptionName !== e && (i[a.activeOptionName] = {
                        ...i[a.activeOptionName]
                    }, i[a.activeOptionName].isActive = !1), a.activeOptionName = e) : e === a.activeOptionName && (a.activeOptionName = null))
                }
                return a.optionStates = i, !0
            }
            class g extends a.default.Store {
                initialize() {
                    s.default.addChangeListener(() => {
                        let e = r.default.getChannelId();
                        if (null == e) return d = {}, !0;
                        let t = s.default.getCurrentSidebarChannelId(e);
                        if (null != t && t in d) return !1;
                        d = e in d ? {
                            [e]: d[e]
                        } : {}
                    })
                }
                getActiveCommand(e) {
                    let t = c(e);
                    return t.activeCommand
                }
                getActiveCommandSection(e) {
                    let t = c(e);
                    return t.activeCommandSection
                }
                getActiveOptionName(e) {
                    let t = c(e);
                    return t.activeOptionName
                }
                getActiveOption(e) {
                    var t, n, a;
                    let i = c(e);
                    return null !== (a = null === (n = i.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find(e => e.name === i.activeOptionName)) && void 0 !== a ? a : null
                }
                getPreferredCommandId(e) {
                    let t = c(e);
                    return t.preferredCommandId
                }
                getOptionStates(e) {
                    let t = c(e);
                    return t.optionStates
                }
                getOptionState(e, t) {
                    let n = c(e);
                    return n.optionStates[t]
                }
                getOption(e, t) {
                    var n, a;
                    let i = c(e);
                    return null === (a = i.activeCommand) || void 0 === a ? void 0 : null === (n = a.options) || void 0 === n ? void 0 : n.find(e => e.name === t)
                }
                getState(e) {
                    return {
                        ...c(e)
                    }
                }
            }
            g.displayName = "ApplicationCommandStore";
            let h = new g(i.default, {
                CONNECTION_OPEN: o,
                CHANNEL_SELECT: o,
                LOGOUT: o,
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: _,
                APPLICATION_COMMAND_SET_PREFERRED_COMMAND: f,
                APPLICATION_COMMAND_UPDATE_OPTIONS: E,
                APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
                    let {
                        channelId: t,
                        preferredCommandId: n,
                        command: a,
                        section: i,
                        changedOptionStates: l
                    } = e, s = _({
                        type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                        channelId: t,
                        command: a,
                        section: i
                    }), r = f({
                        type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                        channelId: t,
                        commandId: n
                    }), u = E({
                        type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                        channelId: t,
                        changedOptionStates: l
                    });
                    return s || r || u
                }
            });
            var T = h
        },
        150692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("917351"),
                l = n.n(i),
                s = n("77078"),
                r = n("450911"),
                u = n("819689"),
                d = n("798609"),
                o = n("679653"),
                c = n("27618"),
                _ = n("697218"),
                f = n("524768"),
                E = n("317041"),
                g = n("49111"),
                h = n("782340");

            function T(e) {
                switch (e) {
                    case g.ChannelTextAreaIntegrations.GIF.title:
                    case g.ChannelTextAreaIntegrations.TENOR.title:
                        return h.default.Messages.COMMAND_GIPHY_DESCRIPTION;
                    default:
                        return ""
                }
            }
            let A = [...l(g.ChannelTextAreaIntegrations).values().map(e => ({
                id: e.commandId,
                name: e.command,
                displayName: e.command,
                type: d.ApplicationCommandType.CHAT,
                inputType: f.ApplicationCommandInputType.BUILT_IN_INTEGRATION,
                applicationId: E.BuiltInSectionId.BUILT_IN,
                get description() {
                    return T(e.title)
                },
                get displayDescription() {
                    return T(e.title)
                },
                options: e.type === g.ChannelTextAreaIntegrationTypes.GIF ? [{
                    name: "query",
                    displayName: "query",
                    type: d.ApplicationCommandOptionType.STRING,
                    get description() {
                        return h.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                    },
                    required: !0
                }] : [],
                integrationType: e.type,
                integrationTitle: e.title
            })).value(), {
                id: "-15",
                name: "leave",
                displayName: "leave",
                type: d.ApplicationCommandType.CHAT,
                inputType: f.ApplicationCommandInputType.BUILT_IN,
                applicationId: E.BuiltInSectionId.BUILT_IN,
                get description() {
                    return h.default.Messages.LEAVE_GROUP_DM
                },
                get displayDescription() {
                    return h.default.Messages.LEAVE_GROUP_DM
                },
                options: [{
                    name: "silent",
                    displayName: "silent",
                    type: d.ApplicationCommandOptionType.BOOLEAN,
                    get description() {
                        return h.default.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.LEAVE_GROUP_DM_SILENTLY
                    },
                    required: !1
                }],
                predicate: e => {
                    let {
                        channel: t
                    } = e;
                    return t.isGroupDM()
                },
                execute: (e, t) => {
                    var n, i;
                    let {
                        channel: l
                    } = t, d = (0, o.computeChannelName)(l, _.default, c.default), f = h.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                        name: d
                    }), E = h.default.Messages.LEAVE_GROUP_DM_BODY.format({
                        name: d
                    }), g = null !== (i = null === (n = e.find(e => "silent" === e.name)) || void 0 === n ? void 0 : n.value) && void 0 !== i && i;
                    async function T() {
                        try {
                            await r.default.closePrivateChannel(l.id, void 0, g)
                        } catch (e) {
                            u.default.sendBotMessage(l.id, h.default.Messages.LEAVE_GROUP_DM_ERROR)
                        }
                    }
                    l.isManaged() && (f = h.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                        name: d
                    }), E = h.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                        name: d
                    })), (0, s.openModal)(e => (0, a.jsx)(s.ConfirmModal, {
                        header: f,
                        confirmText: h.default.Messages.LEAVE_GROUP_DM,
                        cancelText: h.default.Messages.CANCEL,
                        onConfirm: T,
                        ...e,
                        children: (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: E
                        })
                    }))
                }
            }];
            var m = A
        },
        374648: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isProactiveClydeV2Enabled: function() {
                    return l
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-10_clyde_ai_proactive_guilds_v2",
                label: "Proactive Clyde V2",
                defaultConfig: {
                    isProactiveClydeV2Enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable proactive clyde v2",
                    config: {
                        isProactiveClydeV2Enabled: !0
                    }
                }]
            });

            function l(e, t) {
                let {
                    isProactiveClydeV2Enabled: n
                } = i.getCurrentConfig({
                    guildId: e,
                    location: t
                }, {
                    autoTrackExposure: !1
                });
                return n
            }
        },
        893694: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("271938"),
                i = n("42203"),
                l = n("377253"),
                s = n("374648");

            function r(e) {
                var t, n, r;
                let u = null !== (n = null === (t = i.default.getBasicChannel(e)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== n ? n : "",
                    d = l.default.getMessages(e),
                    o = d.last();
                if (null == o) return !1;
                let c = null !== (r = d.getManyBefore(o.id, 10)) && void 0 !== r ? r : [],
                    _ = a.default.getId();
                return c.some(t => {
                    var n;
                    let a = t.author.isClyde();
                    if (!a || null == t.messageReference) return !1;
                    let i = l.default.getMessage(e, t.messageReference.message_id);
                    if (null != i && (0, s.isProactiveClydeV2Enabled)(u, "allowProactiveClydeV2")) return !0;
                    return (null == i ? void 0 : null === (n = i.author) || void 0 === n ? void 0 : n.id) === _
                })
            }
        },
        125273: function(e, t, n) {
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
        670902: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                computeThreadIdsSnapshot: function() {
                    return F
                },
                default: function() {
                    return w
                }
            });
            var i = n("917351"),
                l = n.n(i),
                s = n("335710"),
                r = n("249654"),
                u = n("446674"),
                d = n("913144"),
                o = n("689275"),
                c = n("610730"),
                _ = n("271938"),
                f = n("42203"),
                E = n("660478"),
                g = n("18494"),
                h = n("449008"),
                T = n("786742");
            let A = [],
                m = null,
                p = null,
                M = new Set,
                S = s.ThreadSortOrder.LATEST_ACTIVITY,
                C = 0,
                I = [],
                N = !1,
                O = [],
                D = l.chain(A),
                v = l.chain(A),
                R = new Set,
                L = new Set;

            function y(e) {
                var t;
                return null !== (t = E.default.lastMessageId(e)) && void 0 !== t ? t : e
            }

            function P(e) {
                return function(t, n) {
                    if ((0, T.isForumPostPinned)(t)) return -1;
                    if ((0, T.isForumPostPinned)(n)) return 1;
                    if (e === s.ThreadSortOrder.LATEST_ACTIVITY) return r.default.compare(y(n), y(t));
                    else return r.default.compare(n, t)
                }
            }

            function U() {
                I = [], a = null, p = null, M = new Set, S = s.ThreadSortOrder.LATEST_ACTIVITY, C = 0, O = [], D = l.chain(A), v = l.chain(A), L.clear(), R.clear()
            }

            function b() {
                var e;
                let t = g.default.getChannelId();
                if (null == t || !(null === (e = f.default.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return U(), !1;
                G({
                    refreshThreadIds: !0
                })
            }

            function F(e) {
                let t = f.default.getChannel(e);
                return null == t ? [] : Object.values(o.default.getThreadsForParent(t.guild_id, t.id)).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }).sort(P(S))
            }

            function G(e) {
                var t;
                let n = f.default.getChannel(p);
                if (null == n) return;
                (null == e ? void 0 : e.refreshThreadIds) && (O = Object.values(o.default.getThreadsForParent(n.guild_id, n.id)).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }), C = 0, N = !0), 0 !== R.size && (O = O.filter(e => !R.has(e)), R.clear()), 0 !== L.size && (O = Array.from(new Set([...O, ...L])), L.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (v = l.chain(O).sort(P(s.ThreadSortOrder.LATEST_ACTIVITY)), D = l.chain(O).sort(P(s.ThreadSortOrder.CREATION_DATE)));
                let i = S === s.ThreadSortOrder.LATEST_ACTIVITY ? v : D,
                    r = i.value();
                I = 0 === M.size ? r : r.filter((t = M, function(e) {
                    var n;
                    let a = null === (n = f.default.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
                    return null != a && 0 !== a.length && a.some(e => t.has(e))
                }));
                let u = I.find(e => (function(e) {
                    let t = c.default.getCount(e);
                    return null === t || 0 === t
                })(e));
                a = null == u ? null : u
            }
            class H extends u.default.Store {
                initialize() {
                    this.waitFor(f.default, o.default, g.default, E.default)
                }
                getNewThreadCount() {
                    return C
                }
                getCanAckThreads() {
                    return N
                }
                getThreadIds(e, t, n) {
                    let a = e !== p,
                        i = !(0, h.areSetsEqual)(n, M),
                        l = t !== S;
                    return p = e, M = n, S = t, a ? G({
                        refreshThreadIds: !0
                    }) : l ? G({
                        sortThreadIds: !0
                    }) : i && G(), I
                }
                getCurrentThreadIds() {
                    return I
                }
                getAndDeleteMostRecentUserCreatedThreadId() {
                    let e = m;
                    return m = null, e
                }
                getFirstNoReplyThreadId() {
                    return a
                }
            }
            H.displayName = "ForumActivePostStore";
            var w = new H(d.default, {
                CONNECTION_OPEN: b,
                OVERLAY_INITIALIZE: b,
                GUILD_CREATE: b,
                CHANNEL_SELECT: b,
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== p) return !1;
                    U()
                },
                THREAD_LIST_SYNC: function(e) {
                    var t;
                    let {
                        guildId: n
                    } = e;
                    if (null == p || n !== (null === (t = f.default.getChannel(p)) || void 0 === t ? void 0 : t.guild_id)) return !1;
                    G({
                        refreshThreadIds: !0
                    })
                },
                THREAD_CREATE: function(e) {
                    let {
                        channel: t,
                        isNewlyCreated: n
                    } = e;
                    if (null == t.parent_id || t.parent_id !== p || !n) return !1;
                    t.ownerId !== _.default.getId() ? C++ : m = t.id
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== p) return !1;
                    let n = (0, T.isForumPostPinned)(t.id),
                        a = L.has(t.id);
                    if (n && !a) L.add(t.id), G({
                        sortThreadIds: !0
                    });
                    else {
                        if (n || !a) return !1;
                        L.delete(t.id), G({
                            sortThreadIds: !0
                        })
                    }
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== p) return !1;
                    R.add(t.id), G({
                        sortThreadIds: !0
                    })
                },
                RESORT_THREADS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || t !== p) return !1;
                    G({
                        refreshThreadIds: !0
                    })
                },
                CHANNEL_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || t !== p) return !1;
                    N = !1
                }
            })
        },
        349778: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isForumActivityExperimentEnabled: function() {
                    return l
                }
            });
            var a = n("943314"),
                i = n("531869");

            function l(e) {
                let t = i.default.getCurrentConfig({
                        guildId: null != e ? e : "",
                        location: "3fde52_1"
                    }),
                    n = a.default.getCurrentConfig({
                        location: "3fde52_2"
                    });
                return !!(t.enabled || n.enabled)
            }
        },
        953371: function(e, t, n) {
            "use strict";
            var a, i, l, s;
            n.r(t), n.d(t, {
                MAX_FORUM_TAGS: function() {
                    return r
                },
                MAX_FORUM_POST_TAGS: function() {
                    return u
                },
                MAX_FORUM_TEMPLATE_LENGTH: function() {
                    return d
                },
                ForumOnboardingCTAs: function() {
                    return a
                },
                COMMUNITY_PORTAL_FORUM_PAGE: function() {
                    return o
                },
                ForumTimestampFormats: function() {
                    return i
                }
            });
            let r = 20,
                u = 5,
                d = 256;
            (l = a || (a = {})).PERMISSIONS = "Permissions", l.GUIDELINES = "Guidelines", l.TAGS = "Tags", l.DEFAULT_REACTION = "Default Reaction", l.CREATE_POST = "Create Post";
            let o = "https://discord.com/community/creating-value-with-conversation";
            (s = i || (i = {}))[s.DURATION_AGO = 0] = "DURATION_AGO", s[s.POSTED_DURATION_AGO = 1] = "POSTED_DURATION_AGO"
        },
        430475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("446674"),
                i = n("913144"),
                l = n("692038"),
                s = n("10802"),
                r = n("697218");
            let u = {};

            function d(e) {
                let {
                    threads: t,
                    firstMessages: n
                } = e;
                if (null == n) return !1;
                for (let e of t) u[e.id] = {
                    loaded: !0,
                    firstMessage: null
                };
                for (let e of n) o(e.channel_id, e)
            }

            function o(e, t) {
                let n = null == t ? null : (0, l.createMessageRecord)(t);
                u[e] = {
                    loaded: !0,
                    firstMessage: n
                }
            }

            function c(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: a,
                    userId: i,
                    emoji: l,
                    optimistic: s,
                    burst: d
                } = e, o = u[n];
                if (null == o || null == o.firstMessage || a !== o.firstMessage.id) return !1;
                let c = r.default.getCurrentUser(),
                    _ = null != c && c.id === i;
                if (s && !_) return !1;
                if (u[n] = {
                        ...o
                    }, "MESSAGE_REACTION_ADD" === t) {
                    let {
                        colors: t
                    } = e;
                    u[n].firstMessage = o.firstMessage.addReaction(l, _, i, t, d)
                } else u[n].firstMessage = o.firstMessage.removeReaction(l, _, d)
            }
            class _ extends a.default.Store {
                initialize() {
                    this.waitFor(s.default, r.default)
                }
                isLoading(e) {
                    var t;
                    return (null === (t = u[e]) || void 0 === t ? void 0 : t.loaded) !== !0
                }
                getMessage(e) {
                    return !(e in u) && (u[e] = {
                        loaded: !1,
                        firstMessage: null
                    }), u[e]
                }
            }
            _.displayName = "ForumPostMessagesStore";
            var f = new _(i.default, {
                CONNECTION_OPEN: function() {
                    u = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || e.message.id !== e.message.channel_id) return !1;
                    o(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (e.message.id !== e.message.channel_id) return !1;
                    let t = u[e.message.id];
                    if (null == t || null == t.firstMessage) return !1;
                    u[e.message.id] = {
                        ...t,
                        firstMessage: (0, l.updateMessageRecord)(t.firstMessage, e.message)
                    }
                },
                MESSAGE_DELETE: function(e) {
                    if (e.id !== e.channelId) return !1;
                    u[e.channelId] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                THREAD_CREATE: function(e) {
                    let t = u[e.channel.id];
                    if (null != t || !s.default.isSubscribedToThreads(e.channel.guild_id)) return !1;
                    u[e.channel.id] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                MESSAGE_REACTION_ADD: c,
                MESSAGE_REACTION_REMOVE: c,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, a = u[t];
                    if (null == a || null == a.firstMessage || n !== a.firstMessage.id) return !1;
                    u[t] = {
                        ...a,
                        firstMessage: a.firstMessage.set("reactions", [])
                    }
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: a
                    } = e, i = u[t];
                    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
                    u[t] = {
                        ...i,
                        firstMessage: i.firstMessage.removeReactionsForEmoji(a)
                    }
                },
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: a
                    } = e, i = u[t];
                    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
                    let l = r.default.getCurrentUser(),
                        s = i.firstMessage.addReactionBatch(a, null == l ? void 0 : l.id);
                    u[t] = {
                        ...i,
                        firstMessage: s
                    }
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) o(e, t[e].first_message)
                },
                LOAD_THREADS_SUCCESS: d,
                LOAD_ARCHIVED_THREADS_SUCCESS: d,
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: n
                    } = e, a = n[n.length - 1];
                    null != a && a.id === t && (u[t] = {
                        loaded: !0,
                        firstMessage: (0, l.createMessageRecord)(a)
                    })
                }
            })
        },
        994810: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                i = n("913144"),
                l = n("42203");
            let s = {};

            function r(e) {
                let t = l.default.getChannel(e);
                return !!(null != t && t.isForumLikeChannel()) || !1
            }

            function u(e) {
                var t;
                let n = null !== (t = s[e]) && void 0 !== t ? t : {
                    query: null,
                    loading: !1,
                    results: null
                };
                return s[e] = n, n
            }
            class d extends a.default.Store {
                getSearchQuery(e) {
                    let t = s[e];
                    return null == t ? void 0 : t.query
                }
                getSearchLoading(e) {
                    var t;
                    let n = s[e];
                    return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t
                }
                getSearchResults(e) {
                    let t = s[e];
                    return null == t ? void 0 : t.results
                }
                getHasSearchResults(e) {
                    let t = s[e];
                    return (null == t ? void 0 : t.results) != null && t.results.length > 0
                }
            }
            d.displayName = "ForumSearchStore";
            var o = new d(i.default, {
                CONNECTION_OPEN: function() {
                    s = {}
                },
                THREAD_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e, a = n.parent_id;
                    if (null == a) return !1;
                    let i = s[a];
                    if (null == i) return !1;
                    s[a] = {
                        ...i,
                        results: null === (t = i.results) || void 0 === t ? void 0 : t.filter(e => n.id !== e)
                    }
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e, n = delete s[t.id];
                    return n
                },
                FORUM_SEARCH_QUERY_UPDATED: function(e) {
                    let {
                        channelId: t,
                        query: n
                    } = e;
                    if (!r(t)) return !1;
                    let a = u(t);
                    s[t] = {
                        ...a,
                        query: n,
                        results: null
                    }
                },
                FORUM_SEARCH_START: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!r(t)) return !1;
                    let n = u(t);
                    s[t] = {
                        ...n,
                        loading: !0
                    }
                },
                FORUM_SEARCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        threadIds: n
                    } = e;
                    if (!r(t)) return !1;
                    let a = u(t);
                    s[t] = {
                        ...a,
                        loading: !1,
                        results: n
                    }
                },
                FORUM_SEARCH_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!r(t)) return !1;
                    let n = u(t);
                    s[t] = {
                        ...n,
                        loading: !1,
                        results: []
                    }
                },
                FORUM_SEARCH_CLEAR: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!r(t)) return !1;
                    let n = delete s[t];
                    return n
                }
            })
        },
        786742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getForumPostReadStates: function() {
                    return o
                },
                getForumPostReadStatesById: function() {
                    return c
                },
                getForumTimestampFormatter: function() {
                    return f
                },
                canDisplayPostUnreadMessageCount: function() {
                    return E
                },
                isForumPostPinned: function() {
                    return g
                }
            });
            var a = n("335710"),
                i = n("42203"),
                l = n("305961"),
                s = n("660478"),
                r = n("953371"),
                u = n("724210"),
                d = n("782340");

            function o(e, t) {
                let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
                return {
                    isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
                    hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
                }
            }

            function c(e) {
                let [t, n, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, l.default, s.default], r = t.getChannel(e);
                if (null == r) return null;
                let u = n.getGuild(r.guild_id);
                return null == u ? null : o(r, u, [a])
            }
            let _ = () => ({
                minutes: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
                hours: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
                days: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
                month: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
            });

            function f(e, t) {
                if (t === r.ForumTimestampFormats.POSTED_DURATION_AGO && e === a.ThreadSortOrder.CREATION_DATE) return _
            }

            function E(e, t) {
                let [n] = t, a = n.hasTrackedUnread(e), i = n.hasOpenedThread(e), l = null != n.getTrackedAckMessageId(e);
                return a && i && l
            }

            function g(e) {
                var t;
                return (null === (t = i.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(u.ChannelFlags.PINNED)) === !0
            }
        },
        446480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("482402"),
                i = n("42203"),
                l = n("349778"),
                s = n("688169"),
                r = new class e {
                    constructor() {
                        this.filterTagIds = null, this.sortOrder = null, this.layout = null, this.setFilterTagIds = e => {
                            this.filterTagIds = e
                        }, this.setSortOrder = e => {
                            this.sortOrder = e
                        }, this.setLayout = e => {
                            this.layout = e
                        }, this.getFilterTagIdsAnalytics = () => null != this.filterTagIds ? Array.from(this.filterTagIds) : [], this.getSortOrderAnalytics = e => {
                            var t, n;
                            return null !== (n = this.sortOrder) && void 0 !== n ? n : null === (t = i.default.getChannel(e)) || void 0 === t ? void 0 : t.getDefaultSortOrder()
                        }, this.getLayoutAnalytics = e => {
                            var t;
                            let n = i.default.getChannel(e),
                                r = null !== (t = this.layout) && void 0 !== t ? t : null == n ? void 0 : n.getDefaultLayout(),
                                u = (0, l.isForumActivityExperimentEnabled)(null == n ? void 0 : n.guild_id),
                                d = u && r === a.ForumLayout.LIST ? s.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : r;
                            return d
                        }
                    }
                }
        },
        589641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("689988"),
                i = n("689275"),
                l = n("271938"),
                s = n("42203"),
                r = n("786742");
            class u extends a.default {
                handleThreadCreate(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.isForumPost()) {
                        let e = t.ownerId === l.default.getId();
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
                        let n = s.default.getChannel(t);
                        null != n && n.isForumLikeChannel() && (this.readStateSnapshots = {}, this.processForumChannel(n.guild_id, t))
                    }, this.processForumChannel = (e, t) => {
                        let n = i.default.getThreadsForParent(e, t);
                        Object.keys(n).forEach(e => {
                            let t = (0, r.getForumPostReadStatesById)(e);
                            null != t && (this.readStateSnapshots[e] = t)
                        })
                    }, this.getReadStateSnapshotAnalytics = e => this.readStateSnapshots[e]
                }
            }
            var d = new u
        },
        369814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("748820");

            function i(e) {
                return {
                    channelId: e,
                    sessionId: (0, a.v4)()
                }
            }
            var l = new class e {
                getForumChannelSessionId(e) {
                    return null == this.session && (this.session = i(e)), this.session.channelId !== e && (this.session = i(e)), this.session.sessionId
                }
            }
        },
        867965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackForumChannelSeenBatch: function() {
                    return h
                },
                trackForumSearched: function() {
                    return T
                },
                trackForumSearchCleared: function() {
                    return A
                },
                trackForumTagFilterClicked: function() {
                    return m
                },
                trackForumCreateNewPostClick: function() {
                    return p
                },
                trackForumCreateNewPostKeybindUsed: function() {
                    return M
                },
                maybeTrackForumNewPostDraftCreated: function() {
                    return S
                },
                trackForumNewPostCleared: function() {
                    return C
                },
                trackForumPostCreated: function() {
                    return I
                },
                trackForumScrolled: function() {
                    return N
                },
                trackForumMorePostsLoaded: function() {
                    return O
                },
                trackForumPostClicked: function() {
                    return D
                },
                trackForumSortOrderUpdated: function() {
                    return v
                },
                trackForumLayoutUpdated: function() {
                    return R
                },
                trackForumPostLinkCopied: function() {
                    return L
                },
                trackForumOnboardingClicked: function() {
                    return y
                },
                trackForumUpsellModalClicked: function() {
                    return P
                },
                trackForumAddMediaToOriginalPostClicked: function() {
                    return U
                },
                trackForumHelperCardClicked: function() {
                    return b
                },
                trackForumChannelMediaUploaderClicked: function() {
                    return F
                },
                trackForumEnableAutomodClicked: function() {
                    return G
                },
                trackForumPostSidebarViewed: function() {
                    return H
                },
                trackForumUpsellModalViewed: function() {
                    return w
                },
                trackForumCreateNewPostStarted: function() {
                    return B
                }
            });
            var a = n("482402"),
                i = n("716241"),
                l = n("701916"),
                s = n("42203"),
                r = n("474643"),
                u = n("599110"),
                d = n("773336"),
                o = n("349778"),
                c = n("430475"),
                _ = n("994810"),
                f = n("688169"),
                E = n("318321"),
                g = n("49111");

            function h(e) {
                let {
                    guildId: t,
                    channelId: n,
                    sessionId: a,
                    postIds: l,
                    additionalTimes: s
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SEEN_BATCH, {
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: n,
                        sessionId: a
                    }),
                    guild_id: t,
                    channel_id: n,
                    post_ids: l,
                    additional_seen_time_millis: s
                })
            }

            function T(e) {
                let {
                    guildId: t,
                    channelId: n,
                    numSearchResults: a
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SEARCHED, {
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    num_search_results: a
                })
            }

            function A(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SEARCH_CLEARED, {
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function m(e) {
                let {
                    guildId: t,
                    channelId: n,
                    tagId: a,
                    filterTagIds: l,
                    added: s,
                    location: r
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    tag_id: a,
                    filter_tag_ids: l,
                    added: s,
                    location: r
                })
            }

            function p(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function M(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function S(e) {
                var t, n, a, l;
                let {
                    guildId: u,
                    channelId: d
                } = e, o = s.default.getChannel(d);
                if (null == o) return;
                let c = r.default.getThreadSettings(d),
                    _ = null === (t = o.template) || void 0 === t ? void 0 : t.trim(),
                    f = r.default.getDraft(d, r.DraftType.FirstThreadMessage),
                    h = null == f || 0 === f.length || (null == f ? void 0 : f.trim()) === _,
                    T = (null == c ? void 0 : c.appliedTags) == null || (null == c ? void 0 : null === (n = c.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
                    A = (null == c ? void 0 : c.name) == null || (null == c ? void 0 : null === (l = c.name) || void 0 === l ? void 0 : null === (a = l.trim()) || void 0 === a ? void 0 : a.length) === 0;
                (!h || !T || !A) && i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: d
                    }),
                    guild_id: u,
                    channel_id: d,
                    applied_tag_ids: (0, E.getForumPostDraftAppliedTagIds)(d),
                    num_attachments: (0, E.getForumPostDraftNumAttachments)(d)
                })
            }

            function C(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function I(e) {
                let {
                    guildId: t,
                    channelId: n,
                    postId: a
                } = e;

                function l() {
                    i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_POST_CREATED, {
                        ...(0, E.collectForumPostAnalyticsMetadata)({
                            channelId: a
                        }),
                        guild_id: t,
                        channel_id: n
                    })
                }
                let s = c.default.isLoading(a);
                s ? c.default.addConditionalChangeListener(() => {
                    let e = c.default.isLoading(a);
                    return !!e || (l(), !1)
                }) : l()
            }

            function N(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SCROLLED, {
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function O(e) {
                let {
                    guildId: t,
                    channelId: n,
                    numArchivedThreads: a,
                    hasMoreThreads: l,
                    filterTagIds: r,
                    sortOrder: d
                } = e;
                u.default.track(g.AnalyticEvents.FORUM_CHANNEL_MORE_POSTS_LOADED, {
                    ...(0, i.collectGuildAnalyticsMetadata)(t),
                    ...(0, i.collectChannelAnalyticsMetadata)(s.default.getChannel(n)),
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    num_archived_threads: a,
                    num_active_threads: (0, E.getNumActiveThreads)(t, n),
                    has_more_threads: l,
                    filter_tag_ids: r,
                    sort_order: d
                })
            }

            function D(e) {
                let {
                    guildId: t,
                    channelId: n,
                    postId: a,
                    location: l
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_POST_CLICKED, {
                    ...(0, E.collectForumPostAnalyticsMetadata)({
                        channelId: a
                    }),
                    guild_id: t,
                    channel_id: n,
                    is_search_result: null != _.default.getSearchResults(n),
                    location: l
                })
            }

            function v(e) {
                let {
                    guildId: t,
                    channelId: n,
                    sortOrder: a
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_POSTS_SORTED, {
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    sort_type: (0, E.convertSortOrderToReadableString)(a),
                    sort_order: a,
                    forum_channel_sort_order: a
                })
            }

            function R(e) {
                let {
                    guildId: t,
                    channelId: n,
                    forumLayout: l
                } = e, s = (0, o.isForumActivityExperimentEnabled)(t) && l === a.ForumLayout.LIST ? f.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : l;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_LAYOUT_UPDATED, {
                    ...(0, E.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    forum_channel_layout: s
                })
            }

            function L(e) {
                let {
                    postId: t,
                    location: n
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_POST_LINK_COPIED, {
                    forum_post_id: t,
                    location: n
                })
            }

            function y(e) {
                let {
                    onboardingCTA: t
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_ONBOARDING_CLICKED, {
                    onboarding_cta_type: t
                })
            }

            function P(e) {
                let {
                    forumDemoId: t
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_UPSELL_MODAL_CLICKED, {
                    forum_demo_id: t
                })
            }

            function U(e) {
                let {
                    added: t
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
                    added: t
                })
            }

            function b(e) {
                let {
                    readGuideCta: t
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
                    read_guide_cta: t
                })
            }

            function F(e) {
                let {
                    isMobile: t
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
                    is_mobile: t
                })
            }

            function G() {
                i.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
            }

            function H(e) {
                i.default.trackWithMetadata(g.AnalyticEvents.CHANNEL_OPENED, {
                    ...(0, i.collectGuildAnalyticsMetadata)(e.guild_id),
                    ...(0, i.collectChannelAnalyticsMetadata)(e),
                    ...(0, l.collectThreadMetadata)(e, !0),
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    parent_channel_type: e.parentChannelThreadType,
                    channel_view: "Split View",
                    platform: (0, d.getPlatform)()
                })
            }

            function w() {
                i.default.trackWithMetadata(g.AnalyticEvents.OPEN_MODAL, {
                    type: "Forum Channel Upsell Modal",
                    location: {
                        section: g.AnalyticsSections.CHANNEL_WELCOME_CTA
                    }
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                i.default.trackWithMetadata(g.AnalyticEvents.THREAD_CREATION_STARTED, {
                    ...(0, l.collectThreadMetadata)(s.default.getChannel(n)),
                    channel_id: n,
                    guild_id: t
                })
            }
        },
        318321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getForumChannelSessionId: function() {
                    return p
                },
                convertSortOrderToReadableString: function() {
                    return M
                },
                getForumPostDraftNumAttachments: function() {
                    return S
                },
                getForumPostDraftAppliedTagIds: function() {
                    return C
                },
                getNumActiveThreads: function() {
                    return I
                },
                collectForumAnalyticsMetadata: function() {
                    return O
                },
                collectForumPostAnalyticsMetadata: function() {
                    return D
                }
            });
            var a = n("335710"),
                i = n("249654"),
                l = n("689275"),
                s = n("755624"),
                r = n("800843"),
                u = n("610730"),
                d = n("42203"),
                o = n("474643"),
                c = n("957255"),
                _ = n("585722"),
                f = n("430475"),
                E = n("446480"),
                g = n("589641"),
                h = n("369814"),
                T = n("49111"),
                A = n("724210"),
                m = n("648564");

            function p(e) {
                return h.default.getForumChannelSessionId(e)
            }

            function M(e) {
                switch (e) {
                    case a.ThreadSortOrder.CREATION_DATE:
                        return m.ThreadSortOrderReadableForAnalytics.CREATION_DATE;
                    case a.ThreadSortOrder.LATEST_ACTIVITY:
                        return m.ThreadSortOrderReadableForAnalytics.LATEST_ACTIVITY;
                    default:
                        throw Error("Unexpected sort order ".concat(e))
                }
            }

            function S(e) {
                return _.default.getUploads(e, o.DraftType.FirstThreadMessage).length
            }

            function C(e) {
                var t, n;
                let a = d.default.getChannel(e);
                if (null == a) return [];
                let i = d.default.getChannel(a.parent_id),
                    l = null == i ? void 0 : i.availableTags;
                if (null == i || null == l) return [];
                let s = null !== (n = null === (t = o.default.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set,
                    r = new Set(l.map(e => e.id));
                return Array.from(s).filter(e => r.has(e))
            }

            function I(e, t) {
                return Object.keys(l.default.getThreadsForParent(e, t)).length
            }

            function N(e) {
                let {
                    loaded: t,
                    firstMessage: n
                } = f.default.getMessage(e);
                return t ? n : null
            }

            function O(e) {
                var t, n, a, i;
                let {
                    channelId: l,
                    sessionId: s
                } = e, r = d.default.getChannel(l);
                return null != r && r.isForumLikeChannel() ? {
                    forum_channel_has_guidelines: null != r.topic && r.topic.trim().length > 0,
                    forum_channel_default_emoji_reaction_id: null === (t = r.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
                    forum_channel_default_emoji_reaction_name: null === (n = r.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
                    forum_channel_available_tag_ids: null !== (i = null === (a = r.availableTags) || void 0 === a ? void 0 : a.map(e => e.id)) && void 0 !== i ? i : [],
                    forum_channel_tag_required: r.hasFlag(A.ChannelFlags.REQUIRE_TAG),
                    forum_channel_can_create_post: c.default.can(T.Permissions.SEND_MESSAGES, r),
                    forum_channel_filter_tag_ids: E.default.getFilterTagIdsAnalytics(),
                    forum_channel_sort_order: E.default.getSortOrderAnalytics(r.id),
                    forum_channel_session_id: null != s ? s : p(r.id),
                    forum_channel_layout: E.default.getLayoutAnalytics(r.id),
                    forum_channel_default_sort_order: r.defaultSortOrder,
                    forum_channel_default_layout: r.defaultForumLayout
                } : null
            }

            function D(e) {
                var t, n, a, l, o, c, _;
                let {
                    channelId: f,
                    sessionId: E
                } = e, h = d.default.getChannel(f);
                if (null == h || !h.isForumPost()) return null;
                let T = d.default.getChannel(h.parent_id);
                return null != T && T.isForumLikeChannel() ? {
                    ...O({
                        channelId: T.id,
                        sessionId: E
                    }),
                    thread_approximate_member_count: r.default.getMemberCount(f),
                    thread_approximate_message_count: u.default.getCount(f),
                    thread_archived: (null === (t = h.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
                    thread_locked: null !== (c = null === (n = h.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
                    thread_auto_archive_duration_minutes: null !== (_ = null === (a = h.threadMetadata) || void 0 === a ? void 0 : a.autoArchiveDuration) && void 0 !== _ ? _ : 0,
                    thread_approximate_creation_date: i.default.extractTimestamp(f),
                    forum_post_id: h.id,
                    forum_post_first_message_id: h.id,
                    forum_post_num_reactions: function(e) {
                        let t = N(e);
                        return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0)
                    }(h.id),
                    forum_post_num_unique_reactions: function(e) {
                        let t = N(e);
                        return null == t ? 0 : t.reactions.length
                    }(h.id),
                    forum_post_applied_tag_ids: function(e) {
                        var t, n;
                        let a = d.default.getChannel(e);
                        if (null == a) return [];
                        let i = d.default.getChannel(a.parent_id),
                            l = null == i ? void 0 : i.availableTags;
                        if (null == i || null == l) return [];
                        let s = new Set(l.map(e => e.id));
                        return null !== (n = null === (t = a.appliedTags) || void 0 === t ? void 0 : t.filter(e => s.has(e))) && void 0 !== n ? n : []
                    }(h.id),
                    forum_post_is_pinned: h.hasFlag(A.ChannelFlags.PINNED),
                    forum_post_is_new: null === (l = g.default.getReadStateSnapshotAnalytics(h.id)) || void 0 === l ? void 0 : l.isNew,
                    forum_post_is_unread: null === (o = g.default.getReadStateSnapshotAnalytics(h.id)) || void 0 === o ? void 0 : o.hasUnreads,
                    forum_post_is_following: s.default.hasJoined(h.id),
                    forum_post_attachment_mimetypes: function(e) {
                        var t;
                        let n = N(e);
                        return null == n ? [] : n.attachments.map(e => null !== (t = e.content_type) && void 0 !== t ? t : "unknown")
                    }(h.id)
                } : null
            }
        },
        688169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INCREASED_ACTIVITY_LIST_FORUM_LAYOUT: function() {
                    return l
                },
                useForumActivityExperiment: function() {
                    return s
                }
            });
            var a = n("943314"),
                i = n("531869");
            let l = 3;

            function s(e) {
                let t = i.default.useExperiment({
                        guildId: null != e ? e : "",
                        location: "9a247a_1"
                    }),
                    n = a.default.useExperiment({
                        location: "9a247a_2"
                    });
                return !!(t.enabled || n.enabled)
            }
        },
        889014: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("446674"),
                i = n("76393");

            function l() {
                return (0, a.useStateFromStores)([i.default], () => null != i.default.getRemoteSessionId() || null != i.default.getAwaitingRemoteSessionInfo())
            }
        },
        600798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InvalidKeywordError: function() {
                    return r
                },
                InvalidRegexPatternError: function() {
                    return u
                },
                AUTOMOD_ERROR_CODES: function() {
                    return d
                },
                getAutomodErrorMessageFromErrorResponse: function() {
                    return o
                },
                getAutomodErrorMessage: function() {
                    return c
                }
            });
            var a = n("979911"),
                i = n("42203"),
                l = n("49111"),
                s = n("782340");
            class r extends Error {}
            class u extends Error {}
            let d = new Set([l.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, l.AbortCodes.AUTOMOD_TITLE_BLOCKED, l.AbortCodes.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

            function o(e, t) {
                if (null == e) return null;
                let {
                    code: n,
                    message: a
                } = e;
                if (!d.has(n)) return null;
                if (null != a) return a;
                if (null == t) return null;
                let r = i.default.getChannel(t);
                return (null == r ? void 0 : r.isThread()) ? s.default.Messages.THREAD_AUTOMOD_ERROR : ((null == r ? void 0 : r.isForumPost()) || (null == r ? void 0 : r.isForumLikeChannel())) && (n === l.AbortCodes.AUTOMOD_TITLE_BLOCKED || n === l.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) ? s.default.Messages.FORUM_POST_AUTOMOD_ERROR : null
            }

            function c(e, t) {
                let n = o(t);
                return null != n ? n : null == e ? s.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : function(e) {
                    let t = i.default.getChannel(e.message.channelId);
                    return (0, a.isMessageDataEdit)(e) ? s.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == t ? void 0 : t.isThread()) ? s.default.Messages.THREAD_AUTOMOD_ERROR : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? s.default.Messages.FORUM_POST_AUTOMOD_ERROR : s.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
                }(e)
            }
        },
        700179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canToggleCommunicationDisableOnUser: function() {
                    return d
                },
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                i = n("305961"),
                l = n("957255"),
                s = n("697218"),
                r = n("991170"),
                u = n("49111");

            function d(e, t) {
                let [n, a, d] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default, i.default, l.default], o = a.getGuild(e), c = n.getUser(t);
                if (null == o || null == c || c.isNonUserBot()) return !1;
                let _ = o.isOwner(c) || r.default.can({
                    permission: u.Permissions.ADMINISTRATOR,
                    user: c,
                    context: o
                });
                return !_ && d.canManageUser(u.Permissions.MODERATE_MEMBERS, c, o)
            }

            function o(e, t) {
                return (0, a.useStateFromStores)([s.default, i.default, l.default], () => d(e, t, [s.default, i.default, l.default]), [e, t])
            }
        },
        569808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("446674"),
                i = n("913144"),
                l = n("82339"),
                s = n("579033");
            let r = {},
                u = null;

            function d(e, t) {
                var n;
                let a = null !== (n = r[e]) && void 0 !== n ? n : {
                    code: e,
                    state: s.GuildTemplateStates.RESOLVING
                };
                t(a = {
                    ...a
                }), r = {
                    ...r,
                    [e]: a
                }
            }

            function o(e) {
                c(e.guildTemplate)
            }

            function c(e) {
                return d(e.code, t => {
                    let n = (0, l.default)(e);
                    for (let e in n) t[e] = n[e]
                })
            }

            function _(e) {
                return d(e.code, e => {
                    e.state = s.GuildTemplateStates.EXPIRED
                })
            }
            class f extends a.default.Store {
                getGuildTemplate(e) {
                    return null != e ? r[e] : null
                }
                getGuildTemplates() {
                    return r
                }
                getForGuild(e) {
                    for (let t in r) {
                        let n = r[t];
                        if ("sourceGuildId" in n && n.sourceGuildId === e && n.state !== s.GuildTemplateStates.EXPIRED) return n
                    }
                }
                getDisplayedGuildTemplateCode() {
                    return u
                }
            }
            f.displayName = "GuildTemplateStore";
            var E = new f(i.default, {
                GUILD_TEMPLATE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e;
                    r = {
                        ...r,
                        [t]: {
                            code: t,
                            state: s.GuildTemplateStates.RESOLVING
                        }
                    }
                },
                GUILD_TEMPLATE_CREATE_SUCCESS: o,
                GUILD_TEMPLATE_SYNC_SUCCESS: o,
                GUILD_TEMPLATE_RESOLVE_SUCCESS: o,
                GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function(e) {
                    let {
                        guildTemplates: t
                    } = e;
                    t.forEach(e => c(e))
                },
                GUILD_TEMPLATE_RESOLVE_FAILURE: _,
                GUILD_TEMPLATE_DELETE_SUCCESS: _,
                GUILD_TEMPLATE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = s.GuildTemplateStates.ACCEPTING
                    })
                },
                GUILD_TEMPLATE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, e => {
                        var t;
                        e.state = s.GuildTemplateStates.ACCEPTED, e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1
                    })
                },
                GUILD_TEMPLATE_ACCEPT_FAILURE: function(e) {
                    return d(e.code, e => {
                        e.state = s.GuildTemplateStates.RESOLVED
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
        52393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("773336");

            function i() {
                let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = window.GLOBAL_ENV.INVITE_HOST;
                return (0, a.isAndroid)() ? (i = location.host, e = "/invite/".concat(t)) : e = "/".concat(t), "".concat(n ? "".concat(location.protocol, "//") : "").concat(i).concat(e)
            }
        },
        143291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LocalMessageBackgroundSendingExperiment: function() {
                    return i
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
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
        379534: function(e, t, n) {
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
        40566: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("811022"),
                i = n("446674"),
                l = n("913144"),
                s = n("125273"),
                r = n("618421"),
                u = n("42203"),
                d = n("525065"),
                o = n("985365"),
                c = n("599110"),
                _ = n("49111");
            let f = new a.default("MessageRoundtripTrackerStore");

            function E(e) {
                return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
            }

            function g(e) {
                let t = u.default.getBasicChannel(e.channelId);
                if (null == t) {
                    f.warn("Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."));
                    return
                }
                if (Math.random() > .1) return;
                let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
                    a = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
                    i = (0, r.getSignalStrength)();
                c.default.track(_.AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, {
                    ...(0, s.default)(),
                    api_latency_ms: n,
                    gateway_latency_ms: a,
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.guild_id,
                    guild_size: d.default.getMemberCount(t.guild_id),
                    mobile_network_type: o.default.getType(),
                    ...null != i && {
                        mobile_signal_strength_level: i
                    }
                })
            }
            class h extends i.default.Store {
                recordMessageSendAttempt(e, t) {
                    let n = {
                        initialSendTimestamp: Date.now(),
                        apiResponseTimestamp: null,
                        gatewaySeenTimestamp: null,
                        channelId: e
                    };
                    this.pendingMessages.set(t, n), setTimeout(() => {
                        let e = this.pendingMessages.get(t);
                        null != e && (g(e), this.pendingMessages.delete(t))
                    }, 3e4)
                }
                recordMessageSendApiResponse(e) {
                    let t = this.pendingMessages.get(e);
                    if (null != t) {
                        let n = {
                            ...t,
                            apiResponseTimestamp: Date.now()
                        };
                        E(n) ? (g(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
                    }
                }
                recordGatewayResponse(e) {
                    let t = this.pendingMessages.get(e);
                    if (null != t) {
                        let n = {
                            ...t,
                            gatewaySeenTimestamp: Date.now()
                        };
                        E(n) ? (g(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
                    }
                }
                constructor(...e) {
                    super(...e), this.pendingMessages = new Map
                }
            }
            let T = new h(l.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        optimistic: t,
                        message: n
                    } = e, a = n.nonce;
                    !t && null != a && T.recordGatewayResponse(a)
                }
            });
            var A = T
        },
        994918: function(e, t, n) {
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
        815297: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createNonce: function() {
                    return o
                },
                userRecordToServer: function() {
                    return c
                },
                default: function() {
                    return _
                },
                createBotMessage: function() {
                    return f
                }
            });
            var a = n("627445"),
                i = n.n(a),
                l = n("256572"),
                s = n("766274"),
                r = n("697218"),
                u = n("299039"),
                d = n("49111");

            function o() {
                return u.default.fromTimestamp(Date.now())
            }

            function c(e) {
                let {
                    id: t,
                    username: n,
                    avatar: a,
                    discriminator: i,
                    bot: l,
                    globalName: s
                } = e;
                return {
                    id: t,
                    username: n,
                    avatar: a,
                    discriminator: i,
                    bot: l,
                    global_name: s
                }
            }

            function _(e) {
                let {
                    channelId: t,
                    content: n,
                    tts: a = !1,
                    type: u = d.MessageTypes.DEFAULT,
                    messageReference: _,
                    allowedMentions: f,
                    author: E,
                    flags: g,
                    nonce: h
                } = e, T = [];
                if (u === d.MessageTypes.REPLY && (i(null != _, "Replies must have a message reference"), null == f || f.replied_user)) {
                    let e = l.default.getMessageByReference(_);
                    (null == e ? void 0 : e.state) === l.ReferencedMessageState.LOADED && T.push(c(e.message.author))
                }
                return null == E && (E = r.default.getCurrentUser()), E instanceof s.default && (E = c(E)), i(null != E, "createMessage: author cannot be undefined"), {
                    id: null != h ? h : o(),
                    type: u,
                    content: n,
                    channel_id: t,
                    author: E,
                    attachments: [],
                    embeds: [],
                    pinned: !1,
                    mentions: T,
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: new Date().toISOString(),
                    state: d.MessageStates.SENDING,
                    tts: a,
                    message_reference: _,
                    flags: g,
                    nonce: h
                }
            }

            function f(e) {
                let {
                    channelId: t,
                    content: n,
                    embeds: a,
                    loggingName: i
                } = e;
                return {
                    id: o(),
                    type: d.MessageTypes.DEFAULT,
                    flags: d.MessageFlags.EPHEMERAL,
                    content: n,
                    channel_id: t,
                    author: {
                        id: d.LOCAL_BOT_ID,
                        username: "Clyde",
                        discriminator: d.NON_USER_BOT_DISCRIMINATOR,
                        avatar: "clyde",
                        bot: !0
                    },
                    attachments: [],
                    embeds: null != a ? a : [],
                    pinned: !1,
                    mentions: [],
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: new Date().toISOString(),
                    state: d.MessageStates.SENT,
                    tts: !1,
                    loggingName: i
                }
            }
        },
        168730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                logMessageSendFailure: function() {
                    return l
                }
            });
            var a = n("716241"),
                i = n("49111");

            function l(e) {
                var t, n;
                let l = null != e.fileItems ? function(e) {
                        var t;
                        return e.map(e => null !== (t = e.mimeType) && void 0 !== t ? t : "unknown")
                    }(e.fileItems) : [],
                    s = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
                    r = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
                (0, a.trackWithMetadata)(i.AnalyticEvents.SEND_MESSAGE_FAILURE, {
                    failure_code: r,
                    error_message: s,
                    attachment_mimetypes: l
                })
            }
        },
        129953: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackGuildInviteNotificationAction: function() {
                    return r
                },
                trackGuildInviteNotificationDismissed: function() {
                    return u
                }
            });
            var a, i, l = n("716241"),
                s = n("49111");

            function r() {
                l.default.trackWithMetadata(s.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
                    notification_type: a.REMINDER_NOTIFICATION,
                    action: i.GUILD_INVITE,
                    dismissed: !1
                })
            }

            function u() {
                l.default.trackWithMetadata(s.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
                    notification_type: a.REMINDER_NOTIFICATION,
                    action: i.GUILD_INVITE,
                    dismissed: !0
                })
            }(a || (a = {})).REMINDER_NOTIFICATION = "Reminder Notification", (i || (i = {})).GUILD_INVITE = "Guild Invite"
        },
        28007: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updatePoggermodeSettings: function() {
                    return u
                },
                updateCombo: function() {
                    return d
                },
                clearMessageCombo: function() {
                    return o
                },
                updateComboOnMessageSend: function() {
                    return c
                }
            });
            var a = n("913144"),
                i = n("271938"),
                l = n("880731"),
                s = n("943551"),
                r = n("767189");

            function u(e) {
                a.default.dispatch({
                    type: "POGGERMODE_SETTINGS_UPDATE",
                    settings: e
                });
                let t = {
                    ...l.default.getState(),
                    ...e
                };
                (0, r.default)(t)
            }

            function d(e) {
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_COMBO",
                    ...e
                })
            }

            function o(e) {
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: {
                        ...e,
                        displayed: !0
                    }
                })
            }

            function c(e, t) {
                var n;
                let l = i.default.getId(),
                    r = s.default.getUserCombo(l, e);
                null != r && a.default.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: {
                        combo: r,
                        channelId: e,
                        messageId: t,
                        displayed: !1
                    }
                });
                let u = null != r && (null == r ? void 0 : r.value) > 0 ? (null !== (n = null == r ? void 0 : r.multiplier) && void 0 !== n ? n : 0) + 1 : 1;
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_COMBO",
                    channelId: e,
                    userId: l,
                    multiplier: u,
                    value: 0
                })
            }
        },
        39141: function(e, t, n) {
            "use strict";
            var a, i, l, s, r, u;
            n.r(t), n.d(t, {
                ConfettiLocation: function() {
                    return a
                },
                ShakeLocation: function() {
                    return i
                },
                ShakeLevel: function() {
                    return l
                },
                SHAKE_STEPS: function() {
                    return o
                },
                SHAKE_STEP_DIVIDER: function() {
                    return c
                }
            }), (s = a || (a = {}))[s.CHAT_INPUT = 0] = "CHAT_INPUT", s[s.REACTION = 1] = "REACTION", s[s.MEMBER_USER = 2] = "MEMBER_USER", s[s.CALL_TILE = 3] = "CALL_TILE", (r = i || (i = {}))[r.CHAT_INPUT = 0] = "CHAT_INPUT", r[r.VOICE_USER = 1] = "VOICE_USER", r[r.MENTION = 2] = "MENTION", (u = l || (l = {}))[u.LEVEL_1 = 0] = "LEVEL_1", u[u.LEVEL_2 = 1] = "LEVEL_2", u[u.LEVEL_3 = 2] = "LEVEL_3", u[u.LEVEL_4 = 3] = "LEVEL_4", u[u.LEVEL_5 = 4] = "LEVEL_5";
            let d = {
                    [l.LEVEL_1]: [
                        [1, 1e-4],
                        [25, .05],
                        [50, .1],
                        [100, .5],
                        [250, 1],
                        [500, 2],
                        [1e3, 3],
                        [9001, 4]
                    ],
                    [l.LEVEL_2]: [
                        [1, 1e-4],
                        [25, .25],
                        [50, .5],
                        [100, 1],
                        [250, 2.5],
                        [500, 5],
                        [1e3, 7.5],
                        [9001, 10]
                    ],
                    [l.LEVEL_3]: [
                        [1, .001],
                        [25, .5],
                        [50, 1],
                        [100, 2],
                        [250, 4],
                        [500, 8],
                        [1e3, 12],
                        [9001, 16]
                    ],
                    [l.LEVEL_4]: [
                        [1, .25],
                        [25, .75],
                        [50, 1],
                        [100, 2],
                        [250, 4],
                        [500, 8],
                        [1e3, 20],
                        [9001, 50]
                    ],
                    [l.LEVEL_5]: [
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
                o = Object.keys(d).reduce((e, t) => ({
                    ...e,
                    [t]: d[t].map(e => {
                        let [t] = e;
                        return t
                    })
                }), {
                    [l.LEVEL_1]: [],
                    [l.LEVEL_2]: [],
                    [l.LEVEL_3]: [],
                    [l.LEVEL_4]: [],
                    [l.LEVEL_5]: []
                }),
                c = Object.keys(d).reduce((e, t) => ({
                    ...e,
                    [t]: d[t].map(e => {
                        let [t, n] = e;
                        return n
                    })
                }), {
                    [l.LEVEL_1]: [],
                    [l.LEVEL_2]: [],
                    [l.LEVEL_3]: [],
                    [l.LEVEL_4]: [],
                    [l.LEVEL_5]: []
                })
        },
        880731: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("917351"),
                i = n("446674"),
                l = n("913144"),
                s = n("39141");
            let r = !1,
                u = {
                    settingsVisible: !1,
                    enabled: !1,
                    combosEnabled: !0,
                    combosRequiredCount: 5,
                    comboSoundsEnabled: !0,
                    screenshakeEnabled: !0,
                    screenshakeEnabledLocations: {
                        [s.ShakeLocation.CHAT_INPUT]: !0,
                        [s.ShakeLocation.VOICE_USER]: !1,
                        [s.ShakeLocation.MENTION]: !1
                    },
                    shakeIntensity: 1,
                    confettiEnabled: !0,
                    confettiEnabledLocations: {
                        [s.ConfettiLocation.CHAT_INPUT]: !0,
                        [s.ConfettiLocation.REACTION]: !0,
                        [s.ConfettiLocation.MEMBER_USER]: !0,
                        [s.ConfettiLocation.CALL_TILE]: !0
                    },
                    confettiSize: 16,
                    confettiCount: 5,
                    warningSeen: !1
                },
                d = (0, a.cloneDeep)(u);
            class o extends i.default.DeviceSettingsStore {
                initialize(e) {
                    d = {
                        ...d,
                        ...e
                    }
                }
                getUserAgnosticState() {
                    return d
                }
                get settingsVisible() {
                    return d.settingsVisible
                }
                isEnabled() {
                    let {
                        confettiLocation: e,
                        shakeLocation: t
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null == e || d.confettiEnabled && d.confettiEnabledLocations[e], a = null == t || d.screenshakeEnabled && d.screenshakeEnabledLocations[t];
                    return this.settingsVisible && !r && d.enabled && n && a
                }
                get shakeIntensity() {
                    return this.isEnabled() ? d.shakeIntensity : 0
                }
                get combosRequiredCount() {
                    return this.isEnabled() ? d.combosRequiredCount : 0
                }
                get screenshakeEnabled() {
                    return d.screenshakeEnabled
                }
                get screenshakeEnabledLocations() {
                    return d.screenshakeEnabledLocations
                }
                get combosEnabled() {
                    return d.combosEnabled
                }
                get comboSoundsEnabled() {
                    return d.comboSoundsEnabled
                }
            }
            o.displayName = "PoggermodeSettingsStore", o.persistKey = "PoggermodeSettingsStore";
            var c = new o(l.default, {
                POGGERMODE_SETTINGS_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e;
                    d = {
                        ...d,
                        ...t
                    }
                },
                POGGERMODE_TEMPORARILY_DISABLED: function() {
                    r = !0
                }
            })
        },
        943551: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldTrackMessage: function() {
                    return A
                },
                default: function() {
                    return M
                }
            });
            var a = n("446674"),
                i = n("407846"),
                l = n("862337"),
                s = n("913144"),
                r = n("271938"),
                u = n("18494"),
                d = n("659500"),
                o = n("880731"),
                c = n("119035"),
                _ = n("39141"),
                f = n("49111");
            let E = new Set,
                g = new i.default(function(e) {
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
                    return "".concat(n, "-").concat(t)
                }),
                h = new i.default(function(e) {
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
                    return "".concat(n, "-").concat(a, "-").concat(t)
                }),
                T = e => {
                    let {
                        userId: t,
                        channelId: n
                    } = e;
                    return "".concat(t, "-").concat(n)
                };

            function A(e, t, n, a) {
                if (e !== t) return !1;
                let i = null == n;
                return !(i || a.has(n)) && (a.add(n), !0)
            }
            class m extends a.default.Store {
                initialize() {
                    this.waitFor(r.default, u.default)
                }
                getComboScore(e, t) {
                    let n = g.get(T({
                        userId: e,
                        channelId: t
                    }));
                    return null == n ? 0 : (0, c.getComboScore)(n)
                }
                getUserCombo(e, t) {
                    return g.get(T({
                        userId: e,
                        channelId: t
                    }))
                }
                isComboing(e, t) {
                    let n = this.getUserCombo(e, t);
                    return null != n && n.value >= o.default.combosRequiredCount && function(e) {
                        return null != e && (e.value > 0 || (null == e ? void 0 : e.multiplier) > 1)
                    }(n)
                }
                getMessageCombo(e) {
                    var t;
                    let n = h.get(e);
                    return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0
                }
                getMostRecentMessageCombo(e) {
                    let t = h.values(e);
                    return t[t.length - 1]
                }
                getUserComboShakeIntensity(e, t, n, a) {
                    let i = this.getUserCombo(e, t);
                    return null != i ? (0, c.getComboShakeIntensity)(i, a) * n : 0
                }
            }
            m.displayName = "PoggermodeStore";
            let p = new m(s.default, {
                POGGERMODE_UPDATE_COMBO: function(e) {
                    let {
                        type: t,
                        ...n
                    } = e;
                    if (!o.default.isEnabled()) return !1;
                    ! function e(t) {
                        var n, a, i, s, r, u;
                        let d = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            o = g.get(T(t)),
                            c = {
                                ...o,
                                ...t,
                                value: null !== (a = null !== (n = t.value) && void 0 !== n ? n : null == o ? void 0 : o.value) && void 0 !== a ? a : 0,
                                multiplier: Math.min(null !== (s = null !== (i = t.multiplier) && void 0 !== i ? i : null == o ? void 0 : o.multiplier) && void 0 !== s ? s : 1, 7),
                                decayInterval: null !== (r = null == o ? void 0 : o.decayInterval) && void 0 !== r ? r : new l.Interval
                            };
                        g.set(T(t), c), d && (null === (u = c.decayInterval) || void 0 === u || u.start(1e3, () => {
                            let t = g.get(T(c));
                            if (null != t) {
                                let a = c.multiplier !== t.multiplier && c.value !== t.value;
                                if (t.value <= 0 || a) {
                                    var n;
                                    null === (n = t.decayInterval) || void 0 === n || n.stop(), t.value <= 0 && (e({
                                        ...t,
                                        value: 0,
                                        multiplier: 1
                                    }), p.emitChange())
                                } else e({
                                    ...t,
                                    value: t.value - 1
                                }), p.emitChange()
                            }
                        }))
                    }(n)
                },
                POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
                    var t;
                    let {
                        comboMessage: n
                    } = e;
                    if (!o.default.isEnabled()) return !1;
                    t = n, h.set(t.messageId, t)
                },
                MESSAGE_CREATE: function(e) {
                    var t, n;
                    let {
                        channelId: a,
                        message: {
                            mentions: i,
                            author: l,
                            nonce: s
                        }
                    } = e;
                    if (!o.default.isEnabled()) return !1;
                    let u = r.default.getId();
                    if (!A(null == l ? void 0 : l.id, u, s, E)) return !1;
                    let h = g.get(T({
                        userId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "???",
                        channelId: a
                    }));
                    if (o.default.screenshakeEnabled && o.default.screenshakeEnabledLocations[_.ShakeLocation.MENTION] && null != i && null != i.find(e => e.id === u)) {
                        let e = null != h ? null !== (n = (0, c.getComboShakeIntensity)(h, _.ShakeLevel.LEVEL_4)) && void 0 !== n ? n : .001 : 4 * Math.random();
                        return d.ComponentDispatch.dispatch(f.ComponentActions.SHAKE_APP, {
                            duration: 1e3,
                            intensity: e
                        }), !0
                    }
                    return !1
                }
            });
            var M = p
        },
        119035: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getComboShakeIntensity: function() {
                    return s
                },
                getComboPercentage: function() {
                    return o
                },
                getComboStyles: function() {
                    return c
                },
                getComboScore: function() {
                    return _
                }
            });
            var a = n("39141"),
                i = n("49111");
            let l = function(e, t) {
                    let {
                        multiplier: n,
                        value: a
                    } = e, [i, l] = t, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, r = a * n;
                    if (r <= 0) return 0;
                    let u = i.reduce((e, t, n) => {
                        if (r > t) {
                            let e = l[n];
                            if (n + 1 === i.length) return l[n];
                            let a = i[n + 1],
                                s = l[n + 1];
                            return (r - t) / (a - t) * (s - e) + e
                        }
                        return r === t ? l[n] : e
                    }, 0);
                    return Math.min(s, u)
                },
                s = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.ShakeLevel.LEVEL_3;
                    return l(e, [a.SHAKE_STEPS[t], a.SHAKE_STEP_DIVIDER[t]], 1e5)
                },
                r = [
                    [1, .001],
                    [25, .3],
                    [100, .5],
                    [250, .8],
                    [500, .9],
                    [2500, .95],
                    [9001, 1]
                ],
                u = r.map(e => {
                    let [t] = e;
                    return t
                }),
                d = r.map(e => {
                    let [t, n] = e;
                    return n
                }),
                o = e => l(e, [u, d], 1),
                c = e => 1 === e ? {
                    color: i.Color.BRAND_500
                } : 2 === e || 3 === e ? {
                    color: i.Color.GREEN_360
                } : 4 === e || 5 === e ? {
                    color: i.Color.YELLOW_300,
                    square: !0
                } : 6 === e ? {
                    color: i.Color.RED_400,
                    square: !0
                } : {
                    color: i.Color.ORANGE_345,
                    flair: !0
                };

            function _(e) {
                var t;
                return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1)
            }
        },
        767189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("917351"),
                i = n.n(a),
                l = n("599110"),
                s = n("39141"),
                r = n("49111");

            function u(e) {
                switch (e) {
                    case s.ShakeLocation.CHAT_INPUT:
                        return "chat_input";
                    case s.ShakeLocation.MENTION:
                        return "mention";
                    case s.ShakeLocation.VOICE_USER:
                        return "voice_user"
                }
            }

            function d(e) {
                switch (e) {
                    case s.ConfettiLocation.CHAT_INPUT:
                        return "chat_input";
                    case s.ConfettiLocation.MEMBER_USER:
                        return "member_user";
                    case s.ConfettiLocation.REACTION:
                        return "reaction";
                    case s.ConfettiLocation.CALL_TILE:
                        return "call_tile"
                }
            }

            function o(e, t) {
                return Object.entries(e).filter(e => {
                    let [t, n] = e;
                    return n
                }).map(e => {
                    let [n] = e;
                    return t(Number.parseInt(n))
                })
            }
            let c = i.throttle(e => {
                let {
                    enabled: t,
                    combosEnabled: n,
                    combosRequiredCount: a,
                    screenshakeEnabled: i,
                    shakeIntensity: s,
                    screenshakeEnabledLocations: c,
                    confettiEnabled: _,
                    confettiSize: f,
                    confettiCount: E,
                    confettiEnabledLocations: g
                } = e;
                l.default.track(r.AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, {
                    enabled: t,
                    combos_enabled: n,
                    combos_required_count: a,
                    screenshake_enabled: i,
                    shake_intensity: s,
                    screenshake_enabled_locations: o(c, u),
                    confetti_enabled: _,
                    confetti_size: f,
                    confetti_count: E,
                    confetti_enabled_locations: o(g, d)
                })
            }, 5e3);
            var _ = c
        },
        793277: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("450911"),
                i = n("42203"),
                l = n("724210");

            function s(e) {
                if (e !== l.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return null;
                let t = i.default.getChannel(e);
                return null == t ? null : a.default.ensurePrivateChannel(t.recipients)
            }
        },
        256572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ReferencedMessageState: function() {
                    return i
                },
                default: function() {
                    return D
                }
            });
            var a, i, l = n("693566"),
                s = n.n(l),
                r = n("446674"),
                u = n("913144"),
                d = n("560208"),
                o = n("692038"),
                c = n("42203"),
                _ = n("377253"),
                f = n("49111");
            (a = i || (i = {}))[a.LOADED = 0] = "LOADED", a[a.NOT_LOADED = 1] = "NOT_LOADED", a[a.DELETED = 2] = "DELETED";
            let E = Object.freeze({
                    state: i.NOT_LOADED
                }),
                g = new Set;
            class h {
                handleCacheDisposed(e, t) {
                    this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.delete(e))
                }
                set(e, t) {
                    this._cachedMessages.set(e, t), !this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.add(e))
                }
                has(e) {
                    return this._cachedMessageIds.has(e)
                }
                get(e) {
                    return this._cachedMessages.get(e)
                }
                getCachedMessageIds() {
                    return this._cachedMessageIds
                }
                constructor() {
                    this._cachedMessages = new s({
                        max: 100,
                        dispose: (e, t) => this.handleCacheDisposed(e, t)
                    }), this._cachedMessageIds = new Set
                }
            }
            let T = new class e {
                has(e, t) {
                    var n, a;
                    return null !== (a = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== a && a
                }
                get(e, t) {
                    var n;
                    return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t)
                }
                set(e, t, n) {
                    let a = this._channelCaches.get(e);
                    null == a && (a = new h, this._channelCaches.set(e, a)), a.set(t, n)
                }
                updateExistingMessageIfCached(e) {
                    let t = this._channelCaches.get(e.channel_id);
                    return !!(null != t && t.has(e.id)) && (t.set(e.id, {
                        state: i.LOADED,
                        message: (0, o.createMessageRecord)(e)
                    }), !0)
                }
                deleteChannelCache(e) {
                    return this._channelCaches.delete(e)
                }
                retainWhere(e) {
                    let t = [];
                    for (let [n] of this._channelCaches) !e(n) && t.push(n);
                    for (let e of t) this.deleteChannelCache(e);
                    return t.length
                }
                getCachedMessageIdsForChannel(e) {
                    let t = this._channelCaches.get(e);
                    return null == t ? null : t.getCachedMessageIds()
                }
                clear() {
                    this._channelCaches.clear()
                }
                constructor() {
                    this._channelCaches = new Map
                }
            };

            function A(e) {
                let t = !1;
                if (T.updateExistingMessageIfCached(e) && (t = !0), f.MessageTypesWithLazyLoadedReferences.has(e.type)) {
                    let n = e.message_reference;
                    if (null == n) return t;
                    let a = n.message_id;
                    if (null == a) return t;
                    if ("referenced_message" in e) {
                        let t = e.referenced_message;
                        null != t ? (T.set(t.channel_id, t.id, {
                            state: i.LOADED,
                            message: (0, o.createMessageRecord)(t)
                        }), e.type === f.MessageTypes.THREAD_STARTER_MESSAGE && A(t)) : T.set(e.channel_id, a, {
                            state: i.DELETED
                        })
                    } else {
                        let e = _.default.getMessage(n.channel_id, a);
                        null != e ? T.set(n.channel_id, a, {
                            state: i.LOADED,
                            message: e
                        }) : T.set(n.channel_id, a, E)
                    }
                    t = !0
                }
                return t
            }

            function m(e, t) {
                let n = !1;
                for (let a of e) n = !1 !== t(a) || n;
                return n
            }

            function p(e) {
                let {
                    messages: t
                } = e;
                return m(t, e => A(e))
            }

            function M(e) {
                return T.deleteChannelCache(e.channel.id)
            }

            function S(e, t) {
                if (!T.has(e, t)) return !1;
                T.set(e, t, {
                    state: i.DELETED
                })
            }

            function C() {
                T.clear()
            }

            function I(e) {
                let {
                    firstMessages: t
                } = e;
                return null != t && m(t, e => A(e))
            }
            class N extends r.default.Store {
                initialize() {
                    this.waitFor(_.default, c.default)
                }
                getMessageByReference(e) {
                    let t;
                    return null != e && (t = T.get(e.channel_id, e.message_id)), null != t ? t : E
                }
                getMessage(e, t) {
                    var n;
                    return null !== (n = T.get(e, t)) && void 0 !== n ? n : E
                }
                getReplyIdsForChannel(e) {
                    let t;
                    return null != e && (t = T.getCachedMessageIdsForChannel(e)), null != t ? t : g
                }
            }
            N.displayName = "ReferencedMessageStore";
            let O = new N(u.default, {
                CACHE_LOADED: function(e) {
                    let {
                        messages: t
                    } = e;
                    return m(Object.values(t), e => m(Object.values(e), e => A(e)))
                },
                LOCAL_MESSAGES_LOADED: p,
                LOAD_MESSAGES_SUCCESS: p,
                LOAD_MESSAGES_AROUND_SUCCESS: p,
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t
                    } = e;
                    return m(t, e => m(e, e => A(e)))
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e, n = (0, d.getMessagesFromGuildFeedFetch)(t);
                    return m(n, e => A(e))
                },
                LOAD_THREADS_SUCCESS: I,
                LOAD_ARCHIVED_THREADS_SUCCESS: I,
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    return m(Object.values(t), e => {
                        let {
                            first_message: t
                        } = e;
                        return null != t && A(t)
                    })
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    return !!_.default.getMessages(t.channel_id).ready && A(t)
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e, n = t.id, a = t.channel_id;
                    if (!T.has(a, n)) return !1;
                    let l = T.get(a, n);
                    if (null == l || l.state !== i.LOADED) return !1;
                    T.set(a, n, {
                        state: i.LOADED,
                        message: (0, o.updateMessageRecord)(l.message, t)
                    })
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e;
                    return S(n, t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e;
                    return m(t, e => S(n, e))
                },
                CREATE_PENDING_REPLY: function(e) {
                    let {
                        message: t
                    } = e;
                    T.set(t.channel_id, t.id, {
                        state: i.LOADED,
                        message: t
                    })
                },
                CHANNEL_DELETE: M,
                THREAD_DELETE: M,
                GUILD_DELETE: function() {
                    let e = T.retainWhere(e => null != c.default.getChannel(e));
                    if (0 === e) return !1
                },
                CONNECTION_OPEN: C,
                LOGOUT: C
            });
            var D = O
        },
        821343: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                PAGE_SIZE: function() {
                    return T
                },
                default: function() {
                    return P
                }
            });
            var i = n("917351"),
                l = n.n(i),
                s = n("335710"),
                r = n("249654"),
                u = n("446674"),
                d = n("913144"),
                o = n("786742"),
                c = n("867965"),
                _ = n("233069"),
                f = n("42203"),
                E = n("660478"),
                g = n("449008"),
                h = n("755624");
            let T = 25,
                A = !1,
                m = !0,
                p = !1,
                M = !1,
                S = null,
                C = s.ThreadSortOrder.LATEST_ACTIVITY,
                I = [],
                N = 0;

            function O() {
                A = !1, m = !0, p = !1, M = !1, S = null, C = s.ThreadSortOrder.LATEST_ACTIVITY, a = new Set, N = 0, I = []
            }

            function D(e, t) {
                return t === s.ThreadSortOrder.LATEST_ACTIVITY ? E.default.lastMessageId(e.id) : e.id
            }

            function v() {
                if (null == S) return !1;
                let e = !p,
                    t = f.default.getChannel(I[I.length - 1]),
                    n = null == t ? null : D(t, C);
                I = l(f.default.getAllThreadsForParent(S)).filter(e => e.isArchivedThread()).filter(t => {
                    var i;
                    if (0 !== a.size && (null === (i = t.appliedTags) || void 0 === i ? void 0 : i.some(e => a.has(e))) !== !0) return !1;
                    if (e || null == n) return !0;
                    {
                        let e = null == t ? null : D(t, C);
                        return null != e && r.default.compare(e, n) >= 0
                    }
                }).sort((e, t) => r.default.compare(D(e, C), D(t, C))).map(e => e.id).reverse().value()
            }

            function R(e) {
                if (!(I.indexOf(e) >= 0)) return !1;
                I = I.filter(t => t !== e)
            }
            let L = [];
            class y extends u.default.Store {
                initialize() {
                    this.waitFor(f.default, h.default, E.default)
                }
                get canLoadMore() {
                    return p && !A && !M
                }
                get nextOffset() {
                    return N
                }
                get isInitialLoad() {
                    return m
                }
                isLoading(e, t, n) {
                    return S === e && C === t && (0, g.areSetsEqual)(a, n) ? A : (O(), !1)
                }
                getThreads(e, t, n) {
                    return S === e && C === t && (0, g.areSetsEqual)(a, n) ? I : L
                }
            }
            y.displayName = "ArchivedThreadsStore";
            var P = new y(d.default, {
                CONNECTION_OPEN: O,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return R(t.id)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return S === t.parent_id && !!(0, o.isForumPostPinned)(t.id) && void R(t.id)
                },
                CHANNEL_DELETE: function(e) {
                    if (e.channel.id !== S) return !1;
                    O()
                },
                LOAD_ARCHIVED_THREADS: function(e) {
                    (e.channelId !== S || e.sortOrder !== C || !(0, g.areSetsEqual)(e.tagFilter, a)) && O(), S = e.channelId, C = e.sortOrder, a = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), A = !0, m = !1
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    if (e.channelId !== S || e.sortOrder !== C || !(0, g.areSetsEqual)(e.tagFilter, a)) return !1;
                    let t = e.threads.filter(e => _.ALL_CHANNEL_TYPES.has(e.type)).map(e => e.id);
                    I = I.concat(t);
                    let n = f.default.getChannel(S);
                    null != n && n.isForumLikeChannel() && (0, c.trackForumMorePostsLoaded)({
                        guildId: n.guild_id,
                        channelId: n.id,
                        numArchivedThreads: I.length,
                        hasMoreThreads: e.hasMore,
                        filterTagIds: Array.from(e.tagFilter),
                        sortOrder: e.sortOrder
                    }), v(), p = e.hasMore, N = e.offset + T, A = !1, m = !1
                },
                LOAD_ARCHIVED_THREADS_FAIL: function(e) {
                    if (e.channelId !== S || e.sortOrder !== C || !(0, g.areSetsEqual)(e.tagFilter, a)) return !1;
                    A = !1, M = !0, m = !1
                },
                RESORT_THREADS: function(e) {
                    return (null == S || null == e.channelId || S === e.channelId) && v()
                }
            })
        },
        263024: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("843117"),
                i = n("872717"),
                l = n("913144"),
                s = n("404118"),
                r = n("295426"),
                u = n("716241"),
                d = n("507217"),
                o = n("233069"),
                c = n("271938"),
                _ = n("42203"),
                f = n("957255"),
                E = n("449008"),
                g = n("821343"),
                h = n("755624"),
                T = n("487269"),
                A = n("25932"),
                m = n("49111"),
                p = n("724210"),
                M = n("782340");

            function S(e, t) {
                return i.default.patch({
                    url: m.Endpoints.CHANNEL(e.id),
                    body: t
                }).then(t => (l.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: (0, o.createChannelRecordFromServer)(t.body)
                }), e.isForumPost() && null != e.parent_id && l.default.dispatch({
                    type: "RESORT_THREADS",
                    channelId: e.parent_id
                }), t))
            }

            function C(e, t) {
                l.default.dispatch({
                    type: "THREAD_MEMBER_LOCAL_UPDATE",
                    id: e.id,
                    guildId: e.getGuildId(),
                    userId: c.default.getId(),
                    isJoining: t
                })
            }
            var I = {
                archiveThread(e, t) {
                    let n = {
                        archived: !0
                    };
                    return t && (n.locked = !0), S(e, n)
                },
                async lockThread(e) {
                    let t = e.isArchivedThread();
                    return t && await this.unarchiveThread(e, !1), S(e, {
                        locked: !0,
                        archived: t
                    })
                },
                async unlockThread(e) {
                    let t = e.isArchivedThread();
                    return t && await this.unarchiveThread(e, !0), S(e, {
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
                        return await S(e, n)
                    } catch (e) {
                        var i, l;
                        throw (null === (i = e.body) || void 0 === i ? void 0 : i.code) === m.AbortCodes.TOO_MANY_THREADS ? s.default.show({
                            title: a ? M.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : M.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: a ? M.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : M.default.Messages.TOO_MANY_THREADS_MESSAGE
                        }) : (null === (l = e.body) || void 0 === l ? void 0 : l.code) === m.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? s.default.show({
                            title: M.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: M.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                        }) : 429 === e.status ? s.default.show({
                            title: a ? M.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : M.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: M.default.Messages.RATE_LIMITED
                        }) : s.default.show({
                            title: M.default.Messages.ERROR,
                            body: M.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        }), e
                    }
                },
                async unarchiveThreadIfNecessary(e) {
                    var t;
                    let n = _.default.getChannel(e),
                        a = f.default.can(m.Permissions.MANAGE_THREADS, n);
                    null != n && n.isArchivedThread() && (a || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0) && await this.unarchiveThread(n, !1)
                },
                setInvitable: (e, t) => S(e, {
                    invitable: t
                }),
                async joinThread(e, t) {
                    e.isForumPost() && C(e, !0);
                    try {
                        return await i.default.post({
                            url: m.Endpoints.THREAD_MEMBER(e.id),
                            query: {
                                location: t
                            }
                        })
                    } catch (t) {
                        var n;
                        if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === m.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                            let t = e.isForumPost();
                            s.default.show({
                                title: t ? M.default.Messages.CANNOT_JOIN_FORUM_POST : M.default.Messages.CANNOT_JOIN_THREAD,
                                body: t ? M.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : M.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                            })
                        } else s.default.show({
                            title: M.default.Messages.ERROR,
                            body: M.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        });
                        e.isForumPost() && C(e, !1)
                    }
                },
                async addMember(e, t, n) {
                    try {
                        return await i.default.post({
                            url: m.Endpoints.THREAD_MEMBER(e.id, t),
                            query: {
                                location: n
                            }
                        })
                    } catch (t) {
                        var a;
                        if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === m.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                            let t = e.isForumPost();
                            s.default.show({
                                title: t ? M.default.Messages.CANNOT_ADD_USER_TO_FORUM_POST : M.default.Messages.CANNOT_ADD_USER_TO_THREAD,
                                body: t ? M.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : M.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                            })
                        } else s.default.show({
                            title: M.default.Messages.ERROR,
                            body: M.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        })
                    }
                },
                leaveThread: (e, t) => (e.isForumPost() && C(e, !1), i.default.delete({
                    url: m.Endpoints.THREAD_MEMBER(e.id),
                    query: {
                        location: t
                    }
                })),
                removeMember: (e, t, n) => i.default.delete({
                    url: m.Endpoints.THREAD_MEMBER(e.id, t),
                    query: {
                        location: n
                    }
                }),
                setAutoArchiveDuration: (e, t) => i.default.patch({
                    url: m.Endpoints.CHANNEL(e.id),
                    body: {
                        auto_archive_duration: t
                    }
                }),
                pin(e) {
                    let t = e.flags | p.ChannelFlags.PINNED;
                    this.updateFlags(e, t, e.isArchivedThread())
                },
                unpin(e) {
                    let t = e.flags & ~p.ChannelFlags.PINNED;
                    this.updateFlags(e, t)
                },
                async updateFlags(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    l.default.dispatch({
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
                        await i.default.patch({
                            url: m.Endpoints.CHANNEL(e.id),
                            body: a
                        })
                    } catch {
                        l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: e
                        })
                    }
                },
                async replacePin(e, t) {
                    let n = e.merge({
                            flags: e.flags & ~p.ChannelFlags.PINNED
                        }),
                        a = t.merge({
                            flags: t.flags | p.ChannelFlags.PINNED
                        });
                    l.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: n
                    }), l.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: a
                    }), await this.unarchiveThreadIfNecessary(e.id), await this.unarchiveThreadIfNecessary(t.id);
                    try {
                        await i.default.patch({
                            url: m.Endpoints.CHANNEL(e.id),
                            body: {
                                flags: e.flags & ~p.ChannelFlags.PINNED
                            }
                        })
                    } catch {
                        l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: e
                        }), l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        });
                        return
                    }
                    try {
                        await i.default.patch({
                            url: m.Endpoints.CHANNEL(t.id),
                            body: {
                                flags: t.flags | p.ChannelFlags.PINNED
                            }
                        })
                    } catch {
                        l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }
                },
                openThreadCreationForMobile(e, t, n) {
                    (0, u.trackWithMetadata)(m.AnalyticEvents.THREAD_CREATION_STARTED, {
                        location: n,
                        channel_id: e.id,
                        guild_id: e.guild_id
                    }), r.default.changeThreadSettings(e.id, {
                        parentMessageId: t,
                        isPrivate: !1,
                        location: n
                    }), null == t && (0, d.setActiveCommand)({
                        channelId: e.id,
                        command: null,
                        section: null
                    })
                },
                async setNotificationSettings(e, t) {
                    return (0, T.trackThreadNotificationSettingsUpdated)(e, t), !h.default.hasJoined(e.id) && await this.joinThread(e, "Change Notification Settings"), i.default.patch({
                        url: m.Endpoints.THREAD_MEMBER_SETTINGS(e.id),
                        body: t
                    })
                },
                loadArchivedThreads(e, t, n, s, r) {
                    !g.default.isLoading(t, n, s) && (l.default.dispatch({
                        type: "LOAD_ARCHIVED_THREADS",
                        channelId: t,
                        sortOrder: n,
                        tagFilter: s
                    }), i.default.get({
                        url: m.Endpoints.THREAD_SEARCH(t),
                        query: {
                            archived: !0,
                            sort_by: "last_message_time",
                            sort_order: "desc",
                            limit: g.PAGE_SIZE,
                            tag: s.size > 0 ? Array.from(s).join(",") : void 0,
                            tag_setting: a.ThreadSearchTagSetting.MATCH_SOME,
                            offset: r
                        },
                        retries: 2
                    }).then(a => {
                        let {
                            body: {
                                threads: i,
                                members: u,
                                has_more: d,
                                first_messages: o,
                                most_recent_messages: c
                            }
                        } = a;
                        l.default.dispatch({
                            type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                            guildId: e,
                            channelId: t,
                            offset: r,
                            sortOrder: n,
                            tagFilter: s,
                            threads: i,
                            firstMessages: o,
                            mostRecentMessages: c,
                            members: (null != u ? u : []).map(e => (0, A.default)(e)),
                            owners: i.map(e => e.owner).filter(E.isNotNullish),
                            hasMore: d
                        })
                    }, () => {
                        l.default.dispatch({
                            type: "LOAD_ARCHIVED_THREADS_FAIL",
                            channelId: t,
                            sortOrder: n,
                            tagFilter: s
                        })
                    }))
                },
                async searchThreads(e, t, n, s) {
                    let r = null != s && s.size > 0 ? Array.from(s).join(",") : void 0,
                        {
                            body: {
                                threads: u,
                                members: d,
                                first_messages: o,
                                most_recent_messages: c
                            }
                        } = await i.default.get({
                            url: m.Endpoints.THREAD_SEARCH(t),
                            query: {
                                name: n,
                                tag: r,
                                tag_setting: a.ThreadSearchTagSetting.MATCH_SOME
                            }
                        });
                    return l.default.dispatch({
                        type: "LOAD_THREADS_SUCCESS",
                        threads: u,
                        members: d,
                        guildId: e,
                        firstMessages: o,
                        mostRecentMessages: c
                    }), u.map(e => e.id)
                }
            }
        },
        252862: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getAutoArchiveOptions: function() {
                    return r
                },
                getAutoArchiveDuration: function() {
                    return u
                }
            });
            var a = n("661201"),
                i = n.n(a);
            n("866227");
            var l = n("648564"),
                s = n("782340");

            function r() {
                return [{
                    label: s.default.Messages.AUTO_ARCHIVE_DURATION_1_HOUR,
                    value: 60
                }, {
                    label: s.default.Messages.AUTO_ARCHIVE_DURATION_24_HOURS,
                    value: 1440
                }, {
                    label: s.default.Messages.AUTO_ARCHIVE_DURATION_3_DAYS,
                    value: 4320
                }, {
                    label: s.default.Messages.AUTO_ARCHIVE_DURATION_1_WEEK,
                    value: 10080
                }]
            }

            function u(e, t) {
                var n;
                return null !== (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) && void 0 !== n ? n : l.DEFAULT_AUTO_ARCHIVE_DURATION
            }
            i(() => r().map(e => e.value))
        },
        730498: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PrivateThreadMode: function() {
                    return i
                },
                usePrivateThreadMode: function() {
                    return D
                },
                getIsPrivate: function() {
                    return v
                },
                getDefaultThreadName: function() {
                    return R
                },
                useCreateThreadCommon: function() {
                    return L
                },
                createThread: function() {
                    return y
                },
                useCreateForumPostCommon: function() {
                    return P
                }
            });
            var a, i, l = n("884691"),
                s = n("872717"),
                r = n("913144"),
                u = n("404118"),
                d = n("295426"),
                o = n("819689"),
                c = n("81594"),
                _ = n("670902"),
                f = n("867965"),
                E = n("884351"),
                g = n("804888"),
                h = n("42203"),
                T = n("474643"),
                A = n("377253"),
                m = n("401848"),
                p = n("568734"),
                M = n("252862"),
                S = n("300322"),
                C = n("24337"),
                I = n("648564"),
                N = n("49111"),
                O = n("782340");

            function D(e) {
                let t = (0, S.useCanStartPublicThread)(e),
                    n = (0, S.useCanStartPrivateThread)(e);
                return n ? t ? i.Enabled : i.PrivateOnly : i.Disabled
            }

            function v(e, t) {
                var n;
                if (t === i.PrivateOnly) return !0;
                return null !== (n = e.isPrivate) && void 0 !== n && n
            }

            function R(e, t) {
                var n, a, i, l;
                let s = null == t ? null : A.default.getMessage(e.id, t),
                    r = null !== (i = null == s ? void 0 : null === (a = s.embeds) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== i ? i : "";
                if ("" !== r) return r.length > 40 ? r.substring(0, 40) + "..." : r;
                {
                    let t = E.default.unparse(null !== (l = null == s ? void 0 : s.content) && void 0 !== l ? l : "", e.id, !0),
                        n = (0, C.default)(t.split("\n")[0], !0),
                        a = [];
                    for (;;) {
                        let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
                        if (null == e || null == e.index) {
                            a.push(n);
                            break
                        }
                        a.push(n.substring(0, e.index)), a.push(e[0]), n = n.substring(e.index + e[0].length)
                    }
                    let i = a[0];
                    for (let e = 1; e < a.length; e++) {
                        let t = i + a[e];
                        if (t.length > 40) break;
                        i = t
                    }
                    return i.length > 40 && (i = i.substring(0, 40) + "..."), i
                }
            }

            function L(e) {
                let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: a,
                    privateThreadMode: i,
                    location: r,
                    onThreadCreated: u,
                    useDefaultThreadName: _,
                    uploadHandler: f
                } = e;
                return l.useCallback(async (e, l, g) => {
                    var A;
                    let m = null == n,
                        p = v(a, i),
                        S = null !== (A = a.name) && void 0 !== A ? A : "";
                    if ("" === S && _) {
                        let e = R(t, n);
                        S = "" !== e ? e : O.default.Messages.THREAD
                    }
                    let C = (0, M.getAutoArchiveDuration)(t),
                        I = h.default.getChannel(n),
                        D = await U(t, () => {
                            let e = null != n ? N.Endpoints.CHANNEL_MESSAGE_THREADS(t.id, n) : N.Endpoints.CHANNEL_THREADS(t.id);
                            return s.default.post({
                                url: e,
                                body: {
                                    name: S,
                                    type: p ? N.ChannelTypes.PRIVATE_THREAD : t.type === N.ChannelTypes.GUILD_ANNOUNCEMENT ? N.ChannelTypes.ANNOUNCEMENT_THREAD : N.ChannelTypes.PUBLIC_THREAD,
                                    auto_archive_duration: C,
                                    location: r
                                }
                            })
                        });
                    D !== I && (d.default.clearDraft(t.id, T.DraftType.ThreadSettings), d.default.clearDraft(t.id, T.DraftType.FirstThreadMessage), null == u || u(D), (m || e.length > 0 || null != l && l.length > 0 || null != g && g.length > 0) && function(e, t, n, a, i) {
                        if (null != i && null != a && a.length > 0) i(e, a, t, n);
                        else if (null != n && n.length > 0) o.default.sendStickers(e.id, n, t);
                        else o.default.sendMessage(e.id, E.default.parse(e, t))
                    }(D, e, l, g, f)), c.default.clearAll(t.id, T.DraftType.FirstThreadMessage)
                }, [t, n, a, u, i, r, _, f])
            }

            function y(e, t, n, a, i) {
                return U(e, () => s.default.post({
                    url: N.Endpoints.CHANNEL_THREADS(e.id),
                    body: {
                        name: t,
                        type: n,
                        auto_archive_duration: a,
                        location: i
                    }
                }))
            }

            function P(e) {
                let {
                    parentChannel: t,
                    name: n,
                    appliedTags: a,
                    onThreadCreated: i,
                    upload: r
                } = e;
                return l.useCallback(async (e, l, u) => {
                    let o = 0,
                        [_, E] = (0, g.default)(e);
                    _ && (e = E, o = (0, p.addFlag)(o, N.MessageFlags.SUPPRESS_NOTIFICATIONS));
                    let h = (0, M.getAutoArchiveDuration)(t, null),
                        A = N.Endpoints.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                        m = {
                            name: n,
                            auto_archive_duration: h,
                            applied_tags: a,
                            message: {
                                content: e,
                                sticker_ids: l,
                                flags: 0 !== o ? o : void 0
                            }
                        },
                        S = await U(t, () => null != u && u.length > 0 ? r(A, m, u) : s.default.post({
                            url: A,
                            body: m
                        }));
                    return d.default.clearDraft(t.id, T.DraftType.ThreadSettings), d.default.clearDraft(t.id, T.DraftType.FirstThreadMessage), c.default.clearAll(t.id, T.DraftType.FirstThreadMessage), (0, f.trackForumPostCreated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        postId: S.id
                    }), null == i || i(S), S
                }, [t, n, i, a, r])
            }(a = i || (i = {}))[a.Disabled = 1] = "Disabled", a[a.Enabled = 2] = "Enabled", a[a.PrivateOnly = 3] = "PrivateOnly";
            async function U(e, t) {
                let n;
                let a = e.isForumLikeChannel();
                try {
                    n = await t(), null == n.body ? u.default.show({
                        title: O.default.Messages.ERROR,
                        body: O.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                    }) : (r.default.dispatch({
                        type: "SLOWMODE_RESET_COOLDOWN",
                        slowmodeType: m.SlowmodeType.CreateThread,
                        channelId: e.id
                    }), r.default.dispatch({
                        type: "THREAD_CREATE_LOCAL",
                        channelId: n.body.id
                    }))
                } catch (t) {
                    var i, l, s, d, o, c;
                    if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === N.AbortCodes.TOO_MANY_THREADS) u.default.show({
                        title: a ? O.default.Messages.CANNOT_CREATE_FORUM_POST : O.default.Messages.CANNOT_CREATE_THREAD,
                        body: a ? O.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : O.default.Messages.TOO_MANY_THREADS_MESSAGE
                    });
                    else if ((null === (l = t.body) || void 0 === l ? void 0 : l.code) === N.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) u.default.show({
                        title: O.default.Messages.CANNOT_CREATE_THREAD,
                        body: O.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                    });
                    else if ((null === (s = t.body) || void 0 === s ? void 0 : s.code) === N.AbortCodes.SLOWMODE_RATE_LIMITED) {
                        let n = null !== (c = t.body.retry_after) && void 0 !== c ? c : 0;
                        n > 0 && r.default.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: e.id,
                            slowmodeType: m.SlowmodeType.CreateThread,
                            cooldownMs: 1e3 * n
                        })
                    } else if (429 === t.status) u.default.show({
                        title: a ? O.default.Messages.CANNOT_CREATE_FORUM_POST : O.default.Messages.CANNOT_CREATE_THREAD,
                        body: O.default.Messages.RATE_LIMITED
                    });
                    else if (I.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) throw t;
                    else {
                        if (I.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (o = t.body) || void 0 === o ? void 0 : o.code)) return new Promise((e, n) => {
                            null == t.body && n(), _.default.addConditionalChangeListener(() => {
                                let t = _.default.getAndDeleteMostRecentUserCreatedThreadId();
                                if (null != t) {
                                    let a = h.default.getChannel(t);
                                    return r.default.wait(() => {
                                        null == a ? n() : e(a)
                                    }), !1
                                }
                            })
                        });
                        u.default.show({
                            title: O.default.Messages.ERROR,
                            body: O.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        })
                    }
                }
                return new Promise((e, t) => {
                    null == n.body && t(), h.default.addConditionalChangeListener(() => {
                        let t = h.default.getChannel(n.body.id);
                        if (null != t) return r.default.wait(() => {
                            e(t)
                        }), !1
                    })
                })
            }
        },
        300322: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceInThreadsExperiment: function() {
                    return h
                },
                useCanStartPublicThread: function() {
                    return T
                },
                computeCanStartPublicThread: function() {
                    return A
                },
                useCanStartPrivateThread: function() {
                    return m
                },
                useCanStartThread: function() {
                    return p
                },
                useCanViewThreadForMessage: function() {
                    return S
                },
                useHasActiveThreads: function() {
                    return C
                },
                useCanManageThread: function() {
                    return I
                },
                useCanUnarchiveThread: function() {
                    return D
                },
                canUnarchiveThread: function() {
                    return v
                },
                useIsActiveChannelOrUnarchivableThread: function() {
                    return R
                },
                getIsActiveChannelOrUnarchivableThread: function() {
                    return L
                },
                computeIsReadOnlyThread: function() {
                    return y
                },
                useIsThreadModerator: function() {
                    return U
                },
                useCanJoinThreadVoice: function() {
                    return b
                },
                useIsNonModInLockedThread: function() {
                    return F
                }
            });
            var a = n("917351"),
                i = n.n(a),
                l = n("316693"),
                s = n("446674"),
                r = n("296892"),
                u = n("889014"),
                d = n("913491"),
                o = n("233069"),
                c = n("271938"),
                _ = n("42203"),
                f = n("957255"),
                E = n("401690"),
                g = n("49111");
            let h = (0, r.default)({
                id: "2022-07_voice_in_threads",
                label: "Voice in Threads",
                kind: "guild",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function T(e, t) {
                let n = (0, s.useStateFromStores)([f.default], () => {
                    let t = e.isForumLikeChannel() ? g.Permissions.SEND_MESSAGES : l.default.combine(g.Permissions.CREATE_PUBLIC_THREADS, g.Permissions.READ_MESSAGE_HISTORY);
                    return f.default.can(t, e)
                }, [e]);
                return M(n, e, t)
            }

            function A(e, t) {
                let n = e.isForumLikeChannel() ? g.Permissions.SEND_MESSAGES : l.default.combine(g.Permissions.CREATE_PUBLIC_THREADS, g.Permissions.READ_MESSAGE_HISTORY),
                    a = f.default.can(n, e);
                return M(a, e, t)
            }

            function m(e) {
                let t = (0, s.useStateFromStores)([f.default], () => f.default.can(l.default.combine(g.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
                return e.type === g.ChannelTypes.GUILD_TEXT && M(t, e)
            }

            function p(e) {
                let t = T(e),
                    n = m(e);
                return t || n
            }

            function M(e, t, n) {
                return !(__OVERLAY__ || !e || !o.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(g.MessageFlags.HAS_THREAD) || (0, d.default)(n))) && !0
            }

            function S(e) {
                let t = (0, s.useStateFromStores)([_.default], () => _.default.getChannel(e.id), [e]),
                    n = (0, s.useStateFromStores)([f.default], () => f.default.can(g.Permissions.VIEW_CHANNEL, t), [t]);
                return function(e, t, n) {
                    return !!t.hasFlag(g.MessageFlags.HAS_THREAD) && null != n && !!e || !1
                }(n, e, t)
            }

            function C(e) {
                return (0, s.useStateFromStoresObject)([E.default, f.default], () => {
                    let t = E.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = E.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        a = E.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        l = i(n).some(e => f.default.can(g.Permissions.VIEW_CHANNEL, e.channel)),
                        s = i(t).some(e => !(e.channel.id in n) && f.default.can(g.Permissions.VIEW_CHANNEL, e.channel)),
                        r = i(a).some(e => f.default.can(g.Permissions.VIEW_CHANNEL, e));
                    return {
                        hasActiveThreads: l || s || r,
                        hasMoreActiveThreads: r || s
                    }
                })
            }

            function I(e) {
                let t = (0, s.useStateFromStores)([_.default], () => _.default.getChannel(null == e ? void 0 : e.parent_id)),
                    n = (0, s.useStateFromStores)([f.default], () => null != t && f.default.can(g.Permissions.MANAGE_THREADS, t), [t]),
                    a = (0, s.useStateFromStores)([c.default], () => c.default.getId());
                return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === a || !1))
            }

            function N(e, t) {
                return null != e && t.can(g.Permissions.SEND_MESSAGES_IN_THREADS, e)
            }

            function O(e, t, n) {
                var a;
                return !!(null != e && e.isThread()) && ((null === (a = e.threadMetadata) || void 0 === a ? void 0 : a.locked) ? n : t)
            }

            function D(e) {
                let t = (0, s.useStateFromStores)([f.default], () => N(e, f.default)),
                    n = U(e);
                return O(e, t, n)
            }

            function v(e) {
                let t = N(e, f.default),
                    n = function(e) {
                        return P(e, f.default)
                    }(e);
                return O(e, t, n)
            }

            function R(e) {
                var t;
                let n = (0, s.useStateFromStores)([f.default], () => null != e && f.default.can(g.Permissions.SEND_MESSAGES_IN_THREADS, e));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
            }

            function L(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && f.default.can(g.Permissions.SEND_MESSAGES_IN_THREADS, e))
            }

            function y(e) {
                let t = f.default.can(g.Permissions.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function P(e, t) {
                return null != e && t.can(g.Permissions.MANAGE_THREADS, e)
            }

            function U(e) {
                return (0, s.useStateFromStores)([f.default], () => P(e, f.default))
            }

            function b(e) {
                let t = (0, u.default)(),
                    n = (0, s.useStateFromStores)([f.default], () => f.default.can(g.Permissions.CONNECT, e)),
                    a = R(e),
                    i = h.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !t && e.isVocalThread() && i && n && a
            }

            function F(e) {
                let t = U(e);
                return e.isLockedThread() && !t
            }
        },
        800843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("917351"),
                i = n.n(a),
                l = n("446674"),
                s = n("913144"),
                r = n("560208"),
                u = n("233069"),
                d = n("42203");
            let o = {};

            function c(e) {
                var t;
                null === (t = e.threads) || void 0 === t || t.forEach(_)
            }

            function _(e) {
                if (!u.ALL_CHANNEL_TYPES.has(e.type)) return !1;
                let t = function(e) {
                    if (!(e.id in o)) {
                        var t, n;
                        o[e.id] = {
                            guildId: e.guild_id,
                            parentId: e.parent_id,
                            memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
                            memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
                        }
                    }
                    return o[e.id]
                }(e);
                null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview)
            }

            function f(e) {
                let {
                    channel: t
                } = e;
                return _(t)
            }

            function E(e) {
                let {
                    threads: t
                } = e;
                t.forEach(g)
            }

            function g(e) {
                if (null != e && !(e.id in o)) {
                    let t = d.default.getChannel(e.id);
                    if (null != t) return _(t), !0
                }
                return !1
            }
            class h extends l.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getMemberCount(e) {
                    var t, n;
                    return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null
                }
                getMemberIdsPreview(e) {
                    var t, n;
                    return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null
                }
                getInitialOverlayState() {
                    return o
                }
            }
            h.displayName = "ThreadMembersStore";
            var T = new h(s.default, {
                CONNECTION_OPEN: function(e) {
                    o = {}, e.guilds.forEach(c)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        threadMembers: t
                    } = e;
                    o = {
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
                    t = n.id, o = i.omitBy(o, e => e.guildId === t)
                },
                CHANNEL_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    t = n.id, o = i.omitBy(o, e => e.parentId === t)
                },
                THREAD_CREATE: f,
                THREAD_UPDATE: f,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t
                    } = e;
                    t.forEach(_)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let t = o[e.id];
                    if (null == t) return !1;
                    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
                },
                SEARCH_FINISH: function(e) {
                    let t = !1;
                    for (let n of e.messages)
                        for (let e of n) t = g(e.thread) || t;
                    return e.threads.forEach(e => {
                        t = g(e) || t
                    }), t
                },
                LOAD_THREADS_SUCCESS: E,
                LOAD_ARCHIVED_THREADS_SUCCESS: E,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    delete o[t.id]
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
                    for (let e of (0, r.getThreadsFromGuildFeedFetch)(t)) n = g(e) || n;
                    return n
                }
            })
        },
        610730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var a = n("917351"),
                i = n.n(a),
                l = n("446674"),
                s = n("913144"),
                r = n("560208"),
                u = n("692038"),
                d = n("233069"),
                o = n("719926"),
                c = n("766274"),
                _ = n("42203"),
                f = n("377253"),
                E = n("648564"),
                g = n("49111");
            let h = new Set,
                T = {},
                A = {};

            function m(e, t) {
                d.ALL_CHANNEL_TYPES.has(e.type) && p(function(e) {
                    if (!(e.id in T)) {
                        var t;
                        T[e.id] = {
                            guildId: e.guild_id,
                            parentId: e.parent_id,
                            count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
                            mostRecentRawMessage: null,
                            mostRecentMessage: null
                        }
                    }
                    return T[e.id]
                }(e), t)
            }

            function p(e, t) {
                var n;
                let a = (null !== (n = A[e.parentId]) && void 0 !== n ? n : 0) + 1;
                A[e.parentId] = a, t(e)
            }

            function M(e) {
                var t;
                null === (t = e.threads) || void 0 === t || t.forEach(S)
            }

            function S(e) {
                m(e, t => {
                    var n;
                    null != e.messageCount && (t.count = e.messageCount);
                    let a = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
                    null != e.lastMessageId && (null == a ? void 0 : a.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
                })
            }

            function C(e) {
                if (null != e && !(e.id in T)) {
                    let t = _.default.getChannel(e.id);
                    if (null != t) return S(t), !0
                }
                return !1
            }

            function I(e) {
                let {
                    channel: t
                } = e;
                S(t)
            }

            function N(e) {
                let {
                    threads: t
                } = e;
                t.forEach(C)
            }
            class O extends l.default.Store {
                initialize() {
                    this.waitFor(_.default, f.default)
                }
                getCount(e) {
                    var t, n;
                    return null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
                }
                getMostRecentMessage(e) {
                    var t, n;
                    let a = T[e];
                    return null == a ? null : (null == a.mostRecentMessage && null != a.mostRecentRawMessage && (a.mostRecentMessage = null !== (t = f.default.getMessage(e, a.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, u.createMessageRecord)(a.mostRecentRawMessage), a.mostRecentRawMessage = null), null !== (n = a.mostRecentMessage) && void 0 !== n ? n : null)
                }
                getChannelThreadsVersion(e) {
                    return A[e]
                }
                getInitialOverlayState() {
                    return T
                }
            }
            O.displayName = "ThreadMessageStore";
            var D = new O(s.default, {
                CONNECTION_OPEN: function(e) {
                    A = {}, h.clear(), e.guilds.forEach(M)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        threadMessages: t
                    } = e;
                    for (let e in T = {
                            ...t
                        }) {
                        let n = t[e].mostRecentMessage;
                        null != n && (t[e].mostRecentMessage = new o.default({
                            ...n,
                            author: new c.default(n.author)
                        }))
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    M(t)
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    t = n.id, T = i.omitBy(T, e => {
                        let n = e.guildId === t;
                        return n && delete A[e.parentId], n
                    })
                },
                THREAD_CREATE: I,
                THREAD_UPDATE: I,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t,
                        mostRecentMessages: n
                    } = e;
                    t.forEach(S), null == n || n.forEach(e => {
                        let t = _.default.getChannel(e.channel_id);
                        null != t && e.type !== g.MessageTypes.THREAD_STARTER_MESSAGE && m(t, t => {
                            t.mostRecentRawMessage = e, t.mostRecentMessage = null
                        })
                    })
                },
                LOAD_THREADS_SUCCESS: N,
                LOAD_ARCHIVED_THREADS_SUCCESS: N,
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t,
                        threads: n
                    } = e;
                    for (let e of t)
                        for (let t of e) C(t.thread);
                    n.forEach(C)
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    delete T[t.id]
                },
                CHANNEL_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    t = n.id, T = i.omitBy(T, e => e.parentId === t), delete A[t]
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        optimistic: n,
                        isPushNotification: a,
                        sendMessageOptions: i
                    } = e;
                    if (n || a || null != i) return !1;
                    let l = _.default.getChannel(t.channel_id);
                    if (null == l || !d.THREAD_CHANNEL_TYPES.has(l.type) || ! function(e, t) {
                            return !(t.type === g.MessageTypes.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === e.id) && !0
                        }(l, t)) return !1;
                    m(l, e => {
                        e.count = Math.min(e.count + 1, E.MAX_THREAD_MESSAGE_COUNT), e.mostRecentRawMessage = t, e.mostRecentMessage = null
                    })
                },
                MESSAGE_UPDATE: function(e) {
                    var t;
                    let {
                        message: n
                    } = e, a = T[n.channel_id], i = null !== (t = null == a ? void 0 : a.mostRecentRawMessage) && void 0 !== t ? t : null == a ? void 0 : a.mostRecentMessage;
                    if (null == a || null == i || i.id !== n.id) return !1;
                    p(a, e => {
                        null != e.mostRecentMessage && (e.mostRecentMessage = (0, u.updateMessageRecord)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, u.updateServerMessage)(e.mostRecentRawMessage, n))
                    })
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, a = T[n];
                    if (null == a) return !1;
                    let i = n !== t,
                        l = !h.has(t);
                    p(a, e => {
                        var n;
                        let a = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        null != a && a.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = i && l ? Math.max(e.count - 1, 0) : e.count, h.add(t)
                    })
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, a = T[n];
                    if (null == a) return !1;
                    let i = t.filter(e => {
                        let t = n !== e,
                            a = !h.has(e);
                        return t && a
                    }).length;
                    i > 0 && p(a, e => {
                        var n;
                        let a = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        null != a && t.includes(a.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= i, t.forEach(e => h.add(e))
                    })
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let t = !1;
                    for (let n of e.messages) t = C(n.thread) || t;
                    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
                    let n = _.default.getChannel(e.channelId);
                    if (null == n || !d.THREAD_CHANNEL_TYPES.has(n.type)) return t;
                    m(n, t => {
                        if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
                        else {
                            var n;
                            let a = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
                            t.count = e.messages.length >= E.MAX_THREAD_MESSAGE_COUNT ? E.MAX_THREAD_MESSAGE_COUNT : t.count, (null == a ? void 0 : a.type) !== g.MessageTypes.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = a, t.mostRecentMessage = null)
                        }
                    })
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e, n = !1;
                    for (let e of (0, r.getThreadsFromGuildFeedFetch)(t)) n = C(e) || n;
                    return n
                }
            })
        },
        487269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getTimestampString: function() {
                    return g.default
                },
                trackThreadBrowserTab: function() {
                    return A
                },
                trackThreadBrowserOpened: function() {
                    return m
                },
                trackActiveThreadsPopoutOpened: function() {
                    return p
                },
                trackThreadNotificationSettingsUpdated: function() {
                    return M
                },
                useLastMessageTimestamp: function() {
                    return S
                }
            });
            var a = n("866227"),
                i = n.n(a),
                l = n("446674"),
                s = n("716241"),
                r = n("701916"),
                u = n("660478"),
                d = n("282109"),
                o = n("599110"),
                c = n("568734"),
                _ = n("34676"),
                f = n("299039"),
                E = n("755624"),
                g = n("319126"),
                h = n("648564"),
                T = n("49111");

            function A() {
                (0, s.trackWithMetadata)(T.AnalyticEvents.THREAD_BROWSER_TAB_CHANGED)
            }

            function m() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
                (0, s.trackWithMetadata)(T.AnalyticEvents.OPEN_MODAL, {
                    type: "Thread Browser",
                    location_section: e
                })
            }

            function p() {
                o.default.track(T.AnalyticEvents.OPEN_POPOUT, {
                    type: "Active Threads Popout"
                })
            }

            function M(e, t) {
                var n, a;
                let i = (0, r.collectThreadMetadata)(e);
                if (null == i) return;
                let l = e.getGuildId(),
                    s = e.parent_id,
                    u = (0, _.getCurrentChannelSettings)(l, s),
                    f = e => {
                        if ((0, c.hasFlag)(e, h.ThreadMemberFlags.ALL_MESSAGES)) return _.MessageNotificationSettings[T.UserNotificationSettings.ALL_MESSAGES];
                        if ((0, c.hasFlag)(e, h.ThreadMemberFlags.ONLY_MENTIONS)) return _.MessageNotificationSettings[T.UserNotificationSettings.ONLY_MENTIONS];
                        if ((0, c.hasFlag)(e, h.ThreadMemberFlags.NO_MESSAGES)) return _.MessageNotificationSettings[T.UserNotificationSettings.NO_MESSAGES];
                        return _.MessageNotificationSettings[T.UserNotificationSettings.NULL]
                    },
                    g = null !== (n = E.default.flags(e.id)) && void 0 !== n ? n : 0,
                    A = f(g),
                    m = E.default.isMuted(e.id),
                    p = (0, _.muteConfigToTimestamp)(E.default.getMuteConfig(e.id)),
                    {
                        can_send_message: M,
                        ...S
                    } = i,
                    C = {
                        ...S,
                        channel_id: e.id,
                        guild_id: l,
                        parent_id: s,
                        channel_type: e.type,
                        has_interacted_with_thread: (g & h.ThreadMemberFlags.HAS_INTERACTED) != 0,
                        parent_is_muted: d.default.isGuildOrCategoryOrChannelMuted(l, s),
                        old_thread_notification_setting: A,
                        new_thread_notification_setting: null != t.flags ? f(t.flags) : A,
                        parent_notification_setting: u.channel_message_notification_settings,
                        old_thread_is_muted: m,
                        new_thread_is_muted: null !== (a = t.muted) && void 0 !== a ? a : m,
                        old_thread_muted_until: p,
                        new_thread_muted_until: null != t.mute_config ? (0, _.muteConfigToTimestamp)(t.mute_config) : p
                    };
                o.default.track(T.AnalyticEvents.THREAD_NOTIFICATION_SETTINGS_UPDATED, C)
            }
            n("782340");
            let S = e => {
                var t, n;
                let a = (0, l.useStateFromStores)([u.default], () => u.default.lastMessageId(e.id)),
                    s = null != a ? f.default.extractTimestamp(a) : null,
                    r = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
                    d = null != r ? i(r).valueOf() : null;
                return null !== (n = null != s ? s : d) && void 0 !== n ? n : f.default.extractTimestamp(e.id)
            }
        },
        319126: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("866227"),
                i = n.n(a),
                l = n("782340");
            let s = 3600,
                r = 24 * s,
                u = 30 * r,
                d = 12 * u,
                o = () => ({
                    seconds: l.default.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
                    minutes: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
                    hours: l.default.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
                    days: l.default.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
                    months: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
                    years: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
                }),
                c = (e, t) => null != t && null != t[e],
                _ = (e, t, n) => {
                    var a, i, l;
                    return c(e, t) ? null !== (i = null !== (a = t[e]) && void 0 !== a ? a : null == n ? void 0 : n[e]) && void 0 !== i ? i : null : null !== (l = null == n ? void 0 : n[e]) && void 0 !== l ? l : null
                };
            var f = function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = i().diff(i(e), "s"),
                    l = null != t ? t() : void 0,
                    c = o(),
                    f = (e, t) => {
                        let a = _(e, l, n ? c : void 0);
                        return null == a ? null : "string" == typeof a ? a : a.format({
                            count: t
                        })
                    };
                if (a < 60) {
                    let e = (null == l ? void 0 : l.seconds) != null ? f("seconds", a) : f("minutes", 1);
                    if (null != e) return e
                }
                if (a < s) {
                    let e = f("minutes", Math.floor(a / 60));
                    if (null != e) return e
                }
                if (a < r) {
                    let e = f("hours", Math.floor(a / s));
                    if (null != e) return e
                }
                if (a < u) {
                    let e = f("days", Math.floor(a / r));
                    if (null != e) return e
                }
                if (a < d) {
                    let e = f("months", Math.floor(a / u));
                    if (null != e) return e
                }
                if (a >= d && (null == l ? void 0 : l.years) != null) {
                    let e = f("years", Math.floor(a / d));
                    if (null != e) return e
                }
                return i(e).format("LL")
            }
        },
        24337: function(e, t, n) {
            "use strict";

            function a(e, t) {
                return t && (e = e.trim()), e
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        10802: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i = n("446674"),
                l = n("913144"),
                s = n("386451"),
                r = n("662285"),
                u = n("271938"),
                d = n("982108"),
                o = n("42203"),
                c = n("341542"),
                _ = n("26989"),
                f = n("305961"),
                E = n("945956"),
                g = n("27618"),
                h = n("18494"),
                T = n("162771"),
                A = n("49111");
            let m = new s.default((e, t) => {
                (null != f.default.getGuild(e) || c.default.isUnavailable(e)) && l.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_FLUSH",
                    guildId: e,
                    subscriptions: t
                })
            });

            function p(e, t) {
                m.forEach(n => {
                    var i;
                    n !== T.default.getGuildId() && n !== E.default.getGuildId() && n !== (null === (i = o.default.getChannel(h.default.getChannelId())) || void 0 === i ? void 0 : i.getGuildId()) && (null == a || a.guildId !== n) && (m.clearWithoutFlushing(n, e), t && l.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: n,
                        subscriptions: m.get(n)
                    }))
                })
            }

            function M(e, t) {
                return m.subscribeToGuild(e), null != t && d.default.getSection(t) === A.ChannelSections.MEMBERS && S(e, t, s.DEFAULT_RANGES)
            }

            function S(e, t, n) {
                let a = o.default.getChannel(t);
                if (null == a) return !1;
                let i = a.getGuildId();
                return (i !== e && e === A.FAVORITES && m.subscribeToGuild(i), null != a && a.isThread()) ? a.type === A.ChannelTypes.ANNOUNCEMENT_THREAD ? m.subscribeChannel(i, a.parent_id, n) : !!a.isActiveThread() && m.subscribeThreadMemberList(i, t, h.default.getChannelId()) : m.subscribeChannel(i, t, n)
            }

            function C(e) {
                let {
                    type: t
                } = e;
                "CONNECTION_OPEN" === t && p(!0, !1);
                let n = T.default.getGuildId();
                null != n && M(n, h.default.getChannelId(n)), m.forEach(e => {
                    null == f.default.getGuild(e) ? m.clearWithoutFlushing(e, !0) : l.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: e,
                        subscriptions: m.get(e)
                    })
                })
            }

            function I(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e, a = c.default.isUnavailable(t);
                return !a && M(t, n)
            }

            function N() {
                return M(T.default.getGuildId(), h.default.getChannelId())
            }

            function O() {
                let e = r.default.getSyncingWith();
                if (null == e) null != a && (m.unsubscribeUser(a.guildId, a.userId), a = null);
                else {
                    let {
                        userId: t
                    } = e;
                    if (null != a && a.userId === t || g.default.isFriend(t)) return !1;
                    let n = _.default.memberOf(t);
                    if (0 === n.length) return !1;
                    let [i] = n;
                    a = {
                        guildId: i,
                        userId: t
                    }, m.subscribeUser(i, t)
                }
                return !1
            }
            class D extends i.default.Store {
                initialize() {
                    this.waitFor(o.default, f.default, T.default, h.default, E.default, u.default, d.default), this.syncWith([r.default], O), this.syncWith([d.default], N)
                }
                getSubscribedThreadIds() {
                    return m.getSubscribedThreadIds()
                }
                isSubscribedToThreads(e) {
                    return m.isSubscribedToThreads(e)
                }
            }
            D.displayName = "GuildSubscriptionsStore";
            var v = new D(l.default, {
                CONNECTION_OPEN: C,
                CONNECTION_RESUMED: C,
                CONNECTION_CLOSED: function() {
                    p(!1, !1)
                },
                IDLE: function(e) {
                    let {
                        idle: t
                    } = e;
                    if (!t) return !1;
                    p(!1, !0)
                },
                LOGOUT: function() {
                    m.reset()
                },
                VOICE_CHANNEL_SELECT: I,
                CHANNEL_SELECT: I,
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    t.id === T.default.getGuildId() && N()
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    m.clearWithoutFlushing(t.id, !0)
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        e !== u.default.getId() && m.subscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        m.unsubscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        ranges: a
                    } = e;
                    return S(t, n, a)
                },
                GUILD_SUBSCRIPTIONS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return m.subscribeToGuild(t)
                },
                CHANNEL_PRELOAD: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return M(t, n)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return t.isArchivedThread() ? m.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && h.default.getChannelId() === t.id && void m.subscribeThreadMemberList(t.guild_id, t.id, h.default.getChannelId())
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return m.unsubscribeThreadMemberList(t.guild_id, t.id)
                },
                THREAD_LIST_SYNC: N
            })
        },
        401848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlowmodeType: function() {
                    return i
                },
                default: function() {
                    return h
                }
            });
            var a, i, l = n("446674"),
                s = n("862337"),
                r = n("913144"),
                u = n("42203"),
                d = n("957255"),
                o = n("49111");
            (a = i || (i = {}))[a.SendMessage = 0] = "SendMessage", a[a.CreateThread = 1] = "CreateThread";
            let c = {
                [i.SendMessage]: {},
                [i.CreateThread]: {}
            };

            function _(e, t, n) {
                if (function(e, t) {
                        null != c[t][e.id] && (c[t][e.id].timer.stop(), delete c[t][e.id])
                    }(e, t), function(e, t) {
                        return t === i.SendMessage ? d.default.can(o.Permissions.MANAGE_CHANNELS, e) || d.default.can(o.Permissions.MANAGE_MESSAGES, e) : d.default.can(o.Permissions.MANAGE_THREADS, e)
                    }(e, t) || n <= 0) return;
                let a = n + Date.now();
                c[t][e.id] = {
                    rateLimitPerUser: e.rateLimitPerUser,
                    cooldownMs: n,
                    cooldownEndTimestamp: a,
                    timer: new s.Timeout
                }, c[t][e.id].timer.start(1e3, () => {
                    r.default.dispatch({
                        type: "SLOWMODE_SET_COOLDOWN",
                        channelId: e.id,
                        slowmodeType: t,
                        cooldownMs: Math.max(a - Date.now(), 0)
                    })
                }, !0)
            }

            function f(e, t) {
                let n = u.default.getChannel(e);
                if (null == n) return !1;
                _(n, t, 0 === n.rateLimitPerUser ? 0 : 1e3 * n.rateLimitPerUser + 100)
            }

            function E(e) {
                let {
                    file: t
                } = e, n = u.default.getChannel(t.channelId);
                return null != n && _(n, i.SendMessage, 0)
            }
            class g extends l.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                getSlowmodeCooldownGuess(e, t) {
                    let n = c[null != t ? t : i.SendMessage][e];
                    return null != n ? n.cooldownMs : 0
                }
            }
            g.displayName = "SlowmodeStore";
            var h = new g(r.default, {
                SLOWMODE_RESET_COOLDOWN: function(e) {
                    let {
                        channelId: t,
                        slowmodeType: n
                    } = e;
                    return f(t, n)
                },
                SLOWMODE_SET_COOLDOWN: function(e) {
                    let {
                        channelId: t,
                        slowmodeType: n,
                        cooldownMs: a
                    } = e, i = u.default.getChannel(t);
                    if (null == i) return !1;
                    _(i, n, 0 === a ? 0 : a + 100)
                },
                UPLOAD_START: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return f(t, i.SendMessage)
                },
                UPLOAD_FAIL: E,
                UPLOAD_CANCEL_REQUEST: E,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    [i.SendMessage, i.CreateThread].forEach(e => {
                        for (let a of t) {
                            var n;
                            let t = c[e][a.id],
                                i = a.rateLimitPerUser;
                            if (null == t || t.rateLimitPerUser === i) continue;
                            let l = Math.min(null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n ? n : 0, 1e3 * i);
                            _(a, e, l)
                        }
                    })
                },
                LOGOUT: function() {
                    [i.SendMessage, i.CreateThread].forEach(e => {
                        Object.keys(c[e]).forEach(t => c[e][t].timer.stop()), c[e] = {}
                    })
                }
            })
        },
        34676: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessageNotificationSettings: function() {
                    return c
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return _
                },
                muteConfigToTimestamp: function() {
                    return E
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return g
                },
                getCurrentGuildSettings: function() {
                    return h
                },
                getManyCurrentGuildSettings: function() {
                    return T
                },
                getCurrentChannelSettings: function() {
                    return A
                },
                getManyCurrentChannelSettings: function() {
                    return m
                }
            });
            var a, i, l = n("716241"),
                s = n("42203"),
                r = n("282109"),
                u = n("568734"),
                d = n("49111"),
                o = n("397336");
            (a = i || (i = {})).GUILD = "guild", a.CHANNEL = "channel";
            let c = Object.freeze({
                [d.UserNotificationSettings.ALL_MESSAGES]: "All",
                [d.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                [d.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                [d.UserNotificationSettings.NULL]: null
            });

            function _(e, t, n, a) {
                var s, r;
                let _ = function(e) {
                        var t, n, a, i, l, s, r;
                        let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            d = null != u.mute_config && null != u.mute_config.end_time ? new Date(u.mute_config.end_time).getTime() : e.guild_muted_until,
                            o = null != u.message_notifications ? c[u.message_notifications] : e.guild_message_notification_settings;
                        return {
                            guild_muted_until: d,
                            guild_flags: null !== (t = u.flags) && void 0 !== t ? t : e.guild_flags,
                            guild_is_muted: null !== (n = u.muted) && void 0 !== n ? n : e.guild_is_muted,
                            guild_message_notification_settings: o,
                            guild_suppress_roles: null !== (a = u.suppress_roles) && void 0 !== a ? a : e.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (i = u.mobile_push) && void 0 !== i ? i : e.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (l = u.notify_highlights) && void 0 !== l ? l : e.guild_notify_highlights,
                            guild_suppress_everyone: null !== (s = u.suppress_everyone) && void 0 !== s ? s : e.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (r = u.mute_scheduled_events) && void 0 !== r ? r : e.guild_scheduled_events_muted
                        }
                    },
                    E = _(n),
                    g = _(h(e), t),
                    T = f(E, g, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    A = null !== (s = T("guild_flags")) && void 0 !== s ? s : 0,
                    m = (null !== (r = g.guild_flags) && void 0 !== r ? r : 0) ^ A,
                    p = 0 === (0, u.removeFlags)(m, o.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, o.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                l.default.trackWithMetadata(d.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...g,
                    location: a,
                    guild_id: e,
                    update_type: i.GUILD,
                    guild_flags_old: T("guild_flags"),
                    guild_is_muted_old: T("guild_is_muted"),
                    guild_suppress_roles_old: T("guild_suppress_roles"),
                    guild_notify_highlights_old: T("guild_notify_highlights"),
                    guild_suppress_everyone_old: T("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: T("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: T("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: T("guild_message_notification_settings"),
                    is_opt_in_only_change: p
                })
            }

            function f(e, t, n) {
                return a => {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[a] !== t[a] ? e[a] : void 0
                }
            }

            function E(e) {
                return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
            }

            function g(e, t, n, a, r) {
                var _, g;
                let h = function(t) {
                        var n, a;
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = null !== (n = i.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                            s = null != i.message_notifications ? c[i.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                            r = null == e ? null : !0 === l || null != s;
                        return {
                            channel_is_muted: l,
                            channel_is_overridden: r,
                            channel_flags: null !== (a = i.flags) && void 0 !== a ? a : null == t ? void 0 : t.channel_flags,
                            channel_message_notification_settings: s,
                            channel_muted_until: E(i.mute_config)
                        }
                    },
                    T = h(a),
                    m = h(A(e, t), n),
                    p = f(T, m, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    M = s.default.getChannel(t),
                    S = null !== (_ = p("channel_flags")) && void 0 !== _ ? _ : 0,
                    C = (null !== (g = m.channel_flags) && void 0 !== g ? g : 0) ^ S,
                    I = 0 === (0, u.removeFlags)(C, o.ChannelNotificationSettingsFlags.FAVORITED, o.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                l.default.trackWithMetadata(d.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...m,
                    location: r,
                    guild_id: e,
                    channel_id: t,
                    update_type: i.CHANNEL,
                    parent_id: null != M ? M.parent_id : null,
                    channel_flags_old: p("channel_flags"),
                    channel_is_muted_old: p("channel_is_muted"),
                    channel_muted_until_old: p("channel_muted_until"),
                    channel_is_overridden_old: p("channel_is_overridden"),
                    channel_message_notification_settings_old: p("channel_message_notification_settings"),
                    is_opt_in_only_change: I
                })
            }

            function h(e) {
                let t = r.default.isMuted(e),
                    n = r.default.getMuteConfig(e);
                return {
                    guild_suppress_everyone: r.default.isSuppressEveryoneEnabled(e),
                    guild_suppress_roles: r.default.isSuppressRolesEnabled(e),
                    guild_scheduled_events_muted: r.default.isMuteScheduledEventsEnabled(e),
                    guild_is_muted: t,
                    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
                    guild_receive_mobile_push: r.default.isMobilePushEnabled(e),
                    guild_message_notification_settings: c[r.default.getMessageNotifications(e)],
                    guild_notify_highlights: r.default.getNotifyHighlights(e),
                    guild_flags: r.default.getGuildFlags(e)
                }
            }

            function T(e) {
                let t = new Map;
                return e.forEach(e => t.set(e, h(e))), t
            }

            function A(e, t) {
                let n = r.default.isChannelMuted(e, t),
                    a = r.default.getChannelMuteConfig(e, t);
                return {
                    channel_is_muted: n,
                    channel_muted_until: null != a && null != a.end_time ? new Date(a.end_time).getTime() : null,
                    channel_message_notification_settings: c[r.default.getChannelMessageNotifications(e, t)],
                    channel_flags: r.default.getGuildChannelFlags(e, t)
                }
            }

            function m(e, t) {
                let n = new Map;
                return t.forEach(t => n.set(t, A(e, t))), n
            }
        },
        843117: function(e, t, n) {
            "use strict";
            var a, i;
            n.r(t), n.d(t, {
                ThreadSearchTagSetting: function() {
                    return a
                }
            }), (i = a || (a = {})).MATCH_ALL = "match_all", i.MATCH_SOME = "match_some"
        }
    }
]);
//# sourceMappingURL=b42e98967de7685ed1a1.js.map