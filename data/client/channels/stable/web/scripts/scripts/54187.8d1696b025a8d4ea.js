"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54187"],
  {
    432222(e, i, a) {
      a.d(i, { A: () => j, w: () => E });
      var t = a(64700),
        n = a(989349),
        l = a.n(n),
        s = a(17928),
        c = a(691540),
        r = a(857250),
        o = a(97483),
        p = a(720149),
        d = a(976860),
        u = a(74114),
        m = a(994500),
        f = a(58703),
        h = a(935208),
        g = a(330001),
        I = a(652215),
        x = a(381941),
        A = a(985018);
      let E = "749054660769218631";
      function j(e, i) {
        let [a, n] = t.useState(!1),
          j = t.useCallback(async () => {
            if (!a) {
              n(!0),
                (0, g.W)({ channelId: e.id, source: "DM Channel" }),
                (0, d.pX)(I.BVt.CHANNEL(I.ME, e.id));
              try {
                await p.A.sendStickers(e.id, [E], "", {
                  location: x.Hx.SEND_WAVE,
                });
              } catch (e) {
                e.ok ||
                  429 !== e.status ||
                  (0, c.P0)((0, r.o)(A.intl.string(A.t.Whhv4w), o.Ck.FAILURE));
              }
              n(!1);
            }
          }, [e.id, a]),
          v =
            e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
          w = v ? e.getRecipientId() : null,
          C = (0, s.bG)([m.A], () => null != w && m.A.isFriend(w)),
          N = (0, s.bG)([m.A], () => null != w && m.A.isIgnored(w)),
          R = h.default.extractTimestamp(e.id),
          b = (0, f.v0)(l()(), l()(R), 18144e5),
          P = (0, u.l)(e.id);
        return {
          waveShouldShow: v && C && !N && null == i && b && null == P,
          wavePressed: j,
        };
      }
    },
    349419(e, i, a) {
      a.d(i, { A: () => H }), a(321073);
      var t = a(627968),
        n = a(64700),
        l = a(435428),
        s = a(598748),
        c = a(17928),
        r = a(688810),
        o = a(549699),
        p = a(29496),
        d = a(369374),
        u = a(850046),
        m = a(188951),
        f = a(429913),
        h = a(201718),
        g = a(773669),
        I = a(403362),
        x = a(183555),
        A = a(633075),
        E = a(289173),
        j = a(80330),
        v = a(503698),
        w = a.n(v),
        C = a(331322),
        N = a(834730),
        R = a(890856),
        b = a(123292),
        P = a(619517),
        _ = a(946356),
        M = a(985018),
        y = a(646997);
      function k(e) {
        let { applicationName: i, applicationIcon: a } = e;
        return (0, t.jsxs)(C.B, {
          direction: "horizontal",
          gap: 4,
          children: [
            null != a
              ? (0, t.jsx)(P.Ay, {
                  width: 16,
                  height: 16,
                  src: a,
                  className: y.In,
                })
              : (0, t.jsx)("div", { className: y.Fi }),
            (0, t.jsx)(N.E, { variant: "text-xs/medium", children: i }),
          ],
        });
      }
      function S(e) {
        let { trackUserProfileAction: i } = (0, x.NJ)(),
          a = n.useRef(!1);
        n.useEffect(() => {
          a.current ||
            (i({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }),
            (a.current = !0));
        }, [i, e]);
      }
      function D(e) {
        let { previewData: i, className: a, onClick: n } = e,
          { trackUserProfileAction: l } = (0, x.NJ)();
        return (
          S(i.application.id),
          (0, t.jsx)(R.s, {
            onClick: () => {
              l({
                action: "PRESS_APPLICATION_WIDGET_PREVIEW",
                applicationId: i.application.id,
              }),
                n?.();
            },
            "aria-label": i.application.name,
            children: (0, t.jsxs)(_.A.Overlay, {
              className: w()(y.kL, a),
              children: [
                (0, t.jsxs)(C.B, {
                  gap: 8,
                  padding: 8,
                  className: y.Qs,
                  children: [
                    (0, t.jsx)(k, {
                      applicationName: i.application.name,
                      applicationIcon: i.application.icon,
                    }),
                    (0, t.jsxs)("div", {
                      className: y.P_,
                      children: [
                        (0, t.jsxs)(N.E, {
                          tag: "div",
                          variant: "heading-sm/semibold",
                          lineClamp: 2,
                          children: [
                            i.previewText,
                            null != i.previewIcon &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  " ",
                                  (0, t.jsx)("div", {
                                    className: y.mP,
                                    children: (0, t.jsx)(P.Ay, {
                                      src: i.previewIcon.proxyUrl,
                                      width: i.previewIcon.width,
                                      height: i.previewIcon.height,
                                      responsive: !0,
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, t.jsx)(b.Q, {
                          textVariant: "text-xs/normal",
                          text: M.intl.string(M.t.qI8ZP6),
                          variant: "secondary",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: y.Pq,
                  children: (0, t.jsx)(P.Ay, {
                    src: i.previewImage.proxyUrl,
                    width: i.previewImage.width,
                    height: i.previewImage.height,
                    responsive: !0,
                    className: y.oz,
                  }),
                }),
              ],
            }),
          })
        );
      }
      function W(e) {
        let { application: i, rendererProps: a, className: n, onClick: c } = e,
          { trackUserProfileAction: r } = (0, x.NJ)(),
          o = a.surfaceConfigs[s.m.MINI_PROFILE],
          p = i.id;
        return (S(p), null == o)
          ? null
          : (0, t.jsx)(R.s, {
              onClick: () => {
                r({
                  action: "PRESS_APPLICATION_WIDGET_PREVIEW",
                  applicationId: p,
                }),
                  c?.();
              },
              "aria-label": i.name,
              children: (0, t.jsx)(_.A.Overlay, {
                className: w()(y.iW, n),
                children: (0, t.jsx)(l.kH, {
                  ...a,
                  surface: s.m.MINI_PROFILE,
                  surfaceConfig: o,
                  header: (0, t.jsx)(k, {
                    applicationName: i.name,
                    applicationIcon: i.getIconURL(16),
                  }),
                }),
              }),
            });
      }
      let G = function (e) {
        return "v2" === e.type
          ? (0, t.jsx)(W, { ...e })
          : (0, t.jsx)(D, { ...e });
      };
      var O = a(939249),
        T = a(780907),
        V = a(760751),
        L = a(486020),
        F = a(939496),
        U = a(996988),
        B = a(216914);
      function q(e) {
        var i;
        let a,
          { widgets: l = [], onClick: s, className: r } = e,
          { trackUserProfileAction: o } = (0, x.NJ)(),
          p =
            ((i = l.filter((e) => e instanceof A.R)),
            (a = (0, f.A)(i.map((e) => e.applicationId))),
            (0, c.cf)([V.A], () =>
              Object.fromEntries(
                a
                  .filter(I.Vq)
                  .map((e) => [e.id, V.A.getGameByApplication(e)])
                  .filter((e) => {
                    let [i, a] = e;
                    return null != a;
                  }),
              ),
            )),
          d = (0, n.useMemo)(
            () => [
              ...new Set(
                l
                  .map((e) =>
                    e instanceof E.Yy
                      ? e.games.map((e) => e.applicationId)
                      : e instanceof A.R
                        ? p[e.applicationId]?.id
                        : void 0,
                  )
                  .filter(I.Vq)
                  .flat(),
              ),
            ],
            [l, p],
          ),
          u = (0, c.bG)([V.A], () => V.A.canFetchDetectableGames()),
          [m, h] = (0, n.useState)([]),
          { themeType: g } = (0, F.E)(),
          j = g === U.d.SIDEBAR,
          v = (0, n.useRef)(!1);
        return (
          (0, n.useEffect)(() => {
            u
              ? T.Ay.getDetectableGames()
              : h(
                  d
                    .map((e) => V.A.getDetectableGame(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                      image:
                        L.Ay.getApplicationIconURL({
                          id: e.id,
                          icon: e.icon,
                        }) ?? "",
                      name: e.name,
                    }))
                    .filter((e) => "" !== e.image)
                    .slice(0, 4),
                );
          }, [d, u]),
          (0, n.useEffect)(() => {
            0 === m.length ||
              v.current ||
              (o({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (v.current = !0));
          }, [o, m.length]),
          (0, t.jsx)(O.D, {
            "aria-label": M.intl.string(M.t.JjiwFx),
            onClick: () => {
              o({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s();
            },
            className: B.QF,
            children: (0, t.jsxs)(_.A.Overlay, {
              className: w()(B.WH, r),
              children: [
                (0, t.jsx)(N.E, {
                  variant: j ? "text-sm/medium" : "text-xs/medium",
                  children: M.intl.string(M.t.JjiwFx),
                }),
                (0, t.jsx)("div", {
                  className: B.Pt,
                  children: m.map((e, i) =>
                    (0, t.jsx)(
                      J,
                      {
                        iconUrl: e.image,
                        name: e.name,
                        displayCount: i === m.length - 1 && d.length > 4,
                        gameCount: d.length - m.length,
                      },
                      i,
                    ),
                  ),
                }),
              ],
            }),
          })
        );
      }
      function J(e) {
        let { iconUrl: i, name: a, displayCount: n, gameCount: l } = e;
        return (0, t.jsxs)("div", {
          className: B.Kk,
          children: [
            (0, t.jsx)("img", {
              className: w()({ [B.um]: n }),
              src: i,
              alt: a,
            }),
            n &&
              (0, t.jsx)("div", {
                className: B.pp,
                children: (0, t.jsxs)(N.E, {
                  variant: "text-xs/medium",
                  className: B.gq,
                  children: ["+", l],
                }),
              }),
          ],
        });
      }
      var z = a(518477);
      function H(e) {
        let { enabled: i } = d.A.useConfig({
          location: "UserProfileStackedWidgetPreviews",
        });
        return i ? (0, t.jsx)($, { ...e }) : (0, t.jsx)(Q, { ...e });
      }
      function Y(e) {
        let { onOpenUserProfileModal: i } = e,
          { analyticsLocations: a } = (0, r.Ay)(),
          { trackUserProfileAction: t } = (0, x.NJ)(),
          l = n.useCallback(() => {
            i?.({ tabSection: z.RP.WIDGETS });
          }, [i]),
          s = n.useCallback(() => {
            t({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: a }),
              l();
          }, [t, a, l]);
        return { openModal: l, onExpand: s };
      }
      function Q(e) {
        let { user: i, widgets: a = [], ...l } = e,
          { openModal: s, onExpand: c } = Y({ user: i, widgets: a, ...l }),
          r = n.useMemo(() => a.filter((e) => e instanceof A.R), [a]),
          o = n.useMemo(() => r.map((e) => e.applicationId), [r]),
          p = (0, u.A)(i.id, o),
          d = n.useCallback(
            (e) => {
              let i = [],
                n = !1;
              for (let l of a)
                if (l instanceof A.R) {
                  let a = p[l.applicationId];
                  null != a &&
                    i.push(
                      (0, t.jsx)(
                        G,
                        { type: "v1", previewData: a, onClick: s, ...e },
                        `application-widget-${l.applicationId}`,
                      ),
                    );
                } else
                  l instanceof E.Yy &&
                    !n &&
                    (i.push(
                      (0, t.jsx)(
                        q,
                        { widgets: a, onClick: s, ...e },
                        "collection-breadcrumb",
                      ),
                    ),
                    (n = !0));
              return i;
            },
            [p, s, a],
          );
        return 0 === a.length
          ? null
          : (0, t.jsx)(j.A, {
              renderCards: d,
              heading: M.intl.string(M.t.Y55Tua),
              onExpand: c,
            });
      }
      function $(e) {
        let { user: i, widgets: a = [], ...r } = e,
          { openModal: d, onExpand: u } = Y({ user: i, widgets: a, ...r }),
          x = n.useMemo(() => a.filter((e) => e instanceof A.R), [a]),
          v = n.useMemo(() => x.map((e) => e.applicationId), [x]),
          w = (0, f.A)(v),
          C = n.useMemo(
            () => new Map(w.filter(I.Vq).map((e) => [e.id, e])),
            [w],
          ),
          N = (0, m.A)(v),
          R = n.useMemo(
            () => new Map(N.map((e) => [e.application_id, e])),
            [N],
          ),
          { data: b } = (0, h.P)(i.id),
          P = n.useMemo(
            () => new Map(b?.map((e) => [e.application_id, e])),
            [b],
          ),
          _ = (0, c.bG)([g.default], () => g.default.locale),
          y = (0, c.cf)([p.A], () =>
            Object.fromEntries(
              x.map((e) => [e.applicationId, p.A.getAssets(e.applicationId)]),
            ),
          ),
          k = n.useMemo(
            () =>
              0 === C.size || 0 === R.size || 0 === P.size
                ? null
                : new Map(
                    x
                      .map((e) => {
                        let i = C.get(e.applicationId),
                          a = R.get(e.applicationId),
                          t = P.get(e.applicationId);
                        if (null == i || null == a || null == t) return null;
                        let n = a.surfaces;
                        if (null == n || null == n[s.m.MINI_PROFILE])
                          return null;
                        let c = (0, l.VG)(t.profile),
                          r = Object.values(y[e.applicationId] ?? {}).filter(
                            I.Vq,
                          );
                        return [
                          e,
                          {
                            surfaceConfigs: a.surfaces,
                            data: c,
                            application: i,
                            assets: r,
                          },
                        ];
                      })
                      .filter(I.Vq),
                  ),
            [x, C, R, P, y],
          ),
          S = n.useCallback(
            (e) => {
              let i = [],
                n = !1;
              for (let l of a)
                if (l instanceof A.R) {
                  let a = k?.get(l);
                  if (null == a) continue;
                  i.push(
                    (0, t.jsx)(
                      G,
                      {
                        type: "v2",
                        application: a.application,
                        rendererProps: {
                          locale: _,
                          surfaceConfigs: a.surfaceConfigs,
                          isLoading: !1,
                          hasIdentity: !0,
                          resolutionContext: {
                            data: a.data,
                            applicationAssets: a.assets,
                            getApplicationAssetUrl: (e) =>
                              (0, o.Q)(l.applicationId, e, e.metadata.width),
                            localizedStrings: [],
                          },
                        },
                        onClick: d,
                        ...e,
                      },
                      `application-widget-${l.applicationId}`,
                    ),
                  );
                } else
                  l instanceof E.Yy &&
                    !n &&
                    (i.push(
                      (0, t.jsx)(
                        q,
                        { widgets: a, onClick: d, ...e },
                        "collection-breadcrumb",
                      ),
                    ),
                    (n = !0));
              return i;
            },
            [a, d, k, _],
          );
        return 0 === a.length
          ? null
          : (0, t.jsx)(j.A, {
              renderCards: S,
              heading: M.intl.string(M.t.Y55Tua),
              onExpand: u,
            });
      }
    },
  },
]);
//# sourceMappingURL=54187.8d1696b025a8d4ea.js.map
