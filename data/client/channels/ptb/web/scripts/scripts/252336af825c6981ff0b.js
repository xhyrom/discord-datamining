"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19726"],
  {
    757490: function (n, i, e) {
      e.d(i, {
        Z: function () {
          return a;
        },
      });
      var o = e(951516),
        t = e(780603);
      function a(n, i, e) {
        (0, o.Z)(2, arguments);
        var a = (0, t.Z)(n, e),
          r = (0, t.Z)(i, e);
        return a.getTime() === r.getTime();
      }
    },
    449921: function (n, i) {
      var e = {
        lessThanXSeconds: {
          one: {
            regular: "mniej niż sekunda",
            past: "mniej niż sekundę",
            future: "mniej niż sekundę",
          },
          twoFour: "mniej niż {{count}} sekundy",
          other: "mniej niż {{count}} sekund",
        },
        xSeconds: {
          one: { regular: "sekunda", past: "sekundę", future: "sekundę" },
          twoFour: "{{count}} sekundy",
          other: "{{count}} sekund",
        },
        halfAMinute: {
          one: "p\xf3ł minuty",
          twoFour: "p\xf3ł minuty",
          other: "p\xf3ł minuty",
        },
        lessThanXMinutes: {
          one: {
            regular: "mniej niż minuta",
            past: "mniej niż minutę",
            future: "mniej niż minutę",
          },
          twoFour: "mniej niż {{count}} minuty",
          other: "mniej niż {{count}} minut",
        },
        xMinutes: {
          one: { regular: "minuta", past: "minutę", future: "minutę" },
          twoFour: "{{count}} minuty",
          other: "{{count}} minut",
        },
        aboutXHours: {
          one: {
            regular: "około godziny",
            past: "około godziny",
            future: "około godzinę",
          },
          twoFour: "około {{count}} godziny",
          other: "około {{count}} godzin",
        },
        xHours: {
          one: { regular: "godzina", past: "godzinę", future: "godzinę" },
          twoFour: "{{count}} godziny",
          other: "{{count}} godzin",
        },
        xDays: {
          one: { regular: "dzień", past: "dzień", future: "1 dzień" },
          twoFour: "{{count}} dni",
          other: "{{count}} dni",
        },
        aboutXWeeks: {
          one: "około tygodnia",
          twoFour: "około {{count}} tygodni",
          other: "około {{count}} tygodni",
        },
        xWeeks: {
          one: "tydzień",
          twoFour: "{{count}} tygodnie",
          other: "{{count}} tygodni",
        },
        aboutXMonths: {
          one: "około miesiąc",
          twoFour: "około {{count}} miesiące",
          other: "około {{count}} miesięcy",
        },
        xMonths: {
          one: "miesiąc",
          twoFour: "{{count}} miesiące",
          other: "{{count}} miesięcy",
        },
        aboutXYears: {
          one: "około rok",
          twoFour: "około {{count}} lata",
          other: "około {{count}} lat",
        },
        xYears: {
          one: "rok",
          twoFour: "{{count}} lata",
          other: "{{count}} lat",
        },
        overXYears: {
          one: "ponad rok",
          twoFour: "ponad {{count}} lata",
          other: "ponad {{count}} lat",
        },
        almostXYears: {
          one: "prawie rok",
          twoFour: "prawie {{count}} lata",
          other: "prawie {{count}} lat",
        },
      };
      function o(n, i, e) {
        var o = (function (n, i) {
          if (1 === i) return n.one;
          var e = i % 100;
          if (e <= 20 && e > 10) return n.other;
          var o = e % 10;
          return o >= 2 && o <= 4 ? n.twoFour : n.other;
        })(n, i);
        return ("string" == typeof o ? o : o[e]).replace(
          "{{count}}",
          String(i),
        );
      }
      i.Z = function (n, i, t) {
        var a = e[n];
        return null != t && t.addSuffix
          ? t.comparison && t.comparison > 0
            ? "za " + o(a, i, "future")
            : o(a, i, "past") + " temu"
          : o(a, i, "regular");
      };
    },
    686666: function (n, i, e) {
      var o = e(261168),
        t = {
          date: (0, o.Z)({
            formats: {
              full: "EEEE, do MMMM y",
              long: "do MMMM y",
              medium: "do MMM y",
              short: "dd.MM.y",
            },
            defaultWidth: "full",
          }),
          time: (0, o.Z)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, o.Z)({
            formats: {
              full: "{{date}} {{time}}",
              long: "{{date}} {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        };
      i.Z = t;
    },
    920658: function (n, i, e) {
      var o = e(757490),
        t = { masculine: "ostatni", feminine: "ostatnia" },
        a = { masculine: "ten", feminine: "ta" },
        r = { masculine: "następny", feminine: "następna" },
        u = {
          0: "feminine",
          1: "masculine",
          2: "masculine",
          3: "feminine",
          4: "masculine",
          5: "masculine",
          6: "feminine",
        };
      function s(n, i, e, s) {
        if ((0, o.Z)(i, e, s)) d = a;
        else if ("lastWeek" === n) d = t;
        else if ("nextWeek" === n) d = r;
        else throw Error("Cannot determine adjectives for token ".concat(n));
        var d,
          c = d[u[i.getUTCDay()]];
        return "'".concat(c, "' eeee 'o' p");
      }
      var d = {
        lastWeek: s,
        yesterday: "'wczoraj o' p",
        today: "'dzisiaj o' p",
        tomorrow: "'jutro o' p",
        nextWeek: s,
        other: "P",
      };
      i.Z = function (n, i, e, o) {
        var t = d[n];
        return "function" == typeof t ? t(n, i, e, o) : t;
      };
    },
    81724: function (n, i, e) {
      var o = e(799761),
        t = {
          ordinalNumber: function (n, i) {
            return String(n);
          },
          era: (0, o.Z)({
            values: {
              narrow: ["p.n.e.", "n.e."],
              abbreviated: ["p.n.e.", "n.e."],
              wide: ["przed naszą erą", "naszej ery"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, o.Z)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
              wide: ["I kwartał", "II kwartał", "III kwartał", "IV kwartał"],
            },
            defaultWidth: "wide",
            argumentCallback: function (n) {
              return n - 1;
            },
          }),
          month: (0, o.Z)({
            values: {
              narrow: [
                "S",
                "L",
                "M",
                "K",
                "M",
                "C",
                "L",
                "S",
                "W",
                "P",
                "L",
                "G",
              ],
              abbreviated: [
                "sty",
                "lut",
                "mar",
                "kwi",
                "maj",
                "cze",
                "lip",
                "sie",
                "wrz",
                "paź",
                "lis",
                "gru",
              ],
              wide: [
                "styczeń",
                "luty",
                "marzec",
                "kwiecień",
                "maj",
                "czerwiec",
                "lipiec",
                "sierpień",
                "wrzesień",
                "październik",
                "listopad",
                "grudzień",
              ],
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: [
                "s",
                "l",
                "m",
                "k",
                "m",
                "c",
                "l",
                "s",
                "w",
                "p",
                "l",
                "g",
              ],
              abbreviated: [
                "sty",
                "lut",
                "mar",
                "kwi",
                "maj",
                "cze",
                "lip",
                "sie",
                "wrz",
                "paź",
                "lis",
                "gru",
              ],
              wide: [
                "stycznia",
                "lutego",
                "marca",
                "kwietnia",
                "maja",
                "czerwca",
                "lipca",
                "sierpnia",
                "września",
                "października",
                "listopada",
                "grudnia",
              ],
            },
            defaultFormattingWidth: "wide",
          }),
          day: (0, o.Z)({
            values: {
              narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
              short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
              abbreviated: [
                "niedz.",
                "pon.",
                "wt.",
                "śr.",
                "czw.",
                "pt.",
                "sob.",
              ],
              wide: [
                "niedziela",
                "poniedziałek",
                "wtorek",
                "środa",
                "czwartek",
                "piątek",
                "sobota",
              ],
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: ["n", "p", "w", "ś", "c", "p", "s"],
              short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
              abbreviated: [
                "niedz.",
                "pon.",
                "wt.",
                "śr.",
                "czw.",
                "pt.",
                "sob.",
              ],
              wide: [
                "niedziela",
                "poniedziałek",
                "wtorek",
                "środa",
                "czwartek",
                "piątek",
                "sobota",
              ],
            },
            defaultFormattingWidth: "wide",
          }),
          dayPeriod: (0, o.Z)({
            values: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "p\xf3łn.",
                noon: "poł",
                morning: "rano",
                afternoon: "popoł.",
                evening: "wiecz.",
                night: "noc",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "p\xf3łnoc",
                noon: "południe",
                morning: "rano",
                afternoon: "popołudnie",
                evening: "wiecz\xf3r",
                night: "noc",
              },
              wide: {
                am: "AM",
                pm: "PM",
                midnight: "p\xf3łnoc",
                noon: "południe",
                morning: "rano",
                afternoon: "popołudnie",
                evening: "wiecz\xf3r",
                night: "noc",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "o p\xf3łn.",
                noon: "w poł.",
                morning: "rano",
                afternoon: "po poł.",
                evening: "wiecz.",
                night: "w nocy",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "o p\xf3łnocy",
                noon: "w południe",
                morning: "rano",
                afternoon: "po południu",
                evening: "wieczorem",
                night: "w nocy",
              },
              wide: {
                am: "AM",
                pm: "PM",
                midnight: "o p\xf3łnocy",
                noon: "w południe",
                morning: "rano",
                afternoon: "po południu",
                evening: "wieczorem",
                night: "w nocy",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
      i.Z = t;
    },
    499747: function (n, i, e) {
      var o = e(475637),
        t = e(925300),
        a = {
          ordinalNumber: (0, t.Z)({
            matchPattern: /^(\d+)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (n) {
              return parseInt(n, 10);
            },
          }),
          era: (0, o.Z)({
            matchPatterns: {
              narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
              abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
              wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^p/i, /^n/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, o.Z)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
              wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/1/i, /2/i, /3/i, /4/i],
              any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i],
            },
            defaultParseWidth: "any",
            valueCallback: function (n) {
              return n + 1;
            },
          }),
          month: (0, o.Z)({
            matchPatterns: {
              narrow: /^[slmkcwpg]/i,
              abbreviated:
                /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
              wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^s/i,
                /^l/i,
                /^m/i,
                /^k/i,
                /^m/i,
                /^c/i,
                /^l/i,
                /^s/i,
                /^w/i,
                /^p/i,
                /^l/i,
                /^g/i,
              ],
              any: [
                /^st/i,
                /^lu/i,
                /^mar/i,
                /^k/i,
                /^maj/i,
                /^c/i,
                /^lip/i,
                /^si/i,
                /^w/i,
                /^p/i,
                /^lis/i,
                /^g/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, o.Z)({
            matchPatterns: {
              narrow: /^[npwścs]/i,
              short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
              abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
              wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
              abbreviated: [
                /^n/i,
                /^po/i,
                /^w/i,
                /^(ś|s)r/i,
                /^c/i,
                /^pt/i,
                /^so/i,
              ],
              any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, o.Z)({
            matchPatterns: {
              narrow:
                /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
              any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              narrow: {
                am: /^a$/i,
                pm: /^p$/i,
                midnight: /pó(ł|l)n/i,
                noon: /po(ł|l)/i,
                morning: /rano/i,
                afternoon: /po\s*po(ł|l)/i,
                evening: /wiecz/i,
                night: /noc/i,
              },
              any: {
                am: /^am/i,
                pm: /^pm/i,
                midnight: /pó(ł|l)n/i,
                noon: /po(ł|l)/i,
                morning: /rano/i,
                afternoon: /po\s*po(ł|l)/i,
                evening: /wiecz/i,
                night: /noc/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      i.Z = a;
    },
    908312: function (n, i, e) {
      e.r(i);
      var o = e(449921),
        t = e(686666),
        a = e(920658),
        r = e(81724),
        u = e(499747),
        s = {
          code: "pl",
          formatDistance: o.Z,
          formatLong: t.Z,
          formatRelative: a.Z,
          localize: r.Z,
          match: u.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
      i.default = s;
    },
  },
]);
//# sourceMappingURL=252336af825c6981ff0b.js.map
