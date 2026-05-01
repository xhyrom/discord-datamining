"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79707"],
  {
    46225(e, t, n) {
      n.d(t, { RD: () => A, U9: () => R }), n(321073);
      var i = n(64700),
        l = n(868714),
        r = n(975807),
        o = n(289919),
        u = n(954571),
        a = n(76843),
        c = n(975460),
        s = n(704824);
      let p = Symbol();
      var d = n(942370),
        _ = n(652215);
      let b = "AUTHORIZE_REQUEST",
        h = [d._.RPC, d._.WEB];
      function A(e) {
        var t, n;
        let l,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { debug: o = !1 } = r,
          u = (0, c.g)(e),
          a =
            ((t = u),
            (n = r),
            (l = R(
              i.useMemo(() => (null != t ? [t] : []), [t]),
              n,
            )).length > 0
              ? l[0]
              : null),
          p = a?.preferredFlow,
          d = null != p,
          { token: _, fetched: b } = (0, s.U)(u?.parentId ?? u?.id, {
            disableFetch: r.disableFetch,
          });
        return {
          fetched: b,
          hasAlreadyLinked: b && null != _,
          canStartAuthorization: d,
          startAuthorization: i.useCallback(
            (e) => (null == p ? null : (p.initiate(e), p.type)),
            [p],
          ),
          connectionApp: u,
          chosenFlow: p?.type ?? null,
          token: _,
          debug: o
            ? {
                isSubscribedToAuthorizeRequest:
                  a?.context?.isSubscribedToAuthorizeRequest ?? !1,
                oauth2Token: _,
                hasConnectionEntrypointUrl: u?.connectionEntrypointUrl != null,
                validFlows: a?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
        };
      }
      function f(e) {
        return o.A.listenIsSubscribed(e);
      }
      function R(e, t) {
        var n;
        let c,
          s,
          A = (0, l.A)(t?.allowedFlows ?? h),
          R =
            ((n = i.useCallback(
              () =>
                e.map((e) => ({
                  application: e,
                  isSubscribedToAuthorizeRequest: o.A.isSubscribed(e.id, b),
                })),
              [e],
            )),
            (c = i.useRef(p)),
            (s = i.useRef(n)),
            i.useSyncExternalStore(
              i.useCallback(
                (e) =>
                  f(() => {
                    (c.current = p), e();
                  }),
                [f],
              ),
              i.useCallback(
                () => (
                  s.current !== n && ((s.current = n), (c.current = p)),
                  c.current === p && (c.current = n()),
                  c.current
                ),
                [n],
              ),
            ));
        return i.useMemo(
          () =>
            R.map((e) => {
              let t = [];
              if (
                (A.includes(d._.RPC) &&
                  e.isSubscribedToAuthorizeRequest &&
                  t.push({
                    type: d._.RPC,
                    initiate(t) {
                      o.A.dispatchToSubscriptions(
                        b,
                        (t) => t.socket.application.id === e.application.id,
                        {},
                      ),
                        t.onConfirm?.(),
                        u.default.track(
                          _.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED,
                          {
                            location_stack: t.analyticsLocations,
                            application_id: e.application.id,
                            flow_type: d._.RPC,
                          },
                        );
                    },
                  }),
                A.includes(d._.WEB) &&
                  null != e.application.connectionEntrypointUrl)
              ) {
                let n = e.application.connectionEntrypointUrl;
                t.push({
                  type: d._.WEB,
                  initiate(t) {
                    (0, a.h)({
                      href: n,
                      onConfirm: () => {
                        (0, r.A)(n), t?.onConfirm?.();
                      },
                    }),
                      u.default.track(
                        _.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED,
                        {
                          location_stack: t.analyticsLocations,
                          application_id: e.application.id,
                          flow_type: d._.WEB,
                        },
                      );
                  },
                });
              }
              return {
                context: e,
                availableFlows: t,
                preferredFlow: t.length > 0 ? t[0] : null,
              };
            }),
          [R, A],
        );
      }
    },
    71526(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(64700);
      function l(e) {
        let t = (0, i.useRef)(!1),
          n = (0, i.useRef)(null);
        return t.current || ((t.current = !0), (n.current = e())), n;
      }
    },
  },
]);
//# sourceMappingURL=79707.06944cbb39031590.js.map
