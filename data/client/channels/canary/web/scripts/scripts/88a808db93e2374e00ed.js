"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46161"],
  {
    238716: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return p;
          },
        }),
        e(47120);
      var o = e(200651),
        l = e(192379),
        s = e(442837),
        i = e(481060),
        r = e(933557),
        a = e(600164),
        c = e(313201),
        d = e(592125),
        u = e(853856),
        h = e(117984),
        x = e(388032),
        m = e(920298);
      function p(t) {
        let {
            channelId: n,
            onClose: e,
            transitionState: p,
            heading: f,
            formTitle: j,
            allowReset: k = !1,
          } = t,
          C = (0, c.Dt)(),
          b = (0, s.e7)([d.Z], () => d.Z.getChannel(n)),
          g = (0, r.ZP)(b),
          B = u.Z.getNickname(n),
          [N, v] = l.useState(null != B ? B : "");
        return (0, o.jsx)("form", {
          onSubmit: function (t) {
            t.preventDefault(), (0, h.UT)(n, N), e();
          },
          children: (0, o.jsxs)(i.ModalRoot, {
            transitionState: p,
            "aria-labelledby": C,
            children: [
              (0, o.jsxs)(i.ModalHeader, {
                separator: !0,
                justify: a.Z.Justify.BETWEEN,
                children: [
                  (0, o.jsx)(i.Heading, {
                    id: C,
                    variant: "heading-lg/semibold",
                    children: f,
                  }),
                  (0, o.jsx)(i.ModalCloseButton, { onClick: e }),
                ],
              }),
              (0, o.jsxs)(i.ModalContent, {
                children: [
                  (0, o.jsx)(i.FormItem, {
                    className: m.name,
                    title: j,
                    children: (0, o.jsx)(i.TextInput, {
                      value: N,
                      onChange: v,
                      placeholder: null != g ? g : void 0,
                      maxLength: 100,
                      autoFocus: !0,
                    }),
                  }),
                  k && null != B
                    ? (0, o.jsx)(i.Button, {
                        look: i.Button.Looks.LINK,
                        color: i.Button.Colors.LINK,
                        size: i.Button.Sizes.NONE,
                        onClick: function () {
                          (0, h.UT)(n, null), e();
                        },
                        className: m.reset,
                        children: x.intl.string(x.t.aE02R0),
                      })
                    : null,
                  (0, o.jsx)(i.Text, {
                    className: m.description,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: x.intl.string(x.t["2vyz+P"]),
                  }),
                ],
              }),
              (0, o.jsxs)(i.ModalFooter, {
                children: [
                  (0, o.jsx)(i.Button, { type: "submit", children: f }),
                  (0, o.jsx)(i.Button, {
                    onClick: e,
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    children: x.intl.string(x.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    920298: function (t, n, e) {
      t.exports = {
        name: "name_d7fb64",
        description: "description_d7fb64",
        reset: "reset_d7fb64",
      };
    },
  },
]);
//# sourceMappingURL=88a808db93e2374e00ed.js.map
