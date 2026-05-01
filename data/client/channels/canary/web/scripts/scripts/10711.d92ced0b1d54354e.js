"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10711"],
  {
    54570(t, p, c) {
      c.d(p, {
        AU: () => i,
        kC: () => E,
        kP: () => s,
        pr: () => n,
        zU: () => S,
      });
      var h = c(228366);
      function i(t, p, c, i, s) {
        h.h.dispatch({
          type: "SPEAK_TEXT",
          text: t,
          interrupt: p,
          maxLength: c,
          onStart: i,
          onEnd: s,
        });
      }
      function s(t, p) {
        h.h.dispatch({ type: "SPEAK_MESSAGE", channel: t, message: p });
      }
      function E(t, p) {
        h.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: t, messageId: p });
      }
      function n() {
        h.h.dispatch({ type: "STOP_SPEAKING" });
      }
      function S(t) {
        h.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: t });
      }
    },
  },
]);
//# sourceMappingURL=10711.d92ced0b1d54354e.js.map
