"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81843"],
  {
    112147: function (e, t) {
      var a = {
          about: "k\xf6r\xfclbel\xfcl",
          over: "t\xf6bb mint",
          almost: "majdnem",
          lessthan: "kevesebb mint",
        },
        i = {
          xseconds: " m\xe1sodperc",
          halfaminute: "f\xe9l perc",
          xminutes: " perc",
          xhours: " \xf3ra",
          xdays: " nap",
          xweeks: " h\xe9t",
          xmonths: " h\xf3nap",
          xyears: " \xe9v",
        },
        n = {
          xseconds: {
            "-1": " m\xe1sodperccel ezelőtt",
            1: " m\xe1sodperc m\xfalva",
            0: " m\xe1sodperce",
          },
          halfaminute: {
            "-1": "f\xe9l perccel ezelőtt",
            1: "f\xe9l perc m\xfalva",
            0: "f\xe9l perce",
          },
          xminutes: {
            "-1": " perccel ezelőtt",
            1: " perc m\xfalva",
            0: " perce",
          },
          xhours: {
            "-1": " \xf3r\xe1val ezelőtt",
            1: " \xf3ra m\xfalva",
            0: " \xf3r\xe1ja",
          },
          xdays: { "-1": " nappal ezelőtt", 1: " nap m\xfalva", 0: " napja" },
          xweeks: {
            "-1": " h\xe9ttel ezelőtt",
            1: " h\xe9t m\xfalva",
            0: " hete",
          },
          xmonths: {
            "-1": " h\xf3nappal ezelőtt",
            1: " h\xf3nap m\xfalva",
            0: " h\xf3napja",
          },
          xyears: {
            "-1": " \xe9vvel ezelőtt",
            1: " \xe9v m\xfalva",
            0: " \xe9ve",
          },
        };
      t.Z = function (e, t, r) {
        var s = e.match(/about|over|almost|lessthan/i),
          d = s ? e.replace(s[0], "") : e,
          o = (null == r ? void 0 : r.addSuffix) === !0,
          l = d.toLowerCase(),
          u = (null == r ? void 0 : r.comparison) || 0,
          m = o ? n[l][u] : i[l],
          c = "halfaminute" === l ? m : t + m;
        return s && (c = a[s[0].toLowerCase()] + " " + c), c;
      };
    },
    334778: function (e, t, a) {
      var i = a(261168),
        n = {
          date: (0, i.Z)({
            formats: {
              full: "y. MMMM d., EEEE",
              long: "y. MMMM d.",
              medium: "y. MMM d.",
              short: "y. MM. dd.",
            },
            defaultWidth: "full",
          }),
          time: (0, i.Z)({
            formats: {
              full: "H:mm:ss zzzz",
              long: "H:mm:ss z",
              medium: "H:mm:ss",
              short: "H:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, i.Z)({
            formats: {
              full: "{{date}} {{time}}",
              long: "{{date}} {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
          }),
        };
      t.Z = n;
    },
    209576: function (e, t) {
      var a = [
        "vas\xe1rnap",
        "h\xe9tfőn",
        "kedden",
        "szerd\xe1n",
        "cs\xfct\xf6rt\xf6k\xf6n",
        "p\xe9nteken",
        "szombaton",
      ];
      function i(e) {
        return function (t) {
          var i = a[t.getUTCDay()];
          return "".concat(e ? "" : "'m\xfalt' ", "'").concat(i, "' p'-kor'");
        };
      }
      var n = {
        lastWeek: i(!1),
        yesterday: "'tegnap' p'-kor'",
        today: "'ma' p'-kor'",
        tomorrow: "'holnap' p'-kor'",
        nextWeek: i(!0),
        other: "P",
      };
      t.Z = function (e, t) {
        var a = n[e];
        return "function" == typeof a ? a(t) : a;
      };
    },
    691921: function (e, t, a) {
      var i = a(799761),
        n = {
          ordinalNumber: function (e, t) {
            return Number(e) + ".";
          },
          era: (0, i.Z)({
            values: {
              narrow: ["ie.", "isz."],
              abbreviated: ["i. e.", "i. sz."],
              wide: ["Krisztus előtt", "idősz\xe1m\xedt\xe1sunk szerint"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, i.Z)({
            values: {
              narrow: ["1.", "2.", "3.", "4."],
              abbreviated: [
                "1. n.\xe9v",
                "2. n.\xe9v",
                "3. n.\xe9v",
                "4. n.\xe9v",
              ],
              wide: [
                "1. negyed\xe9v",
                "2. negyed\xe9v",
                "3. negyed\xe9v",
                "4. negyed\xe9v",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return e - 1;
            },
            formattingValues: {
              narrow: ["I.", "II.", "III.", "IV."],
              abbreviated: [
                "I. n.\xe9v",
                "II. n.\xe9v",
                "III. n.\xe9v",
                "IV. n.\xe9v",
              ],
              wide: [
                "I. negyed\xe9v",
                "II. negyed\xe9v",
                "III. negyed\xe9v",
                "IV. negyed\xe9v",
              ],
            },
            defaultFormattingWidth: "wide",
          }),
          month: (0, i.Z)({
            values: {
              narrow: [
                "J",
                "F",
                "M",
                "\xc1",
                "M",
                "J",
                "J",
                "A",
                "Sz",
                "O",
                "N",
                "D",
              ],
              abbreviated: [
                "jan.",
                "febr.",
                "m\xe1rc.",
                "\xe1pr.",
                "m\xe1j.",
                "j\xfan.",
                "j\xfal.",
                "aug.",
                "szept.",
                "okt.",
                "nov.",
                "dec.",
              ],
              wide: [
                "janu\xe1r",
                "febru\xe1r",
                "m\xe1rcius",
                "\xe1prilis",
                "m\xe1jus",
                "j\xfanius",
                "j\xfalius",
                "augusztus",
                "szeptember",
                "okt\xf3ber",
                "november",
                "december",
              ],
            },
            defaultWidth: "wide",
          }),
          day: (0, i.Z)({
            values: {
              narrow: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
              short: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
              abbreviated: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
              wide: [
                "vas\xe1rnap",
                "h\xe9tfő",
                "kedd",
                "szerda",
                "cs\xfct\xf6rt\xf6k",
                "p\xe9ntek",
                "szombat",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, i.Z)({
            values: {
              narrow: {
                am: "de.",
                pm: "du.",
                midnight: "\xe9jf\xe9l",
                noon: "d\xe9l",
                morning: "reggel",
                afternoon: "du.",
                evening: "este",
                night: "\xe9jjel",
              },
              abbreviated: {
                am: "de.",
                pm: "du.",
                midnight: "\xe9jf\xe9l",
                noon: "d\xe9l",
                morning: "reggel",
                afternoon: "du.",
                evening: "este",
                night: "\xe9jjel",
              },
              wide: {
                am: "de.",
                pm: "du.",
                midnight: "\xe9jf\xe9l",
                noon: "d\xe9l",
                morning: "reggel",
                afternoon: "d\xe9lut\xe1n",
                evening: "este",
                night: "\xe9jjel",
              },
            },
            defaultWidth: "wide",
          }),
        };
      t.Z = n;
    },
    571972: function (e, t, a) {
      var i = a(475637),
        n = a(925300),
        r = {
          ordinalNumber: (0, n.Z)({
            matchPattern: /^(\d+)\.?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e, 10);
            },
          }),
          era: (0, i.Z)({
            matchPatterns: {
              narrow: /^(ie\.|isz\.)/i,
              abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,
              wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/ie/i, /isz/i],
              abbreviated: [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i],
              any: [/előtt/i, /(szerint|i. sz.)/i],
            },
            defaultParseWidth: "any",
          }),
          quarter: (0, i.Z)({
            matchPatterns: {
              narrow: /^[1234]\.?/i,
              abbreviated: /^[1234]?\.?\s?n\.év/i,
              wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: (0, i.Z)({
            matchPatterns: {
              narrow: /^[jfmaásond]|sz/i,
              abbreviated:
                /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,
              wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a|á/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s|sz/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^már/i,
                /^áp/i,
                /^máj/i,
                /^jún/i,
                /^júl/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, i.Z)({
            matchPatterns: {
              narrow: /^([vhkpc]|sz|cs|sz)/i,
              short: /^([vhkp]|sze|cs|szo)/i,
              abbreviated: /^([vhkp]|sze|cs|szo)/i,
              wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i],
              any: [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, i.Z)({
            matchPatterns: {
              any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^de\.?/i,
                pm: /^du\.?/i,
                midnight: /^éjf/i,
                noon: /^dé/i,
                morning: /reg/i,
                afternoon: /^délu\.?/i,
                evening: /es/i,
                night: /éjj/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      t.Z = r;
    },
    848844: function (e, t, a) {
      a.r(t);
      var i = a(112147),
        n = a(334778),
        r = a(209576),
        s = a(691921),
        d = a(571972),
        o = {
          code: "hu",
          formatDistance: i.Z,
          formatLong: n.Z,
          formatRelative: r.Z,
          localize: s.Z,
          match: d.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
      t.default = o;
    },
  },
]);
//# sourceMappingURL=5484e955bc0ac39b5513.js.map
