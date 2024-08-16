"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79457"],
  {
    641794: function (i, e) {
      var a = {
          xseconds_other: "sekundė_sekundžių_sekundes",
          xminutes_one: "minutė_minutės_minutę",
          xminutes_other: "minutės_minučių_minutes",
          xhours_one: "valanda_valandos_valandą",
          xhours_other: "valandos_valandų_valandas",
          xdays_one: "diena_dienos_dieną",
          xdays_other: "dienos_dienų_dienas",
          xweeks_one: "savaitė_savaitės_savaitę",
          xweeks_other: "savaitės_savaičių_savaites",
          xmonths_one: "mėnuo_mėnesio_mėnesį",
          xmonths_other: "mėnesiai_mėnesių_mėnesius",
          xyears_one: "metai_metų_metus",
          xyears_other: "metai_metų_metus",
          about: "apie",
          over: "daugiau nei",
          almost: "beveik",
          lessthan: "mažiau nei",
        },
        t = function (i, e, a, t) {
          return e
            ? t
              ? "kelių sekundžių"
              : "kelias sekundes"
            : "kelios sekundės";
        },
        r = function (i, e, a, t) {
          return e ? (t ? o(a)[1] : o(a)[2]) : o(a)[0];
        },
        n = function (i, e, a, t) {
          var n = i + " ";
          if (1 === i) return n + r(i, e, a, t);
          if (!e) return n + (s(i) ? o(a)[1] : o(a)[0]);
          return t ? n + o(a)[1] : n + (s(i) ? o(a)[1] : o(a)[2]);
        };
      function s(i) {
        return i % 10 == 0 || (i > 10 && i < 20);
      }
      function o(i) {
        return a[i].split("_");
      }
      var d = {
        lessThanXSeconds: { one: t, other: n },
        xSeconds: { one: t, other: n },
        halfAMinute: "pusė minutės",
        lessThanXMinutes: { one: r, other: n },
        xMinutes: { one: r, other: n },
        aboutXHours: { one: r, other: n },
        xHours: { one: r, other: n },
        xDays: { one: r, other: n },
        aboutXWeeks: { one: r, other: n },
        xWeeks: { one: r, other: n },
        aboutXMonths: { one: r, other: n },
        xMonths: { one: r, other: n },
        aboutXYears: { one: r, other: n },
        xYears: { one: r, other: n },
        overXYears: { one: r, other: n },
        almostXYears: { one: r, other: n },
      };
      e.Z = function (i, e, t) {
        var r,
          n = i.match(/about|over|almost|lessthan/i),
          s = n ? i.replace(n[0], "") : i,
          o =
            (null == t ? void 0 : t.comparison) !== void 0 && t.comparison > 0,
          u = d[i];
        if (
          ((r =
            "string" == typeof u
              ? u
              : 1 === e
                ? u.one(
                    e,
                    (null == t ? void 0 : t.addSuffix) === !0,
                    s.toLowerCase() + "_one",
                    o,
                  )
                : u.other(
                    e,
                    (null == t ? void 0 : t.addSuffix) === !0,
                    s.toLowerCase() + "_other",
                    o,
                  )),
          n && (r = a[n[0].toLowerCase()] + " " + r),
          null != t && t.addSuffix)
        )
          return t.comparison && t.comparison > 0 ? "po " + r : "prieš " + r;
        return r;
      };
    },
    146086: function (i, e, a) {
      var t = a(261168),
        r = {
          date: (0, t.Z)({
            formats: {
              full: "y 'm'. MMMM d 'd'., EEEE",
              long: "y 'm'. MMMM d 'd'.",
              medium: "y-MM-dd",
              short: "y-MM-dd",
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
      e.Z = r;
    },
    812500: function (i, e) {
      var a = {
        lastWeek: "'Praėjusį' eeee p",
        yesterday: "'Vakar' p",
        today: "'Šiandien' p",
        tomorrow: "'Rytoj' p",
        nextWeek: "eeee p",
        other: "P",
      };
      e.Z = function (i, e, t, r) {
        return a[i];
      };
    },
    349936: function (i, e, a) {
      var t = a(799761),
        r = {
          ordinalNumber: function (i, e) {
            return Number(i) + "-oji";
          },
          era: (0, t.Z)({
            values: {
              narrow: ["pr. Kr.", "po Kr."],
              abbreviated: ["pr. Kr.", "po Kr."],
              wide: ["prieš Kristų", "po Kristaus"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, t.Z)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."],
              wide: [
                "I ketvirtis",
                "II ketvirtis",
                "III ketvirtis",
                "IV ketvirtis",
              ],
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["I k.", "II k.", "III k.", "IV k."],
              wide: [
                "I ketvirtis",
                "II ketvirtis",
                "III ketvirtis",
                "IV ketvirtis",
              ],
            },
            defaultFormattingWidth: "wide",
            argumentCallback: function (i) {
              return i - 1;
            },
          }),
          month: (0, t.Z)({
            values: {
              narrow: [
                "S",
                "V",
                "K",
                "B",
                "G",
                "B",
                "L",
                "R",
                "R",
                "S",
                "L",
                "G",
              ],
              abbreviated: [
                "saus.",
                "vas.",
                "kov.",
                "bal.",
                "geg.",
                "birž.",
                "liep.",
                "rugp.",
                "rugs.",
                "spal.",
                "lapkr.",
                "gruod.",
              ],
              wide: [
                "sausis",
                "vasaris",
                "kovas",
                "balandis",
                "gegužė",
                "birželis",
                "liepa",
                "rugpjūtis",
                "rugsėjis",
                "spalis",
                "lapkritis",
                "gruodis",
              ],
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: [
                "S",
                "V",
                "K",
                "B",
                "G",
                "B",
                "L",
                "R",
                "R",
                "S",
                "L",
                "G",
              ],
              abbreviated: [
                "saus.",
                "vas.",
                "kov.",
                "bal.",
                "geg.",
                "birž.",
                "liep.",
                "rugp.",
                "rugs.",
                "spal.",
                "lapkr.",
                "gruod.",
              ],
              wide: [
                "sausio",
                "vasario",
                "kovo",
                "balandžio",
                "gegužės",
                "birželio",
                "liepos",
                "rugpjūčio",
                "rugsėjo",
                "spalio",
                "lapkričio",
                "gruodžio",
              ],
            },
            defaultFormattingWidth: "wide",
          }),
          day: (0, t.Z)({
            values: {
              narrow: ["S", "P", "A", "T", "K", "P", "Š"],
              short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
              abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
              wide: [
                "sekmadienis",
                "pirmadienis",
                "antradienis",
                "trečiadienis",
                "ketvirtadienis",
                "penktadienis",
                "šeštadienis",
              ],
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: ["S", "P", "A", "T", "K", "P", "Š"],
              short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
              abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
              wide: [
                "sekmadienį",
                "pirmadienį",
                "antradienį",
                "trečiadienį",
                "ketvirtadienį",
                "penktadienį",
                "šeštadienį",
              ],
            },
            defaultFormattingWidth: "wide",
          }),
          dayPeriod: (0, t.Z)({
            values: {
              narrow: {
                am: "pr. p.",
                pm: "pop.",
                midnight: "vidurnaktis",
                noon: "vidurdienis",
                morning: "rytas",
                afternoon: "diena",
                evening: "vakaras",
                night: "naktis",
              },
              abbreviated: {
                am: "priešpiet",
                pm: "popiet",
                midnight: "vidurnaktis",
                noon: "vidurdienis",
                morning: "rytas",
                afternoon: "diena",
                evening: "vakaras",
                night: "naktis",
              },
              wide: {
                am: "priešpiet",
                pm: "popiet",
                midnight: "vidurnaktis",
                noon: "vidurdienis",
                morning: "rytas",
                afternoon: "diena",
                evening: "vakaras",
                night: "naktis",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "pr. p.",
                pm: "pop.",
                midnight: "vidurnaktis",
                noon: "perpiet",
                morning: "rytas",
                afternoon: "popietė",
                evening: "vakaras",
                night: "naktis",
              },
              abbreviated: {
                am: "priešpiet",
                pm: "popiet",
                midnight: "vidurnaktis",
                noon: "perpiet",
                morning: "rytas",
                afternoon: "popietė",
                evening: "vakaras",
                night: "naktis",
              },
              wide: {
                am: "priešpiet",
                pm: "popiet",
                midnight: "vidurnaktis",
                noon: "perpiet",
                morning: "rytas",
                afternoon: "popietė",
                evening: "vakaras",
                night: "naktis",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
      e.Z = r;
    },
    484928: function (i, e, a) {
      var t = a(475637),
        r = a(925300),
        n = {
          ordinalNumber: (0, r.Z)({
            matchPattern: /^(\d+)(-oji)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (i) {
              return parseInt(i, 10);
            },
          }),
          era: (0, t.Z)({
            matchPatterns: {
              narrow: /^p(r|o)\.?\s?(kr\.?|me)/i,
              abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,
              wide: /^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              wide: [/prieš/i, /(po|mūsų)/i],
              any: [/^pr/i, /^(po|m)/i],
            },
            defaultParseWidth: "any",
          }),
          quarter: (0, t.Z)({
            matchPatterns: {
              narrow: /^([1234])/i,
              abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i,
              wide: /^(I|II|III|IV)\s?ketvirtis/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/1/i, /2/i, /3/i, /4/i],
              any: [/I$/i, /II$/i, /III/i, /IV/i],
            },
            defaultParseWidth: "any",
            valueCallback: function (i) {
              return i + 1;
            },
          }),
          month: (0, t.Z)({
            matchPatterns: {
              narrow: /^[svkbglr]/i,
              abbreviated:
                /^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,
              wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^s/i,
                /^v/i,
                /^k/i,
                /^b/i,
                /^g/i,
                /^b/i,
                /^l/i,
                /^r/i,
                /^r/i,
                /^s/i,
                /^l/i,
                /^g/i,
              ],
              any: [
                /^saus/i,
                /^vas/i,
                /^kov/i,
                /^bal/i,
                /^geg/i,
                /^birž/i,
                /^liep/i,
                /^rugp/i,
                /^rugs/i,
                /^spal/i,
                /^lapkr/i,
                /^gruod/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, t.Z)({
            matchPatterns: {
              narrow: /^[spatkš]/i,
              short: /^(sk|pr|an|tr|kt|pn|št)/i,
              abbreviated: /^(sk|pr|an|tr|kt|pn|št)/i,
              wide: /^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i],
              wide: [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i],
              any: [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, t.Z)({
            matchPatterns: {
              narrow:
                /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,
              any: /^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              narrow: {
                am: /^pr/i,
                pm: /^pop./i,
                midnight: /^vidurnaktis/i,
                noon: /^(vidurdienis|perp)/i,
                morning: /rytas/i,
                afternoon: /(die|popietė)/i,
                evening: /vakaras/i,
                night: /naktis/i,
              },
              any: {
                am: /^pr/i,
                pm: /^popiet$/i,
                midnight: /^vidurnaktis/i,
                noon: /^(vidurdienis|perp)/i,
                morning: /rytas/i,
                afternoon: /(die|popietė)/i,
                evening: /vakaras/i,
                night: /naktis/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      e.Z = n;
    },
    161316: function (i, e, a) {
      a.r(e);
      var t = a(641794),
        r = a(146086),
        n = a(812500),
        s = a(349936),
        o = a(484928),
        d = {
          code: "lt",
          formatDistance: t.Z,
          formatLong: r.Z,
          formatRelative: n.Z,
          localize: s.Z,
          match: o.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
      e.default = d;
    },
  },
]);
//# sourceMappingURL=1eccc1c23e788d863195.js.map
