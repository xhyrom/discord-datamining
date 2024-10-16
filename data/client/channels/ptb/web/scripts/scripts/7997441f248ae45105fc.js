"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52733"],
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
        A = n(786761),
        p = n(3148),
        g = n(48854),
        f = n(785359),
        T = n(79390),
        O = n(623292),
        N = n(807092),
        R = n(467798),
        P = n(703558),
        h = n(117530),
        C = n(630388),
        L = n(226351),
        M = n(981631),
        S = n(689938);
      async function x(e) {
        var t, n, a;
        let u,
          {
            channelId: _,
            uploads: x,
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
          null != N.Z.getPendingReply(_) &&
            ((y.type = M.uaV.REPLY),
            (y.message_reference = Z.messageReference),
            (y.allowed_mentions = Z.allowedMentions),
            (0, O.A6)(_));
        let [w, k] = (0, R.Z)(y.content);
        w &&
          ((y.content = k),
          (y.flags = (0, C.pj)(
            null !== (t = y.flags) && void 0 !== t ? t : 0,
            M.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let U = null !== (n = Z.nonce) && void 0 !== n ? n : (0, g.r)(),
          F = (0, p.ZP)({
            channelId: _,
            content: y.content,
            tts: null !== (a = null == G ? void 0 : G.tts) && void 0 !== a && a,
            type: y.type,
            messageReference: y.message_reference,
            flags: y.flags,
            nonce: U,
            poll: (0, T.x9)(Z.poll),
          });
        return (
          ((y.nonce = U),
          j.on("start", (e) => {
            (u = (0, A.e5)({ ...F, id: e.id })),
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
              (0, f.x)({
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
                title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
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
                  title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                  help:
                    null !== (E = null == n ? void 0 : n.message) &&
                    void 0 !== E
                      ? E
                      : S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP,
                });
              }
              "" !== y.content &&
                "" === P.Z.getDraft(_, v) &&
                s.Z.saveDraft(_, y.content, v),
                0 === h.Z.getUploadCount(_, v) &&
                  o.Z.setUploads({ channelId: _, uploads: x, draftType: v });
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
          await j.uploadFiles(x, y),
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
          x({ channelId: t, uploads: i, draftType: a });
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
            let e = N.Z.getPendingReply(n);
            if (null != e) {
              let t = i.Z.getSendMessageOptionsForReply(e);
              (I.type = M.uaV.REPLY),
                (I.message_reference = t.messageReference),
                (I.allowed_mentions = t.allowedMentions),
                (0, O.A6)(n);
            }
          }
          let A = new E.Z(M.ANM.MESSAGES(n));
          A.on("start", (e) => {
            r.Z.dispatch({
              type: "UPLOAD_START",
              channelId: n,
              file: e,
              uploader: A,
            });
          }),
            A.on("progress", (e) => {
              r.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: n, file: e });
            }),
            A.on("error", (t, u, _) => {
              if (
                (r.Z.dispatch({ type: "UPLOAD_FAIL", channelId: n, file: t }),
                (0, f.x)({ fileItems: t.items, failureCode: u }),
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
                title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                  onClick: () => {
                    (0, a.closeModal)(l.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: n, file: o, draftType: c, message: d });
                  },
                }),
              }),
                "" !== I.content &&
                  "" === P.Z.getDraft(n, c) &&
                  s.Z.saveDraft(n, I.content, c);
            }),
            A.on("complete", (e) => {
              r.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: n, file: e });
            }),
            A.upload(o, I);
        },
        uploadFiles: x,
        cancel(e) {
          r.Z.dispatch({ type: "UPLOAD_CANCEL_REQUEST", file: e }),
            null != e.draftContent &&
              null != e.channelId &&
              "" === P.Z.getDraft(e.channelId, P.d.ChannelMessage) &&
              r.Z.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: P.d.ChannelMessage,
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
      var a = n(470079);
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
      var a = n(735250),
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
      var a = n(735250),
        r = n(470079),
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
      var a = n(735250),
        r = n(470079),
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
    206295: function (e, t, n) {
      n(47120);
      var a = n(470079),
        r = n(688619),
        s = n.n(r);
      n(979590);
      var i = n(442837),
        o = n(866442),
        l = n(607070),
        c = n(220082),
        d = n(981631);
      t.Z = (e) => {
        var t, r, u, _, E, m;
        let I;
        I = n(481060).tokens;
        let A = (0, i.e7)([l.Z], () => l.Z.saturation),
          [p, g] = (0, c.Cf)(
            e,
            null !==
              (m =
                null == I
                  ? void 0
                  : null === (E = I.colors) || void 0 === E
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
                          : null === (t = r.hex) || void 0 === t
                            ? void 0
                            : t.call(r)) && void 0 !== m
              ? m
              : "#000",
          );
        return a.useMemo(() => {
          let e = (0, o._i)(p),
            t = (0, o._i)(g);
          for (let t = 1; t < 8 && !((0, o.Bd)(e) >= 0.725); t++) {
            e = s()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, o.Bd)(t) >= 0.725); e++) {
            t = s()(t).darken(0.5).num();
          }
          let n = (0, o.Rf)(e);
          return { primaryColor: n, secondaryColor: (0, o.Rf)(t) };
        }, [p, g]);
      };
    },
    410441: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(735250);
      n(470079);
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
    96856: function (e, t, n) {
      n.d(t, {
        p: function () {
          return r;
        },
      });
      let a = (0, n(818083).B)({
        kind: "user",
        id: "2024-08_game_follow_survey",
        label: "Game Follow Fake Door Survey",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: n } = a.useExperiment(
            { location: e },
            { autoTrackExposure: t },
          );
        return n;
      }
    },
    567409: function (e, t, n) {
      n.d(t, {
        Ns: function () {
          return I;
        },
      }),
        n(47120);
      var a = n(470079),
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
    124030: function (e, t, n) {
      n.d(t, {
        A: function () {
          return i;
        },
        L: function () {
          return s;
        },
      });
      var a = n(433517);
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
        s = n(735250),
        i = n(470079),
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
      var a = n(735250),
        r = n(470079),
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
        A = n(810568),
        p = n(689938),
        g = n(501345),
        f = n(51527);
      t.Z = (e) => {
        let { entry: t, viewId: n, officialGuildId: s, onClose: T } = e,
          O = (0, o.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
          N = (0, o.e7)([m.default], () => m.default.getUser(t.author_id)),
          { nick: R, avatar: P } = r.useMemo(() => {
            let e =
              null == N
                ? void 0
                : N.getAvatarURL(null == O ? void 0 : O.guild_id, 48, !1);
            return {
              nick: I.ZP.getName(
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
                  entry: t,
                  closePopout: r,
                  updatePopoutPosition: i,
                  onReaction: () => {
                    (0, A.UE)({
                      action: A.as.SendMessageUser,
                      applicationId: t.extra.application_id,
                      gameName: t.extra.game_name,
                      recipientUserId: t.author_id,
                      viewId: n,
                      officialGuildId: s,
                    }),
                      T(),
                      r();
                  },
                  onUserPopoutClosed: () => r(),
                  disableGameProfileLinks: !0,
                });
              },
              positionKey: "game-profile-entry-".concat(t.id),
              onRequestOpen: () => {
                (0, A.UE)({
                  action: A.as.ClickMessageUser,
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
                          src: P,
                          alt: p.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: R },
                          ),
                        }),
                        (0, a.jsx)("div", {
                          className: i()(g.playerInfo),
                          children: (0, a.jsxs)("div", {
                            className: i()(f.column, f.gapXs),
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
      var a = n(735250),
        r = n(470079),
        s = n(120356),
        i = n.n(s),
        o = n(913527),
        l = n.n(o),
        c = n(705512),
        d = n(442837),
        u = n(433517),
        _ = n(481060),
        E = n(224706),
        m = n(560361),
        I = n(835473),
        A = n(168551),
        p = n(485267),
        g = n(561308),
        f = n(669764),
        T = n(706454),
        O = n(768581),
        N = n(814225),
        R = n(709054),
        P = n(810568),
        h = n(998058),
        C = n(839392),
        L = n(96856),
        M = n(567409),
        S = n(774073),
        x = n(124030),
        v = n(426482),
        G = n(715318),
        Z = n(38516),
        b = n(891949),
        j = n(252547),
        D = n(484527),
        y = n(131033),
        w = n(296768),
        k = n(978313),
        U = n(206583),
        F = n(689938),
        K = n(51527);
      let B = "GameProfileModal",
        H = () =>
          (0, a.jsxs)("div", {
            className: K.gameBadge,
            children: [
              (0, a.jsx)(_.FireIcon, { size: "xxs" }),
              (0, a.jsx)(_.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: F.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          });
      function Q(e) {
        var t;
        let {
            detectedGame: s,
            application: o,
            entries: d,
            viewId: E,
            trackAction: m,
          } = e,
          [I, A] = r.useState(() => {
            var e;
            return null === (e = u.K.get(B)) || void 0 === e ? void 0 : e[o.id];
          }),
          p = (0, L.p)("GameProfileModal"),
          f = r.useMemo(
            () => (null == s ? void 0 : s.genres.map(N.P3).join(", ")),
            [s],
          ),
          T = r.useMemo(() => {
            if (null == s) return "";
            let { artwork: e, screenshots: t } = s;
            if (e.length > 0) {
              let t = Math.floor(Math.random() * (e.length - 1));
              return e[t];
            }
            if (t.length > 0) {
              let e = Math.floor(Math.random() * (t.length - 1));
              return t[e];
            }
            return "";
          }, [s]),
          h = null == o ? void 0 : o.getIconURL(160, O.$k ? "webp" : "png"),
          C = R.default.extractTimestamp(o.id),
          M = l()().diff(l()(C), "days") <= U.G,
          S = d.some((e) => (0, g.ig)(e) === c.o.GLOBAL),
          Z =
            null !== (t = s.name) && void 0 !== t
              ? t
              : null == o
                ? void 0
                : o.name,
          b = r.useCallback(
            () => () => {
              var e;
              let t = null !== (e = u.K.get(B)) && void 0 !== e ? e : {};
              (t[o.id] = !t[o.id]),
                u.K.set(B, t),
                m(t[o.id] ? P.as.FollowGame : P.as.UnfollowGame),
                t[o.id] &&
                  (0, x.L)() &&
                  (0, _.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("86564")
                      .then(n.bind(n, 641758));
                    return (t) =>
                      (0, a.jsx)(e, {
                        ...t,
                        applicationId: o.id,
                        background: T,
                        viewId: E,
                      });
                  }),
                A(t[o.id]);
            },
            [o.id, T, m, E],
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: i()(K.gameArtHero),
              style: { backgroundImage: 'url("'.concat(T, '")') },
            }),
            (0, a.jsxs)("div", {
              className: i()(K.content, K.column, K.gapLg, K.headerInfo),
              children: [
                (0, a.jsxs)("div", {
                  className: K.coverArtRow,
                  children: [
                    (0, a.jsx)("div", {
                      className: K.logoWrapper,
                      children: (0, a.jsx)(v.C, {
                        game: s,
                        application: o,
                        className: K.logo,
                        size: v.Z.LARGE,
                      }),
                    }),
                    (0, a.jsx)(G.Z, {
                      applicationId: o.id,
                      viewId: E,
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
                          children: Z,
                        }),
                        (0, a.jsxs)("div", {
                          className: i()(K.row, K.gapSm),
                          children: [
                            null != h &&
                              (0, a.jsx)("img", {
                                className: K.gameIcon,
                                src: h,
                                height: 16,
                                alt: F.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                  { game: Z },
                                ),
                              }),
                            (0, a.jsx)(_.Text, {
                              variant: "text-sm/semibold",
                              color: "text-muted",
                              children: f,
                            }),
                            M &&
                              (0, a.jsx)(_.Text, {
                                variant: "eyebrow",
                                className: K.newBadge,
                                children: F.Z.Messages.NEW,
                              }),
                            S &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(_.Text, {
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
                        p &&
                        (0, a.jsx)(_.Tooltip, {
                          text: I
                            ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                            : F.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                          children: (e) =>
                            (0, a.jsxs)(_.Button, {
                              ...e,
                              innerClassName: K.followButton,
                              color: I
                                ? _.Button.Colors.PRIMARY
                                : _.Button.Colors.BRAND,
                              onClick: b,
                              children: [
                                I
                                  ? (0, a.jsx)(_.BellSlashIcon, {
                                      color: "white",
                                    })
                                  : (0, a.jsx)(_.BellIcon, { color: "white" }),
                                I
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
          ],
        });
      }
      function Y(e) {
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
          className: K.sections,
          children: [
            (0, a.jsx)(j.Z, {
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
            (0, a.jsx)(b.Z, { detectedGame: n, trackAction: u }),
            (0, a.jsx)(w.Z, {
              applicationId: r.id,
              onClose: c,
              trackAction: u,
              similarGames: o,
              similarGamesError: l,
            }),
          ],
        });
      }
      function W(e) {
        let { detectedGame: t, setOfficialGuildInvite: n, trackAction: r } = e;
        return (0, a.jsxs)("div", {
          className: i()(K.sidebar, K.column, K.gapLg),
          children: [
            (0, a.jsx)(_.Heading, {
              variant: "heading-md/bold",
              children: F.Z.Messages.ABOUT,
            }),
            (0, a.jsxs)("div", {
              className: K.sections,
              children: [
                (0, a.jsx)(k.Z, { detectedGame: t, trackAction: r }),
                (0, a.jsx)(D.Z, {
                  detectedGame: t,
                  trackClick: r,
                  onInviteResolved: n,
                }),
                (0, a.jsx)(Z.Z, { detectedGame: t, trackClick: r }),
                (0, a.jsx)(y.Z, { detectedGame: t }),
              ],
            }),
          ],
        });
      }
      let z = (e) => e.filter(S.z6).slice(0, 5);
      t.default = (e) => {
        var t;
        let {
            applicationId: n,
            source: s,
            sourceUserId: o,
            transitionState: l,
            onClose: c,
          } = e,
          { clientThemesClassName: u } = (0, A.ZP)(),
          O = (0, d.e7)([T.default], () => T.default.locale),
          N = r.useMemo(() => (0, P.fP)(), []),
          R = (0, d.Wu)([C.Z], () => {
            var e;
            return (
              null !== (e = C.Z.getSimilarGames(n)) && void 0 !== e ? e : []
            ).slice(0, 25);
          }),
          [L, S] = r.useState(null),
          x = (0, M.Ns)(n),
          [v, G] = r.useState(null),
          Z = (0, I.q)(n),
          b = (0, d.e7)([f.Z], () => f.Z.getGame(n)),
          j =
            null !== (t = null == b ? void 0 : b.name) && void 0 !== t
              ? t
              : null == Z
                ? void 0
                : Z.name,
          D = (e, t) => {
            var a;
            (0, P.UE)({
              gameName: null != j ? j : "",
              applicationId: n,
              action: e,
              similarGameId: t,
              viewId: N,
              officialGuildId:
                null == v
                  ? void 0
                  : null === (a = v.guild) || void 0 === a
                    ? void 0
                    : a.id,
            });
          };
        return (r.useEffect(() => {
          (0, P.IS)({
            source: s,
            viewId: N,
            applicationId: n,
            gameName: null != j ? j : "",
            authorId: o,
          });
        }, []),
        r.useEffect(() => {
          (0, p.Jn)();
        }, []),
        (0, I.Z)(R),
        r.useEffect(() => {
          !O.startsWith("en") &&
            (null == b ? void 0 : b.summaryLocalized) == null &&
            E.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
        }, [n, null == b ? void 0 : b.summaryLocalized, O]),
        r.useEffect(() => {
          (async () => {
            if (0 === R.length) {
              S(null);
              try {
                await (0, h.i)(n);
              } catch (e) {
                S(e);
              }
            }
          })();
        }, [n, R]),
        (0, m.Z)(() => {
          var e;
          let t = Date.now(),
            a = x.map((e) => {
              let n = (0, g.kr)(e) ? (0, g.T_)(e, t) : (0, g.GL)(e, O);
              return JSON.stringify({
                item_id: e.id,
                trait: e.traits,
                time_played: n,
              });
            });
          (0, P.wz)({
            viewId: N,
            applicationId: n,
            gameName: null != j ? j : "",
            playedFriendIds: x.map((e) => e.author_id),
            playedFriendsData: a,
            similarGames: z(R),
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
          : (0, a.jsx)(_.ModalRoot, {
              transitionState: l,
              size: _.ModalSize.DYNAMIC,
              className: i()(u, K.gameProfileModal),
              children: (0, a.jsxs)(_.Scroller, {
                orientation: "auto",
                children: [
                  (0, a.jsx)(Q, {
                    detectedGame: b,
                    application: Z,
                    entries: x,
                    viewId: N,
                    trackAction: D,
                  }),
                  (0, a.jsx)(_.HeadingLevel, {
                    children: (0, a.jsxs)("div", {
                      className: i()(K.content, K.mainContent),
                      children: [
                        (0, a.jsx)(Y, {
                          detectedGame: b,
                          application: Z,
                          entries: x,
                          officialGuildInvite: v,
                          similarGames: R,
                          similarGamesError: L,
                          onClose: c,
                          viewId: N,
                          trackAction: D,
                        }),
                        (0, a.jsx)(W, {
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
      var a = n(735250);
      n(470079);
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
      var a = n(735250);
      n(470079);
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
      var a = n(735250),
        r = n(470079),
        s = n(481060),
        i = n(341176),
        o = n(810568),
        l = n(701865),
        c = n(689938),
        d = n(51527),
        u = n(133512);
      function _(e) {
        let { detectedGame: t, trackAction: _ } = e,
          E = r.useRef(null),
          m = r.useMemo(() => {
            let e = t.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [
              ...t.screenshots.map((e) => ({ url: e, type: "IMAGE" })),
              ...e,
            ];
          }, [t.artwork, t.screenshots]),
          I = m.length > 2;
        function A(e) {
          if (null == E.current) return;
          let t = E.current.getScrollerState().scrollLeft;
          E.current.scrollTo({ to: t + 280 * e, animate: !0 });
        }
        return 0 === m.length
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
                  className: I
                    ? u.gameProfileMediaSmall
                    : u.gameProfileMediaLarge,
                  children: [
                    (0, a.jsx)(s.AdvancedScrollerNone, {
                      ref: E,
                      className: u.imageScroller,
                      orientation: "horizontal",
                      children: m.map((e, t) =>
                        (0, a.jsx)(
                          s.Clickable,
                          {
                            className: u.imageClickable,
                            focusProps: {
                              offset: 4,
                              ringClassName: u.gameArtworkFocusRing,
                            },
                            onClick: () => {
                              _(o.as.ClickImage),
                                (0, s.openModalLazy)(
                                  async () => {
                                    let { default: e } =
                                      await Promise.resolve().then(
                                        n.bind(n, 950120),
                                      );
                                    return (n) =>
                                      (0, a.jsx)(e, {
                                        className: u.mediaModal,
                                        ...n,
                                        items: m,
                                        fit: i.D.SCALE_DOWN,
                                        startingIndex: t,
                                        shouldHideMediaOptions: !0,
                                        shouldAnimateCarousel: !0,
                                      });
                                  },
                                  { modalKey: l.U },
                                );
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
                    I &&
                      (0, a.jsxs)("div", {
                        className: u.mediaOverlay,
                        children: [
                          (0, a.jsx)("div", { className: u.gradientLeft }),
                          (0, a.jsx)(s.Clickable, {
                            className: u.arrowClickable,
                            onClick: () => A(-1),
                            children: (0, a.jsx)(s.ArrowSmallLeftIcon, {
                              className: u.arrow,
                              color: "currentColor",
                            }),
                          }),
                          (0, a.jsx)("div", { className: u.gradientRight }),
                          (0, a.jsx)(s.Clickable, {
                            className: u.arrowClickable,
                            onClick: () => A(1),
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
      var a = n(735250),
        r = n(470079),
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
          [I, A] = r.useState(!1),
          p = r.useMemo(() => t.slice(0, m && !I ? 6 : void 0), [t, m, I]);
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
                        children: p.map((e) =>
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
    484527: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var a = n(735250),
        r = n(470079),
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
        A = n(689938),
        p = n(51527),
        g = n(479537);
      function f(e) {
        let { detectedGame: t, trackClick: n, onInviteResolved: s } = e,
          [f, T] = r.useState(),
          O = (0, l.e7)([_.Z], () => {
            var e, t;
            return (
              (null == f
                ? void 0
                : null === (e = f.guild) || void 0 === e
                  ? void 0
                  : e.id) != null &&
              _.Z.isMember(
                null == f
                  ? void 0
                  : null === (t = f.guild) || void 0 === t
                    ? void 0
                    : t.id,
              )
            );
          }),
          N = r.useMemo(() => {
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
                  (T(e.invite), null != e.invite && (null == s || s(e.invite)));
              }
            };
            null != N && e(N.url);
          }, [N, s]),
          null == f ||
            null == f.guild ||
            (!f.guild.features.includes("VERIFIED") &&
              !f.guild.features.includes("PARTNER")))
        )
          return null;
        let R = E.ZP.getGuildIconURL({
          id: f.guild.id,
          icon: f.guild.icon,
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
                    guildName: f.guild.name,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: g.inviteInfo,
                  children: [
                    (0, a.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      children: f.guild.name,
                    }),
                    null != f.approximate_member_count &&
                      (0, a.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        children:
                          A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: f.approximate_member_count },
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
                    invite: f,
                    code: f.code,
                    context: I.IlC.APP,
                  });
              },
              children: O ? A.Z.Messages.JOINED_GUILD : A.Z.Messages.JOIN_GUILD,
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
      var a = n(735250),
        r = n(470079),
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
      var a = n(735250);
      n(470079);
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
      var a = n(735250),
        r = n(470079),
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
        A = n(774073),
        p = n(426482),
        g = n(644941),
        f = n(689938),
        T = n(51527),
        O = n(796805);
      let N = (e) => {
        let { game: t, onClose: n, trackClick: r } = e,
          s = (0, c.e7)([_.Z], () => _.Z.getApplication(t.applicationId));
        return (0, a.jsx)(d.Tooltip, {
          text: t.name,
          children: (e) =>
            (0, a.jsx)(d.Clickable, {
              ...e,
              className: O.similarGameImageClickable,
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
              children: (0, a.jsx)(p.C, {
                game: t,
                application: s,
                className: O.similarGameImage,
                size: p.Z.SMALL,
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
          p = (0, c.Wu)([E.Z], () =>
            o
              .map((e) => E.Z.getGame(e))
              .filter((e) => null != e)
              .filter((e) => (0, A.z6)(e.applicationId))
              .slice(0, 5),
          );
        return (r.useEffect(() => {
          o.length > 0 && u.Z.getDetectableGamesSupplemental([t, ...o]);
        }, [t, o]),
        m && null == _)
          ? (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("div", {
                  className: i()(O.loadingHeading, T.sectionHeader),
                }),
                (0, a.jsx)("div", {
                  className: i()(T.row, T.gapLg),
                  children: l()
                    .range(0, 5)
                    .map((e) =>
                      (0, a.jsx)("div", { className: O.loadingArtwork }, e),
                    ),
                }),
              ],
            })
          : m || 0 !== p.length
            ? (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)(d.Heading, {
                    className: T.sectionHeader,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: f.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                  }),
                  (0, a.jsx)("div", {
                    className: O.similarGames,
                    style: {},
                    children: p.map((e) =>
                      (0, a.jsx)(
                        N,
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
          return p;
        },
      }),
        n(47120);
      var a = n(735250),
        r = n(470079),
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
        A = n(110367);
      function p(e) {
        let { detectedGame: t, trackAction: n } = e,
          [s, p] = r.useState(
            (null == t ? void 0 : t.summaryLocalized) != null,
          ),
          [g, f] = r.useState(!0),
          [T, O] = r.useState(!1),
          N = r.useRef(null),
          { width: R, height: P } = (0, u.Z)();
        return (r.useEffect(() => {
          let e = N.current;
          null != e && O(e.scrollHeight - e.clientHeight > 1 || !g);
        }, [N, R, P, g]),
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
                              onShowOriginal: () => p(!1),
                            })
                          : m.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({
                              onShowTranslated: () => p(!0),
                            }),
                      }),
                    ],
                  }),
                (0, a.jsx)(l.xv, {
                  ref: N,
                  lineClamp: g ? 8 : void 0,
                  variant: "text-sm/normal",
                  children: s ? t.summaryLocalized : t.summary,
                }),
                T &&
                  (0, a.jsx)(d.Clickable, {
                    className: I.clickable,
                    onClick: () => {
                      n(g ? _.as.ShowMore : _.as.ShowLess), f(!g);
                    },
                    children: (0, a.jsx)(l.xv, {
                      variant: "text-sm/semibold",
                      children: g
                        ? m.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE
                        : m.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS,
                    }),
                  }),
                (0, a.jsx)(E.Z, { className: A.platforms, detectedGame: t }),
              ],
            });
      }
    },
    931651: function (e, t, n) {
      n.d(t, {
        $: function () {
          return i;
        },
      });
      var a = n(735250);
      n(470079);
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
      var a = n(470079);
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
      var a = n(735250),
        r = n(470079),
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
        r = n(735250),
        s = n(470079),
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
      var a = n(735250);
      n(470079);
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
      if (12633 == n.j) var s = n(266067);
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
        followButton: "followButton_e881fc",
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
//# sourceMappingURL=7997441f248ae45105fc.js.map
