"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67564"],
  {
    201895: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return c;
        },
      }),
        t(653041);
      var i = t(131704),
        r = t(699516),
        l = t(594174),
        s = t(933557),
        o = t(981631),
        u = t(689938);
      function a(e) {
        let { isSubscriptionGated: n, needSubscriptionToAccess: t } = e;
        if (n)
          return t
            ? u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED
            : u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED;
      }
      function c(e) {
        let n,
          {
            channel: t,
            unread: c = !1,
            mentionCount: _ = 0,
            userCount: d,
            embeddedActivitiesCount: f,
            isSubscriptionGated: E,
            needSubscriptionToAccess: A,
          } = e,
          I = (0, s.F6)(t, l.default, r.Z);
        switch (t.type) {
          case o.d4z.DM:
            n = c
              ? u.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS
              : u.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL;
            break;
          case o.d4z.GROUP_DM:
            n = c
              ? u.Z.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS
              : u.Z.Messages.GROUP_MESSAGE_A11Y_LABEL;
            break;
          case o.d4z.GUILD_STORE:
            n = u.Z.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
            break;
          case o.d4z.GUILD_DIRECTORY:
            n = u.Z.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
            break;
          case o.d4z.GUILD_ANNOUNCEMENT:
            n =
              _ > 0
                ? u.Z.Messages
                    .GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS
                : c
                  ? u.Z.Messages
                      .GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS
                  : u.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
            break;
          case o.d4z.GUILD_VOICE:
            let v = [
              u.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
                channelName: t.name,
              }),
            ];
            if (
              (_ > 0 &&
                v.push(
                  u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format(
                    { mentionCount: _ },
                  ),
                ),
              c && v.push(u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD),
              null != d)
            ) {
              let e = t.userLimit;
              null != e && e > 0
                ? v.push(
                    u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
                      userCount: d,
                      limit: e,
                    }),
                  )
                : v.push(
                    u.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format(
                      { userCount: d },
                    ),
                  );
            }
            null != f &&
              f > 0 &&
              v.push(
                u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format(
                  { activitiesCount: f },
                ),
              );
            let L = a({ isSubscriptionGated: E, needSubscriptionToAccess: A });
            return null != L && v.push(L), v.join(", ");
          case o.d4z.GUILD_STAGE_VOICE:
            n = u.Z.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
            break;
          default:
            n = i.Ec.has(t.type)
              ? _ > 0
                ? u.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS
                : c
                  ? u.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS
                  : u.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL
              : _ > 0
                ? u.Z.Messages
                    .GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS
                : c
                  ? u.Z.Messages
                      .GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS
                  : u.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL;
        }
        let m = [n.format({ channelName: I, mentionCount: _ })],
          S = a({ isSubscriptionGated: E, needSubscriptionToAccess: A });
        return null != S && m.push(S), m.join(", ");
      }
    },
    817460: function (e, n, t) {
      t.d(n, {
        JE: function () {
          return o;
        },
        ab: function () {
          return s;
        },
        iG: function () {
          return u;
        },
        lL: function () {
          return c;
        },
        rC: function () {
          return a;
        },
      });
      var i = t(293810),
        r = t(474936),
        l = t(689938);
      function s(e) {
        return "roles" in e
          ? "emoji-".concat(e.id)
          : ""
              .concat(e.ref_type, "-")
              .concat(e.emoji_id, "-")
              .concat(e.name, "-")
              .concat(e.ref_id);
      }
      function o(e) {
        let { interval: n, interval_count: t } = e;
        return (function (e) {
          switch (e) {
            case r.rV.DAY:
              return l.Z.Messages.DAY;
            case r.rV.MONTH:
              return l.Z.Messages.MONTH;
            case r.rV.YEAR:
              return l.Z.Messages.YEAR;
          }
        })(n).format({ count: t });
      }
      function u(e) {
        let { interval: n, interval_count: t } = e;
        switch (n) {
          case r.rV.DAY:
            if (t > 0 && t % 7 == 0)
              return l.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({
                weeks: t / 7,
              });
            return l.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: t });
          case r.rV.MONTH:
            return l.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({
              months: t,
            });
          case r.rV.YEAR:
            return l.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: t });
        }
      }
      function a(e) {
        return e.ref_type === i.Qs.CHANNEL;
      }
      function c(e) {
        return e.ref_type === i.Qs.INTANGIBLE;
      }
    },
    403474: function (e, n, t) {
      t.d(n, {
        k: function () {
          return i;
        },
      });
      let i = {
        id: "0",
        name: "",
        mentionable: !1,
        position: 0,
        hoist: !1,
        permissions: t(981631).Plq.SEND_MESSAGES,
        color: 0,
        colorString: "0",
        icon: null,
        unicodeEmoji: null,
        flags: 0,
      };
    },
    290348: function (e, n, t) {
      t.d(n, {
        B7: function () {
          return ee;
        },
        Ek: function () {
          return j;
        },
        F2: function () {
          return W;
        },
        GM: function () {
          return X;
        },
        GP: function () {
          return G;
        },
        H9: function () {
          return Q;
        },
        Lo: function () {
          return z;
        },
        PK: function () {
          return O;
        },
        R7: function () {
          return w;
        },
        TT: function () {
          return V;
        },
        UE: function () {
          return H;
        },
        XZ: function () {
          return k;
        },
        Xo: function () {
          return $;
        },
        _T: function () {
          return M;
        },
        d9: function () {
          return b;
        },
        mR: function () {
          return U;
        },
        p9: function () {
          return B;
        },
        qs: function () {
          return y;
        },
        rU: function () {
          return K;
        },
      }),
        t(47120);
      var i = t(470079),
        r = t(512722),
        l = t.n(r),
        s = t(392711),
        o = t(772848),
        u = t(866442),
        a = t(731965),
        c = t(442837),
        _ = t(80932),
        d = t(749210),
        f = t(339085),
        E = t(73346),
        A = t(817460),
        I = t(423117),
        v = t(584825),
        L = t(289393),
        m = t(790285),
        S = t(303737),
        g = t(971792),
        C = t(22902),
        N = t(403474),
        p = t(944537),
        Z = t(293810),
        R = t(981631),
        D = t(474936);
      function T(e, n, t) {
        let r = (0, p.n)((e) => e.setListing),
          l = i.useCallback(
            (i) => {
              r(e, (e) => {
                var r;
                let l =
                  null !== (r = null == e ? void 0 : e[n]) && void 0 !== r
                    ? r
                    : t;
                return Object.assign({}, e, {
                  [n]: "function" == typeof i ? i(l) : i,
                });
              });
            },
            [r, e, n, t],
          ),
          s = (0, p.n)((t) => {
            var i;
            return null === (i = t.listings[e]) || void 0 === i ? void 0 : i[n];
          });
        return [void 0 !== s ? s : t, l];
      }
      function h(e, n) {
        let t = (0, c.e7)([L.Z], () => L.Z.getSubscriptionListing(e));
        return i.useMemo(() => n(t), [t]);
      }
      function M(e) {
        let n = h(e, (e) => {
          var n;
          return null !== (n = null == e ? void 0 : e.name) && void 0 !== n
            ? n
            : "";
        });
        return T(e, "name", n);
      }
      function U(e) {
        let n = h(e, (e) => {
          var n;
          return null == e
            ? void 0
            : null === (n = e.subscription_plans[0]) || void 0 === n
              ? void 0
              : n.price;
        });
        return T(e, "priceTier", n);
      }
      function O(e) {
        let n = h(e, (e) => {
          var n;
          return null !== (n = null == e ? void 0 : e.description) &&
            void 0 !== n
            ? n
            : "";
        });
        return T(e, "description", n);
      }
      function b(e, n) {
        let t = h(e, (e) => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, E._W)(e.application_id, e.image_asset, n);
        });
        return T(e, "image", t);
      }
      function B(e, n) {
        let t = (0, g.Z)(n, e);
        return T(
          e,
          "roleIcon",
          i.useMemo(() => {
            var e, n;
            return {
              icon:
                null !== (e = null == t ? void 0 : t.icon) && void 0 !== e
                  ? e
                  : void 0,
              unicodeEmoji:
                null !== (n = null == t ? void 0 : t.unicodeEmoji) &&
                void 0 !== n
                  ? n
                  : void 0,
            };
          }, [t]),
        );
      }
      function y(e, n) {
        let t = (0, g.Z)(n, e),
          r = (0, p.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t
              ? void 0
              : t.roleColor;
          }),
          l = (0, p.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t
              ? void 0
              : t.roleIcon;
          });
        return i.useMemo(() => {
          let e = { ...(null != t ? t : N.k) };
          if (void 0 !== l) {
            var n, i;
            (e.icon = null !== (n = l.icon) && void 0 !== n ? n : ""),
              (e.unicodeEmoji =
                null !== (i = l.unicodeEmoji) && void 0 !== i ? i : "");
          }
          return (
            void 0 !== r && ((e.color = r), (e.colorString = (0, u.Rf)(r))), e
          );
        }, [t, l, r]);
      }
      function j(e, n) {
        let t = (0, g.Z)(n, e);
        return T(
          e,
          "roleColor",
          i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.color) && void 0 !== e
              ? e
              : R.p6O;
          }, [t]),
        );
      }
      function G(e, n) {
        let t = (0, g.Z)(n, e);
        return T(
          e,
          "channelAccessFormat",
          i.useMemo(
            () =>
              null == t
                ? p.I.SOME_CHANNELS_ACCESS
                : (0, m.MT)(t)
                  ? p.I.ALL_CHANNELS_ACCESS
                  : p.I.SOME_CHANNELS_ACCESS,
            [t],
          ),
        );
      }
      let P = [];
      function H(e) {
        let n = h(e, (e) =>
          null == e ? P : e.role_benefits.benefits.filter(A.rC),
        );
        return T(e, "channelBenefits", n);
      }
      let F = [];
      function w(e) {
        let n = h(e, (e) =>
          null == e ? F : e.role_benefits.benefits.filter(A.lL),
        );
        return T(e, "intangibleBenefits", n);
      }
      let x = new Set();
      function Y(e, n) {
        return 0 === e.length
          ? x
          : new Set(
              e
                .filter((e) => e.roles.includes(n))
                .map((e) => {
                  let { id: n } = e;
                  return n;
                }),
            );
      }
      function k(e, n) {
        let t = (0, g.Z)(n, e),
          r = (0, c.Wu)([f.ZP], () => f.ZP.getGuildEmoji(n), [n]);
        return T(
          e,
          "tierEmojiIds",
          i.useMemo(() => (null == t ? x : Y(r, t.id)), [r, t]),
        );
      }
      function V(e) {
        var n;
        let t = (0, v.oC)(e),
          { selectedOption: i } = (0, C.Z)(
            null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n
              ? n
              : null,
          );
        return T(e, "trialInterval", null != i ? i : null);
      }
      function W(e) {
        var n;
        let t = (0, v.oC)(e);
        return T(
          e,
          "trialLimit",
          null !== (n = null == t ? void 0 : t.max_num_active_trial_users) &&
            void 0 !== n
            ? n
            : null,
        );
      }
      function K(e) {
        return (0, p.n)((n) => void 0 !== n.listings[e]);
      }
      function z(e) {
        return (0, p.n)((n) => {
          for (let t of e) if (void 0 !== n.listings[t]) return !0;
          return !1;
        });
      }
      function Q(e) {
        let n = h(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
          [t] = T(e, "priceTier", void 0);
        return [
          i.useMemo(() => {
            var e, i, r, l, s;
            return {
              price:
                null !== (e = null != t ? t : null == n ? void 0 : n.price) &&
                void 0 !== e
                  ? e
                  : 0,
              currency:
                null !== (i = null == n ? void 0 : n.currency) && void 0 !== i
                  ? i
                  : R.pKx.USD,
              interval:
                null !== (r = null == n ? void 0 : n.interval) && void 0 !== r
                  ? r
                  : D.rV.MONTH,
              interval_count:
                null !== (l = null == n ? void 0 : n.interval_count) &&
                void 0 !== l
                  ? l
                  : 1,
              id:
                null !== (s = null == n ? void 0 : n.id) && void 0 !== s
                  ? s
                  : "",
            };
          }, [n, t]),
        ];
      }
      function X(e) {
        var n;
        (n = e),
          (0, a.j)(() => {
            p.n.setState((e) => ({
              listings: {
                ...e.listings,
                [n]: e.listings.nonexistantEditStateId,
              },
            }));
          });
      }
      async function q(e) {
        let { guildId: n, editStateId: t } = e,
          i = L.Z.getSubscriptionListing(t);
        l()(null != i, "listing doesnt exist");
        let r = i.role_id,
          o = i.id,
          u = p.n.getState().listings[t];
        l()(null != u, "edit state does not exist");
        let {
          roleColor: a,
          roleIcon: c,
          trialLimit: E,
          trialInterval: A,
          tierEmojiIds: v,
        } = u;
        (void 0 !== a || void 0 !== c) &&
          (await d.Z.updateRole(n, r, {
            color: a,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
          }));
        let m = L.Z.getSubscriptionTrial(o);
        if (
          ((null != E || null != A || (null != m && null == A)) &&
            (await I.I1(n, o, { trial: A, max_num_active_trial_users: E })),
          void 0 !== v)
        ) {
          let e = Y(f.ZP.getGuildEmoji(n), r),
            t = (0, s.difference)([...v], [...e]),
            i = (0, s.difference)([...e], [...v]),
            l = t
              .map((e) => f.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null != e)
                  return (0, _.dv)({
                    guildId: n,
                    emojiId: e.id,
                    roles: [...e.roles, r],
                  });
              }),
            o = i
              .map((e) => f.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null == e) return;
                let t = e.roles.filter((e) => e !== r);
                return t.length > 0
                  ? (0, _.dv)({ guildId: n, emojiId: e.id, roles: t })
                  : (0, _.RE)(n, e.id);
              });
          await Promise.all([...l, ...o]);
        }
      }
      async function J(e) {
        let {
            guildId: n,
            editStateId: t,
            groupListingId: i,
            onBeforeDispatchNewListing: r,
          } = e,
          s = p.n.getState().listings[t];
        l()(null != s, "edit state does not exist");
        let {
          name: o,
          description: u,
          channelBenefits: a,
          intangibleBenefits: c,
          priceTier: _,
          image: d,
          channelAccessFormat: f,
        } = s;
        l()(null != o, "no name provided"),
          l()(null != u, "no description provided"),
          l()(null != _, "no priceTier provided"),
          l()(null != d, "no image provided");
        let E = f === p.I.ALL_CHANNELS_ACCESS,
          A = i;
        null == A && (A = (await I.uw(n, {})).id),
          null != a && a.length > 0 && (await (0, S.r4)(n, a));
        let v = [...(null != a ? a : []), ...(null != c ? c : [])],
          L = (0, S.yL)(t, n);
        return I.dA({
          guildId: n,
          groupListingId: A,
          data: {
            can_access_all_channels: E,
            image: d,
            name: o,
            description: u,
            benefits: v,
            priceTier: _,
          },
          analyticsContext: L,
          onBeforeDispatchNewListing: r,
        });
      }
      function $() {
        let [e, n] = i.useState(!1),
          [t, r] = i.useState();
        return {
          loading: e,
          error: t,
          handleCreateOrUpdateFromEditState: i.useCallback(async (e) => {
            let {
                guildId: t,
                editStateId: i,
                groupListingId: o,
                onBeforeDispatchNewListing: u,
                onAfterDispatchNewListing: c,
              } = e,
              _ = i,
              d = L.Z.getSubscriptionListing(_);
            try {
              if ((n(!0), r(void 0), null != d))
                l()(null != o, "groupListingId is null"),
                  await (function (e) {
                    var n;
                    let { guildId: t, editStateId: i, groupListingId: r } = e,
                      o = L.Z.getSubscriptionListing(i);
                    l()(null != o, "listing doesnt exist");
                    let u = p.n.getState().listings[i];
                    l()(null != u, "edit state does not exist");
                    let {
                        name: a,
                        description: c,
                        channelBenefits: _,
                        intangibleBenefits: d,
                        priceTier: f,
                        image: E,
                        channelAccessFormat: v,
                      } = u,
                      m = {};
                    if (
                      (a !== o.name && (m.name = a),
                      c !== o.description && (m.description = c),
                      f !==
                        (null === (n = o.subscription_plans[0]) || void 0 === n
                          ? void 0
                          : n.price) && (m.priceTier = f),
                      null != E && (m.image = E),
                      null != v &&
                        (m.can_access_all_channels =
                          v === p.I.ALL_CHANNELS_ACCESS),
                      null != _ || null != d)
                    ) {
                      let e = o.role_benefits.benefits.filter(A.rC),
                        n = o.role_benefits.benefits.filter(A.lL),
                        t = [...(null != _ ? _ : e), ...(null != d ? d : n)];
                      m.benefits = t;
                    }
                    return (0, s.isEmpty)(m)
                      ? o
                      : I.O0({
                          guildId: t,
                          groupListingId: r,
                          listingId: i,
                          data: m,
                        });
                  })({ guildId: t, editStateId: _, groupListingId: o });
              else {
                var f, E;
                let e = await J({
                  guildId: t,
                  editStateId: _,
                  groupListingId: o,
                  onBeforeDispatchNewListing: u,
                });
                (_ = e.id),
                  (f = i),
                  (E = _),
                  (0, a.j)(() => {
                    p.n.setState((e) => ({
                      listings: {
                        ...e.listings,
                        [E]: e.listings[f],
                        [f]: void 0,
                      },
                    }));
                  }),
                  null == c || c(e);
              }
              return await q({ guildId: t, editStateId: _ }), X(_), !0;
            } catch (e) {
              if (!("getAnyErrorMessage" in e)) throw e;
              r(e);
            } finally {
              n(!1);
            }
          }, []),
        };
      }
      function ee(e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { includeSoftDeleted: !1 },
          r = (0, v._k)(e, t),
          l = (0, p.n)((e) => e.editStateIdsForGroup[n]),
          s = (0, p.n)((e) => e.setEditStateIdsForGroup),
          u = (0, p.n)((e) => e.setListing),
          a = i.useMemo(
            () => [
              ...r.map((e) => {
                let { id: n } = e;
                return n;
              }),
              ...(null != l ? l : []),
            ],
            [l, r],
          ),
          c = i.useCallback(() => {
            let e = (0, o.Z)();
            s(n, (n) => [...(null != n ? n : []), e]);
          }, [n, s]),
          _ = i.useCallback(
            (e) => {
              let t = (0, o.Z)();
              return (
                s(n, (e) => [...(null != e ? e : []), t]),
                e.listings.forEach((n) => {
                  u(t, () => ({
                    name: n.name,
                    description: n.description,
                    priceTier: n.price_tier,
                    image: n.image,
                    intangibleBenefits: n.additional_perks,
                    channelBenefits: n.channels.map((e) => ({
                      ref_id: e.id,
                      ref_type: Z.Qs.CHANNEL,
                      description: e.description,
                      name: e.name,
                      emoji_name: e.emoji_name,
                    })),
                    roleIcon: { unicodeEmoji: void 0, icon: n.image },
                    roleColor: n.role_color,
                    usedTemplate: e.category,
                  }));
                }),
                t
              );
            },
            [n, s, u],
          );
        return {
          editStateIds: a,
          addNewEditStateId: c,
          addNewEditStateFromTemplate: _,
          removeEditStateId: i.useCallback(
            (e) => {
              s(n, (n) => (null != n ? n : []).filter((n) => n !== e));
            },
            [n, s],
          ),
        };
      }
    },
    403910: function (e, n, t) {
      var i = t(442837),
        r = t(339085);
      n.Z = function (e, n) {
        return (0, i.e7)(
          [r.ZP],
          () => {
            var t;
            if (null == n) return null;
            let i = r.ZP.getDisambiguatedEmojiContext(e);
            return null !== (t = i.getById(n)) && void 0 !== t
              ? t
              : i.getByName(n);
          },
          [e, n],
        );
      };
    },
    570533: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(470079),
        r = t(442837),
        l = t(339085),
        s = t(889564);
      let o = [];
      function u(e) {
        let n = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
        return i.useMemo(
          () => (null == n ? o : n.filter((n) => (0, s.Kt)(n, e))),
          [n, e],
        );
      }
    },
    971792: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(442837),
        r = t(430824),
        l = t(584825);
      function s(e, n) {
        let t = (0, l.jO)(n);
        return (0, i.e7)([r.Z], () =>
          null != e && null != t ? r.Z.getRole(e, t.role_id) : void 0,
        );
      }
    },
    22902: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(470079),
        r = t(817460),
        l = t(293810),
        s = t(474936),
        o = t(689938);
      function u(e) {
        return i.useMemo(() => {
          var n;
          let t = l.DN.map((e) => ({
              value: e,
              label:
                e.interval === s.rV.DAY && 7 === e.interval_count
                  ? o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format(
                      { defaultLimit: (0, r.iG)(e) },
                    )
                  : (0, r.iG)(e),
              isDefault: e.interval === s.rV.DAY && 7 === e.interval_count,
            })),
            i =
              null != e
                ? null ===
                    (n = t.find(
                      (n) =>
                        null != n.value &&
                        n.value.interval === e.interval &&
                        n.value.interval_count === e.interval_count,
                    )) || void 0 === n
                  ? void 0
                  : n.value
                : e;
          return { options: t, selectedOption: i };
        }, [e]);
      }
    },
    629262: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(442837),
        r = t(592125);
      function l(e) {
        return (0, i.Wu)(
          [r.Z],
          () => e.filter((e) => r.Z.hasChannel(e.ref_id)),
          [e],
        );
      }
    },
    528027: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(120356),
        l = t.n(r),
        s = t(596454),
        o = t(377171),
        u = t(403910),
        a = t(549631),
        c = t(873198);
      function _(e) {
        var n;
        let { guildId: t, emojiId: r, emojiName: _, className: d } = e,
          f = (0, u.Z)(t, r);
        return null != f || null != _
          ? (0, i.jsx)(s.Z, {
              emojiId: null == f ? void 0 : f.id,
              emojiName: null != _ ? _ : null == f ? void 0 : f.name,
              animated:
                null !== (n = null == f ? void 0 : f.animated) &&
                void 0 !== n &&
                n,
              className: l()(c.emojiIcon, d),
            })
          : (0, i.jsx)(a.Z, {
              className: l()(c.emojiIcon, d),
              color: o.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
            });
      }
    },
    686807: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(481060),
        l = t(201895),
        s = t(471445),
        o = t(823379),
        u = t(303737),
        a = t(293810),
        c = t(689938),
        _ = t(681027);
      function d(e) {
        let { channelId: n } = e,
          t = (0, u.m7)(n);
        if (null == t)
          return (0, i.jsx)(i.Fragment, {
            children: "[".concat(
              c.Z.Messages
                .GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL,
              "]",
            ),
          });
        let o = t.isMediaChannel() ? r.ImageIcon : (0, s.Th)(t.type);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.HiddenVisually, {
              children: (0, l.ZP)({ channel: t }),
            }),
            (0, i.jsxs)("div", {
              "aria-hidden": !0,
              children: [
                null != o &&
                  (0, i.jsx)(o, { className: _.icon, "aria-hidden": !0 }),
                t.name,
              ],
            }),
          ],
        });
      }
      function f(e) {
        switch (e.ref_type) {
          case a.Qs.CHANNEL:
            return (0, i.jsx)(d, { channelId: e.ref_id });
          case a.Qs.INTANGIBLE:
            return e.name;
          default:
            (0, o.vE)(e);
        }
      }
    },
    893729: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return L;
        },
      });
      var i = t(735250),
        r = t(470079),
        l = t(120356),
        s = t.n(l),
        o = t(442837),
        u = t(481060),
        a = t(518738),
        c = t(786761),
        _ = t(3148),
        d = t(753206),
        f = t(594174),
        E = t(5192),
        A = t(981631),
        I = t(689938),
        v = t(391317);
      function L(e) {
        var n;
        let {
            guildId: t,
            role: l,
            theme: L,
            content: m = I.Z.Messages
              .GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
            className: S,
          } = e,
          g = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
          C = E.ZP.useName(t, null, g),
          N = (0, a.Kz)(l),
          p = r.useMemo(
            () =>
              (0, c.e5)({
                ...(0, _.ZP)({
                  channelId: "0",
                  content: m,
                  tts: void 0,
                  type: void 0,
                  messageReference: void 0,
                  allowedMentions: void 0,
                  author: g,
                }),
                state: A.yb.SENT,
                id: "0",
              }),
            [g, m],
          ),
          Z = {
            nick: C,
            colorString:
              null !== (n = l.colorString) && void 0 !== n ? n : void 0,
          };
        return (0, i.jsx)(u.ThemeProvider, {
          theme: L,
          children: (e) =>
            (0, i.jsx)("div", {
              className: s()(e, v.container, S),
              children: (0, i.jsx)(d.Z, {
                hideTimestamp: !0,
                author: Z,
                roleIcon: N,
                message: p,
                isGroupStart: !0,
                disableInteraction: !0,
              }),
            }),
        });
      }
    },
    690221: function (e, n, t) {
      var i = t(735250),
        r = t(470079),
        l = t(481060),
        s = t(703656),
        o = t(981631);
      n.Z = r.forwardRef(function (e, n) {
        let {
            href: t,
            children: u,
            onClick: a,
            onKeyPress: c,
            focusProps: _,
            ...d
          } = e,
          f = r.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === o.yXg.SPACE || e.charCode === o.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != t && (0, s.uL)(t),
                  null == a || a()),
                  null == c || c(e);
            },
            [t, c, a],
          ),
          E = r.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != t && (0, s.uL)(t),
                  null == a || a();
            },
            [t, a],
          ),
          A = (0, i.jsx)("a", {
            ref: n,
            href: t,
            onClick: E,
            onKeyPress: f,
            ...d,
            children: u,
          });
        return (0, i.jsx)(l.FocusRing, { ..._, children: A });
      });
    },
    753206: function (e, n, t) {
      var i = t(735250),
        r = t(470079),
        l = t(120356),
        s = t.n(l),
        o = t(628238),
        u = t(492593),
        a = t(25015),
        c = t(963550),
        _ = t(845080),
        d = t(916315);
      n.Z = r.memo(function (e) {
        var n;
        let {
            message: t,
            channel: r,
            compact: l,
            className: f,
            isGroupStart: E,
            hideSimpleEmbedContent: A = !0,
            disableInteraction: I,
          } = e,
          v = (0, o.A)(
            (null !== (n = t.editedTimestamp) && void 0 !== n
              ? n
              : t.timestamp
            ).valueOf(),
          ),
          { content: L } = (0, a.Z)(t, {
            hideSimpleEmbedContent: A,
            allowList: v,
            allowHeading: v,
            allowLinks: !0,
            previewLinkTarget: !0,
          });
        return (0, i.jsx)(u.Z, {
          compact: l,
          className: s()(f, {
            [d.message]: !0,
            [d.cozyMessage]: !l,
            [d.groupStart]: E,
          }),
          childrenHeader: (0, _.Z)({ ...e, channel: r, guildId: void 0 }),
          childrenMessageContent: (0, c.Z)(e, L),
          disableInteraction: I,
        });
      });
    },
    93127: function (e, n, t) {
      t.d(n, {
        W: function () {
          return a;
        },
        _: function () {
          return c;
        },
      });
      var i = t(544891),
        r = t(570140),
        l = t(480294),
        s = t(814443),
        o = t(428598),
        u = t(981631);
      function a() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return s.Z.needsRefresh()
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: u.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: n } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: n,
                  });
                },
                () => {
                  r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return o.Z.shouldFetch() && l.Z.hasConsented(u.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: u.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: n } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: n.user_affinities.map((e) => {
                      var n, t, i, r, l, s, o, u;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (n = e.dm_probability) && void 0 !== n
                            ? n
                            : 0,
                        dmRank:
                          null !== (t = e.dm_rank) && void 0 !== t ? t : 0,
                        vcProbability:
                          null !== (i = e.vc_probability) && void 0 !== i
                            ? i
                            : 0,
                        vcRank:
                          null !== (r = e.vc_rank) && void 0 !== r ? r : 0,
                        serverMessageProbability:
                          null !== (l = e.server_message_probability) &&
                          void 0 !== l
                            ? l
                            : 0,
                        serverMessageRank:
                          null !== (s = e.server_message_rank) && void 0 !== s
                            ? s
                            : 0,
                        communicationProbability:
                          null !== (o = e.communication_probability) &&
                          void 0 !== o
                            ? o
                            : 0,
                        communicationRank:
                          null !== (u = e.communication_rank) && void 0 !== u
                            ? u
                            : 0,
                      };
                    }),
                  });
                },
                () => {
                  r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, n, t) {
      t.d(n, {
        K: function () {
          return i;
        },
      });
      let i = t(70956).Z.Millis.DAY;
    },
    428598: function (e, n, t) {
      let i;
      t(47120);
      var r,
        l = t(442837),
        s = t(570140),
        o = t(699516),
        u = t(496232);
      function a(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let c = !1,
        _ = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        d = { ..._ };
      function f() {
        i = new Map(
          d.userAffinities
            .filter((e) => !o.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class E extends (r = l.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(o.Z),
            null != e &&
              ((d.userAffinities = e.userAffinities),
              (d.lastFetched = e.lastFetched),
              f()),
            this.syncWith([o.Z], f);
        }
        shouldFetch() {
          if (!c) return Date.now() - d.lastFetched > u.K;
        }
        isFetching() {
          return c;
        }
        getUserAffinities() {
          return d.userAffinities;
        }
        getUserAffinity(e) {
          return i.get(e);
        }
        getState() {
          return d;
        }
      }
      a(E, "displayName", "UserAffinitiesStoreV2"),
        a(E, "persistKey", "UserAffinitiesStoreV2"),
        (n.Z = new E(s.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: n } = e;
            (d.lastFetched = Date.now()), (c = !1), (d.userAffinities = n), f();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
          },
          LOGOUT: function () {
            (d = { ..._ }), (i = new Map()), (c = !1);
          },
        }));
    },
    170671: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(692547),
        l = t(313201);
      function s(e) {
        let { isSelected: n, ...t } = e,
          s = (0, l.Dt)();
        return (0, i.jsxs)("svg", {
          ...t,
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "url(#".concat(s, ")"),
          children: [
            (0, i.jsx)("path", {
              d: "M10 9.33332C10.7364 9.33332 11.3334 8.73637 11.3334 7.99999C11.3334 7.26361 10.7364 6.66666 10 6.66666C9.26364 6.66666 8.66669 7.26361 8.66669 7.99999C8.66669 8.73637 9.26364 9.33332 10 9.33332Z",
              fill: "url(#paint0_linear_6413_12612)",
            }),
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4.66669 2.66666C4.2985 2.66666 4.00002 2.96513 4.00002 3.33332C4.00002 3.70151 4.2985 3.99999 4.66669 3.99999H6.66669C7.03488 3.99999 7.33335 4.29847 7.33335 4.66666C7.33335 5.03485 7.03488 5.33332 6.66669 5.33332L3.66669 5.33332C3.2985 5.33332 3.00002 5.6318 3.00002 5.99999C3.00002 6.36818 3.2985 6.66666 3.66669 6.66666L5.33335 6.66666C5.70154 6.66666 6.00002 6.96513 6.00002 7.33332C6.00002 7.70151 5.70154 7.99999 5.33335 7.99999H4.00002C3.63183 7.99999 3.33335 8.29847 3.33335 8.66666C3.33335 9.03485 3.63183 9.33332 4.00002 9.33332H4.83471C5.42677 11.6336 7.5149 13.3333 10 13.3333C12.9455 13.3333 15.3334 10.9455 15.3334 7.99999C15.3334 5.05447 12.9455 2.66666 10 2.66666H4.66669ZM10 10.6667C11.4728 10.6667 12.6667 9.47275 12.6667 7.99999C12.6667 6.52723 11.4728 5.33332 10 5.33332C8.52726 5.33332 7.33335 6.52723 7.33335 7.99999C7.33335 9.47275 8.52726 10.6667 10 10.6667Z",
              fill: "url(#paint0_linear_6413_12612)",
            }),
            (0, i.jsx)("path", {
              d: "M1.66669 6.66666C2.03488 6.66666 2.33335 6.36818 2.33335 5.99999C2.33335 5.6318 2.03488 5.33332 1.66669 5.33332H1.33335C0.965164 5.33332 0.666687 5.6318 0.666687 5.99999C0.666687 6.36818 0.965164 6.66666 1.33335 6.66666H1.66669Z",
              fill: "url(#paint0_linear_6413_12612)",
            }),
            (0, i.jsx)("defs", {
              children: (0, i.jsxs)("linearGradient", {
                id: "paint0_linear_6413_12612",
                x1: "0.666992",
                y1: "0.127441",
                x2: "15.3271",
                y2: "0.127441",
                gradientUnits: "userSpaceOnUse",
                children: [
                  (0, i.jsx)("stop", {
                    stopColor: n
                      ? r.Z.unsafe_rawColors.WHITE_500.css
                      : r.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS
                          .css,
                  }),
                  (0, i.jsx)("stop", {
                    offset: "0.502368",
                    stopColor: n
                      ? r.Z.unsafe_rawColors.WHITE_500.css
                      : r.Z.unsafe_rawColors
                          .PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css,
                  }),
                  (0, i.jsx)("stop", {
                    offset: "1",
                    stopColor: n
                      ? r.Z.unsafe_rawColors.WHITE_500.css
                      : r.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS
                          .css,
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=212b8bff11e4f4261276.js.map
