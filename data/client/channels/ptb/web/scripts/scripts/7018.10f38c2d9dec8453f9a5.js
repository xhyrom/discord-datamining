(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["7018"], {
        258941: function(e, t, n) {
            "use strict";
            var u, r;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return u
                }
            }), (r = u || (u = {}))[r.NONE = 0] = "NONE", r[r.WEEKLY = 1] = "WEEKLY", r[r.MONTHLY = 2] = "MONTHLY", r[r.YEARLY = 3] = "YEARLY", r[r.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY", r[r.BIWEEKLY = 5] = "BIWEEKLY"
        },
        668030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var u = n("356056"),
                r = n("324415");
            n("723768"), n("301563"), n("633702"), n("266796"), n("653041");
            var l = n("454836"),
                i = n("312916"),
                d = n("820228"),
                a = n("521588"),
                c = n("262047"),
                o = n("413775"),
                s = n("62470"),
                E = n("546214"),
                _ = n("578962"),
                y = n("467006"),
                v = {
                    startEvent: (e, t) => l.default.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: _.GuildScheduledEventStatus.ACTIVE
                        }
                    }),
                    endEvent: (e, t) => l.default.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: _.GuildScheduledEventStatus.COMPLETED
                        }
                    }),
                    joinVoiceEvent(e, t) {
                        d.default.selectVoiceChannel(t), (0, a.transitionTo)(y.Routes.CHANNEL(e, t))
                    },
                    saveEvent(e, t, n, u) {
                        var r = _.ENTITY_TYPES_REQUIRED_CHANNEL_ID.has(t.entityType) ? t.channelId : null,
                            i = _.ENTITY_TYPES_REQUIRED_ENTITY_METADATA.has(t.entityType) ? t.entityMetadata : null,
                            d = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
                            a = {
                                name: t.name,
                                description: t.description,
                                image: d,
                                privacy_level: t.privacyLevel,
                                scheduled_start_time: t.scheduledStartTime,
                                scheduled_end_time: t.scheduledEndTime,
                                entity_type: t.entityType,
                                channel_id: r,
                                entity_metadata: i,
                                broadcast_to_directory_channels: u.broadcastToDirectoryChannels,
                                recurrence_rule: (0, E.recurrenceRuleToServer)(t.recurrenceRule)
                            };
                        return l.default.patch({
                            url: y.Endpoints.GUILD_EVENT(n, e),
                            body: a
                        })
                    },
                    createGuildEvent(e, t, n) {
                        var u = {
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
                            recurrence_rule: (0, E.recurrenceRuleToServer)(e.recurrenceRule)
                        };
                        return l.default.post({
                            url: y.Endpoints.GUILD_EVENTS_FOR_GUILD(t),
                            body: u
                        })
                    },
                    fetchGuildEvent: (e, t) => (0, u._)(function() {
                        var n;
                        return (0, r._)(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return [4, (0, o.httpGetWithCountryCodeQuery)(y.Endpoints.GUILD_EVENT(e, t))];
                                case 1:
                                    return n = u.sent().body, i.default.dispatch({
                                        type: "FETCH_GUILD_EVENT",
                                        guildScheduledEvent: n
                                    }), [2, n]
                            }
                        })
                    })(),
                    fetchGuildEventsForGuild: e => (0, u._)(function() {
                        var t, n;
                        return (0, r._)(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return t = {
                                        url: y.Endpoints.GUILD_EVENTS_FOR_GUILD(e)
                                    }, [4, (0, o.httpGetWithCountryCodeQuery)(t)];
                                case 1:
                                    return n = u.sent().body, i.default.dispatch({
                                        type: "FETCH_GUILD_EVENTS_FOR_GUILD",
                                        guildId: e,
                                        guildScheduledEvents: n
                                    }), [2, n]
                            }
                        })
                    })(),
                    fetchGuildEventUserCounts: (e, t, n) => (0, u._)(function() {
                        var u, d, a, c;
                        return (0, r._)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return u = {
                                        url: y.Endpoints.GUILD_EVENT_USER_COUNTS(e, t),
                                        query: {
                                            guild_scheduled_event_exception_ids: n
                                        }
                                    }, [4, l.default.get(u)];
                                case 1:
                                    return a = (d = r.sent().body).guild_scheduled_event_count, c = {
                                        eventCount: a,
                                        recurrenceCounts: d.guild_scheduled_event_exception_counts
                                    }, i.default.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
                                        guildId: e,
                                        eventId: t,
                                        counts: c
                                    }), [2, c]
                            }
                        })
                    })(),
                    cancelGuildEvent: (e, t) => l.default.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: _.GuildScheduledEventStatus.CANCELED
                        }
                    }),
                    deleteGuildEvent: (e, t) => l.default.delete({
                        url: y.Endpoints.GUILD_EVENT(t, e)
                    }),
                    getGuildEventsForCurrentUser: e => (0, u._)(function() {
                        var t;
                        return (0, r._)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, l.default.get({
                                        url: y.Endpoints.USER_GUILD_EVENTS,
                                        query: {
                                            guild_ids: [e]
                                        }
                                    })];
                                case 1:
                                    return t = n.sent().body, i.default.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",
                                        guildScheduledEventUsers: t,
                                        guildId: e
                                    }), [2]
                            }
                        })
                    })(),
                    createRsvpForGuildEvent: (e, t, n, d) => (0, u._)(function() {
                        var u, a;
                        return (0, r._)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    u = c.default.getId(), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), i.default.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                        userId: u,
                                        guildId: n,
                                        guildEventId: e,
                                        guildEventExceptionId: t,
                                        response: d
                                    }), [4, l.default.put({
                                        url: y.Endpoints.USER_GUILD_EVENT(n, e, t),
                                        body: {
                                            response: d
                                        }
                                    })];
                                case 2:
                                    return [2, r.sent()];
                                case 3:
                                    throw a = r.sent(), i.default.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                        userId: u,
                                        guildId: n,
                                        guildEventId: e,
                                        guildEventExceptionId: t,
                                        response: d
                                    }), a;
                                case 4:
                                    return [2]
                            }
                        })
                    })(),
                    deleteRsvpForGuildEvent: (e, t, n) => (0, u._)(function() {
                        var u, d, a;
                        return (0, r._)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (u = c.default.getId(), null == (d = s.default.getRsvp(e, t, u))) return [2];
                                    r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), i.default.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                        userId: u,
                                        guildId: n,
                                        guildEventId: e,
                                        guildEventExceptionId: t,
                                        response: d.response
                                    }), [4, l.default.delete({
                                        url: y.Endpoints.USER_GUILD_EVENT(n, e, t)
                                    })];
                                case 2:
                                    return [2, r.sent()];
                                case 3:
                                    throw a = r.sent(), i.default.dispatch({
                                        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                        userId: u,
                                        guildId: n,
                                        guildEventId: e,
                                        guildEventExceptionId: t,
                                        response: d.response
                                    }), a;
                                case 4:
                                    return [2]
                            }
                        })
                    })(),
                    fetchUsersForGuildEvent(e, t, n) {
                        var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.MAX_RSVP_USER_DISPLAY_COUNT;
                        return (0, u._)(function() {
                            var u;
                            return (0, r._)(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (null == e || null == n) return [2, []];
                                        return [4, l.default.get({
                                            url: y.Endpoints.GUILD_EVENT_USERS(n, e, t),
                                            query: {
                                                limit: d,
                                                with_member: !0,
                                                upgrade_response_type: !0
                                            }
                                        })];
                                    case 1:
                                        return u = r.sent(), i.default.dispatch({
                                            type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                                            guildEventId: e,
                                            guildScheduledEventUsers: u.body,
                                            guildId: n,
                                            guildEventExceptionId: t
                                        }), [2, u.body.users]
                                }
                            })
                        })()
                    },
                    createGuildEventException(e, t, n) {
                        var u = e.original_scheduled_start_time,
                            r = e.scheduled_start_time,
                            i = e.scheduled_end_time,
                            d = e.is_canceled;
                        return l.default.post({
                            url: y.Endpoints.GUILD_EVENT_EXCEPTIONS(t, n),
                            body: {
                                original_scheduled_start_time: u,
                                scheduled_start_time: r,
                                scheduled_end_time: i,
                                is_canceled: d
                            }
                        })
                    },
                    updateGuildEventException(e, t, n, u) {
                        var r = e.scheduled_start_time,
                            i = e.scheduled_end_time,
                            d = e.is_canceled;
                        return l.default.patch({
                            url: y.Endpoints.GUILD_EVENT_EXCEPTION(t, n, u),
                            body: {
                                scheduled_start_time: r,
                                scheduled_end_time: i,
                                is_canceled: d
                            }
                        })
                    },
                    deleteGuildEventException: (e, t, n) => l.default.delete({
                        url: y.Endpoints.GUILD_EVENT_EXCEPTION(e, t, n)
                    })
                }
        },
        546214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                convertToFakeGuildEvent: function() {
                    return E
                },
                getInitialGuildEventData: function() {
                    return _
                },
                isEditingEvent: function() {
                    return c
                },
                recurrenceRuleFromServer: function() {
                    return s
                },
                recurrenceRuleToServer: function() {
                    return o
                }
            }), n("363505"), n("633702"), n("266796");
            var u, r, l = n("262047"),
                i = n("858250"),
                d = n("848173"),
                a = n("578962");

            function c(e) {
                return !!(null == e ? void 0 : e.id)
            }

            function o(e) {
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
            }(r = u || (u = {})).CHANNEL_SELECTOR = "ChannelSelector", r.DETAILS = "Details", r.PREVIEW = "Preview";

            function E(e, t, n) {
                var u = e.name,
                    r = e.description,
                    i = e.privacyLevel,
                    d = e.channelId,
                    c = e.scheduledStartTime,
                    s = e.scheduledEndTime,
                    E = e.entityType,
                    _ = e.entityMetadata,
                    y = e.image,
                    v = e.recurrenceRule,
                    h = e.eventExceptions;
                return {
                    id: null != n ? n : a.FAKE_EVENT_ID,
                    name: u,
                    description: null != r ? r : null,
                    privacy_level: i,
                    scheduled_start_time: c,
                    scheduled_end_time: s,
                    entity_type: E,
                    entity_metadata: null != _ ? _ : null,
                    image: null != y ? y : void 0,
                    channel_id: d,
                    guild_id: t,
                    creator_id: l.default.getId(),
                    status: a.GuildScheduledEventStatus.SCHEDULED,
                    recurrence_rule: o(v),
                    guild_scheduled_event_exceptions: h.map(function(e) {
                        return {
                            event_exception_id: e.eventExceptionId,
                            event_id: e.eventId,
                            guild_id: e.guildId,
                            scheduled_start_time: e.scheduledStartTime,
                            scheduled_end_time: e.scheduledEndTime,
                            is_canceled: e.isCanceled
                        }
                    })
                }
            }

            function _(e, t) {
                var n, u, r, l, c, o, E, _, y = {
                    name: null !== (u = null == e ? void 0 : e.name) && void 0 !== u ? u : "",
                    privacyLevel: null !== (r = null == e ? void 0 : e.privacy_level) && void 0 !== r ? r : a.GuildScheduledEventPrivacyLevel.GUILD_ONLY,
                    description: null !== (l = null == e ? void 0 : e.description) && void 0 !== l ? l : "",
                    scheduledStartTime: null !== (c = null == e ? void 0 : e.scheduled_start_time) && void 0 !== c ? c : (0, d.getInitialEventStartDate)().toISOString(),
                    entityType: null !== (o = null == e ? void 0 : e.entity_type) && void 0 !== o ? o : a.GuildScheduledEventEntityTypes.NONE,
                    entityMetadata: null !== (E = null == e ? void 0 : e.entity_metadata) && void 0 !== E ? E : void 0,
                    channelId: null == e ? void 0 : e.channel_id,
                    creatorId: null == e ? void 0 : e.creator_id,
                    image: null == e ? void 0 : e.image,
                    scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
                    recurrenceRule: s(null == e ? void 0 : e.recurrence_rule),
                    eventExceptions: (null !== (_ = null == e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== _ ? _ : []).map(function(e) {
                        return {
                            eventExceptionId: e.event_exception_id,
                            eventId: e.event_id,
                            guildId: e.guild_id,
                            scheduledStartTime: e.scheduled_start_time,
                            scheduledEndTime: e.scheduled_end_time,
                            isCanceled: e.is_canceled
                        }
                    })
                };
                if (null != (n = e) && "id" in n && (null == e ? void 0 : e.entity_type) === a.GuildScheduledEventEntityTypes.EXTERNAL) {
                    var v = (0, i.getLocationFromEvent)(e);
                    null != v && (y.entityMetadata = {
                        location: v
                    })
                } else null == y.channelId && null != t && (y.channelId = t.id, t.isGuildStageVoice() ? y.entityType = a.GuildScheduledEventEntityTypes.STAGE_INSTANCE : t.isGuildVoice() && (y.entityType = a.GuildScheduledEventEntityTypes.VOICE));
                return y
            }
        },
        858250: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelFromEvent: function() {
                    return l
                },
                getChannelTypeFromEntity: function() {
                    return c
                },
                getLocationFromEvent: function() {
                    return d
                },
                getLocationFromEventData: function() {
                    return a
                }
            });
            var u = n("731865"),
                r = n("578962");

            function l(e) {
                var t, n, l = e.entity_type,
                    i = e.channel_id;
                return l in r.EntityChannelTypes && null != i && (t = null !== (n = u.default.getChannel(e.channel_id)) && void 0 !== n ? n : void 0), t
            }

            function i(e, t) {
                var n = null;
                return e === r.GuildScheduledEventEntityTypes.EXTERNAL && null != t && "location" in t && (n = t.location), n
            }

            function d(e) {
                return i(e.entity_type, e.entity_metadata)
            }

            function a(e) {
                return i(e.entityType, e.entityMetadata)
            }

            function c(e) {
                return e === r.GuildScheduledEventEntityTypes.VOICE || e === r.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? r.EntityChannelTypes[e] : void 0
            }
        },
        848173: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return E
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return s
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return _
                },
                areDatesIdentical: function() {
                    return g
                },
                areSchedulesIdentical: function() {
                    return I
                },
                generateNextRecurrences: function() {
                    return b
                },
                getBaseScheduleForRecurrence: function() {
                    return m
                },
                getEventTimeData: function() {
                    return T
                },
                getInitialEventStartDate: function() {
                    return R
                },
                getNextRecurrenceIdInEvent: function() {
                    return C
                },
                getRRule: function() {
                    return U
                },
                getScheduleForRecurrenceWithException: function() {
                    return N
                },
                getScheduleFromEventData: function() {
                    return L
                },
                isValidRecurrence: function() {
                    return w
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return O
                },
                recurrenceRuleToOption: function() {
                    return Y
                }
            });
            var u = n("761020");
            n("363505"), n("653041");
            var r = n("392711"),
                l = n("913527"),
                i = n.n(l),
                d = n("859334"),
                a = n("323419"),
                c = n("152551"),
                o = n("258941");
            n("578962");
            var s = 365,
                E = 366,
                _ = 4,
                y = [d.RRule.MO.weekday, d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday, d.RRule.FR.weekday],
                v = [d.RRule.SU.weekday, d.RRule.MO.weekday, d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday],
                h = [d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday, d.RRule.FR.weekday, d.RRule.SA.weekday],
                f = [d.RRule.SU.weekday, d.RRule.MO.weekday, d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday, d.RRule.FR.weekday, d.RRule.SA.weekday],
                R = function() {
                    var e = i()().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                p = function(e, t) {
                    return e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT")
                };

            function T(e, t, n) {
                null == n && (n = i()());
                var u, r, l = i()(e),
                    d = null != t && "" !== t ? i()(t) : void 0,
                    a = null != t && l.isSame(d, "day");
                return {
                    startDateTimeString: (u = l, r = n, u.diff(r, "days") > 1 ? p(u, r) : u.calendar(r)),
                    endDateTimeString: null != d ? a ? d.format("LT") : p(d, n) : void 0,
                    currentOrPastEvent: l <= n,
                    upcomingEvent: l <= i()().add(1, "hour"),
                    withinStartWindow: l <= i()().add(15, "minute"),
                    diffMinutes: l.diff(n, "minutes")
                }
            }

            function D(e) {
                return new d.Weekday(f[e])
            }

            function S(e, t) {
                var n;
                return null != e && (n = {
                    startDate: i()(e),
                    endDate: void 0
                }, null != t && (n.endDate = i()(t))), n
            }

            function m(e, t) {
                var n = function(e) {
                        return S(e.scheduled_start_time, e.scheduled_end_time)
                    }(t),
                    u = i()(a.default.extractTimestamp(e)),
                    r = (null == n ? void 0 : n.endDate) != null ? u.clone().add(n.endDate.diff(n.startDate)) : void 0;
                return {
                    startDate: u,
                    endDate: r
                }
            }

            function N(e, t) {
                if (null == t) return e;
                var n, u = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
                return {
                    startDate: null != t.scheduled_start_time ? i()(t.scheduled_start_time) : e.startDate,
                    endDate: null != u ? i()(u) : void 0
                }
            }

            function L(e) {
                return S(e.scheduledStartTime, e.scheduledEndTime)
            }

            function g(e, t) {
                return null == e || null == t ? null == e && null == t : e.isSame(t)
            }

            function I(e, t) {
                return null == e || null == t ? null == e && null == t : g(e.startDate, t.startDate) && g(e.endDate, t.endDate)
            }

            function U(e) {
                var t, n = null != e.byWeekday ? (0, u._)(e.byWeekday) : null,
                    r = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map(function(e) {
                        return new d.Weekday(e.day).nth(e.n)
                    }),
                    l = new Date(e.start);
                return l.setMilliseconds(0), new d.RRule({
                    dtstart: l,
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != n ? n : r,
                    bymonth: null != e.byMonth ? (0, u._)(e.byMonth) : null,
                    bymonthday: null != e.byMonthDay ? (0, u._)(e.byMonthDay) : null,
                    byyearday: null != e.byYearDay ? (0, u._)(e.byYearDay) : null,
                    count: e.count
                })
            }

            function b(e, t, n) {
                var u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = [],
                    l = n;
                l.setMilliseconds(0);
                var i = new Date;
                i.setFullYear(i.getFullYear() + _);
                for (var d = 0; d < e && l < i; d++) {
                    var a = t.after(l, 0 === d && !u);
                    if (null == a) break;
                    l = a, r.push(a)
                }
                return r
            }

            function C(e) {
                var t, n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
                return null != n ? a.default.fromTimestamp(Math.floor(n.getTime() / c.default.Millis.SECOND) * c.default.Millis.SECOND) : null
            }

            function w(e, t) {
                if (null == t || null == e) return !1;
                var n = new Date(e.start),
                    u = new Date(a.default.extractTimestamp(t));
                if (n.getUTCHours() !== u.getUTCHours() || n.getUTCMinutes() !== u.getUTCMinutes() || n.getUTCSeconds() !== u.getUTCSeconds()) return !1;
                switch (e.frequency) {
                    case d.RRule.WEEKLY:
                        return n.getUTCDay() === u.getUTCDay();
                    case d.RRule.YEARLY:
                        return n.getUTCDate() === u.getUTCDate();
                    default:
                        return !0
                }
            }

            function G(e) {
                var t = D(e.toDate().getDay()),
                    n = D(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? h : n.weekday - t.weekday < 0 ? v : y
            }

            function O(e, t) {
                var n = function(e, t) {
                    var n = G(t),
                        u = D(t.toDate().getDay()),
                        r = Math.ceil(t.toDate().getDate() / 7),
                        l = t.toDate();
                    switch (l.setMilliseconds(0), e) {
                        case o.RecurrenceOptions.NONE:
                            return null;
                        case o.RecurrenceOptions.WEEKLY:
                            return new d.RRule({
                                dtstart: l,
                                freq: d.RRule.WEEKLY
                            });
                        case o.RecurrenceOptions.BIWEEKLY:
                            return new d.RRule({
                                dtstart: l,
                                freq: d.RRule.WEEKLY,
                                interval: 2
                            });
                        case o.RecurrenceOptions.MONTHLY:
                            return new d.RRule({
                                dtstart: l,
                                freq: d.RRule.MONTHLY,
                                byweekday: [u.nth(r)]
                            });
                        case o.RecurrenceOptions.YEARLY:
                            return new d.RRule({
                                dtstart: l,
                                freq: d.RRule.YEARLY
                            });
                        case o.RecurrenceOptions.WEEKDAY_ONLY:
                            return new d.RRule({
                                dtstart: l,
                                freq: d.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == n) return null;
                var u = n.options,
                    r = u.dtstart,
                    l = u.until,
                    i = u.freq,
                    a = u.interval,
                    c = u.byweekday,
                    s = u.bynweekday,
                    E = u.bymonth,
                    _ = u.bymonthday,
                    y = u.byyearday,
                    v = u.count,
                    h = null == s ? void 0 : s.map(function(e) {
                        return {
                            n: e[1],
                            day: e[0]
                        }
                    });
                return {
                    start: r.toISOString(),
                    end: null == l ? void 0 : l.toISOString(),
                    frequency: i,
                    interval: a,
                    byWeekday: c,
                    byNWeekday: h,
                    byMonth: E,
                    byMonthDay: _,
                    byYearDay: y,
                    count: v
                }
            }

            function Y(e, t) {
                if (null == t) return o.RecurrenceOptions.NONE;
                var n = U(t);
                switch (n.options.freq) {
                    case d.RRule.WEEKLY:
                        if (n.options.interval < 1 || n.options.interval > 2) return o.RecurrenceOptions.NONE;
                        return 1 === n.options.interval ? o.RecurrenceOptions.WEEKLY : o.RecurrenceOptions.BIWEEKLY;
                    case d.RRule.YEARLY:
                        return o.RecurrenceOptions.YEARLY;
                    case d.RRule.MONTHLY:
                        return o.RecurrenceOptions.MONTHLY;
                    case d.RRule.DAILY:
                        if (!(0, r.isEqual)(n.options.byweekday, G(e))) return o.RecurrenceOptions.NONE;
                        return o.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return o.RecurrenceOptions.NONE
                }
            }
        }
    }
]);
//# sourceMappingURL=7018.10f38c2d9dec8453f9a5.js.map