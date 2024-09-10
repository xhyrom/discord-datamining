"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9007"],
  {
    46887: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = s(470079),
        l = s(442837),
        i = s(430824),
        n = s(687476);
      function o(e) {
        let t = (0, l.e7)([i.Z], () => i.Z.getRoles(e)),
          s = (0, l.e7)([n.Z], () => n.Z.getSubscriptionRoles(e));
        return a.useMemo(
          () => Object.values(t).filter((e) => s.has(e.id)),
          [t, s],
        );
      }
    },
    604623: function (e, t, s) {
      s.r(t),
        s.d(t, {
          CreateEmojiWithRolesModal: function () {
            return A;
          },
          UpdateEmojiRolesModal: function () {
            return I;
          },
        }),
        s(47120);
      var a = s(735250),
        l = s(470079),
        i = s(120356),
        n = s.n(i),
        o = s(392711),
        r = s.n(o),
        c = s(772848),
        d = s(481060),
        _ = s(80932),
        h = s(935369),
        u = s(313201),
        m = s(730089),
        x = s(626135),
        E = s(768581),
        S = s(584825),
        C = s(46887),
        j = s(981631),
        L = s(689938),
        M = s(557839);
      let b = (e) => {
        let {
          className: t,
          onChange: s,
          textVariant: l = "text-md/normal",
          label: i,
          value: o,
          isArchived: r = !1,
        } = e;
        return (0, a.jsx)(d.Checkbox, {
          size: 24,
          className: n()(M.checklistRow, t),
          value: o,
          onChange: s,
          type: d.Checkbox.Types.INVERTED,
          children: (0, a.jsxs)("div", {
            className: M.checklistLabel,
            children: [
              (0, a.jsx)(d.Text, {
                color: "interactive-active",
                variant: l,
                children: i,
              }),
              r &&
                (0, a.jsx)(d.TextBadge, {
                  text: L.Z.Messages
                    .GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL,
                }),
            ],
          }),
        });
      };
      function R(e) {
        let {
            transitionState: t,
            onClose: s,
            initialRoleIds: i = [],
            listingChoices: n,
            emojiUrl: o,
            saving: c,
            onSave: _,
          } = e,
          h = (0, u.Dt)(),
          [m, x] = l.useState(() => new Set(i)),
          E = l.useMemo(
            () =>
              r().isEqual(
                m,
                new Set(
                  n.map((e) => {
                    let { role_id: t } = e;
                    return t;
                  }),
                ),
              ),
            [n, m],
          ),
          S = m.size > 0,
          C = (e) =>
            x((t) => {
              let s = new Set(t);
              return t.has(e) ? s.delete(e) : s.add(e), s;
            }),
          j = () => {
            _(Array.from(m), s);
          };
        return (0, a.jsxs)(d.ModalRoot, {
          transitionState: t,
          "aria-labelledby": h,
          children: [
            (0, a.jsxs)(d.ModalHeader, {
              separator: !1,
              children: [
                (0, a.jsxs)("div", {
                  className: M.headerContent,
                  children: [
                    (0, a.jsx)(d.Image, {
                      src: o,
                      width: 40,
                      height: 40,
                      alt: "",
                    }),
                    (0, a.jsx)(d.Spacer, { size: 16, horizontal: !0 }),
                    (0, a.jsxs)("div", {
                      className: M.__invalid_headerText,
                      children: [
                        (0, a.jsx)(d.Heading, {
                          id: h,
                          variant: "heading-md/semibold",
                          children:
                            L.Z.Messages
                              .GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_HEADER,
                        }),
                        (0, a.jsx)(d.Spacer, { size: 2 }),
                        (0, a.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children:
                            L.Z.Messages
                              .GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_DESCRIPTION,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(d.ModalCloseButton, {
                  className: M.closeButton,
                  onClick: s,
                }),
              ],
            }),
            (0, a.jsx)("div", { className: M.seperator }),
            (0, a.jsx)(d.ModalContent, {
              className: M.modalContent,
              children: (0, a.jsxs)("div", {
                className: M.checklistContainer,
                children: [
                  (0, a.jsx)(
                    b,
                    {
                      className: M.selectAllCheckbox,
                      label:
                        L.Z.Messages
                          .GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_SELECT_ALL_LABEL,
                      textVariant: "text-md/semibold",
                      value: E,
                      onChange: () => {
                        E
                          ? x(new Set())
                          : x(
                              new Set(
                                n.map((e) => {
                                  let { role_id: t } = e;
                                  return t;
                                }),
                              ),
                            );
                      },
                    },
                    "allSubscriptionRoles",
                  ),
                  n.map((e, t) =>
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        0 !== t &&
                          (0, a.jsx)("div", { className: M.seperator }),
                        (0, a.jsx)(
                          b,
                          {
                            onChange: () => C(e.role_id),
                            value: m.has(e.role_id),
                            label: e.name,
                            isArchived: e.archived,
                          },
                          e.role_id,
                        ),
                      ],
                    }),
                  ),
                ],
              }),
            }),
            (0, a.jsx)(d.ModalFooter, {
              children: (0, a.jsx)(d.Tooltip, {
                shouldShow: !S,
                text: L.Z.Messages
                  .GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_NEEDS_ONE_ROLE,
                children: (e) =>
                  (0, a.jsx)(d.Button, {
                    ...e,
                    "aria-label": L.Z.Messages.SAVE,
                    disabled: !S,
                    submitting: c,
                    onClick: j,
                    children: L.Z.Messages.SAVE,
                  }),
              }),
            }),
          ],
        });
      }
      function A(e) {
        let { guildId: t, data: s, file: i, ...n } = e,
          [o, r] = l.useState(!1),
          d = async (e, a) => {
            try {
              r(!0);
              let l = (0, c.Z)();
              x.default.track(j.rMx.EMOJI_UPLOAD_STARTED, {
                guild_id: t,
                upload_id: l,
              }),
                await (0, m.G)({
                  guildId: t,
                  uploadId: l,
                  data: s,
                  file: i,
                  roles: e,
                }),
                a();
            } catch (e) {
            } finally {
              r(!1);
            }
          },
          _ = (0, S.qi)(t, {
            includeSoftDeleted: !0,
            sortDeletedListingsLast: !0,
          });
        return (0, a.jsx)(R, {
          emojiUrl: s,
          onSave: d,
          saving: o,
          listingChoices: _,
          ...n,
        });
      }
      function I(e) {
        let { emoji: t, guildId: s, ...i } = e,
          n = E.ZP.getEmojiURL({ id: t.id, animated: t.animated, size: 40 }),
          [o, { loading: r }] = (0, h.Z)(_.dv),
          c = async (e, a) => {
            null != (await o({ guildId: s, emojiId: t.id, roles: e })) && a();
          },
          d = (0, S.qi)(s, { includeSoftDeleted: !0 });
        d.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
        let u = (0, C.Z)(s),
          m = l.useMemo(() => {
            let e = new Set(
              u.map((e) => {
                let { id: t } = e;
                return t;
              }),
            );
            return t.roles.filter((t) => e.has(t));
          }, [t.roles, u]);
        return (0, a.jsx)(R, {
          emojiUrl: n,
          onSave: c,
          initialRoleIds: m,
          saving: r,
          listingChoices: d,
          ...i,
        });
      }
    },
    557839: function (e, t, s) {
      e.exports = {
        seperator: "seperator_ae903b",
        closeButton: "closeButton_ae903b",
        headerContent: "headerContent_ae903b",
        modalContent: "modalContent_ae903b",
        checklistContainer: "checklistContainer_ae903b",
        checklistRow: "checklistRow_ae903b",
        checklistLabel: "checklistLabel_ae903b",
        selectAllCheckbox: "selectAllCheckbox_ae903b",
      };
    },
  },
]);
//# sourceMappingURL=7b6f60d568faf3344c38.js.map
