"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69208"],
  {
    490166: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return r;
          },
        });
      var o = e(200651);
      e(192379);
      var i = e(481060),
        s = e(536442),
        l = e(13140),
        a = e(487029),
        d = e(388032),
        c = e(167818);
      function r(t) {
        let {
          guildId: n,
          channel: r,
          keybind: u,
          transitionState: h,
          onClose: k,
        } = t;
        function b() {
          (0, s.Kw)(s.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), k();
        }
        function x() {
          b(),
            (0, i.openModalLazy)(async () => {
              let { default: t } = await e.e("5551").then(e.bind(e, 355453));
              return (n) => (0, o.jsx)(t, { ...n });
            });
        }
        return (0, o.jsxs)(i.ModalRoot, {
          transitionState: h,
          "aria-label": d.intl.string(d.t["yJeV5+"]),
          children: [
            (0, o.jsxs)(i.ModalContent, {
              className: c.content,
              children: [
                (0, o.jsx)(i.Heading, {
                  variant: "heading-xl/extrabold",
                  className: c.header,
                  children: d.intl.string(d.t["yJeV5+"]),
                }),
                (0, o.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: d.intl.format(d.t.fq3Sw8, {
                    keybind: (0, l.BB)(u.shortcut, !0).split(" + "),
                    keybindHook: (t, n) =>
                      (0, o.jsx)(
                        "span",
                        {
                          className: c.keybindHintKeys,
                          children: (0, o.jsx)(i.KeyCombo, {
                            className: c.keybindShortcut,
                            shortcut: (0, l.BB)(u.shortcut, !1),
                          }),
                        },
                        n,
                      ),
                    openSettingsHook: (t, n) =>
                      (0, o.jsx)(i.Anchor, { onClick: x, children: t }, n),
                  }),
                }),
                (0, o.jsx)("div", {
                  className: c.soundWheel,
                  children: (0, o.jsx)(a.Z, {
                    width: 372,
                    height: 316,
                    guildId: n,
                    channel: r,
                    interactive: !1,
                    keepOpen: !0,
                    onClose: () => {},
                    analyticsSource: "education modal",
                  }),
                }),
              ],
            }),
            (0, o.jsxs)(i.ModalFooter, {
              children: [
                (0, o.jsx)(i.Button, {
                  onClick: b,
                  children: d.intl.string(d.t.ZwRzIC),
                }),
                (0, o.jsx)(i.Button, {
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.PRIMARY,
                  onClick: x,
                  children: d.intl.string(d.t["TJ0N9/"]),
                }),
              ],
            }),
            (0, o.jsx)(i.ModalCloseButton, {
              className: c.closeButton,
              onClick: b,
            }),
          ],
        });
      }
    },
    167818: function (t, n, e) {
      t.exports = {
        content: "content_e91bdf",
        header: "header_e91bdf",
        keybindHintKeys: "keybindHintKeys_e91bdf",
        keybindShortcut: "keybindShortcut_e91bdf",
        closeButton: "closeButton_e91bdf",
        soundWheel: "soundWheel_e91bdf",
      };
    },
  },
]);
//# sourceMappingURL=0a058d137300ba29ea83.js.map
