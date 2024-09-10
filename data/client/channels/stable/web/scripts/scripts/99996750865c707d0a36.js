"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69208"],
  {
    490166: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return r;
          },
        });
      var s = t(735250);
      t(470079);
      var o = t(481060),
        a = t(536442),
        i = t(13140),
        d = t(487029),
        c = t(689938),
        l = t(243984);
      function r(e) {
        let {
          guildId: n,
          channel: r,
          keybind: _,
          transitionState: u,
          onClose: h,
        } = e;
        function D() {
          (0, a.Kw)(a.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), h();
        }
        function O() {
          D(),
            (0, o.openModalLazy)(async () => {
              let { default: e } = await t.e("58120").then(t.bind(t, 355453));
              return (n) => (0, s.jsx)(e, { ...n });
            });
        }
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: u,
          "aria-label":
            c.Z.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_HEADER,
          children: [
            (0, s.jsxs)(o.ModalContent, {
              className: l.content,
              children: [
                (0, s.jsx)(o.Heading, {
                  variant: "heading-xl/extrabold",
                  className: l.header,
                  children:
                    c.Z.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_HEADER,
                }),
                (0, s.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children:
                    c.Z.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_BODY.format(
                      {
                        keybind: (0, i.BB)(_.shortcut, !0).split(" + "),
                        keybindHook: (e, n) =>
                          (0, s.jsx)(
                            "span",
                            {
                              className: l.keybindHintKeys,
                              children: (0, s.jsx)(o.KeyCombo, {
                                className: l.keybindShortcut,
                                shortcut: (0, i.BB)(_.shortcut, !1),
                              }),
                            },
                            n,
                          ),
                        openSettingsHook: (e, n) =>
                          (0, s.jsx)(o.Anchor, { onClick: O, children: e }, n),
                      },
                    ),
                }),
                (0, s.jsx)("div", {
                  className: l.soundWheel,
                  children: (0, s.jsx)(d.Z, {
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
            (0, s.jsxs)(o.ModalFooter, {
              children: [
                (0, s.jsx)(o.Button, {
                  onClick: D,
                  children:
                    c.Z.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_CONFIRM,
                }),
                (0, s.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.PRIMARY,
                  onClick: O,
                  children:
                    c.Z.Messages
                      .SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_EDIT_KEYBIND,
                }),
              ],
            }),
            (0, s.jsx)(o.ModalCloseButton, {
              className: l.closeButton,
              onClick: D,
            }),
          ],
        });
      }
    },
    243984: function (e, n, t) {
      e.exports = {
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
//# sourceMappingURL=99996750865c707d0a36.js.map
