"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90042"],
  {
    196051: function (e, n, t) {
      t.d(n, {
        Bo: function () {
          return o;
        },
        Ct: function () {
          return s;
        },
        LA: function () {
          return a;
        },
        NB: function () {
          return r;
        },
        cP: function () {
          return i;
        },
      });
      var c = t(570140);
      function i(e, n, t, i, a) {
        c.Z.dispatch({
          type: "SPEAK_TEXT",
          text: e,
          interrupt: n,
          maxLength: t,
          onStart: i,
          onEnd: a,
        });
      }
      function a(e, n) {
        c.Z.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: n });
      }
      function o(e, n) {
        c.Z.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: n });
      }
      function r() {
        c.Z.dispatch({ type: "STOP_SPEAKING" });
      }
      function s(e) {
        c.Z.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
      }
    },
    441729: function (e, n, t) {
      var c,
        i = t(442837),
        a = t(570140);
      function o(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let r = { speechRate: 1, currentMessage: null },
        s = r;
      class u extends (c = i.ZP.DeviceSettingsStore) {
        initialize(e) {
          s = { ...r, ...(null != e ? e : null) };
        }
        isSpeakingMessage(e, n) {
          let { currentMessage: t } = s;
          return null !== t && t.channelId === e && t.messageId === n;
        }
        get currentMessage() {
          return s.currentMessage;
        }
        get speechRate() {
          return s.speechRate;
        }
        getUserAgnosticState() {
          return s;
        }
      }
      o(u, "displayName", "TTSStore"),
        o(u, "persistKey", "TTSStore"),
        o(u, "migrations", []),
        (n.Z = new u(
          a.Z,
          __OVERLAY__
            ? {}
            : {
                SPEAKING_MESSAGE: function (e) {
                  let { messageId: n, channelId: t } = e;
                  s = { ...s, currentMessage: { messageId: n, channelId: t } };
                },
                STOP_SPEAKING: function () {
                  s = { ...s, currentMessage: null };
                },
                SET_TTS_SPEECH_RATE: function (e) {
                  s = { ...s, speechRate: e.speechRate };
                },
              },
        ));
    },
    262704: function (e, n, t) {
      e.exports = {
        spacing: "spacing_ddcc45",
        spacingTop: "spacingTop_ddcc45",
        message: "message_ddcc45",
      };
    },
    561240: function (e, n, t) {
      e.exports = {
        actionContainer: "actionContainer_cec7a5",
        actionIconContainer: "actionIconContainer_cec7a5",
        actionIcon: "actionIcon_cec7a5",
        actionTextContainer: "actionTextContainer_cec7a5",
        actionTextHeader: "actionTextHeader_cec7a5",
        actionTextHelper: "actionTextHelper_cec7a5",
      };
    },
    50455: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a24e84",
        button: "button_a24e84",
        focused: "focused_a24e84",
        icon: "icon_a24e84",
      };
    },
    461404: function (e, n, t) {
      e.exports = { interactionInfoMenuItem: "interactionInfoMenuItem_df26f0" };
    },
    62352: function (e, n, t) {
      e.exports = { list: "list_fd4745" };
    },
  },
]);
//# sourceMappingURL=24797fb709a2d935d09f.js.map
