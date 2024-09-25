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
            return b;
          },
        }),
        n(47120);
      var l = n(735250),
        t = n(470079),
        s = n(658722),
        i = n.n(s),
        o = n(392711),
        d = n(442837),
        r = n(481060),
        c = n(224706),
        u = n(812206),
        m = n(206295),
        h = n(669764),
        g = n(690221),
        x = n(77498),
        E = n(49012),
        f = n(810568),
        _ = n(701488),
        p = n(689938),
        C = n(361357);
      function b(e) {
        let { transitionState: a, onClose: n } = e;
        return (0, l.jsxs)(r.ModalRoot, {
          size: r.ModalSize.SMALL,
          transitionState: a,
          children: [
            (0, l.jsxs)(r.ModalContent, {
              className: C.content,
              children: [
                (0, l.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  className: C.header,
                  children: p.Z.Messages.GAME_PROFILE_FEEDBACK_HEAD_TY,
                }),
                (0, l.jsx)(r.Text, {
                  className: C.tip,
                  variant: "text-md/medium",
                  children: p.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_TY,
                }),
              ],
            }),
            (0, l.jsx)(r.ModalFooter, {
              className: C.footer,
              children: (0, l.jsx)(r.Button, {
                fullWidth: !0,
                onClick: n,
                children: p.Z.Messages.DONE,
              }),
            }),
          ],
        });
      }
      function v(e) {
        var a, n;
        let { transitionState: s, applicationId: v, onClose: M, viewId: j } = e,
          [A, I] = t.useState(!1),
          [S, D] = t.useState(""),
          [F, N] = t.useState(""),
          T = (0, d.e7)([u.Z], () => u.Z.getApplication(v)),
          [k, L] = t.useState(null != v ? v : null),
          R = (0, d.e7)([h.Z], () => h.Z.getGame(v)),
          Z =
            null !== (a = null == R ? void 0 : R.name) && void 0 !== a
              ? a
              : null == T
                ? void 0
                : T.name,
          B = null == T ? void 0 : T.getIconURL(_.Si.LARGE),
          { primaryColor: G, secondaryColor: O } = (0, m.Z)(B);
        t.useEffect(() => {
          c.Z.getDetectableGames();
        }, []);
        let P = (0, d.Wu)(
            [x.Z],
            () => {
              let e = (
                  (null == S ? void 0 : S.length) > 0 ? S : null != Z ? Z : ""
                ).toLowerCase(),
                a = x.Z.getDetectableGame(v),
                n = null != k ? x.Z.getDetectableGame(k) : void 0;
              return (0, o.chain)(x.Z.games)
                .filter((a) => i()(e, a.name.toLowerCase()))
                .take(3)
                .concat(null != a ? [a] : [], null != n ? [n] : [])
                .compact()
                .uniqBy("id")
                .value();
            },
            [v, k, Z, S],
          ),
          H = S.length > 0 && !P.map((e) => e.name).includes(S),
          K = 0 === F.length && (k === v || (null === k && 0 === S.length));
        if (A) return (0, l.jsx)(b, { transitionState: s, onClose: M });
        let y = (e, a) => {
          a ? (L(e.id), D(e.name)) : L(v);
        };
        return (0, l.jsxs)(r.ModalRoot, {
          size: r.ModalSize.SMALL,
          transitionState: s,
          children: [
            (0, l.jsxs)(r.ModalContent, {
              className: C.content,
              children: [
                (0, l.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  className: C.header,
                  children: p.Z.Messages.GAME_PROFILE_FEEDBACK_HEAD_OTHER,
                }),
                (0, l.jsx)(r.Text, {
                  className: C.tip,
                  variant: "text-md/medium",
                  children: p.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_OUTDATED,
                }),
                (0, l.jsx)(g.Z, {
                  onClick: () =>
                    (0, E.q)({ href: "https://igdb.com", trusted: !0 }),
                  children: (0, l.jsxs)(r.Text, {
                    className: C.tip,
                    variant: "text-sm/medium",
                    color: "text-secondary",
                    children: [
                      p.Z.Messages.GAME_PROFILE_FEEDBACK_VISIT_IGDB,
                      " ",
                      (0, l.jsx)(r.LinkExternalMediumIcon, { size: "xxs" }),
                    ],
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: C.gameInfoBox,
                  style: {
                    background: "linear-gradient(45deg, "
                      .concat(G, ", ")
                      .concat(O, ")"),
                  },
                  children: [
                    null != B &&
                      (0, l.jsx)("img", {
                        className: C.gameIcon,
                        src: B,
                        alt: "",
                      }),
                    (0, l.jsx)(r.Heading, {
                      variant: "heading-lg/semibold",
                      className: C.gameTitle,
                      children:
                        null !== (n = null == R ? void 0 : R.name) &&
                        void 0 !== n
                          ? n
                          : null == T
                            ? void 0
                            : T.name,
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: C.inputField,
                  children: [
                    (0, l.jsx)(r.SearchBar, {
                      className: C.searchBar,
                      query: S,
                      onChange: (e) => {
                        0 === e.length && null === k && L(v), D(e);
                      },
                      size: r.SearchBar.Sizes.MEDIUM,
                      onClear: () => {
                        null === k && L(v), D("");
                      },
                      placeholder:
                        p.Z.Messages
                          .GAME_PROFILE_FEEDBACK_PLACEHOLDER_INCORRECT,
                    }),
                    P.map((e) =>
                      (0, l.jsx)(
                        r.Checkbox,
                        {
                          className: C.gameSuggestion,
                          shape: r.Checkbox.Shapes.ROUND,
                          reverse: !0,
                          value: e.id === k,
                          disabled: e.id === k && k === v,
                          onChange: (a) => y(e, a.currentTarget.checked),
                          children: (0, l.jsx)(r.Text, {
                            variant: "text-md/medium",
                            color: "interactive-normal",
                            children: e.name,
                          }),
                        },
                        e.id,
                      ),
                    ),
                    H &&
                      (0, l.jsx)(r.Checkbox, {
                        className: C.gameSuggestion,
                        shape: r.Checkbox.Shapes.ROUND,
                        reverse: !0,
                        value: null == k,
                        disabled: null == k,
                        onChange: () => L(null),
                        children: (0, l.jsx)(r.Text, {
                          variant: "text-md/medium",
                          color: "interactive-normal",
                          children: S,
                        }),
                      }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: C.inputField,
                  children: (0, l.jsx)(r.TextArea, {
                    value: F,
                    onChange: (e) => N(e),
                    placeholder:
                      p.Z.Messages.GAME_PROFILE_FEEDBACK_PLACEHOLDER_OTHER,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(r.ModalFooter, {
              className: C.footer,
              children: (0, l.jsx)(r.Button, {
                fullWidth: !0,
                onClick: () => {
                  (0, f.MH)({
                    applicationId: v,
                    suggestedGameApplicationId: k,
                    suggestedGameName: S,
                    submitted: !0,
                    feedback: F,
                    viewId: j,
                  }),
                    I(!0);
                },
                disabled: K,
                children: p.Z.Messages.SUBMIT,
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
            children: d,
            onClick: r,
            onKeyPress: c,
            focusProps: u,
            ...m
          } = e,
          h = t.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === o.yXg.SPACE || e.charCode === o.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != n && (0, i.uL)(n),
                  null == r || r()),
                  null == c || c(e);
            },
            [n, c, r],
          ),
          g = t.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != n && (0, i.uL)(n),
                  null == r || r();
            },
            [n, r],
          ),
          x = (0, l.jsx)("a", {
            ref: a,
            href: n,
            onClick: g,
            onKeyPress: h,
            ...m,
            children: d,
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
//# sourceMappingURL=f041751c6415478d4978.js.map
