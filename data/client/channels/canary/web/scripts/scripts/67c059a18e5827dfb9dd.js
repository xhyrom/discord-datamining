"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71953"],
  {
    757490: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = a(951516),
        r = a(780603);
      function i(e, t, a) {
        (0, n.Z)(2, arguments);
        var i = (0, r.Z)(e, a),
          o = (0, r.Z)(t, a);
        return i.getTime() === o.getTime();
      }
    },
    419595: function (e, t) {
      var a = {
        lessThanXSeconds: {
          one: "по-малко от секунда",
          other: "по-малко от {{count}} секунди",
        },
        xSeconds: { one: "1 секунда", other: "{{count}} секунди" },
        halfAMinute: "половин минута",
        lessThanXMinutes: {
          one: "по-малко от минута",
          other: "по-малко от {{count}} минути",
        },
        xMinutes: { one: "1 минута", other: "{{count}} минути" },
        aboutXHours: { one: "около час", other: "около {{count}} часа" },
        xHours: { one: "1 час", other: "{{count}} часа" },
        xDays: { one: "1 ден", other: "{{count}} дни" },
        aboutXWeeks: { one: "около седмица", other: "около {{count}} седмици" },
        xWeeks: { one: "1 седмица", other: "{{count}} седмици" },
        aboutXMonths: { one: "около месец", other: "около {{count}} месеца" },
        xMonths: { one: "1 месец", other: "{{count}} месеца" },
        aboutXYears: { one: "около година", other: "около {{count}} години" },
        xYears: { one: "1 година", other: "{{count}} години" },
        overXYears: { one: "над година", other: "над {{count}} години" },
        almostXYears: { one: "почти година", other: "почти {{count}} години" },
      };
      t.Z = function (e, t, n) {
        var r,
          i = a[e];
        if (
          ((r =
            "string" == typeof i
              ? i
              : 1 === t
                ? i.one
                : i.other.replace("{{count}}", String(t))),
          null != n && n.addSuffix)
        )
          return n.comparison && n.comparison > 0 ? "след " + r : "преди " + r;
        return r;
      };
    },
    650952: function (e, t, a) {
      var n = a(261168),
        r = {
          date: (0, n.Z)({
            formats: {
              full: "EEEE, dd MMMM yyyy",
              long: "dd MMMM yyyy",
              medium: "dd MMM yyyy",
              short: "dd/MM/yyyy",
            },
            defaultWidth: "full",
          }),
          time: (0, n.Z)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "H:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, n.Z)({
            formats: { any: "{{date}} {{time}}" },
            defaultWidth: "any",
          }),
        };
      t.Z = r;
    },
    425047: function (e, t, a) {
      var n = a(528734),
        r = a(757490),
        i = [
          "неделя",
          "понеделник",
          "вторник",
          "сряда",
          "четвъртък",
          "петък",
          "събота",
        ];
      function o(e) {
        var t = i[e];
        return 2 === e ? "'във " + t + " в' p" : "'в " + t + " в' p";
      }
      var u = {
        lastWeek: function (e, t, a) {
          var u = (0, n.default)(e),
            d = u.getUTCDay();
          return (0, r.Z)(u, t, a)
            ? o(d)
            : (function (e) {
                var t = i[e];
                switch (e) {
                  case 0:
                  case 3:
                  case 6:
                    return "'миналата " + t + " в' p";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "'миналия " + t + " в' p";
                }
              })(d);
        },
        yesterday: "'вчера в' p",
        today: "'днес в' p",
        tomorrow: "'утре в' p",
        nextWeek: function (e, t, a) {
          var u = (0, n.default)(e),
            d = u.getUTCDay();
          return (0, r.Z)(u, t, a)
            ? o(d)
            : (function (e) {
                var t = i[e];
                switch (e) {
                  case 0:
                  case 3:
                  case 6:
                    return "'следващата " + t + " в' p";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "'следващия " + t + " в' p";
                }
              })(d);
        },
        other: "P",
      };
      t.Z = function (e, t, a, n) {
        var r = u[e];
        return "function" == typeof r ? r(t, a, n) : r;
      };
    },
    35117: function (e, t, a) {
      var n = a(799761);
      function r(e, t, a, n, r) {
        var i;
        return (
          e +
          "-" +
          ("quarter" === t
            ? r
            : "year" === (i = t) ||
                "week" === i ||
                "minute" === i ||
                "second" === i
              ? n
              : a)
        );
      }
      var i = {
        ordinalNumber: function (e, t) {
          var a = Number(e),
            n = null == t ? void 0 : t.unit;
          if (0 === a) return r(0, n, "ев", "ева", "ево");
          if (a % 1e3 == 0) return r(a, n, "ен", "на", "но");
          if (a % 100 == 0) return r(a, n, "тен", "тна", "тно");
          var i = a % 100;
          if (i > 20 || i < 10)
            switch (i % 10) {
              case 1:
                return r(a, n, "ви", "ва", "во");
              case 2:
                return r(a, n, "ри", "ра", "ро");
              case 7:
              case 8:
                return r(a, n, "ми", "ма", "мо");
            }
          return r(a, n, "ти", "та", "то");
        },
        era: (0, n.Z)({
          values: {
            narrow: ["пр.н.е.", "н.е."],
            abbreviated: ["преди н. е.", "н. е."],
            wide: ["преди новата ера", "новата ера"],
          },
          defaultWidth: "wide",
        }),
        quarter: (0, n.Z)({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: [
              "1-во тримес.",
              "2-ро тримес.",
              "3-то тримес.",
              "4-то тримес.",
            ],
            wide: [
              "1-во тримесечие",
              "2-ро тримесечие",
              "3-то тримесечие",
              "4-то тримесечие",
            ],
          },
          defaultWidth: "wide",
          argumentCallback: function (e) {
            return e - 1;
          },
        }),
        month: (0, n.Z)({
          values: {
            abbreviated: [
              "яну",
              "фев",
              "мар",
              "апр",
              "май",
              "юни",
              "юли",
              "авг",
              "сеп",
              "окт",
              "ное",
              "дек",
            ],
            wide: [
              "януари",
              "февруари",
              "март",
              "април",
              "май",
              "юни",
              "юли",
              "август",
              "септември",
              "октомври",
              "ноември",
              "декември",
            ],
          },
          defaultWidth: "wide",
        }),
        day: (0, n.Z)({
          values: {
            narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
            short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
            abbreviated: ["нед", "пон", "вто", "сря", "чет", "пет", "съб"],
            wide: [
              "неделя",
              "понеделник",
              "вторник",
              "сряда",
              "четвъртък",
              "петък",
              "събота",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: (0, n.Z)({
          values: {
            wide: {
              am: "преди обяд",
              pm: "след обяд",
              midnight: "в полунощ",
              noon: "на обяд",
              morning: "сутринта",
              afternoon: "следобед",
              evening: "вечерта",
              night: "през нощта",
            },
          },
          defaultWidth: "wide",
        }),
      };
      t.Z = i;
    },
    905372: function (e, t, a) {
      var n = a(475637),
        r = a(925300),
        i = {
          ordinalNumber: (0, r.Z)({
            matchPattern: /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e, 10);
            },
          }),
          era: (0, n.Z)({
            matchPatterns: {
              narrow: /^((пр)?н\.?\s?е\.?)/i,
              abbreviated: /^((пр)?н\.?\s?е\.?)/i,
              wide: /^(преди новата ера|новата ера|нова ера)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^п/i, /^н/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, n.Z)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i,
              wide: /^[1234](-?[врт]?о?)? тримесечие/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: (0, n.Z)({
            matchPatterns: {
              abbreviated:
                /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,
              wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [
                /^я/i,
                /^ф/i,
                /^мар/i,
                /^ап/i,
                /^май/i,
                /^юн/i,
                /^юл/i,
                /^ав/i,
                /^се/i,
                /^окт/i,
                /^но/i,
                /^де/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, n.Z)({
            matchPatterns: {
              narrow: /^[нпвсч]/i,
              short: /^(нд|пн|вт|ср|чт|пт|сб)/i,
              abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i,
              wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
              any: [
                /^н[ед]/i,
                /^п[он]/i,
                /^вт/i,
                /^ср/i,
                /^ч[ет]/i,
                /^п[ет]/i,
                /^с[ъб]/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, n.Z)({
            matchPatterns: {
              any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^преди о/i,
                pm: /^след о/i,
                midnight: /^в пол/i,
                noon: /^на об/i,
                morning: /^сут/i,
                afternoon: /^следо/i,
                evening: /^веч/i,
                night: /^през н/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      t.Z = i;
    },
    487012: function (e, t, a) {
      a.r(t);
      var n = a(419595),
        r = a(650952),
        i = a(425047),
        o = a(35117),
        u = a(905372),
        d = {
          code: "bg",
          formatDistance: n.Z,
          formatLong: r.Z,
          formatRelative: i.Z,
          localize: o.Z,
          match: u.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
        };
      t.default = d;
    },
  },
]);
//# sourceMappingURL=67c059a18e5827dfb9dd.js.map
