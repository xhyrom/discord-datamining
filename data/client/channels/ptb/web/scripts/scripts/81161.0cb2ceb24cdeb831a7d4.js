(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81161"], {
        757767: function(e, t, n) {
            "use strict";
            var u, l;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return u
                }
            }), (l = u || (u = {}))[l.NONE = 0] = "NONE", l[l.WEEKLY = 1] = "WEEKLY", l[l.MONTHLY = 2] = "MONTHLY", l[l.YEARLY = 3] = "YEARLY", l[l.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY"
        },
        777367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("862205");
            let l = (0, u.createExperiment)({
                kind: "guild",
                id: "2023-09_guild_events_auto_start",
                label: "Allow users to toggle automatically start events",
                defaultConfig: {
                    canUseEventsAutoStartToggle: !1
                },
                treatments: [{
                    id: 1,
                    label: "User can see autostart toggle",
                    config: {
                        canUseEventsAutoStartToggle: !0
                    }
                }]
            });
            var r = l
        },
        322224: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var u = n("872717"),
                l = n("913144"),
                r = n("987317"),
                d = n("393414"),
                i = n("271938"),
                a = n("271560"),
                c = n("777367"),
                o = n("398604"),
                s = n("189443"),
                E = n("745049"),
                _ = n("49111"),
                y = {
                    startEvent: (e, t) => u.default.patch({
                        url: _.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: E.GuildScheduledEventStatus.ACTIVE
                        }
                    }),
                    endEvent: (e, t) => u.default.patch({
                        url: _.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: E.GuildScheduledEventStatus.COMPLETED
                        }
                    }),
                    joinVoiceEvent(e, t) {
                        r.default.selectVoiceChannel(t), (0, d.transitionTo)(_.Routes.CHANNEL(e, t))
                    },
                    saveEvent(e, t, n, l) {
                        let r = E.ENTITY_TYPES_REQUIRED_CHANNEL_ID.has(t.entityType) ? t.channelId : null,
                            d = E.ENTITY_TYPES_REQUIRED_ENTITY_METADATA.has(t.entityType) ? t.entityMetadata : null,
                            i = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
                            {
                                canUseEventsAutoStartToggle: a
                            } = c.default.getCurrentConfig({
                                location: "Guild Events Model",
                                guildId: n
                            }, {
                                autoTrackExposure: !1
                            }),
                            o = {
                                name: t.name,
                                description: t.description,
                                image: i,
                                privacy_level: t.privacyLevel,
                                scheduled_start_time: t.scheduledStartTime,
                                scheduled_end_time: t.scheduledEndTime,
                                entity_type: t.entityType,
                                channel_id: r,
                                entity_metadata: d,
                                broadcast_to_directory_channels: l.broadcastToDirectoryChannels,
                                recurrence_rule: (0, s.recurrenceRuleToServer)(t.recurrenceRule)
                            };
                        return a && (o.auto_start = t.autoStart), u.default.patch({
                            url: _.Endpoints.GUILD_EVENT(n, e),
                            body: o
                        })
                    },
                    createGuildEvent(e, t, n) {
                        let {
                            canUseEventsAutoStartToggle: l
                        } = c.default.getCurrentConfig({
                            location: "Guild Events Model",
                            guildId: t
                        }, {
                            autoTrackExposure: !1
                        }), r = {
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
                        return l && (r.auto_start = e.autoStart), u.default.post({
                            url: _.Endpoints.GUILD_EVENTS_FOR_GUILD(t),
                            body: r
                        })
                    },
                    async fetchGuildEvent(e, t) {
                        let {
                            body: n
                        } = await (0, a.httpGetWithCountryCodeQuery)(_.Endpoints.GUILD_EVENT(e, t));
                        return l.default.dispatch({
                            type: "FETCH_GUILD_EVENT",
                            guildScheduledEvent: n
                        }), n
                    },
                    async fetchGuildEventsForGuild(e) {
                        let t = {
                                url: _.Endpoints.GUILD_EVENTS_FOR_GUILD(e)
                            },
                            {
                                body: n
                            } = await (0, a.httpGetWithCountryCodeQuery)(t);
                        return l.default.dispatch({
                            type: "FETCH_GUILD_EVENTS_FOR_GUILD",
                            guildId: e,
                            guildScheduledEvents: n
                        }), n
                    },
                    async fetchGuildEventUserCounts(e, t, n) {
                        let r = {
                                url: _.Endpoints.GUILD_EVENT_USER_COUNTS(e, t),
                                query: {
                                    guild_scheduled_event_exception_ids: n
                                }
                            },
                            {
                                body: {
                                    guild_scheduled_event_count: d,
                                    guild_scheduled_event_exception_counts: i
                                }
                            } = await u.default.get(r),
                            a = {
                                eventCount: d,
                                recurrenceCounts: i
                            };
                        return l.default.dispatch({
                            type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
                            guildId: e,
                            eventId: t,
                            counts: a
                        }), a
                    },
                    cancelGuildEvent: (e, t) => u.default.patch({
                        url: _.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: E.GuildScheduledEventStatus.CANCELED
                        }
                    }),
                    deleteGuildEvent: (e, t) => u.default.delete({
                        url: _.Endpoints.GUILD_EVENT(t, e)
                    }),
                    async getGuildEventsForCurrentUser(e) {
                        let {
                            body: t
                        } = await u.default.get({
                            url: _.Endpoints.USER_GUILD_EVENTS,
                            query: {
                                guild_ids: [e]
                            }
                        });
                        l.default.dispatch({
                            type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",
                            guildScheduledEventUsers: t,
                            guildId: e
                        })
                    },
                    async createRsvpForGuildEvent(e, t, n, r) {
                        let d = i.default.getId();
                        try {
                            return l.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                userId: d,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: r
                            }), await u.default.put({
                                url: _.Endpoints.USER_GUILD_EVENT(n, e, t),
                                body: {
                                    response: r
                                }
                            })
                        } catch (u) {
                            throw l.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                userId: d,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: r
                            }), u
                        }
                    },
                    async deleteRsvpForGuildEvent(e, t, n) {
                        let r = i.default.getId(),
                            d = o.default.getRsvp(e, t, r);
                        if (null != d) try {
                            return l.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                userId: r,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: d.response
                            }), await u.default.delete({
                                url: _.Endpoints.USER_GUILD_EVENT(n, e, t)
                            })
                        } catch (u) {
                            throw l.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                userId: r,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: d.response
                            }), u
                        }
                    },
                    async fetchUsersForGuildEvent(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.MAX_RSVP_USER_DISPLAY_COUNT;
                        if (null == e || null == n) return [];
                        let d = await u.default.get({
                            url: _.Endpoints.GUILD_EVENT_USERS(n, e, t),
                            query: {
                                limit: r,
                                with_member: !0,
                                upgrade_response_type: !0
                            }
                        });
                        return l.default.dispatch({
                            type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                            guildEventId: e,
                            guildScheduledEventUsers: d.body,
                            guildId: n,
                            guildEventExceptionId: t
                        }), d.body.users
                    },
                    createGuildEventException(e, t, n) {
                        let {
                            original_scheduled_start_time: l,
                            scheduled_start_time: r,
                            scheduled_end_time: d,
                            is_canceled: i
                        } = e;
                        return u.default.post({
                            url: _.Endpoints.GUILD_EVENT_EXCEPTIONS(t, n),
                            body: {
                                original_scheduled_start_time: l,
                                scheduled_start_time: r,
                                scheduled_end_time: d,
                                is_canceled: i
                            }
                        })
                    },
                    updateGuildEventException(e, t, n, l) {
                        let {
                            scheduled_start_time: r,
                            scheduled_end_time: d,
                            is_canceled: i
                        } = e;
                        return u.default.patch({
                            url: _.Endpoints.GUILD_EVENT_EXCEPTION(t, n, l),
                            body: {
                                scheduled_start_time: r,
                                scheduled_end_time: d,
                                is_canceled: i
                            }
                        })
                    },
                    deleteGuildEventException: (e, t, n) => u.default.delete({
                        url: _.Endpoints.GUILD_EVENT_EXCEPTION(e, t, n)
                    })
                }
        },
        189443: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isEditingEvent: function() {
                    return o
                },
                recurrenceRuleToServer: function() {
                    return s
                },
                recurrenceRuleFromServer: function() {
                    return E
                },
                convertToFakeGuildEvent: function() {
                    return _
                },
                getInitialGuildEventData: function() {
                    return y
                }
            });
            var u, l, r = n("271938"),
                d = n("841363"),
                i = n("822516"),
                a = n("745049"),
                c = n("49111");

            function o(e) {
                return !!(null == e ? void 0 : e.id)
            }

            function s(e) {
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

            function E(e) {
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
            }(u = l || (l = {})).CHANNEL_SELECTOR = "ChannelSelector", u.DETAILS = "Details", u.PREVIEW = "Preview";

            function _(e, t, n) {
                let {
                    name: u,
                    description: l,
                    privacyLevel: d,
                    channelId: i,
                    scheduledStartTime: c,
                    scheduledEndTime: o,
                    entityType: E,
                    entityMetadata: _,
                    image: y,
                    recurrenceRule: v,
                    eventExceptions: h
                } = e;
                return {
                    id: null != n ? n : a.FAKE_EVENT_ID,
                    name: u,
                    description: null != l ? l : null,
                    privacy_level: d,
                    scheduled_start_time: c,
                    scheduled_end_time: o,
                    entity_type: E,
                    entity_metadata: null != _ ? _ : null,
                    image: null != y ? y : void 0,
                    channel_id: i,
                    guild_id: t,
                    creator_id: r.default.getId(),
                    status: a.GuildScheduledEventStatus.SCHEDULED,
                    recurrence_rule: s(v),
                    guild_scheduled_event_exceptions: h.map(e => ({
                        event_exception_id: e.eventExceptionId,
                        event_id: e.eventId,
                        guild_id: e.guildId,
                        scheduled_start_time: e.scheduledStartTime,
                        scheduled_end_time: e.scheduledEndTime,
                        is_canceled: e.isCanceled
                    }))
                }
            }

            function y(e, t, n) {
                var u, l, r, o, s, _, y, v, h;
                let f = {
                    name: null !== (u = null == t ? void 0 : t.name) && void 0 !== u ? u : "",
                    privacyLevel: null !== (l = null == t ? void 0 : t.privacy_level) && void 0 !== l ? l : a.GuildScheduledEventPrivacyLevel.GUILD_ONLY,
                    description: null !== (r = null == t ? void 0 : t.description) && void 0 !== r ? r : "",
                    scheduledStartTime: null !== (o = null == t ? void 0 : t.scheduled_start_time) && void 0 !== o ? o : (0, i.getInitialEventStartDate)().toISOString(),
                    entityType: null !== (s = null == t ? void 0 : t.entity_type) && void 0 !== s ? s : a.GuildScheduledEventEntityTypes.NONE,
                    entityMetadata: null !== (_ = null == t ? void 0 : t.entity_metadata) && void 0 !== _ ? _ : void 0,
                    channelId: null == t ? void 0 : t.channel_id,
                    creatorId: null == t ? void 0 : t.creator_id,
                    image: null == t ? void 0 : t.image,
                    scheduledEndTime: null == t ? void 0 : t.scheduled_end_time,
                    autoStart: null !== (y = null == t ? void 0 : t.auto_start) && void 0 !== y ? y : !(null == e ? void 0 : e.hasFeature(c.GuildFeatures.COMMUNITY)),
                    recurrenceRule: E(null == t ? void 0 : t.recurrence_rule),
                    eventExceptions: (null !== (v = null == t ? void 0 : t.guild_scheduled_event_exceptions) && void 0 !== v ? v : []).map(e => ({
                        eventExceptionId: e.event_exception_id,
                        eventId: e.event_id,
                        guildId: e.guild_id,
                        scheduledStartTime: e.scheduled_start_time,
                        scheduledEndTime: e.scheduled_end_time,
                        isCanceled: e.is_canceled
                    }))
                };
                if (null != (h = t) && "id" in h && (null == t ? void 0 : t.entity_type) === a.GuildScheduledEventEntityTypes.EXTERNAL) {
                    let e = (0, d.getLocationFromEvent)(t);
                    null != e && (f.entityMetadata = {
                        location: e
                    })
                } else null == f.channelId && null != n && (f.channelId = n.id, n.isGuildStageVoice() ? f.entityType = a.GuildScheduledEventEntityTypes.STAGE_INSTANCE : n.isGuildVoice() && (f.entityType = a.GuildScheduledEventEntityTypes.VOICE));
                return f
            }
        },
        841363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelFromEvent: function() {
                    return r
                },
                getLocationFromEvent: function() {
                    return i
                },
                getLocationFromEventData: function() {
                    return a
                },
                getChannelTypeFromEntity: function() {
                    return c
                }
            });
            var u = n("42203"),
                l = n("745049");

            function r(e) {
                let t;
                let {
                    entity_type: n,
                    channel_id: r
                } = e;
                if (n in l.EntityChannelTypes && null != r) {
                    var d;
                    t = null !== (d = u.default.getChannel(e.channel_id)) && void 0 !== d ? d : void 0
                }
                return t
            }

            function d(e, t) {
                let n = null;
                return e === l.GuildScheduledEventEntityTypes.EXTERNAL && null != t && "location" in t && (n = t.location), n
            }

            function i(e) {
                let {
                    entity_type: t,
                    entity_metadata: n
                } = e;
                return d(t, n)
            }

            function a(e) {
                let {
                    entityType: t,
                    entityMetadata: n
                } = e;
                return d(t, n)
            }

            function c(e) {
                return e === l.GuildScheduledEventEntityTypes.VOICE || e === l.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? l.EntityChannelTypes[e] : void 0
            }
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return o
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return s
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return E
                },
                getInitialEventStartDate: function() {
                    return h
                },
                getEventTimeData: function() {
                    return T
                },
                getBaseScheduleForRecurrence: function() {
                    return D
                },
                getScheduleForRecurrenceWithException: function() {
                    return S
                },
                getScheduleFromEventData: function() {
                    return g
                },
                areDatesIdentical: function() {
                    return m
                },
                areSchedulesIdentical: function() {
                    return N
                },
                getRRule: function() {
                    return L
                },
                generateNextRecurrences: function() {
                    return U
                },
                getNextRecurrenceIdInEvent: function() {
                    return I
                },
                isValidRecurrence: function() {
                    return C
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return b
                },
                recurrenceRuleToOption: function() {
                    return w
                }
            }), n("222007"), n("424973");
            var u = n("917351"),
                l = n("866227"),
                r = n.n(l),
                d = n("614137"),
                i = n("249654"),
                a = n("718517"),
                c = n("757767");
            n("745049");
            let o = 365,
                s = o + 1,
                E = 4,
                _ = [d.RRule.MO.weekday, d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday, d.RRule.FR.weekday],
                y = [d.RRule.SU.weekday, d.RRule.MO.weekday, d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday],
                v = [d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday, d.RRule.FR.weekday, d.RRule.SA.weekday],
                h = () => {
                    let e = r().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                f = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                p = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? f(e, t) : e.calendar(t)
                };

            function T(e, t, n) {
                null == n && (n = r());
                let u = r(e),
                    l = null != t && "" !== t ? r(t) : void 0,
                    d = null != t && u.isSame(l, "day");
                return {
                    startDateTimeString: p(u, n),
                    endDateTimeString: null != l ? d ? l.format("LT") : f(l, n) : void 0,
                    currentOrPastEvent: u <= n,
                    upcomingEvent: u <= r().add(1, "hour"),
                    withinStartWindow: u <= r().add(15, "minute"),
                    diffMinutes: u.diff(n, "minutes")
                }
            }

            function R(e, t) {
                let n;
                return null != e && (n = {
                    startDate: r(e),
                    endDate: void 0
                }, null != t && (n.endDate = r(t))), n
            }

            function D(e, t) {
                let n = function(e) {
                        return R(e.scheduled_start_time, e.scheduled_end_time)
                    }(t),
                    u = r(i.default.extractTimestamp(e)),
                    l = (null == n ? void 0 : n.endDate) != null ? u.clone().add(n.endDate.diff(n.startDate)) : void 0;
                return {
                    startDate: u,
                    endDate: l
                }
            }

            function S(e, t) {
                var n;
                if (null == t) return e;
                let u = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
                return {
                    startDate: null != t.scheduled_start_time ? r(t.scheduled_start_time) : e.startDate,
                    endDate: null != u ? r(u) : void 0
                }
            }

            function g(e) {
                return R(e.scheduledStartTime, e.scheduledEndTime)
            }

            function m(e, t) {
                return null == e || null == t ? null == e && null == t : e.isSame(t)
            }

            function N(e, t) {
                return null == e || null == t ? null == e && null == t : m(e.startDate, t.startDate) && m(e.endDate, t.endDate)
            }

            function L(e) {
                var t;
                let n = null != e.byWeekday ? [...e.byWeekday] : null,
                    u = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map(e => new(0, d.Weekday)(e.day).nth(e.n)),
                    l = new Date(e.start);
                return l.setMilliseconds(0), new d.RRule({
                    dtstart: l,
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != n ? n : u,
                    bymonth: null != e.byMonth ? [...e.byMonth] : null,
                    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
                    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
                    count: e.count
                })
            }

            function U(e, t, n) {
                let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = [],
                    r = n;
                r.setMilliseconds(0);
                let d = new Date;
                d.setFullYear(d.getFullYear() + E);
                for (let n = 0; n < e && r < d; n++) {
                    let e = t.after(r, 0 === n && !u);
                    if (null == e) break;
                    r = e, l.push(e)
                }
                return l
            }

            function I(e) {
                var t;
                let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
                return null != n ? i.default.fromTimestamp(Math.floor(n.getTime() / a.default.Millis.SECOND) * a.default.Millis.SECOND) : null
            }

            function C(e, t) {
                if (null == t || null == e) return !1;
                let n = new Date(e.start),
                    u = i.default.extractTimestamp(t),
                    l = new Date(u);
                if (n.getUTCHours() !== l.getUTCHours() || n.getUTCMinutes() !== l.getUTCMinutes() || n.getUTCSeconds() !== l.getUTCSeconds()) return !1;
                switch (e.frequency) {
                    case d.RRule.WEEKLY:
                        return n.getUTCDay() === l.getUTCDay();
                    case d.RRule.YEARLY:
                        return n.getUTCDate() === l.getUTCDate();
                    default:
                        return !0
                }
            }

            function G(e) {
                let t = new d.Weekday(e.toDate().getDay()),
                    n = new d.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? v : n.weekday - t.weekday < 0 ? y : _
            }

            function b(e, t) {
                let n = function(e, t) {
                    let n = G(t),
                        u = new d.Weekday(t.toDate().getDay()),
                        l = Math.ceil(t.toDate().getDate() / 7),
                        r = t.toDate();
                    switch (r.setMilliseconds(0), e) {
                        case c.RecurrenceOptions.NONE:
                            return null;
                        case c.RecurrenceOptions.WEEKLY:
                            return new d.RRule({
                                dtstart: r,
                                freq: d.RRule.WEEKLY
                            });
                        case c.RecurrenceOptions.MONTHLY:
                            return new d.RRule({
                                dtstart: r,
                                freq: d.RRule.MONTHLY,
                                byweekday: [u.nth(l)]
                            });
                        case c.RecurrenceOptions.YEARLY:
                            return new d.RRule({
                                dtstart: r,
                                freq: d.RRule.YEARLY
                            });
                        case c.RecurrenceOptions.WEEKDAY_ONLY:
                            return new d.RRule({
                                dtstart: r,
                                freq: d.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == n) return null;
                let {
                    dtstart: u,
                    until: l,
                    freq: r,
                    interval: i,
                    byweekday: a,
                    bynweekday: o,
                    bymonth: s,
                    bymonthday: E,
                    byyearday: _,
                    count: y
                } = n.options, v = null == o ? void 0 : o.map(e => ({
                    n: e[1],
                    day: e[0]
                }));
                return {
                    start: u.toISOString(),
                    end: null == l ? void 0 : l.toISOString(),
                    frequency: r,
                    interval: i,
                    byWeekday: a,
                    byNWeekday: v,
                    byMonth: s,
                    byMonthDay: E,
                    byYearDay: _,
                    count: y
                }
            }

            function w(e, t) {
                if (null == t) return c.RecurrenceOptions.NONE;
                let n = L(t);
                switch (n.options.freq) {
                    case d.RRule.WEEKLY:
                        return c.RecurrenceOptions.WEEKLY;
                    case d.RRule.YEARLY:
                        return c.RecurrenceOptions.YEARLY;
                    case d.RRule.MONTHLY:
                        return c.RecurrenceOptions.MONTHLY;
                    case d.RRule.DAILY:
                        if (!(0, u.isEqual)(n.options.byweekday, G(e))) return c.RecurrenceOptions.NONE;
                        return c.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return c.RecurrenceOptions.NONE
                }
            }
        }
    }
]);
//# sourceMappingURL=81161.0cb2ceb24cdeb831a7d4.js.map