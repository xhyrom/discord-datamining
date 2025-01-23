"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53967"],
  {
    489813: function (e, n, t) {
      t.d(n, {
        Ih: function () {
          return o;
        },
        PU: function () {
          return s;
        },
        hK: function () {
          return a;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(692547),
        l = t(481060),
        u = t(933078);
      function a(e) {
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
      function o(e) {
        let { icon: n, text: t, meetsRequirement: a } = e;
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
            a
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
          footnote: a,
          meetsRequirement: o,
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
                o
                  ? (0, i.jsx)(l.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: u.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css,
                    })
                  : s,
              ],
            }),
            null != a &&
              (0, i.jsx)(l.Text, {
                color: "header-secondary",
                className: u.footnote,
                variant: "text-xs/normal",
                children: a,
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
          return E;
        },
        sp: function () {
          return f;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        u = t.n(l),
        a = t(481060),
        o = t(489813),
        s = t(707592),
        c = t(119866);
      function d(e) {
        let {
            disabled: n,
            field: t,
            value: l,
            radioItemClassName: o,
            radioItemIconClassName: s,
            onChange: d,
          } = e,
          { choices: E } = t,
          f = r.useMemo(
            () =>
              E.map((e, n) => ({
                name: e,
                value: n,
                radioItemIconClassName: u()(c.multipleChoiceIcon, s),
              })),
            [E, s],
          );
        return (0, i.jsx)(a.RadioGroup, {
          disabled: n,
          options: f,
          value: l,
          onChange: d,
          radioItemClassName: o,
          withTransparentBackground: !0,
        });
      }
      function E(e) {
        let { formField: n } = e,
          t = null != n.response ? n.choices[n.response] : "";
        return (0, i.jsx)(o.hK, {
          title: n.label,
          children: (0, i.jsx)(s.Gi, {
            className: c.fieldBackground,
            value: t,
            disabled: !0,
          }),
        });
      }
      function f(e) {
        let { formField: n, onChange: t } = e;
        return (0, i.jsx)(o.hK, {
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
          return E;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        u = t(481060),
        a = t(489813),
        o = t(592286),
        s = t(119866);
      function c(e) {
        let {
          value: n,
          placeholder: t,
          onChange: r,
          disabled: a,
          className: c,
          autofocus: d,
        } = e;
        return (0, i.jsx)(u.TextArea, {
          className: l()(s.paragraphFieldBody, c),
          maxLength: o.RS,
          value: null != n ? n : "",
          placeholder: null != t ? t : "",
          onChange: r,
          disabled: a,
          autoFocus: d,
          autosize: !0,
          showRemainingCharacterCount: !a,
        });
      }
      function d(e) {
        let { formField: n } = e;
        return (0, i.jsx)(a.hK, {
          title: n.label,
          children: (0, i.jsx)(c, {
            className: s.fieldBackground,
            value: n.response,
            disabled: !0,
          }),
        });
      }
      function E(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, i.jsx)(a.hK, {
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
          return E;
        },
        QC: function () {
          return f;
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
        a = t(454585),
        o = t(489813),
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
                    children: a.Z.parseGuildVerificationFormRule(e, !0, {
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
      function E(e) {
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
      function f(e) {
        let { formField: n } = e;
        return (0, i.jsx)(o.Ih, {
          icon: u.BookCheckIcon,
          text: s.intl.string(s.t["2xbmoK"]),
          meetsRequirement: !!n.response,
        });
      }
      let I = (e) => {
        let { channelId: n, formField: t, onChange: r } = e;
        return (0, i.jsxs)(o.hK, {
          title: s.intl.string(s.t.Q8OFNz),
          children: [
            (0, i.jsx)(d, {
              className: c.fieldBackground,
              terms: t.values,
              channelId: n,
            }),
            (0, i.jsx)(E, { onChange: r, checked: t.response }),
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
          return E;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        u = t(481060),
        a = t(489813),
        o = t(592286),
        s = t(119866);
      function c(e) {
        let {
          value: n,
          placeholder: t,
          onChange: r,
          disabled: a,
          autofocus: c,
          className: d,
        } = e;
        return (0, i.jsx)(u.TextInput, {
          inputClassName: l()(s.textInputFieldBodyInput, d),
          maxLength: o.tL,
          value: null != n ? n : "",
          placeholder: t,
          onChange: r,
          disabled: a,
          autoFocus: c,
        });
      }
      function d(e) {
        let { formField: n } = e;
        return (0, i.jsx)(a.hK, {
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
      function E(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, i.jsx)(a.hK, {
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
        a = t(442837),
        o = t(570140);
      let s = {},
        c = !1;
      class d extends (u = a.ZP.Store) {
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
        (n.ZP = new d(o.Z, {
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
        a,
        o = t(392711),
        s = t.n(o),
        c = t(442837),
        d = t(570140),
        E = t(944163),
        f = t(246364),
        I = t(999382),
        h = t(118215),
        m = t(384632),
        _ = t(386885),
        C = t(981631),
        g = t(388032);
      let T = { verificationDirty: !1, guildDirty: !1 };
      function N() {
        let e = I.Z.getGuild();
        if (null == e) return;
        let n = h.ZP.getDiscoveryChecklist(e.id);
        if (null != n) return (0, _.V)(e, n);
      }
      function v() {
        var e;
        let n = I.Z.getGuildId();
        return null == n
          ? null
          : null === (e = E.Z.get(n)) || void 0 === e
            ? void 0
            : e.formFields;
      }
      function A() {
        let e = v();
        if (null == e) return;
        let n = e.find((e) => (0, f.J)(e));
        return null == n
          ? [{ id: (0, o.uniqueId)(), value: "" }]
          : n.values.map((e) => ({ id: (0, o.uniqueId)(), value: e }));
      }
      function S() {
        let e = v();
        if (null == e) return;
        let n = e.find((e) => (0, f.J)(e));
        if (0 === e.length || (1 === e.length && null != n)) {
          let e = {
            field_type: f.QJ.TEXT_INPUT,
            label: g.intl.string(g.t["83ZsRU"]),
            required: !0,
          };
          return null != n ? [n, e] : [e];
        }
        return [...e];
      }
      function p(e) {
        return e.hasFeature(C.oNc.DISCOVERABLE)
          ? m.A.DISCOVERABLE
          : e.hasFeature(C.oNc.MEMBER_VERIFICATION_GATE_ENABLED) &&
              e.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)
            ? m.A.APPLY
            : m.A.INVITE;
      }
      function x(e, n) {
        let t =
          e.hasFeature(C.oNc.MEMBER_VERIFICATION_GATE_ENABLED) ||
          e.hasFeature(C.oNc.CLAN);
        switch (n) {
          case m.A.INVITE:
            return { joinType: m.A.INVITE, requireTerms: t, termRules: A() };
          case m.A.APPLY:
            return { joinType: m.A.APPLY, pendingVerificationFields: S() };
          case m.A.DISCOVERABLE:
            return {
              joinType: m.A.DISCOVERABLE,
              settingsView: N(),
              requireTerms: t,
              termRules: A(),
            };
        }
      }
      function D(e, n) {
        var t, i, r, l;
        let { requireTerms: u, termRules: a } = n;
        if (
          e.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
          e.hasFeature(C.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== u
        )
          return !0;
        let o = null !== (i = v()) && void 0 !== i ? i : [];
        if (o.length > 1) return !0;
        let c =
            null !==
              (r =
                null === (t = o.find((e) => (0, f.J)(e))) || void 0 === t
                  ? void 0
                  : t.values) && void 0 !== r
              ? r
              : [],
          d =
            null !==
              (l =
                null == a
                  ? void 0
                  : a.map((e) => e.value.trim()).filter((e) => "" !== e)) &&
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
        let n = p(e) !== i.joinType;
        switch (i.joinType) {
          case m.A.INVITE:
            T = { verificationDirty: D(e, i), guildDirty: n };
            break;
          case m.A.APPLY:
            let t;
            let r = v(),
              { pendingVerificationFields: l } = i,
              u =
                !e.hasFeature(C.oNc.MEMBER_VERIFICATION_GATE_ENABLED) ||
                !e.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (t = null == r ? null != l : null != l && !s().isEqual(r, l)),
              (T = { verificationDirty: u || t, guildDirty: n });
            break;
          case m.A.DISCOVERABLE:
            T = {
              verificationDirty: D(e, i),
              guildDirty: n || I.Z.hasChanges(),
            };
        }
      }
      function R() {
        if (null == I.Z.getGuildId() || null == i) return !1;
        (i =
          i.joinType === m.A.APPLY
            ? { ...i, pendingVerificationFields: S() }
            : { ...i, termRules: A() }),
          L();
      }
      function y(e) {
        let { section: n } = e;
        if (n !== C.pNK.ACCESS) return j();
        let t = I.Z.getGuild();
        if (null == t) return !1;
        let r = p(t);
        (i = x(t, r)), L();
      }
      function j() {
        (i = void 0), (T = { verificationDirty: !1, guildDirty: !1 });
      }
      function F() {
        if ((null == i ? void 0 : i.joinType) !== m.A.DISCOVERABLE) return !1;
        (i = { ...i, settingsView: N() }), L();
      }
      class b extends (r = c.ZP.Store) {
        initialize() {
          this.waitFor(I.Z, E.Z, h.ZP),
            this.syncWith([I.Z, E.Z], () => {
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
      (a = "GuildSettingsJoinRulesStore"),
        (u = "displayName") in (l = b)
          ? Object.defineProperty(l, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[u] = a),
        (n.Z = new b(d.Z, {
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
            (i = x(r, t)), L();
          },
          MEMBER_VERIFICATION_FORM_UPDATE: R,
          MEMBER_VERIFICATION_FORM_FETCH_FAIL: R,
          GUILD_SETTINGS_INIT: y,
          GUILD_SETTINGS_SET_SECTION: y,
          GUILD_SETTINGS_CLOSE: j,
          DISCOVER_CHECKLIST_FETCH_SUCCESS: F,
          GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: F,
          GUILD_SETTINGS_SUBMIT_SUCCESS: F,
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
//# sourceMappingURL=2ffb24367709d310c8f6.js.map
