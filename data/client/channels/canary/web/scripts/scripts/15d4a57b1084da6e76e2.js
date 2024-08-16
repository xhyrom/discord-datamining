"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51477"],
  {
    440289: function (e, t) {
      var n = {
          lessThanXSeconds: {
            one: "mindre \xe4n en sekund",
            other: "mindre \xe4n {{count}} sekunder",
          },
          xSeconds: { one: "en sekund", other: "{{count}} sekunder" },
          halfAMinute: "en halv minut",
          lessThanXMinutes: {
            one: "mindre \xe4n en minut",
            other: "mindre \xe4n {{count}} minuter",
          },
          xMinutes: { one: "en minut", other: "{{count}} minuter" },
          aboutXHours: {
            one: "ungef\xe4r en timme",
            other: "ungef\xe4r {{count}} timmar",
          },
          xHours: { one: "en timme", other: "{{count}} timmar" },
          xDays: { one: "en dag", other: "{{count}} dagar" },
          aboutXWeeks: {
            one: "ungef\xe4r en vecka",
            other: "ungef\xe4r {{count}} vecka",
          },
          xWeeks: { one: "en vecka", other: "{{count}} vecka" },
          aboutXMonths: {
            one: "ungef\xe4r en m\xe5nad",
            other: "ungef\xe4r {{count}} m\xe5nader",
          },
          xMonths: { one: "en m\xe5nad", other: "{{count}} m\xe5nader" },
          aboutXYears: {
            one: "ungef\xe4r ett \xe5r",
            other: "ungef\xe4r {{count}} \xe5r",
          },
          xYears: { one: "ett \xe5r", other: "{{count}} \xe5r" },
          overXYears: {
            one: "\xf6ver ett \xe5r",
            other: "\xf6ver {{count}} \xe5r",
          },
          almostXYears: {
            one: "n\xe4stan ett \xe5r",
            other: "n\xe4stan {{count}} \xe5r",
          },
        },
        a = [
          "noll",
          "en",
          "tv\xe5",
          "tre",
          "fyra",
          "fem",
          "sex",
          "sju",
          "\xe5tta",
          "nio",
          "tio",
          "elva",
          "tolv",
        ];
      t.Z = function (e, t, r) {
        var i,
          o = n[e];
        if (
          ((i =
            "string" == typeof o
              ? o
              : 1 === t
                ? o.one
                : r && r.onlyNumeric
                  ? o.other.replace("{{count}}", String(t))
                  : o.other.replace("{{count}}", t < 13 ? a[t] : String(t))),
          null != r && r.addSuffix)
        )
          return r.comparison && r.comparison > 0 ? "om " + i : i + " sedan";
        return i;
      };
    },
    110358: function (e, t, n) {
      var a = n(261168),
        r = {
          date: (0, a.Z)({
            formats: {
              full: "EEEE d MMMM y",
              long: "d MMMM y",
              medium: "d MMM y",
              short: "y-MM-dd",
            },
            defaultWidth: "full",
          }),
          time: (0, a.Z)({
            formats: {
              full: "'kl'. HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, a.Z)({
            formats: {
              full: "{{date}} 'kl.' {{time}}",
              long: "{{date}} 'kl.' {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
          }),
        };
      t.Z = r;
    },
    182799: function (e, t) {
      var n = {
        lastWeek: "'i' EEEE's kl.' p",
        yesterday: "'ig\xe5r kl.' p",
        today: "'idag kl.' p",
        tomorrow: "'imorgon kl.' p",
        nextWeek: "EEEE 'kl.' p",
        other: "P",
      };
      t.Z = function (e, t, a, r) {
        return n[e];
      };
    },
    479704: function (e, t, n) {
      var a = n(799761),
        r = {
          ordinalNumber: function (e, t) {
            var n = Number(e),
              a = n % 100;
            if (a > 20 || a < 10)
              switch (a % 10) {
                case 1:
                case 2:
                  return n + ":a";
              }
            return n + ":e";
          },
          era: (0, a.Z)({
            values: {
              narrow: ["f.Kr.", "e.Kr."],
              abbreviated: ["f.Kr.", "e.Kr."],
              wide: ["f\xf6re Kristus", "efter Kristus"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, a.Z)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: [
                "1:a kvartalet",
                "2:a kvartalet",
                "3:e kvartalet",
                "4:e kvartalet",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return e - 1;
            },
          }),
          month: (0, a.Z)({
            values: {
              narrow: [
                "J",
                "F",
                "M",
                "A",
                "M",
                "J",
                "J",
                "A",
                "S",
                "O",
                "N",
                "D",
              ],
              abbreviated: [
                "jan.",
                "feb.",
                "mars",
                "apr.",
                "maj",
                "juni",
                "juli",
                "aug.",
                "sep.",
                "okt.",
                "nov.",
                "dec.",
              ],
              wide: [
                "januari",
                "februari",
                "mars",
                "april",
                "maj",
                "juni",
                "juli",
                "augusti",
                "september",
                "oktober",
                "november",
                "december",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, a.Z)({
            values: {
              narrow: ["S", "M", "T", "O", "T", "F", "L"],
              short: ["s\xf6", "m\xe5", "ti", "on", "to", "fr", "l\xf6"],
              abbreviated: [
                "s\xf6n",
                "m\xe5n",
                "tis",
                "ons",
                "tors",
                "fre",
                "l\xf6r",
              ],
              wide: [
                "s\xf6ndag",
                "m\xe5ndag",
                "tisdag",
                "onsdag",
                "torsdag",
                "fredag",
                "l\xf6rdag",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, a.Z)({
            values: {
              narrow: {
                am: "fm",
                pm: "em",
                midnight: "midnatt",
                noon: "middag",
                morning: "morg.",
                afternoon: "efterm.",
                evening: "kv\xe4ll",
                night: "natt",
              },
              abbreviated: {
                am: "f.m.",
                pm: "e.m.",
                midnight: "midnatt",
                noon: "middag",
                morning: "morgon",
                afternoon: "efterm.",
                evening: "kv\xe4ll",
                night: "natt",
              },
              wide: {
                am: "f\xf6rmiddag",
                pm: "eftermiddag",
                midnight: "midnatt",
                noon: "middag",
                morning: "morgon",
                afternoon: "eftermiddag",
                evening: "kv\xe4ll",
                night: "natt",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "fm",
                pm: "em",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morg.",
                afternoon: "p\xe5 efterm.",
                evening: "p\xe5 kv\xe4llen",
                night: "p\xe5 natten",
              },
              abbreviated: {
                am: "fm",
                pm: "em",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morg.",
                afternoon: "p\xe5 efterm.",
                evening: "p\xe5 kv\xe4llen",
                night: "p\xe5 natten",
              },
              wide: {
                am: "fm",
                pm: "em",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morgonen",
                afternoon: "p\xe5 eftermiddagen",
                evening: "p\xe5 kv\xe4llen",
                night: "p\xe5 natten",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
      t.Z = r;
    },
    827208: function (e, t, n) {
      var a = n(475637),
        r = n(925300),
        i = {
          ordinalNumber: (0, r.Z)({
            matchPattern: /^(\d+)(:a|:e)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e, 10);
            },
          }),
          era: (0, a.Z)({
            matchPatterns: {
              narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
              abbreviated:
                /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
              wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^f/i, /^[ev]/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, a.Z)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](:a|:e)? kvartalet/i,
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
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,
              wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^maj/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, a.Z)({
            matchPatterns: {
              narrow: /^[smtofl]/i,
              short: /^(sö|må|ti|on|to|fr|lö)/i,
              abbreviated: /^(sön|mån|tis|ons|tors|fre|lör)/i,
              wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, a.Z)({
            matchPatterns: {
              any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^f/i,
                pm: /^e/i,
                midnight: /^midn/i,
                noon: /^midd/i,
                morning: /morgon/i,
                afternoon: /eftermiddag/i,
                evening: /kväll/i,
                night: /natt/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      t.Z = i;
    },
    240465: function (e, t, n) {
      n.r(t);
      var a = n(440289),
        r = n(110358),
        i = n(182799),
        o = n(479704),
        d = n(827208),
        m = {
          code: "sv",
          formatDistance: a.Z,
          formatLong: r.Z,
          formatRelative: i.Z,
          localize: o.Z,
          match: d.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
      t.default = m;
    },
  },
]);
//# sourceMappingURL=15d4a57b1084da6e76e2.js.map
