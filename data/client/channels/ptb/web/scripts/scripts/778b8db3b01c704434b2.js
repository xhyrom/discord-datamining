"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25443"],
  {
    46577: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return I;
          },
        }),
        s(47120);
      var n = s(735250),
        a = s(470079),
        l = s(442837),
        o = s(481060),
        i = s(239091),
        r = s(410575),
        u = s(881052),
        d = s(299206),
        _ = s(430824),
        M = s(236413),
        c = s(727072),
        E = s(36459),
        O = s(65912),
        T = s(572456),
        R = s(273504),
        D = s(981631),
        U = s(689938);
      function I(e) {
        let { rule: t, analyticsContext: s, onSelect: I } = e,
          g = (0, M.Vb)(t),
          A = (function (e) {
            let { editingRule: t, setEditingRule: s } = (0, O.V)();
            return (0, n.jsx)(o.MenuItem, {
              id: "edit-automod-rule",
              label: U.Z.Messages.GUILD_AUTOMOD_EDIT_RULE,
              action: () => {
                s(e);
              },
              disabled: null != t,
            });
          })(t),
          L = (function (e) {
            let { setEditingRule: t } = (0, O.V)(),
              [s, i] = a.useState(!1),
              { removeRule: r } = (0, c.pH)(e.guildId),
              d = (0, l.e7)([_.Z], () => _.Z.getGuild(e.guildId)),
              M = async () => {
                if (!s && !!(await (0, T.gK)(e.name))) {
                  i(!0);
                  try {
                    await (0, E.mm)(e.id, e.guildId),
                      t(null),
                      r(e.id, e.guildId);
                  } catch (t) {
                    var n;
                    let e = new u.Hx(t);
                    (0, o.showToast)(
                      (0, o.createToast)(
                        null !== (n = e.getAnyErrorMessage()) && void 0 !== n
                          ? n
                          : U.Z.Messages.ERROR_OCCURRED_TRY_AGAIN,
                        o.ToastType.FAILURE,
                      ),
                    );
                  } finally {
                    i(!1);
                  }
                }
              },
              I =
                e.triggerType === R.fX.MENTION_SPAM &&
                (null == d ? void 0 : d.features) != null &&
                d.features.has(D.oNc.COMMUNITY);
            return (0, n.jsx)(o.MenuItem, {
              id: "delete-automod-rule",
              label: U.Z.Messages.GUILD_AUTOMOD_DELETE_RULE,
              action: I
                ? () => {
                    (0, o.openModal)((e) =>
                      (0, n.jsx)(o.ConfirmModal, {
                        header:
                          U.Z.Messages
                            .GUILD_AUTOMOD_RULE_DELETE_ERROR_CONFIRM_MODAL_HEADER,
                        confirmText: U.Z.Messages.OKAY,
                        confirmButtonColor: o.Button.Colors.BRAND,
                        ...e,
                        children: (0, n.jsx)(o.Text, {
                          variant: "text-md/normal",
                          children:
                            U.Z.Messages
                              .GUILD_AUTOMOD_RULE_DELETE_ERROR_CONFIRM_MODAL_BODY,
                        }),
                      }),
                    );
                  }
                : M,
            });
          })(t),
          h = (0, d.Z)({ id: t.id, label: U.Z.Messages.COPY_ID_AUTOMOD_RULE });
        return (0, n.jsx)(r.Z, {
          context: s,
          object: D.qAy.CONTEXT_MENU,
          children: (0, n.jsxs)(o.Menu, {
            navId: "automod-rule-context",
            onClose: i.Zy,
            "aria-label": U.Z.Messages.GUILD_AUTOMOD_RULE_CONTEXT_MENU,
            onSelect: I,
            children: [
              (0, n.jsxs)(o.MenuGroup, { children: [A, g && L] }),
              g && (0, n.jsx)(o.MenuGroup, { children: h }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=778b8db3b01c704434b2.js.map
