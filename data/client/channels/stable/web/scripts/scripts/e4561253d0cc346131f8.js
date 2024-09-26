"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37220"],
  {
    332148: function (e, n, t) {
      var i = t(544891),
        a = t(570140),
        s = t(346479),
        l = t(624453),
        r = t(668781),
        o = t(981631),
        u = t(689938);
      let d = {
        async pinMessage(e, n) {
          let { id: t, name: a } = e;
          await s.Z.unarchiveThreadIfNecessary(e.id),
            i.tn.put({ url: o.ANM.PIN(t, n), oldFormErrors: !0 }).catch(() => {
              let n;
              (n = e.isPrivate()
                ? u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format(
                    { maxPins: o.tG9 },
                  )
                : u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                    maxPins: o.tG9,
                    channelName: a,
                  })),
                r.Z.show({
                  title: u.Z.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                  body: n,
                  confirmText: u.Z.Messages.OKAY,
                });
            });
        },
        async unpinMessage(e, n) {
          await s.Z.unarchiveThreadIfNecessary(e.id),
            i.tn
              .del({ url: o.ANM.PIN(e.id, n), oldFormErrors: !0 })
              .catch(() =>
                r.Z.show({
                  title: u.Z.Messages.UNPIN_MESSAGE_FAILED_TITLE,
                  body: u.Z.Messages.UNPIN_MESSAGE_FAILED_BODY,
                  confirmText: u.Z.Messages.TRY_AGAIN,
                  cancelText: u.Z.Messages.CANCEL,
                  onConfirm: d.unpinMessage.bind(d, e, n),
                }),
              );
        },
        ackPins(e) {
          a.Z.dispatch({ type: "CHANNEL_PINS_ACK", channelId: e });
        },
        fetchPins(e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = l.Z.getPinnedMessages(e);
          if (!!n || null == t || (!t.loaded && !t.loading))
            a.Z.dispatch({ type: "LOAD_PINNED_MESSAGES", channelId: e }),
              i.tn
                .get({ url: o.ANM.PINS(e), retries: 2, oldFormErrors: !0 })
                .then(
                  (n) => {
                    a.Z.dispatch({
                      type: "LOAD_PINNED_MESSAGES_SUCCESS",
                      messages: n.body,
                      channelId: e,
                    });
                  },
                  () => {
                    a.Z.dispatch({
                      type: "LOAD_PINNED_MESSAGES_FAILURE",
                      channelId: e,
                    });
                  },
                );
        },
      };
      n.Z = d;
    },
    257559: function (e, n, t) {
      t(789020), t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        r = t(481060),
        o = t(332148),
        u = t(904245),
        d = t(933557),
        c = t(951844),
        E = t(372900),
        M = t(726521),
        g = t(294218),
        m = t(699516),
        f = t(594174),
        I = t(630388),
        _ = t(970257),
        Z = t(981631),
        S = t(689938),
        h = t(262704);
      function A(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class N extends a.PureComponent {
        render() {
          let e, n;
          let { report: t } = this.state,
            {
              channel: a,
              message: s,
              showContextMenuHint: l,
              ...o
            } = this.props,
            u =
              a.type === Z.d4z.GUILD_ANNOUNCEMENT &&
              (0, I.yE)(s.flags, Z.iLy.CROSSPOSTED);
          return (
            l &&
              (e = (0, i.jsx)(c.Z, {
                className: h.spacingTop,
                children:
                  S.Z.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format(),
              })),
            (0, _.vc)(s) &&
              (n = (0, i.jsx)(r.FormSwitch, {
                value: t,
                onChange: this.handleToggleReport,
                hideBorder: !0,
                className: h.spacingTop,
                children: S.Z.Messages.DELETE_MESSAGE_REPORT,
              })),
            (0, i.jsx)(E.Z.Provider, {
              value: a.guild_id,
              children: (0, i.jsxs)(r.ConfirmModal, {
                header: u
                  ? S.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER
                  : S.Z.Messages.DELETE_MESSAGE_TITLE,
                confirmText: S.Z.Messages.DELETE,
                cancelText: S.Z.Messages.CANCEL,
                onConfirm: this.handleDelete,
                ...o,
                children: [
                  (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    className: h.spacing,
                    children: u
                      ? S.Z.Messages.DELETE_FOLLOWED_NEWS_BODY
                      : S.Z.Messages.DELETE_MESSAGE_BODY,
                  }),
                  (0, i.jsx)("div", {
                    className: h.message,
                    children: (0, i.jsx)(g.Z, {
                      channel: a,
                      message: s,
                      disableInteraction: !0,
                    }),
                  }),
                  n,
                  e,
                ],
              }),
            })
          );
        }
        constructor(...e) {
          super(...e),
            A(this, "state", { report: !1 }),
            A(this, "handleDelete", () => {
              let { report: e } = this.state,
                { channel: n, message: t } = this.props;
              e
                ? (0, M.ak)(t, "message_delete_alert", () =>
                    u.Z.deleteMessage(n.id, t.id),
                  )
                : u.Z.deleteMessage(n.id, t.id);
            }),
            A(this, "handleToggleReport", (e) => {
              this.setState({ report: e });
            });
        }
      }
      n.Z = {
        confirmPin: function (e, n) {
          (0, r.openModal)((t) => {
            let a;
            let s = (0, d.F6)(e, f.default, m.Z);
            return (
              (a = e.isPrivate()
                ? S.Z.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL
                : S.Z.Messages.PIN_MESSAGE_BODY.format({ channelName: s })),
              (0, i.jsx)(E.Z.Provider, {
                value: e.guild_id,
                children: (0, i.jsxs)(r.ConfirmModal, {
                  header: S.Z.Messages.PIN_MESSAGE_TITLE,
                  confirmText: S.Z.Messages.PIN_CONFIRM,
                  cancelText: S.Z.Messages.CANCEL,
                  confirmButtonColor: r.Button.Colors.BRAND,
                  onConfirm: () => o.Z.pinMessage(e, n.id),
                  ...t,
                  children: [
                    (0, i.jsx)(r.Text, {
                      variant: "text-md/normal",
                      className: h.spacing,
                      children: a,
                    }),
                    (0, i.jsx)("div", {
                      className: h.message,
                      children: (0, i.jsx)(g.Z, {
                        channel: e,
                        message: n,
                        animateAvatar: !1,
                        disableInteraction: !0,
                      }),
                    }),
                  ],
                }),
              })
            );
          });
        },
        confirmUnpin: function (e, n) {
          (0, r.openModal)((t) =>
            (0, i.jsx)(E.Z.Provider, {
              value: e.guild_id,
              children: (0, i.jsxs)(r.ConfirmModal, {
                header: S.Z.Messages.UNPIN_MESSAGE_TITLE,
                confirmText: S.Z.Messages.UNPIN_CONFIRM,
                cancelText: S.Z.Messages.CANCEL,
                onConfirm: () => o.Z.unpinMessage(e, n.id),
                ...t,
                children: [
                  (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    className: h.spacing,
                    children: S.Z.Messages.UNPIN_MESSAGE_BODY,
                  }),
                  (0, i.jsx)("div", {
                    className: l()(h.message, h.spacing),
                    children: (0, i.jsx)(g.Z, {
                      channel: e,
                      message: n,
                      disableInteraction: !0,
                    }),
                  }),
                  (0, i.jsx)(c.Z, {
                    children:
                      S.Z.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format(),
                  }),
                ],
              }),
            }),
          );
        },
        confirmDelete: function (e, n) {
          let t =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          (0, r.openModal)((a) =>
            (0, i.jsx)(N, {
              channel: e,
              message: n,
              showContextMenuHint: t,
              ...a,
            }),
          );
        },
        confirmEdit: function (e, n, t) {
          (0, r.openModal)((a) =>
            (0, i.jsx)(r.ConfirmModal, {
              header: S.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
              confirmText: S.Z.Messages.CONFIRM,
              cancelText: S.Z.Messages.CANCEL,
              confirmButtonColor: r.Button.Colors.BRAND,
              onConfirm: () => u.Z.editMessage(e, n, { content: t }),
              ...a,
              children: (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                className: h.spacing,
                children: S.Z.Messages.EDIT_FOLLOWED_NEWS_BODY,
              }),
            }),
          );
        },
      };
    },
    112554: function (e, n, t) {
      t.d(n, {
        K: function () {
          return l;
        },
        b: function () {
          return r;
        },
      });
      var i = t(399606),
        a = t(375954),
        s = t(163268);
      let l = (e, n, t) => {
          var l, r;
          let o = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
          if (null == o) return [];
          let u =
            void 0 !== t
              ? (e) => e.url === t
              : (e) =>
                  (0, s.KP)({ type: s.lJ.Attachment, media: e }, (0, s.HH)(o));
          return null !==
            (r =
              null == o
                ? void 0
                : null === (l = o.attachments) || void 0 === l
                  ? void 0
                  : l.filter(u)) && void 0 !== r
            ? r
            : [];
        },
        r = (e, n, t) => {
          var l, r;
          let o = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
          if (null == o) return [];
          let u =
            void 0 !== t
              ? (e) => e.id === t
              : (e) => (0, s.KP)({ type: s.lJ.Embed, media: e }, (0, s.HH)(o));
          return null !==
            (r =
              null == o
                ? void 0
                : null === (l = o.embeds) || void 0 === l
                  ? void 0
                  : l.filter(u)) && void 0 !== r
            ? r
            : [];
        };
    },
    788679: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return E;
          },
        });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(522664),
        l = t(651530),
        r = t(163268),
        o = t(668058),
        u = t(112554),
        d = t(160877),
        c = t(689938);
      function E(e) {
        let {
            channelId: n,
            messageId: t,
            mediaItemUrl: E,
            embedId: M,
            transitionState: g,
            onClose: m,
          } = e,
          f = (0, l.yh)(),
          I = (0, u.K)(n, t, E),
          _ = (0, u.b)(n, t, M),
          { reportFalsePositive: Z, isReportFalsePositiveLoading: S } = (0,
          o.$)({
            onSuccess: () => (0, d.s)(m),
            onError: () => {
              (0, a.showToast)(
                (0, a.createToast)(
                  c.Z.Messages.ERROR_GENERIC_TITLE,
                  a.ToastType.FAILURE,
                ),
              );
            },
            report: () => {
              (0, s.Uj)(
                n,
                t,
                I.map((e) => e.id),
                _.map((e) => e.id),
              );
            },
          });
        return (
          !(f && (I.length > 0 || _.length > 0)) && m(),
          (0, i.jsx)(d.$, {
            messageId: t,
            channelId: n,
            isReportFalsePositiveLoading: S,
            analyticsContext: r.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: Z,
            attachmentPreview: 1 === I.length && 0 === _.length ? I[0] : void 0,
            embedPreview: 1 === _.length && 0 === I.length ? _[0] : void 0,
            transitionState: g,
            onClose: m,
          })
        );
      }
    },
    276022: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(653041);
      var i = t(735250),
        a = t(470079),
        s = t(442837),
        l = t(481060),
        r = t(139387),
        o = t(230711),
        u = t(213459),
        d = t(434404),
        c = t(430824),
        E = t(496675),
        M = t(981631),
        g = t(689938);
      function m(e) {
        let { user: n, guildId: t, channel: m, context: f } = e,
          I = c.Z.getGuild(t),
          _ = (0, s.e7)([E.Z], () =>
            null != I ? E.Z.can(M.Plq.MANAGE_GUILD, I) : null,
          ),
          Z = (0, u.em)(m, !0, !0),
          S = (0, u.PL)(!0, !0),
          { isUserApp: h, isGuildApp: A } = a.useMemo(() => {
            var e, t, i, a;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let s = Object.values(
                null !==
                  (i =
                    null === (e = Z.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              l = Object.values(
                null !==
                  (a =
                    null === (t = S.result) || void 0 === t
                      ? void 0
                      : t.sections) && void 0 !== a
                  ? a
                  : {},
              );
            return {
              isGuildApp: s.some((e) => {
                var t;
                return (
                  (null === (t = e.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === (null == n ? void 0 : n.id)
                );
              }),
              isUserApp: l.some((e) => {
                var t;
                return (
                  (null === (t = e.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === (null == n ? void 0 : n.id)
                );
              }),
            };
          }, [Z, S, null == n ? void 0 : n.id]),
          N = a.useCallback(() => {
            if ((null == I ? void 0 : I.id) != null)
              d.Z.open(I.id, M.pNK.INTEGRATIONS),
                r.Z.setSection(M.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == I ? void 0 : I.id]),
          v = a.useCallback(() => {
            o.Z.open(M.oAB.AUTHORIZED_APPS);
          }, []),
          T = f === M.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !_ || T || (!A && !h)) return null;
        let p = [];
        return (
          A &&
            p.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-integration",
                  label: g.Z.Messages.MANAGE_INTEGRATION,
                  action: N,
                },
                "manage-integration",
              ),
            ),
          h &&
            p.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: g.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: v,
                },
                "manage-authorized-app",
              ),
            ),
          p
        );
      }
    },
    111618: function (e, n, t) {
      var i,
        a,
        s,
        l,
        r = t(442837),
        o = t(570140);
      let u = {};
      class d extends (l = r.ZP.Store) {
        getOptions(e) {
          return u[e];
        }
      }
      (s = "SendMessageOptionsStore"),
        (a = "displayName") in (i = d)
          ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[a] = s),
        (n.Z = new d(o.Z, {
          MESSAGE_CREATE: function (e) {
            let { message: n, sendMessageOptions: t } = e;
            null != t && (u[n.id] = t),
              null != n.nonce && n.nonce in u && delete u[n.nonce];
          },
        }));
    },
    151007: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(665906),
        a = t(901461),
        s = t(981631);
      function l(e, n, t) {
        return (
          !n.isSystemDM() &&
          !(0, a.Z)(e) &&
          (t || n.isPrivate()) &&
          (0, i.RG)(n) &&
          n.type !== s.d4z.GUILD_VOICE &&
          n.type !== s.d4z.GUILD_STAGE_VOICE
        );
      }
    },
    730954: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      }),
        t(789020);
      var i = t(904245),
        a = t(667204);
      function s(e, n, t) {
        let s =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if ((i.Z.deleteMessage(e.id, n.id, !0), n.isCommandType())) {
          null != n.interactionData &&
            null != s.applicationId &&
            (0, a.d)(n, e, s);
          return;
        }
        let { content: l, tts: r, messageReference: o, flags: u, nonce: d } = n;
        i.Z.sendMessage(
          e.id,
          { content: l, tts: r, invalidEmojis: [], validNonShortcutEmojis: [] },
          void 0,
          {
            nonce: d,
            flags: u,
            messageReference: null != o ? o : void 0,
            ...s,
          },
        );
      }
    },
    996861: function (e, n, t) {
      t.d(n, {
        $Z: function () {
          return p;
        },
        B8: function () {
          return R;
        },
        F4: function () {
          return v;
        },
        HH: function () {
          return P;
        },
        Hd: function () {
          return O;
        },
        Xl: function () {
          return C;
        },
        dF: function () {
          return j;
        },
        eM: function () {
          return G;
        },
        fB: function () {
          return T;
        },
        gK: function () {
          return L;
        },
        mG: function () {
          return D;
        },
        qe: function () {
          return b;
        },
        rY: function () {
          return x;
        },
        ts: function () {
          return y;
        },
        zW: function () {
          return N;
        },
      }),
        t(735250),
        t(470079),
        t(481060);
      var i = t(332148),
        a = t(904245),
        s = t(257559),
        l = t(143740),
        r = t(912332),
        o = t(434404);
      t(726521);
      var u = t(623292),
        d = t(324701),
        c = t(488131),
        E = t(314897),
        M = t(592125),
        g = t(626135),
        m = t(934415),
        f = t(572004),
        I = t(585483),
        _ = t(709054),
        Z = t(111618),
        S = t(50284),
        h = t(730954),
        A = t(981631);
      function N(e) {
        let n = e.getGuildId();
        null != n && o.Z.open(n, A.pNK.OVERVIEW);
      }
      function v(e, n, t) {
        (0, f.JG)(
          t.shiftKey ? "".concat(n.channel_id, "-").concat(n.id) : n.id,
        );
      }
      function T(e, n) {
        g.default.track(A.rMx.MESSAGE_LINK_COPIED, {
          message_id: n.id,
          channel: n.channel_id,
        }),
          (0, f.JG)((0, m.wR)(e.guild_id, e.id, n.id));
      }
      function p(e, n, t) {
        n.state === A.yb.SEND_FAILED || t.shiftKey
          ? a.Z.deleteMessage(e.id, n.id, n.state === A.yb.SEND_FAILED)
          : s.Z.confirmDelete(e, n);
      }
      function O(e, n) {
        a.Z.startEditMessage(e.id, n.id, n.content);
      }
      function R(e, n) {
        (0, S.Z)(e.id, n.id);
      }
      function x(e, n, t) {
        if (!1 === n.pinned) {
          t.shiftKey ? i.Z.pinMessage(e, n.id) : s.Z.confirmPin(e, n);
          return;
        }
        t.shiftKey ? i.Z.unpinMessage(e, n.id) : s.Z.confirmUnpin(e, n);
      }
      function C(e, n) {
        (0, l.Z)(e.id, n.id);
      }
      function D(e, n) {
        (0, h.Z)(e, n, void 0, Z.Z.getOptions(n.id));
      }
      function P(e, n, t) {
        let i = e.isPrivate(),
          a = n.author.id === E.default.getId();
        (0, u.fE)({
          channel: e,
          message: n,
          shouldMention: !t.shiftKey && !a,
          showMentionToggle: !i && !a,
        }),
          I.S.dispatchToLastSubscribed(A.CkL.TEXTAREA_FOCUS);
      }
      function L(e, n) {
        (0, c.R6)(e, n, "Message");
      }
      function b(e, n) {
        let t = M.Z.getChannel(_.default.castMessageIdAsChannelId(n.id));
        null != t && (0, c.ok)(t);
      }
      function j(e, n) {
        (0, d.z)({ channelId: e.id, messageId: n.id });
      }
      function G(e, n) {
        (0, d.x)({ channelId: e.id, messageId: n.id });
      }
      function y(e, n) {
        (0, r.l8)({
          channelId: e.id,
          messageId: n.id,
          source: "message-actions",
        });
      }
    },
    225138: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return w;
          },
          useMessageMenu: function () {
            return k;
          },
        });
      var i = t(735250);
      t(470079);
      var a = t(374470),
        s = t(481060),
        l = t(239091),
        r = t(911969),
        o = t(299206),
        u = t(26737),
        d = t(29264),
        c = t(905041),
        E = t(89013),
        M = t(988500),
        g = t(570870),
        m = t(786095),
        f = t(268623),
        I = t(667922),
        _ = t(941389),
        Z = t(449751),
        S = t(749339),
        h = t(601184),
        A = t(6148),
        N = t(519110),
        v = t(759875),
        T = t(168405),
        p = t(536639),
        O = t(720904),
        R = t(88791),
        x = t(385302),
        C = t(873699),
        D = t(134323),
        P = t(429260),
        L = t(1626),
        b = t(279329),
        j = t(627938),
        G = t(512303),
        y = t(481300),
        U = t(689938);
      function w(e) {
        var n, t;
        let i,
          s,
          r,
          o,
          {
            channel: u,
            message: d,
            target: c,
            mediaItem: E,
            shouldHideMediaOptions: M,
            onSelect: g,
            onHeightUpdate: m,
          } = e,
          f = c,
          I = c.getAttribute("data-type"),
          _ = c.getAttribute("data-id"),
          Z = c.getAttribute("data-name");
        if (null != E) s = i = r = E.url;
        else
          for (; (0, a.k)(f); )
            (0, a.k)(f, HTMLImageElement) && null != f.src && (s = f.src),
              (0, a.k)(f, HTMLAnchorElement) &&
                null != f.href &&
                ((i = f.href),
                (o = f.textContent),
                null == s &&
                  "img" === f.getAttribute("data-role") &&
                  ((s = i),
                  f.hasAttribute("data-safe-src") &&
                    "" !== f.getAttribute("data-safe-src") &&
                    (r = f.getAttribute("data-safe-src")))),
              (f = f.parentNode);
        return k({
          message: d,
          channel: u,
          mediaItem: E,
          textSelection:
            null !==
              (t =
                null === (n = document.getSelection()) || void 0 === n
                  ? void 0
                  : n.toString()) && void 0 !== t
              ? t
              : "",
          favoriteableType: I,
          favoriteableId: _,
          favoriteableName: Z,
          itemHref: i,
          itemSrc: s,
          itemSafeSrc: r,
          itemTextContent: o,
          canReport: !0,
          onHeightUpdate: m,
          onSelect: g,
          onClose: l.Zy,
          navId: "message",
          ariaLabel: U.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          shouldHideMediaOptions: M,
        });
      }
      function k(e) {
        let {
            message: n,
            channel: t,
            mediaItem: a,
            textSelection: l,
            favoriteableType: w,
            favoriteableId: k,
            favoriteableName: F,
            itemHref: K,
            itemSrc: H,
            itemSafeSrc: B,
            itemTextContent: Y,
            canReport: V,
            onHeightUpdate: z,
            onSelect: X,
            onClose: W,
            navId: q,
            ariaLabel: J,
            shouldHideMediaOptions: $ = !1,
          } = e,
          Q = (0, u.Z)(l),
          ee = (0, E.Z)(l),
          en = (0, O.Z)(n, t),
          et = (0, I.Z)(n, t),
          ei = (0, A.Z)(n, t),
          ea = (0, p.Z)(n, t),
          es = (0, N.Z)({ type: w, id: k, name: F }),
          el = (0, L.Z)(n, t),
          er = (0, T.Z)(n, t),
          eo = (0, R.Z)(n),
          eu = (0, _.Z)(n, t),
          ed = (0, Z.Z)(n, t),
          ec = (0, x.Z)(n, t),
          eE = (0, C.Z)(n, t),
          eM = (0, h.Z)(n, t),
          eg = (0, P.Z)(n),
          em = (0, b.Z)(n, t),
          ef = (0, c.Z)(null != K ? K : H, Y, n, { shouldHideMediaOptions: $ }),
          eI = (0, d.Z)(B, n, { shouldHideMediaOptions: $ }),
          e_ = (0, y.Z)(n, a),
          eZ = (0, o.Z)({
            id: n.id,
            label: U.Z.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(n.channel_id, "-").concat(n.id),
          }),
          eS = (0, D.Z)(n, t),
          eh = (0, v.Z)(n, t),
          eA = (0, j.Z)(n, t),
          eN = (0, m.Z)(l, t.getGuildId()),
          ev = (0, f.Z)(n),
          eT = (0, S.Z)(n),
          ep = (0, g.Z)({
            commandType: r.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: z,
          }),
          eO = (0, G.Z)(n),
          eR = (0, M.Z)(n);
        return (0, i.jsxs)(s.Menu, {
          navId: q,
          onClose: W,
          "aria-label": J,
          onSelect: X,
          children: [
            (0, i.jsx)(s.MenuGroup, { children: Q }),
            (0, i.jsx)(s.MenuGroup, { children: ee }),
            (0, i.jsxs)(s.MenuGroup, {
              children: ["" === l ? en : null, et, eo],
            }),
            (0, i.jsxs)(s.MenuGroup, { children: [ei, eS, eh, eA] }),
            (0, i.jsxs)(s.MenuGroup, {
              children: [eT, ea, ev, ep, el, er, eu, ed, em, eR, eO],
            }),
            (0, i.jsxs)(s.MenuGroup, { children: [eE, ec, eM, V && eg] }),
            (0, i.jsxs)(s.MenuGroup, { children: [es, eN, eI, e_] }),
            (0, i.jsx)(s.MenuGroup, { children: ef }),
            (0, i.jsx)(s.MenuGroup, { children: eZ }),
          ],
        });
      }
    },
    786095: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      }),
        t(47120),
        t(724458);
      var i = t(735250),
        a = t(470079),
        s = t(481060),
        l = t(239091),
        r = t(236413),
        o = t(727072),
        u = t(85960),
        d = t(676317),
        c = t(65912),
        E = t(556012),
        M = t(572456),
        g = t(434404),
        m = t(981631),
        f = t(273504),
        I = t(689938),
        _ = t(561240);
      let Z = f.fX.KEYWORD;
      function S(e, n) {
        let { perGuildMaxCount: t } = u.I6[Z],
          { isLoading: S, saveRule: h, errorMessage: A } = (0, c.w)(),
          { createNewEditingRule: N } = (0, c.V)(),
          [v, T] = a.useState(!1),
          [p, O] = (0, o.I2)(n),
          { rulesByTriggerType: R, updateRule: x } = (0, o.pH)(n),
          C = a.useMemo(() => {
            var e;
            return null !== (e = R[Z]) && void 0 !== e ? e : [];
          }, [R]),
          D = 0 === C.length,
          P = t > C.length && !D;
        if (
          !a.useMemo(() => (0, d.ze)(n), [n]) ||
          null == e ||
          0 === e.length ||
          null == n
        )
          return null;
        let L = e.split(" "),
          b = L.length;
        try {
          (0, r.km)(L, f.RH);
        } catch (e) {
          return null;
        }
        let j = () => {
            if (null != n)
              (0, l.Zy)(),
                g.Z.open(n, m.pNK.GUILD_AUTOMOD),
                setTimeout(() => {
                  N(n, Z, {
                    triggerMetadata: {
                      keywordFilter: [e],
                      regexPatterns: [],
                      allowList: [],
                    },
                  });
                }, 400);
          },
          G = async (n) => {
            var t, i;
            if (((0, l.Zy)(), !(await (0, M.XN)(n.name, e)))) return;
            let a = {
              ...n,
              triggerMetadata: {
                ...n.triggerMetadata,
                keywordFilter: [
                  ...(null !==
                    (i =
                      null === (t = n.triggerMetadata) || void 0 === t
                        ? void 0
                        : t.keywordFilter) && void 0 !== i
                    ? i
                    : []),
                  e,
                ],
              },
            };
            await h(a, C),
              x(a),
              null != A
                ? (0, s.showToast)(
                    (0, s.createToast)(
                      I.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR,
                      s.ToastType.FAILURE,
                    ),
                  )
                : (0, s.showToast)(
                    (0, s.createToast)(
                      I.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS,
                      s.ToastType.SUCCESS,
                    ),
                  );
          },
          y = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(s.MenuItem, {
              id: "automod-rules-loading",
              label: I.Z.Messages.LOADING,
            }),
          });
        return (
          !p &&
            (y = (0, i.jsxs)(i.Fragment, {
              children: [
                D &&
                  (0, i.jsx)(s.MenuItem, {
                    id: "add-first-rule",
                    label:
                      I.Z.Messages
                        .GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
                    action: j,
                    disabled: S,
                  }),
                C.map((e) => {
                  let n = (0, u.V9)(Z).reduce((n, t) => {
                    let i = e.actions.find((e) => {
                      let { type: n } = e;
                      return t === n;
                    });
                    if (null == i) return n;
                    let a = (0, E.c)(t, i);
                    return (n += ", ".concat(
                      null == a ? void 0 : a.headerText,
                    ));
                  }, "");
                  return (0, i.jsx)(
                    s.MenuRadioItem,
                    {
                      id: e.id,
                      label: e.name,
                      subtext: (0, i.jsx)(s.Text, {
                        color: "text-muted",
                        className: _.actionTextHeader,
                        variant: "text-xs/normal",
                        children: n.slice(2),
                      }),
                      group: "automod-rule-selection",
                      checked: !1,
                      disabled: S,
                      action: () => G(e),
                    },
                    e.id,
                  );
                }),
                P &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(s.MenuSeparator, {}),
                      (0, i.jsx)(s.MenuItem, {
                        id: "add-another-rule",
                        label: I.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
                        action: j,
                        disabled: S,
                      }),
                    ],
                  }),
              ],
            })),
          (0, i.jsx)(s.MenuItem, {
            id: "guild-automod-add-selection",
            label: I.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
              keywordCount: b,
            }),
            onFocus: () => {
              if (!v) T(!0), O();
            },
            children: y,
          })
        );
      }
    },
    268623: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(442837),
        l = t(481060),
        r = t(436774),
        o = t(2818),
        u = t(324701),
        d = t(575016),
        c = t(768943),
        E = t(175006),
        M = t(742989),
        g = t(898150),
        m = t(70956),
        f = t(689938);
      function I(e) {
        let { enabled: n } = o.Z.useExperiment({
            location: "LongPressMessageActionSheet",
          }),
          { showReminders: t } = M.Z.useExperiment({
            location: "LongPressMessageActionSheet",
          }),
          I = (0, s.e7)([c.Z], () => c.Z.getSavedMessage(e.channel_id, e.id)),
          _ = (function (e) {
            let { message: n, savedMessage: t } = e,
              [s, r] = a.useState(new Date());
            a.useEffect(() => {
              let e = setInterval(() => r(new Date()), m.Z.Millis.MINUTE);
              return () => {
                clearInterval(e);
              };
            }, []);
            let o = a.useCallback(
                (e) =>
                  (0, u.z)({
                    channelId: n.channel_id,
                    messageId: n.id,
                    dueAt: e,
                    displayToast: !0,
                  }),
                [n.channel_id, n.id],
              ),
              c = (0, g.useMessageReminderDurationSuggestions)({
                createReminder: o,
              }),
              { dueInText: E } = (0, d.AT)({
                dueAt: null == t ? void 0 : t.saveData.dueAt,
                now: s,
                type: d.hQ.LONG,
              });
            return (null == t ? void 0 : t.saveData.dueAt) == null
              ? (0, i.jsx)(l.MenuGroup, {
                  label: f.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                  children: c,
                })
              : (0, i.jsxs)(l.MenuGroup, {
                  label: E,
                  children: [
                    (0, i.jsx)(l.MenuItem, {
                      id: "mark-complete",
                      label: f.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                      icon: l.CheckmarkSmallIcon,
                      action: () =>
                        (0, u.z)({
                          channelId: n.channel_id,
                          messageId: n.id,
                          dueAt: void 0,
                        }),
                    }),
                    (0, i.jsx)(l.MenuItem, {
                      id: "edit-reminder",
                      label: f.Z.Messages.MESSAGE_REMINDERS_EDIT,
                      children: c,
                    }),
                  ],
                });
          })({ message: e, savedMessage: I });
        return n || t
          ? null != I || (0, E.Z)()
            ? (0, i.jsxs)(l.MenuItem, {
                id: "save-for-later",
                label: f.Z.Messages.FOR_LATER_SAVE,
                action: () =>
                  null == I
                    ? (0, u.z)({
                        channelId: e.channel_id,
                        messageId: e.id,
                        displayToast: !0,
                      })
                    : (0, u.x)({
                        channelId: e.channel_id,
                        messageId: e.id,
                        dueAt: I.saveData.dueAt,
                        displayToast: !0,
                      }),
                children: [
                  null != I
                    ? (0, i.jsx)(l.MenuItem, {
                        id: "remove-from-for-later",
                        label: f.Z.Messages.FOR_LATER_REMOVE,
                        icon: l.BookmarkIcon,
                        action: () =>
                          (0, u.x)({
                            channelId: e.channel_id,
                            messageId: e.id,
                            dueAt: I.saveData.dueAt,
                            displayToast: !0,
                          }),
                      })
                    : (0, i.jsx)(l.MenuItem, {
                        id: "create-bookmark",
                        label: f.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                        icon: l.BookmarkOutlineIcon,
                        action: () =>
                          (0, u.z)({
                            channelId: e.channel_id,
                            messageId: e.id,
                            displayToast: !0,
                          }),
                      }),
                  (0, i.jsx)(l.MenuSeparator, {}),
                  _,
                ],
              })
            : (0, i.jsx)(l.MenuItem, {
                id: "save-for-later-upsell",
                label: f.Z.Messages.FOR_LATER_SAVE,
                icon: l.NitroWheelIcon,
                iconProps: { color: r.JX.PREMIUM_TIER_2 },
                action: () =>
                  (0, u.z)({
                    channelId: e.channel_id,
                    messageId: e.id,
                    displayToast: !0,
                  }),
              })
          : null;
      }
    },
    667922: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(442837),
        l = t(481060),
        r = t(543241),
        o = t(222677),
        u = t(995774),
        d = t(665906),
        c = t(695346),
        E = t(496675),
        M = t(768581),
        g = t(585483),
        m = t(176354),
        f = t(981631),
        I = t(185923),
        _ = t(689938);
      function Z(e, n) {
        let { reducedMotion: t } = a.useContext(
            l.AccessibilityPreferencesContext,
          ),
          M = (0, d.$R)(n),
          Z = (0, s.e7)(
            [E.Z],
            () => (n.isPrivate() || E.Z.can(f.Plq.ADD_REACTIONS, n)) && M,
            [n, M],
          ),
          h = (0, r.MZ)(n.getGuildId());
        if (!c.nc.getSetting() || !Z || e.type === f.uaV.GUILD_INVITE_REMINDER)
          return null;
        let A = h
          .filter(
            (e) =>
              !m.ZP.isEmojiFilteredOrLocked({
                emoji: e,
                channel: n,
                intention: I.Hz.REACTION,
              }),
          )
          .slice(0, 12)
          .map((a, s) => {
            var r, d;
            return (0, i.jsx)(
              l.MenuItem,
              {
                color: "default",
                id:
                  null !==
                    (d =
                      null !== (r = a.id) && void 0 !== r
                        ? r
                        : a.optionallyDiverseSequence) && void 0 !== d
                    ? d
                    : a.name,
                label: ":".concat(a.name, ":"),
                icon: (e) =>
                  (0, i.jsx)(S, {
                    ...e,
                    reducedMotionEnabled: t.enabled,
                    emoji: a,
                  }),
                action: () => {
                  (0, o.rU)(
                    n.id,
                    e.id,
                    (0, u.g1)(a),
                    o.TW.MESSAGE_CONTEXT_MENU,
                  );
                },
                dontCloseOnActionIfHoldingShiftKey: !0,
              },
              s,
            );
          });
        return (0, i.jsx)(l.MenuItem, {
          id: "add-reaction",
          label: _.Z.Messages.ADD_REACTION,
          action: () => {
            g.S.dispatchKeyed(f.LPv.TOGGLE_REACTION_POPOUT, e.id, {
              emojiPicker: !0,
            });
          },
          color: "default",
          children: (0, i.jsxs)(i.Fragment, {
            children: [
              A,
              (0, i.jsx)(l.MenuSeparator, {}),
              (0, i.jsx)(l.MenuItem, {
                color: "default",
                id: "other-reactions",
                label: _.Z.Messages.VIEW_MORE,
                icon: l.ReactionIcon,
                action: () => {
                  g.S.dispatchKeyed(f.LPv.TOGGLE_REACTION_POPOUT, e.id, {
                    emojiPicker: !0,
                  });
                },
              }),
            ],
          }),
        });
      }
      function S(e) {
        var n;
        let {
          emoji: t,
          reducedMotionEnabled: a,
          className: s = "",
          isFocused: l = !1,
        } = e;
        return (0, i.jsx)("img", {
          className: s,
          src:
            null != t.id
              ? M.ZP.getEmojiURL({
                  id: t.id,
                  animated: t.animated && (!a || l),
                  size: 18,
                })
              : m.ZP.getURL(
                  null !== (n = t.optionallyDiverseSequence) && void 0 !== n
                    ? n
                    : "",
                ),
          alt: "",
        });
      }
    },
    941389: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(496675),
        l = t(996861),
        r = t(981631),
        o = t(689938);
      function u(e, n) {
        let t = n.getGuildId();
        return null != t &&
          (e.type === r.uaV.USER_JOIN ||
            e.type === r.uaV.GUILD_INVITE_REMINDER) &&
          s.Z.canWithPartialContext(r.Plq.MANAGE_GUILD, { guildId: t })
          ? (0, i.jsx)(a.MenuItem, {
              id: "configure",
              label: o.Z.Messages.CONFIGURE,
              icon: a.CircleQuestionIcon,
              action: () => (0, l.zW)(n),
            })
          : null;
      }
    },
    449751: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(852229),
        s = t(481060),
        l = t(626135),
        r = t(572004),
        o = t(981631),
        u = t(689938);
      function d(e, n) {
        return r.wS && e.type !== o.uaV.GUILD_INVITE_REMINDER
          ? (0, i.jsx)(s.MenuItem, {
              id: "copy-link",
              label: u.Z.Messages.COPY_MESSAGE_LINK,
              icon: s.LinkIcon,
              action: () => {
                (0, a.J)(
                  ""
                    .concat(location.protocol, "//")
                    .concat(location.host)
                    .concat(o.Z5c.CHANNEL(n.guild_id, n.id, e.id)),
                ),
                  l.default.track(o.rMx.MESSAGE_LINK_COPIED, {
                    message_id: e.id,
                    channel: e.channel_id,
                  });
              },
            })
          : null;
      }
    },
    749339: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(39154),
        l = t(572004),
        r = t(689938);
      function o(e) {
        return l.wS
          ? (0, i.jsx)(a.MenuItem, {
              id: "copy-text",
              label: r.Z.Messages.COPY_TEXT,
              icon: a.CopyIcon,
              action: () => {
                (e = (0, s.Z)(e)), (0, l.JG)(e.content);
              },
            })
          : null;
      }
    },
    601184: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        s = t(481060),
        l = t(904245),
        r = t(257559),
        o = t(665906),
        u = t(496675),
        d = t(594174),
        c = t(981631),
        E = t(689938);
      function M(e, n) {
        let t = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
          M = (0, o.$R)(n),
          g = (0, a.e7)([u.Z], () => u.Z.can(c.Plq.MANAGE_MESSAGES, n), [n]),
          m = g || (null != t && e.canDeleteOwnMessage(t.id));
        return e.state === c.yb.SENDING ||
          !m ||
          c.V$x.UNDELETABLE.has(e.type) ||
          !M
          ? null
          : (0, i.jsx)(s.MenuItem, {
              id: "delete",
              label: E.Z.Messages.DELETE_MESSAGE,
              action: function (t) {
                e.state === c.yb.SEND_FAILED
                  ? l.Z.deleteMessage(n.id, e.id, !0)
                  : t.shiftKey
                    ? l.Z.deleteMessage(n.id, e.id)
                    : r.Z.confirmDelete(n, e, !0);
              },
              color: "danger",
              icon: s.TrashIcon,
            });
      }
    },
    6148: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        s = t(481060),
        l = t(904245),
        r = t(665906),
        o = t(314897),
        u = t(418476),
        d = t(689938);
      function c(e, n) {
        let t = (0, a.e7)([o.default], () => o.default.getId()),
          c = (0, r.$R)(n),
          E = (0, r.Gu)(n);
        return (0, u.Z)(e, t) && c && !E
          ? (0, i.jsx)(s.MenuItem, {
              id: "edit",
              label: d.Z.Messages.EDIT_MESSAGE,
              action: () => l.Z.startEditMessage(n.id, e.id, e.content),
              icon: s.PencilIcon,
            })
          : null;
      }
    },
    519110: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(757143);
      var i = t(735250),
        a = t(470079),
        s = t(442837),
        l = t(481060),
        r = t(80932),
        o = t(2052),
        u = t(543241),
        d = t(339085),
        c = t(633302),
        E = t(691251),
        M = t(268350),
        g = t(217590),
        m = t(453070),
        f = t(926491),
        I = t(378233),
        _ = t(981631),
        Z = t(689938);
      function S(e) {
        return c.ZP.getByName(e.replace(/(^:|:$)/g, ""));
      }
      function h(e) {
        let { type: n, id: t, name: h, isInExpressionPicker: A = !1 } = e,
          { location: N } = (0, o.O)(),
          v = a.useMemo(
            () => ({
              ...N,
              section: A ? _.jXE.EXPRESSION_PICKER : _.jXE.CONTEXT_MENU,
            }),
            [N, A],
          ),
          T = (0, m.Go)(),
          p = (0, s.e7)([f.Z], () =>
            n === E.S.STICKER && null != t ? f.Z.getStickerById(t) : null,
          ),
          O = null != p && T.includes(p.id),
          R = (0, s.e7)([d.ZP], () => {
            if (n === E.S.EMOJI) {
              if (null != t)
                return d.ZP.getDisambiguatedEmojiContext().getById(t);
              if (null != h) {
                var e;
                return null !== (e = S(h)) && void 0 !== e
                  ? e
                  : S(c.ZP.convertSurrogateToName(h));
              }
            }
          }),
          x = (0, u.C1)(null, R);
        if (null != p && n === E.S.STICKER)
          return (0, I.J8)(p) && !(0, I.V9)(p)
            ? null
            : O
              ? (0, i.jsx)(l.MenuItem, {
                  id: "unfavorite",
                  action: () => (0, M.hW)(p.id),
                  label: Z.Z.Messages.UNFAVORITE_STICKER,
                })
              : (0, i.jsx)(l.MenuItem, {
                  id: "favorite",
                  action: () => {
                    (0, g.cQ)({
                      sticker: p,
                      location: { ...v, object: _.qAy.STICKER },
                    }),
                      (0, M.SA)(null == p ? void 0 : p.id);
                  },
                  label: Z.Z.Messages.FAVORITE_STICKER,
                });
        if (null != R && n === E.S.EMOJI)
          return x
            ? (0, i.jsx)(l.MenuItem, {
                id: "unfavorite",
                action: () => (0, r.Xe)(R),
                label: Z.Z.Messages.UNFAVORITE_EMOJI,
              })
            : (0, i.jsx)(l.MenuItem, {
                id: "favorite",
                action: () => {
                  (0, u.J1)({
                    emoji: R,
                    location: { ...v, object: _.qAy.EMOJI },
                  }),
                    (0, r.$K)(R);
                },
                label: Z.Z.Messages.FAVORITE_EMOJI,
              });
      }
    },
    759875: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(346610),
        l = t(868643),
        r = t(245216),
        o = t(996861),
        u = t(689938);
      function d(e, n) {
        let t = (0, l.a)(e),
          { canForwardMessages: d } = (0, s.yk)(
            { location: "MessageActionsMenu" },
            { autoTrackExposure: !1 },
          );
        return t && d
          ? (0, i.jsx)(a.MenuItem, {
              id: "forward",
              label: u.Z.Messages.MESSAGE_ACTION_FORWARD,
              icon: r.Z,
              action: () => {
                (0, o.ts)(n, e);
              },
            })
          : null;
      }
    },
    168405: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(665906),
        l = t(50284),
        r = t(689938);
      function o(e, n) {
        return (0, s.$R)(n)
          ? (0, i.jsx)(a.MenuItem, {
              id: "mark-unread",
              label: r.Z.Messages.MARK_UNREAD,
              action: () => (0, l.Z)(n.id, e.id),
              icon: a.ChatMarkUnreadIcon,
            })
          : null;
      }
    },
    536639: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        s = t(481060),
        l = t(332148),
        r = t(257559),
        o = t(496675),
        u = t(151007),
        d = t(981631),
        c = t(689938);
      function E(e, n) {
        let t = (0, a.e7)([o.Z], () => o.Z.can(d.Plq.MANAGE_MESSAGES, n), [n]);
        return e.state !== d.yb.SEND_FAILED && (0, u.Z)(e, n, t)
          ? !1 === e.pinned
            ? (0, i.jsx)(s.MenuItem, {
                id: "pin",
                action: function (t) {
                  t.shiftKey ? l.Z.pinMessage(n, e.id) : r.Z.confirmPin(n, e);
                },
                label: c.Z.Messages.PIN_MESSAGE,
                icon: s.PinIcon,
              })
            : (0, i.jsx)(s.MenuItem, {
                id: "unpin",
                action: function (t) {
                  t.shiftKey
                    ? l.Z.unpinMessage(n, e.id)
                    : r.Z.confirmUnpin(n, e);
                },
                label: c.Z.Messages.UNPIN_MESSAGE,
                icon: s.PinIcon,
              })
          : null;
      }
    },
    720904: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        s = t.n(a),
        l = t(442837),
        r = t(481060),
        o = t(543241),
        u = t(222677),
        d = t(995774),
        c = t(665906),
        E = t(695346),
        M = t(496675),
        g = t(768581),
        m = t(176354),
        f = t(981631),
        I = t(185923),
        _ = t(689938),
        Z = t(50455);
      let S = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
      function h(e) {
        var n;
        let { emoji: t, isFocused: a } = e,
          { animated: l, src: o, surrogates: u } = t;
        return (
          null == o && null != t.id
            ? (o = g.ZP.getEmojiURL({ id: t.id, animated: !!l, size: 20 }))
            : null == o && (o = m.ZP.getURL(u)),
          (0, i.jsx)(
            r.Tooltip,
            {
              text: t.allNamesString,
              hideOnClick: !0,
              spacing: 16,
              forceOpen: a,
              children: (e) =>
                (0, i.jsx)("div", {
                  "aria-label": _.Z.Messages.ADD_REACTION_NAMED.format({
                    emojiName: t.name,
                  }),
                  className: s()(Z.button, { [Z.focused]: a }),
                  ...e,
                  children:
                    null == o || "" === o.trim()
                      ? (0, i.jsx)("span", {
                          className: s()("emoji", "emoji-text", Z.icon),
                          ...e,
                          children: u,
                        })
                      : (0, i.jsx)("img", {
                          className: Z.icon,
                          src: o,
                          alt: "",
                        }),
                }),
            },
            null !== (n = t.id) && void 0 !== n ? n : t.name,
          )
        );
      }
      function A(e, n) {
        let t = (0, o.MZ)(n.guild_id).filter((e) => {
          var t;
          return (
            !(
              e.useSpriteSheet &&
              S.indexOf(null !== (t = e.uniqueName) && void 0 !== t ? t : "") >=
                0
            ) &&
            !m.ZP.isEmojiPremiumLocked({
              emoji: e,
              channel: n,
              intention: I.Hz.REACTION,
            })
          );
        });
        t.length > 4 && (t.length = 4);
        let a = E.nc.useSetting(),
          s = (0, c.$R)(n),
          g = (0, l.e7)(
            [M.Z],
            () => a && s && (n.isPrivate() || M.Z.can(f.Plq.ADD_REACTIONS, n)),
            [n, s, a],
          ),
          _ = (t) => {
            (0, u.rU)(n.id, e.id, (0, d.g1)(t), u.TW.MESSAGE_CONTEXT_MENU);
          };
        return g && t.length > 0
          ? (0, i.jsx)(r.MenuGroup, {
              className: Z.wrapper,
              children: t.map((e, n) => {
                var t;
                return (0, i.jsx)(
                  r.MenuItem,
                  {
                    id: "quickreact-".concat(
                      null !== (t = e.id) && void 0 !== t ? t : n,
                    ),
                    render: (n) => {
                      let { isFocused: t } = n;
                      return (0, i.jsx)(h, { emoji: e, isFocused: t });
                    },
                    action: () => _(e),
                    dontCloseOnActionIfHoldingShiftKey: !0,
                  },
                  n,
                );
              }),
            })
          : null;
      }
    },
    88791: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(79390),
        l = t(689938);
      function r(e) {
        return null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, s.eQ)(e))
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "reactions",
              label: l.Z.Messages.VIEW_REACTIONS,
              icon: a.ReactionIcon,
              action: () =>
                (0, a.openModalLazy)(async () => {
                  let { default: n } = await Promise.resolve().then(
                    t.bind(t, 785388),
                  );
                  return (t) => (0, i.jsx)(n, { ...t, message: e });
                }),
            });
      }
    },
    385302: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        s = t(481060),
        l = t(668781),
        r = t(79390),
        o = t(222677),
        u = t(665906),
        d = t(496675),
        c = t(981631),
        E = t(689938);
      function M(e, n) {
        let t = (0, u.$R)(n),
          M = (0, a.e7)([d.Z], () => d.Z.can(c.Plq.MANAGE_MESSAGES, n) && t, [
            n,
            t,
          ]);
        return !M ||
          null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, r.eQ)(e))
          ? null
          : (0, i.jsx)(s.MenuItem, {
              id: "remove-reactions",
              label: E.Z.Messages.REMOVE_ALL_REACTIONS,
              action: function (t) {
                t.shiftKey
                  ? (0, o.wX)(n.id, e.id)
                  : l.Z.show({
                      title: E.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_TITLE,
                      body: E.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_BODY,
                      confirmText: E.Z.Messages.YES_TEXT,
                      cancelText: E.Z.Messages.NO_TEXT,
                      onConfirm: () => {
                        (0, o.wX)(n.id, e.id);
                      },
                    });
              },
              color: "danger",
            });
      }
    },
    873699: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      }),
        t(724458),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(442837),
        l = t(481060),
        r = t(668781),
        o = t(79390),
        u = t(222677),
        d = t(665906),
        c = t(496675),
        E = t(768581),
        M = t(176354),
        g = t(981631),
        m = t(689938);
      function f(e, n) {
        let { reducedMotion: t } = a.useContext(
            l.AccessibilityPreferencesContext,
          ),
          E = (0, d.$R)(n),
          M = (0, s.e7)([c.Z], () => c.Z.can(g.Plq.MANAGE_MESSAGES, n) && E, [
            n,
            E,
          ]),
          f = e.reactions.reduce((e, n) => {
            var t;
            return (null === (t = n.count_details) || void 0 === t
              ? void 0
              : t.vote) != null ||
              null !=
                e.find(
                  (e) =>
                    (null != e.id && e.id === n.emoji.id) ||
                    e.name === n.emoji.name,
                )
              ? e
              : [...e, n.emoji];
          }, []),
          _ = (t, i) => {
            t.shiftKey
              ? (0, u.$E)(n.id, e.id, i)
              : r.Z.show({
                  title: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
                  body: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
                  confirmText: m.Z.Messages.YES_TEXT,
                  cancelText: m.Z.Messages.NO_TEXT,
                  onConfirm: () => {
                    (0, u.$E)(n.id, e.id, i);
                  },
                });
          };
        return !M ||
          null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, o.eQ)(e))
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "remove-emoji-reactions",
              label: m.Z.Messages.REMOVE_EMOJI_REACTIONS,
              color: "danger",
              children: f.map((e) => {
                var n, a;
                return (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "remove-emoji-reactions-".concat(
                      null !== (n = e.name) && void 0 !== n ? n : e.id,
                    ),
                    label: null == e.id ? e.name : ":".concat(e.name, ":"),
                    action: (n) => _(n, e),
                    icon: (n) =>
                      (0, i.jsx)(I, {
                        ...n,
                        reducedMotionEnabled: t.enabled,
                        emoji: e,
                      }),
                    dontCloseOnActionIfHoldingShiftKey: !0,
                  },
                  null !== (a = e.name) && void 0 !== a ? a : e.id,
                );
              }),
            });
      }
      function I(e) {
        var n;
        let {
          emoji: t,
          reducedMotionEnabled: a,
          className: s = "",
          isFocused: l = !1,
        } = e;
        return (0, i.jsx)("img", {
          className: s,
          src:
            null != t.id
              ? E.ZP.getEmojiURL({
                  id: t.id,
                  animated: t.animated && (!a || l),
                  size: 18,
                })
              : M.ZP.getURL(null !== (n = t.name) && void 0 !== n ? n : ""),
          alt: "",
        });
      }
    },
    134323: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(280845),
        l = t(996861),
        r = t(689938);
      function o(e, n) {
        return (0, s.U)(n, e)
          ? (0, i.jsx)(a.MenuItem, {
              id: "reply",
              label: r.Z.Messages.MESSAGE_ACTION_REPLY,
              icon: a.ArrowAngleLeftUpIcon,
              action: (t) => {
                (0, l.HH)(n, e, t);
              },
            })
          : null;
      }
    },
    429260: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(726521),
        l = t(970257),
        r = t(689938);
      function o(e) {
        return (0, l.a4)(e)
          ? (0, i.jsx)(a.MenuItem, {
              id: "report",
              label: r.Z.Messages.REPORT_MESSAGE_MENU_OPTION,
              action: () => (0, s.ak)(e, "web_message_context_menu"),
              icon: a.FlagIcon,
              color: "danger",
            })
          : null;
      }
    },
    1626: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(111618),
        l = t(730954),
        r = t(981631),
        o = t(689938);
      function u(e, n) {
        return e.state !== r.yb.SEND_FAILED
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "resend",
              label: o.Z.Messages.RESEND_MESSAGE,
              action: () => (0, l.Z)(n, e, void 0, s.Z.getOptions(e.id)),
            });
      }
    },
    279329: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        s = t(481060),
        l = t(196051),
        r = t(441729),
        o = t(689938);
      function u(e, n) {
        let t = (0, a.e7)([r.Z], () => r.Z.isSpeakingMessage(n.id, e.id), [
          n,
          e,
        ]);
        return "" === e.content
          ? null
          : (0, i.jsx)(s.MenuItem, {
              id: "tts",
              label: t
                ? o.Z.Messages.STOP_SPEAKING_MESSAGE
                : o.Z.Messages.SPEAK_MESSAGE,
              icon: s.ChatSpeakIcon,
              action: () => (t ? (0, l.NB)() : (0, l.LA)(n, e)),
            });
      }
    },
    627938: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(665906),
        l = t(996861),
        r = t(689938);
      function o(e, n) {
        return (0, s.NE)(n, e)
          ? (0, i.jsx)(a.MenuItem, {
              id: "thread",
              label: r.Z.Messages.CREATE_THREAD,
              icon: a.ThreadIcon,
              action: () => {
                (0, l.gK)(n, e);
              },
            })
          : null;
      }
    },
    512303: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(373793),
        s = t(481060),
        l = t(700582),
        r = t(592180),
        o = t(565138),
        u = t(430824),
        d = t(594174),
        c = t(689938),
        E = t(461404);
      function M(e) {
        var n, t, M;
        if (!(0, r.a)(e)) return null;
        let g =
            null === (n = e.interactionMetadata) || void 0 === n
              ? void 0
              : n.authorizing_integration_owners[a.Y.USER_INSTALL],
          m =
            null === (t = e.interactionMetadata) || void 0 === t
              ? void 0
              : t.authorizing_integration_owners[a.Y.GUILD_INSTALL],
          f = d.default.getUser(g),
          I = u.Z.getGuild(m),
          _ = d.default.getUser(
            null === (M = e.interactionMetadata) || void 0 === M
              ? void 0
              : M.user.id,
          ),
          Z = null;
        return (
          null != I
            ? (Z = (0, i.jsx)(s.MenuItem, {
                className: E.interactionInfoMenuItem,
                disabled: !0,
                iconLeft: () =>
                  (0, i.jsx)(o.Z, { guild: I, size: o.Z.Sizes.MINI }),
                id: "integration-owner",
                label: I.name,
                subtext:
                  c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format(
                    { application: e.author.username },
                  ),
              }))
            : null != f &&
              (Z = (0, i.jsx)(s.MenuItem, {
                className: E.interactionInfoMenuItem,
                disabled: !0,
                iconLeft: () =>
                  (0, i.jsx)(l.Z, { user: f, size: s.AvatarSizes.SIZE_20 }),
                id: "integration-owner",
                label: f.username,
                subtext:
                  c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format(
                    { application: e.author.username },
                  ),
              })),
          (0, i.jsxs)(s.MenuItem, {
            id: "view-interaction-info",
            label: c.Z.Messages.VIEW_INTERACTION_INFO,
            children: [
              Z,
              null != _
                ? (0, i.jsx)(s.MenuItem, {
                    className: E.interactionInfoMenuItem,
                    disabled: !0,
                    iconLeft: () =>
                      (0, i.jsx)(l.Z, { user: _, size: s.AvatarSizes.SIZE_20 }),
                    id: "interaction-user",
                    label: _.username,
                    subtext:
                      c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_TRIGGERED_BY,
                  })
                : null,
            ],
          })
        );
      }
    },
    481300: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(163268),
        l = t(689938);
      function r(e, n) {
        return null != n &&
          (0, s.KP)({ type: s.lJ.GenericMedia, media: n }, (0, s.HH)(e))
          ? (0, i.jsx)(
              a.MenuItem,
              {
                id: "report-image-false-positive",
                label: l.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
                action: () => {
                  (0, a.openModalLazy)(async () => {
                    let { default: a } = await t(788679);
                    return (t) =>
                      (0, i.jsx)(a, {
                        channelId: e.channel_id,
                        messageId: e.id,
                        mediaItemUrl: n.url,
                        ...t,
                      });
                  });
                },
                icon: a.ImageWarningIcon,
              },
              "report-image-false-positive",
            )
          : null;
      }
    },
    36998: function (e, n, t) {
      t.d(n, {
        v: function () {
          return s;
        },
      });
      var i = t(944486),
        a = t(176505);
      function s() {
        var e;
        let n =
          null !== (e = i.Z.getCurrentlySelectedChannelId()) && void 0 !== e
            ? e
            : void 0;
        return null != n && (0, a.AB)(n)
          ? { channel_static_route: n }
          : { channel_id: n };
      }
    },
    26737: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(358085),
        l = t(998502),
        r = t(689938);
      function o(e, n) {
        return s.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
          ? (0, i.jsx)(a.MenuItem, {
              id: "copy",
              label: r.Z.Messages.COPY,
              hint: (0, s.isMac)() ? "⌘C" : "Ctrl+C",
              action: () => {
                l.ZP.copy(e), null == n || n.focus();
              },
            })
          : null;
      }
    },
    29264: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(668781),
        l = t(829883),
        r = t(976853),
        o = t(626135),
        u = t(358085),
        d = t(960048),
        c = t(591759),
        E = t(998502),
        M = t(36998),
        g = t(981631),
        m = t(689938);
      let f = "https://media.discordapp.net",
        I = /^.*\.discordapp\.net$/,
        _ = "cdn.discordapp.com",
        Z = "".concat(f, "/stickers"),
        S = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        h = new Set(["jpg", "jpeg", "png"]),
        A = (e) => {
          var n, t, i, a;
          return null === (a = c.Z.toURLSafe(e)) || void 0 === a
            ? void 0
            : null === (i = a.pathname) || void 0 === i
              ? void 0
              : null === (t = i.split(".")) || void 0 === t
                ? void 0
                : null === (n = t.pop()) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
        };
      function N(e, n) {
        s.Z.show({ title: m.Z.Messages.ERROR, body: e }),
          d.Z.captureException(n);
      }
      function v(e, n, t) {
        if (
          (0, r.Z)(null == n ? void 0 : n.getChannelId()) ||
          (null == t ? void 0 : t.shouldHideMediaOptions) === !0 ||
          !u.isPlatformEmbedded ||
          null == e ||
          !(function (e) {
            let n = c.Z.toURLSafe(e);
            if (null == n) return !1;
            let t = A(e);
            return (
              (I.test(n.hostname) || n.host === _) &&
              !e.startsWith(Z) &&
              !(0, l.zt)(e) &&
              null != t &&
              S.has(t)
            );
          })(e)
        )
          return null;
        let s = (function (e) {
            let n = c.Z.toURLSafe(e);
            return null == n || n.host === _
              ? e
              : n.origin === f
                ? ((n.host = _),
                  n.searchParams.delete("size"),
                  n.searchParams.delete("width"),
                  n.searchParams.delete("height"),
                  n.searchParams.delete("quality"),
                  n.searchParams.delete("format"),
                  n.toString())
                : (n.searchParams.delete("width"),
                  n.searchParams.delete("height"),
                  n.searchParams.set("quality", "lossless"),
                  n.toString());
          })(e),
          d = async () => {
            try {
              await E.ZP.saveImage(s),
                o.default.track(g.rMx.CONTEXT_MENU_IMAGE_SAVED, {
                  ...(0, M.v)(),
                });
            } catch (e) {
              o.default.track(g.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                ...(0, M.v)(),
              }),
                N(m.Z.Messages.ERROR_SAVING_IMAGE, e);
            }
          },
          v = async () => {
            try {
              await E.ZP.copyImage(s),
                o.default.track(g.rMx.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, M.v)(),
                });
            } catch (e) {
              N(m.Z.Messages.ERROR_COPYING_IMAGE, e),
                o.default.track(g.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                  ...(0, M.v)(),
                });
            }
          };
        return [
          E.ZP.canCopyImage() &&
          (function (e) {
            let n = A(e);
            return null != n && h.has(n);
          })(e)
            ? (0, i.jsx)(
                a.MenuItem,
                {
                  id: "copy-image",
                  label: m.Z.Messages.COPY_IMAGE_MENU_ITEM,
                  action: v,
                },
                "copy-image",
              )
            : null,
          (0, i.jsx)(
            a.MenuItem,
            {
              id: "save-image",
              label: m.Z.Messages.SAVE_IMAGE_MENU_ITEM,
              action: d,
            },
            "save-image",
          ),
        ];
      }
    },
    905041: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(829883),
        l = t(976853),
        r = t(378233),
        o = t(902676),
        u = t(626135),
        d = t(49012),
        c = t(358085),
        E = t(998502),
        M = t(36998),
        g = t(981631),
        m = t(689938);
      function f(e, n, t, f) {
        let I = (0, l.Z)(null == t ? void 0 : t.getChannelId());
        if (
          !c.isPlatformEmbedded ||
          null == e ||
          "" === e ||
          I ||
          (null == f ? void 0 : f.shouldHideMediaOptions) === !0 ||
          (null != e && null != (0, r.B0)(e)) ||
          (null != e && (0, s.zt)(e))
        )
          return null;
        let _ = (0, o.F)(e),
          Z = (t) => {
            u.default.track(g.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: _,
              ...(0, M.v)(),
            }),
              (0, d.q)(
                { href: e, trusted: (0, d.r)(e, n), shouldConfirm: !0 },
                t,
              );
          };
        return [
          (0, i.jsx)(
            a.MenuItem,
            {
              id: "copy-native-link",
              label: m.Z.Messages.COPY_LINK,
              action: () => {
                u.default.track(g.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: _,
                  ...(0, M.v)(),
                }),
                  E.ZP.copy(e);
              },
            },
            "copy-native-link",
          ),
          (0, i.jsx)(
            a.MenuItem,
            {
              id: "open-native-link",
              label: m.Z.Messages.OPEN_LINK,
              action: (e) => Z(e),
            },
            "open-native-link",
          ),
        ];
      }
    },
    89013: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(512722),
        l = t.n(s),
        r = t(481060),
        o = t(626135),
        u = t(358085),
        d = t(981631),
        c = t(689938);
      function E(e) {
        let n = a.useCallback(() => {
          l()(null != e, "text cannot be null"),
            o.default.track(d.rMx.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open(
              "https://www.google.com/search?q=".concat(encodeURIComponent(e)),
              "_blank",
            );
        }, [e]);
        return u.isPlatformEmbedded &&
          null != e &&
          (null == e ? void 0 : e.length) !== 0
          ? [
              (0, i.jsx)(
                r.MenuItem,
                {
                  id: "search-google",
                  label: c.Z.Messages.SEARCH_WITH_GOOGLE,
                  action: n,
                },
                "search-google",
              ),
            ]
          : null;
      }
    },
    615669: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
        z: function () {
          return i;
        },
      }),
        t(653041);
      var i,
        a,
        s = t(442837),
        l = t(314897);
      (a = i || (i = {}))[(a.END_EARLY = 0)] = "END_EARLY";
      let r = [];
      function o(e) {
        let n = (0, s.e7)([l.default], () => l.default.getId()),
          { poll: t } = e;
        if (!e.isPoll() || null == t) return r;
        let i = [];
        return (
          !t.expiry.isSameOrBefore(Date.now()) &&
            e.author.id === n &&
            i.push(0),
          i
        );
      }
    },
    988500: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(203143),
        l = t(615669),
        r = t(689938);
      let o = {
        [l.z.END_EARLY]: (e) =>
          (0, i.jsx)(a.MenuItem, {
            id: "end-poll-early",
            label: r.Z.Messages.POLL_END_EARLY,
            icon: a.ClockXIcon,
            action: () => {
              s.Z.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
          }),
      };
      function u(e) {
        let n = (0, l.Z)(e);
        return 0 === n.length
          ? null
          : (0, i.jsx)(i.Fragment, { children: n.map((n) => o[n](e)) });
      }
    },
    280845: function (e, n, t) {
      t.d(n, {
        U: function () {
          return M;
        },
        o: function () {
          return g;
        },
      }),
        t(47120);
      var i = t(275726),
        a = t(442837),
        s = t(71619),
        l = t(665906),
        r = t(496675),
        o = t(594174),
        u = t(981631),
        d = t(231338);
      function c(e, n, t) {
        let a;
        return (
          (a = e.isPrivate()
            ? !e.isSystemDM()
            : t.can(d.Pl.SEND_MESSAGES, e) &&
              t.can(d.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(n.type)
        );
      }
      function E(e, n, t, i, a) {
        let s = n.hasFlag(u.iLy.EPHEMERAL),
          l = n.state === u.yb.SENT,
          r = !e.isArchivedThread() || a;
        return t && l && !s && !i && r;
      }
      function M(e, n) {
        var t;
        let i = (0, l.tc)(e),
          [, o] = (0, s.AB)(
            null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t
              ? t
              : void 0,
          ),
          u = (0, a.e7)([r.Z], () => null != e && null != n && c(e, n, r.Z));
        return null != e && null != n && E(e, n, u, o, i);
      }
      function g(e, n) {
        var t;
        let i = (0, l.kn)(e),
          a = c(e, n, r.Z),
          u = o.default.getCurrentUser(),
          [, d] = (0, s.s5)(
            null == u ? void 0 : u.id,
            null !== (t = e.getGuildId()) && void 0 !== t ? t : void 0,
          );
        return E(e, n, a, d, i);
      }
    },
    550727: function (e, n, t) {
      t.d(n, {
        B: function () {
          return l;
        },
      });
      var i = t(913527),
        a = t.n(i),
        s = t(689938);
      let l = [
        {
          getDueAt: () => a()().add(30, "minutes").toDate(),
          getLabel: () => s.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN,
        },
        {
          getDueAt: () => a()().add(1, "hour").toDate(),
          getLabel: () => s.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR,
        },
        {
          getDueAt: () => a()().add(4, "hour").toDate(),
          getLabel: () => s.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS,
        },
        {
          getDueAt: () =>
            a()().add(1, "day").startOf("day").add(9, "hours").toDate(),
          getLabel: () => s.Z.Messages.MESSAGE_REMINDERS_TOMORROW_MORNING,
        },
        {
          getDueAt: () => a()().day(8).startOf("day").add(9, "hours").toDate(),
          getLabel: () => s.Z.Messages.MESSAGE_REMINDERS_NEXT_WEEK,
        },
      ];
    },
    898150: function (e, n, t) {
      t.r(n),
        t.d(n, {
          MessageReminderEditMenu: function () {
            return c;
          },
          useMessageReminderDurationSuggestions: function () {
            return d;
          },
        }),
        t(653041);
      var i = t(735250),
        a = t(470079),
        s = t(481060),
        l = t(239091),
        r = t(324701),
        o = t(550727),
        u = t(689938);
      function d(e) {
        let { createReminder: n } = e,
          l = a.useCallback(() => {
            (0, s.openModalLazy)(async () => {
              let { default: e } = await t.e("43866").then(t.bind(t, 423639));
              return (t) => (0, i.jsx)(e, { ...t, createReminder: n });
            });
          }, [n]);
        return a.useMemo(() => {
          let e = o.B.map((e) => {
            let { getDueAt: t, getLabel: a } = e;
            return (0, i.jsx)(
              s.MenuItem,
              {
                id: "create-reminder-".concat(a()),
                label: a(),
                action: () => n(t()),
              },
              "create-reminder-".concat(a()),
            );
          });
          return (
            e.push(
              (0, i.jsx)(
                s.MenuItem,
                {
                  id: "create-reminder-custom",
                  label: u.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
                  action: l,
                },
                "custom",
              ),
            ),
            e
          );
        }, [n, l]);
      }
      function c(e) {
        let { message: n, label: t } = e,
          a = d({
            createReminder: (e) =>
              (0, r.z)({ channelId: n.channel_id, messageId: n.id, dueAt: e }),
          });
        return (0, i.jsx)(s.Menu, {
          navId: "message-reminder-create",
          onClose: l.Zy,
          "aria-label": u.Z.Messages.MESSAGE_REMINDERS_CREATE,
          onSelect: () => null,
          children: (0, i.jsx)(s.MenuGroup, { label: t, children: a }),
        });
      }
    },
    570870: function (e, n, t) {
      var i = t(735250),
        a = t(470079),
        s = t(512722),
        l = t.n(s),
        r = t(442837),
        o = t(481060),
        u = t(10718),
        d = t(667204),
        c = t(826298),
        E = t(276022),
        M = t(978983),
        g = t(430824),
        m = t(594174),
        f = t(981631),
        I = t(689079),
        _ = t(689938),
        Z = t(62352);
      n.Z = (e) => {
        let n,
          {
            commandType: t,
            commandTargetId: s,
            channel: S,
            guildId: h,
            onHeightUpdate: A,
            context: N,
          } = e,
          v = (0, r.e7)([g.Z], () => g.Z.getGuild(null != h ? h : S.guild_id)),
          T = (0, r.e7)([m.default], () => m.default.getUser(s)),
          p = (0, E.Z)({
            user: T,
            guildId: null == v ? void 0 : v.id,
            channel: S,
            context: N,
          }),
          {
            commands: O,
            sectionDescriptors: R,
            loading: x,
          } = u.wi(S, { commandTypes: [t] }, { limit: I.lr }),
          { sections: C } = a.useMemo(() => {
            let e = {};
            return (
              R.forEach((n) => {
                e[n.id] = n;
              }),
              { sections: e }
            );
          }, [R]),
          D = a.useRef(x.current);
        a.useEffect(() => {
          x.current !== D.current &&
            ((D.current = x.current), null == A || A());
        }, [x, A]);
        let P = a.useCallback(
          (e) => {
            l()(null != S, "menu item should not show if channel is null");
            let n = C[e.applicationId],
              t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
              o.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                iconLeft: () =>
                  null != t
                    ? (0, i.jsx)(t, {
                        channel: S,
                        section: n,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, d.Z)({
                    command: e,
                    optionValues: {},
                    context: { channel: S, guild: v },
                    commandTargetId: s,
                  });
                },
              },
              e.id,
            );
          },
          [S, v, s, C],
        );
        if (
          (x.current
            ? (n = (0, i.jsx)(
                o.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(M.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((n =
                0 === O.length
                  ? (0, i.jsx)(
                      o.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: _.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : O.map(P)),
              null != p &&
                (n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    n,
                    (0, i.jsx)(o.MenuSeparator, {}, "separator"),
                    p,
                  ],
                }))),
          !f.TPd.TEXTUAL.has(S.type))
        ) {
          if (null == p) return null;
          n = p;
        }
        return (0, i.jsx)(o.MenuItem, {
          id: "apps",
          label: _.Z.Messages.APPS,
          listClassName: Z.list,
          children: n,
        });
      };
    },
    624453: function (e, n, t) {
      t(733860);
      var i,
        a,
        s,
        l,
        r = t(392711),
        o = t.n(r),
        u = t(442837),
        d = t(570140),
        c = t(163268),
        E = t(786761),
        M = t(706454),
        g = t(592125),
        m = t(271383),
        f = t(430824),
        I = t(375954),
        _ = t(699516),
        Z = t(594174);
      let S = {};
      function h(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          a = g.Z.getChannel(e),
          s = null != a ? a.getGuildId() : null;
        return {
          id: e,
          messages: n.map((e) => (0, E.e5)(e)),
          guildId: s,
          loaded: t,
          loading: i,
        };
      }
      function A(e) {
        let { channel: n } = e;
        delete S[n.id];
      }
      function N() {
        o().forEach(S, (e) => {
          e.messages = e.messages.map((e) =>
            e.set("blocked", _.Z.isBlockedForMessage(e)),
          );
        });
      }
      class v extends (i = u.ZP.Store) {
        initialize() {
          this.waitFor(g.Z, f.Z, m.ZP, I.Z, Z.default, M.default);
        }
        getPinnedMessages(e) {
          var n;
          return null !== (n = S[e]) && void 0 !== n ? n : void 0;
        }
        loaded(e) {
          return null != S[e] && S[e].loaded;
        }
      }
      (l = "ChannelPinsStore"),
        (s = "displayName") in (a = v)
          ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[s] = l),
        (n.Z = new v(d.Z, {
          CONNECTION_OPEN: function () {
            S = {};
          },
          GUILD_DELETE: function (e) {
            let { guild: n } = e;
            S = o()(S)
              .filter((e) => e.guildId !== n.id)
              .keyBy("id")
              .value();
          },
          MESSAGE_UPDATE: function (e) {
            let n = e.message.id,
              t = e.message.channel_id;
            if (null == t) return !1;
            let i = S[t];
            if (null == i && !e.message.pinned) return !1;
            if (null == e.message.author) {
              if (null != i) {
                let a = o().findIndex(i.messages, (e) => e.id === n);
                if (a >= 0) {
                  let n = i.messages[a],
                    s = (0, E.wi)(n, e.message);
                  if (s !== n) {
                    let e = i.messages.slice();
                    (e[a] = s), (S[t].messages = e);
                  }
                }
              }
              return;
            }
            if (e.message.pinned) {
              if (null == i) {
                (i = h(t, [e.message], !1)), (S[t] = i);
                return;
              }
              i.messages = i.messages.slice();
              let a = o().findIndex(i.messages, (e) => e.id === n);
              -1 === a
                ? i.messages.unshift((0, E.e5)(e.message))
                : (i.messages[a] = (0, E.wi)(i.messages[a], e.message)),
                (S[t] = i);
            } else {
              if (null == i) return;
              let e = o().findIndex(i.messages, (e) => e.id === n);
              if (-1 === e) return;
              (i.messages = i.messages.slice()),
                i.messages.splice(e, 1),
                (S[t] = i);
            }
          },
          MESSAGE_DELETE: function (e) {
            let { id: n, channelId: t } = e,
              i = S[t];
            if (
              null == i ||
              0 === o().remove(i.messages, (e) => e.id === n).length
            )
              return !1;
            (i.messages = i.messages.slice()), (S[t] = i);
          },
          MESSAGE_DELETE_BULK: function (e) {
            let { ids: n, channelId: t } = e,
              i = S[t];
            if (null != i)
              i.messages = i.messages.filter((e) => -1 === n.indexOf(e.id));
          },
          LOAD_PINNED_MESSAGES: function (e) {
            let { channelId: n } = e;
            S[n] = h(n, [], !1, !0);
          },
          LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { channelId: n, messages: t } = e;
            S[n] = h(n, t, !0);
          },
          LOAD_PINNED_MESSAGES_FAILURE: function (e) {
            let { channelId: n } = e;
            delete S[n];
          },
          CHANNEL_DELETE: A,
          THREAD_DELETE: A,
          RELATIONSHIP_ADD: N,
          RELATIONSHIP_REMOVE: N,
          MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: n, channelId: t } = e,
              i = S[t];
            if (null == i) return;
            let a = o().findIndex(i.messages, (e) => e.id === n);
            if (-1 !== a)
              (i.messages = i.messages.slice()),
                (i.messages[a] = (0, c.Cm)(i.messages[a])),
                (S[t] = i);
          },
        }));
    },
    970257: function (e, n, t) {
      t.d(n, {
        a4: function () {
          return o;
        },
        vc: function () {
          return u;
        },
      });
      var i = t(592125),
        a = t(650774),
        s = t(496675),
        l = t(594174),
        r = t(981631);
      function o(e) {
        return (
          null != e &&
          (function (e) {
            if (null == e) return !1;
            let n = e.id,
              t = l.default.getCurrentUser();
            return null != t && t.id !== n && !0 !== e.system && !0;
          })(e.author)
        );
      }
      function u(e) {
        return (
          null != e &&
          o(e) &&
          (function (e) {
            let n = i.Z.getChannel(e);
            if (null == n) return !1;
            if (n.type === r.d4z.DM || n.type === r.d4z.GROUP_DM) return !0;
            if (
              s.Z.canWithPartialContext(r.Plq.MANAGE_MESSAGES, { channelId: e })
            ) {
              let e = a.Z.getMemberCount(n.getGuildId());
              return null != e && e >= 50;
            }
            return !1;
          })(e.getChannelId())
        );
      }
    },
  },
]);
//# sourceMappingURL=e4561253d0cc346131f8.js.map
