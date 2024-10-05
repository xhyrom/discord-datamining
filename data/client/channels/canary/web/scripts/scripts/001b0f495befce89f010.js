"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18895"],
  {
    210913: function (e) {
      e.exports = "/assets/f50cda962897d21b9ebe.svg";
    },
    526705: function (e) {
      e.exports = "/assets/b9daa76ecf3a9079606f.svg";
    },
    784370: function (e) {
      e.exports = "/assets/ec5614ac16f5a30ed9c6.gif";
    },
    64395: function (e) {
      e.exports = "/assets/0ba29b416c97dd8e2402.svg";
    },
    980568: function (e, t, n) {
      var i = n(570140),
        s = n(626135),
        o = n(981631);
      t.Z = {
        dismissForApplicationId(e) {
          i.Z.dispatch({
            type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
            key: e,
            value: !0,
          }),
            s.default.track(o.rMx.CLOSE_TUTORIAL, {
              tutorial: "activity-invite-nux-inline",
              application_id: e,
              acknowledged: !0,
            });
        },
      };
    },
    966390: function (e, t, n) {
      n(47120), n(789020);
      var i = n(481060),
        s = n(570140),
        o = n(430742),
        a = n(904245),
        l = n(166459),
        r = n(531643),
        c = n(881052),
        d = n(673750),
        u = n(141795),
        h = n(476326),
        m = n(680287),
        p = n(163268),
        f = n(539573),
        g = n(786761),
        _ = n(3148),
        T = n(48854),
        v = n(785359),
        E = n(79390),
        b = n(623292),
        I = n(807092),
        C = n(467798),
        S = n(703558),
        R = n(117530),
        x = n(630388),
        N = n(226351),
        O = n(981631),
        Z = n(689938);
      async function A(e) {
        var t, n, i;
        let u,
          {
            channelId: h,
            uploads: A,
            draftType: j,
            parsedMessage: M,
            options: y = {},
            raiseEndpointErrors: L = !1,
          } = e,
          P = new m.Z(O.ANM.MESSAGES(h)),
          U = new N.o(),
          w = {
            content: "",
            nonce: "",
            channel_id: h,
            type: O.uaV.DEFAULT,
            sticker_ids: null == y ? void 0 : y.stickerIds,
            poll: null == y ? void 0 : y.poll,
          };
        null != M && (w.content = null == M ? void 0 : M.content),
          null != I.Z.getPendingReply(h) &&
            ((w.type = O.uaV.REPLY),
            (w.message_reference = y.messageReference),
            (w.allowed_mentions = y.allowedMentions),
            (0, b.A6)(h));
        let [D, k] = (0, C.Z)(w.content);
        D &&
          ((w.content = k),
          (w.flags = (0, x.pj)(
            null !== (t = w.flags) && void 0 !== t ? t : 0,
            O.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let B = null !== (n = y.nonce) && void 0 !== n ? n : (0, T.r)(),
          F = (0, _.ZP)({
            channelId: h,
            content: w.content,
            tts: null !== (i = null == M ? void 0 : M.tts) && void 0 !== i && i,
            type: w.type,
            messageReference: w.message_reference,
            flags: w.flags,
            nonce: B,
            poll: (0, E.x9)(y.poll),
          });
        return (
          ((w.nonce = B),
          P.on("start", (e) => {
            (u = (0, g.e5)({ ...F, id: e.id })),
              s.Z.dispatch({
                type: "UPLOAD_START",
                channelId: h,
                file: e,
                message: u,
                uploader: P,
              });
          }),
          P.on("progress", (e) => {
            s.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: h, file: e });
          })),
          P.on("error", (e, t, n, i) => {
            if (
              (s.Z.dispatch({
                type: "UPLOAD_FAIL",
                channelId: h,
                file: e,
                messageRecord: u,
              }),
              (0, v.x)({
                fileItems: e.items,
                failureCode: t,
                errorMessage: null == i ? void 0 : i.msg,
              }),
              t === O.evJ.EXPLICIT_CONTENT)
            ) {
              a.Z.sendExplicitMediaClydeError(
                h,
                null == n ? void 0 : n.attachments,
                p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (t === O.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: t, message: null == n ? void 0 : n.message },
                i =
                  null == u
                    ? null
                    : { type: d.$V.SEND, message: { ...u, channelId: h } };
              (0, r.openUploadError)({
                title: Z.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: (0, f.uF)(i, e),
              });
              return;
            }
            if (t !== O.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (L)
                U.reject(new c.Hx({ status: t, body: null != n ? n : {} }, t));
              else {
                var m;
                (0, r.openUploadError)({
                  title: Z.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                  help:
                    null !== (m = null == n ? void 0 : n.message) &&
                    void 0 !== m
                      ? m
                      : Z.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP,
                });
              }
              "" !== w.content &&
                "" === S.Z.getDraft(h, j) &&
                o.Z.saveDraft(h, w.content, j),
                0 === R.Z.getUploadCount(h, j) &&
                  l.Z.setUploads({ channelId: h, uploads: A, draftType: j });
            }
          }),
          P.on("complete", (e, t) => {
            s.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: h,
              file: e,
              aborted: P._aborted,
              messageRecord: t,
            });
          }),
          await P.uploadFiles(A, w),
          U.resolve(),
          U.promise
        );
      }
      t.Z = {
        instantBatchUpload: function (e) {
          let {
              channelId: t,
              files: n,
              draftType: i,
              isThumbnail: s = !1,
              filesMetadata: o = [],
            } = e,
            a = Array.from(n).map((e, n) => {
              let i = null != o ? o[n] : {};
              return new u.n(
                { file: e, platform: h.ow.WEB, isThumbnail: s, ...i },
                t,
              );
            });
          A({ channelId: t, uploads: a, draftType: i });
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
            let e = I.Z.getPendingReply(n);
            if (null != e) {
              let t = a.Z.getSendMessageOptionsForReply(e);
              (f.type = O.uaV.REPLY),
                (f.message_reference = t.messageReference),
                (f.allowed_mentions = t.allowedMentions),
                (0, b.A6)(n);
            }
          }
          let g = new m.Z(O.ANM.MESSAGES(n));
          g.on("start", (e) => {
            s.Z.dispatch({
              type: "UPLOAD_START",
              channelId: n,
              file: e,
              uploader: g,
            });
          }),
            g.on("progress", (e) => {
              s.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: n, file: e });
            }),
            g.on("error", (t, u, h) => {
              if (
                (s.Z.dispatch({ type: "UPLOAD_FAIL", channelId: n, file: t }),
                (0, v.x)({ fileItems: t.items, failureCode: u }),
                u === O.evJ.EXPLICIT_CONTENT)
              ) {
                a.Z.sendExplicitMediaClydeError(
                  n,
                  null == h ? void 0 : h.attachments,
                  p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, r.openUploadError)({
                title: Z.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: Z.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                  onClick: () => {
                    (0, i.closeModal)(r.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: n, file: l, draftType: c, message: d });
                  },
                }),
              }),
                "" !== f.content &&
                  "" === S.Z.getDraft(n, c) &&
                  o.Z.saveDraft(n, f.content, c);
            }),
            g.on("complete", (e) => {
              s.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: n, file: e });
            }),
            g.upload(l, f);
        },
        uploadFiles: A,
        cancel(e) {
          s.Z.dispatch({ type: "UPLOAD_CANCEL_REQUEST", file: e }),
            null != e.draftContent &&
              null != e.channelId &&
              "" === S.Z.getDraft(e.channelId, S.d.ChannelMessage) &&
              s.Z.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: S.d.ChannelMessage,
              });
        },
      };
    },
    738619: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return z;
        },
      }),
        n(653041),
        n(47120);
      var i = n(735250),
        s = n(470079),
        o = n(120356),
        a = n.n(o),
        l = n(392711),
        r = n.n(l),
        c = n(913527),
        d = n.n(c),
        u = n(748780),
        h = n(866442),
        m = n(442837),
        p = n(692547),
        f = n(481060),
        g = n(980568),
        _ = n(560768),
        T = n(812206),
        v = n(11769),
        E = n(243778),
        b = n(843693),
        I = n(246642),
        C = n(921227),
        S = n(314897),
        R = n(430824),
        x = n(496675),
        N = n(699516),
        O = n(885110),
        Z = n(300429),
        A = n(111583),
        j = n(594174),
        M = n(451478),
        y = n(626135),
        L = n(585483),
        P = n(70956),
        U = n(823379),
        w = n(5192),
        D = n(981631),
        k = n(689938),
        B = n(443236);
      function F(e, t, n) {
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
      let V = [];
      class H extends s.PureComponent {
        componentDidMount() {
          this.timeout = setTimeout(() => {
            this.setState({ fadeIn: !0 }),
              (this.timeout = null),
              this.logShownEventIfNeeded();
          }, 100);
        }
        componentDidUpdate() {
          this.logShownEventIfNeeded();
        }
        logShownEventIfNeeded() {
          let e = this.props.activity.application_id;
          null != e &&
            -1 === V.indexOf(e) &&
            (y.default.track(D.rMx.SHOW_TUTORIAL, {
              tutorial: "activity-invite-nux-inline",
              application_id: e,
            }),
            V.push(e));
        }
        componentWillUnmount() {
          null !== this.timeout && clearTimeout(this.timeout);
        }
        render() {
          let { activity: e } = this.props;
          return (0, i.jsxs)("div", {
            className: a()(B.activityInviteEducation, {
              [B.activityInviteEducationFadeIn]: this.state.fadeIn,
            }),
            children: [
              (0, i.jsx)("div", { className: B.activityInviteEducationArrow }),
              (0, i.jsx)("span", {
                children:
                  k.Z.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
                    game: e.name,
                    dismissOnClick: this.handleDismissInviteEducation,
                  }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            F(this, "state", { fadeIn: !1 }),
            F(this, "timeout", null),
            F(this, "handleDismissInviteEducation", () => {
              let { activity: e } = this.props;
              null != e &&
                null != e.application_id &&
                g.Z.dismissForApplicationId(e.application_id);
            });
        }
      }
      function G(e) {
        let { channel: t, guild: n } = e;
        return (0, i.jsx)(E.ZP, {
          contentTypes: [],
          children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return null;
          },
        });
      }
      class W extends s.PureComponent {
        componentDidMount() {
          L.S.subscribe(
            D.CkL.EMPHASIZE_SLOWMODE_COOLDOWN,
            this.emphasizeSlowmodeCooldown,
          );
        }
        componentWillUnmount() {
          L.S.unsubscribe(
            D.CkL.EMPHASIZE_SLOWMODE_COOLDOWN,
            this.emphasizeSlowmodeCooldown,
          );
        }
        getCooldownTextStyle() {
          let { color: e } = this.state,
            { baseTextColor: t, activeTextColor: n } = this.props;
          return {
            color: e.interpolate({
              inputRange: [0, 1],
              outputRange: [t, (0, h.wK)(n, 0.9)],
            }),
          };
        }
        render() {
          let e, t;
          let {
              guildId: n,
              activity: s,
              showInviteEducation: o,
              isFocused: l,
              typingUsers: c,
              className: h,
              slowmodeCooldownGuess: m,
              isBypassSlowmode: p,
              channel: g,
              isThreadCreation: _,
              renderDots: T,
              poggermodeEnabled: E,
              isComboing: b,
            } = this.props,
            { rateLimitPerUser: C } = g,
            S = j.default.getCurrentUser(),
            x = R.Z.getGuild(n),
            O = C > 0,
            Z = _
              ? []
              : r()(c)
                  .keys()
                  .filter((e) => e !== (null == S ? void 0 : S.id))
                  .reject((e) => N.Z.isBlocked(e))
                  .map((e) => j.default.getUser(e))
                  .filter(U.lm)
                  .map((e) => w.ZP.getName(n, this.props.channel.id, e))
                  .value();
          if (0 === Z.length && !O && !b)
            return o && null != s
              ? (0, i.jsx)(H, { activity: s, isFocused: l })
              : (0, i.jsx)(G, { channel: g, guild: x });
          let A = null,
            M = "";
          if (O) {
            if (
              ((A = (0, i.jsx)(f.TimerIcon, {
                size: "xs",
                color: "currentColor",
                className: B.slowModeIcon,
              })),
              (M = (0, v.k)(C)),
              !p && m > 0)
            ) {
              let t = d().duration(m);
              if (m > P.Z.Millis.HOUR) {
                let n = "".concat(t.minutes()).padStart(2, "0"),
                  i = "".concat(t.seconds()).padStart(2, "0");
                e = "".concat(t.hours(), ":").concat(n, ":").concat(i);
              } else {
                let n = "".concat(t.seconds()).padStart(2, "0");
                e = "".concat(t.minutes(), ":").concat(n);
              }
            } else
              0 === Z.length &&
                (e = p
                  ? k.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE
                  : k.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT);
          }
          let [y, L, D] = Z;
          return (
            (t =
              0 === Z.length
                ? ""
                : 1 === Z.length
                  ? k.Z.Messages.ONE_USER_TYPING.format({ a: y })
                  : 2 === Z.length
                    ? k.Z.Messages.TWO_USERS_TYPING.format({ a: y, b: L })
                    : 3 === Z.length
                      ? k.Z.Messages.THREE_USERS_TYPING.format({
                          a: y,
                          b: L,
                          c: D,
                        })
                      : k.Z.Messages.SEVERAL_USERS_TYPING),
            (0, i.jsxs)("div", {
              className: a()(
                B.typing,
                { "stop-animation": !l, [B.isComboing]: E && b },
                h,
              ),
              children: [
                (0, i.jsxs)("div", {
                  className: B.typingDots,
                  children: [
                    Z.length > 0 &&
                      !1 !== T &&
                      (0, i.jsx)(f.Dots, {
                        className: B.ellipsis,
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    (0, i.jsx)("span", {
                      className: B.text,
                      "aria-live": "polite",
                      "aria-atomic": !0,
                      children: t,
                    }),
                  ],
                }),
                O &&
                  (0, i.jsx)(f.Tooltip, {
                    text: M,
                    children: (t) =>
                      (0, i.jsxs)(u.Z.div, {
                        style: this.getCooldownTextStyle(),
                        className: B.cooldownWrapper,
                        ...t,
                        children: [e, A],
                      }),
                  }),
                E && b && (0, i.jsx)(I.Z, { channelId: g.id }),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            F(this, "state", { color: new u.Z.Value(0) }),
            F(this, "emphasizeSlowmodeCooldown", () => {
              let { color: e } = this.state;
              u.Z.sequence([
                u.Z.timing(e, {
                  toValue: 1,
                  duration: 100,
                  easing: u.Z.Easing.quad,
                }),
                u.Z.timing(e, {
                  delay: 250,
                  toValue: 0,
                  duration: 100,
                  easing: u.Z.Easing.quad,
                }),
              ]).start();
            });
        }
      }
      function z(e) {
        let { channel: t, isThreadCreation: n = !1, ...s } = e,
          o = (0, m.e7)([O.Z], () =>
            O.Z.findActivity((e) => null != e.application_id),
          ),
          a = (0, m.e7)([b.ZP, S.default], () =>
            b.ZP.getUserCombo(S.default.getId(), t.id),
          ),
          l = (0, m.e7)([C.Z, T.Z], () => (0, _.Z)(t, o, C.Z, T.Z)),
          r = (0, m.e7)([Z.Z], () =>
            Z.Z.getSlowmodeCooldownGuess(
              t.id,
              n ? Z.S.CreateThread : Z.S.SendMessage,
            ),
          ),
          c = (0, m.e7)([x.Z], () =>
            n
              ? x.Z.can(D.Plq.MANAGE_THREADS, t)
              : x.Z.can(D.Plq.MANAGE_CHANNELS, t) ||
                x.Z.can(D.Plq.MANAGE_MESSAGES, t),
          ),
          d = {
            ...s,
            baseTextColor: (0, f.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, f.useToken)(
              p.Z.colors.INTERACTIVE_NORMAL,
            ).hex(),
            showInviteEducation: l,
            activity: o,
            typingUsers: (0, m.e7)([A.Z], () => A.Z.getTypingUsers(t.id)),
            isFocused: (0, m.e7)([M.Z], () => M.Z.isFocused()),
            guildId: t.guild_id,
            slowmodeCooldownGuess: r,
            isComboing: null != a,
            isBypassSlowmode: c,
            channel: t,
            isThreadCreation: n,
          };
        return (0, i.jsx)(W, { ...d });
      }
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
      var i = n(735250),
        s = n(470079),
        o = n(120356),
        a = n.n(o),
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
        _ = n(600164),
        T = n(633302),
        v = n(712057),
        E = n(660189),
        b = n(372900),
        I = n(566006),
        C = n(620652),
        S = n(815605),
        R = n(222677),
        x = n(995774),
        N = n(665906),
        O = n(210887),
        Z = n(314897),
        A = n(592125),
        j = n(271383),
        M = n(542578),
        y = n(375954),
        L = n(496675),
        P = n(699516),
        U = n(594174),
        w = n(768581),
        D = n(176354),
        k = n(5192),
        B = n(709054),
        F = n(91047),
        V = n(981631),
        H = n(689938),
        G = n(211985),
        W = n(113207);
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
          ? T.ZP.convertSurrogateToName(e.name)
          : ":".concat(e.name, ":");
      }
      let Y = (e) => {
        let { emoji: t, channelId: n, messageId: o } = e,
          [l, r] = s.useState(!0),
          [c, d] = s.useState([]),
          u = s.useMemo(() => {
            if (null == c || c.length < 1) return;
            let e = (0, S.Zn)(t, c[0], n, {
              emojiSize: C.M.LARGE,
              messageId: o,
            });
            return (0, i.jsx)(C.Z, {
              className: G.__invalid_effect,
              effect: e,
              emojiSize: C.M.LARGE,
              onComplete: () => r(!1),
            });
          }, [c, t, n, o]);
        return (
          s.useEffect(() => {
            let e = !1;
            return (
              r(!0),
              !(async function () {
                let n = await (0, D.B6)(t);
                Array.isArray(n) && n.length > 0 && !e && d(n);
              })(),
              () => {
                e = !0;
              }
            );
          }, [t]),
          (0, i.jsxs)("div", {
            className: G.burstEmojiSection,
            children: [
              u,
              (0, i.jsx)(m.Z, {
                className: a()(G.burstEmoji, { [G.hideEmoji]: l }),
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
      class J extends s.PureComponent {
        render() {
          let {
              emoji: e,
              count: t,
              isSelected: n,
              setSelected: s,
              reactionType: o,
              colors: l,
            } = this.props,
            r = K(e),
            d = (function (e, t, n, s) {
              let o =
                null == e.id
                  ? D.ZP.getURL(e.name)
                  : w.ZP.getEmojiURL({
                      id: e.id,
                      animated: e.animated,
                      size: 24,
                    });
              return null != o && "" !== o
                ? (0, i.jsx)("img", { className: n, src: o, alt: e.name })
                : (0, i.jsx)("span", { className: s, children: e.name });
            })(e, 24, G.emoji, a()(G.emoji, G.emojiText)),
            u = o === I.O.BURST,
            m = (
              u
                ? H.Z.Messages.BURST_REACTION_REACTORS_A11Y
                : H.Z.Messages.REACTION_REACTORS_A11Y
            ).format({ name: r, n: t }),
            p = {},
            f = {};
          if (u) {
            let {
              backgroundColor: e = "",
              opacity: t = 1,
              accentColor: i = "",
            } = null != l ? l : {};
            if (((f.color = i), n)) {
              var g;
              p.background =
                null !== (g = (0, c.wK)(e, t)) && void 0 !== g ? g : "";
            }
          }
          return (0, i.jsx)(h.Tooltip, {
            position: "left",
            text: r,
            children: (l) => {
              let { onMouseEnter: r, onMouseLeave: c } = l;
              return (0, i.jsxs)(h.Clickable, {
                className: a()({
                  [G.reactionDefault]: !n,
                  [G.reactionSelected]: n,
                }),
                "aria-label": m,
                onClick: () => s({ emoji: e, reactionType: o }),
                onMouseEnter: r,
                onMouseLeave: c,
                style: p,
                children: [
                  d,
                  (0, i.jsx)(h.Text, {
                    variant: "text-sm/bold",
                    style: f,
                    children: t,
                  }),
                ],
              });
            },
          });
        }
      }
      function q(e) {
        let {
            emoji: t,
            user: n,
            message: s,
            channel: o,
            guildId: a,
            reactionType: l,
            onRemoveReactor: r,
            disableManage: c = !1,
          } = e,
          u = (0, d.e7)([Z.default], () => Z.default.getId()),
          m = (0, d.e7)([U.default], () => U.default.getUser(n.id), [n]),
          g = (0, N.$R)(o),
          T =
            (0, d.e7)([L.Z], () => L.Z.can(V.Plq.MANAGE_MESSAGES, o) && g) ||
            u === n.id,
          v = (0, d.e7)([j.ZP, A.Z, P.Z], () => k.ZP.getName(a, o.id, n));
        return (0, i.jsxs)(_.Z, {
          className: G.reactorDefault,
          onContextMenu: (e) => (0, F.Pv)(e, n, o),
          align: _.Z.Align.CENTER,
          children: [
            (0, i.jsx)(_.Z.Child, {
              wrap: !0,
              grow: 0,
              shrink: 0,
              className: W.marginReset,
              children: (0, i.jsx)(f.Z, {
                user: null != m ? m : n,
                size: h.AvatarSizes.SIZE_24,
              }),
            }),
            (0, i.jsx)(_.Z.Child, {
              children: (0, i.jsxs)(h.Text, {
                tag: "strong",
                variant: "text-md/normal",
                className: G.name,
                children: [
                  null != v &&
                    "" !== v &&
                    (0, i.jsx)("span", {
                      className: n.isPomelo() ? "" : G.nickname,
                      children: v,
                    }),
                  (0, i.jsx)(p.Z, {
                    user: n,
                    className: null != v && "" !== v ? G.tagFaded : null,
                    usernameClass: G.username,
                    discriminatorClass: G.discriminator,
                    forceUsername: !0,
                  }),
                ],
              }),
            }),
            !c &&
              T &&
              (0, i.jsx)(h.Clickable, {
                onClick: function () {
                  R.WO({
                    channelId: o.id,
                    messageId: s.id,
                    emoji: t,
                    location: R.TW.MESSAGE,
                    userId: n.id,
                    options: { burst: l === I.O.BURST },
                  }),
                    null == r || r();
                },
                children: (0, i.jsx)(h.XSmallIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: G.remove,
                }),
              }),
          ],
        });
      }
      class X extends s.PureComponent {
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
            R.U0({
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
              message: s,
              reactionType: o,
            } = this.props,
            a = [];
          return (
            0 === t.length && this.state.loadingMore
              ? a.push(length)
              : (a.push(t.length), e && a.push(1)),
            (0, i.jsxs)("div", {
              className: G.reactorsContainer,
              children: [
                o === I.O.BURST &&
                  (0, i.jsx)(Y, {
                    emoji: n.emoji,
                    channelId: s.getChannelId(),
                    messageId: s.id,
                  }),
                (0, i.jsx)(h.List, {
                  className: G.reactors,
                  fade: !0,
                  ref: this.scrollerRef,
                  sections: a,
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
            z(this, "scrollerRef", s.createRef()),
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
                  message: s,
                  guildId: o,
                  channel: a,
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
                      { className: G.spinnerMore },
                      "hasMore",
                    )
                  : null;
              return 0 === r.length && this.state.loadingMore
                ? (0, i.jsx)(h.Spinner, { className: G.spinner }, "loadingMore")
                : null != u &&
                    (0, i.jsx)(
                      q,
                      {
                        message: s,
                        emoji: l.emoji,
                        guildId: o,
                        channel: a,
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
      let $ = d.ZP.connectStores([M.Z], (e) => {
        let { message: t, reaction: n, reactionType: i } = e,
          s = M.Z.getReactions(t.getChannelId(), t.id, n.emoji, V.pTL, i);
        if (null == s) return { reactors: [], hasMore: !1 };
        let o = Object.values(s),
          a = (i === I.O.BURST ? n.burst_count : n.count) > o.length;
        return { reactors: o, hasMore: a };
      })(X);
      function Q(e) {
        var t;
        let {
            message: n,
            selectedReaction: o,
            disableManage: a = !1,
            disableTabs: l = !1,
            onClose: r,
            transitionState: c,
            "aria-label": m = H.Z.Messages.REACTIONS,
          } = e,
          p = (0, d.e7)([A.Z], () => A.Z.getChannel(n.getChannelId())),
          f = null == p ? void 0 : p.getGuildId(),
          _ = (0, d.e7)(
            [y.Z, E.Z],
            () => {
              var e, t;
              let i =
                null !== (t = y.Z.getMessage(n.getChannelId(), n.id)) &&
                void 0 !== t
                  ? t
                  : null ===
                        (e = E.Z.getMessage(
                          B.default.castMessageIdAsChannelId(n.id),
                        )) || void 0 === e
                    ? void 0
                    : e.firstMessage;
              return null != i ? i.reactions : [];
            },
            [n],
          );
        let T =
            ((t = _),
            s.useMemo(() => {
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
          C = T[0],
          [S, R] = (function (e, t, n) {
            let [i, o] = s.useState(null != e ? e : t);
            return (
              s.useEffect(() => {
                null != i &&
                  null ==
                    n.find((e) => {
                      let t =
                        null != e.me_vote
                          ? I.O.VOTE
                          : e.burst_count > 0
                            ? I.O.BURST
                            : I.O.NORMAL;
                      return (
                        (0, x.ir)(e.emoji, i.emoji) && t === i.reactionType
                      );
                    }) &&
                  o(t);
              }, [i, o, n, t]),
              [i, o]
            );
          })(
            o,
            null != C
              ? {
                  emoji: C.emoji,
                  reactionType: C.burst_count > 0 ? I.O.BURST : I.O.NORMAL,
                }
              : null,
            _,
          ),
          N = s.useMemo(() => {
            var e;
            return null == S
              ? null
              : null !== (e = _.find((e) => (0, x.ir)(e.emoji, S.emoji))) &&
                  void 0 !== e
                ? e
                : null;
          }, [_, S]),
          Z = (0, d.e7)([g.Z], () => g.Z.saturation),
          j = (0, d.e7)([O.Z], () => (0, u.wj)(O.Z.theme));
        if (
          (s.useEffect(() => {
            (0 === _.length || (null == S && null == N)) && setImmediate(r);
          }, [r, _.length, N, S]),
          null == S || null == N)
        )
          return (0, i.jsx)(h.Spinner, {});
        if (null == p)
          throw Error(
            "MessageReactions.render: Message does not have a channelId",
          );
        return (0, i.jsx)(b.Z.Provider, {
          value: null != f ? f : void 0,
          children: (0, i.jsxs)(h.ModalRoot, {
            "aria-label": m,
            transitionState: c,
            size: h.ModalSize.DYNAMIC,
            className: G.container,
            children: [
              l
                ? null
                : (0, i.jsx)(h.Scroller, {
                    className: G.scroller,
                    fade: !0,
                    children: T.map((e) => {
                      var t;
                      let n = e.burst_count > 0;
                      return (0, i.jsx)(
                        J,
                        {
                          isSelected: ee(S, e, n ? I.O.BURST : I.O.NORMAL),
                          setSelected: R,
                          reactionType: n ? I.O.BURST : I.O.NORMAL,
                          emoji: e.emoji,
                          count: n ? e.burst_count : e.count,
                          colors:
                            null != e.burst_colors
                              ? (0, v.Z)(e.burst_colors, Z, j)
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
                reaction: N,
                guildId: f,
                channel: p,
                reactionType: S.reactionType,
                disableManage: a,
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
        s = n.n(i),
        o = n(697741);
      let a = new Set([
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
        return a.has(e);
      }
      function d(e) {
        return 0 === e.length;
      }
      function u(e) {
        var t;
        let n = new Set(
          ((t = e),
          s()(t.split(/\W+/))
            .map(l)
            .reject(d)
            .map(r)
            .reject(c)
            .map(o.$)
            .value()),
        );
        return (e) =>
          (function e(t, n) {
            if (Array.isArray(t)) t.forEach((t) => e(t, n));
            else if ("string" == typeof t.content && "codeBlock" !== t.type) {
              let e = [],
                i = "";
              t.content.split(/(\W+)/g).forEach((t) => {
                var s, a;
                if (
                  ((s = t),
                  (a = n),
                  !d((s = r(l(s)))) && !c(s) && a.has((0, o.$)(s)))
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
        s = n(881052),
        o = n(687294),
        a = n(476326),
        l = n(861990),
        r = n(689938);
      class c extends o.Z {
        async uploadFiles(e, t) {
          let { addFilesTo: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super.upload({ name: r.Z.Messages.ATTACHMENT_PROCESSING }, t, e);
          let i = new AbortController();
          try {
            if (((this.files = e), this._aborted)) return;
            if (
              (this._handleStart(() => i.abort()),
              !(await this.compressAndCheckFileSize()))
            )
              return;
            this.setUploadingTextForUI(),
              await (0, o.$)(
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
          let o;
          let r = [];
          this.files.forEach((e, t) => {
            let n = (0, l.B)(e, t);
            e.item.platform === a.ow.WEB && r.push({ ...n });
          }),
            (o =
              null != n && null != t
                ? this._addAttachmentsToPayload(t, n, r)
                : { ...t, attachments: r });
          let c = { url: this._url, body: o, signal: e },
            d = "POST" === this._method ? i.tn.post : i.tn.patch;
          try {
            let e = await d(c);
            return this._handleComplete(e.body), e.body;
          } catch (e) {
            var u;
            if (this._raiseEndpointErrors) throw new s.Hx(e);
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
    560768: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(789020);
      var i = n(630388),
        s = n(620662),
        o = n(981631);
      function a(e, t, n, a) {
        let l = null == t ? void 0 : t.application_id;
        if (null == e || null == t || !(0, s.Z)(t, o.xjy.JOIN) || null == l)
          return !1;
        let r = a.getApplication(l);
        return (
          !(null == r || (0, i.yE)(r.flags, o.udG.EMBEDDED)) &&
          n.shouldShowEducation(l)
        );
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
        s,
        o,
        a = n(735250),
        l = n(470079),
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
      ((i = s || (s = {}))[(i.ABOVE = 0)] = "ABOVE"),
        (i[(i.VISIBLE = 1)] = "VISIBLE"),
        (i[(i.BELOW = 2)] = "BELOW");
      class f extends (o = l.PureComponent) {
        static getDerivedStateFromProps(e, t) {
          let { prevValue: n, currValue: i, nextValue: s } = t;
          return null == n && i !== e.value
            ? { prevValue: u.Z.isFocused() ? i : null, currValue: e.value }
            : null != s && s !== e.value
              ? { nextValue: e.value }
              : null;
        }
        componentDidUpdate(e, t) {
          let { prevValue: n, currValue: i } = this.state;
          n !== t.prevValue && null != n && this.animateBetween(n, i);
        }
        animateBetween(e, t) {
          let n;
          let { forcePosition: i, animationSpeed: s } = this.props;
          this.prevAnimate.setValue(1),
            null != i
              ? 0 === i
                ? (this.currAnimate.setValue(0), (n = 2))
                : 2 === i && (this.currAnimate.setValue(2), (n = 0))
              : e > t
                ? (this.currAnimate.setValue(0), (n = 2))
                : (this.currAnimate.setValue(2), (n = 0)),
            d.Z.parallel([
              d.Z.timing(this.prevAnimate, m(n, s)),
              d.Z.timing(this.currAnimate, m(1, s)),
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
            s = c().omit(this.props, [
              "value",
              "digitWidth",
              "padStartLength",
              "forcePosition",
            ]);
          if (null == e)
            return (0, a.jsx)("div", {
              ...s,
              style: { color: n, minWidth: this.getMinWidth(t) },
              children: null != i ? i(this.padValue(t)) : this.padValue(t),
            });
          let o = Math.max(e, t);
          return (0, a.jsxs)("div", {
            ...s,
            style: { color: n, position: "relative", overflow: "hidden" },
            children: [
              (0, a.jsx)("div", {
                style: { visibility: "hidden", minWidth: this.getMinWidth(o) },
                children: this.padValue(o),
              }),
              (0, a.jsx)(d.Z.div, {
                style: { color: n, ...this.getAnimatedStyle(this.prevAnimate) },
                children: null != i ? i(this.padValue(e)) : this.padValue(e),
              }),
              (0, a.jsx)(d.Z.div, {
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
      h(f, "Positions", s);
    },
    11769: function (e, t, n) {
      n.d(t, {
        k: function () {
          return o;
        },
      });
      var i = n(70956),
        s = n(689938);
      function o(e) {
        if (e >= i.Z.Seconds.HOUR) {
          let t = Math.floor(e / i.Z.Seconds.HOUR),
            n = Math.floor((e - t * i.Z.Seconds.HOUR) / i.Z.Seconds.MINUTE),
            o = e - t * i.Z.Seconds.HOUR - n * i.Z.Seconds.MINUTE;
          return s.Z.Messages.CHANNEL_SLOWMODE_DESC_HOURS.format({
            hours: t,
            minutes: n,
            seconds: o,
          });
        }
        if (!(e >= 60))
          return s.Z.Messages.CHANNEL_SLOWMODE_DESC.format({ seconds: e });
        {
          let t = Math.floor(e / 60);
          return s.Z.Messages.CHANNEL_SLOWMODE_DESC_MINUTES.format({
            minutes: t,
            seconds: e - 60 * t,
          });
        }
      }
    },
    98474: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120);
      var i = n(735250),
        s = n(470079),
        o = n(887024),
        a = n(212433),
        l = n(748780),
        r = n(481060),
        c = n(596454),
        d = n(745510),
        u = n(314910),
        h = n(912893),
        m = n(768581),
        p = n(176354),
        f = n(675654),
        g = n(867494);
      let _ = [];
      function T(e) {
        let { messageId: t, emoji: n, startPosition: T, targetPosition: v } = e,
          [E, b] = s.useState(0),
          [I, C] = s.useState(0),
          [S, R] = s.useState(null),
          { confettiCanvas: x } = s.useContext(d.h),
          N = (0, o.uR)(x, S),
          O = s.useMemo(
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
          Z = v.x - (v.width / 2) * 0.5,
          A = v.y - (v.height / 2) * 0.5,
          j = (0, r.useSpring)({
            from: { y: T.y },
            to: { y: A },
            config: { duration: 450, easing: l.Z.Easing.in(l.Z.Easing.exp) },
            onChange: (e) => {
              let { y: t } = e;
              C(t);
            },
          }),
          M = (0, r.useSpring)({
            from: { x: T.x, scale: 1, opacity: 1 },
            to: { x: Z, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: l.Z.Easing.in(l.Z.Easing.ease) },
            onRest: () => {
              (0, h.G)(t, n.name, n.id);
            },
            onChange: (e) => {
              let { x: t } = e;
              b(t);
            },
          });
        return (
          s.useEffect(() => {
            E > 0 &&
              I > 0 &&
              N.createConfetti({
                ...f.We,
                position: { type: "static", value: { x: E, y: I } },
              });
          }, [N, E, I]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(o.Ji, {
                ref: R,
                sprites: O,
                colors: _,
                spriteWidth: f.Ko,
                spriteHeight: f.Ko,
              }),
              (0, i.jsx)(u.ZP, {
                children: (0, i.jsx)(a.animated.div, {
                  style: { ...j },
                  className: g.emojiContainer,
                  children: (0, i.jsx)(a.animated.div, {
                    style: { ...M, opacity: M.opacity },
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
        s = n(780384),
        o = n(607070),
        a = n(210887),
        l = n(712057);
      let r = (e) => {
        let t = (0, i.e7)([o.Z], () => o.Z.saturation),
          n = (0, i.e7)([a.Z], () => (0, s.wj)(a.Z.theme));
        return (0, l.Z)(e, t, n);
      };
    },
    109434: function (e, t, n) {
      n.d(t, {
        H: function () {
          return _;
        },
        v: function () {
          return T;
        },
      }),
        n(47120);
      var i = n(512722),
        s = n.n(i),
        o = n(652874),
        a = n(313361),
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
          layoutType: a.X.LIST,
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
                s = { ...n.channelStates };
              (s[e] = { ...i, ...t }),
                (0, r.j)(() => this.set({ channelStates: s }));
            }),
            (this.getChannelState = (e) => {
              if (null == e) return p;
              let { channelStates: t } = this.get(),
                n = t[e];
              if (null == n) {
                let t = d.Z.getChannel(e);
                s()(
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
      let g = (0, o.Z)((e, t) => new f(e, t)),
        _ = (e) => {
          let t = g();
          return null == (0, c.e7)([d.Z], () => d.Z.getChannel(e))
            ? p
            : t.getChannelState(e);
        },
        T = () => g;
    },
    73315: function (e, t, n) {
      n(627341);
      var i = n(735250);
      n(470079);
      var s = n(120356),
        o = n.n(s),
        a = n(278074),
        l = n(481060),
        r = n(169525),
        c = n(638384);
      t.Z = (e) => {
        let { obscureReason: t, iconClassname: n } = e;
        return (0, a.EQ)(t)
          .with(r.wk.EXPLICIT_CONTENT, () =>
            (0, i.jsx)(l.ImageWarningIcon, {
              className: o()(n, c.obscuredIcon),
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
          return ee;
        },
        NN: function () {
          return ei;
        },
        TJ: function () {
          return et;
        },
        au: function () {
          return er;
        },
        kZ: function () {
          return el;
        },
        m9: function () {
          return ea;
        },
        og: function () {
          return ed;
        },
      }),
        n(47120);
      var i = n(735250),
        s = n(470079),
        o = n(120356),
        a = n.n(o),
        l = n(512722),
        r = n.n(l),
        c = n(913527),
        d = n.n(c),
        u = n(91192),
        h = n(442837),
        m = n(692547),
        p = n(481060),
        f = n(738619),
        g = n(393238),
        _ = n(963374),
        T = n(884338),
        v = n(446489),
        E = n(95398),
        b = n(406432),
        I = n(169525),
        C = n(566006),
        S = n(255269),
        R = n(937889),
        x = n(443877),
        N = n(524444),
        O = n(287151),
        Z = n(267128),
        A = n(695346),
        j = n(433355),
        M = n(592125),
        y = n(496675),
        L = n(699516),
        P = n(451478),
        U = n(55935),
        w = n(109434),
        D = n(456269),
        k = n(109590),
        B = n(660189),
        F = n(208970),
        V = n(73315),
        H = n(470623),
        G = n(196255),
        W = n(858543),
        z = n(265641),
        K = n(627896),
        Y = n(883728),
        J = n(981631),
        q = n(217702),
        X = n(689938),
        $ = n(646230),
        Q = n(554034);
      let ee = 72,
        et = 72;
      t.ZP = s.memo(function (e) {
        let {
            threadId: t,
            goToThread: n,
            observePostVisibilityAnalytics: o,
            overrideMedia: l,
            className: c,
            containerWidth: d,
          } = e,
          {
            channel: m,
            isOpen: f,
            messageCount: _,
            firstMessage: T,
            content: v,
            media: E,
          } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
              i = (0, h.e7)([M.Z], () => M.Z.getChannel(t));
            r()(
              null != i,
              "the thread should not be null here, a store must have missed an update",
            );
            let s = (0, h.e7)(
                [j.ZP],
                () => j.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id,
              ),
              { firstMessage: o } = (0, k.cl)(i),
              { content: a, firstMedia: l } = (0, D.mX)({ firstMessage: o }),
              { messageCountText: c } = (0, D.nP)(i);
            return {
              channel: i,
              isOpen: s,
              messageCount: c,
              firstMessage: o,
              content: a,
              media: null != n ? n : l,
            };
          })({ threadId: t, overrideMedia: l }),
          { ref: b, height: I } = (0, g.Z)(),
          C = (0, H.xH)((e) => e.setCardHeight);
        s.useEffect(() => {
          null != I && C(t, I);
        }, [I, C, t]),
          s.useEffect(() => {
            null == o || o(b.current, t);
          }, [b, o, t]);
        let S = s.useRef(null),
          { handleLeftClick: R, handleRightClick: x } = (0, Y.Z)({
            facepileRef: S,
            goToThread: n,
            channel: m,
          }),
          { role: N, onFocus: O, ...Z } = (0, u.JA)(t),
          { isFocused: A, handleFocus: y, handleBlur: L } = (0, z.Z)(O);
        return (0, i.jsxs)("div", {
          ref: b,
          "data-item-id": t,
          onClick: R,
          onContextMenu: x,
          className: a()($.container, c, { [$.isOpen]: f }),
          children: [
            (0, i.jsx)(p.Clickable, {
              onClick: R,
              focusProps: { ringTarget: b },
              onContextMenu: x,
              "aria-label": X.Z.Messages.FORUM_POST_ARIA_LABEL.format({
                title: m.name,
                count: _,
              }),
              className: $.focusTarget,
              onFocus: y,
              onBlur: L,
              ...Z,
            }),
            (0, i.jsxs)("div", {
              className: $.left,
              children: [
                (0, i.jsx)(p.HeadingLevel, {
                  children: (0, i.jsx)(en, {
                    channel: m,
                    firstMessage: T,
                    content: v,
                    hasMediaAttachment: null != E,
                    containerWidth: d,
                  }),
                }),
                (0, i.jsx)(p.FocusBlock, {
                  enabled: !A,
                  children: (0, i.jsx)(eo, {
                    channel: m,
                    firstMessage: T,
                    facepileRef: S,
                  }),
                }),
              ],
            }),
            (null == T ? void 0 : T.blocked) || null == E
              ? null
              : (0, i.jsx)(eu, { channel: m, firstMedia: E }),
          ],
        });
      });
      function en(e) {
        let {
            channel: t,
            firstMessage: n,
            content: s,
            hasMediaAttachment: o,
            containerWidth: l,
          } = e,
          { isNew: r, hasUnreads: c } = (0, D.J$)(t),
          d = ei(t),
          { postTitleRef: u, isNewBadgeOverflow: h } = (0, K.x)(r, 24, l);
        return (0, i.jsxs)("div", {
          className: $.body,
          children: [
            (0, i.jsx)(W.ZP, { channel: t }),
            (0, i.jsx)("div", {
              className: a()($.header, { [$.withNewBadgeOverflow]: h }),
              children: (0, i.jsxs)("div", {
                className: $.headerText,
                children: [
                  (0, i.jsx)(p.Heading, {
                    variant: "heading-lg/semibold",
                    color: c ? "header-primary" : "text-muted",
                    lineClamp: 2,
                    className: $.postTitleText,
                    children: (0, i.jsxs)("span", {
                      ref: u,
                      children: [
                        d,
                        r &&
                          (0, i.jsx)("span", {
                            className: $.newBadgeWrapper,
                            children: (0, i.jsx)(p.TextBadge, {
                              className: $.newBadge,
                              color: m.Z.unsafe_rawColors.BRAND_260.css,
                              text: X.Z.Messages.NEW,
                            }),
                          }),
                      ],
                    }),
                  }),
                  r &&
                    h &&
                    (0, i.jsx)(p.TextBadge, {
                      className: $.newBadge,
                      color: m.Z.unsafe_rawColors.BRAND_260.css,
                      text: X.Z.Messages.NEW,
                    }),
                ],
              }),
            }),
            (0, i.jsx)("div", {
              className: $.message,
              children: (0, i.jsx)(es, {
                channel: t,
                message: n,
                content: s,
                hasMediaAttachment: o,
                hasUnreads: c,
              }),
            }),
          ],
        });
      }
      function ei(e) {
        let t = (0, h.e7)([F.Z], () => F.Z.getHasSearchResults(e.parent_id)),
          n = (0, h.e7)([F.Z], () => F.Z.getSearchQuery(e.parent_id)),
          i = s.useMemo(() => (0, _.nC)(t && null != n ? n : ""), [t, n]);
        return s.useMemo(
          () =>
            (0, R.ZP)({ content: e.name, embeds: [] }, { postProcessor: i })
              .content,
          [e.name, i],
        );
      }
      let es = s.memo(function (e) {
        let {
            message: t,
            channel: n,
            content: s,
            hasMediaAttachment: o,
            hasUnreads: l,
          } = e,
          r = (0, h.e7)([L.Z], () => null != t && L.Z.isBlockedForMessage(t)),
          c = (0, h.e7)([B.Z], () => B.Z.isLoading(n.id)),
          d = (0, h.e7)([y.Z], () => y.Z.can(J.Plq.MANAGE_MESSAGES, n)),
          u = A.cC.useSetting(),
          m = null;
        if (r)
          m = (0, i.jsx)(p.Text, {
            className: $.blockedMessage,
            variant: "text-sm/medium",
            color: "text-muted",
            children: X.Z.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE,
          });
        else {
          let { contentPlaceholder: e, renderedContent: n } =
            null == t
              ? { contentPlaceholder: null, renderedContent: null }
              : (0, Z.f)(
                  t,
                  s,
                  r,
                  a()(
                    $.messageContent,
                    Q.inlineFormat,
                    Q.__invalid_smallFontSize,
                  ),
                  {
                    leadingIconClass: $.messageContentLeadingIcon,
                    trailingIconClass: $.messageContentTrailingIcon,
                    iconSize: q.WW,
                  },
                );
          m =
            null != n
              ? (0, i.jsx)(p.Text, {
                  variant: "text-sm/semibold",
                  color: l ? "header-secondary" : "text-muted",
                  children: n,
                })
              : o
                ? null
                : (0, i.jsx)(p.Text, {
                    tag: "span",
                    variant: "text-sm/medium",
                    color: l ? "header-secondary" : "text-muted",
                    className: $.messageContent,
                    children:
                      null == t
                        ? c
                          ? null
                          : X.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
                        : e,
                  });
        }
        return (0, i.jsxs)(E.a.Provider, {
          value: (0, S.Z)(u, d),
          children: [
            !r &&
              (0, i.jsx)(G.Z, {
                channel: n,
                message: t,
                renderColon: null != m,
                hasUnreads: l,
              }),
            (0, i.jsx)(p.FocusBlock, {
              className: $.messageFocusBlock,
              children: m,
            }),
          ],
        });
      });
      function eo(e) {
        let { channel: t, facepileRef: n, firstMessage: s } = e,
          o = (0, D.Q)(t),
          a =
            (null == s ? void 0 : s.reactions) != null &&
            s.reactions.length > 0;
        return (0, i.jsxs)("div", {
          className: $.footer,
          children: [
            a || null == s
              ? null
              : (0, i.jsx)(el, { firstMessage: s, channel: t }),
            null == s ? null : (0, i.jsx)(er, { firstMessage: s, channel: t }),
            (0, i.jsx)(ea, { channel: t, iconSize: 14 }),
            (0, i.jsx)("span", { className: $.bullet, children: "•" }),
            o.length > 0
              ? (0, i.jsxs)("div", {
                  className: $.typing,
                  children: [
                    (0, i.jsx)(ed, { channel: t, userIds: o, facepileRef: n }),
                    (0, i.jsx)("div", {
                      className: $.dots,
                      children: (0, i.jsx)(p.Dots, {
                        themed: !0,
                        dotRadius: 2,
                      }),
                    }),
                    (0, i.jsx)(f.Z, {
                      channel: t,
                      className: $.typingUsers,
                      renderDots: !1,
                    }),
                  ],
                })
              : (0, i.jsx)(ec, { channel: t }),
          ],
        });
      }
      function ea(e) {
        let { channel: t, iconSize: n, showReadState: s = !1 } = e,
          { messageCountText: o, unreadCount: l } = (0, D.nP)(t);
        return (0, i.jsxs)("div", {
          className: a()($.messageCountBox, { [$.hasRead]: s && null == l }),
          children: [
            (0, i.jsx)("span", {
              className: $.messageCountIcon,
              children: (0, i.jsx)(p.ChatIcon, {
                size: "custom",
                color: "currentColor",
                width: n,
                height: n,
              }),
            }),
            "number" == typeof o
              ? (0, i.jsx)(v.Z, {
                  value: o,
                  digitWidth: 9,
                  className: $.messageCountText,
                })
              : (0, i.jsx)("div", {
                  className: $.messageCountText,
                  children: o,
                }),
            null == l
              ? null
              : (0, i.jsxs)(p.Text, {
                  className: $.newMessageCount,
                  variant: "text-sm/semibold",
                  color: "text-brand",
                  children: [
                    "(",
                    X.Z.Messages.FORUM_POST_MESSAGE_COUNT_SHORT.format({
                      count: l,
                    }),
                    ")",
                  ],
                }),
          ],
        });
      }
      function el(e) {
        let { firstMessage: t, channel: n } = e,
          s = (0, h.e7)([M.Z], () => M.Z.getChannel(n.parent_id)),
          o = (0, D.Bs)(s),
          {
            disableReactionCreates: a,
            isLurking: l,
            isPendingMember: r,
          } = (0, x.Z)(n);
        return null == o || a
          ? null
          : (0, i.jsx)(O.le, {
              className: $.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: l,
              isPendingMember: r,
              emoji: o,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: C.O.NORMAL,
              emojiSize: "reaction",
            });
      }
      function er(e) {
        var t;
        let { firstMessage: n, channel: s } = e,
          o = (0, D.IN)(n),
          {
            disableReactionUpdates: a,
            isLurking: l,
            isPendingMember: r,
          } = (0, x.Z)(s);
        return null == o
          ? null
          : (0, i.jsx)(
              O.le,
              {
                className: $.updateReactionButton,
                message: n,
                readOnly: a || s.isArchivedLockedThread(),
                isLurking: l,
                isPendingMember: r,
                useChatFontScaling: !1,
                type: o.burst_count >= o.count ? C.O.BURST : C.O.NORMAL,
                emojiSize: "reaction",
                ...o,
              },
              ""
                .concat(null !== (t = o.emoji.id) && void 0 !== t ? t : 0, ":")
                .concat(o.emoji.name),
            );
      }
      function ec(e) {
        var t;
        let { channel: n } = e,
          { sortOrder: s } = (0, w.H)(n.parent_id),
          o = (0, D.xw)(n, s),
          a =
            null === (t = n.threadMetadata) || void 0 === t
              ? void 0
              : t.createTimestamp,
          l =
            null == a
              ? null
              : X.Z.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                  timestamp: (0, U.vc)(d()(a), "LLLL"),
                });
        return (0, i.jsx)(p.Tooltip, {
          text: l,
          tooltipClassName: $.timestampTooltip,
          children: (e) =>
            (0, i.jsx)(p.Text, {
              className: $.__invalid_activityText,
              variant: "text-sm/normal",
              color: "header-secondary",
              ...e,
              children: o,
            }),
        });
      }
      function ed(e) {
        let { channel: t, userIds: n, facepileRef: s } = e,
          o = (0, D.iM)(t, n);
        return (0, i.jsx)("div", {
          ref: s,
          children: (0, i.jsx)(T.Z, {
            className: $.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: o,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
          }),
        });
      }
      function eu(e) {
        let t,
          n,
          { channel: s, firstMedia: o } = e,
          l = (0, h.e7)([P.Z], () => P.Z.isFocused()),
          r = (0, b.d$)(o.src),
          c = A.QK.useSetting(),
          [d, u] = (0, I.hL)({ media: o, channel: s }),
          m = (0, I.MC)(u),
          { src: f, width: g, height: _, alt: T } = o;
        return (
          _ > g ? (n = et) : (t = ee),
          (0, i.jsx)(p.FocusBlock, {
            enabled: !0,
            children: (0, i.jsxs)("div", {
              className: $.bodyMedia,
              onClick: (e) => e.stopPropagation(),
              children: [
                f.startsWith("data:")
                  ? (0, i.jsx)(p.Image, {
                      src: f,
                      maxHeight: t,
                      maxWidth: n,
                      width: g,
                      height: _,
                      alt: null != T && d ? m : T,
                      className: $.thumbnailContainer,
                      imageClassName: a()({
                        [$.obscured]: d,
                        [$.thumbnailOverride]: !0,
                      }),
                    })
                  : (0, N.Yi)({
                      src: f,
                      maxHeight: t,
                      maxWidth: n,
                      width: g,
                      height: _,
                      alt: null != T && d ? m : T,
                      autoPlay: c,
                      animated: r && !d && l,
                      containerClassName: $.thumbnailContainer,
                      imageClassName: a()({ [$.obscured]: d }),
                      renderForwardComponent: J.VqG,
                    }),
                d &&
                  (0, i.jsx)(V.Z, {
                    iconClassname: $.obscuredTag,
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
          return g;
        },
        NU: function () {
          return _;
        },
        oL: function () {
          return p;
        },
        xH: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(652874),
        s = n(781402),
        o = n(731965),
        a = n(430742),
        l = n(752305),
        r = n(592125),
        c = n(703558),
        d = n(883429),
        u = n(228392);
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
      class m {
        constructor(e, t, n) {
          var i, s, m;
          h(this, "channelId", void 0),
            h(this, "_set", void 0),
            h(this, "get", void 0),
            h(this, "editorHeight", void 0),
            h(this, "editorAdditionRowHeight", void 0),
            h(this, "listViewCardHeights", void 0),
            h(this, "cardHeightVersion", void 0),
            h(this, "nameError", void 0),
            h(this, "messageError", void 0),
            h(this, "appliedTags", void 0),
            h(this, "popoutOpen", void 0),
            h(this, "guidelinesOpen", void 0),
            h(this, "previewing", void 0),
            h(this, "onboardingExpanded", void 0),
            h(this, "submitting", void 0),
            h(this, "formOpen", void 0),
            h(this, "name", void 0),
            h(this, "textAreaState", void 0),
            h(this, "hasClickedForm", void 0),
            h(this, "titleFocused", void 0),
            h(this, "bodyFocused", void 0),
            h(this, "set", void 0),
            h(this, "setEditorHeight", void 0),
            h(this, "setEditorAdditionRowHeight", void 0),
            h(this, "setCardHeight", void 0),
            h(this, "setNameError", void 0),
            h(this, "setMessageError", void 0),
            h(this, "toggleAppliedTag", void 0),
            h(this, "setPopoutOpen", void 0),
            h(this, "setGuidelinesOpen", void 0),
            h(this, "setPreviewing", void 0),
            h(this, "setSubmitting", void 0),
            h(this, "setFormOpen", void 0),
            h(this, "setOnboardingExpanded", void 0),
            h(this, "setTitleFocused", void 0),
            h(this, "setBodyFocused", void 0),
            h(this, "setName", void 0),
            h(this, "setTextAreaState", void 0),
            h(this, "setHasClickedForm", void 0),
            h(this, "resetFormState", void 0),
            h(this, "setFormOpenFromUserAction", void 0),
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
            (this.textAreaState = (0, l.eK)("")),
            (this.hasClickedForm = !1),
            (this.titleFocused = !1),
            (this.bodyFocused = !1),
            (this.set = (e) => {
              (0, o.j)(() => this._set(e));
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
                a.Z.changeThreadSettings(this.channelId, { appliedTags: t });
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
              this.set({ formOpen: e }), d.Z.clearForumSearch(this.channelId);
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
                a.Z.changeThreadSettings(this.channelId, { name: e });
            }),
            (this.setTextAreaState = (e) => {
              this.set({ textAreaState: e }),
                a.Z.saveDraft(
                  this.channelId,
                  e.textValue,
                  c.d.FirstThreadMessage,
                );
            }),
            (this.setHasClickedForm = (e) => {
              this.set({ hasClickedForm: e });
            }),
            (this.resetFormState = () => {
              let e = r.Z.getChannel(this.channelId),
                t =
                  null == e ? "" : null == e.template ? "" : e.template.trim();
              this.set({
                name: "",
                textAreaState: (0, l.eK)(t),
                appliedTags: new Set(),
                hasClickedForm: !1,
              }),
                d.Z.clearForumSearch(this.channelId);
            }),
            (this.setFormOpenFromUserAction = () => {
              if (this.hasClickedForm) return;
              let e = r.Z.getChannel(this.channelId);
              null != e &&
                (0, u.HR)({ guildId: e.guild_id, channelId: this.channelId }),
                this.set({ hasClickedForm: !0, formOpen: !0 }),
                d.Z.clearForumSearch(this.channelId);
            });
          let p = r.Z.getChannel(e);
          if (null == p) return;
          let f =
              null !== (i = c.Z.getThreadSettings(p.id)) && void 0 !== i
                ? i
                : {},
            g = null == p.template ? "" : p.template.trim(),
            _ = c.Z.getDraft(p.id, c.d.FirstThreadMessage),
            T = (0, l.eK)(null != _ && "" !== _.trim() ? _ : g);
          (this.name = null !== (s = f.name) && void 0 !== s ? s : ""),
            (m = new Set(f.appliedTags)),
            (this.appliedTags = void 0 !== m ? m : new Set()),
            (this.formOpen = this.name.length > 0),
            (this.textAreaState = T);
        }
      }
      let { Provider: p, useStore: f, useStoreApi: g } = (0, s.Z)();
      function _(e) {
        return (0, i.Z)((t, n) => new m(e.id, t, n));
      }
    },
    196255: function (e, t, n) {
      var i = n(735250);
      n(470079);
      var s = n(120356),
        o = n.n(s),
        a = n(481060),
        l = n(942951),
        r = n(456269),
        c = n(689938),
        d = n(921428);
      t.Z = (e) => {
        var t, n;
        let { message: s, channel: u, renderColon: h, hasUnreads: m } = e,
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
          _ = (0, l.l)({
            user: null == s ? void 0 : s.author,
            channelId: u.id,
            guildId: u.guild_id,
            messageId: null == s ? void 0 : s.id,
            stopPropagation: !0,
            ariaLabel: c.Z.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format({
              name: g,
            }),
          })(null != f ? f : void 0)(
            (0, i.jsx)(i.Fragment, { children: g }),
            u.id,
          );
        return (0, i.jsxs)(a.Text, {
          tag: "span",
          className: o()(d.author, { [d.hasUnreads]: m }),
          variant: "text-sm/semibold",
          children: [_, !0 === h ? ": " : null],
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
      var i = n(735250);
      n(470079);
      var s = n(120356),
        o = n.n(s),
        a = n(692547),
        l = n(481060),
        r = n(109434),
        c = n(456269),
        d = n(479099),
        u = n(176505),
        h = n(689938),
        m = n(646230),
        p = n(198864);
      function f(e) {
        let { channel: t, isNew: n } = e,
          i = (0, c.eV)(t),
          s = i.slice(void 0, 3),
          o = i.slice(3),
          a = i.length > 3 ? i.length - 3 : 0,
          l = t.hasFlag(u.zZ.PINNED),
          r = s.length > 0 || l || n;
        return {
          shownTags: s,
          remainingTags: o,
          moreTagsCount: a,
          isPinned: l,
          shouldRenderTagsRow: r,
          forumPostContainsTags: i.length > 0,
        };
      }
      function g(e) {
        let { channel: t, isNew: n, tagsClassName: s, className: c } = e,
          {
            shownTags: u,
            remainingTags: g,
            moreTagsCount: _,
            isPinned: T,
            shouldRenderTagsRow: v,
          } = f({ channel: t, isNew: n }),
          { tagFilter: E } = (0, r.H)(t.id);
        return v
          ? (0, i.jsxs)("div", {
              className: o()(p.tags, c),
              children: [
                n
                  ? (0, i.jsx)(l.TextBadge, {
                      className: o()(m.newBadge, m.inTagsRow),
                      color: a.Z.unsafe_rawColors.BRAND_260.css,
                      text: h.Z.Messages.NEW,
                    })
                  : null,
                T &&
                  (0, i.jsx)("div", {
                    className: p.pinIcon,
                    children: (0, i.jsx)(l.Tooltip, {
                      text: h.Z.Messages.PINNED_POST,
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
                      className: o()(s, { [p.tagFiltered]: E.has(e.id) }),
                    },
                    e.id,
                  ),
                ),
                _ > 0
                  ? (0, i.jsx)(d.f, {
                      tags: g,
                      count: _,
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
      var i = n(470079);
      t.Z = (e) => {
        let [t, n] = i.useState(!1),
          s = i.useCallback(
            (t) => {
              e(t), n(!0);
            },
            [e, n],
          );
        return {
          isFocused: t,
          handleFocus: s,
          handleBlur: () => {
            n(!1);
          },
        };
      };
    },
    627896: function (e, t, n) {
      n.d(t, {
        x: function () {
          return s;
        },
      }),
        n(47120);
      var i = n(470079);
      function s(e, t, n) {
        let s = i.useRef(null),
          [o, a] = i.useState(!1),
          l = i.useCallback(() => {
            if (e && null !== s.current) {
              var n;
              a(
                (null === (n = s.current) || void 0 === n
                  ? void 0
                  : n.offsetHeight) >
                  2.5 * t,
              );
            }
          }, [a, e, t]);
        return (
          i.useLayoutEffect(() => {
            l();
          }, [l, e, n]),
          { postTitleRef: s, isNewBadgeOverflow: o }
        );
      }
    },
    883728: function (e, t, n) {
      var i = n(735250);
      n(470079);
      var s = n(374470),
        o = n(239091);
      t.Z = (e) => {
        let { facepileRef: t, goToThread: a, channel: l } = e;
        return {
          handleLeftClick: (e) => {
            var n;
            !(
              (0, s.k)(e.target) &&
              (null === (n = t.current) || void 0 === n
                ? void 0
                : n.contains(e.target))
            ) && a(l, e.shiftKey);
          },
          handleRightClick: (e) =>
            (0, o.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("39285"),
                n.e("48800"),
                n.e("94612"),
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
        s,
        o = n(735250),
        a = n(470079),
        l = n(442837),
        r = n(481060),
        c = n(749210),
        d = n(313201),
        u = n(823379),
        h = n(41776),
        m = n(981631),
        p = n(689938),
        f = n(583694);
      ((s = i || (i = {}))[(s.CHAT = 0)] = "CHAT"),
        (s[(s.REACTIONS = 1)] = "REACTIONS");
      t.Z = (e) => {
        let { type: t, guild: i, closePopout: s, ctaRef: g } = e,
          _ = (0, d.Dt)(),
          [T, v] = a.useState(!1),
          E = (0, l.e7)([h.Z], () => h.Z.isLurking(i.id), [i.id]);
        a.useEffect(() => {
          T && !E && s();
        }, [T, E, s]);
        let b = null,
          I = p.Z.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
        switch (t) {
          case 0:
            b = p.Z.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
            break;
          case 1:
            b = p.Z.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
            break;
          default:
            return (0, u.vE)(t);
        }
        if (null == b) return null;
        let C = async () => {
          v(!0);
          try {
            await c.Z.joinGuild(i.id, { source: m.vtS.CHAT_INPUT_BLOCKER }),
              s();
          } catch {
            v(!1);
          }
        };
        return (0, o.jsxs)(r.Dialog, {
          className: f.container,
          "aria-labelledby": _,
          children: [
            (0, o.jsx)("img", { alt: "", className: f.image, src: n(64395) }),
            (0, o.jsxs)("div", {
              className: f.content,
              children: [
                (0, o.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  id: _,
                  children: b,
                }),
                (0, o.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: I,
                }),
                (0, o.jsxs)("div", {
                  className: f.buttonContainer,
                  children: [
                    (0, o.jsx)(r.Button, {
                      buttonRef: g,
                      onClick: C,
                      submitting: T,
                      children: p.Z.Messages.LURKER_MODE_POPOUT_JOIN,
                    }),
                    (0, o.jsx)(r.Button, {
                      onClick: s,
                      look: r.Button.Looks.BLANK,
                      className: f.cancel,
                      children: p.Z.Messages.LURKER_MODE_POPOUT_CANCEL,
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
        s,
        o,
        a,
        l,
        r,
        c = n(442837),
        d = n(570140);
      ((o = i || (i = {})).HOVER = "HOVER"),
        (o.EXTERNAL = "EXTERNAL"),
        (o.RANDOM = "RANDOM");
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
          let s = Object.fromEntries(
            Object.entries(null !== (n = h[t]) && void 0 !== n ? n : {}).filter(
              (e) => {
                let [, t] = e;
                return t === i;
              },
            ),
          );
          if (Object.keys(s).length >= 5 && "EXTERNAL" === e) {
            for (let e in s)
              if (null == m[t] || null == m[t][e]) {
                delete h[t][e], delete s[e];
                break;
              }
          }
          return Object.keys(s).length;
        };
      class g extends (s = c.ZP.Store) {
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
          let s = p(t, n);
          return null === (i = h[e]) || void 0 === i ? void 0 : i[s];
        }
      }
      (r = "BurstReactionEffectsStore"),
        (l = "displayName") in (a = g)
          ? Object.defineProperty(a, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[l] = r),
        (t.Z = new g(d.Z, {
          BURST_REACTION_EFFECT_CLEAR: (e) => {
            var t;
            let { channelId: n, messageId: i, emoji: s } = e,
              o = p(i, s);
            null === (t = h[n]) || void 0 === t || delete t[o];
          },
          BURST_REACTION_EFFECT_PLAY: (e) => {
            var t, n, i;
            let { channelId: s, messageId: o, emoji: a, key: l } = e,
              r = p(o, a);
            if (f(l, s) >= 5) return;
            let c = null !== (t = h[s]) && void 0 !== t ? t : {},
              d = (null !== (n = m[s]) && void 0 !== n ? n : {})[r],
              u = c[r];
            if ("HOVER" !== l || null == u) {
              "HOVER" === u &&
                "EXTERNAL" === l &&
                null != d &&
                ("function" == typeof d.destroy && d.destroy(),
                null === (i = m[s]) || void 0 === i || delete i[r],
                (u = void 0));
              null == u && (null != h[s] ? (h[s][r] = l) : (h[s] = { [r]: l }));
            }
          },
          BURST_REACTION_ANIMATION_ADD: (e) => {
            let { channelId: t, messageId: n, emoji: i, animation: s } = e,
              o = p(n, i);
            null == m[t] && (m[t] = {}), (m[t][o] = s);
          },
          BURST_REACTION_PICKER_ANIMATION_ADD: (e) => {
            let {
              messageId: t,
              emojiName: n,
              emojiId: i,
              startPosition: s,
            } = e;
            u[
              ""
                .concat(t, ":")
                .concat(n, ":")
                .concat(null != i ? i : "")
            ] = s;
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
          return a;
        },
        vJ: function () {
          return l;
        },
      }),
        n(757143);
      var i,
        s = n(392711),
        o = n(302221);
      (i || (i = {})).OUT_OF_BURSTS = "out of burst reactions modal";
      let a = (e, t) => {
          let n = (0, o.WY)([t.r, t.g, t.b], 2);
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
        l = (0, s.memoize)((e) => {
          let t = 0;
          for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
          return Math.abs(t);
        });
    },
    831244: function (e, t, n) {
      n.d(t, {
        T: function () {
          return o;
        },
      });
      var i = n(347904);
      let s = [
          { load: () => n.e("59642").then(n.t.bind(n, 759983, 19)) },
          { load: () => n.e("54931").then(n.t.bind(n, 488583, 19)) },
          { load: () => n.e("22523").then(n.t.bind(n, 420183, 19)) },
          { load: () => n.e("35247").then(n.t.bind(n, 782543, 19)) },
          { load: () => n.e("69923").then(n.t.bind(n, 945561, 19)) },
          { load: () => n.e("96246").then(n.t.bind(n, 108035, 19)) },
          { load: () => n.e("30997").then(n.t.bind(n, 299665, 19)) },
          { load: () => n.e("50987").then(n.t.bind(n, 545755, 19)) },
          { load: () => n.e("14192").then(n.t.bind(n, 57568, 19)) },
          { load: () => n.e("78073").then(n.t.bind(n, 82134, 19)) },
          { load: () => n.e("54021").then(n.t.bind(n, 913837, 19)) },
          { load: () => n.e("7573").then(n.t.bind(n, 403249, 19)) },
          { load: () => n.e("219").then(n.t.bind(n, 36302, 19)) },
          { load: () => n.e("70528").then(n.t.bind(n, 181976, 19)) },
          { load: () => n.e("74294").then(n.t.bind(n, 654947, 19)) },
          { load: () => n.e("91199").then(n.t.bind(n, 945518, 19)) },
          { load: () => n.e("66071").then(n.t.bind(n, 634794, 19)) },
          { load: () => n.e("73921").then(n.t.bind(n, 558619, 19)) },
        ],
        o = async function (e, t, n) {
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let o = s[(0, i.vJ)("".concat(e).concat(t).concat(n)) % s.length];
          return await o.load();
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
            canAddNewReactions: s,
            isLurking: o,
            isGuest: a,
            communicationDisabled: l,
            isActiveChannelOrUnarchivableThread: r,
            isAutomodQuarantined: c,
          } = e,
          d = t.isPrivate(),
          u = t.isSystemDM(),
          h = (n || d) && r;
        return {
          disableReactionReads: !i,
          disableReactionCreates: o || a || !h || !((!0 === s || d) && !u && r),
          disableReactionUpdates: o || a || !h || !0 === l || !0 === c,
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
        s = n(715903),
        o = n(71619),
        a = n(41776),
        l = n(665906),
        r = n(271383),
        c = n(607744),
        d = n(496675),
        u = n(432376),
        h = n(981631);
      function m(e) {
        let t = null == e ? void 0 : e.guild_id,
          n = (0, i.e7)([c.Z], () => null == t || c.Z.canChatInGuild(t), [t]),
          m = (0, i.e7)([a.Z], () => null != t && a.Z.isLurking(t), [t]),
          p = (0, i.e7)([r.ZP], () => null != t && r.ZP.isCurrentUserGuest(t), [
            t,
          ]),
          f = (0, i.e7)([d.Z], () => n && d.Z.can(h.Plq.ADD_REACTIONS, e), [
            n,
            e,
          ]),
          g = (0, s.ux)(t),
          [, _] = (0, o.AB)(t),
          T = (0, l.$R)(e);
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
                communicationDisabled: _,
                isActiveChannelOrUnarchivableThread: T,
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
        s = n.n(i),
        o = n(995774),
        a = n(592125),
        l = n(542578),
        r = n(699516),
        c = n(5192),
        d = n(566006),
        u = n(689938);
      function h(e, t) {
        var n;
        let i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : d.O.NORMAL,
          h = arguments.length > 3 ? arguments[3] : void 0,
          m = l.Z.getReactions(e.getChannelId(), e.id, t, 3, i),
          p = a.Z.getChannel(e.getChannelId()),
          f = null == p || p.isPrivate() ? null : p.getGuildId(),
          g = e.getReaction(t),
          _ = i === d.O.BURST,
          T = s()(m)
            .reject((e) => r.Z.isBlocked(e.id))
            .take(3)
            .map((e) => c.ZP.getName(f, null == p ? void 0 : p.id, e))
            .value();
        if (0 === T.length) return "";
        let v = {
            standard: {
              reactionTooltip1NInteractive:
                u.Z.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
              reactionTooltip1N: u.Z.Messages.REACTION_TOOLTIP_1_N,
              reactionTooltip1: u.Z.Messages.REACTION_TOOLTIP_1,
              reactionTooltip2NInteractive:
                u.Z.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
              reactionTooltip2N: u.Z.Messages.REACTION_TOOLTIP_2_N,
              reactionTooltip2: u.Z.Messages.REACTION_TOOLTIP_2,
              reactionTooltip3NInteractive:
                u.Z.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
              reactionTooltip3N: u.Z.Messages.REACTION_TOOLTIP_3_N,
              reactionTooltip3: u.Z.Messages.REACTION_TOOLTIP_3,
              reactionTooltipNInteractive:
                u.Z.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
              reactionTooltipN: u.Z.Messages.REACTION_TOOLTIP_N,
            },
            burst: {
              reactionTooltip1NInteractive:
                u.Z.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
              reactionTooltip1N: u.Z.Messages.BURST_REACTION_TOOLTIP_1_N,
              reactionTooltip1: u.Z.Messages.BURST_REACTION_TOOLTIP_1,
              reactionTooltip2NInteractive:
                u.Z.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
              reactionTooltip2N: u.Z.Messages.BURST_REACTION_TOOLTIP_2_N,
              reactionTooltip2: u.Z.Messages.BURST_REACTION_TOOLTIP_2,
              reactionTooltip3NInteractive:
                u.Z.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
              reactionTooltip3N: u.Z.Messages.BURST_REACTION_TOOLTIP_3_N,
              reactionTooltip3: u.Z.Messages.BURST_REACTION_TOOLTIP_3,
              reactionTooltipNInteractive:
                u.Z.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
              reactionTooltipN: u.Z.Messages.BURST_REACTION_TOOLTIP_N,
            },
          },
          E = _ ? v.burst : v.standard,
          b = Math.max(
            0,
            (null !==
              (n = _
                ? null == g
                  ? void 0
                  : g.burst_count
                : null == g
                  ? void 0
                  : g.count) && void 0 !== n
              ? n
              : 0) - T.length,
          ),
          I = (0, o.Lh)(t);
        if (1 === T.length)
          return b > 0
            ? null != h
              ? E.reactionTooltip1NInteractive.format({
                  a: T[0],
                  n: b,
                  emojiName: I,
                  onClick: h,
                })
              : E.reactionTooltip1N.format({ a: T[0], n: b, emojiName: I })
            : E.reactionTooltip1.format({ a: T[0], emojiName: I });
        if (2 === T.length)
          return b > 0
            ? null != h
              ? E.reactionTooltip2NInteractive.format({
                  a: T[0],
                  b: T[1],
                  n: b,
                  emojiName: I,
                  onClick: h,
                })
              : E.reactionTooltip2N.format({
                  a: T[0],
                  b: T[1],
                  n: b,
                  emojiName: I,
                })
            : E.reactionTooltip2.format({ a: T[0], b: T[1], emojiName: I });
        if (3 === T.length)
          return b > 0
            ? null != h
              ? E.reactionTooltip3NInteractive.format({
                  a: T[0],
                  b: T[1],
                  c: T[2],
                  n: b,
                  emojiName: I,
                  onClick: h,
                })
              : E.reactionTooltip3N.format({
                  a: T[0],
                  b: T[1],
                  c: T[2],
                  n: b,
                  emojiName: I,
                })
            : E.reactionTooltip3.format({
                a: T[0],
                b: T[1],
                c: T[2],
                emojiName: I,
              });
        else
          return null != h
            ? E.reactionTooltipNInteractive.format({
                n: b,
                emojiName: I,
                onClick: h,
              })
            : E.reactionTooltipN.format({ n: b, emojiName: I });
      }
    },
    287151: function (e, t, n) {
      n.d(t, {
        aO: function () {
          return ei;
        },
        le: function () {
          return el;
        },
        op: function () {
          return es;
        },
        y4: function () {
          return eo;
        },
      }),
        n(47120);
      var i,
        s = n(735250),
        o = n(470079),
        a = n(120356),
        l = n.n(a),
        r = n(772848),
        c = n(748780),
        d = n(866442),
        u = n(442837),
        h = n(846519),
        m = n(481060),
        p = n(596454),
        f = n(785388),
        g = n(607070),
        _ = n(446489),
        T = n(367907),
        v = n(436774),
        E = n(98474),
        b = n(339085),
        I = n(906411),
        C = n(56314),
        S = n(231053),
        R = n(944386),
        x = n(305325),
        N = n(33154),
        O = n(692147),
        Z = n(197115),
        A = n(659215),
        j = n(222677),
        M = n(995774),
        y = n(695346),
        L = n(592125),
        P = n(430824),
        U = n(542578),
        w = n(914010),
        D = n(594174),
        k = n(451478),
        B = n(626135),
        F = n(74538),
        V = n(960020),
        H = n(566006),
        G = n(886132),
        W = n(183023),
        z = n(524444),
        K = n(89729),
        Y = n(640753),
        J = n(981631),
        q = n(474936),
        X = n(689938),
        $ = n(507444),
        Q = n(96042),
        ee = n(968661),
        et = n(564793);
      function en(e, t, n) {
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
      let ei = 9;
      function es(e, t, n) {
        (0, m.openModal)((e) =>
          (0, s.jsx)(f.default, { ...e, message: t, selectedReaction: n }),
        );
      }
      function eo(e, t, n) {
        return (n === H.O.BURST && t) || (n === H.O.NORMAL && e);
      }
      class ea extends (i = o.PureComponent) {
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
          k.Z.isFocused()
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
              colors: o,
              isBurstReaction: a,
              hideCount: r,
              emoji: u,
              readOnly: h,
              isLurking: f,
              isGuest: g,
              isPendingMember: T,
              className: v,
              useChatFontScaling: b,
              message: I,
              hideEmoji: C,
              animationStartPosition: S,
            } = this.props,
            {
              shouldShowTooltip: R,
              tooltipTextAria: x,
              reactionRef: N,
              tooltipPositionKey: Z,
            } = this.state,
            A = b ? ee : Q,
            j = { transform: [{ scale: this.scale }], opacity: this.opacity },
            y = a ? i : n;
          if (a && null != o) {
            var L;
            let { accentColor: n, backgroundColor: i, opacity: s } = o,
              a =
                null !== (L = (0, d.wK)(null != i ? i : "", s)) && void 0 !== L
                  ? L
                  : "";
            this.isMe() && (j.borderColor = i),
              (j.background = a),
              (e = n),
              (t = n);
          }
          let P = null == N ? void 0 : N.getBoundingClientRect(),
            U = null != S && null != P,
            w = null == S;
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(m.Popout, {
              shouldShow: R,
              "aria-label": null != x && x,
              renderPopout: this.renderTooltip,
              nudgeAlignIntoViewport: !0,
              position: "top",
              align: "center",
              positionKey: Z,
              children: () =>
                (0, s.jsx)("div", {
                  onMouseEnter: this.handleEnter,
                  onMouseLeave: this.handleLeave,
                  ref: this.handleSetReactionRef,
                  children: (0, s.jsx)(c.Z.div, {
                    className: l()(A.reaction, v, {
                      [A.reactionMe]: this.isMe(),
                      [A.reactionReadOnly]: h && !f && !T && !g,
                      [A.shakeReaction]: C && null == S,
                    }),
                    style: j,
                    children: (0, s.jsx)(m.Popout, {
                      renderPopout: this.renderLurkerModeUpsellPopout,
                      position: "top",
                      children: (n) =>
                        (0, s.jsxs)(m.Clickable, {
                          ...n,
                          className: A.reactionInner,
                          onClick: this.handleClick,
                          "aria-disabled": h,
                          "aria-label": (0, M.iD)(this.isMe(), y, u, a),
                          "aria-pressed": this.isMe(),
                          children: [
                            (0, s.jsx)("div", {
                              className: l()({ [A.burstGlow]: a }),
                              style: { boxShadow: "0 0 16px ".concat(t) },
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                a
                                  ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        U &&
                                          (0, s.jsx)(E.Z, {
                                            messageId: I.id,
                                            emoji: u,
                                            startPosition: S,
                                            targetPosition: P,
                                          }),
                                        w &&
                                          (0, s.jsx)(Y.Z, {
                                            count: i,
                                            emoji: u,
                                            channelId: I.getChannelId(),
                                            messageId: I.id,
                                            useChatFontScaling: b,
                                            color: t,
                                          }),
                                      ],
                                    })
                                  : null,
                                (0, s.jsx)(p.Z, {
                                  className: l()({ [A.hideEmoji]: C }),
                                  emojiId: u.id,
                                  emojiName: u.name,
                                  size: "reaction",
                                  animated: u.animated,
                                }),
                              ],
                            }),
                            r
                              ? null
                              : (0, s.jsx)(_.Z, {
                                  className: A.reactionCount,
                                  value: y,
                                  color: e,
                                  digitWidth: ei,
                                }),
                            (0, s.jsx)(O.Z, { count: y, reactionRef: N }),
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
            en(this, "isReactionEventActive", !1),
            en(this, "isKeyboardNavigation", !1),
            en(this, "scale", new c.Z.Value(1)),
            en(this, "opacity", new c.Z.Value(1)),
            en(this, "timeout", new h.V7()),
            en(this, "hideTimeout", new h.V7()),
            en(this, "ctaRef", o.createRef()),
            en(this, "type", H.O.NORMAL),
            en(this, "colors", {
              backgroundColor: void 0,
              borderColor: void 0,
              textColor: void 0,
            }),
            en(this, "state", {
              shouldShowTooltip: !1,
              tooltipText: null,
              tooltipTextAria: null,
              reactionRef: null,
              tooltipPositionKey: void 0,
            }),
            en(this, "hasShownTooltip", !1),
            en(this, "nonce", (0, r.Z)()),
            en(this, "userCanBurstReact", () => this.props.userHasPremium),
            en(this, "handleClick", (e) => {
              e.stopPropagation();
              let {
                  message: t,
                  emoji: n,
                  readOnly: i,
                  isBurstReaction: s,
                  isPendingMember: o,
                  isLurking: a,
                  isGuest: l,
                  isForumToolbar: r,
                } = this.props,
                c = L.Z.getChannel(t.getChannelId());
              if (a || l) {
                var d, u;
                null === (u = this.ctaRef) ||
                  void 0 === u ||
                  null === (d = u.current) ||
                  void 0 === d ||
                  d.focus();
                return;
              }
              let h = t.getChannelId(),
                m = r ? j.TW.FORUM_TOOLBAR : j.TW.MESSAGE_INLINE_BUTTON;
              if (s && !this.userCanBurstReact()) {
                (0, A.openBurstReactionsUpsellModal)({
                  analytics: {
                    type: q.cd.BURST_REACTION_UPSELL,
                    page:
                      (null == c ? void 0 : c.getGuildId()) != null
                        ? J.ZY5.GUILD_CHANNEL
                        : J.ZY5.DM_CHANNEL,
                    section: null != c ? (0, M.s4)(c) : void 0,
                    object: J.qAy.EMOJI_REACTION_UPSELL,
                  },
                });
                return;
              }
              o
                ? this.handleShowVerificationGate()
                : !i &&
                  (this.isMe()
                    ? (0, j.WO)({
                        channelId: h,
                        messageId: t.id,
                        emoji: n,
                        location: m,
                        options: { burst: s },
                      })
                    : (0, j.rU)(h, t.id, n, m, { burst: s }));
            }),
            en(this, "handleEnter", (e) => {
              let {
                  emoji: t,
                  message: n,
                  type: i,
                  reduceMotion: s,
                  animateEmoji: o,
                  autoUnfurlReactionTooltip: a,
                } = this.props,
                l = i === H.O.BURST;
              l &&
                !this.isReactionEventActive &&
                !s &&
                o &&
                (0, j.T6)({
                  channelId: n.getChannelId(),
                  messageId: n.id,
                  emoji: t,
                  key: V.I.HOVER,
                }),
                (this.isReactionEventActive = !0),
                (this.isKeyboardNavigation = "focus" === e.type),
                this.timeout.start(
                  l ? 750 : a ? 200 : 500,
                  this.showTooltip,
                  !1,
                );
            }),
            en(this, "handleEnterTooltip", () => {
              (this.isReactionEventActive = !0), this.handleShowTooltip();
            }),
            en(this, "handleShowTooltip", () => {
              this.hideTimeout.stop(),
                this.isReactionEventActive &&
                  (this.updateTooltipText(),
                  U.Z.addChangeListener(this.updateTooltipText));
            }),
            en(this, "showTooltip", () => {
              !this.props.readOnly &&
                (this.handleShowTooltip(),
                this.isReactionEventActive && this.trackReactionTooltipViewed(),
                (this.hasShownTooltip = !0));
            }),
            en(this, "handleLeave", () => {
              (this.isReactionEventActive = !1),
                (this.isKeyboardNavigation = !1),
                this.timeout.stop(),
                U.Z.removeChangeListener(this.updateTooltipText),
                this.hideTimeout.start(200, this.hideTooltip, !1);
            }),
            en(this, "hideTooltip", () => {
              this.setState({ shouldShowTooltip: !1 }),
                this.hasShownTooltip &&
                  B.default.track(J.rMx.CLOSE_POPOUT, { nonce: this.nonce });
            }),
            en(this, "isMe", () => {
              let { me: e, me_burst: t, type: n } = this.props;
              return eo(e, t, n);
            }),
            en(this, "updateTooltipText", () => {
              let { message: e, emoji: t, type: n } = this.props,
                i = (0, K.g)(e, t, n),
                s = this.isKeyboardNavigation ? i : (0, K.g)(e, t, n, J.dG4);
              this.setState({
                tooltipText: s,
                tooltipTextAria: i,
                shouldShowTooltip: null != s && "" !== s,
              });
            }),
            en(this, "renderLurkerModeUpsellPopout", (e) => {
              let { closePopout: t } = e,
                { message: n, isLurking: i } = this.props,
                o = L.Z.getChannel(n.getChannelId()),
                a = P.Z.getGuild(null == o ? void 0 : o.getGuildId());
              return i && null != a
                ? (0, s.jsx)(N.Z, {
                    ctaRef: this.ctaRef,
                    type: N.s.REACTIONS,
                    guild: a,
                    closePopout: t,
                  })
                : (0, s.jsx)(s.Fragment, {});
            }),
            en(this, "renderEmojiDetails", () => {
              let e = this.props.emoji;
              return (
                null != e.id &&
                (0, s.jsx)(ec, {
                  emojiId: e.id,
                  refreshPositionKey: this.refreshTooltipPositionKey,
                  onClose: this.handleLeave,
                  nonce: this.nonce,
                })
              );
            }),
            en(this, "renderTooltip", () => {
              let {
                  emoji: e,
                  message: t,
                  type: n,
                  me_burst: i,
                  isBurstReaction: o = !1,
                } = this.props,
                { tooltipText: a } = this.state,
                r = (n) => {
                  let i = L.Z.getChannel(t.getChannelId());
                  if (null != i)
                    this.handleLeave(),
                      es(i, t, {
                        emoji: e,
                        reactionType: o ? H.O.BURST : H.O.NORMAL,
                      });
                },
                c = "string" == typeof a ? "" === a.trim() : null == a,
                d = () =>
                  c || null == a
                    ? null
                    : (0, s.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        className: et.reactionTooltipText,
                        "aria-label": a,
                        children: a,
                      });
              return n === H.O.BURST
                ? (0, s.jsxs)("div", {
                    className: et.reactionTooltip,
                    onMouseEnter: this.handleEnterTooltip,
                    onMouseLeave: this.handleLeave,
                    children: [
                      (0, s.jsx)(m.Clickable, {
                        className: et.burstReactionTooltipInner,
                        onClick: r,
                        children: (0, s.jsxs)("div", {
                          className: et.burstReactionTooltipMessage,
                          children: [
                            (0, s.jsx)(p.Z, {
                              className: et.reactionTooltipEmoji,
                              emojiId: e.id,
                              emojiName: e.name,
                              animated: e.animated,
                              size: this.props.emojiSize,
                            }),
                            d(),
                          ],
                        }),
                      }),
                      (() => {
                        let e = D.default.getCurrentUser();
                        if (i)
                          return (0, s.jsxs)("div", {
                            className: l()(
                              et.burstReactionTooltipPrompt,
                              et.burstReactionTooltipSpacer,
                            ),
                            children: [
                              (0, F.I5)(e) &&
                                (0, s.jsx)(m.NitroWheelIcon, {
                                  size: "md",
                                  className: et.burstReactionTooltipNitroIcon,
                                  color: v.JX.PREMIUM_TIER_2,
                                }),
                              (0, s.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                className: et.reactionTooltipText,
                                "aria-label": "super reaction tooltip cta",
                                children:
                                  X.Z.Messages
                                    .SUPER_REACTION_TOOLTIP_CTA_REACTED,
                              }),
                            ],
                          });
                        if (this.userCanBurstReact())
                          return (0, s.jsxs)("div", {
                            className: l()(
                              et.burstReactionTooltipPrompt,
                              et.burstReactionTooltipSpacer,
                              et.burstReactionTooltipPromptClickable,
                            ),
                            children: [
                              (0, s.jsx)(m.NitroWheelIcon, {
                                size: "md",
                                className: et.burstReactionTooltipNitroIcon,
                                color: v.JX.PREMIUM_TIER_2,
                              }),
                              (0, s.jsx)(m.Clickable, {
                                onClick: this.handleClick,
                                children: (0, s.jsx)(m.Text, {
                                  variant: "text-sm/normal",
                                  className: et.reactionTooltipText,
                                  "aria-label": "super reaction tooltip cta",
                                  children:
                                    X.Z.Messages.SUPER_REACTION_TOOLTIP_CTA,
                                }),
                              }),
                            ],
                          });
                        if (
                          !this.userCanBurstReact() &&
                          !this.isKeyboardNavigation
                        )
                          return (0, s.jsx)("div", {
                            className: l()(
                              et.burstReactionTooltipPrompt,
                              et.burstReactionTooltipSpacer,
                            ),
                            children: (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)(m.Text, {
                                  variant: "text-sm/normal",
                                  "aria-label": "super reaction tooltip upsell",
                                  children:
                                    X.Z.Messages.SUPER_REACTION_TOOLTIP_UPSELL,
                                }),
                                (0, s.jsx)(Z.Z, {
                                  subscriptionTier: q.Si.TIER_2,
                                  buttonText:
                                    X.Z.Messages
                                      .USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                  className: et.burstReactionTooltipUpsellCta,
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
                : (0, s.jsxs)("div", {
                    className: et.reactionTooltip,
                    onMouseEnter: this.handleEnterTooltip,
                    onMouseLeave: this.handleLeave,
                    children: [
                      (0, s.jsx)(m.Clickable, {
                        onClick: r,
                        children: (0, s.jsxs)("div", {
                          className: et.reactionTooltipInner,
                          children: [
                            (0, s.jsx)(p.Z, {
                              className: et.reactionTooltipEmoji,
                              emojiId: e.id,
                              emojiName: e.name,
                              animated: e.animated,
                              size: this.props.emojiSize,
                            }),
                            d(),
                          ],
                        }),
                      }),
                      this.renderEmojiDetails(),
                    ],
                  });
            }),
            en(this, "refreshTooltipPositionKey", () => {
              this.setState({ tooltipPositionKey: String(Date.now()) });
            }),
            en(this, "handleShowVerificationGate", () => {
              let { message: e, isPendingMember: t } = this.props;
              if (!t) return null;
              let n = L.Z.getChannel(e.getChannelId()),
                i = P.Z.getGuild(null == n ? void 0 : n.getGuildId());
              null != i && (0, x.hk)(i.id);
            }),
            en(this, "handleSetReactionRef", (e) => {
              this.setState({ reactionRef: e });
            }),
            en(this, "trackReactionTooltipViewed", () => {
              let { emoji: e, message: t, type: n } = this.props,
                i = D.default.getCurrentUser(),
                s = L.Z.getChannel(t.getChannelId()),
                o = n === H.O.BURST,
                a = (0, F.I5)(i),
                l = o
                  ? q.cd.EMOJI_IN_BURST_REACTION_HOVER
                  : q.cd.EMOJI_IN_REACTION_HOVER;
              o &&
                !this.userCanBurstReact() &&
                !a &&
                (l = q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
                T.ZP.trackWithMetadata(J.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                  type: l,
                  expression_id: e.id,
                  expression_name: e.name,
                  is_animated: e.animated,
                  is_custom: null != e.id,
                  nonce: this.nonce,
                }),
                o &&
                  null != s &&
                  !a &&
                  !this.userCanBurstReact() &&
                  B.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: q.cd.BURST_REACTION_UPSELL,
                    location: {
                      page:
                        (null == s ? void 0 : s.getGuildId()) != null
                          ? J.ZY5.GUILD_CHANNEL
                          : J.ZY5.DM_CHANNEL,
                      section: (0, M.s4)(s),
                      object: J.qAy.EMOJI_REACTION_TOOLTIP_UPSELL,
                    },
                  });
            });
        }
      }
      en(ea, "defaultProps", { emojiSize: "jumbo" });
      let el = o.memo((e) => {
          let { type: t, burst_colors: n, message: i, emoji: o } = e,
            a = t === H.O.BURST,
            l = (0, C.v)(a && null != n ? n : []),
            r = (0, u.e7)(
              [V.Z],
              () =>
                void 0 !== V.Z.getEffectForEmojiId(i.getChannelId(), i.id, o),
            ),
            c = (0, u.e7)([g.Z], () => g.Z.useReducedMotion),
            d = y.Yk.useSetting(),
            h = D.default.getCurrentUser(),
            m = (0, F.I5)(h),
            p = (0, u.e7)([V.Z], () =>
              V.Z.getReactionPickerAnimation(i.id, o.name, o.id),
            ),
            f = a && (r || null != p);
          return (0, s.jsx)(ea, {
            ...e,
            colors: l,
            isBurstReaction: a,
            hideEmoji: f,
            userHasPremium: m,
            reduceMotion: c,
            animateEmoji: d,
            animationStartPosition: p,
          });
        }),
        er = (e) => {
          var t, n, i;
          let {
            emojiId: o,
            expressionSourceGuild: a,
            hasJoinedExpressionSourceGuild: l,
            onClose: r,
            popoutData: c,
            currentGuildId: d,
            nonce: u,
          } = e;
          (0, R.u)({
            emojiId: o,
            currentGuildId: d,
            popoutData: c,
            emojiSourceGuildId: null == a ? void 0 : a.id,
            nonce: u,
          });
          let h =
              null !== (n = null == a ? void 0 : a.isDiscoverable()) &&
              void 0 !== n &&
              n,
            p = null != a && h,
            f =
              (null !==
                (i =
                  null == a
                    ? void 0
                    : null === (t = a.emojis) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== i
                ? i
                : 0) > 1;
          return (0, s.jsx)(s.Fragment, {
            children: p
              ? null == a
                ? null
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("div", {
                        className: $.reactionEmojiDetailsUnfurlGuildDetails,
                        children: (0, s.jsx)(W.Oe, {
                          expressionSourceGuild: a,
                          hasJoinedExpressionSourceGuild: l,
                          isDisplayingJoinGuildButtonInPopout:
                            c.type === G.$.JOIN_GUILD,
                        }),
                      }),
                      f &&
                        (0, s.jsx)(W.n_, {
                          emojiId: o,
                          expressionSourceGuild: a,
                          hasJoinedEmojiSourceGuild: l,
                          onClose: r,
                          popoutData: c,
                          isDisplayingButtonInTopSection: !1,
                        }),
                    ],
                  })
              : (0, s.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  "aria-label": c.type,
                  children: c.emojiDescription,
                }),
          });
        },
        ec = (e) => {
          var t;
          let { emojiId: n, refreshPositionKey: i, onClose: a, nonce: r } = e,
            { joinedEmojiSourceGuild: c } = (0, u.cj)([b.ZP, P.Z], () => {
              let e = b.ZP.getCustomEmojiById(n);
              return {
                joinedEmojiSourceGuild:
                  (null == e ? void 0 : e.type) === I.B.GUILD
                    ? P.Z.getGuild(null == e ? void 0 : e.guildId)
                    : void 0,
              };
            }),
            [d, h] = o.useState(void 0),
            [p, f] = o.useState(void 0),
            [g, _] = o.useState(null),
            [T, v] = o.useState(!1),
            [E, C] = o.useState(!1),
            [R, x] = o.useState(!1),
            N = null != c,
            O =
              null !== (t = null == d ? void 0 : d.isDiscoverable()) &&
              void 0 !== t &&
              t,
            Z = w.Z.getGuildId(),
            A =
              null != Z &&
              (Z === (null == d ? void 0 : d.id) ||
                Z === (null == c ? void 0 : c.id)),
            j = D.default.getCurrentUser(),
            M = (0, G.a)({
              sourceType: g,
              expressionSourceApplication: null != p ? p : null,
              isPremium: F.ZP.isPremium(j),
              hasJoinedEmojiSourceGuild: N,
              isDiscoverable: O,
              emojiComesFromCurrentGuild: A,
              isUnusableRoleSubscriptionEmoji: !1,
              userIsRoleSubscriber: !1,
              isRoleSubscriptionEmoji: !1,
              shouldHideRoleSubscriptionCTA: !1,
            });
          o.useEffect(() => {
            if (!!T && !R)
              (async () => {
                i(), C(!0);
                let e = null != n ? await (0, S.Fi)(n) : null;
                if (null != e)
                  switch ((_(e.type), e.type)) {
                    case S.w6.APPLICATION:
                      f(e.application);
                      break;
                    case S.w6.GUILD:
                      h(e.guild);
                  }
                else h(null);
                C(!1), x(!0), i();
              })();
          }, [n, T, R, i]);
          if (N) return null;
          let y = () => {
              v(!T);
            },
            L = T && (void 0 !== d || void 0 !== p);
          return (0, s.jsxs)("div", {
            children: [
              L
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("div", {
                        className: $.reactionEmojiDetailsDivider,
                      }),
                      null != M.emojiDescription &&
                        M.type !== G.$.UNAVAILABLE &&
                        (0, s.jsx)(m.Text, {
                          variant: "text-sm/normal",
                          "aria-label": M.type,
                          children: M.emojiDescription,
                        }),
                    ],
                  })
                : (() => {
                    let e = X.Z.Messages.INVENTORY_EMOJI_DETAILS_V2;
                    return (0, s.jsxs)(m.Clickable, {
                      onClick: y,
                      className: $.reactionEmojiDetailsClickable,
                      children: [
                        (0, s.jsx)(m.Text, {
                          variant: "text-sm/normal",
                          color: "none",
                          "aria-label": e,
                          children: e,
                        }),
                        (0, s.jsx)(m.ChevronSmallDownIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: l()($.reactionEmojiDetailsArrow, {
                            [$.reactionEmojiDetailsArrowCollapsed]: !T,
                          }),
                        }),
                      ],
                    });
                  })(),
              E
                ? (0, s.jsx)(z.SE, { className: $.emojiDetailsLoader })
                : L &&
                  (0, s.jsx)(er, {
                    emojiId: n,
                    expressionSourceGuild: d,
                    hasJoinedExpressionSourceGuild: N,
                    onClose: a,
                    popoutData: M,
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
          return s;
        },
        Z: function () {
          return T;
        },
      });
      var i,
        s,
        o = n(735250),
        a = n(470079),
        l = n(120356),
        r = n.n(l),
        c = n(500923),
        d = n.n(c),
        u = n(570140),
        h = n(960020),
        m = n(831244),
        p = n(815605),
        f = n(981631),
        g = n(153190);
      ((i = s || (s = {}))[(i.NORMAL = 16)] = "NORMAL"),
        (i[(i.LARGE = 32)] = "LARGE");
      let _ = async (e) => {
        var t;
        let { effect: n } = e,
          i = await (0, m.T)(
            n.channelId,
            null !== (t = n.messageId) && void 0 !== t ? t : f.lds,
            n.emoji.name,
          ),
          s = await (0, p.aB)(
            ""
              .concat(n.channelId, ":")
              .concat(n.messageId, ":")
              .concat(n.emoji.name),
            n.url,
            i,
            n.color,
          );
        return (s.assets[0].p = n.url), s;
      };
      function T(e) {
        let { className: t, effect: n, onComplete: i, emojiSize: s = 16 } = e,
          l = a.useRef(null),
          c = s * p.Vz,
          m = (c + s) / 2;
        return (
          a.useEffect(() => {
            let e;
            if (null != n)
              return (
                !(async function () {
                  if (null != l.current) {
                    let t = await _({ effect: n });
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
          }, [i, n, s]),
          (0, o.jsx)("div", {
            className: g.effectsWrapper,
            children: (0, o.jsx)("div", {
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
      var i = n(735250),
        s = n(470079),
        o = n(442837),
        a = n(570140),
        l = n(607070),
        r = n(222677),
        c = n(695346),
        d = n(960020),
        u = n(347904),
        h = n(620652),
        m = n(815605),
        p = n(37741),
        f = n(403969);
      t.Z = s.memo(function (e) {
        let {
            channelId: t,
            messageId: n,
            emoji: g,
            useChatFontScaling: _,
            color: T,
            count: v,
          } = e,
          E = (0, o.e7)([d.Z], () => d.Z.getEffectForEmojiId(t, n, g)),
          b = _ ? f : p,
          I = s.useMemo(
            () => (0, m.Zn)(g, T, t, { key: E, messageId: n }),
            [T, E, g, t, n],
          ),
          [C, S] = s.useState(!1),
          R = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
          x = c.Yk.useSetting(),
          N = s.useCallback(() => {
            a.Z.dispatch({
              type: "BURST_REACTION_EFFECT_CLEAR",
              channelId: t,
              messageId: n,
              emoji: g,
            });
          }, [g, t, n]);
        return (s.useEffect(() => {
          let e = () => {
            if (C) return;
            let e =
              (0, u.vJ)(
                "".concat(Date.now()).concat(t).concat(n).concat(g.name),
              ) % 10;
            (e += v > 4 ? 4 : v - 1) > 7 &&
              (S(!0),
              (0, r.T6)({
                channelId: t,
                messageId: n,
                emoji: g,
                key: d.I.RANDOM,
              }));
          };
          if (C || (R && !x) || !x) return;
          e();
          let i = setInterval(e, 5e3);
          return () => {
            clearInterval(i);
          };
        }, [x, t, v, g, g.name, C, n, R]),
        null == E)
          ? null
          : (0, i.jsx)(h.Z, { className: b.effect, effect: I, onComplete: N });
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
        s = n(772848),
        o = n(134432),
        a = n(963838),
        l = n(302221),
        r = n(347904);
      let c = 7.5,
        d = (0, i.memoize)(
          (e, t, n, i) =>
            new Promise((e) => {
              let s = new Image();
              (s.src = t),
                (s.crossOrigin = "Anonymous"),
                (s.onload = () => {
                  let t = 32 * (0, o.x_)(),
                    a = JSON.stringify(n);
                  if (
                    (null != i && (a = (0, r.s4)(a, (0, l.oo)(i))),
                    (s.width === t && s.height === t) ||
                      (0 === s.width && 0 === s.height))
                  )
                    e(JSON.parse(a));
                  else {
                    let t = (128 / s.width) * s.height;
                    e(
                      JSON.parse(
                        (a = (a = a.replace(
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
        let { emojiSize: o, key: l, messageId: r } = null != i ? i : {},
          c = (0, a._r)(e, null != o ? 2 * o : void 0);
        return {
          channelId: n,
          messageId: r,
          emoji: e,
          animationId: (0, s.Z)(),
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
      var i = n(735250),
        s = n(470079),
        o = n(481060),
        a = n(100527),
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
            ariaLabel: _,
          } = e,
          { analyticsLocations: T } = (0, l.ZP)(a.Z.USERNAME);
        let v =
          ((t = h),
          (n = m),
          s.useCallback(
            (e) => {
              let i = d.Z.getChannel(n);
              null != i && null != t && (0, u.Pv)(e, t, i);
            },
            [t, n],
          ));
        return s.useCallback(
          (e) => (t, n) => {
            let s = (n) =>
                (0, i.jsx)(o.NameWithRoleAnchor, {
                  ...(null != n ? n : {}),
                  onContextMenu: v,
                  name: t,
                  color: null == e ? void 0 : e.colorString,
                  roleName: null == e ? void 0 : e.colorRoleName,
                  "aria-label": _,
                }),
              a = (e) => (t) => {
                g && t.stopPropagation(), e(t);
              };
            return (0, i.jsx)(
              l.Gt,
              {
                value: T,
                children:
                  null != h
                    ? (0, i.jsx)(o.Popout, {
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
                          return s({ onClick: a(t), ...n });
                        },
                      })
                    : s(void 0),
              },
              n,
            );
          },
          [T, h, m, p, f, v, g, _],
        );
      }
    },
    989830: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(442837),
        s = n(314897),
        o = n(351780),
        a = n(843693);
      function l(e, t) {
        return (
          e === t ||
          ((null == e ? void 0 : e.channelId) ===
            (null == t ? void 0 : t.channelId) &&
            (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) &&
            (null == e ? void 0 : e.multiplier) ===
              (null == t ? void 0 : t.multiplier) &&
            !0)
        );
      }
      function r(e) {
        let t = (0, i.e7)([o.Z], () => !!o.Z.isEnabled() && o.Z.combosEnabled);
        return (0, i.e7)(
          [a.ZP, s.default],
          () => (t ? a.ZP.getUserCombo(s.default.getId(), e) : void 0),
          [e, t],
          l,
        );
      }
    },
    692147: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(735250),
        s = n(470079),
        o = n(392711),
        a = n(399606),
        l = n(351780),
        r = n(576125),
        c = n(465858),
        d = n(112843),
        u = n(524484);
      function h(e) {
        let { reactionRef: t, count: n } = e,
          i = s.useRef(n),
          r = (0, a.e7)([l.Z], () => l.Z.getState()),
          u = (0, d.Z)(),
          h = (0, c.Z)(t);
        return (
          s.useEffect(() => {
            if (n > i.current && null != h) {
              let e = (0, o.clamp)(n, r.confettiCount / 2, 2 * r.confettiCount);
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
    246642: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(735250);
      n(470079);
      var s = n(481060),
        o = n(44315),
        a = n(641033),
        l = n(989830),
        r = n(689938),
        c = n(80195);
      function d(e) {
        let { channelId: t } = e,
          n = (0, l.Z)(t);
        if (
          !(
            null != n &&
            (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1)
          )
        )
          return null;
        let { multiplier: d } = n,
          { color: u } = (0, a.yz)(d);
        return (0, i.jsxs)("div", {
          className: c.container,
          children: [
            (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: r.Z.Messages.POGGERMODE_COMBO_BAR,
            }),
            (0, i.jsx)(s.Progress, {
              foregroundColor: (0, o.Lq)(u),
              className: c.progress,
              size: s.Progress.Sizes.LARGE,
              percent: 100 * (0, a.nc)(n),
              animate: !0,
            }),
          ],
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
      var i = n(735250);
      n(470079);
      var s = n(481060),
        o = n(230711),
        a = n(104494),
        l = n(639119),
        r = n(790527),
        c = n(474936),
        d = n(981631),
        u = n(689938),
        h = n(104724),
        m = n(784370);
      function p(e) {
        var t, n;
        let { onClose: s, analyticsSource: p, ...f } = e,
          g = u.Z.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
            onClick: () => {
              o.Z.open(d.oAB.PREMIUM), s();
            },
          }),
          _ = (0, l.N)(),
          T = (0, a.Ng)(),
          v = null != _ || null != T;
        return (0, i.jsx)(r.Z, {
          artURL: m,
          artContainerClassName: h.artContainer,
          modalClassName: h.modalContainer,
          bodyClassName: h.bodyContainer,
          type: c.cd.BURST_REACTION_UPSELL,
          title: u.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE,
          body: g,
          glowUp: g,
          analyticsSource: p,
          analyticsLocation: {
            page: d.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
            object: d.qAy.BUTTON_CTA,
          },
          onClose: s,
          subscribeButtonText: v ? void 0 : u.Z.Messages.PREMIUM_SETTINGS_GET,
          subscriptionTier:
            null !==
              (n =
                null == _
                  ? void 0
                  : null === (t = _.subscription_trial) || void 0 === t
                    ? void 0
                    : t.sku_id) && void 0 !== n
              ? n
              : c.Si.TIER_2,
          backButtonText: u.Z.Messages.NO_THANKS,
          ...f,
        });
      }
      function f(e) {
        let { analytics: t } = e;
        (0, s.openModalLazy)(async () => {
          let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
          return (n) => (0, i.jsx)(e, { analyticsSource: t, ...n });
        });
      }
    },
    921227: function (e, t, n) {
      var i,
        s = n(442837),
        o = n(570140);
      function a(e, t, n) {
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
      let l = {};
      class r extends (i = s.ZP.PersistedStore) {
        initialize(e) {
          Object.assign(l, e);
        }
        getState() {
          return l;
        }
        shouldShowEducation(e) {
          return !0 !== l[e];
        }
      }
      a(r, "displayName", "ActivityInviteEducationStore"),
        a(r, "persistKey", "ActivityInviteEducationExperimentStore"),
        (t.Z = new r(o.Z, {
          ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
            return (l[e.key] = e.value), !0;
          },
        }));
    },
    443236: function (e, t, n) {
      e.exports = {
        text: "text_d7ebeb",
        ellipsis: "ellipsis_d7ebeb",
        typingDots: "typingDots_d7ebeb",
        cooldownWrapper: "cooldownWrapper_d7ebeb",
        slowModeIcon: "slowModeIcon_d7ebeb",
        typing: "typing_d7ebeb base_d7ebeb",
        isComboing: "isComboing_d7ebeb",
        activityInviteEducation: "activityInviteEducation_d7ebeb base_d7ebeb",
        activityInviteEducationFadeIn: "activityInviteEducationFadeIn_d7ebeb",
        activityInviteEducationArrow: "activityInviteEducationArrow_d7ebeb",
      };
    },
    211985: function (e, t, n) {
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
    867494: function (e, t, n) {
      e.exports = {
        emojiContainer: "emojiContainer_ffd153",
        emoji: "emoji_ffd153",
      };
    },
    638384: function (e, t, n) {
      e.exports = { obscuredIcon: "obscuredIcon_a62ee5" };
    },
    646230: function (e, t, n) {
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
    921428: function (e, t, n) {
      e.exports = { author: "author_c2ac9c", hasUnreads: "hasUnreads_c2ac9c" };
    },
    198864: function (e, t, n) {
      e.exports = {
        tags: "tags_f451cd",
        pinIcon: "pinIcon_f451cd",
        tagFiltered: "tagFiltered_f451cd",
      };
    },
    583694: function (e, t, n) {
      e.exports = {
        container: "container_a9480d",
        content: "content_a9480d",
        buttonContainer: "buttonContainer_a9480d",
        cancel: "cancel_a9480d",
        image: "image_a9480d",
      };
    },
    96042: function (e, t, n) {
      n.r(
        (e.exports = {
          reactions: "reactions_f61c73",
          icon: "icon_f61c73",
          reactionBtn: "reactionBtn_f61c73",
          active: "active_f61c73",
          visible: "visible_f61c73",
          forceShow: "forceShow_f61c73",
          forceShowLook: "forceShowLook_f61c73",
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
    968661: function (e, t, n) {
      n.r(
        (e.exports = {
          reactions: "reactions_ec6b19",
          icon: "icon_ec6b19",
          reactionBtn: "reactionBtn_ec6b19",
          active: "active_ec6b19",
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
    564793: function (e, t, n) {
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
    153190: function (e, t, n) {
      e.exports = {
        effect: "effect_e5651",
        effectsWrapper: "effectsWrapper_e5651",
      };
    },
    37741: function (e, t, n) {
      n.r((e.exports = { effect: "effect_de8d64", effects: "effects_de8d64" }));
    },
    403969: function (e, t, n) {
      n.r((e.exports = { effect: "effect_bdca47", effects: "effects_bdca47" }));
    },
    80195: function (e, t, n) {
      e.exports = {
        container: "container_b80cb2",
        progress: "progress_b80cb2",
      };
    },
    104724: function (e, t, n) {
      e.exports = {
        artContainer: "artContainer_db3cf5",
        modalContainer: "modalContainer_db3cf5",
        bodyContainer: "bodyContainer_db3cf5",
      };
    },
  },
]);
//# sourceMappingURL=001b0f495befce89f010.js.map
