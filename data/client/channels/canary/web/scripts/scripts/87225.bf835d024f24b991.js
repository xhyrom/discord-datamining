"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87225"],
  {
    342952(e, a, l) {
      l.d(a, { A: () => C, I: () => y });
      var t = l(627968),
        n = l(64700),
        i = l(503698),
        s = l.n(i),
        r = l(735438),
        d = l.n(r),
        o = l(990078),
        c = l(778712),
        u = l(97808),
        h = l(834730),
        x = l(140735),
        m = l(305866),
        g = l(364522),
        _ = l(922016),
        j = l(939249),
        b = l(442433),
        f = l(538451),
        p = l(562153),
        I = l(427262),
        v = l(985018),
        w = l(758963);
      function E() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : c._3.SIZE_24;
        switch (e) {
          case c._3.SIZE_16:
            return w.nc;
          case c._3.SIZE_20:
            return w.qV;
          case c._3.SIZE_24:
          default:
            return w.q1;
        }
      }
      function S(e) {
        let {
            users: a,
            maxUsers: l,
            guildId: n,
            channelId: i,
            size: r = c._3.SIZE_24,
            shouldShowOverflowCount: h,
            disableUsernameTooltip: x,
          } = e,
          m = E(r),
          g = h ? l - 1 : Math.min(a.length, l),
          _ = g - 1,
          j = d()(a)
            .take(g)
            .map((e, a) => {
              let l = p.Ay.getNickname(n, i, e) ?? I.Ay.getName(e),
                d = s()(w.my, m, a === _ && !h && w.NE),
                c = (0, t.jsx)(u.eu, {
                  src: e.getAvatarURL(n, 24),
                  size: r,
                  "aria-hidden": !0,
                });
              return (0, t.jsx)(
                "li",
                {
                  className: d,
                  children: x
                    ? (0, t.jsx)("span", {
                        role: "img",
                        "aria-label": l,
                        children: c,
                      })
                    : (0, t.jsx)(o.m, {
                        text: l,
                        ariaHidden: !0,
                        children: (0, t.jsx)("span", {
                          role: "img",
                          "aria-label": l,
                          children: c,
                        }),
                      }),
                },
                e.id,
              );
            })
            .value();
        return (0, t.jsx)("ul", { className: w.HD, children: j });
      }
      function N(e) {
        let {
            count: a,
            textVariant: l,
            color: n = "interactive-text-default",
            size: i = c._3.SIZE_24,
            className: r,
          } = e,
          d = E(i),
          o =
            l ??
            (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : c._3.SIZE_24;
              switch (e) {
                case c._3.SIZE_16:
                case c._3.SIZE_20:
                  return "text-xxs/semibold";
                case c._3.SIZE_24:
                default:
                  return "text-xs/medium";
              }
            })(i);
        return (0, t.jsxs)(h.E, {
          variant: o,
          color: n,
          className: s()(w.ju, d, r),
          children: [
            (0, t.jsx)(x.A, {
              children: v.intl.formatToPlainString(v.t.RGr9tj, { count: a }),
            }),
            (0, t.jsx)("span", {
              "aria-hidden": !0,
              children: a > 99 ? ">99" : `+${a}`,
            }),
          ],
        });
      }
      function Z(e) {
        let {
            users: a,
            maxUsers: l,
            guildId: n,
            channelId: i,
            size: s = c._3.SIZE_24,
            overflowCountClassName: r,
            overflowCountColor: d = "interactive-text-default",
            hideOverflowCount: o = !1,
          } = e,
          u = a.length - l,
          h = u > 0 && !o;
        return a.length <= 0
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(S, {
                  users: a,
                  maxUsers: l,
                  guildId: n,
                  channelId: i,
                  size: s,
                  shouldShowOverflowCount: h,
                  disableUsernameTooltip: !0,
                }),
                h &&
                  (0, t.jsx)(N, {
                    count: u + 1,
                    color: d,
                    size: s,
                    className: r,
                  }),
              ],
            });
      }
      function y(e) {
        let {
          className: a,
          "aria-label": l,
          "aria-labelledby": n,
          "aria-hidden": i,
          ...r
        } = e;
        return (0, t.jsx)("div", {
          role: "group",
          className: s()(a, w.HD),
          "aria-label": l,
          "aria-labelledby": n,
          "aria-hidden": i,
          children: (0, t.jsx)(Z, { ...r }),
        });
      }
      function C(e) {
        let {
            users: a,
            maxUsers: i,
            guildId: r,
            channelId: d,
            className: o,
            size: u = c._3.SIZE_24,
            overflowCountVariant: h,
            overflowCountColor: x = "interactive-text-default",
            overflowCountClassName: I,
            hideOverflowCount: E = !1,
            disableUsernameTooltip: Z = !1,
            disableUserPopout: y = !1,
            onClickOverflow: C,
            onFocusOverflow: k,
            onUserClick: A,
            onUserPopoutRequestClose: R,
            "aria-label": T,
            "aria-labelledby": H,
            "aria-hidden": P,
          } = e,
          [U, z] = n.useState(!1),
          D = n.useRef(null),
          M = a.length - i,
          q = M + 1,
          V = M > 0 && !E && !P;
        return a.length <= 0
          ? null
          : (0, t.jsxs)("div", {
              role: "group",
              "aria-label": T,
              "aria-labelledby": H,
              className: s()(o, w.HD),
              "aria-hidden": P,
              children: [
                (0, t.jsx)(S, {
                  users: a,
                  maxUsers: i,
                  guildId: r,
                  channelId: d,
                  size: u,
                  shouldShowOverflowCount: V,
                  disableUsernameTooltip: Z,
                }),
                V
                  ? (0, t.jsx)(
                      _.Y,
                      {
                        targetElementRef: D,
                        renderPopout: () =>
                          (0, t.jsx)(m.l, {
                            className: w.XM,
                            "aria-label": T,
                            "aria-labelledby": H,
                            children: (0, t.jsx)(g.Ip, {
                              className: w.XG,
                              children: a.map((e) =>
                                (0, t.jsx)(
                                  f.A,
                                  {
                                    user: e,
                                    guildId: r,
                                    channelId: d,
                                    nick: p.Ay.getNickname(r, d, e),
                                    disablePopout:
                                      "function" == typeof y ? y(e.id) : y,
                                    onClick: A,
                                    onPopoutRequestClose: () => {
                                      z(!1), R?.();
                                    },
                                    onContextMenu: (a) =>
                                      (0, b.L3)(
                                        a,
                                        async () => {
                                          let { default: a } =
                                            await Promise.all([
                                              l.e("71561"),
                                              l.e("39431"),
                                              l.e("65086"),
                                              l.e("1195"),
                                              l.e("26132"),
                                              l.e("46652"),
                                              l.e("93190"),
                                              l.e("34552"),
                                              l.e("34530"),
                                              l.e("8757"),
                                              l.e("43039"),
                                              l.e("89673"),
                                              l.e("68403"),
                                              l.e("85968"),
                                              l.e("60195"),
                                              l.e("72535"),
                                              l.e("29787"),
                                              l.e("28561"),
                                              l.e("36320"),
                                              l.e("97558"),
                                              l.e("94000"),
                                              l.e("45421"),
                                              l.e("88017"),
                                              l.e("90889"),
                                              l.e("91994"),
                                              l.e("21570"),
                                              l.e("58765"),
                                              l.e("76665"),
                                              l.e("76273"),
                                              l.e("24198"),
                                              l.e("86169"),
                                              l.e("19871"),
                                              l.e("24170"),
                                              l.e("14461"),
                                              l.e("25486"),
                                              l.e("94503"),
                                              l.e("14224"),
                                              l.e("72883"),
                                              l.e("49644"),
                                              l.e("42204"),
                                              l.e("83972"),
                                              l.e("72072"),
                                              l.e("32418"),
                                            ]).then(l.bind(l, 668569));
                                          return (l) =>
                                            (0, t.jsx)(a, {
                                              ...l,
                                              user: e,
                                              guildId: r,
                                              channelId: d,
                                            });
                                        },
                                        { onClose: () => z(!1) },
                                      ),
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          }),
                        shouldShow: U,
                        position: "bottom",
                        onRequestClose: () => z(!1),
                        children: (e) =>
                          (0, t.jsx)(j.D, {
                            ...e,
                            innerRef: D,
                            className: w.x6,
                            onFocus: k,
                            onClick: (e) => {
                              C?.(e), z(!0);
                            },
                            "aria-label": v.intl.formatToPlainString(
                              v.t.R8Z8Qr,
                              { count: q },
                            ),
                            children: (0, t.jsx)(N, {
                              count: q,
                              textVariant: h,
                              color: x,
                              size: u,
                              className: I,
                            }),
                          }),
                      },
                      "overflow",
                    )
                  : null,
              ],
            });
      }
    },
    31300(e, a, l) {
      l.d(a, { k: () => r });
      var t = l(627968);
      l(64700);
      var n = l(661531),
        i = l(996682),
        s = l(27989);
      let r = (e) => {
        let {
            size: a = "md",
            width: l,
            height: r,
            color: d = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          u = (0, s.J)(a),
          h = u?.width ?? l,
          x = u?.height ?? r;
        return (0, t.jsx)("svg", {
          ...(0, i.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: x,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=87225.bf835d024f24b991.js.map
