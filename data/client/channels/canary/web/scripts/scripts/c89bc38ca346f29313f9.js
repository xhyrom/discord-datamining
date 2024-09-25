"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33648"],
  {
    621054: function (e) {
      e.exports = "/assets/a315359c0fd32511b45e.svg";
    },
    560361: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var l = n(470079);
      function s(e) {
        let t = l.useRef();
        (t.current = e),
          l.useEffect(
            () => () => {
              var e;
              return null === (e = t.current) || void 0 === e
                ? void 0
                : e.call(t);
            },
            [],
          );
      }
    },
    859155: function (e, t, n) {
      n(411104);
      var l = n(991637),
        s = n.n(l),
        a = n(388123),
        r = n(904245),
        i = n(957730),
        o = n(592125);
      let u = {
        async sendForward(e, t, n) {
          let l = o.Z.getChannel(t),
            s = o.Z.getChannel(e.channel_id);
          if (null == s)
            throw Error("Unable to find original channel for message");
          if (null == l)
            throw Error("Unable to find destination channel for message");
          let u = i.ZP.parse(l, ""),
            c = {
              guild_id: s.guild_id,
              channel_id: e.channel_id,
              message_id: e.id,
              type: a.U.FORWARD,
              forward_only:
                (null == n ? void 0 : n.onlyAttachmentIds) != null ||
                (null == n ? void 0 : n.onlyEmbedIndices) != null
                  ? {
                      attachment_ids: n.onlyAttachmentIds,
                      embed_indices: n.onlyEmbedIndices,
                    }
                  : void 0,
            };
          await r.Z.sendMessage(l.id, u, !1, {
            messageReference: c,
            eagerDispatch: !1,
          }),
            (null == n ? void 0 : n.withMessage) != null &&
              (await r.Z.sendMessage(l.id, i.ZP.parse(l, n.withMessage), !1));
        },
        sendForwards: (e, t, n) => s()(t.map((t) => u.sendForward(e, t, n))),
      };
      t.Z = u;
    },
    819727: function (e, t, n) {
      n.d(t, {
        G: function () {
          return l;
        },
      });
      let l = 5;
    },
    784384: function (e, t, n) {
      n.d(t, {
        H: function () {
          return g;
        },
        y: function () {
          return _;
        },
      }),
        n(47120),
        n(390547);
      var l = n(442837),
        s = n(933557),
        a = n(926491),
        r = n(378233),
        i = n(131704),
        o = n(592125),
        u = n(496675),
        c = n(699516),
        d = n(594174),
        h = n(823379),
        m = n(981631),
        f = n(689938);
      function g(e, t, n) {
        let l = n instanceof i.Sf;
        if (t.isNSFW() && !(l && n.isNSFW()))
          return { label: f.Z.Messages.MESSAGE_FORWARDING_NSFW_NOT_ALLOWED };
        if (l && (0, i.Km)(n.type)) {
          if (
            (e.attachments.length > 0 ||
              e.messageSnapshots.some(
                (e) => e.message.attachments.length > 0,
              )) &&
            !u.Z.can(m.Plq.ATTACH_FILES, n)
          )
            return { label: f.Z.Messages.MESSAGE_CHANNEL_ATTACHMENTS_DISABLED };
          if (
            (e.embeds.length > 0 ||
              e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
            !u.Z.can(m.Plq.EMBED_LINKS, n)
          )
            return { label: f.Z.Messages.MESSAGE_CHANNEL_EMBEDS_DISABLED };
          let t = [
            ...(0, r.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
              let { message: t } = e;
              return (0, r.cv)(t);
            }),
          ];
          if (
            t.length > 0 &&
            !u.Z.can(m.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
              (function (e, t) {
                let n = a.Z.getStickerById(e.id);
                return (
                  !!(null != n && (0, r.J8)(n)) &&
                  (n.guild_id !== t.guild_id || void 0)
                );
              })(e, n),
            )
          )
            return {
              label: f.Z.Messages.MESSAGE_CHANNEL_EXTERNAL_STICKERS_DISABLED,
            };
          if (
            (e.hasFlag(m.iLy.IS_VOICE_MESSAGE) ||
              e.messageSnapshots.some((e) =>
                e.message.hasFlag(m.iLy.IS_VOICE_MESSAGE),
              )) &&
            !u.Z.can(m.Plq.SEND_VOICE_MESSAGES, n)
          )
            return {
              label: f.Z.Messages.MESSAGE_CHANNEL_VOICE_MESSAGES_DISABLED,
            };
        }
      }
      function _(e) {
        let t = (0, l.Wu)(
          [o.Z, u.Z],
          () =>
            e
              .map((e) => {
                let { type: t, id: n } = e;
                return "channel" === t ? o.Z.getChannel(n) : null;
              })
              .filter(h.lm)
              .filter(
                (e) =>
                  null != e.rateLimitPerUser &&
                  !!(e.rateLimitPerUser > 0) &&
                  !(
                    u.Z.can(m.Plq.MANAGE_CHANNELS, e) ||
                    u.Z.can(m.Plq.MANAGE_MESSAGES, e)
                  ),
              ),
          [e],
        );
        return (0, l.Wu)(
          [d.default, c.Z],
          () => t.map((e) => (0, s.F6)(e, d.default, c.Z, !0)),
          [t],
        );
      }
    },
    318616: function (e, t, n) {
      n.d(t, {
        c: function () {
          return l;
        },
      });
      function l(e) {
        var t, n, l;
        let { message: s, forwardOptions: a } = e,
          r = null == a ? void 0 : a.onlyAttachmentIds,
          i = null == a ? void 0 : a.onlyEmbedIndices,
          o =
            null !==
              (l =
                null === (t = s.messageSnapshots[0]) || void 0 === t
                  ? void 0
                  : t.message) && void 0 !== l
              ? l
              : s,
          u = o.attachments;
        null != r
          ? (u = o.attachments.filter((e) => r.includes(e.id)))
          : null != i && (u = []);
        let c = o.embeds;
        return (
          null != i
            ? (c = o.embeds.filter((e, t) => i.includes(t)))
            : null != r && (c = []),
          (null != i || ("" === o.content && c.length > 0)) &&
            (o = o.set("content", c.map((e) => e.url).join("\n"))),
          "" === o.content &&
            (null === (n = o.embeds[0]) || void 0 === n
              ? void 0
              : n.rawDescription) != null &&
            (o = o.set("content", o.embeds[0].rawDescription)),
          {
            attachments: u,
            embeds: c,
            hasContent: "" !== o.content && null == r,
            contentMessage: o,
          }
        );
      }
    },
    895442: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = n(592125),
        s = n(430824),
        a = n(594174),
        r = n(981631);
      function i(e) {
        if (!e.isPrivate()) {
          let t = s.Z.getGuild(e.guild_id);
          return null != t && t.hasFeature(r.oNc.INTERNAL_EMPLOYEE_ONLY);
        }
        return e.recipients.every((e) => {
          let t = a.default.getUser(e);
          return null != t && t.isStaff();
        });
      }
      function o(e, t) {
        var n;
        if (
          !(null === (n = a.default.getCurrentUser()) || void 0 === n
            ? void 0
            : n.isStaff())
        )
          return !1;
        let s = l.Z.getChannel(e.channel_id);
        return (
          !!(null != s && i(s)) &&
          t.some((e) => {
            let t = l.Z.getChannel(e);
            return !(null == t || t.isPrivate()) && !i(t);
          })
        );
      }
    },
    757853: function (e, t, n) {
      n.d(t, {
        F: function () {
          return F;
        },
        G: function () {
          return l;
        },
      }),
        n(47120);
      var l,
        s,
        a = n(735250),
        r = n(470079),
        i = n(120356),
        o = n.n(i),
        u = n(913527),
        c = n.n(u),
        d = n(91192),
        h = n(442837),
        m = n(481060),
        f = n(700582),
        g = n(560361),
        _ = n(724757),
        E = n(212819),
        S = n(933557),
        M = n(266076),
        v = n(810123),
        x = n(448486),
        p = n(987509),
        N = n(592125),
        C = n(430824),
        Z = n(158776),
        A = n(306680),
        b = n(699516),
        L = n(594174),
        R = n(626135),
        I = n(55935),
        w = n(823379),
        y = n(51144),
        T = n(784384),
        j = n(981631),
        P = n(490897),
        D = n(689938),
        O = n(463061);
      function k(e) {
        let {
            message: t,
            destination: n,
            rowMode: l,
            icon: s,
            label: i,
            subLabel: u,
            selected: c,
            disabled: h,
            onPressDestination: f,
            "aria-setsize": _,
            "aria-posinset": E,
          } = e,
          S = (0, d.JA)(n.id),
          [M, v] = r.useState(!1),
          x = r.useRef(!1),
          p = r.useCallback(() => {
            if ("send" === l) {
              v(!0), (x.current = !0);
              return;
            }
            null == f || f(n);
          }, [l, f, n]),
          N = r.useCallback(() => {
            R.default.track(j.rMx.FORWARD_ONE_TAP_VIEW, {
              channel_id: t.channel_id,
              message_id: t.id,
            }),
              (x.current = !1),
              null == f ||
                f(n, { transitionToDestination: !0, closeAfterSend: !0 });
          }, [t.channel_id, t.id, f, n]),
          C = r.useCallback(() => {
            v(!1),
              (x.current = !1),
              R.default.track(j.rMx.FORWARD_ONE_TAP_UNDO, {
                channel_id: t.channel_id,
                message_id: t.id,
              });
          }, [t]);
        return (
          (0, g.Z)(() => {
            x.current &&
              ((x.current = !1),
              null == f ||
                f(n, { transitionToDestination: !1, closeAfterSend: !1 }));
          }),
          (0, a.jsxs)(m.Clickable, {
            className: o()(O.destinationRow, { [O.disabled]: h }),
            onClick: h || M ? void 0 : p,
            "aria-selected": c,
            "aria-setsize": _,
            "aria-posinset": E,
            ...S,
            children: [
              (0, a.jsxs)("div", {
                className: O.identity,
                children: [
                  (0, a.jsx)("div", { className: O.iconWrapper, children: s }),
                  (0, a.jsxs)("div", {
                    className: O.labels,
                    children: [
                      (0, a.jsx)(m.Text, {
                        tag: "strong",
                        className: O.label,
                        variant: "text-md/semibold",
                        lineClamp: 1,
                        children: i,
                      }),
                      (0, a.jsx)(m.Text, {
                        className: O.subLabel,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: u,
                      }),
                    ],
                  }),
                ],
              }),
              "toggle" === l &&
                !h &&
                (0, a.jsx)(m.Checkbox, {
                  type: m.Checkbox.Types.INVERTED,
                  displayOnly: !0,
                  size: 24,
                  value: c,
                  className: O.checkbox,
                }),
              "send" === l &&
                !h &&
                (0, a.jsxs)("div", {
                  className: O.actions,
                  children: [
                    M
                      ? (0, a.jsx)(m.Button, {
                          size: m.Button.Sizes.SMALL,
                          color: m.Button.Colors.PRIMARY,
                          look: m.Button.Looks.LINK,
                          onClick: N,
                          children: D.Z.Messages.VIEW,
                        })
                      : (0, a.jsx)("div", {
                          className: o()(
                            (0, m.getButtonStyle)({
                              size: m.Button.Sizes.SMALL,
                              color: m.Button.Colors.BRAND,
                            }),
                            O.fauxButton,
                          ),
                          children: D.Z.Messages.SEND,
                        }),
                    M &&
                      (0, a.jsx)(m.Button, {
                        size: m.Button.Sizes.SMALL,
                        color: m.Button.Colors.BRAND,
                        look: m.Button.Looks.OUTLINED,
                        onClick: C,
                        children: D.Z.Messages.UNDO,
                      }),
                  ],
                }),
            ],
          })
        );
      }
      function W(e) {
        let { user: t, subLabel: n, ...l } = e,
          s = y.ZP.useName(t),
          r = y.ZP.useUserTag(t, { decoration: "never" }),
          i = (0, h.e7)([b.Z], () => b.Z.getNickname(t.id)),
          o = (0, h.e7)([Z.Z], () => Z.Z.getStatus(t.id));
        return (0, a.jsx)(k, {
          ...l,
          icon: (0, a.jsx)(f.Z, {
            "aria-hidden": !0,
            size: m.AvatarSizes.SIZE_32,
            user: t,
            status: o,
          }),
          label: null != i ? i : s,
          subLabel: null != n ? n : r,
        });
      }
      function G(e) {
        let { channel: t, subLabel: n, ...l } = e,
          s = (0, S.ZP)(t),
          r = (0, x._)(t);
        return (0, a.jsx)(k, {
          ...l,
          icon: (0, a.jsx)(M.Z, {
            "aria-hidden": !0,
            size: m.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: "forward-modal",
          }),
          label: s,
          subLabel: null != n ? n : r,
        });
      }
      function U(e) {
        let { channel: t, subLabel: n, ...l } = e,
          s = (0, h.e7)([C.Z], () =>
            C.Z.getGuild(null == t ? void 0 : t.guild_id),
          ),
          r = (0, S.ZP)(t),
          i = (0, h.e7)([N.Z, L.default, b.Z], () => {
            let e = N.Z.getChannel(t.parent_id);
            return null == e ? null : (0, S.F6)(e, L.default, b.Z, !1);
          }),
          o = (0, h.e7)([A.ZP], () =>
            A.ZP.lastMessageTimestamp(t.id, P.W.CHANNEL),
          ),
          u = null == s ? void 0 : s.name;
        if (t.isThread() || t.isForumPost()) {
          let e = t.isForumPost() ? m.ForumIcon : m.TextIcon;
          u = (0, a.jsxs)("div", {
            className: O.threadSubLabel,
            children: [
              (0, a.jsx)(e, {
                color: m.tokens.colors.TEXT_SECONDARY,
                className: O.subLabelIcon,
              }),
              (0, a.jsx)(m.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                lineClamp: 1,
                children: i,
              }),
              null != o
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(m.Text, {
                        className: O.subLabelSeparator,
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: "•",
                      }),
                      (0, a.jsx)(m.Text, {
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: (0, I.Xf)(c()(o)),
                      }),
                    ],
                  })
                : null,
            ],
          });
        }
        return (0, a.jsx)(k, {
          ...l,
          icon: (0, a.jsx)(v.Z, { size: v.E.SMALL_32, guild: s, channel: t }),
          label: r,
          subLabel: null != n ? n : u,
        });
      }
      function F(e) {
        let {
            rowData: t,
            rowMode: n,
            message: l,
            originChannel: s,
            selectedDestinations: i,
            handleToggleDestination: o,
            disableSelection: u,
            ...c
          } = e,
          h = r.useMemo(() => [t.length], [t.length]),
          f = r.useCallback(() => 48, []),
          g = r.useMemo(() => {
            var e;
            return null !== (e = null == i ? void 0 : i.map(p.hC)) &&
              void 0 !== e
              ? e
              : [];
          }, [i]),
          S = r.useCallback(
            (e) => {
              let { section: r, row: i } = e;
              if (r > 0) return;
              let { type: c, record: d } = t[i];
              if (c === E.h8.HEADER) return;
              let h =
                  c === E.h8.USER
                    ? { type: "user", id: d.id }
                    : { type: "channel", id: d.id },
                m = (0, p.hC)(h),
                f = (0, T.H)(l, s, d),
                _ = g.includes(m),
                S = {
                  key: m,
                  message: l,
                  destination: h,
                  rowMode: n,
                  subLabel: null != f ? f.label : void 0,
                  disabled: (u && !_) || null != f,
                  selected: _,
                  onPressDestination: o,
                  "aria-posinset": i + 1,
                  "aria-setsize": t.length,
                };
              if (c === E.h8.USER) return (0, a.jsx)(W, { user: d, ...S });
              if (c === E.h8.GROUP_DM)
                return (0, a.jsx)(G, { channel: d, ...S });
              if (c === E.h8.TEXT_CHANNEL || c === E.h8.VOICE_CHANNEL)
                return (0, a.jsx)(U, { channel: d, ...S });
              else (0, w.vE)(c);
            },
            [u, o, l, s, t, n, g],
          ),
          M = r.useRef(null),
          v = (0, _.Z)("forward-modal", M);
        return (0, a.jsx)(d.bG, {
          navigator: v,
          children: (0, a.jsx)(d.SJ, {
            children: (e) => {
              let { ref: t, ...n } = e;
              return (0, a.jsx)(m.ModalListContent, {
                scrollerRef: (e) => {
                  var n;
                  (M.current = e),
                    (t.current =
                      null !== (n = null == e ? void 0 : e.getScrollerNode()) &&
                      void 0 !== n
                        ? n
                        : null);
                },
                ...n,
                ...c,
                sections: h,
                sectionHeight: 0,
                renderRow: S,
                rowHeight: f,
              });
            },
          }),
        });
      }
      ((s = l || (l = {})).TOGGLE = "toggle"), (s.SEND = "send");
    },
    388275: function (e, t, n) {
      n.d(t, {
        n: function () {
          return p;
        },
      }),
        n(47120);
      var l = n(735250),
        s = n(470079),
        a = n(106351),
        r = n(442837),
        i = n(481060),
        o = n(541716),
        u = n(752305),
        c = n(893718),
        d = n(849522),
        h = n(987509),
        m = n(131704),
        f = n(592125),
        g = n(823379),
        _ = n(784384),
        E = n(822869),
        S = n(912332),
        M = n(646746),
        v = n(689938),
        x = n(463061);
      function p(e) {
        let {
            message: t,
            forwardOptions: n,
            sendLabel: p,
            canSend: N,
            selectedDestinations: C,
            isSending: Z,
            onSend: A,
            showPreview: b,
          } = e,
          L = (0, d.Z)(),
          R = C.map(h.hl).find(g.lm),
          I = (0, r.e7)([f.Z], () => f.Z.getChannel(R), [R]),
          w = s.useMemo(
            () => (null != I ? I : (0, m.kt)({ id: "1", type: a.d.DM })),
            [I],
          ),
          y = (0, _.y)(C),
          T = (0, E.Ad)(),
          [j, P] = s.useState(() => (0, u.H2)()),
          { textValue: D, richValue: O } = j,
          [k, W] = s.useState(!1),
          G = s.useCallback(() => W(!0), []),
          U = s.useCallback(() => W(!1), []),
          F = s.useCallback(
            (e, n, l) => {
              P({ textValue: n, richValue: l }), T(t.channel_id, t.id);
            },
            [T, t],
          ),
          B = s.useCallback(() => {
            A(D);
          }, [D, A]),
          H = s.useCallback(
            () =>
              !N || D.length > L
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (B(),
                  Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [B, D, L, N],
          );
        return (0, l.jsxs)(i.ModalFooter, {
          className: x.footerWithMessage,
          children: [
            b &&
              (0, l.jsx)("div", {
                className: x.forwardPreviewWrapper,
                children: (0, l.jsx)(M.O, { message: t, forwardOptions: n }),
              }),
            (0, l.jsxs)("div", {
              className: x.footerWarningWrapper,
              children: [
                (0, l.jsxs)("div", {
                  className: x.footerButtons,
                  children: [
                    (0, l.jsx)(c.Z, {
                      innerClassName: x.messageInput,
                      onChange: F,
                      placeholder:
                        v.Z.Messages.MESSAGE_FORWARD_MESSAGE_PLACEHOLDER,
                      channel: w,
                      textValue: D,
                      richValue: O,
                      type: o.I.FORWARD_MESSAGE_INPUT,
                      onBlur: U,
                      onFocus: G,
                      focused: k,
                      onSubmit: H,
                      parentModalKey: S.so,
                      autoCompletePosition: "bottom",
                      emojiPickerCloseOnModalOuterClick: !0,
                    }),
                    (0, l.jsx)(i.Button, {
                      className: x.sendWithMessage,
                      submitting: Z,
                      disabled: !N || D.length > L,
                      onClick: B,
                      children: p,
                    }),
                  ],
                }),
                y.length > 0 &&
                  D.length > 0 &&
                  (0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-warning",
                    children:
                      v.Z.Messages.MESSAGE_FORWARD_SLOWMODE_WARNING.format({
                        count: y.length,
                        channelNames: y.join(", "),
                      }),
                  }),
              ],
            }),
          ],
        });
      }
    },
    930864: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ForwardModal: function () {
            return L;
          },
        }),
        n(47120);
      var l = n(735250),
        s = n(470079),
        a = n(392711),
        r = n(442837),
        i = n(481060),
        o = n(359110),
        u = n(987509),
        c = n(72214),
        d = n(592125),
        h = n(375954),
        m = n(934415),
        f = n(572004),
        g = n(823379),
        _ = n(859155),
        E = n(822869),
        S = n(346610),
        M = n(895442),
        v = n(757853),
        x = n(388275),
        p = n(912332),
        N = n(646746),
        C = n(819727),
        Z = n(689938),
        A = n(463061),
        b = n(621054);
      function L(e) {
        let {
            channelId: t,
            messageId: L,
            initialSelectedDestinations: R,
            forwardOptions: I,
            onClose: w,
            onRequestSent: y,
            ...T
          } = e,
          {
            hasOneTapSendButton: j,
            hasMessageInput: P,
            hasPreview: D,
          } = (0, S.yk)({ location: "ForwardModal" }),
          O = s.useMemo(() => (0, u.dL)(t), [t]),
          [k, W] = s.useState(!1),
          G = (0, r.e7)([h.Z], () => h.Z.getMessage(t, L), [t, L]),
          U = (0, r.e7)([d.Z], () => d.Z.getChannel(t), [t]),
          F = (0, E.ZF)(),
          B = (0, E.mh)(),
          H = s.useRef(0),
          z = s.useRef(0),
          [V, q] = s.useState(R),
          Y = V.length,
          K = Y >= C.G,
          [X, J] = s.useState(""),
          Q = s.useCallback(
            (e) => {
              J(e), (z.current += 1), "" !== e && B(t, L);
            },
            [t, L, B],
          ),
          $ = (0, c.s)({
            searchText: X,
            selectedDestinations: V,
            originDestination: O,
            includeMissingDMs: !0,
          }),
          ee = s.useCallback(() => {
            (0, E.sF)({
              channelId: t,
              messageId: L,
              numDestinationChanges: H.current,
              numQueryChanges: z.current,
            }),
              w();
          }, [t, L, w]),
          et = s.useCallback(() => {
            var e;
            let n =
                null === (e = d.Z.getChannel(t)) || void 0 === e
                  ? void 0
                  : e.guild_id,
              l = (0, m.wR)(n, t, L);
            (0, i.showToast)(
              (0, i.createToast)(Z.Z.Messages.COPIED_LINK, i.ToastType.LINK),
            ),
              (0, f.JG)(l),
              (0, E.xp)(t, L);
          }, [t, L]),
          en = s.useCallback(() => {
            J("");
          }, [J]),
          el = s.useRef(null);
        s.useEffect(() => {
          if ("" === X) {
            var e;
            null === (e = el.current) || void 0 === e || e.focus();
          }
        }, [X]);
        let es = s.useMemo(
            () =>
              (0, a.throttle)(
                () => {
                  (0, i.showToast)(
                    (0, i.createToast)(
                      Z.Z.Messages.MESSAGE_FORWARD_SUCCESS,
                      i.ToastType.FORWARD,
                    ),
                  );
                },
                3e3,
                { leading: !0, trailing: !1 },
              ),
            [],
          ),
          ea = s.useCallback(
            (e) => {
              F(t, L, "" !== X),
                q((t) => {
                  let n = t.findIndex((t) => {
                    let { type: n, id: l } = t;
                    return n === e.type && l === e.id;
                  });
                  if (-1 === n)
                    return K ? t : (J(""), (H.current += 1), [e, ...t]);
                  let l = [...t];
                  return l.splice(n, 1), (H.current += 1), l;
                });
            },
            [t, K, L, X, F],
          ),
          er = s.useCallback(
            async function (e) {
              let {
                  withMessage: s,
                  transitionToDestination: a,
                  closeAfterSend: r,
                } = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
                c = h.Z.getMessage(t, L);
              if (null == c) {
                (0, i.showToast)(
                  (0, i.createToast)(
                    Z.Z.Messages.ERROR_GENERIC_TITLE,
                    i.ToastType.FAILURE,
                  ),
                );
                return;
              }
              W(!0);
              let m = (await Promise.all(e.map(u.qx))).filter(g.lm);
              if (
                (0, M.Z)(c, m) &&
                !(await new Promise((e) => {
                  (0, i.openModalLazy)(async () => {
                    let { default: t } = await n
                      .e("88643")
                      .then(n.bind(n, 466080));
                    return (n) =>
                      (0, l.jsx)(t, {
                        ...n,
                        onConfirm: () => e(!0),
                        onBack: () => e(!1),
                      });
                  });
                }))
              ) {
                W(!1);
                return;
              }
              r && (0, p.mc)(), null == y || y(), a && (0, o.Kh)(m[0]);
              let f = await _.Z.sendForwards(c, m, { ...I, withMessage: s }),
                S = m.some((e) => {
                  let t = d.Z.getChannel(e);
                  return null != t && t.rateLimitPerUser > 0;
                });
              if (
                f.every((e) => {
                  let { status: t } = e;
                  return "fulfilled" === t;
                })
              ) {
                (0, E.gP)({
                  channelId: t,
                  messageId: L,
                  hasError: !1,
                  hasContextMessage: null != s && "" !== s,
                  numDestinations: m.length,
                  numDestinationChanges: H.current,
                  numQueryChanges: z.current,
                  anyDestinationHasSlowmode: S,
                }),
                  es();
                return;
              }
              (0, E.gP)({
                channelId: t,
                messageId: L,
                hasError: !0,
                hasContextMessage: null != s && "" !== s,
                numDestinations: m.length,
                numDestinationChanges: H.current,
                numQueryChanges: z.current,
                anyDestinationHasSlowmode: S,
              });
              let v = e.filter((e, t) => "rejected" === f[t].status);
              (0, p.Np)({
                messageId: L,
                channelId: t,
                failedDestinations: v,
                forwardOptions: I,
              });
            },
            [t, I, L, y, es],
          ),
          ei = s.useCallback(
            (e) => {
              er(V, {
                withMessage: e,
                transitionToDestination: 1 === V.length,
                closeAfterSend: !0,
              });
            },
            [er, V],
          ),
          eo = s.useCallback(() => ei(), [ei]),
          eu = s.useCallback(
            function (e) {
              let { transitionToDestination: t, closeAfterSend: n } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              er([e], { transitionToDestination: t, closeAfterSend: n });
            },
            [er],
          );
        if (null == G || null == U) return null;
        let ec =
            $.length > 0
              ? (0, l.jsx)(v.F, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: $,
                  rowMode: j ? v.G.SEND : v.G.TOGGLE,
                  message: G,
                  originChannel: U,
                  handleToggleDestination: j ? eu : ea,
                  selectedDestinations: V,
                  disableSelection: K,
                })
              : (0, l.jsxs)(i.ModalContent, {
                  className: A.noResults,
                  children: [
                    (0, l.jsx)("img", {
                      className: A.noResultsImg,
                      src: b,
                      alt: "",
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: Z.Z.Messages.SEARCH_NO_RESULTS,
                    }),
                  ],
                }),
          ed =
            Y <= 1
              ? Z.Z.Messages.SEND
              : Z.Z.Messages.MESSAGES_SEND_SEPARATELY.format({ count: Y });
        return (0, l.jsxs)(i.ModalRoot, {
          className: A.modal,
          "aria-label": Z.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
          ...T,
          children: [
            (0, l.jsxs)(i.ModalHeader, {
              className: A.header,
              children: [
                (0, l.jsxs)("div", {
                  className: A.titleLine,
                  children: [
                    (0, l.jsx)("div", {
                      className: A.title,
                      children: (0, l.jsx)(i.HeadingLevel, {
                        component: (0, l.jsx)(i.Heading, {
                          variant: "heading-lg/semibold",
                          children: Z.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
                        }),
                        children: K
                          ? (0, l.jsx)(i.Text, {
                              variant: "text-sm/normal",
                              color: "text-warning",
                              children:
                                Z.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format(
                                  { count: C.G },
                                ),
                            })
                          : (j || P) &&
                            (0, l.jsx)(i.Heading, {
                              variant: "heading-sm/normal",
                              color: "header-muted",
                              children: Z.Z.Messages.MESSAGE_FORWARD_SUBTITLE,
                            }),
                      }),
                    }),
                    (0, l.jsx)(i.ModalCloseButton, {
                      className: A.closeButton,
                      onClick: ee,
                    }),
                  ],
                }),
                j &&
                  D &&
                  (0, l.jsx)("div", {
                    className: A.forwardPreviewWrapperInset,
                    children: (0, l.jsx)(N.O, {
                      message: G,
                      forwardOptions: I,
                    }),
                  }),
                (0, l.jsx)(i.SearchBar, {
                  ref: el,
                  size: i.SearchBar.Sizes.MEDIUM,
                  query: X,
                  onChange: Q,
                  onClear: en,
                  placeholder: Z.Z.Messages.SEARCH,
                  "aria-label": Z.Z.Messages.SEARCH,
                  autoFocus: !0,
                }),
              ],
            }),
            ec,
            !j &&
              (P
                ? (0, l.jsx)(x.n, {
                    message: G,
                    forwardOptions: I,
                    sendLabel: ed,
                    canSend: Y > 0,
                    selectedDestinations: V,
                    isSending: k,
                    onSend: ei,
                    showPreview: D,
                  })
                : (0, l.jsxs)(i.ModalFooter, {
                    className: A.footer,
                    children: [
                      (0, l.jsx)(i.Button, {
                        submitting: k,
                        disabled: 0 === Y,
                        onClick: eo,
                        children: ed,
                      }),
                      (0, l.jsx)(i.Button, {
                        onClick: et,
                        look: i.Button.Looks.OUTLINED,
                        color: i.Button.Colors.PRIMARY,
                        children: Z.Z.Messages.COPY_LINK,
                      }),
                    ],
                  })),
          ],
        });
      }
    },
    646746: function (e, t, n) {
      n.d(t, {
        O: function () {
          return E;
        },
      });
      var l = n(735250),
        s = n(470079),
        a = n(120356),
        r = n.n(a),
        i = n(392711),
        o = n(481060),
        u = n(686546),
        c = n(124347),
        d = n(499376),
        h = n(937889),
        m = n(930282),
        f = n(318616),
        g = n(689938),
        _ = n(228895);
      function E(e) {
        let { message: t, forwardOptions: n } = e,
          {
            attachments: a,
            embeds: E,
            hasContent: S,
            contentMessage: M,
          } = (0, f.c)({ message: t, forwardOptions: n }),
          v = s.useMemo(
            () =>
              S
                ? (0, h.ZP)(t, {
                    formatInline: !0,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0,
                    hideSimpleEmbedContent: !1,
                    contentMessage: M,
                  }).content
                : null,
            [M, S, t],
          ),
          x = a.length,
          p = null,
          N = null,
          C = null;
        if (x > 0 || E.length > 0) {
          var Z, A, b, L;
          let e = (0, i.countBy)(a, (e) => (0, d.aw)(e, !0)),
            t = null !== (b = e.IMAGE) && void 0 !== b ? b : 0,
            n = null !== (L = e.VIDEO) && void 0 !== L ? L : 0;
          t > 0 && n > 0
            ? ((p = g.Z.Messages.NUM_IMAGES_VIDEOS.format({
                image_count: t,
                video_count: n,
              })),
              (N = o.ImagesIcon))
            : n > 0
              ? ((p = g.Z.Messages.NUM_VIDEOS.format({ count: n })),
                (N = o.CirclePlayIcon))
              : t > 0
                ? ((p = g.Z.Messages.NUM_IMAGES.format({ count: t })),
                  (N = 1 === t ? o.ImageIcon : o.ImagesIcon))
                : ((p = g.Z.Messages.NUM_ATTACHMENTS.format({ count: x })),
                  (N = o.AttachmentIcon)),
            n > 0 && x === n
              ? (C = (0, l.jsxs)("div", {
                  className: r()(_.attachmentPreview, _.attachmentPreviewVideo),
                  children: [
                    (0, l.jsx)(c.Z, {
                      className: _.thumbnail,
                      src: a[0].proxy_url,
                      width: 56,
                      height: 56,
                    }),
                    (0, l.jsx)(o.CirclePlayIcon, {
                      className: _.playIcon,
                      size: "md",
                      color: "white",
                    }),
                  ],
                }))
              : x > 0
                ? (C = (0, l.jsx)("div", {
                    className: _.attachmentPreview,
                    children: (0, l.jsx)(c.Z, {
                      src: a[0].proxy_url,
                      width: 56,
                      height: 56,
                    }),
                  }))
                : (null === (A = E[0]) || void 0 === A
                    ? void 0
                    : null === (Z = A.thumbnail) || void 0 === Z
                      ? void 0
                      : Z.proxyURL) != null &&
                  (C = (0, l.jsx)("div", {
                    className: _.attachmentPreview,
                    children: (0, l.jsx)(c.Z, {
                      src: E[0].thumbnail.proxyURL,
                      width: 56,
                      height: 56,
                    }),
                  }));
        }
        return (
          x > 1 &&
            null != C &&
            (C = (0, l.jsxs)("div", {
              className: _.attachmentPreviewOverflow,
              children: [
                (0, l.jsx)(u.ZP, {
                  mask: u.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                  width: 56,
                  height: 56,
                  children: C,
                }),
                (0, l.jsxs)(o.Text, {
                  className: _.overflowCount,
                  variant: "text-xs/semibold",
                  color: "text-normal",
                  children: ["+", x - 1],
                }),
              ],
            })),
          (0, l.jsxs)("div", {
            className: _.forwardPreview,
            children: [
              (0, l.jsx)("div", { className: _.quote }),
              (0, l.jsxs)("div", {
                className: _.contentWrapper,
                children: [
                  S &&
                    (0, l.jsx)(m.ZP, {
                      className: r()(
                        _.forwardPreviewMessage,
                        x > 0 && _.hasAttachments,
                      ),
                      message: t,
                      content: v,
                    }),
                  x > 0 &&
                    (0, l.jsxs)("div", {
                      className: _.attachmentRow,
                      children: [
                        null != N &&
                          (0, l.jsx)(N, {
                            size: "custom",
                            width: S ? 18 : 20,
                            color: o.tokens.colors.TEXT_LOW_CONTRAST,
                          }),
                        null != p &&
                          (0, l.jsx)(o.Text, {
                            variant: S ? "text-sm/medium" : "text-md/medium",
                            color: "text-low-contrast",
                            children: p,
                          }),
                      ],
                    }),
                ],
              }),
              C,
            ],
          })
        );
      }
    },
    810123: function (e, t, n) {
      n.d(t, {
        E: function () {
          return l;
        },
      });
      var l,
        s = n(735250),
        a = n(120356),
        r = n.n(a),
        i = n(468194),
        o = n(471445),
        u = n(686546),
        c = n(664481);
      (l || (l = {})).SMALL_32 = "SMALL_32";
      let d = { SMALL_32: 24 },
        h = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] };
      t.Z = function (e) {
        var t, n, l;
        let {
          className: a,
          iconClassName: m,
          size: f,
          channel: g,
          guild: _,
          locked: E,
          hasActiveThreads: S,
        } = e;
        if (null == _) return null;
        let M = _.getIconURL(48),
          v = h[f],
          x = d[f],
          p = (0, o.KS)(g, _, { locked: E, hasActiveThreads: S });
        if (null == p) return null;
        let N = (0, i.Zg)(
          null !== (t = null == _ ? void 0 : _.toString()) && void 0 !== t
            ? t
            : null,
        );
        return (0, s.jsxs)("div", {
          role: "img",
          className: a,
          children: [
            (0, s.jsx)(u.ZP, {
              mask: u.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
              children:
                null != M
                  ? (0, s.jsx)("img", {
                      alt: "",
                      src: M,
                      className: c.channelGuildIcon,
                      style: { width: x, height: x },
                    })
                  : (0, s.jsx)("div", {
                      className: r()(c.channelGuildIcon, c.acronym),
                      style: {
                        fontSize:
                          ((n = v),
                          (l = N).length - 1 > n.length
                            ? n[n.length - 1]
                            : n[l.length - 1]),
                        width: x,
                        height: x,
                      },
                      children: N,
                    }),
            }),
            (0, s.jsx)(p, {
              className: r()(c.icon, c.iconWithGuildIcon, m),
              color: "currentColor",
            }),
          ],
        });
      };
    },
    448486: function (e, t, n) {
      n.d(t, {
        _: function () {
          return u;
        },
      });
      var l = n(470079),
        s = n(442837),
        a = n(594174),
        r = n(823379),
        i = n(51144),
        o = n(689938);
      function u(e) {
        let t = (0, s.Wu)([a.default], () =>
          e.recipients
            .map((e) => a.default.getUser(e))
            .filter(r.lm)
            .map((e) => i.ZP.getName(e)),
        );
        return l.useMemo(
          () =>
            "" === e.name
              ? null
              : (function (e) {
                  if (0 === e.length) return null;
                  if (1 === e.length)
                    return o.Z.Messages.USER_SUMMARY_ONE.format({
                      first: e[0],
                    });
                  if (2 === e.length)
                    return o.Z.Messages.USER_SUMMARY_TWO.format({
                      first: e[0],
                      second: e[1],
                    });
                  if (3 === e.length)
                    return o.Z.Messages.USER_SUMMARY_THREE.format({
                      first: e[0],
                      second: e[1],
                      third: e[2],
                    });
                  let t = e.length - 3;
                  return o.Z.Messages.USER_SUMMARY_THREE_AND_OTHERS.format({
                    first: e[0],
                    second: e[1],
                    third: e[2],
                    count: t,
                  });
                })(t),
          [e, t],
        );
      }
    },
    41837: function (e, t, n) {
      n.d(t, {
        M: function () {
          return s;
        },
        o: function () {
          return a;
        },
      });
      var l = n(212819);
      let s = Array.from([
        l.h8.USER,
        l.h8.TEXT_CHANNEL,
        l.h8.VOICE_CHANNEL,
        l.h8.GROUP_DM,
      ]);
      function a(e) {
        return s.includes(e.type);
      }
    },
    987509: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return x;
        },
        dL: function () {
          return f;
        },
        hC: function () {
          return g;
        },
        hl: function () {
          return _;
        },
        qx: function () {
          return E;
        },
      }),
        n(47120),
        n(653041);
      var l = n(392711),
        s = n(493683),
        a = n(212819),
        r = n(938078),
        i = n(823385),
        o = n(592125),
        u = n(496675),
        c = n(594174),
        d = n(823379),
        h = n(41837),
        m = n(981631);
      n(689938);
      function f(e) {
        let t = o.Z.getChannel(e);
        return (null == t ? void 0 : t.type) === m.d4z.DM
          ? { type: "user", id: t.recipients[0] }
          : { type: "channel", id: e };
      }
      function g(e) {
        return "".concat(e.type, "-").concat(e.id);
      }
      function _(e) {
        if ("channel" === e.type) return e.id;
        let t = o.Z.getDMFromUserId(e.id);
        if (null != t) return t;
      }
      async function E(e) {
        let t = _(e);
        if (null != t) return t;
        if ("user" === e.type)
          try {
            return await s.Z.getOrEnsurePrivateChannel(e.id);
          } catch (e) {
            return;
          }
      }
      function S(e) {
        if ("user" !== e.type) return (0, r.Z)(e.id);
        {
          let t = c.default.getUser(e.id);
          return null != t ? { type: a.h8.USER, record: t, score: 0 } : null;
        }
      }
      function M(e, t) {
        let n;
        let l = new Set();
        if (null != t) for (let e of t) l.add(e);
        let s = [];
        for (let t of e) {
          if (null != t)
            if (t.type === a.h8.HEADER) n = t;
            else {
              let { id: e } = t.record;
              !l.has(e) &&
                (l.add(e), null != n && (s.push(n), (n = void 0)), s.push(t));
            }
        }
        return s;
      }
      function v(e, t) {
        return e.filter((e) => {
          var n, l;
          return (
            (0, d.lm)(e) &&
            (e.type === a.h8.HEADER ||
              ((0, h.o)(e) &&
                ((n = e),
                (l = t),
                n.type === a.h8.USER
                  ? l || null != o.Z.getDMChannelFromUserId(n.record.id)
                  : n.type === a.h8.GROUP_DM ||
                    (n.record.type !== m.d4z.GUILD_FORUM &&
                      n.record.type !== m.d4z.GUILD_MEDIA &&
                      u.Z.can(m.Plq.VIEW_CHANNEL, n.record) &&
                      u.Z.can(m.Plq.SEND_MESSAGES, n.record)))))
          );
        });
      }
      function x(e) {
        let {
          results: t,
          hasQuery: n,
          queryMode: s,
          frequentChannels: a,
          targetDestination: o,
          selectedDestinations: u,
          pinnedDestinations: c,
          originDestination: d,
          includeMissingDMs: h,
        } = e;
        if (n) return M(v(t, h));
        let m = null != c && c.length > 0 ? c.map((e) => S(e)) : [],
          f = i.Z.getChannelHistory(),
          g = f.length > 0 ? f.map((e) => (0, r.Z)(e)) : [],
          _ = a.length > 0 ? a.map((e) => (0, r.Z)(e.id)) : [],
          E = v([...m, null != o ? S(o) : null, ...g, ..._], h),
          x =
            (null == u ? void 0 : u.find((e) => (0, l.isEqual)(e, d))) != null,
          p = null == d || x ? [] : [d.id];
        return null != s
          ? M(E.filter((e) => e.type === s))
          : M(E, p).slice(0, 15);
      }
    },
    601565: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var l = n(470079),
        s = n(77866),
        a = n(212819);
      function r(e) {
        let { searchOptions: t } = e,
          [n, r] = l.useState({ results: [], query: "" }),
          i = (0, s.Z)(() => {
            let e = new a.ZP((e, t) => {
              r({ results: e, query: t });
            });
            return e.setLimit(20), e.search(""), e;
          });
        return (
          l.useEffect(() => () => i.destroy(), [i]),
          l.useEffect(() => {
            null != t && t !== i.options && i.setOptions(t);
          }, [i, t]),
          {
            search: l.useCallback(
              (e) => {
                var t, n;
                let { query: l, resultTypes: s } = e;
                if (
                  null == i.resultTypes ||
                  ((t = s),
                  (n = i.resultTypes),
                  !(t.length === n.size && t.every((e) => n.has(e))))
                )
                  i.setResultTypes(s), i.setLimit(1 === s.length ? 50 : 20);
                i.search("" === l.trim() ? "" : l);
              },
              [i],
            ),
            ...n,
          }
        );
      }
    },
    72214: function (e, t, n) {
      n.d(t, {
        s: function () {
          return m;
        },
      }),
        n(47120);
      var l = n(470079),
        s = n(442837),
        a = n(38618),
        r = n(51596),
        i = n(516373),
        o = n(314897),
        u = n(580005),
        c = n(987509),
        d = n(601565),
        h = n(41837);
      function m(e) {
        let {
            searchText: t,
            targetDestination: n,
            selectedDestinations: m,
            originDestination: f,
            includeMissingDMs: g = !1,
          } = e,
          _ = (0, s.e7)([o.default], () => o.default.getId()),
          E = l.useMemo(
            () => ({
              searchOptions: {
                blacklist: new Set(["user:".concat(_)]),
                frecencyBoosters: !0,
                userFilters: null,
              },
            }),
            [_],
          ),
          { search: S, query: M, results: v } = (0, d.Z)(E),
          x = l.useMemo(
            () =>
              (function (e) {
                let { query: t, queryMode: n } = (0, r.F_)(e),
                  l = h.M,
                  s = null;
                return (
                  null != n && h.M.includes(n) && ((l = [n]), (s = n)),
                  { query: t, queryMode: s, resultTypes: l }
                );
              })(t),
            [t],
          ),
          { queryMode: p } = x,
          [N, C] = l.useState(null != m ? m : []);
        l.useLayoutEffect(() => {
          let { query: e, resultTypes: t } = x;
          S({ query: e, resultTypes: t }), C(null != m ? m : []);
        }, [S, x]),
          (0, i.D)();
        let Z = (0, s.e7)([u.Z], () =>
            u.Z.getFrequentlyWithoutFetchingLatest(),
          ),
          A = (0, s.e7)([a.Z], () => a.Z.isConnected()),
          b = "" !== M;
        return l.useMemo(
          () =>
            (0, c.ZP)({
              results: v,
              hasQuery: b,
              queryMode: p,
              targetDestination: n,
              frequentChannels: Z,
              selectedDestinations: m,
              pinnedDestinations: N,
              originDestination: f,
              includeMissingDMs: g,
              isConnected: A,
            }),
          [v, b, p, n, Z, m, N, f, g, A],
        );
      }
    },
    463061: function (e, t, n) {
      e.exports = {
        modal: "modal_d0585c",
        header: "header_d0585c",
        titleLine: "titleLine_d0585c",
        title: "title_d0585c",
        closeButton: "closeButton_d0585c",
        footer: "footer_d0585c",
        footerWithMessage: "footerWithMessage_d0585c",
        footerWarningWrapper: "footerWarningWrapper_d0585c",
        footerButtons: "footerButtons_d0585c",
        destinationRow: "destinationRow_d0585c",
        disabled: "disabled_d0585c",
        identity: "identity_d0585c",
        labels: "labels_d0585c",
        label: "label_d0585c",
        threadSubLabel: "threadSubLabel_d0585c",
        subLabelIcon: "subLabelIcon_d0585c",
        subLabelSeparator: "subLabelSeparator_d0585c",
        iconWrapper: "iconWrapper_d0585c",
        subLabel: "subLabel_d0585c",
        checkbox: "checkbox_d0585c",
        fauxButton: "fauxButton_d0585c",
        noResults: "noResults_d0585c",
        noResultsImg: "noResultsImg_d0585c",
        actions: "actions_d0585c",
        sendWithMessage: "sendWithMessage_d0585c",
        messageInput: "messageInput_d0585c",
        forwardPreviewWrapper: "forwardPreviewWrapper_d0585c",
        forwardPreviewWrapperInset: "forwardPreviewWrapperInset_d0585c",
      };
    },
    228895: function (e, t, n) {
      e.exports = {
        forwardPreview: "forwardPreview_e4c972",
        quote: "quote_e4c972",
        contentWrapper: "contentWrapper_e4c972",
        attachmentRow: "attachmentRow_e4c972",
        forwardPreviewMessage: "forwardPreviewMessage_e4c972",
        hasAttachments: "hasAttachments_e4c972",
        attachmentPreview: "attachmentPreview_e4c972",
        attachmentPreviewVideo: "attachmentPreviewVideo_e4c972",
        thumbnail: "thumbnail_e4c972",
        playIcon: "playIcon_e4c972",
        attachmentPreviewOverflow: "attachmentPreviewOverflow_e4c972",
        overflowCount: "overflowCount_e4c972",
      };
    },
    664481: function (e, t, n) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
  },
]);
//# sourceMappingURL=c89bc38ca346f29313f9.js.map
