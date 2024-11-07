"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34181"],
  {
    847881: function (e) {
      e.exports = "/assets/f3bf33abef8a529123fa.svg";
    },
    966390: function (e, t, n) {
      n(47120), n(789020);
      var i = n(481060),
        o = n(570140),
        r = n(430742),
        l = n(904245),
        s = n(166459),
        a = n(531643),
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
        x = n(807092),
        I = n(467798),
        Z = n(703558),
        b = n(117530),
        y = n(630388),
        N = n(226351),
        O = n(981631),
        T = n(388032);
      async function A(e) {
        var t, n, i;
        let d,
          {
            channelId: h,
            uploads: A,
            draftType: L,
            parsedMessage: R,
            options: k = {},
            raiseEndpointErrors: w = !1,
          } = e,
          j = new f.Z(O.ANM.MESSAGES(h)),
          M = new N.o(),
          P = {
            content: "",
            nonce: "",
            channel_id: h,
            type: O.uaV.DEFAULT,
            sticker_ids: null == k ? void 0 : k.stickerIds,
            poll: null == k ? void 0 : k.poll,
          };
        null != R && (P.content = null == R ? void 0 : R.content),
          null != x.Z.getPendingReply(h) &&
            ((P.type = O.uaV.REPLY),
            (P.message_reference = k.messageReference),
            (P.allowed_mentions = k.allowedMentions),
            (0, S.A6)(h));
        let [D, z] = (0, I.Z)(P.content);
        D &&
          ((P.content = z),
          (P.flags = (0, y.pj)(
            null !== (t = P.flags) && void 0 !== t ? t : 0,
            O.iLy.SUPPRESS_NOTIFICATIONS,
          )));
        let U = null !== (n = k.nonce) && void 0 !== n ? n : (0, E.r)(),
          V = (0, g.ZP)({
            channelId: h,
            content: P.content,
            tts: null !== (i = null == R ? void 0 : R.tts) && void 0 !== i && i,
            type: P.type,
            messageReference: P.message_reference,
            flags: P.flags,
            nonce: U,
            poll: (0, C.x9)(k.poll),
          });
        return (
          ((P.nonce = U),
          j.on("start", (e) => {
            (d = (0, v.e5)({ ...V, id: e.id })),
              o.Z.dispatch({
                type: "UPLOAD_START",
                channelId: h,
                file: e,
                message: d,
                uploader: j,
              });
          }),
          j.on("progress", (e) => {
            o.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: h, file: e });
          })),
          j.on("error", (e, t, n, i) => {
            if (
              (o.Z.dispatch({
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
              t === O.evJ.EXPLICIT_CONTENT)
            ) {
              l.Z.sendExplicitMediaClydeError(
                h,
                null == n ? void 0 : n.attachments,
                p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
              );
              return;
            }
            if (t === O.evJ.AUTOMOD_MESSAGE_BLOCKED) {
              let e = { code: t, message: null == n ? void 0 : n.message },
                i =
                  null == d
                    ? null
                    : { type: c.$V.SEND, message: { ...d, channelId: h } };
              (0, a.openUploadError)({
                title: T.intl.string(T.t.B3vFdX),
                help: (0, m.uF)(i, e),
              });
              return;
            }
            if (t !== O.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
              if (w)
                M.reject(new u.Hx({ status: t, body: null != n ? n : {} }, t));
              else {
                var f;
                (0, a.openUploadError)({
                  title: T.intl.string(T.t.B3vFdX),
                  help:
                    null !== (f = null == n ? void 0 : n.message) &&
                    void 0 !== f
                      ? f
                      : T.intl.string(T.t.zMEjJi),
                });
              }
              "" !== P.content &&
                "" === Z.Z.getDraft(h, L) &&
                r.Z.saveDraft(h, P.content, L),
                0 === b.Z.getUploadCount(h, L) &&
                  s.Z.setUploads({ channelId: h, uploads: A, draftType: L });
            }
          }),
          j.on("complete", (e, t) => {
            o.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: h,
              file: e,
              aborted: j._aborted,
              messageRecord: t,
            });
          }),
          await j.uploadFiles(A, P),
          M.resolve(),
          M.promise
        );
      }
      t.Z = {
        instantBatchUpload: function (e) {
          let {
              channelId: t,
              files: n,
              draftType: i,
              isThumbnail: o = !1,
              filesMetadata: r = [],
            } = e,
            l = Array.from(n).map((e, n) => {
              let i = null != r ? r[n] : {};
              return new d.n(
                { file: e, platform: h.ow.WEB, isThumbnail: o, ...i },
                t,
              );
            });
          A({ channelId: t, uploads: l, draftType: i });
        },
        upload: function e(t) {
          let {
              channelId: n,
              file: s,
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
            let e = x.Z.getPendingReply(n);
            if (null != e) {
              let t = l.Z.getSendMessageOptionsForReply(e);
              (m.type = O.uaV.REPLY),
                (m.message_reference = t.messageReference),
                (m.allowed_mentions = t.allowedMentions),
                (0, S.A6)(n);
            }
          }
          let v = new f.Z(O.ANM.MESSAGES(n));
          v.on("start", (e) => {
            o.Z.dispatch({
              type: "UPLOAD_START",
              channelId: n,
              file: e,
              uploader: v,
            });
          }),
            v.on("progress", (e) => {
              o.Z.dispatch({ type: "UPLOAD_PROGRESS", channelId: n, file: e });
            }),
            v.on("error", (t, d, h) => {
              if (
                (o.Z.dispatch({ type: "UPLOAD_FAIL", channelId: n, file: t }),
                (0, _.x)({ fileItems: t.items, failureCode: d }),
                d === O.evJ.EXPLICIT_CONTENT)
              ) {
                l.Z.sendExplicitMediaClydeError(
                  n,
                  null == h ? void 0 : h.attachments,
                  p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                );
                return;
              }
              (0, a.openUploadError)({
                title: T.intl.string(T.t.B3vFdX),
                help: T.intl.format(T.t.gIlRx8, {
                  onClick: () => {
                    (0, i.closeModal)(a.UPLOAD_ERROR_MODAL_KEY),
                      e({ channelId: n, file: s, draftType: u, message: c });
                  },
                }),
              }),
                "" !== m.content &&
                  "" === Z.Z.getDraft(n, u) &&
                  r.Z.saveDraft(n, m.content, u);
            }),
            v.on("complete", (e) => {
              o.Z.dispatch({ type: "UPLOAD_COMPLETE", channelId: n, file: e });
            }),
            v.upload(s, m);
        },
        uploadFiles: A,
        cancel(e) {
          o.Z.dispatch({ type: "UPLOAD_CANCEL_REQUEST", file: e }),
            null != e.draftContent &&
              null != e.channelId &&
              "" === Z.Z.getDraft(e.channelId, Z.d.ChannelMessage) &&
              o.Z.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: Z.d.ChannelMessage,
              });
        },
      };
    },
    400354: function (e, t, n) {
      n.d(t, {
        l: function () {
          return s;
        },
      });
      var i = n(200651),
        o = n(192379),
        r = n(709014);
      let l = {
          deafen: { name: "deafen", start: 0, duration: 70 },
          undeafen: { name: "undeafen", start: 110, duration: 70 },
          hover_undeafened: {
            name: "hover_undeafened",
            start: 200,
            duration: 70,
          },
          hover_deafened: { name: "hover_deafened", start: 300, duration: 70 },
        },
        s = (e) => {
          let t = o.useRef(null),
            s = o.useRef(e);
          s.current = e;
          let a = o.useMemo(
              () => () => {
                null != t.current && t.current.play(e);
              },
              [e],
            ),
            u = o.useCallback(() => {
              if (null == t.current) return;
              let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
              t.current.play(n);
            }, [e]),
            c = o.useCallback(() => {
              if (null == t.current) return;
              let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
              t.current.stopIfPlaying(n);
            }, [e]);
          return {
            events: { onClick: a, onMouseEnter: u, onMouseLeave: c },
            play: a,
            Component: o.useCallback(
              (e) =>
                (0, i.jsx)(r.L, {
                  ...e,
                  src: () => n.e("68449").then(n.t.bind(n, 406785, 19)),
                  ref: t,
                  initialAnimation: s.current,
                  markers: l,
                }),
              [],
            ),
          };
        };
    },
    582019: function (e, t, n) {
      n.d(t, {
        j: function () {
          return s;
        },
      });
      var i = n(200651),
        o = n(192379),
        r = n(709014);
      let l = { all: { name: "all", start: 0, duration: 66 } },
        s = () => {
          let e = o.useRef(null),
            t = o.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            s = o.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            a = o.useCallback(() => {
              null != e.current && e.current.stopIfPlaying("all");
            }, []);
          return {
            events: { onClick: t, onMouseEnter: s, onMouseLeave: a },
            play: t,
            Component: o.useCallback(
              (t) =>
                (0, i.jsx)(r.L, {
                  ...t,
                  src: () => n.e("66944").then(n.t.bind(n, 166174, 19)),
                  ref: e,
                  markers: l,
                }),
              [],
            ),
          };
        };
    },
    312839: function (e, t, n) {
      n.d(t, {
        P: function () {
          return c;
        },
        R: function () {
          return u;
        },
      });
      var i = n(13245),
        o = n(556296),
        r = n(237997),
        l = n(13140),
        s = n(981631),
        a = n(987650);
      function u(e, t) {
        return {
          trackView() {
            i.Z.track(s.rMx.NOTIFICATION_VIEWED, t),
              i.Z.notificationEvent(e, a.bv.Viewed);
          },
          trackClick(n) {
            let o = r.Z.isInstanceLocked()
              ? s.Sbl.LOCKED_OVERLAY
              : s.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(s.rMx.NOTIFICATION_CLICKED, {
              ...t,
              location: o,
              action_type: n,
            }),
              i.Z.notificationEvent(e, a.bv.Clicked);
          },
        };
      }
      function c() {
        let e = o.Z.getOverlayKeybind();
        return null != e ? (0, l.BB)(e.shortcut, !0).split(" + ") : ["???"];
      }
    },
    680287: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(653041);
      var i = n(544891),
        o = n(881052),
        r = n(687294),
        l = n(476326),
        s = n(861990),
        a = n(388032);
      class u extends r.Z {
        async uploadFiles(e, t) {
          let { addFilesTo: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super.upload({ name: a.intl.string(a.t.jfKTen) }, t, e);
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
          let a = [];
          this.files.forEach((e, t) => {
            let n = (0, s.B)(e, t);
            e.item.platform === l.ow.WEB && a.push({ ...n });
          }),
            (r =
              null != n && null != t
                ? this._addAttachmentsToPayload(t, n, a)
                : { ...t, attachments: a });
          let u = { url: this._url, body: r, signal: e },
            c = "POST" === this._method ? i.tn.post : i.tn.patch;
          try {
            let e = await c(u);
            return this._handleComplete(e.body), e.body;
          } catch (e) {
            var d;
            if (this._raiseEndpointErrors) throw new o.Hx(e);
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
        o = n(317381);
      function r() {
        return (0, i.e7)([o.ZP], () => o.ZP.getCurrentEmbeddedActivity());
      }
    },
    778569: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var i = n(192379),
        o = n(81063);
      let r = ["embedded_cover", "embedded_background"];
      function l(e) {
        let { applicationId: t, size: n, names: l = r } = e,
          [s, a] = i.useState(null),
          [u, c] = i.useState(!0),
          d = (0, o.getAssetImage)(t, s, n);
        return (
          i.useEffect(() => {
            (0, o.getAssets)(t).then((e) => {
              for (let [t, n] of (c(!1), Object.entries(e)))
                if (null != n && "" !== n.id && l.includes(n.name)) {
                  a(n.id);
                  return;
                }
            });
          }, [t]),
          { url: d, state: u ? "loading" : null != d ? "fetched" : "not-found" }
        );
      }
    },
    570928: function (e, t, n) {
      var i,
        o,
        r,
        l,
        s = n(200651),
        a = n(192379),
        u = n(120356),
        c = n.n(u),
        d = n(207341);
      class h extends (l = a.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            hoverText: n,
            className: i,
            forceHover: o,
            ...r
          } = this.props;
          return (0, s.jsxs)("div", {
            ...r,
            className: c()(i, d.hoverRoll, {
              [d.disabled]: null == n,
              [d.forceHover]: o,
            }),
            children: [
              (0, s.jsx)(e, { className: d.hovered, children: n }),
              (0, s.jsx)(e, { className: d.default, children: t }),
            ],
          });
        }
      }
      (r = { tag: "div", forceHover: !1 }),
        (o = "defaultProps") in (i = h)
          ? Object.defineProperty(i, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = r),
        (t.Z = h);
    },
    571250: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(388032);
      function o(e, t, n) {
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
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(481060),
        r = n(846027),
        l = n(468026),
        s = n(388032);
      function a(e, t) {
        if (e) {
          (0, o.openModal)((e) =>
            (0, i.jsx)(l.default, {
              ...e,
              title: s.intl.string(s.t.QZ7WSU),
              body: s.intl.string(s.t.Tl9JpK),
            }),
          );
          return;
        }
        r.Z.toggleSelfDeaf({ location: t });
      }
    },
    175470: function (e, t, n) {
      n.d(t, {
        n: function () {
          return i;
        },
      });
      let i = (0, n(905837).ZP)((e) => ({
        clipsButtonRef: null,
        setClipsButtonRef: (t) => e({ clipsButtonRef: t }),
      }));
    },
    120619: function (e, t, n) {
      n(47120);
      var i,
        o,
        r,
        l,
        s = n(442837),
        a = n(570140),
        u = n(959546),
        c = n(215023);
      let d = new Map(),
        h = new Set(),
        f = new Set(),
        p = new Set(),
        m = new Map(),
        v = !1,
        g = null;
      class E extends (i = s.ZP.Store) {
        getPrice(e) {
          return d.get(e);
        }
        isFetchingPrice(e) {
          return h.has(e);
        }
        getErrored(e) {
          return p.has(e);
        }
        getEntitlement(e) {
          return m.get(e);
        }
        isEntitlementFetched(e) {
          return m.has(e);
        }
        isEntitlementFetching(e) {
          return f.has(e);
        }
        getPlayedAnimation() {
          return v;
        }
        getPreviousGoLiveSettings() {
          return g;
        }
      }
      (l = "ConsumablesStore"),
        (r = "displayName") in (o = E)
          ? Object.defineProperty(o, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[r] = l),
        (t.Z = new E(a.Z, {
          CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            h.add(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            d.set(e.skuId, e.price), h.delete(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            h.delete(e.skuId), p.add(e.skuId);
          },
          CONSUMABLES_CLEAR_ERROR: (e) => {
            p.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            f.delete(e.skuId), m.set(e.skuId, e.entitlement);
          },
          SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === c.FX) m.set(e.skuId, u.Z.createFromServer(t));
          },
          PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            v = !0;
          },
          RESET_PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            v = !1;
          },
          CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            p.add(e.skuId), f.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            f.add(e.skuId);
          },
          SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            g = e.previousGoLiveSettings;
          },
        }));
    },
    576855: function (e, t, n) {
      var i,
        o,
        r,
        l,
        s = n(200651),
        a = n(192379),
        u = n(120356),
        c = n.n(u),
        d = n(481060),
        h = n(388032),
        f = n(720670);
      let p = { BLOCK: f.block, INLINE: f.inline };
      class m extends (l = a.PureComponent) {
        render() {
          let {
            children: e,
            className: t,
            textClassName: n,
            type: i = p.BLOCK,
            style: o,
          } = this.props;
          return (0, s.jsxs)("div", {
            className: c()(t, i),
            style: o,
            children: [
              (0, s.jsxs)(d.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-positive",
                className: f.pro,
                children: [h.intl.string(h.t["8tvIiI"]), ":"],
              }),
              (0, s.jsx)(d.Text, {
                className: c()(f.tip, n),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      (i = m),
        (o = "Types"),
        (r = p),
        o in i
          ? Object.defineProperty(i, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = r),
        (t.Z = m);
    },
    567409: function (e, t, n) {
      n.d(t, {
        Ns: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(192379),
        o = n(392711),
        r = n.n(o),
        l = n(876215),
        s = n(442837),
        a = n(146282),
        u = n(26033),
        c = n(897674),
        d = n(709054),
        h = n(206583);
      let f = new Set([l.s.PLAYED_GAME]),
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
            requestId: (0, s.e7)([a.Z], () =>
              a.Z.getFeedRequestId(h.YN.GAME_PROFILE_FEED),
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
    523361: function (e, t, n) {
      n.d(t, {
        HG: function () {
          return s;
        },
        Md: function () {
          return l;
        },
        Q8: function () {
          return r;
        },
      });
      var i = n(373228),
        o = n(388032);
      let r = () => [o.intl.string(o.t.b6wEe3), o.intl.string(o.t.i8o9hY)],
        l = () => [o.intl.string(o.t.vqnToa), o.intl.string(o.t["9yh+dH"])],
        s = [
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
        o = n(200876),
        r = n(430824),
        l = n(594174);
      n(709054), n(523361);
      var s = n(981631),
        a = n(388032);
      function u(e) {
        return e;
      }
      function c(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: o,
            roleSubscriptionData: r,
          } = e,
          { content: l, formatParams: s } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: o,
            roleSubscriptionData: r,
          });
        return a.intl.format(l, s);
      }
      function d(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: o,
            roleSubscriptionData: r,
          } = e,
          { content: l, formatParams: s } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: o,
            roleSubscriptionData: r,
          });
        return a.intl.formatToParts(l, s);
      }
      function h(e, t) {
        var n, i;
        let o = r.Z.getGuild(e),
          l =
            null !== (n = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== n
              ? n
              : 0;
        return {
          guild: o,
          totalMonthsSubscribed: l,
          showWithDuration: l > 0,
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
            roleSubscriptionOnClickHandler: o = s.dG4,
            guildId: r,
            roleSubscriptionData: l,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: f,
            isRenewal: p,
          } = h(r, l);
        return (
          (t = f ? (p ? a.t.Iy66Mz : a.t.eCgb2d) : p ? a.t.mPTTdn : a.t.mYjFFx),
          {
            content: t,
            formatParams: {
              username: n,
              usernameHook: i,
              guildName: null == c ? void 0 : c.name,
              handleGuildNameClick: o,
              tierName: null == l ? void 0 : l.tier_name,
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
            roleSubscriptionOnClickHandler: o = s.dG4,
            guildId: r,
            roleSubscriptionData: l,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: f,
            isRenewal: p,
          } = h(r, l);
        return (
          (t = f
            ? p
              ? a.t.OQ0OU1
              : a.t["+N9bxs"]
            : p
              ? a.t.OxP1ND
              : a.t["6Z1E+/"]),
          a.intl.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: o,
            months: d,
          })
        );
      }
      function m(e) {
        return (0, o.l)(e);
      }
      function v(e, t, n, o) {
        var r;
        i.ZP.trackWithMetadata(
          s.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (r = l.default.getCurrentUser()) || void 0 === r
                ? void 0
                : r.id,
            channel_id: t,
            message_id: n,
            role_subscription_listing_id: o,
          },
        );
      }
      function g(e, t) {
        var n;
        return {
          guild_id: e.guild_id,
          sender:
            null === (n = l.default.getCurrentUser()) || void 0 === n
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
        o = n(149765),
        r = n(442837),
        l = n(367907),
        s = n(731429),
        a = n(188471),
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
            hasPreviewEnabled: o,
            postableChannelCount: r,
          } = this.props;
          if (
            (null != t &&
              (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
              ((0, u.Q)(C.rMx.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: o } : {}),
                postable_channels: r,
              }),
              (0, a.a)(C.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
          ) {
            let e = (0, s.K)(c.Z.getChannel(n), !0);
            (0, u.Q)(C.rMx.CHANNEL_OPENED, { ...e, ...(0, l.$H)(n) }),
              (0, a.a)(C.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
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
            l = f.Z.getGuild(i),
            s = g.default.getCurrentUser(),
            a =
              null !==
                (t = d.ZP.getChannels(null == l ? void 0 : l.id)[d.sH]) &&
              void 0 !== t
                ? t
                : [],
            u =
              a.length > 0
                ? a.filter((e) => {
                    let { channel: t } = e;
                    return p.Z.can(
                      o.$e(C.Plq.SEND_MESSAGES, C.Plq.VIEW_CHANNEL),
                      t,
                    );
                  }).length
                : 0,
            c =
              null != s &&
              null != i &&
              null !==
                (n =
                  null === (e = h.ZP.getMember(i, s.id)) || void 0 === e
                    ? void 0
                    : e.isPending) &&
              void 0 !== n &&
              n;
          return {
            selectedGuild: i,
            selectedChannel: r,
            locked: E.Z.isLocked((0, _.QF)()),
            hasPreviewEnabled:
              null == l ? void 0 : l.features.has(C.oNc.PREVIEW_ENABLED),
            isMemberPending: c,
            postableChannelCount: u,
          };
        },
      )(S);
    },
    358446: function (e, t, n) {
      n.d(t, {
        K: function () {
          return p;
        },
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var o = n(704215),
        r = n(481060),
        l = n(13245),
        s = n(312839),
        a = n(706140),
        u = n(658785),
        c = n(987650),
        d = n(921944),
        h = n(388032),
        f = n(240209);
      function p() {
        let [e, t] = (0, a.cv)([o.z.OVERLAY_KEYBIND_NOTIFICATION]),
          { showKeybindIndicators: n } = u.Z.useExperiment(
            { location: "Overlay" },
            { autoTrackExposure: !1 },
          );
        return {
          showKeybindIndicators: null != e && n,
          dismissKeybindNotification: t,
        };
      }
      function m(e) {
        let { markAsDismissed: t } = e,
          { trackView: n, trackClick: o } = (0, s.R)(
            c.n0.KeybindIndicatorsNotification,
            { notif_type: c.n0.KeybindIndicatorsNotification },
          );
        return {
          icon: null,
          body: (0, i.jsxs)("div", {
            className: f.notificationBody,
            children: [
              (0, i.jsx)("div", {
                className: f.iconContainer,
                children: (0, i.jsx)(r.MicrophoneIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 28,
                  width: 28,
                }),
              }),
              (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                children: h.intl.string(h.t.EFRNtL),
              }),
            ],
          }),
          onDismissClick: (e, n) => {
            o("dismiss"), t(d.L.DISMISS), l.Z.updateNotificationStatus(n);
          },
          onNotificationShow: () => {
            t(d.L.AUTO_DISMISS), n();
          },
        };
      }
    },
    906037: function (e, t, n) {
      n.d(t, {
        CR: function () {
          return l;
        },
        eM: function () {
          return r;
        },
        m3: function () {
          return s;
        },
      });
      var i = n(570140),
        o = n(449224);
      function r(e) {
        return (!e.isPreviewingInGame && !e.locked) || e.pinned;
      }
      function l(e, t, n) {
        (e.locked !== t.locked ||
          e.pinned !== t.pinned ||
          n(e) !== n(t) ||
          r(e) !== r(t)) &&
          s(t, n(t));
      }
      function s(e, t) {
        var n, l;
        let s = r(e),
          a = o.Z.getGame();
        i.Z.dispatch({
          type: "OVERLAY_WIDGET_CHANGED",
          gameName:
            null !== (n = null == a ? void 0 : a.name) && void 0 !== n
              ? n
              : null,
          gameId:
            null !== (l = null == a ? void 0 : a.id) && void 0 !== l ? l : null,
          widgetType: e.widget,
          visible: s && t,
          locked: e.locked,
          pinned: e.pinned,
        });
      }
    },
    603618: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return M;
        },
        i: function () {
          return j;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        r = n(512722),
        l = n.n(r),
        s = n(442837),
        a = n(481060),
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
        x = n(592125),
        I = n(158776),
        Z = n(594174),
        b = n(5192),
        y = n(358085),
        N = n(998502),
        O = n(388627),
        T = n(981631),
        A = n(388032),
        L = n(250145);
      function R(e) {
        let { entry: t, currentUserActivity: n, idx: r } = e,
          c = (0, s.e7)([Z.default], () => Z.default.getUser(t.author_id)),
          [f, m] = o.useState("unsent"),
          [v, E] = o.useState(!1);
        o.useEffect(() => {
          if ("sent" === f) {
            let e = setTimeout(() => E(!0), 2e3);
            return () => clearTimeout(e);
          }
        }, [f]);
        let C = null != n && (0, p.Z)(n, T.xjy.JOIN),
          S = async (e) => {
            if (null != c && "unsent" === f) {
              e.stopPropagation();
              try {
                if ((m("sending"), C))
                  await u.Z.sendActivityInviteUser({
                    type: T.mFx.JOIN,
                    userId: c.id,
                    activity: n,
                    location: T.Sbl.UNLOCKED_OVERLAY,
                  });
                else {
                  var i;
                  let e = await d.Z.getOrEnsurePrivateChannel(c.id),
                    n =
                      null !== (i = x.Z.getChannel(e)) && void 0 !== i
                        ? i
                        : null;
                  l()(null != n, "Send channel must be defined"),
                    (0, _.uL)(T.Z5c.CHANNEL(n.guild_id, n.id)),
                    await (0, g.p)({
                      channel: n,
                      content: A.intl.string(A.t.DwAcMz),
                      entry: t,
                      whenReady: !0,
                    });
                }
                h.Z.track(T.rMx.OVERLAY_GAME_INVITE_SENT, {
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
              n = null !== (e = x.Z.getChannel(t)) && void 0 !== e ? e : null;
            l()(null != n, "Send channel must be defined"),
              (0, _.uL)(T.Z5c.CHANNEL(n.guild_id, n.id)),
              y.isPlatformEmbedded ? N.ZP.focus() : window.focus();
          },
          b = C ? A.intl.string(A.t["3fRyS0"]) : A.intl.string(A.t.y9eo7e),
          O = C
            ? (0, i.jsx)(a.GroupPlusIcon, { color: "currentColor", size: "sm" })
            : (0, i.jsx)(a.SendMessageIcon, {
                color: "currentColor",
                size: "sm",
              });
        return (0, i.jsx)(a.Tooltip, {
          text: b,
          "aria-label": b,
          children: (e) =>
            (0, i.jsx)(a.Button, {
              ...e,
              submitting: "sending" === f,
              onClick: v ? I : S,
              className: L.inviteButton,
              innerClassName: L.inviteButtonInner,
              color: a.ButtonColors.TRANSPARENT,
              look:
                "sent" === f ? a.ButtonLooks.OUTLINED : a.ButtonLooks.FILLED,
              size: a.ButtonSizes.ICON,
              children:
                "sent" === f
                  ? v
                    ? (0, i.jsx)(a.ChatIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                    : (0, i.jsx)(a.CheckmarkSmallBoldIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                  : O,
            }),
        });
      }
      function k(e) {
        let { entry: t } = e,
          n = (0, s.e7)([Z.default], () => Z.default.getUser(t.author_id)),
          r = (0, s.e7)(
            [I.Z],
            () =>
              null != n
                ? I.Z.getApplicationActivity(n.id, t.extra.application_id)
                : null,
            [t.extra.application_id, n],
          ),
          [l, c] = o.useState("unsent");
        if (!(null != r && (0, p.Z)(r, T.xjy.JOIN))) return null;
        let d = async (e) => {
            if (null != n && "unsent" === l) {
              e.stopPropagation();
              try {
                c("sending"),
                  await u.Z.sendActivityInviteUser({
                    type: T.mFx.JOIN_REQUEST,
                    userId: n.id,
                    activity: r,
                    location: T.Sbl.UNLOCKED_OVERLAY,
                  }),
                  c("sent");
              } catch (e) {
                c("unsent");
              }
            }
          },
          h = A.intl.string(A.t.OKsSCQ);
        return (0, i.jsx)(a.Tooltip, {
          text: h,
          "aria-label": h,
          children: (e) =>
            (0, i.jsx)(a.Button, {
              ...e,
              submitting: "sending" === l,
              onClick: d,
              className: L.inviteButton,
              innerClassName: L.inviteButtonInner,
              color: a.ButtonColors.TRANSPARENT,
              look:
                "sent" === l ? a.ButtonLooks.OUTLINED : a.ButtonLooks.FILLED,
              size: a.ButtonSizes.ICON,
              children:
                "sent" === l
                  ? (0, i.jsx)(a.CheckmarkSmallBoldIcon, {
                      color: "currentColor",
                      size: "sm",
                    })
                  : (0, i.jsx)(a.HandRequestSpeakIcon, {
                      color: "currentColor",
                      size: "sm",
                    }),
            }),
        });
      }
      function w(e) {
        let { entry: t, currentUserActivity: n, idx: o } = e,
          r = (0, s.e7)([Z.default], () => Z.default.getUser(t.author_id)),
          l = (0, s.e7)(
            [S.Z],
            () => (null != r ? S.Z.getAnyStreamForUser(r.id) : null),
            [r],
          ),
          { isMobileOnline: u, status: c } = (0, s.cj)(
            [I.Z],
            () =>
              null == r
                ? { isMobileOnline: void 0, status: void 0 }
                : {
                    isMobileOnline: I.Z.isMobileOnline(r.id),
                    status: I.Z.getStatus(r.id),
                  },
            [r],
          );
        return null == r
          ? null
          : (0, i.jsxs)("div", {
              className: L.row,
              children: [
                (0, i.jsx)(f.Z, {
                  className: L.avatar,
                  user: r,
                  isMobile: u,
                  status: c,
                }),
                (0, i.jsxs)("div", {
                  className: L.details,
                  children: [
                    (0, i.jsxs)("div", {
                      className: L.usernameWrapper,
                      children: [
                        (0, i.jsx)(a.Text, {
                          className: L.username,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children: b.ZP.getName(void 0, void 0, r),
                        }),
                        null != l && (0, i.jsx)(m.ZP, {}),
                      ],
                    }),
                    (0, i.jsx)(v.Gk, {
                      location: v.Gt.OVERLAY,
                      children: [v.OV, v.wO, v.f, v.v1, v.pQ].map((e, n) =>
                        (0, i.jsx)(e, { entry: t }, "entry-".concat(n)),
                      ),
                    }),
                  ],
                }),
                (0, i.jsx)(k, { entry: t, currentUserActivity: n, idx: o }),
                (0, i.jsx)(R, { entry: t, currentUserActivity: n, idx: o }),
              ],
            });
      }
      function j(e) {
        let { entries: t, currentUserActivity: n } = e,
          o = t.slice(0, 5);
        return (0, i.jsx)(i.Fragment, {
          children: o.map((e, t) =>
            (0, i.jsx)(w, { idx: t, entry: e, currentUserActivity: n }, t),
          ),
        });
      }
      function M() {
        var e;
        let t = null === (e = (0, O.II)()) || void 0 === e ? void 0 : e.id,
          n = (0, E.Ns)(t),
          o = (0, s.e7)([Z.default], () => Z.default.getCurrentUser()),
          r = (0, s.e7)([I.Z], () =>
            null != o && null != t ? I.Z.getApplicationActivity(o.id, t) : null,
          ),
          l = null != r && (0, p.Z)(r, T.xjy.JOIN);
        return 0 === n.length && null == r
          ? null
          : (0, i.jsxs)("div", {
              className: L.container,
              children: [
                null != r && null != o
                  ? (0, i.jsx)(C.Z, {
                      className: L.activityCard,
                      activity: r,
                      user: o,
                      currentUser: o,
                    })
                  : null,
                l
                  ? (0, i.jsx)(a.Button, {
                      className: L.inviteFriendsButton,
                      onClick: () => (0, c.h7)(r, !1, T.IlC.POPOUT),
                      size: a.ButtonSizes.SMALL,
                      color: a.ButtonColors.PRIMARY,
                      children: A.intl.string(A.t["6Qgren"]),
                    })
                  : null,
                (0, i.jsx)(j, { entries: n, currentUserActivity: r }),
              ],
            });
      }
    },
    989373: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n(200651);
      n(192379);
      var o = n(481060),
        r = n(238246),
        l = n(554370);
      function s(e) {
        let { withTitleBar: t, windowKey: n } = e;
        return (0, i.jsx)(o.RedesignIconContextProvider, {
          children: (0, i.jsx)(r.Z, {
            withTitleBar: t,
            windowKey: n,
            title: "Discord Overlay",
            children: (0, i.jsx)(l.Z, {}),
          }),
        });
      }
      n(371467);
    },
    691891: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        l = n(481060),
        s = n(629769);
      let a = (e) => {
        let { className: t, onDismiss: n, "aria-label": o } = e;
        return (0, i.jsx)(l.Button, {
          look: l.Button.Looks.BLANK,
          size: l.Button.Sizes.NONE,
          onClick: n,
          className: r()(s.dismissButton, t),
          "aria-label": o,
          children: (0, i.jsx)(l.XSmallIcon, {
            size: "xs",
            color: "currentColor",
            colorClass: s.dismissIcon,
          }),
        });
      };
      (a.displayName = "DismissButton"), (t.Z = a);
    },
    353038: function (e, t, n) {
      n.d(t, {
        B: function () {
          return i;
        },
        Z: function () {
          return b;
        },
      }),
        n(47120),
        n(411104);
      var i,
        o,
        r,
        l = n(200651),
        s = n(192379),
        a = n(120356),
        u = n.n(a),
        c = n(100621),
        d = n(902704),
        h = n(585483),
        f = n(434529),
        p = n(981631),
        m = n(33806);
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
        let { width: i, height: o } = e;
        return {
          width: "auto" === i ? "auto" : Math.max(t, i),
          height: "auto" === o ? "auto" : Math.max(n, o),
        };
      }
      function C(e) {
        let { top: t, left: n, bottom: i, right: o } = e;
        return (
          null == n && null == o && (n = 0),
          null != n && null != o && (o = void 0),
          null == t && null == i && (t = 0),
          null != t && null != i && (i = void 0),
          { top: t, left: n, bottom: i, right: o }
        );
      }
      function S(e) {
        return "auto" === e || null == e ? "auto" : "".concat(e, "px");
      }
      function x(e, t) {
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
        let { top: n, left: i, bottom: o, right: r } = t;
        switch (e) {
          case "RESIZE_EAST":
          case "RESIZE_NORTH_EAST":
          case "RESIZE_NORTH":
            return { bottom: o, left: i, right: void 0, top: void 0 };
          case "RESIZE_WEST":
          case "RESIZE_NORTH_WEST":
            return { bottom: o, right: r, left: void 0, top: void 0 };
          case "RESIZE_SOUTH_EAST":
            return { top: n, left: i, bottom: void 0, right: void 0 };
          case "RESIZE_SOUTH":
          case "RESIZE_SOUTH_WEST":
            return { top: n, right: r, bottom: void 0, left: void 0 };
          default:
            throw Error("getOrientedCoords: Invalid orientation: ".concat(e));
        }
      }
      function Z(e) {
        let { computedSize: t } = e;
        return t;
      }
      class b extends (o = s.Component) {
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
              container: { maxX: o, maxY: r, minX: l, minY: s },
              onDragStart: a,
              onDrag: u,
              snapOrientation: c = !0,
            },
            dragState: { offsetX: d, offsetY: h },
            state: { operationStarted: p },
          } = this;
          if (null == n) return null;
          (e = Math.max(Math.min(o, e), l)), (t = Math.max(Math.min(r, t), s));
          let { width: m, height: v } = x(n, this.size),
            g = t - h,
            E = e - d,
            _ = (0, f.ou)(
              (0, f.PY)(
                { top: g, left: E, bottom: void 0, right: void 0 },
                o,
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
                !p && null != a && a(),
                  null != u && u(i, "MOVE", this.anchor, this.size);
              },
            );
        }
        handleResizeMove(e, t) {
          let {
              props: {
                id: n,
                minSize: i,
                container: { maxX: o, maxY: r, minX: l, minY: s },
                onDragStart: a,
                onDrag: u,
                resizeValidation: c = Z,
              },
              state: { operation: h, operationStarted: p },
            } = this,
            { startX: m, startY: v } = this.dragState,
            g = 0,
            E = 0;
          if (null == h) return;
          switch (
            ((e = Math.max(Math.min(o, e), l)),
            (t = Math.max(Math.min(r, t), s)),
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
                  o,
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
            !p && (null != a && a(), this.setState({ operationStarted: !0 })),
            null != u && u(n, h, this.anchor, this.size);
        }
        setDOMPositions(e) {
          let { top: t, left: n, bottom: i, right: o } = e,
            { current: r } = this.ref;
          if (
            ((this.anchor = { top: t, left: n, bottom: i, right: o }),
            null != r)
          )
            (r.style.top = S(t)),
              (r.style.bottom = S(i)),
              (r.style.left = S(n)),
              (r.style.right = S(o));
        }
        setDOMSize(e) {
          let { width: t, height: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: o } = this.ref;
          if (
            ((t = "auto" !== this.size.width || i ? t : "auto"),
            (n = "auto" !== this.size.height || i ? n : "auto"),
            (this.size = { width: t, height: n }),
            null != o)
          )
            (o.style.width = S(t)), (o.style.height = S(n));
        }
        renderResizeHandles() {
          let { resizeY: e, resizeX: t, active: n } = this.props;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              e
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("div", {
                        className: u()(m.resizeNorth, {
                          [m.resizeNSCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                      }),
                      (0, l.jsx)("div", {
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
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("div", {
                        className: u()(m.resizeEast, { [m.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_EAST"),
                      }),
                      (0, l.jsx)("div", {
                        className: u()(m.resizeWest, { [m.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_WEST"),
                      }),
                    ],
                  })
                : null,
              t && e
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("div", {
                        className: u()(m.resizeNorthWest, {
                          [m.resizeNWSECursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                      }),
                      (0, l.jsx)("div", {
                        className: u()(m.resizeNorthEast, {
                          [m.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                      }),
                      (0, l.jsx)("div", {
                        className: u()(m.resizeSouthWest, {
                          [m.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                      }),
                      (0, l.jsx)("div", {
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
            ? (0, l.jsx)("div", {
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
              borderWidth: o = 2,
              borderRadius: r = 12,
            },
            state: { operation: l },
          } = this;
          return {
            ...t,
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: o,
            padding: i,
            borderRadius: r + o + i,
            zIndex: null != l ? 1e3 : void 0,
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
              locked: o,
            },
            size: r,
            anchor: l,
            setLockExtras: s,
            state: { anchorTopOverride: a, anchorLeftOverride: u },
          } = this;
          return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != a ? a : null != l.top,
            anchorLeft: null != u ? u : null != l.left,
            size: r,
            padding: n,
            borderWidth: i,
            setLockExtras: s,
            locked: o,
            hidden: t,
          });
        }
        render() {
          let {
            props: { onClick: e, id: t, locked: n },
            state: { operationStarted: i, lockExtras: o },
          } = this;
          return (0, l.jsxs)(c.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: u()({
              [m.wrapper]: !0,
              [m.operation]: i,
              [m.unlocked]: !n,
              [m.lockExtras]: o,
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
            v(this, "ref", s.createRef()),
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
                  dragState: { startX: i, startY: o },
                  state: { operation: r, operationStarted: l },
                } = this;
              if (!(null == r || (!l && 3 > g(i, o, t, n))))
                "MOVE" === r
                  ? this.handleDragMove(t, n)
                  : E.has(r) && this.handleResizeMove(t, n);
            }),
            v(this, "handleOperationStart", (e, t, n) => {
              let {
                ref: { current: i },
                props: {
                  targetWindow: o,
                  active: r,
                  container: { maxX: l, maxY: s },
                },
              } = this;
              if (null == i || !r) return;
              let { width: a, height: u } = x(i, this.size),
                c = (0, f.PY)(this.anchor, l, s, a, u);
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
                    offsetWidth: a,
                    offsetHeight: u,
                    dragOrientedCoords: i,
                  });
              }
              this.setState({ operation: e, operationStarted: !1 }, () => {
                o.addEventListener("mousemove", this.handleMouseMove),
                  o.addEventListener("mouseup", this.handleOperationEnd);
              });
            }),
            v(this, "handleOperationEnd", () => {
              let { operation: e, operationStarted: t } = this.state,
                { targetWindow: n, onDragEnd: i } = this.props;
              n.removeEventListener("mousemove", this.handleMouseMove),
                n.removeEventListener("mouseup", this.handleOperationEnd);
              let o = t
                ? () => {
                    let { onUpdate: t, id: n } = this.props;
                    t(
                      e,
                      n,
                      this.anchor,
                      this.size,
                      x(this.ref.current, this.size),
                    );
                  }
                : void 0;
              if (t) {
                let { maxX: e, maxY: t } = this.props.container,
                  { width: n, height: o } = x(this.ref.current, this.size),
                  r = (0, f.PY)(this.anchor, e, t, n, o),
                  l = (0, f.R)(r);
                this.setDOMPositions(l),
                  this.setDOMSize({ width: n, height: o }),
                  null != i && i();
              }
              this.setState({ operation: null, operationStarted: !1 }, o);
            }),
            v(this, "setLockExtras", (e) => {
              this.setState({ lockExtras: e });
            }),
            (this.anchor = C(e.anchor)),
            (this.size = _(e.size, e.minSize.width, e.minSize.height));
        }
      }
      v(b, "Operations", i);
    },
    350663: function (e, t, n) {
      n.d(t, {
        C: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        o,
        r = n(200651),
        l = n(192379),
        s = n(120356),
        a = n.n(s),
        u = n(399606),
        c = n(239091),
        d = n(40851),
        h = n(352978),
        f = n(27457),
        p = n(199902),
        m = n(592125),
        v = n(944486),
        g = n(981631),
        E = n(705617);
      let _ = new Set([g.jm8.ENDED, g.jm8.FAILED, g.jm8.PAUSED]);
      function C(e) {
        let { participant: t, width: i, locked: o, channel: l } = e,
          s = (0, d.bp)(),
          a = (0, u.e7)(
            [p.Z],
            () => p.Z.getActiveStreamForUser(t.user.id, t.stream.guildId),
            [t.user.id, t.stream.guildId],
          ),
          m = null != a && _.has(a.state);
        return !(null != a) || m
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
                focused: o,
                forceIdle: o,
                channel: l,
                onContextMenu: o
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
                            appContext: s,
                          });
                      });
                    },
              }),
            });
      }
      ((o = i || (i = {})).HORIZONTAL = "horizontal"),
        (o.VERTICAL = "vertical"),
        (t.Z = l.memo(function (e) {
          let {
              tileWidth: t,
              layout: n,
              locked: i,
              streamParticipants: o,
              participantsVersion: l,
            } = e,
            s = (0, u.e7)([v.Z], () => v.Z.getVoiceChannelId()),
            c = (0, u.e7)([m.Z], () => m.Z.getChannel(s), [s]);
          return (0, r.jsx)("div", {
            className: a()({
              [E.gridContainer]: !0,
              [E.vertical]: "vertical" === n,
              [E.horizontal]: "horizontal" === n,
            }),
            children:
              null == c
                ? []
                : o.map((e) =>
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
        o = n(192379),
        r = n(442837),
        l = n(765250),
        s = n(358221),
        a = n(569545),
        u = n(199902),
        c = n(314897),
        d = n(592125),
        h = n(944486),
        f = n(350663),
        p = n(388627),
        m = n(757152);
      let v = [];
      function g(e, t, n, i) {
        let o = (i - 1) * 12;
        return e === f.C.HORIZONTAL
          ? Math.min(Math.max((t - o) / i, 256), Math.max((16 * n) / 9, 256))
          : Math.min(Math.max(t, 256), Math.max((((n - o) / i) * 16) / 9, 256));
      }
      function E(e) {
        var t;
        let {
            id: n,
            size: E,
            locked: _,
            padding: C,
            borderWidth: S,
            opacity: x,
            horizontal: I,
          } = e,
          Z = 2 * C + 2 * S;
        let { width: b, height: y } = {
            width: "number" == typeof (t = E).width ? t.width : 256,
            height: "number" == typeof t.height ? t.height : 144,
          },
          N = (0, r.e7)([h.Z], () => h.Z.getVoiceChannelId()),
          O = (0, r.e7)([d.Z], () => d.Z.getChannel(N)),
          T = (0, r.e7)([c.default], () => c.default.getId()),
          { participantsVersion: A, streamParticipants: L } = (0, r.e7)(
            [u.Z, s.Z],
            () => {
              if (null == N)
                return { streamParticipants: v, participantsVersion: -1 };
              let e = new Set(
                  u.Z.getAllActiveStreamsForChannel(N).map((e) => (0, a.V9)(e)),
                ),
                t = s.Z.getStreamParticipants(N).filter(
                  (t) => t.user.id !== T && e.has((0, a.V9)(t.stream)),
                );
              return (
                t.sort((e, t) =>
                  e.user.username.localeCompare(t.user.username),
                ),
                {
                  streamParticipants: t,
                  participantsVersion: s.Z.getParticipantsVersion(N),
                }
              );
            },
            [N, T],
            p.yp,
          ),
          R = L.length,
          k = null == O || 0 === R,
          w = I ? f.C.HORIZONTAL : f.C.VERTICAL,
          { tileWidth: j } = (function (e, t, n, i, r) {
            let l = (function (e, t, n, i) {
                let o = g(f.C.HORIZONTAL, e, t, n),
                  r = g(f.C.VERTICAL, e, t, n);
                switch (i) {
                  case f.C.VERTICAL:
                    return r;
                  case f.C.HORIZONTAL:
                    return o;
                }
                let l = ((9 * r) / 16 + 12) * n - 12;
                return e > (16 * t) / 9
                  ? o
                  : l <= t
                    ? r
                    : (9 * o) / 16 <= t
                      ? o
                      : r;
              })(n, i, t, r),
              s = g(f.C.VERTICAL, n, i, t),
              a = null != r ? r : l === s ? f.C.VERTICAL : f.C.HORIZONTAL,
              [u, c] = o.useState(l);
            return (
              o.useEffect(() => {
                !e && c(l);
              }, [e, l]),
              { layout: a, tileWidth: u }
            );
          })(!1, R, b - Z, y - Z, w),
          M = {
            id: n,
            width: b,
            height: y,
            sizeOffset: Z,
            layout: w,
            padding: C,
            participants: L.length,
          },
          P = o.useRef(M);
        return (o.useEffect(() => void (P.current = M)),
        o.useEffect(() => {
          let {
            id: e,
            width: t,
            height: n,
            sizeOffset: i,
            layout: o,
            padding: r,
          } = P.current;
          if (0 === L.length) {
            (256 !== t || 144 !== n) &&
              (0, l.nv)({
                widgetId: e,
                size: { fixed: !0, width: 256, height: 144 },
              });
            return;
          }
          if (o === f.C.HORIZONTAL) {
            let t = (16 / 9) * (n - i);
            (0, l.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                height: n,
                width: t * L.length + r * (L.length - 1) + i,
              },
            });
          } else {
            let n = (9 / 16) * (t - i);
            (0, l.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                width: t,
                height: n * L.length + r * (L.length - 1) + i,
              },
            });
          }
        }, [L.length]),
        o.useEffect(() => {
          if (P.current.participants <= 1) return;
          let {
            id: e,
            width: t,
            height: n,
            sizeOffset: i,
            padding: o,
            participants: r,
          } = P.current;
          if (w === f.C.HORIZONTAL) {
            let n = t - i;
            (0, l.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                width: n * r + o * (r - 1) + i,
                height: (9 / 16) * n + i,
              },
            });
          } else {
            let t = n - i;
            (0, l.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                width: (16 / 9) * t + i,
                height: t * r + o * (r - 1) + i,
              },
            });
          }
        }, [w]),
        o.useEffect(
          () => () => {
            (0, l.nv)({
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
              style: { opacity: x },
              children: (0, i.jsx)(f.Z, {
                tileWidth: j,
                locked: _,
                layout: w,
                streamParticipants: L,
                participantsVersion: A,
              }),
            });
      }
    },
    915614: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        l = n(481060),
        s = n(96685);
      function a(e) {
        let { onClick: t, keybind: n, className: o, IconComponent: a } = e;
        return (0, i.jsxs)("div", {
          className: r()(s.buttonContainer, o),
          children: [
            (0, i.jsx)(l.Clickable, {
              className: s.button,
              onClick: t,
              "aria-hidden": !0,
              children: (0, i.jsx)(a, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0,
              }),
            }),
            null != n
              ? (0, i.jsx)(l.Text, {
                  className: r()(s.keybind),
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
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        l = n(111519);
      function s(e) {
        let { keybind: t, className: n } = e;
        return (0, i.jsx)(i.Fragment, {
          children: t.map((e, t) =>
            (0, i.jsx)("span", { className: r()(l.key, n), children: e }, t),
          ),
        });
      }
    },
    554370: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return eo;
        },
      });
      var i = n(200651),
        o = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(442837),
        a = n(952265),
        u = n(481060),
        c = n(239091),
        d = n(13245),
        h = n(951483),
        f = n(714338),
        p = n(100527),
        m = n(906732),
        v = n(146282),
        g = n(70097),
        E = n(567409),
        _ = n(74299),
        C = n(199902),
        S = n(592125),
        x = n(430824),
        I = n(131951),
        Z = n(944486),
        b = n(574254),
        y = n(556296),
        N = n(237997),
        O = n(451478),
        T = n(585483),
        A = n(358085),
        L = n(13140),
        R = n(145597),
        k = n(830917),
        w = n(681603),
        j = n(358446),
        M = n(915614),
        P = n(690336),
        D = n(388627),
        z = n(561064),
        U = n(987650),
        V = n(501787),
        F = n(981631),
        B = n(206583),
        W = n(388032),
        H = n(668674);
      let G = !A.isPlatformEmbedded && !1,
        Y = G
          ? (0, i.jsx)(g.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: H.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
            })
          : null,
        K = null;
      function X(e) {
        e.preventDefault();
      }
      function Q(e) {
        (0, c.jW)(e, async () => {
          let { default: e } = await n.e("17610").then(n.bind(n, 385620));
          return (t) => (0, i.jsx)(e, { ...t, layoutId: V.$S, version: 1 });
        });
      }
      let J = o.memo(function (e) {
          let { keybind: t, onClick: n, locked: o } = e;
          return (0, i.jsx)(u.Clickable, {
            className: l()(H.overlayBackground, {
              [H.overlayActive]: !o,
              [H.overlayLocked]: o,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: o } = e;
              o === F.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: Q,
            children: o
              ? null
              : (0, i.jsx)(M.Z, {
                  className: H.closeContainer,
                  keybind: t,
                  onClick: n,
                  IconComponent: u.XLargeIcon,
                }),
          });
        }),
        q = o.memo(function (e) {
          let { locked: t, focused: n } = e;
          return t && n
            ? (0, i.jsx)(M.Z, {
                className: H.closeContainer,
                onClick: () => d.Z.setInputLocked(!1, (0, R.QF)()),
                IconComponent: u.LockUnlockedIcon,
              })
            : null;
        }),
        $ = o.memo(function () {
          let e = (0, D.pL)(),
            t = (0, E.Ns)(null == e ? void 0 : e.id),
            n = o.useRef(!1),
            i = (0, s.e7)(
              [v.Z],
              () => null != v.Z.getLastFeedFetchDate(B.YN.GAME_PROFILE_FEED),
            );
          return (
            o.useEffect(() => {
              i &&
                !n.current &&
                ((n.current = !0), d.Z.notifyContentInventoryReady(t));
            }, [i, t]),
            null
          );
        });
      function ee() {
        if (null != b.Z.getContextMenu()) {
          (0, c.Zy)();
          return;
        }
        d.Z.setInputLocked(!0, (0, R.QF)());
      }
      function et() {
        d.Z.setFocusedPID(R.Js);
      }
      function en() {
        d.Z.setFocusedPID(null);
      }
      function ei(e) {
        let t = N.Z.isLocked((0, R.QF)());
        "alt" === e.key.toLowerCase() &&
          !t &&
          ("keyup" === e.type.toLowerCase()
            ? T.S.dispatch(F.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })
            : "keydown" === e.type.toLowerCase() &&
              T.S.dispatch(F.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
      }
      function eo() {
        var e, t;
        let n = (0, z.Z)(),
          {
            locked: r,
            focused: c,
            incompatibleApp: v,
            hasValidResolution: g,
            hasZeroSizeDimension: E,
            keybind: b,
          } = (0, s.cj)([N.Z, O.Z, y.Z], () => {
            let e = O.Z.windowSize((0, k.ZY)(n)),
              t = y.Z.getOverlayKeybind();
            return {
              locked: N.Z.isLocked((0, R.QF)()),
              focused: N.Z.isFocused((0, R.QF)()),
              incompatibleApp: N.Z.incompatibleApp,
              hasValidResolution: (0, R.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != t ? (0, L.BB)(t.shortcut, !0) : "???",
            };
          }),
          { analyticsLocations: T } = (0, m.ZP)(p.Z.OVERLAY),
          { showKeybindIndicators: A, dismissKeybindNotification: M } = (0,
          j.K)();
        return (
          !(function (e, t) {
            let n = o.useRef({ mount: e, unmount: t });
            o.useEffect(() => void (n.current = { mount: e, unmount: t })),
              o.useEffect(
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
              !(function (e) {
                let {
                    locked: t,
                    showKeybindNotification: n,
                    dismissKeybindNotification: i,
                  } = e,
                  o = Z.Z.getVoiceChannelId(),
                  r = S.Z.getChannel(o),
                  l = null != r ? x.Z.getGuild(r.guild_id) : null,
                  s = null != C.Z.getCurrentUserActiveStream(),
                  a = (0, D.pL)(),
                  u = (0, _.Z)(I.Z),
                  c = null != o;
                d.Z.track(F.rMx.OVERLAY_INITIALIZED, {
                  voice_widget_connected: c,
                  text_widget_connected: N.Z.isPinned(F.Odu.TEXT),
                });
                let p = u && !s && null != a,
                  m = c && null != l && null != o,
                  v = { type: U.nc.WELCOME };
                n
                  ? (v = { type: U.nc.KEYBIND_INDICATORS, markAsDismissed: i })
                  : p && m
                    ? (v = {
                        type: U.nc.GO_LIVE_VOICE,
                        game: a,
                        voiceChannelId: o,
                        voiceGuild: l,
                      })
                    : p && (v = { type: U.nc.GO_LIVE_NON_VOICE, game: a }),
                  d.Z.overlayMounted(v);
                let g = t && N.Z.isPinned(F.Odu.TEXT);
                f.Z.setLayout(g ? h.Xq : h.Sr), g && f.Z.enable();
              })({
                locked: r,
                showKeybindNotification: A,
                dismissKeybindNotification: M,
                targetWindow: n,
              }),
                n.addEventListener("keydown", ei),
                n.addEventListener("keyup", ei),
                G &&
                  (n.document.hasFocus() && d.Z.setFocusedPID(R.Js),
                  n.addEventListener("focus", et),
                  n.addEventListener("blur", en));
            },
            () => {
              n.removeEventListener("keydown", ei),
                n.removeEventListener("keyup", ei),
                G &&
                  (n.removeEventListener("focus", et),
                  n.removeEventListener("blur", en));
            },
          ),
          (e = r),
          (t = n),
          o.useEffect(() => {
            if (e) {
              if (
                ((0, a.Ay)(u.POPOUT_MODAL_CONTEXT),
                t.addEventListener("contextmenu", X, !1),
                null != K)
              ) {
                let e = Date.now() - K;
                d.Z.track(F.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (K = null);
              }
              return () => {
                t.removeEventListener("contextmenu", X, !1);
              };
            }
            t.removeEventListener("contextmenu", X, !1),
              null == K &&
                ((K = Date.now()), d.Z.track(F.rMx.OVERLAY_UNLOCKED));
          }, [e, t]),
          (0, i.jsx)(m.Gt, {
            value: T,
            children: (0, i.jsxs)(u.RedesignIconContextProvider, {
              children: [
                E || v
                  ? null
                  : (0, i.jsxs)("div", {
                      className: l()(H.overlay, (0, u.getThemeClass)("dark")),
                      children: [
                        Y,
                        (0, i.jsx)(J, { locked: r, keybind: b, onClick: ee }),
                        g
                          ? (0, i.jsx)(P.Z, {
                              className: l()({
                                [H.layoutLocked]: r,
                                [H.layoutUnlocked]: !r,
                              }),
                            })
                          : r
                            ? null
                            : (0, i.jsx)("div", {
                                className: H.invalidContainer,
                                children: (0, i.jsx)("div", {
                                  className: H.inactiveContainer,
                                  children: W.intl.format(W.t.ketnW1, R.FW),
                                }),
                              }),
                        G && (0, i.jsx)(q, { locked: r, focused: c }),
                        (0, i.jsx)(w.Z, {}),
                      ],
                    }),
                (0, i.jsx)($, {}),
              ],
            }),
          })
        );
      }
    },
    690336: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        o = n(192379),
        r = n(442837),
        l = n(481060),
        s = n(355863),
        a = n(451478),
        u = n(830917),
        c = n(388627),
        d = n(892127),
        h = n(84346),
        f = n(561064),
        p = n(501787);
      function m(e) {
        return e.widget.id;
      }
      function v(e, t, n, o) {
        return n === l.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(d.Z, { ...t, transitionState: n, cleanUp: o }, e);
      }
      let g = [];
      t.Z = o.memo(function (e) {
        let { className: t } = e,
          n = (0, f.Z)(),
          d = (0, r.e7)([a.Z], () => a.Z.windowSize((0, u.ZY)(n))),
          E = (0, r.e7)(
            [s.Z],
            () => {
              let e = s.Z.getLayout(p.$S);
              if (null == e) return g;
              let t = [];
              for (let n of e.widgets) {
                let e = s.Z.getWidget(n);
                if (null == e) continue;
                let i = h.Z[e.type];
                null != i && t.push({ widget: e, ...i });
              }
              return t;
            },
            [],
            c.HP,
          ),
          _ = o.useCallback(
            (e) => (0, i.jsx)("div", { className: t, style: d, children: e }),
            [t, d],
          );
        return (0, i.jsx)(l.TransitionGroup, {
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
        o = n(192379),
        r = n(954955),
        l = n.n(r),
        s = n(772848),
        a = n(902704),
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
      let v = o.createContext(
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
                  : (0, s.Z)(),
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
                l()(
                  () => {
                    let e = !1;
                    for (let [t, n] of this.zones) {
                      let i = t.getBoundingClientRect(),
                        o = m(n.zone.name, i);
                      if (!(0, a.Z)(o, n.zone))
                        (e = !0),
                          (n = { element: n.element, zone: o }),
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
          l = o.useContext(v),
          [{ refHandler: s, setObserve: a }] = o.useState(() => {
            let e = null;
            return {
              setObserve(t) {
                null != e && (t ? l.observe(e) : l.unobserve(e));
              },
              refHandler(t) {
                null != e && l.unobserve(e), (e = t);
              },
            };
          });
        return (
          o.useLayoutEffect(() => {
            a(t);
          }, [t, a]),
          (0, i.jsx)("div", {
            ref: s,
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
          return eo;
        },
        aG: function () {
          return es;
        },
        c_: function () {
          return ea;
        },
        sm: function () {
          return el;
        },
      });
      var i = n(200651),
        o = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(442837),
        a = n(685072),
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
        x = n(628581),
        I = n(659580),
        Z = n(793865),
        b = n(55311),
        y = n(575175),
        N = n(933557),
        O = n(471445),
        T = n(74299),
        A = n(803647),
        L = n(565138),
        R = n(917405),
        k = n(603074),
        w = n(879815),
        j = n(189771),
        M = n(294629),
        P = n(67844),
        D = n(544384),
        z = n(892807),
        U = n(560688),
        V = n(199902),
        F = n(592125),
        B = n(430824),
        W = n(131951),
        H = n(19780),
        G = n(944486),
        Y = n(594174),
        K = n(979651),
        X = n(823379),
        Q = n(388627),
        J = n(46145),
        q = n(981631),
        $ = n(388032),
        ee = n(474263);
      function et(e) {
        let t = o.useRef(null);
        return (
          o.useEffect(() => {
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
          cutoutIcon: o,
          icon: r,
          tooltip: s,
          defaultColor: a = p.Button.Colors.TRANSPARENT,
          highlightedColor: u = p.Button.Colors.WHITE,
          onClick: c,
          onCutoutClick: d,
          onMouseEnter: h,
          onMouseLeave: f,
          onContextMenu: m,
        } = e;
        return (0, i.jsx)(p.Tooltip, {
          text: s,
          "aria-label": !1,
          children: (e) => {
            let { onMouseEnter: s, onMouseLeave: v, ...g } = e;
            return (0, i.jsxs)(p.Button, {
              ...g,
              onClick: c,
              size: p.Button.Sizes.SMALL,
              color: t ? u : a,
              className: ee.button,
              disabled: n,
              onMouseEnter: (e) => {
                null == s || s(), null == h || h(e);
              },
              onMouseLeave: (e) => {
                null == v || v(), null == f || f(e);
              },
              onContextMenu: m,
              children: [
                r,
                null != o &&
                  (0, i.jsx)(p.Clickable, {
                    onClick: (e) => {
                      e.stopPropagation(),
                        e.preventDefault(),
                        null == d || d(e);
                    },
                    className: l()(
                      ee.cutoutContainer,
                      t && ee.toggledCutoutContainer,
                    ),
                    children: o,
                  }),
              ],
            });
          },
        });
      }
      function ei(e) {
        let { voiceChannel: t, locked: n } = e,
          { suppress: r, selfMute: l, mute: s } = (0, M.Z)(t),
          a = l || s || r,
          u = (0, x.Z)(l, s, r, !1),
          {
            Component: d,
            play: h,
            events: f,
          } = (0, c.O)(a ? "unmute" : "mute");
        o.useEffect(() => () => h(), [h, a]);
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
              { isShown: o } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(d, { color: "currentColor", size: "sm" }),
              tooltip: u,
              isToggled: !a,
              onClick: () => (0, y.Z)(s, r, q.jXE.OVERLAY),
              onCutoutClick: n,
              onContextMenu: n,
              onMouseEnter: () => {
                f.onMouseEnter();
              },
              onMouseLeave: () => {
                f.onMouseLeave();
              },
              cutoutIcon: o
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
      function eo(e) {
        let { voiceChannel: t } = e,
          { selfDeaf: r, deaf: l } = (0, w.Z)(t),
          s = r || l,
          {
            Component: a,
            play: c,
            events: { onMouseEnter: d, onMouseLeave: h },
          } = (0, u.l)(s ? "undeafen" : "deafen"),
          f = l ? p.HeadphonesDenyIcon : a,
          { analyticsLocations: m } = (0, C.ZP)(_.Z.OVERLAY);
        return (
          o.useEffect(() => () => c(), [s, c]),
          (0, i.jsx)(en, {
            icon: (0, i.jsx)(f, { color: "currentColor", size: "sm" }),
            tooltip: (0, S.Z)(r, l, !1),
            isToggled: s,
            onClick: () => {
              (0, b.Z)(l, q.jXE.OVERLAY);
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
          l = (0, s.e7)([W.Z], () => W.Z.isVideoEnabled()),
          a = (0, s.e7)([W.Z], () => Object.values(W.Z.getVideoDevices())[0]),
          u =
            null === (t = null == a ? void 0 : a.disabled) || void 0 === t || t,
          c = !1 === u,
          d = (0, j.Z)(n),
          h = (e) => {
            m.Z.setVideoEnabled(e);
          },
          v = () => {
            c ? h(!0) : (0, U.Z)();
          },
          g = u ? () => v() : () => h(!l),
          {
            Component: E,
            play: _,
            events: { onMouseEnter: C, onMouseLeave: S },
          } = (0, f.o)(l ? "disable" : "enable"),
          x =
            null != n
              ? (0, P.X)({
                  enabled: l,
                  cameraUnavailable: u,
                  hasPermission: d,
                  channel: n,
                })
              : void 0;
        o.useEffect(() => () => _(), [l, _]);
        let I = et(r),
          b = null == n || !d;
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.Z, { onClose: I(t) });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: o } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(E, { color: "currentColor", size: "sm" }),
              tooltip: x,
              onClick: g,
              isToggled: l,
              onCutoutClick: n,
              onContextMenu: n,
              onMouseEnter: C,
              onMouseLeave: S,
              cutoutIcon: b
                ? null
                : o
                  ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                      color: "currentColor",
                      size: "sm",
                    })
                  : (0, i.jsx)(p.ChevronSmallDownIcon, {
                      color: "currentColor",
                      size: "sm",
                    }),
              disabled: b,
            });
          },
        });
      }
      function el(e) {
        let t,
          { voiceChannel: r, locked: l } = e,
          a = null == r ? void 0 : r.id,
          u = (0, s.e7)([Y.default], () => Y.default.getCurrentUser()),
          c = (0, j.Z)(r),
          h = (0, s.cj)([W.Z], () => (0, T.Z)(W.Z)),
          f = (0, s.e7)([V.Z], () => V.Z.getCurrentUserActiveStream()),
          m = (0, E.bp)(),
          v = null == r ? void 0 : r.getGuildId(),
          g = o.useCallback(() => {
            h &&
              null != a &&
              (0, p.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  n.e("46746"),
                  n.e("3572"),
                ]).then(n.bind(n, 60594));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    selectSource: !1,
                    guildId: v,
                    analyticsLocation: q.Sbl.UNLOCKED_OVERLAY,
                  });
              });
          }, [h, v, a]),
          _ = null != f;
        if (_) t = $.intl.string($.t.S5anIS);
        else if (null != r) {
          let e = (0, Q.pL)();
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
            events: { onMouseEnter: x, onMouseLeave: I },
            play: Z,
          } = (0, d.P)(_ ? "disable" : "enable");
        o.useEffect(() => () => Z(), [_, Z]);
        let b = et(l);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != r
              ? (0, i.jsx)(D.Z, {
                  channel: r,
                  currentUser: u,
                  activeStreams: null != f ? [f] : [],
                  handleGoLive: g,
                  onClose: b(t),
                  appContext: m,
                })
              : (0, i.jsx)(i.Fragment, {});
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: o } = e,
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
              onCutoutClick: o,
              onContextMenu: o,
              onMouseEnter: x,
              onMouseLeave: I,
              disabled: !h || !c,
            });
          },
        });
      }
      function es(e) {
        var t;
        let { voiceChannel: o, locked: r } = e,
          l =
            null !== (t = null == o ? void 0 : o.getGuildId()) && void 0 !== t
              ? t
              : null,
          { mute: a, suppress: u } = (0, M.Z)(o),
          c = (0, s.e7)([W.Z], () => W.Z.isDeaf()),
          d = null == o || a || u || c;
        function f(e) {
          null != l &&
            (0, v.jW)(e, async () => {
              let { default: e } = await n.e("56049").then(n.bind(n, 338991));
              return (t) => (0, i.jsx)(e, { guildId: l, ...t });
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
            return d || null == o
              ? (0, i.jsx)(i.Fragment, {})
              : (0, i.jsx)(k.Z, {
                  guildId: l,
                  channel: o,
                  onClose: C(t),
                  analyticsSource: "action bar button",
                });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: o } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(m, { color: "currentColor", size: "sm" }),
              tooltip: (function () {
                if (a) return $.intl.string($.t["Ox4/zc"]);
                if (u) return $.intl.string($.t["+YBKYG"]);
                if (c) return $.intl.string($.t.X1lQlp);
              })(),
              onClick: (e) => {
                g(), n(e);
              },
              onContextMenu: f,
              onMouseEnter: E,
              onMouseLeave: _,
              isToggled: o,
              disabled: d,
            });
          },
        });
      }
      function ea(e) {
        let { voiceChannel: t, locked: n } = e,
          o = (0, s.e7)(
            [G.Z],
            () => G.Z.getVoiceChannelId() === (null == t ? void 0 : t.id),
          ),
          r = (0, s.Wu)([J.Z, F.Z], () =>
            J.Z.getChannelHistory()
              .map((e) => F.Z.getChannel(e))
              .filter(X.lm)
              .filter((e) => e.isVocal()),
          ),
          l = () => {
            o && g.default.disconnect();
          },
          u = (e) => {
            g.default.selectVoiceChannel(e.id);
          },
          {
            Component: c,
            events: { onMouseEnter: d, onMouseLeave: h },
          } = (0, a.K)(),
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
              { isShown: s } = n;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(c, { color: "currentColor", size: "sm" }),
              tooltip:
                null != t
                  ? $.intl.string($.t["6vrfgo"])
                  : $.intl.string($.t.S0W8Z2),
              onClick: o ? l : r,
              defaultColor: o
                ? p.Button.Colors.RED
                : p.Button.Colors.TRANSPARENT,
              onMouseEnter: d,
              onMouseLeave: h,
              onContextMenu: r,
              isToggled: s,
            });
          },
        });
      }
      function eu(e) {
        let { voiceChannel: t } = e,
          n = (0, s.e7)([B.Z], () => B.Z.getGuild(t.getGuildId()), [t]);
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
          n = (0, O.KS)(t),
          o = (0, N.ZP)(t);
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
              children: o,
            }),
          ],
        });
      }
      function ed(e) {
        let { voiceChannel: t } = e,
          n = null == t ? void 0 : t.id,
          o = (0, s.cj)([H.Z], () => ({
            channelId: H.Z.getChannelId(),
            quality: H.Z.getQuality(),
            state: H.Z.getState(),
            lastPing: H.Z.getLastPing(),
          })),
          r = null != n,
          l = (0, s.e7)([K.Z], () => null != n && K.Z.hasVideo(n), [n]);
        return (
          r &&
          null != t &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(R.Z, { ...o, hasVideo: l }),
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
      var o = n(120356),
        r = n.n(o),
        l = n(442837),
        s = n(592125),
        a = n(944486),
        u = n(293224),
        c = n(720870);
      function d(e) {
        let { locked: t } = e,
          n = (0, l.e7)([a.Z], () => a.Z.getVoiceChannelId()),
          o = (0, l.e7)([s.Z], () => s.Z.getChannel(n)),
          d = null != o;
        return (0, i.jsxs)("div", {
          className: r()({ [c.panelContainer]: !0, [c.locked]: t }),
          children: [
            (0, i.jsxs)("div", {
              className: c.panelRow,
              children: [
                (0, i.jsx)(u.Ox, { voiceChannel: o, locked: t }),
                (0, i.jsx)(u.SE, { voiceChannel: o, locked: t }),
                (0, i.jsx)(u.N3, { voiceChannel: o, locked: t }),
                (0, i.jsx)("div", { className: c.separator }),
                (0, i.jsx)(u.sm, { voiceChannel: o, locked: t }),
                (0, i.jsx)(u.aG, { voiceChannel: o, locked: t }),
                (0, i.jsx)("div", { className: c.separator }),
                (0, i.jsx)(u.c_, { voiceChannel: o, locked: t }),
              ],
            }),
            d &&
              (0, i.jsx)("div", {
                className: c.panelRow,
                children: (0, i.jsx)(u.L, { voiceChannel: o, locked: t }),
              }),
          ],
        });
      }
    },
    46145: function (e, t, n) {
      n(47120), n(733860);
      var i,
        o = n(442837),
        r = n(570140),
        l = n(592125),
        s = n(271383),
        a = n(430824);
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
      class h extends (i = o.ZP.PersistedStore) {
        initialize(e) {
          var t;
          this.waitFor(s.ZP, a.Z, l.Z),
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
                    null === (t = l.Z.getChannel(i)) || void 0 === t
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
    586742: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var i = n(200651),
        o = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(442837),
        a = n(239091),
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
        S = n(253653);
      function x(e) {
        let {
            context: t = C.Yn.DEFAULT,
            participants: r,
            locked: s,
            widget: u,
            channel: c,
            width: d,
            height: h,
            containerRef: m,
          } = e,
          v = (e, o) => {
            (0, a.jW)(o, async () => {
              let { default: o } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("50261"),
              ]).then(n.bind(n, 881351));
              return (n) =>
                (0, i.jsx)(o, {
                  ...n,
                  user: e.user,
                  showMediaItems: !0,
                  mediaEngineContext: t,
                });
            });
          },
          g = r.length > 0 && null != t && null != c && (!s || u.pinned);
        o.useEffect(() => {
          (0, E.m3)(
            {
              locked: s,
              pinned: u.pinned,
              widget: u.type,
              isPreviewingInGame: !1,
            },
            g,
          );
        }, [s, u, g]);
        let _ = "boolean" != typeof u.meta.horizontal || u.meta.horizontal;
        return g
          ? (0, i.jsx)("div", {
              ref: m,
              className: l()({ [S.videoList]: !0, [S.vertical]: !_ }),
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
                        containerStyle: { width: d, height: h },
                        fit: f.L.COVER,
                        channel: c,
                        inPopout: !0,
                        inCall: !0,
                        onContextMenu: s ? void 0 : v,
                        forceIdle: s,
                      },
                      n.id,
                    );
              }),
            })
          : null;
      }
      function I(e) {
        let t = (0, s.e7)([g.Z, v.Z], () =>
            v.Z.getChannel(g.Z.getVoiceChannelId()),
          ),
          n = (0, h.ZP)(t),
          r = (0, s.Wu)([d.Z], () =>
            null != t ? d.Z.getVideoParticipants(t.id) : [],
          ),
          l = (0, s.e7)([d.Z], () =>
            null != t ? d.Z.getParticipantsVersion(t.id) : 0,
          ),
          a =
            "boolean" != typeof e.widget.meta.horizontal ||
            e.widget.meta.horizontal,
          { width: f, height: p, ref: E } = (0, c.Z)(),
          { visibleParticipants: C, participantTileWidth: S } = (0, m.ZB)(
            a ? (null != f ? f : e.width) : null != p ? p : e.height,
            r,
            {
              tileWidth: _.vZ,
              tileMinWidth: _.mo,
              tileMargin: _.F$,
              limit: 8,
              cropSelfVideo: !0,
              version: l,
            },
          ),
          I = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height,
          },
          Z = o.useRef(I);
        return (
          o.useLayoutEffect(() => void (Z.current = I)),
          o.useLayoutEffect(() => {
            let {
              size: e,
              id: t,
              containerWidth: n,
              containerHeight: i,
            } = Z.current;
            ((a && e.height > e.width) || (!a && e.width > e.height)) &&
              (0, u.nv)({
                widgetId: t,
                size: { fixed: !0, width: i, height: n },
              });
          }, [a]),
          (0, i.jsx)(x, {
            ...e,
            channel: t,
            title: null != n ? n : "",
            participants: C,
            participantsVersion: l,
            width: a ? S : null != f ? f : e.width,
            height: a ? (null != p ? p : e.height) : S,
            containerRef: E,
          })
        );
      }
    },
    243487: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return V;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(442837),
        a = n(481060),
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
        x = n(199902),
        I = n(314897),
        Z = n(592125),
        b = n(355863),
        y = n(131951),
        N = n(944486),
        O = n(938475),
        T = n(237997),
        A = n(136015),
        L = n(51144),
        R = n(145597),
        k = n(658785),
        w = n(388627),
        j = n(981631),
        M = n(65154),
        P = n(915990);
      function D(e) {
        let { avatarSize: t, userId: n, channelId: o, guildId: r } = e,
          l = 2 * t,
          s = -(t / 2);
        return (0, i.jsx)("div", {
          className: P.effect,
          style: { top: s, left: s, width: l, height: l },
          children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: o,
            guildId: r,
            containerDimensions: { width: l, height: l },
          }),
        });
      }
      function z(e) {
        let {
            channel: t,
            flipped: n = !1,
            locked: r = !1,
            user: u,
            nick: c,
            displayNameMode: d,
            displayUserMode: p,
            size: m = j.ipw.LARGE,
            onClick: v,
            onContextMenu: E,
            context: _,
            guildId: C,
            voiceState: Z,
            showStreamPreview: b,
            onShowStreamPreview: N,
            onWatchStream: O,
          } = e,
          T = (0, s.e7)([I.default], () => I.default.getId() === u.id, [u.id]),
          [A, L, R] = (0, s.Wu)(
            [y.Z],
            () =>
              T
                ? [
                    !y.Z.isSupported() ||
                      y.Z.isSelfMute() ||
                      y.Z.isSelfMutedTemporarily(),
                    y.Z.isSelfDeaf(),
                    !1,
                  ]
                : [
                    !y.Z.isSupported() || y.Z.isLocalMute(u.id),
                    !1,
                    y.Z.isLocalVideoDisabled(u.id),
                  ],
            [T, u.id],
          ),
          k = (0, s.e7)([x.Z], () => x.Z.getCurrentUserActiveStream()),
          w = (0, s.Wu)([x.Z], () => (null != k ? x.Z.getViewerIds(k) : [])),
          M = (0, f.Z)({ userId: u.id, context: _ }),
          z = (0, s.e7)([x.Z], () => x.Z.getStreamForUser(u.id, C)),
          U = null != z,
          V = o.useMemo(
            () => null != k && k.ownerId !== u.id && w.includes(u.id),
            [k, u.id, w],
          ),
          F = o.useCallback(() => N(null), [N]),
          B = o.useCallback(
            () =>
              (0, i.jsx)(g.Z, {
                user: u,
                channel: t,
                onWatch: () => {
                  (0, h.rn)(z, { forceMultiple: !0, noFocus: !0 }), F(), O();
                },
                onAction: O,
                previewIsOpen: b,
                location: j.Sbl.UNLOCKED_OVERLAY,
              }),
            [u, t, z, b, F, O],
          );
        if (p === j.OYC.ONLY_WHILE_SPEAKING && r && !M) return null;
        let { mute: W, suppress: H, deaf: G } = Z,
          Y = m === j.ipw.LARGE ? 32 : 24;
        return (0, i.jsxs)(a.Clickable, {
          className: l()(P.voiceUser, {
            [P.speaking]: M,
            [P.interactive]: !r,
            [P.flipped]: n,
          }),
          onClick: r ? void 0 : (e) => (null == v ? void 0 : v(e, u)),
          onContextMenu: r ? void 0 : (e) => (null == E ? void 0 : E(e, u)),
          onMouseEnter: () => N(u.id),
          onMouseLeave: F,
          children: [
            (0, i.jsx)(a.Avatar, {
              className: P.avatar,
              size:
                m === j.ipw.LARGE
                  ? a.AvatarSizes.SIZE_32
                  : a.AvatarSizes.SIZE_24,
              src: u.getAvatarURL(C, Y),
              "aria-hidden": !0,
            }),
            (0, i.jsx)(D, {
              avatarSize: Y,
              userId: u.id,
              channelId: t.id,
              guildId: t.getGuildId(),
            }),
            r && (d === j.wC$.NEVER || (!M && d === j.wC$.ONLY_WHILE_SPEAKING))
              ? null
              : (0, i.jsx)(a.Popout, {
                  position: "right",
                  renderPopout: B,
                  shouldShow: b,
                  onRequestClose: F,
                  spacing: 0,
                  children: () =>
                    (0, i.jsxs)(a.Clickable, {
                      className: P.username,
                      children: [
                        (0, i.jsx)(a.Text, {
                          variant: "text-xs/medium",
                          color: "text-normal",
                          children: c,
                        }),
                        (0, i.jsx)(S.nm, {
                          guildId: C,
                          user: u,
                          video: Z.selfVideo,
                          isStreaming: U,
                          className: P.voiceIcons,
                          iconClassName: P.voiceIcon,
                          isWatching: V,
                          localMute: A && !T,
                          localVideoDisabled: R,
                          mute: W || A,
                          deaf: G || L,
                          serverMute: W || H,
                          serverDeaf: G,
                          disabled: !1,
                        }),
                      ],
                    }),
                }),
          ],
        });
      }
      function U(e) {
        let {
            id: t,
            context: r = M.Yn.DEFAULT,
            channel: l,
            sortedVoiceStates: s,
            displayNameMode: a,
            displayUserMode: h,
            locked: f,
            pinned: p,
            isPreviewingInGame: m,
            anchorLeft: v,
            avatarSizeMode: g,
          } = e,
          [E, _] = o.useState(null),
          C = (e, t) => {
            (0, u.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("50261"),
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
          S = s.length > 0 && null != r && null != l && (!f || p),
          x = o.useCallback(() => {
            var e, n;
            let i =
                null === (e = b.Z.getWidget(t)) || void 0 === e
                  ? void 0
                  : e.layoutId,
              o =
                null != i
                  ? null === (n = b.Z.getWidgetsForLayout(i)) || void 0 === n
                    ? void 0
                    : n.find((e) => e.type === j.Odu.GO_LIVE)
                  : null;
            null != o &&
              !o.pinned &&
              ((0, c.xh)(o.id),
              d.Z.track(j.rMx.OVERLAY_PIN_TOGGLED, {
                pinned: !0,
                guild_id: null == l ? void 0 : l.guild_id,
                channel_id: null == l ? void 0 : l.id,
                channel_type: null == l ? void 0 : l.type,
                widget_type: j.Odu.GO_LIVE,
              }));
          }, [l, t]);
        return S
          ? (0, i.jsx)(i.Fragment, {
              children: s.map((e) => {
                var t;
                let { user: n, voiceState: o, member: s } = e;
                return null == n
                  ? null
                  : (0, i.jsx)(
                      z,
                      {
                        guildId: null == l ? void 0 : l.guild_id,
                        user: n,
                        nick:
                          null !== (t = null == s ? void 0 : s.nick) &&
                          void 0 !== t
                            ? t
                            : L.ZP.getName(n),
                        flipped: !v,
                        voiceState: o,
                        displayNameMode: a,
                        displayUserMode: h,
                        size: g,
                        locked: f || m,
                        onContextMenu: C,
                        onClick: C,
                        context: r,
                        channel: l,
                        showStreamPreview: n.id === E,
                        onShowStreamPreview: _,
                        onWatchStream: x,
                      },
                      n.id,
                    );
              }),
            })
          : null;
      }
      function V(e) {
        var t;
        let n = (0, s.e7)([N.Z, Z.Z], () =>
            Z.Z.getChannel(N.Z.getVoiceChannelId()),
          ),
          r = (0, v.ZP)(n),
          l = (function () {
            let [e] = (0, s.e7)(
                [O.ZP, _.Z, N.Z, Z.Z],
                () => {
                  let e = Z.Z.getChannel(N.Z.getVoiceChannelId());
                  return null == e
                    ? [[], -1]
                    : e.isGuildStageVoice()
                      ? [
                          _.Z.getMutableParticipants(e.id, C.pV.SPEAKER),
                          _.Z.getParticipantsVersion(e.id),
                        ]
                      : [
                          O.ZP.getVoiceStatesForChannel(e),
                          O.ZP.getVoiceStateVersion(e.getGuildId()),
                        ];
                },
                [],
                A.Q,
              ),
              t = (0, s.e7)([I.default], () => I.default.getId()),
              { showKeybindIndicators: n } = k.Z.useExperiment({
                location: "voice_widget",
              });
            return o.useMemo(
              () =>
                n
                  ? [...e].sort((e, n) =>
                      e.user.id === t ? -1 : n.user.id === t ? 1 : 0,
                    )
                  : e,
              [e, t, n],
            );
          })(),
          a = (0, s.e7)([x.Z], () => x.Z.getStreamerActiveStreamMetadata()),
          u = (0, w.II)(),
          c = (0, p.q)(null == u ? void 0 : u.id),
          d = (0, s.cj)([x.Z, T.Z], () => {
            let e = x.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: T.Z.getDisplayUserMode(),
              displayNameMode: T.Z.getDisplayNameMode(),
              avatarSizeMode: T.Z.getAvatarSizeMode(),
              streamApplication:
                (null == a ? void 0 : a.pid) === (0, R.QF)()
                  ? (0, E.Z)(u)
                  : null,
              stream: e,
            };
          });
        return (0, i.jsx)(U, {
          ...d,
          application: c,
          ...e,
          sortedVoiceStates: l,
          channel: n,
          title: null != r ? r : "",
          streamMetadata: a,
          streamApplication:
            null !== (t = d.streamApplication) && void 0 !== t
              ? t
              : { id: null, name: null == a ? void 0 : a.sourceName },
        });
      }
    },
    892127: function (e, t, n) {
      var i = n(200651),
        o = n(192379),
        r = n(442837),
        l = n(765250),
        s = n(13245),
        a = n(355863),
        u = n(237997),
        c = n(451478),
        d = n(434529),
        h = n(145597),
        f = n(830917),
        p = n(353038),
        m = n(561064),
        v = n(981631),
        g = n(556351);
      t.Z = o.memo(function (e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: E,
            renderButtons: _,
            resizeValidation: C,
          } = e,
          S = a.Z.getWidgetConfig(t.type),
          x = (0, r.e7)([u.Z], () => u.Z.isLocked((0, h.QF)())),
          I = (0, m.Z)(),
          Z = (0, r.e7)([c.Z], () => c.Z.windowSize((0, f.ZY)(I))),
          b = (0, m.Z)(),
          y = o.useCallback((e, t, n, i, o) => {
            let r = c.Z.windowSize((0, f.ZY)((0, m.i)())),
              u = (0, d.jL)(n, r),
              h = (0, d.Ox)(i, r);
            (0, l.Os)(t), (0, l.nv)({ widgetId: t, anchor: u, size: h });
            let g = e === p.B.MOVE,
              E = (0, d.PY)(n, r.width, r.height, o.width, o.height);
            s.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, {
              was_resized: !g,
              was_dragged: g,
              widget_type: a.Z.getWidgetType(t),
              window_width: r.width,
              window_height: r.height,
              widget_width: o.width,
              widget_height: o.height,
              widget_left: E.left,
              widget_top: E.top,
            });
          }, []),
          N = o.useCallback((e) => {
            (0, l.Os)(e);
          }, []),
          { id: O, pinned: T, zIndex: A, size: L, anchor: R } = t,
          k = (0, d.w_)(L, Z),
          w = (0, d.KR)(R, Z),
          { minSize: j, resizeX: M, resizeY: P, dragAnywhere: D } = S,
          z = T || !x,
          U = o.useMemo(
            () => ({ minX: 0, minY: 0, maxX: Z.width, maxY: Z.height }),
            [Z],
          ),
          V = o.useCallback((e) => n({ ...e, widget: t }), [t, n]),
          F = o.useCallback(
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
          B = o.useMemo(() => {
            if (null != C) return (e) => C({ ...e, widget: t });
          }, [C, t]);
        return (0, i.jsx)(p.Z, {
          id: O,
          size: k,
          anchor: w,
          container: U,
          minSize: j,
          hidden: !z,
          locked: x,
          resizeX: M,
          resizeY: P,
          style: { zIndex: A },
          dragAnywhere: D,
          active: !x,
          onUpdate: y,
          onClick: N,
          targetWindow: b,
          renderExtras: F,
          resizeValidation: B,
          children: V,
        });
      });
    },
    84346: function (e, t, n) {
      var i = n(200651),
        o = n(239091),
        r = n(603618),
        l = n(353038),
        s = n(761374),
        a = n(2923),
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
              size: o,
              padding: r,
              borderWidth: l,
            } = e;
            return (0, i.jsx)(u.Z, {
              id: t.id,
              locked: n,
              widget: t,
              height: "auto" === o.height ? 0 : o.height - 2 * r - 2 * l,
              width: "auto" === o.width ? 0 : o.width - 2 * r - 2 * l,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(d.PI, { children: m.intl.string(m.t.UPvOiY) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(d.ls, {
                  onClick: (r) => {
                    var l, s, a;
                    return (
                      (l = r),
                      (s = e),
                      (a = t),
                      void (0, o.jW)(l, async () => {
                        let { default: e } = await n
                          .e("26775")
                          .then(n.bind(n, 740579));
                        return (
                          a(!0),
                          (t) =>
                            (0, i.jsx)(e, {
                              ...t,
                              widget: s,
                              onClose: () => a(!1),
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
            let { widget: t, computedSize: n, borderWidth: i, padding: o } = e;
            return "boolean" != typeof t.meta.horizontal || t.meta.horizontal
              ? {
                  width: Math.max(n.width, f.vZ),
                  height: Math.min(n.height, 2 * f.mo + 2 * i + 2 * o),
                }
              : {
                  height: Math.max(n.height, f.vZ),
                  width: Math.min(n.width, 2 * f.mo + 2 * i + 2 * o),
                };
          },
        },
        [p.Odu.VOICE_V3]: {
          renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: o } = e;
            return (0, i.jsx)(c.Z, {
              anchorLeft: n,
              id: t.id,
              locked: o,
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
                    var r, l;
                    return (
                      (r = e),
                      (l = t),
                      void (0, o.jW)(r, async () => {
                        let { default: e } = await n
                          .e("32382")
                          .then(n.bind(n, 955280));
                        return (
                          l(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => l(!1) })
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
            let { widget: t, locked: n, size: o, dragStart: r } = e;
            return (0, i.jsx)(s.Z, {
              id: t.id,
              locked: n,
              pinned: t.pinned,
              opacity: t.opacity,
              size: o,
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
                    var l, s, a;
                    return (
                      (l = r),
                      (s = e),
                      (a = t),
                      void (0, o.jW)(l, async () => {
                        let { default: e } = await n
                          .e("34684")
                          .then(n.bind(n, 68738));
                        return (
                          a(!0),
                          (t) =>
                            (0, i.jsx)(e, {
                              ...t,
                              widget: s,
                              onClose: () => a(!1),
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
                borderWidth: o,
                padding: r,
                containerSpecs: s,
              } = e,
              a = 2 * o + 2 * r,
              u = i.width - a,
              c = i.height - a,
              d = u / c,
              h = c / u,
              f = (() => {
                switch (t) {
                  case l.B.RESIZE_NORTH:
                  case l.B.RESIZE_SOUTH:
                    return {
                      height: n.height,
                      width: Math.round((n.height - a) * d + a),
                    };
                  default:
                    return {
                      width: n.width,
                      height: Math.round((n.width - a) * h + a),
                    };
                }
              })();
            return (
              f.width > s.maxX &&
                ((f.width = s.maxX), (f.height = (s.maxX - a) * h + a)),
              f.height > s.maxY &&
                ((f.height = s.maxY), (f.width = (s.maxY - a) * d + a)),
              f
            );
          },
        },
        [p.Odu.QUICK_ACTIONS]: {
          renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(a.Z, { locked: t });
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
                    var r, l;
                    return (
                      (r = e),
                      (l = t),
                      void (0, o.jW)(r, async () => {
                        let { default: e } = await n
                          .e("94706")
                          .then(n.bind(n, 168133));
                        return (
                          l(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => l(!1) })
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
          renderButtons: (e) =>
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(d.RT, { id: e.id, pinned: e.pinned }),
            }),
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
      var o = n(120356),
        r = n.n(o),
        l = n(692547),
        s = n(481060),
        a = n(765250),
        u = n(388032),
        c = n(614043);
      function d(e) {
        let { children: t } = e;
        return (0, i.jsx)("div", {
          className: c.titleWrapper,
          children: (0, i.jsx)(s.Text, {
            variant: "text-xs/semibold",
            color: "header-primary",
            children: t,
          }),
        });
      }
      function h(e) {
        let { onClick: t } = e,
          n = u.intl.string(u.t["3D5yo6"]);
        return (0, i.jsx)(s.Tooltip, {
          text: n,
          "aria-label": n,
          children: (e) =>
            (0, i.jsx)(s.Clickable, {
              ...e,
              className: c.button,
              onClick: t,
              children: (0, i.jsx)(s.SettingsIcon, {
                size: "xxs",
                color: l.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
      function f(e) {
        let { id: t, pinned: n } = e,
          o = n ? u.intl.string(u.t.cSu80t) : u.intl.string(u.t.cM8Vnp);
        return (0, i.jsx)(s.Tooltip, {
          text: o,
          "aria-label": o,
          children: (e) =>
            (0, i.jsx)(s.Clickable, {
              ...e,
              className: r()(c.button, n && c.active),
              onClick: () => (0, a.xh)(t),
              children: (0, i.jsx)(s.PinUprightIcon, {
                size: "xxs",
                color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE,
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
        o = n(192379),
        r = n(904245),
        l = n(13245),
        s = n(655687),
        a = n(541716),
        u = n(752305),
        c = n(893718),
        d = n(957730),
        h = n(849522),
        f = n(145597),
        p = n(981631),
        m = n(561990);
      function v(e) {
        let { id: t, channel: n, onSend: v } = e,
          g = (0, h.Z)(),
          { placeholder: E, accessibilityLabel: _ } = (0, s.Z)(n),
          [C, S] = o.useState(() => (0, u.H2)()),
          { textValue: x, richValue: I } = C,
          [Z, b] = o.useState(!1),
          y = o.useCallback(() => b(!0), []),
          N = o.useCallback(() => b(!1), []),
          O = o.useCallback((e, t, n) => {
            S({ textValue: t, richValue: n });
          }, []),
          T = o.useCallback(
            () =>
              x.length > g
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (r.Z.sendMessage(n.id, d.ZP.parse(n, x), !1),
                  l.Z.setInputLocked(!0, (0, f.QF)()),
                  l.Z.updateNotificationStatus(t, p._1z.DISMISSED),
                  null == v || v(x),
                  Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [x, g, n, t, v],
          );
        return (0, i.jsx)(c.Z, {
          innerClassName: m.textArea,
          onChange: O,
          placeholder: E,
          accessibilityLabel: _,
          channel: n,
          textValue: x,
          richValue: I,
          type: a.I.OVERLAY_INLINE_REPLY,
          onBlur: N,
          onFocus: y,
          focused: Z,
          onSubmit: T,
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
        o = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(100621),
        a = n(481060),
        u = n(13245),
        c = n(691891),
        d = n(44359),
        h = n(333031),
        f = n(693091),
        p = n(981631),
        m = n(388032),
        v = n(213973);
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
      let _ = o.memo(function (e) {
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
            body: x,
            title: I,
            renderFooter: Z,
            contentOpacity: b,
            status: y,
            containerRef: N,
          } = e,
          [O, T] = o.useState(!1),
          A = n || O || y === p._1z.FOCUSED;
        o.useEffect(() => {
          null == r || r();
        }, [r]);
        let L = o.useCallback(
            (e) => {
              e.stopPropagation(), null == u || u(e);
            },
            [u],
          ),
          R = o.useCallback(
            (e) => {
              e.stopPropagation(), null == d || d(e);
            },
            [d],
          ),
          k = o.useCallback(
            (e) => {
              e.stopPropagation(), null == h || h(e);
            },
            [h],
          ),
          w = o.useCallback(() => {
            T(!0);
          }, []),
          j = o.useCallback(() => {
            T(!1);
          }, []);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: v.overflowWrapper,
              onScroll: E,
              children: (0, i.jsx)(a.Clickable, {
                innerRef: N,
                ignoreKeyPress: !0,
                onMouseOver: w,
                onMouseLeave: j,
                onClick: f,
                className: l()(v.container, { [v.clickable]: null != f }),
                children: (function () {
                  let e = null == Z ? void 0 : Z(A);
                  return (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(s.animated.div, {
                        className: v.iconAndDetails,
                        style: { opacity: b },
                        children: [
                          null == S
                            ? null
                            : "string" == typeof S
                              ? (0, i.jsx)(a.Avatar, {
                                  src: S,
                                  size: a.AvatarSizes.SIZE_40,
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
                              (0, i.jsx)(a.Text, {
                                color: "interactive-normal",
                                variant: "text-sm/semibold",
                                lineClamp: 2,
                                children: I,
                              }),
                              null != x
                                ? (0, i.jsx)(a.Text, {
                                    color: "interactive-normal",
                                    variant: "text-sm/normal",
                                    lineClamp:
                                      null != t ? t * (A ? 2 : 1) : void 0,
                                    children: x,
                                  })
                                : null,
                              (function () {
                                let e = "function" == typeof g ? g(A) : g;
                                return null != g
                                  ? (0, i.jsx)(a.Text, {
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
                                        ? (0, i.jsx)(a.Button, {
                                            className: v.button,
                                            size: a.Button.Sizes.SMALL,
                                            color: a.Button.Colors.GREEN,
                                            onClick: R,
                                            children:
                                              null != C
                                                ? C
                                                : m.intl.string(m.t.BddRzc),
                                          })
                                        : null,
                                      null != h
                                        ? (0, i.jsx)(a.Button, {
                                            className: v.button,
                                            size: a.Button.Sizes.SMALL,
                                            look: a.Button.Looks.OUTLINED,
                                            color: a.Button.Colors.PRIMARY,
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
                        (0, i.jsx)(a.Clickable, {
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
          springs: { opacity: t, scale: n, transform: o, height: r },
          index: l,
          children: a,
          locked: u,
        } = e;
        return (0, i.jsx)(s.animated.div, {
          className: v.animationWrapper,
          style: {
            pointerEvents: u && 0 !== l ? "none" : "auto",
            zIndex: Math.max(5 - l, 0),
            opacity: t,
            transform: o.to((e) => "translate3d(0, ".concat(e, "px, 0)")),
            scale: n.to([0, 1], [0.7, 1]),
            height: r,
          },
          children: a,
        });
      }
      function S(e) {
        let {
            notification: t,
            index: n,
            locked: r,
            transitionState: l,
            cleanUp: s,
          } = e,
          {
            id: a,
            props: {
              onNotificationShow: c,
              onDismissClick: d,
              onNotificationClick: p,
              onConfirmClick: m,
              onCancelClick: g,
              renderFooter: E,
            },
          } = t,
          S = o.useCallback(() => {
            c(a);
          }, [c, a]),
          x = o.useCallback(
            (e) => {
              u.Z.updateNotificationStatus(a), null == d || d(e, a);
            },
            [a, d],
          ),
          I = o.useCallback(
            (e) => {
              null == p || p(e, a);
            },
            [p, a],
          ),
          Z = o.useCallback(
            (e) => {
              null == m || m(e, a);
            },
            [m, a],
          ),
          b = o.useCallback(
            (e) => {
              null == g || g(e, a);
            },
            [g, a],
          ),
          y = o.useCallback((e) => (null == E ? void 0 : E(e, a)), [E, a]),
          {
            props: {
              onNotificationShow: N,
              onDismissClick: O,
              renderFooter: T,
              onNotificationClick: A,
              onConfirmClick: L,
              onCancelClick: R,
              ...k
            },
            status: w,
          } = t,
          { ref: j, springs: M } = (0, f.X4)(t.id, l, s);
        return (0, i.jsx)(C, {
          transitionState: l,
          springs: M,
          index: n,
          locked: r,
          children: (0, i.jsx)(h.Z, {
            observe: 0 === n,
            className: v.clickZone,
            children: (0, i.jsx)(_, {
              ...k,
              containerRef: j,
              notificationId: t.id,
              onNotificationShow: 0 === n ? S : void 0,
              onDismissClick: x,
              onNotificationClick: null != p ? I : void 0,
              onConfirmClick: null != m ? Z : void 0,
              onCancelClick: null != g ? b : void 0,
              renderFooter: y,
              expand: !1,
              index: n,
              locked: r,
              status: w,
              contentOpacity: M.contentOpacity,
            }),
          }),
        });
      }
    },
    693091: function (e, t, n) {
      n.d(t, {
        AS: function () {
          return l;
        },
        S4: function () {
          return s;
        },
        X4: function () {
          return c;
        },
      }),
        n(47120);
      var i = n(192379),
        o = n(481060);
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
      class l {
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
            let o = this.listeners.get(i.notification.id);
            if (null == o) continue;
            let { offsetHeight: r } = o.element;
            (o.top !== t || o.height !== r || o.index !== n) && (e = !0),
              (o.top = t),
              (o.height = r),
              (o.index = n),
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
      let s = i.createContext(new l(!0));
      function a(e, t, n) {
        return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
      }
      let u = { mass: 0.8, friction: 25, tension: 320 };
      function c(e, t, n) {
        let [r, l] = (0, o.useSpring)(
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
          c = i.useRef(l),
          d = i.useContext(s),
          h = i.useMemo(() => {
            let t = !1;
            return (n) => {
              null == n
                ? d.unsubscribe(e)
                : d.subscribe(e, n, (e) => {
                    var n, i, o, r;
                    let {
                        locked: l,
                        matchHeight: s,
                        height: d,
                        top: h,
                        index: f,
                      } = e,
                      { current: p } = c;
                    let m = {
                      opacity:
                        ((n = f),
                        (i = l) && n > 4 ? 0 : i ? Math.min(1 - n / 4, 1) : 1),
                      scale: ((o = f), l ? Math.min(1 - o / 4, 1) : 1),
                      transform: a(f, l, h),
                      contentOpacity: ((r = f), l ? (r > 0 ? 0 : 1) : 1),
                      height: l ? s : d,
                    };
                    p({
                      from: t
                        ? void 0
                        : {
                            opacity: 0,
                            scale: 1.1,
                            transform: -((l ? s : d) * 1),
                            contentOpacity: 1,
                            height: l ? s : d,
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
            if (t === o.TransitionStates.YEETED) {
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
                    a(t.index, d.locked, t.top) + (d.locked ? 0 : t.height / 2),
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
        o = n(192379),
        r = n(442837),
        l = n(481060),
        s = n(237997),
        a = n(388627),
        u = n(561064),
        c = n(380736),
        d = n(693091),
        h = n(371467),
        f = n(981631),
        p = n(408052);
      let m = [];
      function v(e) {
        return e.notification.id;
      }
      function g(e, t, n, o) {
        let { index: r, notification: l, locked: s } = t;
        return (0, i.jsx)(
          c.Z,
          {
            index: r,
            notification: l,
            locked: s,
            transitionState: n,
            cleanUp: o,
          },
          e,
        );
      }
      function E(e) {
        return (0, i.jsx)("div", { className: p.container, children: e });
      }
      let _ = (e) => o.useState(() => new d.AS(e))[0];
      t.Z = o.memo(function (e) {
        let { locked: t } = e,
          n = (0, r.e7)(
            [s.Z, h.Z],
            () => {
              if (s.Z.getNotificationPositionMode() === f._vf.DISABLED)
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
            a.E6,
          ),
          c = _(t);
        return (
          o.useLayoutEffect(() => c.updateState(n, t)),
          o.useLayoutEffect(
            () => (c.initialize((0, u.i)()), () => c.cleanUp()),
            [c],
          ),
          (0, i.jsx)(d.S4.Provider, {
            value: c,
            children: (0, i.jsx)(l.TransitionGroup, {
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
        o,
        r,
        l,
        s,
        a,
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
        x = n(375954),
        I = n(292959),
        Z = n(158776),
        b = n(885110),
        y = n(246946),
        N = n(594174),
        O = n(974180),
        T = n(237997),
        A = n(70956),
        L = n(150097),
        R = n(129724),
        k = n(86071),
        w = n(388627),
        j = n(996050),
        M = n(609626),
        P = n(421824),
        D = n(647271),
        z = n(777036),
        U = n(90525),
        V = n(333727),
        F = n(585708),
        B = n(588909),
        W = n(987650),
        H = n(981631),
        G = n(388032);
      ((l = i || (i = {}))[(l.GENERIC = 0)] = "GENERIC"),
        (l[(l.TEXT = 1)] = "TEXT"),
        (l[(l.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        (l[(l.NUDGE = 3)] = "NUDGE"),
        ((s = o || (o = {}))[(s.NORMAL = 0)] = "NORMAL"),
        (s[(s.HIGH = 1)] = "HIGH"),
        (s[(s.URGENT = 2)] = "URGENT");
      let Y = 5 * A.Z.Millis.SECOND,
        K = 8 * A.Z.Millis.SECOND,
        X = 30 * A.Z.Millis.SECOND,
        Q = Object.freeze({
          timestamp: 0,
          priority: 0,
          duration: Y,
          expirationExternallyManaged: !1,
          type: 0,
        }),
        J = [],
        q = !1,
        $ = [];
      function ee() {
        if (q && null == J.find((e) => e.status === H._1z.FOCUSED))
          for (let e of ((q = !1),
          (J = [...J, ...$]),
          ($ = []),
          J.length > 40 && (J.length = 40),
          J))
            e.timer.start();
      }
      function et(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : H._1z.DISMISSED;
        if (null == e) return !1;
        let n = J.findIndex((t) => t.id === e);
        if (-1 === n) return !1;
        let i = J[n];
        if ((i.timer.stop(), (J = [...J]), t === H._1z.FOCUSED)) {
          let [e] = J.splice(n, 1);
          (e = { ...e, status: t }), J.unshift(e), (q = !0);
          return;
        }
        t === H._1z.DISMISSED ? J.splice(n, 1) : (J[n] = { ...i, status: t }),
          ee();
      }
      function en(e) {
        let t = J.length,
          n =
            (J = J.filter((t) => 1 !== t.type || t.channelId !== e || !1))
              .length !== t;
        return n && ee(), n;
      }
      function ei(e) {
        let t = J.find((t) => 2 === t.type && t.channelId === e);
        return null != t ? t.id : null;
      }
      function eo(e, t) {
        let n = { ...Q, timestamp: Date.now(), ...t },
          i = (0, f.Z)(),
          o = {
            id: i,
            status: H._1z.ACTIVE,
            timer: (function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = -1;
              return {
                start() {
                  let o =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : t,
                    r = o ? H._1z.TIMED_OUT : H._1z.DISMISSED;
                  -1 === i &&
                    (i = setTimeout(
                      () => v.Z.updateNotificationStatus(e, r),
                      null != n ? n : Y,
                    ));
                },
                stop() {
                  clearTimeout(i), (i = -1);
                },
              };
            })(i, n.expirationExternallyManaged, n.duration),
            props: e,
            ...n,
          },
          r = q ? $ : [...J],
          l = r.findIndex((e) => e.priority <= n.priority);
        if ((-1 === l ? r.push(o) : r.splice(l, 0, o), r.length > 40)) {
          let e = r.pop();
          !q && e.timer.stop();
        }
        return !q && ((J = r), o.timer.start()), i;
      }
      function er(e) {
        let { channelId: t, ringing: n } = e,
          i = ei(t);
        if (!n.includes(C.default.getId())) return et(i);
        if (null != i) return !1;
        let o = S.Z.getChannel(t);
        if (
          null == o ||
          !o.isPrivate() ||
          b.Z.getStatus() === H.Skl.DND ||
          _.QZ.getSetting()
        )
          return !1;
        let r = J.find(
          (e) =>
            1 === e.type && e.channelId === t && e.messageType === H.uaV.CALL,
        );
        null != r && et(r.id),
          eo((0, z.Z)(o), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: o.id,
          });
      }
      class el extends (r = p.ZP.Store) {
        initialize() {
          this.waitFor(S.Z, N.default);
        }
        getNotifications() {
          return J;
        }
      }
      (c = "OverlayNotificationsStore"),
        (u = "displayName") in (a = el)
          ? Object.defineProperty(a, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[u] = c);
      let es = new el(m.Z, {
        OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
          let { notificationId: t, status: n } = e;
          et(t, n);
        },
        OVERLAY_MOUNTED: function (e) {
          let { nudge: t } = e,
            n = (function (e) {
              switch (e.type) {
                case W.nc.GO_LIVE_VOICE:
                case W.nc.GO_LIVE_NON_VOICE:
                  return (0, D.Z)(e);
                case W.nc.NEWS:
                default:
                  return (0, B.Z)(e);
              }
            })(t);
          null != n && eo(n, { priority: 2, type: 3, duration: K });
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          if (t) {
            for (let e of J)
              e.status === H._1z.FOCUSED && et(e.id, H._1z.ACTIVE);
            return !0;
          }
          for (let e of J)
            3 === e.type
              ? et(e.id, H._1z.DISMISSED)
              : e.status === H._1z.ACTIVE &&
                !e.expirationExternallyManaged &&
                (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
          if (J.length > 0) {
            var n;
            return et(
              null ===
                (n = J.filter((e) => 1 === e.type).sort(
                  (e, t) => t.timestamp - e.timestamp,
                )[0]) || void 0 === n
                ? void 0
                : n.id,
              H._1z.FOCUSED,
            );
          }
        },
        MESSAGE_CREATE: function (e) {
          var t, n, i, o;
          let { channelId: r, message: l } = e,
            s = S.Z.getChannel(r),
            a = N.default.getUser(
              null === (t = l.author) || void 0 === t ? void 0 : t.id,
            );
          if (null == s || null == a) return !1;
          if (
            (null === (n = l.activity) || void 0 === n ? void 0 : n.type) ===
              H.mFx.JOIN ||
            (null === (i = l.activity) || void 0 === i ? void 0 : i.type) ===
              H.mFx.JOIN_REQUEST
          ) {
            if (!(0, L.eF)(l, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
              let i, o;
              if (
                (h()(null != t.activity, "received null message activity"),
                n.id === C.default.getId())
              )
                return !1;
              let r = (0, w.t6)();
              if (null == r) return !1;
              switch (t.activity.type) {
                case H.mFx.JOIN:
                  if (
                    null == (i = Z.Z.getApplicationActivity(n.id, r.id)) ||
                    null == i.party ||
                    i.party.id !== t.activity.party_id
                  )
                    return !1;
                  o = (0, j.Z)(e, t, n, r, i);
                  break;
                case H.mFx.JOIN_REQUEST:
                  if (
                    null == (i = b.Z.getApplicationActivity(r.id)) ||
                    null == i.party ||
                    i.party.id !== t.activity.party_id
                  )
                    return !1;
                  o = (0, V.Z)(e, n, r, i);
              }
              return (
                null != o &&
                (eo(o, {
                  priority: 2,
                  expirationExternallyManaged: !0,
                  channelId: e.id,
                  duration: X,
                }),
                !0)
              );
            })(s, l, a);
            if (!1 !== e) return e;
          }
          if (
            T.Z.getTextChatNotificationMode() === H.Ypu.DISABLED ||
            y.Z.disableNotifications ||
            !(0, L.eF)(l, r)
          )
            return !1;
          let u = !I.Z.isSoundDisabled(O.Ay),
            c =
              null !== (o = x.Z.getMessage(r, l.id)) && void 0 !== o
                ? o
                : (0, E.e5)(l);
          eo((0, F.Z)(s, c, a, u), {
            type: 1,
            channelId: s.id,
            expirationExternallyManaged: !0,
            messageType: l.type,
          }),
            !(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 3;
              J.filter((e) => 1 === e.type && e.status === H._1z.TIMED_OUT)
                .sort((e, t) => t.timestamp - e.timestamp)
                .forEach((t, n) => {
                  n >= e && et(t.id, H._1z.DISMISSED);
                });
            })();
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null != t && en(t);
        },
        MESSAGE_ACK: function (e) {
          let { channelId: t } = e;
          return en(t);
        },
        CALL_CREATE: er,
        CALL_UPDATE: er,
        CALL_DELETE: function (e) {
          let { channelId: t } = e;
          et(ei(t));
        },
        ACTIVITY_USER_ACTION: function (e) {
          let t,
            { actionType: n, user: i, applicationId: o } = e,
            r = (0, w.t6)();
          if (null == r || r.id !== o) return !1;
          if (n === H.mFx.JOIN) t = (0, M.Z)(i, r);
          if (null == t) return !1;
          eo(t, { priority: 2, type: 0 });
        },
        CLIPS_SAVE_CLIP_START: function () {
          eo((0, P.f)(G.intl.string(G.t.NBMK9v)));
        },
        CLIPS_SAVE_CLIP: function () {
          eo(
            (0, P.f)(
              G.intl.format(G.t.KLhk6u, {
                duration: (0, R.A)(g.Z.getSettings().clipsLength / 1e3, !0),
              }),
            ),
          );
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
          eo((0, P.f)(G.intl.string(G.t["1ZbZur"])));
        },
        STREAM_START: function (e) {
          let t = (0, P.y)();
          null != t && eo(t);
        },
        OVERLAY_CONTENT_INVENTORY_READY: function (e) {
          let { contentInventoryEntries: t } = e;
          if (0 === t.length) return;
          let n = (0, w.t6)();
          if (null == n) return;
          let { enabled: i } = k.Z.getCurrentConfig(
            { location: "OverlayNotificationsStore" },
            { autoTrackExposure: !0 },
          );
          i && eo((0, U.Z)(n, t), { priority: 2, type: 3, duration: K });
        },
      });
      t.Z = es;
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
        o = n(556296),
        r = n(237997),
        l = n(13140),
        s = n(145597),
        a = n(987650),
        u = n(981631);
      function c(e, t) {
        return {
          trackView() {
            i.Z.track(u.rMx.NOTIFICATION_VIEWED, t),
              i.Z.notificationEvent(e, a.bv.Viewed);
          },
          trackClick(n) {
            let o = r.Z.isLocked((0, s.QF)())
              ? u.Sbl.LOCKED_OVERLAY
              : u.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(u.rMx.NOTIFICATION_CLICKED, {
              ...t,
              location: o,
              action_type: n,
            }),
              i.Z.notificationEvent(e, a.bv.Clicked);
          },
        };
      }
      function d() {
        let e = o.Z.getOverlayKeybind();
        return null != e ? (0, l.BB)(e.shortcut, !0).split(" + ") : ["???"];
      }
    },
    996050: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(224706),
        o = n(13245),
        r = n(150097),
        l = n(620954),
        s = n(987650),
        a = n(388032);
      function u(e, t, n, u, c) {
        if (null == t.activity) return null;
        let d = t.activity.type,
          h = c.session_id;
        if (null == h) return null;
        let { icon: f, title: p, body: m } = (0, r.Xi)(e, t, n),
          { trackView: v, trackClick: g } = (0, l.R)(s.n0.ActivityInvite, {
            notif_type: s.n0.ActivityInvite,
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
          confirmText: a.intl.string(a.t.VJlc0d),
          onConfirmClick: (r, l) => {
            i.Z.join({
              userId: n.id,
              sessionId: h,
              applicationId: u.id,
              channelId: e.id,
              messageId: t.id,
            }),
              o.Z.updateNotificationStatus(l),
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
          return a;
        },
      });
      var i = n(768581),
        o = n(620954),
        r = n(987650),
        l = n(981631),
        s = n(388032);
      function a(e, t) {
        let n = e.username,
          a = s.intl.format(s.t["Yk+uYG"], { username: "" }),
          u = (0, i.ov)(e),
          c = s.intl.string(s.t.WRj1Wl),
          { trackView: d, trackClick: h } = (0, o.R)(r.n0.ActivityUserJoin, {
            notif_type: r.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: l.mFx.JOIN,
            activity_name: t.name,
          });
        return {
          icon: u,
          title: n,
          body: a,
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
      var o = n(481060),
        r = n(556296),
        l = n(13140),
        s = n(44359),
        a = n(620954),
        u = n(987650),
        c = n(981631),
        d = n(388032);
      function h() {
        let { trackView: e, trackClick: t } = (0, a.R)(
            u.n0.ClipsReminderNotification,
            { notif_type: u.n0.ClipsReminderNotification },
          ),
          n = r.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
        if (null == n) return null;
        let h = l.BB(n.shortcut, !0);
        return {
          title: d.intl.format(d.t.S5uhCA, {
            keybind: h,
            keybindHook: (e, t) =>
              (0, i.jsx)(s.Z, { keybind: h.split("+") }, t),
          }),
          icon: (0, i.jsx)(o.ClipsIcon, { size: "lg", color: "currentColor" }),
          onNotificationShow: () => {
            e();
          },
          onDismissClick: () => {
            t("dismiss");
          },
        };
      }
      function f(e) {
        let { trackView: t, trackClick: n } = (0, a.R)(u.n0.ClipsNotification, {
          notif_type: u.n0.ClipsNotification,
        });
        return {
          title: e,
          icon: (0, i.jsx)(o.ClipsIcon, { size: "lg", color: "currentColor" }),
          onNotificationShow: () => {
            t();
          },
          onDismissClick: () => {
            n("dismiss");
          },
        };
      }
    },
    647271: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(481060),
        r = n(13245),
        l = n(145597),
        s = n(620954),
        a = n(987650),
        u = n(981631),
        c = n(388032);
      function d(e) {
        switch (e.type) {
          case a.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: d } = e,
              { trackView: h, trackClick: f } = (0, s.R)(a.n0.GoLiveNudge, {
                notif_type: a.n0.GoLiveNudge,
              });
            return {
              icon: n(847881),
              title: null,
              body: c.intl.format(c.t.z9znpa, {
                game: t.name,
                server: d.toString(),
              }),
              confirmText: c.intl.string(c.t.U76Ft7),
              onNotificationShow: () => {
                h();
              },
              onConfirmClick: (e, t) => {
                f("unlock"),
                  r.Z.updateNotificationStatus(t),
                  r.Z.setInputLocked(!1, (0, l.QF)()),
                  (0, o.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      n.e("46746"),
                      n.e("3572"),
                    ]).then(n.bind(n, 60594));
                    return (t) =>
                      (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: d.id,
                        analyticsLocation: u.Sbl.OVERLAY_NUDGE,
                      });
                  });
              },
              onDismissClick: () => {
                f("dismiss");
              },
            };
          }
          case a.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
              { trackView: d, trackClick: h } = (0, s.R)(
                a.n0.GoLiveNonVoiceNudge,
                { notif_type: a.n0.GoLiveNonVoiceNudge },
              );
            return {
              icon: n(847881),
              title: null,
              body: c.intl.format(c.t["0SVWgI"], { game: t.name }),
              confirmText: c.intl.string(c.t.U76Ft7),
              onNotificationShow: () => {
                d();
              },
              onConfirmClick: (e, t) => {
                h("unlock"),
                  r.Z.updateNotificationStatus(t),
                  r.Z.setInputLocked(!1, (0, l.QF)()),
                  (0, o.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      n.e("46746"),
                      n.e("3572"),
                    ]).then(n.bind(n, 60594));
                    return (t) =>
                      (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        selectGuild: !0,
                        analyticsLocation: u.Sbl.OVERLAY_NUDGE,
                      });
                  });
              },
              onDismissClick: () => {
                h("dismiss");
              },
            };
          }
        }
      }
    },
    777036: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(26151),
        o = n(13245),
        r = n(43267),
        l = n(933557),
        s = n(699516),
        a = n(594174),
        u = n(620954),
        c = n(987650),
        d = n(981631),
        h = n(388032);
      function f(e) {
        let t = (0, l.F6)(e, a.default, s.Z),
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
          onConfirmClick: () => {
            o.Z.callPrivateChannel(e.id),
              m("join"),
              o.Z.track(d.rMx.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: null,
                channel_id: e.id,
                video_enabled: !1,
              });
          },
          onCancelClick: () => {
            i.Z.stopRinging(e.id), m("decline");
          },
          onDismissClick: () => {
            m("dismiss");
          },
        };
      }
    },
    90525: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(512722),
        r = n.n(o),
        l = n(13245),
        s = n(835473),
        a = n(442550),
        u = n(998502),
        c = n(603618),
        d = n(620954),
        h = n(987650),
        f = n(981631),
        p = n(701488),
        m = n(388032),
        v = n(810257);
      function g(e) {
        let { game: t } = e,
          n = (0, s.q)(t.id);
        return null == n
          ? null
          : (0, i.jsx)(a.f, { src: n.getIconURL(p.Si.LARGE), size: 40 });
      }
      function E(e, t) {
        let { trackView: n, trackClick: o } = (0, d.R)(
          h.n0.SendGameInvitesNotification,
          { notif_type: h.n0.SendGameInvitesNotification },
        );
        return (
          r()(t.length > 0, "Some entries must be present"),
          {
            icon: (0, i.jsx)(g, { game: e }),
            title: e.name,
            body: m.intl.string(m.t.y9eo7e),
            renderFooter: () =>
              (0, i.jsx)("div", {
                className: v.container,
                children: (0, i.jsx)(c.i, { entries: t }),
              }),
            onNotificationShow: () => {
              n(),
                l.Z.track(f.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                  user_ids: t.map((e) => e.author_id),
                  entry_ids: t.map((e) => e.id),
                });
            },
            onNotificationClick: (e, t) => {
              o("unlock"), u.ZP.focus(null, !0);
            },
            onDismissClick: () => {
              o("dismiss");
            },
          }
        );
      }
    },
    333727: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(278323),
        o = n(13245),
        r = n(45114),
        l = n(237997),
        s = n(145597),
        a = n(620954),
        u = n(987650),
        c = n(981631),
        d = n(388032);
      function h(e, t, n, h) {
        let f = t.username,
          p = d.intl.format(d.t.VDODnp, { username: "", game: n.name }),
          m = t.getAvatarURL(e.guild_id, 80),
          { trackView: v, trackClick: g } = (0, a.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: n.name,
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
              location: l.Z.isLocked((0, s.QF)())
                ? c.Sbl.LOCKED_OVERLAY
                : c.Sbl.UNLOCKED_OVERLAY,
            }),
              g("join"),
              o.Z.updateNotificationStatus(n);
          },
          onCancelClick: (t, n) => {
            (0, r.In)(e.id, !0, !0),
              o.Z.updateNotificationStatus(n),
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
          return g;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(937889),
        r = n(703656),
        l = n(974180),
        s = n(150097),
        a = n(358085),
        u = n(557177),
        c = n(998502),
        d = n(516542),
        h = n(380736),
        f = n(620954),
        p = n(987650),
        m = n(981631),
        v = n(388032);
      function g(e, t, n, g) {
        var E;
        let { icon: _, title: C, body: S } = (0, s.Xi)(e, t, n),
          { trackView: x, trackClick: I } = (0, f.R)(p.n0.TextChat, {
            notif_type: p.n0.TextChat,
            notif_user_id:
              null === (E = t.author) || void 0 === E ? void 0 : E.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          icon: _,
          title: C,
          body:
            t.content.length > 0
              ? (0, o.ZP)(t, {
                  noStyleAndInteraction: !0,
                  formatInline: !0,
                  hideSimpleEmbedContent: !1,
                }).content
              : S,
          hint: (e) => (e ? null : (0, h.Q)((0, f.P)(), v.t.tHtcCg)),
          maxBodyLines: 2,
          renderFooter: (t, n) =>
            t
              ? (0, i.jsx)(d.Z, { id: n, channel: e, onSend: () => I("send") })
              : null,
          onNotificationShow: () => {
            g && (0, u.GN)(l.Ay, l.yk), x();
          },
          onNotificationClick: () => {
            (0, r.uL)(m.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
              I("jump"),
              a.isPlatformEmbedded ? c.ZP.focus() : window.focus();
          },
          onDismissClick: () => {
            I("dismiss");
          },
        };
      }
    },
    588909: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(13245),
        r = n(145597),
        l = n(380736),
        s = n(620954),
        a = n(987650),
        u = n(388032),
        c = n(213973);
      let d = () => ({
          icon: n(328756),
          title: u.intl.string(u.t.pkXAeH),
          body: null,
          hint: h,
          notifType: a.n0.WelcomeNudge,
        }),
        h = () => (0, l.Q)((0, s.P)(), u.t["z8/sgI"]);
      function f(e) {
        let { type: t } = e,
          {
            icon: n,
            title: l,
            body: u,
            hint: h,
            notifType: f,
          } = (function (e, t) {
            if (t.type === a.nc.NEWS) {
              var n, i, o, r, l, s, u, c;
              return {
                icon:
                  null !==
                    (l =
                      null === (n = t.news) || void 0 === n
                        ? void 0
                        : n.icon) && void 0 !== l
                    ? l
                    : e.icon,
                title:
                  null !==
                    (s =
                      null === (i = t.news) || void 0 === i
                        ? void 0
                        : i.title) && void 0 !== s
                    ? s
                    : e.title,
                body:
                  null !==
                    (u =
                      null === (o = t.news) || void 0 === o
                        ? void 0
                        : o.body) && void 0 !== u
                    ? u
                    : e.body,
                hint:
                  null !==
                    (c =
                      null === (r = t.news) || void 0 === r
                        ? void 0
                        : r.hint) && void 0 !== c
                    ? c
                    : e.hint,
                notifType: null != t.news ? a.n0.NewsNudge : e.notifType,
              };
            }
            return e;
          })(d(), e),
          { trackView: p, trackClick: m } = (0, s.R)(f, { notif_type: f });
        return {
          icon:
            null != n
              ? (0, i.jsx)("img", { src: n, className: c.icon, alt: "" })
              : null,
          title: l,
          body: u,
          hint: h,
          onNotificationShow: () => {
            p();
          },
          onNotificationClick: (e, n) => {
            m("unlock"),
              t === a.nc.NEWS && o.Z.updateNotificationStatus(n),
              o.Z.setInputLocked(!1, (0, r.QF)());
          },
          onDismissClick: () => {
            m("dismiss");
          },
        };
      }
    },
    561064: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
        i: function () {
          return l;
        },
      });
      var i = n(442837),
        o = n(928518),
        r = n(501787);
      function l() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.Z;
        return null !== (e = t.getWindow(r.$J)) && void 0 !== e ? e : window;
      }
      function s() {
        return (0, i.e7)([o.Z], () => l(o.Z));
      }
    },
    931651: function (e, t, n) {
      n.d(t, {
        $: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(907040),
        r = n(185923);
      function l(e) {
        let {
          channel: t,
          closePopout: n,
          analyticsOverride: l,
          onSelectEmoji: s,
          messageId: a,
        } = e;
        return (0, i.jsx)(o.Z, {
          closePopout: n,
          channel: t,
          onSelectEmoji: s,
          pickerIntention: r.Hz.REACTION,
          analyticsOverride: l,
          messageId: a,
        });
      }
    },
    905423: function (e, t, n) {
      var i = n(512969),
        o = n(905837),
        r = n(731965),
        l = n(893607),
        s = n(981631);
      function a(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: s.Z5c.CHANNEL(
            l.Hw.guildId(),
            l.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === s.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.LX)(null != e ? e : "", {
          path: s.Z5c.GUILD_BOOSTING_MARKETING(l.Hw.guildId()),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      t.Z = (0, o.ZP)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = a(t);
          (0, r.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = a(t);
          (0, r.j)(() =>
            e({ path: null, guildId: n, channelId: i, basePath: t }),
          );
        },
      }));
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return r;
        },
        S: function () {
          return o;
        },
      });
      let i = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function o(e) {
        let { location: t } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function r(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    651941: function (e, t, n) {
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
      var i,
        o = n(442837),
        r = n(253135),
        l = n(570140),
        s = n(709054);
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
      let u = {};
      class c extends (i = o.ZP.PersistedStore) {
        initialize(e) {
          var t;
          u =
            null !== (t = null == e ? void 0 : e.users) && void 0 !== t
              ? t
              : {};
        }
        getState() {
          return { users: u };
        }
        getKeyTrustedAt(e, t) {
          var n;
          let i = (0, r.MK)(t);
          return null === (n = u[e]) || void 0 === n ? void 0 : n[i];
        }
        isKeyVerified(e, t) {
          return null != this.getKeyTrustedAt(e, t);
        }
        getUserIds() {
          return s.default.keys(u);
        }
        getUserVerifiedKeys(e) {
          return u[e];
        }
      }
      a(c, "displayName", "VerifiedKeyStore"),
        a(c, "persistKey", "VerifiedKeyStore"),
        (t.Z = new c(l.Z, {
          SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              i = (function (e) {
                var t;
                let n = null !== (t = u[e]) && void 0 !== t ? t : {};
                return (u[e] = n), n;
              })(t),
              o = new Uint8Array(n);
            i[(0, r.MK)(o)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              i = u[t];
            if (null == i) return !1;
            let o = delete i[n],
              r = !1;
            return (
              0 === Object.keys(i).length && (delete u[t], (r = !0)), o || r
            );
          },
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != u[t] && delete u[t];
          },
        }));
    },
    424678: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        r = n(481060);
      function l(e, t, n) {
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
      class s extends o.PureComponent {
        render() {
          let { text: e, lastItem: t, className: n } = this.props;
          return (0, i.jsxs)("span", {
            children: [
              (0, i.jsx)(r.Anchor, {
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
            l(this, "handleClick", () => {
              let { onClick: e, index: t } = this.props;
              null == e || e(t);
            });
        }
      }
      class a extends o.PureComponent {
        render() {
          let e = this.props.artists.split(";");
          if (!this.props.canOpen) return e.join(", ");
          let t = e.length - 1;
          return e.map((e, n) =>
            (0, i.jsx)(
              s,
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
            l(this, "handleOpenSpotifyArtist", (e) => {
              let { onOpenSpotifyArtist: t } = this.props;
              null == t || t(e);
            });
        }
      }
    },
    879815: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(442837),
        o = n(314897),
        r = n(131951),
        l = n(979651);
      function s(e) {
        return (0, i.cj)(
          [l.Z, r.Z, o.default],
          () =>
            (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : l.Z,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : r.Z,
                s =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : o.default,
                a =
                  null != e ? n.getVoiceState(e.getGuildId(), s.getId()) : null;
              return {
                selfDeaf: i.isSelfDeaf(),
                deaf:
                  null !== (t = null == a ? void 0 : a.deaf) &&
                  void 0 !== t &&
                  t,
              };
            })(e, l.Z, r.Z, o.default),
          [e],
        );
      }
    },
    892807: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(200651),
        o = n(192379),
        r = n(442837),
        l = n(481060),
        s = n(410575),
        a = n(471445),
        u = n(19780),
        c = n(981631),
        d = n(388032),
        h = n(549584);
      function f(e) {
        let {
            recentVoiceChannels: t,
            currentVoiceChannel: n,
            onClose: f,
            onSelect: p,
          } = e,
          m = o.useCallback(
            (e) => {
              p(e), f();
            },
            [p, f],
          ),
          v = (0, r.e7)([u.Z], () => u.Z.getQuality()),
          g = {
            [c.IE4.FINE]: l.ConnectionFineIcon,
            [c.IE4.AVERAGE]: l.ConnectionAverageIcon,
            [c.IE4.BAD]: l.ConnectionBadIcon,
            [c.IE4.UNKNOWN]: l.ConnectionUnknownIcon,
          }[v];
        return (0, i.jsx)(s.Z, {
          section: c.jXE.CONTEXT_MENU,
          children: (0, i.jsx)(l.Menu, {
            onSelect: f,
            navId: "manage-streams",
            onClose: f,
            "aria-label": d.intl.string(d.t["+9QSnp"]),
            children: (0, i.jsx)(l.MenuGroup, {
              children: t.map((e) => {
                let t = (0, a.KS)(e),
                  o = e.id === (null == n ? void 0 : n.id);
                return (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: e.id,
                    label: (0, i.jsxs)(l.Text, {
                      variant: "text-sm/semibold",
                      className: h.label,
                      color: o ? "text-positive" : "text-normal",
                      children: [
                        null != t
                          ? (0, i.jsx)(t, { color: "currentColor", size: "xs" })
                          : void 0,
                        e.name,
                      ],
                    }),
                    icon: o ? g : void 0,
                    action: () => m(e),
                  },
                  e.id,
                );
              }),
            }),
          }),
        });
      }
    },
    850840: function (e, t, n) {
      let i;
      n(653041);
      var o,
        r = n(442837),
        l = n(570140);
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
      let a = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class u extends (o = r.ZP.PersistedStore) {
        initialize(e) {
          i = null != e ? e : a;
        }
        getState() {
          return i;
        }
        get hasAcceptedStoreTerms() {
          return i.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return i.hasAcceptedEulaIds.includes(e);
        }
      }
      s(u, "displayName", "ApplicationStoreUserSettingsStore"),
        s(u, "persistKey", "ApplicationStoreUserSettingsStore"),
        s(u, "migrations", [
          (e) =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]),
        (t.Z = new u(l.Z, {
          APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            i.hasAcceptedStoreTerms = !0;
          },
          APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (i.hasAcceptedEulaIds.includes(t)) return !1;
            i.hasAcceptedEulaIds.push(t);
          },
        }));
    },
    129724: function (e, t, n) {
      n.d(t, {
        A: function () {
          return l;
        },
      });
      var i = n(913527),
        o = n.n(i),
        r = n(388032);
      function l(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.intl.string(r.t["Yl1D8/"]),
          i = o().duration(e, "seconds");
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
    621839: function (e, t, n) {
      e.exports = {
        closeButton: "closeButton_e3c9f3",
        description: "description_e3c9f3",
        conflictButton: "conflictButton_e3c9f3",
        linkButtonSize: "linkButtonSize_e3c9f3",
        linkButton: "linkButton_e3c9f3",
        retryButton: "retryButton_e3c9f3",
        conflictButtonInner: "conflictButtonInner_e3c9f3",
        buttonBody: "buttonBody_e3c9f3",
        timestamp: "timestamp_e3c9f3",
        choiceWrapper: "choiceWrapper_e3c9f3",
        choiceLine: "choiceLine_e3c9f3",
        choiceTitle: "choiceTitle_e3c9f3 title_e3c9f3",
        conflictTitle: "conflictTitle_e3c9f3 title_e3c9f3",
        conflictUploadArt:
          "conflictUploadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        conflictDownloadArt:
          "conflictDownloadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        errorArt: "errorArt_e3c9f3 art_e3c9f3",
        modal: "modal_e3c9f3",
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
    240209: function (e, t, n) {
      e.exports = {
        notificationBody: "notificationBody_a13960",
        iconContainer: "iconContainer_a13960",
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
        inviteButtonInner: "inviteButtonInner_e2d331",
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
    253653: function (e, t, n) {
      e.exports = {
        videoList: "videoList_a6fa57",
        vertical: "vertical_a6fa57",
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
      e.exports = { extrasContainer: "extrasContainer_b932b3" };
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
    810257: function (e, t, n) {
      e.exports = { container: "container_d8013f" };
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
    549584: function (e, t, n) {
      e.exports = { label: "label_eaa344" };
    },
  },
]);
//# sourceMappingURL=36d2d413d9ddb2507ddf.js.map
