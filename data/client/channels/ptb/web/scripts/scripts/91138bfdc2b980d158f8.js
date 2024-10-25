"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39429"],
  {
    966390: function (e, t, n) {
      n(47120), n(789020);
      var a = n(481060),
        r = n(570140),
        s = n(430742),
        i = n(904245),
        o = n(166459),
        l = n(531643),
        c = n(881052),
        d = n(673750),
        u = n(141795),
        _ = n(476326),
        E = n(680287),
        m = n(163268),
        I = n(539573),
        p = n(786761),
        A = n(3148),
        g = n(48854),
        T = n(785359),
        f = n(79390),
        N = n(623292),
        O = n(807092),
        R = n(467798),
        h = n(703558),
        P = n(117530),
        C = n(630388),
        L = n(226351),
        M = n(981631),
        x = n(689938);
      async function S(e) {
        var t, n, a;
        let u,
          {
            channelId: _,
            uploads: S,
            draftType: v,
            parsedMessage: G,
            options: Z = {},
            raiseEndpointErrors: b = !1,
          } = e,
          j = new E.Z(M.ANM.MESSAGES(_)),
          D = new L.o(),
          y = {
            content: "",
            nonce: "",
            channel_id: _,
            type: M.uaV.DEFAULT,
            sticker_ids: null == Z ? void 0 : Z.stickerIds,
            poll: null == Z ? void 0 : Z.poll,
          };
        null != G && (y.content = null == G ? void 0 : G.content),
          null != O.Z.getPendingReply(_) &&
            ((y.type = M.uaV.REPLY),
            (y.message_reference = Z.messageReference),
            (y.allowed_mentions = Z.allowedMentions),
            (0, N.A6)(_));
        let [w, U] = (0, R.Z)(y.content);
        w &&
          ((y.content = U),
          (y.flags = (0, C.pj)(
            null !== (t = y.flags) && void 0 !== t ? t : 0,
            M.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let k = null !== (n = Z.nonce) && void 0 !== n ? n : (0, g.r)(),
          H = (0, A.ZP)({
            channelId: _,
            content: y.content,
            tts: null !== (a = null == G ? void 0 : G.tts) && void 0 !== a && a,
            type: y.type,
            messageReference: y.message_reference,
            flags: y.flags,
            nonce: k,
            poll: (0, f.x9)(Z.poll),
          });
        return (
          ((y.nonce = k),
          j.on("start", (e) => {
            (u = (0, p.e5)({ ...H, id: e.id })),
              r.Z.dispatch({
                type: "UPLOAD_START",
                channelId: _,
                file: e,
                message: u,
                uploader: j,
              });
          }),
          j.on("progress", (e) => {
            r.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: _, file: e });
          })),
          j.on("error", (e, t, n, a) => {
            if (
              (r.Z.dispatch({
                type: "UPLOAD_FAIL",
                channelId: _,
                file: e,
                messageRecord: u,
              }),
              (0, T.x)({
                fileItems: e.items,
                failureCode: t,
                errorMessage: null == a ? void 0 : a.msg,
              }),
              t === M.evJ.EXPLICIT_CONTENT)
            ) {
              i.Z.sendExplicitMediaClydeError(
                _,
                null == n ? void 0 : n.attachments,
                m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (t === M.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: t, message: null == n ? void 0 : n.message },
                a =
                  null == u
                    ? null
                    : { type: d.$V.SEND, message: { ...u, channelId: _ } };
              (0, l.openUploadError)({
                title: x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: (0, I.uF)(a, e),
              });
              return;
            }
            if (t !== M.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (b)
                D.reject(new c.Hx({ status: t, body: null != n ? n : {} }, t));
              else {
                var E;
                (0, l.openUploadError)({
                  title: x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                  help:
                    null !== (E = null == n ? void 0 : n.message) &&
                    void 0 !== E
                      ? E
                      : x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP,
                });
              }
              "" !== y.content &&
                "" === h.Z.getDraft(_, v) &&
                s.Z.saveDraft(_, y.content, v),
                0 === P.Z.getUploadCount(_, v) &&
                  o.Z.setUploads({ channelId: _, uploads: S, draftType: v });
            }
          }),
          j.on("complete", (e, t) => {
            r.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: _,
              file: e,
              aborted: j._aborted,
              messageRecord: t,
            });
          }),
          await j.uploadFiles(S, y),
          D.resolve(),
          D.promise
        );
      }
      t.Z = {
        instantBatchUpload: function (e) {
          let {
              channelId: t,
              files: n,
              draftType: a,
              isThumbnail: r = !1,
              filesMetadata: s = [],
            } = e,
            i = Array.from(n).map((e, n) => {
              let a = null != s ? s[n] : {};
              return new u.n(
                { file: e, platform: _.ow.WEB, isThumbnail: r, ...a },
                t,
              );
            });
          S({ channelId: t, uploads: i, draftType: a });
        },
        upload: function e(t) {
          let {
              channelId: n,
              file: o,
              draftType: c,
              message: d,
              hasSpoiler: u,
              filename: _,
            } = t,
            I = { content: "", tts: !1, hasSpoiler: u, filename: _ };
          if (null != d) {
            (I.content = d.content),
              (I.tts = d.tts),
              (I.channel_id = d.channel_id);
            let e = O.Z.getPendingReply(n);
            if (null != e) {
              let t = i.Z.getSendMessageOptionsForReply(e);
              (I.type = M.uaV.REPLY),
                (I.message_reference = t.messageReference),
                (I.allowed_mentions = t.allowedMentions),
                (0, N.A6)(n);
            }
          }
          let p = new E.Z(M.ANM.MESSAGES(n));
          p.on("start", (e) => {
            r.Z.dispatch({
              type: "UPLOAD_START",
              channelId: n,
              file: e,
              uploader: p,
            });
          }),
            p.on("progress", (e) => {
              r.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: n, file: e });
            }),
            p.on("error", (t, u, _) => {
              if (
                (r.Z.dispatch({ type: "UPLOAD_FAIL", channelId: n, file: t }),
                (0, T.x)({ fileItems: t.items, failureCode: u }),
                u === M.evJ.EXPLICIT_CONTENT)
              ) {
                i.Z.sendExplicitMediaClydeError(
                  n,
                  null == _ ? void 0 : _.attachments,
                  m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, l.openUploadError)({
                title: x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                  onClick: () => {
                    (0, a.closeModal)(l.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: n, file: o, draftType: c, message: d });
                  },
                }),
              }),
                "" !== I.content &&
                  "" === h.Z.getDraft(n, c) &&
                  s.Z.saveDraft(n, I.content, c);
            }),
            p.on("complete", (e) => {
              r.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: n, file: e });
            }),
            p.upload(o, I);
        },
        uploadFiles: S,
        cancel(e) {
          r.Z.dispatch({ type: "UPLOAD_CANCEL_REQUEST", file: e }),
            null != e.draftContent &&
              null != e.channelId &&
              "" === h.Z.getDraft(e.channelId, h.d.ChannelMessage) &&
              r.Z.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: h.d.ChannelMessage,
              });
        },
      };
    },
    560361: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(192379);
      function r(e) {
        let t = a.useRef();
        (t.current = e),
          a.useEffect(
            () => () => {
              var e;
              return null === (e = t.current) || void 0 === e
                ? void 0
                : e.call(t);
            },
            [],
          );
      }
    },
    680287: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(653041);
      var a = n(544891),
        r = n(881052),
        s = n(687294),
        i = n(476326),
        o = n(861990),
        l = n(689938);
      class c extends s.Z {
        async uploadFiles(e, t) {
          let { addFilesTo: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super.upload({ name: l.Z.Messages.ATTACHMENT_PROCESSING }, t, e);
          let a = new AbortController();
          try {
            if (((this.files = e), this._aborted)) return;
            if (
              (this._handleStart(() => a.abort()),
              !(await this.compressAndCheckFileSize()))
            )
              return;
            this.setUploadingTextForUI(),
              await (0, s.$)(
                this.files,
                !0,
                this._recomputeProgress.bind(this),
              );
          } catch (e) {
            this._handleException(e);
          }
          try {
            return await this._createMessage(a.signal, t, n);
          } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
          }
        }
        async _createMessage(e, t, n) {
          let s;
          let l = [];
          this.files.forEach((e, t) => {
            let n = (0, o.B)(e, t);
            e.item.platform === i.ow.WEB && l.push({ ...n });
          }),
            (s =
              null != n && null != t
                ? this._addAttachmentsToPayload(t, n, l)
                : { ...t, attachments: l });
          let c = { url: this._url, body: s, signal: e },
            d = "POST" === this._method ? a.tn.post : a.tn.patch;
          try {
            let e = await d(c);
            return this._handleComplete(e.body), e.body;
          } catch (e) {
            var u;
            if (this._raiseEndpointErrors) throw new r.Hx(e);
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
    256139: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(200651),
        r = n(120356),
        s = n.n(r),
        i = n(481060),
        o = n(615934);
      function l(e) {
        let { className: t, onClick: n, ...r } = e,
          l = (0, a.jsx)(i.Clickable, {
            ...r,
            className: s()(null != n && o.clickable, t),
            onClick: n,
          });
        return null == n ? (0, a.jsx)(i.BlockInteractions, { children: l }) : l;
      }
    },
    91907: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(200651),
        r = n(192379),
        s = n(793030),
        i = n(256139),
        o = n(866040);
      function l(e) {
        let {
            user: t,
            text: n,
            channel: l,
            textClassName: c,
            onPopoutClosed: d,
          } = e,
          u = (0, r.useMemo)(() => [t], [t]);
        return (0, a.jsx)(o.Z, {
          participants: u,
          channel: l,
          onPopoutClosed: d,
          children: (e) =>
            (0, a.jsx)(i.Z, {
              ...e,
              tag: "span",
              children: (0, a.jsx)(s.xv, {
                className: c,
                variant: "text-sm/semibold",
                color: "text-primary",
                lineClamp: 1,
                scaleFontToUserSetting: !0,
                children: n,
              }),
            }),
        });
      }
    },
    866040: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(411104);
      var a = n(200651),
        r = n(192379),
        s = n(442837),
        i = n(481060),
        o = n(239091),
        l = n(751688),
        c = n(184301),
        d = n(347475),
        u = n(210887),
        _ = n(5192),
        E = n(684201);
      function m(e) {
        let { participants: t, channel: r } = e;
        return (0, a.jsx)(i.Scroller, {
          className: E.popout,
          children: t.map((e) =>
            (0, a.jsx)(
              l.Z,
              {
                guildId: null == r ? void 0 : r.guild_id,
                user: e,
                nick: _.ZP.getNickname(
                  null == r ? void 0 : r.guild_id,
                  null == r ? void 0 : r.id,
                  e,
                ),
                onContextMenu: (t) => {
                  (0, o.jW)(t, async () => {
                    let { default: t } = await Promise.all([
                      n.e("79695"),
                      n.e("69220"),
                      n.e("50261"),
                    ]).then(n.bind(n, 881351));
                    return (n) => (0, a.jsx)(t, { ...n, user: e });
                  });
                },
              },
              e.id,
            ),
          ),
        });
      }
      function I(e) {
        let { children: t, participants: n, channel: o, onPopoutClosed: l } = e,
          _ = (0, s.e7)([u.Z], () => u.Z.theme),
          E = 1 === n.length ? n[0] : null,
          I = (0, r.useCallback)(
            (e) => {
              if (null != E)
                return (0, a.jsx)(d.Z, {
                  ...e,
                  closePopout: () => {
                    e.closePopout(), null == l || l();
                  },
                  userId: E.id,
                  guildId: null == o ? void 0 : o.guild_id,
                  channelId: null == o ? void 0 : o.id,
                });
              if (null != n)
                return (0, a.jsx)(m, { participants: n, channel: o });
              throw Error("One of participant or participants is required");
            },
            [o, l, n, E],
          );
        return (0, a.jsx)(i.ThemeContextProvider, {
          theme: _,
          children: (0, a.jsx)(i.Popout, {
            renderPopout: I,
            preload: () =>
              null != E
                ? (0, c.Z)(E, {
                    guildId: null == o ? void 0 : o.guild_id,
                    channelId: null == o ? void 0 : o.id,
                  })
                : Promise.resolve(),
            children: t,
          }),
        });
      }
    },
    410441: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        s = n(832923);
      function i(e) {
        let { onClick: t, Icon: n, "aria-label": i } = e,
          o = (0, r.useToken)(
            r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          l = (0, a.jsx)(n, {
            color: o.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == t
          ? (0, a.jsx)("div", {
              className: s.container,
              "aria-label": i,
              children: l,
            })
          : (0, a.jsx)(r.Tooltip, {
              text: i,
              children: (e) =>
                (0, a.jsx)(r.Clickable, {
                  className: s.container,
                  ...e,
                  onClick: t,
                  children: l,
                }),
            });
      }
    },
    998058: function (e, t, n) {
      n.d(t, {
        i: function () {
          return o;
        },
      });
      var a = n(544891),
        r = n(570140),
        s = n(881052),
        i = n(981631);
      let o = async (e) => {
        try {
          var t;
          let n = await a.tn.get({ url: i.ANM.SIMILAR_GAMES(e) }),
            s = (
              null !== (t = n.body.similar_games) && void 0 !== t ? t : []
            ).filter((t) => t !== e);
          r.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: s,
          });
        } catch (e) {
          throw new s.Hx(e);
        }
      };
    },
    839392: function (e, t, n) {
      var a,
        r,
        s,
        i,
        o = n(442837),
        l = n(570140);
      let c = {},
        d = {};
      class u extends (i = o.ZP.Store) {
        getSimilarGames(e) {
          return c[e];
        }
        getSimilarGamesError(e) {
          return d[e];
        }
      }
      (s = "GameProfileStore"),
        (r = "displayName") in (a = u)
          ? Object.defineProperty(a, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[r] = s),
        (t.Z = new u(l.Z, {
          GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: t, games: n } = e;
            c[t] = n;
          },
          GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
            let { applicationId: t, error: n } = e;
            d[t] = n;
          },
        }));
    },
    567409: function (e, t, n) {
      n.d(t, {
        Ns: function () {
          return I;
        },
      }),
        n(47120);
      var a = n(192379),
        r = n(392711),
        s = n.n(r),
        i = n(876215),
        o = n(442837),
        l = n(146282),
        c = n(26033),
        d = n(897674),
        u = n(709054),
        _ = n(206583);
      let E = new Set([i.s.PLAYED_GAME]),
        m = (e) => E.has(e.content_type);
      function I(e) {
        let { entries: t } = (function () {
          let e = (0, d.Z)(_.YN.GAME_PROFILE_FEED),
            t = (0, d.Z)(_.YN.GLOBAL_FEED),
            n = a.useMemo(
              () =>
                s()(t)
                  .unionBy(e, (e) => e.id)
                  .filter(m)
                  .orderBy((e) => u.default.extractTimestamp(e.id), "desc")
                  .uniqWith(
                    (e, t) =>
                      e.author_id === t.author_id &&
                      e.extra.application_id === t.extra.application_id,
                  )
                  .value(),
              [e, t],
            );
          return {
            requestId: (0, o.e7)([l.Z], () =>
              l.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED),
            ),
            entries: n,
          };
        })();
        return a.useMemo(
          () =>
            null == t
              ? void 0
              : t.filter((t) => (0, c.dX)(t) && t.extra.application_id === e),
          [t, e],
        );
      }
    },
    426482: function (e, t, n) {
      n.d(t, {
        C: function () {
          return _;
        },
        Z: function () {
          return a;
        },
      }),
        n(47120);
      var a,
        r,
        s = n(200651),
        i = n(192379),
        o = n(120356),
        l = n.n(o),
        c = n(793030),
        d = n(689938),
        u = n(522840);
      function _(e) {
        var t;
        let { game: n, application: a, size: r, className: o } = e,
          [_, E] = i.useState(!1),
          m =
            null !== (t = null == a ? void 0 : a.name) && void 0 !== t
              ? t
              : n.name,
          I = null != n.firstReleaseDate ? new Date(n.firstReleaseDate) : null;
        return null == n.coverImageUrl || _
          ? (0, s.jsxs)("div", {
              className: l()(u.fallback, o),
              children: [
                (0, s.jsx)("div", { className: u.spacer }),
                (0, s.jsx)(c.xv, {
                  variant: 1 === r ? "text-md/medium" : "text-xs/medium",
                  color: "always-white",
                  lineClamp: 1 === r ? 4 : 3,
                  children: m,
                }),
                (0, s.jsx)("div", { className: u.spacer }),
                (0, s.jsx)(c.xv, {
                  variant: 1 === r ? "text-sm/normal" : "text-xxs/normal",
                  color: "always-white",
                  children:
                    null != I
                      ? "(".concat(null == I ? void 0 : I.getFullYear(), ")")
                      : null,
                }),
              ],
            })
          : (0, s.jsx)("img", {
              className: o,
              src: n.coverImageUrl,
              alt: d.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: m }),
              onError: () => {
                E(!0);
              },
              onLoad: () => {
                E(!1);
              },
            });
      }
      ((r = a || (a = {}))[(r.SMALL = 0)] = "SMALL"),
        (r[(r.LARGE = 1)] = "LARGE");
    },
    383895: function (e, t, n) {
      var a = n(200651),
        r = n(192379),
        s = n(120356),
        i = n.n(s),
        o = n(442837),
        l = n(481060),
        c = n(178762),
        d = n(91140),
        u = n(297781),
        _ = n(592125),
        E = n(944486),
        m = n(594174),
        I = n(5192),
        p = n(810568),
        A = n(689938),
        g = n(501345),
        T = n(51527);
      t.Z = (e) => {
        let { entry: t, viewId: n, officialGuildId: s, onClose: f } = e,
          N = (0, o.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
          O = (0, o.e7)([m.default], () => m.default.getUser(t.author_id)),
          { nick: R, avatar: h } = r.useMemo(() => {
            let e =
              null == O
                ? void 0
                : O.getAvatarURL(null == N ? void 0 : N.guild_id, 48, !1);
            return {
              nick: I.ZP.getName(
                null == N ? void 0 : N.guild_id,
                null == N ? void 0 : N.id,
                O,
              ),
              avatar: e,
            };
          }, [O, N]);
        return null == O
          ? null
          : (0, a.jsx)(l.Popout, {
              position: "right",
              renderPopout: (e) => {
                let { closePopout: r, updatePosition: i } = e;
                return (0, a.jsx)(c.J, {
                  entry: t,
                  closePopout: r,
                  updatePopoutPosition: i,
                  onReaction: () => {
                    (0, p.UE)({
                      action: p.as.SendMessageUser,
                      applicationId: t.extra.application_id,
                      gameName: t.extra.game_name,
                      recipientUserId: t.author_id,
                      viewId: n,
                      officialGuildId: s,
                    }),
                      f(),
                      r();
                  },
                  onUserPopoutClosed: () => r(),
                  disableGameProfileLinks: !0,
                });
              },
              positionKey: "game-profile-entry-".concat(t.id),
              onRequestOpen: () => {
                (0, p.UE)({
                  action: p.as.ClickMessageUser,
                  applicationId: t.extra.application_id,
                  gameName: t.extra.game_name,
                  recipientUserId: t.author_id,
                  viewId: n,
                  officialGuildId: s,
                });
              },
              children: (e) =>
                (0, a.jsx)(l.Clickable, {
                  ...e,
                  className: g.profileEntryCard,
                  children: (0, a.jsx)(l.FocusRing, {
                    offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    children: (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("img", {
                          className: g.avatar,
                          src: h,
                          alt: A.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: R },
                          ),
                        }),
                        (0, a.jsx)("div", {
                          className: i()(g.playerInfo),
                          children: (0, a.jsxs)("div", {
                            className: i()(T.column, T.gapXs),
                            children: [
                              (0, a.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                lineClamp: 1,
                                children: R,
                              }),
                              (0, a.jsx)(u.Gk, {
                                location: u.Gt.GAME_PROFILE,
                                children: d.W.map((e, n) =>
                                  (0, a.jsx)(e, { entry: t }, n),
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: g.reactions,
                          children: (0, a.jsx)(l.ArrowAngleLeftUpIcon, {
                            size: "sm",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
            });
      };
    },
    644941: function (e, t, n) {
      n.r(t), n(47120);
      var a = n(200651),
        r = n(192379),
        s = n(120356),
        i = n.n(s),
        o = n(913527),
        l = n.n(o),
        c = n(705512),
        d = n(442837),
        u = n(481060),
        _ = n(224706),
        E = n(560361),
        m = n(835473),
        I = n(168551),
        p = n(485267),
        A = n(561308),
        g = n(669764),
        T = n(706454),
        f = n(768581),
        N = n(814225),
        O = n(709054),
        R = n(810568),
        h = n(998058),
        P = n(839392),
        C = n(567409),
        L = n(774073),
        M = n(426482),
        x = n(715318),
        S = n(38516),
        v = n(891949),
        G = n(252547),
        Z = n(484527),
        b = n(131033),
        j = n(296768),
        D = n(978313),
        y = n(206583),
        w = n(689938),
        U = n(51527);
      let k = () =>
        (0, a.jsxs)("div", {
          className: U.gameBadge,
          children: [
            (0, a.jsx)(u.FireIcon, { size: "xxs" }),
            (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: w.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
            }),
          ],
        });
      function H(e) {
        var t;
        let { detectedGame: n, application: s, entries: o, viewId: d } = e,
          _ = r.useMemo(
            () => (null == n ? void 0 : n.genres.map(N.P3).join(", ")),
            [n],
          ),
          E = r.useMemo(() => {
            if (null == n) return "";
            let { artwork: e, screenshots: t } = n;
            if (e.length > 0) {
              let t = Math.floor(Math.random() * (e.length - 1));
              return e[t];
            }
            if (t.length > 0) {
              let e = Math.floor(Math.random() * (t.length - 1));
              return t[e];
            }
            return "";
          }, [n]),
          m = null == s ? void 0 : s.getIconURL(160, f.$k ? "webp" : "png"),
          I = O.default.extractTimestamp(s.id),
          p = l()().diff(l()(I), "days") <= y.G,
          g = o.some((e) => (0, A.ig)(e) === c.o.GLOBAL),
          T =
            null !== (t = n.name) && void 0 !== t
              ? t
              : null == s
                ? void 0
                : s.name;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: i()(U.gameArtHero),
              style: { backgroundImage: 'url("'.concat(E, '")') },
            }),
            (0, a.jsxs)("div", {
              className: i()(U.content, U.column, U.gapLg, U.headerInfo),
              children: [
                (0, a.jsxs)("div", {
                  className: U.coverArtRow,
                  children: [
                    (0, a.jsx)("div", {
                      className: U.logoWrapper,
                      children: (0, a.jsx)(M.C, {
                        game: n,
                        application: s,
                        className: U.logo,
                        size: M.Z.LARGE,
                      }),
                    }),
                    (0, a.jsx)(x.Z, {
                      applicationId: s.id,
                      viewId: d,
                      className: U.overflowMenu,
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: i()(U.row, U.gapSm, U.gameDetails),
                  children: (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)(u.Heading, {
                        variant: "heading-xl/bold",
                        children: T,
                      }),
                      (0, a.jsxs)("div", {
                        className: i()(U.row, U.gapSm),
                        children: [
                          null != m &&
                            (0, a.jsx)("img", {
                              className: U.gameIcon,
                              src: m,
                              height: 16,
                              alt: w.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                { game: T },
                              ),
                            }),
                          (0, a.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            children: _,
                          }),
                          p &&
                            (0, a.jsx)(u.Text, {
                              variant: "eyebrow",
                              className: U.newBadge,
                              children: w.Z.Messages.NEW,
                            }),
                          g &&
                            (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(u.Text, {
                                  variant: "text-sm/medium",
                                  children: " \xb7 ",
                                }),
                                (0, a.jsx)(k, {}),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function F(e) {
        var t;
        let {
          detectedGame: n,
          application: r,
          entries: s,
          officialGuildInvite: i,
          similarGames: o,
          similarGamesError: l,
          onClose: c,
          viewId: d,
          trackAction: u,
        } = e;
        return (0, a.jsxs)("div", {
          className: U.sections,
          children: [
            (0, a.jsx)(G.Z, {
              entries: s,
              viewId: d,
              officialGuildId:
                null == i
                  ? void 0
                  : null === (t = i.guild) || void 0 === t
                    ? void 0
                    : t.id,
              onClose: c,
            }),
            (0, a.jsx)(v.Z, { detectedGame: n, trackAction: u }),
            (0, a.jsx)(j.Z, {
              applicationId: r.id,
              onClose: c,
              trackAction: u,
              similarGames: o,
              similarGamesError: l,
            }),
          ],
        });
      }
      function K(e) {
        let { detectedGame: t, setOfficialGuildInvite: n, trackAction: r } = e;
        return (0, a.jsxs)("div", {
          className: i()(U.sidebar, U.column, U.gapLg),
          children: [
            (0, a.jsx)(u.Heading, {
              variant: "heading-md/bold",
              children: w.Z.Messages.ABOUT,
            }),
            (0, a.jsxs)("div", {
              className: U.sections,
              children: [
                (0, a.jsx)(D.Z, { detectedGame: t, trackAction: r }),
                (0, a.jsx)(Z.Z, {
                  detectedGame: t,
                  trackClick: r,
                  onInviteResolved: n,
                }),
                (0, a.jsx)(S.Z, { detectedGame: t, trackClick: r }),
                (0, a.jsx)(b.Z, { detectedGame: t }),
              ],
            }),
          ],
        });
      }
      let B = (e) => e.filter(L.z6).slice(0, 5);
      t.default = (e) => {
        var t;
        let {
            applicationId: n,
            source: s,
            sourceUserId: o,
            transitionState: l,
            onClose: c,
          } = e,
          { clientThemesClassName: f } = (0, I.ZP)(),
          N = (0, d.e7)([T.default], () => T.default.locale),
          O = r.useMemo(() => (0, R.fP)(), []),
          L = (0, d.Wu)([P.Z], () => {
            var e;
            return (
              null !== (e = P.Z.getSimilarGames(n)) && void 0 !== e ? e : []
            ).slice(0, 25);
          }),
          [M, x] = r.useState(null),
          S = (0, C.Ns)(n),
          [v, G] = r.useState(null),
          Z = (0, m.q)(n),
          b = (0, d.e7)([g.Z], () => g.Z.getGame(n)),
          j =
            null !== (t = null == b ? void 0 : b.name) && void 0 !== t
              ? t
              : null == Z
                ? void 0
                : Z.name,
          D = (e, t) => {
            var a;
            (0, R.UE)({
              gameName: null != j ? j : "",
              applicationId: n,
              action: e,
              similarGameId: t,
              viewId: O,
              officialGuildId:
                null == v
                  ? void 0
                  : null === (a = v.guild) || void 0 === a
                    ? void 0
                    : a.id,
            });
          };
        return (r.useEffect(() => {
          (0, R.IS)({
            source: s,
            viewId: O,
            applicationId: n,
            gameName: null != j ? j : "",
            authorId: o,
          });
        }, []),
        r.useEffect(() => {
          (0, p.Jn)();
        }, []),
        (0, m.Z)(L),
        r.useEffect(() => {
          !N.startsWith("en") &&
            (null == b ? void 0 : b.summaryLocalized) == null &&
            _.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
        }, [n, null == b ? void 0 : b.summaryLocalized, N]),
        r.useEffect(() => {
          (async () => {
            if (0 === L.length) {
              x(null);
              try {
                await (0, h.i)(n);
              } catch (e) {
                x(e);
              }
            }
          })();
        }, [n, L]),
        (0, E.Z)(() => {
          var e;
          let t = Date.now(),
            a = S.map((e) => {
              let n = (0, A.kr)(e) ? (0, A.T_)(e, t) : (0, A.GL)(e, N);
              return JSON.stringify({
                item_id: e.id,
                trait: e.traits,
                time_played: n,
              });
            });
          (0, R.wz)({
            viewId: O,
            applicationId: n,
            gameName: null != j ? j : "",
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: a,
            similarGames: B(L),
            officialGuildId:
              null == v
                ? void 0
                : null === (e = v.guild) || void 0 === e
                  ? void 0
                  : e.id,
          });
        }),
        null == b || null == Z)
          ? null
          : (0, a.jsx)(u.ModalRoot, {
              transitionState: l,
              size: u.ModalSize.DYNAMIC,
              className: i()(f, U.gameProfileModal),
              children: (0, a.jsxs)(u.Scroller, {
                orientation: "auto",
                children: [
                  (0, a.jsx)(H, {
                    detectedGame: b,
                    application: Z,
                    entries: S,
                    viewId: O,
                    trackAction: D,
                  }),
                  (0, a.jsx)(u.HeadingLevel, {
                    children: (0, a.jsxs)("div", {
                      className: i()(U.content, U.mainContent),
                      children: [
                        (0, a.jsx)(F, {
                          detectedGame: b,
                          application: Z,
                          entries: S,
                          officialGuildInvite: v,
                          similarGames: L,
                          similarGamesError: M,
                          onClose: c,
                          viewId: O,
                          trackAction: D,
                        }),
                        (0, a.jsx)(K, {
                          detectedGame: b,
                          setOfficialGuildInvite: G,
                          trackAction: D,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
      };
    },
    715318: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        s = n(239091),
        i = n(299206),
        o = n(858042),
        l = n(689938);
      function c(e) {
        let { applicationId: t, className: n, viewId: c } = e,
          d = (0, i.Z)({ id: t, label: l.Z.Messages.COPY_ID_APPLICATION }),
          u = (0, o.M)({ applicationId: t, viewId: c });
        return null == d && null == u
          ? null
          : (0, a.jsx)(r.Popout, {
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)(r.Menu, {
                  navId: "game-profile-context",
                  onClose: () => {
                    (0, s.Zy)(), t();
                  },
                  "aria-label": l.Z.Messages.GAME_PROFILE_VIEW_MORE,
                  onSelect: () => {},
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(r.MenuGroup, { children: d }),
                      (0, a.jsx)(r.MenuGroup, { children: u }),
                    ],
                  }),
                });
              },
              children: (e) =>
                (0, a.jsx)(r.Tooltip, {
                  text: l.Z.Messages.MORE,
                  children: (t) =>
                    (0, a.jsx)(r.Clickable, {
                      className: n,
                      ...t,
                      ...e,
                      children: (0, a.jsx)(r.MoreHorizontalIcon, {
                        size: "xs",
                        color: r.tokens.colors.WHITE,
                      }),
                    }),
                }),
            });
      }
    },
    38516: function (e, t, n) {
      n(411104);
      var a = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        i = n(643872),
        o = n(481060),
        l = n(810568),
        c = n(689938),
        d = n(51527),
        u = n(825718);
      let _ = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE];
      function E(e) {
        let { website: t, trackClick: n } = e,
          {
            action: r,
            icon: s,
            title: d,
          } = (function (e) {
            switch (e.category) {
              case i.p.OFFICIAL:
                return {
                  icon: (0, a.jsx)(o.GlobeEarthIcon, {
                    colorClass: u.linkIcon,
                  }),
                  action: l.as.WebsiteLink,
                  title: c.Z.Messages.GAME_PROFILE_LINK_OFFICIAL,
                };
              case i.p.TWITTER:
                return {
                  icon: (0, a.jsx)(o.XNeutralIcon, { colorClass: u.linkIcon }),
                  action: l.as.XLink,
                  title: c.Z.Messages.GAME_PROFILE_LINK_TWITTER,
                };
              case i.p.YOUTUBE:
                return {
                  action: l.as.YouTubeLink,
                  icon: (0, a.jsx)(o.YoutubeNeutralIcon, {
                    colorClass: u.linkIcon,
                  }),
                  title: c.Z.Messages.GAME_PROFILE_LINK_YOUTUBE,
                };
              default:
                throw Error("Unknown IGDB website category");
            }
          })(t);
        return (0, a.jsx)(o.Tooltip, {
          text: t.url,
          tooltipClassName: u.tooltip,
          tooltipContentClassName: u.tooltipContent,
          children: (e) => {
            let { onClick: i, ...l } = e;
            return (0, a.jsx)(o.Anchor, {
              ...l,
              className: u.linkAnchor,
              title: d,
              href: t.url,
              onClick: () => {
                n(r), null == i || i();
              },
              target: "_blank",
              children: s,
            });
          },
        });
      }
      t.Z = function (e) {
        let { detectedGame: t, trackClick: n } = e;
        if (null == t.websites) return null;
        let r = t.websites
          .filter((e) => {
            let { category: t } = e;
            return _.includes(t);
          })
          .sort((e, t) => e.category - t.category);
        return 0 === r.length
          ? null
          : (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)(o.Heading, {
                  className: d.sectionHeader,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: c.Z.Messages.GAME_PROFILE_LINKS,
                }),
                (0, a.jsx)("div", {
                  className: s()(d.row, d.gapMd),
                  children: r.map((e) =>
                    (0, a.jsx)(E, { website: e, trackClick: n }, e.url),
                  ),
                }),
              ],
            });
      };
    },
    891949: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        s = n(481060),
        i = n(341176),
        o = n(312097),
        l = n(810568),
        c = n(689938),
        d = n(51527),
        u = n(133512);
      function _(e) {
        let { detectedGame: t, trackAction: n } = e,
          _ = r.useRef(null),
          E = r.useMemo(() => {
            let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [
              ...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })),
              ...e,
            ];
          }, [t.artwork, t.screenshots]),
          m = E.length > 2;
        function I(e) {
          if (null == _.current) return;
          let t = _.current.getScrollerState().scrollLeft;
          _.current.scrollTo({ to: t + 280 * e, animate: !0 });
        }
        return 0 === E.length
          ? null
          : (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)(s.Heading, {
                  className: d.sectionHeader,
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: c.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                }),
                (0, a.jsxs)("div", {
                  className: m
                    ? u.gameProfileMediaSmall
                    : u.gameProfileMediaLarge,
                  children: [
                    (0, a.jsx)(s.AdvancedScrollerNone, {
                      ref: _,
                      className: u.imageScroller,
                      orientation: "horizontal",
                      children: E.map((e, t) =>
                        (0, a.jsx)(
                          s.Clickable,
                          {
                            className: u.imageClickable,
                            focusProps: {
                              offset: 4,
                              ringClassName: u.gameArtworkFocusRing,
                            },
                            onClick: () => {
                              n(l.as.ClickImage),
                                (0, o.K)({
                                  className: u.mediaModal,
                                  items: E,
                                  fit: i.D.SCALE_DOWN,
                                  startingIndex: t,
                                  shouldHideMediaOptions: !0,
                                  shouldAnimateCarousel: !0,
                                  location: "GameProfileMedia",
                                });
                            },
                            children: (0, a.jsx)("img", {
                              src: e.url,
                              className: u.gameArtwork,
                              alt: c.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                { game: name },
                              ),
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                    m &&
                      (0, a.jsxs)("div", {
                        className: u.mediaOverlay,
                        children: [
                          (0, a.jsx)("div", { className: u.gradientLeft }),
                          (0, a.jsx)(s.Clickable, {
                            className: u.arrowClickable,
                            onClick: () => I(-1),
                            children: (0, a.jsx)(s.ArrowSmallLeftIcon, {
                              className: u.arrow,
                              color: "currentColor",
                            }),
                          }),
                          (0, a.jsx)("div", { className: u.gradientRight }),
                          (0, a.jsx)(s.Clickable, {
                            className: u.arrowClickable,
                            onClick: () => I(1),
                            children: (0, a.jsx)(s.ArrowSmallRightIcon, {
                              className: u.arrow,
                              color: "currentColor",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            });
      }
    },
    252547: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        s = n(120356),
        i = n.n(s),
        o = n(793030),
        l = n(481060),
        c = n(383895),
        d = n(689938),
        u = n(51527),
        _ = n(268236);
      function E(e) {
        let { entries: t, viewId: n, officialGuildId: s, onClose: E } = e,
          m = t.length > 7,
          [I, p] = r.useState(!1),
          A = r.useMemo(() => t.slice(0, m && !I ? 6 : void 0), [t, m, I]);
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsx)(o.X6, {
              className: u.sectionHeader,
              variant: "text-md/semibold",
              color: "header-primary",
              children: d.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
            }),
            0 === t.length
              ? (0, a.jsx)(o.xv, {
                  variant: "text-xs/semibold",
                  color: "text-primary",
                  className: _.emptyState,
                  children: d.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: i()(_.friends, { [_.fadedEntries]: m && !I }),
                      children: (0, a.jsx)("div", {
                        className: u.column,
                        children: A.map((e) =>
                          (0, a.jsx)(
                            c.Z,
                            {
                              entry: e,
                              viewId: n,
                              onClose: E,
                              officialGuildId: s,
                            },
                            e.id,
                          ),
                        ),
                      }),
                    }),
                    m &&
                      !I &&
                      (0, a.jsxs)(l.Clickable, {
                        className: _.expandEntriesButton,
                        onClick: () => p(!0),
                        children: [
                          (0, a.jsx)(o.xv, {
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: d.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES,
                          }),
                          (0, a.jsx)(l.ChevronSmallDownIcon, { size: "xs" }),
                        ],
                      }),
                  ],
                }),
          ],
        });
      }
    },
    484527: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        s = n(120356),
        i = n.n(s),
        o = n(643872),
        l = n(442837),
        c = n(481060),
        d = n(570140),
        u = n(652898),
        _ = n(93093),
        E = n(768581),
        m = n(810568),
        I = n(981631),
        p = n(689938),
        A = n(51527),
        g = n(479537);
      function T(e) {
        let { detectedGame: t, trackClick: n, onInviteResolved: s } = e,
          [T, f] = r.useState(),
          N = (0, l.e7)([_.Z], () => {
            var e, t;
            return (
              (null == T
                ? void 0
                : null === (e = T.guild) || void 0 === e
                  ? void 0
                  : e.id) != null &&
              _.Z.isMember(
                null == T
                  ? void 0
                  : null === (t = T.guild) || void 0 === t
                    ? void 0
                    : t.id,
              )
            );
          }),
          O = r.useMemo(() => {
            var e;
            return null === (e = t.websites) || void 0 === e
              ? void 0
              : e.find((e) => {
                  let { category: t } = e;
                  return t === o.p.DISCORD;
                });
          }, [t.websites]);
        if (
          (r.useEffect(() => {
            let e = async (e) => {
              let t = e.split("/").pop();
              if (null != t) {
                let e = await (0, u.Z)(t);
                !0 !== e.banned &&
                  (f(e.invite), null != e.invite && (null == s || s(e.invite)));
              }
            };
            null != O && e(O.url);
          }, [O, s]),
          null == T ||
            null == T.guild ||
            (!T.guild.features.includes("VERIFIED") &&
              !T.guild.features.includes("PARTNER")))
        )
          return null;
        let R = E.ZP.getGuildIconURL({
          id: T.guild.id,
          icon: T.guild.icon,
          size: 32,
        });
        return (0, a.jsxs)("div", {
          className: A.column,
          children: [
            (0, a.jsx)(c.Heading, {
              className: A.sectionHeader,
              variant: "text-xs/semibold",
              color: "header-secondary",
              children: p.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD,
            }),
            (0, a.jsxs)("div", {
              className: i()(A.row, A.gapMd),
              children: [
                (0, a.jsx)("img", {
                  className: g.guildIcon,
                  src: R,
                  alt: p.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
                    guildName: T.guild.name,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: g.inviteInfo,
                  children: [
                    (0, a.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      children: T.guild.name,
                    }),
                    null != T.approximate_member_count &&
                      (0, a.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        children:
                          p.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: T.approximate_member_count },
                          ),
                      }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(c.Button, {
              color: c.ButtonColors.PRIMARY,
              onClick: () => {
                n(m.as.JoinOfficialServer),
                  d.Z.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: T,
                    code: T.code,
                    context: I.IlC.APP,
                  });
              },
              children: N ? p.Z.Messages.JOINED_GUILD : p.Z.Messages.JOIN_GUILD,
            }),
          ],
        });
      }
    },
    221370: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(47120),
        n(653041);
      var a = n(200651),
        r = n(192379),
        s = n(120356),
        i = n.n(s),
        o = n(758713),
        l = n(657707),
        c = n(481060),
        d = n(689938),
        u = n(51527);
      let _ = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
      function E(e) {
        let { platform: t, ...n } = e;
        switch (t) {
          case o.z.DESKTOP:
            return (0, a.jsx)(l.pzj, { size: "xs", ...n });
          case o.z.XBOX:
            return (0, a.jsx)(l.Mko, { size: "xs", ...n });
          case o.z.PLAYSTATION:
            return (0, a.jsx)(l.Tsp, { size: "xs", ...n });
          case o.z.NINTENDO:
            return (0, a.jsx)(l.aPH, { size: "xs", ...n });
          default:
            return null;
        }
      }
      function m(e) {
        let { platforms: t } = e;
        return (0, a.jsx)("div", {
          className: i()(u.row, u.gapSm),
          style: { alignItems: "center" },
          children: t.map((e) =>
            (0, a.jsx)(
              c.Tooltip,
              {
                text: (function (e) {
                  switch (e) {
                    case o.z.DESKTOP:
                      return d.Z.Messages.GAME_PROFILE_PLATFORM_DESKTOP;
                    case o.z.XBOX:
                      return d.Z.Messages.GAME_PROFILE_PLATFORM_XBOX;
                    case o.z.PLAYSTATION:
                      return d.Z.Messages.GAME_PROFILE_PLATFORM_PLAYSTATION;
                    case o.z.NINTENDO:
                      return d.Z.Messages.GAME_PROFILE_PLATFORM_NINTENDO;
                    default:
                      return null;
                  }
                })(e),
                children: (t) => (0, a.jsx)(E, { ...t, platform: e }),
              },
              e,
            ),
          ),
        });
      }
      function I(e) {
        let { detectedGame: t, className: n } = e,
          s = r.useMemo(() => {
            let e = new Set(t.platforms),
              n = [...e];
            return (
              !e.has(o.z.DESKTOP) &&
                (e.has(o.z.MACOS) || e.has(o.z.LINUX)) &&
                n.push(o.z.DESKTOP),
              n.filter((e) => _.includes(e))
            );
          }, [t.platforms]);
        return 0 === s.length
          ? null
          : (0, a.jsx)("div", {
              className: i()(u.column, u.gapLg, n),
              children: s.length > 0 && (0, a.jsx)(m, { platforms: s }),
            });
      }
    },
    131033: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(793030),
        s = n(689938),
        i = n(51527);
      function o(e) {
        let { detectedGame: t } = e;
        return 0 === t.publishers.length
          ? null
          : (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)(r.X6, {
                  className: i.sectionHeader,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: s.Z.Messages.GAME_PROFILE_PUBLISHER,
                }),
                (0, a.jsx)(r.xv, {
                  variant: "text-sm/normal",
                  children: t.publishers.join(", "),
                }),
              ],
            });
      }
    },
    296768: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return R;
        },
      }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        s = n(120356),
        i = n.n(s),
        o = n(392711),
        l = n.n(o),
        c = n(442837),
        d = n(481060),
        u = n(224706),
        _ = n(812206),
        E = n(669764),
        m = n(810568),
        I = n(839392),
        p = n(774073),
        A = n(426482),
        g = n(644941),
        T = n(689938),
        f = n(51527),
        N = n(796805);
      let O = (e) => {
        let { game: t, onClose: n, trackClick: r } = e,
          s = (0, c.e7)([_.Z], () => _.Z.getApplication(t.applicationId));
        return (0, a.jsx)(d.Tooltip, {
          text: t.name,
          children: (e) =>
            (0, a.jsx)(d.Clickable, {
              ...e,
              className: N.similarGameImageClickable,
              onClick: async () => {
                r(m.as.ClickSimilarGame, t.applicationId),
                  (0, d.openModalLazy)(() =>
                    Promise.resolve((e) =>
                      (0, a.jsx)(g.default, {
                        applicationId: t.applicationId,
                        source: m.m1.SimilarGames,
                        ...e,
                      }),
                    ),
                  ),
                  await new Promise((e) => setTimeout(e, 10)),
                  n();
              },
              children: (0, a.jsx)(A.C, {
                game: t,
                application: s,
                className: N.similarGameImage,
                size: A.Z.SMALL,
              }),
            }),
        });
      };
      function R(e) {
        let {
            applicationId: t,
            onClose: n,
            trackAction: s,
            similarGames: o,
            similarGamesError: _,
          } = e,
          m = (0, c.e7)([I.Z, E.Z], () => {
            let e =
                void 0 === I.Z.getSimilarGames(t) &&
                null == I.Z.getSimilarGamesError(t),
              n = o.some((e) => E.Z.isFetching(e));
            return e || n;
          }),
          A = (0, c.Wu)([E.Z], () =>
            o
              .map((e) => E.Z.getGame(e))
              .filter((e) => null != e)
              .filter((e) => (0, p.z6)(e.applicationId))
              .slice(0, 5),
          );
        return (r.useEffect(() => {
          o.length > 0 && u.Z.getDetectableGamesSupplemental([t, ...o]);
        }, [t, o]),
        m && null == _)
          ? (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("div", {
                  className: i()(N.loadingHeading, f.sectionHeader),
                }),
                (0, a.jsx)("div", {
                  className: i()(f.row, f.gapLg),
                  children: l()
                    .range(0, 5)
                    .map((e) =>
                      (0, a.jsx)("div", { className: N.loadingArtwork }, e),
                    ),
                }),
              ],
            })
          : (m || 0 !== A.length) && null == _
            ? (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)(d.Heading, {
                    className: f.sectionHeader,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: T.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                  }),
                  (0, a.jsx)("div", {
                    className: N.similarGames,
                    style: {},
                    children: A.map((e) =>
                      (0, a.jsx)(
                        O,
                        { game: e, onClose: n, trackClick: s },
                        e.applicationId,
                      ),
                    ),
                  }),
                ],
              })
            : null;
      }
    },
    978313: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return A;
        },
      }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        s = n(120356),
        i = n.n(s),
        o = n(657707),
        l = n(793030),
        c = n(692547),
        d = n(481060),
        u = n(885006),
        _ = n(810568),
        E = n(221370),
        m = n(689938),
        I = n(51527),
        p = n(110367);
      function A(e) {
        let { detectedGame: t, trackAction: n } = e,
          [s, A] = r.useState(
            (null == t ? void 0 : t.summaryLocalized) != null,
          ),
          [g, T] = r.useState(!0),
          [f, N] = r.useState(!1),
          O = r.useRef(null),
          { width: R, height: h } = (0, u.Z)();
        return (r.useEffect(() => {
          let e = O.current;
          null != e && N(e.scrollHeight - e.clientHeight > 1 || !g);
        }, [O, R, h, g]),
        null == t.summary)
          ? null
          : (0, a.jsxs)("div", {
              className: i()(I.column, I.gapMd),
              children: [
                null != t.summaryLocalized &&
                  (0, a.jsxs)("div", {
                    className: i()(I.row, I.gapSm),
                    children: [
                      (0, a.jsx)(o.SxY, {
                        color: c.Z.colors.HEADER_SECONDARY,
                        size: "xs",
                      }),
                      (0, a.jsx)(l.xv, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        children: s
                          ? m.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({
                              onShowOriginal: () => A(!1),
                            })
                          : m.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({
                              onShowTranslated: () => A(!0),
                            }),
                      }),
                    ],
                  }),
                (0, a.jsx)(l.xv, {
                  ref: O,
                  lineClamp: g ? 8 : void 0,
                  variant: "text-sm/normal",
                  children: s ? t.summaryLocalized : t.summary,
                }),
                f &&
                  (0, a.jsx)(d.Clickable, {
                    className: I.clickable,
                    onClick: () => {
                      n(g ? _.as.ShowMore : _.as.ShowLess), T(!g);
                    },
                    children: (0, a.jsx)(l.xv, {
                      variant: "text-sm/semibold",
                      children: g
                        ? m.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE
                        : m.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS,
                    }),
                  }),
                (0, a.jsx)(E.Z, { className: p.platforms, detectedGame: t }),
              ],
            });
      }
    },
    341176: function (e, t, n) {
      n.d(t, {
        D: function () {
          return m;
        },
        Z: function () {
          return I;
        },
      });
      var a = n(200651),
        r = n(120356),
        s = n.n(r),
        i = n(524444),
        o = n(52824),
        l = n(956664),
        c = n(589530),
        d = n(591759),
        u = n(124347),
        _ = n(80966),
        E = n(519817);
      let m = { DEFAULT: null, CONTAIN: E.contain, SCALE_DOWN: E.scaleDown };
      function I(e) {
        let {
            media: t,
            fit: n = m.DEFAULT,
            obscured: r = !1,
            onContextMenu: I,
          } = e,
          {
            width: p,
            height: A,
            url: g,
            proxyUrl: T,
            alt: f,
            type: N,
            maxWidth: O,
            maxHeight: R,
            ...h
          } = t,
          { width: P, height: C } = (0, l.zp)(
            null != p ? p : 0,
            null != A ? A : 0,
          ),
          L = (0, o.q)({ proxyURL: T, url: g }),
          M = !(null == p || 0 === p || null == A || 0 === A);
        if ("VIDEO" === N && M && null != T) {
          var x;
          let e = (function (e) {
            let t = d.Z.toURLSafe(e);
            return null == t
              ? null
              : (t.searchParams.append("format", "webp"), t.toString());
          })(T);
          if (null == e) return null;
          let n =
            null !== (x = t.renderLinkComponent) && void 0 !== x ? x : i.iT;
          return (0, a.jsx)(_.Z, {
            ...h,
            src: L,
            width: p,
            height: A,
            maxWidth: P,
            maxHeight: C,
            poster: e,
            naturalWidth: p,
            naturalHeight: A,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: n,
            autoPlay: !r,
            alt: f,
            onContextMenu: I,
          });
        }
        if ("IMAGE" === N)
          return M
            ? (0, a.jsx)(u.ZP, {
                ...h,
                imageClassName: s()(E.slide, n),
                src: L,
                width: p,
                height: A,
                shouldLink: !1,
                maxWidth: P,
                maxHeight: C,
                animated: !r && t.animated,
                autoPlay: !r,
                alt: f,
                zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                onContextMenu: I,
              })
            : (0, a.jsx)("img", {
                src: L,
                alt: f,
                className: s()(E.slide, n),
                onContextMenu: I,
              });
        return null;
      }
    },
    931651: function (e, t, n) {
      n.d(t, {
        $: function () {
          return i;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(907040),
        s = n(185923);
      function i(e) {
        let {
          channel: t,
          closePopout: n,
          analyticsOverride: i,
          onSelectEmoji: o,
          messageId: l,
        } = e;
        return (0, a.jsx)(r.Z, {
          closePopout: n,
          channel: t,
          onSelectEmoji: o,
          pickerIntention: s.Hz.REACTION,
          analyticsOverride: i,
          messageId: l,
        });
      }
    },
    885006: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var a = n(192379);
      function r() {
        var e, t;
        let [n, r] = a.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080,
        });
        return (
          a.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              r({ width: e, height: window.innerHeight });
            }
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          n
        );
      }
    },
    424678: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        s = n(481060);
      function i(e, t, n) {
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
      class o extends r.PureComponent {
        render() {
          let { text: e, lastItem: t, className: n } = this.props;
          return (0, a.jsxs)("span", {
            children: [
              (0, a.jsx)(s.Anchor, {
                className: n,
                onClick: this.handleClick,
                children: e,
              }),
              t ? "" : ", ",
            ],
          });
        }
        constructor(...e) {
          super(...e),
            i(this, "handleClick", () => {
              let { onClick: e, index: t } = this.props;
              null == e || e(t);
            });
        }
      }
      class l extends r.PureComponent {
        render() {
          let e = this.props.artists.split(";");
          if (!this.props.canOpen) return e.join(", ");
          let t = e.length - 1;
          return e.map((e, n) =>
            (0, a.jsx)(
              o,
              {
                text: e,
                index: n,
                lastItem: n === t,
                onClick: this.handleOpenSpotifyArtist,
                className: this.props.linkClassName,
              },
              "spotify-artist-".concat(n),
            ),
          );
        }
        constructor(...e) {
          super(...e),
            i(this, "handleOpenSpotifyArtist", (e) => {
              let { onOpenSpotifyArtist: t } = this.props;
              null == t || t(e);
            });
        }
      }
    },
    237583: function (e, t, n) {
      n(653041), n(47120);
      var a,
        r = n(200651),
        s = n(192379),
        i = n(120356),
        o = n.n(i),
        l = n(481060),
        c = n(598077),
        d = n(908860),
        u = n(579861);
      function _(e, t, n) {
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
      class E extends (a = s.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: t,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: a,
            } = this.props,
            r = [],
            s = e.length === t ? e.length : t - 1,
            i = 0;
          for (; i < s && i < e.length; ) {
            let t = i === e.length - 1;
            r.push(
              n(e[i] || null, t ? null : d.avatarMasked, "user-".concat(i), t),
            ),
              i++;
          }
          if (i < e.length) {
            let t = Math.min(e.length - i, 99);
            r.push(a("+".concat(t), d.moreUsers, "more-users", t));
          }
          return r;
        }
        renderIcon() {
          return this.props.icon
            ? (0, r.jsx)("div", {
                className: d.iconContainer,
                children: (0, r.jsx)(l.VoiceNormalIcon, {
                  size: "xs",
                  color: "currentColor",
                  colorClass: d.foreground,
                  className: d.icon,
                }),
              })
            : null;
        }
        render() {
          let { className: e } = this.props;
          return (0, r.jsxs)("div", {
            className: o()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "_ref", void 0),
            _(this, "defaultRenderUser", (e, t, n, a) => {
              let { onClick: s, size: i, guildId: _ } = this.props,
                E = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == E
                ? (0, r.jsx)("div", { className: o()(d.emptyUser, t) }, n)
                : (0, r.jsx)(
                    l.Avatar,
                    {
                      tabIndex: 0,
                      src: E.getAvatarURL(_, (0, l.getAvatarSize)(i)),
                      size: i,
                      "aria-label": E.username,
                      className: o()(t, u.cursorPointer, d.avatarSize),
                      onClick: (e) => (null != s ? s(e, E, this._ref) : null),
                    },
                    E.id,
                  );
            });
        }
      }
      _(E, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, t, n) {
          return (0, r.jsx)("div", { className: t, children: e }, n);
        },
        size: l.AvatarSizes.SIZE_24,
      }),
        (t.Z = E);
    },
    908841: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(325767);
      function s(e) {
        let {
          width: t = 20,
          height: n = 20,
          color: s = "currentColor",
          ...i
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, r.Z)(i),
          width: t,
          height: n,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, a.jsx)("path", {
            d: "M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM14.5625 14.4375C14.3791 14.7161 14.0145 14.8107 13.7188 14.6562C11.375 13.2188 8.40625 12.9062 4.9375 13.6875C4.71979 13.7377 4.49182 13.668 4.33945 13.5046C4.18709 13.3412 4.13348 13.1089 4.19883 12.8952C4.26417 12.6816 4.43854 12.519 4.65625 12.4688C8.46875 11.5938 11.7188 11.9688 14.375 13.5938C14.5149 13.6781 14.6141 13.816 14.6495 13.9755C14.685 14.1349 14.6535 14.3019 14.5625 14.4375ZM15.8125 11.6875C15.7053 11.8622 15.5328 11.9869 15.3333 12.0338C15.1338 12.0807 14.9238 12.0461 14.75 11.9375C12.0625 10.2812 7.96875 9.8125 4.78125 10.7812C4.5133 10.8594 4.22401 10.7887 4.02236 10.5957C3.8207 10.4027 3.73731 10.1168 3.80361 9.84569C3.8699 9.57457 4.0758 9.3594 4.34375 9.28125C7.96875 8.1875 12.5 8.71875 15.5625 10.625C15.9134 10.8575 16.0229 11.3229 15.8125 11.6875ZM15.9062 8.875C12.6875 6.96875 7.375 6.78125 4.28125 7.71875C3.81691 7.79284 3.36952 7.5115 3.23513 7.0609C3.10074 6.61031 3.32093 6.12986 3.75 5.9375C7.28125 4.875 13.1562 5.0625 16.875 7.28125C17.0893 7.40709 17.2434 7.61436 17.3023 7.85577C17.3612 8.09717 17.3198 8.35214 17.1875 8.5625C16.9054 8.98221 16.3499 9.1177 15.9062 8.875Z",
            fill: s,
          }),
        });
      }
    },
    52824: function (e, t, n) {
      n.d(t, {
        q: function () {
          return a;
        },
      });
      function a(e) {
        let { proxyURL: t, url: n } = e;
        return null != t && "" !== t ? t : n;
      }
    },
    814225: function (e, t, n) {
      n.d(t, {
        P3: function () {
          return _;
        },
        ZK: function () {
          return u;
        },
        en: function () {
          return m;
        },
      }),
        n(757143),
        n(47120);
      var a = n(913527),
        r = n.n(a);
      if (12633 == n.j) var s = n(512969);
      n(358085), n(73346);
      var i = n(981631),
        o = n(689938);
      let l = {},
        c = {},
        d = Object.freeze({ ALL: -1, ...i.EKQ });
      function u(e) {
        let t = (0, s.LX)(e, {
          path: i.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        });
        return null != t ? t.params.skuId : null;
      }
      function _(e) {
        switch (e) {
          case i.EKQ.ACTION:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ACTION;
          case i.EKQ.ACTION_RPG:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ACTION_RPG;
          case i.EKQ.BRAWLER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BRAWLER;
          case i.EKQ.HACK_AND_SLASH:
            return o.Z.Messages.APPLICATION_STORE_GENRE_HACK_AND_SLASH;
          case i.EKQ.PLATFORMER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_PLATFORMER;
          case i.EKQ.STEALTH:
            return o.Z.Messages.APPLICATION_STORE_GENRE_STEALTH;
          case i.EKQ.SURVIVAL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL;
          case i.EKQ.ADVENTURE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ADVENTURE;
          case i.EKQ.ACTION_ADVENTURE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ACTION_ADVENTURE;
          case i.EKQ.METROIDVANIA:
            return o.Z.Messages.APPLICATION_STORE_GENRE_METROIDVANIA;
          case i.EKQ.OPEN_WORLD:
            return o.Z.Messages.APPLICATION_STORE_GENRE_OPEN_WORLD;
          case i.EKQ.PSYCHOLOGICAL_HORROR:
            return o.Z.Messages.APPLICATION_STORE_GENRE_PSYCHOLOGICAL_HORROR;
          case i.EKQ.SANDBOX:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SANDBOX;
          case i.EKQ.SURVIVAL_HORROR:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL_HORROR;
          case i.EKQ.VISUAL_NOVEL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_VISUAL_NOVEL;
          case i.EKQ.DRIVING_RACING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_DRIVING_RACING;
          case i.EKQ.VEHICULAR_COMBAT:
            return o.Z.Messages.APPLICATION_STORE_GENRE_VEHICULAR_COMBAT;
          case i.EKQ.MASSIVELY_MULTIPLAYER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_MASSIVELY_MULTIPLAYER;
          case i.EKQ.MMORPG:
            return o.Z.Messages.APPLICATION_STORE_GENRE_MMORPG;
          case i.EKQ.ROLE_PLAYING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ROLE_PLAYING;
          case i.EKQ.DUNGEON_CRAWLER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_DUNGEON_CRAWLER;
          case i.EKQ.ROGUELIKE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ROGUELIKE;
          case i.EKQ.SHOOTER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SHOOTER;
          case i.EKQ.LIGHT_GUN:
            return o.Z.Messages.APPLICATION_STORE_GENRE_LIGHT_GUN;
          case i.EKQ.SHOOT_EM_UP:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SHOOT_EM_UP;
          case i.EKQ.FPS:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FPS;
          case i.EKQ.DUAL_JOYSTICK_SHOOTER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_DUAL_JOYSTICK_SHOOTER;
          case i.EKQ.SIMULATION:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SIMULATION;
          case i.EKQ.FLIGHT_SIMULATOR:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FLIGHT_SIMULATOR;
          case i.EKQ.TRAIN_SIMULATOR:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TRAIN_SIMULATOR;
          case i.EKQ.LIFE_SIMULATOR:
            return o.Z.Messages.APPLICATION_STORE_GENRE_LIFE_SIMULATOR;
          case i.EKQ.FISHING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FISHING;
          case i.EKQ.SPORTS:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SPORTS;
          case i.EKQ.BASEBALL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BASEBALL;
          case i.EKQ.BASKETBALL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BASKETBALL;
          case i.EKQ.BILLIARDS:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BILLIARDS;
          case i.EKQ.BOWLING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BOWLING;
          case i.EKQ.BOXING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BOXING;
          case i.EKQ.FOOTBALL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FOOTBALL;
          case i.EKQ.GOLF:
            return o.Z.Messages.APPLICATION_STORE_GENRE_GOLF;
          case i.EKQ.HOCKEY:
            return o.Z.Messages.APPLICATION_STORE_GENRE_HOCKEY;
          case i.EKQ.SKATEBOARDING_SKATING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SKATEBOARDING_SKATING;
          case i.EKQ.SNOWBOARDING_SKIING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SNOWBOARDING_SKIING;
          case i.EKQ.SOCCER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SOCCER;
          case i.EKQ.TRACK_FIELD:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TRACK_FIELD;
          case i.EKQ.SURFING_WAKEBOARDING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SURFING_WAKEBOARDING;
          case i.EKQ.WRESTLING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_WRESTLING;
          case i.EKQ.STRATEGY:
            return o.Z.Messages.APPLICATION_STORE_GENRE_STRATEGY;
          case i.EKQ.FOUR_X:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FOUR_X;
          case i.EKQ.ARTILLERY:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ARTILLERY;
          case i.EKQ.RTS:
            return o.Z.Messages.APPLICATION_STORE_GENRE_RTS;
          case i.EKQ.TOWER_DEFENSE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TOWER_DEFENSE;
          case i.EKQ.TURN_BASED_STRATEGY:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TURN_BASED_STRATEGY;
          case i.EKQ.WARGAME:
            return o.Z.Messages.APPLICATION_STORE_GENRE_WARGAME;
          case i.EKQ.MOBA:
            return o.Z.Messages.APPLICATION_STORE_GENRE_MOBA;
          case i.EKQ.FIGHTING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FIGHTING;
          case i.EKQ.PUZZLE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_PUZZLE;
          case i.EKQ.CARD_GAME:
            return o.Z.Messages.APPLICATION_STORE_GENRE_CARD_GAME;
          case i.EKQ.EDUCATION:
            return o.Z.Messages.APPLICATION_STORE_GENRE_EDUCATION;
          case i.EKQ.FITNESS:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FITNESS;
          case i.EKQ.GAMBLING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_GAMBLING;
          case i.EKQ.MUSIC_RHYTHM:
            return o.Z.Messages.APPLICATION_STORE_GENRE_MUSIC_RHYTHM;
          case i.EKQ.PARTY_MINI_GAME:
            return o.Z.Messages.APPLICATION_STORE_GENRE_PARTY_MINI_GAME;
          case i.EKQ.PINBALL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_PINBALL;
          case i.EKQ.TRIVIA_BOARD_GAME:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TRIVIA_BOARD_GAME;
          case i.EKQ.TACTICAL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TACTICAL;
          case i.EKQ.INDIE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_INDIE;
          case i.EKQ.ARCADE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ARCADE;
          case i.EKQ.POINT_AND_CLICK:
            return o.Z.Messages.APPLICATION_STORE_GENRE_POINT_AND_CLICK;
          default:
            return o.Z.Messages.APPLICATION_STORE_GENRE_MISCELLANEOUS;
        }
      }
      Object.keys(d).forEach((e) => {
        let t = e.toLowerCase().replace(/_/g, "-"),
          n = d[e];
        (l[t] = n), (c[n] = t);
      });
      let E = [
        ["YYYY-MM-DD", "MMMM DD, Y"],
        ["YYYY-MM", "MMMM Y"],
        ["MM-DD", "MMMM DD"],
        ["MM", "MMMM"],
        ["YYYY", "Y"],
      ];
      function m(e) {
        let { preorderReleaseAt: t, preorderApproximateReleaseDate: n } = e;
        if (null != t) return t.format("MMMM DD");
        if (null == n) return null;
        for (let e = 0; e < E.length; e++) {
          let [t, a] = E[e],
            s = r()(n, t, !0);
          if (s.isValid()) return s.format(a);
        }
        return n;
      }
    },
    643872: function (e, t, n) {
      var a, r;
      n.d(t, {
        p: function () {
          return a;
        },
      }),
        ((r = a || (a = {}))[(r.OFFICIAL = 1)] = "OFFICIAL"),
        (r[(r.WIKIA = 2)] = "WIKIA"),
        (r[(r.WIKIPEDIA = 3)] = "WIKIPEDIA"),
        (r[(r.FACEBOOK = 4)] = "FACEBOOK"),
        (r[(r.TWITTER = 5)] = "TWITTER"),
        (r[(r.TWITCH = 6)] = "TWITCH"),
        (r[(r.INSTAGRAM = 8)] = "INSTAGRAM"),
        (r[(r.YOUTUBE = 9)] = "YOUTUBE"),
        (r[(r.IPHONE = 10)] = "IPHONE"),
        (r[(r.IPAD = 11)] = "IPAD"),
        (r[(r.ANDROID = 12)] = "ANDROID"),
        (r[(r.STEAM = 13)] = "STEAM"),
        (r[(r.REDDIT = 14)] = "REDDIT"),
        (r[(r.ITCH = 15)] = "ITCH"),
        (r[(r.EPICGAMES = 16)] = "EPICGAMES"),
        (r[(r.GOG = 17)] = "GOG"),
        (r[(r.DISCORD = 18)] = "DISCORD");
    },
    968333: function (e, t, n) {
      e.exports = { button: "button_c6eb7b", buttonSize: "buttonSize_c6eb7b" };
    },
    793834: function (e, t, n) {
      e.exports = {
        reactions: "reactions_d0fc0d",
        reply: "reply_d0fc0d",
        replyHeader: "replyHeader_d0fc0d",
        replyInput: "replyInput_d0fc0d",
        emojiButton: "emojiButton_d0fc0d",
        reaction: "reaction_d0fc0d",
      };
    },
    615934: function (e, t, n) {
      e.exports = { clickable: "clickable_bffa11" };
    },
    684201: function (e, t, n) {
      e.exports = { popout: "popout_e40224" };
    },
    290500: function (e, t, n) {
      e.exports = {
        listeningTimeline: "listeningTimeline_a218d8",
        seekBarContainer: "seekBarContainer_a218d8",
        seekBarFill: "seekBarFill_a218d8",
        timestamp: "timestamp_a218d8",
      };
    },
    765388: function (e, t, n) {
      e.exports = {
        coachtip: "coachtip_e8254e",
        coachtipContent: "coachtipContent_e8254e",
        coachtipInner: "coachtipInner_e8254e",
        coachtipAsset: "coachtipAsset_e8254e",
        coachtipTextContainer: "coachtipTextContainer_e8254e",
      };
    },
    494399: function (e, t, n) {
      e.exports = {
        container: "container_c64476",
        contentTitle: "contentTitle_c64476",
        additionalParticipantBadge: "additionalParticipantBadge_c64476",
        openOnHover: "openOnHover_c64476",
        selected: "selected_c64476",
        infoSection: "infoSection_c64476",
        userSection: "userSection_c64476",
        userName: "userName_c64476",
        facePile: "facePile_c64476",
        facePileItem: "facePileItem_c64476",
        additionalParticipantBadgeText: "additionalParticipantBadgeText_c64476",
        thumbnail: "thumbnail_c64476",
      };
    },
    738127: function (e, t, n) {
      e.exports = {
        popout: "popout_a35965",
        hero: "hero_a35965",
        interactionsContainerHeader: "interactionsContainerHeader_a35965",
        interactionsContainer: "interactionsContainer_a35965",
        emoji: "emoji_a35965",
        toastContainer: "toastContainer_a35965",
        emojiHotrailShareToChannel: "emojiHotrailShareToChannel_a35965",
        inputContainerShareToChannel: "inputContainerShareToChannel_a35965",
        primaryActionPopoutMessageCloseIcon:
          "primaryActionPopoutMessageCloseIcon_a35965",
        shareToChannelButton: "shareToChannelButton_a35965",
        popoutContentHeader: "popoutContentHeader_a35965",
        popoutContentWrapper: "popoutContentWrapper_a35965",
        popoutHeroInner: "popoutHeroInner_a35965",
        popoutThumbnailContainer: "popoutThumbnailContainer_a35965",
        popoutHeroBody: "popoutHeroBody_a35965",
        popoutHeroTextPrimary: "popoutHeroTextPrimary_a35965",
        popoutHeroTextPrimaryShort: "popoutHeroTextPrimaryShort_a35965",
        popoutHeroTextSecondary: "popoutHeroTextSecondary_a35965",
        popoutHeaderIcons: "popoutHeaderIcons_a35965",
        popoutUserContainer: "popoutUserContainer_a35965",
        popoutUsername: "popoutUsername_a35965",
        streamingPopoutHeader: "streamingPopoutHeader_a35965",
        streamingPopoutHeaderText: "streamingPopoutHeaderText_a35965",
        streamingPopoutPreviewContainer:
          "streamingPopoutPreviewContainer_a35965",
        streamingPopoutImg: "streamingPopoutImg_a35965",
        voiceChannelPopoutReactorHeader:
          "voiceChannelPopoutReactorHeader_a35965",
        voiceChannelPopoutReactorChannel:
          "voiceChannelPopoutReactorChannel_a35965",
        voiceChannelName: "voiceChannelName_a35965",
        voiceChannelGuildIcon: "voiceChannelGuildIcon_a35965",
        voiceChannelAdditionalParticipants:
          "voiceChannelAdditionalParticipants_a35965",
        primaryActionPopoutDivider: "primaryActionPopoutDivider_a35965",
        iconButton: "iconButton_a35965",
        primaryActionPopoutActionButtons:
          "primaryActionPopoutActionButtons_a35965",
        hiddenButRenderedInputField: "hiddenButRenderedInputField_a35965",
        secondaryButton: "secondaryButton_a35965",
        secondaryText: "secondaryText_a35965",
        primaryButton: "primaryButton_a35965",
        popoutStackedAvatar: "popoutStackedAvatar_a35965",
        popoutBlockedWarningIcon: "popoutBlockedWarningIcon_a35965",
        popoutTextPrimary: "popoutTextPrimary_a35965",
        popoutTextSecondary: "popoutTextSecondary_a35965",
        streamingPopoutHero: "streamingPopoutHero_a35965",
        streamCTA: "streamCTA_a35965",
        maybeClickable: "maybeClickable_a35965",
      };
    },
    301698: function (e, t, n) {
      e.exports = { menuIcon: "menuIcon_aa0ae7" };
    },
    704108: function (e, t, n) {
      e.exports = { loadingSpinner: "loadingSpinner_f2635d" };
    },
    832923: function (e, t, n) {
      e.exports = { container: "container_b11148" };
    },
    522840: function (e, t, n) {
      e.exports = { fallback: "fallback_fad32c", spacer: "spacer_fad32c" };
    },
    501345: function (e, t, n) {
      e.exports = {
        profileEntryCard: "profileEntryCard_f1257c",
        reactions: "reactions_f1257c",
        avatar: "avatar_f1257c",
        playerInfo: "playerInfo_f1257c",
      };
    },
    51527: function (e, t, n) {
      e.exports = {
        row: "row_e881fc",
        column: "column_e881fc",
        gapXs: "gapXs_e881fc",
        gapSm: "gapSm_e881fc",
        gapMd: "gapMd_e881fc",
        gapLg: "gapLg_e881fc",
        clickable: "clickable_e881fc",
        content: "content_e881fc",
        gameProfileModal: "gameProfileModal_e881fc",
        gameArtHero: "gameArtHero_e881fc",
        coverArtRow: "coverArtRow_e881fc",
        overflowMenu: "overflowMenu_e881fc",
        headerInfo: "headerInfo_e881fc",
        logoWrapper: "logoWrapper_e881fc",
        logo: "logo_e881fc",
        gameDetails: "gameDetails_e881fc",
        gameBadge: "gameBadge_e881fc",
        newBadge: "newBadge_e881fc",
        gameIcon: "gameIcon_e881fc",
        mainContent: "mainContent_e881fc",
        sidebar: "sidebar_e881fc",
        sections: "sections_e881fc",
        sectionHeader: "sectionHeader_e881fc",
      };
    },
    825718: function (e, t, n) {
      e.exports = {
        linkIcon: "linkIcon_bb1ae6",
        linkAnchor: "linkAnchor_bb1ae6",
        tooltip: "tooltip_bb1ae6",
        tooltipContent: "tooltipContent_bb1ae6",
      };
    },
    133512: function (e, t, n) {
      e.exports = {
        gameProfileMediaSmall:
          "gameProfileMediaSmall_f5a23b gameProfileMedia_f5a23b",
        imageScroller: "imageScroller_f5a23b",
        gameArtwork: "gameArtwork_f5a23b",
        gameProfileMediaLarge:
          "gameProfileMediaLarge_f5a23b gameProfileMedia_f5a23b",
        imageClickable: "imageClickable_f5a23b",
        gameArtworkFocusRing: "gameArtworkFocusRing_f5a23b",
        mediaOverlay: "mediaOverlay_f5a23b",
        gradientLeft: "gradientLeft_f5a23b gradient_f5a23b",
        gradientRight: "gradientRight_f5a23b gradient_f5a23b",
        arrowClickable: "arrowClickable_f5a23b",
        arrow: "arrow_f5a23b",
        mediaModal: "mediaModal_f5a23b",
      };
    },
    268236: function (e, t, n) {
      e.exports = {
        friends: "friends_d8cab0",
        emptyState: "emptyState_d8cab0 friends_d8cab0",
        fadedEntries: "fadedEntries_d8cab0",
        expandEntriesButton: "expandEntriesButton_d8cab0",
      };
    },
    479537: function (e, t, n) {
      e.exports = {
        inviteInfo: "inviteInfo_c2c033",
        guildIcon: "guildIcon_c2c033",
      };
    },
    796805: function (e, t, n) {
      e.exports = {
        similarGames: "similarGames_bd82e2",
        similarGameImageClickable:
          "similarGameImageClickable_bd82e2 similarGameImageWrapper_bd82e2",
        similarGameImage: "similarGameImage_bd82e2",
        loadingArtwork:
          "loadingArtwork_bd82e2 fallbackImage similarGameImageWrapper_bd82e2",
        loadingHeading: "loadingHeading_bd82e2",
      };
    },
    110367: function (e, t, n) {
      e.exports = { platforms: "platforms_a8723c" };
    },
    445524: function (e, t, n) {
      e.exports = {
        image: "image_ed81cc",
        emptyPreviewContainer: "emptyPreviewContainer_ed81cc",
        emptyPreviewImage: "emptyPreviewImage_ed81cc",
        emptyPreviewText: "emptyPreviewText_ed81cc",
      };
    },
    835777: function (e, t, n) {
      e.exports = {
        gameTitle: "gameTitle_cf6db7",
        gameTitleContainer: "gameTitleContainer_cf6db7",
        emptyStateImage: "emptyStateImage_cf6db7",
      };
    },
    211494: function (e, t, n) {
      e.exports = {
        innerContainer: "innerContainer_f62934",
        rankText: "rankText_f62934",
      };
    },
    416405: function (e, t, n) {
      e.exports = { container: "container_c5a4ce", border: "border_c5a4ce" };
    },
    519817: function (e, t, n) {
      e.exports = {
        slide: "slide_f97a12",
        scaleDown: "scaleDown_f97a12",
        contain: "contain_f97a12",
      };
    },
    264699: function (e, t, n) {
      e.exports = {
        container: "container_bdea70",
        slotsContainer: "slotsContainer_bdea70",
        slots: "slots_bdea70",
        slotsWide: "slotsWide_bdea70",
        slot: "slot_bdea70",
        emoji: "emoji_bdea70",
        tooltipContainer: "tooltipContainer_bdea70",
        emojiItemDisabled: "emojiItemDisabled_bdea70",
        animatedPicker: "animatedPicker_bdea70",
        animatedPickerTall: "animatedPickerTall_bdea70",
        emojiPickerHeader: "emojiPickerHeader_bdea70",
        emojiPickerHeaderExpanded: "emojiPickerHeaderExpanded_bdea70",
        dropDownContainer: "dropDownContainer_bdea70",
        dropDown: "dropDown_bdea70",
        dropDownOpen: "dropDownOpen_bdea70",
      };
    },
    908860: function (e, t, n) {
      e.exports = {
        container: "container_a1db3b",
        iconContainer: "iconContainer_a1db3b",
        icon: "icon_a1db3b",
        foreground: "foreground_a1db3b",
        avatarSize: "avatarSize_a1db3b",
        emptyUser: "emptyUser_a1db3b",
        avatarMasked: "avatarMasked_a1db3b avatar_a1db3b",
        moreUsers: "moreUsers_a1db3b",
      };
    },
    579861: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=91138bfdc2b980d158f8.js.map
