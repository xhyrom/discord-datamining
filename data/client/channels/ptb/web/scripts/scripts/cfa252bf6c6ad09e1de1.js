"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96248"],
  {
    966390: function (e, n, a) {
      a(47120), a(789020);
      var t = a(481060),
        r = a(570140),
        s = a(430742),
        i = a(904245),
        o = a(166459),
        l = a(531643),
        c = a(881052),
        d = a(673750),
        u = a(141795),
        _ = a(476326),
        E = a(680287),
        m = a(163268),
        I = a(539573),
        A = a(786761),
        p = a(3148),
        g = a(48854),
        f = a(785359),
        T = a(79390),
        O = a(623292),
        R = a(807092),
        N = a(467798),
        h = a(703558),
        P = a(117530),
        C = a(630388),
        L = a(226351),
        M = a(981631),
        S = a(689938);
      async function x(e) {
        var n, a, t;
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
          null != R.Z.getPendingReply(_) &&
            ((y.type = M.uaV.REPLY),
            (y.message_reference = Z.messageReference),
            (y.allowed_mentions = Z.allowedMentions),
            (0, O.A6)(_));
        let [w, k] = (0, N.Z)(y.content);
        w &&
          ((y.content = k),
          (y.flags = (0, C.pj)(
            null !== (n = y.flags) && void 0 !== n ? n : 0,
            M.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let U = null !== (a = Z.nonce) && void 0 !== a ? a : (0, g.r)(),
          F = (0, p.ZP)({
            channelId: _,
            content: y.content,
            tts: null !== (t = null == G ? void 0 : G.tts) && void 0 !== t && t,
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
          j.on("error", (e, n, a, t) => {
            if (
              (r.Z.dispatch({
                type: "UPLOAD_FAIL",
                channelId: _,
                file: e,
                messageRecord: u,
              }),
              (0, f.x)({
                fileItems: e.items,
                failureCode: n,
                errorMessage: null == t ? void 0 : t.msg,
              }),
              n === M.evJ.EXPLICIT_CONTENT)
            ) {
              i.Z.sendExplicitMediaClydeError(
                _,
                null == a ? void 0 : a.attachments,
                m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (n === M.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: n, message: null == a ? void 0 : a.message },
                t =
                  null == u
                    ? null
                    : { type: d.$V.SEND, message: { ...u, channelId: _ } };
              (0, l.openUploadError)({
                title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: (0, I.uF)(t, e),
              });
              return;
            }
            if (n !== M.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (b)
                D.reject(new c.Hx({ status: n, body: null != a ? a : {} }, n));
              else {
                var E;
                (0, l.openUploadError)({
                  title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                  help:
                    null !== (E = null == a ? void 0 : a.message) &&
                    void 0 !== E
                      ? E
                      : S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP,
                });
              }
              "" !== y.content &&
                "" === h.Z.getDraft(_, v) &&
                s.Z.saveDraft(_, y.content, v),
                0 === P.Z.getUploadCount(_, v) &&
                  o.Z.setUploads({ channelId: _, uploads: x, draftType: v });
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
          await j.uploadFiles(x, y),
          D.resolve(),
          D.promise
        );
      }
      n.Z = {
        instantBatchUpload: function (e) {
          let {
              channelId: n,
              files: a,
              draftType: t,
              isThumbnail: r = !1,
              filesMetadata: s = [],
            } = e,
            i = Array.from(a).map((e, a) => {
              let t = null != s ? s[a] : {};
              return new u.n(
                { file: e, platform: _.ow.WEB, isThumbnail: r, ...t },
                n,
              );
            });
          x({ channelId: n, uploads: i, draftType: t });
        },
        upload: function e(n) {
          let {
              channelId: a,
              file: o,
              draftType: c,
              message: d,
              hasSpoiler: u,
              filename: _,
            } = n,
            I = { content: "", tts: !1, hasSpoiler: u, filename: _ };
          if (null != d) {
            (I.content = d.content),
              (I.tts = d.tts),
              (I.channel_id = d.channel_id);
            let e = R.Z.getPendingReply(a);
            if (null != e) {
              let n = i.Z.getSendMessageOptionsForReply(e);
              (I.type = M.uaV.REPLY),
                (I.message_reference = n.messageReference),
                (I.allowed_mentions = n.allowedMentions),
                (0, O.A6)(a);
            }
          }
          let A = new E.Z(M.ANM.MESSAGES(a));
          A.on("start", (e) => {
            r.Z.dispatch({
              type: "UPLOAD_START",
              channelId: a,
              file: e,
              uploader: A,
            });
          }),
            A.on("progress", (e) => {
              r.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: a, file: e });
            }),
            A.on("error", (n, u, _) => {
              if (
                (r.Z.dispatch({ type: "UPLOAD_FAIL", channelId: a, file: n }),
                (0, f.x)({ fileItems: n.items, failureCode: u }),
                u === M.evJ.EXPLICIT_CONTENT)
              ) {
                i.Z.sendExplicitMediaClydeError(
                  a,
                  null == _ ? void 0 : _.attachments,
                  m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, l.openUploadError)({
                title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                  onClick: () => {
                    (0, t.closeModal)(l.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: a, file: o, draftType: c, message: d });
                  },
                }),
              }),
                "" !== I.content &&
                  "" === h.Z.getDraft(a, c) &&
                  s.Z.saveDraft(a, I.content, c);
            }),
            A.on("complete", (e) => {
              r.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: a, file: e });
            }),
            A.upload(o, I);
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
    560361: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = a(470079);
      function r(e) {
        let n = t.useRef();
        (n.current = e),
          t.useEffect(
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
    680287: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return c;
        },
      }),
        a(653041);
      var t = a(544891),
        r = a(881052),
        s = a(687294),
        i = a(476326),
        o = a(861990),
        l = a(689938);
      class c extends s.Z {
        async uploadFiles(e, n) {
          let { addFilesTo: a } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super.upload({ name: l.Z.Messages.ATTACHMENT_PROCESSING }, n, e);
          let t = new AbortController();
          try {
            if (((this.files = e), this._aborted)) return;
            if (
              (this._handleStart(() => t.abort()),
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
            return await this._createMessage(t.signal, n, a);
          } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
          }
        }
        async _createMessage(e, n, a) {
          let s;
          let l = [];
          this.files.forEach((e, n) => {
            let a = (0, o.B)(e, n);
            e.item.platform === i.ow.WEB && l.push({ ...a });
          }),
            (s =
              null != a && null != n
                ? this._addAttachmentsToPayload(n, a, l)
                : { ...n, attachments: l });
          let c = { url: this._url, body: s, signal: e },
            d = "POST" === this._method ? t.tn.post : t.tn.patch;
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
        constructor(e, n = "POST", a) {
          super(e, n, a);
        }
      }
    },
    256139: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return l;
        },
      });
      var t = a(735250),
        r = a(120356),
        s = a.n(r),
        i = a(481060),
        o = a(615934);
      function l(e) {
        let { className: n, onClick: a, ...r } = e,
          l = (0, t.jsx)(i.Clickable, {
            ...r,
            className: s()(null != a && o.clickable, n),
            onClick: a,
          });
        return null == a ? (0, t.jsx)(i.BlockInteractions, { children: l }) : l;
      }
    },
    91907: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return l;
        },
      });
      var t = a(735250),
        r = a(470079),
        s = a(793030),
        i = a(256139),
        o = a(866040);
      function l(e) {
        let {
            user: n,
            text: a,
            channel: l,
            textClassName: c,
            onPopoutClosed: d,
          } = e,
          u = (0, r.useMemo)(() => [n], [n]);
        return (0, t.jsx)(o.Z, {
          participants: u,
          channel: l,
          onPopoutClosed: d,
          children: (e) =>
            (0, t.jsx)(i.Z, {
              ...e,
              tag: "span",
              children: (0, t.jsx)(s.xv, {
                className: c,
                variant: "text-sm/semibold",
                color: "text-primary",
                lineClamp: 1,
                scaleFontToUserSetting: !0,
                children: a,
              }),
            }),
        });
      }
    },
    866040: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return I;
        },
      }),
        a(411104);
      var t = a(735250),
        r = a(470079),
        s = a(442837),
        i = a(481060),
        o = a(239091),
        l = a(751688),
        c = a(184301),
        d = a(347475),
        u = a(210887),
        _ = a(5192),
        E = a(684201);
      function m(e) {
        let { participants: n, channel: r } = e;
        return (0, t.jsx)(i.Scroller, {
          className: E.popout,
          children: n.map((e) =>
            (0, t.jsx)(
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
                      a.e("79695"),
                      a.e("69220"),
                      a.e("50261"),
                    ]).then(a.bind(a, 881351));
                    return (a) => (0, t.jsx)(n, { ...a, user: e });
                  });
                },
              },
              e.id,
            ),
          ),
        });
      }
      function I(e) {
        let { children: n, participants: a, channel: o, onPopoutClosed: l } = e,
          _ = (0, s.e7)([u.Z], () => u.Z.theme),
          E = 1 === a.length ? a[0] : null,
          I = (0, r.useCallback)(
            (e) => {
              if (null != E)
                return (0, t.jsx)(d.Z, {
                  ...e,
                  closePopout: () => {
                    e.closePopout(), null == l || l();
                  },
                  userId: E.id,
                  guildId: null == o ? void 0 : o.guild_id,
                  channelId: null == o ? void 0 : o.id,
                });
              if (null != a)
                return (0, t.jsx)(m, { participants: a, channel: o });
              throw Error("One of participant or participants is required");
            },
            [o, l, a, E],
          );
        return (0, t.jsx)(i.ThemeContextProvider, {
          theme: _,
          children: (0, t.jsx)(i.Popout, {
            renderPopout: I,
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
    206295: function (e, n, a) {
      a(47120);
      var t = a(470079),
        r = a(688619),
        s = a.n(r);
      a(979590);
      var i = a(442837),
        o = a(866442),
        l = a(607070),
        c = a(220082),
        d = a(981631);
      n.Z = (e) => {
        var n, r, u, _, E, m;
        let I;
        I = a(481060).tokens;
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
                          : null === (n = r.hex) || void 0 === n
                            ? void 0
                            : n.call(r)) && void 0 !== m
              ? m
              : "#000",
          );
        return t.useMemo(() => {
          let e = (0, o._i)(p),
            n = (0, o._i)(g);
          for (let n = 1; n < 8 && !((0, o.Bd)(e) >= 0.725); n++) {
            e = s()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, o.Bd)(n) >= 0.725); e++) {
            n = s()(n).darken(0.5).num();
          }
          let a = (0, o.Rf)(e);
          return { primaryColor: a, secondaryColor: (0, o.Rf)(n) };
        }, [p, g]);
      };
    },
    410441: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return i;
        },
      });
      var t = a(735250);
      a(470079);
      var r = a(481060),
        s = a(832923);
      function i(e) {
        let { onClick: n, Icon: a, "aria-label": i } = e,
          o = (0, r.useToken)(
            r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          l = (0, t.jsx)(a, {
            color: o.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == n
          ? (0, t.jsx)("div", {
              className: s.container,
              "aria-label": i,
              children: l,
            })
          : (0, t.jsx)(r.Tooltip, {
              text: i,
              children: (e) =>
                (0, t.jsx)(r.Clickable, {
                  className: s.container,
                  ...e,
                  onClick: n,
                  children: l,
                }),
            });
      }
    },
    998058: function (e, n, a) {
      a.d(n, {
        i: function () {
          return o;
        },
      });
      var t = a(544891),
        r = a(570140),
        s = a(881052),
        i = a(981631);
      let o = async (e) => {
        try {
          var n;
          let a = await t.tn.get({ url: i.ANM.SIMILAR_GAMES(e) }),
            s = (
              null !== (n = a.body.similar_games) && void 0 !== n ? n : []
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
    839392: function (e, n, a) {
      var t,
        r,
        s,
        i,
        o = a(442837),
        l = a(570140);
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
        (r = "displayName") in (t = u)
          ? Object.defineProperty(t, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[r] = s),
        (n.Z = new u(l.Z, {
          GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: n, games: a } = e;
            c[n] = a;
          },
          GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
            let { applicationId: n, error: a } = e;
            d[n] = a;
          },
        }));
    },
    96856: function (e, n, a) {
      a.d(n, {
        p: function () {
          return r;
        },
      });
      let t = (0, a(818083).B)({
        kind: "user",
        id: "2024-08_game_follow_survey",
        label: "Game Follow Fake Door Survey",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
        let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: a } = t.useExperiment(
            { location: e },
            { autoTrackExposure: n },
          );
        return a;
      }
    },
    567409: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return m;
        },
      }),
        a(47120);
      var t = a(470079),
        r = a(392711),
        s = a.n(r),
        i = a(876215),
        o = a(442837),
        l = a(146282),
        c = a(897674),
        d = a(709054),
        u = a(206583);
      let _ = new Set([i.s.PLAYED_GAME]),
        E = (e) => _.has(e.content_type);
      function m() {
        let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
          n = (0, c.Z)(u.YN.GLOBAL_FEED),
          a = t.useMemo(
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
          entries: a,
        };
      }
    },
    124030: function (e, n, a) {
      a.d(n, {
        A: function () {
          return i;
        },
        L: function () {
          return s;
        },
      });
      var t = a(433517);
      let r = "GameFollowSurveyModal";
      function s() {
        var e;
        return (
          (null === (e = t.K.get(r)) || void 0 === e
            ? void 0
            : e.hasInteractedWithSurvey) !== !0
        );
      }
      function i() {
        return t.K.set(r, { hasInteractedWithSurvey: !0 });
      }
    },
    426482: function (e, n, a) {
      a.d(n, {
        C: function () {
          return _;
        },
        Z: function () {
          return t;
        },
      }),
        a(47120);
      var t,
        r,
        s = a(735250),
        i = a(470079),
        o = a(120356),
        l = a.n(o),
        c = a(793030),
        d = a(689938),
        u = a(522840);
      function _(e) {
        var n;
        let { game: a, application: t, size: r, className: o } = e,
          [_, E] = i.useState(!1),
          m =
            null !== (n = null == t ? void 0 : t.name) && void 0 !== n
              ? n
              : a.name,
          I = null != a.firstReleaseDate ? new Date(a.firstReleaseDate) : null;
        return null == a.coverImageUrl || _
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
              src: a.coverImageUrl,
              alt: d.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: m }),
              onError: () => {
                E(!0);
              },
              onLoad: () => {
                E(!1);
              },
            });
      }
      ((r = t || (t = {}))[(r.SMALL = 0)] = "SMALL"),
        (r[(r.LARGE = 1)] = "LARGE");
    },
    383895: function (e, n, a) {
      var t = a(735250),
        r = a(470079),
        s = a(120356),
        i = a.n(s),
        o = a(442837),
        l = a(481060),
        c = a(178762),
        d = a(91140),
        u = a(297781),
        _ = a(592125),
        E = a(944486),
        m = a(594174),
        I = a(5192),
        A = a(810568),
        p = a(689938),
        g = a(501345),
        f = a(51527);
      n.Z = (e) => {
        let { entry: n, viewId: a, officialGuildId: s, onClose: T } = e,
          O = (0, o.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
          R = (0, o.e7)([m.default], () => m.default.getUser(n.author_id)),
          { nick: N, avatar: h } = r.useMemo(() => {
            let e =
              null == R
                ? void 0
                : R.getAvatarURL(null == O ? void 0 : O.guild_id, 48, !1);
            return {
              nick: I.ZP.getName(
                null == O ? void 0 : O.guild_id,
                null == O ? void 0 : O.id,
                R,
              ),
              avatar: e,
            };
          }, [R, O]);
        return null == R
          ? null
          : (0, t.jsx)(l.Popout, {
              position: "right",
              renderPopout: (e) => {
                let { closePopout: r, updatePosition: i } = e;
                return (0, t.jsx)(c.J, {
                  entry: n,
                  closePopout: r,
                  updatePopoutPosition: i,
                  onReaction: () => {
                    (0, A.UE)({
                      action: A.as.SendMessageUser,
                      applicationId: n.extra.application_id,
                      gameName: n.extra.game_name,
                      recipientUserId: n.author_id,
                      viewId: a,
                      officialGuildId: s,
                    }),
                      T(),
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
                  viewId: a,
                  officialGuildId: s,
                });
              },
              children: (e) =>
                (0, t.jsx)(l.Clickable, {
                  ...e,
                  className: g.profileEntryCard,
                  children: (0, t.jsx)(l.FocusRing, {
                    offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    children: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("img", {
                          className: g.avatar,
                          src: h,
                          alt: p.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: N },
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: i()(g.playerInfo),
                          children: (0, t.jsxs)("div", {
                            className: i()(f.column, f.gapXs),
                            children: [
                              (0, t.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                lineClamp: 1,
                                children: N,
                              }),
                              (0, t.jsx)(u.Gk, {
                                location: u.Gt.GAME_PROFILE,
                                children: d.W.map((e, a) =>
                                  (0, t.jsx)(e, { entry: n }, a),
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: g.reactions,
                          children: (0, t.jsx)(l.ArrowAngleLeftUpIcon, {
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
    644941: function (e, n, a) {
      a.r(n), a(47120);
      var t = a(735250),
        r = a(470079),
        s = a(120356),
        i = a.n(s),
        o = a(913527),
        l = a.n(o),
        c = a(705512),
        d = a(442837),
        u = a(433517),
        _ = a(481060),
        E = a(224706),
        m = a(560361),
        I = a(835473),
        A = a(168551),
        p = a(485267),
        g = a(26033),
        f = a(561308),
        T = a(669764),
        O = a(706454),
        R = a(768581),
        N = a(814225),
        h = a(709054),
        P = a(810568),
        C = a(998058),
        L = a(839392),
        M = a(96856),
        S = a(567409),
        x = a(774073),
        v = a(124030),
        G = a(426482),
        Z = a(715318),
        b = a(38516),
        j = a(891949),
        D = a(252547),
        y = a(484527),
        w = a(131033),
        k = a(296768),
        U = a(978313),
        F = a(206583),
        K = a(689938),
        H = a(51527);
      let B = "GameProfileModal",
        Q = () =>
          (0, t.jsxs)("div", {
            className: H.gameBadge,
            children: [
              (0, t.jsx)(_.FireIcon, { size: "xxs" }),
              (0, t.jsx)(_.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: K.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          });
      function Y(e) {
        var n;
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
          p = (0, M.p)("GameProfileModal"),
          g = r.useMemo(
            () => (null == s ? void 0 : s.genres.map(N.P3).join(", ")),
            [s],
          ),
          T = r.useMemo(() => {
            if (null == s) return "";
            let { artwork: e, screenshots: n } = s;
            if (e.length > 0) {
              let n = Math.floor(Math.random() * (e.length - 1));
              return e[n];
            }
            if (n.length > 0) {
              let e = Math.floor(Math.random() * (n.length - 1));
              return n[e];
            }
            return "";
          }, [s]),
          O = null == o ? void 0 : o.getIconURL(160, R.$k ? "webp" : "png"),
          C = h.default.extractTimestamp(o.id),
          L = l()().diff(l()(C), "days") <= F.G,
          S = d.some((e) => (0, f.ig)(e) === c.o.GLOBAL),
          x =
            null !== (n = s.name) && void 0 !== n
              ? n
              : null == o
                ? void 0
                : o.name,
          b = r.useCallback(
            () => () => {
              var e;
              let n = null !== (e = u.K.get(B)) && void 0 !== e ? e : {};
              (n[o.id] = !n[o.id]),
                u.K.set(B, n),
                m(n[o.id] ? P.as.FollowGame : P.as.UnfollowGame),
                n[o.id] &&
                  (0, v.L)() &&
                  (0, _.openModalLazy)(async () => {
                    let { default: e } = await a
                      .e("86564")
                      .then(a.bind(a, 641758));
                    return (n) =>
                      (0, t.jsx)(e, {
                        ...n,
                        applicationId: o.id,
                        background: T,
                        viewId: E,
                      });
                  }),
                A(n[o.id]);
            },
            [o.id, T, m, E],
          );
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: i()(H.gameArtHero),
              style: { backgroundImage: 'url("'.concat(T, '")') },
            }),
            (0, t.jsxs)("div", {
              className: i()(H.content, H.column, H.gapLg, H.headerInfo),
              children: [
                (0, t.jsxs)("div", {
                  className: H.coverArtRow,
                  children: [
                    (0, t.jsx)("div", {
                      className: H.logoWrapper,
                      children: (0, t.jsx)(G.C, {
                        game: s,
                        application: o,
                        className: H.logo,
                        size: G.Z.LARGE,
                      }),
                    }),
                    (0, t.jsx)(Z.Z, {
                      applicationId: o.id,
                      viewId: E,
                      className: H.overflowMenu,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: i()(H.row, H.gapSm, H.gameDetails),
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)(_.Heading, {
                          variant: "heading-xl/bold",
                          children: x,
                        }),
                        (0, t.jsxs)("div", {
                          className: i()(H.row, H.gapSm),
                          children: [
                            null != O &&
                              (0, t.jsx)("img", {
                                className: H.gameIcon,
                                src: O,
                                height: 16,
                                alt: K.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                  { game: x },
                                ),
                              }),
                            (0, t.jsx)(_.Text, {
                              variant: "text-sm/semibold",
                              color: "text-muted",
                              children: g,
                            }),
                            L &&
                              (0, t.jsx)(_.Text, {
                                variant: "eyebrow",
                                className: H.newBadge,
                                children: K.Z.Messages.NEW,
                              }),
                            S &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(_.Text, {
                                    variant: "text-sm/medium",
                                    children: " \xb7 ",
                                  }),
                                  (0, t.jsx)(Q, {}),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      children:
                        p &&
                        (0, t.jsx)(_.Tooltip, {
                          text: I
                            ? K.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                            : K.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                          children: (e) =>
                            (0, t.jsxs)(_.Button, {
                              ...e,
                              innerClassName: H.followButton,
                              color: I
                                ? _.Button.Colors.PRIMARY
                                : _.Button.Colors.BRAND,
                              onClick: b,
                              children: [
                                I
                                  ? (0, t.jsx)(_.BellSlashIcon, {
                                      color: "white",
                                    })
                                  : (0, t.jsx)(_.BellIcon, { color: "white" }),
                                I
                                  ? K.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME
                                  : K.Z.Messages.FOLLOW,
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
      function W(e) {
        var n;
        let {
          detectedGame: a,
          application: r,
          entries: s,
          officialGuildInvite: i,
          similarGames: o,
          similarGamesError: l,
          onClose: c,
          viewId: d,
          trackAction: u,
        } = e;
        return (0, t.jsxs)("div", {
          className: H.sections,
          children: [
            (0, t.jsx)(D.Z, {
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
            (0, t.jsx)(j.Z, { detectedGame: a, trackAction: u }),
            (0, t.jsx)(k.Z, {
              applicationId: r.id,
              onClose: c,
              trackAction: u,
              similarGames: o,
              similarGamesError: l,
            }),
          ],
        });
      }
      function z(e) {
        let { detectedGame: n, setOfficialGuildInvite: a, trackAction: r } = e;
        return (0, t.jsxs)("div", {
          className: i()(H.sidebar, H.column, H.gapLg),
          children: [
            (0, t.jsx)(_.Heading, {
              variant: "heading-md/bold",
              children: K.Z.Messages.ABOUT,
            }),
            (0, t.jsxs)("div", {
              className: H.sections,
              children: [
                (0, t.jsx)(U.Z, { detectedGame: n, trackAction: r }),
                (0, t.jsx)(y.Z, {
                  detectedGame: n,
                  trackClick: r,
                  onInviteResolved: a,
                }),
                (0, t.jsx)(b.Z, { detectedGame: n, trackClick: r }),
                (0, t.jsx)(w.Z, { detectedGame: n }),
              ],
            }),
          ],
        });
      }
      let V = (e) => e.filter(x.z6).slice(0, 5);
      n.default = (e) => {
        var n;
        let {
            applicationId: a,
            source: s,
            sourceUserId: o,
            transitionState: l,
            onClose: c,
          } = e,
          { clientThemesClassName: u } = (0, A.ZP)(),
          R = (0, d.e7)([O.default], () => O.default.locale),
          N = r.useMemo(() => (0, P.fP)(), []),
          h = (0, d.Wu)([L.Z], () => {
            var e;
            return (
              null !== (e = L.Z.getSimilarGames(a)) && void 0 !== e ? e : []
            ).slice(0, 25);
          }),
          [M, x] = r.useState(null),
          { entries: v } = (0, S.Z)(),
          G = r.useMemo(() => {
            var e;
            return null !==
              (e =
                null == v
                  ? void 0
                  : v.filter(
                      (e) => (0, g.dX)(e) && e.extra.application_id === a,
                    )) && void 0 !== e
              ? e
              : [];
          }, [v, a]),
          [Z, b] = r.useState(null),
          j = (0, I.q)(a),
          D = (0, d.e7)([T.Z], () => T.Z.getGame(a)),
          y =
            null !== (n = null == D ? void 0 : D.name) && void 0 !== n
              ? n
              : null == j
                ? void 0
                : j.name,
          w = (e, n) => {
            var t;
            (0, P.UE)({
              gameName: null != y ? y : "",
              applicationId: a,
              action: e,
              similarGameId: n,
              viewId: N,
              officialGuildId:
                null == Z
                  ? void 0
                  : null === (t = Z.guild) || void 0 === t
                    ? void 0
                    : t.id,
            });
          };
        return (r.useEffect(() => {
          (0, P.IS)({
            source: s,
            viewId: N,
            applicationId: a,
            gameName: null != y ? y : "",
            authorId: o,
          });
        }, []),
        r.useEffect(() => {
          (0, p.Jn)();
        }, []),
        (0, I.Z)(h),
        r.useEffect(() => {
          !R.startsWith("en") &&
            (null == D ? void 0 : D.summaryLocalized) == null &&
            E.Z.getDetectableGamesSupplemental([a], { forceFetch: !0 });
        }, [a, null == D ? void 0 : D.summaryLocalized, R]),
        r.useEffect(() => {
          (async () => {
            if (0 === h.length) {
              x(null);
              try {
                await (0, C.i)(a);
              } catch (e) {
                x(e);
              }
            }
          })();
        }, [a, h]),
        (0, m.Z)(() => {
          var e;
          let n = Date.now(),
            t = G.map((e) => {
              let a = (0, f.kr)(e) ? (0, f.T_)(e, n) : (0, f.GL)(e, R);
              return JSON.stringify({
                item_id: e.id,
                trait: e.traits,
                time_played: a,
              });
            });
          (0, P.wz)({
            viewId: N,
            applicationId: a,
            gameName: null != y ? y : "",
            playedFriendIds: G.map((e) => e.author_id),
            playedFriendsData: t,
            similarGames: V(h),
            officialGuildId:
              null == Z
                ? void 0
                : null === (e = Z.guild) || void 0 === e
                  ? void 0
                  : e.id,
          });
        }),
        null == D || null == j)
          ? null
          : (0, t.jsx)(_.ModalRoot, {
              transitionState: l,
              size: _.ModalSize.DYNAMIC,
              className: i()(u, H.gameProfileModal),
              children: (0, t.jsxs)(_.Scroller, {
                orientation: "auto",
                children: [
                  (0, t.jsx)(Y, {
                    detectedGame: D,
                    application: j,
                    entries: G,
                    viewId: N,
                    trackAction: w,
                  }),
                  (0, t.jsx)(_.HeadingLevel, {
                    children: (0, t.jsxs)("div", {
                      className: i()(H.content, H.mainContent),
                      children: [
                        (0, t.jsx)(W, {
                          detectedGame: D,
                          application: j,
                          entries: G,
                          officialGuildInvite: Z,
                          similarGames: h,
                          similarGamesError: M,
                          onClose: c,
                          viewId: N,
                          trackAction: w,
                        }),
                        (0, t.jsx)(z, {
                          detectedGame: D,
                          setOfficialGuildInvite: b,
                          trackAction: w,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
      };
    },
    715318: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = a(735250);
      a(470079);
      var r = a(481060),
        s = a(239091),
        i = a(299206),
        o = a(858042),
        l = a(689938);
      function c(e) {
        let { applicationId: n, className: a, viewId: c } = e,
          d = (0, i.Z)({ id: n, label: l.Z.Messages.COPY_ID_APPLICATION }),
          u = (0, o.M)({ applicationId: n, viewId: c });
        return null == d && null == u
          ? null
          : (0, t.jsx)(r.Popout, {
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, t.jsx)(r.Menu, {
                  navId: "game-profile-context",
                  onClose: () => {
                    (0, s.Zy)(), n();
                  },
                  "aria-label": l.Z.Messages.GAME_PROFILE_VIEW_MORE,
                  onSelect: () => {},
                  children: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(r.MenuGroup, { children: d }),
                      (0, t.jsx)(r.MenuGroup, { children: u }),
                    ],
                  }),
                });
              },
              children: (e) =>
                (0, t.jsx)(r.Tooltip, {
                  text: l.Z.Messages.MORE,
                  children: (n) =>
                    (0, t.jsx)(r.Clickable, {
                      className: a,
                      ...n,
                      ...e,
                      children: (0, t.jsx)(r.MoreHorizontalIcon, {
                        size: "xs",
                        color: r.tokens.colors.WHITE,
                      }),
                    }),
                }),
            });
      }
    },
    38516: function (e, n, a) {
      a(411104);
      var t = a(735250);
      a(470079);
      var r = a(120356),
        s = a.n(r),
        i = a(643872),
        o = a(481060),
        l = a(810568),
        c = a(689938),
        d = a(51527),
        u = a(825718);
      let _ = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE];
      function E(e) {
        let { website: n, trackClick: a } = e,
          {
            action: r,
            icon: s,
            title: d,
          } = (function (e) {
            switch (e.category) {
              case i.p.OFFICIAL:
                return {
                  icon: (0, t.jsx)(o.GlobeEarthIcon, {
                    colorClass: u.linkIcon,
                  }),
                  action: l.as.WebsiteLink,
                  title: c.Z.Messages.GAME_PROFILE_LINK_OFFICIAL,
                };
              case i.p.TWITTER:
                return {
                  icon: (0, t.jsx)(o.XNeutralIcon, { colorClass: u.linkIcon }),
                  action: l.as.XLink,
                  title: c.Z.Messages.GAME_PROFILE_LINK_TWITTER,
                };
              case i.p.YOUTUBE:
                return {
                  action: l.as.YouTubeLink,
                  icon: (0, t.jsx)(o.YoutubeNeutralIcon, {
                    colorClass: u.linkIcon,
                  }),
                  title: c.Z.Messages.GAME_PROFILE_LINK_YOUTUBE,
                };
              default:
                throw Error("Unknown IGDB website category");
            }
          })(n);
        return (0, t.jsx)(o.Tooltip, {
          text: n.url,
          children: (e) => {
            let { onClick: i, ...l } = e;
            return (0, t.jsx)(o.Anchor, {
              ...l,
              className: u.linkAnchor,
              title: d,
              href: n.url,
              onClick: () => {
                a(r), null == i || i();
              },
              target: "_blank",
              children: s,
            });
          },
        });
      }
      n.Z = function (e) {
        let { detectedGame: n, trackClick: a } = e;
        if (null == n.websites) return null;
        let r = n.websites
          .filter((e) => {
            let { category: n } = e;
            return _.includes(n);
          })
          .sort((e, n) => e.category - n.category);
        return 0 === r.length
          ? null
          : (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(o.Heading, {
                  className: d.sectionHeader,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: c.Z.Messages.GAME_PROFILE_LINKS,
                }),
                (0, t.jsx)("div", {
                  className: s()(d.row, d.gapMd),
                  children: r.map((e) =>
                    (0, t.jsx)(E, { website: e, trackClick: a }, e.url),
                  ),
                }),
              ],
            });
      };
    },
    891949: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return _;
        },
      }),
        a(47120);
      var t = a(735250),
        r = a(470079),
        s = a(481060),
        i = a(341176),
        o = a(810568),
        l = a(701865),
        c = a(689938),
        d = a(51527),
        u = a(133512);
      function _(e) {
        let { detectedGame: n, trackAction: _ } = e,
          E = r.useRef(null),
          m = r.useMemo(() => {
            let e = n.artwork.map((e) => ({ url: e, type: "IMAGE" }));
            return [
              ...n.screenshots.map((e) => ({ url: e, type: "IMAGE" })),
              ...e,
            ];
          }, [n.artwork, n.screenshots]),
          I = m.length > 2;
        function A(e) {
          if (null == E.current) return;
          let n = E.current.getScrollerState().scrollLeft;
          E.current.scrollTo({ to: n + 280 * e, animate: !0 });
        }
        return 0 === m.length
          ? null
          : (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(s.Heading, {
                  className: d.sectionHeader,
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: c.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                }),
                (0, t.jsxs)("div", {
                  className: I
                    ? u.gameProfileMediaSmall
                    : u.gameProfileMediaLarge,
                  children: [
                    (0, t.jsx)(s.AdvancedScrollerNone, {
                      ref: E,
                      className: u.imageScroller,
                      orientation: "horizontal",
                      children: m.map((e, n) =>
                        (0, t.jsx)(
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
                                        a.bind(a, 950120),
                                      );
                                    return (a) =>
                                      (0, t.jsx)(e, {
                                        className: u.mediaModal,
                                        ...a,
                                        items: m,
                                        fit: i.D.SCALE_DOWN,
                                        startingIndex: n,
                                        shouldHideMediaOptions: !0,
                                        shouldAnimateCarousel: !0,
                                      });
                                  },
                                  { modalKey: l.U },
                                );
                            },
                            children: (0, t.jsx)("img", {
                              src: e.url,
                              className: u.gameArtwork,
                              alt: c.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                { game: name },
                              ),
                            }),
                          },
                          n,
                        ),
                      ),
                    }),
                    I &&
                      (0, t.jsxs)("div", {
                        className: u.mediaOverlay,
                        children: [
                          (0, t.jsx)("div", { className: u.gradientLeft }),
                          (0, t.jsx)(s.Clickable, {
                            className: u.arrowClickable,
                            onClick: () => A(-1),
                            children: (0, t.jsx)(s.ArrowSmallLeftIcon, {
                              className: u.arrow,
                              color: "currentColor",
                            }),
                          }),
                          (0, t.jsx)("div", { className: u.gradientRight }),
                          (0, t.jsx)(s.Clickable, {
                            className: u.arrowClickable,
                            onClick: () => A(1),
                            children: (0, t.jsx)(s.ArrowSmallRightIcon, {
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
    252547: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return E;
        },
      }),
        a(47120);
      var t = a(735250),
        r = a(470079),
        s = a(120356),
        i = a.n(s),
        o = a(793030),
        l = a(481060),
        c = a(383895),
        d = a(689938),
        u = a(51527),
        _ = a(268236);
      function E(e) {
        let { entries: n, viewId: a, officialGuildId: s, onClose: E } = e,
          m = n.length > 7,
          [I, A] = r.useState(!1),
          p = r.useMemo(() => n.slice(0, m && !I ? 6 : void 0), [n, m, I]);
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsx)(o.X6, {
              className: u.sectionHeader,
              variant: "text-md/semibold",
              color: "header-primary",
              children: d.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
            }),
            0 === n.length
              ? (0, t.jsx)(o.xv, {
                  variant: "text-xs/semibold",
                  color: "text-primary",
                  className: _.emptyState,
                  children: d.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      className: i()(_.friends, { [_.fadedEntries]: m && !I }),
                      children: (0, t.jsx)("div", {
                        className: u.column,
                        children: p.map((e) =>
                          (0, t.jsx)(
                            c.Z,
                            {
                              entry: e,
                              viewId: a,
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
                      (0, t.jsxs)(l.Clickable, {
                        className: _.expandEntriesButton,
                        onClick: () => A(!0),
                        children: [
                          (0, t.jsx)(o.xv, {
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: d.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES,
                          }),
                          (0, t.jsx)(l.ChevronSmallDownIcon, { size: "xs" }),
                        ],
                      }),
                  ],
                }),
          ],
        });
      }
    },
    484527: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return f;
        },
      }),
        a(47120);
      var t = a(735250),
        r = a(470079),
        s = a(120356),
        i = a.n(s),
        o = a(643872),
        l = a(442837),
        c = a(481060),
        d = a(570140),
        u = a(652898),
        _ = a(93093),
        E = a(768581),
        m = a(810568),
        I = a(981631),
        A = a(689938),
        p = a(51527),
        g = a(479537);
      function f(e) {
        let { detectedGame: n, trackClick: a, onInviteResolved: s } = e,
          [f, T] = r.useState(),
          O = (0, l.e7)([_.Z], () => {
            var e, n;
            return (
              (null == f
                ? void 0
                : null === (e = f.guild) || void 0 === e
                  ? void 0
                  : e.id) != null &&
              _.Z.isMember(
                null == f
                  ? void 0
                  : null === (n = f.guild) || void 0 === n
                    ? void 0
                    : n.id,
              )
            );
          }),
          R = r.useMemo(() => {
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
                  (T(e.invite), null != e.invite && (null == s || s(e.invite)));
              }
            };
            null != R && e(R.url);
          }, [R, s]),
          null == f ||
            null == f.guild ||
            (!f.guild.features.includes("VERIFIED") &&
              !f.guild.features.includes("PARTNER")))
        )
          return null;
        let N = E.ZP.getGuildIconURL({
          id: f.guild.id,
          icon: f.guild.icon,
          size: 32,
        });
        return (0, t.jsxs)("div", {
          className: p.column,
          children: [
            (0, t.jsx)(c.Heading, {
              className: p.sectionHeader,
              variant: "text-xs/semibold",
              color: "header-secondary",
              children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD,
            }),
            (0, t.jsxs)("div", {
              className: i()(p.row, p.gapMd),
              children: [
                (0, t.jsx)("img", {
                  className: g.guildIcon,
                  src: N,
                  alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
                    guildName: f.guild.name,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: g.inviteInfo,
                  children: [
                    (0, t.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      children: f.guild.name,
                    }),
                    null != f.approximate_member_count &&
                      (0, t.jsx)(c.Text, {
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
            (0, t.jsx)(c.Button, {
              color: c.ButtonColors.PRIMARY,
              onClick: () => {
                a(m.as.JoinOfficialServer),
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
    221370: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return I;
        },
      }),
        a(47120),
        a(653041);
      var t = a(735250),
        r = a(470079),
        s = a(120356),
        i = a.n(s),
        o = a(758713),
        l = a(657707),
        c = a(481060),
        d = a(689938),
        u = a(51527);
      let _ = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
      function E(e) {
        let { platform: n, ...a } = e;
        switch (n) {
          case o.z.DESKTOP:
            return (0, t.jsx)(l.pzj, { size: "xs", ...a });
          case o.z.XBOX:
            return (0, t.jsx)(l.Mko, { size: "xs", ...a });
          case o.z.PLAYSTATION:
            return (0, t.jsx)(l.Tsp, { size: "xs", ...a });
          case o.z.NINTENDO:
            return (0, t.jsx)(l.aPH, { size: "xs", ...a });
          default:
            return null;
        }
      }
      function m(e) {
        let { platforms: n } = e;
        return (0, t.jsx)("div", {
          className: i()(u.row, u.gapSm),
          style: { alignItems: "center" },
          children: n.map((e) =>
            (0, t.jsx)(
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
                children: (n) => (0, t.jsx)(E, { ...n, platform: e }),
              },
              e,
            ),
          ),
        });
      }
      function I(e) {
        let { detectedGame: n, className: a } = e,
          s = r.useMemo(() => {
            let e = new Set(n.platforms),
              a = [...e];
            return (
              !e.has(o.z.DESKTOP) &&
                (e.has(o.z.MACOS) || e.has(o.z.LINUX)) &&
                a.push(o.z.DESKTOP),
              a.filter((e) => _.includes(e))
            );
          }, [n.platforms]);
        return 0 === s.length
          ? null
          : (0, t.jsx)("div", {
              className: i()(u.column, u.gapLg, a),
              children: s.length > 0 && (0, t.jsx)(m, { platforms: s }),
            });
      }
    },
    131033: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = a(735250);
      a(470079);
      var r = a(793030),
        s = a(689938),
        i = a(51527);
      function o(e) {
        let { detectedGame: n } = e;
        return 0 === n.publishers.length
          ? null
          : (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(r.X6, {
                  className: i.sectionHeader,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: s.Z.Messages.GAME_PROFILE_PUBLISHER,
                }),
                (0, t.jsx)(r.xv, {
                  variant: "text-sm/normal",
                  children: n.publishers.join(", "),
                }),
              ],
            });
      }
    },
    296768: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return N;
        },
      }),
        a(47120);
      var t = a(735250),
        r = a(470079),
        s = a(120356),
        i = a.n(s),
        o = a(392711),
        l = a.n(o),
        c = a(442837),
        d = a(481060),
        u = a(224706),
        _ = a(812206),
        E = a(669764),
        m = a(810568),
        I = a(839392),
        A = a(774073),
        p = a(426482),
        g = a(644941),
        f = a(689938),
        T = a(51527),
        O = a(796805);
      let R = (e) => {
        let { game: n, onClose: a, trackClick: r } = e,
          s = (0, c.e7)([_.Z], () => _.Z.getApplication(n.applicationId));
        return (0, t.jsx)(d.Tooltip, {
          text: n.name,
          children: (e) =>
            (0, t.jsx)(d.Clickable, {
              ...e,
              className: O.similarGameImageClickable,
              onClick: async () => {
                r(m.as.ClickSimilarGame, n.applicationId),
                  (0, d.openModalLazy)(() =>
                    Promise.resolve((e) =>
                      (0, t.jsx)(g.default, {
                        applicationId: n.applicationId,
                        source: m.m1.SimilarGames,
                        ...e,
                      }),
                    ),
                  ),
                  await new Promise((e) => setTimeout(e, 10)),
                  a();
              },
              children: (0, t.jsx)(p.C, {
                game: n,
                application: s,
                className: O.similarGameImage,
                size: p.Z.SMALL,
              }),
            }),
        });
      };
      function N(e) {
        let {
            applicationId: n,
            onClose: a,
            trackAction: s,
            similarGames: o,
            similarGamesError: _,
          } = e,
          m = (0, c.e7)([I.Z, E.Z], () => {
            let e =
                void 0 === I.Z.getSimilarGames(n) &&
                null == I.Z.getSimilarGamesError(n),
              a = o.some((e) => E.Z.isFetching(e));
            return e || a;
          }),
          p = (0, c.Wu)([E.Z], () =>
            o
              .map((e) => E.Z.getGame(e))
              .filter((e) => null != e)
              .filter((e) => (0, A.z6)(e.applicationId))
              .slice(0, 5),
          );
        return (r.useEffect(() => {
          o.length > 0 && u.Z.getDetectableGamesSupplemental([n, ...o]);
        }, [n, o]),
        m && null == _)
          ? (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("div", {
                  className: i()(O.loadingHeading, T.sectionHeader),
                }),
                (0, t.jsx)("div", {
                  className: i()(T.row, T.gapLg),
                  children: l()
                    .range(0, 5)
                    .map((e) =>
                      (0, t.jsx)("div", { className: O.loadingArtwork }, e),
                    ),
                }),
              ],
            })
          : m || 0 !== p.length
            ? (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(d.Heading, {
                    className: T.sectionHeader,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: f.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                  }),
                  (0, t.jsx)("div", {
                    className: O.similarGames,
                    style: {},
                    children: p.map((e) =>
                      (0, t.jsx)(
                        R,
                        { game: e, onClose: a, trackClick: s },
                        e.applicationId,
                      ),
                    ),
                  }),
                ],
              })
            : null;
      }
    },
    978313: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return p;
        },
      }),
        a(47120);
      var t = a(735250),
        r = a(470079),
        s = a(120356),
        i = a.n(s),
        o = a(657707),
        l = a(793030),
        c = a(692547),
        d = a(481060),
        u = a(885006),
        _ = a(810568),
        E = a(221370),
        m = a(689938),
        I = a(51527),
        A = a(110367);
      function p(e) {
        let { detectedGame: n, trackAction: a } = e,
          [s, p] = r.useState(
            (null == n ? void 0 : n.summaryLocalized) != null,
          ),
          [g, f] = r.useState(!0),
          [T, O] = r.useState(!1),
          R = r.useRef(null),
          { width: N, height: h } = (0, u.Z)();
        return (r.useEffect(() => {
          let e = R.current;
          null != e && O(e.scrollHeight - e.clientHeight > 1 || !g);
        }, [R, N, h, g]),
        null == n.summary)
          ? null
          : (0, t.jsxs)("div", {
              className: i()(I.column, I.gapMd),
              children: [
                null != n.summaryLocalized &&
                  (0, t.jsxs)("div", {
                    className: i()(I.row, I.gapSm),
                    children: [
                      (0, t.jsx)(o.SxY, {
                        color: c.Z.colors.HEADER_SECONDARY,
                        size: "xs",
                      }),
                      (0, t.jsx)(l.xv, {
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
                (0, t.jsx)(l.xv, {
                  ref: R,
                  lineClamp: g ? 8 : void 0,
                  variant: "text-sm/normal",
                  children: s ? n.summaryLocalized : n.summary,
                }),
                T &&
                  (0, t.jsx)(d.Clickable, {
                    className: I.clickable,
                    onClick: () => {
                      a(g ? _.as.ShowMore : _.as.ShowLess), f(!g);
                    },
                    children: (0, t.jsx)(l.xv, {
                      variant: "text-sm/semibold",
                      children: g
                        ? m.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE
                        : m.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS,
                    }),
                  }),
                (0, t.jsx)(E.Z, { className: A.platforms, detectedGame: n }),
              ],
            });
      }
    },
    931651: function (e, n, a) {
      a.d(n, {
        $: function () {
          return i;
        },
      });
      var t = a(735250);
      a(470079);
      var r = a(907040),
        s = a(185923);
      function i(e) {
        let {
          channel: n,
          closePopout: a,
          analyticsOverride: i,
          onSelectEmoji: o,
          messageId: l,
        } = e;
        return (0, t.jsx)(r.Z, {
          closePopout: a,
          channel: n,
          onSelectEmoji: o,
          pickerIntention: s.Hz.REACTION,
          analyticsOverride: i,
          messageId: l,
        });
      }
    },
    885006: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return r;
        },
      }),
        a(47120);
      var t = a(470079);
      function r() {
        var e, n;
        let [a, r] = t.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (n = window.innerHeight) && void 0 !== n ? n : 1080,
        });
        return (
          t.useLayoutEffect(() => {
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
          a
        );
      }
    },
    424678: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return l;
        },
      }),
        a(47120);
      var t = a(735250),
        r = a(470079),
        s = a(481060);
      function i(e, n, a) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = a),
          e
        );
      }
      class o extends r.PureComponent {
        render() {
          let { text: e, lastItem: n, className: a } = this.props;
          return (0, t.jsxs)("span", {
            children: [
              (0, t.jsx)(s.Anchor, {
                className: a,
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
          return e.map((e, a) =>
            (0, t.jsx)(
              o,
              {
                text: e,
                index: a,
                lastItem: a === n,
                onClick: this.handleOpenSpotifyArtist,
                className: this.props.linkClassName,
              },
              "spotify-artist-".concat(a),
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
    237583: function (e, n, a) {
      a(653041), a(47120);
      var t,
        r = a(735250),
        s = a(470079),
        i = a(120356),
        o = a.n(i),
        l = a(481060),
        c = a(598077),
        d = a(908860),
        u = a(579861);
      function _(e, n, a) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = a),
          e
        );
      }
      class E extends (t = s.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: n,
              renderUser: a = this.defaultRenderUser,
              renderMoreUsers: t,
            } = this.props,
            r = [],
            s = e.length === n ? e.length : n - 1,
            i = 0;
          for (; i < s && i < e.length; ) {
            let n = i === e.length - 1;
            r.push(
              a(e[i] || null, n ? null : d.avatarMasked, "user-".concat(i), n),
            ),
              i++;
          }
          if (i < e.length) {
            let n = Math.min(e.length - i, 99);
            r.push(t("+".concat(n), d.moreUsers, "more-users", n));
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
            _(this, "defaultRenderUser", (e, n, a, t) => {
              let { onClick: s, size: i, guildId: _ } = this.props,
                E = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == E
                ? (0, r.jsx)("div", { className: o()(d.emptyUser, n) }, a)
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
        renderMoreUsers: function (e, n, a) {
          return (0, r.jsx)("div", { className: n, children: e }, a);
        },
        size: l.AvatarSizes.SIZE_24,
      }),
        (n.Z = E);
    },
    908841: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = a(735250);
      a(470079);
      var r = a(325767);
      function s(e) {
        let {
          width: n = 20,
          height: a = 20,
          color: s = "currentColor",
          ...i
        } = e;
        return (0, t.jsx)("svg", {
          ...(0, r.Z)(i),
          width: n,
          height: a,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, t.jsx)("path", {
            d: "M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM14.5625 14.4375C14.3791 14.7161 14.0145 14.8107 13.7188 14.6562C11.375 13.2188 8.40625 12.9062 4.9375 13.6875C4.71979 13.7377 4.49182 13.668 4.33945 13.5046C4.18709 13.3412 4.13348 13.1089 4.19883 12.8952C4.26417 12.6816 4.43854 12.519 4.65625 12.4688C8.46875 11.5938 11.7188 11.9688 14.375 13.5938C14.5149 13.6781 14.6141 13.816 14.6495 13.9755C14.685 14.1349 14.6535 14.3019 14.5625 14.4375ZM15.8125 11.6875C15.7053 11.8622 15.5328 11.9869 15.3333 12.0338C15.1338 12.0807 14.9238 12.0461 14.75 11.9375C12.0625 10.2812 7.96875 9.8125 4.78125 10.7812C4.5133 10.8594 4.22401 10.7887 4.02236 10.5957C3.8207 10.4027 3.73731 10.1168 3.80361 9.84569C3.8699 9.57457 4.0758 9.3594 4.34375 9.28125C7.96875 8.1875 12.5 8.71875 15.5625 10.625C15.9134 10.8575 16.0229 11.3229 15.8125 11.6875ZM15.9062 8.875C12.6875 6.96875 7.375 6.78125 4.28125 7.71875C3.81691 7.79284 3.36952 7.5115 3.23513 7.0609C3.10074 6.61031 3.32093 6.12986 3.75 5.9375C7.28125 4.875 13.1562 5.0625 16.875 7.28125C17.0893 7.40709 17.2434 7.61436 17.3023 7.85577C17.3612 8.09717 17.3198 8.35214 17.1875 8.5625C16.9054 8.98221 16.3499 9.1177 15.9062 8.875Z",
            fill: s,
          }),
        });
      }
    },
    814225: function (e, n, a) {
      a.d(n, {
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
        a(757143),
        a(47120);
      var t = a(913527),
        r = a.n(t);
      if (12633 == a.j) var s = a(266067);
      a(358085), a(73346);
      var i = a(981631),
        o = a(689938);
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
          a = d[e];
        (l[n] = a), (c[a] = n);
      });
      let E = [
        ["YYYY-MM-DD", "MMMM DD, Y"],
        ["YYYY-MM", "MMMM Y"],
        ["MM-DD", "MMMM DD"],
        ["MM", "MMMM"],
        ["YYYY", "Y"],
      ];
      function m(e) {
        let { preorderReleaseAt: n, preorderApproximateReleaseDate: a } = e;
        if (null != n) return n.format("MMMM DD");
        if (null == a) return null;
        for (let e = 0; e < E.length; e++) {
          let [n, t] = E[e],
            s = r()(a, n, !0);
          if (s.isValid()) return s.format(t);
        }
        return a;
      }
    },
    643872: function (e, n, a) {
      var t, r;
      a.d(n, {
        p: function () {
          return t;
        },
      }),
        ((r = t || (t = {}))[(r.OFFICIAL = 1)] = "OFFICIAL"),
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
    968333: function (e, n, a) {
      e.exports = { button: "button_c6eb7b", buttonSize: "buttonSize_c6eb7b" };
    },
    793834: function (e, n, a) {
      e.exports = {
        reactions: "reactions_d0fc0d",
        reply: "reply_d0fc0d",
        replyHeader: "replyHeader_d0fc0d",
        replyInput: "replyInput_d0fc0d",
        emojiButton: "emojiButton_d0fc0d",
        reaction: "reaction_d0fc0d",
      };
    },
    615934: function (e, n, a) {
      e.exports = { clickable: "clickable_bffa11" };
    },
    684201: function (e, n, a) {
      e.exports = { popout: "popout_e40224" };
    },
    290500: function (e, n, a) {
      e.exports = {
        listeningTimeline: "listeningTimeline_a218d8",
        seekBarContainer: "seekBarContainer_a218d8",
        seekBarFill: "seekBarFill_a218d8",
        timestamp: "timestamp_a218d8",
      };
    },
    765388: function (e, n, a) {
      e.exports = {
        coachtip: "coachtip_e8254e",
        coachtipContent: "coachtipContent_e8254e",
        coachtipInner: "coachtipInner_e8254e",
        coachtipAsset: "coachtipAsset_e8254e",
        coachtipTextContainer: "coachtipTextContainer_e8254e",
      };
    },
    738127: function (e, n, a) {
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
    301698: function (e, n, a) {
      e.exports = { menuIcon: "menuIcon_aa0ae7" };
    },
    704108: function (e, n, a) {
      e.exports = { loadingSpinner: "loadingSpinner_f2635d" };
    },
    832923: function (e, n, a) {
      e.exports = { container: "container_b11148" };
    },
    522840: function (e, n, a) {
      e.exports = { fallback: "fallback_fad32c", spacer: "spacer_fad32c" };
    },
    501345: function (e, n, a) {
      e.exports = {
        profileEntryCard: "profileEntryCard_f1257c",
        reactions: "reactions_f1257c",
        avatar: "avatar_f1257c",
        playerInfo: "playerInfo_f1257c",
      };
    },
    51527: function (e, n, a) {
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
    825718: function (e, n, a) {
      e.exports = {
        linkIcon: "linkIcon_bb1ae6",
        linkAnchor: "linkAnchor_bb1ae6",
      };
    },
    133512: function (e, n, a) {
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
    268236: function (e, n, a) {
      e.exports = {
        friends: "friends_d8cab0",
        emptyState: "emptyState_d8cab0 friends_d8cab0",
        fadedEntries: "fadedEntries_d8cab0",
        expandEntriesButton: "expandEntriesButton_d8cab0",
      };
    },
    479537: function (e, n, a) {
      e.exports = {
        inviteInfo: "inviteInfo_c2c033",
        guildIcon: "guildIcon_c2c033",
      };
    },
    796805: function (e, n, a) {
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
    110367: function (e, n, a) {
      e.exports = { platforms: "platforms_a8723c" };
    },
    445524: function (e, n, a) {
      e.exports = {
        image: "image_ed81cc",
        emptyPreviewContainer: "emptyPreviewContainer_ed81cc",
        emptyPreviewImage: "emptyPreviewImage_ed81cc",
        emptyPreviewText: "emptyPreviewText_ed81cc",
      };
    },
    835777: function (e, n, a) {
      e.exports = {
        gameTitle: "gameTitle_cf6db7",
        gameTitleContainer: "gameTitleContainer_cf6db7",
        emptyStateImage: "emptyStateImage_cf6db7",
      };
    },
    211494: function (e, n, a) {
      e.exports = {
        innerContainer: "innerContainer_f62934",
        rankText: "rankText_f62934",
      };
    },
    416405: function (e, n, a) {
      e.exports = { container: "container_c5a4ce", border: "border_c5a4ce" };
    },
    264699: function (e, n, a) {
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
    908860: function (e, n, a) {
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
    579861: function (e, n, a) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=cfa252bf6c6ad09e1de1.js.map
