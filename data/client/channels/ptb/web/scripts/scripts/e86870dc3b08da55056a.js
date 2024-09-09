"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55031"],
  {
    966390: function (e, n, t) {
      t(47120), t(789020);
      var a = t(481060),
        r = t(570140),
        s = t(430742),
        o = t(904245),
        i = t(166459),
        l = t(531643),
        c = t(881052),
        d = t(673750),
        u = t(141795),
        _ = t(476326),
        E = t(680287),
        I = t(163268),
        A = t(539573),
        m = t(786761),
        p = t(3148),
        T = t(48854),
        O = t(785359),
        g = t(79390),
        R = t(623292),
        N = t(807092),
        P = t(467798),
        h = t(703558),
        f = t(117530),
        C = t(630388),
        M = t(226351),
        L = t(981631),
        S = t(689938);
      async function x(e) {
        var n, t, a;
        let u,
          {
            channelId: _,
            uploads: x,
            draftType: v,
            parsedMessage: G,
            options: Z = {},
            raiseEndpointErrors: j = !1,
          } = e,
          b = new E.Z(L.ANM.MESSAGES(_)),
          D = new M.o(),
          y = {
            content: "",
            nonce: "",
            channel_id: _,
            type: L.uaV.DEFAULT,
            sticker_ids: null == Z ? void 0 : Z.stickerIds,
            poll: null == Z ? void 0 : Z.poll,
          };
        null != G && (y.content = null == G ? void 0 : G.content),
          null != N.Z.getPendingReply(_) &&
            ((y.type = L.uaV.REPLY),
            (y.message_reference = Z.messageReference),
            (y.allowed_mentions = Z.allowedMentions),
            (0, R.A6)(_));
        let [U, w] = (0, P.Z)(y.content);
        U &&
          ((y.content = w),
          (y.flags = (0, C.pj)(
            null !== (n = y.flags) && void 0 !== n ? n : 0,
            L.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let F = null !== (t = Z.nonce) && void 0 !== t ? t : (0, T.r)(),
          k = (0, p.ZP)({
            channelId: _,
            content: y.content,
            tts: null !== (a = null == G ? void 0 : G.tts) && void 0 !== a && a,
            type: y.type,
            messageReference: y.message_reference,
            flags: y.flags,
            nonce: F,
            poll: (0, g.x9)(Z.poll),
          });
        return (
          ((y.nonce = F),
          b.on("start", (e) => {
            (u = (0, m.e5)({ ...k, id: e.id })),
              r.Z.dispatch({
                type: "UPLOAD_START",
                channelId: _,
                file: e,
                message: u,
                uploader: b,
              });
          }),
          b.on("progress", (e) => {
            r.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: _, file: e });
          })),
          b.on("error", (e, n, t, a) => {
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
              n === L.evJ.EXPLICIT_CONTENT)
            ) {
              o.Z.sendExplicitMediaClydeError(
                _,
                null == t ? void 0 : t.attachments,
                I.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (n === L.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: n, message: null == t ? void 0 : t.message },
                a =
                  null == u
                    ? null
                    : { type: d.$V.SEND, message: { ...u, channelId: _ } };
              (0, l.openUploadError)({
                title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: (0, A.uF)(a, e),
              });
              return;
            }
            if (n !== L.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (j)
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
                "" === h.Z.getDraft(_, v) &&
                s.Z.saveDraft(_, y.content, v),
                0 === f.Z.getUploadCount(_, v) &&
                  i.Z.setUploads({ channelId: _, uploads: x, draftType: v });
            }
          }),
          b.on("complete", (e, n) => {
            r.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: _,
              file: e,
              aborted: b._aborted,
              messageRecord: n,
            });
          }),
          await b.uploadFiles(x, y),
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
          x({ channelId: n, uploads: o, draftType: a });
        },
        upload: function e(n) {
          let {
              channelId: t,
              file: i,
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
              (A.type = L.uaV.REPLY),
                (A.message_reference = n.messageReference),
                (A.allowed_mentions = n.allowedMentions),
                (0, R.A6)(t);
            }
          }
          let m = new E.Z(L.ANM.MESSAGES(t));
          m.on("start", (e) => {
            r.Z.dispatch({
              type: "UPLOAD_START",
              channelId: t,
              file: e,
              uploader: m,
            });
          }),
            m.on("progress", (e) => {
              r.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: t, file: e });
            }),
            m.on("error", (n, u, _) => {
              if (
                (r.Z.dispatch({ type: "UPLOAD_FAIL", channelId: t, file: n }),
                (0, O.x)({ fileItems: n.items, failureCode: u }),
                u === L.evJ.EXPLICIT_CONTENT)
              ) {
                o.Z.sendExplicitMediaClydeError(
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
                      e({ channelId: t, file: i, draftType: c, message: d });
                  },
                }),
              }),
                "" !== A.content &&
                  "" === h.Z.getDraft(t, c) &&
                  s.Z.saveDraft(t, A.content, c);
            }),
            m.on("complete", (e) => {
              r.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: t, file: e });
            }),
            m.upload(i, A);
        },
        uploadFiles: x,
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
        i = t(861990),
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
            let t = (0, i.B)(e, n);
            e.item.platform === o.ow.WEB && l.push({ ...t });
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
          return l;
        },
      });
      var a = t(735250),
        r = t(120356),
        s = t.n(r),
        o = t(481060),
        i = t(671656);
      function l(e) {
        let { className: n, onClick: t, ...r } = e,
          l = (0, a.jsx)(o.Clickable, {
            ...r,
            className: s()(null != t && i.clickable, n),
            onClick: t,
          });
        return null == t ? (0, a.jsx)(o.BlockInteractions, { children: l }) : l;
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
        o = t(256139),
        i = t(866040);
      function l(e) {
        let {
            user: n,
            text: t,
            channel: l,
            textClassName: c,
            onPopoutClosed: d,
          } = e,
          u = (0, r.useMemo)(() => [n], [n]);
        return (0, a.jsx)(i.Z, {
          participants: u,
          channel: l,
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
        i = t(239091),
        l = t(751688),
        c = t(184301),
        d = t(347475),
        u = t(210887),
        _ = t(5192),
        E = t(303540);
      function I(e) {
        let { participants: n, channel: r } = e;
        return (0, a.jsx)(o.Scroller, {
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
                  (0, i.jW)(n, async () => {
                    let { default: n } = await Promise.all([
                      t.e("79695"),
                      t.e("69220"),
                      t.e("46611"),
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
        let { children: n, participants: t, channel: i, onPopoutClosed: l } = e,
          _ = (0, s.e7)([u.Z], () => u.Z.theme),
          E = 1 === t.length ? t[0] : null,
          A = (0, r.useCallback)(
            (e) => {
              if (null != E)
                return (0, a.jsx)(d.Z, {
                  ...e,
                  closePopout: () => {
                    e.closePopout(), null == l || l();
                  },
                  userId: E.id,
                  guildId: null == i ? void 0 : i.guild_id,
                  channelId: null == i ? void 0 : i.id,
                });
              if (null != t)
                return (0, a.jsx)(I, { participants: t, channel: i });
              throw Error("One of participant or participants is required");
            },
            [i, l, t, E],
          );
        return (0, a.jsx)(o.ThemeContextProvider, {
          theme: _,
          children: (0, a.jsx)(o.Popout, {
            renderPopout: A,
            preload: () =>
              null != E
                ? (0, c.Z)(E, {
                    guildId: null == i ? void 0 : i.guild_id,
                    channelId: null == i ? void 0 : i.id,
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
        i = t(866442),
        l = t(607070),
        c = t(220082),
        d = t(981631);
      n.Z = (e) => {
        var n, r, u, _, E, I;
        let A;
        A = t(481060).tokens;
        let m = (0, o.e7)([l.Z], () => l.Z.saturation),
          [p, T] = (0, c.Cf)(
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
                                saturation: m,
                              })) || void 0 === r
                          ? void 0
                          : null === (n = r.hex) || void 0 === n
                            ? void 0
                            : n.call(r)) && void 0 !== I
              ? I
              : "#000",
          );
        return a.useMemo(() => {
          let e = (0, i._i)(p),
            n = (0, i._i)(T);
          for (let n = 1; n < 8 && !((0, i.Bd)(e) >= 0.725); n++) {
            e = s()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, i.Bd)(n) >= 0.725); e++) {
            n = s()(n).darken(0.5).num();
          }
          let t = (0, i.Rf)(e);
          return { primaryColor: t, secondaryColor: (0, i.Rf)(n) };
        }, [p, T]);
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
        s = t(76927);
      function o(e) {
        let { onClick: n, Icon: t, "aria-label": o } = e,
          i = (0, r.useToken)(
            r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          l = (0, a.jsx)(t, {
            color: i.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == n
          ? (0, a.jsx)("div", {
              className: s.container,
              "aria-label": o,
              children: l,
            })
          : (0, a.jsx)(r.Tooltip, {
              text: o,
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
          return i;
        },
      });
      var a = t(544891),
        r = t(570140),
        s = t(881052),
        o = t(981631);
      let i = async (e) => {
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
        i = t(442837),
        l = t(570140);
      let c = {};
      class d extends (o = i.ZP.Store) {
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
        i = t(442837),
        l = t(146282),
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
          requestId: (0, i.e7)([l.Z], () =>
            l.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED),
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
        i = t(442837),
        l = t(481060),
        c = t(178762),
        d = t(91140),
        u = t(297781),
        _ = t(592125),
        E = t(944486),
        I = t(594174),
        A = t(5192),
        m = t(810568),
        p = t(689938),
        T = t(255341),
        O = t(707443);
      n.Z = (e) => {
        let { entry: n, viewId: t, onClose: s } = e,
          g = (0, i.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
          R = (0, i.e7)([I.default], () => I.default.getUser(n.author_id)),
          { nick: N, avatar: P } = r.useMemo(() => {
            let e =
              null == R
                ? void 0
                : R.getAvatarURL(null == g ? void 0 : g.guild_id, 48, !1);
            return {
              nick: A.ZP.getName(
                null == g ? void 0 : g.guild_id,
                null == g ? void 0 : g.id,
                R,
              ),
              avatar: e,
            };
          }, [R, g]);
        return null == R
          ? null
          : (0, a.jsx)(l.Popout, {
              position: "right",
              renderPopout: (e) => {
                let { closePopout: r, updatePosition: o } = e;
                return (0, a.jsx)(c.J, {
                  entry: n,
                  closePopout: r,
                  updatePopoutPosition: o,
                  onReaction: () => {
                    (0, m.UE)({
                      action: m.as.SendMessageUser,
                      applicationId: n.extra.application_id,
                      gameName: n.extra.game_name,
                      recipientUserId: n.author_id,
                      viewId: t,
                    }),
                      s(),
                      r();
                  },
                  onUserPopoutClosed: () => r(),
                  disableGameProfileLinks: !0,
                });
              },
              positionKey: "game-profile-entry-".concat(n.id),
              onRequestOpen: () => {
                (0, m.UE)({
                  action: m.as.ClickMessageUser,
                  applicationId: n.extra.application_id,
                  gameName: n.extra.game_name,
                  recipientUserId: n.author_id,
                  viewId: t,
                });
              },
              children: (e) =>
                (0, a.jsx)(l.Clickable, {
                  ...e,
                  className: T.profileEntryCard,
                  children: (0, a.jsx)(l.FocusRing, {
                    offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    children: (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("img", {
                          className: T.avatar,
                          src: P,
                          alt: p.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: N },
                          ),
                        }),
                        (0, a.jsx)("div", {
                          className: o()(T.playerInfo),
                          children: (0, a.jsxs)("div", {
                            className: o()(O.column, O.gapXs),
                            children: [
                              (0, a.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                lineClamp: 1,
                                children: N,
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
                          children: (0, a.jsx)(l.ArrowAngleLeftUpIcon, {}),
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
        i = t(643872),
        l = t(481060),
        c = t(570140),
        d = t(652898),
        u = t(93093),
        _ = t(768581),
        E = t(810568),
        I = t(981631),
        A = t(689938),
        m = t(707443);
      let p = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE],
        T = (e) => {
          let { invite: n, trackClick: t } = e,
            { approximate_member_count: r, guild: s } = n;
          if (null == s) return null;
          let i = u.Z.isMember(s.id);
          if (
            !(null == s ? void 0 : s.features.includes("VERIFIED")) &&
            !(null == s ? void 0 : s.features.includes("PARTNER"))
          )
            return null;
          let d = _.ZP.getGuildIconURL({ id: s.id, icon: s.icon, size: 32 });
          return (0, a.jsxs)("div", {
            className: o()(m.column),
            children: [
              (0, a.jsx)(l.Heading, {
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD,
              }),
              (0, a.jsxs)("div", {
                className: o()(m.row, m.gapMd),
                children: [
                  (0, a.jsx)("img", {
                    className: m.icon,
                    src: d,
                    alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
                      guildName: s.name,
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: o()(m.gapNone),
                    children: [
                      (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: s.name,
                      }),
                      null != r &&
                        (0, a.jsx)(l.Text, {
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
              (0, a.jsx)(l.Button, {
                color: l.ButtonColors.PRIMARY,
                onClick: () => {
                  t(E.as.JoinOfficialServer),
                    c.Z.dispatch({
                      type: "INVITE_MODAL_OPEN",
                      invite: n,
                      code: n.code,
                      context: I.IlC.APP,
                    });
                },
                children: i
                  ? A.Z.Messages.JOINED_GUILD
                  : A.Z.Messages.JOIN_GUILD,
              }),
            ],
          });
        };
      n.Z = (e) => {
        let { websites: n, trackClick: t } = e,
          s =
            null == n
              ? void 0
              : n.find((e) => {
                  let { category: n } = e;
                  return n === i.p.DISCORD;
                }),
          [c, u] = r.useState();
        if (
          (r.useEffect(() => {
            let e = async (e) => {
              let n = e.split("/").pop();
              if (null != n) {
                let e = await (0, d.Z)(n);
                !0 !== e.banned && u(e.invite);
              }
            };
            null != s && e(s.url);
          }, [s]),
          null == n || 0 === n.length)
        )
          return null;
        let _ = n
          .filter((e) => {
            let { category: n } = e;
            return p.includes(n);
          })
          .sort((e, n) => e.category - n.category);
        return (0, a.jsxs)("div", {
          className: o()(m.column),
          children: [
            null != c && (0, a.jsx)(T, { invite: c, trackClick: t }),
            (0, a.jsxs)("div", {
              className: o()(m.column, m.gapSm),
              children: [
                (0, a.jsx)(l.Heading, {
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: A.Z.Messages.GAME_PROFILE_LINKS,
                }),
                (0, a.jsx)("div", {
                  className: m.row,
                  children: _.map((e) => {
                    let n,
                      r,
                      { category: s, url: o } = e,
                      c = null;
                    switch (s) {
                      case i.p.OFFICIAL:
                        (c = (0, a.jsx)(l.GlobeEarthIcon, {
                          colorClass: m.linkIcon,
                        })),
                          (r = E.as.WebsiteLink),
                          (n = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                        break;
                      case i.p.TWITTER:
                        (c = (0, a.jsx)(l.XNeutralIcon, {
                          colorClass: m.linkIcon,
                        })),
                          (r = E.as.XLink),
                          (n = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                        break;
                      case i.p.YOUTUBE:
                        (r = E.as.YouTubeLink),
                          (c = (0, a.jsx)(l.YoutubeNeutralIcon, {
                            colorClass: m.linkIcon,
                          })),
                          (n = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                    }
                    return null != c
                      ? (0, a.jsx)(
                          l.Anchor,
                          {
                            className: m.linkAnchor,
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
        i = t(512722),
        l = t.n(i),
        c = t(392711),
        d = t(913527),
        u = t.n(d),
        _ = t(758713),
        E = t(705512),
        I = t(442837),
        A = t(433517),
        m = t(481060),
        p = t(224706),
        T = t(812206),
        O = t(168551),
        g = t(485267),
        R = t(26033),
        N = t(561308),
        P = t(669764),
        h = t(962250),
        f = t(706454),
        C = t(768581),
        M = t(814225),
        L = t(709054),
        S = t(810568),
        x = t(998058),
        v = t(839392),
        G = t(96856),
        Z = t(567409),
        j = t(774073),
        b = t(124030),
        D = t(383895),
        y = t(183391),
        U = t(715318),
        w = t(206583),
        F = t(689938),
        k = t(707443);
      let K = "GameProfileModal",
        B = (e) => {
          let { game: n, onClose: t, trackClick: r } = e,
            s = (0, I.e7)([T.Z], () => {
              var e;
              return T.Z.getApplication(
                null !== (e = null == n ? void 0 : n.applicationId) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            });
          if (null == n) return null;
          let o = n.coverImageUrl;
          return (0, a.jsx)(m.Tooltip, {
            text: n.name,
            children: (e) => {
              var i;
              return (0, a.jsx)(m.Clickable, {
                ...e,
                className: k.clickable,
                onClick: async () => {
                  r(S.as.ClickSimilarGame, n.applicationId),
                    (0, m.openModalLazy)(() =>
                      Promise.resolve((e) =>
                        (0, a.jsx)(z, {
                          applicationId: n.applicationId,
                          source: S.m1.SimilarGames,
                          ...e,
                        }),
                      ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    t();
                },
                children: (0, a.jsx)("img", {
                  src: o,
                  className: k.similarGames,
                  alt: F.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
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
        },
        H = () =>
          (0, a.jsxs)("div", {
            className: k.gameBadge,
            children: [
              (0, a.jsx)(m.FireIcon, { size: "xxs" }),
              (0, a.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: F.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          }),
        Q = [_.z.DESKTOP, _.z.XBOX, _.z.PLAYSTATION, _.z.NINTENDO],
        W = (e) => {
          let { platforms: n } = e,
            t = [...new Set(n)];
          !t.includes(_.z.DESKTOP) &&
            (t.includes(_.z.MACOS) || t.includes(_.z.LINUX)) &&
            t.push(_.z.DESKTOP);
          let r = (t = t.filter((e) => Q.includes(e))).map((e) => {
            switch (e) {
              case _.z.DESKTOP:
                return (0, a.jsx)(m.ScreenIcon, { size: "xs" }, e);
              case _.z.XBOX:
                return (0, a.jsx)(m.XboxNeutralIcon, { size: "xs" }, e);
              case _.z.PLAYSTATION:
                return (0, a.jsx)(m.PlaystationNeutralIcon, { size: "xs" }, e);
              case _.z.NINTENDO:
                return (0, a.jsx)(
                  m.NintendoSwitchNeutralIcon,
                  { size: "xs" },
                  e,
                );
              default:
                return null;
            }
          });
          return (0, a.jsxs)("div", {
            className: o()(k.row, k.gapSm),
            style: { alignItems: "center" },
            children: [
              (0, a.jsx)(m.Text, {
                variant: "text-sm/normal",
                children: " \xb7 ",
              }),
              r,
            ],
          });
        },
        Y = (e) => e.filter(j.z6).slice(0, 5),
        z = (e) => {
          var n, s;
          let {
              applicationId: i,
              source: d,
              sourceUserId: _,
              transitionState: Q,
              onClose: z,
            } = e,
            { clientThemesClassName: V } = (0, O.ZP)(),
            { width: X, height: J } = (0, h.b)(),
            [q, $] = r.useState(() => {
              var e;
              return null === (e = A.K.get(K)) || void 0 === e ? void 0 : e[i];
            }),
            ee = (0, I.e7)([f.default], () => f.default.locale),
            [en, et] = r.useState(null),
            [ea, er] = r.useState(!0),
            [es, eo] = r.useState(!1),
            ei = r.useRef(null),
            el = r.useMemo(() => (0, S.fP)(), []);
          r.useEffect(() => {
            let e = ei.current;
            null != e && eo(e.scrollHeight - e.clientHeight > 1);
          }, [ei, X, J]),
            r.useEffect(() => {
              (0, g.Jn)();
            }, []);
          let ec = (0, I.Wu)([v.Z], () => {
              var e;
              return (
                null !== (e = v.Z.getSimilarGames(i)) && void 0 !== e ? e : []
              ).slice(0, 25);
            }),
            ed = (0, I.Wu)([P.Z], () =>
              ec
                .map((e) => P.Z.getGame(e))
                .filter(j.W1)
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
                    await (0, x.i)(i);
                  } catch (e) {
                    et(e);
                  }
                }
              })(),
                p.Z.getDetectableGamesSupplemental([i, ...ec]);
            }, [i, ec]);
          let e_ = (0, I.e7)([v.Z, P.Z], () => {
              let e = void 0 === v.Z.getSimilarGames(i),
                n = ec.some((e) => P.Z.isFetching(e));
              return e || n;
            }),
            { entries: eE } = (0, Z.Z)(),
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
            [em, ep] = r.useState(!1);
          r.useEffect(() => {
            var e, n;
            return (
              (0, S.IS)({
                source: d,
                viewId: el,
                applicationId: i,
                gameName:
                  null !==
                    (n =
                      null !== (e = null == eO ? void 0 : eO.name) &&
                      void 0 !== e
                        ? e
                        : null == eT
                          ? void 0
                          : eT.name) && void 0 !== n
                    ? n
                    : "",
                authorId: _,
              }),
              () => {
                var e, n;
                let t = Date.now(),
                  a = eI.map((e) => {
                    let n = (0, N.kr)(e) ? (0, N.T_)(e, t) : (0, N.GL)(e, ee);
                    return JSON.stringify({
                      item_id: e.id,
                      trait: e.traits,
                      time_played: n,
                    });
                  });
                (0, S.wz)({
                  viewId: el,
                  applicationId: i,
                  gameName:
                    null !==
                      (n =
                        null !== (e = null == eO ? void 0 : eO.name) &&
                        void 0 !== e
                          ? e
                          : null == eT
                            ? void 0
                            : eT.name) && void 0 !== n
                      ? n
                      : "",
                  playedFriendIds: eI.map((e) => e.author_id),
                  playedFriendsData: a,
                  similarGames: Y(eu.current),
                });
              }
            );
          }, []);
          let eT = T.Z.getApplication(i),
            eO = (0, I.e7)([P.Z], () => P.Z.getGame(i)),
            eg = r.useMemo(
              () => (null == eO ? void 0 : eO.genres.map(M.P3).join(", ")),
              [eO],
            ),
            eR = r.useMemo(() => {
              if (null == eO) return "";
              let { artwork: e, screenshots: n } = eO;
              if (e.length > 0) {
                let n = Math.floor(Math.random() * (e.length - 1));
                return e[n];
              }
              if (n.length > 0) {
                let e = Math.floor(Math.random() * (n.length - 1));
                return n[e];
              }
              return "";
            }, [eO]),
            eN = r.useMemo(() => {
              var e, n;
              let t = (
                null !== (e = null == eO ? void 0 : eO.artwork) && void 0 !== e
                  ? e
                  : []
              ).map((e) => ({ src: e }));
              return [
                ...(null !== (n = null == eO ? void 0 : eO.screenshots) &&
                void 0 !== n
                  ? n
                  : []
                ).map((e) => ({ src: e })),
                ...t,
              ];
            }, [
              null == eO ? void 0 : eO.artwork,
              null == eO ? void 0 : eO.screenshots,
            ]),
            eP = (e, n) => {
              (0, S.UE)({
                gameName: null != eC ? eC : "",
                applicationId: i,
                action: e,
                similarGameId: n,
                viewId: el,
              });
            },
            eh = (0, G.p)("GameProfileModal"),
            { shouldOpenGameProfile: ef } = (0, j.ZP)({
              location: "GameProfileModal",
              applicationId: i,
              trackEntryPointImpression: !1,
            });
          if (
            (l()(
              ef,
              "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`",
            ),
            null == eO)
          )
            return null;
          let eC =
              null !== (n = eO.name) && void 0 !== n
                ? n
                : null == eT
                  ? void 0
                  : eT.name,
            eM =
              null == eT ? void 0 : eT.getIconURL(160, C.$k ? "webp" : "png"),
            eL = null !== (s = eO.coverImageUrl) && void 0 !== s ? s : eM,
            { summary: eS, websites: ex, publishers: ev, platforms: eG } = eO,
            eZ = L.default.extractTimestamp(i),
            ej = u()().diff(u()(eZ), "days") <= w.G,
            eb = eI.some((e) => (0, N.ig)(e) === E.o.GLOBAL);
          return (0, a.jsx)(m.ModalRoot, {
            transitionState: Q,
            size: m.ModalSize.DYNAMIC,
            className: o()(V, k.gameProfileModal),
            children: (0, a.jsxs)(m.ScrollerNone, {
              className: k.scrollable,
              children: [
                (0, a.jsx)("div", {
                  className: o()(k.gameArtHero),
                  style: { backgroundImage: 'url("'.concat(eR, '")') },
                }),
                (0, a.jsxs)("div", {
                  className: o()(k.content, k.column, k.headerInfo),
                  children: [
                    (0, a.jsxs)("div", {
                      className: k.coverArtRow,
                      children: [
                        (0, a.jsx)("div", {
                          className: k.logoWrapper,
                          children:
                            null != eL &&
                            (0, a.jsx)("img", {
                              className: k.logo,
                              src: eL,
                              alt: F.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format(
                                { game: eC },
                              ),
                            }),
                        }),
                        (0, a.jsx)(U.Z, {
                          applicationId: i,
                          className: k.overflowMenu,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: o()(k.row, k.gapSm, k.gameDetails),
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)(m.Heading, {
                              variant: "heading-xl/bold",
                              children: eC,
                            }),
                            (0, a.jsxs)("div", {
                              className: o()(k.row, k.gapSm),
                              children: [
                                null != eM &&
                                  (0, a.jsx)("img", {
                                    src: eM,
                                    height: 16,
                                    alt: F.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                      { game: eC },
                                    ),
                                  }),
                                (0, a.jsx)(m.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: eg,
                                }),
                                ej &&
                                  (0, a.jsx)(m.Text, {
                                    variant: "eyebrow",
                                    className: k.newBadge,
                                    children: F.Z.Messages.NEW,
                                  }),
                                eb &&
                                  (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(m.Text, {
                                        variant: "text-sm/medium",
                                        children: " \xb7 ",
                                      }),
                                      (0, a.jsx)(H, {}),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          children:
                            eh &&
                            (0, a.jsx)(m.Tooltip, {
                              text: q
                                ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                                : F.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                              children: (e) =>
                                (0, a.jsxs)(m.Button, {
                                  ...e,
                                  innerClassName: k.followButton,
                                  color: q
                                    ? m.Button.Colors.PRIMARY
                                    : m.Button.Colors.BRAND,
                                  onClick: () => {
                                    var e;
                                    let n =
                                      null !== (e = A.K.get(K)) && void 0 !== e
                                        ? e
                                        : {};
                                    (n[i] = !n[i]),
                                      A.K.set(K, n),
                                      eP(
                                        n[i]
                                          ? S.as.FollowGame
                                          : S.as.UnfollowGame,
                                      ),
                                      n[i] &&
                                        (0, b.L)() &&
                                        (0, m.openModalLazy)(async () => {
                                          let { default: e } = await t
                                            .e("86564")
                                            .then(t.bind(t, 641758));
                                          return (n) =>
                                            (0, a.jsx)(e, {
                                              ...n,
                                              applicationId: i,
                                              background: eR,
                                              viewId: el,
                                            });
                                        }),
                                      $(n[i]);
                                  },
                                  children: [
                                    q
                                      ? (0, a.jsx)(m.BellSlashIcon, {
                                          color: "white",
                                        })
                                      : (0, a.jsx)(m.BellIcon, {
                                          color: "white",
                                        }),
                                    q
                                      ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME
                                      : F.Z.Messages.FOLLOW,
                                  ],
                                }),
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(m.HeadingLevel, {
                  children: (0, a.jsxs)("div", {
                    className: o()(k.content, k.mainContent),
                    children: [
                      (0, a.jsxs)("div", {
                        className: k.column,
                        children: [
                          (0, a.jsx)(m.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children:
                              F.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
                          }),
                          (0, a.jsxs)("div", {
                            className: o()(k.section, {
                              [k.fadedEntries]: eA && !em,
                            }),
                            children: [
                              0 === eI.length &&
                                (0, a.jsx)(m.Text, {
                                  variant: "text-xs/semibold",
                                  color: "text-primary",
                                  className: k.emptyFriendsWhoPlay,
                                  children:
                                    F.Z.Messages
                                      .GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                                }),
                              (0, a.jsx)("div", {
                                className: o()(k.column, k.gapNone),
                                children:
                                  null == eI
                                    ? void 0
                                    : eI
                                        .slice(0, eA && !em ? 6 : void 0)
                                        .map((e) =>
                                          (0, a.jsx)(
                                            D.Z,
                                            {
                                              entry: e,
                                              viewId: el,
                                              onClose: z,
                                            },
                                            e.id,
                                          ),
                                        ),
                              }),
                            ],
                          }),
                          eA &&
                            !em &&
                            (0, a.jsxs)(m.Clickable, {
                              className: k.expandEntriesButton,
                              onClick: () => ep(!0),
                              children: [
                                (0, a.jsx)(m.Text, {
                                  variant: "text-xs/semibold",
                                  color: "interactive-normal",
                                  children:
                                    F.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES,
                                }),
                                (0, a.jsx)(m.ChevronSmallDownIcon, {
                                  size: "xs",
                                }),
                              ],
                            }),
                          eN.length > 0 &&
                            (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(m.Heading, {
                                  variant: "text-md/semibold",
                                  color: "header-primary",
                                  children:
                                    F.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                                }),
                                (0, a.jsx)(m.Scroller, {
                                  className: o()(k.row, k.imageScroller),
                                  orientation: "horizontal",
                                  children: eN.map((e, n) =>
                                    (0, a.jsx)(
                                      m.Clickable,
                                      {
                                        className: k.clickable,
                                        focusProps: {
                                          offset: 4,
                                          ringClassName: k.gameArtworkFocusRing,
                                        },
                                        onClick: () => {
                                          eP(S.as.ClickImage),
                                            (0, m.openModalLazy)(async () => {
                                              let { default: e } = await t
                                                .e("99857")
                                                .then(t.bind(t, 895023));
                                              return (t) => {
                                                let { ...r } = t;
                                                return (0, a.jsx)(e, {
                                                  className: k.mediaModal,
                                                  ...r,
                                                  items: eN,
                                                  startingIndex: n,
                                                });
                                              };
                                            });
                                        },
                                        children: (0, a.jsx)("img", {
                                          src: e.src,
                                          className: k.gameArtwork,
                                          alt: F.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                            { game: eC },
                                          ),
                                        }),
                                      },
                                      e.src,
                                    ),
                                  ),
                                }),
                                (0, a.jsx)(m.Spacer, { size: 8 }),
                              ],
                            }),
                          e_ &&
                            null == en &&
                            (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)("div", {
                                  className: k.loadingHeadingSimilarGames,
                                }),
                                (0, a.jsx)("div", {
                                  className: k.row,
                                  children: (0, c.range)(0, 5).map((e) =>
                                    (0, a.jsx)(
                                      "div",
                                      {
                                        className: k.loadingSimilarGamesArtwork,
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
                                (0, a.jsx)(m.Heading, {
                                  variant: "text-md/semibold",
                                  color: "header-primary",
                                  children:
                                    F.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                                }),
                                (0, a.jsx)("div", {
                                  className: k.row,
                                  style: {},
                                  children: ed.map((e) =>
                                    (0, a.jsx)(
                                      B,
                                      { game: e, onClose: z, trackClick: eP },
                                      null == e ? void 0 : e.applicationId,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: o()(k.sidebar, k.column),
                        children: [
                          (0, a.jsx)(m.Heading, {
                            variant: "heading-md/bold",
                            children: F.Z.Messages.ABOUT,
                          }),
                          (0, a.jsxs)("div", {
                            className: k.sidebarSections,
                            children: [
                              null != eS &&
                                (0, a.jsxs)("div", {
                                  className: o()(k.column, k.gapSm),
                                  children: [
                                    (0, a.jsx)(m.Text, {
                                      ref: ei,
                                      lineClamp: ea ? 8 : void 0,
                                      variant: "text-sm/normal",
                                      children: eS,
                                    }),
                                    (es || !ea) &&
                                      (0, a.jsx)(m.Clickable, {
                                        className: k.clickable,
                                        onClick: () => {
                                          eP(
                                            ea ? S.as.ShowMore : S.as.ShowLess,
                                          ),
                                            er(!ea);
                                        },
                                        children: (0, a.jsx)(m.Text, {
                                          variant: "text-sm/semibold",
                                          children: ea
                                            ? F.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_MORE
                                            : F.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_LESS,
                                        }),
                                      }),
                                  ],
                                }),
                              (0, a.jsx)(y.Z, { websites: ex, trackClick: eP }),
                              (ev.length > 0 || eG.length > 0) &&
                                (0, a.jsx)("div", {
                                  className: o()(k.column),
                                  children:
                                    ev.length > 0 &&
                                    (0, a.jsxs)("div", {
                                      className: o()(k.column, k.gapSm),
                                      children: [
                                        (0, a.jsx)(m.Heading, {
                                          variant: "text-xs/semibold",
                                          color: "header-secondary",
                                          children:
                                            F.Z.Messages.GAME_PROFILE_PUBLISHER,
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: o()(k.row, k.gapMd),
                                          children: [
                                            (0, a.jsx)(m.Text, {
                                              variant: "text-sm/normal",
                                              children: ev.join(", "),
                                            }),
                                            eG.length > 0 &&
                                              (0, a.jsx)(W, { platforms: eG }),
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
      n.default = z;
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
        i = t(326103),
        l = t(689938);
      function c(e) {
        let { applicationId: n, className: t } = e,
          c = (0, i.v)("GameProfileOverflowMenu"),
          d = (0, o.Z)({ id: n, label: l.Z.Messages.COPY_ID_APPLICATION }),
          u = () => {},
          _ = c
            ? (0, a.jsxs)(r.MenuItem, {
                id: "game-profile-something-wrong",
                label: l.Z.Messages.GAME_PROFILE_SOMETHING_WENT_WRONG,
                children: [
                  (0, a.jsx)(r.MenuItem, {
                    id: "game-profile-wrong-name",
                    label: l.Z.Messages.GAME_PROFILE_WRONG_GAME,
                    action: u,
                  }),
                  (0, a.jsx)(r.MenuItem, {
                    id: "game-profile-outdated-data",
                    label: l.Z.Messages.GAME_PROFILE_OUTDATED_DATA,
                    action: u,
                  }),
                  (0, a.jsx)(r.MenuItem, {
                    id: "game-profile-other-problem",
                    label: l.Z.Messages.GAME_PROFILE_OTHER_PROBLEM,
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
                  "aria-label": l.Z.Messages.GAME_PROFILE_VIEW_MORE,
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
                  text: l.Z.Messages.MORE,
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
          onSelectEmoji: i,
          messageId: l,
        } = e;
        return (0, a.jsx)(r.Z, {
          closePopout: t,
          channel: n,
          onSelectEmoji: i,
          pickerIntention: s.Hz.REACTION,
          analyticsOverride: o,
          messageId: l,
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
          return l;
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
      class i extends r.PureComponent {
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
      class l extends r.PureComponent {
        render() {
          let e = this.props.artists.split(";");
          if (!this.props.canOpen) return e.join(", ");
          let n = e.length - 1;
          return e.map((e, t) =>
            (0, a.jsx)(
              i,
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
        i = t.n(o),
        l = t(481060),
        c = t(598077),
        d = t(940942),
        u = t(585867);
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
            className: i()(e, d.container),
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
                ? (0, r.jsx)("div", { className: i()(d.emptyUser, n) }, t)
                : (0, r.jsx)(
                    l.Avatar,
                    {
                      tabIndex: 0,
                      src: E.getAvatarURL(_, (0, l.getAvatarSize)(o)),
                      size: o,
                      "aria-label": E.username,
                      className: i()(n, u.cursorPointer, d.avatarSize),
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
        i = t(689938);
      let l = {},
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
            return i.Z.Messages.APPLICATION_STORE_GENRE_ACTION;
          case o.EKQ.ACTION_RPG:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ACTION_RPG;
          case o.EKQ.BRAWLER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BRAWLER;
          case o.EKQ.HACK_AND_SLASH:
            return i.Z.Messages.APPLICATION_STORE_GENRE_HACK_AND_SLASH;
          case o.EKQ.PLATFORMER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PLATFORMER;
          case o.EKQ.STEALTH:
            return i.Z.Messages.APPLICATION_STORE_GENRE_STEALTH;
          case o.EKQ.SURVIVAL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL;
          case o.EKQ.ADVENTURE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ADVENTURE;
          case o.EKQ.ACTION_ADVENTURE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ACTION_ADVENTURE;
          case o.EKQ.METROIDVANIA:
            return i.Z.Messages.APPLICATION_STORE_GENRE_METROIDVANIA;
          case o.EKQ.OPEN_WORLD:
            return i.Z.Messages.APPLICATION_STORE_GENRE_OPEN_WORLD;
          case o.EKQ.PSYCHOLOGICAL_HORROR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PSYCHOLOGICAL_HORROR;
          case o.EKQ.SANDBOX:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SANDBOX;
          case o.EKQ.SURVIVAL_HORROR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL_HORROR;
          case o.EKQ.VISUAL_NOVEL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_VISUAL_NOVEL;
          case o.EKQ.DRIVING_RACING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_DRIVING_RACING;
          case o.EKQ.VEHICULAR_COMBAT:
            return i.Z.Messages.APPLICATION_STORE_GENRE_VEHICULAR_COMBAT;
          case o.EKQ.MASSIVELY_MULTIPLAYER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MASSIVELY_MULTIPLAYER;
          case o.EKQ.MMORPG:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MMORPG;
          case o.EKQ.ROLE_PLAYING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ROLE_PLAYING;
          case o.EKQ.DUNGEON_CRAWLER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_DUNGEON_CRAWLER;
          case o.EKQ.ROGUELIKE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ROGUELIKE;
          case o.EKQ.SHOOTER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SHOOTER;
          case o.EKQ.LIGHT_GUN:
            return i.Z.Messages.APPLICATION_STORE_GENRE_LIGHT_GUN;
          case o.EKQ.SHOOT_EM_UP:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SHOOT_EM_UP;
          case o.EKQ.FPS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FPS;
          case o.EKQ.DUAL_JOYSTICK_SHOOTER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_DUAL_JOYSTICK_SHOOTER;
          case o.EKQ.SIMULATION:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SIMULATION;
          case o.EKQ.FLIGHT_SIMULATOR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FLIGHT_SIMULATOR;
          case o.EKQ.TRAIN_SIMULATOR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TRAIN_SIMULATOR;
          case o.EKQ.LIFE_SIMULATOR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_LIFE_SIMULATOR;
          case o.EKQ.FISHING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FISHING;
          case o.EKQ.SPORTS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SPORTS;
          case o.EKQ.BASEBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BASEBALL;
          case o.EKQ.BASKETBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BASKETBALL;
          case o.EKQ.BILLIARDS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BILLIARDS;
          case o.EKQ.BOWLING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BOWLING;
          case o.EKQ.BOXING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BOXING;
          case o.EKQ.FOOTBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FOOTBALL;
          case o.EKQ.GOLF:
            return i.Z.Messages.APPLICATION_STORE_GENRE_GOLF;
          case o.EKQ.HOCKEY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_HOCKEY;
          case o.EKQ.SKATEBOARDING_SKATING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SKATEBOARDING_SKATING;
          case o.EKQ.SNOWBOARDING_SKIING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SNOWBOARDING_SKIING;
          case o.EKQ.SOCCER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SOCCER;
          case o.EKQ.TRACK_FIELD:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TRACK_FIELD;
          case o.EKQ.SURFING_WAKEBOARDING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SURFING_WAKEBOARDING;
          case o.EKQ.WRESTLING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_WRESTLING;
          case o.EKQ.STRATEGY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_STRATEGY;
          case o.EKQ.FOUR_X:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FOUR_X;
          case o.EKQ.ARTILLERY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ARTILLERY;
          case o.EKQ.RTS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_RTS;
          case o.EKQ.TOWER_DEFENSE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TOWER_DEFENSE;
          case o.EKQ.TURN_BASED_STRATEGY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TURN_BASED_STRATEGY;
          case o.EKQ.WARGAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_WARGAME;
          case o.EKQ.MOBA:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MOBA;
          case o.EKQ.FIGHTING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FIGHTING;
          case o.EKQ.PUZZLE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PUZZLE;
          case o.EKQ.CARD_GAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_CARD_GAME;
          case o.EKQ.EDUCATION:
            return i.Z.Messages.APPLICATION_STORE_GENRE_EDUCATION;
          case o.EKQ.FITNESS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FITNESS;
          case o.EKQ.GAMBLING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_GAMBLING;
          case o.EKQ.MUSIC_RHYTHM:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MUSIC_RHYTHM;
          case o.EKQ.PARTY_MINI_GAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PARTY_MINI_GAME;
          case o.EKQ.PINBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PINBALL;
          case o.EKQ.TRIVIA_BOARD_GAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TRIVIA_BOARD_GAME;
          case o.EKQ.TACTICAL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TACTICAL;
          case o.EKQ.INDIE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_INDIE;
          case o.EKQ.ARCADE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ARCADE;
          case o.EKQ.POINT_AND_CLICK:
            return i.Z.Messages.APPLICATION_STORE_GENRE_POINT_AND_CLICK;
          default:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MISCELLANEOUS;
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
    120297: function (e, n, t) {
      e.exports = { button: "button_c6eb7b", buttonSize: "buttonSize_c6eb7b" };
    },
    763072: function (e, n, t) {
      e.exports = {
        reactions: "reactions_d0fc0d",
        reply: "reply_d0fc0d",
        replyHeader: "replyHeader_d0fc0d",
        replyInput: "replyInput_d0fc0d",
        emojiButton: "emojiButton_d0fc0d",
        reaction: "reaction_d0fc0d",
      };
    },
    671656: function (e, n, t) {
      e.exports = { clickable: "clickable_bffa11" };
    },
    303540: function (e, n, t) {
      e.exports = { popout: "popout_e40224" };
    },
    346292: function (e, n, t) {
      e.exports = {
        listeningTimeline: "listeningTimeline_a218d8",
        seekBarContainer: "seekBarContainer_a218d8",
        seekBarFill: "seekBarFill_a218d8",
        timestamp: "timestamp_a218d8",
      };
    },
    576306: function (e, n, t) {
      e.exports = {
        coachtip: "coachtip_e8254e",
        coachtipContent: "coachtipContent_e8254e",
        coachtipInner: "coachtipInner_e8254e",
        coachtipAsset: "coachtipAsset_e8254e",
        coachtipTextContainer: "coachtipTextContainer_e8254e",
      };
    },
    164384: function (e, n, t) {
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
    243113: function (e, n, t) {
      e.exports = { menuIcon: "menuIcon_aa0ae7" };
    },
    348910: function (e, n, t) {
      e.exports = { loadingSpinner: "loadingSpinner_f2635d" };
    },
    76927: function (e, n, t) {
      e.exports = { container: "container_b11148" };
    },
    255341: function (e, n, t) {
      e.exports = {
        profileEntryCard: "profileEntryCard_f1257c",
        reactions: "reactions_f1257c",
        avatar: "avatar_f1257c",
        playerInfo: "playerInfo_f1257c",
      };
    },
    707443: function (e, n, t) {
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
    375387: function (e, n, t) {
      e.exports = {
        root: "root_ed81cc",
        image: "image_ed81cc",
        emptyPreviewContainer: "emptyPreviewContainer_ed81cc",
        emptyPreviewImage: "emptyPreviewImage_ed81cc",
        emptyPreviewText: "emptyPreviewText_ed81cc",
      };
    },
    894967: function (e, n, t) {
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
    940942: function (e, n, t) {
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
    585867: function (e, n, t) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=e86870dc3b08da55056a.js.map
