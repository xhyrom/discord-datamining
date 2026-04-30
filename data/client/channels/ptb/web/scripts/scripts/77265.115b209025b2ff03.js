"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77265"],
  {
    824552(t, e, r) {
      r.d(e, { A: () => o });
      var l = r(636537),
        a = r(451988),
        i = r(228366),
        p = r(546183),
        h = r(652215);
      let c = new a.OC(
        u,
        (t) =>
          p.default.getFetchStateForApplication(t) !== p.FetchState.FETCHING,
      );
      async function u(t) {
        i.h.dispatch({
          type: "USER_AUTHORIZED_APPS_REQUEST",
          request:
            null == t
              ? { type: "full" }
              : { type: "partial", applicationIds: t },
        }),
          await l.Bo.get({
            url: h.Rsh.OAUTH2_TOKENS,
            oldFormErrors: !0,
            rejectWithError: !0,
            query: { application_ids: t },
          }).then(
            (e) =>
              i.h.dispatch({
                type: "USER_AUTHORIZED_APPS_UPDATE",
                isFullFetch: null == t,
                tokens: (function (t, e) {
                  let r = Object.fromEntries(e?.map((t) => [t, null]) ?? []);
                  for (let e of t) r[e.application.id] = e;
                  return r;
                })(e.body, t),
              }),
            () =>
              i.h.dispatch({
                type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                request:
                  null == t
                    ? { type: "full" }
                    : { type: "partial", applicationIds: t },
              }),
          );
      }
      let o = {
        fetch(t) {
          p.default.getFetchState() !== p.FetchState.FETCHING &&
            (null != t ? c.queue(t) : (c.reset(), u()));
        },
        delete(t) {
          l.Bo.del({
            url: h.Rsh.OAUTH2_TOKEN(t),
            oldFormErrors: !0,
            rejectWithError: !0,
          }).then(() => {
            this.fetch();
          });
        },
      };
    },
  },
]);
//# sourceMappingURL=77265.115b209025b2ff03.js.map
