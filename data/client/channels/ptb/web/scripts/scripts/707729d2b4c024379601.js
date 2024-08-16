"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69788"],
  {
    169469: function (e, t) {
      var n = {
        lessThanXSeconds: {
          standalone: {
            one: "weniger als 1 Sekunde",
            other: "weniger als {{count}} Sekunden",
          },
          withPreposition: {
            one: "weniger als 1 Sekunde",
            other: "weniger als {{count}} Sekunden",
          },
        },
        xSeconds: {
          standalone: { one: "1 Sekunde", other: "{{count}} Sekunden" },
          withPreposition: { one: "1 Sekunde", other: "{{count}} Sekunden" },
        },
        halfAMinute: {
          standalone: "halbe Minute",
          withPreposition: "halben Minute",
        },
        lessThanXMinutes: {
          standalone: {
            one: "weniger als 1 Minute",
            other: "weniger als {{count}} Minuten",
          },
          withPreposition: {
            one: "weniger als 1 Minute",
            other: "weniger als {{count}} Minuten",
          },
        },
        xMinutes: {
          standalone: { one: "1 Minute", other: "{{count}} Minuten" },
          withPreposition: { one: "1 Minute", other: "{{count}} Minuten" },
        },
        aboutXHours: {
          standalone: { one: "etwa 1 Stunde", other: "etwa {{count}} Stunden" },
          withPreposition: {
            one: "etwa 1 Stunde",
            other: "etwa {{count}} Stunden",
          },
        },
        xHours: {
          standalone: { one: "1 Stunde", other: "{{count}} Stunden" },
          withPreposition: { one: "1 Stunde", other: "{{count}} Stunden" },
        },
        xDays: {
          standalone: { one: "1 Tag", other: "{{count}} Tage" },
          withPreposition: { one: "1 Tag", other: "{{count}} Tagen" },
        },
        aboutXWeeks: {
          standalone: { one: "etwa 1 Woche", other: "etwa {{count}} Wochen" },
          withPreposition: {
            one: "etwa 1 Woche",
            other: "etwa {{count}} Wochen",
          },
        },
        xWeeks: {
          standalone: { one: "1 Woche", other: "{{count}} Wochen" },
          withPreposition: { one: "1 Woche", other: "{{count}} Wochen" },
        },
        aboutXMonths: {
          standalone: { one: "etwa 1 Monat", other: "etwa {{count}} Monate" },
          withPreposition: {
            one: "etwa 1 Monat",
            other: "etwa {{count}} Monaten",
          },
        },
        xMonths: {
          standalone: { one: "1 Monat", other: "{{count}} Monate" },
          withPreposition: { one: "1 Monat", other: "{{count}} Monaten" },
        },
        aboutXYears: {
          standalone: { one: "etwa 1 Jahr", other: "etwa {{count}} Jahre" },
          withPreposition: {
            one: "etwa 1 Jahr",
            other: "etwa {{count}} Jahren",
          },
        },
        xYears: {
          standalone: { one: "1 Jahr", other: "{{count}} Jahre" },
          withPreposition: { one: "1 Jahr", other: "{{count}} Jahren" },
        },
        overXYears: {
          standalone: {
            one: "mehr als 1 Jahr",
            other: "mehr als {{count}} Jahre",
          },
          withPreposition: {
            one: "mehr als 1 Jahr",
            other: "mehr als {{count}} Jahren",
          },
        },
        almostXYears: {
          standalone: { one: "fast 1 Jahr", other: "fast {{count}} Jahre" },
          withPreposition: {
            one: "fast 1 Jahr",
            other: "fast {{count}} Jahren",
          },
        },
      };
      t.Z = function (e, t, a) {
        var i,
          o = null != a && a.addSuffix ? n[e].withPreposition : n[e].standalone;
        if (
          ((i =
            "string" == typeof o
              ? o
              : 1 === t
                ? o.one
                : o.other.replace("{{count}}", String(t))),
          null != a && a.addSuffix)
        )
          return a.comparison && a.comparison > 0 ? "in " + i : "vor " + i;
        return i;
      };
    },
    986849: function (e, t, n) {
      var a = n(261168),
        i = {
          date: (0, a.Z)({
            formats: {
              full: "EEEE, do MMMM y",
              long: "do MMMM y",
              medium: "do MMM y",
              short: "dd.MM.y",
            },
            defaultWidth: "full",
          }),
          time: (0, a.Z)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, a.Z)({
            formats: {
              full: "{{date}} 'um' {{time}}",
              long: "{{date}} 'um' {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
          }),
        };
      t.Z = i;
    },
    401140: function (e, t) {
      var n = {
        lastWeek: "'letzten' eeee 'um' p",
        yesterday: "'gestern um' p",
        today: "'heute um' p",
        tomorrow: "'morgen um' p",
        nextWeek: "eeee 'um' p",
        other: "P",
      };
      t.Z = function (e, t, a, i) {
        return n[e];
      };
    },
    293176: function (e, t, n) {
      var a = n(799761),
        i = {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: [
            "Jan",
            "Feb",
            "M\xe4r",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dez",
          ],
          wide: [
            "Januar",
            "Februar",
            "M\xe4rz",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
          ],
        },
        o = {
          narrow: i.narrow,
          abbreviated: [
            "Jan.",
            "Feb.",
            "M\xe4rz",
            "Apr.",
            "Mai",
            "Juni",
            "Juli",
            "Aug.",
            "Sep.",
            "Okt.",
            "Nov.",
            "Dez.",
          ],
          wide: i.wide,
        },
        r = {
          ordinalNumber: function (e) {
            return Number(e) + ".";
          },
          era: (0, a.Z)({
            values: {
              narrow: ["v.Chr.", "n.Chr."],
              abbreviated: ["v.Chr.", "n.Chr."],
              wide: ["vor Christus", "nach Christus"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, a.Z)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return e - 1;
            },
          }),
          month: (0, a.Z)({
            values: i,
            formattingValues: o,
            defaultWidth: "wide",
          }),
          day: (0, a.Z)({
            values: {
              narrow: ["S", "M", "D", "M", "D", "F", "S"],
              short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
              abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
              wide: [
                "Sonntag",
                "Montag",
                "Dienstag",
                "Mittwoch",
                "Donnerstag",
                "Freitag",
                "Samstag",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, a.Z)({
            values: {
              narrow: {
                am: "vm.",
                pm: "nm.",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "Morgen",
                afternoon: "Nachm.",
                evening: "Abend",
                night: "Nacht",
              },
              abbreviated: {
                am: "vorm.",
                pm: "nachm.",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "Morgen",
                afternoon: "Nachmittag",
                evening: "Abend",
                night: "Nacht",
              },
              wide: {
                am: "vormittags",
                pm: "nachmittags",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "Morgen",
                afternoon: "Nachmittag",
                evening: "Abend",
                night: "Nacht",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "vm.",
                pm: "nm.",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "morgens",
                afternoon: "nachm.",
                evening: "abends",
                night: "nachts",
              },
              abbreviated: {
                am: "vorm.",
                pm: "nachm.",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "morgens",
                afternoon: "nachmittags",
                evening: "abends",
                night: "nachts",
              },
              wide: {
                am: "vormittags",
                pm: "nachmittags",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "morgens",
                afternoon: "nachmittags",
                evening: "abends",
                night: "nachts",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
      t.Z = r;
    },
    185275: function (e, t, n) {
      var a = n(475637),
        i = n(925300),
        o = {
          ordinalNumber: (0, i.Z)({
            matchPattern: /^(\d+)(\.)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e);
            },
          }),
          era: (0, a.Z)({
            matchPatterns: {
              narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
              abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
              wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^v/i, /^n/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, a.Z)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](\.)? Quartal/i,
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
                /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
              wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i,
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
                /^j[aä]/i,
                /^f/i,
                /^mär/i,
                /^ap/i,
                /^mai/i,
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
              narrow: /^[smdmf]/i,
              short: /^(so|mo|di|mi|do|fr|sa)/i,
              abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
              wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, a.Z)({
            matchPatterns: {
              narrow:
                /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
              abbreviated:
                /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
              wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: {
                am: /^v/i,
                pm: /^n/i,
                midnight: /^Mitte/i,
                noon: /^Mitta/i,
                morning: /morgens/i,
                afternoon: /nachmittags/i,
                evening: /abends/i,
                night: /nachts/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      t.Z = o;
    },
    87670: function (e, t, n) {
      n.r(t);
      var a = n(169469),
        i = n(986849),
        o = n(401140),
        r = n(293176),
        h = n(185275),
        s = {
          code: "de",
          formatDistance: a.Z,
          formatLong: i.Z,
          formatRelative: o.Z,
          localize: r.Z,
          match: h.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
      t.default = s;
    },
  },
]);
//# sourceMappingURL=707729d2b4c024379601.js.map
