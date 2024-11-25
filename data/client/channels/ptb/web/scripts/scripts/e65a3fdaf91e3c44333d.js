"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18824"],
  {
    467432: function (t, e, n) {
      n.d(e, {
        e: function () {
          return a;
        },
      });
      var i = n(709054);
      let a = (t) =>
        864e5 >
        Math.abs(i.default.extractTimestamp(t.id) - new Date().getTime());
    },
    802429: function (t, e, n) {
      n.d(e, {
        i: function () {
          return s;
        },
      });
      var i = n(442837),
        a = n(236289);
      let s = () => (0, i.e7)([a.Z], () => a.Z.getFetchError());
    },
    811085: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return v;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        s = n(392711),
        l = n(442837),
        r = n(692547),
        c = n(481060),
        o = n(594174),
        d = n(531441),
        u = n(451284),
        m = n(959562),
        x = n(800530),
        h = n(388032),
        g = n(578363);
      function v() {
        let t = (0, u.P)(),
          e = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
          [n, v] = a.useState(36),
          j = a.useRef({
            [d.Sn.ALL_GOOD]: null,
            [d.Sn.LIMITED]: null,
            [d.Sn.VERY_LIMITED]: null,
            [d.Sn.AT_RISK]: null,
            [d.Sn.SUSPENDED]: null,
          }),
          N = a.useCallback(() => {
            v(
              Math.max(
                Math.max(
                  ...Object.values(j.current).map((t) => {
                    var e;
                    return null !==
                      (e =
                        null == t
                          ? void 0
                          : t.getBoundingClientRect().height) && void 0 !== e
                      ? e
                      : 36;
                  }),
                ),
                36,
              ),
            );
          }, []);
        a.useEffect(() => {
          N();
          let t = (0, s.debounce)(N, 100);
          window.addEventListener("resize", t);
        }, [N]);
        let f = {
            [d.Sn.ALL_GOOD]: {
              title: h.t.uaKrRk,
              description: h.intl.format(h.t.pEdBDw, {
                termsOfService: x.sQ.TOS_LINK,
                communityGuidelines: x.sQ.COMMUNITY_GUIDELINES,
              }),
              status: h.t["/Idfam"],
              Icon: c.CircleCheckIcon,
              color: r.Z.colors.STATUS_POSITIVE,
            },
            [d.Sn.LIMITED]: {
              title: h.t.epkcmZ,
              description: h.intl.string(h.t["774jub"]),
              status: h.t.umleq6,
              Icon: c.CircleWarningIcon,
              color: r.Z.colors.STATUS_WARNING,
            },
            [d.Sn.VERY_LIMITED]: {
              title: h.t.crzE2d,
              description: h.intl.string(h.t["T/Ufh4"]),
              status: h.t.WBtMHR,
              Icon: c.CircleWarningIcon,
              color: r.Z.unsafe_rawColors.ORANGE_345,
            },
            [d.Sn.AT_RISK]: {
              title: h.t.XRNVzM,
              description: h.intl.string(h.t["hbH+9f"]),
              status: h.t["7f+4Li"],
              Icon: c.CircleWarningIcon,
              color: r.Z.colors.STATUS_DANGER,
            },
            [d.Sn.SUSPENDED]: {
              title: h.t.MExFk5,
              description: h.intl.string(h.t["2liUvr"]),
              status: h.t["0OONGB"],
              Icon: c.CircleXIcon,
              color: r.Z.colors.ICON_MUTED,
            },
          },
          { title: p, description: S, color: T, Icon: I } = f[t.state],
          E = Object.keys(f).length;
        return (0, i.jsxs)(c.Card, {
          className: g.container,
          outline: !1,
          children: [
            (0, i.jsx)("div", {
              className: g.profile,
              children: (0, i.jsx)(m.Z, {
                user: e,
                size: c.AvatarSizes.SIZE_80,
              }),
            }),
            (0, i.jsxs)("div", {
              className: g.status,
              children: [
                (0, i.jsxs)("div", {
                  className: g.title,
                  children: [
                    (0, i.jsx)(c.Heading, {
                      color: "header-primary",
                      variant: "heading-lg/normal",
                      children: h.intl.format(p, {
                        hook: (t) =>
                          (0, i.jsx)(c.Text, {
                            style: { color: T.css },
                            variant: "heading-lg/bold",
                            tag: "span",
                            children: t,
                          }),
                      }),
                    }),
                    (0, i.jsx)(c.Text, {
                      color: "text-normal",
                      variant: "text-sm/normal",
                      children: S,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: g.health,
                  style: { height: n },
                  children: [
                    (0, i.jsx)("div", { className: g.line }),
                    Object.entries(f).map((e, n) => {
                      let [a, s] = e,
                        l = parseInt(a) === t.state;
                      return (0, i.jsxs)(
                        "div",
                        {
                          className: g.statusOption,
                          ref: (t) => (j.current[parseInt(a)] = t),
                          children: [
                            l
                              ? (0, i.jsx)(I, {
                                  className: g.marker,
                                  color: s.color,
                                })
                              : (0, i.jsx)("div", {
                                  className: g.marker,
                                  style: {
                                    marginLeft: 0 === n ? -6 : 0,
                                    marginRight: n === E - 1 ? -6 : 0,
                                  },
                                  children: (0, i.jsx)("div", {
                                    className: g.empty,
                                  }),
                                }),
                            h.intl.format(s.status, {
                              hook: (t) =>
                                (0, i.jsx)(c.Text, {
                                  color: "text-normal",
                                  variant: "text-sm/normal",
                                  className: g.statusLabel,
                                  children: t,
                                }),
                            }),
                          ],
                        },
                        n,
                      );
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    959562: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        s = n(128483),
        l = n(660097);
      function r(t) {
        let { user: e, size: n } = t,
          r = (0, a.getAvatarSpecs)(n),
          c = null != e ? e.getAvatarURL(null, r.size) : l;
        return (0, i.jsx)("div", {
          className: s.avatarBackground,
          children: (0, i.jsx)("div", {
            className: s.avatar,
            style: { width: r.size, height: r.size },
            children: (0, i.jsx)(a.Avatar, {
              src: c,
              "aria-hidden": !0,
              size: n,
            }),
          }),
        });
      }
    },
    518560: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return f;
        },
      });
      var i = n(200651),
        a = n(192379),
        s = n(286379),
        l = n(481060),
        r = n(797614),
        c = n(626135),
        o = n(103879),
        d = n(451284),
        u = n(802429),
        m = n(846488),
        x = n(181211),
        h = n(811085),
        g = n(967254),
        v = n(981631),
        j = n(388032),
        N = n(974710);
      function f() {
        let t = (0, x.Z)(),
          e = (0, m.e)(),
          n = (0, d.P)(),
          f = (0, u.i)();
        return (a.useEffect(() => {
          o.yq();
        }, []),
        a.useEffect(() => {
          e &&
            (c.default.track(v.rMx.SAFETY_HUB_VIEWED, {
              account_standing: n.state,
            }),
            r.Z.increment({ name: s.V.SAFETY_HUB_VIEW }));
        }, [e]),
        t)
          ? (0, i.jsx)("div", { children: (0, i.jsx)(l.Spinner, {}) })
          : null != f
            ? (0, i.jsxs)(l.Notice, {
                color: l.NoticeColors.DANGER,
                className: N.nagbar,
                children: [
                  j.intl.string(j.t.TDRvqq),
                  (0, i.jsx)(l.NoticeButton, {
                    onClick: () => o.yq(),
                    children: j.intl.string(j.t.R1AN4O),
                  }),
                ],
              })
            : (0, i.jsxs)("div", {
                className: N.container,
                children: [(0, i.jsx)(h.Z, {}), (0, i.jsx)(g.N, {})],
              });
      }
    },
    967254: function (t, e, n) {
      n.d(e, {
        N: function () {
          return y;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        s = n(120356),
        l = n.n(s),
        r = n(442837),
        c = n(481060),
        o = n(259580),
        d = n(499033),
        u = n(626135),
        m = n(709054),
        x = n(219230),
        h = n(531441),
        g = n(236289),
        v = n(788080),
        j = n(467432),
        N = n(451284),
        f = n(613734),
        p = n(800530),
        S = n(981631),
        T = n(388032),
        I = n(849963);
      let E = (t) => {
          let { status: e, onClick: n, opened: a, count: s } = t;
          return (0, i.jsxs)(c.Clickable, {
            className: I.header,
            onClick: n,
            children: [
              (0, i.jsx)("div", {
                className: I.headerIconWrapper,
                children: (0, i.jsx)(c.WarningIcon, {
                  size: "md",
                  color:
                    "active" === e
                      ? c.tokens.colors.INTERACTIVE_ACTIVE
                      : c.tokens.colors.INTERACTIVE_MUTED,
                }),
              }),
              (0, i.jsxs)("div", {
                className: I.title,
                children: [
                  (0, i.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-normal",
                    children:
                      "active" === e
                        ? T.intl.formatToPlainString(T.t.IeV2oa, {
                            count: s.toString(),
                          })
                        : T.intl.formatToPlainString(T.t.fZAHBQ, {
                            count: s.toString(),
                          }),
                  }),
                  (0, i.jsx)(c.Heading, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                      "active" === e
                        ? T.intl.string(T.t.XJ2YVV)
                        : T.intl.string(T.t.SzGV0t),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: I.caret,
                children: (0, i.jsx)(o.Z, {
                  width: 18,
                  height: 18,
                  direction: a ? o.Z.Directions.UP : o.Z.Directions.DOWN,
                }),
              }),
            ],
          });
        },
        _ = () =>
          (0, i.jsxs)("div", {
            className: I.emptyState,
            children: [
              (0, i.jsxs)("div", {
                className: I.iconContainer,
                children: [
                  (0, i.jsx)("div", {
                    className: I.iconBackground,
                    children: (0, i.jsx)(c.TrophyIcon, {
                      size: "md",
                      color: "currentColor",
                      className: I.icon,
                    }),
                  }),
                  (0, i.jsx)(d.Z, { className: I.stars }),
                ],
              }),
              (0, i.jsx)(c.Heading, {
                variant: "heading-md/bold",
                className: I.emptyStateText,
                children: T.intl.string(T.t.reLFaW),
              }),
              (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                className: I.emptyStateSubtext,
                children: T.intl.string(T.t.ERdH1t),
              }),
            ],
          }),
        b = () =>
          (0, i.jsx)("div", {
            className: I.emptyState,
            children: (0, i.jsx)(c.Text, {
              variant: "text-xs/normal",
              className: I.emptyStateSubtext,
              children: T.intl.string(T.t.RV3AXV),
            }),
          }),
        C = (t) => {
          let { timestamp: e } = t;
          return (0, i.jsx)(c.Text, {
            variant: "text-xs/normal",
            className: I.timestamp,
            children: (0, v.XX)(e),
          });
        },
        k = () =>
          (0, i.jsx)(c.Text, {
            variant: "text-xs/bold",
            className: I.newBadge,
            children: T.intl.string(T.t.QKMRCw),
          }),
        D = (t) => {
          let { classification: e } = t,
            { id: s, description: r } = e,
            o = m.default.extractTimestamp(s),
            d = (0, j.e)(e),
            u = (0, x.B)("violations_container"),
            g = a.useMemo(() => {
              var t, n, a;
              let s = {
                description: r,
                descriptionHook: (t) =>
                  (0, i.jsx)(c.Text, {
                    tag: "span",
                    variant: "heading-lg/bold",
                    children: t,
                  }),
              };
              if (!(u && (0, v.FB)(e))) return T.intl.format(T.t.QY4g5u, s);
              return (null == e
                ? void 0
                : null === (t = e.guild_metadata) || void 0 === t
                  ? void 0
                  : t.member_type) === h.wO.OWNER
                ? T.intl.format(T.t.Lb0HVl, {
                    ...s,
                    guildName:
                      null == e
                        ? void 0
                        : null === (n = e.guild_metadata) || void 0 === n
                          ? void 0
                          : n.name,
                  })
                : T.intl.format(T.t.rmpEPD, {
                    guildName:
                      null == e
                        ? void 0
                        : null === (a = e.guild_metadata) || void 0 === a
                          ? void 0
                          : a.name,
                    classification_type: s.description,
                    classificationHook: s.descriptionHook,
                  });
            }, [e, r, u]);
          return (0, i.jsx)(
            c.Clickable,
            {
              onClick: () => {
                (0, c.openModalLazy)(async () => {
                  let { default: t } = await Promise.all([
                    n.e("72181"),
                    n.e("46097"),
                    n.e("25183"),
                    n.e("18831"),
                    n.e("56827"),
                  ]).then(n.bind(n, 41164));
                  return (e) =>
                    (0, i.jsx)(t, {
                      classificationId: s,
                      source: p.s.StandingTab,
                      ...e,
                    });
                });
              },
              className: l()(I.itemDetail, { [I.itemDetailNew]: d }),
              children: (0, i.jsxs)("div", {
                className: I.descriptionContainer,
                children: [
                  d ? (0, i.jsx)(k, {}) : (0, i.jsx)(C, { timestamp: o }),
                  (0, i.jsx)(c.Heading, {
                    variant: "heading-lg/normal",
                    children: g,
                  }),
                ],
              }),
            },
            s,
          );
        },
        A = (t) => {
          let { status: e, classifications: n } = t,
            [s, l] = a.useState(!1),
            [o, d] = a.useState(3),
            m = (0, N.P)(),
            x = (0, r.e7)([g.Z], () => g.Z.getIsDsaEligible()),
            h = a.useMemo(() => n.slice(0, o), [n, o]);
          a.useEffect(() => {
            s &&
              u.default.track(S.rMx.SAFETY_HUB_ACTION, {
                action: p.n0.ViewViolationsDropdown,
                account_standing: m.state,
                classification_ids: h.map((t) => Number(t.id)),
                source: p.s.StandingTab,
                is_violative_content_shown: !1,
                is_dsa_eligible: x,
              });
          }, [s, m.state, h, x]);
          let v = n.length - h.length > 3 ? 3 : n.length - h.length;
          return (0, i.jsxs)("div", {
            className: I.dropdown,
            children: [
              (0, i.jsx)(E, {
                status: e,
                onClick: () => l((t) => !t),
                opened: s,
                count: n.length,
              }),
              s &&
                (0, i.jsxs)("div", {
                  className: I.items,
                  children: [
                    (0, i.jsx)(c.TabBar.Separator, {
                      style: { height: "1px", width: "100%" },
                    }),
                    h.length > 0 &&
                      h.map((t) => (0, i.jsx)(D, { classification: t }, t.id)),
                    h.length < n.length &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(c.TabBar.Separator, {
                            style: { height: "1px", width: "100%" },
                          }),
                          (0, i.jsx)("button", {
                            className: I.paginationButton,
                            onClick: () => d((t) => t + v),
                            children: T.intl.format(T.t["9Ml56O"], {
                              nextPageSize: v,
                            }),
                          }),
                        ],
                      }),
                    0 === h.length && "active" === e && (0, i.jsx)(_, {}),
                    0 === h.length && "expired" === e && (0, i.jsx)(b, {}),
                  ],
                }),
            ],
          });
        },
        y = () => {
          let t = (0, f.y9)(),
            e = (0, f.KM)();
          return 0 === t.length && 0 === e.length
            ? null
            : (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(A, { status: "active", classifications: t }),
                  (0, i.jsx)(A, { status: "expired", classifications: e }),
                ],
              });
        };
    },
  },
]);
//# sourceMappingURL=e65a3fdaf91e3c44333d.js.map
