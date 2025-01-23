"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18912"],
  {
    525377: function (t) {
      t.exports = "/assets/62b480204691a6aa6249.svg";
    },
    538211: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = e(70722),
        i = e(388032);
      function a(t, n) {
        return [
          {
            value: l.kr.BLACK_SCREEN,
            label: n ? i.intl.string(i.t["0X5Zbm"]) : i.intl.string(i.t.fxiRNj),
          },
          {
            value: l.kr.BLURRY,
            label: n ? i.intl.string(i.t.VVPQy8) : i.intl.string(i.t.E8jTMD),
          },
          {
            value: l.kr.LAGGING,
            label: n ? i.intl.string(i.t.ObEHd3) : i.intl.string(i.t.VoSJER),
          },
          {
            value: l.kr.OUT_OF_SYNC,
            label: n ? i.intl.string(i.t.mYmwDw) : i.intl.string(i.t["+NluQk"]),
          },
          {
            value: l.kr.AUDIO_MISSING,
            label: n ? i.intl.string(i.t.Xwv419) : i.intl.string(i.t.G2egzc),
          },
          {
            value: l.kr.AUDIO_POOR,
            label: n ? i.intl.string(i.t["fHey+f"]) : i.intl.string(i.t.aHOfIi),
          },
          { value: l.kr.STREAM_STOPPED, label: i.intl.string(i.t.uEoqQk) },
          { value: l.kr.OTHER, label: i.intl.string(i.t["emlT9/"]) },
        ];
      }
    },
    698066: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = e(626135),
        i = e(981631);
      function a(t) {
        let {
          problem: n,
          stream: e,
          feedback: a,
          streamApplication: r,
          analyticsData: s,
          location: o,
          rating: u = null,
        } = t;
        l.default.track(i.rMx.STREAM_REPORT_PROBLEM, {
          reason: n,
          streamer_user_id: e.ownerId,
          stream_channel_id: e.channelId,
          guild_id: e.guildId,
          application_id: null != r ? r.id : null,
          application_name: null != r ? r.name : null,
          location: o,
          rating: u,
          feedback: a,
          ...s,
        });
      }
    },
    648159: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = e(192379),
        i = e(252618),
        a = e(358085),
        r = e(388032);
      function s() {
        return (
          l.useEffect(() => {
            !a.isPlatformEmbedded &&
              (0, i.EM)({
                messages: [
                  r.intl.string(r.t.KIX3cn),
                  r.intl.string(r.t["UbO+8v"]),
                  r.intl.string(r.t.MbySu7),
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
    340140: function (t, n, e) {
      e.r(n), e(47120);
      var l = e(200651),
        i = e(192379),
        a = e(481060),
        r = e(600164),
        s = e(538211),
        o = e(698066),
        u = e(648159),
        c = e(388032),
        d = e(260775),
        m = e(434204);
      function h(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      class g extends i.PureComponent {
        render() {
          let { isStreamer: t, transitionState: n, onClose: e } = this.props,
            { problem: i } = this.state;
          return (0, l.jsxs)(a.ModalRoot, {
            transitionState: n,
            size: a.ModalSize.SMALL,
            "aria-label": c.intl.string(c.t.qnJ9W1),
            children: [
              (0, l.jsx)(u.Z, {}),
              (0, l.jsxs)(a.ModalHeader, {
                separator: !1,
                className: d.modalHeader,
                children: [
                  (0, l.jsx)(a.Heading, {
                    variant: "text-md/semibold",
                    className: m.title,
                    children: c.intl.string(c.t.qnJ9W1),
                  }),
                  (0, l.jsx)(a.ModalCloseButton, {
                    className: m.closeButton,
                    innerClassName: d.modalInnerCloseButton,
                    onClick: e,
                  }),
                ],
              }),
              (0, l.jsxs)(a.ModalContent, {
                className: m.content,
                children: [
                  (0, l.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: c.intl.string(c.t["7vw0h4"]),
                  }),
                  (0, l.jsx)(a.FormItem, {
                    title: c.intl.string(c.t["6Y1t5O"]),
                    children: (0, l.jsx)(a.SingleSelect, {
                      placeholder: c.intl.string(c.t.U0kGk5),
                      options: (0, s.Z)(t, !1),
                      onChange: this.handleChanged,
                      value: i,
                      maxVisibleItems: 4,
                    }),
                  }),
                  (0, l.jsx)("div", { className: d.art }),
                ],
              }),
              (0, l.jsxs)(a.ModalFooter, {
                className: m.__invalid_footer,
                children: [
                  (0, l.jsx)(a.Button, {
                    color: a.Button.Colors.BRAND,
                    disabled: null == i,
                    onClick: this.handleSubmit,
                    children: c.intl.string(c.t.E48BIS),
                  }),
                  (0, l.jsx)(r.Z, {
                    children: (0, l.jsx)(a.Button, {
                      look: a.Button.Looks.LINK,
                      color: a.Button.Colors.PRIMARY,
                      size: a.Button.Sizes.NONE,
                      onClick: e,
                      children: c.intl.string(c.t["ETE/oK"]),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...t) {
          super(...t),
            h(this, "state", { problem: null }),
            h(this, "handleChanged", (t) => {
              this.setState({ problem: null != t ? t : null });
            }),
            h(this, "handleSubmit", () => {
              let {
                  stream: t,
                  streamApplication: n,
                  analyticsData: i,
                  onClose: r,
                } = this.props,
                { problem: s } = this.state;
              (0, o.Z)({
                problem: s,
                stream: t,
                feedback: "",
                streamApplication: n,
                analyticsData: i,
                location: "Stream",
              }),
                r(),
                (0, a.openModalLazy)(async () => {
                  let { default: t } = await e
                    .e("14466")
                    .then(e.bind(e, 729328));
                  return (n) =>
                    (0, l.jsx)(t, { body: c.intl.string(c.t.mMTVnp), ...n });
                });
            });
        }
      }
      n.default = g;
    },
    260775: function (t, n, e) {
      t.exports = {
        art: "art_f2f3e8",
        modalHeader: "modalHeader_f2f3e8",
        modalInnerCloseButton: "modalInnerCloseButton_f2f3e8",
      };
    },
    434204: function (t, n, e) {
      t.exports = {
        closeButton: "closeButton_c5c295",
        title: "title_c5c295",
        content: "content_c5c295",
      };
    },
  },
]);
//# sourceMappingURL=f998a81edc0bd980b825.js.map
