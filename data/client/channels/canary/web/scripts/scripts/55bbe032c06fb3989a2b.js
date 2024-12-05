(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32803"],
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
        h = n(680287),
        p = n(247206),
        _ = n(539573),
        E = n(786761),
        g = n(3148),
        m = n(48854),
        C = n(785359),
        N = n(79390),
        A = n(623292),
        v = n(807092),
        I = n(467798),
        T = n(703558),
        S = n(117530),
        O = n(630388),
        P = n(226351),
        R = n(981631),
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
            raiseEndpointErrors: M = !1,
          } = e,
          U = new h.Z(R.ANM.MESSAGES(f)),
          G = new P.o(),
          k = {
            content: "",
            nonce: "",
            channel_id: f,
            type: R.uaV.DEFAULT,
            sticker_ids: null == D ? void 0 : D.stickerIds,
            poll: null == D ? void 0 : D.poll,
          };
        null != b && (k.content = null == b ? void 0 : b.content),
          null != v.Z.getPendingReply(f) &&
            ((k.type = R.uaV.REPLY),
            (k.message_reference = D.messageReference),
            (k.allowed_mentions = D.allowedMentions),
            (0, A.A6)(f));
        let [w, x] = (0, I.Z)(k.content);
        w &&
          ((k.content = x),
          (k.flags = (0, O.pj)(
            null !== (t = k.flags) && void 0 !== t ? t : 0,
            R.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let V = null !== (n = D.nonce) && void 0 !== n ? n : (0, m.r)(),
          B = (0, g.ZP)({
            channelId: f,
            content: k.content,
            tts: null !== (r = null == b ? void 0 : b.tts) && void 0 !== r && r,
            type: k.type,
            messageReference: k.message_reference,
            flags: k.flags,
            nonce: V,
            poll: (0, N.x9)(D.poll),
          });
        return (
          ((k.nonce = V),
          U.on("start", (e) => {
            (d = (0, E.e5)({ ...B, id: e.id })),
              i.Z.dispatch({
                type: "UPLOAD_START",
                channelId: f,
                file: e,
                message: d,
                uploader: U,
              });
          }),
          U.on("progress", (e) => {
            i.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: f, file: e });
          })),
          U.on("error", (e, t, n, r) => {
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
              t === R.evJ.EXPLICIT_CONTENT)
            ) {
              a.Z.sendExplicitMediaClydeError(
                f,
                null == n ? void 0 : n.attachments,
                p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (t === R.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: t, message: null == n ? void 0 : n.message },
                r =
                  null == d
                    ? null
                    : { type: c.$V.SEND, message: { ...d, channelId: f } };
              (0, o.openUploadError)({
                title: L.intl.string(L.t.B3vFdX),
                help: (0, _.uF)(r, e),
              });
              return;
            }
            if (t !== R.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (M)
                G.reject(new s.Hx({ status: t, body: null != n ? n : {} }, t));
              else {
                var h;
                (0, o.openUploadError)({
                  title: L.intl.string(L.t.B3vFdX),
                  help:
                    null !== (h = null == n ? void 0 : n.message) &&
                    void 0 !== h
                      ? h
                      : L.intl.string(L.t.zMEjJi),
                });
              }
              "" !== k.content &&
                "" === T.Z.getDraft(f, y) &&
                l.Z.saveDraft(f, k.content, y),
                0 === S.Z.getUploadCount(f, y) &&
                  u.Z.setUploads({ channelId: f, uploads: Z, draftType: y });
            }
          }),
          U.on("complete", (e, t) => {
            i.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: f,
              file: e,
              aborted: U._aborted,
              messageRecord: t,
            });
          }),
          await U.uploadFiles(Z, k),
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
            let e = v.Z.getPendingReply(n);
            if (null != e) {
              let t = a.Z.getSendMessageOptionsForReply(e);
              (_.type = R.uaV.REPLY),
                (_.message_reference = t.messageReference),
                (_.allowed_mentions = t.allowedMentions),
                (0, A.A6)(n);
            }
          }
          let E = new h.Z(R.ANM.MESSAGES(n));
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
                d === R.evJ.EXPLICIT_CONTENT)
              ) {
                a.Z.sendExplicitMediaClydeError(
                  n,
                  null == f ? void 0 : f.attachments,
                  p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, o.openUploadError)({
                title: L.intl.string(L.t.B3vFdX),
                help: L.intl.format(L.t.gIlRx8, {
                  onClick: () => {
                    (0, r.closeModal)(o.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: n, file: u, draftType: s, message: c });
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
            E.upload(u, _);
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
    582019: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return u;
        },
      });
      var r = n(200651),
        i = n(192379),
        l = n(709014);
      let a = { all: { name: "all", start: 0, duration: 66 } },
        u = () => {
          let e = i.useRef(null),
            t = i.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            u = i.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            o = i.useCallback(() => {
              null != e.current && e.current.stopIfPlaying("all");
            }, []);
          return {
            events: { onClick: t, onMouseEnter: u, onMouseLeave: o },
            play: t,
            Component: i.useCallback(
              (t) =>
                (0, r.jsx)(l.L, {
                  ...t,
                  src: () => n.e("66944").then(n.t.bind(n, 166174, 19)),
                  ref: e,
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
          return g;
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
          { content: a, formatParams: u } = h({
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
          { content: a, formatParams: u } = h({
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
            showWithDuration: h,
            isRenewal: p,
          } = f(l, a);
        return (
          (t = h ? (p ? o.t.Iy66Mz : o.t.eCgb2d) : p ? o.t.mPTTdn : o.t.mYjFFx),
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
            roleSubscriptionOnClickHandler: i = u.dG4,
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
              ? o.t.OQ0OU1
              : o.t["+N9bxs"]
            : p
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
      function g(e, t) {
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
    723170: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return d;
        },
        J: function () {
          return c;
        },
      }),
        n(789020);
      var r = n(442837),
        i = n(592125),
        l = n(9156),
        a = n(630388),
        u = n(569471),
        o = n(124368),
        s = n(981631);
      function c(e) {
        let t = u.Z.flags(e.id);
        if (null == t) return o.iN.NO_MESSAGES;
        if ((0, a.yE)(t, o.iN.ALL_MESSAGES)) return o.iN.ALL_MESSAGES;
        if ((0, a.yE)(t, o.iN.ONLY_MENTIONS)) return o.iN.ONLY_MENTIONS;
        if ((0, a.yE)(t, o.iN.NO_MESSAGES)) return o.iN.NO_MESSAGES;
        let n = i.Z.getChannel(e.parent_id);
        if (null == n || l.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id))
          return o.iN.NO_MESSAGES;
        let r = l.ZP.resolvedMessageNotifications(n);
        return r === s.bL.NO_MESSAGES
          ? o.iN.NO_MESSAGES
          : r === s.bL.ONLY_MENTIONS
            ? o.iN.ONLY_MENTIONS
            : o.iN.ALL_MESSAGES;
      }
      function d(e) {
        return (0, r.e7)([u.Z, l.ZP, i.Z], () => c(e), [e]);
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
        h = n(592125),
        p = n(430824),
        _ = n(293273),
        E = n(158776),
        g = n(699516),
        m = n(594174),
        C = n(55589),
        N = n(981631);
      let A = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
        v = null,
        I = null,
        T = [],
        S = [];
      function O(e) {
        (T = [...T, e]),
          (S = S.map((e) => ({ ...e, sent: T.includes(e.data.record.id) }))),
          Z.emitChange();
      }
      function P() {
        (v = null), null != r && (r.destroy(), (r = null)), null != I && I();
      }
      function R() {
        let e =
          null != v && null != v.application_id
            ? _.Z.getApplicationActivity(v.application_id)
            : null;
        if (null != v && (null == e || null == e.party || null == e.party.id))
          return P();
      }
      class L extends (i = o.ZP.Store) {
        initialize() {
          this.waitFor(_.Z);
        }
        getActivity() {
          return v;
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
        (a = "displayName") in (l = L)
          ? Object.defineProperty(l, a, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = u);
      let Z = new L(s.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
          (v = e.activity),
            (I = e.resolve),
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
                                let n = h.Z.getChannel(t);
                                if (null != n)
                                  if (n.type === N.d4z.DM) {
                                    let t = n.getRecipientId(),
                                      r =
                                        null != t ? m.default.getUser(t) : null;
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
                              null != n ? (0, f.F6)(n, m.default, g.Z) : "",
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
          if (null == v) return;
          let t = e.channelId,
            n = e.userId;
          null != t
            ? c.Z.sendActivityInvite({
                channelId: t,
                type: N.mFx.JOIN,
                activity: v,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => O(t))
            : null != n &&
              c.Z.sendActivityInviteUser({
                userId: n,
                type: N.mFx.JOIN,
                activity: v,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => O(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: P,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          return !!t && null != v && (P(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: R,
        RPC_APP_DISCONNECTED: R,
      });
      t.Z = 12633 == n.j ? Z : null;
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
        h = n.n(f),
        p = n(442837),
        _ = n(759174),
        E = n(570140),
        g = n(355298),
        m = n(333984),
        C = n(131704),
        N = n(592125),
        A = n(430824),
        v = n(306680),
        I = n(9156),
        T = n(594174),
        S = n(709054),
        O = n(176505);
      ((o = a || (a = {})).DEFAULT = "DEFAULT"), (o.FAVORITE = "FAVORITE");
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
      function R(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let r =
                    null !==
                      (n =
                        null !== (t = v.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  i = e.isMessageRequestTimestamp;
                if (null != i) {
                  let e = h()(i).valueOf(),
                    t = S.default.fromTimestamp(e);
                  return S.default.compare(r, t) > 0 ? r : t;
                }
                return r;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: g.Z.isMessageRequest(e.id) || m.Z.isSpam(e.id),
        };
      }
      function L() {
        P.clear(),
          Object.values(N.Z.getMutablePrivateChannels()).forEach((e) => {
            P.set(e.id, R(e));
          });
      }
      function Z() {
        let e = N.Z.getMutablePrivateChannels();
        for (let t in e) P.set(t, R(e[t]));
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
      class b extends (u = p.ZP.Store) {
        initialize() {
          this.waitFor(N.Z, A.Z, T.default, g.Z, I.ZP),
            this.syncWith([I.ZP, g.Z], L);
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
              ((0, C.hv)(e.type) || P.has(e.id)) && P.set(e.id, R(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, C.hv)(t.type) || t.id === O.V) return !1;
            P.set(t.id, R(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return P.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!P.has(t)) return !1;
            let r = N.Z.getChannel(t);
            return null != r && P.set(t, R(r, n.id));
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
        u = n(35125),
        o = n(786761),
        s = n(739566),
        c = n(499401),
        d = n(693912),
        f = n(23750),
        h = n(314897),
        p = n(592125),
        _ = n(430824),
        E = n(594174),
        g = n(5192),
        m = n(709054),
        C = n(981631),
        N = n(388032);
      let A = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((r = i || (i = {})).NORMAL = "NORMAL"), (r.CLAN = "CLAN");
      let v = () => [
          N.t["0cuj7u"],
          N.t["MuW+CA"],
          N.t.osqpHR,
          N.t["5ToSh4"],
          N.t.JEB8pq,
          N.t.pkOV5e,
          N.t.kRb1Jy,
          N.t.EmKLY2,
          N.t.rPtBnZ,
          N.t["5B/ekZ"],
          N.t.ESNC3d,
          N.t["Iw6d8/"],
          N.t.WecSZ2,
        ],
        I = () => [
          N.t.Jm6e09,
          N.t.MGRnRU,
          N.t.EXOEGh,
          N.t["5uCTFB"],
          N.t.rl45Qk,
          N.t.Bh9zpa,
          N.t.RdEy1N,
          N.t.qcdp09,
          N.t.F7w2Rk,
          N.t.gSyOgI,
          N.t.uYgqv7,
          N.t["b/1SBQ"],
          N.t.LhebZG,
        ],
        T = () => [
          N.t["20E/ys"],
          N.t["oa8+kp"],
          N.t.zoKkXl,
          N.t.FP9aS0,
          N.t.E5Zj1d,
          N.t["6Anmws"],
          N.t.sR78HR,
          N.t.gA9qPz,
          N.t.Hkiyp6,
          N.t.w1HMho,
        ],
        S = () => [
          N.t["8fy3DQ"],
          N.t.UproUV,
          N.t["7l3EyM"],
          N.t.GToyaG,
          N.t["DUs+Zm"],
          N.t.yLkbfn,
          N.t.oWdvws,
          N.t.tOoKTE,
          N.t["VM7+Oj"],
          N.t["hJx/u7"],
        ],
        O = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return v();
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
              return S();
          }
        };
      function R(e, t) {
        let n = P(t),
          r = m.default.extractTimestamp(e) % n.length;
        return n[r];
      }
      function L(e) {
        return (0, l.Rp)(
          N.intl.formatToParts(N.t["ihxM9/"], {
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
              N.intl.formatToParts(N.t["ihxM9/"], {
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
          var n, r, i, m;
          let A = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
            v =
              null != A && "string" != typeof A
                ? E.default.getUser(A.id)
                : void 0,
            I = e.channel_id,
            T = g.ZP.getName(null, I, e.author);
          switch (e.type) {
            case C.uaV.RECIPIENT_ADD:
              if (null == v) return;
              return (0, l.Rp)(
                N.intl.formatToParts(N.t["7/Xl0d"], {
                  username: T,
                  usernameOnClick: C.dG4,
                  otherUsername: g.ZP.getName(null, I, v),
                  otherUsernameOnClick: C.dG4,
                }),
              );
            case C.uaV.RECIPIENT_REMOVE:
              if (null == v) return;
              let S = e.author;
              if (null == S || S.id === v.id)
                return (0, l.Rp)(
                  N.intl.formatToParts(N.t["Qn5+LS"], {
                    username: T,
                    usernameOnClick: C.dG4,
                  }),
                );
              return (0, l.Rp)(
                N.intl.formatToParts(N.t.QtZ0RE, {
                  username: T,
                  usernameOnClick: C.dG4,
                  otherUsername: g.ZP.getName(null, I, v),
                  otherUsernameOnClick: C.dG4,
                }),
              );
            case C.uaV.CALL:
              let { call: O } = e;
              if (null != O && -1 === O.participants.indexOf(h.default.getId()))
                return (0, l.Rp)(
                  N.intl.formatToParts(N.t.DbgSAw, {
                    username: T,
                    usernameOnClick: C.dG4,
                  }),
                );
              return;
            case C.uaV.CHANNEL_NAME_CHANGE:
              return (0, l.Rp)(
                N.intl.formatToParts(
                  t.isForumPost() ? N.t["qa0e/v"] : N.t.XCPMEB,
                  {
                    username: T,
                    usernameOnClick: C.dG4,
                    channelName: e.content,
                  },
                ),
              );
            case C.uaV.CHANNEL_ICON_CHANGE:
              return (0, l.Rp)(
                N.intl.formatToParts(N.t.wypJZ2, {
                  username: T,
                  usernameOnClick: C.dG4,
                }),
              );
            case C.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, l.Rp)(
                N.intl.formatToParts(N.t["/M60j4"], {
                  username: T,
                  usernameOnClick: C.dG4,
                }),
              );
            case C.uaV.USER_JOIN:
              let P = y(t.guild_id);
              return (0, l.Rp)(
                N.intl.formatToParts(R(e.id, P), {
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
              return N.intl.string(N.t.gxyKvr);
            case C.uaV.THREAD_STARTER_MESSAGE:
              return N.intl.formatToPlainString(N.t["B8H+Cg"], {
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
                null === (m = e.embeds) || void 0 === m
                  ? void 0
                  : m.some((e) => {
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
                        N.intl.formatToParts(N.t["a+lJKi"], {
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
                      N.intl.formatToParts(N.t.iOuWPj, {
                        username: e,
                        guildName: i.name,
                        time:
                          "" !== n
                            ? new Date(n).toLocaleString(N.intl.currentLocale, {
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
                      N.intl.formatToParts(N.t.axmbpq, {
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
          let n = O(t),
            r = m.default.extractTimestamp(e) % n.length;
          return n[r];
        },
        getSystemMessageUserJoinMobile: R,
        getSystemMessageBotJoin: function (e) {
          return null == A[e]
            ? null
            : N.intl.format(N.t.xw1Ij4, {
                learnOnClick: { onClick: () => window.open(A[e]) },
              });
        },
        getWelcomeMessageKind: y,
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
//# sourceMappingURL=55bbe032c06fb3989a2b.js.map
