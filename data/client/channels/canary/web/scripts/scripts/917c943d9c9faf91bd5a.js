"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30887"],
  {
    943209: function (e, t, n) {
      n.d(t, {
        GB: function () {
          return E;
        },
        Rh: function () {
          return c;
        },
        Yz: function () {
          return o;
        },
      }),
        n(411104),
        n(729594);
      var i = n(261470);
      n(243814);
      var a = n(544891),
        r = n(570140);
      n(591759);
      var s = n(628566),
        A = n(981631);
      n(689938);
      function c() {
        s.Z.getApplicationsShelfFetchState() === s.M.NOT_FETCHED &&
          (r.Z.dispatch({ type: "APPLICATIONS_SHELF_FETCH_START" }),
          a.tn
            .get(A.ANM.APPLICATIONS_SHELF)
            .then((e) =>
              r.Z.dispatch({
                type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                applications: e.body.applications,
              }),
            )
            .catch((e) =>
              r.Z.dispatch({ type: "APPLICATIONS_SHELF_FETCH_FAIL" }),
            ));
      }
      function o(e) {
        let t = new i.Z(1e3, 5e3);
        r.Z.dispatch({
          type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
          channelId: e,
        }),
          a.tn
            .get({
              url: A.ANM.CHANNEL_INTEGRATIONS(e),
              backoff: t,
              retries: 10,
            })
            .then((t) => {
              r.Z.dispatch({
                type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                channelId: e,
                integrations: t.body,
              });
            })
            .catch(() => {
              r.Z.dispatch({
                type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                channelId: e,
              });
            });
      }
      function E(e, t) {
        return a.tn.del(A.ANM.CHANNEL_INTEGRATION(e, t)).then((e) => {
          var t;
          if (null === (t = e.body) || void 0 === t ? void 0 : t.message)
            throw Error(e.body.message);
        });
      }
    },
    496281: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n(735250);
      n(470079);
      var a = n(481060),
        r = n(239091),
        s = n(299206),
        A = n(943209),
        c = n(689938);
      function o(e) {
        let { channel: t, integration: n, onSelect: o } = e,
          E = (0, s.Z)({ id: t.id, label: c.Z.Messages.COPY_ID_APPLICATION });
        return (0, i.jsxs)(a.Menu, {
          "aria-label": c.Z.Messages.MANAGE_INTEGRATION,
          navId: "manage-integration",
          onClose: r.Zy,
          onSelect: o,
          children: [
            (0, i.jsx)(a.MenuGroup, {
              children: (0, i.jsx)(a.MenuItem, {
                id: "remove-integration",
                label:
                  c.Z.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION,
                action: () => {
                  (0, A.GB)(t.id, n.application.id), null != o && o();
                },
                color: "danger",
              }),
            }),
            (0, i.jsx)(a.MenuGroup, { children: E }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=917c943d9c9faf91bd5a.js.map
