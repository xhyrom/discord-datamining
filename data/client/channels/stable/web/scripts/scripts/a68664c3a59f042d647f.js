"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18895"],
  {
    784370: function (e) {
      e.exports = "/assets/ec5614ac16f5a30ed9c6.gif";
    },
    64395: function (e) {
      e.exports = "/assets/0ba29b416c97dd8e2402.svg";
    },
    966390: function (e, t, n) {
      n(47120), n(789020);
      var i = n(481060),
        o = n(570140),
        a = n(430742),
        s = n(904245),
        l = n(166459),
        r = n(531643),
        c = n(881052),
        d = n(673750),
        u = n(141795),
        h = n(476326),
        m = n(680287),
        p = n(247206),
        f = n(539573),
        g = n(786761),
        v = n(3148),
        b = n(48854),
        T = n(785359),
        x = n(79390),
        _ = n(623292),
        j = n(807092),
        C = n(467798),
        S = n(703558),
        E = n(117530),
        I = n(630388),
        R = n(226351),
        N = n(981631),
        Z = n(388032);
      async function y(e) {
        var t, n, i;
        let u,
          {
            channelId: h,
            uploads: y,
            draftType: A,
            parsedMessage: O,
            options: M = {},
            raiseEndpointErrors: P = !1,
          } = e,
          w = new m.Z(N.ANM.MESSAGES(h)),
          L = new R.o(),
          k = {
            content: "",
            nonce: "",
            channel_id: h,
            type: N.uaV.DEFAULT,
            sticker_ids: null == M ? void 0 : M.stickerIds,
            poll: null == M ? void 0 : M.poll,
          };
        null != O && (k.content = null == O ? void 0 : O.content),
          null != j.Z.getPendingReply(h) &&
            ((k.type = N.uaV.REPLY),
            (k.message_reference = M.messageReference),
            (k.allowed_mentions = M.allowedMentions),
            (0, _.A6)(h));
        let [U, B] = (0, C.Z)(k.content);
        U &&
          ((k.content = B),
          (k.flags = (0, I.pj)(
            null !== (t = k.flags) && void 0 !== t ? t : 0,
            N.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let F = null !== (n = M.nonce) && void 0 !== n ? n : (0, b.r)(),
          D = (0, v.ZP)({
            channelId: h,
            content: k.content,
            tts: null !== (i = null == O ? void 0 : O.tts) && void 0 !== i && i,
            type: k.type,
            messageReference: k.message_reference,
            flags: k.flags,
            nonce: F,
            poll: (0, x.x9)(M.poll),
          });
        return (
          ((k.nonce = F),
          w.on("start", (e) => {
            (u = (0, g.e5)({ ...D, id: e.id })),
              o.Z.dispatch({
                type: "UPLOAD_START",
                channelId: h,
                file: e,
                message: u,
                uploader: w,
              });
          }),
          w.on("progress", (e) => {
            o.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: h, file: e });
          })),
          w.on("error", (e, t, n, i) => {
            if (
              (o.Z.dispatch({
                type: "UPLOAD_FAIL",
                channelId: h,
                file: e,
                messageRecord: u,
              }),
              (0, T.x)({
                fileItems: e.items,
                failureCode: t,
                errorMessage: null == i ? void 0 : i.msg,
              }),
              t === N.evJ.EXPLICIT_CONTENT)
            ) {
              s.Z.sendExplicitMediaClydeError(
                h,
                null == n ? void 0 : n.attachments,
                p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (t === N.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: t, message: null == n ? void 0 : n.message },
                i =
                  null == u
                    ? null
                    : { type: d.$V.SEND, message: { ...u, channelId: h } };
              (0, r.openUploadError)({
                title: Z.intl.string(Z.t.B3vFdX),
                help: (0, f.uF)(i, e),
              });
              return;
            }
            if (t !== N.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (P)
                L.reject(new c.Hx({ status: t, body: null != n ? n : {} }, t));
              else {
                var m;
                (0, r.openUploadError)({
                  title: Z.intl.string(Z.t.B3vFdX),
                  help:
                    null !== (m = null == n ? void 0 : n.message) &&
                    void 0 !== m
                      ? m
                      : Z.intl.string(Z.t.zMEjJi),
                });
              }
              "" !== k.content &&
                "" === S.Z.getDraft(h, A) &&
                a.Z.saveDraft(h, k.content, A),
                0 === E.Z.getUploadCount(h, A) &&
                  l.Z.setUploads({ channelId: h, uploads: y, draftType: A });
            }
          }),
          w.on("complete", (e, t) => {
            o.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: h,
              file: e,
              aborted: w._aborted,
              messageRecord: t,
            });
          }),
          await w.uploadFiles(y, k),
          L.resolve(),
          L.promise
        );
      }
      t.Z = {
        instantBatchUpload: function (e) {
          let {
              channelId: t,
              files: n,
              draftType: i,
              isThumbnail: o = !1,
              filesMetadata: a = [],
            } = e,
            s = Array.from(n).map((e, n) => {
              let i = null != a ? a[n] : {};
              return new u.n(
                { file: e, platform: h.ow.WEB, isThumbnail: o, ...i },
                t,
              );
            });
          y({ channelId: t, uploads: s, draftType: i });
        },
        upload: function e(t) {
          let {
              channelId: n,
              file: l,
              draftType: c,
              message: d,
              hasSpoiler: u,
              filename: h,
            } = t,
            f = { content: "", tts: !1, hasSpoiler: u, filename: h };
          if (null != d) {
            (f.content = d.content),
              (f.tts = d.tts),
              (f.channel_id = d.channel_id);
            let e = j.Z.getPendingReply(n);
            if (null != e) {
              let t = s.Z.getSendMessageOptionsForReply(e);
              (f.type = N.uaV.REPLY),
                (f.message_reference = t.messageReference),
                (f.allowed_mentions = t.allowedMentions),
                (0, _.A6)(n);
            }
          }
          let g = new m.Z(N.ANM.MESSAGES(n));
          g.on("start", (e) => {
            o.Z.dispatch({
              type: "UPLOAD_START",
              channelId: n,
              file: e,
              uploader: g,
            });
          }),
            g.on("progress", (e) => {
              o.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: n, file: e });
            }),
            g.on("error", (t, u, h) => {
              if (
                (o.Z.dispatch({ type: "UPLOAD_FAIL", channelId: n, file: t }),
                (0, T.x)({ fileItems: t.items, failureCode: u }),
                u === N.evJ.EXPLICIT_CONTENT)
              ) {
                s.Z.sendExplicitMediaClydeError(
                  n,
                  null == h ? void 0 : h.attachments,
                  p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, r.openUploadError)({
                title: Z.intl.string(Z.t.B3vFdX),
                help: Z.intl.format(Z.t.gIlRx8, {
                  onClick: () => {
                    (0, i.closeModal)(r.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: n, file: l, draftType: c, message: d });
                  },
                }),
              }),
                "" !== f.content &&
                  "" === S.Z.getDraft(n, c) &&
                  a.Z.saveDraft(n, f.content, c);
            }),
            g.on("complete", (e) => {
              o.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: n, file: e });
            }),
            g.upload(l, f);
        },
        uploadFiles: y,
        cancel(e) {
          o.Z.dispatch({ type: "UPLOAD_CANCEL_REQUEST", file: e }),
            null != e.draftContent &&
              null != e.channelId &&
              "" === S.Z.getDraft(e.channelId, S.d.ChannelMessage) &&
              o.Z.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: S.d.ChannelMessage,
              });
        },
      };
    },
    785388: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return Q;
          },
        }),
        n(47120),
        n(653041),
        n(177593),
        n(411104);
      var i = n(200651),
        o = n(192379),
        a = n(120356),
        s = n.n(a),
        l = n(392711),
        r = n.n(l),
        c = n(866442),
        d = n(442837),
        u = n(780384),
        h = n(481060),
        m = n(596454),
        p = n(129861),
        f = n(700582),
        g = n(607070),
        v = n(600164),
        b = n(633302),
        T = n(712057),
        x = n(660189),
        _ = n(372900),
        j = n(566006),
        C = n(620652),
        S = n(815605),
        E = n(222677),
        I = n(995774),
        R = n(665906),
        N = n(210887),
        Z = n(314897),
        y = n(592125),
        A = n(271383),
        O = n(542578),
        M = n(375954),
        P = n(496675),
        w = n(699516),
        L = n(594174),
        k = n(768581),
        U = n(176354),
        B = n(5192),
        F = n(709054),
        D = n(91047),
        V = n(981631),
        G = n(388032),
        H = n(891308),
        W = n(232186);
      function z(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function K(e) {
        return null == e.id
          ? b.ZP.convertSurrogateToName(e.name)
          : ":".concat(e.name, ":");
      }
      let J = (e) => {
        let { emoji: t, channelId: n, messageId: a } = e,
          [l, r] = o.useState(!0),
          [c, d] = o.useState([]),
          u = o.useMemo(() => {
            if (null == c || c.length < 1) return;
            let e = (0, S.Zn)(t, c[0], n, {
              emojiSize: C.M.LARGE,
              messageId: a,
            });
            return (0, i.jsx)(C.Z, {
              className: H.__invalid_effect,
              effect: e,
              emojiSize: C.M.LARGE,
              onComplete: () => r(!1),
            });
          }, [c, t, n, a]);
        return (
          o.useEffect(() => {
            let e = !1;
            return (
              r(!0),
              !(async function () {
                let n = await (0, U.B6)(t);
                Array.isArray(n) && n.length > 0 && !e && d(n);
              })(),
              () => {
                e = !0;
              }
            );
          }, [t]),
          (0, i.jsxs)("div", {
            className: H.burstEmojiSection,
            children: [
              u,
              (0, i.jsx)(m.Z, {
                className: s()(H.burstEmoji, { [H.hideEmoji]: l }),
                emojiId: t.id,
                emojiName: t.name,
                animated: t.animated,
                size: "reaction",
              }),
              (0, i.jsx)(h.Text, { variant: "text-md/medium", children: K(t) }),
            ],
          })
        );
      };
      class X extends o.PureComponent {
        render() {
          let {
              emoji: e,
              count: t,
              isSelected: n,
              setSelected: o,
              reactionType: a,
              colors: l,
            } = this.props,
            r = K(e),
            d = (function (e, t, n, o) {
              let a =
                null == e.id
                  ? U.ZP.getURL(e.name)
                  : k.ZP.getEmojiURL({
                      id: e.id,
                      animated: e.animated,
                      size: 24,
                    });
              return null != a && "" !== a
                ? (0, i.jsx)("img", { className: n, src: a, alt: e.name })
                : (0, i.jsx)("span", { className: o, children: e.name });
            })(e, 24, H.emoji, s()(H.emoji, H.emojiText)),
            u = a === j.O.BURST,
            m = u ? G.t.VmiNjY : G.t.cNfs19,
            p = G.intl.formatToPlainString(m, { name: r, n: t }),
            f = {},
            g = {};
          if (u) {
            let {
              backgroundColor: e = "",
              opacity: t = 1,
              accentColor: i = "",
            } = null != l ? l : {};
            if (((g.color = i), n)) {
              var v;
              f.background =
                null !== (v = (0, c.wK)(e, t)) && void 0 !== v ? v : "";
            }
          }
          return (0, i.jsx)(h.Tooltip, {
            position: "left",
            text: r,
            children: (l) => {
              let { onMouseEnter: r, onMouseLeave: c } = l;
              return (0, i.jsxs)(h.Clickable, {
                className: s()({
                  [H.reactionDefault]: !n,
                  [H.reactionSelected]: n,
                }),
                "aria-label": p,
                onClick: () => o({ emoji: e, reactionType: a }),
                onMouseEnter: r,
                onMouseLeave: c,
                style: f,
                children: [
                  d,
                  (0, i.jsx)(h.Text, {
                    variant: "text-sm/bold",
                    style: g,
                    children: t,
                  }),
                ],
              });
            },
          });
        }
      }
      function Y(e) {
        let {
            emoji: t,
            user: n,
            message: o,
            channel: a,
            guildId: s,
            reactionType: l,
            onRemoveReactor: r,
            disableManage: c = !1,
          } = e,
          u = (0, d.e7)([Z.default], () => Z.default.getId()),
          m = (0, d.e7)([L.default], () => L.default.getUser(n.id), [n]),
          g = (0, R.$R)(a),
          b =
            (0, d.e7)([P.Z], () => P.Z.can(V.Plq.MANAGE_MESSAGES, a) && g) ||
            u === n.id,
          T = (0, d.e7)([A.ZP, y.Z, w.Z], () => B.ZP.getName(s, a.id, n));
        return (0, i.jsxs)(v.Z, {
          className: H.reactorDefault,
          onContextMenu: (e) => (0, D.Pv)(e, n, a),
          align: v.Z.Align.CENTER,
          children: [
            (0, i.jsx)(v.Z.Child, {
              wrap: !0,
              grow: 0,
              shrink: 0,
              className: W.marginReset,
              children: (0, i.jsx)(f.Z, {
                user: null != m ? m : n,
                size: h.AvatarSizes.SIZE_24,
              }),
            }),
            (0, i.jsx)(v.Z.Child, {
              children: (0, i.jsxs)(h.Text, {
                tag: "strong",
                variant: "text-md/normal",
                className: H.name,
                children: [
                  null != T &&
                    "" !== T &&
                    (0, i.jsx)("span", {
                      className: n.isPomelo() ? "" : H.nickname,
                      children: T,
                    }),
                  (0, i.jsx)(p.Z, {
                    user: n,
                    className: null != T && "" !== T ? H.tagFaded : null,
                    usernameClass: H.username,
                    discriminatorClass: H.discriminator,
                    forceUsername: !0,
                  }),
                ],
              }),
            }),
            !c &&
              b &&
              (0, i.jsx)(h.Clickable, {
                onClick: function () {
                  E.WO({
                    channelId: a.id,
                    messageId: o.id,
                    emoji: t,
                    location: E.TW.MESSAGE,
                    userId: n.id,
                    options: { burst: l === j.O.BURST },
                  }),
                    null == r || r();
                },
                children: (0, i.jsx)(h.XSmallIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: H.remove,
                }),
              }),
          ],
        });
      }
      class q extends o.PureComponent {
        componentDidMount() {
          this.loadMore();
        }
        componentDidUpdate(e) {
          (!r().isEqual(this.props.reaction, e.reaction) ||
            this.props.reactionType !== e.reactionType) &&
            this.setState({ lastId: null, loadingMore: !1 }, () =>
              this.loadMore(),
            );
        }
        loadMore() {
          let { message: e, reaction: t, reactionType: n } = this.props,
            { lastId: i } = this.state;
          this.setState({ loadingMore: !0 }),
            E.U0({
              channelId: e.getChannelId(),
              messageId: e.id,
              emoji: t.emoji,
              limit: V.pTL,
              after: i,
              type: n,
            }).then((e) => {
              var t;
              return this.setState({
                loadingMore: !1,
                lastId:
                  null === (t = e[e.length - 1]) || void 0 === t
                    ? void 0
                    : t.id,
              });
            });
        }
        renderSection() {
          return null;
        }
        render() {
          let {
              hasMore: e,
              reactors: t,
              reaction: n,
              message: o,
              reactionType: a,
            } = this.props,
            s = [];
          return (
            0 === t.length && this.state.loadingMore
              ? s.push(length)
              : (s.push(t.length), e && s.push(1)),
            (0, i.jsxs)("div", {
              className: H.reactorsContainer,
              children: [
                a === j.O.BURST &&
                  (0, i.jsx)(J, {
                    emoji: n.emoji,
                    channelId: o.getChannelId(),
                    messageId: o.id,
                  }),
                (0, i.jsx)(h.List, {
                  className: H.reactors,
                  fade: !0,
                  ref: this.scrollerRef,
                  sections: s,
                  sectionHeight: 0,
                  rowHeight: this.getRowHeight,
                  renderRow: this.renderRow,
                  renderSection: this.renderSection,
                  onScroll: e ? this.handleScroll : void 0,
                }),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            z(this, "scrollerRef", o.createRef()),
            z(this, "state", { lastId: null, loadingMore: !1 }),
            z(this, "handleScroll", () => {
              let { current: e } = this.scrollerRef;
              if (null == e) return;
              let t = e.getScrollerState();
              t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 &&
                this.props.hasMore &&
                !this.state.loadingMore &&
                this.loadMore();
            }),
            z(this, "getRowHeight", (e, t) => {
              let { reactors: n } = this.props;
              if (1 === e) return 0 === t ? 44 : 0;
              if (0 === e) {
                if (0 === t && 0 === n.length) return 440;
                if (null != this.props.reactors[t]) return 44;
              }
              return 0;
            }),
            z(this, "renderRow", (e) => {
              let { section: t, row: n } = e,
                {
                  message: o,
                  guildId: a,
                  channel: s,
                  reaction: l,
                  reactors: r,
                  reactionType: c,
                  disableManage: d,
                } = this.props,
                u = r[n];
              if (1 === t)
                return 0 === n
                  ? (0, i.jsx)(
                      h.Spinner,
                      { className: H.spinnerMore },
                      "hasMore",
                    )
                  : null;
              return 0 === r.length && this.state.loadingMore
                ? (0, i.jsx)(h.Spinner, { className: H.spinner }, "loadingMore")
                : null != u &&
                    (0, i.jsx)(
                      Y,
                      {
                        message: o,
                        emoji: l.emoji,
                        guildId: a,
                        channel: s,
                        user: u,
                        reaction: l,
                        reactionType: c,
                        disableManage: d,
                      },
                      u.id,
                    );
            });
        }
      }
      let $ = d.ZP.connectStores([O.Z], (e) => {
        let { message: t, reaction: n, reactionType: i } = e,
          o = O.Z.getReactions(t.getChannelId(), t.id, n.emoji, V.pTL, i);
        if (null == o) return { reactors: [], hasMore: !1 };
        let a = Object.values(o),
          s = (i === j.O.BURST ? n.burst_count : n.count) > a.length;
        return { reactors: a, hasMore: s };
      })(q);
      function Q(e) {
        var t;
        let {
            message: n,
            selectedReaction: a,
            disableManage: s = !1,
            disableTabs: l = !1,
            onClose: r,
            transitionState: c,
            "aria-label": m = G.intl.string(G.t.gHp0Cw),
          } = e,
          p = (0, d.e7)([y.Z], () => y.Z.getChannel(n.getChannelId())),
          f = null == p ? void 0 : p.getGuildId(),
          v = (0, d.e7)(
            [M.Z, x.Z],
            () => {
              var e, t;
              let i =
                null !== (t = M.Z.getMessage(n.getChannelId(), n.id)) &&
                void 0 !== t
                  ? t
                  : null ===
                        (e = x.Z.getMessage(
                          F.default.castMessageIdAsChannelId(n.id),
                        )) || void 0 === e
                    ? void 0
                    : e.firstMessage;
              return null != i ? i.reactions : [];
            },
            [n],
          );
        let b =
            ((t = v),
            o.useMemo(() => {
              let e = [];
              return (
                t.forEach((t) => {
                  t.burst_count > 0 && e.push({ ...t, count: 0 }),
                    t.count > 0 && e.push({ ...t, burst_count: 0 });
                }),
                e.sort((e, t) => {
                  let n = e.burst_count > 0 ? e.burst_count : e.count;
                  return (t.burst_count > 0 ? t.burst_count : t.count) - n;
                }),
                e
              );
            }, [t])),
          C = b[0],
          [S, E] = (function (e, t, n) {
            let [i, a] = o.useState(null != e ? e : t);
            return (
              o.useEffect(() => {
                null != i &&
                  null ==
                    n.find((e) => {
                      let t =
                        null != e.me_vote
                          ? j.O.VOTE
                          : e.burst_count > 0
                            ? j.O.BURST
                            : j.O.NORMAL;
                      return (
                        (0, I.ir)(e.emoji, i.emoji) && t === i.reactionType
                      );
                    }) &&
                  a(t);
              }, [i, a, n, t]),
              [i, a]
            );
          })(
            a,
            null != C
              ? {
                  emoji: C.emoji,
                  reactionType: C.burst_count > 0 ? j.O.BURST : j.O.NORMAL,
                }
              : null,
            v,
          ),
          R = o.useMemo(() => {
            var e;
            return null == S
              ? null
              : null !== (e = v.find((e) => (0, I.ir)(e.emoji, S.emoji))) &&
                  void 0 !== e
                ? e
                : null;
          }, [v, S]),
          Z = (0, d.e7)([g.Z], () => g.Z.saturation),
          A = (0, d.e7)([N.Z], () => (0, u.wj)(N.Z.theme));
        if (
          (o.useEffect(() => {
            (0 === v.length || (null == S && null == R)) && setImmediate(r);
          }, [r, v.length, R, S]),
          null == S || null == R)
        )
          return (0, i.jsx)(h.Spinner, {});
        if (null == p)
          throw Error(
            "MessageReactions.render: Message does not have a channelId",
          );
        return (0, i.jsx)(_.Z.Provider, {
          value: null != f ? f : void 0,
          children: (0, i.jsxs)(h.ModalRoot, {
            "aria-label": m,
            transitionState: c,
            size: h.ModalSize.DYNAMIC,
            className: H.container,
            children: [
              l
                ? null
                : (0, i.jsx)(h.Scroller, {
                    className: H.scroller,
                    fade: !0,
                    children: b.map((e) => {
                      var t;
                      let n = e.burst_count > 0;
                      return (0, i.jsx)(
                        X,
                        {
                          isSelected: ee(S, e, n ? j.O.BURST : j.O.NORMAL),
                          setSelected: E,
                          reactionType: n ? j.O.BURST : j.O.NORMAL,
                          emoji: e.emoji,
                          count: n ? e.burst_count : e.count,
                          colors:
                            null != e.burst_colors
                              ? (0, T.Z)(e.burst_colors, Z, A)
                              : void 0,
                        },
                        ""
                          .concat(n ? "burst-" : "normal-")
                          .concat(
                            null !== (t = e.emoji.id) && void 0 !== t ? t : "",
                            ":",
                          )
                          .concat(e.emoji.name),
                      );
                    }),
                  }),
              (0, i.jsx)($, {
                message: n,
                reaction: R,
                guildId: f,
                channel: p,
                reactionType: S.reactionType,
                disableManage: s,
              }),
            ],
          }),
        });
      }
      let ee = (e, t, n) =>
        r().isEqual(e.emoji, t.emoji) && e.reactionType === n;
    },
    963374: function (e, t, n) {
      n.d(t, {
        nC: function () {
          return u;
        },
      }),
        n(47120),
        n(757143),
        n(653041);
      var i = n(392711),
        o = n.n(i),
        a = n(697741);
      let s = new Set([
        "a",
        "an",
        "and",
        "are",
        "as",
        "at",
        "be",
        "but",
        "by",
        "for",
        "if",
        "in",
        "into",
        "is",
        "it",
        "no",
        "not",
        "of",
        "on",
        "or",
        "such",
        "that",
        "the",
        "their",
        "then",
        "there",
        "these",
        "they",
        "this",
        "to",
        "was",
        "will",
        "with",
      ]);
      function l(e) {
        return e.replace(/('|\u2019|\uFF07)(s|S)$/, "");
      }
      function r(e) {
        return e.toLowerCase();
      }
      function c(e) {
        return s.has(e);
      }
      function d(e) {
        return 0 === e.length;
      }
      function u(e) {
        var t;
        let n = new Set(
          ((t = e),
          o()(t.split(/\W+/))
            .map(l)
            .reject(d)
            .map(r)
            .reject(c)
            .map(a.$)
            .value()),
        );
        return (e) =>
          (function e(t, n) {
            if (Array.isArray(t)) t.forEach((t) => e(t, n));
            else if ("string" == typeof t.content && "codeBlock" !== t.type) {
              let e = [],
                i = "";
              t.content.split(/(\W+)/g).forEach((t) => {
                var o, s;
                if (
                  ((o = t),
                  (s = n),
                  !d((o = r(l(o)))) && !c(o) && s.has((0, a.$)(o)))
                )
                  i.length > 0 && e.push({ type: "text", content: i }),
                    e.push({ type: "highlight", content: t }),
                    (i = "");
                else i += t;
              }),
                e.length > 0 &&
                  (i.length > 0 && e.push({ type: "text", content: i }),
                  "text" === t.type
                    ? (t.content = e)
                    : (t.content = [{ type: "text", content: e }]));
            } else null != t.content && e(t.content, n);
            return t;
          })(e, n);
      }
    },
    680287: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(653041);
      var i = n(544891),
        o = n(881052),
        a = n(687294),
        s = n(476326),
        l = n(861990),
        r = n(388032);
      class c extends a.Z {
        async uploadFiles(e, t) {
          let { addFilesTo: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super.upload({ name: r.intl.string(r.t.jfKTen) }, t, e);
          let i = new AbortController();
          try {
            if (((this.files = e), this._aborted)) return;
            if (
              (this._handleStart(() => i.abort()),
              !(await this.compressAndCheckFileSize()))
            )
              return;
            this.setUploadingTextForUI(),
              await (0, a.$)(
                this.files,
                !0,
                this._recomputeProgress.bind(this),
              );
          } catch (e) {
            this._handleException(e);
          }
          try {
            return await this._createMessage(i.signal, t, n);
          } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
          }
        }
        async _createMessage(e, t, n) {
          let a;
          let r = [];
          this.files.forEach((e, t) => {
            let n = (0, l.B)(e, t);
            e.item.platform === s.ow.WEB && r.push({ ...n });
          }),
            (a =
              null != n && null != t
                ? this._addAttachmentsToPayload(t, n, r)
                : { ...t, attachments: r });
          let c = { url: this._url, body: a, signal: e, rejectWithError: !1 },
            d = "POST" === this._method ? i.tn.post : i.tn.patch;
          try {
            let e = await d(c);
            return this._handleComplete(e.body), e.body;
          } catch (e) {
            var u;
            if (this._raiseEndpointErrors) throw new o.Hx(e);
            this._handleError({
              code:
                null == e
                  ? void 0
                  : null === (u = e.body) || void 0 === u
                    ? void 0
                    : u.code,
              body: null == e ? void 0 : e.body,
            });
          }
        }
        constructor(e, t = "POST", n) {
          super(e, t, n);
        }
      }
    },
    446489: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
        y: function () {
          return p;
        },
      });
      var i,
        o,
        a,
        s = n(200651),
        l = n(192379),
        r = n(392711),
        c = n.n(r),
        d = n(748780),
        u = n(451478);
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function m(e, t) {
        return {
          toValue: e,
          duration: null != t ? t : 300,
          easing: d.Z.Easing.inOut(d.Z.Easing.back()),
        };
      }
      function p(e, t, n) {
        if (null != t) {
          let i = Math.ceil(Math.log10(e + 1));
          return null != n && n > 0 ? Math.min(i, n) * t : i * t;
        }
      }
      ((i = o || (o = {}))[(i.ABOVE = 0)] = "ABOVE"),
        (i[(i.VISIBLE = 1)] = "VISIBLE"),
        (i[(i.BELOW = 2)] = "BELOW");
      class f extends (a = l.PureComponent) {
        static getDerivedStateFromProps(e, t) {
          let { prevValue: n, currValue: i, nextValue: o } = t;
          return null == n && i !== e.value
            ? { prevValue: u.Z.isFocused() ? i : null, currValue: e.value }
            : null != o && o !== e.value
              ? { nextValue: e.value }
              : null;
        }
        componentDidUpdate(e, t) {
          let { prevValue: n, currValue: i } = this.state;
          n !== t.prevValue && null != n && this.animateBetween(n, i);
        }
        animateBetween(e, t) {
          let n;
          let { forcePosition: i, animationSpeed: o } = this.props;
          this.prevAnimate.setValue(1),
            null != i
              ? 0 === i
                ? (this.currAnimate.setValue(0), (n = 2))
                : 2 === i && (this.currAnimate.setValue(2), (n = 0))
              : e > t
                ? (this.currAnimate.setValue(0), (n = 2))
                : (this.currAnimate.setValue(2), (n = 0)),
            d.Z.parallel([
              d.Z.timing(this.prevAnimate, m(n, o)),
              d.Z.timing(this.currAnimate, m(1, o)),
            ]).start(this.animateNext);
        }
        getAnimatedStyle(e) {
          let { animationColor: t } = this.props;
          return {
            transform: [
              {
                translateY: e.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: ["-100%", "0%", "100%"],
                }),
              },
            ],
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            ...(null != t && { color: t }),
          };
        }
        getMinWidth(e) {
          let { digitWidth: t, padStartLength: n } = this.props;
          return p(e, t, n);
        }
        padValue(e) {
          let { padStartLength: t } = this.props;
          return null != t ? String(e).padStart(t, "0") : e;
        }
        render() {
          let { prevValue: e, currValue: t } = this.state,
            { color: n, formatString: i } = this.props,
            o = c().omit(this.props, [
              "value",
              "digitWidth",
              "padStartLength",
              "forcePosition",
            ]);
          if (null == e)
            return (0, s.jsx)("div", {
              ...o,
              style: { color: n, minWidth: this.getMinWidth(t) },
              children: null != i ? i(this.padValue(t)) : this.padValue(t),
            });
          let a = Math.max(e, t);
          return (0, s.jsxs)("div", {
            ...o,
            style: { color: n, position: "relative", overflow: "hidden" },
            children: [
              (0, s.jsx)("div", {
                style: { visibility: "hidden", minWidth: this.getMinWidth(a) },
                children: this.padValue(a),
              }),
              (0, s.jsx)(d.Z.div, {
                style: { color: n, ...this.getAnimatedStyle(this.prevAnimate) },
                children: null != i ? i(this.padValue(e)) : this.padValue(e),
              }),
              (0, s.jsx)(d.Z.div, {
                style: { color: n, ...this.getAnimatedStyle(this.currAnimate) },
                children: null != i ? i(this.padValue(t)) : this.padValue(t),
              }),
            ],
          });
        }
        constructor(e) {
          super(e),
            h(this, "prevAnimate", void 0),
            h(this, "currAnimate", void 0),
            h(this, "animateNext", () => {
              let { currValue: e, nextValue: t } = this.state;
              null != t
                ? this.setState({
                    prevValue: u.Z.isFocused() ? e : null,
                    currValue: t,
                    nextValue: null,
                  })
                : this.setState({ prevValue: null });
            }),
            (this.state = {
              prevValue: null,
              currValue: e.value,
              nextValue: null,
            }),
            (this.prevAnimate = new d.Z.Value(0)),
            (this.currAnimate = new d.Z.Value(1));
        }
      }
      h(f, "Positions", o);
    },
    824578: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return l;
        },
      }),
        n(653041);
      var i = n(442837),
        o = n(699516),
        a = n(111583),
        s = n(594174);
      function l(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Number.MAX_SAFE_INTEGER;
        return (0, i.Wu)(
          [s.default, a.Z, o.Z],
          () => {
            var n;
            let i =
                null === (n = s.default.getCurrentUser()) || void 0 === n
                  ? void 0
                  : n.id,
              l = a.Z.getTypingUsers(e),
              r = [];
            for (let e in l) {
              if (r.length >= t) break;
              let n = s.default.getUser(e);
              if (!(null == n || n.id === i || o.Z.isBlockedOrIgnored(n.id)))
                r.push(n.id);
            }
            return r;
          },
          [e, t],
        );
      }
    },
    98474: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        a = n(119617),
        s = n(208404),
        l = n(748780),
        r = n(481060),
        c = n(596454),
        d = n(745510),
        u = n(314910),
        h = n(912893),
        m = n(768581),
        p = n(176354),
        f = n(675654),
        g = n(372728);
      let v = [];
      function b(e) {
        let { messageId: t, emoji: n, startPosition: b, targetPosition: T } = e,
          [x, _] = o.useState(0),
          [j, C] = o.useState(0),
          [S, E] = o.useState(null),
          { confettiCanvas: I } = o.useContext(d.h),
          R = (0, a.uR)(I, S),
          N = o.useMemo(
            () => [
              {
                src:
                  null == n.id
                    ? p.ZP.getURL(n.name)
                    : m.ZP.getEmojiURL({ id: n.id, animated: !1, size: 22 }),
                colorize: !1,
              },
            ],
            [n.name, n.id],
          ),
          Z = T.x - (T.width / 2) * 0.5,
          y = T.y - (T.height / 2) * 0.5,
          A = (0, r.useSpring)({
            from: { y: b.y },
            to: { y: y },
            config: { duration: 450, easing: l.Z.Easing.in(l.Z.Easing.exp) },
            onChange: (e) => {
              let { y: t } = e;
              C(t);
            },
          }),
          O = (0, r.useSpring)({
            from: { x: b.x, scale: 1, opacity: 1 },
            to: { x: Z, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: l.Z.Easing.in(l.Z.Easing.ease) },
            onRest: () => {
              (0, h.G)(t, n.name, n.id);
            },
            onChange: (e) => {
              let { x: t } = e;
              _(t);
            },
          });
        return (
          o.useEffect(() => {
            x > 0 &&
              j > 0 &&
              R.createConfetti({
                ...f.We,
                position: { type: "static", value: { x: x, y: j } },
              });
          }, [R, x, j]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(a.Ji, {
                ref: E,
                sprites: N,
                colors: v,
                spriteWidth: f.Ko,
                spriteHeight: f.Ko,
              }),
              (0, i.jsx)(u.ZP, {
                children: (0, i.jsx)(s.animated.div, {
                  style: { ...A },
                  className: g.emojiContainer,
                  children: (0, i.jsx)(s.animated.div, {
                    style: { ...O, opacity: O.opacity },
                    children: (0, i.jsx)(c.Z, {
                      className: g.emoji,
                      emojiId: n.id,
                      emojiName: n.name,
                      animated: n.animated,
                      size: "jumbo",
                    }),
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    56314: function (e, t, n) {
      n.d(t, {
        v: function () {
          return r;
        },
      });
      var i = n(442837),
        o = n(780384),
        a = n(607070),
        s = n(210887),
        l = n(712057);
      let r = (e) => {
        let t = (0, i.e7)([a.Z], () => a.Z.saturation),
          n = (0, i.e7)([s.Z], () => (0, o.wj)(s.Z.theme));
        return (0, l.Z)(e, t, n);
      };
    },
    109434: function (e, t, n) {
      n.d(t, {
        H: function () {
          return v;
        },
        v: function () {
          return b;
        },
      }),
        n(47120);
      var i = n(512722),
        o = n.n(i),
        a = n(15729),
        s = n(313361),
        l = n(683860),
        r = n(731965),
        c = n(442837),
        d = n(592125),
        u = n(559241);
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let m = new Set(),
        p = {
          layoutType: s.X.LIST,
          sortOrder: l.z.CREATION_DATE,
          tagFilter: m,
          scrollPosition: 0,
        };
      class f {
        constructor(e, t) {
          h(this, "set", void 0),
            h(this, "get", void 0),
            h(this, "channelStates", void 0),
            h(this, "setChannelState", void 0),
            h(this, "getChannelState", void 0),
            h(this, "toggleTagFilter", void 0),
            h(this, "setTagFilter", void 0),
            h(this, "setSortOrder", void 0),
            h(this, "setLayoutType", void 0),
            h(this, "setScrollPosition", void 0),
            (this.set = e),
            (this.get = t),
            (this.channelStates = {}),
            (this.setChannelState = (e, t) => {
              let n = this.get(),
                i = this.getChannelState(e),
                o = { ...n.channelStates };
              (o[e] = { ...i, ...t }),
                (0, r.j)(() => this.set({ channelStates: o }));
            }),
            (this.getChannelState = (e) => {
              if (null == e) return p;
              let { channelStates: t } = this.get(),
                n = t[e];
              if (null == n) {
                let t = d.Z.getChannel(e);
                o()(
                  null != t,
                  "[Forum Channel Store] The channel should not be missing.",
                ),
                  (n = {
                    layoutType: t.getDefaultLayout(),
                    sortOrder: t.getDefaultSortOrder(),
                    tagFilter: m,
                    scrollPosition: 0,
                  });
              }
              return n;
            }),
            (this.toggleTagFilter = (e, t) => {
              let n = new Set(this.getChannelState(e).tagFilter);
              n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n);
            }),
            (this.setTagFilter = (e, t) => {
              this.setChannelState(e, { tagFilter: t }), u.Z.setFilterTagIds(t);
            }),
            (this.setSortOrder = (e, t) => {
              this.setChannelState(e, { sortOrder: t }), u.Z.setSortOrder(t);
            }),
            (this.setLayoutType = (e, t) => {
              this.setChannelState(e, { layoutType: t }), u.Z.setLayout(t);
            }),
            (this.setScrollPosition = (e, t) => {
              this.setChannelState(e, { scrollPosition: t });
            });
        }
      }
      let g = (0, a.U)((e, t) => new f(e, t)),
        v = (e) => {
          let t = g();
          return null == (0, c.e7)([d.Z], () => d.Z.getChannel(e))
            ? p
            : t.getChannelState(e);
        },
        b = () => g;
    },
    73315: function (e, t, n) {
      n(627341);
      var i = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        s = n(278074),
        l = n(481060),
        r = n(169525),
        c = n(102021);
      t.Z = (e) => {
        let { obscureReason: t, iconClassname: n } = e;
        return (0, s.EQ)(t)
          .with(r.wk.EXPLICIT_CONTENT, () =>
            (0, i.jsx)(l.ImageWarningIcon, {
              className: a()(n, c.obscuredIcon),
              color: "white",
            }),
          )
          .with(r.wk.SPOILER, () =>
            (0, i.jsx)(l.EyeIcon, {
              size: "md",
              color: "currentColor",
              className: n,
            }),
          )
          .otherwise(() => null);
      };
    },
    404616: function (e, t, n) {
      n.d(t, {
        Lp: function () {
          return en;
        },
        NN: function () {
          return ea;
        },
        TJ: function () {
          return ei;
        },
        au: function () {
          return ed;
        },
        kZ: function () {
          return ec;
        },
        m9: function () {
          return er;
        },
        og: function () {
          return eh;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        a = n(120356),
        s = n.n(a),
        l = n(512722),
        r = n.n(l),
        c = n(913527),
        d = n.n(c),
        u = n(232713),
        h = n(91192),
        m = n(442837),
        p = n(692547),
        f = n(481060),
        g = n(738619),
        v = n(393238),
        b = n(963374),
        T = n(884338),
        x = n(446489),
        _ = n(824578),
        j = n(95398),
        C = n(406432),
        S = n(169525),
        E = n(566006),
        I = n(255269),
        R = n(937889),
        N = n(443877),
        Z = n(524444),
        y = n(287151),
        A = n(267128),
        O = n(695346),
        M = n(433355),
        P = n(592125),
        w = n(496675),
        L = n(699516),
        k = n(451478),
        U = n(55935),
        B = n(109434),
        F = n(456269),
        D = n(109590),
        V = n(660189),
        G = n(208970),
        H = n(73315),
        W = n(470623),
        z = n(196255),
        K = n(858543),
        J = n(265641),
        X = n(627896),
        Y = n(883728),
        q = n(981631),
        $ = n(217702),
        Q = n(388032),
        ee = n(994973),
        et = n(665162);
      let en = 72,
        ei = 72;
      t.ZP = o.memo(function (e) {
        let {
            threadId: t,
            goToThread: n,
            observePostVisibilityAnalytics: a,
            overrideMedia: l,
            className: c,
            containerWidth: d,
          } = e,
          {
            channel: p,
            isOpen: g,
            messageCount: b,
            firstMessage: T,
            content: x,
            media: _,
          } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
              i = (0, m.e7)([P.Z], () => P.Z.getChannel(t));
            r()(
              null != i,
              "the thread should not be null here, a store must have missed an update",
            );
            let o = (0, m.e7)(
                [M.ZP],
                () => M.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id,
              ),
              { firstMessage: a } = (0, D.cl)(i),
              { content: s, firstMedia: l } = (0, F.mX)({ firstMessage: a }),
              { messageCountText: c } = (0, F.nP)(i);
            return {
              channel: i,
              isOpen: o,
              messageCount: c,
              firstMessage: a,
              content: s,
              media: null != n ? n : l,
            };
          })({ threadId: t, overrideMedia: l }),
          { ref: j, height: C } = (0, v.Z)(),
          S = (0, W.xH)((e) => e.setCardHeight, u.X);
        o.useEffect(() => {
          null != C && S(t, C);
        }, [C, S, t]),
          o.useEffect(() => {
            null == a || a(j.current, t);
          }, [j, a, t]);
        let E = o.useRef(null),
          { handleLeftClick: I, handleRightClick: R } = (0, Y.Z)({
            facepileRef: E,
            goToThread: n,
            channel: p,
          }),
          { role: N, onFocus: Z, ...y } = (0, h.JA)(t),
          { isFocused: A, handleFocus: O, handleBlur: w } = (0, J.Z)(Z);
        return (0, i.jsxs)("div", {
          ref: j,
          "data-item-id": t,
          onClick: I,
          onContextMenu: R,
          className: s()(ee.container, c, { [ee.isOpen]: g }),
          children: [
            (0, i.jsx)(f.Clickable, {
              onClick: I,
              focusProps: { ringTarget: j },
              onContextMenu: R,
              "aria-label": Q.intl.formatToPlainString(Q.t.pgYN6e, {
                title: p.name,
                count: b,
              }),
              className: ee.focusTarget,
              onFocus: O,
              onBlur: w,
              ...y,
            }),
            (0, i.jsxs)("div", {
              className: ee.left,
              children: [
                (0, i.jsx)(f.HeadingLevel, {
                  children: (0, i.jsx)(eo, {
                    channel: p,
                    firstMessage: T,
                    content: x,
                    hasMediaAttachment: null != _,
                    containerWidth: d,
                  }),
                }),
                (0, i.jsx)(f.FocusBlock, {
                  enabled: !A,
                  children: (0, i.jsx)(el, {
                    channel: p,
                    firstMessage: T,
                    facepileRef: E,
                  }),
                }),
              ],
            }),
            (null == T ? void 0 : T.blocked) || null == _
              ? null
              : (0, i.jsx)(em, { channel: p, firstMedia: _ }),
          ],
        });
      });
      function eo(e) {
        let {
            channel: t,
            firstMessage: n,
            content: o,
            hasMediaAttachment: a,
            containerWidth: l,
          } = e,
          { isNew: r, hasUnreads: c } = (0, F.J$)(t),
          d = ea(t),
          { postTitleRef: u, isNewBadgeOverflow: h } = (0, X.x)(r, 24, l);
        return (0, i.jsxs)("div", {
          className: ee.body,
          children: [
            (0, i.jsx)(K.ZP, { channel: t }),
            (0, i.jsx)("div", {
              className: s()(ee.header, { [ee.withNewBadgeOverflow]: h }),
              children: (0, i.jsxs)("div", {
                className: ee.headerText,
                children: [
                  (0, i.jsx)(f.Heading, {
                    variant: "heading-lg/semibold",
                    color: c ? "header-primary" : "text-muted",
                    lineClamp: 2,
                    className: ee.postTitleText,
                    children: (0, i.jsxs)("span", {
                      ref: u,
                      children: [
                        d,
                        r &&
                          (0, i.jsx)("span", {
                            className: ee.newBadgeWrapper,
                            children: (0, i.jsx)(f.TextBadge, {
                              className: ee.newBadge,
                              color: p.Z.unsafe_rawColors.BRAND_260.css,
                              text: Q.intl.string(Q.t.y2b7CA),
                            }),
                          }),
                      ],
                    }),
                  }),
                  r &&
                    h &&
                    (0, i.jsx)(f.TextBadge, {
                      className: ee.newBadge,
                      color: p.Z.unsafe_rawColors.BRAND_260.css,
                      text: Q.intl.string(Q.t.y2b7CA),
                    }),
                ],
              }),
            }),
            (0, i.jsx)("div", {
              className: ee.message,
              children: (0, i.jsx)(es, {
                channel: t,
                message: n,
                content: o,
                hasMediaAttachment: a,
                hasUnreads: c,
              }),
            }),
          ],
        });
      }
      function ea(e) {
        let t = (0, m.e7)([G.Z], () => G.Z.getHasSearchResults(e.parent_id)),
          n = (0, m.e7)([G.Z], () => G.Z.getSearchQuery(e.parent_id)),
          i = o.useMemo(() => (0, b.nC)(t && null != n ? n : ""), [t, n]);
        return o.useMemo(
          () =>
            (0, R.ZP)({ content: e.name, embeds: [] }, { postProcessor: i })
              .content,
          [e.name, i],
        );
      }
      let es = o.memo(function (e) {
        let {
            message: t,
            channel: n,
            content: o,
            hasMediaAttachment: a,
            hasUnreads: l,
          } = e,
          { isBlocked: r, isIgnored: c } = (0, m.cj)([L.Z], () => ({
            isBlocked: null != t && L.Z.isBlockedForMessage(t),
            isIgnored: null != t && L.Z.isIgnoredForMessage(t),
          })),
          d = (0, m.e7)([V.Z], () => V.Z.isLoading(n.id)),
          u = (0, m.e7)([w.Z], () => w.Z.can(q.Plq.MANAGE_MESSAGES, n)),
          h = O.cC.useSetting(),
          p = null;
        if (r)
          p = (0, i.jsx)(f.Text, {
            className: ee.blockedMessage,
            variant: "text-sm/medium",
            color: "text-muted",
            children: Q.intl.string(Q.t.Lkp2fH),
          });
        else if (c)
          p = (0, i.jsx)(f.Text, {
            className: ee.blockedMessage,
            variant: "text-sm/medium",
            color: "text-muted",
            children: Q.intl.string(Q.t.yWK7ZG),
          });
        else {
          let { contentPlaceholder: e, renderedContent: n } =
            null == t
              ? { contentPlaceholder: null, renderedContent: null }
              : (0, A.f)(
                  t,
                  o,
                  r,
                  c,
                  s()(
                    ee.messageContent,
                    et.inlineFormat,
                    et.__invalid_smallFontSize,
                  ),
                  {
                    leadingIconClass: ee.messageContentLeadingIcon,
                    trailingIconClass: ee.messageContentTrailingIcon,
                    iconSize: $.WW,
                  },
                );
          p =
            null != n
              ? (0, i.jsx)(f.Text, {
                  variant: "text-sm/semibold",
                  color: l ? "header-secondary" : "text-muted",
                  children: n,
                })
              : a
                ? null
                : (0, i.jsx)(f.Text, {
                    tag: "span",
                    variant: "text-sm/medium",
                    color: l ? "header-secondary" : "text-muted",
                    className: ee.messageContent,
                    children:
                      null == t ? (d ? null : Q.intl.string(Q.t.mE3KJC)) : e,
                  });
        }
        return (0, i.jsxs)(j.a.Provider, {
          value: (0, I.Z)(h, u),
          children: [
            !r &&
              (0, i.jsx)(z.Z, {
                channel: n,
                message: t,
                renderColon: null != p,
                hasUnreads: l,
              }),
            (0, i.jsx)(f.FocusBlock, {
              className: ee.messageFocusBlock,
              children: p,
            }),
          ],
        });
      });
      function el(e) {
        let { channel: t, facepileRef: n, firstMessage: o } = e,
          a = (0, _.Q)(t.id),
          s =
            (null == o ? void 0 : o.reactions) != null &&
            o.reactions.length > 0;
        return (0, i.jsxs)("div", {
          className: ee.footer,
          children: [
            s || null == o
              ? null
              : (0, i.jsx)(ec, { firstMessage: o, channel: t }),
            null == o ? null : (0, i.jsx)(ed, { firstMessage: o, channel: t }),
            (0, i.jsx)(er, { channel: t, iconSize: 14 }),
            (0, i.jsx)("span", { className: ee.bullet, children: "•" }),
            a.length > 0
              ? (0, i.jsxs)("div", {
                  className: ee.typing,
                  children: [
                    (0, i.jsx)(eh, { channel: t, userIds: a, facepileRef: n }),
                    (0, i.jsx)("div", {
                      className: ee.dots,
                      children: (0, i.jsx)(f.Dots, {
                        themed: !0,
                        dotRadius: 2,
                      }),
                    }),
                    (0, i.jsx)(g.Z, {
                      channel: t,
                      className: ee.typingUsers,
                      renderDots: !1,
                    }),
                  ],
                })
              : (0, i.jsx)(eu, { channel: t }),
          ],
        });
      }
      function er(e) {
        let { channel: t, iconSize: n, showReadState: o = !1 } = e,
          { messageCountText: a, unreadCount: l } = (0, F.nP)(t);
        return (0, i.jsxs)("div", {
          className: s()(ee.messageCountBox, { [ee.hasRead]: o && null == l }),
          children: [
            (0, i.jsx)("span", {
              className: ee.messageCountIcon,
              children: (0, i.jsx)(f.ChatIcon, {
                size: "custom",
                color: "currentColor",
                width: n,
                height: n,
              }),
            }),
            "number" == typeof a
              ? (0, i.jsx)(x.Z, {
                  value: a,
                  digitWidth: 9,
                  className: ee.messageCountText,
                })
              : (0, i.jsx)("div", {
                  className: ee.messageCountText,
                  children: a,
                }),
            null == l
              ? null
              : (0, i.jsxs)(f.Text, {
                  className: ee.newMessageCount,
                  variant: "text-sm/semibold",
                  color: "text-brand",
                  children: ["(", Q.intl.format(Q.t.z3PEtr, { count: l }), ")"],
                }),
          ],
        });
      }
      function ec(e) {
        let { firstMessage: t, channel: n } = e,
          o = (0, m.e7)([P.Z], () => P.Z.getChannel(n.parent_id)),
          a = (0, F.Bs)(o),
          {
            disableReactionCreates: s,
            isLurking: l,
            isPendingMember: r,
          } = (0, N.Z)(n);
        return null == a || s
          ? null
          : (0, i.jsx)(y.le, {
              className: ee.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: l,
              isPendingMember: r,
              emoji: a,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: E.O.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
            });
      }
      function ed(e) {
        var t;
        let { firstMessage: n, channel: o } = e,
          a = (0, F.IN)(n),
          {
            disableReactionUpdates: s,
            isLurking: l,
            isPendingMember: r,
          } = (0, N.Z)(o);
        return null == a
          ? null
          : (0, i.jsx)(
              y.le,
              {
                className: ee.updateReactionButton,
                message: n,
                readOnly: s || o.isArchivedLockedThread(),
                isLurking: l,
                isPendingMember: r,
                useChatFontScaling: !1,
                type: a.burst_count >= a.count ? E.O.BURST : E.O.NORMAL,
                emojiSize: "reaction",
                emojiSizeTooltip: "reaction",
                ...a,
              },
              ""
                .concat(null !== (t = a.emoji.id) && void 0 !== t ? t : 0, ":")
                .concat(a.emoji.name),
            );
      }
      function eu(e) {
        var t;
        let { channel: n } = e,
          { sortOrder: o } = (0, B.H)(n.parent_id),
          a = (0, F.xw)(n, o),
          s =
            null === (t = n.threadMetadata) || void 0 === t
              ? void 0
              : t.createTimestamp,
          l =
            null == s
              ? null
              : Q.intl.formatToPlainString(Q.t["13euCQ"], {
                  timestamp: (0, U.vc)(d()(s), "LLLL"),
                });
        return (0, i.jsx)(f.Tooltip, {
          text: l,
          tooltipClassName: ee.timestampTooltip,
          children: (e) =>
            (0, i.jsx)(f.Text, {
              className: ee.__invalid_activityText,
              variant: "text-sm/normal",
              color: "header-secondary",
              ...e,
              children: a,
            }),
        });
      }
      function eh(e) {
        let { channel: t, userIds: n, facepileRef: o } = e,
          a = (0, F.iM)(t, n);
        return (0, i.jsx)("div", {
          ref: o,
          children: (0, i.jsx)(T.Z, {
            className: ee.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: a,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
          }),
        });
      }
      function em(e) {
        let t,
          n,
          { channel: o, firstMedia: a } = e,
          l = (0, m.e7)([k.Z], () => k.Z.isFocused()),
          r = (0, C.d$)(a.src),
          c = O.QK.useSetting(),
          [d, u] = (0, S.hL)({ media: a, channel: o }),
          h = (0, S.MC)(u),
          { src: p, width: g, height: v, alt: b } = a;
        return (
          v > g ? (n = ei) : (t = en),
          (0, i.jsx)(f.FocusBlock, {
            enabled: !0,
            children: (0, i.jsxs)("div", {
              className: ee.bodyMedia,
              onClick: (e) => e.stopPropagation(),
              children: [
                p.startsWith("data:")
                  ? (0, i.jsx)(f.Image, {
                      src: p,
                      maxHeight: t,
                      maxWidth: n,
                      width: g,
                      height: v,
                      alt: null != b && d ? h : b,
                      className: ee.thumbnailContainer,
                      imageClassName: s()({
                        [ee.obscured]: d,
                        [ee.thumbnailOverride]: !0,
                      }),
                    })
                  : (0, Z.Yi)({
                      src: p,
                      maxHeight: t,
                      maxWidth: n,
                      width: g,
                      height: v,
                      alt: null != b && d ? h : b,
                      autoPlay: c,
                      animated: r && !d && l,
                      srcIsAnimated: a.srcIsAnimated,
                      containerClassName: ee.thumbnailContainer,
                      imageClassName: s()({ [ee.obscured]: d }),
                      analyticsSource: "ForumPostMediaPreview",
                    }),
                d &&
                  (0, i.jsx)(H.Z, {
                    iconClassname: ee.obscuredTag,
                    obscureReason: u,
                  }),
              ],
            }),
          })
        );
      }
    },
    470623: function (e, t, n) {
      n.d(t, {
        AF: function () {
          return x;
        },
        oL: function () {
          return b;
        },
        xH: function () {
          return T;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        a = n(512722),
        s = n.n(a),
        l = n(65400),
        r = n(731965),
        c = n(430742),
        d = n(752305),
        u = n(592125),
        h = n(703558),
        m = n(883429),
        p = n(228392);
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class g {
        constructor(e, t, n) {
          var i, o, a;
          f(this, "channelId", void 0),
            f(this, "_set", void 0),
            f(this, "get", void 0),
            f(this, "editorHeight", void 0),
            f(this, "editorAdditionRowHeight", void 0),
            f(this, "listViewCardHeights", void 0),
            f(this, "cardHeightVersion", void 0),
            f(this, "nameError", void 0),
            f(this, "messageError", void 0),
            f(this, "appliedTags", void 0),
            f(this, "popoutOpen", void 0),
            f(this, "guidelinesOpen", void 0),
            f(this, "previewing", void 0),
            f(this, "onboardingExpanded", void 0),
            f(this, "submitting", void 0),
            f(this, "formOpen", void 0),
            f(this, "name", void 0),
            f(this, "textAreaState", void 0),
            f(this, "hasClickedForm", void 0),
            f(this, "titleFocused", void 0),
            f(this, "bodyFocused", void 0),
            f(this, "set", void 0),
            f(this, "setEditorHeight", void 0),
            f(this, "setEditorAdditionRowHeight", void 0),
            f(this, "setCardHeight", void 0),
            f(this, "setNameError", void 0),
            f(this, "setMessageError", void 0),
            f(this, "toggleAppliedTag", void 0),
            f(this, "setPopoutOpen", void 0),
            f(this, "setGuidelinesOpen", void 0),
            f(this, "setPreviewing", void 0),
            f(this, "setSubmitting", void 0),
            f(this, "setFormOpen", void 0),
            f(this, "setOnboardingExpanded", void 0),
            f(this, "setTitleFocused", void 0),
            f(this, "setBodyFocused", void 0),
            f(this, "setName", void 0),
            f(this, "setTextAreaState", void 0),
            f(this, "setHasClickedForm", void 0),
            f(this, "resetFormState", void 0),
            f(this, "setFormOpenFromUserAction", void 0),
            (this.channelId = e),
            (this._set = t),
            (this.get = n),
            (this.editorHeight = 64),
            (this.editorAdditionRowHeight = 0),
            (this.listViewCardHeights = {}),
            (this.cardHeightVersion = 0),
            (this.nameError = null),
            (this.messageError = null),
            (this.appliedTags = new Set()),
            (this.popoutOpen = !1),
            (this.guidelinesOpen = !1),
            (this.previewing = !1),
            (this.onboardingExpanded = !1),
            (this.submitting = !1),
            (this.formOpen = !1),
            (this.name = ""),
            (this.textAreaState = (0, d.eK)("")),
            (this.hasClickedForm = !1),
            (this.titleFocused = !1),
            (this.bodyFocused = !1),
            (this.set = (e) => {
              (0, r.j)(() => this._set(e));
            }),
            (this.setEditorHeight = (e) => {
              this.set({ editorHeight: e });
            }),
            (this.setEditorAdditionRowHeight = (e) => {
              this.set({ editorAdditionRowHeight: e });
            }),
            (this.setCardHeight = (e, t) => {
              let { listViewCardHeights: n, cardHeightVersion: i } = this.get();
              n[e] !== t &&
                ((n[e] = t), this.set({ cardHeightVersion: i + 1 }));
            }),
            (this.setNameError = (e) => {
              this.set({ nameError: e });
            }),
            (this.setMessageError = (e) => {
              this.set({ messageError: e });
            }),
            (this.toggleAppliedTag = (e) => {
              let { appliedTags: t } = this.get();
              (t = new Set(t)).has(e) ? t.delete(e) : t.add(e),
                this.set({ appliedTags: t }),
                c.Z.changeThreadSettings(this.channelId, { appliedTags: t });
            }),
            (this.setPopoutOpen = (e) => {
              this.set({ popoutOpen: e });
            }),
            (this.setGuidelinesOpen = (e) => {
              this.set({ guidelinesOpen: e });
            }),
            (this.setPreviewing = (e) => {
              this.set({ previewing: e });
            }),
            (this.setSubmitting = (e) => {
              this.set({ submitting: e });
            }),
            (this.setFormOpen = (e) => {
              this.set({ formOpen: e }), m.Z.clearForumSearch(this.channelId);
            }),
            (this.setOnboardingExpanded = (e) => {
              this.set({ onboardingExpanded: e });
            }),
            (this.setTitleFocused = (e) => {
              this.set({ titleFocused: e });
            }),
            (this.setBodyFocused = (e) => {
              this.set({ bodyFocused: e });
            }),
            (this.setName = (e) => {
              this.set({ name: e }),
                c.Z.changeThreadSettings(this.channelId, { name: e });
            }),
            (this.setTextAreaState = (e) => {
              this.set({ textAreaState: e }),
                c.Z.saveDraft(
                  this.channelId,
                  e.textValue,
                  h.d.FirstThreadMessage,
                );
            }),
            (this.setHasClickedForm = (e) => {
              this.set({ hasClickedForm: e });
            }),
            (this.resetFormState = () => {
              let e = u.Z.getChannel(this.channelId),
                t =
                  null == e ? "" : null == e.template ? "" : e.template.trim();
              this.set({
                name: "",
                textAreaState: (0, d.eK)(t),
                appliedTags: new Set(),
                hasClickedForm: !1,
              }),
                m.Z.clearForumSearch(this.channelId);
            }),
            (this.setFormOpenFromUserAction = () => {
              if (this.hasClickedForm) return;
              let e = u.Z.getChannel(this.channelId);
              null != e &&
                (0, p.HR)({ guildId: e.guild_id, channelId: this.channelId }),
                this.set({ hasClickedForm: !0, formOpen: !0 }),
                m.Z.clearForumSearch(this.channelId);
            });
          let s = u.Z.getChannel(e);
          if (null == s) return;
          let l =
              null !== (i = h.Z.getThreadSettings(s.id)) && void 0 !== i
                ? i
                : {},
            g = null == s.template ? "" : s.template.trim(),
            v = h.Z.getDraft(s.id, h.d.FirstThreadMessage),
            b = (0, d.eK)(null != v && "" !== v.trim() ? v : g);
          (this.name = null !== (o = l.name) && void 0 !== o ? o : ""),
            (a = new Set(l.appliedTags)),
            (this.appliedTags = void 0 !== a ? a : new Set()),
            (this.formOpen = this.name.length > 0),
            (this.textAreaState = b);
        }
      }
      let v = o.createContext(null);
      function b(e) {
        let { children: t, channel: n } = e,
          a = o.useMemo(() => {
            var e;
            return (e = n), (0, l.F)((t, n) => new g(e.id, t, n));
          }, [n]);
        return (0, i.jsx)(v.Provider, { value: a, children: t });
      }
      function T(e, t) {
        let n = o.useContext(v);
        return (
          s()(
            null != n,
            "[useForumPostComposerStore] Context should not be null",
          ),
          n(e, t)
        );
      }
      function x() {
        let e = o.useContext(v);
        return (
          s()(
            null != e,
            "[useForumPostComposerStore] Context should not be null",
          ),
          e
        );
      }
    },
    196255: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        s = n(481060),
        l = n(942951),
        r = n(456269),
        c = n(388032),
        d = n(25999);
      t.Z = (e) => {
        var t, n;
        let { message: o, channel: u, renderColon: h, hasUnreads: m } = e,
          { user: p, author: f } = (0, r.AJ)(u),
          g =
            null !==
              (n =
                null !== (t = null == f ? void 0 : f.nick) && void 0 !== t
                  ? t
                  : null == p
                    ? void 0
                    : p.username) && void 0 !== n
              ? n
              : "",
          v = (0, l.l)({
            user: null == o ? void 0 : o.author,
            channelId: u.id,
            guildId: u.guild_id,
            messageId: null == o ? void 0 : o.id,
            stopPropagation: !0,
            ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, { name: g }),
          })(null != f ? f : void 0)(
            (0, i.jsx)(i.Fragment, { children: g }),
            u.id,
          );
        return (0, i.jsxs)(s.Text, {
          tag: "span",
          className: a()(d.author, { [d.hasUnreads]: m }),
          variant: "text-sm/semibold",
          children: [v, !0 === h ? ": " : null],
        });
      };
    },
    858543: function (e, t, n) {
      n.d(t, {
        DM: function () {
          return f;
        },
        ZP: function () {
          return g;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        s = n(692547),
        l = n(481060),
        r = n(109434),
        c = n(456269),
        d = n(479099),
        u = n(176505),
        h = n(388032),
        m = n(994973),
        p = n(783626);
      function f(e) {
        let { channel: t, isNew: n } = e,
          i = (0, c.eV)(t),
          o = i.slice(void 0, 3),
          a = i.slice(3),
          s = i.length > 3 ? i.length - 3 : 0,
          l = t.hasFlag(u.zZ.PINNED),
          r = o.length > 0 || l || n;
        return {
          shownTags: o,
          remainingTags: a,
          moreTagsCount: s,
          isPinned: l,
          shouldRenderTagsRow: r,
          forumPostContainsTags: i.length > 0,
        };
      }
      function g(e) {
        let { channel: t, isNew: n, tagsClassName: o, className: c } = e,
          {
            shownTags: u,
            remainingTags: g,
            moreTagsCount: v,
            isPinned: b,
            shouldRenderTagsRow: T,
          } = f({ channel: t, isNew: n }),
          { tagFilter: x } = (0, r.H)(t.id);
        return T
          ? (0, i.jsxs)("div", {
              className: a()(p.tags, c),
              children: [
                n
                  ? (0, i.jsx)(l.TextBadge, {
                      className: a()(m.newBadge, m.inTagsRow),
                      color: s.Z.unsafe_rawColors.BRAND_260.css,
                      text: h.intl.string(h.t.y2b7CA),
                    })
                  : null,
                b &&
                  (0, i.jsx)("div", {
                    className: p.pinIcon,
                    children: (0, i.jsx)(l.Tooltip, {
                      text: h.intl.string(h.t["1QLRYW"]),
                      children: (e) =>
                        (0, i.jsx)(l.PinIcon, {
                          size: "custom",
                          ...e,
                          width: 16,
                          height: 16,
                          color: "white",
                        }),
                    }),
                  }),
                u.map((e) =>
                  (0, i.jsx)(
                    d.Z,
                    {
                      tag: e,
                      size: d.Z.Sizes.SMALL,
                      className: a()(o, { [p.tagFiltered]: x.has(e.id) }),
                    },
                    e.id,
                  ),
                ),
                v > 0
                  ? (0, i.jsx)(d.f, {
                      tags: g,
                      count: v,
                      size: d.Z.Sizes.SMALL,
                    })
                  : null,
              ],
            })
          : null;
      }
    },
    265641: function (e, t, n) {
      n(47120);
      var i = n(192379);
      t.Z = (e) => {
        let [t, n] = i.useState(!1),
          o = i.useCallback(
            (t) => {
              e(t), n(!0);
            },
            [e, n],
          );
        return {
          isFocused: t,
          handleFocus: o,
          handleBlur: () => {
            n(!1);
          },
        };
      };
    },
    627896: function (e, t, n) {
      n.d(t, {
        x: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(192379);
      function o(e, t, n) {
        let o = i.useRef(null),
          [a, s] = i.useState(!1),
          l = i.useCallback(() => {
            if (e && null !== o.current) {
              var n;
              s(
                (null === (n = o.current) || void 0 === n
                  ? void 0
                  : n.offsetHeight) >
                  2.5 * t,
              );
            }
          }, [s, e, t]);
        return (
          i.useLayoutEffect(() => {
            l();
          }, [l, e, n]),
          { postTitleRef: o, isNewBadgeOverflow: a }
        );
      }
    },
    883728: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var o = n(513431),
        a = n(239091);
      t.Z = (e) => {
        let { facepileRef: t, goToThread: s, channel: l } = e;
        return {
          handleLeftClick: (e) => {
            var n;
            !(
              (0, o.k)(e.target) &&
              (null === (n = t.current) || void 0 === n
                ? void 0
                : n.contains(e.target))
            ) && s(l, e.shiftKey);
          },
          handleRightClick: (e) =>
            (0, a.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("38902"),
                n.e("77564"),
                n.e("18383"),
              ]).then(n.bind(n, 422200));
              return (t) => (0, i.jsx)(e, { ...t, channel: l });
            }),
        };
      };
    },
    33154: function (e, t, n) {
      n.d(t, {
        s: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        o,
        a = n(200651),
        s = n(192379),
        l = n(442837),
        r = n(481060),
        c = n(749210),
        d = n(313201),
        u = n(823379),
        h = n(41776),
        m = n(981631),
        p = n(388032),
        f = n(904424);
      ((o = i || (i = {}))[(o.CHAT = 0)] = "CHAT"),
        (o[(o.REACTIONS = 1)] = "REACTIONS");
      t.Z = (e) => {
        let { type: t, guild: i, closePopout: o, ctaRef: g } = e,
          v = (0, d.Dt)(),
          [b, T] = s.useState(!1),
          x = (0, l.e7)([h.Z], () => h.Z.isLurking(i.id), [i.id]);
        s.useEffect(() => {
          b && !x && o();
        }, [b, x, o]);
        let _ = null,
          j = p.intl.string(p.t.d7b1p6);
        switch (t) {
          case 0:
            _ = p.intl.string(p.t.Xiwf1d);
            break;
          case 1:
            _ = p.intl.string(p.t.GXvlU1);
            break;
          default:
            return (0, u.vE)(t);
        }
        if (null == _) return null;
        let C = async () => {
          T(!0);
          try {
            await c.Z.joinGuild(i.id, { source: m.vtS.CHAT_INPUT_BLOCKER }),
              o();
          } catch {
            T(!1);
          }
        };
        return (0, a.jsxs)(r.Dialog, {
          className: f.container,
          "aria-labelledby": v,
          children: [
            (0, a.jsx)("img", { alt: "", className: f.image, src: n(64395) }),
            (0, a.jsxs)("div", {
              className: f.content,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  id: v,
                  children: _,
                }),
                (0, a.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: j,
                }),
                (0, a.jsxs)("div", {
                  className: f.buttonContainer,
                  children: [
                    (0, a.jsx)(r.Button, {
                      buttonRef: g,
                      onClick: C,
                      submitting: b,
                      children: p.intl.string(p.t["9VLmlZ"]),
                    }),
                    (0, a.jsx)(r.Button, {
                      onClick: o,
                      look: r.Button.Looks.BLANK,
                      className: f.cancel,
                      children: p.intl.string(p.t["2m+Sqq"]),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    960020: function (e, t, n) {
      n.d(t, {
        I: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        o,
        a,
        s,
        l,
        r,
        c = n(442837),
        d = n(570140);
      ((a = i || (i = {})).HOVER = "HOVER"),
        (a.EXTERNAL = "EXTERNAL"),
        (a.RANDOM = "RANDOM");
      let u = {},
        h = {},
        m = {},
        p = (e, t) => {
          let n = null != t.id ? t.id : t.name;
          return "".concat(e, ":").concat(n);
        },
        f = (e, t) => {
          var n;
          let i;
          switch (e) {
            case "HOVER":
              i = "HOVER";
              break;
            case "RANDOM":
              i = "RANDOM";
              break;
            default:
              i = "EXTERNAL";
          }
          let o = Object.fromEntries(
            Object.entries(null !== (n = h[t]) && void 0 !== n ? n : {}).filter(
              (e) => {
                let [, t] = e;
                return t === i;
              },
            ),
          );
          if (Object.keys(o).length >= 5 && "EXTERNAL" === e) {
            for (let e in o)
              if (null == m[t] || null == m[t][e]) {
                delete h[t][e], delete o[e];
                break;
              }
          }
          return Object.keys(o).length;
        };
      class g extends (o = c.ZP.Store) {
        getReactionPickerAnimation(e, t, n) {
          return u[
            ""
              .concat(e, ":")
              .concat(t, ":")
              .concat(null != n ? n : "")
          ];
        }
        getEffectForEmojiId(e, t, n) {
          var i;
          let o = p(t, n);
          return null === (i = h[e]) || void 0 === i ? void 0 : i[o];
        }
      }
      (r = "BurstReactionEffectsStore"),
        (l = "displayName") in (s = g)
          ? Object.defineProperty(s, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[l] = r),
        (t.Z = new g(d.Z, {
          BURST_REACTION_EFFECT_CLEAR: (e) => {
            var t;
            let { channelId: n, messageId: i, emoji: o } = e,
              a = p(i, o);
            null === (t = h[n]) || void 0 === t || delete t[a];
          },
          BURST_REACTION_EFFECT_PLAY: (e) => {
            var t, n, i;
            let { channelId: o, messageId: a, emoji: s, key: l } = e,
              r = p(a, s);
            if (f(l, o) >= 5) return;
            let c = null !== (t = h[o]) && void 0 !== t ? t : {},
              d = (null !== (n = m[o]) && void 0 !== n ? n : {})[r],
              u = c[r];
            if ("HOVER" !== l || null == u) {
              "HOVER" === u &&
                "EXTERNAL" === l &&
                null != d &&
                ("function" == typeof d.destroy && d.destroy(),
                null === (i = m[o]) || void 0 === i || delete i[r],
                (u = void 0));
              null == u && (null != h[o] ? (h[o][r] = l) : (h[o] = { [r]: l }));
            }
          },
          BURST_REACTION_ANIMATION_ADD: (e) => {
            let { channelId: t, messageId: n, emoji: i, animation: o } = e,
              a = p(n, i);
            null == m[t] && (m[t] = {}), (m[t][a] = o);
          },
          BURST_REACTION_PICKER_ANIMATION_ADD: (e) => {
            let {
              messageId: t,
              emojiName: n,
              emojiId: i,
              startPosition: o,
            } = e;
            u[
              ""
                .concat(t, ":")
                .concat(n, ":")
                .concat(null != i ? i : "")
            ] = o;
          },
          BURST_REACTION_PICKER_ANIMATION_CLEAR: (e) => {
            let { messageId: t, emojiName: n, emojiId: i } = e;
            delete u[
              ""
                .concat(t, ":")
                .concat(n, ":")
                .concat(null != i ? i : "")
            ];
          },
        }));
    },
    347904: function (e, t, n) {
      n.d(t, {
        s4: function () {
          return s;
        },
        vJ: function () {
          return l;
        },
      }),
        n(757143);
      var i,
        o = n(392711),
        a = n(302221);
      (i || (i = {})).OUT_OF_BURSTS = "out of burst reactions modal";
      let s = (e, t) => {
          let n = (0, a.WY)([t.r, t.g, t.b], 2);
          return (e = (e = e.replace(
            /(\[1,0,0,)/g,
            "["
              .concat(n[0][0] / 255, ",")
              .concat(n[0][1] / 255, ",")
              .concat(n[0][2] / 255, ","),
          )).replace(
            /\[0,0,1,/g,
            "["
              .concat(n[1][0] / 255, ",")
              .concat(n[1][1] / 255, ",")
              .concat(n[1][2] / 255, ","),
          ));
        },
        l = (0, o.memoize)((e) => {
          let t = 0;
          for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
          return Math.abs(t);
        });
    },
    831244: function (e, t, n) {
      n.d(t, {
        T: function () {
          return a;
        },
      });
      var i = n(347904);
      let o = [
          { load: () => n.e("59642").then(n.t.bind(n, 759983, 19)) },
          { load: () => n.e("54931").then(n.t.bind(n, 488583, 19)) },
          { load: () => n.e("22523").then(n.t.bind(n, 420183, 19)) },
          { load: () => n.e("35247").then(n.t.bind(n, 782543, 19)) },
          { load: () => n.e("69923").then(n.t.bind(n, 267858, 19)) },
          { load: () => n.e("96246").then(n.t.bind(n, 108035, 19)) },
          { load: () => n.e("30997").then(n.t.bind(n, 299665, 19)) },
          { load: () => n.e("50987").then(n.t.bind(n, 545755, 19)) },
          { load: () => n.e("14192").then(n.t.bind(n, 412825, 19)) },
          { load: () => n.e("78073").then(n.t.bind(n, 82134, 19)) },
          { load: () => n.e("54021").then(n.t.bind(n, 913837, 19)) },
          { load: () => n.e("7573").then(n.t.bind(n, 403249, 19)) },
          { load: () => n.e("219").then(n.t.bind(n, 738664, 19)) },
          { load: () => n.e("70528").then(n.t.bind(n, 181976, 19)) },
          { load: () => n.e("74294").then(n.t.bind(n, 654947, 19)) },
          { load: () => n.e("91199").then(n.t.bind(n, 945518, 19)) },
          { load: () => n.e("66071").then(n.t.bind(n, 634794, 19)) },
          { load: () => n.e("73921").then(n.t.bind(n, 558619, 19)) },
        ],
        a = async function (e, t, n) {
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let a = o[(0, i.vJ)("".concat(e).concat(t).concat(n)) % o.length];
          return await a.load();
        };
    },
    432376: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      function i(e) {
        let {
            channel: t,
            canChat: n,
            renderReactions: i,
            canAddNewReactions: o,
            isLurking: a,
            isGuest: s,
            communicationDisabled: l,
            isActiveChannelOrUnarchivableThread: r,
            isAutomodQuarantined: c,
          } = e,
          d = t.isPrivate(),
          u = t.isSystemDM(),
          h = (n || d) && r;
        return {
          disableReactionReads: !i,
          disableReactionCreates: a || s || !h || !((!0 === o || d) && !u && r),
          disableReactionUpdates: a || s || !h || !0 === l || !0 === c,
        };
      }
    },
    443877: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(442837),
        o = n(715903),
        a = n(71619),
        s = n(41776),
        l = n(665906),
        r = n(271383),
        c = n(607744),
        d = n(496675),
        u = n(432376),
        h = n(981631);
      function m(e) {
        let t = null == e ? void 0 : e.guild_id,
          n = (0, i.e7)([c.Z], () => null == t || c.Z.canChatInGuild(t), [t]),
          m = (0, i.e7)([s.Z], () => null != t && s.Z.isLurking(t), [t]),
          p = (0, i.e7)([r.ZP], () => null != t && r.ZP.isCurrentUserGuest(t), [
            t,
          ]),
          f = (0, i.e7)([d.Z], () => n && d.Z.can(h.Plq.ADD_REACTIONS, e), [
            n,
            e,
          ]),
          g = (0, o.ux)(t),
          [, v] = (0, a.AB)(t),
          b = (0, l.$R)(e);
        return null == e
          ? {
              disableReactionReads: !0,
              disableReactionCreates: !0,
              disableReactionUpdates: !0,
              isLurking: !1,
              isGuest: !1,
              isPendingMember: !1,
            }
          : {
              ...(0, u.Z)({
                channel: e,
                canChat: n,
                renderReactions: !0,
                canAddNewReactions: f,
                isLurking: m,
                isGuest: p,
                communicationDisabled: v,
                isActiveChannelOrUnarchivableThread: b,
                isAutomodQuarantined: g,
              }),
              isLurking: m,
              isGuest: p,
              isPendingMember: !1,
            };
      }
    },
    89729: function (e, t, n) {
      n.d(t, {
        g: function () {
          return h;
        },
      });
      var i = n(392711),
        o = n.n(i),
        a = n(995774),
        s = n(592125),
        l = n(542578),
        r = n(699516),
        c = n(5192),
        d = n(566006),
        u = n(388032);
      function h(e, t) {
        var n;
        let i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : d.O.NORMAL,
          h = arguments.length > 3 ? arguments[3] : void 0,
          m = l.Z.getReactions(e.getChannelId(), e.id, t, 3, i),
          p = s.Z.getChannel(e.getChannelId()),
          f = null == p || p.isPrivate() ? null : p.getGuildId(),
          g = e.getReaction(t),
          v = i === d.O.BURST,
          b = o()(m)
            .reject((e) => r.Z.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => c.ZP.getName(f, null == p ? void 0 : p.id, e))
            .value();
        if (0 === b.length) return "";
        let T = {
            standard: {
              reactionTooltip1NInteractive: u.t.dgtYDA,
              reactionTooltip1N: u.t.mXild3,
              reactionTooltip1: u.t.Oro30N,
              reactionTooltip2NInteractive: u.t["0GBwVV"],
              reactionTooltip2N: u.t.UWGs2t,
              reactionTooltip2: u.t["p+0jvr"],
              reactionTooltip3NInteractive: u.t["dK6/7e"],
              reactionTooltip3N: u.t.UnXdX1,
              reactionTooltip3: u.t.bbPMcX,
              reactionTooltipNInteractive: u.t.Thj7LS,
              reactionTooltipN: u.t.CRrc7e,
            },
            burst: {
              reactionTooltip1NInteractive: u.t.G98B0d,
              reactionTooltip1N: u.t["u/03eH"],
              reactionTooltip1: u.t["z4q3+/"],
              reactionTooltip2NInteractive: u.t.wkcffn,
              reactionTooltip2N: u.t.T4EYUl,
              reactionTooltip2: u.t.R2HykZ,
              reactionTooltip3NInteractive: u.t.OhtGx8,
              reactionTooltip3N: u.t.M8bwl5,
              reactionTooltip3: u.t.sNl6XV,
              reactionTooltipNInteractive: u.t.nsITOj,
              reactionTooltipN: u.t.dkieHx,
            },
          },
          x = v ? T.burst : T.standard,
          _ = Math.max(
            0,
            (null !==
              (n = v
                ? null == g
                  ? void 0
                  : g.burst_count
                : null == g
                  ? void 0
                  : g.count) && void 0 !== n
              ? n
              : 0) - b.length,
          ),
          j = (0, a.Lh)(t);
        if (1 === b.length)
          return _ > 0
            ? null != h
              ? u.intl.formatToPlainString(x.reactionTooltip1NInteractive, {
                  a: b[0],
                  n: _,
                  emojiName: j,
                  onClick: h,
                })
              : u.intl.formatToPlainString(x.reactionTooltip1N, {
                  a: b[0],
                  n: _,
                  emojiName: j,
                })
            : u.intl.formatToPlainString(x.reactionTooltip1, {
                a: b[0],
                emojiName: j,
              });
        if (2 === b.length)
          return _ > 0
            ? null != h
              ? u.intl.formatToPlainString(x.reactionTooltip2NInteractive, {
                  a: b[0],
                  b: b[1],
                  n: _,
                  emojiName: j,
                  onClick: h,
                })
              : u.intl.formatToPlainString(x.reactionTooltip2N, {
                  a: b[0],
                  b: b[1],
                  n: _,
                  emojiName: j,
                })
            : u.intl.formatToPlainString(x.reactionTooltip2, {
                a: b[0],
                b: b[1],
                emojiName: j,
              });
        if (3 === b.length)
          return _ > 0
            ? null != h
              ? u.intl.formatToPlainString(x.reactionTooltip3NInteractive, {
                  a: b[0],
                  b: b[1],
                  c: b[2],
                  n: _,
                  emojiName: j,
                  onClick: h,
                })
              : u.intl.formatToPlainString(x.reactionTooltip3N, {
                  a: b[0],
                  b: b[1],
                  c: b[2],
                  n: _,
                  emojiName: j,
                })
            : u.intl.formatToPlainString(x.reactionTooltip3, {
                a: b[0],
                b: b[1],
                c: b[2],
                emojiName: j,
              });
        else
          return null != h
            ? u.intl.formatToPlainString(x.reactionTooltipNInteractive, {
                n: _,
                emojiName: j,
                onClick: h,
              })
            : u.intl.formatToPlainString(x.reactionTooltipN, {
                n: _,
                emojiName: j,
              });
      }
    },
    287151: function (e, t, n) {
      n.d(t, {
        aO: function () {
          return eo;
        },
        le: function () {
          return er;
        },
        op: function () {
          return ea;
        },
        y4: function () {
          return es;
        },
      }),
        n(47120);
      var i,
        o = n(200651),
        a = n(192379),
        s = n(120356),
        l = n.n(s),
        r = n(772848),
        c = n(748780),
        d = n(866442),
        u = n(442837),
        h = n(846519),
        m = n(481060),
        p = n(596454),
        f = n(785388),
        g = n(607070),
        v = n(446489),
        b = n(367907),
        T = n(436774),
        x = n(98474),
        _ = n(339085),
        j = n(906411),
        C = n(56314),
        S = n(231053),
        E = n(944386),
        I = n(305325),
        R = n(33154),
        N = n(692147),
        Z = n(197115),
        y = n(659215),
        A = n(222677),
        O = n(995774),
        M = n(695346),
        P = n(592125),
        w = n(430824),
        L = n(542578),
        k = n(914010),
        U = n(594174),
        B = n(451478),
        F = n(626135),
        D = n(74538),
        V = n(960020),
        G = n(566006),
        H = n(886132),
        W = n(183023),
        z = n(524444),
        K = n(89729),
        J = n(620652),
        X = n(640753),
        Y = n(981631),
        q = n(474936),
        $ = n(388032),
        Q = n(124396),
        ee = n(636804),
        et = n(952714),
        en = n(758718);
      function ei(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let eo = 9;
      function ea(e, t, n) {
        (0, m.openModal)((e) =>
          (0, o.jsx)(f.default, { ...e, message: t, selectedReaction: n }),
        );
      }
      function es(e, t, n) {
        return (n === G.O.BURST && t) || (n === G.O.NORMAL && e);
      }
      class el extends (i = a.PureComponent) {
        componentWillAppear(e) {
          this.animateIn(e);
        }
        componentWillEnter(e) {
          this.animateIn(e);
        }
        componentWillUnmount() {
          this.hideTooltip();
        }
        animateIn(e) {
          let { autoUnfurlReactionTooltip: t } = this.props;
          B.Z.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              c.Z.parallel([
                c.Z.timing(this.scale, {
                  toValue: 1,
                  duration: t ? 200 : 300,
                  easing: c.Z.Easing.inOut(c.Z.Easing.back()),
                }),
                c.Z.timing(this.opacity, {
                  toValue: 1,
                  duration: t ? 200 : 300,
                }),
              ]).start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
        }
        render() {
          let e, t;
          let {
              count: n,
              burst_count: i,
              colors: a,
              isBurstReaction: s,
              hideCount: r,
              emoji: u,
              readOnly: h,
              isLurking: f,
              isGuest: g,
              isPendingMember: b,
              className: T,
              useChatFontScaling: _,
              message: j,
              hideEmoji: C,
              animationStartPosition: S,
              emojiSize: E,
            } = this.props,
            {
              shouldShowTooltip: I,
              tooltipTextAria: R,
              reactionRef: Z,
              tooltipPositionKey: y,
            } = this.state,
            A = _ ? et : ee,
            M = { transform: [{ scale: this.scale }], opacity: this.opacity },
            P = s ? i : n;
          if (s && null != a) {
            var w;
            let { accentColor: n, backgroundColor: i, opacity: o } = a,
              s =
                null !== (w = (0, d.wK)(null != i ? i : "", o)) && void 0 !== w
                  ? w
                  : "";
            this.isMe() && (M.borderColor = i),
              (M.background = s),
              (e = n),
              (t = n);
          }
          let L = null == Z ? void 0 : Z.getBoundingClientRect(),
            k = null != S && null != L,
            U = null == S;
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)(m.Popout, {
              shouldShow: I,
              "aria-label": null != R && R,
              renderPopout: this.renderTooltip,
              nudgeAlignIntoViewport: !0,
              position: "top",
              align: "center",
              positionKey: y,
              children: () =>
                (0, o.jsx)("div", {
                  onMouseEnter: this.handleEnter,
                  onMouseLeave: this.handleLeave,
                  ref: this.handleSetReactionRef,
                  children: (0, o.jsx)(c.Z.div, {
                    className: l()(A.reaction, T, {
                      [A.reactionMe]: this.isMe(),
                      [A.reactionReadOnly]: h && !f && !b && !g,
                      [A.shakeReaction]: C && null == S,
                    }),
                    style: M,
                    children: (0, o.jsx)(m.Popout, {
                      renderPopout: this.renderLurkerModeUpsellPopout,
                      position: "top",
                      children: (n) =>
                        (0, o.jsxs)(m.Clickable, {
                          ...n,
                          className: A.reactionInner,
                          onClick: this.handleClick,
                          "aria-disabled": h,
                          "aria-label": (0, O.iD)(this.isMe(), P, u, s),
                          "aria-pressed": this.isMe(),
                          children: [
                            (0, o.jsx)("div", {
                              className: l()({ [A.burstGlow]: s }),
                              style: { boxShadow: "0 0 16px ".concat(t) },
                            }),
                            (0, o.jsxs)("div", {
                              children: [
                                s
                                  ? (0, o.jsxs)(o.Fragment, {
                                      children: [
                                        k &&
                                          (0, o.jsx)(x.Z, {
                                            messageId: j.id,
                                            emoji: u,
                                            startPosition: S,
                                            targetPosition: L,
                                          }),
                                        U &&
                                          (0, o.jsx)(X.Z, {
                                            count: i,
                                            emoji: u,
                                            channelId: j.getChannelId(),
                                            messageId: j.id,
                                            useChatFontScaling: _,
                                            color: t,
                                            emojiSize:
                                              "reactionLarge" === E
                                                ? J.M.NORMAL_NEW
                                                : J.M.NORMAL,
                                          }),
                                      ],
                                    })
                                  : null,
                                (0, o.jsx)(p.Z, {
                                  className: l()({ [A.hideEmoji]: C }),
                                  emojiId: u.id,
                                  emojiName: u.name,
                                  size: E,
                                  animated: u.animated,
                                }),
                              ],
                            }),
                            r
                              ? null
                              : (0, o.jsx)(v.Z, {
                                  className: A.reactionCount,
                                  value: P,
                                  color: e,
                                  digitWidth: eo,
                                }),
                            (0, o.jsx)(N.Z, { count: P, reactionRef: Z }),
                          ],
                        }),
                    }),
                  }),
                }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            ei(this, "isReactionEventActive", !1),
            ei(this, "isKeyboardNavigation", !1),
            ei(this, "scale", new c.Z.Value(1)),
            ei(this, "opacity", new c.Z.Value(1)),
            ei(this, "timeout", new h.V7()),
            ei(this, "hideTimeout", new h.V7()),
            ei(this, "ctaRef", a.createRef()),
            ei(this, "type", G.O.NORMAL),
            ei(this, "colors", {
              backgroundColor: void 0,
              borderColor: void 0,
              textColor: void 0,
            }),
            ei(this, "state", {
              shouldShowTooltip: !1,
              tooltipText: null,
              tooltipTextAria: null,
              reactionRef: null,
              tooltipPositionKey: void 0,
            }),
            ei(this, "hasShownTooltip", !1),
            ei(this, "nonce", (0, r.Z)()),
            ei(this, "userCanBurstReact", () => this.props.userHasPremium),
            ei(this, "handleClick", (e) => {
              e.stopPropagation();
              let {
                  message: t,
                  emoji: n,
                  readOnly: i,
                  isBurstReaction: o,
                  isPendingMember: a,
                  isLurking: s,
                  isGuest: l,
                  isForumToolbar: r,
                } = this.props,
                c = P.Z.getChannel(t.getChannelId());
              if (s || l) {
                var d, u;
                null === (u = this.ctaRef) ||
                  void 0 === u ||
                  null === (d = u.current) ||
                  void 0 === d ||
                  d.focus();
                return;
              }
              let h = t.getChannelId(),
                m = r ? A.TW.FORUM_TOOLBAR : A.TW.MESSAGE_INLINE_BUTTON;
              if (o && !this.userCanBurstReact()) {
                (0, y.openBurstReactionsUpsellModal)({
                  analytics: {
                    type: q.cd.BURST_REACTION_UPSELL,
                    page:
                      (null == c ? void 0 : c.getGuildId()) != null
                        ? Y.ZY5.GUILD_CHANNEL
                        : Y.ZY5.DM_CHANNEL,
                    section: null != c ? (0, O.s4)(c) : void 0,
                    object: Y.qAy.EMOJI_REACTION_UPSELL,
                  },
                });
                return;
              }
              a
                ? this.handleShowVerificationGate()
                : !i &&
                  (this.isMe()
                    ? (0, A.WO)({
                        channelId: h,
                        messageId: t.id,
                        emoji: n,
                        location: m,
                        options: { burst: o },
                      })
                    : (0, A.rU)(h, t.id, n, m, { burst: o }));
            }),
            ei(this, "handleEnter", (e) => {
              let {
                  emoji: t,
                  message: n,
                  type: i,
                  reduceMotion: o,
                  animateEmoji: a,
                  autoUnfurlReactionTooltip: s,
                } = this.props,
                l = i === G.O.BURST;
              l &&
                !this.isReactionEventActive &&
                !o &&
                a &&
                (0, A.T6)({
                  channelId: n.getChannelId(),
                  messageId: n.id,
                  emoji: t,
                  key: V.I.HOVER,
                }),
                (this.isReactionEventActive = !0),
                (this.isKeyboardNavigation = "focus" === e.type),
                this.timeout.start(
                  l ? 750 : s ? 200 : 500,
                  this.showTooltip,
                  !1,
                );
            }),
            ei(this, "handleEnterTooltip", () => {
              (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            ei(this, "handleShowTooltip", () => {
              this.hideTimeout.stop(),
                this.isReactionEventActive &&
                  (this.updateTooltipText(),
                  L.Z.addChangeListener(this.updateTooltipText));
            }),
            ei(this, "showTooltip", () => {
              !this.props.readOnly &&
                (this.handleShowTooltip(),
                this.isReactionEventActive && this.trackReactionTooltipViewed(),
                (this.hasShownTooltip = !0));
            }),
            ei(this, "handleLeave", () => {
              (this.isReactionEventActive = !1),
                (this.isKeyboardNavigation = !1),
                this.timeout.stop(),
                L.Z.removeChangeListener(this.updateTooltipText),
                this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            ei(this, "hideTooltip", () => {
              this.setState({ shouldShowTooltip: !1 }),
                this.hasShownTooltip &&
                  F.default.track(Y.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            ei(this, "isMe", () => {
              let { me: e, me_burst: t, type: n } = this.props;
              return es(e, t, n);
            }),
            ei(this, "updateTooltipText", () => {
              let { message: e, emoji: t, type: n } = this.props,
                i = (0, K.g)(e, t, n),
                o = this.isKeyboardNavigation ? i : (0, K.g)(e, t, n, Y.dG4);
              this.setState({
                tooltipText: o,
                tooltipTextAria: i,
                shouldShowTooltip: null != o && "" !== o,
              });
            }),
            ei(this, "renderLurkerModeUpsellPopout", (e) => {
              let { closePopout: t } = e,
                { message: n, isLurking: i } = this.props,
                a = P.Z.getChannel(n.getChannelId()),
                s = w.Z.getGuild(null == a ? void 0 : a.getGuildId());
              return i && null != s
                ? (0, o.jsx)(R.Z, {
                    ctaRef: this.ctaRef,
                    type: R.s.REACTIONS,
                    guild: s,
                    closePopout: t,
                  })
                : (0, o.jsx)(o.Fragment, {});
            }),
            ei(this, "renderEmojiDetails", () => {
              let e = this.props.emoji;
              return (
                null != e.id &&
                (0, o.jsx)(ed, {
                  emojiId: e.id,
                  refreshPositionKey: this.refreshTooltipPositionKey,
                  onClose: this.handleLeave,
                  nonce: this.nonce,
                })
              );
            }),
            ei(this, "renderTooltip", () => {
              let {
                  emoji: e,
                  message: t,
                  type: n,
                  me_burst: i,
                  isBurstReaction: a = !1,
                } = this.props,
                { tooltipText: s } = this.state,
                r = (n) => {
                  let i = P.Z.getChannel(t.getChannelId());
                  if (null != i)
                    this.handleLeave(),
                      ea(i, t, {
                        emoji: e,
                        reactionType: a ? G.O.BURST : G.O.NORMAL,
                      });
                },
                c = "string" == typeof s ? "" === s.trim() : null == s,
                d = () =>
                  c || null == s
                    ? null
                    : (0, o.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        className: en.reactionTooltipText,
                        "aria-label": s,
                        children: s,
                      });
              return n === G.O.BURST
                ? (0, o.jsxs)("div", {
                    className: en.reactionTooltip,
                    onMouseEnter: this.handleEnterTooltip,
                    onMouseLeave: this.handleLeave,
                    children: [
                      (0, o.jsx)(m.Clickable, {
                        className: en.burstReactionTooltipInner,
                        onClick: r,
                        children: (0, o.jsxs)("div", {
                          className: en.burstReactionTooltipMessage,
                          children: [
                            (0, o.jsx)(p.Z, {
                              className: en.reactionTooltipEmoji,
                              emojiId: e.id,
                              emojiName: e.name,
                              animated: e.animated,
                              size: this.props.emojiSizeTooltip,
                            }),
                            d(),
                          ],
                        }),
                      }),
                      (() => {
                        let e = U.default.getCurrentUser();
                        if (i)
                          return (0, o.jsxs)("div", {
                            className: l()(
                              en.burstReactionTooltipPrompt,
                              en.burstReactionTooltipSpacer,
                            ),
                            children: [
                              (0, D.I5)(e) &&
                                (0, o.jsx)(m.NitroWheelIcon, {
                                  size: "md",
                                  className: en.burstReactionTooltipNitroIcon,
                                  color: T.JX.PREMIUM_TIER_2,
                                }),
                              (0, o.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                className: en.reactionTooltipText,
                                "aria-label": "super reaction tooltip cta",
                                children: $.intl.string($.t.ZbNJXl),
                              }),
                            ],
                          });
                        if (this.userCanBurstReact())
                          return (0, o.jsxs)("div", {
                            className: l()(
                              en.burstReactionTooltipPrompt,
                              en.burstReactionTooltipSpacer,
                              en.burstReactionTooltipPromptClickable,
                            ),
                            children: [
                              (0, o.jsx)(m.NitroWheelIcon, {
                                size: "md",
                                className: en.burstReactionTooltipNitroIcon,
                                color: T.JX.PREMIUM_TIER_2,
                              }),
                              (0, o.jsx)(m.Clickable, {
                                onClick: this.handleClick,
                                children: (0, o.jsx)(m.Text, {
                                  variant: "text-sm/normal",
                                  className: en.reactionTooltipText,
                                  "aria-label": "super reaction tooltip cta",
                                  children: $.intl.string($.t.kVfuVl),
                                }),
                              }),
                            ],
                          });
                        if (
                          !this.userCanBurstReact() &&
                          !this.isKeyboardNavigation
                        )
                          return (0, o.jsx)("div", {
                            className: l()(
                              en.burstReactionTooltipPrompt,
                              en.burstReactionTooltipSpacer,
                            ),
                            children: (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsx)(m.Text, {
                                  variant: "text-sm/normal",
                                  "aria-label": "super reaction tooltip upsell",
                                  children: $.intl.string($.t.W1bMkp),
                                }),
                                (0, o.jsx)(Z.Z, {
                                  subscriptionTier: q.Si.TIER_2,
                                  buttonText: $.intl.string($.t.mr4K7O),
                                  className: en.burstReactionTooltipUpsellCta,
                                  onClick: (e) => e.stopPropagation(),
                                }),
                              ],
                            }),
                          });
                        return null;
                      })(),
                      this.renderEmojiDetails(),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    className: en.reactionTooltip,
                    onMouseEnter: this.handleEnterTooltip,
                    onMouseLeave: this.handleLeave,
                    children: [
                      (0, o.jsx)(m.Clickable, {
                        onClick: r,
                        children: (0, o.jsxs)("div", {
                          className: en.reactionTooltipInner,
                          children: [
                            (0, o.jsx)(p.Z, {
                              className: en.reactionTooltipEmoji,
                              emojiId: e.id,
                              emojiName: e.name,
                              animated: e.animated,
                              size: this.props.emojiSizeTooltip,
                            }),
                            d(),
                          ],
                        }),
                      }),
                      this.renderEmojiDetails(),
                    ],
                  });
            }),
            ei(this, "refreshTooltipPositionKey", () => {
              this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            ei(this, "handleShowVerificationGate", () => {
              let { message: e, isPendingMember: t } = this.props;
              if (!t) return null;
              let n = P.Z.getChannel(e.getChannelId()),
                i = w.Z.getGuild(null == n ? void 0 : n.getGuildId());
              null != i && (0, I.hk)(i.id);
            }),
            ei(this, "handleSetReactionRef", (e) => {
              this.setState({ reactionRef: e });
            }),
            ei(this, "trackReactionTooltipViewed", () => {
              let { emoji: e, message: t, type: n } = this.props,
                i = U.default.getCurrentUser(),
                o = P.Z.getChannel(t.getChannelId()),
                a = n === G.O.BURST,
                s = (0, D.I5)(i),
                l = a
                  ? q.cd.EMOJI_IN_BURST_REACTION_HOVER
                  : q.cd.EMOJI_IN_REACTION_HOVER;
              a &&
                !this.userCanBurstReact() &&
                !s &&
                (l = q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                b.ZP.trackWithMetadata(Y.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                  type: l,
                  expression_id: e.id,
                  expression_name: e.name,
                  is_animated: e.animated,
                  is_custom: null != e.id,
                  nonce: this.nonce,
                }),
                a &&
                  null != o &&
                  !s &&
                  !this.userCanBurstReact() &&
                  F.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: q.cd.BURST_REACTION_UPSELL,
                    location: {
                      page:
                        (null == o ? void 0 : o.getGuildId()) != null
                          ? Y.ZY5.GUILD_CHANNEL
                          : Y.ZY5.DM_CHANNEL,
                      section: (0, O.s4)(o),
                      object: Y.qAy.EMOJI_REACTION_TOOLTIP_UPSELL,
                    },
                  });
            });
        }
      }
      ei(el, "defaultProps", { emojiSizeTooltip: "jumbo" });
      let er = a.memo((e) => {
          let { type: t, burst_colors: n, message: i, emoji: a } = e,
            s = t === G.O.BURST,
            l = (0, C.v)(s && null != n ? n : []),
            r = (0, u.e7)(
              [V.Z],
              () =>
                void 0 !== V.Z.getEffectForEmojiId(i.getChannelId(), i.id, a),
            ),
            c = (0, u.e7)([g.Z], () => g.Z.useReducedMotion),
            d = M.Yk.useSetting(),
            h = U.default.getCurrentUser(),
            m = (0, D.I5)(h),
            p = (0, u.e7)([V.Z], () =>
              V.Z.getReactionPickerAnimation(i.id, a.name, a.id),
            ),
            f = s && (r || null != p);
          return (0, o.jsx)(el, {
            ...e,
            colors: l,
            isBurstReaction: s,
            hideEmoji: f,
            userHasPremium: m,
            reduceMotion: c,
            animateEmoji: d,
            animationStartPosition: p,
          });
        }),
        ec = (e) => {
          var t, n, i;
          let {
            emojiId: a,
            expressionSourceGuild: s,
            hasJoinedExpressionSourceGuild: l,
            onClose: r,
            popoutData: c,
            currentGuildId: d,
            nonce: u,
          } = e;
          (0, E.u)({
            emojiId: a,
            currentGuildId: d,
            popoutData: c,
            emojiSourceGuildId: null == s ? void 0 : s.id,
            nonce: u,
          });
          let h =
              null !== (n = null == s ? void 0 : s.isDiscoverable()) &&
              void 0 !== n &&
              n,
            p = null != s && h,
            f =
              (null !==
                (i =
                  null == s
                    ? void 0
                    : null === (t = s.emojis) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== i
                ? i
                : 0) > 1;
          return (0, o.jsx)(o.Fragment, {
            children: p
              ? null == s
                ? null
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)("div", {
                        className: Q.reactionEmojiDetailsUnfurlGuildDetails,
                        children: (0, o.jsx)(W.Oe, {
                          expressionSourceGuild: s,
                          hasJoinedExpressionSourceGuild: l,
                          isDisplayingJoinGuildButtonInPopout:
                            c.type === H.$.JOIN_GUILD,
                        }),
                      }),
                      f &&
                        (0, o.jsx)(W.n_, {
                          emojiId: a,
                          expressionSourceGuild: s,
                          hasJoinedEmojiSourceGuild: l,
                          onClose: r,
                          popoutData: c,
                          isDisplayingButtonInTopSection: !1,
                        }),
                    ],
                  })
              : (0, o.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  "aria-label": c.type,
                  children: c.emojiDescription,
                }),
          });
        },
        ed = (e) => {
          var t;
          let { emojiId: n, refreshPositionKey: i, onClose: s, nonce: r } = e,
            { joinedEmojiSourceGuild: c } = (0, u.cj)([_.ZP, w.Z], () => {
              let e = _.ZP.getCustomEmojiById(n);
              return {
                joinedEmojiSourceGuild:
                  (null == e ? void 0 : e.type) === j.B.GUILD
                    ? w.Z.getGuild(null == e ? void 0 : e.guildId)
                    : void 0,
              };
            }),
            [d, h] = a.useState(void 0),
            [p, f] = a.useState(void 0),
            [g, v] = a.useState(null),
            [b, T] = a.useState(!1),
            [x, C] = a.useState(!1),
            [E, I] = a.useState(!1),
            R = null != c,
            N =
              null !== (t = null == d ? void 0 : d.isDiscoverable()) &&
              void 0 !== t &&
              t,
            Z = k.Z.getGuildId(),
            y =
              null != Z &&
              (Z === (null == d ? void 0 : d.id) ||
                Z === (null == c ? void 0 : c.id)),
            A = U.default.getCurrentUser(),
            O = (0, H.a)({
              sourceType: g,
              expressionSourceApplication: null != p ? p : null,
              isPremium: D.ZP.isPremium(A),
              hasJoinedEmojiSourceGuild: R,
              isDiscoverable: N,
              emojiComesFromCurrentGuild: y,
              isUnusableRoleSubscriptionEmoji: !1,
              userIsRoleSubscriber: !1,
              isRoleSubscriptionEmoji: !1,
              shouldHideRoleSubscriptionCTA: !1,
            });
          a.useEffect(() => {
            if (!!b && !E)
              (async () => {
                i(), C(!0);
                let e = null != n ? await (0, S.Fi)(n) : null;
                if (null != e)
                  switch ((v(e.type), e.type)) {
                    case S.w6.APPLICATION:
                      f(e.application);
                      break;
                    case S.w6.GUILD:
                      h(e.guild);
                  }
                else h(null);
                C(!1), I(!0), i();
              })();
          }, [n, b, E, i]);
          if (R) return null;
          let M = () => {
              T(!b);
            },
            P = b && (void 0 !== d || void 0 !== p);
          return (0, o.jsxs)("div", {
            children: [
              P
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)("div", {
                        className: Q.reactionEmojiDetailsDivider,
                      }),
                      null != O.emojiDescription &&
                        O.type !== H.$.UNAVAILABLE &&
                        (0, o.jsx)(m.Text, {
                          variant: "text-sm/normal",
                          "aria-label": O.type,
                          children: O.emojiDescription,
                        }),
                    ],
                  })
                : (() => {
                    let e = $.intl.string($.t["Igv+LS"]);
                    return (0, o.jsxs)(m.Clickable, {
                      onClick: M,
                      className: Q.reactionEmojiDetailsClickable,
                      children: [
                        (0, o.jsx)(m.Text, {
                          variant: "text-sm/normal",
                          color: "none",
                          "aria-label": e,
                          children: e,
                        }),
                        (0, o.jsx)(m.ChevronSmallDownIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: l()(Q.reactionEmojiDetailsArrow, {
                            [Q.reactionEmojiDetailsArrowCollapsed]: !b,
                          }),
                        }),
                      ],
                    });
                  })(),
              x
                ? (0, o.jsx)(z.SE, { className: Q.emojiDetailsLoader })
                : P &&
                  (0, o.jsx)(ec, {
                    emojiId: n,
                    expressionSourceGuild: d,
                    hasJoinedExpressionSourceGuild: R,
                    onClose: s,
                    popoutData: O,
                    currentGuildId: Z,
                    nonce: r,
                  }),
            ],
          });
        };
    },
    620652: function (e, t, n) {
      n.d(t, {
        M: function () {
          return o;
        },
        Z: function () {
          return b;
        },
      });
      var i,
        o,
        a = n(200651),
        s = n(192379),
        l = n(120356),
        r = n.n(l),
        c = n(500923),
        d = n.n(c),
        u = n(570140),
        h = n(960020),
        m = n(831244),
        p = n(815605),
        f = n(981631),
        g = n(278135);
      ((i = o || (o = {}))[(i.NORMAL = 16)] = "NORMAL"),
        (i[(i.NORMAL_NEW = 20)] = "NORMAL_NEW"),
        (i[(i.LARGE = 32)] = "LARGE");
      let v = async (e) => {
        var t;
        let { effect: n } = e,
          i = await (0, m.T)(
            n.channelId,
            null !== (t = n.messageId) && void 0 !== t ? t : f.lds,
            n.emoji.name,
          ),
          o = await (0, p.aB)(
            ""
              .concat(n.channelId, ":")
              .concat(n.messageId, ":")
              .concat(n.emoji.name),
            n.url,
            i,
            n.color,
          );
        return (o.assets[0].p = n.url), o;
      };
      function b(e) {
        let { className: t, effect: n, onComplete: i, emojiSize: o = 16 } = e,
          l = s.useRef(null),
          c = o * p.Vz,
          m = (c + o) / 2;
        return (
          s.useEffect(() => {
            let e;
            if (null != n)
              return (
                !(async function () {
                  if (null != l.current) {
                    let t = await v({ effect: n });
                    (e = d().loadAnimation({
                      container: l.current,
                      renderer: "svg",
                      loop: !1,
                      autoplay: !0,
                      animationData: t,
                    })).addEventListener("complete", () => {
                      null == i || i(), e.destroy();
                    }),
                      null != n.channelId &&
                        null != n.messageId &&
                        null != n.emoji &&
                        n.key === h.I.HOVER &&
                        u.Z.dispatch({
                          type: "BURST_REACTION_ANIMATION_ADD",
                          channelId: n.channelId,
                          messageId: n.messageId,
                          emoji: n.emoji,
                          animation: e,
                        });
                  }
                })(),
                () => {
                  null != e && e.destroy();
                }
              );
          }, [i, n, o]),
          (0, a.jsx)("div", {
            className: g.effectsWrapper,
            children: (0, a.jsx)("div", {
              className: r()(g.effect, t),
              style: {
                transform: "translateY(".concat(m, "px)"),
                height: c,
                width: c,
              },
              ref: l,
            }),
          })
        );
      }
    },
    640753: function (e, t, n) {
      n(47120);
      var i = n(200651),
        o = n(192379),
        a = n(442837),
        s = n(570140),
        l = n(607070),
        r = n(222677),
        c = n(695346),
        d = n(960020),
        u = n(347904),
        h = n(620652),
        m = n(815605),
        p = n(523160),
        f = n(122423);
      t.Z = o.memo(function (e) {
        let {
            channelId: t,
            messageId: n,
            emoji: g,
            useChatFontScaling: v,
            color: b,
            count: T,
            emojiSize: x,
          } = e,
          _ = (0, a.e7)([d.Z], () => d.Z.getEffectForEmojiId(t, n, g)),
          j = v ? f : p,
          C = o.useMemo(
            () => (0, m.Zn)(g, b, t, { key: _, messageId: n }),
            [b, _, g, t, n],
          ),
          [S, E] = o.useState(!1),
          I = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
          R = c.Yk.useSetting(),
          N = o.useCallback(() => {
            s.Z.dispatch({
              type: "BURST_REACTION_EFFECT_CLEAR",
              channelId: t,
              messageId: n,
              emoji: g,
            });
          }, [g, t, n]);
        return (o.useEffect(() => {
          let e = () => {
            if (S) return;
            let e =
              (0, u.vJ)(
                "".concat(Date.now()).concat(t).concat(n).concat(g.name),
              ) % 10;
            (e += T > 4 ? 4 : T - 1) > 7 &&
              (E(!0),
              (0, r.T6)({
                channelId: t,
                messageId: n,
                emoji: g,
                key: d.I.RANDOM,
              }));
          };
          if (S || (I && !R) || !R) return;
          e();
          let i = setInterval(e, 5e3);
          return () => {
            clearInterval(i);
          };
        }, [R, t, T, g, g.name, S, n, I]),
        null == _)
          ? null
          : (0, i.jsx)(h.Z, {
              className: j.effect,
              effect: C,
              onComplete: N,
              emojiSize: x,
            });
      });
    },
    815605: function (e, t, n) {
      n.d(t, {
        Vz: function () {
          return c;
        },
        Zn: function () {
          return u;
        },
        aB: function () {
          return d;
        },
      }),
        n(757143);
      var i = n(392711),
        o = n(772848),
        a = n(134432),
        s = n(963838),
        l = n(302221),
        r = n(347904);
      let c = 7.5,
        d = (0, i.memoize)(
          (e, t, n, i) =>
            new Promise((e) => {
              let o = new Image();
              (o.src = t),
                (o.crossOrigin = "Anonymous"),
                (o.onload = () => {
                  let t = 32 * (0, a.x_)(),
                    s = JSON.stringify(n);
                  if (
                    (null != i && (s = (0, r.s4)(s, (0, l.oo)(i))),
                    (o.width === t && o.height === t) ||
                      (0 === o.width && 0 === o.height))
                  )
                    e(JSON.parse(s));
                  else {
                    let t = (128 / o.width) * o.height;
                    e(
                      JSON.parse(
                        (s = (s = s.replace(
                          /"w":128,"h":128/,
                          '"w":128,"h":'.concat(t),
                        )).replace(
                          /"a":{"a":0,"k":\[64,64/,
                          '"a":{"a":0,"k":[64,'.concat(t / 2),
                        )),
                      ),
                    );
                  }
                });
            }),
        );
      function u(e, t, n, i) {
        let { emojiSize: a, key: l, messageId: r } = null != i ? i : {},
          c = (0, s._r)(e, null != a ? 2 * a : void 0);
        return {
          channelId: n,
          messageId: r,
          emoji: e,
          animationId: (0, o.Z)(),
          url: c,
          key: l,
          color: t,
        };
      }
    },
    942951: function (e, t, n) {
      n.d(t, {
        l: function () {
          return h;
        },
      });
      var i = n(200651),
        o = n(192379),
        a = n(481060),
        s = n(100527),
        l = n(906732),
        r = n(184301),
        c = n(347475),
        d = n(592125),
        u = n(91047);
      function h(e) {
        var t, n;
        let {
            user: h,
            channelId: m,
            guildId: p,
            messageId: f,
            stopPropagation: g = !1,
            ariaLabel: v,
          } = e,
          { analyticsLocations: b } = (0, l.ZP)(s.Z.USERNAME);
        let T =
          ((t = h),
          (n = m),
          o.useCallback(
            (e) => {
              let i = d.Z.getChannel(n);
              null != i && null != t && (0, u.Pv)(e, t, i);
            },
            [t, n],
          ));
        return o.useCallback(
          (e) => (t, n) => {
            let o = (n) =>
                (0, i.jsx)(a.NameWithRoleAnchor, {
                  ...(null != n ? n : {}),
                  onContextMenu: T,
                  name: t,
                  color: null == e ? void 0 : e.colorString,
                  roleName: null == e ? void 0 : e.colorRoleName,
                  "aria-label": v,
                }),
              s = (e) => (t) => {
                g && t.stopPropagation(), e(t);
              };
            return (0, i.jsx)(
              l.Gt,
              {
                value: b,
                children:
                  null != h
                    ? (0, i.jsx)(a.Popout, {
                        position: "right",
                        preload: () =>
                          (0, r.Z)(h.id, h.getAvatarURL(p, 80), {
                            guildId: p,
                            channelId: m,
                          }),
                        renderPopout: (t) =>
                          (0, i.jsx)(c.Z, {
                            ...t,
                            userId: h.id,
                            guildId: p,
                            channelId: m,
                            messageId: f,
                            roleId: null == e ? void 0 : e.colorRoleId,
                          }),
                        children: (e) => {
                          let { onClick: t, ...n } = e;
                          return o({ onClick: s(t), ...n });
                        },
                      })
                    : o(void 0),
              },
              n,
            );
          },
          [b, h, m, p, f, T, g, v],
        );
      }
    },
    692147: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651),
        o = n(192379),
        a = n(392711),
        s = n(399606),
        l = n(351780),
        r = n(576125),
        c = n(465858),
        d = n(112843),
        u = n(524484);
      function h(e) {
        let { reactionRef: t, count: n } = e,
          i = o.useRef(n),
          r = (0, s.e7)([l.Z], () => l.Z.getState()),
          u = (0, d.Z)(),
          h = (0, c.Z)(t);
        return (
          o.useEffect(() => {
            if (n > i.current && null != h) {
              let e = (0, a.clamp)(n, r.confettiCount / 2, 2 * r.confettiCount);
              u.fire(h.x, h.y, { count: e });
            }
            i.current = n;
          }, [n, h, u, r.confettiCount]),
          null
        );
      }
      function m(e) {
        return (0, i.jsx)(r.Z, {
          confettiLocation: u.Hn.REACTION,
          children: (0, i.jsx)(h, { ...e }),
        });
      }
    },
    659215: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
          openBurstReactionsUpsellModal: function () {
            return f;
          },
        });
      var i = n(200651);
      n(192379);
      var o = n(481060),
        a = n(230711),
        s = n(104494),
        l = n(639119),
        r = n(790527),
        c = n(474936),
        d = n(981631),
        u = n(388032),
        h = n(941604),
        m = n(784370);
      function p(e) {
        var t, n;
        let { onClose: o, analyticsSource: p, ...f } = e,
          g = u.intl.format(u.t["JmbS+f"], {
            onClick: () => {
              a.Z.open(d.oAB.PREMIUM), o();
            },
          }),
          v = (0, l.N)(),
          b = (0, s.Ng)(),
          T = null != v || null != b;
        return (0, i.jsx)(r.Z, {
          artURL: m,
          artContainerClassName: h.artContainer,
          modalClassName: h.modalContainer,
          bodyClassName: h.bodyContainer,
          type: c.cd.BURST_REACTION_UPSELL,
          title: u.intl.string(u.t.N4SCJy),
          body: g,
          glowUp: g,
          analyticsSource: p,
          analyticsLocation: {
            page: d.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
            object: d.qAy.BUTTON_CTA,
          },
          onClose: o,
          subscribeButtonText: T ? void 0 : u.intl.string(u.t["8x0jKS"]),
          subscriptionTier:
            null !==
              (n =
                null == v
                  ? void 0
                  : null === (t = v.subscription_trial) || void 0 === t
                    ? void 0
                    : t.sku_id) && void 0 !== n
              ? n
              : c.Si.TIER_2,
          backButtonText: u.intl.string(u.t.f3Pet7),
          ...f,
        });
      }
      function f(e) {
        let { analytics: t } = e;
        (0, o.openModalLazy)(async () => {
          let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
          return (n) => (0, i.jsx)(e, { analyticsSource: t, ...n });
        });
      }
    },
    891308: function (e, t, n) {
      e.exports = {
        container: "container_f2bfbb",
        scroller: "scroller_f2bfbb",
        reactorsContainer: "reactorsContainer_f2bfbb",
        reactors: "reactors_f2bfbb",
        reactionSelected: "reactionSelected_f2bfbb",
        reactionDefault: "reactionDefault_f2bfbb",
        emoji: "emoji_f2bfbb",
        emojiText: "emojiText_f2bfbb",
        burstEmojiSection: "burstEmojiSection_f2bfbb",
        hideEmoji: "hideEmoji_f2bfbb",
        burstEmoji: "burstEmoji_f2bfbb",
        spinner: "spinner_f2bfbb",
        spinnerMore: "spinnerMore_f2bfbb",
        reactorDefault: "reactorDefault_f2bfbb reactor_f2bfbb",
        name: "name_f2bfbb",
        nickname: "nickname_f2bfbb",
        username: "username_f2bfbb",
        tagFaded: "tagFaded_f2bfbb",
        discriminator: "discriminator_f2bfbb",
        remove: "remove_f2bfbb",
      };
    },
    372728: function (e, t, n) {
      e.exports = {
        emojiContainer: "emojiContainer_ffd153",
        emoji: "emoji_ffd153",
      };
    },
    102021: function (e, t, n) {
      e.exports = { obscuredIcon: "obscuredIcon_a62ee5" };
    },
    994973: function (e, t, n) {
      e.exports = {
        container: "container_d331f1",
        isOpen: "isOpen_d331f1",
        dots: "dots_d331f1",
        focusTarget: "focusTarget_d331f1",
        left: "left_d331f1",
        body: "body_d331f1",
        messageFocusBlock: "messageFocusBlock_d331f1",
        message: "message_d331f1",
        messageContent: "messageContent_d331f1",
        messageContentTrailingIcon: "messageContentTrailingIcon_d331f1",
        messageContentLeadingIcon: "messageContentLeadingIcon_d331f1",
        bodyMedia: "bodyMedia_d331f1",
        obscuredTag: "obscuredTag_d331f1",
        thumbnailContainer: "thumbnailContainer_d331f1",
        thumbnailOverride: "thumbnailOverride_d331f1",
        obscured: "obscured_d331f1",
        header: "header_d331f1",
        footer: "footer_d331f1",
        bullet: "bullet_d331f1",
        headerText: "headerText_d331f1",
        postTitleText: "postTitleText_d331f1",
        newBadgeWrapper: "newBadgeWrapper_d331f1",
        newBadge: "newBadge_d331f1",
        inTagsRow: "inTagsRow_d331f1",
        typing: "typing_d331f1",
        typingUsers: "typingUsers_d331f1",
        messageCountBox: "messageCountBox_d331f1",
        messageCountIcon: "messageCountIcon_d331f1",
        hasRead: "hasRead_d331f1",
        messageCountText: "messageCountText_d331f1",
        newMessageCount: "newMessageCount_d331f1",
        updateReactionButton: "updateReactionButton_d331f1",
        timestampTooltip: "timestampTooltip_d331f1",
        blockedMessage: "blockedMessage_d331f1",
        withNewBadgeOverflow: "withNewBadgeOverflow_d331f1",
      };
    },
    25999: function (e, t, n) {
      e.exports = { author: "author_c2ac9c", hasUnreads: "hasUnreads_c2ac9c" };
    },
    783626: function (e, t, n) {
      e.exports = {
        tags: "tags_f451cd",
        pinIcon: "pinIcon_f451cd",
        tagFiltered: "tagFiltered_f451cd",
      };
    },
    904424: function (e, t, n) {
      e.exports = {
        container: "container_a9480d",
        content: "content_a9480d",
        buttonContainer: "buttonContainer_a9480d",
        cancel: "cancel_a9480d",
        image: "image_a9480d",
      };
    },
    636804: function (e, t, n) {
      n.r(
        (e.exports = {
          reactions: "reactions_f61c73",
          largeReactions: "largeReactions_f61c73",
          icon: "icon_f61c73",
          largeIcon: "largeIcon_f61c73",
          reactionBtn: "reactionBtn_f61c73",
          active: "active_f61c73",
          largeReactionBtn: "largeReactionBtn_f61c73",
          visible: "visible_f61c73",
          forceShow: "forceShow_f61c73",
          hideEmoji: "hideEmoji_f61c73",
          reaction: "reaction_f61c73",
          shakeReaction: "shakeReaction_f61c73",
          shake: "shake_f61c73",
          reactionReadOnly: "reactionReadOnly_f61c73",
          reactionCount: "reactionCount_f61c73",
          reactionMe: "reactionMe_f61c73",
          reactionInner: "reactionInner_f61c73",
          remainingReactions: "remainingReactions_f61c73",
          premiumIcon: "premiumIcon_f61c73",
          sparkles: "sparkles_f61c73",
          burstGlow: "burstGlow_f61c73",
        }),
      );
    },
    952714: function (e, t, n) {
      n.r(
        (e.exports = {
          reactions: "reactions_ec6b19",
          largeReactions: "largeReactions_ec6b19",
          icon: "icon_ec6b19",
          largeIcon: "largeIcon_ec6b19",
          reactionBtn: "reactionBtn_ec6b19",
          active: "active_ec6b19",
          largeReactionBtn: "largeReactionBtn_ec6b19",
          visible: "visible_ec6b19",
          forceShow: "forceShow_ec6b19",
          forceShowLook: "forceShowLook_ec6b19",
          hideEmoji: "hideEmoji_ec6b19",
          reaction: "reaction_ec6b19",
          shakeReaction: "shakeReaction_ec6b19",
          shake: "shake_ec6b19",
          reactionReadOnly: "reactionReadOnly_ec6b19",
          reactionCount: "reactionCount_ec6b19",
          reactionMe: "reactionMe_ec6b19",
          reactionInner: "reactionInner_ec6b19",
          remainingReactions: "remainingReactions_ec6b19",
          premiumIcon: "premiumIcon_ec6b19",
          sparkles: "sparkles_ec6b19",
          burstGlow: "burstGlow_ec6b19",
        }),
      );
    },
    758718: function (e, t, n) {
      e.exports = {
        reactionTooltip: "reactionTooltip_fba897",
        reactionTooltipEmoji: "reactionTooltipEmoji_fba897",
        reactionTooltipText: "reactionTooltipText_fba897",
        reactionTooltipInner: "reactionTooltipInner_fba897",
        burstReactionTooltipInner: "burstReactionTooltipInner_fba897",
        burstReactionTooltipMessage: "burstReactionTooltipMessage_fba897",
        burstReactionTooltipSpacer: "burstReactionTooltipSpacer_fba897",
        burstReactionTooltipPrompt: "burstReactionTooltipPrompt_fba897",
        burstReactionTooltipPromptClickable:
          "burstReactionTooltipPromptClickable_fba897",
        burstReactionTooltipNitroIcon: "burstReactionTooltipNitroIcon_fba897",
        burstReactionTooltipUpsellCta: "burstReactionTooltipUpsellCta_fba897",
      };
    },
    278135: function (e, t, n) {
      e.exports = {
        effect: "effect_e5651",
        effectsWrapper: "effectsWrapper_e5651",
      };
    },
    523160: function (e, t, n) {
      n.r((e.exports = { effect: "effect_de8d64", effects: "effects_de8d64" }));
    },
    122423: function (e, t, n) {
      n.r((e.exports = { effect: "effect_bdca47", effects: "effects_bdca47" }));
    },
    941604: function (e, t, n) {
      e.exports = {
        artContainer: "artContainer_db3cf5",
        modalContainer: "modalContainer_db3cf5",
        bodyContainer: "bodyContainer_db3cf5",
      };
    },
  },
]);
//# sourceMappingURL=a68664c3a59f042d647f.js.map
