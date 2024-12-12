(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50470"],
  {
    544140: function (e, t, n) {
      var r = n(796581),
        i = n(149912);
      e.exports = function e(t, n, l, a, o) {
        var u = -1,
          s = t.length;
        for (l || (l = i), o || (o = []); ++u < s; ) {
          var c = t[u];
          n > 0 && l(c)
            ? n > 1
              ? e(c, n - 1, l, a, o)
              : r(o, c)
            : !a && (o[o.length] = c);
        }
        return o;
      };
    },
    149912: function (e, t, n) {
      var r = n(466293),
        i = n(443735),
        l = n(402428),
        a = r ? r.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return l(e) || i(e) || !!(a && e && e[a]);
      };
    },
    90757: function (e, t, n) {
      var r = n(544140);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : [];
      };
    },
    966390: function (e, t, n) {
      "use strict";
      n(47120), n(789020);
      var r = n(481060),
        i = n(570140),
        l = n(430742),
        a = n(904245),
        o = n(166459),
        u = n(531643),
        s = n(881052),
        c = n(673750),
        d = n(141795),
        f = n(476326),
        h = n(680287),
        p = n(247206),
        _ = n(539573),
        E = n(786761),
        m = n(3148),
        g = n(48854),
        C = n(785359),
        A = n(79390),
        v = n(623292),
        N = n(807092),
        I = n(467798),
        T = n(703558),
        O = n(117530),
        R = n(630388),
        P = n(226351),
        S = n(981631),
        L = n(388032);
      async function Z(e) {
        var t, n, r;
        let d,
          {
            channelId: f,
            uploads: Z,
            draftType: y,
            parsedMessage: b,
            options: D = {},
            raiseEndpointErrors: U = !1,
          } = e,
          M = new h.Z(S.ANM.MESSAGES(f)),
          G = new P.o(),
          w = {
            content: "",
            nonce: "",
            channel_id: f,
            type: S.uaV.DEFAULT,
            sticker_ids: null == D ? void 0 : D.stickerIds,
            poll: null == D ? void 0 : D.poll,
          };
        null != b && (w.content = null == b ? void 0 : b.content),
          null != N.Z.getPendingReply(f) &&
            ((w.type = S.uaV.REPLY),
            (w.message_reference = D.messageReference),
            (w.allowed_mentions = D.allowedMentions),
            (0, v.A6)(f));
        let [k, x] = (0, I.Z)(w.content);
        k &&
          ((w.content = x),
          (w.flags = (0, R.pj)(
            null !== (t = w.flags) && void 0 !== t ? t : 0,
            S.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let V = null !== (n = D.nonce) && void 0 !== n ? n : (0, g.r)(),
          B = (0, m.ZP)({
            channelId: f,
            content: w.content,
            tts: null !== (r = null == b ? void 0 : b.tts) && void 0 !== r && r,
            type: w.type,
            messageReference: w.message_reference,
            flags: w.flags,
            nonce: V,
            poll: (0, A.x9)(D.poll),
          });
        return (
          ((w.nonce = V),
          M.on("start", (e) => {
            (d = (0, E.e5)({ ...B, id: e.id })),
              i.Z.dispatch({
                type: "UPLOAD_START",
                channelId: f,
                file: e,
                message: d,
                uploader: M,
              });
          }),
          M.on("progress", (e) => {
            i.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: f, file: e });
          })),
          M.on("error", (e, t, n, r) => {
            if (
              (i.Z.dispatch({
                type: "UPLOAD_FAIL",
                channelId: f,
                file: e,
                messageRecord: d,
              }),
              (0, C.x)({
                fileItems: e.items,
                failureCode: t,
                errorMessage: null == r ? void 0 : r.msg,
              }),
              t === S.evJ.EXPLICIT_CONTENT)
            ) {
              a.Z.sendExplicitMediaClydeError(
                f,
                null == n ? void 0 : n.attachments,
                p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (t === S.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: t, message: null == n ? void 0 : n.message },
                r =
                  null == d
                    ? null
                    : { type: c.$V.SEND, message: { ...d, channelId: f } };
              (0, u.openUploadError)({
                title: L.intl.string(L.t.B3vFdX),
                help: (0, _.uF)(r, e),
              });
              return;
            }
            if (t !== S.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (U)
                G.reject(new s.Hx({ status: t, body: null != n ? n : {} }, t));
              else {
                var h;
                (0, u.openUploadError)({
                  title: L.intl.string(L.t.B3vFdX),
                  help:
                    null !== (h = null == n ? void 0 : n.message) &&
                    void 0 !== h
                      ? h
                      : L.intl.string(L.t.zMEjJi),
                });
              }
              "" !== w.content &&
                "" === T.Z.getDraft(f, y) &&
                l.Z.saveDraft(f, w.content, y),
                0 === O.Z.getUploadCount(f, y) &&
                  o.Z.setUploads({ channelId: f, uploads: Z, draftType: y });
            }
          }),
          M.on("complete", (e, t) => {
            i.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: f,
              file: e,
              aborted: M._aborted,
              messageRecord: t,
            });
          }),
          await M.uploadFiles(Z, w),
          G.resolve(),
          G.promise
        );
      }
      t.Z = {
        instantBatchUpload: function (e) {
          let {
              channelId: t,
              files: n,
              draftType: r,
              isThumbnail: i = !1,
              filesMetadata: l = [],
            } = e,
            a = Array.from(n).map((e, n) => {
              let r = null != l ? l[n] : {};
              return new d.n(
                { file: e, platform: f.ow.WEB, isThumbnail: i, ...r },
                t,
              );
            });
          Z({ channelId: t, uploads: a, draftType: r });
        },
        upload: function e(t) {
          let {
              channelId: n,
              file: o,
              draftType: s,
              message: c,
              hasSpoiler: d,
              filename: f,
            } = t,
            _ = { content: "", tts: !1, hasSpoiler: d, filename: f };
          if (null != c) {
            (_.content = c.content),
              (_.tts = c.tts),
              (_.channel_id = c.channel_id);
            let e = N.Z.getPendingReply(n);
            if (null != e) {
              let t = a.Z.getSendMessageOptionsForReply(e);
              (_.type = S.uaV.REPLY),
                (_.message_reference = t.messageReference),
                (_.allowed_mentions = t.allowedMentions),
                (0, v.A6)(n);
            }
          }
          let E = new h.Z(S.ANM.MESSAGES(n));
          E.on("start", (e) => {
            i.Z.dispatch({
              type: "UPLOAD_START",
              channelId: n,
              file: e,
              uploader: E,
            });
          }),
            E.on("progress", (e) => {
              i.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: n, file: e });
            }),
            E.on("error", (t, d, f) => {
              if (
                (i.Z.dispatch({ type: "UPLOAD_FAIL", channelId: n, file: t }),
                (0, C.x)({ fileItems: t.items, failureCode: d }),
                d === S.evJ.EXPLICIT_CONTENT)
              ) {
                a.Z.sendExplicitMediaClydeError(
                  n,
                  null == f ? void 0 : f.attachments,
                  p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, u.openUploadError)({
                title: L.intl.string(L.t.B3vFdX),
                help: L.intl.format(L.t.gIlRx8, {
                  onClick: () => {
                    (0, r.closeModal)(u.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: n, file: o, draftType: s, message: c });
                  },
                }),
              }),
                "" !== _.content &&
                  "" === T.Z.getDraft(n, s) &&
                  l.Z.saveDraft(n, _.content, s);
            }),
            E.on("complete", (e) => {
              i.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: n, file: e });
            }),
            E.upload(o, _);
        },
        uploadFiles: Z,
        cancel(e) {
          i.Z.dispatch({ type: "UPLOAD_CANCEL_REQUEST", file: e }),
            null != e.draftContent &&
              null != e.channelId &&
              "" === T.Z.getDraft(e.channelId, T.d.ChannelMessage) &&
              i.Z.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: T.d.ChannelMessage,
              });
        },
      };
    },
    400354: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return o;
        },
      });
      var r = n(200651),
        i = n(192379),
        l = n(709014);
      let a = {
          deafen: { name: "deafen", start: 0, duration: 70 },
          undeafen: { name: "undeafen", start: 110, duration: 70 },
          hover_undeafened: {
            name: "hover_undeafened",
            start: 200,
            duration: 70,
          },
          hover_deafened: { name: "hover_deafened", start: 300, duration: 70 },
        },
        o = (e) => {
          let t = i.useRef(null),
            o = i.useRef(e);
          o.current = e;
          let u = i.useMemo(
              () => () => {
                null != t.current && t.current.play(e);
              },
              [e],
            ),
            s = i.useCallback(() => {
              if (null == t.current) return;
              let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
              t.current.play(n);
            }, [e]),
            c = i.useCallback(() => {
              if (null == t.current) return;
              let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
              t.current.stopIfPlaying(n);
            }, [e]);
          return {
            events: { onClick: u, onMouseEnter: s, onMouseLeave: c },
            play: u,
            Component: i.useCallback(
              (e) =>
                (0, r.jsx)(l.L, {
                  ...e,
                  src: () => n.e("68449").then(n.t.bind(n, 406785, 19)),
                  ref: t,
                  initialAnimation: o.current,
                  markers: a,
                }),
              [],
            ),
          };
        };
    },
    680287: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(653041);
      var r = n(544891),
        i = n(881052),
        l = n(687294),
        a = n(476326),
        o = n(861990),
        u = n(388032);
      class s extends l.Z {
        async uploadFiles(e, t) {
          let { addFilesTo: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super.upload({ name: u.intl.string(u.t.jfKTen) }, t, e);
          let r = new AbortController();
          try {
            if (((this.files = e), this._aborted)) return;
            if (
              (this._handleStart(() => r.abort()),
              !(await this.compressAndCheckFileSize()))
            )
              return;
            this.setUploadingTextForUI(),
              await (0, l.$)(
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
          let l;
          let u = [];
          this.files.forEach((e, t) => {
            let n = (0, o.B)(e, t);
            e.item.platform === a.ow.WEB && u.push({ ...n });
          }),
            (l =
              null != n && null != t
                ? this._addAttachmentsToPayload(t, n, u)
                : { ...t, attachments: u });
          let s = { url: this._url, body: l, signal: e, rejectWithError: !1 },
            c = "POST" === this._method ? r.tn.post : r.tn.patch;
          try {
            let e = await c(s);
            return this._handleComplete(e.body), e.body;
          } catch (e) {
            var d;
            if (this._raiseEndpointErrors) throw new i.Hx(e);
            this._handleError({
              code:
                null == e
                  ? void 0
                  : null === (d = e.body) || void 0 === d
                    ? void 0
                    : d.code,
              body: null == e ? void 0 : e.body,
            });
          }
        }
        constructor(e, t = "POST", n) {
          super(e, t, n);
        }
      }
    },
    716600: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(442837),
        i = n(317381);
      function l() {
        return (0, r.e7)([i.ZP], () => i.ZP.getCurrentEmbeddedActivity());
      }
    },
    570928: function (e, t, n) {
      "use strict";
      var r,
        i,
        l,
        a,
        o = n(200651),
        u = n(192379),
        s = n(120356),
        c = n.n(s),
        d = n(971139);
      class f extends (a = u.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            hoverText: n,
            className: r,
            forceHover: i,
            ...l
          } = this.props;
          return (0, o.jsxs)("div", {
            ...l,
            className: c()(r, d.hoverRoll, {
              [d.disabled]: null == n,
              [d.forceHover]: i,
            }),
            children: [
              (0, o.jsx)(e, { className: d.hovered, children: n }),
              (0, o.jsx)(e, { className: d.default, children: t }),
            ],
          });
        }
      }
      (l = { tag: "div", forceHover: !1 }),
        (i = "defaultProps") in (r = f)
          ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = l),
        (t.Z = f);
    },
    571250: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(388032);
      function i(e, t, n) {
        return n
          ? r.intl.string(r.t["2Ne/Y2"])
          : t
            ? r.intl.string(r.t.QZ7WSU)
            : e
              ? r.intl.string(r.t["2US87+"])
              : r.intl.string(r.t.wjcRFR);
      }
    },
    55311: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        l = n(846027),
        a = n(468026),
        o = n(388032);
      function u(e, t) {
        if (e) {
          (0, i.openModal)((e) =>
            (0, r.jsx)(a.default, {
              ...e,
              title: o.intl.string(o.t.QZ7WSU),
              body: o.intl.string(o.t.Tl9JpK),
            }),
          );
          return;
        }
        l.Z.toggleSelfDeaf({ location: t });
      }
    },
    97797: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return l;
        },
      });
      var r = n(981631),
        i = n(388032);
      function l(e) {
        let {
          username: t,
          usernameOnClickHandler: n = r.dG4,
          productName: l,
        } = e;
        return i.intl.formatToParts(i.t.w4iXs7, {
          username: t,
          usernameHook: n,
          productName: l,
        });
      }
    },
    523361: function (e, t, n) {
      "use strict";
      n.d(t, {
        HG: function () {
          return o;
        },
        Md: function () {
          return a;
        },
        Q8: function () {
          return l;
        },
      });
      var r = n(373228),
        i = n(388032);
      let l = () => [i.intl.string(i.t.b6wEe3), i.intl.string(i.t.i8o9hY)],
        a = () => [i.intl.string(i.t.vqnToa), i.intl.string(i.t["9yh+dH"])],
        o = [
          {
            id: "781323471249604648",
            format_type: r.u3.APNG,
            description: "Cheerful Choco jumps out of gift box",
            name: "Surprise",
          },
          {
            id: "781324642736144424",
            format_type: r.u3.APNG,
            description: "Cheerful Choco preens against window",
            name: "Affection",
          },
          {
            id: "781323769960202280",
            format_type: r.u3.APNG,
            description: "Cheerful Choco sparkles",
            name: "OMG",
          },
          {
            id: "781324722394103808",
            format_type: r.u3.APNG,
            description: "Cheerful Choco cheers",
            name: "Cheer",
          },
          {
            id: "813951723822645278",
            format_type: r.u3.APNG,
            description: "Cheerful Choco gives thumbs up",
            name: "Nice",
          },
        ];
    },
    35125: function (e, t, n) {
      "use strict";
      n.d(t, {
        PA: function () {
          return d;
        },
        Tn: function () {
          return c;
        },
        _i: function () {
          return m;
        },
        eI: function () {
          return _;
        },
        vp: function () {
          return p;
        },
        y8: function () {
          return E;
        },
      });
      var r = n(367907),
        i = n(200876),
        l = n(430824),
        a = n(594174);
      n(709054), n(523361);
      var o = n(981631),
        u = n(388032);
      function s(e) {
        return e;
      }
      function c(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
          } = e,
          { content: a, formatParams: o } = h({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
          });
        return u.intl.format(a, o);
      }
      function d(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
          } = e,
          { content: a, formatParams: o } = h({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
          });
        return u.intl.formatToParts(a, o);
      }
      function f(e, t) {
        var n, r;
        let i = l.Z.getGuild(e),
          a =
            null !== (n = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== n
              ? n
              : 0;
        return {
          guild: i,
          totalMonthsSubscribed: a,
          showWithDuration: a > 0,
          isRenewal:
            null !== (r = null == t ? void 0 : t.is_renewal) &&
            void 0 !== r &&
            r,
        };
      }
      function h(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: r = s,
            roleSubscriptionOnClickHandler: i = o.dG4,
            guildId: l,
            roleSubscriptionData: a,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: h,
            isRenewal: p,
          } = f(l, a);
        return (
          (t = h ? (p ? u.t.Iy66Mz : u.t.eCgb2d) : p ? u.t.mPTTdn : u.t.mYjFFx),
          {
            content: t,
            formatParams: {
              username: n,
              usernameHook: r,
              guildName: null == c ? void 0 : c.name,
              handleGuildNameClick: i,
              tierName: null == a ? void 0 : a.tier_name,
              months: d,
            },
          }
        );
      }
      function p(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: r = s,
            roleSubscriptionOnClickHandler: i = o.dG4,
            guildId: l,
            roleSubscriptionData: a,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: h,
            isRenewal: p,
          } = f(l, a);
        return (
          (t = h
            ? p
              ? u.t.OQ0OU1
              : u.t["+N9bxs"]
            : p
              ? u.t.OxP1ND
              : u.t["6Z1E+/"]),
          u.intl.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: d,
          })
        );
      }
      function _(e) {
        return (0, i.l)(e);
      }
      function E(e, t, n, i) {
        var l;
        r.ZP.trackWithMetadata(
          o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (l = a.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.id,
            channel_id: t,
            message_id: n,
            role_subscription_listing_id: i,
          },
        );
      }
      function m(e, t) {
        var n;
        return {
          guild_id: e.guild_id,
          sender:
            null === (n = a.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id,
          target_user: t.author.id,
          channel_id: e.id,
          message_id: t.id,
        };
      }
    },
    989373: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n(200651);
      n(192379);
      var i = n(238246),
        l = n(554370);
      function a(e) {
        let { withTitleBar: t, windowKey: n } = e;
        return (0, r.jsx)(i.Z, {
          withTitleBar: t,
          windowKey: n,
          title: "Discord Overlay",
          children: (0, r.jsx)(l.Z, {}),
        });
      }
      n(606206), n(371467);
    },
    46145: function (e, t, n) {
      "use strict";
      n(47120), n(733860);
      var r,
        i = n(442837),
        l = n(570140),
        a = n(592125),
        o = n(271383),
        u = n(430824);
      function s(e, t, n) {
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
      let c = [],
        d = new Set();
      class f extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          var t;
          this.waitFor(o.ZP, u.Z, a.Z),
            (d = new Set([
              ...(c =
                null !== (t = null == e ? void 0 : e.channelHistory) &&
                void 0 !== t
                  ? t
                  : []),
            ]));
        }
        getState() {
          return { channelHistory: c };
        }
        getChannelHistory() {
          return c;
        }
      }
      s(f, "displayName", "RecentVoiceChannelStore"),
        s(f, "persistKey", "RecentVoiceChannelStore");
      let h = new f(l.Z, {
        POST_CONNECTION_OPEN: function () {
          d = new Set([...c]);
        },
        VOICE_CHANNEL_SELECT: function (e) {
          var t, n;
          let { channelId: r } = e;
          return (
            !(
              null == r ||
              !(
                null !==
                  (n =
                    null === (t = a.Z.getChannel(r)) || void 0 === t
                      ? void 0
                      : t.isVocal()) &&
                void 0 !== n &&
                n
              ) ||
              d.has(r)
            ) &&
            (c.unshift(r),
            d.add(r),
            c.length > 10 && ((c.length = 10), (d = new Set([...c]))),
            !0)
          );
        },
      });
      t.Z = h;
    },
    499401: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return i;
        },
      });
      var r = n(388032);
      function i(e) {
        let { application: t, username: n, usernameOnClick: i } = e;
        return null != t
          ? r.intl.formatToParts(r.t.Tes5Oj, {
              username: n,
              applicationName: t.name,
              usernameOnClick: i,
            })
          : r.intl.formatToParts(r.t.PUJtgo, {
              username: n,
              usernameOnClick: i,
            });
      }
    },
    693912: function (e, t, n) {
      "use strict";
      n.d(t, {
        B2: function () {
          return u;
        },
        DS: function () {
          return a;
        },
        hj: function () {
          return s;
        },
        nh: function () {
          return o;
        },
      });
      var r = n(63063),
        i = n(981631),
        l = n(388032);
      function a(e) {
        let {
          application: t,
          username: n,
          usernameHook: a = i.dG4,
          applicationNameHook: o = i.dG4,
        } = e;
        return null != t
          ? l.intl.format(l.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: o,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : l.intl.format(l.t["+6V2sb"], {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function o(e) {
        let {
          application: t,
          username: n,
          usernameHook: a = i.dG4,
          applicationNameHook: o = i.dG4,
        } = e;
        return null != t
          ? l.intl.format(l.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: o,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : l.intl.format(l.t.sAX6rq, {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function u(e) {
        let {
          application: t,
          username: n,
          usernameOnClick: a,
          applicationNameOnClick: o,
          medium: u,
        } = e;
        return null != t
          ? l.intl.formatToParts(l.t["8r+Z+P"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: o,
              medium: u,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : l.intl.formatToParts(l.t.ojysqa, {
              username: n,
              usernameOnClick: a,
              medium: u,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
      function s(e) {
        let {
          application: t,
          username: n,
          usernameOnClick: a,
          applicationNameOnClick: o,
          medium: u,
        } = e;
        return null != t
          ? l.intl.formatToParts(l.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: o,
              medium: u,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : l.intl.formatToParts(l.t["x2CN/f"], {
              username: n,
              usernameOnClick: a,
              medium: u,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
    },
    977059: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return l;
        },
        S: function () {
          return i;
        },
      });
      let r = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function i(e) {
        let { location: t } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function l(e) {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    879815: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(442837),
        i = n(314897),
        l = n(131951),
        a = n(979651);
      function o(e) {
        return (0, r.cj)(
          [a.Z, l.Z, i.default],
          () =>
            (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : a.Z,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : l.Z,
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : i.default,
                u =
                  null != e ? n.getVoiceState(e.getGuildId(), o.getId()) : null;
              return {
                selfDeaf: r.isSelfDeaf(),
                deaf:
                  null !== (t = null == u ? void 0 : u.deaf) &&
                  void 0 !== t &&
                  t,
              };
            })(e, a.Z, l.Z, i.default),
          [e],
        );
      }
    },
    606206: function (e, t, n) {
      "use strict";
      let r;
      n(47120), n(653041), n(411104);
      var i,
        l,
        a,
        o,
        u = n(442837),
        s = n(570140),
        c = n(278323),
        d = n(212819),
        f = n(933557),
        h = n(592125),
        p = n(430824),
        _ = n(293273),
        E = n(158776),
        m = n(699516),
        g = n(594174),
        C = n(55589),
        A = n(981631);
      let v = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
        N = null,
        I = null,
        T = [],
        O = [];
      function R(e) {
        (T = [...T, e]),
          (O = O.map((e) => ({ ...e, sent: T.includes(e.data.record.id) }))),
          Z.emitChange();
      }
      function P() {
        (N = null), null != r && (r.destroy(), (r = null)), null != I && I();
      }
      function S() {
        let e =
          null != N && null != N.application_id
            ? _.Z.getApplicationActivity(N.application_id)
            : null;
        if (null != N && (null == e || null == e.party || null == e.party.id))
          return P();
      }
      class L extends (i = u.ZP.Store) {
        initialize() {
          this.waitFor(_.Z);
        }
        getActivity() {
          return N;
        }
        getQuery() {
          var e;
          return null !== (e = null == r ? void 0 : r.query) && void 0 !== e
            ? e
            : "";
        }
        getResults() {
          return O;
        }
      }
      (o = "ActivityInviteModalStore"),
        (a = "displayName") in (l = L)
          ? Object.defineProperty(l, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = o);
      let Z = new L(s.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
          (N = e.activity),
            (I = e.resolve),
            (T = []),
            null == r &&
              (r = new d.ZP(
                (e, t) => {
                  var n;
                  return (
                    (n = e),
                    void ((O = (
                      "" === t.trim()
                        ? (function () {
                            let e = [];
                            return (
                              C.Z.getPrivateChannelIds().forEach((t) => {
                                let n = h.Z.getChannel(t);
                                if (null != n)
                                  if (n.type === A.d4z.DM) {
                                    let t = n.getRecipientId(),
                                      r =
                                        null != t ? g.default.getUser(t) : null;
                                    null != r &&
                                      e.push({
                                        type: d.h8.USER,
                                        record: r,
                                        score: 0,
                                      });
                                  } else
                                    n.isMultiUserDM() &&
                                      e.push({
                                        type: d.h8.GROUP_DM,
                                        record: n,
                                        score: 0,
                                      });
                              }),
                              e
                            );
                          })()
                        : n
                    ).map((e) => {
                      switch (e.type) {
                        case d.h8.USER: {
                          let { record: t } = e;
                          return {
                            type: d.h8.USER,
                            sent: T.includes(t.id),
                            status: E.Z.getStatus(t.id),
                            data: e,
                          };
                        }
                        case d.h8.TEXT_CHANNEL: {
                          let { record: t } = e,
                            n = h.Z.getChannel(t.parent_id),
                            r = p.Z.getGuild(t.guild_id);
                          return {
                            type: d.h8.TEXT_CHANNEL,
                            sent: T.includes(t.id),
                            categoryName:
                              null != n ? (0, f.F6)(n, g.default, m.Z) : "",
                            guildName: null != r ? r.toString() : "",
                            data: e,
                          };
                        }
                        case d.h8.GROUP_DM: {
                          let { record: t } = e;
                          return {
                            type: d.h8.GROUP_DM,
                            sent: T.includes(t.id),
                            data: e,
                          };
                        }
                        default:
                          throw Error("Unknown Result Type: ".concat(e.type));
                      }
                    })),
                    Z.emitChange())
                  );
                },
                v,
                100,
              )),
            r.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
          let { query: t } = e;
          null != r && r.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
          if (null == N) return;
          let t = e.channelId,
            n = e.userId;
          null != t
            ? c.Z.sendActivityInvite({
                channelId: t,
                type: A.mFx.JOIN,
                activity: N,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => R(t))
            : null != n &&
              c.Z.sendActivityInviteUser({
                userId: n,
                type: A.mFx.JOIN,
                activity: N,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => R(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: P,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          return !!t && null != N && (P(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: S,
        RPC_APP_DISCONNECTED: S,
      });
      t.Z = 12633 == n.j ? Z : null;
    },
    55589: function (e, t, n) {
      "use strict";
      let r, i, l;
      n(47120), n(653041);
      var a,
        o,
        u,
        s,
        c,
        d,
        f = n(913527),
        h = n.n(f),
        p = n(442837),
        _ = n(759174),
        E = n(570140),
        m = n(355298),
        g = n(333984),
        C = n(131704),
        A = n(592125),
        v = n(430824),
        N = n(306680),
        I = n(9156),
        T = n(594174),
        O = n(709054),
        R = n(176505);
      ((u = a || (a = {})).DEFAULT = "DEFAULT"), (u.FAVORITE = "FAVORITE");
      let P = new _.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function S(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let r =
                    null !==
                      (n =
                        null !== (t = N.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  i = e.isMessageRequestTimestamp;
                if (null != i) {
                  let e = h()(i).valueOf(),
                    t = O.default.fromTimestamp(e);
                  return O.default.compare(r, t) > 0 ? r : t;
                }
                return r;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: m.Z.isMessageRequest(e.id) || g.Z.isSpam(e.id),
        };
      }
      function L() {
        P.clear(),
          Object.values(A.Z.getMutablePrivateChannels()).forEach((e) => {
            P.set(e.id, S(e));
          });
      }
      function Z() {
        let e = A.Z.getMutablePrivateChannels();
        for (let t in e) P.set(t, S(e[t]));
      }
      let y =
        ((r = []),
        (i = []),
        (l = []),
        () => {
          let e = P.values("FAVORITE"),
            t = P.values("DEFAULT");
          return (
            (r !== e || i !== t) &&
              ((l = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return l.push(t);
              }),
              (r = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return l.push(t);
              }),
              (i = t)),
            l
          );
        });
      class b extends (o = p.ZP.Store) {
        initialize() {
          this.waitFor(A.Z, v.Z, T.default, m.Z, I.ZP),
            this.syncWith([I.ZP, m.Z], L);
        }
        getPrivateChannelIds() {
          return y();
        }
        getSortedChannels() {
          return [P.values("FAVORITE"), P.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            P.values().forEach((t) => {
              let { channelId: n, lastMessageId: r } = t;
              e[n] = r;
            }),
            e
          );
        }
      }
      (d = "PrivateChannelSortStore"),
        (c = "displayName") in (s = b)
          ? Object.defineProperty(s, c, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[c] = d),
        (t.Z = new b(E.Z, {
          CONNECTION_OPEN: L,
          CONNECTION_OPEN_SUPPLEMENTAL: L,
          OVERLAY_INITIALIZE: L,
          CACHE_LOADED: Z,
          CACHE_LOADED_LAZY: Z,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, C.hv)(e.type) || P.has(e.id)) && P.set(e.id, S(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, C.hv)(t.type) || t.id === R.V) return !1;
            P.set(t.id, S(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return P.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!P.has(t)) return !1;
            let r = A.Z.getChannel(t);
            return null != r && P.set(t, S(r, n.id));
          },
          GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return P.delete(t);
          },
          LOGOUT: function () {
            P.clear();
          },
        }));
    },
    352736: function (e, t, n) {
      "use strict";
      var r,
        i,
        l = n(25209),
        a = n(97797),
        o = n(35125),
        u = n(786761),
        s = n(739566),
        c = n(499401),
        d = n(693912),
        f = n(23750),
        h = n(314897),
        p = n(592125),
        _ = n(430824),
        E = n(594174),
        m = n(5192),
        g = n(709054),
        C = n(981631),
        A = n(388032);
      let v = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((r = i || (i = {})).NORMAL = "NORMAL"), (r.CLAN = "CLAN");
      let N = () => [
          A.t["0cuj7u"],
          A.t["MuW+CA"],
          A.t.osqpHR,
          A.t["5ToSh4"],
          A.t.JEB8pq,
          A.t.pkOV5e,
          A.t.kRb1Jy,
          A.t.EmKLY2,
          A.t.rPtBnZ,
          A.t["5B/ekZ"],
          A.t.ESNC3d,
          A.t["Iw6d8/"],
          A.t.WecSZ2,
        ],
        I = () => [
          A.t.Jm6e09,
          A.t.MGRnRU,
          A.t.EXOEGh,
          A.t["5uCTFB"],
          A.t.rl45Qk,
          A.t.Bh9zpa,
          A.t.RdEy1N,
          A.t.qcdp09,
          A.t.F7w2Rk,
          A.t.gSyOgI,
          A.t.uYgqv7,
          A.t["b/1SBQ"],
          A.t.LhebZG,
        ],
        T = () => [
          A.t["20E/ys"],
          A.t["oa8+kp"],
          A.t.zoKkXl,
          A.t.FP9aS0,
          A.t.E5Zj1d,
          A.t["6Anmws"],
          A.t.sR78HR,
          A.t.gA9qPz,
          A.t.Hkiyp6,
          A.t.w1HMho,
        ],
        O = () => [
          A.t["8fy3DQ"],
          A.t.UproUV,
          A.t["7l3EyM"],
          A.t.GToyaG,
          A.t["DUs+Zm"],
          A.t.yLkbfn,
          A.t.oWdvws,
          A.t.tOoKTE,
          A.t["VM7+Oj"],
          A.t["hJx/u7"],
        ],
        R = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return N();
            case "CLAN":
              return T();
          }
        },
        P = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return I();
            case "CLAN":
              return O();
          }
        };
      function S(e, t) {
        let n = P(t),
          r = g.default.extractTimestamp(e) % n.length;
        return n[r];
      }
      function L(e) {
        return (0, l.Rp)(
          A.intl.formatToParts(A.t["ihxM9/"], {
            username: e,
            usernameOnClick: C.dG4,
          }),
        );
      }
      function Z(e, t) {
        let n = p.Z.getChannel(t);
        return null == n || null == _.Z.getGuild(n.getGuildId())
          ? L(e)
          : (0, l.Rp)(
              A.intl.formatToParts(A.t["ihxM9/"], {
                username: e,
                usernameOnClick: C.dG4,
              }),
            );
      }
      function y(e) {
        var t;
        return (
          null === (t = _.Z.getGuild(e)) || void 0 === t
            ? void 0
            : t.hasFeature(C.oNc.CLAN)
        )
          ? "CLAN"
          : "NORMAL";
      }
      t.Z = {
        stringify: function (e, t) {
          var n, r, i, g;
          let v = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
            N =
              null != v && "string" != typeof v
                ? E.default.getUser(v.id)
                : void 0,
            I = e.channel_id,
            T = m.ZP.getName(null, I, e.author);
          switch (e.type) {
            case C.uaV.RECIPIENT_ADD:
              if (null == N) return;
              return (0, l.Rp)(
                A.intl.formatToParts(A.t["7/Xl0d"], {
                  username: T,
                  usernameOnClick: C.dG4,
                  otherUsername: m.ZP.getName(null, I, N),
                  otherUsernameOnClick: C.dG4,
                }),
              );
            case C.uaV.RECIPIENT_REMOVE:
              if (null == N) return;
              let O = e.author;
              if (null == O || O.id === N.id)
                return (0, l.Rp)(
                  A.intl.formatToParts(A.t["Qn5+LS"], {
                    username: T,
                    usernameOnClick: C.dG4,
                  }),
                );
              return (0, l.Rp)(
                A.intl.formatToParts(A.t.QtZ0RE, {
                  username: T,
                  usernameOnClick: C.dG4,
                  otherUsername: m.ZP.getName(null, I, N),
                  otherUsernameOnClick: C.dG4,
                }),
              );
            case C.uaV.CALL:
              let { call: R } = e;
              if (null != R && -1 === R.participants.indexOf(h.default.getId()))
                return (0, l.Rp)(
                  A.intl.formatToParts(A.t.DbgSAw, {
                    username: T,
                    usernameOnClick: C.dG4,
                  }),
                );
              return;
            case C.uaV.CHANNEL_NAME_CHANGE:
              return (0, l.Rp)(
                A.intl.formatToParts(
                  t.isForumPost() ? A.t["qa0e/v"] : A.t.XCPMEB,
                  {
                    username: T,
                    usernameOnClick: C.dG4,
                    channelName: e.content,
                  },
                ),
              );
            case C.uaV.CHANNEL_ICON_CHANGE:
              return (0, l.Rp)(
                A.intl.formatToParts(A.t.wypJZ2, {
                  username: T,
                  usernameOnClick: C.dG4,
                }),
              );
            case C.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, l.Rp)(
                A.intl.formatToParts(A.t["/M60j4"], {
                  username: T,
                  usernameOnClick: C.dG4,
                }),
              );
            case C.uaV.USER_JOIN:
              let P = y(t.guild_id);
              return (0, l.Rp)(
                A.intl.formatToParts(S(e.id, P), {
                  username: T,
                  usernameOnClick: C.dG4,
                }),
              );
            case C.uaV.GUILD_BOOST:
              return L(T);
            case C.uaV.GUILD_BOOST_TIER_1:
            case C.uaV.GUILD_BOOST_TIER_2:
            case C.uaV.GUILD_BOOST_TIER_3:
              return Z(T, I);
            case C.uaV.GUILD_INVITE_REMINDER:
              return A.intl.string(A.t.gxyKvr);
            case C.uaV.THREAD_STARTER_MESSAGE:
              return A.intl.formatToPlainString(A.t["B8H+Cg"], {
                username: T,
                threadName: t.name,
              });
            case C.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (e instanceof f.ZP) return null;
              return (0, l.Rp)(
                (0, o.vp)({
                  username: T,
                  guildId: t.guild_id,
                  roleSubscriptionData: e.role_subscription_data,
                }),
              );
            case C.uaV.PURCHASE_NOTIFICATION:
              if (
                e instanceof f.ZP ||
                (null === (i = e.purchase_notification) || void 0 === i
                  ? void 0
                  : null === (r = i.guild_product_purchase) || void 0 === r
                    ? void 0
                    : r.product_name) == null
              )
                return null;
              return (0, l.Rp)(
                (0, a.i)({
                  username: T,
                  productName:
                    e.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case C.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (e instanceof f.ZP) return null;
              let b = (0, s.ZH)((0, u.e5)(e));
              return (0, l.Rp)(
                (0, c.Y)({ application: e.application, username: b.nick }),
              );
            case C.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (e instanceof f.ZP) return null;
              return (0, l.Rp)(
                (0, d.B2)({
                  application: e.application,
                  username: (0, s.ZH)((0, u.e5)(e)).nick,
                }),
              );
            case C.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (e instanceof f.ZP) return null;
              return (0, l.Rp)(
                (0, d.hj)({
                  application: e.application,
                  username: (0, s.ZH)((0, u.e5)(e)).nick,
                }),
              );
            case C.uaV.AUTO_MODERATION_ACTION:
              if (
                null === (g = e.embeds) || void 0 === g
                  ? void 0
                  : g.some((e) => {
                      let { type: t } = e;
                      return t === C.hBH.AUTO_MODERATION_NOTIFICATION;
                    })
              )
                return (function (e) {
                  let t = p.Z.getChannel(e);
                  if (null == t) return null;
                  let n = _.Z.getGuild(t.getGuildId());
                  return null == n
                    ? null
                    : (0, l.Rp)(
                        A.intl.formatToParts(A.t["a+lJKi"], {
                          guildName: n.name,
                        }),
                      );
                })(I);
              return e.content;
            case C.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (e, t, n) {
                let r = p.Z.getChannel(t);
                if (null == r) return null;
                let i = _.Z.getGuild(r.getGuildId());
                return null == i
                  ? null
                  : (0, l.Rp)(
                      A.intl.formatToParts(A.t.iOuWPj, {
                        username: e,
                        guildName: i.name,
                        time:
                          "" !== n
                            ? new Date(n).toLocaleString(A.intl.currentLocale, {
                                hour: "numeric",
                                minute: "2-digit",
                              })
                            : "",
                      }),
                    );
              })(T, I, e.content);
            case C.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (e, t) {
                let n = p.Z.getChannel(t);
                if (null == n) return null;
                let r = _.Z.getGuild(n.getGuildId());
                return null == r
                  ? null
                  : (0, l.Rp)(
                      A.intl.formatToParts(A.t.axmbpq, {
                        username: e,
                        guildName: r.name,
                      }),
                    );
              })(T, I);
            default:
              return e.content;
          }
        },
        getSystemMessageUserJoin: function (e, t) {
          let n = R(t),
            r = g.default.extractTimestamp(e) % n.length;
          return n[r];
        },
        getSystemMessageUserJoinMobile: S,
        getSystemMessageBotJoin: function (e) {
          return null == v[e]
            ? null
            : A.intl.format(A.t.xw1Ij4, {
                learnOnClick: { onClick: () => window.open(v[e]) },
              });
        },
        getWelcomeMessageKind: y,
      };
    },
    141038: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(653041),
        n(47120);
      var r = n(512722),
        i = n.n(r),
        l = n(90757),
        a = n.n(l),
        o = n(65154);
      function u(e, t, n) {
        let r = window.DiscordNative;
        i()(null != r, "Can't get desktop sources outside of native app"),
          (t = null != t ? t : [o.vA.WINDOW, o.vA.SCREEN]),
          (n = null != n ? n : { width: 150, height: 150 });
        let l = [];
        return (
          t.includes(o.vA.SCREEN) &&
            e.supports(o.AN.SCREEN_PREVIEWS) &&
            (l.push(e.getScreenPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== o.vA.SCREEN))),
          t.includes(o.vA.WINDOW) &&
            e.supports(o.AN.WINDOW_PREVIEWS) &&
            (l.push(e.getWindowPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== o.vA.WINDOW))),
          0 !== t.length &&
            l.push(
              r.desktopCapture.getDesktopCaptureSources({
                types: t,
                thumbnailSize: n,
              }),
            ),
          Promise.all(l).then((e) => a()(e))
        );
      }
    },
    971139: function (e, t, n) {
      "use strict";
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    323822: function (e, t, n) {
      "use strict";
      e.exports = {
        pro: "pro_b5053a",
        tip: "tip_b5053a",
        block: "block_b5053a",
        inline: "inline_b5053a",
      };
    },
    51100: function (e, t, n) {
      "use strict";
      e.exports = {
        graphContainer: "graphContainer_c73c22",
        separator: "separator_c73c22",
        popoutText: "popoutText_c73c22",
        popoutTextDetails: "popoutTextDetails_c73c22",
        popoutBottom: "popoutBottom_c73c22",
        debugButton: "debugButton_c73c22",
        copyStatsButton: "copyStatsButton_c73c22",
        textWithIcon: "textWithIcon_c73c22",
        secured: "secured_c73c22",
      };
    },
    628437: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_feab95",
        title: "title_feab95",
        tabs: "tabs_feab95",
        tabBarItem: "tabBarItem_feab95",
        debugPanelStandalone: "debugPanelStandalone_feab95",
        debugPanelSection: "debugPanelSection_feab95",
      };
    },
    239793: function (e, t, n) {
      "use strict";
      e.exports = {
        ping: "ping_c02c63",
        smallPing: "smallPing_c02c63",
        rtcConnectionStatus: "rtcConnectionStatus_c02c63",
        rtcConnectionStatusConnected:
          "rtcConnectionStatusConnected_c02c63 rtcConnectionStatusLabel_c02c63",
        rtcConnectionStatusConnecting:
          "rtcConnectionStatusConnecting_c02c63 rtcConnectionStatusLabel_c02c63",
        rtcConnectionStatusError:
          "rtcConnectionStatusError_c02c63 rtcConnectionStatusLabel_c02c63",
        rtcConnectionQualityFine: "rtcConnectionQualityFine_c02c63",
        pingForeground: "pingForeground_c02c63",
        rtcConnectionQualityAverage: "rtcConnectionQualityAverage_c02c63",
        rtcConnectionQualityBad: "rtcConnectionQualityBad_c02c63",
        labelWrapper: "labelWrapper_c02c63",
        rtcConnectionStatusWrapper: "rtcConnectionStatusWrapper_c02c63",
      };
    },
    586802: function (e, t, n) {
      "use strict";
      e.exports = {
        status: "status_dcb18f",
        hoverableStatus: "hoverableStatus_dcb18f",
      };
    },
    539992: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_f59a38",
        tag: "tag_f59a38",
        header: "header_f59a38",
        code: "code_f59a38",
      };
    },
    797448: function (e, t, n) {
      "use strict";
      e.exports = {
        code: "code_e9fe13",
        chunk: "chunk_e9fe13",
        divider: "divider_e9fe13",
        codeText: "codeText_e9fe13",
        loading: "loading_e9fe13",
      };
    },
    66050: function (e, t, n) {
      "use strict";
      e.exports = { container: "container_a7c5d3" };
    },
    390317: function (e, t, n) {
      "use strict";
      e.exports = {
        chatWheelMouseInput: "chatWheelMouseInput_ba62f2",
        chatWheel: "chatWheel_ba62f2",
        chatWheelBackground: "chatWheelBackground_ba62f2",
        chatWheelDeadZone: "chatWheelDeadZone_ba62f2",
        chatWheelCenter: "chatWheelCenter_ba62f2",
        innerContent: "innerContent_ba62f2",
        chatWheelDeadZoneIcon: "chatWheelDeadZoneIcon_ba62f2",
        paginationHint: "paginationHint_ba62f2",
        chatWheelItem: "chatWheelItem_ba62f2",
      };
    },
    6609: function (e, t, n) {
      "use strict";
      e.exports = { soundButton: "soundButton_d608d3" };
    },
  },
]);
//# sourceMappingURL=ec00ddb3826fad44d5f4.js.map
