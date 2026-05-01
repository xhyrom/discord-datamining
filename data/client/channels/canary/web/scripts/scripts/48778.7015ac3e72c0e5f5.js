"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48778"],
  {
    511347(e, t, n) {
      n.d(t, { A: () => u });
      var r = n(64700);
      function u(e) {
        let t = r.useRef(null),
          n = r.useCallback(
            (n) => {
              null != e &&
                ("function" == typeof e ? e(n) : (e.current = n),
                (t.current = n));
            },
            [e],
          );
        return [t, n];
      }
    },
    435582(e, t, n) {
      n.d(t, { A: () => u });
      var r = n(652215);
      function u(e, t) {
        let n = window.GLOBAL_ENV.CDN_HOST,
          u = window.GLOBAL_ENV.API_ENDPOINT;
        return null != n
          ? `https://${n}/app-assets/${e}/store/${t}.mp4`
          : `${location.protocol}${u}${r.Rsh.STORE_ASSET(e, t, "mp4")}`;
      }
    },
    902439(e, t, n) {
      n.d(t, { A: () => a });
      var r = n(17928),
        u = n(933958);
      function a() {
        return (0, r.bG)([u.Ay], () => u.Ay.getCurrentEmbeddedActivity());
      }
    },
    620148(e, t, n) {
      n.d(t, { A: () => a });
      var r = n(429913),
        u = n(902439);
      function a() {
        let { fetchesApplication: e = !0 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, u.A)(),
          [n] = (0, r.A)(null == t ? [] : [t.applicationId], e);
        return n ?? void 0;
      }
    },
    283488(e, t, n) {
      n.d(t, { A: () => l });
      var r = n(64700),
        u = n(970928);
      let a = ["embedded_cover", "embedded_background"];
      function l(e) {
        let { applicationId: t, size: n, names: l = a, format: o = "png" } = e,
          [i, s] = r.useState(null),
          [c, d] = r.useState(!0),
          _ = (0, u.uD)(t, i, n, o),
          f = r.useRef(l);
        return (
          r.useEffect(() => {
            f.current = l;
          }),
          r.useEffect(() => {
            let { current: e } = f;
            null != t &&
              (0, u.Y)(t).then((t) => {
                for (let [n, r] of (d(!1), Object.entries(t)))
                  if (null != r && "" !== r.id && e.includes(r.name))
                    return void s(r.id);
              });
          }, [t]),
          { url: _, state: c ? "loading" : null != _ ? "fetched" : "not-found" }
        );
      }
    },
    615807(e, t, n) {
      n.d(t, { G: () => a });
      var r = n(64700),
        u = n(849269);
      function a(e) {
        let [t, n] = r.useState(e);
        return (
          r.useLayoutEffect(() => {
            if (e === u.o6.LEAVE) {
              let t = setTimeout(() => n(e), 100);
              return () => clearTimeout(t);
            }
            n(e);
          }, [e]),
          t
        );
      }
    },
    549699(e, t, n) {
      n.d(t, { Q: () => a }), n(323874), n(14289), n(35956);
      var r = n(636537),
        u = n(776231);
      function a(e, t, n) {
        let a = new URL(
          null != window.GLOBAL_ENV.CDN_HOST
            ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t.asset_id}.webp`
            : `${(0, r.TP)()}/applications/${e}/app-assets/${t.asset_id}.webp`,
        );
        return (
          null != n && a.searchParams.set("size", (0, u.kr)(n).toString()),
          t.metadata.is_animated && a.searchParams.set("animated", "true"),
          a.toString()
        );
      }
    },
    29496(e, t, n) {
      n.d(t, { A: () => s });
      var r = n(17928),
        u = n(228366);
      let a = new Map();
      function l(e) {
        let t = !1;
        return (
          [...Map.groupBy(e, (e) => e.application_id).entries()]
            .map((e) => {
              let [t, n] = e;
              return [
                t,
                n
                  .flatMap((e) => e.resolved_assets ?? [])
                  .filter((e) => {
                    let n;
                    return (
                      null == (n = a.get(t)?.[e.key]) ||
                      new Date(e.updated_at) > new Date(n.updated_at)
                    );
                  }),
              ];
            })
            .filter((e) => {
              let [t, n] = e;
              return n.length > 0;
            })
            .forEach((e) => {
              let [n, r] = e;
              return (
                (t = !0),
                a.set(n, {
                  ...a.get(n),
                  ...Object.fromEntries(r.map((e) => [e.key, e])),
                })
              );
            }),
          t
        );
      }
      function o(e) {
        return l(Object.values(e.configs).flat());
      }
      class i extends r.Ay.Store {
        static displayName = "ApplicationAssetsV2Store";
        getAssets(e) {
          return a.get(e);
        }
      }
      let s = new i(u.h, {
        LOGOUT: function () {
          a.clear();
        },
        APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
          return l(e.configs);
        },
        APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: o,
        APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: o,
      });
    },
    188951(e, t, n) {
      n.d(t, { A: () => s });
      var r = n(64700),
        u = n(17928),
        a = n(253932),
        l = n(403362),
        o = n(382483),
        i = n(385113);
      function s(e) {
        let t = a.Q_.useSetting(),
          n = (0, u.bG)([i.A], () => i.A.getFeaturedFetchState()),
          s = (0, u.bG)([i.A], () => i.A.getDeveloperFetchState()),
          c = (0, u.yK)([i.A], () =>
            e.filter((e) => i.A.getFetchState(e) === i.e.NOT_FETCHED),
          ),
          d = (0, u.yK)([i.A], () =>
            e.map((e) => i.A.getConfig(e)).filter(l.Vq),
          );
        return (
          r.useEffect(() => {
            (0, o.Wq)();
          }, []),
          r.useEffect(() => {
            t && (0, o.i$)();
          }, [t]),
          r.useEffect(() => {
            if (
              n !== i.e.NOT_FETCHED &&
              n !== i.e.FETCHING &&
              (!t || (s !== i.e.NOT_FETCHED && s !== i.e.FETCHING))
            )
              for (let e of c) (0, o.un)(e);
          }, [s, n, c, t]),
          d
        );
      }
    },
    14400(e, t, n) {
      n.d(t, { A: () => l });
      var r = n(64700),
        u = n(253932),
        a = n(824744);
      function l() {
        let [e, t] = r.useState(u.HO.getSetting());
        return {
          volume: e,
          onVolumeChange: r.useCallback((e) => {
            let n = (0, a.w)(e);
            t(n), u.HO.updateSetting(n);
          }, []),
        };
      }
    },
    926571(e, t, n) {
      n.d(t, { A: () => l });
      var r = n(954571),
        u = n(863922),
        a = n(652215);
      function l(e) {
        let {
          summary: t,
          guildId: n,
          channelId: l,
          rating: o = null,
          problem: i = null,
          feedback: s = "",
          location: c,
        } = e;
        (0, u.C7)(t, o),
          r.default.track(a.HAw.SUMMARIES_REPORT_PROBLEM, {
            reason: i,
            location: c,
            rating: o,
            feedback: s,
            participant_count: t.people.length,
            message_count: t.count,
            start_message_id: t.startId,
            guild_id: n,
            channel_id: l,
            summary_id: t.id,
            summary_source: t.source,
            summary_type: t.type,
          });
      }
    },
    612185(e, t, n) {
      n.d(t, { A: () => E, Q: () => p });
      var r = n(627968),
        u = n(64700),
        a = n(430111),
        l = n(598748),
        o = n(286043),
        i = n(659936),
        s = n(179856),
        c = n(957742),
        d = n(705880),
        _ = n(272852);
      let f = u.createContext(null);
      function p() {
        let e = u.useContext(f);
        if (null == e)
          throw Error(
            "useLayoutRendererContext must be used within a LayoutRenderer",
          );
        return e;
      }
      let A = {
        [l.m.WIDGET_TOP]: {
          hero_overview_widget_top: () => (0, r.jsx)(d.A, {}),
        },
        [l.m.WIDGET_BOTTOM]: {
          stats_grid_3x2_widget_bottom: () => (0, r.jsx)(c.A, {}),
        },
        [l.m.MINI_PROFILE]: {
          hero_stat_preview_mini_profile: () => (0, r.jsx)(s.A, {}),
        },
        [l.m.ACTIVITY_ACCESSORY]: {
          text_with_icon_activity_accessory: () => (0, r.jsx)(o.A, {}),
        },
        [l.m.ADD_WIDGET_PREVIEW]: {
          hero_preview_add_widget_preview: (e) => (0, r.jsx)(i.A, { ...e }),
        },
      };
      function E(e) {
        let {
            surface: t,
            surfaceConfig: n,
            resolutionContext: l,
            locale: o,
            header: i,
            onClick: s,
            layoutProps: c,
          } = e,
          d = u.useMemo(
            () =>
              new Intl.NumberFormat(o, {
                notation: "compact",
                compactDisplay: "short",
                roundingMode: "floor",
              }),
            [o],
          ),
          p = u.useMemo(() => new a.Y(o, { style: "narrow" }), [o]);
        if (null == n) return null;
        let E = A[t]?.[n.layout];
        return null == E
          ? null
          : (0, r.jsx)(f.Provider, {
              value: {
                surfaceConfig: n,
                locale: o,
                numberFormat: d,
                durationFormat: p,
                header: i,
                onClick: s,
                resolutionContext: l,
                resolveFieldValue: (0, _.J)(l),
              },
              children: E(c),
            });
      }
    },
  },
]);
//# sourceMappingURL=48778.7015ac3e72c0e5f5.js.map
