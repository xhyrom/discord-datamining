"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53967"],
  {
    489813: function (t, n, i) {
      i.d(n, {
        Ih: function () {
          return o;
        },
        PU: function () {
          return a;
        },
        hK: function () {
          return u;
        },
      });
      var e = i(200651);
      i(192379);
      var r = i(692547),
        l = i(481060),
        s = i(933078);
      function u(t) {
        let { title: n, children: i } = t;
        return (0, e.jsxs)("div", {
          className: s.questionContainer,
          children: [
            (0, e.jsx)(l.Text, {
              className: s.questionTitle,
              variant: "text-md/semibold",
              color: "header-primary",
              children: n,
            }),
            i,
          ],
        });
      }
      function o(t) {
        let { icon: n, text: i, meetsRequirement: u } = t;
        return (0, e.jsxs)("div", {
          className: s.requirementContainer,
          children: [
            (0, e.jsx)(n, {
              className: s.requirementIcon,
              height: 20,
              width: 20,
              size: "custom",
              color: "currentColor",
            }),
            (0, e.jsx)(l.Text, {
              className: s.requirementText,
              variant: "text-md/normal",
              children: i,
            }),
            u
              ? (0, e.jsx)(l.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  className: s.requirementSuccess,
                  secondaryColor: r.Z.colors.WHITE.css,
                })
              : (0, e.jsx)(l.CircleXIcon, {
                  size: "md",
                  color: "currentColor",
                  className: s.requirementFailure,
                  secondaryColor: r.Z.colors.WHITE.css,
                }),
          ],
        });
      }
      function a(t) {
        let {
          icon: n,
          text: i,
          footnote: u,
          meetsRequirement: o,
          children: a,
        } = t;
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsxs)("div", {
              className: s.requirementContainer,
              children: [
                (0, e.jsx)(n, {
                  className: s.requirementIcon,
                  height: 20,
                  width: 20,
                  size: "custom",
                  color: "currentColor",
                }),
                (0, e.jsx)(l.Text, {
                  className: s.requirementText,
                  variant: "text-md/normal",
                  children: i,
                }),
                o
                  ? (0, e.jsx)(l.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: s.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css,
                    })
                  : a,
              ],
            }),
            null != u &&
              (0, e.jsx)(l.Text, {
                color: "header-secondary",
                className: s.footnote,
                variant: "text-xs/normal",
                children: u,
              }),
          ],
        });
      }
    },
    186078: function (t, n, i) {
      i.d(n, {
        BO: function () {
          return g;
        },
        QH: function () {
          return d;
        },
        sp: function () {
          return E;
        },
      });
      var e = i(200651),
        r = i(192379),
        l = i(120356),
        s = i.n(l),
        u = i(481060),
        o = i(489813),
        a = i(707592),
        c = i(119866);
      function g(t) {
        let {
            disabled: n,
            field: i,
            value: l,
            radioItemClassName: o,
            radioItemIconClassName: a,
            onChange: g,
          } = t,
          { choices: d } = i,
          E = r.useMemo(
            () =>
              d.map((t, n) => ({
                name: t,
                value: n,
                radioItemIconClassName: s()(c.multipleChoiceIcon, a),
              })),
            [d, a],
          );
        return (0, e.jsx)(u.RadioGroup, {
          disabled: n,
          options: E,
          value: l,
          onChange: g,
          radioItemClassName: o,
          withTransparentBackground: !0,
        });
      }
      function d(t) {
        let { formField: n } = t,
          i = null != n.response ? n.choices[n.response] : "";
        return (0, e.jsx)(o.hK, {
          title: n.label,
          children: (0, e.jsx)(a.Gi, {
            className: c.fieldBackground,
            value: i,
            disabled: !0,
          }),
        });
      }
      function E(t) {
        let { formField: n, onChange: i } = t;
        return (0, e.jsx)(o.hK, {
          title: n.label,
          children: (0, e.jsx)(g, {
            radioItemClassName: c.fieldBackground,
            field: n,
            value: n.response,
            onChange: i,
          }),
        });
      }
    },
    73880: function (t, n, i) {
      i.d(n, {
        Q8: function () {
          return c;
        },
        jn: function () {
          return g;
        },
        lX: function () {
          return d;
        },
      });
      var e = i(200651);
      i(192379);
      var r = i(120356),
        l = i.n(r),
        s = i(481060),
        u = i(489813),
        o = i(592286),
        a = i(119866);
      function c(t) {
        let {
          value: n,
          placeholder: i,
          onChange: r,
          disabled: u,
          className: c,
          autofocus: g,
        } = t;
        return (0, e.jsx)(s.TextArea, {
          className: l()(a.paragraphFieldBody, c),
          maxLength: o.RS,
          value: null != n ? n : "",
          placeholder: null != i ? i : "",
          onChange: r,
          disabled: u,
          autoFocus: g,
          autosize: !0,
          showRemainingCharacterCount: !u,
        });
      }
      function g(t) {
        let { formField: n } = t;
        return (0, e.jsx)(u.hK, {
          title: n.label,
          children: (0, e.jsx)(c, {
            className: a.fieldBackground,
            value: n.response,
            disabled: !0,
          }),
        });
      }
      function d(t) {
        let { formField: n, autofocus: i, onChange: r } = t;
        return (0, e.jsx)(u.hK, {
          title: n.label,
          children: (0, e.jsx)(c, {
            className: a.fieldBackground,
            value: n.response,
            onChange: r,
            autofocus: i,
          }),
        });
      }
    },
    196345: function (t, n, i) {
      i.d(n, {
        EK: function () {
          return g;
        },
        G0: function () {
          return d;
        },
        QC: function () {
          return E;
        },
        dd: function () {
          return I;
        },
      }),
        i(47120);
      var e = i(200651);
      i(192379);
      var r = i(120356),
        l = i.n(r),
        s = i(481060),
        u = i(454585),
        o = i(489813),
        a = i(388032),
        c = i(119866);
      function g(t) {
        let { terms: n, channelId: i, className: r } = t;
        return (0, e.jsx)("div", {
          className: l()(c.termsFieldBody, r),
          children: n.map((t, n) =>
            (0, e.jsxs)(
              "div",
              {
                className: c.termsRow,
                children: [
                  (0, e.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "".concat(n + 1, "."),
                  }),
                  (0, e.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: c.termsRowContent,
                    children: u.Z.parseGuildVerificationFormRule(t, !0, {
                      channelId: i,
                    }),
                  }),
                ],
              },
              "term-".concat(n),
            ),
          ),
        });
      }
      function d(t) {
        let { onChange: n, checked: i, disabled: r } = t;
        return (0, e.jsx)(s.Checkbox, {
          size: 20,
          type: s.Checkbox.Types.INVERTED,
          value: i,
          onChange: n,
          disabled: r,
          style: { borderWidth: 2 },
          className: c.checkbox,
          children: (0, e.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: a.intl.string(a.t["2EXfGB"]),
          }),
        });
      }
      function E(t) {
        let { formField: n } = t;
        return (0, e.jsx)(o.Ih, {
          icon: s.BookCheckIcon,
          text: a.intl.string(a.t["2xbmoK"]),
          meetsRequirement: !!n.response,
        });
      }
      let I = (t) => {
        let { channelId: n, formField: i, onChange: r } = t;
        return (0, e.jsxs)(o.hK, {
          title: a.intl.string(a.t.Q8OFNz),
          children: [
            (0, e.jsx)(g, {
              className: c.fieldBackground,
              terms: i.values,
              channelId: n,
            }),
            (0, e.jsx)(d, { onChange: r, checked: i.response }),
          ],
        });
      };
    },
    707592: function (t, n, i) {
      i.d(n, {
        Gi: function () {
          return c;
        },
        YJ: function () {
          return g;
        },
        zY: function () {
          return d;
        },
      });
      var e = i(200651);
      i(192379);
      var r = i(120356),
        l = i.n(r),
        s = i(481060),
        u = i(489813),
        o = i(592286),
        a = i(119866);
      function c(t) {
        let {
          value: n,
          placeholder: i,
          onChange: r,
          disabled: u,
          autofocus: c,
          className: g,
        } = t;
        return (0, e.jsx)(s.TextInput, {
          inputClassName: l()(a.textInputFieldBodyInput, g),
          maxLength: o.tL,
          value: null != n ? n : "",
          placeholder: i,
          onChange: r,
          disabled: u,
          autoFocus: c,
        });
      }
      function g(t) {
        let { formField: n } = t;
        return (0, e.jsx)(u.hK, {
          title: n.label,
          children: (0, e.jsx)(s.TextArea, {
            className: l()(a.textInputFieldBodyInput, a.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
          }),
        });
      }
      function d(t) {
        let { formField: n, autofocus: i, onChange: r } = t;
        return (0, e.jsx)(u.hK, {
          title: n.label,
          children: (0, e.jsx)(c, {
            className: a.fieldBackground,
            onChange: r,
            value: n.response,
            autofocus: i,
          }),
        });
      }
    },
    929834: function (t, n, i) {
      i.d(n, {
        U2: function () {
          return s;
        },
        jb: function () {
          return o;
        },
      });
      var e,
        r,
        l = i(388032);
      ((e = r || (r = {}))[(e.GENERAL_CHATTING = 14)] = "GENERAL_CHATTING"),
        (e[(e.GAMING = 1)] = "GAMING"),
        (e[(e.MUSIC = 2)] = "MUSIC"),
        (e[(e.ENTERTAINMENT = 3)] = "ENTERTAINMENT"),
        (e[(e.CREATIVE_ARTS = 4)] = "CREATIVE_ARTS"),
        (e[(e.SCIENCE_AND_TECH = 5)] = "SCIENCE_AND_TECH"),
        (e[(e.EDUCATION = 6)] = "EDUCATION"),
        (e[(e.SPORTS = 7)] = "SPORTS"),
        (e[(e.FASHION_AND_BEAUTY = 8)] = "FASHION_AND_BEAUTY"),
        (e[(e.RELATIONSHIPS_AND_IDENTITY = 9)] = "RELATIONSHIPS_AND_IDENTITY"),
        (e[(e.TRAVEL_AND_FOOD = 10)] = "TRAVEL_AND_FOOD"),
        (e[(e.FITNESS_AND_HEALTH = 11)] = "FITNESS_AND_HEALTH"),
        (e[(e.FINANCE = 12)] = "FINANCE"),
        (e[(e.OTHER = 13)] = "OTHER"),
        (e[(e.EMOJI = 43)] = "EMOJI"),
        (e[(e.BOTS = 49)] = "BOTS");
      let s = {
          14: [
            () => l.intl.string(l.t.D7iWEx),
            () => l.intl.string(l.t["/L7rGx"]),
            () => l.intl.string(l.t.cGIWjY),
            () => l.intl.string(l.t.pQ3bLi),
            () => l.intl.string(l.t.GIaXW1),
            () => l.intl.string(l.t.BXJCGh),
            () => l.intl.string(l.t.vuVkq6),
            () => l.intl.string(l.t.bhfaCQ),
            () => l.intl.string(l.t.XuOAEB),
            () => l.intl.string(l.t.i2qs5u),
          ],
          1: [
            () => l.intl.string(l.t.GIaXW1),
            () => l.intl.string(l.t["/L7rGx"]),
            () => l.intl.string(l.t.pQ3bLi),
            () => l.intl.string(l.t.cGIWjY),
            () => l.intl.string(l.t.bhfaCQ),
            () => l.intl.string(l.t.XFmNp6),
            () => l.intl.string(l.t.i2qs5u),
            () => l.intl.string(l.t["X/WT19"]),
            () => l.intl.string(l.t.GXGNi4),
            () => l.intl.string(l.t.Kma1j4),
          ],
          2: [
            () => l.intl.string(l.t.bt4I09),
            () => l.intl.string(l.t.kPJLKi),
            () => l.intl.string(l.t["AIm/r6"]),
            () => l.intl.string(l.t.cGIWjY),
            () => l.intl.string(l.t["ge/d+f"]),
            () => l.intl.string(l.t["6IjJBA"]),
            () => l.intl.string(l.t["9o6KiI"]),
            () => l.intl.string(l.t.D7iWEx),
            () => l.intl.string(l.t["7ztK/P"]),
            () => l.intl.string(l.t["rD/ntb"]),
          ],
          3: [
            () => l.intl.string(l.t.XuOAEB),
            () => l.intl.string(l.t.cGIWjY),
            () => l.intl.string(l.t.D7iWEx),
            () => l.intl.string(l.t.pQ3bLi),
            () => l.intl.string(l.t.pdWHSU),
            () => l.intl.string(l.t.QiafXV),
            () => l.intl.string(l.t.vuVkq6),
            () => l.intl.string(l.t.UoCpFB),
            () => l.intl.string(l.t["+1/7Z2"]),
          ],
          4: [
            () => l.intl.string(l.t.ZtggfH),
            () => l.intl.string(l.t.XuOAEB),
            () => l.intl.string(l.t["94j5sL"]),
            () => l.intl.string(l.t.cGIWjY),
            () => l.intl.string(l.t.o4tBNz),
            () => l.intl.string(l.t.IFIoIy),
            () => l.intl.string(l.t.LbCJkp),
            () => l.intl.string(l.t.pdWHSU),
            () => l.intl.string(l.t.IVKcrK),
            () => l.intl.string(l.t.eyEy1d),
          ],
          5: [
            () => l.intl.string(l.t.b7SNGh),
            () => l.intl.string(l.t["3QIvxc"]),
            () => l.intl.string(l.t.kNNW5u),
            () => l.intl.string(l.t.N3xsjo),
            () => l.intl.string(l.t.pHmUCg),
            () => l.intl.string(l.t.KOKw4e),
            () => l.intl.string(l.t.QxiuyM),
            () => l.intl.string(l.t["ID64/f"]),
            () => l.intl.string(l.t["i5+2Fx"]),
            () => l.intl.string(l.t.mJwTU1),
          ],
          6: [
            () => l.intl.string(l.t["7F8qdX"]),
            () => l.intl.string(l.t.XmPLhY),
            () => l.intl.string(l.t["G/c0Q0"]),
            () => l.intl.string(l.t["uQYr4+"]),
            () => l.intl.string(l.t.L2nkMj),
            () => l.intl.string(l.t.iUSTDQ),
            () => l.intl.string(l.t.b7SNGh),
            () => l.intl.string(l.t["T+brl5"]),
            () => l.intl.string(l.t.rAnIoK),
            () => l.intl.string(l.t.cGIWjY),
          ],
          7: [
            () => l.intl.string(l.t.PMk3Oj),
            () => l.intl.string(l.t.WzM5YG),
            () => l.intl.string(l.t["+Epq9v"]),
            () => l.intl.string(l.t.y8wELi),
            () => l.intl.string(l.t["xVrb6+"]),
            () => l.intl.string(l.t.F86j2d),
            () => l.intl.string(l.t["b3cP4+"]),
            () => l.intl.string(l.t["3KaQOz"]),
            () => l.intl.string(l.t["+1/7Z2"]),
            () => l.intl.string(l.t["6dJGyc"]),
          ],
          8: [
            () => l.intl.string(l.t["4J2PYG"]),
            () => l.intl.string(l.t.splt1N),
            () => l.intl.string(l.t["MkNq8/"]),
            () => l.intl.string(l.t.NiqSMj),
            () => l.intl.string(l.t["+1/7Z2"]),
            () => l.intl.string(l.t.xJ4Qzs),
            () => l.intl.string(l.t.bNBcQ0),
            () => l.intl.string(l.t.j5IdUF),
            () => l.intl.string(l.t["+zpNOD"]),
          ],
          9: [
            () => l.intl.string(l.t["MR5I+v"]),
            () => l.intl.string(l.t.XuOAEB),
            () => l.intl.string(l.t.UoCpFB),
            () => l.intl.string(l.t["3EMtxs"]),
            () => l.intl.string(l.t.BXJCGh),
          ],
          10: [
            () => l.intl.string(l.t.rOhu7u),
            () => l.intl.string(l.t.f1Zj09),
            () => l.intl.string(l.t.Uh0Fx8),
            () => l.intl.string(l.t.mFRT9P),
            () => l.intl.string(l.t.cGIWjY),
            () => l.intl.string(l.t.jEfJq6),
            () => l.intl.string(l.t.YkEzAQ),
          ],
          11: [
            () => l.intl.string(l.t["kg/vNz"]),
            () => l.intl.string(l.t["1S1Wfn"]),
            () => l.intl.string(l.t.eR1cPD),
            () => l.intl.string(l.t.XPWT7O),
            () => l.intl.string(l.t.vtJDam),
            () => l.intl.string(l.t["4te8Ag"]),
            () => l.intl.string(l.t.MKokFx),
            () => l.intl.string(l.t["h1o0//"]),
            () => l.intl.string(l.t.h5IW39),
            () => l.intl.string(l.t["9reexc"]),
          ],
          12: [
            () => l.intl.string(l.t.rAnIoK),
            () => l.intl.string(l.t.f9SRFh),
            () => l.intl.string(l.t.Z53e3t),
            () => l.intl.string(l.t["eWY96+"]),
            () => l.intl.string(l.t.QxiuyM),
            () => l.intl.string(l.t.eNZqqK),
            () => l.intl.string(l.t.put7Hx),
            () => l.intl.string(l.t.NtauHh),
            () => l.intl.string(l.t["DZeh+/"]),
          ],
          13: [
            () => l.intl.string(l.t.D7iWEx),
            () => l.intl.string(l.t.cGIWjY),
            () => l.intl.string(l.t.pQ3bLi),
            () => l.intl.string(l.t.BXJCGh),
            () => l.intl.string(l.t.XuOAEB),
            () => l.intl.string(l.t.vmvBDg),
            () => l.intl.string(l.t.UoCpFB),
            () => l.intl.string(l.t.QiafXV),
          ],
          43: [
            () => l.intl.string(l.t.dl70Ji),
            () => l.intl.string(l.t.R58PcH),
            () => l.intl.string(l.t.hDjtaG),
            () => l.intl.string(l.t.XuOAEB),
            () => l.intl.string(l.t["/Fgjen"]),
            () => l.intl.string(l.t["FM0+HR"]),
            () => l.intl.string(l.t["OGdz4+"]),
            () => l.intl.string(l.t.ZtggfH),
            () => l.intl.string(l.t.QiafXV),
          ],
          49: [
            () => l.intl.string(l.t.QYvZFh),
            () => l.intl.string(l.t.C2TrLi),
            () => l.intl.string(l.t["9AEkCw"]),
            () => l.intl.string(l.t["FM0+HR"]),
            () => l.intl.string(l.t["vwjf//"]),
            () => l.intl.string(l.t["Exwe4+"]),
            () => l.intl.string(l.t.QiafXV),
          ],
        },
        u = ["en-GB"];
      function o() {
        return (0, l.getAvailableLocales)()
          .map((t) => {
            let n;
            let { value: e, name: r } = t;
            try {
              n = i(621287)("./".concat(t.value, ".png"));
            } catch (t) {
              n = i(1474);
            }
            return "en-US" === e
              ? { value: e, label: l.intl.string(l.t.WKEPHR), image: n }
              : { value: e, label: r, image: n };
          })
          .filter((t) => !u.includes(t.value));
      }
    },
    118215: function (t, n, i) {
      var e,
        r,
        l,
        s,
        u = i(442837),
        o = i(570140);
      let a = {},
        c = !1;
      class g extends (s = u.ZP.Store) {
        isLoading() {
          return c;
        }
        passesChecklist(t) {
          var n;
          return (
            !c && (null === (n = a[t]) || void 0 === n ? void 0 : n.sufficient)
          );
        }
        isPendingSuccess(t) {
          let n = a[t];
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
        getDiscoveryChecklist(t) {
          return a[t];
        }
      }
      (l = "DiscoverGuildChecklistStore"),
        (r = "displayName") in (e = g)
          ? Object.defineProperty(e, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = l),
        (n.ZP = new g(o.Z, {
          DISCOVER_CHECKLIST_FETCH_START: function (t) {
            c = !0;
          },
          DISCOVER_CHECKLIST_FETCH_FAILURE: function (t) {
            c = !1;
          },
          DISCOVER_CHECKLIST_FETCH_SUCCESS: function (t) {
            var n;
            let { checklist: i, guildId: e } = t;
            (c = !1),
              (a[e] = {
                guildId: i.guild_id,
                safeEnvironment: i.safe_environment,
                healthy: i.healthy,
                healthScorePending: i.health_score_pending,
                nsfwProperties: i.nsfw_properties,
                size: i.size,
                protected: i.protected,
                sufficient: i.sufficient,
                sufficientWithoutGracePeriod: i.sufficient_without_grace_period,
                gracePeriodEndDate:
                  null != i.grace_period_end_date
                    ? new Date(i.grace_period_end_date)
                    : null,
                retentionHealthy: i.retention_healthy,
                engagementHealthy: i.engagement_healthy,
                minimumGuildSize: null != i.minimum_size ? i.minimum_size : 1e3,
                healthScore: i.health_score,
                minimumGuildAge:
                  null !== (n = i.minimum_age) && void 0 !== n ? n : 0,
                age: i.age,
              });
          },
        }));
    },
    654351: function (t, n, i) {
      i.d(n, {
        P5: function () {
          return d;
        },
        TJ: function () {
          return c;
        },
        UA: function () {
          return g;
        },
        d5: function () {
          return s;
        },
      });
      var e,
        r,
        l,
        s,
        u = i(626135),
        o = i(929834),
        a = i(981631);
      function c(t, n) {
        let i = t.hasFeature(a.oNc.VERIFIED),
          e = t.hasFeature(a.oNc.DISCOVERABLE),
          r = t.hasFeature(a.oNc.ENABLED_DISCOVERABLE_BEFORE);
        if (i) return "settings";
        if (!e && !r) return n.sufficient ? "intro" : "intro_ineligible";
        let l =
          n.sufficientWithoutGracePeriod &&
          null != n.gracePeriodEndDate &&
          n.gracePeriodEndDate > new Date();
        return n.sufficient || l || !e
          ? n.sufficient || l
            ? "settings"
            : "intro_ineligible"
          : "disqualified";
      }
      function g(t, n) {
        let i = !1,
          e = { guild_id: t.id, automatic: !1 };
        (null == n || t.discoverySplash !== n.discoverySplash) &&
          ((e.discovery_splash_edit_type =
            null == t.discoverySplash ? "removed" : "uploaded"),
          (i = !0)),
          (null == n ||
            t.features.has(a.oNc.DISCOVERABLE) !==
              n.features.has(a.oNc.DISCOVERABLE)) &&
            ((e.is_discoverable = t.features.has(a.oNc.DISCOVERABLE)),
            (i = !0)),
          (null == n || t.rulesChannelId !== n.rulesChannelId) &&
            ((e.rules_channel_id = t.rulesChannelId), (i = !0)),
          i && u.default.track(a.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, e);
      }
      function d(t) {
        var n, i;
        return null !==
          (i =
            null === (n = o.U2[t]) || void 0 === n
              ? void 0
              : n.map((t) => t())) && void 0 !== i
          ? i
          : [];
      }
      ((e = l || (l = {})).UPLOADED = "uploaded"),
        (e.REMOVED = "removed"),
        ((r = s || (s = {})).INTRO = "intro"),
        (r.INTRO_INELIGIBLE = "intro_ineligible"),
        (r.DISQUALIFIED = "disqualified"),
        (r.SETTINGS = "settings");
    },
    658666: function (t, n, i) {
      let e;
      i(47120);
      var r,
        l,
        s,
        u,
        o = i(392711),
        a = i.n(o),
        c = i(442837),
        g = i(570140),
        d = i(944163),
        E = i(246364),
        I = i(999382),
        f = i(118215),
        h = i(654351),
        N = i(384632),
        T = i(981631),
        m = i(388032);
      let _ = !1;
      function C() {
        let t = I.Z.getGuild();
        if (null == t) return;
        let n = f.ZP.getDiscoveryChecklist(t.id);
        if (null != n) return (0, h.TJ)(t, n);
      }
      function A() {
        var t;
        let n = I.Z.getGuildId();
        return null == n
          ? null
          : null === (t = d.Z.get(n)) || void 0 === t
            ? void 0
            : t.formFields;
      }
      function S() {
        let t = A();
        if (null == t) return;
        let n = t.find((t) => (0, E.J)(t));
        return null == n
          ? [{ id: (0, o.uniqueId)(), value: "" }]
          : n.values.map((t) => ({ id: (0, o.uniqueId)(), value: t }));
      }
      function v() {
        let t = A();
        if (null == t) return;
        let n = t.find((t) => (0, E.J)(t));
        if (0 === t.length || (1 === t.length && null != n)) {
          let t = {
            field_type: E.QJ.TEXT_INPUT,
            label: m.intl.string(m.t["83ZsRU"]),
            required: !0,
          };
          return null != n ? [n, t] : [t];
        }
        return [...t];
      }
      function p(t) {
        return t.hasFeature(T.oNc.DISCOVERABLE)
          ? N.A.DISCOVERABLE
          : t.hasFeature(T.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)
            ? N.A.APPLY
            : N.A.INVITE;
      }
      function x(t, n) {
        let i =
          t.hasFeature(T.oNc.MEMBER_VERIFICATION_GATE_ENABLED) ||
          t.hasFeature(T.oNc.CLAN);
        switch (n) {
          case N.A.INVITE:
            return { joinType: N.A.INVITE, requireTerms: i, termRules: S() };
          case N.A.APPLY:
            return { joinType: N.A.APPLY, pendingVerificationFields: v() };
          case N.A.DISCOVERABLE:
            return {
              joinType: N.A.DISCOVERABLE,
              settingsView: C(),
              requireTerms: i,
              termRules: S(),
            };
        }
      }
      function R() {
        let t = I.Z.getGuild();
        if (null == t || null == e) {
          _ = !1;
          return;
        }
        if (p(t) !== e.joinType) {
          _ = !0;
          return;
        }
        switch (e.joinType) {
          case N.A.INVITE:
            var n, i, r, l;
            let { requireTerms: s, termRules: u } = e,
              o = t.hasFeature(T.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== s,
              c =
                null !==
                  (r =
                    null === (i = A()) || void 0 === i
                      ? void 0
                      : null === (n = i.find((t) => (0, E.J)(t))) ||
                          void 0 === n
                        ? void 0
                        : n.values) && void 0 !== r
                  ? r
                  : [],
              g =
                null !==
                  (l =
                    null == u
                      ? void 0
                      : u.map((t) => t.value.trim()).filter((t) => "" !== t)) &&
                void 0 !== l
                  ? l
                  : [],
              d = !a().isEqual(c, g);
            _ = o || d;
            break;
          case N.A.APPLY:
            let f = A(),
              { pendingVerificationFields: h } = e;
            _ = null == f ? null != h : null != h && !a().isEqual(f, h);
            break;
          case N.A.DISCOVERABLE:
            _ = !1;
        }
      }
      function D() {
        let t = I.Z.getGuild();
        if (null == t) return !1;
        let n = p(t);
        (e = x(t, n)), R();
      }
      function L() {
        if (null == I.Z.getGuildId() || null == e) return !1;
        (e =
          e.joinType === N.A.APPLY
            ? { ...e, pendingVerificationFields: v() }
            : { ...e, termRules: S() }),
          R();
      }
      function G(t) {
        let { section: n } = t;
        return n !== T.pNK.ACCESS ? j() : D();
      }
      function j() {
        (e = void 0), (_ = !1);
      }
      class O extends (r = c.ZP.Store) {
        initialize() {
          this.waitFor(I.Z, d.Z, f.ZP),
            this.syncWith([I.Z, d.Z], () => {
              R();
            });
        }
        get pendingState() {
          return e;
        }
        showNotice() {
          return _;
        }
      }
      (u = "GuildSettingsJoinRulesStore"),
        (s = "displayName") in (l = O)
          ? Object.defineProperty(l, s, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[s] = u),
        (n.Z = new O(g.Z, {
          GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (t) {
            let { guildId: n, requireTerms: i, termRules: r } = t;
            if (
              n !== I.Z.getGuildId() ||
              ((null == e ? void 0 : e.joinType) !== N.A.INVITE &&
                (null == e ? void 0 : e.joinType) !== N.A.DISCOVERABLE)
            )
              return !1;
            (e = { ...e, requireTerms: i, termRules: r }), R();
          },
          GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (
            t,
          ) {
            let { guildId: n, formFields: i } = t;
            if (
              n !== I.Z.getGuildId() ||
              (null == e ? void 0 : e.joinType) !== N.A.APPLY
            )
              return !1;
            (e = { ...e, pendingVerificationFields: i }), R();
          },
          GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (t) {
            let { guildId: n, joinType: i } = t,
              r = I.Z.getGuild();
            if (n !== (null == r ? void 0 : r.id)) return !1;
            (e = x(r, i)), R();
          },
          MEMBER_VERIFICATION_FORM_UPDATE: L,
          MEMBER_VERIFICATION_FORM_FETCH_FAIL: L,
          GUILD_SETTINGS_JOIN_RULES_RESET: function () {
            return D();
          },
          GUILD_SETTINGS_INIT: G,
          GUILD_SETTINGS_SET_SECTION: G,
          GUILD_SETTINGS_CLOSE: j,
          DISCOVER_CHECKLIST_FETCH_SUCCESS: function () {
            if (
              (null == e ? void 0 : e.joinType) !== N.A.DISCOVERABLE ||
              null != e.settingsView
            )
              return !1;
            (e = { ...e, settingsView: C() }), R();
          },
        }));
    },
    384632: function (t, n, i) {
      var e, r;
      i.d(n, {
        A: function () {
          return e;
        },
      }),
        ((r = e || (e = {})).INVITE = "invite"),
        (r.APPLY = "apply"),
        (r.DISCOVERABLE = "discoverable");
    },
  },
]);
//# sourceMappingURL=f1de06eb65b116a22c6f.js.map
