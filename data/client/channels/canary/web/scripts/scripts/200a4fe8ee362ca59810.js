"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28990"],
  {
    195463: function (e, n) {
      var t = {
        lessThanXSeconds: {
          one: {
            regular: "m\xe9ně než sekunda",
            past: "před m\xe9ně než sekundou",
            future: "za m\xe9ně než sekundu",
          },
          few: {
            regular: "m\xe9ně než {{count}} sekundy",
            past: "před m\xe9ně než {{count}} sekundami",
            future: "za m\xe9ně než {{count}} sekundy",
          },
          many: {
            regular: "m\xe9ně než {{count}} sekund",
            past: "před m\xe9ně než {{count}} sekundami",
            future: "za m\xe9ně než {{count}} sekund",
          },
        },
        xSeconds: {
          one: {
            regular: "sekunda",
            past: "před sekundou",
            future: "za sekundu",
          },
          few: {
            regular: "{{count}} sekundy",
            past: "před {{count}} sekundami",
            future: "za {{count}} sekundy",
          },
          many: {
            regular: "{{count}} sekund",
            past: "před {{count}} sekundami",
            future: "za {{count}} sekund",
          },
        },
        halfAMinute: {
          type: "other",
          other: {
            regular: "půl minuty",
            past: "před půl minutou",
            future: "za půl minuty",
          },
        },
        lessThanXMinutes: {
          one: {
            regular: "m\xe9ně než minuta",
            past: "před m\xe9ně než minutou",
            future: "za m\xe9ně než minutu",
          },
          few: {
            regular: "m\xe9ně než {{count}} minuty",
            past: "před m\xe9ně než {{count}} minutami",
            future: "za m\xe9ně než {{count}} minuty",
          },
          many: {
            regular: "m\xe9ně než {{count}} minut",
            past: "před m\xe9ně než {{count}} minutami",
            future: "za m\xe9ně než {{count}} minut",
          },
        },
        xMinutes: {
          one: { regular: "minuta", past: "před minutou", future: "za minutu" },
          few: {
            regular: "{{count}} minuty",
            past: "před {{count}} minutami",
            future: "za {{count}} minuty",
          },
          many: {
            regular: "{{count}} minut",
            past: "před {{count}} minutami",
            future: "za {{count}} minut",
          },
        },
        aboutXHours: {
          one: {
            regular: "přibližně hodina",
            past: "přibližně před hodinou",
            future: "přibližně za hodinu",
          },
          few: {
            regular: "přibližně {{count}} hodiny",
            past: "přibližně před {{count}} hodinami",
            future: "přibližně za {{count}} hodiny",
          },
          many: {
            regular: "přibližně {{count}} hodin",
            past: "přibližně před {{count}} hodinami",
            future: "přibližně za {{count}} hodin",
          },
        },
        xHours: {
          one: { regular: "hodina", past: "před hodinou", future: "za hodinu" },
          few: {
            regular: "{{count}} hodiny",
            past: "před {{count}} hodinami",
            future: "za {{count}} hodiny",
          },
          many: {
            regular: "{{count}} hodin",
            past: "před {{count}} hodinami",
            future: "za {{count}} hodin",
          },
        },
        xDays: {
          one: { regular: "den", past: "před dnem", future: "za den" },
          few: {
            regular: "{{count}} dny",
            past: "před {{count}} dny",
            future: "za {{count}} dny",
          },
          many: {
            regular: "{{count}} dn\xed",
            past: "před {{count}} dny",
            future: "za {{count}} dn\xed",
          },
        },
        aboutXWeeks: {
          one: {
            regular: "přibližně t\xfdden",
            past: "přibližně před t\xfddnem",
            future: "přibližně za t\xfdden",
          },
          few: {
            regular: "přibližně {{count}} t\xfddny",
            past: "přibližně před {{count}} t\xfddny",
            future: "přibližně za {{count}} t\xfddny",
          },
          many: {
            regular: "přibližně {{count}} t\xfddnů",
            past: "přibližně před {{count}} t\xfddny",
            future: "přibližně za {{count}} t\xfddnů",
          },
        },
        xWeeks: {
          one: {
            regular: "t\xfdden",
            past: "před t\xfddnem",
            future: "za t\xfdden",
          },
          few: {
            regular: "{{count}} t\xfddny",
            past: "před {{count}} t\xfddny",
            future: "za {{count}} t\xfddny",
          },
          many: {
            regular: "{{count}} t\xfddnů",
            past: "před {{count}} t\xfddny",
            future: "za {{count}} t\xfddnů",
          },
        },
        aboutXMonths: {
          one: {
            regular: "přibližně měs\xedc",
            past: "přibližně před měs\xedcem",
            future: "přibližně za měs\xedc",
          },
          few: {
            regular: "přibližně {{count}} měs\xedce",
            past: "přibližně před {{count}} měs\xedci",
            future: "přibližně za {{count}} měs\xedce",
          },
          many: {
            regular: "přibližně {{count}} měs\xedců",
            past: "přibližně před {{count}} měs\xedci",
            future: "přibližně za {{count}} měs\xedců",
          },
        },
        xMonths: {
          one: {
            regular: "měs\xedc",
            past: "před měs\xedcem",
            future: "za měs\xedc",
          },
          few: {
            regular: "{{count}} měs\xedce",
            past: "před {{count}} měs\xedci",
            future: "za {{count}} měs\xedce",
          },
          many: {
            regular: "{{count}} měs\xedců",
            past: "před {{count}} měs\xedci",
            future: "za {{count}} měs\xedců",
          },
        },
        aboutXYears: {
          one: {
            regular: "přibližně rok",
            past: "přibližně před rokem",
            future: "přibližně za rok",
          },
          few: {
            regular: "přibližně {{count}} roky",
            past: "přibližně před {{count}} roky",
            future: "přibližně za {{count}} roky",
          },
          many: {
            regular: "přibližně {{count}} roků",
            past: "přibližně před {{count}} roky",
            future: "přibližně za {{count}} roků",
          },
        },
        xYears: {
          one: { regular: "rok", past: "před rokem", future: "za rok" },
          few: {
            regular: "{{count}} roky",
            past: "před {{count}} roky",
            future: "za {{count}} roky",
          },
          many: {
            regular: "{{count}} roků",
            past: "před {{count}} roky",
            future: "za {{count}} roků",
          },
        },
        overXYears: {
          one: {
            regular: "v\xedce než rok",
            past: "před v\xedce než rokem",
            future: "za v\xedce než rok",
          },
          few: {
            regular: "v\xedce než {{count}} roky",
            past: "před v\xedce než {{count}} roky",
            future: "za v\xedce než {{count}} roky",
          },
          many: {
            regular: "v\xedce než {{count}} roků",
            past: "před v\xedce než {{count}} roky",
            future: "za v\xedce než {{count}} roků",
          },
        },
        almostXYears: {
          one: {
            regular: "skoro rok",
            past: "skoro před rokem",
            future: "skoro za rok",
          },
          few: {
            regular: "skoro {{count}} roky",
            past: "skoro před {{count}} roky",
            future: "skoro za {{count}} roky",
          },
          many: {
            regular: "skoro {{count}} roků",
            past: "skoro před {{count}} roky",
            future: "skoro za {{count}} roků",
          },
        },
      };
      n.Z = function (e, n, o) {
        var r,
          a,
          u = t[e];
        r =
          "other" === u.type
            ? u.other
            : 1 === n
              ? u.one
              : n > 1 && n < 5
                ? u.few
                : u.many;
        var i = (null == o ? void 0 : o.addSuffix) === !0,
          d = null == o ? void 0 : o.comparison;
        return (a =
          i && -1 === d ? r.past : i && 1 === d ? r.future : r.regular).replace(
          "{{count}}",
          String(n),
        );
      };
    },
    458765: function (e, n, t) {
      var o = t(261168),
        r = {
          date: (0, o.Z)({
            formats: {
              full: "EEEE, d. MMMM yyyy",
              long: "d. MMMM yyyy",
              medium: "d. M. yyyy",
              short: "dd.MM.yyyy",
            },
            defaultWidth: "full",
          }),
          time: (0, o.Z)({
            formats: {
              full: "H:mm:ss zzzz",
              long: "H:mm:ss z",
              medium: "H:mm:ss",
              short: "H:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, o.Z)({
            formats: {
              full: "{{date}} 'v' {{time}}",
              long: "{{date}} 'v' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        };
      n.Z = r;
    },
    70651: function (e, n) {
      var t = [
          "neděli",
          "ponděl\xed",
          "\xfater\xfd",
          "středu",
          "čtvrtek",
          "p\xe1tek",
          "sobotu",
        ],
        o = {
          lastWeek: "'posledn\xed' eeee 've' p",
          yesterday: "'včera v' p",
          today: "'dnes v' p",
          tomorrow: "'z\xedtra v' p",
          nextWeek: function (e) {
            return "'v " + t[e.getUTCDay()] + " o' p";
          },
          other: "P",
        };
      n.Z = function (e, n) {
        var t = o[e];
        return "function" == typeof t ? t(n) : t;
      };
    },
    194e3: function (e, n, t) {
      var o = t(799761),
        r = {
          ordinalNumber: function (e, n) {
            return Number(e) + ".";
          },
          era: (0, o.Z)({
            values: {
              narrow: ["př. n. l.", "n. l."],
              abbreviated: ["př. n. l.", "n. l."],
              wide: ["před naš\xedm letopočtem", "našeho letopočtu"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, o.Z)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: [
                "1. čtvrtlet\xed",
                "2. čtvrtlet\xed",
                "3. čtvrtlet\xed",
                "4. čtvrtlet\xed",
              ],
              wide: [
                "1. čtvrtlet\xed",
                "2. čtvrtlet\xed",
                "3. čtvrtlet\xed",
                "4. čtvrtlet\xed",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return e - 1;
            },
          }),
          month: (0, o.Z)({
            values: {
              narrow: [
                "L",
                "\xda",
                "B",
                "D",
                "K",
                "Č",
                "Č",
                "S",
                "Z",
                "Ř",
                "L",
                "P",
              ],
              abbreviated: [
                "led",
                "\xfano",
                "bře",
                "dub",
                "kvě",
                "čvn",
                "čvc",
                "srp",
                "z\xe1ř",
                "ř\xedj",
                "lis",
                "pro",
              ],
              wide: [
                "leden",
                "\xfanor",
                "březen",
                "duben",
                "květen",
                "červen",
                "červenec",
                "srpen",
                "z\xe1ř\xed",
                "ř\xedjen",
                "listopad",
                "prosinec",
              ],
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: [
                "L",
                "\xda",
                "B",
                "D",
                "K",
                "Č",
                "Č",
                "S",
                "Z",
                "Ř",
                "L",
                "P",
              ],
              abbreviated: [
                "led",
                "\xfano",
                "bře",
                "dub",
                "kvě",
                "čvn",
                "čvc",
                "srp",
                "z\xe1ř",
                "ř\xedj",
                "lis",
                "pro",
              ],
              wide: [
                "ledna",
                "\xfanora",
                "března",
                "dubna",
                "května",
                "června",
                "července",
                "srpna",
                "z\xe1ř\xed",
                "ř\xedjna",
                "listopadu",
                "prosince",
              ],
            },
            defaultFormattingWidth: "wide",
          }),
          day: (0, o.Z)({
            values: {
              narrow: ["ne", "po", "\xfat", "st", "čt", "p\xe1", "so"],
              short: ["ne", "po", "\xfat", "st", "čt", "p\xe1", "so"],
              abbreviated: [
                "ned",
                "pon",
                "\xfate",
                "stř",
                "čtv",
                "p\xe1t",
                "sob",
              ],
              wide: [
                "neděle",
                "ponděl\xed",
                "\xfater\xfd",
                "středa",
                "čtvrtek",
                "p\xe1tek",
                "sobota",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, o.Z)({
            values: {
              narrow: {
                am: "dop.",
                pm: "odp.",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
              },
              abbreviated: {
                am: "dop.",
                pm: "odp.",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
              },
              wide: {
                am: "dopoledne",
                pm: "odpoledne",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "dop.",
                pm: "odp.",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
              },
              abbreviated: {
                am: "dop.",
                pm: "odp.",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
              },
              wide: {
                am: "dopoledne",
                pm: "odpoledne",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
      n.Z = r;
    },
    726608: function (e, n, t) {
      var o = t(475637),
        r = t(925300),
        a = {
          ordinalNumber: (0, r.Z)({
            matchPattern: /^(\d+)\.?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
              return parseInt(e, 10);
            },
          }),
          era: (0, o.Z)({
            matchPatterns: {
              narrow:
                /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
              abbreviated:
                /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
              wide: /^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^p[řr]/i, /^(po|n)/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, o.Z)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^[1234]\. [čc]tvrtlet[íi]/i,
              wide: /^[1234]\. [čc]tvrtlet[íi]/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: (0, o.Z)({
            matchPatterns: {
              narrow: /^[lúubdkčcszřrlp]/i,
              abbreviated:
                /^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,
              wide: /^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^l/i,
                /^[úu]/i,
                /^b/i,
                /^d/i,
                /^k/i,
                /^[čc]/i,
                /^[čc]/i,
                /^s/i,
                /^z/i,
                /^[řr]/i,
                /^l/i,
                /^p/i,
              ],
              any: [
                /^led/i,
                /^[úu]n/i,
                /^b[řr]e/i,
                /^dub/i,
                /^kv[ěe]/i,
                /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,
                /^[čc]vc|[čc]erven(ec|ce)/i,
                /^srp/i,
                /^z[áa][řr]/i,
                /^[řr][íi]j/i,
                /^lis/i,
                /^pro/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, o.Z)({
            matchPatterns: {
              narrow: /^[npuúsčps]/i,
              short: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,
              abbreviated: /^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,
              wide: /^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^n/i, /^p/i, /^[úu]/i, /^s/i, /^[čc]/i, /^p/i, /^s/i],
              any: [
                /^ne/i,
                /^po/i,
                /^[úu]t/i,
                /^st/i,
                /^[čc]t/i,
                /^p[áa]/i,
                /^so/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, o.Z)({
            matchPatterns: {
              any: /^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^dop/i,
                pm: /^odp/i,
                midnight: /^p[ůu]lnoc/i,
                noon: /^poledne/i,
                morning: /r[áa]no/i,
                afternoon: /odpoledne/i,
                evening: /ve[čc]er/i,
                night: /noc/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      n.Z = a;
    },
    998121: function (e, n, t) {
      t.r(n);
      var o = t(195463),
        r = t(458765),
        a = t(70651),
        u = t(194e3),
        i = t(726608),
        d = {
          code: "cs",
          formatDistance: o.Z,
          formatLong: r.Z,
          formatRelative: a.Z,
          localize: u.Z,
          match: i.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
      n.default = d;
    },
  },
]);
//# sourceMappingURL=200a4fe8ee362ca59810.js.map
