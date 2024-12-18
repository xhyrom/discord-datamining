"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21881"],
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
        o = r(481060),
        l = r(422559),
        s = r(95648);
      function c(e) {
        let {
          grantedPermissions: t,
          disabledPermissions: r,
          grantedPermissionsHeader: i,
          disabledPermissionsHeader: c,
          className: u,
        } = e;
        return (0, n.jsxs)("div", {
          className: a()(s.list, u),
          children: [
            null != t && t.length > 0
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    null != i
                      ? (0, n.jsx)(o.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: s.header,
                          children: i,
                        })
                      : null,
                    (0, n.jsx)("div", {
                      className: s.container,
                      children: t.map((e) =>
                        (0, n.jsxs)(
                          "div",
                          {
                            className: s.permission,
                            children: [
                              (0, n.jsx)(o.CheckmarkLargeIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: s.check,
                              }),
                              (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: (0, l.wt)(e),
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
                      ? (0, n.jsx)(o.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: s.header,
                          children: c,
                        })
                      : null,
                    (0, n.jsx)("div", {
                      className: s.container,
                      children: r.map((e) =>
                        (0, n.jsxs)(
                          "div",
                          {
                            className: s.permission,
                            children: [
                              (0, n.jsx)(o.XSmallIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: s.cross,
                              }),
                              (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: (0, l.wt)(e),
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
        o = r(120356),
        l = r.n(o),
        s = r(481060),
        c = r(981631),
        u = r(410642);
      function d(e, t, r) {
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
              headerClassName: o,
              sortedHeaderCellClassName: d,
              stickyHeader: E,
            } = this.props,
            I = e.map((e) => {
              let o = null != e.renderHeader ? e.renderHeader(e, t) : e.key,
                _ =
                  r === c.sHY.ASCENDING
                    ? s.ChevronSmallUpIcon
                    : s.ChevronSmallDownIcon;
              return (0, i.jsx)(
                s.Clickable,
                {
                  className: l()(
                    u.headerCell,
                    a,
                    e.headerCellClassName,
                    e.cellClassName,
                    n === e.key && d,
                    { [u.clickable]: this.isSortable(e) },
                  ),
                  onClick: this.isSortable(e)
                    ? () => this.handleSort(e.key)
                    : void 0,
                  children: (0, i.jsxs)("div", {
                    className: u.headerCellContent,
                    children: [
                      o,
                      this.isSortable(e) && n === e.key
                        ? (0, i.jsx)(_, { className: u.sortIcon })
                        : null,
                    ],
                  }),
                },
                e.key,
              );
            });
          return (0, i.jsx)(_, {
            className: l()(o, u.row, { [u.stickyHeader]: E }),
            children: I,
          });
        }
        renderBody() {
          let {
              columns: e,
              data: t,
              sortData: r,
              sortKey: n,
              sortDirection: i,
              bodyCellClassName: o,
              rowClassName: s,
              cellProps: d,
              rowProps: _,
              rowComponent: E,
              cellComponent: I,
            } = this.props,
            p = t;
          if (r) {
            let r =
                null != n
                  ? e.find((e) => {
                      let { key: t } = e;
                      return t === n;
                    })
                  : null,
              a = [...t],
              o = null != r && r.sort,
              l =
                null != r && null != n && this.isSortable(r)
                  ? a.sort(
                      "function" == typeof o
                        ? (e, t) => o(e, t, i)
                        : this.getDefaultSort(n),
                    )
                  : a;
            p = null != r && i === c.sHY.DESCENDING ? l.reverse() : l;
          }
          return p.map((t, r) => {
            let n = e.map((e) =>
              (0, a.createElement)(
                I,
                {
                  ...d,
                  key: e.key,
                  item: t,
                  className: l()(o, e.bodyCellClassName, e.cellClassName),
                },
                null != e.render ? e.render(t, d, r) : t[e.key],
              ),
            );
            return (0, a.createElement)(
              E,
              { ..._, key: t.key, item: t, className: l()(u.row, s) },
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
            d(this, "handleSort", (e) => {
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
      d(E, "SortDirection", c.sHY),
        d(E, "defaultProps", {
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
          return A;
        },
        He: function () {
          return s;
        },
        av: function () {
          return E;
        },
        df: function () {
          return I;
        },
        hY: function () {
          return p;
        },
        oL: function () {
          return h;
        },
        wE: function () {
          return u;
        },
        wZ: function () {
          return _;
        },
        yk: function () {
          return c;
        },
        zo: function () {
          return d;
        },
      });
      var n = r(544891),
        i = r(570140),
        a = r(728345),
        o = r(981631),
        l = r(674563);
      async function s(e) {
        await n.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e),
          rejectWithError: !1,
        });
      }
      async function c(e) {
        return (
          await n.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e),
            rejectWithError: !1,
          })
        ).body;
      }
      async function u(e, t) {
        await n.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t),
          rejectWithError: !1,
        });
      }
      async function d(e) {
        await n.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e),
          rejectWithError: !1,
        });
      }
      async function _(e) {
        return (
          await n.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e),
            rejectWithError: !1,
          })
        ).body;
      }
      async function E(e) {
        try {
          let t = await n.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e },
            rejectWithError: !0,
          });
          i.Z.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: t.body.eligible_guilds,
          });
        } catch (e) {}
      }
      async function I(e, t) {
        let r = (
          await n.tn.post({
            url: o.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
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
      function p(e) {
        return n.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e),
          rejectWithError: !1,
        });
      }
      function A(e) {
        return n.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e),
          rejectWithError: !1,
        });
      }
      async function T(e) {
        await n.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
          body: {},
          rejectWithError: !1,
        });
      }
      async function h(e) {
        return (
          await T(e),
          await a.ZP.getApplicationsForGuild(e, {
            type: l.wW.GUILD_ROLE_SUBSCRIPTIONS,
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
          return D;
        },
        Kq: function () {
          return C;
        },
        P$: function () {
          return A;
        },
        TA: function () {
          return d;
        },
        Vv: function () {
          return h;
        },
        W1: function () {
          return I;
        },
        aC: function () {
          return c;
        },
        i3: function () {
          return u;
        },
        le: function () {
          return s;
        },
        mA: function () {
          return p;
        },
        t$: function () {
          return T;
        },
        zH: function () {
          return _;
        },
      });
      var n = r(544891),
        i = r(570140),
        a = r(706454),
        o = r(526429),
        l = r(981631);
      async function s() {
        let e = a.default.locale;
        if (e === o.Z.getFetchedLocale()) return;
        let t = await n.tn.get({
          url: l.ANM.GUILD_DISCOVERY_CATEGORIES,
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
              emoji_discoverability_enabled: o,
              partner_actioned_timestamp: s,
              partner_application_timestamp: c,
              is_published: u,
              reasons_to_join: d,
              social_links: _,
              about: E,
            } = (
              await n.tn.get({
                url: l.ANM.GUILD_DISCOVERY_METADATA(e),
                oldFormErrors: !0,
                rejectWithError: !0,
              })
            ).body,
            I = {
              primaryCategoryId: t,
              secondaryCategoryIds: r,
              keywords: a,
              emojiDiscoverabilityEnabled: o,
              partnerActionedTimestamp: s,
              partnerApplicationTimestamp: c,
              isPublished: u,
              reasonsToJoin: d,
              socialLinks: _,
              about: E,
            };
          return (
            i.Z.dispatch({
              type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
              guildId: e,
              metadata: I,
            }),
            I
          );
        } catch (e) {
          i.Z.dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
        }
      }
      async function u(e) {
        try {
          let t = (
            await n.tn.get({
              url: l.ANM.GUILD_DISCOVERY_SLUG(e),
              rejectWithError: !0,
            })
          ).body.slug;
          i.Z.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug: t });
        } catch {
          i.Z.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId: e });
        }
      }
      function d(e, t) {
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
      function I(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          isPublished: t,
        });
      }
      function p(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          about: t,
        });
      }
      function A(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          reasonsToJoin: t,
        });
      }
      function T(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          socialLinks: t,
        });
      }
      async function h(e) {
        let {
          guildId: t,
          primaryCategoryId: r,
          keywords: a,
          emojiDiscoverabilityEnabled: o,
          partnerActionedTimestamp: s,
          partnerApplicationTimestamp: c,
          isPublished: u,
          reasonsToJoin: d,
          socialLinks: _,
          about: E,
        } = e;
        try {
          let {
            primary_category_id: e,
            category_ids: I,
            keywords: p,
            emoji_discoverability_enabled: A,
            partner_actioned_timestamp: T,
            partner_application_timestamp: h,
            is_published: C,
            reasons_to_join: D,
            social_links: S,
            about: m,
          } = (
            await n.tn.patch({
              url: l.ANM.GUILD_DISCOVERY_METADATA(t),
              body: {
                primary_category_id: r,
                emoji_discoverability_enabled: o,
                partner_actioned_timestamp: s,
                partner_application_timestamp: c,
                keywords: a,
                is_published: u,
                reasons_to_join: d,
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
              secondaryCategoryIds: I,
              keywords: p,
              emojiDiscoverabilityEnabled: A,
              partnerActionedTimestamp: T,
              partnerApplicationTimestamp: h,
              isPublished: C,
              reasonsToJoin: D,
              socialLinks: S,
              about: m,
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
      function C(e, t) {
        n.tn
          .put({
            url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
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
      function D(e, t) {
        n.tn
          .del({
            url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
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
          return I;
        },
      }),
        r(653041),
        r(47120);
      var n,
        i,
        a,
        o,
        l = r(392711),
        s = r.n(l),
        c = r(442837),
        u = r(570140),
        d = r(823379),
        _ = r(128449),
        E = r(388032);
      function I(e, t) {
        return s().isEqual(
          e.map((e) => [e.categoryId, e.name]),
          t.map((e) => [e.categoryId, e.name]),
        );
      }
      let p = null,
        A = [],
        T = [],
        h = {};
      class C extends (n = c.ZP.Store) {
        getPrimaryCategories() {
          return A;
        }
        getDiscoveryCategories() {
          let e = _.L3.map((e) => T.find((t) => t.categoryId === e)).filter(
            d.lm,
          );
          return [{ categoryId: _.Hk, name: E.intl.string(E.t.Ym2Ri4) }, ...e];
        }
        getClanDiscoveryCategories() {
          let e = _.L3.map((e) => T.find((t) => t.categoryId === e)).filter(
            d.lm,
          );
          return [{ categoryId: _.Hk, name: E.intl.string(E.t.QToH29) }, ...e];
        }
        getAllCategories() {
          return T;
        }
        getFetchedLocale() {
          return p;
        }
        getCategoryName(e) {
          return e === _.Hk ? E.intl.string(E.t.Ym2Ri4) : h[e];
        }
      }
      (o = "GuildDiscoveryCategoryStore"),
        (a = "displayName") in (i = C)
          ? Object.defineProperty(i, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[a] = o),
        (t.Z = new C(u.Z, {
          GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
            let t,
              { categories: r, locale: n } = e,
              i = [],
              a = [];
            if (
              (r
                .sort((e, t) => (e.name < t.name ? -1 : 1))
                .forEach((e) => {
                  let { id: r, name: n, is_primary: o } = e;
                  if (r !== _.o3) {
                    if (r === _.dc) {
                      t = { categoryId: r, name: n };
                      return;
                    }
                    !0 === o && i.push({ categoryId: r, name: n }),
                      a.push({ categoryId: r, name: n }),
                      (h[r] = n);
                  }
                }),
              null != t)
            ) {
              let { categoryId: e, name: r } = t;
              i.push({ categoryId: e, name: r }), (h[e] = r);
            }
            (p = n), (A = i), (T = a);
          },
        }));
    },
    929507: function (e, t, r) {
      r(47120);
      var n = r(192379),
        i = r(399606),
        a = r(544891),
        o = r(570140),
        l = r(367907),
        s = r(430824),
        c = r(496675),
        u = r(626135),
        d = r(70956),
        _ = r(997787),
        E = r(981631);
      let I = 1 * d.Z.Millis.DAY,
        p = new Map();
      t.Z = {
        useShouldShowChannelNotice(e) {
          let t = (0, i.e7)([s.Z, c.Z], () => {
            let t = s.Z.getGuild(e);
            return null != t && c.Z.can(E.Plq.ADMINISTRATOR, t);
          });
          n.useEffect(() => {
            t &&
              !(function (e) {
                var t;
                let r = Date.now(),
                  n = null !== (t = p.get(e)) && void 0 !== t ? t : 0;
                if (!(r < n + I))
                  p.set(e, r),
                    a.tn
                      .post({
                        url: E.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e),
                        rejectWithError: !0,
                      })
                      .then(
                        (t) => {
                          var r, n;
                          o.Z.dispatch({
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
                          p.set(e, n);
                        },
                      );
              })(e);
          }, [e, t]);
          let r = (0, i.e7)([_.Z], () => _.Z.shouldShowChannelNotice(e));
          return t && r;
        },
        dismissNotice(e) {
          o.Z.dispatch({
            type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
            guildId: e,
          });
        },
        dismissOverviewTooltip(e, t) {
          var r;
          o.Z.dispatch({
            type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
            guildId: e,
            integrationId: t.id,
          }),
            u.default.track(E.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
              ...(0, l.hH)(e),
              application_id:
                null === (r = t.application) || void 0 === r ? void 0 : r.id,
              location: "overview",
            });
        },
        dismissToggleTooltip(e, t) {
          var r;
          if (void 0 !== t)
            o.Z.dispatch({
              type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
              integrationId: t.id,
            }),
              u.default.track(E.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                ...(0, l.hH)(e),
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
        o = r(570140);
      function l(e, t, r) {
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
      let s = { guildNoticeDismissed: [] },
        c = new Map(),
        u = new Set();
      class d extends (i = a.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
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
          return u.has(e);
        }
      }
      l(d, "displayName", "CommandsMigrationStore"),
        l(d, "persistKey", "CommandsMigrationStore"),
        (t.Z = new d(o.Z, {
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
            null === (t = c.get(r)) || void 0 === t || t.clear(), u.add(n);
          },
          COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
            let { integrationId: t } = e;
            u.delete(t);
          },
        }));
    },
  },
]);
//# sourceMappingURL=3f0b8925b9b652eac8f3.js.map
