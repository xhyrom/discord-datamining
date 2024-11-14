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
      let r = (0, t(818083).B)({
        kind: "user",
        id: "2024-11_application_reporting_flow",
        label: "Apps In-App Reporting",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable application IAR reporting flow",
            config: { enabled: !0 },
          },
        ],
      });
      n.Z = r;
    },
    436267: function (e, n, t) {
      t.d(n, {
        O: function () {
          return l;
        },
        Z: function () {
          return i;
        },
      });
      var r = t(159277);
      function i(e) {
        return (
          r.t.XBOX_APPLICATION_ID === e ||
          r.M.PLAYSTATION_APPLICATION_IDS.has(e)
        );
      }
      function l(e) {
        return i(e);
      }
    },
    149418: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(789020);
      var r = t(630388),
        i = t(981631);
      function l(e) {
        return (
          null != e.flags && (0, r.yE)(e.flags, i.udG.SOCIAL_LAYER_INTEGRATION)
        );
      }
    },
    494620: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
        z: function () {
          return i;
        },
      });
      var r,
        i,
        l = t(200651);
      t(192379);
      var s = t(120356),
        a = t.n(s),
        o = t(481060),
        c = t(179840);
      ((r = i || (i = {})).INFO = "info"), (r.WARNING = "warning");
      let u = { info: c.info, warning: c.warning },
        d = { info: o.CircleInformationIcon, warning: o.CircleWarningIcon };
      function m(e) {
        let { children: n, className: t, look: r = "info" } = e,
          i = d[r];
        return (0, l.jsxs)("div", {
          className: a()(c.root, t, u[r]),
          children: [
            (0, l.jsx)(i, { className: c.icon, color: "currentColor" }),
            (0, l.jsx)(o.Text, {
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
          return Y;
        },
      }),
        t(653041),
        t(47120);
      var r = t(200651),
        i = t(192379),
        l = t(120356),
        s = t.n(l),
        a = t(658722),
        o = t.n(a),
        c = t(905837),
        u = t(243814),
        d = t(442837),
        m = t(921072),
        p = t(1561),
        x = t(481060),
        h = t(384275),
        f = t(230711),
        N = t(497321),
        I = t(468026),
        g = t(317381),
        T = t(513202),
        _ = t(979200),
        A = t(600164),
        j = t(726721),
        C = t(726521),
        S = t(713938),
        E = t(973616),
        v = t(881998),
        P = t(246946),
        L = t(768581),
        Z = t(585483),
        k = t(49012),
        O = t(709054),
        y = t(706454),
        F = t(210887),
        D = t(436267),
        w = t(149418),
        R = t(494620),
        b = t(981631),
        B = t(388032),
        H = t(822352),
        M = t(113207);
      let U = d.ZP.connectStores([F.Z], () => ({ theme: F.Z.theme }))(
        x.EmptyState,
      );
      function G(e) {
        let { application: n } = e;
        return (0, r.jsxs)("div", {
          className: H.twoWayWarning,
          children: [
            (0, r.jsx)(x.CircleInformationIcon, {
              size: "md",
              color: "currentColor",
              className: H.twoWayWarningIcon,
            }),
            (0, r.jsx)(x.Text, {
              color: "text-normal",
              variant: "text-sm/medium",
              children: B.intl.format(B.t.jUhnwc, {
                applicationName: n.name,
                onConnectionPress: () =>
                  f.Z.setSection(b.jXE.SETTINGS_CONNECTIONS),
              }),
            }),
          ],
        });
      }
      let z = (e) => {
          let { disclosure: n } = e;
          return i.useMemo(() => {
            switch (n) {
              case m.u$.IP_LOCATION:
                return (0, r.jsx)(x.GlobeEarthIcon, {
                  size: "md",
                  color: "currentColor",
                  className: H.disclosureIcon,
                });
              case m.u$.DISPLAYS_ADVERTISEMENTS:
                return (0, r.jsx)(x.EmbedIcon, { className: H.disclosureIcon });
              default:
                return (0, r.jsx)(x.CircleInformationIcon, {
                  className: H.disclosureIcon,
                });
            }
          }, [n]);
        },
        W = (e) => {
          let {
              scopes: n,
              application: t,
              onDelete: l,
              disclosures: a,
              locale: o,
              id: c,
            } = e,
            d = i.useMemo(() => E.Z.createFromServer(t), [t]),
            m = j.Z.useExperiment(
              { location: "Authorized Applications" },
              { autoTrackExposure: !1 },
            ).enabled,
            h = () => {
              let e = B.intl.formatToPlainString(B.t.QWGvxM, {
                applicationName: t.name,
              });
              return (
                (0, w.Z)(t) &&
                  (e = (0, r.jsxs)(r.Fragment, {
                    children: [
                      e,
                      (0, r.jsx)(R.Z, {
                        look: R.z.WARNING,
                        className: H.infoBox,
                        children: B.intl.string(B.t.LY35Z2),
                      }),
                    ],
                  })),
                (0, D.Z)(t.id) &&
                  (e = (0, r.jsxs)(r.Fragment, {
                    children: [
                      e,
                      (0, r.jsx)(R.Z, {
                        className: H.infoBox,
                        children: B.intl.format(B.t.KRnERk, {
                          applicationName: t.name,
                        }),
                      }),
                    ],
                  })),
                (0, x.openModal)((n) =>
                  (0, r.jsx)(I.default, {
                    title: B.intl.string(B.t.DT39Aw),
                    body: e,
                    confirmText: B.intl.string(B.t.xUqheH),
                    cancelText: B.intl.string(B.t["ETE/oK"]),
                    onConfirm: l,
                    ...n,
                  }),
                )
              );
            },
            f = () => {
              (0, C.uu)(d);
            },
            N = () => {
              null != t.terms_of_service_url &&
                (0, k.q)({ href: t.terms_of_service_url, shouldConfirm: !0 });
            },
            g = () => {
              null != t.privacy_policy_url &&
                (0, k.q)({ href: t.privacy_policy_url, shouldConfirm: !0 });
            },
            T = (0, D.O)(t.id);
          return (0, r.jsx)(x.Card, {
            className: s()(H.authedApp, M.marginBottom8),
            outline: !0,
            children: (0, r.jsxs)(x.HeadingLevel, {
              component: (() => {
                let e = L.ZP.getApplicationIconURL({ id: t.id, icon: t.icon }),
                  n =
                    null != e
                      ? (0, r.jsx)(A.Z.Child, {
                          className: H.appAvatar,
                          grow: 0,
                          children: (0, r.jsx)("img", { src: e, alt: "" }),
                        })
                      : null,
                  i = new Date(
                    O.default.extractTimestamp(c),
                  ).toLocaleDateString(o);
                return (0, r.jsxs)("div", {
                  className: s()(H.header, M.marginBottom20),
                  children: [
                    n,
                    (0, r.jsxs)("div", {
                      className: H.headerTextContainer,
                      children: [
                        (0, r.jsx)(x.Heading, {
                          variant: "text-sm/semibold",
                          className: H.headerText,
                          children: t.name,
                        }),
                        (0, r.jsx)(x.Text, {
                          variant: "text-xs/normal",
                          color: "text-normal",
                          children: B.intl.format(B.t.yOApCA, { date: i }),
                        }),
                      ],
                    }),
                    m
                      ? (0, r.jsx)(x.Button, {
                          color: x.ButtonColors.TRANSPARENT,
                          look: x.ButtonLooks.LINK,
                          size: x.ButtonSizes.SMALL,
                          className: H.reportButton,
                          onClick: f,
                          children: B.intl.string(B.t["+78Pfn"]),
                        })
                      : null,
                    (0, r.jsx)(x.Button, {
                      color: x.ButtonColors.RED,
                      look: x.ButtonLooks.OUTLINED,
                      size: x.ButtonSizes.SMALL,
                      onClick: h,
                      children: B.intl.string(B.t.xUqheH),
                    }),
                  ],
                });
              })(),
              children: [
                (() => {
                  if (null != t.description && "" !== t.description)
                    return (0, r.jsx)(x.FormItem, {
                      faded: !0,
                      title: B.intl.string(B.t.GfRGra),
                      children: (0, r.jsx)(x.FormText, {
                        children: t.description,
                      }),
                    });
                })(),
                (() => {
                  if (
                    null != t.terms_of_service_url ||
                    null != t.privacy_policy_url
                  )
                    return (0, r.jsxs)("div", {
                      className: H.tosPrivacy,
                      children: [
                        null != t.terms_of_service_url
                          ? (0, r.jsxs)(p.P, {
                              tag: "a",
                              onClick: N,
                              className: H.tos,
                              children: [
                                (0, r.jsx)(x.FormText, {
                                  className: H.link,
                                  children: B.intl.string(B.t["lx+GeX"]),
                                }),
                                (0, r.jsx)(x.LinkExternalSmallIcon, {
                                  className: H.externalLinkIcon,
                                  color: "var(--text-link)",
                                }),
                              ],
                            })
                          : null,
                        null != t.privacy_policy_url
                          ? (0, r.jsxs)("div", {
                              className: H.privacy,
                              children: [
                                null != t.terms_of_service_url
                                  ? (0, r.jsx)("div", { className: H.divider })
                                  : null,
                                (0, r.jsxs)(p.P, {
                                  tag: "a",
                                  onClick: g,
                                  className: H.privacy,
                                  children: [
                                    (0, r.jsx)(x.FormText, {
                                      className: H.link,
                                      children: B.intl.string(B.t.okSwq6),
                                    }),
                                    (0, r.jsx)(x.LinkExternalSmallIcon, {
                                      className: H.externalLinkIcon,
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
                    e.push(...(0, S.CI)(t, n)),
                      t === u.x.APPLICATIONS_COMMANDS &&
                        e.push(B.intl.string(B.t.Ls2XRk));
                  if (e.length > 0 || (null != a && a.length > 0))
                    return (0, r.jsx)(x.FormItem, {
                      faded: !0,
                      title: B.intl.string(B.t.xrmhRU),
                      className: M.marginTop20,
                      children: (0, r.jsxs)("ul", {
                        children: [
                          e.map((e, n) =>
                            (0, r.jsxs)(
                              "li",
                              {
                                className: s()(H.permission, M.marginTop8),
                                children: [
                                  (0, r.jsx)("i", {
                                    className: H.permissionCheckmark,
                                  }),
                                  (0, r.jsx)(x.FormText, { children: e }),
                                ],
                              },
                              n,
                            ),
                          ),
                          null == a
                            ? void 0
                            : a.map((n, t) => {
                                let i = (0, _.PM)(n);
                                return null != i
                                  ? (0, r.jsxs)(
                                      "li",
                                      {
                                        className: s()(
                                          H.permission,
                                          M.marginTop8,
                                        ),
                                        children: [
                                          (0, r.jsx)(z, { disclosure: n }),
                                          (0, r.jsx)(x.FormText, {
                                            children: i,
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
                T && (0, r.jsx)(G, { application: t }),
              ],
            }),
          });
        },
        Y = (0, c.Ue)(() => ({ searchQuery: "" }));
      n.Z = () => {
        let e = (0, d.e7)([P.Z], () => P.Z.hidePersonalInformation),
          n = (0, d.e7)([v.Z], () => v.Z.getApps()),
          l = (0, d.e7)([y.default], () => y.default.locale),
          s = (0, d.e7)([g.ZP], () => g.ZP.getSelfEmbeddedActivities());
        i.useEffect(() => {
          h.Z.fetch();
        }, []),
          i.useEffect(
            () => () => {
              Y.setState({ searchQuery: "" });
            },
            [],
          );
        let a = (e) => {
            let { id: n, application: t } = e;
            h.Z.delete(n),
              Z.S.safeDispatch(
                b.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION,
                { applicationId: t.id },
              );
            let r = s.get(t.id);
            null != r &&
              T.Z.leaveActivity({
                channelId: r.channelId,
                applicationId: t.id,
                showFeedback: !1,
              });
          },
          c = Y((e) => e.searchQuery),
          u = (e) => Y.setState({ searchQuery: e }),
          m = (e) => {
            u(e);
          },
          p = () => {
            u("");
          },
          f = () =>
            (0, r.jsx)("div", {
              className: H.searchContainer,
              children: (0, r.jsx)(x.SearchBar, {
                size: x.SearchBar.Sizes.MEDIUM,
                query: c,
                onChange: m,
                onClear: p,
                placeholder: B.intl.string(B.t["5prvKS"]),
                "aria-label": B.intl.string(B.t["5prvKS"]),
              }),
            }),
          I = (e, n) =>
            (0, r.jsxs)(U, {
              className: H.__invalid_marginTop20,
              children: [
                (0, r.jsx)(x.EmptyStateImage, {
                  darkSrc: t(701972),
                  lightSrc: t(818658),
                  width: 380,
                  height: 282,
                }),
                (0, r.jsx)(x.EmptyStateText, { note: e, children: n }),
              ],
            }),
          _ = i.useMemo(() => {
            let e = c.trim().toLowerCase();
            return "" === e || null == n
              ? n
              : n.length < 100
                ? n.filter((n) => o()(e, n.application.name.toLowerCase()))
                : n.filter((n) => n.application.name.toLowerCase().includes(e));
          }, [n, c]);
        return e
          ? (0, r.jsx)(N.Z, {})
          : (0, r.jsx)(x.FormSection, {
              tag: x.FormTitleTags.H1,
              title: B.intl.string(B.t["f6kk+v"]),
              children: (0, r.jsx)(x.HeadingLevel, {
                component: (0, r.jsx)(x.FormNotice, {
                  className: M.marginBottom40,
                  type: x.CardTypes.PRIMARY,
                  title: B.intl.string(B.t.HU3RFx),
                  body: B.intl.string(B.t.Nu5Yi4),
                }),
                children:
                  null == n || null == _
                    ? (0, r.jsx)(x.Spinner, {
                        className: M.marginTop20,
                        type: x.Spinner.Type.SPINNING_CIRCLE,
                      })
                    : 0 === n.length
                      ? I(
                          B.intl.string(B.t.CpPv5u),
                          B.intl.string(B.t["E+SM6e"]),
                        )
                      : 0 === _.length
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [f(), I(null, B.intl.string(B.t.EVWFNj))],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              f(),
                              _.sort((e, n) => Number(n.id) - Number(e.id)).map(
                                (e) =>
                                  (0, r.jsx)(
                                    W,
                                    { locale: l, onDelete: () => a(e), ...e },
                                    e.id,
                                  ),
                              ),
                            ],
                          }),
              }),
            });
      };
    },
    881998: function (e, n, t) {
      t.d(n, {
        M: function () {
          return a;
        },
      });
      var r,
        i,
        l,
        s,
        a,
        o,
        c = t(442837),
        u = t(570140),
        d = t(592125),
        m = t(757266),
        p = t(375954);
      ((r = a || (a = {})).NOT_FETCHED = "NOT_FETCHED"),
        (r.FETCHING = "FETCHING"),
        (r.FETCHED = "FETCHED");
      let x = null,
        h = "NOT_FETCHED";
      class f extends (o = c.ZP.Store) {
        initialize() {
          this.waitFor(d.Z, m.Z, p.Z);
        }
        getApps() {
          return x;
        }
        getFetchState() {
          return h;
        }
      }
      (s = "AuthorizedAppsStore"),
        (l = "displayName") in (i = f)
          ? Object.defineProperty(i, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = s),
        (n.Z = new f(u.Z, {
          USER_AUTHORIZED_APPS_REQUEST: function () {
            h = "FETCHING";
          },
          USER_AUTHORIZED_APPS_UPDATE: function (e) {
            (h = "FETCHED"), (x = e.apps);
          },
        }));
    },
    159277: function (e, n, t) {
      var r, i;
      t.d(n, {
        M: function () {
          return l;
        },
        t: function () {
          return r;
        },
      }),
        t(47120),
        ((i = r || (r = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (i.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (i.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let l = {
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
//# sourceMappingURL=5238c1bdd53c0ebe3bb8.js.map
