"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5551"],
  {
    355453: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n(47120);
      var a = n(200651),
        s = n(192379),
        o = n(442837),
        r = n(481060),
        i = n(660216),
        l = n(825209),
        c = n(714338),
        d = n(556296),
        u = n(13140),
        h = n(710111),
        g = n(981631),
        x = n(388032),
        m = n(111764);
      function p(e) {
        var t;
        let { transitionState: n, onClose: p } = e,
          j = (0, o.e7)([d.Z], () =>
            d.Z.getKeybindForAction(g.kg4.SOUNDBOARD_HOLD),
          ),
          [N, f] = s.useState(
            null !== (t = null == j ? void 0 : j.shortcut) && void 0 !== t
              ? t
              : [],
          );
        return (
          s.useEffect(
            () => (
              c.Z.disable(),
              () => {
                c.Z.enable();
              }
            ),
            [],
          ),
          (0, a.jsxs)(r.ModalRoot, {
            transitionState: n,
            children: [
              (0, a.jsxs)(r.ModalHeader, {
                separator: !1,
                children: [
                  (0, a.jsx)(r.Heading, {
                    className: m.header,
                    variant: "heading-xl/semibold",
                    children: x.intl.string(x.t["0Osu39"]),
                  }),
                  (0, a.jsx)(r.ModalCloseButton, {
                    className: m.closeButton,
                    onClick: p,
                  }),
                ],
              }),
              (0, a.jsxs)(r.ModalContent, {
                className: m.content,
                children: [
                  (0, a.jsx)(r.HelpMessage, {
                    className: m.warning,
                    messageType: r.HelpMessageTypes.WARNING,
                    children: x.intl.string(x.t["O2v/eH"]),
                  }),
                  (0, a.jsx)(r.Heading, {
                    className: m.formHeader,
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: x.intl.string(x.t.UUpADw),
                  }),
                  (0, a.jsx)(r.Text, {
                    className: m.action,
                    variant: "text-md/normal",
                    children: x.intl.string(x.t["1xFbPz"]),
                  }),
                  (0, a.jsx)(r.Text, {
                    className: m.actionDescription,
                    variant: "text-sm/normal",
                    children: x.intl.string(x.t.laNlTk),
                  }),
                  (0, a.jsx)(r.Heading, {
                    className: m.formHeader,
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: x.intl.string(x.t["1La4tL"]),
                  }),
                  (0, a.jsx)(l.Z, { defaultValue: N, onChange: f }),
                  (0, a.jsx)(r.Anchor, {
                    className: m.resetButton,
                    onClick: () => f((0, u.Kd)(h.D_)),
                    children: x.intl.string(x.t["s7+2ra"]),
                  }),
                ],
              }),
              (0, a.jsxs)(r.ModalFooter, {
                children: [
                  (0, a.jsx)(r.Button, {
                    onClick: function () {
                      if (0 === N.length)
                        return null != j && i.Z.deleteKeybind(j.id), p();
                      null == j
                        ? i.Z.addKeybind({
                            action: g.kg4.SOUNDBOARD_HOLD,
                            shortcut: N,
                            enabled: !0,
                            params: {},
                          })
                        : i.Z.setKeybind({ ...j, shortcut: N });
                      p();
                    },
                    children: x.intl.string(x.t.R3BPHx),
                  }),
                  (0, a.jsx)(r.Button, {
                    onClick: p,
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.PRIMARY,
                    children: x.intl.string(x.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    111764: function (e, t, n) {
      e.exports = {
        closeButton: "closeButton_aa4ca4",
        content: "content_aa4ca4",
        header: "header_aa4ca4",
        warning: "warning_aa4ca4",
        formHeader: "formHeader_aa4ca4",
        action: "action_aa4ca4",
        actionDescription: "actionDescription_aa4ca4",
        resetButton: "resetButton_aa4ca4",
      };
    },
  },
]);
//# sourceMappingURL=69394944e8be3d9cec19.js.map
