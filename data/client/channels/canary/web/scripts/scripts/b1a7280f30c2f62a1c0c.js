"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60133"],
  {
    247272: function (e, t, n) {
      n.d(t, {
        C: function () {
          return l;
        },
        x: function () {
          return a;
        },
      }),
        n(47120);
      var i = n(570140),
        r = n(93127);
      function a(e) {
        let {
          omitUserIds: t,
          guild: n,
          channel: a,
          applicationId: l,
          inviteTargetType: s,
        } = e;
        return (0, r.W)().then(() => {
          i.Z.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != t ? t : new Set(),
            guild: n,
            channel: a,
            applicationId: l,
            inviteTargetType: s,
          });
        });
      }
      function l(e) {
        i.Z.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e });
      }
    },
    827940: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n(47120),
        n(653041);
      var i = n(200651),
        r = n(192379),
        a = n(990547),
        l = n(442837),
        s = n(481060),
        o = n(493683),
        u = n(247272),
        I = n(904245),
        c = n(100527),
        d = n(906732),
        _ = n(213609),
        T = n(43267),
        N = n(933557),
        m = n(430824),
        S = n(751771),
        f = n(699516),
        O = n(594174),
        E = n(626135),
        g = n(768581),
        p = n(572004),
        P = n(971130),
        h = n(624138),
        D = n(51144),
        C = n(778569),
        v = n(981631),
        A = n(245335),
        M = n(388032),
        y = n(411362);
      function x(e) {
        let { activityItem: t, analyticsLocations: n, ...T } = e,
          N = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
          { analyticsLocations: m } = (0, d.ZP)(n);
        (0, _.Z)({
          type: a.ImpressionTypes.MODAL,
          name: a.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
          properties: { application_id: t.application.id, location_stack: m },
        });
        let [f, g] = r.useState(""),
          [p, h] = r.useState([]),
          D = (0, C.Z)({ applicationId: t.application.id, size: 256 }),
          x = ""
            .concat(window.location.origin)
            .concat(v.Z5c.ACTIVITY_DETAILS(t.application.id)),
          V = (0, l.Wu)([S.Z], () => S.Z.getInviteSuggestionRows());
        r.useEffect(() => {
          (0, u.x)({
            omitUserIds: new Set(),
            applicationId: t.application.id,
            inviteTargetType: A.Iq.EMBEDDED_APPLICATION,
          });
        }, [t.application.id]),
          r.useEffect(() => (0, u.C)(f), [f]);
        let R = r.useCallback(async () => {
          let e = 0,
            n = 0,
            i = 0,
            r = S.Z.getInviteSuggestionRows()
              .filter((e) => p.includes(e.item.id))
              .map((t) =>
                (function (t, r) {
                  switch (t.type) {
                    case P.bm.DM:
                    case P.bm.FRIEND:
                      e++;
                      break;
                    case P.bm.GROUP_DM:
                      n++;
                      break;
                    case P.bm.CHANNEL:
                      i++;
                  }
                  return t.type === P.bm.GROUP_DM || t.type === P.bm.CHANNEL
                    ? I.Z.sendActivityBookmark(
                        t.item.id,
                        r,
                        c.Z.ACTIVITY_DETAIL_PAGE,
                        null,
                      )
                    : t.type === P.bm.DM || t.type === P.bm.FRIEND
                      ? o.Z.ensurePrivateChannel(t.item.id).then((e) =>
                          I.Z.sendActivityBookmark(
                            e,
                            x,
                            c.Z.ACTIVITY_DETAIL_PAGE,
                            null,
                          ),
                        )
                      : Promise.resolve();
                })(t, x),
              );
          await r,
            E.default.track(v.rMx.ACTIVITY_BOOKMARK_SHARED, {
              user_id: null == N ? void 0 : N.id,
              application_id: t.application.id,
              n_users: e,
              n_gdms: n,
              n_channels: i,
            }),
            T.onClose();
        }, [t, p, T, x, N]);
        return (0, i.jsxs)(s.ModalRoot, {
          ...T,
          className: y.modalRoot,
          children: [
            (0, i.jsxs)(s.ModalHeader, {
              className: y.header,
              children: [
                (0, i.jsx)(s.Heading, {
                  variant: "heading-md/semibold",
                  children: M.intl.format(M.t.tOVbbG, {
                    activityName: t.application.name,
                  }),
                }),
                (0, i.jsx)(s.ModalCloseButton, { onClick: T.onClose }),
              ],
            }),
            (0, i.jsxs)(s.ModalContent, {
              className: y.modalContent,
              children: [
                (0, i.jsx)(s.SearchBox, {
                  className: y.searchBar,
                  placeholder: M.intl.string(M.t["5h0QOD"]),
                  label: M.intl.string(M.t["5h0QOD"]),
                  searchTerm: f,
                  onChange: (e) => g(e),
                  onClear: () => g(""),
                }),
                V.map((e, t) =>
                  (0, i.jsxs)(
                    r.Fragment,
                    {
                      children: [
                        0 === t
                          ? null
                          : (0, i.jsx)("div", { className: y.rowDivider }),
                        (0, i.jsx)(b, {
                          row: e,
                          onClick: () => {
                            let t = [...p];
                            t.includes(e.item.id)
                              ? (t = t.filter((t) => t !== e.item.id))
                              : t.push(e.item.id),
                              h(t);
                          },
                          checked: p.includes(e.item.id),
                        }),
                      ],
                    },
                    e.item.id,
                  ),
                ),
              ],
            }),
            (0, i.jsxs)(s.ModalFooter, {
              className: y.footer,
              children: [
                (0, i.jsx)("div", {
                  className: y.activityInfoOuterContainer,
                  children: (0, i.jsxs)("div", {
                    className: y.activityInfoInnerContainer,
                    children: [
                      (0, i.jsx)("img", {
                        src: D.url,
                        className: y.activityInfoImage,
                        alt: t.application.name,
                      }),
                      (0, i.jsxs)("div", {
                        className: y.activityInfoText,
                        children: [
                          (0, i.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            className: y.ellipsis,
                            children: t.application.name,
                          }),
                          (0, i.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            className: y.ellipsis,
                            children: t.application.description,
                          }),
                          (0, i.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            className: y.ellipsis,
                            children: (0, i.jsx)(s.Anchor, {
                              href: x,
                              children: x,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", { className: y.footerDivider }),
                (0, i.jsxs)("div", {
                  className: y.copySendBar,
                  children: [
                    (0, i.jsx)(U, { link: x, applicationId: t.application.id }),
                    (0, i.jsx)(s.Button, {
                      onClick: R,
                      disabled: p.length <= 0,
                      children: M.intl.string(M.t.TXNS7e),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function b(e) {
        let { row: t, onClick: n, checked: r } = e,
          a = null,
          l = null,
          o = null;
        switch (t.type) {
          case P.bm.DM:
          case P.bm.FRIEND:
            (a = (0, i.jsx)(s.Avatar, {
              size: s.AvatarSizes.SIZE_40,
              src: t.item.getAvatarURL(null, 128, !1),
              "aria-label": t.item.username,
            })),
              (l = D.ZP.getName(t.item)),
              (o = D.ZP.getUserTag(t.item));
            break;
          case P.bm.GROUP_DM: {
            let e = (0, T.x)(t.item),
              n = (0, N.F6)(t.item, O.default, f.Z);
            (a = (0, i.jsx)(s.Avatar, {
              src: e,
              "aria-label": n,
              size: s.AvatarSizes.SIZE_40,
            })),
              (l = (0, N.F6)(t.item, O.default, f.Z));
            break;
          }
          case P.bm.CHANNEL: {
            let e = t.item,
              n = m.Z.getGuild(e.guild_id);
            if (null == n) return null;
            if (
              ((l = "#".concat((0, N.F6)(e, O.default, f.Z))),
              (o = n.name),
              null != n.icon)
            ) {
              let t = g.ZP.getGuildIconURL({
                id: e.guild_id,
                icon: n.icon,
                size: 40,
              });
              a = (0, i.jsx)(s.Avatar, {
                src: t,
                "aria-label": l,
                size: s.AvatarSizes.SIZE_40,
              });
            } else {
              let e = (0, h.Zg)(n.name);
              a = (0, i.jsx)("div", {
                className: y.acronym,
                "aria-hidden": !0,
                children: e,
              });
            }
          }
        }
        return (0, i.jsxs)(s.Clickable, {
          onClick: n,
          className: y.rowContainer,
          children: [
            (0, i.jsxs)("div", {
              className: y.rowLeft,
              children: [
                (0, i.jsx)("div", { className: y.rowAvatar, children: a }),
                (0, i.jsxs)("div", {
                  className: y.rowNameContainer,
                  children: [
                    (0, i.jsx)(s.Text, {
                      variant: "text-md/semibold",
                      className: y.rowName,
                      children: l,
                    }),
                    (0, i.jsx)(s.Text, {
                      variant: "text-xs/medium",
                      className: y.rowSubName,
                      children: o,
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(s.Checkbox, {
              value: r,
              type: s.Checkbox.Types.INVERTED,
              displayOnly: !0,
              className: y.rowRight,
            }),
          ],
        });
      }
      function U(e) {
        let { applicationId: t, link: n } = e,
          a = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
          [o, u] = r.useState(!1);
        return (
          r.useEffect(() => {
            let e;
            return (
              o &&
                (e = setTimeout(() => {
                  u(!1);
                }, 1e3)),
              () => {
                null != e && clearTimeout(e);
              }
            );
          }, [o]),
          (0, i.jsxs)(s.Button, {
            look: s.Button.Looks.LINK,
            color: s.Button.Colors.LINK,
            onClick: function () {
              E.default.track(v.rMx.ACTIVITY_BOOKMARK_COPY_URL, {
                user_id: null == a ? void 0 : a.id,
                application_id: t,
              }),
                (0, p.JG)(n),
                u(!0);
            },
            innerClassName: y.copyButton,
            children: [
              o
                ? (0, i.jsx)(s.CircleCheckIcon, {
                    size: "md",
                    color: "currentColor",
                  })
                : (0, i.jsx)(s.LinkIcon, { size: "md", color: "currentColor" }),
              o ? M.intl.string(M.t["t5VZ8/"]) : M.intl.string(M.t.WqhZsr),
            ],
          })
        );
      }
    },
    751771: function (e, t, n) {
      let i, r, a, l, s, o, u;
      n(47120);
      var I,
        c,
        d,
        _,
        T = n(442837),
        N = n(570140),
        m = n(823385),
        S = n(814443),
        f = n(823379),
        O = n(971130),
        E = n(592125),
        g = n(496675),
        p = n(699516),
        P = n(981631),
        h = n(245335);
      let D = new Set(),
        C = [],
        v = new Map();
      function A(e) {
        let t = new Set(),
          n = null == l || u === h.Iq.EMBEDDED_APPLICATION ? void 0 : l.id,
          i = (0, O.rh)(D, n);
        for (let e of (null != i && !p.Z.isBlocked(i.id) && t.add(i.id),
        S.Z.getUserAffinitiesUserIds()))
          t.add(e);
        let r = new Set();
        return (
          u === h.Iq.EMBEDDED_APPLICATION &&
            m.Z.getChannelHistory()
              .map((e) => E.Z.getChannel(e))
              .filter(f.lm)
              .filter((e) => e.type === P.d4z.GUILD_TEXT)
              .filter((e) => g.Z.can(P.Plq.SEND_MESSAGES, e))
              .slice(0, 3)
              .forEach((e) => r.add(e.id)),
          (0, O.an)({
            query: e,
            omitUserIds: D,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: n,
            suggestedChannelIds: r,
            inviteTargetType: u,
          })
        );
      }
      function M(e) {
        (C = e),
          (v = new Map()),
          e.forEach((e, t) => {
            v.set(e, { index: t });
          });
      }
      class y extends (I = T.ZP.Store) {
        initialize() {
          this.waitFor(p.Z, S.Z);
        }
        getInviteSuggestionRows() {
          return C;
        }
        getTotalSuggestionsCount() {
          return r;
        }
        getInitialCounts() {
          return i;
        }
        getSelectedInviteMetadata(e) {
          let t = v.get(e),
            n = S.Z.getUserAffinitiesUserIds();
          return null != t
            ? {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: C.length,
                numAffinityConnections: n.size,
                isFiltered: a,
              }
            : null;
        }
      }
      (_ = "InviteSuggestionsStore"),
        (d = "displayName") in (c = y)
          ? Object.defineProperty(c, d, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (c[d] = _),
        (t.Z = new y(N.Z, {
          LOAD_INVITE_SUGGESTIONS: function (e) {
            let {
              omitUserIds: t,
              guild: n,
              channel: I,
              applicationId: c,
              inviteTargetType: d,
            } = e;
            (l = null != I ? n : null), (s = I), (o = c), (u = d);
            let _ = p.Z.getBlockedOrIgnoredIDs();
            (D = new Set([
              ...t,
              ..._,
              ...(0, O.Sz)({
                channel: s,
                applicationId: o,
                inviteTargetType: d,
              }),
            ])),
              (a = !1);
            let { rows: T, counts: N } = A("");
            M(T), (i = N), (r = C.length);
          },
          INVITE_SUGGESTIONS_SEARCH: function (e) {
            let { query: t } = e;
            a = "" !== t;
            let { rows: n } = A(t);
            M(n);
          },
        }));
    },
    971130: function (e, t, n) {
      let i;
      n.d(t, {
        Sz: function () {
          return A;
        },
        Vg: function () {
          return x;
        },
        an: function () {
          return C;
        },
        bm: function () {
          return r;
        },
        rh: function () {
          return v;
        },
      }),
        n(653041),
        n(47120);
      var r,
        a,
        l = n(317381),
        s = n(592125),
        o = n(271383),
        u = n(306680),
        I = n(699516),
        c = n(594174),
        d = n(55589),
        _ = n(483360),
        T = n(981631),
        N = n(245335),
        m = n(388032);
      (i = n(603617)),
        ((a = r || (r = {})).GROUP_DM = "GROUP_DM"),
        (a.DM = "DM"),
        (a.FRIEND = "FRIEND"),
        (a.CHANNEL = "CHANNEL");
      let S = (e, t) => null != e && o.ZP.isMember(e, t),
        f = (e) => {
          let {
            omitUserIds: t,
            suggestedUserIds: n,
            maxRowsWithoutQuery: i,
            omitGuildId: r,
            shownUserIds: a,
            rows: l,
            counts: s,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != i && i > 0 && l.length >= i) break;
              if (t.has(e) || a.has(e)) continue;
              let n = c.default.getUser(e);
              !(null == n || S(r, n.id)) &&
                (a.add(n.id),
                l.push({ type: "FRIEND", item: n, isSuggested: !0 }),
                s.numFriends++);
            }
        },
        O = (e) => {
          let {
            suggestedChannelIds: t,
            maxRowsWithoutQuery: n,
            rows: i,
            counts: r,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != n && n > 0 && i.length >= n) break;
              let t = s.Z.getChannel(e);
              null != t &&
                (i.push({ type: "CHANNEL", item: t, isSuggested: !0 }),
                r.numChannels++);
            }
        },
        E = (e) => {
          let {
              omitUserIds: t,
              maxRowsWithoutQuery: n,
              omitGuildId: i,
              shownUserIds: r,
              rows: a,
              counts: l,
              includeGroupDms: o,
              limit: I,
            } = e,
            _ = 0;
          for (let e of d.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && a.length >= n) || (null != I && _ >= I))
              break;
            let d = s.Z.getChannel(e);
            if (null == d || !d.isPrivate()) continue;
            if (o && d.type === T.d4z.GROUP_DM) {
              a.push({ type: "GROUP_DM", item: d, isSuggested: !1 }),
                l.numGroupDms++,
                _++;
              continue;
            }
            if (null == u.ZP.lastMessageId(d.id)) continue;
            let N = d.getRecipientId();
            if (null != N && !t.has(N) && !r.has(N)) {
              let e = c.default.getUser(N);
              if (null == e || e.bot || S(i, e.id)) continue;
              r.add(e.id),
                a.push({ type: "DM", item: e, isSuggested: !1 }),
                l.numDms++,
                _++;
            }
          }
        },
        g = (e) => {
          let {
            omitUserIds: t,
            maxRowsWithoutQuery: n,
            omitGuildId: i,
            shownUserIds: r,
            rows: a,
            counts: l,
          } = e;
          for (let e of I.Z.getFriendIDs()) {
            if (null != n && n > 0 && a.length >= n) break;
            if (t.has(e) || r.has(e)) continue;
            let s = c.default.getUser(e);
            !(null == s || S(i, s.id)) &&
              (a.push({ type: "FRIEND", item: s, isSuggested: !1 }),
              l.numFriends++);
          }
        },
        p = (e) => {
          let { query: t, rows: n, counts: i, inviteTargetType: r } = e;
          r === N.Iq.EMBEDDED_APPLICATION &&
            _.ZP.queryChannels({ query: t, limit: 3, guildId: void 0 }).forEach(
              (e) => {
                let { record: t } = e;
                n.push({ type: "CHANNEL", item: t, isSuggested: !1 }),
                  i.numChannels++;
              },
            );
        },
        P = (e) => {
          let {
            query: t,
            omitUserIds: n,
            shownUserIds: i,
            rows: r,
            counts: a,
          } = e;
          _.ZP.queryDMUsers({ query: t, limit: 50 }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let l = s.Z.getDMFromUserId(t.id);
            if (null != l && null != u.ZP.lastMessageId(l))
              i.add(t.id),
                r.push({ type: "DM", item: t, isSuggested: !1 }),
                a.numDms++;
          });
        },
        h = (e) => {
          let { query: t, rows: n, counts: i } = e;
          _.ZP.queryGroupDMs({ query: t, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              n.push({ type: "GROUP_DM", item: t, isSuggested: !1 }),
                i.numGroupDms++;
            },
          );
        },
        D = (e) => {
          let {
            query: t,
            rows: n,
            counts: i,
            omitUserIds: r,
            shownUserIds: a,
          } = e;
          _.ZP.queryFriends({ query: t, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              if (!(r.has(t.id) || a.has(t.id)))
                a.add(t.id),
                  n.push({ type: "FRIEND", item: t, isSuggested: !1 }),
                  i.numFriends++;
            },
          );
        };
      function C(e) {
        let {
            query: t,
            inviteTargetType: n,
            omitUserIds: i,
            suggestedUserIds: r,
            suggestedChannelIds: a,
            maxRowsWithoutQuery: l,
            omitGuildId: s,
          } = e,
          o = new Set(),
          u = [],
          I = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === t) {
          let e = {
            omitUserIds: i,
            maxRowsWithoutQuery: l,
            omitGuildId: s,
            shownUserIds: o,
            rows: u,
            counts: I,
          };
          n === N.Iq.EMBEDDED_APPLICATION &&
            (E({ ...e, includeGroupDms: !1, limit: 1 }),
            O({ ...e, suggestedChannelIds: a })),
            f({ ...e, suggestedUserIds: r }),
            E({ ...e, includeGroupDms: !0 }),
            g(e);
        } else {
          let e = { query: t, rows: u, counts: I };
          n === N.Iq.EMBEDDED_APPLICATION && p({ ...e, inviteTargetType: n }),
            P({ ...e, omitUserIds: i, shownUserIds: o }),
            h(e),
            D({ ...e, omitUserIds: i, shownUserIds: o });
        }
        return { rows: u, counts: I };
      }
      function v(e, t) {
        for (let n of d.Z.getPrivateChannelIds()) {
          let i = s.Z.getChannel(n);
          if (null == i || !i.isDM() || null == u.ZP.lastMessageId(i.id))
            continue;
          let r = i.getRecipientId();
          if (null != r && !e.has(r)) {
            let e = c.default.getUser(r);
            if (null == e || e.bot || S(t, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function A(e) {
        let { channel: t, inviteTargetType: n, applicationId: i } = e;
        if (n === N.Iq.EMBEDDED_APPLICATION) {
          if (null != t) {
            for (let e of l.ZP.getEmbeddedActivitiesForChannel(t.id))
              if (e.applicationId === i) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let M = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        y = {
          [i.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: M.MINUTES },
          [i.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: M.HOURS },
          [i.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: M.HOURS },
          [i.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: M.HOURS },
          [i.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: M.DAYS },
          [i.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: M.DAYS },
          [i.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: M.NEVER },
        };
      function x(e, t) {
        let n = parseInt(t, 10),
          i = 0 === n,
          r = y[e].value;
        switch (y[e].type) {
          case M.MINUTES:
            if (i) return m.intl.string(m.t["/WbTXF"]);
            return m.intl.formatToPlainString(m.t.eDRWJC, { numUses: n });
          case M.HOURS:
            if (i)
              return m.intl.formatToPlainString(m.t.ZVdJMz, { numHours: r });
            return m.intl.formatToPlainString(m.t.NgZgAA, {
              numHours: r,
              numUses: n,
            });
          case M.DAYS:
            if (i)
              return m.intl.formatToPlainString(m.t.T96qsr, { numDays: r });
            return m.intl.formatToPlainString(m.t.TfuB9P, {
              numDays: r,
              numUses: n,
            });
          case M.NEVER:
            if (i) return m.intl.string(m.t.QrHBnJ);
            return m.intl.formatToPlainString(m.t.yJnTxM, { numUses: n });
          default:
            return "";
        }
      }
      t.ZP = {
        getMaxAgeOptions: i.MAX_AGE_OPTIONS,
        getMaxUsesOptions: i.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: i.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: i.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: i.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_12_HOURS: i.INVITE_OPTIONS_12_HOURS,
        INVITE_OPTIONS_6_HOURS: i.INVITE_OPTIONS_6_HOURS,
        INVITE_OPTIONS_1_HOUR: i.INVITE_OPTIONS_1_HOUR,
        INVITE_OPTIONS_30_MINUTES: i.INVITE_OPTIONS_30_MINUTES,
        INVITE_OPTIONS_UNLIMITED: i.INVITE_OPTIONS_UNLIMITED,
        INVITE_OPTIONS_ONCE: i.INVITE_OPTIONS_ONCE,
        INVITE_OPTIONS_5_TIMES: i.INVITE_OPTIONS_5_TIMES,
        INVITE_OPTIONS_10_TIMES: i.INVITE_OPTIONS_10_TIMES,
        INVITE_OPTIONS_25_TIMES: i.INVITE_OPTIONS_25_TIMES,
        INVITE_OPTIONS_50_TIMES: i.INVITE_OPTIONS_50_TIMES,
        INVITE_OPTIONS_100_TIMES: i.INVITE_OPTIONS_100_TIMES,
      };
    },
    603617: function (e, t, n) {
      n.r(t),
        n.d(t, {
          INVITE_OPTIONS_100_TIMES: function () {
            return c;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return o;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return m;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return S;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return T;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return u;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return _;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return I;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return s;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return N;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return f;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return O;
          },
          INVITE_OPTIONS_ONCE: function () {
            return l;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return a;
          },
          MAX_AGE_OPTIONS: function () {
            return E;
          },
          MAX_USES_OPTIONS: function () {
            return d;
          },
        });
      var i = n(388032);
      function r(e, t) {
        return {
          value: e,
          get label() {
            return t();
          },
        };
      }
      let a = r(0, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 0 }),
        ),
        l = r(1, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 1 }),
        ),
        s = r(5, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 5 }),
        ),
        o = r(10, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 10 }),
        ),
        u = r(25, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 25 }),
        ),
        I = r(50, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 50 }),
        ),
        c = r(100, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 100 }),
        ),
        d = [a, l, s, o, u, I, c],
        _ = r(1800, () =>
          i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 }),
        ),
        T = r(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
        N = r(21600, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 }),
        ),
        m = r(43200, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 }),
        ),
        S = r(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
        f = r(604800, () =>
          i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 }),
        ),
        O = r(0, () => i.intl.string(i.t.PqEzn5)),
        E = [_, T, N, m, S, f, O];
    },
    411362: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_c2457b",
        header: "header_c2457b",
        modalContent: "modalContent_c2457b",
        searchBar: "searchBar_c2457b",
        rowDivider: "rowDivider_c2457b",
        rowContainer: "rowContainer_c2457b",
        rowLeft: "rowLeft_c2457b",
        rowAvatar: "rowAvatar_c2457b",
        rowNameContainer: "rowNameContainer_c2457b",
        rowName: "rowName_c2457b",
        rowSubName: "rowSubName_c2457b",
        rowRight: "rowRight_c2457b",
        footer: "footer_c2457b",
        footerDivider: "footerDivider_c2457b",
        activityInfoOuterContainer: "activityInfoOuterContainer_c2457b",
        activityInfoInnerContainer: "activityInfoInnerContainer_c2457b",
        activityInfoImage: "activityInfoImage_c2457b",
        activityInfoText: "activityInfoText_c2457b",
        ellipsis: "ellipsis_c2457b",
        copySendBar: "copySendBar_c2457b",
        copyButton: "copyButton_c2457b",
        acronym: "acronym_c2457b",
      };
    },
  },
]);
//# sourceMappingURL=b1a7280f30c2f62a1c0c.js.map
