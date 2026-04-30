"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2329"],
  {
    755584(e, t, r) {
      r.d(t, { A: () => _ });
      var i = r(110259),
        n = r(933681),
        a = r(228366),
        o = r(568185),
        p = r(543465),
        d = r(477427),
        s = r(499785),
        l = r(832712),
        c = r(652215),
        h = r(355097);
      let _ = {
        createChannel(e) {
          let {
            guildId: t,
            type: r,
            name: _,
            permissionOverwrites: A = [],
            bitrate: E,
            userLimit: N,
            parentId: y,
            skuId: u,
            branchId: C,
          } = e;
          a.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: t,
            channelType: r,
          });
          let b = { type: r, name: _, permission_overwrites: A };
          if (
            (null != E && E !== c.gp3 && (b.bitrate = E),
            null != N && N > 0 && (b.user_limit = N),
            null != y && (b.parent_id = y),
            r === c.rbe.GUILD_STORE)
          ) {
            if (null == u) throw Error("Unexpected missing SKU");
            (b.sku_id = u), (b.branch_id = C);
          }
          return s.A.post({
            url: c.Rsh.GUILD_CHANNELS(t),
            body: b,
            oldFormErrors: !0,
            trackedActionData: {
              event: i.NetworkActionNames.CHANNEL_CREATE,
              properties: (e) =>
                (0, n.e0)({
                  is_private: A.length > 0,
                  channel_id: e?.body?.id,
                  channel_type: e?.body?.type,
                }),
            },
            rejectWithError: !1,
          }).then(
            (e) => (
              p.Ay.isOptInEnabled(t) &&
                l.A.updateChannelOverrideSettings(
                  t,
                  e.body.id,
                  { flags: h.vv.OPT_IN_ENABLED },
                  d.fd.OptedIn,
                ),
              o.A.checkGuildTemplateDirty(t),
              e
            ),
            (e) => {
              throw (
                (a.h.dispatch({
                  type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                  errors: e.body,
                }),
                e)
              );
            },
          );
        },
        createRoleSubscriptionTemplateChannel: (e, t, r, a) =>
          s.A.post({
            url: c.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: r, topic: a },
            oldFormErrors: !0,
            trackedActionData: {
              event: i.NetworkActionNames.CHANNEL_CREATE,
              properties: (e) =>
                (0, n.e0)({
                  is_private: !0,
                  channel_id: e?.body?.id,
                  channel_type: e?.body?.type,
                }),
            },
            rejectWithError: !1,
          }),
      };
    },
  },
]);
//# sourceMappingURL=2329.e653c11ce860ec2d.js.map
