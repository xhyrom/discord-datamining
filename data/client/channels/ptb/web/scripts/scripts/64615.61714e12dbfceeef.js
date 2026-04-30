"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64615"],
  {
    9578(e, t, l) {
      l.d(t, { A: () => c });
      var r = l(627968),
        n = l(64700),
        i = l(791332),
        a = l.n(i),
        s = l(349288),
        d = l(793574),
        o = l(688810),
        u = l(76843);
      let c = n.memo(function (e) {
        let {
            onClick: t,
            trusted: l,
            title: i,
            href: c,
            children: v,
            messageId: C,
            channelId: h,
            ...g
          } = e,
          { analyticsLocations: m } = (0, o.Ay)(d.A.MASKED_LINK),
          f = n.useCallback((t) => (0, u.h)(e, t, m), [m, e]),
          p = n.useCallback(
            (e) => {
              1 === e.button && f(e);
            },
            [f],
          ),
          x = a().sanitizeUrl(c);
        return (0, r.jsx)(s.Anchor, {
          ...g,
          title: i,
          target: "_blank",
          rel: "noreferrer noopener",
          href: x,
          onClick: f,
          onAuxClick: p,
          children: v ?? i,
        });
      });
    },
    435954(e, t, l) {
      l.d(t, { A: () => P });
      var r = l(627968),
        n = l(64700),
        i = l(17928),
        a = l(148810),
        s = l(521502),
        d = l(380610);
      l(321073);
      var o = l(503698),
        u = l.n(o),
        c = l(284009),
        v = l.n(c),
        C = l(939249),
        h = l(173936),
        g = l(834730),
        m = l(821609),
        f = l(349288),
        p = l(885574),
        x = l(579872),
        b = l(763827),
        j = l(193270);
      let w = n.memo(function (e) {
        let { className: t } = e;
        return (0, r.jsxs)("svg", {
          width: "57",
          height: "40",
          viewBox: "0 0 57 40",
          fill: "none",
          className: t,
          children: [
            (0, r.jsx)("path", {
              d: "M49.4949 36H3.9596C1.78182 36 0 34.2486 0 32.1081V3.89189C0 1.75135 1.78182 0 3.9596 0H49.4949C51.6727 0 53.4545 1.75135 53.4545 3.89189V32.1081C53.4545 34.2486 51.6727 36 49.4949 36Z",
              className: j.wT,
            }),
            (0, r.jsx)("path", {
              d: "M44.5456 10.8889H25.7375C24.6486 10.8889 23.7577 9.99798 23.7577 8.90909C23.7577 7.8202 24.6486 6.92929 25.7375 6.92929H44.5456C45.6345 6.92929 46.5254 7.8202 46.5254 8.90909C46.5254 9.99798 45.6345 10.8889 44.5456 10.8889ZM19.7981 10.8889C18.7092 10.8889 17.8183 9.99798 17.8183 8.90909C17.8183 7.8202 18.7092 6.92929 19.7981 6.92929C20.887 6.92929 21.7779 7.8202 21.7779 8.90909C21.7779 9.99798 20.887 10.8889 19.7981 10.8889ZM44.5456 19.798H25.7375C24.6486 19.798 23.7577 18.9071 23.7577 17.8182C23.7577 16.7293 24.6486 15.8384 25.7375 15.8384H44.5456C45.6345 15.8384 46.5254 16.7293 46.5254 17.8182C46.5254 18.9071 45.6345 19.798 44.5456 19.798ZM19.7981 19.798C18.7092 19.798 17.8183 18.9071 17.8183 17.8182C17.8183 16.7293 18.7092 15.8384 19.7981 15.8384C20.887 15.8384 21.7779 16.7293 21.7779 17.8182C21.7779 18.9071 20.887 19.798 19.7981 19.798ZM31.6365 28.7071H25.7375C24.6486 28.7071 23.7577 27.8162 23.7577 26.7273C23.7577 25.6384 24.6486 24.7475 25.7375 24.7475H31.6365C32.7254 24.7475 33.6163 25.6384 33.6163 26.7273C33.6163 27.8162 32.7254 28.7071 31.6365 28.7071ZM19.7981 28.7071C18.7092 28.7071 17.8183 27.8162 17.8183 26.7273C17.8183 25.6384 18.7092 24.7475 19.7981 24.7475C20.887 24.7475 21.7779 25.6384 21.7779 26.7273C21.7779 27.8162 20.887 28.7071 19.7981 28.7071Z",
              className: j.lk,
            }),
            (0, r.jsx)("path", {
              d: "M3.9596 36H13.8586V0H3.9596C1.78182 0 0 1.78182 0 3.9596V32.0404C0 34.2182 1.78182 36 3.9596 36Z",
              className: j.$U,
            }),
            (0, r.jsx)("path", {
              d: "M6.9293 10.8889C5.24647 10.8889 3.9596 9.60202 3.9596 7.91919C3.9596 6.23636 5.24647 4.94949 6.9293 4.94949C8.61212 4.94949 9.89899 6.23636 9.89899 7.91919C9.89899 9.60202 8.61212 10.8889 6.9293 10.8889ZM6.9293 20.7879C5.24647 20.7879 3.9596 19.501 3.9596 17.8182C3.9596 16.1354 5.24647 14.8485 6.9293 14.8485C8.61212 14.8485 9.89899 16.1354 9.89899 17.8182C9.89899 19.501 8.61212 20.7879 6.9293 20.7879ZM6.9293 30.6869C5.24647 30.6869 3.9596 29.4 3.9596 27.7172C3.9596 26.0343 5.24647 24.7475 6.9293 24.7475C8.61212 24.7475 9.89899 26.0343 9.89899 27.7172C9.89899 29.4 8.61212 30.6869 6.9293 30.6869Z",
              className: j.Vu,
            }),
            (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M41.4328 33L46 37.7129L43.7836 40L37 32.9999L39.2164 30.7128L39.2165 30.7129L43.7836 26L46 28.2871L41.4328 33Z",
              className: j.r_,
            }),
            (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M54.7821 35.2871L54.7841 35.2892L57 33.0021L50.2159 26L48 28.2871L52.5662 33L48 37.7129L50.2159 40L54.7821 35.2871Z",
              className: j.r_,
            }),
          ],
        });
      });
      var k = l(957565),
        N = l(975571),
        A = l(723702),
        E = l(735438),
        y = l.n(E),
        L = l(495544),
        B = l(986238),
        O = l(652215),
        _ = l(985018),
        M = l(722836);
      function H(e) {
        let { url: t } = e,
          [l, i] = n.useState(!1),
          a = n.useRef(void 0),
          s = n.useCallback(() => {
            l ||
              (0, k.C)(t, () => {
                i(!0), (a.current = setTimeout(() => i(!1), 2e3));
              });
          }, [t, l]);
        return (
          n.useEffect(() => () => clearTimeout(a.current), []),
          k.p5
            ? (0, r.jsxs)(C.D, {
                className: u()(M.S, l ? M.pG : null),
                onClick: s,
                children: [
                  (0, r.jsx)(h.q, {
                    size: "md",
                    color: "currentColor",
                    className: M.n7,
                  }),
                  l ? _.intl.string(_.t.GmrIJY) : _.intl.string(_.t.iVzBOh),
                ],
              })
            : null
        );
      }
      function I(e) {
        let {
          subHead: t,
          buildDetails: l,
          variant: i,
          buttonClick: a,
          buttonText: s,
          disabled: d = !1,
          submitting: o = !1,
        } = e;
        return (0, r.jsxs)(n.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: M.NT,
              children: [
                (0, r.jsx)(g.E, {
                  variant: "text-sm/medium",
                  className: M.V$,
                  children: t,
                }),
                (0, r.jsx)("div", { className: M.Jb, children: l }),
              ],
            }),
            (0, r.jsx)(m.$, {
              text: s,
              loading: o,
              variant: i,
              onClick: a,
              fullWidth: !0,
              disabled: d,
            }),
          ],
        });
      }
      let R = (e) => {
        let {
            loading: t = !1,
            currentOverrides: l,
            linkMeta: i,
            url: a,
            applyBuildOverride: s,
            clearBuildOverride: d,
          } = e,
          [o, c] = n.useState(!1),
          C = n.useCallback(() => {
            o || (c(!0), s().catch(() => c(!1)));
          }, [s, o]),
          h = n.useCallback(() => {
            o || (c(!0), d().catch(() => c(!1)));
          }, [d, o]);
        return (0, r.jsxs)("div", {
          className: M.iE,
          children: [
            (0, r.jsxs)(g.E, {
              variant: "text-xs/normal",
              className: M.lS,
              children: [
                (0, r.jsx)("strong", {
                  className: M.DD,
                  children:
                    null != i && null != i.releaseChannel
                      ? _.intl.formatToPlainString(_.t.bFj63b, {
                          releaseChannel: i.releaseChannel,
                        })
                      : _.intl.string(_.t.Wj3LW4),
                }),
                (0, r.jsx)(f.Anchor, {
                  className: M.Pl,
                  href: N.A.getArticleURL(O.MVz.BUILD_OVERRIDE_EMBED),
                  target: "_blank",
                  children: (0, r.jsx)(p.m, {
                    size: "xs",
                    color: "currentColor",
                    className: M.G,
                  }),
                }),
                t ? null : (0, r.jsx)(H, { url: a }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: M.Qs,
              children: [
                (0, r.jsx)(w, { className: M.Kk }),
                t
                  ? (0, r.jsxs)(n.Fragment, {
                      children: [
                        (0, r.jsxs)("div", {
                          className: M.NT,
                          children: [
                            (0, r.jsx)("div", { className: u()(M.Pz, M.w9) }),
                            (0, r.jsx)("div", { className: M.Pz }),
                          ],
                        }),
                        (0, r.jsx)("div", { className: M.MM }),
                      ],
                    })
                  : (function (e) {
                      let t,
                        l,
                        r,
                        {
                          currentOverrides: n,
                          linkMeta: i,
                          applyBuildOverride: a,
                          clearBuildOverride: s,
                          submitting: d,
                        } = e,
                        o = ["discord_web"];
                      A.isPlatformEmbedded ||
                        o.push("discord_marketing", "discord_developers");
                      let u = (function (e, t) {
                        if (null == e || null == t)
                          return {
                            valid: !1,
                            reason: _.intl.string(_.t.d34xi4),
                          };
                        let {
                            releaseChannel: l,
                            expiresAt: r,
                            validForUserIds: n,
                            allowedVersions: i,
                            targetBuildOverride: a,
                          } = e,
                          s = Object.keys(a);
                        if (0 === y().intersection(s, t).length)
                          return {
                            valid: !1,
                            reason: _.intl.formatToPlainString(_.t.wySUzv, {
                              requestedTargets: s
                                .map((e) => B.v_[e] ?? "unknown")
                                .join(", "),
                            }),
                          };
                        if (
                          null != l &&
                          l !== window.GLOBAL_ENV.RELEASE_CHANNEL
                        ) {
                          let e =
                            l === O.BIo.PTB
                              ? l.toUpperCase()
                              : `${l.charAt(0).toUpperCase()}${l.slice(1)}`;
                          return {
                            valid: !1,
                            reason: _.intl.formatToPlainString(_.t.GOEF0C, {
                              releaseChannel: e,
                            }),
                          };
                        }
                        if (null != i) {
                          let e = !1;
                          (e = !1), !0;
                          return {
                            valid: !1,
                            reason: _.intl.formatToPlainString(_.t.GOEF0C, {
                              releaseChannel: i.join(", "),
                            }),
                          };
                        }
                        let d = null != r ? new Date(r).getTime() : null;
                        return null != d && d < Date.now()
                          ? { valid: !1, reason: _.intl.string(_.t["8eRE6S"]) }
                          : n.length > 0 && !n.includes(L.default.getId())
                            ? { valid: !1, reason: _.intl.string(_.t.qZgV0a) }
                            : { valid: !0 };
                      })(i, o);
                      if (!u.valid) {
                        var c;
                        return (
                          (c = u.reason),
                          I({
                            subHead: _.intl.string(_.t.ODXApH),
                            variant: "secondary",
                            buttonText: "Invalid",
                            buildDetails: c,
                            disabled: !0,
                          })
                        );
                      }
                      v()(
                        null != i,
                        "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved",
                      );
                      let { discord_web: C, discord_developers: h } =
                          i.targetBuildOverride,
                        g = C ?? h;
                      return (
                        (v()(
                          null != g,
                          "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved",
                        ),
                        null == n || null == n.discord_web
                          ? 1
                          : g.id !== n.discord_web.id ||
                            g.type !== n.discord_web.type)
                          ? ((l = _.intl.string(_.t.nOunHC)),
                            (t = a),
                            (r = "primary"))
                          : ((l = _.intl.string(_.t.tX4xrt)),
                            (t = s),
                            (r = "critical-primary")),
                        I({
                          subHead: _.intl.string(_.t.RCYGot),
                          buildDetails: g.id,
                          buttonClick: () => {
                            b.A.isConnected()
                              ? x.A.show({
                                  title: _.intl.string(_.t.tiu1ly),
                                  body: _.intl.string(_.t["zK+lqW"]),
                                  onConfirm: t,
                                  cancelText: _.intl.string(_.t["ETE/oC"]),
                                  confirmText: _.intl.string(_.t["QDX/qu"]),
                                  confirmVariant: "critical-primary",
                                })
                              : t();
                          },
                          buttonText: l,
                          variant: r,
                          submitting: d,
                        })
                      );
                    })({
                      currentOverrides: l,
                      linkMeta: i,
                      applyBuildOverride: C,
                      clearBuildOverride: h,
                      submitting: o,
                    }),
              ],
            }),
          ],
        });
      };
      var T = l(390486);
      async function D(e) {
        if (200 !== (await (0, a.oA)(e)).status)
          throw Error("Build override couldn't apply");
        window.location.reload(!0);
      }
      async function S(e) {
        if (200 !== (await (0, a.Zk)(e)).status)
          throw Error("Build override couldn't apply");
        window.location.reload(!0);
      }
      async function Z() {
        await (0, a.iD)(), window.location.reload(!0);
      }
      let P = n.memo(function (e) {
        let { url: t } = e,
          l = (0, i.cf)([s.A], () => s.A.getCurrentBuildOverride()),
          a = (0, i.bG)([s.A], () => s.A.getBuildOverride(t)),
          { payload: o, validatedURL: u } = a,
          c = l.state === s.U.Resolving || a.state === s.U.Resolving,
          v = n.useCallback(
            () =>
              (0, d.h4)(a.url) && null != a.override
                ? S(a.override?.targetBuildOverride)
                : null == o
                  ? Promise.reject(Error("Invalid override payload"))
                  : ((0, T.R)(a.override, o), D(o)),
            [o, a],
          );
        return null != u
          ? (0, r.jsx)(R, {
              loading: c,
              linkMeta: a.override,
              currentOverrides: l.overrides,
              applyBuildOverride: v,
              clearBuildOverride: Z,
              url: u,
            })
          : null;
      });
    },
    390486(e, t, l) {
      l.d(t, { H: () => i, R: () => a });
      var r = l(506774);
      let n = "recentBuildOverrides";
      function i() {
        return (r.w.get(n) ?? []).filter(
          (e) => null == e.exp || e.exp > Date.now(),
        );
      }
      function a(e, t) {
        if (null == t || null == e || null == e.targetBuildOverride.discord_web)
          return;
        let l = {
            id: e.targetBuildOverride.discord_web.id,
            payload: t,
            exp: Date.parse(e.expiresAt),
          },
          a = [l, ...i().filter((e) => l.id !== e.id)].slice(0, 5);
        r.w.set(n, a);
      }
    },
    881140(e, t, l) {
      l.d(t, { A: () => c });
      var r = l(627968),
        n = l(64700),
        i = l(436857),
        a = l(9578),
        s = l(380610),
        d = l(435954),
        o = l(76843);
      function u(e) {
        return (
          null != e.target &&
          (0, o.m)(
            e.target,
            null != e.title && "" !== e.title ? e.title : (0, i.$)(e.content),
          )
        );
      }
      function c(e) {
        return {
          react(t, l, c) {
            if (e.enableBuildOverrides && (0, s.vS)(t.target))
              return (0, r.jsx)(
                n.Fragment,
                { children: (0, r.jsx)(d.A, { url: t.target }, t.target) },
                c.key,
              );
            let v = l(t.content, c),
              C =
                "string" == typeof t.title && 0 !== t.title.length
                  ? t.title
                  : (0, i.$)(t.content),
              h = e?.mustConfirmExternalLink
                ? (e) => (
                    e?.stopPropagation(),
                    e?.preventDefault(),
                    (0, o.h)({
                      href: t.target,
                      shouldConfirm: !0,
                      messageId: c.messageId,
                      channelId: c.channelId,
                    }),
                    null
                  )
                : void 0;
            if (c.previewLinkTarget && !u(t)) {
              let e = `

(${t.target})`;
              C.length + e.length > 1024 &&
                ((e = "..." + e),
                (C = (C = C.substr(0, 1024 - e.length)).trimEnd())),
                (C += e);
            }
            return c.noStyleAndInteraction
              ? (0, r.jsx)("span", { title: C, children: v }, c.key)
              : (0, r.jsx)(
                  a.A,
                  {
                    title: C,
                    href: t.target,
                    trusted: () => u(t),
                    onClick: h,
                    messageId: c.messageId,
                    channelId: c.channelId,
                    children: v,
                  },
                  c.key,
                );
          },
        };
      }
    },
    157941(e, t, l) {
      l.d(t, { l: () => d });
      var r = l(627968),
        n = l(64700),
        i = l(945810);
      let a = n.lazy(() =>
          Promise.all([l.e("6580"), l.e("35477"), l.e("60071")])
            .then(l.bind(l, 714554))
            .then((e) => ({ default: e.SyntaxHighlight })),
        ),
        s = (0, i.mj)({
          name: "2026-03-arborium-highlight",
          kind: "user",
          defaultConfig: { enabled: !1 },
          variations: { 1: { enabled: !0 } },
        });
      function d(e) {
        let { children: t, location: l, ...i } = e,
          { enabled: d } = s.useConfig({ location: l });
        return d
          ? (0, r.jsx)(n.Suspense, {
              fallback: t,
              children: (0, r.jsx)(a, { ...i }),
            })
          : t;
      }
    },
  },
]);
//# sourceMappingURL=64615.61714e12dbfceeef.js.map
