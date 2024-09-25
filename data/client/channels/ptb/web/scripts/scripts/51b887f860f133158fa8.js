"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59257"],
  {
    384275: function (e, t, o) {
      var s = o(544891),
        r = o(570140),
        n = o(981631);
      t.Z = {
        fetch() {
          s.tn.get({ url: n.ANM.OAUTH2_TOKENS, oldFormErrors: !0 }).then(
            (e) =>
              r.Z.dispatch({
                type: "USER_AUTHORIZED_APPS_UPDATE",
                apps: e.body,
              }),
            () =>
              r.Z.dispatch({ type: "USER_AUTHORIZED_APPS_UPDATE", apps: [] }),
          );
        },
        delete(e) {
          s.tn
            .del({ url: n.ANM.OAUTH2_TOKEN(e), oldFormErrors: !0 })
            .then(() => {
              this.fetch();
            });
        },
      };
    },
    743161: function (e, t, o) {
      o.r(t);
      var s = o(735250),
        r = o(470079),
        n = o(442837),
        a = o(481060),
        l = o(541099),
        c = o(827498),
        d = o(421591),
        p = o(314734),
        E = o(689938),
        h = o(574455);
      t.default = r.memo(function (e) {
        let { channel: t, ...o } = e,
          i = (0, n.e7)([l.Z], () => l.Z.shouldShowModal());
        return (
          r.useEffect(() => {
            !i && (0, a.closeModalInAllContexts)(p.e9);
          }),
          (0, s.jsx)("span", {
            style: p.u$,
            children: (0, s.jsx)(a.ModalRoot, {
              className: h.root,
              "aria-label": E.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
              ...o,
              children: (0, s.jsx)(d.Z, { channel: t, entrypoint: c._b.VOICE }),
            }),
          })
        );
      });
    },
    574455: function (e, t, o) {
      e.exports = { root: "root_ebf21e" };
    },
  },
]);
//# sourceMappingURL=51b887f860f133158fa8.js.map
