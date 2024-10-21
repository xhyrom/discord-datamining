"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39955"],
  {
    547653: function (e, s, a) {
      a.r(s), a(47120);
      var t = a(200651),
        N = a(192379),
        o = a(481060),
        n = a(668781),
        C = a(787014),
        r = a(689938);
      s.default = function (e) {
        let { channelId: s, application: a, onClose: _, ...i } = e,
          [c, l] = N.useState(!1),
          S = async () => {
            try {
              l(!0), await C.ZP.removeLinkedLobby(s), _();
            } catch (e) {
              l(!1),
                n.Z.show({
                  title: r.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ERROR_TITLE,
                  body: r.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ERROR,
                });
            }
          };
        return (0, t.jsx)(o.ConfirmModal, {
          header: r.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ALERT_TITLE,
          confirmText: r.Z.Messages.CONFIRM,
          cancelText: r.Z.Messages.CANCEL,
          confirmButtonColor: o.Button.Colors.BRAND,
          onConfirm: S,
          loading: c,
          onClose: _,
          ...i,
          children: (0, t.jsx)(o.Text, {
            variant: "text-sm/normal",
            children:
              r.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING_ALERT_BODY.format({
                applicationName: a.name,
              }),
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=cf9f140e24e90fcddbd8.js.map
