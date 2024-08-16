"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67816"],
  {
    468292: function (t, n) {
      var i = {
        lessThanXSeconds: {
          one: "dưới 1 gi\xe2y",
          other: "dưới {{count}} gi\xe2y",
        },
        xSeconds: { one: "1 gi\xe2y", other: "{{count}} gi\xe2y" },
        halfAMinute: "nửa ph\xfat",
        lessThanXMinutes: {
          one: "dưới 1 ph\xfat",
          other: "dưới {{count}} ph\xfat",
        },
        xMinutes: { one: "1 ph\xfat", other: "{{count}} ph\xfat" },
        aboutXHours: { one: "khoảng 1 giờ", other: "khoảng {{count}} giờ" },
        xHours: { one: "1 giờ", other: "{{count}} giờ" },
        xDays: { one: "1 ng\xe0y", other: "{{count}} ng\xe0y" },
        aboutXWeeks: { one: "khoảng 1 tuần", other: "khoảng {{count}} tuần" },
        xWeeks: { one: "1 tuần", other: "{{count}} tuần" },
        aboutXMonths: {
          one: "khoảng 1 th\xe1ng",
          other: "khoảng {{count}} th\xe1ng",
        },
        xMonths: { one: "1 th\xe1ng", other: "{{count}} th\xe1ng" },
        aboutXYears: { one: "khoảng 1 năm", other: "khoảng {{count}} năm" },
        xYears: { one: "1 năm", other: "{{count}} năm" },
        overXYears: { one: "hơn 1 năm", other: "hơn {{count}} năm" },
        almostXYears: { one: "gần 1 năm", other: "gần {{count}} năm" },
      };
      n.Z = function (t, n, e) {
        var a,
          h = i[t];
        if (
          ((a =
            "string" == typeof h
              ? h
              : 1 === n
                ? h.one
                : h.other.replace("{{count}}", String(n))),
          null != e && e.addSuffix)
        )
          return e.comparison && e.comparison > 0 ? a + " nữa" : a + " trước";
        return a;
      };
    },
    520356: function (t, n, i) {
      var e = i(261168),
        a = {
          date: (0, e.Z)({
            formats: {
              full: "EEEE, 'ng\xe0y' d MMMM 'năm' y",
              long: "'ng\xe0y' d MMMM 'năm' y",
              medium: "d MMM 'năm' y",
              short: "dd/MM/y",
            },
            defaultWidth: "full",
          }),
          time: (0, e.Z)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, e.Z)({
            formats: {
              full: "{{date}} {{time}}",
              long: "{{date}} {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
          }),
        };
      n.Z = a;
    },
    455160: function (t, n) {
      var i = {
        lastWeek: "eeee 'tuần trước v\xe0o l\xfac' p",
        yesterday: "'h\xf4m qua v\xe0o l\xfac' p",
        today: "'h\xf4m nay v\xe0o l\xfac' p",
        tomorrow: "'ng\xe0y mai v\xe0o l\xfac' p",
        nextWeek: "eeee 'tới v\xe0o l\xfac' p",
        other: "P",
      };
      n.Z = function (t, n, e, a) {
        return i[t];
      };
    },
    242453: function (t, n, i) {
      var e = i(799761),
        a = {
          ordinalNumber: function (t, n) {
            var i = Number(t),
              e = null == n ? void 0 : n.unit;
            if ("quarter" === e)
              switch (i) {
                case 1:
                  return "I";
                case 2:
                  return "II";
                case 3:
                  return "III";
                case 4:
                  return "IV";
              }
            else if ("day" === e)
              switch (i) {
                case 1:
                  return "thứ 2";
                case 2:
                  return "thứ 3";
                case 3:
                  return "thứ 4";
                case 4:
                  return "thứ 5";
                case 5:
                  return "thứ 6";
                case 6:
                  return "thứ 7";
                case 7:
                  return "chủ nhật";
              }
            else if ("week" === e) return 1 === i ? "thứ nhất" : "thứ " + i;
            else if ("dayOfYear" === e)
              return 1 === i ? "đầu ti\xean" : "thứ " + i;
            return String(i);
          },
          era: (0, e.Z)({
            values: {
              narrow: ["TCN", "SCN"],
              abbreviated: ["trước CN", "sau CN"],
              wide: ["trước C\xf4ng Nguy\xean", "sau C\xf4ng Nguy\xean"],
            },
            defaultWidth: "wide",
          }),
          quarter: (0, e.Z)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: ["Qu\xfd 1", "Qu\xfd 2", "Qu\xfd 3", "Qu\xfd 4"],
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: ["qu\xfd I", "qu\xfd II", "qu\xfd III", "qu\xfd IV"],
            },
            defaultFormattingWidth: "wide",
            argumentCallback: function (t) {
              return t - 1;
            },
          }),
          month: (0, e.Z)({
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
                "Thg 1",
                "Thg 2",
                "Thg 3",
                "Thg 4",
                "Thg 5",
                "Thg 6",
                "Thg 7",
                "Thg 8",
                "Thg 9",
                "Thg 10",
                "Thg 11",
                "Thg 12",
              ],
              wide: [
                "Th\xe1ng Một",
                "Th\xe1ng Hai",
                "Th\xe1ng Ba",
                "Th\xe1ng Tư",
                "Th\xe1ng Năm",
                "Th\xe1ng S\xe1u",
                "Th\xe1ng Bảy",
                "Th\xe1ng T\xe1m",
                "Th\xe1ng Ch\xedn",
                "Th\xe1ng Mười",
                "Th\xe1ng Mười Một",
                "Th\xe1ng Mười Hai",
              ],
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
              ],
              abbreviated: [
                "thg 1",
                "thg 2",
                "thg 3",
                "thg 4",
                "thg 5",
                "thg 6",
                "thg 7",
                "thg 8",
                "thg 9",
                "thg 10",
                "thg 11",
                "thg 12",
              ],
              wide: [
                "th\xe1ng 01",
                "th\xe1ng 02",
                "th\xe1ng 03",
                "th\xe1ng 04",
                "th\xe1ng 05",
                "th\xe1ng 06",
                "th\xe1ng 07",
                "th\xe1ng 08",
                "th\xe1ng 09",
                "th\xe1ng 10",
                "th\xe1ng 11",
                "th\xe1ng 12",
              ],
            },
            defaultFormattingWidth: "wide",
          }),
          day: (0, e.Z)({
            values: {
              narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
              short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
              abbreviated: [
                "CN",
                "Thứ 2",
                "Thứ 3",
                "Thứ 4",
                "Thứ 5",
                "Thứ 6",
                "Thứ 7",
              ],
              wide: [
                "Chủ Nhật",
                "Thứ Hai",
                "Thứ Ba",
                "Thứ Tư",
                "Thứ Năm",
                "Thứ S\xe1u",
                "Thứ Bảy",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: (0, e.Z)({
            values: {
              narrow: {
                am: "am",
                pm: "pm",
                midnight: "nửa đ\xeam",
                noon: "tr",
                morning: "sg",
                afternoon: "ch",
                evening: "tối",
                night: "đ\xeam",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "nửa đ\xeam",
                noon: "trưa",
                morning: "s\xe1ng",
                afternoon: "chiều",
                evening: "tối",
                night: "đ\xeam",
              },
              wide: {
                am: "SA",
                pm: "CH",
                midnight: "nửa đ\xeam",
                noon: "trưa",
                morning: "s\xe1ng",
                afternoon: "chiều",
                evening: "tối",
                night: "đ\xeam",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "am",
                pm: "pm",
                midnight: "nửa đ\xeam",
                noon: "tr",
                morning: "sg",
                afternoon: "ch",
                evening: "tối",
                night: "đ\xeam",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "nửa đ\xeam",
                noon: "trưa",
                morning: "s\xe1ng",
                afternoon: "chiều",
                evening: "tối",
                night: "đ\xeam",
              },
              wide: {
                am: "SA",
                pm: "CH",
                midnight: "nửa đ\xeam",
                noon: "giữa trưa",
                morning: "v\xe0o buổi s\xe1ng",
                afternoon: "v\xe0o buổi chiều",
                evening: "v\xe0o buổi tối",
                night: "v\xe0o ban đ\xeam",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        };
      n.Z = a;
    },
    466682: function (t, n, i) {
      var e = i(475637),
        a = i(925300),
        h = {
          ordinalNumber: (0, a.Z)({
            matchPattern: /^(\d+)/i,
            parsePattern: /\d+/i,
            valueCallback: function (t) {
              return parseInt(t, 10);
            },
          }),
          era: (0, e.Z)({
            matchPatterns: {
              narrow: /^(tcn|scn)/i,
              abbreviated: /^(trước CN|sau CN)/i,
              wide: /^(trước Công Nguyên|sau Công Nguyên)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^t/i, /^s/i] },
            defaultParseWidth: "any",
          }),
          quarter: (0, e.Z)({
            matchPatterns: {
              narrow: /^([1234]|i{1,3}v?)/i,
              abbreviated: /^q([1234]|i{1,3}v?)/i,
              wide: /^quý ([1234]|i{1,3}v?)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i],
            },
            defaultParseWidth: "any",
            valueCallback: function (t) {
              return t + 1;
            },
          }),
          month: (0, e.Z)({
            matchPatterns: {
              narrow: /^(0?[2-9]|10|11|12|0?1)/i,
              abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
              wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /0?1$/i,
                /0?2/i,
                /3/,
                /4/,
                /5/,
                /6/,
                /7/,
                /8/,
                /9/,
                /10/,
                /11/,
                /12/,
              ],
              abbreviated: [
                /^thg[ _]?0?1(?!\d)/i,
                /^thg[ _]?0?2/i,
                /^thg[ _]?0?3/i,
                /^thg[ _]?0?4/i,
                /^thg[ _]?0?5/i,
                /^thg[ _]?0?6/i,
                /^thg[ _]?0?7/i,
                /^thg[ _]?0?8/i,
                /^thg[ _]?0?9/i,
                /^thg[ _]?10/i,
                /^thg[ _]?11/i,
                /^thg[ _]?12/i,
              ],
              wide: [
                /^tháng ?(Một|0?1(?!\d))/i,
                /^tháng ?(Hai|0?2)/i,
                /^tháng ?(Ba|0?3)/i,
                /^tháng ?(Tư|0?4)/i,
                /^tháng ?(Năm|0?5)/i,
                /^tháng ?(Sáu|0?6)/i,
                /^tháng ?(Bảy|0?7)/i,
                /^tháng ?(Tám|0?8)/i,
                /^tháng ?(Chín|0?9)/i,
                /^tháng ?(Mười|10)/i,
                /^tháng ?(Mười ?Một|11)/i,
                /^tháng ?(Mười ?Hai|12)/i,
              ],
            },
            defaultParseWidth: "wide",
          }),
          day: (0, e.Z)({
            matchPatterns: {
              narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
              short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
              abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
              wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
              short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
              abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
              wide: [
                /(Chủ|Chúa) ?Nhật/i,
                /Hai/i,
                /Ba/i,
                /Tư/i,
                /Năm/i,
                /Sáu/i,
                /Bảy/i,
              ],
            },
            defaultParseWidth: "wide",
          }),
          dayPeriod: (0, e.Z)({
            matchPatterns: {
              narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
              abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
              wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: {
                am: /^(a|sa)/i,
                pm: /^(p|ch[^i]*)/i,
                midnight: /nửa đêm/i,
                noon: /trưa/i,
                morning: /sáng/i,
                afternoon: /chiều/i,
                evening: /tối/i,
                night: /^đêm/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      n.Z = h;
    },
    46233: function (t, n, i) {
      i.r(n);
      var e = i(468292),
        a = i(520356),
        h = i(455160),
        r = i(242453),
        o = i(466682),
        g = {
          code: "vi",
          formatDistance: e.Z,
          formatLong: a.Z,
          formatRelative: h.Z,
          localize: r.Z,
          match: o.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
        };
      n.default = g;
    },
  },
]);
//# sourceMappingURL=1d5057a7b773c7280316.js.map
