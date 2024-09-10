"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87549"],
  {
    38880: function (t) {
      t.exports = "/assets/275254e40a6da0538103.svg";
    },
    913962: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return T;
          },
        });
      var o = n(735250);
      n(470079);
      var s = n(481060),
        a = n(230711),
        i = n(600164),
        l = n(313201),
        r = n(695346),
        d = n(626135),
        c = n(981631),
        A = n(526761),
        _ = n(689938),
        u = n(773611),
        C = n(38880);
      function T(t) {
        let { onClose: e, transitionState: n } = t,
          T = (0, l.Dt)();
        function N() {
          e(),
            a.Z.open(c.oAB.ACCESSIBILITY, null, {
              scrollPosition: A.rP.LEGACY_CHAT_INPUT,
            });
        }
        return (0, o.jsxs)(s.ModalRoot, {
          transitionState: n,
          "aria-labelledby": T,
          children: [
            (0, o.jsx)("img", { className: u.art, src: C, alt: "" }),
            (0, o.jsx)(s.ModalContent, {
              children: (0, o.jsxs)(i.Z, {
                direction: i.Z.Direction.VERTICAL,
                justify: i.Z.Justify.CENTER,
                children: [
                  (0, o.jsx)(s.Heading, {
                    id: T,
                    variant: "heading-lg/semibold",
                    className: u.title,
                    children:
                      _.Z.Messages
                        .LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_TITLE,
                  }),
                  (0, o.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: u.body,
                    children:
                      _.Z.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_MESSAGE.format(
                        {
                          openSettingsHook: (t, e) =>
                            (0, o.jsx)(
                              s.Anchor,
                              { onClick: N, children: t },
                              e,
                            ),
                        },
                      ),
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(s.ModalFooter, {
              children: [
                (0, o.jsx)(s.Button, {
                  type: "button",
                  onClick: function () {
                    d.default.track(c.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                      enabled: !1,
                      location: "LegacyChatInputExplanationModal",
                    }),
                      r.dN.updateSetting(!1),
                      e();
                  },
                  children:
                    _.Z.Messages
                      .LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_BUTTON_CTA,
                }),
                (0, o.jsx)(s.Button, {
                  type: "button",
                  look: s.Button.Looks.LINK,
                  size: s.Button.Sizes.MEDIUM,
                  color: s.Button.Colors.PRIMARY,
                  onClick: e,
                  children: _.Z.Messages.NO_THANKS,
                }),
              ],
            }),
          ],
        });
      }
    },
    773611: function (t, e, n) {
      t.exports = {
        title: "title_dee2a4",
        body: "body_dee2a4",
        art: "art_dee2a4",
      };
    },
  },
]);
//# sourceMappingURL=e01d8e46cabda31a6d17.js.map
