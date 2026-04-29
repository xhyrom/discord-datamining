"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15380"],
  {
    430111(t, s, i) {
      i.d(s, { Y: () => l.Y });
      var l = i(411211);
    },
    411211(t, s, i) {
      i.d(s, { Y: () => f });
      var l = i(842830),
        e = i(469322),
        o = i(518375),
        a = i(97626),
        r = i(243399),
        n = i(29685),
        c = i(641277),
        u = i(439489),
        d = i(369364),
        y = i(727504),
        m = i(501974),
        h = i(225441),
        p = i(762437);
      i(632459);
      let D = [
          "locale",
          "style",
          "years",
          "yearsDisplay",
          "months",
          "monthsDisplay",
          "weeks",
          "weeksDisplay",
          "days",
          "daysDisplay",
          "hours",
          "hoursDisplay",
          "minutes",
          "minutesDisplay",
          "seconds",
          "secondsDisplay",
          "milliseconds",
          "millisecondsDisplay",
          "microseconds",
          "microsecondsDisplay",
          "nanoseconds",
          "nanosecondsDisplay",
          "numberingSystem",
          "fractionalDigits",
        ],
        g = [
          {
            styleSlot: "years",
            displaySlot: "yearsDisplay",
            unit: "years",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "months",
            displaySlot: "monthsDisplay",
            unit: "months",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "weeks",
            displaySlot: "weeksDisplay",
            unit: "weeks",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "days",
            displaySlot: "daysDisplay",
            unit: "days",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "hours",
            displaySlot: "hoursDisplay",
            unit: "hours",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "minutes",
            displaySlot: "minutesDisplay",
            unit: "minutes",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "seconds",
            displaySlot: "secondsDisplay",
            unit: "seconds",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "milliseconds",
            displaySlot: "millisecondsDisplay",
            unit: "milliseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "microseconds",
            displaySlot: "microsecondsDisplay",
            unit: "microseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "nanoseconds",
            displaySlot: "nanosecondsDisplay",
            unit: "nanoseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
        ];
      class f {
        constructor(t, s) {
          if (!(this && this instanceof f ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
          const i = (0, l.N)(t),
            r = Object.create(null),
            n = void 0 === s ? Object.create(null) : (0, e.BT)(s),
            d = (0, o.W)(
              n,
              "localeMatcher",
              "string",
              ["best fit", "lookup"],
              "best fit",
            ),
            y = (0, o.W)(n, "numberingSystem", "string", void 0, void 0);
          if (void 0 !== y && 0 > h.P.indexOf(y))
            throw RangeError(`Invalid numberingSystems: ${y}`);
          (r.nu = y), (r.localeMatcher = d);
          const { localeData: p, availableLocales: D } = f,
            v = (0, c.B)(D, i, r, ["nu"], p, f.getDefaultLocale),
            w = v.locale,
            S = (0, m.n)(this);
          (S.initializedDurationFormat = !0),
            (S.locale = w),
            (S.numberingSystem = v.nu);
          const b = (0, o.W)(
            n,
            "style",
            "string",
            ["long", "short", "narrow", "digital"],
            "short",
          );
          (S.style = b), (S.dataLocale = v.dataLocale);
          let k = "";
          g.forEach((t) => {
            let {
                styleSlot: s,
                displaySlot: i,
                unit: l,
                values: e,
                digitalDefault: o,
              } = t,
              a = (0, u.$)(l, n, b, e, o, k);
            (S[s] = a.style),
              (S[i] = a.display),
              ("hours" === l ||
                "minutes" === l ||
                "seconds" === l ||
                "milliseconds" === l ||
                "microseconds" === l) &&
                (k = a.style);
          }),
            (S.fractionalDigits = (0, a.z)(
              n,
              "fractionalDigits",
              0,
              9,
              void 0,
            ));
        }
        resolvedOptions() {
          if ("object" != typeof this || !(0, e.Wt)(f, this))
            throw TypeError(
              "Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver",
            );
          let t = (0, m.n)(this),
            s = {};
          for (let i of D) {
            let l = t[i];
            "fractionalDigits" === i
              ? void 0 !== l && (l = Number(l))
              : (0, r.V1)(void 0 !== l, `Missing internal slot ${i}`),
              (s[i] = l);
          }
          return s;
        }
        formatToParts(t) {
          if (void 0 === (0, m.n)(this).initializedDurationFormat)
            throw TypeError("Error uninitialized locale");
          let s = (0, y.H)(t),
            i = (0, d.m)(this, s),
            l = [];
          for (let { type: t, unit: s, value: e } of i) {
            let i = { type: t, value: e };
            s && (i.unit = s), l.push(i);
          }
          return l;
        }
        format(t) {
          if (void 0 === (0, m.n)(this).initializedDurationFormat)
            throw TypeError("Error uninitialized locale");
          let s = (0, y.H)(t),
            i = (0, d.m)(this, s),
            l = "";
          for (let { value: t } of i) l += t;
          return l;
        }
        static supportedLocalesOf(t, s) {
          return (0, n.U)(f.availableLocales, (0, l.N)(t), s);
        }
        static __defaultLocale = "en";
        static availableLocales = new Set();
        static localeData = Object.keys(p.N.localeData).reduce((t, s) => {
          f.availableLocales.add(s);
          let i = p.N.localeData[s].nu;
          return (
            (t[s] = {
              nu: i,
              digitalFormat:
                p.N.localeData[s].separator ||
                i.reduce((t, s) => ((t[s] = p.N.default), t), {}),
            }),
            t
          );
        }, {});
        static getDefaultLocale = () => f.__defaultLocale;
        static polyfilled = !0;
      }
    },
  },
]);
//# sourceMappingURL=15380.fdf2669d3a974e91.js.map
