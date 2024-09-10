"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79921"],
  {
    699099: function (e, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return S;
          },
        }),
        l(47120);
      var s = l(735250),
        n = l(470079),
        r = l(120356),
        a = l.n(r),
        u = l(442837),
        i = l(481060),
        o = l(988298),
        c = l(461745),
        d = l(212819),
        h = l(43267),
        _ = l(447003),
        f = l(933557),
        p = l(606206),
        I = l(585483),
        E = l(981631),
        N = l(689938),
        T = l(539782),
        m = l(113207);
      function C(e, t, l) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = l),
          e
        );
      }
      let A = (e) => {
          let { channel: t, categoryName: l, guildName: n } = e,
            r = i.TextIcon;
          return (
            (0, _.Z)(t)
              ? (r = i.TextLockIcon)
              : t.isNSFW() && (r = i.TextWarningIcon),
            (0, s.jsxs)("div", {
              className: T.result,
              children: [
                (0, s.jsx)(r, {
                  className: T.resultIcon,
                  colorClass: T.resultIconBackground,
                  size: "xs",
                }),
                (0, s.jsxs)("div", {
                  className: T.resultText,
                  children: [
                    (0, s.jsx)("span", { children: t.name }),
                    (0, s.jsx)("span", {
                      className: T.resultCategoryName,
                      children: l,
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: T.resultGuildName,
                  children: n,
                }),
              ],
            })
          );
        },
        v = (e) => {
          let { channel: t } = e,
            l = (0, f.ZP)(t);
          return (0, s.jsxs)("div", {
            className: T.result,
            children: [
              (0, s.jsx)(i.Avatar, {
                src: (0, h.x)(t),
                "aria-label": null != l ? l : "",
                className: T.resultAvatar,
                size: i.AvatarSizes.SIZE_32,
              }),
              (0, s.jsx)("div", { className: T.resultText, children: l }),
            ],
          });
        },
        g = (e) => {
          let t,
            { user: l, comparator: n, status: r } = e;
          if (null != n && n === l.tag) {
            let e = n.split("#");
            e.pop(), (t = e.join("#"));
          } else t = null != n && "" !== n ? n : l.username;
          return (0, s.jsxs)("div", {
            className: T.result,
            children: [
              (0, s.jsx)(i.Avatar, {
                src: l.getAvatarURL(void 0, 32),
                "aria-label": l.username,
                className: T.resultAvatar,
                size: i.AvatarSizes.SIZE_32,
                status: r,
              }),
              (0, s.jsxs)("div", {
                className: T.resultText,
                children: [
                  (0, s.jsx)("span", { children: t }),
                  (0, s.jsx)("span", {
                    className: T.resultUsername,
                    children: l.tag,
                  }),
                ],
              }),
            ],
          });
        };
      class L extends n.Component {
        render() {
          let e, t;
          let { result: l, selected: n, sending: r } = this.props;
          switch (l.type) {
            case d.h8.GROUP_DM:
              e = (0, s.jsx)(v, { channel: l.data.record });
              break;
            case d.h8.TEXT_CHANNEL: {
              let { categoryName: t, guildName: n } = l;
              e = (0, s.jsx)(A, {
                channel: l.data.record,
                categoryName: t,
                guildName: n,
              });
              break;
            }
            case d.h8.USER: {
              let {
                data: { comparator: t, record: n },
                status: r,
              } = l;
              e = (0, s.jsx)(g, { comparator: t, user: n, status: r });
            }
          }
          return (
            (t = l.sent
              ? (0, s.jsx)(i.Button, {
                  className: T.inviteButton,
                  look: i.Button.Looks.LINK,
                  size: i.Button.Sizes.SMALL,
                  disabled: !0,
                  color: i.Button.Colors.WHITE,
                  children: N.Z.Messages.ACTIVITY_INVITE_MODAL_SENT,
                })
              : (0, s.jsx)(i.Button, {
                  color: i.Button.Colors.GREEN,
                  look: n ? i.Button.Looks.FILLED : i.Button.Looks.OUTLINED,
                  className: T.inviteButton,
                  size: i.Button.Sizes.SMALL,
                  submitting: r,
                  onClick: this.handleClick,
                  children: N.Z.Messages.ACTIVITY_INVITE_MODAL_INVITE,
                })),
            (0, s.jsxs)("div", {
              className: a()(T.resultWrapper, { [T.resultWrapperSelected]: n }),
              onMouseEnter: this.handleMouseEnter,
              children: [e, t],
            })
          );
        }
        constructor(...e) {
          super(...e),
            C(this, "handleClick", () => {
              let { onInvite: e, row: t } = this.props;
              e(t);
            }),
            C(this, "handleMouseEnter", () => {
              let { onMouseEnter: e, row: t } = this.props;
              e(t);
            });
        }
      }
      function S(e) {
        let { transitionState: t, onClose: l } = e,
          {
            results: r,
            query: a,
            activity: h,
          } = (0, u.cj)(
            [p.Z],
            () => ({
              results: p.Z.getResults(),
              query: p.Z.getQuery(),
              activity: p.Z.getActivity(),
            }),
            [],
          ),
          [_, f] = n.useState(a),
          [C, A] = n.useState(0),
          [v, g] = n.useState([]),
          [S, x] = n.useState(!1),
          M = n.useRef(null),
          y = n.useCallback(() => {
            var e;
            null === (e = M.current) ||
              void 0 === e ||
              e.scrollPageUp({ animate: !0 });
          }, [M]),
          R = n.useCallback(() => {
            var e;
            null === (e = M.current) ||
              void 0 === e ||
              e.scrollPageDown({ animate: !0 });
          }, [M]);
        n.useEffect(
          () => (
            I.S.subscribe(E.CkL.SCROLL_PAGE_UP, y),
            () => {
              I.S.unsubscribe(E.CkL.SCROLL_PAGE_UP, y);
            }
          ),
          [y],
        ),
          n.useEffect(
            () => (
              I.S.subscribe(E.CkL.SCROLL_PAGE_DOWN, R),
              () => {
                I.S.unsubscribe(E.CkL.SCROLL_PAGE_DOWN, R);
              }
            ),
            [R],
          ),
          n.useEffect(() => {
            null == h && l();
          }, [l, h]),
          n.useEffect(() => {
            var e;
            null === (e = M.current) || void 0 === e || e.scrollToTop(), A(0);
          }, [M, r]);
        let O = n.useCallback(
            (e) => {
              let {
                data: t,
                data: {
                  record: { id: l },
                },
              } = r[e];
              if (!(null == l || v.includes(l)))
                switch ((g([...v, l]), t.type)) {
                  case d.h8.GROUP_DM:
                  case d.h8.TEXT_CHANNEL:
                    (0, o.GG)(t.record.id);
                    break;
                  case d.h8.USER:
                    (0, o.R2)(t.record.id);
                }
            },
            [r, v],
          ),
          j = n.useCallback(
            (e) => {
              A(e);
            },
            [A],
          ),
          D = () => {
            b("");
          },
          b = (e) => {
            f(e), (0, o.rh)(e);
          };
        return null == h
          ? null
          : (0, s.jsxs)(i.ModalRoot, {
              transitionState: t,
              size: i.ModalSize.SMALL,
              "aria-label": N.Z.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
                name: h.name,
              }),
              children: [
                (0, s.jsxs)(i.ModalHeader, {
                  separator: S,
                  children: [
                    (0, s.jsx)(i.ModalCloseButton, {
                      className: T.closeButton,
                      onClick: l,
                    }),
                    (0, s.jsxs)("div", {
                      className: T.header,
                      children: [
                        (0, s.jsx)(i.FormTitle, {
                          tag: "h2",
                          className: m.marginBottom8,
                          children:
                            N.Z.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
                              name: h.name,
                            }),
                        }),
                        (0, s.jsx)(c.ZP, {
                          size: c.ZP.Sizes.MEDIUM,
                          query: _,
                          selectedSection: 0,
                          selectedRow: C,
                          sections: [r.length],
                          className: m.marginTop4,
                          onSelect: (e, t) => {
                            null == t ? D() : O(t);
                          },
                          onSelectionChange: (e, t) => {
                            var l;
                            A(t),
                              null === (l = M.current) ||
                                void 0 === l ||
                                l.scrollIntoViewRect({
                                  start: 44 * t,
                                  end: 44 * t + 44,
                                });
                          },
                          onQueryChange: b,
                          placeholder:
                            N.Z.Messages
                              .ACTIVITY_INVITE_MODAL_SEARCH_PLACEHOLDER,
                          autoFocus: !0,
                          onClear: D,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(i.ModalListContent, {
                  scrollerRef: M,
                  className: 0 === r.length ? T.noResults : T.results,
                  paddingBottom: 8,
                  sections: [r.length],
                  sectionHeight: 0,
                  renderSection: E.VqG,
                  rowHeight: (e, t) => (e > 0 ? 0 : null != r[t] ? 44 : 0),
                  renderRow: (e) => {
                    let { section: t, row: l } = e;
                    if (t > 0) return null;
                    let n = r[l];
                    return null == n
                      ? null
                      : (0, s.jsx)(
                          L,
                          {
                            row: l,
                            result: n,
                            sending:
                              null != n.data.record.id &&
                              v.includes(n.data.record.id),
                            selected: l === C,
                            onMouseEnter: j,
                            onInvite: O,
                          },
                          n.data.record.id,
                        );
                  },
                  onScroll: (e) => {
                    let t = e.currentTarget.scrollTop > 0;
                    S !== t && x(t);
                  },
                }),
              ],
            });
      }
    },
    606206: function (e, t, l) {
      let s;
      l(47120), l(653041), l(411104);
      var n,
        r,
        a,
        u,
        i = l(442837),
        o = l(570140),
        c = l(278323),
        d = l(212819),
        h = l(933557),
        _ = l(592125),
        f = l(430824),
        p = l(293273),
        I = l(158776),
        E = l(699516),
        N = l(594174),
        T = l(55589),
        m = l(981631);
      let C = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
        A = null,
        v = null,
        g = [],
        L = [];
      function S(e) {
        (g = [...g, e]),
          (L = L.map((e) => ({ ...e, sent: g.includes(e.data.record.id) }))),
          R.emitChange();
      }
      function x() {
        (A = null), null != s && (s.destroy(), (s = null)), null != v && v();
      }
      function M() {
        let e =
          null != A && null != A.application_id
            ? p.Z.getApplicationActivity(A.application_id)
            : null;
        if (null != A && (null == e || null == e.party || null == e.party.id))
          return x();
      }
      class y extends (n = i.ZP.Store) {
        initialize() {
          this.waitFor(p.Z);
        }
        getActivity() {
          return A;
        }
        getQuery() {
          var e;
          return null !== (e = null == s ? void 0 : s.query) && void 0 !== e
            ? e
            : "";
        }
        getResults() {
          return L;
        }
      }
      (u = "ActivityInviteModalStore"),
        (a = "displayName") in (r = y)
          ? Object.defineProperty(r, a, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[a] = u);
      let R = new y(o.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
          (A = e.activity),
            (v = e.resolve),
            (g = []),
            null == s &&
              (s = new d.ZP(
                (e, t) => {
                  var l;
                  return (
                    (l = e),
                    void ((L = (
                      "" === t.trim()
                        ? (function () {
                            let e = [];
                            return (
                              T.Z.getPrivateChannelIds().forEach((t) => {
                                let l = _.Z.getChannel(t);
                                if (null != l)
                                  if (l.type === m.d4z.DM) {
                                    let t = l.getRecipientId(),
                                      s =
                                        null != t ? N.default.getUser(t) : null;
                                    null != s &&
                                      e.push({
                                        type: d.h8.USER,
                                        record: s,
                                        score: 0,
                                      });
                                  } else
                                    l.isMultiUserDM() &&
                                      e.push({
                                        type: d.h8.GROUP_DM,
                                        record: l,
                                        score: 0,
                                      });
                              }),
                              e
                            );
                          })()
                        : l
                    ).map((e) => {
                      switch (e.type) {
                        case d.h8.USER: {
                          let { record: t } = e;
                          return {
                            type: d.h8.USER,
                            sent: g.includes(t.id),
                            status: I.Z.getStatus(t.id),
                            data: e,
                          };
                        }
                        case d.h8.TEXT_CHANNEL: {
                          let { record: t } = e,
                            l = _.Z.getChannel(t.parent_id),
                            s = f.Z.getGuild(t.guild_id);
                          return {
                            type: d.h8.TEXT_CHANNEL,
                            sent: g.includes(t.id),
                            categoryName:
                              null != l ? (0, h.F6)(l, N.default, E.Z) : "",
                            guildName: null != s ? s.toString() : "",
                            data: e,
                          };
                        }
                        case d.h8.GROUP_DM: {
                          let { record: t } = e;
                          return {
                            type: d.h8.GROUP_DM,
                            sent: g.includes(t.id),
                            data: e,
                          };
                        }
                        default:
                          throw Error("Unknown Result Type: ".concat(e.type));
                      }
                    })),
                    R.emitChange())
                  );
                },
                C,
                100,
              )),
            s.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
          let { query: t } = e;
          null != s && s.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
          if (null == A) return;
          let t = e.channelId,
            l = e.userId;
          null != t
            ? c.Z.sendActivityInvite({
                channelId: t,
                type: m.mFx.JOIN,
                activity: A,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => S(t))
            : null != l &&
              c.Z.sendActivityInviteUser({
                userId: l,
                type: m.mFx.JOIN,
                activity: A,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => S(l));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: x,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          return !!t && null != A && (x(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: M,
        RPC_APP_DISCONNECTED: M,
      });
      t.Z = R;
    },
    539782: function (e, t, l) {
      e.exports = {
        header: "header_faef29",
        closeButton: "closeButton_faef29",
        resultWrapper: "resultWrapper_faef29",
        resultWrapperSelected: "resultWrapperSelected_faef29",
        result: "result_faef29",
        resultAvatar: "resultAvatar_faef29",
        resultIcon: "resultIcon_faef29 resultAvatar_faef29",
        resultIconBackground: "resultIconBackground_faef29",
        resultText: "resultText_faef29",
        resultUsername: "resultUsername_faef29",
        resultCategoryName: "resultCategoryName_faef29",
        resultGuildName: "resultGuildName_faef29",
        inviteButton: "inviteButton_faef29",
        results: "results_faef29",
        noResults: "noResults_faef29 results_faef29",
      };
    },
  },
]);
//# sourceMappingURL=d9150631b37e6f54d74f.js.map
