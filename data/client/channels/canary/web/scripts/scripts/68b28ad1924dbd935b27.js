"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20399"],
  {
    946790: function (e) {
      e.exports = "/assets/fe097467e41435d7cccf.svg";
    },
    384275: function (e, t, n) {
      var r = n(544891),
        i = n(570140),
        l = n(981631);
      t.Z = {
        fetch() {
          r.tn.get({ url: l.ANM.OAUTH2_TOKENS, oldFormErrors: !0 }).then(
            (e) =>
              i.Z.dispatch({
                type: "USER_AUTHORIZED_APPS_UPDATE",
                apps: e.body,
              }),
            () =>
              i.Z.dispatch({ type: "USER_AUTHORIZED_APPS_UPDATE", apps: [] }),
          );
        },
        delete(e) {
          r.tn
            .del({ url: l.ANM.OAUTH2_TOKEN(e), oldFormErrors: !0 })
            .then(() => {
              this.fetch();
            });
        },
      };
    },
    603263: function (e, t, n) {
      n.d(t, {
        Nz: function () {
          return u;
        },
        QQ: function () {
          return p;
        },
        QY: function () {
          return S;
        },
        Vj: function () {
          return c;
        },
        j8: function () {
          return m;
        },
        jn: function () {
          return h;
        },
        m$: function () {
          return d;
        },
        oO: function () {
          return _;
        },
        qt: function () {
          return I;
        },
        u$: function () {
          return C;
        },
        yC: function () {
          return o;
        },
      }),
        n(724458);
      var r = n(570140),
        i = n(367907),
        l = n(768119),
        s = n(405656),
        a = n(981631);
      function o(e, t, n, o) {
        (0, s.jW)(t, e), o && (t.search_everywhere = !0);
        let c = Object.keys(t);
        i.ZP.trackWithMetadata(a.rMx.SEARCH_STARTED, {
          search_type: l.Z.getSearchType(),
          prev_search_id: l.Z.getAnalyticsId(e),
          num_modifiers: c.length,
          modifiers: c.reduce((e, n) => {
            let r = t[n];
            return (e[n] = Array.isArray(r) ? r.length : 1), e;
          }, {}),
        }),
          r.Z.dispatch({
            type: "SEARCH_START",
            query: t,
            searchId: e,
            queryString: n,
            searchEverywhere: o,
          });
      }
      function c(e) {
        return "relevance" === e.sort_by
          ? a.QIO.MOST_RELEVANT
          : "asc" === e.sort_order
            ? a.QIO.OLDEST
            : a.QIO.NEWEST;
      }
      function u(e, t) {
        let n = l.Z.getQuery(e),
          r = (function (e) {
            switch (e) {
              case a.QIO.MOST_RELEVANT:
                return { sort_by: "relevance", sort_order: "desc" };
              case a.QIO.OLDEST:
                return { sort_by: "timestamp", sort_order: "asc" };
              case a.QIO.NEWEST:
              default:
                return { sort_by: "timestamp", sort_order: "desc" };
            }
          })(t);
        return o(e, { ...n, ...r, offset: 0 });
      }
      function d(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : a.vpv;
        return f(e, t);
      }
      function h(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : a.vpv;
        return f(e, -t);
      }
      function _(e, t) {
        return E(e, t * a.vpv);
      }
      function f(e, t) {
        let n = l.Z.getOffset(e);
        return E(e, n + t);
      }
      function E(e, t) {
        let n = l.Z.getQuery(e),
          r = l.Z.getTotalResults(e);
        if (!(t < 0) && !(t > r)) return o(e, { ...n, offset: t });
      }
      function p(e) {
        r.Z.dispatch({ type: "SEARCH_CLEAR_HISTORY", searchId: e });
      }
      function m(e, t) {
        null != e &&
          r.Z.dispatch({
            type: "SEARCH_EDITOR_STATE_CHANGE",
            searchId: e,
            editorState: t,
          });
      }
      function I(e) {
        i.ZP.trackWithMetadata(a.rMx.SEARCH_CLOSED, {
          search_id: l.Z.getAnalyticsId(e),
        }),
          r.Z.wait(() =>
            r.Z.dispatch({ type: "SEARCH_EDITOR_STATE_CLEAR", searchId: e }),
          );
      }
      function C(e, t, n) {
        null != e &&
          r.Z.dispatch({
            type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
            searchId: e,
            tokens: t,
            cursorScope: n,
          });
      }
      function S(e, t) {
        r.Z.dispatch({
          type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
          searchId: e,
          showBlocked: t,
        });
      }
    },
    542051: function (e, t, n) {
      n.d(t, {
        M: function () {
          return E;
        },
      }),
        n(411104);
      var r,
        i,
        l,
        s,
        a = n(735250),
        o = n(470079),
        c = n(120356),
        u = n.n(c),
        d = n(481060),
        h = n(689938),
        _ = n(463659);
      function f(e) {
        e.stopPropagation(), e.preventDefault();
      }
      function E(e, t, n) {
        return {
          id: "".concat(e, "-").concat(t),
          role: "option",
          tabIndex: -1,
          "aria-selected": n,
        };
      }
      class p extends (r = o.PureComponent) {
        renderQuery(e) {
          let {
            query: t,
            navId: n,
            focusedIndex: r,
            onSelectQuery: i,
            onSelectSearchEverywhere: l,
            onHighlightQuery: s,
            hideQuery: o,
            searchFavorites: c,
          } = this.props;
          if (e || o) return null;
          let f = -1 === r;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(d.Clickable, {
                className: u()(_.queryContainer, { [_.focused]: f }),
                ...E(n, -1, f),
                onMouseEnter: s,
                onClick: i,
                children: [
                  (0, a.jsx)("div", {
                    className: _.queryText,
                    children: c
                      ? h.Z.Messages.SEARCH_FAVORITES
                      : h.Z.Messages.SEARCH_FOR_VALUE.format({ value: t }),
                  }),
                  (0, a.jsx)("div", {
                    className: _.queryShortcut,
                    "aria-hidden": !0,
                    children: (0, a.jsx)(d.KeyCombo, {
                      shortcut: "return",
                      dim: !0,
                      className: _.keyCombo,
                    }),
                  }),
                ],
              }),
              c &&
                (0, a.jsxs)(d.Clickable, {
                  className: u()(_.queryContainer, { [_.focused]: f }),
                  ...E(n, -1, f),
                  onMouseEnter: s,
                  onClick: l,
                  children: [
                    (0, a.jsx)("div", {
                      className: _.queryText,
                      children: h.Z.Messages.SEARCH_EVERYWHERE,
                    }),
                    (0, a.jsx)("div", {
                      className: _.queryShortcut,
                      "aria-hidden": !0,
                      children: (0, a.jsx)(d.KeyCombo, {
                        shortcut: "shift+return",
                        dim: !0,
                        className: _.keyCombo,
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        renderResults(e) {
          let {
            numResults: t,
            renderNoResults: n,
            renderInitialState: r,
            renderResult: i,
            renderCustomResults: l,
          } = this.props;
          if (e) return r();
          if (0 === t) return n();
          if (null != i) return Array.from({ length: t }).map((e, t) => i(t));
          if (null != l) return l();
          throw Error(
            "SearchResultsPopout.renderResults: Flow should never allow this...",
          );
        }
        render() {
          let { query: e, focusedIndex: t, navId: n, width: r } = this.props,
            i = "" === e.trim();
          return (0, a.jsxs)("div", {
            className: _.container,
            style: { width: r },
            onMouseDown: f,
            role: "listbox",
            id: n,
            tabIndex: -1,
            "aria-activedescendant": "".concat(n, "-").concat(t),
            children: [this.renderQuery(i), this.renderResults(i)],
          });
        }
      }
      (s = { renderInitialState: () => null, hideQuery: !1, width: 320 }),
        (l = "defaultProps") in (i = p)
          ? Object.defineProperty(i, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = s),
        (t.Z = p);
    },
    395041: function (e, t, n) {
      n.d(t, {
        O: function () {
          return o;
        },
        w: function () {
          return a;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(481060),
        l = n(742380);
      function s(e, t) {
        let { children: n } = e;
        return (0, r.jsx)(i.Text, {
          variant: "text-sm/medium",
          className: t,
          children: n,
        });
      }
      let a = (e) => s(e, l.searchFilter),
        o = (e) => s(e, l.searchAnswer);
    },
    468988: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(689938);
      let i = ["a", "b", "c", "d"],
        l = (e) => e;
      function s(e, t) {
        let n = {},
          r = Math.min(e.length, i.length);
        for (let l = 0; l < r; ++l) n[i[l]] = (n, r) => t(e[l], r);
        return n;
      }
      class a {
        asString() {
          return this.transformed(l);
        }
        isEmpty() {
          return 0 === this.items.length;
        }
        transformed(e) {
          switch (this.items.length) {
            case 0:
              return "";
            case 1:
              return e(this.items[0], "");
            case 2:
              return r.Z.Messages.GENERIC_FORMATTED_LIST_TWO.format(
                s(this.items, e),
              );
            case 3:
              return r.Z.Messages.GENERIC_FORMATTED_LIST_THREE.format(
                s(this.items, e),
              );
            default:
              return r.Z.Messages.GENERIC_FORMATTED_LIST_FOUR.format(
                s(this.items, e),
              );
          }
        }
        constructor(e) {
          var t, n, r;
          (t = this),
            (r = void 0),
            (n = "items") in t
              ? Object.defineProperty(t, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = r),
            (this.items = e);
        }
      }
    },
    17894: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = n(525654),
        i = n.n(r),
        l = n(39612),
        s = n(271579),
        a = n(756647),
        o = n(232567),
        c = n(703656),
        u = n(314897),
        d = n(896797),
        h = n(626135),
        _ = n(954824),
        f = n(981631);
      async function E(e) {
        var t, n;
        let r = null === (t = i().os) || void 0 === t ? void 0 : t.family;
        if ("Android" === r || "iOS" === r) {
          let t =
              null !== (n = u.default.getFingerprint()) && void 0 !== n
                ? n
                : u.default.getId(),
            r = (0, s.WS)();
          if (null == t && u.default.isAuthenticated())
            try {
              await (0, o.k)(), (t = u.default.getId());
            } catch {}
          return (0, s.ZP)((0, l.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: r,
          });
        }
        return "discord://";
      }
      async function p(e) {
        let t = await E(e),
          n = (0, s.zS)(t);
        null != n &&
          h.default.track(f.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          _.Z.launch(t, (e) => {
            !e && (0, c.dL)(d.Z.fallbackRoute);
          });
      }
    },
    320007: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var r = n(735250),
        i = n(470079),
        l = n(442837),
        s = n(481060),
        a = n(665149),
        o = n(618158),
        c = n(819640),
        u = n(131951),
        d = n(924557),
        h = n(435064),
        _ = n(779618),
        f = n(175470),
        E = n(203259),
        p = n(356659),
        m = n(689938);
      function I(e) {
        let { canShowReminder: t = !1, className: I } = e,
          C = (0, _.Z)(u.Z),
          { showClipsHeaderEntrypoint: S } = d.NV.useExperiment(
            { location: "ClipsButton" },
            { autoTrackExposure: !1 },
          ),
          {
            hasClips: g,
            hasNewClips: R,
            lastClipsSession: T,
            remindersEnabled: N,
            hasAnyClipAnimations: x,
          } = (0, l.cj)([h.Z], () => ({
            hasClips: h.Z.hasClips(),
            hasNewClips: h.Z.getNewClipIds().length > 0,
            lastClipsSession: h.Z.getLastClipsSession(),
            remindersEnabled: h.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: h.Z.hasAnyClipAnimations(),
          })),
          v = null != T && T.newClipIds.length > 0,
          O = (0, f.n)((e) => e.clipsButtonRef),
          b = (0, f.n)((e) => e.setClipsButtonRef),
          L = (0, l.e7)([c.Z], () => c.Z.hasLayers()),
          { preventIdle: A, allowIdle: P } = (0, o.Y)("animation");
        function Z() {
          (0, s.openModalLazy)(
            async () => {
              let { default: e } = await Promise.all([
                n.e("2668"),
                n.e("32304"),
              ]).then(n.bind(n, 542055));
              return (t) => (0, r.jsx)(e, { ...t });
            },
            { modalKey: p.Qr },
          );
        }
        return (i.useEffect(() => (x ? A() : P(), () => P()), [x, A, P]),
        S && C && g)
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                null != O &&
                  t &&
                  N &&
                  v &&
                  !(0, s.hasAnyModalOpen)() &&
                  !L &&
                  (0, r.jsx)(E.Z, {
                    clipIconRef: O,
                    lastClipsSession: T,
                    onOpenClipsGallery: Z,
                  }),
                (0, r.jsx)("div", {
                  ref: b,
                  children: (0, r.jsx)(a.JO, {
                    className: I,
                    icon: s.ClipsIcon,
                    showBadge: R,
                    tooltip: m.Z.Messages.CLIPS_GALLERY_TOOLTIP,
                    onClick: Z,
                  }),
                }),
              ],
            })
          : null;
      }
    },
    175470: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      let r = (0, n(652874).Z)((e) => ({
        clipsButtonRef: null,
        setClipsButtonRef: (t) => e({ clipsButtonRef: t }),
      }));
    },
    203259: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(481060),
        l = n(39604),
        s = n(176127),
        a = n(689938),
        o = n(516707);
      function c(e) {
        let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: c } = e;
        return (0, r.jsxs)(i.TooltipLayer, {
          tooltipClassName: o.reminderTooltip,
          tooltipContentClassName: o.tooltipContent,
          targetElementRef: { current: n },
          position: "bottom",
          color: i.TooltipColors.PRIMARY,
          children: [
            (0, r.jsx)(s.Z, {}),
            (0, r.jsx)(i.Heading, {
              variant: "heading-md/extrabold",
              children: a.Z.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({
                count: c.newClipIds.length,
              }),
            }),
            (0, r.jsxs)("div", {
              className: o.buttonContainer,
              children: [
                (0, r.jsx)(i.Button, {
                  color: i.Button.Colors.TRANSPARENT,
                  onClick: l.eL,
                  children: a.Z.Messages.DISMISS,
                }),
                (0, r.jsx)(i.Button, {
                  color: i.Button.Colors.BRAND,
                  onClick: t,
                  children: a.Z.Messages.CLIPS_REVIEW_NOW,
                }),
              ],
            }),
          ],
        });
      }
    },
    176127: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(120356),
        l = n.n(i),
        s = n(442837),
        a = n(435064),
        o = n(735807);
      function c() {
        let e = (0, s.Wu)([a.Z], () => {
          var e;
          let t =
            null === (e = a.Z.getLastClipsSession()) || void 0 === e
              ? void 0
              : e.newClipIds;
          return null == t
            ? []
            : a.Z.getClips()
                .slice(0, 4)
                .filter((e) => t.includes(e.id));
        });
        return (0, r.jsx)("div", {
          className: l()(o.thumbnailStack, {
            [o["height-1"]]: 1 === e.length,
            [o["height-2"]]: 2 === e.length,
            [o["height-3"]]: 3 === e.length,
            [o["height-max"]]: e.length >= 4,
          }),
          children: Array.from({ ...e, length: 4 })
            .map((e, t) =>
              null != e
                ? (0, r.jsx)(
                    "img",
                    { alt: "", className: o.thumbnail, src: e.thumbnail },
                    e.id,
                  )
                : (0, r.jsx)("div", {}, "placeholder-".concat(t)),
            )
            .reverse(),
        });
      }
    },
    313550: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120),
        n(653041);
      var r = n(470079),
        i = n(468988),
        l = n(817460),
        s = n(570533),
        a = n(689938);
      function o(e) {
        let { includeFlairAsBenefit: t, listing: n, guildId: o } = e,
          c = 0,
          u = 0;
        for (let e of n.role_benefits.benefits)
          (0, l.rC)(e) ? (c += 1) : (0, l.lL)(e) && (u += 1);
        let d = n.role_id,
          h = (0, s.Z)(o).filter((e) => e.roles.includes(d)).length;
        return r.useMemo(() => {
          let e = [];
          return (
            !0 === t &&
              e.push(a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_VISUAL_FLAIR),
            0 !== c &&
              e.push(
                a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format(
                  { channelCount: c },
                ),
              ),
            0 !== u &&
              e.push(
                a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format(
                  { benefitCount: u },
                ),
              ),
            0 !== h &&
              e.push(
                a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EMOJI_SUBTITLE.format(
                  { emojiCount: h },
                ),
              ),
            new i.Z(e)
          );
        }, [c, u, h, t]);
      }
    },
    934826: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var r = n(470079),
        i = n(442837),
        l = n(821849),
        s = n(509545),
        a = n(78839),
        o = n(289393),
        c = n(697227),
        u = n(981631);
      function d(e) {
        let t = (0, i.e7)([a.ZP], () => a.ZP.getSubscriptions()),
          n = r.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let n of Object.values(t))
              n.type === u.NYc.GUILD && (e[(0, c.W)(n)] = n);
            return e;
          }, [t]),
          { activeSubscription: d, activeSubscriptionListing: h } = (0, i.cj)(
            [o.Z],
            () => {
              var t;
              let r,
                i = null,
                l = null != e ? o.Z.getSubscriptionGroupListing(e) : null;
              for (let e of null !==
                (t = null == l ? void 0 : l.subscription_listings_ids) &&
              void 0 !== t
                ? t
                : []) {
                let t = o.Z.getSubscriptionListing(e),
                  l = null == t ? void 0 : t.subscription_plans[0].id;
                if (null == l) continue;
                let s = n[l];
                if (null != s) {
                  (i = s), (r = t);
                  break;
                }
              }
              return { activeSubscription: i, activeSubscriptionListing: r };
            },
          ),
          _ = null == h ? void 0 : h.subscription_plans[0],
          f = null == _ ? void 0 : _.id,
          E = null == _ ? void 0 : _.sku_id,
          p = (0, i.e7)([s.Z], () => (null != f ? s.Z.get(f) : null)),
          m = null == h ? void 0 : h.soft_deleted;
        return (
          r.useEffect(() => {
            null == p &&
              null != E &&
              !s.Z.isFetchingForSKU(E) &&
              (0, l.GZ)(E, void 0, void 0, m);
          }, [p, E, m]),
          {
            activeSubscription: d,
            activeSubscriptionListing: h,
            activeSubscriptionPlanFromStore: p,
          }
        );
      }
    },
    896083: function (e, t, n) {
      n.d(t, {
        F: function () {
          return l;
        },
      }),
        n(47120);
      var r = n(470079),
        i = n(295141);
      let l = () => {
        let [e, t] = r.useState(!1),
          [n, l] = r.useState(null);
        return {
          loading: e,
          error: n,
          getTrialPurchaseEligibility: r.useCallback(async (e, n, r) => {
            t(!0), l(null);
            try {
              return await (0, i.LB)(e, n, r);
            } catch (e) {
              l(e);
            } finally {
              t(!1);
            }
          }, []),
        };
      };
    },
    768318: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(470079),
        i = n(584825);
      function l(e, t) {
        let n = (0, i.oC)(t);
        return r.useMemo(() => {
          var e;
          return (
            null != n &&
            (null == n.max_num_active_trial_users ||
              n.max_num_active_trial_users >
                (null !== (e = n.num_active_trial_users) && void 0 !== e
                  ? e
                  : 0))
          );
        }, [n]);
      }
    },
    367719: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(468194),
        i = n(477690),
        l = n(131388),
        s = n(293810);
      let a = (0, r.Mg)(
          i.Z.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE,
        ),
        o = (0, r.Mg)(
          i.Z.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE,
        );
      function c() {
        let e = (0, l.Z)(s.iP);
        return e ? o : a;
      }
    },
    838940: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(120356),
        l = n.n(i),
        s = n(481060),
        a = n(528027),
        o = n(686807),
        c = n(113318),
        u = n(495347);
      function d(e) {
        let { benefit: t, guildId: n } = e,
          i = (0, c.Z)(n, t.ref_id),
          d = (0, r.jsx)(a.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name,
          }),
          h =
            null != i
              ? (0, r.jsx)(s.Clickable, {
                  className: u.__invalid_channelLink,
                  onClick: i.navigateToChannel,
                  "aria-label": i.ariaLabel,
                  role: "link",
                  children: (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "header-primary",
                    className: l()(u.name, u.linkedName),
                    children: (0, o.Z)(t),
                  }),
                })
              : (0, r.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  className: u.name,
                  children: (0, o.Z)(t),
                });
        return (0, r.jsxs)("div", {
          className: u.container,
          children: [
            (0, r.jsxs)("div", {
              className: u.infoContainer,
              children: [
                h,
                (0, r.jsx)(s.Text, {
                  color: "interactive-normal",
                  variant: "text-sm/normal",
                  children: t.description,
                }),
              ],
            }),
            (0, r.jsx)("div", { className: u.emojiContainer, children: d }),
          ],
        });
      }
    },
    305342: function (e, t, n) {
      n.d(t, {
        c: function () {
          return M;
        },
      }),
        n(47120);
      var r = n(735250),
        i = n(470079),
        l = n(120356),
        s = n.n(l),
        a = n(442837),
        o = n(481060),
        c = n(131388),
        u = n(313201),
        d = n(160404),
        h = n(351402),
        _ = n(768581),
        f = n(817460),
        E = n(584825),
        p = n(290348),
        m = n(934826),
        I = n(768318),
        C = n(570533),
        S = n(971792),
        g = n(629262),
        R = n(761966),
        T = n(893729),
        N = n(838940),
        x = n(882101),
        v = n(11705),
        O = n(81273),
        b = n(293810),
        L = n(981631),
        A = n(689938),
        P = n(367993);
      let Z = (e) => {
          let { benefits: t, header: n, guildId: l } = e,
            [s, a] = i.useState(!1),
            c = s ? t : t.slice(0, 5),
            d = t.length > 5,
            h = t.length - 5,
            _ =
              A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format(
                { numTruncated: h },
              ),
            E = (0, u.Dt)();
          return 0 === t.length
            ? null
            : (0, r.jsxs)("div", {
                className: P.benefitsSection,
                children: [
                  (0, r.jsx)(o.Heading, {
                    variant: "text-xs/bold",
                    color: "header-secondary",
                    className: P.sectionHeader,
                    id: E,
                    children: n,
                  }),
                  (0, r.jsx)(o.Spacer, { size: 12 }),
                  (0, r.jsx)("ul", {
                    className: P.benefitsList,
                    "aria-labelledby": E,
                    children: c.map((e, t) =>
                      (0, r.jsx)(
                        "li",
                        {
                          children: (0, r.jsx)(
                            N.Z,
                            { guildId: l, benefit: e },
                            (0, f.ab)(e),
                          ),
                        },
                        t,
                      ),
                    ),
                  }),
                  d &&
                    (0, r.jsx)(j, {
                      isViewAll: s,
                      onToggle: () => a((e) => !e),
                      showMoreText: _,
                    }),
                ],
              });
        },
        y = (e) => {
          let { guildId: t, listingId: n } = e,
            i = (0, C.Z)(t),
            [l] = p.XZ(n, t),
            s = i.filter((e) => l.has(e.id));
          return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                className: P.benefitsSection,
                children: [
                  (0, r.jsx)(o.Heading, {
                    variant: "text-xs/bold",
                    color: "header-secondary",
                    className: P.sectionHeader,
                    children:
                      A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format(
                        { count: s.length },
                      ),
                  }),
                  (0, r.jsx)(o.Spacer, { size: 12 }),
                  (0, r.jsx)("div", {
                    className: P.emojiList,
                    children: s.map((e, t) => {
                      var n;
                      return (0, r.jsx)(
                        o.Tooltip,
                        {
                          text: e.name,
                          "aria-label": !1,
                          children: (t) => {
                            var n;
                            return (0, r.jsx)("img", {
                              ...t,
                              className: P.emojiListEmoji,
                              src:
                                ((n = e),
                                _.ZP.getEmojiURL({
                                  id: n.id,
                                  animated: n.animated,
                                  size: 24,
                                })),
                              width: 24,
                              height: 24,
                              alt: e.name,
                            });
                          },
                        },
                        null !== (n = e.id) && void 0 !== n ? n : t,
                      );
                    }),
                  }),
                ],
              });
        },
        M = (e) => {
          let { listingId: t, guildId: n, className: i } = e,
            l = (0, S.Z)(n, t),
            [a] = p.UE(t),
            c = (0, g.Z)(a),
            [u] = p.R7(t),
            d = p.qs(t, n),
            [h] = p.XZ(t, n);
          return null == l && 0 === c.length && 0 === u.length && 0 === h.size
            ? null
            : (0, r.jsxs)("div", {
                className: s()(P.subscriptionPerks, i),
                children: [
                  null != l &&
                    (0, r.jsxs)(o.HeadingLevel, {
                      component: (0, r.jsx)(o.Heading, {
                        variant: "text-xs/bold",
                        color: "header-secondary",
                        className: P.sectionHeader,
                        children:
                          A.Z.Messages
                            .GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW,
                      }),
                      children: [
                        (0, r.jsx)(o.Spacer, { size: 8 }),
                        (0, r.jsx)(T.Z, {
                          role: d,
                          guildId: n,
                          className: P.roleMessagePreview,
                        }),
                      ],
                    }),
                  (0, r.jsx)(Z, {
                    header:
                      A.Z.Messages
                        .GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
                    benefits: c,
                    guildId: n,
                  }),
                  (0, r.jsx)(Z, {
                    header:
                      A.Z.Messages
                        .GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
                    benefits: u,
                    guildId: n,
                  }),
                  (0, r.jsx)(y, { guildId: n, listingId: t }),
                ],
              });
        },
        j = (e) => {
          let t,
            { onToggle: n, isViewAll: i, showMoreText: l } = e;
          return (
            (t = i
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    A.Z.Messages
                      .GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION,
                    (0, r.jsx)(o.ChevronSmallUpIcon, {
                      size: "md",
                      color: "currentColor",
                      className: P.toggleTruncationButtonIcon,
                    }),
                  ],
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    l,
                    (0, r.jsx)(o.ChevronSmallDownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: P.toggleTruncationButtonIcon,
                    }),
                  ],
                })),
            (0, r.jsx)(o.Button, {
              look: o.Button.Looks.BLANK,
              size: o.Button.Sizes.NONE,
              className: P.toggleTruncationButton,
              innerClassName: P.toggleTruncationButtonInner,
              onClick: n,
              children: t,
            })
          );
        };
      t.Z = (e) => {
        var t;
        let {
            listingId: n,
            guildId: l,
            groupListingId: u,
            analyticsLocation: _,
          } = e,
          C = (0, E.jO)(n),
          {
            openModal: S,
            canOpenModal: g,
            cannotOpenReason: T,
            isCheckingTrialEligibility: N,
          } = (0, O.Z)(C, l, u, _),
          Z = (0, a.e7)([h.Z], () => h.Z.isSyncing),
          { activeSubscription: y, activeSubscriptionListing: U } = (0, m.Z)(u),
          D = (null == U ? void 0 : U.id) === n,
          B = (null == y ? void 0 : y.status) === L.O0b.CANCELED,
          [F, k] = i.useState(!1),
          [H, w] = i.useState(!1),
          G = i.useCallback((e) => {
            let t = !1;
            null != e && (t = e.scrollHeight - e.clientHeight > 1), w(t);
          }, []),
          [z] = p._T(n),
          [W] = p.PK(n),
          [V] = p.TT(n),
          [K] = p.F2(n),
          Y = (0, I.Z)(l, n),
          Q = null != V && null == y && Y,
          q = (0, c.Z)(b.iP),
          [X, J] = i.useState(!1),
          $ = X || !q,
          ee = (0, a.e7)([d.Z], () => d.Z.isViewingServerShop(l)),
          et = (null == C ? void 0 : C.published) === !0,
          en = (null == C ? void 0 : C.soft_deleted) === !0,
          er = A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
        return (et || ee) && !en
          ? (0, r.jsxs)("article", {
              className: P.container,
              "aria-label": z,
              children: [
                Q &&
                  (0, r.jsxs)("div", {
                    className: s()(P.tierTrialIndicator, P.tierTopIndicator),
                    children: [
                      A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
                        trialPeriodDuration: (0, f.iG)({
                          interval: V.interval,
                          interval_count: V.interval_count,
                        }),
                      }),
                      (0, r.jsx)(o.Tooltip, {
                        clickableOnMobile: !0,
                        text: A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format(
                          { activeTrialUserLimit: null != K ? K : 0 },
                        ),
                        children: (e) =>
                          (0, r.jsx)(o.CircleInformationIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: P.tierTrialIndicatorIcon,
                            ...e,
                          }),
                      }),
                    ],
                  }),
                (0, r.jsxs)("div", {
                  className: Q ? void 0 : P.cardContainerWithoutTopIndicator,
                  children: [
                    (0, r.jsxs)("div", {
                      className: P.tierInfoContainer,
                      children: [
                        q
                          ? (0, r.jsx)(v.e, {
                              listingId: n,
                              isListingPublished: et,
                              expanded: $,
                              onToggleExpanded: () => J((e) => !e),
                            })
                          : (0, r.jsx)(x.xv, {
                              listingId: n,
                              isListingPublished: et,
                            }),
                        $ &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              q && (0, r.jsx)("div", { className: P.divider }),
                              D
                                ? (0, r.jsx)(o.Button, {
                                    fullWidth: !0,
                                    look: o.Button.Looks.OUTLINED,
                                    color: o.Button.Colors.PRIMARY,
                                    disabled: !0,
                                    children: B
                                      ? A.Z.Messages
                                          .GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL
                                      : A.Z.Messages
                                          .GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL,
                                  })
                                : (0, r.jsx)(o.Tooltip, {
                                    text: g ? null : T,
                                    "aria-label":
                                      null !== (t = g && T) &&
                                      void 0 !== t &&
                                      t,
                                    children: (e) =>
                                      (0, r.jsx)(R.Z, {
                                        ...e,
                                        fullWidth: !0,
                                        disabled: !g || Z,
                                        submitting: N,
                                        onClick: S,
                                        onlyShineOnHover: !0,
                                        children:
                                          A.Z.Messages
                                            .GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL,
                                      }),
                                  }),
                              (0, r.jsx)(o.Spacer, { size: 16 }),
                              (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                className: s()(
                                  (!H || !F) && P.tierDescriptionTruncate,
                                ),
                                children: (0, r.jsx)("div", {
                                  ref: G,
                                  children: W,
                                }),
                              }),
                              H &&
                                (0, r.jsx)(j, {
                                  isViewAll: F,
                                  onToggle: () => k((e) => !e),
                                  showMoreText: er,
                                }),
                            ],
                          }),
                      ],
                    }),
                    $ &&
                      (0, r.jsx)(o.HeadingLevel, {
                        children: (0, r.jsx)(M, { listingId: n, guildId: l }),
                      }),
                  ],
                }),
              ],
            })
          : null;
      };
    },
    882101: function (e, t, n) {
      n.d(t, {
        BM: function () {
          return _;
        },
        Ey: function () {
          return h;
        },
        xv: function () {
          return f;
        },
      }),
        n(47120);
      var r = n(735250);
      n(470079);
      var i = n(481060),
        l = n(765400),
        s = n(937615),
        a = n(817460),
        o = n(290348),
        c = n(367719),
        u = n(689938),
        d = n(544126);
      let h = (e) => {
        let { listingName: t } = e;
        return (0, r.jsx)(i.Heading, {
          variant: "text-md/normal",
          color: "interactive-active",
          className: d.tierName,
          children: t,
        });
      };
      function _(e) {
        let { image: t } = e;
        return null == t
          ? null
          : (0, r.jsx)("img", { src: t, alt: "", className: d.tierImage });
      }
      let f = (e) => {
        let { listingId: t, isListingPublished: n } = e,
          f = (0, c.Z)(),
          [E] = o._T(t),
          [p] = o.d9(t, f),
          [m] = o.H9(t);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(h, { listingName: E }),
            (0, r.jsx)(_, { image: p }),
            !n &&
              (0, r.jsx)("div", {
                className: d.draftBadgeContainer,
                children: (0, r.jsx)(l.v, {}),
              }),
            (0, r.jsx)(i.Text, {
              variant: "heading-xl/semibold",
              className: d.tierPrice,
              tag: "div",
              children: (0, s.T4)(m.price, m.currency),
            }),
            (0, r.jsx)(i.Text, {
              variant: "text-xs/normal",
              color: "interactive-normal",
              className: d.tierPeriod,
              children:
                u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                  period: (0, a.JE)({
                    interval: m.interval,
                    interval_count: m.interval_count,
                  }),
                }),
            }),
          ],
        });
      };
    },
    11705: function (e, t, n) {
      n.d(t, {
        e: function () {
          return _;
        },
      }),
        n(47120);
      var r = n(735250);
      n(470079);
      var i = n(481060),
        l = n(765400),
        s = n(937615),
        a = n(817460),
        o = n(290348),
        c = n(367719),
        u = n(882101),
        d = n(689938),
        h = n(603922);
      let _ = (e) => {
        let {
            listingId: t,
            isListingPublished: n,
            expanded: _,
            onToggleExpanded: f,
          } = e,
          E = (0, c.Z)(),
          [p] = o._T(t),
          [m] = o.d9(t, E),
          [I] = o.H9(t);
        return (0, r.jsxs)("div", {
          className: h.container,
          children: [
            (0, r.jsx)(u.BM, { image: m }),
            (0, r.jsxs)("div", {
              className: h.tierTextInfoContainer,
              children: [
                (0, r.jsx)(u.Ey, { listingName: p }),
                (0, r.jsxs)("div", {
                  className: h.tierPriceContainer,
                  children: [
                    !n && (0, r.jsx)(l.v, {}),
                    (0, r.jsxs)(i.Text, {
                      variant: "text-xs/normal",
                      className: h.tierPrice,
                      children: [
                        (0, s.T4)(I.price, I.currency),
                        " ",
                        d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format(
                          {
                            period: (0, a.JE)({
                              interval: I.interval,
                              interval_count: I.interval_count,
                            }),
                          },
                        ),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(i.Clickable, {
              onClick: f,
              children: _
                ? (0, r.jsx)(i.ChevronSmallUpIcon, {
                    size: "md",
                    color: "currentColor",
                    className: h.toggleButton,
                  })
                : (0, r.jsx)(i.ChevronSmallDownIcon, {
                    size: "md",
                    color: "currentColor",
                    className: h.toggleButton,
                  }),
            }),
          ],
        });
      };
    },
    939872: function (e, t, n) {
      n.d(t, {
        m: function () {
          return d;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(442837),
        l = n(481060),
        s = n(17894),
        a = n(430824),
        o = n(313550),
        c = n(689938),
        u = n(673823);
      let d = (e) => {
        let { onClose: t, listing: n, guildId: d } = e,
          h = (0, i.e7)([a.Z], () => a.Z.getGuild(d), [d]),
          _ = (0, o.Z)({ listing: n, guildId: d });
        return (0, r.jsxs)("div", {
          className: u.confirmationContainer,
          children: [
            (0, r.jsx)(l.Heading, {
              className: u.confirmationHeader,
              variant: "heading-lg/extrabold",
              children:
                c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE.format(
                  {
                    serverName: null == h ? void 0 : h.toString(),
                    tierName: n.name,
                  },
                ),
            }),
            !_.isEmpty() &&
              (0, r.jsx)(l.Text, {
                className: u.confirmationSubtitle,
                variant: "text-sm/normal",
                color: "header-secondary",
                children:
                  c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format(
                    { benefits: _.asString() },
                  ),
              }),
            (0, r.jsx)(l.Button, {
              className: u.openDiscordButton,
              onClick: () => (0, s.Z)("role_sub_mweb_success_modal"),
              children:
                c.Z.Messages
                  .GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
            }),
            (0, r.jsx)(l.Button, {
              className: u.doneButton,
              look: l.Button.Looks.BLANK,
              onClick: () => t(!0),
              children:
                c.Z.Messages
                  .GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
            }),
          ],
        });
      };
    },
    265985: function (e, t, n) {
      n.d(t, {
        h: function () {
          return g;
        },
        x: function () {
          return R;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(120356),
        l = n.n(i),
        s = n(442837),
        a = n(481060),
        o = n(596454),
        c = n(131388),
        u = n(409813),
        d = n(430824),
        h = n(73346),
        _ = n(817460),
        f = n(584825),
        E = n(570533),
        p = n(629262),
        m = n(575460),
        I = n(293810),
        C = n(689938),
        S = n(265746);
      let g = (e) => {
          let { onClose: t, listing: n, step: i, guildId: s } = e,
            o = (0, f.YB)(s),
            d = (0, c.Z)(I.Xy),
            _ = (() => {
              var e;
              if (d) return null;
              let t =
                (null == o
                  ? void 0
                  : null === (e = o.cover_image_asset) || void 0 === e
                    ? void 0
                    : e.application_id) != null
                  ? (0, h._W)(
                      o.cover_image_asset.application_id,
                      o.cover_image_asset,
                      440,
                    )
                  : void 0;
              return null == t && i !== u.h8.CONFIRM
                ? null
                : null == t
                  ? (0, r.jsx)("div", { className: S.headerImageEmpty })
                  : (0, r.jsx)("img", {
                      src: t,
                      alt: "",
                      className: S.headerImage,
                    });
            })();
          return (0, r.jsxs)("div", {
            className: l()(S.headerContainer, {
              [S.headerEmpty]: d || null == _,
            }),
            children: [
              _,
              (() => {
                if (i !== u.h8.CONFIRM) return null;
                let e =
                  null == n.image_asset
                    ? void 0
                    : (0, h._W)(n.application_id, n.image_asset, 80);
                return (0, r.jsx)("div", {
                  className: S.tierImageContainer,
                  children: (0, r.jsx)("img", {
                    src: e,
                    alt: "",
                    className: S.tierImage,
                  }),
                });
              })(),
              (0, r.jsx)(a.Clickable, {
                className: S.closeContainer,
                onClick: () => t(!1),
                "aria-label": C.Z.Messages.CLOSE,
                children: (0, r.jsx)(a.XSmallIcon, {
                  size: "md",
                  color: "currentColor",
                  className: S.closeIcon,
                }),
              }),
            ],
          });
        },
        R = (e) => {
          let { onClose: t, listing: n, guildId: i } = e,
            l = (0, s.e7)([d.Z], () => d.Z.getGuild(i), [i]),
            c = (0, E.Z)(i).filter((e) => e.roles.includes(n.role_id)),
            u = n.role_benefits.benefits
              .filter(_.rC)
              .slice(0, null === c.length ? 4 : 3),
            h = (0, p.Z)(u).slice(0, null === c.length ? 4 : 3);
          return (0, r.jsxs)("div", {
            className: S.confirmationContainer,
            children: [
              (0, r.jsx)(a.Heading, {
                className: S.confirmationHeader,
                variant: "heading-xl/semibold",
                color: "header-secondary",
                children:
                  C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format(
                    { serverName: null == l ? void 0 : l.toString() },
                  ),
              }),
              (0, r.jsx)(a.Text, {
                className: S.confirmationSubtitle,
                variant: "text-md/normal",
                color: "header-secondary",
                children:
                  C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                    { tier: n.name },
                  ),
              }),
              h.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(a.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      className: S.confirmationSectionLabel,
                      children:
                        C.Z.Messages
                          .GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW,
                    }),
                    (0, r.jsx)("div", {
                      className: S.confirmationBenefits,
                      children: h.map((e) =>
                        (0, r.jsx)(
                          m.Z,
                          { benefit: e, guildId: i, onClick: () => t(!0) },
                          (0, _.ab)(e),
                        ),
                      ),
                    }),
                  ],
                }),
              (() => {
                var e;
                if (0 === c.length) return null;
                let t = c[0];
                return (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(a.Text, {
                      variant: "text-xs/medium",
                      color: "header-secondary",
                      className: S.confirmationSectionLabel,
                      children:
                        C.Z.Messages
                          .GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE,
                    }),
                    (0, r.jsxs)("div", {
                      className: S.emojiBenefitsRow,
                      children: [
                        (0, r.jsx)(o.Z, {
                          emojiId: t.id,
                          emojiName: t.name,
                          animated:
                            null !== (e = t.animated) && void 0 !== e && e,
                          className: S.emojiImage,
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)(a.Text, {
                              variant: "text-md/medium",
                              color: "header-primary",
                              className: S.emojiName,
                              children:
                                C.Z.Messages
                                  .GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT,
                            }),
                            (0, r.jsx)(a.Text, {
                              color: "interactive-normal",
                              variant: "text-sm/normal",
                              children:
                                C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format(
                                  { count: c.length },
                                ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
              })(),
              (0, r.jsx)(a.Button, {
                className: S.confirmationButton,
                onClick: () => t(!0),
                children:
                  C.Z.Messages
                    .GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
              }),
            ],
          });
        };
    },
    575460: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(481060),
        l = n(259580),
        s = n(528027),
        a = n(686807),
        o = n(113318),
        c = n(131809);
      function u(e) {
        let { benefit: t, guildId: n, onClick: u } = e,
          d = (0, o.Z)(n, t.ref_id),
          h = (0, r.jsx)(s.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name,
          });
        return (0, r.jsxs)(i.Clickable, {
          className: c.container,
          onClick: () => {
            null == d || d.navigateToChannel(), u();
          },
          "aria-label": null == d ? void 0 : d.ariaLabel,
          role: "link",
          children: [
            (0, r.jsx)("div", { className: c.emojiContainer, children: h }),
            (0, r.jsxs)("div", {
              className: c.infoContainer,
              children: [
                (0, r.jsx)(i.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  className: c.name,
                  children: (0, a.Z)(t),
                }),
                (0, r.jsx)(i.Text, {
                  color: "interactive-normal",
                  variant: "text-sm/normal",
                  children: t.description,
                }),
              ],
            }),
            (0, r.jsx)(l.Z, {
              direction: l.Z.Directions.RIGHT,
              className: c.caret,
            }),
          ],
        });
      }
    },
    81273: function (e, t, n) {
      var r = n(735250),
        i = n(470079),
        l = n(512722),
        s = n.n(l),
        a = n(913527),
        o = n.n(a),
        c = n(442837),
        u = n(570140),
        d = n(821849),
        h = n(131388),
        _ = n(906732),
        f = n(305325),
        E = n(246364),
        p = n(937111),
        m = n(281956),
        I = n(41776),
        C = n(738737),
        S = n(509545),
        g = n(63063),
        R = n(817460),
        T = n(584825),
        N = n(697227),
        x = n(934826),
        v = n(896083),
        O = n(939872),
        b = n(265985),
        L = n(293810),
        A = n(981631),
        P = n(689938);
      t.Z = (e, t, n, l) => {
        let a;
        let Z = (0, c.e7)([I.Z], () => I.Z.isLurking(t)),
          y = (0, m.J)(t),
          M = (0, c.e7)([p.Z], () => (null != t ? p.Z.getRequest(t) : null)),
          j = (null == M ? void 0 : M.applicationStatus) === E.wB.SUBMITTED,
          U = null == e ? void 0 : e.subscription_plans[0],
          D = null == U ? void 0 : U.id,
          B = (null == e ? void 0 : e.published) === !0,
          F = null == U ? void 0 : U.sku_id,
          k = (0, c.e7)([S.Z], () => (null != D ? S.Z.get(D) : null)),
          { activeSubscription: H, activeSubscriptionPlanFromStore: w } = (0,
          x.Z)(n),
          G = null == H || null != w,
          z = (0, T._k)(n, { includeSoftDeleted: !0 }).map(
            (e) => e.subscription_plans[0].id,
          ),
          W = (0, N.V)(H),
          V = null != W,
          K = (null == H ? void 0 : H.trialId) != null,
          { loading: Y, getTrialPurchaseEligibility: Q } = (0, v.F)(),
          q = (0, T.oC)(null == e ? void 0 : e.id),
          { analyticsLocations: X } = (0, _.ZP)(),
          J = (null == H ? void 0 : H.paymentGateway) === A.gg$.APPLE_PARTNER;
        j
          ? (a = P.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER)
          : Z && !y
            ? (a =
                P.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER)
            : W === D
              ? (a =
                  P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format(
                    {
                      changeDate:
                        null != H
                          ? o()(H.currentPeriodEnd).format("MMM DD, YYYY")
                          : "",
                    },
                  ))
              : V
                ? (a =
                    P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION)
                : K
                  ? (a =
                      P.Z.Messages
                        .GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL)
                  : J &&
                    (a =
                      P.Z.Messages
                        .GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
        let $ = (0, h.Z)(L.iP);
        i.useEffect(() => {
          B &&
            null != F &&
            u.Z.wait(() => {
              (0, d.GZ)(F);
            });
        }, [B, F]);
        let ee = i.useCallback(async () => {
            let n, i;
            if (
              (s()(null != e, "No subscription listing"),
              s()(null != U, "No subscription plan"),
              s()(B, "Cannot purchase this unpublished plan"),
              (null == q ? void 0 : q.active_trial) != null)
            ) {
              let r = await Q(t, e.id, q.active_trial.id);
              if ((null == r ? void 0 : r.is_eligible) === !0) {
                var a;
                n =
                  null == q
                    ? void 0
                    : null === (a = q.active_trial) || void 0 === a
                      ? void 0
                      : a.id;
              } else
                i =
                  P.Z.Messages
                    .GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER;
            }
            (0, C.Z)({
              activeSubscription: H,
              analyticsSubscriptionType: A.NYc.GUILD,
              trialId: n,
              trialFooterMessageOverride:
                (null == q ? void 0 : q.active_trial) != null
                  ? P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format(
                      {
                        buttonText:
                          P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
                        interval: (0, R.iG)(U),
                        days: 1,
                        contactLink: A.EYA.CONTACT,
                        cancelSubscriptionArticle: g.Z.getArticleURL(
                          A.BhN.ROLE_SUBSCRIPTION_CANCEL,
                        ),
                        helpdeskArticle: g.Z.getArticleURL(
                          A.BhN.ROLE_SUBSCRIPTION_TRIAL,
                        ),
                        paidServiceTermsArticle: g.Z.getArticleURL(
                          A.BhN.PAID_TERMS,
                        ),
                        tierName: U.name,
                      },
                    )
                  : void 0,
              analyticsLocations: X,
              analyticsLocation: l,
              renderHeader: (n, i, l) =>
                (0, r.jsx)(b.h, {
                  onClose: i,
                  listing: e,
                  step: l,
                  guildId: t,
                }),
              initialPlanId: U.id,
              skuId: U.sku_id,
              planGroup: z,
              renderPurchaseConfirmation: (n, i) =>
                $
                  ? (0, r.jsx)(O.m, { listing: e, onClose: i, guildId: t })
                  : (0, r.jsx)(b.x, { listing: e, onClose: i, guildId: t }),
              reviewWarningMessage: i,
            });
          }, [B, e, U, H, z, t, X, l, Q, q, $]),
          et = i.useCallback(() => {
            (0, f.hk)(t);
          }, [t]);
        return {
          openModal: y ? et : ee,
          canOpenModal: !Z && null != k && G && !j && !V && !K && !J,
          cannotOpenReason: a,
          isCheckingTrialEligibility: Y,
        };
      };
    },
    113318: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(442837),
        i = n(201895),
        l = n(557135),
        s = n(703656),
        a = n(592125),
        o = n(979651),
        c = n(66999),
        u = n(981631);
      function d(e, t) {
        let n = (0, r.e7)([a.Z], () => a.Z.getChannel(t)),
          { needSubscriptionToAccess: d } = (0, c.Z)(null == n ? void 0 : n.id);
        if (null == n || d) return null;
        let h = n.isGuildVocal(),
          _ = (0, i.ZP)({ channel: n });
        return {
          navigateToChannel: () => {
            h
              ? l.Z.handleVoiceConnect({
                  channel: n,
                  connected: o.Z.isInChannel(n.id),
                  needSubscriptionToAccess: !1,
                  routeDirectlyToChannel: !0,
                })
              : (0, s.uL)(u.Z5c.CHANNEL(e, n.id));
          },
          ariaLabel: _,
        };
      }
    },
    984370: function (e, t, n) {
      n.d(t, {
        O: function () {
          return x;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(120356),
        l = n.n(i),
        s = n(873546),
        a = n(100527),
        o = n(906732),
        c = n(174556),
        u = n(320007),
        d = n(540059),
        h = n(141321),
        _ = n(2818),
        f = n(954551),
        E = n(208450),
        p = n(358085),
        m = n(998502),
        I = n(665149),
        C = n(300986),
        S = n(314451),
        g = n(35583),
        R = n(981631),
        T = n(176505),
        N = n(228856);
      async function x() {
        if ((0, p.isMac)() && p.isPlatformEmbedded) {
          var e, t, n;
          let r =
            null !==
              (n = await (null ===
                (e = (t = window.DiscordNative.remoteApp)
                  .getDefaultDoubleClickAction) || void 0 === e
                ? void 0
                : e.call(t))) && void 0 !== n
              ? n
              : "Maximize";
          "Minimize" === r
            ? m.ZP.minimize()
            : "Maximize" === r && m.ZP.maximize();
        }
      }
      function v(e) {
        let {
            children: t,
            className: n,
            channelId: i,
            guildId: l,
            innerClassname: a,
            transparent: o = !1,
            toolbar: p,
            mobileToolbar: m,
            "aria-label": R,
            "aria-labelledby": T,
            scrollable: v,
            role: O,
            hideSearch: b,
            showDivider: L,
          } = e,
          { hasBugReporterAccess: A } = c.Z.useExperiment(
            { location: "HeaderBar" },
            { autoTrackExposure: !1 },
          ),
          { enabled: P, inInbox: Z } = _.Z.useExperiment({
            location: "HeaderBar",
          }),
          y = (0, d.Q)("HeaderBar");
        return (0, r.jsx)(I.ZP, {
          className: n,
          innerClassName: a,
          toolbar: (function () {
            if (null == p) return null;
            let e = null != i && !b;
            return s.tq
              ? m
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    p,
                    e
                      ? (0, r.jsx)(
                          E.Z,
                          { className: N.search },
                          null != l ? l : i,
                        )
                      : null,
                    L && (0, r.jsx)(I.ZP.Divider, {}),
                    !y && (0, r.jsx)(g.Z, {}),
                    (0, r.jsx)(u.Z, { canShowReminder: !0 }),
                    !y && (0, r.jsx)(h.Z, {}),
                    P && !Z ? (0, r.jsx)(f.Z, {}) : null,
                    !y && (A ? (0, r.jsx)(S.Z, {}) : (0, r.jsx)(C.Z, {})),
                  ],
                });
          })(),
          transparent: o,
          onDoubleClick: x,
          "aria-label": R,
          "aria-labelledby": T,
          role: O,
          scrollable: v,
          children: t,
        });
      }
      function O(e) {
        let {
          children: t,
          className: n,
          "aria-label": i,
          "aria-labelledby": l,
          role: s,
        } = e;
        return (0, r.jsx)(I.ZP, {
          className: n,
          onDoubleClick: x,
          "aria-label": i,
          "aria-labelledby": l,
          role: s,
          children: t,
        });
      }
      function b(e) {
        let { isAuthenticated: t = !0, ...n } = e,
          { analyticsLocations: i } = (0, o.ZP)(a.Z.HEADER_BAR),
          s = l()(n.className, {
            [N.forumOrHome]:
              (null != n.channelType &&
                R.TPd.GUILD_THREADS_ONLY.has(n.channelType)) ||
              n.channelId === T.oC.GUILD_HOME,
          });
        return (0, r.jsx)(o.Gt, {
          value: i,
          children: t
            ? (0, r.jsx)(v, { ...n, className: s })
            : (0, r.jsx)(O, { ...n, className: s }),
        });
      }
      (b.Title = I.ZP.Title),
        (b.Icon = I.ZP.Icon),
        (b.Divider = I.ZP.Divider),
        (b.Caret = I.ZP.Caret),
        (t.Z = b);
    },
    823162: function (e, t, n) {
      n.d(t, {
        Xy: function () {
          return u;
        },
        e4: function () {
          return o;
        },
        gN: function () {
          return d;
        },
        hi: function () {
          return _;
        },
        qR: function () {
          return c;
        },
        r_: function () {
          return h;
        },
      });
      var r = n(544891),
        i = n(570140),
        l = n(893776),
        s = n(290323),
        a = n(981631);
      async function o(e) {
        await r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(e),
          body: { consent_status: s.h.ACCEPTED },
        }),
          i.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
          });
      }
      function c(e) {
        return r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(e),
          body: { consent_status: s.h.UNSPECIFIED },
        });
      }
      function u(e) {
        return r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(e),
          body: { consent_status: s.h.PENDING },
        });
      }
      function d(e) {
        return r.tn.del({ url: a.ANM.CHANNEL_RECIPIENT_ME(e) });
      }
      function h(e) {
        return r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: e },
        });
      }
      function _() {
        l.Z.getLocationMetadata();
      }
    },
    290323: function (e, t, n) {
      var r, i;
      n.d(t, {
        h: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.PENDING = 1)] = "PENDING"),
        (i[(i.ACCEPTED = 2)] = "ACCEPTED"),
        (i[(i.REJECTED = 3)] = "REJECTED");
    },
    610697: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(470079),
        i = n(442837),
        l = n(594174),
        s = n(823162),
        a = n(355298);
      let o = new Set(["GB"]);
      function c() {
        let e = (0, i.e7)([a.Z], () => a.Z.getUserCountryCode()),
          t =
            !1 ===
            (0, i.e7)([l.default], () => {
              var e;
              return null === (e = l.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.nsfwAllowed;
            });
        return (
          r.useEffect(() => {
            null == e && (0, s.hi)();
          }, [e]),
          (!!(null != e && o.has(e.alpha2)) && !!t) || !1
        );
      }
    },
    738737: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(481060),
        l = n(987209),
        s = n(981631);
      function a(e) {
        let {
          initialPlanId: t,
          activeSubscription: a,
          trialId: o,
          trialFooterMessageOverride: c,
          onClose: u,
          analyticsObject: d,
          analyticsLocation: h,
          analyticsLocations: _,
          analyticsSubscriptionType: f,
          renderHeader: E,
          renderPurchaseConfirmation: p,
          planGroup: m,
          reviewWarningMessage: I,
          skuId: C,
        } = e;
        (0, i.openModalLazy)(
          async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(
                n.bind(n, 598),
              ),
              { PaymentModal: i } = await Promise.all([
                n.e("52249"),
                n.e("72652"),
                n.e("32776"),
                n.e("4747"),
              ]).then(n.bind(n, 791785)),
              { STEPS: s } = await Promise.all([
                n.e("96427"),
                n.e("52249"),
                n.e("54803"),
                n.e("15685"),
                n.e("72652"),
                n.e("32776"),
                n.e("79915"),
                n.e("8016"),
                n.e("68136"),
                n.e("51199"),
                n.e("76752"),
              ]).then(n.bind(n, 7305));
            return (n) => {
              let { onClose: S, ...g } = n;
              return (0, r.jsx)(e, {
                activeSubscription: a,
                stepConfigs: s,
                skuIDs: [C],
                children: (0, r.jsx)(l.KB, {
                  children: (0, r.jsx)(i, {
                    ...g,
                    initialPlanId: t,
                    onClose: (e) => {
                      S(), null == u || u(e);
                    },
                    analyticsLocations: _,
                    analyticsObject: d,
                    analyticsLocation: h,
                    analyticsSubscriptionType: f,
                    skuId: C,
                    renderHeader: E,
                    renderPurchaseConfirmation: p,
                    planGroup: m,
                    trialId: o,
                    trialFooterMessageOverride: c,
                    reviewWarningMessage: I,
                  }),
                }),
              });
            };
          },
          {
            onCloseCallback: () => {
              null == u || u(!1);
            },
            onCloseRequest: s.dG4,
          },
        );
      }
    },
    144114: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r,
        i,
        l = n(990547),
        s = n(544891),
        a = n(570140),
        o = n(314897),
        c = n(573261),
        u = n(815660),
        d = n(981631);
      ((r = i || (i = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (r.USER_SETTINGS_UPDATE = "user_settings_update"),
        (r.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (r.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (r.CONTACT_SYNC = "contact_sync"),
        (t.Z = {
          setCountryCode(e) {
            a.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, t) =>
            s.tn.del({
              url: d.ANM.PHONE,
              body: { password: e, change_phone_reason: t },
              oldFormErrors: !0,
            }),
          resendCode(e) {
            let t = {},
              n = o.default.getFingerprint();
            return (
              null != n && "" !== n && (t["X-Fingerprint"] = n),
              s.tn.post({
                url: d.ANM.RESEND_PHONE,
                headers: t,
                body: { phone: e },
              })
            );
          },
          beginAddPhone: (e, t) =>
            s.tn.post({
              url: d.ANM.PHONE,
              body: { phone: e, change_phone_reason: t },
            }),
          addPhone: (e, t, n) =>
            s.tn.post({
              url: d.ANM.PHONE,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          addPhoneWithoutPassword: (e) =>
            s.tn.post({
              url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
            }),
          beginReverifyPhone: (e, t) =>
            s.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: t },
            }),
          reverifyPhone: (e, t, n) =>
            s.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          validatePhoneForSupport: (e) =>
            s.tn.post({
              url: d.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
            }),
          async verifyPhone(e, t) {
            let n =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              i = {},
              s = o.default.getFingerprint();
            null != s && "" !== s && (i["X-Fingerprint"] = s),
              r && (i.authorization = "");
            let h = await c.Z.post({
              url: d.ANM.VERIFY_PHONE,
              headers: i,
              body: { phone: e, code: t },
              oldFormErrors: !0,
              trackedActionData: {
                event: l.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return n && a.Z.dispatch({ type: "MODAL_POP", key: u.M }), h.body;
          },
        });
    },
    815660: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
        z: function () {
          return i;
        },
      });
      let r = "PHONE_VERIFICATION_MODAL_KEY",
        i = 6;
    },
    504983: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return i;
        },
      });
      var r,
        i,
        l = n(735250),
        s = n(470079),
        a = n(120356),
        o = n.n(a),
        c = n(261842);
      ((r = i || (i = {})).PREMIUM = "premium"), (r.LIMITED = "limited");
      let u = {
        premium: {
          border: c.premiumFeatureBorder,
          background: c.premiumBackground,
        },
        limited: {
          border: c.limitedFeatureBorder,
          background: c.limitedBackground,
        },
      };
      t.Z = s.forwardRef(function (e, t) {
        let {
          children: n,
          type: r = "premium",
          isShown: i,
          hasBackground: s = !1,
          className: a,
          backgroundClassName: d,
        } = e;
        if (!i) return (0, l.jsx)(l.Fragment, { children: n });
        let { border: h, background: _ } = u[r];
        return (0, l.jsx)("div", {
          ref: t,
          className: o()(h, a),
          children: (0, l.jsx)("div", {
            className: o()(s ? _ : c.background, d),
            children: n,
          }),
        });
      });
    },
    911367: function (e, t, n) {
      n.d(t, {
        t: function () {
          return l;
        },
      });
      var r = n(470079),
        i = n(365943);
      function l() {
        r.useEffect(() => {
          (0, i.z)();
        }, []);
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
      var r,
        i = n(442837),
        l = n(253135),
        s = n(570140),
        a = n(709054);
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
      let c = {};
      class u extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          var t;
          c =
            null !== (t = null == e ? void 0 : e.users) && void 0 !== t
              ? t
              : {};
        }
        getState() {
          return { users: c };
        }
        getKeyTrustedAt(e, t) {
          var n;
          let r = (0, l.MK)(t);
          return null === (n = c[e]) || void 0 === n ? void 0 : n[r];
        }
        isKeyVerified(e, t) {
          return null != this.getKeyTrustedAt(e, t);
        }
        getUserIds() {
          return a.default.keys(c);
        }
        getUserVerifiedKeys(e) {
          return c[e];
        }
      }
      o(u, "displayName", "VerifiedKeyStore"),
        o(u, "persistKey", "VerifiedKeyStore"),
        (t.Z = new u(s.Z, {
          SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = (function (e) {
                var t;
                let n = null !== (t = c[e]) && void 0 !== t ? t : {};
                return (c[e] = n), n;
              })(t),
              i = new Uint8Array(n);
            r[(0, l.MK)(i)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              r = c[t];
            if (null == r) return !1;
            let i = delete r[n],
              l = !1;
            return (
              0 === Object.keys(r).length && (delete c[t], (l = !0)), i || l
            );
          },
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != c[t] && delete c[t];
          },
        }));
    },
    954551: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(481060),
        l = n(665149),
        s = n(388035),
        a = n(453473),
        o = n(689938);
      function c(e) {
        let { onOpen: t, onClose: n, className: c } = e;
        return (0, r.jsx)(a.P, {
          onOpen: t,
          onClose: n,
          popoutPosition: "bottom",
          popoutAlign: "right",
          children: (e, t, n, a) =>
            (0, r.jsx)(s.U, {
              location: "bookmarks-button",
              children: (0, r.jsx)(l.JO, {
                ...n,
                className: c,
                onClick: e,
                icon: i.BookmarkIcon,
                "aria-label": o.Z.Messages.FOR_LATER,
                tooltip: t ? null : o.Z.Messages.FOR_LATER,
                selected: t,
                showBadge: a,
                badgePosition: "top",
              }),
            }),
        });
      }
    },
    854709: function (e, t, n) {
      n.d(t, {
        X: function () {
          return i;
        },
      });
      var r = n(594174);
      function i() {
        var e, t;
        return (
          null !==
            (t =
              null === (e = r.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.isStaff()) &&
          void 0 !== t &&
          t
        );
      }
    },
    208450: function (e, t, n) {
      n(757143);
      var r = n(735250),
        i = n(470079),
        l = n(120356),
        s = n.n(l),
        a = n(371917),
        o = n(299608),
        c = n.n(o),
        u = n(442837),
        d = n(481060),
        h = n(603263),
        _ = n(461745),
        f = n(349033),
        E = n(999650),
        p = n(857595),
        m = n(607070),
        I = n(367907),
        C = n(313201),
        S = n(592125),
        g = n(984933),
        R = n(768119),
        T = n(944486),
        N = n(585483),
        x = n(72006),
        v = n(405656),
        O = n(181389),
        b = n(854709),
        L = n(778177),
        A = n(981631),
        P = n(689938),
        Z = n(948488);
      function y(e, t, n) {
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
      n(49637);
      let M = (0, C.hQ)(),
        j = c()(h.yC, 500);
      class U extends i.PureComponent {
        componentDidMount() {
          var e, t;
          N.S.subscribe(A.CkL.PERFORM_SEARCH, this.search),
            N.S.subscribe(A.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            N.S.subscribe(A.CkL.FOCUS_SEARCH, this.handleFocusSearch),
            null === (t = this._editorRef) ||
              void 0 === t ||
              null === (e = t.editor) ||
              void 0 === e ||
              e.setAttribute("aria-haspopup", "listbox");
        }
        componentDidUpdate(e) {
          let { editorState: t, searchId: n } = this.props;
          if (t !== e.editorState) {
            let e = v.kG(x.Sq(t)),
              r = O.g9(e, t);
            h.u$(n, e, r),
              null != this._editorRef && x.iE(this._editorRef.editor);
          }
        }
        componentWillUnmount() {
          N.S.unsubscribe(A.CkL.PERFORM_SEARCH, this.search),
            N.S.unsubscribe(A.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            N.S.unsubscribe(A.CkL.FOCUS_SEARCH, this.handleFocusSearch);
        }
        tokenize(e) {
          let t = v.kG(x.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
          return x.lv(t, e, E.ZP);
        }
        clearSearch() {
          let { searchId: e } = this.props;
          null != e && h.qt(e);
        }
        handlePastedFiles() {
          return !0;
        }
        handleDroppedFiles() {
          return !0;
        }
        handleDrop() {
          return !0;
        }
        renderInput(e) {
          let { editorState: t } = this.props;
          return (0, r.jsx)(a.Editor, {
            autoCorrect: "off",
            ref: this.setEditorRef,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            handleReturn: this.handleReturn,
            handleBeforeInput: this.handleBeforeInput,
            handleKeyCommand: this.handleKeyCommand,
            handlePastedText: this.handlePastedText,
            handlePastedFiles: this.handlePastedFiles,
            handleDroppedFiles: this.handleDroppedFiles,
            handleDrop: this.handleDrop,
            keyBindingFn: this.handleKeyBind,
            placeholder: P.Z.Messages.SEARCH,
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? M : void 0,
            ariaLabel: P.Z.Messages.SEARCH,
            ariaAutocomplete: "list",
          });
        }
        render() {
          let {
              searchId: e,
              editorState: t,
              hasResults: n,
              className: i,
            } = this.props,
            { focused: l } = this.state,
            a = x.Sq(t).length > 0;
          return null == e
            ? null
            : (0, r.jsx)(d.Popout, {
                renderPopout: this.renderPopout,
                position: "bottom",
                animation: d.Popout.Animation.NONE,
                shouldShow: l,
                autoInvert: !1,
                children: (t, o) => {
                  var c;
                  let { isShown: u } = o;
                  return (0, r.jsx)("div", {
                    className: i,
                    children: (0, r.jsx)("div", {
                      className: s()(Z.search, {
                        [Z.open]: a || l,
                        [Z.focused]: l,
                      }),
                      children: (0, r.jsx)(d.FocusRing, {
                        focusTarget: {
                          current:
                            null === (c = this._editorRef) || void 0 === c
                              ? void 0
                              : c.editor,
                        },
                        ringTarget: this._searchBarRef,
                        children: (0, r.jsxs)(
                          "div",
                          {
                            className: Z.searchBar,
                            ref: this._searchBarRef,
                            children: [
                              this.renderInput(u),
                              (0, r.jsx)(_.BK, {
                                onClear: this.handleClearSearch,
                                hasContent: a || n,
                                className: Z.icon,
                              }),
                            ],
                          },
                          e,
                        ),
                      }),
                    }),
                  });
                },
              });
        }
        constructor(e) {
          super(e),
            y(this, "state", { focused: !1, selectedIndex: void 0 }),
            y(this, "_editorRef", void 0),
            y(this, "_searchBarRef", i.createRef()),
            y(this, "_searchPopoutRef", i.createRef()),
            y(this, "handleSetSearchQuery", (e) => {
              let {
                  query: t,
                  anchor: n,
                  focus: r,
                  performSearch: i,
                  replace: l,
                } = e,
                { editorState: s } = this.props,
                a = x.Sq(s);
              " " !== t.charAt(t.length - 1) && (t += " "),
                null != n &&
                  0 !== n &&
                  " " !== a.charAt(n - 1) &&
                  " " !== t.charAt(0) &&
                  (t = " " + t),
                l ? ((s = x.c2(t, s)), (n = 0)) : (s = x.x0(t, s, n, r)),
                (s = x.Hl(s, 512)),
                (s = this.tokenize(s));
              let o = Number(n) + t.length;
              (s = x.iK(o, s)),
                this.setEditorState(s),
                i && this.search({ queryString: x.Sq(s) });
            }),
            y(this, "handleSelectedIndexChanged", (e) => {
              var t, n;
              null === (n = this._editorRef) ||
                void 0 === n ||
                null === (t = n.editor) ||
                void 0 === t ||
                t.setAttribute(
                  "aria-activedescendant",
                  null != e ? "".concat(M, "-").concat(e) : void 0,
                ),
                this.setState({ selectedIndex: e });
            }),
            y(this, "renderPopout", () =>
              (0, r.jsx)(L.ZP, {
                ref: this._searchPopoutRef,
                navId: M,
                onSelectedIndexChanged: this.handleSelectedIndexChanged,
              }),
            ),
            y(this, "search", (e) => {
              let { searchId: t, isSearching: n } = this.props,
                { queryString: r, searchEverywhere: i } = null != e ? e : {};
              if (null == r || "" === r) {
                let { editorState: e } = this.props;
                r = x.Sq(e);
              }
              if (null != t && !n) {
                let e = v.kG(r),
                  n = v.$G(e);
                for (let t = 0; t < e.length; t++)
                  !v.Fr(e[t], e[t + 1]) &&
                    (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                if (0 === e.length || 0 === Object.keys(n).length) return !1;
                j(t, n, r, !!i),
                  d.AccessibilityAnnouncer.announce(
                    P.Z.Messages.SEARCH_STARTED_A11Y_ANNOUNCE,
                  ),
                  this.onBlur();
              }
              return !0;
            }),
            y(this, "handleClearSearch", (e) => {
              let { editorState: t } = this.props,
                { focused: n } = this.state;
              if ((e.preventDefault(), e.stopPropagation(), "" === x.Sq(t))) {
                this.focusEditor();
                return;
              }
              (t = x.Hl(t, 0)),
                this.setEditorState(t),
                !n && Promise.resolve().then(() => this.blurEditor());
            }),
            y(this, "handleFocusSearch", (e) => {
              let { prefillCurrentChannel: t } = e;
              if (!t) {
                this.focusEditor();
                return;
              }
              let n = T.Z.getChannelId(),
                r = S.Z.getChannel(n);
              if (
                ((null == r ? void 0 : r.isThread()) &&
                  (r = S.Z.getChannel(null == r ? void 0 : r.parent_id)),
                null == r || r.isPrivate())
              ) {
                this.focusEditor();
                return;
              }
              let i = g.ZP.getTextChannelNameDisambiguations(r.getGuildId())[
                  r.id
                ],
                l = null != i ? i.name : r.name;
              Promise.resolve().then(() => {
                let { _editorRef: e } = this;
                null == e || e.focus(),
                  this.handleSetSearchQuery({
                    query: E.ZP[A.dCx.FILTER_IN].key + "#".concat(l, " "),
                    replace: !0,
                  });
              });
            }),
            y(this, "focusEditor", () => {
              let { _editorRef: e } = this;
              null != e && Promise.resolve().then(() => e.focus());
            }),
            y(this, "blurEditor", () => {
              let { _editorRef: e } = this;
              null != e && Promise.resolve().then(() => e.blur());
            }),
            y(this, "setEditorRef", (e) => {
              this._editorRef = e;
            }),
            y(this, "onFocus", () => {
              let { searchType: e } = this.props;
              I.ZP.trackWithMetadata(A.rMx.SEARCH_OPENED, { search_type: e }),
                this.setState({ focused: !0 });
            }),
            y(this, "onBlur", () => {
              this.setState({ focused: !1 }, () => {
                x.xb(this.props.editorState) && this.clearSearch();
              });
            }),
            y(this, "handleReturn", (e) => {
              let { shiftKey: t } = e;
              e.preventDefault();
              let { current: n } = this._searchPopoutRef;
              return (
                !(null != n && n.selectOption()) &&
                  ((0, b.X)() && t
                    ? this.search({ searchEverywhere: !0 })
                    : this.search()),
                !0
              );
            }),
            y(this, "handleBeforeInput", (e) => {
              let { editorState: t } = this.props,
                { focused: n } = this.state;
              return (
                !!(x.Sq(t).length >= 512) ||
                ((t = x.x0(e, t)),
                (t = x.Hl(t, 512)),
                (t = this.tokenize(t)),
                this.setEditorState(t),
                !n && this.setState({ focused: !0 }),
                !0)
              );
            }),
            y(this, "handleKeyCommand", (e) => {
              let { editorState: t } = this.props,
                { focused: n } = this.state;
              switch (e) {
                case "backspace":
                case "backspace-word":
                case "backspace-to-start-of-line":
                case "delete":
                case "delete-word":
                  return (
                    (t = x.yd(e, t)),
                    (t = this.tokenize(t)),
                    this.setEditorState(t),
                    !n && this.setState({ focused: !0 }),
                    !0
                  );
                case "transpose-characters":
                case "move-selection-to-start-of-block":
                case "move-selection-to-end-of-block":
                  return (
                    (t = x.Zn(e, t)),
                    (t = this.tokenize(t)),
                    this.setEditorState(t),
                    !0
                  );
                case "split-block":
                case "underline":
                case "bold":
                case "italic":
                  return !0;
              }
            }),
            y(this, "handlePastedText", (e) => {
              let { editorState: t } = this.props,
                { focused: n } = this.state;
              return (
                (e = null != e ? e.replace(/\n/g, "") : ""),
                (t = x.x0(e, t)),
                (t = x.Hl(t, 512)),
                (t = this.tokenize(t)),
                !n && this.setState({ focused: !0 }),
                this.setEditorState(t),
                !0
              );
            }),
            y(this, "setEditorState", (e) => {
              let { searchId: t } = this.props;
              h.j8(t, e);
            }),
            y(this, "handleKeyBind", (e) => {
              let { key: t, metaKey: n, shiftKey: r } = e,
                {
                  editorState: i,
                  searchId: l,
                  keyboardModeEnabled: s,
                } = this.props;
              if ((e.stopPropagation(), "Escape" === t)) {
                if ((e.preventDefault(), x.xb(i))) this.blurEditor();
                else {
                  let e = x.FZ(i);
                  h.j8(l, e), this.setState({ focused: !0 });
                }
                return !0;
              }
              if ("ArrowUp" === t) {
                e.preventDefault();
                let { current: t } = this._searchPopoutRef;
                return null != t && t.focusPreviousOption(), !0;
              }
              if ("ArrowDown" === t) {
                e.preventDefault();
                let { current: t } = this._searchPopoutRef;
                return null != t && t.focusNextOption(), !0;
              }
              if ("Tab" === t) {
                if (s) return;
                return (0, p.Qj)(), !0;
              }
              if ("Home" === t || ("ArrowLeft" === t && n))
                return (
                  e.preventDefault(),
                  (i = r ? x.R8(i) : x.eE(i)),
                  this.setEditorState(i),
                  !0
                );
              if ("End" === t || ("ArrowRight" === t && n))
                return (
                  e.preventDefault(),
                  (i = r ? x.Wg(i) : x.NJ(i)),
                  this.setEditorState(i),
                  !0
                );
              if (("Delete" === t || "Backspace" === t) && n) {
                let e = x.FZ(i);
                return this.setEditorState(e), !0;
              }
              return x.q0(e);
            }),
            v.WU();
        }
      }
      t.Z = u.ZP.connectStores([m.Z, R.Z], () => {
        var e;
        let t = R.Z.getCurrentSearchId(),
          n = R.Z.getSearchType(),
          r = null != t && R.Z.isSearching(t),
          i =
            null != t && null !== (e = R.Z.getEditorState(t)) && void 0 !== e
              ? e
              : x.nR(O.Jl(E.ZP)),
          l = m.Z.keyboardModeEnabled;
        return {
          searchId: t,
          searchType: n,
          isSearching: r,
          editorState: i,
          hasResults: R.Z.hasResults(t),
          keyboardModeEnabled: l,
        };
      })(U);
    },
    778177: function (e, t, n) {
      n(47120);
      var r = n(735250),
        i = n(470079),
        l = n(120356),
        s = n.n(l),
        a = n(512722),
        o = n.n(a),
        c = n(392711),
        u = n.n(c),
        d = n(913527),
        h = n.n(d),
        _ = n(608787),
        f = n(442837),
        E = n(481060),
        p = n(603263),
        m = n(542051),
        I = n(349033),
        C = n(999650),
        S = n(933557),
        g = n(471445),
        R = n(592125),
        T = n(271383),
        N = n(699516),
        x = n(250758),
        v = n(944486),
        O = n(914010),
        b = n(246946),
        L = n(594174),
        A = n(585483),
        P = n(63063),
        Z = n(405656),
        y = n(51144),
        M = n(854709),
        j = n(981631),
        U = n(689938),
        D = n(973050);
      function B(e, t, n) {
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
      let F = h()("2015-05-15").local(),
        k = (0, _.Un)({
          createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
          webpackId: 547800,
        }),
        H = (e, t, n) => {
          var i, l, s;
          let { user: a, text: o } = n;
          if (null == a) return (0, r.jsx)("strong", { children: o });
          let c = L.default.getUser(a.id),
            u = R.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate())
              ? N.Z.getNickname(a.id)
              : null,
            h =
              null !==
                (l =
                  null !== (i = T.ZP.getNick(e, a.id)) && void 0 !== i
                    ? i
                    : d) && void 0 !== l
                ? l
                : y.ZP.getName(a),
            _ =
              null !== (s = null == c ? void 0 : c.getAvatarURL(e, 20)) &&
              void 0 !== s
                ? s
                : a.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
          return [
            (0, r.jsx)(
              "img",
              { alt: "", className: D.displayAvatar, src: _ },
              "avatar-".concat(t, "-").concat(a.id),
            ),
            (0, r.jsx)(
              "span",
              { className: D.displayedNick, children: h },
              "display-nick-".concat(t, "-").concat(a.id),
            ),
            (0, r.jsx)(
              "span",
              {
                className: D.displayUsername,
                children: y.ZP.getUserTag(a, {
                  identifiable:
                    b.Z.enabled && b.Z.hidePersonalInformation
                      ? "never"
                      : "always",
                }),
              },
              "display-username-".concat(t, "-").concat(a.id),
            ),
          ];
        },
        w = (e, t, n) => {
          let { channel: i, text: l } = n;
          if (null == i) return (0, r.jsx)("strong", { children: l });
          let s = R.Z.getChannel(i.parent_id),
            a = (0, g.KS)(i);
          return (0, r.jsxs)("div", {
            className: D.resultChannel,
            children: [
              null != a
                ? (0, r.jsx)(a, { className: D.searchResultChannelIcon })
                : null,
              (0, r.jsx)("strong", { children: (0, S.F6)(i, L.default, N.Z) }),
              null != s
                ? (0, r.jsx)("span", {
                    className: D.searchResultChannelCategory,
                    children: (0, S.F6)(s, L.default, N.Z),
                  })
                : null,
            ],
          });
        },
        G = (e) => {
          let t,
            n,
            {
              id: i,
              searchId: l,
              result: a,
              group: o,
              className: c,
              role: u,
              tabIndex: d,
              "aria-selected": h,
              onSelect: _,
              onFocus: f,
              showFilter: p,
              renderResult: m,
            } = e;
          if (p) {
            var I, S;
            t = (0, r.jsx)("span", {
              className: D.filter,
              children:
                null !==
                  (S =
                    null === (I = C.ZP[o]) || void 0 === I ? void 0 : I.key) &&
                void 0 !== S
                  ? S
                  : "addme:",
            });
          }
          return (
            (n =
              null != m
                ? m(l, o, a)
                : (0, r.jsx)("strong", { children: a.text })),
            (0, r.jsxs)(E.Clickable, {
              tag: "li",
              className: s()(D.option, c),
              onClick: _,
              onFocus: f,
              id: i,
              role: u,
              tabIndex: d,
              "aria-selected": h,
              children: [
                t,
                n,
                (0, r.jsx)(E.PlusSmallIcon, {
                  size: "sm",
                  color: "currentColor",
                  className: D.plusIcon,
                }),
              ],
            })
          );
        },
        z = (e) => (0, r.jsx)(G, { ...e, className: D.user, renderResult: H }),
        W = {
          [j.dCx.FILTER_FROM]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_FROM,
            component: z,
          },
          [j.dCx.FILTER_MENTIONS]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_MENTIONS,
            component: z,
          },
          [j.dCx.FILTER_HAS]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_HAS,
          },
          [j.dCx.FILTER_FILE_TYPE]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_FILE_TYPE,
          },
          [j.dCx.FILTER_IN]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_CHANNELS,
            component: (e) => (0, r.jsx)(G, { ...e, renderResult: w }),
          },
          [j.rtL.DATES]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_DATES,
          },
          [j.rtL.HISTORY]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_HISTORY,
            groupTip(e) {
              let { searchId: t } = e;
              return (0, r.jsx)(E.Tooltip, {
                text: U.Z.Messages.SEARCH_CLEAR_HISTORY,
                position: "left",
                children: (e) => {
                  let { onMouseEnter: n, onMouseLeave: i } = e;
                  return (0, r.jsx)(E.Clickable, {
                    onClick: () => (0, p.QQ)(t),
                    onMouseEnter: n,
                    onMouseLeave: i,
                    className: D.searchClearHistory,
                    title: U.Z.Messages.SEARCH_CLEAR_HISTORY,
                    "aria-label": U.Z.Messages.SEARCH_CLEAR_HISTORY,
                    children: (0, r.jsx)(E.TrashIcon, {
                      size: "md",
                      color: "currentColor",
                    }),
                  });
                },
              });
            },
            component: function (e) {
              let {
                  onSelect: t,
                  onFocus: n,
                  result: l,
                  showFilter: a,
                  searchId: o,
                  renderResult: c,
                  group: u,
                  ...d
                } = e,
                h = "",
                _ = i
                  .useMemo(() => {
                    var e;
                    return (
                      (e = l.text),
                      Z.kG(e).map((e, t, n) =>
                        Z.Fr(e, n[t + 1])
                          ? e
                          : new I.WU(e.getFullMatch(), I.Xe),
                      )
                    );
                  }, [l.text])
                  .map((e) => {
                    let t = e.getFullMatch();
                    if ("" === t.trim()) return null;
                    let n = j.TNx.test(e.type),
                      i = j.KA4.test(e.type);
                    return (
                      (h += t),
                      (0, r.jsx)(
                        "span",
                        {
                          className: s()({
                            [D.filter]: n,
                            [D.answer]: i,
                            [D.nonText]: !n && !i,
                          }),
                          children: t,
                        },
                        e.type + t,
                      )
                    );
                  });
              return (0, r.jsxs)(E.Clickable, {
                className: s()(D.option, D.__invalid_history),
                onClick: t,
                onFocus: n,
                ...d,
                "aria-label": U.Z.Messages.SEARCH_FROM_SUGGESTIONS.format({
                  suggestion: h,
                }),
                children: [
                  _,
                  (0, r.jsx)(E.PlusSmallIcon, {
                    size: "sm",
                    color: "currentColor",
                    className: D.plusIcon,
                  }),
                ],
              });
            },
          },
          [j.rtL.SEARCH_OPTIONS]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
            groupTip: () =>
              (0, r.jsx)(E.Tooltip, {
                text: U.Z.Messages.LEARN_MORE,
                position: "left",
                children: (e) =>
                  (0, r.jsx)("div", {
                    className: D.searchLearnMore,
                    ...e,
                    children: (0, r.jsx)(E.Anchor, {
                      href: P.Z.getArticleURL(j.BhN.USING_SEARCH),
                      title: U.Z.Messages.LEARN_MORE,
                      children: (0, r.jsx)(E.CircleQuestionIcon, {
                        size: "md",
                        color: "currentColor",
                      }),
                    }),
                  }),
              }),
            component: function (e) {
              var t;
              let {
                  result: n,
                  onSelect: i,
                  onFocus: l,
                  showFilter: a,
                  searchId: o,
                  ...c
                } = e,
                u = Z.Ko(null !== (t = n.token) && void 0 !== t ? t : "");
              return (0, r.jsxs)(E.Clickable, {
                className: s()(D.option, D.searchOption),
                onClick: i,
                onFocus: l,
                ...c,
                children: [
                  (0, r.jsx)("span", { className: D.filter, children: n.text }),
                  (0, r.jsx)("span", {
                    className: s()({ [D.answer]: u }),
                    children: u,
                  }),
                  (0, r.jsx)(E.PlusSmallIcon, {
                    size: "sm",
                    color: "currentColor",
                    className: D.plusIcon,
                  }),
                ],
              });
            },
          },
        };
      class V extends i.PureComponent {
        componentDidUpdate(e, t) {
          let { resultsState: n, totalResults: r } = this.props,
            { mode: i } = n,
            { resultsState: l } = e;
          null != i.filter && null == l.mode.filter && r > 0
            ? this.setSelectedIndex(0)
            : i.type === j.Sap.FILTER_ALL && l.mode.type !== i.type
              ? this.setSelectedIndex(-1)
              : this.keepCurrentOptionSelected(e, t);
        }
        setSelectedIndex(e) {
          this.setState({ selectedIndex: e }, () =>
            this.props.onSelectedIndexChanged(e),
          );
        }
        render() {
          let { selectedIndex: e } = this.state,
            {
              navId: t,
              resultsState: n,
              totalResults: i,
              searchId: l,
            } = this.props;
          return (0, r.jsx)(m.Z, {
            numResults: i,
            query: n.query,
            navId: t,
            hideQuery: !this.shouldShowSearchQuery(),
            focusedIndex: e,
            renderCustomResults: this.renderAutocompletes,
            renderInitialState: this.renderAutocompletes,
            onHighlightQuery: () => this.focusOption(-1),
            onSelectQuery: this.performSearch,
            onSelectSearchEverywhere: () =>
              this.performSearch({ searchEverywhere: !0 }),
            renderNoResults: () => null,
            searchFavorites: l === j.I_8 && (0, M.X)(),
          });
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            B(this, "state", { dateHint: (0, C.Pr)(), selectedIndex: -1 }),
            B(this, "handleDateChange", (e) => {
              this.setSearchQuery(e.format(j.b2L) + " ", !0);
            }),
            B(this, "keepCurrentOptionSelected", (e, t) => {
              let { selectedIndex: n } = this.state,
                { resultsState: r, totalResults: i } = this.props,
                { mode: l, autocompletes: s } = r,
                { resultsState: a } = e;
              if (l.type !== a.mode.type) this.setSelectedIndex(-1);
              else if (
                t.selectedIndex >= 0 &&
                (t.selectedIndex === n || a.autocompletes.length !== s.length)
              ) {
                let e = Z.zV(a.autocompletes, a.mode.type)[t.selectedIndex - 1],
                  n = Z.zV(s, l.type).indexOf(e);
                -1 !== n
                  ? this.setSelectedIndex(n)
                  : t.selectedIndex >= i && this.setSelectedIndex(i - 1);
              }
            }),
            B(this, "focusNextOption", () => {
              this.focusOtherOption(1);
            }),
            B(this, "focusPreviousOption", () => {
              this.focusOtherOption(-1);
            }),
            B(this, "focusOtherOption", (e) => {
              let { selectedIndex: t } = this.state,
                { resultsState: n } = this.props;
              if (!Z.Fz(n.mode.filter)) this.focusOption(t + e);
            }),
            B(this, "focusOption", (e) => {
              let t = e,
                { autocompletes: n } = this.props.resultsState,
                r = this.shouldShowSearchQuery();
              t < -1 || (!r && t < 0)
                ? (t = Z.BU(n) - 1)
                : r && t >= Z.BU(n)
                  ? (t = -1)
                  : !r && t >= Z.BU(n) && (t = 0),
                this.setSelectedIndex(t);
            }),
            B(this, "selectOption", (e) => {
              let t = e;
              if ((null == t && (t = this.state.selectedIndex), t < 0))
                return !1;
              let { autocompletes: n, mode: r } = this.props.resultsState;
              if (Z.Fz(r.filter)) return;
              let i = Z.zV(n, r.type);
              if (t >= i.length) return !1;
              let l = i[t],
                s = (function (e) {
                  let t = !0,
                    n = e.trim();
                  return (
                    u()(C.ZP).forOwn((e) => {
                      "" !== e.key && null != e.key && n === e.key && (t = !1);
                    }),
                    t
                  );
                })(l);
              return this.setSearchQuery(l, s), !0;
            }),
            B(this, "setSearchQuery", function (e) {
              let n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                { mode: r, cursorScope: i } = t.props.resultsState,
                l = 0;
              null != r.token
                ? (l = r.token.start)
                : (null == i ? void 0 : i.currentToken) != null &&
                  (l = i.currentToken.end);
              let s = null != r.token ? r.token.end : l;
              A.S.dispatch(j.CkL.SET_SEARCH_QUERY, {
                query: e,
                anchor: l,
                focus: s,
                performSearch: n,
              }),
                t.setSelectedIndex(-1);
            }),
            B(this, "shouldShowSearchQuery", () => {
              let { mode: e } = this.props.resultsState;
              return (
                e.type !== j.Sap.FILTER &&
                e.type !== j.Sap.EMPTY &&
                !Z.Fz(e.filter)
              );
            }),
            B(this, "renderDatePicker", () =>
              (0, r.jsxs)("div", {
                className: D.datePicker,
                children: [
                  (0, r.jsx)(k, {
                    onSelect: this.handleDateChange,
                    maxDate: h()().local(),
                    minDate: F,
                  }),
                  (0, r.jsxs)("div", {
                    className: D.datePickerHint,
                    children: [
                      (0, r.jsxs)("span", {
                        className: D.hint,
                        children: [
                          U.Z.Messages.SEARCH_DATE_PICKER_HINT,
                          "\xa0",
                        ],
                      }),
                      (0, r.jsx)(E.Clickable, {
                        tag: "span",
                        className: D.hintValue,
                        onClick: this.handleHintClick,
                        children: this.state.dateHint,
                      }),
                    ],
                  }),
                ],
              }),
            ),
            B(this, "handleHintClick", () => {
              this.setSearchQuery(this.state.dateHint, !0);
            }),
            B(this, "performSearch", (e) => {
              A.S.dispatch(j.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            B(this, "renderAutocompletes", () => {
              let { selectedIndex: e } = this.state,
                { navId: t, searchId: n } = this.props,
                { autocompletes: i, mode: l } = this.props.resultsState;
              if (Z.Fz(l.filter)) return this.renderDatePicker();
              let s = -1;
              return i.map((i) => {
                var a, o, c;
                let u, d;
                if (null == i || 0 === i.results.length) return null;
                let h = null !== (a = W[i.group]) && void 0 !== a ? a : {};
                null != h.titleText &&
                  ((d = "".concat(i.group, "-header")),
                  (u = (0, r.jsx)("div", {
                    id: d,
                    className: D.header,
                    children: h.titleText(),
                  })));
                let _ = null !== (o = h.groupTip) && void 0 !== o ? o : null,
                  f = null != _ ? (0, r.jsx)(_, { searchId: n }) : null,
                  E = null !== (c = h.component) && void 0 !== c ? c : G,
                  p = l.type === j.Sap.FILTER_ALL;
                return (0, r.jsxs)(
                  "ul",
                  {
                    role: "group",
                    "aria-labelledby": d,
                    className: D.resultsGroup,
                    children: [
                      u,
                      f,
                      i.results.map((l) => {
                        var a, o;
                        if (null == l || null == i) return null;
                        let c = e === (s += 1);
                        return (0, r.jsx)(
                          E,
                          {
                            searchId: n,
                            group:
                              null !== (a = l.group) && void 0 !== a
                                ? a
                                : i.group,
                            result: l,
                            showFilter: p,
                            onSelect: this.selectOption.bind(null, s),
                            onFocus: this.focusOption.bind(null, s),
                            ...(0, m.M)(t, s, c),
                          },
                          ""
                            .concat(i.group, "-")
                            .concat(l.text, "-")
                            .concat(
                              null !== (o = l.key) && void 0 !== o ? o : "",
                            ),
                        );
                      }),
                    ],
                  },
                  i.group,
                );
              });
            });
        }
      }
      t.ZP = i.forwardRef((e, t) => {
        let [n, i, l] = (0, f.Wu)([O.Z, v.Z, x.Z], () => {
          let e = O.Z.getGuildId(),
            t = v.Z.getChannelId(),
            n = null != e ? e : t;
          o()(null != n, "SearchPopout.getStateFromStores - invalid searchId");
          let r = x.Z.getState(n),
            i = Z.BU(r.autocompletes);
          return [n, r, i];
        });
        return (0, r.jsx)(V, {
          ...e,
          searchId: n,
          resultsState: i,
          totalResults: l,
          ref: t,
        });
      });
    },
    134612: function (e, t, n) {
      n.d(t, {
        $l: function () {
          return a;
        },
        C2: function () {
          return u;
        },
        DL: function () {
          return o;
        },
        EI: function () {
          return l;
        },
        Nn: function () {
          return d;
        },
        X_: function () {
          return c;
        },
        n4: function () {
          return s;
        },
        zr: function () {
          return i;
        },
      });
      var r = n(689938);
      let i = "SAFETY_WARNING_BANNER_WEB",
        l = "https://www.crisistextline.org/",
        s = "https://nofiltr.org/resources-hub/",
        a = "https://discord.findahelpline.com/",
        o = "InappropriateConversationModal-web",
        c = "PRIVATE_DM_SAFETY_TOOLS_MODAL",
        u = () => [
          r.Z.Messages.STRANGER_DANGER_TIPS_1,
          r.Z.Messages.STRANGER_DANGER_TIPS_2,
          r.Z.Messages.STRANGER_DANGER_TIPS_3,
        ],
        d = () => [
          r.Z.Messages.INAPPROPRIATE_CONVERSATION_TIPS_1,
          r.Z.Messages.INAPPROPRIATE_CONVERSATION_TIPS_2,
          r.Z.Messages.INAPPROPRIATE_CONVERSATION_TIPS_3,
        ];
    },
    981312: function (e, t, n) {
      n.d(t, {
        U: function () {
          return l;
        },
      });
      var r = n(442837),
        i = n(594174);
      function l() {
        return (
          !1 ===
          (0, r.e7)([i.default], () => {
            var e;
            return null === (e = i.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.nsfwAllowed;
          })
        );
      }
    },
    604849: function (e, t, n) {
      n.d(t, {
        c: function () {
          return s;
        },
      });
      var r = n(442837),
        i = n(581883),
        l = n(981312);
      let s = () => {
        let e = (0, r.e7)([i.Z], () => {
          var e, t, n;
          return (
            null ===
              (n =
                null === (t = i.Z.settings.privacy) || void 0 === t
                  ? void 0
                  : null === (e = t.inappropriateConversationWarnings) ||
                      void 0 === e
                    ? void 0
                    : e.value) ||
            void 0 === n ||
            n
          );
        });
        return (0, l.U)() && e;
      };
    },
    792165: function (e, t, n) {
      n.d(t, {
        o: function () {
          return C;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(442837),
        l = n(693789),
        s = n(993365),
        a = n(481060),
        o = n(230711),
        c = n(197115),
        u = n(504983),
        d = n(594174),
        h = n(74538),
        _ = n(981631),
        f = n(921944),
        E = n(474936),
        p = n(526761),
        m = n(689938),
        I = n(568492);
      function C(e) {
        var t;
        let { onClose: n, markAsDismissed: C } = e,
          S = (0, i.e7)([d.default], () => d.default.getCurrentUser());
        let g =
            (t = null == S ? void 0 : S.premiumType) === E.p9.TIER_2
              ? m.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2
              : null == t
                ? m.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB
                : m.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
          R = h.ZP.canUseCustomCallSounds(S);
        return (0, r.jsxs)(u.Z, {
          isShown: !0,
          type: u.Y.PREMIUM,
          className: I.upsellOuter,
          backgroundClassName: I.upsellInner,
          children: [
            null != C
              ? (0, r.jsx)(a.Clickable, {
                  className: I.close,
                  onClick: () => (null == C ? void 0 : C(f.L.DISMISS)),
                  "aria-label": m.Z.Messages.CLOSE,
                  children: (0, r.jsx)(a.XSmallIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: I.closeIcon,
                  }),
                })
              : null,
            (0, r.jsxs)("div", {
              className: I.upsellTitle,
              children: [
                (0, r.jsx)(a.NitroWheelIcon, {
                  size: "sm",
                  color: "currentColor",
                  className: I.nitroWheel,
                }),
                (0, r.jsx)(a.Heading, {
                  variant: "heading-sm/bold",
                  children: m.Z.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB,
                }),
              ],
            }),
            (0, r.jsx)(s.x, { variant: "text-sm/normal", children: g }),
            R
              ? (0, r.jsx)(l.zx, {
                  onClick: function () {
                    o.Z.open(_.oAB.VOICE, p.GA),
                      null == n || n(),
                      null == C || C(f.L.PRIMARY);
                  },
                  children: m.Z.Messages.CHECK_IT_OUT,
                })
              : (0, r.jsx)(c.Z, {
                  buttonText: m.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                  subscriptionTier: E.Si.TIER_2,
                  premiumModalAnalyticsLocation: {
                    section: _.jXE.SOUNDBOARD_SOUND_PICKER,
                    object: _.qAy.BUTTON_CTA,
                  },
                  color: l.zx.Colors.GREEN,
                  onSubscribeModalClose: () =>
                    null == C ? void 0 : C(f.L.PRIMARY),
                }),
          ],
        });
      }
    },
    108427: function (e, t, n) {
      n.d(t, {
        e: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(772848),
        i = n(579806),
        l = n(626135),
        s = n(981631);
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
      let o = new (class e {
        trackEvent(e, t) {
          let n = Date.now();
          requestIdleCallback(() => {
            l.default.track(e, {
              ...(function () {
                var e, t, n;
                let r = "--campaign-id=";
                for (let l of null !==
                  (n =
                    null === i.Z || void 0 === i.Z
                      ? void 0
                      : null === (t = i.Z.processUtils) || void 0 === t
                        ? void 0
                        : null === (e = t.getMainArgvSync) || void 0 === e
                          ? void 0
                          : e.call(t)) && void 0 !== n
                  ? n
                  : [])
                  if (l.startsWith(r)) return { referrer: l.substr(r.length) };
                return {};
              })(),
              ...(function () {
                let e = !1,
                  t = {
                    total_compressed_byte_size: 0,
                    total_uncompressed_byte_size: 0,
                    total_transfer_byte_size: 0,
                    js_compressed_byte_size: 0,
                    js_uncompressed_byte_size: 0,
                    js_transfer_byte_size: 0,
                    css_compressed_byte_size: 0,
                    css_uncompressed_byte_size: 0,
                    css_transfer_byte_size: 0,
                  };
                return (
                  null != window.performance &&
                    null != window.performance.getEntries &&
                    window.performance.getEntries().forEach((n) => {
                      let r =
                          null != n.encodedBodySize
                            ? n.encodedBodySize
                            : n.decodedBodySize,
                        i =
                          null != n.decodedBodySize
                            ? n.decodedBodySize
                            : n.encodedBodySize,
                        l = n.transferSize;
                      null != i &&
                        null != r &&
                        ((e = !0),
                        (t.total_compressed_byte_size += r),
                        (t.total_uncompressed_byte_size += i),
                        null != l && (t.total_uncompressed_byte_size += l),
                        "resource" === n.entryType &&
                          ("script" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.js/) &&
                            ((t.js_compressed_byte_size += r),
                            (t.js_uncompressed_byte_size += i),
                            null != l && (t.js_uncompressed_byte_size += l)),
                          "link" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.css/) &&
                            ((t.css_compressed_byte_size += r),
                            (t.css_uncompressed_byte_size += i),
                            null != l && (t.css_uncompressed_byte_size += l))));
                    }),
                  e ? t : {}
                );
              })(),
              load_id: this.loadId,
              screen_name: t,
              duration_ms_since_app_opened:
                n - window.GLOBAL_ENV.HTML_TIMESTAMP,
            });
          });
        }
        trackAppUIViewed(e) {
          if (!this.appUIViewed)
            this.trackEvent(s.rMx.APP_UI_VIEWED, e), (this.appUIViewed = !0);
        }
        constructor() {
          a(this, "loadId", (0, r.Z)()), a(this, "appUIViewed", !1);
        }
      })();
      function c(e) {
        o.trackAppUIViewed(e);
      }
    },
    196051: function (e, t, n) {
      n.d(t, {
        Bo: function () {
          return s;
        },
        Ct: function () {
          return o;
        },
        LA: function () {
          return l;
        },
        NB: function () {
          return a;
        },
        cP: function () {
          return i;
        },
      });
      var r = n(570140);
      function i(e, t, n, i, l) {
        r.Z.dispatch({
          type: "SPEAK_TEXT",
          text: e,
          interrupt: t,
          maxLength: n,
          onStart: i,
          onEnd: l,
        });
      }
      function l(e, t) {
        r.Z.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: t });
      }
      function s(e, t) {
        r.Z.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: t });
      }
      function a() {
        r.Z.dispatch({ type: "STOP_SPEAKING" });
      }
      function o(e) {
        r.Z.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
      }
    },
    441729: function (e, t, n) {
      var r,
        i = n(442837),
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
      let a = { speechRate: 1, currentMessage: null },
        o = a;
      class c extends (r = i.ZP.DeviceSettingsStore) {
        initialize(e) {
          o = { ...a, ...(null != e ? e : null) };
        }
        isSpeakingMessage(e, t) {
          let { currentMessage: n } = o;
          return null !== n && n.channelId === e && n.messageId === t;
        }
        get currentMessage() {
          return o.currentMessage;
        }
        get speechRate() {
          return o.speechRate;
        }
        getUserAgnosticState() {
          return o;
        }
      }
      s(c, "displayName", "TTSStore"),
        s(c, "persistKey", "TTSStore"),
        s(c, "migrations", []),
        (t.Z = new c(
          l.Z,
          __OVERLAY__
            ? {}
            : {
                SPEAKING_MESSAGE: function (e) {
                  let { messageId: t, channelId: n } = e;
                  o = { ...o, currentMessage: { messageId: t, channelId: n } };
                },
                STOP_SPEAKING: function () {
                  o = { ...o, currentMessage: null };
                },
                SET_TTS_SPEECH_RATE: function (e) {
                  o = { ...o, speechRate: e.speechRate };
                },
              },
        ));
    },
    250758: function (e, t, n) {
      n(653041), n(724458);
      var r,
        i,
        l,
        s,
        a = n(442837),
        o = n(570140),
        c = n(999650),
        u = n(279779),
        d = n(57132),
        h = n(483360),
        _ = n(892880),
        f = n(405656),
        E = n(51144),
        p = n(271383),
        m = n(768119),
        I = n(246946),
        C = n(594174),
        S = n(981631);
      let g = {},
        R = {};
      function T(e) {
        let {
            searchId: t,
            query: n,
            mode: r,
            tokens: i,
            cursorScope: l,
            autocompletes: s,
          } = e,
          a = R[t];
        return (
          null == a &&
            ((a = {
              results: [],
              context: u.Z.getSearchContext(N.bind(null, t)),
            }),
            (R[t] = a)),
          {
            query: null != n ? n : "",
            mode:
              null != r ? r : { type: S.Sap.EMPTY, filter: null, token: null },
            tokens: null != i ? i : [],
            cursorScope: null != l ? l : null,
            autocompletes: null != s ? s : [],
          }
        );
      }
      function N(e, t) {
        let { results: n } = t,
          r = R[e],
          i = g[e];
        if (null == r || null == i) return;
        let { type: l, filter: s } = i.mode;
        if (
          l === S.Sap.EMPTY ||
          (l === S.Sap.FILTER &&
            s !== S.dCx.FILTER_FROM &&
            s !== S.dCx.FILTER_MENTIONS)
        )
          return;
        let a = 3;
        i.mode.type === S.Sap.FILTER && (a = 10),
          (r.results = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 10;
            return (
              (e = e.reduce((e, t) => {
                let n = C.default.getUser(t.id);
                return null == n
                  ? e
                  : (e.push({ id: n.id, text: E.ZP.getUserTag(n), user: n }),
                    e);
              }, [])).length > t && (e.length = t),
              e
            );
          })(n, a));
        let { query: o, mode: c, tokens: u, cursorScope: d } = i,
          { autocompletes: h } = i;
        (h = O(e, c)),
          (g[e] = T({
            searchId: e,
            query: o,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: h,
          })),
          Z.emitChange();
      }
      function x(e, t, n) {
        let r,
          i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
        if (null == e || "" === e) return null;
        if (
          m.Z.getSearchType(n) === S.aib.GUILD &&
          (e === S.dCx.FILTER_FROM || e === S.dCx.FILTER_MENTIONS)
        ) {
          let e = R[n];
          null == e
            ? (r = null)
            : ((null == t || 0 === t.getFullMatch().trim().length) &&
                (e.results = h.ZP.getRecentlyTalked(n, 10).map((e) => {
                  let { record: t } = e;
                  return { user: t, text: E.ZP.getUserTag(t) };
                })),
              (r = e.results));
        } else {
          var l;
          let s =
              null === (l = c.ZP[e]) || void 0 === l
                ? void 0
                : l.getAutocompletions,
            a = (null != t ? t.getFullMatch() : "").trim();
          r = null != s ? s(a, n, null != i ? i : 10) : [];
        }
        return null == r || 0 === r.length ? null : { group: e, results: r };
      }
      function v(e) {
        let t = (null != e ? e.getFullMatch() : "").trim(),
          n = (function () {
            let e = (0, d.cn)() && !1;
            return {
              [S.dCx.FILTER_FROM]: !I.Z.hidePersonalInformation,
              [S.dCx.FILTER_MENTIONS]: !I.Z.hidePersonalInformation,
              [S.dCx.FILTER_HAS]: !0,
              [S.dCx.FILTER_BEFORE]: !0,
              [S.dCx.FILTER_AFTER]: !0,
              [S.dCx.FILTER_ON]: !0,
              [S.dCx.FILTER_IN]: m.Z.getSearchType() === S.aib.GUILD,
              [S.dCx.FILTER_PINNED]: !e,
            };
          })(),
          r = (0, c.nB)(t).filter((e) => n[e.token]);
        return { group: S.rtL.SEARCH_OPTIONS, results: r };
      }
      function O(e, t) {
        let n = [];
        return (
          t.type === S.Sap.FILTER
            ? n.push(x(t.filter, t.token, e, 10))
            : t.type === S.Sap.FILTER_ALL
              ? (n = (function (e, t) {
                  let n = (null != e ? e.getFullMatch() : "").trim(),
                    r = [];
                  return (
                    null != n &&
                      "" !== n &&
                      ((function (e) {
                        let t = m.Z.getSearchType(e),
                          n = [S.dCx.FILTER_HAS];
                        return (
                          !I.Z.hidePersonalInformation &&
                            (n.push(S.dCx.FILTER_FROM),
                            n.push(S.dCx.FILTER_MENTIONS)),
                          t === S.aib.GUILD && n.push(S.dCx.FILTER_IN),
                          n
                        );
                      })(t).forEach((n) => {
                        if (null == n) return;
                        let i = x(n, e, t, 3);
                        null != i && r.push(i);
                      }),
                      r.push(
                        (function (e, t) {
                          let n = (null != e ? e.getFullMatch() : "").trim();
                          if (null != n && "" !== n) {
                            var r, i, l;
                            let e =
                                null === (r = c.ZP[S.dCx.FILTER_BEFORE]) ||
                                void 0 === r
                                  ? void 0
                                  : r.getAutocompletions(n, t, 1)[0],
                              s =
                                null === (i = c.ZP[S.dCx.FILTER_ON]) ||
                                void 0 === i
                                  ? void 0
                                  : i.getAutocompletions(n, t, 1)[0],
                              a =
                                null === (l = c.ZP[S.dCx.FILTER_AFTER]) ||
                                void 0 === l
                                  ? void 0
                                  : l.getAutocompletions(n, t, 1)[0];
                            return null == e
                              ? null
                              : { group: S.rtL.DATES, results: [e, s, a] };
                          }
                        })(e, t),
                      )),
                    5 > (0, f.BU)(r) && r.push(v(e)),
                    r
                  );
                })(t.token, e))
              : t.type === S.Sap.EMPTY &&
                (n.push(v(t.token)),
                (0, d.cn)(),
                n.push(
                  (function (e) {
                    if (I.Z.hidePersonalInformation) return null;
                    let t = m.Z.getHistory(e);
                    return null == t
                      ? null
                      : {
                          group: S.rtL.HISTORY,
                          results: t.map((e) => ({ text: e })),
                        };
                  })(e),
                )),
          n
        );
      }
      function b() {
        (0, f.WU)();
      }
      function L(e) {
        let t = g[e];
        if (null == t) return;
        let {
          query: n,
          mode: r,
          tokens: i,
          cursorScope: l,
          autocompletes: s,
        } = t;
        g[e] = T({
          searchId: e,
          query: n,
          mode: r,
          tokens: i,
          cursorScope: l,
          autocompletes: s.map((e) =>
            (null == e ? void 0 : e.group) === S.rtL.HISTORY ? null : e,
          ),
        });
      }
      function A() {
        let e = m.Z.getCurrentSearchId();
        if (null == e || null == g[e]) return;
        let { query: t, mode: n, tokens: r, cursorScope: i } = g[e];
        g[e] = T({
          searchId: e,
          query: t,
          mode: n,
          tokens: r,
          cursorScope: i,
          autocompletes: O(e, n),
        });
      }
      class P extends (r = a.ZP.Store) {
        initialize() {
          this.waitFor(p.ZP, I.Z);
        }
        getState(e) {
          var t;
          return null !== (t = g[e]) && void 0 !== t ? t : T({ searchId: e });
        }
      }
      (s = "SearchAutocompleteStore"),
        (l = "displayName") in (i = P)
          ? Object.defineProperty(i, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = s);
      let Z = new P(o.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
          var t;
          let n,
            { searchId: r, tokens: i, cursorScope: l } = e,
            s = (0, f.cl)(i),
            a = (0, f.qc)(l, i),
            o = null !== (t = g[r]) && void 0 !== t ? t : {},
            c = R[r],
            u = !0;
          if (s === o.query && (null == o.mode || o.mode.filter === a.filter))
            (n = o.autocompletes), (u = !1);
          else if (
            a.type === S.Sap.EMPTY ||
            (a.type === S.Sap.FILTER &&
              a.filter !== S.dCx.FILTER_FROM &&
              a.filter !== S.dCx.FILTER_MENTIONS)
          )
            null != c && (c.context.clearQuery(), (c.results = [])),
              (n = O(r, a));
          else if (null != c) {
            let { token: e } = a;
            null != e && e.getFullMatch().trim().length > 0
              ? (_.Z.requestMembers(r, e.getFullMatch().trim(), 10),
                c.context.setQuery(e.getFullMatch().trim(), { guild: r }),
                (n = o.autocompletes),
                (u = !1))
              : (c.context.clearQuery(), (n = O(r, a)));
          }
          return (
            (g[r] = T({
              searchId: r,
              query: s,
              mode: a,
              tokens: i,
              cursorScope: l,
              autocompletes: n,
            })),
            u
          );
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
          let { searchId: t } = e,
            n = R[t];
          null != n && (n.context.destroy(), (n.results = []), delete R[t]),
            delete g[t];
        },
        CHANNEL_CREATE: b,
        CHANNEL_DELETE: b,
        STREAMER_MODE_UPDATE: A,
        SEARCH_MODAL_OPEN: A,
        SEARCH_SCREEN_OPEN: A,
        SEARCH_CLEAR_HISTORY: function (e) {
          let { searchId: t } = e;
          null != t ? L(t) : Object.keys(g).forEach(L);
        },
        LOGOUT: function () {
          Object.keys(g).forEach(L);
        },
      });
      t.Z = Z;
    },
    889901: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(325767);
      function l(e) {
        let { width: t = 20, height: n = 20, className: l, ...s } = e;
        return (0, r.jsx)("svg", {
          width: t,
          height: n,
          className: l,
          ...(0, i.Z)(s),
          viewBox: "0 0 20 20",
          children: (0, r.jsxs)("g", {
            clipPath: "url(#clip0_198_5469)",
            children: [
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M19.15 17C19.41 17.11 19.6 17 19.51 16.73L18.89 15.15L18.28 13.56C18.23 13.4421 18.1442 13.3429 18.0348 13.2765C17.9253 13.2101 17.7977 13.1798 17.67 13.19L13.67 14.28C13.4 14.36 13.56 14.79 13.92 14.93L19.15 17Z",
                fill: "#FF73FA",
              }),
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M9.80009 14L7.08009 8.67001L0.440092 18C0.351927 18.1221 0.299095 18.2662 0.287392 18.4163C0.275688 18.5665 0.305566 18.7169 0.373746 18.8512C0.441926 18.9855 0.545775 19.0985 0.673902 19.1776C0.802029 19.2568 0.949484 19.2991 1.10009 19.3H12.5201L9.80009 14Z",
                fill: "#8086FF",
              }),
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M12.27 19C11.57 19 9.92997 17.31 8.52997 14.57C7.86795 13.3426 7.37674 12.0304 7.06997 10.67C6.83997 9.54999 6.99997 8.99999 7.19997 8.89999H7.32997C8.03997 8.89999 9.66997 10.59 11.07 13.32C12.68 16.46 12.93 18.76 12.4 19.03C12.3549 19.0306 12.3103 19.0203 12.27 19Z",
                fill: "#05124A",
              }),
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M7.33009 9.14999C7.86009 9.14999 9.42009 10.67 10.8301 13.43C12.4501 16.57 12.5201 18.55 12.2701 18.77C11.7401 18.77 10.1801 17.25 8.77009 14.49C7.15009 11.35 7.08009 9.35999 7.32009 9.14999H7.33009ZM7.32009 8.60999C7.233 8.60831 7.14693 8.62897 7.07009 8.66999C6.23009 9.08999 6.78009 11.81 8.28009 14.74C9.65009 17.4 11.3401 19.31 12.2801 19.31C12.3672 19.3117 12.4532 19.291 12.5301 19.25C13.3701 18.82 12.8301 16.11 11.3201 13.18C9.96009 10.52 8.26009 8.60999 7.32009 8.60999Z",
                fill: "#373BE1",
              }),
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M3.53991 17.22C3.16017 16.4754 2.85534 15.6949 2.62991 14.89L1.40991 16.6C1.5797 17.0776 1.77669 17.545 1.99991 18C2.21943 18.4301 2.46316 18.8475 2.72991 19.25H4.84991C4.34607 18.6191 3.90718 17.939 3.53991 17.22Z",
                fill: "#373BE1",
              }),
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M6.83003 19.25H9.23003C8.09101 18.2623 7.1538 17.0636 6.47003 15.72C5.75671 14.3452 5.32173 12.8432 5.19003 11.3L3.78003 13.3C4.05054 14.4137 4.46044 15.4889 5.00003 16.5C5.49463 17.4884 6.10927 18.4121 6.83003 19.25Z",
                fill: "#373BE1",
              }),
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M12.2699 18.77C11.7199 18.7 10.2699 17.3 8.7899 14.49C7.2499 11.49 7.1199 9.57 7.3199 9.19L6.9999 8.69C6.2199 9.19 6.7699 11.86 8.2499 14.74C9.5699 17.31 11.2499 19.19 12.1399 19.3C12.2557 19.3201 12.3748 19.3026 12.4799 19.25L12.2699 18.77Z",
                fill: "#373BE1",
              }),
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M15.5901 9.23L14.6201 8C14.5734 7.94051 14.5118 7.89439 14.4416 7.8663C14.3713 7.8382 14.2949 7.82913 14.2201 7.84L10.8601 8.28C10.786 8.29082 10.7158 8.32037 10.6563 8.36587C10.5968 8.41137 10.5499 8.47131 10.5201 8.54L9.22008 11.68C9.18969 11.7486 9.1792 11.8243 9.18981 11.8986C9.20042 11.9729 9.2317 12.0427 9.28008 12.1L10.2801 13.37C10.3268 13.4295 10.3884 13.4756 10.4586 13.5037C10.5288 13.5318 10.6052 13.5409 10.6801 13.53L14.0001 13.05C14.0742 13.0392 14.1443 13.0096 14.2038 12.9641C14.2633 12.9186 14.3102 12.8587 14.3401 12.79L15.6401 9.65C15.6718 9.58232 15.684 9.50709 15.6751 9.43285C15.6663 9.35862 15.6368 9.28834 15.5901 9.23Z",
                fill: "#FFD836",
              }),
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M12.6801 10.21L11.4101 9.74001C11.3617 9.72337 11.3182 9.69501 11.2834 9.65748C11.2487 9.61994 11.2238 9.57439 11.2109 9.52489C11.198 9.47539 11.1976 9.42347 11.2097 9.37376C11.2217 9.32405 11.2459 9.27811 11.2801 9.24001L14.7201 5.24001C14.7617 5.1903 14.8178 5.15488 14.8806 5.13873C14.9434 5.12259 15.0096 5.12653 15.0701 5.15001L16.3401 5.61001C16.3871 5.62978 16.4288 5.66018 16.4621 5.69881C16.4954 5.73745 16.5193 5.78327 16.5319 5.83268C16.5445 5.8821 16.5454 5.93376 16.5347 5.98361C16.524 6.03346 16.5019 6.08015 16.4701 6.12001L13.0301 10.12C12.9884 10.1697 12.9323 10.2051 12.8695 10.2213C12.8067 10.2374 12.7405 10.2335 12.6801 10.21Z",
                fill: "#AEC7FF",
              }),
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M11.61 17.25L11.35 16.33C11.3396 16.2949 11.3383 16.2577 11.346 16.2219C11.3537 16.1861 11.3702 16.1527 11.394 16.1249C11.4179 16.0971 11.4483 16.0757 11.4825 16.0626C11.5167 16.0495 11.5536 16.0452 11.59 16.05L15.31 16.37C15.3545 16.373 15.397 16.3901 15.4311 16.4189C15.4653 16.4477 15.4894 16.4866 15.5 16.53L15.76 17.45C15.7697 17.4856 15.7707 17.523 15.763 17.5591C15.7552 17.5952 15.7388 17.6289 15.7153 17.6574C15.6918 17.6858 15.6617 17.7082 15.6277 17.7225C15.5937 17.7369 15.5568 17.7429 15.52 17.74L11.8 17.42C11.7546 17.4149 11.7119 17.3958 11.6778 17.3653C11.6438 17.3349 11.6201 17.2946 11.61 17.25Z",
                fill: "#AEC7FF",
              }),
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M10.51 4.87L9.51004 4.8C9.47171 4.79882 9.43428 4.78808 9.40117 4.76875C9.36805 4.74942 9.34029 4.72212 9.32041 4.68932C9.30054 4.65653 9.28918 4.61928 9.28737 4.58098C9.28555 4.54268 9.29335 4.50453 9.31004 4.47L10.93 0.900003C10.9491 0.856352 10.9819 0.820078 11.0234 0.796634C11.0648 0.773191 11.1128 0.763846 11.16 0.770003L12.16 0.840003C12.1984 0.841182 12.2358 0.851926 12.2689 0.871256C12.302 0.890587 12.3298 0.917891 12.3497 0.950685C12.3695 0.98348 12.3809 1.02072 12.3827 1.05903C12.3845 1.09733 12.3767 1.13548 12.36 1.17L10.74 4.73C10.7213 4.77455 10.689 4.81205 10.6477 4.83718C10.6064 4.86231 10.5582 4.87379 10.51 4.87Z",
                fill: "#FF73FA",
              }),
              (0, r.jsx)("path", {
                "aria-hidden": !0,
                d: "M9.11995 3.16L9.38995 3.89C9.40593 3.92181 9.43011 3.94877 9.46 3.96811C9.48988 3.98744 9.52439 3.99846 9.55995 4H10.3699C10.5599 4 10.6099 4.26 10.4499 4.41L9.76995 5.07C9.71086 5.13269 9.67549 5.21403 9.66995 5.3V6.13C9.66965 6.17649 9.6589 6.22232 9.63849 6.2641C9.61808 6.30587 9.58854 6.34252 9.55204 6.37133C9.51555 6.40013 9.47305 6.42037 9.42768 6.43052C9.38231 6.44068 9.33524 6.4405 9.28995 6.43L8.59995 6.1C8.56441 6.08159 8.52497 6.07198 8.48495 6.07198C8.44492 6.07198 8.40549 6.08159 8.36995 6.1L7.57995 6.57C7.38995 6.69 7.20995 6.57 7.26995 6.35L7.51995 5.49C7.53745 5.45777 7.54662 5.42168 7.54662 5.385C7.54662 5.34833 7.53745 5.31223 7.51995 5.28L6.99995 4.81C6.86995 4.68 6.99995 4.42 7.18995 4.37L7.99995 4.17C8.04629 4.1582 8.08971 4.13702 8.12755 4.10779C8.16539 4.07855 8.19684 4.04187 8.21995 4L8.68995 3.2C8.79995 3 9.05995 3 9.11995 3.16Z",
                fill: "#A5F7DE",
              }),
            ],
          }),
        });
      }
    },
    72006: function (e, t, n) {
      n.d(t, {
        FZ: function () {
          return P;
        },
        Hl: function () {
          return B;
        },
        NJ: function () {
          return M;
        },
        R8: function () {
          return U;
        },
        Sq: function () {
          return b;
        },
        Wg: function () {
          return D;
        },
        Zn: function () {
          return O;
        },
        c2: function () {
          return Z;
        },
        eE: function () {
          return j;
        },
        iE: function () {
          return F;
        },
        iK: function () {
          return y;
        },
        lv: function () {
          return L;
        },
        nR: function () {
          return A;
        },
        q0: function () {
          return l.a;
        },
        x0: function () {
          return x;
        },
        xb: function () {
          return k;
        },
        yd: function () {
          return v;
        },
      }),
        n(47120),
        n(653041);
      var r = n(371917),
        i = n(421520),
        l = n.n(i),
        s = n(563751),
        a = n.n(s),
        o = n(608382),
        c = n.n(o),
        u = n(722661),
        d = n.n(u),
        h = n(225389),
        _ = n.n(h),
        f = n(71716),
        E = n.n(f),
        p = n(869045),
        m = n.n(p),
        I = n(110599),
        C = n.n(I),
        S = n(801539),
        g = n.n(S),
        R = n(887868),
        T = n.n(R);
      function N(e, t, n, i) {
        let l = i.getCurrentContent(),
          s = null;
        null != e && (s = (l = l.createEntity(...e)).getLastCreatedEntityKey());
        let a = l.getFirstBlock(),
          o = new r.SelectionState({
            anchorKey: a.getKey(),
            anchorOffset: t,
            focusKey: a.getKey(),
            focusOffset: n,
          });
        return (
          (l = r.Modifier.applyEntity(l, o, s)),
          r.EditorState.set(i, { currentContent: l })
        );
      }
      function x(e, t, n, i) {
        let l, s;
        let o = t.getCurrentContent(),
          c = o.getFirstBlock(),
          u = c.getText();
        "number" == typeof n
          ? (n > u.length && (n = u.length),
            null != i && i > u.length && (i = u.length),
            (l = new r.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != i && 0 !== i ? i : n,
            })))
          : (l = t.getSelection());
        let d = t.getCurrentInlineStyle(),
          h = a()(o, l);
        return (
          l.isCollapsed()
            ? ((o = r.Modifier.insertText(o, l, e, d, h)),
              (s = "insert-characters"))
            : ((o = r.Modifier.replaceText(o, l, e, d, h)),
              (s = "replace-characters")),
          r.EditorState.push(t, o, s)
        );
      }
      function v(e, t) {
        switch (e) {
          case "delete":
            return g()(t);
          case "delete-word":
            return _()(t);
          case "backspace":
            return C()(t);
          case "backspace-word":
            return d()(t);
          case "backspace-to-start-of-line":
            return c()(t);
          default:
            return t;
        }
      }
      function O(e, t) {
        switch (e) {
          case "transpose-characters":
            return T()(t);
          case "move-selection-to-start-of-block":
            return m()(t);
          case "move-selection-to-end-of-block":
            return E()(t);
          default:
            return t;
        }
      }
      function b(e) {
        return e.getCurrentContent().getFirstBlock().getText();
      }
      function L(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = t.getCurrentContent(),
          i = r.getFirstBlock(),
          l = i.getText(),
          s = [];
        return (
          i.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
              let n = r.getEntity(i.getEntityAt(e)).getType(),
                a = l.substring(e, t);
              s.push({ processed: !1, type: n, start: e, end: t, text: a });
            },
          ),
          e.forEach((e) => {
            let r = !1;
            if (
              (s.forEach((n) => {
                let { type: i, start: l, end: s } = e,
                  a = e.getFullMatch();
                if (!n.processed)
                  n.type === i && n.start === l && n.text === a
                    ? ((n.processed = !0), (r = !0))
                    : ((l >= n.start && l < n.end) ||
                        (s > n.start && s <= n.end)) &&
                      ((n.processed = !0), (t = N(null, n.start, n.end, t)));
              }),
              r)
            )
              return;
            let i = n[e.type];
            t = N(
              [
                e.type,
                null != i && i.mutable ? "MUTABLE" : "IMMUTABLE",
                { token: e },
              ],
              e.start,
              e.end,
              t,
            );
          }),
          s.forEach((e) => {
            !e.processed && (t = N(null, e.start, e.end, t));
          }),
          t
        );
      }
      function A(e) {
        return r.EditorState.createEmpty(new r.CompositeDecorator(e));
      }
      function P(e) {
        let t = r.EditorState.push(e, r.ContentState.createFromText("")),
          n = e.getSelection();
        return (
          null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t
        );
      }
      function Z(e, t) {
        let n = b(t);
        return x(e, t, 0, n.length);
      }
      function y(e, t) {
        let n = t.getSelection();
        return (
          (n = (n = n.set("focusOffset", e)).set("anchorOffset", e)),
          r.EditorState.forceSelection(t, n)
        );
      }
      function M(e) {
        return y(e.getCurrentContent().getFirstBlock().getText().length, e);
      }
      function j(e) {
        return y(0, e);
      }
      function U(e) {
        let t = e.getSelection();
        return (
          (t = (t = t.set("focusOffset", 0)).set("isBackward", !0)),
          r.EditorState.forceSelection(e, t)
        );
      }
      function D(e) {
        let t = b(e),
          n = e.getSelection();
        return (
          (n = (n = n.set("focusOffset", t.length)).set("isBackward", !1)),
          r.EditorState.forceSelection(e, n)
        );
      }
      function B(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 512,
          n = b(e);
        if (n.length > t) {
          let i = e.getSelection();
          (e = x("", e, t, n.length)),
            i.getAnchorOffset() > t && (i = i.set("anchorOffset", t)),
            i.getFocusOffset() > t && (i = i.set("focusOffset", t)),
            (e = r.EditorState.forceSelection(e, i));
        }
        return e;
      }
      function F(e) {
        let t = window.getSelection();
        if (null == t || "Caret" !== t.type || null == e) return;
        let n = t.getRangeAt(0);
        if (
          !(function (e, t) {
            for (; null != e; ) {
              if (e === t) return !0;
              e = e.parentNode;
            }
            return !1;
          })(n.commonAncestorContainer, e)
        )
          return;
        let r = n.getClientRects()[0],
          i = e.getClientRects()[0];
        if (null == r || null == i) return;
        let l = r.left - i.left + e.scrollLeft;
        l < e.scrollLeft
          ? (e.scrollLeft = l - 10)
          : l > e.scrollLeft + e.offsetWidth &&
            (e.scrollLeft = l - e.offsetWidth + 3);
      }
      function k(e) {
        return 0 === b(e).length;
      }
    },
    181389: function (e, t, n) {
      n.d(t, {
        Jl: function () {
          return a;
        },
        g9: function () {
          return o;
        },
      }),
        n(653041);
      var r = n(395041);
      n(349033);
      var i = n(999650);
      n(72006);
      var l = n(405656);
      n(981631);
      let s = { [i.Qe.FILTER]: r.w, [i.Qe.ANSWER]: r.O };
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = [];
        return (
          Object.keys(e).forEach((n) => {
            let r = e[n];
            t.push({
              strategy: (e, t, r) =>
                (function (e, t, n, r) {
                  t.findEntityRanges((t) => {
                    let n = t.getEntity();
                    return null !== n && e.getEntity(n).getType() === r;
                  }, n);
                })(r, e, t, n),
              component: s[r.componentType],
            });
          }),
          t
        );
      }
      function o(e, t) {
        let { focusOffset: n, anchorOffset: r } = t.getSelection();
        return (0, l.g9)(e, n, r);
      }
    },
    463659: function (e, t, n) {
      e.exports = {
        container: "container_eedf95",
        queryContainer: "queryContainer_eedf95",
        queryShortcut: "queryShortcut_eedf95",
        queryText: "queryText_eedf95",
        keyCombo: "keyCombo_eedf95",
        focused: "focused_eedf95",
      };
    },
    742380: function (e, t, n) {
      e.exports = {
        searchAnswer: "searchAnswer_b0fa94",
        searchFilter: "searchFilter_b0fa94",
      };
    },
    516707: function (e, t, n) {
      e.exports = {
        reminderTooltip: "reminderTooltip_df8ef6",
        tooltipContent: "tooltipContent_df8ef6",
        buttonContainer: "buttonContainer_df8ef6",
      };
    },
    735807: function (e, t, n) {
      e.exports = {
        thumbnailStack: "thumbnailStack_a71e15",
        "height-1": "height-1_a71e15",
        "height-2": "height-2_a71e15",
        "height-3": "height-3_a71e15",
        "height-max": "height-max_a71e15",
        thumbnail: "thumbnail_a71e15",
      };
    },
    495347: function (e, t, n) {
      e.exports = {
        container: "container_a934b7",
        emojiContainer: "emojiContainer_a934b7",
        name: "name_a934b7",
        linkedName: "linkedName_a934b7",
        infoContainer: "infoContainer_a934b7",
      };
    },
    367993: function (e, t, n) {
      e.exports = {
        container: "container_ecba8f",
        cardContainerWithoutTopIndicator:
          "cardContainerWithoutTopIndicator_ecba8f",
        tierTrialIndicator: "tierTrialIndicator_ecba8f",
        tierTrialIndicatorIcon: "tierTrialIndicatorIcon_ecba8f",
        tierTopIndicator: "tierTopIndicator_ecba8f",
        tierInfoContainer: "tierInfoContainer_ecba8f",
        tierDescriptionTruncate: "tierDescriptionTruncate_ecba8f",
        toggleTruncationButton: "toggleTruncationButton_ecba8f",
        toggleTruncationButtonInner: "toggleTruncationButtonInner_ecba8f",
        toggleTruncationButtonIcon: "toggleTruncationButtonIcon_ecba8f",
        subscriptionPerks: "subscriptionPerks_ecba8f",
        roleMessagePreview: "roleMessagePreview_ecba8f",
        sectionHeader: "sectionHeader_ecba8f",
        benefitsSection: "benefitsSection_ecba8f",
        benefitsList: "benefitsList_ecba8f",
        emojiList: "emojiList_ecba8f",
        emojiListEmoji: "emojiListEmoji_ecba8f",
        divider: "divider_ecba8f",
      };
    },
    544126: function (e, t, n) {
      e.exports = {
        draftBadgeContainer: "draftBadgeContainer_ef006b",
        tierName: "tierName_ef006b",
        tierImage: "tierImage_ef006b",
        tierPrice: "tierPrice_ef006b",
        tierPeriod: "tierPeriod_ef006b",
      };
    },
    603922: function (e, t, n) {
      e.exports = {
        container: "container_de6558",
        tierTextInfoContainer: "tierTextInfoContainer_de6558",
        tierPriceContainer: "tierPriceContainer_de6558",
        tierPrice: "tierPrice_de6558",
        toggleButton: "toggleButton_de6558",
      };
    },
    673823: function (e, t, n) {
      e.exports = {
        confirmationContainer: "confirmationContainer_dbfdb0",
        confirmationHeader: "confirmationHeader_dbfdb0",
        confirmationSubtitle: "confirmationSubtitle_dbfdb0",
        openDiscordButton: "openDiscordButton_dbfdb0",
        doneButton: "doneButton_dbfdb0",
      };
    },
    265746: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_ea0167",
        headerEmpty: "headerEmpty_ea0167",
        closeContainer: "closeContainer_ea0167",
        headerImage: "headerImage_ea0167",
        headerImageEmpty: "headerImageEmpty_ea0167",
        closeIcon: "closeIcon_ea0167",
        tierImageContainer: "tierImageContainer_ea0167",
        tierImage: "tierImage_ea0167",
        confirmationContainer: "confirmationContainer_ea0167",
        confirmationHeader: "confirmationHeader_ea0167",
        confirmationSubtitle: "confirmationSubtitle_ea0167",
        confirmationSectionLabel: "confirmationSectionLabel_ea0167",
        confirmationBenefits: "confirmationBenefits_ea0167",
        confirmationButton: "confirmationButton_ea0167",
        emojiBenefitsRow: "emojiBenefitsRow_ea0167",
        emojiImage: "emojiImage_ea0167",
        emojiName: "emojiName_ea0167",
      };
    },
    131809: function (e, t, n) {
      e.exports = {
        container: "container_ca7129",
        emojiContainer: "emojiContainer_ca7129",
        name: "name_ca7129",
        infoContainer: "infoContainer_ca7129",
        caret: "caret_ca7129",
      };
    },
    261842: function (e, t, n) {
      e.exports = {
        premiumFeatureBorder:
          "premiumFeatureBorder_c6d722 featureBorder_c6d722",
        limitedFeatureBorder:
          "limitedFeatureBorder_c6d722 featureBorder_c6d722",
        background: "background_c6d722",
        premiumBackground: "premiumBackground_c6d722 background_c6d722",
        limitedBackground: "limitedBackground_c6d722 background_c6d722",
      };
    },
    869630: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_b9619e",
        wrapperAccepted: "wrapperAccepted_b9619e",
        rewardTileWrapper: "rewardTileWrapper_b9619e",
        rewardTile: "rewardTile_b9619e",
        heading: "heading_b9619e",
        promotedTag: "promotedTag_b9619e",
        content: "content_b9619e",
        headingWithSubmenu: "headingWithSubmenu_b9619e",
        questTitle: "questTitle_b9619e",
        gameTile: "gameTile_b9619e",
        ctas: "ctas_b9619e",
        cta: "cta_b9619e",
        submenuWrapper: "submenuWrapper_b9619e",
        submenuIcon: "submenuIcon_b9619e",
      };
    },
    489066: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c34599",
        instructions: "instructions_c34599",
        rewardTile: "rewardTile_c34599",
      };
    },
    948488: function (e, t, n) {
      e.exports = {
        search: "search_a46bef",
        searchBar: "searchBar_a46bef",
        icon: "icon_a46bef",
        open: "open_a46bef",
        focused: "focused_a46bef",
      };
    },
    973050: function (e, t, n) {
      e.exports = {
        resultsGroup: "resultsGroup_b0286e",
        header: "header_b0286e",
        searchLearnMore: "searchLearnMore_b0286e",
        searchClearHistory: "searchClearHistory_b0286e",
        option: "option_b0286e",
        plusIcon: "plusIcon_b0286e",
        nonText: "nonText_b0286e",
        filter: "filter_b0286e",
        answer: "answer_b0286e",
        user: "user_b0286e",
        displayAvatar: "displayAvatar_b0286e",
        displayedNick: "displayedNick_b0286e",
        displayUsername: "displayUsername_b0286e",
        searchOption: "searchOption_b0286e",
        datePicker: "datePicker_b0286e",
        datePickerHint: "datePickerHint_b0286e",
        hint: "hint_b0286e",
        hintValue: "hintValue_b0286e",
        searchResultChannelIcon: "searchResultChannelIcon_b0286e",
        searchResultChannelCategory: "searchResultChannelCategory_b0286e",
        resultChannel: "resultChannel_b0286e",
      };
    },
    568492: function (e, t, n) {
      e.exports = {
        upsellOuter: "upsellOuter_d6af8e",
        upsellInner: "upsellInner_d6af8e",
        upsellTitle: "upsellTitle_d6af8e",
        nitroWheel: "nitroWheel_d6af8e",
        close: "close_d6af8e",
        closeIcon: "closeIcon_d6af8e",
      };
    },
    49637: function (e, t, n) {
      e.exports = {};
    },
  },
]);
//# sourceMappingURL=68b28ad1924dbd935b27.js.map
