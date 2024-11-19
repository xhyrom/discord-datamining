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
    866319: function (e, t, n) {
      n.d(t, {
        G: function () {
          return o;
        },
        b: function () {
          return d;
        },
      });
      var l = n(442837),
        i = n(430824),
        s = n(594174),
        r = n(944163),
        a = n(981631);
      function o(e) {
        let { guildId: t } = e,
          n = (0, l.e7)([r.Z], () => r.Z.get(t)),
          s = null == n ? void 0 : n.guild;
        return (0, l.e7)(
          [i.Z],
          () => {
            var e;
            let n =
                null === (e = i.Z.getGuild(t)) || void 0 === e
                  ? void 0
                  : e.verificationLevel,
              l = null == s ? void 0 : s.verification_level;
            return (null != n ? n : l) === a.sFg.VERY_HIGH;
          },
          [t, s],
        );
      }
      function d(e) {
        let { guildId: t } = e,
          n = (0, l.e7)([s.default], () => s.default.getCurrentUser()),
          i = o({ guildId: t }),
          r =
            (null == n ? void 0 : n.isPhoneVerified()) ||
            (null == n ? void 0 : n.isStaff()),
          a = (null == n ? void 0 : n.verified) || r;
        return {
          isPhoneVerificationLevel: i,
          isCurrentUserVerified: !!(i ? r : a),
        };
      }
    },
    200305: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return G;
        },
      }),
        n(47120);
      var l,
        i,
        s = n(200651),
        r = n(192379),
        a = n(120356),
        o = n.n(a),
        d = n(442837),
        u = n(481060),
        c = n(893776),
        m = n(809206),
        x = n(607070),
        h = n(600164),
        f = n(339085),
        g = n(565138),
        v = n(601964),
        j = n(650774),
        N = n(271383),
        p = n(430824),
        C = n(594174),
        I = n(626135),
        M = n(768581),
        T = n(863249),
        F = n(944163),
        b = n(246364),
        E = n(983736),
        Z = n(266395),
        y = n(990488),
        S = n(592286),
        L = n(981631),
        P = n(388032),
        R = n(916470),
        A = n(419851),
        U = n(296507),
        w = n(866402),
        O = n(246403);
      ((i = l || (l = {}))[(i.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (i[(i.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (i[(i.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM");
      let _ = (e) => {
          let {
            headerId: t,
            email: n,
            password: l,
            setEmail: i,
            setPassword: r,
            emailError: a,
            passwordError: o,
          } = e;
          return (0, s.jsxs)("div", {
            className: R.content,
            children: [
              (0, s.jsx)("div", {
                className: R.applicationIconContainer,
                children: (0, s.jsx)("img", {
                  alt: P.intl.string(P.t.ewGfjo),
                  src: A,
                  className: R.applicationIcon,
                }),
              }),
              (0, s.jsx)(u.Heading, {
                id: t,
                variant: "heading-xl/semibold",
                className: R.header,
                children: P.intl.string(P.t.MhcDLy),
              }),
              (0, s.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: P.intl.string(P.t.SPlaR0),
              }),
              (0, s.jsx)("hr", { className: R.divider }),
              (0, s.jsx)(u.FormItem, {
                title: P.intl.string(P.t.dI4d4e),
                className: R.formItem,
                children: (0, s.jsx)(u.TextInput, {
                  value: n,
                  error: a,
                  onChange: i,
                  autoFocus: !0,
                }),
              }),
              (0, s.jsx)(u.FormItem, {
                title: P.intl.string(P.t["CIGa+/"]),
                className: R.formItem,
                children: (0, s.jsx)(u.TextInput, {
                  type: "password",
                  value: l,
                  error: o,
                  onChange: r,
                }),
              }),
            ],
          });
        },
        B = (e) => {
          let { headerId: t, email: n } = e;
          return (0, s.jsxs)("div", {
            className: R.content,
            children: [
              (0, s.jsx)("img", {
                alt: P.intl.string(P.t.wNAbl5),
                src: O,
                className: R.applicationIcon,
              }),
              (0, s.jsx)(u.Heading, {
                id: t,
                variant: "heading-xl/semibold",
                className: R.header,
                children: P.intl.format(P.t.v01XgI, { email: n }),
              }),
              (0, s.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: P.intl.string(P.t["/Hw5aW"]),
              }),
              (0, s.jsx)(u.Button, {
                className: R.resendButton,
                size: u.Button.Sizes.NONE,
                look: u.Button.Looks.LINK,
                onClick: () => c.Z.verifyResend(),
                children: P.intl.string(P.t["MLk/mJ"]),
              }),
            ],
          });
        },
        G = (e) => {
          var t;
          let {
              guildId: n,
              formState: l,
              updateFormState: i,
              isPreview: r = !1,
              disableVerification: a = !1,
            } = e,
            o = (0, d.e7)([F.Z], () => F.Z.get(n));
          if (null == o) return null;
          let u =
              null !==
                (t = null != l ? l : null == o ? void 0 : o.formFields) &&
              void 0 !== t
                ? t
                : [],
            c = r ? y.W : y.r;
          return (0, s.jsx)(c, {
            guildId: n,
            formFields: u,
            updateFormFields: i,
            disableVerification: a,
          });
        },
        k = () =>
          n
            .e("26176")
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
              let { default: t } = e;
              return t;
            }),
        H = (e) => {
          let {
            headerId: t,
            guildId: n,
            formState: l,
            updateFormState: i,
            useReducedMotion: r,
            isPreview: a = !1,
          } = e;
          return (0, s.jsxs)("div", {
            className: R.content,
            children: [
              (0, s.jsxs)("div", {
                className: R.animationAndSparklesContainer,
                children: [
                  (0, s.jsx)("img", {
                    alt: P.intl.string(P.t.VoB8OT),
                    src: w,
                    className: o()(R.sparkleIcon, R.sparkleBottom),
                  }),
                  (0, s.jsx)(u.LottieAnimation, {
                    importData: k,
                    shouldAnimate: !r,
                    className: R.animation,
                  }),
                  (0, s.jsx)("img", {
                    alt: P.intl.string(P.t.VoB8OT),
                    src: U,
                    className: o()(R.sparkleIcon, R.sparkleTop),
                  }),
                ],
              }),
              (0, s.jsx)(u.Heading, {
                id: t,
                variant: "heading-xl/semibold",
                className: R.header,
                children: P.intl.string(P.t.DrEECw),
              }),
              (0, s.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                className: R.subheader,
                children: P.intl.string(P.t["7D3C5u"]),
              }),
              (0, s.jsx)("hr", { className: R.divider }),
              (0, s.jsx)(G, {
                guildId: n,
                formState: l,
                updateFormState: i,
                isPreview: a,
              }),
            ],
          });
        };
      t.Z = (e) => {
        var t, n;
        let {
            headerId: l,
            guildId: i,
            onClose: a,
            onComplete: c,
            inviteCode: y,
            isPreview: A = !1,
            disableVerification: U = !1,
          } = e,
          w = (0, Z.rb)((e) => e.hasUnsubmittedChanges),
          O = (0, d.e7)([p.Z], () => p.Z.getGuild(i)),
          G = (0, d.e7)([F.Z], () => F.Z.get(i)),
          k =
            null == G
              ? void 0
              : G.formFields.some((e) => e.field_type !== b.QJ.TERMS),
          z = (0, d.e7)([C.default], () => C.default.getCurrentUser()),
          V = !(null == z ? void 0 : z.isClaimed()),
          D = null == z ? void 0 : z.verified,
          J = null == z ? void 0 : z.isPhoneVerified(),
          Q = (0, d.e7)([f.ZP], () => f.ZP.getGuildEmoji(i)),
          { storeMemberCount: q, storeOnlineCount: W } = (0, d.cj)(
            [j.Z],
            () => ({
              storeMemberCount: j.Z.getMemberCount(i),
              storeOnlineCount: j.Z.getOnlineCount(i),
            }),
          ),
          [Y, X] = r.useState(
            null !== (t = null == G ? void 0 : G.formFields) && void 0 !== t
              ? t
              : [],
          ),
          [K, $] = r.useState(!1),
          [ee, et] = r.useState(null),
          [en, el] = r.useState(!U && V ? 0 : 2),
          [ei, es] = r.useState(""),
          [er, ea] = r.useState(""),
          [eo, ed] = r.useState(null),
          [eu, ec] = r.useState(null),
          em = null == G ? void 0 : G.guild,
          ex = r.useMemo(
            () => (null != O ? O : null != em ? new v.ZP(em) : null),
            [O, em],
          ),
          eh =
            null !== (n = null == ex ? void 0 : ex.hasFeature(L.oNc.CLAN)) &&
            void 0 !== n &&
            n,
          {
            emojisToRender: ef,
            remainingEmojis: eg,
            numGuildEmoji: ev,
          } = r.useMemo(() => {
            var e;
            let t = [
                ...(null !==
                  (e =
                    0 === Q.length ? (null == em ? void 0 : em.emojis) : Q) &&
                void 0 !== e
                  ? e
                  : []),
              ].reverse(),
              n = 0,
              l = t.length;
            return (
              l > 12 &&
                null != t &&
                (n = Math.min(l - (t = t.slice(0, 11)).length, 99)),
              { emojisToRender: t, remainingEmojis: n, numGuildEmoji: l }
            );
          }, [em, Q]),
          ej =
            null != q ? q : null == em ? void 0 : em.approximate_member_count,
          eN =
            null != W ? W : null == em ? void 0 : em.approximate_presence_count;
        r.useEffect(
          () => (
            (0, Z.a5)(!1),
            () => {
              (0, Z.a5)(!1);
            }
          ),
          [],
        ),
          r.useEffect(() => {
            T.ZP.fetchVerificationForm(i, y);
          }, [i, y]),
          r.useEffect(() => {
            null != G && X(G.formFields);
          }, [G]),
          r.useEffect(() => {
            null != z && z.isClaimed() && el(2);
          }, [z]),
          r.useEffect(() => {
            1 === en && D && el(2);
          }, [en, D]),
          r.useEffect(() => {
            null != i &&
              I.default.track(L.rMx.OPEN_MODAL, { type: S.N4, guild_id: i });
          }, [i]),
          r.useEffect(() => {
            let e = Y.some((e) => e.field_type !== b.QJ.TERMS && (0, E.OA)(e));
            e && !w ? (0, Z.a5)(!0) : !e && w && (0, Z.a5)(!1);
          }, [Y, w]);
        let ep = r.useMemo(
            () =>
              !(
                U ||
                (((null == ex ? void 0 : ex.verificationLevel) !==
                  L.sFg.VERY_HIGH ||
                  (null == z ? void 0 : z.isStaff())) &&
                  D) ||
                J
              ) || Y.some((e) => !(0, E.OA)(e)),
            [Y, ex, J, D, z, U],
          ),
          eC = (0, d.e7)([x.Z], () => x.Z.useReducedMotion);
        if (null == ex) return null;
        let eI = async () => {
            $(!0), ed(null), ec(null);
            try {
              await (0, m.S2)({ email: ei, password: er }), $(!1), el(1);
            } catch (n) {
              var e, t;
              ed(
                null == n
                  ? void 0
                  : null === (e = n.body) || void 0 === e
                    ? void 0
                    : e.email,
              ),
                ec(
                  null == n
                    ? void 0
                    : null === (t = n.body) || void 0 === t
                      ? void 0
                      : t.password,
                );
            } finally {
              $(!1);
            }
          },
          eM = async () => {
            $(!0), et(null);
            let e = null != z ? N.ZP.getMember(i, z.id) : null;
            if (null != e && !e.isPending) {
              null == a || a(!0);
              return;
            }
            try {
              await (null == c
                ? void 0
                : c({ ...(null != G ? G : F.t), formFields: Y })),
                null == a || a(!0);
            } catch (l) {
              var t, n;
              let e = null == l ? void 0 : l.body;
              (null == e
                ? void 0
                : null === (t = e.errors) || void 0 === t
                  ? void 0
                  : t.version) != null ||
              (null == e
                ? void 0
                : null === (n = e.errors) || void 0 === n
                  ? void 0
                  : n.form_fields) != null
                ? et(P.intl.string(P.t.PD09Sk))
                : et(null == e ? void 0 : e.message);
            } finally {
              $(!1);
            }
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(h.Z, {
              direction: h.Z.Direction.VERTICAL,
              justify: h.Z.Justify.BETWEEN,
              className: R.guildSidebar,
              shrink: 0,
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)(g.Z, {
                      guild: ex,
                      active: !0,
                      className: o()(R.guildIcon, {
                        [R.guildIconNoIcon]: null == ex.icon,
                      }),
                    }),
                    (0, s.jsx)(u.Heading, {
                      variant: "heading-lg/semibold",
                      className: R.guildName,
                      children: null == ex ? void 0 : ex.name,
                    }),
                    (0, s.jsx)(u.Text, {
                      className: R.guildDescription,
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: null == G ? void 0 : G.description,
                    }),
                    null != ef && ef.length > 0
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("hr", { className: R.divider }),
                            (0, s.jsx)(u.FormTitle, {
                              children: P.intl.format(P.t.KHLg5e, {
                                emojis: ev,
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: R.emojisContainer,
                              children: [
                                ef.map((e) => {
                                  let t = M.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: !1,
                                    size: 24,
                                  });
                                  return (0, s.jsx)(
                                    u.Tooltip,
                                    {
                                      text: ":".concat(e.name, ":"),
                                      children: (e) =>
                                        (0, s.jsx)("img", {
                                          ...e,
                                          width: 24,
                                          height: 24,
                                          src: t,
                                          className: R.emoji,
                                          alt: "",
                                        }),
                                    },
                                    e.id,
                                  );
                                }),
                                null != eg && eg > 0
                                  ? (0, s.jsx)(u.Heading, {
                                      variant: "heading-deprecated-12/semibold",
                                      className: R.emoji,
                                      color: "header-secondary",
                                      children: "+".concat(eg),
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
                    null != eN &&
                      (0, s.jsxs)(h.Z, {
                        align: h.Z.Align.CENTER,
                        className: R.onlineCount,
                        children: [
                          (0, s.jsx)("div", { className: R.dotOnline }),
                          (0, s.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: P.intl.format(P.t["Oj3M6+"], {
                              membersOnline: eN,
                            }),
                          }),
                        ],
                      }),
                    null != ej &&
                      (0, s.jsxs)(h.Z, {
                        align: h.Z.Align.CENTER,
                        children: [
                          (0, s.jsx)("div", { className: R.dotMembers }),
                          (0, s.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: P.intl.format(P.t.LM4ufX, {
                              members: ej,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: R.modal,
              children: [
                (0, s.jsx)(u.ModalContent, {
                  className: R.modalContent,
                  children: (0, s.jsx)(u.Sequencer, {
                    className: o()(R.sequencer, {
                      [R.centerContent]: 2 !== en,
                    }),
                    steps: [0, 1, 2],
                    step: en,
                    children: (() => {
                      switch (en) {
                        case 0:
                          return (0, s.jsx)(_, {
                            headerId: l,
                            email: ei,
                            password: er,
                            setEmail: es,
                            setPassword: ea,
                            emailError: eo,
                            passwordError: eu,
                          });
                        case 1:
                          return (0, s.jsx)(B, { headerId: l, email: ei });
                        case 2:
                          return (0, s.jsx)(H, {
                            headerId: l,
                            guildId: i,
                            formState: Y,
                            updateFormState: X,
                            isPreview: A,
                            useReducedMotion: eC,
                          });
                      }
                    })(),
                  }),
                }),
                (() => {
                  switch (en) {
                    case 0:
                      return (0, s.jsxs)(u.ModalFooter, {
                        className: R.footer,
                        children: [
                          (0, s.jsx)(u.Button, {
                            className: R.submitButton,
                            type: "submit",
                            submitting: K,
                            onClick: eI,
                            disabled: 0 === ei.length || 0 === er.length,
                            children: P.intl.string(P.t.PDTjLC),
                          }),
                          (0, s.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: P.intl.string(P.t["9GPiR0"]),
                          }),
                        ],
                      });
                    case 1:
                      return null;
                    case 2:
                      return (0, s.jsxs)(u.ModalFooter, {
                        className: R.footer,
                        children: [
                          (0, s.jsx)(u.Button, {
                            className: R.submitButton,
                            type: "submit",
                            submitting: K,
                            onClick: eM,
                            color: u.Button.Colors.GREEN,
                            disabled: null == c || ep,
                            children: P.intl.string(P.t.geKm7u),
                          }),
                          null != ee &&
                            (0, s.jsx)(u.Text, {
                              variant: "text-xs/normal",
                              color: "text-danger",
                              children: ee,
                            }),
                          null == ee &&
                            k &&
                            (0, s.jsxs)("div", {
                              className: R.disclaimerFooter,
                              children: [
                                (0, s.jsx)(u.Text, {
                                  color: "header-secondary",
                                  variant: "text-xs/normal",
                                  children: P.intl.string(P.t["+fPCTU"]),
                                }),
                                eh &&
                                  (0, s.jsx)(u.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    children: P.intl.string(P.t.FwXzw8),
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
    118346: function (e, t, n) {
      n.d(t, {
        B: function () {
          return m;
        },
        b: function () {
          return c;
        },
      }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        s = n(481060),
        r = n(893776),
        a = n(489813),
        o = n(388032),
        d = n(633656);
      function u() {
        let [e, t] = i.useState(!1),
          [n, a] = i.useState(!1),
          [u, c] = i.useState(!1);
        i.useEffect(() => {
          let e;
          return (
            n &&
              (e = setTimeout(() => {
                a(!1);
              }, 2e3)),
            () => {
              null != e && clearTimeout(e);
            }
          );
        }, [n]);
        let m = async () => {
          if (!e) {
            t(!0);
            try {
              await r.Z.verifyResend(), a(!0), c(!0);
            } catch (e) {
            } finally {
              t(!1);
            }
          }
        };
        return n
          ? (0, l.jsx)(s.Text, {
              className: d.verifyConfirmText,
              variant: "text-sm/normal",
              color: "text-positive",
              children: o.intl.string(o.t.H3Q7U1),
            })
          : (0, l.jsx)(s.Button, {
              size: s.Button.Sizes.SMALL,
              submitting: e,
              onClick: m,
              children: u
                ? o.intl.string(o.t.WnX4Jy)
                : o.intl.string(o.t["13ofGh"]),
            });
      }
      function c() {
        return (0, l.jsx)(a.PU, {
          icon: s.EnvelopeIcon,
          text: o.intl.string(o.t.c6EUJC),
          footnote: o.intl.string(o.t["jMh+TU"]),
          meetsRequirement: !1,
          children: (0, l.jsx)(s.Tooltip, {
            text: o.intl.string(o.t.mGlP39),
            children: (e) =>
              (0, l.jsx)(s.Button, {
                ...e,
                size: s.Button.Sizes.SMALL,
                disabled: !0,
                children: o.intl.string(o.t["13ofGh"]),
              }),
          }),
        });
      }
      function m(e) {
        let { isUserVerified: t } = e,
          n = t ? o.intl.string(o.t.qY1jHB) : o.intl.string(o.t.c6EUJC);
        return (0, l.jsx)(a.PU, {
          icon: s.EnvelopeIcon,
          text: n,
          footnote: o.intl.string(o.t["jMh+TU"]),
          meetsRequirement: t,
          children: (0, l.jsx)(u, {}),
        });
      }
    },
    276486: function (e, t, n) {
      n.d(t, {
        l: function () {
          return d;
        },
        v: function () {
          return u;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(481060),
        s = n(144114),
        r = n(489813),
        a = n(815660),
        o = n(388032);
      function d() {
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(r.PU, {
            icon: i.MobilePhoneIcon,
            text: o.intl.string(o.t.woMjLS),
            footnote: o.intl.string(o.t["jMh+TU"]),
            meetsRequirement: !1,
            children: (0, l.jsx)(i.Tooltip, {
              text: o.intl.string(o.t.mGlP39),
              children: (e) =>
                (0, l.jsx)(i.Button, {
                  ...e,
                  size: i.Button.Sizes.SMALL,
                  disabled: !0,
                  children: o.intl.string(o.t["13ofGh"]),
                }),
            }),
          }),
        });
      }
      function u(e) {
        let { isUserVerified: t } = e,
          d = t ? o.intl.string(o.t.WWzQtb) : o.intl.string(o.t.woMjLS);
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(r.PU, {
            icon: i.MobilePhoneIcon,
            text: d,
            footnote: o.intl.string(o.t["jMh+TU"]),
            meetsRequirement: t,
            children: (0, l.jsx)(i.Button, {
              size: i.Button.Sizes.SMALL,
              onClick: () => {
                (0, i.openModalLazy)(
                  async () => {
                    let { default: e } = await Promise.all([
                      n.e("76540"),
                      n.e("296"),
                    ]).then(n.bind(n, 607018));
                    return (t) =>
                      (0, l.jsx)(e, { reason: s.L.GUILD_PHONE_REQUIRED, ...t });
                  },
                  { modalKey: a.M },
                );
              },
              children: o.intl.string(o.t["13ofGh"]),
            }),
          }),
        });
      }
    },
    990488: function (e, t, n) {
      n.d(t, {
        W: function () {
          return j;
        },
        r: function () {
          return N;
        },
      }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        s = n(442837),
        r = n(430824),
        a = n(594174),
        o = n(246364),
        d = n(866319),
        u = n(118346),
        c = n(186078),
        m = n(73880),
        x = n(276486),
        h = n(196345),
        f = n(707592),
        g = n(981631);
      function v(e) {
        let { guildId: t, formFields: n, updateFormFields: i } = e,
          a = (0, s.e7)([r.Z], () => {
            var e;
            return null === (e = r.Z.getGuild(t)) || void 0 === e
              ? void 0
              : e.rulesChannelId;
          }),
          d = (e, t) => {
            let l = n[e];
            i([...n.slice(0, e), { ...l, response: t }, ...n.slice(e + 1)]);
          },
          u = (e, t) => {
            let l = n[e];
            i([...n.slice(0, e), { ...l, response: t }, ...n.slice(e + 1)]);
          },
          x = (e, t) => {
            let { value: l } = t,
              s = n[e];
            i([...n.slice(0, e), { ...s, response: l }, ...n.slice(e + 1)]);
          },
          g = (e, t) => {
            switch (e.field_type) {
              case o.QJ.TERMS:
                return (0, l.jsx)(
                  h.dd,
                  { channelId: a, formField: e, onChange: (e, n) => d(t, n) },
                  t,
                );
              case o.QJ.TEXT_INPUT:
                return (0, l.jsx)(
                  f.zY,
                  {
                    formField: e,
                    autofocus: 0 === t,
                    onChange: (e) => u(t, e),
                  },
                  t,
                );
              case o.QJ.PARAGRAPH:
                return (0, l.jsx)(
                  m.lX,
                  {
                    formField: e,
                    autofocus: 0 === t,
                    onChange: (e) => u(t, e),
                  },
                  t,
                );
              case o.QJ.MULTIPLE_CHOICE:
                return (0, l.jsx)(
                  c.sp,
                  { formField: e, onChange: (e) => x(t, e) },
                  t,
                );
            }
          };
        return (0, l.jsx)(l.Fragment, { children: n.map((e, t) => g(e, t)) });
      }
      function j(e) {
        let {
            guildId: t,
            formFields: n,
            updateFormFields: i,
            disableVerification: o,
          } = e,
          c = (0, s.e7)([r.Z], () => r.Z.getGuild(t)),
          m = (0, s.e7)([a.default], () => a.default.getCurrentUser()),
          h = (0, d.G)({ guildId: t }) ? x.l : u.b,
          f = !o && (null == c ? void 0 : c.hasFeature(g.oNc.COMMUNITY));
        return null == m
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                f && (0, l.jsx)(h, {}),
                (0, l.jsx)(v, {
                  guildId: t,
                  formFields: n,
                  updateFormFields: i,
                }),
              ],
            });
      }
      function N(e) {
        let {
            guildId: t,
            formFields: n,
            updateFormFields: o,
            disableVerification: c,
          } = e,
          m = (0, s.e7)([r.Z], () => r.Z.getGuild(t)),
          h = (0, s.e7)([a.default], () => a.default.getCurrentUser()),
          { isPhoneVerificationLevel: f, isCurrentUserVerified: j } = (0, d.b)({
            guildId: t,
          }),
          N = i.useRef(j),
          p = f ? x.v : u.B,
          C =
            !c &&
            (null == m ? void 0 : m.hasFeature(g.oNc.COMMUNITY)) &&
            !N.current;
        return null == h
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                C && (0, l.jsx)(p, { isUserVerified: j }),
                (0, l.jsx)(v, {
                  guildId: t,
                  formFields: n,
                  updateFormFields: o,
                }),
              ],
            });
      }
    },
  },
]);
//# sourceMappingURL=03ea1a79029a5bfcec2d.js.map
