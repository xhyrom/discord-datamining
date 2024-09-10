"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25070"],
  {
    670794: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        }),
        s(47120);
      var n = s(735250),
        o = s(470079),
        a = s(481060),
        i = s(194359),
        l = s(313201),
        r = s(51144),
        u = s(689938),
        d = s(928883);
      function c(e) {
        let { user: t, nickname: s, transitionState: c, onClose: N } = e,
          h = (0, l.Dt)(),
          [p, M] = o.useState(!1),
          [I, x] = o.useState(s),
          C = o.useRef(null),
          E = async (e) => {
            e.preventDefault(), M(!0);
            try {
              await i.Z.updateRelationship(t.id, I), N();
            } catch (e) {
            } finally {
              M(!1);
            }
          },
          f =
            null == s
              ? u.Z.Messages.ADD_FRIEND_NICKNAME
              : u.Z.Messages.CHANGE_FRIEND_NICKNAME;
        return (0, n.jsx)(a.ModalRoot, {
          transitionState: c,
          size: a.ModalSize.SMALL,
          "aria-labelledby": h,
          children: (0, n.jsxs)("form", {
            onSubmit: E,
            children: [
              (0, n.jsx)(a.ModalHeader, {
                separator: !1,
                children: (0, n.jsx)(a.Heading, {
                  variant: "heading-lg/semibold",
                  children: f,
                }),
              }),
              (0, n.jsxs)(a.ModalContent, {
                children: [
                  (0, n.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: d.description,
                    children: u.Z.Messages.FRIEND_NICKNAME_DESCRIPTION,
                  }),
                  (0, n.jsx)(a.FormItem, {
                    title: u.Z.Messages.FRIEND_NICKNAME,
                    children: (0, n.jsx)(a.TextInput, {
                      inputRef: C,
                      value: null != I ? I : "",
                      placeholder: r.ZP.getName(t),
                      onChange: x,
                      maxLength: 32,
                      className: d.input,
                      autoFocus: !0,
                    }),
                  }),
                  (0, n.jsx)(a.Button, {
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.LINK,
                    size: a.Button.Sizes.NONE,
                    onClick: () => {
                      var e;
                      x(null),
                        null === (e = C.current) || void 0 === e || e.focus();
                    },
                    className: d.reset,
                    children: u.Z.Messages.RESET_FRIEND_NICKNAME,
                  }),
                ],
              }),
              (0, n.jsxs)(a.ModalFooter, {
                children: [
                  (0, n.jsx)(a.Button, {
                    type: "submit",
                    disabled: p,
                    children: u.Z.Messages.SAVE,
                  }),
                  (0, n.jsx)(a.Button, {
                    onClick: N,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    children: u.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    928883: function (e, t, s) {
      e.exports = {
        description: "description_d7f730",
        input: "input_d7f730",
        reset: "reset_d7f730",
      };
    },
  },
]);
//# sourceMappingURL=44aaee7424fe13660152.js.map
