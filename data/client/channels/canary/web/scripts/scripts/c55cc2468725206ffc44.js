"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1862"],
  {
    273039: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        l = n(225433),
        r = n(564051);
      function s(e) {
        let { hasSetEmoji: t, onClick: n, children: s } = e,
          [a, d] = o.useState(!1);
        return (0, i.jsxs)("div", {
          className: r.container,
          onMouseEnter: () => {
            if (t) {
              d(!0);
              return;
            }
            d(!1);
          },
          onMouseLeave: () => {
            d(!1);
          },
          children: [
            s,
            t &&
              a &&
              (0, i.jsx)(l.Z, { onClick: n, className: r.removeButton }),
          ],
        });
      }
    },
    801001: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        l = n(392711),
        r = n.n(l),
        s = n(442837),
        a = n(481060),
        d = n(706371),
        c = n(563115),
        u = n(313201),
        m = n(661824),
        h = n(984933),
        v = n(430824),
        x = n(823379),
        j = n(402148),
        g = n(570961),
        p = n(208665),
        I = n(460117),
        N = n(290511),
        f = n(388032),
        B = n(848981);
      function C(e) {
        let {
            transitionState: t,
            onClose: n,
            onSave: l,
            onDelete: v,
            option: x,
            guild: j,
            prompt: C,
            index: b,
          } = e,
          S = (0, u.Dt)(),
          T = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(j.id)),
          [Z, E] = o.useState(() => {
            var e;
            return null !== (e = null == x ? void 0 : x.emoji) && void 0 !== e
              ? e
              : null;
          }),
          [k, M] = o.useState(() => {
            var e;
            return null !== (e = null == x ? void 0 : x.title) && void 0 !== e
              ? e
              : "";
          }),
          [H, R] = o.useState(() => {
            var e;
            return null !== (e = null == x ? void 0 : x.description) &&
              void 0 !== e
              ? e
              : "";
          }),
          [L, P] = o.useState(() => {
            var e;
            return new Set(
              null !== (e = null == x ? void 0 : x.channelIds) && void 0 !== e
                ? e
                : [],
            );
          }),
          [y, z] = o.useState(() => {
            var e;
            return new Set(
              null !== (e = null == x ? void 0 : x.roleIds) && void 0 !== e
                ? e
                : [],
            );
          }),
          [w, A] = o.useState({}),
          D = o.useRef(null);
        return (
          o.useLayoutEffect(() => {
            var e;
            return null === (e = D.current) || void 0 === e
              ? void 0
              : e.focus();
          }, []),
          (0, i.jsxs)(a.ModalRoot, {
            transitionState: t,
            "aria-labelledby": S,
            children: [
              (0, i.jsxs)("div", {
                className: B.container,
                children: [
                  (0, i.jsx)(a.ModalCloseButton, {
                    className: B.closeButton,
                    onClick: n,
                  }),
                  (0, i.jsx)(a.Text, {
                    className: B.questionNumber,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: f.intl.format(f.t.yjS3zs, { index: b + 1 }),
                  }),
                  (0, i.jsx)(a.Heading, {
                    id: S,
                    className: B.header,
                    variant: "heading-lg/semibold",
                    children:
                      null != C.title && C.title.length > 0
                        ? C.title
                        : f.intl.string(f.t.vY91Cw),
                  }),
                  (0, i.jsx)(a.Heading, {
                    className: B.nameHeader,
                    variant: "heading-md/semibold",
                    children: f.intl.string(f.t.VWdcBg),
                  }),
                  (0, i.jsx)(a.TextInput, {
                    inputRef: D,
                    placeholder: f.intl.string(f.t.EHe6gY),
                    value: k,
                    onChange: (e) => M(e),
                    maxLength: N.NE,
                    autoFocus: !0,
                  }),
                  (0, i.jsx)(a.InputError, { error: w.title }),
                  (0, i.jsx)(a.TextInput, {
                    className: B.descriptionInput,
                    placeholder: f.intl.string(f.t.mIjgJC),
                    value: H,
                    onChange: (e) => R(e),
                    maxLength: N.NO,
                  }),
                  (0, i.jsx)(m.Z, { className: B.divider }),
                  (0, i.jsx)(a.Heading, {
                    className: B.rolesHeader,
                    variant: "heading-md/semibold",
                    children: f.intl.string(f.t.TtIbPD),
                  }),
                  (0, i.jsx)(d.Z, {
                    guildId: j.id,
                    selectedChannelIds: L,
                    placeholder: f.intl.string(f.t.vephiI),
                    onChange: P,
                    helperText: f.intl.string(f.t.SoT6wc),
                    className: B.searchInput,
                  }),
                  (0, i.jsx)(c.Z, {
                    guildId: j.id,
                    selectedRoleIds: y,
                    disableEveryoneRole: !0,
                    placeholder: f.intl.string(f.t.aFO1Iy),
                    onChange: z,
                    helperText: f.intl.string(f.t.Mbvpv7),
                    className: B.searchInput,
                    selectableRoleFilter: (e) => !e.managed,
                  }),
                  null == w.roles
                    ? null
                    : (0, i.jsx)(a.InputError, { error: w.roles }),
                  (0, i.jsx)(_, { guild: j, roleIds: y }),
                  (0, i.jsx)(m.Z, { className: B.divider }),
                  (0, i.jsxs)("div", {
                    className: B.emojiQuestionContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: B.emojiQuestionText,
                        children: [
                          (0, i.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            children: f.intl.string(f.t["4ahTBg"]),
                          }),
                          (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: f.intl.string(f.t.Iv9RGh),
                          }),
                        ],
                      }),
                      (0, i.jsx)(I.Z, { emoji: Z, setEmoji: E, channel: T }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(a.ModalFooter, {
                children: (0, i.jsxs)("div", {
                  className: B.footerButtons,
                  children: [
                    (0, i.jsx)("div", {
                      className: B.removeButton,
                      children: (0, i.jsx)(a.Button, {
                        size: a.Button.Sizes.SMALL,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.RED,
                        onClick: () => {
                          v(), n();
                        },
                        children: f.intl.string(f.t.N86XcH),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: B.rightButtons,
                      children: [
                        (0, i.jsx)(a.Button, {
                          onClick: n,
                          size: a.Button.Sizes.SMALL,
                          look: a.Button.Looks.LINK,
                          color: a.Button.Colors.PRIMARY,
                          children: f.intl.string(f.t["ETE/oK"]),
                        }),
                        (0, i.jsx)(a.Button, {
                          onClick: () => {
                            var e;
                            let t = {
                                id:
                                  null !== (e = null == x ? void 0 : x.id) &&
                                  void 0 !== e
                                    ? e
                                    : "".concat(Date.now()),
                                title: k,
                                description: H,
                                channelIds: Array.from(L).sort(),
                                roleIds: Array.from(y).sort(),
                                emoji: null == Z ? void 0 : Z,
                              },
                              i = (function (e, t, n, i) {
                                let o = {};
                                i.title.length <= 0 &&
                                  (o.title = f.intl.string(f.t.p3PKzM));
                                let l = (0, g.en)(e, t, n, i);
                                return null != l && (o.roles = l), o;
                              })(j, p.Z.editedOnboardingPrompts, C, t);
                            A(i), r().isEmpty(i) && (l(t), n());
                          },
                          children: f.intl.string(f.t.R3BPHx),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function _(e) {
        let { guild: t, roleIds: n } = e,
          o = (0, s.e7)([v.Z], () => v.Z.getRoles(t.id)),
          l = Array.from(n)
            .map((e) => o[e])
            .filter(x.lm)
            .find(j.F);
        return null == l
          ? null
          : (0, i.jsx)("div", {
              className: B.notice,
              children: (0, i.jsxs)("div", {
                className: B.noticeMessage,
                children: [
                  (0, i.jsx)(a.CircleWarningIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: B.noticeIcon,
                  }),
                  (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: f.intl.format(f.t["5zPJER"], {
                      permissions: (0, j.i)(t, l).join(", "),
                    }),
                  }),
                ],
              }),
            });
      }
    },
    460117: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(481060),
        l = n(596454),
        r = n(318766),
        s = n(907040),
        a = n(273039),
        d = n(185923);
      function c(e) {
        let {
            className: t,
            emojiClassName: n,
            emoji: c,
            setEmoji: u,
            channel: m,
          } = e,
          h = (e) => (t, n) => {
            var i, o;
            null != t &&
              (null == t.id
                ? u({
                    name:
                      null !== (i = t.optionallyDiverseSequence) && void 0 !== i
                        ? i
                        : "",
                  })
                : u({
                    id: t.id,
                    name:
                      null !== (o = t.originalName) && void 0 !== o
                        ? o
                        : t.name,
                    animated: t.animated,
                  }),
              n && e());
          },
          v =
            null == c || null == c.name
              ? null
              : () => {
                  var e;
                  return (0, i.jsx)(l.Z, {
                    className: n,
                    animated: null !== (e = c.animated) && void 0 !== e && e,
                    emojiId: c.id,
                    emojiName: c.name,
                  });
                };
        return (0, i.jsx)(a.Z, {
          hasSetEmoji: null != c && null != c.name,
          onClick: () => {
            u(null);
          },
          children: (0, i.jsx)(o.Popout, {
            position: "bottom",
            renderPopout: (e) => {
              let { closePopout: t } = e;
              return (0, i.jsx)(s.Z, {
                closePopout: t,
                onSelectEmoji: h(t),
                pickerIntention: d.Hz.COMMUNITY_CONTENT,
                channel: m,
              });
            },
            children: (e, n) => {
              let { isShown: o } = n;
              return (0, i.jsx)(r.Z, {
                ...e,
                tabIndex: 0,
                active: o,
                className: t,
                renderButtonContents: v,
              });
            },
          }),
        });
      }
    },
    564051: function (e, t, n) {
      e.exports = {
        container: "container_dcd0fd",
        removeButton: "removeButton_dcd0fd",
      };
    },
    848981: function (e, t, n) {
      e.exports = {
        container: "container_c50e8d",
        closeButton: "closeButton_c50e8d",
        questionNumber: "questionNumber_c50e8d",
        header: "header_c50e8d",
        nameHeader: "nameHeader_c50e8d",
        descriptionInput: "descriptionInput_c50e8d",
        searchInput: "searchInput_c50e8d",
        divider: "divider_c50e8d",
        rolesHeader: "rolesHeader_c50e8d",
        emojiQuestionContainer: "emojiQuestionContainer_c50e8d",
        emojiQuestionText: "emojiQuestionText_c50e8d",
        footerButtons: "footerButtons_c50e8d",
        removeButton: "removeButton_c50e8d",
        rightButtons: "rightButtons_c50e8d",
        notice: "notice_c50e8d",
        noticeMessage: "noticeMessage_c50e8d",
        noticeIcon: "noticeIcon_c50e8d",
      };
    },
  },
]);
//# sourceMappingURL=c55cc2468725206ffc44.js.map
