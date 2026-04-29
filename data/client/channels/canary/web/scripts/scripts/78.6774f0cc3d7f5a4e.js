"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78"],
  {
    933725(t, r, e) {
      e.d(r, { m: () => s });
      var i = e(636537),
        d = e(228366),
        u = e(287809),
        a = e(652215);
      async function s(t, r) {
        try {
          let e = await i.Bo.put({
            url: a.Rsh.USER_SET_GUILD_IDENTITY,
            body: { identity_guild_id: t, identity_enabled: r },
            rejectWithError: !1,
          });
          return (
            e.ok &&
              d.h.dispatch({
                type: "CURRENT_USER_UPDATE",
                user: { ...u.default.getCurrentUser(), ...e.body },
              }),
            e
          );
        } catch (t) {
          return t;
        }
      }
    },
  },
]);
//# sourceMappingURL=78.6774f0cc3d7f5a4e.js.map
