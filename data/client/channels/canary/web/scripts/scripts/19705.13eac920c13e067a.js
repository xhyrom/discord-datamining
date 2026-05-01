"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19705"],
  {
    148864(e, t, n) {
      let s;
      n.d(t, { A: () => a });
      var i = n(17928),
        r = n(228366),
        o = n(518977);
      let l = (0, o.rE)();
      function c(e) {
        let { countryCode: t } = e;
        null != t && (l = (0, o.XF)(t) ?? (0, o.rE)());
      }
      class u extends i.Ay.DeviceSettingsStore {
        static displayName = "PhoneStore";
        static persistKey = "PhoneStore";
        initialize(e) {
          null != e && (s = e.selectedCountryCode);
        }
        getUserAgnosticState() {
          return { selectedCountryCode: s };
        }
        getCountryCode() {
          return null != s ? s : l;
        }
      }
      let a = new u(r.h, {
        PHONE_SET_COUNTRY_CODE: function (e) {
          let { countryCode: t } = e;
          s = t;
        },
        CONNECTION_OPEN: c,
        SET_LOCATION_METADATA: c,
      });
    },
  },
]);
//# sourceMappingURL=19705.13eac920c13e067a.js.map
