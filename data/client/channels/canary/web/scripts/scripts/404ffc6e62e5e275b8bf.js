"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9007"],
  {
    46887: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = l(192379),
        i = l(442837),
        n = l(430824),
        s = l(687476);
      function r(e) {
        let t = (0, i.e7)([n.Z], () => n.Z.getRoles(e)),
          l = (0, i.e7)([s.Z], () => s.Z.getSubscriptionRoles(e));
        return a.useMemo(
          () => Object.values(t).filter((e) => l.has(e.id)),
          [t, l],
        );
      }
    },
    604623: function (e, t, l) {
      l.r(t),
        l.d(t, {
          CreateEmojiWithRolesModal: function () {
            return f;
          },
          UpdateEmojiRolesModal: function () {
            return w;
          },
        }),
        l(47120);
      var a = l(200651),
        i = l(192379),
        n = l(120356),
        s = l.n(n),
        r = l(392711),
        o = l.n(r),
        c = l(772848),
        d = l(481060),
        h = l(80932),
        u = l(935369),
        x = l(313201),
        m = l(730089),
        b = l(626135),
        j = l(768581),
        g = l(584825),
        p = l(46887),
        C = l(981631),
        v = l(388032),
        _ = l(122836);
      let k = (e) => {
        let {
          className: t,
          onChange: l,
          textVariant: i = "text-md/normal",
          label: n,
          value: r,
          isArchived: o = !1,
        } = e;
        return (0, a.jsx)(d.Checkbox, {
          size: 24,
          className: s()(_.checklistRow, t),
          value: r,
          onChange: l,
          type: d.Checkbox.Types.INVERTED,
          children: (0, a.jsxs)("div", {
            className: _.checklistLabel,
            children: [
              (0, a.jsx)(d.Text, {
                color: "interactive-active",
                variant: i,
                children: n,
              }),
              o && (0, a.jsx)(d.TextBadge, { text: v.intl.string(v.t.nhbtEh) }),
            ],
          }),
        });
      };
      function S(e) {
        let {
            transitionState: t,
            onClose: l,
            initialRoleIds: n = [],
            listingChoices: s,
            emojiUrl: r,
            saving: c,
            onSave: h,
          } = e,
          u = (0, x.Dt)(),
          [m, b] = i.useState(() => new Set(n)),
          j = i.useMemo(
            () =>
              o().isEqual(
                m,
                new Set(
                  s.map((e) => {
                    let { role_id: t } = e;
                    return t;
                  }),
                ),
              ),
            [s, m],
          ),
          g = m.size > 0,
          p = (e) =>
            b((t) => {
              let l = new Set(t);
              return t.has(e) ? l.delete(e) : l.add(e), l;
            }),
          C = () => {
            h(Array.from(m), l);
          };
        return (0, a.jsxs)(d.ModalRoot, {
          transitionState: t,
          "aria-labelledby": u,
          children: [
            (0, a.jsxs)(d.ModalHeader, {
              separator: !1,
              children: [
                (0, a.jsxs)("div", {
                  className: _.headerContent,
                  children: [
                    (0, a.jsx)(d.Image, {
                      src: r,
                      width: 40,
                      height: 40,
                      alt: "",
                    }),
                    (0, a.jsx)(d.Spacer, { size: 16, horizontal: !0 }),
                    (0, a.jsxs)("div", {
                      className: _.__invalid_headerText,
                      children: [
                        (0, a.jsx)(d.Heading, {
                          id: u,
                          variant: "heading-md/semibold",
                          children: v.intl.string(v.t.nP7nDQ),
                        }),
                        (0, a.jsx)(d.Spacer, { size: 2 }),
                        (0, a.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: v.intl.string(v.t.I4SYUF),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(d.ModalCloseButton, {
                  className: _.closeButton,
                  onClick: l,
                }),
              ],
            }),
            (0, a.jsx)("div", { className: _.seperator }),
            (0, a.jsx)(d.ModalContent, {
              className: _.modalContent,
              children: (0, a.jsxs)("div", {
                className: _.checklistContainer,
                children: [
                  (0, a.jsx)(
                    k,
                    {
                      className: _.selectAllCheckbox,
                      label: v.intl.string(v.t["Ve/y5+"]),
                      textVariant: "text-md/semibold",
                      value: j,
                      onChange: () => {
                        j
                          ? b(new Set())
                          : b(
                              new Set(
                                s.map((e) => {
                                  let { role_id: t } = e;
                                  return t;
                                }),
                              ),
                            );
                      },
                    },
                    "allSubscriptionRoles",
                  ),
                  s.map((e, t) =>
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        0 !== t &&
                          (0, a.jsx)("div", { className: _.seperator }),
                        (0, a.jsx)(
                          k,
                          {
                            onChange: () => p(e.role_id),
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
                shouldShow: !g,
                text: v.intl.string(v.t["8aYImJ"]),
                children: (e) =>
                  (0, a.jsx)(d.Button, {
                    ...e,
                    "aria-label": v.intl.string(v.t.R3BPHx),
                    disabled: !g,
                    submitting: c,
                    onClick: C,
                    children: v.intl.string(v.t.R3BPHx),
                  }),
              }),
            }),
          ],
        });
      }
      function f(e) {
        let { guildId: t, data: l, file: n, ...s } = e,
          [r, o] = i.useState(!1),
          d = async (e, a) => {
            try {
              o(!0);
              let i = (0, c.Z)();
              b.default.track(C.rMx.EMOJI_UPLOAD_STARTED, {
                guild_id: t,
                upload_id: i,
              }),
                await (0, m.G)({
                  guildId: t,
                  uploadId: i,
                  data: l,
                  file: n,
                  roles: e,
                }),
                a();
            } catch (e) {
            } finally {
              o(!1);
            }
          },
          h = (0, g.qi)(t, {
            includeSoftDeleted: !0,
            sortDeletedListingsLast: !0,
          });
        return (0, a.jsx)(S, {
          emojiUrl: l,
          onSave: d,
          saving: r,
          listingChoices: h,
          ...s,
        });
      }
      function w(e) {
        let { emoji: t, guildId: l, ...n } = e,
          s = j.ZP.getEmojiURL({ id: t.id, animated: t.animated, size: 40 }),
          [r, { loading: o }] = (0, u.Z)(h.dv),
          c = async (e, a) => {
            null != (await r({ guildId: l, emojiId: t.id, roles: e })) && a();
          },
          d = (0, g.qi)(l, { includeSoftDeleted: !0 });
        d.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
        let x = (0, p.Z)(l),
          m = i.useMemo(() => {
            let e = new Set(
              x.map((e) => {
                let { id: t } = e;
                return t;
              }),
            );
            return t.roles.filter((t) => e.has(t));
          }, [t.roles, x]);
        return (0, a.jsx)(S, {
          emojiUrl: s,
          onSave: c,
          initialRoleIds: m,
          saving: o,
          listingChoices: d,
          ...n,
        });
      }
    },
    122836: function (e, t, l) {
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
//# sourceMappingURL=404ffc6e62e5e275b8bf.js.map
