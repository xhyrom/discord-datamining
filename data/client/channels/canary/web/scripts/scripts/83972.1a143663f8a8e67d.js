"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83972"],
  {
    430159(e, n, t) {
      t.d(n, { A: () => F });
      var r = t(923457),
        i = t(228366),
        o = t(49229),
        c = t(636537),
        a = t(765178),
        l = t(157559),
        u = t(845584),
        s = t(652215),
        d = t(985018);
      function f(e) {
        let n = new u.LG(e).getAnyErrorMessage();
        l.A.show({
          title: d.intl.string(d.t["328j/I"]),
          body: null != n ? n : d.intl.string(d.t.fEptJP),
        });
      }
      async function A(e) {
        let { userId: n, applicationId: t, onSuccess: r } = e;
        try {
          await c.Bo.del({
            url: s.Rsh.USER_GAME_RELATIONSHIP(n, t),
            oldFormErrors: !0,
            rejectWithError: !1,
          }),
            r();
        } catch (e) {
          f(e);
        }
      }
      let R = async function (e) {
          let { userId: n, applicationId: t } = e;
          await A({
            userId: n,
            applicationId: t,
            onSuccess: () => {
              a.O.announce(d.intl.string(d.t.zRf8cO));
            },
          });
        },
        E = function (e) {
          let { userId: n, applicationId: t } = e;
          return (function (e) {
            let { userId: n, applicationId: t, onSuccess: r, type: i } = e;
            return c.Bo.put({
              url: s.Rsh.USER_GAME_RELATIONSHIP(n, t),
              body: { type: i },
              oldFormErrors: !0,
              rejectWithError: !1,
            })
              .then(() => {
                r();
              })
              .catch((e) => (f(e), Promise.reject(e)));
          })({
            userId: n,
            applicationId: t,
            type: s.eA$.FRIEND,
            onSuccess: () => {
              a.O.announce(d.intl.string(d.t.taJiuc));
            },
          });
        },
        S = async function (e) {
          let { userId: n, applicationId: t } = e;
          await A({
            userId: n,
            applicationId: t,
            onSuccess: () => {
              a.O.announce(d.intl.string(d.t.XMf21q));
            },
          });
        };
      var h = t(207560);
      let p = (0, t(945810).mj)({
        kind: "user",
        name: "2025-10-friend-request-alerts-v2",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
      });
      var y = t(994500),
        I = t(627968);
      t(64700);
      var m = t(192308),
        C = t(954571),
        _ = t(646363);
      function g(e) {
        let { onConfirm: n, onFinally: r } = e;
        C.default.track(s.HAw.OPEN_MODAL, { type: _.C }),
          (0, m.openModalLazy)(async () => {
            let { default: e } = await t.e("52049").then(t.bind(t, 469083));
            return (t) => {
              let { onClose: i, ...o } = t;
              return (0, I.jsx)(e, {
                onConfirm: n,
                onClose: async () => {
                  await i(), r?.();
                },
                ...o,
              });
            };
          });
      }
      function T(e) {
        let {
          userId: n,
          applicationId: t,
          location: r,
          confirmStrangerRequest: i = !1,
        } = e;
        return null != t
          ? E({ userId: n, applicationId: t })
          : o.A.acceptFriendRequest({
              userId: n,
              confirmStrangerRequest: i,
              context: { location: r },
            });
      }
      function N(e, n) {
        return e?.body?.code === s.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
          ? (i.h.dispatch({
              type: "UPDATE_STRANGER_STATUS",
              userId: n.userId,
              isStranger: !0,
            }),
            g({
              onConfirm: () => {
                T({ ...n, confirmStrangerRequest: !0 }), n.onConfirm?.();
              },
              onCancel: () => {
                n.onCancel?.();
              },
            }),
            !0)
          : (e?.ok &&
              i.h.dispatch({
                type: "UPDATE_STRANGER_STATUS",
                userId: n.userId,
                isStranger: !1,
              }),
            !1);
      }
      let F = {
        removeFriend: function (e) {
          let { userId: n, applicationId: t, location: r } = e;
          null != t
            ? R({ userId: n, applicationId: t })
            : o.A.removeFriend(n, { location: r });
        },
        cancelFriendRequest: function (e) {
          let { userId: n, applicationId: t, location: r } = e;
          return null != t
            ? S({ userId: n, applicationId: t })
            : o.A.cancelFriendRequest(n, { location: r });
        },
        acceptFriendRequest: T,
        maybeConfirmFriendRequestAccept: function (e) {
          let {
              userId: n,
              applicationId: t,
              location: i,
              onConfirm: o,
              onCancel: c,
              onFinally: a,
            } = e,
            l = (0, h.To)(r.p.FRIEND_REQUEST_STRANGER_CONFIRMATION),
            u = p.getConfig({
              location: "maybeConfirmFriendRequestAccept",
            }).enabled,
            s = y.A.isStranger(n);
          return null == t && (l || u) && !1 !== s
            ? s
              ? void g({
                  onConfirm: () => {
                    T({
                      userId: n,
                      applicationId: t,
                      location: i,
                      confirmStrangerRequest: !0,
                    }),
                      o?.();
                  },
                  onCancel: () => {
                    c?.();
                  },
                  onFinally: () => {
                    a?.();
                  },
                })
              : void T({ userId: n, applicationId: t, location: i })
                  .then((e) => {
                    N(e, {
                      userId: n,
                      applicationId: t,
                      location: i,
                      onConfirm: o,
                      onCancel: c,
                    }) || o?.();
                  })
                  .catch((e) => {
                    N(e, {
                      userId: n,
                      applicationId: t,
                      location: i,
                      onConfirm: o,
                      onCancel: c,
                    });
                  })
                  .finally(() => {
                    a?.();
                  })
            : T({
                userId: n,
                applicationId: t,
                location: i,
                confirmStrangerRequest: !0,
              }).then(() => {
                o?.(), a?.();
              });
        },
      };
    },
  },
]);
//# sourceMappingURL=83972.1a143663f8a8e67d.js.map
