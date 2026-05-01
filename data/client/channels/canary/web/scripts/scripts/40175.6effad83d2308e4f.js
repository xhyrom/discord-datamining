"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40175"],
  {
    422258(n, t, e) {
      e.d(t, {
        JD: () => y,
        Jz: () => N,
        S_: () => w,
        fv: () => D,
        i_: () => U,
        od: () => g,
        tV: () => L,
        w6: () => F,
        zN: () => b,
      });
      var i = e(735438),
        a = e.n(i),
        o = e(873298),
        l = e(406935),
        r = e(157559),
        f = e(594061),
        u = e(734057),
        s = e(576705),
        c = e(935208),
        _ = e(181079),
        E = e(668267),
        p = e(349828),
        A = e(818348),
        d = e(985018);
      function I(n) {
        let t = 0;
        for (let e in n) {
          let i = n[e];
          null != i && null != i.position && (t = Math.max(t, i.position));
        }
        return t + 1;
      }
      function v(n) {
        for (let t in n) {
          let e = n[t];
          if (null == e) {
            delete n[t];
            continue;
          }
          if (e.type === o.Ip.CATEGORY) continue;
          let i = u.A.getChannel(t);
          if (null == i || (!i.isPrivate() && !s.A.can(A.xB.VIEW_CHANNEL, i))) {
            delete n[t];
            continue;
          }
        }
      }
      function C(n, t) {
        let e = n[t];
        if (null == e || e.parentId === p.O8) return;
        let i = null != e.parentId ? n[e.parentId] : null;
        (null == i || i.type !== o.Ip.CATEGORY) && (e.parentId = p.O8);
      }
      function h(n) {
        return v(n), a().size(n) >= p.lj;
      }
      function O() {
        r.A.show({
          title: d.intl.string(d.t["+XYXtZ"]),
          body: d.intl.formatToPlainString(d.t.JaIyFi, { count: p.lj }),
        });
      }
      function R() {
        r.A.show({
          title: d.intl.string(d.t.iufib1),
          body: d.intl.string(d.t.eAn6z2),
          onCloseCallback: () => {
            window.location.reload();
          },
        });
      }
      function T(n) {
        return Object.keys(n).length;
      }
      function S(n, t) {
        return t === o.Ip.CATEGORY ? null : (u.A.getChannel(n)?.type ?? null);
      }
      function N(n, t) {
        let e =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "channel_context_menu";
        w([n], t, e);
      }
      function w(n, t) {
        let e =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "channel_context_menu",
          i = n.filter((n) => !_.A.isFavorite(n));
        0 !== i.length &&
          f.wc.updateAsync(
            "favorites",
            (n) => {
              let a = !1;
              for (let l of i) {
                if (h(n.favoriteChannels)) {
                  if ((O(), !a)) return !1;
                  break;
                }
                (n.favoriteChannels[l] = o.wL.create({
                  nickname: "",
                  type: o.Ip.REFERENCE_ORIGINAL,
                  position: I(n.favoriteChannels),
                  parentId: t ?? p.O8,
                })),
                  v(n.favoriteChannels),
                  C(n.favoriteChannels, l),
                  (a = !0),
                  (0, E.LO)(
                    e,
                    S(l, o.Ip.REFERENCE_ORIGINAL),
                    T(n.favoriteChannels),
                  );
              }
            },
            f.Sb.FREQUENT_USER_ACTION,
            R,
          );
      }
      function U(n) {
        let { trackAnalytics: t = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = _.A.getFavorite(n);
        if (null == e) return;
        let i = t ? S(n, e.type) : null;
        f.wc.updateAsync(
          "favorites",
          (a) => {
            if ((delete a.favoriteChannels[n], e.type === o.Ip.CATEGORY))
              for (let t in a.favoriteChannels)
                a.favoriteChannels[t].parentId === n &&
                  (a.favoriteChannels[t].parentId = p.O8);
            v(a.favoriteChannels), t && (0, E.TX)(i, T(a.favoriteChannels));
          },
          f.Sb.INFREQUENT_USER_ACTION,
          R,
        );
      }
      function F(n, t) {
        _.A.isFavorite(n) &&
          f.wc.updateAsync(
            "favorites",
            (e) => {
              e.favoriteChannels[n].nickname = t ?? "";
            },
            f.Sb.INFREQUENT_USER_ACTION,
            R,
          );
      }
      function g(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "modal",
          e = c.default.fromTimestamp(Date.now());
        f.wc.updateAsync(
          "favorites",
          (i) => {
            if (h(i.favoriteChannels)) return O(), !1;
            (i.favoriteChannels[e] = o.wL.create({
              nickname: n,
              type: o.Ip.CATEGORY,
              position: I(i.favoriteChannels),
              parentId: p.O8,
            })),
              (0, E.LO)(t, S(e, o.Ip.CATEGORY), T(i.favoriteChannels));
          },
          f.Sb.FREQUENT_USER_ACTION,
          R,
        );
      }
      function D(n) {
        U(n);
      }
      function b(n) {
        0 !== n.length &&
          f.wc.updateAsync(
            "favorites",
            (t) => {
              for (let e of n) {
                let n = e.id;
                null != e.position &&
                  (t.favoriteChannels[n].position = e.position),
                  void 0 !== e.parent_id &&
                    ((t.favoriteChannels[n].parentId = e.parent_id ?? p.O8),
                    C(t.favoriteChannels, n));
              }
              (0, E.P)();
            },
            f.Sb.FREQUENT_USER_ACTION,
            R,
          );
      }
      function y(n, t) {
        f.wc.updateAsync(
          "favorites",
          (e) => {
            (e.favoriteChannels[n].parentId = t ?? p.O8),
              C(e.favoriteChannels, n);
          },
          f.Sb.FREQUENT_USER_ACTION,
          R,
        );
      }
      function L(n) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "settings_page";
        f.wc.updateAsync(
          "favorites",
          (e) => {
            (e.guildVisible = l._t.create({ value: n })), (0, E.uS)(t, n);
          },
          f.Sb.INFREQUENT_USER_ACTION,
          R,
        );
      }
    },
    668267(n, t, e) {
      e.d(t, {
        Kg: () => u,
        LO: () => s,
        P: () => _,
        TX: () => c,
        U5: () => d,
        XC: () => p,
        mv: () => f,
        tC: () => A,
        uS: () => E,
      });
      var i = e(967198),
        a = e(954571),
        o = e(5180),
        l = e(652215);
      let r = "manual_browsing";
      function f(n) {
        (0, o.ai)(i.A.getGuildId()) || (r = n);
      }
      function u() {
        let n = r;
        return (r = "manual_browsing"), n;
      }
      function s(n, t, e) {
        a.default.track(l.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, {
          source: n,
          channel_type: t,
          total_favorites: e,
        });
      }
      function c(n, t) {
        a.default.track(l.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, {
          channel_type: n,
          total_favorites: t,
        });
      }
      function _() {
        a.default.track(l.HAw.FAVORITES_GUILD_ORDER_UPDATED);
      }
      function E(n, t) {
        a.default.track(l.HAw.FAVORITES_GUILD_SETTING_TOGGLED, {
          source: n,
          is_visible: t,
        });
      }
      function p(n) {
        a.default.track(l.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, {
          source: n,
        });
      }
      function A(n) {
        a.default.track(l.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: n });
      }
      function d(n, t, e, i) {
        a.default.track(l.HAw.FAVORITES_GUILD_VIEWED, {
          source: n,
          total_favorites: t,
          is_xp_enabled: e,
          is_premium_tier_2: i,
        });
      }
    },
  },
]);
//# sourceMappingURL=40175.6effad83d2308e4f.js.map
