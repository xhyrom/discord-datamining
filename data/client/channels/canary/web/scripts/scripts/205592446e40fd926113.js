"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43353"],
  {
    757490: function (i, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var e = t(951516),
        a = t(780603);
      function r(i, n, t) {
        (0, e.Z)(2, arguments);
        var r = (0, a.Z)(i, t),
          u = (0, a.Z)(n, t);
        return r.getTime() === u.getTime();
      }
    },
    783284: function (i, n) {
      function t(i, n) {
        if (void 0 !== i.one && 1 === n) return i.one;
        var t = n % 10,
          e = n % 100;
        return 1 === t && 11 !== e
          ? i.singularNominative.replace("{{count}}", String(n))
          : t >= 2 && t <= 4 && (e < 10 || e > 20)
            ? i.singularGenitive.replace("{{count}}", String(n))
            : i.pluralGenitive.replace("{{count}}", String(n));
      }
      function e(i) {
        return function (n, e) {
          if (!e || !e.addSuffix) return t(i.regular, n);
          if (e.comparison && e.comparison > 0)
            return i.future ? t(i.future, n) : "за " + t(i.regular, n);
          return i.past ? t(i.past, n) : t(i.regular, n) + " тому";
        };
      }
      var a = {
        lessThanXSeconds: e({
          regular: {
            one: "менше секунди",
            singularNominative: "менше {{count}} секунди",
            singularGenitive: "менше {{count}} секунд",
            pluralGenitive: "менше {{count}} секунд",
          },
          future: {
            one: "менше, ніж за секунду",
            singularNominative: "менше, ніж за {{count}} секунду",
            singularGenitive: "менше, ніж за {{count}} секунди",
            pluralGenitive: "менше, ніж за {{count}} секунд",
          },
        }),
        xSeconds: e({
          regular: {
            singularNominative: "{{count}} секунда",
            singularGenitive: "{{count}} секунди",
            pluralGenitive: "{{count}} секунд",
          },
          past: {
            singularNominative: "{{count}} секунду тому",
            singularGenitive: "{{count}} секунди тому",
            pluralGenitive: "{{count}} секунд тому",
          },
          future: {
            singularNominative: "за {{count}} секунду",
            singularGenitive: "за {{count}} секунди",
            pluralGenitive: "за {{count}} секунд",
          },
        }),
        halfAMinute: function (i, n) {
          if (n && n.addSuffix)
            return n.comparison && n.comparison > 0
              ? "за півхвилини"
              : "півхвилини тому";
          return "півхвилини";
        },
        lessThanXMinutes: e({
          regular: {
            one: "менше хвилини",
            singularNominative: "менше {{count}} хвилини",
            singularGenitive: "менше {{count}} хвилин",
            pluralGenitive: "менше {{count}} хвилин",
          },
          future: {
            one: "менше, ніж за хвилину",
            singularNominative: "менше, ніж за {{count}} хвилину",
            singularGenitive: "менше, ніж за {{count}} хвилини",
            pluralGenitive: "менше, ніж за {{count}} хвилин",
          },
        }),
        xMinutes: e({
          regular: {
            singularNominative: "{{count}} хвилина",
            singularGenitive: "{{count}} хвилини",
            pluralGenitive: "{{count}} хвилин",
          },
          past: {
            singularNominative: "{{count}} хвилину тому",
            singularGenitive: "{{count}} хвилини тому",
            pluralGenitive: "{{count}} хвилин тому",
          },
          future: {
            singularNominative: "за {{count}} хвилину",
            singularGenitive: "за {{count}} хвилини",
            pluralGenitive: "за {{count}} хвилин",
          },
        }),
        aboutXHours: e({
          regular: {
            singularNominative: "близько {{count}} години",
            singularGenitive: "близько {{count}} годин",
            pluralGenitive: "близько {{count}} годин",
          },
          future: {
            singularNominative: "приблизно за {{count}} годину",
            singularGenitive: "приблизно за {{count}} години",
            pluralGenitive: "приблизно за {{count}} годин",
          },
        }),
        xHours: e({
          regular: {
            singularNominative: "{{count}} годину",
            singularGenitive: "{{count}} години",
            pluralGenitive: "{{count}} годин",
          },
        }),
        xDays: e({
          regular: {
            singularNominative: "{{count}} день",
            singularGenitive: "{{count}} днi",
            pluralGenitive: "{{count}} днів",
          },
        }),
        aboutXWeeks: e({
          regular: {
            singularNominative: "близько {{count}} тижня",
            singularGenitive: "близько {{count}} тижнів",
            pluralGenitive: "близько {{count}} тижнів",
          },
          future: {
            singularNominative: "приблизно за {{count}} тиждень",
            singularGenitive: "приблизно за {{count}} тижні",
            pluralGenitive: "приблизно за {{count}} тижнів",
          },
        }),
        xWeeks: e({
          regular: {
            singularNominative: "{{count}} тиждень",
            singularGenitive: "{{count}} тижні",
            pluralGenitive: "{{count}} тижнів",
          },
        }),
        aboutXMonths: e({
          regular: {
            singularNominative: "близько {{count}} місяця",
            singularGenitive: "близько {{count}} місяців",
            pluralGenitive: "близько {{count}} місяців",
          },
          future: {
            singularNominative: "приблизно за {{count}} місяць",
            singularGenitive: "приблизно за {{count}} місяці",
            pluralGenitive: "приблизно за {{count}} місяців",
          },
        }),
        xMonths: e({
          regular: {
            singularNominative: "{{count}} місяць",
            singularGenitive: "{{count}} місяці",
            pluralGenitive: "{{count}} місяців",
          },
        }),
        aboutXYears: e({
          regular: {
            singularNominative: "близько {{count}} року",
            singularGenitive: "близько {{count}} років",
            pluralGenitive: "близько {{count}} років",
          },
          future: {
            singularNominative: "приблизно за {{count}} рік",
            singularGenitive: "приблизно за {{count}} роки",
            pluralGenitive: "приблизно за {{count}} років",
          },
        }),
        xYears: e({
          regular: {
            singularNominative: "{{count}} рік",
            singularGenitive: "{{count}} роки",
            pluralGenitive: "{{count}} років",
          },
        }),
        overXYears: e({
          regular: {
            singularNominative: "більше {{count}} року",
            singularGenitive: "більше {{count}} років",
            pluralGenitive: "більше {{count}} років",
          },
          future: {
            singularNominative: "більше, ніж за {{count}} рік",
            singularGenitive: "більше, ніж за {{count}} роки",
            pluralGenitive: "більше, ніж за {{count}} років",
          },
        }),
        almostXYears: e({
          regular: {
            singularNominative: "майже {{count}} рік",
            singularGenitive: "майже {{count}} роки",
            pluralGenitive: "майже {{count}} років",
          },
          future: {
            singularNominative: "майже за {{count}} рік",
            singularGenitive: "майже за {{count}} роки",
            pluralGenitive: "майже за {{count}} років",
          },
        }),
      };
      n.Z = function (i, n, t) {
        return (t = t || {}), a[i](n, t);
      };
    },
    356580: function (i, n, t) {
      var e = t(261168),
        a = {
          date: (0, e.Z)({
            formats: {
              full: "EEEE, do MMMM y 'р.'",
              long: "do MMMM y 'р.'",
              medium: "d MMM y 'р.'",
              short: "dd.MM.y",
            },
            defaultWidth: "full",
          }),
          time: (0, e.Z)({
            formats: {
              full: "H:mm:ss zzzz",
              long: "H:mm:ss z",
              medium: "H:mm:ss",
              short: "H:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, e.Z)({
            formats: {
              full: "{{date}} 'о' {{time}}",
              long: "{{date}} 'о' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        };
      n.Z = a;
    },
    936432: function (i, n, t) {
      var e = t(528734),
        a = t(757490),
        r = [
          "неділю",
          "понеділок",
          "вівторок",
          "середу",
          "четвер",
          "п’ятницю",
          "суботу",
        ];
      function u(i) {
        return "'у " + r[i] + " о' p";
      }
      var o = {
        lastWeek: function (i, n, t) {
          var o = (0, e.default)(i),
            l = o.getUTCDay();
          return (0, a.Z)(o, n, t)
            ? u(l)
            : (function (i) {
                var n = r[i];
                switch (i) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return "'у минулу " + n + " о' p";
                  case 1:
                  case 2:
                  case 4:
                    return "'у минулий " + n + " о' p";
                }
              })(l);
        },
        yesterday: "'вчора о' p",
        today: "'сьогодні о' p",
        tomorrow: "'завтра о' p",
        nextWeek: function (i, n, t) {
          var o = (0, e.default)(i),
            l = o.getUTCDay();
          return (0, a.Z)(o, n, t)
            ? u(l)
            : (function (i) {
                var n = r[i];
                switch (i) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return "'у наступну " + n + " о' p";
                  case 1:
                  case 2:
                  case 4:
                    return "'у наступний " + n + " о' p";
                }
              })(l);
        },
        other: "P",
      };
      n.Z = function (i, n, t, e) {
        var a = o[i];
        return "function" == typeof a ? a(n, t, e) : a;
      };
    },
    759063: function (i, n, t) {
      var e = t(799761),
        a = {
          ordinalNumber: function (i, n) {
            var t,
              e = String(null == n ? void 0 : n.unit),
              a = Number(i);
            return (
              (t =
                "date" === e
                  ? 3 === a || 23 === a
                    ? "-є"
                    : "-е"
                  : "minute" === e || "second" === e || "hour" === e
                    ? "-а"
                    : "-й"),
              a + t
            );
          },
          era: (0, e.Z)({
            values: {
              narrow: ["до н.е.", "н.е."],
              abbreviated: ["до н. е.", "н. е."],
              wide: ["до нашої ери", "нашої ери"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, e.Z)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
              wide: [
                "1-й квартал",
                "2-й квартал",
                "3-й квартал",
                "4-й квартал",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (i) {
              return i - 1;
            },
          }),
          month: (0, e.Z)({
            values: {
              narrow: [
                "С",
                "Л",
                "Б",
                "К",
                "Т",
                "Ч",
                "Л",
                "С",
                "В",
                "Ж",
                "Л",
                "Г",
              ],
              abbreviated: [
                "січ.",
                "лют.",
                "берез.",
                "квіт.",
                "трав.",
                "черв.",
                "лип.",
                "серп.",
                "верес.",
                "жовт.",
                "листоп.",
                "груд.",
              ],
              wide: [
                "січень",
                "лютий",
                "березень",
                "квітень",
                "травень",
                "червень",
                "липень",
                "серпень",
                "вересень",
                "жовтень",
                "листопад",
                "грудень",
              ],
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: [
                "С",
                "Л",
                "Б",
                "К",
                "Т",
                "Ч",
                "Л",
                "С",
                "В",
                "Ж",
                "Л",
                "Г",
              ],
              abbreviated: [
                "січ.",
                "лют.",
                "берез.",
                "квіт.",
                "трав.",
                "черв.",
                "лип.",
                "серп.",
                "верес.",
                "жовт.",
                "листоп.",
                "груд.",
              ],
              wide: [
                "січня",
                "лютого",
                "березня",
                "квітня",
                "травня",
                "червня",
                "липня",
                "серпня",
                "вересня",
                "жовтня",
                "листопада",
                "грудня",
              ],
            },
            defaultFormattingWidth: "wide",
          }),
          day: (0, e.Z)({
            values: {
              narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
              short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
              abbreviated: ["нед", "пон", "вів", "сер", "чтв", "птн", "суб"],
              wide: [
                "неділя",
                "понеділок",
                "вівторок",
                "середа",
                "четвер",
                "п’ятниця",
                "субота",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, e.Z)({
            values: {
              narrow: {
                am: "ДП",
                pm: "ПП",
                midnight: "півн.",
                noon: "пол.",
                morning: "ранок",
                afternoon: "день",
                evening: "веч.",
                night: "ніч",
              },
              abbreviated: {
                am: "ДП",
                pm: "ПП",
                midnight: "півн.",
                noon: "пол.",
                morning: "ранок",
                afternoon: "день",
                evening: "веч.",
                night: "ніч",
              },
              wide: {
                am: "ДП",
                pm: "ПП",
                midnight: "північ",
                noon: "полудень",
                morning: "ранок",
                afternoon: "день",
                evening: "вечір",
                night: "ніч",
              },
            },
            defaultWidth: "any",
            formattingValues: {
              narrow: {
                am: "ДП",
                pm: "ПП",
                midnight: "півн.",
                noon: "пол.",
                morning: "ранку",
                afternoon: "дня",
                evening: "веч.",
                night: "ночі",
              },
              abbreviated: {
                am: "ДП",
                pm: "ПП",
                midnight: "півн.",
                noon: "пол.",
                morning: "ранку",
                afternoon: "дня",
                evening: "веч.",
                night: "ночі",
              },
              wide: {
                am: "ДП",
                pm: "ПП",
                midnight: "північ",
                noon: "полудень",
                morning: "ранку",
                afternoon: "дня",
                evening: "веч.",
                night: "ночі",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
      n.Z = a;
    },
    660998: function (i, n, t) {
      var e = t(475637),
        a = t(925300),
        r = {
          ordinalNumber: (0, a.Z)({
            matchPattern: /^(\d+)(-?(е|й|є|а|я))?/i,
            parsePattern: /\d+/i,
            valueCallback: function (i) {
              return parseInt(i, 10);
            },
          }),
          era: (0, e.Z)({
            matchPatterns: {
              narrow: /^((до )?н\.?\s?е\.?)/i,
              abbreviated: /^((до )?н\.?\s?е\.?)/i,
              wide: /^(до нашої ери|нашої ери|наша ера)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^д/i, /^н/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, e.Z)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^[1234](-?[иі]?й?)? кв.?/i,
              wide: /^[1234](-?[иі]?й?)? квартал/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (i) {
              return i + 1;
            },
          }),
          month: (0, e.Z)({
            matchPatterns: {
              narrow: /^[слбктчвжг]/i,
              abbreviated:
                /^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,
              wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^с/i,
                /^л/i,
                /^б/i,
                /^к/i,
                /^т/i,
                /^ч/i,
                /^л/i,
                /^с/i,
                /^в/i,
                /^ж/i,
                /^л/i,
                /^г/i,
              ],
              any: [
                /^сі/i,
                /^лю/i,
                /^б/i,
                /^к/i,
                /^т/i,
                /^ч/i,
                /^лип/i,
                /^се/i,
                /^в/i,
                /^ж/i,
                /^лис/i,
                /^г/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, e.Z)({
            matchPatterns: {
              narrow: /^[нпвсч]/i,
              short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i,
              abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,
              wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
              any: [
                /^н/i,
                /^п[он]/i,
                /^в/i,
                /^с[ер]/i,
                /^ч/i,
                /^п\W*?[ят]/i,
                /^с[уб]/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, e.Z)({
            matchPatterns: {
              narrow:
                /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
              abbreviated:
                /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
              wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: {
                am: /^дп/i,
                pm: /^пп/i,
                midnight: /^півн/i,
                noon: /^пол/i,
                morning: /^р/i,
                afternoon: /^д[ен]/i,
                evening: /^в/i,
                night: /^н/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      n.Z = r;
    },
    423602: function (i, n, t) {
      t.r(n);
      var e = t(783284),
        a = t(356580),
        r = t(936432),
        u = t(759063),
        o = t(660998),
        l = {
          code: "uk",
          formatDistance: e.Z,
          formatLong: a.Z,
          formatRelative: r.Z,
          localize: u.Z,
          match: o.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
        };
      n.default = l;
    },
  },
]);
//# sourceMappingURL=205592446e40fd926113.js.map
