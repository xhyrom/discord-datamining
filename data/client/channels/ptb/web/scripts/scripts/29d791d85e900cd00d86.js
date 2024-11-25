"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92905"],
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
    995648: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(120356),
        a = n.n(i),
        o = n(481060),
        s = n(422559),
        l = n(95648);
      function c(e) {
        let {
          grantedPermissions: t,
          disabledPermissions: n,
          grantedPermissionsHeader: i,
          disabledPermissionsHeader: c,
          className: u,
        } = e;
        return (0, r.jsxs)("div", {
          className: a()(l.list, u),
          children: [
            null != t && t.length > 0
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    null != i
                      ? (0, r.jsx)(o.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: l.header,
                          children: i,
                        })
                      : null,
                    (0, r.jsx)("div", {
                      className: l.container,
                      children: t.map((e) =>
                        (0, r.jsxs)(
                          "div",
                          {
                            className: l.permission,
                            children: [
                              (0, r.jsx)(o.CheckmarkLargeIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: l.check,
                              }),
                              (0, r.jsx)(o.Text, {
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
            null != n && n.length > 0
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    null != c
                      ? (0, r.jsx)(o.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: l.header,
                          children: c,
                        })
                      : null,
                    (0, r.jsx)("div", {
                      className: l.container,
                      children: n.map((e) =>
                        (0, r.jsxs)(
                          "div",
                          {
                            className: l.permission,
                            children: [
                              (0, r.jsx)(o.XSmallIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: l.cross,
                              }),
                              (0, r.jsx)(o.Text, {
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
    167533: function (e, t, n) {
      n(47120);
      var r,
        i = n(200651),
        a = n(192379),
        o = n(120356),
        s = n.n(o),
        l = n(481060),
        c = n(981631),
        u = n(410642);
      function d(e, t, n) {
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
      let _ = (e) =>
        (0, i.jsx)("div", { className: e.className, children: e.children });
      class h extends (r = a.PureComponent) {
        isSortable(e) {
          return null != e.sort && !1 !== e.sort;
        }
        getDefaultSort(e) {
          return (t, n) => {
            let r = t[e],
              i = n[e];
            return null != r && null != i ? (r === i ? 0 : r < i ? -1 : 1) : 0;
          };
        }
        renderHeader() {
          let {
              columns: e,
              data: t,
              sortDirection: n,
              sortKey: r,
              headerCellClassName: a,
              headerClassName: o,
              sortedHeaderCellClassName: d,
              stickyHeader: h,
            } = this.props,
            m = e.map((e) => {
              let o = null != e.renderHeader ? e.renderHeader(e, t) : e.key,
                _ =
                  n === c.sHY.ASCENDING
                    ? l.ChevronSmallUpIcon
                    : l.ChevronSmallDownIcon;
              return (0, i.jsx)(
                l.Clickable,
                {
                  className: s()(
                    u.headerCell,
                    a,
                    e.headerCellClassName,
                    e.cellClassName,
                    r === e.key && d,
                    { [u.clickable]: this.isSortable(e) },
                  ),
                  onClick: this.isSortable(e)
                    ? () => this.handleSort(e.key)
                    : void 0,
                  children: (0, i.jsxs)("div", {
                    className: u.headerCellContent,
                    children: [
                      o,
                      this.isSortable(e) && r === e.key
                        ? (0, i.jsx)(_, { className: u.sortIcon })
                        : null,
                    ],
                  }),
                },
                e.key,
              );
            });
          return (0, i.jsx)(_, {
            className: s()(o, u.row, { [u.stickyHeader]: h }),
            children: m,
          });
        }
        renderBody() {
          let {
              columns: e,
              data: t,
              sortData: n,
              sortKey: r,
              sortDirection: i,
              bodyCellClassName: o,
              rowClassName: l,
              cellProps: d,
              rowProps: _,
              rowComponent: h,
              cellComponent: m,
            } = this.props,
            p = t;
          if (n) {
            let n =
                null != r
                  ? e.find((e) => {
                      let { key: t } = e;
                      return t === r;
                    })
                  : null,
              a = [...t],
              o = null != n && n.sort,
              s =
                null != n && null != r && this.isSortable(n)
                  ? a.sort(
                      "function" == typeof o
                        ? (e, t) => o(e, t, i)
                        : this.getDefaultSort(r),
                    )
                  : a;
            p = null != n && i === c.sHY.DESCENDING ? s.reverse() : s;
          }
          return p.map((t, n) => {
            let r = e.map((e) =>
              (0, a.createElement)(
                m,
                {
                  ...d,
                  key: e.key,
                  item: t,
                  className: s()(o, e.bodyCellClassName, e.cellClassName),
                },
                null != e.render ? e.render(t, d, n) : t[e.key],
              ),
            );
            return (0, a.createElement)(
              h,
              { ..._, key: t.key, item: t, className: s()(u.row, l) },
              r,
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
              let { sortKey: t, sortDirection: n, onSort: r } = this.props;
              if (null != r)
                r(
                  e,
                  t === e
                    ? n === c.sHY.ASCENDING
                      ? c.sHY.DESCENDING
                      : c.sHY.ASCENDING
                    : c.sHY.ASCENDING,
                );
            });
        }
      }
      d(h, "SortDirection", c.sHY),
        d(h, "defaultProps", {
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
        (t.Z = h);
    },
    53365: function (e, t, n) {
      n.d(t, {
        $J: function () {
          return E;
        },
        He: function () {
          return l;
        },
        av: function () {
          return h;
        },
        df: function () {
          return m;
        },
        hY: function () {
          return p;
        },
        oL: function () {
          return T;
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
      var r = n(544891),
        i = n(570140),
        a = n(728345),
        o = n(981631),
        s = n(674563);
      async function l(e) {
        await r.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e),
          rejectWithError: !1,
        });
      }
      async function c(e) {
        return (
          await r.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e),
            rejectWithError: !1,
          })
        ).body;
      }
      async function u(e, t) {
        await r.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t),
          rejectWithError: !1,
        });
      }
      async function d(e) {
        await r.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e),
          rejectWithError: !1,
        });
      }
      async function _(e) {
        return (
          await r.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e),
            rejectWithError: !1,
          })
        ).body;
      }
      async function h(e) {
        try {
          let t = await r.tn.get({
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
      async function m(e, t) {
        let n = (
          await r.tn.post({
            url: o.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: t },
            rejectWithError: !1,
          })
        ).body;
        return (
          null != n.application &&
            i.Z.dispatch({
              type: "APPLICATION_FETCH_SUCCESS",
              application: n.application,
            }),
          n
        );
      }
      function p(e) {
        return r.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e),
          rejectWithError: !1,
        });
      }
      function E(e) {
        return r.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e),
          rejectWithError: !1,
        });
      }
      async function I(e) {
        await r.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
          body: {},
          rejectWithError: !1,
        });
      }
      async function T(e) {
        return (
          await I(e),
          await a.ZP.getApplicationsForGuild(e, {
            type: s.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0,
          })
        );
      }
    },
    296386: function (e, t, n) {
      n.d(t, {
        J9: function () {
          return h;
        },
        K0: function () {
          return f;
        },
        Kq: function () {
          return C;
        },
        P$: function () {
          return E;
        },
        TA: function () {
          return d;
        },
        Vv: function () {
          return T;
        },
        W1: function () {
          return m;
        },
        aC: function () {
          return c;
        },
        i3: function () {
          return u;
        },
        le: function () {
          return l;
        },
        mA: function () {
          return p;
        },
        t$: function () {
          return I;
        },
        zH: function () {
          return _;
        },
      });
      var r = n(544891),
        i = n(570140),
        a = n(706454),
        o = n(150192),
        s = n(981631);
      async function l() {
        let e = a.default.locale;
        if (e === o.Z.getFetchedLocale()) return;
        let t = await r.tn.get({
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
              category_ids: n,
              keywords: a,
              emoji_discoverability_enabled: o,
              partner_actioned_timestamp: l,
              partner_application_timestamp: c,
              is_published: u,
              reasons_to_join: d,
              social_links: _,
              about: h,
            } = (
              await r.tn.get({
                url: s.ANM.GUILD_DISCOVERY_METADATA(e),
                oldFormErrors: !0,
                rejectWithError: !0,
              })
            ).body,
            m = {
              primaryCategoryId: t,
              secondaryCategoryIds: n,
              keywords: a,
              emojiDiscoverabilityEnabled: o,
              partnerActionedTimestamp: l,
              partnerApplicationTimestamp: c,
              isPublished: u,
              reasonsToJoin: d,
              socialLinks: _,
              about: h,
            };
          return (
            i.Z.dispatch({
              type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
              guildId: e,
              metadata: m,
            }),
            m
          );
        } catch (e) {
          i.Z.dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
        }
      }
      async function u(e) {
        try {
          let t = (
            await r.tn.get({
              url: s.ANM.GUILD_DISCOVERY_SLUG(e),
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
      function h(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          emojiDiscoverabilityEnabled: t,
        });
      }
      function m(e, t) {
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
      function E(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          reasonsToJoin: t,
        });
      }
      function I(e, t) {
        i.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          socialLinks: t,
        });
      }
      async function T(e) {
        let {
          guildId: t,
          primaryCategoryId: n,
          keywords: a,
          emojiDiscoverabilityEnabled: o,
          partnerActionedTimestamp: l,
          partnerApplicationTimestamp: c,
          isPublished: u,
          reasonsToJoin: d,
          socialLinks: _,
          about: h,
        } = e;
        try {
          let {
            primary_category_id: e,
            category_ids: m,
            keywords: p,
            emoji_discoverability_enabled: E,
            partner_actioned_timestamp: I,
            partner_application_timestamp: T,
            is_published: C,
            reasons_to_join: f,
            social_links: A,
            about: N,
          } = (
            await r.tn.patch({
              url: s.ANM.GUILD_DISCOVERY_METADATA(t),
              body: {
                primary_category_id: n,
                emoji_discoverability_enabled: o,
                partner_actioned_timestamp: l,
                partner_application_timestamp: c,
                keywords: a,
                is_published: u,
                reasons_to_join: d,
                social_links: _,
                about: h,
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
              secondaryCategoryIds: m,
              keywords: p,
              emojiDiscoverabilityEnabled: E,
              partnerActionedTimestamp: I,
              partnerApplicationTimestamp: T,
              isPublished: C,
              reasonsToJoin: f,
              socialLinks: A,
              about: N,
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
        r.tn
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
      function f(e, t) {
        r.tn
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
    150192: function (e, t, n) {
      n.d(t, {
        j: function () {
          return m;
        },
      }),
        n(653041),
        n(47120);
      var r,
        i,
        a,
        o,
        s = n(392711),
        l = n.n(s),
        c = n(442837),
        u = n(570140),
        d = n(823379),
        _ = n(731455),
        h = n(388032);
      function m(e, t) {
        return l().isEqual(
          e.map((e) => [e.categoryId, e.name]),
          t.map((e) => [e.categoryId, e.name]),
        );
      }
      let p = null,
        E = [],
        I = [],
        T = {};
      class C extends (r = c.ZP.Store) {
        getPrimaryCategories() {
          return E;
        }
        getDiscoveryCategories() {
          let e = _.L3.map((e) => I.find((t) => t.categoryId === e)).filter(
            d.lm,
          );
          return [{ categoryId: _.Hk, name: h.intl.string(h.t.Ym2Ri4) }, ...e];
        }
        getClanDiscoveryCategories() {
          let e = _.L3.map((e) => I.find((t) => t.categoryId === e)).filter(
            d.lm,
          );
          return [{ categoryId: _.Hk, name: h.intl.string(h.t.QToH29) }, ...e];
        }
        getAllCategories() {
          return I;
        }
        getFetchedLocale() {
          return p;
        }
        getCategoryName(e) {
          return e === _.Hk ? h.intl.string(h.t.Ym2Ri4) : T[e];
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
              { categories: n, locale: r } = e,
              i = [],
              a = [];
            if (
              (n
                .sort((e, t) => (e.name < t.name ? -1 : 1))
                .forEach((e) => {
                  let { id: n, name: r, is_primary: o } = e;
                  if (n !== _.o3) {
                    if (n === _.dc) {
                      t = { categoryId: n, name: r };
                      return;
                    }
                    !0 === o && i.push({ categoryId: n, name: r }),
                      a.push({ categoryId: n, name: r }),
                      (T[n] = r);
                  }
                }),
              null != t)
            ) {
              let { categoryId: e, name: n } = t;
              i.push({ categoryId: e, name: n }), (T[e] = n);
            }
            (p = r), (E = i), (I = a);
          },
        }));
    },
    983736: function (e, t, n) {
      n.d(t, {
        OA: function () {
          return o;
        },
        _C: function () {
          return l;
        },
        kT: function () {
          return s;
        },
      });
      var r = n(823379),
        i = n(246364),
        a = n(592286);
      let o = (e) => {
        let { required: t, response: n, field_type: a } = e;
        if (!t) return !0;
        if (null == n) return !1;
        switch (a) {
          case i.QJ.TERMS:
          case i.QJ.VERIFICATION:
            return !!n;
          case i.QJ.TEXT_INPUT:
          case i.QJ.PARAGRAPH:
            return "string" == typeof n && "" !== n.trim();
          case i.QJ.MULTIPLE_CHOICE:
            return "number" == typeof n;
          default:
            return (0, r.vE)(a);
        }
      };
      function s(e) {
        return a.lI.has(null == e ? void 0 : e.field_type);
      }
      function l(e) {
        return a.hZ.has(null == e ? void 0 : e.field_type);
      }
    },
    489813: function (e, t, n) {
      n.d(t, {
        Ih: function () {
          return l;
        },
        PU: function () {
          return c;
        },
        hK: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(692547),
        a = n(481060),
        o = n(933078);
      function s(e) {
        let { title: t, children: n } = e;
        return (0, r.jsxs)("div", {
          className: o.questionContainer,
          children: [
            (0, r.jsx)(a.Text, {
              className: o.questionTitle,
              variant: "text-md/semibold",
              color: "header-primary",
              children: t,
            }),
            n,
          ],
        });
      }
      function l(e) {
        let { icon: t, text: n, meetsRequirement: s } = e;
        return (0, r.jsxs)("div", {
          className: o.requirementContainer,
          children: [
            (0, r.jsx)(t, {
              className: o.requirementIcon,
              height: 20,
              width: 20,
              size: "custom",
              color: "currentColor",
            }),
            (0, r.jsx)(a.Text, {
              className: o.requirementText,
              variant: "text-md/normal",
              children: n,
            }),
            s
              ? (0, r.jsx)(a.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  className: o.requirementSuccess,
                  secondaryColor: i.Z.colors.WHITE.css,
                })
              : (0, r.jsx)(a.CircleXIcon, {
                  size: "md",
                  color: "currentColor",
                  className: o.requirementFailure,
                  secondaryColor: i.Z.colors.WHITE.css,
                }),
          ],
        });
      }
      function c(e) {
        let {
          icon: t,
          text: n,
          footnote: s,
          meetsRequirement: l,
          children: c,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: o.requirementContainer,
              children: [
                (0, r.jsx)(t, {
                  className: o.requirementIcon,
                  height: 20,
                  width: 20,
                  size: "custom",
                  color: "currentColor",
                }),
                (0, r.jsx)(a.Text, {
                  className: o.requirementText,
                  variant: "text-md/normal",
                  children: n,
                }),
                l
                  ? (0, r.jsx)(a.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: o.requirementSuccess,
                      secondaryColor: i.Z.colors.WHITE.css,
                    })
                  : c,
              ],
            }),
            null != s &&
              (0, r.jsx)(a.Text, {
                color: "header-secondary",
                className: o.footnote,
                variant: "text-xs/normal",
                children: s,
              }),
          ],
        });
      }
    },
    186078: function (e, t, n) {
      n.d(t, {
        BO: function () {
          return d;
        },
        QH: function () {
          return _;
        },
        sp: function () {
          return h;
        },
      });
      var r = n(200651),
        i = n(192379),
        a = n(120356),
        o = n.n(a),
        s = n(481060),
        l = n(489813),
        c = n(707592),
        u = n(119866);
      function d(e) {
        let {
            disabled: t,
            field: n,
            value: a,
            radioItemClassName: l,
            radioItemIconClassName: c,
            onChange: d,
          } = e,
          { choices: _ } = n,
          h = i.useMemo(
            () =>
              _.map((e, t) => ({
                name: e,
                value: t,
                radioItemIconClassName: o()(u.multipleChoiceIcon, c),
              })),
            [_, c],
          );
        return (0, r.jsx)(s.RadioGroup, {
          disabled: t,
          options: h,
          value: a,
          onChange: d,
          radioItemClassName: l,
          withTransparentBackground: !0,
        });
      }
      function _(e) {
        let { formField: t } = e,
          n = null != t.response ? t.choices[t.response] : "";
        return (0, r.jsx)(l.hK, {
          title: t.label,
          children: (0, r.jsx)(c.Gi, {
            className: u.fieldBackground,
            value: n,
            disabled: !0,
          }),
        });
      }
      function h(e) {
        let { formField: t, onChange: n } = e;
        return (0, r.jsx)(l.hK, {
          title: t.label,
          children: (0, r.jsx)(d, {
            radioItemClassName: u.fieldBackground,
            field: t,
            value: t.response,
            onChange: n,
          }),
        });
      }
    },
    73880: function (e, t, n) {
      n.d(t, {
        Q8: function () {
          return u;
        },
        jn: function () {
          return d;
        },
        lX: function () {
          return _;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(120356),
        a = n.n(i),
        o = n(481060),
        s = n(489813),
        l = n(592286),
        c = n(119866);
      function u(e) {
        let {
          value: t,
          placeholder: n,
          onChange: i,
          disabled: s,
          className: u,
          autofocus: d,
        } = e;
        return (0, r.jsx)(o.TextArea, {
          className: a()(c.paragraphFieldBody, u),
          maxLength: l.RS,
          value: null != t ? t : "",
          placeholder: null != n ? n : "",
          onChange: i,
          disabled: s,
          autoFocus: d,
          autosize: !0,
        });
      }
      function d(e) {
        let { formField: t } = e;
        return (0, r.jsx)(s.hK, {
          title: t.label,
          children: (0, r.jsx)(u, {
            className: c.fieldBackground,
            value: t.response,
            disabled: !0,
          }),
        });
      }
      function _(e) {
        let { formField: t, autofocus: n, onChange: i } = e;
        return (0, r.jsx)(s.hK, {
          title: t.label,
          children: (0, r.jsx)(u, {
            className: c.fieldBackground,
            value: t.response,
            onChange: i,
            autofocus: n,
          }),
        });
      }
    },
    196345: function (e, t, n) {
      n.d(t, {
        EK: function () {
          return d;
        },
        G0: function () {
          return _;
        },
        QC: function () {
          return h;
        },
        dd: function () {
          return m;
        },
      }),
        n(47120);
      var r = n(200651);
      n(192379);
      var i = n(120356),
        a = n.n(i),
        o = n(481060),
        s = n(454585),
        l = n(489813),
        c = n(388032),
        u = n(119866);
      function d(e) {
        let { terms: t, channelId: n, className: i } = e;
        return (0, r.jsx)("div", {
          className: a()(u.termsFieldBody, i),
          children: t.map((e, t) =>
            (0, r.jsxs)(
              "div",
              {
                className: u.termsRow,
                children: [
                  (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "".concat(t + 1, "."),
                  }),
                  (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: u.termsRowContent,
                    children: s.Z.parseGuildVerificationFormRule(e, !0, {
                      channelId: n,
                    }),
                  }),
                ],
              },
              "term-".concat(t),
            ),
          ),
        });
      }
      function _(e) {
        let { onChange: t, checked: n, disabled: i } = e;
        return (0, r.jsx)(o.Checkbox, {
          size: 20,
          type: o.Checkbox.Types.INVERTED,
          value: n,
          onChange: t,
          disabled: i,
          style: { borderWidth: 2 },
          className: u.checkbox,
          children: (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: c.intl.string(c.t["2EXfGB"]),
          }),
        });
      }
      function h(e) {
        let { formField: t } = e;
        return (0, r.jsx)(l.Ih, {
          icon: o.BookCheckIcon,
          text: c.intl.string(c.t["2xbmoK"]),
          meetsRequirement: !!t.response,
        });
      }
      let m = (e) => {
        let { channelId: t, formField: n, onChange: i } = e;
        return (0, r.jsxs)(l.hK, {
          title: c.intl.string(c.t.Q8OFNz),
          children: [
            (0, r.jsx)(d, {
              className: u.fieldBackground,
              terms: n.values,
              channelId: t,
            }),
            (0, r.jsx)(_, { onChange: i, checked: n.response }),
          ],
        });
      };
    },
    707592: function (e, t, n) {
      n.d(t, {
        Gi: function () {
          return u;
        },
        YJ: function () {
          return d;
        },
        zY: function () {
          return _;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(120356),
        a = n.n(i),
        o = n(481060),
        s = n(489813),
        l = n(592286),
        c = n(119866);
      function u(e) {
        let {
          value: t,
          placeholder: n,
          onChange: i,
          disabled: s,
          autofocus: u,
          className: d,
        } = e;
        return (0, r.jsx)(o.TextInput, {
          inputClassName: a()(c.textInputFieldBodyInput, d),
          maxLength: l.tL,
          value: null != t ? t : "",
          placeholder: n,
          onChange: i,
          disabled: s,
          autoFocus: u,
        });
      }
      function d(e) {
        let { formField: t } = e;
        return (0, r.jsx)(s.hK, {
          title: t.label,
          children: (0, r.jsx)(o.TextArea, {
            className: a()(c.textInputFieldBodyInput, c.fieldBackground),
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
          }),
        });
      }
      function _(e) {
        let { formField: t, autofocus: n, onChange: i } = e;
        return (0, r.jsx)(s.hK, {
          title: t.label,
          children: (0, r.jsx)(u, {
            className: c.fieldBackground,
            onChange: i,
            value: t.response,
            autofocus: n,
          }),
        });
      }
    },
    929507: function (e, t, n) {
      n(47120);
      var r = n(192379),
        i = n(399606),
        a = n(544891),
        o = n(570140),
        s = n(367907),
        l = n(430824),
        c = n(496675),
        u = n(626135),
        d = n(70956),
        _ = n(997787),
        h = n(981631);
      let m = 1 * d.Z.Millis.DAY,
        p = new Map();
      t.Z = {
        useShouldShowChannelNotice(e) {
          let t = (0, i.e7)([l.Z, c.Z], () => {
            let t = l.Z.getGuild(e);
            return null != t && c.Z.can(h.Plq.ADMINISTRATOR, t);
          });
          r.useEffect(() => {
            t &&
              !(function (e) {
                var t;
                let n = Date.now(),
                  r = null !== (t = p.get(e)) && void 0 !== t ? t : 0;
                if (!(n < r + m))
                  p.set(e, n),
                    a.tn
                      .post({
                        url: h.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e),
                        rejectWithError: !0,
                      })
                      .then(
                        (t) => {
                          var n, r;
                          o.Z.dispatch({
                            type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
                            guildId: e,
                            integrationIdsWithAppCommands:
                              null !==
                                (r =
                                  null === (n = t.body) || void 0 === n
                                    ? void 0
                                    : n.integration_ids_with_app_commands) &&
                              void 0 !== r
                                ? r
                                : [],
                          });
                        },
                        () => {
                          p.set(e, r);
                        },
                      );
              })(e);
          }, [e, t]);
          let n = (0, i.e7)([_.Z], () => _.Z.shouldShowChannelNotice(e));
          return t && n;
        },
        dismissNotice(e) {
          o.Z.dispatch({
            type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
            guildId: e,
          });
        },
        dismissOverviewTooltip(e, t) {
          var n;
          o.Z.dispatch({
            type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
            guildId: e,
            integrationId: t.id,
          }),
            u.default.track(h.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
              ...(0, s.hH)(e),
              application_id:
                null === (n = t.application) || void 0 === n ? void 0 : n.id,
              location: "overview",
            });
        },
        dismissToggleTooltip(e, t) {
          var n;
          if (void 0 !== t)
            o.Z.dispatch({
              type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
              integrationId: t.id,
            }),
              u.default.track(h.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                ...(0, s.hH)(e),
                application_id:
                  null === (n = t.application) || void 0 === n ? void 0 : n.id,
                location: "toggle",
              });
        },
      };
    },
    997787: function (e, t, n) {
      let r;
      n(47120), n(653041);
      var i,
        a = n(442837),
        o = n(570140);
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
      let l = { guildNoticeDismissed: [] },
        c = new Map(),
        u = new Set();
      class d extends (i = a.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
          r = e;
        }
        getState() {
          return r;
        }
        shouldShowChannelNotice(e) {
          var t, n;
          return (
            !r.guildNoticeDismissed.includes(e) &&
            (null !==
              (n = null === (t = c.get(e)) || void 0 === t ? void 0 : t.size) &&
            void 0 !== n
              ? n
              : 0) > 0
          );
        }
        canShowOverviewTooltip(e, t) {
          var n;
          return (
            (null === (n = c.get(e)) || void 0 === n ? void 0 : n.has(t)) === !0
          );
        }
        canShowToggleTooltip(e) {
          return u.has(e);
        }
      }
      s(d, "displayName", "CommandsMigrationStore"),
        s(d, "persistKey", "CommandsMigrationStore"),
        (t.Z = new d(o.Z, {
          COMMANDS_MIGRATION_UPDATE_SUCCESS: function (e) {
            let { guildId: t, integrationIdsWithAppCommands: n } = e;
            return c.set(t, new Set(n)), !0;
          },
          COMMANDS_MIGRATION_NOTICE_DISMISSED: function (e) {
            let { guildId: t } = e;
            r.guildNoticeDismissed.push(t);
          },
          COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (e) {
            var t;
            let { guildId: n, integrationId: r } = e;
            null === (t = c.get(n)) || void 0 === t || t.clear(), u.add(r);
          },
          COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
            let { integrationId: t } = e;
            u.delete(t);
          },
        }));
    },
  },
]);
//# sourceMappingURL=29d791d85e900cd00d86.js.map
