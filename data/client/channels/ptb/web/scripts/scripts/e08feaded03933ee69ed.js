"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33648"],
  {
    621054: function (e) {
      e.exports = "/assets/a315359c0fd32511b45e.svg";
    },
    560361: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(470079);
      function s(e) {
        let n = l.useRef();
        (n.current = e),
          l.useEffect(
            () => () => {
              var e;
              return null === (e = n.current) || void 0 === e
                ? void 0
                : e.call(n);
            },
            [],
          );
      }
    },
    859155: function (e, n, t) {
      t(411104);
      var l = t(991637),
        s = t.n(l),
        a = t(388123),
        r = t(904245),
        i = t(957730),
        o = t(592125),
        u = t(496675),
        c = t(784384);
      let d = {
        async sendForward(e, n, t) {
          let l = o.Z.getChannel(n),
            s = o.Z.getChannel(e.channel_id);
          if (null == s)
            throw Error("Unable to find original channel for message");
          if (null == l)
            throw Error("Unable to find destination channel for message");
          let d = i.ZP.parse(l, ""),
            h = {
              guild_id: s.guild_id,
              channel_id: e.channel_id,
              message_id: e.id,
              type: a.U.FORWARD,
              forward_only:
                (null == t ? void 0 : t.onlyAttachmentIds) != null ||
                (null == t ? void 0 : t.onlyEmbedIndices) != null
                  ? {
                      attachment_ids: t.onlyAttachmentIds,
                      embed_indices: t.onlyEmbedIndices,
                    }
                  : void 0,
            };
          await r.Z.sendMessage(l.id, d, !1, {
            messageReference: h,
            eagerDispatch: !1,
          }),
            (null == t ? void 0 : t.withMessage) != null &&
              !(0, c.pU)(l, u.Z) &&
              (await r.Z.sendMessage(l.id, i.ZP.parse(l, t.withMessage), !1));
        },
        sendForwards: (e, n, t) => s()(n.map((n) => d.sendForward(e, n, t))),
      };
      n.Z = d;
    },
    819727: function (e, n, t) {
      t.d(n, {
        G: function () {
          return l;
        },
      });
      let l = 5;
    },
    784384: function (e, n, t) {
      t.d(n, {
        HY: function () {
          return g;
        },
        pU: function () {
          return _;
        },
        y: function () {
          return E;
        },
      }),
        t(47120),
        t(390547);
      var l = t(442837),
        s = t(933557),
        a = t(926491),
        r = t(378233),
        i = t(131704),
        o = t(592125),
        u = t(496675),
        c = t(699516),
        d = t(594174),
        h = t(823379),
        f = t(981631),
        m = t(689938);
      function g(e, n, t) {
        let l = t instanceof i.Sf;
        if (n.isNSFW() && !(l && t.isNSFW()))
          return { label: m.Z.Messages.MESSAGE_FORWARDING_NSFW_NOT_ALLOWED };
        if (l && (0, i.Km)(t.type)) {
          if (
            (e.attachments.length > 0 ||
              e.messageSnapshots.some(
                (e) => e.message.attachments.length > 0,
              )) &&
            !u.Z.can(f.Plq.ATTACH_FILES, t)
          )
            return { label: m.Z.Messages.MESSAGE_CHANNEL_ATTACHMENTS_DISABLED };
          if (
            (e.embeds.length > 0 ||
              e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
            !u.Z.can(f.Plq.EMBED_LINKS, t)
          )
            return { label: m.Z.Messages.MESSAGE_CHANNEL_EMBEDS_DISABLED };
          let n = [
            ...(0, r.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
              let { message: n } = e;
              return (0, r.cv)(n);
            }),
          ];
          if (
            n.length > 0 &&
            !u.Z.can(f.Plq.USE_EXTERNAL_STICKERS, t) &&
            n.some((e) =>
              (function (e, n) {
                let t = a.Z.getStickerById(e.id);
                return (
                  !!(null != t && (0, r.J8)(t)) &&
                  (t.guild_id !== n.guild_id || void 0)
                );
              })(e, t),
            )
          )
            return {
              label: m.Z.Messages.MESSAGE_CHANNEL_EXTERNAL_STICKERS_DISABLED,
            };
          if (
            (e.hasFlag(f.iLy.IS_VOICE_MESSAGE) ||
              e.messageSnapshots.some((e) =>
                e.message.hasFlag(f.iLy.IS_VOICE_MESSAGE),
              )) &&
            !u.Z.can(f.Plq.SEND_VOICE_MESSAGES, t)
          )
            return {
              label: m.Z.Messages.MESSAGE_CHANNEL_VOICE_MESSAGES_DISABLED,
            };
        }
      }
      function _(e, n) {
        return (
          null != e.rateLimitPerUser &&
          !!(e.rateLimitPerUser > 0) &&
          !(n.can(f.Plq.MANAGE_CHANNELS, e) || n.can(f.Plq.MANAGE_MESSAGES, e))
        );
      }
      function E(e) {
        let n = (0, l.Wu)(
          [o.Z, u.Z],
          () =>
            e
              .map((e) => {
                let { type: n, id: t } = e;
                return "channel" === n ? o.Z.getChannel(t) : null;
              })
              .filter(h.lm)
              .filter((e) => _(e, u.Z)),
          [e],
        );
        return (0, l.Wu)(
          [d.default, c.Z],
          () => n.map((e) => (0, s.F6)(e, d.default, c.Z, !0)),
          [n],
        );
      }
    },
    318616: function (e, n, t) {
      t.d(n, {
        c: function () {
          return l;
        },
      });
      function l(e) {
        var n, t, l;
        let { message: s, forwardOptions: a } = e,
          r = null == a ? void 0 : a.onlyAttachmentIds,
          i = null == a ? void 0 : a.onlyEmbedIndices,
          o =
            null !==
              (l =
                null === (n = s.messageSnapshots[0]) || void 0 === n
                  ? void 0
                  : n.message) && void 0 !== l
              ? l
              : s,
          u = o.attachments;
        null != r
          ? (u = o.attachments.filter((e) => r.includes(e.id)))
          : null != i && (u = []);
        let c = o.embeds;
        return (
          null != i
            ? (c = o.embeds.filter((e, n) => i.includes(n)))
            : null != r && (c = []),
          (null != i || ("" === o.content && c.length > 0)) &&
            (o = o.set("content", c.map((e) => e.url).join("\n"))),
          "" === o.content &&
            (null === (t = o.embeds[0]) || void 0 === t
              ? void 0
              : t.rawDescription) != null &&
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
    895442: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(592125),
        s = t(430824),
        a = t(594174),
        r = t(981631);
      function i(e) {
        if (!e.isPrivate()) {
          let n = s.Z.getGuild(e.guild_id);
          return null != n && n.hasFeature(r.oNc.INTERNAL_EMPLOYEE_ONLY);
        }
        return e.recipients.every((e) => {
          let n = a.default.getUser(e);
          return null != n && n.isStaff();
        });
      }
      function o(e, n) {
        var t;
        if (
          !(null === (t = a.default.getCurrentUser()) || void 0 === t
            ? void 0
            : t.isStaff())
        )
          return !1;
        let s = l.Z.getChannel(e.channel_id);
        return (
          !!(null != s && i(s)) &&
          n.some((e) => {
            let n = l.Z.getChannel(e);
            return !(null == n || n.isPrivate()) && !i(n);
          })
        );
      }
    },
    757853: function (e, n, t) {
      t.d(n, {
        F: function () {
          return F;
        },
        G: function () {
          return l;
        },
      }),
        t(47120);
      var l,
        s,
        a = t(735250),
        r = t(470079),
        i = t(120356),
        o = t.n(i),
        u = t(913527),
        c = t.n(u),
        d = t(91192),
        h = t(442837),
        f = t(481060),
        m = t(700582),
        g = t(560361),
        _ = t(724757),
        E = t(212819),
        S = t(933557),
        M = t(266076),
        v = t(810123),
        p = t(448486),
        x = t(987509),
        N = t(592125),
        C = t(430824),
        Z = t(158776),
        A = t(306680),
        b = t(699516),
        L = t(594174),
        R = t(626135),
        I = t(55935),
        w = t(823379),
        y = t(51144),
        T = t(784384),
        P = t(981631),
        j = t(490897),
        D = t(689938),
        O = t(463061);
      function k(e) {
        let {
            message: n,
            destination: t,
            rowMode: l,
            icon: s,
            label: i,
            subLabel: u,
            selected: c,
            disabled: h,
            onPressDestination: m,
            "aria-setsize": _,
            "aria-posinset": E,
          } = e,
          S = (0, d.JA)(t.id),
          [M, v] = r.useState(!1),
          p = r.useRef(!1),
          x = r.useCallback(() => {
            if ("send" === l) {
              v(!0), (p.current = !0);
              return;
            }
            null == m || m(t);
          }, [l, m, t]),
          N = r.useCallback(() => {
            R.default.track(P.rMx.FORWARD_ONE_TAP_VIEW, {
              channel_id: n.channel_id,
              message_id: n.id,
            }),
              (p.current = !1),
              null == m ||
                m(t, { transitionToDestination: !0, closeAfterSend: !0 });
          }, [n.channel_id, n.id, m, t]),
          C = r.useCallback(() => {
            v(!1),
              (p.current = !1),
              R.default.track(P.rMx.FORWARD_ONE_TAP_UNDO, {
                channel_id: n.channel_id,
                message_id: n.id,
              });
          }, [n]);
        return (
          (0, g.Z)(() => {
            p.current &&
              ((p.current = !1),
              null == m ||
                m(t, { transitionToDestination: !1, closeAfterSend: !1 }));
          }),
          (0, a.jsxs)(f.Clickable, {
            className: o()(O.destinationRow, { [O.disabled]: h }),
            onClick: h || M ? void 0 : x,
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
                      (0, a.jsx)(f.Text, {
                        tag: "strong",
                        className: O.label,
                        variant: "text-md/semibold",
                        lineClamp: 1,
                        children: i,
                      }),
                      (0, a.jsx)(f.Text, {
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
                (0, a.jsx)(f.Checkbox, {
                  type: f.Checkbox.Types.INVERTED,
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
                      ? (0, a.jsx)(f.Button, {
                          size: f.Button.Sizes.SMALL,
                          color: f.Button.Colors.PRIMARY,
                          look: f.Button.Looks.LINK,
                          onClick: N,
                          children: D.Z.Messages.VIEW,
                        })
                      : (0, a.jsx)("div", {
                          className: o()(
                            (0, f.getButtonStyle)({
                              size: f.Button.Sizes.SMALL,
                              color: f.Button.Colors.BRAND,
                            }),
                            O.fauxButton,
                          ),
                          children: D.Z.Messages.SEND,
                        }),
                    M &&
                      (0, a.jsx)(f.Button, {
                        size: f.Button.Sizes.SMALL,
                        color: f.Button.Colors.BRAND,
                        look: f.Button.Looks.OUTLINED,
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
        let { user: n, subLabel: t, ...l } = e,
          s = y.ZP.useName(n),
          r = y.ZP.useUserTag(n, { decoration: "never" }),
          i = (0, h.e7)([b.Z], () => b.Z.getNickname(n.id)),
          o = (0, h.e7)([Z.Z], () => Z.Z.getStatus(n.id));
        return (0, a.jsx)(k, {
          ...l,
          icon: (0, a.jsx)(m.Z, {
            "aria-hidden": !0,
            size: f.AvatarSizes.SIZE_32,
            user: n,
            status: o,
          }),
          label: null != i ? i : s,
          subLabel: null != t ? t : r,
        });
      }
      function G(e) {
        let { channel: n, subLabel: t, ...l } = e,
          s = (0, S.ZP)(n),
          r = (0, p._)(n);
        return (0, a.jsx)(k, {
          ...l,
          icon: (0, a.jsx)(M.Z, {
            "aria-hidden": !0,
            size: f.AvatarSizes.SIZE_32,
            channel: n,
            experimentLocation: "forward-modal",
          }),
          label: s,
          subLabel: null != t ? t : r,
        });
      }
      function U(e) {
        let { channel: n, subLabel: t, ...l } = e,
          s = (0, h.e7)([C.Z], () =>
            C.Z.getGuild(null == n ? void 0 : n.guild_id),
          ),
          r = (0, S.ZP)(n),
          i = (0, h.e7)([N.Z, L.default, b.Z], () => {
            let e = N.Z.getChannel(n.parent_id);
            return null == e ? null : (0, S.F6)(e, L.default, b.Z, !1);
          }),
          o = (0, h.e7)([A.ZP], () =>
            A.ZP.lastMessageTimestamp(n.id, j.W.CHANNEL),
          ),
          u = null == s ? void 0 : s.name;
        if (n.isThread() || n.isForumPost()) {
          let e = n.isForumPost() ? f.ForumIcon : f.TextIcon;
          u = (0, a.jsxs)("div", {
            className: O.threadSubLabel,
            children: [
              (0, a.jsx)(e, {
                color: f.tokens.colors.TEXT_SECONDARY,
                className: O.subLabelIcon,
              }),
              (0, a.jsx)(f.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                lineClamp: 1,
                children: i,
              }),
              null != o
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(f.Text, {
                        className: O.subLabelSeparator,
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: "•",
                      }),
                      (0, a.jsx)(f.Text, {
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
          icon: (0, a.jsx)(v.Z, { size: v.E.SMALL_32, guild: s, channel: n }),
          label: r,
          subLabel: null != t ? t : u,
        });
      }
      function F(e) {
        let {
            rowData: n,
            rowMode: t,
            message: l,
            originChannel: s,
            selectedDestinations: i,
            handleToggleDestination: o,
            disableSelection: u,
            ...c
          } = e,
          h = r.useMemo(() => [n.length], [n.length]),
          m = r.useCallback(() => 48, []),
          g = r.useMemo(() => {
            var e;
            return null !== (e = null == i ? void 0 : i.map(x.hC)) &&
              void 0 !== e
              ? e
              : [];
          }, [i]),
          S = r.useCallback(
            (e) => {
              let { section: r, row: i } = e;
              if (r > 0) return;
              let { type: c, record: d } = n[i];
              if (c === E.h8.HEADER) return;
              let h =
                  c === E.h8.USER
                    ? { type: "user", id: d.id }
                    : { type: "channel", id: d.id },
                f = (0, x.hC)(h),
                m = (0, T.HY)(l, s, d),
                _ = g.includes(f),
                S = {
                  key: f,
                  message: l,
                  destination: h,
                  rowMode: t,
                  subLabel: null != m ? m.label : void 0,
                  disabled: (u && !_) || null != m,
                  selected: _,
                  onPressDestination: o,
                  "aria-posinset": i + 1,
                  "aria-setsize": n.length,
                };
              if (c === E.h8.USER) return (0, a.jsx)(W, { user: d, ...S });
              if (c === E.h8.GROUP_DM)
                return (0, a.jsx)(G, { channel: d, ...S });
              if (c === E.h8.TEXT_CHANNEL || c === E.h8.VOICE_CHANNEL)
                return (0, a.jsx)(U, { channel: d, ...S });
              else (0, w.vE)(c);
            },
            [u, o, l, s, n, t, g],
          ),
          M = r.useRef(null),
          v = (0, _.Z)("forward-modal", M);
        return (0, a.jsx)(d.bG, {
          navigator: v,
          children: (0, a.jsx)(d.SJ, {
            children: (e) => {
              let { ref: n, ...t } = e;
              return (0, a.jsx)(f.ModalListContent, {
                scrollerRef: (e) => {
                  var t;
                  (M.current = e),
                    (n.current =
                      null !== (t = null == e ? void 0 : e.getScrollerNode()) &&
                      void 0 !== t
                        ? t
                        : null);
                },
                ...t,
                ...c,
                sections: h,
                sectionHeight: 0,
                renderRow: S,
                rowHeight: m,
              });
            },
          }),
        });
      }
      ((s = l || (l = {})).TOGGLE = "toggle"), (s.SEND = "send");
    },
    388275: function (e, n, t) {
      t.d(n, {
        n: function () {
          return x;
        },
      }),
        t(47120);
      var l = t(735250),
        s = t(470079),
        a = t(106351),
        r = t(442837),
        i = t(481060),
        o = t(541716),
        u = t(752305),
        c = t(893718),
        d = t(849522),
        h = t(987509),
        f = t(131704),
        m = t(592125),
        g = t(823379),
        _ = t(784384),
        E = t(822869),
        S = t(912332),
        M = t(646746),
        v = t(689938),
        p = t(463061);
      function x(e) {
        let {
            message: n,
            forwardOptions: t,
            sendLabel: x,
            canSend: N,
            selectedDestinations: C,
            isSending: Z,
            onSend: A,
            showPreview: b,
          } = e,
          L = (0, d.Z)(),
          R = C.map(h.hl).find(g.lm),
          I = (0, r.e7)([m.Z], () => m.Z.getChannel(R), [R]),
          w = s.useMemo(
            () => (null != I ? I : (0, f.kt)({ id: "1", type: a.d.DM })),
            [I],
          ),
          y = (0, _.y)(C),
          T = (0, E.Ad)(),
          [P, j] = s.useState(() => (0, u.H2)()),
          { textValue: D, richValue: O } = P,
          [k, W] = s.useState(!1),
          G = s.useCallback(() => W(!0), []),
          U = s.useCallback(() => W(!1), []),
          F = s.useCallback(
            (e, t, l) => {
              j({ textValue: t, richValue: l }), T(n.channel_id, n.id);
            },
            [T, n],
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
          className: p.footerWithMessage,
          children: [
            b &&
              (0, l.jsx)("div", {
                className: p.forwardPreviewWrapper,
                children: (0, l.jsx)(M.O, { message: n, forwardOptions: t }),
              }),
            (0, l.jsxs)("div", {
              className: p.footerWarningWrapper,
              children: [
                (0, l.jsxs)("div", {
                  className: p.footerButtons,
                  children: [
                    (0, l.jsx)(c.Z, {
                      innerClassName: p.messageInput,
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
                      className: p.sendWithMessage,
                      submitting: Z,
                      disabled: !N || D.length > L,
                      onClick: B,
                      children: x,
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
    930864: function (e, n, t) {
      t.r(n),
        t.d(n, {
          ForwardModal: function () {
            return L;
          },
        }),
        t(47120);
      var l = t(735250),
        s = t(470079),
        a = t(392711),
        r = t(442837),
        i = t(481060),
        o = t(359110),
        u = t(987509),
        c = t(72214),
        d = t(592125),
        h = t(375954),
        f = t(934415),
        m = t(572004),
        g = t(823379),
        _ = t(859155),
        E = t(822869),
        S = t(346610),
        M = t(895442),
        v = t(757853),
        p = t(388275),
        x = t(912332),
        N = t(646746),
        C = t(819727),
        Z = t(689938),
        A = t(463061),
        b = t(621054);
      function L(e) {
        let {
            channelId: n,
            messageId: L,
            initialSelectedDestinations: R,
            forwardOptions: I,
            onClose: w,
            onRequestSent: y,
            ...T
          } = e,
          {
            hasOneTapSendButton: P,
            hasMessageInput: j,
            hasPreview: D,
          } = (0, S.yk)({ location: "ForwardModal" }),
          O = s.useMemo(() => (0, u.dL)(n), [n]),
          [k, W] = s.useState(!1),
          G = (0, r.e7)([h.Z], () => h.Z.getMessage(n, L), [n, L]),
          U = (0, r.e7)([d.Z], () => d.Z.getChannel(n), [n]),
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
              J(e), (z.current += 1), "" !== e && B(n, L);
            },
            [n, L, B],
          ),
          $ = (0, c.s)({
            searchText: X,
            selectedDestinations: V,
            originDestination: O,
            includeMissingDMs: !0,
          }),
          ee = s.useCallback(() => {
            (0, E.sF)({
              channelId: n,
              messageId: L,
              numDestinationChanges: H.current,
              numQueryChanges: z.current,
            }),
              w();
          }, [n, L, w]),
          en = s.useCallback(() => {
            var e;
            let t =
                null === (e = d.Z.getChannel(n)) || void 0 === e
                  ? void 0
                  : e.guild_id,
              l = (0, f.wR)(t, n, L);
            (0, i.showToast)(
              (0, i.createToast)(Z.Z.Messages.COPIED_LINK, i.ToastType.LINK),
            ),
              (0, m.JG)(l),
              (0, E.xp)(n, L);
          }, [n, L]),
          et = s.useCallback(() => {
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
              F(n, L, "" !== X),
                q((n) => {
                  let t = n.findIndex((n) => {
                    let { type: t, id: l } = n;
                    return t === e.type && l === e.id;
                  });
                  if (-1 === t)
                    return K ? n : (J(""), (H.current += 1), [e, ...n]);
                  let l = [...n];
                  return l.splice(t, 1), (H.current += 1), l;
                });
            },
            [n, K, L, X, F],
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
                c = h.Z.getMessage(n, L);
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
              let f = (await Promise.all(e.map(u.qx))).filter(g.lm);
              if (
                (0, M.Z)(c, f) &&
                !(await new Promise((e) => {
                  (0, i.openModalLazy)(async () => {
                    let { default: n } = await t
                      .e("88643")
                      .then(t.bind(t, 466080));
                    return (t) =>
                      (0, l.jsx)(n, {
                        ...t,
                        onConfirm: () => e(!0),
                        onBack: () => e(!1),
                      });
                  });
                }))
              ) {
                W(!1);
                return;
              }
              r && (0, x.mc)(), null == y || y(), a && (0, o.Kh)(f[0]);
              let m = await _.Z.sendForwards(c, f, { ...I, withMessage: s }),
                S = f.some((e) => {
                  let n = d.Z.getChannel(e);
                  return null != n && n.rateLimitPerUser > 0;
                });
              if (
                m.every((e) => {
                  let { status: n } = e;
                  return "fulfilled" === n;
                })
              ) {
                (0, E.gP)({
                  channelId: n,
                  messageId: L,
                  hasError: !1,
                  hasContextMessage: null != s && "" !== s,
                  numDestinations: f.length,
                  numDestinationChanges: H.current,
                  numQueryChanges: z.current,
                  anyDestinationHasSlowmode: S,
                }),
                  es();
                return;
              }
              (0, E.gP)({
                channelId: n,
                messageId: L,
                hasError: !0,
                hasContextMessage: null != s && "" !== s,
                numDestinations: f.length,
                numDestinationChanges: H.current,
                numQueryChanges: z.current,
                anyDestinationHasSlowmode: S,
              });
              let v = e.filter((e, n) => "rejected" === m[n].status);
              (0, x.Np)({
                messageId: L,
                channelId: n,
                failedDestinations: v,
                forwardOptions: I,
              });
            },
            [n, I, L, y, es],
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
              let { transitionToDestination: n, closeAfterSend: t } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              er([e], { transitionToDestination: n, closeAfterSend: t });
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
                  rowMode: P ? v.G.SEND : v.G.TOGGLE,
                  message: G,
                  originChannel: U,
                  handleToggleDestination: P ? eu : ea,
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
                          : (P || j) &&
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
                P &&
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
                  onClear: et,
                  placeholder: Z.Z.Messages.SEARCH,
                  "aria-label": Z.Z.Messages.SEARCH,
                  autoFocus: !0,
                }),
              ],
            }),
            ec,
            !P &&
              (j
                ? (0, l.jsx)(p.n, {
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
                        onClick: en,
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
    646746: function (e, n, t) {
      t.d(n, {
        O: function () {
          return E;
        },
      });
      var l = t(735250),
        s = t(470079),
        a = t(120356),
        r = t.n(a),
        i = t(392711),
        o = t(481060),
        u = t(686546),
        c = t(124347),
        d = t(499376),
        h = t(937889),
        f = t(930282),
        m = t(318616),
        g = t(689938),
        _ = t(228895);
      function E(e) {
        let { message: n, forwardOptions: t } = e,
          {
            attachments: a,
            embeds: E,
            hasContent: S,
            contentMessage: M,
          } = (0, m.c)({ message: n, forwardOptions: t }),
          v = s.useMemo(
            () =>
              S
                ? (0, h.ZP)(n, {
                    formatInline: !0,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0,
                    hideSimpleEmbedContent: !1,
                    contentMessage: M,
                  }).content
                : null,
            [M, S, n],
          ),
          p = a.length,
          x = null,
          N = null,
          C = null;
        if (p > 0 || E.length > 0) {
          var Z, A, b, L;
          let e = (0, i.countBy)(a, (e) => (0, d.aw)(e, !0)),
            n = null !== (b = e.IMAGE) && void 0 !== b ? b : 0,
            t = null !== (L = e.VIDEO) && void 0 !== L ? L : 0;
          n > 0 && t > 0
            ? ((x = g.Z.Messages.NUM_IMAGES_VIDEOS.format({
                image_count: n,
                video_count: t,
              })),
              (N = o.ImagesIcon))
            : t > 0
              ? ((x = g.Z.Messages.NUM_VIDEOS.format({ count: t })),
                (N = o.CirclePlayIcon))
              : n > 0
                ? ((x = g.Z.Messages.NUM_IMAGES.format({ count: n })),
                  (N = 1 === n ? o.ImageIcon : o.ImagesIcon))
                : ((x = g.Z.Messages.NUM_ATTACHMENTS.format({ count: p })),
                  (N = o.AttachmentIcon)),
            t > 0 && p === t
              ? (C = (0, l.jsxs)("div", {
                  className: r()(_.attachmentPreview, _.attachmentPreviewVideo),
                  children: [
                    (0, l.jsx)(c.ZP, {
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
              : p > 0
                ? (C = (0, l.jsx)("div", {
                    className: _.attachmentPreview,
                    children: (0, l.jsx)(c.ZP, {
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
                    children: (0, l.jsx)(c.ZP, {
                      src: E[0].thumbnail.proxyURL,
                      width: 56,
                      height: 56,
                    }),
                  }));
        }
        return (
          p > 1 &&
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
                  children: ["+", p - 1],
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
                    (0, l.jsx)(f.ZP, {
                      className: r()(
                        _.forwardPreviewMessage,
                        p > 0 && _.hasAttachments,
                      ),
                      message: n,
                      content: v,
                    }),
                  p > 0 &&
                    (0, l.jsxs)("div", {
                      className: _.attachmentRow,
                      children: [
                        null != N &&
                          (0, l.jsx)(N, {
                            size: "custom",
                            width: S ? 18 : 20,
                            color: o.tokens.colors.TEXT_LOW_CONTRAST,
                          }),
                        null != x &&
                          (0, l.jsx)(o.Text, {
                            variant: S ? "text-sm/medium" : "text-md/medium",
                            color: "text-low-contrast",
                            children: x,
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
    810123: function (e, n, t) {
      t.d(n, {
        E: function () {
          return l;
        },
      });
      var l,
        s = t(735250),
        a = t(120356),
        r = t.n(a),
        i = t(468194),
        o = t(471445),
        u = t(686546),
        c = t(664481);
      (l || (l = {})).SMALL_32 = "SMALL_32";
      let d = { SMALL_32: 24 },
        h = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] };
      n.Z = function (e) {
        var n, t, l;
        let {
          className: a,
          iconClassName: f,
          size: m,
          channel: g,
          guild: _,
          locked: E,
          hasActiveThreads: S,
        } = e;
        if (null == _) return null;
        let M = _.getIconURL(48),
          v = h[m],
          p = d[m],
          x = (0, o.KS)(g, _, { locked: E, hasActiveThreads: S });
        if (null == x) return null;
        let N = (0, i.Zg)(
          null !== (n = null == _ ? void 0 : _.toString()) && void 0 !== n
            ? n
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
                      style: { width: p, height: p },
                    })
                  : (0, s.jsx)("div", {
                      className: r()(c.channelGuildIcon, c.acronym),
                      style: {
                        fontSize:
                          ((t = v),
                          (l = N).length - 1 > t.length
                            ? t[t.length - 1]
                            : t[l.length - 1]),
                        width: p,
                        height: p,
                      },
                      children: N,
                    }),
            }),
            (0, s.jsx)(x, {
              className: r()(c.icon, c.iconWithGuildIcon, f),
              color: "currentColor",
            }),
          ],
        });
      };
    },
    448486: function (e, n, t) {
      t.d(n, {
        _: function () {
          return u;
        },
      });
      var l = t(470079),
        s = t(442837),
        a = t(594174),
        r = t(823379),
        i = t(51144),
        o = t(689938);
      function u(e) {
        let n = (0, s.Wu)([a.default], () =>
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
                  let n = e.length - 3;
                  return o.Z.Messages.USER_SUMMARY_THREE_AND_OTHERS.format({
                    first: e[0],
                    second: e[1],
                    third: e[2],
                    count: n,
                  });
                })(n),
          [e, n],
        );
      }
    },
    41837: function (e, n, t) {
      t.d(n, {
        M: function () {
          return s;
        },
        o: function () {
          return a;
        },
      });
      var l = t(212819);
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
    987509: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return p;
        },
        dL: function () {
          return m;
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
        t(47120),
        t(653041);
      var l = t(392711),
        s = t(493683),
        a = t(212819),
        r = t(938078),
        i = t(823385),
        o = t(592125),
        u = t(496675),
        c = t(594174),
        d = t(823379),
        h = t(41837),
        f = t(981631);
      t(689938);
      function m(e) {
        let n = o.Z.getChannel(e);
        return (null == n ? void 0 : n.type) === f.d4z.DM
          ? { type: "user", id: n.recipients[0] }
          : { type: "channel", id: e };
      }
      function g(e) {
        return "".concat(e.type, "-").concat(e.id);
      }
      function _(e) {
        if ("channel" === e.type) return e.id;
        let n = o.Z.getDMFromUserId(e.id);
        if (null != n) return n;
      }
      async function E(e) {
        let n = _(e);
        if (null != n) return n;
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
          let n = c.default.getUser(e.id);
          return null != n ? { type: a.h8.USER, record: n, score: 0 } : null;
        }
      }
      function M(e, n) {
        let t;
        let l = new Set();
        if (null != n) for (let e of n) l.add(e);
        let s = [];
        for (let n of e) {
          if (null != n)
            if (n.type === a.h8.HEADER) t = n;
            else {
              let { id: e } = n.record;
              !l.has(e) &&
                (l.add(e), null != t && (s.push(t), (t = void 0)), s.push(n));
            }
        }
        return s;
      }
      function v(e, n) {
        return e.filter((e) => {
          var t, l;
          return (
            (0, d.lm)(e) &&
            (e.type === a.h8.HEADER ||
              ((0, h.o)(e) &&
                ((t = e),
                (l = n),
                t.type === a.h8.USER
                  ? l || null != o.Z.getDMChannelFromUserId(t.record.id)
                  : t.type === a.h8.GROUP_DM ||
                    (t.record.type !== f.d4z.GUILD_FORUM &&
                      t.record.type !== f.d4z.GUILD_MEDIA &&
                      u.Z.can(f.Plq.VIEW_CHANNEL, t.record) &&
                      u.Z.can(f.Plq.SEND_MESSAGES, t.record)))))
          );
        });
      }
      function p(e) {
        let {
          results: n,
          hasQuery: t,
          queryMode: s,
          frequentChannels: a,
          targetDestination: o,
          selectedDestinations: u,
          pinnedDestinations: c,
          originDestination: d,
          includeMissingDMs: h,
        } = e;
        if (t) return M(v(n, h));
        let f = null != c && c.length > 0 ? c.map((e) => S(e)) : [],
          m = i.Z.getChannelHistory(),
          g = m.length > 0 ? m.map((e) => (0, r.Z)(e)) : [],
          _ = a.length > 0 ? a.map((e) => (0, r.Z)(e.id)) : [],
          E = v([...f, null != o ? S(o) : null, ...g, ..._], h),
          p =
            (null == u ? void 0 : u.find((e) => (0, l.isEqual)(e, d))) != null,
          x = null == d || p ? [] : [d.id];
        return null != s
          ? M(E.filter((e) => e.type === s))
          : M(E, x).slice(0, 15);
      }
    },
    601565: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var l = t(470079),
        s = t(77866),
        a = t(212819);
      function r(e) {
        let { searchOptions: n } = e,
          [t, r] = l.useState({ results: [], query: "" }),
          i = (0, s.Z)(() => {
            let e = new a.ZP((e, n) => {
              r({ results: e, query: n });
            });
            return e.setLimit(20), e.search(""), e;
          });
        return (
          l.useEffect(() => () => i.destroy(), [i]),
          l.useEffect(() => {
            null != n && n !== i.options && i.setOptions(n);
          }, [i, n]),
          {
            search: l.useCallback(
              (e) => {
                var n, t;
                let { query: l, resultTypes: s } = e;
                if (
                  null == i.resultTypes ||
                  ((n = s),
                  (t = i.resultTypes),
                  !(n.length === t.size && n.every((e) => t.has(e))))
                )
                  i.setResultTypes(s), i.setLimit(1 === s.length ? 50 : 20);
                i.search("" === l.trim() ? "" : l);
              },
              [i],
            ),
            ...t,
          }
        );
      }
    },
    72214: function (e, n, t) {
      t.d(n, {
        s: function () {
          return f;
        },
      }),
        t(47120);
      var l = t(470079),
        s = t(442837),
        a = t(38618),
        r = t(51596),
        i = t(516373),
        o = t(314897),
        u = t(580005),
        c = t(987509),
        d = t(601565),
        h = t(41837);
      function f(e) {
        let {
            searchText: n,
            targetDestination: t,
            selectedDestinations: f,
            originDestination: m,
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
          p = l.useMemo(
            () =>
              (function (e) {
                let { query: n, queryMode: t } = (0, r.F_)(e),
                  l = h.M,
                  s = null;
                return (
                  null != t && h.M.includes(t) && ((l = [t]), (s = t)),
                  { query: n, queryMode: s, resultTypes: l }
                );
              })(n),
            [n],
          ),
          { queryMode: x } = p,
          [N, C] = l.useState(null != f ? f : []);
        l.useLayoutEffect(() => {
          let { query: e, resultTypes: n } = p;
          S({ query: e, resultTypes: n }), C(null != f ? f : []);
        }, [S, p]),
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
              queryMode: x,
              targetDestination: t,
              frequentChannels: Z,
              selectedDestinations: f,
              pinnedDestinations: N,
              originDestination: m,
              includeMissingDMs: g,
              isConnected: A,
            }),
          [v, b, x, t, Z, f, N, m, g, A],
        );
      }
    },
    463061: function (e, n, t) {
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
    228895: function (e, n, t) {
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
    664481: function (e, n, t) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
  },
]);
//# sourceMappingURL=e08feaded03933ee69ed.js.map
