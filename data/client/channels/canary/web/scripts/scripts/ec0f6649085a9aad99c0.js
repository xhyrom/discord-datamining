"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99916"],
  {
    419851: function (e) {
      e.exports = "/assets/9a36afa0add142038863.svg";
    },
    246403: function (e) {
      e.exports = "/assets/76e4f80d3efc36d1f1fc.svg";
    },
    990686: function (e, n, t) {
      t.d(n, {
        i: function () {
          return o;
        },
      });
      var i = t(442837),
        r = t(430824),
        l = t(944163),
        s = t(981631);
      function o(e) {
        let { guildId: n } = e;
        return (0, i.e7)(
          [l.Z, r.Z],
          () => {
            var e;
            let t = l.Z.get(n),
              i = null == t ? void 0 : t.guild,
              o = r.Z.getGuild(n),
              u = null == o ? void 0 : o.verificationLevel,
              c = null == i ? void 0 : i.verification_level;
            return null !== (e = null != u ? u : c) && void 0 !== e
              ? e
              : s.sFg.NONE;
          },
          [n],
        );
      }
    },
    187565: function (e, n, t) {
      t.d(n, {
        KJ: function () {
          return i;
        },
        N0: function () {
          return C;
        },
        k3: function () {
          return p;
        },
        lk: function () {
          return T;
        },
        ng: function () {
          return v;
        },
      }),
        t(47120);
      var i,
        r,
        l = t(192379),
        s = t(442837),
        o = t(658666),
        u = t(384632),
        c = t(601964),
        a = t(430824),
        d = t(863249),
        f = t(944163),
        m = t(63568),
        h = t(246364),
        x = t(983736),
        j = t(266395),
        g = t(388032);
      function v(e, n, t) {
        let i = (0, m.jS)(e, "MemberVerificationScreens"),
          r = (0, s.e7)([f.Z], () => f.Z.get(e)),
          c = (0, s.e7)([o.Z], () => o.Z.pendingState);
        l.useEffect(() => {
          if (!t) d.ZP.fetchVerificationForm(e, n);
        }, [e, n, t]);
        let a = l.useMemo(() => {
          var e, n;
          let l;
          if (!t || !i) return null;
          if (
            (null == c ? void 0 : c.joinType) === u.A.APPLY &&
            null != c.pendingVerificationFields
          )
            l = [...c.pendingVerificationFields];
          else if (
            (null == c ? void 0 : c.joinType) === u.A.INVITE &&
            null != c.termRules
          ) {
            let e = c.termRules
              .map((e) => e.value.trim())
              .filter((e) => "" !== e);
            l = [
              {
                field_type: h.QJ.TERMS,
                label: g.intl.string(g.t["9suSIC"]),
                values: e,
                required: !0,
              },
            ];
          }
          return null == l
            ? null
            : {
                version:
                  null !== (e = null == r ? void 0 : r.version) && void 0 !== e
                    ? e
                    : "",
                description:
                  null !== (n = null == r ? void 0 : r.description) &&
                  void 0 !== n
                    ? n
                    : "",
                formFields: l,
                guild: null == r ? void 0 : r.guild,
              };
        }, [t, i, c, r]);
        return null != a ? a : r;
      }
      function C(e, n) {
        let t = (0, s.e7)([a.Z], () => a.Z.getGuild(e));
        return l.useMemo(
          () => (null != t ? t : null != n ? new c.ZP(n) : null),
          [t, n],
        );
      }
      function p(e, n, t) {
        let i = !(null == n ? void 0 : n.isClaimed()),
          r = null == n ? void 0 : n.verified,
          [s, o] = l.useState(!t && i ? 0 : 2);
        return (
          l.useEffect(() => {
            null != n && n.isClaimed() && o(2);
          }, [n]),
          l.useEffect(() => {
            1 === s && r && o(2);
          }, [s, r]),
          { currentStep: s, setCurrentStep: o }
        );
      }
      function T(e) {
        let n = (0, j.rb)((e) => e.hasUnsubmittedChanges);
        l.useEffect(
          () => (
            (0, j.a5)(!1),
            () => {
              (0, j.a5)(!1);
            }
          ),
          [],
        ),
          l.useEffect(() => {
            let t = e.some((e) => e.field_type !== h.QJ.TERMS && (0, x.OA)(e));
            t && !n ? (0, j.a5)(!0) : !t && n && (0, j.a5)(!1);
          }, [e, n]);
      }
      ((r = i || (i = {}))[(r.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (r[(r.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (r[(r.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM");
    },
    118346: function (e, n, t) {
      t.d(n, {
        B: function () {
          return f;
        },
        b: function () {
          return d;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(481060),
        s = t(893776),
        o = t(489813),
        u = t(388032),
        c = t(119866);
      function a() {
        let [e, n] = r.useState(!1),
          [t, o] = r.useState(!1),
          [a, d] = r.useState(!1);
        r.useEffect(() => {
          let e;
          return (
            t &&
              (e = setTimeout(() => {
                o(!1);
              }, 2e3)),
            () => {
              null != e && clearTimeout(e);
            }
          );
        }, [t]);
        let f = async () => {
          if (!e) {
            n(!0);
            try {
              await s.Z.verifyResend(), o(!0), d(!0);
            } catch (e) {
            } finally {
              n(!1);
            }
          }
        };
        return t
          ? (0, i.jsx)(l.Text, {
              className: c.verifyConfirmText,
              variant: "text-sm/normal",
              color: "text-positive",
              children: u.intl.string(u.t.H3Q7U1),
            })
          : (0, i.jsx)(l.Button, {
              size: l.Button.Sizes.SMALL,
              submitting: e,
              onClick: f,
              children: a
                ? u.intl.string(u.t.WnX4Jy)
                : u.intl.string(u.t["13ofGh"]),
            });
      }
      function d() {
        return (0, i.jsx)(o.PU, {
          icon: l.EnvelopeIcon,
          text: u.intl.string(u.t.c6EUJC),
          footnote: u.intl.string(u.t["jMh+TU"]),
          meetsRequirement: !1,
          children: (0, i.jsx)(l.Tooltip, {
            text: u.intl.string(u.t.mGlP39),
            children: (e) =>
              (0, i.jsx)(l.Button, {
                ...e,
                size: l.Button.Sizes.SMALL,
                disabled: !0,
                children: u.intl.string(u.t["13ofGh"]),
              }),
          }),
        });
      }
      function f(e) {
        let { isUserVerified: n } = e,
          t = n ? u.intl.string(u.t.qY1jHB) : u.intl.string(u.t.c6EUJC);
        return (0, i.jsx)(o.PU, {
          icon: l.EnvelopeIcon,
          text: t,
          footnote: u.intl.string(u.t["jMh+TU"]),
          meetsRequirement: n,
          children: (0, i.jsx)(a, {}),
        });
      }
    },
    276486: function (e, n, t) {
      t.d(n, {
        l: function () {
          return c;
        },
        v: function () {
          return a;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(144114),
        s = t(489813),
        o = t(815660),
        u = t(388032);
      function c() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(s.PU, {
            icon: r.MobilePhoneIcon,
            text: u.intl.string(u.t.woMjLS),
            footnote: u.intl.string(u.t["jMh+TU"]),
            meetsRequirement: !1,
            children: (0, i.jsx)(r.Tooltip, {
              text: u.intl.string(u.t.mGlP39),
              children: (e) =>
                (0, i.jsx)(r.Button, {
                  ...e,
                  size: r.Button.Sizes.SMALL,
                  disabled: !0,
                  children: u.intl.string(u.t["13ofGh"]),
                }),
            }),
          }),
        });
      }
      function a(e) {
        let { isUserVerified: n } = e,
          c = n ? u.intl.string(u.t.WWzQtb) : u.intl.string(u.t.woMjLS);
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(s.PU, {
            icon: r.MobilePhoneIcon,
            text: c,
            footnote: u.intl.string(u.t["jMh+TU"]),
            meetsRequirement: n,
            children: (0, i.jsx)(r.Button, {
              size: r.Button.Sizes.SMALL,
              onClick: () => {
                (0, r.openModalLazy)(
                  async () => {
                    let { default: e } = await Promise.all([
                      t.e("76540"),
                      t.e("47528"),
                    ]).then(t.bind(t, 607018));
                    return (n) =>
                      (0, i.jsx)(e, { reason: l.L.GUILD_PHONE_REQUIRED, ...n });
                  },
                  { modalKey: o.M },
                );
              },
              children: u.intl.string(u.t["13ofGh"]),
            }),
          }),
        });
      }
    },
    23262: function (e, n, t) {
      t.d(n, {
        B: function () {
          return f;
        },
        b: function () {
          return d;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(481060),
        s = t(893776),
        o = t(476770),
        u = t(388032),
        c = t(484979);
      function a() {
        let [e, n] = r.useState(!1),
          [t, o] = r.useState(!1),
          [a, d] = r.useState(!1);
        r.useEffect(() => {
          let e;
          return (
            t &&
              (e = setTimeout(() => {
                o(!1);
              }, 2e3)),
            () => {
              null != e && clearTimeout(e);
            }
          );
        }, [t]);
        let f = async () => {
          if (!e) {
            n(!0);
            try {
              await s.Z.verifyResend(), o(!0), d(!0);
            } catch (e) {
            } finally {
              n(!1);
            }
          }
        };
        return t
          ? (0, i.jsx)(l.Text, {
              className: c.verifyConfirmText,
              variant: "text-sm/normal",
              color: "text-positive",
              children: u.intl.string(u.t.H3Q7U1),
            })
          : (0, i.jsx)(l.Button, {
              size: l.Button.Sizes.SMALL,
              submitting: e,
              onClick: f,
              children: a
                ? u.intl.string(u.t.WnX4Jy)
                : u.intl.string(u.t["13ofGh"]),
            });
      }
      function d() {
        return (0, i.jsx)(o.PU, {
          icon: l.EnvelopeIcon,
          text: u.intl.string(u.t.c6EUJC),
          footnote: u.intl.string(u.t["jMh+TU"]),
          meetsRequirement: !1,
          children: (0, i.jsx)(l.Tooltip, {
            text: u.intl.string(u.t.mGlP39),
            children: (e) =>
              (0, i.jsx)(l.Button, {
                ...e,
                size: l.Button.Sizes.SMALL,
                disabled: !0,
                children: u.intl.string(u.t["13ofGh"]),
              }),
          }),
        });
      }
      function f(e) {
        let { isUserVerified: n } = e,
          t = n ? u.intl.string(u.t.qY1jHB) : u.intl.string(u.t.c6EUJC);
        return (0, i.jsx)(o.PU, {
          icon: l.EnvelopeIcon,
          text: t,
          footnote: u.intl.string(u.t["jMh+TU"]),
          meetsRequirement: n,
          children: (0, i.jsx)(a, {}),
        });
      }
    },
    476770: function (e, n, t) {
      t.d(n, {
        CA: function () {
          return u;
        },
        Ih: function () {
          return c;
        },
        PU: function () {
          return a;
        },
        hK: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(692547),
        l = t(481060),
        s = t(130948);
      function o(e) {
        let { title: n, children: t } = e;
        return (0, i.jsxs)("div", {
          className: s.questionContainer,
          children: [
            (0, i.jsx)(l.Text, {
              className: s.questionTitle,
              variant: "text-md/normal",
              color: "header-primary",
              children: n,
            }),
            t,
          ],
        });
      }
      function u(e) {
        let { title: n, children: t } = e;
        return (0, i.jsxs)("div", {
          className: s.disabledQuestionContainer,
          children: [
            (0, i.jsx)(l.Text, {
              className: s.questionTitle,
              variant: "text-sm/medium",
              color: "text-muted",
              children: n,
            }),
            t,
          ],
        });
      }
      function c(e) {
        let { icon: n, text: t, meetsRequirement: o } = e;
        return (0, i.jsxs)("div", {
          className: s.requirementContainer,
          children: [
            (0, i.jsx)(n, {
              className: s.requirementIcon,
              height: 16,
              width: 16,
              size: "custom",
              color: "currentColor",
            }),
            (0, i.jsx)(l.Text, {
              className: s.requirementText,
              variant: "text-sm/medium",
              children: t,
            }),
            o
              ? (0, i.jsx)(l.CircleCheckIcon, {
                  size: "sm",
                  color: "currentColor",
                  className: s.requirementSuccess,
                  secondaryColor: r.Z.colors.WHITE.css,
                })
              : (0, i.jsx)(l.CircleXIcon, {
                  size: "sm",
                  color: "currentColor",
                  className: s.requirementFailure,
                  secondaryColor: r.Z.colors.WHITE.css,
                }),
          ],
        });
      }
      function a(e) {
        let {
          icon: n,
          text: t,
          footnote: o,
          meetsRequirement: u,
          children: c,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: s.requirementContainer,
              children: [
                (0, i.jsx)(n, {
                  className: s.requirementIcon,
                  height: 20,
                  width: 20,
                  size: "custom",
                  color: "currentColor",
                }),
                (0, i.jsx)(l.Text, {
                  className: s.requirementText,
                  variant: "text-md/normal",
                  children: t,
                }),
                u
                  ? (0, i.jsx)(l.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: s.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css,
                    })
                  : c,
              ],
            }),
            null != o &&
              (0, i.jsx)(l.Text, {
                color: "header-secondary",
                className: s.footnote,
                variant: "text-xs/normal",
                children: o,
              }),
          ],
        });
      }
    },
    483760: function (e, n, t) {
      t.d(n, {
        QH: function () {
          return f;
        },
        sp: function () {
          return m;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        s = t.n(l),
        o = t(481060),
        u = t(476770),
        c = t(814960),
        a = t(484979);
      function d(e) {
        let {
            disabled: n,
            field: t,
            value: l,
            radioItemClassName: u,
            radioItemIconClassName: c,
            onChange: d,
          } = e,
          { choices: f } = t,
          m = r.useMemo(
            () =>
              f.map((e, n) => ({
                name: e,
                value: n,
                radioItemIconClassName: s()(a.multipleChoiceIcon, c),
              })),
            [f, c],
          );
        return (0, i.jsx)(o.RadioGroup, {
          radioPosition: "right",
          disabled: n,
          options: m,
          value: l,
          onChange: d,
          radioItemClassName: u,
        });
      }
      function f(e) {
        let { formField: n } = e,
          t = null != n.response ? n.choices[n.response] : "";
        return (0, i.jsx)(u.CA, {
          title: n.label,
          children: (0, i.jsx)(c.Gi, {
            className: a.disabledFieldBackground,
            value: t,
            disabled: !0,
          }),
        });
      }
      function m(e) {
        let { formField: n, onChange: t } = e;
        return (0, i.jsx)(u.hK, {
          title: n.label,
          children: (0, i.jsx)(d, { field: n, value: n.response, onChange: t }),
        });
      }
    },
    465588: function (e, n, t) {
      t.d(n, {
        jn: function () {
          return f;
        },
        lX: function () {
          return m;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        s = t(481060),
        o = t(476770),
        u = t(592286),
        c = t(388032),
        a = t(484979);
      function d(e) {
        let {
          value: n,
          placeholder: t,
          onChange: r,
          disabled: o,
          className: c,
          autofocus: d,
        } = e;
        return (0, i.jsx)(s.TextArea, {
          className: l()(a.paragraphFieldBody, c),
          maxLength: u.RS,
          value: null != n ? n : "",
          placeholder: null != t ? t : "",
          onChange: r,
          disabled: o,
          autoFocus: d,
          autosize: !0,
          showRemainingCharacterCount: !o,
        });
      }
      function f(e) {
        let { formField: n } = e;
        return (0, i.jsx)(o.CA, {
          title: n.label,
          children: (0, i.jsx)(d, {
            className: a.disabledFieldBackground,
            value: n.response,
            disabled: !0,
          }),
        });
      }
      function m(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, i.jsx)(o.hK, {
          title: n.label,
          children: (0, i.jsx)(d, {
            value: n.response,
            onChange: r,
            autofocus: t,
            placeholder: c.intl.string(c.t["Sqn+Wl"]),
          }),
        });
      }
    },
    842310: function (e, n, t) {
      t.d(n, {
        l: function () {
          return c;
        },
        v: function () {
          return a;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(144114),
        s = t(476770),
        o = t(815660),
        u = t(388032);
      function c() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(s.PU, {
            icon: r.MobilePhoneIcon,
            text: u.intl.string(u.t.woMjLS),
            footnote: u.intl.string(u.t["jMh+TU"]),
            meetsRequirement: !1,
            children: (0, i.jsx)(r.Tooltip, {
              text: u.intl.string(u.t.mGlP39),
              children: (e) =>
                (0, i.jsx)(r.Button, {
                  ...e,
                  size: r.Button.Sizes.SMALL,
                  disabled: !0,
                  children: u.intl.string(u.t["13ofGh"]),
                }),
            }),
          }),
        });
      }
      function a(e) {
        let { isUserVerified: n } = e,
          c = n ? u.intl.string(u.t.WWzQtb) : u.intl.string(u.t.woMjLS);
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(s.PU, {
            icon: r.MobilePhoneIcon,
            text: c,
            footnote: u.intl.string(u.t["jMh+TU"]),
            meetsRequirement: n,
            children: (0, i.jsx)(r.Button, {
              size: r.Button.Sizes.SMALL,
              onClick: () => {
                (0, r.openModalLazy)(
                  async () => {
                    let { default: e } = await Promise.all([
                      t.e("76540"),
                      t.e("47528"),
                    ]).then(t.bind(t, 607018));
                    return (n) =>
                      (0, i.jsx)(e, { reason: l.L.GUILD_PHONE_REQUIRED, ...n });
                  },
                  { modalKey: o.M },
                );
              },
              children: u.intl.string(u.t["13ofGh"]),
            }),
          }),
        });
      }
    },
    644929: function (e, n, t) {
      t.d(n, {
        QC: function () {
          return m;
        },
        dd: function () {
          return h;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        s = t(481060),
        o = t(454585),
        u = t(476770),
        c = t(388032),
        a = t(484979);
      function d(e) {
        let { terms: n, channelId: t, className: r } = e;
        return (0, i.jsx)("div", {
          className: l()(a.termsFieldBody, r),
          children: n.map((e, n) =>
            (0, i.jsxs)(
              "div",
              {
                className: a.termsRow,
                children: [
                  (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "".concat(n + 1, "."),
                  }),
                  (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: a.termsRowContent,
                    children: o.Z.parseGuildVerificationFormRule(e, !0, {
                      channelId: t,
                    }),
                  }),
                ],
              },
              "term-".concat(n),
            ),
          ),
        });
      }
      function f(e) {
        let { onChange: n, checked: t, disabled: r } = e;
        return (0, i.jsx)(s.Checkbox, {
          size: 20,
          type: s.Checkbox.Types.INVERTED,
          value: t,
          onChange: n,
          disabled: r,
          style: { borderWidth: 2 },
          className: a.checkbox,
          children: (0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: c.intl.string(c.t["2EXfGB"]),
          }),
        });
      }
      function m(e) {
        let { formField: n } = e;
        return (0, i.jsx)(u.Ih, {
          icon: s.BookCheckIcon,
          text: c.intl.string(c.t["2xbmoK"]),
          meetsRequirement: !!n.response,
        });
      }
      let h = (e) => {
        let { channelId: n, formField: t, onChange: r } = e;
        return (0, i.jsxs)(u.hK, {
          title: c.intl.string(c.t.Q8OFNz),
          children: [
            (0, i.jsx)(d, {
              className: a.disabledFieldBackground,
              terms: t.values,
              channelId: n,
            }),
            (0, i.jsx)(f, { onChange: r, checked: t.response }),
          ],
        });
      };
    },
    814960: function (e, n, t) {
      t.d(n, {
        Gi: function () {
          return c;
        },
        YJ: function () {
          return a;
        },
        zY: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(476770),
        s = t(592286),
        o = t(388032),
        u = t(484979);
      function c(e) {
        let {
          value: n,
          placeholder: t,
          onChange: l,
          disabled: o,
          autofocus: u,
          className: c,
        } = e;
        return (0, i.jsx)(r.TextInput, {
          inputClassName: c,
          maxLength: s.tL,
          value: null != n ? n : "",
          placeholder: t,
          onChange: l,
          disabled: o,
          autoFocus: u,
        });
      }
      function a(e) {
        let { formField: n } = e;
        return (0, i.jsx)(l.CA, {
          title: n.label,
          children: (0, i.jsx)(r.TextArea, {
            className: u.disabledFieldBackground,
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
          }),
        });
      }
      function d(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, i.jsx)(l.hK, {
          title: n.label,
          children: (0, i.jsx)(c, {
            onChange: r,
            value: n.response,
            autofocus: t,
            placeholder: o.intl.string(o.t["Sqn+Wl"]),
          }),
        });
      }
    },
    990488: function (e, n, t) {
      t.d(n, {
        W: function () {
          return b;
        },
        r: function () {
          return E;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        s = t(430824),
        o = t(594174),
        u = t(63568),
        c = t(246364),
        a = t(990686),
        d = t(118346),
        f = t(186078),
        m = t(73880),
        h = t(276486),
        x = t(196345),
        j = t(707592),
        g = t(23262),
        v = t(483760),
        C = t(465588),
        p = t(842310),
        T = t(644929),
        I = t(814960),
        F = t(981631);
      function N(e) {
        let {
            guildId: n,
            formFields: t,
            updateFormFields: r,
            v2Enabled: o,
          } = e,
          u = (0, l.e7)([s.Z], () => {
            var e;
            return null === (e = s.Z.getGuild(n)) || void 0 === e
              ? void 0
              : e.rulesChannelId;
          }),
          a = (e, n) => {
            let i = t[e];
            r([...t.slice(0, e), { ...i, response: n }, ...t.slice(e + 1)]);
          },
          d = (e, n) => {
            let i = t[e];
            r([...t.slice(0, e), { ...i, response: n }, ...t.slice(e + 1)]);
          },
          h = (e, n) => {
            let { value: i } = n,
              l = t[e];
            r([...t.slice(0, e), { ...l, response: i }, ...t.slice(e + 1)]);
          },
          g = (e, n) => {
            switch (e.field_type) {
              case c.QJ.TERMS:
                return (0, i.jsx)(
                  x.dd,
                  { channelId: u, formField: e, onChange: (e, t) => a(n, t) },
                  n,
                );
              case c.QJ.TEXT_INPUT:
                return (0, i.jsx)(
                  j.zY,
                  {
                    formField: e,
                    autofocus: 0 === n,
                    onChange: (e) => d(n, e),
                  },
                  n,
                );
              case c.QJ.PARAGRAPH:
                return (0, i.jsx)(
                  m.lX,
                  {
                    formField: e,
                    autofocus: 0 === n,
                    onChange: (e) => d(n, e),
                  },
                  n,
                );
              case c.QJ.MULTIPLE_CHOICE:
                return (0, i.jsx)(
                  f.sp,
                  { formField: e, onChange: (e) => h(n, e) },
                  n,
                );
            }
          },
          p = (e, n) => {
            switch (e.field_type) {
              case c.QJ.TERMS:
                return (0, i.jsx)(
                  T.dd,
                  { channelId: u, formField: e, onChange: (e, t) => a(n, t) },
                  n,
                );
              case c.QJ.TEXT_INPUT:
                return (0, i.jsx)(
                  I.zY,
                  {
                    formField: e,
                    autofocus: 0 === n,
                    onChange: (e) => d(n, e),
                  },
                  n,
                );
              case c.QJ.PARAGRAPH:
                return (0, i.jsx)(
                  C.lX,
                  {
                    formField: e,
                    autofocus: 0 === n,
                    onChange: (e) => d(n, e),
                  },
                  n,
                );
              case c.QJ.MULTIPLE_CHOICE:
                return (0, i.jsx)(
                  v.sp,
                  { formField: e, onChange: (e) => h(n, e) },
                  n,
                );
            }
          };
        return (0, i.jsx)(i.Fragment, {
          children: t.map((e, n) => (o ? p(e, n) : g(e, n))),
        });
      }
      function b(e) {
        let n,
          {
            guildId: t,
            formFields: r,
            updateFormFields: s,
            disableVerification: c,
          } = e,
          f = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
          m = (0, a.i)({ guildId: t }),
          x = (0, u.jS)(t, "PreviewFormRenderer");
        return ((n =
          m === F.sFg.NONE
            ? null
            : m === F.sFg.VERY_HIGH
              ? x
                ? p.l
                : h.l
              : x
                ? g.b
                : d.b),
        null == f)
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                !c && null != n && (0, i.jsx)(n, {}),
                (0, i.jsx)(N, {
                  guildId: t,
                  formFields: r,
                  updateFormFields: s,
                  v2Enabled: x,
                }),
              ],
            });
      }
      function E(e) {
        let n,
          {
            guildId: t,
            formFields: s,
            updateFormFields: c,
            disableVerification: f,
          } = e,
          m = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
          x = (0, a.i)({ guildId: t }),
          j = (0, u.jS)(t, "PreviewFormRenderer"),
          v =
            (null == m ? void 0 : m.isPhoneVerified()) ||
            (null == m ? void 0 : m.isStaff()),
          C = (null == m ? void 0 : m.verified) || v,
          T = !1;
        x === F.sFg.NONE
          ? ((T = !0), (n = null))
          : x === F.sFg.VERY_HIGH
            ? ((T = null != v && v), (n = j ? p.v : h.v))
            : ((T = null != C && C), (n = j ? g.B : d.B));
        let I = r.useRef(T);
        return null == m
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                !f &&
                  !I.current &&
                  null != n &&
                  (0, i.jsx)(n, { isUserVerified: T }),
                (0, i.jsx)(N, {
                  guildId: t,
                  formFields: s,
                  updateFormFields: c,
                  v2Enabled: j,
                }),
              ],
            });
      }
    },
  },
]);
//# sourceMappingURL=ec0f6649085a9aad99c0.js.map
