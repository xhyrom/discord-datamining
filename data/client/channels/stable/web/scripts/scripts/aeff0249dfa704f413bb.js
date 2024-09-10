"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18912"],
  {
    525377: function (e) {
      e.exports = "/assets/62b480204691a6aa6249.svg";
    },
    538211: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return n;
        },
      });
      var a = t(70722),
        l = t(689938);
      function n(e, s) {
        return [
          {
            value: a.kr.BLACK_SCREEN,
            label: s
              ? l.Z.Messages.STREAM_REPORT_ENDED_BLACK
              : l.Z.Messages.STREAM_REPORT_BLACK,
          },
          {
            value: a.kr.BLURRY,
            label: s
              ? l.Z.Messages.STREAM_REPORT_ENDED_BLURRY
              : l.Z.Messages.STREAM_REPORT_BLURRY,
          },
          {
            value: a.kr.LAGGING,
            label: s
              ? l.Z.Messages.STREAM_REPORT_ENDED_LAGGING
              : l.Z.Messages.STREAM_REPORT_LAGGING,
          },
          {
            value: a.kr.OUT_OF_SYNC,
            label: s
              ? l.Z.Messages.STREAM_REPORT_ENDED_OUT_OF_SYNC
              : l.Z.Messages.STREAM_REPORT_OUT_OF_SYNC,
          },
          {
            value: a.kr.AUDIO_MISSING,
            label: s
              ? l.Z.Messages.STREAM_REPORT_ENDED_AUDIO_MISSING
              : l.Z.Messages.STREAM_REPORT_AUDIO_MISSING,
          },
          {
            value: a.kr.AUDIO_POOR,
            label: s
              ? l.Z.Messages.STREAM_REPORT_ENDED_AUDIO_POOR
              : l.Z.Messages.STREAM_REPORT_AUDIO_POOR,
          },
          {
            value: a.kr.STREAM_STOPPED,
            label: l.Z.Messages.STREAM_REPORT_ENDED_STREAM_STOPPED_UNEXPECTEDLY,
          },
          { value: a.kr.OTHER, label: l.Z.Messages.CALL_FEEDBACK_OPTION_OTHER },
        ];
      }
    },
    698066: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return n;
        },
      });
      var a = t(626135),
        l = t(981631);
      function n(e) {
        let {
          problem: s,
          stream: t,
          feedback: n,
          streamApplication: o,
          analyticsData: r,
          location: _,
          rating: i = null,
        } = e;
        a.default.track(l.rMx.STREAM_REPORT_PROBLEM, {
          reason: s,
          streamer_user_id: t.ownerId,
          stream_channel_id: t.channelId,
          guild_id: t.guildId,
          application_id: null != o ? o.id : null,
          application_name: null != o ? o.name : null,
          location: _,
          rating: i,
          feedback: n,
          ...r,
        });
      }
    },
    111810: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return r;
        },
      });
      var a = t(470079),
        l = t(252618),
        n = t(358085),
        o = t(689938);
      function r() {
        return (
          a.useEffect(() => {
            !n.isPlatformEmbedded &&
              (0, l.EM)({
                messages: [
                  o.Z.Messages.GO_LIVE_HEY,
                  o.Z.Messages.GO_LIVE_LOOK,
                  o.Z.Messages.GO_LIVE_LISTEN,
                ],
                interval: 600,
                count: 20,
                onlyWhenBlurred: !0,
              });
          }, []),
          null
        );
      }
    },
    340140: function (e, s, t) {
      t.r(s), t(47120);
      var a = t(735250),
        l = t(470079),
        n = t(481060),
        o = t(600164),
        r = t(538211),
        _ = t(698066),
        i = t(111810),
        E = t(689938),
        R = t(452988),
        u = t(54934);
      function c(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      class M extends l.PureComponent {
        render() {
          let { isStreamer: e, transitionState: s, onClose: t } = this.props,
            { problem: l } = this.state;
          return (0, a.jsxs)(n.ModalRoot, {
            transitionState: s,
            size: n.ModalSize.SMALL,
            "aria-label": E.Z.Messages.STREAM_REPORT_A_PROBLEM,
            children: [
              (0, a.jsx)(i.Z, {}),
              (0, a.jsxs)(n.ModalHeader, {
                separator: !1,
                children: [
                  (0, a.jsx)(n.ModalCloseButton, {
                    className: u.closeButton,
                    onClick: t,
                  }),
                  (0, a.jsx)(n.FormTitle, {
                    tag: "h2",
                    className: u.title,
                    children: E.Z.Messages.STREAM_REPORT_A_PROBLEM,
                  }),
                ],
              }),
              (0, a.jsxs)(n.ModalContent, {
                className: u.content,
                children: [
                  (0, a.jsx)(n.Text, {
                    variant: "text-sm/normal",
                    children: E.Z.Messages.STREAM_REPORT_PROBLEM_BODY,
                  }),
                  (0, a.jsx)(n.FormItem, {
                    title: E.Z.Messages.STREAM_REPORT_LABEL,
                    children: (0, a.jsx)(n.SingleSelect, {
                      placeholder: E.Z.Messages.STREAM_REPORT_PLACEHOLDER,
                      options: (0, r.Z)(e, !1),
                      onChange: this.handleChanged,
                      value: l,
                      maxVisibleItems: 4,
                    }),
                  }),
                  (0, a.jsx)("div", { className: R.art }),
                ],
              }),
              (0, a.jsxs)(n.ModalFooter, {
                className: u.__invalid_footer,
                children: [
                  (0, a.jsx)(n.Button, {
                    color: n.Button.Colors.BRAND,
                    disabled: null == l,
                    onClick: this.handleSubmit,
                    children: E.Z.Messages.STREAM_REPORT_SUBMIT,
                  }),
                  (0, a.jsx)(o.Z, {
                    children: (0, a.jsx)(n.Button, {
                      look: n.Button.Looks.LINK,
                      color: n.Button.Colors.PRIMARY,
                      size: n.Button.Sizes.NONE,
                      onClick: t,
                      children: E.Z.Messages.CANCEL,
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            c(this, "state", { problem: null }),
            c(this, "handleChanged", (e) => {
              this.setState({ problem: null != e ? e : null });
            }),
            c(this, "handleSubmit", () => {
              let {
                  stream: e,
                  streamApplication: s,
                  analyticsData: l,
                  onClose: o,
                } = this.props,
                { problem: r } = this.state;
              (0, _.Z)({
                problem: r,
                stream: e,
                feedback: "",
                streamApplication: s,
                analyticsData: l,
                location: "Stream",
              }),
                o(),
                (0, n.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("14466")
                    .then(t.bind(t, 729328));
                  return (s) =>
                    (0, a.jsx)(e, {
                      body: E.Z.Messages.STREAM_REPORTED_BODY,
                      ...s,
                    });
                });
            });
        }
      }
      s.default = M;
    },
    452988: function (e, s, t) {
      e.exports = { art: "art_f2f3e8" };
    },
    54934: function (e, s, t) {
      e.exports = {
        closeButton: "closeButton_c5c295",
        title: "title_c5c295",
        content: "content_c5c295",
      };
    },
  },
]);
//# sourceMappingURL=aeff0249dfa704f413bb.js.map
