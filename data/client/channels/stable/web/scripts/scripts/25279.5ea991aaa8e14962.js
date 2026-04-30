"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25279"],
  {
    344346(a, e, l) {
      l.d(e, { a: () => w, A: () => G });
      var s = l(627968),
        i = l(64700),
        t = l(503698),
        r = l.n(t),
        d = l(17928),
        n = l(462887),
        u = l(778712),
        c = l(652215),
        o = l(247928),
        m = l(97808),
        p = l(736653),
        x = l(262295),
        g = l(609425),
        h = l(922301),
        N = l(368919),
        v = l(685073),
        A = l(534400),
        I = l(919395),
        y = l(252732),
        _ = l(696451),
        j = l(290863),
        S = l(162232),
        E = l(88686),
        M = l(780898),
        b = l(174755),
        f = l(985018),
        k = l(136958);
      let D = {
          xlarge: u._3.SIZE_48,
          large: u._3.SIZE_40,
          small: u._3.SIZE_24,
          xsmall: u._3.SIZE_20,
          default: u._3.SIZE_32,
        },
        w = i.memo(function (a) {
          let {
              user: e,
              guildId: l,
              nameplate: t,
              nameplateData: u,
              className: w,
              innerClassName: G,
              isHighlighted: Z,
              showStatus: C,
              showPlaceholderUser: V,
              pendingGlobalName: L,
              pendingNickname: O,
              pendingAvatarDecoration: P,
              pendingDisplayNameStyles: R,
              pendingPrimaryGuildId: T,
              nameplatePreviewSize: z = "default",
              skipEffectDisplayName: H = !1,
              width: U,
            } = a,
            W = (0, p.Ay)(),
            F = (0, n.M)(W),
            J = (0, M.WK)(t) ?? u,
            K = (0, d.bG)([j.A], () =>
              null != e ? j.A.getStatus(e.id) : c.clD.ONLINE,
            ),
            Q = i.useRef(null),
            X = (0, d.bG)([_.Ay], () =>
              null != l && null != e ? _.Ay.getMember(l, e.id) : null,
            ),
            Y =
              null != e
                ? (0, y.eh)({
                    pendingNickname: O,
                    pendingGlobalName: L,
                    user: e,
                    guildMember: X,
                  })
                : void 0,
            $ = (0, I.lw)({
              pendingValue: P,
              userValue: e?.avatarDecoration,
              guildValue: X?.avatarDecoration,
              guildId: l,
            }),
            q = i.useMemo(() => D[z], [z]),
            B = (0, g.A)({
              userId: e?.id,
              guildId: l,
              pendingDisplayNameStyles: R,
            }),
            aa = (0, v.gS)(T),
            ae = i.useMemo(
              () =>
                null != t
                  ? f.intl.formatToPlainString(f.t.YJig7C, {
                      a11y_text: t.label,
                    })
                  : f.intl.string(f.t.SZeUdR),
              [t],
            );
          return (0, s.jsx)("div", {
            role: "img",
            "aria-label": ae,
            style: {
              color: F ? "white" : "black",
              width: null != U ? `${U}px` : "100%",
            },
            children: (0, s.jsxs)(o.M, {
              className: r()(w, k.M4, {
                [k.s]: "xsmall" === z,
                [k.EX]: "small" === z,
                [k.as]: "large" === z,
                [k.AQ]: "xlarge" === z,
                [k.gf]: null != U,
              }),
              children: [
                null != J &&
                  (0, s.jsx)(
                    b.A,
                    {
                      nameplate: J,
                      hovered: Z,
                      placement: E.u.PREVIEW,
                      content: V ? void 0 : Q,
                    },
                    t?.skuId,
                  ),
                (0, s.jsxs)("div", {
                  className: k.MU,
                  children: [
                    null != e
                      ? (0, s.jsx)("div", {
                          className: r()(k.H, !V && k.Mk),
                          children: (0, s.jsx)(x.A, {
                            ref: Q,
                            avatar: (0, s.jsx)(S.A, {
                              user: e,
                              guildId: l,
                              avatarSize: q,
                              status: C ? K : void 0,
                              avatarDecorationOverride: $,
                              "aria-hidden": !0,
                            }),
                            decorators: (0, s.jsx)(A.Ay, {
                              primaryGuild: aa,
                              userId: e.id,
                              contextGuildId: l,
                              className: k.id,
                            }),
                            name: (0, s.jsx)(N.A, {
                              userName: Y,
                              displayNameStyles: B,
                              effectDisplayType: H ? h.G.PLAIN : h.G.ANIMATED,
                              loop: !0,
                            }),
                            innerClassName: G,
                            withDisplayNameStyles: null != B,
                          }),
                        })
                      : null,
                    (0, s.jsxs)("div", {
                      className: r()(k.H, V && k.Mk),
                      children: [
                        (0, s.jsx)(m.eu, {
                          src: F
                            ? "/assets/2ca6b6f4a73913ed.png"
                            : "/assets/9d8606c1376ca484.png",
                          size: q,
                          "aria-hidden": !0,
                          status: c.clD.ONLINE,
                          statusColor: F ? "#706F74" : "#aaaab2",
                          className: k.my,
                        }),
                        (0, s.jsx)("div", { className: k.gM }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        G = w;
    },
  },
]);
//# sourceMappingURL=25279.5ea991aaa8e14962.js.map
