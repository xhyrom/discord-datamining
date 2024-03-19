(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81161"], {
        322224: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("872717"),
                d = n("913144"),
                u = n("987317"),
                i = n("393414"),
                a = n("271938"),
                r = n("299039"),
                E = n("271560"),
                c = n("398604"),
                s = n("189443"),
                _ = n("832588"),
                o = n("745049"),
                y = n("49111"),
                v = {
                    startEvent: (e, t) => l.default.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: o.GuildScheduledEventStatus.ACTIVE
                        }
                    }),
                    endEvent: (e, t) => l.default.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: o.GuildScheduledEventStatus.COMPLETED
                        }
                    }),
                    joinVoiceEvent(e, t) {
                        u.default.selectVoiceChannel(t), (0, i.transitionTo)(y.Routes.CHANNEL(e, t))
                    },
                    saveEvent(e, t, n, d) {
                        let u = o.ENTITY_TYPES_REQUIRED_CHANNEL_ID.has(t.entityType) ? t.channelId : null,
                            i = o.ENTITY_TYPES_REQUIRED_ENTITY_METADATA.has(t.entityType) ? t.entityMetadata : null,
                            a = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
                            r = {
                                name: t.name,
                                description: t.description,
                                image: a,
                                privacy_level: t.privacyLevel,
                                scheduled_start_time: t.scheduledStartTime,
                                scheduled_end_time: t.scheduledEndTime,
                                entity_type: t.entityType,
                                channel_id: u,
                                entity_metadata: i,
                                broadcast_to_directory_channels: d.broadcastToDirectoryChannels,
                                recurrence_rule: (0, s.recurrenceRuleToServer)(t.recurrenceRule)
                            };
                        return l.default.patch({
                            url: y.Endpoints.GUILD_EVENT(n, e),
                            body: r
                        })
                    },
                    createGuildEvent(e, t, n) {
                        let d = {
                            name: e.name,
                            description: e.description,
                            image: e.image,
                            privacy_level: e.privacyLevel,
                            scheduled_start_time: e.scheduledStartTime,
                            scheduled_end_time: e.scheduledEndTime,
                            entity_type: e.entityType,
                            channel_id: e.channelId,
                            entity_metadata: e.entityMetadata,
                            broadcast_to_directory_channels: n.broadcastToDirectoryChannels,
                            recurrence_rule: (0, s.recurrenceRuleToServer)(e.recurrenceRule)
                        };
                        return l.default.post({
                            url: y.Endpoints.GUILD_EVENTS_FOR_GUILD(t),
                            body: d
                        })
                    },
                    async fetchGuildEvent(e, t) {
                        let {
                            body: n
                        } = await (0, E.httpGetWithCountryCodeQuery)(y.Endpoints.GUILD_EVENT(e, t));
                        return d.default.dispatch({
                            type: "FETCH_GUILD_EVENT",
                            guildScheduledEvent: n
                        }), n
                    },
                    async fetchGuildEventsForGuild(e) {
                        let t = {
                                url: y.Endpoints.GUILD_EVENTS_FOR_GUILD(e)
                            },
                            {
                                body: n
                            } = await (0, E.httpGetWithCountryCodeQuery)(t);
                        return d.default.dispatch({
                            type: "FETCH_GUILD_EVENTS_FOR_GUILD",
                            guildId: e,
                            guildScheduledEvents: n
                        }), n
                    },
                    async fetchGuildEventUserCounts(e, t, n) {
                        let u = {
                                url: y.Endpoints.GUILD_EVENT_USER_COUNTS(e, t),
                                query: {
                                    guild_scheduled_event_exception_ids: n
                                }
                            },
                            {
                                body: {
                                    guild_scheduled_event_count: i,
                                    guild_scheduled_event_exception_counts: a
                                }
                            } = await l.default.get(u),
                            r = {
                                eventCount: i,
                                recurrenceCounts: a
                            };
                        return d.default.dispatch({
                            type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
                            guildId: e,
                            eventId: t,
                            counts: r
                        }), r
                    },
                    cancelGuildEvent: (e, t) => l.default.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: o.GuildScheduledEventStatus.CANCELED
                        }
                    }),
                    deleteGuildEvent: (e, t) => l.default.delete({
                        url: y.Endpoints.GUILD_EVENT(t, e)
                    }),
                    async getGuildEventsForCurrentUser(e) {
                        let {
                            body: t
                        } = await l.default.get({
                            url: y.Endpoints.USER_GUILD_EVENTS,
                            query: {
                                guild_ids: [e]
                            }
                        });
                        d.default.dispatch({
                            type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",
                            guildScheduledEventUsers: t,
                            guildId: e
                        })
                    },
                    async createRsvpForGuildEvent(e, t, n, u) {
                        let i = a.default.getId();
                        try {
                            return d.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                userId: i,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: u
                            }), await l.default.put({
                                url: y.Endpoints.USER_GUILD_EVENT(n, e, t),
                                body: {
                                    response: u
                                }
                            })
                        } catch (l) {
                            throw d.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                userId: i,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: u
                            }), l
                        }
                    },
                    async deleteRsvpForGuildEvent(e, t, n) {
                        let u = a.default.getId(),
                            i = c.default.getRsvp(e, t, u);
                        if (null != i) try {
                            return d.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                userId: u,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: i.response
                            }), await l.default.delete({
                                url: y.Endpoints.USER_GUILD_EVENT(n, e, t)
                            })
                        } catch (l) {
                            throw d.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                userId: u,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: i.response
                            }), l
                        }
                    },
                    async updateRsvp(e, t, n, l, d) {
                        let u = (0, _.getExistingRsvp)(e, t);
                        if (null != u) try {
                            await this.deleteRsvpForGuildEvent(e, t, n), null == d || d()
                        } catch (e) {
                            null == d || d(e)
                        } else try {
                            await this.createRsvpForGuildEvent(e, t, n, l), null == d || d()
                        } catch (e) {
                            null == d || d(e)
                        }
                    },
                    async fetchUsersForGuildEvent(e, t, n) {
                        let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.MAX_RSVP_USER_DISPLAY_COUNT;
                        if (null == e || null == n) return [];
                        let i = await l.default.get({
                            url: y.Endpoints.GUILD_EVENT_USERS(n, e, t),
                            query: {
                                limit: u,
                                with_member: !0,
                                upgrade_response_type: !0
                            }
                        });
                        return d.default.dispatch({
                            type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                            guildEventId: e,
                            guildScheduledEventUsers: i.body,
                            guildId: n,
                            guildEventExceptionId: t
                        }), i.body.users
                    },
                    createGuildEventException(e, t, n) {
                        let {
                            original_scheduled_start_time: d,
                            scheduled_start_time: u,
                            scheduled_end_time: i,
                            is_canceled: a
                        } = e;
                        return l.default.post({
                            url: y.Endpoints.GUILD_EVENT_EXCEPTIONS(t, n),
                            body: {
                                original_scheduled_start_time: d,
                                scheduled_start_time: u,
                                scheduled_end_time: i,
                                is_canceled: a
                            }
                        })
                    },
                    updateGuildEventException(e, t, n, d) {
                        let {
                            scheduled_start_time: u,
                            scheduled_end_time: i,
                            is_canceled: a
                        } = e;
                        return l.default.patch({
                            url: y.Endpoints.GUILD_EVENT_EXCEPTION(t, n, d),
                            body: {
                                scheduled_start_time: u,
                                scheduled_end_time: i,
                                is_canceled: a
                            }
                        })
                    },
                    deleteGuildEventException: (e, t, n) => l.default.delete({
                        url: y.Endpoints.GUILD_EVENT_EXCEPTION(e, t, n)
                    }),
                    deleteRecurrence(e, t, n, l) {
                        if (null != l) this.updateGuildEventException({
                            scheduled_start_time: l.scheduled_start_time,
                            scheduled_end_time: l.scheduled_end_time,
                            is_canceled: !0
                        }, e, t, n);
                        else {
                            let l = r.default.extractTimestamp(n);
                            this.createGuildEventException({
                                original_scheduled_start_time: new Date(l).toISOString(),
                                is_canceled: !0
                            }, e, t)
                        }
                    }
                }
        },
        189443: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isEditingEvent: function() {
                    return E
                },
                recurrenceRuleToServer: function() {
                    return c
                },
                recurrenceRuleFromServer: function() {
                    return s
                },
                convertToFakeGuildEvent: function() {
                    return _
                },
                getInitialGuildEventData: function() {
                    return o
                }
            });
            var l, d, u = n("271938"),
                i = n("841363"),
                a = n("822516"),
                r = n("745049");

            function E(e) {
                return !!(null == e ? void 0 : e.id)
            }

            function c(e) {
                var t, n;
                return null == e ? null : {
                    start: e.start,
                    end: e.end,
                    frequency: e.frequency,
                    interval: e.interval,
                    by_weekday: e.byWeekday,
                    by_n_weekday: e.byNWeekday,
                    by_month: e.byMonth,
                    by_month_day: (null !== (n = null === (t = e.byMonthDay) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0 ? e.byMonthDay : null,
                    by_year_day: e.byYearDay,
                    count: e.count
                }
            }

            function s(e) {
                return null == e ? null : {
                    start: new Date(e.start).toISOString(),
                    end: null != e.end ? new Date(e.end).toISOString() : null,
                    frequency: e.frequency,
                    interval: e.interval,
                    byWeekday: e.by_weekday,
                    byNWeekday: e.by_n_weekday,
                    byMonth: e.by_month,
                    byMonthDay: e.by_month_day,
                    byYearDay: e.by_year_day,
                    count: e.count
                }
            }(l = d || (d = {})).CHANNEL_SELECTOR = "ChannelSelector", l.DETAILS = "Details", l.PREVIEW = "Preview";

            function _(e, t, n) {
                let {
                    name: l,
                    description: d,
                    privacyLevel: i,
                    channelId: a,
                    scheduledStartTime: E,
                    scheduledEndTime: s,
                    entityType: _,
                    entityMetadata: o,
                    image: y,
                    recurrenceRule: v,
                    eventExceptions: p
                } = e;
                return {
                    id: null != n ? n : r.FAKE_EVENT_ID,
                    name: l,
                    description: null != d ? d : null,
                    privacy_level: i,
                    scheduled_start_time: E,
                    scheduled_end_time: s,
                    entity_type: _,
                    entity_metadata: null != o ? o : null,
                    image: null != y ? y : void 0,
                    channel_id: a,
                    guild_id: t,
                    creator_id: u.default.getId(),
                    status: r.GuildScheduledEventStatus.SCHEDULED,
                    recurrence_rule: c(v),
                    guild_scheduled_event_exceptions: p.map(e => ({
                        event_exception_id: e.eventExceptionId,
                        event_id: e.eventId,
                        guild_id: e.guildId,
                        scheduled_start_time: e.scheduledStartTime,
                        scheduled_end_time: e.scheduledEndTime,
                        is_canceled: e.isCanceled
                    }))
                }
            }

            function o(e, t) {
                var n, l, d, u, E, c, _, o;
                let y = {
                    name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : "",
                    privacyLevel: null !== (l = null == e ? void 0 : e.privacy_level) && void 0 !== l ? l : r.GuildScheduledEventPrivacyLevel.GUILD_ONLY,
                    description: null !== (d = null == e ? void 0 : e.description) && void 0 !== d ? d : "",
                    scheduledStartTime: null !== (u = null == e ? void 0 : e.scheduled_start_time) && void 0 !== u ? u : (0, a.getInitialEventStartDate)().toISOString(),
                    entityType: null !== (E = null == e ? void 0 : e.entity_type) && void 0 !== E ? E : r.GuildScheduledEventEntityTypes.NONE,
                    entityMetadata: null !== (c = null == e ? void 0 : e.entity_metadata) && void 0 !== c ? c : void 0,
                    channelId: null == e ? void 0 : e.channel_id,
                    creatorId: null == e ? void 0 : e.creator_id,
                    image: null == e ? void 0 : e.image,
                    scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
                    recurrenceRule: s(null == e ? void 0 : e.recurrence_rule),
                    eventExceptions: (null !== (_ = null == e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== _ ? _ : []).map(e => ({
                        eventExceptionId: e.event_exception_id,
                        eventId: e.event_id,
                        guildId: e.guild_id,
                        scheduledStartTime: e.scheduled_start_time,
                        scheduledEndTime: e.scheduled_end_time,
                        isCanceled: e.is_canceled
                    }))
                };
                if (null != (o = e) && "id" in o && (null == e ? void 0 : e.entity_type) === r.GuildScheduledEventEntityTypes.EXTERNAL) {
                    let t = (0, i.getLocationFromEvent)(e);
                    null != t && (y.entityMetadata = {
                        location: t
                    })
                } else null == y.channelId && null != t && (y.channelId = t.id, t.isGuildStageVoice() ? y.entityType = r.GuildScheduledEventEntityTypes.STAGE_INSTANCE : t.isGuildVoice() && (y.entityType = r.GuildScheduledEventEntityTypes.VOICE));
                return y
            }
        },
        841363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelFromEvent: function() {
                    return u
                },
                getLocationFromEvent: function() {
                    return a
                },
                getLocationFromEventData: function() {
                    return r
                },
                getChannelTypeFromEntity: function() {
                    return E
                }
            });
            var l = n("42203"),
                d = n("745049");

            function u(e) {
                let t;
                let {
                    entity_type: n,
                    channel_id: u
                } = e;
                if (n in d.EntityChannelTypes && null != u) {
                    var i;
                    t = null !== (i = l.default.getChannel(e.channel_id)) && void 0 !== i ? i : void 0
                }
                return t
            }

            function i(e, t) {
                let n = null;
                return e === d.GuildScheduledEventEntityTypes.EXTERNAL && null != t && "location" in t && (n = t.location), n
            }

            function a(e) {
                let {
                    entity_type: t,
                    entity_metadata: n
                } = e;
                return i(t, n)
            }

            function r(e) {
                let {
                    entityType: t,
                    entityMetadata: n
                } = e;
                return i(t, n)
            }

            function E(e) {
                return e === d.GuildScheduledEventEntityTypes.VOICE || e === d.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? d.EntityChannelTypes[e] : void 0
            }
        },
        832588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getExistingRsvp: function() {
                    return _
                },
                ResponseOptions: function() {
                    return d
                },
                getResponseOptions: function() {
                    return o
                },
                handleRsvp: function() {
                    return y
                }
            });
            var l, d, u = n("271938"),
                i = n("398604"),
                a = n("397680"),
                r = n("466148"),
                E = n("822516"),
                c = n("745049"),
                s = n("782340");

            function _(e, t) {
                let n = u.default.getId();
                return i.default.getRsvp(e, t, n)
            }

            function o() {
                return [{
                    name: s.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                    value: 0
                }, {
                    name: s.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                    value: 1
                }]
            }

            function y(e) {
                let {
                    eventId: t,
                    recurrenceId: n,
                    guildId: l,
                    updateRsvp: d,
                    openRsvpPicker: u,
                    onRsvp: s,
                    canRsvpToRecurrences: o = !0
                } = e, y = i.default.getGuildScheduledEvent(t);
                if (null == y) return;
                let v = (0, a.getEventException)(n, t),
                    {
                        startTime: p
                    } = (0, r.getEventSchedule)(y, n),
                    h = (null == y ? void 0 : y.scheduled_start_time) != null ? (0, E.getRecurrenceStatus)(v, p, new Date(null == y ? void 0 : y.scheduled_start_time)) : null,
                    S = null != h && c.GuildScheduledEventStatusDone.has(h),
                    T = o && !S ? null != n ? n : (0, E.getNextRecurrenceIdInEvent)(y) : null,
                    D = _(y.id),
                    I = _(y.id, T);
                null == T ? (d(t, null, l, null != D ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED), null == s || s()) : null != I ? (d(t, T, l, null != D ? c.GuildScheduledEventUserResponses.INTERESTED : c.GuildScheduledEventUserResponses.UNINTERESTED), null == s || s()) : u(y, T)
            }(l = d || (d = {}))[l.SERIES = 0] = "SERIES", l[l.RECURRENCE = 1] = "RECURRENCE"
        }
    }
]);
//# sourceMappingURL=81161.a695abc84b9d2c02e903.js.map