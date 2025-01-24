(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97315"],
  {
    544140: function (e, t, n) {
      var r = n(796581),
        i = n(149912);
      e.exports = function e(t, n, l, a, u) {
        var o = -1,
          s = t.length;
        for (l || (l = i), u || (u = []); ++o < s; ) {
          var c = t[o];
          n > 0 && l(c)
            ? n > 1
              ? e(c, n - 1, l, a, u)
              : r(u, c)
            : !a && (u[u.length] = c);
        }
        return u;
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
        u = n(166459),
        o = n(531643),
        s = n(881052),
        c = n(673750),
        d = n(141795),
        f = n(476326),
        p = n(680287),
        h = n(247206),
        _ = n(539573),
        E = n(786761),
        m = n(3148),
        g = n(48854),
        C = n(785359),
        v = n(79390),
        A = n(980463),
        I = n(576645),
        N = n(317951),
        T = n(287941),
        S = n(623292),
        O = n(807092),
        R = n(467798),
        P = n(703558),
        Z = n(117530),
        y = n(630388),
        L = n(226351),
        b = n(981631),
        D = n(388032);
      async function U(e) {
        var t, n, r, d;
        let f,
          {
            channelId: U,
            uploads: M,
            draftType: x,
            parsedMessage: w,
            options: k = {},
            raiseEndpointErrors: G = !1,
          } = e,
          V = new p.Z(b.ANM.MESSAGES(U)),
          B = new L.o(),
          F = {
            content: "",
            nonce: "",
            channel_id: U,
            type: b.uaV.DEFAULT,
            sticker_ids: null == k ? void 0 : k.stickerIds,
            poll: null == k ? void 0 : k.poll,
            confetti_potion: (0, I.vY)(
              null == k ? void 0 : k.confettiPotionData,
            ),
          };
        null != w && (F.content = null == w ? void 0 : w.content),
          null != O.Z.getPendingReply(U) &&
            ((F.type = b.uaV.REPLY),
            (F.message_reference = k.messageReference),
            (F.allowed_mentions = k.allowedMentions),
            (0, S.A6)(U));
        let [H, j] = (0, R.Z)(F.content);
        H &&
          ((F.content = j),
          (F.flags = (0, y.pj)(
            null !== (n = F.flags) && void 0 !== n ? n : 0,
            b.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let W = null !== (r = k.nonce) && void 0 !== r ? r : (0, g.r)(),
          K = (0, m.ZP)({
            channelId: U,
            content: F.content,
            tts: null !== (d = null == w ? void 0 : w.tts) && void 0 !== d && d,
            type: F.type,
            messageReference: F.message_reference,
            flags: F.flags,
            nonce: W,
            poll: (0, v.x9)(k.poll),
          });
        return (
          ((F.nonce = W),
          V.on("start", (e) => {
            (f = (0, E.e5)({ ...K, id: e.id })),
              i.Z.dispatch({
                type: "UPLOAD_START",
                channelId: U,
                file: e,
                message: f,
                uploader: V,
              });
          }),
          V.on("progress", (e) => {
            i.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: U, file: e });
          })),
          V.on("error", (e, t, n, r) => {
            if (
              (i.Z.dispatch({
                type: "UPLOAD_FAIL",
                channelId: U,
                file: e,
                messageRecord: f,
              }),
              (0, C.x)({
                fileItems: e.items,
                failureCode: t,
                errorMessage: null == r ? void 0 : r.msg,
              }),
              t === b.evJ.EXPLICIT_CONTENT)
            ) {
              a.Z.sendExplicitMediaClydeError(
                U,
                null == n ? void 0 : n.attachments,
                h.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (t === b.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: t, message: null == n ? void 0 : n.message },
                r =
                  null == f
                    ? null
                    : { type: c.$V.SEND, message: { ...f, channelId: U } };
              (0, o.openUploadError)({
                title: D.intl.string(D.t.B3vFdX),
                help: (0, _.uF)(r, e),
              });
              return;
            }
            if (t !== b.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (G)
                B.reject(new s.Hx({ status: t, body: null != n ? n : {} }, t));
              else {
                var d;
                (0, o.openUploadError)({
                  title: D.intl.string(D.t.B3vFdX),
                  help:
                    null !== (d = null == n ? void 0 : n.message) &&
                    void 0 !== d
                      ? d
                      : D.intl.string(D.t.zMEjJi),
                });
              }
              "" !== F.content &&
                "" === P.Z.getDraft(U, x) &&
                l.Z.saveDraft(U, F.content, x),
                0 === Z.Z.getUploadCount(U, x) &&
                  u.Z.setUploads({ channelId: U, uploads: M, draftType: x });
            }
          }),
          V.on("complete", (e, t) => {
            i.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: U,
              file: e,
              aborted: V._aborted,
              messageRecord: t,
            });
            let n = (0, I.ZC)(t);
            null != n &&
              ((0, A.gA)(N.D1),
              (0, T.I)({ name: n.name, id: n.id }, void 0, !0));
          }),
          null == k ||
            null === (t = k.confettiPotionData) ||
            void 0 === t ||
            t.callback(),
          await V.uploadFiles(M, F),
          B.resolve(),
          B.promise
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
          U({ channelId: t, uploads: a, draftType: r });
        },
        upload: function e(t) {
          let {
              channelId: n,
              file: u,
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
            let e = O.Z.getPendingReply(n);
            if (null != e) {
              let t = a.Z.getSendMessageOptionsForReply(e);
              (_.type = b.uaV.REPLY),
                (_.message_reference = t.messageReference),
                (_.allowed_mentions = t.allowedMentions),
                (0, S.A6)(n);
            }
          }
          let E = new p.Z(b.ANM.MESSAGES(n));
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
                d === b.evJ.EXPLICIT_CONTENT)
              ) {
                a.Z.sendExplicitMediaClydeError(
                  n,
                  null == f ? void 0 : f.attachments,
                  h.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, o.openUploadError)({
                title: D.intl.string(D.t.B3vFdX),
                help: D.intl.format(D.t.gIlRx8, {
                  onClick: () => {
                    (0, r.closeModal)(o.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: n, file: u, draftType: s, message: c });
                  },
                }),
              }),
                "" !== _.content &&
                  "" === P.Z.getDraft(n, s) &&
                  l.Z.saveDraft(n, _.content, s);
            }),
            E.on("complete", (e) => {
              i.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: n, file: e });
            }),
            E.upload(u, _);
        },
        uploadFiles: U,
        cancel(e) {
          i.Z.dispatch({ type: "UPLOAD_CANCEL_REQUEST", file: e }),
            null != e.draftContent &&
              null != e.channelId &&
              "" === P.Z.getDraft(e.channelId, P.d.ChannelMessage) &&
              i.Z.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: P.d.ChannelMessage,
              });
        },
      };
    },
    400354: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return u;
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
        u = (e) => {
          let t = i.useRef(null),
            u = i.useRef(e);
          u.current = e;
          let o = i.useMemo(
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
            events: { onClick: o, onMouseEnter: s, onMouseLeave: c },
            play: o,
            Component: i.useCallback(
              (e) =>
                (0, r.jsx)(l.L, {
                  ...e,
                  src: () => n.e("68449").then(n.t.bind(n, 406785, 19)),
                  ref: t,
                  initialAnimation: u.current,
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
        u = n(861990),
        o = n(388032);
      class s extends l.Z {
        async uploadFiles(e, t) {
          let { addFilesTo: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super.upload({ name: o.intl.string(o.t.jfKTen) }, t, e);
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
          let o = [];
          this.files.forEach((e, t) => {
            let n = (0, u.B)(e, t);
            e.item.platform === a.ow.WEB && o.push({ ...n });
          }),
            (l =
              null != n && null != t
                ? this._addAttachmentsToPayload(t, n, o)
                : { ...t, attachments: o });
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
    778569: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(47120);
      var r = n(192379),
        i = n(81063);
      let l = ["embedded_cover", "embedded_background"];
      function a(e) {
        let { applicationId: t, size: n, names: a = l } = e,
          [u, o] = r.useState(null),
          [s, c] = r.useState(!0),
          d = (0, i.getAssetImage)(t, u, n),
          f = r.useRef(a);
        return (
          r.useEffect(() => {
            f.current = a;
          }),
          r.useEffect(() => {
            let { current: e } = f;
            null != t &&
              (0, i.getAssets)(t).then((t) => {
                for (let [n, r] of (c(!1), Object.entries(t)))
                  if (null != r && "" !== r.id && e.includes(r.name)) {
                    o(r.id);
                    return;
                  }
              });
          }, [t]),
          { url: d, state: s ? "loading" : null != d ? "fetched" : "not-found" }
        );
      }
    },
    570928: function (e, t, n) {
      "use strict";
      var r,
        i,
        l,
        a,
        u = n(200651),
        o = n(192379),
        s = n(120356),
        c = n.n(s),
        d = n(971139);
      class f extends (a = o.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            hoverText: n,
            className: r,
            forceHover: i,
            ...l
          } = this.props;
          return (0, u.jsxs)("div", {
            ...l,
            className: c()(r, d.hoverRoll, {
              [d.disabled]: null == n,
              [d.forceHover]: i,
            }),
            children: [
              (0, u.jsx)(e, { className: d.hovered, children: n }),
              (0, u.jsx)(e, { className: d.default, children: t }),
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
          return o;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        l = n(846027),
        a = n(468026),
        u = n(388032);
      function o(e, t) {
        if (e) {
          (0, i.openModal)((e) =>
            (0, r.jsx)(a.default, {
              ...e,
              title: u.intl.string(u.t.QZ7WSU),
              body: u.intl.string(u.t.Tl9JpK),
            }),
          );
          return;
        }
        l.Z.toggleSelfDeaf({ location: t });
      }
    },
    175470: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return r;
        },
      });
      let r = (0, n(15729).U)((e) => ({
        clipsButtonRef: null,
        setClipsButtonRef: (t) => e({ clipsButtonRef: t }),
      }));
    },
    576855: function (e, t, n) {
      "use strict";
      var r,
        i,
        l,
        a,
        u = n(200651),
        o = n(192379),
        s = n(120356),
        c = n.n(s),
        d = n(481060),
        f = n(388032),
        p = n(323822);
      let h = { BLOCK: p.block, INLINE: p.inline };
      class _ extends (a = o.PureComponent) {
        render() {
          let {
            children: e,
            className: t,
            textClassName: n,
            type: r = h.BLOCK,
            style: i,
          } = this.props;
          return (0, u.jsxs)("div", {
            className: c()(t, r),
            style: i,
            children: [
              (0, u.jsxs)(d.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-positive",
                className: p.pro,
                children: [f.intl.string(f.t["8tvIiI"]), ":"],
              }),
              (0, u.jsx)(d.Text, {
                className: c()(p.tip, n),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      (r = _),
        (i = "Types"),
        (l = h),
        i in r
          ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = l),
        (t.Z = _);
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
          return u;
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
        u = [
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
          return h;
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
      var u = n(981631),
        o = n(388032);
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
          { content: a, formatParams: u } = p({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
          });
        return o.intl.format(a, u);
      }
      function d(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
          } = e,
          { content: a, formatParams: u } = p({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
          });
        return o.intl.formatToParts(a, u);
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
      function p(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: r = s,
            roleSubscriptionOnClickHandler: i = u.dG4,
            guildId: l,
            roleSubscriptionData: a,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: p,
            isRenewal: h,
          } = f(l, a);
        return (
          (t = p ? (h ? o.t.Iy66Mz : o.t.eCgb2d) : h ? o.t.mPTTdn : o.t.mYjFFx),
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
      function h(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: r = s,
            roleSubscriptionOnClickHandler: i = u.dG4,
            guildId: l,
            roleSubscriptionData: a,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: p,
            isRenewal: h,
          } = f(l, a);
        return (
          (t = p
            ? h
              ? o.t.OQ0OU1
              : o.t["+N9bxs"]
            : h
              ? o.t.OxP1ND
              : o.t["6Z1E+/"]),
          o.intl.formatToParts(t, {
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
          u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
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
    687058: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(757143);
      var r = n(192379),
        i = n(442837),
        l = n(131951),
        a = n(388032);
      let u = /^Default/;
      function o() {
        let e = (0, i.e7)([l.Z], () => l.Z.getInputDevices());
        return r.useMemo(() => {
          let t = { ...e },
            n = t.default;
          return null == n
            ? t
            : ((t.default = {
                ...n,
                name: n.name.replace(u, a.intl.string(a.t.bBvAEB)),
              }),
              t);
        }, [e]);
      }
    },
    253052: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(757143);
      var r = n(192379),
        i = n(442837),
        l = n(131951),
        a = n(388032);
      let u = /^Default/;
      function o() {
        let e = (0, i.e7)([l.Z], () => l.Z.getOutputDevices());
        return r.useMemo(() => {
          let t = { ...e },
            n = t.default;
          return null == n
            ? t
            : ((t.default = {
                ...n,
                name: n.name.replace(u, a.intl.string(a.t.bBvAEB)),
              }),
              t);
        }, [e]);
      }
    },
    850908: function (e, t, n) {
      "use strict";
      function r(e) {
        if (null != e.title && null != e.filename) {
          let t = e.filename.lastIndexOf("."),
            n = t > 0 ? e.filename.substr(t) : "";
          return e.title + n;
        }
        return e.filename;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    809357: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
        o: function () {
          return o;
        },
      });
      var r = n(442837),
        i = n(522474),
        l = n(658785),
        a = n(981631);
      function u(e) {
        let { location: t, options: n } = e,
          r = o(),
          { showKeybindIndicators: i } = l.Z.useExperiment({ location: t }, n);
        return i && r;
      }
      function o() {
        return !(0, r.e7)([i.Z], () =>
          i.Z.getWindowVisible(a.KJ3.ACTIVITY_POPOUT),
        );
      }
    },
    989373: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n(200651);
      n(192379);
      var i = n(13245),
        l = n(493773),
        a = n(238246),
        u = n(145597),
        o = n(554370);
      function s(e) {
        let { withTitleBar: t, windowKey: n } = e;
        return (
          (0, l.Z)(() => {
            i.Z.successfullyShown((0, u.QF)());
          }),
          (0, r.jsx)(a.Z, {
            withTitleBar: t,
            windowKey: n,
            title: "Discord Overlay",
            children: (0, r.jsx)(o.Z, {}),
          })
        );
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
        u = n(271383),
        o = n(430824);
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
          this.waitFor(u.ZP, o.Z, a.Z),
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
      let p = new f(l.Z, {
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
      t.Z = p;
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
          return o;
        },
        DS: function () {
          return a;
        },
        hj: function () {
          return s;
        },
        nh: function () {
          return u;
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
          applicationNameHook: u = i.dG4,
        } = e;
        return null != t
          ? l.intl.format(l.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: u,
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
      function u(e) {
        let {
          application: t,
          username: n,
          usernameHook: a = i.dG4,
          applicationNameHook: u = i.dG4,
        } = e;
        return null != t
          ? l.intl.format(l.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: u,
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
      function o(e) {
        let {
          application: t,
          username: n,
          usernameOnClick: a,
          applicationNameOnClick: u,
          medium: o,
        } = e;
        return null != t
          ? l.intl.formatToParts(l.t["8r+Z+P"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: u,
              medium: o,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : l.intl.formatToParts(l.t.ojysqa, {
              username: n,
              usernameOnClick: a,
              medium: o,
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
          applicationNameOnClick: u,
          medium: o,
        } = e;
        return null != t
          ? l.intl.formatToParts(l.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: u,
              medium: o,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : l.intl.formatToParts(l.t["x2CN/f"], {
              username: n,
              usernameOnClick: a,
              medium: o,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
    },
    931651: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return a;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(907040),
        l = n(185923);
      function a(e) {
        let {
          channel: t,
          closePopout: n,
          analyticsOverride: a,
          onSelectEmoji: u,
          messageId: o,
        } = e;
        return (0, r.jsx)(i.Z, {
          closePopout: n,
          channel: t,
          onSelectEmoji: u,
          pickerIntention: l.Hz.REACTION,
          analyticsOverride: a,
          messageId: o,
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
    651941: function (e, t, n) {
      "use strict";
      n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(47120);
      var r,
        i = n(442837),
        l = n(253135),
        a = n(570140),
        u = n(709054);
      function o(e, t, n) {
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
      let s = {};
      class c extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          var t;
          s =
            null !== (t = null == e ? void 0 : e.users) && void 0 !== t
              ? t
              : {};
        }
        getState() {
          return { users: s };
        }
        getKeyTrustedAt(e, t) {
          var n;
          let r = (0, l.MK)(t);
          return null === (n = s[e]) || void 0 === n ? void 0 : n[r];
        }
        isKeyVerified(e, t) {
          return null != this.getKeyTrustedAt(e, t);
        }
        getUserIds() {
          return u.default.keys(s);
        }
        getUserVerifiedKeys(e) {
          return s[e];
        }
      }
      o(c, "displayName", "VerifiedKeyStore"),
        o(c, "persistKey", "VerifiedKeyStore"),
        (t.Z = new c(a.Z, {
          SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = (function (e) {
                var t;
                let n = null !== (t = s[e]) && void 0 !== t ? t : {};
                return (s[e] = n), n;
              })(t),
              i = new Uint8Array(n);
            r[(0, l.MK)(i)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              r = s[t];
            if (null == r) return !1;
            let i = delete r[n],
              l = !1;
            return (
              0 === Object.keys(r).length && (delete s[t], (l = !0)), i || l
            );
          },
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != s[t] && delete s[t];
          },
        }));
    },
    424678: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        l = n(481060);
      function a(e, t, n) {
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
      class u extends i.PureComponent {
        render() {
          let { text: e, lastItem: t, className: n } = this.props;
          return (0, r.jsxs)("span", {
            children: [
              (0, r.jsx)(l.Anchor, {
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
            a(this, "handleClick", () => {
              let { onClick: e, index: t } = this.props;
              null == e || e(t);
            });
        }
      }
      class o extends i.PureComponent {
        render() {
          let e = this.props.artists.split(";");
          if (!this.props.canOpen) return e.join(", ");
          let t = e.length - 1;
          return e.map((e, n) =>
            (0, r.jsx)(
              u,
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
            a(this, "handleOpenSpotifyArtist", (e) => {
              let { onOpenSpotifyArtist: t } = this.props;
              null == t || t(e);
            });
        }
      }
    },
    879815: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(442837),
        i = n(314897),
        l = n(131951),
        a = n(979651);
      function u(e) {
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
                u =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : i.default,
                o =
                  null != e ? n.getVoiceState(e.getGuildId(), u.getId()) : null;
              return {
                selfDeaf: r.isSelfDeaf(),
                deaf:
                  null !== (t = null == o ? void 0 : o.deaf) &&
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
        u,
        o = n(442837),
        s = n(570140),
        c = n(278323),
        d = n(212819),
        f = n(933557),
        p = n(592125),
        h = n(430824),
        _ = n(293273),
        E = n(158776),
        m = n(699516),
        g = n(594174),
        C = n(55589),
        v = n(981631);
      let A = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
        I = null,
        N = null,
        T = [],
        S = [];
      function O(e) {
        (T = [...T, e]),
          (S = S.map((e) => ({ ...e, sent: T.includes(e.data.record.id) }))),
          y.emitChange();
      }
      function R() {
        (I = null), null != r && (r.destroy(), (r = null)), null != N && N();
      }
      function P() {
        let e =
          null != I && null != I.application_id
            ? _.Z.getApplicationActivity(I.application_id)
            : null;
        if (null != I && (null == e || null == e.party || null == e.party.id))
          return R();
      }
      class Z extends (i = o.ZP.Store) {
        initialize() {
          this.waitFor(_.Z);
        }
        getActivity() {
          return I;
        }
        getQuery() {
          var e;
          return null !== (e = null == r ? void 0 : r.query) && void 0 !== e
            ? e
            : "";
        }
        getResults() {
          return S;
        }
      }
      (u = "ActivityInviteModalStore"),
        (a = "displayName") in (l = Z)
          ? Object.defineProperty(l, a, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = u);
      let y = new Z(s.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
          (I = e.activity),
            (N = e.resolve),
            (T = []),
            null == r &&
              (r = new d.ZP(
                (e, t) => {
                  var n;
                  return (
                    (n = e),
                    void ((S = (
                      "" === t.trim()
                        ? (function () {
                            let e = [];
                            return (
                              C.Z.getPrivateChannelIds().forEach((t) => {
                                let n = p.Z.getChannel(t);
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
                            sent: T.includes(t.id),
                            status: E.Z.getStatus(t.id),
                            data: e,
                          };
                        }
                        case d.h8.TEXT_CHANNEL: {
                          let { record: t } = e,
                            n = p.Z.getChannel(t.parent_id),
                            r = h.Z.getGuild(t.guild_id);
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
                    y.emitChange())
                  );
                },
                A,
                100,
              )),
            r.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
          let { query: t } = e;
          null != r && r.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
          if (null == I) return;
          let t = e.channelId,
            n = e.userId;
          null != t
            ? c.Z.sendActivityInvite({
                channelId: t,
                type: v.mFx.JOIN,
                activity: I,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => O(t))
            : null != n &&
              c.Z.sendActivityInviteUser({
                userId: n,
                type: v.mFx.JOIN,
                activity: I,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => O(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: R,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          return !!t && null != I && (R(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: P,
        RPC_APP_DISCONNECTED: P,
      });
      t.Z = 12633 == n.j ? y : null;
    },
    55589: function (e, t, n) {
      "use strict";
      let r, i, l;
      n(47120), n(653041);
      var a,
        u,
        o,
        s,
        c,
        d,
        f = n(913527),
        p = n.n(f),
        h = n(442837),
        _ = n(759174),
        E = n(570140),
        m = n(333023),
        g = n(355298),
        C = n(333984),
        v = n(131704),
        A = n(592125),
        I = n(430824),
        N = n(306680),
        T = n(9156),
        S = n(594174),
        O = n(709054);
      ((o = a || (a = {})).DEFAULT = "DEFAULT"), (o.FAVORITE = "FAVORITE");
      let R = new _.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function P(e) {
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
                  let e = p()(i).valueOf(),
                    t = O.default.fromTimestamp(e);
                  return O.default.compare(r, t) > 0 ? r : t;
                }
                return r;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: g.Z.isMessageRequest(e.id) || C.Z.isSpam(e.id),
        };
      }
      function Z() {
        R.clear(),
          Object.values(A.Z.getMutablePrivateChannels()).forEach((e) => {
            R.set(e.id, P(e));
          });
      }
      function y() {
        let e = A.Z.getMutablePrivateChannels();
        for (let t in e) R.set(t, P(e[t]));
      }
      let L =
        ((r = []),
        (i = []),
        (l = []),
        () => {
          let e = R.values("FAVORITE"),
            t = R.values("DEFAULT");
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
      class b extends (u = h.ZP.Store) {
        initialize() {
          this.waitFor(A.Z, I.Z, S.default, g.Z, T.ZP),
            this.syncWith([T.ZP, g.Z], Z);
        }
        getPrivateChannelIds() {
          return L();
        }
        getSortedChannels() {
          return [R.values("FAVORITE"), R.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            R.values().forEach((t) => {
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
          CONNECTION_OPEN: Z,
          CONNECTION_OPEN_SUPPLEMENTAL: Z,
          OVERLAY_INITIALIZE: Z,
          CACHE_LOADED: y,
          CACHE_LOADED_LAZY: y,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, v.hv)(e.type) || R.has(e.id)) && R.set(e.id, P(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, v.hv)(t.type) || t.id === m.V) return !1;
            R.set(t.id, P(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return R.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!R.has(t)) return !1;
            let r = A.Z.getChannel(t);
            return null != r && R.set(t, P(r, n.id));
          },
          GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return R.delete(t);
          },
          LOGOUT: function () {
            R.clear();
          },
        }));
    },
    352736: function (e, t, n) {
      "use strict";
      var r,
        i,
        l = n(25209),
        a = n(97797),
        u = n(35125),
        o = n(786761),
        s = n(739566),
        c = n(499401),
        d = n(693912),
        f = n(23750),
        p = n(314897),
        h = n(592125),
        _ = n(430824),
        E = n(594174),
        m = n(5192),
        g = n(709054),
        C = n(981631),
        v = n(388032);
      let A = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((r = i || (i = {})).NORMAL = "NORMAL"), (r.CLAN = "CLAN");
      let I = () => [
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
        N = () => [
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
        T = () => [
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
        S = () => [
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
        O = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return I();
            case "CLAN":
              return T();
          }
        },
        R = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return N();
            case "CLAN":
              return S();
          }
        };
      function P(e, t) {
        let n = R(t),
          r = g.default.extractTimestamp(e) % n.length;
        return n[r];
      }
      function Z(e) {
        return (0, l.Rp)(
          v.intl.formatToParts(v.t["ihxM9/"], {
            username: e,
            usernameOnClick: C.dG4,
          }),
        );
      }
      function y(e, t) {
        let n = h.Z.getChannel(t);
        return null == n || null == _.Z.getGuild(n.getGuildId())
          ? Z(e)
          : (0, l.Rp)(
              v.intl.formatToParts(v.t["ihxM9/"], {
                username: e,
                usernameOnClick: C.dG4,
              }),
            );
      }
      function L(e) {
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
          let A = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
            I =
              null != A && "string" != typeof A
                ? E.default.getUser(A.id)
                : void 0,
            N = e.channel_id,
            T = m.ZP.getName(null, N, e.author);
          switch (e.type) {
            case C.uaV.RECIPIENT_ADD:
              if (null == I) return;
              return (0, l.Rp)(
                v.intl.formatToParts(v.t["7/Xl0d"], {
                  username: T,
                  usernameOnClick: C.dG4,
                  otherUsername: m.ZP.getName(null, N, I),
                  otherUsernameOnClick: C.dG4,
                }),
              );
            case C.uaV.RECIPIENT_REMOVE:
              if (null == I) return;
              let S = e.author;
              if (null == S || S.id === I.id)
                return (0, l.Rp)(
                  v.intl.formatToParts(v.t["Qn5+LS"], {
                    username: T,
                    usernameOnClick: C.dG4,
                  }),
                );
              return (0, l.Rp)(
                v.intl.formatToParts(v.t.QtZ0RE, {
                  username: T,
                  usernameOnClick: C.dG4,
                  otherUsername: m.ZP.getName(null, N, I),
                  otherUsernameOnClick: C.dG4,
                }),
              );
            case C.uaV.CALL:
              let { call: O } = e;
              if (null != O && -1 === O.participants.indexOf(p.default.getId()))
                return (0, l.Rp)(
                  v.intl.formatToParts(v.t.DbgSAw, {
                    username: T,
                    usernameOnClick: C.dG4,
                  }),
                );
              return;
            case C.uaV.CHANNEL_NAME_CHANGE:
              return (0, l.Rp)(
                v.intl.formatToParts(
                  t.isForumPost() ? v.t["qa0e/v"] : v.t.XCPMEB,
                  {
                    username: T,
                    usernameOnClick: C.dG4,
                    channelName: e.content,
                  },
                ),
              );
            case C.uaV.CHANNEL_ICON_CHANGE:
              return (0, l.Rp)(
                v.intl.formatToParts(v.t.wypJZ2, {
                  username: T,
                  usernameOnClick: C.dG4,
                }),
              );
            case C.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, l.Rp)(
                v.intl.formatToParts(v.t["/M60j4"], {
                  username: T,
                  usernameOnClick: C.dG4,
                }),
              );
            case C.uaV.USER_JOIN:
              let R = L(t.guild_id);
              return (0, l.Rp)(
                v.intl.formatToParts(P(e.id, R), {
                  username: T,
                  usernameOnClick: C.dG4,
                }),
              );
            case C.uaV.GUILD_BOOST:
              return Z(T);
            case C.uaV.GUILD_BOOST_TIER_1:
            case C.uaV.GUILD_BOOST_TIER_2:
            case C.uaV.GUILD_BOOST_TIER_3:
              return y(T, N);
            case C.uaV.GUILD_INVITE_REMINDER:
              return v.intl.string(v.t.gxyKvr);
            case C.uaV.THREAD_STARTER_MESSAGE:
              return v.intl.formatToPlainString(v.t["B8H+Cg"], {
                username: T,
                threadName: t.name,
              });
            case C.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (e instanceof f.ZP) return null;
              return (0, l.Rp)(
                (0, u.vp)({
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
              let b = (0, s.ZH)((0, o.e5)(e));
              return (0, l.Rp)(
                (0, c.Y)({ application: e.application, username: b.nick }),
              );
            case C.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (e instanceof f.ZP) return null;
              return (0, l.Rp)(
                (0, d.B2)({
                  application: e.application,
                  username: (0, s.ZH)((0, o.e5)(e)).nick,
                }),
              );
            case C.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (e instanceof f.ZP) return null;
              return (0, l.Rp)(
                (0, d.hj)({
                  application: e.application,
                  username: (0, s.ZH)((0, o.e5)(e)).nick,
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
                  let t = h.Z.getChannel(e);
                  if (null == t) return null;
                  let n = _.Z.getGuild(t.getGuildId());
                  return null == n
                    ? null
                    : (0, l.Rp)(
                        v.intl.formatToParts(v.t["a+lJKi"], {
                          guildName: n.name,
                        }),
                      );
                })(N);
              return e.content;
            case C.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (e, t, n) {
                let r = h.Z.getChannel(t);
                if (null == r) return null;
                let i = _.Z.getGuild(r.getGuildId());
                return null == i
                  ? null
                  : (0, l.Rp)(
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
              })(T, N, e.content);
            case C.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (e, t) {
                let n = h.Z.getChannel(t);
                if (null == n) return null;
                let r = _.Z.getGuild(n.getGuildId());
                return null == r
                  ? null
                  : (0, l.Rp)(
                      v.intl.formatToParts(v.t.axmbpq, {
                        username: e,
                        guildName: r.name,
                      }),
                    );
              })(T, N);
            default:
              return e.content;
          }
        },
        getSystemMessageUserJoin: function (e, t) {
          let n = O(t),
            r = g.default.extractTimestamp(e) % n.length;
          return n[r];
        },
        getSystemMessageUserJoinMobile: P,
        getSystemMessageBotJoin: function (e) {
          return null == A[e]
            ? null
            : v.intl.format(v.t.xw1Ij4, {
                learnOnClick: { onClick: () => window.open(A[e]) },
              });
        },
        getWelcomeMessageKind: L,
      };
    },
    141038: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(653041),
        n(47120);
      var r = n(512722),
        i = n.n(r),
        l = n(90757),
        a = n.n(l),
        u = n(65154);
      function o(e, t, n) {
        let r = window.DiscordNative;
        i()(null != r, "Can't get desktop sources outside of native app"),
          (t = null != t ? t : [u.vA.WINDOW, u.vA.SCREEN]),
          (n = null != n ? n : { width: 150, height: 150 });
        let l = [];
        return (
          t.includes(u.vA.SCREEN) &&
            e.supports(u.AN.SCREEN_PREVIEWS) &&
            (l.push(e.getScreenPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== u.vA.SCREEN))),
          t.includes(u.vA.WINDOW) &&
            e.supports(u.AN.WINDOW_PREVIEWS) &&
            (l.push(e.getWindowPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== u.vA.WINDOW))),
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
//# sourceMappingURL=a206f99826d31d8b1533.js.map
