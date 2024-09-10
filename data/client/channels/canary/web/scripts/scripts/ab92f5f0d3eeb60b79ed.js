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
      var a = n(348327),
        s = n.n(a),
        l = n(392711),
        r = n.n(l),
        i = n(442837),
        o = n(566006),
        d = n(542578),
        c = n(981631);
      function u(e) {
        var t, n;
        let { channelId: a, messageId: l, reaction: u } = e,
          m = (0, i.e7)(
            [d.Z],
            () => {
              let e = d.Z.getReactions(a, l, u.emoji, c.pTL, o.O.VOTE);
              return r().map(e, (e) => e);
            },
            [a, l, u.emoji],
            s(),
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
            return w;
          },
        }),
        n(47120),
        n(653041),
        n(411104);
      var a = n(735250),
        s = n(470079),
        l = n(120356),
        r = n.n(l),
        i = n(442837),
        o = n(481060),
        d = n(129861),
        c = n(700582),
        u = n(410030),
        m = n(111028),
        f = n(566006),
        b = n(222677),
        v = n(592125),
        _ = n(594174),
        h = n(768581),
        x = n(176354),
        p = n(5192),
        j = n(91047),
        g = n(79390),
        T = n(918088),
        S = n(22864),
        L = n(981631),
        M = n(689938),
        E = n(89451),
        N = n(144452);
      let C = f.O.VOTE;
      function O() {
        let e = (0, u.ZP)();
        return (0, a.jsxs)(o.EmptyState, {
          theme: e,
          children: [
            (0, a.jsx)(o.EmptyStateImage, {
              darkSrc: N,
              lightSrc: N,
              width: 106,
              height: 100,
              style: { marginBottom: 10 },
            }),
            (0, a.jsx)(o.EmptyStateText, {
              note: M.Z.Messages.POLL_VOTES_NO_RESULTS_SUBTITLE,
              noteClassName: E.emptyText,
              className: E.emptyTitle,
              children: M.Z.Messages.POLL_VOTES_NO_RESULTS_TITLE,
            }),
          ],
        });
      }
      function Z(e) {
        var t;
        let {
            emoji: n,
            emojiSize: s,
            imageClassNames: l,
            textClassNames: r,
          } = e,
          i =
            null == n.id
              ? x.ZP.getURL(n.name)
              : h.ZP.getEmojiURL({
                  id: n.id,
                  animated: null !== (t = n.animated) && void 0 !== t && t,
                  size: s,
                });
        return null != i && "" !== i
          ? (0, a.jsx)("img", { className: l, src: i, alt: n.name })
          : (0, a.jsx)("span", { className: r, children: n.name });
      }
      function A(e) {
        let {
          poll: t,
          reactionVoteCounts: n,
          selectedAnswerId: s,
          onSelectAnswer: l,
        } = e;
        return (0, a.jsx)(o.TabBar, {
          look: "custom",
          orientation: "vertical",
          "aria-label": M.Z.Messages.POLL_ANSWER_VOTES_MODAL_TAB_GROUP_LABEL,
          selectedItem: s,
          onItemSelect: l,
          children: t.answers.map((e) => {
            var t;
            let l = String(e.answer_id),
              i = null !== (t = n[l]) && void 0 !== t ? t : 0,
              { emoji: d, text: c } = e.poll_media,
              u = M.Z.Messages.POLL_ANSWER_VOTES_MODAL_VOTE_TAB.format({
                numVotes: i,
                option: c,
              }),
              f = s === l;
            return (0, a.jsxs)(
              o.TabBar.Item,
              {
                id: l,
                className: r()({ [E.voteDefault]: !f, [E.voteSelected]: f }),
                "aria-label": u,
                selectedItem: s,
                children: [
                  null != d
                    ? (0, a.jsx)(Z, {
                        emoji: d,
                        emojiSize: 16,
                        imageClassNames: E.emoji,
                        textClassNames: r()(E.emoji, E.emojiText),
                        "aria-hidden": !0,
                      })
                    : null,
                  (0, a.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: (0, a.jsx)(m.Z, {
                      position: "left",
                      "aria-hidden": !0,
                      children: c,
                    }),
                  }),
                  (0, a.jsxs)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-secondary",
                    className: E.voteCount,
                    children: ["(", i.toLocaleString(), ")"],
                  }),
                ],
              },
              l,
            );
          }),
        });
      }
      function I(e) {
        let { user: t, channel: n } = e,
          s = (0, i.e7)([_.default], () => _.default.getUser(t.id), [t]),
          l = p.ZP.useName(n.guild_id, n.id, t);
        return (0, a.jsxs)("div", {
          className: E.voterDefault,
          onContextMenu: (e) => (0, j.Pv)(e, t, n),
          children: [
            (0, a.jsx)("div", {
              className: E.voterAvatarContainer,
              children: (0, a.jsx)(c.Z, {
                user: null != s ? s : t,
                size: o.AvatarSizes.SIZE_24,
                "aria-hidden": !0,
              }),
            }),
            (0, a.jsxs)(o.Text, {
              tag: "span",
              variant: "text-md/normal",
              className: E.name,
              "aria-label": l,
              children: [
                (0, a.jsx)("span", {
                  className: t.isPomelo() ? "" : E.nickname,
                  children: l,
                }),
                (0, a.jsx)(d.Z, {
                  user: t,
                  className: E.tagFaded,
                  usernameClass: E.username,
                  discriminatorClass: E.discriminator,
                  forceUsername: !0,
                }),
              ],
            }),
          ],
        });
      }
      function P(e) {
        let { message: t, reaction: n, channel: l } = e,
          { reactors: r, hasMore: i } = (0, S.Z)({
            channelId: l.id,
            messageId: t.id,
            reaction: n,
          }),
          d = s.useRef(null),
          c = s.useRef(null),
          [u, m] = s.useState(!1),
          f = s.useCallback(async () => {
            let e = c.current;
            m(!0);
            let a = await b.U0({
              channelId: l.id,
              messageId: t.id,
              emoji: n.emoji,
              limit: L.pTL,
              after: e,
              type: C,
            });
            (c.current = a[a.length - 1].id), m(!1);
          }, [l.id, t.id, n.emoji]);
        s.useEffect(() => {
          f();
        }, []);
        let v = s.useCallback(() => {
            let { current: e } = d;
            if (null == e) return;
            let t = e.getScrollerState();
            t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 &&
              i &&
              !u &&
              f();
          }, [d, i, u, f]),
          _ = s.useCallback(
            (e, t) => {
              if (1 === e) return 0 === t ? 44 : 0;
              if (0 === e) {
                if (0 === t && 0 === r.length) return 440;
                if (null != r[t]) return 44;
              }
              return 0;
            },
            [r],
          ),
          h = s.useCallback(
            (e) => {
              let { section: t, row: n } = e,
                s = r[n];
              if (1 === t)
                return 0 === n
                  ? (0, a.jsx)(
                      o.Spinner,
                      { className: E.spinnerMore },
                      "hasMore",
                    )
                  : null;
              return 0 === r.length && u
                ? (0, a.jsx)(o.Spinner, { className: E.spinner }, "loadingMore")
                : null != s && (0, a.jsx)(I, { channel: l, user: s }, s.id);
            },
            [l, u, r],
          ),
          x = s.useMemo(() => {
            let e = [];
            return (
              0 === r.length && u
                ? e.push(0)
                : (e.push(r.length), i && e.push(1)),
              e
            );
          }, [i, u, r.length]);
        return (0, a.jsx)("div", {
          className: E.votersListContainer,
          children: (0, a.jsx)(o.List, {
            className: E.voters,
            fade: !0,
            ref: d,
            sections: x,
            sectionHeight: 0,
            rowHeight: _,
            renderRow: h,
            onScroll: i ? v : void 0,
          }),
        });
      }
      function w(e) {
        var t;
        let {
            message: n,
            initialAnswerId: l,
            onClose: r,
            transitionState: d,
          } = e,
          c = (0, i.e7)([v.Z], () => v.Z.getChannel(n.getChannelId())),
          [u, m] = s.useState(l),
          f = s.useMemo(() => {
            if (null != n.reactions) return (0, T.ef)(n.reactions, u);
          }, [n.reactions, u]),
          b = s.useMemo(() => (0, g.cZ)(n.reactions), [n.reactions]),
          _ = s.useMemo(
            () =>
              (function (e) {
                let t = {};
                for (let s of e) {
                  var n, a;
                  let e =
                      null !==
                        (a =
                          null === (n = s.count_details) || void 0 === n
                            ? void 0
                            : n.vote) && void 0 !== a
                        ? a
                        : 0,
                    l = s.emoji.id;
                  null != l && (t[l] = e);
                }
                return t;
              })(n.reactions),
            [n.reactions],
          ),
          h = _[u],
          x = s.useMemo(() => {
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
          p = M.Z.Messages.POLL_ANSWER_VOTES_MODAL_VOTE_TAB.format({
            numVotes: h,
            option: x[u],
          });
        if (null == c)
          throw Error(
            "PollVotesModal.render: Message does not have a channelId",
          );
        if (null == n.poll)
          throw Error("PollVotesModal.render: Message does not have a poll");
        return (0, a.jsxs)(o.ModalRoot, {
          "aria-label": M.Z.Messages.POLL_ANSWER_VOTES_MODAL_TITLE,
          transitionState: d,
          size: o.ModalSize.MEDIUM,
          children: [
            (0, a.jsxs)(o.ModalHeader, {
              className: E.header,
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(o.Text, {
                      color: "header-primary",
                      variant: "text-md/semibold",
                      className: E.question,
                      children: n.poll.question.text,
                    }),
                    (0, a.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "text-normal",
                      children: M.Z.Messages.POLL_VOTES_COUNT.format({
                        count: b.toLocaleString(),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(o.ModalCloseButton, {
                  onClick: r,
                  className: E.close,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: E.content,
              children: [
                (0, a.jsx)(o.Scroller, {
                  className: E.scroller,
                  fade: !0,
                  children: (0, a.jsx)(A, {
                    poll: n.poll,
                    selectedAnswerId: u,
                    onSelectAnswer: m,
                    reactionVoteCounts: _,
                  }),
                }),
                (0, a.jsx)(o.TabBar.Panel, {
                  id: u,
                  "aria-label": p,
                  className: E.panel,
                  children:
                    null != f && h > 0
                      ? (0, a.jsx)(P, { message: n, reaction: f, channel: c })
                      : (0, a.jsx)(O, {}),
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
//# sourceMappingURL=ab92f5f0d3eeb60b79ed.js.map
