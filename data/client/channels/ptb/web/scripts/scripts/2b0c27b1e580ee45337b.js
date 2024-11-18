"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8201"],
  {
    966390: function (e, t, n) {
      n(47120), n(789020);
      var i = n(481060),
        l = n(570140),
        r = n(430742),
        o = n(904245),
        a = n(166459),
        s = n(531643),
        u = n(881052),
        c = n(673750),
        d = n(141795),
        h = n(476326),
        f = n(680287),
        p = n(247206),
        m = n(539573),
        v = n(786761),
        g = n(3148),
        E = n(48854),
        _ = n(785359),
        C = n(79390),
        S = n(623292),
        Z = n(807092),
        I = n(467798),
        x = n(703558),
        N = n(117530),
        O = n(630388),
        T = n(226351),
        y = n(981631),
        b = n(388032);
      async function A(e) {
        var t, n, i;
        let d,
          {
            channelId: h,
            uploads: A,
            draftType: L,
            parsedMessage: R,
            options: k = {},
            raiseEndpointErrors: M = !1,
          } = e,
          w = new f.Z(y.ANM.MESSAGES(h)),
          P = new T.o(),
          j = {
            content: "",
            nonce: "",
            channel_id: h,
            type: y.uaV.DEFAULT,
            sticker_ids: null == k ? void 0 : k.stickerIds,
            poll: null == k ? void 0 : k.poll,
          };
        null != R && (j.content = null == R ? void 0 : R.content),
          null != Z.Z.getPendingReply(h) &&
            ((j.type = y.uaV.REPLY),
            (j.message_reference = k.messageReference),
            (j.allowed_mentions = k.allowedMentions),
            (0, S.A6)(h));
        let [D, z] = (0, I.Z)(j.content);
        D &&
          ((j.content = z),
          (j.flags = (0, O.pj)(
            null !== (t = j.flags) && void 0 !== t ? t : 0,
            y.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let U = null !== (n = k.nonce) && void 0 !== n ? n : (0, E.r)(),
          V = (0, g.ZP)({
            channelId: h,
            content: j.content,
            tts: null !== (i = null == R ? void 0 : R.tts) && void 0 !== i && i,
            type: j.type,
            messageReference: j.message_reference,
            flags: j.flags,
            nonce: U,
            poll: (0, C.x9)(k.poll),
          });
        return (
          ((j.nonce = U),
          w.on("start", (e) => {
            (d = (0, v.e5)({ ...V, id: e.id })),
              l.Z.dispatch({
                type: "UPLOAD_START",
                channelId: h,
                file: e,
                message: d,
                uploader: w,
              });
          }),
          w.on("progress", (e) => {
            l.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: h, file: e });
          })),
          w.on("error", (e, t, n, i) => {
            if (
              (l.Z.dispatch({
                type: "UPLOAD_FAIL",
                channelId: h,
                file: e,
                messageRecord: d,
              }),
              (0, _.x)({
                fileItems: e.items,
                failureCode: t,
                errorMessage: null == i ? void 0 : i.msg,
              }),
              t === y.evJ.EXPLICIT_CONTENT)
            ) {
              o.Z.sendExplicitMediaClydeError(
                h,
                null == n ? void 0 : n.attachments,
                p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (t === y.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: t, message: null == n ? void 0 : n.message },
                i =
                  null == d
                    ? null
                    : { type: c.$V.SEND, message: { ...d, channelId: h } };
              (0, s.openUploadError)({
                title: b.intl.string(b.t.B3vFdX),
                help: (0, m.uF)(i, e),
              });
              return;
            }
            if (t !== y.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (M)
                P.reject(new u.Hx({ status: t, body: null != n ? n : {} }, t));
              else {
                var f;
                (0, s.openUploadError)({
                  title: b.intl.string(b.t.B3vFdX),
                  help:
                    null !== (f = null == n ? void 0 : n.message) &&
                    void 0 !== f
                      ? f
                      : b.intl.string(b.t.zMEjJi),
                });
              }
              "" !== j.content &&
                "" === x.Z.getDraft(h, L) &&
                r.Z.saveDraft(h, j.content, L),
                0 === N.Z.getUploadCount(h, L) &&
                  a.Z.setUploads({ channelId: h, uploads: A, draftType: L });
            }
          }),
          w.on("complete", (e, t) => {
            l.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: h,
              file: e,
              aborted: w._aborted,
              messageRecord: t,
            });
          }),
          await w.uploadFiles(A, j),
          P.resolve(),
          P.promise
        );
      }
      t.Z = {
        instantBatchUpload: function (e) {
          let {
              channelId: t,
              files: n,
              draftType: i,
              isThumbnail: l = !1,
              filesMetadata: r = [],
            } = e,
            o = Array.from(n).map((e, n) => {
              let i = null != r ? r[n] : {};
              return new d.n(
                { file: e, platform: h.ow.WEB, isThumbnail: l, ...i },
                t,
              );
            });
          A({ channelId: t, uploads: o, draftType: i });
        },
        upload: function e(t) {
          let {
              channelId: n,
              file: a,
              draftType: u,
              message: c,
              hasSpoiler: d,
              filename: h,
            } = t,
            m = { content: "", tts: !1, hasSpoiler: d, filename: h };
          if (null != c) {
            (m.content = c.content),
              (m.tts = c.tts),
              (m.channel_id = c.channel_id);
            let e = Z.Z.getPendingReply(n);
            if (null != e) {
              let t = o.Z.getSendMessageOptionsForReply(e);
              (m.type = y.uaV.REPLY),
                (m.message_reference = t.messageReference),
                (m.allowed_mentions = t.allowedMentions),
                (0, S.A6)(n);
            }
          }
          let v = new f.Z(y.ANM.MESSAGES(n));
          v.on("start", (e) => {
            l.Z.dispatch({
              type: "UPLOAD_START",
              channelId: n,
              file: e,
              uploader: v,
            });
          }),
            v.on("progress", (e) => {
              l.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: n, file: e });
            }),
            v.on("error", (t, d, h) => {
              if (
                (l.Z.dispatch({ type: "UPLOAD_FAIL", channelId: n, file: t }),
                (0, _.x)({ fileItems: t.items, failureCode: d }),
                d === y.evJ.EXPLICIT_CONTENT)
              ) {
                o.Z.sendExplicitMediaClydeError(
                  n,
                  null == h ? void 0 : h.attachments,
                  p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, s.openUploadError)({
                title: b.intl.string(b.t.B3vFdX),
                help: b.intl.format(b.t.gIlRx8, {
                  onClick: () => {
                    (0, i.closeModal)(s.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: n, file: a, draftType: u, message: c });
                  },
                }),
              }),
                "" !== m.content &&
                  "" === x.Z.getDraft(n, u) &&
                  r.Z.saveDraft(n, m.content, u);
            }),
            v.on("complete", (e) => {
              l.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: n, file: e });
            }),
            v.upload(a, m);
        },
        uploadFiles: A,
        cancel(e) {
          l.Z.dispatch({ type: "UPLOAD_CANCEL_REQUEST", file: e }),
            null != e.draftContent &&
              null != e.channelId &&
              "" === x.Z.getDraft(e.channelId, x.d.ChannelMessage) &&
              l.Z.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: x.d.ChannelMessage,
              });
        },
      };
    },
    400354: function (e, t, n) {
      n.d(t, {
        l: function () {
          return a;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(709014);
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
        a = (e) => {
          let t = l.useRef(null),
            a = l.useRef(e);
          a.current = e;
          let s = l.useMemo(
              () => () => {
                null != t.current && t.current.play(e);
              },
              [e],
            ),
            u = l.useCallback(() => {
              if (null == t.current) return;
              let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
              t.current.play(n);
            }, [e]),
            c = l.useCallback(() => {
              if (null == t.current) return;
              let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
              t.current.stopIfPlaying(n);
            }, [e]);
          return {
            events: { onClick: s, onMouseEnter: u, onMouseLeave: c },
            play: s,
            Component: l.useCallback(
              (e) =>
                (0, i.jsx)(r.L, {
                  ...e,
                  src: () => n.e("68449").then(n.t.bind(n, 406785, 19)),
                  ref: t,
                  initialAnimation: a.current,
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
          return a;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(709014);
      let o = { all: { name: "all", start: 0, duration: 66 } },
        a = () => {
          let e = l.useRef(null),
            t = l.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            a = l.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            s = l.useCallback(() => {
              null != e.current && e.current.stopIfPlaying("all");
            }, []);
          return {
            events: { onClick: t, onMouseEnter: a, onMouseLeave: s },
            play: t,
            Component: l.useCallback(
              (t) =>
                (0, i.jsx)(r.L, {
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
          return u;
        },
      }),
        n(653041);
      var i = n(544891),
        l = n(881052),
        r = n(687294),
        o = n(476326),
        a = n(861990),
        s = n(388032);
      class u extends r.Z {
        async uploadFiles(e, t) {
          let { addFilesTo: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super.upload({ name: s.intl.string(s.t.jfKTen) }, t, e);
          let i = new AbortController();
          try {
            if (((this.files = e), this._aborted)) return;
            if (
              (this._handleStart(() => i.abort()),
              !(await this.compressAndCheckFileSize()))
            )
              return;
            this.setUploadingTextForUI(),
              await (0, r.$)(
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
          let r;
          let s = [];
          this.files.forEach((e, t) => {
            let n = (0, a.B)(e, t);
            e.item.platform === o.ow.WEB && s.push({ ...n });
          }),
            (r =
              null != n && null != t
                ? this._addAttachmentsToPayload(t, n, s)
                : { ...t, attachments: s });
          let u = { url: this._url, body: r, signal: e, rejectWithError: !1 },
            c = "POST" === this._method ? i.tn.post : i.tn.patch;
          try {
            let e = await c(u);
            return this._handleComplete(e.body), e.body;
          } catch (e) {
            var d;
            if (this._raiseEndpointErrors) throw new l.Hx(e);
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
          return r;
        },
      });
      var i = n(442837),
        l = n(317381);
      function r() {
        return (0, i.e7)([l.ZP], () => l.ZP.getCurrentEmbeddedActivity());
      }
    },
    570928: function (e, t, n) {
      var i,
        l,
        r,
        o,
        a = n(200651),
        s = n(192379),
        u = n(120356),
        c = n.n(u),
        d = n(714909);
      class h extends (o = s.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            hoverText: n,
            className: i,
            forceHover: l,
            ...r
          } = this.props;
          return (0, a.jsxs)("div", {
            ...r,
            className: c()(i, d.hoverRoll, {
              [d.disabled]: null == n,
              [d.forceHover]: l,
            }),
            children: [
              (0, a.jsx)(e, { className: d.hovered, children: n }),
              (0, a.jsx)(e, { className: d.default, children: t }),
            ],
          });
        }
      }
      (r = { tag: "div", forceHover: !1 }),
        (l = "defaultProps") in (i = h)
          ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = r),
        (t.Z = h);
    },
    571250: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(388032);
      function l(e, t, n) {
        return n
          ? i.intl.string(i.t["2Ne/Y2"])
          : t
            ? i.intl.string(i.t.QZ7WSU)
            : e
              ? i.intl.string(i.t["2US87+"])
              : i.intl.string(i.t.wjcRFR);
      }
    },
    55311: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(846027),
        o = n(468026),
        a = n(388032);
      function s(e, t) {
        if (e) {
          (0, l.openModal)((e) =>
            (0, i.jsx)(o.default, {
              ...e,
              title: a.intl.string(a.t.QZ7WSU),
              body: a.intl.string(a.t.Tl9JpK),
            }),
          );
          return;
        }
        r.Z.toggleSelfDeaf({ location: t });
      }
    },
    567409: function (e, t, n) {
      n.d(t, {
        Ns: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(392711),
        r = n.n(l),
        o = n(876215),
        a = n(442837),
        s = n(146282),
        u = n(26033),
        c = n(897674),
        d = n(709054),
        h = n(206583);
      let f = new Set([o.s.PLAYED_GAME]),
        p = (e) => f.has(e.content_type);
      function m(e) {
        let { entries: t } = (function () {
          let e = (0, c.Z)(h.YN.GAME_PROFILE_FEED),
            t = (0, c.Z)(h.YN.GLOBAL_FEED),
            n = i.useMemo(
              () =>
                r()(t)
                  .unionBy(e, (e) => e.id)
                  .filter(p)
                  .orderBy((e) => d.default.extractTimestamp(e.id), "desc")
                  .uniqWith(
                    (e, t) =>
                      e.author_id === t.author_id &&
                      e.extra.application_id === t.extra.application_id,
                  )
                  .value(),
              [e, t],
            );
          return {
            requestId: (0, a.e7)([s.Z], () =>
              s.Z.getFeedRequestId(h.YN.GAME_PROFILE_FEED),
            ),
            entries: n,
          };
        })();
        return i.useMemo(
          () =>
            null == t
              ? void 0
              : t.filter((t) => (0, u.dX)(t) && t.extra.application_id === e),
          [t, e],
        );
      }
    },
    552282: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      function i(e) {
        var t;
        return null != e
          ? { id: e.id, name: null !== (t = e.name) && void 0 !== t ? t : "" }
          : null;
      }
    },
    97797: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      var i = n(981631),
        l = n(388032);
      function r(e) {
        let {
          username: t,
          usernameOnClickHandler: n = i.dG4,
          productName: r,
        } = e;
        return l.intl.formatToParts(l.t.w4iXs7, {
          username: t,
          usernameHook: n,
          productName: r,
        });
      }
    },
    523361: function (e, t, n) {
      n.d(t, {
        HG: function () {
          return a;
        },
        Md: function () {
          return o;
        },
        Q8: function () {
          return r;
        },
      });
      var i = n(373228),
        l = n(388032);
      let r = () => [l.intl.string(l.t.b6wEe3), l.intl.string(l.t.i8o9hY)],
        o = () => [l.intl.string(l.t.vqnToa), l.intl.string(l.t["9yh+dH"])],
        a = [
          {
            id: "781323471249604648",
            format_type: i.u3.APNG,
            description: "Cheerful Choco jumps out of gift box",
            name: "Surprise",
          },
          {
            id: "781324642736144424",
            format_type: i.u3.APNG,
            description: "Cheerful Choco preens against window",
            name: "Affection",
          },
          {
            id: "781323769960202280",
            format_type: i.u3.APNG,
            description: "Cheerful Choco sparkles",
            name: "OMG",
          },
          {
            id: "781324722394103808",
            format_type: i.u3.APNG,
            description: "Cheerful Choco cheers",
            name: "Cheer",
          },
          {
            id: "813951723822645278",
            format_type: i.u3.APNG,
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
          return c;
        },
        _i: function () {
          return g;
        },
        eI: function () {
          return m;
        },
        vp: function () {
          return p;
        },
        y8: function () {
          return v;
        },
      });
      var i = n(367907),
        l = n(200876),
        r = n(430824),
        o = n(594174);
      n(709054), n(523361);
      var a = n(981631),
        s = n(388032);
      function u(e) {
        return e;
      }
      function c(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: l,
            roleSubscriptionData: r,
          } = e,
          { content: o, formatParams: a } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: l,
            roleSubscriptionData: r,
          });
        return s.intl.format(o, a);
      }
      function d(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: l,
            roleSubscriptionData: r,
          } = e,
          { content: o, formatParams: a } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: l,
            roleSubscriptionData: r,
          });
        return s.intl.formatToParts(o, a);
      }
      function h(e, t) {
        var n, i;
        let l = r.Z.getGuild(e),
          o =
            null !== (n = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== n
              ? n
              : 0;
        return {
          guild: l,
          totalMonthsSubscribed: o,
          showWithDuration: o > 0,
          isRenewal:
            null !== (i = null == t ? void 0 : t.is_renewal) &&
            void 0 !== i &&
            i,
        };
      }
      function f(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: i = u,
            roleSubscriptionOnClickHandler: l = a.dG4,
            guildId: r,
            roleSubscriptionData: o,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: f,
            isRenewal: p,
          } = h(r, o);
        return (
          (t = f ? (p ? s.t.Iy66Mz : s.t.eCgb2d) : p ? s.t.mPTTdn : s.t.mYjFFx),
          {
            content: t,
            formatParams: {
              username: n,
              usernameHook: i,
              guildName: null == c ? void 0 : c.name,
              handleGuildNameClick: l,
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
            usernameOnClickHandler: i = u,
            roleSubscriptionOnClickHandler: l = a.dG4,
            guildId: r,
            roleSubscriptionData: o,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: f,
            isRenewal: p,
          } = h(r, o);
        return (
          (t = f
            ? p
              ? s.t.OQ0OU1
              : s.t["+N9bxs"]
            : p
              ? s.t.OxP1ND
              : s.t["6Z1E+/"]),
          s.intl.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: l,
            months: d,
          })
        );
      }
      function m(e) {
        return (0, l.l)(e);
      }
      function v(e, t, n, l) {
        var r;
        i.ZP.trackWithMetadata(
          a.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (r = o.default.getCurrentUser()) || void 0 === r
                ? void 0
                : r.id,
            channel_id: t,
            message_id: n,
            role_subscription_listing_id: l,
          },
        );
      }
      function g(e, t) {
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
    86071: function (e, t, n) {
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-10_hotwheels_overlay_invites",
        label: "Overlay Invites Notification",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      t.Z = i;
    },
    681603: function (e, t, n) {
      var i = n(192379),
        l = n(149765),
        r = n(442837),
        o = n(367907),
        a = n(731429),
        s = n(188471),
        u = n(318885),
        c = n(592125),
        d = n(984933),
        h = n(271383),
        f = n(430824),
        p = n(496675),
        m = n(944486),
        v = n(914010),
        g = n(594174),
        E = n(237997),
        _ = n(145597),
        C = n(981631);
      class S extends i.Component {
        componentDidUpdate(e) {
          if (this.props.locked) return null;
          let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: l,
            postableChannelCount: r,
          } = this.props;
          if (
            (null != t &&
              (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
              ((0, u.Q)(C.rMx.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: l } : {}),
                postable_channels: r,
              }),
              (0, s.a)(C.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
          ) {
            let e = (0, a.K)(c.Z.getChannel(n), !0);
            (0, u.Q)(C.rMx.CHANNEL_OPENED, { ...e, ...(0, o.$H)(n) }),
              (0, s.a)(C.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
          }
        }
        render() {
          return null;
        }
      }
      t.Z = r.ZP.connectStores(
        [v.Z, m.Z, f.Z, g.default, E.Z, d.ZP, p.Z, h.ZP],
        () => {
          var e, t, n;
          let i = v.Z.getGuildId(),
            r = m.Z.getChannelId(i),
            o = f.Z.getGuild(i),
            a = g.default.getCurrentUser(),
            s =
              null !==
                (t = d.ZP.getChannels(null == o ? void 0 : o.id)[d.sH]) &&
              void 0 !== t
                ? t
                : [],
            u =
              s.length > 0
                ? s.filter((e) => {
                    let { channel: t } = e;
                    return p.Z.can(
                      l.$e(C.Plq.SEND_MESSAGES, C.Plq.VIEW_CHANNEL),
                      t,
                    );
                  }).length
                : 0,
            c =
              null != a &&
              null != i &&
              null !==
                (n =
                  null === (e = h.ZP.getMember(i, a.id)) || void 0 === e
                    ? void 0
                    : e.isPending) &&
              void 0 !== n &&
              n;
          return {
            selectedGuild: i,
            selectedChannel: r,
            locked: E.Z.isLocked((0, _.QF)()),
            hasPreviewEnabled:
              null == o ? void 0 : o.features.has(C.oNc.PREVIEW_ENABLED),
            isMemberPending: c,
            postableChannelCount: u,
          };
        },
      )(S);
    },
    906037: function (e, t, n) {
      n.d(t, {
        CR: function () {
          return o;
        },
        eM: function () {
          return r;
        },
        m3: function () {
          return a;
        },
      });
      var i = n(570140),
        l = n(449224);
      function r(e) {
        return (!e.isPreviewingInGame && !e.locked) || e.pinned;
      }
      function o(e, t, n) {
        (e.locked !== t.locked ||
          e.pinned !== t.pinned ||
          n(e) !== n(t) ||
          r(e) !== r(t)) &&
          a(t, n(t));
      }
      function a(e, t) {
        var n, o;
        let a = r(e),
          s = l.Z.getGame();
        i.Z.dispatch({
          type: "OVERLAY_WIDGET_CHANGED",
          gameName:
            null !== (n = null == s ? void 0 : s.name) && void 0 !== n
              ? n
              : null,
          gameId:
            null !== (o = null == s ? void 0 : s.id) && void 0 !== o ? o : null,
          widgetType: e.widget,
          visible: a && t,
          locked: e.locked,
          pinned: e.pinned,
        });
      }
    },
    603618: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
        i: function () {
          return P;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(512722),
        o = n.n(r),
        a = n(442837),
        s = n(481060),
        u = n(278323),
        c = n(988298),
        d = n(493683),
        h = n(13245),
        f = n(99690),
        p = n(620662),
        m = n(194082),
        v = n(297781),
        g = n(656709),
        E = n(567409),
        _ = n(703656),
        C = n(409057),
        S = n(199902),
        Z = n(592125),
        I = n(293273),
        x = n(158776),
        N = n(594174),
        O = n(5192),
        T = n(358085),
        y = n(998502),
        b = n(388627),
        A = n(981631),
        L = n(388032),
        R = n(918532);
      function k(e) {
        let { entry: t, currentUserActivity: n, idx: r } = e,
          c = (0, a.e7)([N.default], () => N.default.getUser(t.author_id)),
          [f, m] = l.useState("unsent"),
          [v, E] = l.useState(!1);
        l.useEffect(() => {
          if ("sent" === f) {
            let e = setTimeout(() => E(!0), 2e3);
            return () => clearTimeout(e);
          }
        }, [f]);
        let C = null != n && (0, p.Z)(n, A.xjy.JOIN),
          S = async (e) => {
            if (null != c && "unsent" === f) {
              e.stopPropagation();
              try {
                if ((m("sending"), C))
                  await u.Z.sendActivityInviteUser({
                    type: A.mFx.JOIN,
                    userId: c.id,
                    activity: n,
                    location: A.Sbl.UNLOCKED_OVERLAY,
                  });
                else {
                  var i;
                  let e = await d.Z.getOrEnsurePrivateChannel(c.id),
                    n =
                      null !== (i = Z.Z.getChannel(e)) && void 0 !== i
                        ? i
                        : null;
                  o()(null != n, "Send channel must be defined"),
                    (0, _.uL)(A.Z5c.CHANNEL(n.guild_id, n.id)),
                    await (0, g.p)({
                      channel: n,
                      content: L.intl.string(L.t.DwAcMz),
                      entry: t,
                      whenReady: !0,
                    });
                }
                h.Z.track(A.rMx.OVERLAY_GAME_INVITE_SENT, {
                  target_user_id: c.id,
                  target_content_entry_id: t.id,
                  target_index: r,
                }),
                  m("sent");
              } catch (e) {
                m("unsent");
              }
            }
          },
          I = async () => {
            var e;
            if (null == c) return;
            let t = await d.Z.getOrEnsurePrivateChannel(c.id),
              n = null !== (e = Z.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, "Send channel must be defined"),
              (0, _.uL)(A.Z5c.CHANNEL(n.guild_id, n.id)),
              T.isPlatformEmbedded && y.ZP.focus();
          },
          x = C ? L.intl.string(L.t["3fRyS0"]) : L.intl.string(L.t.y9eo7e),
          O = C
            ? (0, i.jsx)(s.GroupPlusIcon, { color: "currentColor", size: "sm" })
            : (0, i.jsx)(s.SendMessageIcon, {
                color: "currentColor",
                size: "sm",
              });
        return (0, i.jsx)(s.Tooltip, {
          text: x,
          "aria-label": x,
          children: (e) =>
            (0, i.jsx)(s.Button, {
              ...e,
              submitting: "sending" === f,
              onClick: v ? I : S,
              className: R.inviteButton,
              wrapperClassName: R.inviteButtonWrapper,
              innerClassName: R.inviteButtonInner,
              color: s.ButtonColors.TRANSPARENT,
              look: s.ButtonLooks.FILLED,
              size: s.ButtonSizes.ICON,
              grow: !1,
              children:
                "sent" === f
                  ? v
                    ? (0, i.jsx)(s.ChatIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                    : (0, i.jsx)(s.CheckmarkSmallBoldIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                  : O,
            }),
        });
      }
      function M(e) {
        var t;
        let { entry: n, currentUserActivity: r } = e,
          o = (0, a.e7)([N.default], () => N.default.getUser(n.author_id)),
          c =
            null !== (t = null == r ? void 0 : r.application_id) && void 0 !== t
              ? t
              : n.extra.application_id,
          d = (0, a.e7)(
            [x.Z],
            () => (null != o ? x.Z.getApplicationActivity(o.id, c) : null),
            [c, o],
          ),
          [h, f] = l.useState("unsent");
        if (!(null != d && (0, p.Z)(d, A.xjy.JOIN))) return null;
        let m = async (e) => {
            if (null != o && "unsent" === h) {
              e.stopPropagation();
              try {
                f("sending"),
                  await u.Z.sendActivityInviteUser({
                    type: A.mFx.JOIN_REQUEST,
                    userId: o.id,
                    activity: d,
                    location: A.Sbl.UNLOCKED_OVERLAY,
                  }),
                  f("sent");
              } catch (e) {
                f("unsent");
              }
            }
          },
          v = L.intl.string(L.t.OKsSCQ);
        return (0, i.jsx)(s.Tooltip, {
          text: v,
          "aria-label": v,
          children: (e) =>
            (0, i.jsx)(s.Button, {
              ...e,
              submitting: "sending" === h,
              onClick: m,
              className: R.inviteButton,
              wrapperClassName: R.inviteButtonWrapper,
              innerClassName: R.inviteButtonInner,
              color: s.ButtonColors.TRANSPARENT,
              look: s.ButtonLooks.FILLED,
              size: s.ButtonSizes.ICON,
              grow: !1,
              children:
                "sent" === h
                  ? (0, i.jsx)(s.CheckmarkSmallBoldIcon, {
                      color: "currentColor",
                      size: "sm",
                    })
                  : (0, i.jsx)(s.HandRequestSpeakIcon, {
                      color: "currentColor",
                      size: "sm",
                    }),
            }),
        });
      }
      function w(e) {
        let { entry: t, currentUserActivity: n, idx: l } = e,
          r = (0, a.e7)([N.default], () => N.default.getUser(t.author_id)),
          o = (0, a.e7)(
            [S.Z],
            () => (null != r ? S.Z.getAnyStreamForUser(r.id) : null),
            [r],
          ),
          { isMobileOnline: u, status: c } = (0, a.cj)(
            [x.Z],
            () =>
              null == r
                ? { isMobileOnline: void 0, status: void 0 }
                : {
                    isMobileOnline: x.Z.isMobileOnline(r.id),
                    status: x.Z.getStatus(r.id),
                  },
            [r],
          );
        return null == r
          ? null
          : (0, i.jsxs)("div", {
              className: R.row,
              children: [
                (0, i.jsx)(f.Z, {
                  className: R.avatar,
                  user: r,
                  isMobile: u,
                  status: c,
                }),
                (0, i.jsxs)("div", {
                  className: R.details,
                  children: [
                    (0, i.jsxs)("div", {
                      className: R.usernameWrapper,
                      children: [
                        (0, i.jsx)(s.Text, {
                          className: R.username,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children: O.ZP.getName(void 0, void 0, r),
                        }),
                        null != o &&
                          (0, i.jsx)(m.ZP, { className: R.liveIndicator }),
                      ],
                    }),
                    (0, i.jsx)(v.Gk, {
                      location: v.Gt.OVERLAY,
                      className: R.badgesContainer,
                      children: [v.OV, v.wO, v.f, v.v1, v.pQ].map((e, n) =>
                        (0, i.jsx)(e, { entry: t }, "entry-".concat(n)),
                      ),
                    }),
                  ],
                }),
                (0, i.jsx)(M, { entry: t, currentUserActivity: n, idx: l }),
                (0, i.jsx)(k, { entry: t, currentUserActivity: n, idx: l }),
              ],
            });
      }
      function P(e) {
        let { entries: t, currentUserActivity: n } = e,
          l = t.slice(0, 5);
        return (0, i.jsx)(i.Fragment, {
          children: l.map((e, t) =>
            (0, i.jsx)(w, { idx: t, entry: e, currentUserActivity: n }, t),
          ),
        });
      }
      function j() {
        let e = (0, b.II)(),
          t = null == e ? void 0 : e.id,
          n = null == e ? void 0 : e.altId,
          l = (0, E.Ns)(t),
          r = (0, a.e7)([N.default], () => N.default.getCurrentUser()),
          o = (0, a.e7)([I.Z], () =>
            null != n
              ? I.Z.getApplicationActivity(n)
              : null != t
                ? I.Z.getApplicationActivity(t)
                : null,
          ),
          u = null != o && (0, p.Z)(o, A.xjy.JOIN);
        return 0 === l.length && null == o
          ? null
          : (0, i.jsxs)("div", {
              className: R.container,
              children: [
                null != o && null != r
                  ? (0, i.jsx)(C.Z, {
                      className: R.activityCard,
                      activity: o,
                      user: r,
                      currentUser: r,
                    })
                  : null,
                u
                  ? (0, i.jsx)(s.Button, {
                      className: R.inviteFriendsButton,
                      onClick: () => (0, c.h7)(o, !1, A.IlC.POPOUT),
                      size: s.ButtonSizes.SMALL,
                      color: s.ButtonColors.PRIMARY,
                      children: L.intl.string(L.t["6Qgren"]),
                    })
                  : null,
                (0, i.jsx)(P, { entries: l, currentUserActivity: o }),
              ],
            });
      }
    },
    989373: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n(200651);
      n(192379);
      var l = n(238246),
        r = n(554370);
      function o(e) {
        let { withTitleBar: t, windowKey: n } = e;
        return (0, i.jsx)(l.Z, {
          withTitleBar: t,
          windowKey: n,
          title: "Discord Overlay",
          children: (0, i.jsx)(r.Z, {}),
        });
      }
      n(606206), n(371467);
    },
    691891: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(481060),
        a = n(19123);
      let s = (e) => {
        let { className: t, onDismiss: n, "aria-label": l } = e;
        return (0, i.jsx)(o.Button, {
          look: o.Button.Looks.BLANK,
          size: o.Button.Sizes.NONE,
          onClick: n,
          className: r()(a.dismissButton, t),
          "aria-label": l,
          children: (0, i.jsx)(o.XSmallIcon, {
            size: "xs",
            color: "currentColor",
            colorClass: a.dismissIcon,
          }),
        });
      };
      (s.displayName = "DismissButton"), (t.Z = s);
    },
    353038: function (e, t, n) {
      n.d(t, {
        B: function () {
          return i;
        },
        Z: function () {
          return N;
        },
      }),
        n(47120),
        n(411104);
      var i,
        l,
        r,
        o = n(200651),
        a = n(192379),
        s = n(120356),
        u = n.n(s),
        c = n(100621),
        d = n(902704),
        h = n(585483),
        f = n(434529),
        p = n(981631),
        m = n(26437);
      function v(e, t, n) {
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
      let g = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
      ((r = i || (i = {})).MOVE = "MOVE"),
        (r.RESIZE_NORTH = "RESIZE_NORTH"),
        (r.RESIZE_WEST = "RESIZE_WEST"),
        (r.RESIZE_EAST = "RESIZE_EAST"),
        (r.RESIZE_SOUTH = "RESIZE_SOUTH"),
        (r.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST"),
        (r.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST"),
        (r.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST"),
        (r.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST");
      let E = new Set([
        "RESIZE_NORTH",
        "RESIZE_WEST",
        "RESIZE_EAST",
        "RESIZE_SOUTH",
        "RESIZE_NORTH_WEST",
        "RESIZE_NORTH_EAST",
        "RESIZE_SOUTH_WEST",
        "RESIZE_SOUTH_EAST",
      ]);
      function _(e, t, n) {
        let { width: i, height: l } = e;
        return {
          width: "auto" === i ? "auto" : Math.max(t, i),
          height: "auto" === l ? "auto" : Math.max(n, l),
        };
      }
      function C(e) {
        let { top: t, left: n, bottom: i, right: l } = e;
        return (
          null == n && null == l && (n = 0),
          null != n && null != l && (l = void 0),
          null == t && null == i && (t = 0),
          null != t && null != i && (i = void 0),
          { top: t, left: n, bottom: i, right: l }
        );
      }
      function S(e) {
        return "auto" === e || null == e ? "auto" : "".concat(e, "px");
      }
      function Z(e, t) {
        let n = 0,
          i = 0;
        return (
          (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
          {
            width: n,
            height: (i =
              "auto" === t.height
                ? null != e
                  ? e.clientHeight
                  : 0
                : t.height),
          }
        );
      }
      function I(e, t) {
        let { top: n, left: i, bottom: l, right: r } = t;
        switch (e) {
          case "RESIZE_EAST":
          case "RESIZE_NORTH_EAST":
          case "RESIZE_NORTH":
            return { bottom: l, left: i, right: void 0, top: void 0 };
          case "RESIZE_WEST":
          case "RESIZE_NORTH_WEST":
            return { bottom: l, right: r, left: void 0, top: void 0 };
          case "RESIZE_SOUTH_EAST":
            return { top: n, left: i, bottom: void 0, right: void 0 };
          case "RESIZE_SOUTH":
          case "RESIZE_SOUTH_WEST":
            return { top: n, right: r, bottom: void 0, left: void 0 };
          default:
            throw Error("getOrientedCoords: Invalid orientation: ".concat(e));
        }
      }
      function x(e) {
        let { computedSize: t } = e;
        return t;
      }
      class N extends (l = a.Component) {
        shouldComponentUpdate(e, t) {
          return (
            !(0, d.Z)(t, this.state) ||
            !(0, d.Z)(e, this.props, [
              "anchor",
              "size",
              "minSize",
              "container",
            ]) ||
            !(0, d.Z)(e.anchor, this.props.anchor) ||
            !(0, d.Z)(e.size, this.props.size) ||
            !(0, d.Z)(e.minSize, this.props.minSize) ||
            !(0, d.Z)(e.container, this.props.container)
          );
        }
        componentDidMount() {
          this.setDOMPositions(C(this.props.anchor)),
            this.setDOMSize(
              _(
                this.props.size,
                this.props.minSize.width,
                this.props.minSize.height,
              ),
            ),
            h.S.subscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
        }
        componentDidUpdate(e, t) {
          null == t.operation &&
            (!(0, d.Z)(this.props.anchor, e.anchor) &&
              this.setDOMPositions(C(this.props.anchor)),
            !(0, d.Z)(this.props.size, e.size) &&
              this.setDOMSize(
                _(
                  this.props.size,
                  this.props.minSize.width,
                  this.props.minSize.height,
                ),
              ));
        }
        componentWillUnmount() {
          this.handleOperationEnd(),
            h.S.unsubscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
        }
        handleResizeMouseDown(e, t) {
          let { clientX: n, clientY: i } = e;
          e.stopPropagation(), this.handleOperationStart(t, n, i);
        }
        handleDragMove(e, t) {
          let {
            ref: { current: n },
            props: {
              id: i,
              container: { maxX: l, maxY: r, minX: o, minY: a },
              onDragStart: s,
              onDrag: u,
              snapOrientation: c = !0,
            },
            dragState: { offsetX: d, offsetY: h },
            state: { operationStarted: p },
          } = this;
          if (null == n) return null;
          (e = Math.max(Math.min(l, e), o)), (t = Math.max(Math.min(r, t), a));
          let { width: m, height: v } = Z(n, this.size),
            g = t - h,
            E = e - d,
            _ = (0, f.ou)(
              (0, f.PY)(
                { top: g, left: E, bottom: void 0, right: void 0 },
                l,
                r,
                m,
                v,
              ),
            ),
            C = c ? (0, f.R)(_) : I("RESIZE_SOUTH_EAST", _);
          this.setDOMPositions(C),
            this.setState(
              {
                operationStarted: !0,
                anchorTopOverride: null != C.top,
                anchorLeftOverride: null != C.left,
              },
              () => {
                !p && null != s && s(),
                  null != u && u(i, "MOVE", this.anchor, this.size);
              },
            );
        }
        handleResizeMove(e, t) {
          let {
              props: {
                id: n,
                minSize: i,
                container: { maxX: l, maxY: r, minX: o, minY: a },
                onDragStart: s,
                onDrag: u,
                resizeValidation: c = x,
              },
              state: { operation: h, operationStarted: p },
            } = this,
            { startX: m, startY: v } = this.dragState,
            g = 0,
            E = 0;
          if (null == h) return;
          switch (
            ((e = Math.max(Math.min(l, e), o)),
            (t = Math.max(Math.min(r, t), a)),
            h)
          ) {
            case "RESIZE_EAST":
            case "RESIZE_SOUTH_EAST":
            case "RESIZE_NORTH_EAST":
              g -= m - e;
              break;
            case "RESIZE_WEST":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_NORTH_WEST":
              g += m - e;
          }
          switch (h) {
            case "RESIZE_SOUTH":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_SOUTH_EAST":
              E -= v - t;
              break;
            case "RESIZE_NORTH":
            case "RESIZE_NORTH_WEST":
            case "RESIZE_NORTH_EAST":
              E += v - t;
          }
          let _ = c({
              padding: 8,
              borderWidth: 2,
              operation: h,
              computedSize: {
                width: Math.max(this.dragState.offsetWidth + g, i.width),
                height: Math.max(this.dragState.offsetHeight + E, i.height),
              },
              originSize: {
                width: this.dragState.offsetWidth,
                height: this.dragState.offsetHeight,
              },
              containerSpecs: this.props.container,
              orientedPosition: this.dragState.dragOrientedCoords,
            }),
            C = (0, f.BL)(
              (0, f.ou)(
                (0, f.PY)(
                  this.dragState.dragOrientedCoords,
                  l,
                  r,
                  _.width,
                  _.height,
                ),
              ),
              this.dragState.dragOrientedCoords,
            );
          this.setDOMSize(_, !0),
            !(0, d.Z)(C, this.dragState.dragOrientedCoords) &&
              ((this.dragState.dragOrientedCoords = C),
              this.setDOMPositions(this.dragState.dragOrientedCoords)),
            !p && (null != s && s(), this.setState({ operationStarted: !0 })),
            null != u && u(n, h, this.anchor, this.size);
        }
        setDOMPositions(e) {
          let { top: t, left: n, bottom: i, right: l } = e,
            { current: r } = this.ref;
          if (
            ((this.anchor = { top: t, left: n, bottom: i, right: l }),
            null != r)
          )
            (r.style.top = S(t)),
              (r.style.bottom = S(i)),
              (r.style.left = S(n)),
              (r.style.right = S(l));
        }
        setDOMSize(e) {
          let { width: t, height: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: l } = this.ref;
          if (
            ((t = "auto" !== this.size.width || i ? t : "auto"),
            (n = "auto" !== this.size.height || i ? n : "auto"),
            (this.size = { width: t, height: n }),
            null != l)
          )
            (l.style.width = S(t)), (l.style.height = S(n));
        }
        renderResizeHandles() {
          let { resizeY: e, resizeX: t, active: n } = this.props;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              e
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)("div", {
                        className: u()(m.resizeNorth, {
                          [m.resizeNSCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                      }),
                      (0, o.jsx)("div", {
                        className: u()(m.resizeSouth, {
                          [m.resizeNSCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                      }),
                    ],
                  })
                : null,
              t
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)("div", {
                        className: u()(m.resizeEast, { [m.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_EAST"),
                      }),
                      (0, o.jsx)("div", {
                        className: u()(m.resizeWest, { [m.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_WEST"),
                      }),
                    ],
                  })
                : null,
              t && e
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)("div", {
                        className: u()(m.resizeNorthWest, {
                          [m.resizeNWSECursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                      }),
                      (0, o.jsx)("div", {
                        className: u()(m.resizeNorthEast, {
                          [m.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                      }),
                      (0, o.jsx)("div", {
                        className: u()(m.resizeSouthWest, {
                          [m.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                      }),
                      (0, o.jsx)("div", {
                        className: u()(m.resizeSouthEast, {
                          [m.resizeNWSECursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST"),
                      }),
                    ],
                  })
                : null,
            ],
          });
        }
        renderExtras() {
          let {
              props: { renderExtras: e, anchor: t },
              setLockExtras: n,
            } = this,
            i = null == e ? void 0 : e(n);
          return null != i
            ? (0, o.jsx)("div", {
                className: u()({
                  [m.extras]: !0,
                  [m.extrasBottomOriented]: null != t.bottom,
                  [m.extrasRightOriented]: null != t.right,
                }),
                children: i,
              })
            : null;
        }
        getInlineStyles() {
          let {
            props: {
              hidden: e,
              style: t,
              minSize: n,
              padding: i = 8,
              borderWidth: l = 2,
              borderRadius: r = 12,
            },
            state: { operation: o },
          } = this;
          return {
            ...t,
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: l,
            padding: i,
            borderRadius: r + l + i,
            zIndex: null != o ? 1e3 : void 0,
            visibility: e ? "hidden" : void 0,
          };
        }
        renderChildren() {
          let {
            props: {
              children: e,
              hidden: t,
              padding: n = 8,
              borderWidth: i = 2,
              locked: l,
            },
            size: r,
            anchor: o,
            setLockExtras: a,
            state: { anchorTopOverride: s, anchorLeftOverride: u },
          } = this;
          return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != s ? s : null != o.top,
            anchorLeft: null != u ? u : null != o.left,
            size: r,
            padding: n,
            borderWidth: i,
            setLockExtras: a,
            locked: l,
            hidden: t,
          });
        }
        render() {
          let {
            props: { onClick: e, id: t, locked: n },
            state: { operationStarted: i, lockExtras: l },
          } = this;
          return (0, o.jsxs)(c.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: u()({
              [m.wrapper]: !0,
              [m.operation]: i,
              [m.unlocked]: !n,
              [m.lockExtras]: l,
            }),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [
              this.renderChildren(),
              this.renderResizeHandles(),
              this.renderExtras(),
            ],
          });
        }
        constructor(e) {
          super(e),
            v(this, "anchor", void 0),
            v(this, "size", void 0),
            v(this, "ref", a.createRef()),
            v(this, "dragState", {
              startX: 0,
              startY: 0,
              offsetX: 0,
              offsetY: 0,
              offsetWidth: 0,
              offsetHeight: 0,
              dragOrientedCoords: { top: 0, left: 0 },
            }),
            v(this, "state", {
              lockExtras: !1,
              operation: null,
              operationStarted: !1,
              anchorTopOverride: void 0,
              anchorLeftOverride: void 0,
            }),
            v(this, "handleShowUI", (e) => {
              let { show: t } = e;
              this.setLockExtras(t);
            }),
            v(this, "handleMouseDown", (e) => {
              e.stopPropagation();
              let { dragAnywhere: t } = this.props,
                { current: n } = this.ref;
              null != n &&
                e.button === p.AeJ.PRIMARY &&
                t &&
                this.handleOperationStart("MOVE", e.clientX, e.clientY);
            }),
            v(this, "handleMouseMove", (e) => {
              e.preventDefault(), e.stopPropagation();
              let { clientX: t, clientY: n } = e,
                {
                  dragState: { startX: i, startY: l },
                  state: { operation: r, operationStarted: o },
                } = this;
              if (!(null == r || (!o && 3 > g(i, l, t, n))))
                "MOVE" === r
                  ? this.handleDragMove(t, n)
                  : E.has(r) && this.handleResizeMove(t, n);
            }),
            v(this, "handleOperationStart", (e, t, n) => {
              let {
                ref: { current: i },
                props: {
                  targetWindow: l,
                  active: r,
                  container: { maxX: o, maxY: a },
                },
              } = this;
              if (null == i || !r) return;
              let { width: s, height: u } = Z(i, this.size),
                c = (0, f.PY)(this.anchor, o, a, s, u);
              if ("MOVE" === e) {
                let { x: e, y: i } = (function (e) {
                  let { top: t, left: n } = e;
                  return { x: n, y: t };
                })(c);
                this.dragState = {
                  ...this.dragState,
                  startX: t,
                  startY: n,
                  offsetX: t - e,
                  offsetY: n - i,
                };
              } else {
                let i = I(e, c);
                this.setDOMPositions(i),
                  (this.dragState = {
                    ...this.dragState,
                    startX: t,
                    startY: n,
                    offsetWidth: s,
                    offsetHeight: u,
                    dragOrientedCoords: i,
                  });
              }
              this.setState({ operation: e, operationStarted: !1 }, () => {
                l.addEventListener("mousemove", this.handleMouseMove),
                  l.addEventListener("mouseup", this.handleOperationEnd);
              });
            }),
            v(this, "handleOperationEnd", () => {
              let { operation: e, operationStarted: t } = this.state,
                { targetWindow: n, onDragEnd: i } = this.props;
              n.removeEventListener("mousemove", this.handleMouseMove),
                n.removeEventListener("mouseup", this.handleOperationEnd);
              let l = t
                ? () => {
                    let { onUpdate: t, id: n } = this.props;
                    t(
                      e,
                      n,
                      this.anchor,
                      this.size,
                      Z(this.ref.current, this.size),
                    );
                  }
                : void 0;
              if (t) {
                let { maxX: e, maxY: t } = this.props.container,
                  { width: n, height: l } = Z(this.ref.current, this.size),
                  r = (0, f.PY)(this.anchor, e, t, n, l),
                  o = (0, f.R)(r);
                this.setDOMPositions(o),
                  this.setDOMSize({ width: n, height: l }),
                  null != i && i();
              }
              this.setState({ operation: null, operationStarted: !1 }, l);
            }),
            v(this, "setLockExtras", (e) => {
              this.setState({ lockExtras: e });
            }),
            (this.anchor = C(e.anchor)),
            (this.size = _(e.size, e.minSize.width, e.minSize.height));
        }
      }
      v(N, "Operations", i);
    },
    350663: function (e, t, n) {
      n.d(t, {
        C: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        l,
        r = n(200651),
        o = n(192379),
        a = n(120356),
        s = n.n(a),
        u = n(399606),
        c = n(239091),
        d = n(40851),
        h = n(352978),
        f = n(27457),
        p = n(199902),
        m = n(592125),
        v = n(944486),
        g = n(981631),
        E = n(900357);
      let _ = new Set([g.jm8.ENDED, g.jm8.FAILED, g.jm8.PAUSED]);
      function C(e) {
        let { participant: t, width: i, locked: l, channel: o } = e,
          a = (0, d.bp)(),
          s = (0, u.e7)(
            [p.Z],
            () => p.Z.getActiveStreamForUser(t.user.id, t.stream.guildId),
            [t.user.id, t.stream.guildId],
          ),
          m = null != s && _.has(s.state);
        return !(null != s) || m
          ? null
          : (0, r.jsx)("div", {
              className: E.tileContainer,
              children: (0, r.jsx)(f.ZP, {
                participant: t,
                width: i,
                className: E.tile,
                fit: h.L.COVER,
                inPopout: !0,
                inCall: !0,
                focused: l,
                forceIdle: l,
                channel: o,
                onContextMenu: l
                  ? void 0
                  : (e, t) => {
                      (0, c.jW)(t, async () => {
                        let { default: t } = await n
                          .e("22183")
                          .then(n.bind(n, 987281));
                        return (n) =>
                          (0, r.jsx)(t, {
                            ...n,
                            stream: e.stream,
                            exitFullscreen: () => {},
                            appContext: a,
                          });
                      });
                    },
              }),
            });
      }
      ((l = i || (i = {})).HORIZONTAL = "horizontal"),
        (l.VERTICAL = "vertical"),
        (t.Z = o.memo(function (e) {
          let {
              tileWidth: t,
              layout: n,
              locked: i,
              streamParticipants: l,
              participantsVersion: o,
            } = e,
            a = (0, u.e7)([v.Z], () => v.Z.getVoiceChannelId()),
            c = (0, u.e7)([m.Z], () => m.Z.getChannel(a), [a]);
          return (0, r.jsx)("div", {
            className: s()({
              [E.gridContainer]: !0,
              [E.vertical]: "vertical" === n,
              [E.horizontal]: "horizontal" === n,
            }),
            children:
              null == c
                ? []
                : l.map((e) =>
                    (0, r.jsx)(
                      C,
                      { participant: e, width: t, locked: i, channel: c },
                      e.user.id,
                    ),
                  ),
          });
        }));
    },
    761374: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(765250),
        a = n(358221),
        s = n(569545),
        u = n(199902),
        c = n(314897),
        d = n(592125),
        h = n(944486),
        f = n(350663),
        p = n(388627),
        m = n(75226);
      let v = [];
      function g(e, t, n, i) {
        let l = (i - 1) * 12;
        return e === f.C.HORIZONTAL
          ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256))
          : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
      }
      function E(e) {
        var t;
        let {
            id: n,
            size: E,
            locked: _,
            padding: C,
            borderWidth: S,
            opacity: Z,
            horizontal: I,
          } = e,
          x = 2 * C + 2 * S;
        let { width: N, height: O } = {
            width: "number" == typeof (t = E).width ? t.width : 256,
            height: "number" == typeof t.height ? t.height : 144,
          },
          T = (0, r.e7)([h.Z], () => h.Z.getVoiceChannelId()),
          y = (0, r.e7)([d.Z], () => d.Z.getChannel(T)),
          b = (0, r.e7)([c.default], () => c.default.getId()),
          { participantsVersion: A, streamParticipants: L } = (0, r.e7)(
            [u.Z, a.Z],
            () => {
              if (null == T)
                return { streamParticipants: v, participantsVersion: -1 };
              let e = new Set(
                  u.Z.getAllActiveStreamsForChannel(T).map((e) => (0, s.V9)(e)),
                ),
                t = a.Z.getStreamParticipants(T).filter(
                  (t) => t.user.id !== b && e.has((0, s.V9)(t.stream)),
                );
              return (
                t.sort((e, t) =>
                  e.user.username.localeCompare(t.user.username),
                ),
                {
                  streamParticipants: t,
                  participantsVersion: a.Z.getParticipantsVersion(T),
                }
              );
            },
            [T, b],
            p.yp,
          ),
          R = L.length,
          k = null == y || 0 === R,
          M = I ? f.C.HORIZONTAL : f.C.VERTICAL,
          { tileWidth: w } = (function (e, t, n, i, r) {
            let o = (function (e, t, n, i) {
                let l = g(f.C.HORIZONTAL, e, t, n),
                  r = g(f.C.VERTICAL, e, t, n);
                switch (i) {
                  case f.C.VERTICAL:
                    return r;
                  case f.C.HORIZONTAL:
                    return l;
                }
                let o = ((9 * r) / 16 + 12) * n - 12;
                return e > (16 * t) / 9
                  ? l
                  : o <= t
                    ? r
                    : (9 * l) / 16 <= t
                      ? l
                      : r;
              })(n, i, t, r),
              a = g(f.C.VERTICAL, n, i, t),
              s = null != r ? r : o === a ? f.C.VERTICAL : f.C.HORIZONTAL,
              [u, c] = l.useState(o);
            return (
              l.useEffect(() => {
                !e && c(o);
              }, [e, o]),
              { layout: s, tileWidth: u }
            );
          })(!1, R, N - x, O - x, M),
          P = {
            id: n,
            width: N,
            height: O,
            sizeOffset: x,
            layout: M,
            padding: C,
            participants: L.length,
          },
          j = l.useRef(P);
        return (l.useEffect(() => void (j.current = P)),
        l.useEffect(() => {
          let {
            id: e,
            width: t,
            height: n,
            sizeOffset: i,
            layout: l,
            padding: r,
          } = j.current;
          if (0 === L.length) {
            (256 !== t || 144 !== n) &&
              (0, o.nv)({
                widgetId: e,
                size: { fixed: !0, width: 256, height: 144 },
              });
            return;
          }
          if (l === f.C.HORIZONTAL) {
            let t = (16 / 9) * (n - i);
            (0, o.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                height: n,
                width: t * L.length + r * (L.length - 1) + i,
              },
            });
          } else {
            let n = (9 / 16) * (t - i);
            (0, o.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                width: t,
                height: n * L.length + r * (L.length - 1) + i,
              },
            });
          }
        }, [L.length]),
        l.useEffect(() => {
          if (j.current.participants <= 1) return;
          let {
            id: e,
            width: t,
            height: n,
            sizeOffset: i,
            padding: l,
            participants: r,
          } = j.current;
          if (M === f.C.HORIZONTAL) {
            let n = t - i;
            (0, o.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                width: n * r + l * (r - 1) + i,
                height: (9 / 16) * n + i,
              },
            });
          } else {
            let t = n - i;
            (0, o.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                width: (16 / 9) * t + i,
                height: t * r + l * (r - 1) + i,
              },
            });
          }
        }, [M]),
        l.useEffect(
          () => () => {
            (0, o.nv)({
              widgetId: n,
              size: { fixed: !0, width: 256, height: 144 },
            });
          },
          [n],
        ),
        k && _)
          ? null
          : (0, i.jsx)("div", {
              className: m.goLiveGridContainer,
              style: { opacity: Z },
              children: (0, i.jsx)(f.Z, {
                tileWidth: w,
                locked: _,
                layout: M,
                streamParticipants: L,
                participantsVersion: A,
              }),
            });
      }
    },
    915614: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(481060),
        a = n(78561);
      function s(e) {
        let { onClick: t, keybind: n, className: l, IconComponent: s } = e;
        return (0, i.jsxs)("div", {
          className: r()(a.buttonContainer, l),
          children: [
            (0, i.jsx)(o.Clickable, {
              className: a.button,
              onClick: t,
              "aria-hidden": !0,
              children: (0, i.jsx)(s, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0,
              }),
            }),
            null != n
              ? (0, i.jsx)(o.Text, {
                  className: r()(a.keybind),
                  "aria-hidden": !0,
                  variant: "text-xxs/bold",
                  color: "interactive-normal",
                  children: n,
                })
              : null,
          ],
        });
      }
    },
    44359: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(885870);
      function a(e) {
        let { keybind: t, className: n } = e;
        return (0, i.jsx)(i.Fragment, {
          children: t.map((e, t) =>
            (0, i.jsx)("span", { className: r()(o.key, n), children: e }, t),
          ),
        });
      }
    },
    554370: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return en;
        },
      }),
        n(653041),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(442837),
        s = n(952265),
        u = n(481060),
        c = n(239091),
        d = n(13245),
        h = n(100527),
        f = n(906732),
        p = n(146282),
        m = n(70097),
        v = n(567409),
        g = n(74299),
        E = n(199902),
        _ = n(592125),
        C = n(430824),
        S = n(131951),
        Z = n(944486),
        I = n(574254),
        x = n(556296),
        N = n(237997),
        O = n(451478),
        T = n(585483),
        y = n(358085),
        b = n(13140),
        A = n(145597),
        L = n(830917),
        R = n(86071),
        k = n(681603),
        M = n(915614),
        w = n(690336),
        P = n(388627),
        j = n(319414),
        D = n(561064),
        z = n(987650),
        U = n(501787),
        V = n(981631),
        G = n(206583),
        W = n(388032),
        F = n(936925);
      let B = !y.isPlatformEmbedded && !1,
        H = B
          ? (0, i.jsx)(m.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: F.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
            })
          : null,
        Y = null;
      function K(e) {
        e.preventDefault();
      }
      function Q(e) {
        (0, c.jW)(e, async () => {
          let { default: e } = await n.e("17610").then(n.bind(n, 385620));
          return (t) => (0, i.jsx)(e, { ...t, layoutId: U.$S, version: 1 });
        });
      }
      let X = l.memo(function (e) {
          let { keybind: t, onClick: n, locked: l } = e;
          return (0, i.jsx)(u.Clickable, {
            className: o()(F.overlayBackground, {
              [F.overlayActive]: !l,
              [F.overlayLocked]: l,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: l } = e;
              l === V.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: Q,
            children: l
              ? null
              : (0, i.jsx)(M.Z, {
                  className: F.closeContainer,
                  keybind: t,
                  onClick: n,
                  IconComponent: u.XLargeIcon,
                }),
          });
        }),
        J = l.memo(function (e) {
          let { locked: t, focused: n } = e;
          return t && n
            ? (0, i.jsx)(M.Z, {
                className: F.closeContainer,
                onClick: () => d.Z.setInputLocked(!1, (0, A.QF)()),
                IconComponent: u.LockUnlockedIcon,
              })
            : null;
        });
      function q() {
        if (null != I.Z.getContextMenu()) {
          (0, c.Zy)();
          return;
        }
        d.Z.setInputLocked(!0, (0, A.QF)());
      }
      function $() {
        d.Z.setFocusedPID(A.Js);
      }
      function ee() {
        d.Z.setFocusedPID(null);
      }
      function et(e) {
        let t = N.Z.isLocked((0, A.QF)());
        "alt" === e.key.toLowerCase() &&
          !t &&
          ("keyup" === e.type.toLowerCase()
            ? T.S.dispatch(V.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })
            : "keydown" === e.type.toLowerCase() &&
              T.S.dispatch(V.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
      }
      function en() {
        var e, t;
        let n = (0, D.Z)(),
          {
            locked: r,
            focused: c,
            incompatibleApp: m,
            hasValidResolution: I,
            hasZeroSizeDimension: T,
            keybind: y,
          } = (0, a.cj)([N.Z, O.Z, x.Z], () => {
            let e = O.Z.windowSize((0, L.ZY)(n)),
              t = x.Z.getOverlayKeybind();
            return {
              locked: N.Z.isLocked((0, A.QF)()),
              focused: N.Z.isFocused((0, A.QF)()),
              incompatibleApp: N.Z.incompatibleApp,
              hasValidResolution: (0, A.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != t ? (0, b.BB)(t.shortcut, !0) : "???",
            };
          }),
          { analyticsLocations: M } = (0, f.ZP)(h.Z.OVERLAY);
        return (
          !(function (e, t) {
            let n = l.useRef({ mount: e, unmount: t });
            l.useEffect(() => void (n.current = { mount: e, unmount: t })),
              l.useEffect(
                () => (
                  n.current.mount(),
                  () => {
                    n.current.unmount();
                  }
                ),
                [],
              );
          })(
            () => {
              d.Z.overlayReady((0, A.QF)()),
                n.addEventListener("keydown", et),
                n.addEventListener("keyup", et),
                B &&
                  (n.document.hasFocus() && d.Z.setFocusedPID(A.Js),
                  n.addEventListener("focus", $),
                  n.addEventListener("blur", ee));
            },
            () => {
              n.removeEventListener("keydown", et),
                n.removeEventListener("keyup", et),
                B &&
                  (n.removeEventListener("focus", $),
                  n.removeEventListener("blur", ee));
            },
          ),
          !(function () {
            let e = l.useRef(!1),
              t = (0, P.pL)(),
              n = Z.Z.getVoiceChannelId(),
              i = _.Z.getChannel(n),
              r = null != i ? C.Z.getGuild(i.guild_id) : null,
              o = null != E.Z.getCurrentUserActiveStream(),
              s = null != n,
              u = (0, g.Z)(S.Z) && !o && null != t,
              c = s && null != r && null != n,
              h = (0, v.Ns)(null == t ? void 0 : t.id),
              f = (0, a.e7)(
                [p.Z],
                () => null != p.Z.getLastFeedFetchDate(G.YN.GAME_PROFILE_FEED),
              );
            l.useEffect(() => {
              if (!f || e.current) return;
              (e.current = !0),
                d.Z.track(V.rMx.OVERLAY_INITIALIZED, {
                  voice_widget_connected: s,
                  text_widget_connected: !1,
                });
              let i = [{ type: z.nc.WELCOME }];
              if (
                (u && c
                  ? i.push({
                      type: z.nc.GO_LIVE_VOICE,
                      game: t,
                      voiceChannelId: n,
                      voiceGuild: r,
                    })
                  : u && i.push({ type: z.nc.GO_LIVE_NON_VOICE, game: t }),
                h.length > 0)
              ) {
                let { enabled: e } = R.Z.getCurrentConfig(
                  { location: "Overlay" },
                  { autoTrackExposure: !0 },
                );
                e && i.push({ type: z.nc.CONTENT_INVENTORY, entries: h });
              }
              d.Z.overlayMounted(...i);
            }, [f, h, s, u, c, t, n, r]);
          })(),
          (e = r),
          (t = n),
          l.useEffect(() => {
            if (e) {
              if (
                ((0, s.Ay)(u.POPOUT_MODAL_CONTEXT),
                t.addEventListener("contextmenu", K, !1),
                null != Y)
              ) {
                let e = Date.now() - Y;
                d.Z.track(V.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (Y = null);
              }
              return () => {
                t.removeEventListener("contextmenu", K, !1);
              };
            }
            t.removeEventListener("contextmenu", K, !1),
              null == Y &&
                ((Y = Date.now()), d.Z.track(V.rMx.OVERLAY_UNLOCKED));
          }, [e, t]),
          (0, i.jsx)(f.Gt, {
            value: M,
            children: (0, i.jsx)(u.RedesignIconContextProvider, {
              children:
                T || m
                  ? null
                  : (0, i.jsx)(u.ThemeProvider, {
                      theme: V.BRd.DARK,
                      children: (e) =>
                        (0, i.jsxs)("div", {
                          className: o()(F.overlay, e),
                          children: [
                            H,
                            (0, i.jsx)(X, {
                              locked: r,
                              keybind: y,
                              onClick: q,
                            }),
                            I
                              ? (0, i.jsx)(w.Z, {
                                  className: o()({
                                    [F.layoutLocked]: r,
                                    [F.layoutUnlocked]: !r,
                                  }),
                                })
                              : r
                                ? null
                                : (0, i.jsx)("div", {
                                    className: F.invalidContainer,
                                    children: (0, i.jsx)("div", {
                                      className: F.inactiveContainer,
                                      children: W.intl.format(W.t.ketnW1, A.FW),
                                    }),
                                  }),
                            (0, i.jsx)(j.Z, {}),
                            B && (0, i.jsx)(J, { locked: r, focused: c }),
                            (0, i.jsx)(k.Z, {}),
                          ],
                        }),
                    }),
            }),
          })
        );
      }
    },
    690336: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(355863),
        s = n(451478),
        u = n(830917),
        c = n(388627),
        d = n(892127),
        h = n(84346),
        f = n(561064),
        p = n(501787);
      function m(e) {
        return e.widget.id;
      }
      function v(e, t, n, l) {
        return n === o.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(d.Z, { ...t, transitionState: n, cleanUp: l }, e);
      }
      let g = [];
      t.Z = l.memo(function (e) {
        let { className: t } = e,
          n = (0, f.Z)(),
          d = (0, r.e7)([s.Z], () => s.Z.windowSize((0, u.ZY)(n))),
          E = (0, r.e7)(
            [a.Z],
            () => {
              let e = a.Z.getLayout(p.$S);
              if (null == e) return g;
              let t = [];
              for (let n of e.widgets) {
                let e = a.Z.getWidget(n);
                if (null == e) continue;
                let i = h.Z[e.type];
                null != i && t.push({ widget: e, ...i });
              }
              return t;
            },
            [],
            c.HP,
          ),
          _ = l.useCallback(
            (e) => (0, i.jsx)("div", { className: t, style: d, children: e }),
            [t, d],
          );
        return (0, i.jsx)(o.TransitionGroup, {
          items: E,
          renderItem: v,
          getItemKey: m,
          wrapChildren: _,
        });
      });
    },
    333031: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(954955),
        o = n.n(r),
        a = n(772848),
        s = n(902704),
        u = n(13245),
        c = n(928518),
        d = n(358085),
        h = n(561064),
        f = n(501787);
      function p(e, t, n) {
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
          name: e,
          left: Math.ceil(t.left),
          top: Math.ceil(t.top),
          right: Math.ceil(t.right),
          bottom: Math.ceil(t.bottom),
        };
      }
      let v = l.createContext(
        new (class e {
          observe(e) {
            var t;
            if (
              (null == this.resizeObserver &&
                (this.resizeObserver = new this.window.ResizeObserver(
                  this.handleResize,
                )),
              null == this.mutationObserver)
            ) {
              this.mutationObserver = new MutationObserver(
                this.handleMutations,
              );
              let e = c.Z.getWindow(f.$J);
              null != e &&
                this.mutationObserver.observe(
                  null == e ? void 0 : e.document.body,
                  { subtree: !0, attributes: !0 },
                );
            }
            let n = this.zones.get(e);
            null != n && this.resizeObserver.unobserve(n.element);
            let i = e.getBoundingClientRect();
            this.zones.set(e, {
              element: e,
              zone: m(
                null !== (t = null == n ? void 0 : n.zone.name) && void 0 !== t
                  ? t
                  : (0, a.Z)(),
                i,
              ),
            }),
              this.elements.add(e),
              this.resizeObserver.observe(e),
              this.globalUpdate();
          }
          unobserve(e) {
            var t;
            null != this.zones.get(e) &&
              (null === (t = this.resizeObserver) ||
                void 0 === t ||
                t.unobserve(e),
              this.zones.delete(e),
              this.elements.delete(e),
              this.globalUpdate());
          }
          updateZones() {
            if (!d.isPlatformEmbedded) return;
            let e = c.Z.getWindow(f.$J);
            null != e &&
              u.Z.setClickZones(
                Array.from(this.zones.values()).map((t) => {
                  let { zone: n } = t;
                  return {
                    name: n.name,
                    left: n.left / e.innerWidth,
                    top: n.top / e.innerHeight,
                    right: n.right / e.innerWidth,
                    bottom: n.bottom / e.innerHeight,
                  };
                }),
              );
          }
          cleanUp() {
            var e, t;
            this.globalUpdate.cancel(),
              this.zones.clear(),
              this.elements.clear(),
              null === (e = this.resizeObserver) ||
                void 0 === e ||
                e.disconnect(),
              null === (t = this.mutationObserver) ||
                void 0 === t ||
                t.disconnect(),
              this.updateZones();
          }
          constructor(e) {
            p(this, "resizeObserver", void 0),
              p(this, "mutationObserver", void 0),
              p(this, "zones", new Map()),
              p(this, "elements", new Set()),
              p(this, "window", void 0),
              p(this, "handleResize", () => {
                this.globalUpdate();
              }),
              p(this, "handleMutations", () => {
                this.globalUpdate();
              }),
              p(
                this,
                "globalUpdate",
                o()(
                  () => {
                    let e = !1;
                    for (let [t, n] of this.zones) {
                      let i = t.getBoundingClientRect(),
                        l = m(n.zone.name, i);
                      if (!(0, s.Z)(l, n.zone))
                        (e = !0),
                          (n = { element: n.element, zone: l }),
                          this.zones.set(t, n);
                    }
                    e && this.updateZones();
                  },
                  500,
                  { trailing: !0, maxWait: 1e3 },
                ),
              ),
              (this.window = e);
          }
        })((0, h.i)()),
      );
      function g(e) {
        let { observe: t = !0, className: n, children: r } = e,
          o = l.useContext(v),
          [{ refHandler: a, setObserve: s }] = l.useState(() => {
            let e = null;
            return {
              setObserve(t) {
                null != e && (t ? o.observe(e) : o.unobserve(e));
              },
              refHandler(t) {
                null != e && o.unobserve(e), (e = t);
              },
            };
          });
        return (
          l.useLayoutEffect(() => {
            s(t);
          }, [t, s]),
          (0, i.jsx)("div", {
            ref: a,
            className: n,
            "data-click-zone": !0,
            children: r,
          })
        );
      }
    },
    293224: function (e, t, n) {
      n.d(t, {
        L: function () {
          return ed;
        },
        N3: function () {
          return er;
        },
        Ox: function () {
          return ei;
        },
        SE: function () {
          return el;
        },
        aG: function () {
          return ea;
        },
        c_: function () {
          return es;
        },
        sm: function () {
          return eo;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(442837),
        s = n(685072),
        u = n(400354),
        c = n(652844),
        d = n(864094),
        h = n(582019),
        f = n(75735),
        p = n(481060),
        m = n(846027),
        v = n(239091),
        g = n(287734),
        E = n(40851),
        _ = n(100527),
        C = n(906732),
        S = n(571250),
        Z = n(628581),
        I = n(659580),
        x = n(793865),
        N = n(55311),
        O = n(575175),
        T = n(933557),
        y = n(471445),
        b = n(74299),
        A = n(803647),
        L = n(565138),
        R = n(917405),
        k = n(603074),
        M = n(879815),
        w = n(189771),
        P = n(294629),
        j = n(67844),
        D = n(544384),
        z = n(892807),
        U = n(560688),
        V = n(199902),
        G = n(592125),
        W = n(430824),
        F = n(131951),
        B = n(19780),
        H = n(944486),
        Y = n(594174),
        K = n(979651),
        Q = n(823379),
        X = n(388627),
        J = n(46145),
        q = n(981631),
        $ = n(388032),
        ee = n(136795);
      function et(e) {
        let t = l.useRef(null);
        return (
          l.useEffect(() => {
            if (e) {
              var n;
              null === (n = t.current) || void 0 === n || n.call(t),
                (t.current = null);
            }
          }, [e]),
          (e) => ((t.current = e), e)
        );
      }
      function en(e) {
        let {
          isToggled: t,
          disabled: n,
          cutoutIcon: l,
          icon: r,
          tooltip: a,
          defaultColor: s = p.Button.Colors.TRANSPARENT,
          highlightedColor: u = p.Button.Colors.WHITE,
          onClick: c,
          onCutoutClick: d,
          onMouseEnter: h,
          onMouseLeave: f,
          onContextMenu: m,
        } = e;
        return (0, i.jsx)(p.Tooltip, {
          text: a,
          "aria-label": !1,
          children: (e) => {
            let { onMouseEnter: a, onMouseLeave: v, ...g } = e;
            return (0, i.jsxs)(p.Button, {
              ...g,
              onClick: c,
              size: p.Button.Sizes.SMALL,
              color: t ? u : s,
              className: ee.button,
              disabled: n,
              onMouseEnter: (e) => {
                null == a || a(), null == h || h(e);
              },
              onMouseLeave: (e) => {
                null == v || v(), null == f || f(e);
              },
              onContextMenu: m,
              children: [
                r,
                null != l &&
                  (0, i.jsx)(p.Clickable, {
                    onClick: (e) => {
                      e.stopPropagation(),
                        e.preventDefault(),
                        null == d || d(e);
                    },
                    className: o()(
                      ee.cutoutContainer,
                      t && ee.toggledCutoutContainer,
                    ),
                    children: l,
                  }),
              ],
            });
          },
        });
      }
      function ei(e) {
        let { voiceChannel: t, locked: n } = e,
          { suppress: r, selfMute: o, mute: a } = (0, P.Z)(t),
          s = o || a || r,
          u = (0, Z.Z)(o, a, r, !1),
          {
            Component: d,
            play: h,
            events: f,
          } = (0, c.O)(s ? "unmute" : "mute");
        l.useEffect(() => () => h(), [h, s]);
        let m = et(n);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(I.default, {
              onClose: m(t),
              renderInputDevices: !0,
              renderOutputDevices: !0,
              renderInputModes: !0,
            });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: l } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(d, { color: "currentColor", size: "sm" }),
              tooltip: u,
              isToggled: !s,
              onClick: () => (0, O.Z)(a, r, q.jXE.OVERLAY),
              onCutoutClick: n,
              onContextMenu: n,
              onMouseEnter: () => {
                f.onMouseEnter();
              },
              onMouseLeave: () => {
                f.onMouseLeave();
              },
              cutoutIcon: l
                ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                    color: "currentColor",
                    size: "sm",
                  })
                : (0, i.jsx)(p.ChevronSmallDownIcon, {
                    color: "currentColor",
                    size: "sm",
                  }),
            });
          },
        });
      }
      function el(e) {
        let { voiceChannel: t } = e,
          { selfDeaf: r, deaf: o } = (0, M.Z)(t),
          a = r || o,
          {
            Component: s,
            play: c,
            events: { onMouseEnter: d, onMouseLeave: h },
          } = (0, u.l)(a ? "undeafen" : "deafen"),
          f = o ? p.HeadphonesDenyIcon : s,
          { analyticsLocations: m } = (0, C.ZP)(_.Z.OVERLAY);
        return (
          l.useEffect(() => () => c(), [a, c]),
          (0, i.jsx)(en, {
            icon: (0, i.jsx)(f, { color: "currentColor", size: "sm" }),
            tooltip: (0, S.Z)(r, o, !1),
            isToggled: a,
            onClick: () => {
              (0, N.Z)(o, q.jXE.OVERLAY);
            },
            onCutoutClick: (e) => {
              (0, v.jW)(e, async () => {
                let { default: e } = await Promise.resolve().then(
                  n.bind(n, 659580),
                );
                return () =>
                  (0, i.jsx)(C.Gt, {
                    value: m,
                    children: (0, i.jsx)(e, {
                      onClose: v.Zy,
                      renderOutputDevices: !0,
                      renderOutputVolume: !0,
                    }),
                  });
              });
            },
            onMouseEnter: d,
            onMouseLeave: h,
          })
        );
      }
      function er(e) {
        var t;
        let { voiceChannel: n, locked: r } = e,
          o = (0, a.e7)([F.Z], () => F.Z.isVideoEnabled()),
          s = (0, a.e7)([F.Z], () => Object.values(F.Z.getVideoDevices())[0]),
          u =
            null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
          c = !1 === u,
          d = (0, w.Z)(n),
          h = (e) => {
            m.Z.setVideoEnabled(e);
          },
          v = () => {
            c ? h(!0) : (0, U.Z)();
          },
          g = u ? () => v() : () => h(!o),
          {
            Component: E,
            play: _,
            events: { onMouseEnter: C, onMouseLeave: S },
          } = (0, f.o)(o ? "disable" : "enable"),
          Z =
            null != n
              ? (0, j.X)({
                  enabled: o,
                  cameraUnavailable: u,
                  hasPermission: d,
                  channel: n,
                })
              : void 0;
        l.useEffect(() => () => _(), [o, _]);
        let I = et(r),
          N = null == n || !d;
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(x.Z, { onClose: I(t) });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: l } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(E, { color: "currentColor", size: "sm" }),
              tooltip: Z,
              onClick: g,
              isToggled: o,
              onCutoutClick: n,
              onContextMenu: n,
              onMouseEnter: C,
              onMouseLeave: S,
              cutoutIcon: N
                ? null
                : l
                  ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                      color: "currentColor",
                      size: "sm",
                    })
                  : (0, i.jsx)(p.ChevronSmallDownIcon, {
                      color: "currentColor",
                      size: "sm",
                    }),
              disabled: N,
            });
          },
        });
      }
      function eo(e) {
        let t,
          { voiceChannel: r, locked: o } = e,
          s = null == r ? void 0 : r.id,
          u = (0, a.e7)([Y.default], () => Y.default.getCurrentUser()),
          c = (0, w.Z)(r),
          h = (0, a.cj)([F.Z], () => (0, b.Z)(F.Z)),
          f = (0, a.e7)([V.Z], () => V.Z.getCurrentUserActiveStream()),
          m = (0, E.bp)(),
          v = null == r ? void 0 : r.getGuildId(),
          g = l.useCallback(() => {
            h &&
              null != s &&
              (0, p.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  n.e("63288"),
                  n.e("77298"),
                  n.e("23357"),
                  n.e("29549"),
                  n.e("12013"),
                  n.e("52249"),
                  n.e("14627"),
                  n.e("31605"),
                  n.e("26182"),
                  n.e("95900"),
                  n.e("32776"),
                  n.e("87624"),
                  n.e("88449"),
                  n.e("57674"),
                  n.e("46746"),
                  n.e("18145"),
                ]).then(n.bind(n, 60594));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    selectSource: !1,
                    guildId: v,
                    analyticsLocation: q.Sbl.UNLOCKED_OVERLAY,
                  });
              });
          }, [h, v, s]),
          _ = null != f;
        if (_) t = $.intl.string($.t.S5anIS);
        else if (null != r) {
          let e = (0, X.pL)();
          t = c
            ? null != e
              ? $.intl.format($.t.AB5gT0, { game: e.name })
              : $.intl.string($.t.FeUKeH)
            : $.intl.string($.t.uQn9Bw);
        }
        let C = () => {
            if (_) return (0, A.Z)(f, !1);
            g();
          },
          {
            Component: S,
            events: { onMouseEnter: Z, onMouseLeave: I },
            play: x,
          } = (0, d.P)(_ ? "disable" : "enable");
        l.useEffect(() => () => x(), [_, x]);
        let N = et(o);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != r
              ? (0, i.jsx)(D.Z, {
                  channel: r,
                  currentUser: u,
                  activeStreams: null != f ? [f] : [],
                  handleGoLive: g,
                  onClose: N(t),
                  appContext: m,
                  disableChangeWindows: !0,
                })
              : (0, i.jsx)(i.Fragment, {});
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: l } = e,
              { isShown: r } = n;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(S, { color: "currentColor", size: "sm" }),
              tooltip: t,
              isToggled: _,
              cutoutIcon:
                null != f
                  ? r
                    ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                    : (0, i.jsx)(p.ChevronSmallDownIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                  : null,
              onClick: C,
              onCutoutClick: l,
              onContextMenu: l,
              onMouseEnter: Z,
              onMouseLeave: I,
              disabled: !h || !c,
            });
          },
        });
      }
      function ea(e) {
        var t;
        let { voiceChannel: l, locked: r } = e,
          o =
            null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t
              ? t
              : null,
          { mute: s, suppress: u } = (0, P.Z)(l),
          c = (0, a.e7)([F.Z], () => F.Z.isDeaf()),
          d = null == l || s || u || c;
        function f(e) {
          null != o &&
            (0, v.jW)(e, async () => {
              let { default: e } = await n.e("56049").then(n.bind(n, 338991));
              return (t) => (0, i.jsx)(e, { guildId: o, ...t });
            });
        }
        let {
            Component: m,
            events: { onClick: g, onMouseEnter: E, onMouseLeave: _ },
          } = (0, h.j)(),
          C = et(r);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return d || null == l
              ? (0, i.jsx)(i.Fragment, {})
              : (0, i.jsx)(k.Z, {
                  guildId: o,
                  channel: l,
                  onClose: C(t),
                  analyticsSource: "action bar button",
                });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: l } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(m, { color: "currentColor", size: "sm" }),
              tooltip: (function () {
                if (s) return $.intl.string($.t["Ox4/zc"]);
                if (u) return $.intl.string($.t["+YBKYG"]);
                if (c) return $.intl.string($.t.X1lQlp);
              })(),
              onClick: (e) => {
                g(), n(e);
              },
              onContextMenu: f,
              onMouseEnter: E,
              onMouseLeave: _,
              isToggled: l,
              disabled: d,
            });
          },
        });
      }
      function es(e) {
        let { voiceChannel: t, locked: n } = e,
          l = (0, a.e7)(
            [H.Z],
            () => H.Z.getVoiceChannelId() === (null == t ? void 0 : t.id),
          ),
          r = (0, a.Wu)([J.Z, G.Z], () =>
            J.Z.getChannelHistory()
              .map((e) => G.Z.getChannel(e))
              .filter(Q.lm)
              .filter((e) => e.isVocal()),
          ),
          o = () => {
            l && g.default.disconnect();
          },
          u = (e) => {
            g.default.selectVoiceChannel(e.id);
          },
          {
            Component: c,
            events: { onMouseEnter: d, onMouseLeave: h },
          } = (0, s.K)(),
          f = et(n);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return r.length > 0
              ? (0, i.jsx)(z.Z, {
                  recentVoiceChannels: r,
                  currentVoiceChannel: t,
                  onClose: f(n),
                  onSelect: u,
                })
              : (0, i.jsx)(i.Fragment, {});
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: r } = e,
              { isShown: a } = n;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(c, { color: "currentColor", size: "sm" }),
              tooltip:
                null != t
                  ? $.intl.string($.t["6vrfgo"])
                  : $.intl.string($.t.S0W8Z2),
              onClick: l ? o : r,
              defaultColor: l
                ? p.Button.Colors.RED
                : p.Button.Colors.TRANSPARENT,
              onMouseEnter: d,
              onMouseLeave: h,
              onContextMenu: r,
              isToggled: a,
            });
          },
        });
      }
      function eu(e) {
        let { voiceChannel: t } = e,
          n = (0, a.e7)([W.Z], () => W.Z.getGuild(t.getGuildId()), [t]);
        switch (!0) {
          case t.isGroupDM() || t.isDM():
          case t.isDM():
            return null;
          case null != n:
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", { className: ee.separatorDot }),
                (0, i.jsxs)("div", {
                  className: ee.guildIconContainer,
                  children: [
                    (0, i.jsx)(L.Z, {
                      guild: n,
                      size: L.Z.Sizes.SMOL,
                      className: ee.guildIcon,
                    }),
                    (0, i.jsx)(p.Text, {
                      tag: "div",
                      variant: "text-xs/semibold",
                      color: "text-primary",
                      children: n.name,
                    }),
                  ],
                }),
              ],
            });
          default:
            return null;
        }
      }
      function ec(e) {
        let { voiceChannel: t } = e,
          n = (0, y.KS)(t),
          l = (0, T.ZP)(t);
        return (0, i.jsxs)("div", {
          className: ee.voiceChannelNameContainer,
          children: [
            null != n &&
              (0, i.jsx)(p.Text, {
                tag: "div",
                color: "text-muted",
                variant: "text-xs/normal",
                className: ee.channelIcon,
                children: (0, i.jsx)(n, { size: "xs", color: "currentColor" }),
              }),
            (0, i.jsx)(p.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              className: ee.channelName,
              children: l,
            }),
          ],
        });
      }
      function ed(e) {
        let { voiceChannel: t } = e,
          n = null == t ? void 0 : t.id,
          l = (0, a.cj)([B.Z], () => ({
            channelId: B.Z.getChannelId(),
            quality: B.Z.getQuality(),
            state: B.Z.getState(),
            lastPing: B.Z.getLastPing(),
          })),
          r = null != n,
          o = (0, a.e7)([K.Z], () => null != n && K.Z.hasVideo(n), [n]);
        return (
          r &&
          null != t &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(R.Z, { ...l, hasVideo: o }),
              (0, i.jsx)(eu, { voiceChannel: t }),
              (0, i.jsx)("div", { className: ee.separatorDot }),
              (0, i.jsx)(ec, { voiceChannel: t }),
            ],
          })
        );
      }
    },
    2923: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(442837),
        a = n(592125),
        s = n(944486),
        u = n(293224),
        c = n(125377);
      function d(e) {
        let { locked: t } = e,
          n = (0, o.e7)([s.Z], () => s.Z.getVoiceChannelId()),
          l = (0, o.e7)([a.Z], () => a.Z.getChannel(n)),
          d = null != l;
        return (0, i.jsxs)("div", {
          className: r()({ [c.panelContainer]: !0, [c.locked]: t }),
          children: [
            (0, i.jsxs)("div", {
              className: c.panelRow,
              children: [
                (0, i.jsx)(u.Ox, { voiceChannel: l, locked: t }),
                (0, i.jsx)(u.SE, { voiceChannel: l, locked: t }),
                (0, i.jsx)(u.N3, { voiceChannel: l, locked: t }),
                (0, i.jsx)("div", { className: c.separator }),
                (0, i.jsx)(u.sm, { voiceChannel: l, locked: t }),
                (0, i.jsx)(u.aG, { voiceChannel: l, locked: t }),
                (0, i.jsx)("div", { className: c.separator }),
                (0, i.jsx)(u.c_, { voiceChannel: l, locked: t }),
              ],
            }),
            d &&
              (0, i.jsx)("div", {
                className: c.panelRow,
                children: (0, i.jsx)(u.L, { voiceChannel: l, locked: t }),
              }),
          ],
        });
      }
    },
    46145: function (e, t, n) {
      n(47120), n(733860);
      var i,
        l = n(442837),
        r = n(570140),
        o = n(592125),
        a = n(271383),
        s = n(430824);
      function u(e, t, n) {
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
      class h extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          var t;
          this.waitFor(a.ZP, s.Z, o.Z),
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
      u(h, "displayName", "RecentVoiceChannelStore"),
        u(h, "persistKey", "RecentVoiceChannelStore");
      let f = new h(r.Z, {
        CONNECTION_OPEN: function () {
          d = new Set([...c]);
        },
        VOICE_CHANNEL_SELECT: function (e) {
          var t, n;
          let { channelId: i } = e;
          return (
            !(
              null == i ||
              !(
                null !==
                  (n =
                    null === (t = o.Z.getChannel(i)) || void 0 === t
                      ? void 0
                      : t.isVocal()) &&
                void 0 !== n &&
                n
              ) ||
              d.has(i)
            ) &&
            (c.unshift(i),
            d.add(i),
            c.length > 10 && ((c.length = 10), (d = new Set([...c]))),
            !0)
          );
        },
      });
      t.Z = f;
    },
    319414: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(352527),
        o = n(183584),
        a = n(487029),
        s = n(592125),
        u = n(944486),
        c = n(554174),
        d = n(710111),
        h = n(625478);
      function f() {
        let [e, t] = (0, l.Wu)([r.Z], () => [r.Z.enabled, r.Z.keepOpen]),
          n = (0, l.e7)([u.Z], () => u.Z.getVoiceChannelId()),
          f = (0, l.e7)([s.Z], () => s.Z.getChannel(n), [n]),
          p = null == f ? void 0 : f.getGuildId();
        return e && null != f
          ? (0, i.jsx)("div", {
              className: h.container,
              children: (0, i.jsx)(a.Z, {
                width: d.FW.width,
                height: d.FW.height,
                guildId: p,
                channel: f,
                keepOpen: t,
                onClose: function () {
                  let e = (0, c.Z)();
                  null != e && (0, o.oZ)(e);
                },
                analyticsSource: "overlay",
              }),
            })
          : null;
      }
    },
    586742: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(442837),
        s = n(239091),
        u = n(765250),
        c = n(393238),
        d = n(358221),
        h = n(933557),
        f = n(352978),
        p = n(27457),
        m = n(796638),
        v = n(592125),
        g = n(944486),
        E = n(906037),
        _ = n(501787),
        C = n(65154),
        S = n(227002);
      function Z(e) {
        let {
            context: t = C.Yn.DEFAULT,
            participants: r,
            locked: a,
            widget: u,
            channel: c,
            width: d,
            height: h,
            containerRef: m,
          } = e,
          v = (e, l) => {
            (0, s.jW)(l, async () => {
              let { default: l } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("44378"),
              ]).then(n.bind(n, 881351));
              return (n) =>
                (0, i.jsx)(l, {
                  ...n,
                  user: e.user,
                  showMediaItems: !0,
                  mediaEngineContext: t,
                });
            });
          },
          g = r.length > 0 && null != t && null != c && (!a || u.pinned);
        l.useEffect(() => {
          (0, E.m3)(
            {
              locked: a,
              pinned: u.pinned,
              widget: u.type,
              isPreviewingInGame: !1,
            },
            g,
          );
        }, [a, u, g]);
        let _ = "boolean" != typeof u.meta.horizontal || u.meta.horizontal;
        return g
          ? (0, i.jsx)("div", {
              ref: m,
              className: o()({ [S.videoList]: !0, [S.vertical]: !_ }),
              style: { opacity: u.opacity },
              children: r.map((e) => {
                let { user: n } = e;
                return null == n || null == c || null == t
                  ? null
                  : (0, i.jsx)(
                      p.ZP,
                      {
                        participant: e,
                        width: d,
                        className: S.tile,
                        containerStyle: { width: d, height: h },
                        fit: f.L.COVER,
                        channel: c,
                        inPopout: !0,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: a ? void 0 : v,
                        forceIdle: a,
                      },
                      n.id,
                    );
              }),
            })
          : null;
      }
      function I(e) {
        let t = (0, a.e7)([g.Z, v.Z], () =>
            v.Z.getChannel(g.Z.getVoiceChannelId()),
          ),
          n = (0, h.ZP)(t),
          r = (0, a.Wu)([d.Z], () =>
            null != t ? d.Z.getVideoParticipants(t.id) : [],
          ),
          o = (0, a.e7)([d.Z], () =>
            null != t ? d.Z.getParticipantsVersion(t.id) : 0,
          ),
          s =
            "boolean" != typeof e.widget.meta.horizontal ||
            e.widget.meta.horizontal,
          { width: f, height: p, ref: E } = (0, c.Z)(),
          { visibleParticipants: C, participantTileWidth: S } = (0, m.ZB)(
            s ? (null != f ? f : e.width) : null != p ? p : e.height,
            r,
            {
              tileWidth: _.vZ,
              tileMinWidth: _.mo,
              tileMargin: _.F$,
              limit: 8,
              cropSelfVideo: !0,
              version: o,
            },
          ),
          I = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height,
          },
          x = l.useRef(I);
        return (
          l.useLayoutEffect(() => void (x.current = I)),
          l.useLayoutEffect(() => {
            let {
              size: e,
              id: t,
              containerWidth: n,
              containerHeight: i,
            } = x.current;
            ((s && e.height > e.width) || (!s && e.width > e.height)) &&
              (0, u.nv)({
                widgetId: t,
                size: { fixed: !0, width: i, height: n },
              });
          }, [s]),
          (0, i.jsx)(Z, {
            ...e,
            channel: t,
            title: null != n ? n : "",
            participants: C,
            participantsVersion: o,
            width: s ? S : null != f ? f : e.width,
            height: s ? (null != p ? p : e.height) : S,
            containerRef: E,
          })
        );
      }
    },
    243487: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return U;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(442837),
        s = n(481060),
        u = n(239091),
        c = n(765250),
        d = n(13245),
        h = n(872810),
        f = n(586902),
        p = n(835473),
        m = n(415635),
        v = n(933557),
        g = n(701362),
        E = n(552282),
        _ = n(565799),
        C = n(501655),
        S = n(597998),
        Z = n(199902),
        I = n(314897),
        x = n(592125),
        N = n(355863),
        O = n(131951),
        T = n(944486),
        y = n(938475),
        b = n(237997),
        A = n(136015),
        L = n(51144),
        R = n(145597),
        k = n(388627),
        M = n(981631),
        w = n(65154),
        P = n(368430);
      function j(e) {
        let { avatarSize: t, userId: n, channelId: l, guildId: r } = e,
          o = 2 * t,
          a = -(t / 2);
        return (0, i.jsx)("div", {
          className: P.effect,
          style: { top: a, left: a, width: o, height: o },
          children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: l,
            guildId: r,
            containerDimensions: { width: o, height: o },
          }),
        });
      }
      function D(e) {
        let {
            channel: t,
            flipped: n = !1,
            locked: r = !1,
            user: u,
            nick: c,
            displayNameMode: d,
            displayUserMode: p,
            size: m = M.ipw.LARGE,
            onClick: v,
            onContextMenu: E,
            context: _,
            guildId: C,
            voiceState: x,
            showStreamPreview: N,
            onShowStreamPreview: T,
            onWatchStream: y,
          } = e,
          b = (0, a.e7)([I.default], () => I.default.getId() === u.id, [u.id]),
          [A, L, R] = (0, a.Wu)(
            [O.Z],
            () =>
              b
                ? [
                    !O.Z.isSupported() ||
                      O.Z.isSelfMute() ||
                      O.Z.isSelfMutedTemporarily(),
                    O.Z.isSelfDeaf(),
                    !1,
                  ]
                : [
                    !O.Z.isSupported() || O.Z.isLocalMute(u.id),
                    !1,
                    O.Z.isLocalVideoDisabled(u.id),
                  ],
            [b, u.id],
          ),
          k = (0, a.e7)([Z.Z], () => Z.Z.getCurrentUserActiveStream()),
          w = (0, a.Wu)([Z.Z], () => (null != k ? Z.Z.getViewerIds(k) : [])),
          D = (0, f.Z)({ userId: u.id, context: _ }),
          z = (0, a.e7)([Z.Z], () => Z.Z.getStreamForUser(u.id, C)),
          U = null != z,
          V = l.useMemo(
            () => null != k && k.ownerId !== u.id && w.includes(u.id),
            [k, u.id, w],
          ),
          G = l.useCallback(() => T(null), [T]),
          W = l.useCallback(
            () =>
              (0, i.jsx)(g.Z, {
                user: u,
                channel: t,
                onWatch: () => {
                  (0, h.rn)(z, { forceMultiple: !0, noFocus: !0 }), G(), y();
                },
                onAction: y,
                previewIsOpen: N,
                location: M.Sbl.UNLOCKED_OVERLAY,
                hideTip: !0,
              }),
            [u, t, z, N, G, y],
          );
        if (p === M.OYC.ONLY_WHILE_SPEAKING && r && !D) return null;
        let { mute: F, suppress: B, deaf: H } = x,
          Y = m === M.ipw.LARGE ? 32 : 24;
        return (0, i.jsxs)(s.Clickable, {
          className: o()(P.voiceUser, {
            [P.speaking]: D,
            [P.interactive]: !r,
            [P.flipped]: n,
          }),
          onClick: r ? void 0 : (e) => (null == v ? void 0 : v(e, u)),
          onContextMenu: r ? void 0 : (e) => (null == E ? void 0 : E(e, u)),
          onMouseEnter: () => T(u.id),
          onMouseLeave: G,
          children: [
            (0, i.jsx)(s.Avatar, {
              className: P.avatar,
              size:
                m === M.ipw.LARGE
                  ? s.AvatarSizes.SIZE_32
                  : s.AvatarSizes.SIZE_24,
              src: u.getAvatarURL(C, Y),
              "aria-hidden": !0,
            }),
            (0, i.jsx)(j, {
              avatarSize: Y,
              userId: u.id,
              channelId: t.id,
              guildId: t.getGuildId(),
            }),
            r && (d === M.wC$.NEVER || (!D && d === M.wC$.ONLY_WHILE_SPEAKING))
              ? null
              : (0, i.jsx)(s.Popout, {
                  position: "right",
                  renderPopout: W,
                  shouldShow: N,
                  onRequestClose: G,
                  spacing: 0,
                  children: () =>
                    (0, i.jsxs)(s.Clickable, {
                      className: P.username,
                      children: [
                        (0, i.jsx)(s.Text, {
                          variant: "text-xs/medium",
                          color: "text-normal",
                          children: c,
                        }),
                        (0, i.jsx)(S.nm, {
                          guildId: C,
                          user: u,
                          video: x.selfVideo,
                          isStreaming: U,
                          className: P.voiceIcons,
                          iconClassName: P.voiceIcon,
                          isWatching: V,
                          localMute: A && !b,
                          localVideoDisabled: R,
                          mute: F || A,
                          deaf: H || L,
                          serverMute: F || B,
                          serverDeaf: H,
                          disabled: !1,
                        }),
                      ],
                    }),
                }),
          ],
        });
      }
      function z(e) {
        let {
            id: t,
            context: r = w.Yn.DEFAULT,
            channel: o,
            sortedVoiceStates: a,
            displayNameMode: s,
            displayUserMode: h,
            locked: f,
            pinned: p,
            isPreviewingInGame: m,
            anchorLeft: v,
            avatarSizeMode: g,
          } = e,
          [E, _] = l.useState(null),
          C = (e, t) => {
            (0, u.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("44378"),
              ]).then(n.bind(n, 881351));
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  user: t,
                  showMediaItems: !0,
                  mediaEngineContext: r,
                });
            });
          },
          S = a.length > 0 && null != r && null != o && (!f || p),
          Z = l.useCallback(() => {
            var e, n;
            let i =
                null === (e = N.Z.getWidget(t)) || void 0 === e
                  ? void 0
                  : e.layoutId,
              l =
                null != i
                  ? null === (n = N.Z.getWidgetsForLayout(i)) || void 0 === n
                    ? void 0
                    : n.find((e) => e.type === M.Odu.GO_LIVE)
                  : null;
            null != l &&
              !l.pinned &&
              ((0, c.xh)(l.id),
              d.Z.track(M.rMx.OVERLAY_PIN_TOGGLED, {
                pinned: !0,
                guild_id: null == o ? void 0 : o.guild_id,
                channel_id: null == o ? void 0 : o.id,
                channel_type: null == o ? void 0 : o.type,
                widget_type: M.Odu.GO_LIVE,
              }));
          }, [o, t]);
        return S
          ? (0, i.jsx)(i.Fragment, {
              children: a.map((e) => {
                var t;
                let { user: n, voiceState: l, member: a } = e;
                return null == n
                  ? null
                  : (0, i.jsx)(
                      D,
                      {
                        guildId: null == o ? void 0 : o.guild_id,
                        user: n,
                        nick:
                          null !== (t = null == a ? void 0 : a.nick) &&
                          void 0 !== t
                            ? t
                            : L.ZP.getName(n),
                        flipped: !v,
                        voiceState: l,
                        displayNameMode: s,
                        displayUserMode: h,
                        size: g,
                        locked: f || m,
                        onContextMenu: C,
                        onClick: C,
                        context: r,
                        channel: o,
                        showStreamPreview: n.id === E,
                        onShowStreamPreview: _,
                        onWatchStream: Z,
                      },
                      n.id,
                    );
              }),
            })
          : null;
      }
      function U(e) {
        var t;
        let n = (0, a.e7)([T.Z, x.Z], () =>
            x.Z.getChannel(T.Z.getVoiceChannelId()),
          ),
          l = (0, v.ZP)(n),
          r = (function () {
            let [e] = (0, a.e7)(
              [y.ZP, _.Z, T.Z, x.Z],
              () => {
                let e = x.Z.getChannel(T.Z.getVoiceChannelId());
                return null == e
                  ? [[], -1]
                  : e.isGuildStageVoice()
                    ? [
                        _.Z.getMutableParticipants(e.id, C.pV.SPEAKER),
                        _.Z.getParticipantsVersion(e.id),
                      ]
                    : [
                        y.ZP.getVoiceStatesForChannel(e),
                        y.ZP.getVoiceStateVersion(e.getGuildId()),
                      ];
              },
              [],
              A.Q,
            );
            return e;
          })(),
          o = (0, a.e7)([Z.Z], () => Z.Z.getStreamerActiveStreamMetadata()),
          s = (0, k.II)(),
          u = (0, p.q)(null == s ? void 0 : s.id),
          c = (0, a.cj)([Z.Z, b.Z], () => {
            let e = Z.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: b.Z.getDisplayUserMode(),
              displayNameMode: b.Z.getDisplayNameMode(),
              avatarSizeMode: b.Z.getAvatarSizeMode(),
              streamApplication:
                (null == o ? void 0 : o.pid) === (0, R.QF)()
                  ? (0, E.Z)(s)
                  : null,
              stream: e,
            };
          });
        return (0, i.jsx)(z, {
          ...c,
          application: u,
          ...e,
          sortedVoiceStates: r,
          channel: n,
          title: null != l ? l : "",
          streamMetadata: o,
          streamApplication:
            null !== (t = c.streamApplication) && void 0 !== t
              ? t
              : { id: null, name: null == o ? void 0 : o.sourceName },
        });
      }
    },
    892127: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(765250),
        a = n(13245),
        s = n(355863),
        u = n(237997),
        c = n(451478),
        d = n(434529),
        h = n(145597),
        f = n(830917),
        p = n(353038),
        m = n(561064),
        v = n(981631),
        g = n(782901);
      t.Z = l.memo(function (e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: E,
            renderButtons: _,
            resizeValidation: C,
          } = e,
          S = s.Z.getWidgetConfig(t.type),
          Z = (0, r.e7)([u.Z], () => u.Z.isLocked((0, h.QF)())),
          I = (0, m.Z)(),
          x = (0, r.e7)([c.Z], () => c.Z.windowSize((0, f.ZY)(I))),
          N = (0, m.Z)(),
          O = l.useCallback((e, t, n, i, l) => {
            let r = c.Z.windowSize((0, f.ZY)((0, m.i)())),
              u = (0, d.jL)(n, r),
              h = (0, d.Ox)(i, r);
            (0, o.Os)(t), (0, o.nv)({ widgetId: t, anchor: u, size: h });
            let g = e === p.B.MOVE,
              E = (0, d.PY)(n, r.width, r.height, l.width, l.height);
            a.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, {
              was_resized: !g,
              was_dragged: g,
              widget_type: s.Z.getWidgetType(t),
              window_width: r.width,
              window_height: r.height,
              widget_width: l.width,
              widget_height: l.height,
              widget_left: E.left,
              widget_top: E.top,
            });
          }, []),
          T = l.useCallback((e) => {
            (0, o.Os)(e);
          }, []),
          { id: y, pinned: b, zIndex: A, size: L, anchor: R } = t,
          k = (0, d.w_)(L, x),
          M = (0, d.KR)(R, x),
          { minSize: w, resizeX: P, resizeY: j, dragAnywhere: D } = S,
          z = b || !Z,
          U = l.useMemo(
            () => ({ minX: 0, minY: 0, maxX: x.width, maxY: x.height }),
            [x],
          ),
          V = l.useCallback((e) => n({ ...e, widget: t }), [t, n]),
          G = l.useCallback(
            (e) =>
              null != E || null != _
                ? (0, i.jsxs)("div", {
                    className: g.extrasContainer,
                    children: [
                      null == E ? void 0 : E(t),
                      null == _ ? void 0 : _(t, e),
                    ],
                  })
                : null,
            [t, E, _],
          ),
          W = l.useMemo(() => {
            if (null != C) return (e) => C({ ...e, widget: t });
          }, [C, t]);
        return (0, i.jsx)(p.Z, {
          id: y,
          size: k,
          anchor: M,
          container: U,
          minSize: w,
          hidden: !z,
          locked: Z,
          resizeX: P,
          resizeY: j,
          style: { zIndex: A },
          dragAnywhere: D,
          active: !Z,
          onUpdate: O,
          onClick: T,
          targetWindow: N,
          renderExtras: G,
          resizeValidation: W,
          children: V,
        });
      });
    },
    84346: function (e, t, n) {
      var i = n(200651),
        l = n(239091),
        r = n(603618),
        o = n(353038),
        a = n(761374),
        s = n(2923),
        u = n(586742),
        c = n(243487),
        d = n(430561),
        h = n(134849),
        f = n(501787),
        p = n(981631),
        m = n(388032);
      let v = {
        [p.Odu.VIDEO]: {
          renderWidget(e) {
            let {
              widget: t,
              locked: n,
              size: l,
              padding: r,
              borderWidth: o,
            } = e;
            return (0, i.jsx)(u.Z, {
              id: t.id,
              locked: n,
              widget: t,
              height: "auto" === l.height ? 0 : l.height - 2 * r - 2 * o,
              width: "auto" === l.width ? 0 : l.width - 2 * r - 2 * o,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(d.PI, { children: m.intl.string(m.t.UPvOiY) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(d.ls, {
                  onClick: (r) => {
                    var o, a, s;
                    return (
                      (o = r),
                      (a = e),
                      (s = t),
                      void (0, l.jW)(o, async () => {
                        let { default: e } = await n
                          .e("26775")
                          .then(n.bind(n, 740579));
                        return (
                          s(!0),
                          (t) =>
                            (0, i.jsx)(e, {
                              ...t,
                              widget: a,
                              onClose: () => s(!1),
                            })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(d.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
          resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: l } = e;
            return "boolean" != typeof t.meta.horizontal || t.meta.horizontal
              ? {
                  width: Math.max(n.width, f.vZ),
                  height: Math.min(n.height, 2 * f.mo + 2 * i + 2 * l),
                }
              : {
                  height: Math.max(n.height, f.vZ),
                  width: Math.min(n.width, 2 * f.mo + 2 * i + 2 * l),
                };
          },
        },
        [p.Odu.VOICE_V3]: {
          renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: l } = e;
            return (0, i.jsx)(c.Z, {
              anchorLeft: n,
              id: t.id,
              locked: l,
              pinned: t.pinned,
              widget: p.Odu.VOICE,
              isPreviewingInGame: !1,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(d.PI, { children: m.intl.string(m.t.nFv3GR) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(d.ls, {
                  onClick: (e) => {
                    var r, o;
                    return (
                      (r = e),
                      (o = t),
                      void (0, l.jW)(r, async () => {
                        let { default: e } = await n
                          .e("32382")
                          .then(n.bind(n, 955280));
                        return (
                          o(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => o(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(d.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [p.Odu.GO_LIVE]: {
          renderWidget(e) {
            let { widget: t, locked: n, size: l, dragStart: r } = e;
            return (0, i.jsx)(a.Z, {
              id: t.id,
              locked: n,
              pinned: t.pinned,
              opacity: t.opacity,
              size: l,
              widget: p.Odu.GO_LIVE,
              isPreviewingInGame: !1,
              dragStart: r,
              horizontal:
                "boolean" == typeof t.meta.horizontal && t.meta.horizontal,
              padding: 8,
              borderWidth: 2,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(d.PI, { children: m.intl.string(m.t["386XRk"]) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(d.ls, {
                  onClick: (r) => {
                    var o, a, s;
                    return (
                      (o = r),
                      (a = e),
                      (s = t),
                      void (0, l.jW)(o, async () => {
                        let { default: e } = await n
                          .e("34684")
                          .then(n.bind(n, 68738));
                        return (
                          s(!0),
                          (t) =>
                            (0, i.jsx)(e, {
                              ...t,
                              widget: a,
                              onClose: () => s(!1),
                            })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(d.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
          resizeValidation(e) {
            let {
                operation: t,
                computedSize: n,
                originSize: i,
                borderWidth: l,
                padding: r,
                containerSpecs: a,
              } = e,
              s = 2 * l + 2 * r,
              u = i.width - s,
              c = i.height - s,
              d = u / c,
              h = c / u,
              f = (() => {
                switch (t) {
                  case o.B.RESIZE_NORTH:
                  case o.B.RESIZE_SOUTH:
                    return {
                      height: n.height,
                      width: Math.round((n.height - s) * d + s),
                    };
                  default:
                    return {
                      width: n.width,
                      height: Math.round((n.width - s) * h + s),
                    };
                }
              })();
            return (
              f.width > a.maxX &&
                ((f.width = a.maxX), (f.height = (a.maxX - s) * h + s)),
              f.height > a.maxY &&
                ((f.height = a.maxY), (f.width = (a.maxY - s) * d + s)),
              f
            );
          },
        },
        [p.Odu.QUICK_ACTIONS]: {
          renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(s.Z, { locked: t });
          },
        },
        [p.Odu.NOTIFICATIONS]: {
          renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(h.Z, { locked: t });
          },
          renderTitle: () =>
            (0, i.jsx)(d.PI, { children: m.intl.string(m.t.gnKWdX) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(d.ls, {
                  onClick: (e) => {
                    var r, o;
                    return (
                      (r = e),
                      (o = t),
                      void (0, l.jW)(r, async () => {
                        let { default: e } = await n
                          .e("94706")
                          .then(n.bind(n, 168133));
                        return (
                          o(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => o(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(d.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [p.Odu.ACTIVITY]: {
          renderWidget: () => (0, i.jsx)(r.Z, {}),
          renderTitle: () =>
            (0, i.jsx)(d.PI, { children: m.intl.string(m.t["6gwSFR"]) }),
          renderButtons: () => null,
        },
      };
      t.Z = v;
    },
    430561: function (e, t, n) {
      n.d(t, {
        PI: function () {
          return d;
        },
        RT: function () {
          return f;
        },
        ls: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(692547),
        a = n(481060),
        s = n(765250),
        u = n(388032),
        c = n(689394);
      function d(e) {
        let { children: t } = e;
        return (0, i.jsx)("div", {
          className: c.titleWrapper,
          children: (0, i.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "header-primary",
            children: t,
          }),
        });
      }
      function h(e) {
        let { onClick: t } = e,
          n = u.intl.string(u.t["3D5yo6"]);
        return (0, i.jsx)(a.Tooltip, {
          text: n,
          "aria-label": n,
          children: (e) =>
            (0, i.jsx)(a.Clickable, {
              ...e,
              className: c.button,
              onClick: t,
              children: (0, i.jsx)(a.SettingsIcon, {
                size: "xxs",
                color: o.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
      function f(e) {
        let { id: t, pinned: n } = e,
          l = n ? u.intl.string(u.t.cSu80t) : u.intl.string(u.t.cM8Vnp);
        return (0, i.jsx)(a.Tooltip, {
          text: l,
          "aria-label": l,
          children: (e) =>
            (0, i.jsx)(a.Clickable, {
              ...e,
              className: r()(c.button, n && c.active),
              onClick: () => (0, s.xh)(t),
              children: (0, i.jsx)(a.PinUprightIcon, {
                size: "xxs",
                color: n ? o.Z.colors.BG_BRAND : o.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
    },
    516542: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(904245),
        o = n(13245),
        a = n(655687),
        s = n(541716),
        u = n(752305),
        c = n(893718),
        d = n(957730),
        h = n(849522),
        f = n(145597),
        p = n(981631),
        m = n(750617);
      function v(e) {
        let { id: t, channel: n, onSend: v } = e,
          g = (0, h.Z)(),
          { placeholder: E, accessibilityLabel: _ } = (0, a.Z)(n),
          [C, S] = l.useState(() => (0, u.H2)()),
          { textValue: Z, richValue: I } = C,
          [x, N] = l.useState(!1),
          O = l.useCallback(() => N(!0), []),
          T = l.useCallback(() => N(!1), []),
          y = l.useCallback((e, t, n) => {
            S({ textValue: t, richValue: n });
          }, []),
          b = l.useCallback(
            () =>
              Z.length > g
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (r.Z.sendMessage(n.id, d.ZP.parse(n, Z), !1),
                  o.Z.setInputLocked(!0, (0, f.QF)()),
                  o.Z.updateNotificationStatus(t, p._1z.DISMISSED),
                  null == v || v(Z),
                  Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [Z, g, n, t, v],
          );
        return (0, i.jsx)(c.Z, {
          innerClassName: m.textArea,
          onChange: y,
          placeholder: E,
          accessibilityLabel: _,
          channel: n,
          textValue: Z,
          richValue: I,
          type: s.I.OVERLAY_INLINE_REPLY,
          onBlur: T,
          onFocus: O,
          focused: x,
          onSubmit: b,
          autoCompletePosition: "bottom",
          disableThemedBackground: !0,
        });
      }
    },
    380736: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return g;
        },
        Z: function () {
          return S;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(100621),
        s = n(481060),
        u = n(13245),
        c = n(691891),
        d = n(44359),
        h = n(333031),
        f = n(693091),
        p = n(981631),
        m = n(388032),
        v = n(638266);
      function g(e, t) {
        return (0, i.jsx)(i.Fragment, {
          children: m.intl.format(t, {
            keybind: e,
            keybindHook: (t) => (0, i.jsx)(d.Z, { keybind: e }, e.join("+")),
          }),
        });
      }
      function E(e) {
        e.currentTarget.scrollTo(0, 0);
      }
      let _ = l.memo(function (e) {
        let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: r,
            onDismissClick: u,
            onConfirmClick: d,
            onCancelClick: h,
            onNotificationClick: f,
            hint: g,
            cancelText: _,
            confirmText: C,
            icon: S,
            body: Z,
            title: I,
            renderFooter: x,
            contentOpacity: N,
            status: O,
            containerRef: T,
          } = e,
          [y, b] = l.useState(!1),
          A = n || y || O === p._1z.FOCUSED;
        l.useEffect(() => {
          null == r || r();
        }, [r]);
        let L = l.useCallback(
            (e) => {
              e.stopPropagation(), null == u || u(e);
            },
            [u],
          ),
          R = l.useCallback(
            (e) => {
              e.stopPropagation(), null == d || d(e);
            },
            [d],
          ),
          k = l.useCallback(
            (e) => {
              e.stopPropagation(), null == h || h(e);
            },
            [h],
          ),
          M = l.useCallback(() => {
            b(!0);
          }, []),
          w = l.useCallback(() => {
            b(!1);
          }, []);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: v.overflowWrapper,
              onScroll: E,
              children: (0, i.jsx)(s.Clickable, {
                innerRef: T,
                ignoreKeyPress: !0,
                onMouseOver: M,
                onMouseLeave: w,
                onClick: f,
                className: o()(v.container, { [v.clickable]: null != f }),
                children: (function () {
                  let e = null == x ? void 0 : x(A);
                  return (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(a.animated.div, {
                        className: v.iconAndDetails,
                        style: { opacity: N },
                        children: [
                          null == S
                            ? null
                            : "string" == typeof S
                              ? (0, i.jsx)(s.Avatar, {
                                  src: S,
                                  size: s.AvatarSizes.SIZE_40,
                                  className: v.avatar,
                                  "aria-hidden": !0,
                                })
                              : (0, i.jsx)("div", {
                                  className: v.avatar,
                                  children: S,
                                }),
                          (0, i.jsxs)("div", {
                            className: v.details,
                            children: [
                              (0, i.jsx)(s.Text, {
                                color: "interactive-normal",
                                variant: "text-sm/semibold",
                                lineClamp: 2,
                                children: I,
                              }),
                              null != Z
                                ? (0, i.jsx)(s.Text, {
                                    color: "interactive-normal",
                                    variant: "text-sm/normal",
                                    lineClamp:
                                      null != t ? t * (A ? 2 : 1) : void 0,
                                    children: Z,
                                  })
                                : null,
                              (function () {
                                let e = "function" == typeof g ? g(A) : g;
                                return null != g
                                  ? (0, i.jsx)(s.Text, {
                                      className: v.hint,
                                      color: "text-muted",
                                      variant: "text-xxs/medium",
                                      children: e,
                                    })
                                  : null;
                              })(),
                              null == d && null == h
                                ? null
                                : (0, i.jsxs)("div", {
                                    className: v.buttonContainer,
                                    children: [
                                      null != d
                                        ? (0, i.jsx)(s.Button, {
                                            className: v.button,
                                            size: s.Button.Sizes.SMALL,
                                            color: s.Button.Colors.GREEN,
                                            onClick: R,
                                            children:
                                              null != C
                                                ? C
                                                : m.intl.string(m.t.BddRzc),
                                          })
                                        : null,
                                      null != h
                                        ? (0, i.jsx)(s.Button, {
                                            className: v.button,
                                            size: s.Button.Sizes.SMALL,
                                            look: s.Button.Looks.OUTLINED,
                                            color: s.Button.Colors.PRIMARY,
                                            onClick: k,
                                            children:
                                              null != _
                                                ? _
                                                : m.intl.string(m.t["ETE/oK"]),
                                          })
                                        : null,
                                    ],
                                  }),
                            ],
                          }),
                        ],
                      }),
                      null != e &&
                        (0, i.jsx)(s.Clickable, {
                          className: v.footer,
                          ignoreKeyPress: !0,
                          onClick: (e) => e.stopPropagation(),
                          children: e,
                        }),
                    ],
                  });
                })(),
              }),
            }),
            (0, i.jsx)(c.Z, {
              className: v.dismissButton,
              onDismiss: L,
              "aria-label": m.intl.string(m.t.LnEgqa),
            }),
          ],
        });
      });
      function C(e) {
        let {
          springs: { opacity: t, scale: n, transform: l, height: r },
          index: o,
          children: s,
          locked: u,
        } = e;
        return (0, i.jsx)(a.animated.div, {
          className: v.animationWrapper,
          style: {
            pointerEvents: u && 0 !== o ? "none" : "auto",
            zIndex: Math.max(5 - o, 0),
            opacity: t,
            transform: l.to((e) => "translate3d(0, ".concat(e, "px, 0)")),
            scale: n.to([0, 1], [0.7, 1]),
            height: r,
          },
          children: s,
        });
      }
      function S(e) {
        let {
            notification: t,
            index: n,
            locked: r,
            transitionState: o,
            cleanUp: a,
          } = e,
          {
            id: s,
            props: {
              onNotificationShow: c,
              onDismissClick: d,
              onNotificationClick: p,
              onConfirmClick: m,
              onCancelClick: g,
              renderFooter: E,
            },
          } = t,
          S = l.useCallback(() => {
            c(s);
          }, [c, s]),
          Z = l.useCallback(
            (e) => {
              u.Z.updateNotificationStatus(s), null == d || d(e, s);
            },
            [s, d],
          ),
          I = l.useCallback(
            (e) => {
              null == p || p(e, s);
            },
            [p, s],
          ),
          x = l.useCallback(
            (e) => {
              null == m || m(e, s);
            },
            [m, s],
          ),
          N = l.useCallback(
            (e) => {
              null == g || g(e, s);
            },
            [g, s],
          ),
          O = l.useCallback((e) => (null == E ? void 0 : E(e, s)), [E, s]),
          {
            props: {
              onNotificationShow: T,
              onDismissClick: y,
              renderFooter: b,
              onNotificationClick: A,
              onConfirmClick: L,
              onCancelClick: R,
              ...k
            },
            status: M,
          } = t,
          { ref: w, springs: P } = (0, f.X4)(t.id, o, a);
        return (0, i.jsx)(C, {
          transitionState: o,
          springs: P,
          index: n,
          locked: r,
          children: (0, i.jsx)(h.Z, {
            observe: 0 === n,
            className: v.clickZone,
            children: (0, i.jsx)(_, {
              ...k,
              containerRef: w,
              notificationId: t.id,
              onNotificationShow: 0 === n ? S : void 0,
              onDismissClick: Z,
              onNotificationClick: null != p ? I : void 0,
              onConfirmClick: null != m ? x : void 0,
              onCancelClick: null != g ? N : void 0,
              renderFooter: O,
              expand: !1,
              index: n,
              locked: r,
              status: M,
              contentOpacity: P.contentOpacity,
            }),
          }),
        });
      }
    },
    693091: function (e, t, n) {
      n.d(t, {
        AS: function () {
          return o;
        },
        S4: function () {
          return a;
        },
        X4: function () {
          return c;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(481060);
      function r(e, t, n) {
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
      class o {
        updateState(e, t) {
          this.items = e;
          let n = this.locked !== t;
          (this.locked = t), this.computeLayout(n);
        }
        initialize(e) {
          if (null == this.resizeObserver) {
            for (let [, { element: n }] of ((this.resizeObserver =
              new e.ResizeObserver(this.handleResize)),
            this.listeners)) {
              var t;
              null === (t = this.resizeObserver) ||
                void 0 === t ||
                t.observe(n);
            }
            this.queueCompute();
          }
        }
        cleanUp() {
          var e;
          null === (e = this.resizeObserver) || void 0 === e || e.disconnect(),
            (this.resizeObserver = void 0),
            this.listeners.clear();
        }
        queueCompute() {
          !this.queuedCompute &&
            ((this.queuedCompute = !0),
            Promise.resolve().then(() => this.computeLayout()));
        }
        computeLayout() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.queuedCompute = !1;
          let t = 0,
            n = 0;
          for (let i of this.items) {
            let l = this.listeners.get(i.notification.id);
            if (null == l) continue;
            let { offsetHeight: r } = l.element;
            (l.top !== t || l.height !== r || l.index !== n) && (e = !0),
              (l.top = t),
              (l.height = r),
              (l.index = n),
              0 === t &&
                (this.matchHeight !== r && (e = !0), (this.matchHeight = r)),
              (t += r + 8),
              n++;
          }
          e && this.broadcastLayoutUpdates();
        }
        broadcastLayoutUpdates() {
          for (let e of this.items) {
            let t = this.listeners.get(e.notification.id);
            null != t &&
              t.callback({
                locked: this.locked,
                matchHeight: this.matchHeight,
                height: t.height,
                top: t.top,
                index: t.index,
              });
          }
        }
        subscribe(e, t, n) {
          var i;
          this.listeners.set(e, {
            notificationId: e,
            callback: n,
            element: t,
            height: 0,
            top: 0,
            index: 0,
          }),
            null === (i = this.resizeObserver) || void 0 === i || i.observe(t),
            this.queueCompute();
        }
        unsubscribe(e) {
          var t;
          let n = this.listeners.get(e);
          null != n &&
            (null === (t = this.resizeObserver) ||
              void 0 === t ||
              t.unobserve(n.element),
            this.listeners.delete(e),
            this.queueCompute());
        }
        getLayoutSpecs(e) {
          return this.listeners.get(e);
        }
        constructor(e) {
          r(this, "resizeObserver", void 0),
            r(this, "listeners", new Map()),
            r(this, "queuedCompute", !1),
            r(this, "items", []),
            r(this, "matchHeight", 0),
            r(this, "locked", !0),
            r(this, "handleResize", (e) => {
              this.computeLayout();
            }),
            (this.locked = e);
        }
      }
      let a = i.createContext(new o(!0));
      function s(e, t, n) {
        return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
      }
      let u = { mass: 0.8, friction: 25, tension: 320 };
      function c(e, t, n) {
        let [r, o] = (0, l.useSpring)(
            () => ({
              from: {
                opacity: 0,
                scale: 1,
                transform: 0,
                height: 0,
                contentOpacity: 1,
              },
            }),
            void 0,
            [],
          ),
          c = i.useRef(o),
          d = i.useContext(a),
          h = i.useMemo(() => {
            let t = !1;
            return (n) => {
              null == n
                ? d.unsubscribe(e)
                : d.subscribe(e, n, (e) => {
                    var n, i, l, r;
                    let {
                        locked: o,
                        matchHeight: a,
                        height: d,
                        top: h,
                        index: f,
                      } = e,
                      { current: p } = c;
                    let m = {
                      opacity:
                        ((n = f),
                        (i = o) && n > 4 ? 0 : i ? Math.min(1 - n / 4, 1) : 1),
                      scale: ((l = f), o ? Math.min(1 - l / 4, 1) : 1),
                      transform: s(f, o, h),
                      contentOpacity: ((r = f), o ? (r > 0 ? 0 : 1) : 1),
                      height: o ? a : d,
                    };
                    p({
                      from: t
                        ? void 0
                        : {
                            opacity: 0,
                            scale: 1.1,
                            transform: -((o ? a : d) * 1),
                            contentOpacity: 1,
                            height: o ? a : d,
                          },
                      to: m,
                      config: u,
                    }),
                      (t = !0);
                  });
            };
          }, [e, d]);
        return (
          i.useLayoutEffect(() => {
            if (t === l.TransitionStates.YEETED) {
              let t = d.getLayoutSpecs(e);
              if (null == t) {
                n();
                return;
              }
              c.current({
                to: {
                  scale: 0.8,
                  opacity: 0,
                  transform:
                    s(t.index, d.locked, t.top) + (d.locked ? 0 : t.height / 2),
                },
                config: u,
              }),
                setTimeout(n, 300);
            }
          }, [t, n, e, d]),
          { ref: h, springs: r }
        );
      }
    },
    134849: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(237997),
        s = n(388627),
        u = n(561064),
        c = n(380736),
        d = n(693091),
        h = n(371467),
        f = n(981631),
        p = n(802015);
      let m = [];
      function v(e) {
        return e.notification.id;
      }
      function g(e, t, n, l) {
        let { index: r, notification: o, locked: a } = t;
        return (0, i.jsx)(
          c.Z,
          {
            index: r,
            notification: o,
            locked: a,
            transitionState: n,
            cleanUp: l,
          },
          e,
        );
      }
      function E(e) {
        return (0, i.jsx)("div", { className: p.container, children: e });
      }
      let _ = (e) => l.useState(() => new d.AS(e))[0];
      t.Z = l.memo(function (e) {
        let { locked: t } = e,
          n = (0, r.e7)(
            [a.Z, h.Z],
            () => {
              if (a.Z.getNotificationPositionMode() === f._vf.DISABLED)
                return m;
              let e = [],
                n = 0;
              for (let i of h.Z.getNotifications()) {
                if (n > 4) break;
                (!t || i.status !== f._1z.TIMED_OUT) &&
                  (e.push({ index: n, locked: t, notification: i }), n++);
              }
              return e;
            },
            [t],
            s.E6,
          ),
          c = _(t);
        return (
          l.useLayoutEffect(() => c.updateState(n, t)),
          l.useLayoutEffect(
            () => (c.initialize((0, u.i)()), () => c.cleanUp()),
            [c],
          ),
          (0, i.jsx)(d.S4.Provider, {
            value: c,
            children: (0, i.jsx)(o.TransitionGroup, {
              items: n,
              renderItem: g,
              getItemKey: v,
              wrapChildren: E,
            }),
          })
        );
      });
    },
    371467: function (e, t, n) {
      n(47120), n(733860), n(653041);
      var i,
        l,
        r,
        o,
        a,
        s,
        u,
        c,
        d = n(512722),
        h = n.n(d),
        f = n(772848),
        p = n(442837),
        m = n(570140),
        v = n(13245),
        g = n(435064),
        E = n(786761),
        _ = n(695346),
        C = n(314897),
        S = n(592125),
        Z = n(375954),
        I = n(292959),
        x = n(158776),
        N = n(885110),
        O = n(246946),
        T = n(594174),
        y = n(974180),
        b = n(237997),
        A = n(70956),
        L = n(150097),
        R = n(129724),
        k = n(388627),
        M = n(996050),
        w = n(609626),
        P = n(421824),
        j = n(777036),
        D = n(333727),
        z = n(585708),
        U = n(588909),
        V = n(981631),
        G = n(388032);
      ((o = i || (i = {}))[(o.GENERIC = 0)] = "GENERIC"),
        (o[(o.TEXT = 1)] = "TEXT"),
        (o[(o.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        (o[(o.NUDGE = 3)] = "NUDGE"),
        ((a = l || (l = {}))[(a.NORMAL = 0)] = "NORMAL"),
        (a[(a.HIGH = 1)] = "HIGH"),
        (a[(a.URGENT = 2)] = "URGENT");
      let W = 5 * A.Z.Millis.SECOND,
        F = 8 * A.Z.Millis.SECOND,
        B = 30 * A.Z.Millis.SECOND,
        H = 30 * A.Z.Millis.SECOND,
        Y = Object.freeze({
          timestamp: 0,
          priority: 0,
          duration: W,
          expirationExternallyManaged: !1,
          type: 0,
        }),
        K = [],
        Q = !1,
        X = [];
      function J() {
        if (Q && null == K.find((e) => e.status === V._1z.FOCUSED))
          for (let e of ((Q = !1),
          (K = [...K, ...X]),
          (X = []),
          K.length > 40 && (K.length = 40),
          K))
            e.timer.start();
      }
      function q() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
        K.filter((e) => 1 === e.type && e.status === V._1z.TIMED_OUT)
          .sort((e, t) => t.timestamp - e.timestamp)
          .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - B) &&
              $(t.id, V._1z.DISMISSED);
          });
      }
      function $(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : V._1z.DISMISSED;
        if (null == e) return !1;
        let n = K.findIndex((t) => t.id === e);
        if (-1 === n) return !1;
        let i = K[n];
        if ((i.timer.stop(), (K = [...K]), t === V._1z.FOCUSED)) {
          let [e] = K.splice(n, 1);
          (e = { ...e, status: t }), K.unshift(e), (Q = !0);
          return;
        }
        t === V._1z.DISMISSED ? K.splice(n, 1) : (K[n] = { ...i, status: t }),
          J();
      }
      function ee(e) {
        let t = K.length,
          n =
            (K = K.filter((t) => 1 !== t.type || t.channelId !== e || !1))
              .length !== t;
        return n && J(), n;
      }
      function et(e) {
        let t = K.find((t) => 2 === t.type && t.channelId === e);
        return null != t ? t.id : null;
      }
      function en(e, t) {
        let n = { ...Y, timestamp: Date.now(), ...t },
          i = (0, f.Z)(),
          l = !1,
          r = {
            id: i,
            status: V._1z.ACTIVE,
            timer: (function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = -1;
              return {
                start() {
                  let l =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : t,
                    r = l ? V._1z.TIMED_OUT : V._1z.DISMISSED;
                  -1 === i &&
                    (i = setTimeout(
                      () => v.Z.updateNotificationStatus(e, r),
                      null != n ? n : W,
                    ));
                },
                stop() {
                  clearTimeout(i), (i = -1);
                },
              };
            })(i, n.expirationExternallyManaged, n.duration),
            props: {
              ...e,
              onNotificationShow: () => {
                var t;
                !l &&
                  ((l = !0),
                  null === (t = e.onNotificationShow) ||
                    void 0 === t ||
                    t.call(e, i));
              },
            },
            ...n,
          },
          o = Q ? X : [...K],
          a = o.findIndex((e) => e.priority <= n.priority);
        if ((-1 === a ? o.push(r) : o.splice(a, 0, r), o.length > 40)) {
          let e = o.pop();
          !Q && e.timer.stop();
        }
        return !Q && ((K = o), r.timer.start()), i;
      }
      function ei(e) {
        let { channelId: t, ringing: n } = e,
          i = et(t);
        if (!n.includes(C.default.getId())) return $(i);
        if (null != i) return !1;
        let l = S.Z.getChannel(t);
        if (
          null == l ||
          !l.isPrivate() ||
          N.Z.getStatus() === V.Skl.DND ||
          _.QZ.getSetting()
        )
          return !1;
        let r = K.find(
          (e) =>
            1 === e.type && e.channelId === t && e.messageType === V.uaV.CALL,
        );
        null != r && $(r.id),
          en((0, j.Z)(l), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: l.id,
          });
      }
      class el extends (r = p.ZP.Store) {
        initialize() {
          this.waitFor(S.Z, T.default);
        }
        getNotifications() {
          return K;
        }
      }
      (c = "OverlayNotificationsStore"),
        (u = "displayName") in (s = el)
          ? Object.defineProperty(s, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[u] = c);
      let er = new el(m.Z, {
        OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
          let { notificationId: t, status: n } = e;
          $(t, n);
        },
        OVERLAY_MOUNTED: function (e) {
          let { nudges: t } = e;
          q(0);
          let n = (0, U.Z)((0, k.pL)(), t);
          null != n && en(n, { priority: 2, type: 3, duration: F });
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          if (t) {
            for (let e of K)
              e.status === V._1z.FOCUSED && $(e.id, V._1z.ACTIVE);
            return !0;
          }
          for (let e of (q(), K))
            3 === e.type
              ? $(e.id, V._1z.DISMISSED)
              : e.status === V._1z.ACTIVE &&
                !e.expirationExternallyManaged &&
                (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
          if (K.length > 0) {
            var n;
            return $(
              null ===
                (n = K.filter((e) => 1 === e.type).sort(
                  (e, t) => t.timestamp - e.timestamp,
                )[0]) || void 0 === n
                ? void 0
                : n.id,
              V._1z.FOCUSED,
            );
          }
        },
        MESSAGE_CREATE: function (e) {
          var t, n, i, l;
          let { channelId: r, message: o } = e,
            a = S.Z.getChannel(r),
            s = T.default.getUser(
              null === (t = o.author) || void 0 === t ? void 0 : t.id,
            );
          if (null == a || null == s) return !1;
          if (
            (null === (n = o.activity) || void 0 === n ? void 0 : n.type) ===
              V.mFx.JOIN ||
            (null === (i = o.activity) || void 0 === i ? void 0 : i.type) ===
              V.mFx.JOIN_REQUEST
          ) {
            if (!(0, L.eF)(o, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
              var i;
              let l, r;
              if (
                (h()(null != t.activity, "received null message activity"),
                n.id === C.default.getId())
              )
                return !1;
              let o = (0, k.pL)(),
                a =
                  null !== (i = null == o ? void 0 : o.altId) && void 0 !== i
                    ? i
                    : null == o
                      ? void 0
                      : o.id;
              if (null == o || null == a) return !1;
              switch (t.activity.type) {
                case V.mFx.JOIN:
                  if (
                    null == (l = x.Z.getApplicationActivity(n.id, a)) ||
                    null == l.party ||
                    l.party.id !== t.activity.party_id
                  )
                    return !1;
                  r = (0, M.Z)(e, t, n, o, l);
                  break;
                case V.mFx.JOIN_REQUEST:
                  if (
                    null == (l = N.Z.getApplicationActivity(a)) ||
                    null == l.party ||
                    l.party.id !== t.activity.party_id
                  )
                    return !1;
                  r = (0, D.Z)(e, n, o, l);
              }
              return (
                null != r &&
                (en(r, {
                  priority: 2,
                  expirationExternallyManaged: !0,
                  channelId: e.id,
                  duration: H,
                }),
                !0)
              );
            })(a, o, s);
            if (!1 !== e) return e;
          }
          if (
            b.Z.getTextChatNotificationMode() === V.Ypu.DISABLED ||
            O.Z.disableNotifications ||
            !(0, L.eF)(o, r)
          )
            return !1;
          let u = !I.Z.isSoundDisabled(y.Ay),
            c =
              null !== (l = Z.Z.getMessage(r, o.id)) && void 0 !== l
                ? l
                : (0, E.e5)(o);
          en((0, z.Z)(a, c, s, u), {
            type: 1,
            channelId: a.id,
            expirationExternallyManaged: !0,
            messageType: o.type,
          }),
            q();
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null != t && ee(t);
        },
        MESSAGE_ACK: function (e) {
          let { channelId: t } = e;
          return ee(t);
        },
        CALL_CREATE: ei,
        CALL_UPDATE: ei,
        CALL_DELETE: function (e) {
          let { channelId: t } = e;
          $(et(t));
        },
        ACTIVITY_USER_ACTION: function (e) {
          let t,
            { actionType: n, user: i, applicationId: l } = e,
            r = (0, k.pL)();
          if (
            null == r ||
            (null == r ? void 0 : r.id) == null ||
            (r.id !== l && r.altId !== l)
          )
            return !1;
          if (n === V.mFx.JOIN) t = (0, w.Z)(i, r);
          if (null == t) return !1;
          en(t, { priority: 2, type: 0 });
        },
        CLIPS_SAVE_CLIP_START: function () {
          en((0, P.f)(G.intl.string(G.t.NBMK9v)));
        },
        CLIPS_SAVE_CLIP: function () {
          en(
            (0, P.f)(
              G.intl.format(G.t.KLhk6u, {
                duration: (0, R.A)(g.Z.getSettings().clipsLength / 1e3, !0),
              }),
            ),
          );
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
          en((0, P.f)(G.intl.string(G.t["1ZbZur"])));
        },
        STREAM_START: function (e) {
          let t = (0, P.y)();
          null != t && en(t);
        },
      });
      t.Z = er;
    },
    620954: function (e, t, n) {
      n.d(t, {
        P: function () {
          return d;
        },
        R: function () {
          return c;
        },
      });
      var i = n(13245),
        l = n(556296),
        r = n(237997),
        o = n(13140),
        a = n(145597),
        s = n(987650),
        u = n(981631);
      function c(e, t) {
        return {
          trackView() {
            i.Z.track(u.rMx.NOTIFICATION_VIEWED, t),
              i.Z.notificationEvent(e, s.bv.Viewed);
          },
          trackClick(n) {
            let l = r.Z.isLocked((0, a.QF)())
              ? u.Sbl.LOCKED_OVERLAY
              : u.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(u.rMx.NOTIFICATION_CLICKED, {
              ...t,
              location: l,
              action_type: n,
            }),
              i.Z.notificationEvent(e, s.bv.Clicked);
          },
        };
      }
      function d() {
        let e = l.Z.getOverlayKeybind();
        return null != e ? (0, o.BB)(e.shortcut, !0).split(" + ") : ["???"];
      }
    },
    996050: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(224706),
        l = n(13245),
        r = n(150097),
        o = n(620954),
        a = n(987650),
        s = n(388032);
      function u(e, t, n, u, c) {
        if (null == t.activity || null == u.id) return null;
        let d = t.activity.type,
          h = c.session_id;
        if (null == h) return null;
        let { icon: f, title: p, body: m } = (0, r.Xi)(e, t, n),
          { trackView: v, trackClick: g } = (0, o.R)(a.n0.ActivityInvite, {
            notif_type: a.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: d,
            activity_name: c.name,
          });
        return {
          icon: f,
          title: p,
          body: m,
          onNotificationShow: () => {
            v();
          },
          confirmText: s.intl.string(s.t.VJlc0d),
          onConfirmClick: (r, o) => {
            var a;
            i.Z.join({
              userId: n.id,
              sessionId: h,
              applicationId: null !== (a = u.altId) && void 0 !== a ? a : u.id,
              channelId: e.id,
              messageId: t.id,
            }),
              l.Z.updateNotificationStatus(o),
              g("join");
          },
          onDismissClick: () => {
            g("dismiss");
          },
        };
      }
    },
    609626: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(768581),
        l = n(620954),
        r = n(987650),
        o = n(981631),
        a = n(388032);
      function s(e, t) {
        let n = e.username,
          s = a.intl.format(a.t["Yk+uYG"], { username: "" }),
          u = (0, i.ov)(e),
          c = a.intl.string(a.t.WRj1Wl),
          { trackView: d, trackClick: h } = (0, l.R)(r.n0.ActivityUserJoin, {
            notif_type: r.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: o.mFx.JOIN,
            activity_name: t.name,
          });
        return {
          icon: u,
          title: n,
          body: s,
          hint: c,
          onNotificationShow: () => {
            d();
          },
          onDismissClick: () => {
            h("dismiss");
          },
        };
      }
    },
    421824: function (e, t, n) {
      n.d(t, {
        f: function () {
          return f;
        },
        y: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(556296),
        o = n(13140),
        a = n(44359),
        s = n(620954),
        u = n(987650),
        c = n(981631),
        d = n(388032);
      function h() {
        let { trackView: e, trackClick: t } = (0, s.R)(
            u.n0.ClipsReminderNotification,
            { notif_type: u.n0.ClipsReminderNotification },
          ),
          n = r.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
        if (null == n) return null;
        let h = o.BB(n.shortcut, !0);
        return {
          title: d.intl.format(d.t.S5uhCA, {
            keybind: h,
            keybindHook: (e, t) =>
              (0, i.jsx)(a.Z, { keybind: h.split("+") }, t),
          }),
          icon: (0, i.jsx)(l.ClipsIcon, { size: "lg", color: "currentColor" }),
          onNotificationShow: () => {
            e();
          },
          onDismissClick: () => {
            t("dismiss");
          },
        };
      }
      function f(e) {
        let { trackView: t, trackClick: n } = (0, s.R)(u.n0.ClipsNotification, {
          notif_type: u.n0.ClipsNotification,
        });
        return {
          title: e,
          icon: (0, i.jsx)(l.ClipsIcon, { size: "lg", color: "currentColor" }),
          onNotificationShow: () => {
            t();
          },
          onDismissClick: () => {
            n("dismiss");
          },
        };
      }
    },
    777036: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(26151),
        l = n(13245),
        r = n(43267),
        o = n(933557),
        a = n(699516),
        s = n(594174),
        u = n(620954),
        c = n(987650),
        d = n(981631),
        h = n(388032);
      function f(e) {
        let t = (0, o.F6)(e, s.default, a.Z),
          n = h.intl.string(h.t.ssrVzM),
          f = (0, r.x)(e),
          { trackView: p, trackClick: m } = (0, u.R)(c.n0.IncomingCall, {
            notif_type: c.n0.IncomingCall,
            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          icon: f,
          title: t,
          body: n,
          confirmText: h.intl.string(h.t["0D/6R0"]),
          cancelText: h.intl.string(h.t.BVN4pK),
          onNotificationShow: () => {
            p();
          },
          onConfirmClick: (t, n) => {
            m("join"),
              i.Z.call(e.id, !1, !1),
              l.Z.updateNotificationStatus(n),
              l.Z.track(d.rMx.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: null,
                channel_id: e.id,
                video_enabled: !1,
              });
          },
          onCancelClick: () => {
            m("decline"), i.Z.stopRinging(e.id);
          },
          onDismissClick: () => {
            m("dismiss");
          },
        };
      }
    },
    333727: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(278323),
        l = n(13245),
        r = n(45114),
        o = n(237997),
        a = n(145597),
        s = n(620954),
        u = n(987650),
        c = n(981631),
        d = n(388032);
      function h(e, t, n, h) {
        let f = t.username,
          p = d.intl.format(d.t.VDODnp, { username: "", game: n.name }),
          m = t.getAvatarURL(e.guild_id, 80),
          { trackView: v, trackClick: g } = (0, s.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: h.name,
          });
        return {
          icon: m,
          title: f,
          body: p,
          confirmText: d.intl.string(d.t["fgP/wc"]),
          cancelText: d.intl.string(d.t.tpXzJy),
          onNotificationShow: () => {
            v();
          },
          onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
              channelId: e.id,
              type: c.mFx.JOIN,
              activity: h,
              location: o.Z.isLocked((0, a.QF)())
                ? c.Sbl.LOCKED_OVERLAY
                : c.Sbl.UNLOCKED_OVERLAY,
            }),
              g("join"),
              l.Z.updateNotificationStatus(n);
          },
          onCancelClick: (t, n) => {
            (0, r.In)(e.id, !0, !0),
              l.Z.updateNotificationStatus(n),
              g("decline");
          },
          onDismissClick: () => {
            g("dismiss");
          },
        };
      }
    },
    585708: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(13245),
        r = n(937889),
        o = n(703656),
        a = n(974180),
        s = n(150097),
        u = n(358085),
        c = n(557177),
        d = n(998502),
        h = n(145597),
        f = n(610394),
        p = n(516542),
        m = n(380736),
        v = n(620954),
        g = n(987650),
        E = n(981631),
        _ = n(388032);
      function C(e, t, n, C) {
        var S;
        let { icon: Z, title: I, body: x } = (0, s.Xi)(e, t, n),
          { trackView: N, trackClick: O } = (0, v.R)(g.n0.TextChat, {
            notif_type: g.n0.TextChat,
            notif_user_id:
              null === (S = t.author) || void 0 === S ? void 0 : S.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          icon: Z,
          title: I,
          body:
            t.content.length > 0
              ? (0, r.ZP)(t, {
                  noStyleAndInteraction: !0,
                  formatInline: !0,
                  hideSimpleEmbedContent: !1,
                }).content
              : x,
          hint: (e) => (e ? null : (0, m.Q)((0, v.P)(), _.t.ykjOAA)),
          maxBodyLines: 2,
          renderFooter: (t, n) =>
            t
              ? (0, i.jsx)(p.Z, { id: n, channel: e, onSend: () => O("send") })
              : null,
          onNotificationShow: () => {
            C && (0, c.GN)(a.Ay, a.yk), N();
          },
          onNotificationClick: () => {
            let n = (0, h.QF)();
            f.Z.isInputLocked(n)
              ? (O("unlock"), l.Z.setInputLocked(!1, n))
              : (O("jump"),
                (0, o.uL)(E.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                u.isPlatformEmbedded && d.ZP.focus());
          },
          onDismissClick: () => {
            O("dismiss");
          },
        };
      }
    },
    588909: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(952265),
        r = n(988298),
        o = n(13245),
        a = n(620662),
        s = n(835473),
        u = n(442550),
        c = n(293273),
        d = n(145597),
        h = n(603618),
        f = n(380736),
        p = n(620954),
        m = n(987650),
        v = n(981631),
        g = n(602091),
        E = n(701488),
        _ = n(388032),
        C = n(638266),
        S = n(624960);
      function Z(e) {
        let { game: t } = e,
          n = (0, s.q)(t.id);
        return null == n
          ? null
          : (0, i.jsx)(u.f, { src: n.getIconURL(E.Si.LARGE), size: 40 });
      }
      function I(e, t) {
        let { trackView: s, trackClick: u } = (0, p.R)(m.n0.WelcomeNudge, {
            notif_type: m.n0.WelcomeNudge,
          }),
          E = {};
        for (let s of t)
          switch (s.type) {
            case m.nc.WELCOME: {
              let t =
                (null == e ? void 0 : e.altId) != null
                  ? c.Z.getApplicationActivity(e.altId)
                  : (null == e ? void 0 : e.id) != null
                    ? c.Z.getApplicationActivity(e.id)
                    : null;
              null != t &&
                (0, a.Z)(t, v.xjy.JOIN) &&
                ((E.cancelText = _.intl.string(_.t["6F9ivr"])),
                (E.onCancelClick = (e, n) => {
                  u("unlock"),
                    o.Z.updateNotificationStatus(n),
                    o.Z.setInputLocked(!1, (0, d.QF)()),
                    (0, r.h7)(t, !1, v.IlC.POPOUT);
                }));
              break;
            }
            case m.nc.GO_LIVE_VOICE:
            case m.nc.GO_LIVE_NON_VOICE:
              (E.confirmText = _.intl.string(_.t.U76Ft7)),
                (E.onConfirmClick = (e, t) => {
                  u("unlock"),
                    o.Z.updateNotificationStatus(t),
                    o.Z.setInputLocked(!1, (0, d.QF)()),
                    (0, l.ZD)(
                      async () => {
                        let { default: e } = await Promise.all([
                          n.e("63288"),
                          n.e("77298"),
                          n.e("23357"),
                          n.e("29549"),
                          n.e("12013"),
                          n.e("52249"),
                          n.e("14627"),
                          n.e("31605"),
                          n.e("26182"),
                          n.e("95900"),
                          n.e("32776"),
                          n.e("87624"),
                          n.e("88449"),
                          n.e("57674"),
                          n.e("46746"),
                          n.e("18145"),
                        ]).then(n.bind(n, 60594));
                        return (t) =>
                          (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId:
                              s.type === m.nc.GO_LIVE_VOICE
                                ? s.voiceGuild.id
                                : void 0,
                            selectGuild: s.type === m.nc.GO_LIVE_NON_VOICE,
                            analyticsLocation: v.Sbl.OVERLAY_NUDGE,
                          });
                      },
                      { contextKey: g.u1 },
                    );
                });
              break;
            case m.nc.CONTENT_INVENTORY:
              (E.renderFooter = () =>
                (0, i.jsx)("div", {
                  className: S.container,
                  children: (0, i.jsx)(h.i, { entries: s.entries }),
                })),
                (E.onNotificationShow = () => {
                  o.Z.track(v.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                    user_ids: s.entries.map((e) => e.author_id),
                    entry_ids: s.entries.map((e) => e.id),
                  });
                });
          }
        return {
          ...E,
          icon:
            null != e
              ? (0, i.jsx)(Z, { game: e })
              : (0, i.jsx)("img", {
                  src: n(328756),
                  className: C.icon,
                  alt: "",
                }),
          title: null != e ? e.name : _.intl.string(_.t.pkXAeH),
          body: null,
          hint: () => (0, f.Q)((0, p.P)(), _.t.e6giBQ),
          onNotificationShow: (e) => {
            var t;
            s(),
              null === (t = E.onNotificationShow) ||
                void 0 === t ||
                t.call(E, e);
          },
          onNotificationClick: () => {
            u("unlock"), o.Z.setInputLocked(!1, (0, d.QF)());
          },
          onDismissClick: () => {
            u("dismiss");
          },
        };
      }
    },
    561064: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
        i: function () {
          return o;
        },
      });
      var i = n(442837),
        l = n(928518),
        r = n(501787);
      function o() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Z;
        return null !== (e = t.getWindow(r.$J)) && void 0 !== e ? e : window;
      }
      function a() {
        return (0, i.e7)([l.Z], () => o(l.Z));
      }
    },
    499401: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return l;
        },
      });
      var i = n(388032);
      function l(e) {
        let { application: t, username: n, usernameOnClick: l } = e;
        return null != t
          ? i.intl.formatToParts(i.t.Tes5Oj, {
              username: n,
              applicationName: t.name,
              usernameOnClick: l,
            })
          : i.intl.formatToParts(i.t.PUJtgo, {
              username: n,
              usernameOnClick: l,
            });
      }
    },
    693912: function (e, t, n) {
      n.d(t, {
        B2: function () {
          return s;
        },
        DS: function () {
          return o;
        },
        hj: function () {
          return u;
        },
        nh: function () {
          return a;
        },
      });
      var i = n(63063),
        l = n(981631),
        r = n(388032);
      function o(e) {
        let {
          application: t,
          username: n,
          usernameHook: o = l.dG4,
          applicationNameHook: a = l.dG4,
        } = e;
        return null != t
          ? r.intl.format(r.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: o,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(
                l.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : r.intl.format(r.t["+6V2sb"], {
              username: n,
              usernameHook: o,
              helpCenterLink: i.Z.getArticleURL(
                l.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function a(e) {
        let {
          application: t,
          username: n,
          usernameHook: o = l.dG4,
          applicationNameHook: a = l.dG4,
        } = e;
        return null != t
          ? r.intl.format(r.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: o,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(
                l.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : r.intl.format(r.t.sAX6rq, {
              username: n,
              usernameHook: o,
              helpCenterLink: i.Z.getArticleURL(
                l.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function s(e) {
        let {
          application: t,
          username: n,
          usernameOnClick: o,
          applicationNameOnClick: a,
          medium: s,
        } = e;
        return null != t
          ? r.intl.formatToParts(r.t["8r+Z+P"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: o,
              otherUsernameOnClick: a,
              medium: s,
              helpCenterLink: {
                url: i.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : r.intl.formatToParts(r.t.ojysqa, {
              username: n,
              usernameOnClick: o,
              medium: s,
              helpCenterLink: {
                url: i.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
      function u(e) {
        let {
          application: t,
          username: n,
          usernameOnClick: o,
          applicationNameOnClick: a,
          medium: s,
        } = e;
        return null != t
          ? r.intl.formatToParts(r.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: o,
              otherUsernameOnClick: a,
              medium: s,
              helpCenterLink: {
                url: i.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : r.intl.formatToParts(r.t["x2CN/f"], {
              username: n,
              usernameOnClick: o,
              medium: s,
              helpCenterLink: {
                url: i.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return r;
        },
        S: function () {
          return l;
        },
      });
      let i = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function l(e) {
        let { location: t } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function r(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    352527: function (e, t, n) {
      var i,
        l,
        r,
        o,
        a = n(442837),
        s = n(570140);
      let u = !1,
        c = !1;
      class d extends (o = a.ZP.Store) {
        get keepOpen() {
          return c;
        }
        get enabled() {
          return u;
        }
      }
      (r = "SoundboardOverlayStore"),
        (l = "displayName") in (i = d)
          ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = r),
        (t.Z = new d(s.Z, {
          SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((u = e.enabled), e.enabled)) {
              var t;
              c = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
          },
        }));
    },
    723170: function (e, t, n) {
      n.d(t, {
        B: function () {
          return d;
        },
        J: function () {
          return c;
        },
      }),
        n(789020);
      var i = n(442837),
        l = n(592125),
        r = n(9156),
        o = n(630388),
        a = n(569471),
        s = n(124368),
        u = n(981631);
      function c(e) {
        let t = a.Z.flags(e.id);
        if (null == t) return s.iN.NO_MESSAGES;
        if ((0, o.yE)(t, s.iN.ALL_MESSAGES)) return s.iN.ALL_MESSAGES;
        if ((0, o.yE)(t, s.iN.ONLY_MENTIONS)) return s.iN.ONLY_MENTIONS;
        if ((0, o.yE)(t, s.iN.NO_MESSAGES)) return s.iN.NO_MESSAGES;
        let n = l.Z.getChannel(e.parent_id);
        if (null == n || r.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id))
          return s.iN.NO_MESSAGES;
        let i = r.ZP.resolvedMessageNotifications(n);
        return i === u.bL.NO_MESSAGES
          ? s.iN.NO_MESSAGES
          : i === u.bL.ONLY_MENTIONS
            ? s.iN.ONLY_MENTIONS
            : s.iN.ALL_MESSAGES;
      }
      function d(e) {
        return (0, i.e7)([a.Z, r.ZP, l.Z], () => c(e), [e]);
      }
    },
    879815: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(442837),
        l = n(314897),
        r = n(131951),
        o = n(979651);
      function a(e) {
        return (0, i.cj)(
          [o.Z, r.Z, l.default],
          () =>
            (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : o.Z,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : r.Z,
                a =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : l.default,
                s =
                  null != e ? n.getVoiceState(e.getGuildId(), a.getId()) : null;
              return {
                selfDeaf: i.isSelfDeaf(),
                deaf:
                  null !== (t = null == s ? void 0 : s.deaf) &&
                  void 0 !== t &&
                  t,
              };
            })(e, o.Z, r.Z, l.default),
          [e],
        );
      }
    },
    892807: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(410575),
        s = n(933557),
        u = n(471445),
        c = n(430824),
        d = n(19780),
        h = n(699516),
        f = n(594174),
        p = n(981631),
        m = n(388032),
        v = n(476415);
      function g(e) {
        let {
            recentVoiceChannels: t,
            currentVoiceChannel: n,
            onClose: g,
            onSelect: E,
          } = e,
          _ = l.useCallback(
            (e) => {
              E(e), g();
            },
            [E, g],
          ),
          C = (0, r.e7)([d.Z], () => d.Z.getQuality()),
          S = {
            [p.IE4.FINE]: o.ConnectionFineIcon,
            [p.IE4.AVERAGE]: o.ConnectionAverageIcon,
            [p.IE4.BAD]: o.ConnectionBadIcon,
            [p.IE4.UNKNOWN]: o.ConnectionUnknownIcon,
          }[C];
        return (0, i.jsx)(a.Z, {
          section: p.jXE.CONTEXT_MENU,
          children: (0, i.jsx)(o.Menu, {
            onSelect: g,
            navId: "manage-streams",
            onClose: g,
            "aria-label": m.intl.string(m.t["+9QSnp"]),
            children: (0, i.jsx)(o.MenuGroup, {
              children: t.map((e) => {
                var t;
                let l = (0, u.KS)(e),
                  r = e.id === (null == n ? void 0 : n.id);
                return (0, i.jsx)(
                  o.MenuItem,
                  {
                    id: e.id,
                    label: (0, i.jsxs)(o.Text, {
                      variant: "text-sm/semibold",
                      className: v.label,
                      color: r ? "text-positive" : "text-normal",
                      children: [
                        null != l
                          ? (0, i.jsx)(l, { color: "currentColor", size: "xs" })
                          : void 0,
                        (0, s.F6)(e, f.default, h.Z),
                      ],
                    }),
                    subtext:
                      null != e.getGuildId()
                        ? null === (t = c.Z.getGuild(e.getGuildId())) ||
                          void 0 === t
                          ? void 0
                          : t.name
                        : void 0,
                    subtextLineClamp: 1,
                    icon: r ? S : void 0,
                    action: () => _(e),
                  },
                  e.id,
                );
              }),
            }),
          }),
        });
      }
    },
    606206: function (e, t, n) {
      let i;
      n(47120), n(653041), n(411104);
      var l,
        r,
        o,
        a,
        s = n(442837),
        u = n(570140),
        c = n(278323),
        d = n(212819),
        h = n(933557),
        f = n(592125),
        p = n(430824),
        m = n(293273),
        v = n(158776),
        g = n(699516),
        E = n(594174),
        _ = n(55589),
        C = n(981631);
      let S = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
        Z = null,
        I = null,
        x = [],
        N = [];
      function O(e) {
        (x = [...x, e]),
          (N = N.map((e) => ({ ...e, sent: x.includes(e.data.record.id) }))),
          A.emitChange();
      }
      function T() {
        (Z = null), null != i && (i.destroy(), (i = null)), null != I && I();
      }
      function y() {
        let e =
          null != Z && null != Z.application_id
            ? m.Z.getApplicationActivity(Z.application_id)
            : null;
        if (null != Z && (null == e || null == e.party || null == e.party.id))
          return T();
      }
      class b extends (l = s.ZP.Store) {
        initialize() {
          this.waitFor(m.Z);
        }
        getActivity() {
          return Z;
        }
        getQuery() {
          var e;
          return null !== (e = null == i ? void 0 : i.query) && void 0 !== e
            ? e
            : "";
        }
        getResults() {
          return N;
        }
      }
      (a = "ActivityInviteModalStore"),
        (o = "displayName") in (r = b)
          ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = a);
      let A = new b(u.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
          (Z = e.activity),
            (I = e.resolve),
            (x = []),
            null == i &&
              (i = new d.ZP(
                (e, t) => {
                  var n;
                  return (
                    (n = e),
                    void ((N = (
                      "" === t.trim()
                        ? (function () {
                            let e = [];
                            return (
                              _.Z.getPrivateChannelIds().forEach((t) => {
                                let n = f.Z.getChannel(t);
                                if (null != n)
                                  if (n.type === C.d4z.DM) {
                                    let t = n.getRecipientId(),
                                      i =
                                        null != t ? E.default.getUser(t) : null;
                                    null != i &&
                                      e.push({
                                        type: d.h8.USER,
                                        record: i,
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
                            sent: x.includes(t.id),
                            status: v.Z.getStatus(t.id),
                            data: e,
                          };
                        }
                        case d.h8.TEXT_CHANNEL: {
                          let { record: t } = e,
                            n = f.Z.getChannel(t.parent_id),
                            i = p.Z.getGuild(t.guild_id);
                          return {
                            type: d.h8.TEXT_CHANNEL,
                            sent: x.includes(t.id),
                            categoryName:
                              null != n ? (0, h.F6)(n, E.default, g.Z) : "",
                            guildName: null != i ? i.toString() : "",
                            data: e,
                          };
                        }
                        case d.h8.GROUP_DM: {
                          let { record: t } = e;
                          return {
                            type: d.h8.GROUP_DM,
                            sent: x.includes(t.id),
                            data: e,
                          };
                        }
                        default:
                          throw Error("Unknown Result Type: ".concat(e.type));
                      }
                    })),
                    A.emitChange())
                  );
                },
                S,
                100,
              )),
            i.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
          let { query: t } = e;
          null != i && i.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
          if (null == Z) return;
          let t = e.channelId,
            n = e.userId;
          null != t
            ? c.Z.sendActivityInvite({
                channelId: t,
                type: C.mFx.JOIN,
                activity: Z,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => O(t))
            : null != n &&
              c.Z.sendActivityInviteUser({
                userId: n,
                type: C.mFx.JOIN,
                activity: Z,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => O(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: T,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          return !!t && null != Z && (T(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: y,
        RPC_APP_DISCONNECTED: y,
      });
      t.Z = 12633 == n.j ? A : null;
    },
    55589: function (e, t, n) {
      let i, l, r;
      n(47120), n(653041);
      var o,
        a,
        s,
        u,
        c,
        d,
        h = n(913527),
        f = n.n(h),
        p = n(442837),
        m = n(759174),
        v = n(570140),
        g = n(355298),
        E = n(333984),
        _ = n(131704),
        C = n(592125),
        S = n(430824),
        Z = n(306680),
        I = n(9156),
        x = n(594174),
        N = n(709054),
        O = n(176505);
      ((s = o || (o = {})).DEFAULT = "DEFAULT"), (s.FAVORITE = "FAVORITE");
      let T = new m.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function y(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let i =
                    null !==
                      (n =
                        null !== (t = Z.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  l = e.isMessageRequestTimestamp;
                if (null != l) {
                  let e = f()(l).valueOf(),
                    t = N.default.fromTimestamp(e);
                  return N.default.compare(i, t) > 0 ? i : t;
                }
                return i;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: g.Z.isMessageRequest(e.id) || E.Z.isSpam(e.id),
        };
      }
      function b() {
        T.clear(),
          Object.values(C.Z.getMutablePrivateChannels()).forEach((e) => {
            T.set(e.id, y(e));
          });
      }
      function A() {
        let e = C.Z.getMutablePrivateChannels();
        for (let t in e) T.set(t, y(e[t]));
      }
      let L =
        ((i = []),
        (l = []),
        (r = []),
        () => {
          let e = T.values("FAVORITE"),
            t = T.values("DEFAULT");
          return (
            (i !== e || l !== t) &&
              ((r = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return r.push(t);
              }),
              (i = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return r.push(t);
              }),
              (l = t)),
            r
          );
        });
      class R extends (a = p.ZP.Store) {
        initialize() {
          this.waitFor(C.Z, S.Z, x.default, g.Z, I.ZP),
            this.syncWith([I.ZP, g.Z], b);
        }
        getPrivateChannelIds() {
          return L();
        }
        getSortedChannels() {
          return [T.values("FAVORITE"), T.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            T.values().forEach((t) => {
              let { channelId: n, lastMessageId: i } = t;
              e[n] = i;
            }),
            e
          );
        }
      }
      (d = "PrivateChannelSortStore"),
        (c = "displayName") in (u = R)
          ? Object.defineProperty(u, c, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[c] = d),
        (t.Z = new R(v.Z, {
          CONNECTION_OPEN: b,
          CONNECTION_OPEN_SUPPLEMENTAL: b,
          OVERLAY_INITIALIZE: b,
          CACHE_LOADED: A,
          CACHE_LOADED_LAZY: A,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, _.hv)(e.type) || T.has(e.id)) && T.set(e.id, y(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, _.hv)(t.type) || t.id === O.V) return !1;
            T.set(t.id, y(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return T.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!T.has(t)) return !1;
            let i = C.Z.getChannel(t);
            return null != i && T.set(t, y(i, n.id));
          },
          GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return T.delete(t);
          },
          LOGOUT: function () {
            T.clear();
          },
        }));
    },
    129724: function (e, t, n) {
      n.d(t, {
        A: function () {
          return o;
        },
      });
      var i = n(913527),
        l = n.n(i),
        r = n(388032);
      function o(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.intl.string(r.t["Yl1D8/"]),
          i = l().duration(e, "seconds");
        if (i.days() > 0)
          return r.intl.formatToPlainString(t ? r.t.GBLpQ0 : r.t.k2UNz8, {
            days: i.days(),
          });
        if (i.hours() > 0)
          return r.intl.formatToPlainString(t ? r.t.rhY1Rk : r.t.xCjYxM, {
            hours: i.hours(),
          });
        if (i.minutes() > 0)
          return r.intl.formatToPlainString(t ? r.t["XIGt+f"] : r.t.iXLF9f, {
            minutes: i.minutes(),
          });
        else if (e > 0)
          return r.intl.formatToPlainString(t ? r.t.pyvjRk : r.t.geSp4O, {
            seconds: i.seconds(),
          });
        else return t ? r.intl.string(r.t["Yl1D8/"]) : n;
      }
    },
    352736: function (e, t, n) {
      var i,
        l,
        r = n(25209),
        o = n(97797),
        a = n(35125),
        s = n(786761),
        u = n(739566),
        c = n(499401),
        d = n(693912),
        h = n(23750),
        f = n(314897),
        p = n(592125),
        m = n(430824),
        v = n(594174),
        g = n(5192),
        E = n(709054),
        _ = n(981631),
        C = n(388032);
      let S = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((i = l || (l = {})).NORMAL = "NORMAL"), (i.CLAN = "CLAN");
      let Z = () => [
          C.t["0cuj7u"],
          C.t["MuW+CA"],
          C.t.osqpHR,
          C.t["5ToSh4"],
          C.t.JEB8pq,
          C.t.pkOV5e,
          C.t.kRb1Jy,
          C.t.EmKLY2,
          C.t.rPtBnZ,
          C.t["5B/ekZ"],
          C.t.ESNC3d,
          C.t["Iw6d8/"],
          C.t.WecSZ2,
        ],
        I = () => [
          C.t.Jm6e09,
          C.t.MGRnRU,
          C.t.EXOEGh,
          C.t["5uCTFB"],
          C.t.rl45Qk,
          C.t.Bh9zpa,
          C.t.RdEy1N,
          C.t.qcdp09,
          C.t.F7w2Rk,
          C.t.gSyOgI,
          C.t.uYgqv7,
          C.t["b/1SBQ"],
          C.t.LhebZG,
        ],
        x = () => [
          C.t["20E/ys"],
          C.t["oa8+kp"],
          C.t.zoKkXl,
          C.t.FP9aS0,
          C.t.E5Zj1d,
          C.t["6Anmws"],
          C.t.sR78HR,
          C.t.gA9qPz,
          C.t.Hkiyp6,
          C.t.w1HMho,
        ],
        N = () => [
          C.t["8fy3DQ"],
          C.t.UproUV,
          C.t["7l3EyM"],
          C.t.GToyaG,
          C.t["DUs+Zm"],
          C.t.yLkbfn,
          C.t.oWdvws,
          C.t.tOoKTE,
          C.t["VM7+Oj"],
          C.t["hJx/u7"],
        ],
        O = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return Z();
            case "CLAN":
              return x();
          }
        },
        T = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return I();
            case "CLAN":
              return N();
          }
        };
      function y(e, t) {
        let n = T(t),
          i = E.default.extractTimestamp(e) % n.length;
        return n[i];
      }
      function b(e) {
        return (0, r.Rp)(
          C.intl.formatToParts(C.t["ihxM9/"], {
            username: e,
            usernameOnClick: _.dG4,
          }),
        );
      }
      function A(e, t) {
        let n = p.Z.getChannel(t);
        return null == n || null == m.Z.getGuild(n.getGuildId())
          ? b(e)
          : (0, r.Rp)(
              C.intl.formatToParts(C.t["ihxM9/"], {
                username: e,
                usernameOnClick: _.dG4,
              }),
            );
      }
      function L(e) {
        var t;
        return (
          null === (t = m.Z.getGuild(e)) || void 0 === t
            ? void 0
            : t.hasFeature(_.oNc.CLAN)
        )
          ? "CLAN"
          : "NORMAL";
      }
      t.Z = {
        stringify: function (e, t) {
          var n, i, l, E;
          let S = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
            Z =
              null != S && "string" != typeof S
                ? v.default.getUser(S.id)
                : void 0,
            I = e.channel_id,
            x = g.ZP.getName(null, I, e.author);
          switch (e.type) {
            case _.uaV.RECIPIENT_ADD:
              if (null == Z) return;
              return (0, r.Rp)(
                C.intl.formatToParts(C.t["7/Xl0d"], {
                  username: x,
                  usernameOnClick: _.dG4,
                  otherUsername: g.ZP.getName(null, I, Z),
                  otherUsernameOnClick: _.dG4,
                }),
              );
            case _.uaV.RECIPIENT_REMOVE:
              if (null == Z) return;
              let N = e.author;
              if (null == N || N.id === Z.id)
                return (0, r.Rp)(
                  C.intl.formatToParts(C.t["Qn5+LS"], {
                    username: x,
                    usernameOnClick: _.dG4,
                  }),
                );
              return (0, r.Rp)(
                C.intl.formatToParts(C.t.QtZ0RE, {
                  username: x,
                  usernameOnClick: _.dG4,
                  otherUsername: g.ZP.getName(null, I, Z),
                  otherUsernameOnClick: _.dG4,
                }),
              );
            case _.uaV.CALL:
              let { call: O } = e;
              if (null != O && -1 === O.participants.indexOf(f.default.getId()))
                return (0, r.Rp)(
                  C.intl.formatToParts(C.t.DbgSAw, {
                    username: x,
                    usernameOnClick: _.dG4,
                  }),
                );
              return;
            case _.uaV.CHANNEL_NAME_CHANGE:
              return (0, r.Rp)(
                C.intl.formatToParts(
                  t.isForumPost() ? C.t["qa0e/v"] : C.t.XCPMEB,
                  {
                    username: x,
                    usernameOnClick: _.dG4,
                    channelName: e.content,
                  },
                ),
              );
            case _.uaV.CHANNEL_ICON_CHANGE:
              return (0, r.Rp)(
                C.intl.formatToParts(C.t.wypJZ2, {
                  username: x,
                  usernameOnClick: _.dG4,
                }),
              );
            case _.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, r.Rp)(
                C.intl.formatToParts(C.t["/M60j4"], {
                  username: x,
                  usernameOnClick: _.dG4,
                }),
              );
            case _.uaV.USER_JOIN:
              let T = L(t.guild_id);
              return (0, r.Rp)(
                C.intl.formatToParts(y(e.id, T), {
                  username: x,
                  usernameOnClick: _.dG4,
                }),
              );
            case _.uaV.GUILD_BOOST:
              return b(x);
            case _.uaV.GUILD_BOOST_TIER_1:
            case _.uaV.GUILD_BOOST_TIER_2:
            case _.uaV.GUILD_BOOST_TIER_3:
              return A(x, I);
            case _.uaV.GUILD_INVITE_REMINDER:
              return C.intl.string(C.t.gxyKvr);
            case _.uaV.THREAD_STARTER_MESSAGE:
              return C.intl.formatToPlainString(C.t["B8H+Cg"], {
                username: x,
                threadName: t.name,
              });
            case _.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (e instanceof h.ZP) return null;
              return (0, r.Rp)(
                (0, a.vp)({
                  username: x,
                  guildId: t.guild_id,
                  roleSubscriptionData: e.role_subscription_data,
                }),
              );
            case _.uaV.PURCHASE_NOTIFICATION:
              if (
                e instanceof h.ZP ||
                (null === (l = e.purchase_notification) || void 0 === l
                  ? void 0
                  : null === (i = l.guild_product_purchase) || void 0 === i
                    ? void 0
                    : i.product_name) == null
              )
                return null;
              return (0, r.Rp)(
                (0, o.i)({
                  username: x,
                  productName:
                    e.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case _.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (e instanceof h.ZP) return null;
              let R = (0, u.ZH)((0, s.e5)(e));
              return (0, r.Rp)(
                (0, c.Y)({ application: e.application, username: R.nick }),
              );
            case _.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (e instanceof h.ZP) return null;
              return (0, r.Rp)(
                (0, d.B2)({
                  application: e.application,
                  username: (0, u.ZH)((0, s.e5)(e)).nick,
                }),
              );
            case _.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (e instanceof h.ZP) return null;
              return (0, r.Rp)(
                (0, d.hj)({
                  application: e.application,
                  username: (0, u.ZH)((0, s.e5)(e)).nick,
                }),
              );
            case _.uaV.AUTO_MODERATION_ACTION:
              if (
                null === (E = e.embeds) || void 0 === E
                  ? void 0
                  : E.some((e) => {
                      let { type: t } = e;
                      return t === _.hBH.AUTO_MODERATION_NOTIFICATION;
                    })
              )
                return (function (e) {
                  let t = p.Z.getChannel(e);
                  if (null == t) return null;
                  let n = m.Z.getGuild(t.getGuildId());
                  return null == n
                    ? null
                    : (0, r.Rp)(
                        C.intl.formatToParts(C.t["a+lJKi"], {
                          guildName: n.name,
                        }),
                      );
                })(I);
              return e.content;
            case _.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (e, t, n) {
                let i = p.Z.getChannel(t);
                if (null == i) return null;
                let l = m.Z.getGuild(i.getGuildId());
                return null == l
                  ? null
                  : (0, r.Rp)(
                      C.intl.formatToParts(C.t.iOuWPj, {
                        username: e,
                        guildName: l.name,
                        time:
                          "" !== n
                            ? new Date(n).toLocaleString(C.intl.currentLocale, {
                                hour: "numeric",
                                minute: "2-digit",
                              })
                            : "",
                      }),
                    );
              })(x, I, e.content);
            case _.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (e, t) {
                let n = p.Z.getChannel(t);
                if (null == n) return null;
                let i = m.Z.getGuild(n.getGuildId());
                return null == i
                  ? null
                  : (0, r.Rp)(
                      C.intl.formatToParts(C.t.axmbpq, {
                        username: e,
                        guildName: i.name,
                      }),
                    );
              })(x, I);
            default:
              return e.content;
          }
        },
        getSystemMessageUserJoin: function (e, t) {
          let n = O(t),
            i = E.default.extractTimestamp(e) % n.length;
          return n[i];
        },
        getSystemMessageUserJoinMobile: y,
        getSystemMessageBotJoin: function (e) {
          return null == S[e]
            ? null
            : C.intl.format(C.t.xw1Ij4, {
                learnOnClick: { onClick: () => window.open(S[e]) },
              });
        },
        getWelcomeMessageKind: L,
      };
    },
    714909: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    275906: function (e, t, n) {
      e.exports = {
        pro: "pro_b5053a",
        tip: "tip_b5053a",
        block: "block_b5053a",
        inline: "inline_b5053a",
      };
    },
    918532: function (e, t, n) {
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
    19123: function (e, t, n) {
      e.exports = {
        dismissButton: "dismissButton_a9614f",
        dismissIcon: "dismissIcon_a9614f",
      };
    },
    26437: function (e, t, n) {
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
    900357: function (e, t, n) {
      e.exports = {
        gridContainer: "gridContainer_dcc220",
        horizontal: "horizontal_dcc220",
        vertical: "vertical_dcc220",
        tileContainer: "tileContainer_dcc220",
        tile: "tile_dcc220",
      };
    },
    75226: function (e, t, n) {
      e.exports = { goLiveGridContainer: "goLiveGridContainer_c324b1" };
    },
    78561: function (e, t, n) {
      e.exports = {
        buttonContainer: "buttonContainer_b1ba99",
        keybind: "keybind_b1ba99",
        button: "button_b1ba99",
      };
    },
    885870: function (e, t, n) {
      e.exports = { key: "key_da7116" };
    },
    936925: function (e, t, n) {
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
    136795: function (e, t, n) {
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
    125377: function (e, t, n) {
      e.exports = {
        panelContainer: "panelContainer_d476d7",
        locked: "locked_d476d7",
        panelRow: "panelRow_d476d7",
        separator: "separator_d476d7",
      };
    },
    625478: function (e, t, n) {
      e.exports = { container: "container_c7fa60" };
    },
    227002: function (e, t, n) {
      e.exports = {
        videoList: "videoList_a6fa57",
        vertical: "vertical_a6fa57",
        tile: "tile_a6fa57",
      };
    },
    368430: function (e, t, n) {
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
    782901: function (e, t, n) {
      e.exports = { extrasContainer: "extrasContainer_b932b3" };
    },
    689394: function (e, t, n) {
      e.exports = {
        titleWrapper: "titleWrapper_e8dbc8 bgShade_e8dbc8",
        button: "button_e8dbc8 bgShade_e8dbc8",
        active: "active_e8dbc8",
      };
    },
    750617: function (e, t, n) {
      e.exports = { textArea: "textArea_daa88b" };
    },
    638266: function (e, t, n) {
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
    802015: function (e, t, n) {
      e.exports = { container: "container_a2d09c" };
    },
    624960: function (e, t, n) {
      e.exports = { container: "container_f19072" };
    },
    279778: function (e, t, n) {
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
    283997: function (e, t, n) {
      e.exports = {
        container: "container_feab95",
        title: "title_feab95",
        tabs: "tabs_feab95",
        tabBarItem: "tabBarItem_feab95",
        debugPanelStandalone: "debugPanelStandalone_feab95",
        debugPanelSection: "debugPanelSection_feab95",
      };
    },
    462346: function (e, t, n) {
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
    591286: function (e, t, n) {
      e.exports = {
        status: "status_dcb18f",
        hoverableStatus: "hoverableStatus_dcb18f",
      };
    },
    302690: function (e, t, n) {
      e.exports = {
        container: "container_f59a38",
        tag: "tag_f59a38",
        header: "header_f59a38",
        code: "code_f59a38",
      };
    },
    277766: function (e, t, n) {
      e.exports = {
        code: "code_e9fe13",
        chunk: "chunk_e9fe13",
        divider: "divider_e9fe13",
        codeText: "codeText_e9fe13",
        loading: "loading_e9fe13",
      };
    },
    429200: function (e, t, n) {
      e.exports = { container: "container_a7c5d3" };
    },
    762778: function (e, t, n) {
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
    422092: function (e, t, n) {
      e.exports = { soundButton: "soundButton_d608d3" };
    },
    476415: function (e, t, n) {
      e.exports = { label: "label_eaa344" };
    },
  },
]);
//# sourceMappingURL=2b0c27b1e580ee45337b.js.map
