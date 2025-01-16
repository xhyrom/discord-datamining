"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43704"],
  {
    943935: function (e) {
      e.exports = "/assets/4e53f7d2ba48d2467d4e.svg";
    },
    820305: function (e) {
      e.exports = "/assets/7420805cccd81e0e9704.svg";
    },
    887706: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = i(399606),
        a = i(314897);
      function r() {
        return (0, n.e7)([a.default], () => a.default.isAuthenticated());
      }
    },
    744142: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = i(200651),
        a = i(192379),
        r = i(481060),
        o = i(768581),
        l = i(924489),
        c = i(950854),
        s = i(824606),
        d = i(295519);
      function u(e) {
        var t, i, u, _, p;
        let {
            application: h,
            className: m,
            childrenClassName: f,
            animatesOnHover: g,
            onClick: x,
            ...C
          } = e,
          b = o.ZP.getApplicationIconURL({ id: h.id, icon: h.icon, size: 48 }),
          I = (0, s.Z)({ application: h }),
          v = null === (t = h.categories) || void 0 === t ? void 0 : t[0],
          A =
            (null !==
              (_ =
                null === (i = h.directory_entry) || void 0 === i
                  ? void 0
                  : i.guild_count) && void 0 !== _
              ? _
              : 0) > 0 || I.length > 0,
          N = a.useCallback(() => {
            x({ mutualGuilds: I });
          }, [x, I]),
          L = (0, n.jsx)(l.Z, {
            application: h,
            textVariant: "text-xs/normal",
            mutualGuilds: I,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0,
          });
        return (0, n.jsxs)(c.Z, {
          className: m,
          onClick: N,
          iconSrc: b,
          header: h.name,
          subheader:
            null != v &&
            (0, n.jsx)(r.Text, {
              tag: "span",
              color: "header-secondary",
              variant: "text-xs/normal",
              children: v.name,
            }),
          animatesOnHover: g,
          ...C,
          children: [
            (null != h.description || null != f) &&
              (0, n.jsx)("div", {
                className: f,
                children: (0, n.jsx)(r.Text, {
                  className: d.listingDescription,
                  variant: "text-sm/normal",
                  lineClamp: 2,
                  children:
                    null !==
                      (p =
                        null === (u = h.directory_entry) || void 0 === u
                          ? void 0
                          : u.short_description) && void 0 !== p
                      ? p
                      : h.description,
                }),
              }),
            A &&
              (0, n.jsx)("div", {
                className: d.bottomGuildCountContainer,
                children: L,
              }),
          ],
        });
      }
    },
    218864: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = i(200651),
        a = i(192379),
        r = i(481060),
        o = i(924489),
        l = i(950854),
        c = i(824606),
        s = i(722261);
      function d(e) {
        var t, i, d, u, _;
        let {
            application: p,
            onClick: h,
            imageSrc: m,
            className: f,
            animatesOnHover: g,
          } = e,
          x = (0, c.Z)({ application: p }),
          C = null === (t = p.categories) || void 0 === t ? void 0 : t[0],
          b =
            (null !==
              (u =
                null === (i = p.directory_entry) || void 0 === i
                  ? void 0
                  : i.guild_count) && void 0 !== u
              ? u
              : 0) > 0 || x.length > 0,
          I = a.useCallback(() => {
            h({ mutualGuilds: x });
          }, [h, x]),
          v = (0, n.jsx)(o.Z, {
            application: p,
            textVariant: "text-xs/normal",
            mutualGuilds: x,
            mutualGuildShownMax: 3,
            guildIconSize: o.x.SMALL,
            compact: !0,
          });
        return (0, n.jsx)(l.Z, {
          className: f,
          imageSrc: m,
          onClick: I,
          header: p.name,
          subheader: (0, n.jsxs)("div", {
            className: s.subheader,
            children: [
              null != C &&
                (0, n.jsx)(r.Text, {
                  tag: "span",
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: C.name,
                }),
              b &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    null != C &&
                      (0, n.jsx)("span", {
                        className: s.bullet,
                        children: "•",
                      }),
                    v,
                  ],
                }),
            ],
          }),
          animatesOnHover: g,
          children:
            null != p.description &&
            (0, n.jsx)("div", {
              className: s.__invalid_children,
              children: (0, n.jsx)(r.Text, {
                className: s.listingDescription,
                variant: "text-sm/normal",
                lineClamp: 2,
                children:
                  null !==
                    (_ =
                      null === (d = p.directory_entry) || void 0 === d
                        ? void 0
                        : d.short_description) && void 0 !== _
                    ? _
                    : p.description,
              }),
            }),
        });
      }
    },
    927356: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = i(200651),
        a = i(192379),
        r = i(120356),
        o = i.n(r),
        l = i(481060),
        c = i(388032),
        s = i(88325),
        d = i(902294);
      function u(e) {
        let {
          heading: t = c.intl.string(c.t.NGw8v7),
          body: i = c.intl.string(c.t["1XZRY2"]),
          className: r,
        } = e;
        return (0, n.jsxs)("div", {
          className: o()(s.container, r),
          children: [
            (0, n.jsx)("img", {
              className: s.image,
              src: d,
              alt: c.intl.string(c.t["/UJaIy"]),
            }),
            (0, n.jsxs)(a.Fragment, {
              children: [
                (0, n.jsx)(l.Heading, {
                  className: s.header,
                  variant: "heading-xl/semibold",
                  children: t,
                }),
                (0, n.jsx)(l.Text, { variant: "text-md/normal", children: i }),
              ],
            }),
          ],
        });
      }
    },
    950854: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = i(200651);
      i(192379);
      var a = i(120356),
        r = i.n(a),
        o = i(481060),
        l = i(388032),
        c = i(746220);
      function s(e) {
        let {
            className: t,
            onClick: i,
            imageSrc: a,
            iconSrc: s,
            header: d,
            headerClassName: u,
            subheaderVariant: _ = "text-sm/normal",
            subheader: p,
            children: h,
            animatesOnHover: m,
            ...f
          } = e,
          g = null != a,
          x = (0, n.jsxs)(n.Fragment, {
            children: [
              g &&
                (0, n.jsx)("div", {
                  className: c.imageContainer,
                  children: (0, n.jsx)("img", {
                    alt: "",
                    className: c.image,
                    src: a,
                  }),
                }),
              (0, n.jsxs)("div", {
                className: c.textContainer,
                children: [
                  (0, n.jsxs)("div", {
                    className: r()(c.topRowContainer),
                    children: [
                      null != s &&
                        (0, n.jsx)("img", {
                          className: c.icon,
                          alt: "",
                          "aria-hidden": !0,
                          src: s,
                          width: 48,
                          height: 48,
                        }),
                      (0, n.jsxs)("div", {
                        className: c.headerContainer,
                        children: [
                          (0, n.jsx)(o.Heading, {
                            variant: "heading-md/medium",
                            className: u,
                            children: d,
                          }),
                          null != p &&
                            (0, n.jsx)(o.Text, {
                              className: c.subheader,
                              color: "header-secondary",
                              variant: _,
                              children: p,
                            }),
                        ],
                      }),
                    ],
                  }),
                  h,
                ],
              }),
            ],
          }),
          C = r()(t, c.container, { [c.hasImage]: g });
        return null != i
          ? (0, n.jsx)(o.ClickableContainer, {
              tag: "article",
              "aria-label": l.intl.formatToPlainString(l.t["0cVQIC"], {
                name: d,
              }),
              onClick: i,
              className: r()(C, c.clickable, {
                [c.animatesOnHoverContainer]: m,
              }),
              focusProps: { offset: 4 },
              children: x,
            })
          : (0, n.jsx)("article", { className: C, ...f, children: x });
      }
    },
    190733: function (e, t, i) {
      i(47120);
      var n = i(200651),
        a = i(192379),
        r = i(120356),
        o = i.n(r),
        l = i(481060),
        c = i(981631),
        s = i(388032),
        d = i(425871);
      t.Z = a.forwardRef(function (e, t) {
        let {
            query: i,
            canShowCta: r = !1,
            onChange: u,
            onSubmit: _,
            className: p,
          } = e,
          [h, m] = a.useState(!1);
        return (0, n.jsx)(l.SearchBox, {
          ref: t,
          className: o()(d.search, p),
          label: s.intl.string(s.t.APrAU1),
          placeholder: s.intl.string(s.t.APrAU1),
          searchTerm: i,
          cta: r && h && i.length > 0 ? s.intl.string(s.t["CU+6oK"]) : null,
          onChange: u,
          onClear: () => u(""),
          onFocus: () => m(!0),
          onBlur: () => m(!1),
          onKeyPress: (e) => {
            e.charCode === c.yXg.ENTER && (null == _ || _());
          },
          autoFocus: !0,
        });
      });
    },
    74438: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return f;
          },
        });
      var n = i(200651),
        a = i(192379),
        r = i(399606),
        o = i(626135),
        l = i(894653),
        c = i(738130),
        s = i(132871),
        d = i(961106),
        u = i(62413),
        _ = i(603406),
        p = i(165209),
        h = i(981631),
        m = i(400435);
      function f() {
        let e = (0, s.useApplicationDirectoryHistory)((e) => e.guildId),
          t = (0, r.e7)([l.Z], () => l.Z.getCategories()),
          i = (0, s.getPreviousView)();
        return (
          a.useEffect(() => {
            o.default.track(h.rMx.APP_DIRECTORY_PAGE_VIEWED, {
              current_page: s.ApplicationDirectoryViews.HOME,
              previous_page: null == i ? void 0 : i.type,
              guild_id: e,
              referrer: document.referrer,
            });
          }, [e, i]),
          (0, n.jsxs)(c.Z, {
            children: [
              (0, n.jsx)(_.Z, {}),
              null != t &&
                t.length > 0 &&
                (0, n.jsx)(d.Z, { className: m.categoryList }),
              (0, n.jsx)("main", {
                className: m.collectionsContainer,
                children: (0, n.jsx)(u.Z, {}),
              }),
              (0, n.jsx)(p.Z, {}),
            ],
          })
        );
      }
    },
    961106: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return x;
        },
      }),
        i(47120),
        i(610138),
        i(216116),
        i(78328),
        i(815648);
      var n = i(200651),
        a = i(192379),
        r = i(120356),
        o = i.n(r),
        l = i(399606),
        c = i(481060),
        s = i(626135),
        d = i(463571),
        u = i(894653),
        _ = i(34674),
        p = i(132871),
        h = i(147890),
        m = i(981631),
        f = i(388032),
        g = i(300739);
      function x(e) {
        let { className: t } = e,
          i = (0, p.useApplicationDirectoryHistory)((e) => e.guildId),
          r = (0, l.e7)([u.Z], () => u.Z.getCategories()),
          x = a.useMemo(() => [(0, _.KQ)(), ...r], [r]),
          C = (0, p.getCurrentView)(),
          b = (e) => {
            let t = x.find((t) => t.id === e);
            s.default.track(m.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
              category: t.name,
              category_id: t.id,
              current_page: null == C ? void 0 : C.type,
              guild_id: i,
            }),
              (0, h.goToCategory)({ categoryId: t.id });
          };
        return (0, n.jsx)("nav", {
          className: o()(g.container, t),
          children: x.map((e) => {
            let t = e.id,
              i = e.name,
              a = (0, _.tu)(e),
              r = new URLSearchParams();
            return (
              r.set("category_id", t.toString()),
              (0, n.jsx)(
                d.Z,
                {
                  href: ""
                    .concat(m.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                    .concat(r),
                  children: (0, n.jsxs)(c.Clickable, {
                    className: g.category,
                    "aria-label": f.intl.formatToPlainString(f.t.AUeHHh, {
                      categoryName: i,
                    }),
                    onClick: () => b(t),
                    children: [
                      (0, n.jsx)(a, {
                        className: g.icon,
                        size: "md",
                        color: "currentColor",
                      }),
                      (0, n.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: i,
                      }),
                    ],
                  }),
                },
                t,
              )
            );
          }),
        });
      }
    },
    185156: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return v;
        },
      }),
        i(47120);
      var n = i(200651),
        a = i(192379),
        r = i(120356),
        o = i.n(r),
        l = i(912370),
        c = i(477690),
        s = i(481060),
        d = i(453499),
        u = i(626135),
        _ = i(463571),
        p = i(34674),
        h = i(132871),
        m = i(147890),
        f = i(409425),
        g = i(57716),
        x = i(981631),
        C = i(388032),
        b = i(885391);
      function I(e) {
        let {
            collectionTitle: t,
            title: i,
            description: a,
            handleClick: r,
            imageSrc: l,
            ctaLabel: c,
            ctaLink: d,
            applicationId: u,
          } = e,
          p = "936929561302675456" === u,
          h =
            null == u
              ? (0, n.jsx)(s.Button, {
                  className: b.applicationCta,
                  onClick: r,
                  children: c,
                })
              : (0, n.jsx)(_.Z, {
                  href: x.Z5c.APPLICATION_DIRECTORY_PROFILE(u),
                  children: (0, n.jsx)(s.Button, {
                    className: b.applicationCta,
                    onClick: r,
                    children: c,
                  }),
                });
        return (0, n.jsxs)("div", {
          className: b.card,
          children: [
            (0, n.jsx)("div", {
              className: b.textContainer,
              children: (0, n.jsxs)("div", {
                className: b.verticallyCenter,
                children: [
                  (0, n.jsx)(s.Text, {
                    className: b.collectionTitle,
                    tag: "span",
                    color: "header-secondary",
                    variant: "heading-deprecated-12/semibold",
                    children: t,
                  }),
                  (0, n.jsxs)(s.Heading, {
                    className: b.applicationName,
                    variant: "heading-xxl/medium",
                    children: [i, " ", p && (0, n.jsx)(f.Z, {})],
                  }),
                  (0, n.jsx)(s.Text, {
                    className: b.applicationDescription,
                    variant: "text-md/normal",
                    lineClamp: 3,
                    children: a,
                  }),
                  null == d
                    ? h
                    : (0, n.jsx)(s.Anchor, {
                        onClick: r,
                        href: d,
                        className: o()(
                          (0, s.getButtonStyle)({ grow: !1 }),
                          b.applicationCta,
                        ),
                        children: c,
                      }),
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className: b.imageContainer,
              children: (0, n.jsx)("img", {
                alt: i,
                className: b.image,
                src: l,
              }),
            }),
          ],
        });
      }
      function v(e) {
        let {
            collection: t,
            collection: {
              id: i,
              title: r,
              application_directory_collection_items: s,
            },
          } = e,
          _ = (0, g.Z)({ collection: t }),
          [f, v] = a.useState(),
          A = (0, h.useApplicationDirectoryHistory)((e) => e.guildId);
        return (
          a.useEffect(() => {
            let e = null == _ ? void 0 : _.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
              let t =
                document.body.offsetWidth <
                parseFloat(c.Z.COLLECTION_GALLERY_MEDIA_BREAKPOINT)
                  ? parseFloat(c.Z.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT)
                  : parseFloat(c.Z.COLLECTION_GALLERY_ROW_CARD_HEIGHT);
              v(e.offsetWidth / t);
            });
            return (
              t.observe(document.body),
              () => {
                t.disconnect();
              }
            );
          }, [_]),
          (0, n.jsx)("article", {
            ref: _,
            className: o()({ [b.collectionBottomMargin]: s.length <= 1 }),
            children: (0, n.jsx)(d.Z, {
              aspectRatio: f,
              themedPagination: !0,
              paginationClassName: b.paginationControls,
              paginationArrowClassName: b.paginationArrow,
              items: s,
              onChangeItem: (e, t, n) => {
                if (e.type === l.C.APPLICATION && null != e.application)
                  u.default.track(x.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
                    collection_id: i,
                    offset: n,
                    results: [e.application.id],
                    guild_id: A,
                  });
              },
              renderItem: (e) => {
                if (null == e.image_hash) return;
                let t = (0, p.$_)({ itemId: e.id, hash: e.image_hash });
                if (e.type === l.C.APPLICATION && null != e.application) {
                  var a, o;
                  return (0, n.jsx)(I, {
                    collectionTitle: r,
                    title: e.application.name,
                    description:
                      null !==
                        (o =
                          null === (a = e.application.directory_entry) ||
                          void 0 === a
                            ? void 0
                            : a.short_description) && void 0 !== o
                        ? o
                        : e.application.description,
                    handleClick: () => {
                      u.default.track(
                        x.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED,
                        {
                          collection_id: i,
                          application_id: e.application.id,
                          guild_id: A,
                          shown_mutual_guilds_count: void 0,
                        },
                      ),
                        (0, m.goToApplication)({
                          applicationId: e.application.id,
                        });
                    },
                    imageSrc: t,
                    ctaLabel: C.intl.string(C.t.xKUoVl),
                    applicationId: e.application.id,
                  });
                }
                if (
                  e.type === l.C.LINK &&
                  null != e.title &&
                  null != e.call_to_action_url &&
                  null != e.call_to_action_label
                )
                  return (0, n.jsx)(I, {
                    collectionTitle: r,
                    title: e.title,
                    description: e.description,
                    handleClick: () => {
                      u.default.track(
                        x.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED,
                        {
                          collection_id: i,
                          link: e.call_to_action_url,
                          guild_id: A,
                          shown_mutual_guilds_count: void 0,
                        },
                      );
                    },
                    imageSrc: t,
                    ctaLabel: e.call_to_action_label,
                    ctaLink: e.call_to_action_url,
                  });
              },
            }),
          })
        );
      }
    },
    87528: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return g;
        },
      }),
        i(47120),
        i(724458),
        i(653041);
      var n = i(200651),
        a = i(192379),
        r = i(912370),
        o = i(477690),
        l = i(313201),
        c = i(626135),
        s = i(463571),
        d = i(744142),
        u = i(132871),
        _ = i(147890),
        p = i(216547),
        h = i(57716),
        m = i(981631),
        f = i(805540);
      function g(e) {
        let {
            collection: t,
            collection: {
              id: i,
              title: g,
              application_directory_collection_items: x,
            },
          } = e,
          [C, b] = a.useState(300),
          [I, v] = a.useState(4),
          A = parseFloat(o.Z.COLLECTION_LIST_CARD_GAP),
          N = (0, u.useApplicationDirectoryHistory)((e) => e.guildId),
          L = (0, h.Z)({ collection: t });
        a.useEffect(() => {
          function e() {
            var e;
            let t =
                null === (e = L.current) || void 0 === e
                  ? void 0
                  : e.offsetWidth,
              i = 1;
            return null == t
              ? 300
              : (t >= 500 && (i = 2),
                t >= 700 && (i = 3),
                t >= 1e3 && (i = 4),
                v(i),
                (t - (i - 1) * A) / i);
          }
          let t = L.current;
          if (null == t) return;
          let i = new ResizeObserver(() => {
            b(e());
          });
          return (
            b(e()),
            i.observe(t),
            () => {
              i.disconnect();
            }
          );
        }, [A, L]);
        let T = (0, l.Dt)();
        return (0, n.jsx)("div", {
          ref: L,
          children: (0, n.jsx)(p.Z, {
            header: g,
            headerId: T,
            tileWidth: C,
            tileMargin: A,
            onScroll: (e) => {
              let { tileIndex: t } = e,
                n = x
                  .slice(t, t + I)
                  .reduce(
                    (e, t) => (
                      t.type === r.C.APPLICATION &&
                        null != t.application &&
                        e.push(t.application.id),
                      e
                    ),
                    [],
                  );
              c.default.track(m.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
                collection_id: i,
                offset: t,
                results: n,
                guild_id: N,
              });
            },
            children: (0, n.jsx)("ul", {
              "aria-labelledby": T,
              className: f.itemsContainer,
              children: x.map((e) => {
                if (e.type === r.C.APPLICATION && null != e.application)
                  return (0, n.jsx)(
                    "li",
                    {
                      style: { width: C },
                      className: f.itemContainer,
                      children: (0, n.jsx)(s.Z, {
                        className: f.seoAnchor,
                        href: m.Z5c.APPLICATION_DIRECTORY_PROFILE(
                          e.application.id,
                        ),
                        children: (0, n.jsx)(d.Z, {
                          application: e.application,
                          onClick: (t) => {
                            let { mutualGuilds: n } = t;
                            c.default.track(
                              m.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED,
                              {
                                collection_id: i,
                                application_id: e.application.id,
                                guild_id: N,
                                shown_mutual_guilds_count: n.length,
                              },
                            ),
                              (0, _.goToApplication)({
                                applicationId: e.application.id,
                              });
                          },
                          animatesOnHover: !0,
                        }),
                      }),
                    },
                    e.id,
                  );
              }),
            }),
          }),
        });
      }
    },
    57348: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return x;
        },
      });
      var n = i(200651);
      i(192379);
      var a = i(120356),
        r = i.n(a),
        o = i(912370),
        l = i(481060),
        c = i(626135),
        s = i(463571),
        d = i(34674),
        u = i(218864),
        _ = i(950854),
        p = i(132871),
        h = i(147890),
        m = i(57716),
        f = i(981631),
        g = i(867187);
      function x(e) {
        let {
            collection: t,
            collection: {
              id: i,
              title: a,
              application_directory_collection_items: x,
            },
          } = e,
          C = (0, m.Z)({ collection: t }),
          b = (0, p.useApplicationDirectoryHistory)((e) => e.guildId);
        return (0, n.jsxs)("div", {
          ref: C,
          children: [
            (0, n.jsx)(l.Heading, {
              variant: "heading-lg/semibold",
              className: g.header,
              children: a,
            }),
            (0, n.jsx)("div", {
              className: g.list,
              children: x.map((e) => {
                if (null == e.image_hash) return;
                let t = (0, d.$_)({ itemId: e.id, hash: e.image_hash });
                return e.type === o.C.APPLICATION && null != e.application
                  ? (0, n.jsx)(
                      s.Z,
                      {
                        href: f.Z5c.APPLICATION_DIRECTORY_PROFILE(
                          e.application.id,
                        ),
                        className: g.item,
                        children: (0, n.jsx)(u.Z, {
                          imageSrc: t,
                          application: e.application,
                          onClick: (t) => {
                            let { mutualGuilds: n } = t;
                            c.default.track(
                              f.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED,
                              {
                                collection_id: i,
                                application_id: e.application.id,
                                guild_id: b,
                                shown_mutual_guilds_count: n.length,
                              },
                            ),
                              (0, h.goToApplication)({
                                applicationId: e.application.id,
                              });
                          },
                          animatesOnHover: !0,
                        }),
                      },
                      e.id,
                    )
                  : e.type === o.C.LINK && null != a
                    ? (0, n.jsxs)(
                        _.Z,
                        {
                          className: r()(g.item, g.linkCard),
                          imageSrc: t,
                          header: a,
                          headerClassName: g.cardHeader,
                          children: [
                            (0, n.jsx)(l.Text, {
                              variant: "text-sm/normal",
                              className: g.linkDescription,
                              children: e.description,
                            }),
                            (0, n.jsx)(l.Anchor, {
                              onClick: () => {
                                c.default.track(
                                  f.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED,
                                  {
                                    collection_id: i,
                                    link: e.call_to_action_url,
                                    guild_id: b,
                                    shown_mutual_guilds_count: void 0,
                                  },
                                );
                              },
                              href: e.call_to_action_url,
                              className: r()(
                                (0, l.getButtonStyle)(),
                                g.linkCta,
                              ),
                              children: e.call_to_action_label,
                            }),
                          ],
                        },
                        e.id,
                      )
                    : void 0;
              }),
            }),
          ],
        });
      }
    },
    62413: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return I;
        },
      }),
        i(411104);
      var n = i(200651),
        a = i(192379),
        r = i(120356),
        o = i.n(r),
        l = i(535655),
        c = i(973693),
        s = i(873199),
        d = i(442837),
        u = i(857192),
        _ = i(674588),
        p = i(368862),
        h = i(927356),
        m = i(125909),
        f = i(185156),
        g = i(87528),
        x = i(57348),
        C = i(288321);
      let b = c.Y.APPLICATION_DIRECTORY;
      function I() {
        let e = (0, d.e7)(
            [u.default],
            () => u.default.onlyShowPreviewAppCollections,
          )
            ? l.E.PREVIEW
            : l.E.ACTIVE,
          t = (0, d.e7)([p.Z], () =>
            p.Z.getFetchState({ surface: b, activeState: e }),
          ),
          i = (0, d.e7)([p.Z], () =>
            p.Z.getCollections({ surface: b, activeState: e }),
          );
        return (a.useEffect(() => {
          _.XK({ surface: b, activeState: e });
        }, [e]),
        t === p.M.ERROR)
          ? (0, n.jsx)(h.Z, {})
          : (0, n.jsx)(m.Z, {
              loading: t === p.M.FETCHING,
              children:
                null == i
                  ? void 0
                  : i.map((e, t) => {
                      let a;
                      let r = t > 0 && i[t - 1].type !== s.o.GALLERY;
                      switch (e.type) {
                        case s.o.LIST:
                          a = (0, n.jsx)(g.Z, { collection: e });
                          break;
                        case s.o.LIST_WITH_IMAGE:
                          a = (0, n.jsx)(x.Z, { collection: e });
                          break;
                        case s.o.GALLERY:
                          a = (0, n.jsx)(f.Z, { collection: e });
                          break;
                        default:
                          return null;
                      }
                      return (0, n.jsx)(
                        "div",
                        { className: o()({ [C.topMargin]: r }), children: a },
                        e.id,
                      );
                    }),
            });
      }
    },
    603406: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return m;
        },
      }),
        i(47120);
      var n = i(200651),
        a = i(192379),
        r = i(481060),
        o = i(626135),
        l = i(34674),
        c = i(190733),
        s = i(132871),
        d = i(147890),
        u = i(981631),
        _ = i(388032),
        p = i(384552),
        h = i(943935);
      function m() {
        let e = (0, s.useApplicationDirectoryHistory)((e) => e.guildId),
          [t, i] = a.useState(""),
          m = a.useCallback(() => {
            let i = (0, l.KQ)();
            o.default.track(u.rMx.APP_DIRECTORY_SEARCH_STARTED, {
              search_term: t,
              category: i.name,
              current_page: s.ApplicationDirectoryViews.HOME,
              category_id: i.id,
              guild_id: e,
            }),
              (0, d.goSearch)({ query: t });
          }, [e, t]);
        return (0, n.jsxs)("div", {
          className: p.container,
          children: [
            (0, n.jsxs)("div", {
              className: p.searchBarContainer,
              children: [
                (0, n.jsx)(r.Heading, {
                  variant: "display-lg",
                  className: p.heading,
                  children: _.intl.string(_.t["n61/Q0"]),
                }),
                (0, n.jsx)(c.Z, {
                  className: p.searchBar,
                  query: t,
                  onChange: i,
                  onSubmit: m,
                  canShowCta: !0,
                }),
              ],
            }),
            (0, n.jsx)("img", { src: h, alt: "", className: p.rightImage }),
          ],
        });
      }
    },
    165209: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = i(200651);
      i(192379);
      var a = i(481060),
        r = i(782568),
        o = i(626135),
        l = i(63063),
        c = i(132871),
        s = i(981631),
        d = i(388032),
        u = i(62567),
        _ = i(820305);
      function p() {
        let e = (0, c.useApplicationDirectoryHistory)((e) => e.guildId);
        return (0, n.jsxs)("div", {
          className: u.container,
          role: "contentinfo",
          children: [
            (0, n.jsx)("img", { className: u.image, src: _, alt: "" }),
            (0, n.jsxs)("div", {
              className: u.content,
              children: [
                (0, n.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children: d.intl.string(d.t["kw8/ER"]),
                }),
                (0, n.jsx)(a.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: d.intl.string(d.t.GZoV1N),
                }),
              ],
            }),
            (0, n.jsx)(a.Button, {
              size: a.Button.Sizes.SMALL,
              onClick: function () {
                o.default.track(s.rMx.APP_DIRECTORY_CTA_CLICKED, {
                  cta: "new_to_apps",
                  current_page: c.ApplicationDirectoryViews.HOME,
                  guild_id: e,
                }),
                  (0, r.Z)(l.Z.getAppsSupportURL(s.BhN.APPS_LEARN_MORE));
              },
              className: u.button,
              children: d.intl.string(d.t["B90I9/"]),
            }),
          ],
        });
      }
    },
    409425: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = i(200651);
      i(192379);
      var a = i(120356),
        r = i.n(a),
        o = i(481060),
        l = i(377171),
        c = i(388032),
        s = i(493004);
      function d(e) {
        let { className: t, ...i } = e;
        return (0, n.jsx)(o.TextBadge, {
          ...i,
          text: c.intl.string(c.t.LO4f0N),
          color: l.Z.BACKGROUND_TERTIARY,
          className: r()(t, s.partnerBadge),
        });
      }
    },
    216547: function (e, t, i) {
      i(47120);
      var n,
        a,
        r = i(200651),
        o = i(192379),
        l = i(120356),
        c = i.n(l),
        s = i(995295),
        d = i(513431),
        u = i(481060),
        _ = i(112724),
        p = i(768762),
        h = i(635712);
      function m(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      ((a = n || (n = {}))[(a.LEFT = 0)] = "LEFT"),
        (a[(a.RIGHT = 1)] = "RIGHT");
      let f = (e) => {
        let { onClick: t, className: i, direction: n } = e;
        return (0, r.jsx)(u.Clickable, {
          "aria-hidden": !0,
          className: c()(h.scrollerButton, i),
          onClick: t,
          children: (0, r.jsx)(p.Z, {
            className: h.scrollerButtonArrow,
            direction: n,
          }),
        });
      };
      class g extends o.Component {
        static getDerivedStateFromProps(e, t) {
          return t.prevWidth !== e.width
            ? { tileIndex: 0, prevWidth: e.width, lastArrowDirection: 0 }
            : null;
        }
        getMaxOffset() {
          let { width: e } = this.props,
            { scrollerWidth: t } = this.state;
          return Math.max(Math.floor(t - e), 0);
        }
        getSideOffset() {
          let { tileWidth: e, tileMargin: t } = this.props,
            i = this.getMaxOffset(),
            n = e + t;
          return i - Math.floor(i / n) * n;
        }
        getMaxIndex() {
          let { tileWidth: e, tileMargin: t } = this.props;
          return Math.round(this.getMaxOffset() / (e + t));
        }
        getOffset(e, t) {
          let { tileWidth: i, tileMargin: n } = this.props;
          return Math.min(
            e * (i + n) + (1 === t ? this.getSideOffset() : 0),
            this.getMaxOffset(),
          );
        }
        componentDidMount() {
          this.setScrollerWidth();
        }
        componentDidUpdate(e, t) {
          if (
            t.tileIndex !== this.state.tileIndex ||
            t.lastArrowDirection !== this.state.lastArrowDirection
          ) {
            var i, n, a;
            let { tileIndex: e } = this.state,
              t = this.getOffset(
                this.state.tileIndex,
                this.state.lastArrowDirection,
              );
            null === (i = this.advancedScrollerRef.current) ||
              void 0 === i ||
              i.scrollTo({ to: t, animate: !0 }),
              null === (n = (a = this.props).onScroll) ||
                void 0 === n ||
                n.call(a, { tileIndex: e });
          }
          e.width !== this.props.width && this.setScrollerWidth();
        }
        render() {
          let { tileIndex: e, lastArrowDirection: t } = this.state,
            {
              header: i,
              headerId: n,
              subHeader: a,
              headerContainerClassName: o,
              scrollContainerClassName: l,
            } = this.props,
            s = this.getMaxOffset();
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsxs)("div", {
                className: c()(h.headerContainer, o),
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)(u.Heading, {
                        id: n,
                        variant: "heading-lg/semibold",
                        children: i,
                      }),
                      null == a
                        ? null
                        : (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: h.subheader,
                            children: a,
                          }),
                    ],
                  }),
                  s > 0
                    ? (0, r.jsxs)("div", {
                        className: h.arrowsContainer,
                        children: [
                          (0, r.jsx)(f, {
                            direction: p.Z.Directions.LEFT,
                            onClick: this.prev,
                            className: c()(h.arrowLeft, {
                              [h.arrowDisabled]: 0 === e && 0 === t,
                            }),
                          }),
                          (0, r.jsx)(f, {
                            direction: p.Z.Directions.RIGHT,
                            onClick: this.next,
                            className: c()(h.arrowRight, {
                              [h.arrowDisabled]:
                                e === this.getMaxIndex() && 1 === t,
                            }),
                          }),
                        ],
                      })
                    : null,
                ],
              }),
              (0, r.jsx)("div", {
                className: c()(h.scrollerContainer, l),
                children: (0, r.jsx)(u.AdvancedScrollerNone, {
                  ref: this.advancedScrollerRef,
                  orientation: "horizontal",
                  className: h.scroller,
                  children: (0, r.jsx)("div", {
                    className: h.scroller,
                    ref: (e) => {
                      (this.tileScrollerRef.current = e),
                        this.setScrollerWidth();
                    },
                    children: this.props.children,
                  }),
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            m(this, "state", {
              tileIndex: 0,
              prevWidth: this.props.width,
              lastArrowDirection: 0,
              scrollerWidth: 0,
            }),
            m(this, "advancedScrollerRef", o.createRef()),
            m(this, "tileScrollerRef", o.createRef()),
            m(this, "setScrollerWidth", () => {
              let e = (0, s.findDOMNode)(this.tileScrollerRef.current);
              (0, d.k)(e, HTMLElement) &&
                e.offsetWidth !== this.state.scrollerWidth &&
                this.setState({ scrollerWidth: e.offsetWidth });
            }),
            m(this, "prev", () => {
              this.setState({
                tileIndex: Math.max(this.state.tileIndex - 1, 0),
                lastArrowDirection: 0,
              });
            }),
            m(this, "next", () => {
              this.setState({
                tileIndex: Math.min(
                  this.state.tileIndex + 1,
                  this.getMaxIndex(),
                ),
                lastArrowDirection: 1,
              });
            });
        }
      }
      t.Z = (0, _.Z)(g);
    },
    57716: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return c;
        },
      }),
        i(47120);
      var n = i(192379),
        a = i(434650),
        r = i(626135),
        o = i(132871),
        l = i(981631);
      function c(e) {
        let { collection: t } = e,
          [i, c] = n.useState(!1),
          s = (0, o.useApplicationDirectoryHistory)((e) => e.guildId),
          d = (0, a.O)((e) => {
            e && c(!0);
          });
        return (
          n.useEffect(() => {
            i &&
              r.default.track(l.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
                collection_id: t.id,
                guild_id: s,
              });
          }, [i, t, s]),
          d
        );
      }
    },
    578361: function (e, t, i) {
      i.d(t, {
        n: function () {
          return a;
        },
      });
      var n,
        a,
        r = i(200651),
        o = i(192379),
        l = i(120356),
        c = i.n(l),
        s = i(748780),
        d = i(215569),
        u = i(383583);
      ((n = a || (a = {}))[(n.RIGHT = -1)] = "RIGHT"),
        (n[(n.LEFT = 1)] = "LEFT");
      let _ = { friction: 7, tension: 40, clamp: !0 };
      class p extends o.PureComponent {
        componentWillEnter(e) {
          this._animated.setValue(-this.props.direction),
            s.Z.spring(this._animated, {
              toValue: 0,
              ...this.props.springSettings,
            }).start(e);
        }
        componentDidAppear() {
          this._animated.setValue(0);
        }
        componentWillLeave(e) {
          s.Z.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings,
          }).start(e);
        }
        getStyle() {
          let e = s.Z.accelerate({
            transform: [
              {
                translateX: this._animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "-100%"],
                }),
              },
            ],
          });
          return (
            this.props.fadeInOut &&
              (e.opacity = this._animated.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [0, 1, 0],
              })),
            e
          );
        }
        render() {
          return (0, r.jsx)(s.Z.div, {
            style: this.getStyle(),
            className: u.item,
            children: this.props.children,
          });
        }
        constructor(e) {
          var t, i, n;
          super(e),
            (t = this),
            (n = void 0),
            (i = "_animated") in t
              ? Object.defineProperty(t, i, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[i] = n),
            (this._animated = new s.Z.Value(-1 * e.direction));
        }
      }
      t.Z = (e) => {
        let {
          children: t,
          step: i,
          direction: n,
          className: a,
          springSettings: o = _,
          fadeInOut: l = !1,
        } = e;
        return (0, r.jsx)(d.W, {
          component: "div",
          className: c()(u.animator, a),
          children: (0, r.jsx)(
            p,
            { direction: n, springSettings: o, fadeInOut: l, children: t },
            i,
          ),
        });
      };
    },
    873199: function (e, t, i) {
      var n, a;
      i.d(t, {
        o: function () {
          return n;
        },
      }),
        i(47120),
        ((a = n || (n = {}))[(a.LIST = 1)] = "LIST"),
        (a[(a.LIST_WITH_IMAGE = 2)] = "LIST_WITH_IMAGE"),
        (a[(a.GALLERY = 3)] = "GALLERY"),
        (a[(a.EXPANDABLE_LIST = 4)] = "EXPANDABLE_LIST"),
        (a[(a.BANNER_CARDS = 5)] = "BANNER_CARDS"),
        (a[(a.SMALL_BANNER_CARDS = 6)] = "SMALL_BANNER_CARDS");
    },
    678099: function (e, t, i) {
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
    260346: function (e, t, i) {
      e.exports = {
        directoryContainer: "directoryContainer_da3f59",
        directoryContainerMobile: "directoryContainerMobile_da3f59",
        directoryContainerTablet: "directoryContainerTablet_da3f59",
        content: "content_da3f59",
        closeWrapper: "closeWrapper_da3f59",
        closeContent: "closeContent_da3f59",
        closeIcon: "closeIcon_da3f59",
        header: "header_da3f59",
        titleContainer: "titleContainer_da3f59",
        clickable: "clickable_da3f59",
        back: "back_da3f59",
        backIcon: "backIcon_da3f59",
        backHeader: "backHeader_da3f59",
      };
    },
    295519: function (e, t, i) {
      e.exports = {
        listingDescription: "listingDescription_d2c3da",
        bottomGuildCountContainer: "bottomGuildCountContainer_d2c3da",
      };
    },
    722261: function (e, t, i) {
      e.exports = {
        subheader: "subheader_ec1920",
        bullet: "bullet_ec1920",
        listingDescription: "listingDescription_ec1920",
      };
    },
    88325: function (e, t, i) {
      e.exports = {
        container: "container_b9f1af",
        image: "image_b9f1af",
        header: "header_b9f1af",
      };
    },
    484759: function (e, t, i) {
      e.exports = {
        wrapper: "wrapper_b3d866",
        icons: "icons_b3d866",
        iconMask: "iconMask_b3d866",
        icon: "icon_b3d866",
        iconSmall: "iconSmall_b3d866",
        iconLarge: "iconLarge_b3d866",
        moreGuilds: "moreGuilds_b3d866",
        moreGuildsSmall: "moreGuildsSmall_b3d866",
        moreGuildsLarge: "moreGuildsLarge_b3d866",
        defaultIcon: "defaultIcon_b3d866",
      };
    },
    746220: function (e, t, i) {
      e.exports = {
        container: "container_d9c848",
        hasImage: "hasImage_d9c848",
        imageContainer: "imageContainer_d9c848",
        image: "image_d9c848",
        textContainer: "textContainer_d9c848",
        animatesOnHoverContainer: "animatesOnHoverContainer_d9c848",
        clickable: "clickable_d9c848",
        topRowContainer: "topRowContainer_d9c848",
        icon: "icon_d9c848",
        headerContainer: "headerContainer_d9c848",
        subheader: "subheader_d9c848",
      };
    },
    496008: function (e, t, i) {
      e.exports = {
        container: "container_da6719",
        spinnerContainer: "spinnerContainer_da6719",
        spinner: "spinner_da6719",
        loading: "loading_da6719",
      };
    },
    425871: function (e, t, i) {
      e.exports = { search: "search_aabd24" };
    },
    400435: function (e, t, i) {
      e.exports = {
        collectionsContainer: "collectionsContainer_ca364e",
        categoryList: "categoryList_ca364e",
      };
    },
    300739: function (e, t, i) {
      e.exports = {
        container: "container_d7acc7",
        category: "category_d7acc7",
        icon: "icon_d7acc7",
      };
    },
    885391: function (e, t, i) {
      e.exports = {
        card: "card_e90143",
        collectionBottomMargin: "collectionBottomMargin_e90143",
        textContainer: "textContainer_e90143",
        verticallyCenter: "verticallyCenter_e90143",
        imageContainer: "imageContainer_e90143",
        image: "image_e90143",
        collectionTitle: "collectionTitle_e90143",
        applicationName: "applicationName_e90143",
        applicationDescription: "applicationDescription_e90143",
        applicationCta: "applicationCta_e90143",
        paginationControls: "paginationControls_e90143",
        paginationArrow: "paginationArrow_e90143",
      };
    },
    805540: function (e, t, i) {
      e.exports = {
        itemsContainer: "itemsContainer_a8e652",
        itemContainer: "itemContainer_a8e652",
        seoAnchor: "seoAnchor_a8e652",
      };
    },
    867187: function (e, t, i) {
      e.exports = {
        header: "header_b4a57c",
        list: "list_b4a57c",
        item: "item_b4a57c",
        linkCard: "linkCard_b4a57c",
        linkDescription: "linkDescription_b4a57c",
        linkCta: "linkCta_b4a57c",
        cardHeader: "cardHeader_b4a57c",
      };
    },
    288321: function (e, t, i) {
      e.exports = { topMargin: "topMargin_f41d5b" };
    },
    384552: function (e, t, i) {
      e.exports = {
        container: "container_a0e1d7",
        searchBarContainer: "searchBarContainer_a0e1d7",
        heading: "heading_a0e1d7",
        searchBar: "searchBar_a0e1d7",
        rightImage: "rightImage_a0e1d7",
      };
    },
    62567: function (e, t, i) {
      e.exports = {
        container: "container_f9d8eb",
        content: "content_f9d8eb",
        button: "button_f9d8eb",
        image: "image_f9d8eb",
      };
    },
    493004: function (e, t, i) {
      e.exports = { partnerBadge: "partnerBadge_de92a5" };
    },
    635712: function (e, t, i) {
      e.exports = {
        headerContainer: "headerContainer_b503b8",
        subheader: "subheader_b503b8",
        scrollerContainer: "scrollerContainer_b503b8",
        arrowsContainer: "arrowsContainer_b503b8",
        scrollerButton: "scrollerButton_b503b8",
        scrollerButtonArrow: "scrollerButtonArrow_b503b8",
        scroller: "scroller_b503b8",
        arrowLeft: "arrowLeft_b503b8 arrow_b503b8",
        arrowRight: "arrowRight_b503b8 arrow_b503b8",
        arrowDisabled: "arrowDisabled_b503b8",
      };
    },
    383583: function (e, t, i) {
      e.exports = { animator: "animator_abd0f1", item: "item_abd0f1" };
    },
    252646: function (e, t, i) {
      e.exports = {
        logo: "logo_b0f834",
        title: "title_b0f834",
        header: "header_b0f834",
      };
    },
    262309: function (e, t, i) {
      e.exports = {
        root: "root_db3abe",
        carouselContainer: "carouselContainer_db3abe",
        carousel: "carousel_db3abe",
        pagination: "pagination_db3abe",
        themedPagination: "themedPagination_db3abe pagination_db3abe",
        controls: "controls_db3abe",
        arrowHitbox: "arrowHitbox_db3abe",
        arrow: "arrow_db3abe",
        arrowHitboxPadding: "arrowHitboxPadding_db3abe",
        dots: "dots_db3abe",
        dotNormal: "dotNormal_db3abe dot_db3abe",
        dotSelected: "dotSelected_db3abe dot_db3abe",
      };
    },
    485270: function (e, t, i) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=eecbe593cb08e26ba8dc.js.map
