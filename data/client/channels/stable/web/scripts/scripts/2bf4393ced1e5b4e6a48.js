"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46161"],
  {
    238716: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n(47120);
      var o = n(735250),
        s = n(470079),
        l = n(442837),
        a = n(481060),
        i = n(933557),
        r = n(600164),
        c = n(313201),
        d = n(592125),
        u = n(853856),
        h = n(117984),
        x = n(689938),
        m = n(822099);
      function p(e) {
        let {
            channelId: t,
            onClose: n,
            transitionState: p,
            heading: C,
            formTitle: N,
            allowReset: f = !1,
          } = e,
          j = (0, c.Dt)(),
          k = (0, l.e7)([d.Z], () => d.Z.getChannel(t)),
          E = (0, i.ZP)(k),
          I = u.Z.getNickname(t),
          [M, b] = s.useState(null != I ? I : "");
        return (0, o.jsx)("form", {
          onSubmit: function (e) {
            e.preventDefault(), (0, h.UT)(t, M), n();
          },
          children: (0, o.jsxs)(a.ModalRoot, {
            transitionState: p,
            "aria-labelledby": j,
            children: [
              (0, o.jsxs)(a.ModalHeader, {
                separator: !0,
                justify: r.Z.Justify.BETWEEN,
                children: [
                  (0, o.jsx)(a.Heading, {
                    id: j,
                    variant: "heading-lg/semibold",
                    children: C,
                  }),
                  (0, o.jsx)(a.ModalCloseButton, { onClick: n }),
                ],
              }),
              (0, o.jsxs)(a.ModalContent, {
                children: [
                  (0, o.jsx)(a.FormItem, {
                    className: m.name,
                    title: N,
                    children: (0, o.jsx)(a.TextInput, {
                      value: M,
                      onChange: b,
                      placeholder: null != E ? E : void 0,
                      maxLength: 100,
                      autoFocus: !0,
                    }),
                  }),
                  f && null != I
                    ? (0, o.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.LINK,
                        size: a.Button.Sizes.NONE,
                        onClick: function () {
                          (0, h.UT)(t, null), n();
                        },
                        className: m.reset,
                        children: x.Z.Messages.RESET_NICKNAME,
                      })
                    : null,
                  (0, o.jsx)(a.Text, {
                    className: m.description,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: x.Z.Messages.FAVORITES_SET_NICKNAME_DESCRIPTION,
                  }),
                ],
              }),
              (0, o.jsxs)(a.ModalFooter, {
                children: [
                  (0, o.jsx)(a.Button, { type: "submit", children: C }),
                  (0, o.jsx)(a.Button, {
                    onClick: n,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    children: x.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    822099: function (e, t, n) {
      e.exports = {
        name: "name_d7fb64",
        description: "description_d7fb64",
        reset: "reset_d7fb64",
      };
    },
  },
]);
//# sourceMappingURL=2bf4393ced1e5b4e6a48.js.map
