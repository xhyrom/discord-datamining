"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16916"],
  {
    74847(n, a, c) {
      c.d(a, { t: () => s });
      var t = c(734057),
        e = c(576705),
        i = c(652215);
      function s(n) {
        let a = t.A.getChannel(n),
          c = a?.isPrivate(),
          s = a?.isForumChannel();
        return (
          c ||
          (e.A.can(i.xBc.ATTACH_FILES, a) &&
            e.A.can(i.xBc.SEND_MESSAGES, a) &&
            !s)
        );
      }
    },
  },
]);
//# sourceMappingURL=16916.085823ce521d7a20.js.map
