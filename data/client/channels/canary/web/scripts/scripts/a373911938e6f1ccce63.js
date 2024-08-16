"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33065"],
  {
    757490: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return o;
        },
      });
      var t = n(951516),
        a = n(780603);
      function o(e, i, n) {
        (0, t.Z)(2, arguments);
        var o = (0, a.Z)(e, n),
          r = (0, a.Z)(i, n);
        return o.getTime() === r.getTime();
      }
    },
    885341: function (e, i) {
      var n = {
        lessThanXSeconds: {
          one: "meno di un secondo",
          other: "meno di {{count}} secondi",
        },
        xSeconds: { one: "un secondo", other: "{{count}} secondi" },
        halfAMinute: "alcuni secondi",
        lessThanXMinutes: {
          one: "meno di un minuto",
          other: "meno di {{count}} minuti",
        },
        xMinutes: { one: "un minuto", other: "{{count}} minuti" },
        aboutXHours: { one: "circa un'ora", other: "circa {{count}} ore" },
        xHours: { one: "un'ora", other: "{{count}} ore" },
        xDays: { one: "un giorno", other: "{{count}} giorni" },
        aboutXWeeks: {
          one: "circa una settimana",
          other: "circa {{count}} settimane",
        },
        xWeeks: { one: "una settimana", other: "{{count}} settimane" },
        aboutXMonths: { one: "circa un mese", other: "circa {{count}} mesi" },
        xMonths: { one: "un mese", other: "{{count}} mesi" },
        aboutXYears: { one: "circa un anno", other: "circa {{count}} anni" },
        xYears: { one: "un anno", other: "{{count}} anni" },
        overXYears: {
          one: "pi\xf9 di un anno",
          other: "pi\xf9 di {{count}} anni",
        },
        almostXYears: { one: "quasi un anno", other: "quasi {{count}} anni" },
      };
      i.Z = function (e, i, t) {
        var a,
          o = n[e];
        if (
          ((a =
            "string" == typeof o
              ? o
              : 1 === i
                ? o.one
                : o.other.replace("{{count}}", i.toString())),
          null != t && t.addSuffix)
        )
          return t.comparison && t.comparison > 0 ? "tra " + a : a + " fa";
        return a;
      };
    },
    872971: function (e, i, n) {
      var t = n(261168),
        a = {
          date: (0, t.Z)({
            formats: {
              full: "EEEE d MMMM y",
              long: "d MMMM y",
              medium: "d MMM y",
              short: "dd/MM/y",
            },
            defaultWidth: "full",
          }),
          time: (0, t.Z)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, t.Z)({
            formats: {
              full: "{{date}} {{time}}",
              long: "{{date}} {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
          }),
        };
      i.Z = a;
    },
    658403: function (e, i, n) {
      var t = n(757490),
        a = [
          "domenica",
          "luned\xec",
          "marted\xec",
          "mercoled\xec",
          "gioved\xec",
          "venerd\xec",
          "sabato",
        ];
      function o(e) {
        return "'" + a[e] + " alle' p";
      }
      var r = {
        lastWeek: function (e, i, n) {
          var r = e.getUTCDay();
          return (0, t.Z)(e, i, n)
            ? o(r)
            : (function (e) {
                if (0 === e) return "'domenica scorsa alle' p";
                return "'" + a[e] + " scorso alle' p";
              })(r);
        },
        yesterday: "'ieri alle' p",
        today: "'oggi alle' p",
        tomorrow: "'domani alle' p",
        nextWeek: function (e, i, n) {
          var r = e.getUTCDay();
          return (0, t.Z)(e, i, n)
            ? o(r)
            : (function (e) {
                if (0 === e) return "'domenica prossima alle' p";
                return "'" + a[e] + " prossimo alle' p";
              })(r);
        },
        other: "P",
      };
      i.Z = function (e, i, n, t) {
        var a = r[e];
        return "function" == typeof a ? a(i, n, t) : a;
      };
    },
    192154: function (e, i, n) {
      var t = n(799761),
        a = {
          ordinalNumber: function (e, i) {
            return String(Number(e));
          },
          era: (0, t.Z)({
            values: {
              narrow: ["aC", "dC"],
              abbreviated: ["a.C.", "d.C."],
              wide: ["avanti Cristo", "dopo Cristo"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, t.Z)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["T1", "T2", "T3", "T4"],
              wide: [
                "1\xba trimestre",
                "2\xba trimestre",
                "3\xba trimestre",
                "4\xba trimestre",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return e - 1;
            },
          }),
          month: (0, t.Z)({
            values: {
              narrow: [
                "G",
                "F",
                "M",
                "A",
                "M",
                "G",
                "L",
                "A",
                "S",
                "O",
                "N",
                "D",
              ],
              abbreviated: [
                "gen",
                "feb",
                "mar",
                "apr",
                "mag",
                "giu",
                "lug",
                "ago",
                "set",
                "ott",
                "nov",
                "dic",
              ],
              wide: [
                "gennaio",
                "febbraio",
                "marzo",
                "aprile",
                "maggio",
                "giugno",
                "luglio",
                "agosto",
                "settembre",
                "ottobre",
                "novembre",
                "dicembre",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, t.Z)({
            values: {
              narrow: ["D", "L", "M", "M", "G", "V", "S"],
              short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
              abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
              wide: [
                "domenica",
                "luned\xec",
                "marted\xec",
                "mercoled\xec",
                "gioved\xec",
                "venerd\xec",
                "sabato",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, t.Z)({
            values: {
              narrow: {
                am: "m.",
                pm: "p.",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "mattina",
                afternoon: "pomeriggio",
                evening: "sera",
                night: "notte",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "mattina",
                afternoon: "pomeriggio",
                evening: "sera",
                night: "notte",
              },
              wide: {
                am: "AM",
                pm: "PM",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "mattina",
                afternoon: "pomeriggio",
                evening: "sera",
                night: "notte",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "m.",
                pm: "p.",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "di mattina",
                afternoon: "del pomeriggio",
                evening: "di sera",
                night: "di notte",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "di mattina",
                afternoon: "del pomeriggio",
                evening: "di sera",
                night: "di notte",
              },
              wide: {
                am: "AM",
                pm: "PM",
                midnight: "mezzanotte",
                noon: "mezzogiorno",
                morning: "di mattina",
                afternoon: "del pomeriggio",
                evening: "di sera",
                night: "di notte",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
      i.Z = a;
    },
    769854: function (e, i, n) {
      var t = n(475637),
        a = n(925300),
        o = {
          ordinalNumber: (0, a.Z)({
            matchPattern: /^(\d+)(º)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e, 10);
            },
          }),
          era: (0, t.Z)({
            matchPatterns: {
              narrow: /^(aC|dC)/i,
              abbreviated:
                /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
              wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^a/i, /^(d|e)/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, t.Z)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^t[1234]/i,
              wide: /^[1234](º)? trimestre/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: (0, t.Z)({
            matchPatterns: {
              narrow: /^[gfmalsond]/i,
              abbreviated:
                /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
              wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^g/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^g/i,
                /^l/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ge/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^mag/i,
                /^gi/i,
                /^l/i,
                /^ag/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, t.Z)({
            matchPatterns: {
              narrow: /^[dlmgvs]/i,
              short: /^(do|lu|ma|me|gi|ve|sa)/i,
              abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
              wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
              any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, t.Z)({
            matchPatterns: {
              narrow:
                /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
              any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mezza/i,
                noon: /^mezzo/i,
                morning: /mattina/i,
                afternoon: /pomeriggio/i,
                evening: /sera/i,
                night: /notte/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      i.Z = o;
    },
    894593: function (e, i, n) {
      n.r(i);
      var t = n(885341),
        a = n(872971),
        o = n(658403),
        r = n(192154),
        m = n(769854),
        d = {
          code: "it",
          formatDistance: t.Z,
          formatLong: a.Z,
          formatRelative: o.Z,
          localize: r.Z,
          match: m.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
      i.default = d;
    },
  },
]);
//# sourceMappingURL=a373911938e6f1ccce63.js.map
