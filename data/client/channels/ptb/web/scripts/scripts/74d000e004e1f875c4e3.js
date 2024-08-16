"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80026"],
  {
    419851: function (e) {
      e.exports = "/assets/9a36afa0add142038863.svg";
    },
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    246403: function (e) {
      e.exports = "/assets/76e4f80d3efc36d1f1fc.svg";
    },
    866319: function (e, s, n) {
      n.d(s, {
        G: function () {
          return o;
        },
        b: function () {
          return d;
        },
      });
      var t = n(442837),
        l = n(430824),
        i = n(594174),
        a = n(944163),
        r = n(981631);
      function o(e) {
        let { guildId: s } = e,
          n = (0, t.e7)([a.Z], () => a.Z.get(s)),
          i = null == n ? void 0 : n.guild;
        return (0, t.e7)(
          [l.Z],
          () => {
            var e;
            let n =
                null === (e = l.Z.getGuild(s)) || void 0 === e
                  ? void 0
                  : e.verificationLevel,
              t = null == i ? void 0 : i.verification_level;
            return (null != n ? n : t) === r.sFg.VERY_HIGH;
          },
          [s, i],
        );
      }
      function d(e) {
        let { guildId: s } = e,
          n = (0, t.e7)([i.default], () => i.default.getCurrentUser()),
          l = o({ guildId: s }),
          a =
            (null == n ? void 0 : n.isPhoneVerified()) ||
            (null == n ? void 0 : n.isStaff()),
          r = (null == n ? void 0 : n.verified) || a;
        return {
          isPhoneVerificationLevel: l,
          isCurrentUserVerified: !!(l ? a : r),
        };
      }
    },
    200305: function (e, s, n) {
      n.d(s, {
        Y: function () {
          return D;
        },
      }),
        n(47120);
      var t,
        l,
        i = n(735250),
        a = n(470079),
        r = n(120356),
        o = n.n(r),
        d = n(442837),
        u = n(481060),
        c = n(893776),
        I = n(809206),
        E = n(607070),
        M = n(600164),
        m = n(339085),
        _ = n(565138),
        N = n(601964),
        x = n(650774),
        R = n(271383),
        f = n(430824),
        g = n(594174),
        h = n(626135),
        C = n(768581),
        T = n(863249),
        v = n(944163),
        A = n(246364),
        O = n(983736),
        F = n(266395),
        j = n(990488),
        Z = n(592286),
        L = n(981631),
        p = n(689938),
        B = n(807907),
        V = n(419851),
        S = n(296507),
        b = n(866402),
        P = n(246403);
      ((l = t || (t = {}))[(l.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (l[(l.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (l[(l.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM");
      let y = (e) => {
          let {
            headerId: s,
            email: n,
            password: t,
            setEmail: l,
            setPassword: a,
            emailError: r,
            passwordError: o,
          } = e;
          return (0, i.jsxs)("div", {
            className: B.content,
            children: [
              (0, i.jsx)("div", {
                className: B.applicationIconContainer,
                children: (0, i.jsx)("img", {
                  alt: p.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_ICON,
                  src: V,
                  className: B.applicationIcon,
                }),
              }),
              (0, i.jsx)(u.Heading, {
                id: s,
                variant: "heading-xl/semibold",
                className: B.header,
                children: p.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_TITLE,
              }),
              (0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children:
                  p.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_SUBTITLE,
              }),
              (0, i.jsx)("hr", { className: B.divider }),
              (0, i.jsx)(u.FormItem, {
                title: p.Z.Messages.FORM_LABEL_EMAIL,
                className: B.formItem,
                children: (0, i.jsx)(u.TextInput, {
                  value: n,
                  error: r,
                  onChange: l,
                  autoFocus: !0,
                }),
              }),
              (0, i.jsx)(u.FormItem, {
                title: p.Z.Messages.FORM_LABEL_PASSWORD,
                className: B.formItem,
                children: (0, i.jsx)(u.TextInput, {
                  type: "password",
                  value: t,
                  error: o,
                  onChange: a,
                }),
              }),
            ],
          });
        },
        U = (e) => {
          let { headerId: s, email: n } = e;
          return (0, i.jsxs)("div", {
            className: B.content,
            children: [
              (0, i.jsx)("img", {
                alt: p.Z.Messages.MEMBER_VERIFICATION_VERIFY_EMAIL_ICON,
                src: P,
                className: B.applicationIcon,
              }),
              (0, i.jsx)(u.Heading, {
                id: s,
                variant: "heading-xl/semibold",
                className: B.header,
                children:
                  p.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_TITLE.format(
                    { email: n },
                  ),
              }),
              (0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children:
                  p.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_SUBTITLE,
              }),
              (0, i.jsx)(u.Button, {
                className: B.resendButton,
                size: u.Button.Sizes.NONE,
                look: u.Button.Looks.LINK,
                onClick: () => c.Z.verifyResend(),
                children: p.Z.Messages.MEMBER_VERIFICATION_EMAIL_RESEND,
              }),
            ],
          });
        },
        D = (e) => {
          var s;
          let {
              guildId: n,
              formState: t,
              updateFormState: l,
              isPreview: a = !1,
            } = e,
            r = (0, d.e7)([v.Z], () => v.Z.get(n));
          if (null == r) return null;
          let o =
              null !==
                (s = null != t ? t : null == r ? void 0 : r.formFields) &&
              void 0 !== s
                ? s
                : [],
            u = a ? j.W : j.r;
          return (0, i.jsx)(u, {
            guildId: n,
            formFields: o,
            updateFormFields: l,
          });
        },
        k = () =>
          n
            .e("26176")
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
              let { default: s } = e;
              return s;
            }),
        w = (e) => {
          let {
            headerId: s,
            guildId: n,
            formState: t,
            updateFormState: l,
            useReducedMotion: a,
            isPreview: r = !1,
          } = e;
          return (0, i.jsxs)("div", {
            className: B.content,
            children: [
              (0, i.jsxs)("div", {
                className: B.animationAndSparklesContainer,
                children: [
                  (0, i.jsx)("img", {
                    alt: p.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                    src: b,
                    className: o()(B.sparkleIcon, B.sparkleBottom),
                  }),
                  (0, i.jsx)(u.LottieAnimation, {
                    importData: k,
                    shouldAnimate: !a,
                    className: B.animation,
                  }),
                  (0, i.jsx)("img", {
                    alt: p.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                    src: S,
                    className: o()(B.sparkleIcon, B.sparkleTop),
                  }),
                ],
              }),
              (0, i.jsx)(u.Heading, {
                id: s,
                variant: "heading-xl/semibold",
                className: B.header,
                children: p.Z.Messages.MEMBER_VERIFICATION_MODAL_TITLE,
              }),
              (0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                className: B.subheader,
                children: p.Z.Messages.MEMBER_VERIFICATION_MODAL_SUBTITLE,
              }),
              (0, i.jsx)("hr", { className: B.divider }),
              (0, i.jsx)(D, {
                guildId: n,
                formState: t,
                updateFormState: l,
                isPreview: r,
              }),
            ],
          });
        };
      s.Z = (e) => {
        var s, n;
        let {
            headerId: t,
            guildId: l,
            onClose: r,
            onComplete: c,
            inviteCode: j,
            isPreview: V = !1,
          } = e,
          S = (0, F.rb)((e) => e.hasUnsubmittedChanges),
          b = (0, d.e7)([f.Z], () => f.Z.getGuild(l)),
          P = (0, d.e7)([v.Z], () => v.Z.get(l)),
          D =
            null == P
              ? void 0
              : P.formFields.some((e) => e.field_type !== A.QJ.TERMS),
          k = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
          G = !(null == k ? void 0 : k.isClaimed()),
          H = null == k ? void 0 : k.verified,
          Y = null == k ? void 0 : k.isPhoneVerified(),
          z = (0, d.e7)([m.ZP], () => m.ZP.getGuildEmoji(l)),
          { storeMemberCount: J, storeOnlineCount: Q } = (0, d.cj)(
            [x.Z],
            () => ({
              storeMemberCount: x.Z.getMemberCount(l),
              storeOnlineCount: x.Z.getOnlineCount(l),
            }),
          ),
          [q, W] = a.useState(
            null !== (s = null == P ? void 0 : P.formFields) && void 0 !== s
              ? s
              : [],
          ),
          [X, K] = a.useState(!1),
          [$, ee] = a.useState(null),
          [es, en] = a.useState(G ? 0 : 2),
          [et, el] = a.useState(""),
          [ei, ea] = a.useState(""),
          [er, eo] = a.useState(null),
          [ed, eu] = a.useState(null),
          ec = null == P ? void 0 : P.guild,
          eI = a.useMemo(
            () => (null != b ? b : null != ec ? new N.ZP(ec) : null),
            [b, ec],
          ),
          eE =
            null !== (n = null == eI ? void 0 : eI.hasFeature(L.oNc.CLAN)) &&
            void 0 !== n &&
            n,
          {
            emojisToRender: eM,
            remainingEmojis: em,
            numGuildEmoji: e_,
          } = a.useMemo(() => {
            var e;
            let s = [
                ...(null !==
                  (e =
                    0 === z.length ? (null == ec ? void 0 : ec.emojis) : z) &&
                void 0 !== e
                  ? e
                  : []),
              ].reverse(),
              n = 0,
              t = s.length;
            return (
              t > 12 &&
                null != s &&
                (n = Math.min(t - (s = s.slice(0, 11)).length, 99)),
              { emojisToRender: s, remainingEmojis: n, numGuildEmoji: t }
            );
          }, [ec, z]),
          eN =
            null != J ? J : null == ec ? void 0 : ec.approximate_member_count,
          ex =
            null != Q ? Q : null == ec ? void 0 : ec.approximate_presence_count;
        a.useEffect(
          () => (
            (0, F.a5)(!1),
            () => {
              (0, F.a5)(!1);
            }
          ),
          [],
        ),
          a.useEffect(() => {
            T.Z.fetchVerificationForm(l, j);
          }, [l, j]),
          a.useEffect(() => {
            null != P && W(P.formFields);
          }, [P]),
          a.useEffect(() => {
            null != k && k.isClaimed() && en(2);
          }, [k]),
          a.useEffect(() => {
            1 === es && H && en(2);
          }, [es, H]),
          a.useEffect(() => {
            null != l &&
              h.default.track(L.rMx.OPEN_MODAL, { type: Z.N4, guild_id: l });
          }, [l]),
          a.useEffect(() => {
            let e = q.some((e) => e.field_type !== A.QJ.TERMS && (0, O.OA)(e));
            e && !S ? (0, F.a5)(!0) : !e && S && (0, F.a5)(!1);
          }, [q, S]);
        let eR = a.useMemo(
            () =>
              !(
                (((null == eI ? void 0 : eI.verificationLevel) !==
                  L.sFg.VERY_HIGH ||
                  (null == k ? void 0 : k.isStaff())) &&
                  H) ||
                Y
              ) || q.some((e) => !(0, O.OA)(e)),
            [q, eI, Y, H, k],
          ),
          ef = (0, d.e7)([E.Z], () => E.Z.useReducedMotion);
        if (null == eI) return null;
        let eg = async () => {
            K(!0), eo(null), eu(null);
            try {
              await (0, I.S2)({ email: et, password: ei }), K(!1), en(1);
            } catch (n) {
              var e, s;
              eo(
                null == n
                  ? void 0
                  : null === (e = n.body) || void 0 === e
                    ? void 0
                    : e.email,
              ),
                eu(
                  null == n
                    ? void 0
                    : null === (s = n.body) || void 0 === s
                      ? void 0
                      : s.password,
                );
            } finally {
              K(!1);
            }
          },
          eh = async () => {
            K(!0), ee(null);
            let e = null != k ? R.ZP.getMember(l, k.id) : null;
            if (null != e && !e.isPending) {
              null == r || r(!0);
              return;
            }
            try {
              await (null == c
                ? void 0
                : c({ ...(null != P ? P : v.t), formFields: q })),
                null == r || r(!0);
            } catch (t) {
              var s, n;
              let e = null == t ? void 0 : t.body;
              (null == e
                ? void 0
                : null === (s = e.errors) || void 0 === s
                  ? void 0
                  : s.version) != null ||
              (null == e
                ? void 0
                : null === (n = e.errors) || void 0 === n
                  ? void 0
                  : n.form_fields) != null
                ? ee(p.Z.Messages.MEMBER_VERIFICATION_VERSION_MISMATCH_ERROR)
                : ee(null == e ? void 0 : e.message);
            } finally {
              K(!1);
            }
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(M.Z, {
              direction: M.Z.Direction.VERTICAL,
              justify: M.Z.Justify.BETWEEN,
              className: B.guildSidebar,
              shrink: 0,
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(_.Z, {
                      guild: eI,
                      active: !0,
                      className: o()(B.guildIcon, {
                        [B.guildIconNoIcon]: null == eI.icon,
                      }),
                    }),
                    (0, i.jsx)(u.Heading, {
                      variant: "heading-lg/semibold",
                      className: B.guildName,
                      children: null == eI ? void 0 : eI.name,
                    }),
                    (0, i.jsx)(u.Text, {
                      className: B.guildDescription,
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: null == P ? void 0 : P.description,
                    }),
                    null != eM && eM.length > 0
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("hr", { className: B.divider }),
                            (0, i.jsx)(u.FormTitle, {
                              children:
                                p.Z.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format(
                                  { emojis: e_ },
                                ),
                            }),
                            (0, i.jsxs)("div", {
                              className: B.emojisContainer,
                              children: [
                                eM.map((e) => {
                                  let s = C.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: !1,
                                    size: 24,
                                  });
                                  return (0, i.jsx)(
                                    u.Tooltip,
                                    {
                                      text: ":".concat(e.name, ":"),
                                      children: (e) =>
                                        (0, i.jsx)("img", {
                                          ...e,
                                          width: 24,
                                          height: 24,
                                          src: s,
                                          className: B.emoji,
                                          alt: "",
                                        }),
                                    },
                                    e.id,
                                  );
                                }),
                                null != em && em > 0
                                  ? (0, i.jsx)(u.Heading, {
                                      variant: "heading-deprecated-12/semibold",
                                      className: B.emoji,
                                      color: "header-secondary",
                                      children: "+".concat(em),
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    null != ex &&
                      (0, i.jsxs)(M.Z, {
                        align: M.Z.Align.CENTER,
                        className: B.onlineCount,
                        children: [
                          (0, i.jsx)("div", { className: B.dotOnline }),
                          (0, i.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children:
                              p.Z.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format(
                                { membersOnline: ex },
                              ),
                          }),
                        ],
                      }),
                    null != eN &&
                      (0, i.jsxs)(M.Z, {
                        align: M.Z.Align.CENTER,
                        children: [
                          (0, i.jsx)("div", { className: B.dotMembers }),
                          (0, i.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children:
                              p.Z.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format(
                                { members: eN },
                              ),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: B.modal,
              children: [
                (0, i.jsx)(u.ModalContent, {
                  className: B.modalContent,
                  children: (0, i.jsx)(u.Sequencer, {
                    className: o()(B.sequencer, {
                      [B.centerContent]: 2 !== es,
                    }),
                    steps: [0, 1, 2],
                    step: es,
                    children: (() => {
                      switch (es) {
                        case 0:
                          return (0, i.jsx)(y, {
                            headerId: t,
                            email: et,
                            password: ei,
                            setEmail: el,
                            setPassword: ea,
                            emailError: er,
                            passwordError: ed,
                          });
                        case 1:
                          return (0, i.jsx)(U, { headerId: t, email: et });
                        case 2:
                          return (0, i.jsx)(w, {
                            headerId: t,
                            guildId: l,
                            formState: q,
                            updateFormState: W,
                            isPreview: V,
                            useReducedMotion: ef,
                          });
                      }
                    })(),
                  }),
                }),
                (() => {
                  switch (es) {
                    case 0:
                      return (0, i.jsxs)(u.ModalFooter, {
                        className: B.footer,
                        children: [
                          (0, i.jsx)(u.Button, {
                            className: B.submitButton,
                            type: "submit",
                            submitting: X,
                            onClick: eg,
                            disabled: 0 === et.length || 0 === ei.length,
                            children: p.Z.Messages.NEXT,
                          }),
                          (0, i.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children:
                              p.Z.Messages
                                .MEMBER_VERIFICATION_CLAIM_ACCOUNT_INFO,
                          }),
                        ],
                      });
                    case 1:
                      return null;
                    case 2:
                      return (0, i.jsxs)(u.ModalFooter, {
                        className: B.footer,
                        children: [
                          (0, i.jsx)(u.Button, {
                            className: B.submitButton,
                            type: "submit",
                            submitting: X,
                            onClick: eh,
                            color: u.Button.Colors.GREEN,
                            disabled: null == c || eR,
                            children: p.Z.Messages.SUBMIT,
                          }),
                          null != $ &&
                            (0, i.jsx)(u.Text, {
                              variant: "text-xs/normal",
                              color: "text-danger",
                              children: $,
                            }),
                          null == $ &&
                            D &&
                            (0, i.jsxs)("div", {
                              className: B.disclaimerFooter,
                              children: [
                                (0, i.jsx)(u.Text, {
                                  color: "header-secondary",
                                  variant: "text-xs/normal",
                                  children:
                                    p.Z.Messages.MEMBER_VERIFICATION_WARNING,
                                }),
                                eE &&
                                  (0, i.jsx)(u.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    children:
                                      p.Z.Messages.CLAN_APPLICATION_GDM_CONSENT,
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
    118346: function (e, s, n) {
      n.d(s, {
        B: function () {
          return I;
        },
        b: function () {
          return c;
        },
      }),
        n(47120);
      var t = n(735250),
        l = n(470079),
        i = n(481060),
        a = n(893776),
        r = n(489813),
        o = n(689938),
        d = n(994735);
      function u() {
        let [e, s] = l.useState(!1),
          [n, r] = l.useState(!1),
          [u, c] = l.useState(!1);
        l.useEffect(() => {
          let e;
          return (
            n &&
              (e = setTimeout(() => {
                r(!1);
              }, 2e3)),
            () => {
              null != e && clearTimeout(e);
            }
          );
        }, [n]);
        let I = async () => {
          if (!e) {
            s(!0);
            try {
              await a.Z.verifyResend(), r(!0), c(!0);
            } catch (e) {
            } finally {
              s(!1);
            }
          }
        };
        return n
          ? (0, t.jsx)(i.Text, {
              className: d.verifyConfirmText,
              variant: "text-sm/normal",
              color: "text-positive",
              children:
                o.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
            })
          : (0, t.jsx)(i.Button, {
              size: i.Button.Sizes.SMALL,
              submitting: e,
              onClick: I,
              children: u
                ? o.Z.Messages.RESEND_EMAIL_SHORT
                : o.Z.Messages.VERIFY,
            });
      }
      function c() {
        return (0, t.jsx)(r.PU, {
          icon: i.EnvelopeIcon,
          text: o.Z.Messages
            .MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL,
          footnote: o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
          meetsRequirement: !1,
          children: (0, t.jsx)(i.Tooltip, {
            text: o.Z.Messages
              .MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
            children: (e) =>
              (0, t.jsx)(i.Button, {
                ...e,
                size: i.Button.Sizes.SMALL,
                disabled: !0,
                children: o.Z.Messages.VERIFY,
              }),
          }),
        });
      }
      function I(e) {
        let { isUserVerified: s } = e,
          n = s
            ? o.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFIED
            : o.Z.Messages
                .MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL;
        return (0, t.jsx)(r.PU, {
          icon: i.EnvelopeIcon,
          text: n,
          footnote: o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
          meetsRequirement: s,
          children: (0, t.jsx)(u, {}),
        });
      }
    },
    276486: function (e, s, n) {
      n.d(s, {
        l: function () {
          return d;
        },
        v: function () {
          return u;
        },
      });
      var t = n(735250);
      n(470079);
      var l = n(481060),
        i = n(144114),
        a = n(489813),
        r = n(815660),
        o = n(689938);
      function d() {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(a.PU, {
            icon: l.MobilePhoneIcon,
            text: o.Z.Messages
              .MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL,
            footnote:
              o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
            meetsRequirement: !1,
            children: (0, t.jsx)(l.Tooltip, {
              text: o.Z.Messages
                .MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
              children: (e) =>
                (0, t.jsx)(l.Button, {
                  ...e,
                  size: l.Button.Sizes.SMALL,
                  disabled: !0,
                  children: o.Z.Messages.VERIFY,
                }),
            }),
          }),
        });
      }
      function u(e) {
        let { isUserVerified: s } = e,
          d = s
            ? o.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED
            : o.Z.Messages
                .MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(a.PU, {
            icon: l.MobilePhoneIcon,
            text: d,
            footnote:
              o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
            meetsRequirement: s,
            children: (0, t.jsx)(l.Button, {
              size: l.Button.Sizes.SMALL,
              onClick: () => {
                (0, l.openModalLazy)(
                  async () => {
                    let { default: e } = await Promise.all([
                      n.e("76540"),
                      n.e("24558"),
                    ]).then(n.bind(n, 607018));
                    return (s) =>
                      (0, t.jsx)(e, { reason: i.L.GUILD_PHONE_REQUIRED, ...s });
                  },
                  { modalKey: r.M },
                );
              },
              children: o.Z.Messages.VERIFY,
            }),
          }),
        });
      }
    },
    990488: function (e, s, n) {
      n.d(s, {
        W: function () {
          return x;
        },
        r: function () {
          return R;
        },
      }),
        n(47120);
      var t = n(735250),
        l = n(470079),
        i = n(442837),
        a = n(430824),
        r = n(594174),
        o = n(246364),
        d = n(866319),
        u = n(118346),
        c = n(186078),
        I = n(73880),
        E = n(276486),
        M = n(196345),
        m = n(707592),
        _ = n(981631);
      function N(e) {
        let { guildId: s, formFields: n, updateFormFields: l } = e,
          r = (0, i.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getGuild(s)) || void 0 === e
              ? void 0
              : e.rulesChannelId;
          }),
          d = (e, s) => {
            let t = n[e];
            l([...n.slice(0, e), { ...t, response: s }, ...n.slice(e + 1)]);
          },
          u = (e, s) => {
            let t = n[e];
            l([...n.slice(0, e), { ...t, response: s }, ...n.slice(e + 1)]);
          },
          E = (e, s) => {
            let { value: t } = s,
              i = n[e];
            l([...n.slice(0, e), { ...i, response: t }, ...n.slice(e + 1)]);
          },
          _ = (e, s) => {
            switch (e.field_type) {
              case o.QJ.TERMS:
                return (0, t.jsx)(
                  M.dd,
                  { channelId: r, formField: e, onChange: (e, n) => d(s, n) },
                  s,
                );
              case o.QJ.TEXT_INPUT:
                return (0, t.jsx)(
                  m.zY,
                  {
                    formField: e,
                    autofocus: 0 === s,
                    onChange: (e) => u(s, e),
                  },
                  s,
                );
              case o.QJ.PARAGRAPH:
                return (0, t.jsx)(
                  I.lX,
                  {
                    formField: e,
                    autofocus: 0 === s,
                    onChange: (e) => u(s, e),
                  },
                  s,
                );
              case o.QJ.MULTIPLE_CHOICE:
                return (0, t.jsx)(
                  c.sp,
                  { formField: e, onChange: (e) => E(s, e) },
                  s,
                );
            }
          };
        return (0, t.jsx)(t.Fragment, { children: n.map((e, s) => _(e, s)) });
      }
      function x(e) {
        let { guildId: s, formFields: n, updateFormFields: l } = e,
          o = (0, i.e7)([a.Z], () => a.Z.getGuild(s)),
          c = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
          I = (0, d.G)({ guildId: s }) ? E.l : u.b,
          M = null == o ? void 0 : o.hasFeature(_.oNc.COMMUNITY);
        return null == c
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                M && (0, t.jsx)(I, {}),
                (0, t.jsx)(N, {
                  guildId: s,
                  formFields: n,
                  updateFormFields: l,
                }),
              ],
            });
      }
      function R(e) {
        let { guildId: s, formFields: n, updateFormFields: o } = e,
          c = (0, i.e7)([a.Z], () => a.Z.getGuild(s)),
          I = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
          { isPhoneVerificationLevel: M, isCurrentUserVerified: m } = (0, d.b)({
            guildId: s,
          }),
          x = l.useRef(m),
          R = M ? E.v : u.B,
          f =
            (null == c ? void 0 : c.hasFeature(_.oNc.COMMUNITY)) && !x.current;
        return null == I
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                f && (0, t.jsx)(R, { isUserVerified: m }),
                (0, t.jsx)(N, {
                  guildId: s,
                  formFields: n,
                  updateFormFields: o,
                }),
              ],
            });
      }
    },
  },
]);
//# sourceMappingURL=74d000e004e1f875c4e3.js.map
