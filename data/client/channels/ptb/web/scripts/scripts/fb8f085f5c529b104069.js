"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39476"],
  {
    817718: function (n, t, e) {
      e.d(t, {
        U3: function () {
          return f;
        },
        XM: function () {
          return c;
        },
        hd: function () {
          return u;
        },
        lI: function () {
          return r;
        },
        py: function () {
          return d;
        },
      });
      var i = e(481060),
        o = e(819640),
        l = e(585483),
        a = e(981631);
      let s = () => o.Z.hasLayers() || (0, i.hasAnyModalOpen)(),
        r =
          12633 == e.j
            ? {
                binds: ["right"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!s()) return l.S.dispatch(a.CkL.CAROUSEL_NEXT), !1;
                },
              }
            : null,
        u =
          12633 == e.j
            ? {
                binds: ["left"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!s()) return l.S.dispatch(a.CkL.CAROUSEL_PREV), !1;
                },
              }
            : null,
        c = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (l.S.dispatch(a.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        d = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (l.S.dispatch(a.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        f = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (l.S.hasSubscribers(a.CkL.MODAL_CLOSE))
              return l.S.dispatch(a.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (n, t, e) {
      e.d(t, {
        P: function () {
          return l;
        },
        v: function () {
          return a;
        },
      });
      var i = e(817718),
        o = e(981631);
      let l = {
          [o.EkH.MODAL_CAROUSEL_NEXT]: i.XM,
          [o.EkH.MODAL_CAROUSEL_PREV]: i.py,
          [o.EkH.CLOSE_MODAL]: i.U3,
        },
        a = { [o.EkH.CLOSE_MODAL]: i.U3 };
    },
    822869: function (n, t, e) {
      e.d(t, {
        Ad: function () {
          return m;
        },
        Lb: function () {
          return u;
        },
        ZF: function () {
          return _;
        },
        gP: function () {
          return d;
        },
        mh: function () {
          return E;
        },
        sF: function () {
          return c;
        },
        xp: function () {
          return f;
        },
      });
      var i = e(192379),
        o = e(392711),
        l = e(367907),
        a = e(592125),
        s = e(626135),
        r = e(981631);
      function u(n, t, e) {
        s.default.track(r.rMx.FORWARD_MESSAGE_STARTED, {
          channel_id: n,
          message_id: t,
          source: e,
        });
      }
      function c(n) {
        let {
          channelId: t,
          messageId: e,
          numDestinationChanges: i,
          numQueryChanges: o,
        } = n;
        s.default.track(r.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: t,
          message_id: e,
          num_destination_changes: i,
          num_query_changes: o,
        });
      }
      function d(n) {
        let {
          channelId: t,
          messageId: e,
          hasError: i,
          hasContextMessage: o,
          numDestinations: u,
          numDestinationChanges: c,
          numQueryChanges: d,
          anyDestinationHasSlowmode: f,
          source: _,
        } = n;
        if (
          (s.default.track(r.rMx.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: e,
            has_error: i,
            has_context_message: o,
            num_destinations: u,
            num_destination_changes: c,
            num_query_changes: d,
            any_destination_has_slowmode: f,
          }),
          "message-shortcut" === _)
        ) {
          let n = a.Z.getChannel(t);
          s.default.track(r.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: e,
            ...(0, l.hH)(null == n ? void 0 : n.guild_id),
            ...(0, l.v_)(n),
          });
        }
      }
      function f(n, t) {
        s.default.track(r.rMx.FORWARD_COPY_LINK, {
          channel_id: n,
          message_id: t,
        });
      }
      function _() {
        return i.useMemo(
          () =>
            (0, o.once)((n, t, e) => {
              s.default.track(r.rMx.FORWARD_ADD_RECIPIENT, {
                channel_id: n,
                message_id: t,
                has_query: e,
              });
            }),
          [],
        );
      }
      function E() {
        return i.useMemo(
          () =>
            (0, o.once)((n, t) => {
              s.default.track(r.rMx.FORWARD_EDIT_SEARCH, {
                channel_id: n,
                message_id: t,
              });
            }),
          [],
        );
      }
      function m() {
        return i.useMemo(
          () =>
            (0, o.once)((n, t) => {
              s.default.track(r.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                channel_id: n,
                message_id: t,
              });
            }),
          [],
        );
      }
    },
    868643: function (n, t, e) {
      e.d(t, {
        a: function () {
          return _;
        },
        h: function () {
          return f;
        },
      }),
        e(789020);
      var i = e(192379),
        o = e(442837),
        l = e(430198),
        a = e(592125),
        s = e(430824),
        r = e(630388),
        u = e(981631);
      let c =
        u.iLy.CROSSPOSTED |
        u.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD |
        u.iLy.GUILD_FEED_HIDDEN |
        u.iLy.HAS_SNAPSHOT |
        u.iLy.HAS_THREAD |
        u.iLy.IS_CROSSPOST |
        u.iLy.IS_VOICE_MESSAGE |
        u.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING |
        u.iLy.SUPPRESS_EMBEDS |
        u.iLy.SUPPRESS_NOTIFICATIONS |
        u.iLy.URGENT;
      function d(n) {
        return (
          (!!(n.state !== u.yb.SEND_FAILED && u.V$x.FORWARDABLE.has(n.type)) &&
            null == n.poll &&
            null == n.activity &&
            null == n.call &&
            null == n.activityInstance &&
            0 === (0, r.Ge)(n.flags, c)) ||
          !1
        );
      }
      function f(n) {
        var t;
        if (!d(n)) return !1;
        let e =
          null === (t = a.Z.getChannel(n.channel_id)) || void 0 === t
            ? void 0
            : t.guild_id;
        return (
          !(null != e && l.Z.isChannelOrThreadParentGated(e, n.channel_id)) &&
          !0
        );
      }
      function _(n) {
        let t = (0, o.e7)([s.Z, l.Z, a.Z], () => {
          var t, e;
          if (null == n) return !0;
          let i =
            null === (t = a.Z.getChannel(n.channel_id)) || void 0 === t
              ? void 0
              : t.guild_id;
          return (
            !!(
              null != i &&
              (null === (e = s.Z.getGuild(i)) || void 0 === e
                ? void 0
                : e.hasFeature(u.oNc.FORWARDING_DISABLED))
            ) ||
            (null != i && l.Z.isChannelOrThreadParentGated(i, n.channel_id))
          );
        });
        return i.useMemo(() => !t && null != n && d(n), [t, n]);
      }
    },
    912332: function (n, t, e) {
      e.d(t, {
        Np: function () {
          return u;
        },
        l8: function () {
          return s;
        },
        mc: function () {
          return r;
        },
        so: function () {
          return a;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(481060),
        l = e(822869);
      let a = "forward-modal";
      function s(n) {
        let {
          message: t,
          source: s,
          initialSelectedDestinations: r = [],
          forwardOptions: u,
          onRequestSent: c,
        } = n;
        (0, l.Lb)(t.channel_id, t.id, s),
          (0, o.openModalLazy)(
            async () => {
              let { ForwardModal: n } = await Promise.all([
                e.e("6380"),
                e.e("88054"),
              ]).then(e.bind(e, 930864));
              return (e) =>
                (0, i.jsx)(n, {
                  ...e,
                  message: t,
                  initialSelectedDestinations: r,
                  forwardOptions: u,
                  onRequestSent: c,
                });
            },
            { modalKey: a },
          );
      }
      function r() {
        (0, o.closeModal)(a);
      }
      function u(n) {
        let { message: t, failedDestinations: l, forwardOptions: a } = n;
        (0, o.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: n } = await e
            .e("86590")
            .then(e.bind(e, 384331));
          return (e) =>
            (0, i.jsx)(n, {
              ...e,
              message: t,
              failedDestinations: l,
              forwardOptions: a,
            });
        });
      }
    },
    73249: function (n, t, e) {
      e(47120);
      var i = e(200651),
        o = e(192379),
        l = e(120356),
        a = e.n(l),
        s = e(481060),
        r = e(299206),
        u = e(346610),
        c = e(868643),
        d = e(912332),
        f = e(378409),
        _ = e(850908),
        E = e(695346),
        m = e(572004),
        S = e(424218),
        h = e(49012),
        p = e(358085),
        g = e(998502),
        C = e(254109),
        I = e(212459),
        M = e(369171),
        O = e(701865),
        T = e(388032),
        y = e(197736);
      function x() {
        (0, s.closeModal)(O.U);
      }
      function L(n) {
        let { onClick: t, tooltipText: e, children: o, selected: l, ...r } = n;
        return (0, i.jsx)(s.Tooltip, {
          text: e,
          children: (n) => {
            let { ...e } = n;
            return (0, i.jsx)(s.Button, {
              ...e,
              onClick: t,
              look: s.ButtonLooks.BLANK,
              size: s.ButtonSizes.ICON,
              color: s.ButtonColors.CUSTOM,
              className: a()(y.actionButton, { [y.selected]: l }),
              wrapperClassName: y.actionButtonWrapper,
              innerClassName: y.actionButtonInner,
              grow: !1,
              ...r,
              children: o,
            });
          },
        });
      }
      function v() {
        let { zoomed: n, setZoomed: t } = (0, I.Y)();
        return (0, i.jsx)(L, {
          onClick: () => {
            (0, C.yg)(
              n ? C.uG.ZOOM_OUT_BUTTON_PRESSED : C.uG.ZOOM_IN_BUTTON_PRESSED,
            ),
              t(!n);
          },
          tooltipText: n
            ? T.intl.string(T.t.vOFof3)
            : T.intl.string(T.t.Kt4gZ2),
          children: n
            ? (0, i.jsx)(s.MagnifyingGlassMinusIcon, {})
            : (0, i.jsx)(s.MagnifyingGlassPlusIcon, {}),
        });
      }
      function A(n) {
        var t, e;
        let { item: l } = n,
          a =
            null === (t = l.sourceMetadata) || void 0 === t
              ? void 0
              : t.message,
          r =
            null === (e = l.sourceMetadata) || void 0 === e
              ? void 0
              : e.identifier,
          f = o.useCallback(() => {
            if (null != a && null != r) {
              if (((0, C.yg)(C.uG.FORWARD_PRESSED), "embed" === r.type)) {
                (0, d.l8)({
                  message: a,
                  source: "media-viewer",
                  forwardOptions: { onlyEmbedIndices: [r.embedIndex] },
                  onRequestSent: x,
                });
                return;
              }
              (0, d.l8)({
                message: a,
                source: "media-viewer",
                forwardOptions: { onlyAttachmentIds: [r.attachmentId] },
                onRequestSent: x,
              });
            }
          }, [a, r]),
          { canForwardMessages: _ } = (0, u.yk)(
            { location: "ForwardLink" },
            { autoTrackExposure: !1 },
          );
        return null != a && _ && (0, c.h)(a)
          ? (0, i.jsx)(L, {
              onClick: f,
              tooltipText: T.intl.string(T.t.I3ltXF),
              children: (0, i.jsx)(s.ArrowAngleRightUpIcon, {}),
            })
          : null;
      }
      function D(n) {
        let { item: t } = n,
          [e, l] = o.useState(!1);
        if (
          !(
            "VIDEO" === t.type ||
            (p.isPlatformEmbedded &&
              null == t.children &&
              "IMAGE" === t.type &&
              (0, f.gS)(t.url))
          )
        )
          return null;
        let a = (0, f.s$)(t.url);
        async function r() {
          if (
            ((0, C.yg)(C.uG.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type && (0, h.q)({ href: a }),
            "IMAGE" === t.type)
          ) {
            l(!0);
            try {
              await g.ZP.saveImage(a),
                (0, s.showToast)(
                  (0, s.createToast)(
                    T.intl.string(T.t.cqpdJS),
                    s.ToastType.SUCCESS,
                  ),
                );
            } catch (n) {
              (0, s.showToast)(
                (0, s.createToast)(
                  T.intl.string(T.t["8Ve/S0"]),
                  s.ToastType.FAILURE,
                ),
              );
            } finally {
              l(!1);
            }
          }
        }
        return (0, i.jsx)(L, {
          onClick: r,
          tooltipText: T.intl.string(
            "VIDEO" === t.type ? T.t.JVuuz8 : T.t["S/xNKS"],
          ),
          submitting: e,
          children: (0, i.jsx)(s.DownloadIcon, {}),
        });
      }
      function b(n) {
        var t;
        let { item: e } = n;
        if (!(0, f.Jj)(e.url)) return null;
        let o = (0, f.s$)(
          null !== (t = e.original) && void 0 !== t ? t : e.url,
        );
        return (0, i.jsx)(L, {
          onClick: () => {
            (0, C.yg)(C.uG.OPEN_LINK_PRESSED), (0, h.q)({ href: o });
          },
          tooltipText: T.intl.string(T.t.q5jLJC),
          children: (0, i.jsx)(s.WindowLaunchIcon, {}),
        });
      }
      function R(n) {
        var t, e;
        let {
            item: o,
            canCopyImage: l,
            canCopyLink: a,
            onClose: u,
            onSelect: c,
          } = n,
          d =
            (null === (e = o.sourceMetadata) || void 0 === e
              ? void 0
              : null === (t = e.identifier) || void 0 === t
                ? void 0
                : t.type) === "attachment"
              ? o.sourceMetadata.identifier.attachmentId
              : null,
          E = (0, r.Z)({ id: d, label: T.intl.string(T.t.nwg3lZ) }),
          m = (function (n) {
            var t;
            let { alt: e, sourceMetadata: o, width: l, height: a } = n,
              r = N(T.intl.string(T.t.ILJuBg), "name", { subtextLineClamp: 1 }),
              u = N(T.intl.string(T.t.sPO3io), "size"),
              c = N(T.intl.string(T.t.eOB2eX), "alt", { subtextLineClamp: 2 });
            if (
              (null == o
                ? void 0
                : null === (t = o.identifier) || void 0 === t
                  ? void 0
                  : t.type) !== "attachment"
            )
              return null;
            let d = (0, _.Z)(o.identifier),
              f = (0, S.BU)(o.identifier.size / 1e3);
            return (0, i.jsxs)(
              s.MenuItem,
              {
                id: "media-viewer-details",
                label: T.intl.string(T.t.GoCQxc),
                children: [
                  r(d),
                  u(
                    T.intl.formatToPlainString(T.t.DTdonJ, {
                      width: l,
                      height: a,
                      fileSize: f,
                    }),
                  ),
                  c(e),
                ],
              },
              "media-viewer-details",
            );
          })(o);
        async function h() {
          (0, C.yg)(C.uG.COPY_IMAGE_PRESSED);
          let n = (0, f.s$)(o.url);
          try {
            await g.ZP.copyImage(n),
              (0, s.showToast)(
                (0, s.createToast)(
                  T.intl.string(T.t.bhUpvL),
                  s.ToastType.SUCCESS,
                ),
              );
          } catch (n) {
            (0, s.showToast)(
              (0, s.createToast)(
                T.intl.string(T.t.PTPbj4),
                s.ToastType.FAILURE,
              ),
            );
          }
        }
        return (0, i.jsxs)(s.Menu, {
          navId: "image-menu",
          "aria-label": "placeholder",
          onClose: u,
          onSelect: c,
          children: [
            m,
            E,
            (0, i.jsxs)(s.MenuGroup, {
              children: [
                l &&
                  (0, i.jsx)(
                    s.MenuItem,
                    {
                      label: T.intl.string(T.t.tvUqWl),
                      id: "media-viewer-copy-image",
                      icon: s.CopyIcon,
                      action: h,
                    },
                    "media-viewer-copy-image",
                  ),
                a &&
                  (0, i.jsx)(
                    s.MenuItem,
                    {
                      id: "media-viewer-copy-link",
                      label: T.intl.string(T.t.WqhZsr),
                      icon: s.LinkIcon,
                      action: function () {
                        var n;
                        (0, C.yg)(C.uG.COPY_LINK_PRESSED);
                        let t = (0, f.s$)(
                          null !== (n = o.original) && void 0 !== n ? n : o.url,
                        );
                        p.isPlatformEmbedded
                          ? g.ZP.copy(t)
                          : window.navigator.clipboard.writeText(t),
                          (0, s.showToast)(
                            (0, s.createToast)(
                              T.intl.string(T.t["L/PwZW"]),
                              s.ToastType.SUCCESS,
                            ),
                          );
                      },
                    },
                    "media-viewer-copy-link",
                  ),
              ],
            }),
          ],
        });
      }
      function N(n, t, e) {
        let l = o.useCallback((n) => {
          (0, m.JG)(n),
            (0, s.showToast)({
              message: T.intl.string(T.t.mGZ66O),
              type: s.ToastType.SUCCESS,
              id: "media-viewer-detail-copied",
            });
        }, []);
        return (o) =>
          null != o
            ? (0, i.jsx)(
                s.MenuItem,
                { action: () => l(o), label: n, subtext: o, id: t, ...e },
                t,
              )
            : null;
      }
      function j(n) {
        var t, e;
        let { item: l } = n,
          [a, r] = o.useState(!1),
          u = E.Sb.useSetting(),
          c =
            "IMAGE" === l.type &&
            p.isPlatformEmbedded &&
            null == l.children &&
            g.ZP.canCopyImage() &&
            (0, f.Lz)(l.url),
          d = (0, f.Jj)(l.url);
        return u ||
          c ||
          d ||
          (null === (e = l.sourceMetadata) || void 0 === e
            ? void 0
            : null === (t = e.identifier) || void 0 === t
              ? void 0
              : t.type) === "attachment"
          ? (0, i.jsx)(s.Popout, {
              shouldShow: a,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => r(!1),
              animation: s.Popout.Animation.NONE,
              renderPopout: () =>
                (0, i.jsx)(R, {
                  item: l,
                  canCopyImage: c,
                  canCopyLink: d,
                  onClose: () => r(!1),
                }),
              children: (n) => {
                let { onClick: t } = n;
                return (0, i.jsx)(L, {
                  tooltipText: T.intl.string(T.t.UKOtz8),
                  onClick: () => {
                    (0, C.yg)(C.uG.MORE_BUTTON_PRESSED), r(!a);
                  },
                  selected: a,
                  children: (0, i.jsx)(s.MoreHorizontalIcon, {}),
                });
              },
            })
          : null;
      }
      t.Z = o.memo(function (n) {
        let { item: t, hideMediaOptions: e } = n;
        return (
          ("IMAGE" === t.type || !e) &&
          (0, i.jsx)(M.ZP, {
            children: (n) =>
              (0, i.jsxs)("div", {
                className: a()(y.actionButtons, n),
                onMouseDown: (n) => n.stopPropagation(),
                children: [
                  "IMAGE" === t.type && (0, i.jsx)(v, {}),
                  !e &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(A, { item: t }),
                        (0, i.jsx)(D, { item: t }),
                        (0, i.jsx)(b, { item: t }),
                        (0, i.jsx)(j, { item: t }),
                      ],
                    }),
                ],
              }),
          })
        );
      });
    },
    97594: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return I;
          },
        }),
        e(47120);
      var i = e(200651),
        o = e(192379),
        l = e(120356),
        a = e.n(l),
        s = e(846519),
        r = e(481060),
        u = e(376641),
        c = e(714338),
        d = e(585483),
        f = e(254109),
        _ = e(212459),
        E = e(73249),
        m = e(730606),
        S = e(369171),
        h = e(860153),
        p = e(981631),
        g = e(388032),
        C = e(176598);
      function I(n) {
        let {
            onClose: t,
            items: e,
            startingIndex: l,
            shouldRedactExplicitContent: I,
            shouldHideMediaOptions: M = !1,
            className: O,
            transitionState: T,
            ...y
          } = n,
          [x, L] = o.useState(null != l ? l : 0),
          [v, A] = o.useState(!1),
          [D, b] = o.useState(!0),
          R = o.useRef(null);
        o.useEffect(() => {
          if (null != t)
            return (
              d.S.subscribe(p.CkL.MEDIA_MODAL_CLOSE, t),
              () => {
                d.S.unsubscribe(p.CkL.MEDIA_MODAL_CLOSE, t);
              }
            );
        }, [t]),
          o.useEffect(
            () => (
              T === r.ModalTransitionState.ENTERED &&
                (c.Z.disable(), c.Z.enableTemp(u.P)),
              T === r.ModalTransitionState.HIDDEN &&
                (c.Z.disable(), c.Z.enableTemp(u.v)),
              () => {
                c.Z.disableTemp();
              }
            ),
            [T],
          );
        let N = o.useCallback((n) => {
            L(n), (0, f.yg)(f.uG.SELECTED_ITEM_CHANGE);
          }, []),
          j = o.useMemo(
            () => ({
              zoomed: v,
              setZoomed: A,
              accessoryVisibility: (function (n, t, e) {
                return (null != n || (n = r.ModalTransitionState.HIDDEN),
                n === r.ModalTransitionState.ENTERING ||
                  n >= r.ModalTransitionState.EXITING)
                  ? S.UE.FORCE_HIDDEN
                  : !e || t
                    ? S.UE.VISIBLE
                    : S.UE.INACTIVE;
              })(null != T ? T : void 0, D, v),
            }),
            [v, T, D],
          ),
          P = o.useCallback(() => {
            var n;
            b(!0),
              (null !== (n = R.current) && void 0 !== n) ||
                (R.current = new s.sW(1e3, () => b(!1))),
              R.current.delay();
          }, []),
          k = o.useCallback(() => {
            P(), null == t || t();
          }, [P, t]),
          B = e[x];
        return (0, i.jsx)(r.ThemeProvider, {
          theme: p.BRd.DARK,
          children: (n) =>
            (0, i.jsx)(r.ModalRoot, {
              hideShadow: !0,
              className: a()(C.carouselModal, n),
              transitionState: T,
              ...y,
              size: r.ModalSize.DYNAMIC,
              fullscreenOnMobile: !1,
              onMouseMove: P,
              onMouseDown: k,
              "aria-label": g.intl.string(g.t.AMTX3t),
              children: (0, i.jsxs)(_.z.Provider, {
                value: j,
                children: [
                  (0, i.jsx)(h.Z, { item: B, onClose: t }),
                  (0, i.jsxs)(S.c7, {
                    children: [
                      (0, i.jsx)(m.ZP, {
                        items: e,
                        startIndex: x,
                        onIndexChange: N,
                        shouldRedactExplicitContent: I,
                        shouldHideMediaOptions: M,
                      }),
                      (0, i.jsx)(E.Z, { item: B, hideMediaOptions: M }),
                    ],
                  }),
                ],
              }),
            }),
        });
      }
    },
    860153: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return p;
        },
      });
      var i = e(200651),
        o = e(192379),
        l = e(120356),
        a = e.n(l),
        s = e(442837),
        r = e(481060),
        u = e(700582),
        c = e(372900),
        d = e(318713),
        f = e(123145),
        _ = e(592125),
        E = e(369171),
        m = e(388032),
        S = e(795938);
      let h = o.memo(function (n) {
        let { message: t } = n,
          e = (0, s.e7)([_.Z], () => _.Z.getChannel(t.channel_id));
        return null == e
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)("div", {
                className: S.messageContents,
                children: (0, i.jsxs)(c.Z.Provider, {
                  value: e.guild_id,
                  children: [
                    (0, i.jsx)(u.Z, { user: t.author }),
                    (0, i.jsx)(r.FocusBlock, {
                      children: (0, i.jsx)(f.Z, { message: t, channel: e }),
                    }),
                    (0, i.jsx)(d.Z, {
                      timestamp: t.timestamp,
                      className: S.timestamp,
                    }),
                  ],
                }),
              }),
            });
      });
      function p(n) {
        var t;
        let { item: e, onClose: o } = n,
          l =
            null === (t = e.sourceMetadata) || void 0 === t
              ? void 0
              : t.message;
        return (0, i.jsx)(E.ZP, {
          children: (n) =>
            (0, i.jsxs)("div", {
              className: a()(S.topBar, n),
              children: [
                (0, i.jsx)(r.Button, {
                  look: r.ButtonLooks.BLANK,
                  color: r.ButtonColors.CUSTOM,
                  size: r.ButtonSizes.ICON,
                  className: S.closeButton,
                  innerClassName: S.closeButtonInner,
                  "aria-label": m.intl.string(m.t.Xvtztr),
                  onClick: o,
                  children: (0, i.jsx)(r.XSmallIcon, {}),
                }),
                null != l && (0, i.jsx)(h, { message: l }),
              ],
            }),
        });
      }
    },
    850908: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return i;
        },
      });
      function i(n) {
        if (null != n.title && null != n.filename) {
          let t = n.filename.lastIndexOf("."),
            e = t > 0 ? n.filename.substr(t) : "";
          return n.title + e;
        }
        return n.filename;
      }
    },
    197736: function (n, t, e) {
      n.exports = {
        actionButtons: "actionButtons_dda074",
        actionButton: "actionButton_dda074",
        selected: "selected_dda074",
        actionButtonWrapper: "actionButtonWrapper_dda074",
        actionButtonInner: "actionButtonInner_dda074",
      };
    },
    176598: function (n, t, e) {
      n.exports = { carouselModal: "carouselModal_c319f9" };
    },
    795938: function (n, t, e) {
      n.exports = {
        topBar: "topBar_bf8df0",
        messageContents: "messageContents_bf8df0",
        timestamp: "timestamp_bf8df0",
        closeButton: "closeButton_bf8df0",
        closeButtonInner: "closeButtonInner_bf8df0",
      };
    },
  },
]);
//# sourceMappingURL=fb8f085f5c529b104069.js.map
