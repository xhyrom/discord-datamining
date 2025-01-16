"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18912"],
  {
    525377: function (t) {
      t.exports = "/assets/62b480204691a6aa6249.svg";
    },
    538211: function (t, n, l) {
      l.d(n, {
        Z: function () {
          return r;
        },
      });
      var e = l(70722),
        i = l(388032);
      function r(t, n) {
        return [
          {
            value: e.kr.BLACK_SCREEN,
            label: n ? i.intl.string(i.t["0X5Zbm"]) : i.intl.string(i.t.fxiRNj),
          },
          {
            value: e.kr.BLURRY,
            label: n ? i.intl.string(i.t.VVPQy8) : i.intl.string(i.t.E8jTMD),
          },
          {
            value: e.kr.LAGGING,
            label: n ? i.intl.string(i.t.ObEHd3) : i.intl.string(i.t.VoSJER),
          },
          {
            value: e.kr.OUT_OF_SYNC,
            label: n ? i.intl.string(i.t.mYmwDw) : i.intl.string(i.t["+NluQk"]),
          },
          {
            value: e.kr.AUDIO_MISSING,
            label: n ? i.intl.string(i.t.Xwv419) : i.intl.string(i.t.G2egzc),
          },
          {
            value: e.kr.AUDIO_POOR,
            label: n ? i.intl.string(i.t["fHey+f"]) : i.intl.string(i.t.aHOfIi),
          },
          { value: e.kr.STREAM_STOPPED, label: i.intl.string(i.t.uEoqQk) },
          { value: e.kr.OTHER, label: i.intl.string(i.t["emlT9/"]) },
        ];
      }
    },
    698066: function (t, n, l) {
      l.d(n, {
        Z: function () {
          return r;
        },
      });
      var e = l(626135),
        i = l(981631);
      function r(t) {
        let {
          problem: n,
          stream: l,
          feedback: r,
          streamApplication: s,
          analyticsData: a,
          location: o,
          rating: u = null,
        } = t;
        e.default.track(i.rMx.STREAM_REPORT_PROBLEM, {
          reason: n,
          streamer_user_id: l.ownerId,
          stream_channel_id: l.channelId,
          guild_id: l.guildId,
          application_id: null != s ? s.id : null,
          application_name: null != s ? s.name : null,
          location: o,
          rating: u,
          feedback: r,
          ...a,
        });
      }
    },
    648159: function (t, n, l) {
      l.d(n, {
        Z: function () {
          return a;
        },
      });
      var e = l(192379),
        i = l(252618),
        r = l(358085),
        s = l(388032);
      function a() {
        return (
          e.useEffect(() => {
            !r.isPlatformEmbedded &&
              (0, i.EM)({
                messages: [
                  s.intl.string(s.t.KIX3cn),
                  s.intl.string(s.t["UbO+8v"]),
                  s.intl.string(s.t.MbySu7),
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
    340140: function (t, n, l) {
      l.r(n), l(47120);
      var e = l(200651),
        i = l(192379),
        r = l(481060),
        s = l(600164),
        a = l(538211),
        o = l(698066),
        u = l(648159),
        c = l(388032),
        d = l(260775),
        h = l(434204);
      function g(t, n, l) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = l),
          t
        );
      }
      class m extends i.PureComponent {
        render() {
          let { isStreamer: t, transitionState: n, onClose: l } = this.props,
            { problem: i } = this.state;
          return (0, e.jsxs)(r.ModalRoot, {
            transitionState: n,
            size: r.ModalSize.SMALL,
            "aria-label": c.intl.string(c.t.qnJ9W1),
            children: [
              (0, e.jsx)(u.Z, {}),
              (0, e.jsxs)(r.ModalHeader, {
                separator: !1,
                children: [
                  (0, e.jsx)(r.ModalCloseButton, {
                    className: h.closeButton,
                    onClick: l,
                  }),
                  (0, e.jsx)(r.FormTitle, {
                    tag: "h2",
                    className: h.title,
                    children: c.intl.string(c.t.qnJ9W1),
                  }),
                ],
              }),
              (0, e.jsxs)(r.ModalContent, {
                className: h.content,
                children: [
                  (0, e.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    children: c.intl.string(c.t["7vw0h4"]),
                  }),
                  (0, e.jsx)(r.FormItem, {
                    title: c.intl.string(c.t["6Y1t5O"]),
                    children: (0, e.jsx)(r.SingleSelect, {
                      placeholder: c.intl.string(c.t.U0kGk5),
                      options: (0, a.Z)(t, !1),
                      onChange: this.handleChanged,
                      value: i,
                      maxVisibleItems: 4,
                    }),
                  }),
                  (0, e.jsx)("div", { className: d.art }),
                ],
              }),
              (0, e.jsxs)(r.ModalFooter, {
                className: h.__invalid_footer,
                children: [
                  (0, e.jsx)(r.Button, {
                    color: r.Button.Colors.BRAND,
                    disabled: null == i,
                    onClick: this.handleSubmit,
                    children: c.intl.string(c.t.E48BIS),
                  }),
                  (0, e.jsx)(s.Z, {
                    children: (0, e.jsx)(r.Button, {
                      look: r.Button.Looks.LINK,
                      color: r.Button.Colors.PRIMARY,
                      size: r.Button.Sizes.NONE,
                      onClick: l,
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
            g(this, "state", { problem: null }),
            g(this, "handleChanged", (t) => {
              this.setState({ problem: null != t ? t : null });
            }),
            g(this, "handleSubmit", () => {
              let {
                  stream: t,
                  streamApplication: n,
                  analyticsData: i,
                  onClose: s,
                } = this.props,
                { problem: a } = this.state;
              (0, o.Z)({
                problem: a,
                stream: t,
                feedback: "",
                streamApplication: n,
                analyticsData: i,
                location: "Stream",
              }),
                s(),
                (0, r.openModalLazy)(async () => {
                  let { default: t } = await l
                    .e("14466")
                    .then(l.bind(l, 729328));
                  return (n) =>
                    (0, e.jsx)(t, { body: c.intl.string(c.t.mMTVnp), ...n });
                });
            });
        }
      }
      n.default = m;
    },
    260775: function (t, n, l) {
      t.exports = { art: "art_f2f3e8" };
    },
    434204: function (t, n, l) {
      t.exports = {
        closeButton: "closeButton_c5c295",
        title: "title_c5c295",
        content: "content_c5c295",
      };
    },
  },
]);
//# sourceMappingURL=5e19214305aca2d7175e.js.map
