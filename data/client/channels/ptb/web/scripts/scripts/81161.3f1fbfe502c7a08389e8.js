(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81161"], {
        757767: function(e, t, n) {
            "use strict";
            var u, l;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return u
                }
            }), (l = u || (u = {}))[l.NONE = 0] = "NONE", l[l.WEEKLY = 1] = "WEEKLY", l[l.MONTHLY = 2] = "MONTHLY", l[l.YEARLY = 3] = "YEARLY", l[l.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY", l[l.BIWEEKLY = 5] = "BIWEEKLY"
        },
        322224: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var u = n("872717"),
                l = n("913144"),
                r = n("987317"),
                d = n("393414"),
                i = n("271938"),
                a = n("299039"),
                c = n("271560"),
                E = n("398604"),
                s = n("189443"),
                o = n("832588"),
                _ = n("745049"),
                y = n("49111"),
                R = {
                    startEvent: (e, t) => u.default.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: _.GuildScheduledEventStatus.ACTIVE
                        }
                    }),
                    endEvent: (e, t) => u.default.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: _.GuildScheduledEventStatus.COMPLETED
                        }
                    }),
                    joinVoiceEvent(e, t) {
                        r.default.selectVoiceChannel(t), (0, d.transitionTo)(y.Routes.CHANNEL(e, t))
                    },
                    saveEvent(e, t, n, l) {
                        let r = _.ENTITY_TYPES_REQUIRED_CHANNEL_ID.has(t.entityType) ? t.channelId : null,
                            d = _.ENTITY_TYPES_REQUIRED_ENTITY_METADATA.has(t.entityType) ? t.entityMetadata : null,
                            i = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
                            a = {
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
                        return u.default.patch({
                            url: y.Endpoints.GUILD_EVENT(n, e),
                            body: a
                        })
                    },
                    createGuildEvent(e, t, n) {
                        let l = {
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
                        return u.default.post({
                            url: y.Endpoints.GUILD_EVENTS_FOR_GUILD(t),
                            body: l
                        })
                    },
                    async fetchGuildEvent(e, t) {
                        let {
                            body: n
                        } = await (0, c.httpGetWithCountryCodeQuery)(y.Endpoints.GUILD_EVENT(e, t));
                        return l.default.dispatch({
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
                            } = await (0, c.httpGetWithCountryCodeQuery)(t);
                        return l.default.dispatch({
                            type: "FETCH_GUILD_EVENTS_FOR_GUILD",
                            guildId: e,
                            guildScheduledEvents: n
                        }), n
                    },
                    async fetchGuildEventUserCounts(e, t, n) {
                        let r = {
                                url: y.Endpoints.GUILD_EVENT_USER_COUNTS(e, t),
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
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: _.GuildScheduledEventStatus.CANCELED
                        }
                    }),
                    deleteGuildEvent: (e, t) => u.default.delete({
                        url: y.Endpoints.GUILD_EVENT(t, e)
                    }),
                    async getGuildEventsForCurrentUser(e) {
                        let {
                            body: t
                        } = await u.default.get({
                            url: y.Endpoints.USER_GUILD_EVENTS,
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
                                url: y.Endpoints.USER_GUILD_EVENT(n, e, t),
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
                            d = E.default.getRsvp(e, t, r);
                        if (null != d) try {
                            return l.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                userId: r,
                                guildId: n,
                                guildEventId: e,
                                guildEventExceptionId: t,
                                response: d.response
                            }), await u.default.delete({
                                url: y.Endpoints.USER_GUILD_EVENT(n, e, t)
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
                    async updateRsvp(e, t, n, u, l) {
                        let r = (0, o.getExistingRsvp)(e, t);
                        if (null != r) try {
                            await this.deleteRsvpForGuildEvent(e, t, n), null == l || l()
                        } catch (e) {
                            null == l || l(e)
                        } else try {
                            await this.createRsvpForGuildEvent(e, t, n, u), null == l || l()
                        } catch (e) {
                            null == l || l(e)
                        }
                    },
                    async fetchUsersForGuildEvent(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.MAX_RSVP_USER_DISPLAY_COUNT;
                        if (null == e || null == n) return [];
                        let d = await u.default.get({
                            url: y.Endpoints.GUILD_EVENT_USERS(n, e, t),
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
                            url: y.Endpoints.GUILD_EVENT_EXCEPTIONS(t, n),
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
                            url: y.Endpoints.GUILD_EVENT_EXCEPTION(t, n, l),
                            body: {
                                scheduled_start_time: r,
                                scheduled_end_time: d,
                                is_canceled: i
                            }
                        })
                    },
                    deleteGuildEventException: (e, t, n) => u.default.delete({
                        url: y.Endpoints.GUILD_EVENT_EXCEPTION(e, t, n)
                    }),
                    deleteRecurrence(e, t, n, u) {
                        if (null != u) this.updateGuildEventException({
                            scheduled_start_time: u.scheduled_start_time,
                            scheduled_end_time: u.scheduled_end_time,
                            is_canceled: !0
                        }, e, t, n);
                        else {
                            let u = a.default.extractTimestamp(n);
                            this.createGuildEventException({
                                original_scheduled_start_time: new Date(u).toISOString(),
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
                    return c
                },
                recurrenceRuleToServer: function() {
                    return E
                },
                recurrenceRuleFromServer: function() {
                    return s
                },
                convertToFakeGuildEvent: function() {
                    return o
                },
                getInitialGuildEventData: function() {
                    return _
                }
            });
            var u, l, r = n("271938"),
                d = n("841363"),
                i = n("822516"),
                a = n("745049");

            function c(e) {
                return !!(null == e ? void 0 : e.id)
            }

            function E(e) {
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
            }(u = l || (l = {})).CHANNEL_SELECTOR = "ChannelSelector", u.DETAILS = "Details", u.PREVIEW = "Preview";

            function o(e, t, n) {
                let {
                    name: u,
                    description: l,
                    privacyLevel: d,
                    channelId: i,
                    scheduledStartTime: c,
                    scheduledEndTime: s,
                    entityType: o,
                    entityMetadata: _,
                    image: y,
                    recurrenceRule: R,
                    eventExceptions: v
                } = e;
                return {
                    id: null != n ? n : a.FAKE_EVENT_ID,
                    name: u,
                    description: null != l ? l : null,
                    privacy_level: d,
                    scheduled_start_time: c,
                    scheduled_end_time: s,
                    entity_type: o,
                    entity_metadata: null != _ ? _ : null,
                    image: null != y ? y : void 0,
                    channel_id: i,
                    guild_id: t,
                    creator_id: r.default.getId(),
                    status: a.GuildScheduledEventStatus.SCHEDULED,
                    recurrence_rule: E(R),
                    guild_scheduled_event_exceptions: v.map(e => ({
                        event_exception_id: e.eventExceptionId,
                        event_id: e.eventId,
                        guild_id: e.guildId,
                        scheduled_start_time: e.scheduledStartTime,
                        scheduled_end_time: e.scheduledEndTime,
                        is_canceled: e.isCanceled
                    }))
                }
            }

            function _(e, t) {
                var n, u, l, r, c, E, o, _;
                let y = {
                    name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : "",
                    privacyLevel: null !== (u = null == e ? void 0 : e.privacy_level) && void 0 !== u ? u : a.GuildScheduledEventPrivacyLevel.GUILD_ONLY,
                    description: null !== (l = null == e ? void 0 : e.description) && void 0 !== l ? l : "",
                    scheduledStartTime: null !== (r = null == e ? void 0 : e.scheduled_start_time) && void 0 !== r ? r : (0, i.getInitialEventStartDate)().toISOString(),
                    entityType: null !== (c = null == e ? void 0 : e.entity_type) && void 0 !== c ? c : a.GuildScheduledEventEntityTypes.NONE,
                    entityMetadata: null !== (E = null == e ? void 0 : e.entity_metadata) && void 0 !== E ? E : void 0,
                    channelId: null == e ? void 0 : e.channel_id,
                    creatorId: null == e ? void 0 : e.creator_id,
                    image: null == e ? void 0 : e.image,
                    scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
                    recurrenceRule: s(null == e ? void 0 : e.recurrence_rule),
                    eventExceptions: (null !== (o = null == e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== o ? o : []).map(e => ({
                        eventExceptionId: e.event_exception_id,
                        eventId: e.event_id,
                        guildId: e.guild_id,
                        scheduledStartTime: e.scheduled_start_time,
                        scheduledEndTime: e.scheduled_end_time,
                        isCanceled: e.is_canceled
                    }))
                };
                if (null != (_ = e) && "id" in _ && (null == e ? void 0 : e.entity_type) === a.GuildScheduledEventEntityTypes.EXTERNAL) {
                    let t = (0, d.getLocationFromEvent)(e);
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
        832588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getExistingRsvp: function() {
                    return E
                },
                ResponseOptions: function() {
                    return l
                },
                getResponseOptions: function() {
                    return s
                },
                handleRsvp: function() {
                    return o
                }
            });
            var u, l, r = n("271938"),
                d = n("398604"),
                i = n("822516"),
                a = n("745049"),
                c = n("782340");

            function E(e, t) {
                let n = r.default.getId();
                return d.default.getRsvp(e, t, n)
            }

            function s() {
                return [{
                    name: c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                    value: 0
                }, {
                    name: c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                    value: 1
                }]
            }

            function o(e) {
                let {
                    eventId: t,
                    recurrenceId: n,
                    guildId: u,
                    updateRsvp: l,
                    openRsvpPicker: r,
                    onRsvp: c,
                    canRsvpToRecurrences: s = !0
                } = e, o = d.default.getGuildScheduledEvent(t);
                if (null == o) return;
                let _ = s ? null != n ? n : (0, i.getNextRecurrenceIdInEvent)(o) : null,
                    y = E(o.id),
                    R = E(o.id, _);
                null == _ ? (l(t, null, u, null != y ? a.GuildScheduledEventUserResponses.UNINTERESTED : a.GuildScheduledEventUserResponses.INTERESTED), null == c || c()) : null != R ? (l(t, _, u, null != y ? a.GuildScheduledEventUserResponses.INTERESTED : a.GuildScheduledEventUserResponses.UNINTERESTED), null == c || c()) : r(o, _)
            }(u = l || (l = {}))[u.SERIES = 0] = "SERIES", u[u.RECURRENCE = 1] = "RECURRENCE"
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return s
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return o
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return _
                },
                getRecurrenceOptions: function() {
                    return p
                },
                getInitialEventStartDate: function() {
                    return T
                },
                getEventTimeData: function() {
                    return N
                },
                getBaseScheduleForRecurrence: function() {
                    return L
                },
                getScheduleForRecurrenceWithException: function() {
                    return U
                },
                getScheduleFromEventData: function() {
                    return I
                },
                areDatesIdentical: function() {
                    return C
                },
                areSchedulesIdentical: function() {
                    return O
                },
                getRRule: function() {
                    return Y
                },
                generateNextRecurrences: function() {
                    return G
                },
                getNextRecurrenceIdInEvent: function() {
                    return w
                },
                isValidRecurrence: function() {
                    return b
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return M
                },
                recurrenceRuleToOption: function() {
                    return V
                },
                hasScheduleChanges: function() {
                    return k
                }
            }), n("222007"), n("424973");
            var u = n("917351"),
                l = n("866227"),
                r = n.n(l),
                d = n("614137"),
                i = n("718517"),
                a = n("299039"),
                c = n("757767");
            n("745049");
            var E = n("782340");
            let s = 365,
                o = s + 1,
                _ = 4,
                y = [d.RRule.MO.weekday, d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday, d.RRule.FR.weekday],
                R = [d.RRule.SU.weekday, d.RRule.MO.weekday, d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday],
                v = [d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday, d.RRule.FR.weekday, d.RRule.SA.weekday],
                h = [d.RRule.SU.weekday, d.RRule.MO.weekday, d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday, d.RRule.FR.weekday, d.RRule.SA.weekday],
                f = new Set([0, 6]);

            function p(e) {
                let t = e.toDate(),
                    n = Math.ceil(t.getDate() / 7),
                    u = e.format("dddd"),
                    l = [{
                        value: c.RecurrenceOptions.NONE,
                        label: E.default.Messages.CREATE_EVENT_RECUR_NONE
                    }, {
                        value: c.RecurrenceOptions.WEEKLY,
                        label: E.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                            weekday: u
                        })
                    }, {
                        value: c.RecurrenceOptions.BIWEEKLY,
                        label: E.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
                            weekday: u
                        })
                    }, {
                        value: c.RecurrenceOptions.MONTHLY,
                        label: E.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                            nth: n,
                            weekday: u
                        })
                    }, {
                        value: c.RecurrenceOptions.YEARLY,
                        label: E.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                            date: t.toLocaleString(E.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        })
                    }];
                return !f.has(t.getDay()) && l.push({
                    value: c.RecurrenceOptions.WEEKDAY_ONLY,
                    label: E.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                }), l
            }
            let T = () => {
                    let e = r().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                D = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                S = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? D(e, t) : e.calendar(t)
                };

            function N(e, t, n) {
                null == n && (n = r());
                let u = r(e),
                    l = null != t && "" !== t ? r(t) : void 0,
                    d = null != t && u.isSame(l, "day");
                return {
                    startDateTimeString: S(u, n),
                    endDateTimeString: null != l ? d ? l.format("LT") : D(l, n) : void 0,
                    currentOrPastEvent: u <= n,
                    upcomingEvent: u <= r().add(1, "hour"),
                    withinStartWindow: u <= r().add(15, "minute"),
                    diffMinutes: u.diff(n, "minutes")
                }
            }

            function m(e) {
                return new d.Weekday(h[e])
            }

            function g(e, t) {
                let n;
                return null != e && (n = {
                    startDate: r(e),
                    endDate: void 0
                }, null != t && (n.endDate = r(t))), n
            }

            function L(e, t) {
                let n = function(e) {
                        return g(e.scheduled_start_time, e.scheduled_end_time)
                    }(t),
                    u = r(a.default.extractTimestamp(e)),
                    l = (null == n ? void 0 : n.endDate) != null ? u.clone().add(n.endDate.diff(n.startDate)) : void 0;
                return {
                    startDate: u,
                    endDate: l
                }
            }

            function U(e, t) {
                var n;
                if (null == t) return e;
                let u = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
                return {
                    startDate: null != t.scheduled_start_time ? r(t.scheduled_start_time) : e.startDate,
                    endDate: null != u ? r(u) : void 0
                }
            }

            function I(e) {
                return g(e.scheduledStartTime, e.scheduledEndTime)
            }

            function C(e, t) {
                return null == e || null == t ? null == e && null == t : e.isSame(t)
            }

            function O(e, t) {
                return null == e || null == t ? null == e && null == t : C(e.startDate, t.startDate) && C(e.endDate, t.endDate)
            }

            function Y(e) {
                var t;
                let n = null != e.byWeekday ? [...e.byWeekday] : null,
                    u = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map(e => new d.Weekday(e.day, e.n)),
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

            function G(e, t, n) {
                let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = [],
                    r = n;
                r.setMilliseconds(0);
                let d = new Date;
                d.setFullYear(d.getFullYear() + _);
                for (let n = 0; n < e && r < d; n++) {
                    let e = t.after(r, 0 === n && !u);
                    if (null == e) break;
                    r = e, l.push(e)
                }
                return l
            }

            function w(e) {
                var t;
                if (null == e) return null;
                let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
                return null != n ? a.default.fromTimestamp(Math.floor(n.getTime() / i.default.Millis.SECOND) * i.default.Millis.SECOND) : null
            }

            function b(e, t) {
                if (null == t || null == e) return !1;
                let n = new Date(e.start),
                    u = a.default.extractTimestamp(t),
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

            function A(e) {
                let t = m(e.toDate().getDay()),
                    n = m(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? v : n.weekday - t.weekday < 0 ? R : y
            }

            function M(e, t) {
                let n = function(e, t) {
                    let n = A(t),
                        u = m(t.toDate().getUTCDay()),
                        l = Math.ceil(t.toDate().getUTCDate() / 7),
                        r = t.toDate();
                    switch (r.setMilliseconds(0), e) {
                        case c.RecurrenceOptions.NONE:
                            return null;
                        case c.RecurrenceOptions.WEEKLY:
                            return new d.RRule({
                                dtstart: r,
                                freq: d.RRule.WEEKLY
                            });
                        case c.RecurrenceOptions.BIWEEKLY:
                            return new d.RRule({
                                dtstart: r,
                                freq: d.RRule.WEEKLY,
                                interval: 2
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
                    bynweekday: E,
                    bymonth: s,
                    bymonthday: o,
                    byyearday: _,
                    count: y
                } = n.options, R = null == E ? void 0 : E.map(e => ({
                    n: e[1],
                    day: e[0]
                }));
                return {
                    start: u.toISOString(),
                    end: null == l ? void 0 : l.toISOString(),
                    frequency: r,
                    interval: i,
                    byWeekday: a,
                    byNWeekday: R,
                    byMonth: s,
                    byMonthDay: o,
                    byYearDay: _,
                    count: y
                }
            }

            function V(e, t) {
                if (null == t) return c.RecurrenceOptions.NONE;
                let n = Y(t);
                switch (n.options.freq) {
                    case d.RRule.WEEKLY:
                        if (n.options.interval < 1 || n.options.interval > 2) return c.RecurrenceOptions.NONE;
                        return 1 === n.options.interval ? c.RecurrenceOptions.WEEKLY : c.RecurrenceOptions.BIWEEKLY;
                    case d.RRule.YEARLY:
                        return c.RecurrenceOptions.YEARLY;
                    case d.RRule.MONTHLY:
                        return c.RecurrenceOptions.MONTHLY;
                    case d.RRule.DAILY:
                        if (!(0, u.isEqual)(n.options.byweekday, A(e))) return c.RecurrenceOptions.NONE;
                        return c.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return c.RecurrenceOptions.NONE
                }
            }

            function k(e, t) {
                return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, u.isEqual)(e.recurrence_rule, t.recurrenceRule)
            }
        }
    }
]);
//# sourceMappingURL=81161.3f1fbfe502c7a08389e8.js.map