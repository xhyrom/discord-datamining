"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58730"],
  {
    966390: function (e, t, n) {
      n(47120), n(789020);
      var r = n(481060),
        i = n(570140),
        a = n(430742),
        o = n(904245),
        l = n(166459),
        u = n(531643),
        c = n(881052),
        s = n(673750),
        d = n(141795),
        f = n(476326),
        _ = n(680287),
        p = n(247206),
        h = n(539573),
        E = n(786761),
        C = n(3148),
        g = n(48854),
        m = n(785359),
        v = n(79390),
        N = n(623292),
        A = n(807092),
        b = n(467798),
        I = n(703558),
        T = n(117530),
        S = n(630388),
        O = n(226351),
        L = n(981631),
        P = n(388032);
      async function R(e) {
        var t, n, r;
        let d,
          {
            channelId: f,
            uploads: R,
            draftType: Z,
            parsedMessage: y,
            options: k = {},
            raiseEndpointErrors: D = !1,
          } = e,
          M = new _.Z(L.ANM.MESSAGES(f)),
          U = new O.o(),
          x = {
            content: "",
            nonce: "",
            channel_id: f,
            type: L.uaV.DEFAULT,
            sticker_ids: null == k ? void 0 : k.stickerIds,
            poll: null == k ? void 0 : k.poll,
          };
        null != y && (x.content = null == y ? void 0 : y.content),
          null != A.Z.getPendingReply(f) &&
            ((x.type = L.uaV.REPLY),
            (x.message_reference = k.messageReference),
            (x.allowed_mentions = k.allowedMentions),
            (0, N.A6)(f));
        let [G, w] = (0, b.Z)(x.content);
        G &&
          ((x.content = w),
          (x.flags = (0, S.pj)(
            null !== (t = x.flags) && void 0 !== t ? t : 0,
            L.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let B = null !== (n = k.nonce) && void 0 !== n ? n : (0, g.r)(),
          V = (0, C.ZP)({
            channelId: f,
            content: x.content,
            tts: null !== (r = null == y ? void 0 : y.tts) && void 0 !== r && r,
            type: x.type,
            messageReference: x.message_reference,
            flags: x.flags,
            nonce: B,
            poll: (0, v.x9)(k.poll),
          });
        return (
          ((x.nonce = B),
          M.on("start", (e) => {
            (d = (0, E.e5)({ ...V, id: e.id })),
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
              (0, m.x)({
                fileItems: e.items,
                failureCode: t,
                errorMessage: null == r ? void 0 : r.msg,
              }),
              t === L.evJ.EXPLICIT_CONTENT)
            ) {
              o.Z.sendExplicitMediaClydeError(
                f,
                null == n ? void 0 : n.attachments,
                p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (t === L.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: t, message: null == n ? void 0 : n.message },
                r =
                  null == d
                    ? null
                    : { type: s.$V.SEND, message: { ...d, channelId: f } };
              (0, u.openUploadError)({
                title: P.intl.string(P.t.B3vFdX),
                help: (0, h.uF)(r, e),
              });
              return;
            }
            if (t !== L.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (D)
                U.reject(new c.Hx({ status: t, body: null != n ? n : {} }, t));
              else {
                var _;
                (0, u.openUploadError)({
                  title: P.intl.string(P.t.B3vFdX),
                  help:
                    null !== (_ = null == n ? void 0 : n.message) &&
                    void 0 !== _
                      ? _
                      : P.intl.string(P.t.zMEjJi),
                });
              }
              "" !== x.content &&
                "" === I.Z.getDraft(f, Z) &&
                a.Z.saveDraft(f, x.content, Z),
                0 === T.Z.getUploadCount(f, Z) &&
                  l.Z.setUploads({ channelId: f, uploads: R, draftType: Z });
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
          await M.uploadFiles(R, x),
          U.resolve(),
          U.promise
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
            o = Array.from(n).map((e, n) => {
              let r = null != a ? a[n] : {};
              return new d.n(
                { file: e, platform: f.ow.WEB, isThumbnail: i, ...r },
                t,
              );
            });
          R({ channelId: t, uploads: o, draftType: r });
        },
        upload: function e(t) {
          let {
              channelId: n,
              file: l,
              draftType: c,
              message: s,
              hasSpoiler: d,
              filename: f,
            } = t,
            h = { content: "", tts: !1, hasSpoiler: d, filename: f };
          if (null != s) {
            (h.content = s.content),
              (h.tts = s.tts),
              (h.channel_id = s.channel_id);
            let e = A.Z.getPendingReply(n);
            if (null != e) {
              let t = o.Z.getSendMessageOptionsForReply(e);
              (h.type = L.uaV.REPLY),
                (h.message_reference = t.messageReference),
                (h.allowed_mentions = t.allowedMentions),
                (0, N.A6)(n);
            }
          }
          let E = new _.Z(L.ANM.MESSAGES(n));
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
                (0, m.x)({ fileItems: t.items, failureCode: d }),
                d === L.evJ.EXPLICIT_CONTENT)
              ) {
                o.Z.sendExplicitMediaClydeError(
                  n,
                  null == f ? void 0 : f.attachments,
                  p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, u.openUploadError)({
                title: P.intl.string(P.t.B3vFdX),
                help: P.intl.format(P.t.gIlRx8, {
                  onClick: () => {
                    (0, r.closeModal)(u.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: n, file: l, draftType: c, message: s });
                  },
                }),
              }),
                "" !== h.content &&
                  "" === I.Z.getDraft(n, c) &&
                  a.Z.saveDraft(n, h.content, c);
            }),
            E.on("complete", (e) => {
              i.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: n, file: e });
            }),
            E.upload(l, h);
        },
        uploadFiles: R,
        cancel(e) {
          i.Z.dispatch({ type: "UPLOAD_CANCEL_REQUEST", file: e }),
            null != e.draftContent &&
              null != e.channelId &&
              "" === I.Z.getDraft(e.channelId, I.d.ChannelMessage) &&
              i.Z.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: I.d.ChannelMessage,
              });
        },
      };
    },
    400354: function (e, t, n) {
      n.d(t, {
        l: function () {
          return l;
        },
      });
      var r = n(200651),
        i = n(192379),
        a = n(709014);
      let o = {
          deafen: { name: "deafen", start: 0, duration: 70 },
          undeafen: { name: "undeafen", start: 110, duration: 70 },
          hover_undeafened: {
            name: "hover_undeafened",
            start: 200,
            duration: 70,
          },
          hover_deafened: { name: "hover_deafened", start: 300, duration: 70 },
        },
        l = (e) => {
          let t = i.useRef(null),
            l = i.useRef(e);
          l.current = e;
          let u = i.useMemo(
              () => () => {
                null != t.current && t.current.play(e);
              },
              [e],
            ),
            c = i.useCallback(() => {
              if (null == t.current) return;
              let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
              t.current.play(n);
            }, [e]),
            s = i.useCallback(() => {
              if (null == t.current) return;
              let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
              t.current.stopIfPlaying(n);
            }, [e]);
          return {
            events: { onClick: u, onMouseEnter: c, onMouseLeave: s },
            play: u,
            Component: i.useCallback(
              (e) =>
                (0, r.jsx)(a.L, {
                  ...e,
                  src: () => n.e("68449").then(n.t.bind(n, 406785, 19)),
                  ref: t,
                  initialAnimation: l.current,
                  markers: o,
                }),
              [],
            ),
          };
        };
    },
    582019: function (e, t, n) {
      n.d(t, {
        j: function () {
          return l;
        },
      });
      var r = n(200651),
        i = n(192379),
        a = n(709014);
      let o = { all: { name: "all", start: 0, duration: 66 } },
        l = () => {
          let e = i.useRef(null),
            t = i.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            l = i.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            u = i.useCallback(() => {
              null != e.current && e.current.stopIfPlaying("all");
            }, []);
          return {
            events: { onClick: t, onMouseEnter: l, onMouseLeave: u },
            play: t,
            Component: i.useCallback(
              (t) =>
                (0, r.jsx)(a.L, {
                  ...t,
                  src: () => n.e("66944").then(n.t.bind(n, 166174, 19)),
                  ref: e,
                  markers: o,
                }),
              [],
            ),
          };
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
        o = n(476326),
        l = n(861990),
        u = n(388032);
      class c extends a.Z {
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
          let u = [];
          this.files.forEach((e, t) => {
            let n = (0, l.B)(e, t);
            e.item.platform === o.ow.WEB && u.push({ ...n });
          }),
            (a =
              null != n && null != t
                ? this._addAttachmentsToPayload(t, n, u)
                : { ...t, attachments: u });
          let c = { url: this._url, body: a, signal: e, rejectWithError: !1 },
            s = "POST" === this._method ? r.tn.post : r.tn.patch;
          try {
            let e = await s(c);
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
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(442837),
        i = n(317381);
      function a() {
        return (0, r.e7)([i.ZP], () => i.ZP.getCurrentEmbeddedActivity());
      }
    },
    570928: function (e, t, n) {
      var r,
        i,
        a,
        o,
        l = n(200651),
        u = n(192379),
        c = n(120356),
        s = n.n(c),
        d = n(207341);
      class f extends (o = u.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            hoverText: n,
            className: r,
            forceHover: i,
            ...a
          } = this.props;
          return (0, l.jsxs)("div", {
            ...a,
            className: s()(r, d.hoverRoll, {
              [d.disabled]: null == n,
              [d.forceHover]: i,
            }),
            children: [
              (0, l.jsx)(e, { className: d.hovered, children: n }),
              (0, l.jsx)(e, { className: d.default, children: t }),
            ],
          });
        }
      }
      (a = { tag: "div", forceHover: !1 }),
        (i = "defaultProps") in (r = f)
          ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = a),
        (t.Z = f);
    },
    571250: function (e, t, n) {
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
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        a = n(846027),
        o = n(468026),
        l = n(388032);
      function u(e, t) {
        if (e) {
          (0, i.openModal)((e) =>
            (0, r.jsx)(o.default, {
              ...e,
              title: l.intl.string(l.t.QZ7WSU),
              body: l.intl.string(l.t.Tl9JpK),
            }),
          );
          return;
        }
        a.Z.toggleSelfDeaf({ location: t });
      }
    },
    97797: function (e, t, n) {
      n.d(t, {
        i: function () {
          return a;
        },
      });
      var r = n(981631),
        i = n(388032);
      function a(e) {
        let {
          username: t,
          usernameOnClickHandler: n = r.dG4,
          productName: a,
        } = e;
        return i.intl.formatToParts(i.t.w4iXs7, {
          username: t,
          usernameHook: n,
          productName: a,
        });
      }
    },
    523361: function (e, t, n) {
      n.d(t, {
        HG: function () {
          return l;
        },
        Md: function () {
          return o;
        },
        Q8: function () {
          return a;
        },
      });
      var r = n(373228),
        i = n(388032);
      let a = () => [i.intl.string(i.t.b6wEe3), i.intl.string(i.t.i8o9hY)],
        o = () => [i.intl.string(i.t.vqnToa), i.intl.string(i.t["9yh+dH"])],
        l = [
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
      n.d(t, {
        PA: function () {
          return d;
        },
        Tn: function () {
          return s;
        },
        _i: function () {
          return C;
        },
        eI: function () {
          return h;
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
        a = n(430824),
        o = n(594174);
      n(709054), n(523361);
      var l = n(981631),
        u = n(388032);
      function c(e) {
        return e;
      }
      function s(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a,
          } = e,
          { content: o, formatParams: l } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a,
          });
        return u.intl.format(o, l);
      }
      function d(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a,
          } = e,
          { content: o, formatParams: l } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a,
          });
        return u.intl.formatToParts(o, l);
      }
      function f(e, t) {
        var n, r;
        let i = a.Z.getGuild(e),
          o =
            null !== (n = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== n
              ? n
              : 0;
        return {
          guild: i,
          totalMonthsSubscribed: o,
          showWithDuration: o > 0,
          isRenewal:
            null !== (r = null == t ? void 0 : t.is_renewal) &&
            void 0 !== r &&
            r,
        };
      }
      function _(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: r = c,
            roleSubscriptionOnClickHandler: i = l.dG4,
            guildId: a,
            roleSubscriptionData: o,
          } = e,
          {
            guild: s,
            totalMonthsSubscribed: d,
            showWithDuration: _,
            isRenewal: p,
          } = f(a, o);
        return (
          (t = _ ? (p ? u.t.Iy66Mz : u.t.eCgb2d) : p ? u.t.mPTTdn : u.t.mYjFFx),
          {
            content: t,
            formatParams: {
              username: n,
              usernameHook: r,
              guildName: null == s ? void 0 : s.name,
              handleGuildNameClick: i,
              tierName: null == o ? void 0 : o.tier_name,
              months: d,
            },
          }
        );
      }
      function p(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: r = c,
            roleSubscriptionOnClickHandler: i = l.dG4,
            guildId: a,
            roleSubscriptionData: o,
          } = e,
          {
            guild: s,
            totalMonthsSubscribed: d,
            showWithDuration: _,
            isRenewal: p,
          } = f(a, o);
        return (
          (t = _
            ? p
              ? u.t.OQ0OU1
              : u.t["+N9bxs"]
            : p
              ? u.t.OxP1ND
              : u.t["6Z1E+/"]),
          u.intl.formatToParts(t, {
            guildName: null == s ? void 0 : s.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: d,
          })
        );
      }
      function h(e) {
        return (0, i.l)(e);
      }
      function E(e, t, n, i) {
        var a;
        r.ZP.trackWithMetadata(
          l.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (a = o.default.getCurrentUser()) || void 0 === a
                ? void 0
                : a.id,
            channel_id: t,
            message_id: n,
            role_subscription_listing_id: i,
          },
        );
      }
      function C(e, t) {
        var n;
        return {
          guild_id: e.guild_id,
          sender:
            null === (n = o.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id,
          target_user: t.author.id,
          channel_id: e.id,
          message_id: t.id,
        };
      }
    },
    989373: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n(200651);
      n(192379);
      var i = n(238246),
        a = n(554370);
      function o(e) {
        let { withTitleBar: t, windowKey: n } = e;
        return (0, r.jsx)(i.Z, {
          withTitleBar: t,
          windowKey: n,
          title: "Discord Overlay",
          children: (0, r.jsx)(a.Z, {}),
        });
      }
      n(606206), n(371467);
    },
    46145: function (e, t, n) {
      n(47120), n(733860);
      var r,
        i = n(442837),
        a = n(570140),
        o = n(592125),
        l = n(271383),
        u = n(430824);
      function c(e, t, n) {
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
      let s = [],
        d = new Set();
      class f extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          var t;
          this.waitFor(l.ZP, u.Z, o.Z),
            (d = new Set([
              ...(s =
                null !== (t = null == e ? void 0 : e.channelHistory) &&
                void 0 !== t
                  ? t
                  : []),
            ]));
        }
        getState() {
          return { channelHistory: s };
        }
        getChannelHistory() {
          return s;
        }
      }
      c(f, "displayName", "RecentVoiceChannelStore"),
        c(f, "persistKey", "RecentVoiceChannelStore");
      let _ = new f(a.Z, {
        CONNECTION_OPEN: function () {
          d = new Set([...s]);
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
                    null === (t = o.Z.getChannel(r)) || void 0 === t
                      ? void 0
                      : t.isVocal()) &&
                void 0 !== n &&
                n
              ) ||
              d.has(r)
            ) &&
            (s.unshift(r),
            d.add(r),
            s.length > 10 && ((s.length = 10), (d = new Set([...s]))),
            !0)
          );
        },
      });
      t.Z = _;
    },
    499401: function (e, t, n) {
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
      n.d(t, {
        B2: function () {
          return u;
        },
        DS: function () {
          return o;
        },
        hj: function () {
          return c;
        },
        nh: function () {
          return l;
        },
      });
      var r = n(63063),
        i = n(981631),
        a = n(388032);
      function o(e) {
        let {
          application: t,
          username: n,
          usernameHook: o = i.dG4,
          applicationNameHook: l = i.dG4,
        } = e;
        return null != t
          ? a.intl.format(a.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: o,
              otherUsernameHook: l,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : a.intl.format(a.t["+6V2sb"], {
              username: n,
              usernameHook: o,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function l(e) {
        let {
          application: t,
          username: n,
          usernameHook: o = i.dG4,
          applicationNameHook: l = i.dG4,
        } = e;
        return null != t
          ? a.intl.format(a.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: o,
              otherUsernameHook: l,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : a.intl.format(a.t.sAX6rq, {
              username: n,
              usernameHook: o,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function u(e) {
        let {
          application: t,
          username: n,
          usernameOnClick: o,
          applicationNameOnClick: l,
          medium: u,
        } = e;
        return null != t
          ? a.intl.formatToParts(a.t["8r+Z+P"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: o,
              otherUsernameOnClick: l,
              medium: u,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : a.intl.formatToParts(a.t.ojysqa, {
              username: n,
              usernameOnClick: o,
              medium: u,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
      function c(e) {
        let {
          application: t,
          username: n,
          usernameOnClick: o,
          applicationNameOnClick: l,
          medium: u,
        } = e;
        return null != t
          ? a.intl.formatToParts(a.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: o,
              otherUsernameOnClick: l,
              medium: u,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : a.intl.formatToParts(a.t["x2CN/f"], {
              username: n,
              usernameOnClick: o,
              medium: u,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return a;
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
      function a(e) {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    723170: function (e, t, n) {
      n.d(t, {
        B: function () {
          return d;
        },
        J: function () {
          return s;
        },
      }),
        n(789020);
      var r = n(442837),
        i = n(592125),
        a = n(9156),
        o = n(630388),
        l = n(569471),
        u = n(124368),
        c = n(981631);
      function s(e) {
        let t = l.Z.flags(e.id);
        if (null == t) return u.iN.NO_MESSAGES;
        if ((0, o.yE)(t, u.iN.ALL_MESSAGES)) return u.iN.ALL_MESSAGES;
        if ((0, o.yE)(t, u.iN.ONLY_MENTIONS)) return u.iN.ONLY_MENTIONS;
        if ((0, o.yE)(t, u.iN.NO_MESSAGES)) return u.iN.NO_MESSAGES;
        let n = i.Z.getChannel(e.parent_id);
        if (null == n || a.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id))
          return u.iN.NO_MESSAGES;
        let r = a.ZP.resolvedMessageNotifications(n);
        return r === c.bL.NO_MESSAGES
          ? u.iN.NO_MESSAGES
          : r === c.bL.ONLY_MENTIONS
            ? u.iN.ONLY_MENTIONS
            : u.iN.ALL_MESSAGES;
      }
      function d(e) {
        return (0, r.e7)([l.Z, a.ZP, i.Z], () => s(e), [e]);
      }
    },
    879815: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(442837),
        i = n(314897),
        a = n(131951),
        o = n(979651);
      function l(e) {
        return (0, r.cj)(
          [o.Z, a.Z, i.default],
          () =>
            (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : o.Z,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : a.Z,
                l =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : i.default,
                u =
                  null != e ? n.getVoiceState(e.getGuildId(), l.getId()) : null;
              return {
                selfDeaf: r.isSelfDeaf(),
                deaf:
                  null !== (t = null == u ? void 0 : u.deaf) &&
                  void 0 !== t &&
                  t,
              };
            })(e, o.Z, a.Z, i.default),
          [e],
        );
      }
    },
    606206: function (e, t, n) {
      let r;
      n(47120), n(653041), n(411104);
      var i,
        a,
        o,
        l,
        u = n(442837),
        c = n(570140),
        s = n(278323),
        d = n(212819),
        f = n(933557),
        _ = n(592125),
        p = n(430824),
        h = n(293273),
        E = n(158776),
        C = n(699516),
        g = n(594174),
        m = n(55589),
        v = n(981631);
      let N = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
        A = null,
        b = null,
        I = [],
        T = [];
      function S(e) {
        (I = [...I, e]),
          (T = T.map((e) => ({ ...e, sent: I.includes(e.data.record.id) }))),
          R.emitChange();
      }
      function O() {
        (A = null), null != r && (r.destroy(), (r = null)), null != b && b();
      }
      function L() {
        let e =
          null != A && null != A.application_id
            ? h.Z.getApplicationActivity(A.application_id)
            : null;
        if (null != A && (null == e || null == e.party || null == e.party.id))
          return O();
      }
      class P extends (i = u.ZP.Store) {
        initialize() {
          this.waitFor(h.Z);
        }
        getActivity() {
          return A;
        }
        getQuery() {
          var e;
          return null !== (e = null == r ? void 0 : r.query) && void 0 !== e
            ? e
            : "";
        }
        getResults() {
          return T;
        }
      }
      (l = "ActivityInviteModalStore"),
        (o = "displayName") in (a = P)
          ? Object.defineProperty(a, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[o] = l);
      let R = new P(c.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
          (A = e.activity),
            (b = e.resolve),
            (I = []),
            null == r &&
              (r = new d.ZP(
                (e, t) => {
                  var n;
                  return (
                    (n = e),
                    void ((T = (
                      "" === t.trim()
                        ? (function () {
                            let e = [];
                            return (
                              m.Z.getPrivateChannelIds().forEach((t) => {
                                let n = _.Z.getChannel(t);
                                if (null != n)
                                  if (n.type === v.d4z.DM) {
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
                            sent: I.includes(t.id),
                            status: E.Z.getStatus(t.id),
                            data: e,
                          };
                        }
                        case d.h8.TEXT_CHANNEL: {
                          let { record: t } = e,
                            n = _.Z.getChannel(t.parent_id),
                            r = p.Z.getGuild(t.guild_id);
                          return {
                            type: d.h8.TEXT_CHANNEL,
                            sent: I.includes(t.id),
                            categoryName:
                              null != n ? (0, f.F6)(n, g.default, C.Z) : "",
                            guildName: null != r ? r.toString() : "",
                            data: e,
                          };
                        }
                        case d.h8.GROUP_DM: {
                          let { record: t } = e;
                          return {
                            type: d.h8.GROUP_DM,
                            sent: I.includes(t.id),
                            data: e,
                          };
                        }
                        default:
                          throw Error("Unknown Result Type: ".concat(e.type));
                      }
                    })),
                    R.emitChange())
                  );
                },
                N,
                100,
              )),
            r.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
          let { query: t } = e;
          null != r && r.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
          if (null == A) return;
          let t = e.channelId,
            n = e.userId;
          null != t
            ? s.Z.sendActivityInvite({
                channelId: t,
                type: v.mFx.JOIN,
                activity: A,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => S(t))
            : null != n &&
              s.Z.sendActivityInviteUser({
                userId: n,
                type: v.mFx.JOIN,
                activity: A,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => S(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: O,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          return !!t && null != A && (O(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: L,
        RPC_APP_DISCONNECTED: L,
      });
      t.Z = 12633 == n.j ? R : null;
    },
    55589: function (e, t, n) {
      let r, i, a;
      n(47120), n(653041);
      var o,
        l,
        u,
        c,
        s,
        d,
        f = n(913527),
        _ = n.n(f),
        p = n(442837),
        h = n(759174),
        E = n(570140),
        C = n(355298),
        g = n(333984),
        m = n(131704),
        v = n(592125),
        N = n(430824),
        A = n(306680),
        b = n(9156),
        I = n(594174),
        T = n(709054),
        S = n(176505);
      ((u = o || (o = {})).DEFAULT = "DEFAULT"), (u.FAVORITE = "FAVORITE");
      let O = new h.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function L(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let r =
                    null !==
                      (n =
                        null !== (t = A.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  i = e.isMessageRequestTimestamp;
                if (null != i) {
                  let e = _()(i).valueOf(),
                    t = T.default.fromTimestamp(e);
                  return T.default.compare(r, t) > 0 ? r : t;
                }
                return r;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: C.Z.isMessageRequest(e.id) || g.Z.isSpam(e.id),
        };
      }
      function P() {
        O.clear(),
          Object.values(v.Z.getMutablePrivateChannels()).forEach((e) => {
            O.set(e.id, L(e));
          });
      }
      function R() {
        let e = v.Z.getMutablePrivateChannels();
        for (let t in e) O.set(t, L(e[t]));
      }
      let Z =
        ((r = []),
        (i = []),
        (a = []),
        () => {
          let e = O.values("FAVORITE"),
            t = O.values("DEFAULT");
          return (
            (r !== e || i !== t) &&
              ((a = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return a.push(t);
              }),
              (r = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return a.push(t);
              }),
              (i = t)),
            a
          );
        });
      class y extends (l = p.ZP.Store) {
        initialize() {
          this.waitFor(v.Z, N.Z, I.default, C.Z, b.ZP),
            this.syncWith([b.ZP, C.Z], P);
        }
        getPrivateChannelIds() {
          return Z();
        }
        getSortedChannels() {
          return [O.values("FAVORITE"), O.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            O.values().forEach((t) => {
              let { channelId: n, lastMessageId: r } = t;
              e[n] = r;
            }),
            e
          );
        }
      }
      (d = "PrivateChannelSortStore"),
        (s = "displayName") in (c = y)
          ? Object.defineProperty(c, s, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (c[s] = d),
        (t.Z = new y(E.Z, {
          CONNECTION_OPEN: P,
          CONNECTION_OPEN_SUPPLEMENTAL: P,
          OVERLAY_INITIALIZE: P,
          CACHE_LOADED: R,
          CACHE_LOADED_LAZY: R,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, m.hv)(e.type) || O.has(e.id)) && O.set(e.id, L(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, m.hv)(t.type) || t.id === S.V) return !1;
            O.set(t.id, L(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return O.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!O.has(t)) return !1;
            let r = v.Z.getChannel(t);
            return null != r && O.set(t, L(r, n.id));
          },
          GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return O.delete(t);
          },
          LOGOUT: function () {
            O.clear();
          },
        }));
    },
    352736: function (e, t, n) {
      var r,
        i,
        a = n(25209),
        o = n(97797),
        l = n(35125),
        u = n(786761),
        c = n(739566),
        s = n(499401),
        d = n(693912),
        f = n(23750),
        _ = n(314897),
        p = n(592125),
        h = n(430824),
        E = n(594174),
        C = n(5192),
        g = n(709054),
        m = n(981631),
        v = n(388032);
      let N = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((r = i || (i = {})).NORMAL = "NORMAL"), (r.CLAN = "CLAN");
      let A = () => [
          v.t["0cuj7u"],
          v.t["MuW+CA"],
          v.t.osqpHR,
          v.t["5ToSh4"],
          v.t.JEB8pq,
          v.t.pkOV5e,
          v.t.kRb1Jy,
          v.t.EmKLY2,
          v.t.rPtBnZ,
          v.t["5B/ekZ"],
          v.t.ESNC3d,
          v.t["Iw6d8/"],
          v.t.WecSZ2,
        ],
        b = () => [
          v.t.Jm6e09,
          v.t.MGRnRU,
          v.t.EXOEGh,
          v.t["5uCTFB"],
          v.t.rl45Qk,
          v.t.Bh9zpa,
          v.t.RdEy1N,
          v.t.qcdp09,
          v.t.F7w2Rk,
          v.t.gSyOgI,
          v.t.uYgqv7,
          v.t["b/1SBQ"],
          v.t.LhebZG,
        ],
        I = () => [
          v.t["20E/ys"],
          v.t["oa8+kp"],
          v.t.zoKkXl,
          v.t.FP9aS0,
          v.t.E5Zj1d,
          v.t["6Anmws"],
          v.t.sR78HR,
          v.t.gA9qPz,
          v.t.Hkiyp6,
          v.t.w1HMho,
        ],
        T = () => [
          v.t["8fy3DQ"],
          v.t.UproUV,
          v.t["7l3EyM"],
          v.t.GToyaG,
          v.t["DUs+Zm"],
          v.t.yLkbfn,
          v.t.oWdvws,
          v.t.tOoKTE,
          v.t["VM7+Oj"],
          v.t["hJx/u7"],
        ],
        S = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return A();
            case "CLAN":
              return I();
          }
        },
        O = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return b();
            case "CLAN":
              return T();
          }
        };
      function L(e, t) {
        let n = O(t),
          r = g.default.extractTimestamp(e) % n.length;
        return n[r];
      }
      function P(e) {
        return (0, a.Rp)(
          v.intl.formatToParts(v.t["ihxM9/"], {
            username: e,
            usernameOnClick: m.dG4,
          }),
        );
      }
      function R(e, t) {
        let n = p.Z.getChannel(t);
        return null == n || null == h.Z.getGuild(n.getGuildId())
          ? P(e)
          : (0, a.Rp)(
              v.intl.formatToParts(v.t["ihxM9/"], {
                username: e,
                usernameOnClick: m.dG4,
              }),
            );
      }
      function Z(e) {
        var t;
        return (
          null === (t = h.Z.getGuild(e)) || void 0 === t
            ? void 0
            : t.hasFeature(m.oNc.CLAN)
        )
          ? "CLAN"
          : "NORMAL";
      }
      t.Z = {
        stringify: function (e, t) {
          var n, r, i, g;
          let N = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
            A =
              null != N && "string" != typeof N
                ? E.default.getUser(N.id)
                : void 0,
            b = e.channel_id,
            I = C.ZP.getName(null, b, e.author);
          switch (e.type) {
            case m.uaV.RECIPIENT_ADD:
              if (null == A) return;
              return (0, a.Rp)(
                v.intl.formatToParts(v.t["7/Xl0d"], {
                  username: I,
                  usernameOnClick: m.dG4,
                  otherUsername: C.ZP.getName(null, b, A),
                  otherUsernameOnClick: m.dG4,
                }),
              );
            case m.uaV.RECIPIENT_REMOVE:
              if (null == A) return;
              let T = e.author;
              if (null == T || T.id === A.id)
                return (0, a.Rp)(
                  v.intl.formatToParts(v.t["Qn5+LS"], {
                    username: I,
                    usernameOnClick: m.dG4,
                  }),
                );
              return (0, a.Rp)(
                v.intl.formatToParts(v.t.QtZ0RE, {
                  username: I,
                  usernameOnClick: m.dG4,
                  otherUsername: C.ZP.getName(null, b, A),
                  otherUsernameOnClick: m.dG4,
                }),
              );
            case m.uaV.CALL:
              let { call: S } = e;
              if (null != S && -1 === S.participants.indexOf(_.default.getId()))
                return (0, a.Rp)(
                  v.intl.formatToParts(v.t.DbgSAw, {
                    username: I,
                    usernameOnClick: m.dG4,
                  }),
                );
              return;
            case m.uaV.CHANNEL_NAME_CHANGE:
              return (0, a.Rp)(
                v.intl.formatToParts(
                  t.isForumPost() ? v.t["qa0e/v"] : v.t.XCPMEB,
                  {
                    username: I,
                    usernameOnClick: m.dG4,
                    channelName: e.content,
                  },
                ),
              );
            case m.uaV.CHANNEL_ICON_CHANGE:
              return (0, a.Rp)(
                v.intl.formatToParts(v.t.wypJZ2, {
                  username: I,
                  usernameOnClick: m.dG4,
                }),
              );
            case m.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, a.Rp)(
                v.intl.formatToParts(v.t["/M60j4"], {
                  username: I,
                  usernameOnClick: m.dG4,
                }),
              );
            case m.uaV.USER_JOIN:
              let O = Z(t.guild_id);
              return (0, a.Rp)(
                v.intl.formatToParts(L(e.id, O), {
                  username: I,
                  usernameOnClick: m.dG4,
                }),
              );
            case m.uaV.GUILD_BOOST:
              return P(I);
            case m.uaV.GUILD_BOOST_TIER_1:
            case m.uaV.GUILD_BOOST_TIER_2:
            case m.uaV.GUILD_BOOST_TIER_3:
              return R(I, b);
            case m.uaV.GUILD_INVITE_REMINDER:
              return v.intl.string(v.t.gxyKvr);
            case m.uaV.THREAD_STARTER_MESSAGE:
              return v.intl.formatToPlainString(v.t["B8H+Cg"], {
                username: I,
                threadName: t.name,
              });
            case m.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (e instanceof f.ZP) return null;
              return (0, a.Rp)(
                (0, l.vp)({
                  username: I,
                  guildId: t.guild_id,
                  roleSubscriptionData: e.role_subscription_data,
                }),
              );
            case m.uaV.PURCHASE_NOTIFICATION:
              if (
                e instanceof f.ZP ||
                (null === (i = e.purchase_notification) || void 0 === i
                  ? void 0
                  : null === (r = i.guild_product_purchase) || void 0 === r
                    ? void 0
                    : r.product_name) == null
              )
                return null;
              return (0, a.Rp)(
                (0, o.i)({
                  username: I,
                  productName:
                    e.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case m.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (e instanceof f.ZP) return null;
              let y = (0, c.ZH)((0, u.e5)(e));
              return (0, a.Rp)(
                (0, s.Y)({ application: e.application, username: y.nick }),
              );
            case m.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (e instanceof f.ZP) return null;
              return (0, a.Rp)(
                (0, d.B2)({
                  application: e.application,
                  username: (0, c.ZH)((0, u.e5)(e)).nick,
                }),
              );
            case m.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (e instanceof f.ZP) return null;
              return (0, a.Rp)(
                (0, d.hj)({
                  application: e.application,
                  username: (0, c.ZH)((0, u.e5)(e)).nick,
                }),
              );
            case m.uaV.AUTO_MODERATION_ACTION:
              if (
                null === (g = e.embeds) || void 0 === g
                  ? void 0
                  : g.some((e) => {
                      let { type: t } = e;
                      return t === m.hBH.AUTO_MODERATION_NOTIFICATION;
                    })
              )
                return (function (e) {
                  let t = p.Z.getChannel(e);
                  if (null == t) return null;
                  let n = h.Z.getGuild(t.getGuildId());
                  return null == n
                    ? null
                    : (0, a.Rp)(
                        v.intl.formatToParts(v.t["a+lJKi"], {
                          guildName: n.name,
                        }),
                      );
                })(b);
              return e.content;
            case m.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (e, t, n) {
                let r = p.Z.getChannel(t);
                if (null == r) return null;
                let i = h.Z.getGuild(r.getGuildId());
                return null == i
                  ? null
                  : (0, a.Rp)(
                      v.intl.formatToParts(v.t.iOuWPj, {
                        username: e,
                        guildName: i.name,
                        time:
                          "" !== n
                            ? new Date(n).toLocaleString(v.intl.currentLocale, {
                                hour: "numeric",
                                minute: "2-digit",
                              })
                            : "",
                      }),
                    );
              })(I, b, e.content);
            case m.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (e, t) {
                let n = p.Z.getChannel(t);
                if (null == n) return null;
                let r = h.Z.getGuild(n.getGuildId());
                return null == r
                  ? null
                  : (0, a.Rp)(
                      v.intl.formatToParts(v.t.axmbpq, {
                        username: e,
                        guildName: r.name,
                      }),
                    );
              })(I, b);
            default:
              return e.content;
          }
        },
        getSystemMessageUserJoin: function (e, t) {
          let n = S(t),
            r = g.default.extractTimestamp(e) % n.length;
          return n[r];
        },
        getSystemMessageUserJoinMobile: L,
        getSystemMessageBotJoin: function (e) {
          return null == N[e]
            ? null
            : v.intl.format(v.t.xw1Ij4, {
                learnOnClick: { onClick: () => window.open(N[e]) },
              });
        },
        getWelcomeMessageKind: Z,
      };
    },
    207341: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    720670: function (e, t, n) {
      e.exports = {
        pro: "pro_b5053a",
        tip: "tip_b5053a",
        block: "block_b5053a",
        inline: "inline_b5053a",
      };
    },
    250145: function (e, t, n) {
      e.exports = {
        container: "container_e2d331",
        activityCard: "activityCard_e2d331",
        row: "row_e2d331",
        inviteFriendsButton: "inviteFriendsButton_e2d331",
        avatar: "avatar_e2d331",
        details: "details_e2d331",
        usernameWrapper: "usernameWrapper_e2d331",
        username: "username_e2d331",
        inviteButton: "inviteButton_e2d331",
        inviteButtonWrapper: "inviteButtonWrapper_e2d331",
        inviteButtonInner: "inviteButtonInner_e2d331",
        liveIndicator: "liveIndicator_e2d331",
        badgesContainer: "badgesContainer_e2d331",
      };
    },
    290510: function (e, t, n) {
      e.exports = {
        clickZoneDebugContainer: "clickZoneDebugContainer_afd0a0",
        clickZone: "clickZone_afd0a0",
        clickBackground: "clickBackground_afd0a0",
        clickable: "clickable_afd0a0",
      };
    },
    629769: function (e, t, n) {
      e.exports = {
        dismissButton: "dismissButton_a9614f",
        dismissIcon: "dismissIcon_a9614f",
      };
    },
    33806: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c58c1c",
        unlocked: "unlocked_c58c1c",
        lockExtras: "lockExtras_c58c1c",
        operation: "operation_c58c1c",
        resizeNorth: "resizeNorth_c58c1c handle_c58c1c",
        resizeSouth: "resizeSouth_c58c1c handle_c58c1c",
        resizeNSCursor: "resizeNSCursor_c58c1c",
        resizeWest: "resizeWest_c58c1c handle_c58c1c",
        resizeEast: "resizeEast_c58c1c handle_c58c1c",
        resizeEWCursor: "resizeEWCursor_c58c1c",
        resizeNorthWest: "resizeNorthWest_c58c1c handle_c58c1c",
        resizeNorthEast: "resizeNorthEast_c58c1c handle_c58c1c",
        resizeSouthWest: "resizeSouthWest_c58c1c handle_c58c1c",
        resizeSouthEast: "resizeSouthEast_c58c1c handle_c58c1c",
        resizeNWSECursor: "resizeNWSECursor_c58c1c",
        resizeNESWCursor: "resizeNESWCursor_c58c1c",
        extras: "extras_c58c1c",
        extrasBottomOriented: "extrasBottomOriented_c58c1c",
        extrasRightOriented: "extrasRightOriented_c58c1c",
      };
    },
    705617: function (e, t, n) {
      e.exports = {
        gridContainer: "gridContainer_dcc220",
        horizontal: "horizontal_dcc220",
        vertical: "vertical_dcc220",
        tileContainer: "tileContainer_dcc220",
        tile: "tile_dcc220",
      };
    },
    757152: function (e, t, n) {
      e.exports = { goLiveGridContainer: "goLiveGridContainer_c324b1" };
    },
    96685: function (e, t, n) {
      e.exports = {
        buttonContainer: "buttonContainer_b1ba99",
        keybind: "keybind_b1ba99",
        button: "button_b1ba99",
      };
    },
    111519: function (e, t, n) {
      e.exports = { key: "key_da7116" };
    },
    668674: function (e, t, n) {
      e.exports = {
        videoDev: "videoDev_b99764",
        overlay: "overlay_b99764",
        overlayBackground: "overlayBackground_b99764",
        overlayActive: "overlayActive_b99764",
        overlayLocked: "overlayLocked_b99764",
        closeContainer: "closeContainer_b99764",
        invalidContainer: "invalidContainer_b99764",
        inactiveContainer: "inactiveContainer_b99764",
        layoutLocked: "layoutLocked_b99764",
        layoutUnlocked: "layoutUnlocked_b99764 layoutLocked_b99764",
      };
    },
    269041: function (e, t, n) {
      e.exports = {
        debugMode: "debugMode_f4091c",
        clickable: "clickable_f4091c",
      };
    },
    474263: function (e, t, n) {
      e.exports = {
        button: "button_a467e9",
        cutoutContainer: "cutoutContainer_a467e9",
        toggledCutoutContainer: "toggledCutoutContainer_a467e9",
        separatorDot: "separatorDot_a467e9",
        guildIconContainer: "guildIconContainer_a467e9",
        guildIcon: "guildIcon_a467e9",
        voiceChannelNameContainer: "voiceChannelNameContainer_a467e9",
        channelIcon: "channelIcon_a467e9",
        channelName: "channelName_a467e9",
      };
    },
    720870: function (e, t, n) {
      e.exports = {
        panelContainer: "panelContainer_d476d7",
        locked: "locked_d476d7",
        panelRow: "panelRow_d476d7",
        separator: "separator_d476d7",
      };
    },
    555018: function (e, t, n) {
      e.exports = { container: "container_c7fa60" };
    },
    253653: function (e, t, n) {
      e.exports = {
        videoList: "videoList_a6fa57",
        vertical: "vertical_a6fa57",
        tile: "tile_a6fa57",
      };
    },
    915990: function (e, t, n) {
      e.exports = {
        voiceUser: "voiceUser_cebb84",
        flipped: "flipped_cebb84",
        avatar: "avatar_cebb84",
        username: "username_cebb84",
        effect: "effect_cebb84",
        voiceIcons: "voiceIcons_cebb84",
        voiceIcon: "voiceIcon_cebb84",
        interactive: "interactive_cebb84",
        speaking: "speaking_cebb84",
      };
    },
    556351: function (e, t, n) {
      e.exports = {
        extrasContainer: "extrasContainer_b932b3",
        debug: "debug_b932b3",
        debugUnpinned: "debugUnpinned_b932b3",
        debugPinned: "debugPinned_b932b3",
      };
    },
    614043: function (e, t, n) {
      e.exports = {
        titleWrapper: "titleWrapper_e8dbc8 bgShade_e8dbc8",
        button: "button_e8dbc8 bgShade_e8dbc8",
        active: "active_e8dbc8",
      };
    },
    561990: function (e, t, n) {
      e.exports = { textArea: "textArea_daa88b" };
    },
    213973: function (e, t, n) {
      e.exports = {
        animationWrapper: "animationWrapper_eff2f7",
        clickZone: "clickZone_eff2f7",
        clickable: "clickable_eff2f7",
        overflowWrapper: "overflowWrapper_eff2f7",
        container: "container_eff2f7",
        iconAndDetails: "iconAndDetails_eff2f7",
        footer: "footer_eff2f7",
        details: "details_eff2f7",
        hint: "hint_eff2f7",
        dismissButton: "dismissButton_eff2f7",
        buttonContainer: "buttonContainer_eff2f7",
        button: "button_eff2f7",
        avatar: "avatar_eff2f7",
        icon: "icon_eff2f7",
      };
    },
    408052: function (e, t, n) {
      e.exports = { container: "container_a2d09c" };
    },
    401461: function (e, t, n) {
      e.exports = { container: "container_f19072" };
    },
    108983: function (e, t, n) {
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
    739949: function (e, t, n) {
      e.exports = {
        container: "container_feab95",
        title: "title_feab95",
        tabs: "tabs_feab95",
        tabBarItem: "tabBarItem_feab95",
        debugPanelStandalone: "debugPanelStandalone_feab95",
        debugPanelSection: "debugPanelSection_feab95",
      };
    },
    700883: function (e, t, n) {
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
      };
    },
    666790: function (e, t, n) {
      e.exports = {
        status: "status_dcb18f",
        hoverableStatus: "hoverableStatus_dcb18f",
      };
    },
    64570: function (e, t, n) {
      e.exports = {
        container: "container_f59a38",
        tag: "tag_f59a38",
        header: "header_f59a38",
        code: "code_f59a38",
      };
    },
    956731: function (e, t, n) {
      e.exports = {
        code: "code_e9fe13",
        chunk: "chunk_e9fe13",
        divider: "divider_e9fe13",
        codeText: "codeText_e9fe13",
        loading: "loading_e9fe13",
      };
    },
    606053: function (e, t, n) {
      e.exports = { container: "container_a7c5d3" };
    },
    557342: function (e, t, n) {
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
    601539: function (e, t, n) {
      e.exports = { soundButton: "soundButton_d608d3" };
    },
    549584: function (e, t, n) {
      e.exports = { label: "label_eaa344" };
    },
  },
]);
//# sourceMappingURL=cef35c3098bba3397c11.js.map
