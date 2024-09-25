"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1011"],
  {
    943350: function (e, a, n) {
      n.r(a),
        n.d(a, {
          GameProfileFeedbackModal: function () {
            return v;
          },
          GameProfileFeedbackThankYouModal: function () {
            return p;
          },
        }),
        n(47120);
      var l = n(735250),
        t = n(470079),
        s = n(658722),
        i = n.n(s),
        o = n(392711),
        r = n(442837),
        d = n(481060),
        c = n(224706),
        u = n(812206),
        h = n(206295),
        m = n(669764),
        g = n(690221),
        x = n(77498),
        E = n(49012),
        f = n(701488),
        _ = n(689938),
        C = n(361357);
      function p(e) {
        let { transitionState: a, onClose: n } = e;
        return (0, l.jsxs)(d.ModalRoot, {
          size: d.ModalSize.SMALL,
          transitionState: a,
          children: [
            (0, l.jsxs)(d.ModalContent, {
              className: C.content,
              children: [
                (0, l.jsx)(d.Heading, {
                  variant: "heading-xl/bold",
                  className: C.header,
                  children: _.Z.Messages.GAME_PROFILE_FEEDBACK_HEAD_TY,
                }),
                (0, l.jsx)(d.Text, {
                  className: C.tip,
                  variant: "text-md/medium",
                  children: _.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_TY,
                }),
              ],
            }),
            (0, l.jsx)(d.ModalFooter, {
              className: C.footer,
              children: (0, l.jsx)(d.Button, {
                fullWidth: !0,
                onClick: n,
                children: _.Z.Messages.DONE,
              }),
            }),
          ],
        });
      }
      function v(e) {
        var a, n;
        let { transitionState: s, applicationId: v, onClose: b } = e,
          [M, j] = t.useState(!1),
          [A, S] = t.useState(""),
          [D, F] = t.useState(""),
          I = (0, r.e7)([u.Z], () => u.Z.getApplication(v)),
          [T, L] = t.useState(null != v ? v : null),
          N = (0, r.e7)([m.Z], () => m.Z.getGame(v)),
          R =
            null !== (a = null == N ? void 0 : N.name) && void 0 !== a
              ? a
              : null == I
                ? void 0
                : I.name,
          k = null == I ? void 0 : I.getIconURL(f.Si.LARGE),
          { primaryColor: Z, secondaryColor: B } = (0, h.Z)(k);
        t.useEffect(() => {
          c.Z.getDetectableGames();
        }, []);
        let O = (0, r.Wu)(
            [x.Z],
            () => {
              let e = (
                  (null == A ? void 0 : A.length) > 0 ? A : null != R ? R : ""
                ).toLowerCase(),
                a = x.Z.getDetectableGame(v),
                n = null != T ? x.Z.getDetectableGame(T) : void 0;
              return (0, o.chain)(x.Z.games)
                .filter((a) => i()(e, a.name.toLowerCase()))
                .take(3)
                .concat(null != a ? [a] : [], null != n ? [n] : [])
                .compact()
                .uniqBy("id")
                .value();
            },
            [v, T, R, A],
          ),
          P = A.length > 0 && !O.map((e) => e.name).includes(A),
          G = 0 === D.length && (T === v || (null === T && 0 === A.length));
        if (M) return (0, l.jsx)(p, { transitionState: s, onClose: b });
        let K = (e, a) => {
          a ? (L(e.id), S(e.name)) : L(v);
        };
        return (0, l.jsxs)(d.ModalRoot, {
          size: d.ModalSize.SMALL,
          transitionState: s,
          children: [
            (0, l.jsxs)(d.ModalContent, {
              className: C.content,
              children: [
                (0, l.jsx)(d.Heading, {
                  variant: "heading-xl/bold",
                  className: C.header,
                  children: _.Z.Messages.GAME_PROFILE_FEEDBACK_HEAD_OTHER,
                }),
                (0, l.jsx)(d.Text, {
                  className: C.tip,
                  variant: "text-md/medium",
                  children: _.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_OUTDATED,
                }),
                (0, l.jsx)(g.Z, {
                  onClick: () =>
                    (0, E.q)({ href: "https://igdb.com", trusted: !0 }),
                  children: (0, l.jsxs)(d.Text, {
                    className: C.tip,
                    variant: "text-sm/medium",
                    color: "text-secondary",
                    children: [
                      _.Z.Messages.GAME_PROFILE_FEEDBACK_VISIT_IGDB,
                      " ",
                      (0, l.jsx)(d.LinkExternalMediumIcon, { size: "xxs" }),
                    ],
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: C.gameInfoBox,
                  style: {
                    background: "linear-gradient(45deg, "
                      .concat(Z, ", ")
                      .concat(B, ")"),
                  },
                  children: [
                    null != k &&
                      (0, l.jsx)("img", {
                        className: C.gameIcon,
                        src: k,
                        alt: "",
                      }),
                    (0, l.jsx)(d.Heading, {
                      variant: "heading-lg/semibold",
                      className: C.gameTitle,
                      children:
                        null !== (n = null == N ? void 0 : N.name) &&
                        void 0 !== n
                          ? n
                          : null == I
                            ? void 0
                            : I.name,
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: C.inputField,
                  children: [
                    (0, l.jsx)(d.SearchBar, {
                      className: C.searchBar,
                      query: A,
                      onChange: (e) => {
                        0 === e.length && null === T && L(v), S(e);
                      },
                      size: d.SearchBar.Sizes.MEDIUM,
                      onClear: () => {
                        null === T && L(v), S("");
                      },
                      placeholder:
                        _.Z.Messages
                          .GAME_PROFILE_FEEDBACK_PLACEHOLDER_INCORRECT,
                    }),
                    O.map((e) =>
                      (0, l.jsx)(
                        d.Checkbox,
                        {
                          className: C.gameSuggestion,
                          shape: d.Checkbox.Shapes.ROUND,
                          reverse: !0,
                          value: e.id === T,
                          disabled: e.id === T && T === v,
                          onChange: (a) => K(e, a.currentTarget.checked),
                          children: (0, l.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "interactive-normal",
                            children: e.name,
                          }),
                        },
                        e.id,
                      ),
                    ),
                    P &&
                      (0, l.jsx)(d.Checkbox, {
                        className: C.gameSuggestion,
                        shape: d.Checkbox.Shapes.ROUND,
                        reverse: !0,
                        value: null == T,
                        disabled: null == T,
                        onChange: () => L(null),
                        children: (0, l.jsx)(d.Text, {
                          variant: "text-md/medium",
                          color: "interactive-normal",
                          children: A,
                        }),
                      }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: C.inputField,
                  children: (0, l.jsx)(d.TextArea, {
                    value: D,
                    onChange: (e) => F(e),
                    placeholder:
                      _.Z.Messages.GAME_PROFILE_FEEDBACK_PLACEHOLDER_OTHER,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(d.ModalFooter, {
              className: C.footer,
              children: (0, l.jsx)(d.Button, {
                fullWidth: !0,
                onClick: () => {
                  j(!0);
                },
                disabled: G,
                children: _.Z.Messages.SUBMIT,
              }),
            }),
          ],
        });
      }
    },
    690221: function (e, a, n) {
      var l = n(735250),
        t = n(470079),
        s = n(481060),
        i = n(703656),
        o = n(981631);
      a.Z = t.forwardRef(function (e, a) {
        let {
            href: n,
            children: r,
            onClick: d,
            onKeyPress: c,
            focusProps: u,
            ...h
          } = e,
          m = t.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === o.yXg.SPACE || e.charCode === o.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != n && (0, i.uL)(n),
                  null == d || d()),
                  null == c || c(e);
            },
            [n, c, d],
          ),
          g = t.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != n && (0, i.uL)(n),
                  null == d || d();
            },
            [n, d],
          ),
          x = (0, l.jsx)("a", {
            ref: a,
            href: n,
            onClick: g,
            onKeyPress: m,
            ...h,
            children: r,
          });
        return (0, l.jsx)(s.FocusRing, { ...u, children: x });
      });
    },
    361357: function (e, a, n) {
      e.exports = {
        content: "content_d7f64b",
        header: "header_d7f64b",
        tip: "tip_d7f64b",
        footer: "footer_d7f64b",
        inputField: "inputField_d7f64b",
        searchBar: "searchBar_d7f64b",
        gameSuggestion: "gameSuggestion_d7f64b",
        gameInfoBox: "gameInfoBox_d7f64b",
        gameIcon: "gameIcon_d7f64b",
        gameTitle: "gameTitle_d7f64b",
      };
    },
  },
]);
//# sourceMappingURL=7b88fa97e9955510cf0a.js.map
