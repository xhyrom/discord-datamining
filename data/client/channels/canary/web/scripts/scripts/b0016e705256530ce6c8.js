"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80026"],
  {
    200305: function (e, l, t) {
      t.d(l, {
        Y: function () {
          return _;
        },
      }),
        t(47120);
      var n,
        i,
        s = t(200651),
        r = t(192379),
        a = t(120356),
        o = t.n(a),
        d = t(442837),
        c = t(481060),
        u = t(893776),
        m = t(809206),
        x = t(607070),
        h = t(600164),
        g = t(339085),
        v = t(565138),
        j = t(650774),
        N = t(271383),
        f = t(594174),
        p = t(626135),
        I = t(768581),
        C = t(944163),
        b = t(246364),
        F = t(983736),
        T = t(187565),
        E = t(990488),
        M = t(592286),
        y = t(981631),
        O = t(388032),
        w = t(832311),
        Z = t(419851),
        k = t(296507),
        A = t(866402),
        S = t(246403);
      ((i = n || (n = {}))[(i.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (i[(i.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (i[(i.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM");
      let L = (e) => {
          let {
            headerId: l,
            email: t,
            password: n,
            setEmail: i,
            setPassword: r,
            emailError: a,
            passwordError: o,
          } = e;
          return (0, s.jsxs)("div", {
            className: w.content,
            children: [
              (0, s.jsx)("div", {
                className: w.applicationIconContainer,
                children: (0, s.jsx)("img", {
                  alt: O.intl.string(O.t.ewGfjo),
                  src: Z,
                  className: w.applicationIcon,
                }),
              }),
              (0, s.jsx)(c.Heading, {
                id: l,
                variant: "heading-xl/semibold",
                className: w.header,
                children: O.intl.string(O.t.MhcDLy),
              }),
              (0, s.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: O.intl.string(O.t.SPlaR0),
              }),
              (0, s.jsx)("hr", { className: w.divider }),
              (0, s.jsx)(c.FormItem, {
                title: O.intl.string(O.t.dI4d4e),
                className: w.formItem,
                children: (0, s.jsx)(c.TextInput, {
                  value: t,
                  error: a,
                  onChange: i,
                  autoFocus: !0,
                }),
              }),
              (0, s.jsx)(c.FormItem, {
                title: O.intl.string(O.t["CIGa+/"]),
                className: w.formItem,
                children: (0, s.jsx)(c.TextInput, {
                  type: "password",
                  value: n,
                  error: o,
                  onChange: r,
                }),
              }),
            ],
          });
        },
        R = (e) => {
          let { headerId: l, email: t } = e;
          return (0, s.jsxs)("div", {
            className: w.content,
            children: [
              (0, s.jsx)("img", {
                alt: O.intl.string(O.t.wNAbl5),
                src: S,
                className: w.applicationIcon,
              }),
              (0, s.jsx)(c.Heading, {
                id: l,
                variant: "heading-xl/semibold",
                className: w.header,
                children: O.intl.format(O.t.v01XgI, { email: t }),
              }),
              (0, s.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: O.intl.string(O.t["/Hw5aW"]),
              }),
              (0, s.jsx)(c.Button, {
                className: w.resendButton,
                size: c.Button.Sizes.NONE,
                look: c.Button.Looks.LINK,
                onClick: () => u.Z.verifyResend(),
                children: O.intl.string(O.t["MLk/mJ"]),
              }),
            ],
          });
        },
        _ = (e) => {
          var l;
          let {
              guildId: t,
              formState: n,
              updateFormState: i,
              isPreview: r = !1,
              disableVerification: a = !1,
            } = e,
            o = (0, d.e7)([C.Z], () => C.Z.get(t));
          if (null == o) return null;
          let c =
              null !==
                (l = null != n ? n : null == o ? void 0 : o.formFields) &&
              void 0 !== l
                ? l
                : [],
            u = r ? E.W : E.r;
          return (0, s.jsx)(u, {
            guildId: t,
            formFields: c,
            updateFormFields: i,
            disableVerification: a,
          });
        },
        P = () =>
          t
            .e("26176")
            .then(t.t.bind(t, 737848, 19))
            .then((e) => {
              let { default: l } = e;
              return l;
            }),
        B = (e) => {
          let {
            headerId: l,
            guildId: t,
            formState: n,
            updateFormState: i,
            useReducedMotion: r,
            disableVerification: a,
            isPreview: d = !1,
          } = e;
          return (0, s.jsxs)("div", {
            className: w.content,
            children: [
              (0, s.jsxs)("div", {
                className: w.animationAndSparklesContainer,
                children: [
                  (0, s.jsx)("img", {
                    alt: O.intl.string(O.t.VoB8OT),
                    src: A,
                    className: o()(w.sparkleIcon, w.sparkleBottom),
                  }),
                  (0, s.jsx)(c.LottieAnimation, {
                    importData: P,
                    shouldAnimate: !r,
                    className: w.animation,
                  }),
                  (0, s.jsx)("img", {
                    alt: O.intl.string(O.t.VoB8OT),
                    src: k,
                    className: o()(w.sparkleIcon, w.sparkleTop),
                  }),
                ],
              }),
              (0, s.jsx)(c.Heading, {
                id: l,
                variant: "heading-xl/semibold",
                className: w.header,
                children: O.intl.string(O.t.DrEECw),
              }),
              (0, s.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                className: w.subheader,
                children: O.intl.string(O.t["7D3C5u"]),
              }),
              (0, s.jsx)("hr", { className: w.divider }),
              (0, s.jsx)(_, {
                guildId: t,
                formState: n,
                updateFormState: i,
                isPreview: d,
                disableVerification: a,
              }),
            ],
          });
        };
      l.Z = (e) => {
        var l, t;
        let {
            headerId: n,
            guildId: i,
            onClose: a,
            onComplete: u,
            inviteCode: E,
            isPreview: Z = !1,
          } = e,
          k = (0, T.ng)(i, E, Z),
          A = null == k ? void 0 : k.guild,
          S = (0, T.N0)(i, A),
          _ =
            null == k
              ? void 0
              : k.formFields.some((e) => e.field_type !== b.QJ.TERMS),
          P = (0, d.e7)([f.default], () => f.default.getCurrentUser()),
          H = null == P ? void 0 : P.verified,
          D = null == P ? void 0 : P.isPhoneVerified(),
          V = (0, d.e7)([g.ZP], () => g.ZP.getGuildEmoji(i)),
          { storeMemberCount: G, storeOnlineCount: U } = (0, d.cj)(
            [j.Z],
            () => ({
              storeMemberCount: j.Z.getMemberCount(i),
              storeOnlineCount: j.Z.getOnlineCount(i),
            }),
          ),
          [z, W] = r.useState(
            null !== (l = null == k ? void 0 : k.formFields) && void 0 !== l
              ? l
              : [],
          ),
          [J, K] = r.useState(!1),
          [X, q] = r.useState(null),
          [Y, Q] = r.useState(""),
          [$, ee] = r.useState(""),
          [el, et] = r.useState(null),
          [en, ei] = r.useState(null),
          es =
            null !== (t = null == S ? void 0 : S.hasFeature(y.oNc.CLAN)) &&
            void 0 !== t &&
            t,
          {
            emojisToRender: er,
            remainingEmojis: ea,
            numGuildEmoji: eo,
          } = r.useMemo(() => {
            var e;
            let l = [
                ...(null !==
                  (e = 0 === V.length ? (null == A ? void 0 : A.emojis) : V) &&
                void 0 !== e
                  ? e
                  : []),
              ].reverse(),
              t = 0,
              n = l.length;
            return (
              n > 12 &&
                null != l &&
                (t = Math.min(n - (l = l.slice(0, 11)).length, 99)),
              { emojisToRender: l, remainingEmojis: t, numGuildEmoji: n }
            );
          }, [A, V]),
          ed = null != G ? G : null == A ? void 0 : A.approximate_member_count,
          ec =
            null != U ? U : null == A ? void 0 : A.approximate_presence_count,
          eu = null != _ && _,
          { currentStep: em, setCurrentStep: ex } = (0, T.k3)(i, P, eu);
        (0, T.lk)(z),
          r.useEffect(() => {
            null != k && W(k.formFields);
          }, [k]),
          r.useEffect(() => {
            null != i &&
              p.default.track(y.rMx.OPEN_MODAL, { type: M.N4, guild_id: i });
          }, [i]);
        let eh = r.useMemo(() => {
            if (z.some((e) => !(0, F.OA)(e))) return !0;
            if (eu || (null == P ? void 0 : P.isStaff())) return !1;
            switch (null == S ? void 0 : S.verificationLevel) {
              case y.sFg.VERY_HIGH:
                return !D;
              case y.sFg.LOW:
              case y.sFg.MEDIUM:
              case y.sFg.HIGH:
                return !H && !D;
              case y.sFg.NONE:
              default:
                return !1;
            }
          }, [z, S, eu, P, D, H]),
          eg = (0, d.e7)([x.Z], () => x.Z.useReducedMotion);
        if (null == S) return null;
        let ev = async () => {
            K(!0), et(null), ei(null);
            try {
              await (0, m.S2)({ email: Y, password: $ }), K(!1), ex(1);
            } catch (t) {
              var e, l;
              et(
                null == t
                  ? void 0
                  : null === (e = t.body) || void 0 === e
                    ? void 0
                    : e.email,
              ),
                ei(
                  null == t
                    ? void 0
                    : null === (l = t.body) || void 0 === l
                      ? void 0
                      : l.password,
                );
            } finally {
              K(!1);
            }
          },
          ej = async () => {
            K(!0), q(null);
            let e = null != P ? N.ZP.getMember(i, P.id) : null;
            if (null != e && !e.isPending) {
              null == a || a(!0);
              return;
            }
            try {
              await (null == u
                ? void 0
                : u({ ...(null != k ? k : C.t), formFields: z })),
                null == a || a(!0);
            } catch (n) {
              var l, t;
              let e = null == n ? void 0 : n.body;
              (null == e
                ? void 0
                : null === (l = e.errors) || void 0 === l
                  ? void 0
                  : l.version) != null ||
              (null == e
                ? void 0
                : null === (t = e.errors) || void 0 === t
                  ? void 0
                  : t.form_fields) != null
                ? q(O.intl.string(O.t.PD09Sk))
                : q(null == e ? void 0 : e.message);
            } finally {
              K(!1);
            }
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(h.Z, {
              direction: h.Z.Direction.VERTICAL,
              justify: h.Z.Justify.BETWEEN,
              className: w.guildSidebar,
              shrink: 0,
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)(v.Z, {
                      guild: S,
                      active: !0,
                      className: o()(w.guildIcon, {
                        [w.guildIconNoIcon]: null == S.icon,
                      }),
                    }),
                    (0, s.jsx)(c.Heading, {
                      variant: "heading-lg/semibold",
                      className: w.guildName,
                      children: null == S ? void 0 : S.name,
                    }),
                    (0, s.jsx)(c.Text, {
                      className: w.guildDescription,
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: null == k ? void 0 : k.description,
                    }),
                    null != er && er.length > 0
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("hr", { className: w.divider }),
                            (0, s.jsx)(c.FormTitle, {
                              children: O.intl.format(O.t.KHLg5e, {
                                emojis: eo,
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: w.emojisContainer,
                              children: [
                                er.map((e) => {
                                  let l = I.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: !1,
                                    size: 24,
                                  });
                                  return (0, s.jsx)(
                                    c.Tooltip,
                                    {
                                      text: ":".concat(e.name, ":"),
                                      children: (e) =>
                                        (0, s.jsx)("img", {
                                          ...e,
                                          width: 24,
                                          height: 24,
                                          src: l,
                                          className: w.emoji,
                                          alt: "",
                                        }),
                                    },
                                    e.id,
                                  );
                                }),
                                null != ea && ea > 0
                                  ? (0, s.jsx)(c.Heading, {
                                      variant: "heading-deprecated-12/semibold",
                                      className: w.emoji,
                                      color: "header-secondary",
                                      children: "+".concat(ea),
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    null != ec &&
                      (0, s.jsxs)(h.Z, {
                        align: h.Z.Align.CENTER,
                        className: w.onlineCount,
                        children: [
                          (0, s.jsx)("div", { className: w.dotOnline }),
                          (0, s.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: O.intl.format(O.t["Oj3M6+"], {
                              membersOnline: ec,
                            }),
                          }),
                        ],
                      }),
                    null != ed &&
                      (0, s.jsxs)(h.Z, {
                        align: h.Z.Align.CENTER,
                        children: [
                          (0, s.jsx)("div", { className: w.dotMembers }),
                          (0, s.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: O.intl.format(O.t.LM4ufX, {
                              members: ed,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: w.modal,
              children: [
                (0, s.jsx)(c.ModalContent, {
                  className: w.modalContent,
                  children: (0, s.jsx)(c.Sequencer, {
                    className: o()(w.sequencer, {
                      [w.centerContent]: 2 !== em,
                    }),
                    steps: [0, 1, 2],
                    step: em,
                    children: (() => {
                      switch (em) {
                        case 0:
                          return (0, s.jsx)(L, {
                            headerId: n,
                            email: Y,
                            password: $,
                            setEmail: Q,
                            setPassword: ee,
                            emailError: el,
                            passwordError: en,
                          });
                        case 1:
                          return (0, s.jsx)(R, { headerId: n, email: Y });
                        case 2:
                          return (0, s.jsx)(B, {
                            headerId: n,
                            guildId: i,
                            formState: z,
                            updateFormState: W,
                            isPreview: Z,
                            useReducedMotion: eg,
                            disableVerification: eu,
                          });
                      }
                    })(),
                  }),
                }),
                (() => {
                  switch (em) {
                    case 0:
                      return (0, s.jsxs)(c.ModalFooter, {
                        className: w.footer,
                        children: [
                          (0, s.jsx)(c.Button, {
                            className: w.submitButton,
                            type: "submit",
                            submitting: J,
                            onClick: ev,
                            disabled: 0 === Y.length || 0 === $.length,
                            children: O.intl.string(O.t.PDTjLC),
                          }),
                          (0, s.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: O.intl.string(O.t["9GPiR0"]),
                          }),
                        ],
                      });
                    case 1:
                      return null;
                    case 2:
                      return (0, s.jsxs)(c.ModalFooter, {
                        className: w.footer,
                        children: [
                          (0, s.jsx)(c.Button, {
                            className: w.submitButton,
                            type: "submit",
                            submitting: J,
                            onClick: ej,
                            color: c.Button.Colors.GREEN,
                            disabled: null == u || eh,
                            children: O.intl.string(O.t.geKm7u),
                          }),
                          null != X &&
                            (0, s.jsx)(c.Text, {
                              variant: "text-xs/normal",
                              color: "text-danger",
                              children: X,
                            }),
                          null == X &&
                            _ &&
                            (0, s.jsxs)("div", {
                              className: w.disclaimerFooter,
                              children: [
                                (0, s.jsx)(c.Text, {
                                  color: "header-secondary",
                                  variant: "text-xs/normal",
                                  children: O.intl.string(O.t["+fPCTU"]),
                                }),
                                es &&
                                  (0, s.jsx)(c.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    children: O.intl.string(O.t.FwXzw8),
                                  }),
                              ],
                            }),
                        ],
                      });
                  }
                })(),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=b0016e705256530ce6c8.js.map
