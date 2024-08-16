"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98105"],
  {
    288374: function (t, e, a) {
      var m = a(261168),
        d = {
          date: (0, m.Z)({
            formats: {
              full: "EEEE, d MMMM yyyy",
              long: "d MMMM yyyy",
              medium: "d MMM yyyy",
              short: "dd/MM/yyyy",
            },
            defaultWidth: "full",
          }),
          time: (0, m.Z)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, m.Z)({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        };
      e.Z = d;
    },
    667768: function (t, e, a) {
      a.r(e);
      var m = a(212059),
        d = a(11608),
        i = a(682751),
        s = a(109515),
        l = a(288374),
        o = {
          code: "en-GB",
          formatDistance: m.Z,
          formatLong: l.Z,
          formatRelative: d.Z,
          localize: i.Z,
          match: s.Z,
          options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
        };
      e.default = o;
    },
  },
]);
//# sourceMappingURL=bc84951ca595de8712a3.js.map
