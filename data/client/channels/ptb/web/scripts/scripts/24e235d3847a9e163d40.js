"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83051"],
  {
    289575: function (e) {
      e.exports = "/assets/f3b668d24838c7031ba4.svg";
    },
    371411: function (e) {
      e.exports = "/assets/7b87609b13dad1dd3389.svg";
    },
    223356: function (e, t, n) {
      n.d(t, {
        Tj: function () {
          return d;
        },
        WG: function () {
          return u;
        },
        ZD: function () {
          return h;
        },
        pD: function () {
          return m;
        },
      }),
        n(653041);
      var i = n(990547);
      n(804098);
      var r = n(544891),
        a = n(729345),
        o = n(210887);
      n(358085);
      var l = n(573261),
        s = n(981631),
        c = n(388032);
      async function u() {
        return (await r.tn.get({ url: s.ANM.BUG_REPORTS })).body;
      }
      function m(e) {
        var t, n;
        return null !==
          (n =
            null !== (t = null == e ? void 0 : e.name) && void 0 !== t
              ? t
              : "" + (null == e ? void 0 : e.squad)) && void 0 !== n
          ? n
          : "";
      }
      function d() {
        return [
          {
            title: c.intl.string(c.t.VwIij4),
            description: c.intl.format(c.t.DOP8yc, {}),
            emoji: "801497159479722084",
            value: 0,
          },
          {
            title: c.intl.string(c.t.rYfJoq),
            description: c.intl.format(c.t["+LEfDA"], {}),
            emoji: "410336837563973632",
            value: 1,
          },
          {
            title: c.intl.string(c.t.Ia0skZ),
            description: c.intl.format(c.t.D4rbgY, {}),
            emoji: "841420679643529296",
            value: 2,
          },
          {
            title: c.intl.string(c.t.KGsyFx),
            description: c.intl.format(c.t.Kmg64O, {}),
            emoji: "827645852352512021",
            value: 3,
          },
        ];
      }
      async function h(e, t, n) {
        var r, c;
        let u = [
          { name: "name", value: e.name },
          { name: "priority", value: "".concat(e.priority) },
          {
            name: "override_platform_information",
            value: "".concat(t.overridePlatformInformation),
          },
          { name: "theme", value: o.Z.theme },
        ];
        "" !== e.description &&
          u.push({ name: "description", value: e.description }),
          "" !== e.url && u.push({ name: "external_url", value: e.url });
        let m =
          null === (r = e.feature) || void 0 === r ? void 0 : r.asana_inbox_id;
        null != m &&
          "" !== m &&
          u.push({ name: "asana_inbox_id", value: "".concat(m) });
        let d = null === (c = e.feature) || void 0 === c ? void 0 : c.name;
        null != d && "" !== d && u.push({ name: "feature_name", value: d }),
          t.overridePlatformInformation &&
            (u.push({ name: "device", value: t.device }),
            u.push({ name: "os", value: t.operatingSystem }),
            u.push({ name: "os_version", value: t.operatingSystemVersion }),
            u.push({ name: "client_version", value: t.clientVersion }),
            u.push({ name: "client_build_number", value: t.clientBuildNumber }),
            u.push({
              name: "release_channel",
              value: window.GLOBAL_ENV.RELEASE_CHANNEL,
            }),
            u.push({ name: "locale", value: t.locale })),
          (0, a.E)(s.GU0.WEB_APP);
        try {
          return await l.Z.post({
            url: s.ANM.BUG_REPORTS,
            attachments: n,
            fields: u,
            trackedActionData: {
              event: i.NetworkActionNames.BUG_REPORT_SUBMIT,
              properties: { priority: e.priority, asana_inbox_id: m },
            },
          });
        } catch (e) {
          return e;
        }
      }
    },
    225452: function (e, t, n) {
      n.d(t, {
        D: function () {
          return i;
        },
      });
      function i(e) {
        return e.map((e, t) => {
          var n, i;
          return {
            file: e.file,
            name:
              null !== (i = e.id) && void 0 !== i ? i : "attachment_".concat(t),
            filename: null === (n = e.file) || void 0 === n ? void 0 : n.name,
          };
        });
      }
    },
    115072: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        a = n(772848),
        o = n(442837),
        l = n(780384),
        s = n(481060),
        c = n(53281),
        u = n(476326),
        m = n(273031),
        d = n(898463),
        h = n(118012),
        p = n(951394),
        f = n(210887),
        x = n(594174),
        v = n(768581),
        g = n(358085),
        j = n(223356),
        I = n(225452),
        C = n(388032),
        _ = n(549667),
        y = n(289575),
        b = n(371411);
      let S = [
        "Android",
        "iOS",
        "Windows Mobile",
        "Windows",
        "Linux",
        "Mac OS X",
      ].map((e) => ({ label: e, value: e }));
      function N(e) {
        var t, N, T, w, P;
        let { transitionState: k, onClose: B } = e,
          E = r.useRef(null),
          L = r.useRef(null),
          [D, O] = r.useState(""),
          [R, F] = r.useState(""),
          [Z, A] = r.useState(),
          [G, M] = r.useState(""),
          [V, H] = r.useState([]),
          [W, z] = r.useState(),
          [q, U] = r.useState(),
          [K, X] = r.useState(!1),
          [Y, J] = r.useState(""),
          [Q, $] = r.useState(
            (function (e) {
              switch (e) {
                case "windows":
                  return "Windows";
                case "macos":
                  return "Mac OS X";
                case "linux":
                  return "Linux";
              }
              return "";
            })((0, g.getOS)()),
          ),
          [ee, et] = r.useState(""),
          [en, ei] = r.useState(""),
          [er, ea] = r.useState(""),
          [eo, el] = r.useState(""),
          [es, ec] = r.useState(!1),
          [eu, em] = r.useState(!1),
          [ed, eh] = r.useState(!1),
          ep = (0, o.e7)([f.Z], () => f.Z.theme),
          ef = (0, o.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          ex = () => {
            null == B || B();
          },
          ev = (e) => {
            H(V.filter((t) => t.id !== e));
          };
        async function eg() {
          var e;
          if ((eh(!1), "" === D || null == Z)) {
            ec(!0);
            return;
          }
          let t =
            null == W
              ? void 0
              : null === (e = W.features) || void 0 === e
                ? void 0
                : e.find((e) => (0, j.pD)(e) === q);
          em(!0), ec(!1);
          let r = (0, I.D)(
              V.map((e) => {
                let { item: t } = e;
                return t;
              }),
            ),
            a =
              !0 === K
                ? {
                    overridePlatformInformation: K,
                    device: Y,
                    operatingSystem: Q,
                    operatingSystemVersion: ee,
                    clientVersion: en,
                    clientBuildNumber: er,
                    locale: eo,
                  }
                : { overridePlatformInformation: K },
            o = await (0, j.ZD)(
              { name: D, description: R, priority: Z, feature: t, url: G },
              a,
              r,
            ).catch(() => eh(!0));
          em(!1),
            null != o && o.ok
              ? (ef && window.open(o.body.permalink_url, "_blank"),
                ex(),
                (0, s.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("64648")
                    .then(n.bind(n, 81155));
                  return (t) => (0, i.jsx)(e, { ...t, asanaTask: o.body });
                }))
              : eh(!0);
        }
        r.useEffect(() => {
          async function e() {
            z(await (0, j.WG)());
          }
          ef && e();
        }, [ef]),
          r.useEffect(() => {
            if (V.length > 0) {
              var e;
              null === (e = L.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }, [V]);
        let ej = (0, l.wj)(ep) ? y : b;
        return (0, i.jsx)(s.ModalRoot, {
          className: _.modalRoot,
          transitionState: k,
          "aria-label": C.intl.string(C.t.mCCdws),
          children: (0, i.jsx)(s.ModalContent, {
            className: _.modalContent,
            paddingFix: !1,
            children: (0, i.jsx)("div", {
              className: _.container,
              children: (0, i.jsx)(s.HeadingLevel, {
                forceLevel: 1,
                component: (0, i.jsx)("div", {
                  className: _.sidebarContainer,
                  children: (0, i.jsx)(h.Z, {
                    strong: !0,
                    color: h.Z.Colors.HEADER_PRIMARY,
                    size: h.Z.Sizes.SIZE_24,
                    children: (0, i.jsx)(s.H, {
                      children: C.intl.string(C.t["5Lqopa"]),
                    }),
                  }),
                }),
                children: (0, i.jsxs)("div", {
                  className: _.contentContainer,
                  children: [
                    (0, i.jsx)("img", {
                      className: _.contentIcon,
                      alt: "",
                      src: ej,
                    }),
                    (0, i.jsxs)("form", {
                      className: _.form,
                      onSubmit: eg,
                      children: [
                        (0, i.jsx)(s.FormItem, {
                          error:
                            es && "" === D ? C.intl.string(C.t.EkokLy) : null,
                          title: C.intl.string(C.t.OZRgj4),
                          className: _.formInput,
                          children: (0, i.jsx)(s.TextInput, {
                            placeholder: "Something is broken on this screen.",
                            type: "text",
                            value: D,
                            maxLength: 100,
                            onChange: O,
                          }),
                        }),
                        (0, i.jsxs)(s.FormItem, {
                          title: C.intl.string(C.t["1SplHx"]),
                          className: _.formInput,
                          children: [
                            (0, i.jsx)(s.TextArea, {
                              placeholder: "What did you expect to see?",
                              value: R,
                              onChange: F,
                            }),
                            (0, i.jsx)(s.Text, {
                              variant: "text-sm/normal",
                              color: "info-help-text",
                              children:
                                "You can add additional information/media on the ticket after submitting",
                            }),
                          ],
                        }),
                        (0, i.jsx)(s.FormItem, {
                          error:
                            es && void 0 === Z
                              ? C.intl.string(C.t.EkokLy)
                              : null,
                          title: C.intl.string(C.t.xMXLdX),
                          className: _.formInput,
                          children: (0, i.jsx)(s.SingleSelect, {
                            renderOptionLabel: (e) =>
                              (function (e) {
                                let t = e.priority;
                                return (0, i.jsxs)("div", {
                                  className: _.formPriorityImageContainer,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: _.formPriorityTitleContainer,
                                      children: [
                                        (0, i.jsx)("img", {
                                          alt: "",
                                          className: _.formPriorityImage,
                                          src: (0, v.gT)({
                                            id: t.emoji,
                                            animated: !0,
                                            size: 48,
                                          }),
                                        }),
                                        (0, i.jsx)(s.Text, {
                                          color: "header-primary",
                                          variant: "text-sm/semibold",
                                          className: _.formPriorityTitle,
                                          children: t.title,
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)(s.Text, {
                                      color: "header-secondary",
                                      variant: "text-xs/normal",
                                      className: _.formPriorityDescription,
                                      children: t.description,
                                    }),
                                  ],
                                });
                              })(e),
                            onChange: A,
                            options: (0, j.Tj)().map((e) => ({
                              priority: e,
                              value: e.value,
                              label: e.title,
                            })),
                            value: Z,
                            maxVisibleItems: 3,
                            closeOnSelect: !0,
                          }),
                        }),
                        ef &&
                          (0, i.jsx)(s.FormItem, {
                            title: C.intl.string(C.t["77VVd3"]),
                            className: _.formInput,
                            children: (0, i.jsx)(s.SearchableSelect, {
                              value: q,
                              options:
                                null !==
                                  (P =
                                    null == (t = W)
                                      ? void 0
                                      : null === (w = t.features) ||
                                          void 0 === w
                                        ? void 0
                                        : null ===
                                              (T = w.filter(
                                                (e) => "" !== (0, j.pD)(e),
                                              )) || void 0 === T
                                          ? void 0
                                          : null ===
                                                (N = T.map((e) => {
                                                  var t;
                                                  return {
                                                    label:
                                                      null !== (t = e.name) &&
                                                      void 0 !== t
                                                        ? t
                                                        : "",
                                                    value: (0, j.pD)(e),
                                                  };
                                                })) || void 0 === N
                                            ? void 0
                                            : N.sort((e, t) =>
                                                e.label.localeCompare(t.label),
                                              )) && void 0 !== P
                                  ? P
                                  : [],
                              isDisabled: null == W,
                              onChange: (e) => U(e),
                            }),
                          }),
                        (0, i.jsx)(s.FormItem, {
                          title: C.intl.string(C.t["7p5pqq"]),
                          className: _.formInput,
                          children: (0, i.jsx)(s.TextInput, {
                            placeholder: C.intl.string(C.t.HewMzs),
                            type: "text",
                            value: G,
                            maxLength: 5e3,
                            onChange: M,
                          }),
                        }),
                        (0, i.jsx)(s.FormItem, {
                          className: _.formInput,
                          children: (0, i.jsx)(s.Checkbox, {
                            value: K,
                            onChange: (e, t) => X(t),
                            children: (0, i.jsx)(s.Text, {
                              variant: "text-sm/normal",
                              color: "info-help-text",
                              children: C.intl.string(C.t.ayhqiI),
                            }),
                          }),
                        }),
                        K
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(s.FormItem, {
                                  title: C.intl.string(C.t.rrI4Tk),
                                  className: _.formInput,
                                  children: (0, i.jsx)(s.TextInput, {
                                    placeholder: "Device",
                                    value: Y,
                                    onChange: (e) => J(e),
                                  }),
                                }),
                                (0, i.jsx)(s.FormItem, {
                                  title: C.intl.string(C.t.kcHxi4),
                                  className: _.formInput,
                                  children: (0, i.jsx)(s.SingleSelect, {
                                    value: Q,
                                    options: S,
                                    onChange: (e) => $(e),
                                  }),
                                }),
                                (0, i.jsx)(s.FormItem, {
                                  title: C.intl.string(C.t.rEtxdn),
                                  className: _.formInput,
                                  children: (0, i.jsx)(s.TextInput, {
                                    placeholder: "Operating System Version",
                                    value: ee,
                                    onChange: (e) => et(e),
                                  }),
                                }),
                                (0, i.jsx)(s.FormItem, {
                                  title: C.intl.string(C.t["wy1M/v"]),
                                  className: _.formInput,
                                  children: (0, i.jsx)(s.TextInput, {
                                    placeholder: "Client Version",
                                    value: en,
                                    onChange: (e) => ei(e),
                                  }),
                                }),
                                (0, i.jsx)(s.FormItem, {
                                  title: C.intl.string(C.t.f7kbVl),
                                  className: _.formInput,
                                  children: (0, i.jsx)(s.TextInput, {
                                    placeholder: "Client Build Number",
                                    value: er,
                                    onChange: (e) => ea(e),
                                  }),
                                }),
                                (0, i.jsx)(s.FormItem, {
                                  title: C.intl.string(C.t["4Z5+zs"]),
                                  className: _.formInput,
                                  children: (0, i.jsx)(s.TextInput, {
                                    placeholder: "Locale",
                                    value: eo,
                                    onChange: (e) => el(e),
                                  }),
                                }),
                              ],
                            })
                          : null,
                        (0, i.jsxs)(s.Button, {
                          className: _.uploadButton,
                          children: [
                            C.intl.string(C.t.HVxmOD),
                            (0, i.jsx)(c.Z, {
                              ref: E,
                              onChange: (e) => {
                                var t, n;
                                (null === (n = e.currentTarget) || void 0 === n
                                  ? void 0
                                  : null === (t = n.files) || void 0 === t
                                    ? void 0
                                    : t[0]) != null &&
                                  H([
                                    ...V,
                                    ...Array.from(e.currentTarget.files).map(
                                      (e) =>
                                        new u.ZP({
                                          id: (0, a.Z)(),
                                          file: e,
                                          platform: u.ow.WEB,
                                        }),
                                    ),
                                  ]);
                              },
                              multiple: !0,
                            }),
                          ],
                        }),
                        V.length > 0
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("div", {
                                  className: _.imageOptionsContainer,
                                  children: (0, i.jsx)(s.FormTitle, {
                                    children: "Preview",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  ref: L,
                                  className: _.attachmentsGrid,
                                  children:
                                    V.length > 0 &&
                                    V.map((e) =>
                                      (0, i.jsxs)(
                                        "div",
                                        {
                                          className: _.attachmentsGridItem,
                                          children: [
                                            (0, i.jsx)(s.Text, {
                                              variant: "text-sm/normal",
                                              children: e.filename,
                                            }),
                                            (0, i.jsxs)("div", {
                                              className: _.attachmentContainer,
                                              children: [
                                                (0, i.jsx)(d.r, { upload: e }),
                                                (0, i.jsx)("div", {
                                                  className: _.toolBar,
                                                  children: (0, i.jsx)(p.ZP, {
                                                    children: (0, i.jsx)(m.Z, {
                                                      tooltip: C.intl.string(
                                                        C.t.vN7REx,
                                                      ),
                                                      onClick: () => ev(e.id),
                                                      dangerous: !0,
                                                      children: (0, i.jsx)(
                                                        s.TrashIcon,
                                                        {
                                                          size: "md",
                                                          color: "currentColor",
                                                        },
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        e.id,
                                      ),
                                    ),
                                }),
                              ],
                            })
                          : null,
                        ed
                          ? (0, i.jsx)(s.Text, {
                              color: "text-danger",
                              variant: "text-sm/normal",
                              children: "Something went wrong, try again!",
                            })
                          : null,
                      ],
                    }),
                    (0, i.jsxs)(s.ModalFooter, {
                      className: _.submitContainer,
                      children: [
                        (0, i.jsx)(s.Button, {
                          className: _.formButton,
                          look: s.ButtonLooks.BLANK,
                          onClick: ex,
                          children: (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: C.intl.string(C.t["ETE/oK"]),
                          }),
                        }),
                        (0, i.jsx)(s.Button, {
                          submitting: eu,
                          className: _.formButton,
                          onClick: eg,
                          children: "Submit and Open Report",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    549667: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_d76ce1",
        modalContent: "modalContent_d76ce1",
        sidebarContainer: "sidebarContainer_d76ce1",
        contentContainer: "contentContainer_d76ce1",
        contentIcon: "contentIcon_d76ce1",
        form: "form_d76ce1",
        formInput: "formInput_d76ce1",
        formPriorityImageContainer: "formPriorityImageContainer_d76ce1",
        formPriorityTitleContainer: "formPriorityTitleContainer_d76ce1",
        formPriorityTitle: "formPriorityTitle_d76ce1",
        formPriorityDescription: "formPriorityDescription_d76ce1",
        formPriorityImage: "formPriorityImage_d76ce1",
        container: "container_d76ce1",
        formButton: "formButton_d76ce1",
        imageOptionsContainer: "imageOptionsContainer_d76ce1",
        attachmentsGrid: "attachmentsGrid_d76ce1",
        attachmentsGridItem: "attachmentsGridItem_d76ce1",
        toolBar: "toolBar_d76ce1",
        attachmentContainer: "attachmentContainer_d76ce1",
        uploadButton: "uploadButton_d76ce1",
        submitContainer: "submitContainer_d76ce1",
      };
    },
  },
]);
//# sourceMappingURL=24e235d3847a9e163d40.js.map
