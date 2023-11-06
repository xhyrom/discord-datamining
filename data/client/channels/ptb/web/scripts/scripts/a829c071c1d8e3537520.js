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
                    return _
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
                E = n("189443"),
                s = n("745049"),
                y = n("49111"),
                _ = {
                    startEvent: (e, t) => u.default.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: s.GuildScheduledEventStatus.ACTIVE
                        }
                    }),
                    endEvent: (e, t) => u.default.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: s.GuildScheduledEventStatus.COMPLETED
                        }
                    }),
                    joinVoiceEvent(e, t) {
                        r.default.selectVoiceChannel(t), (0, d.transitionTo)(y.Routes.CHANNEL(e, t))
                    },
                    saveEvent(e, t, n, l) {
                        let r = s.ENTITY_TYPES_REQUIRED_CHANNEL_ID.has(t.entityType) ? t.channelId : null,
                            d = s.ENTITY_TYPES_REQUIRED_ENTITY_METADATA.has(t.entityType) ? t.entityMetadata : null,
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
                                broadcast_to_directory_channels: l.broadcastToDirectoryChannels
                            };
                        return a && (o.auto_start = t.autoStart), u.default.patch({
                            url: y.Endpoints.GUILD_EVENT(n, e),
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
                            recurrence_rule: (0, E.recurrenceRuleToServer)(e.recurrenceRule)
                        };
                        return l && (r.auto_start = e.autoStart), u.default.post({
                            url: y.Endpoints.GUILD_EVENTS_FOR_GUILD(t),
                            body: r
                        })
                    },
                    async fetchGuildEventsForGuild(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = {
                                url: y.Endpoints.GUILD_EVENTS_FOR_GUILD(e),
                                query: {
                                    with_user_count: t
                                }
                            },
                            {
                                body: u
                            } = await (0, a.httpGetWithCountryCodeQuery)(n);
                        return l.default.dispatch({
                            type: "FETCH_GUILD_EVENTS_FOR_GUILD",
                            guildId: e,
                            guildScheduledEvents: u
                        }), u
                    },
                    cancelGuildEvent: (e, t) => u.default.patch({
                        url: y.Endpoints.GUILD_EVENT(t, e),
                        body: {
                            status: s.GuildScheduledEventStatus.CANCELED
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
                    async createRsvpForGuildEvent(e, t) {
                        let n = o.default.hasRsvp(e, t),
                            r = i.default.getId();
                        if (!n) try {
                            return l.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                userId: r,
                                guildId: t,
                                guildEventId: e
                            }), await u.default.put({
                                url: y.Endpoints.USER_GUILD_EVENT(t, e)
                            })
                        } catch (n) {
                            throw l.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                userId: r,
                                guildId: t,
                                guildEventId: e
                            }), n
                        }
                    },
                    async deleteRsvpForGuildEvent(e, t) {
                        let n = o.default.hasRsvp(e, t),
                            r = i.default.getId();
                        if (n) try {
                            return l.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                                userId: r,
                                guildId: t,
                                guildEventId: e
                            }), await u.default.delete({
                                url: y.Endpoints.USER_GUILD_EVENT(t, e)
                            })
                        } catch (n) {
                            throw l.default.dispatch({
                                type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                                userId: r,
                                guildId: t,
                                guildEventId: e
                            }), n
                        }
                    },
                    async fetchUsersForGuildEvent(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.MAX_RSVP_USER_DISPLAY_COUNT;
                        if (null == e || null == t) return [];
                        let r = await u.default.get({
                            url: y.Endpoints.GUILD_EVENT_USERS(t, e),
                            query: {
                                limit: n,
                                with_member: !0
                            }
                        });
                        return l.default.dispatch({
                            type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
                            guildEventId: e,
                            rsvpUsers: r.body.users,
                            guildId: t
                        }), r.body.users
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
                    return E
                },
                recurrenceRuleFromServer: function() {
                    return s
                },
                convertToFakeGuildEvent: function() {
                    return y
                },
                getInitialGuildEventData: function() {
                    return _
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

            function E(e) {
                return null == e ? null : {
                    start: e.start,
                    end: e.end,
                    frequency: e.frequency,
                    interval: e.interval,
                    by_weekday: e.byWeekday,
                    by_month: e.byMonth,
                    by_month_day: e.byMonthDay,
                    by_year_day: e.byYearDay,
                    count: e.count
                }
            }

            function s(e) {
                return null == e ? null : {
                    start: e.start,
                    end: e.end,
                    frequency: e.frequency,
                    interval: e.interval,
                    byWeekday: e.by_weekday,
                    byMonth: e.by_month,
                    byMonthDay: e.by_month_day,
                    byYearDay: e.by_year_day,
                    count: e.count
                }
            }(u = l || (l = {})).CHANNEL_SELECTOR = "ChannelSelector", u.DETAILS = "Details", u.PREVIEW = "Preview";

            function y(e, t, n) {
                let {
                    name: u,
                    description: l,
                    privacyLevel: d,
                    channelId: i,
                    scheduledStartTime: c,
                    scheduledEndTime: o,
                    entityType: s,
                    entityMetadata: y,
                    image: _,
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
                    entity_type: s,
                    entity_metadata: null != y ? y : null,
                    image: null != _ ? _ : void 0,
                    channel_id: i,
                    guild_id: t,
                    creator_id: r.default.getId(),
                    status: a.GuildScheduledEventStatus.SCHEDULED,
                    user_count: 1,
                    recurrence_rule: E(v),
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

            function _(e, t, n) {
                var u, l, r, o, E, y, _, v, h;
                let p = {
                    name: null !== (u = null == t ? void 0 : t.name) && void 0 !== u ? u : "",
                    privacyLevel: null !== (l = null == t ? void 0 : t.privacy_level) && void 0 !== l ? l : a.GuildScheduledEventPrivacyLevel.GUILD_ONLY,
                    description: null !== (r = null == t ? void 0 : t.description) && void 0 !== r ? r : "",
                    scheduledStartTime: null !== (o = null == t ? void 0 : t.scheduled_start_time) && void 0 !== o ? o : (0, i.getInitialEventStartDate)().toISOString(),
                    entityType: null !== (E = null == t ? void 0 : t.entity_type) && void 0 !== E ? E : a.GuildScheduledEventEntityTypes.NONE,
                    entityMetadata: null !== (y = null == t ? void 0 : t.entity_metadata) && void 0 !== y ? y : void 0,
                    channelId: null == t ? void 0 : t.channel_id,
                    creatorId: null == t ? void 0 : t.creator_id,
                    image: null == t ? void 0 : t.image,
                    scheduledEndTime: null == t ? void 0 : t.scheduled_end_time,
                    autoStart: null !== (_ = null == t ? void 0 : t.auto_start) && void 0 !== _ ? _ : !(null == e ? void 0 : e.hasFeature(c.GuildFeatures.COMMUNITY)),
                    recurrenceRule: s(null == t ? void 0 : t.recurrence_rule),
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
                    null != e && (p.entityMetadata = {
                        location: e
                    })
                } else null == p.channelId && null != n && (p.channelId = n.id, n.isGuildStageVoice() ? p.entityType = a.GuildScheduledEventEntityTypes.STAGE_INSTANCE : n.isGuildVoice() && (p.entityType = a.GuildScheduledEventEntityTypes.VOICE));
                return p
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
                    return a
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return c
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return o
                },
                getInitialEventStartDate: function() {
                    return _
                },
                getEventTimeData: function() {
                    return p
                },
                getScheduleFromEventData: function() {
                    return R
                },
                getScheduleFromEvent: function() {
                    return T
                },
                getRRule: function() {
                    return D
                },
                generateNextRecurrences: function() {
                    return S
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return N
                },
                recurrenceRuleToOption: function() {
                    return L
                }
            }), n("222007"), n("424973");
            var u = n("917351"),
                l = n("866227"),
                r = n.n(l),
                d = n("614137"),
                i = n("757767");
            n("745049");
            let a = 365,
                c = a + 1,
                o = 4,
                E = [d.RRule.MO.weekday, d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday, d.RRule.FR.weekday],
                s = [d.RRule.SU.weekday, d.RRule.MO.weekday, d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday],
                y = [d.RRule.TU.weekday, d.RRule.WE.weekday, d.RRule.TH.weekday, d.RRule.FR.weekday, d.RRule.SA.weekday],
                _ = () => {
                    let e = r().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                v = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                h = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? v(e, t) : e.calendar(t)
                };

            function p(e, t, n) {
                null == n && (n = r());
                let u = r(e),
                    l = null != t && "" !== t ? r(t) : void 0,
                    d = null != t && u.isSame(l, "day");
                return {
                    startDateTimeString: h(u, n),
                    endDateTimeString: null != l ? d ? l.format("LT") : v(l, n) : void 0,
                    currentOrPastEvent: u <= n,
                    upcomingEvent: u <= r().add(1, "hour"),
                    withinStartWindow: u <= r().add(15, "minute"),
                    diffMinutes: u.diff(n, "minutes")
                }
            }

            function f(e, t) {
                let n;
                return null != e && (n = {
                    startDate: r(e),
                    endDate: void 0
                }, null != t && (n.endDate = r(t))), n
            }

            function R(e) {
                return f(e.scheduledStartTime, e.scheduledEndTime)
            }

            function T(e) {
                return f(e.scheduled_start_time, e.scheduled_end_time)
            }

            function D(e) {
                return new d.RRule({
                    dtstart: new Date(e.start),
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != e.byWeekday ? [...e.byWeekday] : null,
                    bymonth: null != e.byMonth ? [...e.byMonth] : null,
                    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
                    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
                    count: e.count
                })
            }

            function S(e, t, n) {
                let u = [],
                    l = null == n,
                    r = null != n ? n : new Date,
                    d = new Date;
                d.setFullYear(d.getFullYear() + o);
                let i = l ? e + 1 : e;
                for (let e = 0; e < i && r < d; e++) {
                    let n = t.after(r);
                    if (null == n) break;
                    r = new Date(n), n.setMilliseconds(0), (!l || e > 0) && u.push(n)
                }
                return u
            }

            function m(e) {
                let t = new d.Weekday(e.toDate().getDay()),
                    n = new d.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? y : n.weekday - t.weekday < 0 ? s : E
            }

            function N(e, t) {
                let n = function(e, t) {
                    let n = m(t),
                        u = t.toDate();
                    switch (u.setMilliseconds(0), e) {
                        case i.RecurrenceOptions.NONE:
                            return null;
                        case i.RecurrenceOptions.WEEKLY:
                            return new d.RRule({
                                dtstart: u,
                                freq: d.RRule.WEEKLY
                            });
                        case i.RecurrenceOptions.YEARLY:
                            return new d.RRule({
                                dtstart: u,
                                freq: d.RRule.YEARLY
                            });
                        case i.RecurrenceOptions.WEEKDAY_ONLY:
                            return new d.RRule({
                                dtstart: u,
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
                    interval: a,
                    byweekday: c,
                    bymonth: o,
                    bymonthday: E,
                    byyearday: s,
                    count: y
                } = n.options;
                return {
                    start: u.toISOString(),
                    end: null == l ? void 0 : l.toISOString(),
                    frequency: r,
                    interval: a,
                    byWeekday: null != c ? new Set(c) : null,
                    byMonth: null != o ? new Set(o) : null,
                    byMonthDay: null != E ? new Set(E) : null,
                    byYearDay: null != s ? new Set(s) : null,
                    count: y
                }
            }

            function L(e, t) {
                if (null == t) return i.RecurrenceOptions.NONE;
                let n = D(t);
                switch (n.options.freq) {
                    case d.RRule.WEEKLY:
                        return i.RecurrenceOptions.WEEKLY;
                    case d.RRule.YEARLY:
                        return i.RecurrenceOptions.YEARLY;
                    case d.RRule.DAILY:
                        if (!(0, u.isEqual)(n.options.byweekday, m(e))) return i.RecurrenceOptions.NONE;
                        return i.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return i.RecurrenceOptions.NONE
                }
            }
        }
    }
]);
//# sourceMappingURL=a829c071c1d8e3537520.js.map