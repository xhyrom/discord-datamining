"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42358"],
  {
    210995: function (e, s, a) {
      a.r(s);
      var t = a(735250);
      a(470079);
      var E = a(468026),
        c = a(434404),
        d = a(689938);
      s.default = (e) =>
        (0, t.jsx)(E.default, {
          title: d.Z.Messages.GEO_RESTRICTED_MODAL_TITLE,
          body: d.Z.Messages.GEO_RESTRICTED_MODAL_BODY.format({
            serverName: e.name,
          }),
          cancelText: d.Z.Messages.LEAVE_SERVER,
          onCancel: () => {
            c.Z.leaveGuild(e.guildId);
          },
          confirmText: d.Z.Messages.OK,
          ...e,
        });
    },
  },
]);
//# sourceMappingURL=d02fce2b7f960c435446.js.map
