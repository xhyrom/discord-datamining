"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51269"],
  {
    701972: function (e) {
      e.exports = "/assets/71792026f672985a033d.svg";
    },
    818658: function (e) {
      e.exports = "/assets/4dae9f6eefe1407c3cec.svg";
    },
    546826: function (e) {
      e.exports = "/assets/ce7ed73a6aeb1b990d58.svg";
    },
    726721: function (e, n, t) {
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2024-11_application_reporting_flow",
        label: "Apps In-App Reporting",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable application IAR reporting flow (US)",
            config: { enabled: !0 },
          },
          {
            id: 2,
            label: "Enable application IAR reporting flow (EU)",
            config: { enabled: !0 },
          },
        ],
      });
      n.Z = i;
    },
    436267: function (e, n, t) {
      t.d(n, {
        O: function () {
          return r;
        },
        Z: function () {
          return l;
        },
      });
      var i = t(159277);
      function l(e) {
        return (
          i.t.XBOX_APPLICATION_ID === e ||
          i.M.PLAYSTATION_APPLICATION_IDS.has(e)
        );
      }
      function r(e) {
        return l(e);
      }
    },
    149418: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(789020);
      var i = t(630388),
        l = t(981631);
      function r(e) {
        return (
          null != e.flags && (0, i.yE)(e.flags, l.udG.SOCIAL_LAYER_INTEGRATION)
        );
      }
    },
    494620: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
        z: function () {
          return l;
        },
      });
      var i,
        l,
        r = t(200651);
      t(192379);
      var a = t(120356),
        s = t.n(a),
        o = t(481060),
        c = t(509427);
      ((i = l || (l = {})).INFO = "info"), (i.WARNING = "warning");
      let d = { info: c.info, warning: c.warning },
        u = { info: o.CircleInformationIcon, warning: o.CircleWarningIcon };
      function m(e) {
        let { children: n, className: t, look: i = "info" } = e,
          l = u[i];
        return (0, r.jsxs)("div", {
          className: s()(c.root, t, d[i]),
          children: [
            (0, r.jsx)(l, { className: c.icon, color: "currentColor" }),
            (0, r.jsx)(o.Text, {
              className: c.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: n,
            }),
          ],
        });
      }
    },
    795594: function (e, n, t) {
      t.d(n, {
        J: function () {
          return q;
        },
      }),
        t(653041),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(658722),
        o = t.n(s),
        c = t(15729),
        d = t(243814),
        u = t(442837),
        m = t(921072),
        p = t(1561),
        x = t(481060),
        h = t(384275),
        f = t(230711),
        I = t(497321),
        g = t(468026),
        N = t(317381),
        j = t(513202),
        _ = t(979200),
        A = t(600164),
        T = t(726721),
        C = t(726521),
        v = t(713938),
        S = t(973616),
        L = t(881998),
        P = t(592125),
        E = t(944486),
        k = t(246946),
        Z = t(768581),
        y = t(585483),
        O = t(49012),
        w = t(709054),
        b = t(706454),
        R = t(210887),
        B = t(436267),
        D = t(149418),
        F = t(494620),
        M = t(981631),
        G = t(388032),
        U = t(167606),
        z = t(275477);
      let H = u.ZP.connectStores([R.Z], () => ({ theme: R.Z.theme }))(
        x.EmptyState,
      );
      function W(e) {
        let { application: n } = e;
        return (0, i.jsxs)("div", {
          className: U.twoWayWarning,
          children: [
            (0, i.jsx)(x.CircleInformationIcon, {
              size: "md",
              color: "currentColor",
              className: U.twoWayWarningIcon,
            }),
            (0, i.jsx)(x.Text, {
              color: "text-normal",
              variant: "text-sm/medium",
              children: G.intl.format(G.t.jUhnwc, {
                applicationName: n.name,
                onConnectionPress: () =>
                  f.Z.setSection(M.jXE.SETTINGS_CONNECTIONS),
              }),
            }),
          ],
        });
      }
      let Y = (e) => {
          let { disclosure: n } = e;
          return l.useMemo(() => {
            switch (n) {
              case m.u$.IP_LOCATION:
                return (0, i.jsx)(x.GlobeEarthIcon, {
                  size: "md",
                  color: "currentColor",
                  className: U.disclosureIcon,
                });
              case m.u$.DISPLAYS_ADVERTISEMENTS:
                return (0, i.jsx)(x.EmbedIcon, { className: U.disclosureIcon });
              default:
                return (0, i.jsx)(x.CircleInformationIcon, {
                  className: U.disclosureIcon,
                });
            }
          }, [n]);
        },
        X = (e) => {
          let {
              scopes: n,
              application: t,
              selectedChannelId: r,
              selectedGuildId: s,
              onDelete: o,
              disclosures: c,
              locale: u,
              id: m,
            } = e,
            h = l.useMemo(() => S.ZP.createFromServer(t), [t]),
            f = T.Z.useExperiment(
              { location: "Authorized Applications" },
              { autoTrackExposure: !0 },
            ).enabled,
            I = () => {
              let e = G.intl.formatToPlainString(G.t.QWGvxM, {
                applicationName: t.name,
              });
              return (
                (0, D.Z)(t) &&
                  (e = (0, i.jsxs)(i.Fragment, {
                    children: [
                      e,
                      (0, i.jsx)(F.Z, {
                        look: F.z.WARNING,
                        className: U.infoBox,
                        children: G.intl.string(G.t.LY35Z2),
                      }),
                    ],
                  })),
                (0, B.Z)(t.id) &&
                  (e = (0, i.jsxs)(i.Fragment, {
                    children: [
                      e,
                      (0, i.jsx)(F.Z, {
                        className: U.infoBox,
                        children: G.intl.format(G.t.KRnERk, {
                          applicationName: t.name,
                        }),
                      }),
                    ],
                  })),
                (0, x.openModal)((n) =>
                  (0, i.jsx)(g.default, {
                    title: G.intl.string(G.t.DT39Aw),
                    body: e,
                    confirmText: G.intl.string(G.t.xUqheH),
                    cancelText: G.intl.string(G.t["ETE/oK"]),
                    onConfirm: o,
                    ...n,
                  }),
                )
              );
            },
            N = () => {
              (0, C.uu)({
                application: h,
                entrypoint: "authorized_apps_settings",
                contextualGuildId: s,
                contextualChannelId: r,
              });
            },
            j = () => {
              null != t.terms_of_service_url &&
                (0, O.q)({ href: t.terms_of_service_url, shouldConfirm: !0 });
            },
            L = () => {
              null != t.privacy_policy_url &&
                (0, O.q)({ href: t.privacy_policy_url, shouldConfirm: !0 });
            },
            P = (0, B.O)(t.id);
          return (0, i.jsx)(x.Card, {
            className: a()(U.authedApp, z.marginBottom8),
            outline: !0,
            children: (0, i.jsxs)(x.HeadingLevel, {
              component: (() => {
                let e = Z.ZP.getApplicationIconURL({ id: t.id, icon: t.icon }),
                  n =
                    null != e
                      ? (0, i.jsx)(A.Z.Child, {
                          className: U.appAvatar,
                          grow: 0,
                          children: (0, i.jsx)("img", { src: e, alt: "" }),
                        })
                      : null,
                  l = new Date(
                    w.default.extractTimestamp(m),
                  ).toLocaleDateString(u);
                return (0, i.jsxs)("div", {
                  className: a()(U.header, z.marginBottom20),
                  children: [
                    n,
                    (0, i.jsxs)("div", {
                      className: U.headerTextContainer,
                      children: [
                        (0, i.jsx)(x.Heading, {
                          variant: "text-sm/semibold",
                          className: U.headerText,
                          children: t.name,
                        }),
                        (0, i.jsx)(x.Text, {
                          variant: "text-xs/normal",
                          color: "text-normal",
                          children: G.intl.format(G.t.yOApCA, { date: l }),
                        }),
                      ],
                    }),
                    f
                      ? (0, i.jsx)(x.Button, {
                          color: x.ButtonColors.TRANSPARENT,
                          look: x.ButtonLooks.LINK,
                          size: x.ButtonSizes.SMALL,
                          className: U.reportButton,
                          onClick: N,
                          children: G.intl.string(G.t["+78Pfn"]),
                        })
                      : null,
                    (0, i.jsx)(x.Button, {
                      color: x.ButtonColors.RED,
                      look: x.ButtonLooks.OUTLINED,
                      size: x.ButtonSizes.SMALL,
                      onClick: I,
                      children: G.intl.string(G.t.xUqheH),
                    }),
                  ],
                });
              })(),
              children: [
                (() => {
                  if (null != t.description && "" !== t.description)
                    return (0, i.jsx)(x.FormItem, {
                      faded: !0,
                      title: G.intl.string(G.t.GfRGra),
                      children: (0, i.jsx)(x.FormText, {
                        children: t.description,
                      }),
                    });
                })(),
                (() => {
                  if (
                    null != t.terms_of_service_url ||
                    null != t.privacy_policy_url
                  )
                    return (0, i.jsxs)("div", {
                      className: U.tosPrivacy,
                      children: [
                        null != t.terms_of_service_url
                          ? (0, i.jsxs)(p.P, {
                              tag: "a",
                              onClick: j,
                              className: U.tos,
                              children: [
                                (0, i.jsx)(x.FormText, {
                                  className: U.link,
                                  children: G.intl.string(G.t["lx+GeX"]),
                                }),
                                (0, i.jsx)(x.LinkExternalSmallIcon, {
                                  className: U.externalLinkIcon,
                                  color: "var(--text-link)",
                                }),
                              ],
                            })
                          : null,
                        null != t.privacy_policy_url
                          ? (0, i.jsxs)("div", {
                              className: U.privacy,
                              children: [
                                null != t.terms_of_service_url
                                  ? (0, i.jsx)("div", { className: U.divider })
                                  : null,
                                (0, i.jsxs)(p.P, {
                                  tag: "a",
                                  onClick: L,
                                  className: U.privacy,
                                  children: [
                                    (0, i.jsx)(x.FormText, {
                                      className: U.link,
                                      children: G.intl.string(G.t.okSwq6),
                                    }),
                                    (0, i.jsx)(x.LinkExternalSmallIcon, {
                                      className: U.externalLinkIcon,
                                      color: "var(--text-link)",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : null,
                      ],
                    });
                })(),
                (() => {
                  let e = [];
                  for (let t of n)
                    e.push(...(0, v.CI)(t, n)),
                      t === d.x.APPLICATIONS_COMMANDS &&
                        e.push(G.intl.string(G.t.Ls2XRk));
                  if (e.length > 0 || (null != c && c.length > 0))
                    return (0, i.jsx)(x.FormItem, {
                      faded: !0,
                      title: G.intl.string(G.t.xrmhRU),
                      className: z.marginTop20,
                      children: (0, i.jsxs)("ul", {
                        children: [
                          e.map((e, n) =>
                            (0, i.jsxs)(
                              "li",
                              {
                                className: a()(U.permission, z.marginTop8),
                                children: [
                                  (0, i.jsx)("i", {
                                    className: U.permissionCheckmark,
                                  }),
                                  (0, i.jsx)(x.FormText, { children: e }),
                                ],
                              },
                              n,
                            ),
                          ),
                          null == c
                            ? void 0
                            : c.map((n, t) => {
                                let l = (0, _.PM)(n);
                                return null != l
                                  ? (0, i.jsxs)(
                                      "li",
                                      {
                                        className: a()(
                                          U.permission,
                                          z.marginTop8,
                                        ),
                                        children: [
                                          (0, i.jsx)(Y, { disclosure: n }),
                                          (0, i.jsx)(x.FormText, {
                                            children: l,
                                          }),
                                        ],
                                      },
                                      t + e.length,
                                    )
                                  : null;
                              }),
                        ],
                      }),
                    });
                })(),
                P && (0, i.jsx)(W, { application: t }),
              ],
            }),
          });
        },
        q = (0, c.U)(() => ({ searchQuery: "" }));
      n.Z = () => {
        let e = (0, u.e7)([k.Z], () => k.Z.hidePersonalInformation),
          n = (0, u.e7)([L.Z], () => L.Z.getApps()),
          r = (0, u.e7)([b.default], () => b.default.locale),
          a = (0, u.e7)([N.ZP], () => N.ZP.getSelfEmbeddedActivities()),
          s = (0, u.e7)([P.Z, E.Z], () => P.Z.getChannel(E.Z.getChannelId())),
          c = null == s ? void 0 : s.getGuildId();
        l.useEffect(() => {
          h.Z.fetch();
        }, []),
          l.useEffect(
            () => () => {
              q.setState({ searchQuery: "" });
            },
            [],
          );
        let d = (e) => {
            let { id: n, application: t } = e;
            h.Z.delete(n),
              y.S.safeDispatch(
                M.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION,
                { applicationId: t.id },
              );
            let i = a.get(t.id);
            null != i &&
              j.Z.leaveActivity({
                location: i.location,
                applicationId: t.id,
                showFeedback: !1,
              });
          },
          m = q((e) => e.searchQuery),
          p = (e) => q.setState({ searchQuery: e }),
          f = (e) => {
            p(e);
          },
          g = () => {
            p("");
          },
          _ = () =>
            (0, i.jsx)("div", {
              className: U.searchContainer,
              children: (0, i.jsx)(x.SearchBar, {
                size: x.SearchBar.Sizes.MEDIUM,
                query: m,
                onChange: f,
                onClear: g,
                placeholder: G.intl.string(G.t["5prvKS"]),
                "aria-label": G.intl.string(G.t["5prvKS"]),
              }),
            }),
          A = (e, n) =>
            (0, i.jsxs)(H, {
              className: U.__invalid_marginTop20,
              children: [
                (0, i.jsx)(x.EmptyStateImage, {
                  darkSrc: t(701972),
                  lightSrc: t(818658),
                  width: 380,
                  height: 282,
                }),
                (0, i.jsx)(x.EmptyStateText, { note: e, children: n }),
              ],
            }),
          T = l.useMemo(() => {
            let e = m.trim().toLowerCase();
            return "" === e || null == n
              ? n
              : n.length < 100
                ? n.filter((n) => o()(e, n.application.name.toLowerCase()))
                : n.filter((n) => n.application.name.toLowerCase().includes(e));
          }, [n, m]);
        return e
          ? (0, i.jsx)(I.Z, {})
          : (0, i.jsx)(x.FormSection, {
              tag: x.FormTitleTags.H1,
              title: G.intl.string(G.t["f6kk+v"]),
              children: (0, i.jsx)(x.HeadingLevel, {
                component: (0, i.jsx)(x.FormNotice, {
                  className: z.marginBottom40,
                  type: x.CardTypes.PRIMARY,
                  title: G.intl.string(G.t.HU3RFx),
                  body: G.intl.string(G.t.Nu5Yi4),
                }),
                children:
                  null == n || null == T
                    ? (0, i.jsx)(x.Spinner, {
                        className: z.marginTop20,
                        type: x.Spinner.Type.SPINNING_CIRCLE,
                      })
                    : 0 === n.length
                      ? A(
                          G.intl.string(G.t.CpPv5u),
                          G.intl.string(G.t["E+SM6e"]),
                        )
                      : 0 === T.length
                        ? (0, i.jsxs)(i.Fragment, {
                            children: [_(), A(null, G.intl.string(G.t.EVWFNj))],
                          })
                        : (0, i.jsxs)(i.Fragment, {
                            children: [
                              _(),
                              T.sort((e, n) => Number(n.id) - Number(e.id)).map(
                                (e) =>
                                  (0, i.jsx)(
                                    X,
                                    {
                                      locale: r,
                                      onDelete: () => d(e),
                                      selectedChannelId:
                                        null == s ? void 0 : s.id,
                                      selectedGuildId: null != c ? c : void 0,
                                      ...e,
                                    },
                                    e.id,
                                  ),
                              ),
                            ],
                          }),
              }),
            });
      };
    },
    159277: function (e, n, t) {
      var i, l;
      t.d(n, {
        M: function () {
          return r;
        },
        t: function () {
          return i;
        },
      }),
        t(47120),
        ((l = i || (i = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (l.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (l.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let r = {
        PLAYSTATION_APPLICATION_IDS: new Set([
          "984193235868065795",
          "1008890872156405890",
        ]),
        ALL: new Set([
          "622174530214821906",
          "984193235868065795",
          "1008890872156405890",
        ]),
      };
    },
  },
]);
//# sourceMappingURL=a782a4bd593c384a8c54.js.map
