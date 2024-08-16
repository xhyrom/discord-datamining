"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27381"],
  {
    998985: function (a, e) {
      function i(a) {
        return a.replace(/sekuntia?/, "sekunnin");
      }
      function t(a) {
        return a.replace(/minuuttia?/, "minuutin");
      }
      function n(a) {
        return a.replace(/tuntia?/, "tunnin");
      }
      function u(a) {
        return a.replace(/(viikko|viikkoa)/, "viikon");
      }
      function o(a) {
        return a.replace(/(kuukausi|kuukautta)/, "kuukauden");
      }
      function r(a) {
        return a.replace(/(vuosi|vuotta)/, "vuoden");
      }
      var l = {
        lessThanXSeconds: {
          one: "alle sekunti",
          other: "alle {{count}} sekuntia",
          futureTense: i,
        },
        xSeconds: {
          one: "sekunti",
          other: "{{count}} sekuntia",
          futureTense: i,
        },
        halfAMinute: {
          one: "puoli minuuttia",
          other: "puoli minuuttia",
          futureTense: function (a) {
            return "puolen minuutin";
          },
        },
        lessThanXMinutes: {
          one: "alle minuutti",
          other: "alle {{count}} minuuttia",
          futureTense: t,
        },
        xMinutes: {
          one: "minuutti",
          other: "{{count}} minuuttia",
          futureTense: t,
        },
        aboutXHours: {
          one: "noin tunti",
          other: "noin {{count}} tuntia",
          futureTense: n,
        },
        xHours: { one: "tunti", other: "{{count}} tuntia", futureTense: n },
        xDays: {
          one: "p\xe4iv\xe4",
          other: "{{count}} p\xe4iv\xe4\xe4",
          futureTense: function (a) {
            return a.replace(/päivää?/, "p\xe4iv\xe4n");
          },
        },
        aboutXWeeks: {
          one: "noin viikko",
          other: "noin {{count}} viikkoa",
          futureTense: u,
        },
        xWeeks: { one: "viikko", other: "{{count}} viikkoa", futureTense: u },
        aboutXMonths: {
          one: "noin kuukausi",
          other: "noin {{count}} kuukautta",
          futureTense: o,
        },
        xMonths: {
          one: "kuukausi",
          other: "{{count}} kuukautta",
          futureTense: o,
        },
        aboutXYears: {
          one: "noin vuosi",
          other: "noin {{count}} vuotta",
          futureTense: r,
        },
        xYears: { one: "vuosi", other: "{{count}} vuotta", futureTense: r },
        overXYears: {
          one: "yli vuosi",
          other: "yli {{count}} vuotta",
          futureTense: r,
        },
        almostXYears: {
          one: "l\xe4hes vuosi",
          other: "l\xe4hes {{count}} vuotta",
          futureTense: r,
        },
      };
      e.Z = function (a, e, i) {
        var t = l[a],
          n = 1 === e ? t.one : t.other.replace("{{count}}", String(e));
        if (null != i && i.addSuffix)
          return i.comparison && i.comparison > 0
            ? t.futureTense(n) + " kuluttua"
            : n + " sitten";
        return n;
      };
    },
    717982: function (a, e, i) {
      var t = i(261168),
        n = {
          date: (0, t.Z)({
            formats: {
              full: "eeee d. MMMM y",
              long: "d. MMMM y",
              medium: "d. MMM y",
              short: "d.M.y",
            },
            defaultWidth: "full",
          }),
          time: (0, t.Z)({
            formats: {
              full: "HH.mm.ss zzzz",
              long: "HH.mm.ss z",
              medium: "HH.mm.ss",
              short: "HH.mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, t.Z)({
            formats: {
              full: "{{date}} 'klo' {{time}}",
              long: "{{date}} 'klo' {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
          }),
        };
      e.Z = n;
    },
    127012: function (a, e) {
      var i = {
        lastWeek: "'viime' eeee 'klo' p",
        yesterday: "'eilen klo' p",
        today: "'t\xe4n\xe4\xe4n klo' p",
        tomorrow: "'huomenna klo' p",
        nextWeek: "'ensi' eeee 'klo' p",
        other: "P",
      };
      e.Z = function (a, e, t, n) {
        return i[a];
      };
    },
    110721: function (a, e, i) {
      var t = i(799761),
        n = {
          narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
          abbreviated: [
            "tammi",
            "helmi",
            "maalis",
            "huhti",
            "touko",
            "kes\xe4",
            "hein\xe4",
            "elo",
            "syys",
            "loka",
            "marras",
            "joulu",
          ],
          wide: [
            "tammikuu",
            "helmikuu",
            "maaliskuu",
            "huhtikuu",
            "toukokuu",
            "kes\xe4kuu",
            "hein\xe4kuu",
            "elokuu",
            "syyskuu",
            "lokakuu",
            "marraskuu",
            "joulukuu",
          ],
        },
        u = {
          narrow: n.narrow,
          abbreviated: n.abbreviated,
          wide: [
            "tammikuuta",
            "helmikuuta",
            "maaliskuuta",
            "huhtikuuta",
            "toukokuuta",
            "kes\xe4kuuta",
            "hein\xe4kuuta",
            "elokuuta",
            "syyskuuta",
            "lokakuuta",
            "marraskuuta",
            "joulukuuta",
          ],
        },
        o = {
          narrow: ["S", "M", "T", "K", "T", "P", "L"],
          short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
          abbreviated: [
            "sunn.",
            "maan.",
            "tiis.",
            "kesk.",
            "torst.",
            "perj.",
            "la",
          ],
          wide: [
            "sunnuntai",
            "maanantai",
            "tiistai",
            "keskiviikko",
            "torstai",
            "perjantai",
            "lauantai",
          ],
        },
        r = {
          narrow: o.narrow,
          short: o.short,
          abbreviated: o.abbreviated,
          wide: [
            "sunnuntaina",
            "maanantaina",
            "tiistaina",
            "keskiviikkona",
            "torstaina",
            "perjantaina",
            "lauantaina",
          ],
        },
        l = {
          ordinalNumber: function (a, e) {
            return Number(a) + ".";
          },
          era: (0, t.Z)({
            values: {
              narrow: ["eaa.", "jaa."],
              abbreviated: ["eaa.", "jaa."],
              wide: ["ennen ajanlaskun alkua", "j\xe4lkeen ajanlaskun alun"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, t.Z)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: [
                "1. kvartaali",
                "2. kvartaali",
                "3. kvartaali",
                "4. kvartaali",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (a) {
              return a - 1;
            },
          }),
          month: (0, t.Z)({
            values: n,
            defaultWidth: "wide",
            formattingValues: u,
            defaultFormattingWidth: "wide",
          }),
          day: (0, t.Z)({
            values: o,
            defaultWidth: "wide",
            formattingValues: r,
            defaultFormattingWidth: "wide",
          }),
          dayPeriod: (0, t.Z)({
            values: {
              narrow: {
                am: "ap",
                pm: "ip",
                midnight: "keskiy\xf6",
                noon: "keskip\xe4iv\xe4",
                morning: "ap",
                afternoon: "ip",
                evening: "illalla",
                night: "y\xf6ll\xe4",
              },
              abbreviated: {
                am: "ap",
                pm: "ip",
                midnight: "keskiy\xf6",
                noon: "keskip\xe4iv\xe4",
                morning: "ap",
                afternoon: "ip",
                evening: "illalla",
                night: "y\xf6ll\xe4",
              },
              wide: {
                am: "ap",
                pm: "ip",
                midnight: "keskiy\xf6ll\xe4",
                noon: "keskip\xe4iv\xe4ll\xe4",
                morning: "aamup\xe4iv\xe4ll\xe4",
                afternoon: "iltap\xe4iv\xe4ll\xe4",
                evening: "illalla",
                night: "y\xf6ll\xe4",
              },
            },
            defaultWidth: "wide",
          }),
        };
      e.Z = l;
    },
    602099: function (a, e, i) {
      var t = i(475637),
        n = i(925300),
        u = {
          ordinalNumber: (0, n.Z)({
            matchPattern: /^(\d+)(\.)/i,
            parsePattern: /\d+/i,
            valueCallback: function (a) {
              return parseInt(a, 10);
            },
          }),
          era: (0, t.Z)({
            matchPatterns: {
              narrow: /^(e|j)/i,
              abbreviated: /^(eaa.|jaa.)/i,
              wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^e/i, /^j/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, t.Z)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234]\.? kvartaali/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (a) {
              return a + 1;
            },
          }),
          month: (0, t.Z)({
            matchPatterns: {
              narrow: /^[thmkeslj]/i,
              abbreviated:
                /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,
              wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^t/i,
                /^h/i,
                /^m/i,
                /^h/i,
                /^t/i,
                /^k/i,
                /^h/i,
                /^e/i,
                /^s/i,
                /^l/i,
                /^m/i,
                /^j/i,
              ],
              any: [
                /^ta/i,
                /^hel/i,
                /^maa/i,
                /^hu/i,
                /^to/i,
                /^k/i,
                /^hei/i,
                /^e/i,
                /^s/i,
                /^l/i,
                /^mar/i,
                /^j/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, t.Z)({
            matchPatterns: {
              narrow: /^[smtkpl]/i,
              short: /^(su|ma|ti|ke|to|pe|la)/i,
              abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
              wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i],
              any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, t.Z)({
            matchPatterns: {
              narrow:
                /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
              any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^ap/i,
                pm: /^ip/i,
                midnight: /^keskiyö/i,
                noon: /^keskipäivä/i,
                morning: /aamupäivällä/i,
                afternoon: /iltapäivällä/i,
                evening: /illalla/i,
                night: /yöllä/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      e.Z = u;
    },
    410217: function (a, e, i) {
      i.r(e);
      var t = i(998985),
        n = i(717982),
        u = i(127012),
        o = i(110721),
        r = i(602099),
        l = {
          code: "fi",
          formatDistance: t.Z,
          formatLong: n.Z,
          formatRelative: u.Z,
          localize: o.Z,
          match: r.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
      e.default = l;
    },
  },
]);
//# sourceMappingURL=198fd0a121393e4df859.js.map
