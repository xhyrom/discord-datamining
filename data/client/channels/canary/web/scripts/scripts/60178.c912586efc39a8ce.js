"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60178"],
  {
    30793(e, t, n) {
      n.d(t, { A: () => L });
      var l = n(989349),
        E = n.n(l),
        r = n(17928),
        u = n(451988),
        s = n(228366),
        i = n(869038),
        S = n(7133),
        c = n(45938),
        o = n(652215);
      let _ = {},
        d = new Map(),
        C = [],
        f = [],
        a = [],
        A = new Set(),
        O = {},
        D = {},
        I = new Set();
      function T(e) {
        let t = S.A.createFromServer(e),
          n = t.code;
        if (d.has(n)) d.set(n, d.get(n).merge(t));
        else if ((d.set(n, t), null != t.expiresAt)) {
          let e = new u.Ep();
          (_[n] = e),
            (function e(t) {
              let n = d.get(t);
              if (null == n || null == n.expiresAt) return;
              let l = n.expiresAt.valueOf() - E()().valueOf();
              if (l <= 0) d.delete(t), delete _[t], p.emitChange();
              else {
                let n = _[t];
                if (null == n) return;
                n.start(Math.min(o.mnr, l), () => e(t));
              }
            })(n);
        }
      }
      function g(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !I.has(e.channel_id)) return !1;
        let n = (0, c.pF)(e)
          ? (0, c.e7)(e?.embeds != null ? e?.embeds[0].url : void 0)
          : (0, c.e7)(e.content);
        return (
          0 !== n.length &&
          (n.forEach((e) => {
            C.includes(e) ||
              a.includes(e) ||
              (h({ code: e }),
              s.h.wait(() => i.A.resolveGiftCode(e, !1, !0).catch(o.FXj)));
          }),
          !1)
        );
      }
      function h(e) {
        let { code: t } = e;
        C.includes(t) || (C = [...C, t]);
      }
      function F(e) {
        let { message: t } = e;
        return g(t, !0);
      }
      function U(e) {
        let { channelId: t, messages: n } = e;
        I.add(t), n.forEach((e) => g(e, !0));
      }
      function G(e) {
        let { firstMessages: t } = e;
        if (null == t) return !1;
        t?.forEach((e) => g(e));
      }
      class R extends r.Ay.Store {
        static displayName = "GiftCodeStore";
        get(e) {
          let t = d.get(e);
          return null == t || t.isExpired() ? null : t;
        }
        getError(e) {
          return null != e ? D[e] : null;
        }
        getForGifterSKUAndPlan(e, t, n) {
          return Array.from(d.values()).filter(
            (l) =>
              l.userId === e &&
              l.skuId === t &&
              (null == n || l.subscriptionPlanId === n) &&
              !l.isExpired(),
          );
        }
        getIsResolving(e) {
          return C.includes(e);
        }
        getIsResolved(e) {
          return a.includes(e);
        }
        getIsAccepting(e) {
          return f.includes(e);
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
          return A.has((0, c.Kx)(e, t));
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
          return O[(0, c.Kx)(e, t)];
        }
        getResolvingCodes() {
          return C;
        }
        getResolvedCodes() {
          return a;
        }
        getAcceptingCodes() {
          return f;
        }
      }
      let p = new R(s.h, {
          CONNECTION_OPEN: function () {
            return I.clear(), !1;
          },
          CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null != t && I.add(t), !1;
          },
          GIFT_CODE_RESOLVE: h,
          GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            return (
              (C = C.filter((e) => e !== t.code)),
              a.includes(t.code) || (a = [...a, t.code]),
              T(t)
            );
          },
          GIFT_CODE_RESOLVE_FAILURE: function (e) {
            let { code: t, error: n } = e;
            (C = C.filter((e) => e !== t)),
              a.includes(t) || (a = [...a, t]),
              null != n && (D[t] = n);
          },
          GIFT_CODE_REDEEM: function (e) {
            let { code: t } = e;
            f.includes(t) || (f = [...f, t]);
          },
          GIFT_CODE_REDEEM_SUCCESS: function (e) {
            let { code: t } = e;
            f = f.filter((e) => e !== t);
            let n = d.get(t);
            null != n && d.set(t, n.merge({ redeemed: !0, uses: n.uses + 1 }));
          },
          GIFT_CODE_REDEEM_FAILURE: function (e) {
            let { code: t, error: n } = e;
            f = f.filter((e) => e !== t);
            let l = d.get(t);
            if (((D[t] = n), null != l))
              switch (n.code) {
                case o.t02.UNKNOWN_GIFT_CODE:
                  d.set(t, l.set("revoked", !0));
                  break;
                case o.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                  d.set(t, l.set("uses", l.maxUses));
              }
          },
          GIFT_CODE_REVOKE_SUCCESS: function (e) {
            let { code: t } = e;
            d.delete(t);
            let n = _[t];
            null != n && (n.stop(), delete _[t]),
              a.includes(t) || (a = [...a, t]);
          },
          GIFT_CODE_CREATE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            T(t);
          },
          GIFT_CODES_FETCH: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            A.add((0, c.Kx)(t, n));
          },
          GIFT_CODES_FETCH_SUCCESS: function (e) {
            let { giftCodes: t, skuId: n, subscriptionPlanId: l } = e;
            t.forEach(T);
            let E = (0, c.Kx)(n, l);
            (O[E] = Date.now()), A.delete(E);
          },
          GIFT_CODES_FETCH_FAILURE: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            A.delete((0, c.Kx)(t, n));
          },
          MESSAGE_CREATE: F,
          MESSAGE_UPDATE: F,
          LOCAL_MESSAGES_LOADED: U,
          LOAD_MESSAGES_SUCCESS: U,
          LOAD_MESSAGES_AROUND_SUCCESS: U,
          LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) => g(e));
          },
          LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { pins: t } = e;
            t.forEach((e) => {
              let { message: t } = e;
              return g(t);
            });
          },
          SEARCH_MESSAGES_SUCCESS: function (e) {
            let { data: t } = e;
            t.forEach((e) => {
              let { messages: t } = e;
              t.forEach((e) => {
                e.forEach((e) => g(e));
              });
            });
          },
          GIFT_CODE_UPDATE: function (e) {
            let { uses: t, code: n } = e,
              l = d.get(n);
            null != l && d.set(n, l.set("uses", Math.max(l.uses, t)));
          },
          LOAD_THREADS_SUCCESS: G,
          LOAD_ARCHIVED_THREADS_SUCCESS: G,
          LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            Object.values(t).map((e) => {
              let { first_message: t } = e;
              return null != t && g(t);
            });
          },
        }),
        L = p;
    },
  },
]);
//# sourceMappingURL=60178.c912586efc39a8ce.js.map
