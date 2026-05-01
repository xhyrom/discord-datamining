"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92837"],
  {
    480900(e, t, l) {
      l.d(t, { b: () => G, default: () => L });
      var n = l(627968),
        i = l(64700),
        s = l(503698),
        r = l.n(s),
        a = l(189213),
        o = l(17928),
        d = l(462887),
        c = l(192308),
        u = l(331322),
        p = l(939249),
        f = l(478016),
        m = l(834730),
        x = l(442433),
        g = l(686956),
        A = l(736653),
        h = l(573648),
        j = l(104171),
        v = l(58149),
        N = l(889227),
        b = l(495544),
        _ = l(696451),
        C = l(317525),
        y = l(954571),
        E = l(975571),
        k = l(967740),
        I = l(652215),
        S = l(985018),
        R = l(967671),
        w = l(227568);
      function G(e, t) {
        (0, c.openModalLazy)(async () => {
          let { default: i } = await Promise.all([
            l.e("16933"),
            l.e("90738"),
            l.e("76831"),
            l.e("60235"),
            l.e("53984"),
            l.e("38042"),
            l.e("17460"),
            l.e("53203"),
            l.e("73566"),
            l.e("49282"),
            l.e("80971"),
          ]).then(l.bind(l, 488358));
          return (l) => (0, n.jsx)(i, { role: e, guildId: t, ...l });
        });
      }
      let L = function (e) {
        let { guildId: t, transitionState: s, onClose: c } = e,
          L = (0, o.bG)([C.A], () => C.A.getSortedRoles(t)),
          U = (0, o.bG)([b.default], () => b.default.getId()),
          z = (0, o.bG)([_.Ay], () => _.Ay.getMember(t, U)),
          [M, T] = i.useState([]),
          V = (0, A.Ay)();
        if (
          (i.useEffect(() => {
            0 !== M.length &&
              y.default.track(I.HAw.PASSPORT_ENTRY_VIEWED, {
                role_ids: M.map((e) => {
                  let { role_id: t } = e;
                  return t;
                }),
                ...(0, v.H$)(t),
              });
          }, [t, M]),
          i.useEffect(() => {
            g.A.getGuildRoleConnectionsConfigurations(t).then((e) => T(e));
          }, [t]),
          null == z)
        )
          return null;
        let O = L.filter((e) => null === e.tags.guild_connections);
        return (0, n.jsx)(a.Modal, {
          transitionState: s,
          title: S.intl.string(S.t.ghtnss),
          onClose: c,
          subtitle: S.intl.format(S.t["Y+TsEV"], {
            helpdeskArticleUrl: E.A.getArticleURL(I.MVz.CONNECTION_DETAILS),
          }),
          actions: [],
          children: (0, n.jsx)(u.B, {
            padding: { top: 8 },
            children: O.map((e) => {
              let s = z.roles.includes(e.id),
                a = (function (e) {
                  let l = M.find((t) => {
                    let { role_id: l } = t;
                    return l === e;
                  });
                  if (null == l) return [];
                  let i = {};
                  for (let e of l.rules.flat()) {
                    let s;
                    if (null != e.application_id) {
                      let i = l.applications?.[e.application_id];
                      s =
                        i?.bot != null
                          ? (0, n.jsx)("img", {
                              src: new N.A(i.bot).getAvatarURL(t, 24),
                              alt: "",
                              className: r()(R.ZN, w.my),
                            })
                          : null;
                    } else {
                      let t = h.A.get(e.connection_type);
                      s = (0, n.jsx)("img", {
                        src: (0, d.q)(V) ? t.icon.lightSVG : t.icon.darkSVG,
                        alt: "",
                        className: w.my,
                      });
                    }
                    null != s &&
                      (i[`${e.connection_type}:${e.application_id}`] = s);
                  }
                  return Object.values(i);
                })(e.id);
              return (0, n.jsxs)(
                p.D,
                {
                  className: r()(R.L5, s ? R.xN : null),
                  onClick: s ? void 0 : () => G(e, t),
                  onContextMenu: s
                    ? (i) => {
                        var s;
                        return (
                          (s = e.id),
                          void (0, x.L3)(i, async () => {
                            let { default: e } = await l
                              .e("68001")
                              .then(l.bind(l, 699896));
                            return (l) =>
                              (0, n.jsx)(e, {
                                ...l,
                                roleId: s,
                                onLeaveRole: () =>
                                  g.A.unassignGuildRoleConnection(t, s),
                              });
                          })
                        );
                      }
                    : void 0,
                  children: [
                    s
                      ? (0, n.jsx)("div", {
                          className: R.UA,
                          children: (0, n.jsx)(f.U, {
                            size: "xs",
                            color: "currentColor",
                          }),
                        })
                      : null,
                    (0, n.jsx)(k.A, { guildId: t, role: e, size: 24 }),
                    (0, n.jsxs)("div", {
                      className: R.fk,
                      children: [
                        (0, n.jsx)(m.E, {
                          variant: "text-md/medium",
                          color: "text-strong",
                          className: R.CF,
                          children: e.name,
                        }),
                        void 0 !== e.description
                          ? (0, n.jsx)(m.E, {
                              variant: "text-xs/normal",
                              color: "text-default",
                              className: R.Xr,
                              children: e.description,
                            })
                          : null,
                      ],
                    }),
                    (0, n.jsx)(j.Ay, {
                      showUserPopout: !1,
                      guildId: t,
                      users: a.map(() => null),
                      renderUser: (e, t, l) =>
                        (0, n.jsx)(i.Fragment, { children: a[l] }, l),
                      max: 3,
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
        });
      };
    },
    967740(e, t, l) {
      l.d(t, { A: () => a });
      var n = l(627968);
      l(64700);
      var i = l(201275),
        s = l(657048),
        r = l(87e3);
      function a(e) {
        let { guildId: t, role: l, size: a, className: o } = e,
          d = (0, i.$7)({ guildId: t, roleId: l.id, size: a });
        return null != d
          ? (0, n.jsx)(s.A, { className: o, ...d })
          : (0, n.jsx)(r.A, { color: l.colorString, className: o, size: a });
      }
    },
  },
]);
//# sourceMappingURL=92837.1806a10d46512d40.js.map
