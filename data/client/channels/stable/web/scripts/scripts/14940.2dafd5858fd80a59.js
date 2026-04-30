"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14940"],
  {
    539895(e, l, n) {
      let t;
      n.d(l, { A: () => S }), n(938796);
      var i = n(17928),
        u = n(228366),
        r = n(376728),
        o = n(346542),
        s = n(976860),
        d = n(95701),
        a = n(495544),
        c = n(734057),
        f = n(696451),
        A = n(71393),
        _ = n(299091),
        E = n(576705),
        I = n(994500),
        v = n(287809),
        N = n(860689),
        O = n(19575),
        h = n(260451),
        C = n(652215),
        R = n(746080);
      let p = C.BRT.APP,
        T = !1,
        L = !1,
        g = null,
        P = null;
      function V() {
        T = !0;
      }
      class y extends i.Ay.Store {
        static displayName = "InviteModalStore";
        initialize() {
          this.waitFor(a.default, c.A, f.Ay, A.A, _.A, E.A, I.A, v.default);
        }
        isOpen() {
          let e = __OVERLAY__ ? C.BRT.OVERLAY : C.BRT.APP;
          return !!(T && null != P && p === e);
        }
        getProps() {
          return {
            invite: P?.invite ?? null,
            error: null != t && "" !== t ? t : null,
            submitting: L,
            invite_instance_id: g,
          };
        }
      }
      let S = new y(u.h, {
        OVERLAY_INITIALIZE: V,
        CONNECTION_OPEN: V,
        CONNECTION_CLOSED: function () {
          T = !1;
        },
        INVITE_MODAL_OPEN: function (e) {
          let l = e.invite;
          if (null == l) return !1;
          if (
            l.state !== C.elq.EXPIRED &&
            l.state !== C.elq.BANNED &&
            l.state !== C.elq.ERROR
          ) {
            let { channel: e, guild: n } = l;
            if (null == e) return !1;
            if ((0, d.MK)(e.type)) {
              if (null != c.A.getChannel(e.id))
                return (0, s.uh)(C.ME, e.id), O.Ay.focus(), !1;
            } else {
              if (null == n) return !1;
              if (null != A.A.getGuild(n.id) && !(0, o.G4)(l)) {
                let e = !1;
                if (null != l.roles && l.roles.length > 0) {
                  let t = a.default.getId(),
                    i = f.Ay.getMember(n.id, t),
                    u = new Set(i?.roles ?? []);
                  e = l.roles.some((e) => !u.has(e.id));
                }
                if (!e) {
                  let e = (function (e) {
                    if ((0, o.d4)(e)) return R.VV.ROLE_SUBSCRIPTIONS;
                    let { channel: l } = e;
                    if (null != l) {
                      let e = c.A.getChannel(l.id);
                      if (E.A.can(C.xBc.VIEW_CHANNEL, e)) return l.id;
                    }
                    return null;
                  })(l);
                  return (0, s.uh)(n.id, e), O.Ay.focus(), !1;
                }
              }
            }
          }
          if (null != P && P.invite.code === l.code) return !1;
          if (
            (null != P && null != P.resolve && P.resolve(),
            (p = e.context),
            (t = null),
            (L = !1),
            (g = e.invite_instance_id ?? null),
            (P = {
              invite: (function (e) {
                let {
                    approximate_member_count: l,
                    approximate_presence_count: n,
                    code: t,
                    state: i,
                    target_type: u,
                    target_user: r,
                    target_application: o,
                    type: s,
                    channel: d,
                    guild: a,
                    is_nickname_changeable: c,
                    flags: f,
                  } = e,
                  A = {
                    code: t,
                    state: i,
                    approximate_member_count: l,
                    approximate_presence_count: n,
                    target_type: u,
                    target_user: r,
                    target_application: o,
                    type: s,
                    is_nickname_changeable: c,
                    flags: f,
                  };
                return (
                  null != d && (A.channel = { ...d }),
                  null != a && (A.guild = (0, N.DY)(a)),
                  null != e.inviter && (A.inviter = { ...e.inviter }),
                  null != e.roles && (A.roles = e.roles),
                  A
                );
              })(l),
              resolve: e.resolve,
            }),
            null != e.received_installation_id)
          ) {
            let { code: l, received_installation_id: n } = e;
            u.h.wait(() => r.Ay.setReceivedInstallationIdForInviteCode(l, n));
          }
          h.SH.getConfig({ location: "accept_invite_modal" }).enabled &&
            r.Ay.fetchFriendMembers(l.code);
        },
        INVITE_MODAL_CLOSE: function () {
          (t = null),
            (L = !1),
            (g = null),
            null != P && (P.resolve?.(), (P = null));
        },
        INVITE_ACCEPT: function () {
          L = !0;
        },
        INVITE_MODAL_ERROR: function (e) {
          let { message: l } = e;
          (t = l), (L = !1);
        },
      });
    },
  },
]);
//# sourceMappingURL=14940.2dafd5858fd80a59.js.map
