"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72306"],
  {
    966390: function (e, n, t) {
      t(47120), t(789020);
      var a = t(481060),
        r = t(570140),
        s = t(430742),
        o = t(904245),
        l = t(166459),
        i = t(531643),
        c = t(881052),
        d = t(673750),
        u = t(141795),
        _ = t(476326),
        E = t(680287),
        I = t(163268),
        A = t(539573),
        p = t(786761),
        m = t(3148),
        T = t(48854),
        O = t(785359),
        R = t(79390),
        g = t(623292),
        N = t(807092),
        P = t(467798),
        h = t(703558),
        f = t(117530),
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
            (0, g.A6)(_));
        let [U, w] = (0, P.Z)(y.content);
        U &&
          ((y.content = w),
          (y.flags = (0, C.pj)(
            null !== (n = y.flags) && void 0 !== n ? n : 0,
            M.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let F = null !== (t = Z.nonce) && void 0 !== t ? t : (0, T.r)(),
          k = (0, m.ZP)({
            channelId: _,
            content: y.content,
            tts: null !== (a = null == G ? void 0 : G.tts) && void 0 !== a && a,
            type: y.type,
            messageReference: y.message_reference,
            flags: y.flags,
            nonce: F,
            poll: (0, R.x9)(Z.poll),
          });
        return (
          ((y.nonce = F),
          j.on("start", (e) => {
            (u = (0, p.e5)({ ...k, id: e.id })),
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
              (0, O.x)({
                fileItems: e.items,
                failureCode: n,
                errorMessage: null == a ? void 0 : a.msg,
              }),
              n === M.evJ.EXPLICIT_CONTENT)
            ) {
              o.Z.sendExplicitMediaClydeError(
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
              (0, i.openUploadError)({
                title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: (0, A.uF)(a, e),
              });
              return;
            }
            if (n !== M.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (b)
                D.reject(new c.Hx({ status: n, body: null != t ? t : {} }, n));
              else {
                var E;
                (0, i.openUploadError)({
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
                0 === f.Z.getUploadCount(_, x) &&
                  l.Z.setUploads({ channelId: _, uploads: v, draftType: x });
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
            o = Array.from(t).map((e, t) => {
              let a = null != s ? s[t] : {};
              return new u.n(
                { file: e, platform: _.ow.WEB, isThumbnail: r, ...a },
                n,
              );
            });
          v({ channelId: n, uploads: o, draftType: a });
        },
        upload: function e(n) {
          let {
              channelId: t,
              file: l,
              draftType: c,
              message: d,
              hasSpoiler: u,
              filename: _,
            } = n,
            A = { content: "", tts: !1, hasSpoiler: u, filename: _ };
          if (null != d) {
            (A.content = d.content),
              (A.tts = d.tts),
              (A.channel_id = d.channel_id);
            let e = N.Z.getPendingReply(t);
            if (null != e) {
              let n = o.Z.getSendMessageOptionsForReply(e);
              (A.type = M.uaV.REPLY),
                (A.message_reference = n.messageReference),
                (A.allowed_mentions = n.allowedMentions),
                (0, g.A6)(t);
            }
          }
          let p = new E.Z(M.ANM.MESSAGES(t));
          p.on("start", (e) => {
            r.Z.dispatch({
              type: "UPLOAD_START",
              channelId: t,
              file: e,
              uploader: p,
            });
          }),
            p.on("progress", (e) => {
              r.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: t, file: e });
            }),
            p.on("error", (n, u, _) => {
              if (
                (r.Z.dispatch({ type: "UPLOAD_FAIL", channelId: t, file: n }),
                (0, O.x)({ fileItems: n.items, failureCode: u }),
                u === M.evJ.EXPLICIT_CONTENT)
              ) {
                o.Z.sendExplicitMediaClydeError(
                  t,
                  null == _ ? void 0 : _.attachments,
                  I.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, i.openUploadError)({
                title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                  onClick: () => {
                    (0, a.closeModal)(i.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: t, file: l, draftType: c, message: d });
                  },
                }),
              }),
                "" !== A.content &&
                  "" === h.Z.getDraft(t, c) &&
                  s.Z.saveDraft(t, A.content, c);
            }),
            p.on("complete", (e) => {
              r.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: t, file: e });
            }),
            p.upload(l, A);
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
        o = t(476326),
        l = t(861990),
        i = t(689938);
      class c extends s.Z {
        async uploadFiles(e, n) {
          let { addFilesTo: t } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super.upload({ name: i.Z.Messages.ATTACHMENT_PROCESSING }, n, e);
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
          let i = [];
          this.files.forEach((e, n) => {
            let t = (0, l.B)(e, n);
            e.item.platform === o.ow.WEB && i.push({ ...t });
          }),
            (s =
              null != t && null != n
                ? this._addAttachmentsToPayload(n, t, i)
                : { ...n, attachments: i });
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
        _: function () {
          return r;
        },
        y: function () {
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
          return i;
        },
      });
      var a = t(735250),
        r = t(120356),
        s = t.n(r),
        o = t(481060),
        l = t(615934);
      function i(e) {
        let { className: n, onClick: t, ...r } = e,
          i = (0, a.jsx)(o.Clickable, {
            ...r,
            className: s()(null != t && l.clickable, n),
            onClick: t,
          });
        return null == t ? (0, a.jsx)(o.BlockInteractions, { children: i }) : i;
      }
    },
    91907: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = t(735250),
        r = t(470079),
        s = t(793030),
        o = t(256139),
        l = t(866040);
      function i(e) {
        let {
            user: n,
            text: t,
            channel: i,
            textClassName: c,
            onPopoutClosed: d,
          } = e,
          u = (0, r.useMemo)(() => [n], [n]);
        return (0, a.jsx)(l.Z, {
          participants: u,
          channel: i,
          onPopoutClosed: d,
          children: (e) =>
            (0, a.jsx)(o.Z, {
              ...e,
              tag: "span",
              children: (0, a.jsx)(s.x, {
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
          return A;
        },
      }),
        t(411104);
      var a = t(735250),
        r = t(470079),
        s = t(442837),
        o = t(481060),
        l = t(239091),
        i = t(751688),
        c = t(184301),
        d = t(347475),
        u = t(210887),
        _ = t(5192),
        E = t(684201);
      function I(e) {
        let { participants: n, channel: r } = e;
        return (0, a.jsx)(o.Scroller, {
          className: E.popout,
          children: n.map((e) =>
            (0, a.jsx)(
              i.Z,
              {
                guildId: null == r ? void 0 : r.guild_id,
                user: e,
                nick: _.ZP.getNickname(
                  null == r ? void 0 : r.guild_id,
                  null == r ? void 0 : r.id,
                  e,
                ),
                onContextMenu: (n) => {
                  (0, l.jW)(n, async () => {
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
      function A(e) {
        let { children: n, participants: t, channel: l, onPopoutClosed: i } = e,
          _ = (0, s.e7)([u.Z], () => u.Z.theme),
          E = 1 === t.length ? t[0] : null,
          A = (0, r.useCallback)(
            (e) => {
              if (null != E)
                return (0, a.jsx)(d.Z, {
                  ...e,
                  closePopout: () => {
                    e.closePopout(), null == i || i();
                  },
                  userId: E.id,
                  guildId: null == l ? void 0 : l.guild_id,
                  channelId: null == l ? void 0 : l.id,
                });
              if (null != t)
                return (0, a.jsx)(I, { participants: t, channel: l });
              throw Error("One of participant or participants is required");
            },
            [l, i, t, E],
          );
        return (0, a.jsx)(o.ThemeContextProvider, {
          theme: _,
          children: (0, a.jsx)(o.Popout, {
            renderPopout: A,
            preload: () =>
              null != E
                ? (0, c.Z)(E, {
                    guildId: null == l ? void 0 : l.guild_id,
                    channelId: null == l ? void 0 : l.id,
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
      var o = t(442837),
        l = t(866442),
        i = t(607070),
        c = t(220082),
        d = t(981631);
      n.Z = (e) => {
        var n, r, u, _, E, I;
        let A;
        A = t(481060).tokens;
        let p = (0, o.e7)([i.Z], () => i.Z.saturation),
          [m, T] = (0, c.Cf)(
            e,
            null !==
              (I =
                null == A
                  ? void 0
                  : null === (E = A.colors) || void 0 === E
                    ? void 0
                    : null === (_ = E.BACKGROUND_FLOATING) || void 0 === _
                      ? void 0
                      : null === (u = _.resolve) || void 0 === u
                        ? void 0
                        : null ===
                              (r = u.call(_, {
                                theme: d.BRd.DARK,
                                saturation: p,
                              })) || void 0 === r
                          ? void 0
                          : null === (n = r.hex) || void 0 === n
                            ? void 0
                            : n.call(r)) && void 0 !== I
              ? I
              : "#000",
          );
        return a.useMemo(() => {
          let e = (0, l._i)(m),
            n = (0, l._i)(T);
          for (let n = 1; n < 8 && !((0, l.Bd)(e) >= 0.725); n++) {
            e = s()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, l.Bd)(n) >= 0.725); e++) {
            n = s()(n).darken(0.5).num();
          }
          let t = (0, l.Rf)(e);
          return { primaryColor: t, secondaryColor: (0, l.Rf)(n) };
        }, [m, T]);
      };
    },
    410441: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(481060),
        s = t(832923);
      function o(e) {
        let { onClick: n, Icon: t, "aria-label": o } = e,
          l = (0, r.useToken)(
            r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          i = (0, a.jsx)(t, {
            color: l.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == n
          ? (0, a.jsx)("div", {
              className: s.container,
              "aria-label": o,
              children: i,
            })
          : (0, a.jsx)(r.Tooltip, {
              text: o,
              children: (e) =>
                (0, a.jsx)(r.Clickable, {
                  className: s.container,
                  ...e,
                  onClick: n,
                  children: i,
                }),
            });
      }
    },
    998058: function (e, n, t) {
      t.d(n, {
        i: function () {
          return l;
        },
      });
      var a = t(544891),
        r = t(570140),
        s = t(881052),
        o = t(981631);
      let l = async (e) => {
        try {
          var n;
          let t = await a.tn.get({ url: o.ANM.SIMILAR_GAMES(e) }),
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
        o,
        l = t(442837),
        i = t(570140);
      let c = {};
      class d extends (o = l.ZP.Store) {
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
        (n.Z = new d(i.Z, {
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
    326103: function (e, n, t) {
      t.d(n, {
        v: function () {
          return r;
        },
      });
      let a = (0, t(818083).B)({
        kind: "user",
        id: "2024-09_game_profile_feedback_flow",
        label: "Game Profile Feedback Flow",
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
        o = t(876215),
        l = t(442837),
        i = t(146282),
        c = t(897674),
        d = t(709054),
        u = t(206583);
      let _ = new Set([o.s.PLAYED_GAME]),
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
          requestId: (0, l.e7)([i.Z], () =>
            i.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED),
          ),
          entries: t,
        };
      }
    },
    124030: function (e, n, t) {
      t.d(n, {
        A: function () {
          return o;
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
      function o() {
        return a.K.set(r, { hasInteractedWithSurvey: !0 });
      }
    },
    383895: function (e, n, t) {
      var a = t(735250),
        r = t(470079),
        s = t(120356),
        o = t.n(s),
        l = t(442837),
        i = t(481060),
        c = t(178762),
        d = t(91140),
        u = t(297781),
        _ = t(592125),
        E = t(944486),
        I = t(594174),
        A = t(5192),
        p = t(810568),
        m = t(689938),
        T = t(501345),
        O = t(51527);
      n.Z = (e) => {
        let { entry: n, viewId: t, officialGuildId: s, onClose: R } = e,
          g = (0, l.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
          N = (0, l.e7)([I.default], () => I.default.getUser(n.author_id)),
          { nick: P, avatar: h } = r.useMemo(() => {
            let e =
              null == N
                ? void 0
                : N.getAvatarURL(null == g ? void 0 : g.guild_id, 48, !1);
            return {
              nick: A.ZP.getName(
                null == g ? void 0 : g.guild_id,
                null == g ? void 0 : g.id,
                N,
              ),
              avatar: e,
            };
          }, [N, g]);
        return null == N
          ? null
          : (0, a.jsx)(i.Popout, {
              position: "right",
              renderPopout: (e) => {
                let { closePopout: r, updatePosition: o } = e;
                return (0, a.jsx)(c.J, {
                  entry: n,
                  closePopout: r,
                  updatePopoutPosition: o,
                  onReaction: () => {
                    (0, p.UE)({
                      action: p.as.SendMessageUser,
                      applicationId: n.extra.application_id,
                      gameName: n.extra.game_name,
                      recipientUserId: n.author_id,
                      viewId: t,
                      officialGuildId: s,
                    }),
                      R(),
                      r();
                  },
                  onUserPopoutClosed: () => r(),
                  disableGameProfileLinks: !0,
                });
              },
              positionKey: "game-profile-entry-".concat(n.id),
              onRequestOpen: () => {
                (0, p.UE)({
                  action: p.as.ClickMessageUser,
                  applicationId: n.extra.application_id,
                  gameName: n.extra.game_name,
                  recipientUserId: n.author_id,
                  viewId: t,
                  officialGuildId: s,
                });
              },
              children: (e) =>
                (0, a.jsx)(i.Clickable, {
                  ...e,
                  className: T.profileEntryCard,
                  children: (0, a.jsx)(i.FocusRing, {
                    offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    children: (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("img", {
                          className: T.avatar,
                          src: h,
                          alt: m.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: P },
                          ),
                        }),
                        (0, a.jsx)("div", {
                          className: o()(T.playerInfo),
                          children: (0, a.jsxs)("div", {
                            className: o()(O.column, O.gapXs),
                            children: [
                              (0, a.jsx)(i.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                lineClamp: 1,
                                children: P,
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
                          className: T.reactions,
                          children: (0, a.jsx)(i.ArrowAngleLeftUpIcon, {}),
                        }),
                      ],
                    }),
                  }),
                }),
            });
      };
    },
    183391: function (e, n, t) {
      t(47120);
      var a = t(735250),
        r = t(470079),
        s = t(120356),
        o = t.n(s),
        l = t(643872),
        i = t(481060),
        c = t(570140),
        d = t(652898),
        u = t(93093),
        _ = t(768581),
        E = t(810568),
        I = t(981631),
        A = t(689938),
        p = t(51527);
      let m = [l.p.OFFICIAL, l.p.TWITTER, l.p.YOUTUBE],
        T = (e) => {
          let { invite: n, trackClick: t } = e,
            { approximate_member_count: r, guild: s } = n;
          if (null == s) return null;
          let l = u.Z.isMember(s.id);
          if (
            !(null == s ? void 0 : s.features.includes("VERIFIED")) &&
            !(null == s ? void 0 : s.features.includes("PARTNER"))
          )
            return null;
          let d = _.ZP.getGuildIconURL({ id: s.id, icon: s.icon, size: 32 });
          return (0, a.jsxs)("div", {
            className: o()(p.column),
            children: [
              (0, a.jsx)(i.Heading, {
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD,
              }),
              (0, a.jsxs)("div", {
                className: o()(p.row, p.gapMd),
                children: [
                  (0, a.jsx)("img", {
                    className: p.icon,
                    src: d,
                    alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
                      guildName: s.name,
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: o()(p.gapNone),
                    children: [
                      (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: s.name,
                      }),
                      null != r &&
                        (0, a.jsx)(i.Text, {
                          variant: "text-xxs/normal",
                          children:
                            A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                              { count: r },
                            ),
                        }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(i.Button, {
                color: i.ButtonColors.PRIMARY,
                onClick: () => {
                  t(E.as.JoinOfficialServer),
                    c.Z.dispatch({
                      type: "INVITE_MODAL_OPEN",
                      invite: n,
                      code: n.code,
                      context: I.IlC.APP,
                    });
                },
                children: l
                  ? A.Z.Messages.JOINED_GUILD
                  : A.Z.Messages.JOIN_GUILD,
              }),
            ],
          });
        };
      n.Z = (e) => {
        let { websites: n, trackClick: t, onInviteResolved: s } = e,
          c =
            null == n
              ? void 0
              : n.find((e) => {
                  let { category: n } = e;
                  return n === l.p.DISCORD;
                }),
          [u, _] = r.useState();
        if (
          (r.useEffect(() => {
            let e = async (e) => {
              let n = e.split("/").pop();
              if (null != n) {
                let e = await (0, d.Z)(n);
                !0 !== e.banned &&
                  (_(e.invite), null != e.invite && (null == s || s(e.invite)));
              }
            };
            null != c && e(c.url);
          }, [c, s]),
          null == n || 0 === n.length)
        )
          return null;
        let I = n
          .filter((e) => {
            let { category: n } = e;
            return m.includes(n);
          })
          .sort((e, n) => e.category - n.category);
        return (0, a.jsxs)("div", {
          className: o()(p.column),
          children: [
            null != u && (0, a.jsx)(T, { invite: u, trackClick: t }),
            (0, a.jsxs)("div", {
              className: o()(p.column, p.gapSm),
              children: [
                (0, a.jsx)(i.Heading, {
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: A.Z.Messages.GAME_PROFILE_LINKS,
                }),
                (0, a.jsx)("div", {
                  className: p.row,
                  children: I.map((e) => {
                    let n,
                      r,
                      { category: s, url: o } = e,
                      c = null;
                    switch (s) {
                      case l.p.OFFICIAL:
                        (c = (0, a.jsx)(i.GlobeEarthIcon, {
                          colorClass: p.linkIcon,
                        })),
                          (r = E.as.WebsiteLink),
                          (n = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                        break;
                      case l.p.TWITTER:
                        (c = (0, a.jsx)(i.XNeutralIcon, {
                          colorClass: p.linkIcon,
                        })),
                          (r = E.as.XLink),
                          (n = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                        break;
                      case l.p.YOUTUBE:
                        (r = E.as.YouTubeLink),
                          (c = (0, a.jsx)(i.YoutubeNeutralIcon, {
                            colorClass: p.linkIcon,
                          })),
                          (n = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                    }
                    return null != c
                      ? (0, a.jsx)(
                          i.Anchor,
                          {
                            className: p.linkAnchor,
                            title: n,
                            href: o,
                            onClick: () => {
                              t(r);
                            },
                            target: "_blank",
                            children: c,
                          },
                          o,
                        )
                      : null;
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    644941: function (e, n, t) {
      t.r(n), t(47120), t(653041);
      var a = t(735250),
        r = t(470079),
        s = t(120356),
        o = t.n(s),
        l = t(392711),
        i = t(913527),
        c = t.n(i),
        d = t(758713),
        u = t(705512),
        _ = t(442837),
        E = t(433517),
        I = t(481060),
        A = t(224706),
        p = t(560361),
        m = t(812206),
        T = t(168551),
        O = t(485267),
        R = t(26033),
        g = t(561308),
        N = t(669764),
        P = t(962250),
        h = t(706454),
        f = t(768581),
        C = t(814225),
        L = t(709054),
        M = t(810568),
        S = t(998058),
        v = t(839392),
        x = t(96856),
        G = t(567409),
        Z = t(774073),
        b = t(124030),
        j = t(383895),
        D = t(183391),
        y = t(715318),
        U = t(206583),
        w = t(689938),
        F = t(51527);
      let k = "GameProfileModal",
        K = (e) => {
          let { game: n, onClose: t, trackClick: r } = e,
            s = (0, _.e7)([m.Z], () => {
              var e;
              return m.Z.getApplication(
                null !== (e = null == n ? void 0 : n.applicationId) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            });
          if (null == n) return null;
          let o = n.coverImageUrl;
          return (0, a.jsx)(I.Tooltip, {
            text: n.name,
            children: (e) => {
              var l;
              return (0, a.jsx)(I.Clickable, {
                ...e,
                className: F.clickable,
                onClick: async () => {
                  r(M.as.ClickSimilarGame, n.applicationId),
                    (0, I.openModalLazy)(() =>
                      Promise.resolve((e) =>
                        (0, a.jsx)(Y, {
                          applicationId: n.applicationId,
                          source: M.m1.SimilarGames,
                          ...e,
                        }),
                      ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    t();
                },
                children: (0, a.jsx)("img", {
                  src: o,
                  className: F.similarGames,
                  alt: w.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                    game:
                      null !== (l = null == s ? void 0 : s.name) && void 0 !== l
                        ? l
                        : null == n
                          ? void 0
                          : n.name,
                  }),
                }),
              });
            },
          });
        },
        B = () =>
          (0, a.jsxs)("div", {
            className: F.gameBadge,
            children: [
              (0, a.jsx)(I.FireIcon, { size: "xxs" }),
              (0, a.jsx)(I.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: w.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          }),
        H = [d.z.DESKTOP, d.z.XBOX, d.z.PLAYSTATION, d.z.NINTENDO],
        Q = (e) => {
          let { platforms: n } = e,
            t = [...new Set(n)];
          !t.includes(d.z.DESKTOP) &&
            (t.includes(d.z.MACOS) || t.includes(d.z.LINUX)) &&
            t.push(d.z.DESKTOP);
          let r = (t = t.filter((e) => H.includes(e))).map((e) => {
            switch (e) {
              case d.z.DESKTOP:
                return (0, a.jsx)(I.ScreenIcon, { size: "xs" }, e);
              case d.z.XBOX:
                return (0, a.jsx)(I.XboxNeutralIcon, { size: "xs" }, e);
              case d.z.PLAYSTATION:
                return (0, a.jsx)(I.PlaystationNeutralIcon, { size: "xs" }, e);
              case d.z.NINTENDO:
                return (0, a.jsx)(
                  I.NintendoSwitchNeutralIcon,
                  { size: "xs" },
                  e,
                );
              default:
                return null;
            }
          });
          return (0, a.jsxs)("div", {
            className: o()(F.row, F.gapSm),
            style: { alignItems: "center" },
            children: [
              (0, a.jsx)(I.Text, {
                variant: "text-sm/normal",
                children: " \xb7 ",
              }),
              r,
            ],
          });
        },
        W = (e) => e.filter(Z.z6).slice(0, 5),
        Y = (e) => {
          var n, s;
          let {
              applicationId: i,
              source: d,
              sourceUserId: H,
              transitionState: Y,
              onClose: z,
            } = e,
            { clientThemesClassName: V } = (0, T.ZP)(),
            { width: X, height: J } = (0, P.b)(),
            [q, $] = r.useState(() => {
              var e;
              return null === (e = E.K.get(k)) || void 0 === e ? void 0 : e[i];
            }),
            ee = (0, _.e7)([h.default], () => h.default.locale),
            [en, et] = r.useState(null),
            [ea, er] = r.useState(!0),
            [es, eo] = r.useState(!1),
            el = r.useRef(null),
            ei = r.useMemo(() => (0, M.fP)(), []);
          r.useEffect(() => {
            let e = el.current;
            null != e && eo(e.scrollHeight - e.clientHeight > 1);
          }, [el, X, J]),
            r.useEffect(() => {
              (0, O.Jn)();
            }, []);
          let ec = (0, _.Wu)([v.Z], () => {
              var e;
              return (
                null !== (e = v.Z.getSimilarGames(i)) && void 0 !== e ? e : []
              ).slice(0, 25);
            }),
            ed = (0, _.Wu)([N.Z], () =>
              ec
                .map((e) => N.Z.getGame(e))
                .filter(Z.W1)
                .slice(0, 5),
            ),
            eu = r.useRef([]);
          r.useEffect(() => {
            eu.current = ec;
          }, [ec]),
            r.useEffect(() => {
              (async () => {
                if (0 === ec.length) {
                  et(null);
                  try {
                    await (0, S.i)(i);
                  } catch (e) {
                    et(e);
                  }
                }
              })(),
                A.Z.getDetectableGamesSupplemental([i, ...ec]);
            }, [i, ec]);
          let e_ = (0, _.e7)([v.Z, N.Z], () => {
              let e = void 0 === v.Z.getSimilarGames(i),
                n = ec.some((e) => N.Z.isFetching(e));
              return e || n;
            }),
            { entries: eE } = (0, G.Z)(),
            eI = r.useMemo(() => {
              var e;
              return null !==
                (e =
                  null == eE
                    ? void 0
                    : eE.filter(
                        (e) => (0, R.dX)(e) && e.extra.application_id === i,
                      )) && void 0 !== e
                ? e
                : [];
            }, [eE, i]),
            eA = eI.length > 7,
            [ep, em] = r.useState(!1),
            [eT, eO] = r.useState(null);
          r.useEffect(() => {
            var e, n;
            (0, M.IS)({
              source: d,
              viewId: ei,
              applicationId: i,
              gameName:
                null !==
                  (n =
                    null !== (e = null == eg ? void 0 : eg.name) && void 0 !== e
                      ? e
                      : null == eR
                        ? void 0
                        : eR.name) && void 0 !== n
                  ? n
                  : "",
              authorId: H,
            });
          }, []),
            (0, p.Z)(() => {
              var e, n, t;
              let a = Date.now(),
                r = eI.map((e) => {
                  let n = (0, g.kr)(e) ? (0, g.T_)(e, a) : (0, g.GL)(e, ee);
                  return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n,
                  });
                });
              (0, M.wz)({
                viewId: ei,
                applicationId: i,
                gameName:
                  null !==
                    (t =
                      null !== (n = null == eg ? void 0 : eg.name) &&
                      void 0 !== n
                        ? n
                        : null == eR
                          ? void 0
                          : eR.name) && void 0 !== t
                    ? t
                    : "",
                playedFriendIds: eI.map((e) => e.author_id),
                playedFriendsData: r,
                similarGames: W(eu.current),
                officialGuildId:
                  null == eT
                    ? void 0
                    : null === (e = eT.guild) || void 0 === e
                      ? void 0
                      : e.id,
              });
            });
          let eR = m.Z.getApplication(i),
            eg = (0, _.e7)([N.Z], () => N.Z.getGame(i)),
            eN = r.useMemo(
              () => (null == eg ? void 0 : eg.genres.map(C.P3).join(", ")),
              [eg],
            ),
            eP = r.useMemo(() => {
              if (null == eg) return "";
              let { artwork: e, screenshots: n } = eg;
              if (e.length > 0) {
                let n = Math.floor(Math.random() * (e.length - 1));
                return e[n];
              }
              if (n.length > 0) {
                let e = Math.floor(Math.random() * (n.length - 1));
                return n[e];
              }
              return "";
            }, [eg]),
            eh = r.useMemo(() => {
              var e, n;
              let t = (
                null !== (e = null == eg ? void 0 : eg.artwork) && void 0 !== e
                  ? e
                  : []
              ).map((e) => ({ src: e }));
              return [
                ...(null !== (n = null == eg ? void 0 : eg.screenshots) &&
                void 0 !== n
                  ? n
                  : []
                ).map((e) => ({ src: e })),
                ...t,
              ];
            }, [
              null == eg ? void 0 : eg.artwork,
              null == eg ? void 0 : eg.screenshots,
            ]),
            ef = (e, n) => {
              var t;
              (0, M.UE)({
                gameName: null != eL ? eL : "",
                applicationId: i,
                action: e,
                similarGameId: n,
                viewId: ei,
                officialGuildId:
                  null == eT
                    ? void 0
                    : null === (t = eT.guild) || void 0 === t
                      ? void 0
                      : t.id,
              });
            },
            eC = (0, x.p)("GameProfileModal");
          if (null == eg) return null;
          let eL =
              null !== (n = eg.name) && void 0 !== n
                ? n
                : null == eR
                  ? void 0
                  : eR.name,
            eM =
              null == eR ? void 0 : eR.getIconURL(160, f.$k ? "webp" : "png"),
            eS = null !== (s = eg.coverImageUrl) && void 0 !== s ? s : eM,
            { summary: ev, websites: ex, publishers: eG, platforms: eZ } = eg,
            eb = L.default.extractTimestamp(i),
            ej = c()().diff(c()(eb), "days") <= U.G,
            eD = eI.some((e) => (0, g.ig)(e) === u.o.GLOBAL);
          return (0, a.jsx)(I.ModalRoot, {
            transitionState: Y,
            size: I.ModalSize.DYNAMIC,
            className: o()(V, F.gameProfileModal),
            children: (0, a.jsxs)(I.ScrollerNone, {
              className: F.scrollable,
              children: [
                (0, a.jsx)("div", {
                  className: o()(F.gameArtHero),
                  style: { backgroundImage: 'url("'.concat(eP, '")') },
                }),
                (0, a.jsxs)("div", {
                  className: o()(F.content, F.column, F.headerInfo),
                  children: [
                    (0, a.jsxs)("div", {
                      className: F.coverArtRow,
                      children: [
                        (0, a.jsx)("div", {
                          className: F.logoWrapper,
                          children:
                            null != eS &&
                            (0, a.jsx)("img", {
                              className: F.logo,
                              src: eS,
                              alt: w.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format(
                                { game: eL },
                              ),
                            }),
                        }),
                        (0, a.jsx)(y.Z, {
                          applicationId: i,
                          className: F.overflowMenu,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: o()(F.row, F.gapSm, F.gameDetails),
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)(I.Heading, {
                              variant: "heading-xl/bold",
                              children: eL,
                            }),
                            (0, a.jsxs)("div", {
                              className: o()(F.row, F.gapSm),
                              children: [
                                null != eM &&
                                  (0, a.jsx)("img", {
                                    src: eM,
                                    height: 16,
                                    alt: w.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                      { game: eL },
                                    ),
                                  }),
                                (0, a.jsx)(I.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: eN,
                                }),
                                ej &&
                                  (0, a.jsx)(I.Text, {
                                    variant: "eyebrow",
                                    className: F.newBadge,
                                    children: w.Z.Messages.NEW,
                                  }),
                                eD &&
                                  (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(I.Text, {
                                        variant: "text-sm/medium",
                                        children: " \xb7 ",
                                      }),
                                      (0, a.jsx)(B, {}),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          children:
                            eC &&
                            (0, a.jsx)(I.Tooltip, {
                              text: q
                                ? w.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                                : w.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                              children: (e) =>
                                (0, a.jsxs)(I.Button, {
                                  ...e,
                                  innerClassName: F.followButton,
                                  color: q
                                    ? I.Button.Colors.PRIMARY
                                    : I.Button.Colors.BRAND,
                                  onClick: () => {
                                    var e;
                                    let n =
                                      null !== (e = E.K.get(k)) && void 0 !== e
                                        ? e
                                        : {};
                                    (n[i] = !n[i]),
                                      E.K.set(k, n),
                                      ef(
                                        n[i]
                                          ? M.as.FollowGame
                                          : M.as.UnfollowGame,
                                      ),
                                      n[i] &&
                                        (0, b.L)() &&
                                        (0, I.openModalLazy)(async () => {
                                          let { default: e } = await t
                                            .e("86564")
                                            .then(t.bind(t, 641758));
                                          return (n) =>
                                            (0, a.jsx)(e, {
                                              ...n,
                                              applicationId: i,
                                              background: eP,
                                              viewId: ei,
                                            });
                                        }),
                                      $(n[i]);
                                  },
                                  children: [
                                    q
                                      ? (0, a.jsx)(I.BellSlashIcon, {
                                          color: "white",
                                        })
                                      : (0, a.jsx)(I.BellIcon, {
                                          color: "white",
                                        }),
                                    q
                                      ? w.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME
                                      : w.Z.Messages.FOLLOW,
                                  ],
                                }),
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(I.HeadingLevel, {
                  children: (0, a.jsxs)("div", {
                    className: o()(F.content, F.mainContent),
                    children: [
                      (0, a.jsxs)("div", {
                        className: F.column,
                        children: [
                          (0, a.jsx)(I.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children:
                              w.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
                          }),
                          (0, a.jsxs)("div", {
                            className: o()(F.section, {
                              [F.fadedEntries]: eA && !ep,
                            }),
                            children: [
                              0 === eI.length &&
                                (0, a.jsx)(I.Text, {
                                  variant: "text-xs/semibold",
                                  color: "text-primary",
                                  className: F.emptyFriendsWhoPlay,
                                  children:
                                    w.Z.Messages
                                      .GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                                }),
                              (0, a.jsx)("div", {
                                className: o()(F.column, F.gapNone),
                                children:
                                  null == eI
                                    ? void 0
                                    : eI
                                        .slice(0, eA && !ep ? 6 : void 0)
                                        .map((e) => {
                                          var n;
                                          return (0, a.jsx)(
                                            j.Z,
                                            {
                                              entry: e,
                                              viewId: ei,
                                              onClose: z,
                                              officialGuildId:
                                                null == eT
                                                  ? void 0
                                                  : null === (n = eT.guild) ||
                                                      void 0 === n
                                                    ? void 0
                                                    : n.id,
                                            },
                                            e.id,
                                          );
                                        }),
                              }),
                            ],
                          }),
                          eA &&
                            !ep &&
                            (0, a.jsxs)(I.Clickable, {
                              className: F.expandEntriesButton,
                              onClick: () => em(!0),
                              children: [
                                (0, a.jsx)(I.Text, {
                                  variant: "text-xs/semibold",
                                  color: "interactive-normal",
                                  children:
                                    w.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES,
                                }),
                                (0, a.jsx)(I.ChevronSmallDownIcon, {
                                  size: "xs",
                                }),
                              ],
                            }),
                          eh.length > 0 &&
                            (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(I.Heading, {
                                  variant: "text-md/semibold",
                                  color: "header-primary",
                                  children:
                                    w.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                                }),
                                (0, a.jsx)(I.Scroller, {
                                  className: o()(F.row, F.imageScroller),
                                  orientation: "horizontal",
                                  children: eh.map((e, n) =>
                                    (0, a.jsx)(
                                      I.Clickable,
                                      {
                                        className: F.clickable,
                                        focusProps: {
                                          offset: 4,
                                          ringClassName: F.gameArtworkFocusRing,
                                        },
                                        onClick: () => {
                                          ef(M.as.ClickImage),
                                            (0, I.openModalLazy)(async () => {
                                              let { default: e } = await t
                                                .e("99857")
                                                .then(t.bind(t, 895023));
                                              return (t) => {
                                                let { ...r } = t;
                                                return (0, a.jsx)(e, {
                                                  className: F.mediaModal,
                                                  ...r,
                                                  items: eh,
                                                  startingIndex: n,
                                                });
                                              };
                                            });
                                        },
                                        children: (0, a.jsx)("img", {
                                          src: e.src,
                                          className: F.gameArtwork,
                                          alt: w.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                            { game: eL },
                                          ),
                                        }),
                                      },
                                      e.src,
                                    ),
                                  ),
                                }),
                                (0, a.jsx)(I.Spacer, { size: 8 }),
                              ],
                            }),
                          e_ &&
                            null == en &&
                            (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)("div", {
                                  className: F.loadingHeadingSimilarGames,
                                }),
                                (0, a.jsx)("div", {
                                  className: F.row,
                                  children: (0, l.range)(0, 5).map((e) =>
                                    (0, a.jsx)(
                                      "div",
                                      {
                                        className: F.loadingSimilarGamesArtwork,
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          !e_ &&
                            ed.length > 0 &&
                            (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(I.Heading, {
                                  variant: "text-md/semibold",
                                  color: "header-primary",
                                  children:
                                    w.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                                }),
                                (0, a.jsx)("div", {
                                  className: F.row,
                                  style: {},
                                  children: ed.map((e) =>
                                    (0, a.jsx)(
                                      K,
                                      { game: e, onClose: z, trackClick: ef },
                                      null == e ? void 0 : e.applicationId,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: o()(F.sidebar, F.column),
                        children: [
                          (0, a.jsx)(I.Heading, {
                            variant: "heading-md/bold",
                            children: w.Z.Messages.ABOUT,
                          }),
                          (0, a.jsxs)("div", {
                            className: F.sidebarSections,
                            children: [
                              null != ev &&
                                (0, a.jsxs)("div", {
                                  className: o()(F.column, F.gapSm),
                                  children: [
                                    (0, a.jsx)(I.Text, {
                                      ref: el,
                                      lineClamp: ea ? 8 : void 0,
                                      variant: "text-sm/normal",
                                      children: ev,
                                    }),
                                    (es || !ea) &&
                                      (0, a.jsx)(I.Clickable, {
                                        className: F.clickable,
                                        onClick: () => {
                                          ef(
                                            ea ? M.as.ShowMore : M.as.ShowLess,
                                          ),
                                            er(!ea);
                                        },
                                        children: (0, a.jsx)(I.Text, {
                                          variant: "text-sm/semibold",
                                          children: ea
                                            ? w.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_MORE
                                            : w.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_LESS,
                                        }),
                                      }),
                                  ],
                                }),
                              (0, a.jsx)(D.Z, {
                                websites: ex,
                                trackClick: ef,
                                onInviteResolved: eO,
                              }),
                              (eG.length > 0 || eZ.length > 0) &&
                                (0, a.jsx)("div", {
                                  className: o()(F.column),
                                  children:
                                    eG.length > 0 &&
                                    (0, a.jsxs)("div", {
                                      className: o()(F.column, F.gapSm),
                                      children: [
                                        (0, a.jsx)(I.Heading, {
                                          variant: "text-xs/semibold",
                                          color: "header-secondary",
                                          children:
                                            w.Z.Messages.GAME_PROFILE_PUBLISHER,
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: o()(F.row, F.gapMd),
                                          children: [
                                            (0, a.jsx)(I.Text, {
                                              variant: "text-sm/normal",
                                              children: eG.join(", "),
                                            }),
                                            eZ.length > 0 &&
                                              (0, a.jsx)(Q, { platforms: eZ }),
                                          ],
                                        }),
                                      ],
                                    }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      n.default = Y;
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
        o = t(299206),
        l = t(326103),
        i = t(689938);
      function c(e) {
        let { applicationId: n, className: t } = e,
          c = (0, l.v)("GameProfileOverflowMenu"),
          d = (0, o.Z)({ id: n, label: i.Z.Messages.COPY_ID_APPLICATION }),
          u = () => {},
          _ = c
            ? (0, a.jsxs)(r.MenuItem, {
                id: "game-profile-something-wrong",
                label: i.Z.Messages.GAME_PROFILE_SOMETHING_WENT_WRONG,
                children: [
                  (0, a.jsx)(r.MenuItem, {
                    id: "game-profile-wrong-name",
                    label: i.Z.Messages.GAME_PROFILE_WRONG_GAME,
                    action: u,
                  }),
                  (0, a.jsx)(r.MenuItem, {
                    id: "game-profile-outdated-data",
                    label: i.Z.Messages.GAME_PROFILE_OUTDATED_DATA,
                    action: u,
                  }),
                  (0, a.jsx)(r.MenuItem, {
                    id: "game-profile-other-problem",
                    label: i.Z.Messages.GAME_PROFILE_OTHER_PROBLEM,
                    action: u,
                  }),
                ],
              })
            : null;
        return null == d && null == _
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
                  "aria-label": i.Z.Messages.GAME_PROFILE_VIEW_MORE,
                  onSelect: () => {},
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(r.MenuGroup, { children: d }),
                      (0, a.jsx)(r.MenuGroup, { children: _ }),
                    ],
                  }),
                });
              },
              children: (e) =>
                (0, a.jsx)(r.Tooltip, {
                  text: i.Z.Messages.MORE,
                  children: (n) =>
                    (0, a.jsx)(r.Clickable, {
                      className: t,
                      ...n,
                      ...e,
                      children: (0, a.jsx)(r.MoreHorizontalIcon, {
                        size: "xs",
                      }),
                    }),
                }),
            });
      }
    },
    931651: function (e, n, t) {
      t.d(n, {
        $: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(907040),
        s = t(185923);
      function o(e) {
        let {
          channel: n,
          closePopout: t,
          analyticsOverride: o,
          onSelectEmoji: l,
          messageId: i,
        } = e;
        return (0, a.jsx)(r.Z, {
          closePopout: t,
          channel: n,
          onSelectEmoji: l,
          pickerIntention: s.Hz.REACTION,
          analyticsOverride: o,
          messageId: i,
        });
      }
    },
    962250: function (e, n, t) {
      t.d(n, {
        b: function () {
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
          return i;
        },
      }),
        t(47120);
      var a = t(735250),
        r = t(470079),
        s = t(481060);
      function o(e, n, t) {
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
      class l extends r.PureComponent {
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
            o(this, "handleClick", () => {
              let { onClick: e, index: n } = this.props;
              null == e || e(n);
            });
        }
      }
      class i extends r.PureComponent {
        render() {
          let e = this.props.artists.split(";");
          if (!this.props.canOpen) return e.join(", ");
          let n = e.length - 1;
          return e.map((e, t) =>
            (0, a.jsx)(
              l,
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
            o(this, "handleOpenSpotifyArtist", (e) => {
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
        o = t(120356),
        l = t.n(o),
        i = t(481060),
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
            o = 0;
          for (; o < s && o < e.length; ) {
            let n = o === e.length - 1;
            r.push(
              t(e[o] || null, n ? null : d.avatarMasked, "user-".concat(o), n),
            ),
              o++;
          }
          if (o < e.length) {
            let n = Math.min(e.length - o, 99);
            r.push(a("+".concat(n), d.moreUsers, "more-users", n));
          }
          return r;
        }
        renderIcon() {
          return this.props.icon
            ? (0, r.jsx)("div", {
                className: d.iconContainer,
                children: (0, r.jsx)(i.VoiceNormalIcon, {
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
            className: l()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "_ref", void 0),
            _(this, "defaultRenderUser", (e, n, t, a) => {
              let { onClick: s, size: o, guildId: _ } = this.props,
                E = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == E
                ? (0, r.jsx)("div", { className: l()(d.emptyUser, n) }, t)
                : (0, r.jsx)(
                    i.Avatar,
                    {
                      tabIndex: 0,
                      src: E.getAvatarURL(_, (0, i.getAvatarSize)(o)),
                      size: o,
                      "aria-label": E.username,
                      className: l()(n, u.cursorPointer, d.avatarSize),
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
        size: i.AvatarSizes.SIZE_24,
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
          ...o
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, r.Z)(o),
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
      var o = t(981631),
        l = t(689938);
      let i = {},
        c = {},
        d = Object.freeze({ ALL: -1, ...o.EKQ });
      function u(e) {
        let n = (0, s.LX)(e, {
          path: o.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        });
        return null != n ? n.params.skuId : null;
      }
      function _(e) {
        switch (e) {
          case o.EKQ.ACTION:
            return l.Z.Messages.APPLICATION_STORE_GENRE_ACTION;
          case o.EKQ.ACTION_RPG:
            return l.Z.Messages.APPLICATION_STORE_GENRE_ACTION_RPG;
          case o.EKQ.BRAWLER:
            return l.Z.Messages.APPLICATION_STORE_GENRE_BRAWLER;
          case o.EKQ.HACK_AND_SLASH:
            return l.Z.Messages.APPLICATION_STORE_GENRE_HACK_AND_SLASH;
          case o.EKQ.PLATFORMER:
            return l.Z.Messages.APPLICATION_STORE_GENRE_PLATFORMER;
          case o.EKQ.STEALTH:
            return l.Z.Messages.APPLICATION_STORE_GENRE_STEALTH;
          case o.EKQ.SURVIVAL:
            return l.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL;
          case o.EKQ.ADVENTURE:
            return l.Z.Messages.APPLICATION_STORE_GENRE_ADVENTURE;
          case o.EKQ.ACTION_ADVENTURE:
            return l.Z.Messages.APPLICATION_STORE_GENRE_ACTION_ADVENTURE;
          case o.EKQ.METROIDVANIA:
            return l.Z.Messages.APPLICATION_STORE_GENRE_METROIDVANIA;
          case o.EKQ.OPEN_WORLD:
            return l.Z.Messages.APPLICATION_STORE_GENRE_OPEN_WORLD;
          case o.EKQ.PSYCHOLOGICAL_HORROR:
            return l.Z.Messages.APPLICATION_STORE_GENRE_PSYCHOLOGICAL_HORROR;
          case o.EKQ.SANDBOX:
            return l.Z.Messages.APPLICATION_STORE_GENRE_SANDBOX;
          case o.EKQ.SURVIVAL_HORROR:
            return l.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL_HORROR;
          case o.EKQ.VISUAL_NOVEL:
            return l.Z.Messages.APPLICATION_STORE_GENRE_VISUAL_NOVEL;
          case o.EKQ.DRIVING_RACING:
            return l.Z.Messages.APPLICATION_STORE_GENRE_DRIVING_RACING;
          case o.EKQ.VEHICULAR_COMBAT:
            return l.Z.Messages.APPLICATION_STORE_GENRE_VEHICULAR_COMBAT;
          case o.EKQ.MASSIVELY_MULTIPLAYER:
            return l.Z.Messages.APPLICATION_STORE_GENRE_MASSIVELY_MULTIPLAYER;
          case o.EKQ.MMORPG:
            return l.Z.Messages.APPLICATION_STORE_GENRE_MMORPG;
          case o.EKQ.ROLE_PLAYING:
            return l.Z.Messages.APPLICATION_STORE_GENRE_ROLE_PLAYING;
          case o.EKQ.DUNGEON_CRAWLER:
            return l.Z.Messages.APPLICATION_STORE_GENRE_DUNGEON_CRAWLER;
          case o.EKQ.ROGUELIKE:
            return l.Z.Messages.APPLICATION_STORE_GENRE_ROGUELIKE;
          case o.EKQ.SHOOTER:
            return l.Z.Messages.APPLICATION_STORE_GENRE_SHOOTER;
          case o.EKQ.LIGHT_GUN:
            return l.Z.Messages.APPLICATION_STORE_GENRE_LIGHT_GUN;
          case o.EKQ.SHOOT_EM_UP:
            return l.Z.Messages.APPLICATION_STORE_GENRE_SHOOT_EM_UP;
          case o.EKQ.FPS:
            return l.Z.Messages.APPLICATION_STORE_GENRE_FPS;
          case o.EKQ.DUAL_JOYSTICK_SHOOTER:
            return l.Z.Messages.APPLICATION_STORE_GENRE_DUAL_JOYSTICK_SHOOTER;
          case o.EKQ.SIMULATION:
            return l.Z.Messages.APPLICATION_STORE_GENRE_SIMULATION;
          case o.EKQ.FLIGHT_SIMULATOR:
            return l.Z.Messages.APPLICATION_STORE_GENRE_FLIGHT_SIMULATOR;
          case o.EKQ.TRAIN_SIMULATOR:
            return l.Z.Messages.APPLICATION_STORE_GENRE_TRAIN_SIMULATOR;
          case o.EKQ.LIFE_SIMULATOR:
            return l.Z.Messages.APPLICATION_STORE_GENRE_LIFE_SIMULATOR;
          case o.EKQ.FISHING:
            return l.Z.Messages.APPLICATION_STORE_GENRE_FISHING;
          case o.EKQ.SPORTS:
            return l.Z.Messages.APPLICATION_STORE_GENRE_SPORTS;
          case o.EKQ.BASEBALL:
            return l.Z.Messages.APPLICATION_STORE_GENRE_BASEBALL;
          case o.EKQ.BASKETBALL:
            return l.Z.Messages.APPLICATION_STORE_GENRE_BASKETBALL;
          case o.EKQ.BILLIARDS:
            return l.Z.Messages.APPLICATION_STORE_GENRE_BILLIARDS;
          case o.EKQ.BOWLING:
            return l.Z.Messages.APPLICATION_STORE_GENRE_BOWLING;
          case o.EKQ.BOXING:
            return l.Z.Messages.APPLICATION_STORE_GENRE_BOXING;
          case o.EKQ.FOOTBALL:
            return l.Z.Messages.APPLICATION_STORE_GENRE_FOOTBALL;
          case o.EKQ.GOLF:
            return l.Z.Messages.APPLICATION_STORE_GENRE_GOLF;
          case o.EKQ.HOCKEY:
            return l.Z.Messages.APPLICATION_STORE_GENRE_HOCKEY;
          case o.EKQ.SKATEBOARDING_SKATING:
            return l.Z.Messages.APPLICATION_STORE_GENRE_SKATEBOARDING_SKATING;
          case o.EKQ.SNOWBOARDING_SKIING:
            return l.Z.Messages.APPLICATION_STORE_GENRE_SNOWBOARDING_SKIING;
          case o.EKQ.SOCCER:
            return l.Z.Messages.APPLICATION_STORE_GENRE_SOCCER;
          case o.EKQ.TRACK_FIELD:
            return l.Z.Messages.APPLICATION_STORE_GENRE_TRACK_FIELD;
          case o.EKQ.SURFING_WAKEBOARDING:
            return l.Z.Messages.APPLICATION_STORE_GENRE_SURFING_WAKEBOARDING;
          case o.EKQ.WRESTLING:
            return l.Z.Messages.APPLICATION_STORE_GENRE_WRESTLING;
          case o.EKQ.STRATEGY:
            return l.Z.Messages.APPLICATION_STORE_GENRE_STRATEGY;
          case o.EKQ.FOUR_X:
            return l.Z.Messages.APPLICATION_STORE_GENRE_FOUR_X;
          case o.EKQ.ARTILLERY:
            return l.Z.Messages.APPLICATION_STORE_GENRE_ARTILLERY;
          case o.EKQ.RTS:
            return l.Z.Messages.APPLICATION_STORE_GENRE_RTS;
          case o.EKQ.TOWER_DEFENSE:
            return l.Z.Messages.APPLICATION_STORE_GENRE_TOWER_DEFENSE;
          case o.EKQ.TURN_BASED_STRATEGY:
            return l.Z.Messages.APPLICATION_STORE_GENRE_TURN_BASED_STRATEGY;
          case o.EKQ.WARGAME:
            return l.Z.Messages.APPLICATION_STORE_GENRE_WARGAME;
          case o.EKQ.MOBA:
            return l.Z.Messages.APPLICATION_STORE_GENRE_MOBA;
          case o.EKQ.FIGHTING:
            return l.Z.Messages.APPLICATION_STORE_GENRE_FIGHTING;
          case o.EKQ.PUZZLE:
            return l.Z.Messages.APPLICATION_STORE_GENRE_PUZZLE;
          case o.EKQ.CARD_GAME:
            return l.Z.Messages.APPLICATION_STORE_GENRE_CARD_GAME;
          case o.EKQ.EDUCATION:
            return l.Z.Messages.APPLICATION_STORE_GENRE_EDUCATION;
          case o.EKQ.FITNESS:
            return l.Z.Messages.APPLICATION_STORE_GENRE_FITNESS;
          case o.EKQ.GAMBLING:
            return l.Z.Messages.APPLICATION_STORE_GENRE_GAMBLING;
          case o.EKQ.MUSIC_RHYTHM:
            return l.Z.Messages.APPLICATION_STORE_GENRE_MUSIC_RHYTHM;
          case o.EKQ.PARTY_MINI_GAME:
            return l.Z.Messages.APPLICATION_STORE_GENRE_PARTY_MINI_GAME;
          case o.EKQ.PINBALL:
            return l.Z.Messages.APPLICATION_STORE_GENRE_PINBALL;
          case o.EKQ.TRIVIA_BOARD_GAME:
            return l.Z.Messages.APPLICATION_STORE_GENRE_TRIVIA_BOARD_GAME;
          case o.EKQ.TACTICAL:
            return l.Z.Messages.APPLICATION_STORE_GENRE_TACTICAL;
          case o.EKQ.INDIE:
            return l.Z.Messages.APPLICATION_STORE_GENRE_INDIE;
          case o.EKQ.ARCADE:
            return l.Z.Messages.APPLICATION_STORE_GENRE_ARCADE;
          case o.EKQ.POINT_AND_CLICK:
            return l.Z.Messages.APPLICATION_STORE_GENRE_POINT_AND_CLICK;
          default:
            return l.Z.Messages.APPLICATION_STORE_GENRE_MISCELLANEOUS;
        }
      }
      Object.keys(d).forEach((e) => {
        let n = e.toLowerCase().replace(/_/g, "-"),
          t = d[e];
        (i[n] = t), (c[t] = n);
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
        gapNone: "gapNone_e881fc",
        gapXs: "gapXs_e881fc",
        gapSm: "gapSm_e881fc",
        gapMd: "gapMd_e881fc",
        clickable: "clickable_e881fc",
        linkIcon: "linkIcon_e881fc",
        linkAnchor: "linkAnchor_e881fc",
        content: "content_e881fc",
        section: "section_e881fc",
        gameProfileModal: "gameProfileModal_e881fc",
        gameArtHero: "gameArtHero_e881fc",
        scrollable: "scrollable_e881fc",
        coverArtRow: "coverArtRow_e881fc",
        overflowMenu: "overflowMenu_e881fc",
        headerInfo: "headerInfo_e881fc",
        logoWrapper: "logoWrapper_e881fc",
        logo: "logo_e881fc",
        icon: "icon_e881fc",
        followButton: "followButton_e881fc",
        gameDetails: "gameDetails_e881fc",
        gameBadge: "gameBadge_e881fc",
        newBadge: "newBadge_e881fc",
        mainContent: "mainContent_e881fc",
        sidebar: "sidebar_e881fc",
        sidebarSections: "sidebarSections_e881fc",
        fadedEntries: "fadedEntries_e881fc",
        expandEntriesButton: "expandEntriesButton_e881fc",
        emptyFriendsWhoPlay: "emptyFriendsWhoPlay_e881fc",
        imageScroller: "imageScroller_e881fc",
        mediaModal: "mediaModal_e881fc",
        gameArtwork: "gameArtwork_e881fc",
        gameArtworkFocusRing: "gameArtworkFocusRing_e881fc",
        similarGames: "similarGames_e881fc",
        loadingSimilarGamesArtwork: "loadingSimilarGamesArtwork_e881fc",
        loadingHeadingSimilarGames: "loadingHeadingSimilarGames_e881fc",
      };
    },
    445524: function (e, n, t) {
      e.exports = {
        root: "root_ed81cc",
        image: "image_ed81cc",
        emptyPreviewContainer: "emptyPreviewContainer_ed81cc",
        emptyPreviewImage: "emptyPreviewImage_ed81cc",
        emptyPreviewText: "emptyPreviewText_ed81cc",
      };
    },
    304818: function (e, n, t) {
      e.exports = {
        popout: "popout_b245a4",
        leaderboardTitle: "leaderboardTitle_b245a4",
        header: "header_b245a4",
      };
    },
    288984: function (e, n, t) {
      e.exports = { menuIcon: "menuIcon_cdae90" };
    },
    835777: function (e, n, t) {
      e.exports = { gameTitle: "gameTitle_cf6db7" };
    },
    881894: function (e, n, t) {
      e.exports = {
        container: "container_cf8a7d",
        table: "table_cf8a7d",
        headerRow: "headerRow_cf8a7d",
        headerRank: "headerRank_cf8a7d",
        headerPlayer: "headerPlayer_cf8a7d",
        headerValue: "headerValue_cf8a7d",
        userRow: "userRow_cf8a7d",
        userRank: "userRank_cf8a7d",
        userPlayer: "userPlayer_cf8a7d",
      };
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
//# sourceMappingURL=b1cf8ddeaf78359aab5c.js.map
