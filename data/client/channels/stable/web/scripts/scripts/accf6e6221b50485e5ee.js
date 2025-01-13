"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53967"],
  {
    489813: function (e, n, t) {
      t.d(n, {
        Ih: function () {
          return a;
        },
        PU: function () {
          return s;
        },
        hK: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(692547),
        l = t(481060),
        u = t(933078);
      function o(e) {
        let { title: n, children: t } = e;
        return (0, i.jsxs)("div", {
          className: u.questionContainer,
          children: [
            (0, i.jsx)(l.Text, {
              className: u.questionTitle,
              variant: "text-md/semibold",
              color: "header-primary",
              children: n,
            }),
            t,
          ],
        });
      }
      function a(e) {
        let { icon: n, text: t, meetsRequirement: o } = e;
        return (0, i.jsxs)("div", {
          className: u.requirementContainer,
          children: [
            (0, i.jsx)(n, {
              className: u.requirementIcon,
              height: 20,
              width: 20,
              size: "custom",
              color: "currentColor",
            }),
            (0, i.jsx)(l.Text, {
              className: u.requirementText,
              variant: "text-md/normal",
              children: t,
            }),
            o
              ? (0, i.jsx)(l.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  className: u.requirementSuccess,
                  secondaryColor: r.Z.colors.WHITE.css,
                })
              : (0, i.jsx)(l.CircleXIcon, {
                  size: "md",
                  color: "currentColor",
                  className: u.requirementFailure,
                  secondaryColor: r.Z.colors.WHITE.css,
                }),
          ],
        });
      }
      function s(e) {
        let {
          icon: n,
          text: t,
          footnote: o,
          meetsRequirement: a,
          children: s,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: u.requirementContainer,
              children: [
                (0, i.jsx)(n, {
                  className: u.requirementIcon,
                  height: 20,
                  width: 20,
                  size: "custom",
                  color: "currentColor",
                }),
                (0, i.jsx)(l.Text, {
                  className: u.requirementText,
                  variant: "text-md/normal",
                  children: t,
                }),
                a
                  ? (0, i.jsx)(l.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: u.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css,
                    })
                  : s,
              ],
            }),
            null != o &&
              (0, i.jsx)(l.Text, {
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
          return f;
        },
        sp: function () {
          return E;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        u = t.n(l),
        o = t(481060),
        a = t(489813),
        s = t(707592),
        c = t(119866);
      function d(e) {
        let {
            disabled: n,
            field: t,
            value: l,
            radioItemClassName: a,
            radioItemIconClassName: s,
            onChange: d,
          } = e,
          { choices: f } = t,
          E = r.useMemo(
            () =>
              f.map((e, n) => ({
                name: e,
                value: n,
                radioItemIconClassName: u()(c.multipleChoiceIcon, s),
              })),
            [f, s],
          );
        return (0, i.jsx)(o.RadioGroup, {
          disabled: n,
          options: E,
          value: l,
          onChange: d,
          radioItemClassName: a,
          withTransparentBackground: !0,
        });
      }
      function f(e) {
        let { formField: n } = e,
          t = null != n.response ? n.choices[n.response] : "";
        return (0, i.jsx)(a.hK, {
          title: n.label,
          children: (0, i.jsx)(s.Gi, {
            className: c.fieldBackground,
            value: t,
            disabled: !0,
          }),
        });
      }
      function E(e) {
        let { formField: n, onChange: t } = e;
        return (0, i.jsx)(a.hK, {
          title: n.label,
          children: (0, i.jsx)(d, {
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
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        u = t(481060),
        o = t(489813),
        a = t(592286),
        s = t(119866);
      function c(e) {
        let {
          value: n,
          placeholder: t,
          onChange: r,
          disabled: o,
          className: c,
          autofocus: d,
        } = e;
        return (0, i.jsx)(u.TextArea, {
          className: l()(s.paragraphFieldBody, c),
          maxLength: a.RS,
          value: null != n ? n : "",
          placeholder: null != t ? t : "",
          onChange: r,
          disabled: o,
          autoFocus: d,
          autosize: !0,
          showRemainingCharacterCount: !o,
        });
      }
      function d(e) {
        let { formField: n } = e;
        return (0, i.jsx)(o.hK, {
          title: n.label,
          children: (0, i.jsx)(c, {
            className: s.fieldBackground,
            value: n.response,
            disabled: !0,
          }),
        });
      }
      function f(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, i.jsx)(o.hK, {
          title: n.label,
          children: (0, i.jsx)(c, {
            className: s.fieldBackground,
            value: n.response,
            onChange: r,
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
          return f;
        },
        QC: function () {
          return E;
        },
        dd: function () {
          return I;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        u = t(481060),
        o = t(454585),
        a = t(489813),
        s = t(388032),
        c = t(119866);
      function d(e) {
        let { terms: n, channelId: t, className: r } = e;
        return (0, i.jsx)("div", {
          className: l()(c.termsFieldBody, r),
          children: n.map((e, n) =>
            (0, i.jsxs)(
              "div",
              {
                className: c.termsRow,
                children: [
                  (0, i.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "".concat(n + 1, "."),
                  }),
                  (0, i.jsx)(u.Text, {
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
      function f(e) {
        let { onChange: n, checked: t, disabled: r } = e;
        return (0, i.jsx)(u.Checkbox, {
          size: 20,
          type: u.Checkbox.Types.INVERTED,
          value: t,
          onChange: n,
          disabled: r,
          style: { borderWidth: 2 },
          className: c.checkbox,
          children: (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: s.intl.string(s.t["2EXfGB"]),
          }),
        });
      }
      function E(e) {
        let { formField: n } = e;
        return (0, i.jsx)(a.Ih, {
          icon: u.BookCheckIcon,
          text: s.intl.string(s.t["2xbmoK"]),
          meetsRequirement: !!n.response,
        });
      }
      let I = (e) => {
        let { channelId: n, formField: t, onChange: r } = e;
        return (0, i.jsxs)(a.hK, {
          title: s.intl.string(s.t.Q8OFNz),
          children: [
            (0, i.jsx)(d, {
              className: c.fieldBackground,
              terms: t.values,
              channelId: n,
            }),
            (0, i.jsx)(f, { onChange: r, checked: t.response }),
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
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        u = t(481060),
        o = t(489813),
        a = t(592286),
        s = t(119866);
      function c(e) {
        let {
          value: n,
          placeholder: t,
          onChange: r,
          disabled: o,
          autofocus: c,
          className: d,
        } = e;
        return (0, i.jsx)(u.TextInput, {
          inputClassName: l()(s.textInputFieldBodyInput, d),
          maxLength: a.tL,
          value: null != n ? n : "",
          placeholder: t,
          onChange: r,
          disabled: o,
          autoFocus: c,
        });
      }
      function d(e) {
        let { formField: n } = e;
        return (0, i.jsx)(o.hK, {
          title: n.label,
          children: (0, i.jsx)(u.TextArea, {
            className: l()(s.textInputFieldBodyInput, s.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
          }),
        });
      }
      function f(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, i.jsx)(o.hK, {
          title: n.label,
          children: (0, i.jsx)(c, {
            className: s.fieldBackground,
            onChange: r,
            value: n.response,
            autofocus: t,
          }),
        });
      }
    },
    118215: function (e, n, t) {
      var i,
        r,
        l,
        u,
        o = t(442837),
        a = t(570140);
      let s = {},
        c = !1;
      class d extends (u = o.ZP.Store) {
        isLoading() {
          return c;
        }
        passesChecklist(e) {
          var n;
          return (
            !c && (null === (n = s[e]) || void 0 === n ? void 0 : n.sufficient)
          );
        }
        isPendingSuccess(e) {
          let n = s[e];
          return (
            null != n &&
            !c &&
            n.healthScorePending &&
            n.safeEnvironment &&
            0 === Object.keys(n.nsfwProperties).length &&
            n.size &&
            n.protected
          );
        }
        getDiscoveryChecklist(e) {
          return s[e];
        }
      }
      (l = "DiscoverGuildChecklistStore"),
        (r = "displayName") in (i = d)
          ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = l),
        (n.ZP = new d(a.Z, {
          DISCOVER_CHECKLIST_FETCH_START: function (e) {
            c = !0;
          },
          DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
            c = !1;
          },
          DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
            var n;
            let { checklist: t, guildId: i } = e;
            (c = !1),
              (s[i] = {
                guildId: t.guild_id,
                safeEnvironment: t.safe_environment,
                healthy: t.healthy,
                healthScorePending: t.health_score_pending,
                nsfwProperties: t.nsfw_properties,
                size: t.size,
                protected: t.protected,
                sufficient: t.sufficient,
                sufficientWithoutGracePeriod: t.sufficient_without_grace_period,
                gracePeriodEndDate:
                  null != t.grace_period_end_date
                    ? new Date(t.grace_period_end_date)
                    : null,
                retentionHealthy: t.retention_healthy,
                engagementHealthy: t.engagement_healthy,
                minimumGuildSize: null != t.minimum_size ? t.minimum_size : 1e3,
                healthScore: t.health_score,
                minimumGuildAge:
                  null !== (n = t.minimum_age) && void 0 !== n ? n : 0,
                age: t.age,
              });
          },
        }));
    },
    658666: function (e, n, t) {
      let i;
      t(47120);
      var r,
        l,
        u,
        o,
        a = t(392711),
        s = t.n(a),
        c = t(442837),
        d = t(570140),
        f = t(944163),
        E = t(246364),
        I = t(999382),
        h = t(118215),
        m = t(384632),
        _ = t(386885),
        g = t(981631),
        C = t(388032);
      let T = { verificationDirty: !1, guildDirty: !1 };
      function v() {
        let e = I.Z.getGuild();
        if (null == e) return;
        let n = h.ZP.getDiscoveryChecklist(e.id);
        if (null != n) return (0, _.V)(e, n);
      }
      function N() {
        var e;
        let n = I.Z.getGuildId();
        return null == n
          ? null
          : null === (e = f.Z.get(n)) || void 0 === e
            ? void 0
            : e.formFields;
      }
      function S() {
        let e = N();
        if (null == e) return;
        let n = e.find((e) => (0, E.J)(e));
        return null == n
          ? [{ id: (0, a.uniqueId)(), value: "" }]
          : n.values.map((e) => ({ id: (0, a.uniqueId)(), value: e }));
      }
      function p() {
        let e = N();
        if (null == e) return;
        let n = e.find((e) => (0, E.J)(e));
        if (0 === e.length || (1 === e.length && null != n)) {
          let e = {
            field_type: E.QJ.TEXT_INPUT,
            label: C.intl.string(C.t["83ZsRU"]),
            required: !0,
          };
          return null != n ? [n, e] : [e];
        }
        return [...e];
      }
      function x(e) {
        return e.hasFeature(g.oNc.DISCOVERABLE)
          ? m.A.DISCOVERABLE
          : e.hasFeature(g.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)
            ? m.A.APPLY
            : m.A.INVITE;
      }
      function A(e, n) {
        let t =
          e.hasFeature(g.oNc.MEMBER_VERIFICATION_GATE_ENABLED) ||
          e.hasFeature(g.oNc.CLAN);
        switch (n) {
          case m.A.INVITE:
            return { joinType: m.A.INVITE, requireTerms: t, termRules: S() };
          case m.A.APPLY:
            return { joinType: m.A.APPLY, pendingVerificationFields: p() };
          case m.A.DISCOVERABLE:
            return {
              joinType: m.A.DISCOVERABLE,
              settingsView: v(),
              requireTerms: t,
              termRules: S(),
            };
        }
      }
      function D(e, n) {
        var t, i, r, l;
        let { requireTerms: u, termRules: o } = n;
        if (e.hasFeature(g.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== u)
          return !0;
        let a = null !== (i = N()) && void 0 !== i ? i : [];
        if (a.length > 1) return !0;
        let c =
            null !==
              (r =
                null === (t = a.find((e) => (0, E.J)(e))) || void 0 === t
                  ? void 0
                  : t.values) && void 0 !== r
              ? r
              : [],
          d =
            null !==
              (l =
                null == o
                  ? void 0
                  : o.map((e) => e.value.trim()).filter((e) => "" !== e)) &&
            void 0 !== l
              ? l
              : [];
        return !s().isEqual(c, d);
      }
      function L() {
        let e = I.Z.getGuild();
        if (null == e || null == i) {
          T = { verificationDirty: !1, guildDirty: !1 };
          return;
        }
        let n = x(e) !== i.joinType;
        switch (i.joinType) {
          case m.A.INVITE:
            T = { verificationDirty: D(e, i), guildDirty: n };
            break;
          case m.A.APPLY:
            let t;
            let r = N(),
              { pendingVerificationFields: l } = i;
            T = {
              verificationDirty: (t =
                null == r ? null != l : null != l && !s().isEqual(r, l)),
              guildDirty: n,
            };
            break;
          case m.A.DISCOVERABLE:
            T = {
              verificationDirty: D(e, i),
              guildDirty: n || I.Z.hasChanges(),
            };
        }
      }
      function y() {
        if (null == I.Z.getGuildId() || null == i) return !1;
        (i =
          i.joinType === m.A.APPLY
            ? { ...i, pendingVerificationFields: p() }
            : { ...i, termRules: S() }),
          L();
      }
      function j(e) {
        let { section: n } = e;
        if (n !== g.pNK.ACCESS) return R();
        let t = I.Z.getGuild();
        if (null == t) return !1;
        let r = x(t);
        (i = A(t, r)), L();
      }
      function R() {
        (i = void 0), (T = { verificationDirty: !1, guildDirty: !1 });
      }
      function b() {
        if ((null == i ? void 0 : i.joinType) !== m.A.DISCOVERABLE) return !1;
        (i = { ...i, settingsView: v() }), L();
      }
      class F extends (r = c.ZP.Store) {
        initialize() {
          this.waitFor(I.Z, f.Z, h.ZP),
            this.syncWith([I.Z, f.Z], () => {
              L();
            });
        }
        get pendingState() {
          return i;
        }
        get dirtyState() {
          return T;
        }
        showNotice() {
          return T.guildDirty || T.verificationDirty;
        }
      }
      (o = "GuildSettingsJoinRulesStore"),
        (u = "displayName") in (l = F)
          ? Object.defineProperty(l, u, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[u] = o),
        (n.Z = new F(d.Z, {
          GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
            let { guildId: n, requireTerms: t, termRules: r } = e;
            if (
              n !== I.Z.getGuildId() ||
              ((null == i ? void 0 : i.joinType) !== m.A.INVITE &&
                (null == i ? void 0 : i.joinType) !== m.A.DISCOVERABLE)
            )
              return !1;
            (i = { ...i, requireTerms: t, termRules: r }), L();
          },
          GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (
            e,
          ) {
            let { guildId: n, formFields: t } = e;
            if (
              n !== I.Z.getGuildId() ||
              (null == i ? void 0 : i.joinType) !== m.A.APPLY
            )
              return !1;
            (i = { ...i, pendingVerificationFields: t }), L();
          },
          GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
            let { guildId: n, joinType: t } = e,
              r = I.Z.getGuild();
            if (n !== (null == r ? void 0 : r.id)) return !1;
            (i = A(r, t)), L();
          },
          MEMBER_VERIFICATION_FORM_UPDATE: y,
          MEMBER_VERIFICATION_FORM_FETCH_FAIL: y,
          GUILD_SETTINGS_INIT: j,
          GUILD_SETTINGS_SET_SECTION: j,
          GUILD_SETTINGS_CLOSE: R,
          DISCOVER_CHECKLIST_FETCH_SUCCESS: b,
          GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: b,
          GUILD_SETTINGS_SUBMIT_SUCCESS: b,
        }));
    },
    384632: function (e, n, t) {
      var i, r;
      t.d(n, {
        A: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).INVITE = "invite"),
        (r.APPLY = "apply"),
        (r.DISCOVERABLE = "discoverable");
    },
    386885: function (e, n, t) {
      t.d(n, {
        U: function () {
          return r;
        },
        V: function () {
          return u;
        },
      });
      var i,
        r,
        l = t(981631);
      function u(e, n) {
        let t = e.hasFeature(l.oNc.VERIFIED),
          i = e.hasFeature(l.oNc.DISCOVERABLE);
        if (t) return i ? "eligible_enabled" : "eligible_disabled";
        if (i) {
          let e =
            n.sufficientWithoutGracePeriod &&
            null != n.gracePeriodEndDate &&
            n.gracePeriodEndDate > new Date();
          return n.sufficient || e ? "eligible_enabled" : "disqualified";
        }
        return n.sufficient ? "eligible_disabled" : "ineligible";
      }
      ((i = r || (r = {})).INELIGIBLE = "ineligible"),
        (i.DISQUALIFIED = "disqualified"),
        (i.ELIGIBLE_DISABLED = "eligible_disabled"),
        (i.ELIGIBLE_ENABLED = "eligible_enabled");
    },
  },
]);
//# sourceMappingURL=accf6e6221b50485e5ee.js.map
