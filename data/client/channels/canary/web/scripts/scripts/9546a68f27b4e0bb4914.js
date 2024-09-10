"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99452"],
  {
    621054: function (e) {
      e.exports = "/assets/a315359c0fd32511b45e.svg";
    },
    560361: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = n(470079);
      function a(e) {
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
    724757: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = n(470079),
        a = n(924826),
        s = n(442837),
        i = n(607070);
      function r(e, t, n) {
        let r = (0, s.e7)([i.Z], () => i.Z.keyboardModeEnabled),
          o = l.useCallback(
            (e) => {
              let n = document.querySelector(e),
                l = t.current;
              null != n &&
                null != l &&
                (n.focus(), l.scrollIntoViewNode({ node: n, padding: 80 }));
            },
            [t],
          ),
          c = l.useCallback(
            () =>
              new Promise((e) => {
                let n = t.current;
                if (null == n) return e();
                n.scrollTo({
                  to: 0,
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [t],
          ),
          u = l.useCallback(
            () =>
              new Promise((e) => {
                let n = t.current;
                if (null == n) return e();
                n.scrollTo({
                  to: Number.MAX_SAFE_INTEGER,
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [t],
          );
        return (0, a.ZP)({
          id: e,
          isEnabled: r,
          setFocus: o,
          scrollToStart: c,
          scrollToEnd: u,
          orientation: null == n ? void 0 : n.orientation,
        });
      }
    },
    289823: function (e, t, n) {
      var l = n(735250),
        a = n(470079),
        s = n(120356),
        i = n.n(s),
        r = n(974674),
        o = n(438784),
        c = n(481060),
        u = n(686546),
        d = n(3682),
        h = n(300436);
      let _ = {},
        f = 1 / 4;
      function E(e) {
        let { height: t, fillColor: n } = e;
        return (0, l.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * d.jR,
          },
          children: (0, l.jsx)(o.b, { className: h.dots, dotRadius: t * f }),
        });
      }
      function g(e) {
        let { isTyping: t, statusCoords: n, status: a } = e,
          s = (0, c.useStatusFillColor)(c.StatusTypes.ONLINE);
        return t
          ? (0, l.jsx)("div", {
              style: { position: "absolute", top: n.y, left: n.x },
              children: (0, l.jsx)(E, { height: n.height, fillColor: s }),
            })
          : null != a
            ? (0, l.jsx)(c.Status, {
                size: n.height,
                status: a,
                style: { position: "absolute", top: n.y, left: n.x },
              })
            : null;
      }
      function m(e) {
        let { src: t, size: n } = e;
        return (0, l.jsx)("img", {
          className: h.circularImage,
          src: t,
          alt: "",
          width: n,
          height: n,
        });
      }
      let S = {
        [c.AvatarSizes.SIZE_16]: {
          default: u.QS.DIAGONAL_FACEPILE_16,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_16,
        },
        [c.AvatarSizes.SIZE_20]: {
          default: u.QS.DIAGONAL_FACEPILE_20,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_20,
        },
        [c.AvatarSizes.SIZE_24]: {
          default: u.QS.DIAGONAL_FACEPILE_24,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_24,
        },
        [c.AvatarSizes.SIZE_32]: {
          default: u.QS.DIAGONAL_FACEPILE_32,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [c.AvatarSizes.SIZE_40]: {
          default: u.QS.DIAGONAL_FACEPILE_32,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_32,
        },
        [c.AvatarSizes.SIZE_48]: {
          default: u.QS.DIAGONAL_FACEPILE_40,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_40,
        },
        [c.AvatarSizes.SIZE_56]: {
          default: u.QS.DIAGONAL_FACEPILE_56,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_56,
        },
        [c.AvatarSizes.SIZE_80]: {
          default: u.QS.DIAGONAL_FACEPILE_80,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_80,
        },
        [c.AvatarSizes.SIZE_120]: {
          default: u.QS.DIAGONAL_FACEPILE_120,
          typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
          status: u.QS.DIAGONAL_FACEPILE_STATUS_120,
        },
      };
      t.Z = function (e) {
        var t, n, s;
        let {
            backSrc: o,
            frontSrc: f,
            size: E,
            isTyping: A,
            status: I,
            style: p,
            className: C,
            ...N
          } = e,
          { size: L } = c.AvatarSizeSpecs[E],
          {
            statusCoords: b,
            frontAvatarOffsetPx: v,
            frontAvatarSizePx: T,
            backAvatarSizePx: x,
          } = a.useMemo(() => {
            var e;
            let t = "".concat(L, "-").concat(A);
            return null !== (e = _[t]) && void 0 !== e
              ? e
              : (function (e, t, n) {
                  let l = c.AvatarSizeSpecs[e],
                    a = l.size / (d.z3 + d.o),
                    s = a * d.z3,
                    i = a * d.o,
                    o = {
                      statusCoords: (0, r.Vq)(l, c.StatusTypes.ONLINE, !1, t),
                      frontAvatarSizePx: s,
                      backAvatarSizePx: a,
                      frontAvatarOffsetPx: i,
                      frontAvatarCenter: i + s / 2,
                    };
                  return (_[n] = o), o;
                })(E, A, t);
          }, [L, A, E]);
        let Z =
          ((t = null != I),
          (n = A),
          (s = E),
          n ? S[s].typing : t ? S[s].status : S[s].default);
        return (0, l.jsxs)("div", {
          style: { width: L, height: L, ...p },
          "aria-label": N["aria-label"],
          "aria-hidden": N["aria-hidden"],
          className: i()(h.container, C),
          children: [
            (0, l.jsxs)(u.ZP, {
              mask: Z,
              height: L,
              width: L,
              children: [
                (0, l.jsx)("img", { src: o, alt: "", width: x, height: x }),
                (0, l.jsx)("div", {
                  style: { position: "absolute", top: v, left: v },
                  children: (0, l.jsx)(m, {
                    src: f,
                    size: T,
                    isTyping: A,
                    status: I,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(g, { statusCoords: b, status: I, isTyping: A }),
          ],
        });
      };
    },
    859155: function (e, t, n) {
      n(411104);
      var l = n(991637),
        a = n.n(l),
        s = n(388123),
        i = n(904245),
        r = n(957730),
        o = n(592125);
      let c = {
        async sendForward(e, t, n) {
          let l = o.Z.getChannel(t),
            a = o.Z.getChannel(e.channel_id);
          if (null == a)
            throw Error("Unable to find original channel for message");
          if (null == l)
            throw Error("Unable to find destination channel for message");
          let c = r.ZP.parse(l, ""),
            u = {
              guild_id: a.guild_id,
              channel_id: e.channel_id,
              message_id: e.id,
              type: s.U.FORWARD,
              forward_only:
                (null == n ? void 0 : n.onlyAttachmentIds) != null ||
                (null == n ? void 0 : n.onlyEmbedIndices) != null
                  ? {
                      attachment_ids: n.onlyAttachmentIds,
                      embed_indices: n.onlyEmbedIndices,
                    }
                  : void 0,
            };
          await i.Z.sendMessage(l.id, c, !1, {
            messageReference: u,
            eagerDispatch: !1,
          }),
            (null == n ? void 0 : n.withMessage) != null &&
              (await i.Z.sendMessage(l.id, r.ZP.parse(l, n.withMessage), !1));
        },
        sendForwards: (e, t, n) => a()(t.map((t) => c.sendForward(e, t, n))),
      };
      t.Z = c;
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
          return c;
        },
      }),
        n(47120),
        n(390547);
      var l = n(926491),
        a = n(378233),
        s = n(131704),
        i = n(496675),
        r = n(981631),
        o = n(689938);
      function c(e, t, n) {
        let c = n instanceof s.Sf;
        if (t.isNSFW() && !(c && n.isNSFW()))
          return { label: o.Z.Messages.MESSAGE_FORWARDING_NSFW_NOT_ALLOWED };
        if (c && (0, s.Km)(n.type)) {
          if (
            null != n.rateLimitPerUser &&
            n.rateLimitPerUser > 0 &&
            !(
              i.Z.can(r.Plq.MANAGE_CHANNELS, n) ||
              i.Z.can(r.Plq.MANAGE_MESSAGES, n)
            )
          )
            return { label: o.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT };
          if (
            (e.attachments.length > 0 ||
              e.messageSnapshots.some(
                (e) => e.message.attachments.length > 0,
              )) &&
            !i.Z.can(r.Plq.ATTACH_FILES, n)
          )
            return { label: o.Z.Messages.MESSAGE_CHANNEL_ATTACHMENTS_DISABLED };
          if (
            (e.embeds.length > 0 ||
              e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
            !i.Z.can(r.Plq.EMBED_LINKS, n)
          )
            return { label: o.Z.Messages.MESSAGE_CHANNEL_EMBEDS_DISABLED };
          let t = [
            ...(0, a.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
              let { message: t } = e;
              return (0, a.cv)(t);
            }),
          ];
          if (
            t.length > 0 &&
            !i.Z.can(r.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
              (function (e, t) {
                let n = l.Z.getStickerById(e.id);
                return (
                  !!(null != n && (0, a.J8)(n)) &&
                  (n.guild_id !== t.guild_id || void 0)
                );
              })(e, n),
            )
          )
            return {
              label: o.Z.Messages.MESSAGE_CHANNEL_EXTERNAL_STICKERS_DISABLED,
            };
        }
      }
    },
    895442: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = n(592125),
        a = n(430824),
        s = n(594174),
        i = n(981631);
      function r(e) {
        if (!e.isPrivate()) {
          let t = a.Z.getGuild(e.guild_id);
          return null != t && t.hasFeature(i.oNc.INTERNAL_EMPLOYEE_ONLY);
        }
        return e.recipients.every((e) => {
          let t = s.default.getUser(e);
          return null != t && t.isStaff();
        });
      }
      function o(e, t) {
        var n;
        if (
          !(null === (n = s.default.getCurrentUser()) || void 0 === n
            ? void 0
            : n.isStaff())
        )
          return !1;
        let a = l.Z.getChannel(e.channel_id);
        return (
          !!(null != a && r(a)) &&
          t.some((e) => {
            let t = l.Z.getChannel(e);
            return !(null == t || t.isPrivate()) && !r(t);
          })
        );
      }
    },
    757853: function (e, t, n) {
      n.d(t, {
        F: function () {
          return H;
        },
        G: function () {
          return l;
        },
      }),
        n(47120);
      var l,
        a,
        s = n(735250),
        i = n(470079),
        r = n(120356),
        o = n.n(r),
        c = n(913527),
        u = n.n(c),
        d = n(91192),
        h = n(442837),
        _ = n(481060),
        f = n(700582),
        E = n(560361),
        g = n(724757),
        m = n(212819),
        S = n(933557),
        A = n(266076),
        I = n(810123),
        p = n(448486),
        C = n(987509),
        N = n(592125),
        L = n(430824),
        b = n(158776),
        v = n(306680),
        T = n(699516),
        x = n(594174),
        Z = n(626135),
        y = n(55935),
        M = n(823379),
        P = n(51144),
        R = n(784384),
        O = n(981631),
        D = n(490897),
        w = n(689938),
        G = n(463061);
      function j(e) {
        let {
            message: t,
            destination: n,
            rowMode: l,
            icon: a,
            label: r,
            subLabel: c,
            selected: u,
            disabled: h,
            onPressDestination: f,
            "aria-setsize": g,
            "aria-posinset": m,
          } = e,
          S = (0, d.JA)(n.id),
          [A, I] = i.useState(!1),
          p = i.useRef(!1),
          C = i.useCallback(() => {
            if ("send" === l) {
              I(!0), (p.current = !0);
              return;
            }
            null == f || f(n);
          }, [l, f, n]),
          N = i.useCallback(() => {
            Z.default.track(O.rMx.FORWARD_ONE_TAP_VIEW, {
              channel_id: t.channel_id,
              message_id: t.id,
            }),
              (p.current = !1),
              null == f ||
                f(n, { transitionToDestination: !0, closeAfterSend: !0 });
          }, [t.channel_id, t.id, f, n]),
          L = i.useCallback(() => {
            I(!1),
              (p.current = !1),
              Z.default.track(O.rMx.FORWARD_ONE_TAP_UNDO, {
                channel_id: t.channel_id,
                message_id: t.id,
              });
          }, [t]);
        return (
          (0, E.Z)(() => {
            p.current &&
              ((p.current = !1),
              null == f ||
                f(n, { transitionToDestination: !1, closeAfterSend: !1 }));
          }),
          (0, s.jsxs)(_.Clickable, {
            className: o()(G.destinationRow, { [G.disabled]: h }),
            onClick: h || A ? void 0 : C,
            "aria-selected": u,
            "aria-setsize": g,
            "aria-posinset": m,
            ...S,
            children: [
              (0, s.jsxs)("div", {
                className: G.identity,
                children: [
                  (0, s.jsx)("div", { className: G.iconWrapper, children: a }),
                  (0, s.jsxs)("div", {
                    className: G.labels,
                    children: [
                      (0, s.jsx)(_.Text, {
                        tag: "strong",
                        className: G.label,
                        variant: "text-md/semibold",
                        lineClamp: 1,
                        children: r,
                      }),
                      (0, s.jsx)(_.Text, {
                        className: G.subLabel,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: c,
                      }),
                    ],
                  }),
                ],
              }),
              "toggle" === l &&
                !h &&
                (0, s.jsx)(_.Checkbox, {
                  type: _.Checkbox.Types.INVERTED,
                  displayOnly: !0,
                  size: 24,
                  value: u,
                  className: G.checkbox,
                }),
              "send" === l &&
                !h &&
                (0, s.jsxs)("div", {
                  className: G.actions,
                  children: [
                    A
                      ? (0, s.jsx)(_.Button, {
                          size: _.Button.Sizes.SMALL,
                          color: _.Button.Colors.PRIMARY,
                          look: _.Button.Looks.LINK,
                          onClick: N,
                          children: w.Z.Messages.VIEW,
                        })
                      : (0, s.jsx)("div", {
                          className: o()(
                            (0, _.getButtonStyle)({
                              size: _.Button.Sizes.SMALL,
                              color: _.Button.Colors.BRAND,
                            }),
                            G.fauxButton,
                          ),
                          children: w.Z.Messages.SEND,
                        }),
                    A &&
                      (0, s.jsx)(_.Button, {
                        size: _.Button.Sizes.SMALL,
                        color: _.Button.Colors.BRAND,
                        look: _.Button.Looks.OUTLINED,
                        onClick: L,
                        children: w.Z.Messages.UNDO,
                      }),
                  ],
                }),
            ],
          })
        );
      }
      function U(e) {
        let { user: t, subLabel: n, ...l } = e,
          a = P.ZP.useName(t),
          i = P.ZP.useUserTag(t, { decoration: "never" }),
          r = (0, h.e7)([T.Z], () => T.Z.getNickname(t.id)),
          o = (0, h.e7)([b.Z], () => b.Z.getStatus(t.id));
        return (0, s.jsx)(j, {
          ...l,
          icon: (0, s.jsx)(f.Z, {
            "aria-hidden": !0,
            size: _.AvatarSizes.SIZE_32,
            user: t,
            status: o,
          }),
          label: null != r ? r : a,
          subLabel: null != n ? n : i,
        });
      }
      function k(e) {
        let { channel: t, subLabel: n, ...l } = e,
          a = (0, S.ZP)(t),
          i = (0, p._)(t);
        return (0, s.jsx)(j, {
          ...l,
          icon: (0, s.jsx)(A.Z, {
            "aria-hidden": !0,
            size: _.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: "forward-modal",
          }),
          label: a,
          subLabel: null != n ? n : i,
        });
      }
      function F(e) {
        let { channel: t, subLabel: n, ...l } = e,
          a = (0, h.e7)([L.Z], () =>
            L.Z.getGuild(null == t ? void 0 : t.guild_id),
          ),
          i = (0, S.ZP)(t),
          r = (0, h.e7)([N.Z, x.default, T.Z], () => {
            let e = N.Z.getChannel(t.parent_id);
            return null == e ? null : (0, S.F6)(e, x.default, T.Z, !1);
          }),
          o = (0, h.e7)([v.ZP], () =>
            v.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL),
          ),
          c = null == a ? void 0 : a.name;
        if (t.isThread() || t.isForumPost()) {
          let e = t.isForumPost() ? _.ForumIcon : _.TextIcon;
          c = (0, s.jsxs)("div", {
            className: G.threadSubLabel,
            children: [
              (0, s.jsx)(e, {
                color: _.tokens.colors.TEXT_SECONDARY,
                className: G.subLabelIcon,
              }),
              (0, s.jsx)(_.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                lineClamp: 1,
                children: r,
              }),
              null != o
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(_.Text, {
                        className: G.subLabelSeparator,
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: "•",
                      }),
                      (0, s.jsx)(_.Text, {
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: (0, y.Xf)(u()(o)),
                      }),
                    ],
                  })
                : null,
            ],
          });
        }
        return (0, s.jsx)(j, {
          ...l,
          icon: (0, s.jsx)(I.Z, { size: I.E.SMALL_32, guild: a, channel: t }),
          label: i,
          subLabel: null != n ? n : c,
        });
      }
      function H(e) {
        let {
            rowData: t,
            rowMode: n,
            message: l,
            originChannel: a,
            selectedDestinations: r,
            handleToggleDestination: o,
            disableSelection: c,
            ...u
          } = e,
          h = i.useMemo(() => [t.length], [t.length]),
          f = i.useCallback(() => 48, []),
          E = i.useMemo(() => {
            var e;
            return null !== (e = null == r ? void 0 : r.map(C.hC)) &&
              void 0 !== e
              ? e
              : [];
          }, [r]),
          S = i.useCallback(
            (e) => {
              let { section: i, row: r } = e;
              if (i > 0) return;
              let { type: u, record: d } = t[r];
              if (u === m.h8.HEADER) return;
              let h =
                  u === m.h8.USER
                    ? { type: "user", id: d.id }
                    : { type: "channel", id: d.id },
                _ = (0, C.hC)(h),
                f = (0, R.H)(l, a, d),
                g = E.includes(_),
                S = {
                  key: _,
                  message: l,
                  destination: h,
                  rowMode: n,
                  subLabel: null != f ? f.label : void 0,
                  disabled: (c && !g) || null != f,
                  selected: g,
                  onPressDestination: o,
                  "aria-posinset": r + 1,
                  "aria-setsize": t.length,
                };
              if (u === m.h8.USER) return (0, s.jsx)(U, { user: d, ...S });
              if (u === m.h8.GROUP_DM)
                return (0, s.jsx)(k, { channel: d, ...S });
              if (u === m.h8.TEXT_CHANNEL || u === m.h8.VOICE_CHANNEL)
                return (0, s.jsx)(F, { channel: d, ...S });
              else (0, M.vE)(u);
            },
            [c, o, l, a, t, n, E],
          ),
          A = i.useRef(null),
          I = (0, g.Z)("forward-modal", A);
        return (0, s.jsx)(d.bG, {
          navigator: I,
          children: (0, s.jsx)(d.SJ, {
            children: (e) => {
              let { ref: t, ...n } = e;
              return (0, s.jsx)(_.ModalListContent, {
                scrollerRef: (e) => {
                  var n;
                  (A.current = e),
                    (t.current =
                      null !== (n = null == e ? void 0 : e.getScrollerNode()) &&
                      void 0 !== n
                        ? n
                        : null);
                },
                ...n,
                ...u,
                sections: h,
                sectionHeight: 0,
                renderRow: S,
                rowHeight: f,
              });
            },
          }),
        });
      }
      ((a = l || (l = {})).TOGGLE = "toggle"), (a.SEND = "send");
    },
    930864: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ForwardModal: function () {
            return O;
          },
        }),
        n(47120);
      var l = n(735250),
        a = n(470079),
        s = n(392711),
        i = n(106351),
        r = n(442837),
        o = n(481060),
        c = n(541716),
        u = n(752305),
        d = n(893718),
        h = n(849522),
        _ = n(359110),
        f = n(987509),
        E = n(72214),
        g = n(131704),
        m = n(592125),
        S = n(375954),
        A = n(934415),
        I = n(572004),
        p = n(823379),
        C = n(859155),
        N = n(822869),
        L = n(346610),
        b = n(895442),
        v = n(757853),
        T = n(912332),
        x = n(646746),
        Z = n(819727),
        y = n(689938),
        M = n(463061),
        P = n(621054);
      function R(e) {
        let {
            message: t,
            forwardOptions: n,
            sendLabel: s,
            canSend: _,
            selectedDestinations: E,
            isSending: S,
            onSend: A,
            showPreview: I,
          } = e,
          C = (0, h.Z)(),
          L = E.map(f.hl).find(p.lm),
          b = (0, r.e7)([m.Z], () => m.Z.getChannel(L), [L]),
          v = a.useMemo(
            () => (null != b ? b : (0, g.kt)({ id: "1", type: i.d.DM })),
            [b],
          ),
          Z = (0, N.Ad)(),
          [P, R] = a.useState(() => (0, u.H2)()),
          { textValue: O, richValue: D } = P,
          [w, G] = a.useState(!1),
          j = a.useCallback(() => G(!0), []),
          U = a.useCallback(() => G(!1), []),
          k = a.useCallback(
            (e, n, l) => {
              R({ textValue: n, richValue: l }), Z(t.channel_id, t.id);
            },
            [Z, t],
          ),
          F = a.useCallback(() => {
            A(O);
          }, [O, A]),
          H = a.useCallback(
            () =>
              !_ || O.length > C
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (F(),
                  Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [F, O, C, _],
          );
        return (0, l.jsxs)(o.ModalFooter, {
          className: M.footerWithMessage,
          children: [
            I &&
              (0, l.jsx)("div", {
                className: M.forwardPreviewWrapper,
                children: (0, l.jsx)(x.O, { message: t, forwardOptions: n }),
              }),
            (0, l.jsxs)("div", {
              className: M.footerButtons,
              children: [
                (0, l.jsx)(d.Z, {
                  innerClassName: M.messageInput,
                  onChange: k,
                  placeholder: y.Z.Messages.MESSAGE_FORWARD_MESSAGE_PLACEHOLDER,
                  channel: v,
                  textValue: O,
                  richValue: D,
                  type: c.I.FORWARD_MESSAGE_INPUT,
                  onBlur: U,
                  onFocus: j,
                  focused: w,
                  onSubmit: H,
                  parentModalKey: T.so,
                  autoCompletePosition: "bottom",
                  emojiPickerCloseOnModalOuterClick: !0,
                }),
                (0, l.jsx)(o.Button, {
                  className: M.sendWithMessage,
                  submitting: S,
                  disabled: !_ || O.length > C,
                  onClick: F,
                  children: s,
                }),
              ],
            }),
          ],
        });
      }
      function O(e) {
        let {
            channelId: t,
            messageId: i,
            initialSelectedDestinations: c,
            forwardOptions: u,
            onClose: d,
            onRequestSent: h,
            ...g
          } = e,
          {
            hasOneTapSendButton: O,
            hasMessageInput: D,
            hasPreview: w,
          } = (0, L.yk)({ location: "ForwardModal" }),
          G = a.useMemo(() => (0, f.dL)(t), [t]),
          [j, U] = a.useState(!1),
          k = (0, r.e7)([S.Z], () => S.Z.getMessage(t, i), [t, i]),
          F = (0, r.e7)([m.Z], () => m.Z.getChannel(t), [t]),
          H = (0, N.ZF)(),
          W = (0, N.mh)(),
          B = a.useRef(0),
          z = a.useRef(0),
          [Q, K] = a.useState(c),
          V = Q.length,
          q = V >= Z.G,
          [Y, X] = a.useState(""),
          J = a.useCallback(
            (e) => {
              X(e), (z.current += 1), "" !== e && W(t, i);
            },
            [t, i, W],
          ),
          $ = (0, E.s)({
            searchText: Y,
            selectedDestinations: Q,
            originDestination: G,
            includeMissingDMs: !0,
          }),
          ee = a.useCallback(() => {
            (0, N.sF)({
              channelId: t,
              messageId: i,
              numDestinationChanges: B.current,
              numQueryChanges: z.current,
            }),
              d();
          }, [t, i, d]),
          et = a.useCallback(() => {
            var e;
            let n =
                null === (e = m.Z.getChannel(t)) || void 0 === e
                  ? void 0
                  : e.guild_id,
              l = (0, A.wR)(n, t, i);
            (0, o.showToast)(
              (0, o.createToast)(y.Z.Messages.COPIED_LINK, o.ToastType.LINK),
            ),
              (0, I.JG)(l),
              (0, N.xp)(t, i);
          }, [t, i]),
          en = a.useCallback(() => {
            X("");
          }, [X]),
          el = a.useRef(null);
        a.useEffect(() => {
          if ("" === Y) {
            var e;
            null === (e = el.current) || void 0 === e || e.focus();
          }
        }, [Y]);
        let ea = a.useMemo(
            () =>
              (0, s.throttle)(
                () => {
                  (0, o.showToast)(
                    (0, o.createToast)(
                      y.Z.Messages.MESSAGE_FORWARD_SUCCESS,
                      o.ToastType.FORWARD,
                    ),
                  );
                },
                3e3,
                { leading: !0, trailing: !1 },
              ),
            [],
          ),
          es = a.useCallback(
            (e) => {
              H(t, i, "" !== Y),
                K((t) => {
                  let n = t.findIndex((t) => {
                    let { type: n, id: l } = t;
                    return n === e.type && l === e.id;
                  });
                  if (-1 === n)
                    return q ? t : (X(""), (B.current += 1), [e, ...t]);
                  let l = [...t];
                  return l.splice(n, 1), (B.current += 1), l;
                });
            },
            [t, q, i, Y, H],
          ),
          ei = a.useCallback(
            async function (e) {
              let {
                  withMessage: a,
                  transitionToDestination: s,
                  closeAfterSend: r,
                } = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
                c = S.Z.getMessage(t, i);
              if (null == c) {
                (0, o.showToast)(
                  (0, o.createToast)(
                    y.Z.Messages.ERROR_GENERIC_TITLE,
                    o.ToastType.FAILURE,
                  ),
                );
                return;
              }
              U(!0);
              let d = (await Promise.all(e.map(f.qx))).filter(p.lm);
              if (
                (0, b.Z)(c, d) &&
                !(await new Promise((e) => {
                  (0, o.openModalLazy)(async () => {
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
                U(!1);
                return;
              }
              r && (0, T.mc)(), null == h || h(), s && (0, _.Kh)(d[0]);
              let E = await C.Z.sendForwards(c, d, { ...u, withMessage: a }),
                g = d.some((e) => {
                  let t = m.Z.getChannel(e);
                  return null != t && t.rateLimitPerUser > 0;
                });
              if (
                E.every((e) => {
                  let { status: t } = e;
                  return "fulfilled" === t;
                })
              ) {
                (0, N.gP)({
                  channelId: t,
                  messageId: i,
                  hasError: !1,
                  hasContextMessage: null != a && "" !== a,
                  numDestinations: d.length,
                  numDestinationChanges: B.current,
                  numQueryChanges: z.current,
                  anyDestinationHasSlowmode: g,
                }),
                  ea();
                return;
              }
              (0, N.gP)({
                channelId: t,
                messageId: i,
                hasError: !0,
                hasContextMessage: null != a && "" !== a,
                numDestinations: d.length,
                numDestinationChanges: B.current,
                numQueryChanges: z.current,
                anyDestinationHasSlowmode: g,
              });
              let A = e.filter((e, t) => "rejected" === E[t].status);
              (0, T.Np)({
                messageId: i,
                channelId: t,
                failedDestinations: A,
                forwardOptions: u,
              });
            },
            [t, u, i, h, ea],
          ),
          er = a.useCallback(
            (e) => {
              ei(Q, {
                withMessage: e,
                transitionToDestination: 1 === Q.length,
                closeAfterSend: !0,
              });
            },
            [ei, Q],
          ),
          eo = a.useCallback(() => er(), [er]),
          ec = a.useCallback(
            function (e) {
              let { transitionToDestination: t, closeAfterSend: n } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              ei([e], { transitionToDestination: t, closeAfterSend: n });
            },
            [ei],
          );
        if (null == k || null == F) return null;
        let eu =
            $.length > 0
              ? (0, l.jsx)(v.F, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: $,
                  rowMode: O ? v.G.SEND : v.G.TOGGLE,
                  message: k,
                  originChannel: F,
                  handleToggleDestination: O ? ec : es,
                  selectedDestinations: Q,
                  disableSelection: q,
                })
              : (0, l.jsxs)(o.ModalContent, {
                  className: M.noResults,
                  children: [
                    (0, l.jsx)("img", {
                      className: M.noResultsImg,
                      src: P,
                      alt: "",
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: y.Z.Messages.SEARCH_NO_RESULTS,
                    }),
                  ],
                }),
          ed =
            V <= 1
              ? y.Z.Messages.SEND
              : y.Z.Messages.MESSAGES_SEND_SEPARATELY.format({ count: V });
        return (0, l.jsxs)(o.ModalRoot, {
          className: M.modal,
          "aria-label": y.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
          ...g,
          children: [
            (0, l.jsxs)(o.ModalHeader, {
              className: M.header,
              children: [
                (0, l.jsxs)("div", {
                  className: M.titleLine,
                  children: [
                    (0, l.jsx)("div", {
                      className: M.title,
                      children: (0, l.jsx)(o.HeadingLevel, {
                        component: (0, l.jsx)(o.Heading, {
                          variant: "heading-lg/semibold",
                          children: y.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
                        }),
                        children: q
                          ? (0, l.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              color: "text-warning",
                              children:
                                y.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format(
                                  { count: Z.G },
                                ),
                            })
                          : (O || D) &&
                            (0, l.jsx)(o.Heading, {
                              variant: "heading-sm/normal",
                              color: "header-muted",
                              children: y.Z.Messages.MESSAGE_FORWARD_SUBTITLE,
                            }),
                      }),
                    }),
                    (0, l.jsx)(o.ModalCloseButton, {
                      className: M.closeButton,
                      onClick: ee,
                    }),
                  ],
                }),
                O &&
                  w &&
                  (0, l.jsx)("div", {
                    className: M.forwardPreviewWrapperInset,
                    children: (0, l.jsx)(x.O, {
                      message: k,
                      forwardOptions: u,
                    }),
                  }),
                (0, l.jsx)(o.SearchBar, {
                  ref: el,
                  size: o.SearchBar.Sizes.MEDIUM,
                  query: Y,
                  onChange: J,
                  onClear: en,
                  placeholder: y.Z.Messages.SEARCH,
                  "aria-label": y.Z.Messages.SEARCH,
                  autoFocus: !0,
                }),
              ],
            }),
            eu,
            !O &&
              (D
                ? (0, l.jsx)(R, {
                    message: k,
                    forwardOptions: u,
                    sendLabel: ed,
                    canSend: V > 0,
                    selectedDestinations: Q,
                    isSending: j,
                    onSend: er,
                    showPreview: w,
                  })
                : (0, l.jsxs)(o.ModalFooter, {
                    className: M.footer,
                    children: [
                      (0, l.jsx)(o.Button, {
                        submitting: j,
                        disabled: 0 === V,
                        onClick: eo,
                        children: ed,
                      }),
                      (0, l.jsx)(o.Button, {
                        onClick: et,
                        look: o.Button.Looks.OUTLINED,
                        color: o.Button.Colors.PRIMARY,
                        children: y.Z.Messages.COPY_LINK,
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
          return g;
        },
      });
      var l = n(735250),
        a = n(470079),
        s = n(120356),
        i = n.n(s),
        r = n(392711),
        o = n(481060),
        c = n(686546),
        u = n(124347),
        d = n(937889),
        h = n(930282),
        _ = n(546432),
        f = n(689938),
        E = n(228895);
      function g(e) {
        var t, n, s, g, m, S;
        let { message: A, forwardOptions: I } = e,
          p = null == I ? void 0 : I.onlyAttachmentIds,
          C = null == I ? void 0 : I.onlyEmbedIndices,
          N =
            null !==
              (n =
                null === (t = A.messageSnapshots[0]) || void 0 === t
                  ? void 0
                  : t.message) && void 0 !== n
              ? n
              : A,
          L = N.attachments;
        null != p
          ? (L = N.attachments.filter((e) => p.includes(e.id)))
          : null != C && (L = []);
        let b = N.embeds;
        null != C
          ? (b = N.embeds.filter((e, t) => C.includes(t)))
          : null != p && (b = []),
          (null != C || ("" === N.content && b.length > 0)) &&
            (N = N.set("content", b.map((e) => e.url).join("\n")));
        let v = "" !== N.content && null == p,
          T = a.useMemo(
            () =>
              v
                ? (0, d.ZP)(A, {
                    formatInline: !0,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0,
                    hideSimpleEmbedContent: !1,
                    contentMessage: N,
                  }).content
                : null,
            [N, v, A],
          ),
          x = L.length,
          Z = null,
          y = null,
          M = null;
        if (x > 0 || b.length > 0) {
          let e = (0, r.countBy)(L, (e) => (0, _.aw)(e, !0)),
            t = null !== (m = e.IMAGE) && void 0 !== m ? m : 0,
            n = null !== (S = e.VIDEO) && void 0 !== S ? S : 0;
          t > 0 && n > 0
            ? ((Z = f.Z.Messages.NUM_IMAGES_VIDEOS.format({
                image_count: t,
                video_count: n,
              })),
              (y = o.ImagesIcon))
            : n > 0
              ? ((Z = f.Z.Messages.NUM_VIDEOS.format({ count: n })),
                (y = o.CirclePlayIcon))
              : t > 0
                ? ((Z = f.Z.Messages.NUM_IMAGES.format({ count: t })),
                  (y = 1 === t ? o.ImageIcon : o.ImagesIcon))
                : ((Z = f.Z.Messages.NUM_ATTACHMENTS.format({ count: x })),
                  (y = o.AttachmentIcon)),
            n > 0 && x === n
              ? (M = (0, l.jsxs)("div", {
                  className: i()(E.attachmentPreview, E.attachmentPreviewVideo),
                  children: [
                    (0, l.jsx)(u.Z, {
                      className: E.thumbnail,
                      src: L[0].proxy_url,
                      width: 56,
                      height: 56,
                    }),
                    (0, l.jsx)(o.CirclePlayIcon, {
                      className: E.playIcon,
                      size: "md",
                      color: "white",
                    }),
                  ],
                }))
              : x > 0
                ? (M = (0, l.jsx)("div", {
                    className: E.attachmentPreview,
                    children: (0, l.jsx)(u.Z, {
                      src: L[0].proxy_url,
                      width: 56,
                      height: 56,
                    }),
                  }))
                : (null === (g = b[0]) || void 0 === g
                    ? void 0
                    : null === (s = g.thumbnail) || void 0 === s
                      ? void 0
                      : s.proxyURL) != null &&
                  (M = (0, l.jsx)("div", {
                    className: E.attachmentPreview,
                    children: (0, l.jsx)(u.Z, {
                      src: b[0].thumbnail.proxyURL,
                      width: 56,
                      height: 56,
                    }),
                  }));
        }
        return (
          x > 1 &&
            null != M &&
            (M = (0, l.jsxs)("div", {
              className: E.attachmentPreviewOverflow,
              children: [
                (0, l.jsx)(c.ZP, {
                  mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                  width: 56,
                  height: 56,
                  children: M,
                }),
                (0, l.jsxs)(o.Text, {
                  className: E.overflowCount,
                  variant: "text-xs/semibold",
                  color: "text-normal",
                  children: ["+", x - 1],
                }),
              ],
            })),
          (0, l.jsxs)("div", {
            className: E.forwardPreview,
            children: [
              (0, l.jsx)("div", { className: E.quote }),
              (0, l.jsxs)("div", {
                className: E.contentWrapper,
                children: [
                  v &&
                    (0, l.jsx)(h.ZP, {
                      className: i()(
                        E.forwardPreviewMessage,
                        x > 0 && E.hasAttachments,
                      ),
                      message: A,
                      content: T,
                    }),
                  x > 0 &&
                    (0, l.jsxs)("div", {
                      className: E.attachmentRow,
                      children: [
                        null != y &&
                          (0, l.jsx)(y, {
                            size: "custom",
                            width: v ? 18 : 20,
                            color: o.tokens.colors.TEXT_LOW_CONTRAST,
                          }),
                        null != Z &&
                          (0, l.jsx)(o.Text, {
                            variant: v ? "text-sm/medium" : "text-md/medium",
                            color: "text-low-contrast",
                            children: Z,
                          }),
                      ],
                    }),
                ],
              }),
              M,
            ],
          })
        );
      }
    },
    93687: function (e, t, n) {
      let l = (0, n(818083).B)({
        kind: "user",
        id: "2024-04_gdm_presence",
        label: "Group DM Presence",
        defaultConfig: {
          isFacepileEnabled: !1,
          isStatusIndicatorEnabled: !1,
          isTypingIndicatorEnabled: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Status Indicator Only",
            config: {
              isFacepileEnabled: !1,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !1,
            },
          },
          {
            id: 2,
            label: "Typing Indicator Only",
            config: {
              isFacepileEnabled: !1,
              isStatusIndicatorEnabled: !1,
              isTypingIndicatorEnabled: !0,
            },
          },
          {
            id: 3,
            label: "Status Indicator + Typing Indicator",
            config: {
              isFacepileEnabled: !1,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !0,
            },
          },
          {
            id: 4,
            label: "Facepile Only",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !1,
              isTypingIndicatorEnabled: !1,
            },
          },
          {
            id: 5,
            label: "Facepile + Status Indicator",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !1,
            },
          },
          {
            id: 6,
            label: "Facepile + Typing Indicator",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !1,
              isTypingIndicatorEnabled: !0,
            },
          },
          {
            id: 7,
            label: "Facepile + Typing Indicator + Status Indicator",
            config: {
              isFacepileEnabled: !0,
              isStatusIndicatorEnabled: !0,
              isTypingIndicatorEnabled: !0,
            },
          },
        ],
      });
      t.Z = l;
    },
    266076: function (e, t, n) {
      var l = n(735250),
        a = n(470079),
        s = n(481060),
        i = n(43267),
        r = n(93687),
        o = n(785232);
      t.Z = a.memo(function (e) {
        let {
            channel: t,
            size: n,
            facepileSizeOverride: a,
            experimentLocation: c,
            isTyping: u,
            status: d,
            className: h,
            animated: _ = !1,
            ...f
          } = e,
          { isFacepileEnabled: E } = r.Z.useExperiment(
            { location: c },
            { autoTrackExposure: !0 },
          );
        return t.recipients.length >= 2 && E && null == t.icon
          ? (0, l.jsx)(o.Z, {
              "aria-label": f["aria-label"],
              "aria-hidden": f["aria-hidden"],
              className: h,
              recipients: t.recipients,
              size: null != a ? a : n,
              isTyping: u,
              status: d,
            })
          : (0, l.jsx)(s.Avatar, {
              "aria-hidden": f["aria-hidden"],
              "aria-label": f["aria-label"],
              className: h,
              size: n,
              src: (0, i.x)(t, 80, _),
            });
      });
    },
    785232: function (e, t, n) {
      var l = n(735250);
      n(470079);
      var a = n(442837),
        s = n(481060),
        i = n(289823),
        r = n(594174);
      t.Z = function (e) {
        let {
            recipients: t,
            size: n,
            status: o,
            isTyping: c,
            className: u,
            ...d
          } = e,
          h = s.AvatarSizeSpecs[n],
          _ = (0, a.Wu)(
            [r.default],
            () =>
              t.slice(0, 2).map((e) => {
                let t = r.default.getUser(e);
                if (null != t) return t.getAvatarURL(void 0, h.size, !1);
              }),
            [t, h.size],
          );
        return (0, l.jsx)(i.Z, {
          "aria-label": d["aria-label"],
          "aria-hidden": d["aria-hidden"],
          backSrc: _[0],
          frontSrc: _[1],
          size: n,
          status: o,
          isTyping: null != c && c,
          className: u,
        });
      };
    },
    810123: function (e, t, n) {
      n.d(t, {
        E: function () {
          return l;
        },
      });
      var l,
        a = n(735250),
        s = n(120356),
        i = n.n(s),
        r = n(468194),
        o = n(471445),
        c = n(686546),
        u = n(664481);
      (l || (l = {})).SMALL_32 = "SMALL_32";
      let d = { SMALL_32: 24 },
        h = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] };
      t.Z = function (e) {
        var t, n, l;
        let {
          className: s,
          iconClassName: _,
          size: f,
          channel: E,
          guild: g,
          locked: m,
          hasActiveThreads: S,
        } = e;
        if (null == g) return null;
        let A = g.getIconURL(48),
          I = h[f],
          p = d[f],
          C = (0, o.KS)(E, g, { locked: m, hasActiveThreads: S });
        if (null == C) return null;
        let N = (0, r.Zg)(
          null !== (t = null == g ? void 0 : g.toString()) && void 0 !== t
            ? t
            : null,
        );
        return (0, a.jsxs)("div", {
          role: "img",
          className: s,
          children: [
            (0, a.jsx)(c.ZP, {
              mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
              children:
                null != A
                  ? (0, a.jsx)("img", {
                      alt: "",
                      src: A,
                      className: u.channelGuildIcon,
                      style: { width: p, height: p },
                    })
                  : (0, a.jsx)("div", {
                      className: i()(u.channelGuildIcon, u.acronym),
                      style: {
                        fontSize:
                          ((n = I),
                          (l = N).length - 1 > n.length
                            ? n[n.length - 1]
                            : n[l.length - 1]),
                        width: p,
                        height: p,
                      },
                      children: N,
                    }),
            }),
            (0, a.jsx)(C, {
              className: i()(u.icon, u.iconWithGuildIcon, _),
              color: "currentColor",
            }),
          ],
        });
      };
    },
    448486: function (e, t, n) {
      n.d(t, {
        _: function () {
          return c;
        },
      });
      var l = n(470079),
        a = n(442837),
        s = n(594174),
        i = n(823379),
        r = n(51144),
        o = n(689938);
      function c(e) {
        let t = (0, a.Wu)([s.default], () =>
          e.recipients
            .map((e) => s.default.getUser(e))
            .filter(i.lm)
            .map((e) => r.ZP.getName(e)),
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
    51596: function (e, t, n) {
      n.d(t, {
        $Z: function () {
          return x;
        },
        Cp: function () {
          return Z;
        },
        F_: function () {
          return b;
        },
        Se: function () {
          return P;
        },
        tF: function () {
          return M;
        },
        yC: function () {
          return y;
        },
      }),
        n(757143),
        n(47120);
      var l = n(570140),
        a = n(493683),
        s = n(475179),
        i = n(925549),
        r = n(287734),
        o = n(212819),
        c = n(336197),
        u = n(359110),
        d = n(769654),
        h = n(131704),
        _ = n(592125),
        f = n(283595),
        E = n(944486),
        g = n(914010),
        m = n(626135),
        S = n(777754),
        A = n(823385),
        I = n(981631),
        p = n(176505);
      let C = () => Promise.resolve();
      C = n(346329).playApplication;
      let N = Object.freeze({
          [o.xQ.USER]: o.h8.USER,
          [o.xQ.TEXT_CHANNEL]: o.h8.TEXT_CHANNEL,
          [o.xQ.VOICE_CHANNEL]: o.h8.VOICE_CHANNEL,
          [o.xQ.GUILD]: o.h8.GUILD,
          [o.xQ.APPLICATION]: o.h8.APPLICATION,
        }),
        L = new RegExp(
          "^"
            .concat(o.xQ.USER, "|")
            .concat(o.xQ.TEXT_CHANNEL, "|")
            .concat(o.xQ.VOICE_CHANNEL, "|\\")
            .concat(o.xQ.GUILD, "|\\")
            .concat(o.xQ.APPLICATION),
        );
      function b(e) {
        var t, n;
        let l;
        let [a, s] =
          ((l = null !== (n = N[(t = e).charAt(0)]) && void 0 !== n ? n : null),
          [t.replace(L, ""), l]);
        return { query: a, queryMode: s };
      }
      function v(e, t) {
        let {
            results: n,
            queryMode: l,
            query: a,
            maxQueryLength: s,
          } = A.Z.getProps(),
          i = g.Z.getGuildId(),
          r = E.Z.getChannelId(i),
          c = n[(0, o.gJ)(o.a8.DOWN, -1, n)],
          u = S.Z.isEmail(a),
          d = S.Z.isPhoneNumber(a),
          f = S.Z.isUserTagLike(a),
          I = null != r && (0, p.AB)(r),
          C = (e) =>
            null == e
              ? null
              : e.type === o.h8.IN_APP_NAVIGATION
                ? e.type + "_" + e.record.type
                : e.type,
          N = {
            current_channel_id: I ? void 0 : r,
            current_channel_static_route: I ? r : void 0,
            current_guild_id: i,
            query_mode: null != l ? l : "GENERAL",
            query_length: a.length,
            max_query_length: s,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: f,
            query: u || d || f ? null : a,
            top_result_type: C(c),
            top_result_score: null != c ? c.score : null,
            num_results_total: A.Z.getResultTotals(),
            num_results_users: A.Z.getResultTotals(o.h8.USER),
            num_results_text_channels: A.Z.getResultTotals(o.h8.TEXT_CHANNEL),
            num_results_voice_channels: A.Z.getResultTotals(o.h8.VOICE_CHANNEL),
            num_results_guilds: A.Z.getResultTotals(o.h8.GUILD),
            num_results_group_dms: A.Z.getResultTotals(o.h8.GROUP_DM),
          };
        if (null != r) {
          let e = _.Z.getChannel(r);
          N.current_channel_type = null != e ? e.type : null;
        }
        if (null != t) {
          let { type: e, score: l, record: a } = t;
          switch (
            ((N.selected_type = C(t)),
            (N.selected_score = l),
            (N.selected_index = n.indexOf(t)),
            e)
          ) {
            case o.h8.GUILD:
              N.selected_guild_id = a.id;
              break;
            case o.h8.TEXT_CHANNEL:
            case o.h8.VOICE_CHANNEL:
              a instanceof h.Sf &&
                (N.selected_guild_id = null != a.guild_id ? a.guild_id : null),
                (N.selected_channel_id = a.id);
              break;
            case o.h8.GROUP_DM:
              N.selected_channel_id = a.id;
              break;
            case o.h8.USER:
              N.selected_user_id = a.id;
          }
        }
        m.default.track(e, N);
      }
      function T() {
        l.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function x() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (e) {
          let t;
          if (A.Z.isOpen()) return;
          let n = g.Z.getGuildId(),
            l = E.Z.getChannelId(n);
          if (null != l) {
            let e = _.Z.getChannel(l);
            t = null != e ? e.type : null;
          }
          m.default.track(I.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: l,
            current_channel_type: t,
          });
        })(e),
          l.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...b(t) });
      }
      function Z() {
        v(I.rMx.QUICKSWITCHER_CLOSED), T();
      }
      function y(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...b(e) });
      }
      function M(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function P(e) {
        let t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        T(), v(I.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: h, record: E } = e,
          g = { page: I.ZY5.QUICK_SWITCHER };
        switch (h) {
          case o.h8.GUILD:
            (0, d.X)(E.id, { navigationReplace: !0 });
            break;
          case o.h8.TEXT_CHANNEL:
            null != (t = _.Z.getChannel(E.id)) &&
              (0, u.Kh)(t.id, {
                state: { analyticsSource: g },
                navigationReplace: !0,
              });
            break;
          case o.h8.VOICE_CHANNEL:
            null != (t = _.Z.getChannel(E.id)) &&
              (n
                ? s.Z.updateChatOpen(E.id, !0)
                : r.default.selectVoiceChannel(E.id),
              (0, u.Kh)(t.id, {
                state: { analyticsSource: g },
                navigationReplace: !0,
              }));
            break;
          case o.h8.USER:
            a.Z.openPrivateChannel([E.id], !1, !1, "Quickswitcher"),
              i.Z.channelListScrollTo(I.ME, _.Z.getDMFromUserId(E.id));
            break;
          case o.h8.GROUP_DM:
            (0, u.Kh)(E.id, { navigationReplace: !0 }),
              i.Z.channelListScrollTo(I.ME, E.id);
            break;
          case o.h8.APPLICATION:
            let m = f.Z.getActiveLibraryApplication(E.id);
            C(E.id, m, {
              analyticsParams: {
                source: I.Sbl.QUICK_SWITCHER,
                location: I.Sbl.QUICK_SWITCHER,
              },
            });
            break;
          case o.h8.LINK:
            (0, c.Z)(E.path, { navigationReplace: !0 });
            break;
          case o.h8.IN_APP_NAVIGATION:
            (0, c.Z)(E.path, { navigationReplace: !0 });
        }
        l.Z.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
    41837: function (e, t, n) {
      n.d(t, {
        M: function () {
          return a;
        },
        o: function () {
          return s;
        },
      });
      var l = n(212819);
      let a = Array.from([
        l.h8.USER,
        l.h8.TEXT_CHANNEL,
        l.h8.VOICE_CHANNEL,
        l.h8.GROUP_DM,
      ]);
      function s(e) {
        return a.includes(e.type);
      }
    },
    987509: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return p;
        },
        dL: function () {
          return f;
        },
        hC: function () {
          return E;
        },
        hl: function () {
          return g;
        },
        qx: function () {
          return m;
        },
      }),
        n(47120),
        n(653041);
      var l = n(392711),
        a = n(493683),
        s = n(212819),
        i = n(938078),
        r = n(823385),
        o = n(592125),
        c = n(496675),
        u = n(594174),
        d = n(823379),
        h = n(41837),
        _ = n(981631);
      n(689938);
      function f(e) {
        let t = o.Z.getChannel(e);
        return (null == t ? void 0 : t.type) === _.d4z.DM
          ? { type: "user", id: t.recipients[0] }
          : { type: "channel", id: e };
      }
      function E(e) {
        return "".concat(e.type, "-").concat(e.id);
      }
      function g(e) {
        if ("channel" === e.type) return e.id;
        let t = o.Z.getDMFromUserId(e.id);
        if (null != t) return t;
      }
      async function m(e) {
        let t = g(e);
        if (null != t) return t;
        if ("user" === e.type)
          try {
            return await a.Z.getOrEnsurePrivateChannel(e.id);
          } catch (e) {
            return;
          }
      }
      function S(e) {
        if ("user" !== e.type) return (0, i.Z)(e.id);
        {
          let t = u.default.getUser(e.id);
          return null != t ? { type: s.h8.USER, record: t, score: 0 } : null;
        }
      }
      function A(e, t) {
        let n;
        let l = new Set();
        if (null != t) for (let e of t) l.add(e);
        let a = [];
        for (let t of e) {
          if (null != t)
            if (t.type === s.h8.HEADER) n = t;
            else {
              let { id: e } = t.record;
              !l.has(e) &&
                (l.add(e), null != n && (a.push(n), (n = void 0)), a.push(t));
            }
        }
        return a;
      }
      function I(e, t) {
        return e.filter((e) => {
          var n, l;
          return (
            (0, d.lm)(e) &&
            (e.type === s.h8.HEADER ||
              ((0, h.o)(e) &&
                ((n = e),
                (l = t),
                n.type === s.h8.USER
                  ? l || null != o.Z.getDMChannelFromUserId(n.record.id)
                  : n.type === s.h8.GROUP_DM ||
                    (n.record.type !== _.d4z.GUILD_FORUM &&
                      n.record.type !== _.d4z.GUILD_MEDIA &&
                      c.Z.can(_.Plq.VIEW_CHANNEL, n.record) &&
                      c.Z.can(_.Plq.SEND_MESSAGES, n.record)))))
          );
        });
      }
      function p(e) {
        let {
          results: t,
          hasQuery: n,
          queryMode: a,
          frequentChannels: s,
          targetDestination: o,
          selectedDestinations: c,
          pinnedDestinations: u,
          originDestination: d,
          includeMissingDMs: h,
        } = e;
        if (n) return A(I(t, h));
        let _ = null != u && u.length > 0 ? u.map((e) => S(e)) : [],
          f = r.Z.getChannelHistory(),
          E = f.length > 0 ? f.map((e) => (0, i.Z)(e)) : [],
          g = s.length > 0 ? s.map((e) => (0, i.Z)(e.id)) : [],
          m = I([..._, null != o ? S(o) : null, ...E, ...g], h),
          p =
            (null == c ? void 0 : c.find((e) => (0, l.isEqual)(e, d))) != null,
          C = null == d || p ? [] : [d.id];
        return null != a
          ? A(m.filter((e) => e.type === a))
          : A(m, C).slice(0, 15);
      }
    },
    601565: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var l = n(470079),
        a = n(77866),
        s = n(212819);
      function i(e) {
        let { searchOptions: t } = e,
          [n, i] = l.useState({ results: [], query: "" }),
          r = (0, a.Z)(() => {
            let e = new s.ZP((e, t) => {
              i({ results: e, query: t });
            });
            return e.setLimit(20), e.search(""), e;
          });
        return (
          l.useEffect(() => () => r.destroy(), [r]),
          l.useEffect(() => {
            null != t && t !== r.options && r.setOptions(t);
          }, [r, t]),
          {
            search: l.useCallback(
              (e) => {
                var t, n;
                let { query: l, resultTypes: a } = e;
                if (
                  null == r.resultTypes ||
                  ((t = a),
                  (n = r.resultTypes),
                  !(t.length === n.size && t.every((e) => n.has(e))))
                )
                  r.setResultTypes(a), r.setLimit(1 === a.length ? 50 : 20);
                r.search("" === l.trim() ? "" : l);
              },
              [r],
            ),
            ...n,
          }
        );
      }
    },
    72214: function (e, t, n) {
      n.d(t, {
        s: function () {
          return _;
        },
      }),
        n(47120);
      var l = n(470079),
        a = n(442837),
        s = n(38618),
        i = n(51596),
        r = n(516373),
        o = n(314897),
        c = n(580005),
        u = n(987509),
        d = n(601565),
        h = n(41837);
      function _(e) {
        let {
            searchText: t,
            targetDestination: n,
            selectedDestinations: _,
            originDestination: f,
            includeMissingDMs: E = !1,
          } = e,
          g = (0, a.e7)([o.default], () => o.default.getId()),
          m = l.useMemo(
            () => ({
              searchOptions: {
                blacklist: new Set(["user:".concat(g)]),
                frecencyBoosters: !0,
                userFilters: null,
              },
            }),
            [g],
          ),
          { search: S, query: A, results: I } = (0, d.Z)(m),
          p = l.useMemo(
            () =>
              (function (e) {
                let { query: t, queryMode: n } = (0, i.F_)(e),
                  l = h.M,
                  a = null;
                return (
                  null != n && h.M.includes(n) && ((l = [n]), (a = n)),
                  { query: t, queryMode: a, resultTypes: l }
                );
              })(t),
            [t],
          ),
          { queryMode: C } = p,
          [N, L] = l.useState(null != _ ? _ : []);
        l.useLayoutEffect(() => {
          let { query: e, resultTypes: t } = p;
          S({ query: e, resultTypes: t }), L(null != _ ? _ : []);
        }, [S, p]),
          (0, r.D)();
        let b = (0, a.e7)([c.Z], () =>
            c.Z.getFrequentlyWithoutFetchingLatest(),
          ),
          v = (0, a.e7)([s.Z], () => s.Z.isConnected()),
          T = "" !== A;
        return l.useMemo(
          () =>
            (0, u.ZP)({
              results: I,
              hasQuery: T,
              queryMode: C,
              targetDestination: n,
              frequentChannels: b,
              selectedDestinations: _,
              pinnedDestinations: N,
              originDestination: f,
              includeMissingDMs: E,
              isConnected: v,
            }),
          [I, T, C, n, b, _, N, f, E, v],
        );
      }
    },
    621839: function (e, t, n) {
      e.exports = {
        closeButton: "closeButton_e3c9f3",
        description: "description_e3c9f3",
        conflictButton: "conflictButton_e3c9f3",
        linkButtonSize: "linkButtonSize_e3c9f3",
        linkButton: "linkButton_e3c9f3",
        retryButton: "retryButton_e3c9f3",
        conflictButtonInner: "conflictButtonInner_e3c9f3",
        buttonBody: "buttonBody_e3c9f3",
        timestamp: "timestamp_e3c9f3",
        choiceWrapper: "choiceWrapper_e3c9f3",
        choiceLine: "choiceLine_e3c9f3",
        choiceTitle: "choiceTitle_e3c9f3 title_e3c9f3",
        conflictTitle: "conflictTitle_e3c9f3 title_e3c9f3",
        conflictUploadArt:
          "conflictUploadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        conflictDownloadArt:
          "conflictDownloadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        errorArt: "errorArt_e3c9f3 art_e3c9f3",
        modal: "modal_e3c9f3",
      };
    },
    300436: function (e, t, n) {
      e.exports = {
        container: "container_e85446",
        circularImage: "circularImage_e85446",
        dots: "dots_e85446",
      };
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
//# sourceMappingURL=9546a68f27b4e0bb4914.js.map
