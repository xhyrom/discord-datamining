"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60133"],
  {
    247272: function (e, t, i) {
      i.d(t, {
        C: function () {
          return s;
        },
        x: function () {
          return l;
        },
      }),
        i(47120);
      var n = i(570140),
        a = i(93127);
      function l(e) {
        let {
          omitUserIds: t,
          guild: i,
          channel: l,
          applicationId: s,
          inviteTargetType: r,
        } = e;
        return (0, a.W)().then(() => {
          n.Z.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != t ? t : new Set(),
            guild: i,
            channel: l,
            applicationId: s,
            inviteTargetType: r,
          });
        });
      }
      function s(e) {
        n.Z.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e });
      }
    },
    827940: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return D;
          },
        }),
        i(47120),
        i(653041);
      var n = i(200651),
        a = i(192379),
        l = i(990547),
        s = i(442837),
        r = i(481060),
        o = i(493683),
        c = i(247272),
        d = i(904245),
        u = i(100527),
        m = i(906732),
        p = i(213609),
        I = i(43267),
        h = i(933557),
        f = i(430824),
        x = i(751771),
        g = i(699516),
        N = i(594174),
        C = i(626135),
        S = i(768581),
        v = i(572004),
        T = i(971130),
        A = i(624138),
        E = i(51144),
        _ = i(778569),
        Z = i(981631),
        b = i(245335),
        j = i(388032),
        y = i(425976);
      function D(e) {
        let { activityItem: t, analyticsLocations: i, ...I } = e,
          h = (0, s.e7)([N.default], () => N.default.getCurrentUser()),
          { analyticsLocations: f } = (0, m.ZP)(i);
        (0, p.Z)({
          type: l.ImpressionTypes.MODAL,
          name: l.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
          properties: { application_id: t.application.id, location_stack: f },
        });
        let [g, S] = a.useState(""),
          [v, A] = a.useState([]),
          E = (0, _.Z)({ applicationId: t.application.id, size: 256 }),
          D = ""
            .concat(window.location.origin)
            .concat(Z.Z5c.ACTIVITY_DETAILS(t.application.id)),
          O = (0, s.Wu)([x.Z], () => x.Z.getInviteSuggestionRows());
        a.useEffect(() => {
          (0, c.x)({
            omitUserIds: new Set(),
            applicationId: t.application.id,
            inviteTargetType: b.Iq.EMBEDDED_APPLICATION,
          });
        }, [t.application.id]),
          a.useEffect(() => (0, c.C)(g), [g]);
        let M = a.useCallback(async () => {
          let e = 0,
            i = 0,
            n = 0,
            a = x.Z.getInviteSuggestionRows()
              .filter((e) => v.includes(e.item.id))
              .map((t) =>
                (function (t, a) {
                  switch (t.type) {
                    case T.bm.DM:
                    case T.bm.FRIEND:
                      e++;
                      break;
                    case T.bm.GROUP_DM:
                      i++;
                      break;
                    case T.bm.CHANNEL:
                      n++;
                  }
                  return t.type === T.bm.GROUP_DM || t.type === T.bm.CHANNEL
                    ? d.Z.sendActivityBookmark(
                        t.item.id,
                        a,
                        u.Z.ACTIVITY_DETAIL_PAGE,
                        null,
                      )
                    : t.type === T.bm.DM || t.type === T.bm.FRIEND
                      ? o.Z.ensurePrivateChannel(t.item.id).then((e) =>
                          d.Z.sendActivityBookmark(
                            e,
                            D,
                            u.Z.ACTIVITY_DETAIL_PAGE,
                            null,
                          ),
                        )
                      : Promise.resolve();
                })(t, D),
              );
          await a,
            C.default.track(Z.rMx.ACTIVITY_BOOKMARK_SHARED, {
              user_id: null == h ? void 0 : h.id,
              application_id: t.application.id,
              n_users: e,
              n_gdms: i,
              n_channels: n,
            }),
            I.onClose();
        }, [t, v, I, D, h]);
        return (0, n.jsxs)(r.ModalRoot, {
          ...I,
          className: y.modalRoot,
          children: [
            (0, n.jsxs)(r.ModalHeader, {
              className: y.header,
              children: [
                (0, n.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  children: j.intl.format(j.t.tOVbbG, {
                    activityName: t.application.name,
                  }),
                }),
                (0, n.jsx)(r.ModalCloseButton, { onClick: I.onClose }),
              ],
            }),
            (0, n.jsxs)(r.ModalContent, {
              className: y.modalContent,
              children: [
                (0, n.jsx)(r.SearchBox, {
                  className: y.searchBar,
                  placeholder: j.intl.string(j.t["5h0QOD"]),
                  label: j.intl.string(j.t["5h0QOD"]),
                  searchTerm: g,
                  onChange: (e) => S(e),
                  onClear: () => S(""),
                }),
                O.map((e, t) =>
                  (0, n.jsxs)(
                    a.Fragment,
                    {
                      children: [
                        0 === t
                          ? null
                          : (0, n.jsx)("div", { className: y.rowDivider }),
                        (0, n.jsx)(k, {
                          row: e,
                          onClick: () => {
                            let t = [...v];
                            t.includes(e.item.id)
                              ? (t = t.filter((t) => t !== e.item.id))
                              : t.push(e.item.id),
                              A(t);
                          },
                          checked: v.includes(e.item.id),
                        }),
                      ],
                    },
                    e.item.id,
                  ),
                ),
              ],
            }),
            (0, n.jsxs)(r.ModalFooter, {
              className: y.footer,
              children: [
                (0, n.jsx)("div", {
                  className: y.activityInfoOuterContainer,
                  children: (0, n.jsxs)("div", {
                    className: y.activityInfoInnerContainer,
                    children: [
                      (0, n.jsx)("img", {
                        src: E.url,
                        className: y.activityInfoImage,
                        alt: t.application.name,
                      }),
                      (0, n.jsxs)("div", {
                        className: y.activityInfoText,
                        children: [
                          (0, n.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            className: y.ellipsis,
                            children: t.application.name,
                          }),
                          (0, n.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: y.ellipsis,
                            children: t.application.description,
                          }),
                          (0, n.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            className: y.ellipsis,
                            children: (0, n.jsx)(r.Anchor, {
                              href: D,
                              children: D,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", { className: y.footerDivider }),
                (0, n.jsxs)("div", {
                  className: y.copySendBar,
                  children: [
                    (0, n.jsx)(w, { link: D, applicationId: t.application.id }),
                    (0, n.jsx)(r.Button, {
                      onClick: M,
                      disabled: v.length <= 0,
                      children: j.intl.string(j.t.TXNS7e),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function k(e) {
        let { row: t, onClick: i, checked: a } = e,
          l = null,
          s = null,
          o = null;
        switch (t.type) {
          case T.bm.DM:
          case T.bm.FRIEND:
            (l = (0, n.jsx)(r.Avatar, {
              size: r.AvatarSizes.SIZE_40,
              src: t.item.getAvatarURL(null, 128, !1),
              "aria-label": t.item.username,
            })),
              (s = E.ZP.getName(t.item)),
              (o = E.ZP.getUserTag(t.item));
            break;
          case T.bm.GROUP_DM: {
            let e = (0, I.x)(t.item),
              i = (0, h.F6)(t.item, N.default, g.Z);
            (l = (0, n.jsx)(r.Avatar, {
              src: e,
              "aria-label": i,
              size: r.AvatarSizes.SIZE_40,
            })),
              (s = (0, h.F6)(t.item, N.default, g.Z));
            break;
          }
          case T.bm.CHANNEL: {
            let e = t.item,
              i = f.Z.getGuild(e.guild_id);
            if (null == i) return null;
            if (
              ((s = "#".concat((0, h.F6)(e, N.default, g.Z))),
              (o = i.name),
              null != i.icon)
            ) {
              let t = S.ZP.getGuildIconURL({
                id: e.guild_id,
                icon: i.icon,
                size: 40,
              });
              l = (0, n.jsx)(r.Avatar, {
                src: t,
                "aria-label": s,
                size: r.AvatarSizes.SIZE_40,
              });
            } else {
              let e = (0, A.Zg)(i.name);
              l = (0, n.jsx)("div", {
                className: y.acronym,
                "aria-hidden": !0,
                children: e,
              });
            }
          }
        }
        return (0, n.jsxs)(r.Clickable, {
          onClick: i,
          className: y.rowContainer,
          children: [
            (0, n.jsxs)("div", {
              className: y.rowLeft,
              children: [
                (0, n.jsx)("div", { className: y.rowAvatar, children: l }),
                (0, n.jsxs)("div", {
                  className: y.rowNameContainer,
                  children: [
                    (0, n.jsx)(r.Text, {
                      variant: "text-md/semibold",
                      className: y.rowName,
                      children: s,
                    }),
                    (0, n.jsx)(r.Text, {
                      variant: "text-xs/medium",
                      className: y.rowSubName,
                      children: o,
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(r.Checkbox, {
              value: a,
              type: r.Checkbox.Types.INVERTED,
              displayOnly: !0,
              className: y.rowRight,
            }),
          ],
        });
      }
      function w(e) {
        let { applicationId: t, link: i } = e,
          l = (0, s.e7)([N.default], () => N.default.getCurrentUser()),
          [o, c] = a.useState(!1);
        return (
          a.useEffect(() => {
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
          (0, n.jsxs)(r.Button, {
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.LINK,
            onClick: function () {
              C.default.track(Z.rMx.ACTIVITY_BOOKMARK_COPY_URL, {
                user_id: null == l ? void 0 : l.id,
                application_id: t,
              }),
                (0, v.JG)(i),
                c(!0);
            },
            innerClassName: y.copyButton,
            children: [
              o
                ? (0, n.jsx)(r.CircleCheckIcon, {
                    size: "md",
                    color: "currentColor",
                  })
                : (0, n.jsx)(r.LinkIcon, { size: "md", color: "currentColor" }),
              o ? j.intl.string(j.t["t5VZ8/"]) : j.intl.string(j.t.WqhZsr),
            ],
          })
        );
      }
    },
    751771: function (e, t, i) {
      let n, a, l, s, r, o, c;
      i(47120);
      var d,
        u,
        m,
        p,
        I = i(442837),
        h = i(570140),
        f = i(823385),
        x = i(814443),
        g = i(823379),
        N = i(971130),
        C = i(592125),
        S = i(496675),
        v = i(699516),
        T = i(981631),
        A = i(245335);
      let E = new Set(),
        _ = [],
        Z = new Map();
      function b(e) {
        let t = new Set(),
          i = null == s || c === A.Iq.EMBEDDED_APPLICATION ? void 0 : s.id,
          n = (0, N.rh)(E, i);
        for (let e of (null != n && !v.Z.isBlocked(n.id) && t.add(n.id),
        x.Z.getUserAffinitiesUserIds()))
          t.add(e);
        let a = new Set();
        return (
          c === A.Iq.EMBEDDED_APPLICATION &&
            f.Z.getChannelHistory()
              .map((e) => C.Z.getChannel(e))
              .filter(g.lm)
              .filter((e) => e.type === T.d4z.GUILD_TEXT)
              .filter((e) => S.Z.can(T.Plq.SEND_MESSAGES, e))
              .slice(0, 3)
              .forEach((e) => a.add(e.id)),
          (0, N.an)({
            query: e,
            omitUserIds: E,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: i,
            suggestedChannelIds: a,
            inviteTargetType: c,
          })
        );
      }
      function j(e) {
        (_ = e),
          (Z = new Map()),
          e.forEach((e, t) => {
            Z.set(e, { index: t });
          });
      }
      class y extends (d = I.ZP.Store) {
        initialize() {
          this.waitFor(v.Z, x.Z);
        }
        getInviteSuggestionRows() {
          return _;
        }
        getTotalSuggestionsCount() {
          return a;
        }
        getInitialCounts() {
          return n;
        }
        getSelectedInviteMetadata(e) {
          let t = Z.get(e),
            i = x.Z.getUserAffinitiesUserIds();
          return null != t
            ? {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: _.length,
                numAffinityConnections: i.size,
                isFiltered: l,
              }
            : null;
        }
      }
      (p = "InviteSuggestionsStore"),
        (m = "displayName") in (u = y)
          ? Object.defineProperty(u, m, {
              value: p,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[m] = p),
        (t.Z = new y(h.Z, {
          LOAD_INVITE_SUGGESTIONS: function (e) {
            let {
              omitUserIds: t,
              guild: i,
              channel: d,
              applicationId: u,
              inviteTargetType: m,
            } = e;
            (s = null != d ? i : null), (r = d), (o = u), (c = m);
            let p = v.Z.getBlockedOrIgnoredIDs();
            (E = new Set([
              ...t,
              ...p,
              ...(0, N.Sz)({
                channel: r,
                applicationId: o,
                inviteTargetType: m,
              }),
            ])),
              (l = !1);
            let { rows: I, counts: h } = b("");
            j(I), (n = h), (a = _.length);
          },
          INVITE_SUGGESTIONS_SEARCH: function (e) {
            let { query: t } = e;
            l = "" !== t;
            let { rows: i } = b(t);
            j(i);
          },
        }));
    },
  },
]);
//# sourceMappingURL=82ea677fbea9d0fcd16f.js.map
