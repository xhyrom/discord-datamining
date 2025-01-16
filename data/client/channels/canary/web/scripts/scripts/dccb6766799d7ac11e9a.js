"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48707"],
  {
    194530: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return v;
          },
        }),
        n(47120);
      var o = n(200651),
        s = n(192379),
        l = n(442837),
        i = n(481060),
        r = n(809206),
        a = n(118012),
        u = n(25990),
        d = n(155433),
        c = n(981631),
        m = n(388032),
        h = n(998976);
      function v(t) {
        var e, n, v, p;
        let {
            transitionState: x,
            onSuccess: f,
            onClose: g,
            requirementsUpdated: b,
            noSkip: w = !1,
          } = t,
          [j, C] = s.useState(""),
          [I, T] = s.useState(""),
          [B, M] = s.useState(""),
          [E, S] = s.useState(null),
          [N, R] = s.useState(null),
          _ = (0, l.e7)([u.Z], () => u.Z.getErrors()),
          Z = (0, l.e7)([u.Z], () => u.Z.getFormState()),
          k = s.useRef(null);
        async function P(t) {
          t.preventDefault(), (0, r.b9)();
          let e = !1;
          if (
            ("" === I ? (S(m.intl.string(m.t["/7/oPT"])), (e = !0)) : S(null),
            I !== B ? (R(m.intl.string(m.t.IEKYZ2)), (e = !0)) : R(null),
            e)
          )
            return;
          let n = await (0, r.Mn)({ password: j, newPassword: I });
          if (null == n ? void 0 : n.ok) f();
          else {
            var o;
            (null == n
              ? void 0
              : null === (o = n.body) || void 0 === o
                ? void 0
                : o.username) != null && (0, d.P)();
          }
        }
        return (
          s.useEffect(() => {
            if (x === i.ModalTransitionState.ENTERED) {
              var t;
              null === (t = k.current) || void 0 === t || t.focus();
            }
          }, [x]),
          (0, o.jsxs)(i.ModalRoot, {
            transitionState: x,
            children: [
              (0, o.jsxs)(i.ModalHeader, {
                separator: !1,
                className: h.header,
                children: [
                  (0, o.jsx)(a.Z, {
                    color: a.Z.Colors.HEADER_PRIMARY,
                    size: a.Z.Sizes.SIZE_24,
                    className: h.title,
                    children: m.intl.string(m.t["geta7+"]),
                  }),
                  (0, o.jsx)(i.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: h.subtitle,
                    children: b
                      ? m.intl.string(m.t["37iHbW"])
                      : m.intl.string(m.t.iOurYm),
                  }),
                  !0 !== w &&
                    (0, o.jsx)(i.ModalCloseButton, {
                      onClick: g,
                      className: h.modalCloseButton,
                    }),
                ],
              }),
              (0, o.jsxs)("form", {
                onSubmit: P,
                children: [
                  (0, o.jsxs)(i.ModalContent, {
                    className: h.content,
                    children: [
                      (0, o.jsx)(i.FormItem, {
                        title: m.intl.string(m.t.WBqMRU),
                        error:
                          null == _
                            ? void 0
                            : null === (e = _.password) || void 0 === e
                              ? void 0
                              : e[0],
                        children: (0, o.jsx)(i.TextInput, {
                          type: "password",
                          value: j,
                          onChange: C,
                          inputRef: k,
                        }),
                      }),
                      (0, o.jsx)(i.FormItem, {
                        className: h.newPassword,
                        title: m.intl.string(m.t["8dM4FB"]),
                        error:
                          null !==
                            (p =
                              null !==
                                (v =
                                  null == _
                                    ? void 0
                                    : null === (n = _.new_password) ||
                                        void 0 === n
                                      ? void 0
                                      : n[0]) && void 0 !== v
                                ? v
                                : E) && void 0 !== p
                            ? p
                            : void 0,
                        children: (0, o.jsx)(i.TextInput, {
                          type: "password",
                          value: I,
                          onChange: T,
                        }),
                      }),
                      (0, o.jsx)(i.FormItem, {
                        className: h.newPassword,
                        title: m.intl.string(m.t.iQG2KC),
                        error: null != N ? N : void 0,
                        children: (0, o.jsx)(i.TextInput, {
                          type: "password",
                          value: B,
                          onChange: M,
                        }),
                      }),
                    ],
                  }),
                  (0, o.jsxs)(i.ModalFooter, {
                    children: [
                      (0, o.jsx)(i.Button, {
                        type: "submit",
                        color: i.Button.Colors.BRAND,
                        size: i.Button.Sizes.MEDIUM,
                        submitting: Z === c.QZA.SUBMITTING,
                        children: m.intl.string(m.t.i4jeWV),
                      }),
                      !0 !== w &&
                        (0, o.jsx)(i.Button, {
                          className: h.cancel,
                          look: i.Button.Looks.LINK,
                          color: i.Button.Colors.PRIMARY,
                          onClick: g,
                          children: m.intl.string(m.t["ETE/oK"]),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    155433: function (t, e, n) {
      n.d(e, {
        P: function () {
          return l;
        },
      });
      var o = n(481060),
        s = n(388032);
      function l() {
        (0, o.showToast)(
          (0, o.createToast)(s.intl.string(s.t["TGg/2t"]), o.ToastType.FAILURE),
        );
      }
    },
    998976: function (t, e, n) {
      t.exports = {
        header: "header_e7b58e",
        title: "title_e7b58e",
        subtitle: "subtitle_e7b58e",
        modalCloseButton: "modalCloseButton_e7b58e",
        content: "content_e7b58e",
        newPassword: "newPassword_e7b58e",
        cancel: "cancel_e7b58e",
      };
    },
  },
]);
//# sourceMappingURL=dccb6766799d7ac11e9a.js.map
