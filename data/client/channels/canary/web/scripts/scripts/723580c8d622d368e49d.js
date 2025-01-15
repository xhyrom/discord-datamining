"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94107"],
  {
    882008: function (e) {
      e.exports = "/assets/b92aabcc8b65fa979f9f.svg";
    },
    438825: function (e) {
      e.exports = "/assets/c6e6469d283177ac15ed.svg";
    },
    129512: function (e) {
      e.exports = "/assets/04f1e61a6726a54518ee.svg";
    },
    330065: function (e) {
      e.exports = "/assets/4c698a6babb08607f4af.svg";
    },
    995648: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = r(200651);
      r(192379);
      var i = r(120356),
        a = r.n(i),
        l = r(481060),
        s = r(422559),
        o = r(676267);
      function c(e) {
        let {
          grantedPermissions: t,
          disabledPermissions: r,
          grantedPermissionsHeader: i,
          disabledPermissionsHeader: c,
          className: d,
        } = e;
        return (0, n.jsxs)("div", {
          className: a()(o.list, d),
          children: [
            null != t && t.length > 0
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    null != i
                      ? (0, n.jsx)(l.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: o.header,
                          children: i,
                        })
                      : null,
                    (0, n.jsx)("div", {
                      className: o.container,
                      children: t.map((e) =>
                        (0, n.jsxs)(
                          "div",
                          {
                            className: o.permission,
                            children: [
                              (0, n.jsx)(l.CheckmarkLargeIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: o.check,
                              }),
                              (0, n.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, s.wt)(e),
                              }),
                            ],
                          },
                          e.toString(),
                        ),
                      ),
                    }),
                  ],
                })
              : null,
            null != r && r.length > 0
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    null != c
                      ? (0, n.jsx)(l.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: o.header,
                          children: c,
                        })
                      : null,
                    (0, n.jsx)("div", {
                      className: o.container,
                      children: r.map((e) =>
                        (0, n.jsxs)(
                          "div",
                          {
                            className: o.permission,
                            children: [
                              (0, n.jsx)(l.XSmallIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: o.cross,
                              }),
                              (0, n.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, s.wt)(e),
                              }),
                            ],
                          },
                          e.toString(),
                        ),
                      ),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    167533: function (e, t, r) {
      r(47120);
      var n,
        i = r(200651),
        a = r(192379),
        l = r(120356),
        s = r.n(l),
        o = r(481060),
        c = r(981631),
        d = r(885894);
      function u(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      let _ = (e) =>
        (0, i.jsx)("div", { className: e.className, children: e.children });
      class E extends (n = a.PureComponent) {
        isSortable(e) {
          return null != e.sort && !1 !== e.sort;
        }
        getDefaultSort(e) {
          return (t, r) => {
            let n = t[e],
              i = r[e];
            return null != n && null != i ? (n === i ? 0 : n < i ? -1 : 1) : 0;
          };
        }
        renderHeader() {
          let {
              columns: e,
              data: t,
              sortDirection: r,
              sortKey: n,
              headerCellClassName: a,
              headerClassName: l,
              sortedHeaderCellClassName: u,
              stickyHeader: E,
            } = this.props,
            p = e.map((e) => {
              let l = null != e.renderHeader ? e.renderHeader(e, t) : e.key,
                _ =
                  r === c.sHY.ASCENDING
                    ? o.ChevronSmallUpIcon
                    : o.ChevronSmallDownIcon;
              return (0, i.jsx)(
                o.Clickable,
                {
                  className: s()(
                    d.headerCell,
                    a,
                    e.headerCellClassName,
                    e.cellClassName,
                    n === e.key && u,
                    { [d.clickable]: this.isSortable(e) },
                  ),
                  onClick: this.isSortable(e)
                    ? () => this.handleSort(e.key)
                    : void 0,
                  children: (0, i.jsxs)("div", {
                    className: d.headerCellContent,
                    children: [
                      l,
                      this.isSortable(e) && n === e.key
                        ? (0, i.jsx)(_, { className: d.sortIcon })
                        : null,
                    ],
                  }),
                },
                e.key,
              );
            });
          return (0, i.jsx)(_, {
            className: s()(l, d.row, { [d.stickyHeader]: E }),
            children: p,
          });
        }
        renderBody() {
          let {
              columns: e,
              data: t,
              sortData: r,
              sortKey: n,
              sortDirection: i,
              bodyCellClassName: l,
              rowClassName: o,
              cellProps: u,
              rowProps: _,
              rowComponent: E,
              cellComponent: p,
            } = this.props,
            I = t;
          if (r) {
            let r =
                null != n
                  ? e.find((e) => {
                      let { key: t } = e;
                      return t === n;
                    })
                  : null,
              a = [...t],
              l = null != r && r.sort,
              s =
                null != r && null != n && this.isSortable(r)
                  ? a.sort(
                      "function" == typeof l
                        ? (e, t) => l(e, t, i)
                        : this.getDefaultSort(n),
                    )
                  : a;
            I = null != r && i === c.sHY.DESCENDING ? s.reverse() : s;
          }
          return I.map((t, r) => {
            let n = e.map((e) =>
              (0, a.createElement)(
                p,
                {
                  ...u,
                  key: e.key,
                  item: t,
                  className: s()(l, e.bodyCellClassName, e.cellClassName),
                },
                null != e.render ? e.render(t, u, r) : t[e.key],
              ),
            );
            return (0, a.createElement)(
              E,
              { ..._, key: t.key, item: t, className: s()(d.row, o) },
              n,
            );
          });
        }
        render() {
          let { className: e, hasHeader: t } = this.props;
          return (0, i.jsxs)("div", {
            className: e,
            children: [t ? this.renderHeader() : null, this.renderBody()],
          });
        }
        constructor(...e) {
          super(...e),
            u(this, "handleSort", (e) => {
              let { sortKey: t, sortDirection: r, onSort: n } = this.props;
              if (null != n)
                n(
                  e,
                  t === e
                    ? r === c.sHY.ASCENDING
                      ? c.sHY.DESCENDING
                      : c.sHY.ASCENDING
                    : c.sHY.ASCENDING,
                );
            });
        }
      }
      u(E, "SortDirection", c.sHY),
        u(E, "defaultProps", {
          initialSortDirection: c.sHY.ASCENDING,
          rowHeaderComponent: _,
          rowComponent: (e) =>
            (0, i.jsx)("div", { className: e.className, children: e.children }),
          cellComponent: (e) =>
            (0, i.jsx)("div", { className: e.className, children: e.children }),
          hasHeader: !0,
          sortData: !0,
          stickyHeader: !1,
        }),
        (t.Z = E);
    },
    53365: function (e, t, r) {
      r.d(t, {
        $J: function () {
          return m;
        },
        He: function () {
          return o;
        },
        av: function () {
          return E;
        },
        df: function () {
          return p;
        },
        hY: function () {
          return I;
        },
        oL: function () {
          return T;
        },
        wE: function () {
          return d;
        },
        wZ: function () {
          return _;
        },
        yk: function () {
          return c;
        },
        zo: function () {
          return u;
        },
      });
      var n = r(544891),
        i = r(570140),
        a = r(728345),
        l = r(981631),
        s = r(674563);
      async function o(e) {
        await n.tn.post({
          url: l.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e),
          rejectWithError: !1,
        });
      }
      async function c(e) {
        return (
          await n.tn.get({
            url: l.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e),
            rejectWithError: !1,
          })
        ).body;
      }
      async function d(e, t) {
        await n.tn.post({
          url: l.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t),
          rejectWithError: !1,
        });
      }
      async function u(e) {
        await n.tn.post({
          url: l.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e),
          rejectWithError: !1,
        });
      }
      async function _(e) {
        return (
          await n.tn.get({
            url: l.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e),
            rejectWithError: !1,
          })
        ).body;
      }
      async function E(e) {
        try {
          let t = await n.tn.get({
            url: l.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e },
            rejectWithError: !0,
          });
          i.Z.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: t.body.eligible_guilds,
          });
        } catch (e) {}
      }
      async function p(e, t) {
        let r = (
          await n.tn.post({
            url: l.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: t },
            rejectWithError: !1,
          })
        ).body;
        return (
          null != r.application &&
            i.Z.dispatch({
              type: "APPLICATION_FETCH_SUCCESS",
              application: r.application,
            }),
          r
        );
      }
      function I(e) {
        return n.tn.post({
          url: l.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e),
          rejectWithError: !1,
        });
      }
      function m(e) {
        return n.tn.post({
          url: l.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e),
          rejectWithError: !1,
        });
      }
      async function h(e) {
        await n.tn.post({
          url: l.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
          body: {},
          rejectWithError: !1,
        });
      }
      async function T(e) {
        return (
          await h(e),
          await a.ZP.getApplicationsForGuild(e, {
            type: s.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0,
          })
        );
      }
    },
    456268: function (e, t, r) {
      r.d(t, {
        J9: function () {
          return E;
        },
        K0: function () {
          return S;
        },
        Kq: function () {
          return A;
        },
        P$: function () {
          return m;
        },
        TA: function () {
          return u;
        },
        Vv: function () {
          return T;
        },
        W1: function () {
          return p;
        },
        aC: function () {
          return c;
        },
        i3: function () {
          return d;
        },
        le: function () {
          return o;
        },
        mA: function () {
          return I;
        },
        t$: function () {
          return h;
        },
        zH: function () {
          return _;
        },
      });
      var n = r(544891),
        i = r(570140),
        a = r(706454),
        l = r(526429),
        s = r(981631);
      async function o() {
        let e = a.default.locale;
        if (e === l.Z.getFetchedLocale()) return;
        let t = await n.tn.get({
          url: s.ANM.GUILD_DISCOVERY_CATEGORIES,
          query: { locale: e, primary_only: !1 },
          oldFormErrors: !0,
          rejectWithError: !1,
        });
        i.Z.dispatch({
          type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
          categories: t.body,
          locale: e,
        });
      }
      async function c(e) {
        try {
          let {
              primary_category_id: t,
              category_ids: r,
              keywords: a,
              emoji_discoverability_enabled: l,
              partner_actioned_timestamp: o,
              partner_application_timestamp: c,
              is_published: d,
              reasons_to_join: u,
              social_links: _,
              about: E,
            } = (
              await n.tn.get({
                url: s.ANM.GUILD_DISCOVERY_METADATA(e),
                oldFormErrors: !0,
                rejectWithError: !0,
              })
            ).body,
            p = {
              primaryCategoryId: t,
              secondaryCategoryIds: r,
              keywords: a,
              emojiDiscoverabilityEnabled: l,
              partnerActionedTimestamp: o,
              partnerApplicationTimestamp: c,
              isPublished: d,
              reasonsToJoin: u,
              socialLinks: _,
              about: E,
            };
          return (
            i.Z.dispatch({
              type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
              guildId: e,
              metadata: p,
            }),
            p
          );
        } catch (e) {
          i.Z.dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
        }
      }
      async function d(e) {
        try {
          let t = (
            await n.tn.get({
              url: s.ANM.GUILD_DISCOVERY_SLUG(e),
              rejectWithError: !0,
            })
          ).body.slug;
          i.Z.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug: t });
        } catch {
          i.Z.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId: e });
        }
      }
      function u(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          primaryCategoryId: t,
        });
      }
      function _(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          keywords: t,
        });
      }
      function E(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          emojiDiscoverabilityEnabled: t,
        });
      }
      function p(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          isPublished: t,
        });
      }
      function I(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          about: t,
        });
      }
      function m(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          reasonsToJoin: t,
        });
      }
      function h(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          socialLinks: t,
        });
      }
      async function T(e) {
        let {
          guildId: t,
          primaryCategoryId: r,
          keywords: a,
          emojiDiscoverabilityEnabled: l,
          partnerActionedTimestamp: o,
          partnerApplicationTimestamp: c,
          isPublished: d,
          reasonsToJoin: u,
          socialLinks: _,
          about: E,
        } = e;
        try {
          let {
            primary_category_id: e,
            category_ids: p,
            keywords: I,
            emoji_discoverability_enabled: m,
            partner_actioned_timestamp: h,
            partner_application_timestamp: T,
            is_published: A,
            reasons_to_join: S,
            social_links: N,
            about: C,
          } = (
            await n.tn.patch({
              url: s.ANM.GUILD_DISCOVERY_METADATA(t),
              body: {
                primary_category_id: r,
                emoji_discoverability_enabled: l,
                partner_actioned_timestamp: o,
                partner_application_timestamp: c,
                keywords: a,
                is_published: d,
                reasons_to_join: u,
                social_links: _,
                about: E,
              },
              oldFormErrors: !0,
              rejectWithError: !1,
            })
          ).body;
          i.Z.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: t,
            metadata: {
              primaryCategoryId: e,
              secondaryCategoryIds: p,
              keywords: I,
              emojiDiscoverabilityEnabled: m,
              partnerActionedTimestamp: h,
              partnerApplicationTimestamp: T,
              isPublished: A,
              reasonsToJoin: S,
              socialLinks: N,
              about: C,
            },
          });
        } catch (e) {
          throw (
            (i.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
              guildId: t,
              errors: e.body,
            }),
            e)
          );
        }
      }
      function A(e, t) {
        n.tn
          .put({
            url: s.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
            oldFormErrors: !0,
            rejectWithError: !1,
          })
          .then(() => {
            i.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_ADD",
              guildId: e,
              categoryId: t,
            });
          })
          .catch((t) => {
            i.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
              guildId: e,
              errors: t.body,
            });
          });
      }
      function S(e, t) {
        n.tn
          .del({
            url: s.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
            oldFormErrors: !0,
            rejectWithError: !1,
          })
          .then(() => {
            i.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_DELETE",
              guildId: e,
              categoryId: t,
            });
          })
          .catch((t) => {
            i.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
              guildId: e,
              errors: t.body,
            });
          });
      }
    },
    526429: function (e, t, r) {
      r.d(t, {
        j: function () {
          return p;
        },
      }),
        r(653041),
        r(47120);
      var n,
        i,
        a,
        l,
        s = r(392711),
        o = r.n(s),
        c = r(442837),
        d = r(570140),
        u = r(823379),
        _ = r(128449),
        E = r(388032);
      function p(e, t) {
        return o().isEqual(
          e.map((e) => [e.categoryId, e.name]),
          t.map((e) => [e.categoryId, e.name]),
        );
      }
      let I = null,
        m = [],
        h = [],
        T = {};
      class A extends (n = c.ZP.Store) {
        getPrimaryCategories() {
          return m;
        }
        getDiscoveryCategories() {
          let e = _.L3.map((e) => h.find((t) => t.categoryId === e)).filter(
            u.lm,
          );
          return [{ categoryId: _.Hk, name: E.intl.string(E.t.Ym2Ri4) }, ...e];
        }
        getClanDiscoveryCategories() {
          let e = _.L3.map((e) => h.find((t) => t.categoryId === e)).filter(
            u.lm,
          );
          return [{ categoryId: _.Hk, name: E.intl.string(E.t.QToH29) }, ...e];
        }
        getAllCategories() {
          return h;
        }
        getFetchedLocale() {
          return I;
        }
        getCategoryName(e) {
          return e === _.Hk ? E.intl.string(E.t.Ym2Ri4) : T[e];
        }
      }
      (l = "GuildDiscoveryCategoryStore"),
        (a = "displayName") in (i = A)
          ? Object.defineProperty(i, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[a] = l),
        (t.Z = new A(d.Z, {
          GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
            let t,
              { categories: r, locale: n } = e,
              i = [],
              a = [];
            if (
              (r
                .sort((e, t) => (e.name < t.name ? -1 : 1))
                .forEach((e) => {
                  let { id: r, name: n, is_primary: l } = e;
                  if (r !== _.o3) {
                    if (r === _.dc) {
                      t = { categoryId: r, name: n };
                      return;
                    }
                    !0 === l && i.push({ categoryId: r, name: n }),
                      a.push({ categoryId: r, name: n }),
                      (T[r] = n);
                  }
                }),
              null != t)
            ) {
              let { categoryId: e, name: r } = t;
              i.push({ categoryId: e, name: r }), (T[e] = r);
            }
            (I = n), (m = i), (h = a);
          },
        }));
    },
    166184: function (e, t, r) {
      r(47120);
      var n = r(200651),
        i = r(192379),
        a = r(120356),
        l = r.n(a),
        s = r(780384),
        o = r(481060),
        c = r(410030),
        d = r(686546),
        u = r(372769),
        _ = r(134432),
        E = r(768581),
        p = r(624138),
        I = r(388032),
        m = r(834044),
        h = r(129512),
        T = r(330065);
      let A = [16, 16, 14, 14, 12, 10, 8];
      t.Z = function (e) {
        var t, r;
        let {
            guild: a,
            disabled: S,
            small: N,
            loading: C = !1,
            description: D,
            memberCount: O,
            presenceCount: f,
            className: y,
          } = e,
          v = (0, c.ZP)(),
          [M, g] = i.useState(!1);
        if (null == a || C)
          return (0, n.jsx)("div", {
            className: l()(y, m.card, m.cardPlaceholder, {
              [m.cardSmall]: N,
              [m.cardDisabled]: S,
            }),
          });
        let { name: R } = a,
          j =
            null != a.discoverySplash && /^data:/.test(a.discoverySplash)
              ? a.discoverySplash
              : E.ZP.getGuildDiscoverySplashURL({
                  id: a.id,
                  splash: a.discoverySplash,
                  size: 240 * (0, _.x_)(),
                }),
          x = (0, s.wj)(v) ? h : T,
          G =
            null !==
              (t = E.ZP.getGuildIconURL({
                id: a.id,
                icon: a.icon,
                size: 40,
              })) && void 0 !== t
              ? t
              : void 0,
          b = null != a.description ? a.description : D,
          L = null != O ? O : null == a ? void 0 : a.memberCount,
          Z = null != f ? f : null == a ? void 0 : a.presenceCount,
          U = null;
        if (null != G)
          U = (0, n.jsx)("img", { src: G, alt: "", className: m.avatar });
        else {
          let e = (0, p.Zg)(a.name);
          U = (0, n.jsx)("div", {
            className: m.defaultIcon,
            children: (0, n.jsx)(o.Text, {
              className: m.acronym,
              style: {
                fontSize:
                  null !== (r = A[e.length]) && void 0 !== r
                    ? r
                    : A[A.length - 1],
              },
              variant: "text-sm/normal",
              children: e,
            }),
          });
        }
        return (0, n.jsxs)("div", {
          className: l()(y, m.card, {
            [m.cardSmall]: N,
            [m.cardDisabled]: S,
            [m.splashLoaded]: M,
          }),
          children: [
            (0, n.jsxs)("div", {
              className: m.cardHeader,
              children: [
                (0, n.jsx)("div", {
                  className: m.splash,
                  children: (0, n.jsx)("img", {
                    src: null != j ? j : x,
                    alt: "",
                    className: m.splashImage,
                    onLoad: () => g(!0),
                  }),
                }),
                (0, n.jsx)("div", {
                  className: m.guildIcon,
                  children: (0, n.jsx)(d.ZP, {
                    mask: d.ZP.Masks.SQUIRCLE,
                    width: 48,
                    height: 48,
                    children: (0, n.jsx)("div", {
                      className: m.iconMask,
                      children: (0, n.jsx)(d.ZP, {
                        mask: d.ZP.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: null != U ? U : null,
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: m.guildInfo,
              children: [
                (0, n.jsxs)("div", {
                  className: m.title,
                  children: [
                    (0, n.jsx)(u.Z, {
                      className: m.verifiedIcon,
                      guild: a,
                      tooltipColor: o.Tooltip.Colors.PRIMARY,
                    }),
                    (0, n.jsx)(o.Text, {
                      className: m.guildName,
                      variant: "text-md/normal",
                      children: (0, n.jsx)("span", { children: R }),
                    }),
                  ],
                }),
                (0, n.jsx)(o.Text, {
                  className: m.description,
                  variant: "text-sm/normal",
                  children: (0, n.jsx)("span", { children: b }),
                }),
                (0, n.jsxs)("div", {
                  className: m.memberInfo,
                  children: [
                    null != Z &&
                      (0, n.jsxs)("div", {
                        className: m.memberCount,
                        children: [
                          (0, n.jsx)("div", { className: m.dotOnline }),
                          (0, n.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            children: N
                              ? I.intl.formatToPlainString(I.t.YMor7u, {
                                  count: Z,
                                })
                              : I.intl.formatToPlainString(I.t["LC+S+v"], {
                                  membersOnline: Z,
                                }),
                          }),
                        ],
                      }),
                    null != L &&
                      (0, n.jsxs)("div", {
                        className: m.memberCount,
                        children: [
                          (0, n.jsx)("div", { className: m.dotOffline }),
                          (0, n.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            children: N
                              ? I.intl.formatToPlainString(I.t.YMor7u, {
                                  count: L,
                                })
                              : I.intl.formatToPlainString(I.t.zRl6XV, {
                                  count: L,
                                }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    929507: function (e, t, r) {
      r(47120);
      var n = r(192379),
        i = r(399606),
        a = r(544891),
        l = r(570140),
        s = r(367907),
        o = r(430824),
        c = r(496675),
        d = r(626135),
        u = r(70956),
        _ = r(997787),
        E = r(981631);
      let p = 1 * u.Z.Millis.DAY,
        I = new Map();
      t.Z = {
        useShouldShowChannelNotice(e) {
          let t = (0, i.e7)([o.Z, c.Z], () => {
            let t = o.Z.getGuild(e);
            return null != t && c.Z.can(E.Plq.ADMINISTRATOR, t);
          });
          n.useEffect(() => {
            t &&
              !(function (e) {
                var t;
                let r = Date.now(),
                  n = null !== (t = I.get(e)) && void 0 !== t ? t : 0;
                if (!(r < n + p))
                  I.set(e, r),
                    a.tn
                      .post({
                        url: E.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e),
                        rejectWithError: !0,
                      })
                      .then(
                        (t) => {
                          var r, n;
                          l.Z.dispatch({
                            type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
                            guildId: e,
                            integrationIdsWithAppCommands:
                              null !==
                                (n =
                                  null === (r = t.body) || void 0 === r
                                    ? void 0
                                    : r.integration_ids_with_app_commands) &&
                              void 0 !== n
                                ? n
                                : [],
                          });
                        },
                        () => {
                          I.set(e, n);
                        },
                      );
              })(e);
          }, [e, t]);
          let r = (0, i.e7)([_.Z], () => _.Z.shouldShowChannelNotice(e));
          return t && r;
        },
        dismissNotice(e) {
          l.Z.dispatch({
            type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
            guildId: e,
          });
        },
        dismissOverviewTooltip(e, t) {
          var r;
          l.Z.dispatch({
            type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
            guildId: e,
            integrationId: t.id,
          }),
            d.default.track(E.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
              ...(0, s.hH)(e),
              application_id:
                null === (r = t.application) || void 0 === r ? void 0 : r.id,
              location: "overview",
            });
        },
        dismissToggleTooltip(e, t) {
          var r;
          if (void 0 !== t)
            l.Z.dispatch({
              type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
              integrationId: t.id,
            }),
              d.default.track(E.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                ...(0, s.hH)(e),
                application_id:
                  null === (r = t.application) || void 0 === r ? void 0 : r.id,
                location: "toggle",
              });
        },
      };
    },
    997787: function (e, t, r) {
      let n;
      r(47120), r(653041);
      var i,
        a = r(442837),
        l = r(570140);
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      let o = { guildNoticeDismissed: [] },
        c = new Map(),
        d = new Set();
      class u extends (i = a.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
          n = e;
        }
        getState() {
          return n;
        }
        shouldShowChannelNotice(e) {
          var t, r;
          return (
            !n.guildNoticeDismissed.includes(e) &&
            (null !==
              (r = null === (t = c.get(e)) || void 0 === t ? void 0 : t.size) &&
            void 0 !== r
              ? r
              : 0) > 0
          );
        }
        canShowOverviewTooltip(e, t) {
          var r;
          return (
            (null === (r = c.get(e)) || void 0 === r ? void 0 : r.has(t)) === !0
          );
        }
        canShowToggleTooltip(e) {
          return d.has(e);
        }
      }
      s(u, "displayName", "CommandsMigrationStore"),
        s(u, "persistKey", "CommandsMigrationStore"),
        (t.Z = new u(l.Z, {
          COMMANDS_MIGRATION_UPDATE_SUCCESS: function (e) {
            let { guildId: t, integrationIdsWithAppCommands: r } = e;
            return c.set(t, new Set(r)), !0;
          },
          COMMANDS_MIGRATION_NOTICE_DISMISSED: function (e) {
            let { guildId: t } = e;
            n.guildNoticeDismissed.push(t);
          },
          COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (e) {
            var t;
            let { guildId: r, integrationId: n } = e;
            null === (t = c.get(r)) || void 0 === t || t.clear(), d.add(n);
          },
          COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
            let { integrationId: t } = e;
            d.delete(t);
          },
        }));
    },
  },
]);
//# sourceMappingURL=723580c8d622d368e49d.js.map
