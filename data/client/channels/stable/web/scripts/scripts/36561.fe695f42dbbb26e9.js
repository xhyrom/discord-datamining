"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36561"],
  {
    18437(e, t, n) {
      n.d(t, { Ii: () => H, Ut: () => g, cR: () => L, u0: () => T });
      var r = n(64700),
        l = n(132500),
        u = n(323889),
        a = n(345353),
        s = n(69114),
        i = n(954571),
        o = n(723702),
        d = n(859703),
        c = n(507107),
        E = n(710969),
        v = n(561844),
        f = n(590202),
        _ = n(971649),
        m = n(652215);
      function T() {
        let e = (0, _.vU)();
        return r.useCallback(
          (t) => {
            (0, v.av)({
              ...t,
              properties: { ...t.properties, impression_id: e?.getId() },
            });
          },
          [e],
        );
      }
      function g() {
        let e = T();
        return r.useCallback(
          (t) => {
            let {
                questId: n,
                questContent: r,
                questContentCTA: u,
                questContentPosition: i,
                questContentRowIndex: c,
                trackGuildAndChannelMetadata: v,
                sourceQuestContent: _,
              } = t,
              T = d.A.getQuest(n),
              g = (0, E.L4)(r),
              H = (0, E.yI)(r, n),
              L = (0, E.Gp)(r, n);
            (0, a.N)((0, f.jO)(r)).then((t) => {
              e({
                questId: n,
                event: m.HAw.QUEST_CONTENT_CLICKED,
                properties: {
                  ...(0, f.fF)(r, i, c),
                  ...(0, s.A)(),
                  cta_name: u,
                  quest_status: null != T ? (0, f.NI)(T) : null,
                  click_id: (0, l.A)(),
                  apple_advertising_id:
                    null != t && (0, o.isIOS)() ? t.advertisingId : null,
                  android_advertising_id:
                    null != t && (0, o.isAndroid)() ? t.advertisingId : null,
                  metadata_sealed: null != g ? g : null,
                  traffic_metadata_raw: null != H ? H : null,
                  traffic_metadata_sealed: null != L ? L : null,
                },
                trackGuildAndChannelMetadata: v,
                shouldExtendSession: (0, E.xn)(r),
                sourceQuestContent: _,
              });
            });
          },
          [e],
        );
      }
      function H(e, t) {
        r.useEffect(() => {
          (0, v.DZ)(t, e);
        }, [e, t]);
      }
      function L(e) {
        let { questHomeHero: t, shouldShowQuestHomeHeroContent: n } = e,
          l = n
            ? c.uF.QUEST_HOME_ENTRYPOINT_THEMED
            : c.uF.QUEST_HOME_ENTRYPOINT,
          a = r.useMemo(() => {
            let e = (0, f.fF)(l);
            return delete e.row_index, e;
          }, [l]),
          s = r.useCallback(
            (e) => {
              null != t && n
                ? (0, v.Qg)({
                    adContentId: t.id,
                    adCreativeType: u.p.QUEST_HOME_HERO,
                    event: e,
                    properties: a,
                    sourceQuestContent: l,
                  })
                : i.default.track(e, a);
            },
            [t, n, l, a],
          ),
          o = r.useCallback(() => {
            s(m.HAw.QUEST_HOVER);
          }, [s]),
          d = r.useCallback(() => {
            s(m.HAw.QUEST_HOVER_OFF);
          }, [s]),
          E = r.useCallback(() => {
            i.default.track(m.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
          }, []);
        return r.useMemo(
          () => ({
            handleMouseEnter: o,
            handleMouseLeave: d,
            handleOnboardingPopoutRender: E,
          }),
          [o, d, E],
        );
      }
    },
    241124(e, t, n) {
      n.d(t, { Gk: () => _, Sn: () => f, jY: () => v });
      var r = n(627968),
        l = n(64700),
        u = n(158390),
        a = n(621466),
        s = n(954571),
        i = n(38405),
        o = n(652215);
      let d = l.createContext({
        registerAsset: () => () => {},
        unregisterAsset: () => {},
        hasError: !1,
        isLoading: !0,
      });
      function c(e) {
        return (0, a.vq)(e, HTMLImageElement)
          ? e.complete
          : (0, a.vq)(e, HTMLVideoElement)
            ? e.readyState >= 2
            : !!(0, a.vq)(e, HTMLDivElement) || !0;
      }
      function E(e) {
        return (0, a.vq)(e, HTMLImageElement)
          ? e.getAttribute("src")
          : (0, a.vq)(e, HTMLVideoElement)
            ? (e.querySelectorAll("source")[0]?.getAttribute("src") ?? "video")
            : ((0, a.vq)(e, HTMLDivElement), e.tagName);
      }
      function v(e) {
        let { children: t, isPreview: n = !1, source: v, questId: f } = e,
          [_, m] = l.useState(!1),
          [T, g] = l.useState(new Set()),
          [H, L] = l.useState(!1),
          p = l.useRef(!1);
        l.useEffect(() => {
          let e = new Set();
          for (let t of T) c(t) || e.add(t);
          e.size !== T.size && g(e);
        }, [T]);
        let S = l.useCallback(
            (e) => {
              let {
                assetNode: t,
                nodeId: r,
                errorPrefix: l,
                errorMessage: u,
              } = e;
              if (n || null == v) return;
              let d = (0, a.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
              s.default.track(o.HAw.QUEST_ASSET_LOADING_FAILURE, {
                source: v,
                quest_id: f,
                asset_id: E(t),
                video_network_state: d,
              }),
                i.A.captureException(
                  Error(`${l}: ${null != u ? `${u}, ` : ""}${E(t)}, ${r}`),
                  { tags: { source: v } },
                ),
                m(!0);
            },
            [n, v, f],
          ),
          A = l.useCallback((e) => {
            g((t) => {
              let n = new Set(t);
              return n.delete(e), n;
            });
          }, []),
          M = l.useCallback(
            (e, t) => {
              L(!0);
              let n = (0, a.vq)(e, HTMLImageElement)
                  ? "load"
                  : (0, a.vq)(e, HTMLVideoElement)
                    ? "canplaythrough"
                    : ((0, a.vq)(e, HTMLDivElement), "load"),
                r = new AbortController(),
                l = new u.A();
              function s() {
                l.succeed(), A(e), e.removeEventListener(n, s);
              }
              function i(n) {
                d(),
                  A(e),
                  S({
                    assetNode: e,
                    nodeId: t,
                    errorPrefix: "Error loading asset",
                    errorMessage: "message" in n ? n.message : null,
                  });
              }
              function o(t) {
                l.fails < 3 && (0, a.vq)(e, HTMLVideoElement)
                  ? l.fail(() => {
                      e.load();
                    })
                  : i(t);
              }
              if (
                (c(e) ||
                  (g((t) => {
                    let n = new Set(t);
                    return n.add(e), n;
                  }),
                  e.addEventListener(n, s)),
                e.addEventListener("error", i, { signal: r.signal }),
                (0, a.vq)(e, HTMLVideoElement))
              ) {
                let t = e.querySelectorAll("source"),
                  n = t[t.length - 1];
                n?.addEventListener("error", o, { signal: r.signal });
              }
              function d() {
                if (
                  (l.cancel(),
                  r.abort(),
                  e.removeEventListener(n, s),
                  e.removeEventListener("error", i),
                  (0, a.vq)(e, HTMLVideoElement))
                ) {
                  let t = e.querySelectorAll("source"),
                    n = t[t.length - 1];
                  n?.removeEventListener("error", o);
                }
              }
              return d;
            },
            [S, A],
          ),
          C = l.useMemo(() => T.size > 0 || !H, [H, T]);
        l.useEffect(() => {
          C || (p.current = !0);
        }, [C]);
        let k = l.useMemo(
          () => ({
            registerAsset: M,
            unregisterAsset: A,
            hasError: _,
            isLoading: C && !p.current,
          }),
          [M, A, _, C],
        );
        return (0, r.jsx)(d.Provider, { value: k, children: t });
      }
      function f(e) {
        let { id: t, children: n } = e,
          { registerAsset: r, unregisterAsset: u } = l.useContext(d),
          a = l.useRef(null);
        return (
          l.useEffect(() => {
            let e,
              n = a.current;
            return (
              null != n && (e = r(n, t)),
              () => {
                e?.(), null != n && u(n);
              }
            );
          }, [r, u, t]),
          n(a)
        );
      }
      function _() {
        let { hasError: e, isLoading: t } = l.useContext(d);
        return { hasError: e, isLoading: t };
      }
    },
  },
]);
//# sourceMappingURL=36561.fe695f42dbbb26e9.js.map
