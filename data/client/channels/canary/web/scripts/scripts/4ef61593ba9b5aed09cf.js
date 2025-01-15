"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93288"],
  {
    396410: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return h;
          },
        }),
        n(47120);
      var l = n(200651),
        o = n(192379),
        s = n(990547),
        i = n(481060),
        r = n(479531),
        a = n(213609),
        u = n(388032),
        d = n(288341);
      let c = RegExp(
        "(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*|^\"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*\")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$",
        "i",
      );
      function h(t) {
        let {
            transitionState: e,
            onFormSubmit: n,
            onSuccess: h,
            onClose: p,
            headerText: m,
            confirmButtonText: f,
            confirmButtonColor: x,
            impressionName: C,
          } = t,
          [g, j] = o.useState(!1),
          [B, M] = o.useState(""),
          [A, k] = o.useState(null),
          Z = o.useRef(null);
        (0, a.Z)({ type: s.ImpressionTypes.MODAL, name: C });
        let y = async (t) => {
          if ((t.preventDefault(), k(null), j(!0), !1 === c.test(B))) {
            k(u.intl.string(u.t.hML7Gx)), j(!1);
            return;
          }
          try {
            let t = null != n ? await n(B) : void 0;
            null != h && (null != t ? h({ response: t, email: B }) : h(B)), p();
          } catch (t) {
            k(new r.Z(t).getAnyErrorMessage());
          } finally {
            j(!1);
          }
        };
        return (0, l.jsx)(i.ModalRoot, {
          transitionState: e,
          children: (0, l.jsxs)("form", {
            onSubmit: y,
            children: [
              (0, l.jsxs)(i.ModalHeader, {
                separator: !1,
                className: d.header,
                children: [
                  (0, l.jsx)(i.Heading, {
                    variant: "heading-lg/semibold",
                    className: d.title,
                    children: m,
                  }),
                  (0, l.jsx)(i.ModalCloseButton, {
                    onClick: p,
                    className: d.modalCloseButton,
                  }),
                ],
              }),
              (0, l.jsx)(i.ModalContent, {
                children: (0, l.jsx)(i.FormItem, {
                  title: u.intl.string(u.t.hvOfmJ),
                  error: A,
                  children: (0, l.jsx)(i.TextInput, {
                    value: B,
                    onChange: M,
                    inputRef: Z,
                  }),
                }),
              }),
              (0, l.jsxs)(i.ModalFooter, {
                children: [
                  (0, l.jsx)(i.Button, {
                    type: "submit",
                    color: null != x ? x : i.Button.Colors.BRAND,
                    size: i.Button.Sizes.MEDIUM,
                    submitting: g,
                    children: f,
                  }),
                  (0, l.jsx)(i.Button, {
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    onClick: p,
                    children: u.intl.string(u.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    288341: function (t, e, n) {
      t.exports = {
        header: "header_f40604",
        title: "title_f40604",
        modalCloseButton: "modalCloseButton_f40604",
      };
    },
  },
]);
//# sourceMappingURL=4ef61593ba9b5aed09cf.js.map
