"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42758"],
  {
    575681: function (e, t, s) {
      s.d(t, {
        n: function () {
          return n;
        },
      });
      let a = (0, s(818083).B)({
          kind: "user",
          id: "2023-06_unique_username_live_check_in_settings",
          label: "Username Livecheck in Settings",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 1, label: "Livecheck enabled", config: { enabled: !0 } },
          ],
        }),
        n = () => {
          let { enabled: e } = a.useExperiment(
            { location: "7e1108_1" },
            { autoTrackExposure: !0 },
          );
          return e;
        };
    },
    2702: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return T;
          },
        }),
        s(627341),
        s(47120);
      var a = s(735250),
        n = s(470079),
        l = s(120356),
        i = s.n(l),
        o = s(512722),
        r = s.n(o),
        u = s(954955),
        c = s.n(u),
        d = s(278074),
        m = s(442837),
        _ = s(481060),
        E = s(809206),
        p = s(112831),
        x = s(219496),
        b = s(575681),
        h = s(807369),
        I = s(180529),
        N = s(25990),
        R = s(594174),
        S = s(74538),
        f = s(981631),
        M = s(689938),
        C = s(853487),
        g = s(803636);
      let v = (e) => {
        let { usernameStatus: t, showHint: s } = e;
        return (0, d.EQ)(t)
          .with({ type: x.K.ERROR, message: d.P.select() }, (e) =>
            (0, a.jsx)(_.Text, {
              variant: "text-sm/normal",
              color: "text-danger",
              children: e,
            }),
          )
          .with({ type: x.K.AVAILABLE, message: d.P.select() }, (e) =>
            (0, a.jsx)(_.Text, {
              variant: "text-sm/normal",
              color: "text-positive",
              children: e,
            }),
          )
          .otherwise(() =>
            s
              ? (0, a.jsx)(_.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children: M.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID,
                })
              : null,
          );
      };
      function T(e) {
        var t;
        let { transitionState: s, onClose: l } = e,
          o = (0, m.e7)([R.default], () => {
            let e = R.default.getCurrentUser();
            return (
              r()(
                null != e,
                "ChangeUsernameModal: currentUser cannot be undefined",
              ),
              e
            );
          }),
          u = n.useMemo(
            () => S.ZP.canEditDiscriminator(o) && !o.isPomelo(),
            [o],
          ),
          [d, T] = n.useState(!1),
          [A, L] = n.useState(o.username),
          [j, B] = n.useState(o.discriminator),
          [U, P] = n.useState(""),
          [Z, w] = n.useState(!1),
          O = (0, m.e7)([N.Z], () => N.Z.getErrors()),
          k = (0, b.n)(),
          F = o.isPomelo() && k,
          D = (0, h.a)(A, F, !1, o.username),
          G = n.useRef(null),
          y = n.useMemo(() => {
            var e, t, s;
            return null !==
              (s =
                null == O
                  ? void 0
                  : null === (e = O.username) || void 0 === e
                    ? void 0
                    : e[0]) && void 0 !== s
              ? s
              : null == O
                ? void 0
                : null === (t = O.discriminator) || void 0 === t
                  ? void 0
                  : t[0];
          }, [O]);
        n.useEffect(() => {
          if (s === _.ModalTransitionState.ENTERED) {
            var e;
            null === (e = G.current) || void 0 === e || e.focus();
          }
        }, [s]);
        let H = j !== o.discriminator;
        async function K(e) {
          e.preventDefault(), w(!0);
          let t = await (0, E.Mn)({
            username: A,
            discriminator: u ? j : void 0,
            password: U,
          });
          w(!1), (null == t ? void 0 : t.ok) && l();
        }
        let W = n.useMemo(() => c()(T, 50), []);
        return (0, a.jsxs)(_.ModalRoot, {
          transitionState: s,
          children: [
            (0, a.jsxs)(_.ModalHeader, {
              separator: !1,
              className: C.header,
              children: [
                (0, a.jsx)(p.Z, {
                  color: p.Z.Colors.HEADER_PRIMARY,
                  size: p.Z.Sizes.SIZE_24,
                  className: C.title,
                  children:
                    M.Z.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE_DESKTOP,
                }),
                (0, a.jsx)(_.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: C.subtitle,
                  children:
                    M.Z.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_PROMPT_DESKTOP,
                }),
                (0, a.jsx)(_.ModalCloseButton, {
                  onClick: l,
                  className: C.modalCloseButton,
                }),
              ],
            }),
            (0, a.jsxs)("form", {
              onSubmit: K,
              children: [
                (0, a.jsxs)(_.ModalContent, {
                  className: C.content,
                  children: [
                    (0, a.jsx)(_.FormItem, {
                      title: M.Z.Messages.FORM_LABEL_USERNAME,
                      error: y,
                      children: (0, a.jsxs)("div", {
                        className: i()(g.input, C.multiInput, {
                          [g.error]: null != y,
                          [g.focused]: d,
                        }),
                        children: [
                          (0, a.jsx)(_.TextInput, {
                            name: "username",
                            "aria-label":
                              M.Z.Messages.USER_SETTINGS_LABEL_USERNAME,
                            value: A,
                            maxLength: f.l$U,
                            onChange: L,
                            onFocus: () => W(!0),
                            onBlur: () => W(!1),
                            inputRef: G,
                            className: C.multiInputFirst,
                            inputClassName: i()(C.multiInputField, {
                              [C.lowercase]: o.isPomelo(),
                            }),
                          }),
                          !o.isPomelo() &&
                            (0, a.jsx)(_.TextInput, {
                              name: "discriminator",
                              "aria-label":
                                M.Z.Messages.USER_SETTINGS_LABEL_DISCRIMINATOR,
                              maxLength: 4,
                              value: j,
                              onChange: B,
                              onFocus: () => W(!0),
                              onBlur: () => W(!1),
                              inputPrefix: "#",
                              disabled: !u,
                              className: C.multiInputLast,
                              inputClassName: C.multiInputField,
                            }),
                        ],
                      }),
                    }),
                    H
                      ? (0, a.jsx)(_.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          className: C.discriminatorChangeWarning,
                          children:
                            M.Z.Messages.PREMIUM_CHANGE_DISCRIMINATOR_WARNING,
                        })
                      : null,
                    F
                      ? (0, a.jsx)(I.Z, {
                          show:
                            (null == D ? void 0 : D.type) === x.K.ERROR || d,
                          top: 8,
                          bottom: 4,
                          children: (0, a.jsx)(v, {
                            usernameStatus: D,
                            showHint: o.isPomelo(),
                          }),
                        })
                      : null,
                    (0, a.jsx)(_.FormItem, {
                      className: C.password,
                      title: M.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                      error:
                        null == O
                          ? void 0
                          : null === (t = O.password) || void 0 === t
                            ? void 0
                            : t[0],
                      children: (0, a.jsx)(_.TextInput, {
                        type: "password",
                        value: U,
                        onChange: P,
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)(_.ModalFooter, {
                  children: [
                    (0, a.jsx)(_.Button, {
                      type: "submit",
                      color: _.Button.Colors.BRAND,
                      size: _.Button.Sizes.MEDIUM,
                      submitting: Z,
                      children: M.Z.Messages.DONE,
                    }),
                    (0, a.jsx)(_.Button, {
                      className: C.cancel,
                      look: _.Button.Looks.LINK,
                      color: _.Button.Colors.PRIMARY,
                      onClick: l,
                      children: M.Z.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    853487: function (e, t, s) {
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
//# sourceMappingURL=1a07ff9dd13279cf2d68.js.map
