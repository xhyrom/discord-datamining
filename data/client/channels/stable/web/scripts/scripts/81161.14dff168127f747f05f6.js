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
                i = n("987317"),
                u = n("393414"),
                r = n("271938"),
                a = n("299039"),
                E = n("271560"),
                c = n("398604"),
                s = n("189443"),
                _ = n("832588"),
                o = n("745049"),
                y = n("49111"),
                v = {
                    startEvent: (e, t) => l.HTTP.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: o.GuildScheduledEventStatus.ACTIVE
                        }
                    }),
                    endEvent: (e, t) => l.HTTP.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: o.GuildScheduledEventStatus.COMPLETED
                        }
                    }),
                    joinVoiceEvent(e, t) {
                        i.default.selectVoiceChannel(t), (0, u.transitionTo)(y.Routes.CHANNEL(e, t))
                    },
                    saveEvent(e, t, n, d) {
                        let i = o.ENTITY_TYPES_REQUIRED_CHANNEL_ID.has(t.entityType) ? t.channelId : null,
                            u = o.ENTITY_TYPES_REQUIRED_ENTITY_METADATA.has(t.entityType) ? t.entityMetadata : null,
                            r = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
                            a = {
                                name: t.name,
                                description: t.description,
                                image: r,
                                privacy_level: t.privacyLevel,
                                scheduled_start_time: t.scheduledStartTime,
                                scheduled_end_time: t.scheduledEndTime,
                                entity_type: t.entityType,
                                channel_id: i,
                                entity_metadata: u,
                                broadcast_to_directory_channels: d.broadcastToDirectoryChannels,
                                recurrence_rule: (0, s.recurrenceRuleToServer)(t.recurrenceRule)
                            };
                        return l.HTTP.patch({
                            url: y.Endpoints.GUILD_EVENT(n, e),
                            body: a
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
                        return l.HTTP.post({
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
                        let i = {
                                url: y.Endpoints.GUILD_EVENT_USER_COUNTS(e, t),
                                query: {
                                    guild_scheduled_event_exception_ids: n
                                }
                            },
                            {
                                body: {
                                    guild_scheduled_event_count: u,
                                    guild_scheduled_event_exception_counts: r
                                }
                            } = await l.HTTP.get(i),
                            a = {
                                eventCount: u,
                                recurrenceCounts: r
                            };
                        return d.default.dispatch({
                            type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
                            guildId: e,
                            eventId: t,
                            counts: a
                        }), a
                    },
                    cancelGuildEvent: (e, t) => l.HTTP.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: o.GuildScheduledEventStatus.CANCELED
                        }
                    }),
                    deleteGuildEvent: (e, t) => l.HTTP.del({
                        url: y.Endpoints.GUILD_EVENT(t, e)
                    }),
                    async getGuildEventsForCurrentUser(e) {
                        let {
                            body: t
                        } = await l.HTTP.get({
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
                    async createRsvpForGuildEvent(e, t, n, i) {
                        let u = r.default.getId();
                        try {
                            return d.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                userId: u,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: i
                            }), await l.HTTP.put({
                                url: y.Endpoints.USER_GUILD_EVENT(n, e, t),
                                body: {
                                    response: i
                                }
                            })
                        } catch (l) {
                            throw d.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                userId: u,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: i
                            }), l
                        }
                    },
                    async deleteRsvpForGuildEvent(e, t, n) {
                        let i = r.default.getId(),
                            u = c.default.getRsvp(e, t, i);
                        if (null != u) try {
                            return d.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                userId: i,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: u.response
                            }), await l.HTTP.del({
                                url: y.Endpoints.USER_GUILD_EVENT(n, e, t)
                            })
                        } catch (l) {
                            throw d.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                userId: i,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: u.response
                            }), l
                        }
                    },
                    async updateRsvp(e, t, n, l, d) {
                        let i = (0, _.getExistingRsvp)(e, t);
                        if (null != i) try {
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
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.MAX_RSVP_USER_DISPLAY_COUNT;
                        if (null == e || null == n) return [];
                        let u = await l.HTTP.get({
                            url: y.Endpoints.GUILD_EVENT_USERS(n, e, t),
                            query: {
                                limit: i,
                                with_member: !0,
                                upgrade_response_type: !0
                            }
                        });
                        return d.default.dispatch({
                            type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                            guildEventId: e,
                            guildScheduledEventUsers: u.body,
                            guildId: n,
                            guildEventExceptionId: t
                        }), u.body.users
                    },
                    createGuildEventException(e, t, n) {
                        let {
                            original_scheduled_start_time: d,
                            scheduled_start_time: i,
                            scheduled_end_time: u,
                            is_canceled: r
                        } = e;
                        return l.HTTP.post({
                            url: y.Endpoints.GUILD_EVENT_EXCEPTIONS(t, n),
                            body: {
                                original_scheduled_start_time: d,
                                scheduled_start_time: i,
                                scheduled_end_time: u,
                                is_canceled: r
                            }
                        })
                    },
                    updateGuildEventException(e, t, n, d) {
                        let {
                            scheduled_start_time: i,
                            scheduled_end_time: u,
                            is_canceled: r
                        } = e;
                        return l.HTTP.patch({
                            url: y.Endpoints.GUILD_EVENT_EXCEPTION(t, n, d),
                            body: {
                                scheduled_start_time: i,
                                scheduled_end_time: u,
                                is_canceled: r
                            }
                        })
                    },
                    deleteGuildEventException: (e, t, n) => l.HTTP.del({
                        url: y.Endpoints.GUILD_EVENT_EXCEPTION(e, t, n)
                    }),
                    deleteRecurrence(e, t, n, l) {
                        if (null != l) this.updateGuildEventException({
                            scheduled_start_time: l.scheduled_start_time,
                            scheduled_end_time: l.scheduled_end_time,
                            is_canceled: !0
                        }, e, t, n);
                        else {
                            let l = a.default.extractTimestamp(n);
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
            var l, d, i = n("271938"),
                u = n("841363"),
                r = n("822516"),
                a = n("745049");

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
                    privacyLevel: u,
                    channelId: r,
                    scheduledStartTime: E,
                    scheduledEndTime: s,
                    entityType: _,
                    entityMetadata: o,
                    image: y,
                    recurrenceRule: v,
                    eventExceptions: p
                } = e;
                return {
                    id: null != n ? n : a.FAKE_EVENT_ID,
                    name: l,
                    description: null != d ? d : null,
                    privacy_level: u,
                    scheduled_start_time: E,
                    scheduled_end_time: s,
                    entity_type: _,
                    entity_metadata: null != o ? o : null,
                    image: null != y ? y : void 0,
                    channel_id: r,
                    guild_id: t,
                    creator_id: i.default.getId(),
                    status: a.GuildScheduledEventStatus.SCHEDULED,
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
                var n, l, d, i, E, c, _, o;
                let y = {
                    name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : "",
                    privacyLevel: null !== (l = null == e ? void 0 : e.privacy_level) && void 0 !== l ? l : a.GuildScheduledEventPrivacyLevel.GUILD_ONLY,
                    description: null !== (d = null == e ? void 0 : e.description) && void 0 !== d ? d : "",
                    scheduledStartTime: null !== (i = null == e ? void 0 : e.scheduled_start_time) && void 0 !== i ? i : (0, r.getInitialEventStartDate)().toISOString(),
                    entityType: null !== (E = null == e ? void 0 : e.entity_type) && void 0 !== E ? E : a.GuildScheduledEventEntityTypes.NONE,
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
                if (null != (o = e) && "id" in o && (null == e ? void 0 : e.entity_type) === a.GuildScheduledEventEntityTypes.EXTERNAL) {
                    let t = (0, u.getLocationFromEvent)(e);
                    null != t && (y.entityMetadata = {
                        location: t
                    })
                } else null == y.channelId && null != t && (y.channelId = t.id, t.isGuildStageVoice() ? y.entityType = a.GuildScheduledEventEntityTypes.STAGE_INSTANCE : t.isGuildVoice() && (y.entityType = a.GuildScheduledEventEntityTypes.VOICE));
                return y
            }
        },
        841363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelFromEvent: function() {
                    return i
                },
                getLocationFromEvent: function() {
                    return r
                },
                getLocationFromEventData: function() {
                    return a
                },
                getChannelTypeFromEntity: function() {
                    return E
                }
            });
            var l = n("42203"),
                d = n("745049");

            function i(e) {
                let t;
                let {
                    entity_type: n,
                    channel_id: i
                } = e;
                if (n in d.EntityChannelTypes && null != i) {
                    var u;
                    t = null !== (u = l.default.getChannel(e.channel_id)) && void 0 !== u ? u : void 0
                }
                return t
            }

            function u(e, t) {
                let n = null;
                return e === d.GuildScheduledEventEntityTypes.EXTERNAL && null != t && "location" in t && (n = t.location), n
            }

            function r(e) {
                let {
                    entity_type: t,
                    entity_metadata: n
                } = e;
                return u(t, n)
            }

            function a(e) {
                let {
                    entityType: t,
                    entityMetadata: n
                } = e;
                return u(t, n)
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
            var l, d, i = n("271938"),
                u = n("398604"),
                r = n("397680"),
                a = n("466148"),
                E = n("822516"),
                c = n("745049"),
                s = n("782340");

            function _(e, t) {
                let n = i.default.getId();
                return u.default.getRsvp(e, t, n)
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
                    openRsvpPicker: i,
                    onRsvp: s,
                    canRsvpToRecurrences: o = !0
                } = e, y = u.default.getGuildScheduledEvent(t);
                if (null == y) return;
                let v = (0, r.getEventException)(n, t),
                    {
                        startTime: p
                    } = (0, a.getEventSchedule)(y, n),
                    h = (null == y ? void 0 : y.scheduled_start_time) != null ? (0, E.getRecurrenceStatus)(v, p, new Date(null == y ? void 0 : y.scheduled_start_time)) : null,
                    T = null != h && c.GuildScheduledEventStatusDone.has(h),
                    S = o && !T ? null != n ? n : (0, E.getNextRecurrenceIdInEvent)(y) : null,
                    D = _(y.id),
                    I = _(y.id, S);
                null == S ? (d(t, null, l, null != D ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED), null == s || s()) : null != I ? (d(t, S, l, null != D ? c.GuildScheduledEventUserResponses.INTERESTED : c.GuildScheduledEventUserResponses.UNINTERESTED), null == s || s()) : i(y, S)
            }(l = d || (d = {}))[l.SERIES = 0] = "SERIES", l[l.RECURRENCE = 1] = "RECURRENCE"
        }
    }
]);
//# sourceMappingURL=81161.14dff168127f747f05f6.js.map