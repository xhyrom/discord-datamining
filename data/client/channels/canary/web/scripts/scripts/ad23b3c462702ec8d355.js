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
            return R;
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
        u = n(493773),
        m = n(410030),
        f = n(111028),
        b = n(566006),
        v = n(222677),
        h = n(592125),
        x = n(594174),
        p = n(768581),
        j = n(176354),
        g = n(5192),
        _ = n(91047),
        S = n(79390),
        C = n(918088),
        N = n(22864),
        T = n(981631),
        M = n(388032),
        w = n(561896),
        y = n(144452);
      let Z = b.O.VOTE;
      function k() {
        let e = (0, m.ZP)();
        return (0, l.jsxs)(o.EmptyState, {
          theme: e,
          children: [
            (0, l.jsx)(o.EmptyStateImage, {
              darkSrc: y,
              lightSrc: y,
              width: 106,
              height: 100,
              style: { marginBottom: 10 },
            }),
            (0, l.jsx)(o.EmptyStateText, {
              note: M.intl.string(M.t.bwytdn),
              noteClassName: w.emptyText,
              className: w.emptyTitle,
              children: M.intl.string(M.t.vhQK3t),
            }),
          ],
        });
      }
      function I(e) {
        var t;
        let {
            emoji: n,
            emojiSize: a,
            imageClassNames: r,
            textClassNames: s,
          } = e,
          i =
            null == n.id
              ? j.ZP.getURL(n.name)
              : p.ZP.getEmojiURL({
                  id: n.id,
                  animated: null !== (t = n.animated) && void 0 !== t && t,
                  size: a,
                });
        return null != i && "" !== i
          ? (0, l.jsx)("img", { className: r, src: i, alt: n.name })
          : (0, l.jsx)("span", { className: s, children: n.name });
      }
      function E(e) {
        let {
          poll: t,
          reactionVoteCounts: n,
          selectedAnswerId: a,
          onSelectAnswer: r,
        } = e;
        return (0, l.jsx)(o.TabBar, {
          look: "custom",
          orientation: "vertical",
          "aria-label": M.intl.string(M.t["qbir+/"]),
          selectedItem: a,
          onItemSelect: r,
          children: t.answers.map((e) => {
            var t;
            let r = String(e.answer_id),
              i = null !== (t = n[r]) && void 0 !== t ? t : 0,
              { emoji: d, text: c } = e.poll_media,
              u = M.intl.formatToPlainString(M.t.wqBc7O, {
                numVotes: i,
                option: c,
              }),
              m = a === r;
            return (0, l.jsxs)(
              o.TabBar.Item,
              {
                id: r,
                className: s()({ [w.voteDefault]: !m, [w.voteSelected]: m }),
                "aria-label": u,
                selectedItem: a,
                children: [
                  null != d
                    ? (0, l.jsx)(I, {
                        emoji: d,
                        emojiSize: 16,
                        imageClassNames: w.emoji,
                        textClassNames: s()(w.emoji, w.emojiText),
                        "aria-hidden": !0,
                      })
                    : null,
                  (0, l.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: (0, l.jsx)(f.Z, {
                      position: "left",
                      "aria-hidden": !0,
                      children: c,
                    }),
                  }),
                  (0, l.jsxs)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-secondary",
                    className: w.voteCount,
                    children: ["(", i.toLocaleString(), ")"],
                  }),
                ],
              },
              r,
            );
          }),
        });
      }
      function P(e) {
        let { user: t, channel: n } = e,
          a = (0, i.e7)([x.default], () => x.default.getUser(t.id), [t]),
          r = g.ZP.useName(n.guild_id, n.id, t);
        return (0, l.jsxs)("div", {
          className: w.voterDefault,
          onContextMenu: (e) => (0, _.Pv)(e, t, n),
          children: [
            (0, l.jsx)("div", {
              className: w.voterAvatarContainer,
              children: (0, l.jsx)(c.Z, {
                user: null != a ? a : t,
                size: o.AvatarSizes.SIZE_24,
                "aria-hidden": !0,
              }),
            }),
            (0, l.jsxs)(o.Text, {
              tag: "span",
              variant: "text-md/normal",
              className: w.name,
              "aria-label": r,
              children: [
                (0, l.jsx)("span", {
                  className: t.isPomelo() ? "" : w.nickname,
                  children: r,
                }),
                (0, l.jsx)(d.Z, {
                  user: t,
                  className: w.tagFaded,
                  usernameClass: w.username,
                  discriminatorClass: w.discriminator,
                  forceUsername: !0,
                }),
              ],
            }),
          ],
        });
      }
      function L(e) {
        let { message: t, reaction: n, channel: r } = e,
          { reactors: s, hasMore: i } = (0, N.Z)({
            channelId: r.id,
            messageId: t.id,
            reaction: n,
          }),
          d = a.useRef(null),
          c = a.useRef(null),
          [m, f] = a.useState(!1),
          b = a.useCallback(async () => {
            let e = c.current;
            f(!0);
            let l = await v.U0({
              channelId: r.id,
              messageId: t.id,
              emoji: n.emoji,
              limit: T.pTL,
              after: e,
              type: Z,
            });
            (c.current = l[l.length - 1].id), f(!1);
          }, [r.id, t.id, n.emoji]);
        (0, u.Z)(() => {
          b();
        });
        let h = a.useCallback(() => {
            let { current: e } = d;
            if (null == e) return;
            let t = e.getScrollerState();
            t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 &&
              i &&
              !m &&
              b();
          }, [d, i, m, b]),
          x = a.useCallback(
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
          p = a.useCallback(
            (e) => {
              let { section: t, row: n } = e,
                a = s[n];
              if (1 === t)
                return 0 === n
                  ? (0, l.jsx)(
                      o.Spinner,
                      { className: w.spinnerMore },
                      "hasMore",
                    )
                  : null;
              return 0 === s.length && m
                ? (0, l.jsx)(o.Spinner, { className: w.spinner }, "loadingMore")
                : null != a && (0, l.jsx)(P, { channel: r, user: a }, a.id);
            },
            [r, m, s],
          ),
          j = a.useMemo(() => {
            let e = [];
            return (
              0 === s.length && m
                ? e.push(0)
                : (e.push(s.length), i && e.push(1)),
              e
            );
          }, [i, m, s.length]);
        return (0, l.jsx)("div", {
          className: w.votersListContainer,
          children: (0, l.jsx)(o.List, {
            className: w.voters,
            fade: !0,
            ref: d,
            sections: j,
            sectionHeight: 0,
            rowHeight: x,
            renderRow: p,
            onScroll: i ? h : void 0,
          }),
        });
      }
      function R(e) {
        var t;
        let {
            message: n,
            initialAnswerId: r,
            onClose: s,
            transitionState: d,
          } = e,
          c = (0, i.e7)([h.Z], () => h.Z.getChannel(n.getChannelId())),
          [u, m] = a.useState(r),
          f = a.useMemo(() => {
            if (null != n.reactions) return (0, C.ef)(n.reactions, u);
          }, [n.reactions, u]),
          b = a.useMemo(() => (0, S.cZ)(n.reactions), [n.reactions]),
          v = a.useMemo(
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
          x = v[u],
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
          j = M.intl.formatToPlainString(M.t.wqBc7O, {
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
          "aria-label": M.intl.string(M.t.H0lNmp),
          transitionState: d,
          size: o.ModalSize.MEDIUM,
          children: [
            (0, l.jsxs)(o.ModalHeader, {
              className: w.header,
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(o.Text, {
                      color: "header-primary",
                      variant: "text-md/semibold",
                      className: w.question,
                      children: n.poll.question.text,
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "text-normal",
                      children: M.intl.format(M.t.XRkuoa, {
                        count: b.toLocaleString(),
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)(o.ModalCloseButton, {
                  onClick: s,
                  className: w.close,
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: w.content,
              children: [
                (0, l.jsx)(o.Scroller, {
                  className: w.scroller,
                  fade: !0,
                  children: (0, l.jsx)(E, {
                    poll: n.poll,
                    selectedAnswerId: u,
                    onSelectAnswer: m,
                    reactionVoteCounts: v,
                  }),
                }),
                (0, l.jsx)(o.TabBar.Panel, {
                  id: u,
                  "aria-label": j,
                  className: w.panel,
                  children:
                    null != f && x > 0
                      ? (0, l.jsx)(L, { message: n, reaction: f, channel: c })
                      : (0, l.jsx)(k, {}),
                }),
              ],
            }),
          ],
        });
      }
    },
    561896: function (e, t, n) {
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
//# sourceMappingURL=ad23b3c462702ec8d355.js.map
