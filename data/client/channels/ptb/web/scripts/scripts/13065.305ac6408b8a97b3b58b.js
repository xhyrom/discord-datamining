(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13065"], {
        757767: function(e, t, n) {
            "use strict";
            var u, r;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return u
                }
            }), (r = u || (u = {}))[r.NONE = 0] = "NONE", r[r.WEEKLY = 1] = "WEEKLY", r[r.MONTHLY = 2] = "MONTHLY", r[r.YEARLY = 3] = "YEARLY", r[r.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY", r[r.BIWEEKLY = 5] = "BIWEEKLY"
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                getEventException: function() {
                    return a
                }
            });
            var u = n("446674"),
                r = n("398604");

            function l(e, t) {
                let n = (0, u.useStateFromStoresArray)([r.default], () => {
                    var e, n;
                    return null !== (n = null === (e = r.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return i(n, e)
            }

            function a(e, t) {
                var n, u;
                let l = null !== (u = null === (n = r.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== u ? u : [];
                return i(l, e)
            }

            function i(e, t) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return n
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                },
                getEventSchedule: function() {
                    return o
                }
            });
            var u = n("627445"),
                r = n.n(u),
                l = n("446674"),
                a = n("398604"),
                i = n("397680"),
                d = n("822516");

            function c(e, t, n) {
                var u;
                let c = null !== (u = (0, l.useStateFromStores)([a.default], () => a.default.getGuildScheduledEvent(e))) && void 0 !== u ? u : n;
                r(null != c, "Event must be defined"), t = null != t ? t : (0, d.getNextRecurrenceIdInEvent)(c);
                let o = (0, i.default)(t, e);
                return s(c, o, t)
            }

            function o(e, t) {
                let n = (0, i.getEventException)(t, e.id);
                return s(e, n, t)
            }

            function s(e, t, n) {
                if (null == e.recurrence_rule || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let u = (0, d.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: r,
                        endDate: l
                    } = (0, d.getScheduleForRecurrenceWithException)(u, t);
                return {
                    startTime: r.toDate(),
                    endTime: null == l ? void 0 : l.toDate()
                }
            }
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return R
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return E
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return f
                },
                getRecurrenceOptions: function() {
                    return Y
                },
                getInitialEventStartDate: function() {
                    return v
                },
                getEventTimeData: function() {
                    return m
                },
                getBaseScheduleForRecurrence: function() {
                    return p
                },
                getScheduleForRecurrenceWithException: function() {
                    return S
                },
                getScheduleFromEventData: function() {
                    return L
                },
                areDatesIdentical: function() {
                    return A
                },
                areSchedulesIdentical: function() {
                    return M
                },
                getRRule: function() {
                    return k
                },
                generateNextRecurrences: function() {
                    return C
                },
                getNextRecurrenceIdInEvent: function() {
                    return W
                },
                isValidRecurrence: function() {
                    return b
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return K
                },
                recurrenceRuleToOption: function() {
                    return H
                },
                hasScheduleChanges: function() {
                    return I
                },
                getRecurrenceStatus: function() {
                    return q
                }
            }), n("222007"), n("424973");
            var u = n("917351"),
                r = n("866227"),
                l = n.n(r),
                a = n("614137"),
                i = n("718517"),
                d = n("299039"),
                c = n("757767"),
                o = n("745049"),
                s = n("782340");
            let R = 365,
                E = R + 1,
                f = 4,
                y = [a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday],
                _ = [a.RRule.SU.weekday, a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday],
                D = [a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday, a.RRule.SA.weekday],
                h = [a.RRule.SU.weekday, a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday, a.RRule.SA.weekday],
                T = new Set([0, 6]);

            function Y(e) {
                let t = e.toDate(),
                    n = Math.ceil(t.getDate() / 7),
                    u = e.format("dddd"),
                    r = [{
                        value: c.RecurrenceOptions.NONE,
                        label: s.default.Messages.CREATE_EVENT_RECUR_NONE
                    }, {
                        value: c.RecurrenceOptions.WEEKLY,
                        label: s.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                            weekday: u
                        })
                    }, {
                        value: c.RecurrenceOptions.BIWEEKLY,
                        label: s.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
                            weekday: u
                        })
                    }, {
                        value: c.RecurrenceOptions.MONTHLY,
                        label: s.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                            nth: n,
                            weekday: u
                        })
                    }, {
                        value: c.RecurrenceOptions.YEARLY,
                        label: s.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                            date: t.toLocaleString(s.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        })
                    }];
                return !T.has(t.getDay()) && r.push({
                    value: c.RecurrenceOptions.WEEKDAY_ONLY,
                    label: s.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                }), r
            }
            let v = () => {
                    let e = l().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                g = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                O = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? g(e, t) : e.calendar(t)
                };

            function m(e, t, n) {
                null == n && (n = l());
                let u = l(e),
                    r = null != t && "" !== t ? l(t) : void 0,
                    a = null != t && u.isSame(r, "day");
                return {
                    startDateTimeString: O(u, n),
                    endDateTimeString: null != r ? a ? r.format("LT") : g(r, n) : void 0,
                    currentOrPastEvent: u <= n,
                    upcomingEvent: u <= l().add(1, "hour"),
                    withinStartWindow: u <= l().add(15, "minute"),
                    diffMinutes: u.diff(n, "minutes")
                }
            }

            function w(e) {
                return new a.Weekday(h[e])
            }

            function N(e, t) {
                let n;
                return null != e && (n = {
                    startDate: l(e),
                    endDate: void 0
                }, null != t && (n.endDate = l(t))), n
            }

            function p(e, t) {
                let n = function(e) {
                        return N(e.scheduled_start_time, e.scheduled_end_time)
                    }(t),
                    u = l(d.default.extractTimestamp(e)),
                    r = (null == n ? void 0 : n.endDate) != null ? u.clone().add(n.endDate.diff(n.startDate)) : void 0;
                return {
                    startDate: u,
                    endDate: r
                }
            }

            function S(e, t) {
                var n;
                if (null == t) return e;
                let u = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
                return {
                    startDate: null != t.scheduled_start_time ? l(t.scheduled_start_time) : e.startDate,
                    endDate: null != u ? l(u) : void 0
                }
            }

            function L(e) {
                return N(e.scheduledStartTime, e.scheduledEndTime)
            }

            function A(e, t) {
                return null == e || null == t ? null == e && null == t : e.isSame(t)
            }

            function M(e, t) {
                return null == e || null == t ? null == e && null == t : A(e.startDate, t.startDate) && A(e.endDate, t.endDate)
            }

            function k(e) {
                var t;
                let n = null != e.byWeekday ? [...e.byWeekday] : null,
                    u = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map(e => new a.Weekday(e.day, e.n)),
                    r = new Date(e.start);
                return r.setMilliseconds(0), new a.RRule({
                    dtstart: r,
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

            function C(e, t, n) {
                let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = [],
                    l = n;
                l.setMilliseconds(0);
                let a = new Date;
                a.setFullYear(a.getFullYear() + f);
                for (let n = 0; n < e && l < a; n++) {
                    let e = t.after(l, 0 === n && !u);
                    if (null == e) break;
                    l = e, r.push(e)
                }
                return r
            }

            function W(e) {
                var t;
                if (null == e) return null;
                let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
                return null != n ? d.default.fromTimestamp(Math.floor(n.getTime() / i.default.Millis.SECOND) * i.default.Millis.SECOND) : null
            }

            function b(e, t) {
                if (null == t || null == e) return !1;
                let n = new Date(e.start),
                    u = d.default.extractTimestamp(t),
                    r = new Date(u);
                if (n.getUTCHours() !== r.getUTCHours() || n.getUTCMinutes() !== r.getUTCMinutes() || n.getUTCSeconds() !== r.getUTCSeconds()) return !1;
                switch (e.frequency) {
                    case a.RRule.WEEKLY:
                        return n.getUTCDay() === r.getUTCDay();
                    case a.RRule.YEARLY:
                        return n.getUTCDate() === r.getUTCDate();
                    default:
                        return !0
                }
            }

            function U(e) {
                let t = w(e.toDate().getDay()),
                    n = w(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? D : n.weekday - t.weekday < 0 ? _ : y
            }

            function K(e, t) {
                let n = function(e, t) {
                    let n = U(t),
                        u = w(t.toDate().getUTCDay()),
                        r = Math.ceil(t.toDate().getUTCDate() / 7),
                        l = t.toDate();
                    switch (l.setMilliseconds(0), e) {
                        case c.RecurrenceOptions.NONE:
                            return null;
                        case c.RecurrenceOptions.WEEKLY:
                            return new a.RRule({
                                dtstart: l,
                                freq: a.RRule.WEEKLY
                            });
                        case c.RecurrenceOptions.BIWEEKLY:
                            return new a.RRule({
                                dtstart: l,
                                freq: a.RRule.WEEKLY,
                                interval: 2
                            });
                        case c.RecurrenceOptions.MONTHLY:
                            return new a.RRule({
                                dtstart: l,
                                freq: a.RRule.MONTHLY,
                                byweekday: [u.nth(r)]
                            });
                        case c.RecurrenceOptions.YEARLY:
                            return new a.RRule({
                                dtstart: l,
                                freq: a.RRule.YEARLY
                            });
                        case c.RecurrenceOptions.WEEKDAY_ONLY:
                            return new a.RRule({
                                dtstart: l,
                                freq: a.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == n) return null;
                let {
                    dtstart: u,
                    until: r,
                    freq: l,
                    interval: i,
                    byweekday: d,
                    bynweekday: o,
                    bymonth: s,
                    bymonthday: R,
                    byyearday: E,
                    count: f
                } = n.options, y = null == o ? void 0 : o.map(e => ({
                    n: e[1],
                    day: e[0]
                }));
                return {
                    start: u.toISOString(),
                    end: null == r ? void 0 : r.toISOString(),
                    frequency: l,
                    interval: i,
                    byWeekday: d,
                    byNWeekday: y,
                    byMonth: s,
                    byMonthDay: R,
                    byYearDay: E,
                    count: f
                }
            }

            function H(e, t) {
                if (null == t) return c.RecurrenceOptions.NONE;
                let n = k(t);
                switch (n.options.freq) {
                    case a.RRule.WEEKLY:
                        if (n.options.interval < 1 || n.options.interval > 2) return c.RecurrenceOptions.NONE;
                        return 1 === n.options.interval ? c.RecurrenceOptions.WEEKLY : c.RecurrenceOptions.BIWEEKLY;
                    case a.RRule.YEARLY:
                        return c.RecurrenceOptions.YEARLY;
                    case a.RRule.MONTHLY:
                        return c.RecurrenceOptions.MONTHLY;
                    case a.RRule.DAILY:
                        if (!(0, u.isEqual)(n.options.byweekday, U(e))) return c.RecurrenceOptions.NONE;
                        return c.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return c.RecurrenceOptions.NONE
                }
            }

            function I(e, t) {
                return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, u.isEqual)(e.recurrence_rule, t.recurrenceRule)
            }

            function q(e, t, n) {
                return (null == e ? void 0 : e.is_canceled) ? o.GuildScheduledEventStatus.CANCELED : t < n ? o.GuildScheduledEventStatus.COMPLETED : null != e ? o.GuildScheduledEventStatus.SCHEDULED : null
            }
        }
    }
]);
//# sourceMappingURL=13065.305ac6408b8a97b3b58b.js.map