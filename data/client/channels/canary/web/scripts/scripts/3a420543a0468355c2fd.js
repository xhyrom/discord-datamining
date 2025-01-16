"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25070"],
  {
    670794: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return c;
          },
        }),
        e(47120);
      var i = e(200651),
        l = e(192379),
        o = e(481060),
        s = e(194359),
        r = e(313201),
        a = e(51144),
        d = e(388032),
        u = e(154210);
      function c(t) {
        let { user: n, nickname: e, transitionState: c, onClose: p } = t,
          h = (0, r.Dt)(),
          [x, f] = l.useState(!1),
          [g, m] = l.useState(e),
          j = l.useRef(null),
          k = async (t) => {
            t.preventDefault(), f(!0);
            try {
              await s.Z.updateRelationship(n.id, g), p();
            } catch (t) {
            } finally {
              f(!1);
            }
          },
          B =
            null == e
              ? d.intl.string(d.t.BGYkaG)
              : d.intl.string(d.t["8pOYUF"]);
        return (0, i.jsx)(o.ModalRoot, {
          transitionState: c,
          size: o.ModalSize.SMALL,
          "aria-labelledby": h,
          children: (0, i.jsxs)("form", {
            onSubmit: k,
            children: [
              (0, i.jsx)(o.ModalHeader, {
                separator: !1,
                children: (0, i.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: B,
                }),
              }),
              (0, i.jsxs)(o.ModalContent, {
                children: [
                  (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: u.description,
                    children: d.intl.string(d.t["NdQ+lJ"]),
                  }),
                  (0, i.jsx)(o.FormItem, {
                    title: d.intl.string(d.t.pqG6GR),
                    children: (0, i.jsx)(o.TextInput, {
                      inputRef: j,
                      value: null != g ? g : "",
                      placeholder: a.ZP.getName(n),
                      onChange: m,
                      maxLength: 32,
                      className: u.input,
                      autoFocus: !0,
                    }),
                  }),
                  (0, i.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.LINK,
                    size: o.Button.Sizes.NONE,
                    onClick: () => {
                      var t;
                      m(null),
                        null === (t = j.current) || void 0 === t || t.focus();
                    },
                    className: u.reset,
                    children: d.intl.string(d.t["9qSBvL"]),
                  }),
                ],
              }),
              (0, i.jsxs)(o.ModalFooter, {
                children: [
                  (0, i.jsx)(o.Button, {
                    type: "submit",
                    disabled: x,
                    children: d.intl.string(d.t.R3BPHx),
                  }),
                  (0, i.jsx)(o.Button, {
                    onClick: p,
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    children: d.intl.string(d.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    154210: function (t, n, e) {
      t.exports = {
        description: "description_d7f730",
        input: "input_d7f730",
        reset: "reset_d7f730",
      };
    },
  },
]);
//# sourceMappingURL=3a420543a0468355c2fd.js.map
