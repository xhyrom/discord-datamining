"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37220"],
  {
    332148: function (e, n, t) {
      var i = t(544891),
        l = t(570140),
        r = t(346479),
        a = t(624453),
        o = t(668781),
        s = t(981631),
        u = t(388032);
      let d = {
        async pinMessage(e, n) {
          let { id: t, name: l } = e;
          await r.Z.unarchiveThreadIfNecessary(e.id),
            i.tn
              .put({
                url: s.ANM.PIN(t, n),
                oldFormErrors: !0,
                rejectWithError: !0,
              })
              .catch(() => {
                let n;
                (n = e.isPrivate()
                  ? u.intl.formatToPlainString(u.t.Q89oQU, { maxPins: s.tG9 })
                  : u.intl.formatToPlainString(u.t.NnO1S0, {
                      maxPins: s.tG9,
                      channelName: l,
                    })),
                  o.Z.show({
                    title: u.intl.string(u.t.HI88Q0),
                    body: n,
                    confirmText: u.intl.string(u.t.BddRzc),
                  });
              });
        },
        async unpinMessage(e, n) {
          await r.Z.unarchiveThreadIfNecessary(e.id),
            i.tn
              .del({
                url: s.ANM.PIN(e.id, n),
                oldFormErrors: !0,
                rejectWithError: !0,
              })
              .catch(() =>
                o.Z.show({
                  title: u.intl.string(u.t.xFjBys),
                  body: u.intl.string(u.t["0R/Toa"]),
                  confirmText: u.intl.string(u.t["7NqTJi"]),
                  cancelText: u.intl.string(u.t["ETE/oK"]),
                  onConfirm: d.unpinMessage.bind(d, e, n),
                }),
              );
        },
        ackPins(e) {
          l.Z.dispatch({ type: "CHANNEL_PINS_ACK", channelId: e });
        },
        fetchPins(e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = a.Z.getPinnedMessages(e);
          if (!!n || null == t || (!t.loaded && !t.loading))
            l.Z.dispatch({ type: "LOAD_PINNED_MESSAGES", channelId: e }),
              i.tn
                .get({
                  url: s.ANM.PINS(e),
                  retries: 2,
                  oldFormErrors: !0,
                  rejectWithError: !0,
                })
                .then(
                  (n) => {
                    l.Z.dispatch({
                      type: "LOAD_PINNED_MESSAGES_SUCCESS",
                      messages: n.body,
                      channelId: e,
                    });
                  },
                  () => {
                    l.Z.dispatch({
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
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(481060),
        s = t(332148),
        u = t(904245),
        d = t(933557),
        c = t(576855),
        g = t(372900),
        m = t(726521),
        f = t(294218),
        h = t(699516),
        E = t(594174),
        I = t(630388),
        v = t(970257),
        M = t(981631),
        p = t(388032),
        x = t(463096);
      function Z(e, n, t) {
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
      class S extends l.PureComponent {
        render() {
          let e, n;
          let { report: t } = this.state,
            {
              channel: l,
              message: r,
              showContextMenuHint: a,
              ...s
            } = this.props,
            u =
              l.type === M.d4z.GUILD_ANNOUNCEMENT &&
              (0, I.yE)(r.flags, M.iLy.CROSSPOSTED);
          return (
            a &&
              (e = (0, i.jsx)(c.Z, {
                className: x.spacingTop,
                children: p.intl.format(p.t.IxY7Ex, {}),
              })),
            (0, v.vc)(r) &&
              (n = (0, i.jsx)(o.FormSwitch, {
                value: t,
                onChange: this.handleToggleReport,
                hideBorder: !0,
                className: x.spacingTop,
                children: p.intl.string(p.t.x0jzo6),
              })),
            (0, i.jsx)(g.Z.Provider, {
              value: l.guild_id,
              children: (0, i.jsxs)(o.ConfirmModal, {
                header: u
                  ? p.intl.string(p.t.aIz1oa)
                  : p.intl.string(p.t.MWMcg4),
                confirmText: p.intl.string(p.t.oyYWHB),
                cancelText: p.intl.string(p.t["ETE/oK"]),
                onConfirm: this.handleDelete,
                ...s,
                children: [
                  (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: x.spacing,
                    children: u
                      ? p.intl.string(p.t["2kHABQ"])
                      : p.intl.string(p.t.AMvpS0),
                  }),
                  (0, i.jsx)("div", {
                    className: x.message,
                    children: (0, i.jsx)(f.Z, {
                      channel: l,
                      message: r,
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
            Z(this, "state", { report: !1 }),
            Z(this, "handleDelete", () => {
              let { report: e } = this.state,
                { channel: n, message: t } = this.props;
              e
                ? (0, m.ak)(t, "message_delete_alert", () =>
                    u.Z.deleteMessage(n.id, t.id),
                  )
                : u.Z.deleteMessage(n.id, t.id);
            }),
            Z(this, "handleToggleReport", (e) => {
              this.setState({ report: e });
            });
        }
      }
      n.Z = {
        confirmPin: function (e, n) {
          (0, o.openModal)((t) => {
            let l;
            let r = (0, d.F6)(e, E.default, h.Z);
            return (
              (l = e.isPrivate()
                ? p.intl.string(p.t.hMRngI)
                : p.intl.formatToPlainString(p.t["3IRluL"], {
                    channelName: r,
                  })),
              (0, i.jsx)(g.Z.Provider, {
                value: e.guild_id,
                children: (0, i.jsxs)(o.ConfirmModal, {
                  header: p.intl.string(p.t.bKMaZW),
                  confirmText: p.intl.string(p.t.rOQ5BQ),
                  cancelText: p.intl.string(p.t["ETE/oK"]),
                  confirmButtonColor: o.Button.Colors.BRAND,
                  onConfirm: () => s.Z.pinMessage(e, n.id),
                  ...t,
                  children: [
                    (0, i.jsx)(o.Text, {
                      variant: "text-md/normal",
                      className: x.spacing,
                      children: l,
                    }),
                    (0, i.jsx)("div", {
                      className: x.message,
                      children: (0, i.jsx)(f.Z, {
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
          (0, o.openModal)((t) =>
            (0, i.jsx)(g.Z.Provider, {
              value: e.guild_id,
              children: (0, i.jsxs)(o.ConfirmModal, {
                header: p.intl.string(p.t.CFF2vL),
                confirmText: p.intl.string(p.t.lAU5jI),
                cancelText: p.intl.string(p.t["ETE/oK"]),
                onConfirm: () => s.Z.unpinMessage(e, n.id),
                ...t,
                children: [
                  (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: x.spacing,
                    children: p.intl.string(p.t.NjEPp6),
                  }),
                  (0, i.jsx)("div", {
                    className: a()(x.message, x.spacing),
                    children: (0, i.jsx)(f.Z, {
                      channel: e,
                      message: n,
                      disableInteraction: !0,
                    }),
                  }),
                  (0, i.jsx)(c.Z, { children: p.intl.format(p.t.oCVB3d, {}) }),
                ],
              }),
            }),
          );
        },
        confirmDelete: function (e, n) {
          let t =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          (0, o.openModal)((l) =>
            (0, i.jsx)(S, {
              channel: e,
              message: n,
              showContextMenuHint: t,
              ...l,
            }),
          );
        },
        confirmEdit: function (e, n, t) {
          (0, o.openModal)((l) =>
            (0, i.jsx)(o.ConfirmModal, {
              header: p.intl.string(p.t.aIz1oa),
              confirmText: p.intl.string(p.t["cY+Ooa"]),
              cancelText: p.intl.string(p.t["ETE/oK"]),
              confirmButtonColor: o.Button.Colors.BRAND,
              onConfirm: () => u.Z.editMessage(e, n, { content: t }),
              ...l,
              children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                className: x.spacing,
                children: p.intl.string(p.t.grBcMz),
              }),
            }),
          );
        },
      };
    },
    112554: function (e, n, t) {
      t.d(n, {
        K: function () {
          return a;
        },
        b: function () {
          return o;
        },
      });
      var i = t(399606),
        l = t(375954),
        r = t(247206);
      let a = (e, n, t) => {
          var a, o;
          let s = (0, i.e7)([l.Z], () => l.Z.getMessage(e, n));
          if (null == s) return [];
          let u =
            void 0 !== t
              ? (e) => e.url === t
              : (e) =>
                  (0, r.KP)({ type: r.lJ.Attachment, media: e }, (0, r.HH)(s));
          return null !==
            (o =
              null == s
                ? void 0
                : null === (a = s.attachments) || void 0 === a
                  ? void 0
                  : a.filter(u)) && void 0 !== o
            ? o
            : [];
        },
        o = (e, n, t) => {
          var a, o;
          let s = (0, i.e7)([l.Z], () => l.Z.getMessage(e, n));
          if (null == s) return [];
          let u =
            void 0 !== t
              ? (e) => e.id === t
              : (e) => (0, r.KP)({ type: r.lJ.Embed, media: e }, (0, r.HH)(s));
          return null !==
            (o =
              null == s
                ? void 0
                : null === (a = s.embeds) || void 0 === a
                  ? void 0
                  : a.filter(u)) && void 0 !== o
            ? o
            : [];
        };
    },
    788679: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return g;
          },
        });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(522664),
        a = t(651530),
        o = t(247206),
        s = t(668058),
        u = t(112554),
        d = t(160877),
        c = t(388032);
      function g(e) {
        let {
            channelId: n,
            messageId: t,
            mediaItemUrl: g,
            embedId: m,
            transitionState: f,
            onClose: h,
          } = e,
          E = (0, a.yh)(),
          I = (0, u.K)(n, t, g),
          v = (0, u.b)(n, t, m),
          { reportFalsePositive: M, isReportFalsePositiveLoading: p } = (0,
          s.$)({
            onSuccess: () => (0, d.s)(h),
            onError: () => {
              (0, l.showToast)(
                (0, l.createToast)(
                  c.intl.string(c.t.R0RpRU),
                  l.ToastType.FAILURE,
                ),
              );
            },
            report: () => {
              (0, r.Uj)(
                n,
                t,
                I.map((e) => e.id),
                v.map((e) => e.id),
              );
            },
          });
        return (
          !(E && (I.length > 0 || v.length > 0)) && h(),
          (0, i.jsx)(d.$, {
            messageId: t,
            channelId: n,
            isReportFalsePositiveLoading: p,
            analyticsContext: o.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: M,
            attachmentPreview: 1 === I.length && 0 === v.length ? I[0] : void 0,
            embedPreview: 1 === v.length && 0 === I.length ? v[0] : void 0,
            transitionState: f,
            onClose: h,
          })
        );
      }
    },
    378409: function (e, n, t) {
      t.d(n, {
        Jj: function () {
          return m;
        },
        Lz: function () {
          return h;
        },
        gS: function () {
          return f;
        },
        rV: function () {
          return g;
        },
        s$: function () {
          return E;
        },
      }),
        t(47120);
      var i = t(829883),
        l = t(378233),
        r = t(591759);
      let a = /^.*\.discordapp\.net$/,
        o = "cdn.discordapp.com",
        s = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        u = new Set(["jpg", "jpeg", "png"]),
        d = (e) => {
          var n, t, i, l;
          return null === (l = r.Z.toURLSafe(e)) || void 0 === l
            ? void 0
            : null === (i = l.pathname) || void 0 === i
              ? void 0
              : null === (t = i.split(".")) || void 0 === t
                ? void 0
                : null === (n = t.pop()) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
        };
      function c(e) {
        return e.host === o || a.test(e.hostname);
      }
      function g(e) {
        let n = r.Z.toURLSafe(e);
        return null != n && c(n);
      }
      function m(e) {
        return !((0, l.B0)(e) || (0, i.zt)(e)) && !0;
      }
      function f(e) {
        let n = r.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = d(e);
        return null != t && s.has(t) && c(n) && m(e);
      }
      function h(e) {
        let n = r.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = d(e);
        return null != t && u.has(t) && c(n) && m(e);
      }
      function E(e) {
        let n = r.Z.toURLSafe(e);
        return null == n || n.host === o
          ? e
          : "https://media.discordapp.net" === n.origin
            ? ((n.host = o),
              n.searchParams.delete("size"),
              n.searchParams.delete("width"),
              n.searchParams.delete("height"),
              n.searchParams.delete("quality"),
              n.searchParams.delete("format"),
              n.toString())
            : (n.searchParams.delete("width"),
              n.searchParams.delete("height"),
              n.searchParams.set("quality", "lossless"),
              n.searchParams.delete("format"),
              n.toString());
      }
    },
    111618: function (e, n, t) {
      var i,
        l,
        r,
        a,
        o = t(442837),
        s = t(570140);
      let u = {};
      class d extends (a = o.ZP.Store) {
        getOptions(e) {
          return u[e];
        }
      }
      (r = "SendMessageOptionsStore"),
        (l = "displayName") in (i = d)
          ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = r),
        (n.Z = new d(s.Z, {
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
          return a;
        },
      });
      var i = t(665906),
        l = t(901461),
        r = t(981631);
      function a(e, n, t) {
        return (
          !n.isSystemDM() &&
          !(0, l.Z)(e) &&
          (t || n.isPrivate()) &&
          (0, i.RG)(n) &&
          n.type !== r.d4z.GUILD_VOICE &&
          n.type !== r.d4z.GUILD_STAGE_VOICE
        );
      }
    },
    730954: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(789020);
      var i = t(904245),
        l = t(667204);
      function r(e, n, t) {
        let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if ((i.Z.deleteMessage(e.id, n.id, !0), n.isCommandType())) {
          null != n.interactionData &&
            null != r.applicationId &&
            (0, l.d)(n, e, r);
          return;
        }
        let { content: a, tts: o, messageReference: s, flags: u, nonce: d } = n;
        i.Z.sendMessage(
          e.id,
          { content: a, tts: o, invalidEmojis: [], validNonShortcutEmojis: [] },
          void 0,
          {
            nonce: d,
            flags: u,
            messageReference: null != s ? s : void 0,
            ...r,
          },
        );
      }
    },
    996861: function (e, n, t) {
      t.d(n, {
        $Z: function () {
          return b;
        },
        B8: function () {
          return N;
        },
        F4: function () {
          return j;
        },
        HH: function () {
          return y;
        },
        Hd: function () {
          return _;
        },
        Xl: function () {
          return P;
        },
        dF: function () {
          return R;
        },
        eM: function () {
          return O;
        },
        fB: function () {
          return T;
        },
        gK: function () {
          return D;
        },
        mG: function () {
          return C;
        },
        qe: function () {
          return L;
        },
        rY: function () {
          return A;
        },
        ts: function () {
          return G;
        },
        zW: function () {
          return S;
        },
      }),
        t(200651),
        t(192379),
        t(481060);
      var i = t(332148),
        l = t(904245),
        r = t(257559),
        a = t(143740),
        o = t(912332),
        s = t(434404);
      t(726521);
      var u = t(623292),
        d = t(324701),
        c = t(488131),
        g = t(314897),
        m = t(592125),
        f = t(626135),
        h = t(934415),
        E = t(572004),
        I = t(585483),
        v = t(709054),
        M = t(111618),
        p = t(50284),
        x = t(730954),
        Z = t(981631);
      function S(e) {
        let n = e.getGuildId();
        null != n && s.Z.open(n, Z.pNK.OVERVIEW);
      }
      function j(e, n, t) {
        (0, E.JG)(
          t.shiftKey ? "".concat(n.channel_id, "-").concat(n.id) : n.id,
        );
      }
      function T(e, n) {
        f.default.track(Z.rMx.MESSAGE_LINK_COPIED, {
          message_id: n.id,
          channel: n.channel_id,
        }),
          (0, E.JG)((0, h.wR)(e.guild_id, e.id, n.id));
      }
      function b(e, n, t) {
        n.state === Z.yb.SEND_FAILED || t.shiftKey
          ? l.Z.deleteMessage(e.id, n.id, n.state === Z.yb.SEND_FAILED)
          : r.Z.confirmDelete(e, n);
      }
      function _(e, n) {
        l.Z.startEditMessage(e.id, n.id, n.content);
      }
      function N(e, n) {
        (0, p.Z)(e.id, n.id);
      }
      function A(e, n, t) {
        if (!1 === n.pinned) {
          t.shiftKey ? i.Z.pinMessage(e, n.id) : r.Z.confirmPin(e, n);
          return;
        }
        t.shiftKey ? i.Z.unpinMessage(e, n.id) : r.Z.confirmUnpin(e, n);
      }
      function P(e, n) {
        (0, a.Z)(e.id, n.id);
      }
      function C(e, n) {
        (0, x.Z)(e, n, void 0, M.Z.getOptions(n.id));
      }
      function y(e, n, t) {
        let i = e.isPrivate(),
          l = n.author.id === g.default.getId();
        (0, u.fE)({
          channel: e,
          message: n,
          shouldMention: !t.shiftKey && !l,
          showMentionToggle: !i && !l,
        }),
          I.S.dispatchToLastSubscribed(Z.CkL.TEXTAREA_FOCUS);
      }
      function D(e, n) {
        (0, c.R6)(e, n, "Message");
      }
      function L(e, n) {
        let t = m.Z.getChannel(v.default.castMessageIdAsChannelId(n.id));
        null != t && (0, c.ok)(t);
      }
      function R(e, n) {
        (0, d.z)({ channelId: e.id, messageId: n.id });
      }
      function O(e, n) {
        (0, d.x)({ channelId: e.id, messageId: n.id });
      }
      function G(e, n) {
        (0, o.l8)({ message: n, source: "message-actions" });
      }
    },
    225138: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return F;
          },
          useMessageMenu: function () {
            return z;
          },
        });
      var i = t(200651);
      t(192379);
      var l = t(513431),
        r = t(481060),
        a = t(239091),
        o = t(911969),
        s = t(299206),
        u = t(26737),
        d = t(29264),
        c = t(905041),
        g = t(89013),
        m = t(988500),
        f = t(570870),
        h = t(786095),
        E = t(268623),
        I = t(986240),
        v = t(667922),
        M = t(941389),
        p = t(449751),
        x = t(749339),
        Z = t(601184),
        S = t(6148),
        j = t(519110),
        T = t(759875),
        b = t(168405),
        _ = t(536639),
        N = t(720904),
        A = t(88791),
        P = t(385302),
        C = t(873699),
        y = t(134323),
        D = t(429260),
        L = t(1626),
        R = t(279329),
        O = t(627938),
        G = t(512303),
        w = t(481300),
        U = t(975368),
        k = t(388032);
      function F(e) {
        var n, t;
        let i,
          r,
          o,
          s,
          {
            channel: u,
            message: d,
            target: c,
            mediaItem: g,
            shouldHideMediaOptions: m,
            onSelect: f,
            onHeightUpdate: h,
          } = e,
          E = c,
          I = c.getAttribute("data-type"),
          v = c.getAttribute("data-id"),
          M = c.getAttribute("data-name");
        if (null != g) r = i = o = g.url;
        else
          for (; (0, l.k)(E); )
            (0, l.k)(E, HTMLImageElement) && null != E.src && (r = E.src),
              (0, l.k)(E, HTMLAnchorElement) &&
                null != E.href &&
                ((i = E.href),
                (s = E.textContent),
                null == r &&
                  "img" === E.getAttribute("data-role") &&
                  ((r = i),
                  E.hasAttribute("data-safe-src") &&
                    "" !== E.getAttribute("data-safe-src") &&
                    (o = E.getAttribute("data-safe-src")))),
              (E = E.parentNode);
        return z({
          message: d,
          channel: u,
          mediaItem: g,
          textSelection:
            null !==
              (t =
                null === (n = document.getSelection()) || void 0 === n
                  ? void 0
                  : n.toString()) && void 0 !== t
              ? t
              : "",
          favoriteableType: I,
          favoriteableId: v,
          favoriteableName: M,
          itemHref: i,
          itemSrc: r,
          itemSafeSrc: o,
          itemTextContent: s,
          canReport: !0,
          onHeightUpdate: h,
          onSelect: f,
          onClose: a.Zy,
          navId: "message",
          ariaLabel: k.intl.string(k.t.ChPNkJ),
          shouldHideMediaOptions: m,
        });
      }
      function z(e) {
        let {
            message: n,
            channel: t,
            mediaItem: l,
            textSelection: a,
            favoriteableType: F,
            favoriteableId: z,
            favoriteableName: B,
            itemHref: K,
            itemSrc: H,
            itemSafeSrc: V,
            itemTextContent: X,
            canReport: q,
            onHeightUpdate: J,
            onSelect: W,
            onClose: Y,
            navId: $,
            ariaLabel: Q,
            shouldHideMediaOptions: ee = !1,
          } = e,
          en = (0, u.Z)(a),
          et = (0, g.Z)(a),
          ei = (0, N.Z)(n, t),
          el = (0, v.Z)(n, t),
          er = (0, S.Z)(n, t),
          ea = (0, _.Z)(n, t),
          eo = (0, j.Z)({ type: F, id: z, name: B }),
          es = (0, L.Z)(n, t),
          eu = (0, b.Z)(n, t),
          ed = (0, A.Z)(n),
          ec = (0, M.Z)(n, t),
          eg = (0, p.Z)(n, t),
          em = (0, P.Z)(n, t),
          ef = (0, C.Z)(n, t),
          eh = (0, Z.Z)(n, t),
          eE = (0, D.Z)(n),
          eI = (0, D.e)(n),
          ev = (0, R.Z)(n, t),
          eM = (0, c.Z)(null != K ? K : H, X, n, {
            shouldHideMediaOptions: ee,
          }),
          ep = (0, d.Z)(V, n, { shouldHideMediaOptions: ee }),
          ex = (0, w.Z)(n, l),
          eZ = (0, s.Z)({
            id: n.id,
            label: k.intl.string(k.t.zBoHlZ),
            shiftId: "".concat(n.channel_id, "-").concat(n.id),
          }),
          eS = (0, y.Z)(n, t),
          ej = (0, T.Z)(n, t),
          eT = (0, O.Z)(n, t),
          eb = (0, h.Z)(a, t.getGuildId()),
          e_ = (0, E.Z)(n),
          eN = (0, x.Z)(n),
          eA = (0, U.Z)(n),
          eP = (0, I.Z)(n, t),
          eC = (0, f.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: J,
          }),
          ey = (0, G.Z)(n),
          eD = (0, m.Z)(n);
        return (0, i.jsxs)(r.Menu, {
          navId: $,
          onClose: Y,
          "aria-label": Q,
          onSelect: W,
          children: [
            (0, i.jsx)(r.MenuGroup, { children: en }),
            (0, i.jsx)(r.MenuGroup, { children: et }),
            (0, i.jsxs)(r.MenuGroup, {
              children: ["" === a ? ei : null, el, ed, eP],
            }),
            (0, i.jsxs)(r.MenuGroup, { children: [er, eS, ej, eT] }),
            (0, i.jsxs)(r.MenuGroup, {
              children: [eN, ea, e_, eC, es, eu, ec, eg, ev, eD, ey],
            }),
            (0, i.jsxs)(r.MenuGroup, {
              children: [ef, em, eh, q && eE, q && eI],
            }),
            (0, i.jsxs)(r.MenuGroup, { children: [eo, eb, ep, ex, eA] }),
            (0, i.jsx)(r.MenuGroup, { children: eM }),
            (0, i.jsx)(r.MenuGroup, { children: eZ }),
          ],
        });
      }
    },
    786095: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(47120),
        t(724458);
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        a = t(239091),
        o = t(236413),
        s = t(727072),
        u = t(85960),
        d = t(676317),
        c = t(65912),
        g = t(556012),
        m = t(572456),
        f = t(434404),
        h = t(981631),
        E = t(273504),
        I = t(388032),
        v = t(986371);
      let M = E.fX.KEYWORD;
      function p(e, n) {
        let { perGuildMaxCount: t } = u.I6[M],
          { isLoading: p, saveRule: x, errorMessage: Z } = (0, c.w)(),
          { createNewEditingRule: S } = (0, c.V)(),
          [j, T] = l.useState(!1),
          [b, _] = (0, s.I2)(n),
          { rulesByTriggerType: N, updateRule: A } = (0, s.pH)(n),
          P = l.useMemo(() => {
            var e;
            return null !== (e = N[M]) && void 0 !== e ? e : [];
          }, [N]),
          C = 0 === P.length,
          y = t > P.length && !C;
        if (
          !l.useMemo(() => (0, d.ze)(n), [n]) ||
          null == e ||
          0 === e.length ||
          null == n
        )
          return null;
        let D = e.split(" "),
          L = D.length;
        try {
          (0, o.km)(D, E.RH);
        } catch (e) {
          return null;
        }
        let R = () => {
            if (null != n)
              (0, a.Zy)(),
                f.Z.open(n, h.pNK.GUILD_AUTOMOD),
                setTimeout(() => {
                  S(n, M, {
                    triggerMetadata: {
                      keywordFilter: [e],
                      regexPatterns: [],
                      allowList: [],
                    },
                  });
                }, 400);
          },
          O = async (n) => {
            var t, i;
            if (((0, a.Zy)(), !(await (0, m.XN)(n.name, e)))) return;
            let l = {
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
            await x(l, P),
              A(l),
              null != Z
                ? (0, r.showToast)(
                    (0, r.createToast)(
                      I.intl.string(I.t.wH6L0t),
                      r.ToastType.FAILURE,
                    ),
                  )
                : (0, r.showToast)(
                    (0, r.createToast)(
                      I.intl.string(I.t["0rdYm5"]),
                      r.ToastType.SUCCESS,
                    ),
                  );
          },
          G = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(r.MenuItem, {
              id: "automod-rules-loading",
              label: I.intl.string(I.t.ZTNur6),
            }),
          });
        return (
          !b &&
            (G = (0, i.jsxs)(i.Fragment, {
              children: [
                C &&
                  (0, i.jsx)(r.MenuItem, {
                    id: "add-first-rule",
                    label: I.intl.string(I.t.f72Zqa),
                    action: R,
                    disabled: p,
                  }),
                P.map((e) => {
                  let n = (0, u.V9)(M).reduce((n, t) => {
                    let i = e.actions.find((e) => {
                      let { type: n } = e;
                      return t === n;
                    });
                    if (null == i) return n;
                    let l = (0, g.c)(t, i);
                    return (n += ", ".concat(
                      null == l ? void 0 : l.headerText,
                    ));
                  }, "");
                  return (0, i.jsx)(
                    r.MenuRadioItem,
                    {
                      id: e.id,
                      label: e.name,
                      subtext: (0, i.jsx)(r.Text, {
                        color: "text-muted",
                        className: v.actionTextHeader,
                        variant: "text-xs/normal",
                        children: n.slice(2),
                      }),
                      group: "automod-rule-selection",
                      checked: !1,
                      disabled: p,
                      action: () => O(e),
                    },
                    e.id,
                  );
                }),
                y &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(r.MenuSeparator, {}),
                      (0, i.jsx)(r.MenuItem, {
                        id: "add-another-rule",
                        label: I.intl.string(I.t["0K5jDA"]),
                        action: R,
                        disabled: p,
                      }),
                    ],
                  }),
              ],
            })),
          (0, i.jsx)(r.MenuItem, {
            id: "guild-automod-add-selection",
            label: I.intl.formatToPlainString(I.t.Kkjv1t, { keywordCount: L }),
            onFocus: () => {
              if (!j) T(!0), _();
            },
            children: G,
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
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        a = t(481060),
        o = t(436774),
        s = t(2818),
        u = t(324701),
        d = t(575016),
        c = t(768943),
        g = t(175006),
        m = t(742989),
        f = t(898150),
        h = t(70956),
        E = t(388032);
      function I(e) {
        let { enabled: n } = s.Z.useExperiment({
            location: "LongPressMessageActionSheet",
          }),
          { showReminders: t } = m.Z.useExperiment({
            location: "LongPressMessageActionSheet",
          }),
          I = (0, r.e7)([c.Z], () => c.Z.getSavedMessage(e.channel_id, e.id)),
          v = (function (e) {
            let { message: n, savedMessage: t } = e,
              [r, o] = l.useState(new Date());
            l.useEffect(() => {
              let e = setInterval(() => o(new Date()), h.Z.Millis.MINUTE);
              return () => {
                clearInterval(e);
              };
            }, []);
            let s = l.useCallback(
                (e) =>
                  (0, u.z)({
                    channelId: n.channel_id,
                    messageId: n.id,
                    dueAt: e,
                    displayToast: !0,
                  }),
                [n.channel_id, n.id],
              ),
              c = (0, f.useMessageReminderDurationSuggestions)({
                createReminder: s,
              }),
              { dueInText: g } = (0, d.AT)({
                dueAt: null == t ? void 0 : t.saveData.dueAt,
                now: r,
                type: d.hQ.LONG,
              });
            return (null == t ? void 0 : t.saveData.dueAt) == null
              ? (0, i.jsx)(a.MenuGroup, {
                  label: E.intl.string(E.t.roMu1N),
                  children: c,
                })
              : (0, i.jsxs)(a.MenuGroup, {
                  label: g,
                  children: [
                    (0, i.jsx)(a.MenuItem, {
                      id: "mark-complete",
                      label: E.intl.string(E.t.yjGtdH),
                      icon: a.CheckmarkSmallIcon,
                      action: () =>
                        (0, u.z)({
                          channelId: n.channel_id,
                          messageId: n.id,
                          dueAt: void 0,
                        }),
                    }),
                    (0, i.jsx)(a.MenuItem, {
                      id: "edit-reminder",
                      label: E.intl.string(E.t.vrbqs7),
                      children: c,
                    }),
                  ],
                });
          })({ message: e, savedMessage: I });
        return n || t
          ? null != I || (0, g.Z)()
            ? (0, i.jsxs)(a.MenuItem, {
                id: "save-for-later",
                label: E.intl.string(E.t.tpxJtr),
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
                    ? (0, i.jsx)(a.MenuItem, {
                        id: "remove-from-for-later",
                        label: E.intl.string(E.t.SvXS1d),
                        icon: a.BookmarkIcon,
                        action: () =>
                          (0, u.x)({
                            channelId: e.channel_id,
                            messageId: e.id,
                            dueAt: I.saveData.dueAt,
                            displayToast: !0,
                          }),
                      })
                    : (0, i.jsx)(a.MenuItem, {
                        id: "create-bookmark",
                        label: E.intl.string(E.t["9p3D9v"]),
                        icon: a.BookmarkOutlineIcon,
                        action: () =>
                          (0, u.z)({
                            channelId: e.channel_id,
                            messageId: e.id,
                            displayToast: !0,
                          }),
                      }),
                  (0, i.jsx)(a.MenuSeparator, {}),
                  v,
                ],
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "save-for-later-upsell",
                label: E.intl.string(E.t.tpxJtr),
                icon: a.NitroWheelIcon,
                iconProps: { color: o.JX.PREMIUM_TIER_2 },
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
    986240: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(135793),
        a = t(111810),
        o = t(84040),
        s = t(388032);
      function u(e, n) {
        let t = (0, o.Z)(e, n),
          u = e.hasPotions(),
          d = (0, a.V1)("Message Context Menu");
        return t && !u && d
          ? (0, i.jsx)(l.MenuItem, {
              id: "add-confetti-potion",
              label: s.intl.string(s.t.icaJW1),
              icon: l.PotionIcon,
              action: () => (0, r.openMessageConfettiModal)(n, e),
            })
          : null;
      }
    },
    667922: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        a = t(481060),
        o = t(543241),
        s = t(222677),
        u = t(995774),
        d = t(665906),
        c = t(695346),
        g = t(496675),
        m = t(768581),
        f = t(585483),
        h = t(176354),
        E = t(981631),
        I = t(185923),
        v = t(388032);
      function M(e, n) {
        let { reducedMotion: t } = l.useContext(
            a.AccessibilityPreferencesContext,
          ),
          m = (0, d.$R)(n),
          M = (0, r.e7)(
            [g.Z],
            () => (n.isPrivate() || g.Z.can(E.Plq.ADD_REACTIONS, n)) && m,
            [n, m],
          ),
          x = (0, o.MZ)(n.getGuildId());
        if (!c.nc.getSetting() || !M || e.type === E.uaV.GUILD_INVITE_REMINDER)
          return null;
        let Z = x
          .filter(
            (e) =>
              !h.ZP.isEmojiFilteredOrLocked({
                emoji: e,
                channel: n,
                intention: I.Hz.REACTION,
              }),
          )
          .slice(0, 12)
          .map((l, r) => {
            var o, d;
            return (0, i.jsx)(
              a.MenuItem,
              {
                color: "default",
                id:
                  null !==
                    (d =
                      null !== (o = l.id) && void 0 !== o
                        ? o
                        : l.optionallyDiverseSequence) && void 0 !== d
                    ? d
                    : l.name,
                label: ":".concat(l.name, ":"),
                icon: (e) =>
                  (0, i.jsx)(p, {
                    ...e,
                    reducedMotionEnabled: t.enabled,
                    emoji: l,
                  }),
                action: () => {
                  (0, s.rU)(
                    n.id,
                    e.id,
                    (0, u.g1)(l),
                    s.TW.MESSAGE_CONTEXT_MENU,
                  );
                },
                dontCloseOnActionIfHoldingShiftKey: !0,
              },
              r,
            );
          });
        return (0, i.jsx)(a.MenuItem, {
          id: "add-reaction",
          label: v.intl.string(v.t.lfIHs7),
          action: () => {
            f.S.dispatchKeyed(E.LPv.TOGGLE_REACTION_POPOUT, e.id, {
              emojiPicker: !0,
            });
          },
          color: "default",
          children: (0, i.jsxs)(i.Fragment, {
            children: [
              Z,
              (0, i.jsx)(a.MenuSeparator, {}),
              (0, i.jsx)(a.MenuItem, {
                color: "default",
                id: "other-reactions",
                label: v.intl.string(v.t["OBCR+v"]),
                icon: a.ReactionIcon,
                action: () => {
                  f.S.dispatchKeyed(E.LPv.TOGGLE_REACTION_POPOUT, e.id, {
                    emojiPicker: !0,
                  });
                },
              }),
            ],
          }),
        });
      }
      function p(e) {
        var n;
        let {
          emoji: t,
          reducedMotionEnabled: l,
          className: r = "",
          isFocused: a = !1,
        } = e;
        return (0, i.jsx)("img", {
          className: r,
          src:
            null != t.id
              ? m.ZP.getEmojiURL({
                  id: t.id,
                  animated: t.animated && (!l || a),
                  size: 18,
                })
              : h.ZP.getURL(
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
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(496675),
        a = t(996861),
        o = t(981631),
        s = t(388032);
      function u(e, n) {
        let t = n.getGuildId();
        return null != t &&
          (e.type === o.uaV.USER_JOIN ||
            e.type === o.uaV.GUILD_INVITE_REMINDER) &&
          r.Z.canWithPartialContext(o.Plq.MANAGE_GUILD, { guildId: t })
          ? (0, i.jsx)(l.MenuItem, {
              id: "configure",
              label: s.intl.string(s.t.NpHUi4),
              icon: l.CircleQuestionIcon,
              action: () => (0, a.zW)(n),
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
      var i = t(200651);
      t(192379);
      var l = t(852229),
        r = t(481060),
        a = t(626135),
        o = t(572004),
        s = t(981631),
        u = t(388032);
      function d(e, n) {
        return o.wS && e.type !== s.uaV.GUILD_INVITE_REMINDER
          ? (0, i.jsx)(r.MenuItem, {
              id: "copy-link",
              label: u.intl.string(u.t.Xrt5Pj),
              icon: r.LinkIcon,
              action: () => {
                (0, l.J)(
                  ""
                    .concat(location.protocol, "//")
                    .concat(location.host)
                    .concat(s.Z5c.CHANNEL(n.guild_id, n.id, e.id)),
                ),
                  a.default.track(s.rMx.MESSAGE_LINK_COPIED, {
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
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(39154),
        a = t(572004),
        o = t(388032);
      function s(e) {
        return a.wS
          ? (0, i.jsx)(l.MenuItem, {
              id: "copy-text",
              label: o.intl.string(o.t.JrGD7O),
              icon: l.CopyIcon,
              action: () => {
                (e = (0, r.Z)(e)), (0, a.JG)(e.content);
              },
            })
          : null;
      }
    },
    601184: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        a = t(904245),
        o = t(257559),
        s = t(665906),
        u = t(496675),
        d = t(594174),
        c = t(981631),
        g = t(388032);
      function m(e, n) {
        let t = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
          m = (0, s.$R)(n),
          f = (0, l.e7)([u.Z], () => u.Z.can(c.Plq.MANAGE_MESSAGES, n), [n]),
          h = f || (null != t && e.canDeleteOwnMessage(t.id));
        return e.state === c.yb.SENDING ||
          !h ||
          c.V$x.UNDELETABLE.has(e.type) ||
          !m
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "delete",
              label: g.intl.string(g.t.xwMqDw),
              action: function (t) {
                e.state === c.yb.SEND_FAILED
                  ? a.Z.deleteMessage(n.id, e.id, !0)
                  : t.shiftKey
                    ? a.Z.deleteMessage(n.id, e.id)
                    : o.Z.confirmDelete(n, e, !0);
              },
              color: "danger",
              icon: r.TrashIcon,
            });
      }
    },
    6148: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        a = t(904245),
        o = t(665906),
        s = t(314897),
        u = t(418476),
        d = t(388032);
      function c(e, n) {
        let t = (0, l.e7)([s.default], () => s.default.getId()),
          c = (0, o.$R)(n),
          g = (0, o.Gu)(n);
        return (0, u.Z)(e, t) && c && !g
          ? (0, i.jsx)(r.MenuItem, {
              id: "edit",
              label: d.intl.string(d.t.fsBWmZ),
              action: () => a.Z.startEditMessage(n.id, e.id, e.content),
              icon: r.PencilIcon,
            })
          : null;
      }
    },
    519110: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(757143);
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        a = t(481060),
        o = t(80932),
        s = t(2052),
        u = t(543241),
        d = t(339085),
        c = t(633302),
        g = t(691251),
        m = t(268350),
        f = t(217590),
        h = t(453070),
        E = t(926491),
        I = t(378233),
        v = t(981631),
        M = t(388032);
      function p(e) {
        return c.ZP.getByName(e.replace(/(^:|:$)/g, ""));
      }
      function x(e) {
        let { type: n, id: t, name: x, isInExpressionPicker: Z = !1 } = e,
          { location: S } = (0, s.O)(),
          j = l.useMemo(
            () => ({
              ...S,
              section: Z ? v.jXE.EXPRESSION_PICKER : v.jXE.CONTEXT_MENU,
            }),
            [S, Z],
          ),
          T = (0, h.Go)(),
          b = (0, r.e7)([E.Z], () =>
            n === g.S.STICKER && null != t ? E.Z.getStickerById(t) : null,
          ),
          _ = null != b && T.includes(b.id),
          N = (0, r.e7)([d.ZP], () => {
            if (n === g.S.EMOJI) {
              if (null != t)
                return d.ZP.getDisambiguatedEmojiContext().getById(t);
              if (null != x) {
                var e;
                return null !== (e = p(x)) && void 0 !== e
                  ? e
                  : p(c.ZP.convertSurrogateToName(x));
              }
            }
          }),
          A = (0, u.C1)(null, N);
        if (null != b && n === g.S.STICKER)
          return (0, I.J8)(b) && !(0, I.V9)(b)
            ? null
            : _
              ? (0, i.jsx)(a.MenuItem, {
                  id: "unfavorite",
                  action: () => (0, m.hW)(b.id),
                  label: M.intl.string(M.t.XhzKyM),
                })
              : (0, i.jsx)(a.MenuItem, {
                  id: "favorite",
                  action: () => {
                    (0, f.cQ)({
                      sticker: b,
                      location: { ...j, object: v.qAy.STICKER },
                    }),
                      (0, m.SA)(null == b ? void 0 : b.id);
                  },
                  label: M.intl.string(M.t.kWmiPT),
                });
        if (null != N && n === g.S.EMOJI)
          return A
            ? (0, i.jsx)(a.MenuItem, {
                id: "unfavorite",
                action: () => (0, o.Xe)(N),
                label: M.intl.string(M.t.Ay49KC),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "favorite",
                action: () => {
                  (0, u.J1)({
                    emoji: N,
                    location: { ...j, object: v.qAy.EMOJI },
                  }),
                    (0, o.$K)(N);
                },
                label: M.intl.string(M.t["nNsr6+"]),
              });
      }
    },
    759875: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(346610),
        a = t(868643),
        o = t(245216),
        s = t(996861),
        u = t(388032);
      function d(e, n) {
        let t = (0, a.a)(e),
          { canForwardMessages: d } = (0, r.yk)(
            { location: "MessageActionsMenu" },
            { autoTrackExposure: !1 },
          );
        return t && d
          ? (0, i.jsx)(l.MenuItem, {
              id: "forward",
              label: u.intl.string(u.t.I3ltXF),
              icon: o.Z,
              action: () => {
                (0, s.ts)(n, e);
              },
            })
          : null;
      }
    },
    168405: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(665906),
        a = t(50284),
        o = t(388032);
      function s(e, n) {
        return (0, r.$R)(n)
          ? (0, i.jsx)(l.MenuItem, {
              id: "mark-unread",
              label: o.intl.string(o.t.RpE9k5),
              action: () => (0, a.Z)(n.id, e.id),
              icon: l.ChatMarkUnreadIcon,
            })
          : null;
      }
    },
    536639: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        a = t(332148),
        o = t(257559),
        s = t(496675),
        u = t(151007),
        d = t(981631),
        c = t(388032);
      function g(e, n) {
        let t = (0, l.e7)([s.Z], () => s.Z.can(d.Plq.MANAGE_MESSAGES, n), [n]);
        return e.state !== d.yb.SEND_FAILED && (0, u.Z)(e, n, t)
          ? !1 === e.pinned
            ? (0, i.jsx)(r.MenuItem, {
                id: "pin",
                action: function (t) {
                  t.shiftKey ? a.Z.pinMessage(n, e.id) : o.Z.confirmPin(n, e);
                },
                label: c.intl.string(c.t["CvQ18/"]),
                icon: r.PinIcon,
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "unpin",
                action: function (t) {
                  t.shiftKey
                    ? a.Z.unpinMessage(n, e.id)
                    : o.Z.confirmUnpin(n, e);
                },
                label: c.intl.string(c.t["Bse+Fx"]),
                icon: r.PinIcon,
              })
          : null;
      }
    },
    720904: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        a = t(442837),
        o = t(481060),
        s = t(543241),
        u = t(222677),
        d = t(995774),
        c = t(665906),
        g = t(695346),
        m = t(496675),
        f = t(768581),
        h = t(176354),
        E = t(981631),
        I = t(185923),
        v = t(388032),
        M = t(953568);
      let p = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
      function x(e) {
        var n;
        let { emoji: t, isFocused: l } = e,
          { animated: a, src: s, surrogates: u } = t;
        return (
          null == s && null != t.id
            ? (s = f.ZP.getEmojiURL({ id: t.id, animated: !!a, size: 20 }))
            : null == s && (s = h.ZP.getURL(u)),
          (0, i.jsx)(
            o.Tooltip,
            {
              text: t.allNamesString,
              hideOnClick: !0,
              spacing: 16,
              forceOpen: l,
              children: (e) =>
                (0, i.jsx)("div", {
                  "aria-label": v.intl.formatToPlainString(v.t["/iYSo6"], {
                    emojiName: t.name,
                  }),
                  className: r()(M.button, { [M.focused]: l }),
                  ...e,
                  children:
                    null == s || "" === s.trim()
                      ? (0, i.jsx)("span", {
                          className: r()("emoji", "emoji-text", M.icon),
                          ...e,
                          children: u,
                        })
                      : (0, i.jsx)("img", {
                          className: M.icon,
                          src: s,
                          alt: "",
                        }),
                }),
            },
            null !== (n = t.id) && void 0 !== n ? n : t.name,
          )
        );
      }
      function Z(e, n) {
        let t = (0, s.MZ)(n.guild_id).filter((e) => {
          var t;
          return (
            !(
              e.useSpriteSheet &&
              p.indexOf(null !== (t = e.uniqueName) && void 0 !== t ? t : "") >=
                0
            ) &&
            !h.ZP.isEmojiPremiumLocked({
              emoji: e,
              channel: n,
              intention: I.Hz.REACTION,
            })
          );
        });
        t.length > 4 && (t.length = 4);
        let l = g.nc.useSetting(),
          r = (0, c.$R)(n),
          f = (0, a.e7)(
            [m.Z],
            () => l && r && (n.isPrivate() || m.Z.can(E.Plq.ADD_REACTIONS, n)),
            [n, r, l],
          ),
          v = (t) => {
            (0, u.rU)(n.id, e.id, (0, d.g1)(t), u.TW.MESSAGE_CONTEXT_MENU);
          };
        return f && t.length > 0
          ? (0, i.jsx)(o.MenuGroup, {
              className: M.wrapper,
              children: t.map((e, n) => {
                var t;
                return (0, i.jsx)(
                  o.MenuItem,
                  {
                    id: "quickreact-".concat(
                      null !== (t = e.id) && void 0 !== t ? t : n,
                    ),
                    render: (n) => {
                      let { isFocused: t } = n;
                      return (0, i.jsx)(x, { emoji: e, isFocused: t });
                    },
                    action: () => v(e),
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
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(79390),
        a = t(388032);
      function o(e) {
        return null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, r.eQ)(e))
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "reactions",
              label: a.intl.string(a.t.wikODg),
              icon: l.ReactionIcon,
              action: () =>
                (0, l.openModalLazy)(async () => {
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
          return m;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        a = t(668781),
        o = t(79390),
        s = t(222677),
        u = t(665906),
        d = t(496675),
        c = t(981631),
        g = t(388032);
      function m(e, n) {
        let t = (0, u.$R)(n),
          m = (0, l.e7)([d.Z], () => d.Z.can(c.Plq.MANAGE_MESSAGES, n) && t, [
            n,
            t,
          ]);
        return !m ||
          null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, o.eQ)(e))
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "remove-reactions",
              label: g.intl.string(g.t.ZbtGBg),
              action: function (t) {
                t.shiftKey
                  ? (0, s.wX)(n.id, e.id)
                  : a.Z.show({
                      title: g.intl.string(g.t.iz3vYW),
                      body: g.intl.string(g.t.VpjOCg),
                      confirmText: g.intl.string(g.t.p89ACg),
                      cancelText: g.intl.string(g.t.gm1Ven),
                      onConfirm: () => {
                        (0, s.wX)(n.id, e.id);
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
          return E;
        },
      }),
        t(724458),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        a = t(481060),
        o = t(668781),
        s = t(79390),
        u = t(222677),
        d = t(665906),
        c = t(496675),
        g = t(768581),
        m = t(176354),
        f = t(981631),
        h = t(388032);
      function E(e, n) {
        let { reducedMotion: t } = l.useContext(
            a.AccessibilityPreferencesContext,
          ),
          g = (0, d.$R)(n),
          m = (0, r.e7)([c.Z], () => c.Z.can(f.Plq.MANAGE_MESSAGES, n) && g, [
            n,
            g,
          ]),
          E = e.reactions.reduce((e, n) => {
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
          v = (t, i) => {
            t.shiftKey
              ? (0, u.$E)(n.id, e.id, i)
              : o.Z.show({
                  title: h.intl.string(h.t["73GqT0"]),
                  body: h.intl.string(h.t.dmy5bm),
                  confirmText: h.intl.string(h.t.p89ACg),
                  cancelText: h.intl.string(h.t.gm1Ven),
                  onConfirm: () => {
                    (0, u.$E)(n.id, e.id, i);
                  },
                });
          };
        return !m ||
          null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, s.eQ)(e))
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "remove-emoji-reactions",
              label: h.intl.string(h.t["zx/e4O"]),
              color: "danger",
              children: E.map((e) => {
                var n, l;
                return (0, i.jsx)(
                  a.MenuItem,
                  {
                    id: "remove-emoji-reactions-".concat(
                      null !== (n = e.name) && void 0 !== n ? n : e.id,
                    ),
                    label: null == e.id ? e.name : ":".concat(e.name, ":"),
                    action: (n) => v(n, e),
                    icon: (n) =>
                      (0, i.jsx)(I, {
                        ...n,
                        reducedMotionEnabled: t.enabled,
                        emoji: e,
                      }),
                    dontCloseOnActionIfHoldingShiftKey: !0,
                  },
                  null !== (l = e.name) && void 0 !== l ? l : e.id,
                );
              }),
            });
      }
      function I(e) {
        var n;
        let {
          emoji: t,
          reducedMotionEnabled: l,
          className: r = "",
          isFocused: a = !1,
        } = e;
        return (0, i.jsx)("img", {
          className: r,
          src:
            null != t.id
              ? g.ZP.getEmojiURL({
                  id: t.id,
                  animated: t.animated && (!l || a),
                  size: 18,
                })
              : m.ZP.getURL(null !== (n = t.name) && void 0 !== n ? n : ""),
          alt: "",
        });
      }
    },
    134323: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(280845),
        a = t(996861),
        o = t(388032);
      function s(e, n) {
        return (0, r.U)(n, e)
          ? (0, i.jsx)(l.MenuItem, {
              id: "reply",
              label: o.intl.string(o.t["5IEsGx"]),
              icon: l.ArrowAngleLeftUpIcon,
              action: (t) => {
                (0, a.HH)(n, e, t);
              },
            })
          : null;
      }
    },
    429260: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
        e: function () {
          return g;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        a = t(432877),
        o = t(726521),
        s = t(594174),
        u = t(970257),
        d = t(388032);
      function c(e) {
        return (0, u.a4)(e)
          ? (0, i.jsx)(r.MenuItem, {
              id: "report",
              label: d.intl.string(d.t.GwbdGR),
              action: () => (0, o.ak)(e, "web_message_context_menu"),
              icon: r.FlagIcon,
              color: "danger",
            })
          : null;
      }
      function g(e) {
        let n = (0, l.e7)([a.ZP], () => a.ZP.get("iar_testing")),
          t = (0, l.e7)([s.default], () => s.default.getCurrentUser());
        return (0, u.a4)(e) && null != t && t.isStaff() && n
          ? (0, i.jsx)(r.MenuItem, {
              id: "staff-test-message-report",
              label: "[STAFF] Test Message Report",
              action: () => (0, o.Jw)(e, "web_message_context_menu"),
              icon: r.FlagIcon,
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
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(111618),
        a = t(730954),
        o = t(981631),
        s = t(388032);
      function u(e, n) {
        return e.state !== o.yb.SEND_FAILED
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "resend",
              label: s.intl.string(s.t.lXHojo),
              action: () => (0, a.Z)(n, e, void 0, r.Z.getOptions(e.id)),
            });
      }
    },
    279329: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        a = t(196051),
        o = t(441729),
        s = t(388032);
      function u(e, n) {
        let t = (0, l.e7)([o.Z], () => o.Z.isSpeakingMessage(n.id, e.id), [
          n,
          e,
        ]);
        return "" === e.content
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "tts",
              label: t ? s.intl.string(s.t.CJ30BA) : s.intl.string(s.t.yGLjXF),
              icon: r.ChatSpeakIcon,
              action: () => (t ? (0, a.NB)() : (0, a.LA)(n, e)),
            });
      }
    },
    627938: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(665906),
        a = t(996861),
        o = t(388032);
      function s(e, n) {
        return (0, r.NE)(n, e)
          ? (0, i.jsx)(l.MenuItem, {
              id: "thread",
              label: o.intl.string(o.t.rBIGBA),
              icon: l.ThreadIcon,
              action: () => {
                (0, a.gK)(n, e);
              },
            })
          : null;
      }
    },
    512303: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(373793),
        a = t(442837),
        o = t(481060),
        s = t(232567),
        u = t(700582),
        d = t(592180),
        c = t(565138),
        g = t(598077),
        m = t(430824),
        f = t(594174),
        h = t(388032),
        E = t(500054);
      function I(e) {
        var n, t, I, v;
        let M =
            null === (n = e.interactionMetadata) || void 0 === n
              ? void 0
              : n.authorizing_integration_owners[r.Y.USER_INSTALL],
          p =
            null === (t = e.interactionMetadata) || void 0 === t
              ? void 0
              : t.authorizing_integration_owners[r.Y.GUILD_INSTALL],
          x =
            null === (I = e.interactionMetadata) || void 0 === I
              ? void 0
              : I.user.id,
          Z = (0, a.e7)([f.default], () => f.default.getUser(M)),
          S = (0, a.e7)([m.Z], () => m.Z.getGuild(p)),
          j = (0, a.e7)([f.default], () => f.default.getUser(x));
        if (
          (l.useEffect(() => {
            null == Z && null != M && (0, s.PR)(M);
          }, [Z, M]),
          !(0, d.a)(e))
        )
          return null;
        null == j &&
          (j = new g.Z(
            null === (v = e.interactionMetadata) || void 0 === v
              ? void 0
              : v.user,
          ));
        let T = null;
        return (
          null != S
            ? (T = (0, i.jsx)(o.MenuItem, {
                className: E.interactionInfoMenuItem,
                disabled: !0,
                iconLeft: () =>
                  (0, i.jsx)(c.Z, { guild: S, size: c.Z.Sizes.MINI }),
                id: "integration-owner",
                label: S.name,
                subtext: h.intl.formatToPlainString(h.t.ShLXXF, {
                  application: e.author.username,
                }),
              }))
            : null != Z &&
              (T = (0, i.jsx)(o.MenuItem, {
                className: E.interactionInfoMenuItem,
                disabled: !0,
                iconLeft: () =>
                  (0, i.jsx)(u.Z, { user: Z, size: o.AvatarSizes.SIZE_20 }),
                id: "integration-owner",
                label: Z.username,
                subtext: h.intl.formatToPlainString(h.t.ShLXXF, {
                  application: e.author.username,
                }),
              })),
          (0, i.jsxs)(o.MenuItem, {
            id: "view-interaction-info",
            label: h.intl.string(h.t.Rjezb2),
            children: [
              T,
              null != j
                ? (0, i.jsx)(o.MenuItem, {
                    className: E.interactionInfoMenuItem,
                    disabled: !0,
                    iconLeft: () =>
                      (0, i.jsx)(u.Z, { user: j, size: o.AvatarSizes.SIZE_20 }),
                    id: "interaction-user",
                    label: j.username,
                    subtext: h.intl.string(h.t["04gxNj"]),
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
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(247206),
        a = t(388032);
      function o(e, n) {
        return null != n &&
          (0, r.KP)({ type: r.lJ.GenericMedia, media: n }, (0, r.HH)(e))
          ? (0, i.jsx)(
              l.MenuItem,
              {
                id: "report-image-false-positive",
                label: a.intl.string(a.t.ZH7P2t),
                action: () => {
                  (0, l.openModalLazy)(async () => {
                    let { default: l } = await t(788679);
                    return (t) =>
                      (0, i.jsx)(l, {
                        channelId: e.channel_id,
                        messageId: e.id,
                        mediaItemUrl: n.url,
                        ...t,
                      });
                  });
                },
                icon: l.ImageWarningIcon,
              },
              "report-image-false-positive",
            )
          : null;
      }
    },
    975368: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(789020);
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(378409),
        a = t(630388),
        o = t(49012),
        s = t(694859),
        u = t(981631),
        d = t(388032);
      function c(e) {
        let n = (0, s.X)("use-save-voice-message-audio");
        return (0, a.yE)(e.flags, u.iLy.IS_VOICE_MESSAGE) && n
          ? (0, i.jsx)(l.MenuItem, {
              id: "save-voice-message-audio",
              label: d.intl.string(d.t.vbAEaG),
              icon: l.DownloadIcon,
              action: () => {
                let n = (0, r.s$)(e.attachments[0].url);
                (0, o.q)({ href: n });
              },
            })
          : null;
      }
    },
    694859: function (e, n, t) {
      t.d(n, {
        X: function () {
          return l;
        },
      });
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2024-12_save_voice_message_menu_item",
        label: "Save voice message menu item on web",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Save voice message menu item active",
            config: { enabled: !0 },
          },
        ],
      });
      function l(e) {
        let n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return i.useExperiment({ location: e }, { autoTrackExposure: n })
          .enabled;
      }
    },
    36998: function (e, n, t) {
      t.d(n, {
        v: function () {
          return r;
        },
      });
      var i = t(944486),
        l = t(176505);
      function r() {
        var e;
        let n =
          null !== (e = i.Z.getCurrentlySelectedChannelId()) && void 0 !== e
            ? e
            : void 0;
        return null != n && (0, l.AB)(n)
          ? { channel_static_route: n }
          : { channel_id: n };
      }
    },
    26737: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(358085),
        a = t(998502),
        o = t(388032);
      function s(e, n) {
        return r.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
          ? (0, i.jsx)(l.MenuItem, {
              id: "copy",
              label: o.intl.string(o.t.OpuAlJ),
              hint: (0, r.isMac)() ? "⌘C" : "Ctrl+C",
              action: () => {
                a.ZP.copy(e), null == n || n.focus();
              },
            })
          : null;
      }
    },
    29264: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(378409),
        a = t(976853),
        o = t(626135),
        s = t(358085),
        u = t(960048),
        d = t(998502),
        c = t(36998),
        g = t(981631),
        m = t(388032);
      function f(e, n) {
        (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE)),
          u.Z.captureException(n);
      }
      function h(e, n, t) {
        if (
          (0, a.Z)(null == n ? void 0 : n.getChannelId()) ||
          (null == t ? void 0 : t.shouldHideMediaOptions) === !0 ||
          !s.isPlatformEmbedded ||
          null == e ||
          !(0, r.gS)(e)
        )
          return null;
        let u = (0, r.s$)(e),
          h = async () => {
            try {
              await d.ZP.saveImage(u),
                o.default.track(g.rMx.CONTEXT_MENU_IMAGE_SAVED, {
                  ...(0, c.v)(),
                }),
                (0, l.showToast)(
                  (0, l.createToast)(
                    m.intl.string(m.t.cqpdJS),
                    l.ToastType.SUCCESS,
                  ),
                );
            } catch (e) {
              o.default.track(g.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                ...(0, c.v)(),
              }),
                f(m.intl.string(m.t["8Ve/S0"]), e);
            }
          },
          E = async () => {
            try {
              await d.ZP.copyImage(u),
                o.default.track(g.rMx.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, c.v)(),
                }),
                (0, l.showToast)(
                  (0, l.createToast)(
                    m.intl.string(m.t.bhUpvL),
                    l.ToastType.SUCCESS,
                  ),
                );
            } catch (e) {
              f(m.intl.string(m.t.PTPbj4), e),
                o.default.track(g.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                  ...(0, c.v)(),
                });
            }
          };
        return [
          d.ZP.canCopyImage() && (0, r.Lz)(e)
            ? (0, i.jsx)(
                l.MenuItem,
                {
                  id: "copy-image",
                  label: m.intl.string(m.t.tvUqWl),
                  action: E,
                },
                "copy-image",
              )
            : null,
          (0, i.jsx)(
            l.MenuItem,
            { id: "save-image", label: m.intl.string(m.t.PeXhgI), action: h },
            "save-image",
          ),
        ];
      }
    },
    905041: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(378409),
        a = t(976853),
        o = t(902676),
        s = t(626135),
        u = t(49012),
        d = t(358085),
        c = t(998502),
        g = t(36998),
        m = t(981631),
        f = t(388032);
      function h(e, n, t, h) {
        let E = (0, a.Z)(null == t ? void 0 : t.getChannelId());
        if (
          !d.isPlatformEmbedded ||
          null == e ||
          "" === e ||
          E ||
          (null == h ? void 0 : h.shouldHideMediaOptions) === !0 ||
          !(0, r.Jj)(e)
        )
          return null;
        let I = (0, o.F)(e),
          v = (t) => {
            s.default.track(m.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: I,
              ...(0, g.v)(),
            }),
              (0, u.q)(
                { href: e, trusted: (0, u.r)(e, n), shouldConfirm: !0 },
                t,
              );
          };
        return [
          (0, i.jsx)(
            l.MenuItem,
            {
              id: "copy-native-link",
              label: f.intl.string(f.t.WqhZsr),
              action: () => {
                s.default.track(m.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: I,
                  ...(0, g.v)(),
                }),
                  c.ZP.copy(e),
                  (0, l.showToast)(
                    (0, l.createToast)(
                      f.intl.string(f.t["L/PwZW"]),
                      l.ToastType.SUCCESS,
                    ),
                  );
              },
            },
            "copy-native-link",
          ),
          (0, i.jsx)(
            l.MenuItem,
            {
              id: "open-native-link",
              label: f.intl.string(f.t.wuRE8P),
              action: (e) => v(e),
            },
            "open-native-link",
          ),
        ];
      }
    },
    89013: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        a = t.n(r),
        o = t(481060),
        s = t(626135),
        u = t(358085),
        d = t(981631),
        c = t(388032);
      function g(e) {
        let n = l.useCallback(() => {
          a()(null != e, "text cannot be null"),
            s.default.track(d.rMx.MESSAGE_MENU_GOOGLE_SEARCHED),
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
                o.MenuItem,
                {
                  id: "search-google",
                  label: c.intl.string(c.t["Rd/Mkp"]),
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
          return s;
        },
        z: function () {
          return i;
        },
      }),
        t(653041);
      var i,
        l,
        r = t(442837),
        a = t(314897);
      (l = i || (i = {}))[(l.END_EARLY = 0)] = "END_EARLY";
      let o = [];
      function s(e) {
        let n = (0, r.e7)([a.default], () => a.default.getId()),
          { poll: t } = e;
        if (!e.isPoll() || null == t) return o;
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
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(203143),
        a = t(615669),
        o = t(388032);
      let s = {
        [a.z.END_EARLY]: (e) =>
          (0, i.jsx)(l.MenuItem, {
            id: "end-poll-early",
            label: o.intl.string(o.t.grdwws),
            icon: l.ClockXIcon,
            action: () => {
              r.Z.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
          }),
      };
      function u(e) {
        let n = (0, a.Z)(e);
        return 0 === n.length
          ? null
          : (0, i.jsx)(i.Fragment, { children: n.map((n) => s[n](e)) });
      }
    },
    135793: function (e, n, t) {
      t.r(n),
        t.d(n, {
          MESSAGE_CONFETTI_POTION_MODAL_KEY: function () {
            return _;
          },
          default: function () {
            return A;
          },
          openMessageConfettiModal: function () {
            return N;
          },
        }),
        t(47120);
      var i,
        l,
        r,
        a,
        o = t(200651),
        s = t(192379),
        u = t(311570),
        d = t(692547),
        c = t(481060),
        g = t(100527),
        m = t(906732),
        f = t(997323),
        h = t(324085),
        E = t(688465),
        I = t(333867),
        v = t(96848),
        M = t(937615),
        p = t(84040),
        x = t(235894),
        Z = t(981631),
        S = t(215023),
        j = t(388032),
        T = t(694638),
        b = t(99713);
      let _ = "MESSAGE_CONFETTI_POTION_MODAL_KEY",
        N = (e, n) => {
          (0, c.openModalLazy)(
            async () => {
              let { default: i } = await Promise.resolve().then(
                t.bind(t, 135793),
              );
              return (t) => (0, o.jsx)(i, { channel: e, message: n, ...t });
            },
            { modalKey: _ },
          );
        };
      function A(e) {
        let { transitionState: n, channel: t, message: i } = e;
        return (0, o.jsx)(c.ModalRoot, {
          size: c.ModalSize.DYNAMIC,
          transitionState: n,
          children: (0, o.jsx)(P, { channel: t, message: i }),
        });
      }
      function P(e) {
        let { channel: n, message: t } = e,
          i = (0, p.Z)(t, n),
          l = (0, x.U)(t),
          [r, a] = (0, s.useState)(!1),
          [d, E] = (0, s.useState)(),
          { price: v, fetchingPrice: M, error: j } = (0, h.R2)(S.D1),
          { entitlement: T, fetchedEntitlement: b, error: _ } = (0, h.t6)(S.D1),
          N = j || _,
          { analyticsLocations: A } = (0, m.ZP)([g.Z.CONFETTI_POTION_MODAL]),
          P = null != T && !T.consumed;
        (0, s.useEffect)(
          () => () => {
            N && (0, f.SN)(S.D1);
          },
          [T, n.id, t.id, d, r, N],
        );
        let y = (0, s.useCallback)(() => {
            null != d &&
              ((0, f.qc)(n.id, t.id, d, S.D1), (0, c.closeAllModals)());
          }, [d, n.id, t.id]),
          D = (0, s.useCallback)(() => {
            (0, I.Z)({
              skuId: S.D1,
              analyticsLocations: A,
              onComplete: y,
              variantsReturnStyle: u.v.INDIVIDUAL_PRODUCTS,
            });
          }, [y, A]),
          L = (0, s.useMemo)(
            () =>
              (null == T ? void 0 : T.type) === Z.qc2.DEVELOPER_GIFT
                ? 1
                : P
                  ? 2
                  : 0,
            [null == T ? void 0 : T.type, P],
          ),
          R = (0, s.useMemo)(
            () => (l ? 2 : i ? (null == d ? 3 : 0) : 1),
            [l, i, d],
          );
        return (0, o.jsx)(C, {
          buttonPurchaseState: L,
          buttonDisabledState: R,
          price: v,
          onActionClick: () => {
            a(!0), (P ? y : D)();
          },
          loading: M || !b,
          selectedEmoji: null != d ? d : void 0,
          setSelectedEmoji: E,
        });
      }
      let C = (e) => {
          let {
            buttonPurchaseState: n,
            buttonDisabledState: t,
            price: i,
            onActionClick: l,
            loading: r,
            selectedEmoji: a,
            setSelectedEmoji: s,
          } = e;
          return r
            ? (0, o.jsx)(O, {})
            : null == i
              ? (0, o.jsx)(R, {})
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("div", {
                      className: T.modal,
                      children: (0, o.jsx)(y, {
                        selectedEmoji: a,
                        setSelectedEmoji: s,
                      }),
                    }),
                    (0, o.jsx)(D, {
                      buttonPurchaseState: n,
                      buttonDisabledState: t,
                      price: i,
                      onActionClick: l,
                    }),
                  ],
                });
        },
        y = (e) => {
          let { selectedEmoji: n, setSelectedEmoji: t } = e;
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)("div", {
              className: T.body,
              children: [
                (0, o.jsxs)("div", {
                  className: T.header,
                  children: [
                    (0, o.jsxs)("div", {
                      className: T.heading,
                      children: [
                        (0, o.jsx)(c.Heading, {
                          variant: "heading-lg/bold",
                          children: j.intl.string(j.t["5/knv7"]),
                        }),
                        (0, o.jsx)(E.Z, {}),
                      ],
                    }),
                    (0, o.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      children: j.intl.string(j.t.NFTQoa),
                    }),
                  ],
                }),
                (0, o.jsx)("div", { className: T.divider }),
                (0, o.jsxs)("div", {
                  className: T.select,
                  children: [
                    (0, o.jsx)(c.Text, {
                      variant: "eyebrow",
                      children: j.intl.string(j.t.o8XwoK),
                    }),
                    (0, o.jsx)(v.Z, {
                      setEmojiConfetti: (e) => {
                        t(e);
                      },
                      emojiConfetti: n,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      ((r = i || (i = {}))[(r.BUY = 0)] = "BUY"),
        (r[(r.REDEEM = 1)] = "REDEEM"),
        (r[(r.ACTIVATE = 2)] = "ACTIVATE"),
        ((a = l || (l = {}))[(a.ENABLED = 0)] = "ENABLED"),
        (a[(a.INELIGIBLE = 1)] = "INELIGIBLE"),
        (a[(a.ALREADY_ACTIVE = 2)] = "ALREADY_ACTIVE"),
        (a[(a.MISSING_SELECTION = 3)] = "MISSING_SELECTION");
      let D = (e) => {
          let {
            buttonPurchaseState: n,
            buttonDisabledState: t,
            price: i,
            onActionClick: l,
          } = e;
          return (0, o.jsxs)("div", {
            className: T.footer,
            children: [
              (0, o.jsx)(c.Button, {
                onClick: () => {
                  (0, c.closeModal)(_);
                },
                color: c.Button.Colors.PRIMARY,
                children: j.intl.string(j.t.w2Qbd3),
              }),
              (0, o.jsx)(L, {
                buttonPurchaseState: n,
                buttonDisabledState: t,
                price: i,
                onActionClick: l,
              }),
            ],
          });
        },
        L = (e) => {
          let {
              buttonPurchaseState: n,
              buttonDisabledState: t,
              price: i,
              onActionClick: l,
            } = e,
            {
              isDisabled: r,
              copy: a,
              tooltipCopy: u,
            } = (0, s.useMemo)(() => {
              let e = {
                  0: j.intl.formatToPlainString(j.t.Wh82U1, {
                    price: (0, M.T4)(i.amount, i.currency),
                  }),
                  1: j.intl.string(j.t.RrKeDw),
                  2: j.intl.string(j.t["F/H7u7"]),
                },
                l = {
                  1: j.intl.string(j.t["Cb8/7+"]),
                  2: j.intl.string(j.t.fMkB9P),
                  3: j.intl.string(j.t["59ElNj"]),
                },
                r = 0 !== t;
              return { isDisabled: r, copy: e[n], tooltipCopy: r ? l[t] : "" };
            }, [t, n, i.amount, i.currency]);
          return (0, o.jsx)(c.Tooltip, {
            tooltipContentClassName: T.tooltip,
            text: u,
            shouldShow: !!r,
            children: (e) =>
              (0, o.jsx)(c.Button, {
                ...e,
                onClick: l,
                disabled: r,
                children: (0, o.jsxs)("div", {
                  className: T.buttonCopy,
                  children: [
                    (0, o.jsx)(c.PotionIcon, {
                      color: d.Z.colors.WHITE,
                      size: "sm",
                    }),
                    a,
                  ],
                }),
              }),
          });
        },
        R = () =>
          (0, o.jsx)("div", {
            className: T.anomaly,
            children: (0, o.jsxs)("div", {
              className: T.error,
              children: [
                (0, o.jsx)(c.Image, { src: b, width: 178, height: 190 }),
                (0, o.jsx)(c.Text, {
                  variant: "text-md/normal",
                  children: j.intl.string(j.t.oKJdSk),
                }),
              ],
            }),
          }),
        O = () =>
          (0, o.jsx)("div", {
            className: T.anomaly,
            children: (0, o.jsx)("div", {
              className: T.spinner,
              children: (0, o.jsx)(c.Spinner, {}),
            }),
          });
    },
    84040: function (e, n, t) {
      var i = t(275726),
        l = t(442837),
        r = t(665906),
        a = t(695346),
        o = t(496675),
        s = t(231338);
      n.Z = (e, n) => {
        let t = (0, r.$R)(n),
          u = (0, l.e7)(
            [o.Z],
            () => (n.isPrivate() || o.Z.can(s.Pl.ADD_REACTIONS, n)) && t,
            [n, t],
          );
        return a.nc.getSetting() && u && e.type !== i.u.GUILD_INVITE_REMINDER;
      };
    },
    280845: function (e, n, t) {
      t.d(n, {
        U: function () {
          return m;
        },
        o: function () {
          return f;
        },
      }),
        t(47120);
      var i = t(275726),
        l = t(442837),
        r = t(71619),
        a = t(665906),
        o = t(496675),
        s = t(594174),
        u = t(981631),
        d = t(231338);
      function c(e, n, t) {
        let l;
        return (
          (l = e.isPrivate()
            ? !e.isSystemDM()
            : t.can(d.Pl.SEND_MESSAGES, e) &&
              t.can(d.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(n.type)
        );
      }
      function g(e, n, t, i, l) {
        let r = n.hasFlag(u.iLy.EPHEMERAL),
          a = n.state === u.yb.SENT,
          o = !e.isArchivedThread() || l;
        return t && a && !r && !i && o;
      }
      function m(e, n) {
        var t;
        let i = (0, a.tc)(e),
          [, s] = (0, r.AB)(
            null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t
              ? t
              : void 0,
          ),
          u = (0, l.e7)([o.Z], () => null != e && null != n && c(e, n, o.Z));
        return null != e && null != n && g(e, n, u, s, i);
      }
      function f(e, n) {
        var t;
        let i = (0, a.kn)(e),
          l = c(e, n, o.Z),
          u = s.default.getCurrentUser(),
          [, d] = (0, r.s5)(
            null == u ? void 0 : u.id,
            null !== (t = e.getGuildId()) && void 0 !== t ? t : void 0,
          );
        return g(e, n, l, d, i);
      }
    },
    550727: function (e, n, t) {
      t.d(n, {
        B: function () {
          return a;
        },
      });
      var i = t(913527),
        l = t.n(i),
        r = t(388032);
      let a = [
        {
          getDueAt: () => l()().add(30, "minutes").toDate(),
          getLabel: () => r.intl.string(r.t["OV8l/P"]),
        },
        {
          getDueAt: () => l()().add(1, "hour").toDate(),
          getLabel: () => r.intl.string(r.t["zf0R+/"]),
        },
        {
          getDueAt: () => l()().add(4, "hour").toDate(),
          getLabel: () => r.intl.string(r.t["5gztZG"]),
        },
        {
          getDueAt: () =>
            l()().add(1, "day").startOf("day").add(9, "hours").toDate(),
          getLabel: () => r.intl.string(r.t["7MKr2N"]),
        },
        {
          getDueAt: () => l()().day(8).startOf("day").add(9, "hours").toDate(),
          getLabel: () => r.intl.string(r.t["q+Ls09"]),
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
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        a = t(239091),
        o = t(324701),
        s = t(550727),
        u = t(388032);
      function d(e) {
        let { createReminder: n } = e,
          a = l.useCallback(() => {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await t.e("43866").then(t.bind(t, 423639));
              return (t) => (0, i.jsx)(e, { ...t, createReminder: n });
            });
          }, [n]);
        return l.useMemo(() => {
          let e = s.B.map((e) => {
            let { getDueAt: t, getLabel: l } = e;
            return (0, i.jsx)(
              r.MenuItem,
              {
                id: "create-reminder-".concat(l()),
                label: l(),
                action: () => n(t()),
              },
              "create-reminder-".concat(l()),
            );
          });
          return (
            e.push(
              (0, i.jsx)(
                r.MenuItem,
                {
                  id: "create-reminder-custom",
                  label: u.intl.string(u.t.OLA8Zm),
                  action: a,
                },
                "custom",
              ),
            ),
            e
          );
        }, [n, a]);
      }
      function c(e) {
        let { message: n, label: t } = e,
          l = d({
            createReminder: (e) =>
              (0, o.z)({ channelId: n.channel_id, messageId: n.id, dueAt: e }),
          });
        return (0, i.jsx)(r.Menu, {
          navId: "message-reminder-create",
          onClose: a.Zy,
          "aria-label": u.intl.string(u.t.mJ3P0N),
          onSelect: () => null,
          children: (0, i.jsx)(r.MenuGroup, { label: t, children: l }),
        });
      }
    },
    570870: function (e, n, t) {
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        a = t.n(r),
        o = t(442837),
        s = t(481060),
        u = t(10718),
        d = t(667204),
        c = t(826298),
        g = t(276022),
        m = t(978983),
        f = t(430824),
        h = t(594174),
        E = t(981631),
        I = t(689079),
        v = t(388032),
        M = t(148562);
      n.Z = (e) => {
        let n,
          {
            commandType: t,
            commandTargetId: r,
            channel: p,
            guildId: x,
            onHeightUpdate: Z,
            context: S,
          } = e,
          j = (0, o.e7)([f.Z], () => f.Z.getGuild(null != x ? x : p.guild_id)),
          T = (0, o.e7)([h.default], () => h.default.getUser(r)),
          b = (0, g.Z)({
            user: T,
            guildId: null == j ? void 0 : j.id,
            context: S,
          }),
          {
            commands: _,
            sectionDescriptors: N,
            loading: A,
          } = u.wi({
            channel: p,
            filters: { commandTypes: [t] },
            options: { limit: I.lr },
            allowFetch: !0,
          }),
          { sections: P } = l.useMemo(() => {
            let e = {};
            return (
              N.forEach((n) => {
                e[n.id] = n;
              }),
              { sections: e }
            );
          }, [N]),
          C = l.useRef(A.current);
        l.useEffect(() => {
          A.current !== C.current &&
            ((C.current = A.current), null == Z || Z());
        }, [A, Z]);
        let y = l.useCallback(
          (e) => {
            a()(null != p, "menu item should not show if channel is null");
            let n = P[e.applicationId],
              t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
              s.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                iconLeft: () =>
                  null != t
                    ? (0, i.jsx)(t, {
                        channel: p,
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
                    context: { channel: p, guild: j },
                    commandTargetId: r,
                  });
                },
              },
              e.id,
            );
          },
          [p, j, r, P],
        );
        if (
          (A.current
            ? (n = (0, i.jsx)(
                s.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(m.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((n =
                0 === _.length
                  ? (0, i.jsx)(
                      s.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: v.intl.string(v.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : _.map(y)),
              null != b &&
                b.length > 0 &&
                (n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    n,
                    (0, i.jsx)(s.MenuSeparator, {}, "separator"),
                    b,
                  ],
                }))),
          !E.TPd.TEXTUAL.has(p.type))
        ) {
          if (null == b) return null;
          n = b;
        }
        return (0, i.jsx)(s.MenuItem, {
          id: "apps",
          label: v.intl.string(v.t.PHjkRE),
          listClassName: M.list,
          children: n,
        });
      };
    },
    624453: function (e, n, t) {
      t(733860);
      var i,
        l,
        r,
        a,
        o = t(392711),
        s = t.n(o),
        u = t(442837),
        d = t(570140),
        c = t(247206),
        g = t(786761),
        m = t(706454),
        f = t(592125),
        h = t(271383),
        E = t(430824),
        I = t(375954),
        v = t(699516),
        M = t(594174);
      let p = {};
      function x(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = f.Z.getChannel(e),
          r = null != l ? l.getGuildId() : null;
        return {
          id: e,
          messages: n.map((e) => (0, g.e5)(e)),
          guildId: r,
          loaded: t,
          loading: i,
        };
      }
      function Z(e) {
        let { channel: n } = e;
        delete p[n.id];
      }
      function S() {
        s().forEach(p, (e) => {
          e.messages = e.messages.map((e) =>
            e
              .set("blocked", v.Z.isBlockedForMessage(e))
              .set("ignored", v.Z.isIgnoredForMessage(e)),
          );
        });
      }
      class j extends (i = u.ZP.Store) {
        initialize() {
          this.waitFor(f.Z, E.Z, h.ZP, I.Z, M.default, m.default);
        }
        getPinnedMessages(e) {
          var n;
          return null !== (n = p[e]) && void 0 !== n ? n : void 0;
        }
        loaded(e) {
          return null != p[e] && p[e].loaded;
        }
      }
      (a = "ChannelPinsStore"),
        (r = "displayName") in (l = j)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
        (n.Z = new j(d.Z, {
          CONNECTION_OPEN: function () {
            p = {};
          },
          GUILD_DELETE: function (e) {
            let { guild: n } = e;
            p = s()(p)
              .filter((e) => e.guildId !== n.id)
              .keyBy("id")
              .value();
          },
          MESSAGE_UPDATE: function (e) {
            let n = e.message.id,
              t = e.message.channel_id;
            if (null == t) return !1;
            let i = p[t];
            if (null == i && !e.message.pinned) return !1;
            if (null == e.message.author) {
              if (null != i) {
                let l = s().findIndex(i.messages, (e) => e.id === n);
                if (l >= 0) {
                  let n = i.messages[l],
                    r = (0, g.wi)(n, e.message);
                  if (r !== n) {
                    let e = i.messages.slice();
                    (e[l] = r), (p[t].messages = e);
                  }
                }
              }
              return;
            }
            if (e.message.pinned) {
              if (null == i) {
                (i = x(t, [e.message], !1)), (p[t] = i);
                return;
              }
              i.messages = i.messages.slice();
              let l = s().findIndex(i.messages, (e) => e.id === n);
              -1 === l
                ? i.messages.unshift((0, g.e5)(e.message))
                : (i.messages[l] = (0, g.wi)(i.messages[l], e.message)),
                (p[t] = i);
            } else {
              if (null == i) return;
              let e = s().findIndex(i.messages, (e) => e.id === n);
              if (-1 === e) return;
              (i.messages = i.messages.slice()),
                i.messages.splice(e, 1),
                (p[t] = i);
            }
          },
          MESSAGE_DELETE: function (e) {
            let { id: n, channelId: t } = e,
              i = p[t];
            if (
              null == i ||
              0 === s().remove(i.messages, (e) => e.id === n).length
            )
              return !1;
            (i.messages = i.messages.slice()), (p[t] = i);
          },
          MESSAGE_DELETE_BULK: function (e) {
            let { ids: n, channelId: t } = e,
              i = p[t];
            if (null != i)
              i.messages = i.messages.filter((e) => -1 === n.indexOf(e.id));
          },
          LOAD_PINNED_MESSAGES: function (e) {
            let { channelId: n } = e;
            p[n] = x(n, [], !1, !0);
          },
          LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { channelId: n, messages: t } = e;
            p[n] = x(n, t, !0);
          },
          LOAD_PINNED_MESSAGES_FAILURE: function (e) {
            let { channelId: n } = e;
            delete p[n];
          },
          CHANNEL_DELETE: Z,
          THREAD_DELETE: Z,
          RELATIONSHIP_ADD: S,
          RELATIONSHIP_REMOVE: S,
          RELATIONSHIP_UPDATE: S,
          MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: n, channelId: t } = e,
              i = p[t];
            if (null == i) return;
            let l = s().findIndex(i.messages, (e) => e.id === n);
            if (-1 !== l)
              (i.messages = i.messages.slice()),
                (i.messages[l] = (0, c.Cm)(i.messages[l])),
                (p[t] = i);
          },
        }));
    },
    970257: function (e, n, t) {
      t.d(n, {
        a4: function () {
          return s;
        },
        vc: function () {
          return u;
        },
      });
      var i = t(592125),
        l = t(650774),
        r = t(496675),
        a = t(594174),
        o = t(981631);
      function s(e) {
        return (
          null != e &&
          (function (e) {
            if (null == e) return !1;
            let n = e.id,
              t = a.default.getCurrentUser();
            return null != t && t.id !== n && !0 !== e.system && !0;
          })(e.author)
        );
      }
      function u(e) {
        return (
          null != e &&
          s(e) &&
          (function (e) {
            let n = i.Z.getChannel(e);
            if (null == n) return !1;
            if (n.type === o.d4z.DM || n.type === o.d4z.GROUP_DM) return !0;
            if (
              r.Z.canWithPartialContext(o.Plq.MANAGE_MESSAGES, { channelId: e })
            ) {
              let e = l.Z.getMemberCount(n.getGuildId());
              return null != e && e >= 50;
            }
            return !1;
          })(e.getChannelId())
        );
      }
    },
  },
]);
//# sourceMappingURL=c976073f7ea1fd917492.js.map
