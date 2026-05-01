"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96777"],
  {
    265422(t, e, n) {
      n.d(e, { a: () => c, i: () => o });
      var s = n(192308),
        i = n(367513),
        l = n(951001),
        a = n(366811),
        r = n(652215);
      function o(t, e) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, s.hasAnyModalOpen)() ||
          (n && l.A.channelListScrollTo(t, e),
          o && null != e && i.A.updateChatOpen(e, !0),
          a.A.getState().updatePath(r.BVt.CHANNEL(t, e)));
      }
      function c(t) {
        (0, s.hasAnyModalOpen)() || a.A.getState().updatePath(t);
      }
    },
    697627(t, e, n) {
      n.d(e, { A: () => u, e: () => o });
      var s,
        i = n(17928),
        l = n(228366);
      let a = new Map(),
        r = new Map();
      var o =
        (((s = {})[(s.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (s[(s.FETCHING = 1)] = "FETCHING"),
        (s[(s.FETCHED = 2)] = "FETCHED"),
        s);
      class c extends i.Ay.Store {
        static displayName = "CreatorMonetizationStore";
        getPriceTiersFetchStateForGuildAndType(t, e) {
          return r.get(t)?.get(e) ?? 0;
        }
        getPriceTiersForGuildAndType(t, e) {
          return a.get(t)?.get(e);
        }
      }
      let u = new c(l.h, {
        CONNECTION_OPEN: function () {
          a.clear(), r.clear();
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (t) {
          let { guildId: e, priceTierType: n } = t;
          r.has(e) || r.set(e, new Map()), r.get(e).set(n, 1);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (t) {
          let { guildId: e, priceTierType: n, priceTiers: s } = t;
          r.has(e) || r.set(e, new Map()),
            r.get(e).set(n, 2),
            a.has(e) || a.set(e, new Map()),
            a.get(e).set(n, s);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (t) {
          let { guildId: e, priceTierType: n } = t;
          r.has(e) || r.set(e, new Map()), r.get(e).set(n, 2);
        },
      });
    },
    752755(t, e, n) {
      n.d(e, { A: () => u, e: () => a });
      var s,
        i = n(17928),
        l = n(228366),
        a =
          (((s = {})[(s.NOT_FETCHED = 0)] = "NOT_FETCHED"),
          (s[(s.FETCHING = 1)] = "FETCHING"),
          (s[(s.FETCHED = 2)] = "FETCHED"),
          (s[(s.FAILED = 3)] = "FAILED"),
          s);
      let r = {},
        o = {};
      class c extends i.Ay.Store {
        static displayName = "MediaPostEmbedStore";
        getMediaPostEmbed(t) {
          if (null != t) return r[t];
        }
        getEmbedFetchState(t) {
          return o[t] ?? 0;
        }
        getMediaPostEmbeds() {
          return r;
        }
      }
      let u = new c(l.h, {
        CONNECTION_OPEN: function () {
          (r = {}), (o = {});
        },
        MEDIA_POST_EMBED_FETCH: function (t) {
          let { threadId: e } = t;
          o[e] = 1;
        },
        MEDIA_POST_EMBED_FETCH_SUCCESS: function (t) {
          let { threadId: e, mediaPostEmbed: n } = t;
          (r = { ...r, [e]: n }), (o[e] = 2);
        },
        MEDIA_POST_EMBED_FETCH_FAILURE: function (t) {
          let { threadId: e } = t;
          o[e] = 3;
        },
        LOGOUT: function (t) {
          t.isSwitchingAccount || ((r = {}), (o = {}));
        },
      });
    },
    336787(t, e, n) {
      n.d(e, { A: () => f }), n(321073);
      var s = n(627968),
        i = n(64700),
        l = n(735438),
        a = n.n(l),
        r = n(990078),
        o = n(97808),
        c = n(778712),
        u = n(793574),
        d = n(342296),
        C = n(953727);
      function h(t) {
        let {
          width: e = 24,
          height: n = 24,
          color: i = "currentColor",
          ...l
        } = t;
        return (0, s.jsxs)("svg", {
          ...(0, C.A)(l),
          width: e,
          height: n,
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: i,
              d: "M12 14C7.289 14 4 16.467 4 20V22H20V20C20 16.467 16.711 14 12 14ZM11 19C10.447 19 10 18.553 10 18C10 17.447 10.447 17 11 17C11.553 17 12 17.447 12 18C12 18.553 11.553 19 11 19ZM14 19C13.447 19 13 18.553 13 18C13 17.447 13.447 17 14 17C14.553 17 15 17.447 15 18C15 18.553 14.553 19 14 19Z",
            }),
            (0, s.jsx)("path", {
              fill: i,
              d: "M18 6H17.91C17.432 3.167 14.967 1 12 1C9.033 1 6.568 3.167 6.09 6H6C4.896 6 4 6.896 4 8V9C4 10.104 4.896 11 6 11C6 12.102 6.897 13 8 13H16C17.104 13 18 12.102 18 11C19.104 11 20 10.104 20 9V8C20 6.896 19.104 6 18 6ZM16 10H8V6H16V10Z",
            }),
          ],
        });
      }
      var A = n(403362),
        T = n(562153),
        E = n(656318);
      let g = (t) => {
          let { member: e, empty: n, guildId: l } = t,
            a = i.useRef(null);
          return n
            ? (0, s.jsx)("div", { className: E._b })
            : null == e
              ? (0, s.jsx)("div", {
                  className: E.j7,
                  children: (0, s.jsx)(h, { className: E.s$ }),
                })
              : (0, s.jsx)("div", {
                  className: E.sR,
                  children: (0, s.jsx)(d.A, {
                    targetElementRef: a,
                    userId: e.id,
                    guildId: l,
                    newAnalyticsLocations: [u.A.AVATAR],
                    position: "left",
                    clickTrap: !0,
                    children: (t) =>
                      (0, s.jsx)(r.m, {
                        text: T.Ay.getName(l, void 0, e),
                        children: (0, s.jsx)(o.eu, {
                          ...t,
                          ref: a,
                          src: e.getAvatarURL(l, 24),
                          "aria-label": e.username,
                          size: c._3.SIZE_24,
                          className: E.pO,
                        }),
                      }),
                  }),
                });
        },
        f = (t) => {
          let {
              partySize: e,
              members: n,
              minAvatarsShown: i = 1,
              maxAvatarsShown: l = 2,
              guildId: r,
              overflowRef: o,
            } = t,
            { unknownSize: c, totalSize: u, knownSize: d } = e;
          if (u < i) return null;
          let C = a()(n)
            .filter(A.Vq)
            .take(l)
            .map((t) => (0, s.jsx)(g, { member: t, guildId: r }, t.id))
            .value();
          for (let t = 0; t < c && C.length < l; t++)
            C.push((0, s.jsx)(g, { guildId: r }, `unknown-member-${t}`));
          let h = u - d - c;
          for (let t = 0; t < h && C.length < l; t++)
            C.push(
              (0, s.jsx)(g, { empty: !0, guildId: r }, `empty-member-${t}`),
            );
          let T = Math.max(Math.min(u - C.length, 99), 0);
          if (1 === T) {
            let t = n[l];
            C.push((0, s.jsx)(g, { member: t, guildId: r }, t.id));
          }
          return (0, s.jsx)("div", {
            className: E.iE,
            children: (0, s.jsxs)("div", {
              className: E.S3,
              children: [
                C,
                T > 1
                  ? (0, s.jsxs)("div", {
                      className: E.Hi,
                      ref: o,
                      children: ["+", T],
                    })
                  : null,
              ],
            }),
          });
        };
    },
    499454(t, e, n) {
      n.d(e, { h: () => C });
      var s = n(627968);
      n(64700);
      var i = n(192308),
        l = n(287809),
        a = n(166403),
        r = n(625494),
        o = n(927578),
        c = n(598653),
        u = n(788868),
        d = n(652215);
      function C(t) {
        let {
            processedCode: e,
            channelContext: C,
            customGiftMessage: h,
            giftInfo: A,
          } = t,
          T = !1,
          E = null,
          g = l.default.getCurrentUser(),
          f = (0, o.CC)(g?.premiumType, u.PremiumTypes.TIER_0);
        (0, i.openModalLazy)(
          async () => {
            let { default: t } = await Promise.all([
              n.e("80848"),
              n.e("73646"),
              n.e("35429"),
              n.e("10471"),
              n.e("23808"),
              n.e("63645"),
              n.e("834"),
              n.e("25279"),
              n.e("99518"),
              n.e("11133"),
              n.e("7200"),
            ]).then(n.bind(n, 361845));
            return (n) =>
              (0, s.jsx)(t, {
                code: e,
                channelContext: C,
                customGiftMessage: h,
                emojiName: A?.emoji?.name,
                soundId: A?.sound?.id,
                onComplete: (t, e) => {
                  (E = t),
                    e &&
                      ((T = e),
                      t.isSubscription &&
                        null == a.A.getPremiumSubscription(!1) &&
                        (0, c.o)(!0));
                },
                ...n,
              });
          },
          {
            onCloseCallback: () => {
              T &&
                null != E &&
                !f &&
                E.isSubscription &&
                E?.subscriptionPlan?.premiumSubscriptionType ===
                  u.PremiumTypes.TIER_2 &&
                r._.dispatch(d.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
          },
        );
      }
    },
    57718(t, e, n) {
      n.d(e, { Ay: () => g, C8: () => E });
      var s,
        i = n(627968);
      n(64700);
      var l = n(503698),
        a = n.n(l),
        r = n(925747),
        o = n(661531),
        c = n(462887),
        u = n(401432),
        d = n(890687),
        C = n(859387),
        h = n(241124),
        A = n(652215),
        T = n(880005),
        E =
          (((s = {})[(s.SMALL = 2)] = "SMALL"),
          (s[(s.MEDIUM = 8)] = "MEDIUM"),
          s);
      let g = function (t) {
        let {
            className: e,
            logotypeClassName: n,
            gameTileSize: s = 24,
            quest: l,
            separatorSpacing: E = 2,
            theme: g = A.NJ8.DARK,
            withCosponsor: f = !0,
            withGameTile: x = !0,
            logotypeStyle: m,
            onLoadComplete: I,
          } = t,
          p = (0, c.M)(g) ? A.NJ8.DARK : A.NJ8.LIGHT,
          v = (0, d.a5)(l.id, p),
          _ = f && null != l.config.cosponsorMetadata && null != v;
        return (0, i.jsxs)("div", {
          className: a()(T.Iu, e),
          children: [
            x &&
              (0, i.jsx)(h.Sn, {
                id: "QuestPartnerBranding_gameTile",
                children: (t) =>
                  (0, i.jsx)("img", {
                    ref: t,
                    className: T._Y,
                    alt: "",
                    src: (0, C.tW)(l, C.fY.GAME_TILE, p).url,
                    style: {
                      borderRadius: (function (t) {
                        switch (t) {
                          case 24:
                            return 3;
                          case 32:
                            return 4;
                        }
                      })(s),
                      width: s,
                      height: s,
                    },
                    onLoad: I,
                  }),
              }),
            (0, i.jsx)(h.Sn, {
              id: "QuestPartnerBranding_gameLogotype",
              children: (t) =>
                (0, i.jsx)(r.animated.img, {
                  ref: t,
                  className: a()(T.lW, n, { [T.TO]: _ }),
                  style: m,
                  alt: l.config.messages.gameTitle,
                  src: (0, C.tW)(l, C.fY.LOGO_TYPE, p).url,
                  onLoad: I,
                }),
            }),
            _ &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    className: T.ub,
                    style: { margin: `0 ${E}px` },
                    children: (0, i.jsx)(u.a, {
                      className: T.JB,
                      color: o.A.colors.WHITE,
                    }),
                  }),
                  (0, i.jsx)(h.Sn, {
                    id: "QuestPartnerBranding_cosponsorLogotype",
                    children: (t) =>
                      (0, i.jsx)(r.animated.img, {
                        ref: t,
                        className: a()(T.lW, T.TO, n),
                        style: m,
                        alt: l.config.cosponsorMetadata?.name ?? "",
                        src: v.url,
                        onLoad: I,
                      }),
                  }),
                ],
              }),
          ],
        });
      };
    },
    424151(t, e, n) {
      n.d(e, { A: () => o });
      var s = n(627968),
        i = n(821609),
        l = n(801365),
        a = n(201805),
        r = n(985018);
      let o = function (t) {
        let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: c,
            analyticsCtxQuestContentRowIndex: u,
            size: d,
          } = t,
          C = (0, a.ix)({
            quest: e,
            questContent: n,
            questContentPosition: c,
            questContentRowIndex: u,
            sourceQuestContent: o,
          }),
          h = (0, l.r7)(e.config)
            ? r.intl.string(r.t.bAGFz3)
            : r.intl.string(r.t.vTgCWx);
        return (0, s.jsx)(i.$, {
          variant: "primary",
          fullWidth: !0,
          size: d,
          onClick: C,
          text: h,
        });
      };
    },
    941775(t, e, n) {
      n.d(e, { A: () => c });
      var s = n(627968),
        i = n(17928),
        l = n(821609),
        a = n(859703),
        r = n(201805),
        o = n(985018);
      let c = function (t) {
        let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: c,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: d,
            size: C,
          } = t,
          h = e.id,
          { isClaiming: A } = (0, i.cf)(
            [a.A],
            () => ({
              isClaiming:
                a.A.isClaimingReward(h) || a.A.isFetchingRewardCode(h),
            }),
            [h],
          ),
          T = (0, r.ix)({
            quest: e,
            questContent: n,
            questContentPosition: u,
            questContentRowIndex: d,
            sourceQuestContent: c,
          });
        return (0, s.jsx)(l.$, {
          variant: "primary",
          fullWidth: !0,
          size: C,
          loading: A,
          onClick: T,
          text: o.intl.string(o.t.cfY4PE),
        });
      };
    },
    48136(t, e, n) {
      n.d(e, { A: () => O });
      var s = n(627968),
        i = n(792620),
        l = n(412703),
        a = n(821609),
        r = n(890687),
        o = n(590202),
        c = n(814793),
        u = n(753386),
        d = n(545986),
        C = n(654487),
        h = n(985018);
      let A = function (t) {
        let {
            quest: e,
            taskType: n,
            analyticsCtxQuestContent: A,
            analyticsCtxSourceQuestContent: T,
            size: E,
          } = t,
          g = (0, r.fc)(e),
          f = (function (t, e, n, s) {
            let { launchInGameActivity: l } = (0, r.zW)(t);
            return (0, i.K$)(t)
              ? () => {
                  (0, d.Fy)(t);
                }
              : (0, i.IO)(t)
                ? () => {
                    (0, d.d5)({
                      quest: t,
                      questContent: e,
                      sourceQuestContent: n,
                      sourceQuestContentCTA: s,
                    });
                  }
                : (0, c.vA)(t)
                  ? () => {
                      l();
                    }
                  : null;
          })(
            e,
            A,
            T,
            l.o.VIDEO.has(n)
              ? o.Cy.WATCH_VIDEO
              : (0, c.vA)(e)
                ? o.Cy.START_QUEST
                : o.Cy.ACCEPT_QUEST,
          ),
          x = (0, d.Oz)(e),
          m = (function (t, e) {
            if ((0, i.K$)(t)) return h.intl.string(h.t.IsH2Sp);
            if ((0, i.IO)(t)) return (0, u.WM)(e);
            if ((0, c.vA)(t))
              return (0, i.Ov)(t)
                ? h.intl.string(h.t.CkUzLd)
                : (0, i.vl)(t)
                  ? t.config.features.includes(C.Li.CLOUD_GAMING_ACTIVITY)
                    ? h.intl.string(h.t["+qoymD"])
                    : h.intl.string(h.t.E4kW5O)
                  : h.intl.string(h.t.l7E81v);
            return h.intl.string(h.t["9KoPyB"]);
          })(e, g);
        return null == f
          ? (0, s.jsx)(a.$, {
              size: E,
              variant: "secondary",
              disabled: !0,
              text: m,
              fullWidth: !0,
            })
          : (0, s.jsx)(a.$, {
              size: E,
              variant: "primary",
              onClick: f,
              text: m,
              icon: x,
              fullWidth: !0,
            });
      };
      var T = n(17928),
        E = n(862482),
        g = n(775602),
        f = n(178540),
        x = n(507107),
        m = n(18437),
        I = n(971649),
        p = n(901406),
        v = n(201805),
        _ = n(79545),
        N = n(263752);
      function w(t) {
        let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: a,
          } = t,
          c = (0, m.Ut)(),
          u = (0, T.bG)([g.A], () => g.A.useReducedMotion),
          d = (0, v.Xf)({ useReducedMotion: u }),
          C = (0, f.O)((t) => t.setErrorHints),
          { startingConsoleQuest: A, startConsoleQuest: x } = (0, r.Wj)({
            questId: e.id,
            beforeRequest: () => {
              d.startAnimation(),
                c({
                  questId: e.id,
                  questContent: n,
                  questContentCTA: o.Cy.DEFIBRILLATOR,
                  questContentPosition: l,
                  questContentRowIndex: a,
                  sourceQuestContent: i,
                });
            },
            afterRequest: (t) => {
              d.stopAnimation(), C(e.id, t);
            },
          });
        return (0, s.jsx)(E.$n, {
          "data-migration-pending": !0,
          color: E.XD.PRIMARY,
          onClick: x,
          disabled: A,
          className: N.x,
          children: (0, s.jsxs)("div", {
            className: N.t,
            children: [d.render(), h.intl.string(h.t.nPThNb)],
          }),
        });
      }
      function y(t) {
        let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: i,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: c,
            analyticsCtxQuestContentRowIndex: u,
            size: d,
          } = t,
          C = (0, r.RR)({ quest: e }),
          A = (0, I.vU)()?.getId(),
          T = (0, r.Vn)(e),
          E = (0, r.fc)(e),
          [g, f, m] = (0, r.Qo)(e, E);
        return T || g === x.X0.DESKTOP
          ? (0, s.jsx)(a.$, {
              variant: "secondary",
              size: d,
              disabled: !0,
              text: h.intl.string(h.t["9KoPyB"]),
              fullWidth: !0,
            })
          : C && n === _.V3.QUEST_HOME_TILE_FOOTER
            ? (0, s.jsx)(a.$, {
                size: d,
                variant: "secondary",
                onClick: () => {
                  (0, p.se)(
                    { quest: e },
                    {
                      content: i,
                      ctaContent: o.Cy.CONNECT_CONSOLE,
                      position: c,
                      rowIndex: u,
                      impressionId: A,
                      sourceQuestContent: l,
                    },
                  );
                },
                text: h.intl.string(h.t.Cfye4v),
                fullWidth: !0,
              })
            : (0, s.jsx)(w, {
                quest: e,
                analyticsCtxQuestContent: i,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: c,
                analyticsCtxQuestContentRowIndex: u,
              });
      }
      let M = function (t) {
          let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: c,
            size: u,
          } = t;
          if ((0, i.g5)(e) && n === _.V3.QUEST_HOME_TILE_FOOTER)
            return (0, s.jsx)(y, {
              quest: e,
              surface: n,
              size: u,
              analyticsCtxQuestContent: l,
              analyticsCtxSourceQuestContent: r,
              analyticsCtxQuestContentPosition: o,
              analyticsCtxQuestContentRowIndex: c,
            });
          let d = h.intl.string(h.t["9KoPyB"]);
          return (0, s.jsx)(a.$, {
            size: u,
            variant: "secondary",
            disabled: !0,
            text: d,
            fullWidth: !0,
          });
        },
        O = function (t) {
          let {
            quest: e,
            taskType: n,
            surface: l,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: c,
            size: u,
          } = t;
          return (0, i.t)({ quest: e }) || (0, i.g5)(e)
            ? (0, s.jsx)(M, {
                quest: e,
                surface: l,
                size: u,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: c,
              })
            : (0, s.jsx)(A, {
                quest: e,
                taskType: n,
                size: u,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: r,
              });
        };
    },
    593587(t, e, n) {
      n.d(e, { A: () => r });
      var s = n(627968),
        i = n(821609),
        l = n(890687),
        a = n(985018);
      let r = function (t) {
        let { quest: e, size: n } = t,
          r = (0, l.S5)(e.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          });
        return (0, s.jsx)(i.$, {
          variant: "secondary",
          disabled: !0,
          fullWidth: !0,
          size: n,
          text: a.intl.format(a.t["6p8BZx"], { expiryDate: r }),
        });
      };
    },
    220514(t, e, n) {
      n.d(e, { A: () => s.A });
      var s = n(48136);
    },
    884392(t, e, n) {
      n.d(e, { A: () => E });
      var s = n(627968),
        i = n(412703),
        l = n(17928),
        a = n(821609),
        r = n(829219),
        o = n(859703),
        c = n(890687),
        u = n(590202),
        d = n(792620),
        C = n(545986),
        h = n(654487),
        A = n(985018);
      function T(t) {
        switch (t) {
          case i.n.ACHIEVEMENT_IN_ACTIVITY:
          case i.n.PLAY_ACTIVITY:
          case i.n.WATCH_VIDEO:
            return u.Cy.START_QUEST;
          default:
            return u.Cy.ACCEPT_QUEST;
        }
      }
      let E = function (t) {
        var e;
        let {
            quest: n,
            taskType: u,
            size: E = "sm",
            preClickCallback: g,
            analyticsCtxQuestContent: f,
            analyticsCtxSourceQuestContent: x,
            analyticsCtxQuestContentPosition: m,
            analyticsCtxQuestContentRowIndex: I,
          } = t,
          p = {
            questContent: f,
            questContentCTA: T(u),
            sourceQuestContent: x,
            questContentPosition: m,
            questContentRowIndex: I,
          },
          v = n.id,
          { isEnrolling: _ } = (0, l.cf)(
            [o.A],
            () => ({ isEnrolling: o.A.isEnrolling(v) }),
            [v],
          ),
          N = (0, C.Oz)(n),
          w = (function (t, e) {
            let { launchInGameActivity: n } = (0, c.zW)(e);
            if ((0, d.K$)(e))
              return () => {
                (0, C.Fy)(e);
              };
            switch (t) {
              case i.n.ACHIEVEMENT_IN_ACTIVITY:
              case i.n.PLAY_ACTIVITY:
                return () => {
                  n();
                };
              default:
                return null;
            }
          })(u, n),
          y = (function (t, e) {
            let { features: n } = e.config;
            switch (t) {
              case i.n.WATCH_VIDEO:
                return A.intl.formatToPlainString(A.t.GNsKiW, {
                  remainTime: (0, d.xm)((0, d.Yh)(e)),
                });
              case i.n.ACHIEVEMENT_IN_ACTIVITY:
                return A.intl.string(A.t.CkUzLd);
              case i.n.PLAY_ACTIVITY:
                if (n.includes(h.Li.CLOUD_GAMING_ACTIVITY))
                  return A.intl.string(A.t["+qoymD"]);
                return A.intl.string(A.t.E4kW5O);
              default:
                return A.intl.string(A.t.kUQLMJ);
            }
          })(u, n),
          M =
            ((e = w ?? void 0),
            u === i.n.WATCH_VIDEO
              ? async () => {
                  await (0, C.e0)(n, {
                    questContent: p.questContent,
                    questContentCTA: p.questContentCTA,
                    sourceQuestContent: p.sourceQuestContent,
                    sourceQuestContentCTA: T(u),
                    questContentPosition: p.questContentPosition,
                    questContentRowIndex: p.questContentRowIndex,
                  });
                }
              : async () => {
                  await (0, r.Oy)(n.id, {
                    questContent: p.questContent,
                    questContentCTA: p.questContentCTA,
                    sourceQuestContent: p.sourceQuestContent,
                    questContentPosition: p.questContentPosition,
                    questContentRowIndex: p.questContentRowIndex,
                  }),
                    e?.();
                });
        return (0, s.jsx)(a.$, {
          size: E,
          loading: _,
          variant: "primary",
          onClick: () => {
            g?.(), M();
          },
          text: y,
          icon: N,
          fullWidth: !0,
        });
      };
    },
    246356(t, e, n) {
      n.d(e, { A: () => l });
      var s = n(64700),
        i = n(447404);
      function l(t) {
        let { children: e } = t,
          { preventIdle: n, allowIdle: l } = (0, i.o)("popup");
        return s.useEffect(() => (n(), () => l()), [l, n]), e;
      }
    },
    610509(t, e, n) {
      n.d(e, { z: () => r });
      var s = n(627968);
      n(64700);
      var i = n(661531),
        l = n(996682),
        a = n(27989);
      let r = (t) => {
        let {
            size: e = "md",
            width: n,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = t,
          d = (0, a.J)(e),
          C = d?.width ?? n,
          h = d?.height ?? r;
        return (0, s.jsx)("svg", {
          ...(0, l.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: C,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M19.76 8.82c-.11.09-2.16 1.24-2.16 3.8 0 2.98 2.6 4.03 2.68 4.05 0 .07-.41 1.44-1.37 2.84-.86 1.23-1.75 2.46-3.11 2.46-1.36 0-1.71-.79-3.28-.79-1.53 0-2.08.82-3.32.82-1.24 0-2.11-1.14-3.11-2.54A12.25 12.25 0 0 1 4 12.84c0-3.9 2.53-5.95 5.02-5.95 1.32 0 2.42.86 3.25.86.8 0 2.02-.92 3.53-.92.57 0 2.62.06 3.96 1.99Zm-4.68-3.63a4.47 4.47 0 0 0 1.07-2.79c0-.14-.02-.28-.04-.4a4.47 4.47 0 0 0-2.95 1.52 4.35 4.35 0 0 0-1.1 2.7c0 .16.03.32.04.37l.27.02c.91 0 2.05-.6 2.71-1.42Z",
            className: c,
          }),
        });
      };
    },
    836480(t, e, n) {
      n.d(e, { Q: () => r });
      var s = n(627968);
      n(64700);
      var i = n(661531),
        l = n(996682),
        a = n(27989);
      let r = (t) => {
        let {
            size: e = "md",
            width: n,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = t,
          d = (0, a.J)(e),
          C = d?.width ?? n,
          h = d?.height ?? r;
        return (0, s.jsxs)("svg", {
          ...(0, l.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: C,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: c,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
              clipRule: "evenodd",
              className: c,
            }),
          ],
        });
      };
    },
    251391(t, e, n) {
      n.d(e, { d: () => r });
      var s = n(627968);
      n(64700);
      var i = n(661531),
        l = n(996682),
        a = n(27989);
      let r = (t) => {
        let {
            size: e = "md",
            width: n,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = t,
          d = (0, a.J)(e),
          C = d?.width ?? n,
          h = d?.height ?? r;
        return (0, s.jsxs)("svg", {
          ...(0, l.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: C,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M20.14.8a1.21 1.21 0 0 0-2.28 0l-.5 1.37a2 2 0 0 1-1.19 1.18l-1.38.51a1.21 1.21 0 0 0 0 2.28l1.38.5a2 2 0 0 1 1.18 1.19l.51 1.38a1.21 1.21 0 0 0 2.28 0l.5-1.38a2 2 0 0 1 1.19-1.18l1.38-.51a1.21 1.21 0 0 0 0-2.28l-1.38-.5a2 2 0 0 1-1.18-1.19L20.14.79Z",
              className: c,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M13.25 2c.17 0 .23.28.1.38A3.22 3.22 0 0 0 14.1 8l1.38.51.5 1.38a3.22 3.22 0 0 0 5.64.76c.1-.14.38-.08.38.09V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8.25Zm2.1 11.13 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
              clipRule: "evenodd",
              className: c,
            }),
          ],
        });
      };
    },
    657044(t, e, n) {
      n.d(e, { _: () => r });
      var s = n(627968);
      n(64700);
      var i = n(661531),
        l = n(996682),
        a = n(27989);
      let r = (t) => {
        let {
            size: e = "md",
            width: n,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = t,
          d = (0, a.J)(e),
          C = d?.width ?? n,
          h = d?.height ?? r;
        return (0, s.jsxs)("svg", {
          ...(0, l.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: C,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M6.69 2A3 3 0 0 0 3.7 4.67l-.33 3A3 3 0 0 0 6.35 11H7V9a1 1 0 0 1 2 0v2h6V9a1 1 0 1 1 2 0v2h.65a3.05 3.05 0 0 0 .9-.14 3 3 0 0 0 2.08-3.2l-.33-3A3 3 0 0 0 17.3 2H6.7Z",
              className: c,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M15 13v1a1 1 0 1 0 2 0v-1h.65c1.43 0 2.72-.6 3.62-1.56l.04.22.68 5.88A4 4 0 0 1 18 22H6A4 4 0 0 1 2 17.54l.68-5.88.04-.22c.9.96 2.19 1.56 3.62 1.56H7v1a1 1 0 1 0 2 0v-1h6Zm-6 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: c,
            }),
          ],
        });
      };
    },
    503002(t, e, n) {
      n.d(e, { U: () => r });
      var s = n(627968);
      n(64700);
      var i = n(661531),
        l = n(996682),
        a = n(27989);
      let r = (t) => {
        let {
            size: e = "md",
            width: n,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = t,
          d = (0, a.J)(e),
          C = d?.width ?? n,
          h = d?.height ?? r;
        return (0, s.jsxs)("svg", {
          ...(0, l.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: C,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M20.14.8a1.21 1.21 0 0 0-2.28 0l-.5 1.37a2 2 0 0 1-1.19 1.18l-1.38.51a1.21 1.21 0 0 0 0 2.28l1.38.5a2 2 0 0 1 1.18 1.19l.51 1.38a1.2 1.2 0 0 0 1.15.79l.17-.01c.4-.06.79-.32.96-.78l.5-1.38a2 2 0 0 1 1.19-1.18l1.38-.51a1.21 1.21 0 0 0 0-2.28l-1.38-.5a2 2 0 0 1-1.18-1.19L20.14.79ZM20.98 11.84c0-.2-.24-.33-.42-.22-1.79 1.01-3.6-.17-4.87-1.55a.28.28 0 0 0-.4 0 4.49 4.49 0 0 1-6.58 0 .28.28 0 0 0-.4 0 4.45 4.45 0 0 1-4.94 1.11c-.17-.07-.37.06-.37.24V19a3 3 0 0 0 3 3h2.75c.14 0 .25-.11.25-.25V16c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5.75c0 .14.11.25.25.25H18a3 3 0 0 0 3-3l-.02-7.16Z",
              className: c,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M12.98 2c.22 0 .32.4.15.54a3.22 3.22 0 0 0 .97 5.47l.12.05c.28.1.4.42.24.65A3 3 0 0 1 9 7V3a1 1 0 0 1 1-1h2.98ZM2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v4.03A2.95 2.95 0 0 1 5.03 10h-.05c-2 0-3.44-1.9-2.9-3.83l.55-1.98Z",
              className: c,
            }),
          ],
        });
      };
    },
    401432(t, e, n) {
      n.d(e, { a: () => r });
      var s = n(627968);
      n(64700);
      var i = n(661531),
        l = n(996682),
        a = n(27989);
      let r = (t) => {
        let {
            size: e = "md",
            width: n,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = t,
          d = (0, a.J)(e),
          C = d?.width ?? n,
          h = d?.height ?? r;
        return (0, s.jsx)("svg", {
          ...(0, l.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: C,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M16.94 19.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l4.94-4.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 7.06 4.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-4.94 4.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l4.94 4.94Z",
            className: c,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=96777.22256d4f786273da.js.map
