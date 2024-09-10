"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60133"],
  {
    247272: function (e, t, i) {
      i.d(t, {
        C: function () {
          return l;
        },
        x: function () {
          return s;
        },
      }),
        i(47120);
      var a = i(570140),
        n = i(93127);
      function s(e) {
        let {
          omitUserIds: t,
          guild: i,
          channel: s,
          applicationId: l,
          inviteTargetType: r,
        } = e;
        return (0, n.W)().then(() => {
          a.Z.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != t ? t : new Set(),
            guild: i,
            channel: s,
            applicationId: l,
            inviteTargetType: r,
          });
        });
      }
      function l(e) {
        a.Z.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e });
      }
    },
    827940: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return b;
          },
        }),
        i(47120),
        i(653041);
      var a = i(735250),
        n = i(470079),
        s = i(990547),
        l = i(442837),
        r = i(481060),
        o = i(493683),
        c = i(247272),
        d = i(904245),
        u = i(100527),
        m = i(906732),
        p = i(213609),
        I = i(43267),
        f = i(933557),
        h = i(430824),
        x = i(751771),
        C = i(699516),
        g = i(594174),
        N = i(626135),
        E = i(768581),
        S = i(572004),
        A = i(971130),
        T = i(624138),
        v = i(51144),
        _ = i(778569),
        Z = i(981631),
        j = i(245335),
        D = i(689938),
        y = i(425976);
      function b(e) {
        let { activityItem: t, analyticsLocations: i, ...I } = e,
          f = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
          { analyticsLocations: h } = (0, m.ZP)(i);
        (0, p.Z)({
          type: s.ImpressionTypes.MODAL,
          name: s.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
          properties: { application_id: t.application.id, location_stack: h },
        });
        let [C, E] = n.useState(""),
          [S, T] = n.useState([]),
          v = (0, _.Z)({ applicationId: t.application.id, size: 256 }),
          b = ""
            .concat(window.location.origin)
            .concat(Z.Z5c.ACTIVITY_DETAILS(t.application.id)),
          M = (0, l.Wu)([x.Z], () => x.Z.getInviteSuggestionRows());
        n.useEffect(() => {
          (0, c.x)({
            omitUserIds: new Set(),
            applicationId: t.application.id,
            inviteTargetType: j.Iq.EMBEDDED_APPLICATION,
          });
        }, [t.application.id]),
          n.useEffect(() => (0, c.C)(C), [C]);
        let O = n.useCallback(async () => {
          let e = 0,
            i = 0,
            a = 0,
            n = x.Z.getInviteSuggestionRows()
              .filter((e) => S.includes(e.item.id))
              .map((t) =>
                (function (t, n) {
                  switch (t.type) {
                    case A.bm.DM:
                    case A.bm.FRIEND:
                      e++;
                      break;
                    case A.bm.GROUP_DM:
                      i++;
                      break;
                    case A.bm.CHANNEL:
                      a++;
                  }
                  return t.type === A.bm.GROUP_DM || t.type === A.bm.CHANNEL
                    ? d.Z.sendActivityBookmark(
                        t.item.id,
                        n,
                        u.Z.ACTIVITY_DETAIL_PAGE,
                        null,
                      )
                    : t.type === A.bm.DM || t.type === A.bm.FRIEND
                      ? o.Z.ensurePrivateChannel(t.item.id).then((e) =>
                          d.Z.sendActivityBookmark(
                            e,
                            b,
                            u.Z.ACTIVITY_DETAIL_PAGE,
                            null,
                          ),
                        )
                      : Promise.resolve();
                })(t, b),
              );
          await n,
            N.default.track(Z.rMx.ACTIVITY_BOOKMARK_SHARED, {
              user_id: null == f ? void 0 : f.id,
              application_id: t.application.id,
              n_users: e,
              n_gdms: i,
              n_channels: a,
            }),
            I.onClose();
        }, [t, S, I, b, f]);
        return (0, a.jsxs)(r.ModalRoot, {
          ...I,
          className: y.modalRoot,
          children: [
            (0, a.jsxs)(r.ModalHeader, {
              className: y.header,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  children:
                    D.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format(
                      { activityName: t.application.name },
                    ),
                }),
                (0, a.jsx)(r.ModalCloseButton, { onClick: I.onClose }),
              ],
            }),
            (0, a.jsxs)(r.ModalContent, {
              className: y.modalContent,
              children: [
                (0, a.jsx)(r.SearchBox, {
                  className: y.searchBar,
                  placeholder: D.Z.Messages.SEARCH,
                  label: D.Z.Messages.SEARCH,
                  searchTerm: C,
                  onChange: (e) => E(e),
                  onClear: () => E(""),
                }),
                M.map((e, t) =>
                  (0, a.jsxs)(
                    n.Fragment,
                    {
                      children: [
                        0 === t
                          ? null
                          : (0, a.jsx)("div", { className: y.rowDivider }),
                        (0, a.jsx)(k, {
                          row: e,
                          onClick: () => {
                            let t = [...S];
                            t.includes(e.item.id)
                              ? (t = t.filter((t) => t !== e.item.id))
                              : t.push(e.item.id),
                              T(t);
                          },
                          checked: S.includes(e.item.id),
                        }),
                      ],
                    },
                    e.item.id,
                  ),
                ),
              ],
            }),
            (0, a.jsxs)(r.ModalFooter, {
              className: y.footer,
              children: [
                (0, a.jsx)("div", {
                  className: y.activityInfoOuterContainer,
                  children: (0, a.jsxs)("div", {
                    className: y.activityInfoInnerContainer,
                    children: [
                      (0, a.jsx)("img", {
                        src: v.url,
                        className: y.activityInfoImage,
                        alt: t.application.name,
                      }),
                      (0, a.jsxs)("div", {
                        className: y.activityInfoText,
                        children: [
                          (0, a.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            className: y.ellipsis,
                            children: t.application.name,
                          }),
                          (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: y.ellipsis,
                            children: t.application.description,
                          }),
                          (0, a.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            className: y.ellipsis,
                            children: (0, a.jsx)(r.Anchor, {
                              href: b,
                              children: b,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", { className: y.footerDivider }),
                (0, a.jsxs)("div", {
                  className: y.copySendBar,
                  children: [
                    (0, a.jsx)(w, { link: b, applicationId: t.application.id }),
                    (0, a.jsx)(r.Button, {
                      onClick: O,
                      disabled: S.length <= 0,
                      children: D.Z.Messages.SEND,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function k(e) {
        let { row: t, onClick: i, checked: n } = e,
          s = null,
          l = null,
          o = null;
        switch (t.type) {
          case A.bm.DM:
          case A.bm.FRIEND:
            (s = (0, a.jsx)(r.Avatar, {
              size: r.AvatarSizes.SIZE_40,
              src: t.item.getAvatarURL(null, 128, !1),
              "aria-label": t.item.username,
            })),
              (l = v.ZP.getName(t.item)),
              (o = v.ZP.getUserTag(t.item));
            break;
          case A.bm.GROUP_DM: {
            let e = (0, I.x)(t.item),
              i = (0, f.F6)(t.item, g.default, C.Z);
            (s = (0, a.jsx)(r.Avatar, {
              src: e,
              "aria-label": i,
              size: r.AvatarSizes.SIZE_40,
            })),
              (l = (0, f.F6)(t.item, g.default, C.Z));
            break;
          }
          case A.bm.CHANNEL: {
            let e = t.item,
              i = h.Z.getGuild(e.guild_id);
            if (null == i) return null;
            if (
              ((l = "#".concat((0, f.F6)(e, g.default, C.Z))),
              (o = i.name),
              null != i.icon)
            ) {
              let t = E.ZP.getGuildIconURL({
                id: e.guild_id,
                icon: i.icon,
                size: 40,
              });
              s = (0, a.jsx)(r.Avatar, {
                src: t,
                "aria-label": l,
                size: r.AvatarSizes.SIZE_40,
              });
            } else {
              let e = (0, T.Zg)(i.name);
              s = (0, a.jsx)("div", {
                className: y.acronym,
                "aria-hidden": !0,
                children: e,
              });
            }
          }
        }
        return (0, a.jsxs)(r.Clickable, {
          onClick: i,
          className: y.rowContainer,
          children: [
            (0, a.jsxs)("div", {
              className: y.rowLeft,
              children: [
                (0, a.jsx)("div", { className: y.rowAvatar, children: s }),
                (0, a.jsxs)("div", {
                  className: y.rowNameContainer,
                  children: [
                    (0, a.jsx)(r.Text, {
                      variant: "text-md/semibold",
                      className: y.rowName,
                      children: l,
                    }),
                    (0, a.jsx)(r.Text, {
                      variant: "text-xs/medium",
                      className: y.rowSubName,
                      children: o,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(r.Checkbox, {
              value: n,
              type: r.Checkbox.Types.INVERTED,
              displayOnly: !0,
              className: y.rowRight,
            }),
          ],
        });
      }
      function w(e) {
        let { applicationId: t, link: i } = e,
          s = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
          [o, c] = n.useState(!1);
        return (
          n.useEffect(() => {
            let e;
            return (
              o &&
                (e = setTimeout(() => {
                  c(!1);
                }, 1e3)),
              () => {
                null != e && clearTimeout(e);
              }
            );
          }, [o]),
          (0, a.jsxs)(r.Button, {
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.LINK,
            onClick: function () {
              N.default.track(Z.rMx.ACTIVITY_BOOKMARK_COPY_URL, {
                user_id: null == s ? void 0 : s.id,
                application_id: t,
              }),
                (0, S.JG)(i),
                c(!0);
            },
            innerClassName: y.copyButton,
            children: [
              o
                ? (0, a.jsx)(r.CircleCheckIcon, {
                    size: "md",
                    color: "currentColor",
                  })
                : (0, a.jsx)(r.LinkIcon, { size: "md", color: "currentColor" }),
              o ? D.Z.Messages.COPIED : D.Z.Messages.COPY_LINK,
            ],
          })
        );
      }
    },
    751771: function (e, t, i) {
      let a, n, s, l, r, o, c;
      i(47120);
      var d,
        u,
        m,
        p,
        I = i(442837),
        f = i(570140),
        h = i(823385),
        x = i(814443),
        C = i(823379),
        g = i(971130),
        N = i(709054),
        E = i(592125),
        S = i(496675),
        A = i(699516),
        T = i(981631),
        v = i(245335);
      let _ = new Set(),
        Z = [],
        j = new Map();
      function D(e) {
        let t = new Set(),
          i = null == l || c === v.Iq.EMBEDDED_APPLICATION ? void 0 : l.id,
          a = (0, g.rh)(_, i);
        for (let e of (null != a && !A.Z.isBlocked(a.id) && t.add(a.id),
        x.Z.getUserAffinitiesUserIds()))
          t.add(e);
        let n = new Set();
        return (
          c === v.Iq.EMBEDDED_APPLICATION &&
            h.Z.getChannelHistory()
              .map((e) => E.Z.getChannel(e))
              .filter(C.lm)
              .filter((e) => e.type === T.d4z.GUILD_TEXT)
              .filter((e) => S.Z.can(T.Plq.SEND_MESSAGES, e))
              .slice(0, 3)
              .forEach((e) => n.add(e.id)),
          (0, g.an)({
            query: e,
            omitUserIds: _,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: i,
            suggestedChannelIds: n,
            inviteTargetType: c,
          })
        );
      }
      function y(e) {
        (Z = e),
          (j = new Map()),
          e.forEach((e, t) => {
            j.set(e, { index: t });
          });
      }
      class b extends (d = I.ZP.Store) {
        initialize() {
          this.waitFor(A.Z, x.Z);
        }
        getInviteSuggestionRows() {
          return Z;
        }
        getTotalSuggestionsCount() {
          return n;
        }
        getInitialCounts() {
          return a;
        }
        getSelectedInviteMetadata(e) {
          let t = j.get(e),
            i = x.Z.getUserAffinitiesUserIds();
          return null != t
            ? {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: Z.length,
                numAffinityConnections: i.size,
                isFiltered: s,
              }
            : null;
        }
      }
      (p = "InviteSuggestionsStore"),
        (m = "displayName") in (u = b)
          ? Object.defineProperty(u, m, {
              value: p,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[m] = p),
        (t.Z = new b(f.Z, {
          LOAD_INVITE_SUGGESTIONS: function (e) {
            let {
              omitUserIds: t,
              guild: i,
              channel: d,
              applicationId: u,
              inviteTargetType: m,
            } = e;
            (l = null != d ? i : null), (r = d), (o = u), (c = m);
            let p = A.Z.getRelationships(),
              I = N.default.keys(p).filter((e) => p[e] === T.OGo.BLOCKED);
            (_ = new Set([
              ...t,
              ...I,
              ...(0, g.Sz)({
                channel: r,
                applicationId: o,
                inviteTargetType: m,
              }),
            ])),
              (s = !1);
            let { rows: f, counts: h } = D("");
            y(f), (a = h), (n = Z.length);
          },
          INVITE_SUGGESTIONS_SEARCH: function (e) {
            let { query: t } = e;
            s = "" !== t;
            let { rows: i } = D(t);
            y(i);
          },
        }));
    },
  },
]);
//# sourceMappingURL=2d78fc2b8909ba77d4dd.js.map
