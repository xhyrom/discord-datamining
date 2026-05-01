"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14224"],
  {
    70963(t, i, n) {
      n.d(i, { Ay: () => M, M: () => D, om: () => C });
      var e = n(627968);
      n(64700);
      var l = n(17928),
        r = n(956793),
        s = n(323073),
        c = n(378570),
        o = n(790535),
        d = n(576705),
        u = n(977997),
        a = n(939496),
        g = n(993401),
        A = n(652215),
        h = n(996988),
        p = n(985018);
      function C(t) {
        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return i
          ? p.intl.string(p.t["3xjX0U"])
          : t.isDM() || t.isGroupDM()
            ? p.intl.string(p.t["7hwn2A"])
            : t.isGuildStageVoice()
              ? p.intl.string(p.t.Acqcot)
              : p.intl.string(p.t.BXxdl7);
      }
      function D(t) {
        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return i
          ? p.intl.string(p.t.VJlc0S)
          : t.isDM() || t.isGroupDM()
            ? p.intl.string(p.t.ozoE2A)
            : t.isGuildStageVoice()
              ? p.intl.string(p.t["7vb2cc"])
              : p.intl.string(p.t["96ANUN"]);
      }
      function M(t) {
        let { channel: i, onAction: n, onClose: p } = t,
          { themeType: M } = (0, a.E)(),
          v = M === h.d.MODAL_V2,
          G = (0, l.bG)([u.A], () => u.A.isInChannel(i.id));
        if (
          !(0, l.bG)([d.A], () => {
            let t = (0, s.r9)() && (0, s.UK)(i.id);
            return (i.isPrivate() || d.A.can(A.xBc.CONNECT, i)) && !t;
          })
        )
          return null;
        let N = M === h.d.MODAL || M === h.d.MODAL_V2;
        return (0, e.jsx)(g.FD, {
          text: G ? C(i, N) : D(i, N),
          fullWidth: !v,
          onClick: (t) => {
            t.stopPropagation(),
              n?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
              i.isGuildStageVoice()
                ? (0, o.av)(i)
                : (r.default.selectVoiceChannel(i.id), (0, c.iN)(i.id)),
              p?.();
          },
        });
      }
    },
  },
]);
//# sourceMappingURL=14224.5239ec8c4eefbdd5.js.map
