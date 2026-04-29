"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53203"],
  {
    619006(t, o, e) {
      e.d(o, { XC: () => _, os: () => r, qK: () => p });
      var n = e(636537),
        a = e(228366),
        i = e(545868),
        c = e(652215);
      function r(t, o) {
        n.Bo.get({
          url: c.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(t, o),
          rejectWithError: !0,
        })
          .then((t) => {
            let e = [];
            t.body.length > 0 &&
              (e = t.body.map((t) =>
                t.map((t) => ({
                  connectionType: t.connection_type,
                  connectionMetadataField: t.connection_metadata_field,
                  applicationId: t.application_id,
                  operator: t.operator,
                  value: t.value,
                })),
              )),
              a.h.dispatch({
                type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                roleId: o,
                roleConnectionConfigurations: e,
              });
          })
          .catch(() => {});
      }
      async function p(t, o, e) {
        let r = e.map((t) =>
            t.map((t) => ({
              connection_type: t.connectionType,
              connection_metadata_field: t.connectionMetadataField,
              application_id: t.applicationId,
              operator: t.operator,
              value: t.value,
            })),
          ),
          p = await n.Bo.put({
            url: c.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(t, o),
            body: 0 === r.length ? [] : r,
            oldFormErrors: !0,
            rejectWithError: !1,
          }).then((t) => {
            let o = [];
            return (
              t.body.length > 0 &&
                (o = t.body.map((t) =>
                  t.map((t) => ({
                    connectionType: t.connection_type,
                    connectionMetadataField: t.connection_metadata_field,
                    applicationId: t.application_id,
                    operator: t.operator,
                    value: t.value,
                  })),
                )),
              o
            );
          }),
          _ = await (0, i.a)(t, o, !1);
        null != _ &&
          a.h.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: t,
            roleId: o,
            count: _,
          }),
          a.h.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: o,
            roleConnectionConfigurations: p,
          });
      }
      async function _() {
        return (
          await n.Bo.get({
            url: c.Rsh.APPLICATION_USER_ROLE_CONNECTIONS,
            rejectWithError: !1,
          })
        ).body;
      }
    },
  },
]);
//# sourceMappingURL=53203.07c26627b1219988.js.map
