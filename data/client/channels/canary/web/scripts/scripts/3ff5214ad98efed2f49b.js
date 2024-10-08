"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56993"],
  {
    966390: function (e, n, t) {
      t(47120), t(789020);
      var a = t(481060),
        r = t(570140),
        s = t(430742),
        i = t(904245),
        o = t(166459),
        l = t(531643),
        c = t(881052),
        d = t(673750),
        u = t(141795),
        _ = t(476326),
        E = t(680287),
        I = t(163268),
        m = t(539573),
        A = t(786761),
        p = t(3148),
        g = t(48854),
        T = t(785359),
        f = t(79390),
        O = t(623292),
        N = t(807092),
        R = t(467798),
        h = t(703558),
        P = t(117530),
        C = t(630388),
        L = t(226351),
        M = t(981631),
        S = t(689938);
      async function v(e) {
        var n, t, a;
        let u,
          {
            channelId: _,
            uploads: v,
            draftType: x,
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
          null != N.Z.getPendingReply(_) &&
            ((y.type = M.uaV.REPLY),
            (y.message_reference = Z.messageReference),
            (y.allowed_mentions = Z.allowedMentions),
            (0, O.A6)(_));
        let [w, U] = (0, R.Z)(y.content);
        w &&
          ((y.content = U),
          (y.flags = (0, C.pj)(
            null !== (n = y.flags) && void 0 !== n ? n : 0,
            M.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let k = null !== (t = Z.nonce) && void 0 !== t ? t : (0, g.r)(),
          K = (0, p.ZP)({
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
            (u = (0, A.e5)({ ...K, id: e.id })),
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
          j.on("error", (e, n, t, a) => {
            if (
              (r.Z.dispatch({
                type: "UPLOAD_FAIL",
                channelId: _,
                file: e,
                messageRecord: u,
              }),
              (0, T.x)({
                fileItems: e.items,
                failureCode: n,
                errorMessage: null == a ? void 0 : a.msg,
              }),
              n === M.evJ.EXPLICIT_CONTENT)
            ) {
              i.Z.sendExplicitMediaClydeError(
                _,
                null == t ? void 0 : t.attachments,
                I.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (n === M.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: n, message: null == t ? void 0 : t.message },
                a =
                  null == u
                    ? null
                    : { type: d.$V.SEND, message: { ...u, channelId: _ } };
              (0, l.openUploadError)({
                title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: (0, m.uF)(a, e),
              });
              return;
            }
            if (n !== M.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (b)
                D.reject(new c.Hx({ status: n, body: null != t ? t : {} }, n));
              else {
                var E;
                (0, l.openUploadError)({
                  title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                  help:
                    null !== (E = null == t ? void 0 : t.message) &&
                    void 0 !== E
                      ? E
                      : S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP,
                });
              }
              "" !== y.content &&
                "" === h.Z.getDraft(_, x) &&
                s.Z.saveDraft(_, y.content, x),
                0 === P.Z.getUploadCount(_, x) &&
                  o.Z.setUploads({ channelId: _, uploads: v, draftType: x });
            }
          }),
          j.on("complete", (e, n) => {
            r.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: _,
              file: e,
              aborted: j._aborted,
              messageRecord: n,
            });
          }),
          await j.uploadFiles(v, y),
          D.resolve(),
          D.promise
        );
      }
      n.Z = {
        instantBatchUpload: function (e) {
          let {
              channelId: n,
              files: t,
              draftType: a,
              isThumbnail: r = !1,
              filesMetadata: s = [],
            } = e,
            i = Array.from(t).map((e, t) => {
              let a = null != s ? s[t] : {};
              return new u.n(
                { file: e, platform: _.ow.WEB, isThumbnail: r, ...a },
                n,
              );
            });
          v({ channelId: n, uploads: i, draftType: a });
        },
        upload: function e(n) {
          let {
              channelId: t,
              file: o,
              draftType: c,
              message: d,
              hasSpoiler: u,
              filename: _,
            } = n,
            m = { content: "", tts: !1, hasSpoiler: u, filename: _ };
          if (null != d) {
            (m.content = d.content),
              (m.tts = d.tts),
              (m.channel_id = d.channel_id);
            let e = N.Z.getPendingReply(t);
            if (null != e) {
              let n = i.Z.getSendMessageOptionsForReply(e);
              (m.type = M.uaV.REPLY),
                (m.message_reference = n.messageReference),
                (m.allowed_mentions = n.allowedMentions),
                (0, O.A6)(t);
            }
          }
          let A = new E.Z(M.ANM.MESSAGES(t));
          A.on("start", (e) => {
            r.Z.dispatch({
              type: "UPLOAD_START",
              channelId: t,
              file: e,
              uploader: A,
            });
          }),
            A.on("progress", (e) => {
              r.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: t, file: e });
            }),
            A.on("error", (n, u, _) => {
              if (
                (r.Z.dispatch({ type: "UPLOAD_FAIL", channelId: t, file: n }),
                (0, T.x)({ fileItems: n.items, failureCode: u }),
                u === M.evJ.EXPLICIT_CONTENT)
              ) {
                i.Z.sendExplicitMediaClydeError(
                  t,
                  null == _ ? void 0 : _.attachments,
                  I.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, l.openUploadError)({
                title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                  onClick: () => {
                    (0, a.closeModal)(l.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: t, file: o, draftType: c, message: d });
                  },
                }),
              }),
                "" !== m.content &&
                  "" === h.Z.getDraft(t, c) &&
                  s.Z.saveDraft(t, m.content, c);
            }),
            A.on("complete", (e) => {
              r.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: t, file: e });
            }),
            A.upload(o, m);
        },
        uploadFiles: v,
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
    560361: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(470079);
      function r(e) {
        let n = a.useRef();
        (n.current = e),
          a.useEffect(
            () => () => {
              var e;
              return null === (e = n.current) || void 0 === e
                ? void 0
                : e.call(n);
            },
            [],
          );
      }
    },
    680287: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(653041);
      var a = t(544891),
        r = t(881052),
        s = t(687294),
        i = t(476326),
        o = t(861990),
        l = t(689938);
      class c extends s.Z {
        async uploadFiles(e, n) {
          let { addFilesTo: t } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super.upload({ name: l.Z.Messages.ATTACHMENT_PROCESSING }, n, e);
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
            return await this._createMessage(a.signal, n, t);
          } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
          }
        }
        async _createMessage(e, n, t) {
          let s;
          let l = [];
          this.files.forEach((e, n) => {
            let t = (0, o.B)(e, n);
            e.item.platform === i.ow.WEB && l.push({ ...t });
          }),
            (s =
              null != t && null != n
                ? this._addAttachmentsToPayload(n, t, l)
                : { ...n, attachments: l });
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
        constructor(e, n = "POST", t) {
          super(e, n, t);
        }
      }
    },
    499254: function (e, n, t) {
      t.d(n, {
        __: function () {
          return r;
        },
        yT: function () {
          return s;
        },
      });
      var a = t(570140);
      function r(e, n, t) {
        a.Z.dispatch({
          type: "APP_LAUNCHER_SHOW",
          entrypoint: e,
          activeViewType: n,
          initialState: t,
        });
      }
      function s(e) {
        a.Z.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: e });
      }
    },
    256139: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var a = t(735250),
        r = t(120356),
        s = t.n(r),
        i = t(481060),
        o = t(615934);
      function l(e) {
        let { className: n, onClick: t, ...r } = e,
          l = (0, a.jsx)(i.Clickable, {
            ...r,
            className: s()(null != t && o.clickable, n),
            onClick: t,
          });
        return null == t ? (0, a.jsx)(i.BlockInteractions, { children: l }) : l;
      }
    },
    91907: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var a = t(735250),
        r = t(470079),
        s = t(793030),
        i = t(256139),
        o = t(866040);
      function l(e) {
        let {
            user: n,
            text: t,
            channel: l,
            textClassName: c,
            onPopoutClosed: d,
          } = e,
          u = (0, r.useMemo)(() => [n], [n]);
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
                children: t,
              }),
            }),
        });
      }
    },
    866040: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(411104);
      var a = t(735250),
        r = t(470079),
        s = t(442837),
        i = t(481060),
        o = t(239091),
        l = t(751688),
        c = t(184301),
        d = t(347475),
        u = t(210887),
        _ = t(5192),
        E = t(684201);
      function I(e) {
        let { participants: n, channel: r } = e;
        return (0, a.jsx)(i.Scroller, {
          className: E.popout,
          children: n.map((e) =>
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
                onContextMenu: (n) => {
                  (0, o.jW)(n, async () => {
                    let { default: n } = await Promise.all([
                      t.e("79695"),
                      t.e("69220"),
                      t.e("50261"),
                    ]).then(t.bind(t, 881351));
                    return (t) => (0, a.jsx)(n, { ...t, user: e });
                  });
                },
              },
              e.id,
            ),
          ),
        });
      }
      function m(e) {
        let { children: n, participants: t, channel: o, onPopoutClosed: l } = e,
          _ = (0, s.e7)([u.Z], () => u.Z.theme),
          E = 1 === t.length ? t[0] : null,
          m = (0, r.useCallback)(
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
              if (null != t)
                return (0, a.jsx)(I, { participants: t, channel: o });
              throw Error("One of participant or participants is required");
            },
            [o, l, t, E],
          );
        return (0, a.jsx)(i.ThemeContextProvider, {
          theme: _,
          children: (0, a.jsx)(i.Popout, {
            renderPopout: m,
            preload: () =>
              null != E
                ? (0, c.Z)(E, {
                    guildId: null == o ? void 0 : o.guild_id,
                    channelId: null == o ? void 0 : o.id,
                  })
                : Promise.resolve(),
            children: n,
          }),
        });
      }
    },
    206295: function (e, n, t) {
      t(47120);
      var a = t(470079),
        r = t(688619),
        s = t.n(r);
      t(979590);
      var i = t(442837),
        o = t(866442),
        l = t(607070),
        c = t(220082),
        d = t(981631);
      n.Z = (e) => {
        var n, r, u, _, E, I;
        let m;
        m = t(481060).tokens;
        let A = (0, i.e7)([l.Z], () => l.Z.saturation),
          [p, g] = (0, c.Cf)(
            e,
            null !==
              (I =
                null == m
                  ? void 0
                  : null === (E = m.colors) || void 0 === E
                    ? void 0
                    : null === (_ = E.BACKGROUND_FLOATING) || void 0 === _
                      ? void 0
                      : null === (u = _.resolve) || void 0 === u
                        ? void 0
                        : null ===
                              (r = u.call(_, {
                                theme: d.BRd.DARK,
                                saturation: A,
                              })) || void 0 === r
                          ? void 0
                          : null === (n = r.hex) || void 0 === n
                            ? void 0
                            : n.call(r)) && void 0 !== I
              ? I
              : "#000",
          );
        return a.useMemo(() => {
          let e = (0, o._i)(p),
            n = (0, o._i)(g);
          for (let n = 1; n < 8 && !((0, o.Bd)(e) >= 0.725); n++) {
            e = s()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, o.Bd)(n) >= 0.725); e++) {
            n = s()(n).darken(0.5).num();
          }
          let t = (0, o.Rf)(e);
          return { primaryColor: t, secondaryColor: (0, o.Rf)(n) };
        }, [p, g]);
      };
    },
    410441: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(481060),
        s = t(832923);
      function i(e) {
        let { onClick: n, Icon: t, "aria-label": i } = e,
          o = (0, r.useToken)(
            r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          l = (0, a.jsx)(t, {
            color: o.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == n
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
                  onClick: n,
                  children: l,
                }),
            });
      }
    },
    998058: function (e, n, t) {
      t.d(n, {
        i: function () {
          return o;
        },
      });
      var a = t(544891),
        r = t(570140),
        s = t(881052),
        i = t(981631);
      let o = async (e) => {
        try {
          var n;
          let t = await a.tn.get({ url: i.ANM.SIMILAR_GAMES(e) }),
            s = (
              null !== (n = t.body.similar_games) && void 0 !== n ? n : []
            ).filter((n) => n !== e);
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
    839392: function (e, n, t) {
      var a,
        r,
        s,
        i,
        o = t(442837),
        l = t(570140);
      let c = {};
      class d extends (i = o.ZP.Store) {
        getSimilarGames(e) {
          return c[e];
        }
      }
      (s = "GameProfileStore"),
        (r = "displayName") in (a = d)
          ? Object.defineProperty(a, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[r] = s),
        (n.Z = new d(l.Z, {
          GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: n, games: t } = e;
            c[n] = t;
          },
        }));
    },
    96856: function (e, n, t) {
      t.d(n, {
        p: function () {
          return r;
        },
      });
      let a = (0, t(818083).B)({
        kind: "user",
        id: "2024-08_game_follow_survey",
        label: "Game Follow Fake Door Survey",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
        let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: t } = a.useExperiment(
            { location: e },
            { autoTrackExposure: n },
          );
        return t;
      }
    },
    567409: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      }),
        t(47120);
      var a = t(470079),
        r = t(392711),
        s = t.n(r),
        i = t(876215),
        o = t(442837),
        l = t(146282),
        c = t(897674),
        d = t(709054),
        u = t(206583);
      let _ = new Set([i.s.PLAYED_GAME]),
        E = (e) => _.has(e.content_type);
      function I() {
        let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
          n = (0, c.Z)(u.YN.GLOBAL_FEED),
          t = a.useMemo(
            () =>
              s()(n)
                .unionBy(e, (e) => e.id)
                .filter(E)
                .orderBy((e) => d.default.extractTimestamp(e.id), "desc")
                .uniqWith(
                  (e, n) =>
                    e.author_id === n.author_id &&
                    e.extra.application_id === n.extra.application_id,
                )
                .value(),
            [e, n],
          );
        return {
          requestId: (0, o.e7)([l.Z], () =>
            l.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED),
          ),
          entries: t,
        };
      }
    },
    124030: function (e, n, t) {
      t.d(n, {
        A: function () {
          return i;
        },
        L: function () {
          return s;
        },
      });
      var a = t(433517);
      let r = "GameFollowSurveyModal";
      function s() {
        var e;
        return (
          (null === (e = a.K.get(r)) || void 0 === e
            ? void 0
            : e.hasInteractedWithSurvey) !== !0
        );
      }
      function i() {
        return a.K.set(r, { hasInteractedWithSurvey: !0 });
      }
    },
    383895: function (e, n, t) {
      var a = t(735250),
        r = t(470079),
        s = t(120356),
        i = t.n(s),
        o = t(442837),
        l = t(481060),
        c = t(178762),
        d = t(91140),
        u = t(297781),
        _ = t(592125),
        E = t(944486),
        I = t(594174),
        m = t(5192),
        A = t(810568),
        p = t(689938),
        g = t(501345),
        T = t(51527);
      n.Z = (e) => {
        let { entry: n, viewId: t, officialGuildId: s, onClose: f } = e,
          O = (0, o.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
          N = (0, o.e7)([I.default], () => I.default.getUser(n.author_id)),
          { nick: R, avatar: h } = r.useMemo(() => {
            let e =
              null == N
                ? void 0
                : N.getAvatarURL(null == O ? void 0 : O.guild_id, 48, !1);
            return {
              nick: m.ZP.getName(
                null == O ? void 0 : O.guild_id,
                null == O ? void 0 : O.id,
                N,
              ),
              avatar: e,
            };
          }, [N, O]);
        return null == N
          ? null
          : (0, a.jsx)(l.Popout, {
              position: "right",
              renderPopout: (e) => {
                let { closePopout: r, updatePosition: i } = e;
                return (0, a.jsx)(c.J, {
                  entry: n,
                  closePopout: r,
                  updatePopoutPosition: i,
                  onReaction: () => {
                    (0, A.UE)({
                      action: A.as.SendMessageUser,
                      applicationId: n.extra.application_id,
                      gameName: n.extra.game_name,
                      recipientUserId: n.author_id,
                      viewId: t,
                      officialGuildId: s,
                    }),
                      f(),
                      r();
                  },
                  onUserPopoutClosed: () => r(),
                  disableGameProfileLinks: !0,
                });
              },
              positionKey: "game-profile-entry-".concat(n.id),
              onRequestOpen: () => {
                (0, A.UE)({
                  action: A.as.ClickMessageUser,
                  applicationId: n.extra.application_id,
                  gameName: n.extra.game_name,
                  recipientUserId: n.author_id,
                  viewId: t,
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
                          alt: p.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
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
                                children: d.W.map((e, t) =>
                                  (0, a.jsx)(e, { entry: n }, t),
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
    644941: function (e, n, t) {
      t.r(n), t(47120);
      var a = t(735250),
        r = t(470079),
        s = t(120356),
        i = t.n(s),
        o = t(913527),
        l = t.n(o),
        c = t(705512),
        d = t(442837),
        u = t(433517),
        _ = t(481060),
        E = t(560361),
        I = t(835473),
        m = t(168551),
        A = t(485267),
        p = t(26033),
        g = t(561308),
        T = t(669764),
        f = t(706454),
        O = t(768581),
        N = t(814225),
        R = t(709054),
        h = t(810568),
        P = t(998058),
        C = t(839392),
        L = t(96856),
        M = t(567409),
        S = t(774073),
        v = t(124030),
        x = t(715318),
        G = t(38516),
        Z = t(891949),
        b = t(252547),
        j = t(484527),
        D = t(131033),
        y = t(296768),
        w = t(978313),
        U = t(206583),
        k = t(689938),
        K = t(51527);
      let H = "GameProfileModal",
        F = () =>
          (0, a.jsxs)("div", {
            className: K.gameBadge,
            children: [
              (0, a.jsx)(_.FireIcon, { size: "xxs" }),
              (0, a.jsx)(_.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: k.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          });
      function B(e) {
        var n, s;
        let {
            detectedGame: o,
            application: d,
            entries: E,
            viewId: I,
            trackAction: m,
          } = e,
          [A, p] = r.useState(() => {
            var e;
            return null === (e = u.K.get(H)) || void 0 === e ? void 0 : e[d.id];
          }),
          T = (0, L.p)("GameProfileModal"),
          f = r.useMemo(
            () => (null == o ? void 0 : o.genres.map(N.P3).join(", ")),
            [o],
          ),
          P = r.useMemo(() => {
            if (null == o) return "";
            let { artwork: e, screenshots: n } = o;
            if (e.length > 0) {
              let n = Math.floor(Math.random() * (e.length - 1));
              return e[n];
            }
            if (n.length > 0) {
              let e = Math.floor(Math.random() * (n.length - 1));
              return n[e];
            }
            return "";
          }, [o]),
          C = null == d ? void 0 : d.getIconURL(160, O.$k ? "webp" : "png"),
          M = R.default.extractTimestamp(d.id),
          S = null !== (n = o.coverImageUrl) && void 0 !== n ? n : C,
          G = l()().diff(l()(M), "days") <= U.G,
          Z = E.some((e) => (0, g.ig)(e) === c.o.GLOBAL),
          b =
            null !== (s = o.name) && void 0 !== s
              ? s
              : null == d
                ? void 0
                : d.name,
          j = r.useCallback(
            () => () => {
              var e;
              let n = null !== (e = u.K.get(H)) && void 0 !== e ? e : {};
              (n[d.id] = !n[d.id]),
                u.K.set(H, n),
                m(n[d.id] ? h.as.FollowGame : h.as.UnfollowGame),
                n[d.id] &&
                  (0, v.L)() &&
                  (0, _.openModalLazy)(async () => {
                    let { default: e } = await t
                      .e("86564")
                      .then(t.bind(t, 641758));
                    return (n) =>
                      (0, a.jsx)(e, {
                        ...n,
                        applicationId: d.id,
                        background: P,
                        viewId: I,
                      });
                  }),
                p(n[d.id]);
            },
            [d.id, P, m, I],
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: i()(K.gameArtHero),
              style: { backgroundImage: 'url("'.concat(P, '")') },
            }),
            (0, a.jsxs)("div", {
              className: i()(K.content, K.column, K.gapLg, K.headerInfo),
              children: [
                (0, a.jsxs)("div", {
                  className: K.coverArtRow,
                  children: [
                    (0, a.jsx)("div", {
                      className: K.logoWrapper,
                      children:
                        null != S &&
                        (0, a.jsx)("img", {
                          className: K.logo,
                          src: S,
                          alt: k.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                            game: b,
                          }),
                        }),
                    }),
                    (0, a.jsx)(x.Z, {
                      applicationId: d.id,
                      viewId: I,
                      className: K.overflowMenu,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: i()(K.row, K.gapSm, K.gameDetails),
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)(_.Heading, {
                          variant: "heading-xl/bold",
                          children: b,
                        }),
                        (0, a.jsxs)("div", {
                          className: i()(K.row, K.gapSm),
                          children: [
                            null != C &&
                              (0, a.jsx)("img", {
                                src: C,
                                height: 16,
                                alt: k.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                  { game: b },
                                ),
                              }),
                            (0, a.jsx)(_.Text, {
                              variant: "text-sm/semibold",
                              color: "text-muted",
                              children: f,
                            }),
                            G &&
                              (0, a.jsx)(_.Text, {
                                variant: "eyebrow",
                                className: K.newBadge,
                                children: k.Z.Messages.NEW,
                              }),
                            Z &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(_.Text, {
                                    variant: "text-sm/medium",
                                    children: " \xb7 ",
                                  }),
                                  (0, a.jsx)(F, {}),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      children:
                        T &&
                        (0, a.jsx)(_.Tooltip, {
                          text: A
                            ? k.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                            : k.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                          children: (e) =>
                            (0, a.jsxs)(_.Button, {
                              ...e,
                              innerClassName: K.followButton,
                              color: A
                                ? _.Button.Colors.PRIMARY
                                : _.Button.Colors.BRAND,
                              onClick: j,
                              children: [
                                A
                                  ? (0, a.jsx)(_.BellSlashIcon, {
                                      color: "white",
                                    })
                                  : (0, a.jsx)(_.BellIcon, { color: "white" }),
                                A
                                  ? k.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME
                                  : k.Z.Messages.FOLLOW,
                              ],
                            }),
                        }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function Q(e) {
        var n;
        let {
          detectedGame: t,
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
          className: K.sections,
          children: [
            (0, a.jsx)(b.Z, {
              entries: s,
              viewId: d,
              officialGuildId:
                null == i
                  ? void 0
                  : null === (n = i.guild) || void 0 === n
                    ? void 0
                    : n.id,
              onClose: c,
            }),
            (0, a.jsx)(Z.Z, { detectedGame: t, trackAction: u }),
            (0, a.jsx)(y.Z, {
              applicationId: r.id,
              onClose: c,
              trackAction: u,
              similarGames: o,
              similarGamesError: l,
            }),
          ],
        });
      }
      function Y(e) {
        let { detectedGame: n, setOfficialGuildInvite: t, trackAction: r } = e;
        return (0, a.jsxs)("div", {
          className: i()(K.sidebar, K.column, K.gapLg),
          children: [
            (0, a.jsx)(_.Heading, {
              variant: "heading-md/bold",
              children: k.Z.Messages.ABOUT,
            }),
            (0, a.jsxs)("div", {
              className: K.sections,
              children: [
                (0, a.jsx)(w.Z, { detectedGame: n, trackAction: r }),
                (0, a.jsx)(j.Z, {
                  detectedGame: n,
                  trackClick: r,
                  onInviteResolved: t,
                }),
                (0, a.jsx)(G.Z, { detectedGame: n, trackClick: r }),
                (0, a.jsx)(D.Z, { detectedGame: n }),
              ],
            }),
          ],
        });
      }
      let W = (e) => e.filter(S.z6).slice(0, 5);
      n.default = (e) => {
        let {
            applicationId: n,
            source: t,
            sourceUserId: s,
            transitionState: o,
            onClose: l,
          } = e,
          { clientThemesClassName: c } = (0, m.ZP)(),
          u = (0, d.e7)([f.default], () => f.default.locale),
          O = r.useMemo(() => (0, h.fP)(), []),
          N = (0, d.Wu)([C.Z], () => {
            var e;
            return (
              null !== (e = C.Z.getSimilarGames(n)) && void 0 !== e ? e : []
            ).slice(0, 25);
          }),
          [R, L] = r.useState(null),
          { entries: S } = (0, M.Z)(),
          v = r.useMemo(() => {
            var e;
            return null !==
              (e =
                null == S
                  ? void 0
                  : S.filter(
                      (e) => (0, p.dX)(e) && e.extra.application_id === n,
                    )) && void 0 !== e
              ? e
              : [];
          }, [S, n]),
          [x, G] = r.useState(null),
          Z = (0, I.q)(n),
          b = (0, d.e7)([T.Z], () => T.Z.getGame(n)),
          j = (e, t) => {
            var a;
            (0, h.UE)({
              gameName: null != name ? name : "",
              applicationId: n,
              action: e,
              similarGameId: t,
              viewId: O,
              officialGuildId:
                null == x
                  ? void 0
                  : null === (a = x.guild) || void 0 === a
                    ? void 0
                    : a.id,
            });
          };
        return (r.useEffect(() => {
          var e, a;
          (0, h.IS)({
            source: t,
            viewId: O,
            applicationId: n,
            gameName:
              null !==
                (a =
                  null !== (e = null == b ? void 0 : b.name) && void 0 !== e
                    ? e
                    : null == Z
                      ? void 0
                      : Z.name) && void 0 !== a
                ? a
                : "",
            authorId: s,
          });
        }, []),
        r.useEffect(() => {
          (0, A.Jn)();
        }, []),
        r.useEffect(() => {
          (async () => {
            if (0 === N.length) {
              L(null);
              try {
                await (0, P.i)(n);
              } catch (e) {
                L(e);
              }
            }
          })();
        }, [n, N]),
        (0, E.Z)(() => {
          var e, t, a;
          let r = Date.now(),
            s = v.map((e) => {
              let n = (0, g.kr)(e) ? (0, g.T_)(e, r) : (0, g.GL)(e, u);
              return JSON.stringify({
                item_id: e.id,
                trait: e.traits,
                time_played: n,
              });
            });
          (0, h.wz)({
            viewId: O,
            applicationId: n,
            gameName:
              null !==
                (a =
                  null !== (t = null == b ? void 0 : b.name) && void 0 !== t
                    ? t
                    : null == Z
                      ? void 0
                      : Z.name) && void 0 !== a
                ? a
                : "",
            playedFriendIds: v.map((e) => e.author_id),
            playedFriendsData: s,
            similarGames: W(N),
            officialGuildId:
              null == x
                ? void 0
                : null === (e = x.guild) || void 0 === e
                  ? void 0
                  : e.id,
          });
        }),
        null == b || null == Z)
          ? null
          : (0, a.jsx)(_.ModalRoot, {
              transitionState: o,
              size: _.ModalSize.DYNAMIC,
              className: i()(c, K.gameProfileModal),
              children: (0, a.jsxs)(_.ScrollerNone, {
                className: K.scrollable,
                children: [
                  (0, a.jsx)(B, {
                    detectedGame: b,
                    application: Z,
                    entries: v,
                    viewId: O,
                    trackAction: j,
                  }),
                  (0, a.jsx)(_.HeadingLevel, {
                    children: (0, a.jsxs)("div", {
                      className: i()(K.content, K.mainContent),
                      children: [
                        (0, a.jsx)(Q, {
                          detectedGame: b,
                          application: Z,
                          entries: v,
                          officialGuildInvite: x,
                          similarGames: N,
                          similarGamesError: R,
                          onClose: l,
                          viewId: O,
                          trackAction: j,
                        }),
                        (0, a.jsx)(Y, {
                          detectedGame: b,
                          setOfficialGuildInvite: G,
                          trackAction: j,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
      };
    },
    715318: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(481060),
        s = t(239091),
        i = t(299206),
        o = t(858042),
        l = t(689938);
      function c(e) {
        let { applicationId: n, className: t, viewId: c } = e,
          d = (0, i.Z)({ id: n, label: l.Z.Messages.COPY_ID_APPLICATION }),
          u = (0, o.M)({ applicationId: n, viewId: c });
        return null == d && null == u
          ? null
          : (0, a.jsx)(r.Popout, {
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, a.jsx)(r.Menu, {
                  navId: "game-profile-context",
                  onClose: () => {
                    (0, s.Zy)(), n();
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
                  children: (n) =>
                    (0, a.jsx)(r.Clickable, {
                      className: t,
                      ...n,
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
    38516: function (e, n, t) {
      t(411104);
      var a = t(735250);
      t(470079);
      var r = t(120356),
        s = t.n(r),
        i = t(643872),
        o = t(481060),
        l = t(810568),
        c = t(689938),
        d = t(51527),
        u = t(825718);
      let _ = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE];
      function E(e) {
        let { website: n, trackClick: t } = e,
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
          })(n);
        return (0, a.jsx)(
          o.Anchor,
          {
            className: u.linkAnchor,
            title: d,
            href: n.url,
            onClick: () => {
              t(r);
            },
            target: "_blank",
            children: s,
          },
          n.url,
        );
      }
      n.Z = function (e) {
        let { detectedGame: n, trackClick: t } = e;
        if (null == n.websites) return null;
        let r = n.websites
          .filter((e) => {
            let { category: n } = e;
            return _.includes(n);
          })
          .sort((e, n) => e.category - n.category);
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
                    (0, a.jsx)(E, { website: e, trackClick: t }, e.url),
                  ),
                }),
              ],
            });
      };
    },
    891949: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var a = t(735250),
        r = t(470079),
        s = t(481060),
        i = t(810568),
        o = t(689938),
        l = t(51527),
        c = t(133512);
      function d(e) {
        let { detectedGame: n, trackAction: d } = e,
          u = r.useRef(null),
          _ = r.useMemo(() => {
            let e = n.artwork.map((e) => ({ src: e }));
            return [...n.screenshots.map((e) => ({ src: e })), ...e];
          }, [n.artwork, n.screenshots]),
          E = _.length > 2;
        function I(e) {
          if (null == u.current) return;
          let n = u.current.getScrollerState().scrollLeft;
          u.current.scrollTo({ to: n + 280 * e, animate: !0 });
        }
        return 0 === _.length
          ? null
          : (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)(s.Heading, {
                  className: l.sectionHeader,
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: o.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                }),
                (0, a.jsxs)("div", {
                  className: E
                    ? c.gameProfileMediaSmall
                    : c.gameProfileMediaLarge,
                  children: [
                    (0, a.jsx)(s.AdvancedScrollerNone, {
                      ref: u,
                      className: c.imageScroller,
                      orientation: "horizontal",
                      children: _.map((e, n) =>
                        (0, a.jsx)(
                          s.Clickable,
                          {
                            className: c.imageClickable,
                            focusProps: {
                              offset: 4,
                              ringClassName: c.gameArtworkFocusRing,
                            },
                            onClick: () => {
                              d(i.as.ClickImage),
                                (0, s.openModalLazy)(async () => {
                                  let { default: e } = await t
                                    .e("99857")
                                    .then(t.bind(t, 895023));
                                  return (t) => {
                                    let { ...r } = t;
                                    return (0, a.jsx)(e, {
                                      className: c.mediaModal,
                                      ...r,
                                      items: _,
                                      startingIndex: n,
                                    });
                                  };
                                });
                            },
                            children: (0, a.jsx)("img", {
                              src: e.src,
                              className: c.gameArtwork,
                              alt: o.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                { game: name },
                              ),
                            }),
                          },
                          e.src,
                        ),
                      ),
                    }),
                    E &&
                      (0, a.jsxs)("div", {
                        className: c.mediaOverlay,
                        children: [
                          (0, a.jsx)("div", { className: c.gradientLeft }),
                          (0, a.jsx)(s.Clickable, {
                            className: c.arrowClickable,
                            onClick: () => I(-1),
                            children: (0, a.jsx)(s.ArrowSmallLeftIcon, {
                              className: c.arrow,
                              color: "currentColor",
                            }),
                          }),
                          (0, a.jsx)("div", { className: c.gradientRight }),
                          (0, a.jsx)(s.Clickable, {
                            className: c.arrowClickable,
                            onClick: () => I(1),
                            children: (0, a.jsx)(s.ArrowSmallRightIcon, {
                              className: c.arrow,
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
    252547: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      }),
        t(47120);
      var a = t(735250),
        r = t(470079),
        s = t(120356),
        i = t.n(s),
        o = t(793030),
        l = t(481060),
        c = t(383895),
        d = t(689938),
        u = t(51527),
        _ = t(268236);
      function E(e) {
        let { entries: n, viewId: t, officialGuildId: s, onClose: E } = e,
          I = n.length > 7,
          [m, A] = r.useState(!1),
          p = r.useMemo(() => n.slice(0, I && !m ? 6 : void 0), [n, I, m]);
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsx)(o.X6, {
              className: u.sectionHeader,
              variant: "text-md/semibold",
              color: "header-primary",
              children: d.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
            }),
            0 === n.length
              ? (0, a.jsx)(o.xv, {
                  variant: "text-xs/semibold",
                  color: "text-primary",
                  className: _.emptyState,
                  children: d.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: i()(_.friends, { [_.fadedEntries]: I && !m }),
                      children: (0, a.jsx)("div", {
                        className: u.column,
                        children: p.map((e) =>
                          (0, a.jsx)(
                            c.Z,
                            {
                              entry: e,
                              viewId: t,
                              onClose: E,
                              officialGuildId: s,
                            },
                            e.id,
                          ),
                        ),
                      }),
                    }),
                    I &&
                      !m &&
                      (0, a.jsxs)(l.Clickable, {
                        className: _.expandEntriesButton,
                        onClick: () => A(!0),
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
    484527: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      }),
        t(47120);
      var a = t(735250),
        r = t(470079),
        s = t(120356),
        i = t.n(s),
        o = t(643872),
        l = t(442837),
        c = t(481060),
        d = t(570140),
        u = t(652898),
        _ = t(93093),
        E = t(768581),
        I = t(810568),
        m = t(981631),
        A = t(689938),
        p = t(51527),
        g = t(479537);
      function T(e) {
        let { detectedGame: n, trackClick: t, onInviteResolved: s } = e,
          [T, f] = r.useState(),
          O = (0, l.e7)([_.Z], () => {
            var e, n;
            return (
              (null == T
                ? void 0
                : null === (e = T.guild) || void 0 === e
                  ? void 0
                  : e.id) != null &&
              _.Z.isMember(
                null == T
                  ? void 0
                  : null === (n = T.guild) || void 0 === n
                    ? void 0
                    : n.id,
              )
            );
          }),
          N = r.useMemo(() => {
            var e;
            return null === (e = n.websites) || void 0 === e
              ? void 0
              : e.find((e) => {
                  let { category: n } = e;
                  return n === o.p.DISCORD;
                });
          }, [n.websites]);
        if (
          (r.useEffect(() => {
            let e = async (e) => {
              let n = e.split("/").pop();
              if (null != n) {
                let e = await (0, u.Z)(n);
                !0 !== e.banned &&
                  (f(e.invite), null != e.invite && (null == s || s(e.invite)));
              }
            };
            null != N && e(N.url);
          }, [N, s]),
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
          className: p.column,
          children: [
            (0, a.jsx)(c.Heading, {
              className: p.sectionHeader,
              variant: "text-xs/semibold",
              color: "header-secondary",
              children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD,
            }),
            (0, a.jsxs)("div", {
              className: i()(p.row, p.gapMd),
              children: [
                (0, a.jsx)("img", {
                  className: g.guildIcon,
                  src: R,
                  alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
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
                          A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
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
                t(I.as.JoinOfficialServer),
                  d.Z.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: T,
                    code: T.code,
                    context: m.IlC.APP,
                  });
              },
              children: O ? A.Z.Messages.JOINED_GUILD : A.Z.Messages.JOIN_GUILD,
            }),
          ],
        });
      }
    },
    221370: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      }),
        t(47120),
        t(653041);
      var a = t(735250),
        r = t(470079),
        s = t(120356),
        i = t.n(s),
        o = t(758713),
        l = t(657707),
        c = t(51527);
      let d = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
      function u(e) {
        let { platform: n } = e;
        switch (n) {
          case o.z.DESKTOP:
            return (0, a.jsx)(l.pzj, { size: "xs" });
          case o.z.XBOX:
            return (0, a.jsx)(l.Mko, { size: "xs" });
          case o.z.PLAYSTATION:
            return (0, a.jsx)(l.Tsp, { size: "xs" });
          case o.z.NINTENDO:
            return (0, a.jsx)(l.aPH, { size: "xs" });
          default:
            return null;
        }
      }
      function _(e) {
        let { platforms: n } = e;
        return (0, a.jsx)("div", {
          className: i()(c.row, c.gapSm),
          style: { alignItems: "center" },
          children: n.map((e) => (0, a.jsx)(u, { platform: e }, e)),
        });
      }
      function E(e) {
        let { detectedGame: n, className: t } = e,
          s = r.useMemo(() => {
            let e = new Set(n.platforms),
              t = [...e];
            return (
              !e.has(o.z.DESKTOP) &&
                (e.has(o.z.MACOS) || e.has(o.z.LINUX)) &&
                t.push(o.z.DESKTOP),
              t.filter((e) => d.includes(e))
            );
          }, [n.platforms]);
        return 0 === s.length
          ? null
          : (0, a.jsx)("div", {
              className: i()(c.column, c.gapLg, t),
              children: s.length > 0 && (0, a.jsx)(_, { platforms: s }),
            });
      }
    },
    131033: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(793030),
        s = t(689938),
        i = t(51527);
      function o(e) {
        let { detectedGame: n } = e;
        return 0 === n.publishers.length
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
                  children: n.publishers.join(", "),
                }),
              ],
            });
      }
    },
    296768: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(47120);
      var a = t(735250),
        r = t(470079),
        s = t(120356),
        i = t.n(s),
        o = t(392711),
        l = t.n(o),
        c = t(442837),
        d = t(481060),
        u = t(224706),
        _ = t(812206),
        E = t(669764),
        I = t(810568),
        m = t(839392),
        A = t(774073),
        p = t(644941),
        g = t(689938),
        T = t(51527),
        f = t(796805);
      let O = (e) => {
        let { game: n, onClose: t, trackClick: r } = e,
          s = (0, c.e7)([_.Z], () => _.Z.getApplication(n.applicationId));
        return (0, a.jsx)(d.Tooltip, {
          text: n.name,
          children: (e) => {
            var i;
            return (0, a.jsx)(d.Clickable, {
              ...e,
              className: f.similarGameImageClickable,
              onClick: async () => {
                r(I.as.ClickSimilarGame, n.applicationId),
                  (0, d.openModalLazy)(() =>
                    Promise.resolve((e) =>
                      (0, a.jsx)(p.default, {
                        applicationId: n.applicationId,
                        source: I.m1.SimilarGames,
                        ...e,
                      }),
                    ),
                  ),
                  await new Promise((e) => setTimeout(e, 10)),
                  t();
              },
              children: (0, a.jsx)("img", {
                src: n.coverImageUrl,
                className: f.similarGameImage,
                alt: g.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                  game:
                    null !== (i = null == s ? void 0 : s.name) && void 0 !== i
                      ? i
                      : null == n
                        ? void 0
                        : n.name,
                }),
              }),
            });
          },
        });
      };
      function N(e) {
        let {
            applicationId: n,
            onClose: t,
            trackAction: s,
            similarGames: o,
            similarGamesError: _,
          } = e,
          I = (0, c.e7)([m.Z, E.Z], () => {
            let e = void 0 === m.Z.getSimilarGames(n),
              t = o.some((e) => E.Z.isFetching(e));
            return e || t;
          }),
          p = (0, c.Wu)([E.Z], () =>
            o
              .map((e) => E.Z.getGame(e))
              .filter((e) => null != e)
              .filter((e) => null != e.coverImageUrl)
              .filter(A.W1)
              .slice(0, 5),
          );
        return (r.useEffect(() => {
          o.length > 0 && u.Z.getDetectableGamesSupplemental([n, ...o]);
        }, [n, o]),
        I && null == _)
          ? (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("div", {
                  className: i()(f.loadingHeading, T.sectionHeader),
                }),
                (0, a.jsx)("div", {
                  className: i()(T.row, T.gapLg),
                  children: l()
                    .range(0, 5)
                    .map((e) =>
                      (0, a.jsx)("div", { className: f.loadingArtwork }, e),
                    ),
                }),
              ],
            })
          : I || 0 !== p.length
            ? (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)(d.Heading, {
                    className: T.sectionHeader,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: g.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                  }),
                  (0, a.jsx)("div", {
                    className: i()(T.row, T.gapLg),
                    style: {},
                    children: p.map((e) =>
                      (0, a.jsx)(
                        O,
                        { game: e, onClose: t, trackClick: s },
                        e.applicationId,
                      ),
                    ),
                  }),
                ],
              })
            : null;
      }
    },
    978313: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(47120);
      var a = t(735250),
        r = t(470079),
        s = t(120356),
        i = t.n(s),
        o = t(657707),
        l = t(793030),
        c = t(692547),
        d = t(481060),
        u = t(885006),
        _ = t(810568),
        E = t(221370),
        I = t(689938),
        m = t(51527),
        A = t(110367);
      function p(e) {
        let { detectedGame: n, trackAction: t } = e,
          [s, p] = r.useState(
            (null == n ? void 0 : n.summaryLocalized) != null,
          ),
          [g, T] = r.useState(!0),
          [f, O] = r.useState(!1),
          N = r.useRef(null),
          { width: R, height: h } = (0, u.Z)();
        return (r.useEffect(() => {
          let e = N.current;
          null != e && O(e.scrollHeight - e.clientHeight > 1);
        }, [N, R, h]),
        null == n.summary)
          ? null
          : (0, a.jsxs)("div", {
              className: i()(m.column, m.gapSm),
              children: [
                null != n.summaryLocalized &&
                  (0, a.jsxs)("div", {
                    className: i()(m.row, m.gapSm),
                    children: [
                      (0, a.jsx)(o.SxY, {
                        color: c.Z.colors.HEADER_SECONDARY,
                        size: "xs",
                      }),
                      (0, a.jsx)(l.xv, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        children: s
                          ? I.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({
                              onShowOriginal: () => p(!1),
                            })
                          : I.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({
                              onShowTranslated: () => p(!0),
                            }),
                      }),
                    ],
                  }),
                (0, a.jsx)(l.xv, {
                  ref: N,
                  lineClamp: g ? 8 : void 0,
                  variant: "text-sm/normal",
                  children: s ? n.summaryLocalized : n.summary,
                }),
                (f || !g) &&
                  (0, a.jsx)(d.Clickable, {
                    className: m.clickable,
                    onClick: () => {
                      t(g ? _.as.ShowMore : _.as.ShowLess), T(!g);
                    },
                    children: (0, a.jsx)(l.xv, {
                      variant: "text-sm/semibold",
                      children: g
                        ? I.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE
                        : I.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS,
                    }),
                  }),
                (0, a.jsx)(E.Z, { className: A.platforms, detectedGame: n }),
              ],
            });
      }
    },
    931651: function (e, n, t) {
      t.d(n, {
        $: function () {
          return i;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(907040),
        s = t(185923);
      function i(e) {
        let {
          channel: n,
          closePopout: t,
          analyticsOverride: i,
          onSelectEmoji: o,
          messageId: l,
        } = e;
        return (0, a.jsx)(r.Z, {
          closePopout: t,
          channel: n,
          onSelectEmoji: o,
          pickerIntention: s.Hz.REACTION,
          analyticsOverride: i,
          messageId: l,
        });
      }
    },
    885006: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var a = t(470079);
      function r() {
        var e, n;
        let [t, r] = a.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (n = window.innerHeight) && void 0 !== n ? n : 1080,
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
          t
        );
      }
    },
    424678: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(47120);
      var a = t(735250),
        r = t(470079),
        s = t(481060);
      function i(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class o extends r.PureComponent {
        render() {
          let { text: e, lastItem: n, className: t } = this.props;
          return (0, a.jsxs)("span", {
            children: [
              (0, a.jsx)(s.Anchor, {
                className: t,
                onClick: this.handleClick,
                children: e,
              }),
              n ? "" : ", ",
            ],
          });
        }
        constructor(...e) {
          super(...e),
            i(this, "handleClick", () => {
              let { onClick: e, index: n } = this.props;
              null == e || e(n);
            });
        }
      }
      class l extends r.PureComponent {
        render() {
          let e = this.props.artists.split(";");
          if (!this.props.canOpen) return e.join(", ");
          let n = e.length - 1;
          return e.map((e, t) =>
            (0, a.jsx)(
              o,
              {
                text: e,
                index: t,
                lastItem: t === n,
                onClick: this.handleOpenSpotifyArtist,
                className: this.props.linkClassName,
              },
              "spotify-artist-".concat(t),
            ),
          );
        }
        constructor(...e) {
          super(...e),
            i(this, "handleOpenSpotifyArtist", (e) => {
              let { onOpenSpotifyArtist: n } = this.props;
              null == n || n(e);
            });
        }
      }
    },
    237583: function (e, n, t) {
      t(653041), t(47120);
      var a,
        r = t(735250),
        s = t(470079),
        i = t(120356),
        o = t.n(i),
        l = t(481060),
        c = t(598077),
        d = t(908860),
        u = t(579861);
      function _(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class E extends (a = s.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: n,
              renderUser: t = this.defaultRenderUser,
              renderMoreUsers: a,
            } = this.props,
            r = [],
            s = e.length === n ? e.length : n - 1,
            i = 0;
          for (; i < s && i < e.length; ) {
            let n = i === e.length - 1;
            r.push(
              t(e[i] || null, n ? null : d.avatarMasked, "user-".concat(i), n),
            ),
              i++;
          }
          if (i < e.length) {
            let n = Math.min(e.length - i, 99);
            r.push(a("+".concat(n), d.moreUsers, "more-users", n));
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
            _(this, "defaultRenderUser", (e, n, t, a) => {
              let { onClick: s, size: i, guildId: _ } = this.props,
                E = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == E
                ? (0, r.jsx)("div", { className: o()(d.emptyUser, n) }, t)
                : (0, r.jsx)(
                    l.Avatar,
                    {
                      tabIndex: 0,
                      src: E.getAvatarURL(_, (0, l.getAvatarSize)(i)),
                      size: i,
                      "aria-label": E.username,
                      className: o()(n, u.cursorPointer, d.avatarSize),
                      onClick: (e) => (null != s ? s(e, E, this._ref) : null),
                    },
                    E.id,
                  );
            });
        }
      }
      _(E, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, n, t) {
          return (0, r.jsx)("div", { className: n, children: e }, t);
        },
        size: l.AvatarSizes.SIZE_24,
      }),
        (n.Z = E);
    },
    908841: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(325767);
      function s(e) {
        let {
          width: n = 20,
          height: t = 20,
          color: s = "currentColor",
          ...i
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, r.Z)(i),
          width: n,
          height: t,
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
    814225: function (e, n, t) {
      t.d(n, {
        P3: function () {
          return _;
        },
        ZK: function () {
          return u;
        },
        en: function () {
          return I;
        },
      }),
        t(757143),
        t(47120);
      var a = t(913527),
        r = t.n(a);
      if (12633 == t.j) var s = t(266067);
      t(358085), t(73346);
      var i = t(981631),
        o = t(689938);
      let l = {},
        c = {},
        d = Object.freeze({ ALL: -1, ...i.EKQ });
      function u(e) {
        let n = (0, s.LX)(e, {
          path: i.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        });
        return null != n ? n.params.skuId : null;
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
        let n = e.toLowerCase().replace(/_/g, "-"),
          t = d[e];
        (l[n] = t), (c[t] = n);
      });
      let E = [
        ["YYYY-MM-DD", "MMMM DD, Y"],
        ["YYYY-MM", "MMMM Y"],
        ["MM-DD", "MMMM DD"],
        ["MM", "MMMM"],
        ["YYYY", "Y"],
      ];
      function I(e) {
        let { preorderReleaseAt: n, preorderApproximateReleaseDate: t } = e;
        if (null != n) return n.format("MMMM DD");
        if (null == t) return null;
        for (let e = 0; e < E.length; e++) {
          let [n, a] = E[e],
            s = r()(t, n, !0);
          if (s.isValid()) return s.format(a);
        }
        return t;
      }
    },
    643872: function (e, n, t) {
      var a, r;
      t.d(n, {
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
    968333: function (e, n, t) {
      e.exports = { button: "button_c6eb7b", buttonSize: "buttonSize_c6eb7b" };
    },
    793834: function (e, n, t) {
      e.exports = {
        reactions: "reactions_d0fc0d",
        reply: "reply_d0fc0d",
        replyHeader: "replyHeader_d0fc0d",
        replyInput: "replyInput_d0fc0d",
        emojiButton: "emojiButton_d0fc0d",
        reaction: "reaction_d0fc0d",
      };
    },
    615934: function (e, n, t) {
      e.exports = { clickable: "clickable_bffa11" };
    },
    684201: function (e, n, t) {
      e.exports = { popout: "popout_e40224" };
    },
    290500: function (e, n, t) {
      e.exports = {
        listeningTimeline: "listeningTimeline_a218d8",
        seekBarContainer: "seekBarContainer_a218d8",
        seekBarFill: "seekBarFill_a218d8",
        timestamp: "timestamp_a218d8",
      };
    },
    765388: function (e, n, t) {
      e.exports = {
        coachtip: "coachtip_e8254e",
        coachtipContent: "coachtipContent_e8254e",
        coachtipInner: "coachtipInner_e8254e",
        coachtipAsset: "coachtipAsset_e8254e",
        coachtipTextContainer: "coachtipTextContainer_e8254e",
      };
    },
    738127: function (e, n, t) {
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
    301698: function (e, n, t) {
      e.exports = { menuIcon: "menuIcon_aa0ae7" };
    },
    704108: function (e, n, t) {
      e.exports = { loadingSpinner: "loadingSpinner_f2635d" };
    },
    832923: function (e, n, t) {
      e.exports = { container: "container_b11148" };
    },
    501345: function (e, n, t) {
      e.exports = {
        profileEntryCard: "profileEntryCard_f1257c",
        reactions: "reactions_f1257c",
        avatar: "avatar_f1257c",
        playerInfo: "playerInfo_f1257c",
      };
    },
    51527: function (e, n, t) {
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
        scrollable: "scrollable_e881fc",
        coverArtRow: "coverArtRow_e881fc",
        overflowMenu: "overflowMenu_e881fc",
        headerInfo: "headerInfo_e881fc",
        logoWrapper: "logoWrapper_e881fc",
        logo: "logo_e881fc",
        followButton: "followButton_e881fc",
        gameDetails: "gameDetails_e881fc",
        gameBadge: "gameBadge_e881fc",
        newBadge: "newBadge_e881fc",
        mainContent: "mainContent_e881fc",
        sidebar: "sidebar_e881fc",
        sections: "sections_e881fc",
        sectionHeader: "sectionHeader_e881fc",
      };
    },
    825718: function (e, n, t) {
      e.exports = {
        linkIcon: "linkIcon_bb1ae6",
        linkAnchor: "linkAnchor_bb1ae6",
      };
    },
    133512: function (e, n, t) {
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
    268236: function (e, n, t) {
      e.exports = {
        friends: "friends_d8cab0",
        emptyState: "emptyState_d8cab0",
        fadedEntries: "fadedEntries_d8cab0",
        expandEntriesButton: "expandEntriesButton_d8cab0",
      };
    },
    479537: function (e, n, t) {
      e.exports = {
        inviteInfo: "inviteInfo_c2c033",
        guildIcon: "guildIcon_c2c033",
      };
    },
    796805: function (e, n, t) {
      e.exports = {
        similarGameImageClickable:
          "similarGameImageClickable_bd82e2 similarGameImageWrapper_bd82e2",
        similarGameImage: "similarGameImage_bd82e2",
        loadingArtwork:
          "loadingArtwork_bd82e2 similarGameImage_bd82e2 similarGameImageWrapper_bd82e2",
        loadingHeading: "loadingHeading_bd82e2",
      };
    },
    110367: function (e, n, t) {
      e.exports = { platforms: "platforms_a8723c" };
    },
    445524: function (e, n, t) {
      e.exports = {
        image: "image_ed81cc",
        emptyPreviewContainer: "emptyPreviewContainer_ed81cc",
        emptyPreviewImage: "emptyPreviewImage_ed81cc",
        emptyPreviewText: "emptyPreviewText_ed81cc",
      };
    },
    835777: function (e, n, t) {
      e.exports = {
        gameTitle: "gameTitle_cf6db7",
        gameTitleContainer: "gameTitleContainer_cf6db7",
        emptyStateImage: "emptyStateImage_cf6db7",
      };
    },
    211494: function (e, n, t) {
      e.exports = {
        innerContainer: "innerContainer_f62934",
        rankText: "rankText_f62934",
      };
    },
    416405: function (e, n, t) {
      e.exports = { container: "container_c5a4ce", border: "border_c5a4ce" };
    },
    264699: function (e, n, t) {
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
    908860: function (e, n, t) {
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
    579861: function (e, n, t) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=3ff5214ad98efed2f49b.js.map
