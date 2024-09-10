"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4530"],
  {
    247272: function (e, a, t) {
      t.d(a, {
        C: function () {
          return l;
        },
        x: function () {
          return s;
        },
      }),
        t(47120);
      var i = t(570140),
        n = t(93127);
      function s(e) {
        let {
          omitUserIds: a,
          guild: t,
          channel: s,
          applicationId: l,
          inviteTargetType: r,
        } = e;
        return (0, n.W)().then(() => {
          i.Z.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != a ? a : new Set(),
            guild: t,
            channel: s,
            applicationId: l,
            inviteTargetType: r,
          });
        });
      }
      function l(e) {
        i.Z.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e });
      }
    },
    899201: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return z;
          },
        }),
        t(47120),
        t(653041);
      var i = t(735250),
        n = t(470079),
        s = t(120356),
        l = t.n(s),
        r = t(218887),
        o = t.n(r),
        c = t(990547),
        d = t(442837),
        u = t(481060),
        m = t(493683),
        I = t(247272),
        E = t(166459),
        _ = t(966390),
        f = t(476326),
        h = t(213609),
        g = t(835473),
        S = t(43267),
        p = t(933557),
        C = t(957730),
        T = t(592125),
        N = t(703558),
        b = t(430824),
        M = t(751771),
        w = t(496675),
        A = t(699516),
        x = t(117530),
        v = t(594174),
        y = t(626135),
        Z = t(768581),
        D = t(971130),
        R = t(358085),
        j = t(624138),
        P = t(591759),
        O = t(51144),
        k = t(998502),
        U = t(317381),
        B = t(981631),
        L = t(245335),
        G = t(689938),
        F = t(826373);
      async function H(e) {
        return e.type === D.bm.DM || e.type === D.bm.FRIEND
          ? await m.Z.ensurePrivateChannel(e.item.id)
          : e.item.id;
      }
      function z(e) {
        let {
            applicationId: a,
            mediaUrl: t,
            channelId: s,
            onClose: l,
            transitionState: r,
            ...m
          } = e,
          S = (0, d.e7)([U.ZP], () =>
            U.ZP.getSelfEmbeddedActivityForChannel(s),
          );
        (0, h.Z)({
          type: c.ImpressionTypes.MODAL,
          name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
          properties: {
            application_id: a,
            activity_session_id: null == S ? void 0 : S.compositeInstanceId,
          },
        });
        let [p] = (0, g.Z)([a]),
          b = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
          [A, Z] = n.useState(""),
          [R, j] = n.useState([]),
          [O, k] = n.useState(null),
          [z, W] = n.useState(null);
        n.useEffect(() => {
          (async () => {
            let e = P.Z.toURLSafe(t);
            if (null == e) return;
            let a = o().basename(e.pathname),
              i = await fetch(t),
              n = new File([await i.arrayBuffer()], a);
            k(n);
            let s = new FileReader();
            (s.onload = () => {
              var e;
              return W(
                null == s
                  ? void 0
                  : null === (e = s.result) || void 0 === e
                    ? void 0
                    : e.toString(),
              );
            }),
              s.readAsDataURL(n);
          })();
        }, [t, k]);
        let Y = (0, d.Wu)([M.Z, w.Z], () =>
          M.Z.getInviteSuggestionRows().filter(
            (e) =>
              e.type === D.bm.FRIEND ||
              e.type === D.bm.DM ||
              w.Z.can(B.Plq.ATTACH_FILES, e.item),
          ),
        );
        n.useEffect(() => {
          (0, I.x)({
            omitUserIds: new Set(),
            applicationId: a,
            inviteTargetType: L.Iq.EMBEDDED_APPLICATION,
          });
        }, [a]),
          n.useEffect(() => (0, I.C)(A), [A]);
        let K = n.useCallback(async () => {
          await Promise.all(
            R.map(async (e) => {
              let a = Y.find((a) => a.item.id === e);
              if (null != a) {
                let e = await H(a);
                E.Z.clearAll(e, N.d.ChannelMessage);
              }
            }),
          );
        }, [R, Y]);
        n.useEffect(() => {
          r === u.ModalTransitionState.EXITING && K();
        }, [K, r]);
        let X = n.useCallback(async () => {
            await K(), l();
          }, [l, K]),
          Q = n.useCallback(async () => {
            let e = 0,
              t = 0,
              i = 0;
            async function n(n) {
              switch (n.type) {
                case D.bm.DM:
                case D.bm.FRIEND:
                  e++;
                  break;
                case D.bm.GROUP_DM:
                  t++;
                  break;
                case D.bm.CHANNEL:
                  i++;
              }
              let s = await H(n),
                l = x.Z.getUploads(s, N.d.ChannelMessage),
                r = T.Z.getChannel(s);
              _.Z.uploadFiles({
                channelId: s,
                uploads: l,
                parsedMessage:
                  null != p
                    ? C.ZP.parse(
                        r,
                        G.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format(
                          { applicationName: "**".concat(p.name, "**") },
                        ),
                      )
                    : void 0,
                draftType: N.d.ChannelMessage,
                options: { applicationId: a },
              }),
                E.Z.clearAll(s, N.d.ChannelMessage);
            }
            let s = M.Z.getInviteSuggestionRows()
              .filter((e) => R.includes(e.item.id))
              .map((e) => n(e));
            y.default.track(B.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
              user_id: null == b ? void 0 : b.id,
              application_id: a,
              activity_session_id: null == S ? void 0 : S.compositeInstanceId,
              n_users: e,
              n_gdms: t,
              n_channels: i,
            });
            try {
              await Promise.all(s),
                null != p &&
                  (0, u.showToast)(
                    (0, u.createToast)(
                      G.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format(
                        { applicationName: p.name },
                      ),
                      u.ToastType.SUCCESS,
                    ),
                  );
            } catch (e) {
              throw (
                ((0, u.showToast)(
                  (0, u.createToast)(
                    G.Z.Messages.UPLOAD_ERROR_TITLE,
                    u.ToastType.FAILURE,
                  ),
                ),
                e)
              );
            }
            X();
          }, [S, p, a, R, X, b]),
          J = (e) => {
            let a = async () => {
              let a = await H(e),
                t = [...R];
              if (t.includes(e.item.id))
                E.Z.clearAll(a, N.d.ChannelMessage),
                  (t = t.filter((a) => a !== e.item.id));
              else {
                if (t.length >= 10) return;
                null != O &&
                  (E.Z.addFile({
                    file: { file: O, platform: f.ow.WEB },
                    channelId: a,
                    draftType: N.d.ChannelMessage,
                  }),
                  t.push(e.item.id));
              }
              j(t);
            };
            return () => a();
          };
        return null == z
          ? (0, i.jsx)(u.Spinner, {})
          : (0, i.jsxs)(u.ModalRoot, {
              transitionState: r,
              ...m,
              className: F.modalRoot,
              children: [
                (0, i.jsxs)(u.ModalHeader, {
                  className: F.header,
                  children: [
                    (0, i.jsxs)("div", {
                      className: F.headerTitle,
                      children: [
                        (0, i.jsx)(u.Heading, {
                          variant: "heading-md/semibold",
                          children:
                            G.Z.Messages
                              .EMBEDDED_ACTIVITIES_SHARE_MOMENT_HEADING,
                        }),
                        (0, i.jsx)(u.ModalCloseButton, { onClick: X }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("img", {
                        alt: t,
                        className: F.img,
                        src: z,
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(u.ModalContent, {
                  className: F.modalContent,
                  children: [
                    (0, i.jsx)(u.SearchBox, {
                      className: F.searchBar,
                      placeholder: G.Z.Messages.SEARCH,
                      label: G.Z.Messages.SEARCH,
                      searchTerm: A,
                      onChange: (e) => Z(e),
                      onClear: () => Z(""),
                    }),
                    Y.map((e, a) =>
                      (0, i.jsxs)(
                        n.Fragment,
                        {
                          children: [
                            0 === a
                              ? null
                              : (0, i.jsx)("div", { className: F.rowDivider }),
                            (0, i.jsx)(V, {
                              row: e,
                              onClick: J(e),
                              checked: R.includes(e.item.id),
                              disabled:
                                !R.includes(e.item.id) && R.length >= 10,
                            }),
                          ],
                        },
                        e.item.id,
                      ),
                    ),
                  ],
                }),
                (0, i.jsx)(u.ModalFooter, {
                  className: F.footer,
                  children: (0, i.jsxs)("div", {
                    className: F.copySendBar,
                    children: [
                      (0, i.jsx)(q, {
                        applicationId: a,
                        activitySessionId:
                          null == S ? void 0 : S.compositeInstanceId,
                        mediaUrl: t,
                      }),
                      R.length >= 10
                        ? (0, i.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            children:
                              G.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_LIMIT_WARNING.format(
                                { maxShares: 10 },
                              ),
                          })
                        : null,
                      (0, i.jsx)(u.Button, {
                        onClick: Q,
                        disabled: R.length <= 0,
                        children: G.Z.Messages.SEND,
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      function V(e) {
        let { row: a, onClick: t, checked: n, disabled: s } = e,
          r = null,
          o = null,
          c = null;
        switch (a.type) {
          case D.bm.DM:
          case D.bm.FRIEND:
            (r = (0, i.jsx)(u.Avatar, {
              size: u.AvatarSizes.SIZE_40,
              src: a.item.getAvatarURL(null, 128, !1),
              "aria-label": a.item.username,
            })),
              (o = O.ZP.getName(a.item)),
              (c = O.ZP.getUserTag(a.item));
            break;
          case D.bm.GROUP_DM: {
            let e = (0, S.x)(a.item),
              t = (0, p.F6)(a.item, v.default, A.Z);
            (r = (0, i.jsx)(u.Avatar, {
              src: e,
              "aria-label": t,
              size: u.AvatarSizes.SIZE_40,
            })),
              (o = (0, p.F6)(a.item, v.default, A.Z));
            break;
          }
          case D.bm.CHANNEL: {
            let e = a.item,
              t = b.Z.getGuild(e.guild_id);
            if (null == t) return null;
            if (
              ((o = "#".concat((0, p.F6)(e, v.default, A.Z))),
              (c = t.name),
              null != t.icon)
            ) {
              let a = Z.ZP.getGuildIconURL({
                id: e.guild_id,
                icon: t.icon,
                size: 40,
              });
              r = (0, i.jsx)(u.Avatar, {
                src: a,
                "aria-label": o,
                size: u.AvatarSizes.SIZE_40,
              });
            } else {
              let e = (0, j.Zg)(t.name);
              r = (0, i.jsx)("div", {
                className: F.acronym,
                "aria-hidden": !0,
                children: (0, i.jsx)(u.Text, {
                  variant: "text-md/semibold",
                  children: e,
                }),
              });
            }
          }
        }
        return (0, i.jsxs)(u.Clickable, {
          onClick: t,
          className: l()(F.rowContainer, { [F.disabled]: s }),
          children: [
            (0, i.jsxs)("div", {
              className: F.rowLeft,
              children: [
                (0, i.jsx)("div", { className: F.rowAvatar, children: r }),
                (0, i.jsxs)("div", {
                  className: F.rowNameContainer,
                  children: [
                    (0, i.jsx)(u.Text, {
                      variant: "text-md/semibold",
                      className: l()(F.rowName, { [F.disabled]: s }),
                      children: o,
                    }),
                    (0, i.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      className: l()(F.rowSubName, { [F.disabled]: s }),
                      children: c,
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(u.Checkbox, {
              disabled: s,
              value: n,
              type: u.Checkbox.Types.INVERTED,
              displayOnly: !0,
              className: F.rowRight,
            }),
          ],
        });
      }
      function q(e) {
        let { applicationId: a, mediaUrl: t, activitySessionId: s } = e,
          [l, r] = n.useState(!1),
          o = (0, d.e7)([v.default], () => v.default.getCurrentUser());
        async function c() {
          y.default.track(B.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
            user_id: null == o ? void 0 : o.id,
            application_id: a,
            activity_session_id: s,
          }),
            await k.ZP.copyImage(t),
            r(!0);
        }
        return (n.useEffect(() => {
          let e;
          return (
            l &&
              (e = setTimeout(() => {
                r(!1);
              }, 1e3)),
            () => {
              null != e && clearTimeout(e);
            }
          );
        }, [l]),
        R.isPlatformEmbedded && k.ZP.canCopyImage(t))
          ? (0, i.jsxs)(u.Button, {
              look: u.Button.Looks.LINK,
              color: u.Button.Colors.LINK,
              onClick: c,
              innerClassName: F.copyButton,
              children: [
                l
                  ? (0, i.jsx)(u.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                    })
                  : (0, i.jsx)(u.CopyIcon, {
                      size: "xs",
                      color: "currentColor",
                    }),
                l ? G.Z.Messages.COPIED : G.Z.Messages.COPY_IMAGE_MENU_ITEM,
              ],
            })
          : (0, i.jsx)("div", {});
      }
    },
    751771: function (e, a, t) {
      let i, n, s, l, r, o, c;
      t(47120);
      var d,
        u,
        m,
        I,
        E = t(442837),
        _ = t(570140),
        f = t(823385),
        h = t(814443),
        g = t(823379),
        S = t(971130),
        p = t(709054),
        C = t(592125),
        T = t(496675),
        N = t(699516),
        b = t(981631),
        M = t(245335);
      let w = new Set(),
        A = [],
        x = new Map();
      function v(e) {
        let a = new Set(),
          t = null == l || c === M.Iq.EMBEDDED_APPLICATION ? void 0 : l.id,
          i = (0, S.rh)(w, t);
        for (let e of (null != i && !N.Z.isBlocked(i.id) && a.add(i.id),
        h.Z.getUserAffinitiesUserIds()))
          a.add(e);
        let n = new Set();
        return (
          c === M.Iq.EMBEDDED_APPLICATION &&
            f.Z.getChannelHistory()
              .map((e) => C.Z.getChannel(e))
              .filter(g.lm)
              .filter((e) => e.type === b.d4z.GUILD_TEXT)
              .filter((e) => T.Z.can(b.Plq.SEND_MESSAGES, e))
              .slice(0, 3)
              .forEach((e) => n.add(e.id)),
          (0, S.an)({
            query: e,
            omitUserIds: w,
            suggestedUserIds: a,
            maxRowsWithoutQuery: 100,
            omitGuildId: t,
            suggestedChannelIds: n,
            inviteTargetType: c,
          })
        );
      }
      function y(e) {
        (A = e),
          (x = new Map()),
          e.forEach((e, a) => {
            x.set(e, { index: a });
          });
      }
      class Z extends (d = E.ZP.Store) {
        initialize() {
          this.waitFor(N.Z, h.Z);
        }
        getInviteSuggestionRows() {
          return A;
        }
        getTotalSuggestionsCount() {
          return n;
        }
        getInitialCounts() {
          return i;
        }
        getSelectedInviteMetadata(e) {
          let a = x.get(e),
            t = h.Z.getUserAffinitiesUserIds();
          return null != a
            ? {
                rowNum: a.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: A.length,
                numAffinityConnections: t.size,
                isFiltered: s,
              }
            : null;
        }
      }
      (I = "InviteSuggestionsStore"),
        (m = "displayName") in (u = Z)
          ? Object.defineProperty(u, m, {
              value: I,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[m] = I),
        (a.Z = new Z(_.Z, {
          LOAD_INVITE_SUGGESTIONS: function (e) {
            let {
              omitUserIds: a,
              guild: t,
              channel: d,
              applicationId: u,
              inviteTargetType: m,
            } = e;
            (l = null != d ? t : null), (r = d), (o = u), (c = m);
            let I = N.Z.getRelationships(),
              E = p.default.keys(I).filter((e) => I[e] === b.OGo.BLOCKED);
            (w = new Set([
              ...a,
              ...E,
              ...(0, S.Sz)({
                channel: r,
                applicationId: o,
                inviteTargetType: m,
              }),
            ])),
              (s = !1);
            let { rows: _, counts: f } = v("");
            y(_), (i = f), (n = A.length);
          },
          INVITE_SUGGESTIONS_SEARCH: function (e) {
            let { query: a } = e;
            s = "" !== a;
            let { rows: t } = v(a);
            y(t);
          },
        }));
    },
    826373: function (e, a, t) {
      e.exports = {
        modalRoot: "modalRoot_aca48b",
        header: "header_aca48b",
        headerTitle: "headerTitle_aca48b",
        modalContent: "modalContent_aca48b",
        searchBar: "searchBar_aca48b",
        rowDivider: "rowDivider_aca48b",
        rowContainer: "rowContainer_aca48b",
        disabled: "disabled_aca48b",
        rowLeft: "rowLeft_aca48b",
        rowAvatar: "rowAvatar_aca48b",
        rowNameContainer: "rowNameContainer_aca48b",
        rowName: "rowName_aca48b",
        rowSubName: "rowSubName_aca48b",
        rowRight: "rowRight_aca48b",
        footer: "footer_aca48b",
        copySendBar: "copySendBar_aca48b",
        copyButton: "copyButton_aca48b",
        acronym: "acronym_aca48b",
        img: "img_aca48b",
      };
    },
  },
]);
//# sourceMappingURL=f3b8bdb49a9fc734c1a7.js.map
