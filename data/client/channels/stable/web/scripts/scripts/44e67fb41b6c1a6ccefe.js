"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72514"],
  {
    489813: function (e, n, t) {
      t.d(n, {
        Ih: function () {
          return s;
        },
        PU: function () {
          return a;
        },
        hK: function () {
          return o;
        },
      });
      var r = t(200651);
      t(192379);
      var i = t(692547),
        l = t(481060),
        u = t(933078);
      function o(e) {
        let { title: n, children: t } = e;
        return (0, r.jsxs)("div", {
          className: u.questionContainer,
          children: [
            (0, r.jsx)(l.Text, {
              className: u.questionTitle,
              variant: "text-md/semibold",
              color: "header-primary",
              children: n,
            }),
            t,
          ],
        });
      }
      function s(e) {
        let { icon: n, text: t, meetsRequirement: o } = e;
        return (0, r.jsxs)("div", {
          className: u.requirementContainer,
          children: [
            (0, r.jsx)(n, {
              className: u.requirementIcon,
              height: 20,
              width: 20,
              size: "custom",
              color: "currentColor",
            }),
            (0, r.jsx)(l.Text, {
              className: u.requirementText,
              variant: "text-md/normal",
              children: t,
            }),
            o
              ? (0, r.jsx)(l.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  className: u.requirementSuccess,
                  secondaryColor: i.Z.colors.WHITE.css,
                })
              : (0, r.jsx)(l.CircleXIcon, {
                  size: "md",
                  color: "currentColor",
                  className: u.requirementFailure,
                  secondaryColor: i.Z.colors.WHITE.css,
                }),
          ],
        });
      }
      function a(e) {
        let {
          icon: n,
          text: t,
          footnote: o,
          meetsRequirement: s,
          children: a,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: u.requirementContainer,
              children: [
                (0, r.jsx)(n, {
                  className: u.requirementIcon,
                  height: 20,
                  width: 20,
                  size: "custom",
                  color: "currentColor",
                }),
                (0, r.jsx)(l.Text, {
                  className: u.requirementText,
                  variant: "text-md/normal",
                  children: t,
                }),
                s
                  ? (0, r.jsx)(l.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: u.requirementSuccess,
                      secondaryColor: i.Z.colors.WHITE.css,
                    })
                  : a,
              ],
            }),
            null != o &&
              (0, r.jsx)(l.Text, {
                color: "header-secondary",
                className: u.footnote,
                variant: "text-xs/normal",
                children: o,
              }),
          ],
        });
      }
    },
    186078: function (e, n, t) {
      t.d(n, {
        BO: function () {
          return d;
        },
        QH: function () {
          return I;
        },
        sp: function () {
          return E;
        },
      });
      var r = t(200651),
        i = t(192379),
        l = t(120356),
        u = t.n(l),
        o = t(481060),
        s = t(489813),
        a = t(707592),
        c = t(119866);
      function d(e) {
        let {
            disabled: n,
            field: t,
            value: l,
            radioItemClassName: s,
            radioItemIconClassName: a,
            onChange: d,
          } = e,
          { choices: I } = t,
          E = i.useMemo(
            () =>
              I.map((e, n) => ({
                name: e,
                value: n,
                radioItemIconClassName: u()(c.multipleChoiceIcon, a),
              })),
            [I, a],
          );
        return (0, r.jsx)(o.RadioGroup, {
          disabled: n,
          options: E,
          value: l,
          onChange: d,
          radioItemClassName: s,
          withTransparentBackground: !0,
        });
      }
      function I(e) {
        let { formField: n } = e,
          t = null != n.response ? n.choices[n.response] : "";
        return (0, r.jsx)(s.hK, {
          title: n.label,
          children: (0, r.jsx)(a.Gi, {
            className: c.fieldBackground,
            value: t,
            disabled: !0,
          }),
        });
      }
      function E(e) {
        let { formField: n, onChange: t } = e;
        return (0, r.jsx)(s.hK, {
          title: n.label,
          children: (0, r.jsx)(d, {
            radioItemClassName: c.fieldBackground,
            field: n,
            value: n.response,
            onChange: t,
          }),
        });
      }
    },
    73880: function (e, n, t) {
      t.d(n, {
        Q8: function () {
          return c;
        },
        jn: function () {
          return d;
        },
        lX: function () {
          return I;
        },
      });
      var r = t(200651);
      t(192379);
      var i = t(120356),
        l = t.n(i),
        u = t(481060),
        o = t(489813),
        s = t(592286),
        a = t(119866);
      function c(e) {
        let {
          value: n,
          placeholder: t,
          onChange: i,
          disabled: o,
          className: c,
          autofocus: d,
        } = e;
        return (0, r.jsx)(u.TextArea, {
          className: l()(a.paragraphFieldBody, c),
          maxLength: s.RS,
          value: null != n ? n : "",
          placeholder: null != t ? t : "",
          onChange: i,
          disabled: o,
          autoFocus: d,
          autosize: !0,
          showRemainingCharacterCount: !o,
        });
      }
      function d(e) {
        let { formField: n } = e;
        return (0, r.jsx)(o.hK, {
          title: n.label,
          children: (0, r.jsx)(c, {
            className: a.fieldBackground,
            value: n.response,
            disabled: !0,
          }),
        });
      }
      function I(e) {
        let { formField: n, autofocus: t, onChange: i } = e;
        return (0, r.jsx)(o.hK, {
          title: n.label,
          children: (0, r.jsx)(c, {
            className: a.fieldBackground,
            value: n.response,
            onChange: i,
            autofocus: t,
          }),
        });
      }
    },
    196345: function (e, n, t) {
      t.d(n, {
        EK: function () {
          return d;
        },
        G0: function () {
          return I;
        },
        QC: function () {
          return E;
        },
        dd: function () {
          return m;
        },
      }),
        t(47120);
      var r = t(200651);
      t(192379);
      var i = t(120356),
        l = t.n(i),
        u = t(481060),
        o = t(454585),
        s = t(489813),
        a = t(388032),
        c = t(119866);
      function d(e) {
        let { terms: n, channelId: t, className: i } = e;
        return (0, r.jsx)("div", {
          className: l()(c.termsFieldBody, i),
          children: n.map((e, n) =>
            (0, r.jsxs)(
              "div",
              {
                className: c.termsRow,
                children: [
                  (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "".concat(n + 1, "."),
                  }),
                  (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    className: c.termsRowContent,
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
      function I(e) {
        let { onChange: n, checked: t, disabled: i } = e;
        return (0, r.jsx)(u.Checkbox, {
          size: 20,
          type: u.Checkbox.Types.INVERTED,
          value: t,
          onChange: n,
          disabled: i,
          style: { borderWidth: 2 },
          className: c.checkbox,
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: a.intl.string(a.t["2EXfGB"]),
          }),
        });
      }
      function E(e) {
        let { formField: n } = e;
        return (0, r.jsx)(s.Ih, {
          icon: u.BookCheckIcon,
          text: a.intl.string(a.t["2xbmoK"]),
          meetsRequirement: !!n.response,
        });
      }
      let m = (e) => {
        let { channelId: n, formField: t, onChange: i } = e;
        return (0, r.jsxs)(s.hK, {
          title: a.intl.string(a.t.Q8OFNz),
          children: [
            (0, r.jsx)(d, {
              className: c.fieldBackground,
              terms: t.values,
              channelId: n,
            }),
            (0, r.jsx)(I, { onChange: i, checked: t.response }),
          ],
        });
      };
    },
    707592: function (e, n, t) {
      t.d(n, {
        Gi: function () {
          return c;
        },
        YJ: function () {
          return d;
        },
        zY: function () {
          return I;
        },
      });
      var r = t(200651);
      t(192379);
      var i = t(120356),
        l = t.n(i),
        u = t(481060),
        o = t(489813),
        s = t(592286),
        a = t(119866);
      function c(e) {
        let {
          value: n,
          placeholder: t,
          onChange: i,
          disabled: o,
          autofocus: c,
          className: d,
        } = e;
        return (0, r.jsx)(u.TextInput, {
          inputClassName: l()(a.textInputFieldBodyInput, d),
          maxLength: s.tL,
          value: null != n ? n : "",
          placeholder: t,
          onChange: i,
          disabled: o,
          autoFocus: c,
        });
      }
      function d(e) {
        let { formField: n } = e;
        return (0, r.jsx)(o.hK, {
          title: n.label,
          children: (0, r.jsx)(u.TextArea, {
            className: l()(a.textInputFieldBodyInput, a.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
          }),
        });
      }
      function I(e) {
        let { formField: n, autofocus: t, onChange: i } = e;
        return (0, r.jsx)(o.hK, {
          title: n.label,
          children: (0, r.jsx)(c, {
            className: a.fieldBackground,
            onChange: i,
            value: n.response,
            autofocus: t,
          }),
        });
      }
    },
    894376: function (e, n, t) {
      let r;
      t(47120);
      var i,
        l,
        u,
        o,
        s = t(392711),
        a = t.n(s),
        c = t(442837),
        d = t(570140),
        I = t(944163),
        E = t(246364),
        m = t(446495),
        f = t(999382),
        h = t(981631),
        N = t(388032);
      let T = !1;
      function x() {
        var e;
        let n = f.Z.getGuildId();
        return null == n
          ? null
          : null === (e = I.Z.get(n)) || void 0 === e
            ? void 0
            : e.formFields;
      }
      function v() {
        let e = x();
        if (null == e) return;
        let n = e.find((e) => (0, E.J)(e));
        return null == n
          ? [{ id: (0, s.uniqueId)(), value: "" }]
          : n.values.map((e) => ({ id: (0, s.uniqueId)(), value: e }));
      }
      function p() {
        let e = x();
        if (null == e) return;
        let n = e.find((e) => (0, E.J)(e));
        if (0 === e.length || (1 === e.length && null != n)) {
          let e = {
            field_type: E.QJ.TEXT_INPUT,
            label: N.intl.string(N.t["83ZsRU"]),
            required: !0,
          };
          return null != n ? [n, e] : [e];
        }
        return [...e];
      }
      function A(e) {
        return e.hasFeature(h.oNc.DISCOVERABLE)
          ? m.A.DISCOVERABLE
          : e.hasFeature(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)
            ? m.A.APPLY
            : m.A.INVITE;
      }
      function C() {
        let e = f.Z.getGuild();
        if (null == e || null == r) {
          T = !1;
          return;
        }
        if (A(e) !== r.joinType) {
          T = !0;
          return;
        }
        switch (r.joinType) {
          case m.A.INVITE:
            var n, t, i, l;
            let { requireTerms: u, termRules: o } = r,
              s = e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== u,
              c =
                null !==
                  (i =
                    null === (t = x()) || void 0 === t
                      ? void 0
                      : null === (n = t.find((e) => (0, E.J)(e))) ||
                          void 0 === n
                        ? void 0
                        : n.values) && void 0 !== i
                  ? i
                  : [],
              d =
                null !==
                  (l =
                    null == o
                      ? void 0
                      : o.map((e) => e.value.trim()).filter((e) => "" !== e)) &&
                void 0 !== l
                  ? l
                  : [],
              I = !a().isEqual(c, d);
            T = s || I;
            break;
          case m.A.APPLY:
            let N = x(),
              { pendingVerificationFields: v } = r;
            T = null == N ? null != v : null != v && !a().isEqual(N, v);
            break;
          case m.A.DISCOVERABLE:
            T = !1;
        }
      }
      function _() {
        let e = f.Z.getGuild();
        if (null == e) return !1;
        let n = A(e);
        switch (n) {
          case m.A.DISCOVERABLE:
            r = { joinType: n };
            break;
          case m.A.APPLY:
            r = { joinType: n, pendingVerificationFields: p() };
            break;
          case m.A.INVITE:
            r = {
              joinType: n,
              requireTerms:
                e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) ||
                e.hasFeature(h.oNc.CLAN),
              termRules: v(),
            };
        }
        C();
      }
      function j() {
        if (null == f.Z.getGuildId()) return !1;
        (null == r ? void 0 : r.joinType) === m.A.APPLY
          ? (r = { ...r, pendingVerificationFields: p() })
          : (null == r ? void 0 : r.joinType) === m.A.INVITE &&
            (r = { ...r, termRules: v() }),
          C();
      }
      function g(e) {
        let { section: n } = e;
        return n !== h.pNK.ACCESS ? S() : _();
      }
      function S() {
        (r = void 0), (T = !1);
      }
      class R extends (i = c.ZP.Store) {
        initialize() {
          this.waitFor(f.Z, I.Z),
            this.syncWith([f.Z, I.Z], () => {
              C();
            });
        }
        get pendingState() {
          return r;
        }
        showNotice() {
          return T;
        }
      }
      (o = "GuildSettingsJoinRulesStore"),
        (u = "displayName") in (l = R)
          ? Object.defineProperty(l, u, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[u] = o),
        (n.Z = new R(d.Z, {
          GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
            let { guildId: n, requireTerms: t, termRules: i } = e;
            if (
              n !== f.Z.getGuildId() ||
              (null == r ? void 0 : r.joinType) !== m.A.INVITE
            )
              return !1;
            (r = { ...r, requireTerms: t, termRules: i }), C();
          },
          GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (
            e,
          ) {
            let { guildId: n, formFields: t } = e;
            if (
              n !== f.Z.getGuildId() ||
              (null == r ? void 0 : r.joinType) !== m.A.APPLY
            )
              return !1;
            (r = { ...r, pendingVerificationFields: t }), C();
          },
          GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
            let { guildId: n, joinType: t } = e,
              i = f.Z.getGuild();
            if (n !== (null == i ? void 0 : i.id)) return !1;
            switch (t) {
              case m.A.INVITE:
                r = {
                  joinType: m.A.INVITE,
                  requireTerms: i.hasFeature(
                    h.oNc.MEMBER_VERIFICATION_GATE_ENABLED,
                  ),
                  termRules: v(),
                };
                break;
              case m.A.APPLY:
                r = { joinType: m.A.APPLY, pendingVerificationFields: p() };
                break;
              case m.A.DISCOVERABLE:
                r = { joinType: m.A.DISCOVERABLE };
            }
            C();
          },
          MEMBER_VERIFICATION_FORM_UPDATE: j,
          MEMBER_VERIFICATION_FORM_FETCH_FAIL: j,
          GUILD_SETTINGS_JOIN_RULES_RESET: function () {
            return _();
          },
          GUILD_SETTINGS_INIT: g,
          GUILD_SETTINGS_SET_SECTION: g,
          GUILD_SETTINGS_CLOSE: S,
        }));
    },
    446495: function (e, n, t) {
      var r, i;
      t.d(n, {
        A: function () {
          return r;
        },
      }),
        ((i = r || (r = {})).INVITE = "invite"),
        (i.APPLY = "apply"),
        (i.DISCOVERABLE = "discoverable");
    },
  },
]);
//# sourceMappingURL=44e67fb41b6c1a6ccefe.js.map
