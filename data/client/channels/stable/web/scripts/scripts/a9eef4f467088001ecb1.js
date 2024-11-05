"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74590"],
  {
    144452: function (e) {
      e.exports = "/assets/cd3ecd14ba6499900584.svg";
    },
    22864: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = n(348327),
        a = n.n(l),
        r = n(392711),
        s = n.n(r),
        i = n(442837),
        o = n(566006),
        d = n(542578),
        c = n(981631);
      function u(e) {
        var t, n;
        let { channelId: l, messageId: r, reaction: u } = e,
          m = (0, i.e7)(
            [d.Z],
            () => {
              let e = d.Z.getReactions(l, r, u.emoji, c.pTL, o.O.VOTE);
              return s().map(e, (e) => e);
            },
            [l, r, u.emoji],
            a(),
          );
        return {
          reactors: m,
          hasMore:
            (null !==
              (n =
                null === (t = u.count_details) || void 0 === t
                  ? void 0
                  : t.vote) && void 0 !== n
              ? n
              : 0) > m.length,
        };
      }
    },
    651081: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        }),
        n(47120),
        n(653041),
        n(411104);
      var l = n(200651),
        a = n(192379),
        r = n(120356),
        s = n.n(r),
        i = n(442837),
        o = n(481060),
        d = n(129861),
        c = n(700582),
        u = n(410030),
        m = n(111028),
        f = n(566006),
        b = n(222677),
        v = n(592125),
        h = n(594174),
        x = n(768581),
        p = n(176354),
        j = n(5192),
        g = n(91047),
        _ = n(79390),
        S = n(918088),
        C = n(22864),
        N = n(981631),
        T = n(388032),
        M = n(89451),
        w = n(144452);
      let y = f.O.VOTE;
      function k() {
        let e = (0, u.ZP)();
        return (0, l.jsxs)(o.EmptyState, {
          theme: e,
          children: [
            (0, l.jsx)(o.EmptyStateImage, {
              darkSrc: w,
              lightSrc: w,
              width: 106,
              height: 100,
              style: { marginBottom: 10 },
            }),
            (0, l.jsx)(o.EmptyStateText, {
              note: T.intl.string(T.t.bwytdn),
              noteClassName: M.emptyText,
              className: M.emptyTitle,
              children: T.intl.string(T.t.vhQK3t),
            }),
          ],
        });
      }
      function Z(e) {
        var t;
        let {
            emoji: n,
            emojiSize: a,
            imageClassNames: r,
            textClassNames: s,
          } = e,
          i =
            null == n.id
              ? p.ZP.getURL(n.name)
              : x.ZP.getEmojiURL({
                  id: n.id,
                  animated: null !== (t = n.animated) && void 0 !== t && t,
                  size: a,
                });
        return null != i && "" !== i
          ? (0, l.jsx)("img", { className: r, src: i, alt: n.name })
          : (0, l.jsx)("span", { className: s, children: n.name });
      }
      function I(e) {
        let {
          poll: t,
          reactionVoteCounts: n,
          selectedAnswerId: a,
          onSelectAnswer: r,
        } = e;
        return (0, l.jsx)(o.TabBar, {
          look: "custom",
          orientation: "vertical",
          "aria-label": T.intl.string(T.t["qbir+/"]),
          selectedItem: a,
          onItemSelect: r,
          children: t.answers.map((e) => {
            var t;
            let r = String(e.answer_id),
              i = null !== (t = n[r]) && void 0 !== t ? t : 0,
              { emoji: d, text: c } = e.poll_media,
              u = T.intl.formatToPlainString(T.t.wqBc7O, {
                numVotes: i,
                option: c,
              }),
              f = a === r;
            return (0, l.jsxs)(
              o.TabBar.Item,
              {
                id: r,
                className: s()({ [M.voteDefault]: !f, [M.voteSelected]: f }),
                "aria-label": u,
                selectedItem: a,
                children: [
                  null != d
                    ? (0, l.jsx)(Z, {
                        emoji: d,
                        emojiSize: 16,
                        imageClassNames: M.emoji,
                        textClassNames: s()(M.emoji, M.emojiText),
                        "aria-hidden": !0,
                      })
                    : null,
                  (0, l.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: (0, l.jsx)(m.Z, {
                      position: "left",
                      "aria-hidden": !0,
                      children: c,
                    }),
                  }),
                  (0, l.jsxs)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-secondary",
                    className: M.voteCount,
                    children: ["(", i.toLocaleString(), ")"],
                  }),
                ],
              },
              r,
            );
          }),
        });
      }
      function E(e) {
        let { user: t, channel: n } = e,
          a = (0, i.e7)([h.default], () => h.default.getUser(t.id), [t]),
          r = j.ZP.useName(n.guild_id, n.id, t);
        return (0, l.jsxs)("div", {
          className: M.voterDefault,
          onContextMenu: (e) => (0, g.Pv)(e, t, n),
          children: [
            (0, l.jsx)("div", {
              className: M.voterAvatarContainer,
              children: (0, l.jsx)(c.Z, {
                user: null != a ? a : t,
                size: o.AvatarSizes.SIZE_24,
                "aria-hidden": !0,
              }),
            }),
            (0, l.jsxs)(o.Text, {
              tag: "span",
              variant: "text-md/normal",
              className: M.name,
              "aria-label": r,
              children: [
                (0, l.jsx)("span", {
                  className: t.isPomelo() ? "" : M.nickname,
                  children: r,
                }),
                (0, l.jsx)(d.Z, {
                  user: t,
                  className: M.tagFaded,
                  usernameClass: M.username,
                  discriminatorClass: M.discriminator,
                  forceUsername: !0,
                }),
              ],
            }),
          ],
        });
      }
      function P(e) {
        let { message: t, reaction: n, channel: r } = e,
          { reactors: s, hasMore: i } = (0, C.Z)({
            channelId: r.id,
            messageId: t.id,
            reaction: n,
          }),
          d = a.useRef(null),
          c = a.useRef(null),
          [u, m] = a.useState(!1),
          f = a.useCallback(async () => {
            let e = c.current;
            m(!0);
            let l = await b.U0({
              channelId: r.id,
              messageId: t.id,
              emoji: n.emoji,
              limit: N.pTL,
              after: e,
              type: y,
            });
            (c.current = l[l.length - 1].id), m(!1);
          }, [r.id, t.id, n.emoji]);
        a.useEffect(() => {
          f();
        }, []);
        let v = a.useCallback(() => {
            let { current: e } = d;
            if (null == e) return;
            let t = e.getScrollerState();
            t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 &&
              i &&
              !u &&
              f();
          }, [d, i, u, f]),
          h = a.useCallback(
            (e, t) => {
              if (1 === e) return 0 === t ? 44 : 0;
              if (0 === e) {
                if (0 === t && 0 === s.length) return 440;
                if (null != s[t]) return 44;
              }
              return 0;
            },
            [s],
          ),
          x = a.useCallback(
            (e) => {
              let { section: t, row: n } = e,
                a = s[n];
              if (1 === t)
                return 0 === n
                  ? (0, l.jsx)(
                      o.Spinner,
                      { className: M.spinnerMore },
                      "hasMore",
                    )
                  : null;
              return 0 === s.length && u
                ? (0, l.jsx)(o.Spinner, { className: M.spinner }, "loadingMore")
                : null != a && (0, l.jsx)(E, { channel: r, user: a }, a.id);
            },
            [r, u, s],
          ),
          p = a.useMemo(() => {
            let e = [];
            return (
              0 === s.length && u
                ? e.push(0)
                : (e.push(s.length), i && e.push(1)),
              e
            );
          }, [i, u, s.length]);
        return (0, l.jsx)("div", {
          className: M.votersListContainer,
          children: (0, l.jsx)(o.List, {
            className: M.voters,
            fade: !0,
            ref: d,
            sections: p,
            sectionHeight: 0,
            rowHeight: h,
            renderRow: x,
            onScroll: i ? v : void 0,
          }),
        });
      }
      function L(e) {
        var t;
        let {
            message: n,
            initialAnswerId: r,
            onClose: s,
            transitionState: d,
          } = e,
          c = (0, i.e7)([v.Z], () => v.Z.getChannel(n.getChannelId())),
          [u, m] = a.useState(r),
          f = a.useMemo(() => {
            if (null != n.reactions) return (0, S.ef)(n.reactions, u);
          }, [n.reactions, u]),
          b = a.useMemo(() => (0, _.cZ)(n.reactions), [n.reactions]),
          h = a.useMemo(
            () =>
              (function (e) {
                let t = {};
                for (let a of e) {
                  var n, l;
                  let e =
                      null !==
                        (l =
                          null === (n = a.count_details) || void 0 === n
                            ? void 0
                            : n.vote) && void 0 !== l
                        ? l
                        : 0,
                    r = a.emoji.id;
                  null != r && (t[r] = e);
                }
                return t;
              })(n.reactions),
            [n.reactions],
          ),
          x = h[u],
          p = a.useMemo(() => {
            var e;
            let t = {};
            return (
              null === (e = n.poll) ||
                void 0 === e ||
                e.answers.forEach((e) => {
                  var n;
                  (null == e ? void 0 : e.answer_id) != null &&
                    (null === (n = e.poll_media) || void 0 === n
                      ? void 0
                      : n.text) != null &&
                    (t[e.answer_id] = e.poll_media.text);
                }),
              t
            );
          }, [null === (t = n.poll) || void 0 === t ? void 0 : t.answers]),
          j = T.intl.formatToPlainString(T.t.wqBc7O, {
            numVotes: x,
            option: p[u],
          });
        if (null == c)
          throw Error(
            "PollVotesModal.render: Message does not have a channelId",
          );
        if (null == n.poll)
          throw Error("PollVotesModal.render: Message does not have a poll");
        return (0, l.jsxs)(o.ModalRoot, {
          "aria-label": T.intl.string(T.t.H0lNmp),
          transitionState: d,
          size: o.ModalSize.MEDIUM,
          children: [
            (0, l.jsxs)(o.ModalHeader, {
              className: M.header,
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(o.Text, {
                      color: "header-primary",
                      variant: "text-md/semibold",
                      className: M.question,
                      children: n.poll.question.text,
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "text-normal",
                      children: T.intl.format(T.t.XRkuoa, {
                        count: b.toLocaleString(),
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)(o.ModalCloseButton, {
                  onClick: s,
                  className: M.close,
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: M.content,
              children: [
                (0, l.jsx)(o.Scroller, {
                  className: M.scroller,
                  fade: !0,
                  children: (0, l.jsx)(I, {
                    poll: n.poll,
                    selectedAnswerId: u,
                    onSelectAnswer: m,
                    reactionVoteCounts: h,
                  }),
                }),
                (0, l.jsx)(o.TabBar.Panel, {
                  id: u,
                  "aria-label": j,
                  className: M.panel,
                  children:
                    null != f && x > 0
                      ? (0, l.jsx)(P, { message: n, reaction: f, channel: c })
                      : (0, l.jsx)(k, {}),
                }),
              ],
            }),
          ],
        });
      }
    },
    89451: function (e, t, n) {
      e.exports = {
        header: "header_cbdbf0",
        question: "question_cbdbf0",
        close: "close_cbdbf0",
        content: "content_cbdbf0",
        panel: "panel_cbdbf0",
        scroller: "scroller_cbdbf0",
        votersListContainer: "votersListContainer_cbdbf0",
        voters: "voters_cbdbf0",
        voteSelected: "voteSelected_cbdbf0",
        voteDefault: "voteDefault_cbdbf0",
        emoji: "emoji_cbdbf0",
        emojiText: "emojiText_cbdbf0",
        voteCount: "voteCount_cbdbf0",
        spinner: "spinner_cbdbf0",
        spinnerMore: "spinnerMore_cbdbf0",
        voterDefault: "voterDefault_cbdbf0 voter_cbdbf0",
        voterAvatarContainer: "voterAvatarContainer_cbdbf0",
        name: "name_cbdbf0",
        nickname: "nickname_cbdbf0",
        username: "username_cbdbf0",
        tagFaded: "tagFaded_cbdbf0",
        discriminator: "discriminator_cbdbf0",
        emptyTitle: "emptyTitle_cbdbf0",
        emptyText: "emptyText_cbdbf0",
      };
    },
  },
]);
//# sourceMappingURL=a9eef4f467088001ecb1.js.map
