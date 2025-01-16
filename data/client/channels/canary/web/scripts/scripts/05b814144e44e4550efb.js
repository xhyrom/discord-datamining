"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87549"],
  {
    38880: function (t) {
      t.exports = "/assets/275254e40a6da0538103.svg";
    },
    913962: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return C;
          },
        });
      var i = e(200651);
      e(192379);
      var o = e(481060),
        a = e(230711),
        l = e(600164),
        s = e(313201),
        r = e(695346),
        d = e(626135),
        c = e(981631),
        u = e(526761),
        h = e(388032),
        p = e(559686),
        x = e(38880);
      function C(t) {
        let { onClose: n, transitionState: e } = t,
          C = (0, s.Dt)();
        function f() {
          n(),
            a.Z.open(c.oAB.ACCESSIBILITY, null, {
              scrollPosition: u.rP.LEGACY_CHAT_INPUT,
            });
        }
        return (0, i.jsxs)(o.ModalRoot, {
          transitionState: e,
          "aria-labelledby": C,
          children: [
            (0, i.jsx)("img", { className: p.art, src: x, alt: "" }),
            (0, i.jsx)(o.ModalContent, {
              children: (0, i.jsxs)(l.Z, {
                direction: l.Z.Direction.VERTICAL,
                justify: l.Z.Justify.CENTER,
                children: [
                  (0, i.jsx)(o.Heading, {
                    id: C,
                    variant: "heading-lg/semibold",
                    className: p.title,
                    children: h.intl.string(h.t.G9HG5O),
                  }),
                  (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: p.body,
                    children: h.intl.format(h.t.ZtUieH, {
                      openSettingsHook: (t, n) =>
                        (0, i.jsx)(o.Anchor, { onClick: f, children: t }, n),
                    }),
                  }),
                ],
              }),
            }),
            (0, i.jsxs)(o.ModalFooter, {
              children: [
                (0, i.jsx)(o.Button, {
                  type: "button",
                  onClick: function () {
                    d.default.track(c.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                      enabled: !1,
                      location: "LegacyChatInputExplanationModal",
                    }),
                      r.dN.updateSetting(!1),
                      n();
                  },
                  children: h.intl.string(h.t.VdzwlJ),
                }),
                (0, i.jsx)(o.Button, {
                  type: "button",
                  look: o.Button.Looks.LINK,
                  size: o.Button.Sizes.MEDIUM,
                  color: o.Button.Colors.PRIMARY,
                  onClick: n,
                  children: h.intl.string(h.t.f3Pet7),
                }),
              ],
            }),
          ],
        });
      }
    },
    559686: function (t, n, e) {
      t.exports = {
        title: "title_dee2a4",
        body: "body_dee2a4",
        art: "art_dee2a4",
      };
    },
  },
]);
//# sourceMappingURL=05b814144e44e4550efb.js.map
