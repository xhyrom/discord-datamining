"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78412"],
  {
    219271(e, r, i) {
      i.d(r, { u: () => _ });
      var s = i(636537),
        t = i(228366),
        a = i(153488),
        o = i(427358),
        n = i(652215);
      function _() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return o.A.shouldFetch() && a.A.hasConsented(n.YAq.PERSONALIZATION)
          ? (t.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            s.Bo.get({
              url: n.Rsh.USER_AFFINITIES_V2,
              retries: 3 * !!e,
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then(
              (e) => {
                let { body: r } = e;
                t.h.dispatch({
                  type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                  affineUsers: r.user_affinities.map((e) => ({
                    otherUserId: e.other_user_id,
                    userSegment: e.user_segment,
                    otherUserSegment: e.other_user_segment,
                    isFriend: e.is_friend,
                    dmProbability: e.dm_probability ?? 0,
                    dmRank: e.dm_rank ?? 0,
                    vcProbability: e.vc_probability ?? 0,
                    vcRank: e.vc_rank ?? 0,
                    serverMessageProbability: e.server_message_probability ?? 0,
                    serverMessageRank: e.server_message_rank ?? 0,
                    communicationProbability: e.communication_probability ?? 0,
                    communicationRank: e.communication_rank ?? 0,
                  })),
                });
              },
              () => {
                t.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
              },
            ))
          : Promise.resolve();
      }
    },
  },
]);
//# sourceMappingURL=78412.7a33b03931d646c4.js.map
