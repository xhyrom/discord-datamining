"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78607"],
  {
    463647: function (e, t) {
      var n = {
        lessThanXSeconds: { one: "1초 미만", other: "{{count}}초 미만" },
        xSeconds: { one: "1초", other: "{{count}}초" },
        halfAMinute: "30초",
        lessThanXMinutes: { one: "1분 미만", other: "{{count}}분 미만" },
        xMinutes: { one: "1분", other: "{{count}}분" },
        aboutXHours: { one: "약 1시간", other: "약 {{count}}시간" },
        xHours: { one: "1시간", other: "{{count}}시간" },
        xDays: { one: "1일", other: "{{count}}일" },
        aboutXWeeks: { one: "약 1주", other: "약 {{count}}주" },
        xWeeks: { one: "1주", other: "{{count}}주" },
        aboutXMonths: { one: "약 1개월", other: "약 {{count}}개월" },
        xMonths: { one: "1개월", other: "{{count}}개월" },
        aboutXYears: { one: "약 1년", other: "약 {{count}}년" },
        xYears: { one: "1년", other: "{{count}}년" },
        overXYears: { one: "1년 이상", other: "{{count}}년 이상" },
        almostXYears: { one: "거의 1년", other: "거의 {{count}}년" },
      };
      t.Z = function (e, t, a) {
        var i,
          o = n[e];
        if (
          ((i =
            "string" == typeof o
              ? o
              : 1 === t
                ? o.one
                : o.other.replace("{{count}}", t.toString())),
          null != a && a.addSuffix)
        )
          return a.comparison && a.comparison > 0 ? i + " 후" : i + " 전";
        return i;
      };
    },
    404737: function (e, t, n) {
      var a = n(261168),
        i = {
          date: (0, a.Z)({
            formats: {
              full: "y년 M월 d일 EEEE",
              long: "y년 M월 d일",
              medium: "y.MM.dd",
              short: "y.MM.dd",
            },
            defaultWidth: "full",
          }),
          time: (0, a.Z)({
            formats: {
              full: "a H시 mm분 ss초 zzzz",
              long: "a H:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, a.Z)({
            formats: {
              full: "{{date}} {{time}}",
              long: "{{date}} {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
          }),
        };
      t.Z = i;
    },
    580890: function (e, t) {
      var n = {
        lastWeek: "'지난' eeee p",
        yesterday: "'어제' p",
        today: "'오늘' p",
        tomorrow: "'내일' p",
        nextWeek: "'다음' eeee p",
        other: "P",
      };
      t.Z = function (e, t, a, i) {
        return n[e];
      };
    },
    960167: function (e, t, n) {
      var a = n(799761),
        i = {
          ordinalNumber: function (e, t) {
            var n = Number(e);
            switch (String(null == t ? void 0 : t.unit)) {
              case "minute":
              case "second":
                return String(n);
              case "date":
                return n + "일";
              default:
                return n + "번째";
            }
          },
          era: (0, a.Z)({
            values: {
              narrow: ["BC", "AD"],
              abbreviated: ["BC", "AD"],
              wide: ["기원전", "서기"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, a.Z)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: ["1분기", "2분기", "3분기", "4분기"],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return e - 1;
            },
          }),
          month: (0, a.Z)({
            values: {
              narrow: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
              ],
              abbreviated: [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월",
              ],
              wide: [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, a.Z)({
            values: {
              narrow: ["일", "월", "화", "수", "목", "금", "토"],
              short: ["일", "월", "화", "수", "목", "금", "토"],
              abbreviated: ["일", "월", "화", "수", "목", "금", "토"],
              wide: [
                "일요일",
                "월요일",
                "화요일",
                "수요일",
                "목요일",
                "금요일",
                "토요일",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, a.Z)({
            values: {
              narrow: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
              abbreviated: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
              wide: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
              abbreviated: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
              wide: {
                am: "오전",
                pm: "오후",
                midnight: "자정",
                noon: "정오",
                morning: "아침",
                afternoon: "오후",
                evening: "저녁",
                night: "밤",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
      t.Z = i;
    },
    736672: function (e, t, n) {
      var a = n(475637),
        i = n(925300),
        o = {
          ordinalNumber: (0, i.Z)({
            matchPattern: /^(\d+)(일|번째)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e, 10);
            },
          }),
          era: (0, a.Z)({
            matchPatterns: {
              narrow:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(기원전|서기)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^(bc|기원전)/i, /^(ad|서기)/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, a.Z)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234]사?분기/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: (0, a.Z)({
            matchPatterns: {
              narrow: /^(1[012]|[123456789])/,
              abbreviated: /^(1[012]|[123456789])월/i,
              wide: /^(1[012]|[123456789])월/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [
                /^1월?$/,
                /^2/,
                /^3/,
                /^4/,
                /^5/,
                /^6/,
                /^7/,
                /^8/,
                /^9/,
                /^10/,
                /^11/,
                /^12/,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, a.Z)({
            matchPatterns: {
              narrow: /^[일월화수목금토]/,
              short: /^[일월화수목금토]/,
              abbreviated: /^[일월화수목금토]/,
              wide: /^[일월화수목금토]요일/,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, a.Z)({
            matchPatterns: {
              any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^(am|오전)/i,
                pm: /^(pm|오후)/i,
                midnight: /^자정/i,
                noon: /^정오/i,
                morning: /^아침/i,
                afternoon: /^오후/i,
                evening: /^저녁/i,
                night: /^밤/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      t.Z = o;
    },
    210927: function (e, t, n) {
      n.r(t);
      var a = n(463647),
        i = n(404737),
        o = n(580890),
        r = n(960167),
        d = n(736672),
        u = {
          code: "ko",
          formatDistance: a.Z,
          formatLong: i.Z,
          formatRelative: o.Z,
          localize: r.Z,
          match: d.Z,
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        };
      t.default = u;
    },
  },
]);
//# sourceMappingURL=e751b6b5a6482850ab04.js.map
