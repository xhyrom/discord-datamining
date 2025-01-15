"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72684"],
  {
    966390: function (e, t, n) {
      n(47120), n(789020);
      var r = n(481060),
        i = n(570140),
        a = n(430742),
        l = n(904245),
        o = n(166459),
        s = n(531643),
        c = n(881052),
        d = n(673750),
        u = n(141795),
        m = n(476326),
        p = n(680287),
        g = n(247206),
        f = n(539573),
        h = n(786761),
        x = n(3148),
        _ = n(48854),
        E = n(785359),
        I = n(79390),
        v = n(623292),
        C = n(807092),
        A = n(467798),
        S = n(703558),
        b = n(117530),
        j = n(630388),
        T = n(226351),
        N = n(981631),
        P = n(388032);
      async function M(e) {
        var t, n, r;
        let u,
          {
            channelId: m,
            uploads: M,
            draftType: y,
            parsedMessage: L,
            options: O = {},
            raiseEndpointErrors: R = !1,
          } = e,
          w = new p.Z(N.ANM.MESSAGES(m)),
          k = new T.o(),
          D = {
            content: "",
            nonce: "",
            channel_id: m,
            type: N.uaV.DEFAULT,
            sticker_ids: null == O ? void 0 : O.stickerIds,
            poll: null == O ? void 0 : O.poll,
          };
        null != L && (D.content = null == L ? void 0 : L.content),
          null != C.Z.getPendingReply(m) &&
            ((D.type = N.uaV.REPLY),
            (D.message_reference = O.messageReference),
            (D.allowed_mentions = O.allowedMentions),
            (0, v.A6)(m));
        let [G, Z] = (0, A.Z)(D.content);
        G &&
          ((D.content = Z),
          (D.flags = (0, j.pj)(
            null !== (t = D.flags) && void 0 !== t ? t : 0,
            N.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let K = null !== (n = O.nonce) && void 0 !== n ? n : (0, _.r)(),
          U = (0, x.ZP)({
            channelId: m,
            content: D.content,
            tts: null !== (r = null == L ? void 0 : L.tts) && void 0 !== r && r,
            type: D.type,
            messageReference: D.message_reference,
            flags: D.flags,
            nonce: K,
            poll: (0, I.x9)(O.poll),
          });
        return (
          ((D.nonce = K),
          w.on("start", (e) => {
            (u = (0, h.e5)({ ...U, id: e.id })),
              i.Z.dispatch({
                type: "UPLOAD_START",
                channelId: m,
                file: e,
                message: u,
                uploader: w,
              });
          }),
          w.on("progress", (e) => {
            i.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: m, file: e });
          })),
          w.on("error", (e, t, n, r) => {
            if (
              (i.Z.dispatch({
                type: "UPLOAD_FAIL",
                channelId: m,
                file: e,
                messageRecord: u,
              }),
              (0, E.x)({
                fileItems: e.items,
                failureCode: t,
                errorMessage: null == r ? void 0 : r.msg,
              }),
              t === N.evJ.EXPLICIT_CONTENT)
            ) {
              l.Z.sendExplicitMediaClydeError(
                m,
                null == n ? void 0 : n.attachments,
                g.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (t === N.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: t, message: null == n ? void 0 : n.message },
                r =
                  null == u
                    ? null
                    : { type: d.$V.SEND, message: { ...u, channelId: m } };
              (0, s.openUploadError)({
                title: P.intl.string(P.t.B3vFdX),
                help: (0, f.uF)(r, e),
              });
              return;
            }
            if (t !== N.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (R)
                k.reject(new c.Hx({ status: t, body: null != n ? n : {} }, t));
              else {
                var p;
                (0, s.openUploadError)({
                  title: P.intl.string(P.t.B3vFdX),
                  help:
                    null !== (p = null == n ? void 0 : n.message) &&
                    void 0 !== p
                      ? p
                      : P.intl.string(P.t.zMEjJi),
                });
              }
              "" !== D.content &&
                "" === S.Z.getDraft(m, y) &&
                a.Z.saveDraft(m, D.content, y),
                0 === b.Z.getUploadCount(m, y) &&
                  o.Z.setUploads({ channelId: m, uploads: M, draftType: y });
            }
          }),
          w.on("complete", (e, t) => {
            i.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: m,
              file: e,
              aborted: w._aborted,
              messageRecord: t,
            });
          }),
          await w.uploadFiles(M, D),
          k.resolve(),
          k.promise
        );
      }
      t.Z = {
        instantBatchUpload: function (e) {
          let {
              channelId: t,
              files: n,
              draftType: r,
              isThumbnail: i = !1,
              filesMetadata: a = [],
            } = e,
            l = Array.from(n).map((e, n) => {
              let r = null != a ? a[n] : {};
              return new u.n(
                { file: e, platform: m.ow.WEB, isThumbnail: i, ...r },
                t,
              );
            });
          M({ channelId: t, uploads: l, draftType: r });
        },
        upload: function e(t) {
          let {
              channelId: n,
              file: o,
              draftType: c,
              message: d,
              hasSpoiler: u,
              filename: m,
            } = t,
            f = { content: "", tts: !1, hasSpoiler: u, filename: m };
          if (null != d) {
            (f.content = d.content),
              (f.tts = d.tts),
              (f.channel_id = d.channel_id);
            let e = C.Z.getPendingReply(n);
            if (null != e) {
              let t = l.Z.getSendMessageOptionsForReply(e);
              (f.type = N.uaV.REPLY),
                (f.message_reference = t.messageReference),
                (f.allowed_mentions = t.allowedMentions),
                (0, v.A6)(n);
            }
          }
          let h = new p.Z(N.ANM.MESSAGES(n));
          h.on("start", (e) => {
            i.Z.dispatch({
              type: "UPLOAD_START",
              channelId: n,
              file: e,
              uploader: h,
            });
          }),
            h.on("progress", (e) => {
              i.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: n, file: e });
            }),
            h.on("error", (t, u, m) => {
              if (
                (i.Z.dispatch({ type: "UPLOAD_FAIL", channelId: n, file: t }),
                (0, E.x)({ fileItems: t.items, failureCode: u }),
                u === N.evJ.EXPLICIT_CONTENT)
              ) {
                l.Z.sendExplicitMediaClydeError(
                  n,
                  null == m ? void 0 : m.attachments,
                  g.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, s.openUploadError)({
                title: P.intl.string(P.t.B3vFdX),
                help: P.intl.format(P.t.gIlRx8, {
                  onClick: () => {
                    (0, r.closeModal)(s.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: n, file: o, draftType: c, message: d });
                  },
                }),
              }),
                "" !== f.content &&
                  "" === S.Z.getDraft(n, c) &&
                  a.Z.saveDraft(n, f.content, c);
            }),
            h.on("complete", (e) => {
              i.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: n, file: e });
            }),
            h.upload(o, f);
        },
        uploadFiles: M,
        cancel(e) {
          i.Z.dispatch({ type: "UPLOAD_CANCEL_REQUEST", file: e }),
            null != e.draftContent &&
              null != e.channelId &&
              "" === S.Z.getDraft(e.channelId, S.d.ChannelMessage) &&
              i.Z.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: S.d.ChannelMessage,
              });
        },
      };
    },
    680287: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(653041);
      var r = n(544891),
        i = n(881052),
        a = n(687294),
        l = n(476326),
        o = n(861990),
        s = n(388032);
      class c extends a.Z {
        async uploadFiles(e, t) {
          let { addFilesTo: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super.upload({ name: s.intl.string(s.t.jfKTen) }, t, e);
          let r = new AbortController();
          try {
            if (((this.files = e), this._aborted)) return;
            if (
              (this._handleStart(() => r.abort()),
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
            return await this._createMessage(r.signal, t, n);
          } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
          }
        }
        async _createMessage(e, t, n) {
          let a;
          let s = [];
          this.files.forEach((e, t) => {
            let n = (0, o.B)(e, t);
            e.item.platform === l.ow.WEB && s.push({ ...n });
          }),
            (a =
              null != n && null != t
                ? this._addAttachmentsToPayload(t, n, s)
                : { ...t, attachments: s });
          let c = { url: this._url, body: a, signal: e, rejectWithError: !1 },
            d = "POST" === this._method ? r.tn.post : r.tn.patch;
          try {
            let e = await d(c);
            return this._handleComplete(e.body), e.body;
          } catch (e) {
            var u;
            if (this._raiseEndpointErrors) throw new i.Hx(e);
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
          return s;
        },
      });
      var r = n(200651),
        i = n(120356),
        a = n.n(i),
        l = n(481060),
        o = n(421178);
      function s(e) {
        let { className: t, onClick: n, ...i } = e,
          s = (0, r.jsx)(l.Clickable, {
            ...i,
            className: a()(null != n && o.clickable, t),
            onClick: n,
          });
        return null == n ? (0, r.jsx)(l.BlockInteractions, { children: s }) : s;
      }
    },
    91907: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(200651),
        i = n(192379),
        a = n(793030),
        l = n(256139),
        o = n(866040);
      function s(e) {
        let {
            user: t,
            text: n,
            channel: s,
            textClassName: c,
            onPopoutClosed: d,
          } = e,
          u = (0, i.useMemo)(() => [t], [t]);
        return (0, r.jsx)(o.Z, {
          participants: u,
          channel: s,
          onPopoutClosed: d,
          children: (e) =>
            (0, r.jsx)(l.Z, {
              ...e,
              tag: "span",
              children: (0, r.jsx)(a.xv, {
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
          return f;
        },
      }),
        n(411104);
      var r = n(200651),
        i = n(192379),
        a = n(442837),
        l = n(481060),
        o = n(239091),
        s = n(751688),
        c = n(184301),
        d = n(347475),
        u = n(210887),
        m = n(5192),
        p = n(152363);
      function g(e) {
        let { participants: t, channel: i } = e;
        return (0, r.jsx)(l.Scroller, {
          className: p.popout,
          children: t.map((e) =>
            (0, r.jsx)(
              s.Z,
              {
                guildId: null == i ? void 0 : i.guild_id,
                user: e,
                nick: m.ZP.getNickname(
                  null == i ? void 0 : i.guild_id,
                  null == i ? void 0 : i.id,
                  e,
                ),
                onContextMenu: (t) => {
                  (0, o.jW)(t, async () => {
                    let { default: t } = await Promise.all([
                      n.e("79695"),
                      n.e("69220"),
                      n.e("76747"),
                    ]).then(n.bind(n, 881351));
                    return (n) => (0, r.jsx)(t, { ...n, user: e });
                  });
                },
              },
              e.id,
            ),
          ),
        });
      }
      function f(e) {
        let { children: t, participants: n, channel: o, onPopoutClosed: s } = e,
          m = (0, a.e7)([u.Z], () => u.Z.theme),
          p = 1 === n.length ? n[0] : null,
          f = (0, i.useCallback)(
            (e) => {
              if (null != p)
                return (0, r.jsx)(d.Z, {
                  ...e,
                  closePopout: () => {
                    e.closePopout(), null == s || s();
                  },
                  userId: p.id,
                  guildId: null == o ? void 0 : o.guild_id,
                  channelId: null == o ? void 0 : o.id,
                });
              if (null != n)
                return (0, r.jsx)(g, { participants: n, channel: o });
              throw Error("One of participant or participants is required");
            },
            [o, s, n, p],
          );
        return (0, r.jsx)(l.ThemeContextProvider, {
          theme: m,
          children: (0, r.jsx)(l.Popout, {
            renderPopout: f,
            preload: () =>
              null != p
                ? (0, c.Z)(p, {
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
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        a = n(653303);
      function l(e) {
        let { onClick: t, Icon: n, "aria-label": l } = e,
          o = (0, i.useToken)(
            i.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          s = (0, r.jsx)(n, {
            color: o.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == t
          ? (0, r.jsx)("div", {
              className: a.container,
              "aria-label": l,
              children: s,
            })
          : (0, r.jsx)(i.Tooltip, {
              text: l,
              children: (e) =>
                (0, r.jsx)(i.Clickable, {
                  className: a.container,
                  ...e,
                  onClick: t,
                  children: s,
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
      var r = n(544891),
        i = n(570140),
        a = n(881052),
        l = n(981631);
      let o = async (e) => {
        try {
          var t;
          let n = await r.tn.get({
              url: l.ANM.SIMILAR_GAMES(e),
              rejectWithError: !1,
            }),
            a = (
              null !== (t = n.body.similar_games) && void 0 !== t ? t : []
            ).filter((t) => t !== e);
          i.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: a,
          });
        } catch (e) {
          throw new a.Hx(e);
        }
      };
    },
    839392: function (e, t, n) {
      var r,
        i,
        a,
        l,
        o = n(442837),
        s = n(570140);
      let c = {},
        d = {};
      class u extends (l = o.ZP.Store) {
        getSimilarGames(e) {
          return c[e];
        }
        getSimilarGamesError(e) {
          return d[e];
        }
      }
      (a = "GameProfileStore"),
        (i = "displayName") in (r = u)
          ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = a),
        (t.Z = new u(s.Z, {
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
          return f;
        },
      }),
        n(47120);
      var r = n(192379),
        i = n(392711),
        a = n.n(i),
        l = n(876215),
        o = n(442837),
        s = n(146282),
        c = n(26033),
        d = n(897674),
        u = n(709054),
        m = n(206583);
      let p = new Set([l.s.PLAYED_GAME, l.s.LAUNCHED_ACTIVITY]),
        g = (e) => p.has(e.content_type);
      function f(e) {
        let { entries: t } = (function () {
          let e = (0, d.Z)(m.YN.GAME_PROFILE_FEED),
            t = (0, d.Z)(m.YN.GLOBAL_FEED),
            n = r.useMemo(
              () =>
                a()(t)
                  .unionBy(e, (e) => e.id)
                  .filter(g)
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
            requestId: (0, o.e7)([s.Z], () =>
              s.Z.getFeedRequestId(m.YN.GAME_PROFILE_FEED),
            ),
            entries: n,
          };
        })();
        return r.useMemo(
          () =>
            null == t
              ? void 0
              : t.filter(
                  (t) =>
                    ((0, c.dX)(t) || (0, c.Mq)(t)) &&
                    t.extra.application_id === e,
                ),
          [t, e],
        );
      }
    },
    426482: function (e, t, n) {
      n.d(t, {
        C: function () {
          return m;
        },
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var r,
        i,
        a = n(200651),
        l = n(192379),
        o = n(120356),
        s = n.n(o),
        c = n(793030),
        d = n(388032),
        u = n(415069);
      function m(e) {
        var t;
        let { game: n, application: r, size: i, className: o } = e,
          [m, p] = l.useState(!1),
          g =
            null !== (t = null == r ? void 0 : r.name) && void 0 !== t
              ? t
              : n.name,
          f = null != n.firstReleaseDate ? new Date(n.firstReleaseDate) : null;
        return null == n.coverImageUrl || m
          ? (0, a.jsxs)("div", {
              className: s()(u.fallback, o),
              children: [
                (0, a.jsx)("div", { className: u.spacer }),
                (0, a.jsx)(c.xv, {
                  variant: 1 === i ? "text-md/medium" : "text-xs/medium",
                  color: "always-white",
                  lineClamp: 1 === i ? 4 : 3,
                  children: g,
                }),
                (0, a.jsx)("div", { className: u.spacer }),
                (0, a.jsx)(c.xv, {
                  variant: 1 === i ? "text-sm/normal" : "text-xxs/normal",
                  color: "always-white",
                  children:
                    null != f
                      ? "(".concat(null == f ? void 0 : f.getFullYear(), ")")
                      : null,
                }),
              ],
            })
          : (0, a.jsx)("img", {
              className: o,
              src: n.coverImageUrl,
              alt: d.intl.formatToPlainString(d.t["3ev90d"], { game: g }),
              onError: () => {
                p(!0);
              },
              onLoad: () => {
                p(!1);
              },
            });
      }
      ((i = r || (r = {}))[(i.SMALL = 0)] = "SMALL"),
        (i[(i.LARGE = 1)] = "LARGE");
    },
    383895: function (e, t, n) {
      var r = n(200651),
        i = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(442837),
        s = n(481060),
        c = n(178762),
        d = n(91140),
        u = n(297781),
        m = n(592125),
        p = n(944486),
        g = n(594174),
        f = n(5192),
        h = n(810568),
        x = n(388032),
        _ = n(771282),
        E = n(458170);
      t.Z = (e) => {
        let { entry: t, viewId: n, officialGuildId: a, onClose: I } = e,
          v = (0, o.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getChannelId())),
          C = (0, o.e7)([g.default], () => g.default.getUser(t.author_id)),
          { nick: A, avatar: S } = i.useMemo(() => {
            let e =
              null == C
                ? void 0
                : C.getAvatarURL(null == v ? void 0 : v.guild_id, 48, !1);
            return {
              nick: f.ZP.getName(
                null == v ? void 0 : v.guild_id,
                null == v ? void 0 : v.id,
                C,
              ),
              avatar: e,
            };
          }, [C, v]);
        return null == C
          ? null
          : (0, r.jsx)(s.Popout, {
              position: "right",
              renderPopout: (e) => {
                let { closePopout: i, updatePosition: l } = e;
                return (0, r.jsx)(c.J, {
                  entry: t,
                  closePopout: i,
                  updatePopoutPosition: l,
                  onReaction: () => {
                    (0, h.UE)({
                      action: h.as.SendMessageUser,
                      applicationId: t.extra.application_id,
                      gameName: t.extra.game_name,
                      recipientUserId: t.author_id,
                      viewId: n,
                      officialGuildId: a,
                    }),
                      I(),
                      i();
                  },
                  onUserPopoutClosed: () => i(),
                  disableGameProfileLinks: !0,
                });
              },
              positionKey: "game-profile-entry-".concat(t.id),
              onRequestOpen: () => {
                (0, h.UE)({
                  action: h.as.ClickMessageUser,
                  applicationId: t.extra.application_id,
                  gameName: t.extra.game_name,
                  recipientUserId: t.author_id,
                  viewId: n,
                  officialGuildId: a,
                });
              },
              children: (e) =>
                (0, r.jsx)(s.Clickable, {
                  ...e,
                  className: _.profileEntryCard,
                  children: (0, r.jsx)(s.FocusRing, {
                    offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    children: (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("img", {
                          className: _.avatar,
                          src: S,
                          alt: x.intl.formatToPlainString(x.t.IzVXxc, {
                            userName: A,
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: l()(_.playerInfo),
                          children: (0, r.jsxs)("div", {
                            className: l()(E.column, E.gapXs),
                            children: [
                              (0, r.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                lineClamp: 1,
                                children: A,
                              }),
                              (0, r.jsx)(u.Gk, {
                                location: u.Gt.GAME_PROFILE,
                                children: d.W.map((e, n) =>
                                  (0, r.jsx)(e, { entry: t }, n),
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: _.reactions,
                          children: (0, r.jsx)(s.ArrowAngleLeftUpIcon, {
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
      var r = n(200651),
        i = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(913527),
        s = n.n(o),
        c = n(705512),
        d = n(442837),
        u = n(481060),
        m = n(224706),
        p = n(493773),
        g = n(835473),
        f = n(168551),
        h = n(485267),
        x = n(561308),
        _ = n(669764),
        E = n(706454),
        I = n(768581),
        v = n(814225),
        C = n(709054),
        A = n(810568),
        S = n(998058),
        b = n(839392),
        j = n(567409),
        T = n(774073),
        N = n(426482),
        P = n(715318),
        M = n(38516),
        y = n(891949),
        L = n(252547),
        O = n(169895),
        R = n(131033),
        w = n(296768),
        k = n(978313),
        D = n(206583),
        G = n(388032),
        Z = n(458170);
      let K = () =>
        (0, r.jsxs)("div", {
          className: Z.gameBadge,
          children: [
            (0, r.jsx)(u.FireIcon, { size: "xxs" }),
            (0, r.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: G.intl.string(G.t.kAlUs7),
            }),
          ],
        });
      function U(e) {
        var t;
        let { detectedGame: n, application: a, entries: o, viewId: d } = e,
          m = i.useMemo(
            () => (null == n ? void 0 : n.genres.map(v.P3).join(", ")),
            [n],
          ),
          p = i.useMemo(() => {
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
          g = null == a ? void 0 : a.getIconURL(160, I.$k ? "webp" : "png"),
          f = C.default.extractTimestamp(a.id),
          h = s()().diff(s()(f), "days") <= D.G,
          _ = o.some((e) => (0, x.ig)(e) === c.o.GLOBAL),
          E =
            null !== (t = n.name) && void 0 !== t
              ? t
              : null == a
                ? void 0
                : a.name;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: l()(Z.gameArtHero),
              style: { backgroundImage: 'url("'.concat(p, '")') },
            }),
            (0, r.jsxs)("div", {
              className: l()(Z.content, Z.column, Z.gapLg, Z.headerInfo),
              children: [
                (0, r.jsxs)("div", {
                  className: Z.coverArtRow,
                  children: [
                    (0, r.jsx)("div", {
                      className: Z.logoWrapper,
                      children: (0, r.jsx)(N.C, {
                        game: n,
                        application: a,
                        className: Z.logo,
                        size: N.Z.LARGE,
                      }),
                    }),
                    (0, r.jsx)(P.Z, {
                      applicationId: a.id,
                      viewId: d,
                      className: Z.overflowMenu,
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: l()(Z.row, Z.gapSm, Z.gameDetails),
                  children: (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)(u.Heading, {
                        variant: "heading-xl/bold",
                        children: E,
                      }),
                      (0, r.jsxs)("div", {
                        className: l()(Z.row, Z.gapSm),
                        children: [
                          null != g &&
                            (0, r.jsx)("img", {
                              className: Z.gameIcon,
                              src: g,
                              height: 16,
                              alt: G.intl.formatToPlainString(G.t["nh+jWl"], {
                                game: E,
                              }),
                            }),
                          (0, r.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            children: m,
                          }),
                          h &&
                            (0, r.jsx)(u.Text, {
                              variant: "eyebrow",
                              className: Z.newBadge,
                              children: G.intl.string(G.t.y2b7CA),
                            }),
                          _ &&
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)(u.Text, {
                                  variant: "text-sm/medium",
                                  children: " \xb7 ",
                                }),
                                (0, r.jsx)(K, {}),
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
      function H(e) {
        var t;
        let {
          detectedGame: n,
          application: i,
          entries: a,
          officialGuildInvite: l,
          similarGames: o,
          similarGamesError: s,
          onClose: c,
          viewId: d,
          trackAction: u,
        } = e;
        return (0, r.jsxs)("div", {
          className: Z.sections,
          children: [
            (0, r.jsx)(L.Z, {
              entries: a,
              viewId: d,
              officialGuildId:
                null == l
                  ? void 0
                  : null === (t = l.guild) || void 0 === t
                    ? void 0
                    : t.id,
              onClose: c,
            }),
            (0, r.jsx)(y.Z, { detectedGame: n, trackAction: u }),
            (0, r.jsx)(w.Z, {
              applicationId: i.id,
              onClose: c,
              trackAction: u,
              similarGames: o,
              similarGamesError: s,
            }),
          ],
        });
      }
      function B(e) {
        let {
          detectedGame: t,
          setOfficialGuildInvite: n,
          trackAction: i,
          onClose: a,
        } = e;
        return (0, r.jsxs)("div", {
          className: l()(Z.sidebar, Z.column, Z.gapLg),
          children: [
            (0, r.jsx)(u.Heading, {
              variant: "heading-md/bold",
              children: G.intl.string(G.t.CI0vSE),
            }),
            (0, r.jsxs)("div", {
              className: Z.sections,
              children: [
                (0, r.jsx)(k.Z, { detectedGame: t, trackAction: i }),
                (0, r.jsx)(O.Z, {
                  detectedGame: t,
                  trackClick: i,
                  onInviteResolved: n,
                  closeModal: a,
                }),
                (0, r.jsx)(M.Z, { detectedGame: t, trackClick: i }),
                (0, r.jsx)(R.Z, { detectedGame: t }),
              ],
            }),
          ],
        });
      }
      let F = (e) => e.filter(T.z6).slice(0, 5);
      t.default = (e) => {
        var t;
        let {
            applicationId: n,
            source: a,
            sourceUserId: o,
            transitionState: s,
            onClose: c,
          } = e,
          { clientThemesClassName: I } = (0, f.ZP)(),
          v = (0, d.e7)([E.default], () => E.default.locale),
          C = i.useMemo(() => (0, A.fP)(), []),
          T = (0, d.Wu)([b.Z], () => {
            var e;
            return (
              null !== (e = b.Z.getSimilarGames(n)) && void 0 !== e ? e : []
            ).slice(0, 25);
          }),
          [N, P] = i.useState(null),
          M = (0, j.Ns)(n),
          [y, L] = i.useState(null),
          O = (0, g.q)(n),
          R = (0, d.e7)([_.Z], () => _.Z.getGame(n)),
          w =
            null !== (t = null == R ? void 0 : R.name) && void 0 !== t
              ? t
              : null == O
                ? void 0
                : O.name,
          k = (e, t) => {
            var r;
            (0, A.UE)({
              gameName: null != w ? w : "",
              applicationId: n,
              action: e,
              similarGameId: t,
              viewId: C,
              officialGuildId:
                null == y
                  ? void 0
                  : null === (r = y.guild) || void 0 === r
                    ? void 0
                    : r.id,
            });
          };
        return ((0, p.Z)(() => {
          (0, A.IS)({
            source: a,
            viewId: C,
            applicationId: n,
            gameName: null != w ? w : "",
            authorId: o,
          }),
            (0, h.Jn)();
        }),
        (0, g.Z)(T),
        i.useEffect(() => {
          !v.startsWith("en") &&
            (null == R ? void 0 : R.summaryLocalized) == null &&
            m.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
        }, [n, null == R ? void 0 : R.summaryLocalized, v]),
        i.useEffect(() => {
          (async () => {
            if (0 === T.length) {
              P(null);
              try {
                await (0, S.i)(n);
              } catch (e) {
                P(e);
              }
            }
          })();
        }, [n, T]),
        (0, p.Z)(() => () => {
          var e;
          let t = Date.now(),
            r = M.map((e) => {
              let n = (0, x.kr)(e) ? (0, x.T_)(e, t) : (0, x.GL)(e, v);
              return JSON.stringify({
                item_id: e.id,
                trait: e.traits,
                time_played: n,
              });
            });
          (0, A.wz)({
            viewId: C,
            applicationId: n,
            gameName: null != w ? w : "",
            playedFriendIds: M.map((e) => e.author_id),
            playedFriendsData: r,
            similarGames: F(T),
            officialGuildId:
              null == y
                ? void 0
                : null === (e = y.guild) || void 0 === e
                  ? void 0
                  : e.id,
          });
        }),
        null == R || null == O)
          ? null
          : (0, r.jsx)(u.ModalRoot, {
              transitionState: s,
              size: u.ModalSize.DYNAMIC,
              className: l()(I, Z.gameProfileModal),
              children: (0, r.jsxs)(u.Scroller, {
                orientation: "auto",
                children: [
                  (0, r.jsx)(U, {
                    detectedGame: R,
                    application: O,
                    entries: M,
                    viewId: C,
                    trackAction: k,
                  }),
                  (0, r.jsx)(u.HeadingLevel, {
                    children: (0, r.jsxs)("div", {
                      className: l()(Z.content, Z.mainContent),
                      children: [
                        (0, r.jsx)(H, {
                          detectedGame: R,
                          application: O,
                          entries: M,
                          officialGuildInvite: y,
                          similarGames: T,
                          similarGamesError: N,
                          onClose: c,
                          viewId: C,
                          trackAction: k,
                        }),
                        (0, r.jsx)(B, {
                          detectedGame: R,
                          setOfficialGuildInvite: L,
                          trackAction: k,
                          onClose: c,
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
      var r = n(200651);
      n(192379);
      var i = n(481060),
        a = n(239091),
        l = n(299206),
        o = n(858042),
        s = n(388032);
      function c(e) {
        let { applicationId: t, className: n, viewId: c } = e,
          d = (0, l.Z)({ id: t, label: s.intl.string(s.t["FfCL+/"]) }),
          u = (0, o.M)({ applicationId: t, viewId: c });
        return null == d && null == u
          ? null
          : (0, r.jsx)(i.Popout, {
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(i.Menu, {
                  navId: "game-profile-context",
                  onClose: () => {
                    (0, a.Zy)(), t();
                  },
                  "aria-label": s.intl.string(s.t.PNeFgY),
                  onSelect: () => {},
                  children: (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(i.MenuGroup, { children: d }),
                      (0, r.jsx)(i.MenuGroup, { children: u }),
                    ],
                  }),
                });
              },
              children: (e) =>
                (0, r.jsx)(i.Tooltip, {
                  text: s.intl.string(s.t.UKOtz8),
                  children: (t) =>
                    (0, r.jsx)(i.Clickable, {
                      className: n,
                      ...t,
                      ...e,
                      children: (0, r.jsx)(i.MoreHorizontalIcon, {
                        size: "xs",
                        color: i.tokens.colors.WHITE,
                      }),
                    }),
                }),
            });
      }
    },
    38516: function (e, t, n) {
      n(411104);
      var r = n(200651);
      n(192379);
      var i = n(120356),
        a = n.n(i),
        l = n(643872),
        o = n(481060),
        s = n(810568),
        c = n(388032),
        d = n(458170),
        u = n(109191);
      let m = [l.p.OFFICIAL, l.p.TWITTER, l.p.YOUTUBE];
      function p(e) {
        let { website: t, trackClick: n } = e,
          {
            action: i,
            icon: a,
            title: d,
          } = (function (e) {
            switch (e.category) {
              case l.p.OFFICIAL:
                return {
                  icon: (0, r.jsx)(o.GlobeEarthIcon, {
                    colorClass: u.linkIcon,
                  }),
                  action: s.as.WebsiteLink,
                  title: c.intl.string(c.t.fOUKvr),
                };
              case l.p.TWITTER:
                return {
                  icon: (0, r.jsx)(o.XNeutralIcon, { colorClass: u.linkIcon }),
                  action: s.as.XLink,
                  title: c.intl.string(c.t["INic4+"]),
                };
              case l.p.YOUTUBE:
                return {
                  action: s.as.YouTubeLink,
                  icon: (0, r.jsx)(o.YoutubeNeutralIcon, {
                    colorClass: u.linkIcon,
                  }),
                  title: c.intl.string(c.t.lNmxbG),
                };
              default:
                throw Error("Unknown IGDB website category");
            }
          })(t);
        return (0, r.jsx)(o.Tooltip, {
          text: t.url,
          tooltipClassName: u.tooltip,
          tooltipContentClassName: u.tooltipContent,
          children: (e) => {
            let { onClick: l, ...s } = e;
            return (0, r.jsx)(o.Anchor, {
              ...s,
              className: u.linkAnchor,
              title: d,
              href: t.url,
              onClick: () => {
                n(i), null == l || l();
              },
              target: "_blank",
              children: a,
            });
          },
        });
      }
      t.Z = function (e) {
        let { detectedGame: t, trackClick: n } = e;
        if (null == t.websites) return null;
        let i = t.websites
          .filter((e) => {
            let { category: t } = e;
            return m.includes(t);
          })
          .sort((e, t) => e.category - t.category);
        return 0 === i.length
          ? null
          : (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)(o.Heading, {
                  className: d.sectionHeader,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: c.intl.string(c.t.Oj3o19),
                }),
                (0, r.jsx)("div", {
                  className: a()(d.row, d.gapMd),
                  children: i.map((e) =>
                    (0, r.jsx)(p, { website: e, trackClick: n }, e.url),
                  ),
                }),
              ],
            });
      };
    },
    891949: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        a = n(481060),
        l = n(341176),
        o = n(312097),
        s = n(810568),
        c = n(388032),
        d = n(458170),
        u = n(946041);
      function m(e) {
        let { detectedGame: t, trackAction: n } = e,
          m = i.useRef(null),
          p = i.useMemo(() => {
            let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [
              ...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })),
              ...e,
            ];
          }, [t.artwork, t.screenshots]),
          g = p.length > 2;
        function f(e) {
          if (null == m.current) return;
          let t = m.current.getScrollerState().scrollLeft;
          m.current.scrollTo({ to: t + 280 * e, animate: !0 });
        }
        return 0 === p.length
          ? null
          : (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)(a.Heading, {
                  className: d.sectionHeader,
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: c.intl.string(c.t["bNdK5+"]),
                }),
                (0, r.jsxs)("div", {
                  className: g
                    ? u.gameProfileMediaSmall
                    : u.gameProfileMediaLarge,
                  children: [
                    (0, r.jsx)(a.AdvancedScrollerNone, {
                      ref: m,
                      className: u.imageScroller,
                      orientation: "horizontal",
                      children: p.map((e, t) =>
                        (0, r.jsx)(
                          a.Clickable,
                          {
                            className: u.imageClickable,
                            focusProps: {
                              offset: 4,
                              ringClassName: u.gameArtworkFocusRing,
                            },
                            onClick: () => {
                              n(s.as.ClickImage),
                                (0, o.K)({
                                  className: u.mediaModal,
                                  items: p,
                                  fit: l.D.SCALE_DOWN,
                                  startingIndex: t,
                                  shouldHideMediaOptions: !0,
                                  shouldAnimateCarousel: !0,
                                  location: "GameProfileMedia",
                                });
                            },
                            children: (0, r.jsx)("img", {
                              src: e.url,
                              className: u.gameArtwork,
                              alt: c.intl.formatToPlainString(c.t.COYYrq, {
                                game: name,
                              }),
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                    g &&
                      (0, r.jsxs)("div", {
                        className: u.mediaOverlay,
                        children: [
                          (0, r.jsx)("div", { className: u.gradientLeft }),
                          (0, r.jsx)(a.Clickable, {
                            className: u.arrowClickable,
                            onClick: () => f(-1),
                            children: (0, r.jsx)(a.ArrowSmallLeftIcon, {
                              className: u.arrow,
                              color: "currentColor",
                            }),
                          }),
                          (0, r.jsx)("div", { className: u.gradientRight }),
                          (0, r.jsx)(a.Clickable, {
                            className: u.arrowClickable,
                            onClick: () => f(1),
                            children: (0, r.jsx)(a.ArrowSmallRightIcon, {
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
          return p;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(793030),
        s = n(481060),
        c = n(383895),
        d = n(388032),
        u = n(458170),
        m = n(218971);
      function p(e) {
        let { entries: t, viewId: n, officialGuildId: a, onClose: p } = e,
          g = t.length > 7,
          [f, h] = i.useState(!1),
          x = i.useMemo(() => t.slice(0, g && !f ? 6 : void 0), [t, g, f]);
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)(o.X6, {
              className: u.sectionHeader,
              variant: "text-md/semibold",
              color: "header-primary",
              children: d.intl.string(d.t.ak8OHh),
            }),
            0 === t.length
              ? (0, r.jsx)(o.xv, {
                  variant: "text-xs/semibold",
                  color: "text-primary",
                  className: m.emptyState,
                  children: d.intl.string(d.t.R5fYVF),
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className: l()(m.friends, { [m.fadedEntries]: g && !f }),
                      children: (0, r.jsx)("div", {
                        className: u.column,
                        children: x.map((e) =>
                          (0, r.jsx)(
                            c.Z,
                            {
                              entry: e,
                              viewId: n,
                              onClose: p,
                              officialGuildId: a,
                            },
                            e.id,
                          ),
                        ),
                      }),
                    }),
                    g &&
                      !f &&
                      (0, r.jsxs)(s.Clickable, {
                        className: m.expandEntriesButton,
                        onClick: () => h(!0),
                        children: [
                          (0, r.jsx)(o.xv, {
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: d.intl.string(d.t.yohc6O),
                          }),
                          (0, r.jsx)(s.ChevronSmallDownIcon, { size: "xs" }),
                        ],
                      }),
                  ],
                }),
          ],
        });
      }
    },
    169895: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(643872),
        s = n(442837),
        c = n(481060),
        d = n(570140),
        u = n(652898),
        m = n(93093),
        p = n(768581),
        g = n(810568),
        f = n(981631),
        h = n(388032),
        x = n(458170),
        _ = n(387828);
      function E(e) {
        let {
            detectedGame: t,
            trackClick: n,
            onInviteResolved: a,
            closeModal: E,
          } = e,
          [I, v] = i.useState(),
          C = (0, s.e7)([m.Z], () => {
            var e, t;
            return (
              (null == I
                ? void 0
                : null === (e = I.guild) || void 0 === e
                  ? void 0
                  : e.id) != null &&
              m.Z.isMember(
                null == I
                  ? void 0
                  : null === (t = I.guild) || void 0 === t
                    ? void 0
                    : t.id,
              )
            );
          }),
          A = i.useMemo(() => {
            var e;
            return null === (e = t.websites) || void 0 === e
              ? void 0
              : e.find((e) => {
                  let { category: t } = e;
                  return t === o.p.DISCORD;
                });
          }, [t.websites]);
        if (
          (i.useEffect(() => {
            let e = async (e) => {
              let t = e.split("/").pop();
              if (null != t) {
                let e = await (0, u.Z)(t);
                !0 !== e.banned &&
                  (v(e.invite), null != e.invite && (null == a || a(e.invite)));
              }
            };
            null != A && e(A.url);
          }, [A, a]),
          null == I ||
            null == I.guild ||
            (!I.guild.features.includes("VERIFIED") &&
              !I.guild.features.includes("PARTNER")))
        )
          return null;
        let S = p.ZP.getGuildIconURL({
          id: I.guild.id,
          icon: I.guild.icon,
          size: 32,
        });
        return (0, r.jsxs)("div", {
          className: x.column,
          children: [
            (0, r.jsx)(c.Heading, {
              className: x.sectionHeader,
              variant: "text-xs/semibold",
              color: "header-secondary",
              children: h.intl.string(h.t.kBDZSE),
            }),
            (0, r.jsxs)("div", {
              className: l()(x.row, x.gapMd),
              children: [
                (0, r.jsx)("img", {
                  className: _.guildIcon,
                  src: S,
                  alt: h.intl.formatToPlainString(h.t.xm6W9P, {
                    guildName: I.guild.name,
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: _.inviteInfo,
                  children: [
                    (0, r.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      children: I.guild.name,
                    }),
                    null != I.approximate_member_count &&
                      (0, r.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        children: h.intl.format(h.t.zRl6XV, {
                          count: I.approximate_member_count,
                        }),
                      }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(c.Button, {
              color: c.ButtonColors.PRIMARY,
              onClick: () => {
                E(),
                  n(g.as.JoinOfficialServer),
                  d.Z.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: I,
                    code: I.code,
                    context: f.IlC.APP,
                  });
              },
              children: C
                ? h.intl.string(h.t.cEnaW1)
                : h.intl.string(h.t.XpeFYm),
            }),
          ],
        });
      }
    },
    221370: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120),
        n(653041);
      var r = n(200651),
        i = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(758713),
        s = n(657707),
        c = n(481060),
        d = n(388032),
        u = n(458170);
      let m = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
      function p(e) {
        let { platform: t, ...n } = e;
        switch (t) {
          case o.z.DESKTOP:
            return (0, r.jsx)(s.pzj, { size: "xs", ...n });
          case o.z.XBOX:
            return (0, r.jsx)(s.Mko, { size: "xs", ...n });
          case o.z.PLAYSTATION:
            return (0, r.jsx)(s.Tsp, { size: "xs", ...n });
          case o.z.NINTENDO:
            return (0, r.jsx)(s.aPH, { size: "xs", ...n });
          default:
            return null;
        }
      }
      function g(e) {
        let { platforms: t } = e;
        return (0, r.jsx)("div", {
          className: l()(u.row, u.gapSm),
          style: { alignItems: "center" },
          children: t.map((e) =>
            (0, r.jsx)(
              c.Tooltip,
              {
                text: (function (e) {
                  switch (e) {
                    case o.z.DESKTOP:
                      return d.intl.string(d.t.KT6uCA);
                    case o.z.XBOX:
                      return d.intl.string(d.t.DDWUJi);
                    case o.z.PLAYSTATION:
                      return d.intl.string(d.t.fzMz2t);
                    case o.z.NINTENDO:
                      return d.intl.string(d.t.AMW8jY);
                    default:
                      return null;
                  }
                })(e),
                children: (t) => (0, r.jsx)(p, { ...t, platform: e }),
              },
              e,
            ),
          ),
        });
      }
      function f(e) {
        let { detectedGame: t, className: n } = e,
          a = i.useMemo(() => {
            let e = new Set(t.platforms),
              n = [...e];
            return (
              !e.has(o.z.DESKTOP) &&
                (e.has(o.z.MACOS) || e.has(o.z.LINUX)) &&
                n.push(o.z.DESKTOP),
              n.filter((e) => m.includes(e))
            );
          }, [t.platforms]);
        return 0 === a.length
          ? null
          : (0, r.jsx)("div", {
              className: l()(u.column, u.gapLg, n),
              children: a.length > 0 && (0, r.jsx)(g, { platforms: a }),
            });
      }
    },
    131033: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(793030),
        a = n(388032),
        l = n(458170);
      function o(e) {
        let { detectedGame: t } = e;
        return 0 === t.publishers.length
          ? null
          : (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)(i.X6, {
                  className: l.sectionHeader,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: a.intl.string(a.t["4Byy/P"]),
                }),
                (0, r.jsx)(i.xv, {
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
          return A;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(392711),
        s = n.n(o),
        c = n(442837),
        d = n(481060),
        u = n(224706),
        m = n(812206),
        p = n(669764),
        g = n(810568),
        f = n(839392),
        h = n(774073),
        x = n(426482),
        _ = n(644941),
        E = n(388032),
        I = n(458170),
        v = n(332634);
      let C = (e) => {
        let { game: t, onClose: n, trackClick: i } = e,
          a = (0, c.e7)([m.Z], () => m.Z.getApplication(t.applicationId));
        return (0, r.jsx)(d.Tooltip, {
          text: t.name,
          children: (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              className: v.similarGameImageClickable,
              onClick: async () => {
                i(g.as.ClickSimilarGame, t.applicationId),
                  (0, d.openModalLazy)(() =>
                    Promise.resolve((e) =>
                      (0, r.jsx)(_.default, {
                        applicationId: t.applicationId,
                        source: g.m1.SimilarGames,
                        ...e,
                      }),
                    ),
                  ),
                  await new Promise((e) => setTimeout(e, 10)),
                  n();
              },
              children: (0, r.jsx)(x.C, {
                game: t,
                application: a,
                className: v.similarGameImage,
                size: x.Z.SMALL,
              }),
            }),
        });
      };
      function A(e) {
        let {
            applicationId: t,
            onClose: n,
            trackAction: a,
            similarGames: o,
            similarGamesError: m,
          } = e,
          g = (0, c.e7)([f.Z, p.Z], () => {
            let e =
                void 0 === f.Z.getSimilarGames(t) &&
                null == f.Z.getSimilarGamesError(t),
              n = o.some((e) => p.Z.isFetching(e));
            return e || n;
          }),
          x = (0, c.Wu)([p.Z], () =>
            o
              .map((e) => p.Z.getGame(e))
              .filter((e) => null != e)
              .filter((e) => (0, h.z6)(e.applicationId))
              .slice(0, 5),
          );
        return (i.useEffect(() => {
          o.length > 0 && u.Z.getDetectableGamesSupplemental([t, ...o]);
        }, [t, o]),
        g && null == m)
          ? (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("div", {
                  className: l()(v.loadingHeading, I.sectionHeader),
                }),
                (0, r.jsx)("div", {
                  className: l()(I.row, I.gapLg),
                  children: s()
                    .range(0, 5)
                    .map((e) =>
                      (0, r.jsx)("div", { className: v.loadingArtwork }, e),
                    ),
                }),
              ],
            })
          : (g || 0 !== x.length) && null == m
            ? (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)(d.Heading, {
                    className: I.sectionHeader,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: E.intl.string(E.t["6rLyQE"]),
                  }),
                  (0, r.jsx)("div", {
                    className: v.similarGames,
                    style: {},
                    children: x.map((e) =>
                      (0, r.jsx)(
                        C,
                        { game: e, onClose: n, trackClick: a },
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
          return x;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(657707),
        s = n(793030),
        c = n(692547),
        d = n(481060),
        u = n(885006),
        m = n(810568),
        p = n(221370),
        g = n(388032),
        f = n(458170),
        h = n(767998);
      function x(e) {
        let { detectedGame: t, trackAction: n } = e,
          [a, x] = i.useState(
            (null == t ? void 0 : t.summaryLocalized) != null,
          ),
          [_, E] = i.useState(!0),
          [I, v] = i.useState(!1),
          C = i.useRef(null),
          { width: A, height: S } = (0, u.Z)();
        return (i.useEffect(() => {
          let e = C.current;
          null != e && v(e.scrollHeight - e.clientHeight > 1 || !_);
        }, [C, A, S, _]),
        null == t.summary)
          ? null
          : (0, r.jsxs)("div", {
              className: l()(f.column, f.gapMd),
              children: [
                null != t.summaryLocalized &&
                  (0, r.jsxs)("div", {
                    className: l()(f.row, f.gapSm),
                    children: [
                      (0, r.jsx)(o.SxY, {
                        color: c.Z.colors.HEADER_SECONDARY,
                        size: "xs",
                      }),
                      (0, r.jsx)(s.xv, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        children: a
                          ? g.intl.format(g.t.aZ2iIi, {
                              onShowOriginal: () => x(!1),
                            })
                          : g.intl.format(g.t["/2ylFx"], {
                              onShowTranslated: () => x(!0),
                            }),
                      }),
                    ],
                  }),
                (0, r.jsx)(s.xv, {
                  ref: C,
                  lineClamp: _ ? 8 : void 0,
                  variant: "text-sm/normal",
                  children: a ? t.summaryLocalized : t.summary,
                }),
                I &&
                  (0, r.jsx)(d.Clickable, {
                    className: f.clickable,
                    onClick: () => {
                      n(_ ? m.as.ShowMore : m.as.ShowLess), E(!_);
                    },
                    children: (0, r.jsx)(s.xv, {
                      variant: "text-sm/semibold",
                      children: _
                        ? g.intl.string(g.t.lBeKY2)
                        : g.intl.string(g.t["6MwJo6"]),
                    }),
                  }),
                (0, r.jsx)(p.Z, { className: h.platforms, detectedGame: t }),
              ],
            });
      }
    },
    341176: function (e, t, n) {
      n.d(t, {
        D: function () {
          return g;
        },
        Z: function () {
          return f;
        },
      });
      var r = n(200651),
        i = n(120356),
        a = n.n(i),
        l = n(524444),
        o = n(52824),
        s = n(956664),
        c = n(589530),
        d = n(591759),
        u = n(124347),
        m = n(80966),
        p = n(598741);
      let g = { DEFAULT: null, CONTAIN: p.contain, SCALE_DOWN: p.scaleDown };
      function f(e) {
        let {
            media: t,
            fit: n = g.DEFAULT,
            obscured: i = !1,
            onContextMenu: f,
          } = e,
          {
            width: h,
            height: x,
            url: _,
            proxyUrl: E,
            alt: I,
            type: v,
            maxWidth: C,
            maxHeight: A,
            ...S
          } = t,
          { width: b, height: j } = (0, s.zp)(
            null != h ? h : 0,
            null != x ? x : 0,
          ),
          T = (0, o.q)({ proxyURL: E, url: _ }),
          N = !(null == h || 0 === h || null == x || 0 === x);
        if ("VIDEO" === v && N && null != E) {
          var P;
          let e = (function (e) {
            let t = d.Z.toURLSafe(e);
            return null == t
              ? null
              : (t.searchParams.append("format", "webp"), t.toString());
          })(E);
          if (null == e) return null;
          let n =
            null !== (P = t.renderLinkComponent) && void 0 !== P ? P : l.iT;
          return (0, r.jsx)(m.Z, {
            ...S,
            src: T,
            width: h,
            height: x,
            maxWidth: b,
            maxHeight: j,
            poster: e,
            naturalWidth: h,
            naturalHeight: x,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: n,
            autoPlay: !i,
            alt: I,
            onContextMenu: f,
          });
        }
        if ("IMAGE" === v)
          return N
            ? (0, r.jsx)(u.ZP, {
                ...S,
                imageClassName: a()(p.slide, n),
                src: T,
                width: h,
                height: x,
                shouldLink: !1,
                maxWidth: b,
                maxHeight: j,
                animated: !i && t.animated,
                autoPlay: !i,
                alt: I,
                zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                onContextMenu: f,
              })
            : (0, r.jsx)("img", {
                src: T,
                alt: I,
                className: a()(p.slide, n),
                onContextMenu: f,
              });
        return null;
      }
    },
    931651: function (e, t, n) {
      n.d(t, {
        $: function () {
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(907040),
        a = n(185923);
      function l(e) {
        let {
          channel: t,
          closePopout: n,
          analyticsOverride: l,
          onSelectEmoji: o,
          messageId: s,
        } = e;
        return (0, r.jsx)(i.Z, {
          closePopout: n,
          channel: t,
          onSelectEmoji: o,
          pickerIntention: a.Hz.REACTION,
          analyticsOverride: l,
          messageId: s,
        });
      }
    },
    885006: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var r = n(192379);
      function i() {
        var e, t;
        let [n, i] = r.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080,
        });
        return (
          r.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              i({ width: e, height: window.innerHeight });
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
          return s;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        a = n(481060);
      function l(e, t, n) {
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
      class o extends i.PureComponent {
        render() {
          let { text: e, lastItem: t, className: n } = this.props;
          return (0, r.jsxs)("span", {
            children: [
              (0, r.jsx)(a.Anchor, {
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
            l(this, "handleClick", () => {
              let { onClick: e, index: t } = this.props;
              null == e || e(t);
            });
        }
      }
      class s extends i.PureComponent {
        render() {
          let e = this.props.artists.split(";");
          if (!this.props.canOpen) return e.join(", ");
          let t = e.length - 1;
          return e.map((e, n) =>
            (0, r.jsx)(
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
            l(this, "handleOpenSpotifyArtist", (e) => {
              let { onOpenSpotifyArtist: t } = this.props;
              null == t || t(e);
            });
        }
      }
    },
    237583: function (e, t, n) {
      n(653041), n(47120);
      var r,
        i = n(200651),
        a = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(481060),
        c = n(598077),
        d = n(39485),
        u = n(642291);
      function m(e, t, n) {
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
      class p extends (r = a.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: t,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: r,
            } = this.props,
            i = [],
            a = e.length === t ? e.length : t - 1,
            l = 0;
          for (; l < a && l < e.length; ) {
            let t = l === e.length - 1;
            i.push(
              n(e[l] || null, t ? null : d.avatarMasked, "user-".concat(l), t),
            ),
              l++;
          }
          if (l < e.length) {
            let t = Math.min(e.length - l, 99);
            i.push(r("+".concat(t), d.moreUsers, "more-users", t));
          }
          return i;
        }
        renderIcon() {
          return this.props.icon
            ? (0, i.jsx)("div", {
                className: d.iconContainer,
                children: (0, i.jsx)(s.VoiceNormalIcon, {
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
          return (0, i.jsxs)("div", {
            className: o()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            m(this, "_ref", void 0),
            m(this, "defaultRenderUser", (e, t, n, r) => {
              let { onClick: a, size: l, guildId: m } = this.props,
                p = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == p
                ? (0, i.jsx)("div", { className: o()(d.emptyUser, t) }, n)
                : (0, i.jsx)(
                    s.Avatar,
                    {
                      tabIndex: 0,
                      src: p.getAvatarURL(m, (0, s.getAvatarSize)(l)),
                      size: l,
                      "aria-label": p.username,
                      className: o()(t, u.cursorPointer, d.avatarSize),
                      onClick: (e) => (null != a ? a(e, p, this._ref) : null),
                    },
                    p.id,
                  );
            });
        }
      }
      m(p, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, t, n) {
          return (0, i.jsx)("div", { className: t, children: e }, n);
        },
        size: s.AvatarSizes.SIZE_24,
      }),
        (t.Z = p);
    },
    908841: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(331595);
      function a(e) {
        let {
          width: t = 20,
          height: n = 20,
          color: a = "currentColor",
          ...l
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.Z)(l),
          width: t,
          height: n,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM14.5625 14.4375C14.3791 14.7161 14.0145 14.8107 13.7188 14.6562C11.375 13.2188 8.40625 12.9062 4.9375 13.6875C4.71979 13.7377 4.49182 13.668 4.33945 13.5046C4.18709 13.3412 4.13348 13.1089 4.19883 12.8952C4.26417 12.6816 4.43854 12.519 4.65625 12.4688C8.46875 11.5938 11.7188 11.9688 14.375 13.5938C14.5149 13.6781 14.6141 13.816 14.6495 13.9755C14.685 14.1349 14.6535 14.3019 14.5625 14.4375ZM15.8125 11.6875C15.7053 11.8622 15.5328 11.9869 15.3333 12.0338C15.1338 12.0807 14.9238 12.0461 14.75 11.9375C12.0625 10.2812 7.96875 9.8125 4.78125 10.7812C4.5133 10.8594 4.22401 10.7887 4.02236 10.5957C3.8207 10.4027 3.73731 10.1168 3.80361 9.84569C3.8699 9.57457 4.0758 9.3594 4.34375 9.28125C7.96875 8.1875 12.5 8.71875 15.5625 10.625C15.9134 10.8575 16.0229 11.3229 15.8125 11.6875ZM15.9062 8.875C12.6875 6.96875 7.375 6.78125 4.28125 7.71875C3.81691 7.79284 3.36952 7.5115 3.23513 7.0609C3.10074 6.61031 3.32093 6.12986 3.75 5.9375C7.28125 4.875 13.1562 5.0625 16.875 7.28125C17.0893 7.40709 17.2434 7.61436 17.3023 7.85577C17.3612 8.09717 17.3198 8.35214 17.1875 8.5625C16.9054 8.98221 16.3499 9.1177 15.9062 8.875Z",
            fill: a,
          }),
        });
      }
    },
    52824: function (e, t, n) {
      n.d(t, {
        q: function () {
          return r;
        },
      });
      function r(e) {
        let { proxyURL: t, url: n } = e;
        return null != t && "" !== t ? t : n;
      }
    },
    814225: function (e, t, n) {
      n.d(t, {
        P3: function () {
          return m;
        },
        ZK: function () {
          return u;
        },
        en: function () {
          return g;
        },
      }),
        n(757143),
        n(47120);
      var r = n(913527),
        i = n.n(r);
      if (12633 == n.j) var a = n(512969);
      n(358085), n(73346);
      var l = n(981631),
        o = n(388032);
      let s = {},
        c = {},
        d = Object.freeze({ ALL: -1, ...l.EKQ });
      function u(e) {
        let t = (0, a.LX)(e, {
          path: l.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        });
        return null != t ? t.params.skuId : null;
      }
      function m(e) {
        switch (e) {
          case l.EKQ.ACTION:
            return o.intl.string(o.t["1o2/IC"]);
          case l.EKQ.ACTION_RPG:
            return o.intl.string(o.t.e9Yo4O);
          case l.EKQ.BRAWLER:
            return o.intl.string(o.t.WCkEjY);
          case l.EKQ.HACK_AND_SLASH:
            return o.intl.string(o.t.xQ4VmJ);
          case l.EKQ.PLATFORMER:
            return o.intl.string(o.t["WA318/"]);
          case l.EKQ.STEALTH:
            return o.intl.string(o.t["6UPFd3"]);
          case l.EKQ.SURVIVAL:
            return o.intl.string(o.t.SVPCt7);
          case l.EKQ.ADVENTURE:
            return o.intl.string(o.t["15p8oq"]);
          case l.EKQ.ACTION_ADVENTURE:
            return o.intl.string(o.t.AxkUBg);
          case l.EKQ.METROIDVANIA:
            return o.intl.string(o.t.Iwr38v);
          case l.EKQ.OPEN_WORLD:
            return o.intl.string(o.t["2HRHJC"]);
          case l.EKQ.PSYCHOLOGICAL_HORROR:
            return o.intl.string(o.t["/IwK3t"]);
          case l.EKQ.SANDBOX:
            return o.intl.string(o.t["2+Vu4e"]);
          case l.EKQ.SURVIVAL_HORROR:
            return o.intl.string(o.t.CCzRiI);
          case l.EKQ.VISUAL_NOVEL:
            return o.intl.string(o.t.FE7rnp);
          case l.EKQ.DRIVING_RACING:
            return o.intl.string(o.t.ErzgcX);
          case l.EKQ.VEHICULAR_COMBAT:
            return o.intl.string(o.t.YQHhoq);
          case l.EKQ.MASSIVELY_MULTIPLAYER:
            return o.intl.string(o.t["5CNg1t"]);
          case l.EKQ.MMORPG:
            return o.intl.string(o.t.c4NuOz);
          case l.EKQ.ROLE_PLAYING:
            return o.intl.string(o.t.yayVgo);
          case l.EKQ.DUNGEON_CRAWLER:
            return o.intl.string(o.t.qicemZ);
          case l.EKQ.ROGUELIKE:
            return o.intl.string(o.t.zWzaCg);
          case l.EKQ.SHOOTER:
            return o.intl.string(o.t["+pk6sb"]);
          case l.EKQ.LIGHT_GUN:
            return o.intl.string(o.t["TDS96+"]);
          case l.EKQ.SHOOT_EM_UP:
            return o.intl.string(o.t.wltDUF);
          case l.EKQ.FPS:
            return o.intl.string(o.t.olTaq6);
          case l.EKQ.DUAL_JOYSTICK_SHOOTER:
            return o.intl.string(o.t["SN+NS0"]);
          case l.EKQ.SIMULATION:
            return o.intl.string(o.t.sxMPdn);
          case l.EKQ.FLIGHT_SIMULATOR:
            return o.intl.string(o.t.Q7msr6);
          case l.EKQ.TRAIN_SIMULATOR:
            return o.intl.string(o.t.ZtECf3);
          case l.EKQ.LIFE_SIMULATOR:
            return o.intl.string(o.t.byt5Fh);
          case l.EKQ.FISHING:
            return o.intl.string(o.t.BKwiwc);
          case l.EKQ.SPORTS:
            return o.intl.string(o.t.O0B7XF);
          case l.EKQ.BASEBALL:
            return o.intl.string(o.t["jPYb//"]);
          case l.EKQ.BASKETBALL:
            return o.intl.string(o.t["o+D1Bg"]);
          case l.EKQ.BILLIARDS:
            return o.intl.string(o.t.PJ5o4O);
          case l.EKQ.BOWLING:
            return o.intl.string(o.t["82afJy"]);
          case l.EKQ.BOXING:
            return o.intl.string(o.t.DQvfen);
          case l.EKQ.FOOTBALL:
            return o.intl.string(o.t.slOYkp);
          case l.EKQ.GOLF:
            return o.intl.string(o.t.aeQPlJ);
          case l.EKQ.HOCKEY:
            return o.intl.string(o.t.g7oe5e);
          case l.EKQ.SKATEBOARDING_SKATING:
            return o.intl.string(o.t.yBDEPz);
          case l.EKQ.SNOWBOARDING_SKIING:
            return o.intl.string(o.t.GVaAcn);
          case l.EKQ.SOCCER:
            return o.intl.string(o.t.KPznxs);
          case l.EKQ.TRACK_FIELD:
            return o.intl.string(o.t.hJ62Q0);
          case l.EKQ.SURFING_WAKEBOARDING:
            return o.intl.string(o.t.PSh0CQ);
          case l.EKQ.WRESTLING:
            return o.intl.string(o.t["3y9hAQ"]);
          case l.EKQ.STRATEGY:
            return o.intl.string(o.t.KovTDw);
          case l.EKQ.FOUR_X:
            return o.intl.string(o.t["19h4dX"]);
          case l.EKQ.ARTILLERY:
            return o.intl.string(o.t.sBqLsL);
          case l.EKQ.RTS:
            return o.intl.string(o.t.yS4ddn);
          case l.EKQ.TOWER_DEFENSE:
            return o.intl.string(o.t.SULyIC);
          case l.EKQ.TURN_BASED_STRATEGY:
            return o.intl.string(o.t.VDsbrq);
          case l.EKQ.WARGAME:
            return o.intl.string(o.t.YDCIrK);
          case l.EKQ.MOBA:
            return o.intl.string(o.t.i1m1t7);
          case l.EKQ.FIGHTING:
            return o.intl.string(o.t.KepcSE);
          case l.EKQ.PUZZLE:
            return o.intl.string(o.t.rm7Ggo);
          case l.EKQ.CARD_GAME:
            return o.intl.string(o.t.kX85v7);
          case l.EKQ.EDUCATION:
            return o.intl.string(o.t["klIi6+"]);
          case l.EKQ.FITNESS:
            return o.intl.string(o.t.GOaaFR);
          case l.EKQ.GAMBLING:
            return o.intl.string(o.t["X8/Ee3"]);
          case l.EKQ.MUSIC_RHYTHM:
            return o.intl.string(o.t.qPgrg4);
          case l.EKQ.PARTY_MINI_GAME:
            return o.intl.string(o.t.diBclJ);
          case l.EKQ.PINBALL:
            return o.intl.string(o.t["1+ott7"]);
          case l.EKQ.TRIVIA_BOARD_GAME:
            return o.intl.string(o.t.aLlxjI);
          case l.EKQ.TACTICAL:
            return o.intl.string(o.t.LRPgbm);
          case l.EKQ.INDIE:
            return o.intl.string(o.t.hz9Xvr);
          case l.EKQ.ARCADE:
            return o.intl.string(o.t.Sbxows);
          case l.EKQ.POINT_AND_CLICK:
            return o.intl.string(o.t.vcerEh);
          default:
            return o.intl.string(o.t["9b4eUl"]);
        }
      }
      Object.keys(d).forEach((e) => {
        let t = e.toLowerCase().replace(/_/g, "-"),
          n = d[e];
        (s[t] = n), (c[n] = t);
      });
      let p = [
        ["YYYY-MM-DD", "MMMM DD, Y"],
        ["YYYY-MM", "MMMM Y"],
        ["MM-DD", "MMMM DD"],
        ["MM", "MMMM"],
        ["YYYY", "Y"],
      ];
      function g(e) {
        let { preorderReleaseAt: t, preorderApproximateReleaseDate: n } = e;
        if (null != t) return t.format("MMMM DD");
        if (null == n) return null;
        for (let e = 0; e < p.length; e++) {
          let [t, r] = p[e],
            a = i()(n, t, !0);
          if (a.isValid()) return a.format(r);
        }
        return n;
      }
    },
    643872: function (e, t, n) {
      var r, i;
      n.d(t, {
        p: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.OFFICIAL = 1)] = "OFFICIAL"),
        (i[(i.WIKIA = 2)] = "WIKIA"),
        (i[(i.WIKIPEDIA = 3)] = "WIKIPEDIA"),
        (i[(i.FACEBOOK = 4)] = "FACEBOOK"),
        (i[(i.TWITTER = 5)] = "TWITTER"),
        (i[(i.TWITCH = 6)] = "TWITCH"),
        (i[(i.INSTAGRAM = 8)] = "INSTAGRAM"),
        (i[(i.YOUTUBE = 9)] = "YOUTUBE"),
        (i[(i.IPHONE = 10)] = "IPHONE"),
        (i[(i.IPAD = 11)] = "IPAD"),
        (i[(i.ANDROID = 12)] = "ANDROID"),
        (i[(i.STEAM = 13)] = "STEAM"),
        (i[(i.REDDIT = 14)] = "REDDIT"),
        (i[(i.ITCH = 15)] = "ITCH"),
        (i[(i.EPICGAMES = 16)] = "EPICGAMES"),
        (i[(i.GOG = 17)] = "GOG"),
        (i[(i.DISCORD = 18)] = "DISCORD");
    },
    17169: function (e, t, n) {
      e.exports = { button: "button_c6eb7b", buttonSize: "buttonSize_c6eb7b" };
    },
    257641: function (e, t, n) {
      e.exports = {
        reactions: "reactions_d0fc0d",
        reply: "reply_d0fc0d",
        replyHeader: "replyHeader_d0fc0d",
        replyInput: "replyInput_d0fc0d",
        emojiButton: "emojiButton_d0fc0d",
        reaction: "reaction_d0fc0d",
      };
    },
    421178: function (e, t, n) {
      e.exports = { clickable: "clickable_bffa11" };
    },
    152363: function (e, t, n) {
      e.exports = { popout: "popout_e40224" };
    },
    176512: function (e, t, n) {
      e.exports = {
        listeningTimeline: "listeningTimeline_a218d8",
        seekBarContainer: "seekBarContainer_a218d8",
        seekBarFill: "seekBarFill_a218d8",
        timestamp: "timestamp_a218d8",
      };
    },
    350059: function (e, t, n) {
      e.exports = {
        coachtip: "coachtip_e8254e",
        coachtipContent: "coachtipContent_e8254e",
        coachtipInner: "coachtipInner_e8254e",
        coachtipAsset: "coachtipAsset_e8254e",
        coachtipTextContainer: "coachtipTextContainer_e8254e",
      };
    },
    610123: function (e, t, n) {
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
    383473: function (e, t, n) {
      e.exports = { menuIcon: "menuIcon_aa0ae7" };
    },
    498701: function (e, t, n) {
      e.exports = { loadingSpinner: "loadingSpinner_f2635d" };
    },
    653303: function (e, t, n) {
      e.exports = { container: "container_b11148" };
    },
    415069: function (e, t, n) {
      e.exports = { fallback: "fallback_fad32c", spacer: "spacer_fad32c" };
    },
    771282: function (e, t, n) {
      e.exports = {
        profileEntryCard: "profileEntryCard_f1257c",
        reactions: "reactions_f1257c",
        avatar: "avatar_f1257c",
        playerInfo: "playerInfo_f1257c",
      };
    },
    458170: function (e, t, n) {
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
    109191: function (e, t, n) {
      e.exports = {
        linkIcon: "linkIcon_bb1ae6",
        linkAnchor: "linkAnchor_bb1ae6",
        tooltip: "tooltip_bb1ae6",
        tooltipContent: "tooltipContent_bb1ae6",
      };
    },
    946041: function (e, t, n) {
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
    218971: function (e, t, n) {
      e.exports = {
        friends: "friends_d8cab0",
        emptyState: "emptyState_d8cab0 friends_d8cab0",
        fadedEntries: "fadedEntries_d8cab0",
        expandEntriesButton: "expandEntriesButton_d8cab0",
      };
    },
    387828: function (e, t, n) {
      e.exports = {
        inviteInfo: "inviteInfo_c2c033",
        guildIcon: "guildIcon_c2c033",
      };
    },
    332634: function (e, t, n) {
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
    767998: function (e, t, n) {
      e.exports = { platforms: "platforms_a8723c" };
    },
    732787: function (e, t, n) {
      e.exports = {
        image: "image_ed81cc",
        emptyPreviewContainer: "emptyPreviewContainer_ed81cc",
        emptyPreviewImage: "emptyPreviewImage_ed81cc",
        emptyPreviewText: "emptyPreviewText_ed81cc",
      };
    },
    991971: function (e, t, n) {
      e.exports = {
        gameTitle: "gameTitle_cf6db7",
        gameIcon: "gameIcon_cf6db7",
        gameTitleContainer: "gameTitleContainer_cf6db7",
        emptyStateImage: "emptyStateImage_cf6db7",
      };
    },
    253121: function (e, t, n) {
      e.exports = { container: "container_c5a4ce", border: "border_c5a4ce" };
    },
    598741: function (e, t, n) {
      e.exports = {
        slide: "slide_f97a12",
        scaleDown: "scaleDown_f97a12",
        contain: "contain_f97a12",
      };
    },
    726201: function (e, t, n) {
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
    39485: function (e, t, n) {
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
    642291: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=e8e62a550d22256bc06c.js.map
