(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49326"], {
        330853: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("312916"),
                r = {
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
                    return eM
                }
            });
            var a = n("356056"),
                r = n("87627"),
                i = n("21189"),
                l = n("227094"),
                u = n("154005"),
                o = n("761020"),
                s = n("324415");
            n("357629"), n("633702"), n("266796"), n("411104"), n("814951"), n("568603"), n("128242"), n("69485"), n("293114"), n("26686"), n("363505"), n("462848"), n("230036"), n("191489"), n("789020");
            var d = n("996855"),
                c = n("454836"),
                f = n("24135"),
                _ = n("312916"),
                E = n("237091"),
                h = n("53575"),
                v = n("244180"),
                g = n("366598"),
                m = n("763617"),
                p = n("217638"),
                A = n("741312"),
                S = n("230773"),
                T = n("691529"),
                y = n("992545"),
                C = n("841869"),
                M = n("706608"),
                I = n("354831"),
                L = n("315607"),
                N = n("740303"),
                O = n("442409"),
                R = n("860165"),
                D = n("702532"),
                b = n("572291"),
                U = n("642201"),
                P = n("55567"),
                w = n("608425"),
                G = n("924093"),
                k = n("818147"),
                F = n("10245"),
                H = n("232356"),
                x = n("23787"),
                V = n("278018");
            n("687008");
            var B = n("416463"),
                Y = n("361820"),
                W = n("614681"),
                K = n("267951"),
                q = n("167555"),
                j = n("311545"),
                z = n("262047"),
                Q = n("731865");
            n("276982");
            var X = n("327271"),
                J = n("869817"),
                Z = n("162256"),
                $ = n("197905"),
                ee = n("565639"),
                et = n("417223"),
                en = n("606929"),
                ea = n("232733"),
                er = n("632706"),
                ei = n("417698"),
                el = n("871831"),
                eu = n("328470"),
                eo = n("984362"),
                es = n("313652"),
                ed = n("312630"),
                ec = n("488867"),
                ef = n("84819"),
                e_ = n("992888"),
                eE = n("467006"),
                eh = n("551835"),
                ev = n("846475"),
                eg = n("30175"),
                em = new C.default("MessageActionCreators"),
                ep = new C.default("MessageQueue"),
                eA = !1,
                eS = function() {
                    function e() {
                        (0, r._)(this, e), this.completed = !1
                    }
                    return e.prototype.markComplete = function() {
                        this.completed = !0
                    }, e
                }();

            function eT(e) {
                var t = e.inviteKey,
                    n = e.channelId,
                    a = e.messageId,
                    r = e.location,
                    u = e.suggested,
                    o = void 0 === u ? null : u,
                    s = e.overrideProperties,
                    d = void 0 === s ? {} : s,
                    c = (0, O.parseExtraDataFromInviteKey)(t),
                    f = Q.default.getChannel(n);
                if (null != f) {
                    var _ = null;
                    f.isMultiUserDM() ? _ = eE.LoggingInviteTypes.GDM_INVITE : !f.isPrivate() && (_ = eE.LoggingInviteTypes.SERVER_INVITE);
                    var E = {},
                        h = J.default.getInvite(t);
                    if (null != h && h.state === eE.InviteStates.RESOLVED && null != h.channel) {
                        var g, m = h.channel;
                        E.invite_channel_id = m.id, E.invite_guild_id = null === (g = h.guild) || void 0 === g ? void 0 : g.id, E.invite_channel_type = m.type, null != h.inviter && (E.invite_inviter_id = h.inviter.id);
                        var p = j.default.getLastActiveStream();
                        if (null != p && p.channelId === m.id) {
                            _ = eE.LoggingInviteTypes.STREAM, E.destination_user_id = p.ownerId;
                            var A = (0, I.getStreamerApplication)(p, ee.default);
                            E.application_id = null != A ? A.id : null
                        }
                    }
                    null != o && (E.is_suggested = o.isAffinitySuggestion, E.row_num = o.rowNum, E.num_total = o.numTotal, E.num_affinity_connections = o.numAffinityConnections, E.is_filtered = o.isFiltered), E = (0, i._)((0, l._)((0, i._)({}, E), {
                        location: r,
                        invite_type: _,
                        invite_code: c.baseCode,
                        guild_id: f.getGuildId(),
                        channel_id: f.id,
                        message_id: a,
                        send_type: eE.SendTypes.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: c.guildScheduledEventId
                    }), d), v.default.trackWithMetadata(eE.AnalyticEvents.INVITE_SENT, E)
                } else {
                    var S = {},
                        T = J.default.getInvite(t);
                    null != T && T.state === eE.InviteStates.RESOLVED && null != T.inviter && (S.invite_inviter_id = T.inviter.id, S = (0, i._)((0, l._)((0, i._)({}, S), {
                        location: r,
                        invite_type: eE.LoggingInviteTypes.FRIEND_INVITE,
                        invite_code: c.baseCode,
                        message_id: a,
                        send_type: eE.SendTypes.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: c.guildScheduledEventId
                    }), d), v.default.trackWithMetadata(eE.AnalyticEvents.INVITE_SENT, S))
                }
            }
            var ey = {
                    [eE.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
                        messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
                        messageGetter: function() {
                            return eg.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
                        }
                    },
                    [eE.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
                        messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
                        messageGetter: function() {
                            return eg.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                helpUrl: ed.default.getArticleURL(eE.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                            })
                        }
                    },
                    [eE.AbortCodes.RATE_LIMIT_DM_OPEN]: {
                        messageName: "BOT_DM_RATE_LIMITED",
                        messageGetter: function() {
                            return eg.default.Messages.BOT_DM_RATE_LIMITED
                        }
                    },
                    [eE.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
                        messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                        messageGetter: function() {
                            return eg.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                        }
                    },
                    [eE.AbortCodes.SLOWMODE_RATE_LIMITED]: {
                        messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                        messageGetter: function() {
                            return eg.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                        }
                    }
                },
                eC = {
                    receiveMessage(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        _.default.dispatch({
                            type: "MESSAGE_CREATE",
                            channelId: e,
                            message: t,
                            optimistic: n,
                            sendMessageOptions: a,
                            isPushNotification: !1
                        })
                    },
                    sendBotMessage(e, t, n) {
                        null != n && v.default.trackWithMetadata(eE.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
                            message_author: "Clyde",
                            message_name: n
                        }), eC.receiveMessage(e, (0, w.createBotMessage)({
                            channelId: e,
                            content: t,
                            loggingName: n
                        }))
                    },
                    sendClydeError(e) {
                        var t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            r = Q.default.getChannel(e);
                        if (null != r) {
                            if (a === eE.AbortCodes.EXPLICIT_CONTENT) {
                                if (r.isDM()) t = eg.default.Messages.BOT_DM_EXPLICIT_CONTENT.format({
                                    name: (0, A.computeChannelName)(r, el.default, en.default)
                                }), n = "BOT_DM_EXPLICIT_CONTENT";
                                else if (r.isMultiUserDM()) t = eg.default.Messages.BOT_GDM_EXPLICIT_CONTENT.format({
                                    name: (0, A.computeChannelName)(r, el.default, en.default)
                                }), n = "BOT_GDM_EXPLICIT_CONTENT";
                                else {
                                    var i = X.default.getGuild(r.getGuildId());
                                    if (null == i) return;
                                    t = eg.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                        name: i.toString()
                                    }), n = "BOT_GUILD_EXPLICIT_CONTENT"
                                }
                            } else a === eE.AbortCodes.SLOWMODE_RATE_LIMITED ? (t = eg.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                                seconds: r.rateLimitPerUser
                            }), n = "SLOWMODE_RATE_LIMITED") : a === eE.AbortCodes.INVALID_MESSAGE_SEND_USER ? (t = eg.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                helpUrl: ed.default.getArticleURL(eE.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                            }), n = "INVALID_MESSAGE_SEND_USER") : a === eE.AbortCodes.TOO_MANY_THREADS ? (t = r.isForumLikeChannel() || r.isForumPost() ? eg.default.Messages.BOT_DM_TOO_MANY_POSTS : eg.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS") : a === eE.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = eg.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : a === eE.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = eg.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
                                helpUrl: eE.MarketingURLs.HARMFUL_LINKS
                            }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : a in ey ? (n = ey[a].messageName, t = ey[a].messageGetter()) : (t = eg.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                helpUrl: ed.default.getArticleURL(eE.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                            }), n = "SEND_FAILED (".concat(a, ")"));
                            eC.sendBotMessage(e, t, n)
                        }
                    },
                    truncateMessages(e, t, n) {
                        _.default.dispatch({
                            type: "TRUNCATE_MESSAGES",
                            channelId: e,
                            truncateBottom: t,
                            truncateTop: n
                        })
                    },
                    clearChannel(e) {
                        _.default.dispatch({
                            type: "CLEAR_MESSAGES",
                            channelId: e
                        })
                    },
                    jumpToPresent(e, t) {
                        eC.trackJump(e, null, "Present");
                        var n = {
                            present: !0
                        };
                        Z.default.hasPresent(e) ? _.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            jump: n,
                            channelId: e,
                            limit: t
                        }) : eC.fetchMessages({
                            channelId: e,
                            limit: t,
                            jump: n
                        })
                    },
                    trackJump(e, t, n, a) {
                        v.default.trackWithMetadata(eE.AnalyticEvents.JUMP, (0, i._)({
                            context: n,
                            channel_id: e,
                            message_id: t
                        }, a))
                    },
                    jumpToMessage(e) {
                        var t = e.channelId,
                            n = e.messageId,
                            a = e.flash,
                            r = e.offset,
                            i = e.context,
                            l = e.extraProperties,
                            u = e.isPreload,
                            o = e.returnMessageId,
                            s = e.skipLocalFetch,
                            d = e.jumpType;
                        return "string" == typeof i && eC.trackJump(t, n, i, void 0 === l ? null : l), eC.fetchMessages({
                            channelId: t,
                            limit: eE.MAX_MESSAGES_FOR_JUMP,
                            jump: {
                                messageId: n,
                                flash: void 0 !== a && a,
                                offset: r,
                                returnMessageId: o,
                                jumpType: d
                            },
                            isPreload: u,
                            skipLocalFetch: s
                        })
                    },
                    focusMessage(e) {
                        var t = e.channelId,
                            n = e.messageId;
                        eC.fetchMessages({
                            channelId: t,
                            limit: eE.MAX_MESSAGES_FOR_JUMP,
                            focus: {
                                messageId: n
                            }
                        })
                    },
                    fetchMessages(e) {
                        var t = e.channelId,
                            n = e.before,
                            a = e.after,
                            r = e.limit,
                            l = e.jump,
                            u = e.focus,
                            s = e.isPreload,
                            d = e.skipLocalFetch,
                            f = e.truncate,
                            h = Q.default.getChannel(t),
                            v = M.default.isConnectedOrOverlay(),
                            g = Date.now();
                        if (null != h && h.type === eE.ChannelTypes.GUILD_STORE) return !1;
                        if (t !== eh.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
                            if (em.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(a, ". jump=").concat(JSON.stringify(l))), !eC._tryFetchMessagesCached({
                                    channelId: t,
                                    before: n,
                                    after: a,
                                    limit: r,
                                    jump: l,
                                    focus: u,
                                    truncate: f
                                })) {
                                q.default.fetchMessages.recordStart();
                                var m = null != l ? l : void 0;
                                null == m && null != u && (m = (0, i._)({}, u));
                                var p = E.default.getOrCreate(t).loadStart(m);
                                E.default.commit(p), _.default.dispatch({
                                    type: "LOAD_MESSAGES"
                                });
                                var A = null == m ? void 0 : m.messageId,
                                    S = new eS;
                                return !d && this.fetchLocalMessages(t, n, a, r, S), c.default.get({
                                    url: eE.Endpoints.MESSAGES(t),
                                    query: {
                                        before: n,
                                        after: a,
                                        limit: r,
                                        around: A,
                                        preload: s
                                    },
                                    retries: 2,
                                    oldFormErrors: !0
                                }).then(function(e) {
                                    return q.default.fetchMessages.recordEnd(), q.default.dispatchMessages.measure(function() {
                                        var i = e.body,
                                            u = null != n,
                                            s = null != a,
                                            d = null == n && null == a,
                                            c = null != A || i.length === r && (u || d),
                                            E = null != A || s && i.length === r;
                                        if (null != A) {
                                            var h = Math.floor(r / 2),
                                                m = [A].concat((0, o._)(i.map(function(e) {
                                                    return e.id
                                                }))).filter(function(e, t, n) {
                                                    return n.indexOf(e) === t
                                                }).sort(ef.default.compare).indexOf(A);
                                            if (m < h && (c = !1), i.length - m < h && (E = !1), E && i.length > 0) {
                                                var p = et.default.lastMessageId(t);
                                                i[0].id === p && (E = !1)
                                            }
                                        }
                                        em.log("Fetched ".concat(i.length, " messages for ").concat(t, " isBefore:").concat(u, " isAfter:").concat(s)), S.markComplete(), _.default.dispatch({
                                            type: "LOAD_MESSAGES_SUCCESS",
                                            channelId: t,
                                            messages: i,
                                            isBefore: u,
                                            isAfter: s,
                                            hasMoreBefore: c,
                                            hasMoreAfter: E,
                                            limit: r,
                                            jump: l,
                                            isStale: !v || M.default.lastTimeConnectedChanged() >= g,
                                            truncate: f
                                        })
                                    }), !0
                                }, function() {
                                    return em.log("Failed to fetch messages for ".concat(t)), _.default.dispatch({
                                        type: "LOAD_MESSAGES_FAILURE",
                                        channelId: t
                                    }), !1
                                })
                            }
                        }
                    },
                    fetchLocalMessages: (e, t, n, r, i) => (0, a._)(function() {
                        var a, l, u, o, d;
                        return (0, s._)(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (a = Q.default.getBasicChannel(e), l = E.default.getOrCreate(e), null == (u = g.default.database()) || null == a || null != t || null != n) return q.default.addLocalMessages(e, -1), [2];
                                    if (l.ready && !l.cached) return q.default.addLocalMessages(e, -2), [2];
                                    return [4, (0, m.tryLoadAsync)(function() {
                                        return p.default.load(u, e, r)
                                    })];
                                case 1:
                                    if (null == (o = s.sent())) return q.default.addLocalMessages(e, -3), [2];
                                    return em.log("fetched ".concat(o.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(i.completed, ")")), q.default.addLocalMessages(e, o.messages.length), !i.completed && o.messages.length > 0 && (d = o.messages.length >= r && o.connectionId === M.default.lastTimeConnectedChanged(), _.default.dispatch({
                                        type: "LOCAL_MESSAGES_LOADED",
                                        guildId: a.guild_id,
                                        channelId: e,
                                        users: o.users,
                                        members: o.members,
                                        messages: o.messages,
                                        stale: !d
                                    })), [2]
                            }
                        })
                    })(),
                    fetchNewLocalMessages: (e, t) => (0, a._)(function() {
                        var n, a, r, i, l, u, o;
                        return (0, s._)(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (a = Q.default.getBasicChannel(e), null == (r = g.default.database()) || null == a || (i = E.default.getOrCreate(e)).hasMoreAfter) return [2];
                                    return [4, (0, m.tryLoadAsync)(function() {
                                        return p.default.load(r, e, t)
                                    })];
                                case 1:
                                    if (null == (l = s.sent())) return [2];
                                    if (o = null == (u = null === (n = (i = E.default.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id) ? l.messages : l.messages.filter(function(e) {
                                            return ef.default.compare(e.id, u) > 0
                                        }), em.log("Fetched ".concat(l.messages.length, " messages from the cache after foregrounding. ").concat(o.length, " are new")), 0 === o.length) return [2];
                                    return _.default.dispatch({
                                        type: "LOCAL_MESSAGES_LOADED",
                                        guildId: a.guild_id,
                                        channelId: e,
                                        users: l.users,
                                        members: l.members,
                                        messages: o,
                                        stale: !0
                                    }), [2]
                            }
                        })
                    })(),
                    _tryFetchMessagesCached(e) {
                        var t = e.channelId,
                            n = e.before,
                            a = e.after,
                            r = e.limit,
                            l = e.jump,
                            u = e.focus,
                            o = e.truncate,
                            s = Z.default.getMessages(t);
                        if (s.cached || !s.ready) return !1;
                        if ((null == l ? void 0 : l.messageId) != null || (null == u ? void 0 : u.messageId) != null) {
                            if ((null == l ? void 0 : l.messageId) != null && s.has(l.messageId, !1)) return _.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                jump: l,
                                limit: r,
                                truncate: o
                            }), !0;
                            if ((null == u ? void 0 : u.messageId) != null) {
                                if (s.has(u.messageId, !1)) return _.default.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                    channelId: t,
                                    focus: u,
                                    limit: r,
                                    truncate: o
                                }), !0;
                                l = (0, i._)({}, u)
                            }
                            var d = (null == l ? void 0 : l.messageId) != null ? ef.default.extractTimestamp(null == l ? void 0 : l.messageId) : 0,
                                c = s.first(),
                                f = s.last();
                            if (!s.hasMoreBefore && null != c && ef.default.extractTimestamp(c.id) >= d || !s.hasMoreAfter && null != f && ef.default.extractTimestamp(f.id) <= d || null != c && null != f && ef.default.extractTimestamp(c.id) < d && ef.default.extractTimestamp(f.id) > d) return _.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                jump: l,
                                limit: eE.MAX_MESSAGES_FOR_JUMP
                            }), !0
                        } else if (null != n && s.hasBeforeCached(n)) return _.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            before: n,
                            limit: r,
                            truncate: o
                        }), !0;
                        else if (null != a && s.hasAfterCached(a)) return _.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            after: a,
                            limit: r,
                            truncate: o
                        }), !0;
                        return !1
                    },
                    sendMessage(e, t) {
                        var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return (0, a._)(function() {
                            var a, u, o, d, c;
                            return (0, s._)(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (t.reaction) return [2, Promise.resolve()];
                                        return [4, (0, V.default)(e)];
                                    case 1:
                                        if (null != (a = s.sent())) return [2, eC.sendMessage(a, t, n, r)];
                                        if (u = function() {
                                                return eC._sendMessage(e, t, r)
                                            }, o = D.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
                                                location: "8e1e29_1"
                                            }).enableBackgroundSending ? b.default.backgroundify(u, void 0) : u, c = null !== (d = r.nonce) && void 0 !== d ? d : (0, w.createNonce)(), r = (0, l._)((0, i._)({}, r), {
                                                nonce: c
                                            }), U.default.recordMessageSendAttempt(e, c), Z.default.isReady(e)) return [2, o()];
                                        if (n && e !== eh.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return ep.info("Waiting for channel ".concat(e, " to be ready before sending.")), [2, new Promise(function(t, n) {
                                            Z.default.whenReady(e, function() {
                                                ep.info("Channel ".concat(e, " is ready for sending now.")), o().then(t, n)
                                            })
                                        })];
                                        else return [2, o()]
                                }
                            })
                        })()
                    },
                    getSendMessageOptionsForReply(e) {
                        if (null == e) return {};
                        var t, n = {
                            guild_id: null !== (t = e.channel.getGuildId()) && void 0 !== t ? t : void 0,
                            channel_id: e.channel.id,
                            message_id: e.message.id
                        };
                        return {
                            messageReference: n,
                            allowedMentions: e.shouldMention ? void 0 : {
                                parse: Object.values(eE.AllowedMentionTypes),
                                replied_user: !1
                            }
                        }
                    },
                    sendInvite: (e, t, n, a) => eC._sendMessage(e, {
                        content: (0, R.default)(t),
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: null != a ? a : void 0
                    }),
                    sendActivityBookmark: (e, t, n, a) => eC._sendMessage(e, {
                        content: t,
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: null != a ? a : void 0
                    }),
                    sendClydeProfileOverride: (e, t, n, a) => eC._sendMessage(e, {
                        content: t,
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: null != a ? a : void 0
                    }),
                    sendStickers(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        return eC._sendMessage(e, {
                            content: n,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                            tts: r
                        }, (0, l._)((0, i._)({}, a), {
                            stickerIds: t
                        }))
                    },
                    sendGreetMessage(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = n.messageReference,
                            r = n.allowedMentions;
                        return c.default.post({
                            url: eE.Endpoints.MESSAGES_GREET(e),
                            body: {
                                sticker_ids: [t],
                                allowed_mentions: r,
                                message_reference: a
                            },
                            oldFormErrors: !0
                        }).then(function(n) {
                            return P.default.donateSentMessage(n.body.content, e), eC.receiveMessage(e, n.body), _.default.dispatch({
                                type: "STICKER_TRACK_USAGE",
                                stickerIds: [t]
                            }), n
                        }, function(t) {
                            throw em.log("Failed to send greeting"), 429 !== t.status && eC.sendClydeError(e, t.body.code), _.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: t.body.id,
                                channelId: e
                            }), t
                        })
                    },
                    sendPollMessage(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return eC._sendMessage(e, {
                            content: "",
                            tts: !1,
                            validNonShortcutEmojis: [],
                            invalidEmojis: []
                        }, (0, l._)((0, i._)({}, n), {
                            poll: t
                        }))
                    },
                    _sendMessage(e, t, n) {
                        var a = (0, V.default)(e);
                        if (null != a) return ep.info("Converting channel to a private channel"), a.then(function(e) {
                            ep.info("Finished converting channel to a private channel"), eC._sendMessage(e, t, n)
                        });
                        var r = t.content,
                            i = t.invalidEmojis,
                            l = t.validNonShortcutEmojis,
                            o = t.tts,
                            s = void 0 !== o && o,
                            c = n.activityAction,
                            f = n.location,
                            E = n.suggestedInvite,
                            g = n.stickerIds,
                            m = n.messageReference,
                            p = n.allowedMentions,
                            A = n.poll,
                            C = null !== (k = n.flags) && void 0 !== k ? k : 0,
                            M = (0, u._)((0, W.default)(r), 2),
                            I = M[0],
                            O = M[1];
                        if (I && (r = O, C = (0, eo.addFlag)(C, eE.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === r && null == c && null == g && null == A) return Promise.reject(Error("not sending empty message"));
                        var R = null != m ? eE.MessageTypes.REPLY : eE.MessageTypes.DEFAULT,
                            D = null !== (B = n.nonce) && void 0 !== B ? B : (0, w.createNonce)();
                        if (!1 !== n.eagerDispatch) {
                            var b = (0, w.default)({
                                channelId: e,
                                content: r,
                                tts: s,
                                type: R,
                                messageReference: m,
                                allowedMentions: p,
                                flags: 0 !== C ? C : void 0,
                                nonce: D,
                                poll: (0, x.createPollServerDataFromCreateRequest)(A)
                            });
                            (0, F.updateComboOnMessageSend)(e, b.id), null != g && (b.sticker_items = g.map(function(e) {
                                return Y.default.getStickerById(e)
                            }).filter(function(e) {
                                return null != e
                            })), eC.receiveMessage(e, b, !0, n)
                        }
                        if (!eA && null != i && i.length > 0) {
                            eA = !0;
                            var k, B, K, q, j = el.default.getCurrentUser();
                            i.some(function(e) {
                                return e.animated
                            }) && !ec.default.canUseAnimatedEmojis(j) ? (K = eg.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, q = "INVALID_ANIMATED_EMOJI_BODY") : $.default.canWithPartialContext(eE.Permissions.USE_EXTERNAL_EMOJIS, {
                                channelId: e
                            }) ? (K = eg.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, q = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (K = eg.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, q = "INVALID_EXTERNAL_EMOJI_BODY"), eC.sendBotMessage(e, K, q)
                        }
                        var X = {
                            type: h.MessageDataType.SEND,
                            message: {
                                channelId: e,
                                content: r,
                                nonce: D,
                                tts: s,
                                message_reference: m,
                                allowed_mentions: p,
                                flags: C
                            }
                        };
                        if (null != c) {
                            var J = c.type === eE.ActivityActionTypes.JOIN_REQUEST ? null == c ? void 0 : c.activity.session_id : z.default.getSessionId();
                            if (null != J) {
                                var Z = {
                                        type: c.type,
                                        session_id: J
                                    },
                                    ee = c.activity;
                                null != ee.party && null != ee.party.id && (Z.party_id = ee.party.id), X.message.application_id = ee.application_id, X.message.activity = Z
                            }
                        }
                        return null != A && (X.message.poll = A), null != g && (X.message.sticker_ids = g), H.default.isEnabled() && (X.message.has_poggermode_enabled = !0), (0, S.default)(e) && (X.message.allow_proactive_clyde_reply = !0), new Promise(function(t, a) {
                            var i = Date.now(),
                                u = h.default.length,
                                o = Math.floor(1e4 * Math.random());
                            ep.info("Queueing message to be sent LogId:".concat(o)), h.default.enqueue(X, function(o) {
                                var s = Date.now() - i;
                                if (o.ok) {
                                    ;
                                    P.default.donateSentMessage(r, e), eC.receiveMessage(e, o.body, !0, {
                                        sendAnalytics: {
                                            duration: s,
                                            queueSize: u
                                        },
                                        poll: A
                                    }), U.default.recordMessageSendApiResponse(D), _.default.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: ei.SlowmodeType.SendMessage,
                                        channelId: e
                                    }), _.default.dispatch({
                                        type: "EMOJI_TRACK_USAGE",
                                        emojiUsed: l
                                    }), _.default.dispatch({
                                        type: "STICKER_TRACK_USAGE",
                                        stickerIds: g
                                    }), h = (c = {
                                        content: r,
                                        channelId: e,
                                        messageId: o.body.id,
                                        location: null != f ? f : "chat_input",
                                        suggested: E
                                    }).content, m = c.channelId, p = c.messageId, S = c.location, M = void 0 === (C = c.suggested) ? null : C, O = void 0 === (I = c.overrideProperties) ? {} : I, (0, y.default)(h).forEach(function(e) {
                                        var t = e.type,
                                            n = e.code;
                                        if (t === T.CodedLinkType.INVITE) eT({
                                            inviteKey: n,
                                            channelId: m,
                                            messageId: p,
                                            location: S,
                                            suggested: M,
                                            overrideProperties: O
                                        });
                                        else if (t === T.CodedLinkType.TEMPLATE) {
                                            var a = N.default.getGuildTemplate(n);
                                            if (null == a || a.state === ev.GuildTemplateStates.RESOLVING) return;
                                            v.default.trackWithMetadata(eE.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                                                guild_template_code: n,
                                                guild_template_name: a.name,
                                                guild_template_description: a.description,
                                                guild_template_guild_id: a.sourceGuildId
                                            })
                                        } else if (t === T.CodedLinkType.BUILD_OVERRIDE);
                                        else if (t === T.CodedLinkType.EVENT);
                                        else if (t === T.CodedLinkType.CHANNEL_LINK);
                                        else if (t === T.CodedLinkType.APP_DIRECTORY_PROFILE) eu.default.track(eE.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                                            application_id: n,
                                            device_platform: d.isMobile ? "mobile_web" : "desktop_web",
                                            guild_id: er.default.getGuildId(),
                                            channel_id: ea.default.getChannelId()
                                        });
                                        else if (t === T.CodedLinkType.ACTIVITY_BOOKMARK);
                                        else if (t === T.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                                        else if (t === T.CodedLinkType.GUILD_PRODUCT);
                                        else if (t === T.CodedLinkType.SERVER_SHOP);
                                        else if (t === T.CodedLinkType.CLYDE_PROFILE);
                                        else throw Error("Unknown coded link type: ".concat(t))
                                    }), ! function(e, t, n, a, r) {
                                        (0, es.findGiftCodes)(e).forEach(function(e) {
                                            var i = Q.default.getChannel(t);
                                            null != i && v.default.trackWithMetadata(eE.AnalyticEvents.GIFT_CODE_SENT, {
                                                location: a,
                                                gift_code: e,
                                                guild_id: i.getGuildId(),
                                                channel_id: i.id,
                                                channel_type: i.type,
                                                message_id: n,
                                                automatic_send: r
                                            })
                                        })
                                    }(r, e, o.body.id, null != f ? f : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(o)
                                } else {
                                    em.log("Failed to send message", {
                                        hasErr: o.hasErr,
                                        status: o.status,
                                        code: null === (R = o.body) || void 0 === R ? void 0 : R.code,
                                        error: o.err
                                    });
                                    var c, h, m, p, S, C, M, I, O, R, b = !1;
                                    if (o.hasErr) "ABORTED" === o.err.code && (b = !0);
                                    else if (o.status >= 400 && o.status < 500 && o.body) {
                                        if (o.body.code === eE.AbortCodes.SLOWMODE_RATE_LIMITED) {
                                            var w = o.body.retry_after;
                                            null != w && w > 0 && _.default.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: ei.SlowmodeType.SendMessage,
                                                cooldownMs: 1e3 * w
                                            })
                                        } else L.AUTOMOD_ERROR_CODES.has(o.body.code) ? _.default.dispatch({
                                            type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                            messageData: X,
                                            errorResponseBody: {
                                                code: o.body.code,
                                                message: o.body.message
                                            }
                                        }) : o.body.code === eE.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? _.default.dispatch({
                                            type: "POGGERMODE_TEMPORARILY_DISABLED"
                                        }) : o.body.code === eE.AbortCodes.CLYDE_CONSENT_REQUIRED ? _.default.dispatch({
                                            type: "MESSAGE_FAILED_CLYDE_CONSENT",
                                            messageId: D,
                                            channelId: e
                                        }) : null != A || eC.sendClydeError(e, o.body.code)
                                    }
                                    b ? eC.deleteMessage(e, D, !0) : (_.default.dispatch({
                                        type: "MESSAGE_SEND_FAILED",
                                        messageId: D,
                                        channelId: e
                                    }), (0, G.logMessageSendFailure)({
                                        failureCode: o.hasErr ? void 0 : o.status,
                                        errorMessage: o.hasErr ? o.err.message : void 0
                                    })), a(o)
                                }
                            }, o)
                        })
                    },
                    startEditMessage(e, t, n, a) {
                        _.default.dispatch({
                            type: "MESSAGE_START_EDIT",
                            channelId: e,
                            messageId: t,
                            content: n,
                            source: a
                        })
                    },
                    updateEditMessage(e, t, n) {
                        _.default.dispatch({
                            type: "MESSAGE_UPDATE_EDIT",
                            channelId: e,
                            textValue: t,
                            richValue: n
                        })
                    },
                    endEditMessage(e, t) {
                        _.default.dispatch({
                            type: "MESSAGE_END_EDIT",
                            channelId: e,
                            response: t
                        })
                    },
                    editMessage(e, t, n) {
                        var r = n.content;
                        return (0, a._)(function() {
                            var n, a;
                            return (0, s._)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, K.default.unarchiveThreadIfNecessary(e)];
                                    case 1:
                                        return i.sent(), n = function(e, t) {
                                            var n = Z.default.getMessage(e, t);
                                            if (null == n || n.type !== eE.MessageTypes.REPLY) return;
                                            var a = B.default.getMessageByReference(n.messageReference);
                                            if (a.state === B.ReferencedMessageState.LOADED) {
                                                if (!n.mentions.includes(a.message.author.id)) return {
                                                    parse: Object.values(eE.AllowedMentionTypes),
                                                    replied_user: !1
                                                }
                                            }
                                        }(e, t), a = {
                                            channelId: e,
                                            messageId: t,
                                            content: r,
                                            allowed_mentions: n
                                        }, h.default.enqueue({
                                            type: h.MessageDataType.EDIT,
                                            message: a
                                        }, function(n) {
                                            var r = !n.hasErr && L.AUTOMOD_ERROR_CODES.has(n.body.code);
                                            if (r) {
                                                var i = {
                                                    type: h.MessageDataType.EDIT,
                                                    message: a
                                                };
                                                _.default.dispatch({
                                                    type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                                                    messageData: i,
                                                    errorResponseBody: {
                                                        code: n.body.code,
                                                        message: n.body.message
                                                    }
                                                })
                                            }
                                            n.hasErr ? f.AccessibilityAnnouncer.announce(eg.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : r ? f.AccessibilityAnnouncer.announce(eg.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : f.AccessibilityAnnouncer.announce(eg.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eC.endEditMessage(e, n.hasErr ? void 0 : n), eC.focusMessage({
                                                channelId: e,
                                                messageId: t
                                            })
                                        }), [2]
                                }
                            })
                        })()
                    },
                    suppressEmbeds: (e, t) => (0, a._)(function() {
                        return (0, s._)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, K.default.unarchiveThreadIfNecessary(e)];
                                case 1:
                                    return n.sent(), c.default.patch({
                                        url: eE.Endpoints.MESSAGE(e, t),
                                        body: {
                                            flags: eE.MessageFlags.SUPPRESS_EMBEDS
                                        },
                                        oldFormErrors: !0
                                    }), [2]
                            }
                        })
                    })(),
                    patchMessageAttachments: (e, t, n) => (0, a._)(function() {
                        return (0, s._)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, K.default.unarchiveThreadIfNecessary(e)];
                                case 1:
                                    return a.sent(), c.default.patch({
                                        url: eE.Endpoints.MESSAGE(e, t),
                                        body: {
                                            attachments: n
                                        },
                                        oldFormErrors: !0
                                    }), [2]
                            }
                        })
                    })(),
                    deleteMessage(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return (0, a._)(function() {
                            var a, r;
                            return (0, s._)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (a = function() {
                                                _.default.dispatch({
                                                    type: "MESSAGE_DELETE",
                                                    id: t,
                                                    channelId: e
                                                }).then(function() {
                                                    f.AccessibilityAnnouncer.announce(eg.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
                                                })
                                            }, !n) return [3, 1];
                                        return a(), [3, 3];
                                    case 1:
                                        return [4, K.default.unarchiveThreadIfNecessary(e)];
                                    case 2:
                                        i.sent(), c.default.delete({
                                            url: eE.Endpoints.MESSAGE(e, t),
                                            oldFormErrors: !0
                                        }).then(function() {
                                            a()
                                        }), i.label = 3;
                                    case 3:
                                        return (null == (r = Z.default.getMessage(e, t)) ? void 0 : r.type) === eE.MessageTypes.GUILD_INVITE_REMINDER && (0, k.trackGuildInviteNotificationDismissed)(), [2]
                                }
                            })
                        })()
                    },
                    dismissAutomatedMessage(e) {
                        null != e.loggingName && v.default.trackWithMetadata(eE.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
                            message_name: e.loggingName,
                            message_author: e.author.username
                        }), this.deleteMessage(e.channel_id, e.id, !0)
                    },
                    revealMessage(e, t) {
                        _.default.dispatch({
                            type: "MESSAGE_REVEAL",
                            channelId: e,
                            messageId: t
                        })
                    },
                    crosspostMessage: (e, t) => c.default.post({
                        url: eE.Endpoints.MESSAGE_CROSSPOST(e, t),
                        oldFormErrors: !0
                    }).catch(function(e) {
                        var t;
                        t = 429 === e.status ? eg.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
                            retryAfter: Math.floor(e.body.retry_after / 60)
                        }) : eg.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, e_.default.show({
                            title: eg.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                            body: t,
                            confirmText: eg.default.Messages.OKAY
                        })
                    }),
                    trackInvite: eT
                },
                eM = eC
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
                    return s
                },
                MINIMUM_RANGE: function() {
                    return o
                },
                default: function() {
                    return c
                }
            });
            var a = n("87627");
            n("357629");
            var r = n("392711"),
                i = n.n(r),
                l = n("31775"),
                u = n.n(l),
                o = 100,
                s = [
                    [0, 99]
                ];

            function d(e) {
                var t = {};
                return e.forEach(function(e, n) {
                    t[n] = e
                }), t
            }
            var c = function() {
                function e(t) {
                    (0, a._)(this, e), this._subscriptions = {}, this._onChange = t
                }
                var t = e.prototype;
                return t.reset = function() {
                    this._subscriptions = {}
                }, t.get = function(e) {
                    return d(this._get(e))
                }, t._get = function(e) {
                    var t;
                    return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new(u())({
                        max: 5
                    })
                }, t.clear = function(e) {
                    delete this._subscriptions[e]
                }, t.subscribe = function(e, t, n) {
                    var a = this._get(e);
                    return !i().isEqual(a.get(t), n) && (a.set(t, n), this._subscriptions[e] = a, this._onChange(e, d(a)), !0)
                }, e
            }()
        },
        591139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("87627");
            n("996173"), n("47120"), n("357629"), n("814951");
            var r = n("392711"),
                i = n.n(r),
                l = n("767191"),
                u = n("841869"),
                o = function() {
                    function e(t) {
                        var n = this;
                        (0, a._)(this, e), this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe = new l.DelayedCall(6e4, function() {
                            return n.flushUnsubscriptions()
                        }), this._onChange = t
                    }
                    var t = e.prototype;
                    return t.reset = function() {
                        this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe.cancel()
                    }, t.get = function(e) {
                        var t, n = null !== (t = this._subscriptions[e]) && void 0 !== t ? t : {};
                        return i().keys(n)
                    }, t.clear = function(e) {
                        delete this._subscriptions[e], delete this._unsubscriptions[e]
                    }, t.subscribe = function(e, t) {
                        var n, a, r = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
                        r[t] = (null !== (a = r[t]) && void 0 !== a ? a : 0) + 1, this._subscriptions[e] = r, 1 === r[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t)
                    }, t.isSubscribed = function(e, t) {
                        return null != this._subscriptions[e] && null != this._subscriptions[e][t]
                    }, t.unsubscribe = function(e, t) {
                        if (this.isSubscribed(e, t)) {
                            var n, a, r = null !== (n = this._unsubscriptions[e]) && void 0 !== n ? n : {};
                            r[t] = (null !== (a = r[t]) && void 0 !== a ? a : 0) + 1, this._unsubscriptions[e] = r, 1 === r[t] && this._unsubscribe.delay(!1)
                        }
                    }, t.checkForLeaks = function(e, t) {
                        var n, a, r, i, l = (null !== (r = null === (n = this._subscriptions[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0) - (null !== (i = null === (a = this._unsubscriptions[e]) || void 0 === a ? void 0 : a[t]) && void 0 !== i ? i : 0);
                        l > 5 && new u.default("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(l, " subscriptions)"))
                    }, t.flushUnsubscriptions = function() {
                        var e = this;
                        !i().isEmpty(this._unsubscriptions) && (i().forEach(this._unsubscriptions, function(t, n) {
                            var a = e._subscriptions[n];
                            i().forEach(t, function(e, t) {
                                var n;
                                a[t] = (null !== (n = a[t]) && void 0 !== n ? n : 0) - e, a[t] <= 0 && delete a[t]
                            }), i().isEmpty(a) && delete e._subscriptions[n], e._onChange(n, e.get(n))
                        }), this._unsubscriptions = {})
                    }, e
                }()
        },
        608066: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_RANGES: function() {
                    return o.DEFAULT_RANGES
                },
                default: function() {
                    return _
                }
            });
            var a = n("87627"),
                r = n("21189");
            n("330740"), n("996173"), n("47120"), n("357629");
            var i = n("392711"),
                l = n.n(i),
                u = n("767191"),
                o = n("283327"),
                s = n("591139"),
                d = n("813300"),
                c = n("467006");

            function f(e) {
                return null != e && "null" !== e && e !== c.ME && "undefined" !== e && e !== c.FAVORITES
            }
            var _ = function() {
                function e(t) {
                    var n = this;
                    (0, a._)(this, e), this._members = new s.default(function(e, t) {
                        return n._enqueue(e, {
                            members: t
                        })
                    }), this._channels = new o.default(function(e, t) {
                        return n._enqueue(e, {
                            channels: t
                        })
                    }), this._threadMemberLists = new d.default(function(e, t) {
                        return n._enqueue(e, {
                            thread_member_lists: t
                        })
                    }), this._typing = new Set, this._threads = new Set, this._activities = new Set, this._subscribed = new Set, this._pending = {}, this._flush = new u.DelayedCall(0, function() {
                        return n.flush()
                    }), this._onChange = t
                }
                var t = e.prototype;
                return t._enqueue = function(e, t) {
                    this._pending[e] = (0, r._)({}, this._pending[e], t), this._flush.delay()
                }, t.reset = function() {
                    this._subscribed.clear(), this._pending = {}, this._members.reset(), this._channels.reset(), this._threadMemberLists.reset(), this._typing.clear(), this._threads.clear(), this._activities.clear()
                }, t.get = function(e) {
                    return {
                        typing: this._typing.has(e),
                        threads: this._threads.has(e),
                        activities: this._activities.has(e),
                        members: this._members.get(e),
                        channels: this._channels.get(e),
                        thread_member_lists: this._threadMemberLists.get(e)
                    }
                }, t.getSubscribedThreadIds = function() {
                    return this._threadMemberLists.getSubscribedThreadIds()
                }, t.isSubscribedToThreads = function(e) {
                    return this._threads.has(e)
                }, t.forEach = function(e) {
                    this._subscribed.forEach(e)
                }, t.clearWithoutFlushing = function(e, t) {
                    (t || !this._threads.has(e)) && this._subscribed.delete(e), delete this._pending[e], this._members.clear(e), this._channels.clear(e), this._threadMemberLists.clear(e), this._typing.delete(e), t && this._threads.delete(e), this._activities.delete(e)
                }, t.flush = function() {
                    var e = this;
                    l().forEach(this._pending, function(t, n) {
                        e._subscribed.add(n), e._onChange(n, t)
                    }), this._pending = {}
                }, t.subscribeUser = function(e, t) {
                    f(e) && this._members.subscribe(e, t)
                }, t.unsubscribeUser = function(e, t) {
                    f(e) && this._members.unsubscribe(e, t)
                }, t.subscribeChannel = function(e, t, n) {
                    return !!f(e) && this._channels.subscribe(e, t, n)
                }, t.subscribeThreadMemberList = function(e, t, n) {
                    return !!f(e) && this._threadMemberLists.subscribe(e, t, n)
                }, t.unsubscribeThreadMemberList = function(e, t) {
                    return !!f(e) && this._threadMemberLists.unsubscribe(e, t)
                }, t.subscribeToGuild = function(e) {
                    this._subscribeToFeature(e, this._typing, {
                        typing: !0
                    }), this._subscribeToFeature(e, this._activities, {
                        activities: !0
                    }), this._subscribeToFeature(e, this._threads, {
                        threads: !0
                    })
                }, t._subscribeToFeature = function(e, t, n) {
                    if (!!f(e)) !t.has(e) && (t.add(e), this._enqueue(e, n))
                }, e
            }()
        },
        813300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("87627");
            n("996173"), n("47120"), n("357629"), n("330740"), n("633702"), n("266796");
            var r = n("31775"),
                i = n.n(r),
                l = function() {
                    function e(t) {
                        (0, a._)(this, e), this._subscriptions = {}, this._onChange = t
                    }
                    var t = e.prototype;
                    return t.reset = function() {
                        this._subscriptions = {}
                    }, t.get = function(e) {
                        return this._get(e).keys()
                    }, t.getSubscribedThreadIds = function() {
                        var e = new Set;
                        for (var t in this._subscriptions) {
                            var n = !0,
                                a = !1,
                                r = void 0;
                            try {
                                for (var i, l = this._subscriptions[t].keys()[Symbol.iterator](); !(n = (i = l.next()).done); n = !0) {
                                    var u = i.value;
                                    e.add(u)
                                }
                            } catch (e) {
                                a = !0, r = e
                            } finally {
                                try {
                                    !n && null != l.return && l.return()
                                } finally {
                                    if (a) throw r
                                }
                            }
                        }
                        return e
                    }, t._get = function(e) {
                        var t;
                        return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new(i())({
                            max: 3,
                            updateAgeOnGet: !0
                        })
                    }, t.clear = function(e) {
                        e in this._subscriptions && (delete this._subscriptions[e], this._onChange(e, []))
                    }, t.subscribe = function(e, t, n) {
                        var a = this._get(e);
                        return a.has(t) ? (a.set(t, Date.now()), !1) : (null != n && a.has(n) && a.set(n, Date.now()), a.set(t, Date.now()), this._subscriptions[e] = a, this._onChange(e, a.keys()), !0)
                    }, t.unsubscribe = function(e, t) {
                        if (!(e in this._subscriptions)) return !1;
                        var n = this._subscriptions[e];
                        return !!n.has(t) && (n.del(t), this._onChange(e, n.keys()), !0)
                    }, e
                }()
        },
        199063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                collectThreadMetadata: function() {
                    return d
                }
            });
            var a = n("521588"),
                r = n("151191"),
                i = n("759193"),
                l = n("775822"),
                u = n("197905"),
                o = n("84819"),
                s = n("467006");

            function d(e) {
                var t, n, d, c, f, _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null != e && l.THREAD_CHANNEL_TYPES.has(e.type) ? {
                    location: _ ? (0, a.getLastRouteChangeSource)() : void 0,
                    thread_approximate_member_count: r.default.getMemberCount(e.id),
                    thread_approximate_message_count: i.default.getCount(e.id),
                    thread_archived: (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
                    thread_locked: null !== (c = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
                    thread_auto_archive_duration_minutes: null !== (f = null === (d = e.threadMetadata) || void 0 === d ? void 0 : d.autoArchiveDuration) && void 0 !== f ? f : 0,
                    thread_approximate_creation_date: o.default.extractTimestamp(e.id),
                    can_send_message: u.default.can(s.Permissions.SEND_MESSAGES, e),
                    parent_channel_type: e.parentChannelThreadType
                } : null
            }
        },
        217638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("356056"),
                r = n("87627"),
                i = n("21189"),
                l = n("154005"),
                u = n("324415");
            n("357629"), n("363505"), n("573788"), n("996173"), n("47120"), n("633702"), n("266796"), n("411104"), n("814951");
            var o = n("370257"),
                s = n("841869"),
                d = n("706608"),
                c = n("731865"),
                f = n("281925"),
                _ = n("366598"),
                E = n("721546"),
                h = n("619514"),
                v = n("470085"),
                g = n("840441"),
                m = new s.default("Messages"),
                p = function() {
                    function e(t) {
                        if ((0, r._)(this, e), this.connectionId = null, this.users = [], this.members = [], this.messages = [], t.length > 0) {
                            var n, a = null === (n = t[0]) || void 0 === n ? void 0 : n.connectionId,
                                i = (0, l._)(e.computeUsersAndMembers(t), 2),
                                u = i[0],
                                o = i[1];
                            t.length > 0 && t.every(function(e) {
                                return e.connectionId === a
                            }) && (this.connectionId = a), this.users = u, this.members = o, this.messages = t.map(function(e) {
                                return e.message
                            })
                        }
                    }
                    return e.computeUsersAndMembers = function(e) {
                        (0, g.requireSortedDescending)(e);
                        var t = new Map,
                            n = new Map,
                            a = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var l, u = e[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) {
                                var o = l.value;
                                this.addIntoMap(t, o.users, function(e) {
                                    return e.id
                                }), this.addIntoMap(n, o.members, function(e) {
                                    return e.userId
                                })
                            }
                        } catch (e) {
                            r = !0, i = e
                        } finally {
                            try {
                                !a && null != u.return && u.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        return [Array.from(t.values()), Array.from(n.values())]
                    }, e.addIntoMap = function(e, t, n) {
                        var a = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var l, u = t[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) {
                                var o = l.value,
                                    s = n(o),
                                    d = e.get(s);
                                (null == d || d.incomplete && !o.incomplete) && e.set(s, o)
                            }
                        } catch (e) {
                            r = !0, i = e
                        } finally {
                            try {
                                !a && null != u.return && u.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                    }, e
                }(),
                A = function() {
                    function e() {
                        var t = this;
                        (0, r._)(this, e), this.actions = {
                            CHANNEL_DELETE: function(e, n) {
                                return t.handleChannelDelete(e, n)
                            },
                            GUILD_DELETE: function(e, n) {
                                return t.handleGuildDelete(e, n)
                            },
                            LOAD_MESSAGES_SUCCESS: function(e, n) {
                                return t.handleLoadMessagesSuccess(e, n)
                            },
                            MESSAGE_CREATE: function(e, n) {
                                return t.handleMessageCreate(e, n)
                            },
                            MESSAGE_DELETE_BULK: function(e, n) {
                                return t.handleMessageDeleteBulk(e, n)
                            },
                            MESSAGE_DELETE: function(e, n) {
                                return t.handleMessageDelete(e, n)
                            },
                            MESSAGE_PREVIEWS_LOADED: function(e, n) {
                                return t.handleMessagePreviewsLoaded(e, n)
                            },
                            MESSAGE_UPDATE: function(e, n) {
                                return t.handleMessageUpdate(e, n)
                            }
                        }
                    }
                    var t = e.prototype;
                    return t.startupLoad = function(e, t, n, r) {
                        return (0, a._)(function() {
                            return (0, u._)(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, _.default.messages(e).getLatest(t, n, r)];
                                    case 1:
                                        return [2, new p(a.sent())]
                                }
                            })
                        })()
                    }, t.load = function(e, t, n) {
                        return (0, a._)(function() {
                            var a;
                            return (0, u._)(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (a = c.default.getBasicChannel(t), !(null == t || null == a || !(0, v.isReadableChannel)(a))) return [3, 1];
                                        return [2, new p([])];
                                    case 1:
                                        return [4, _.default.messages(e).getLatest(a.guild_id, t, n)];
                                    case 2:
                                        return [2, new p(r.sent())];
                                    case 3:
                                        return [2]
                                }
                            })
                        })()
                    }, t.handleMessageCreate = function(e, t) {
                        !e.optimistic && !e.isPushNotification && null == e.sendMessageOptions && (0, v.isReadableChannelId)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t)
                    }, t.handleMessageUpdate = function(e, t) {
                        if (null != e.message.id && null != e.message.channel_id)(0, v.isReadableChannelId)(e.message.channel_id) && (function(e) {
                            return null != e.author && null != e.content && null != e.mentions && null != e.timestamp
                        }(e.message) ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t))
                    }, t.handleMessagePreviewsLoaded = function(e, t) {
                        var n = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var i, l = e.messages[Symbol.iterator](); !(n = (i = l.next()).done); n = !0) {
                                var u = i.value;
                                (0, v.isReadableChannelId)(u.channel_id) && this.insertStale(e.guildId, u.channel_id, u, t)
                            }
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                !n && null != l.return && l.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                    }, t.handleLoadMessagesSuccess = function(e, t) {
                        var n = c.default.getBasicChannel(e.channelId);
                        null != n && (0, v.isReadableChannelId)(e.channelId) && this.upsertMany(n.guild_id, e.channelId, e.messages, t)
                    }, t.handleMessageDelete = function(e, t) {
                        if (null == e.id) {
                            f.default.captureException(Error("MESSAGE_DELETE with a null id (guild_id: ".concat(e.guildId, ", channel_id: ").concat(e.channelId, ").")));
                            return
                        }
                        this.deleteOne(e.guildId, e.channelId, e.id, t)
                    }, t.handleMessageDeleteBulk = function(e, t) {
                        var n = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var i, l = e.ids[Symbol.iterator](); !(n = (i = l.next()).done); n = !0) {
                                var u = i.value;
                                this.deleteOne(e.guildId, e.channelId, u, t)
                            }
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                !n && null != l.return && l.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                    }, t.handleChannelDelete = function(e, t) {
                        this.deleteChannel(e.channel.guild_id, e.channel.id, t)
                    }, t.handleGuildDelete = function(e, t) {
                        !e.guild.unavailable && this.deleteGuild(e.guild.id, t)
                    }, t.handleReset = function() {}, t.insertStale = function(e, t, n, a) {
                        var r = _.default.messagesTransaction(a),
                            i = d.default.lastTimeConnectedChanged();
                        r.put(e, t, E.KvMessage.fromMessage(e, t, n, i), o.ConflictOptions.Skip)
                    }, t.upsertOne = function(e, t, n, a) {
                        var r = _.default.messagesTransaction(a),
                            i = d.default.lastTimeConnectedChanged();
                        r.put(e, t, E.KvMessage.fromMessage(e, t, n, i), o.ConflictOptions.Replace), r.trimChannel(e, t, h.default.saveLimit(t))
                    }, t.upsertMany = function(e, t, n, a) {
                        var r = _.default.messagesTransaction(a),
                            i = d.default.lastTimeConnectedChanged(),
                            l = !0,
                            u = !1,
                            o = void 0;
                        try {
                            for (var s, c = n[Symbol.iterator](); !(l = (s = c.next()).done); l = !0) {
                                var f = s.value;
                                r.put(e, t, E.KvMessage.fromMessage(e, t, f, i))
                            }
                        } catch (e) {
                            u = !0, o = e
                        } finally {
                            try {
                                !l && null != c.return && c.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        r.trimChannel(e, t, h.default.saveLimit(t))
                    }, t.updateOne = function(e, t, n, r) {
                        return (0, a._)(function() {
                            var a, l, o;
                            return (0, u._)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (null == n.id) return m.warn("updateOne: message.id is null; cannot update a message if we do not know its id."), [2];
                                        return [4, (a = _.default.messages(r.database)).get(e, t, n.id)];
                                    case 1:
                                        return l = u.sent(), o = d.default.lastTimeConnectedChanged(), null != l && a.put(e, t, E.KvMessage.fromMessage(e, t, (0, i._)({}, l.message, n), o)), [2]
                                }
                            })
                        })()
                    }, t.deleteOne = function(e, t, n, a) {
                        _.default.messagesTransaction(a).deleteMessage(e, t, n)
                    }, t.deleteChannel = function(e, t, n) {
                        _.default.messagesTransaction(n).deleteChannel(e, t)
                    }, t.deleteGuild = function(e, t) {
                        _.default.messagesTransaction(t).deleteGuild(e)
                    }, e
                }(),
                S = new A
        },
        721546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                KvMessage: function() {
                    return o
                }
            });
            var a = n("87627"),
                r = n("154005"),
                i = n("761020");
            n("330740"), n("996173"), n("47120"), n("357629"), n("814951"), n("363505"), n("633702"), n("266796"), n("653041");
            var l = n("361733"),
                u = n("871831"),
                o = function() {
                    function e() {
                        (0, a._)(this, e)
                    }
                    return e.fromMessage = function(t, n, a, i) {
                        var l = (0, r._)(e.deriveMemberUsers(t, a), 2),
                            u = l[0],
                            o = l[1];
                        return {
                            id: a.id,
                            channelId: n,
                            message: a,
                            members: u,
                            users: o,
                            connectionId: i
                        }
                    }, e.deriveMemberUsers = function(e, t) {
                        var n = new Set([null === (c = t.author) || void 0 === c ? void 0 : c.id, null === (f = t.interaction) || void 0 === f ? void 0 : f.user.id].concat((0, i._)(null !== (E = null === (_ = t.mentions) || void 0 === _ ? void 0 : _.map(function(e) {
                                return e.id
                            })) && void 0 !== E ? E : []))),
                            a = [],
                            r = [],
                            o = !0,
                            s = !1,
                            d = void 0;
                        try {
                            for (var c, f, _, E, h, v = n[Symbol.iterator](); !(o = (h = v.next()).done); o = !0) {
                                var g = h.value;
                                if (null != g) {
                                    var m = u.default.getUser(g),
                                        p = l.default.getTrueMember(null != e ? e : "", g);
                                    null != m && r.push(m), null != p && a.push(p)
                                }
                            }
                        } catch (e) {
                            s = !0, d = e
                        } finally {
                            try {
                                !o && null != v.return && v.return()
                            } finally {
                                if (s) throw d
                            }
                        }
                        return [a, r]
                    }, e
                }()
        },
        619514: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("761020"),
                l = n("778455");
            n("363505"), n("814951"), n("996173"), n("47120"), n("357629"), n("462848"), n("633702"), n("266796");
            var u = n("661223"),
                o = n("312916"),
                s = n("731865"),
                d = n("362753"),
                c = n("232733"),
                f = n("597220"),
                _ = n("168419"),
                E = n("487958"),
                h = n("422098"),
                v = n("359936"),
                g = n("470085"),
                m = n("501178"),
                p = null,
                A = new _.ExtendedMemoryLru(750, 500),
                S = new E.Lru(15),
                T = !1,
                y = function(e) {
                    (0, r._)(n, e);
                    var t = (0, l._)(n);

                    function n() {
                        return (0, a._)(this, n), t.apply(this, arguments)
                    }
                    var u = n.prototype;
                    return u.initialize = function() {
                        this.waitFor(s.default), this.waitFor(c.default), this.waitFor(d.default), this.syncWith([f.default], function() {
                            return !0
                        }), this.syncWith([c.default], C)
                    }, u.canEvictOrphans = function() {
                        return T
                    }, u.saveLimit = function(e) {
                        var t = s.default.getBasicChannel(e);
                        return null != t && (0, v.isPrivateChannel)(t) || null != t && A.has(e) ? 25 : 1
                    }, u.getSaveableChannels = function() {
                        var e = s.default.getChannelIds(null).map(function(e) {
                            return {
                                guildId: null,
                                channelId: e
                            }
                        });
                        return f.default.isLowDisk ? null != p ? (0, i._)(e).concat([p]) : e : (0, i._)(e).concat((0, i._)(A.values()))
                    }, u.toSnapshot = function() {
                        return {
                            v: 1,
                            channels: (0, i._)(A.allValues()).filter(function(e) {
                                return !e.fallback
                            }),
                            penalized: (0, i._)(S.keys()),
                            lastChannel: p
                        }
                    }, n.mergeSnapshot = function(e) {
                        var t = A,
                            n = S;
                        A = new _.ExtendedMemoryLru(A.primaryCapacity, A.extendedCapacity), S = new E.Lru(S.capacity), p = null != p ? p : e.lastChannel;
                        for (var a = 0, r = [e.channels, t.values()]; a < r.length; a++) {
                            var i = r[a],
                                l = !0,
                                u = !1,
                                o = void 0;
                            try {
                                for (var s, d = i[Symbol.iterator](); !(l = (s = d.next()).done); l = !0) {
                                    var c = s.value;
                                    !c.fallback && A.put(c.channelId, c)
                                }
                            } catch (e) {
                                u = !0, o = e
                            } finally {
                                try {
                                    !l && null != d.return && d.return()
                                } finally {
                                    if (u) throw o
                                }
                            }
                        }
                        for (var f = 0, h = [e.penalized, n.keys()]; f < h.length; f++) {
                            var v = h[f],
                                g = !0,
                                m = !1,
                                T = void 0;
                            try {
                                for (var y, C = v[Symbol.iterator](); !(g = (y = C.next()).done); g = !0) {
                                    var M = y.value;
                                    S.put(M, null)
                                }
                            } catch (e) {
                                m = !0, T = e
                            } finally {
                                try {
                                    !g && null != C.return && C.return()
                                } finally {
                                    if (m) throw T
                                }
                            }
                        }
                    }, n.recordChannel = function(e) {
                        var t = s.default.getBasicChannel(e);
                        if (null != t && (0, g.isReadableChannel)(t)) {
                            var n, a = {
                                guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                                channelId: e,
                                channelType: t.type
                            };
                            p = a, A.put(e, a), (0, h.isLimitedChannel)(t) && null != S.put(e, null) && A.delete(e)
                        }
                    }, n.deleteChannel = function(e) {
                        A.delete(e)
                    }, n.deleteGuild = function(e) {
                        var t = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var r, i = A.allValues()[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                                var l = r.value;
                                l.guildId === e && A.delete(l.channelId)
                            }
                        } catch (e) {
                            n = !0, a = e
                        } finally {
                            try {
                                !t && null != i.return && i.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                    }, n.dropUnreachableChannels = function() {
                        var e = !0,
                            t = !1,
                            a = void 0;
                        try {
                            for (var r, i = A.keys()[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                                var l = r.value,
                                    u = s.default.getBasicChannel(l);
                                !(0, g.isReadableChannel)(u) && n.deleteChannel(l)
                            }
                        } catch (e) {
                            t = !0, a = e
                        } finally {
                            try {
                                !e && null != i.return && i.return()
                            } finally {
                                if (t) throw a
                            }
                        }
                    }, n.deleteUnreadableGuildChannels = function(e) {
                        var t = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var i, l = A.values()[Symbol.iterator](); !(t = (i = l.next()).done); t = !0) {
                                var u = i.value;
                                e === u.guildId && !(0, g.isReadableChannelId)(u.channelId) && n.deleteChannel(u.channelId)
                            }
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                !t && null != l.return && l.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                    }, n.replaceLru = function(e) {
                        A = e
                    }, n
                }(u.default.Store);

            function C() {
                var e = c.default.getChannelId();
                null != e && y.recordChannel(e)
            }

            function M(e) {
                var t = e.id,
                    n = (0, g.isReadableChannel)(e),
                    a = c.default.getChannelId();
                n && t === a && y.recordChannel(t), !n && y.deleteChannel(t)
            }
            var I = new y(o.default, {
                CACHE_LOADED_LAZY_NO_CACHE: function(e) {
                    T = !0
                },
                CACHE_LOADED_LAZY: function(e) {
                    T = !0, null != e.saveableChannels && y.mergeSnapshot(e.saveableChannels)
                },
                CHANNEL_DELETE: function(e) {
                    y.deleteChannel(e.channel.id)
                },
                CHANNEL_UPDATES: function(e) {
                    var t = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var r, i = e.channels[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                            var l = r.value;
                            M(l)
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !t && null != i.return && i.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function() {
                    y.dropUnreachableChannels(), y.replaceLru((0, m.withFallbacks)(A, 1250))
                },
                GUILD_DELETE: function(e) {
                    return !e.guild.unavailable && (y.deleteGuild(e.guild.id), !0)
                },
                LOGIN_SUCCESS: function(e) {
                    A.clear(), S.clear(), T = !1
                },
                THREAD_DELETE: function(e) {
                    y.deleteChannel(e.channel.id)
                },
                THREAD_UPDATE: function(e) {
                    M(e.channel)
                }
            })
        },
        422098: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isLimitedChannel: function() {
                    return i
                }
            }), n("731865");
            var a = n("362753"),
                r = n("467006");

            function i(e) {
                var t, n = null !== (t = a.default.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
                return null != e && e.type !== r.ChannelTypes.DM && e.type !== r.ChannelTypes.GROUP_DM && n >= 1e4
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
                    return o
                },
                isReadableChannelId: function() {
                    return s
                }
            });
            var a = n("775822"),
                r = n("731865"),
                i = n("197905"),
                l = n("467006"),
                u = l.BasicPermissions.VIEW_CHANNEL | l.BasicPermissions.READ_MESSAGE_HISTORY;

            function o(e) {
                return null != e && (e.type === l.ChannelTypes.DM || e.type === l.ChannelTypes.GROUP_DM || (0, a.isTextChannel)(e.type) && i.default.canBasicChannel(u, e))
            }

            function s(e) {
                return null != e && o(r.default.getBasicChannel(e))
            }
        },
        501178: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                withFallbacks: function() {
                    return d
                }
            });
            var a = n("154005");
            n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("69485");
            var r = n("731865"),
                i = n("880315"),
                l = n("168419"),
                u = n("422098"),
                o = n("470085"),
                s = n("467006");

            function d(e, t) {
                if (e.totalLength >= t) return e;
                var n = new l.ExtendedMemoryLru(e.primaryCapacity, e.extendedCapacity),
                    a = t - e.totalLength,
                    d = !0,
                    f = !1,
                    _ = void 0;
                try {
                    for (var E, h = i.default.getGuildFolders()[Symbol.iterator](); !(d = (E = h.next()).done); d = !0) {
                        var v = E.value,
                            g = !0,
                            m = !1,
                            p = void 0;
                        try {
                            for (var A, S = v.guildIds[Symbol.iterator](); !(g = (A = S.next()).done); g = !0) {
                                var T = A.value,
                                    y = !0,
                                    C = !1,
                                    M = void 0;
                                try {
                                    for (var I, L = Object.values(r.default.getMutableBasicGuildChannelsForGuild(T))[Symbol.iterator](); !(y = (I = L.next()).done); y = !0) {
                                        var N = I.value;
                                        if (function(e) {
                                                return e.type === s.ChannelTypes.DM || e.type === s.ChannelTypes.GROUP_DM || e.type === s.ChannelTypes.GUILD_TEXT
                                            }(N) && (0, o.isReadableChannel)(N) && !(0, u.isLimitedChannel)(N) && function(e, t, n) {
                                                !n.hasExtended(t.id) && n.put(t.id, {
                                                    guildId: e,
                                                    channelId: t.id,
                                                    channelType: t.type,
                                                    fallback: !0
                                                })
                                            }(T, N, n), n.totalLength >= a) return c(n, e)
                                    }
                                } catch (e) {
                                    C = !0, M = e
                                } finally {
                                    try {
                                        !y && null != L.return && L.return()
                                    } finally {
                                        if (C) throw M
                                    }
                                }
                            }
                        } catch (e) {
                            m = !0, p = e
                        } finally {
                            try {
                                !g && null != S.return && S.return()
                            } finally {
                                if (m) throw p
                            }
                        }
                    }
                } catch (e) {
                    f = !0, _ = e
                } finally {
                    try {
                        !d && null != h.return && h.return()
                    } finally {
                        if (f) throw _
                    }
                }
                return c(n, e)
            }

            function c(e, t) {
                var n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var l, u = t.allEntries()[Symbol.iterator](); !(n = (l = u.next()).done); n = !0) {
                        var o = (0, a._)(l.value, 2),
                            s = o[0],
                            d = o[1];
                        e.put(s, d)
                    }
                } catch (e) {
                    r = !0, i = e
                } finally {
                    try {
                        !n && null != u.return && u.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return e
            }
        },
        597220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("356056"),
                r = n("87627"),
                i = n("29713"),
                l = n("778455"),
                u = n("324415");
            n("814951");
            var o = n("647721"),
                s = n("312916"),
                d = n("841869"),
                c = n("366598"),
                f = new d.default("FileSystemStore"),
                _ = 6e5,
                E = new(function(e) {
                    (0, i._)(n, e);
                    var t = (0, l._)(n);

                    function n() {
                        var e;
                        return (0, r._)(this, n), (e = t.call(this, s.default, {
                            APP_STATE_UPDATE: function(t) {
                                return e.handleAppStateUpdate(t)
                            },
                            POST_CONNECTION_OPEN: function() {
                                return e.handlePostConnectionOpen()
                            }
                        })).isLowDisk = !1, e.refresh(), e.waitFor(c.default), setInterval(function() {
                            return e.refresh()
                        }, _), e
                    }
                    var o = n.prototype;
                    return o.handlePostConnectionOpen = function() {
                        return this.refresh(), !1
                    }, o.handleAppStateUpdate = function(e) {
                        return "active" !== e.state && this.refresh(), !1
                    }, o.refresh = function() {
                        var e = this;
                        return (0, a._)(function() {
                            var t, n, a, r, i, l;
                            return (0, u._)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, null === (n = c.default.database()) || void 0 === n ? void 0 : null === (t = n.fsInfo()) || void 0 === t ? void 0 : t.catch(function(e) {
                                            return f.warn("couldn't get fs info", e)
                                        })];
                                    case 1:
                                        return null != (a = u.sent()) && (r = a.fs.available < 268435456 || a.fs.available < 3 * a.database.used || a.fs.available < 2 * a.database.total, i = a.fs.available > 805306368 && a.fs.available > 4 * a.database.used && a.fs.available > 4 * a.database.total, null != (l = !!r || !i && null) && e.isLowDisk !== l && (e.isLowDisk = l, e.emitChange())), [2]
                                }
                            })
                        })()
                    }, n
                }(o.default))
        },
        168419: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ExtendedMemoryLru: function() {
                    return o
                }
            });
            var a = n("87627"),
                r = n("200344"),
                i = n("154005");
            n("996173"), n("47120"), n("357629"), n("633702"), n("266796");
            var l = n("860350"),
                u = n("487958"),
                o = function() {
                    function e(t, n) {
                        (0, a._)(this, e), this.primary = new u.Lru(t), this.extended = new u.Lru(n)
                    }
                    var t = e.prototype;
                    return t.clear = function() {
                        this.primary.clear(), this.extended.clear()
                    }, t.has = function(e) {
                        return this.primary.has(e)
                    }, t.hasExtended = function(e) {
                        return this.primary.has(e) || this.extended.has(e)
                    }, t.get = function(e) {
                        return this.primary.get(e)
                    }, t.put = function(e, t) {
                        var n = this.primary.put(e, t);
                        void 0 !== n && this.extended.put(n[0], n[1])
                    }, t.delete = function(e) {
                        var t = this.primary.delete(e),
                            n = this.extended.delete(e);
                        return this.upstreamItems(), t || n
                    }, t.upstreamItems = function() {
                        if (this.canUpstreamItems()) {
                            var e = !0,
                                t = !1,
                                n = void 0;
                            try {
                                for (var a, r = this.extended.entries()[Symbol.iterator](); !(e = (a = r.next()).done); e = !0) {
                                    var l = (0, i._)(a.value, 2),
                                        u = l[0],
                                        o = l[1];
                                    if (this.primary.put(u, o), this.extended.delete(u), !this.canUpstreamItems()) break
                                }
                            } catch (e) {
                                t = !0, n = e
                            } finally {
                                try {
                                    !e && null != r.return && r.return()
                                } finally {
                                    if (t) throw n
                                }
                            }
                        }
                    }, t.canUpstreamItems = function() {
                        return this.primary.length < this.primary.capacity && this.extended.length > 0
                    }, t.entries = function() {
                        return this.primary.entries()
                    }, t.keys = function() {
                        return this.primary.keys()
                    }, t.values = function() {
                        return this.primary.values()
                    }, t.allEntries = function() {
                        return l.chain(this.extended.entries(), this.primary.entries())
                    }, t.allKeys = function() {
                        return l.chain(this.extended.keys(), this.primary.keys())
                    }, t.allValues = function() {
                        return l.chain(this.extended.values(), this.primary.values())
                    }, (0, r._)(e, [{
                        key: "totalLength",
                        get: function() {
                            return this.primary.length + this.extended.length
                        }
                    }, {
                        key: "primaryCapacity",
                        get: function() {
                            return this.primary.capacity
                        }
                    }, {
                        key: "extendedCapacity",
                        get: function() {
                            return this.extended.capacity
                        }
                    }]), e
                }()
        },
        860350: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                chain: function() {
                    return i
                }
            });
            var a = n("87627");
            n("633702"), n("266796"), n("357629"), n("996173"), n("47120");
            var r = function() {
                function e(t) {
                    (0, a._)(this, e), this.index = 0, this.items = t
                }
                var t = e.prototype;
                return t[Symbol.iterator] = function() {
                    return this
                }, t.next = function() {
                    for (; this.index < this.items.length;) {
                        var e = this.items[this.index].next();
                        if (!e.done) return e;
                        this.index += 1
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                }, e
            }();

            function i() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new r(t)
            }
        },
        487958: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Lru: function() {
                    return l
                }
            });
            var a = n("87627"),
                r = n("200344"),
                i = n("761020");
            n("573788"), n("996173"), n("47120"), n("357629"), n("633702"), n("266796"), n("978209");
            var l = function() {
                function e(t) {
                    (0, a._)(this, e), this.items = new Map, this.limit = t
                }
                var t = e.prototype;
                return t[Symbol.iterator] = function() {
                    return this.items.entries()
                }, t.entries = function() {
                    return this.items.entries()
                }, t.keys = function() {
                    return this.items.keys()
                }, t.values = function() {
                    return this.items.values()
                }, t.ordered = function() {
                    return (0, i._)(this.items.values()).reverse()
                }, t.clear = function() {
                    this.items.clear()
                }, t.has = function(e) {
                    return this.items.has(e)
                }, t.get = function(e) {
                    return this.items.get(e)
                }, t.put = function(e, t) {
                    if (this.items.delete(e), this.items.set(e, t), !!(this.items.size > this.limit)) {
                        var n = this.oldestKey(),
                            a = this.items.get(n);
                        return this.items.delete(n), [n, a]
                    }
                }, t.delete = function(e) {
                    return this.items.delete(e)
                }, t.oldestKey = function() {
                    return this.items.keys().next().value
                }, (0, r._)(e, [{
                    key: "length",
                    get: function() {
                        return this.items.size
                    }
                }, {
                    key: "capacity",
                    get: function() {
                        return this.limit
                    }
                }]), e
            }()
        },
        24384: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchCommand: function() {
                    return S
                },
                fetchCommands: function() {
                    return T
                },
                fetchCommandsForApplication: function() {
                    return y
                },
                performAutocomplete: function() {
                    return A
                },
                querySearchManager: function() {
                    return p
                },
                setActiveCommand: function() {
                    return E
                },
                setPreferredCommandId: function() {
                    return h
                },
                updateApplicationGuildCommandPermissions: function() {
                    return m
                },
                updateOptionStates: function() {
                    return v
                },
                updateOptionValidationStates: function() {
                    return g
                },
                updateRegistry: function() {
                    return C
                }
            });
            var a = n("154005");
            n("977457"), n("996173"), n("151809"), n("363505");
            var r = n("512722"),
                i = n.n(r),
                l = n("454836"),
                u = n("312916"),
                o = n("243770"),
                s = n("262047"),
                d = n("84819"),
                c = n("429889"),
                f = n("150117"),
                _ = n("467006");

            function E(e) {
                var t = e.channelId,
                    n = e.command,
                    a = e.section,
                    r = e.location,
                    l = e.initialValues,
                    o = e.triggerSection,
                    s = e.queryLength;
                null != n && i()(n.inputType !== f.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder"), u.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                    channelId: t,
                    command: n,
                    section: a,
                    initialValues: l,
                    location: r,
                    triggerSection: o,
                    queryLength: s
                })
            }

            function h(e, t) {
                u.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                    channelId: e,
                    commandId: t
                })
            }

            function v(e, t) {
                u.default.dispatch({
                    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                    channelId: e,
                    changedOptionStates: t
                })
            }

            function g(e, t) {
                v(e, Object.fromEntries(Object.entries(t).map(function(e) {
                    var t = (0, a._)(e, 2),
                        n = t[0];
                    return [n, {
                        lastValidationResult: t[1]
                    }]
                })))
            }

            function m(e, t, n, a) {
                return l.default.put({
                    body: {
                        permissions: a
                    },
                    url: _.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
                })
            }
            var p = function(e, t, n, a, r) {
                u.default.dispatch({
                    type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
                    context: e,
                    query: t,
                    limit: n,
                    commandType: a,
                    applicationId: r
                })
            };

            function A(e, t, n) {
                i()(null != t.autocomplete, "Missing autocomplete context");
                var a, r = t.autocomplete,
                    f = r.query,
                    E = r.name,
                    h = d.default.fromTimestamp(Date.now());
                u.default.dispatch({
                    type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
                    nonce: h,
                    channelId: t.channel.id,
                    query: f,
                    name: E
                }), null == c.default.getAutocompleteChoices(t.channel.id, E, f) && l.default.post({
                    url: _.Endpoints.INTERACTIONS,
                    body: {
                        type: o.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
                        application_id: e.applicationId,
                        guild_id: null === (a = t.guild) || void 0 === a ? void 0 : a.id,
                        channel_id: t.channel.id,
                        session_id: s.default.getSessionId(),
                        data: n,
                        nonce: h
                    },
                    timeout: 3e3
                }).catch(function() {
                    u.default.dispatch({
                        type: "INTERACTION_FAILURE",
                        nonce: h
                    })
                })
            }

            function S(e, t, n) {
                u.default.dispatch({
                    type: "APPLICATION_COMMAND_FETCH",
                    channelId: t,
                    commandId: n,
                    guildId: e
                })
            }

            function T(e, t, n) {
                u.default.dispatch({
                    type: "APPLICATION_COMMANDS_FETCH",
                    channelId: t,
                    commandIds: n,
                    guildId: e
                })
            }

            function y(e) {
                var t = e.guildId,
                    n = e.channelId,
                    a = e.applicationId;
                u.default.dispatch({
                    type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION",
                    channelId: n,
                    guildId: t,
                    applicationId: a
                })
            }

            function C(e, t, n) {
                u.default.dispatch({
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
                    return m
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("21189"),
                l = n("227094"),
                u = n("778455");
            n("573788"), n("996173"), n("47120"), n("357629"), n("363505");
            var o = n("661223"),
                s = n("312916"),
                d = n("696923"),
                c = new Map,
                f = new Map;

            function _(e) {
                if (!f.has(e)) {
                    var t;
                    f.set(e, {
                        commandId: null === (t = d.default.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
                        optionName: d.default.getActiveOptionName(e),
                        optionNameToAutocompleteQueries: new Map,
                        optionNameToLastResults: new Map,
                        optionNameToNonce: new Map,
                        optionNameToLastQuery: new Map,
                        lastErrored: !1,
                        lastResponseNonce: void 0
                    })
                }
                return f.get(e)
            }

            function E() {
                return c.clear(), f.clear(), !0
            }

            function h(e) {
                var t = e.channelId,
                    n = e.command;
                v(t, null == n ? void 0 : n.id)
            }

            function v(e, t) {
                var n = d.default.getActiveOptionName(e),
                    a = f.get(e);
                return null != a && (t !== a.commandId || n !== a.optionName) && (null != t && t !== a.commandId && (a.optionNameToLastResults.clear(), a.optionNameToNonce.clear(), a.optionNameToLastQuery.clear(), a.optionNameToAutocompleteQueries.clear()), a.lastErrored = !1, a.commandId = t, a.optionName = n, !0)
            }
            var g = function(e) {
                (0, r._)(n, e);
                var t = (0, u._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                var i = n.prototype;
                return i.initialize = function() {
                    this.waitFor(d.default)
                }, i.getLastErrored = function(e) {
                    return _(e).lastErrored
                }, i.getAutocompleteChoices = function(e, t, n) {
                    var a;
                    return null === (a = _(e).optionNameToAutocompleteQueries.get(t)) || void 0 === a ? void 0 : a.get(n)
                }, i.getAutocompleteLastChoices = function(e, t) {
                    return _(e).optionNameToLastResults.get(t)
                }, i.getLastResponseNonce = function(e) {
                    return _(e).lastResponseNonce
                }, n
            }(o.default.Store);
            g.displayName = "ApplicationCommandAutocompleteStore";
            var m = new g(s.default, {
                CONNECTION_OPEN: E,
                LOGOUT: E,
                CHANNEL_SELECT: E,
                APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
                    var t, n = e.nonce,
                        a = e.channelId,
                        r = e.query,
                        i = e.name,
                        l = _(a);
                    if (l.optionNameToLastQuery.get(i) === r) return !1;
                    l.optionNameToLastQuery.set(i, r);
                    var u = null === (t = l.optionNameToAutocompleteQueries.get(i)) || void 0 === t ? void 0 : t.get(r);
                    if (null != u) return l.lastErrored = !1, l.optionNameToLastResults.set(i, u), !0;
                    var o = l.optionNameToNonce.get(i);
                    if (null != o && c.delete(o), c.set(n, {
                            channelId: a,
                            query: r,
                            name: i
                        }), l.optionNameToNonce.set(i, n), l.lastErrored) return l.lastErrored = !1, !0
                },
                APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
                    var t, n, a = e.choices,
                        r = e.nonce,
                        u = c.get(r);
                    if (null == u) return !1;
                    c.delete(r);
                    var o = null !== (n = null == a ? void 0 : a.map(function(e) {
                            var t;
                            return (0, l._)((0, i._)({}, e), {
                                displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                            })
                        })) && void 0 !== n ? n : [],
                        s = _(u.channelId);
                    return null == s.optionNameToAutocompleteQueries.get(u.name) && s.optionNameToAutocompleteQueries.set(u.name, new Map), null === (t = s.optionNameToAutocompleteQueries.get(u.name)) || void 0 === t || t.set(u.query, o), s.optionNameToLastQuery.get(u.name) === u.query && (s.lastErrored = !1, s.optionNameToLastResults.set(u.name, o)), s.lastResponseNonce = r, !0
                },
                INTERACTION_FAILURE: function(e) {
                    var t = e.nonce;
                    if (null == t) return !1;
                    var n = c.get(t);
                    return null != n && (c.delete(t), _(n.channelId).lastErrored = !0, !0)
                },
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: h,
                APP_LAUNCHER_SET_ACTIVE_COMMAND: h,
                APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
                    var t = e.channelId,
                        n = e.command;
                    v(t, null == n ? void 0 : n.id)
                }
            })
        },
        696923: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("21189"),
                l = n("154005"),
                u = n("778455");
            n("357629"), n("151809"), n("633702"), n("266796"), n("996173"), n("47120");
            var o = n("661223"),
                s = n("312916"),
                d = n("475232"),
                c = n("232733"),
                f = n("110531"),
                _ = {};

            function E() {
                return _ = {}, !0
            }

            function h(e) {
                return !(e in _) && (_[e] = {
                    activeCommand: null,
                    activeCommandSection: null,
                    activeOptionName: null,
                    preferredCommandId: null,
                    optionStates: {},
                    initialValues: {}
                }), _[e]
            }

            function v(e) {
                var t, n = e.channelId,
                    a = e.command,
                    r = e.section,
                    i = e.initialValues,
                    l = e.location,
                    u = e.triggerSection,
                    o = e.queryLength,
                    s = h(n);
                if ((null == a ? void 0 : a.id) === (null === (t = s.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
                s.activeCommand = a, s.activeCommandSection = r, s.activeOptionName = null, s.preferredCommandId = null, s.initialValues = null != i ? i : {};
                var d = {};
                return (null == a ? void 0 : a.options) != null && a.options.forEach(function(e) {
                    d[e.name] = {
                        isActive: !1,
                        hasValue: !1,
                        lastValidationResult: null,
                        optionValue: null
                    }
                }), s.optionStates = d, null != a && (0, f.trackCommandSelected)({
                    command: a,
                    location: l,
                    triggerSection: u,
                    queryLength: o
                }), !0
            }

            function g(e) {
                var t, n, a = e.channelId,
                    r = e.commandId,
                    i = h(a);
                return r !== i.preferredCommandId && (null !== i.preferredCommandId || r !== (null !== (n = null === (t = i.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && (i.activeCommand = null, i.activeOptionName = null, i.preferredCommandId = r, i.optionStates = {}, !0)
            }

            function m(e) {
                var t = e.channelId,
                    n = e.changedOptionStates,
                    a = h(t),
                    r = (0, i._)({}, a.optionStates),
                    u = !0,
                    o = !1,
                    s = void 0;
                try {
                    for (var d, c = Object.entries(n)[Symbol.iterator](); !(u = (d = c.next()).done); u = !0) {
                        var f, _, E, v = (0, l._)(d.value, 2),
                            g = v[0],
                            m = v[1];
                        if (g in a.optionStates) {
                            if (!(void 0 !== m.hasValue ? m.hasValue : r[g].hasValue)) {
                                r[g] = {
                                    hasValue: !1,
                                    isActive: !1,
                                    lastValidationResult: null,
                                    optionValue: null,
                                    location: void 0,
                                    length: void 0
                                }, a.activeOptionName === g && (a.activeOptionName = null);
                                continue
                            }
                            var p = r[g];
                            r[g] = {
                                hasValue: !0,
                                isActive: void 0 !== m.isActive ? m.isActive : p.isActive,
                                lastValidationResult: void 0 !== m.lastValidationResult ? m.lastValidationResult : p.lastValidationResult,
                                optionValue: null !== (f = m.optionValue) && void 0 !== f ? f : p.optionValue,
                                location: null !== (_ = m.location) && void 0 !== _ ? _ : p.location,
                                length: null !== (E = m.length) && void 0 !== E ? E : p.length
                            }, void 0 !== m.isActive && (m.isActive ? (null != a.activeOptionName && a.activeOptionName !== g && (r[a.activeOptionName] = (0, i._)({}, r[a.activeOptionName]), r[a.activeOptionName].isActive = !1), a.activeOptionName = g) : g === a.activeOptionName && (a.activeOptionName = null))
                        }
                    }
                } catch (e) {
                    o = !0, s = e
                } finally {
                    try {
                        !u && null != c.return && c.return()
                    } finally {
                        if (o) throw s
                    }
                }
                return a.optionStates = r, !0
            }
            var p = function(e) {
                (0, r._)(n, e);
                var t = (0, u._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                var l = n.prototype;
                return l.initialize = function() {
                    d.default.addChangeListener(function() {
                        var e = c.default.getChannelId();
                        if (null == e) return _ = {}, !0;
                        var t = d.default.getCurrentSidebarChannelId(e);
                        if (null != t && t in _) return !1;
                        _ = e in _ ? {
                            [e]: _[e]
                        } : {}
                    })
                }, l.getActiveCommand = function(e) {
                    return h(e).activeCommand
                }, l.getActiveCommandSection = function(e) {
                    return h(e).activeCommandSection
                }, l.getActiveOptionName = function(e) {
                    return h(e).activeOptionName
                }, l.getActiveOption = function(e) {
                    var t, n, a, r = h(e);
                    return null !== (a = null === (n = r.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find(function(e) {
                        return e.name === r.activeOptionName
                    })) && void 0 !== a ? a : null
                }, l.getPreferredCommandId = function(e) {
                    return h(e).preferredCommandId
                }, l.getOptionStates = function(e) {
                    return h(e).optionStates
                }, l.getOptionState = function(e, t) {
                    return h(e).optionStates[t]
                }, l.getOption = function(e, t) {
                    var n, a;
                    return null === (a = h(e).activeCommand) || void 0 === a ? void 0 : null === (n = a.options) || void 0 === n ? void 0 : n.find(function(e) {
                        return e.name === t
                    })
                }, l.getState = function(e) {
                    return (0, i._)({}, h(e))
                }, n
            }(o.default.Store);
            p.displayName = "ApplicationCommandStore";
            var A = new p(s.default, {
                CONNECTION_OPEN: E,
                CHANNEL_SELECT: E,
                LOGOUT: E,
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: v,
                APPLICATION_COMMAND_SET_PREFERRED_COMMAND: g,
                APPLICATION_COMMAND_UPDATE_OPTIONS: m,
                APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
                    var t = e.channelId,
                        n = e.preferredCommandId,
                        a = e.command,
                        r = e.section,
                        i = e.changedOptionStates,
                        l = v({
                            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                            channelId: t,
                            command: a,
                            section: r
                        }),
                        u = g({
                            type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                            channelId: t,
                            commandId: n
                        }),
                        o = m({
                            type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                            channelId: t,
                            changedOptionStates: i
                        });
                    return l || u || o
                }
            })
        },
        221281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutocompleterQuerySymbols: function() {
                    return o
                },
                AutocompleterResultTypes: function() {
                    return u
                },
                FindResultDirections: function() {
                    return l
                },
                HeaderRecord: function() {
                    return d
                }
            });
            var a, r, i, l, u, o, s = n("87627"),
                d = function e(t) {
                    (0, s._)(this, e), this.id = t, this.text = t
                };
            (a = l || (l = {})).UP = "UP", a.DOWN = "DOWN", (r = u || (u = {})).GUILD = "GUILD", r.TEXT_CHANNEL = "TEXT_CHANNEL", r.GROUP_DM = "GROUP_DM", r.VOICE_CHANNEL = "VOICE_CHANNEL", r.USER = "USER", r.HEADER = "HEADER", r.APPLICATION = "APPLICATION", r.SKU = "SKU", r.LINK = "LINK", (i = o || (o = {})).USER = "@", i.TEXT_CHANNEL = "#", i.VOICE_CHANNEL = "!", i.GUILD = "*", i.APPLICATION = "$"
        },
        555083: function(e, t, n) {
            "use strict";

            function a(e, t) {
                if (e.score === t.score) {
                    var n, a, r, i, l, u, o = null !== (i = null !== (r = e.sortable) && void 0 !== r ? r : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== i ? i : "",
                        s = null !== (u = null !== (l = e.sortable) && void 0 !== l ? l : null === (a = t.comparator) || void 0 === a ? void 0 : a.toLocaleLowerCase()) && void 0 !== u ? u : "";
                    if (o < s) return -1;
                    if (o > s) return 1
                }
                return t.score - e.score
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        332391: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("731865"),
                r = n("467006");

            function i(e) {
                if (null == e.parent_id) return e.type === r.ChannelTypes.GUILD_CATEGORY ? (e.position + 1) * 1e3 : e.position;
                var t, n, i = ((null !== (n = null === (t = a.default.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== n ? n : 0) + 1) * 1e3;
                return e.isGuildVocal() ? i + e.position + 500 : i + e.position
            }

            function l(e, t) {
                if (e.score !== t.score) return t.score - e.score;
                var n, a, r, l, u, o, s = i(e.record),
                    d = i(t.record);
                if (s !== d) return s - d;
                var c = null !== (l = null !== (r = e.sortable) && void 0 !== r ? r : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== l ? l : "",
                    f = null !== (o = null !== (u = e.sortable) && void 0 !== u ? u : null === (a = t.comparator) || void 0 === a ? void 0 : a.toLocaleLowerCase()) && void 0 !== o ? o : "";
                return c < f ? -1 : c > f ? 1 : 0
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

            function r(e) {
                return {
                    textValue: e,
                    richValue: l(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return a
                },
                createState: function() {
                    return r
                },
                toRichValue: function() {
                    return l
                },
                voidToOptionValue: function() {
                    return u
                }
            }), n("917168"), n("301563"), n("363505"), n("411104");
            var i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function l(e) {
                return "" !== e ? e.split("\n").map(function(e) {
                    return {
                        type: "line",
                        children: [{
                            text: e
                        }]
                    }
                }) : i
            }

            function u(e) {
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
        608692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isProactiveClydeV2Enabled: function() {
                    return r
                }
            });
            var a = (0, n("516086").createExperiment)({
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

            function r(e, t) {
                return a.getCurrentConfig({
                    guildId: e,
                    location: t
                }, {
                    autoTrackExposure: !1
                }).isProactiveClydeV2Enabled
            }
        },
        230773: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("357629");
            var a = n("262047"),
                r = n("731865"),
                i = n("162256"),
                l = n("608692");

            function u(e) {
                var t, n, u, o = null !== (n = null === (t = r.default.getBasicChannel(e)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== n ? n : "",
                    s = i.default.getMessages(e),
                    d = s.last();
                if (null == d) return !1;
                var c = null !== (u = s.getManyBefore(d.id, 10)) && void 0 !== u ? u : [],
                    f = a.default.getId();
                return c.some(function(t) {
                    if (!t.author.isClyde() || null == t.messageReference) return !1;
                    var n, a = i.default.getMessage(e, t.messageReference.message_id);
                    return !!(null != a && (0, l.isProactiveClydeV2Enabled)(o, "allowProactiveClydeV2")) || (null == a ? void 0 : null === (n = a.author) || void 0 === n ? void 0 : n.id) === f
                })
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
                    return i
                }
            });
            var a = n("800976"),
                r = n("718693");

            function i(e) {
                var t = r.default.getCurrentConfig({
                        guildId: null != e ? e : "",
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
            n.r(t), n.d(t, {
                COMMUNITY_PORTAL_FORUM_PAGE: function() {
                    return d
                },
                ForumOnboardingCTAs: function() {
                    return i
                },
                ForumTimestampFormats: function() {
                    return l
                },
                MAX_FORUM_POST_TAGS: function() {
                    return o
                },
                MAX_FORUM_TAGS: function() {
                    return u
                },
                MAX_FORUM_TEMPLATE_LENGTH: function() {
                    return s
                }
            });
            var a, r, i, l, u = 20,
                o = 5,
                s = 256;
            (a = i || (i = {})).PERMISSIONS = "Permissions", a.GUIDELINES = "Guidelines", a.TAGS = "Tags", a.DEFAULT_REACTION = "Default Reaction", a.CREATE_POST = "Create Post";
            var d = "https://discord.com/community/creating-value-with-conversation";
            (r = l || (l = {}))[r.DURATION_AGO = 0] = "DURATION_AGO", r[r.POSTED_DURATION_AGO = 1] = "POSTED_DURATION_AGO"
        },
        789117: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("21189"),
                l = n("227094"),
                u = n("778455");
            n("633702"), n("266796"), n("357629"), n("996173"), n("47120");
            var o = n("661223"),
                s = n("312916"),
                d = n("822534"),
                c = n("357446"),
                f = n("871831"),
                _ = {};

            function E(e) {
                var t = e.threads,
                    n = e.firstMessages;
                if (null == n) return !1;
                var a = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var l, u = t[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) _[l.value.id] = {
                        loaded: !0,
                        firstMessage: null
                    }
                } catch (e) {
                    r = !0, i = e
                } finally {
                    try {
                        !a && null != u.return && u.return()
                    } finally {
                        if (r) throw i
                    }
                }
                var o = !0,
                    s = !1,
                    d = void 0;
                try {
                    for (var c, f = n[Symbol.iterator](); !(o = (c = f.next()).done); o = !0) {
                        var E = c.value;
                        h(E.channel_id, E)
                    }
                } catch (e) {
                    s = !0, d = e
                } finally {
                    try {
                        !o && null != f.return && f.return()
                    } finally {
                        if (s) throw d
                    }
                }
            }

            function h(e, t) {
                var n = null == t ? null : (0, d.createMessageRecord)(t);
                _[e] = {
                    loaded: !0,
                    firstMessage: n
                }
            }

            function v(e) {
                var t = e.type,
                    n = e.channelId,
                    a = e.messageId,
                    r = e.userId,
                    l = e.emoji,
                    u = e.optimistic,
                    o = e.burst,
                    s = e.reactionType,
                    d = _[n];
                if (null == d || null == d.firstMessage || a !== d.firstMessage.id) return !1;
                var c = f.default.getCurrentUser(),
                    E = null != c && c.id === r;
                if (u && !E) return !1;
                if (_[n] = (0, i._)({}, d), "MESSAGE_REACTION_ADD" === t) {
                    var h = e.colors;
                    _[n].firstMessage = d.firstMessage.addReaction(l, E, h, o, s)
                } else _[n].firstMessage = d.firstMessage.removeReaction(l, E, o, s)
            }
            var g = function(e) {
                (0, r._)(n, e);
                var t = (0, u._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                var i = n.prototype;
                return i.initialize = function() {
                    this.waitFor(c.default, f.default)
                }, i.isLoading = function(e) {
                    var t;
                    return (null === (t = _[e]) || void 0 === t ? void 0 : t.loaded) !== !0
                }, i.getMessage = function(e) {
                    return !(e in _) && (_[e] = {
                        loaded: !1,
                        firstMessage: null
                    }), _[e]
                }, n
            }(o.default.Store);
            g.displayName = "ForumPostMessagesStore";
            var m = new g(s.default, {
                CONNECTION_OPEN: function() {
                    _ = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || e.message.id !== e.message.channel_id) return !1;
                    h(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (e.message.id !== e.message.channel_id) return !1;
                    var t = _[e.message.id];
                    if (null == t || null == t.firstMessage) return !1;
                    _[e.message.id] = (0, l._)((0, i._)({}, t), {
                        firstMessage: (0, d.updateMessageRecord)(t.firstMessage, e.message)
                    })
                },
                MESSAGE_DELETE: function(e) {
                    if (e.id !== e.channelId) return !1;
                    _[e.channelId] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                THREAD_CREATE: function(e) {
                    if (null != _[e.channel.id] || !c.default.isSubscribedToThreads(e.channel.guild_id)) return !1;
                    _[e.channel.id] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                MESSAGE_REACTION_ADD: v,
                MESSAGE_REACTION_REMOVE: v,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        a = _[t];
                    if (null == a || null == a.firstMessage || n !== a.firstMessage.id) return !1;
                    _[t] = (0, l._)((0, i._)({}, a), {
                        firstMessage: a.firstMessage.set("reactions", [])
                    })
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        a = e.emoji,
                        r = _[t];
                    if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
                    _[t] = (0, l._)((0, i._)({}, r), {
                        firstMessage: r.firstMessage.removeReactionsForEmoji(a)
                    })
                },
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        a = e.reactions,
                        r = _[t];
                    if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
                    var u = f.default.getCurrentUser(),
                        o = r.firstMessage.addReactionBatch(a, null == u ? void 0 : u.id);
                    _[t] = (0, l._)((0, i._)({}, r), {
                        firstMessage: o
                    })
                },
                LOAD_FORUM_POSTS: function(e) {
                    var t = e.threads;
                    for (var n in t) h(n, t[n].first_message)
                },
                LOAD_THREADS_SUCCESS: E,
                LOAD_ARCHIVED_THREADS_SUCCESS: E,
                LOAD_MESSAGES_SUCCESS: function(e) {
                    var t = e.channelId,
                        n = e.messages,
                        a = n[n.length - 1];
                    null != a && a.id === t && (_[t] = {
                        loaded: !0,
                        firstMessage: (0, d.createMessageRecord)(a)
                    })
                }
            })
        },
        48356: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("21189"),
                l = n("227094"),
                u = n("778455");
            n("462848"), n("357629");
            var o = n("661223"),
                s = n("312916"),
                d = n("731865"),
                c = {};

            function f(e) {
                var t = d.default.getChannel(e);
                return !!(null != t && t.isForumLikeChannel()) || !1
            }

            function _(e) {
                var t, n = null !== (t = c[e]) && void 0 !== t ? t : {
                    query: null,
                    loading: !1,
                    results: null
                };
                return c[e] = n, n
            }
            var E = function(e) {
                (0, r._)(n, e);
                var t = (0, u._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                var i = n.prototype;
                return i.getSearchQuery = function(e) {
                    var t = c[e];
                    return null == t ? void 0 : t.query
                }, i.getSearchLoading = function(e) {
                    var t, n = c[e];
                    return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t
                }, i.getSearchResults = function(e) {
                    var t = c[e];
                    return null == t ? void 0 : t.results
                }, i.getHasSearchResults = function(e) {
                    var t = c[e];
                    return (null == t ? void 0 : t.results) != null && t.results.length > 0
                }, n
            }(o.default.Store);
            E.displayName = "ForumSearchStore";
            var h = new E(s.default, {
                CONNECTION_OPEN: function() {
                    c = {}
                },
                THREAD_DELETE: function(e) {
                    var t, n = e.channel,
                        a = n.parent_id;
                    if (null == a) return !1;
                    var r = c[a];
                    if (null == r) return !1;
                    c[a] = (0, l._)((0, i._)({}, r), {
                        results: null === (t = r.results) || void 0 === t ? void 0 : t.filter(function(e) {
                            return n.id !== e
                        })
                    })
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return delete c[t.id]
                },
                FORUM_SEARCH_QUERY_UPDATED: function(e) {
                    var t = e.channelId,
                        n = e.query;
                    if (!f(t)) return !1;
                    var a = _(t);
                    c[t] = (0, l._)((0, i._)({}, a), {
                        query: n,
                        results: null
                    })
                },
                FORUM_SEARCH_START: function(e) {
                    var t = e.channelId;
                    if (!f(t)) return !1;
                    var n = _(t);
                    c[t] = (0, l._)((0, i._)({}, n), {
                        loading: !0
                    })
                },
                FORUM_SEARCH_SUCCESS: function(e) {
                    var t = e.channelId,
                        n = e.threadIds;
                    if (!f(t)) return !1;
                    var a = _(t);
                    c[t] = (0, l._)((0, i._)({}, a), {
                        loading: !1,
                        results: n
                    })
                },
                FORUM_SEARCH_FAILURE: function(e) {
                    var t = e.channelId;
                    if (!f(t)) return !1;
                    var n = _(t);
                    c[t] = (0, l._)((0, i._)({}, n), {
                        loading: !1,
                        results: []
                    })
                },
                FORUM_SEARCH_CLEAR: function(e) {
                    var t = e.channelId;
                    return !!f(t) && delete c[t]
                }
            })
        },
        9999: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canDisplayPostUnreadMessageCount: function() {
                    return h
                },
                getForumPostReadStates: function() {
                    return c
                },
                getForumPostReadStatesById: function() {
                    return f
                },
                getForumTimestampFormatter: function() {
                    return E
                },
                isForumPostPinned: function() {
                    return v
                }
            });
            var a = n("154005"),
                r = n("930198"),
                i = n("731865"),
                l = n("327271"),
                u = n("417223"),
                o = n("921565"),
                s = n("551835"),
                d = n("30175");

            function c(e, t) {
                var n = (0, a._)(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.default], 1),
                    r = n[0];
                return {
                    isNew: !e.isArchivedThread() && r.isNewForumThread(e.id, e.parent_id, t),
                    hasUnreads: !e.isArchivedThread() && r.isForumPostUnread(e.id)
                }
            }

            function f(e) {
                var t = (0, a._)(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, l.default, u.default], 3),
                    n = t[0],
                    r = t[1],
                    o = t[2],
                    s = n.getChannel(e);
                if (null == s) return null;
                var d = r.getGuild(s.guild_id);
                return null == d ? null : c(s, d, [o])
            }
            var _ = function() {
                return {
                    minutes: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
                    hours: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
                    days: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
                    month: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
                }
            };

            function E(e, t) {
                if (t === o.ForumTimestampFormats.POSTED_DURATION_AGO && e === r.ThreadSortOrder.CREATION_DATE) return _
            }

            function h(e, t) {
                var n = (0, a._)(t, 1)[0],
                    r = n.hasTrackedUnread(e),
                    i = n.hasOpenedThread(e),
                    l = null != n.getTrackedAckMessageId(e);
                return r && i && l
            }

            function v(e) {
                var t;
                return (null === (t = i.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(s.ChannelFlags.PINNED)) === !0
            }
        },
        65266: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("87627"),
                r = n("206652"),
                i = n("731865"),
                l = n("491538"),
                u = n("947416"),
                o = new function e() {
                    var t = this;
                    (0, a._)(this, e), this.filterTagIds = null, this.sortOrder = null, this.layout = null, this.setFilterTagIds = function(e) {
                        t.filterTagIds = e
                    }, this.setSortOrder = function(e) {
                        t.sortOrder = e
                    }, this.setLayout = function(e) {
                        t.layout = e
                    }, this.getFilterTagIdsAnalytics = function() {
                        return null != t.filterTagIds ? Array.from(t.filterTagIds) : []
                    }, this.getSortOrderAnalytics = function(e) {
                        var n, a;
                        return null !== (a = t.sortOrder) && void 0 !== a ? a : null === (n = i.default.getChannel(e)) || void 0 === n ? void 0 : n.getDefaultSortOrder()
                    }, this.getLayoutAnalytics = function(e) {
                        var n, a = i.default.getChannel(e),
                            o = null !== (n = t.layout) && void 0 !== n ? n : null == a ? void 0 : a.getDefaultLayout();
                        return (0, l.isForumActivityExperimentEnabled)(null == a ? void 0 : a.guild_id) && o === r.ForumLayout.LIST ? u.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : o
                    }
                }
        },
        728956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("778455");
            n("357629");
            var l = n("963694"),
                u = n("408109"),
                o = n("262047"),
                s = n("731865"),
                d = n("9999"),
                c = new(function(e) {
                    (0, r._)(n, e);
                    var t = (0, i._)(n);

                    function n() {
                        var e;
                        return (0, a._)(this, n), e = t.apply(this, arguments), e.readStateSnapshots = {}, e.actions = {
                            CHANNEL_SELECT: function(t) {
                                return e.handleChannelSelect(t)
                            },
                            THREAD_CREATE: function(t) {
                                return e.handleThreadCreate(t)
                            }
                        }, e.handleChannelSelect = function(t) {
                            var n = t.channelId;
                            if (null != n) {
                                var a = s.default.getChannel(n);
                                null != a && a.isForumLikeChannel() && (e.readStateSnapshots = {}, e.processForumChannel(a.guild_id, n))
                            }
                        }, e.processForumChannel = function(t, n) {
                            Object.keys(u.default.getThreadsForParent(t, n)).forEach(function(t) {
                                var n = (0, d.getForumPostReadStatesById)(t);
                                null != n && (e.readStateSnapshots[t] = n)
                            })
                        }, e.getReadStateSnapshotAnalytics = function(t) {
                            return e.readStateSnapshots[t]
                        }, e
                    }
                    return n.prototype.handleThreadCreate = function(e) {
                        var t = e.channel;
                        if (t.isForumPost()) {
                            var n = t.ownerId === o.default.getId();
                            this.readStateSnapshots[t.id] = {
                                isNew: !n,
                                hasUnreads: !n
                            }
                        }
                    }, n
                }(l.default))
        },
        233343: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("87627"),
                r = n("153832");

            function i(e) {
                return {
                    channelId: e,
                    sessionId: (0, r.v4)()
                }
            }
            var l = new(function() {
                function e() {
                    (0, a._)(this, e)
                }
                return e.prototype.getForumChannelSessionId = function(e) {
                    return null == this.session && (this.session = i(e)), this.session.channelId !== e && (this.session = i(e)), this.session.sessionId
                }, e
            }())
        },
        613085: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeTrackForumNewPostDraftCreated: function() {
                    return C
                },
                trackForumAddMediaToOriginalPostClicked: function() {
                    return w
                },
                trackForumChannelMediaUploaderClicked: function() {
                    return k
                },
                trackForumChannelSeenBatch: function() {
                    return m
                },
                trackForumCreateNewPostClick: function() {
                    return T
                },
                trackForumCreateNewPostKeybindUsed: function() {
                    return y
                },
                trackForumCreateNewPostStarted: function() {
                    return B
                },
                trackForumEnableAutomodClicked: function() {
                    return F
                },
                trackForumHelperCardClicked: function() {
                    return G
                },
                trackForumLayoutUpdated: function() {
                    return D
                },
                trackForumMorePostsLoaded: function() {
                    return N
                },
                trackForumNewPostCleared: function() {
                    return M
                },
                trackForumOnboardingClicked: function() {
                    return U
                },
                trackForumPostClicked: function() {
                    return O
                },
                trackForumPostCreated: function() {
                    return I
                },
                trackForumPostLinkCopied: function() {
                    return b
                },
                trackForumPostSidebarViewed: function() {
                    return x
                },
                trackForumPreviewPostClicked: function() {
                    return H
                },
                trackForumScrolled: function() {
                    return L
                },
                trackForumSearchCleared: function() {
                    return A
                },
                trackForumSearched: function() {
                    return p
                },
                trackForumSortOrderUpdated: function() {
                    return R
                },
                trackForumTagFilterClicked: function() {
                    return S
                },
                trackForumUpsellModalClicked: function() {
                    return P
                },
                trackForumUpsellModalViewed: function() {
                    return V
                }
            });
            var a = n("21189"),
                r = n("227094");
            n("566702");
            var i = n("206652"),
                l = n("244180"),
                u = n("199063"),
                o = n("731865"),
                s = n("911388"),
                d = n("328470"),
                c = n("501769"),
                f = n("491538"),
                _ = n("789117"),
                E = n("48356"),
                h = n("947416"),
                v = n("181103"),
                g = n("467006");

            function m(e) {
                var t = e.guildId,
                    n = e.channelId,
                    i = e.sessionId,
                    u = e.postIds,
                    o = e.additionalTimes;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SEEN_BATCH, (0, r._)((0, a._)({}, (0, v.collectForumAnalyticsMetadata)({
                    channelId: n,
                    sessionId: i
                })), {
                    guild_id: t,
                    channel_id: n,
                    post_ids: u,
                    additional_seen_time_millis: o
                }))
            }

            function p(e) {
                var t = e.guildId,
                    n = e.channelId,
                    i = e.numSearchResults;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SEARCHED, (0, r._)((0, a._)({}, (0, v.collectForumAnalyticsMetadata)({
                    channelId: n
                })), {
                    guild_id: t,
                    channel_id: n,
                    num_search_results: i
                }))
            }

            function A(e) {
                var t = e.guildId,
                    n = e.channelId;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SEARCH_CLEARED, (0, r._)((0, a._)({}, (0, v.collectForumAnalyticsMetadata)({
                    channelId: n
                })), {
                    guild_id: t,
                    channel_id: n
                }))
            }

            function S(e) {
                var t = e.guildId,
                    n = e.channelId,
                    i = e.tagId,
                    u = e.filterTagIds,
                    o = e.added,
                    s = e.location;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_TAG_FILTER_CLICKED, (0, r._)((0, a._)({}, (0, v.collectForumAnalyticsMetadata)({
                    channelId: n
                })), {
                    guild_id: t,
                    channel_id: n,
                    tag_id: i,
                    filter_tag_ids: u,
                    added: o,
                    location: s
                }))
            }

            function T(e) {
                var t = e.guildId,
                    n = e.channelId;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, (0, r._)((0, a._)({}, (0, v.collectForumAnalyticsMetadata)({
                    channelId: n
                })), {
                    guild_id: t,
                    channel_id: n
                }))
            }

            function y(e) {
                var t = e.guildId,
                    n = e.channelId;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, (0, r._)((0, a._)({}, (0, v.collectForumAnalyticsMetadata)({
                    channelId: n
                })), {
                    guild_id: t,
                    channel_id: n
                }))
            }

            function C(e) {
                var t, n, i, u, d = e.guildId,
                    c = e.channelId,
                    f = o.default.getChannel(c);
                if (null != f) {
                    var _ = s.default.getThreadSettings(c),
                        E = null === (t = f.template) || void 0 === t ? void 0 : t.trim(),
                        h = s.default.getDraft(c, s.DraftType.FirstThreadMessage),
                        m = null == h || 0 === h.length || (null == h ? void 0 : h.trim()) === E,
                        p = (null == _ ? void 0 : _.appliedTags) == null || (null == _ ? void 0 : null === (n = _.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
                        A = (null == _ ? void 0 : _.name) == null || (null == _ ? void 0 : null === (u = _.name) || void 0 === u ? void 0 : null === (i = u.trim()) || void 0 === i ? void 0 : i.length) === 0;
                    (!m || !p || !A) && l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, (0, r._)((0, a._)({}, (0, v.collectForumAnalyticsMetadata)({
                        channelId: c
                    })), {
                        guild_id: d,
                        channel_id: c,
                        applied_tag_ids: (0, v.getForumPostDraftAppliedTagIds)(c),
                        num_attachments: (0, v.getForumPostDraftNumAttachments)(c)
                    }))
                }
            }

            function M(e) {
                var t = e.guildId,
                    n = e.channelId;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, (0, r._)((0, a._)({}, (0, v.collectForumAnalyticsMetadata)({
                    channelId: n
                })), {
                    guild_id: t,
                    channel_id: n
                }))
            }

            function I(e) {
                var t = e.guildId,
                    n = e.channelId,
                    i = e.postId;

                function u() {
                    l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_POST_CREATED, (0, r._)((0, a._)({}, (0, v.collectForumPostAnalyticsMetadata)({
                        channelId: i
                    })), {
                        guild_id: t,
                        channel_id: n
                    }))
                }
                _.default.isLoading(i) ? _.default.addConditionalChangeListener(function() {
                    return !!_.default.isLoading(i) || (u(), !1)
                }) : u()
            }

            function L(e) {
                var t = e.guildId,
                    n = e.channelId;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SCROLLED, (0, r._)((0, a._)({}, (0, v.collectForumAnalyticsMetadata)({
                    channelId: n
                })), {
                    guild_id: t,
                    channel_id: n
                }))
            }

            function N(e) {
                var t = e.guildId,
                    n = e.channelId,
                    i = e.numArchivedThreads,
                    u = e.hasMoreThreads,
                    s = e.filterTagIds,
                    c = e.sortOrder;
                d.default.track(g.AnalyticEvents.FORUM_CHANNEL_MORE_POSTS_LOADED, (0, r._)((0, a._)({}, (0, l.collectGuildAnalyticsMetadata)(t), (0, l.collectChannelAnalyticsMetadata)(o.default.getChannel(n)), (0, v.collectForumAnalyticsMetadata)({
                    channelId: n
                })), {
                    guild_id: t,
                    channel_id: n,
                    num_archived_threads: i,
                    num_active_threads: (0, v.getNumActiveThreads)(t, n),
                    has_more_threads: u,
                    filter_tag_ids: s,
                    sort_order: c
                }))
            }

            function O(e) {
                var t = e.guildId,
                    n = e.channelId,
                    i = e.postId,
                    u = e.location;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_POST_CLICKED, (0, r._)((0, a._)({}, (0, v.collectForumPostAnalyticsMetadata)({
                    channelId: i
                })), {
                    guild_id: t,
                    channel_id: n,
                    is_search_result: null != E.default.getSearchResults(n),
                    location: u
                }))
            }

            function R(e) {
                var t = e.guildId,
                    n = e.channelId,
                    i = e.sortOrder;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_POSTS_SORTED, (0, r._)((0, a._)({}, (0, v.collectForumAnalyticsMetadata)({
                    channelId: n
                })), {
                    guild_id: t,
                    channel_id: n,
                    sort_type: (0, v.convertSortOrderToReadableString)(i),
                    sort_order: i,
                    forum_channel_sort_order: i
                }))
            }

            function D(e) {
                var t = e.guildId,
                    n = e.channelId,
                    u = e.forumLayout,
                    o = (0, f.isForumActivityExperimentEnabled)(t) && u === i.ForumLayout.LIST ? h.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : u;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_LAYOUT_UPDATED, (0, r._)((0, a._)({}, (0, v.collectForumAnalyticsMetadata)({
                    channelId: n
                })), {
                    guild_id: t,
                    channel_id: n,
                    forum_channel_layout: o
                }))
            }

            function b(e) {
                var t = e.postId,
                    n = e.location;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_POST_LINK_COPIED, {
                    forum_post_id: t,
                    location: n
                })
            }

            function U(e) {
                var t = e.onboardingCTA;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_ONBOARDING_CLICKED, {
                    onboarding_cta_type: t
                })
            }

            function P(e) {
                var t = e.forumDemoId;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_UPSELL_MODAL_CLICKED, {
                    forum_demo_id: t
                })
            }

            function w(e) {
                var t = e.added;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
                    added: t
                })
            }

            function G(e) {
                var t = e.readGuideCta;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
                    read_guide_cta: t
                })
            }

            function k(e) {
                var t = e.isMobile;
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
                    is_mobile: t
                })
            }

            function F() {
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
            }

            function H() {
                l.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED)
            }

            function x(e) {
                l.default.trackWithMetadata(g.AnalyticEvents.CHANNEL_OPENED, (0, r._)((0, a._)({}, (0, l.collectGuildAnalyticsMetadata)(e.guild_id), (0, l.collectChannelAnalyticsMetadata)(e), (0, u.collectThreadMetadata)(e, !0)), {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    parent_channel_type: e.parentChannelThreadType,
                    channel_view: "Split View",
                    platform: (0, c.getPlatform)()
                }))
            }

            function V() {
                l.default.trackWithMetadata(g.AnalyticEvents.OPEN_MODAL, {
                    type: "Forum Channel Upsell Modal",
                    location: {
                        section: g.AnalyticsSections.CHANNEL_WELCOME_CTA
                    }
                })
            }

            function B(e) {
                var t = e.guildId,
                    n = e.channelId;
                l.default.trackWithMetadata(g.AnalyticEvents.THREAD_CREATION_STARTED, (0, r._)((0, a._)({}, (0, u.collectThreadMetadata)(o.default.getChannel(n))), {
                    channel_id: n,
                    guild_id: t
                }))
            }
        },
        181103: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                collectForumAnalyticsMetadata: function() {
                    return N
                },
                collectForumPostAnalyticsMetadata: function() {
                    return O
                },
                convertSortOrderToReadableString: function() {
                    return y
                },
                getForumChannelSessionId: function() {
                    return T
                },
                getForumPostDraftAppliedTagIds: function() {
                    return M
                },
                getForumPostDraftNumAttachments: function() {
                    return C
                },
                getNumActiveThreads: function() {
                    return I
                }
            });
            var a = n("21189"),
                r = n("227094");
            n("411104"), n("814951"), n("330740"), n("996173"), n("47120"), n("357629"), n("363505"), n("462848"), n("724458"), n("566702");
            var i = n("930198"),
                l = n("323419"),
                u = n("408109"),
                o = n("972942"),
                s = n("151191"),
                d = n("759193"),
                c = n("731865"),
                f = n("911388"),
                _ = n("197905"),
                E = n("312938"),
                h = n("789117"),
                v = n("65266"),
                g = n("728956"),
                m = n("233343"),
                p = n("467006"),
                A = n("551835"),
                S = n("809919");

            function T(e) {
                return m.default.getForumChannelSessionId(e)
            }

            function y(e) {
                switch (e) {
                    case i.ThreadSortOrder.CREATION_DATE:
                        return S.ThreadSortOrderReadableForAnalytics.CREATION_DATE;
                    case i.ThreadSortOrder.LATEST_ACTIVITY:
                        return S.ThreadSortOrderReadableForAnalytics.LATEST_ACTIVITY;
                    default:
                        throw Error("Unexpected sort order ".concat(e))
                }
            }

            function C(e) {
                return E.default.getUploads(e, f.DraftType.FirstThreadMessage).length
            }

            function M(e) {
                var t, n, a = c.default.getChannel(e);
                if (null == a) return [];
                var r = c.default.getChannel(a.parent_id),
                    i = null == r ? void 0 : r.availableTags;
                if (null == r || null == i) return [];
                var l = null !== (n = null === (t = f.default.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set,
                    u = new Set(i.map(function(e) {
                        return e.id
                    }));
                return Array.from(l).filter(function(e) {
                    return u.has(e)
                })
            }

            function I(e, t) {
                return Object.keys(u.default.getThreadsForParent(e, t)).length
            }

            function L(e) {
                var t = h.default.getMessage(e),
                    n = t.loaded,
                    a = t.firstMessage;
                return n ? a : null
            }

            function N(e) {
                var t, n, a, r, i = e.channelId,
                    l = e.sessionId,
                    u = c.default.getChannel(i);
                return null != u && u.isForumLikeChannel() ? {
                    forum_channel_has_guidelines: null != u.topic && u.topic.trim().length > 0,
                    forum_channel_default_emoji_reaction_id: null === (t = u.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
                    forum_channel_default_emoji_reaction_name: null === (n = u.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
                    forum_channel_available_tag_ids: null !== (r = null === (a = u.availableTags) || void 0 === a ? void 0 : a.map(function(e) {
                        return e.id
                    })) && void 0 !== r ? r : [],
                    forum_channel_tag_required: u.hasFlag(A.ChannelFlags.REQUIRE_TAG),
                    forum_channel_can_create_post: _.default.can(p.Permissions.SEND_MESSAGES, u),
                    forum_channel_filter_tag_ids: v.default.getFilterTagIdsAnalytics(),
                    forum_channel_sort_order: v.default.getSortOrderAnalytics(u.id),
                    forum_channel_session_id: null != l ? l : T(u.id),
                    forum_channel_layout: v.default.getLayoutAnalytics(u.id),
                    forum_channel_default_sort_order: u.defaultSortOrder,
                    forum_channel_default_layout: u.defaultForumLayout
                } : null
            }

            function O(e) {
                var t, n, i, u, f, _, E, h, v, m, p = e.channelId,
                    S = e.sessionId,
                    T = c.default.getChannel(p);
                if (null == T || !T.isForumPost()) return null;
                var y = c.default.getChannel(T.parent_id);
                if (null == y || !y.isForumLikeChannel()) return null;
                return (0, r._)((0, a._)({}, N({
                    channelId: y.id,
                    sessionId: S
                })), {
                    thread_approximate_member_count: s.default.getMemberCount(p),
                    thread_approximate_message_count: d.default.getCount(p),
                    thread_archived: (null === (u = T.threadMetadata) || void 0 === u ? void 0 : u.archived) === !0,
                    thread_locked: null !== (v = null === (f = T.threadMetadata) || void 0 === f ? void 0 : f.locked) && void 0 !== v && v,
                    thread_auto_archive_duration_minutes: null !== (m = null === (_ = T.threadMetadata) || void 0 === _ ? void 0 : _.autoArchiveDuration) && void 0 !== m ? m : 0,
                    thread_approximate_creation_date: l.default.extractTimestamp(p),
                    forum_post_id: T.id,
                    forum_post_first_message_id: T.id,
                    forum_post_num_reactions: null == (t = L(T.id)) ? 0 : t.reactions.reduce(function(e, t) {
                        return e + t.count
                    }, 0),
                    forum_post_num_unique_reactions: null == (n = L(T.id)) ? 0 : n.reactions.length,
                    forum_post_applied_tag_ids: function(e) {
                        var t, n, a = c.default.getChannel(e);
                        if (null == a) return [];
                        var r = c.default.getChannel(a.parent_id),
                            i = null == r ? void 0 : r.availableTags;
                        if (null == r || null == i) return [];
                        var l = new Set(i.map(function(e) {
                            return e.id
                        }));
                        return null !== (n = null === (t = a.appliedTags) || void 0 === t ? void 0 : t.filter(function(e) {
                            return l.has(e)
                        })) && void 0 !== n ? n : []
                    }(T.id),
                    forum_post_is_pinned: T.hasFlag(A.ChannelFlags.PINNED),
                    forum_post_is_new: null === (E = g.default.getReadStateSnapshotAnalytics(T.id)) || void 0 === E ? void 0 : E.isNew,
                    forum_post_is_unread: null === (h = g.default.getReadStateSnapshotAnalytics(T.id)) || void 0 === h ? void 0 : h.hasUnreads,
                    forum_post_is_following: o.default.hasJoined(T.id),
                    forum_post_attachment_mimetypes: null == (i = L(T.id)) ? [] : i.attachments.map(function(e) {
                        var t;
                        return null !== (t = e.content_type) && void 0 !== t ? t : "unknown"
                    })
                })
            }
        },
        947416: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INCREASED_ACTIVITY_LIST_FORUM_LAYOUT: function() {
                    return i
                },
                useForumActivityExperiment: function() {
                    return l
                }
            });
            var a = n("800976"),
                r = n("718693"),
                i = 3;

            function l(e) {
                var t = r.default.useExperiment({
                        guildId: null != e ? e : "",
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
                    return E
                }
            });
            var a = n("87627"),
                r = n("200344"),
                i = n("29713"),
                l = n("778455");
            n("330740"), n("996173"), n("47120"), n("357629");
            var u = n("661223"),
                o = n("312916"),
                s = new Set,
                d = {};

            function c(e) {
                var t = e.applicationId;
                s.add(t)
            }

            function f(e) {
                var t = e.applicationId;
                s.delete(t)
            }
            var _ = function(e) {
                (0, i._)(n, e);
                var t = (0, l._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                return n.prototype.isLaunchable = function(e) {
                    return null != d[e] ? d[e] : (d[e] = !1, o.default.dispatch({
                        type: "CHECK_LAUNCHABLE_GAME",
                        gameId: e
                    }), !1)
                }, (0, r._)(n, [{
                    key: "launchingGames",
                    get: function() {
                        return s
                    }
                }, {
                    key: "launchableGames",
                    get: function() {
                        return d
                    }
                }]), n
            }(u.default.Store);
            _.displayName = "LaunchableGameStore";
            var E = new _(o.default, {
                GAME_LAUNCHABLE_UPDATE: function(e) {
                    var t = e.gameId,
                        n = e.isLaunchable;
                    d[t] = n
                },
                GAME_CLOUD_SYNC_START: c,
                GAME_LAUNCH_START: c,
                GAME_LAUNCH_SUCCESS: f,
                GAME_LAUNCH_FAIL: f,
                GAME_CLOUD_SYNC_CONFLICT: f,
                GAME_CLOUD_SYNC_ERROR: f,
                GAME_CLOUD_SYNC_COMPLETE: f
            })
        },
        315607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMOD_ERROR_CODES: function() {
                    return _
                },
                InvalidKeywordError: function() {
                    return c
                },
                InvalidRegexPatternError: function() {
                    return f
                },
                getAutomodErrorMessage: function() {
                    return h
                },
                getAutomodErrorMessageFromErrorResponse: function() {
                    return E
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("918256"),
                l = n("778455");
            n("411104"), n("330740"), n("996173"), n("47120"), n("357629");
            var u = n("53575"),
                o = n("731865"),
                s = n("467006"),
                d = n("30175"),
                c = function(e) {
                    (0, r._)(n, e);
                    var t = (0, l._)(n);

                    function n() {
                        return (0, a._)(this, n), t.apply(this, arguments)
                    }
                    return n
                }((0, i._)(Error)),
                f = function(e) {
                    (0, r._)(n, e);
                    var t = (0, l._)(n);

                    function n() {
                        return (0, a._)(this, n), t.apply(this, arguments)
                    }
                    return n
                }((0, i._)(Error)),
                _ = new Set([s.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, s.AbortCodes.AUTOMOD_TITLE_BLOCKED, s.AbortCodes.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

            function E(e, t) {
                if (null == e) return null;
                var n = e.code,
                    a = e.message;
                if (!_.has(n)) return null;
                if (null != a) return a;
                if (null == t) return null;
                var r = o.default.getChannel(t);
                return (null == r ? void 0 : r.isThread()) ? d.default.Messages.THREAD_AUTOMOD_ERROR : ((null == r ? void 0 : r.isForumPost()) || (null == r ? void 0 : r.isForumLikeChannel())) && (n === s.AbortCodes.AUTOMOD_TITLE_BLOCKED || n === s.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) ? d.default.Messages.FORUM_POST_AUTOMOD_ERROR : null
            }

            function h(e, t) {
                var n, a, r = E(t);
                if (null != r) return r;
                if (null == e) return d.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE;
                return n = e, a = o.default.getChannel(n.message.channelId), (0, u.isMessageDataEdit)(n) ? d.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == a ? void 0 : a.isThread()) ? d.default.Messages.THREAD_AUTOMOD_ERROR : (null == a ? void 0 : a.isForumPost()) || (null == a ? void 0 : a.isForumLikeChannel()) ? d.default.Messages.FORUM_POST_AUTOMOD_ERROR : d.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
            }
        },
        209458: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                isGuildOnboardingAvailable: function() {
                    return u
                }
            });
            var a = n("661223"),
                r = n("911533"),
                i = n("467006");

            function l(e) {
                return (0, a.useStateFromStores)([r.default], function() {
                    if ((null == e ? void 0 : e.id) == null) return !1;
                    var t = r.default.isFullServerPreview(e.id),
                        n = r.default.isOnboardingEnabled(e.id);
                    return t && n
                }) || (null == e ? void 0 : e.hasFeature(i.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
            }

            function u(e) {
                if (null == e) return !1;
                var t = r.default.isFullServerPreview(e.id),
                    n = r.default.isOnboardingEnabled(e.id);
                return t && n || e.hasFeature(i.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
            }
        },
        740303: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("21189"),
                l = n("227094"),
                u = n("778455");
            n("357629");
            var o = n("661223"),
                s = n("312916"),
                d = n("313433"),
                c = n("846475"),
                f = {},
                _ = null;

            function E(e, t) {
                var n, a = null !== (n = f[e]) && void 0 !== n ? n : {
                    code: e,
                    state: c.GuildTemplateStates.RESOLVING
                };
                t(a = (0, i._)({}, a)), f = (0, l._)((0, i._)({}, f), {
                    [e]: a
                })
            }

            function h(e) {
                v(e.guildTemplate)
            }

            function v(e) {
                return E(e.code, function(t) {
                    var n = (0, d.default)(e);
                    for (var a in n) t[a] = n[a]
                })
            }

            function g(e) {
                return E(e.code, function(e) {
                    e.state = c.GuildTemplateStates.EXPIRED
                })
            }
            var m = function(e) {
                (0, r._)(n, e);
                var t = (0, u._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                var i = n.prototype;
                return i.getGuildTemplate = function(e) {
                    return null != e ? f[e] : null
                }, i.getGuildTemplates = function() {
                    return f
                }, i.getForGuild = function(e) {
                    for (var t in f) {
                        var n = f[t];
                        if ("sourceGuildId" in n && n.sourceGuildId === e && n.state !== c.GuildTemplateStates.EXPIRED) return n
                    }
                }, i.getDisplayedGuildTemplateCode = function() {
                    return _
                }, n
            }(o.default.Store);
            m.displayName = "GuildTemplateStore";
            var p = new m(s.default, {
                GUILD_TEMPLATE_RESOLVE: function(e) {
                    var t = e.code;
                    f = (0, l._)((0, i._)({}, f), {
                        [t]: {
                            code: t,
                            state: c.GuildTemplateStates.RESOLVING
                        }
                    })
                },
                GUILD_TEMPLATE_CREATE_SUCCESS: h,
                GUILD_TEMPLATE_SYNC_SUCCESS: h,
                GUILD_TEMPLATE_RESOLVE_SUCCESS: h,
                GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function(e) {
                    e.guildTemplates.forEach(function(e) {
                        return v(e)
                    })
                },
                GUILD_TEMPLATE_RESOLVE_FAILURE: g,
                GUILD_TEMPLATE_DELETE_SUCCESS: g,
                GUILD_TEMPLATE_ACCEPT: function(e) {
                    return E(e.code, function(e) {
                        e.state = c.GuildTemplateStates.ACCEPTING
                    })
                },
                GUILD_TEMPLATE_ACCEPT_SUCCESS: function(e) {
                    return E(e.code, function(e) {
                        var t;
                        e.state = c.GuildTemplateStates.ACCEPTED, e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1
                    })
                },
                GUILD_TEMPLATE_ACCEPT_FAILURE: function(e) {
                    return E(e.code, function(e) {
                        e.state = c.GuildTemplateStates.RESOLVED
                    })
                },
                GUILD_TEMPLATE_MODAL_SHOW: function(e) {
                    _ = e.code
                },
                GUILD_TEMPLATE_MODAL_HIDE: function(e) {
                    _ = null
                }
            })
        },
        860165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("814951");
            var a = n("501769");

            function r() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    r = window.GLOBAL_ENV.INVITE_HOST;
                return (0, a.isAndroid)() ? (r = location.host, e = "/invite/".concat(t)) : e = "/".concat(t), "".concat(n ? "".concat(location.protocol, "//") : "").concat(r).concat(e)
            }
        },
        557253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return _
                }
            });
            var a = n("203959"),
                r = n("516086"),
                i = n("871831"),
                l = n("488867"),
                u = n("30175"),
                o = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1,
                        collectOffOverride: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 8,
                        label: "Collection off everywhere",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !0
                        }
                    }]
                }),
                s = function(e) {
                    var t = e.user,
                        n = e.config,
                        a = n.desktopViewAndUseAndCollectEnabled,
                        r = n.mobileViewAndUseEnabled,
                        i = n.mobileAndFreemiumCollectEnabled,
                        u = n.autoUnfurlReactionTooltip,
                        o = n.collectOffOverride,
                        s = l.default.isPremium(t);
                    return {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: i,
                        collectEnabled: !o && (s ? a : i),
                        autoUnfurlReactionTooltip: u
                    }
                },
                d = function(e) {
                    var t = e.user,
                        n = e.autoTrackExposure;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : s({
                        user: t,
                        config: o.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: void 0 === n || n
                        })
                    })
                },
                c = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            expressionSourceGuild: void 0,
                            autoTrackExposure: !0
                        },
                        n = t.expressionSourceGuild,
                        r = void 0 === n ? void 0 : n,
                        l = t.autoTrackExposure,
                        u = (0, a.default)([i.default], function() {
                            return i.default.getCurrentUser()
                        }),
                        d = s({
                            user: u,
                            config: o.useExperiment({
                                location: "inventory_guild_setting_experiment"
                            }, {
                                autoTrackExposure: void 0 === l || l
                            })
                        }),
                        c = d.viewAndUseEnabled,
                        f = d.showTryPacksModalAndV2Copy,
                        _ = d.collectEnabled,
                        E = d.autoUnfurlReactionTooltip,
                        h = c && _ && null != r && (null == r ? void 0 : null === (e = r.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: c,
                        collectEnabled: h,
                        showTryPacksModalAndV2Copy: f,
                        autoUnfurlReactionTooltip: E
                    }
                },
                f = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescriptionLine1: function() {
                            return null
                        },
                        getNewSettingsDescriptionLine2: function() {
                            return null
                        }
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescriptionLine1: function() {
                                return null
                            },
                            getNewSettingsDescriptionLine2: function() {
                                return null
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: function() {
                                return null
                            },
                            getNewSettingsDescriptionLine2: function() {
                                return null
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: function() {
                                return null
                            },
                            getNewSettingsDescriptionLine2: function() {
                                return null
                            }
                        }
                    }, {
                        id: 4,
                        label: "Show settings toggle, allow collection for guild setting, and show rollback admin coachmark",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: function() {
                                return u.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1
                            },
                            getNewSettingsDescriptionLine2: function() {
                                return u.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
                            }
                        }
                    }]
                }),
                _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            guildId: void 0,
                            autoTrackExposure: !0
                        },
                        t = e.guildId,
                        n = e.autoTrackExposure,
                        a = void 0 === n || n,
                        r = f.useExperiment({
                            guildId: null != t ? t : "",
                            location: "482926_3"
                        }, {
                            autoTrackExposure: void 0 === a || a
                        });
                    return {
                        showSettingsToggle: r.showSettingsToggle,
                        allowCollection: r.allowCollection,
                        getNewSettingsDescriptionLine1: r.getNewSettingsDescriptionLine1,
                        getNewSettingsDescriptionLine2: r.getNewSettingsDescriptionLine2
                    }
                }
        },
        702532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LocalMessageBackgroundSendingExperiment: function() {
                    return a
                }
            });
            var a = (0, n("516086").createExperiment)({
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
        572291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("191489"), n("357629");
            var a = {
                backgroundTaskIdentifierInvalid: -1,
                backgroundify: function(e, t) {
                    return e
                },
                startBackgroundTask: function(e) {
                    return new Promise(function(e) {
                        return e(-1)
                    })
                },
                endBackgroundTask: function(e) {}
            }
        },
        929748: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return J
                }
            });
            var a = n("21189"),
                r = n("227094"),
                i = n("154005"),
                l = n("761020");
            n("462848"), n("357629"), n("363505"), n("754598"), n("301563"), n("917168"), n("723768"), n("814951"), n("724458"), n("653041"), n("996173"), n("47120"), n("13667"), n("390547");
            var u = n("392711"),
                o = n.n(u),
                s = n("62010"),
                d = n.n(s),
                c = n("741312"),
                f = n("353118"),
                _ = n("288990"),
                E = n("557253"),
                h = n("516487"),
                v = n("839739"),
                g = n("614681"),
                m = n("786649"),
                p = n("362939"),
                A = n("731865"),
                S = n("610043"),
                T = n("361733"),
                y = n("327271"),
                C = n("197905"),
                M = n("606929"),
                I = n("532858"),
                L = n("871831"),
                N = n("604293"),
                O = n("659300"),
                R = n("439823"),
                D = n("467006"),
                b = n("308439"),
                U = n("30175");

            function P(e, t, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                if (t[0] !== e) return null;
                var r = t.substr(e.length);
                return n.sortBy(function(e) {
                    return -e.text.length
                }).filter(function(e) {
                    var n = e.text;
                    return 1 === t.toLowerCase().indexOf(n.toLowerCase())
                }).sortBy(function(e) {
                    return e.text === r ? 0 : 1
                }).map(function(t) {
                    var n = t.id;
                    return [e + t.text, n, a]
                }).first()
            }

            function w(e) {
                return {
                    order: e.order,
                    match: e.match,
                    parse: t => ({
                        type: e.type,
                        content: t[0]
                    })
                }
            }

            function G(e) {
                return {
                    match: d().anyScopeRegex(e),
                    parse: e => ({
                        type: "text",
                        content: e[0]
                    })
                }
            }
            var k = h.default.RULES,
                F = v.default,
                H = /^<@!?(\d+)>/,
                x = /^<@&(\d+)>/,
                V = /^<#(\d+)>/,
                B = /^<a?:(\w+):(\d+)>/,
                Y = /(@everyone|@here|@Clyde)\b/,
                W = {
                    link: w(d().defaultRules.link),
                    autolink: w(d().defaultRules.autolink),
                    url: w(d().defaultRules.url),
                    inlineCode: w(k.inlineCode),
                    codeBlock: w(k.codeBlock),
                    rawUserMention: G(H),
                    rawRoleMention: G(x),
                    rawChannelMention: G(V),
                    rawEmoji: G(B),
                    mention: {
                        match(e, t, n) {
                            var i = n.split(" ").pop() + e;
                            if (/^[^ ]+@[^ ]+\.[^ .]+/.test(i)) return null;
                            var l = P("@", e, t.users, "mention");
                            if (l || (l = P("@", e, t.mentionableRoles, "roleMention"))) return l;
                            if (!(l = P("@", e, t.users.map(function(e) {
                                    return (0, r._)((0, a._)({}, e), {
                                        text: e.text.split("#")[0]
                                    })
                                }), "mention"))) return null;
                            var u = Y.exec(e);
                            if (null != u && l[0].length <= u[0].length) return null;
                            if ("" === n && (0, g.canSuppressNotifications)()) {
                                var o = g.SILENT_RE.exec(e);
                                if (null != o && l[0].length <= o[0].length) return null
                            }
                            return l
                        },
                        parse(e) {
                            var t = (0, i._)(e, 3),
                                n = t[1],
                                a = t[2],
                                r = "@";
                            return "roleMention" === a && (r += "&"), {
                                type: a,
                                content: "<".concat(r).concat(n, ">")
                            }
                        }
                    },
                    channel: {
                        match: (e, t) => (function(e, t, n) {
                            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                            if (t[0] !== e) return null;
                            if ('"' !== t[1]) return P(e, t, n, a);
                            for (var r = 2; r < t.length; r++) {
                                if ("\\" === t[r]) {
                                    r++;
                                    continue
                                }
                                if ('"' === t[r]) break
                            }
                            var i = t.substring(0, r + 1),
                                l = (0, c.unescapeChannelName)(t.substring(2, r));
                            return n.sortBy(function(e) {
                                return -e.text.length
                            }).filter(function(e) {
                                return l === e.text
                            }).map(function(e) {
                                return [i, e.id, a]
                            }).first()
                        })("#", e, t.channels),
                        parse: e => ({
                            type: "text",
                            content: "<#".concat(e[1], ">")
                        })
                    },
                    emoticon: {
                        match(e, t, n) {
                            if (!p.ConvertEmoticons.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
                            var a = _.default.EMOJI_SHORTCUT_RE.exec(e);
                            return null == a || a[0].length !== e.length && " " !== e[a[0].length] && "\n" !== e[a[0].length] ? null : a
                        },
                        parse: e => ({
                            type: "emoticon",
                            content: _.default.convertShortcutToName(e[1]),
                            isShortcut: !0
                        })
                    },
                    emoji: {
                        order: k.emoji.order,
                        match: e => _.default.EMOJI_NAME_RE.exec(e),
                        parse(e, t, n) {
                            var a, r = (0, i._)(e, 2),
                                l = r[0],
                                u = r[1],
                                o = n.customEmoji,
                                s = Object.prototype.hasOwnProperty.call(o, u) ? o[u] : null;
                            return null != s ? {
                                type: "customEmoticon",
                                content: "<".concat(!0 === s.animated ? "a" : "", ":").concat(null !== (a = s.originalName) && void 0 !== a ? a : s.name, ":").concat(s.id, ">"),
                                emoji: s
                            } : {
                                type: "text",
                                content: l
                            }
                        }
                    },
                    customEmoticons: {
                        match(e, t) {
                            var n, a;
                            return null !== (a = null === (n = t.customEmoticonsRegex) || void 0 === n ? void 0 : n.exec(e)) && void 0 !== a ? a : null
                        },
                        parse(e, t, n) {
                            var a = (0, i._)(e, 2),
                                r = a[0],
                                l = a[1],
                                u = n.emojiContext.getEmoticonByName(l);
                            return null != u ? {
                                type: "customEmoticon",
                                content: "<".concat(!0 === u.animated ? "a" : "", ":").concat(u.name, ":").concat(u.id, ">"),
                                emoji: u
                            } : {
                                type: "text",
                                content: r
                            }
                        }
                    },
                    text: (0, r._)((0, a._)({}, F), {
                        match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, v.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != F.match ? F.match(e, t, "") : null
                    })
                },
                K = {
                    inlineCode: w(k.inlineCode),
                    codeBlock: w(k.codeBlock),
                    mention: {
                        match: d().anyScopeRegex(H),
                        parse(e, t, n) {
                            var a = n.isNotification,
                                r = L.default.getUser(e[1]);
                            if (null == r) return {
                                content: e[0]
                            };
                            var i = R.default.getUserTag(r, {
                                identifiable: a && I.default.enabled ? "never" : "always"
                            });
                            if (!a) return {
                                content: "@".concat(i)
                            };
                            var l = R.default.getGlobalName(r);
                            return {
                                content: null != l ? "@".concat(l) : "@".concat(i)
                            }
                        }
                    },
                    roleMention: {
                        match: d().anyScopeRegex(x),
                        parse(e, t, n) {
                            var a = n.guild;
                            if (null != a) {
                                var r = a.roles[e[1]];
                                if (null != r) return {
                                    content: "@".concat(r.name)
                                }
                            }
                            return {
                                content: e[0]
                            }
                        }
                    },
                    channel: {
                        match: d().anyScopeRegex(V),
                        parse(e) {
                            var t = A.default.getChannel(e[1]);
                            return {
                                content: null == t ? e[0] : (0, c.computeChannelName)(t, L.default, M.default, !0, !0)
                            }
                        }
                    },
                    emoji: {
                        match: d().anyScopeRegex(B),
                        parse(e, t, n) {
                            var a = (0, i._)(e, 3),
                                r = (a[0], a[1]),
                                l = a[2],
                                u = n.guild,
                                o = f.default.getDisambiguatedEmojiContext(u ? u.id : null).getById(l),
                                s = null != o ? o.name : r;
                            return {
                                content: ":".concat(s, ":")
                            }
                        }
                    },
                    soundboard: {
                        match: d().anyScopeRegex(/^<sound:(\d+)>/),
                        parse(e) {
                            var t = (0, i._)(e, 2),
                                n = (t[0], t[1]);
                            return {
                                content: "<sound:".concat(n, ">")
                            }
                        }
                    },
                    spoiler: {
                        match: d().anyScopeRegex(D.MARKDOWN_SPOILER_REGEXP),
                        parse: () => ({
                            content: "<".concat(U.default.Messages.SPOILER.toLowerCase(), ">")
                        })
                    },
                    staticRouteLink: {
                        match: d().anyScopeRegex(D.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
                        parse: e => ({
                            content: "<id:".concat(e[1], ">")
                        })
                    },
                    timestamp: (0, r._)((0, a._)({}, k.timestamp), {
                        parse() {
                            for (var e, t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                            return {
                                content: (e = k.timestamp).parse.apply(e, (0, l._)(n)).formatted
                            }
                        }
                    }),
                    text: (0, a._)({}, F)
                };
            [W, K].forEach(function(e) {
                Object.keys(e).forEach(function(t, n) {
                    e[t].order = n
                })
            });
            var q = d().parserFor(W),
                j = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

            function z(e, t, n, a) {
                var r = "";
                return e.forEach(function(e) {
                    if (! function(e, t, n) {
                            if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
                                for (var a, r = _.default.translateSurrogatesToInlineEmoji(t.content); null !== (a = j.exec(r));) {
                                    var i = void 0;
                                    null != a[1] && "" !== a[1] ? e.emojiContext && (i = e.emojiContext.getById(a[1])) : i = _.default.getByName(a[2]), i && n(i, t.isShortcut || !1)
                                }
                            }
                        }(t, e, a), "string" == typeof e.content) switch (e.type) {
                        case "codeBlock":
                        case "inlineCode":
                        case "mention":
                        case "roleMention":
                        case "channel":
                        case "emoji":
                            r += e.content;
                            break;
                        default:
                            r += n(e.content)
                    } else e.content.constructor === Array ? r += z(e.content, t, n, a) : console.warn("Unknown message item type: ", e)
                }), r
            }

            function Q(e) {
                var t, n = null == e ? void 0 : e.getGuildId(),
                    a = null != n ? y.default.getGuild(n) : null,
                    r = C.default.can(D.Permissions.MENTION_EVERYONE, e);
                t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(function(e) {
                    return {
                        userId: e,
                        nick: null
                    }
                }) : null != n ? T.default.getMembers(n).map(function(e) {
                    var t = e.userId;
                    return {
                        userId: t,
                        nick: e.nick
                    }
                }) : [];
                var i = o()(t.reduce(function(e, t) {
                        var n = t.userId,
                            a = L.default.getUser(n);
                        return null == a ? e : (e.push({
                            id: n,
                            text: a.tag
                        }), e)
                    }, [])),
                    l = o()(null != a ? a.roles : {}).values().filter(function(e) {
                        var t = e.mentionable;
                        return r || t
                    }).map(function(e) {
                        return {
                            id: e.id,
                            text: e.name
                        }
                    }),
                    u = o()(S.default.getTextChannelNameDisambiguations(n)).map(function(e) {
                        var t = e.id;
                        return {
                            id: t,
                            text: e.name
                        }
                    }),
                    s = null != n ? o()(N.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(function(e) {
                        return e !== S.GUILD_SELECTABLE_CHANNELS_KEY
                    }).flatMap(function(e) {
                        return S.default.getChannels(n)[e].map(function(e) {
                            return {
                                id: e.channel.id,
                                text: e.channel.name
                            }
                        })
                    }).value() : [],
                    d = m.default.computeAllActiveJoinedThreads(n).map(function(e) {
                        return {
                            id: e.id,
                            text: e.name
                        }
                    }),
                    c = f.default.getDisambiguatedEmojiContext(n),
                    _ = c.getEscapedCustomEmoticonNames(),
                    h = c.getCustomEmoji(),
                    v = c.getCustomEmoticonRegex(),
                    g = L.default.getCurrentUser(),
                    p = (0, E.getInventoryGuildPacksUserExperimentConfig)({
                        user: g,
                        autoTrackExposure: !1
                    }).viewAndUseEnabled;
                return {
                    inline: !0,
                    mentionableRoles: l,
                    guild: a,
                    users: i,
                    channels: u.concat(s).concat(d),
                    emojiContext: c,
                    customEmoticonsRegex: v,
                    canViewAndUsePackEmoji: p,
                    customEmoji: h,
                    textExclusions: _,
                    disableErrorGuards: !0
                }
            }

            function X(e) {
                return e
            }
            var J = {
                parse(e, t) {
                    var n, a, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        l = null != i ? i : Q(e),
                        u = {
                            content: t,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: []
                        };
                    return u.content = (n = u.content, a = l, r = function(t, n) {
                        O.default.isEmojiPremiumLocked({
                            emoji: t,
                            channel: e,
                            intention: b.EmojiIntention.CHAT,
                            canViewAndUsePackEmoji: l.canViewAndUsePackEmoji
                        }) ? u.invalidEmojis.push(t) : !n && u.validNonShortcutEmojis.push(t)
                    }, z(q(n, a), a, _.default.translateInlineEmojiToSurrogates, r)), u
                },
                parsePreprocessor: (e, t) => q(t, Q(e)),
                unparse(e, t, n) {
                    var a = A.default.getChannel(t),
                        r = null != a ? a.getGuildId() : null,
                        i = null != r ? y.default.getGuild(r) : null,
                        l = n ? K : o().omit(K, ["spoiler", "timestamp"]),
                        u = n ? X : _.default.translateSurrogatesToInlineEmoji,
                        s = d().parserFor(l),
                        c = {
                            inline: !0,
                            guild: i,
                            isNotification: n
                        };
                    return z(s(e, c), c, u)
                }
            }
        },
        642201: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("21189"),
                l = n("227094"),
                u = n("778455");
            n("814951"), n("573788"), n("996173"), n("47120"), n("357629");
            var o = n("388684"),
                s = n("661223"),
                d = n("312916"),
                c = n("482970"),
                f = n("34887"),
                _ = n("731865"),
                E = n("362753"),
                h = n("278205"),
                v = n("328470"),
                g = n("467006"),
                m = new o.default("MessageRoundtripTrackerStore");

            function p(e) {
                return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
            }

            function A(e) {
                var t = _.default.getBasicChannel(e.channelId);
                if (null == t) {
                    m.warn("Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."));
                    return
                }
                if (!(Math.random() > .1)) {
                    var n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
                        a = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
                        r = (0, f.getSignalStrength)();
                    v.default.track(g.AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, (0, i._)((0, l._)((0, i._)({}, (0, c.default)()), {
                        api_latency_ms: n,
                        gateway_latency_ms: a,
                        channel_id: t.id,
                        channel_type: t.type,
                        guild_id: t.guild_id,
                        guild_size: E.default.getMemberCount(t.guild_id),
                        mobile_network_type: h.default.getType()
                    }), null != r && {
                        mobile_signal_strength_level: r
                    }))
                }
            }
            var S = new(function(e) {
                    (0, r._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        var e;
                        return (0, a._)(this, n), e = t.apply(this, arguments), e.pendingMessages = new Map, e
                    }
                    var o = n.prototype;
                    return o.recordMessageSendAttempt = function(e, t) {
                        var n = this,
                            a = {
                                initialSendTimestamp: Date.now(),
                                apiResponseTimestamp: null,
                                gatewaySeenTimestamp: null,
                                channelId: e
                            };
                        this.pendingMessages.set(t, a), setTimeout(function() {
                            var e = n.pendingMessages.get(t);
                            null != e && (A(e), n.pendingMessages.delete(t))
                        }, 3e4)
                    }, o.recordMessageSendApiResponse = function(e) {
                        var t = this.pendingMessages.get(e);
                        if (null != t) {
                            var n = (0, l._)((0, i._)({}, t), {
                                apiResponseTimestamp: Date.now()
                            });
                            p(n) ? (A(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
                        }
                    }, o.recordGatewayResponse = function(e) {
                        var t = this.pendingMessages.get(e);
                        if (null != t) {
                            var n = (0, l._)((0, i._)({}, t), {
                                gatewaySeenTimestamp: Date.now()
                            });
                            p(n) ? (A(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
                        }
                    }, n
                }(s.default.Store))(d.default, {
                    MESSAGE_CREATE: function(e) {
                        var t = e.optimistic,
                            n = e.message.nonce;
                        !t && null != n && S.recordGatewayResponse(n)
                    }
                }),
                T = S
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
                    return _
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
                r = n.n(a),
                i = n("416463"),
                l = n("535291"),
                u = n("871831"),
                o = n("84819"),
                s = n("467006");

            function d() {
                return o.default.fromTimestamp(Date.now())
            }

            function c(e) {
                var t = e.id,
                    n = e.username,
                    a = e.avatar,
                    r = e.discriminator;
                return {
                    id: t,
                    username: n,
                    avatar: a,
                    discriminator: r,
                    bot: e.bot,
                    global_name: e.globalName
                }
            }

            function f(e) {
                var t = e.channelId,
                    n = e.content,
                    a = e.tts,
                    o = e.type,
                    f = void 0 === o ? s.MessageTypes.DEFAULT : o,
                    _ = e.messageReference,
                    E = e.allowedMentions,
                    h = e.author,
                    v = e.flags,
                    g = e.nonce,
                    m = e.poll,
                    p = [];
                if (f === s.MessageTypes.REPLY && (r()(null != _, "Replies must have a message reference"), null == E || E.replied_user)) {
                    var A = i.default.getMessageByReference(_);
                    (null == A ? void 0 : A.state) === i.ReferencedMessageState.LOADED && p.push(c(A.message.author))
                }
                return null == h && (h = u.default.getCurrentUser()), h instanceof l.default && (h = c(h)), r()(null != h, "createMessage: author cannot be undefined"), {
                    id: null != g ? g : d(),
                    type: f,
                    content: n,
                    channel_id: t,
                    author: h,
                    attachments: [],
                    embeds: [],
                    pinned: !1,
                    mentions: p,
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: new Date().toISOString(),
                    state: s.MessageStates.SENDING,
                    tts: void 0 !== a && a,
                    message_reference: _,
                    flags: v,
                    nonce: g,
                    poll: m
                }
            }

            function _(e) {
                var t = e.channelId,
                    n = e.content,
                    a = e.embeds,
                    r = e.loggingName;
                return {
                    id: d(),
                    type: s.MessageTypes.DEFAULT,
                    flags: s.MessageFlags.EPHEMERAL,
                    content: n,
                    channel_id: t,
                    author: {
                        id: s.LOCAL_BOT_ID,
                        username: "Clyde",
                        discriminator: s.NON_USER_BOT_DISCRIMINATOR,
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
                    state: s.MessageStates.SENT,
                    tts: !1,
                    loggingName: r
                }
            }
        },
        924093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                logMessageSendFailure: function() {
                    return i
                }
            }), n("363505");
            var a = n("244180"),
                r = n("467006");

            function i(e) {
                var t, n, i = null != e.fileItems ? function(e) {
                        return e.map(function(e) {
                            var t;
                            return null !== (t = e.mimeType) && void 0 !== t ? t : "unknown"
                        })
                    }(e.fileItems) : [],
                    l = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
                    u = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
                (0, a.trackWithMetadata)(r.AnalyticEvents.SEND_MESSAGE_FAILURE, {
                    failure_code: u,
                    error_message: l,
                    attachment_mimetypes: i
                })
            }
        },
        818147: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackGuildInviteNotificationAction: function() {
                    return u
                },
                trackGuildInviteNotificationDismissed: function() {
                    return o
                }
            });
            var a, r, i = n("244180"),
                l = n("467006");

            function u() {
                i.default.trackWithMetadata(l.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
                    notification_type: "Reminder Notification",
                    action: "Guild Invite",
                    dismissed: !1
                })
            }

            function o() {
                i.default.trackWithMetadata(l.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
                    notification_type: "Reminder Notification",
                    action: "Guild Invite",
                    dismissed: !0
                })
            }(a || (a = {})).REMINDER_NOTIFICATION = "Reminder Notification", (r || (r = {})).GUILD_INVITE = "Guild Invite"
        },
        10245: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearMessageCombo: function() {
                    return f
                },
                updateCombo: function() {
                    return c
                },
                updateComboOnMessageSend: function() {
                    return _
                },
                updatePoggermodeSettings: function() {
                    return d
                }
            });
            var a = n("21189"),
                r = n("227094"),
                i = n("312916"),
                l = n("262047"),
                u = n("232356"),
                o = n("993638"),
                s = n("98906");

            function d(e) {
                i.default.dispatch({
                    type: "POGGERMODE_SETTINGS_UPDATE",
                    settings: e
                });
                var t = (0, a._)({}, u.default.getState(), e);
                (0, s.default)(t)
            }

            function c(e) {
                i.default.dispatch((0, a._)({
                    type: "POGGERMODE_UPDATE_COMBO"
                }, e))
            }

            function f(e) {
                i.default.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: (0, r._)((0, a._)({}, e), {
                        displayed: !0
                    })
                })
            }

            function _(e, t) {
                var n, a = l.default.getId(),
                    r = o.default.getUserCombo(a, e);
                null != r && i.default.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: {
                        combo: r,
                        channelId: e,
                        messageId: t,
                        displayed: !1
                    }
                });
                var u = null != r && (null == r ? void 0 : r.value) > 0 ? (null !== (n = null == r ? void 0 : r.multiplier) && void 0 !== n ? n : 0) + 1 : 1;
                i.default.dispatch({
                    type: "POGGERMODE_UPDATE_COMBO",
                    channelId: e,
                    userId: a,
                    multiplier: u,
                    value: 0
                })
            }
        },
        30838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiLocation: function() {
                    return l
                },
                SHAKE_STEPS: function() {
                    return _
                },
                SHAKE_STEP_DIVIDER: function() {
                    return E
                },
                ShakeLevel: function() {
                    return o
                },
                ShakeLocation: function() {
                    return u
                }
            });
            var a, r, i, l, u, o, s = n("21189"),
                d = n("227094"),
                c = n("154005");
            n("724458"), n("357629"), n("363505"), (a = l || (l = {}))[a.CHAT_INPUT = 0] = "CHAT_INPUT", a[a.REACTION = 1] = "REACTION", a[a.MEMBER_USER = 2] = "MEMBER_USER", a[a.CALL_TILE = 3] = "CALL_TILE", (r = u || (u = {}))[r.CHAT_INPUT = 0] = "CHAT_INPUT", r[r.VOICE_USER = 1] = "VOICE_USER", r[r.MENTION = 2] = "MENTION", (i = o || (o = {}))[i.LEVEL_1 = 0] = "LEVEL_1", i[i.LEVEL_2 = 1] = "LEVEL_2", i[i.LEVEL_3 = 2] = "LEVEL_3", i[i.LEVEL_4 = 3] = "LEVEL_4", i[i.LEVEL_5 = 4] = "LEVEL_5";
            var f = {
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
                _ = Object.keys(f).reduce(function(e, t) {
                    return (0, d._)((0, s._)({}, e), {
                        [t]: f[t].map(function(e) {
                            return (0, c._)(e, 1)[0]
                        })
                    })
                }, {
                    0: [],
                    1: [],
                    2: [],
                    3: [],
                    4: []
                }),
                E = Object.keys(f).reduce(function(e, t) {
                    return (0, d._)((0, s._)({}, e), {
                        [t]: f[t].map(function(e) {
                            var t = (0, c._)(e, 2);
                            return t[0], t[1]
                        })
                    })
                }, {
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
                    return v
                }
            });
            var a = n("87627"),
                r = n("200344"),
                i = n("29713"),
                l = n("21189"),
                u = n("778455"),
                o = n("392711"),
                s = n("661223"),
                d = n("312916"),
                c = n("30838"),
                f = !1,
                _ = {
                    settingsVisible: !1,
                    enabled: !1,
                    combosEnabled: !0,
                    combosRequiredCount: 5,
                    comboSoundsEnabled: !0,
                    screenshakeEnabled: !0,
                    screenshakeEnabledLocations: {
                        [c.ShakeLocation.CHAT_INPUT]: !0,
                        [c.ShakeLocation.VOICE_USER]: !1,
                        [c.ShakeLocation.MENTION]: !1
                    },
                    shakeIntensity: 1,
                    confettiEnabled: !0,
                    confettiEnabledLocations: {
                        [c.ConfettiLocation.CHAT_INPUT]: !0,
                        [c.ConfettiLocation.REACTION]: !0,
                        [c.ConfettiLocation.MEMBER_USER]: !0,
                        [c.ConfettiLocation.CALL_TILE]: !0
                    },
                    confettiSize: 16,
                    confettiCount: 5,
                    warningSeen: !1
                },
                E = (0, o.cloneDeep)(_),
                h = function(e) {
                    (0, i._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        return (0, a._)(this, n), t.apply(this, arguments)
                    }
                    var o = n.prototype;
                    return o.initialize = function(e) {
                        E = (0, l._)({}, E, e)
                    }, o.getUserAgnosticState = function() {
                        return E
                    }, o.isEnabled = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.confettiLocation,
                            n = e.shakeLocation,
                            a = null == t || E.confettiEnabled && E.confettiEnabledLocations[t],
                            r = null == n || E.screenshakeEnabled && E.screenshakeEnabledLocations[n];
                        return this.settingsVisible && !f && E.enabled && a && r
                    }, (0, r._)(n, [{
                        key: "settingsVisible",
                        get: function() {
                            return E.settingsVisible
                        }
                    }, {
                        key: "shakeIntensity",
                        get: function() {
                            return this.isEnabled() ? E.shakeIntensity : 0
                        }
                    }, {
                        key: "combosRequiredCount",
                        get: function() {
                            return this.isEnabled() ? E.combosRequiredCount : 0
                        }
                    }, {
                        key: "screenshakeEnabled",
                        get: function() {
                            return E.screenshakeEnabled
                        }
                    }, {
                        key: "screenshakeEnabledLocations",
                        get: function() {
                            return E.screenshakeEnabledLocations
                        }
                    }, {
                        key: "combosEnabled",
                        get: function() {
                            return E.combosEnabled
                        }
                    }, {
                        key: "comboSoundsEnabled",
                        get: function() {
                            return E.comboSoundsEnabled
                        }
                    }]), n
                }(s.default.DeviceSettingsStore);
            h.displayName = "PoggermodeSettingsStore", h.persistKey = "PoggermodeSettingsStore";
            var v = new h(d.default, {
                POGGERMODE_SETTINGS_UPDATE: function(e) {
                    var t = e.settings;
                    E = (0, l._)({}, E, t)
                },
                POGGERMODE_TEMPORARILY_DISABLED: function() {
                    f = !0
                }
            })
        },
        993638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                },
                shouldTrackMessage: function() {
                    return C
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("21189"),
                l = n("227094"),
                u = n("261047"),
                o = n("778455");
            n("330740"), n("996173"), n("47120"), n("357629"), n("814951");
            var s = n("661223"),
                d = n("386695"),
                c = n("767191"),
                f = n("312916"),
                _ = n("262047"),
                E = n("232733"),
                h = n("845649"),
                v = n("232356"),
                g = n("851307"),
                m = n("30838"),
                p = n("467006"),
                A = new Set,
                S = new d.default(function(e) {
                    var t = e.userId,
                        n = e.channelId;
                    return [t, n]
                }, function(e) {
                    var t = e.userId,
                        n = e.channelId;
                    return "".concat(n, "-").concat(t)
                }),
                T = new d.default(function(e) {
                    var t = e.messageId,
                        n = e.channelId,
                        a = e.combo.userId;
                    return [t, n, a]
                }, function(e) {
                    var t = e.messageId,
                        n = e.channelId,
                        a = e.combo.userId;
                    return "".concat(n, "-").concat(a, "-").concat(t)
                }),
                y = function(e) {
                    var t = e.userId,
                        n = e.channelId;
                    return "".concat(t, "-").concat(n)
                };

            function C(e, t, n, a) {
                return !(e !== t || null == n || a.has(n)) && (a.add(n), !0)
            }
            var M = function(e) {
                (0, r._)(n, e);
                var t = (0, o._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                var i = n.prototype;
                return i.initialize = function() {
                    this.waitFor(_.default, E.default)
                }, i.getComboScore = function(e, t) {
                    var n = S.get(y({
                        userId: e,
                        channelId: t
                    }));
                    return null == n ? 0 : (0, g.getComboScore)(n)
                }, i.getUserCombo = function(e, t) {
                    return S.get(y({
                        userId: e,
                        channelId: t
                    }))
                }, i.isComboing = function(e, t) {
                    var n, a = this.getUserCombo(e, t);
                    return null != a && a.value >= v.default.combosRequiredCount && null != (n = a) && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1)
                }, i.getMessageCombo = function(e) {
                    var t, n = T.get(e);
                    return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0
                }, i.getMostRecentMessageCombo = function(e) {
                    var t = T.values(e);
                    return t[t.length - 1]
                }, i.getUserComboShakeIntensity = function(e, t, n, a) {
                    var r = this.getUserCombo(e, t);
                    return null != r ? (0, g.getComboShakeIntensity)(r, a) * n : 0
                }, n
            }(s.default.Store);
            M.displayName = "PoggermodeStore";
            var I = new M(f.default, {
                    POGGERMODE_UPDATE_COMBO: function(e) {
                        e.type;
                        var t = (0, u._)(e, ["type"]);
                        if (!v.default.isEnabled()) return !1;
                        ! function e(t) {
                            var n, a, r, u, o, s, d = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                f = S.get(y(t)),
                                _ = (0, l._)((0, i._)({}, f, t), {
                                    value: null !== (a = null !== (n = t.value) && void 0 !== n ? n : null == f ? void 0 : f.value) && void 0 !== a ? a : 0,
                                    multiplier: Math.min(null !== (u = null !== (r = t.multiplier) && void 0 !== r ? r : null == f ? void 0 : f.multiplier) && void 0 !== u ? u : 1, 7),
                                    decayInterval: null !== (o = null == f ? void 0 : f.decayInterval) && void 0 !== o ? o : new c.Interval
                                });
                            S.set(y(t), _), d && (null === (s = _.decayInterval) || void 0 === s || s.start(1e3, function() {
                                var t = S.get(y(_));
                                if (null != t) {
                                    var n, a = _.multiplier !== t.multiplier && _.value !== t.value;
                                    t.value <= 0 || a ? (null === (n = t.decayInterval) || void 0 === n || n.stop(), t.value <= 0 && (e((0, l._)((0, i._)({}, t), {
                                        value: 0,
                                        multiplier: 1
                                    })), I.emitChange())) : (e((0, l._)((0, i._)({}, t), {
                                        value: t.value - 1
                                    })), I.emitChange())
                                }
                            }))
                        }(t)
                    },
                    POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
                        var t, n = e.comboMessage;
                        if (!v.default.isEnabled()) return !1;
                        t = n, T.set(t.messageId, t)
                    },
                    MESSAGE_CREATE: function(e) {
                        var t = e.channelId,
                            n = e.message,
                            a = n.mentions,
                            r = n.author,
                            i = n.nonce;
                        if (!v.default.isEnabled()) return !1;
                        var l = _.default.getId();
                        if (!C(null == r ? void 0 : r.id, l, i, A)) return !1;
                        var u = S.get(y({
                            userId: null !== (o = null == r ? void 0 : r.id) && void 0 !== o ? o : "???",
                            channelId: t
                        }));
                        if (v.default.screenshakeEnabled && v.default.screenshakeEnabledLocations[m.ShakeLocation.MENTION] && null != a && null != a.find(function(e) {
                                return e.id === l
                            })) {
                            var o, s, d = null != u ? null !== (s = (0, g.getComboShakeIntensity)(u, m.ShakeLevel.LEVEL_4)) && void 0 !== s ? s : .001 : 4 * Math.random();
                            return h.ComponentDispatch.dispatch(p.ComponentActions.SHAKE_APP, {
                                duration: 1e3,
                                intensity: d
                            }), !0
                        }
                        return !1
                    }
                }),
                L = I
        },
        851307: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getComboPercentage: function() {
                    return c
                },
                getComboScore: function() {
                    return _
                },
                getComboShakeIntensity: function() {
                    return u
                },
                getComboStyles: function() {
                    return f
                }
            });
            var a = n("154005");
            n("724458"), n("357629"), n("363505");
            var r = n("30838"),
                i = n("467006"),
                l = function(e, t) {
                    var n = e.multiplier,
                        r = e.value,
                        i = (0, a._)(t, 2),
                        l = i[0],
                        u = i[1],
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        s = r * n;
                    return s <= 0 ? 0 : Math.min(o, l.reduce(function(e, t, n) {
                        if (s > t) {
                            var a = u[n];
                            if (n + 1 === l.length) return u[n];
                            var r = l[n + 1],
                                i = u[n + 1];
                            return (s - t) / (r - t) * (i - a) + a
                        }
                        return s === t ? u[n] : e
                    }, 0))
                },
                u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.ShakeLevel.LEVEL_3;
                    return l(e, [r.SHAKE_STEPS[t], r.SHAKE_STEP_DIVIDER[t]], 1e5)
                },
                o = [
                    [1, .001],
                    [25, .3],
                    [100, .5],
                    [250, .8],
                    [500, .9],
                    [2500, .95],
                    [9001, 1]
                ],
                s = o.map(function(e) {
                    return (0, a._)(e, 1)[0]
                }),
                d = o.map(function(e) {
                    var t = (0, a._)(e, 2);
                    return t[0], t[1]
                }),
                c = function(e) {
                    return l(e, [s, d], 1)
                },
                f = function(e) {
                    return 1 === e ? {
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
                    }
                };

            function _(e) {
                var t;
                return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1)
            }
        },
        98906: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("154005");
            n("151809"), n("462848"), n("357629"), n("363505");
            var r = n("392711"),
                i = n.n(r),
                l = n("328470"),
                u = n("30838"),
                o = n("467006");

            function s(e) {
                switch (e) {
                    case u.ShakeLocation.CHAT_INPUT:
                        return "chat_input";
                    case u.ShakeLocation.MENTION:
                        return "mention";
                    case u.ShakeLocation.VOICE_USER:
                        return "voice_user"
                }
            }

            function d(e) {
                switch (e) {
                    case u.ConfettiLocation.CHAT_INPUT:
                        return "chat_input";
                    case u.ConfettiLocation.MEMBER_USER:
                        return "member_user";
                    case u.ConfettiLocation.REACTION:
                        return "reaction";
                    case u.ConfettiLocation.CALL_TILE:
                        return "call_tile"
                }
            }

            function c(e, t) {
                return Object.entries(e).filter(function(e) {
                    var t = (0, a._)(e, 2);
                    return t[0], t[1]
                }).map(function(e) {
                    return t(Number.parseInt((0, a._)(e, 1)[0]))
                })
            }
            var f = i().throttle(function(e) {
                var t = e.enabled,
                    n = e.combosEnabled,
                    a = e.combosRequiredCount,
                    r = e.screenshakeEnabled,
                    i = e.shakeIntensity,
                    u = e.screenshakeEnabledLocations,
                    f = e.confettiEnabled,
                    _ = e.confettiSize,
                    E = e.confettiCount,
                    h = e.confettiEnabledLocations;
                l.default.track(o.AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, {
                    enabled: t,
                    combos_enabled: n,
                    combos_required_count: a,
                    screenshake_enabled: r,
                    shake_intensity: i,
                    screenshake_enabled_locations: c(u, s),
                    confetti_enabled: f,
                    confetti_size: _,
                    confetti_count: E,
                    confetti_enabled_locations: c(h, d)
                })
            }, 5e3)
        },
        60259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PollsExperiment: function() {
                    return r
                },
                PollsUserExperiment: function() {
                    return i
                }
            });
            var a = n("516086"),
                r = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-09_guild_polls",
                    label: "Polls",
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
                    return m
                },
                filterOutUUID: function() {
                    return E
                },
                generateEmptyPollAnswer: function() {
                    return f
                },
                generateUploadId: function() {
                    return _
                },
                isAnswerFilled: function() {
                    return v
                },
                isIncompleteAnswer: function() {
                    return g
                },
                useCanPostPollsInChannel: function() {
                    return h
                }
            });
            var a = n("21189"),
                r = n("227094");
            n("757143"), n("301563"), n("363505"), n("357629");
            var i = n("153832"),
                l = n("661223"),
                u = n("154681"),
                o = n("197905"),
                s = n("871831"),
                d = n("60259"),
                c = n("467006");

            function f() {
                return {
                    text: void 0,
                    image: void 0,
                    uploadId: _()
                }
            }

            function _() {
                return (0, i.v4)()
            }

            function E(e) {
                return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
            }

            function h(e) {
                var t = d.PollsExperiment.useExperiment({
                        guildId: e.guild_id,
                        location: "useCanPostPollsInChannel"
                    }).enabled,
                    n = (0, l.useStateFromStoresArray)([s.default], function() {
                        var t, n;
                        return null !== (n = null === (t = e.recipients) || void 0 === t ? void 0 : t.map(s.default.getUser)) && void 0 !== n ? n : []
                    }, [e.recipients]);
                return !!c.ChannelTypesSets.POLLS.has(e.type) && (e.isPrivate() ? n.every(function(e) {
                    return (null == e ? void 0 : e.isStaff()) === !0
                }) : t && o.default.can(c.Permissions.SEND_MESSAGES, e))
            }

            function v(e, t) {
                return t === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? null != e.image : null != e.text && e.text.length > 0
            }

            function g(e, t) {
                return t === u.PollLayoutTypes.DEFAULT && null != e.image && (null == e.text || 0 === e.text.length)
            }

            function m(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
                if (null != e) {
                    var i = null == e ? void 0 : null === (t = e.answers) || void 0 === t ? void 0 : t.map(function(e, t) {
                        var n, i, l, u = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
                            o = (0, r._)((0, a._)({}, e.poll_media), {
                                emoji: null != u ? {
                                    id: null !== (i = u.id) && void 0 !== i ? i : null,
                                    name: null !== (l = u.name) && void 0 !== l ? l : ""
                                } : void 0
                            });
                        return (0, r._)((0, a._)({}, e), {
                            answer_id: t + 1,
                            poll_media: o
                        })
                    });
                    return (0, r._)((0, a._)({}, e), {
                        expiry: n,
                        answers: i
                    })
                }
            }
        },
        278018: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("561427"),
                r = n("731865"),
                i = n("551835");

            function l(e) {
                if (e !== i.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return null;
                var t = r.default.getChannel(e);
                return null == t ? null : a.default.ensurePrivateChannel(t.recipients)
            }
        },
        687008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("21189"),
                l = n("227094"),
                u = n("778455"),
                o = n("661223"),
                s = n("312916"),
                d = n("162256"),
                c = {},
                f = {},
                _ = {};

            function E(e) {
                if (null == e) return !1;
                var t = f[e];
                if (null == t) return !1;
                var n = d.default.getMessage(e, t.messageId);
                if (null == n) return !1;
                c[e] = {
                    channel: t.channel,
                    message: n,
                    shouldMention: t.shouldMention,
                    showMentionToggle: t.showMentionToggle
                }, delete f[e]
            }

            function h() {
                c = {}, f = {}, _ = {}
            }
            var v = function(e) {
                (0, r._)(n, e);
                var t = (0, u._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                var i = n.prototype;
                return i.initialize = function() {
                    this.waitFor(d.default)
                }, i.getPendingReply = function(e) {
                    return c[e]
                }, i.getPendingReplyActionSource = function(e) {
                    return _[e]
                }, n
            }(o.default.Store);
            v.displayName = "PendingReplyStore";
            var g = new v(s.default, {
                CREATE_PENDING_REPLY: function(e) {
                    var t = e.channel,
                        n = e.message,
                        a = e.shouldMention,
                        r = e.showMentionToggle,
                        i = e.source;
                    c[t.id] = {
                        channel: t,
                        message: n,
                        shouldMention: void 0 === a || a,
                        showMentionToggle: void 0 === r || r
                    }, _[t.id] = i
                },
                CREATE_SHALLOW_PENDING_REPLY: function(e) {
                    var t = e.channel,
                        n = e.messageId,
                        a = e.shouldMention,
                        r = e.showMentionToggle;
                    f[t.id] = {
                        channel: t,
                        messageId: n,
                        shouldMention: void 0 === a || a,
                        showMentionToggle: void 0 === r || r
                    }
                },
                SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
                    var t = e.channelId,
                        n = e.shouldMention;
                    t in c && (c[t] = (0, l._)((0, i._)({}, c[t]), {
                        shouldMention: n
                    })), t in f && (f[t] = (0, l._)((0, i._)({}, f[t]), {
                        shouldMention: n
                    }))
                },
                DELETE_PENDING_REPLY: function(e) {
                    var t = e.channelId;
                    delete c[t], delete f[t]
                },
                CONNECTION_OPEN: h,
                LOGOUT: h,
                MESSAGE_DELETE: function(e) {
                    var t, n, a, r = e.id,
                        i = e.channelId;
                    if ((null === (n = c[i]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === r) delete c[i], delete _[i];
                    else {
                        if ((null === (a = f[i]) || void 0 === a ? void 0 : a.messageId) !== r) return !1;
                        delete f[i], delete _[i]
                    }
                },
                CHANNEL_SELECT: function(e) {
                    E(e.channelId)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    E(e.channelId)
                }
            })
        },
        813287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return s
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var a, r, i = n("694574"),
                l = n("488867"),
                u = n("859404"),
                o = n("467006");
            (a = r || (r = {}))[a.SENDABLE = 0] = "SENDABLE", a[a.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", a[a.NONSENDABLE = 2] = "NONSENDABLE", a[a.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            var s = function(e, t, n) {
                    if (null == t) return 2;
                    var a = l.default.canUseCustomStickersEverywhere(t);
                    if ((0, u.isStandardSticker)(e)) return 0;
                    if ((0, u.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || i.default.can({
                        permission: o.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? a ? 0 : 1 : 2 : 3;
                    return 2
                },
                d = function(e, t, n) {
                    return 0 === s(e, t, n)
                }
        },
        8584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("87627"),
                r = n("200344"),
                i = n("29713"),
                l = n("21189"),
                u = n("227094"),
                o = n("778455");
            n("357629"), n("653041"), n("363505"), n("462848");
            var s = n("392711"),
                d = n.n(s),
                c = n("661223"),
                f = n("312916"),
                _ = n("580905"),
                E = n("991400"),
                h = n("361820"),
                v = n("467006"),
                g = n("746835"),
                m = {
                    pendingUsages: []
                };
            v.Durations.DAY;
            var p = new _.default({
                    computeBonus: function() {
                        return 100
                    },
                    computeWeight: function(e) {
                        var t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: function(e) {
                        return h.default.getStickerById(e)
                    },
                    afterCompute: function() {},
                    numFrequentlyItems: 20
                }),
                A = function() {
                    h.default.isLoaded && p.compute()
                },
                S = function() {
                    A()
                };

            function T() {
                var e, t = null === (e = E.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                p.overwriteHistory(d().mapValues(t, function(e) {
                    return (0, u._)((0, l._)({}, e), {
                        recentUses: e.recentUses.map(Number).filter(function(e) {
                            return e > 0
                        })
                    })
                }), m.pendingUsages)
            }
            var y = function(e) {
                (0, i._)(n, e);
                var t = (0, o._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                var l = n.prototype;
                return l.initialize = function(e) {
                    this.waitFor(h.default), null != e && (m = e), this.syncWith([h.default], S), this.syncWith([E.default], T)
                }, l.getState = function() {
                    return m
                }, l.hasPendingUsage = function() {
                    return m.pendingUsages.length > 0
                }, (0, r._)(n, [{
                    key: "stickerFrecencyWithoutFetchingLatest",
                    get: function() {
                        return p
                    }
                }]), n
            }(c.default.PersistedStore);
            y.displayName = "StickersPersistedStore", y.persistKey = "StickersPersistedStoreV2";
            var C = new y(f.default, {
                STICKER_TRACK_USAGE: function(e) {
                    var t = e.stickerIds;
                    null == t || t.forEach(function(e) {
                        p.track(e), m.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), A()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t = e.settings.type,
                        n = e.wasSaved;
                    if (t !== g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    m.pendingUsages = []
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
            var a = (0, n("516086").createExperiment)({
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
                    return l
                },
                default: function() {
                    return u
                }
            }), n("474991"), n("398202"), n("301563"), n("932991"), n("293114"), n("814951"), n("754598"), n("566702");
            var a = n("631863"),
                r = "@silent",
                i = new RegExp("^".concat(r, "(\\s|$)"));

            function l() {
                return a.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                }).allowSending
            }

            function u(e) {
                return l() && null != e.match(i) ? [!0, e.substring(r.length).trim()] : [!1, e]
            }
        },
        83448: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PAGE_SIZE: function() {
                    return S
                },
                default: function() {
                    return G
                }
            });
            var a, r = n("87627"),
                i = n("200344"),
                l = n("29713"),
                u = n("778455");
            n("330740"), n("996173"), n("47120"), n("357629"), n("462848"), n("363505"), n("814951"), n("230036"), n("978209");
            var o = n("392711"),
                s = n.n(o),
                d = n("930198"),
                c = n("323419"),
                f = n("661223"),
                _ = n("312916"),
                E = n("9999"),
                h = n("613085"),
                v = n("775822"),
                g = n("731865"),
                m = n("417223"),
                p = n("370275"),
                A = n("972942"),
                S = 25,
                T = !1,
                y = !0,
                C = !1,
                M = !1,
                I = null,
                L = d.ThreadSortOrder.LATEST_ACTIVITY,
                N = [],
                O = 0;

            function R() {
                T = !1, y = !0, C = !1, M = !1, I = null, L = d.ThreadSortOrder.LATEST_ACTIVITY, a = new Set, O = 0, N = []
            }

            function D(e, t) {
                return t === d.ThreadSortOrder.LATEST_ACTIVITY ? m.default.lastMessageId(e.id) : e.id
            }

            function b() {
                if (null == I) return !1;
                var e = !C,
                    t = g.default.getChannel(N[N.length - 1]),
                    n = null == t ? null : D(t, L);
                N = s()(g.default.getAllThreadsForParent(I)).filter(function(e) {
                    return e.isArchivedThread()
                }).filter(function(t) {
                    if (0 !== a.size && (null === (r = t.appliedTags) || void 0 === r ? void 0 : r.some(function(e) {
                            return a.has(e)
                        })) !== !0) return !1;
                    if (e || null == n) return !0;
                    var r, i = null == t ? null : D(t, L);
                    return null != i && c.default.compare(i, n) >= 0
                }).sort(function(e, t) {
                    return c.default.compare(D(e, L), D(t, L))
                }).map(function(e) {
                    return e.id
                }).reverse().value()
            }

            function U(e) {
                if (!(N.indexOf(e) >= 0)) return !1;
                N = N.filter(function(t) {
                    return t !== e
                })
            }
            var P = [],
                w = function(e) {
                    (0, l._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        return (0, r._)(this, n), t.apply(this, arguments)
                    }
                    var o = n.prototype;
                    return o.initialize = function() {
                        this.waitFor(g.default, A.default, m.default)
                    }, o.isLoading = function(e, t, n) {
                        return I === e && L === t && (0, p.areSetsEqual)(a, n) ? T : (R(), !1)
                    }, o.getThreads = function(e, t, n) {
                        return I === e && L === t && (0, p.areSetsEqual)(a, n) ? N : P
                    }, (0, i._)(n, [{
                        key: "canLoadMore",
                        get: function() {
                            return C && !T && !M
                        }
                    }, {
                        key: "nextOffset",
                        get: function() {
                            return O
                        }
                    }, {
                        key: "isInitialLoad",
                        get: function() {
                            return y
                        }
                    }]), n
                }(f.default.Store);
            w.displayName = "ArchivedThreadsStore";
            var G = new w(_.default, {
                CONNECTION_OPEN: R,
                THREAD_DELETE: function(e) {
                    return U(e.channel.id)
                },
                THREAD_UPDATE: function(e) {
                    var t = e.channel;
                    return I === t.parent_id && !!(0, E.isForumPostPinned)(t.id) && void U(t.id)
                },
                CHANNEL_DELETE: function(e) {
                    if (e.channel.id !== I) return !1;
                    R()
                },
                LOAD_ARCHIVED_THREADS: function(e) {
                    (e.channelId !== I || e.sortOrder !== L || !(0, p.areSetsEqual)(e.tagFilter, a)) && R(), I = e.channelId, L = e.sortOrder, a = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), T = !0, y = !1
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    if (e.channelId !== I || e.sortOrder !== L || !(0, p.areSetsEqual)(e.tagFilter, a)) return !1;
                    var t = e.threads.filter(function(e) {
                        return v.ALL_CHANNEL_TYPES.has(e.type)
                    }).map(function(e) {
                        return e.id
                    });
                    N = N.concat(t);
                    var n = g.default.getChannel(I);
                    null != n && n.isForumLikeChannel() && (0, h.trackForumMorePostsLoaded)({
                        guildId: n.guild_id,
                        channelId: n.id,
                        numArchivedThreads: N.length,
                        hasMoreThreads: e.hasMore,
                        filterTagIds: Array.from(e.tagFilter),
                        sortOrder: e.sortOrder
                    }), b(), C = e.hasMore, O = e.offset + S, T = !1, y = !1
                },
                LOAD_ARCHIVED_THREADS_FAIL: function(e) {
                    if (e.channelId !== I || e.sortOrder !== L || !(0, p.areSetsEqual)(e.tagFilter, a)) return !1;
                    T = !1, M = !0, y = !1
                },
                RESORT_THREADS: function(e) {
                    return (null == I || null == e.channelId || I === e.channelId) && b()
                }
            })
        },
        267951: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("356056"),
                r = n("324415");
            n("653041"), n("789020"), n("363505"), n("462848"), n("357629");
            var i = n("455809"),
                l = n("454836"),
                u = n("312916"),
                o = n("992888"),
                s = n("330853"),
                d = n("244180"),
                c = n("24384"),
                f = n("775822"),
                _ = n("262047"),
                E = n("731865"),
                h = n("197905"),
                v = n("370275"),
                g = n("83448"),
                m = n("972942"),
                p = n("644829"),
                A = n("331258"),
                S = n("467006"),
                T = n("551835"),
                y = n("30175");

            function C(e, t) {
                return l.default.patch({
                    url: S.Endpoints.CHANNEL(e.id),
                    body: t
                }).then(function(t) {
                    return u.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: (0, f.createChannelRecordFromServer)(t.body)
                    }), e.isForumPost() && null != e.parent_id && u.default.dispatch({
                        type: "RESORT_THREADS",
                        channelId: e.parent_id
                    }), t
                })
            }

            function M(e, t) {
                u.default.dispatch({
                    type: "THREAD_MEMBER_LOCAL_UPDATE",
                    id: e.id,
                    guildId: e.getGuildId(),
                    userId: _.default.getId(),
                    isJoining: t
                })
            }
            var I = {
                archiveThread(e, t) {
                    var n = {
                        archived: !0
                    };
                    return t && (n.locked = !0), C(e, n)
                },
                lockThread(e) {
                    return (0, a._)(function() {
                        var t;
                        return (0, r._)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!(t = e.isArchivedThread())) return [3, 2];
                                    return [4, this.unarchiveThread(e, !1)];
                                case 1:
                                    n.sent(), n.label = 2;
                                case 2:
                                    return [2, C(e, {
                                        locked: !0,
                                        archived: t
                                    })]
                            }
                        })
                    }).apply(this)
                },
                unlockThread(e) {
                    return (0, a._)(function() {
                        var t;
                        return (0, r._)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!(t = e.isArchivedThread())) return [3, 2];
                                    return [4, this.unarchiveThread(e, !0)];
                                case 1:
                                    n.sent(), n.label = 2;
                                case 2:
                                    return [2, C(e, {
                                        locked: !1,
                                        archived: t
                                    })]
                            }
                        })
                    }).apply(this)
                },
                unarchiveThread: (e, t) => (0, a._)(function() {
                    var n, a, i, l, u;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                n = {
                                    archived: !1
                                }, a = e.isForumPost(), t && (n.locked = !1), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, C(e, n)];
                            case 2:
                                return [2, r.sent()];
                            case 3:
                                throw (null === (l = (i = r.sent()).body) || void 0 === l ? void 0 : l.code) === S.AbortCodes.TOO_MANY_THREADS ? o.default.show({
                                    title: a ? y.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : y.default.Messages.CANNOT_UNARCHIVE_THREAD,
                                    body: a ? y.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : y.default.Messages.TOO_MANY_THREADS_MESSAGE
                                }) : (null === (u = i.body) || void 0 === u ? void 0 : u.code) === S.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? o.default.show({
                                    title: y.default.Messages.CANNOT_UNARCHIVE_THREAD,
                                    body: y.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                                }) : 429 === i.status ? o.default.show({
                                    title: a ? y.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : y.default.Messages.CANNOT_UNARCHIVE_THREAD,
                                    body: y.default.Messages.RATE_LIMITED
                                }) : o.default.show({
                                    title: y.default.Messages.ERROR,
                                    body: y.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                                }), i;
                            case 4:
                                return [2]
                        }
                    })
                })(),
                unarchiveThreadIfNecessary(e) {
                    return (0, a._)(function() {
                        var t, n, a;
                        return (0, r._)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (n = E.default.getChannel(e), a = h.default.can(S.Permissions.MANAGE_THREADS, n), !(null != n && n.isArchivedThread() && (a || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0))) return [3, 2];
                                    return [4, this.unarchiveThread(n, !1)];
                                case 1:
                                    r.sent(), r.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    }).apply(this)
                },
                setInvitable: (e, t) => C(e, {
                    invitable: t
                }),
                joinThread: (e, t) => (0, a._)(function() {
                    var n, a;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                e.isForumPost() && M(e, !0), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, l.default.post({
                                    url: S.Endpoints.THREAD_MEMBER(e.id),
                                    query: {
                                        location: t
                                    }
                                })];
                            case 2:
                                return [2, r.sent()];
                            case 3:
                                return (null === (n = r.sent().body) || void 0 === n ? void 0 : n.code) === S.AbortCodes.TOO_MANY_THREAD_MEMBERS ? (a = e.isForumPost(), o.default.show({
                                    title: a ? y.default.Messages.CANNOT_JOIN_FORUM_POST : y.default.Messages.CANNOT_JOIN_THREAD,
                                    body: a ? y.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : y.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                                })) : o.default.show({
                                    title: y.default.Messages.ERROR,
                                    body: y.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                                }), e.isForumPost() && M(e, !1), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })(),
                addMember: (e, t, n) => (0, a._)(function() {
                    var a, i;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, l.default.post({
                                    url: S.Endpoints.THREAD_MEMBER(e.id, t),
                                    query: {
                                        location: n
                                    }
                                })];
                            case 1:
                                return [2, r.sent()];
                            case 2:
                                return (null === (a = r.sent().body) || void 0 === a ? void 0 : a.code) === S.AbortCodes.TOO_MANY_THREAD_MEMBERS ? (i = e.isForumPost(), o.default.show({
                                    title: i ? y.default.Messages.CANNOT_ADD_USER_TO_FORUM_POST : y.default.Messages.CANNOT_ADD_USER_TO_THREAD,
                                    body: i ? y.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : y.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                                })) : o.default.show({
                                    title: y.default.Messages.ERROR,
                                    body: y.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                                }), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })(),
                leaveThread: (e, t) => (e.isForumPost() && M(e, !1), l.default.delete({
                    url: S.Endpoints.THREAD_MEMBER(e.id),
                    query: {
                        location: t
                    }
                })),
                removeMember: (e, t, n) => l.default.delete({
                    url: S.Endpoints.THREAD_MEMBER(e.id, t),
                    query: {
                        location: n
                    }
                }),
                setAutoArchiveDuration: (e, t) => l.default.patch({
                    url: S.Endpoints.CHANNEL(e.id),
                    body: {
                        auto_archive_duration: t
                    }
                }),
                pin(e) {
                    var t = e.flags | T.ChannelFlags.PINNED;
                    this.updateFlags(e, t, e.isArchivedThread())
                },
                unpin(e) {
                    var t = e.flags & ~T.ChannelFlags.PINNED;
                    this.updateFlags(e, t)
                },
                updateFlags(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return (0, a._)(function() {
                        var a, i;
                        return (0, r._)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    u.default.dispatch({
                                        type: "THREAD_UPDATE",
                                        channel: e.merge({
                                            flags: t
                                        })
                                    }), a = {
                                        flags: t
                                    }, n && (a.archived = !1), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, l.default.patch({
                                        url: S.Endpoints.CHANNEL(e.id),
                                        body: a
                                    })];
                                case 2:
                                    return r.sent(), [3, 4];
                                case 3:
                                    return r.sent(), u.default.dispatch({
                                        type: "THREAD_UPDATE",
                                        channel: e
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })()
                },
                replacePin(e, t) {
                    return (0, a._)(function() {
                        var n, a, i, o;
                        return (0, r._)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = e.merge({
                                        flags: e.flags & ~T.ChannelFlags.PINNED
                                    }), a = t.merge({
                                        flags: t.flags | T.ChannelFlags.PINNED
                                    }), u.default.dispatch({
                                        type: "THREAD_UPDATE",
                                        channel: n
                                    }), u.default.dispatch({
                                        type: "THREAD_UPDATE",
                                        channel: a
                                    }), [4, this.unarchiveThreadIfNecessary(e.id)];
                                case 1:
                                    return r.sent(), [4, this.unarchiveThreadIfNecessary(t.id)];
                                case 2:
                                    r.sent(), r.label = 3;
                                case 3:
                                    return r.trys.push([3, 5, , 6]), [4, l.default.patch({
                                        url: S.Endpoints.CHANNEL(e.id),
                                        body: {
                                            flags: e.flags & ~T.ChannelFlags.PINNED
                                        }
                                    })];
                                case 4:
                                    return r.sent(), [3, 6];
                                case 5:
                                    return r.sent(), u.default.dispatch({
                                        type: "THREAD_UPDATE",
                                        channel: e
                                    }), u.default.dispatch({
                                        type: "THREAD_UPDATE",
                                        channel: t
                                    }), [2];
                                case 6:
                                    return r.trys.push([6, 8, , 9]), [4, l.default.patch({
                                        url: S.Endpoints.CHANNEL(t.id),
                                        body: {
                                            flags: t.flags | T.ChannelFlags.PINNED
                                        }
                                    })];
                                case 7:
                                    return r.sent(), [3, 9];
                                case 8:
                                    return r.sent(), u.default.dispatch({
                                        type: "THREAD_UPDATE",
                                        channel: t
                                    }), [3, 9];
                                case 9:
                                    return [2]
                            }
                        })
                    }).apply(this)
                },
                openThreadCreationForMobile(e, t, n) {
                    (0, d.trackWithMetadata)(S.AnalyticEvents.THREAD_CREATION_STARTED, {
                        location: n,
                        channel_id: e.id,
                        guild_id: e.guild_id
                    }), s.default.changeThreadSettings(e.id, {
                        parentMessageId: t,
                        isPrivate: !1,
                        location: n
                    }), null == t && (0, c.setActiveCommand)({
                        channelId: e.id,
                        command: null,
                        section: null
                    })
                },
                setNotificationSettings(e, t) {
                    return (0, a._)(function() {
                        return (0, r._)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if ((0, p.trackThreadNotificationSettingsUpdated)(e, t), m.default.hasJoined(e.id)) return [3, 2];
                                    return [4, this.joinThread(e, "Change Notification Settings")];
                                case 1:
                                    n.sent(), n.label = 2;
                                case 2:
                                    return [2, l.default.patch({
                                        url: S.Endpoints.THREAD_MEMBER_SETTINGS(e.id),
                                        body: t
                                    })]
                            }
                        })
                    }).apply(this)
                },
                loadArchivedThreads(e, t, n, a, r) {
                    !g.default.isLoading(t, n, a) && (u.default.dispatch({
                        type: "LOAD_ARCHIVED_THREADS",
                        channelId: t,
                        sortOrder: n,
                        tagFilter: a
                    }), l.default.get({
                        url: S.Endpoints.THREAD_SEARCH(t),
                        query: {
                            archived: !0,
                            sort_by: "last_message_time",
                            sort_order: "desc",
                            limit: g.PAGE_SIZE,
                            tag: a.size > 0 ? Array.from(a).join(",") : void 0,
                            tag_setting: i.ThreadSearchTagSetting.MATCH_SOME,
                            offset: r
                        },
                        retries: 2
                    }).then(function(i) {
                        var l = i.body,
                            o = l.threads,
                            s = l.members,
                            d = l.has_more,
                            c = l.first_messages,
                            f = l.most_recent_messages;
                        u.default.dispatch({
                            type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                            guildId: e,
                            channelId: t,
                            offset: r,
                            sortOrder: n,
                            tagFilter: a,
                            threads: o,
                            firstMessages: c,
                            mostRecentMessages: f,
                            members: (null != s ? s : []).map(function(e) {
                                return (0, A.default)(e)
                            }),
                            owners: o.map(function(e) {
                                return e.owner
                            }).filter(v.isNotNullish),
                            hasMore: d
                        })
                    }, function() {
                        u.default.dispatch({
                            type: "LOAD_ARCHIVED_THREADS_FAIL",
                            channelId: t,
                            sortOrder: n,
                            tagFilter: a
                        })
                    }))
                },
                searchThreads: (e, t, n, o) => (0, a._)(function() {
                    var a, s, d, c, f, _;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return a = null != o && o.size > 0 ? Array.from(o).join(",") : void 0, [4, l.default.get({
                                    url: S.Endpoints.THREAD_SEARCH(t),
                                    query: {
                                        name: n,
                                        tag: a,
                                        tag_setting: i.ThreadSearchTagSetting.MATCH_SOME
                                    }
                                })];
                            case 1:
                                return d = (s = r.sent().body).threads, c = s.members, f = s.first_messages, _ = s.most_recent_messages, u.default.dispatch({
                                    type: "LOAD_THREADS_SUCCESS",
                                    threads: d,
                                    members: c,
                                    guildId: e,
                                    firstMessages: f,
                                    mostRecentMessages: _
                                }), [2, d.map(function(e) {
                                    return e.id
                                })]
                        }
                    })
                })()
            }
        },
        151191: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("21189"),
                l = n("778455");
            n("357629"), n("633702"), n("266796"), n("996173"), n("47120");
            var u = n("392711"),
                o = n.n(u),
                s = n("661223"),
                d = n("312916"),
                c = n("919759"),
                f = n("775822"),
                _ = n("731865"),
                E = {};

            function h(e) {
                var t;
                null === (t = e.threads) || void 0 === t || t.forEach(v)
            }

            function v(e) {
                if (!f.ALL_CHANNEL_TYPES.has(e.type)) return !1;
                var t = function(e) {
                    if (!(e.id in E)) {
                        var t, n;
                        E[e.id] = {
                            guildId: e.guild_id,
                            parentId: e.parent_id,
                            memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
                            memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
                        }
                    }
                    return E[e.id]
                }(e);
                null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview)
            }

            function g(e) {
                return v(e.channel)
            }

            function m(e) {
                e.threads.forEach(p)
            }

            function p(e) {
                if (null != e && !(e.id in E)) {
                    var t = _.default.getChannel(e.id);
                    if (null != t) return v(t), !0
                }
                return !1
            }
            var A = function(e) {
                (0, r._)(n, e);
                var t = (0, l._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                var i = n.prototype;
                return i.initialize = function() {
                    this.waitFor(_.default)
                }, i.getMemberCount = function(e) {
                    var t, n;
                    return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null
                }, i.getMemberIdsPreview = function(e) {
                    var t, n;
                    return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null
                }, i.getInitialOverlayState = function() {
                    return E
                }, n
            }(s.default.Store);
            A.displayName = "ThreadMembersStore";
            var S = new A(d.default, {
                CONNECTION_OPEN: function(e) {
                    E = {}, e.guilds.forEach(h)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.threadMembers;
                    E = (0, i._)({}, t)
                },
                GUILD_CREATE: function(e) {
                    h(e.guild)
                },
                GUILD_DELETE: function(e) {
                    var t;
                    t = e.guild.id, E = o().omitBy(E, function(e) {
                        return e.guildId === t
                    })
                },
                CHANNEL_DELETE: function(e) {
                    var t;
                    t = e.channel.id, E = o().omitBy(E, function(e) {
                        return e.parentId === t
                    })
                },
                THREAD_CREATE: g,
                THREAD_UPDATE: g,
                THREAD_LIST_SYNC: function(e) {
                    e.threads.forEach(v)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    var t = E[e.id];
                    if (null == t) return !1;
                    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
                },
                SEARCH_FINISH: function(e) {
                    var t = !1,
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var i, l = e.messages[Symbol.iterator](); !(n = (i = l.next()).done); n = !0) {
                            var u = i.value,
                                o = !0,
                                s = !1,
                                d = void 0;
                            try {
                                for (var c, f = u[Symbol.iterator](); !(o = (c = f.next()).done); o = !0) {
                                    var _ = c.value;
                                    t = p(_.thread) || t
                                }
                            } catch (e) {
                                s = !0, d = e
                            } finally {
                                try {
                                    !o && null != f.return && f.return()
                                } finally {
                                    if (s) throw d
                                }
                            }
                        }
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            !n && null != l.return && l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return e.threads.forEach(function(e) {
                        t = p(e) || t
                    }), t
                },
                LOAD_THREADS_SUCCESS: m,
                LOAD_ARCHIVED_THREADS_SUCCESS: m,
                THREAD_DELETE: function(e) {
                    var t = e.channel;
                    delete E[t.id]
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    var t = !1,
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var i, l = e.messages[Symbol.iterator](); !(n = (i = l.next()).done); n = !0) {
                            var u = i.value;
                            t = p(u.thread) || t
                        }
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            !n && null != l.return && l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return t
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t = e.data,
                        n = !1,
                        a = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var l, u = (0, c.getThreadsFromGuildFeedFetch)(t)[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) {
                            var o = l.value;
                            n = p(o) || n
                        }
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            !a && null != u.return && u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }
            })
        },
        759193: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("21189"),
                l = n("227094"),
                u = n("778455");
            n("330740"), n("996173"), n("47120"), n("357629"), n("633702"), n("266796"), n("462848"), n("568603"), n("128242");
            var o = n("392711"),
                s = n.n(o),
                d = n("661223"),
                c = n("312916"),
                f = n("919759"),
                _ = n("822534"),
                E = n("775822"),
                h = n("403850"),
                v = n("535291"),
                g = n("731865"),
                m = n("162256"),
                p = n("809919"),
                A = n("467006"),
                S = new Set,
                T = {},
                y = {};

            function C(e, t) {
                E.ALL_CHANNEL_TYPES.has(e.type) && M(function(e) {
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

            function M(e, t) {
                var n, a = (null !== (n = y[e.parentId]) && void 0 !== n ? n : 0) + 1;
                y[e.parentId] = a, t(e)
            }

            function I(e) {
                var t;
                null === (t = e.threads) || void 0 === t || t.forEach(L)
            }

            function L(e) {
                C(e, function(t) {
                    null != e.messageCount && (t.count = e.messageCount);
                    var n, a = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
                    null != e.lastMessageId && (null == a ? void 0 : a.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
                })
            }

            function N(e) {
                if (null != e && !(e.id in T)) {
                    var t = g.default.getChannel(e.id);
                    if (null != t) return L(t), !0
                }
                return !1
            }

            function O(e) {
                L(e.channel)
            }

            function R(e) {
                e.threads.forEach(N)
            }
            var D = function(e) {
                (0, r._)(n, e);
                var t = (0, u._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                var i = n.prototype;
                return i.initialize = function() {
                    this.waitFor(g.default, m.default)
                }, i.getCount = function(e) {
                    var t, n;
                    return null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
                }, i.getMostRecentMessage = function(e) {
                    var t, n, a = T[e];
                    return null == a ? null : (null == a.mostRecentMessage && null != a.mostRecentRawMessage && (a.mostRecentMessage = null !== (t = m.default.getMessage(e, a.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, _.createMessageRecord)(a.mostRecentRawMessage), a.mostRecentRawMessage = null), null !== (n = a.mostRecentMessage) && void 0 !== n ? n : null)
                }, i.getChannelThreadsVersion = function(e) {
                    return y[e]
                }, i.getInitialOverlayState = function() {
                    return T
                }, n
            }(d.default.Store);
            D.displayName = "ThreadMessageStore";
            var b = new D(c.default, {
                CONNECTION_OPEN: function(e) {
                    y = {}, S.clear(), e.guilds.forEach(I)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.threadMessages;
                    for (var n in T = (0, i._)({}, t)) {
                        var a = t[n].mostRecentMessage;
                        null != a && (t[n].mostRecentMessage = new h.default((0, l._)((0, i._)({}, a), {
                            author: new v.default(a.author)
                        })))
                    }
                },
                GUILD_CREATE: function(e) {
                    I(e.guild)
                },
                GUILD_DELETE: function(e) {
                    var t;
                    t = e.guild.id, T = s().omitBy(T, function(e) {
                        var n = e.guildId === t;
                        return n && delete y[e.parentId], n
                    })
                },
                THREAD_CREATE: O,
                THREAD_UPDATE: O,
                THREAD_LIST_SYNC: function(e) {
                    var t = e.threads,
                        n = e.mostRecentMessages;
                    t.forEach(L), null == n || n.forEach(function(e) {
                        var t = g.default.getChannel(e.channel_id);
                        null != t && e.type !== A.MessageTypes.THREAD_STARTER_MESSAGE && C(t, function(t) {
                            t.mostRecentRawMessage = e, t.mostRecentMessage = null
                        })
                    })
                },
                LOAD_THREADS_SUCCESS: R,
                LOAD_ARCHIVED_THREADS_SUCCESS: R,
                SEARCH_FINISH: function(e) {
                    var t = e.messages,
                        n = e.threads,
                        a = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var l, u = t[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) {
                            var o = l.value,
                                s = !0,
                                d = !1,
                                c = void 0;
                            try {
                                for (var f, _ = o[Symbol.iterator](); !(s = (f = _.next()).done); s = !0) {
                                    var E = f.value;
                                    N(E.thread)
                                }
                            } catch (e) {
                                d = !0, c = e
                            } finally {
                                try {
                                    !s && null != _.return && _.return()
                                } finally {
                                    if (d) throw c
                                }
                            }
                        }
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            !a && null != u.return && u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    n.forEach(N)
                },
                THREAD_DELETE: function(e) {
                    var t = e.channel;
                    delete T[t.id]
                },
                CHANNEL_DELETE: function(e) {
                    var t;
                    t = e.channel.id, T = s().omitBy(T, function(e) {
                        return e.parentId === t
                    }), delete y[t]
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.message,
                        n = e.optimistic,
                        a = e.isPushNotification,
                        r = e.sendMessageOptions;
                    if (n || a || null != r) return !1;
                    var i = g.default.getChannel(t.channel_id);
                    if (null == i || !E.THREAD_CHANNEL_TYPES.has(i.type) || ! function(e, t) {
                            return !(t.type === A.MessageTypes.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === e.id) && !0
                        }(i, t)) return !1;
                    C(i, function(e) {
                        e.count = Math.min(e.count + 1, p.MAX_THREAD_MESSAGE_COUNT), e.mostRecentRawMessage = t, e.mostRecentMessage = null
                    })
                },
                MESSAGE_UPDATE: function(e) {
                    var t, n = e.message,
                        a = T[n.channel_id],
                        r = null !== (t = null == a ? void 0 : a.mostRecentRawMessage) && void 0 !== t ? t : null == a ? void 0 : a.mostRecentMessage;
                    if (null == a || null == r || r.id !== n.id) return !1;
                    M(a, function(e) {
                        null != e.mostRecentMessage && (e.mostRecentMessage = (0, _.updateMessageRecord)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, _.updateServerMessage)(e.mostRecentRawMessage, n))
                    })
                },
                MESSAGE_DELETE: function(e) {
                    var t = e.id,
                        n = e.channelId,
                        a = T[n];
                    if (null == a) return !1;
                    var r = n !== t,
                        i = !S.has(t);
                    M(a, function(e) {
                        var n, a = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        null != a && a.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = r && i ? Math.max(e.count - 1, 0) : e.count, S.add(t)
                    })
                },
                MESSAGE_DELETE_BULK: function(e) {
                    var t = e.ids,
                        n = e.channelId,
                        a = T[n];
                    if (null == a) return !1;
                    var r = t.filter(function(e) {
                        var t = n !== e,
                            a = !S.has(e);
                        return t && a
                    }).length;
                    r > 0 && M(a, function(e) {
                        var n, a = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        null != a && t.includes(a.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= r, t.forEach(function(e) {
                            return S.add(e)
                        })
                    })
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    var t = !1,
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var i, l = e.messages[Symbol.iterator](); !(n = (i = l.next()).done); n = !0) {
                            var u = i.value;
                            t = N(u.thread) || t
                        }
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            !n && null != l.return && l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
                    var o = g.default.getChannel(e.channelId);
                    if (null == o || !E.THREAD_CHANNEL_TYPES.has(o.type)) return t;
                    C(o, function(t) {
                        if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
                        else {
                            var n, a = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
                            t.count = e.messages.length >= p.MAX_THREAD_MESSAGE_COUNT ? p.MAX_THREAD_MESSAGE_COUNT : t.count, (null == a ? void 0 : a.type) !== A.MessageTypes.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = a, t.mostRecentMessage = null)
                        }
                    })
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t = e.data,
                        n = !1,
                        a = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var l, u = (0, f.getThreadsFromGuildFeedFetch)(t)[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) {
                            var o = l.value;
                            n = N(o) || n
                        }
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            !a && null != u.return && u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }
            })
        },
        644829: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getTimestampString: function() {
                    return m.default
                },
                trackActiveThreadsPopoutOpened: function() {
                    return y
                },
                trackThreadBrowserOpened: function() {
                    return T
                },
                trackThreadBrowserTab: function() {
                    return S
                },
                trackThreadNotificationSettingsUpdated: function() {
                    return C
                },
                useLastMessageTimestamp: function() {
                    return M
                }
            });
            var a = n("21189"),
                r = n("227094"),
                i = n("261047");
            n("789020");
            var l = n("913527"),
                u = n.n(l),
                o = n("661223"),
                s = n("244180"),
                d = n("199063"),
                c = n("417223"),
                f = n("301309"),
                _ = n("328470"),
                E = n("984362"),
                h = n("514363"),
                v = n("84819"),
                g = n("972942"),
                m = n("529754"),
                p = n("809919"),
                A = n("467006");

            function S() {
                (0, s.trackWithMetadata)(A.AnalyticEvents.THREAD_BROWSER_TAB_CHANGED)
            }

            function T() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
                (0, s.trackWithMetadata)(A.AnalyticEvents.OPEN_MODAL, {
                    type: "Thread Browser",
                    location_section: e
                })
            }

            function y() {
                _.default.track(A.AnalyticEvents.OPEN_POPOUT, {
                    type: "Active Threads Popout"
                })
            }

            function C(e, t) {
                var n, l, u = (0, d.collectThreadMetadata)(e);
                if (null != u) {
                    var o = e.getGuildId(),
                        s = e.parent_id,
                        c = (0, h.getCurrentChannelSettings)(o, s),
                        v = function(e) {
                            if ((0, E.hasFlag)(e, p.ThreadMemberFlags.ALL_MESSAGES)) return h.MessageNotificationSettings[A.UserNotificationSettings.ALL_MESSAGES];
                            if ((0, E.hasFlag)(e, p.ThreadMemberFlags.ONLY_MENTIONS)) return h.MessageNotificationSettings[A.UserNotificationSettings.ONLY_MENTIONS];
                            if ((0, E.hasFlag)(e, p.ThreadMemberFlags.NO_MESSAGES)) return h.MessageNotificationSettings[A.UserNotificationSettings.NO_MESSAGES];
                            return h.MessageNotificationSettings[A.UserNotificationSettings.NULL]
                        },
                        m = null !== (n = g.default.flags(e.id)) && void 0 !== n ? n : 0,
                        S = v(m),
                        T = g.default.isMuted(e.id),
                        y = (0, h.muteConfigToTimestamp)(g.default.getMuteConfig(e.id));
                    u.can_send_message;
                    var C = (0, i._)(u, ["can_send_message"]),
                        M = (0, r._)((0, a._)({}, C), {
                            channel_id: e.id,
                            guild_id: o,
                            parent_id: s,
                            channel_type: e.type,
                            has_interacted_with_thread: (m & p.ThreadMemberFlags.HAS_INTERACTED) != 0,
                            parent_is_muted: f.default.isGuildOrCategoryOrChannelMuted(o, s),
                            old_thread_notification_setting: S,
                            new_thread_notification_setting: null != t.flags ? v(t.flags) : S,
                            parent_notification_setting: c.channel_message_notification_settings,
                            old_thread_is_muted: T,
                            new_thread_is_muted: null !== (l = t.muted) && void 0 !== l ? l : T,
                            old_thread_muted_until: y,
                            new_thread_muted_until: null != t.mute_config ? (0, h.muteConfigToTimestamp)(t.mute_config) : y
                        });
                    _.default.track(A.AnalyticEvents.THREAD_NOTIFICATION_SETTINGS_UPDATED, M)
                }
            }
            n("30175");
            var M = function(e) {
                var t, n, a = (0, o.useStateFromStores)([c.default], function() {
                        return c.default.lastMessageId(e.id)
                    }),
                    r = null != a ? v.default.extractTimestamp(a) : null,
                    i = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
                    l = null != i ? u()(i).valueOf() : null;
                return null !== (n = null != r ? r : l) && void 0 !== n ? n : v.default.extractTimestamp(e.id)
            }
        },
        529754: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("913527"),
                r = n.n(a),
                i = n("30175"),
                l = 3600,
                u = 86400,
                o = 2592e3,
                s = 31104e3,
                d = function(e, t, n) {
                    var a, r, i, l, u;
                    return (l = e, null != (u = t) && null != u[l]) ? null !== (r = null !== (a = t[e]) && void 0 !== a ? a : null == n ? void 0 : n[e]) && void 0 !== r ? r : null : null !== (i = null == n ? void 0 : n[e]) && void 0 !== i ? i : null
                },
                c = function(e, t) {
                    var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        a = r()().diff(r()(e), "s"),
                        c = null != t ? t() : void 0,
                        f = {
                            seconds: i.default.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
                            minutes: i.default.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
                            hours: i.default.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
                            days: i.default.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
                            months: i.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
                            years: i.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
                        },
                        _ = function(e, t) {
                            var a = d(e, c, n ? f : void 0);
                            return null == a ? null : "string" == typeof a ? a : a.format({
                                count: t
                            })
                        };
                    if (a < 60) {
                        var E = (null == c ? void 0 : c.seconds) != null ? _("seconds", a) : _("minutes", 1);
                        if (null != E) return E
                    }
                    if (a < l) {
                        var h = _("minutes", Math.floor(a / 60));
                        if (null != h) return h
                    }
                    if (a < u) {
                        var v = _("hours", Math.floor(a / l));
                        if (null != v) return v
                    }
                    if (a < o) {
                        var g = _("days", Math.floor(a / u));
                        if (null != g) return g
                    }
                    if (a < s) {
                        var m = _("months", Math.floor(a / o));
                        if (null != m) return m
                    }
                    if (a >= s && (null == c ? void 0 : c.years) != null) {
                        var p = _("years", Math.floor(a / s));
                        if (null != p) return p
                    }
                    return r()(e).format("LL")
                }
        },
        276982: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("87627"),
                r = n("29713"),
                i = n("21189"),
                l = n("227094"),
                u = n("778455"),
                o = n("661223"),
                s = n("312916"),
                d = n("732665"),
                c = n("929748"),
                f = n("362939"),
                _ = n("162256"),
                E = {},
                h = {},
                v = function(e) {
                    (0, r._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        return (0, a._)(this, n), t.apply(this, arguments)
                    }
                    var i = n.prototype;
                    return i.isEditing = function(e, t) {
                        var n;
                        return (null === (n = E[e]) || void 0 === n ? void 0 : n.messageId) === t
                    }, i.isEditingAny = function(e) {
                        return null != E[e]
                    }, i.getEditingTextValue = function(e) {
                        var t;
                        return null === (t = E[e]) || void 0 === t ? void 0 : t.textValue
                    }, i.getEditingRichValue = function(e) {
                        var t;
                        return null === (t = E[e]) || void 0 === t ? void 0 : t.richValue
                    }, i.getEditingMessageId = function(e) {
                        var t;
                        return null === (t = E[e]) || void 0 === t ? void 0 : t.messageId
                    }, i.getEditingMessage = function(e) {
                        var t = E[e];
                        return null != t && null != t.messageId ? _.default.getMessage(e, t.messageId) : null
                    }, i.getEditActionSource = function(e) {
                        return h[e]
                    }, n
                }(o.default.Store);
            v.displayName = "EditMessageStore";
            var g = new v(s.default, {
                MESSAGE_START_EDIT: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        a = e.content,
                        r = e.source,
                        i = f.UseLegacyChatInput.getSetting(),
                        l = c.default.unparse(a, t);
                    E[t] = {
                        channelId: t,
                        messageId: n,
                        textValue: l,
                        richValue: (0, d.toRichValue)(i ? l : a)
                    }, h[t] = r
                },
                MESSAGE_UPDATE_EDIT: function(e) {
                    var t = e.channelId,
                        n = e.textValue,
                        a = e.richValue,
                        r = E[t];
                    if (null == r) return !1;
                    E[t] = (0, l._)((0, i._)({}, r), {
                        textValue: n,
                        richValue: a
                    })
                },
                MESSAGE_END_EDIT: function(e) {
                    var t = e.channelId;
                    if (null == t || null == E[t]) return !1;
                    delete E[t], delete h[t]
                }
            })
        },
        357446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var a, r = n("87627"),
                i = n("29713"),
                l = n("154005"),
                u = n("778455");
            n("357629");
            var o = n("661223"),
                s = n("312916"),
                d = n("608066"),
                c = n("567927"),
                f = n("262047"),
                _ = n("475232"),
                E = n("731865"),
                h = n("917175"),
                v = n("361733"),
                g = n("327271"),
                m = n("407807"),
                p = n("606929"),
                A = n("232733"),
                S = n("632706"),
                T = n("467006"),
                y = new d.default(function(e, t) {
                    (null != g.default.getGuild(e) || h.default.isUnavailable(e)) && s.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: e,
                        subscriptions: t
                    })
                });

            function C(e, t) {
                y.forEach(function(n) {
                    var r;
                    n !== S.default.getGuildId() && n !== m.default.getGuildId() && n !== (null === (r = E.default.getChannel(A.default.getChannelId())) || void 0 === r ? void 0 : r.getGuildId()) && (null == a || a.guildId !== n) && (y.clearWithoutFlushing(n, e), t && s.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: n,
                        subscriptions: y.get(n)
                    }))
                })
            }

            function M(e, t) {
                return y.subscribeToGuild(e), null != t && _.default.getSection(t) === T.ChannelSections.MEMBERS && I(e, t, d.DEFAULT_RANGES)
            }

            function I(e, t, n) {
                var a = E.default.getChannel(t);
                if (null == a) return !1;
                var r = a.getGuildId();
                return (r !== e && e === T.FAVORITES && y.subscribeToGuild(r), null != a && a.isThread()) ? a.type === T.ChannelTypes.ANNOUNCEMENT_THREAD ? y.subscribeChannel(r, a.parent_id, n) : !!a.isActiveThread() && y.subscribeThreadMemberList(r, t, A.default.getChannelId()) : y.subscribeChannel(r, t, n)
            }

            function L(e) {
                "CONNECTION_OPEN" === e.type && C(!0, !1);
                var t = S.default.getGuildId();
                null != t && M(t, A.default.getChannelId(t)), y.forEach(function(e) {
                    null == g.default.getGuild(e) ? y.clearWithoutFlushing(e, !0) : s.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: e,
                        subscriptions: y.get(e)
                    })
                })
            }

            function N(e) {
                var t = e.guildId,
                    n = e.channelId;
                return !h.default.isUnavailable(t) && M(t, n)
            }

            function O() {
                return M(S.default.getGuildId(), A.default.getChannelId())
            }

            function R() {
                var e = c.default.getSyncingWith();
                if (null == e) null != a && (y.unsubscribeUser(a.guildId, a.userId), a = null);
                else {
                    var t = e.userId;
                    if (null != a && a.userId === t || p.default.isFriend(t)) return !1;
                    var n = v.default.memberOf(t);
                    if (0 === n.length) return !1;
                    var r = (0, l._)(n, 1)[0];
                    a = {
                        guildId: r,
                        userId: t
                    }, y.subscribeUser(r, t)
                }
                return !1
            }
            var D = function(e) {
                (0, i._)(n, e);
                var t = (0, u._)(n);

                function n() {
                    return (0, r._)(this, n), t.apply(this, arguments)
                }
                var a = n.prototype;
                return a.initialize = function() {
                    this.waitFor(E.default, g.default, S.default, A.default, m.default, f.default, _.default), this.syncWith([c.default], R), this.syncWith([_.default], O)
                }, a.getSubscribedThreadIds = function() {
                    return y.getSubscribedThreadIds()
                }, a.isSubscribedToThreads = function(e) {
                    return y.isSubscribedToThreads(e)
                }, a.isSubscribedToAnyGuildChannel = function(e) {
                    var t = y.get(e).channels;
                    return null != t && Object.keys(t).length > 0
                }, n
            }(o.default.Store);
            D.displayName = "GuildSubscriptionsStore";
            var b = new D(s.default, {
                CONNECTION_OPEN: L,
                CONNECTION_RESUMED: L,
                CONNECTION_CLOSED: function() {
                    C(!1, !1)
                },
                IDLE: function(e) {
                    if (!e.idle) return !1;
                    C(!1, !0)
                },
                LOGOUT: function() {
                    y.reset()
                },
                VOICE_CHANNEL_SELECT: N,
                CHANNEL_SELECT: N,
                GUILD_CREATE: function(e) {
                    e.guild.id === S.default.getGuildId() && O()
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    y.clearWithoutFlushing(t.id, !0)
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
                    var t = e.guildId;
                    return e.userIds.forEach(function(e) {
                        e !== f.default.getId() && y.subscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
                    var t = e.guildId;
                    return e.userIds.forEach(function(e) {
                        y.unsubscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
                    return I(e.guildId, e.channelId, e.ranges)
                },
                GUILD_SUBSCRIPTIONS: function(e) {
                    var t = e.guildId;
                    return y.subscribeToGuild(t)
                },
                CHANNEL_PRELOAD: function(e) {
                    return M(e.guildId, e.channelId)
                },
                THREAD_UPDATE: function(e) {
                    var t = e.channel;
                    return t.isArchivedThread() ? y.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && A.default.getChannelId() === t.id && void y.subscribeThreadMemberList(t.guild_id, t.id, A.default.getChannelId())
                },
                THREAD_DELETE: function(e) {
                    var t = e.channel;
                    return y.unsubscribeThreadMemberList(t.guild_id, t.id)
                },
                THREAD_LIST_SYNC: O
            })
        },
        417698: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlowmodeType: function() {
                    return r
                },
                default: function() {
                    return p
                }
            });
            var a, r, i = n("87627"),
                l = n("29713"),
                u = n("778455");
            n("357629"), n("633702"), n("266796"), n("996173"), n("47120");
            var o = n("661223"),
                s = n("767191"),
                d = n("312916"),
                c = n("731865"),
                f = n("197905"),
                _ = n("467006");
            (a = r || (r = {}))[a.SendMessage = 0] = "SendMessage", a[a.CreateThread = 1] = "CreateThread";
            var E = {
                0: {},
                1: {}
            };

            function h(e, t, n) {
                if (function(e, t) {
                        null != E[t][e.id] && (E[t][e.id].timer.stop(), delete E[t][e.id])
                    }(e, t), ! function(e, t) {
                        return 0 === t ? f.default.can(_.Permissions.MANAGE_CHANNELS, e) || f.default.can(_.Permissions.MANAGE_MESSAGES, e) : f.default.can(_.Permissions.MANAGE_THREADS, e)
                    }(e, t)) {
                    if (!(n <= 0)) {
                        var a = n + Date.now();
                        E[t][e.id] = {
                            rateLimitPerUser: e.rateLimitPerUser,
                            cooldownMs: n,
                            cooldownEndTimestamp: a,
                            timer: new s.Timeout
                        }, E[t][e.id].timer.start(1e3, function() {
                            d.default.dispatch({
                                type: "SLOWMODE_SET_COOLDOWN",
                                channelId: e.id,
                                slowmodeType: t,
                                cooldownMs: Math.max(a - Date.now(), 0)
                            })
                        }, !0)
                    }
                }
            }

            function v(e, t) {
                var n = c.default.getChannel(e);
                if (null == n) return !1;
                h(n, t, 0 === n.rateLimitPerUser ? 0 : 1e3 * n.rateLimitPerUser + 100)
            }

            function g(e) {
                var t = e.file,
                    n = c.default.getChannel(t.channelId);
                return null != n && h(n, 0, 0)
            }
            var m = function(e) {
                (0, l._)(n, e);
                var t = (0, u._)(n);

                function n() {
                    return (0, i._)(this, n), t.apply(this, arguments)
                }
                var a = n.prototype;
                return a.initialize = function() {
                    this.waitFor(c.default)
                }, a.getSlowmodeCooldownGuess = function(e, t) {
                    var n = E[null != t ? t : 0][e];
                    return null != n ? n.cooldownMs : 0
                }, n
            }(o.default.Store);
            m.displayName = "SlowmodeStore";
            var p = new m(d.default, {
                SLOWMODE_RESET_COOLDOWN: function(e) {
                    return v(e.channelId, e.slowmodeType)
                },
                SLOWMODE_SET_COOLDOWN: function(e) {
                    var t = e.channelId,
                        n = e.slowmodeType,
                        a = e.cooldownMs,
                        r = c.default.getChannel(t);
                    if (null == r) return !1;
                    h(r, n, 0 === a ? 0 : a + 100)
                },
                UPLOAD_START: function(e) {
                    return v(e.channelId, 0)
                },
                UPLOAD_FAIL: g,
                UPLOAD_CANCEL_REQUEST: g,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels;
                    [0, 1].forEach(function(e) {
                        var n = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var i, l = t[Symbol.iterator](); !(n = (i = l.next()).done); n = !0) {
                                var u, o = i.value,
                                    s = E[e][o.id],
                                    d = o.rateLimitPerUser;
                                if (null != s && s.rateLimitPerUser !== d) {
                                    var c = Math.min(null !== (u = null == s ? void 0 : s.cooldownMs) && void 0 !== u ? u : 0, 1e3 * d);
                                    h(o, e, c)
                                }
                            }
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                !n && null != l.return && l.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                    })
                },
                LOGOUT: function() {
                    [0, 1].forEach(function(e) {
                        Object.keys(E[e]).forEach(function(t) {
                            return E[e][t].timer.stop()
                        }), E[e] = {}
                    })
                }
            })
        },
        658082: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return X
                }
            });
            var a = n("87627"),
                r = n("200344"),
                i = n("29713"),
                l = n("761020"),
                u = n("778455");
            n("462848"), n("357629"), n("230036"), n("978209"), n("814951"), n("330740"), n("996173"), n("47120"), n("363505"), n("69485"), n("849202");
            var o = n("658722"),
                s = n.n(o),
                d = n("392711"),
                c = n.n(d),
                f = n("913527"),
                _ = n.n(f),
                E = n("661223"),
                h = n("312916"),
                v = n("148934"),
                g = n("661444"),
                m = n("703229"),
                p = n("709861"),
                A = n("919866"),
                S = n("599027"),
                T = n("480802"),
                y = n("532858"),
                C = n("521282"),
                M = n("306043"),
                I = n("945253"),
                L = n("831144"),
                N = n("497988"),
                O = n("370275"),
                R = n("585741"),
                D = n("501769"),
                b = n("432056"),
                U = n("859533"),
                P = n("772693"),
                w = n("467006"),
                G = _()().subtract(1, "week"),
                k = [],
                F = "",
                H = !1;

            function x(e, t) {
                return e.application.name.localeCompare(t.application.name, m.default.locale, {
                    sensitivity: "base"
                })
            }
            var V = {
                    [w.GameTableListKeys.NAME]: x,
                    [w.GameTableListKeys.PLATFORM]: function(e, t, n) {
                        var a = e.libraryApplication.getDistributor(),
                            r = t.libraryApplication.getDistributor();
                        return a === r ? (n === w.TableSortDirections.DESCENDING ? -1 : 1) * x(e, t) : null == a ? 1 : null == r ? -1 : a.localeCompare(r)
                    },
                    [w.GameTableListKeys.LAST_PLAYED]: function(e, t) {
                        return e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1
                    },
                    [w.GameTableListKeys.ACTIONS]: null
                },
                B = (0, N.cachedFunction)(function(e) {
                    return e.filter(function(e) {
                        return null != e.libraryApplication && e.shouldShowInLibrary
                    })
                }),
                Y = (0, N.cachedFunction)(function(e) {
                    return e.filter(function(e) {
                        return null != e.libraryApplication && I.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId)
                    })
                }),
                W = (0, N.cachedFunction)(function(e, t) {
                    return e.filter(function(e) {
                        return s()(t.toLowerCase(), e.application.name.toLowerCase())
                    })
                }),
                K = (0, N.cachedFunction)(function(e, t, n, a) {
                    var r = V[t];
                    if (null == r) return e;
                    var i = (0, l._)(e).sort(r);
                    return n === w.TableSortDirections.DESCENDING ? i.reverse() : i
                }),
                q = (0, N.cachedFunction)(function(e) {
                    return e.filter(function(e) {
                        return null != e.libraryApplication && e.libraryApplication.isHidden()
                    })
                });

            function j(e, t) {
                var n = C.default.getCurrentUserStatisticsForApplication(e.id);
                if (null != n) return new Date(n.last_played_at).getTime();
                var a = t[e.id];
                return null != a ? a : 0
            }

            function z() {
                var e = new Set(T.default.getRunningVerifiedApplicationIds()),
                    t = {},
                    n = new Set,
                    a = T.default.getGamesSeen(!1, !1).map(function(e) {
                        var n = A.default.getGameByGameData(e);
                        return null != n ? (t[n.id] = 1e3 * e.lastFocused, n.id) : null
                    }),
                    r = Object.values(S.default.getAllLibraryApplications()).map(function(a) {
                        return function(e, t, n, a, r) {
                            if (!r && t.has(e.id)) return null;
                            var i, l, u = v.default.getApplication(e.id);
                            if (null == u) return null;
                            var o = j(u, n);
                            if (t.add(e.id), !(0, R.isUserEntitledToLibraryApplication)(e) && !I.default.isInstalled(e.id, e.branchId)) return null;
                            return {
                                key: "".concat(e.id, "-").concat(e.branchId),
                                application: u,
                                libraryApplication: e,
                                lastPlayed: o,
                                supportsCloudSync: null != e && I.default.supportsCloudSync(e.id, e.branchId),
                                isNew: (i = e, l = o, null != i && _()(i.createdAt).isAfter(G) && 0 === l),
                                isLaunching: g.default.launchingGames.has(e.id),
                                isRunning: a.has(e.id),
                                isLaunchable: (0, U.isLaunchable)({
                                    LibraryApplicationStore: S.default,
                                    LaunchableGameStore: g.default,
                                    DispatchApplicationStore: I.default,
                                    ConnectedAppsStore: p.default,
                                    applicationId: e.id,
                                    branchId: e.branchId
                                }),
                                isUpdatingFlags: S.default.isUpdatingFlags(e.id, e.branchId),
                                shouldShowInLibrary: (0, R.shouldShowGameInLibrary)(u, e, y.default),
                                defaultAction: (0, P.getDefaultLibraryApplicationAction)(e, I.default, L.default)
                            }
                        }(a, n, t, e, !0)
                    }).filter(O.isNotNullish),
                    i = a.map(function(a) {
                        return function(e, t, n, a) {
                            var r = null != e ? v.default.getApplication(e) : null;
                            if (null == r || null == e || t.has(e)) return null;
                            var i = j(r, n);
                            return t.add(e), {
                                key: e,
                                application: r,
                                lastPlayed: i,
                                supportsCloudSync: !1,
                                isNew: !1,
                                isLaunching: g.default.launchingGames.has(e),
                                isRunning: a.has(e),
                                isLaunchable: (0, U.isLaunchable)({
                                    LibraryApplicationStore: S.default,
                                    LaunchableGameStore: g.default,
                                    DispatchApplicationStore: I.default,
                                    ConnectedAppsStore: p.default,
                                    applicationId: e,
                                    branchId: null
                                }),
                                isUpdatingFlags: !1,
                                shouldShowInLibrary: !1,
                                libraryApplication: null,
                                defaultAction: null
                            }
                        }(a, n, t, e)
                    }).filter(O.isNotNullish),
                    u = (0, l._)(i).concat((0, l._)(r)).sort(function(e, t) {
                        return e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1
                    });
                return H = null != A.default.lastFetched && S.default.fetched, !c().isEqual(u, k) && (k = u, D.isPlatformEmbedded && b.default.setSystemTrayApplications(Y(k).map(function(e) {
                    return e.application
                }).slice(0, 5)), !0)
            }
            var Q = function(e) {
                (0, i._)(n, e);
                var t = (0, u._)(n);

                function n() {
                    return (0, a._)(this, n), t.apply(this, arguments)
                }
                return n.prototype.initialize = function() {
                    this.syncWith([v.default, A.default, g.default, T.default, I.default, L.default, S.default, C.default, y.default, p.default], z, 200), this.syncWith([M.default, m.default], function() {
                        return !0
                    })
                }, (0, r._)(n, [{
                    key: "applicationFilterQuery",
                    get: function() {
                        return F
                    }
                }, {
                    key: "applicationViewItems",
                    get: function() {
                        return k
                    }
                }, {
                    key: "launchableApplicationViewItems",
                    get: function() {
                        return Y(k)
                    }
                }, {
                    key: "libraryApplicationViewItems",
                    get: function() {
                        return B(k)
                    }
                }, {
                    key: "filteredLibraryApplicationViewItems",
                    get: function() {
                        return W(this.libraryApplicationViewItems, F)
                    }
                }, {
                    key: "sortedFilteredLibraryApplicationViewItems",
                    get: function() {
                        return K(this.filteredLibraryApplicationViewItems, M.default.sortKey, M.default.sortDirection, m.default.locale)
                    }
                }, {
                    key: "hiddenLibraryApplicationViewItems",
                    get: function() {
                        return q(k)
                    }
                }, {
                    key: "hasFetchedApplications",
                    get: function() {
                        return H
                    }
                }]), n
            }(E.default.Store);
            Q.displayName = "ApplicationViewStore";
            var X = new Q(h.default, {
                LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
                    F = e.query
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
                r = n("467006");

            function i(e, t, n) {
                var i = t.getState(e.id, e.branchId),
                    l = n.getQueuePosition(e.id, e.branchId),
                    u = n.paused;
                if (null != i) {
                    if (null == l || -1 === l) switch (i.type) {
                        case r.LocalDispatchApplicationStates.INSTALLING:
                            return r.LibraryApplicationActions.INSTALL;
                        case r.LocalDispatchApplicationStates.UPDATING:
                        case r.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                            return r.LibraryApplicationActions.UPDATE
                    }
                    switch (i.type) {
                        case r.LocalDispatchApplicationStates.INSTALLING:
                        case r.LocalDispatchApplicationStates.UPDATING:
                        case r.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                        case r.LocalDispatchApplicationStates.REPAIRING:
                            if (l > 0) return r.LibraryApplicationActions.MOVE_UP;
                            if (u) return r.LibraryApplicationActions.RESUME;
                            return r.LibraryApplicationActions.PAUSE;
                        case r.LocalDispatchApplicationStates.UP_TO_DATE:
                            return r.LibraryApplicationActions.PLAY;
                        case r.LocalDispatchApplicationStates.UNINSTALLING:
                            return null
                    }
                }
                return null != l && l > 0 ? r.LibraryApplicationActions.MOVE_UP : (0, a.isSupportedPlatform)() ? r.LibraryApplicationActions.INSTALL : null
            }
        },
        306043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a, r = n("87627"),
                i = n("200344"),
                l = n("29713"),
                u = n("778455"),
                o = n("392711"),
                s = n.n(o),
                d = n("661223"),
                c = n("986329"),
                f = n("312916"),
                _ = n("467006"),
                E = "GameLibraryViewStore",
                h = _.TableSortDirections.ASCENDING,
                v = _.GameTableListKeys.LAST_PLAYED,
                g = !1,
                m = s().debounce(function() {
                    g = !1, A.emitChange()
                }, 200),
                p = function(e) {
                    (0, l._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        return (0, r._)(this, n), t.apply(this, arguments)
                    }
                    return n.prototype.initialize = function() {
                        var e, t = null !== (e = c.default.get(E)) && void 0 !== e ? e : {};
                        null != t.sortDirection && null != t.sortKey && (h = t.sortDirection, v = t.sortKey)
                    }, (0, i._)(n, [{
                        key: "sortDirection",
                        get: function() {
                            return h
                        }
                    }, {
                        key: "sortKey",
                        get: function() {
                            return v
                        }
                    }, {
                        key: "activeRowKey",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "isNavigatingByKeyboard",
                        get: function() {
                            return g
                        }
                    }]), n
                }(d.default.Store);
            p.displayName = "GameLibraryViewStore";
            var A = new p(f.default, {
                    LIBRARY_TABLE_SORT_UPDATE: function(e) {
                        var t = e.direction,
                            n = e.key;
                        h = t, v = n, c.default.set(E, {
                            sortDirection: h,
                            sortKey: v
                        })
                    },
                    LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
                        var t = e.key;
                        e.isKeyboardEvent && (g = !0, m()), a = t
                    }
                }),
                S = A
        },
        604293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
                    return ei
                },
                default: function() {
                    return ec
                }
            });
            var a, r = n("21189"),
                i = n("227094"),
                l = n("154005"),
                u = n("761020");
            n("917168"), n("301563"), n("357629"), n("474991"), n("398202"), n("932991"), n("293114"), n("723768"), n("462848"), n("653041"), n("230036"), n("814951"), n("849202"), n("363505"), n("568603"), n("128242"), n("733860"), n("757143"), n("633702"), n("266796"), n("996173"), n("47120"), n("817285"), n("191489"), n("978209"), n("330740"), n("69485"), n("723026");
            var o = n("658722"),
                s = n.n(o),
                d = n("392711"),
                c = n.n(d),
                f = n("555083"),
                _ = n("741312"),
                E = n("332391"),
                h = n("841869"),
                v = n("353118"),
                g = n("138795"),
                m = n("209458"),
                p = n("913897"),
                A = n("813287"),
                S = n("8584"),
                T = n("361820"),
                y = n("822232"),
                C = n("786649"),
                M = n("259537"),
                I = n("775822"),
                L = n("535291"),
                N = n("731865"),
                O = n("610043"),
                R = n("361733"),
                D = n("327271"),
                b = n("162256"),
                U = n("197905"),
                P = n("565639"),
                w = n("606929"),
                G = n("232733"),
                k = n("632706"),
                F = n("871831"),
                H = n("474997"),
                x = n("370275"),
                V = n("497160"),
                B = n("694574"),
                Y = n("930771"),
                W = n("702340"),
                K = n("439823"),
                q = n("467006"),
                j = n("221281"),
                z = n("551835"),
                Q = n("30175"),
                X = new h.default("AutocompleteUtils"),
                J = function() {
                    return !0
                },
                Z = /(\t|\s)/,
                $ = [],
                ee = (a = n("969211").default).MENTION_EVERYONE,
                et = a.MENTION_HERE,
                en = a.MENTION_CLYDE,
                ea = a.LAUNCHABLE_APPLICATIONS;

            function er() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return 1e3 * e * (null != t ? t : 1)
            }
            var ei = [O.GUILD_SELECTABLE_CHANNELS_KEY, O.GUILD_VOCAL_CHANNELS_KEY, q.ChannelTypes.GUILD_CATEGORY];

            function el(e, t) {
                var n, a, r = t.exactQuery,
                    i = t.containQuery,
                    l = t.queryLower,
                    u = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                try {
                    ;
                    if (r.test(e)) {
                        if (e.toLocaleLowerCase() === l) return 10;
                        return 7
                    }
                    if (i.test(e)) return 5;
                    if (n = l, a = e, n.split(/(?:,| )+/).every(function(e) {
                            return RegExp(Y.default.escape(e), "i").test(a)
                        })) return 3;
                    if (u && s()(l, e)) return 1
                } catch (e) {
                    X.error(e)
                }
                return 0
            }

            function eu(e) {
                return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
            }

            function eo(e) {
                for (var t = e.query, n = e.members, a = e.limit, r = e.filter, i = e.allowSnowflake, l = F.default.getUsers(), u = k.default.getGuildId(), o = t.toLocaleLowerCase(), d = (0, W.normalize)(o), c = [], _ = [], E = n.length, h = 0, v = 0; h < E;) {
                    var g = n[h],
                        m = void 0,
                        p = void 0;
                    g instanceof L.default ? (p = g, m = null === (T = R.default.getNick(u, p.id)) || void 0 === T ? void 0 : T.toLocaleLowerCase()) : (m = null === (y = g.nick) || void 0 === y ? void 0 : y.toLocaleLowerCase(), p = l[g.userId]);
                    var A = null === (S = K.default.getGlobalName(p)) || void 0 === S ? void 0 : S.toLocaleLowerCase();
                    if (null == r || r(p)) {
                        var S, T, y, C, M, I, N, O, D, b = p.username.toLocaleLowerCase(),
                            U = (0, W.stripDiacritics)(b),
                            P = (0, W.normalize)(U),
                            w = null != m ? (0, W.stripDiacritics)(m) : null,
                            G = null != w ? (0, W.normalize)(w) : null,
                            H = null != A ? (0, W.stripDiacritics)(A) : null,
                            x = null != H ? (0, W.normalize)(H) : null;
                        i && t === p.id || b.substring(0, o.length) === o || U.substring(0, o.length) === o || (null == m ? void 0 : m.substring(0, o.length)) === o || (null == w ? void 0 : w.substring(0, o.length)) === o || (null == A ? void 0 : A.substring(0, o.length)) === o || (null == H ? void 0 : H.substring(0, o.length)) === o ? c.push({
                            type: j.AutocompleterResultTypes.USER,
                            record: p,
                            score: 10,
                            comparator: null !== (C = null != A ? A : m) && void 0 !== C ? C : b,
                            sortable: null !== (M = null != H ? H : w) && void 0 !== M ? M : U
                        }) : P.substring(0, d.length) === d || (null == G ? void 0 : G.substring(0, d.length)) === d || (null == x ? void 0 : x.substring(0, d.length)) === d ? c.push({
                            type: j.AutocompleterResultTypes.USER,
                            record: p,
                            score: 1,
                            comparator: null !== (I = null != A ? A : m) && void 0 !== I ? I : b,
                            sortable: null !== (N = null != H ? H : w) && void 0 !== N ? N : U
                        }) : v < 50 && (s()(o, U) || s()(d, P) || null != w && s()(o, w) || null != G && s()(d, G) || null != H && s()(o, H) || null != x && s()(d, x)) && (_.push({
                            type: j.AutocompleterResultTypes.USER,
                            record: p,
                            score: 1,
                            comparator: null !== (O = null != A ? A : m) && void 0 !== O ? O : b,
                            sortable: null !== (D = null != H ? H : w) && void 0 !== D ? D : U
                        }), v += 1)
                    }
                    h += 1
                }
                return c.sort(f.default), c.length < a && (_.sort(f.default), c = c.concat(_.slice(0, Math.max(0, a - c.length)))), c.length > a && (c.length = a), c
            }

            function es(e, t, n) {
                var a = 0,
                    r = null,
                    i = !0,
                    l = !1,
                    u = void 0;
                try {
                    for (var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
                        var d = o.value,
                            c = el(e, d, n);
                        c > a && (a = c, r = d)
                    }
                } catch (e) {
                    l = !0, u = e
                } finally {
                    try {
                        !i && null != s.return && s.return()
                    } finally {
                        if (l) throw u
                    }
                }
                return null != r && (r.isFullMatch ? t.length = 0 : t.splice(t.indexOf(r), 1)), a
            }

            function ed(e, t) {
                var n = N.default.getChannel(e);
                return null == e || null == n ? [] : c()(b.default.getMessages(e).toArray()).reverse().uniqBy(function(e) {
                    return e.author.id
                }).map(function(e) {
                    return F.default.getUser(e.author.id)
                }).filter(function(e) {
                    if (null == e || e.isNonUserBot() && !e.isClyde()) return !1;
                    var t = n.getGuildId();
                    return null == t || eu(R.default.getMember(t, e.id))
                }).map(function(e) {
                    var t, a = n.getGuildId(),
                        r = null != a ? R.default.getMember(a, e.id) : null;
                    return {
                        type: j.AutocompleterResultTypes.USER,
                        record: e,
                        score: 0,
                        comparator: null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : K.default.getName(e)
                    }
                }).take(t).value()
            }
            var ec = {
                queryFriends(e) {
                    var t = e.query,
                        n = e.limit,
                        a = (e._fuzzy, e.filter);
                    return eo({
                        query: t,
                        members: w.default.getFriendIDs().map(function(e) {
                            return F.default.getUser(e)
                        }).filter(x.isNotNullish),
                        limit: void 0 === n ? 10 : n,
                        filter: a
                    })
                },
                queryDMUsers(e) {
                    var t = e.query,
                        n = e.limit,
                        a = e.filter;
                    return eo({
                        query: t,
                        members: N.default.getDMUserIds().map(function(e) {
                            return F.default.getUser(e)
                        }).filter(x.isNotNullish),
                        limit: void 0 === n ? 10 : n,
                        filter: a
                    })
                },
                queryChannelUsers(e) {
                    var t, n = e.channelId,
                        a = e.query,
                        r = e.limit,
                        i = void 0 === r ? 10 : r,
                        l = e.request,
                        u = e.checkRecentlyTalkedOnEmptyQuery,
                        o = e.allowSnowflake,
                        s = N.default.getChannel(n);
                    if (null == s) return [];
                    var d = s.isThread() ? N.default.getChannel(s.parent_id) : null,
                        c = null != d ? d : s;
                    if (null == c) return [];
                    if (c.isPrivate()) {
                        t = c.recipients.map(function(e) {
                            var t;
                            return {
                                userId: e,
                                nick: null !== (t = w.default.getNickname(e)) && void 0 !== t ? t : null
                            }
                        });
                        var f = F.default.getCurrentUser();
                        null != f && t.push({
                            userId: f.id,
                            nick: null
                        })
                    } else {
                        if (0 === a.length && (void 0 === u || u)) {
                            var _ = ed(s.id, i);
                            if (_.length > 0) return _
                        }
                        t = R.default.getMembers(c.guild_id).filter(eu), (void 0 === l || l) && V.default.requestMembers(c.guild_id, a, i)
                    }
                    return eo({
                        query: a,
                        members: t,
                        limit: i,
                        filter: function(e) {
                            return c.isPrivate() || B.default.can({
                                permission: q.Permissions.VIEW_CHANNEL,
                                user: e,
                                context: c
                            })
                        },
                        allowSnowflake: void 0 !== o && o
                    })
                },
                queryGuildUsers(e) {
                    var t = e.guildId,
                        n = e.query,
                        a = e.limit,
                        r = void 0 === a ? 10 : a,
                        i = e.request,
                        l = e.checkRecentlyTalkedOnEmptyQuery,
                        u = e.filter,
                        o = e.allowSnowflake;
                    if (null == D.default.getGuild(t)) return [];
                    if (0 === n.length && (void 0 === l || l)) {
                        var s = ed(G.default.getChannelId(t), r);
                        if (s.length > 0) return s
                    }
                    var d = R.default.getMembers(t).filter(eu);
                    return (void 0 === i || i) && n.length > 0 && V.default.requestMembers(t, n, r), eo({
                        query: n,
                        members: d,
                        limit: r,
                        filter: u,
                        allowSnowflake: o
                    })
                },
                queryUsers(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
                        a = arguments.length > 4 ? arguments[4] : void 0;
                    return n && e.length > 0 && V.default.requestMembers(null, e, t), eo({
                        query: e,
                        members: c()(F.default.getUsers()).values().value(),
                        limit: t,
                        filter: a
                    })
                },
                queryChannels(e) {
                    var t = e.query,
                        n = e.guildId,
                        a = e.limit,
                        r = void 0 === a ? q.MAX_AUTOCOMPLETE_RESULTS : a,
                        i = e.fuzzy,
                        l = void 0 === i || i,
                        o = e.filter,
                        s = void 0 === o ? J : o,
                        d = e.type,
                        E = void 0 === d ? O.GUILD_SELECTABLE_CHANNELS_KEY : d,
                        h = e.allowEmptyQueries,
                        v = e.requireVocalConnectAccess,
                        g = void 0 === v || v,
                        m = e.boosters,
                        p = void 0 === m ? {} : m,
                        A = e.allowSnowflake,
                        S = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = e.split(" ").filter(function(e) {
                                    return "" !== e || t
                                }).map(function(e) {
                                    var t = e.toLocaleLowerCase();
                                    return {
                                        queryLower: t,
                                        exactQuery: RegExp("^".concat(Y.default.escape(t)), "i"),
                                        containQuery: RegExp(Y.default.escape(t), "i"),
                                        isFullMatch: !1
                                    }
                                });
                            if (e.includes(" ")) {
                                var a = e.toLocaleLowerCase();
                                n.unshift({
                                    queryLower: a,
                                    exactQuery: RegExp("^".concat(Y.default.escape(a).replace(" ", "( |-)")), "i"),
                                    containQuery: RegExp(Y.default.escape(a).replace(" ", "( |-)"), "i"),
                                    isFullMatch: !0
                                })
                            }
                            return n
                        }(t, void 0 !== h && h);
                    b = null != n ? c()(O.default.getChannels(n)[E]).map(function(e) {
                        return e.channel
                    }).concat(C.default.computeAllActiveJoinedThreads(n)).value() : c()(N.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(C.default.computeAllActiveJoinedThreads()).value();
                    var T = {},
                        y = [],
                        M = !0,
                        L = !1,
                        R = void 0;
                    try {
                        for (var b, P, G = b[Symbol.iterator](); !(M = (P = G.next()).done); M = !0) {
                            var k, H, x, V, B, W = P.value;
                            if (k = E, H = W.type, x = null != n, !(k === H || (x || (0, I.isGuildChannelType)(H)) && (k === O.GUILD_SELECTABLE_CHANNELS_KEY ? (0, I.isGuildSelectableChannelType)(H) || (0, I.isGuildVocalChannelType)(H) : k === O.GUILD_VOCAL_CHANNELS_KEY && (0, I.isGuildVocalChannelType)(H))) || (0, I.isGuildChannelType)(W.type) && !U.default.can(g ? W.accessPermissions : q.Permissions.VIEW_CHANNEL, W) || !s(W)) continue;
                            var K = (0, u._)(S),
                                z = W.name.toLocaleLowerCase(),
                                Q = A && t === W.id,
                                X = Q ? 10 : es(z, K, l);
                            if (0 !== X) {
                                if (K.length > 0) {
                                    for (var Z = 0, $ = [function(e, t) {
                                            if (null != e.guild_id) {
                                                var n, a = t[e.guild_id];
                                                return null == a && (a = t[e.guild_id] = null === (n = D.default.getGuild(e.guild_id)) || void 0 === n ? void 0 : n.toString().toLocaleLowerCase()), a
                                            }
                                        }(W, T), function(e, t) {
                                            if (null != e.parent_id) {
                                                var n, a = t[e.parent_id];
                                                return null == a && (a = t[e.parent_id] = null === (n = N.default.getChannel(e.parent_id)) || void 0 === n ? void 0 : n.name.toLocaleLowerCase()), a
                                            }
                                        }(W, T)]; Z < $.length; Z++) {
                                        var ee = $[Z];
                                        if (null != ee && "" !== ee) {
                                            var et = es(ee, K, !1);
                                            0 !== et && (X += .5 * et)
                                        }
                                    }
                                    X = Math.min(9, X)
                                }
                                if (0 !== X && !(K.length > 1) && (1 !== K.length || K[0].isFullMatch || Q)) {
                                    ;
                                    if (V = E, B = W.type, V === O.GUILD_SELECTABLE_CHANNELS_KEY && (0, I.isGuildVocalChannelType)(B)) X = Math.max(X - 1, .5);
                                    y.push({
                                        type: (0, I.isGuildVocalChannelType)(W.type) ? j.AutocompleterResultTypes.VOICE_CHANNEL : j.AutocompleterResultTypes.TEXT_CHANNEL,
                                        record: W,
                                        score: er(X, p[W.id]),
                                        comparator: (0, _.computeChannelName)(W, F.default, w.default),
                                        sortable: z
                                    })
                                }
                            }
                        }
                    } catch (e) {
                        L = !0, R = e
                    } finally {
                        try {
                            !M && null != G.return && G.return()
                        } finally {
                            if (L) throw R
                        }
                    }
                    return y.sort(f.default), null != r && y.length > r && (y.length = r), y
                },
                queryGuilds(e) {
                    var t = e.query,
                        n = e.limit,
                        a = void 0 === n ? 10 : n,
                        r = e.fuzzy,
                        i = void 0 === r || r,
                        l = e.filter,
                        u = void 0 === l ? J : l,
                        o = e.boosters,
                        s = void 0 === o ? {} : o,
                        d = "" === t ? "" : t.toLocaleLowerCase(),
                        _ = {
                            exactQuery: RegExp("^".concat(Y.default.escape(d)), "i"),
                            containQuery: RegExp(Y.default.escape(d), "i"),
                            queryLower: d
                        },
                        E = [],
                        h = c()(D.default.getGuilds()).values().value(),
                        v = !0,
                        g = !1,
                        m = void 0;
                    try {
                        for (var p, A = h[Symbol.iterator](); !(v = (p = A.next()).done); v = !0) {
                            var S = p.value;
                            if (u(S)) {
                                var T = S.name.toLocaleLowerCase(),
                                    y = el(T, _, i);
                                y > 0 && E.push({
                                    type: j.AutocompleterResultTypes.GUILD,
                                    record: S,
                                    score: er(y, s[S.id]),
                                    comparator: S.toString(),
                                    sortable: T
                                })
                            }
                        }
                    } catch (e) {
                        g = !0, m = e
                    } finally {
                        try {
                            !v && null != A.return && A.return()
                        } finally {
                            if (g) throw m
                        }
                    }
                    return E.sort(f.default), E.length > a && (E.length = a), E
                },
                queryGroupDMs(e) {
                    var t = e.query,
                        n = e.limit,
                        a = void 0 === n ? 10 : n,
                        r = e.fuzzy,
                        i = void 0 === r || r,
                        l = e.filter,
                        u = void 0 === l ? J : l,
                        o = e.boosters,
                        s = void 0 === o ? {} : o,
                        d = (0, W.stripDiacritics)((0, W.normalize)(t.toLocaleLowerCase())),
                        E = {
                            exactQuery: RegExp("^".concat(Y.default.escape(d)), "i"),
                            containQuery: RegExp(Y.default.escape(d), "i"),
                            queryLower: d
                        },
                        h = c()(N.default.getMutablePrivateChannels()).values().value(),
                        v = [],
                        g = !0,
                        m = !1,
                        p = void 0;
                    try {
                        for (var A, S = h[Symbol.iterator](); !(g = (A = S.next()).done); g = !0) {
                            var T = A.value;
                            if (T.isMultiUserDM() && u(T)) {
                                var y = (0, _.computeChannelName)(T, F.default, w.default).toLocaleLowerCase(),
                                    C = (0, W.stripDiacritics)(y),
                                    M = el(C, E, i);
                                M > 0 && v.push({
                                    type: j.AutocompleterResultTypes.GROUP_DM,
                                    record: T,
                                    score: er(M, s[T.id]),
                                    comparator: (0, _.computeChannelName)(T, F.default, w.default),
                                    sortable: C
                                })
                            }
                        }
                    } catch (e) {
                        m = !0, p = e
                    } finally {
                        try {
                            !g && null != S.return && S.return()
                        } finally {
                            if (m) throw p
                        }
                    }
                    return v.sort(f.default), v.length > a && (v.length = a), v
                },
                queryApplications(e) {
                    var t = e.query,
                        n = e.limit,
                        a = void 0 === n ? 10 : n,
                        r = e.fuzzy,
                        i = void 0 === r || r,
                        l = e.filter,
                        u = void 0 === l ? J : l,
                        o = t.toLocaleLowerCase(),
                        s = {
                            exactQuery: RegExp("^".concat(Y.default.escape(o)), "i"),
                            containQuery: RegExp(Y.default.escape(o), "i"),
                            queryLower: o
                        },
                        d = ea(),
                        c = [],
                        _ = !0,
                        E = !1,
                        h = void 0;
                    try {
                        for (var v, g = d[Symbol.iterator](); !(_ = (v = g.next()).done); _ = !0) {
                            var m = v.value.application;
                            if (u(m)) {
                                var p = m.name.toLocaleLowerCase(),
                                    A = el(p, s, i);
                                A > 0 && c.push({
                                    type: j.AutocompleterResultTypes.APPLICATION,
                                    record: m,
                                    score: A,
                                    comparator: m.name,
                                    sortable: p
                                })
                            }
                        }
                    } catch (e) {
                        E = !0, h = e
                    } finally {
                        try {
                            !_ && null != g.return && g.return()
                        } finally {
                            if (E) throw h
                        }
                    }
                    return c.sort(f.default), c.length > a && (c.length = a), c
                },
                querySKUs(e) {
                    var t = e.query,
                        n = e.limit,
                        a = void 0 === n ? 10 : n,
                        r = e.fuzzy,
                        i = void 0 === r || r,
                        l = e.filter,
                        u = void 0 === l ? J : l,
                        o = t.toLocaleLowerCase(),
                        s = {
                            exactQuery: RegExp("^".concat(Y.default.escape(o)), "i"),
                            containQuery: RegExp(Y.default.escape(o), "i"),
                            queryLower: o
                        },
                        d = c()(H.default.getSKUs()).values().value(),
                        _ = [],
                        E = !0,
                        h = !1,
                        v = void 0;
                    try {
                        for (var g, m = d[Symbol.iterator](); !(E = (g = m.next()).done); E = !0) {
                            var p = g.value;
                            if (p.type === q.SKUTypes.DURABLE_PRIMARY && u(p)) {
                                var A = p.name.toLocaleLowerCase(),
                                    S = el(A, s, i);
                                S > 0 && _.push({
                                    type: j.AutocompleterResultTypes.SKU,
                                    record: p,
                                    score: S,
                                    comparator: p.name,
                                    sortable: A
                                })
                            }
                        }
                    } catch (e) {
                        h = !0, v = e
                    } finally {
                        try {
                            !E && null != m.return && m.return()
                        } finally {
                            if (h) throw v
                        }
                    }
                    return _.sort(f.default), _.length > a && (_.length = a), _
                },
                getRecentlyTalked: ed,
                queryMentionResults(e) {
                    var t = e.query,
                        n = e.channel,
                        a = e.canMentionEveryone,
                        r = void 0 !== a && a,
                        i = e.canMentionHere,
                        l = e.canMentionUsers,
                        u = e.canMentionRoles,
                        o = void 0 === u || u,
                        d = e.canMentionClyde,
                        f = e.includeAllGuildUsers,
                        _ = e.includeNonMentionableRoles,
                        E = void 0 !== _ && _,
                        h = e.checkRecentlyTalkedOnEmptyQuery,
                        v = void 0 === h || h,
                        g = e.limit,
                        m = void 0 === g ? q.MAX_AUTOCOMPLETE_RESULTS : g,
                        p = e.request,
                        A = e.allowSnowflake,
                        S = void 0 !== A && A,
                        T = void 0 === l || l ? (void 0 !== f && f && null != n.guild_id ? this.queryGuildUsers({
                            guildId: n.guild_id,
                            query: t,
                            limit: m,
                            checkRecentlyTalkedOnEmptyQuery: v,
                            request: p,
                            allowSnowflake: S
                        }) : this.queryChannelUsers({
                            channelId: n.id,
                            query: t,
                            limit: m,
                            checkRecentlyTalkedOnEmptyQuery: v,
                            allowSnowflake: S
                        })).map(function(e) {
                            var t = e.record,
                                a = e.score;
                            return {
                                user: t,
                                score: a,
                                comparator: e.comparator,
                                nick: R.default.getNick(n.guild_id, t.id),
                                status: P.default.getStatus(t.id)
                            }
                        }) : [],
                        y = T.length,
                        C = t.toLowerCase(),
                        M = [];
                    if (y < m && o) {
                        var I = n.getGuildId(),
                            L = D.default.getGuild(I);
                        null != L && (c()(L.roles).filter(function(e) {
                            var t = e.mentionable,
                                n = e.name,
                                a = e.id;
                            return (t || r || E) && (s()(C, n.toLowerCase()) || S && C === a) && a !== I
                        }).take(m - y).forEach(function(e) {
                            M.push(e)
                        }), y += M.length)
                    }
                    var N = [];
                    return !n.isPrivate() && r && o && (y < m && s()(C, ee().test) && (N.push(ee()), y += 1), (void 0 === i || i) && y < m && s()(C, et().test) && N.push(et())), void 0 !== d && d && s()(C, en().test) && N.push(en()), {
                        users: T,
                        globals: N,
                        roles: M
                    }
                },
                queryGuildMentionResults(e) {
                    var t = e.query,
                        n = e.guildId,
                        a = e.canMentionEveryone,
                        l = void 0 !== a && a,
                        u = e.canMentionUsers,
                        o = e.canMentionRoles,
                        d = void 0 === o || o,
                        f = e.canMentionNonMentionableRoles,
                        _ = void 0 !== f && f,
                        E = void 0 === u || u ? this.queryGuildUsers({
                            guildId: n,
                            query: t
                        }).map(function(e) {
                            return (0, i._)((0, r._)({}, e), {
                                status: P.default.getStatus(e.record.id)
                            })
                        }) : [],
                        h = E.length,
                        v = t.toLowerCase(),
                        g = [];
                    if (h < q.MAX_AUTOCOMPLETE_RESULTS && d) {
                        var m = D.default.getGuild(n);
                        null != m && (c()(m.roles).filter(function(e) {
                            var t = e.mentionable,
                                a = e.name,
                                r = e.id;
                            return (t || l || _) && s()(v, a.toLowerCase()) && r !== n
                        }).take(q.MAX_AUTOCOMPLETE_RESULTS - h).forEach(function(e) {
                            g.push(e)
                        }), h += g.length)
                    }
                    var p = [];
                    return l && d && (h < q.MAX_AUTOCOMPLETE_RESULTS && s()(v, ee().test) && (p.push(ee()), h += 1), h < q.MAX_AUTOCOMPLETE_RESULTS && s()(v, et().test) && p.push(et()), p.push(en())), {
                        users: E,
                        globals: p,
                        roles: g
                    }
                },
                queryChoice(e) {
                    var t = e.query,
                        n = e.choices,
                        a = e.limit,
                        r = void 0 === a ? 10 : a,
                        i = e.fuzzy,
                        l = void 0 === i || i,
                        u = t.toLocaleLowerCase(),
                        o = RegExp("^".concat(Y.default.escape(u)), "i"),
                        s = RegExp(Y.default.escape(u), "i"),
                        d = c()(n).map(function(e, t) {
                            var n = el(e.displayName.toLocaleLowerCase(), {
                                exactQuery: o,
                                containQuery: s,
                                queryLower: u
                            }, l);
                            return n > 0 ? {
                                choice: e,
                                score: n,
                                originalIndex: t
                            } : null
                        }).filter(x.isNotNullish).sortBy(function(e) {
                            return -1 * e.score
                        });
                    return null !== r && (d = d.take(r)), d.value()
                },
                queryStaticRouteChannels(e) {
                    var t = e.query,
                        n = e.guild,
                        a = t.toLocaleLowerCase(),
                        r = {
                            exactQuery: RegExp("^".concat(Y.default.escape(a)), "i"),
                            containQuery: RegExp(Y.default.escape(a), "i"),
                            queryLower: a
                        },
                        i = ((0, g.canSeeGuildHome)(n.id) || (0, p.canSeeOnboardingHome)(n.id)) && !n.hasFeature(q.GuildFeatures.HUB),
                        l = n.hasFeature(q.GuildFeatures.COMMUNITY),
                        u = (0, m.isGuildOnboardingAvailable)(n) && n.hasFeature(q.GuildFeatures.COMMUNITY),
                        o = [{
                            id: z.StaticChannelId.SERVER_GUIDE,
                            name: Q.default.Messages.SERVER_GUIDE
                        }, {
                            id: z.StaticChannelId.CHANNEL_BROWSER,
                            name: Q.default.Messages.CHANNEL_BROWSER_TITLE
                        }, {
                            id: z.StaticChannelId.CUSTOMIZE_COMMUNITY,
                            name: Q.default.Messages.CHANNELS_AND_ROLES
                        }],
                        s = [],
                        d = !0,
                        c = !1,
                        f = void 0;
                    try {
                        for (var _, E = o[Symbol.iterator](); !(d = (_ = E.next()).done); d = !0) {
                            var h = _.value;
                            if ((h.id !== z.StaticChannelId.SERVER_GUIDE || i) && (h.id !== z.StaticChannelId.CHANNEL_BROWSER || l) && (h.id !== z.StaticChannelId.CUSTOMIZE_COMMUNITY || u)) {
                                var v = h.name.toLocaleLowerCase();
                                el(v, r, !1) > 0 && s.push(new I.UnknownChannelRecord({
                                    id: h.id,
                                    name: h.name,
                                    type: q.ChannelTypes.UNKNOWN,
                                    guild_id: n.id
                                }))
                            }
                        }
                    } catch (e) {
                        c = !0, f = e
                    } finally {
                        try {
                            !d && null != E.return && E.return()
                        } finally {
                            if (c) throw f
                        }
                    }
                    return s
                },
                queryChannelResults(e) {
                    var t = e.query,
                        n = e.channel,
                        a = e.type,
                        r = void 0 === a ? O.GUILD_SELECTABLE_CHANNELS_KEY : a,
                        i = e.channelTypes;
                    return {
                        channels: this.queryChannels({
                            query: t,
                            guildId: n.getGuildId(),
                            limit: void 0,
                            fuzzy: void 0,
                            filter: function(e) {
                                return null == i || i.includes(e.type)
                            },
                            type: r,
                            allowEmptyQueries: !0
                        }).map(function(e) {
                            return e.record
                        })
                    }
                },
                queryApplicationCommandChannelResults(e) {
                    var t = e.query,
                        n = e.channel,
                        a = e.channelTypes,
                        r = e.limit,
                        i = void 0 === r ? q.MAX_AUTOCOMPLETE_RESULTS : r,
                        l = e.allowSnowflake;
                    if (null == n.guild_id) {
                        var u = [];
                        return (null == a || a.includes(n.type)) && u.push(n), {
                            channels: u
                        }
                    }
                    var o = [],
                        s = !0,
                        d = !1,
                        c = void 0;
                    try {
                        for (var f, _ = ei[Symbol.iterator](); !(s = (f = _.next()).done); s = !0) {
                            var h = f.value;
                            o = o.concat(this.queryChannels({
                                query: t,
                                guildId: n.guild_id,
                                limit: i,
                                fuzzy: !0,
                                filter: function(e) {
                                    return null == a || a.includes(e.type)
                                },
                                type: h,
                                allowEmptyQueries: !0,
                                requireVocalConnectAccess: !1,
                                allowSnowflake: l
                            }))
                        }
                    } catch (e) {
                        d = !0, c = e
                    } finally {
                        try {
                            !s && null != _.return && _.return()
                        } finally {
                            if (d) throw c
                        }
                    }
                    return o = o.filter(function(e) {
                        return "null" !== e.record.id
                    }).sort(E.default), null != i && o.length > i && (o = o.slice(0, i)), {
                        channels: o.map(function(e) {
                            return e.record
                        })
                    }
                },
                queryChoiceResults(e) {
                    var t = e.query,
                        n = e.choices;
                    return {
                        choices: this.queryChoice({
                            query: t,
                            choices: n,
                            limit: null
                        }).map(function(e) {
                            return e.choice
                        })
                    }
                },
                queryEmojiResults(e) {
                    var t = e.query,
                        n = e.channel,
                        a = e.intention,
                        r = e.canViewAndUsePackEmoji,
                        i = e.maxCount,
                        l = void 0 === i ? q.MAX_AUTOCOMPLETE_RESULTS : i,
                        u = e.matchComparator;
                    return M.FrecencyUserSettingsActionCreators.loadIfNecessary(), {
                        emojis: v.default.searchWithoutFetchingLatest({
                            channel: n,
                            query: t,
                            count: l,
                            intention: a,
                            canViewAndUsePackEmoji: r,
                            matchComparator: u
                        })
                    }
                },
                queryStickers(e) {
                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = (0, l._)(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, J], 2),
                        a = n[0],
                        r = n[1],
                        i = T.default.stickerMetadata,
                        u = F.default.getCurrentUser(),
                        o = new Set,
                        s = [];
                    M.FrecencyUserSettingsActionCreators.loadIfNecessary();
                    var d = !0,
                        f = !1,
                        _ = void 0;
                    try {
                        for (var E, h = e[Symbol.iterator](); !(d = (E = h.next()).done); d = !0) ! function() {
                            var e = E.value;
                            if ("" === e) return;
                            var n = e.toLocaleLowerCase(),
                                l = (0, W.stripDiacritics)(n),
                                d = RegExp("^".concat(Y.default.escape(l)), "i"),
                                c = RegExp("".concat(Y.default.escape(l)), "i");
                            i.forEach(function(e, i) {
                                var l = 0,
                                    f = null,
                                    _ = T.default.getStickerById(i);
                                if (null != _ && r(_, (0, A.getStickerSendability)(_, u, a))) {
                                    var E = !0,
                                        h = !1,
                                        v = void 0;
                                    try {
                                        for (var g, m = e[Symbol.iterator](); !(E = (g = m.next()).done); E = !0) {
                                            var p = g.value,
                                                C = p.type,
                                                M = p.value,
                                                I = function(e) {
                                                    switch (e) {
                                                        case y.StickerMetadataTypes.STICKER_NAME:
                                                            return 11;
                                                        case y.StickerMetadataTypes.CORRELATED_EMOJI:
                                                            return 6;
                                                        case y.StickerMetadataTypes.TAG:
                                                            return 1;
                                                        case y.StickerMetadataTypes.GUILD_NAME:
                                                        case y.StickerMetadataTypes.PACK_NAME:
                                                            return 8;
                                                        default:
                                                            return 1
                                                    }
                                                }(C),
                                                L = 0;
                                            t ? M === n ? L = 10 * I : d.test(M) ? L = 7 * I : (C === y.StickerMetadataTypes.GUILD_NAME || C === y.StickerMetadataTypes.PACK_NAME || C === y.StickerMetadataTypes.STICKER_NAME) && c.test(M) && (L = 5 * I) : M === n && (L = 10 * I, f = M), L > l && (l = L, f = M)
                                        }
                                    } catch (e) {
                                        h = !0, v = e
                                    } finally {
                                        try {
                                            !E && null != m.return && m.return()
                                        } finally {
                                            if (h) throw v
                                        }
                                    }
                                    var N = S.default.stickerFrecencyWithoutFetchingLatest.getScore(i);
                                    null != N && (l *= N / 100), l > 0 && null != f && !o.has(_.id) && (o.add(_.id), s.push({
                                        sticker: _,
                                        comparator: f,
                                        score: l
                                    }))
                                }
                            })
                        }()
                    } catch (e) {
                        f = !0, _ = e
                    } finally {
                        try {
                            !d && null != h.return && h.return()
                        } finally {
                            if (f) throw _
                        }
                    }
                    return 0 === (s = c()(s).sortBy(function(e) {
                        return -1 * e.score
                    }).value()).length && (s = $), s
                },
                matchSentinel: (e, t, n) => !Z.test(t) && e === n,
                hasSameRoleAsUsername(e, t) {
                    if (!t.isPomelo()) return !1;
                    var n = D.default.getGuild(e.getGuildId()),
                        a = null !== (u = null == n ? void 0 : n.roles) && void 0 !== u ? u : {},
                        r = !0,
                        i = !1,
                        l = void 0;
                    try {
                        for (var u, o, s = Object.values(a)[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                            var d = o.value.name;
                            if (t.username.startsWith(d.toLowerCase())) return !0
                        }
                    } catch (e) {
                        i = !0, l = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (i) throw l
                        }
                    }
                    return !1
                }
            }
        },
        497160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("653041"), n("357629"), n("814951"), n("849202");
            var a, r = n("392711"),
                i = n.n(r),
                l = n("31775"),
                u = n.n(l),
                o = n("181123"),
                s = n("327271"),
                d = n("871831"),
                c = n("439823"),
                f = n("30175"),
                _ = new(u())({
                    maxAge: 6e4
                });

            function E(e, t, n) {
                null != a && clearTimeout(a), a = setTimeout(function() {
                    var a = [],
                        r = function(e) {
                            a.push(e.id)
                        };
                    if (null == e) i().forEach(s.default.getGuilds(), r);
                    else if (Array.isArray(e)) e.forEach(function(e) {
                        var t = s.default.getGuild(e);
                        null != t && r(t)
                    });
                    else {
                        var l = s.default.getGuild(e);
                        null != l && r(l)
                    }
                    a.length > 0 && o.default.requestMembers(a, t.toLocaleLowerCase(), n)
                }, 200)
            }

            function h(e, t) {
                var n = "".concat(null != e ? e : "", ":").concat(t),
                    a = _.get(n);
                if (null != a) return a;
                _.set(n, !0)
            }
            var v = {
                getGuildNameSuggestion: function(e) {
                    var t = d.default.getCurrentUser(),
                        n = c.getName(t);
                    return null == n || 0 === n.length ? "" : f.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
                    })
                },
                requestMembers(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        a = Array.isArray(e),
                        r = [],
                        i = !1;
                    a ? e.forEach(function(e) {
                        null == h(e, t) && r.push(e)
                    }) : null == h(e, t) && (i = !0), r.length > 0 && a ? E(r, t, n) : i && E(e, t, n)
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
                r = n("30175"),
                i = {
                    MENTION_EVERYONE: function() {
                        return {
                            test: "everyone",
                            text: "@everyone",
                            description: r.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
                        }
                    },
                    MENTION_HERE: function() {
                        return {
                            test: "here",
                            text: "@here",
                            description: r.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
                        }
                    },
                    MENTION_CLYDE: function() {
                        return {
                            test: "clyde",
                            text: "@Clyde",
                            description: r.default.Messages.CLYDE_MENTION_DESCRIPTION
                        }
                    },
                    LAUNCHABLE_APPLICATIONS: function() {
                        return a.default.launchableApplicationViewItems
                    }
                }
        },
        154681: function(e, t, n) {
            "use strict";
            var a, r;
            n.r(t), n.d(t, {
                PollLayoutTypes: function() {
                    return a
                }
            }), (r = a || (a = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.DEFAULT = 1] = "DEFAULT", r[r.IMAGE_ONLY_ANSWERS = 2] = "IMAGE_ONLY_ANSWERS"
        },
        455809: function(e, t, n) {
            "use strict";
            var a, r;
            n.r(t), n.d(t, {
                ThreadSearchTagSetting: function() {
                    return a
                }
            }), n("330740"), n("996173"), n("47120"), n("357629"), (r = a || (a = {})).MATCH_ALL = "match_all", r.MATCH_SOME = "match_some"
        }
    }
]);
//# sourceMappingURL=49326.8cb334032a76c68805db.js.map