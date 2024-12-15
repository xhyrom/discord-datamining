(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50721"],
  {
    418435: function (e, t, i) {
      var s = i(106234);
      e.exports = function (e) {
        return e && e.length ? s(e) : [];
      };
    },
    86836: function (e) {
      "use strict";
      e.exports = "/assets/bad967454bb23a6adcc8.svg";
    },
    18192: function (e) {
      "use strict";
      e.exports = "/assets/5b204848c019cb28a775.svg";
    },
    387572: function (e) {
      "use strict";
      e.exports = "/assets/886bab997cad31e3ff06.svg";
    },
    617285: function (e) {
      "use strict";
      e.exports = "/assets/106345cc58042181b8fb.svg";
    },
    112847: function (e) {
      "use strict";
      e.exports = "/assets/e7681bff22fc3aa4a4bd.svg";
    },
    516954: function (e) {
      "use strict";
      e.exports = "/assets/3e87b61a306227219abc.svg";
    },
    210172: function (e, t, i) {
      "use strict";
      i.r(t), i(47120);
      var s = i(200651),
        a = i(192379),
        n = i(442837),
        r = i(481060),
        l = i(367907),
        o = i(313201),
        d = i(296386),
        c = i(416162),
        m = i(434404),
        u = i(999382),
        x = i(449543),
        g = i(681518),
        h = i(627573),
        p = i(814008),
        v = i(259674),
        f = i(981631),
        N = i(731455),
        T = i(388032),
        j = i(89388),
        C = i(438825);
      t.default = (e) => {
        let { transitionState: t, onClose: I } = e,
          { guild: S, guildMetadata: b } = (0, n.cj)([u.Z], () =>
            u.Z.getProps(),
          ),
          E = (0, o.Dt)(),
          [_, y] = a.useState(!1),
          [k, R] = a.useState(0),
          [F, A] = a.useState(!1);
        if (
          (a.useEffect(() => {
            l.ZP.trackWithMetadata(f.rMx.OPEN_MODAL, {
              type: f.jXE.DISCOVERY_SETUP_SUCCESS_MODAL,
            });
          }, []),
          null == S)
        )
          return null;
        let w = (0, s.jsx)(g.Z, { guild: S, headerId: E }),
          D = (0, s.jsx)(x.Z, { guild: S, guildMetadata: b, headerId: E }),
          P = (0, s.jsx)(p.Z, { guild: S, guildMetadata: b, headerId: E }),
          Z = (0, s.jsx)(h.Z, { guild: S, headerId: E, onAgreedChange: A }),
          O = (0, s.jsx)("img", {
            alt: "",
            src: C,
            className: j.footerImage,
            width: 240,
          }),
          M = async () => {
            if (0 === k) {
              y(!0);
              try {
                await m.Z.saveGuild(
                  S.id,
                  { description: S.description },
                  { isForDiscovery: !0, throwErr: !0 },
                ),
                  R(k + 1),
                  (0, v.Nx)(v.tK.DESCRIPTION, v.tK.CATEGORIES, S.id);
              } catch (e) {}
            } else if (1 === k)
              R(k + 1), (0, v.Nx)(v.tK.CATEGORIES, v.tK.TAGS, S.id);
            else if (2 === k) {
              y(!0);
              try {
                await (0, d.Vv)({
                  guildId: S.id,
                  primaryCategoryId: b.primaryCategoryId,
                  keywords: b.keywords,
                  emojiDiscoverabilityEnabled: b.emojiDiscoverabilityEnabled,
                  partnerActionedTimestamp: b.partnerActionedTimestamp,
                  partnerApplicationTimestamp: b.partnerApplicationTimestamp,
                  isPublished: b.isPublished,
                  reasonsToJoin: b.reasonsToJoin,
                  socialLinks: b.socialLinks,
                  about: b.about,
                }),
                  R(k + 1),
                  (0, v.Nx)(v.tK.TAGS, v.tK.AGREE_TO_RULES, S.id);
              } catch (e) {}
            }
            y(!1);
          },
          L = [
            {
              modalContent: w,
              disableNextStep: null == S.description,
              overviewTitle: T.intl.string(T.t.RHP0kJ),
            },
            {
              modalContent: D,
              disableNextStep:
                b.primaryCategoryId === N.o3 || null == b.primaryCategoryId,
              overviewTitle: T.intl.string(T.t.Rv9An5),
            },
            {
              modalContent: P,
              disableNextStep: 0 === b.keywords.length,
              overviewTitle: T.intl.string(T.t["0PJZXl"]),
            },
            {
              modalContent: Z,
              disableNextStep: !F,
              overviewTitle: T.intl.string(T.t.Q8OFNz),
            },
          ];
        return (0, s.jsx)(c.Z, {
          stepData: L,
          title: T.intl.string(T.t.uyuIen),
          transitionState: t,
          onClose: I,
          completeButtonText: T.intl.string(T.t.wYi2lJ),
          onNextPressed: M,
          onPrevPressed: () => {
            R(k - 1);
          },
          forceStep: k,
          onComplete: () => {
            let e = S.features;
            !S.hasFeature(f.oNc.DISCOVERABLE) && e.add(f.oNc.DISCOVERABLE),
              m.Z.saveGuild(S.id, { features: e, description: S.description }),
              (0, r.openModalLazy)(async () => {
                let { default: e } = await i.e("263").then(i.bind(i, 477520));
                return (t) => (0, s.jsx)(e, { ...t, guild: S });
              });
          },
          overviewFooter: O,
          submitting: _,
          sequencerClassName: j.container,
        });
      };
    },
    449543: function (e, t, i) {
      "use strict";
      var s = i(200651);
      i(192379);
      var a = i(120356),
        n = i.n(a),
        r = i(481060),
        l = i(296386),
        o = i(150192),
        d = i(285888),
        c = i(450474),
        m = i(731455),
        u = i(388032),
        x = i(89388);
      t.Z = (e) => {
        let { guild: t, guildMetadata: i, headerId: a } = e,
          g = o.Z.getPrimaryCategories().map((e) => {
            let { categoryId: t, name: i } = e;
            return { value: t, label: i };
          });
        return (0, s.jsxs)("div", {
          className: x.container,
          children: [
            (0, s.jsxs)("div", {
              className: x.content,
              children: [
                (0, s.jsx)("div", { className: n()(x.stepImage, x.tagImage) }),
                (0, s.jsx)(r.Heading, {
                  variant: "heading-xl/semibold",
                  className: x.header,
                  id: a,
                  children: u.intl.string(u.t.Rv9An5),
                }),
                (0, s.jsx)(r.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: x.headerCaption,
                  children: u.intl.string(u.t.MMEJFB),
                }),
              ],
            }),
            (0, s.jsxs)(r.FormSection, {
              className: x.form,
              children: [
                (0, s.jsx)(r.FormTitle, {
                  required: !0,
                  children: u.intl.string(u.t.Rv9An5),
                }),
                (0, s.jsx)(r.FormText, {
                  type: r.FormTextTypes.DESCRIPTION,
                  className: x.description,
                  children: u.intl.string(u.t.CE5Gyc),
                }),
                (0, s.jsx)(d.Z, {
                  value:
                    i.primaryCategoryId === m.o3 ? null : i.primaryCategoryId,
                  placeholder: u.intl.string(u.t.XqMe3N),
                  searchable: !0,
                  clearable: !1,
                  options: g,
                  onChange: (e) => {
                    var i;
                    (null == t ? void 0 : t.id) != null &&
                      l.TA(
                        null == t ? void 0 : t.id,
                        null !== (i = null == e ? void 0 : e.value) &&
                          void 0 !== i
                          ? i
                          : m.o3,
                      );
                  },
                  maxMenuHeight: 250,
                }),
              ],
            }),
            (0, s.jsxs)(r.FormSection, {
              className: x.form,
              children: [
                (0, s.jsx)(r.FormTitle, {
                  children: u.intl.string(u.t.pcrcpK),
                }),
                (0, s.jsx)(r.FormText, {
                  type: r.FormTextTypes.DESCRIPTION,
                  className: x.description,
                  children: u.intl.string(u.t["4jnzlZ"]),
                }),
                (0, s.jsx)(c.Z, {
                  guild: t,
                  guildMetadata: i,
                  menuPlacement: d.Z.MenuPlacements.TOP,
                }),
              ],
            }),
          ],
        });
      };
    },
    681518: function (e, t, i) {
      "use strict";
      var s = i(200651);
      i(192379);
      var a = i(120356),
        n = i.n(a),
        r = i(442837),
        l = i(481060),
        o = i(434404),
        d = i(999382),
        c = i(259674),
        m = i(981631),
        u = i(388032),
        x = i(89388);
      t.Z = (e) => {
        var t;
        let { guild: i, headerId: a } = e,
          g = (0, r.e7)([d.Z], () => "description" in d.Z.getErrors()),
          h = g
            ? u.intl.format(u.t.loup7u, {
                onLearnMoreClick: () => {
                  (0, c.lW)({
                    articleId: m.BhN.SERVER_DISCOVERY_GUIDELINES,
                    guildId: i.id,
                    modalStep: c.tK.DESCRIPTION,
                  });
                },
              })
            : null;
        return (0, s.jsxs)("div", {
          className: x.container,
          children: [
            (0, s.jsxs)("div", {
              className: x.content,
              children: [
                (0, s.jsx)("div", {
                  className: n()(x.stepImage, x.pencilImage),
                }),
                (0, s.jsx)(l.Heading, {
                  variant: "heading-xl/semibold",
                  className: x.header,
                  id: a,
                  children: u.intl.string(u.t.HY9iWF),
                }),
                (0, s.jsx)(l.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: x.headerCaption,
                  children: u.intl.string(u.t.zTZSv7),
                }),
              ],
            }),
            (0, s.jsxs)(l.FormSection, {
              className: x.form,
              children: [
                (0, s.jsx)(l.FormTitle, {
                  required: !0,
                  children: u.intl.string(u.t["RSfm+v"]),
                }),
                (0, s.jsx)(l.FormText, {
                  type: l.FormTextTypes.DESCRIPTION,
                  className: x.description,
                  children: u.intl.string(u.t["6jNp19"]),
                }),
                (0, s.jsx)(l.TextArea, {
                  autoFocus: !0,
                  value: null !== (t = i.description) && void 0 !== t ? t : "",
                  placeholder: u.intl.string(u.t.Nvfows),
                  onChange: (e) => {
                    o.Z.updateGuild({ description: e });
                  },
                  maxLength: 120,
                  className: x.textArea,
                  error: h,
                }),
              ],
            }),
          ],
        });
      };
    },
    627573: function (e, t, i) {
      "use strict";
      i(47120);
      var s = i(200651),
        a = i(192379),
        n = i(120356),
        r = i.n(n),
        l = i(481060),
        o = i(259674),
        d = i(981631),
        c = i(388032),
        m = i(89388);
      t.Z = (e) => {
        let { headerId: t, guild: i, onAgreedChange: n } = e,
          [u, x] = a.useState(!1),
          [g, h] = a.useState(!1),
          [p, v] = a.useState(!1);
        a.useEffect(() => {
          u && g && p ? n(!0) : n(!1);
        }, [u, g, p, n]);
        let f = c.intl.format(c.t.S2lVJS, {
          onCommunityGuidelinesClick: () =>
            (0, o.lW)({
              articleId: d.BhN.PUBLIC_GUILD_GUILDLINES,
              guildId: i.id,
              modalStep: o.tK.AGREE_TO_RULES,
            }),
          onDiscoveryGuidelinesClick: () =>
            (0, o.lW)({
              articleId: d.BhN.SERVER_DISCOVERY_GUIDELINES,
              guildId: i.id,
              modalStep: o.tK.AGREE_TO_RULES,
            }),
        });
        return (0, s.jsxs)("div", {
          className: m.container,
          children: [
            (0, s.jsxs)("div", {
              className: m.content,
              children: [
                (0, s.jsx)("div", {
                  className: r()(m.stepImage, m.checkImage),
                }),
                (0, s.jsx)(l.Heading, {
                  variant: "heading-xl/semibold",
                  className: m.header,
                  id: t,
                  children: c.intl.string(c.t.Q8OFNz),
                }),
                (0, s.jsx)(l.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: m.headerCaption,
                  children: c.intl.string(c.t["20piMT"]),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: m.form,
              children: [
                (0, s.jsx)(l.FormTitle, {
                  required: !0,
                  children: c.intl.string(c.t.HsM7a2),
                }),
                (0, s.jsx)("div", {
                  className: m.checkboxWrapper,
                  children: (0, s.jsxs)(l.Checkbox, {
                    type: l.Checkbox.Types.ROW,
                    value: u,
                    align: l.Checkbox.Aligns.TOP,
                    onChange: () => x(!u),
                    children: [
                      (0, s.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        className: m.checkboxTitle,
                        children: c.intl.string(c.t.jIi9go),
                      }),
                      (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: c.intl.string(c.t["4uUAXl"]),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: m.checkboxWrapper,
                  children: (0, s.jsxs)(l.Checkbox, {
                    type: l.Checkbox.Types.ROW,
                    align: l.Checkbox.Aligns.TOP,
                    value: g,
                    onChange: () => h(!g),
                    children: [
                      (0, s.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        className: m.checkboxTitle,
                        children: c.intl.string(c.t.iwnCh4),
                      }),
                      (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: c.intl.string(c.t.UKFzER),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: m.checkboxWrapper,
                  children: (0, s.jsxs)(l.Checkbox, {
                    type: l.Checkbox.Types.ROW,
                    align: l.Checkbox.Aligns.TOP,
                    value: p,
                    onChange: () => v(!p),
                    children: [
                      (0, s.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        className: m.checkboxTitle,
                        children: f,
                      }),
                      (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: c.intl.string(c.t.u0Go2t),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    814008: function (e, t, i) {
      "use strict";
      i(47120);
      var s = i(200651),
        a = i(192379),
        n = i(120356),
        r = i.n(n),
        l = i(418435),
        o = i.n(l),
        d = i(442837),
        c = i(481060),
        m = i(558324),
        u = i(367907),
        x = i(938502),
        g = i(296386),
        h = i(626135),
        p = i(999382),
        v = i(259674),
        f = i(203377),
        N = i(981631),
        T = i(388032),
        j = i(89388);
      let C = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u;
      t.Z = (e) => {
        var t;
        let { guild: i, guildMetadata: n, headerId: l } = e,
          [I, S] = a.useState(!1),
          b = (0, d.e7)([p.Z], () => "keywords" in p.Z.getErrors()),
          E = (e) => {
            if (C.test(e)) S(!1);
            else {
              S(!0);
              return;
            }
            if ((null == i ? void 0 : i.id) == null) return;
            let { keywords: t } = n;
            !(t.length >= f.G7) && g.zH(i.id, o()([...t, e.toLowerCase()]));
          },
          _ = (e) => {
            E(e),
              h.default.track(N.rMx.DISCOVERY_SETUP_POPULAR_TAG_CLICKED, {
                tag: e,
                primary_category_id: n.primaryCategoryId,
                ...(0, u.hH)(i.id),
              });
          },
          y = I
            ? T.intl.string(T.t["t/mtnZ"])
            : b
              ? T.intl.format(T.t.loup7u, {
                  onLearnMoreClick: () => {
                    (0, v.lW)({
                      articleId: N.BhN.SERVER_DISCOVERY_GUIDELINES,
                      guildId: i.id,
                      modalStep: v.tK.TAGS,
                    });
                  },
                })
              : null,
          k = new Set(n.keywords);
        return (0, s.jsxs)("div", {
          className: j.container,
          children: [
            (0, s.jsxs)("div", {
              className: j.content,
              children: [
                (0, s.jsx)("div", { className: r()(j.stepImage, j.tagImage) }),
                (0, s.jsx)(c.Heading, {
                  variant: "heading-xl/semibold",
                  className: j.header,
                  id: l,
                  children: T.intl.string(T.t["0PJZXl"]),
                }),
                (0, s.jsx)(c.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: j.headerCaption,
                  children: T.intl.string(T.t.MMEJFB),
                }),
              ],
            }),
            (0, s.jsxs)(c.FormSection, {
              className: j.form,
              children: [
                (0, s.jsx)(c.FormTitle, {
                  required: !0,
                  children: T.intl.string(T.t["0PJZXl"]),
                }),
                (0, s.jsx)(c.FormText, {
                  type: c.FormTextTypes.DESCRIPTION,
                  className: j.description,
                  children: T.intl.string(T.t.ztiTDA),
                }),
                (0, s.jsx)(m.Z, {
                  className: r()(j.tags, { [j.error]: null != y }),
                  tags: n.keywords,
                  onRemoveTag: (e) => {
                    if ((null == i ? void 0 : i.id) == null) return;
                    let t = [...n.keywords];
                    t.splice(e, 1), g.zH(i.id, t);
                  },
                  onAddTag: E,
                  maxTags: f.G7,
                  maxTaxLength: f._0,
                  placeholder:
                    (null == n
                      ? void 0
                      : null === (t = n.keywords) || void 0 === t
                        ? void 0
                        : t.length) === 0
                      ? T.intl.string(T.t.EL4Lho)
                      : "",
                }),
                (0, s.jsx)(c.Text, {
                  className: j.error,
                  color: "text-danger",
                  variant: "text-sm/normal",
                  children: y,
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: j.form,
              children: (0, s.jsx)(c.FormTitle, {
                children: T.intl.string(T.t.sF28Oj),
              }),
            }),
            (0, s.jsx)("div", {
              className: j.tagContainer,
              children: (0, x.P5)(n.primaryCategoryId).map((e) =>
                (0, s.jsx)(
                  c.Anchor,
                  {
                    onClick: () => _(e),
                    className: r()(j.tag, { [j.usedTag]: k.has(e) }),
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          ],
        });
      };
    },
    416162: function (e, t, i) {
      "use strict";
      i(47120);
      var s = i(200651),
        a = i(192379),
        n = i(120356),
        r = i.n(n),
        l = i(481060),
        o = i(313201),
        d = i(388032),
        c = i(733424);
      let m = (e) => {
        let { index: t, title: i, selected: a } = e;
        return (0, s.jsxs)("div", {
          className: r()(c.overviewStep, { [c.selected]: a }),
          children: [
            (0, s.jsx)(l.Text, {
              className: c.stepIndex,
              variant: "text-sm/normal",
              children: t + 1,
            }),
            (0, s.jsx)(l.Text, {
              variant: "text-md/normal",
              className: c.stepTitle,
              children: i,
            }),
          ],
        });
      };
      t.Z = (e) => {
        let {
            className: t,
            title: i,
            stepData: n,
            transitionState: u,
            onClose: x,
            completeButtonText: g,
            overviewFooter: h,
            onNextPressed: p,
            onPrevPressed: v,
            onComplete: f,
            sequencerClassName: N,
            initialStep: T = 0,
            forceStep: j,
            submitting: C = !1,
            autoCloseOnComplete: I = !0,
          } = e,
          [S, b] = a.useState([]),
          [E, _] = a.useState(T),
          y = (0, o.Dt)();
        a.useEffect(() => {
          b([...Array(n.length).keys()]);
        }, [n.length]);
        let k = null != j ? j : E,
          R = n[k],
          F = 0 === k,
          A = k === n.length - 1,
          w = null != g ? g : d.intl.string(d.t.i4jeWV),
          D = a.useCallback(() => {
            null == v || v(), _(k - 1);
          }, [v, k, _]);
        return (0, s.jsxs)(l.ModalRoot, {
          size: l.ModalSize.MEDIUM,
          className: r()(c.container, t),
          transitionState: u,
          "aria-labelledby": y,
          children: [
            (0, s.jsxs)("div", {
              className: c.overviewSidebar,
              children: [
                (0, s.jsx)(l.Heading, {
                  id: y,
                  variant: "heading-xl/semibold",
                  className: c.header,
                  children: i,
                }),
                (0, s.jsx)("div", {
                  className: c.overviewSteps,
                  children: n.map((e, t) =>
                    (0, s.jsx)(
                      m,
                      { index: t, title: e.overviewTitle, selected: t === k },
                      t,
                    ),
                  ),
                }),
                h,
              ],
            }),
            (0, s.jsxs)("div", {
              className: c.modal,
              children: [
                (0, s.jsxs)(l.ModalContent, {
                  children: [
                    (0, s.jsx)(l.ModalCloseButton, {
                      focusProps: { offset: { top: 4, right: 4, left: 4 } },
                      onClick: x,
                      className: c.closeButton,
                    }),
                    (0, s.jsx)(l.Sequencer, {
                      step: k,
                      steps: S,
                      sideMargin: 24,
                      verticalMargin: 24,
                      className: r()(c.sequencer, N),
                      innerClassName: c.innerSequencer,
                      children: R.modalContent,
                    }),
                  ],
                }),
                (0, s.jsxs)(l.ModalFooter, {
                  className: c.footer,
                  children: [
                    (0, s.jsx)(l.Button, {
                      type: "submit",
                      submitting: C,
                      onClick: () => {
                        A ? (f(), I && x()) : (null == p || p(), _(k + 1));
                      },
                      color: l.Button.Colors.GREEN,
                      disabled: R.disableNextStep,
                      children: A ? w : d.intl.string(d.t.PDTjLC),
                    }),
                    F
                      ? null
                      : (0, s.jsx)(l.Button, {
                          look: l.Button.Looks.LINK,
                          color: l.Button.Colors.PRIMARY,
                          size: l.Button.Sizes.MIN,
                          onClick: D,
                          children: d.intl.string(d.t["13/7kZ"]),
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    89388: function (e, t, i) {
      "use strict";
      e.exports = {
        container: "container_d68e21",
        content: "content_d68e21",
        headerCaption: "headerCaption_d68e21",
        form: "form_d68e21",
        description: "description_d68e21",
        header: "header_d68e21",
        checkboxTitle: "checkboxTitle_d68e21",
        textArea: "textArea_d68e21",
        footerImage: "footerImage_d68e21",
        stepImage: "stepImage_d68e21",
        tags: "tags_d68e21",
        error: "error_d68e21",
        checkboxWrapper: "checkboxWrapper_d68e21",
        tagContainer: "tagContainer_d68e21",
        tag: "tag_d68e21",
        usedTag: "usedTag_d68e21",
        checkImage: "checkImage_d68e21",
        tagImage: "tagImage_d68e21",
        pencilImage: "pencilImage_d68e21",
      };
    },
    733424: function (e, t, i) {
      "use strict";
      e.exports = {
        container: "container_d65fcf noScroll_d65fcf",
        sequencer: "sequencer_d65fcf",
        innerSequencer: "innerSequencer_d65fcf",
        modal: "modal_d65fcf",
        overviewSidebar: "overviewSidebar_d65fcf",
        header: "header_d65fcf",
        closeButton: "closeButton_d65fcf",
        footer: "footer_d65fcf",
        overviewSteps: "overviewSteps_d65fcf",
        overviewStep: "overviewStep_d65fcf",
        stepTitle: "stepTitle_d65fcf",
        stepIndex: "stepIndex_d65fcf",
        selected: "selected_d65fcf",
      };
    },
  },
]);
//# sourceMappingURL=bdfd926dc3a12f0b88ca.js.map
