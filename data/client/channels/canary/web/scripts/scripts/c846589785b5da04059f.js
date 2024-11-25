"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42758"],
  {
    575681: function (e, t, n) {
      n.d(t, {
        n: function () {
          return i;
        },
      });
      let a = (0, n(818083).B)({
          kind: "user",
          id: "2023-06_unique_username_live_check_in_settings",
          label: "Username Livecheck in Settings",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 1, label: "Livecheck enabled", config: { enabled: !0 } },
          ],
        }),
        i = () => {
          let { enabled: e } = a.useExperiment(
            { location: "7e1108_1" },
            { autoTrackExposure: !0 },
          );
          return e;
        };
    },
    2702: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        }),
        n(627341),
        n(47120);
      var a = n(200651),
        i = n(192379),
        l = n(120356),
        s = n.n(l),
        o = n(512722),
        r = n.n(o),
        u = n(954955),
        c = n.n(u),
        d = n(278074),
        m = n(442837),
        b = n(481060),
        h = n(809206),
        p = n(118012),
        x = n(219496),
        f = n(575681),
        v = n(807369),
        g = n(180529),
        C = n(25990),
        I = n(594174),
        _ = n(74538),
        j = n(981631),
        E = n(388032),
        N = n(861920),
        R = n(716722);
      let w = (e) => {
        let { usernameStatus: t, showHint: n } = e;
        return (0, d.EQ)(t)
          .with({ type: x.K.ERROR, message: d.P.select() }, (e) =>
            (0, a.jsx)(b.Text, {
              variant: "text-sm/normal",
              color: "text-danger",
              children: e,
            }),
          )
          .with({ type: x.K.AVAILABLE, message: d.P.select() }, (e) =>
            (0, a.jsx)(b.Text, {
              variant: "text-sm/normal",
              color: "text-positive",
              children: e,
            }),
          )
          .otherwise(() =>
            n
              ? (0, a.jsx)(b.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children: E.intl.string(E.t.z7c4bG),
                })
              : null,
          );
      };
      function B(e) {
        var t;
        let { transitionState: n, onClose: l } = e,
          o = (0, m.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return (
              r()(
                null != e,
                "ChangeUsernameModal: currentUser cannot be undefined",
              ),
              e
            );
          }),
          u = i.useMemo(
            () => _.ZP.canEditDiscriminator(o) && !o.isPomelo(),
            [o],
          ),
          [d, B] = i.useState(!1),
          [M, k] = i.useState(o.username),
          [S, T] = i.useState(o.discriminator),
          [F, L] = i.useState(""),
          [P, y] = i.useState(!1),
          Z = (0, m.e7)([C.Z], () => C.Z.getErrors()),
          z = (0, f.n)(),
          A = o.isPomelo() && z,
          U = (0, v.a)(M, A, !1, o.username),
          D = i.useRef(null),
          W = i.useMemo(() => {
            var e, t, n;
            return null !==
              (n =
                null == Z
                  ? void 0
                  : null === (e = Z.username) || void 0 === e
                    ? void 0
                    : e[0]) && void 0 !== n
              ? n
              : null == Z
                ? void 0
                : null === (t = Z.discriminator) || void 0 === t
                  ? void 0
                  : t[0];
          }, [Z]);
        i.useEffect(() => {
          if (n === b.ModalTransitionState.ENTERED) {
            var e;
            null === (e = D.current) || void 0 === e || e.focus();
          }
        }, [n]);
        let K = S !== o.discriminator;
        async function q(e) {
          e.preventDefault(), y(!0);
          let t = await (0, h.Mn)({
            username: M,
            discriminator: u ? S : void 0,
            password: F,
          });
          y(!1), (null == t ? void 0 : t.ok) && l();
        }
        let H = i.useMemo(() => c()(B, 50), []);
        return (0, a.jsxs)(b.ModalRoot, {
          transitionState: n,
          children: [
            (0, a.jsxs)(b.ModalHeader, {
              separator: !1,
              className: N.header,
              children: [
                (0, a.jsx)(p.Z, {
                  color: p.Z.Colors.HEADER_PRIMARY,
                  size: p.Z.Sizes.SIZE_24,
                  className: N.title,
                  children: E.intl.string(E.t["m5or5+"]),
                }),
                (0, a.jsx)(b.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: N.subtitle,
                  children: E.intl.string(E.t.SLJvy8),
                }),
                (0, a.jsx)(b.ModalCloseButton, {
                  onClick: l,
                  className: N.modalCloseButton,
                }),
              ],
            }),
            (0, a.jsxs)("form", {
              onSubmit: q,
              children: [
                (0, a.jsxs)(b.ModalContent, {
                  className: N.content,
                  children: [
                    (0, a.jsx)(b.FormItem, {
                      title: E.intl.string(E.t.TWzdWl),
                      error: W,
                      children: (0, a.jsxs)("div", {
                        className: s()(R.input, N.multiInput, {
                          [R.error]: null != W,
                          [R.focused]: d,
                        }),
                        children: [
                          (0, a.jsx)(b.TextInput, {
                            name: "username",
                            "aria-label": E.intl.string(E.t.qqhR3N),
                            value: M,
                            maxLength: j.l$U,
                            onChange: k,
                            onFocus: () => H(!0),
                            onBlur: () => H(!1),
                            inputRef: D,
                            className: N.multiInputFirst,
                            inputClassName: s()(N.multiInputField, {
                              [N.lowercase]: o.isPomelo(),
                            }),
                          }),
                          !o.isPomelo() &&
                            (0, a.jsx)(b.TextInput, {
                              name: "discriminator",
                              "aria-label": E.intl.string(E.t.ozumaG),
                              maxLength: 4,
                              value: S,
                              onChange: T,
                              onFocus: () => H(!0),
                              onBlur: () => H(!1),
                              inputPrefix: "#",
                              disabled: !u,
                              className: N.multiInputLast,
                              inputClassName: N.multiInputField,
                            }),
                        ],
                      }),
                    }),
                    K
                      ? (0, a.jsx)(b.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          className: N.discriminatorChangeWarning,
                          children: E.intl.string(E.t.mConUV),
                        })
                      : null,
                    A
                      ? (0, a.jsx)(g.Z, {
                          show:
                            (null == U ? void 0 : U.type) === x.K.ERROR || d,
                          top: 8,
                          bottom: 4,
                          children: (0, a.jsx)(w, {
                            usernameStatus: U,
                            showHint: o.isPomelo(),
                          }),
                        })
                      : null,
                    (0, a.jsx)(b.FormItem, {
                      className: N.password,
                      title: E.intl.string(E.t.TmdnJy),
                      error:
                        null == Z
                          ? void 0
                          : null === (t = Z.password) || void 0 === t
                            ? void 0
                            : t[0],
                      children: (0, a.jsx)(b.TextInput, {
                        type: "password",
                        value: F,
                        onChange: L,
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)(b.ModalFooter, {
                  children: [
                    (0, a.jsx)(b.Button, {
                      type: "submit",
                      color: b.Button.Colors.BRAND,
                      size: b.Button.Sizes.MEDIUM,
                      submitting: P,
                      children: E.intl.string(E.t.i4jeWV),
                    }),
                    (0, a.jsx)(b.Button, {
                      className: N.cancel,
                      look: b.Button.Looks.LINK,
                      color: b.Button.Colors.PRIMARY,
                      onClick: l,
                      children: E.intl.string(E.t["ETE/oK"]),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    861920: function (e, t, n) {
      e.exports = {
        header: "header_aefbba",
        title: "title_aefbba",
        subtitle: "subtitle_aefbba",
        modalCloseButton: "modalCloseButton_aefbba",
        content: "content_aefbba",
        password: "password_aefbba",
        cancel: "cancel_aefbba",
        multiInput: "multiInput_aefbba",
        multiInputFirst: "multiInputFirst_aefbba",
        lowercase: "lowercase_aefbba",
        multiInputField: "multiInputField_aefbba",
        multiInputLast: "multiInputLast_aefbba",
        discriminatorChangeWarning: "discriminatorChangeWarning_aefbba",
      };
    },
  },
]);
//# sourceMappingURL=c846589785b5da04059f.js.map
