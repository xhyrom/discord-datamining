"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25443"],
  {
    46577: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return j;
          },
        }),
        e(47120);
      var i = e(200651),
        l = e(192379),
        r = e(442837),
        o = e(481060),
        d = e(239091),
        u = e(410575),
        a = e(881052),
        s = e(299206),
        c = e(430824),
        g = e(236413),
        h = e(727072),
        M = e(36459),
        f = e(65912),
        m = e(572456),
        p = e(273504),
        x = e(981631),
        T = e(388032);
      function j(t) {
        let { rule: n, analyticsContext: e, onSelect: j } = t,
          I = (0, g.Vb)(n),
          b = (function (t) {
            let { editingRule: n, setEditingRule: e } = (0, f.V)();
            return (0, i.jsx)(o.MenuItem, {
              id: "edit-automod-rule",
              label: T.intl.string(T.t.uQq6Pz),
              action: () => {
                e(t);
              },
              disabled: null != n,
            });
          })(n),
          y = (function (t) {
            let { setEditingRule: n } = (0, f.V)(),
              [e, d] = l.useState(!1),
              { removeRule: u } = (0, h.pH)(t.guildId),
              s = (0, r.e7)([c.Z], () => c.Z.getGuild(t.guildId)),
              g = async () => {
                if (!e && !!(await (0, m.gK)(t.name))) {
                  d(!0);
                  try {
                    await (0, M.mm)(t.id, t.guildId),
                      n(null),
                      u(t.id, t.guildId);
                  } catch (n) {
                    var i;
                    let t = new a.Hx(n);
                    (0, o.showToast)(
                      (0, o.createToast)(
                        null !== (i = t.getAnyErrorMessage()) && void 0 !== i
                          ? i
                          : T.intl.string(T.t.fEptJC),
                        o.ToastType.FAILURE,
                      ),
                    );
                  } finally {
                    d(!1);
                  }
                }
              },
              j =
                t.triggerType === p.fX.MENTION_SPAM &&
                (null == s ? void 0 : s.features) != null &&
                s.features.has(x.oNc.COMMUNITY);
            return (0, i.jsx)(o.MenuItem, {
              id: "delete-automod-rule",
              label: T.intl.string(T.t["92m/09"]),
              action: j
                ? () => {
                    (0, o.openModal)((t) =>
                      (0, i.jsx)(o.ConfirmModal, {
                        header: T.intl.string(T.t.MmpqMD),
                        confirmText: T.intl.string(T.t.BddRzc),
                        confirmButtonColor: o.Button.Colors.BRAND,
                        ...t,
                        children: (0, i.jsx)(o.Text, {
                          variant: "text-md/normal",
                          children: T.intl.string(T.t.XMdBLy),
                        }),
                      }),
                    );
                  }
                : g,
            });
          })(n),
          C = (0, s.Z)({ id: n.id, label: T.intl.string(T.t.F64hjo) });
        return (0, i.jsx)(u.Z, {
          context: e,
          object: x.qAy.CONTEXT_MENU,
          children: (0, i.jsxs)(o.Menu, {
            navId: "automod-rule-context",
            onClose: d.Zy,
            "aria-label": T.intl.string(T.t.uT36Sk),
            onSelect: j,
            children: [
              (0, i.jsxs)(o.MenuGroup, { children: [b, I && y] }),
              I && (0, i.jsx)(o.MenuGroup, { children: C }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=f0f499834558b1369ec1.js.map
